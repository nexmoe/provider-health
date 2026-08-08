# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**704 providers** — 292 🟢 operational · 58 🟡 degraded · 352 🔴 down · 2 ⚫ unknown

_Updated 2026-08-08 04:13 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (292)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.20% | 74.11% | 74.11% | — | → 1.02x | 0 | — | — | 3m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.33% | 24.43% | 24.43% | — | ↓ 0.40x | 0 | — | — | 4m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.78% | 99.45% | 99.45% | — | → 0.97x | 0 | — | — | 10m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.76% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 11m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.17% | 99.33% | 99.33% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.74% | 99.18% | 99.18% | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 68.50% | 68.50% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.78% | 43.99% | 43.99% | — | → 0.98x | 1 | 2h 60m | 30d ago | 1m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.59% | 56.98% | 56.98% | — | → 0.98x | 0 | — | — | 6m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.76% | 99.34% | 99.34% | — | → 1.03x | 0 | — | — | 5m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.74% | 65.57% | 65.57% | — | → 1.03x | 0 | — | — | 4m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.59% | 22.94% | 22.94% | — | ↑ 1.05x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 94.63% | 99.09% | 99.09% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 100.00% | 99.67% | 16.67% | 16.67% | — | → 1.05x | 1 | 2h 60m | 30d ago | 11m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.53% | 99.74% | 99.74% | — | ↑ 1.14x | 0 | — | — | 8m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.08% | 99.68% | 99.68% | — | → 1.05x | 0 | — | — | 5m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.28% | 99.74% | 99.74% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.59% | 99.71% | 99.71% | — | → 0.99x | 0 | — | — | 21s ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 99.78% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 10m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 94.50% | 96.18% | 96.18% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 100.00% | 99.80% | 0.00% | 0.00% | — | ↑ 1.13x | 1 | 2h 60m | 30d ago | 12m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.74% | 99.90% | 99.90% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.74% | 99.92% | 99.92% | — | → 0.96x | 0 | — | — | 8m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.74% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 11m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.70% | 98.69% | 98.69% | — | → 1.03x | 0 | — | — | 1m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.78% | 99.94% | 99.94% | — | → 1.01x | 0 | — | — | 12m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.81% | 98.38% | 98.38% | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.55% | 69.87% | 69.87% | — | ↑ 1.05x | 0 | — | — | 3m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 100.00% | 99.72% | 88.17% | 88.17% | — | → 1.02x | 1 | 1h 60m | 30d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.78% | 92.20% | 92.20% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 100.00% | 99.65% | 28.78% | 28.78% | — | ↑ 1.31x | 1 | 2h 60m | 30d ago | 1m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.85% | 93.73% | 93.73% | — | ↑ 1.05x | 0 | — | — | 41s ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.87% | 99.97% | 99.97% | — | ↑ 1.05x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.91% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 11m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.85% | 99.66% | 99.66% | — | → 1.03x | 0 | — | — | 10m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 99.74% | 100.00% | 100.00% | — | ↑ 1.09x | 0 | — | — | 12m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.76% | 99.94% | 99.94% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.74% | 36.33% | 36.33% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.14% | 98.88% | 98.88% | — | ↓ 0.76x | 0 | — | — | 3m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.74% | 98.74% | 98.74% | — | → 1.00x | 0 | — | — | 2m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 99.78% | 60.72% | 60.72% | — | → 1.00x | 0 | — | — | 10m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.50% | 96.73% | 96.73% | — | → 0.97x | 0 | — | — | 4m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.66% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 99.72% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 10m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.78% | 99.67% | 99.67% | — | ↑ 1.11x | 1 | 1h 60m | 30d ago | 4m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 100.00% | 99.54% | — | — | — | → 0.96x | 0 | — | — | 9m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.87% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.89% | 99.66% | 99.49% | 99.49% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.85% | 99.98% | 99.98% | — | ↑ 1.67x | 0 | — | — | 9m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.89% | 98.26% | 93.42% | 93.42% | — | → 0.96x | 0 | — | — | 9m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.89% | 99.70% | 99.94% | 99.94% | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.89% | 99.59% | 99.96% | 99.96% | — | → 1.01x | 0 | — | — | 8m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.89% | 99.51% | 99.62% | 99.62% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.89% | 99.77% | 44.95% | 44.95% | — | → 0.97x | 0 | — | — | 8m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.89% | 99.83% | 99.65% | 99.65% | — | → 0.97x | 0 | — | — | 7m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.89% | 99.29% | 99.64% | 99.64% | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.89% | 99.72% | 22.33% | 22.33% | — | ↓ 0.90x | 1 | 1h 60m | 30d ago | 7m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.89% | 99.76% | 98.92% | 98.92% | — | → 1.05x | 0 | — | — | 6m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.89% | 98.39% | 98.78% | 98.78% | — | ↓ 0.80x | 0 | — | — | 7m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.89% | 99.85% | 1.90% | 1.90% | — | → 1.01x | 1 | 1h 60m | 30d ago | 6m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.89% | 99.72% | 99.90% | 99.90% | — | → 0.98x | 0 | — | — | 6m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.89% | 99.83% | 80.20% | 80.20% | — | ↑ 1.08x | 0 | — | — | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.89% | 99.76% | 99.85% | 99.85% | — | → 1.03x | 0 | — | — | 5m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.89% | 99.87% | 97.57% | 97.57% | — | ↑ 1.12x | 0 | — | — | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.89% | 99.81% | 99.37% | 99.37% | — | ↑ 1.21x | 0 | — | — | 4m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.89% | 99.70% | 30.20% | 30.20% | — | ↑ 1.06x | 1 | 1h 60m | 30d ago | 4m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.89% | 99.59% | 24.91% | 24.91% | — | → 0.99x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.89% | 99.78% | 99.87% | 99.87% | — | → 1.01x | 0 | — | — | 5m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.89% | 99.76% | 99.95% | 99.95% | — | → 1.01x | 0 | — | — | 5m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.89% | 99.76% | 5.16% | 5.16% | — | → 0.97x | 1 | 1h 60m | 30d ago | 4m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.89% | 99.85% | 98.73% | 98.73% | — | ↑ 1.11x | 0 | — | — | 3m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.89% | 99.78% | 84.58% | 84.58% | — | → 0.97x | 0 | — | — | 3m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.89% | 99.78% | 93.26% | 93.26% | — | → 1.04x | 0 | — | — | 4m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.89% | 99.70% | 62.65% | 62.65% | — | → 1.02x | 0 | — | — | 4m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.89% | 99.76% | 99.61% | 99.61% | — | ↑ 1.11x | 0 | — | — | 3m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.89% | 99.61% | 82.26% | 82.26% | — | → 0.95x | 0 | — | — | 3m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.89% | 99.76% | 96.88% | 96.88% | — | → 1.03x | 0 | — | — | 3m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.89% | 99.89% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 4m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.89% | 99.76% | 94.26% | 94.26% | — | ↑ 1.15x | 0 | — | — | 3m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.89% | 99.74% | 96.69% | 96.69% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.89% | 99.57% | 98.11% | 98.11% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.89% | 99.52% | 98.85% | 98.85% | — | ↑ 1.15x | 0 | — | — | 2m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.89% | 99.76% | 90.32% | 90.32% | — | ↑ 1.14x | 0 | — | — | 3m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.89% | 99.74% | 91.09% | 91.09% | — | → 1.02x | 0 | — | — | 3m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.89% | 99.72% | 43.48% | 43.48% | — | → 0.98x | 1 | 1h 60m | 30d ago | 2m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.89% | 99.78% | 99.89% | 99.89% | — | → 1.01x | 0 | — | — | 3m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.89% | 99.78% | 99.31% | 99.31% | — | ↓ 0.76x | 0 | — | — | 3m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.89% | 99.78% | 98.73% | 98.73% | — | → 1.05x | 0 | — | — | 2m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.89% | 99.78% | 98.47% | 98.47% | — | → 1.03x | 0 | — | — | 2m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.89% | 99.78% | 99.30% | 99.30% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.89% | 99.11% | 83.10% | 83.10% | — | ↑ 1.07x | 0 | — | — | 1m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.89% | 99.48% | 76.90% | 76.90% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.89% | 99.78% | 98.43% | 98.43% | — | ↑ 1.07x | 0 | — | — | 20s ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.89% | 99.72% | 99.93% | 99.93% | — | ↑ 1.06x | 0 | — | — | 41s ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.89% | 99.72% | 98.37% | 98.37% | — | → 1.00x | 0 | — | — | 1m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.89% | 98.50% | 97.10% | 97.10% | — | → 1.04x | 0 | — | — | 41s ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.89% | 99.78% | 98.78% | 98.78% | — | → 0.97x | 0 | — | — | 1m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.89% | 99.83% | 31.33% | 31.33% | — | → 1.01x | 1 | 2h 60m | 30d ago | 12m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.89% | 94.09% | 92.56% | 92.56% | — | ↓ 0.76x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.89% | 99.83% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 12m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.89% | 99.78% | 98.04% | 98.04% | — | ↑ 1.07x | 0 | — | — | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.89% | 92.13% | 0.69% | 0.69% | — | ↑ 1.23x | 1 | 2h 60m | 30d ago | 12m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.88% | 92.96% | 99.95% | 99.95% | — | ↓ 0.85x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.88% | 99.80% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.88% | 98.97% | 91.90% | 91.90% | — | → 1.05x | 0 | — | — | 10m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.88% | 99.74% | 24.52% | 24.52% | — | ↑ 1.21x | 1 | 2h 60m | 30d ago | 11m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.88% | 93.35% | 87.87% | 87.87% | — | → 1.04x | 0 | — | — | 11m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.88% | 99.76% | 100.00% | 100.00% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.88% | 99.76% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 11m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.88% | 99.76% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 11m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.88% | 99.76% | 99.94% | 99.94% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.88% | 99.82% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 10m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.88% | 99.58% | 98.56% | 98.56% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.88% | 99.74% | 0.00% | 0.00% | — | ↑ 1.06x | 1 | 2h 60m | 30d ago | 11m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.88% | 99.74% | 100.00% | 100.00% | — | ↑ 1.12x | 0 | — | — | 12m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.88% | 98.64% | 39.41% | 39.41% | — | ↑ 1.18x | 0 | — | — | 10m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.88% | 99.58% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 10m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.88% | 99.69% | 100.00% | 100.00% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.88% | 99.78% | 100.00% | 100.00% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.88% | 99.67% | — | — | — | ↑ 1.09x | 0 | — | — | 10m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.88% | 99.72% | 99.67% | 99.67% | — | ↑ 1.17x | 0 | — | — | 9m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.88% | 99.74% | 99.48% | 99.48% | — | → 1.01x | 0 | — | — | 9m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.88% | 99.71% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.77% | 97.85% | 93.57% | 93.57% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.77% | 39.67% | 99.95% | 99.95% | — | ↑ 1.32x | 0 | — | — | 9m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.77% | 99.70% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 9m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.77% | 99.53% | 99.75% | 99.75% | — | → 1.02x | 0 | — | — | 9m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.77% | 99.64% | 98.78% | 98.78% | — | → 0.99x | 0 | — | — | 9m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.77% | 99.51% | 99.60% | 99.60% | — | → 1.04x | 0 | — | — | 9m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.77% | 99.62% | 99.73% | 99.73% | — | ↑ 1.96x | 0 | — | — | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.77% | 99.79% | 17.47% | 17.47% | — | ↓ 0.85x | 1 | 2h | 30d ago | 8m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.77% | 99.74% | 70.89% | 70.89% | — | ↑ 1.07x | 1 | 2h | 30d ago | 8m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.77% | 99.79% | 99.81% | 99.81% | — | → 1.02x | 0 | — | — | 8m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.77% | 99.62% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 8m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.77% | 99.68% | 97.57% | 97.57% | — | → 1.02x | 0 | — | — | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.77% | 99.79% | 99.97% | 99.97% | — | ↓ 0.78x | 0 | — | — | 7m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.77% | 80.90% | 76.88% | 76.88% | — | ↑ 1.15x | 1 | 1h 60m | 30d ago | 7m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.77% | 99.76% | 99.49% | 99.49% | — | → 1.01x | 0 | — | — | 7m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.77% | 99.64% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 7m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.77% | 99.64% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 7m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.77% | 99.57% | 99.62% | 99.62% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.77% | 99.68% | 50.15% | 50.15% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.77% | 99.42% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 5m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.77% | 98.32% | 98.93% | 98.93% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.77% | 99.63% | 24.54% | 24.54% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.77% | 89.58% | 85.28% | 85.28% | — | ↓ 0.91x | 0 | — | — | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.77% | 27.47% | 27.04% | 27.04% | — | → 1.02x | 1 | 1h 60m | 30d ago | 3m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.77% | 99.74% | 77.97% | 77.97% | — | → 0.98x | 0 | — | — | 3m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.77% | 99.55% | 69.43% | 69.43% | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.77% | 99.83% | 97.00% | 97.00% | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.77% | 99.78% | 99.86% | 99.86% | — | ↓ 0.94x | 0 | — | — | 2m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.77% | 99.28% | 28.39% | 28.39% | — | ↓ 0.90x | 1 | 1h 60m | 30d ago | 2m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.77% | 99.76% | 58.17% | 58.17% | — | ↑ 1.62x | 1 | 1h 60m | 30d ago | 3m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.77% | 99.63% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 2m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.77% | 99.74% | 29.98% | 29.98% | — | → 1.04x | 1 | 2h 60m | 30d ago | 1m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.77% | 99.78% | 89.57% | 89.57% | — | ↑ 1.18x | 0 | — | — | 3m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.77% | 99.54% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 2m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.77% | 99.67% | 96.80% | 96.80% | — | → 0.98x | 0 | — | — | 41s ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.77% | 99.70% | 98.35% | 98.35% | — | ↑ 1.28x | 0 | — | — | 59s ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.77% | 98.74% | 32.93% | 32.93% | — | ↑ 1.07x | 0 | — | — | 39s ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.77% | 96.65% | 99.82% | 99.82% | — | → 1.04x | 0 | — | — | 41s ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.77% | 99.48% | 99.86% | 99.86% | — | ↑ 1.15x | 0 | — | — | 41s ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.77% | 99.52% | 99.67% | 99.67% | — | ↑ 1.15x | 0 | — | — | 12m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.77% | 99.65% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 11m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.77% | 99.54% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 11m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.77% | 99.50% | 99.09% | 99.09% | — | → 1.03x | 0 | — | — | 10m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.77% | 99.65% | 99.85% | 99.85% | — | → 1.01x | 0 | — | — | 11m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.77% | 99.59% | 99.89% | 99.89% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.77% | 99.47% | 99.85% | 99.85% | — | ↑ 1.23x | 0 | — | — | 10m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.77% | 99.45% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.77% | 99.67% | 99.85% | 99.85% | — | ↑ 2.28x | 0 | — | — | 10m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.77% | 99.72% | 97.35% | 97.35% | — | → 0.97x | 0 | — | — | 12m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.77% | 99.54% | 99.67% | 99.67% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.66% | 99.66% | 75.23% | 75.23% | — | ↑ 1.12x | 1 | 2h | 30d ago | 9m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.66% | 99.70% | 68.59% | 68.59% | — | → 0.95x | 1 | 2h | 30d ago | 9m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.66% | 99.64% | 98.93% | 98.93% | — | → 1.00x | 0 | — | — | 9m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.66% | 99.55% | 95.68% | 95.68% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.66% | 99.68% | 76.22% | 76.22% | — | → 1.02x | 1 | 1h 60m | 30d ago | 8m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.66% | 99.59% | 99.74% | 99.74% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.66% | 99.62% | 99.58% | 99.58% | — | ↓ 0.94x | 0 | — | — | 8m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.66% | 99.72% | 99.90% | 99.90% | — | ↑ 1.47x | 0 | — | — | 8m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.66% | 99.59% | 99.91% | 99.91% | — | → 0.99x | 0 | — | — | 7m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.66% | 99.72% | 99.58% | 99.58% | — | → 1.01x | 0 | — | — | 7m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.66% | 97.15% | 47.85% | 47.85% | — | → 1.04x | 1 | 1h 60m | 30d ago | 6m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.66% | 99.57% | 99.84% | 99.84% | — | ↓ 0.95x | 0 | — | — | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.66% | 99.64% | 76.89% | 76.89% | — | → 1.02x | 1 | 1h 60m | 30d ago | 7m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.66% | 99.61% | 99.87% | 99.87% | — | → 0.96x | 0 | — | — | 7m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.66% | 99.53% | 99.77% | 99.77% | — | ↑ 1.12x | 0 | — | — | 7m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.66% | 99.74% | 99.98% | 99.98% | — | ↑ 1.15x | 0 | — | — | 6m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.66% | 99.53% | 99.87% | 99.87% | — | ↑ 1.26x | 0 | — | — | 6m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.66% | 99.53% | 22.30% | 22.30% | — | ↓ 0.85x | 0 | — | — | 5m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.66% | 83.20% | 0.11% | 0.11% | — | ↑ 1.23x | 1 | 1h 60m | 30d ago | 5m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.66% | 97.95% | 26.84% | 26.84% | — | → 0.97x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.66% | 99.76% | 83.46% | 83.46% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.66% | 99.68% | 98.00% | 98.00% | — | ↑ 1.27x | 0 | — | — | 3m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.66% | 99.81% | 71.79% | 71.79% | — | ↑ 1.19x | 0 | — | — | 3m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.66% | 99.63% | 99.35% | 99.35% | — | ↑ 1.17x | 0 | — | — | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.66% | 99.63% | 81.07% | 81.07% | — | → 1.01x | 0 | — | — | 3m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.66% | 99.85% | 63.68% | 63.68% | — | → 1.00x | 0 | — | — | 3m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.66% | 97.66% | 97.21% | 97.21% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.66% | 99.61% | 90.95% | 90.95% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.66% | 99.63% | 99.00% | 99.00% | — | ↑ 1.80x | 0 | — | — | 3m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.66% | 98.18% | 56.85% | 56.85% | — | → 0.99x | 0 | — | — | 2m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.66% | 99.59% | 91.87% | 91.87% | — | → 0.97x | 0 | — | — | 2m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.66% | 99.70% | 98.90% | 98.90% | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.66% | 98.94% | 98.83% | 98.83% | — | → 1.05x | 0 | — | — | 1m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.66% | 99.63% | 86.85% | 86.85% | — | → 1.00x | 0 | — | — | 1m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.66% | 82.64% | 98.16% | 98.16% | — | → 0.96x | 0 | — | — | 20s ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.66% | 99.39% | 14.21% | 14.21% | — | ↓ 0.82x | 1 | 2h 60m | 30d ago | 12m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.66% | 99.61% | 99.34% | 99.34% | — | → 0.96x | 0 | — | — | 12m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.65% | 99.76% | 99.61% | 99.61% | — | ↑ 1.39x | 0 | — | — | 10m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.65% | 99.32% | 97.07% | 97.07% | — | → 1.01x | 0 | — | — | 12m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.65% | 99.80% | 99.08% | 99.08% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.65% | 99.72% | 98.72% | 98.72% | — | → 1.01x | 0 | — | — | 10m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.65% | 99.67% | 99.97% | 99.97% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.65% | 99.80% | 99.70% | 99.70% | — | → 1.00x | 0 | — | — | 12m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.65% | 99.63% | 89.89% | 89.89% | — | → 1.00x | 0 | — | — | 11m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.65% | 99.76% | 99.86% | 99.86% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.65% | 99.56% | 96.10% | 96.10% | — | → 1.01x | 0 | — | — | 12m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.65% | 98.97% | 99.34% | 99.34% | — | ↑ 1.10x | 0 | — | — | 9m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.65% | 99.35% | — | — | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.55% | 99.02% | 99.56% | 99.56% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.55% | 99.57% | 49.74% | 49.74% | — | → 1.04x | 0 | — | — | 8m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.55% | 99.68% | 98.00% | 98.00% | — | → 1.03x | 0 | — | — | 7m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 99.54% | 83.45% | 76.64% | 76.64% | — | ↑ 1.07x | 1 | 1h 60m | 30d ago | 6m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.54% | 99.63% | 54.70% | 54.70% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.54% | 99.63% | 64.92% | 64.92% | — | → 1.04x | 0 | — | — | 3m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.54% | 99.61% | 99.88% | 99.88% | — | ↑ 1.05x | 0 | — | — | 3m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.54% | 99.35% | 63.14% | 63.14% | — | ↑ 1.05x | 0 | — | — | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.54% | 99.44% | 97.03% | 97.03% | — | → 1.04x | 0 | — | — | 2m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.54% | 99.65% | 98.56% | 98.56% | — | ↑ 1.16x | 0 | — | — | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.54% | 99.57% | 97.90% | 97.90% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.54% | 98.33% | 99.10% | 99.10% | — | ↓ 0.74x | 0 | — | — | 2m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.54% | 99.70% | 66.50% | 66.50% | — | ↑ 1.19x | 1 | 1h 60m | 30d ago | 2m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.54% | 99.52% | 98.66% | 98.66% | — | → 0.99x | 0 | — | — | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.54% | 95.89% | 97.00% | 97.00% | — | → 1.00x | 0 | — | — | 41s ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.54% | 99.61% | 99.87% | 99.87% | — | → 1.01x | 0 | — | — | 40s ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.54% | 99.52% | 99.74% | 99.74% | — | → 1.03x | 0 | — | — | 1m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.54% | 98.80% | 90.79% | 90.79% | — | ↑ 1.13x | 0 | — | — | 1m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.54% | 99.39% | 93.06% | 93.06% | — | → 0.99x | 0 | — | — | 41s ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.54% | 99.65% | 97.87% | 97.87% | — | ↑ 1.26x | 0 | — | — | 21s ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.54% | 99.69% | 99.10% | 99.10% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.54% | 99.65% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 11m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.54% | 99.67% | 99.51% | 99.51% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.54% | 99.47% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 10m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.54% | 99.74% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 11m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.54% | 99.41% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 11m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.54% | 99.28% | 99.77% | 99.77% | — | ↓ 0.91x | 0 | — | — | 10m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.54% | 99.56% | 99.76% | 99.76% | — | → 1.05x | 0 | — | — | 11m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.54% | 99.04% | 100.00% | 100.00% | — | ↑ 1.22x | 0 | — | — | 10m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.54% | 99.62% | — | — | — | → 1.05x | 0 | — | — | 10m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.54% | 99.17% | 99.94% | 99.94% | — | → 1.04x | 0 | — | — | 9m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.43% | 99.66% | 77.28% | 77.28% | — | → 1.01x | 1 | 1h 60m | 30d ago | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.43% | 88.55% | 99.03% | 99.03% | — | → 0.98x | 0 | — | — | 4m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.43% | 99.57% | 99.48% | 99.48% | — | → 0.97x | 0 | — | — | 5m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.43% | 99.55% | 76.97% | 76.97% | — | ↑ 1.05x | 1 | 1h 60m | 30d ago | 5m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.43% | 99.59% | 96.32% | 96.32% | — | ↓ 0.85x | 0 | — | — | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.43% | 99.70% | 25.33% | 25.33% | — | → 1.02x | 0 | — | — | 4m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.43% | 98.96% | 2.34% | 2.34% | — | ↑ 1.39x | 1 | 1h 60m | 30d ago | 4m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.43% | 99.74% | 98.81% | 98.81% | — | → 1.00x | 0 | — | — | 1m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.43% | 99.50% | 99.64% | 99.64% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.43% | 99.61% | 99.83% | 99.83% | — | → 1.01x | 0 | — | — | 2m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.43% | 99.57% | 99.83% | 99.83% | — | ↑ 1.18x | 0 | — | — | 2m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.43% | 99.28% | 95.85% | 95.85% | — | → 0.98x | 0 | — | — | 1m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.42% | 99.28% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 11m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.42% | 99.39% | 99.94% | 99.94% | — | → 1.02x | 0 | — | — | 10m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.32% | 73.00% | 0.00% | 0.00% | — | ↓ 0.30x | 1 | 2h | 30d ago | 9m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.32% | 99.57% | 99.76% | 99.76% | — | ↑ 1.12x | 0 | — | — | 9m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.32% | 99.45% | 97.98% | 97.98% | — | → 1.02x | 0 | — | — | 8m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.32% | 99.57% | 99.65% | 99.65% | — | ↑ 2.01x | 0 | — | — | 8m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.32% | 59.23% | 5.08% | 5.08% | — | → 1.01x | 1 | 1h 60m | 30d ago | 7m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.32% | 99.53% | 66.42% | 66.42% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.32% | 99.38% | 24.53% | 24.53% | — | → 1.00x | 0 | — | — | 5m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.32% | 99.22% | 31.58% | 31.58% | — | ↑ 1.06x | 1 | 1h 60m | 30d ago | 4m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.32% | 99.42% | 99.79% | 99.79% | — | → 1.02x | 0 | — | — | 5m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.32% | 97.38% | 74.00% | 74.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.31% | 99.52% | 26.43% | 26.43% | — | → 1.00x | 0 | — | — | 2m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.31% | 99.50% | 55.08% | 55.08% | — | ↑ 1.32x | 0 | — | — | 2m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.31% | 99.48% | 97.80% | 97.80% | — | → 0.97x | 0 | — | — | 1m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.31% | 99.63% | 96.87% | 96.87% | — | → 1.05x | 0 | — | — | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.31% | 93.08% | 96.14% | 96.14% | — | ↑ 1.10x | 1 | 2h 60m | 30d ago | 11m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.21% | 98.93% | 51.42% | 51.42% | — | → 1.04x | 0 | — | — | 8m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.21% | 98.99% | 98.94% | 98.94% | — | ↓ 0.32x | 0 | — | — | 7m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.20% | 99.64% | 0.11% | 0.11% | — | → 0.99x | 1 | 1h 60m | 30d ago | 6m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.20% | 99.22% | 98.16% | 98.16% | — | ↓ 0.94x | 0 | — | — | 2m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.20% | 99.61% | 98.47% | 98.47% | — | ↑ 1.11x | 0 | — | — | 20s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.19% | 98.55% | 88.31% | 88.31% | — | ↓ 0.55x | 0 | — | — | 10m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.09% | 98.81% | 81.53% | 81.53% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.09% | 99.20% | 97.74% | 97.74% | — | ↑ 1.11x | 1 | 1h 60m | 30d ago | 2m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.09% | 99.00% | 98.96% | 98.96% | — | → 0.98x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.08% | 99.39% | 100.00% | 100.00% | — | ↓ 0.66x | 0 | — | — | 1m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 99.07% | 99.07% | — | — | — | → 1.00x | 0 | — | — | 9m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (58)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 98.97% | 99.31% | 38.65% | 38.65% | — | ↑ 1.05x | 1 | 1h 60m | 30d ago | 6m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 98.96% | 98.93% | 98.88% | 98.88% | — | ↑ 1.41x | 0 | — | — | 12m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 98.96% | 99.32% | 100.00% | 100.00% | — | ↓ 0.89x | 0 | — | — | 10m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 98.96% | 98.69% | 99.88% | 99.88% | — | → 0.98x | 0 | — | — | 10m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.86% | 99.66% | 99.02% | 99.02% | — | → 1.04x | 0 | — | — | 6m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.86% | 99.31% | 97.94% | 97.94% | — | → 1.00x | 0 | — | — | 5m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 98.86% | 98.51% | 99.82% | 99.82% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.85% | 90.18% | 99.61% | 99.61% | — | → 1.03x | 0 | — | — | 11m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 98.85% | 99.36% | — | — | — | ↓ 0.73x | 0 | — | — | 9m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.76% | 98.89% | 99.85% | 99.85% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.76% | 99.51% | 99.28% | 99.28% | — | → 1.04x | 0 | — | — | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.75% | 97.01% | 96.43% | 96.43% | — | → 0.96x | 1 | 2h | 30d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.75% | 98.53% | 57.00% | 57.00% | — | ↑ 1.28x | 0 | — | — | 4m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.53% | 97.93% | 89.02% | 89.02% | — | ↓ 0.93x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 98.52% | 97.80% | 99.27% | 99.27% | — | → 1.05x | 0 | — | — | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 98.29% | 99.25% | 97.28% | 97.28% | — | → 1.03x | 0 | — | — | 5m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.29% | 98.34% | 38.36% | 38.36% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.16% | 99.30% | 93.61% | 93.61% | — | ↑ 1.25x | 0 | — | — | 11m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 98.06% | 39.97% | 98.24% | 98.24% | — | ↑ 1.48x | 0 | — | — | 3m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.81% | 98.56% | 99.97% | 99.97% | — | ↑ 1.14x | 0 | — | — | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 97.71% | 99.30% | 99.87% | 99.87% | — | ↑ 1.25x | 0 | — | — | 41s ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 97.49% | 97.49% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 97.37% | 92.83% | 77.59% | 77.59% | — | ↓ 0.72x | 0 | — | — | 2m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 97.14% | 86.48% | 97.48% | 97.48% | — | ↑ 1.15x | 0 | — | — | 1m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 96.79% | 97.65% | 66.05% | 66.05% | — | ↑ 1.09x | 1 | 2h 60m | 30d ago | 1m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 96.79% | 99.02% | 96.94% | 96.94% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 96.42% | 99.06% | — | — | — | ↑ 1.45x | 0 | — | — | 9m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.20% | 96.85% | 97.85% | 97.85% | — | → 1.03x | 0 | — | — | 11m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 95.97% | 98.45% | 99.85% | 99.85% | — | ↑ 1.37x | 0 | — | — | 11m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 95.77% | 98.87% | 98.81% | 98.81% | — | ↑ 2.12x | 0 | — | — | 2m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 95.59% | 98.68% | 98.29% | 98.29% | — | ↑ 1.25x | 0 | — | — | 9m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 95.53% | 91.83% | 95.25% | 95.25% | — | ↑ 1.09x | 0 | — | — | 20s ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.71% | 97.49% | 98.75% | 98.75% | — | ↑ 1.29x | 0 | — | — | 12m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 94.32% | 49.67% | 40.01% | 40.01% | — | ↑ 1.12x | 0 | — | — | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 93.04% | 85.98% | 69.98% | 69.98% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 92.27% | 85.95% | — | — | — | → 1.02x | 0 | — | — | 9m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 88.93% | 90.03% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 88.93% | 95.48% | 83.18% | 83.18% | — | ↑ 3.87x | 0 | — | — | 3m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 88.91% | 96.83% | 98.12% | 98.12% | — | ↑ 2.00x | 0 | — | — | 2m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 88.34% | 76.97% | 99.93% | 99.93% | — | ↑ 1.26x | 0 | — | — | 8m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 85.75% | 82.50% | 67.23% | 67.23% | — | ↑ 2.06x | 1 | 2h | 30d ago | 9m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 82.13% | 77.95% | 54.05% | 54.05% | — | ↑ 2.37x | 1 | 2h | 30d ago | 9m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 78.17% | 40.95% | 97.75% | 97.75% | — | → 1.01x | 0 | — | — | 2m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 77.69% | 83.08% | 99.92% | 99.92% | — | ↑ 1.37x | 0 | — | — | 8m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 71.27% | 77.30% | 75.11% | 75.11% | — | ↑ 2.20x | 1 | 2h | 30d ago | 9m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 69.68% | 85.71% | 78.01% | 78.01% | — | ↑ 1.09x | 0 | — | — | 9m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 69.34% | 76.59% | 66.07% | 66.07% | — | ↑ 2.16x | 1 | 2h | 30d ago | 9m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 67.61% | 75.67% | 86.23% | 86.23% | — | ↑ 1.40x | 0 | — | — | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 67.23% | 77.52% | 96.32% | 96.32% | — | → 1.02x | 0 | — | — | 7m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 66.59% | 73.97% | 86.83% | 86.83% | — | ↑ 1.74x | 0 | — | — | 4m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 66.13% | 12.71% | 99.26% | 99.26% | — | ↓ 0.91x | 0 | — | — | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 63.54% | 35.97% | 46.51% | 46.51% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 59.79% | 89.65% | 98.02% | 98.02% | — | ↑ 4.55x | 0 | — | — | 41s ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 58.00% | 57.74% | 98.37% | 98.37% | — | ↑ 1.96x | 0 | — | — | 10m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 45.51% | 55.51% | 91.43% | 91.43% | — | ↓ 0.34x | 0 | — | — | 10m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 15.14% | 6.56% | 7.76% | 7.76% | — | ↑ 1.09x | 1 | 2h 60m | 30d ago | 12m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 14.61% | 22.63% | 93.54% | 93.54% | — | ↑ 4.09x | 0 | — | — | 10m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 9.70% | 3.00% | 44.99% | 44.99% | — | ↑ 1.10x | 0 | — | — | 3m ago |

