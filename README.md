# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**701 providers** — 297 🟢 operational · 80 🟡 degraded · 322 🔴 down · 2 ⚫ unknown

_Updated 2026-08-04 05:52 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (297)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.76% | 94.26% | 94.26% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.76% | 99.45% | 99.45% | — | → 0.95x | 0 | — | — | 25s ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.07% | 99.33% | 99.33% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.85% | 97.00% | 97.00% | — | ↑ 1.18x | 0 | — | — | 5m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.73% | 68.50% | 68.50% | — | → 0.98x | 0 | — | — | 5m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.69% | 50.15% | 50.15% | — | ↑ 1.09x | 0 | — | — | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.55% | 56.98% | 56.98% | — | → 0.95x | 0 | — | — | 8m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.71% | 65.57% | 65.57% | — | → 1.00x | 0 | — | — | 6m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.85% | 99.70% | 99.70% | — | → 1.01x | 0 | — | — | 2m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.83% | 99.65% | 99.65% | — | → 0.95x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 99.76% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 44s ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.64% | 98.81% | 98.81% | — | ↑ 1.85x | 0 | — | — | 4m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 100.00% | 99.74% | 68.59% | 68.59% | — | ↓ 0.94x | 1 | 4d 1h | 30d ago | 11m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.24% | 99.64% | 99.64% | — | ↓ 0.88x | 1 | 0s | 30d ago | 8m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.78% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 6m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.78% | 98.38% | 98.38% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.68% | 99.85% | 99.85% | — | ↑ 1.59x | 1 | 0s | 28d ago | 25s ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.62% | 99.91% | 99.91% | — | ↑ 1.15x | 0 | — | — | 9m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.83% | 93.73% | 93.73% | — | → 1.02x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.83% | 99.97% | 99.97% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.85% | 99.97% | 99.97% | — | → 1.04x | 0 | — | — | 5m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.83% | 99.66% | 99.66% | — | → 1.02x | 0 | — | — | 12m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.73% | 99.94% | 99.94% | — | ↑ 1.08x | 0 | — | — | 48s ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.71% | 98.37% | 98.37% | — | → 0.98x | 0 | — | — | 3m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.80% | 99.86% | 99.86% | — | ↑ 1.07x | 0 | — | — | 48s ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.45% | 96.73% | 96.73% | — | ↓ 0.79x | 0 | — | — | 6m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.71% | 24.63% | 24.63% | — | ↑ 1.11x | 0 | — | — | 6m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.76% | 99.67% | 99.67% | — | ↑ 1.08x | 1 | 1d 4h | 27d ago | 6m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.89% | 99.72% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 11m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.89% | 98.05% | 93.42% | 93.42% | — | ↓ 0.94x | 0 | — | — | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.89% | 99.55% | 99.96% | 99.96% | — | → 1.01x | 0 | — | — | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.89% | 99.79% | 17.47% | 17.47% | — | ↓ 0.85x | 1 | 4d 1h | 30d ago | 10m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.89% | 99.74% | 44.95% | 44.95% | — | → 0.97x | 0 | — | — | 10m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.89% | 99.62% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 26d ago | 9m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.89% | 99.74% | 99.90% | 99.90% | — | ↑ 1.37x | 0 | — | — | 9m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.89% | 99.67% | 97.57% | 97.57% | — | → 1.01x | 0 | — | — | 9m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.89% | 99.71% | 89.73% | 89.73% | — | ↑ 1.15x | 0 | — | — | 9m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.89% | 99.76% | 99.58% | 99.58% | — | → 1.01x | 1 | 2h | 26d ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.89% | 99.02% | 98.94% | 98.94% | — | ↓ 0.45x | 0 | — | — | 8m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.89% | 99.76% | 99.49% | 99.49% | — | → 1.01x | 0 | — | — | 8m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.89% | 99.76% | 98.92% | 98.92% | — | → 1.03x | 0 | — | — | 8m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.89% | 99.83% | 99.02% | 99.02% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 99.89% | 81.59% | 76.64% | 76.64% | — | ↑ 1.06x | 1 | 4d 1h | 30d ago | 8m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.89% | 99.83% | 1.90% | 1.90% | — | → 0.99x | 1 | 4d 1h | 30d ago | 8m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.89% | 99.74% | 99.34% | 99.34% | — | → 1.03x | 0 | — | — | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.89% | 99.69% | 62.65% | 62.65% | — | → 1.02x | 0 | — | — | 6m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.89% | 99.71% | 99.90% | 99.90% | — | → 0.96x | 0 | — | — | 8m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.89% | 94.01% | 99.09% | 99.09% | — | ↑ 1.08x | 0 | — | — | 6m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.89% | 99.88% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 6m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.89% | 99.69% | 88.17% | 88.17% | — | → 1.05x | 1 | 4d 1h | 30d ago | 6m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.89% | 99.83% | 98.73% | 98.73% | — | ↑ 1.08x | 0 | — | — | 5m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.89% | 99.81% | 80.20% | 80.20% | — | ↑ 1.06x | 1 | 0s | 28d ago | 7m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.89% | 99.73% | 77.97% | 77.97% | — | ↓ 0.93x | 1 | 0s | 27d ago | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.89% | 99.78% | 83.46% | 83.46% | — | → 1.04x | 2 | 0s | 28d ago | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.89% | 99.57% | 82.26% | 82.26% | — | → 0.98x | 0 | — | — | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.89% | 99.73% | 96.88% | 96.88% | — | → 1.03x | 0 | — | — | 5m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.89% | 99.64% | 81.07% | 81.07% | — | → 0.99x | 0 | — | — | 5m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.89% | 99.25% | 28.39% | 28.39% | — | ↑ 1.81x | 1 | 4d 1h | 30d ago | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.89% | 99.78% | 58.17% | 58.17% | — | ↑ 1.72x | 1 | 4d 1h | 30d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.89% | 99.76% | 92.20% | 92.20% | — | ↑ 1.06x | 1 | 0s | 30d ago | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.89% | 99.71% | 98.74% | 98.74% | — | → 1.00x | 0 | — | — | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.89% | 99.78% | 98.47% | 98.47% | — | → 1.02x | 0 | — | — | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.89% | 99.32% | 95.85% | 95.85% | — | ↑ 1.27x | 0 | — | — | 3m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.89% | 99.83% | 31.33% | 31.33% | — | → 1.02x | 1 | 4d 1h | 30d ago | 2m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.89% | 99.76% | 43.99% | 43.99% | — | → 0.97x | 1 | 4d 1h | 30d ago | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.89% | 80.67% | 98.16% | 98.16% | — | → 0.96x | 0 | — | — | 3m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.89% | 99.76% | 98.43% | 98.43% | — | → 1.00x | 0 | — | — | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.89% | 99.68% | 99.93% | 99.93% | — | → 1.02x | 1 | 0s | 28d ago | 3m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.89% | 99.68% | 98.35% | 98.35% | — | ↑ 1.24x | 0 | — | — | 3m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.89% | 99.61% | 28.78% | 28.78% | — | ↑ 1.12x | 1 | 4d 1h | 30d ago | 3m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.89% | 99.68% | 97.87% | 97.87% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.89% | 91.23% | 0.69% | 0.69% | — | ↑ 1.19x | 1 | 4d 1h | 30d ago | 2m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.89% | 99.76% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 2m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.89% | 99.56% | 96.10% | 96.10% | — | → 0.97x | 0 | — | — | 2m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.89% | 92.16% | 99.95% | 99.95% | — | ↓ 0.83x | 0 | — | — | 1m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.89% | 99.73% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 1m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.89% | 99.78% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 1m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.89% | 99.78% | 0.00% | 0.00% | — | → 1.04x | 1 | 4d 1h | 30d ago | 2m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.89% | 99.54% | 98.56% | 98.56% | — | → 1.03x | 0 | — | — | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.89% | 99.90% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 1m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.89% | 99.73% | 99.97% | 99.97% | — | ↓ 0.94x | 0 | — | — | 48s ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.89% | 99.78% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 44s ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.89% | 99.71% | 99.97% | 99.97% | — | ↑ 1.08x | 0 | — | — | 43s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.89% | 99.44% | 99.85% | 99.85% | — | ↑ 1.09x | 0 | — | — | 4s ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.89% | 99.80% | 99.92% | 99.92% | — | ↑ 1.08x | 0 | — | — | 25s ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.89% | 99.41% | 99.97% | 99.97% | — | ↑ 1.11x | 0 | — | — | 48s ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.89% | 98.51% | 39.41% | 39.41% | — | ↑ 1.19x | 3 | 0s | 28d ago | 25s ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.89% | 99.41% | 99.94% | 99.94% | — | → 1.04x | 0 | — | — | 24s ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.89% | 99.76% | 60.72% | 60.72% | — | → 1.00x | 0 | — | — | 5s ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.89% | 99.78% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 12m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.89% | 99.66% | — | — | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.89% | 98.90% | 99.34% | 99.34% | — | ↑ 1.08x | 1 | 0s | 28d ago | 11m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.89% | 99.73% | 99.48% | 99.48% | — | → 1.01x | 0 | — | — | 11m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.89% | 99.85% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 11m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.79% | 99.83% | 99.98% | 99.98% | — | ↑ 1.47x | 0 | — | — | 11m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.72% | 36.33% | 36.33% | — | → 1.05x | 0 | — | — | 11m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.79% | 99.48% | 97.98% | 97.98% | — | → 1.03x | 0 | — | — | 10m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.79% | 99.62% | 99.49% | 99.49% | — | ↑ 1.10x | 0 | — | — | 10m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.79% | 99.67% | 75.23% | 75.23% | — | ↑ 1.12x | 1 | 4d 1h | 30d ago | 10m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.79% | 32.67% | 99.95% | 99.95% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.79% | 99.69% | 99.94% | 99.94% | — | ↓ 0.88x | 0 | — | — | 9m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.59% | 99.73% | 99.73% | — | → 0.99x | 0 | — | — | 9m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.79% | 99.71% | 99.92% | 99.92% | — | → 1.03x | 0 | — | — | 10m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.79% | 99.74% | 70.89% | 70.89% | — | → 1.04x | 1 | 4d 1h | 30d ago | 10m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.79% | 99.59% | 99.58% | 99.58% | — | ↓ 0.92x | 1 | 0s | 29d ago | 10m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.79% | 99.79% | 99.81% | 99.81% | — | → 1.00x | 0 | — | — | 10m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.79% | 99.69% | 98.00% | 98.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.79% | 99.71% | 99.90% | 99.90% | — | → 1.02x | 0 | — | — | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.79% | 99.71% | 22.33% | 22.33% | — | ↓ 0.92x | 1 | 4d 1h | 30d ago | 9m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.79% | 99.76% | 99.97% | 99.97% | — | → 0.97x | 0 | — | — | 8m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.78% | 98.21% | 98.78% | 98.78% | — | ↓ 0.75x | 1 | 0s | 28d ago | 8m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.78% | 99.62% | 99.87% | 99.87% | — | ↓ 0.94x | 1 | 0s | 28d ago | 8m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.78% | 99.62% | 99.85% | 99.85% | — | → 1.01x | 2 | 0s | 27d ago | 8m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.78% | 99.25% | 24.43% | 24.43% | — | ↓ 0.42x | 0 | — | — | 6m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.78% | 99.86% | 97.57% | 97.57% | — | ↑ 1.06x | 3 | 0s | 29d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.78% | 99.78% | 93.26% | 93.26% | — | → 1.02x | 0 | — | — | 6m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.78% | 99.78% | 99.37% | 99.37% | — | ↑ 1.13x | 0 | — | — | 6m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.78% | 99.57% | 76.97% | 76.97% | — | ↑ 1.05x | 1 | 4d 1h | 30d ago | 7m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.78% | 99.74% | 5.16% | 5.16% | — | → 0.97x | 1 | 4d 1h | 30d ago | 6m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.78% | 99.25% | 31.58% | 31.58% | — | → 1.02x | 1 | 4d 1h | 30d ago | 6m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.78% | 99.11% | 74.11% | 74.11% | — | → 1.02x | 1 | 1h | 27d ago | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.78% | 99.76% | 84.58% | 84.58% | — | → 0.97x | 0 | — | — | 5m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.78% | 99.54% | 22.94% | 22.94% | — | → 1.02x | 0 | — | — | 7m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.78% | 99.81% | 71.79% | 71.79% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.78% | 99.86% | 63.68% | 63.68% | — | → 1.00x | 0 | — | — | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.78% | 99.04% | 98.88% | 98.88% | — | ↓ 0.71x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.78% | 97.41% | 97.21% | 97.21% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.78% | 99.44% | 97.03% | 97.03% | — | → 1.01x | 0 | — | — | 4m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.78% | 99.78% | 99.86% | 99.86% | — | ↓ 0.79x | 0 | — | — | 4m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.78% | 99.59% | 90.95% | 90.95% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.78% | 99.71% | 91.09% | 91.09% | — | → 1.04x | 0 | — | — | 5m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.78% | 99.64% | 99.00% | 99.00% | — | ↑ 1.98x | 0 | — | — | 5m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.78% | 97.99% | 56.85% | 56.85% | — | → 1.02x | 0 | — | — | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.78% | 99.56% | 91.87% | 91.87% | — | → 0.98x | 0 | — | — | 4m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.78% | 99.76% | 98.73% | 98.73% | — | → 1.04x | 0 | — | — | 4m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.78% | 99.78% | 99.30% | 99.30% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.78% | 99.78% | 89.57% | 89.57% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.78% | 99.42% | 76.90% | 76.90% | — | → 1.01x | 0 | — | — | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.78% | 99.66% | 98.56% | 98.56% | — | → 1.01x | 0 | — | — | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.78% | 99.54% | 98.11% | 98.11% | — | → 0.97x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.78% | 99.49% | 98.85% | 98.85% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.78% | 99.73% | 29.98% | 29.98% | — | → 0.99x | 1 | 4d 1h | 30d ago | 3m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.78% | 99.68% | 99.87% | 99.87% | — | ↑ 1.58x | 0 | — | — | 3m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.78% | 99.64% | 96.80% | 96.80% | — | → 0.96x | 0 | — | — | 3m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.78% | 98.83% | 98.83% | 98.83% | — | → 1.03x | 0 | — | — | 3m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.78% | 99.54% | 99.71% | 99.71% | — | ↑ 1.15x | 1 | 0s | 28d ago | 3m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.78% | 98.61% | 32.93% | 32.93% | — | → 1.04x | 0 | — | — | 3m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.78% | 99.78% | 98.04% | 98.04% | — | → 1.03x | 0 | — | — | 2m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.78% | 99.76% | 98.78% | 98.78% | — | ↑ 1.27x | 1 | 0s | 26d ago | 3m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.78% | 99.49% | 99.67% | 99.67% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.78% | 99.68% | 99.51% | 99.51% | — | → 1.02x | 0 | — | — | 2m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.78% | 99.71% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 2m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.78% | 99.68% | 97.35% | 97.35% | — | → 0.96x | 0 | — | — | 2m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.78% | 99.73% | 99.94% | 99.94% | — | ↑ 1.06x | 0 | — | — | 1m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.78% | 99.61% | 89.89% | 89.89% | — | → 1.01x | 1 | 0s | 27d ago | 1m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.78% | 99.71% | 0.00% | 0.00% | — | → 1.03x | 1 | 4d 1h | 30d ago | 1m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.78% | 99.71% | 100.00% | 100.00% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.78% | 99.54% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 1m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.78% | 99.78% | 99.61% | 99.61% | — | ↑ 1.43x | 0 | — | — | 5s ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.78% | 99.76% | 98.72% | 98.72% | — | → 1.00x | 0 | — | — | 4s ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.78% | 99.49% | 99.09% | 99.09% | — | → 1.04x | 0 | — | — | 24s ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.78% | 99.66% | 99.85% | 99.85% | — | ↑ 1.05x | 1 | 3m | 28d ago | 48s ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.78% | 99.71% | 96.87% | 96.87% | — | → 1.03x | 0 | — | — | 24s ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.78% | 99.73% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 45s ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.78% | 99.63% | 16.67% | 16.67% | — | ↑ 1.09x | 1 | 4d 1h | 30d ago | 48s ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.78% | 99.76% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4s ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.78% | 99.71% | 99.98% | 99.98% | — | ↑ 1.06x | 0 | — | — | 44s ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.78% | 99.68% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 25s ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.78% | 99.66% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.78% | 99.51% | — | — | — | ↓ 0.86x | 0 | — | — | 11m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.68% | 97.65% | 93.57% | 93.57% | — | → 1.04x | 0 | — | — | 11m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.68% | 99.67% | 76.22% | 76.22% | — | → 1.00x | 1 | 4d 1h | 30d ago | 10m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.68% | 99.62% | 99.65% | 99.65% | — | ↑ 1.23x | 0 | — | — | 10m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.68% | 99.48% | 99.62% | 99.62% | — | → 1.05x | 0 | — | — | 10m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.68% | 99.67% | 98.93% | 98.93% | — | ↑ 1.14x | 1 | 0s | 29d ago | 10m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.68% | 99.55% | 95.68% | 95.68% | — | → 1.03x | 0 | — | — | 10m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.68% | 99.62% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.68% | 96.84% | 47.85% | 47.85% | — | → 1.02x | 1 | 4d 1h | 30d ago | 8m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.68% | 99.57% | 99.84% | 99.84% | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.68% | 99.64% | 76.89% | 76.89% | — | ↑ 1.08x | 1 | 4d 1h | 30d ago | 8m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.68% | 99.55% | 99.62% | 99.62% | — | ↑ 1.11x | 1 | 0s | 28d ago | 8m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.68% | 99.74% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 7m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.68% | 99.64% | 54.70% | 54.70% | — | → 1.04x | 0 | — | — | 6m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.68% | 99.71% | 25.33% | 25.33% | — | → 1.00x | 0 | — | — | 6m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.68% | 99.73% | 99.61% | 99.61% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.68% | 99.64% | 98.00% | 98.00% | — | ↑ 1.22x | 0 | — | — | 5m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.68% | 98.97% | 99.68% | 99.68% | — | → 1.03x | 0 | — | — | 7m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.68% | 99.59% | 99.35% | 99.35% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.68% | 99.52% | 69.43% | 69.43% | — | → 1.04x | 0 | — | — | 5m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.68% | 99.76% | 99.95% | 99.95% | — | → 1.02x | 0 | — | — | 7m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.68% | 99.61% | 97.90% | 97.90% | — | ↑ 1.37x | 0 | — | — | 4m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.68% | 99.71% | 96.69% | 96.69% | — | ↑ 1.14x | 0 | — | — | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.68% | 99.71% | 66.50% | 66.50% | — | ↑ 1.17x | 1 | 4d 1h | 30d ago | 4m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.68% | 99.71% | 99.18% | 99.18% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.68% | 99.52% | 98.66% | 98.66% | — | → 0.99x | 0 | — | — | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.68% | 99.78% | 99.89% | 99.89% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.68% | 99.76% | 99.31% | 99.31% | — | ↑ 1.48x | 0 | — | — | 5m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.68% | 99.69% | 98.90% | 98.90% | — | ↑ 1.14x | 0 | — | — | 5m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.68% | 99.61% | 99.78% | 99.78% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.68% | 99.54% | 55.08% | 55.08% | — | ↑ 1.26x | 1 | 0s | 27d ago | 4m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.68% | 99.03% | 83.10% | 83.10% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.67% | 93.42% | 92.56% | 92.56% | — | ↓ 0.70x | 3 | 1h 20m | 27d ago | 2m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.67% | 98.69% | 90.79% | 90.79% | — | ↑ 1.09x | 1 | 0s | 28d ago | 3m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.67% | 99.42% | 93.06% | 93.06% | — | ↓ 0.85x | 0 | — | — | 3m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.67% | 99.59% | 99.34% | 99.34% | — | ↓ 0.94x | 3 | 0s | 27d ago | 2m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.67% | 96.25% | 99.82% | 99.82% | — | → 1.02x | 0 | — | — | 3m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.67% | 99.42% | 99.86% | 99.86% | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.67% | 99.78% | 99.08% | 99.08% | — | ↑ 1.10x | 0 | — | — | 2m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.67% | 99.56% | 93.61% | 93.61% | — | → 0.98x | 1 | 1h | 28d ago | 2m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.67% | 92.59% | 87.87% | 87.87% | — | → 0.99x | 0 | — | — | 1m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.67% | 99.66% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 44s ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.67% | 99.63% | 99.98% | 99.98% | — | → 1.01x | 0 | — | — | 44s ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.67% | 99.46% | 100.00% | 100.00% | — | ↑ 1.33x | 0 | — | — | 5s ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.67% | 99.14% | 99.94% | 99.94% | — | ↑ 1.10x | 0 | — | — | 11m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.66% | 99.66% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.57% | 99.57% | 99.74% | 99.74% | — | → 1.02x | 1 | 4s | 29d ago | 10m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.57% | 99.55% | 49.74% | 49.74% | — | → 1.02x | 0 | — | — | 10m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.57% | 96.83% | 96.43% | 96.43% | — | → 1.00x | 1 | 11h | 26d ago | 10m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.57% | 99.42% | 97.94% | 97.94% | — | → 0.99x | 0 | — | — | 7m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.57% | 99.74% | 99.98% | 99.98% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.57% | 99.16% | 99.76% | 99.76% | — | → 1.04x | 0 | — | — | 8m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.57% | 99.52% | 22.30% | 22.30% | — | → 0.98x | 1 | 0s | 28d ago | 7m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.57% | 97.79% | 26.84% | 26.84% | — | ↓ 0.91x | 0 | — | — | 6m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.57% | 99.38% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 6m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.57% | 99.66% | 30.20% | 30.20% | — | ↑ 1.11x | 1 | 4d 1h | 30d ago | 6m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.57% | 99.28% | 63.14% | 63.14% | — | ↑ 1.22x | 1 | 0s | 28d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.57% | 99.59% | 96.32% | 96.32% | — | ↓ 0.85x | 0 | — | — | 6m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.57% | 99.52% | 99.87% | 99.87% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.57% | 99.50% | 97.28% | 97.28% | — | → 1.04x | 0 | — | — | 7m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.57% | 88.38% | 85.28% | 85.28% | — | ↓ 0.88x | 0 | — | — | 7m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.57% | 99.47% | 99.64% | 99.64% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.57% | 99.61% | 99.83% | 99.83% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.57% | 99.73% | 90.32% | 90.32% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.57% | 99.69% | 43.48% | 43.48% | — | → 0.97x | 1 | 4d 1h | 30d ago | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.57% | 99.61% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 4m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.57% | 99.54% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 4m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.57% | 99.78% | 98.81% | 98.81% | — | → 1.02x | 0 | — | — | 3m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.57% | 99.73% | 98.47% | 98.47% | — | ↑ 1.19x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.57% | 99.64% | 99.87% | 99.87% | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.57% | 99.47% | 99.74% | 99.74% | — | ↑ 1.16x | 0 | — | — | 3m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.57% | 99.61% | 86.85% | 86.85% | — | → 0.98x | 0 | — | — | 3m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.57% | 99.24% | 97.07% | 97.07% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.57% | 97.61% | 96.89% | 96.89% | — | ↑ 1.48x | 2 | 0s | 26d ago | 2m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.57% | 99.56% | 99.89% | 99.89% | — | → 1.03x | 0 | — | — | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.57% | 99.66% | 99.10% | 99.10% | — | ↑ 1.06x | 0 | — | — | 1m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.57% | 99.54% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 1m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.57% | 99.44% | 99.97% | 99.97% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.57% | 99.58% | 99.76% | 99.76% | — | → 1.04x | 0 | — | — | 1m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.56% | 99.73% | 24.52% | 24.52% | — | ↑ 1.17x | 1 | 4d 1h | 30d ago | 44s ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.56% | 99.46% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 24s ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.56% | 99.66% | 99.98% | 99.98% | — | ↑ 1.09x | 0 | — | — | 44s ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.56% | 99.56% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.56% | 99.00% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.56% | 99.71% | 99.67% | 99.67% | — | ↑ 1.19x | 1 | 0s | 29d ago | 11m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.56% | 99.37% | — | — | — | ↓ 0.94x | 0 | — | — | 11m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.47% | 99.60% | 98.78% | 98.78% | — | → 0.99x | 0 | — | — | 11m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.46% | 99.45% | 99.60% | 99.60% | — | → 1.03x | 1 | 2s | 28d ago | 10m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.46% | 99.62% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 28d ago | 8m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.46% | 99.64% | 77.28% | 77.28% | — | → 0.98x | 1 | 4d 1h | 30d ago | 6m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.46% | 81.29% | 0.11% | 0.11% | — | ↑ 1.36x | 1 | 4d 1h | 30d ago | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.46% | 98.87% | 2.34% | 2.34% | — | ↑ 1.19x | 1 | 4d 1h | 30d ago | 6m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.46% | 99.54% | 24.91% | 24.91% | — | ↑ 1.14x | 0 | — | — | 6m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.46% | 99.59% | 24.54% | 24.54% | — | ↑ 1.14x | 0 | — | — | 6m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.46% | 99.61% | 64.92% | 64.92% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.46% | 99.64% | 99.88% | 99.88% | — | → 1.03x | 0 | — | — | 5m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.46% | 99.49% | 69.87% | 69.87% | — | ↑ 1.05x | 2 | 0s | 29d ago | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.46% | 98.96% | 98.96% | 98.96% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.46% | 99.54% | 99.83% | 99.83% | — | → 0.99x | 0 | — | — | 4m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.46% | 99.49% | 97.80% | 97.80% | — | ↓ 0.91x | 0 | — | — | 3m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.46% | 99.37% | 14.21% | 14.21% | — | ↑ 1.49x | 1 | 4d 1h | 30d ago | 2m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.36% | 99.48% | 99.75% | 99.75% | — | ↑ 1.05x | 0 | — | — | 10m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.35% | 99.52% | 99.77% | 99.77% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.35% | 97.10% | 74.00% | 74.00% | — | → 0.98x | 0 | — | — | 5m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.35% | 99.25% | 98.16% | 98.16% | — | ↓ 0.93x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.35% | 99.44% | 100.00% | 100.00% | — | ↓ 0.66x | 0 | — | — | 3m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.35% | 99.66% | 98.69% | 98.69% | — | → 1.04x | 0 | — | — | 3m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.35% | 99.56% | 96.94% | 96.94% | — | → 1.01x | 1 | 0s | 28d ago | 3m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.35% | 92.34% | 96.14% | 96.14% | — | → 1.02x | 3 | 13h 21m | 28d ago | 44s ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.34% | 99.31% | — | — | — | → 1.04x | 0 | — | — | 11m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.25% | 99.48% | 99.74% | 99.74% | — | ↑ 1.14x | 0 | — | — | 10m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.25% | 99.33% | 38.65% | 38.65% | — | ↑ 1.07x | 1 | 4d 1h | 30d ago | 8m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.25% | 99.64% | 0.11% | 0.11% | — | → 0.99x | 1 | 4d 1h | 30d ago | 8m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.25% | 99.52% | 99.48% | 99.48% | — | → 1.05x | 0 | — | — | 7m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.25% | 99.50% | 66.42% | 66.42% | — | ↑ 1.06x | 0 | — | — | 6m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.24% | 98.13% | 98.93% | 98.93% | — | ↑ 1.08x | 0 | — | — | 7m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.24% | 99.20% | 97.74% | 97.74% | — | ↑ 1.07x | 1 | 16h 52m | 27d ago | 4m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.24% | 99.27% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 44s ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.14% | 99.57% | 99.76% | 99.76% | — | ↑ 1.10x | 0 | — | — | 10m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.14% | 54.55% | 5.08% | 5.08% | — | → 0.99x | 1 | 4d 1h | 30d ago | 8m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.14% | 98.43% | 38.36% | 38.36% | — | ↓ 0.93x | 0 | — | — | 6m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.14% | 99.38% | 24.53% | 24.53% | — | → 1.00x | 0 | — | — | 7m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.14% | 99.42% | 99.79% | 99.79% | — | → 0.96x | 2 | 0s | 27d ago | 7m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.14% | 92.45% | 77.59% | 77.59% | — | ↓ 0.55x | 0 | — | — | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.14% | 99.49% | 26.43% | 26.43% | — | → 0.96x | 0 | — | — | 4m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.04% | 69.90% | 0.00% | 0.00% | — | ↓ 0.42x | 1 | 4d 1h | 30d ago | 10m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.03% | 87.21% | 99.03% | 99.03% | — | ↑ 1.08x | 0 | — | — | 6m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.02% | 99.03% | 98.88% | 98.88% | — | → 1.04x | 1 | 0s | 27d ago | 2m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (80)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 98.93% | 98.93% | 99.56% | 99.56% | — | ↑ 1.11x | 0 | — | — | 10m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.82% | 99.50% | 99.28% | 99.28% | — | → 1.03x | 1 | 0s | 28d ago | 10m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.82% | 98.88% | 51.42% | 51.42% | — | ↑ 1.37x | 0 | — | — | 9m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 98.80% | 99.63% | — | — | — | ↑ 1.47x | 0 | — | — | 12m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 98.72% | 99.19% | 98.29% | 98.29% | — | → 1.00x | 0 | — | — | 10m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.71% | 97.87% | 89.02% | 89.02% | — | → 1.04x | 0 | — | — | 8m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 98.71% | 97.71% | 99.27% | 99.27% | — | ↑ 1.64x | 0 | — | — | 5m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.61% | 98.93% | 99.85% | 99.85% | — | → 1.04x | 0 | — | — | 10m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 98.59% | 98.59% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.38% | 98.39% | 57.00% | 57.00% | — | ↑ 1.27x | 0 | — | — | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.27% | 97.30% | 83.18% | 83.18% | — | ↑ 2.27x | 0 | — | — | 5m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 98.16% | 96.87% | 98.02% | 98.02% | — | ↑ 1.47x | 0 | — | — | 3m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.06% | 98.79% | 81.53% | 81.53% | — | ↑ 1.18x | 0 | — | — | 5m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.06% | 98.21% | 99.10% | 99.10% | — | ↓ 0.72x | 0 | — | — | 4m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.05% | 97.74% | 66.05% | 66.05% | — | → 1.04x | 1 | 4d 1h | 30d ago | 3m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.83% | 98.75% | 99.97% | 99.97% | — | ↑ 1.18x | 0 | — | — | 1m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 97.71% | 99.24% | 99.77% | 99.77% | — | ↓ 0.95x | 1 | 0s | 28d ago | 25s ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 97.60% | 99.21% | — | — | — | ↑ 1.46x | 0 | — | — | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 97.28% | 98.87% | 91.90% | 91.90% | — | → 1.00x | 0 | — | — | 4s ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.79% | 99.19% | 99.74% | 99.74% | — | → 1.02x | 2 | 0s | 27d ago | 10m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.74% | 96.92% | 97.85% | 97.85% | — | ↑ 1.07x | 0 | — | — | 1m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 96.65% | 98.35% | 99.82% | 99.82% | — | ↑ 1.33x | 0 | — | — | 5m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 96.52% | 98.56% | 99.85% | 99.85% | — | ↑ 1.38x | 1 | 6h 1m | 27d ago | 1m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 96.43% | 98.18% | 98.12% | 98.12% | — | ↑ 1.40x | 0 | — | — | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 96.41% | 89.04% | 99.61% | 99.61% | — | → 1.02x | 2 | 0s | 26d ago | 46s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 96.41% | 98.51% | 88.31% | 88.31% | — | ↓ 0.45x | 0 | — | — | 25s ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.98% | 97.51% | 98.75% | 98.75% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 95.86% | 98.65% | 99.88% | 99.88% | — | ↑ 1.20x | 0 | — | — | 12m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 95.55% | 98.35% | 97.10% | 97.10% | — | → 1.02x | 0 | — | — | 3m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 95.23% | 91.82% | 95.25% | 95.25% | — | ↑ 1.12x | 9 | 48m | 28d ago | 2m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 94.94% | 96.06% | 98.12% | 98.12% | — | ↑ 1.19x | 0 | — | — | 6m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 94.75% | 82.79% | 67.23% | 67.23% | — | ↑ 1.19x | 1 | 4d 1h | 30d ago | 10m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.58% | 95.48% | 97.00% | 97.00% | — | → 1.01x | 1 | 0s | 29d ago | 3m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 93.58% | 78.82% | 94.11% | 94.11% | — | ↓ 0.94x | 2 | 1s | 29d ago | 10m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 92.77% | 85.09% | 69.98% | 69.98% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 91.33% | 84.26% | 98.89% | 98.89% | — | ↑ 1.23x | 0 | — | — | 10m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 88.24% | 77.84% | 54.05% | 54.05% | — | ↑ 1.60x | 1 | 4d 1h | 30d ago | 10m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 88.12% | 77.71% | 83.85% | 83.85% | — | ↑ 1.63x | 0 | — | — | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 88.01% | 75.55% | 99.93% | 99.93% | — | ↑ 1.43x | 0 | — | — | 10m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 87.99% | 85.02% | — | — | — | → 0.99x | 0 | — | — | 11m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 87.90% | 91.18% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 87.15% | 93.85% | 96.18% | 96.18% | — | → 1.04x | 0 | — | — | 5m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 87.04% | 79.54% | 48.46% | 48.46% | — | ↑ 1.14x | 1 | 4d 1h | 30d ago | 4m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 85.96% | 81.19% | 87.06% | 87.06% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 85.13% | 83.40% | 68.13% | 68.13% | — | → 1.01x | 1 | 4d 1h | 30d ago | 6m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 85.10% | 80.10% | 10.72% | 10.72% | — | ↑ 1.14x | 1 | 4d 1h | 30d ago | 4m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 83.93% | 19.03% | 27.04% | 27.04% | — | → 0.98x | 1 | 4d 1h | 30d ago | 5m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 83.83% | 84.99% | 75.72% | 75.72% | — | ↑ 1.07x | 1 | 4d 1h | 30d ago | 9m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 83.64% | 78.86% | 75.11% | 75.11% | — | ↑ 1.58x | 1 | 4d 1h | 30d ago | 11m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 83.12% | 44.52% | 40.01% | 40.01% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 81.51% | 76.76% | 86.29% | 86.29% | — | ↑ 1.34x | 2 | 0s | 28d ago | 8m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 81.21% | 77.63% | 44.62% | 44.62% | — | ↑ 1.06x | 1 | 3d 10h | 30d ago | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 80.50% | 80.78% | 63.15% | 63.15% | — | → 1.02x | 19 | 0s | 28d ago | 8m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 80.41% | 70.91% | 64.20% | 64.20% | — | ↓ 0.95x | 1 | 0s | 30d ago | 10m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 80.17% | 60.14% | 98.87% | 98.87% | — | ↑ 1.15x | 0 | — | — | 9m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 79.74% | 79.70% | 96.32% | 96.32% | — | → 1.04x | 9 | 0s | 29d ago | 9m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 79.59% | 37.18% | 97.75% | 97.75% | — | → 1.01x | 1 | 0s | 27d ago | 4m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 79.33% | 77.14% | 88.70% | 88.70% | — | ↑ 1.39x | 1 | 6h | 26d ago | 4m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 79.14% | 77.41% | 68.41% | 68.41% | — | → 1.02x | 1 | 4d 1h | 30d ago | 11m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 78.93% | 71.24% | 50.52% | 50.52% | — | ↓ 0.92x | 41 | 12m | 27d ago | 11m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 78.80% | 77.62% | 86.23% | 86.23% | — | ↑ 1.14x | 0 | — | — | 10m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 78.07% | 86.71% | 78.01% | 78.01% | — | ↑ 1.07x | 1 | 0s | 28d ago | 11m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 77.52% | 83.56% | 99.92% | 99.92% | — | ↑ 1.05x | 0 | — | — | 10m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 77.05% | 75.58% | 86.83% | 86.83% | — | ↑ 1.25x | 0 | — | — | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 75.75% | 75.46% | 96.79% | 96.79% | — | ↑ 1.44x | 0 | — | — | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 75.19% | 75.26% | 6.48% | 6.48% | — | → 1.02x | 1 | 4d 1h | 30d ago | 43s ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 75.05% | 74.32% | 93.16% | 93.16% | — | → 1.00x | 0 | — | — | 5m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 74.21% | 75.21% | 98.53% | 98.53% | — | ↑ 1.08x | 2 | 0s | 27d ago | 43s ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 74.00% | 71.93% | 69.01% | 69.01% | — | → 1.02x | 0 | — | — | 5m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 72.70% | 76.08% | 93.77% | 93.77% | — | → 1.05x | 0 | — | — | 9m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 71.13% | 72.93% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 12m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 71.02% | 77.56% | 82.00% | 82.00% | — | ↑ 1.19x | 14 | 0s | 28d ago | 12m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 70.76% | 72.28% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 1m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 62.89% | 65.50% | 99.88% | 99.88% | — | ↑ 1.48x | 0 | — | — | 25s ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 56.55% | 78.70% | 76.88% | 76.88% | — | ↑ 1.17x | 1 | 4d 1h | 30d ago | 8m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 55.72% | 33.30% | 98.24% | 98.24% | — | ↑ 1.72x | 0 | — | — | 5m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 55.12% | 70.90% | 99.06% | 99.06% | — | ↑ 1.14x | 1 | 0s | 28d ago | 12m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 54.96% | 60.19% | 75.15% | 75.15% | — | → 1.01x | 1 | 4d 1h | 30d ago | 6m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 10.24% | 2.55% | 99.26% | 99.26% | — | ↓ 0.62x | 0 | — | — | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 7.92% | 17.85% | 25.44% | 25.44% | — | ↑ 1.34x | 2 | 1d 9h | 28d ago | 3m ago |

