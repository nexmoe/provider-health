# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**689 providers** — 263 🟢 operational · 116 🟡 degraded · 308 🔴 down · 2 ⚫ unknown

_Updated 2026-07-15 05:36 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (263)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.64% | 99.64% | 99.98% | 99.98% | 1086 ms | → 1.00x | 1 | 4m | 12d ago | 1m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.64% | 99.64% | 93.42% | 93.42% | 3419 ms | → 1.00x | 2 | 6m | 12d ago | 1m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.64% | 99.64% | 99.74% | 99.74% | 1442 ms | → 1.00x | 4 | 0s | 7d ago | 1m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.64% | 99.64% | 99.92% | 99.92% | 630 ms | → 1.00x | 0 | — | — | 1m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.63% | 99.63% | 99.80% | 99.80% | 579 ms | → 1.00x | 0 | — | — | 48s ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.63% | 99.63% | 99.98% | 99.98% | 117 ms | → 1.00x | 1 | 0s | 23d ago | 31s ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.63% | 99.63% | 1.90% | 1.90% | — | → 1.00x | 1 | 24d 1h | 30d ago | 30s ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.63% | 99.63% | 0.11% | 0.11% | — | → 1.00x | 1 | 24d 1h | 30d ago | 30s ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.63% | 99.63% | 30.20% | 30.20% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.63% | 99.63% | 63.14% | 63.14% | 1242 ms | → 1.00x | 1 | 0s | 8d ago | 5m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.63% | 99.63% | 71.79% | 71.79% | 1021 ms | → 1.00x | 0 | — | — | 5m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.63% | 99.63% | 63.68% | 63.68% | 1706 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.62% | 99.62% | 99.97% | 99.97% | 1378 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.62% | 99.62% | 99.18% | 99.18% | 842 ms | → 1.00x | 0 | — | — | 5m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.62% | 99.62% | 58.17% | 58.17% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.62% | 99.62% | 99.00% | 99.00% | 1689 ms | → 1.00x | 1 | 30m | 29d ago | 5m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.62% | 99.62% | 89.57% | 89.57% | 1286 ms | → 1.00x | 0 | — | — | 5m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.62% | 99.62% | 96.69% | 96.69% | 176 ms | → 1.00x | 0 | — | — | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.62% | 99.62% | 43.48% | 43.48% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.62% | 99.62% | 92.20% | 92.20% | 1958 ms | → 1.00x | 6 | 0s | 10d ago | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.62% | 99.62% | 99.95% | 99.95% | 256 ms | → 1.00x | 0 | — | — | 4m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.62% | 99.62% | 98.81% | 98.81% | 430 ms | → 1.00x | 0 | — | — | 4m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.62% | 99.62% | 98.35% | 98.35% | 849 ms | → 1.00x | 1 | 1h 40m | 27d ago | 4m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.62% | 99.62% | 98.43% | 98.43% | 442 ms | → 1.00x | 1 | 0s | 27d ago | 4m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.62% | 99.62% | 31.33% | 31.33% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.62% | 99.62% | 99.34% | 99.34% | 4609 ms | → 1.00x | 11 | 5m | 7d ago | 4m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.62% | 99.62% | 99.08% | 99.08% | 759 ms | → 1.00x | 0 | — | — | 4m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.62% | 99.62% | 98.56% | 98.56% | 1556 ms | → 1.00x | 4 | 1h 59m | 17d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.62% | 99.62% | 99.92% | 99.92% | 1967 ms | → 1.00x | 0 | — | — | 4m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.62% | 99.62% | 24.52% | 24.52% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.62% | 99.62% | 87.87% | 87.87% | 787 ms | → 1.00x | 4 | 8m | 19d ago | 4m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.62% | 99.62% | 16.67% | 16.67% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.61% | 99.61% | 99.45% | 99.45% | 220 ms | → 1.00x | 2 | 3h 1m | 13d ago | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.61% | 99.61% | 99.93% | 99.93% | 952 ms | → 1.00x | 1 | 0s | 7d ago | 3m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.61% | 99.61% | 98.72% | 98.72% | 694 ms | → 1.00x | 0 | — | — | 3m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.61% | 99.61% | 99.67% | 99.67% | 2356 ms | → 1.00x | 1 | 0s | 9d ago | 3m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.61% | 99.61% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 3m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.61% | 99.61% | 60.72% | 60.72% | 627 ms | → 1.00x | 1 | 11h 19m | 30d ago | 3m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.61% | 99.61% | 100.00% | 100.00% | 924 ms | → 1.00x | 0 | — | — | 3m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.61% | 99.61% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.61% | 99.61% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.52% | 99.52% | 93.57% | 93.57% | 2488 ms | → 1.00x | 1 | 4m | 12d ago | 1m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.52% | 99.52% | 98.78% | 98.78% | 2714 ms | → 1.00x | 20 | 5s | 12d ago | 1m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.52% | 99.52% | 99.49% | 99.49% | 2452 ms | → 1.00x | 2 | 4h 55m | 18d ago | 1m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.52% | 99.52% | 99.65% | 99.65% | 61 ms | → 1.00x | 0 | — | — | 1m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.52% | 99.52% | 49.74% | 49.74% | 781 ms | → 1.00x | 6 | 35m | 16d ago | 1m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.51% | 99.51% | 76.22% | 76.22% | — | → 1.00x | 1 | 24d 1h | 30d ago | 59s ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.51% | 99.51% | 44.95% | 44.95% | 112 ms | → 1.00x | 0 | — | — | 59s ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.51% | 99.51% | 99.81% | 99.81% | 836 ms | → 1.00x | 0 | — | — | 59s ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.51% | 99.51% | 99.65% | 99.65% | 1517 ms | → 1.00x | 0 | — | — | 48s ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.51% | 99.51% | 99.97% | 99.97% | 1671 ms | → 1.00x | 0 | — | — | 43s ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.51% | 99.51% | 98.94% | 98.94% | 1185 ms | → 1.00x | 1 | 0s | 13d ago | 43s ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.51% | 99.51% | 99.02% | 99.02% | 3413 ms | → 1.00x | 4 | 0s | 16d ago | 36s ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.51% | 99.51% | 99.90% | 99.90% | 866 ms | → 1.00x | 1 | 0s | 23d ago | 30s ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.51% | 99.51% | 80.20% | 80.20% | 980 ms | → 1.00x | 3 | 0s | 8d ago | 19s ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.51% | 99.51% | 99.85% | 99.85% | 2571 ms | → 1.00x | 0 | — | — | 14s ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.51% | 99.51% | 22.30% | 22.30% | 2707 ms | → 1.00x | 16 | 0s | 8d ago | 14s ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.51% | 99.51% | 99.68% | 99.68% | 2009 ms | → 1.00x | 0 | — | — | 19s ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.51% | 99.51% | 24.53% | 24.53% | 1607 ms | → 1.00x | 1 | 0s | 22d ago | 18s ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.51% | 99.51% | 99.95% | 99.95% | 1452 ms | → 1.00x | 1 | 0s | 27d ago | 19s ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.51% | 99.51% | 99.77% | 99.77% | 800 ms | → 1.00x | 0 | — | — | 11s ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.51% | 99.51% | 97.57% | 97.57% | 1783 ms | → 1.00x | 7 | 0s | 9d ago | 5s ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.51% | 99.51% | 5.16% | 5.16% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5s ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.51% | 99.51% | 99.37% | 99.37% | 1896 ms | → 1.00x | 0 | — | — | 5s ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.50% | 99.50% | 93.26% | 93.26% | 391 ms | → 1.00x | 0 | — | — | 5m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.50% | 99.50% | 60.60% | 60.60% | 1387 ms | → 1.00x | 0 | — | — | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.50% | 99.50% | 98.73% | 98.73% | 751 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.50% | 99.50% | 99.61% | 99.61% | 343 ms | → 1.00x | 0 | — | — | 5m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.50% | 99.50% | 69.43% | 69.43% | 1217 ms | → 1.00x | 2 | 0s | 21d ago | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.50% | 99.50% | 83.46% | 83.46% | 1776 ms | → 1.00x | 2 | 0s | 8d ago | 5m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.50% | 99.50% | 90.32% | 90.32% | 774 ms | → 1.00x | 0 | — | — | 5m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.50% | 99.50% | 97.00% | 97.00% | 322 ms | → 1.00x | 0 | — | — | 5m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.50% | 99.50% | 66.50% | 66.50% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.50% | 99.50% | 99.86% | 99.86% | 655 ms | → 1.00x | 0 | — | — | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.50% | 99.50% | 99.89% | 99.89% | 1578 ms | → 1.00x | 0 | — | — | 5m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.50% | 99.50% | 99.30% | 99.30% | 456 ms | → 1.00x | 0 | — | — | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.50% | 99.50% | 98.16% | 98.16% | 3168 ms | → 1.00x | 0 | — | — | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.50% | 99.50% | 26.43% | 26.43% | 2139 ms | → 1.00x | 1 | 14d 7h | 30d ago | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.50% | 99.50% | 99.78% | 99.78% | 2425 ms | → 1.00x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.49% | 99.49% | 100.00% | 100.00% | 1894 ms | → 1.00x | 0 | — | — | 4m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.49% | 99.49% | 98.69% | 98.69% | 708 ms | → 1.00x | 0 | — | — | 4m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.49% | 99.49% | 98.78% | 98.78% | 1066 ms | → 1.00x | 1 | 0s | 6d ago | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.49% | 99.49% | 99.87% | 99.87% | 743 ms | → 1.00x | 1 | 0s | 19d ago | 4m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.49% | 99.49% | 93.73% | 93.73% | 55 ms | → 1.00x | 1 | 1h 22m | 22d ago | 4m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.49% | 99.49% | 98.47% | 98.47% | 705 ms | → 1.00x | 0 | — | — | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.49% | 99.49% | 98.16% | 98.16% | 244 ms | → 1.00x | 4 | 0s | 14d ago | 4m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.49% | 99.49% | 99.70% | 99.70% | 1440 ms | → 1.00x | 0 | — | — | 4m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.49% | 99.49% | 98.88% | 98.88% | 1246 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.49% | 99.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.49% | 99.49% | 99.94% | 99.94% | 1158 ms | → 1.00x | 0 | — | — | 4m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.49% | 99.49% | 100.00% | 100.00% | 1016 ms | → 1.00x | 0 | — | — | 4m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.49% | 99.49% | 99.95% | 99.95% | 1952 ms | → 1.00x | 1 | 0s | 26d ago | 4m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.49% | 99.49% | 99.94% | 99.94% | 1095 ms | → 1.00x | 0 | — | — | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.49% | 99.49% | 100.00% | 100.00% | 370 ms | → 1.00x | 0 | — | — | 4m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.49% | 99.49% | 99.76% | 99.76% | 1971 ms | → 1.00x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.49% | 99.49% | 100.00% | 100.00% | 208 ms | → 1.00x | 0 | — | — | 3m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.49% | 99.49% | 99.98% | 99.98% | 774 ms | → 1.00x | 0 | — | — | 3m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.49% | 99.49% | 99.85% | 99.85% | 1251 ms | → 1.00x | 1 | 3m | 8d ago | 3m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.49% | 99.49% | 99.98% | 99.98% | 541 ms | → 1.00x | 0 | — | — | 3m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.49% | 99.49% | 99.97% | 99.97% | 979 ms | → 1.00x | 0 | — | — | 4m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.49% | 99.49% | 99.89% | 99.89% | 1564 ms | → 1.00x | 0 | — | — | 3m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.49% | 99.49% | 99.61% | 99.61% | 395 ms | → 1.00x | 1 | 0s | 23d ago | 3m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.49% | 99.49% | 99.88% | 99.88% | 1482 ms | → 1.00x | 0 | — | — | 3m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.49% | 99.49% | 99.85% | 99.85% | 916 ms | → 1.00x | 0 | — | — | 3m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.49% | 99.49% | 99.66% | 99.66% | 613 ms | → 1.00x | 2 | 0s | 27d ago | 3m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.49% | 99.49% | 99.92% | 99.92% | 623 ms | → 1.00x | 1 | 0s | 15d ago | 3m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.48% | 99.48% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.48% | 99.48% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.40% | 99.40% | 68.59% | 68.59% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.40% | 99.40% | 75.23% | 75.23% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.40% | 99.40% | 99.76% | 99.76% | 226 ms | → 1.00x | 0 | — | — | 1m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.39% | 99.39% | 70.89% | 70.89% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.39% | 99.39% | 99.94% | 99.94% | 615 ms | → 1.00x | 0 | — | — | 54s ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.39% | 99.39% | 99.96% | 99.96% | 472 ms | → 1.00x | 0 | — | — | 54s ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.39% | 99.39% | 98.00% | 98.00% | 1035 ms | → 1.00x | 0 | — | — | 48s ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.39% | 99.39% | 89.73% | 89.73% | 1442 ms | → 1.00x | 0 | — | — | 48s ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.39% | 99.39% | 22.33% | 22.33% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.39% | 99.39% | 99.92% | 99.92% | 1086 ms | → 1.00x | 1 | 0s | 8d ago | 38s ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.39% | 99.39% | 99.87% | 99.87% | 1795 ms | → 1.00x | 2 | 0s | 14d ago | 31s ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.38% | 99.38% | 99.87% | 99.87% | 270 ms | → 1.00x | 0 | — | — | 11s ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.38% | 99.38% | 25.33% | 25.33% | 682 ms | → 1.00x | 3 | 0s | 19d ago | 5s ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.38% | 99.38% | 99.09% | 99.09% | 212 ms | → 1.00x | 0 | — | — | 5m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.38% | 99.38% | 74.11% | 74.11% | 588 ms | → 1.00x | 6 | 1h 20m | 7d ago | 5m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.38% | 99.38% | 64.92% | 64.92% | 283 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.38% | 99.38% | 99.88% | 99.88% | 1226 ms | → 1.00x | 0 | — | — | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.38% | 99.38% | 84.58% | 84.58% | 2062 ms | → 1.00x | 0 | — | — | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.37% | 99.37% | 94.26% | 94.26% | 483 ms | → 1.00x | 0 | — | — | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.37% | 99.37% | 91.09% | 91.09% | 326 ms | → 1.00x | 4 | 0s | 17d ago | 5m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.37% | 99.37% | 99.31% | 99.31% | 1813 ms | → 1.00x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.37% | 99.37% | 97.21% | 97.21% | 1905 ms | → 1.00x | 0 | — | — | 5m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.37% | 99.37% | 56.85% | 56.85% | 1225 ms | → 1.00x | 8 | 2h 1m | 19d ago | 4m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.37% | 99.37% | 98.38% | 98.38% | 1408 ms | → 1.00x | 2 | 3h 26m | 19d ago | 5m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.37% | 99.37% | 98.90% | 98.90% | 1042 ms | → 1.00x | 1 | 1h 60m | 24d ago | 5m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.37% | 99.37% | 99.83% | 99.83% | 763 ms | → 1.00x | 0 | — | — | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.37% | 99.37% | 98.47% | 98.47% | 1791 ms | → 1.00x | 2 | 0s | 14d ago | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.37% | 99.37% | 55.08% | 55.08% | 2196 ms | → 1.00x | 30 | 1m | 7d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.37% | 99.37% | 29.98% | 29.98% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.37% | 99.37% | 98.37% | 98.37% | 1064 ms | → 1.00x | 0 | — | — | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.37% | 99.37% | 96.80% | 96.80% | 700 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.37% | 99.37% | 99.93% | 99.93% | 181 ms | → 1.00x | 1 | 0s | 8d ago | 4m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.37% | 99.37% | 99.82% | 99.82% | 558 ms | → 1.00x | 1 | 0s | 17d ago | 4m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.37% | 99.37% | 97.87% | 97.87% | 104 ms | → 1.00x | 0 | — | — | 4m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.36% | 99.36% | 6.05% | 6.05% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.36% | 99.36% | 99.97% | 99.97% | 197 ms | → 1.00x | 0 | — | — | 4m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.36% | 99.36% | 98.04% | 98.04% | 1243 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.36% | 99.36% | 99.67% | 99.67% | 963 ms | → 1.00x | 1 | 0s | 30d ago | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.36% | 99.36% | 93.61% | 93.61% | 355 ms | → 1.00x | 40 | 9m | 8d ago | 4m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.36% | 99.36% | 100.00% | 100.00% | 1128 ms | → 1.00x | 0 | — | — | 4m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.36% | 99.36% | 89.89% | 89.89% | 139 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.36% | 99.36% | 100.00% | 100.00% | 841 ms | → 1.00x | 0 | — | — | 4m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.36% | 99.36% | 99.97% | 99.97% | 2676 ms | → 1.00x | 0 | — | — | 3m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.36% | 99.36% | 100.00% | 100.00% | 556 ms | → 1.00x | 0 | — | — | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.36% | 99.36% | 100.00% | 100.00% | 710 ms | → 1.00x | 0 | — | — | 3m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.36% | 99.36% | 99.86% | 99.86% | 842 ms | → 1.00x | 1 | 0s | 23d ago | 4m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.36% | 99.36% | 100.00% | 100.00% | 526 ms | → 1.00x | 0 | — | — | 3m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.36% | 99.36% | 100.00% | 100.00% | 672 ms | → 1.00x | 0 | — | — | 3m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.36% | 99.36% | 100.00% | 100.00% | 611 ms | → 1.00x | 0 | — | — | 3m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.36% | 99.36% | 99.92% | 99.92% | 270 ms | → 1.00x | 0 | — | — | 3m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.36% | 99.36% | 100.00% | 100.00% | 803 ms | → 1.00x | 0 | — | — | 3m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.36% | 99.36% | 99.77% | 99.77% | 609 ms | → 1.00x | 3 | 0s | 8d ago | 3m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.28% | 99.28% | 99.98% | 99.98% | 866 ms | → 1.00x | 1 | 4m | 12d ago | 1m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.27% | 99.27% | 99.75% | 99.75% | 158 ms | → 1.00x | 0 | — | — | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.27% | 99.27% | 99.28% | 99.28% | 170 ms | → 1.00x | 3 | 0s | 8d ago | 1m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.27% | 99.27% | 99.60% | 99.60% | 1955 ms | → 1.00x | 1 | 2s | 8d ago | 1m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.27% | 99.27% | 17.47% | 17.47% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.27% | 99.27% | 99.74% | 99.74% | 1533 ms | → 1.00x | 1 | 4s | 9d ago | 59s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.27% | 99.27% | 99.74% | 99.74% | 2261 ms | → 1.00x | 2 | 0s | 22d ago | 59s ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.27% | 99.27% | 99.58% | 99.58% | 2152 ms | → 1.00x | 19 | 2m | 9d ago | 59s ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.27% | 99.27% | 96.43% | 96.43% | 2081 ms | → 1.00x | 3 | 1d 4h | 6d ago | 59s ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.27% | 99.27% | 99.90% | 99.90% | 1255 ms | → 1.00x | 0 | — | — | 59s ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.27% | 99.27% | 99.73% | 99.73% | 295 ms | → 1.00x | 10 | 10m | 22d ago | 54s ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.27% | 99.27% | 99.92% | 99.92% | 1000 ms | → 1.00x | 1 | 0s | 6d ago | 54s ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.27% | 99.27% | 99.90% | 99.90% | 94 ms | → 1.00x | 0 | — | — | 48s ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.27% | 99.27% | 99.58% | 99.58% | 1150 ms | → 1.00x | 1 | 2h | 6d ago | 48s ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.27% | 99.27% | 99.49% | 99.49% | 819 ms | → 1.00x | 0 | — | — | 43s ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.27% | 99.27% | 76.89% | 76.89% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.27% | 99.27% | 99.85% | 99.85% | 1020 ms | → 1.00x | 2 | 0s | 7d ago | 38s ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.27% | 99.27% | 98.92% | 98.92% | 1516 ms | → 1.00x | 0 | — | — | 35s ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.27% | 99.27% | 56.98% | 56.98% | 1039 ms | → 1.00x | 6 | 0s | 21d ago | 30s ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.26% | 99.26% | 99.34% | 99.34% | 2142 ms | → 1.00x | 2 | 13h 25m | 30d ago | 14s ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.26% | 99.26% | 24.63% | 24.63% | 2514 ms | → 1.00x | 1 | 0s | 26d ago | 5s ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.26% | 99.26% | 99.67% | 99.67% | — | → 1.00x | 5 | 5h 48m | 7d ago | 4s ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.25% | 99.25% | 50.15% | 50.15% | 919 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.25% | 99.25% | 54.70% | 54.70% | 332 ms | → 1.00x | 2 | 0s | 25d ago | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.25% | 99.25% | 24.91% | 24.91% | 503 ms | → 1.00x | 2 | 0s | 19d ago | 5m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.25% | 99.25% | 31.58% | 31.58% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.25% | 99.25% | 62.65% | 62.65% | 1264 ms | → 1.00x | 0 | — | — | 5m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.25% | 99.25% | 65.57% | 65.57% | 825 ms | → 1.00x | 0 | — | — | 5m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.25% | 99.25% | 99.35% | 99.35% | 1546 ms | → 1.00x | 0 | — | — | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.25% | 99.25% | 96.88% | 96.88% | 1673 ms | → 1.00x | 0 | — | — | 5m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.25% | 99.25% | 81.07% | 81.07% | 1470 ms | → 1.00x | 0 | — | — | 5m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.25% | 99.25% | 98.00% | 98.00% | 278 ms | → 1.00x | 1 | 6h 11m | 30d ago | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.25% | 99.25% | 82.26% | 82.26% | 1879 ms | → 1.00x | 0 | — | — | 5m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.25% | 99.25% | 99.83% | 99.83% | 1151 ms | → 1.00x | 0 | — | — | 5m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.25% | 99.25% | 76.90% | 76.90% | 383 ms | → 1.00x | 1 | 0s | 23d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.24% | 99.24% | 99.64% | 99.64% | 1567 ms | → 1.00x | 1 | 4h 60m | 26d ago | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.24% | 99.24% | 98.96% | 98.96% | 1288 ms | → 1.00x | 1 | 29m | 23d ago | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.24% | 99.24% | 64.61% | 64.61% | 2198 ms | → 1.00x | 3 | 3d 11h | 14d ago | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.24% | 99.24% | 98.56% | 98.56% | 1979 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.24% | 99.24% | 98.11% | 98.11% | 2457 ms | → 1.00x | 0 | — | — | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.24% | 99.24% | 95.85% | 95.85% | 1565 ms | → 1.00x | 0 | — | — | 4m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.24% | 99.24% | 98.83% | 98.83% | 488 ms | → 1.00x | 0 | — | — | 4m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.24% | 99.24% | 43.99% | 43.99% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.24% | 99.24% | 96.94% | 96.94% | 958 ms | → 1.00x | 1 | 0s | 8d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.24% | 99.24% | 99.87% | 99.87% | 738 ms | → 1.00x | 0 | — | — | 4m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.24% | 99.24% | 97.07% | 97.07% | 835 ms | → 1.00x | 2 | 1d 2h | 19d ago | 4m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.24% | 99.24% | 98.75% | 98.75% | 1359 ms | → 1.00x | 7 | 20s | 11d ago | 4m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.24% | 99.24% | 100.00% | 100.00% | 734 ms | → 1.00x | 0 | — | — | 4m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.24% | 99.24% | 99.51% | 99.51% | 246 ms | → 1.00x | 0 | — | — | 4m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.24% | 99.24% | 100.00% | 100.00% | 116 ms | → 1.00x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.24% | 99.24% | 97.35% | 97.35% | 1183 ms | → 1.00x | 2 | 2h 51m | 12d ago | 4m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.23% | 99.23% | 99.10% | 99.10% | 1772 ms | → 1.00x | 1 | 0s | 27d ago | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.23% | 99.23% | 100.00% | 100.00% | 1478 ms | → 1.00x | 0 | — | — | 4m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.23% | 99.23% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.23% | 99.23% | 99.97% | 99.97% | 747 ms | → 1.00x | 0 | — | — | 4m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.23% | 99.23% | 99.97% | 99.97% | 612 ms | → 1.00x | 0 | — | — | 4m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.23% | 99.23% | 99.98% | 99.98% | 1316 ms | → 1.00x | 0 | — | — | 3m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.23% | 99.23% | 99.94% | 99.94% | 566 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.23% | 99.23% | 91.90% | 91.90% | 2752 ms | → 1.00x | 20 | 1h 59m | 19d ago | 3m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.23% | 99.23% | 96.87% | 96.87% | 1784 ms | → 1.00x | 1 | 2h 1m | 27d ago | 3m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.23% | 99.23% | 99.94% | 99.94% | 2069 ms | → 1.00x | 0 | — | — | 3m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.23% | 99.23% | 99.94% | 99.94% | 1100 ms | → 1.00x | 0 | — | — | 3m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.16% | 99.16% | 36.33% | 36.33% | 2314 ms | → 1.00x | 3 | 2m | 12d ago | 1m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.15% | 99.15% | 99.91% | 99.91% | 1520 ms | → 1.00x | 0 | — | — | 48s ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.15% | 99.15% | 100.00% | 100.00% | 910 ms | → 1.00x | 0 | — | — | 42s ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.15% | 99.15% | 99.87% | 99.87% | 1379 ms | → 1.00x | 1 | 0s | 8d ago | 38s ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.14% | 99.14% | 97.94% | 97.94% | 1835 ms | → 1.00x | 2 | 30m | 11d ago | 14s ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.14% | 99.14% | 97.28% | 97.28% | 1044 ms | → 1.00x | 0 | — | — | 19s ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.14% | 99.14% | 99.79% | 99.79% | 1414 ms | → 1.00x | 4 | 0s | 7d ago | 18s ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.14% | 99.14% | 88.17% | 88.17% | — | → 1.00x | 1 | 24d 1h | 30d ago | 11s ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.14% | 99.14% | 24.54% | 24.54% | 1202 ms | → 1.00x | 1 | 0s | 29d ago | 4s ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.13% | 99.13% | 77.28% | 77.28% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4s ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.13% | 99.13% | 96.73% | 96.73% | 3100 ms | → 1.00x | 1 | 0s | 26d ago | 5s ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.13% | 99.13% | 96.32% | 96.32% | 1173 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.13% | 99.13% | 38.36% | 38.36% | 1856 ms | → 1.00x | 7 | 4h 17m | 27d ago | 5m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.13% | 99.13% | 68.50% | 68.50% | 1182 ms | → 1.00x | 2 | 10m | 25d ago | 5m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.13% | 99.13% | 77.97% | 77.97% | 528 ms | → 1.00x | 1 | 0s | 7d ago | 5m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.13% | 99.13% | 89.40% | 89.40% | 1809 ms | → 1.00x | 0 | — | — | 5m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.12% | 99.12% | 97.90% | 97.90% | 1502 ms | → 1.00x | 0 | — | — | 5m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.12% | 99.12% | 98.66% | 98.66% | 1012 ms | → 1.00x | 1 | 0s | 23d ago | 4m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.12% | 99.12% | 98.73% | 98.73% | 345 ms | → 1.00x | 0 | — | — | 4m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.12% | 99.12% | 97.74% | 97.74% | 2283 ms | → 1.00x | 5 | 3h 22m | 7d ago | 4m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.12% | 99.12% | 98.81% | 98.81% | 35 ms | → 1.00x | 4 | 38m | 21d ago | 4m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.12% | 99.12% | 99.76% | 99.76% | 2381 ms | → 1.00x | 2 | 0s | 22d ago | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.12% | 99.12% | 86.85% | 86.85% | 2135 ms | → 1.00x | 0 | — | — | 4m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.12% | 99.12% | 28.78% | 28.78% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.11% | 99.11% | 14.21% | 14.21% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.11% | 99.11% | 99.85% | 99.85% | 1694 ms | → 1.00x | 1 | 6h 1m | 7d ago | 4m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.11% | 99.11% | 99.33% | 99.33% | 183 ms | → 1.00x | 9 | 2m | 15d ago | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.11% | 99.11% | 99.67% | 99.67% | 1587 ms | → 1.00x | 0 | — | — | 4m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.10% | 99.10% | 99.92% | 99.92% | 769 ms | → 1.00x | 1 | 0s | 21d ago | 3m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.10% | 99.10% | 100.00% | 100.00% | 1186 ms | → 1.00x | 0 | — | — | 3m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.10% | 99.10% | 99.85% | 99.85% | 725 ms | → 1.00x | 3 | 0s | 8d ago | 3m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.03% | 99.03% | 98.29% | 98.29% | 2628 ms | → 1.00x | 0 | — | — | 1m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.03% | 99.03% | 98.93% | 98.93% | 2355 ms | → 1.00x | 2 | 0s | 9d ago | 1m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.03% | 99.03% | 97.57% | 97.57% | 2529 ms | → 1.00x | 0 | — | — | 47s ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.02% | 99.02% | 76.88% | 76.88% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.02% | 99.02% | 99.84% | 99.84% | 241 ms | → 1.00x | 0 | — | — | 38s ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.02% | 99.02% | 99.77% | 99.77% | 1281 ms | → 1.00x | 0 | — | — | 38s ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.02% | 99.02% | 99.48% | 99.48% | 1842 ms | → 1.00x | 0 | — | — | 14s ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.02% | 99.02% | 76.97% | 76.97% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.01% | 99.01% | 66.42% | 66.42% | 1162 ms | → 1.00x | 1 | 2h 38m | 25d ago | 4s ago |