</details>

<details open>
<summary><strong>🔴 Down (352)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 100.00% | 100.00% | — | — | — | → 0.98x | 0 | — | — | 9m ago |
| [Openference](https://lmspeed.net/provider/openference) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 99.88% | 99.95% | — | — | — | ↓ 0.77x | 0 | — | — | 9m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 99.77% | 98.95% | — | — | — | ↓ 0.80x | 0 | — | — | 9m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.73% | 99.73% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.65% | 99.51% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.65% | 99.59% | — | — | — | → 1.01x | 0 | — | — | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.54% | 80.82% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.42% | 99.60% | — | — | — | → 1.02x | 0 | — | — | 9m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.40% | 99.40% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.20% | 99.39% | 98.95% | 98.95% | — | ↑ 1.10x | 0 | — | — | 41s ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.09% | 99.10% | 99.76% | 99.76% | — | → 1.05x | 0 | — | — | 6m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 90.79% | 96.18% | 96.89% | 96.89% | — | → 1.01x | 0 | — | — | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 87.89% | 97.42% | 99.78% | 99.78% | — | ↑ 1.10x | 0 | — | — | 2m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 85.14% | 78.23% | 83.85% | 83.85% | — | ↑ 2.18x | 0 | — | — | 2m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 82.58% | 85.08% | — | — | — | ↑ 1.82x | 0 | — | — | 9m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 79.63% | 58.30% | 78.42% | 78.42% | — | ↑ 1.13x | 1 | 2h 60m | 30d ago | 11m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 79.19% | 77.90% | 94.11% | 94.11% | — | ↓ 0.93x | 0 | — | — | 9m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 77.77% | 92.64% | 98.12% | 98.12% | — | ↓ 0.91x | 0 | — | — | 4m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 76.74% | 80.84% | 98.45% | 98.45% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 76.23% | 80.00% | 87.06% | 87.06% | — | ↑ 1.30x | 0 | — | — | 2m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 75.68% | 82.15% | 98.89% | 98.89% | — | ↑ 1.44x | 0 | — | — | 9m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 74.80% | 94.92% | 99.98% | 99.98% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 74.69% | 94.96% | 24.63% | 24.63% | — | ↑ 1.12x | 0 | — | — | 4m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 74.63% | 78.74% | 10.72% | 10.72% | — | ↑ 1.32x | 1 | 1h 60m | 30d ago | 2m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 73.75% | 75.76% | 86.29% | 86.29% | — | ↑ 1.92x | 0 | — | — | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 71.20% | 77.53% | 48.46% | 48.46% | — | ↑ 1.23x | 1 | 1h 60m | 30d ago | 2m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 70.81% | 81.30% | 68.13% | 68.13% | — | ↑ 1.12x | 1 | 1h 60m | 30d ago | 4m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 70.41% | 94.19% | 89.73% | 89.73% | — | ↑ 1.12x | 0 | — | — | 7m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 70.10% | 80.99% | 99.78% | 99.78% | — | ↑ 1.60x | 0 | — | — | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 69.44% | 76.15% | 99.65% | 99.65% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 69.31% | 82.18% | 75.72% | 75.72% | — | ↑ 1.10x | 1 | 2h | 30d ago | 8m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 68.57% | 75.80% | 44.62% | 44.62% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 68.23% | 75.29% | 88.70% | 88.70% | — | ↑ 1.73x | 0 | — | — | 1m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 67.38% | 69.62% | 64.20% | 64.20% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.08% | 78.24% | 63.15% | 63.15% | — | → 1.03x | 0 | — | — | 6m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 66.74% | 73.99% | 54.78% | 54.78% | — | → 1.02x | 1 | 1h 60m | 30d ago | 6m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 66.51% | 71.91% | 85.02% | 85.02% | — | ↑ 1.38x | 0 | — | — | 2m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 66.44% | 59.68% | 98.87% | 98.87% | — | ↑ 1.27x | 0 | — | — | 7m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 64.89% | 74.58% | 99.77% | 99.77% | — | ↑ 1.71x | 0 | — | — | 8m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 64.73% | 70.30% | 69.01% | 69.01% | — | → 1.03x | 0 | — | — | 3m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 64.42% | 73.65% | 96.79% | 96.79% | — | ↑ 1.84x | 0 | — | — | 4m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 63.06% | 73.03% | 6.48% | 6.48% | — | ↑ 1.24x | 1 | 2h 60m | 30d ago | 10m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 62.79% | 75.02% | 82.00% | 82.00% | — | ↑ 1.29x | 0 | — | — | 9m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 62.78% | 74.94% | 68.41% | 68.41% | — | → 1.02x | 1 | 2h | 30d ago | 9m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 62.67% | 69.41% | 50.52% | 50.52% | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 62.10% | 74.04% | 98.92% | 98.92% | — | ↑ 1.38x | 0 | — | — | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 61.03% | 72.08% | 93.16% | 93.16% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 60.53% | 72.75% | 98.53% | 98.53% | — | → 1.05x | 0 | — | — | 10m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 60.48% | 79.79% | 99.09% | 99.09% | — | ↑ 1.17x | 0 | — | — | 8m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 60.18% | 70.39% | 91.98% | 91.98% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 59.10% | 70.61% | 99.85% | 99.85% | — | → 0.97x | 0 | — | — | 10m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 58.11% | 69.88% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 57.64% | 73.13% | 93.77% | 93.77% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 50.11% | 58.67% | 52.45% | 52.45% | — | → 1.03x | 1 | 2h | 30d ago | 9m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 45.39% | 67.35% | 99.06% | 99.06% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 43.79% | 57.90% | 75.15% | 75.15% | — | → 1.04x | 1 | 1h 60m | 30d ago | 4m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 33.22% | 8.52% | 87.63% | 87.63% | — | → 1.03x | 0 | — | — | 3m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 30.70% | 20.37% | 25.44% | 25.44% | — | ↑ 1.16x | 0 | — | — | 41s ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 29.42% | 84.11% | 17.31% | 17.31% | — | ↓ 0.77x | 0 | — | — | 6m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 28.54% | 58.69% | 99.88% | 99.88% | — | ↑ 1.26x | 0 | — | — | 10m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 23.53% | 85.01% | 99.61% | 99.61% | — | → 1.00x | 0 | — | — | 9m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 15.05% | 15.62% | 22.80% | 22.80% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 13.03% | 83.22% | 64.61% | 64.61% | — | → 1.02x | 0 | — | — | 2m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 12.69% | 83.19% | 99.93% | 99.93% | — | → 1.01x | 0 | — | — | 9m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 12.56% | 64.72% | — | — | — | ↑ 1.12x | 0 | — | — | 9m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 8.06% | 52.96% | 98.59% | 98.59% | — | ↓ 0.66x | 0 | — | — | 11m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 4.03% | 81.44% | 99.89% | 99.89% | — | ↑ 1.15x | 0 | — | — | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.46% | 0.41% | 34.65% | 34.65% | — | ↑ 1.72x | 0 | — | — | 3m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.23% | 0.28% | 0.00% | 0.00% | — | → 1.01x | 1 | 2h 60m | 30d ago | 11m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.11% | 0.86% | 0.10% | 0.10% | — | ↓ 0.54x | 1 | 1h 60m | 30d ago | 5m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 23.18% | 99.82% | 99.82% | — | — | 0 | — | — | 10m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.24% | 63.31% | 63.31% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.24% | 59.84% | 59.84% | — | — | 0 | — | — | 2m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.24% | 70.78% | 70.78% | — | — | 0 | — | — | 2m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.24% | 52.44% | 52.44% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.24% | 5.20% | 5.20% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.23% | 10.24% | 10.24% | — | — | 1 | 2h | 30d ago | 9m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.20% | 88.73% | 88.73% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.24% | 99.82% | 99.82% | — | — | 0 | — | — | 11m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.24% | 47.31% | 47.31% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.24% | 73.96% | 73.96% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.24% | 74.22% | 74.22% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.19% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.24% | 3.13% | 3.13% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.26% | 79.86% | 79.86% | — | — | 1 | 2h 60m | 30d ago | 41s ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.24% | 40.15% | 40.15% | — | — | 0 | — | — | 5m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.24% | 33.64% | 33.64% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 24.26% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.24% | 99.65% | 99.65% | — | — | 0 | — | — | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.22% | 90.14% | 90.14% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.24% | 85.33% | 85.33% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.23% | 83.66% | 83.66% | — | — | 1 | 2h | 30d ago | 9m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.24% | 21.09% | 21.09% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.23% | 84.65% | 84.65% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.23% | 75.27% | 75.27% | — | — | 1 | 2h | 30d ago | 9m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.24% | 57.88% | 57.88% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 8m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 9m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.23% | 70.96% | 70.96% | — | — | 1 | 2h | 30d ago | 8m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 9m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.24% | 19.82% | 19.82% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.11% | 83.11% | 83.11% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.24% | 13.15% | 13.15% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 13.08% | 44.49% | 44.49% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.24% | 87.39% | 87.39% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.24% | 30.30% | 30.30% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.20% | 99.75% | 99.75% | — | — | 0 | — | — | 9m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 43.17% | 68.70% | 68.70% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.24% | 78.14% | 78.14% | — | — | 0 | — | — | 4m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.24% | 98.15% | 98.15% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.24% | 78.64% | 78.64% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.24% | 3.12% | 3.12% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.24% | 32.40% | 32.40% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.20% | 76.21% | 76.21% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.19% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.24% | 72.40% | 72.40% | — | — | 1 | 2h 60m | 30d ago | 10m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.24% | 48.90% | 48.90% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.24% | 90.67% | 90.67% | — | — | 1 | 2h 60m | 30d ago | 9m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 47.56% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.24% | 31.88% | 31.88% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.20% | 99.73% | 99.73% | — | — | 0 | — | — | 11m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 10m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.24% | 84.44% | 84.44% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.24% | 32.34% | 32.34% | — | — | 1 | 2h 60m | 30d ago | 10m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.26% | 64.69% | 64.69% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.24% | 46.41% | 46.41% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.24% | 50.25% | 50.25% | — | — | 0 | — | — | 6m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.24% | 96.06% | 96.06% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.24% | 69.29% | 69.29% | — | — | 1 | 2h 59m | 30d ago | 12m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.24% | 39.40% | 39.40% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.24% | 64.35% | 64.35% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.24% | 26.33% | 26.33% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.20% | 98.70% | 98.70% | — | — | 0 | — | — | 10m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 54.56% | 97.23% | 97.23% | — | — | 0 | — | — | 9m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.24% | 50.43% | 50.43% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.20% | 75.41% | 75.41% | — | — | 1 | 60m | 30d ago | 12m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.24% | 22.07% | 22.07% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.24% | 98.37% | 98.37% | — | — | 0 | — | — | 2m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.22% | 32.48% | 32.48% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 10m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.24% | 99.89% | 99.89% | — | — | 0 | — | — | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.24% | 48.30% | 48.30% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.23% | 46.73% | 46.73% | — | — | 1 | 2h | 30d ago | 9m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.24% | 21.32% | 21.32% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.24% | 100.00% | 100.00% | — | — | 0 | — | — | 10m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 8m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.24% | 4.63% | 4.63% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.24% | 60.67% | 60.67% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.24% | 99.92% | 99.92% | — | — | 0 | — | — | 11m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.24% | 68.44% | 68.44% | — | — | 1 | 2h 60m | 30d ago | 41s ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.20% | 98.40% | 98.40% | — | — | 0 | — | — | 10m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.23% | 99.74% | 99.74% | — | — | 0 | — | — | 9m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 8m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.24% | 5.52% | 5.52% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.24% | 81.13% | 81.13% | — | — | 0 | — | — | 2m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.24% | 73.53% | 73.53% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.23% | 74.18% | 74.18% | — | — | 1 | 2h | 30d ago | 9m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.23% | 99.84% | 99.84% | — | — | 0 | — | — | 8m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.24% | 99.89% | 99.89% | — | — | 0 | — | — | 11m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.19% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.24% | 83.98% | 83.98% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.24% | 20.14% | 20.14% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.24% | 99.95% | 99.95% | — | — | 0 | — | — | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.24% | 48.81% | 48.81% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.23% | 83.92% | 83.92% | — | — | 1 | 1h 60m | 30d ago | 8m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.24% | 67.73% | 67.73% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.20% | 83.84% | 83.84% | — | — | 0 | — | — | 12m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.24% | 74.74% | 74.74% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.24% | 47.90% | 47.90% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.24% | 99.25% | 99.25% | — | — | 0 | — | — | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 75.66% | 6.05% | 6.05% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.20% | 91.99% | 91.99% | — | — | 0 | — | — | 12m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.24% | 22.80% | 22.80% | — | — | 0 | — | — | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.20% | 98.05% | 98.05% | — | — | 0 | — | — | 11m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.24% | 55.75% | 55.75% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.02% | — | — | — | — | 0 | — | — | 9m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.20% | 98.92% | 98.92% | — | — | 0 | — | — | 10m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.24% | 43.20% | 43.20% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 9m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.20% | 16.44% | 16.44% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.24% | 39.16% | 39.16% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.23% | 74.31% | 74.31% | — | — | 1 | 2h | 30d ago | 9m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.24% | 20.55% | 20.55% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.24% | 54.39% | 54.39% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.24% | 75.74% | 75.74% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.23% | 35.55% | 35.55% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 8m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.24% | 65.91% | 65.91% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.20% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.24% | 70.74% | 70.74% | — | — | 0 | — | — | 2m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.24% | 34.00% | 34.00% | — | — | 0 | — | — | 6m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.24% | 62.39% | 62.39% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.23% | 45.59% | 45.59% | — | — | 0 | — | — | 9m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.23% | 76.99% | 76.99% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.24% | 38.64% | 38.64% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.23% | 22.32% | 22.32% | — | — | 0 | — | — | 8m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.24% | 90.53% | 90.53% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.24% | 91.04% | 91.04% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.24% | 42.69% | 42.69% | — | — | 1 | 2h 60m | 30d ago | 41s ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.24% | 39.95% | 39.95% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 79.16% | 84.75% | 84.75% | — | — | 0 | — | — | 41s ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.20% | 99.29% | 99.29% | — | — | 0 | — | — | 10m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.24% | 24.01% | 24.01% | — | — | 1 | 2h 60m | 30d ago | 41s ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.23% | 81.34% | 81.34% | — | — | 0 | — | — | 9m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.24% | 73.32% | 73.32% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.24% | 2.87% | 2.87% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.24% | 49.45% | 49.45% | — | — | 0 | — | — | 2m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.23% | 39.57% | 39.57% | — | — | 1 | 2h | 30d ago | 8m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.24% | 20.82% | 20.82% | — | — | 1 | 0s | 30d ago | 5m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.23% | 23.09% | 23.09% | — | — | 0 | — | — | 7m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.24% | 20.58% | 20.58% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.24% | 33.55% | 33.55% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.24% | 52.99% | 52.99% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.24% | 82.46% | 82.46% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 61.32% | 99.80% | 99.80% | — | — | 0 | — | — | 7m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.23% | 92.62% | 92.62% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.23% | 23.25% | 23.25% | — | — | 1 | 2h | 30d ago | 9m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.24% | 27.77% | 27.77% | — | — | 0 | — | — | 3m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.24% | 86.17% | 86.17% | — | — | 0 | — | — | 7m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.24% | 49.10% | 49.10% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.23% | 86.30% | 86.30% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.24% | 65.07% | 65.07% | — | — | 1 | 1h 60m | 30d ago | 1m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.24% | 99.12% | 99.12% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.24% | 92.19% | 92.19% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 10m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.23% | 99.77% | 99.77% | — | — | 0 | — | — | 8m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.24% | 16.23% | 16.23% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.24% | 45.98% | 45.98% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.24% | 92.63% | 92.63% | — | — | 1 | 0s | 30d ago | 2m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.24% | 98.92% | 98.92% | — | — | 0 | — | — | 11m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.24% | 46.05% | 46.05% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.24% | 16.77% | 16.77% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.24% | 51.26% | 51.26% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.24% | 35.56% | 35.56% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.24% | 19.49% | 19.49% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.24% | 99.81% | 99.81% | — | — | 0 | — | — | 11m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 41s ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.24% | 72.39% | 72.39% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.24% | 83.68% | 83.68% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.24% | 26.68% | 26.68% | — | — | 0 | — | — | 4m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.24% | 46.80% | 46.80% | — | — | 1 | 2h 60m | 30d ago | 10m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.23% | 0.00% | 0.00% | — | — | 1 | 2h | 30d ago | 9m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.24% | 75.88% | 75.88% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.24% | 22.72% | 22.72% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.23% | 68.72% | 68.72% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.24% | 18.10% | 18.10% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.23% | 54.28% | 54.28% | — | — | 1 | 2h | 30d ago | 9m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.24% | 35.49% | 35.49% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.24% | 3.84% | 3.84% | — | — | 0 | — | — | 6m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.23% | 63.55% | 63.55% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.24% | 23.11% | 23.11% | — | — | 0 | — | — | 7m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.20% | 99.60% | 99.60% | — | — | 0 | — | — | 11m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.24% | 22.23% | 22.23% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 79.29% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.24% | 6.70% | 6.70% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.24% | 22.60% | 22.60% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 4m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.23% | 62.64% | 62.64% | — | — | 1 | 2h | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.24% | 30.92% | 30.92% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.24% | 68.76% | 68.76% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.20% | 3.80% | 3.80% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.24% | 44.20% | 44.20% | — | — | 1 | 2h 59m | 30d ago | 12m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.24% | 38.02% | 38.02% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.24% | 17.16% | 17.16% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.24% | 10.15% | 10.15% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.22% | 23.40% | 23.40% | — | — | 0 | — | — | 4m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.23% | 99.53% | 99.53% | — | — | 0 | — | — | 9m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.24% | 16.69% | 16.69% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.24% | 21.71% | 21.71% | — | — | 1 | 1h | 30d ago | 6m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.24% | 14.75% | 14.75% | — | — | 1 | 2h 60m | 30d ago | 1m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.24% | 25.49% | 25.49% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.24% | 8.99% | 8.99% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 11.99% | 92.86% | 92.86% | — | — | 0 | — | — | 1m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.24% | 3.93% | 3.93% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.24% | 4.55% | 4.55% | — | — | 1 | 2h 59m | 30d ago | 12m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.24% | 46.30% | 46.30% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.24% | 76.63% | 76.63% | — | — | 1 | 2h 60m | 30d ago | 10m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.19% | 32.96% | 32.96% | — | — | 0 | — | — | 6m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.24% | 36.28% | 36.28% | — | — | 1 | 2h 60m | 30d ago | 11m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.24% | 98.48% | 98.48% | — | — | 0 | — | — | 3m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.24% | 63.49% | 63.49% | — | — | 1 | 2h 60m | 30d ago | 2m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.24% | 40.17% | 40.17% | — | — | 1 | 1h 60m | 30d ago | 2m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 78.26% | 89.40% | 89.40% | — | — | 0 | — | — | 3m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.24% | 77.23% | 77.23% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.24% | 43.61% | 43.61% | — | — | 1 | 2h 60m | 30d ago | 21s ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.23% | 23.13% | 23.13% | — | — | 0 | — | — | 8m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.24% | 0.01% | 0.01% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.24% | 22.68% | 22.68% | — | — | 0 | — | — | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.24% | 60.97% | 60.97% | — | — | 0 | — | — | 1m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 5m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.24% | 38.37% | 38.37% | — | — | 1 | 1h 60m | 30d ago | 7m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.24% | 1.35% | 1.35% | — | — | 1 | 2h 60m | 30d ago | 12m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.24% | 17.59% | 17.59% | — | — | 1 | 1h 60m | 30d ago | 3m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.24% | 91.72% | 91.72% | — | — | 1 | 0s | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.24% | 99.77% | 99.77% | — | — | 0 | — | — | 11m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.23% | 99.17% | 99.17% | — | — | 0 | — | — | 8m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | 6m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 2h 60m | 30d ago | 11m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 1h 60m | 30d ago | — |

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
