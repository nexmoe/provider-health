# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**702 providers** — 291 🟢 operational · 54 🟡 degraded · 355 🔴 down · 2 ⚫ unknown

_Updated 2026-08-07 04:57 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (291)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.18% | 74.11% | 74.11% | — | → 1.02x | 0 | — | — | 5m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.32% | 24.43% | 24.43% | — | ↓ 0.41x | 0 | — | — | 6m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.78% | 99.45% | 99.45% | — | → 0.96x | 0 | — | — | 12m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.75% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 17s ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.15% | 99.33% | 99.33% | — | ↑ 1.07x | 0 | — | — | 57s ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 99.84% | 31.33% | 31.33% | — | → 1.01x | 1 | 1d 2h | 30d ago | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 68.50% | 68.50% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.78% | 43.99% | 43.99% | — | → 0.97x | 1 | 1d 2h | 30d ago | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.58% | 56.98% | 56.98% | — | → 0.97x | 0 | — | — | 8m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.73% | 65.57% | 65.57% | — | → 1.02x | 0 | — | — | 5m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.74% | 99.90% | 99.90% | — | → 0.98x | 0 | — | — | 8m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 94.50% | 99.09% | 99.09% | — | ↑ 1.08x | 0 | — | — | 6m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.52% | 99.74% | 99.74% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.26% | 99.74% | 99.74% | — | → 1.02x | 1 | 0s | 30d ago | 10m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 99.78% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 12m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 94.36% | 96.18% | 96.18% | — | → 1.04x | 0 | — | — | 4m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.73% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 13s ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.78% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 1m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.80% | 98.38% | 98.38% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.54% | 69.87% | 69.87% | — | → 1.04x | 0 | — | — | 5m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 100.00% | 99.71% | 88.17% | 88.17% | — | → 1.02x | 1 | 1d 2h | 30d ago | 6m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.65% | 99.91% | 99.91% | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.78% | 92.20% | 92.20% | — | → 1.05x | 0 | — | — | 4m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.84% | 93.73% | 93.73% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.87% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.91% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 36s ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.84% | 99.66% | 99.66% | — | → 1.02x | 0 | — | — | 12m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.75% | 99.94% | 99.94% | — | ↑ 1.09x | 0 | — | — | 17s ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.74% | 36.33% | 36.33% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.80% | 98.04% | 98.04% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.73% | 98.74% | 98.74% | — | → 0.99x | 0 | — | — | 4m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 99.78% | 60.72% | 60.72% | — | → 1.01x | 0 | — | — | 12m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.49% | 96.73% | 96.73% | — | ↓ 0.91x | 0 | — | — | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.65% | 99.85% | 99.85% | — | → 1.04x | 1 | 0s | 30d ago | 8m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.78% | 99.67% | 99.67% | — | ↑ 1.09x | 1 | 1d 2h | 30d ago | 6m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 100.00% | 99.51% | — | — | — | → 0.95x | 0 | — | — | 11m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.87% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 11m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.89% | 99.72% | 99.98% | 99.98% | — | → 0.96x | 0 | — | — | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.89% | 99.58% | 99.96% | 99.96% | — | → 1.01x | 0 | — | — | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.89% | 99.80% | 17.47% | 17.47% | — | ↓ 0.85x | 1 | 1d 2h | 30d ago | 10m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.89% | 99.74% | 99.92% | 99.92% | — | → 0.96x | 0 | — | — | 10m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.89% | 99.76% | 44.95% | 44.95% | — | → 0.95x | 0 | — | — | 10m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.85% | 99.98% | 99.98% | — | ↑ 1.69x | 0 | — | — | 11m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.89% | 98.21% | 93.42% | 93.42% | — | ↓ 0.95x | 0 | — | — | 11m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.89% | 99.82% | 99.65% | 99.65% | — | → 0.96x | 0 | — | — | 9m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.89% | 99.28% | 99.64% | 99.64% | — | ↓ 0.91x | 0 | — | — | 9m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.89% | 99.85% | 1.90% | 1.90% | — | → 1.01x | 1 | 1d 2h | 30d ago | 8m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.89% | 98.35% | 98.78% | 98.78% | — | ↓ 0.78x | 0 | — | — | 8m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.89% | 99.82% | 80.20% | 80.20% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.89% | 99.76% | 99.85% | 99.85% | — | → 1.01x | 0 | — | — | 7m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.89% | 99.76% | 99.34% | 99.34% | — | → 1.01x | 0 | — | — | 7m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.89% | 99.58% | 22.94% | 22.94% | — | → 1.04x | 0 | — | — | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.89% | 99.05% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 7m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.89% | 99.78% | 99.87% | 99.87% | — | → 1.01x | 0 | — | — | 6m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.89% | 99.76% | 99.95% | 99.95% | — | → 1.01x | 0 | — | — | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.89% | 99.87% | 97.57% | 97.57% | — | ↑ 1.12x | 0 | — | — | 6m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.89% | 99.80% | 99.37% | 99.37% | — | ↑ 1.17x | 0 | — | — | 6m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.89% | 99.58% | 24.91% | 24.91% | — | → 0.96x | 0 | — | — | 6m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.89% | 99.76% | 5.16% | 5.16% | — | → 0.96x | 1 | 1d 2h | 30d ago | 6m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.89% | 99.85% | 98.73% | 98.73% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.89% | 99.78% | 84.58% | 84.58% | — | → 0.96x | 0 | — | — | 5m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.89% | 99.76% | 99.61% | 99.61% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.89% | 99.60% | 82.26% | 82.26% | — | → 0.97x | 0 | — | — | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.89% | 99.76% | 96.88% | 96.88% | — | → 1.03x | 0 | — | — | 5m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.89% | 99.89% | 60.60% | 60.60% | — | → 1.01x | 0 | — | — | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.89% | 99.11% | 98.88% | 98.88% | — | ↓ 0.76x | 0 | — | — | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.89% | 99.76% | 94.26% | 94.26% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.89% | 99.56% | 98.11% | 98.11% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.89% | 99.73% | 99.18% | 99.18% | — | ↑ 1.12x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.89% | 99.51% | 98.85% | 98.85% | — | ↑ 1.14x | 0 | — | — | 3m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.89% | 99.80% | 99.86% | 99.86% | — | ↓ 0.92x | 0 | — | — | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.89% | 99.78% | 99.89% | 99.89% | — | → 0.97x | 0 | — | — | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.89% | 99.78% | 98.47% | 98.47% | — | → 1.04x | 0 | — | — | 3m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.89% | 99.09% | 83.10% | 83.10% | — | ↑ 1.07x | 0 | — | — | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.89% | 82.28% | 98.16% | 98.16% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.89% | 99.78% | 98.43% | 98.43% | — | → 1.04x | 0 | — | — | 2m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.89% | 99.58% | 99.71% | 99.71% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.89% | 99.71% | 99.93% | 99.93% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.89% | 99.64% | 28.78% | 28.78% | — | ↑ 1.20x | 1 | 1d 2h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.89% | 99.82% | 99.97% | 99.97% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.89% | 99.71% | 98.37% | 98.37% | — | → 0.98x | 0 | — | — | 3m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.89% | 91.94% | 0.69% | 0.69% | — | ↑ 1.11x | 1 | 1d 2h | 30d ago | 2m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.89% | 99.78% | 98.78% | 98.78% | — | → 0.97x | 1 | 0s | 29d ago | 3m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.89% | 92.79% | 99.95% | 99.95% | — | ↓ 0.83x | 0 | — | — | 57s ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.89% | 93.19% | 87.87% | 87.87% | — | → 1.02x | 0 | — | — | 36s ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.89% | 99.75% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 59s ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.89% | 99.60% | 99.89% | 99.89% | — | → 1.03x | 0 | — | — | 1m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.89% | 99.75% | 99.94% | 99.94% | — | ↑ 1.08x | 0 | — | — | 37s ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.89% | 99.80% | 0.00% | 0.00% | — | ↑ 1.11x | 1 | 1d 2h | 30d ago | 59s ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.89% | 99.57% | 98.56% | 98.56% | — | ↑ 1.06x | 0 | — | — | 57s ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.89% | 99.73% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 59s ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.89% | 99.73% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 1m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.89% | 99.80% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 14s ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.89% | 99.71% | 99.97% | 99.97% | — | ↑ 1.07x | 0 | — | — | 14s ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.89% | 99.75% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 14s ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.89% | 99.66% | 16.67% | 16.67% | — | → 1.04x | 1 | 1d 2h | 30d ago | 17s ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.89% | 98.95% | 91.90% | 91.90% | — | → 1.02x | 0 | — | — | 12m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.89% | 99.53% | 99.09% | 99.09% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.89% | 99.82% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 12m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.89% | 98.61% | 39.41% | 39.41% | — | ↑ 1.14x | 0 | — | — | 12m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.89% | 99.71% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 12m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.89% | 99.57% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 12m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.89% | 99.78% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 12m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.89% | 99.66% | — | — | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.89% | 98.99% | 99.34% | 99.34% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.89% | 99.73% | 99.48% | 99.48% | — | → 1.02x | 0 | — | — | 11m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.78% | 97.80% | 93.57% | 93.57% | — | → 1.03x | 0 | — | — | 11m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.78% | 99.65% | 99.49% | 99.49% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.78% | 99.69% | 99.94% | 99.94% | — | ↓ 0.88x | 0 | — | — | 9m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.78% | 99.52% | 99.75% | 99.75% | — | → 1.04x | 0 | — | — | 10m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.78% | 99.72% | 68.59% | 68.59% | — | → 0.95x | 1 | 1d 2h | 30d ago | 11m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.78% | 99.61% | 99.73% | 99.73% | — | ↑ 1.75x | 0 | — | — | 9m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.78% | 99.50% | 99.62% | 99.62% | — | ↑ 1.05x | 0 | — | — | 10m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.78% | 99.74% | 70.89% | 70.89% | — | → 1.02x | 1 | 1d 2h | 30d ago | 10m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.78% | 99.56% | 95.68% | 95.68% | — | → 1.05x | 0 | — | — | 11m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.78% | 99.50% | 99.60% | 99.60% | — | → 1.04x | 0 | — | — | 10m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.78% | 99.78% | 99.81% | 99.81% | — | → 1.01x | 0 | — | — | 10m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.78% | 99.63% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 29d ago | 9m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.78% | 99.67% | 97.57% | 97.57% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.78% | 99.74% | 99.90% | 99.90% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.78% | 99.72% | 22.33% | 22.33% | — | ↓ 0.91x | 1 | 1d 2h | 30d ago | 9m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.78% | 99.78% | 99.97% | 99.97% | — | ↓ 0.84x | 0 | — | — | 9m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.78% | 99.74% | 99.58% | 99.58% | — | → 1.01x | 1 | 2h | 29d ago | 9m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.78% | 99.76% | 99.49% | 99.49% | — | → 1.01x | 0 | — | — | 9m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.78% | 99.65% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 9m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.78% | 99.76% | 98.92% | 98.92% | — | → 1.04x | 0 | — | — | 8m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.78% | 99.63% | 99.87% | 99.87% | — | → 0.97x | 0 | — | — | 8m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.78% | 99.56% | 99.62% | 99.62% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.78% | 99.54% | 99.77% | 99.77% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.78% | 99.54% | 22.30% | 22.30% | — | ↓ 0.87x | 0 | — | — | 7m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.78% | 98.28% | 98.93% | 98.93% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.78% | 89.32% | 85.28% | 85.28% | — | ↓ 0.90x | 0 | — | — | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.78% | 99.67% | 50.15% | 50.15% | — | ↑ 1.11x | 0 | — | — | 6m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.78% | 99.63% | 24.54% | 24.54% | — | ↑ 1.16x | 0 | — | — | 6m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.78% | 25.69% | 27.04% | 27.04% | — | → 1.00x | 1 | 1d 2h | 30d ago | 5m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.78% | 99.78% | 93.26% | 93.26% | — | → 1.03x | 0 | — | — | 5m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.78% | 99.73% | 77.97% | 77.97% | — | → 0.97x | 0 | — | — | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.78% | 99.78% | 83.46% | 83.46% | — | → 1.05x | 0 | — | — | 5m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.78% | 99.69% | 62.65% | 62.65% | — | → 1.02x | 0 | — | — | 5m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.78% | 99.54% | 69.43% | 69.43% | — | → 0.99x | 0 | — | — | 5m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.78% | 99.65% | 81.07% | 81.07% | — | → 1.01x | 0 | — | — | 5m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.78% | 99.82% | 97.00% | 97.00% | — | ↑ 1.17x | 0 | — | — | 4m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.78% | 99.27% | 28.39% | 28.39% | — | ↓ 0.88x | 1 | 1d 2h | 30d ago | 4m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.78% | 99.73% | 91.09% | 91.09% | — | → 1.01x | 0 | — | — | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.78% | 99.76% | 58.17% | 58.17% | — | ↑ 1.63x | 1 | 1d 2h | 30d ago | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.78% | 99.71% | 43.48% | 43.48% | — | → 0.98x | 1 | 1d 2h | 30d ago | 4m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.78% | 99.78% | 98.73% | 98.73% | — | → 1.03x | 0 | — | — | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.78% | 99.62% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 4m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.78% | 99.78% | 99.30% | 99.30% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.78% | 99.73% | 29.98% | 29.98% | — | ↑ 1.05x | 1 | 1d 2h | 30d ago | 3m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.78% | 99.47% | 76.90% | 76.90% | — | → 1.03x | 0 | — | — | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.78% | 99.67% | 96.80% | 96.80% | — | → 0.97x | 0 | — | — | 2m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.78% | 93.97% | 92.56% | 92.56% | — | ↓ 0.77x | 1 | 3h 59m | 29d ago | 2m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.78% | 99.69% | 98.35% | 98.35% | — | ↑ 1.23x | 0 | — | — | 3m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.78% | 98.71% | 32.93% | 32.93% | — | → 1.04x | 0 | — | — | 2m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.78% | 96.57% | 99.82% | 99.82% | — | → 1.02x | 0 | — | — | 2m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.78% | 99.46% | 99.86% | 99.86% | — | ↑ 1.18x | 0 | — | — | 2m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.78% | 99.51% | 99.67% | 99.67% | — | ↑ 1.09x | 0 | — | — | 1m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.78% | 99.53% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 59s ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.78% | 99.73% | 0.00% | 0.00% | — | → 1.05x | 1 | 1d 2h | 30d ago | 37s ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.78% | 99.71% | 97.35% | 97.35% | — | → 0.97x | 0 | — | — | 1m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.78% | 99.53% | 99.67% | 99.67% | — | → 1.04x | 0 | — | — | 36s ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.78% | 99.64% | 99.85% | 99.85% | — | → 1.03x | 0 | — | — | 16s ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.78% | 99.75% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 14s ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.78% | 99.44% | 99.97% | 99.97% | — | ↑ 1.10x | 0 | — | — | 16s ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.78% | 99.78% | 99.86% | 99.86% | — | ↑ 1.05x | 0 | — | — | 17s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.78% | 99.46% | 99.85% | 99.85% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.78% | 99.66% | 99.85% | 99.85% | — | ↑ 2.13x | 0 | — | — | 12m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.78% | 99.69% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.78% | 99.68% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.67% | 99.65% | 75.23% | 75.23% | — | ↑ 1.11x | 1 | 1d 2h | 30d ago | 11m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.67% | 38.17% | 99.95% | 99.95% | — | ↑ 1.30x | 0 | — | — | 11m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.67% | 99.63% | 98.78% | 98.78% | — | → 1.00x | 0 | — | — | 11m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.67% | 99.63% | 98.93% | 98.93% | — | → 1.01x | 0 | — | — | 11m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.67% | 99.61% | 99.58% | 99.58% | — | ↓ 0.93x | 0 | — | — | 10m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.67% | 99.72% | 99.90% | 99.90% | — | ↑ 1.50x | 0 | — | — | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 99.67% | 83.07% | 76.64% | 76.64% | — | ↑ 1.05x | 1 | 1d 2h | 30d ago | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.67% | 97.10% | 47.85% | 47.85% | — | → 1.04x | 1 | 1d 2h | 30d ago | 8m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.67% | 99.54% | 99.87% | 99.87% | — | ↑ 1.25x | 0 | — | — | 8m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.67% | 99.56% | 99.84% | 99.84% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.67% | 99.65% | 76.89% | 76.89% | — | → 1.03x | 1 | 1d 2h | 30d ago | 8m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.67% | 99.63% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 8m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.67% | 82.79% | 0.11% | 0.11% | — | ↑ 1.10x | 1 | 1d 2h | 30d ago | 6m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.67% | 99.40% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.67% | 97.90% | 26.84% | 26.84% | — | → 0.95x | 0 | — | — | 6m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.67% | 99.69% | 30.20% | 30.20% | — | ↑ 1.08x | 1 | 1d 2h | 30d ago | 6m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.67% | 99.67% | 98.00% | 98.00% | — | ↑ 1.25x | 0 | — | — | 5m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.67% | 99.80% | 71.79% | 71.79% | — | ↑ 1.16x | 0 | — | — | 5m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.67% | 99.62% | 99.35% | 99.35% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.67% | 99.85% | 63.68% | 63.68% | — | → 1.00x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.67% | 97.60% | 97.21% | 97.21% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.67% | 99.73% | 96.69% | 96.69% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.67% | 99.60% | 90.95% | 90.95% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.67% | 99.76% | 90.32% | 90.32% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.67% | 99.62% | 99.00% | 99.00% | — | ↑ 1.87x | 0 | — | — | 4m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.67% | 98.13% | 56.85% | 56.85% | — | → 1.00x | 0 | — | — | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.67% | 99.58% | 91.87% | 91.87% | — | → 0.99x | 0 | — | — | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.67% | 99.78% | 99.31% | 99.31% | — | ↓ 0.88x | 0 | — | — | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.67% | 99.78% | 89.57% | 89.57% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.67% | 99.69% | 98.90% | 98.90% | — | ↑ 1.15x | 0 | — | — | 4m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.67% | 99.53% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.67% | 99.62% | 99.87% | 99.87% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.67% | 98.91% | 98.83% | 98.83% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.67% | 99.40% | 93.06% | 93.06% | — | ↓ 0.90x | 0 | — | — | 2m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.67% | 99.67% | 97.87% | 97.87% | — | ↑ 1.27x | 0 | — | — | 2m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.67% | 99.62% | 99.34% | 99.34% | — | → 0.96x | 2 | 0s | 30d ago | 2m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.67% | 99.31% | 97.07% | 97.07% | — | → 1.00x | 0 | — | — | 1m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.67% | 97.81% | 96.89% | 96.89% | — | ↑ 1.07x | 1 | 0s | 29d ago | 1m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.67% | 99.80% | 99.08% | 99.08% | — | ↑ 1.06x | 0 | — | — | 59s ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.67% | 99.80% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 1m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.67% | 99.75% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 57s ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.67% | 99.62% | 89.89% | 89.89% | — | → 1.01x | 1 | 0s | 30d ago | 59s ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.67% | 99.55% | 96.10% | 96.10% | — | → 0.98x | 0 | — | — | 1m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.67% | 99.64% | 99.95% | 99.95% | — | → 1.03x | 0 | — | — | 14s ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.67% | 99.73% | 24.52% | 24.52% | — | ↑ 1.17x | 1 | 1d 2h | 30d ago | 13s ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.67% | 99.66% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 14s ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.67% | 99.75% | 99.61% | 99.61% | — | ↑ 1.40x | 0 | — | — | 12m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.67% | 99.73% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 12m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.67% | 99.51% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 12m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.66% | 99.03% | 100.00% | 100.00% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.66% | 99.64% | — | — | — | ↑ 1.17x | 0 | — | — | 12m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.66% | 99.71% | 99.67% | 99.67% | — | ↑ 1.18x | 0 | — | — | 11m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.56% | 99.67% | 76.22% | 76.22% | — | → 1.01x | 1 | 1d 2h | 30d ago | 10m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.56% | 99.58% | 99.74% | 99.74% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.56% | 99.56% | 49.74% | 49.74% | — | → 1.03x | 0 | — | — | 10m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.56% | 99.67% | 98.00% | 98.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.56% | 99.62% | 54.70% | 54.70% | — | ↑ 1.12x | 0 | — | — | 6m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.56% | 99.25% | 31.58% | 31.58% | — | ↑ 1.05x | 1 | 1d 2h | 30d ago | 6m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.56% | 99.71% | 25.33% | 25.33% | — | → 1.02x | 0 | — | — | 6m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.56% | 99.62% | 64.92% | 64.92% | — | → 1.04x | 0 | — | — | 5m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.56% | 98.96% | 2.34% | 2.34% | — | ↑ 1.36x | 1 | 1d 2h | 30d ago | 5m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.56% | 99.60% | 99.88% | 99.88% | — | → 1.05x | 0 | — | — | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.56% | 99.34% | 63.14% | 63.14% | — | ↑ 1.14x | 0 | — | — | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.56% | 99.76% | 98.81% | 98.81% | — | → 1.00x | 0 | — | — | 3m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.56% | 99.42% | 97.03% | 97.03% | — | → 1.03x | 0 | — | — | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.56% | 99.64% | 98.56% | 98.56% | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.56% | 99.60% | 97.90% | 97.90% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.56% | 99.69% | 66.50% | 66.50% | — | ↑ 1.16x | 1 | 1d 2h | 30d ago | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.56% | 99.31% | 98.16% | 98.16% | — | ↓ 0.93x | 0 | — | — | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.56% | 99.29% | 95.85% | 95.85% | — | → 0.96x | 0 | — | — | 3m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.56% | 95.79% | 97.00% | 97.00% | — | → 1.01x | 0 | — | — | 2m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.56% | 99.51% | 99.74% | 99.74% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.56% | 98.78% | 90.79% | 90.79% | — | ↑ 1.19x | 0 | — | — | 3m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.56% | 99.62% | 86.85% | 86.85% | — | → 0.99x | 0 | — | — | 3m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.56% | 99.37% | 14.21% | 14.21% | — | ↓ 0.90x | 1 | 1d 2h | 30d ago | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.55% | 99.69% | 99.10% | 99.10% | — | ↑ 1.09x | 0 | — | — | 56s ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.55% | 99.42% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 36s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.55% | 98.61% | 88.31% | 88.31% | — | ↓ 0.55x | 0 | — | — | 12m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.55% | 99.39% | 99.94% | 99.94% | — | → 1.01x | 0 | — | — | 12m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.55% | 99.15% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 11m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.55% | 99.33% | — | — | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.45% | 99.58% | 99.65% | 99.65% | — | ↑ 1.76x | 0 | — | — | 10m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.45% | 80.45% | 76.88% | 76.88% | — | ↑ 1.17x | 1 | 1d 2h | 30d ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.45% | 99.01% | 98.94% | 98.94% | — | ↓ 0.32x | 0 | — | — | 9m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.45% | 99.74% | 99.98% | 99.98% | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.45% | 99.17% | 99.76% | 99.76% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.45% | 99.56% | 99.48% | 99.48% | — | → 0.99x | 0 | — | — | 7m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.45% | 99.54% | 76.97% | 76.97% | — | → 1.04x | 1 | 1d 2h | 30d ago | 7m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.45% | 99.65% | 77.28% | 77.28% | — | → 1.00x | 1 | 1d 2h | 30d ago | 6m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.45% | 88.27% | 99.03% | 99.03% | — | → 0.98x | 0 | — | — | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.45% | 99.58% | 96.32% | 96.32% | — | ↓ 0.85x | 0 | — | — | 6m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.45% | 99.49% | 99.64% | 99.64% | — | → 1.04x | 0 | — | — | 4m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.45% | 99.60% | 99.83% | 99.83% | — | → 0.97x | 0 | — | — | 4m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.45% | 99.51% | 98.66% | 98.66% | — | → 0.98x | 0 | — | — | 4m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.45% | 99.56% | 99.83% | 99.83% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.44% | 99.55% | 99.76% | 99.76% | — | ↑ 1.05x | 0 | — | — | 37s ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.44% | 99.28% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 14s ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.44% | 99.28% | 99.77% | 99.77% | — | ↓ 0.90x | 0 | — | — | 12m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.34% | 99.43% | 97.98% | 97.98% | — | → 1.02x | 0 | — | — | 10m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.34% | 98.99% | 99.56% | 99.56% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.34% | 72.33% | 0.00% | 0.00% | — | ↓ 0.29x | 1 | 1d 2h | 30d ago | 11m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.34% | 99.56% | 99.76% | 99.76% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.34% | 99.65% | 0.11% | 0.11% | — | → 0.99x | 1 | 1d 2h | 30d ago | 8m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.34% | 99.51% | 66.42% | 66.42% | — | ↑ 1.10x | 0 | — | — | 6m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.34% | 97.32% | 74.00% | 74.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.33% | 99.58% | 99.78% | 99.78% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.33% | 99.49% | 55.08% | 55.08% | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.33% | 99.47% | 97.80% | 97.80% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.33% | 99.69% | 98.69% | 98.69% | — | → 1.04x | 0 | — | — | 3m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.33% | 99.62% | 96.87% | 96.87% | — | → 1.04x | 0 | — | — | 12m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.23% | 99.36% | 24.53% | 24.53% | — | → 1.00x | 0 | — | — | 7m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.23% | 99.41% | 99.79% | 99.79% | — | → 1.00x | 1 | 0s | 30d ago | 7m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.22% | 99.00% | 98.96% | 98.96% | — | → 1.00x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.22% | 99.42% | 100.00% | 100.00% | — | ↓ 0.56x | 0 | — | — | 3m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.22% | 92.91% | 96.14% | 96.14% | — | → 1.04x | 1 | 1d 2h | 30d ago | 14s ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.11% | 97.85% | 99.27% | 99.27% | — | ↑ 1.18x | 0 | — | — | 5m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.11% | 99.18% | 97.74% | 97.74% | — | ↑ 1.09x | 1 | 16h 52m | 30d ago | 3m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.11% | 99.62% | 98.47% | 98.47% | — | ↑ 1.13x | 0 | — | — | 2m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.01% | 58.22% | 5.08% | 5.08% | — | → 1.00x | 1 | 1d 2h | 30d ago | 9m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.01% | 99.34% | 97.94% | 97.94% | — | → 1.01x | 0 | — | — | 7m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.00% | 99.51% | 26.43% | 26.43% | — | → 0.99x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (54)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.00% | 98.91% | 98.88% | 98.88% | — | ↑ 1.39x | 0 | — | — | 1m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.00% | 99.30% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 12m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.90% | 98.93% | 51.42% | 51.42% | — | ↑ 1.21x | 0 | — | — | 10m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.90% | 99.65% | 99.02% | 99.02% | — | → 1.03x | 0 | — | — | 8m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 98.90% | 99.32% | 38.65% | 38.65% | — | ↑ 1.06x | 1 | 1d 2h | 30d ago | 8m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.89% | 98.31% | 99.10% | 99.10% | — | ↓ 0.82x | 0 | — | — | 4m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 98.88% | 99.37% | — | — | — | ↓ 0.75x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.79% | 96.94% | 96.43% | 96.43% | — | → 0.96x | 1 | 11h | 29d ago | 10m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.68% | 97.90% | 89.02% | 89.02% | — | ↓ 0.95x | 0 | — | — | 9m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.57% | 98.86% | 99.85% | 99.85% | — | ↑ 1.07x | 0 | — | — | 10m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.57% | 99.50% | 99.28% | 99.28% | — | → 1.03x | 0 | — | — | 10m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.55% | 89.93% | 99.61% | 99.61% | — | → 1.03x | 2 | 0s | 29d ago | 16s ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 98.45% | 99.25% | 97.28% | 97.28% | — | → 1.01x | 0 | — | — | 7m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.45% | 98.50% | 57.00% | 57.00% | — | ↑ 1.39x | 0 | — | — | 6m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.34% | 98.32% | 38.36% | 38.36% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 98.34% | 98.47% | 99.82% | 99.82% | — | ↑ 1.22x | 0 | — | — | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.22% | 99.28% | 93.61% | 93.61% | — | ↑ 1.23x | 0 | — | — | 59s ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.88% | 98.52% | 99.97% | 99.97% | — | ↑ 1.18x | 0 | — | — | 36s ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 97.78% | 92.78% | 77.59% | 77.59% | — | ↓ 0.71x | 0 | — | — | 4m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 97.47% | 99.00% | 98.29% | 98.29% | — | ↑ 1.18x | 0 | — | — | 11m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 97.45% | 98.78% | 81.53% | 81.53% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 97.38% | 97.38% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 97.22% | 86.15% | 97.48% | 97.48% | — | ↑ 1.12x | 1 | 0s | 30d ago | 3m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 96.89% | 97.62% | 66.05% | 66.05% | — | ↑ 1.10x | 1 | 1d 2h | 30d ago | 3m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 96.44% | 99.00% | 96.94% | 96.94% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 96.42% | 99.03% | — | — | — | ↑ 1.50x | 0 | — | — | 11m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.21% | 96.87% | 97.85% | 97.85% | — | → 1.04x | 0 | — | — | 55s ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 96.10% | 98.46% | 99.85% | 99.85% | — | ↑ 1.43x | 1 | 6h 1m | 30d ago | 59s ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 95.90% | 98.84% | 98.81% | 98.81% | — | ↑ 2.07x | 0 | — | — | 3m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 95.90% | 38.69% | 98.24% | 98.24% | — | ↑ 1.48x | 0 | — | — | 4m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 95.56% | 98.48% | 97.10% | 97.10% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.32% | 97.52% | 98.75% | 98.75% | — | ↑ 1.24x | 0 | — | — | 1m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 95.20% | 98.65% | 99.88% | 99.88% | — | → 0.98x | 0 | — | — | 12m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 94.71% | 48.54% | 40.01% | 40.01% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 94.68% | 96.50% | 83.18% | 83.18% | — | ↑ 2.92x | 0 | — | — | 5m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 93.26% | 85.77% | 69.98% | 69.98% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 92.11% | 91.65% | 95.25% | 95.25% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 90.83% | 85.44% | — | — | — | → 1.04x | 0 | — | — | 11m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 89.26% | 89.78% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 11m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 87.92% | 78.42% | 83.85% | 83.85% | — | ↑ 1.85x | 0 | — | — | 4m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 86.56% | 78.34% | 54.05% | 54.05% | — | ↑ 1.98x | 1 | 1d 2h | 30d ago | 11m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 75.33% | 86.54% | 78.01% | 78.01% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.06% | 73.13% | 85.02% | 85.02% | — | ↑ 1.24x | 0 | — | — | 4m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 70.76% | 74.36% | 6.48% | 6.48% | — | ↑ 1.10x | 1 | 1d 2h | 30d ago | 13m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 68.60% | 76.26% | 82.00% | 82.00% | — | ↑ 1.23x | 0 | — | — | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 68.53% | 74.09% | 98.53% | 98.53% | — | ↑ 1.05x | 0 | — | — | 13m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 61.22% | 89.44% | 98.02% | 98.02% | — | ↑ 1.87x | 0 | — | — | 3m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 59.49% | 57.91% | 98.37% | 98.37% | — | ↑ 2.13x | 0 | — | — | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 56.21% | 34.39% | 46.51% | 46.51% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 51.82% | 10.58% | 99.26% | 99.26% | — | ↓ 0.88x | 0 | — | — | 7m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 32.56% | 7.82% | 87.63% | 87.63% | — | → 1.03x | 0 | — | — | 4m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 32.29% | 54.50% | 91.43% | 91.43% | — | ↓ 0.32x | 0 | — | — | 12m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 8.93% | 22.13% | 93.54% | 93.54% | — | ↑ 3.67x | 0 | — | — | 12m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 7.78% | 5.22% | 7.76% | 7.76% | — | ↑ 1.08x | 1 | 1d 2h | 30d ago | 2m ago |