</details>

<details open>
<summary><strong>🟡 Degraded (116)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.99% | 98.99% | 99.10% | 99.10% | 223 ms | → 1.00x | 1 | 0s | 23d ago | 4m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.99% | 98.99% | 96.18% | 96.18% | 2647 ms | → 1.00x | 4 | 41m | 15d ago | 5m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.99% | 98.99% | 91.87% | 91.87% | 480 ms | → 1.00x | 1 | 30m | 17d ago | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 98.99% | 98.99% | 98.74% | 98.74% | 705 ms | → 1.00x | 0 | — | — | 5m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 98.99% | 98.99% | 99.74% | 99.74% | 909 ms | → 1.00x | 0 | — | — | 4m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 98.99% | 98.99% | 97.00% | 97.00% | 278 ms | → 1.00x | 4 | 1h 51m | 9d ago | 4m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.99% | 98.99% | 93.06% | 93.06% | 236 ms | → 1.00x | 7 | 9m | 19d ago | 4m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 98.99% | 98.99% | 99.86% | 99.86% | 661 ms | → 1.00x | 0 | — | — | 4m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 98.98% | 98.98% | 99.71% | 99.71% | 92 ms | → 1.00x | 1 | 0s | 8d ago | 4m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 98.98% | 98.98% | 99.89% | 99.89% | 858 ms | → 1.00x | 1 | 1h 9m | 29d ago | 4m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 98.97% | 98.97% | 99.95% | 99.95% | 554 ms | → 1.00x | 0 | — | — | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.97% | 98.97% | 100.00% | 100.00% | 1640 ms | → 1.00x | 0 | — | — | 3m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.97% | 98.97% | 99.09% | 99.09% | 994 ms | → 1.00x | 1 | 20m | 18d ago | 3m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.91% | 98.91% | 95.68% | 95.68% | 2427 ms | → 1.00x | 2 | 4d 7h | 23d ago | 1m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.91% | 98.91% | 97.98% | 97.98% | 2485 ms | → 1.00x | 0 | — | — | 59s ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.91% | 98.91% | 51.42% | 51.42% | 3504 ms | → 1.00x | 4 | 38m | 11d ago | 59s ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 98.88% | 98.88% | 26.84% | 26.84% | 1751 ms | → 1.00x | 0 | — | — | 5m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 98.86% | 98.86% | 84.75% | 84.75% | 776 ms | → 1.00x | 1 | 0s | 12d ago | 4m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 98.85% | 98.85% | 96.10% | 96.10% | 1850 ms | → 1.00x | 3 | 8h 19m | 28d ago | 4m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 98.85% | 98.85% | 99.97% | 99.97% | 1208 ms | → 1.00x | 0 | — | — | 4m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 98.79% | 98.79% | 99.62% | 99.62% | 466 ms | → 1.00x | 1 | 0s | 20d ago | 1m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 98.79% | 98.79% | 99.56% | 99.56% | 3162 ms | → 1.00x | 1 | 0s | 30d ago | 1m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 98.77% | 98.77% | 22.94% | 22.94% | 991 ms | → 1.00x | 1 | 0s | 22d ago | 26s ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.77% | 98.77% | 24.43% | 24.43% | 3396 ms | → 1.00x | 0 | — | — | 4s ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 98.75% | 98.75% | 90.95% | 90.95% | 1412 ms | → 1.00x | 3 | 0s | 13d ago | 5m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.67% | 98.67% | 99.61% | 99.61% | 3466 ms | → 1.00x | 0 | — | — | 1m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.67% | 98.67% | 99.85% | 99.85% | 541 ms | → 1.00x | 0 | — | — | 1m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.65% | 98.65% | 99.76% | 99.76% | 3813 ms | → 1.00x | 1 | 0s | 23d ago | 29s ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 98.65% | 98.65% | 38.65% | 38.65% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.64% | 98.64% | 98.12% | 98.12% | 3018 ms | → 1.00x | 0 | — | — | 5s ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.63% | 98.63% | 69.87% | 69.87% | 1964 ms | → 1.00x | 7 | 0s | 9d ago | 5m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 98.61% | 98.61% | 97.80% | 97.80% | 1757 ms | → 1.00x | 0 | — | — | 4m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 98.47% | 98.47% | 99.94% | 99.94% | 1444 ms | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 98.41% | 98.41% | 98.78% | 98.78% | 1494 ms | → 1.00x | 1 | 0s | 8d ago | 37s ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 98.37% | 98.37% | 97.03% | 97.03% | 225 ms | → 1.00x | 2 | 0s | 26d ago | 4m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.36% | 98.36% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 11d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 98.29% | 98.29% | 99.62% | 99.62% | 1288 ms | → 1.00x | 2 | 1h 60m | 8d ago | 38s ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.23% | 98.23% | 98.12% | 98.12% | 2825 ms | → 1.00x | 2 | 10m | 21d ago | 4m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.21% | 98.21% | 98.59% | 98.59% | 1910 ms | → 1.00x | 13 | 12m | 8d ago | 4m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.13% | 98.13% | 81.53% | 81.53% | 954 ms | → 1.00x | 0 | — | — | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 97.98% | 97.98% | 98.85% | 98.85% | 2205 ms | → 1.00x | 0 | — | — | 4m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 97.97% | 97.97% | 97.10% | 97.10% | 712 ms | → 1.00x | 2 | 10m | 14d ago | 4m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 97.88% | 97.88% | 2.34% | 2.34% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 97.82% | 97.82% | 99.34% | 99.34% | 347 ms | → 1.00x | 2 | 0s | 8d ago | 3m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.52% | 97.52% | 57.00% | 57.00% | 334 ms | → 1.00x | 0 | — | — | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 97.51% | 97.51% | 98.88% | 98.88% | 530 ms | → 1.00x | 0 | — | — | 5m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 97.49% | 97.49% | 28.39% | 28.39% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 97.49% | 97.49% | 99.82% | 99.82% | 884 ms | → 1.00x | 0 | — | — | 5m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 96.95% | 96.95% | 99.64% | 99.64% | 756 ms | → 1.00x | 5 | 57m | 10d ago | 43s ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 96.95% | 96.95% | 89.02% | 89.02% | 1097 ms | → 1.00x | 1 | 17h 30m | 30d ago | 42s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 96.92% | 96.92% | 88.31% | 88.31% | 387 ms | → 1.00x | 1 | 1h | 28d ago | 3m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.84% | 96.84% | 83.10% | 83.10% | 783 ms | → 1.00x | 13 | 4h 5m | 14d ago | 4m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 96.80% | 96.80% | 98.93% | 98.93% | 1402 ms | → 1.00x | 6 | 8m | 12d ago | 19s ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 96.46% | 96.46% | 32.93% | 32.93% | 2633 ms | → 1.00x | 0 | — | — | 4m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.42% | 96.42% | 97.85% | 97.85% | 704 ms | → 1.00x | 2 | 31m | 24d ago | 4m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 96.21% | 96.21% | 97.48% | 97.48% | 880 ms | → 1.00x | 1 | 0s | 7d ago | 4m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 96.02% | 96.02% | 100.00% | 100.00% | 470 ms | → 1.00x | 0 | — | — | 3m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 95.76% | 95.76% | 99.27% | 99.27% | 1919 ms | → 1.00x | 0 | — | — | 5m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 95.50% | 95.50% | 83.18% | 83.18% | 666 ms | → 1.00x | 4 | 51s | 12d ago | 5m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.45% | 95.45% | 17.31% | 17.31% | 1742 ms | → 1.00x | 1 | 0s | 22d ago | 25s ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 95.08% | 95.08% | 98.02% | 98.02% | 1554 ms | → 1.00x | 0 | — | — | 4m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 95.04% | 95.04% | 96.89% | 96.89% | 1818 ms | → 1.00x | 5 | 2h 21m | 6d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 94.82% | 94.82% | 90.79% | 90.79% | 1127 ms | → 1.00x | 1 | 0s | 8d ago | 4m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 92.81% | 92.81% | 39.41% | 39.41% | 3574 ms | → 1.00x | 89 | 7m | 8d ago | 3m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 90.05% | 90.05% | 99.78% | 99.78% | 1639 ms | → 1.00x | 0 | — | — | 59s ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 89.89% | 89.89% | 78.01% | 78.01% | 1390 ms | → 1.00x | 78 | 23m | 8d ago | 1m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 89.68% | 89.68% | 99.92% | 99.92% | 2171 ms | → 1.00x | 0 | — | — | 59s ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 88.71% | 88.71% | 75.72% | 75.72% | — | → 1.00x | 1 | 24d 1h | 30d ago | 59s ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 88.59% | 88.59% | 99.09% | 99.09% | 2292 ms | → 1.00x | 0 | — | — | 59s ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 86.75% | 86.75% | 74.00% | 74.00% | 796 ms | → 1.00x | 12 | 1h 18m | 10d ago | 5m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 86.06% | 86.06% | 77.59% | 77.59% | 2785 ms | → 1.00x | 0 | — | — | 5m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 85.98% | 85.98% | 0.11% | 0.11% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 85.21% | 85.21% | 99.93% | 99.93% | 34 ms | → 1.00x | 0 | — | — | 1m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 84.96% | 84.96% | 47.85% | 47.85% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 84.74% | 84.74% | 99.61% | 99.61% | 3582 ms | → 1.00x | 5 | 0s | 6d ago | 4m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.62% | 84.62% | 98.45% | 98.45% | 3191 ms | → 1.00x | 36 | 50s | 8d ago | 13s ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 83.72% | 83.72% | 68.13% | 68.13% | — | → 1.00x | 1 | 24d 1h | 30d ago | 10s ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 83.64% | 83.64% | 86.23% | 86.23% | 1268 ms | → 1.00x | 6 | 0s | 12d ago | 1m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 83.07% | 83.07% | 98.89% | 98.89% | 1501 ms | → 1.00x | 1 | 0s | 16d ago | 1m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.25% | 82.25% | 67.23% | 67.23% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.01% | 82.01% | 63.15% | 63.15% | 3270 ms | → 1.00x | 180 | 12m | 8d ago | 28s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 81.66% | 81.66% | 10.72% | 10.72% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 81.53% | 81.53% | 48.46% | 48.46% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 81.36% | 81.36% | 96.32% | 96.32% | 1326 ms | → 1.00x | 195 | 15m | 9d ago | 47s ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 81.28% | 81.28% | 87.06% | 87.06% | 3156 ms | → 1.00x | 20 | 2m | 18d ago | 5m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.08% | 81.08% | 69.98% | 69.98% | 3964 ms | → 1.00x | 3 | 13m | 22d ago | 25s ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 80.73% | 80.73% | 99.77% | 99.77% | 1390 ms | → 1.00x | 0 | — | — | 1m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 80.03% | 80.03% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 23d 10h | 30d ago | 5m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 79.74% | 79.74% | 98.53% | 98.53% | 1498 ms | → 1.00x | 13 | 8m | 7d ago | 3m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 79.67% | 79.67% | 0.69% | 0.69% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 79.54% | 79.54% | 68.41% | 68.41% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 78.93% | 78.93% | 95.25% | 95.25% | 606 ms | → 1.00x | 16 | 1h 50m | 8d ago | 4m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 78.82% | 78.82% | 54.78% | 54.78% | — | → 1.00x | 1 | 24d 1h | 30d ago | 29s ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 77.98% | 77.98% | 99.65% | 99.65% | 1379 ms | → 1.00x | 0 | — | — | 18s ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 77.98% | 77.98% | 75.11% | 75.11% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 77.82% | 77.82% | 6.48% | 6.48% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 77.64% | 77.64% | 93.16% | 93.16% | 906 ms | → 1.00x | 3 | 17m | 11d ago | 5m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 76.63% | 76.63% | 36.20% | 36.20% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 76.26% | 76.26% | 85.28% | 85.28% | 1433 ms | → 1.00x | 0 | — | — | 17s ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 76.05% | 76.05% | 54.05% | 54.05% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 75.38% | 75.38% | 83.85% | 83.85% | 2052 ms | → 1.00x | 32 | 5m | 12d ago | 5m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 75.26% | 75.26% | 68.70% | 68.70% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 75.21% | 75.21% | 86.29% | 86.29% | 1677 ms | → 1.00x | 19 | 3m | 8d ago | 37s ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 74.71% | 74.71% | 99.85% | 99.85% | 515 ms | → 1.00x | 2 | 0s | 27d ago | 3m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 74.61% | 74.61% | 66.07% | 66.07% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 73.95% | 73.95% | 100.00% | 100.00% | 3904 ms | → 1.00x | 0 | — | — | 4m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 73.81% | 73.81% | 98.87% | 98.87% | 1346 ms | → 1.00x | 1 | 17h 60m | 26d ago | 48s ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 72.02% | 72.02% | 93.54% | 93.54% | 1921 ms | → 1.00x | 22 | 3m | 9d ago | 3m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 71.14% | 71.14% | 94.11% | 94.11% | 2388 ms | → 1.00x | 9 | 9h 57m | 9d ago | 1m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 70.64% | 70.64% | 91.98% | 91.98% | 2134 ms | → 1.00x | 18 | 17s | 8d ago | 1m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 70.06% | 70.06% | 64.20% | 64.20% | 2501 ms | → 1.00x | 6 | 0s | 10d ago | 1m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 68.23% | 68.23% | 50.52% | 50.52% | 1419 ms | → 1.00x | 142 | 3h 3m | 7d ago | 1m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.13% | 68.13% | 69.01% | 69.01% | 1940 ms | → 1.00x | 10 | 9m | 19d ago | 5m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 65.60% | 65.60% | 98.37% | 98.37% | 1627 ms | → 1.00x | 3 | 3m | 10d ago | 3m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 47.24% | 47.24% | 98.24% | 98.24% | 2803 ms | → 1.00x | 0 | — | — | 5m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 6.24% | 6.24% | 76.64% | 76.64% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |

</details>

<details open>
<summary><strong>🔴 Down (308)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.36% | 99.36% | 99.48% | 99.48% | 501 ms | → 1.00x | 1 | 4m | 11d ago | 3m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.11% | 99.11% | 98.95% | 98.95% | 907 ms | → 1.00x | 0 | — | — | 4m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 87.93% | 87.93% | 92.56% | 92.56% | 4348 ms | → 1.00x | 21 | 30m | 7d ago | 4m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 86.01% | 86.01% | 99.06% | 99.06% | 818 ms | → 1.00x | 5 | 1h 16m | 8d ago | 3m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 84.08% | 84.08% | 82.00% | 82.00% | 964 ms | → 1.00x | 139 | 10m | 8d ago | 3m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 81.77% | 81.77% | 97.23% | 97.23% | 1956 ms | → 1.00x | 28 | 3m | 9d ago | 3m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 80.58% | 80.58% | 93.77% | 93.77% | 4792 ms | → 1.00x | 0 | — | — | 54s ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.10% | 78.10% | 98.92% | 98.92% | 3731 ms | → 1.00x | 1 | 0s | 12d ago | 1m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 77.52% | 77.52% | 86.83% | 86.83% | 1302 ms | → 1.00x | 9 | 0s | 13d ago | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.92% | 76.92% | 88.70% | 88.70% | 1720 ms | → 1.00x | 1 | 6h | 6d ago | 4m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 75.63% | 75.63% | 44.49% | 44.49% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 74.45% | 74.45% | 91.43% | 91.43% | 1074 ms | → 1.00x | 0 | — | — | 3m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 72.67% | 72.67% | 85.02% | 85.02% | 1222 ms | → 1.00x | 26 | 2m | 9d ago | 4m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 72.14% | 72.14% | 99.88% | 99.88% | 1757 ms | → 1.00x | 2 | 0s | 14d ago | 3m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 72.05% | 72.05% | 96.79% | 96.79% | 1067 ms | → 1.00x | 3 | 10m | 19d ago | 5m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 71.67% | 71.67% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 8d ago | 3m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 64.61% | 64.61% | 75.15% | 75.15% | — | → 1.00x | 1 | 24d 1h | 30d ago | 10s ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 59.70% | 59.70% | 99.03% | 99.03% | 2918 ms | → 1.00x | 0 | — | — | 5m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.57% | 59.57% | 52.45% | 52.45% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 57.85% | 57.85% | 78.42% | 78.42% | — | → 1.00x | 1 | 19d 17h | 26d ago | 4m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 9.29% | 9.29% | 40.01% | 40.01% | 356 ms | → 1.00x | 1 | 15d 23h | 30d ago | 31s ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 6.38% | 6.38% | 44.99% | 44.99% | 2350 ms | → 1.00x | 0 | — | — | 5m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 5.90% | 5.90% | 97.75% | 97.75% | 3222 ms | → 1.00x | 3 | 0s | 7d ago | 4m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 4.92% | 4.92% | 92.86% | 92.86% | 2341 ms | → 1.00x | 8 | 5h 27m | 6d ago | 4m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 4.57% | 4.57% | 7.76% | 7.76% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 2.91% | 2.91% | 25.44% | 25.44% | 970 ms | → 1.00x | 4 | 4d 8h | 8d ago | 4m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 2.34% | 2.34% | 0.10% | 0.10% | — | → 1.00x | 1 | 24d 1h | 30d ago | 12s ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 1.51% | 1.51% | 64.69% | 64.69% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 1.41% | 1.41% | 99.82% | 99.82% | 564 ms | → 1.00x | 2 | 2m | 10d ago | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 1.41% | 1.41% | 90.67% | 90.67% | — | → 1.00x | 1 | 3d 17h | 10d ago | 3m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 1.41% | 1.41% | 32.34% | 32.34% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 1.41% | 1.41% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 1.41% | 1.41% | 100.00% | 100.00% | 875 ms | → 1.00x | 0 | — | — | 3m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 1.41% | 1.41% | 46.80% | 46.80% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 1.41% | 1.41% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 20d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 1.41% | 1.41% | 73.96% | 73.96% | — | → 1.00x | 3 | 7d 13h | 29d ago | 4m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 1.41% | 1.41% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 30d ago | 3m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 1.41% | 1.41% | 99.89% | 99.89% | 961 ms | → 1.00x | 1 | 3m | 9d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 1.41% | 1.41% | 99.95% | 99.95% | 854 ms | → 1.00x | 0 | — | — | 3m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 1.41% | 1.41% | 20.55% | 20.55% | — | → 1.00x | 1 | 24d 2h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 1.41% | 1.41% | 99.77% | 99.77% | 38 ms | → 1.00x | 2 | 2m | 7d ago | 3m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 1.40% | 1.40% | 99.82% | 99.82% | 1684 ms | → 1.00x | 1 | 7h | 7d ago | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 1.40% | 1.40% | 99.65% | 99.65% | 92 ms | → 1.00x | 3 | 20m | 8d ago | 4m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 1.40% | 1.40% | 39.40% | 39.40% | — | → 1.00x | 1 | 18d 2h | 24d ago | 4m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 1.40% | 1.40% | 99.89% | 99.89% | 1098 ms | → 1.00x | 0 | — | — | 4m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 1.40% | 1.40% | 99.92% | 99.92% | 581 ms | → 1.00x | 1 | 0s | 20d ago | 4m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 1.40% | 1.40% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 28d ago | 4m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 1.40% | 1.40% | 91.04% | 91.04% | — | → 1.00x | 2 | 1d 23h | 10d ago | 4m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 1.40% | 1.40% | 98.92% | 98.92% | 1942 ms | → 1.00x | 8 | 24m | 18d ago | 4m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 1.40% | 1.40% | 16.77% | 16.77% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 1.40% | 1.40% | 99.81% | 99.81% | 508 ms | → 1.00x | 2 | 36m | 19d ago | 4m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 1.40% | 1.40% | 22.60% | 22.60% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 1.40% | 1.40% | 36.28% | 36.28% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 1.40% | 1.40% | 99.25% | 99.25% | 1145 ms | → 1.00x | 1 | 0s | 20d ago | 4m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 1.40% | 1.40% | 20.58% | 20.58% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 1.40% | 1.40% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 1.40% | 1.40% | 38.02% | 38.02% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 1.40% | 1.40% | 25.49% | 25.49% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 1.40% | 1.40% | 69.29% | 69.29% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 1.40% | 1.40% | 67.73% | 67.73% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 1.40% | 1.40% | 74.74% | 74.74% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 1.40% | 1.40% | 30.92% | 30.92% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 1.40% | 1.40% | 68.76% | 68.76% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 1.40% | 1.40% | 44.20% | 44.20% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 1.40% | 1.40% | 4.55% | 4.55% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 1.40% | 1.40% | 1.35% | 1.35% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 1.40% | 1.40% | 48.30% | 48.30% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 1.40% | 1.40% | 33.55% | 33.55% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 1.40% | 1.40% | 3.93% | 3.93% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 1.39% | 1.39% | 83.11% | 83.11% | — | → 1.00x | 2 | 2d 24h | 11d ago | 4m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 1.39% | 1.39% | 68.44% | 68.44% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 1.39% | 1.39% | 42.69% | 42.69% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 1.39% | 1.39% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 1.39% | 1.39% | 17.16% | 17.16% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 1.39% | 1.39% | 43.61% | 43.61% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 1.39% | 1.39% | 47.31% | 47.31% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 1.39% | 1.39% | 79.86% | 79.86% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 1.39% | 1.39% | 85.33% | 85.33% | — | → 1.00x | 95 | 33m | 8d ago | 4m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 1.39% | 1.39% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 1.39% | 1.39% | 20.14% | 20.14% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 1.39% | 1.39% | 62.39% | 62.39% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 1.39% | 1.39% | 24.01% | 24.01% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 1.39% | 1.39% | 14.75% | 14.75% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 1.39% | 1.39% | 60.97% | 60.97% | 954 ms | → 1.00x | 94 | 6m | 8d ago | 4m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 1.39% | 1.39% | 78.64% | 78.64% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 1.39% | 1.39% | 5.52% | 5.52% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 1.39% | 1.39% | 55.75% | 55.75% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 1.39% | 1.39% | 65.07% | 65.07% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 1.39% | 1.39% | 46.51% | 46.51% | 154 ms | → 1.00x | 4 | 2d 19h | 14d ago | 4m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 1.39% | 1.39% | 35.49% | 35.49% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 1.39% | 1.39% | 63.49% | 63.49% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 1.39% | 1.39% | 52.44% | 52.44% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 1.39% | 1.39% | 26.33% | 26.33% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 1.39% | 1.39% | 81.13% | 81.13% | 1077 ms | → 1.00x | 3 | 20m | 20d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 1.39% | 1.39% | 52.99% | 52.99% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 1.39% | 1.39% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 21d ago | 4m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 1.39% | 1.39% | 92.63% | 92.63% | 1382 ms | → 1.00x | 3 | 2h 60m | 6d ago | 4m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 1.39% | 1.39% | 19.49% | 19.49% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 1.39% | 1.39% | 10.15% | 10.15% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 1.39% | 1.39% | 40.17% | 40.17% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 1.38% | 1.38% | 59.84% | 59.84% | 2355 ms | → 1.00x | 2 | 60m | 7d ago | 5m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 1.38% | 1.38% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 7d 22h | 6d ago | 5m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 1.38% | 1.38% | 13.15% | 13.15% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 1.38% | 1.38% | 98.37% | 98.37% | 2632 ms | → 1.00x | 0 | — | — | 5m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 1.38% | 1.38% | 21.32% | 21.32% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 1.38% | 1.38% | 4.63% | 4.63% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 1.38% | 1.38% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 1.38% | 1.38% | 83.98% | 83.98% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 1.38% | 1.38% | 47.90% | 47.90% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 1.38% | 1.38% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 1.38% | 1.38% | 65.91% | 65.91% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 1.38% | 1.38% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 7d 22h | 6d ago | 4m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 1.38% | 1.38% | 49.45% | 49.45% | 210 ms | → 1.00x | 0 | — | — | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 1.38% | 1.38% | 46.05% | 46.05% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 1.38% | 1.38% | 22.23% | 22.23% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 1.38% | 1.38% | 98.48% | 98.48% | 1163 ms | → 1.00x | 1 | 0s | 27d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 1.38% | 1.38% | 30.30% | 30.30% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 1.38% | 1.38% | 72.39% | 72.39% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 1.38% | 1.38% | 6.70% | 6.70% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 1.38% | 1.38% | 91.72% | 91.72% | 1003 ms | → 1.00x | 25 | 0s | 6d ago | 5m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 1.38% | 1.38% | 21.09% | 21.09% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 1.38% | 1.38% | 64.35% | 64.35% | — | → 1.00x | 2 | 9d 1h | 24d ago | 5m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 1.38% | 1.38% | 39.95% | 39.95% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 1.38% | 1.38% | 2.87% | 2.87% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 1.38% | 1.38% | 27.77% | 27.77% | 1236 ms | → 1.00x | 144 | 16m | 9d ago | 5m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 1.38% | 1.38% | 87.63% | 87.63% | 2166 ms | → 1.00x | 0 | — | — | 5m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 1.38% | 1.38% | 8.99% | 8.99% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 1.38% | 1.38% | 17.59% | 17.59% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 1.37% | 1.37% | 27.04% | 27.04% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 1.37% | 1.37% | 3.12% | 3.12% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 1.37% | 1.37% | 31.88% | 31.88% | — | → 1.00x | 3 | 5d 11h | 15d ago | 5m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 1.37% | 1.37% | 22.07% | 22.07% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 1.37% | 1.37% | 34.65% | 34.65% | 1238 ms | → 1.00x | 2 | 14h 20m | 25d ago | 5m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 1.37% | 1.37% | 46.41% | 46.41% | — | → 1.00x | 2 | 8d 8h | 7d ago | 5m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 1.37% | 1.37% | 35.56% | 35.56% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 1.37% | 1.37% | 26.68% | 26.68% | 711 ms | → 1.00x | 0 | — | — | 5m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 1.37% | 1.37% | 5.20% | 5.20% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 1.37% | 1.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 1.37% | 1.37% | 22.80% | 22.80% | 150 ms | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 1.37% | 1.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 1.37% | 1.37% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 12d ago | 5m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 1.37% | 1.37% | 18.10% | 18.10% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 1.37% | 1.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 1.36% | 1.36% | 78.14% | 78.14% | 1706 ms | → 1.00x | 96 | 4h 28m | 7d ago | 4s ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 1.36% | 1.36% | 38.64% | 38.64% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4s ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 1.36% | 1.36% | 22.68% | 22.68% | 1692 ms | → 1.00x | 0 | — | — | 4s ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 1.36% | 1.36% | 73.53% | 73.53% | — | → 1.00x | 1 | 24d 1h | 30d ago | 6s ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 1.36% | 1.36% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 6s ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 1.36% | 1.36% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 6s ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 1.35% | 1.35% | 43.20% | 43.20% | — | → 1.00x | 1 | 24d 1h | 30d ago | 11s ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 1.35% | 1.35% | 63.31% | 63.31% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 1.35% | 1.35% | 40.15% | 40.15% | 392 ms | → 1.00x | 0 | — | — | 19s ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 1.35% | 1.35% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 14d ago | 14s ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [Crond](https://lmspeed.net/provider/crond) | 1.35% | 1.35% | 22.80% | 22.80% | 1818 ms | → 1.00x | 5 | 6m | 16d ago | 14s ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 1.35% | 1.35% | 54.39% | 54.39% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 1.35% | 1.35% | 90.53% | 90.53% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 1.35% | 1.35% | 73.32% | 73.32% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 1.35% | 1.35% | 99.26% | 99.26% | 2141 ms | → 1.00x | 0 | — | — | 14s ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 1.35% | 1.35% | 16.23% | 16.23% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 1.35% | 1.35% | 51.26% | 51.26% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 1.35% | 1.35% | 16.69% | 16.69% | — | → 1.00x | 1 | 24d 1h | 30d ago | 18s ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 1.35% | 1.35% | 77.23% | 77.23% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 1.35% | 1.35% | 0.01% | 0.01% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 19s ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 14s ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 21s ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 1.35% | 1.35% | 74.22% | 74.22% | — | → 1.00x | 24 | 6h 47m | 13d ago | 21s ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 1.35% | 1.35% | 3.13% | 3.13% | — | → 1.00x | 1 | 24d 1h | 30d ago | 26s ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 1.35% | 1.35% | 50.25% | 50.25% | 1512 ms | → 1.00x | 4 | 0s | 22d ago | 26s ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 1.35% | 1.35% | 96.06% | 96.06% | — | → 1.00x | 6 | 14h 25m | 9d ago | 26s ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 25s ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 1.35% | 1.35% | 20.82% | 20.82% | 2370 ms | → 1.00x | 64 | 6m | 6d ago | 21s ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 1.35% | 1.35% | 33.64% | 33.64% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 1.35% | 1.35% | 87.39% | 87.39% | — | → 1.00x | 1 | 24d 1h | 30d ago | 26s ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 1.35% | 1.35% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 14d ago | 30s ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 1.35% | 1.35% | 32.40% | 32.40% | — | → 1.00x | 2 | 2d 6h | 10d ago | 26s ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 1.35% | 1.35% | 48.90% | 48.90% | — | → 1.00x | 5 | 4d 19h | 17d ago | 31s ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 1.35% | 1.35% | 50.43% | 50.43% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 26s ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 1.35% | 1.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 1.35% | 1.35% | 45.98% | 45.98% | — | → 1.00x | 1 | 24d 1h | 30d ago | 26s ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 1.34% | 1.34% | 84.44% | 84.44% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 1.34% | 1.34% | 48.81% | 48.81% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 1.34% | 1.34% | 34.00% | 34.00% | 1517 ms | → 1.00x | 2 | 30m | 10d ago | 31s ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 35s ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 1.34% | 1.34% | 82.46% | 82.46% | — | → 1.00x | 1 | 24d 1h | 30d ago | 34s ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 1.34% | 1.34% | 49.10% | 49.10% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 1.34% | 1.34% | 99.12% | 99.12% | 3407 ms | → 1.00x | 5 | 2h 24m | 6d ago | 36s ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 1.34% | 1.34% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 11d 19h | 7d ago | 31s ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 1.34% | 1.34% | 21.71% | 21.71% | 701 ms | → 1.00x | 45 | 1h 32m | 6d ago | 31s ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 31s ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 35s ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 36s ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 1.34% | 1.34% | 46.30% | 46.30% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [665 API](https://lmspeed.net/provider/665-api) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 1.34% | 1.34% | 39.16% | 39.16% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 1.34% | 1.34% | 86.17% | 86.17% | 691 ms | → 1.00x | 1 | 10s | 12d ago | 38s ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 1.34% | 1.34% | 83.68% | 83.68% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 1.34% | 1.34% | 75.88% | 75.88% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 38s ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 1.34% | 1.34% | 23.11% | 23.11% | 574 ms | → 1.00x | 0 | — | — | 43s ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 42s ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 1.34% | 1.34% | 5.08% | 5.08% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 46s ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 1.34% | 1.34% | 57.88% | 57.88% | — | → 1.00x | 1 | 24d 1h | 30d ago | 43s ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 1.34% | 1.34% | 60.67% | 60.67% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 1.34% | 1.34% | 38.37% | 38.37% | — | → 1.00x | 1 | 24d 1h | 30d ago | 48s ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 1.34% | 1.34% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 26d ago | 54s ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 1.34% | 1.34% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 54s ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 1.34% | 1.34% | 76.99% | 76.99% | — | → 1.00x | 1 | 24d 1h | 30d ago | 49s ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 1.34% | 1.34% | 22.32% | 22.32% | 336 ms | → 1.00x | 0 | — | — | 54s ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 1.34% | 1.34% | 23.09% | 23.09% | 1230 ms | → 1.00x | 6 | 10m | 12d ago | 54s ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 1.34% | 1.34% | 63.55% | 63.55% | — | → 1.00x | 1 | 24d 1h | 30d ago | 49s ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 1.33% | 1.33% | 84.65% | 84.65% | — | → 1.00x | 1 | 24d 1h | 30d ago | 59s ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 59s ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 1.33% | 1.33% | 62.64% | 62.64% | — | → 1.00x | 1 | 24d 1h | 30d ago | 59s ago |
| [xAI](https://lmspeed.net/provider/xai) | 1.33% | 1.33% | 23.13% | 23.13% | 1851 ms | → 1.00x | 0 | — | — | 59s ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 1.33% | 1.33% | 99.17% | 99.17% | 1773 ms | → 1.00x | 0 | — | — | 59s ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 1.33% | 1.33% | 70.96% | 70.96% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 1.33% | 1.33% | 99.84% | 99.84% | 714 ms | → 1.00x | 0 | — | — | 1m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 1.33% | 1.33% | 39.57% | 39.57% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 1.33% | 1.33% | 92.62% | 92.62% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 1.33% | 1.33% | 86.30% | 86.30% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 1.33% | 1.33% | 99.77% | 99.77% | 2016 ms | → 1.00x | 0 | — | — | 1m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 1.33% | 1.33% | 68.72% | 68.72% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 1.33% | 1.33% | 99.74% | 99.74% | 38 ms | → 1.00x | 0 | — | — | 1m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 1.33% | 1.33% | 35.55% | 35.55% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 1.33% | 1.33% | 45.59% | 45.59% | 309 ms | → 1.00x | 0 | — | — | 1m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 1.33% | 1.33% | 99.53% | 99.53% | 1373 ms | → 1.00x | 0 | — | — | 1m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 1.33% | 1.33% | 83.66% | 83.66% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 1.33% | 1.33% | 75.27% | 75.27% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 1.33% | 1.33% | 99.95% | 99.95% | 1175 ms | → 1.00x | 0 | — | — | 1m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 1.33% | 1.33% | 74.18% | 74.18% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 1.33% | 1.33% | 74.31% | 74.31% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 1.33% | 1.33% | 81.34% | 81.34% | 1477 ms | → 1.00x | 1 | 3h | 10d ago | 1m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 1.33% | 1.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 1.33% | 1.33% | 54.28% | 54.28% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 1.32% | 1.32% | 10.24% | 10.24% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 1.32% | 1.32% | 46.73% | 46.73% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 1.32% | 1.32% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Mine](https://lmspeed.net/provider/mine) | 1.32% | 1.32% | 23.25% | 23.25% | — | → 1.00x | 1 | 24d 1h | 30d ago | 1m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 1.28% | 1.28% | 100.00% | 100.00% | 725 ms | → 1.00x | 0 | — | — | 3m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 1.27% | 1.27% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 19d ago | 4m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 1.24% | 1.24% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 16d ago | 5m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 1.24% | 1.24% | 23.40% | 23.40% | 1661 ms | → 1.00x | 77 | 13m | 9d ago | 5m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 1.24% | 1.24% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5s ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 1.16% | 1.16% | 99.75% | 99.75% | 967 ms | → 1.00x | 1 | 0s | 7d ago | 3m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 1.16% | 1.16% | 100.00% | 100.00% | 503 ms | → 1.00x | 0 | — | — | 3m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 1.16% | 1.16% | 98.70% | 98.70% | 1471 ms | → 1.00x | 11 | 0s | 16d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 1.16% | 1.16% | 100.00% | 100.00% | 2348 ms | → 1.00x | 0 | — | — | 3m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 1.16% | 1.16% | 98.40% | 98.40% | 910 ms | → 1.00x | 0 | — | — | 3m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 1.16% | 1.16% | 98.92% | 98.92% | 624 ms | → 1.00x | 2 | 2h 30m | 8d ago | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 1.16% | 1.16% | 99.29% | 99.29% | 1696 ms | → 1.00x | 1 | 2h 37m | 25d ago | 3m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 1.16% | 1.16% | 100.00% | 100.00% | 872 ms | → 1.00x | 0 | — | — | 3m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 1.16% | 1.16% | 100.00% | 100.00% | 428 ms | → 1.00x | 0 | — | — | 3m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 1.15% | 1.15% | 98.05% | 98.05% | 49 ms | → 1.00x | 3 | 0s | 7d ago | 4m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 1.15% | 1.15% | 76.21% | 76.21% | — | → 1.00x | 1 | 20d 10h | 26d ago | 4m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 1.15% | 1.15% | 99.73% | 99.73% | 1443 ms | → 1.00x | 1 | 2h 60m | 7d ago | 4m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 1.15% | 1.15% | 99.94% | 99.94% | 1446 ms | → 1.00x | 1 | 21m | 21d ago | 4m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 1.15% | 1.15% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 1.15% | 1.15% | 99.60% | 99.60% | 1836 ms | → 1.00x | 1 | 0s | 29d ago | 4m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 1.15% | 1.15% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 19d ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 1.15% | 1.15% | 83.84% | 83.84% | 1104 ms | → 1.00x | 8 | 17m | 11d ago | 4m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 1.15% | 1.15% | 16.44% | 16.44% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 1.14% | 1.14% | 75.41% | 75.41% | 4983 ms | → 1.00x | 212 | 1h 18m | 6d ago | 4m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 1.14% | 1.14% | 91.99% | 91.99% | 1585 ms | → 1.00x | 0 | — | — | 4m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 1.14% | 1.14% | 3.80% | 3.80% | — | → 1.00x | 1 | 24d 2h | 30d ago | 4m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 1.14% | 1.14% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 1.11% | 1.11% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5s ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 1.11% | 1.11% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5s ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 1.11% | 1.11% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | 5s ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 1.10% | 1.10% | 32.96% | 32.96% | 503 ms | → 1.00x | 0 | — | — | 36s ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.13% | 0.13% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 24d 1h | 30d ago | — |

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