</details>

<details open>
<summary><strong>🔴 Down (322)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 100.00% | 99.53% | — | — | — | ↓ 0.94x | 0 | — | — | 11m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 100.00% | — | — | — | ↓ 0.94x | 0 | — | — | 11m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.67% | 78.61% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.67% | 99.61% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.46% | 99.46% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.46% | 99.44% | 98.95% | 98.95% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 99.24% | 98.75% | — | — | — | → 1.03x | 0 | — | — | 11m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 98.87% | 98.87% | — | — | — | → 1.00x | 0 | — | — | 11m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 97.72% | 84.99% | 97.48% | 97.48% | — | ↑ 1.06x | 1 | 0s | 27d ago | 3m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 88.36% | 82.35% | 98.45% | 98.45% | — | → 1.04x | 2 | 0s | 28d ago | 6m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 87.12% | 86.15% | — | — | — | ↑ 1.50x | 0 | — | — | 11m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 85.54% | 93.91% | 17.31% | 17.31% | — | ↓ 0.78x | 0 | — | — | 7m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 83.80% | 56.23% | 78.42% | 78.42% | — | ↑ 1.10x | 1 | 4d 1h | 30d ago | 49s ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 82.20% | 77.86% | 99.65% | 99.65% | — | → 1.01x | 0 | — | — | 7m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 81.71% | 78.17% | 66.07% | 66.07% | — | ↑ 1.37x | 1 | 4d 1h | 30d ago | 10m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 79.98% | 83.35% | 99.78% | 99.78% | — | ↑ 1.54x | 0 | — | — | 9m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 79.76% | 94.91% | 99.61% | 99.61% | — | → 0.97x | 0 | — | — | 10m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.07% | 76.39% | 98.92% | 98.92% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 77.54% | 72.62% | 91.98% | 91.98% | — | ↑ 1.11x | 1 | 0s | 28d ago | 10m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 77.09% | 76.79% | 99.77% | 99.77% | — | ↑ 1.43x | 0 | — | — | 10m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 76.97% | 73.68% | 85.02% | 85.02% | — | ↑ 1.20x | 1 | 0s | 29d ago | 4m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 75.75% | 75.97% | 54.78% | 54.78% | — | → 1.04x | 1 | 4d 1h | 30d ago | 7m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 74.95% | 82.54% | 99.09% | 99.09% | — | → 1.02x | 0 | — | — | 10m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 72.22% | 31.85% | 46.51% | 46.51% | — | ↓ 0.91x | 0 | — | — | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 69.90% | 92.99% | 99.93% | 99.93% | — | → 1.02x | 1 | 0s | 27d ago | 11m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 69.84% | 92.99% | 64.61% | 64.61% | — | → 1.01x | 1 | 7h 4m | 30d ago | 3m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 66.20% | 60.77% | 52.45% | 52.45% | — | → 1.02x | 1 | 4d 1h | 30d ago | 10m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 62.24% | 58.40% | 98.37% | 98.37% | — | ↑ 2.44x | 1 | 4m | 30d ago | 5s ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 61.59% | 91.02% | 99.89% | 99.89% | — | ↑ 1.06x | 0 | — | — | 25s ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 50.33% | 88.47% | 84.75% | 84.75% | — | ↑ 1.07x | 0 | — | — | 3m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 50.11% | 88.60% | 100.00% | 100.00% | — | ↑ 1.29x | 0 | — | — | 1m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 45.52% | 87.40% | 89.40% | 89.40% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 32.10% | 84.56% | 6.05% | 6.05% | — | ↑ 1.36x | 1 | 4d 1h | 30d ago | 2m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 22.11% | 5.65% | 87.63% | 87.63% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 8.71% | 71.65% | — | — | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 3.69% | 4.48% | 7.76% | 7.76% | — | ↑ 1.07x | 1 | 4d 1h | 30d ago | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.76% | 1.45% | 44.99% | 44.99% | — | ↑ 2.93x | 0 | — | — | 5m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.11% | 0.36% | 34.65% | 34.65% | — | ↑ 1.48x | 0 | — | — | 5m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 25.91% | 99.82% | 99.82% | — | — | 1 | 4m | 30d ago | 5s ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.26% | 63.31% | 63.31% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.27% | 59.84% | 59.84% | — | — | 2 | 60m | 27d ago | 4m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.27% | 70.78% | 70.78% | — | — | 3 | 1d 6h | 26d ago | 4m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.27% | 52.44% | 52.44% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.26% | 5.20% | 5.20% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.26% | 10.24% | 10.24% | — | — | 1 | 4d 1h | 30d ago | 11m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.22% | 88.73% | 88.73% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.27% | 99.82% | 99.82% | — | — | 1 | 7h | 27d ago | 1m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.27% | 47.31% | 47.31% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.27% | 73.96% | 73.96% | — | — | 1 | 4d 1h | 30d ago | 47s ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.26% | 74.22% | 74.22% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.26% | 3.13% | 3.13% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.29% | 79.86% | 79.86% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.26% | 40.15% | 40.15% | — | — | 0 | — | — | 7m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.26% | 33.64% | 33.64% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 27.11% | 99.94% | 99.94% | — | — | 0 | — | — | 1m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.27% | 99.65% | 99.65% | — | — | 2 | 30m | 28d ago | 1m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.24% | 90.14% | 90.14% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.27% | 85.33% | 85.33% | — | — | 48 | 1h 2m | 28d ago | 3m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.26% | 83.66% | 83.66% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.27% | 21.09% | 21.09% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.26% | 84.65% | 84.65% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.26% | 75.27% | 75.27% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.26% | 57.88% | 57.88% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.26% | 70.96% | 70.96% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.26% | 19.82% | 19.82% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.24% | 83.11% | 83.11% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.27% | 13.15% | 13.15% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 14.60% | 44.49% | 44.49% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.26% | 87.39% | 87.39% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.27% | 30.30% | 30.30% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.22% | 99.75% | 99.75% | — | — | 1 | 0s | 27d ago | 11m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 48.25% | 68.70% | 68.70% | — | — | 1 | 4d 1h | 30d ago | 48s ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.26% | 78.14% | 78.14% | — | — | 48 | 0s | 27d ago | 6m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.26% | 98.15% | 98.15% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.27% | 78.64% | 78.64% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.27% | 3.12% | 3.12% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.26% | 32.40% | 32.40% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.22% | 76.21% | 76.21% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.27% | 72.40% | 72.40% | — | — | 1 | 4d 1h | 30d ago | 25s ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.26% | 48.90% | 48.90% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.27% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 30d ago | 11m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 53.15% | 100.00% | 100.00% | — | — | 0 | — | — | 1m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.27% | 31.88% | 31.88% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.22% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 27d ago | 1m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.22% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.26% | 84.44% | 84.44% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.27% | 32.34% | 32.34% | — | — | 1 | 4d 1h | 30d ago | 25s ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.29% | 64.69% | 64.69% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.27% | 46.41% | 46.41% | — | — | 2 | 1d 24h | 27d ago | 5m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.26% | 50.25% | 50.25% | — | — | 0 | — | — | 7m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.26% | 96.06% | 96.06% | — | — | 1 | 3d 6h | 29d ago | 7m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.27% | 69.29% | 69.29% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.27% | 39.40% | 39.40% | — | — | 1 | 4d 1h | 30d ago | 49s ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.27% | 64.35% | 64.35% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.27% | 26.33% | 26.33% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 22.18% | 93.54% | 93.54% | — | — | 1 | 0s | 29d ago | 5s ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.22% | 98.70% | 98.70% | — | — | 0 | — | — | 25s ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 60.99% | 97.23% | 97.23% | — | — | 3 | 0s | 29d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.26% | 50.43% | 50.43% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.22% | 75.41% | 75.41% | — | — | 38 | 54m | 26d ago | 2m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.27% | 22.07% | 22.07% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.27% | 98.37% | 98.37% | — | — | 0 | — | — | 4m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.24% | 32.48% | 32.48% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 12m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.27% | 99.89% | 99.89% | — | — | 0 | — | — | 1m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.27% | 48.30% | 48.30% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 0.00% | 52.38% | 91.43% | 91.43% | — | — | 0 | — | — | 11m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.26% | 46.73% | 46.73% | — | — | 1 | 4d 1h | 30d ago | 11m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.27% | 21.32% | 21.32% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.27% | 100.00% | 100.00% | — | — | 0 | — | — | 25s ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.27% | 4.63% | 4.63% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.26% | 60.67% | 60.67% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.27% | 99.92% | 99.92% | — | — | 0 | — | — | 1m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.27% | 68.44% | 68.44% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.22% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.22% | 98.40% | 98.40% | — | — | 0 | — | — | 24s ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.26% | 99.74% | 99.74% | — | — | 0 | — | — | 10m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.27% | 5.52% | 5.52% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.27% | 81.13% | 81.13% | — | — | 0 | — | — | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.26% | 73.53% | 73.53% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.26% | 74.18% | 74.18% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.26% | 99.84% | 99.84% | — | — | 0 | — | — | 10m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 48s ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.27% | 99.89% | 99.89% | — | — | 1 | 3m | 29d ago | 45s ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.27% | 83.98% | 83.98% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.27% | 20.14% | 20.14% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.27% | 99.95% | 99.95% | — | — | 0 | — | — | 45s ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.26% | 48.81% | 48.81% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.26% | 83.92% | 83.92% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.27% | 67.73% | 67.73% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.22% | 83.84% | 83.84% | — | — | 0 | — | — | 2m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.27% | 74.74% | 74.74% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.27% | 47.90% | 47.90% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.27% | 99.25% | 99.25% | — | — | 0 | — | — | 2m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.22% | 91.99% | 91.99% | — | — | 0 | — | — | 2m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.26% | 22.80% | 22.80% | — | — | 0 | — | — | 7m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.22% | 98.05% | 98.05% | — | — | 1 | 0s | 27d ago | 48s ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.27% | 55.75% | 55.75% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.02% | — | — | — | — | 0 | — | — | 11m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.22% | 98.92% | 98.92% | — | — | 1 | 0s | 28d ago | 21s ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.26% | 43.20% | 43.20% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 11m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.22% | 16.44% | 16.44% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.26% | 39.16% | 39.16% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.26% | 74.31% | 74.31% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.27% | 20.55% | 20.55% | — | — | 1 | 4d 1h | 30d ago | 45s ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 14.27% | 22.80% | 22.80% | — | — | 0 | — | — | 6m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.26% | 54.39% | 54.39% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.27% | 75.74% | 75.74% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.26% | 35.55% | 35.55% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.27% | 65.91% | 65.91% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.22% | 99.94% | 99.94% | — | — | 0 | — | — | 1m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.27% | 70.74% | 70.74% | — | — | 3 | 1d 6h | 26d ago | 4m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.26% | 34.00% | 34.00% | — | — | 0 | — | — | 8m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.27% | 62.39% | 62.39% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.26% | 45.59% | 45.59% | — | — | 0 | — | — | 10m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.26% | 76.99% | 76.99% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.26% | 38.64% | 38.64% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.26% | 22.32% | 22.32% | — | — | 0 | — | — | 9m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.26% | 90.53% | 90.53% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.27% | 91.04% | 91.04% | — | — | 1 | 3d 23h | 30d ago | 1m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.27% | 42.69% | 42.69% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.27% | 39.95% | 39.95% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.94% | 0.10% | 0.10% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.22% | 99.29% | 99.29% | — | — | 0 | — | — | 5s ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.27% | 24.01% | 24.01% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.26% | 81.34% | 81.34% | — | — | 1 | 6s | 30d ago | 10m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.26% | 73.32% | 73.32% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.27% | 2.87% | 2.87% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.27% | 49.45% | 49.45% | — | — | 0 | — | — | 4m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.26% | 39.57% | 39.57% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.26% | 20.82% | 20.82% | — | — | 16 | 8m | 26d ago | 7m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.26% | 23.09% | 23.09% | — | — | 0 | — | — | 9m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.27% | 20.58% | 20.58% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.22% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.27% | 33.55% | 33.55% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.27% | 52.99% | 52.99% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.26% | 82.46% | 82.46% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 68.46% | 99.80% | 99.80% | — | — | 0 | — | — | 9m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.26% | 92.62% | 92.62% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.26% | 23.25% | 23.25% | — | — | 1 | 4d 1h | 30d ago | 11m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.27% | 27.77% | 27.77% | — | — | 11 | 0s | 29d ago | 5m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.26% | 86.17% | 86.17% | — | — | 0 | — | — | 8m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.22% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.26% | 49.10% | 49.10% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.26% | 86.30% | 86.30% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.27% | 65.07% | 65.07% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.26% | 99.12% | 99.12% | — | — | 1 | 11h 60m | 26d ago | 8m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.27% | 92.19% | 92.19% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.22% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.26% | 99.77% | 99.77% | — | — | 0 | — | — | 10m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.26% | 16.23% | 16.23% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.26% | 45.98% | 45.98% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.27% | 92.63% | 92.63% | — | — | 1 | 8h 60m | 26d ago | 4m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.27% | 98.92% | 98.92% | — | — | 0 | — | — | 1m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.27% | 46.05% | 46.05% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.27% | 16.77% | 16.77% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.00% | 57.47% | 98.59% | 98.59% | — | — | 9 | 7m | 28d ago | 1m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.26% | 51.26% | 51.26% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.27% | 35.56% | 35.56% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.27% | 19.49% | 19.49% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.27% | 99.81% | 99.81% | — | — | 0 | — | — | 1m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.27% | 72.39% | 72.39% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.26% | 83.68% | 83.68% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.27% | 26.68% | 26.68% | — | — | 0 | — | — | 6m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.27% | 46.80% | 46.80% | — | — | 1 | 4d 1h | 30d ago | 25s ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.26% | 75.88% | 75.88% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.26% | 22.72% | 22.72% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.26% | 68.72% | 68.72% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.26% | 18.10% | 18.10% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.26% | 54.28% | 54.28% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.27% | 35.49% | 35.49% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.26% | 3.84% | 3.84% | — | — | 2 | 1d 19h | 27d ago | 8m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.26% | 63.55% | 63.55% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.26% | 23.11% | 23.11% | — | — | 0 | — | — | 8m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.22% | 99.60% | 99.60% | — | — | 0 | — | — | 1m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 12m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.27% | 22.23% | 22.23% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.27% | 6.70% | 6.70% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.27% | 22.60% | 22.60% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 6m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.26% | 62.64% | 62.64% | — | — | 1 | 4d 1h | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.27% | 30.92% | 30.92% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.27% | 68.76% | 68.76% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.22% | 3.80% | 3.80% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.27% | 44.20% | 44.20% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.27% | 38.02% | 38.02% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.27% | 17.16% | 17.16% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.27% | 10.15% | 10.15% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.24% | 23.40% | 23.40% | — | — | 3 | 0s | 29d ago | 6m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.26% | 99.53% | 99.53% | — | — | 0 | — | — | 10m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.26% | 16.69% | 16.69% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.26% | 21.71% | 21.71% | — | — | 25 | 2h 7m | 26d ago | 8m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.27% | 14.75% | 14.75% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.27% | 25.49% | 25.49% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.27% | 8.99% | 8.99% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 13.39% | 92.86% | 92.86% | — | — | 1 | 0s | 26d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.27% | 3.93% | 3.93% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.27% | 4.55% | 4.55% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.26% | 46.30% | 46.30% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.27% | 76.63% | 76.63% | — | — | 1 | 4d 1h | 30d ago | 5s ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.22% | 32.96% | 32.96% | — | — | 0 | — | — | 8m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.27% | 36.28% | 36.28% | — | — | 1 | 4d 1h | 30d ago | 1m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.27% | 98.48% | 98.48% | — | — | 0 | — | — | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.27% | 63.49% | 63.49% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.27% | 40.17% | 40.17% | — | — | 1 | 4d 1h | 30d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.26% | 77.23% | 77.23% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.27% | 43.61% | 43.61% | — | — | 1 | 4d 1h | 30d ago | 3m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.26% | 23.13% | 23.13% | — | — | 0 | — | — | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.26% | 0.01% | 0.01% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.26% | 22.68% | 22.68% | — | — | 0 | — | — | 6m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.27% | 60.97% | 60.97% | — | — | 9 | 0s | 28d ago | 3m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 7m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.26% | 38.37% | 38.37% | — | — | 1 | 4d 1h | 30d ago | 9m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.27% | 1.35% | 1.35% | — | — | 1 | 4d 1h | 30d ago | 2m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.27% | 17.59% | 17.59% | — | — | 1 | 4d 1h | 30d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.27% | 91.72% | 91.72% | — | — | 17 | 0s | 26d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.27% | 99.77% | 99.77% | — | — | 1 | 0s | 27d ago | 45s ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.26% | 99.17% | 99.17% | — | — | 0 | — | — | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 8m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.27% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | 1m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 4d 1h | 30d ago | — |

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