</details>

<details open>
<summary><strong>🔴 Down (355)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 100.00% | 100.00% | — | — | — | → 0.98x | 0 | — | — | 11m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.89% | 99.55% | — | — | — | → 0.99x | 0 | — | — | 11m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 99.89% | 99.95% | — | — | — | ↓ 0.81x | 0 | — | — | 11m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 99.78% | 98.89% | — | — | — | ↓ 0.93x | 0 | — | — | 11m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.78% | 99.64% | — | — | — | → 0.99x | 0 | — | — | 11m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.66% | 80.37% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.55% | 99.66% | 99.51% | 99.51% | — | → 1.04x | 0 | — | — | 1m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.55% | 99.64% | — | — | — | → 1.01x | 0 | — | — | 11m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.45% | 99.45% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.11% | 99.38% | 98.95% | 98.95% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 98.44% | 99.42% | 99.87% | 99.87% | — | ↑ 1.23x | 0 | — | — | 2m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 90.97% | 83.06% | 67.23% | 67.23% | — | ↑ 1.55x | 1 | 1d 2h | 30d ago | 10m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 90.35% | 97.09% | 98.12% | 98.12% | — | ↑ 1.95x | 0 | — | — | 3m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 89.43% | 76.56% | 99.93% | 99.93% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 89.38% | 94.91% | 98.12% | 98.12% | — | ↓ 0.95x | 0 | — | — | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 88.33% | 79.11% | 94.11% | 94.11% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 87.72% | 97.29% | 24.63% | 24.63% | — | ↑ 1.12x | 0 | — | — | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 87.67% | 84.02% | 98.89% | 98.89% | — | ↑ 1.35x | 0 | — | — | 10m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 87.63% | 97.24% | 99.98% | 99.98% | — | ↑ 1.07x | 0 | — | — | 14s ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 85.75% | 82.29% | 98.45% | 98.45% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 85.46% | 85.57% | — | — | — | ↑ 1.69x | 0 | — | — | 11m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 83.68% | 96.52% | 89.73% | 89.73% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 82.26% | 80.91% | 87.06% | 87.06% | — | ↑ 1.22x | 0 | — | — | 4m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 81.49% | 79.88% | 10.72% | 10.72% | — | ↑ 1.23x | 1 | 1d 2h | 30d ago | 4m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 81.40% | 57.86% | 78.42% | 78.42% | — | ↑ 1.12x | 1 | 1d 2h | 30d ago | 17s ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 81.26% | 79.20% | 48.46% | 48.46% | — | ↑ 1.20x | 1 | 1d 2h | 30d ago | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 81.04% | 40.01% | 97.75% | 97.75% | — | → 1.00x | 1 | 0s | 30d ago | 4m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 80.77% | 82.76% | 68.13% | 68.13% | — | ↑ 1.08x | 1 | 1d 2h | 30d ago | 6m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 78.85% | 83.99% | 75.72% | 75.72% | — | ↑ 1.07x | 1 | 1d 2h | 30d ago | 9m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 78.63% | 78.30% | 75.11% | 75.11% | — | ↑ 1.79x | 1 | 1d 2h | 30d ago | 11m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 78.48% | 76.52% | 86.29% | 86.29% | — | ↑ 1.51x | 0 | — | — | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 78.01% | 77.61% | 99.65% | 99.65% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 76.98% | 83.01% | 99.92% | 99.92% | — | ↑ 1.34x | 0 | — | — | 10m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 76.96% | 61.02% | 98.87% | 98.87% | — | ↑ 1.21x | 0 | — | — | 9m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 76.05% | 77.11% | 44.62% | 44.62% | — | ↑ 1.08x | 1 | 11h | 30d ago | 4m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 75.55% | 70.92% | 64.20% | 64.20% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 75.44% | 82.18% | 99.78% | 99.78% | — | ↑ 1.55x | 0 | — | — | 9m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 75.11% | 77.32% | 66.07% | 66.07% | — | ↑ 1.69x | 1 | 1d 2h | 30d ago | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 75.06% | 76.48% | 88.70% | 88.70% | — | ↑ 1.46x | 1 | 6h | 29d ago | 3m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 74.97% | 78.83% | 96.32% | 96.32% | — | → 1.04x | 0 | — | — | 9m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.61% | 79.64% | 63.15% | 63.15% | — | → 1.03x | 0 | — | — | 7m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 74.23% | 76.91% | 86.23% | 86.23% | — | ↑ 1.28x | 0 | — | — | 10m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 73.89% | 74.92% | 86.83% | 86.83% | — | ↑ 1.49x | 0 | — | — | 5m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 73.29% | 75.25% | 54.78% | 54.78% | — | → 1.03x | 1 | 1d 2h | 30d ago | 7m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 72.36% | 76.34% | 68.41% | 68.41% | — | → 1.00x | 1 | 1d 2h | 30d ago | 11m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 72.03% | 70.70% | 50.52% | 50.52% | — | ↓ 0.90x | 2 | 30m | 30d ago | 11m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 71.87% | 71.48% | 69.01% | 69.01% | — | → 1.03x | 0 | — | — | 4m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 71.79% | 74.77% | 96.79% | 96.79% | — | ↑ 1.67x | 0 | — | — | 5m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 71.48% | 75.81% | 99.77% | 99.77% | — | ↑ 1.46x | 0 | — | — | 10m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 71.15% | 75.32% | 98.92% | 98.92% | — | ↑ 1.17x | 0 | — | — | 11m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 70.59% | 71.83% | 91.98% | 91.98% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 70.37% | 81.63% | 99.09% | 99.09% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 69.73% | 73.41% | 93.16% | 93.16% | — | → 1.05x | 0 | — | — | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 66.41% | 74.79% | 93.77% | 93.77% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 66.37% | 71.91% | 99.85% | 99.85% | — | → 0.97x | 0 | — | — | 12m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 65.81% | 71.18% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 17s ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.80% | 59.96% | 52.45% | 52.45% | — | → 1.02x | 1 | 1d 2h | 30d ago | 11m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 51.93% | 59.18% | 75.15% | 75.15% | — | → 1.03x | 1 | 1d 2h | 30d ago | 6m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 51.84% | 68.74% | 99.06% | 99.06% | — | ↑ 1.17x | 0 | — | — | 11m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 43.76% | 86.16% | 17.31% | 17.31% | — | ↓ 0.78x | 0 | — | — | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 37.89% | 87.12% | 99.61% | 99.61% | — | → 0.96x | 0 | — | — | 11m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 37.50% | 60.13% | 99.88% | 99.88% | — | ↑ 1.32x | 0 | — | — | 12m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 29.56% | 20.82% | 25.44% | 25.44% | — | ↑ 1.16x | 0 | — | — | 2m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 27.83% | 85.27% | 64.61% | 64.61% | — | → 1.01x | 0 | — | — | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 27.63% | 85.24% | 99.93% | 99.93% | — | → 1.01x | 0 | — | — | 11m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 19.18% | 83.43% | 99.89% | 99.89% | — | ↑ 1.09x | 0 | — | — | 14s ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 14.60% | 16.00% | 22.80% | 22.80% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 12.18% | 66.32% | — | — | — | ↑ 1.12x | 0 | — | — | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 7.89% | 81.11% | 84.75% | 84.75% | — | → 1.02x | 0 | — | — | 2m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 7.80% | 54.25% | 98.59% | 98.59% | — | ↓ 0.66x | 0 | — | — | 57s ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 7.46% | 81.22% | 100.00% | 100.00% | — | ↑ 1.39x | 0 | — | — | 37s ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 2.99% | 1.79% | 44.99% | 44.99% | — | ↑ 1.48x | 0 | — | — | 4m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 2.88% | 80.18% | 89.40% | 89.40% | — | ↑ 1.65x | 0 | — | — | 5m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.44% | 0.42% | 34.65% | 34.65% | — | ↑ 1.72x | 0 | — | — | 5m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.11% | 0.88% | 0.10% | 0.10% | — | ↓ 0.54x | 1 | 1d 2h | 30d ago | 6m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 23.75% | 99.82% | 99.82% | — | — | 0 | — | — | 12m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.24% | 63.31% | 63.31% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.24% | 59.84% | 59.84% | — | — | 2 | 60m | 29d ago | 4m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.24% | 70.78% | 70.78% | — | — | 3 | 5h 60m | 29d ago | 4m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.24% | 52.44% | 52.44% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.24% | 5.20% | 5.20% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.24% | 10.24% | 10.24% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.20% | 88.73% | 88.73% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.25% | 99.82% | 99.82% | — | — | 1 | 2h 47m | 30d ago | 56s ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.24% | 47.31% | 47.31% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.25% | 73.96% | 73.96% | — | — | 1 | 1d 2h | 30d ago | 16s ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.24% | 74.22% | 74.22% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.24% | 3.13% | 3.13% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.27% | 79.86% | 79.86% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.24% | 40.15% | 40.15% | — | — | 0 | — | — | 7m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.24% | 33.64% | 33.64% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 24.85% | 99.94% | 99.94% | — | — | 0 | — | — | 36s ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.25% | 99.65% | 99.65% | — | — | 0 | — | — | 37s ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.22% | 90.14% | 90.14% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.24% | 85.33% | 85.33% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.24% | 83.66% | 83.66% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.24% | 21.09% | 21.09% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.24% | 84.65% | 84.65% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.24% | 75.27% | 75.27% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.24% | 57.88% | 57.88% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.24% | 70.96% | 70.96% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.24% | 19.82% | 19.82% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.14% | 83.11% | 83.11% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.24% | 13.15% | 13.15% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 13.40% | 44.49% | 44.49% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.24% | 87.39% | 87.39% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.24% | 30.30% | 30.30% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.20% | 99.75% | 99.75% | — | — | 1 | 0s | 30d ago | 11m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 44.23% | 68.70% | 68.70% | — | — | 1 | 1d 2h | 30d ago | 17s ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.24% | 78.14% | 78.14% | — | — | 0 | — | — | 6m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.24% | 98.15% | 98.15% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.24% | 78.64% | 78.64% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.24% | 3.12% | 3.12% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.24% | 32.40% | 32.40% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.20% | 76.21% | 76.21% | — | — | 1 | 1d 2h | 30d ago | 37s ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.25% | 72.40% | 72.40% | — | — | 1 | 1d 2h | 30d ago | 12m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.24% | 48.90% | 48.90% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.25% | 90.67% | 90.67% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 48.72% | 100.00% | 100.00% | — | — | 0 | — | — | 57s ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.24% | 31.88% | 31.88% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.20% | 99.73% | 99.73% | — | — | 1 | 1h 47m | 30d ago | 55s ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.24% | 84.44% | 84.44% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.25% | 32.34% | 32.34% | — | — | 1 | 1d 2h | 30d ago | 12m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.27% | 64.69% | 64.69% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.24% | 46.41% | 46.41% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.24% | 50.25% | 50.25% | — | — | 0 | — | — | 7m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.24% | 96.06% | 96.06% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.25% | 69.29% | 69.29% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.25% | 39.40% | 39.40% | — | — | 1 | 1d 2h | 30d ago | 17s ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.24% | 64.35% | 64.35% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.24% | 26.33% | 26.33% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.20% | 98.70% | 98.70% | — | — | 0 | — | — | 12m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 55.91% | 97.23% | 97.23% | — | — | 0 | — | — | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.24% | 50.43% | 50.43% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.20% | 75.41% | 75.41% | — | — | 6 | 1h 29m | 29d ago | 2m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.24% | 22.07% | 22.07% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.24% | 98.37% | 98.37% | — | — | 0 | — | — | 4m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.22% | 32.48% | 32.48% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 12m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.25% | 99.89% | 99.89% | — | — | 0 | — | — | 37s ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.25% | 48.30% | 48.30% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.24% | 46.73% | 46.73% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.24% | 21.32% | 21.32% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.25% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.24% | 4.63% | 4.63% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.24% | 60.67% | 60.67% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.25% | 99.92% | 99.92% | — | — | 0 | — | — | 37s ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.25% | 68.44% | 68.44% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.20% | 98.40% | 98.40% | — | — | 0 | — | — | 12m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.24% | 99.74% | 99.74% | — | — | 0 | — | — | 10m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.24% | 5.52% | 5.52% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.24% | 81.13% | 81.13% | — | — | 0 | — | — | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.24% | 73.53% | 73.53% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.24% | 74.18% | 74.18% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.24% | 99.84% | 99.84% | — | — | 0 | — | — | 10m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 17s ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.25% | 99.89% | 99.89% | — | — | 0 | — | — | 14s ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.24% | 83.98% | 83.98% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.24% | 20.14% | 20.14% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.25% | 99.95% | 99.95% | — | — | 0 | — | — | 14s ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.24% | 48.81% | 48.81% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.24% | 83.92% | 83.92% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.25% | 67.73% | 67.73% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.20% | 83.84% | 83.84% | — | — | 0 | — | — | 1m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.25% | 74.74% | 74.74% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.24% | 47.90% | 47.90% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.25% | 99.25% | 99.25% | — | — | 0 | — | — | 1m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 77.52% | 6.05% | 6.05% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.20% | 91.99% | 91.99% | — | — | 0 | — | — | 2m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.24% | 22.80% | 22.80% | — | — | 0 | — | — | 7m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.20% | 98.05% | 98.05% | — | — | 0 | — | — | 17s ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.24% | 55.75% | 55.75% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.02% | — | — | — | — | 0 | — | — | 11m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.20% | 98.92% | 98.92% | — | — | 0 | — | — | 12m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.24% | 43.20% | 43.20% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.20% | 16.44% | 16.44% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.24% | 39.16% | 39.16% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.24% | 74.31% | 74.31% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.25% | 20.55% | 20.55% | — | — | 1 | 1d 2h | 30d ago | 14s ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.24% | 54.39% | 54.39% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.25% | 75.74% | 75.74% | — | — | 1 | 1d 2h | 30d ago | 56s ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.24% | 35.55% | 35.55% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.24% | 65.91% | 65.91% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.20% | 99.94% | 99.94% | — | — | 0 | — | — | 57s ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.24% | 70.74% | 70.74% | — | — | 3 | 5h 56m | 29d ago | 4m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.24% | 34.00% | 34.00% | — | — | 0 | — | — | 8m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.24% | 62.39% | 62.39% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.24% | 45.59% | 45.59% | — | — | 0 | — | — | 10m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.24% | 76.99% | 76.99% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.24% | 38.64% | 38.64% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.24% | 22.32% | 22.32% | — | — | 0 | — | — | 9m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.24% | 90.53% | 90.53% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.25% | 91.04% | 91.04% | — | — | 1 | 1d 2h | 30d ago | 57s ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.25% | 42.69% | 42.69% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.24% | 39.95% | 39.95% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.20% | 99.29% | 99.29% | — | — | 0 | — | — | 12m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.24% | 24.01% | 24.01% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.24% | 81.34% | 81.34% | — | — | 0 | — | — | 11m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.24% | 73.32% | 73.32% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.24% | 2.87% | 2.87% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.24% | 49.45% | 49.45% | — | — | 0 | — | — | 4m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 59s ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.24% | 39.57% | 39.57% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.24% | 20.82% | 20.82% | — | — | 2 | 0s | 29d ago | 7m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.24% | 23.09% | 23.09% | — | — | 0 | — | — | 9m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.25% | 20.58% | 20.58% | — | — | 1 | 1d 2h | 30d ago | 59s ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.25% | 33.55% | 33.55% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.24% | 52.99% | 52.99% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.24% | 82.46% | 82.46% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 62.84% | 99.80% | 99.80% | — | — | 0 | — | — | 9m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.24% | 92.62% | 92.62% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.24% | 23.25% | 23.25% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.24% | 27.77% | 27.77% | — | — | 0 | — | — | 4m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.24% | 86.17% | 86.17% | — | — | 0 | — | — | 8m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.20% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 37s ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.24% | 49.10% | 49.10% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.24% | 86.30% | 86.30% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.24% | 65.07% | 65.07% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.24% | 99.12% | 99.12% | — | — | 1 | 11h 60m | 29d ago | 8m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.24% | 92.19% | 92.19% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.20% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.24% | 99.77% | 99.77% | — | — | 0 | — | — | 10m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.24% | 16.23% | 16.23% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.24% | 45.98% | 45.98% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.24% | 92.63% | 92.63% | — | — | 1 | 8h 60m | 29d ago | 4m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.25% | 98.92% | 98.92% | — | — | 0 | — | — | 57s ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.24% | 46.05% | 46.05% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.25% | 16.77% | 16.77% | — | — | 1 | 1d 2h | 30d ago | 57s ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.24% | 51.26% | 51.26% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.24% | 35.56% | 35.56% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.24% | 19.49% | 19.49% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.25% | 99.81% | 99.81% | — | — | 0 | — | — | 37s ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.24% | 72.39% | 72.39% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.24% | 83.68% | 83.68% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.24% | 26.68% | 26.68% | — | — | 0 | — | — | 5m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.25% | 46.80% | 46.80% | — | — | 1 | 1d 2h | 30d ago | 12m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.24% | 75.88% | 75.88% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.24% | 22.72% | 22.72% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.24% | 68.72% | 68.72% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 36s ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.24% | 18.10% | 18.10% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.24% | 54.28% | 54.28% | — | — | 1 | 1d 2h | 30d ago | 11m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.24% | 35.49% | 35.49% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.24% | 3.84% | 3.84% | — | — | 2 | 6h 60m | 29d ago | 8m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.24% | 63.55% | 63.55% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.24% | 23.11% | 23.11% | — | — | 0 | — | — | 9m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.20% | 99.60% | 99.60% | — | — | 0 | — | — | 56s ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.24% | 22.23% | 22.23% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.24% | 6.70% | 6.70% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.25% | 22.60% | 22.60% | — | — | 1 | 1d 2h | 30d ago | 37s ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 6m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.24% | 62.64% | 62.64% | — | — | 1 | 1d 2h | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.25% | 30.92% | 30.92% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.25% | 68.76% | 68.76% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.20% | 3.80% | 3.80% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.25% | 44.20% | 44.20% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.25% | 38.02% | 38.02% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.25% | 17.16% | 17.16% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.24% | 10.15% | 10.15% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.22% | 23.40% | 23.40% | — | — | 0 | — | — | 5m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.24% | 99.53% | 99.53% | — | — | 0 | — | — | 10m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.24% | 16.69% | 16.69% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.24% | 21.71% | 21.71% | — | — | 6 | 2h 19m | 29d ago | 8m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.24% | 14.75% | 14.75% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.25% | 25.49% | 25.49% | — | — | 1 | 1d 2h | 30d ago | 1m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.24% | 8.99% | 8.99% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 12.28% | 92.86% | 92.86% | — | — | 1 | 0s | 29d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.25% | 3.93% | 3.93% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.25% | 4.55% | 4.55% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.24% | 46.30% | 46.30% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.25% | 76.63% | 76.63% | — | — | 1 | 1d 2h | 30d ago | 12m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.20% | 32.96% | 32.96% | — | — | 0 | — | — | 8m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.25% | 36.28% | 36.28% | — | — | 1 | 1d 2h | 30d ago | 57s ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.24% | 98.48% | 98.48% | — | — | 0 | — | — | 4m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.24% | 63.49% | 63.49% | — | — | 1 | 1d 2h | 30d ago | 3m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.24% | 40.17% | 40.17% | — | — | 1 | 1d 2h | 30d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.24% | 77.23% | 77.23% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.25% | 43.61% | 43.61% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.24% | 23.13% | 23.13% | — | — | 0 | — | — | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.24% | 0.01% | 0.01% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.24% | 22.68% | 22.68% | — | — | 0 | — | — | 6m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.24% | 60.97% | 60.97% | — | — | 0 | — | — | 3m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 7m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.24% | 38.37% | 38.37% | — | — | 1 | 1d 2h | 30d ago | 9m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.25% | 1.35% | 1.35% | — | — | 1 | 1d 2h | 30d ago | 2m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.24% | 17.59% | 17.59% | — | — | 1 | 1d 2h | 30d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.24% | 91.72% | 91.72% | — | — | 2 | 0s | 29d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.25% | 99.77% | 99.77% | — | — | 1 | 0s | 30d ago | 14s ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.24% | 99.17% | 99.17% | — | — | 0 | — | — | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 8m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.25% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | 57s ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 1d 2h | 30d ago | — |

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
