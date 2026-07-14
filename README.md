# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**689 providers** — 233 🟢 operational · 142 🟡 degraded · 312 🔴 down · 2 ⚫ unknown

_Updated 2026-07-14 05:36 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (233)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.60% | 99.60% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.44% | 99.44% | 99.98% | 99.98% | 1048 ms | → 1.00x | 1 | 4m | 11d ago | 2m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.44% | 99.44% | 93.42% | 93.42% | 3354 ms | → 1.00x | 2 | 6m | 11d ago | 2m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.44% | 99.44% | 99.74% | 99.74% | 1531 ms | → 1.00x | 6 | 1h 5m | 6d ago | 1m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.44% | 99.44% | 99.65% | 99.65% | 56 ms | → 1.00x | 0 | — | — | 1m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.44% | 99.44% | 99.92% | 99.92% | 639 ms | → 1.00x | 0 | — | — | 1m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.44% | 99.44% | 49.74% | 49.74% | 1111 ms | → 1.00x | 6 | 35m | 15d ago | 1m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.44% | 99.44% | 76.22% | 76.22% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.44% | 99.44% | 44.95% | 44.95% | 104 ms | → 1.00x | 0 | — | — | 1m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.44% | 99.44% | 99.80% | 99.80% | 591 ms | → 1.00x | 0 | — | — | 5m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.44% | 99.44% | 99.65% | 99.65% | 1643 ms | → 1.00x | 0 | — | — | 5m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.44% | 99.44% | 98.94% | 98.94% | 1102 ms | → 1.00x | 1 | 0s | 12d ago | 5m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.43% | 99.43% | 99.02% | 99.02% | 3125 ms | → 1.00x | 4 | 0s | 15d ago | 5m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.43% | 99.43% | 99.98% | 99.98% | 116 ms | → 1.00x | 1 | 0s | 22d ago | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.43% | 99.43% | 1.90% | 1.90% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.43% | 99.43% | 56.98% | 56.98% | 1114 ms | → 1.00x | 6 | 0s | 20d ago | 5m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.43% | 99.43% | 0.11% | 0.11% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.43% | 99.43% | 99.87% | 99.87% | 2091 ms | → 1.00x | 2 | 0s | 13d ago | 5m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.43% | 99.43% | 22.30% | 22.30% | 2704 ms | → 1.00x | 20 | 0s | 7d ago | 5m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.43% | 99.43% | 99.68% | 99.68% | 2099 ms | → 1.00x | 0 | — | — | 5m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.43% | 99.43% | 24.53% | 24.53% | 1589 ms | → 1.00x | 1 | 0s | 21d ago | 5m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.43% | 99.43% | 99.77% | 99.77% | 742 ms | → 1.00x | 0 | — | — | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.43% | 99.43% | 99.37% | 99.37% | 1684 ms | → 1.00x | 0 | — | — | 4m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.43% | 99.43% | 5.16% | 5.16% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.43% | 99.43% | 30.20% | 30.20% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.42% | 99.42% | 99.61% | 99.61% | 300 ms | → 1.00x | 0 | — | — | 4m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.42% | 99.42% | 63.14% | 63.14% | 1247 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.42% | 99.42% | 71.79% | 71.79% | 1007 ms | → 1.00x | 0 | — | — | 4m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.42% | 99.42% | 63.68% | 63.68% | 1664 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.42% | 99.42% | 99.97% | 99.97% | 1306 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.42% | 99.42% | 99.18% | 99.18% | 846 ms | → 1.00x | 0 | — | — | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.42% | 99.42% | 58.17% | 58.17% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.42% | 99.42% | 99.00% | 99.00% | 1890 ms | → 1.00x | 1 | 30m | 28d ago | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.42% | 99.42% | 89.57% | 89.57% | 1297 ms | → 1.00x | 0 | — | — | 4m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.42% | 99.42% | 96.69% | 96.69% | 172 ms | → 1.00x | 0 | — | — | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.42% | 99.42% | 98.16% | 98.16% | 3068 ms | → 1.00x | 0 | — | — | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.42% | 99.42% | 43.48% | 43.48% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.42% | 99.42% | 92.20% | 92.20% | 1915 ms | → 1.00x | 6 | 0s | 9d ago | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.42% | 99.42% | 99.95% | 99.95% | 249 ms | → 1.00x | 0 | — | — | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.42% | 99.42% | 99.78% | 99.78% | 2329 ms | → 1.00x | 0 | — | — | 4m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.42% | 99.42% | 98.81% | 98.81% | 533 ms | → 1.00x | 0 | — | — | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.42% | 99.42% | 99.87% | 99.87% | 860 ms | → 1.00x | 1 | 0s | 18d ago | 3m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.42% | 99.42% | 98.35% | 98.35% | 923 ms | → 1.00x | 1 | 1h 40m | 26d ago | 4m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.42% | 99.42% | 93.73% | 93.73% | 62 ms | → 1.00x | 1 | 1h 22m | 21d ago | 3m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.42% | 99.42% | 29.98% | 29.98% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.42% | 99.42% | 98.78% | 98.78% | 1062 ms | → 1.00x | 1 | 0s | 5d ago | 4m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.41% | 99.41% | 98.47% | 98.47% | 704 ms | → 1.00x | 0 | — | — | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.41% | 99.41% | 98.16% | 98.16% | 120 ms | → 1.00x | 4 | 0s | 13d ago | 3m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.41% | 99.41% | 98.43% | 98.43% | 470 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.41% | 99.41% | 99.08% | 99.08% | 669 ms | → 1.00x | 0 | — | — | 3m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.41% | 99.41% | 31.33% | 31.33% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.41% | 99.41% | 99.70% | 99.70% | 1396 ms | → 1.00x | 0 | — | — | 3m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.41% | 99.41% | 6.05% | 6.05% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.41% | 99.41% | 98.88% | 98.88% | 962 ms | → 1.00x | 2 | 1h 30m | 6d ago | 3m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.41% | 99.41% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.41% | 99.41% | 99.94% | 99.94% | 966 ms | → 1.00x | 0 | — | — | 3m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.41% | 99.41% | 99.34% | 99.34% | 4247 ms | → 1.00x | 11 | 5m | 6d ago | 3m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.41% | 99.41% | 99.94% | 99.94% | 1398 ms | → 1.00x | 1 | 0s | 30d ago | 3m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.41% | 99.41% | 98.56% | 98.56% | 1554 ms | → 1.00x | 4 | 1h 59m | 16d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.41% | 99.41% | 99.92% | 99.92% | 1691 ms | → 1.00x | 0 | — | — | 3m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.41% | 99.41% | 99.45% | 99.45% | 238 ms | → 1.00x | 2 | 3h 1m | 12d ago | 3m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.41% | 99.41% | 100.00% | 100.00% | 751 ms | → 1.00x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.41% | 99.41% | 100.00% | 100.00% | 216 ms | → 1.00x | 0 | — | — | 3m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.41% | 99.41% | 99.88% | 99.88% | 1571 ms | → 1.00x | 0 | — | — | 3m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.41% | 99.41% | 91.90% | 91.90% | 798 ms | → 1.00x | 20 | 1h 59m | 18d ago | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.41% | 99.41% | 99.93% | 99.93% | 1140 ms | → 1.00x | 1 | 0s | 6d ago | 2m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.41% | 99.41% | 24.52% | 24.52% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.41% | 99.41% | 98.72% | 98.72% | 710 ms | → 1.00x | 0 | — | — | 3m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.41% | 99.41% | 99.98% | 99.98% | 893 ms | → 1.00x | 0 | — | — | 3m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.41% | 99.41% | 87.87% | 87.87% | 692 ms | → 1.00x | 4 | 8m | 18d ago | 3m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.41% | 99.41% | 99.98% | 99.98% | 1333 ms | → 1.00x | 0 | — | — | 3m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.41% | 99.41% | 99.67% | 99.67% | 1854 ms | → 1.00x | 1 | 0s | 8d ago | 2m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.41% | 99.41% | 16.67% | 16.67% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.41% | 99.41% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 3m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.41% | 99.41% | 99.48% | 99.48% | 506 ms | → 1.00x | 1 | 4m | 10d ago | 2m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.41% | 99.41% | 99.89% | 99.89% | 1636 ms | → 1.00x | 0 | — | — | 3m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.41% | 99.41% | 99.66% | 99.66% | 778 ms | → 1.00x | 2 | 0s | 26d ago | 3m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.41% | 99.41% | 60.72% | 60.72% | 732 ms | → 1.00x | 1 | 1d 11h | 30d ago | 3m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.41% | 99.41% | 99.92% | 99.92% | 662 ms | → 1.00x | 1 | 0s | 14d ago | 3m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.41% | 99.41% | 100.00% | 100.00% | 1110 ms | → 1.00x | 0 | — | — | 2m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.39% | 99.39% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.39% | 99.39% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.26% | 99.26% | 93.57% | 93.57% | 2513 ms | → 1.00x | 1 | 4m | 11d ago | 2m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.26% | 99.26% | 98.78% | 98.78% | 2596 ms | → 1.00x | 21 | 5s | 11d ago | 2m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.26% | 99.26% | 99.49% | 99.49% | 2853 ms | → 1.00x | 3 | 9h 27m | 17d ago | 1m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.26% | 99.26% | 75.23% | 75.23% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.26% | 99.26% | 99.28% | 99.28% | 207 ms | → 1.00x | 3 | 0s | 7d ago | 1m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.25% | 99.25% | 99.74% | 99.74% | 2252 ms | → 1.00x | 2 | 0s | 21d ago | 1m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.25% | 99.25% | 96.43% | 96.43% | 2018 ms | → 1.00x | 3 | 1d 4h | 5d ago | 1m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.25% | 99.25% | 99.81% | 99.81% | 866 ms | → 1.00x | 0 | — | — | 1m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.25% | 99.25% | 99.94% | 99.94% | 647 ms | → 1.00x | 0 | — | — | 1m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.25% | 99.25% | 99.96% | 99.96% | 476 ms | → 1.00x | 0 | — | — | 1m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.25% | 99.25% | 99.92% | 99.92% | 1016 ms | → 1.00x | 1 | 0s | 5d ago | 1m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.25% | 99.25% | 89.73% | 89.73% | 1535 ms | → 1.00x | 0 | — | — | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.25% | 99.25% | 22.33% | 22.33% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.25% | 99.25% | 99.97% | 99.97% | 1865 ms | → 1.00x | 0 | — | — | 5m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.25% | 99.25% | 99.49% | 99.49% | 820 ms | → 1.00x | 0 | — | — | 5m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.24% | 99.24% | 38.65% | 38.65% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.24% | 99.24% | 99.90% | 99.90% | 1186 ms | → 1.00x | 1 | 0s | 22d ago | 5m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.24% | 99.24% | 80.20% | 80.20% | 1032 ms | → 1.00x | 3 | 0s | 7d ago | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.24% | 99.24% | 99.85% | 99.85% | 2582 ms | → 1.00x | 0 | — | — | 5m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.24% | 99.24% | 99.48% | 99.48% | 2328 ms | → 1.00x | 0 | — | — | 5m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.24% | 99.24% | 99.95% | 99.95% | 1439 ms | → 1.00x | 1 | 0s | 26d ago | 5m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.24% | 99.24% | 99.87% | 99.87% | 230 ms | → 1.00x | 0 | — | — | 4m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.24% | 99.24% | 97.57% | 97.57% | 1734 ms | → 1.00x | 7 | 0s | 8d ago | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.24% | 99.24% | 25.33% | 25.33% | 752 ms | → 1.00x | 3 | 0s | 18d ago | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.24% | 99.24% | 50.15% | 50.15% | 712 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.24% | 99.24% | 31.58% | 31.58% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.23% | 99.23% | 74.11% | 74.11% | 565 ms | → 1.00x | 6 | 1h 20m | 6d ago | 4m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.23% | 99.23% | 98.73% | 98.73% | 645 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.23% | 99.23% | 68.50% | 68.50% | 1111 ms | → 1.00x | 2 | 10m | 24d ago | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.23% | 99.23% | 93.26% | 93.26% | 364 ms | → 1.00x | 0 | — | — | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.23% | 99.23% | 64.92% | 64.92% | 320 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.23% | 99.23% | 65.57% | 65.57% | 862 ms | → 1.00x | 0 | — | — | 4m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.23% | 99.23% | 99.88% | 99.88% | 1206 ms | → 1.00x | 0 | — | — | 4m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.23% | 99.23% | 38.36% | 38.36% | 1920 ms | → 1.00x | 11 | 3h 50m | 26d ago | 4m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.23% | 99.23% | 99.35% | 99.35% | 1884 ms | → 1.00x | 0 | — | — | 4m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.23% | 99.23% | 69.43% | 69.43% | 1208 ms | → 1.00x | 2 | 0s | 20d ago | 4m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.23% | 99.23% | 60.60% | 60.60% | 1370 ms | → 1.00x | 0 | — | — | 4m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.23% | 99.23% | 84.58% | 84.58% | 1976 ms | → 1.00x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.23% | 99.23% | 83.46% | 83.46% | 1628 ms | → 1.00x | 2 | 0s | 7d ago | 4m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.23% | 99.23% | 98.00% | 98.00% | 302 ms | → 1.00x | 1 | 12h 2m | 29d ago | 4m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.23% | 99.23% | 90.32% | 90.32% | 1017 ms | → 1.00x | 0 | — | — | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.23% | 99.23% | 97.03% | 97.03% | 274 ms | → 1.00x | 2 | 0s | 25d ago | 4m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.23% | 99.23% | 97.00% | 97.00% | 330 ms | → 1.00x | 0 | — | — | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.23% | 99.23% | 66.50% | 66.50% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.23% | 99.23% | 99.86% | 99.86% | 668 ms | → 1.00x | 0 | — | — | 4m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.23% | 99.23% | 98.38% | 98.38% | 1480 ms | → 1.00x | 2 | 3h 26m | 18d ago | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.23% | 99.23% | 99.89% | 99.89% | 1638 ms | → 1.00x | 0 | — | — | 4m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.23% | 99.23% | 99.30% | 99.30% | 504 ms | → 1.00x | 0 | — | — | 4m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.23% | 99.23% | 98.90% | 98.90% | 1072 ms | → 1.00x | 1 | 1h 60m | 23d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.22% | 99.22% | 99.64% | 99.64% | 1382 ms | → 1.00x | 1 | 4h 60m | 25d ago | 4m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.22% | 99.22% | 99.83% | 99.83% | 747 ms | → 1.00x | 0 | — | — | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.22% | 99.22% | 26.43% | 26.43% | 2018 ms | → 1.00x | 1 | 15d 7h | 30d ago | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.22% | 99.22% | 98.96% | 98.96% | 958 ms | → 1.00x | 1 | 29m | 22d ago | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.22% | 99.22% | 98.47% | 98.47% | 2020 ms | → 1.00x | 2 | 0s | 13d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.22% | 99.22% | 99.87% | 99.87% | 769 ms | → 1.00x | 0 | — | — | 3m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.22% | 99.22% | 98.83% | 98.83% | 486 ms | → 1.00x | 0 | — | — | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.22% | 99.22% | 86.85% | 86.85% | 2190 ms | → 1.00x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.22% | 99.22% | 100.00% | 100.00% | 1827 ms | → 1.00x | 0 | — | — | 4m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.22% | 99.22% | 98.69% | 98.69% | 752 ms | → 1.00x | 0 | — | — | 4m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.22% | 99.22% | 96.94% | 96.94% | 1006 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.22% | 99.22% | 98.37% | 98.37% | 1166 ms | → 1.00x | 0 | — | — | 4m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.22% | 99.22% | 97.07% | 97.07% | 925 ms | → 1.00x | 2 | 1d 2h | 18d ago | 3m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.22% | 99.22% | 99.67% | 99.67% | 818 ms | → 1.00x | 1 | 0s | 29d ago | 3m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.22% | 99.22% | 98.75% | 98.75% | 1137 ms | → 1.00x | 7 | 20s | 10d ago | 3m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.22% | 99.22% | 100.00% | 100.00% | 736 ms | → 1.00x | 0 | — | — | 3m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.22% | 99.22% | 99.51% | 99.51% | 252 ms | → 1.00x | 0 | — | — | 3m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.22% | 99.22% | 100.00% | 100.00% | 883 ms | → 1.00x | 0 | — | — | 3m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.21% | 99.21% | 99.95% | 99.95% | 1916 ms | → 1.00x | 1 | 0s | 25d ago | 3m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.21% | 99.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.21% | 99.21% | 100.00% | 100.00% | 240 ms | → 1.00x | 0 | — | — | 3m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.21% | 99.21% | 99.76% | 99.76% | 2097 ms | → 1.00x | 0 | — | — | 3m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.21% | 99.21% | 99.61% | 99.61% | 386 ms | → 1.00x | 1 | 0s | 22d ago | 3m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.21% | 99.21% | 99.97% | 99.97% | 671 ms | → 1.00x | 0 | — | — | 3m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.21% | 99.21% | 99.97% | 99.97% | 2517 ms | → 1.00x | 0 | — | — | 3m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.21% | 99.21% | 99.85% | 99.85% | 1273 ms | → 1.00x | 1 | 3m | 7d ago | 3m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.21% | 99.21% | 100.00% | 100.00% | 537 ms | → 1.00x | 0 | — | — | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.21% | 99.21% | 100.00% | 100.00% | 784 ms | → 1.00x | 0 | — | — | 3m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.21% | 99.21% | 99.85% | 99.85% | 944 ms | → 1.00x | 0 | — | — | 3m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.21% | 99.21% | 99.92% | 99.92% | 330 ms | → 1.00x | 0 | — | — | 3m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.21% | 99.21% | 100.00% | 100.00% | 783 ms | → 1.00x | 0 | — | — | 3m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.21% | 99.21% | 99.98% | 99.98% | 1398 ms | → 1.00x | 0 | — | — | 3m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.21% | 99.21% | 99.97% | 99.97% | 1407 ms | → 1.00x | 0 | — | — | 3m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.21% | 99.21% | 99.94% | 99.94% | 1047 ms | → 1.00x | 0 | — | — | 3m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.21% | 99.21% | 99.77% | 99.77% | 606 ms | → 1.00x | 3 | 0s | 7d ago | 3m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.19% | 99.19% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.07% | 99.07% | 99.98% | 99.98% | 955 ms | → 1.00x | 1 | 4m | 11d ago | 2m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.07% | 99.07% | 68.59% | 68.59% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.07% | 99.07% | 98.29% | 98.29% | 2749 ms | → 1.00x | 0 | — | — | 1m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.07% | 99.07% | 99.76% | 99.76% | 225 ms | → 1.00x | 0 | — | — | 1m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.07% | 99.07% | 17.47% | 17.47% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.07% | 99.07% | 70.89% | 70.89% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.07% | 99.07% | 99.74% | 99.74% | 1490 ms | → 1.00x | 1 | 4s | 8d ago | 1m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.07% | 99.07% | 99.58% | 99.58% | 2307 ms | → 1.00x | 19 | 2m | 8d ago | 1m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.07% | 99.07% | 99.90% | 99.90% | 783 ms | → 1.00x | 0 | — | — | 1m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.07% | 99.07% | 99.73% | 99.73% | 239 ms | → 1.00x | 10 | 10m | 21d ago | 1m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.06% | 99.06% | 98.00% | 98.00% | 1176 ms | → 1.00x | 0 | — | — | 5m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.06% | 99.06% | 99.91% | 99.91% | 1627 ms | → 1.00x | 0 | — | — | 5m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.06% | 99.06% | 99.58% | 99.58% | 1180 ms | → 1.00x | 1 | 2h | 5d ago | 5m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.05% | 99.05% | 99.34% | 99.34% | 2164 ms | → 1.00x | 2 | 13h 25m | 29d ago | 5m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.05% | 99.05% | 88.17% | 88.17% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.05% | 99.05% | 77.28% | 77.28% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.05% | 99.05% | 66.42% | 66.42% | 1678 ms | → 1.00x | 1 | 2h 38m | 24d ago | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.05% | 99.05% | 24.54% | 24.54% | 996 ms | → 1.00x | 1 | 0s | 28d ago | 4m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.05% | 99.05% | 24.63% | 24.63% | 2484 ms | → 1.00x | 1 | 0s | 25d ago | 4m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.04% | 99.04% | 54.70% | 54.70% | 338 ms | → 1.00x | 2 | 0s | 24d ago | 4m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.04% | 99.04% | 99.09% | 99.09% | 224 ms | → 1.00x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.04% | 99.04% | 26.84% | 26.84% | 1568 ms | → 1.00x | 0 | — | — | 4m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.04% | 99.04% | 24.91% | 24.91% | 544 ms | → 1.00x | 2 | 0s | 18d ago | 4m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.04% | 99.04% | 96.88% | 96.88% | 1571 ms | → 1.00x | 0 | — | — | 4m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.04% | 99.04% | 89.40% | 89.40% | 1851 ms | → 1.00x | 0 | — | — | 4m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.03% | 99.03% | 94.26% | 94.26% | 360 ms | → 1.00x | 0 | — | — | 4m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.03% | 99.03% | 91.09% | 91.09% | 326 ms | → 1.00x | 4 | 0s | 16d ago | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.03% | 99.03% | 99.31% | 99.31% | 1376 ms | → 1.00x | 0 | — | — | 4m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.03% | 99.03% | 97.21% | 97.21% | 2482 ms | → 1.00x | 0 | — | — | 4m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.03% | 99.03% | 98.66% | 98.66% | 1217 ms | → 1.00x | 1 | 0s | 22d ago | 4m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.03% | 99.03% | 56.85% | 56.85% | 1175 ms | → 1.00x | 8 | 2h 1m | 18d ago | 4m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.03% | 99.03% | 98.73% | 98.73% | 361 ms | → 1.00x | 0 | — | — | 4m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.03% | 99.03% | 76.90% | 76.90% | 475 ms | → 1.00x | 1 | 0s | 22d ago | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.03% | 99.03% | 98.74% | 98.74% | 660 ms | → 1.00x | 0 | — | — | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.03% | 99.03% | 64.61% | 64.61% | 2330 ms | → 1.00x | 3 | 3d 19h | 13d ago | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.03% | 99.03% | 98.56% | 98.56% | 2010 ms | → 1.00x | 0 | — | — | 4m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.03% | 99.03% | 98.81% | 98.81% | 40 ms | → 1.00x | 4 | 38m | 20d ago | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.03% | 99.03% | 55.08% | 55.08% | 2325 ms | → 1.00x | 33 | 54s | 6d ago | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.03% | 99.03% | 95.85% | 95.85% | 1624 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.03% | 99.03% | 99.74% | 99.74% | 915 ms | → 1.00x | 0 | — | — | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.03% | 99.03% | 96.80% | 96.80% | 699 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.03% | 99.03% | 43.99% | 43.99% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.03% | 99.03% | 97.80% | 97.80% | 1804 ms | → 1.00x | 0 | — | — | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.03% | 99.03% | 99.93% | 99.93% | 212 ms | → 1.00x | 1 | 0s | 7d ago | 3m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.03% | 99.03% | 28.78% | 28.78% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.03% | 99.03% | 99.82% | 99.82% | 629 ms | → 1.00x | 1 | 0s | 16d ago | 3m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.03% | 99.03% | 99.86% | 99.86% | 641 ms | → 1.00x | 0 | — | — | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.03% | 99.03% | 97.48% | 97.48% | 941 ms | → 1.00x | 1 | 0s | 6d ago | 4m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.02% | 99.02% | 97.87% | 97.87% | 103 ms | → 1.00x | 0 | — | — | 3m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.02% | 99.02% | 93.61% | 93.61% | 367 ms | → 1.00x | 56 | 7m | 7d ago | 3m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.02% | 99.02% | 100.00% | 100.00% | 1133 ms | → 1.00x | 0 | — | — | 3m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.02% | 99.02% | 89.89% | 89.89% | 126 ms | → 1.00x | 2 | 0s | 6d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.02% | 99.02% | 99.97% | 99.97% | 356 ms | → 1.00x | 0 | — | — | 3m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.02% | 99.02% | 98.04% | 98.04% | 1441 ms | → 1.00x | 0 | — | — | 3m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.02% | 99.02% | 99.10% | 99.10% | 1849 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.02% | 99.02% | 100.00% | 100.00% | 850 ms | → 1.00x | 0 | — | — | 3m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.02% | 99.02% | 99.67% | 99.67% | 1711 ms | → 1.00x | 0 | — | — | 3m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.01% | 99.01% | 99.95% | 99.95% | 491 ms | → 1.00x | 0 | — | — | 3m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.01% | 99.01% | 96.87% | 96.87% | 1424 ms | → 1.00x | 1 | 2h 1m | 26d ago | 3m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.01% | 99.01% | 100.00% | 100.00% | 670 ms | → 1.00x | 0 | — | — | 2m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.01% | 99.01% | 100.00% | 100.00% | 681 ms | → 1.00x | 0 | — | — | 2m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.01% | 99.01% | 99.94% | 99.94% | 2352 ms | → 1.00x | 0 | — | — | 2m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.01% | 99.01% | 99.85% | 99.85% | 707 ms | → 1.00x | 3 | 0s | 7d ago | 3m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.01% | 99.01% | 99.94% | 99.94% | 605 ms | → 1.00x | 0 | — | — | 3m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.01% | 99.01% | 99.86% | 99.86% | 891 ms | → 1.00x | 1 | 0s | 22d ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (142)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 98.89% | 98.89% | 36.33% | 36.33% | 2162 ms | → 1.00x | 3 | 2m | 11d ago | 2m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 98.88% | 98.88% | 99.75% | 99.75% | 160 ms | → 1.00x | 0 | — | — | 1m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.88% | 98.88% | 95.68% | 95.68% | 2537 ms | → 1.00x | 2 | 4d 7h | 22d ago | 1m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 98.88% | 98.88% | 99.60% | 99.60% | 1980 ms | → 1.00x | 1 | 2s | 7d ago | 1m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 98.87% | 98.87% | 99.90% | 99.90% | 150 ms | → 1.00x | 0 | — | — | 5m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 98.87% | 98.87% | 76.88% | 76.88% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 98.87% | 98.87% | 100.00% | 100.00% | 968 ms | → 1.00x | 0 | — | — | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 98.87% | 98.87% | 98.92% | 98.92% | 1828 ms | → 1.00x | 0 | — | — | 5m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.86% | 98.86% | 97.94% | 97.94% | 1980 ms | → 1.00x | 2 | 30m | 10d ago | 5m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 98.86% | 98.86% | 97.28% | 97.28% | 1020 ms | → 1.00x | 0 | — | — | 5m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 98.86% | 98.86% | 96.73% | 96.73% | 2852 ms | → 1.00x | 1 | 0s | 25d ago | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.86% | 98.86% | 99.67% | 99.67% | 2852 ms | → 1.00x | 5 | 5h 48m | 6d ago | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 98.85% | 98.85% | 96.32% | 96.32% | 1264 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 98.85% | 98.85% | 62.65% | 62.65% | 1282 ms | → 1.00x | 0 | — | — | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.85% | 98.85% | 81.07% | 81.07% | 1456 ms | → 1.00x | 0 | — | — | 4m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 98.85% | 98.85% | 77.97% | 77.97% | 434 ms | → 1.00x | 1 | 0s | 6d ago | 4m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 98.85% | 98.85% | 82.26% | 82.26% | 1780 ms | → 1.00x | 0 | — | — | 4m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 98.84% | 98.84% | 99.83% | 99.83% | 1213 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.83% | 98.83% | 98.11% | 98.11% | 2679 ms | → 1.00x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 98.83% | 98.83% | 98.85% | 98.85% | 1955 ms | → 1.00x | 0 | — | — | 4m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 98.83% | 98.83% | 97.00% | 97.00% | 270 ms | → 1.00x | 4 | 1h 51m | 8d ago | 3m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.83% | 98.83% | 93.06% | 93.06% | 205 ms | → 1.00x | 8 | 8m | 18d ago | 3m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 98.83% | 98.83% | 99.71% | 99.71% | 827 ms | → 1.00x | 1 | 0s | 7d ago | 3m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 98.83% | 98.83% | 14.21% | 14.21% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 98.83% | 98.83% | 100.00% | 100.00% | 119 ms | → 1.00x | 0 | — | — | 3m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.83% | 98.83% | 97.35% | 97.35% | 1038 ms | → 1.00x | 2 | 2h 51m | 11d ago | 3m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 98.83% | 98.83% | 99.85% | 99.85% | 1679 ms | → 1.00x | 1 | 6h 1m | 6d ago | 3m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 98.82% | 98.82% | 99.33% | 99.33% | 151 ms | → 1.00x | 9 | 2m | 14d ago | 3m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 98.82% | 98.82% | 100.00% | 100.00% | 694 ms | → 1.00x | 0 | — | — | 3m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 98.82% | 98.82% | 99.97% | 99.97% | 783 ms | → 1.00x | 0 | — | — | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.81% | 98.81% | 100.00% | 100.00% | 1680 ms | → 1.00x | 0 | — | — | 3m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 98.81% | 98.81% | 100.00% | 100.00% | 881 ms | → 1.00x | 0 | — | — | 3m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.70% | 98.70% | 99.61% | 99.61% | 3240 ms | → 1.00x | 0 | — | — | 1m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.70% | 98.70% | 98.93% | 98.93% | 2432 ms | → 1.00x | 2 | 0s | 8d ago | 1m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 98.70% | 98.70% | 99.62% | 99.62% | 474 ms | → 1.00x | 1 | 0s | 19d ago | 1m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 98.70% | 98.70% | 99.56% | 99.56% | 3147 ms | → 1.00x | 1 | 0s | 29d ago | 1m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.69% | 98.69% | 97.98% | 97.98% | 2552 ms | → 1.00x | 0 | — | — | 1m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.69% | 98.69% | 51.42% | 51.42% | 3633 ms | → 1.00x | 8 | 35m | 10d ago | 1m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 98.69% | 98.69% | 97.57% | 97.57% | 2953 ms | → 1.00x | 0 | — | — | 5m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.68% | 98.68% | 99.76% | 99.76% | 3533 ms | → 1.00x | 1 | 0s | 22d ago | 5m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 98.67% | 98.67% | 22.94% | 22.94% | 489 ms | → 1.00x | 1 | 0s | 21d ago | 5m ago |
| [Groq](https://lmspeed.net/provider/groq) | 98.67% | 98.67% | 76.97% | 76.97% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 98.67% | 98.67% | 99.79% | 99.79% | 1424 ms | → 1.00x | 4 | 0s | 6d ago | 5m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.67% | 98.67% | 24.43% | 24.43% | 3256 ms | → 1.00x | 0 | — | — | 4m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.67% | 98.67% | 98.12% | 98.12% | 2776 ms | → 1.00x | 0 | — | — | 4m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.66% | 98.66% | 69.87% | 69.87% | 2128 ms | → 1.00x | 8 | 0s | 8d ago | 4m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 98.65% | 98.65% | 97.90% | 97.90% | 1178 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.65% | 98.65% | 99.10% | 99.10% | 230 ms | → 1.00x | 1 | 0s | 22d ago | 4m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.65% | 98.65% | 96.18% | 96.18% | 2354 ms | → 1.00x | 4 | 41m | 14d ago | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.65% | 98.65% | 91.87% | 91.87% | 637 ms | → 1.00x | 1 | 30m | 16d ago | 4m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.64% | 98.64% | 97.74% | 97.74% | 2647 ms | → 1.00x | 6 | 2h 49m | 6d ago | 4m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 98.64% | 98.64% | 99.76% | 99.76% | 2451 ms | → 1.00x | 3 | 0s | 21d ago | 4m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 98.63% | 98.63% | 96.10% | 96.10% | 1830 ms | → 1.00x | 3 | 8h 19m | 27d ago | 3m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.62% | 98.62% | 98.59% | 98.59% | 1903 ms | → 1.00x | 13 | 12m | 7d ago | 3m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 98.62% | 98.62% | 99.92% | 99.92% | 488 ms | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.51% | 98.51% | 99.85% | 99.85% | 514 ms | → 1.00x | 0 | — | — | 1m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 98.44% | 98.44% | 84.75% | 84.75% | 775 ms | → 1.00x | 1 | 0s | 11d ago | 3m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 98.43% | 98.43% | 99.89% | 99.89% | 757 ms | → 1.00x | 1 | 1h 9m | 28d ago | 3m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 98.43% | 98.43% | 99.97% | 99.97% | 1232 ms | → 1.00x | 0 | — | — | 3m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.42% | 98.42% | 99.09% | 99.09% | 941 ms | → 1.00x | 1 | 20m | 17d ago | 3m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 98.26% | 98.26% | 90.95% | 90.95% | 1404 ms | → 1.00x | 3 | 0s | 12d ago | 4m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.08% | 98.08% | 2.34% | 2.34% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 97.84% | 97.84% | 99.94% | 99.94% | 1480 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 97.83% | 97.83% | 99.34% | 99.34% | 385 ms | → 1.00x | 2 | 0s | 7d ago | 2m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.66% | 97.66% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 10d ago | 4m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 97.47% | 97.47% | 98.12% | 98.12% | 2824 ms | → 1.00x | 2 | 10m | 20d ago | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.32% | 97.32% | 57.00% | 57.00% | 338 ms | → 1.00x | 0 | — | — | 4m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 97.27% | 97.27% | 97.10% | 97.10% | 691 ms | → 1.00x | 2 | 10m | 13d ago | 3m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 97.12% | 97.12% | 81.53% | 81.53% | 1113 ms | → 1.00x | 0 | — | — | 4m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 97.10% | 97.10% | 28.39% | 28.39% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 97.10% | 97.10% | 99.82% | 99.82% | 884 ms | → 1.00x | 0 | — | — | 4m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.66% | 96.66% | 97.85% | 97.85% | 702 ms | → 1.00x | 2 | 31m | 23d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 96.35% | 96.35% | 98.88% | 98.88% | 450 ms | → 1.00x | 0 | — | — | 4m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 96.10% | 96.10% | 32.93% | 32.93% | 2646 ms | → 1.00x | 0 | — | — | 3m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 96.05% | 96.05% | 99.64% | 99.64% | 762 ms | → 1.00x | 6 | 48m | 9d ago | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 95.78% | 95.78% | 99.27% | 99.27% | 1904 ms | → 1.00x | 0 | — | — | 4m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 95.68% | 95.68% | 89.02% | 89.02% | 904 ms | → 1.00x | 1 | 1d 17h | 30d ago | 5m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 95.52% | 95.52% | 83.10% | 83.10% | 941 ms | → 1.00x | 13 | 4h 5m | 13d ago | 4m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.45% | 95.45% | 17.31% | 17.31% | 1666 ms | → 1.00x | 1 | 0s | 21d ago | 5m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 95.07% | 95.07% | 98.93% | 98.93% | 1313 ms | → 1.00x | 7 | 12m | 11d ago | 5m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 94.15% | 94.15% | 98.02% | 98.02% | 1755 ms | → 1.00x | 0 | — | — | 4m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 93.87% | 93.87% | 100.00% | 100.00% | 511 ms | → 1.00x | 0 | — | — | 3m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 93.54% | 93.54% | 96.89% | 96.89% | 1752 ms | → 1.00x | 5 | 2h 21m | 5d ago | 3m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 93.27% | 93.27% | 83.18% | 83.18% | 728 ms | → 1.00x | 4 | 51s | 11d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.59% | 92.59% | 90.79% | 90.79% | 1198 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 91.15% | 91.15% | 44.49% | 44.49% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 90.22% | 90.22% | 92.56% | 92.56% | 4539 ms | → 1.00x | 21 | 30m | 6d ago | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 90.12% | 90.12% | 39.41% | 39.41% | 3580 ms | → 1.00x | 94 | 7m | 7d ago | 3m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 90.11% | 90.11% | 99.78% | 99.78% | 2074 ms | → 1.00x | 0 | — | — | 1m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.00% | 90.00% | 78.01% | 78.01% | 1452 ms | → 1.00x | 78 | 41m | 7d ago | 2m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 88.62% | 88.62% | 99.92% | 99.92% | 2159 ms | → 1.00x | 0 | — | — | 1m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 88.06% | 88.06% | 99.09% | 99.09% | 2450 ms | → 1.00x | 0 | — | — | 1m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 87.87% | 87.87% | 75.72% | 75.72% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 87.75% | 87.75% | 99.06% | 99.06% | 834 ms | → 1.00x | 5 | 1h 16m | 7d ago | 2m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 85.57% | 85.57% | 82.00% | 82.00% | 1010 ms | → 1.00x | 143 | 10m | 7d ago | 2m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.63% | 84.63% | 98.45% | 98.45% | 2947 ms | → 1.00x | 41 | 44s | 7d ago | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 84.19% | 84.19% | 99.61% | 99.61% | 4159 ms | → 1.00x | 5 | 0s | 5d ago | 3m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 83.83% | 83.83% | 98.89% | 98.89% | 1550 ms | → 1.00x | 1 | 0s | 15d ago | 1m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 83.24% | 83.24% | 86.23% | 86.23% | 1726 ms | → 1.00x | 6 | 0s | 11d ago | 1m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 82.79% | 82.79% | 10.72% | 10.72% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 81.99% | 81.99% | 96.32% | 96.32% | 1349 ms | → 1.00x | 206 | 15m | 8d ago | 5m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 81.94% | 81.94% | 68.13% | 68.13% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 81.82% | 81.82% | 97.23% | 97.23% | 2193 ms | → 1.00x | 29 | 3m | 8d ago | 2m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.82% | 81.82% | 69.98% | 69.98% | 3920 ms | → 1.00x | 4 | 18m | 21d ago | 5m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 81.78% | 81.78% | 67.23% | 67.23% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 81.62% | 81.62% | 87.06% | 87.06% | 3188 ms | → 1.00x | 21 | 1m | 17d ago | 4m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 81.24% | 81.24% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 24d 10h | 30d ago | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 80.60% | 80.60% | 93.77% | 93.77% | 4720 ms | → 1.00x | 0 | — | — | 1m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 80.26% | 80.26% | 99.77% | 99.77% | 1873 ms | → 1.00x | 0 | — | — | 1m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 79.96% | 79.96% | 63.15% | 63.15% | 3423 ms | → 1.00x | 189 | 12m | 7d ago | 5m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 79.62% | 79.62% | 74.00% | 74.00% | 786 ms | → 1.00x | 13 | 1h 16m | 9d ago | 4m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 79.54% | 79.54% | 86.83% | 86.83% | 1288 ms | → 1.00x | 10 | 0s | 12d ago | 4m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 79.26% | 79.26% | 68.41% | 68.41% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 79.05% | 79.05% | 98.53% | 98.53% | 1501 ms | → 1.00x | 13 | 8m | 6d ago | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 78.75% | 78.75% | 99.65% | 99.65% | 1784 ms | → 1.00x | 0 | — | — | 5m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 78.64% | 78.64% | 54.78% | 54.78% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 78.52% | 78.52% | 75.11% | 75.11% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 78.37% | 78.37% | 0.11% | 0.11% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 78.21% | 78.21% | 99.93% | 99.93% | 36 ms | → 1.00x | 0 | — | — | 1m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.15% | 78.15% | 98.92% | 98.92% | 3924 ms | → 1.00x | 1 | 0s | 11d ago | 2m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 78.06% | 78.06% | 6.48% | 6.48% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 77.82% | 77.82% | 88.70% | 88.70% | 1611 ms | → 1.00x | 1 | 6h | 5d ago | 4m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 77.80% | 77.80% | 36.20% | 36.20% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 76.09% | 76.09% | 91.43% | 91.43% | 1046 ms | → 1.00x | 0 | — | — | 2m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 75.44% | 75.44% | 100.00% | 100.00% | 3703 ms | → 1.00x | 0 | — | — | 3m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 75.19% | 75.19% | 54.05% | 54.05% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 74.81% | 74.81% | 66.07% | 66.07% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 74.56% | 74.56% | 85.02% | 85.02% | 1629 ms | → 1.00x | 30 | 4m | 8d ago | 4m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 74.36% | 74.36% | 0.69% | 0.69% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 74.30% | 74.30% | 98.87% | 98.87% | 1606 ms | → 1.00x | 1 | 17h 60m | 25d ago | 5m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 73.91% | 73.91% | 93.54% | 93.54% | 1723 ms | → 1.00x | 22 | 3m | 8d ago | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 72.30% | 72.30% | 78.42% | 78.42% | — | → 1.00x | 1 | 19d 17h | 25d ago | 3m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 71.93% | 71.93% | 94.11% | 94.11% | 2361 ms | → 1.00x | 9 | 9h 57m | 8d ago | 1m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 71.67% | 71.67% | 91.98% | 91.98% | 2154 ms | → 1.00x | 18 | 17s | 7d ago | 2m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 70.94% | 70.94% | 96.79% | 96.79% | 1112 ms | → 1.00x | 3 | 10m | 18d ago | 4m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.27% | 68.27% | 69.01% | 69.01% | 2061 ms | → 1.00x | 10 | 9m | 18d ago | 4m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 68.15% | 68.15% | 50.52% | 50.52% | 1999 ms | → 1.00x | 143 | 3h 11m | 6d ago | 2m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 67.77% | 67.77% | 95.25% | 95.25% | 1217 ms | → 1.00x | 16 | 1h 50m | 7d ago | 3m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 63.24% | 63.24% | 68.70% | 68.70% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 63.24% | 63.24% | 96.14% | 96.14% | 1781 ms | → 1.00x | 4 | 10h 1m | 7d ago | 3m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 53.33% | 53.33% | 99.03% | 99.03% | 2619 ms | → 1.00x | 0 | — | — | 4m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 18.96% | 18.96% | 98.24% | 98.24% | 3072 ms | → 1.00x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🔴 Down (312)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.06% | 99.06% | 76.89% | 76.89% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.06% | 99.06% | 99.92% | 99.92% | 1237 ms | → 1.00x | 1 | 0s | 7d ago | 5m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.06% | 99.06% | 99.85% | 99.85% | 1033 ms | → 1.00x | 2 | 0s | 6d ago | 5m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.06% | 99.06% | 99.62% | 99.62% | 1281 ms | → 1.00x | 2 | 1h 60m | 7d ago | 5m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.03% | 99.03% | 98.95% | 98.95% | 901 ms | → 1.00x | 0 | — | — | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 98.87% | 98.87% | 99.87% | 99.87% | 1387 ms | → 1.00x | 1 | 0s | 7d ago | 5m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 98.68% | 98.68% | 99.84% | 99.84% | 235 ms | → 1.00x | 0 | — | — | 5m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.49% | 98.49% | 99.77% | 99.77% | 1318 ms | → 1.00x | 0 | — | — | 5m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 98.31% | 98.31% | 98.78% | 98.78% | 1606 ms | → 1.00x | 1 | 0s | 7d ago | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 96.84% | 96.84% | 88.31% | 88.31% | 460 ms | → 1.00x | 2 | 30m | 27d ago | 3m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 82.21% | 82.21% | 48.46% | 48.46% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 81.24% | 81.24% | 77.59% | 77.59% | 2586 ms | → 1.00x | 0 | — | — | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 80.94% | 80.94% | 47.85% | 47.85% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 76.60% | 76.60% | 93.16% | 93.16% | 970 ms | → 1.00x | 3 | 17m | 10d ago | 4m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 76.47% | 76.47% | 85.28% | 85.28% | 1435 ms | → 1.00x | 0 | — | — | 5m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 75.52% | 75.52% | 86.29% | 86.29% | 1788 ms | → 1.00x | 20 | 3m | 7d ago | 5m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 74.70% | 74.70% | 99.88% | 99.88% | 2149 ms | → 1.00x | 2 | 0s | 13d ago | 3m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 74.31% | 74.31% | 99.85% | 99.85% | 744 ms | → 1.00x | 2 | 0s | 26d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 73.89% | 73.89% | 83.85% | 83.85% | 2213 ms | → 1.00x | 32 | 5m | 11d ago | 4m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 70.58% | 70.58% | 64.20% | 64.20% | 2895 ms | → 1.00x | 6 | 0s | 9d ago | 1m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 62.45% | 62.45% | 98.37% | 98.37% | 1587 ms | → 1.00x | 3 | 3m | 9d ago | 3m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 61.03% | 61.03% | 75.15% | 75.15% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.81% | 59.81% | 52.45% | 52.45% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 10.57% | 10.57% | 40.01% | 40.01% | 383 ms | → 1.00x | 1 | 16d 22h | 30d ago | 5m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 9.81% | 9.81% | 44.99% | 44.99% | 4250 ms | → 1.00x | 0 | — | — | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 9.09% | 9.09% | 97.75% | 97.75% | 2948 ms | → 1.00x | 4 | 0s | 6d ago | 4m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 7.59% | 7.59% | 92.86% | 92.86% | 2478 ms | → 1.00x | 8 | 8h 29m | 5d ago | 4m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 4.50% | 4.50% | 7.76% | 7.76% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 4.48% | 4.48% | 25.44% | 25.44% | 930 ms | → 1.00x | 4 | 4d 14h | 7d ago | 3m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 3.42% | 3.42% | 0.10% | 0.10% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 2.33% | 2.33% | 64.69% | 64.69% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 2.17% | 2.17% | 99.82% | 99.82% | 702 ms | → 1.00x | 2 | 2m | 9d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 2.17% | 2.17% | 73.96% | 73.96% | — | → 1.00x | 3 | 7d 13h | 28d ago | 3m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 2.17% | 2.17% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 29d ago | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 2.17% | 2.17% | 90.67% | 90.67% | — | → 1.00x | 1 | 3d 17h | 9d ago | 2m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 2.17% | 2.17% | 32.34% | 32.34% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 2.17% | 2.17% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 2.17% | 2.17% | 100.00% | 100.00% | 942 ms | → 1.00x | 0 | — | — | 3m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 2.17% | 2.17% | 99.89% | 99.89% | 1039 ms | → 1.00x | 2 | 1m | 8d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 2.17% | 2.17% | 99.95% | 99.95% | 878 ms | → 1.00x | 0 | — | — | 3m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 2.17% | 2.17% | 20.55% | 20.55% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 2.17% | 2.17% | 46.80% | 46.80% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 2.17% | 2.17% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 19d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 2.17% | 2.17% | 99.77% | 99.77% | 418 ms | → 1.00x | 2 | 2m | 6d ago | 3m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 2.16% | 2.16% | 99.82% | 99.82% | 1771 ms | → 1.00x | 1 | 7h | 6d ago | 3m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 2.16% | 2.16% | 99.65% | 99.65% | 449 ms | → 1.00x | 3 | 20m | 7d ago | 3m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 2.16% | 2.16% | 39.40% | 39.40% | — | → 1.00x | 1 | 18d 2h | 23d ago | 3m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 2.16% | 2.16% | 99.89% | 99.89% | 1078 ms | → 1.00x | 0 | — | — | 3m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 2.16% | 2.16% | 99.92% | 99.92% | 575 ms | → 1.00x | 1 | 0s | 19d ago | 3m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 2.16% | 2.16% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 2.16% | 2.16% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 27d ago | 3m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 2.16% | 2.16% | 91.04% | 91.04% | — | → 1.00x | 2 | 1d 23h | 9d ago | 3m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 2.16% | 2.16% | 98.92% | 98.92% | 1931 ms | → 1.00x | 10 | 19m | 17d ago | 3m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 2.16% | 2.16% | 16.77% | 16.77% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 2.16% | 2.16% | 99.81% | 99.81% | 545 ms | → 1.00x | 2 | 36m | 18d ago | 3m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 2.16% | 2.16% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 2.16% | 2.16% | 22.60% | 22.60% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 2.16% | 2.16% | 36.28% | 36.28% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 2.16% | 2.16% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 2.15% | 2.15% | 69.29% | 69.29% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 2.15% | 2.15% | 67.73% | 67.73% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 2.15% | 2.15% | 74.74% | 74.74% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 2.15% | 2.15% | 99.25% | 99.25% | 966 ms | → 1.00x | 1 | 0s | 19d ago | 3m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 2.15% | 2.15% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 2.15% | 2.15% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 2.15% | 2.15% | 20.58% | 20.58% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 2.15% | 2.15% | 30.92% | 30.92% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 2.15% | 2.15% | 68.76% | 68.76% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 2.15% | 2.15% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 2.15% | 2.15% | 44.20% | 44.20% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 2.15% | 2.15% | 38.02% | 38.02% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 2.15% | 2.15% | 25.49% | 25.49% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 2.15% | 2.15% | 4.55% | 4.55% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 2.15% | 2.15% | 1.35% | 1.35% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 2.15% | 2.15% | 48.30% | 48.30% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 2.15% | 2.15% | 33.55% | 33.55% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 2.15% | 2.15% | 3.93% | 3.93% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 2.14% | 2.14% | 47.31% | 47.31% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 2.14% | 2.14% | 79.86% | 79.86% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 2.14% | 2.14% | 85.33% | 85.33% | — | → 1.00x | 95 | 33m | 7d ago | 4m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 2.14% | 2.14% | 83.11% | 83.11% | — | → 1.00x | 2 | 2d 24h | 10d ago | 3m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 2.14% | 2.14% | 68.44% | 68.44% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 2.14% | 2.14% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 2.14% | 2.14% | 20.14% | 20.14% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 2.14% | 2.14% | 62.39% | 62.39% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 2.14% | 2.14% | 42.69% | 42.69% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 2.14% | 2.14% | 24.01% | 24.01% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 2.14% | 2.14% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 2.14% | 2.14% | 17.16% | 17.16% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 2.14% | 2.14% | 14.75% | 14.75% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 2.14% | 2.14% | 43.61% | 43.61% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 2.14% | 2.14% | 60.97% | 60.97% | 1130 ms | → 1.00x | 103 | 5m | 7d ago | 4m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 2.14% | 2.14% | 78.64% | 78.64% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 2.14% | 2.14% | 5.52% | 5.52% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 2.14% | 2.14% | 55.75% | 55.75% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 2.14% | 2.14% | 65.07% | 65.07% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 2.14% | 2.14% | 46.51% | 46.51% | 176 ms | → 1.00x | 4 | 3d 1h | 13d ago | 4m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 2.14% | 2.14% | 35.49% | 35.49% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 2.14% | 2.14% | 63.49% | 63.49% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 2.14% | 2.14% | 52.44% | 52.44% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 2.14% | 2.14% | 26.33% | 26.33% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 2.14% | 2.14% | 81.13% | 81.13% | 969 ms | → 1.00x | 3 | 20m | 19d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 2.14% | 2.14% | 52.99% | 52.99% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 2.14% | 2.14% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 20d ago | 4m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 2.14% | 2.14% | 92.63% | 92.63% | 1744 ms | → 1.00x | 3 | 2h 60m | 5d ago | 4m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 2.14% | 2.14% | 19.49% | 19.49% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 2.14% | 2.14% | 10.15% | 10.15% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 2.14% | 2.14% | 40.17% | 40.17% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 2.13% | 2.13% | 59.84% | 59.84% | 2583 ms | → 1.00x | 2 | 60m | 6d ago | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 2.13% | 2.13% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 8d 6h | 5d ago | 4m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 2.13% | 2.13% | 13.15% | 13.15% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 2.13% | 2.13% | 98.37% | 98.37% | 2600 ms | → 1.00x | 0 | — | — | 4m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 2.13% | 2.13% | 21.32% | 21.32% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 2.13% | 2.13% | 4.63% | 4.63% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 2.13% | 2.13% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 2.13% | 2.13% | 83.98% | 83.98% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 2.13% | 2.13% | 47.90% | 47.90% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 2.13% | 2.13% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 2.13% | 2.13% | 65.91% | 65.91% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 2.13% | 2.13% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 8d 6h | 5d ago | 4m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 2.13% | 2.13% | 49.45% | 49.45% | 214 ms | → 1.00x | 0 | — | — | 4m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 2.13% | 2.13% | 46.05% | 46.05% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 2.13% | 2.13% | 22.23% | 22.23% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 2.13% | 2.13% | 98.48% | 98.48% | 1312 ms | → 1.00x | 1 | 0s | 26d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 2.12% | 2.12% | 30.30% | 30.30% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 2.12% | 2.12% | 72.39% | 72.39% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 2.12% | 2.12% | 6.70% | 6.70% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 2.12% | 2.12% | 91.72% | 91.72% | 898 ms | → 1.00x | 26 | 0s | 5d ago | 4m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 2.12% | 2.12% | 21.09% | 21.09% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 2.12% | 2.12% | 64.35% | 64.35% | — | → 1.00x | 2 | 9d 1h | 23d ago | 4m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 2.12% | 2.12% | 39.95% | 39.95% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 2.12% | 2.12% | 2.87% | 2.87% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 2.12% | 2.12% | 27.77% | 27.77% | 1614 ms | → 1.00x | 155 | 16m | 8d ago | 4m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 2.12% | 2.12% | 87.63% | 87.63% | 2174 ms | → 1.00x | 0 | — | — | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 2.12% | 2.12% | 8.99% | 8.99% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 2.12% | 2.12% | 17.59% | 17.59% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 2.11% | 2.11% | 27.04% | 27.04% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 2.11% | 2.11% | 3.12% | 3.12% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 2.11% | 2.11% | 31.88% | 31.88% | — | → 1.00x | 3 | 5d 19h | 14d ago | 4m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 2.11% | 2.11% | 46.41% | 46.41% | 74 ms | → 1.00x | 2 | 8d 8h | 6d ago | 4m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 2.11% | 2.11% | 22.07% | 22.07% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 2.11% | 2.11% | 34.65% | 34.65% | 1187 ms | → 1.00x | 2 | 1d 2h | 24d ago | 4m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 2.11% | 2.11% | 35.56% | 35.56% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 2.11% | 2.11% | 26.68% | 26.68% | 769 ms | → 1.00x | 0 | — | — | 4m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 2.10% | 2.10% | 5.20% | 5.20% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 2.10% | 2.10% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 2.10% | 2.10% | 22.80% | 22.80% | 168 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 2.10% | 2.10% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 2.10% | 2.10% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 11d ago | 4m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 2.10% | 2.10% | 18.10% | 18.10% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 2.10% | 2.10% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 2.10% | 2.10% | 78.14% | 78.14% | 1597 ms | → 1.00x | 96 | 4h 43m | 6d ago | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 2.10% | 2.10% | 38.64% | 38.64% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 2.10% | 2.10% | 22.68% | 22.68% | 1683 ms | → 1.00x | 0 | — | — | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 2.09% | 2.09% | 73.53% | 73.53% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 2.09% | 2.09% | 63.31% | 63.31% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 2.09% | 2.09% | 40.15% | 40.15% | 348 ms | → 1.00x | 0 | — | — | 5m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 2.09% | 2.09% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 13d ago | 5m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Crond](https://lmspeed.net/provider/crond) | 2.09% | 2.09% | 22.80% | 22.80% | 1936 ms | → 1.00x | 5 | 6m | 15d ago | 5m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 2.09% | 2.09% | 43.20% | 43.20% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 2.09% | 2.09% | 54.39% | 54.39% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 2.09% | 2.09% | 90.53% | 90.53% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 2.09% | 2.09% | 73.32% | 73.32% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 2.09% | 2.09% | 99.26% | 99.26% | 2108 ms | → 1.00x | 0 | — | — | 5m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 2.09% | 2.09% | 16.23% | 16.23% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 2.09% | 2.09% | 51.26% | 51.26% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 2.09% | 2.09% | 16.69% | 16.69% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 2.09% | 2.09% | 77.23% | 77.23% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 2.09% | 2.09% | 0.01% | 0.01% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 2.09% | 2.09% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 2.08% | 2.08% | 74.22% | 74.22% | — | → 1.00x | 25 | 6h 31m | 12d ago | 5m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 2.08% | 2.08% | 3.13% | 3.13% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 2.08% | 2.08% | 50.25% | 50.25% | 1494 ms | → 1.00x | 5 | 0s | 21d ago | 5m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 2.08% | 2.08% | 96.06% | 96.06% | — | → 1.00x | 6 | 14h 25m | 8d ago | 5m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 2.08% | 2.08% | 20.82% | 20.82% | 2336 ms | → 1.00x | 64 | 6m | 5d ago | 5m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 2.08% | 2.08% | 76.64% | 76.64% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 2.08% | 2.08% | 33.64% | 33.64% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 2.08% | 2.08% | 87.39% | 87.39% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 2.08% | 2.08% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 13d ago | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 2.08% | 2.08% | 32.40% | 32.40% | — | → 1.00x | 2 | 2d 6h | 9d ago | 5m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 2.08% | 2.08% | 48.90% | 48.90% | — | → 1.00x | 6 | 4d 3h | 16d ago | 5m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 2.08% | 2.08% | 50.43% | 50.43% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 2.08% | 2.08% | 45.98% | 45.98% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 2.08% | 2.08% | 84.44% | 84.44% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 2.08% | 2.08% | 48.81% | 48.81% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 2.08% | 2.08% | 34.00% | 34.00% | 1505 ms | → 1.00x | 2 | 30m | 9d ago | 5m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 2.08% | 2.08% | 82.46% | 82.46% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 2.08% | 2.08% | 49.10% | 49.10% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 2.08% | 2.08% | 99.12% | 99.12% | 4080 ms | → 1.00x | 5 | 2h 24m | 5d ago | 5m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 2.08% | 2.08% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 12d 6h | 6d ago | 5m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 2.08% | 2.08% | 21.71% | 21.71% | 945 ms | → 1.00x | 48 | 1h 27m | 5d ago | 5m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 2.08% | 2.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 2.07% | 2.07% | 46.30% | 46.30% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 2.07% | 2.07% | 39.16% | 39.16% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 2.07% | 2.07% | 86.17% | 86.17% | 697 ms | → 1.00x | 1 | 10s | 11d ago | 5m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 2.07% | 2.07% | 83.68% | 83.68% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 2.07% | 2.07% | 75.88% | 75.88% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 2.07% | 2.07% | 23.11% | 23.11% | 560 ms | → 1.00x | 0 | — | — | 5m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 2.07% | 2.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 2.07% | 2.07% | 5.08% | 5.08% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 2.06% | 2.06% | 57.88% | 57.88% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 2.06% | 2.06% | 60.67% | 60.67% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 2.06% | 2.06% | 38.37% | 38.37% | — | → 1.00x | 1 | 25d 1h | 30d ago | 5m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 2.06% | 2.06% | 76.99% | 76.99% | — | → 1.00x | 1 | 25d 1h | 30d ago | 6m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 2.06% | 2.06% | 63.55% | 63.55% | — | → 1.00x | 1 | 25d 1h | 30d ago | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 2.06% | 2.06% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 25d ago | 1m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 2.06% | 2.06% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 2.06% | 2.06% | 22.32% | 22.32% | 344 ms | → 1.00x | 0 | — | — | 1m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 2.06% | 2.06% | 23.09% | 23.09% | 1148 ms | → 1.00x | 6 | 10m | 11d ago | 1m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 2.05% | 2.05% | 84.65% | 84.65% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 2.05% | 2.05% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 2.05% | 2.05% | 62.64% | 62.64% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [xAI](https://lmspeed.net/provider/xai) | 2.05% | 2.05% | 23.13% | 23.13% | 1829 ms | → 1.00x | 0 | — | — | 1m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 2.05% | 2.05% | 99.17% | 99.17% | 2140 ms | → 1.00x | 0 | — | — | 1m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 2.05% | 2.05% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 2.05% | 2.05% | 70.96% | 70.96% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 2.05% | 2.05% | 99.84% | 99.84% | 871 ms | → 1.00x | 0 | — | — | 1m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 2.05% | 2.05% | 39.57% | 39.57% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 2.05% | 2.05% | 92.62% | 92.62% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 2.05% | 2.05% | 86.30% | 86.30% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 2.05% | 2.05% | 99.77% | 99.77% | 2257 ms | → 1.00x | 0 | — | — | 1m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 2.05% | 2.05% | 68.72% | 68.72% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 2.04% | 2.04% | 83.66% | 83.66% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 2.04% | 2.04% | 75.27% | 75.27% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 2.04% | 2.04% | 99.95% | 99.95% | 1167 ms | → 1.00x | 0 | — | — | 1m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 2.04% | 2.04% | 99.74% | 99.74% | 40 ms | → 1.00x | 0 | — | — | 1m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 2.04% | 2.04% | 74.18% | 74.18% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 2.04% | 2.04% | 74.31% | 74.31% | — | → 1.00x | 1 | 24d 15h | 30d ago | 1m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.04% | 2.04% | 35.55% | 35.55% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 2.04% | 2.04% | 45.59% | 45.59% | 295 ms | → 1.00x | 0 | — | — | 1m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 2.04% | 2.04% | 81.34% | 81.34% | 1560 ms | → 1.00x | 1 | 3h | 9d ago | 1m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 2.04% | 2.04% | 54.28% | 54.28% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 2.04% | 2.04% | 99.53% | 99.53% | 1361 ms | → 1.00x | 0 | — | — | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 2.04% | 2.04% | 10.24% | 10.24% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 2.04% | 2.04% | 46.73% | 46.73% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 2.04% | 2.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 2m ago |
| [Mine](https://lmspeed.net/provider/mine) | 2.04% | 2.04% | 23.25% | 23.25% | — | → 1.00x | 1 | 25d 1h | 30d ago | 1m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 1.98% | 1.98% | 100.00% | 100.00% | 737 ms | → 1.00x | 0 | — | — | 2m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 1.95% | 1.95% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 18d ago | 3m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 1.91% | 1.91% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 15d ago | 4m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 1.91% | 1.91% | 23.40% | 23.40% | 1727 ms | → 1.00x | 82 | 13m | 8d ago | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 1.90% | 1.90% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 1.78% | 1.78% | 99.75% | 99.75% | 1130 ms | → 1.00x | 3 | 0s | 6d ago | 2m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 1.78% | 1.78% | 100.00% | 100.00% | 578 ms | → 1.00x | 0 | — | — | 3m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 1.78% | 1.78% | 98.70% | 98.70% | 1459 ms | → 1.00x | 12 | 0s | 15d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 1.78% | 1.78% | 100.00% | 100.00% | 2487 ms | → 1.00x | 0 | — | — | 2m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 1.78% | 1.78% | 98.40% | 98.40% | 899 ms | → 1.00x | 1 | 59m | 30d ago | 3m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 1.78% | 1.78% | 98.05% | 98.05% | 59 ms | → 1.00x | 3 | 0s | 6d ago | 3m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 1.78% | 1.78% | 98.92% | 98.92% | 629 ms | → 1.00x | 3 | 1h 40m | 7d ago | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 1.78% | 1.78% | 99.29% | 99.29% | 1756 ms | → 1.00x | 1 | 2h 37m | 24d ago | 3m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 1.78% | 1.78% | 100.00% | 100.00% | 977 ms | → 1.00x | 0 | — | — | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 1.78% | 1.78% | 100.00% | 100.00% | 604 ms | → 1.00x | 0 | — | — | 3m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 1.77% | 1.77% | 76.21% | 76.21% | — | → 1.00x | 1 | 20d 10h | 25d ago | 3m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 1.77% | 1.77% | 99.73% | 99.73% | 982 ms | → 1.00x | 1 | 2h 60m | 6d ago | 3m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 1.77% | 1.77% | 99.94% | 99.94% | 1441 ms | → 1.00x | 1 | 21m | 20d ago | 3m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 1.77% | 1.77% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 1.77% | 1.77% | 99.60% | 99.60% | 1760 ms | → 1.00x | 1 | 0s | 28d ago | 3m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 1.76% | 1.76% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 18d ago | 3m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 1.76% | 1.76% | 75.41% | 75.41% | 4996 ms | → 1.00x | 223 | 1h 18m | 5d ago | 3m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 1.76% | 1.76% | 83.84% | 83.84% | 875 ms | → 1.00x | 8 | 17m | 10d ago | 3m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 1.76% | 1.76% | 91.99% | 91.99% | 1152 ms | → 1.00x | 0 | — | — | 3m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 1.76% | 1.76% | 16.44% | 16.44% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 1.76% | 1.76% | 3.80% | 3.80% | — | → 1.00x | 1 | 25d 1h | 30d ago | 3m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 1.75% | 1.75% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 1.71% | 1.71% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 1.71% | 1.71% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 1.71% | 1.71% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | 4m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 1.70% | 1.70% | 32.96% | 32.96% | 494 ms | → 1.00x | 0 | — | — | 5m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.20% | 0.20% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 25d 1h | 30d ago | — |

</details>


## Archive layout

    history/<slug>/<YYYY-MM>.jsonl
    state.json        # archive cursor: {last_archived_id, last_archived_at, last_archived_day}

### Entry formats

**URL header** — if every entry in a file shares one URL, the first line is a header and entries omit their `url` field:

    {"url":"https://..."}

Files with mixed URLs (rare) have no header and every entry carries its own `url`.

**Success run** — consecutive successful checks for one provider on one day with the same URL, aggregated into a single entry:

    {"type":"ok","from":"2026-02-14T00:03:12Z","to":"2026-02-14T23:53:22Z","count":144,"avg":118,"min":95,"max":512,"p95":180}

**Failure run** — consecutive failed checks for one provider on one day with the same URL, status code, and error message, aggregated into a single entry:

    {"type":"fail","from":"2026-02-14T10:13:22Z","to":"2026-02-14T11:03:15Z","count":6,"status":503,"error":"HTTP 503","avg_latency":4810}

Runs break on: day boundary, status flip (ok ↔ fail), URL change, status code change (fails only), or error message change (fails only).
