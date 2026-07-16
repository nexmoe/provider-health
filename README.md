# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**689 providers** — 268 🟢 operational · 107 🟡 degraded · 312 🔴 down · 2 ⚫ unknown

_Updated 2026-07-16 05:44 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (268)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 1m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.73% | 99.73% | 99.98% | 99.98% | 859 ms | → 1.00x | 1 | 4m | 13d ago | 4m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.73% | 99.73% | 93.42% | 93.42% | 2822 ms | → 1.00x | 2 | 6m | 13d ago | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.73% | 99.73% | 99.74% | 99.74% | 1268 ms | → 1.00x | 4 | 0s | 8d ago | 4m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.73% | 99.73% | 99.80% | 99.80% | 432 ms | → 1.00x | 0 | — | — | 4m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.73% | 99.73% | 1.90% | 1.90% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.72% | 99.72% | 30.20% | 30.20% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.72% | 99.72% | 63.14% | 63.14% | 1223 ms | → 1.00x | 1 | 0s | 9d ago | 3m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.72% | 99.72% | 71.79% | 71.79% | 873 ms | → 1.00x | 0 | — | — | 3m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.72% | 99.72% | 63.68% | 63.68% | 1400 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.72% | 99.72% | 99.18% | 99.18% | 279 ms | → 1.00x | 0 | — | — | 2m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.72% | 99.72% | 58.17% | 58.17% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.72% | 99.72% | 99.00% | 99.00% | 1208 ms | → 1.00x | 1 | 30m | 30d ago | 2m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.72% | 99.72% | 89.57% | 89.57% | 958 ms | → 1.00x | 0 | — | — | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.72% | 99.72% | 99.95% | 99.95% | 227 ms | → 1.00x | 0 | — | — | 2m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.72% | 99.72% | 98.81% | 98.81% | 262 ms | → 1.00x | 0 | — | — | 2m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.72% | 99.72% | 98.35% | 98.35% | 832 ms | → 1.00x | 1 | 1h 40m | 28d ago | 2m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.72% | 99.72% | 99.08% | 99.08% | 254 ms | → 1.00x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.72% | 99.72% | 99.92% | 99.92% | 795 ms | → 1.00x | 0 | — | — | 1m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.72% | 99.72% | 87.87% | 87.87% | 226 ms | → 1.00x | 3 | 10m | 20d ago | 1m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.72% | 99.72% | 99.45% | 99.45% | 154 ms | → 1.00x | 2 | 3h 1m | 14d ago | 1m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.72% | 99.72% | 98.72% | 98.72% | 665 ms | → 1.00x | 0 | — | — | 1m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.72% | 99.72% | 99.67% | 99.67% | 1744 ms | → 1.00x | 1 | 0s | 10d ago | 55s ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.72% | 99.72% | 60.72% | 60.72% | 435 ms | → 1.00x | 0 | — | — | 1m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.72% | 99.72% | 100.00% | 100.00% | 836 ms | → 1.00x | 0 | — | — | 55s ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.64% | 99.64% | 93.57% | 93.57% | 1574 ms | → 1.00x | 1 | 4m | 13d ago | 4m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.64% | 99.64% | 99.49% | 99.49% | 2077 ms | → 1.00x | 2 | 4h 55m | 19d ago | 4m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.64% | 99.64% | 49.74% | 49.74% | 765 ms | → 1.00x | 6 | 35m | 17d ago | 4m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.64% | 99.64% | 99.81% | 99.81% | 773 ms | → 1.00x | 0 | — | — | 4m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.64% | 99.64% | 99.02% | 99.02% | 1238 ms | → 1.00x | 4 | 0s | 17d ago | 3m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.64% | 99.64% | 99.98% | 99.98% | 86 ms | → 1.00x | 1 | 0s | 24d ago | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.64% | 99.64% | 99.90% | 99.90% | 538 ms | → 1.00x | 1 | 0s | 24d ago | 3m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.64% | 99.64% | 80.20% | 80.20% | 878 ms | → 1.00x | 3 | 0s | 9d ago | 3m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.64% | 99.64% | 99.68% | 99.68% | 1618 ms | → 1.00x | 0 | — | — | 3m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.64% | 99.64% | 22.30% | 22.30% | 2466 ms | → 1.00x | 16 | 0s | 9d ago | 3m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.63% | 99.63% | 97.57% | 97.57% | 936 ms | → 1.00x | 7 | 0s | 10d ago | 3m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.63% | 99.63% | 99.37% | 99.37% | 1419 ms | → 1.00x | 0 | — | — | 3m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.63% | 99.63% | 93.26% | 93.26% | 100 ms | → 1.00x | 0 | — | — | 3m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.63% | 99.63% | 60.60% | 60.60% | 1629 ms | → 1.00x | 0 | — | — | 3m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.63% | 99.63% | 90.32% | 90.32% | 707 ms | → 1.00x | 0 | — | — | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.63% | 99.63% | 99.97% | 99.97% | 603 ms | → 1.00x | 1 | 0s | 26d ago | 2m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.63% | 99.63% | 97.00% | 97.00% | 128 ms | → 1.00x | 0 | — | — | 2m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.63% | 99.63% | 99.89% | 99.89% | 1243 ms | → 1.00x | 0 | — | — | 2m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.63% | 99.63% | 66.50% | 66.50% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.63% | 99.63% | 99.86% | 99.86% | 653 ms | → 1.00x | 0 | — | — | 2m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.63% | 99.63% | 96.69% | 96.69% | 118 ms | → 1.00x | 0 | — | — | 2m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.63% | 99.63% | 26.43% | 26.43% | 2207 ms | → 1.00x | 1 | 13d 7h | 30d ago | 2m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.63% | 99.63% | 43.48% | 43.48% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.63% | 99.63% | 92.20% | 92.20% | 1977 ms | → 1.00x | 6 | 0s | 11d ago | 2m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.63% | 99.63% | 98.69% | 98.69% | 712 ms | → 1.00x | 0 | — | — | 2m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.63% | 99.63% | 98.78% | 98.78% | 600 ms | → 1.00x | 1 | 0s | 7d ago | 2m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.63% | 99.63% | 93.73% | 93.73% | 25 ms | → 1.00x | 1 | 1h 22m | 23d ago | 2m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.63% | 99.63% | 98.47% | 98.47% | 601 ms | → 1.00x | 0 | — | — | 2m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.63% | 99.63% | 98.43% | 98.43% | 414 ms | → 1.00x | 1 | 0s | 28d ago | 2m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.63% | 99.63% | 99.34% | 99.34% | 4278 ms | → 1.00x | 10 | 3m | 8d ago | 2m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.62% | 99.62% | 98.56% | 98.56% | 1062 ms | → 1.00x | 4 | 1h 59m | 18d ago | 1m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.62% | 99.62% | 99.97% | 99.97% | 724 ms | → 1.00x | 0 | — | — | 1m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.62% | 99.62% | 24.52% | 24.52% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.62% | 99.62% | 99.98% | 99.98% | 413 ms | → 1.00x | 0 | — | — | 1m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.62% | 99.62% | 99.61% | 99.61% | 336 ms | → 1.00x | 1 | 0s | 24d ago | 1m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.62% | 99.62% | 99.88% | 99.88% | 519 ms | → 1.00x | 0 | — | — | 1m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.62% | 99.62% | 99.93% | 99.93% | 864 ms | → 1.00x | 1 | 0s | 8d ago | 55s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.62% | 99.62% | 99.85% | 99.85% | 828 ms | → 1.00x | 0 | — | — | 1m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.62% | 99.62% | 100.00% | 100.00% | 835 ms | → 1.00x | 0 | — | — | 1m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.62% | 99.62% | 99.66% | 99.66% | 522 ms | → 1.00x | 2 | 0s | 28d ago | 1m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 1m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 55s ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 55s ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.55% | 99.55% | 98.78% | 98.78% | 1684 ms | → 1.00x | 20 | 5s | 13d ago | 4m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.55% | 99.55% | 75.23% | 75.23% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.55% | 99.55% | 99.65% | 99.65% | 49 ms | → 1.00x | 0 | — | — | 4m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.55% | 99.55% | 70.89% | 70.89% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.55% | 99.55% | 76.22% | 76.22% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.55% | 99.55% | 44.95% | 44.95% | 74 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.55% | 99.55% | 99.65% | 99.65% | 789 ms | → 1.00x | 0 | — | — | 4m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.55% | 99.55% | 99.97% | 99.97% | 1193 ms | → 1.00x | 0 | — | — | 4m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.55% | 99.55% | 99.92% | 99.92% | 907 ms | → 1.00x | 1 | 0s | 9d ago | 4m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.55% | 99.55% | 0.11% | 0.11% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.55% | 99.55% | 24.53% | 24.53% | 1239 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.55% | 99.55% | 99.95% | 99.95% | 1040 ms | → 1.00x | 1 | 0s | 28d ago | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.54% | 99.54% | 99.85% | 99.85% | 2550 ms | → 1.00x | 0 | — | — | 3m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.54% | 99.54% | 99.77% | 99.77% | 547 ms | → 1.00x | 0 | — | — | 3m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.54% | 99.54% | 99.87% | 99.87% | 214 ms | → 1.00x | 0 | — | — | 3m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.54% | 99.54% | 5.16% | 5.16% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.54% | 99.54% | 25.33% | 25.33% | 388 ms | → 1.00x | 3 | 0s | 20d ago | 3m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.54% | 99.54% | 74.11% | 74.11% | 247 ms | → 1.00x | 6 | 1h 20m | 8d ago | 3m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.54% | 99.54% | 98.73% | 98.73% | 416 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.54% | 99.54% | 99.61% | 99.61% | 46 ms | → 1.00x | 0 | — | — | 3m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.54% | 99.54% | 83.46% | 83.46% | 1294 ms | → 1.00x | 2 | 0s | 9d ago | 3m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.54% | 99.54% | 94.26% | 94.26% | 246 ms | → 1.00x | 0 | — | — | 2m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.54% | 99.54% | 98.38% | 98.38% | 1092 ms | → 1.00x | 2 | 3h 26m | 20d ago | 2m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.54% | 99.54% | 98.90% | 98.90% | 756 ms | → 1.00x | 1 | 1h 60m | 25d ago | 2m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.53% | 99.53% | 55.08% | 55.08% | 1586 ms | → 1.00x | 29 | 1m | 8d ago | 2m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.53% | 99.53% | 29.98% | 29.98% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.53% | 99.53% | 99.87% | 99.87% | 434 ms | → 1.00x | 1 | 0s | 20d ago | 2m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.53% | 99.53% | 96.80% | 96.80% | 580 ms | → 1.00x | 1 | 0s | 25d ago | 2m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.53% | 99.53% | 31.33% | 31.33% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.53% | 99.53% | 6.05% | 6.05% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.53% | 99.53% | 99.97% | 99.97% | 23 ms | → 1.00x | 0 | — | — | 2m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.53% | 99.53% | 98.04% | 98.04% | 1176 ms | → 1.00x | 0 | — | — | 2m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.53% | 99.53% | 93.61% | 93.61% | 302 ms | → 1.00x | 27 | 9m | 9d ago | 2m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.53% | 99.53% | 100.00% | 100.00% | 314 ms | → 1.00x | 0 | — | — | 2m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.53% | 99.53% | 98.88% | 98.88% | 678 ms | → 1.00x | 1 | 0s | 8d ago | 2m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.53% | 99.53% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.53% | 99.53% | 99.94% | 99.94% | 704 ms | → 1.00x | 0 | — | — | 2m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.53% | 99.53% | 100.00% | 100.00% | 692 ms | → 1.00x | 0 | — | — | 2m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.53% | 99.53% | 100.00% | 100.00% | 125 ms | → 1.00x | 0 | — | — | 1m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.53% | 99.53% | 99.94% | 99.94% | 821 ms | → 1.00x | 0 | — | — | 1m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.53% | 99.53% | 99.76% | 99.76% | 1329 ms | → 1.00x | 0 | — | — | 1m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.53% | 99.53% | 16.67% | 16.67% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.53% | 99.53% | 100.00% | 100.00% | 75 ms | → 1.00x | 0 | — | — | 1m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.53% | 99.53% | 99.85% | 99.85% | 693 ms | → 1.00x | 1 | 3m | 9d ago | 1m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.53% | 99.53% | 100.00% | 100.00% | 392 ms | → 1.00x | 0 | — | — | 1m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.53% | 99.53% | 100.00% | 100.00% | 488 ms | → 1.00x | 0 | — | — | 1m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.53% | 99.53% | 99.92% | 99.92% | 185 ms | → 1.00x | 0 | — | — | 1m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.53% | 99.53% | 100.00% | 100.00% | 412 ms | → 1.00x | 0 | — | — | 1m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.53% | 99.53% | 99.77% | 99.77% | 240 ms | → 1.00x | 3 | 0s | 9d ago | 1m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.46% | 99.46% | 99.98% | 99.98% | 704 ms | → 1.00x | 1 | 4m | 13d ago | 4m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.46% | 99.46% | 68.59% | 68.59% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.46% | 99.46% | 99.76% | 99.76% | 113 ms | → 1.00x | 0 | — | — | 4m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.46% | 99.46% | 99.92% | 99.92% | 360 ms | → 1.00x | 0 | — | — | 4m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.46% | 99.46% | 96.43% | 96.43% | — | → 1.00x | 3 | 1d 4h | 7d ago | 4m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.46% | 99.46% | 99.94% | 99.94% | 401 ms | → 1.00x | 0 | — | — | 4m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.46% | 99.46% | 98.00% | 98.00% | 640 ms | → 1.00x | 0 | — | — | 4m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.46% | 99.46% | 22.33% | 22.33% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.46% | 99.46% | 99.58% | 99.58% | 918 ms | → 1.00x | 1 | 2h | 7d ago | 4m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.46% | 99.46% | 98.94% | 98.94% | 1054 ms | → 1.00x | 1 | 0s | 14d ago | 4m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.46% | 99.46% | 98.92% | 98.92% | 769 ms | → 1.00x | 0 | — | — | 3m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.45% | 99.45% | 99.34% | 99.34% | 2019 ms | → 1.00x | 1 | 4h 59m | 30d ago | 3m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.45% | 99.45% | 24.63% | 24.63% | 1888 ms | → 1.00x | 1 | 0s | 27d ago | 3m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.45% | 99.45% | 99.09% | 99.09% | 128 ms | → 1.00x | 0 | — | — | 3m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.45% | 99.45% | 24.91% | 24.91% | 218 ms | → 1.00x | 2 | 0s | 20d ago | 3m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.45% | 99.45% | 65.57% | 65.57% | 1134 ms | → 1.00x | 0 | — | — | 3m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.45% | 99.45% | 99.88% | 99.88% | 1048 ms | → 1.00x | 0 | — | — | 3m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.45% | 99.45% | 99.35% | 99.35% | 973 ms | → 1.00x | 0 | — | — | 3m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.45% | 99.45% | 96.88% | 96.88% | 1367 ms | → 1.00x | 0 | — | — | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.45% | 99.45% | 81.07% | 81.07% | 1078 ms | → 1.00x | 0 | — | — | 3m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.45% | 99.45% | 84.58% | 84.58% | 2087 ms | → 1.00x | 0 | — | — | 3m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.45% | 99.45% | 98.00% | 98.00% | 173 ms | → 1.00x | 0 | — | — | 3m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.45% | 99.45% | 82.26% | 82.26% | 1219 ms | → 1.00x | 0 | — | — | 3m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.44% | 99.44% | 99.31% | 99.31% | 655 ms | → 1.00x | 0 | — | — | 2m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.44% | 99.44% | 98.16% | 98.16% | 2569 ms | → 1.00x | 0 | — | — | 2m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.44% | 99.44% | 98.56% | 98.56% | 1407 ms | → 1.00x | 0 | — | — | 2m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.44% | 99.44% | 98.47% | 98.47% | 987 ms | → 1.00x | 2 | 0s | 15d ago | 2m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.44% | 99.44% | 98.83% | 98.83% | 487 ms | → 1.00x | 0 | — | — | 2m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.44% | 99.44% | 96.94% | 96.94% | 966 ms | → 1.00x | 1 | 0s | 9d ago | 2m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.44% | 99.44% | 99.93% | 99.93% | 147 ms | → 1.00x | 1 | 0s | 9d ago | 2m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.44% | 99.44% | 99.82% | 99.82% | 352 ms | → 1.00x | 1 | 0s | 18d ago | 2m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.44% | 99.44% | 97.87% | 97.87% | 78 ms | → 1.00x | 0 | — | — | 2m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.44% | 99.44% | 99.51% | 99.51% | 158 ms | → 1.00x | 0 | — | — | 2m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.44% | 99.44% | 99.70% | 99.70% | 1028 ms | → 1.00x | 0 | — | — | 2m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.44% | 99.44% | 89.89% | 89.89% | 50 ms | → 1.00x | 1 | 0s | 8d ago | 2m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.44% | 99.44% | 97.35% | 97.35% | 956 ms | → 1.00x | 2 | 2h 51m | 13d ago | 2m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.44% | 99.44% | 100.00% | 100.00% | 722 ms | → 1.00x | 0 | — | — | 1m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.44% | 99.44% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.43% | 99.43% | 99.97% | 99.97% | 366 ms | → 1.00x | 0 | — | — | 1m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.43% | 99.43% | 99.86% | 99.86% | 556 ms | → 1.00x | 1 | 0s | 24d ago | 1m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.43% | 99.43% | 99.98% | 99.98% | 489 ms | → 1.00x | 0 | — | — | 1m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.43% | 99.43% | 99.97% | 99.97% | 2240 ms | → 1.00x | 0 | — | — | 1m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.43% | 99.43% | 100.00% | 100.00% | 259 ms | → 1.00x | 0 | — | — | 1m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.43% | 99.43% | 100.00% | 100.00% | 661 ms | → 1.00x | 0 | — | — | 1m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.43% | 99.43% | 100.00% | 100.00% | 524 ms | → 1.00x | 0 | — | — | 55s ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.43% | 99.43% | 99.48% | 99.48% | 484 ms | → 1.00x | 1 | 4m | 12d ago | 55s ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.43% | 99.43% | 99.92% | 99.92% | 359 ms | → 1.00x | 1 | 0s | 16d ago | 1m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.38% | 99.38% | 36.33% | 36.33% | 2203 ms | → 1.00x | 3 | 2m | 13d ago | 4m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.37% | 99.37% | 99.28% | 99.28% | 146 ms | → 1.00x | 3 | 0s | 9d ago | 4m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.37% | 99.37% | 17.47% | 17.47% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.37% | 99.37% | 99.74% | 99.74% | 842 ms | → 1.00x | 1 | 4s | 10d ago | 4m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.37% | 99.37% | 99.58% | 99.58% | 2050 ms | → 1.00x | 19 | 2m | 10d ago | 4m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.37% | 99.37% | 99.73% | 99.73% | 309 ms | → 1.00x | 7 | 6m | 23d ago | 4m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.37% | 99.37% | 99.92% | 99.92% | 980 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.37% | 99.37% | 89.73% | 89.73% | 940 ms | → 1.00x | 0 | — | — | 4m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.37% | 99.37% | 99.90% | 99.90% | 27 ms | → 1.00x | 0 | — | — | 4m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.37% | 99.37% | 99.91% | 99.91% | 908 ms | → 1.00x | 0 | — | — | 4m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.37% | 99.37% | 99.49% | 99.49% | 778 ms | → 1.00x | 0 | — | — | 4m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.37% | 99.37% | 99.85% | 99.85% | 631 ms | → 1.00x | 2 | 0s | 8d ago | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.36% | 99.36% | 99.67% | 99.67% | — | → 1.00x | 5 | 5h 48m | 8d ago | 3m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.36% | 99.36% | 54.70% | 54.70% | 170 ms | → 1.00x | 2 | 0s | 26d ago | 3m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.36% | 99.36% | 62.65% | 62.65% | 1514 ms | → 1.00x | 0 | — | — | 3m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.36% | 99.36% | 38.36% | 38.36% | 1537 ms | → 1.00x | 7 | 48m | 28d ago | 3m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.36% | 99.36% | 64.92% | 64.92% | 200 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.35% | 99.35% | 77.97% | 77.97% | 268 ms | → 1.00x | 1 | 0s | 8d ago | 3m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.35% | 99.35% | 91.09% | 91.09% | 276 ms | → 1.00x | 4 | 0s | 18d ago | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.35% | 99.35% | 97.90% | 97.90% | 765 ms | → 1.00x | 0 | — | — | 2m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.35% | 99.35% | 98.66% | 98.66% | 868 ms | → 1.00x | 1 | 0s | 24d ago | 2m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.35% | 99.35% | 56.85% | 56.85% | 864 ms | → 1.00x | 8 | 2h 1m | 20d ago | 2m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.35% | 99.35% | 98.73% | 98.73% | 273 ms | → 1.00x | 0 | — | — | 2m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.35% | 99.35% | 99.30% | 99.30% | 341 ms | → 1.00x | 0 | — | — | 2m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.35% | 99.35% | 99.64% | 99.64% | 1599 ms | → 1.00x | 1 | 4h 60m | 27d ago | 2m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.35% | 99.35% | 99.83% | 99.83% | 593 ms | → 1.00x | 0 | — | — | 2m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.35% | 99.35% | 99.78% | 99.78% | 2416 ms | → 1.00x | 0 | — | — | 2m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.35% | 99.35% | 64.61% | 64.61% | 1191 ms | → 1.00x | 3 | 3d 3h | 15d ago | 2m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.35% | 99.35% | 98.11% | 98.11% | 1832 ms | → 1.00x | 0 | — | — | 2m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.35% | 99.35% | 98.81% | 98.81% | 43 ms | → 1.00x | 4 | 38m | 22d ago | 2m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.35% | 99.35% | 43.99% | 43.99% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.35% | 99.35% | 28.78% | 28.78% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.35% | 99.35% | 98.37% | 98.37% | 902 ms | → 1.00x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.35% | 99.35% | 99.87% | 99.87% | 497 ms | → 1.00x | 0 | — | — | 2m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.34% | 99.34% | 100.00% | 100.00% | 509 ms | → 1.00x | 0 | — | — | 2m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.34% | 99.34% | 99.85% | 99.85% | 574 ms | → 1.00x | 1 | 6h 1m | 8d ago | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.34% | 99.34% | 99.10% | 99.10% | 888 ms | → 1.00x | 1 | 0s | 28d ago | 1m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.34% | 99.34% | 99.33% | 99.33% | 87 ms | → 1.00x | 8 | 3m | 16d ago | 1m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.34% | 99.34% | 99.98% | 99.98% | 690 ms | → 1.00x | 0 | — | — | 1m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.34% | 99.34% | 99.89% | 99.89% | 1200 ms | → 1.00x | 0 | — | — | 1m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.34% | 99.34% | 91.90% | 91.90% | 672 ms | → 1.00x | 18 | 2h 13m | 20d ago | 1m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.34% | 99.34% | 96.87% | 96.87% | 795 ms | → 1.00x | 1 | 2h 1m | 28d ago | 1m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.28% | 99.28% | 98.29% | 98.29% | 1782 ms | → 1.00x | 0 | — | — | 4m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.28% | 99.28% | 98.93% | 98.93% | 1757 ms | → 1.00x | 2 | 0s | 10d ago | 4m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.28% | 99.28% | 99.75% | 99.75% | 60 ms | → 1.00x | 0 | — | — | 4m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.28% | 99.28% | 99.60% | 99.60% | 1691 ms | → 1.00x | 1 | 2s | 9d ago | 4m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.28% | 99.28% | 99.90% | 99.90% | 464 ms | → 1.00x | 0 | — | — | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.28% | 99.28% | 99.96% | 99.96% | 384 ms | → 1.00x | 0 | — | — | 4m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.28% | 99.28% | 97.57% | 97.57% | 2235 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.28% | 99.28% | 76.88% | 76.88% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.28% | 99.28% | 100.00% | 100.00% | 898 ms | → 1.00x | 0 | — | — | 4m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.28% | 99.28% | 76.89% | 76.89% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.27% | 99.27% | 97.28% | 97.28% | 566 ms | → 1.00x | 0 | — | — | 3m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.27% | 99.27% | 99.48% | 99.48% | 1176 ms | → 1.00x | 0 | — | — | 3m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.27% | 99.27% | 76.97% | 76.97% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.27% | 99.27% | 24.54% | 24.54% | 465 ms | → 1.00x | 1 | 0s | 30d ago | 3m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.27% | 99.27% | 77.28% | 77.28% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.27% | 99.27% | 96.73% | 96.73% | 2071 ms | → 1.00x | 1 | 0s | 27d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.27% | 99.27% | 50.15% | 50.15% | 213 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.27% | 99.27% | 31.58% | 31.58% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.26% | 99.26% | 68.50% | 68.50% | 772 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.26% | 99.26% | 97.21% | 97.21% | 1897 ms | → 1.00x | 0 | — | — | 2m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.26% | 99.26% | 96.18% | 96.18% | 1341 ms | → 1.00x | 4 | 41m | 16d ago | 2m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.26% | 99.26% | 99.83% | 99.83% | 548 ms | → 1.00x | 0 | — | — | 2m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.26% | 99.26% | 99.10% | 99.10% | 190 ms | → 1.00x | 1 | 0s | 24d ago | 2m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.26% | 99.26% | 99.76% | 99.76% | 1771 ms | → 1.00x | 2 | 0s | 23d ago | 2m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.25% | 99.25% | 95.85% | 95.85% | 1117 ms | → 1.00x | 0 | — | — | 2m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.25% | 99.25% | 86.85% | 86.85% | 1911 ms | → 1.00x | 0 | — | — | 2m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.25% | 99.25% | 93.06% | 93.06% | 406 ms | → 1.00x | 7 | 9m | 20d ago | 2m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.25% | 99.25% | 99.86% | 99.86% | 387 ms | → 1.00x | 0 | — | — | 2m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.25% | 99.25% | 99.71% | 99.71% | 61 ms | → 1.00x | 1 | 0s | 9d ago | 2m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.25% | 99.25% | 14.21% | 14.21% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.25% | 99.25% | 100.00% | 100.00% | 1714 ms | → 1.00x | 0 | — | — | 1m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.24% | 99.24% | 99.94% | 99.94% | 336 ms | → 1.00x | 0 | — | — | 1m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.24% | 99.24% | 99.92% | 99.92% | 1477 ms | → 1.00x | 1 | 0s | 22d ago | 1m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.24% | 99.24% | 99.85% | 99.85% | 306 ms | → 1.00x | 3 | 0s | 9d ago | 1m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.19% | 99.19% | 97.98% | 97.98% | 2290 ms | → 1.00x | 0 | — | — | 4m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.19% | 99.19% | 99.77% | 99.77% | 536 ms | → 1.00x | 0 | — | — | 4m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.18% | 99.18% | 99.79% | 99.79% | 994 ms | → 1.00x | 4 | 0s | 8d ago | 3m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.18% | 99.18% | 97.94% | 97.94% | 1946 ms | → 1.00x | 2 | 30m | 12d ago | 3m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.18% | 99.18% | 88.17% | 88.17% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.18% | 99.18% | 66.42% | 66.42% | 552 ms | → 1.00x | 1 | 2h 38m | 26d ago | 3m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.17% | 99.17% | 96.32% | 96.32% | 1031 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.17% | 99.17% | 69.43% | 69.43% | 876 ms | → 1.00x | 2 | 0s | 22d ago | 3m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.17% | 99.17% | 89.40% | 89.40% | 1137 ms | → 1.00x | 0 | — | — | 3m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.16% | 99.16% | 91.87% | 91.87% | 402 ms | → 1.00x | 1 | 30m | 18d ago | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.16% | 99.16% | 97.00% | 97.00% | 284 ms | → 1.00x | 4 | 1h 51m | 10d ago | 2m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.16% | 99.16% | 97.07% | 97.07% | 549 ms | → 1.00x | 2 | 1d 2h | 20d ago | 2m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.16% | 99.16% | 100.00% | 100.00% | 101 ms | → 1.00x | 0 | — | — | 2m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.15% | 99.15% | 99.95% | 99.95% | 321 ms | → 1.00x | 0 | — | — | 1m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.15% | 99.15% | 100.00% | 100.00% | 348 ms | → 1.00x | 0 | — | — | 1m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.15% | 99.15% | 99.94% | 99.94% | 616 ms | → 1.00x | 0 | — | — | 1m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.10% | 99.10% | 99.56% | 99.56% | 2678 ms | → 1.00x | 0 | — | — | 4m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.10% | 99.10% | 99.87% | 99.87% | 612 ms | → 1.00x | 1 | 0s | 9d ago | 4m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.09% | 99.09% | 22.94% | 22.94% | 191 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.07% | 99.07% | 98.74% | 98.74% | 473 ms | → 1.00x | 0 | — | — | 2m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.07% | 99.07% | 97.74% | 97.74% | — | → 1.00x | 5 | 3h 22m | 8d ago | 2m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.07% | 99.07% | 84.75% | 84.75% | 485 ms | → 1.00x | 1 | 0s | 13d ago | 2m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.06% | 99.06% | 96.10% | 96.10% | 974 ms | → 1.00x | 3 | 8h 19m | 29d ago | 2m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.06% | 99.06% | 99.67% | 99.67% | 1277 ms | → 1.00x | 0 | — | — | 1m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.02% | 99.02% | 99.61% | 99.61% | 3687 ms | → 1.00x | 0 | — | — | 4m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.01% | 99.01% | 99.62% | 99.62% | 196 ms | → 1.00x | 1 | 0s | 21d ago | 4m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.01% | 99.01% | 99.84% | 99.84% | 234 ms | → 1.00x | 0 | — | — | 4m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.00% | 99.00% | 99.87% | 99.87% | 1534 ms | → 1.00x | 2 | 0s | 15d ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (107)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 98.98% | 98.98% | 90.95% | 90.95% | 917 ms | → 1.00x | 2 | 0s | 14d ago | 2m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 98.97% | 98.97% | 99.74% | 99.74% | 948 ms | → 1.00x | 0 | — | — | 2m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 98.97% | 98.97% | 97.80% | 97.80% | 2067 ms | → 1.00x | 0 | — | — | 2m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.97% | 98.97% | 99.67% | 99.67% | 649 ms | → 1.00x | 0 | — | — | 2m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 98.97% | 98.97% | 99.89% | 99.89% | 722 ms | → 1.00x | 1 | 1h 9m | 30d ago | 2m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.93% | 98.93% | 95.68% | 95.68% | 1665 ms | → 1.00x | 1 | 8d 14h | 24d ago | 4m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 98.92% | 98.92% | 99.74% | 99.74% | 1981 ms | → 1.00x | 2 | 0s | 23d ago | 4m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.92% | 98.92% | 51.42% | 51.42% | 2375 ms | → 1.00x | 2 | 0s | 12d ago | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 98.88% | 98.88% | 100.00% | 100.00% | 1706 ms | → 1.00x | 0 | — | — | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.87% | 98.87% | 100.00% | 100.00% | 736 ms | → 1.00x | 0 | — | — | 1m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.86% | 98.86% | 99.09% | 99.09% | 614 ms | → 1.00x | 1 | 20m | 19d ago | 1m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 98.83% | 98.83% | 98.78% | 98.78% | 412 ms | → 1.00x | 1 | 0s | 9d ago | 4m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 98.82% | 98.82% | 38.65% | 38.65% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.81% | 98.81% | 24.43% | 24.43% | 2394 ms | → 1.00x | 0 | — | — | 3m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 98.81% | 98.81% | 26.84% | 26.84% | 718 ms | → 1.00x | 0 | — | — | 3m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 98.78% | 98.78% | 99.97% | 99.97% | 719 ms | → 1.00x | 0 | — | — | 1m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 98.78% | 98.78% | 99.97% | 99.97% | 490 ms | → 1.00x | 0 | — | — | 1m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 98.74% | 98.74% | 99.62% | 99.62% | 495 ms | → 1.00x | 2 | 1h 60m | 9d ago | 4m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.71% | 98.71% | 69.87% | 69.87% | 1184 ms | → 1.00x | 7 | 0s | 10d ago | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 98.68% | 98.68% | 99.94% | 99.94% | 840 ms | → 1.00x | 1 | 0s | 25d ago | 1m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.66% | 98.66% | 99.85% | 99.85% | 334 ms | → 1.00x | 0 | — | — | 4m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.64% | 98.64% | 99.76% | 99.76% | 2484 ms | → 1.00x | 1 | 0s | 24d ago | 3m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.51% | 98.51% | 98.12% | 98.12% | 1929 ms | → 1.00x | 2 | 10m | 22d ago | 2m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.51% | 98.51% | 97.10% | 97.10% | 559 ms | → 1.00x | 2 | 10m | 15d ago | 2m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.43% | 98.43% | 81.53% | 81.53% | 565 ms | → 1.00x | 0 | — | — | 3m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 98.42% | 98.42% | 97.03% | 97.03% | 159 ms | → 1.00x | 2 | 0s | 27d ago | 2m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 98.40% | 98.40% | 99.95% | 99.95% | 1133 ms | → 1.00x | 1 | 0s | 27d ago | 1m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.39% | 98.39% | 99.34% | 99.34% | 337 ms | → 1.00x | 2 | 0s | 9d ago | 55s ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 98.32% | 98.32% | 98.85% | 98.85% | 1328 ms | → 1.00x | 0 | — | — | 2m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.24% | 98.24% | 76.90% | 76.90% | 219 ms | → 1.00x | 1 | 0s | 24d ago | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.16% | 98.16% | 57.00% | 57.00% | 114 ms | → 1.00x | 0 | — | — | 3m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.16% | 98.16% | 2.34% | 2.34% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 98.15% | 98.15% | 99.82% | 99.82% | 654 ms | → 1.00x | 0 | — | — | 2m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.14% | 98.14% | 28.39% | 28.39% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 98.07% | 98.07% | 98.88% | 98.88% | 223 ms | → 1.00x | 0 | — | — | 3m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.76% | 97.76% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 12d ago | 2m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 97.74% | 97.74% | 99.64% | 99.64% | 541 ms | → 1.00x | 5 | 57m | 11d ago | 4m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 97.73% | 97.73% | 88.31% | 88.31% | 286 ms | → 1.00x | 1 | 1h | 29d ago | 1m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.58% | 97.58% | 83.10% | 83.10% | 586 ms | → 1.00x | 13 | 4h 5m | 15d ago | 2m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 97.56% | 97.56% | 89.02% | 89.02% | 686 ms | → 1.00x | 0 | — | — | 4m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.20% | 97.20% | 32.93% | 32.93% | 2244 ms | → 1.00x | 0 | — | — | 2m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.19% | 97.19% | 98.75% | 98.75% | 732 ms | → 1.00x | 7 | 20s | 12d ago | 2m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 96.93% | 96.93% | 98.96% | 98.96% | 535 ms | → 1.00x | 1 | 29m | 24d ago | 2m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.90% | 96.90% | 97.85% | 97.85% | 689 ms | → 1.00x | 2 | 31m | 25d ago | 1m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 96.78% | 96.78% | 100.00% | 100.00% | 420 ms | → 1.00x | 0 | — | — | 1m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 96.68% | 96.68% | 83.18% | 83.18% | 235 ms | → 1.00x | 4 | 51s | 13d ago | 3m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 96.61% | 96.61% | 98.59% | 98.59% | 1340 ms | → 1.00x | 13 | 12m | 9d ago | 1m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 96.22% | 96.22% | 99.27% | 99.27% | 846 ms | → 1.00x | 0 | — | — | 3m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 96.09% | 96.09% | 90.79% | 90.79% | 1123 ms | → 1.00x | 1 | 0s | 9d ago | 2m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 95.87% | 95.87% | 96.89% | 96.89% | 1449 ms | → 1.00x | 5 | 2h 21m | 7d ago | 2m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.55% | 95.55% | 17.31% | 17.31% | 1359 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 95.25% | 95.25% | 98.02% | 98.02% | 1180 ms | → 1.00x | 0 | — | — | 2m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 94.70% | 94.70% | 39.41% | 39.41% | 696 ms | → 1.00x | 77 | 6m | 9d ago | 1m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 94.64% | 94.64% | 98.93% | 98.93% | 950 ms | → 1.00x | 6 | 8m | 13d ago | 3m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 90.75% | 90.75% | 99.92% | 99.92% | 1713 ms | → 1.00x | 0 | — | — | 4m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.45% | 90.45% | 78.01% | 78.01% | 981 ms | → 1.00x | 78 | 4m | 9d ago | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 90.22% | 90.22% | 74.00% | 74.00% | 537 ms | → 1.00x | 11 | 1h 25m | 11d ago | 3m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 89.76% | 89.76% | 99.78% | 99.78% | 2667 ms | → 1.00x | 0 | — | — | 4m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 89.76% | 89.76% | 75.72% | 75.72% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 89.61% | 89.61% | 0.11% | 0.11% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 89.40% | 89.40% | 99.09% | 99.09% | 1204 ms | → 1.00x | 0 | — | — | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 88.88% | 88.88% | 47.85% | 47.85% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 88.60% | 88.60% | 99.93% | 99.93% | 28 ms | → 1.00x | 0 | — | — | 4m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 88.13% | 88.13% | 77.59% | 77.59% | 2808 ms | → 1.00x | 0 | — | — | 2m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 85.34% | 85.34% | 99.06% | 99.06% | 740 ms | → 1.00x | 5 | 1h 16m | 9d ago | 1m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 84.29% | 84.29% | 86.23% | 86.23% | 905 ms | → 1.00x | 6 | 0s | 13d ago | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 84.23% | 84.23% | 99.61% | 99.61% | 2250 ms | → 1.00x | 5 | 0s | 7d ago | 1m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 84.20% | 84.20% | 82.00% | 82.00% | 871 ms | → 1.00x | 129 | 11m | 9d ago | 1m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 83.99% | 83.99% | 0.69% | 0.69% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 83.96% | 83.96% | 98.45% | 98.45% | 1682 ms | → 1.00x | 34 | 53s | 9d ago | 3m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 83.89% | 83.89% | 98.89% | 98.89% | 1232 ms | → 1.00x | 1 | 0s | 17d ago | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 83.35% | 83.35% | 63.15% | 63.15% | 2903 ms | → 1.00x | 169 | 12m | 9d ago | 3m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.65% | 82.65% | 67.23% | 67.23% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 82.30% | 82.30% | 93.77% | 93.77% | 4816 ms | → 1.00x | 0 | — | — | 4m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 82.23% | 82.23% | 99.77% | 99.77% | 1368 ms | → 1.00x | 0 | — | — | 4m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 82.07% | 82.07% | 96.32% | 96.32% | 924 ms | → 1.00x | 180 | 16m | 10d ago | 4m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 81.59% | 81.59% | 68.70% | 68.70% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 81.18% | 81.18% | 68.41% | 68.41% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.11% | 81.11% | 69.98% | 69.98% | 4568 ms | → 1.00x | 3 | 13m | 23d ago | 3m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 81.01% | 81.01% | 95.25% | 95.25% | 4556 ms | → 1.00x | 16 | 1h 50m | 9d ago | 2m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 79.84% | 79.84% | 75.11% | 75.11% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 79.68% | 79.68% | 92.56% | 92.56% | 4957 ms | → 1.00x | 20 | 30m | 8d ago | 2m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 79.30% | 79.30% | 98.92% | 98.92% | 3239 ms | → 1.00x | 1 | 0s | 13d ago | 4m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 79.02% | 79.02% | 98.53% | 98.53% | 1270 ms | → 1.00x | 11 | 7m | 8d ago | 1m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 78.86% | 78.86% | 88.70% | 88.70% | 1137 ms | → 1.00x | 1 | 6h | 7d ago | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 78.73% | 78.73% | 99.65% | 99.65% | 618 ms | → 1.00x | 0 | — | — | 3m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 77.41% | 77.41% | 86.83% | 86.83% | 514 ms | → 1.00x | 8 | 0s | 14d ago | 3m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 77.32% | 77.32% | 6.48% | 6.48% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 76.45% | 76.45% | 66.07% | 66.07% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 76.18% | 76.18% | 54.05% | 54.05% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 75.99% | 75.99% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 9d ago | 1m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 75.78% | 75.78% | 99.85% | 99.85% | 491 ms | → 1.00x | 2 | 0s | 28d ago | 1m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 75.14% | 75.14% | 36.20% | 36.20% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 75.07% | 75.07% | 85.28% | 85.28% | 754 ms | → 1.00x | 0 | — | — | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 74.41% | 74.41% | 98.87% | 98.87% | 900 ms | → 1.00x | 1 | 17h 60m | 27d ago | 4m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.21% | 73.21% | 85.02% | 85.02% | 1640 ms | → 1.00x | 24 | 3m | 10d ago | 2m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 72.88% | 72.88% | 91.98% | 91.98% | 1840 ms | → 1.00x | 18 | 17s | 9d ago | 4m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 72.45% | 72.45% | 94.11% | 94.11% | 2699 ms | → 1.00x | 9 | 9h 57m | 10d ago | 4m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 72.36% | 72.36% | 96.79% | 96.79% | 1043 ms | → 1.00x | 3 | 10m | 20d ago | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 70.02% | 70.02% | 64.20% | 64.20% | 2625 ms | → 1.00x | 6 | 0s | 11d ago | 4m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.73% | 68.73% | 69.01% | 69.01% | 1745 ms | → 1.00x | 9 | 10m | 20d ago | 3m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 68.51% | 68.51% | 50.52% | 50.52% | 620 ms | → 1.00x | 142 | 2h 52m | 8d ago | 4m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 66.94% | 66.94% | 75.15% | 75.15% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 66.70% | 66.70% | 98.37% | 98.37% | 967 ms | → 1.00x | 3 | 3m | 11d ago | 1m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 60.98% | 60.98% | 98.24% | 98.24% | 702 ms | → 1.00x | 0 | — | — | 2m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 53.11% | 53.11% | 99.03% | 99.03% | 1822 ms | → 1.00x | 0 | — | — | 3m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 30.68% | 30.68% | 76.64% | 76.64% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |

</details>

<details open>
<summary><strong>🔴 Down (312)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.52% | 99.52% | — | — | — | → 1.00x | 0 | — | — | 56s ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.37% | 99.37% | 56.98% | 56.98% | 964 ms | → 1.00x | 6 | 0s | 22d ago | 3m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.25% | 99.25% | 98.95% | 98.95% | 629 ms | → 1.00x | 0 | — | — | 2m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.49% | 98.49% | 99.94% | 99.94% | 1062 ms | → 1.00x | 0 | — | — | 51s ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 97.99% | 97.99% | 98.12% | 98.12% | 1981 ms | → 1.00x | 0 | — | — | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 89.52% | 89.52% | 98.16% | 98.16% | 78 ms | → 1.00x | 4 | 0s | 15d ago | 2m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 85.30% | 85.30% | 68.13% | 68.13% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 82.88% | 82.88% | 97.23% | 97.23% | 1016 ms | → 1.00x | 27 | 3m | 10d ago | 51s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 79.78% | 79.78% | 10.72% | 10.72% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 79.68% | 79.68% | 97.48% | 97.48% | 772 ms | → 1.00x | 1 | 0s | 8d ago | 2m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 79.50% | 79.50% | 87.06% | 87.06% | 3024 ms | → 1.00x | 19 | 2m | 19d ago | 2m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 79.28% | 79.28% | 54.78% | 54.78% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 79.22% | 79.22% | 48.46% | 48.46% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 77.83% | 77.83% | 44.62% | 44.62% | 211 ms | → 1.00x | 1 | 22d 10h | 30d ago | 2m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 76.00% | 76.00% | 93.16% | 93.16% | 806 ms | → 1.00x | 3 | 17m | 12d ago | 2m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 74.95% | 74.95% | 100.00% | 100.00% | 3315 ms | → 1.00x | 0 | — | — | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.89% | 74.89% | 86.29% | 86.29% | 685 ms | → 1.00x | 19 | 3m | 9d ago | 3m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 74.08% | 74.08% | 91.43% | 91.43% | 644 ms | → 1.00x | 0 | — | — | 56s ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 72.94% | 72.94% | 83.85% | 83.85% | 1395 ms | → 1.00x | 30 | 5m | 13d ago | 2m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 72.00% | 72.00% | 99.88% | 99.88% | 173 ms | → 1.00x | 2 | 0s | 15d ago | 1m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 70.67% | 70.67% | 93.54% | 93.54% | 1335 ms | → 1.00x | 21 | 3m | 10d ago | 1m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.23% | 59.23% | 52.45% | 52.45% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 55.81% | 55.81% | 44.49% | 44.49% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 52.54% | 52.54% | 78.42% | 78.42% | — | → 1.00x | 1 | 19d 17h | 27d ago | 1m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 17.88% | 17.88% | 100.00% | 100.00% | 675 ms | → 1.00x | 0 | — | — | 1m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 8.14% | 8.14% | 40.01% | 40.01% | 155 ms | → 1.00x | 1 | 14d 22h | 30d ago | 3m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 4.70% | 4.70% | 44.99% | 44.99% | 928 ms | → 1.00x | 0 | — | — | 2m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 4.36% | 4.36% | 97.75% | 97.75% | 1993 ms | → 1.00x | 3 | 0s | 8d ago | 2m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 4.21% | 4.21% | 7.76% | 7.76% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 3.63% | 3.63% | 92.86% | 92.86% | 1763 ms | → 1.00x | 8 | 2h 29m | 7d ago | 2m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 2.15% | 2.15% | 25.44% | 25.44% | 772 ms | → 1.00x | 4 | 4d 2h | 9d ago | 2m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.82% | 1.82% | 0.10% | 0.10% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 1.12% | 1.12% | 64.69% | 64.69% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 1.04% | 1.04% | 99.82% | 99.82% | 308 ms | → 1.00x | 2 | 2m | 11d ago | 1m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 1.04% | 1.04% | 90.67% | 90.67% | — | → 1.00x | 1 | 3d 17h | 11d ago | 56s ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 1.04% | 1.04% | 32.34% | 32.34% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 1.04% | 1.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 1.04% | 1.04% | 100.00% | 100.00% | 669 ms | → 1.00x | 0 | — | — | 1m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 1.04% | 1.04% | 46.80% | 46.80% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 1.04% | 1.04% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 21d ago | 1m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 1.04% | 1.04% | 72.40% | 72.40% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 1.04% | 1.04% | 99.89% | 99.89% | 543 ms | → 1.00x | 1 | 3m | 10d ago | 1m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 1.04% | 1.04% | 99.95% | 99.95% | 650 ms | → 1.00x | 0 | — | — | 1m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 1.04% | 1.04% | 20.55% | 20.55% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 1.04% | 1.04% | 99.77% | 99.77% | 18 ms | → 1.00x | 2 | 2m | 8d ago | 1m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 1.04% | 1.04% | 73.96% | 73.96% | — | → 1.00x | 2 | 11d 7h | 30d ago | 1m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 1.04% | 1.04% | 99.65% | 99.65% | 58 ms | → 1.00x | 3 | 20m | 9d ago | 1m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 1.04% | 1.04% | 39.40% | 39.40% | — | → 1.00x | 1 | 18d 2h | 25d ago | 1m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 1.04% | 1.04% | 99.89% | 99.89% | 663 ms | → 1.00x | 0 | — | — | 1m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 1.04% | 1.04% | 99.92% | 99.92% | 491 ms | → 1.00x | 1 | 0s | 21d ago | 1m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 1.04% | 1.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 1.04% | 1.04% | 99.81% | 99.81% | 389 ms | → 1.00x | 2 | 36m | 20d ago | 1m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 1.04% | 1.04% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 1.03% | 1.03% | 99.82% | 99.82% | 1303 ms | → 1.00x | 1 | 7h | 8d ago | 1m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 1.03% | 1.03% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 29d ago | 1m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 1.03% | 1.03% | 91.04% | 91.04% | — | → 1.00x | 2 | 1d 23h | 11d ago | 1m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 1.03% | 1.03% | 98.92% | 98.92% | 1398 ms | → 1.00x | 7 | 27m | 19d ago | 1m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 1.03% | 1.03% | 16.77% | 16.77% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 1.03% | 1.03% | 22.60% | 22.60% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 1.03% | 1.03% | 36.28% | 36.28% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 1.03% | 1.03% | 99.25% | 99.25% | 704 ms | → 1.00x | 1 | 0s | 21d ago | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 1.03% | 1.03% | 20.58% | 20.58% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 1.03% | 1.03% | 38.02% | 38.02% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 1.03% | 1.03% | 25.49% | 25.49% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 1.03% | 1.03% | 69.29% | 69.29% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 1.03% | 1.03% | 67.73% | 67.73% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 1.03% | 1.03% | 74.74% | 74.74% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 1.03% | 1.03% | 30.92% | 30.92% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 1.03% | 1.03% | 68.76% | 68.76% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 1.03% | 1.03% | 44.20% | 44.20% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 1.03% | 1.03% | 4.55% | 4.55% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 1.03% | 1.03% | 1.35% | 1.35% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 1.03% | 1.03% | 48.30% | 48.30% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 1.03% | 1.03% | 33.55% | 33.55% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 1.03% | 1.03% | 3.93% | 3.93% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 1.03% | 1.03% | 83.11% | 83.11% | — | → 1.00x | 2 | 2d 24h | 12d ago | 2m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 1.03% | 1.03% | 68.44% | 68.44% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 1.03% | 1.03% | 42.69% | 42.69% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 1.03% | 1.03% | 17.16% | 17.16% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 1.03% | 1.03% | 43.61% | 43.61% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 1.03% | 1.03% | 47.31% | 47.31% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 1.03% | 1.03% | 79.86% | 79.86% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 1.03% | 1.03% | 85.33% | 85.33% | — | → 1.00x | 95 | 33m | 9d ago | 2m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 1.03% | 1.03% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 1.03% | 1.03% | 20.14% | 20.14% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 1.03% | 1.03% | 62.39% | 62.39% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 1.03% | 1.03% | 24.01% | 24.01% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 1.03% | 1.03% | 14.75% | 14.75% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 1.03% | 1.03% | 60.97% | 60.97% | 967 ms | → 1.00x | 90 | 5m | 9d ago | 2m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 1.02% | 1.02% | 78.64% | 78.64% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 1.02% | 1.02% | 5.52% | 5.52% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 1.02% | 1.02% | 55.75% | 55.75% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 1.02% | 1.02% | 65.07% | 65.07% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 1.02% | 1.02% | 46.51% | 46.51% | 148 ms | → 1.00x | 4 | 2d 13h | 15d ago | 2m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 1.02% | 1.02% | 35.49% | 35.49% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 1.02% | 1.02% | 63.49% | 63.49% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 1.02% | 1.02% | 52.44% | 52.44% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 1.02% | 1.02% | 26.33% | 26.33% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 1.02% | 1.02% | 81.13% | 81.13% | 743 ms | → 1.00x | 3 | 20m | 21d ago | 2m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 1.02% | 1.02% | 52.99% | 52.99% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 1.02% | 1.02% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 22d ago | 2m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 1.02% | 1.02% | 92.63% | 92.63% | 550 ms | → 1.00x | 3 | 2h 60m | 7d ago | 2m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 1.02% | 1.02% | 19.49% | 19.49% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 1.02% | 1.02% | 10.15% | 10.15% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 1.02% | 1.02% | 40.17% | 40.17% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 1.02% | 1.02% | 65.91% | 65.91% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 1.02% | 1.02% | 59.84% | 59.84% | 2293 ms | → 1.00x | 2 | 60m | 8d ago | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 1.02% | 1.02% | 70.78% | 70.78% | 735 ms | → 1.00x | 3 | 7d 14h | 7d ago | 2m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 1.02% | 1.02% | 98.37% | 98.37% | 2445 ms | → 1.00x | 0 | — | — | 2m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 1.02% | 1.02% | 4.63% | 4.63% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 1.02% | 1.02% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 1.02% | 1.02% | 70.74% | 70.74% | 749 ms | → 1.00x | 3 | 7d 14h | 7d ago | 2m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 1.02% | 1.02% | 49.45% | 49.45% | 200 ms | → 1.00x | 0 | — | — | 2m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 1.02% | 1.02% | 46.05% | 46.05% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 1.02% | 1.02% | 22.23% | 22.23% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 1.02% | 1.02% | 13.15% | 13.15% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 1.02% | 1.02% | 21.32% | 21.32% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 1.02% | 1.02% | 83.98% | 83.98% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 1.02% | 1.02% | 47.90% | 47.90% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 1.02% | 1.02% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 1.02% | 1.02% | 98.48% | 98.48% | 840 ms | → 1.00x | 1 | 0s | 28d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 1.02% | 1.02% | 30.30% | 30.30% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 1.02% | 1.02% | 72.39% | 72.39% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 1.02% | 1.02% | 6.70% | 6.70% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 1.02% | 1.02% | 91.72% | 91.72% | 492 ms | → 1.00x | 25 | 0s | 7d ago | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 1.01% | 1.01% | 21.09% | 21.09% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 1.01% | 1.01% | 64.35% | 64.35% | — | → 1.00x | 2 | 9d 1h | 25d ago | 3m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 1.01% | 1.01% | 39.95% | 39.95% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 1.01% | 1.01% | 2.87% | 2.87% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 1.01% | 1.01% | 27.77% | 27.77% | 842 ms | → 1.00x | 130 | 15m | 10d ago | 3m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 1.01% | 1.01% | 87.63% | 87.63% | 1482 ms | → 1.00x | 0 | — | — | 2m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 1.01% | 1.01% | 8.99% | 8.99% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 1.01% | 1.01% | 17.59% | 17.59% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 1.01% | 1.01% | 27.04% | 27.04% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 1.01% | 1.01% | 3.12% | 3.12% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 1.01% | 1.01% | 31.88% | 31.88% | — | → 1.00x | 3 | 5d 3h | 16d ago | 3m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 1.01% | 1.01% | 22.07% | 22.07% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 1.01% | 1.01% | 34.65% | 34.65% | 917 ms | → 1.00x | 2 | 2h 9m | 26d ago | 3m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 1.01% | 1.01% | 46.41% | 46.41% | — | → 1.00x | 2 | 8d 8h | 8d ago | 3m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 1.01% | 1.01% | 35.56% | 35.56% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 1.01% | 1.01% | 26.68% | 26.68% | 861 ms | → 1.00x | 0 | — | — | 3m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 1.01% | 1.01% | 5.20% | 5.20% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 1.01% | 1.01% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 1.01% | 1.01% | 22.80% | 22.80% | 86 ms | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 1.01% | 1.01% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 1.01% | 1.01% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 13d ago | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 1.01% | 1.01% | 18.10% | 18.10% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 1.01% | 1.01% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 1.01% | 1.01% | 78.14% | 78.14% | 757 ms | → 1.00x | 96 | 4h 13m | 8d ago | 3m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 1.01% | 1.01% | 38.64% | 38.64% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 1.01% | 1.01% | 22.68% | 22.68% | 976 ms | → 1.00x | 0 | — | — | 3m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 1.00% | 1.00% | 73.53% | 73.53% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 1.00% | 1.00% | 43.20% | 43.20% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 1.00% | 1.00% | 19.82% | 19.82% | — | → 1.00x | 4 | 1d 24h | 15d ago | 3m ago |
| [Crond](https://lmspeed.net/provider/crond) | 1.00% | 1.00% | 22.80% | 22.80% | 1868 ms | → 1.00x | 5 | 6m | 17d ago | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 1.00% | 1.00% | 73.32% | 73.32% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 1.00% | 1.00% | 99.26% | 99.26% | 2029 ms | → 1.00x | 0 | — | — | 3m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 1.00% | 1.00% | 16.23% | 16.23% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 1.00% | 1.00% | 51.26% | 51.26% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 1.00% | 1.00% | 77.23% | 77.23% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 1.00% | 1.00% | 63.31% | 63.31% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 1.00% | 1.00% | 40.15% | 40.15% | 234 ms | → 1.00x | 0 | — | — | 3m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 1.00% | 1.00% | 54.39% | 54.39% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 1.00% | 1.00% | 90.53% | 90.53% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 1.00% | 1.00% | 16.69% | 16.69% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 1.00% | 1.00% | 0.01% | 0.01% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 1.00% | 1.00% | 74.22% | 74.22% | — | → 1.00x | 20 | 8h 9m | 14d ago | 3m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 1.00% | 1.00% | 3.13% | 3.13% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 1.00% | 1.00% | 50.25% | 50.25% | 1092 ms | → 1.00x | 4 | 0s | 23d ago | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 1.00% | 1.00% | 96.06% | 96.06% | — | → 1.00x | 6 | 14h 25m | 10d ago | 3m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 1.00% | 1.00% | 20.82% | 20.82% | 1098 ms | → 1.00x | 62 | 7m | 7d ago | 3m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 1.00% | 1.00% | 33.64% | 33.64% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 1.00% | 1.00% | 87.39% | 87.39% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 1.00% | 1.00% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 15d ago | 3m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 1.00% | 1.00% | 32.40% | 32.40% | — | → 1.00x | 2 | 2d 6h | 11d ago | 3m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 1.00% | 1.00% | 48.90% | 48.90% | — | → 1.00x | 5 | 4d 14h | 18d ago | 3m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 1.00% | 1.00% | 50.43% | 50.43% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 1.00% | 1.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 1.00% | 1.00% | 45.98% | 45.98% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.99% | 0.99% | 84.44% | 84.44% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.99% | 0.99% | 48.81% | 48.81% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.99% | 0.99% | 34.00% | 34.00% | 1537 ms | → 1.00x | 2 | 30m | 11d ago | 3m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.99% | 0.99% | 82.46% | 82.46% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.99% | 0.99% | 49.10% | 49.10% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.99% | 0.99% | 99.12% | 99.12% | — | → 1.00x | 5 | 2h 24m | 7d ago | 3m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.99% | 0.99% | 3.84% | 3.84% | 368 ms | → 1.00x | 2 | 11d 6h | 8d ago | 3m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.99% | 0.99% | 21.71% | 21.71% | — | → 1.00x | 40 | 1h 44m | 7d ago | 3m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.99% | 0.99% | 46.30% | 46.30% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.99% | 0.99% | 39.16% | 39.16% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.99% | 0.99% | 86.17% | 86.17% | 683 ms | → 1.00x | 1 | 10s | 13d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.99% | 0.99% | 83.68% | 83.68% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.99% | 0.99% | 75.88% | 75.88% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.99% | 0.99% | 23.11% | 23.11% | 390 ms | → 1.00x | 0 | — | — | 4m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.99% | 0.99% | 5.08% | 5.08% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.99% | 0.99% | 57.88% | 57.88% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.99% | 0.99% | 60.67% | 60.67% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.99% | 0.99% | 38.37% | 38.37% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.99% | 0.99% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 27d ago | 4m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.99% | 0.99% | 76.99% | 76.99% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.99% | 0.99% | 22.32% | 22.32% | 278 ms | → 1.00x | 0 | — | — | 4m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.99% | 0.99% | 23.09% | 23.09% | 669 ms | → 1.00x | 5 | 12m | 13d ago | 4m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.99% | 0.99% | 63.55% | 63.55% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.99% | 0.99% | 84.65% | 84.65% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.99% | 0.99% | 62.64% | 62.64% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.99% | 0.99% | 23.13% | 23.13% | 1572 ms | → 1.00x | 0 | — | — | 4m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.99% | 0.99% | 99.17% | 99.17% | 664 ms | → 1.00x | 0 | — | — | 4m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.99% | 0.99% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.99% | 0.99% | 70.96% | 70.96% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.99% | 0.99% | 99.84% | 99.84% | 620 ms | → 1.00x | 0 | — | — | 4m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.99% | 0.99% | 39.57% | 39.57% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.99% | 0.99% | 92.62% | 92.62% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.99% | 0.99% | 86.30% | 86.30% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.99% | 0.99% | 99.77% | 99.77% | 1828 ms | → 1.00x | 0 | — | — | 4m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.99% | 0.99% | 68.72% | 68.72% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.98% | 0.98% | 99.74% | 99.74% | 24 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.98% | 0.98% | 35.55% | 35.55% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.98% | 0.98% | 45.59% | 45.59% | 181 ms | → 1.00x | 0 | — | — | 4m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.98% | 0.98% | 99.53% | 99.53% | 857 ms | → 1.00x | 0 | — | — | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.98% | 0.98% | 83.66% | 83.66% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.98% | 0.98% | 75.27% | 75.27% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 0.98% | 0.98% | 99.95% | 99.95% | 2098 ms | → 1.00x | 0 | — | — | 4m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.98% | 0.98% | 74.18% | 74.18% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.98% | 0.98% | 74.31% | 74.31% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.98% | 0.98% | 81.34% | 81.34% | 1038 ms | → 1.00x | 1 | 3h | 11d ago | 4m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.98% | 0.98% | 54.28% | 54.28% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.98% | 0.98% | 10.24% | 10.24% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.98% | 0.98% | 46.73% | 46.73% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.98% | 0.98% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.98% | 0.98% | 23.25% | 23.25% | — | → 1.00x | 1 | 23d 1h | 30d ago | 4m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.94% | 0.94% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 20d ago | 2m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.92% | 0.92% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 17d ago | 3m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.92% | 0.92% | 23.40% | 23.40% | 1209 ms | → 1.00x | 72 | 13m | 10d ago | 3m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.91% | 0.91% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.85% | 0.85% | 99.75% | 99.75% | 446 ms | → 1.00x | 1 | 0s | 8d ago | 55s ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.85% | 0.85% | 100.00% | 100.00% | 165 ms | → 1.00x | 0 | — | — | 1m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.85% | 0.85% | 98.70% | 98.70% | 1302 ms | → 1.00x | 11 | 0s | 17d ago | 1m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.85% | 0.85% | 100.00% | 100.00% | 2144 ms | → 1.00x | 0 | — | — | 55s ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.85% | 0.85% | 98.40% | 98.40% | 633 ms | → 1.00x | 0 | — | — | 1m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.85% | 0.85% | 98.92% | 98.92% | 584 ms | → 1.00x | 2 | 2h 30m | 9d ago | 1m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.85% | 0.85% | 99.29% | 99.29% | 1453 ms | → 1.00x | 1 | 2h 37m | 26d ago | 1m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.85% | 0.85% | 100.00% | 100.00% | 600 ms | → 1.00x | 0 | — | — | 55s ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.85% | 0.85% | 100.00% | 100.00% | 325 ms | → 1.00x | 0 | — | — | 1m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.85% | 0.85% | 98.05% | 98.05% | 43 ms | → 1.00x | 3 | 0s | 8d ago | 1m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.85% | 0.85% | 76.21% | 76.21% | — | → 1.00x | 1 | 20d 10h | 27d ago | 1m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.85% | 0.85% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 1m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.85% | 0.85% | 99.73% | 99.73% | 403 ms | → 1.00x | 1 | 2h 60m | 8d ago | 1m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.85% | 0.85% | 99.94% | 99.94% | 953 ms | → 1.00x | 1 | 21m | 22d ago | 1m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.85% | 0.85% | 99.60% | 99.60% | 1074 ms | → 1.00x | 0 | — | — | 1m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.84% | 0.84% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 20d ago | 2m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.84% | 0.84% | 83.84% | 83.84% | 594 ms | → 1.00x | 8 | 17m | 12d ago | 2m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.84% | 0.84% | 16.44% | 16.44% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.84% | 0.84% | 75.41% | 75.41% | 4686 ms | → 1.00x | 197 | 1h 20m | 7d ago | 2m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.84% | 0.84% | 91.99% | 91.99% | 553 ms | → 1.00x | 0 | — | — | 2m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.84% | 0.84% | 3.80% | 3.80% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.84% | 0.84% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.82% | 0.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.82% | 0.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.82% | 0.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | 3m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.81% | 0.81% | 32.96% | 32.96% | 249 ms | → 1.00x | 0 | — | — | 3m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.10% | 0.10% | — | — | — | → 1.00x | 0 | — | — | 55s ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 1m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 57s ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 55s ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 56s ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 55s ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 1m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 55s ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 23d 1h | 30d ago | — |

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
