# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**699 providers** — 293 🟢 operational · 83 🟡 degraded · 321 🔴 down · 2 ⚫ unknown

_Updated 2026-07-30 05:45 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (293)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [1984](https://lmspeed.net/provider/1984-hosting) | 100.00% | 99.69% | 76.22% | 76.22% | — | → 1.00x | 1 | 9d 1h | 30d ago | 5m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.80% | 99.61% | 99.61% | — | ↑ 1.18x | 0 | — | — | 7m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.83% | 98.73% | 98.73% | — | ↑ 1.08x | 0 | — | — | 50s ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 100.00% | 99.71% | — | — | — | ↑ 1.26x | 0 | — | — | 6m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 100.00% | 78.15% | 76.64% | 76.64% | — | → 1.02x | 1 | 9d 1h | 30d ago | 3m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.74% | 98.92% | 98.92% | — | → 1.00x | 0 | — | — | 4m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 80.20% | 80.20% | — | → 1.03x | 1 | 0s | 23d ago | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.83% | 99.02% | 99.02% | — | → 1.00x | 0 | — | — | 4m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.43% | 97.98% | 97.98% | — | → 0.99x | 0 | — | — | 5m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.48% | 99.64% | 99.64% | — | ↑ 1.15x | 0 | — | — | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.71% | 99.10% | 99.10% | — | → 1.02x | 0 | — | — | 8m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.50% | 99.88% | 99.88% | — | ↑ 1.19x | 0 | — | — | 7m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 98.90% | 99.33% | 99.33% | — | → 0.98x | 0 | — | — | 8m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.68% | 68.50% | 68.50% | — | → 0.96x | 0 | — | — | 49s ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.45% | 98.85% | 98.85% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.80% | 99.86% | 99.86% | — | ↓ 0.78x | 0 | — | — | 11m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.74% | 43.99% | 43.99% | — | → 1.02x | 1 | 9d 1h | 30d ago | 10m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 99.65% | 99.85% | 99.85% | — | → 0.99x | 1 | 3m | 23d ago | 8m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.71% | 96.87% | 96.87% | — | → 1.00x | 0 | — | — | 7m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 99.65% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 7m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.71% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 2m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.65% | 99.83% | 99.83% | — | ↑ 1.10x | 0 | — | — | 11m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.66% | 98.00% | 98.00% | — | → 1.03x | 0 | — | — | 30s ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.83% | 99.70% | 99.70% | — | → 1.01x | 0 | — | — | 9m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.80% | 99.65% | 99.65% | — | ↓ 0.91x | 0 | — | — | 5m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 99.77% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 8m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 99.71% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.74% | 99.94% | 99.94% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 98.90% | 98.96% | 98.96% | — | → 1.04x | 0 | — | — | 11m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.36% | 99.85% | 99.85% | — | → 1.05x | 0 | — | — | 7m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.80% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.57% | 98.81% | 98.81% | — | ↑ 1.16x | 0 | — | — | 11m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.74% | 98.43% | 98.43% | — | → 0.97x | 0 | — | — | 10m ago |
| [Groq](https://lmspeed.net/provider/groq) | 100.00% | 99.54% | 76.97% | 76.97% | — | → 0.96x | 1 | 9d 1h | 30d ago | 2m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 99.77% | 100.00% | 100.00% | — | ↓ 0.94x | 0 | — | — | 7m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.71% | 91.09% | 91.09% | — | → 1.01x | 0 | — | — | 10s ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.69% | 89.73% | 89.73% | — | ↑ 1.17x | 0 | — | — | 5m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 100.00% | 99.77% | 0.00% | 0.00% | — | → 0.99x | 1 | 8d 13h | 29d ago | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.72% | 99.90% | 99.90% | — | → 0.96x | 0 | — | — | 5m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 100.00% | 99.62% | — | — | — | → 1.02x | 0 | — | — | 7m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.33% | 99.97% | 99.97% | — | ↑ 1.14x | 0 | — | — | 8m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.54% | 91.87% | 91.87% | — | → 0.97x | 0 | — | — | 11m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.89% | 60.60% | 60.60% | — | → 0.99x | 0 | — | — | 1m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.74% | 98.38% | 98.38% | — | → 1.03x | 0 | — | — | 4s ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.80% | 99.31% | 99.31% | — | ↑ 1.67x | 0 | — | — | 6s ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.63% | 96.32% | 96.32% | — | → 0.97x | 0 | — | — | 2m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.77% | 98.73% | 98.73% | — | → 1.01x | 0 | — | — | 11m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.55% | 95.68% | 95.68% | — | → 1.02x | 1 | 1d | 30d ago | 6m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.74% | 25.33% | 25.33% | — | → 0.99x | 0 | — | — | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.83% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 10s ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 100.00% | 98.25% | 39.41% | 39.41% | — | → 0.97x | 8 | 26m | 23d ago | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.80% | 99.30% | 99.30% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.74% | 99.49% | 99.49% | — | → 1.00x | 0 | — | — | 4m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.80% | 99.66% | 99.66% | — | → 0.99x | 0 | — | — | 7m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.68% | 99.94% | 99.94% | — | → 1.01x | 0 | — | — | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.37% | 76.90% | 76.90% | — | → 0.98x | 0 | — | — | 11m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.57% | 99.84% | 99.84% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.68% | 97.35% | 97.35% | — | ↓ 0.93x | 1 | 0s | 27d ago | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.86% | 99.86% | — | → 1.05x | 0 | — | — | 8m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 100.00% | 99.66% | 76.89% | 76.89% | — | ↑ 1.09x | 1 | 9d 1h | 30d ago | 4m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 96.58% | 17.31% | 17.31% | — | ↓ 0.74x | 0 | — | — | 3m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.34% | 96.73% | 96.73% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.66% | 24.63% | 24.63% | — | ↑ 1.27x | 0 | — | — | 2m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.72% | 99.90% | 99.90% | — | → 1.03x | 0 | — | — | 5m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.89% | 99.69% | 68.59% | 68.59% | — | → 1.03x | 1 | 9d 1h | 30d ago | 6m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.83% | 99.98% | 99.98% | — | → 0.99x | 1 | 4m | 27d ago | 6m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.89% | 99.66% | 75.23% | 75.23% | — | ↑ 1.08x | 1 | 9d 1h | 30d ago | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.89% | 99.72% | 99.28% | 99.28% | — | → 1.04x | 1 | 0s | 23d ago | 6m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.89% | 99.89% | 99.74% | 99.74% | — | ↓ 0.93x | 2 | 0s | 22d ago | 6m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.89% | 99.77% | 17.47% | 17.47% | — | ↓ 0.81x | 1 | 9d 1h | 30d ago | 6m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.89% | 64.47% | 0.00% | 0.00% | — | ↓ 0.32x | 1 | 9d 1h | 30d ago | 6m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.89% | 99.72% | 44.95% | 44.95% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.89% | 99.80% | 99.81% | 99.81% | — | → 0.98x | 0 | — | — | 5m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.89% | 99.09% | 99.64% | 99.64% | — | ↓ 0.86x | 4 | 0s | 25d ago | 4m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.89% | 99.77% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 4m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.89% | 98.86% | 98.94% | 98.94% | — | ↓ 0.31x | 1 | 0s | 28d ago | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.89% | 96.33% | 47.85% | 47.85% | — | → 1.01x | 1 | 9d 1h | 30d ago | 4m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.89% | 99.60% | 99.87% | 99.87% | — | ↑ 1.19x | 1 | 0s | 23d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.89% | 99.52% | 99.62% | 99.62% | — | ↑ 1.22x | 1 | 0s | 23d ago | 4m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.89% | 99.80% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 3m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.89% | 99.86% | 97.57% | 97.57% | — | → 1.02x | 5 | 0s | 24d ago | 2m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.89% | 99.83% | 97.00% | 97.00% | — | → 1.03x | 0 | — | — | 4s ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.89% | 99.83% | 1.90% | 1.90% | — | → 1.03x | 1 | 9d 1h | 30d ago | 3m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.89% | 99.74% | 84.58% | 84.58% | — | → 1.02x | 0 | — | — | 29s ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.89% | 99.80% | 93.26% | 93.26% | — | → 0.98x | 0 | — | — | 1m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.89% | 99.63% | 50.15% | 50.15% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.89% | 99.66% | 54.70% | 54.70% | — | → 1.00x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.89% | 99.77% | 83.46% | 83.46% | — | → 1.01x | 2 | 0s | 23d ago | 29s ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.89% | 99.49% | 22.94% | 22.94% | — | ↓ 0.95x | 0 | — | — | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.89% | 99.57% | 66.42% | 66.42% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.89% | 99.63% | 24.54% | 24.54% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.89% | 99.83% | 71.79% | 71.79% | — | ↑ 1.13x | 0 | — | — | 49s ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.89% | 99.51% | 82.26% | 82.26% | — | → 0.99x | 0 | — | — | 29s ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.89% | 99.60% | 99.35% | 99.35% | — | ↑ 1.08x | 0 | — | — | 49s ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.89% | 99.71% | 96.88% | 96.88% | — | → 1.02x | 0 | — | — | 49s ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.89% | 99.71% | 5.16% | 5.16% | — | → 0.97x | 1 | 9d 1h | 30d ago | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.89% | 99.89% | 63.68% | 63.68% | — | ↓ 0.95x | 0 | — | — | 49s ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.89% | 99.48% | 89.40% | 89.40% | — | → 1.03x | 0 | — | — | 29s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.89% | 98.39% | 99.10% | 99.10% | — | ↓ 0.54x | 0 | — | — | 11m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.89% | 99.74% | 96.69% | 96.69% | — | → 1.01x | 0 | — | — | 11m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.89% | 99.65% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 11m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.89% | 99.62% | 99.78% | 99.78% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.89% | 99.65% | 98.56% | 98.56% | — | ↑ 1.12x | 0 | — | — | 11m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.89% | 99.80% | 31.33% | 31.33% | — | → 1.02x | 1 | 8d 13h | 29d ago | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.89% | 99.68% | 99.51% | 99.51% | — | → 0.99x | 0 | — | — | 9m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.89% | 99.56% | 99.89% | 99.89% | — | → 0.95x | 0 | — | — | 9m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.89% | 99.74% | 6.05% | 6.05% | — | ↑ 1.14x | 1 | 8d 13h | 29d ago | 9m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.89% | 99.71% | 99.94% | 99.94% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.89% | 99.80% | 99.97% | 99.97% | — | → 1.02x | 0 | — | — | 9m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.89% | 99.74% | 98.47% | 98.47% | — | → 0.98x | 1 | 0s | 29d ago | 11m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.89% | 99.68% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 9m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.89% | 99.51% | 96.10% | 96.10% | — | ↓ 0.93x | 0 | — | — | 9m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.89% | 99.83% | 99.08% | 99.08% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.89% | 99.65% | 99.95% | 99.95% | — | → 1.04x | 0 | — | — | 8m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.89% | 99.48% | 99.74% | 99.74% | — | → 1.01x | 0 | — | — | 10m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.89% | 99.71% | 99.93% | 99.93% | — | → 1.01x | 1 | 0s | 22d ago | 6m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.89% | 99.62% | 96.80% | 96.80% | — | → 1.00x | 0 | — | — | 10m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.89% | 99.54% | 93.61% | 93.61% | — | → 1.01x | 1 | 1h | 23d ago | 9m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.89% | 99.77% | 24.52% | 24.52% | — | ↑ 1.35x | 1 | 8d 13h | 29d ago | 8m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.89% | 99.42% | 99.09% | 99.09% | — | → 1.01x | 0 | — | — | 7m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.89% | 99.74% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 8m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.89% | 99.62% | 86.85% | 86.85% | — | → 0.98x | 0 | — | — | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.89% | 77.01% | 98.16% | 98.16% | — | ↑ 1.16x | 1 | 0s | 29d ago | 10m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.89% | 99.74% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.89% | 99.68% | 99.48% | 99.48% | — | → 1.01x | 1 | 4m | 26d ago | 6m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.89% | 99.54% | 84.75% | 84.75% | — | → 1.00x | 1 | 0s | 27d ago | 10m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.89% | 99.59% | 89.89% | 89.89% | — | → 1.01x | 1 | 0s | 22d ago | 9m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.89% | 99.77% | 98.69% | 98.69% | — | → 1.03x | 0 | — | — | 10m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.89% | 99.62% | 96.94% | 96.94% | — | → 0.98x | 1 | 0s | 23d ago | 10m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.89% | 99.62% | 99.85% | 99.85% | — | → 0.98x | 1 | 0s | 23d ago | 7m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.89% | 99.68% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.89% | 99.77% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.89% | 99.88% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 8m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.89% | 99.71% | 29.98% | 29.98% | — | → 0.96x | 1 | 9d 1h | 30d ago | 10m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.89% | 99.68% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 7m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.89% | 99.74% | 98.78% | 98.78% | — | ↑ 1.13x | 1 | 0s | 21d ago | 10m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.89% | 99.85% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 6m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.78% | 99.66% | 99.98% | 99.98% | — | → 1.04x | 1 | 4m | 27d ago | 6m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.78% | 99.69% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.78% | 99.55% | 49.74% | 49.74% | — | → 1.03x | 0 | — | — | 6m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.77% | 99.60% | 99.74% | 99.74% | — | ↑ 1.11x | 1 | 4s | 24d ago | 5m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.77% | 99.49% | 99.96% | 99.96% | — | → 1.00x | 0 | — | — | 5m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.77% | 99.58% | 99.58% | 99.58% | — | ↓ 0.93x | 2 | 0s | 24d ago | 5m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.77% | 99.58% | 99.92% | 99.92% | — | → 0.98x | 1 | 0s | 21d ago | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.77% | 99.63% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 5m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.77% | 99.55% | 99.91% | 99.91% | — | → 0.99x | 0 | — | — | 5m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.77% | 99.72% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 21d ago | 5m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.77% | 99.60% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.77% | 99.66% | 99.92% | 99.92% | — | ↓ 0.93x | 1 | 0s | 23d ago | 4m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.77% | 99.71% | 99.18% | 99.18% | — | ↑ 1.11x | 0 | — | — | 4s ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.77% | 99.71% | 77.97% | 77.97% | — | ↑ 1.26x | 1 | 0s | 22d ago | 30s ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.77% | 99.40% | 38.65% | 38.65% | — | → 1.04x | 1 | 9d 1h | 30d ago | 3m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.77% | 99.66% | 64.92% | 64.92% | — | ↑ 1.06x | 0 | — | — | 49s ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.77% | 99.66% | 62.65% | 62.65% | — | → 1.02x | 0 | — | — | 1m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.77% | 99.66% | 65.57% | 65.57% | — | ↑ 1.06x | 0 | — | — | 1m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.77% | 99.57% | 90.95% | 90.95% | — | ↑ 1.17x | 1 | 0s | 28d ago | 9s ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.77% | 99.72% | 0.11% | 0.11% | — | → 0.99x | 1 | 9d 1h | 30d ago | 3m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.77% | 99.77% | 90.32% | 90.32% | — | → 1.05x | 0 | — | — | 9s ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.77% | 99.74% | 99.87% | 99.87% | — | → 0.97x | 0 | — | — | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.77% | 99.45% | 69.43% | 69.43% | — | → 0.99x | 0 | — | — | 49s ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.77% | 99.80% | 89.57% | 89.57% | — | ↑ 1.05x | 0 | — | — | 4s ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.77% | 99.49% | 99.87% | 99.87% | — | → 0.98x | 1 | 0s | 29d ago | 3m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.77% | 96.70% | 74.00% | 74.00% | — | ↑ 1.10x | 2 | 1h 30m | 25d ago | 29s ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.77% | 99.71% | 99.67% | 99.67% | — | → 1.03x | 1 | 1d 4h | 22d ago | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.77% | 99.63% | 97.90% | 97.90% | — | ↑ 1.47x | 0 | — | — | 11m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.77% | 99.71% | 66.50% | 66.50% | — | ↑ 1.22x | 1 | 9d 1h | 30d ago | 11m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.77% | 99.11% | 28.39% | 28.39% | — | ↑ 1.34x | 1 | 9d 1h | 30d ago | 11m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.77% | 99.57% | 99.83% | 99.83% | — | → 0.95x | 0 | — | — | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.77% | 99.71% | 92.20% | 92.20% | — | → 1.02x | 2 | 0s | 25d ago | 11m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.77% | 99.19% | 97.07% | 97.07% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.77% | 99.68% | 64.61% | 64.61% | — | → 1.03x | 1 | 4d 6h | 29d ago | 11m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.77% | 99.45% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.77% | 99.77% | 98.04% | 98.04% | — | → 1.00x | 0 | — | — | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.77% | 89.59% | 0.69% | 0.69% | — | → 0.97x | 1 | 8d 13h | 29d ago | 9m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.77% | 99.71% | 99.45% | 99.45% | — | → 1.00x | 2 | 3h 1m | 28d ago | 7m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.77% | 99.65% | 99.87% | 99.87% | — | ↑ 1.25x | 0 | — | — | 10m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.77% | 98.86% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.77% | 99.77% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 8m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.77% | 99.71% | 100.00% | 100.00% | — | → 1.05x | 0 | — | — | 9m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.77% | 99.65% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.77% | 99.45% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 7m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.77% | 99.62% | 16.67% | 16.67% | — | ↑ 1.09x | 1 | 8d 13h | 29d ago | 8m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.77% | 99.47% | — | — | — | ↓ 0.75x | 0 | — | — | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.77% | 99.65% | 98.35% | 98.35% | — | ↑ 1.30x | 0 | — | — | 10m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.77% | 99.71% | 0.00% | 0.00% | — | → 0.98x | 1 | 8d 13h | 29d ago | 8m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.77% | 99.57% | 28.78% | 28.78% | — | ↑ 1.16x | 1 | 9d 1h | 30d ago | 10m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.77% | 99.80% | 93.73% | 93.73% | — | → 1.00x | 0 | — | — | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.77% | 99.39% | 99.86% | 99.86% | — | → 0.99x | 0 | — | — | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.77% | 99.65% | 98.37% | 98.37% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.77% | 99.42% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 8m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.77% | 82.74% | 97.48% | 97.48% | — | → 0.99x | 1 | 0s | 22d ago | 10m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.66% | 99.66% | 36.33% | 36.33% | — | → 0.97x | 1 | 4m | 27d ago | 6m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.66% | 99.60% | 99.49% | 99.49% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.66% | 99.75% | 70.89% | 70.89% | — | → 1.02x | 1 | 9d 1h | 30d ago | 6m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.66% | 99.66% | 98.93% | 98.93% | — | ↑ 1.05x | 1 | 0s | 24d ago | 6m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.66% | 99.69% | 99.94% | 99.94% | — | ↓ 0.88x | 0 | — | — | 5m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.66% | 99.69% | 98.00% | 98.00% | — | → 1.01x | 0 | — | — | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.66% | 99.69% | 22.33% | 22.33% | — | ↓ 0.91x | 1 | 9d 1h | 30d ago | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.66% | 99.71% | 94.26% | 94.26% | — | ↑ 1.08x | 0 | — | — | 9s ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.66% | 99.43% | 97.94% | 97.94% | — | → 1.05x | 1 | 0s | 26d ago | 2m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.66% | 96.98% | 97.21% | 97.21% | — | ↑ 1.13x | 0 | — | — | 4s ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.66% | 99.69% | 77.28% | 77.28% | — | → 0.99x | 1 | 9d 1h | 30d ago | 2m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.66% | 99.43% | 97.28% | 97.28% | — | → 0.96x | 0 | — | — | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.66% | 99.46% | 56.98% | 56.98% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.66% | 99.71% | 99.61% | 99.61% | — | → 1.04x | 0 | — | — | 50s ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.66% | 92.90% | 99.09% | 99.09% | — | → 1.03x | 0 | — | — | 2m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.66% | 84.97% | 99.03% | 99.03% | — | → 1.05x | 0 | — | — | 2m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.66% | 99.77% | 99.37% | 99.37% | — | → 1.04x | 0 | — | — | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.66% | 98.77% | 2.34% | 2.34% | — | → 0.99x | 1 | 9d 1h | 30d ago | 1m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.66% | 99.57% | 99.48% | 99.48% | — | → 0.99x | 0 | — | — | 2m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.66% | 99.25% | 63.14% | 63.14% | — | ↑ 1.11x | 1 | 0s | 23d ago | 1m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.66% | 99.74% | 58.17% | 58.17% | — | ↑ 1.97x | 1 | 9d 1h | 30d ago | 4s ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.66% | 99.43% | 24.53% | 24.53% | — | → 1.02x | 0 | — | — | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.66% | 99.60% | 81.07% | 81.07% | — | → 0.96x | 0 | — | — | 49s ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.66% | 99.63% | 88.17% | 88.17% | — | → 1.03x | 1 | 9d 1h | 30d ago | 2m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.66% | 99.68% | 98.90% | 98.90% | — | → 1.03x | 0 | — | — | 4s ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.66% | 98.88% | 98.88% | 98.88% | — | ↓ 0.64x | 0 | — | — | 50s ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.66% | 99.46% | 99.79% | 99.79% | — | ↓ 0.93x | 3 | 0s | 22d ago | 3m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.66% | 99.37% | 97.03% | 97.03% | — | → 0.96x | 0 | — | — | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.66% | 99.71% | 43.48% | 43.48% | — | → 0.97x | 1 | 9d 1h | 30d ago | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.66% | 97.24% | 96.89% | 96.89% | — | ↑ 1.87x | 2 | 0s | 21d ago | 9m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.66% | 99.80% | 98.81% | 98.81% | — | → 1.02x | 0 | — | — | 10m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.66% | 99.68% | 99.97% | 99.97% | — | ↑ 1.10x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.66% | 99.62% | 99.87% | 99.87% | — | ↑ 1.17x | 0 | — | — | 10m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.66% | 99.51% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 8m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.66% | 87.88% | 99.61% | 99.61% | — | → 0.99x | 3 | 0s | 21d ago | 8m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.66% | 99.71% | 99.67% | 99.67% | — | ↑ 1.22x | 1 | 0s | 24d ago | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.66% | 99.48% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 10m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.66% | 99.48% | 99.71% | 99.71% | — | → 0.96x | 1 | 0s | 23d ago | 10m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.66% | 99.65% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 8m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.66% | 99.65% | 99.93% | 99.93% | — | → 1.02x | 1 | 0s | 23d ago | 10m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.66% | 99.59% | 99.89% | 99.89% | — | → 1.02x | 0 | — | — | 8m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.66% | 99.65% | 97.87% | 97.87% | — | → 0.98x | 0 | — | — | 10m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.66% | 99.45% | 99.67% | 99.67% | — | → 1.03x | 0 | — | — | 8m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.66% | 99.71% | 60.72% | 60.72% | — | ↓ 0.89x | 0 | — | — | 7m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.55% | 99.60% | 99.65% | 99.65% | — | ↑ 2.02x | 0 | — | — | 6m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.55% | 98.95% | 51.42% | 51.42% | — | ↑ 1.15x | 1 | 0s | 26d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.55% | 46.14% | 5.08% | 5.08% | — | → 1.01x | 1 | 9d 1h | 30d ago | 4m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.55% | 99.52% | 99.77% | 99.77% | — | → 0.97x | 0 | — | — | 4m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.55% | 99.71% | 99.85% | 99.85% | — | ↓ 0.93x | 0 | — | — | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.55% | 98.45% | 57.00% | 57.00% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.55% | 99.66% | 99.90% | 99.90% | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.55% | 99.74% | 99.89% | 99.89% | — | ↓ 0.94x | 0 | — | — | 4s ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.55% | 99.71% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 3m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.55% | 99.08% | 81.53% | 81.53% | — | ↑ 1.16x | 0 | — | — | 30s ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.55% | 99.51% | 98.66% | 98.66% | — | → 0.98x | 0 | — | — | 11m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.55% | 98.00% | 98.75% | 98.75% | — | → 0.99x | 3 | 46s | 26d ago | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.55% | 99.45% | 98.11% | 98.11% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.55% | 99.77% | 98.47% | 98.47% | — | ↑ 1.23x | 0 | — | — | 10m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.55% | 99.65% | 99.98% | 99.98% | — | → 0.98x | 0 | — | — | 8m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.55% | 99.65% | 99.98% | 99.98% | — | ↑ 1.19x | 0 | — | — | 8m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.55% | 99.48% | 97.80% | 97.80% | — | ↓ 0.93x | 0 | — | — | 10m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.55% | 99.42% | 100.00% | 100.00% | — | ↑ 1.23x | 0 | — | — | 7m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.55% | 98.87% | 83.10% | 83.10% | — | → 1.03x | 1 | 0s | 29d ago | 10m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.55% | 99.33% | 99.94% | 99.94% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.44% | 97.72% | 93.42% | 93.42% | — | → 1.00x | 1 | 11m | 27d ago | 6m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.44% | 99.43% | 99.62% | 99.62% | — | → 1.04x | 0 | — | — | 6m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.44% | 99.55% | 99.73% | 99.73% | — | → 1.03x | 0 | — | — | 5m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.43% | 99.63% | 99.88% | 99.88% | — | → 1.02x | 0 | — | — | 49s ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.43% | 99.69% | 30.20% | 30.20% | — | → 1.03x | 1 | 9d 1h | 30d ago | 2m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.43% | 99.43% | 69.87% | 69.87% | — | → 1.02x | 2 | 0s | 24d ago | 49s ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.43% | 99.51% | 99.76% | 99.76% | — | → 0.98x | 0 | — | — | 11m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.43% | 99.74% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 7m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.43% | 98.53% | 90.79% | 90.79% | — | ↑ 1.11x | 1 | 0s | 23d ago | 10m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.43% | 99.31% | 93.06% | 93.06% | — | → 1.02x | 0 | — | — | 10m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.43% | 98.38% | 32.93% | 32.93% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.43% | 91.05% | 96.14% | 96.14% | — | ↑ 1.06x | 3 | 13h 21m | 23d ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.43% | 99.56% | 99.76% | 99.76% | — | → 1.03x | 0 | — | — | 8m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.33% | 99.49% | 99.75% | 99.75% | — | → 0.98x | 0 | — | — | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.32% | 99.60% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 22d ago | 4m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.32% | 99.46% | 22.30% | 22.30% | — | → 0.98x | 1 | 0s | 23d ago | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.32% | 77.81% | 0.11% | 0.11% | — | ↑ 3.04x | 1 | 9d 1h | 30d ago | 2m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.32% | 99.63% | 99.00% | 99.00% | — | ↑ 2.10x | 0 | — | — | 3s ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.32% | 98.25% | 38.36% | 38.36% | — | → 1.04x | 0 | — | — | 1m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.32% | 99.62% | 26.43% | 26.43% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.32% | 98.73% | 98.12% | 98.12% | — | ↑ 1.19x | 0 | — | — | 11m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.32% | 99.48% | 98.56% | 98.56% | — | → 1.00x | 0 | — | — | 8m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.32% | 99.29% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.21% | 99.44% | 99.60% | 99.60% | — | → 1.02x | 1 | 2s | 23d ago | 6m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.21% | 99.60% | 99.76% | 99.76% | — | → 0.99x | 0 | — | — | 6m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.21% | 98.88% | 99.82% | 99.82% | — | ↑ 1.09x | 0 | — | — | 4s ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.21% | 99.22% | 98.16% | 98.16% | — | → 0.96x | 0 | — | — | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.21% | 99.16% | 97.74% | 97.74% | — | ↑ 1.08x | 3 | 5h 37m | 22d ago | 11m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.21% | 99.51% | 55.08% | 55.08% | — | ↑ 1.13x | 7 | 0s | 22d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.21% | 99.19% | 97.10% | 97.10% | — | ↓ 0.95x | 1 | 0s | 29d ago | 10m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.14% | 99.14% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.10% | 99.27% | 99.61% | 99.61% | — | → 1.02x | 0 | — | — | 6m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.10% | 99.31% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 2m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.10% | 99.14% | 31.58% | 31.58% | — | → 1.01x | 1 | 9d 1h | 30d ago | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.09% | 99.60% | 99.95% | 99.95% | — | → 0.97x | 0 | — | — | 11m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.09% | 99.59% | 99.34% | 99.34% | — | ↓ 0.94x | 3 | 0s | 22d ago | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.09% | 99.24% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (83)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 98.99% | 99.38% | 98.29% | 98.29% | — | → 0.99x | 0 | — | — | 6m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.98% | 92.23% | 92.56% | 92.56% | — | ↓ 0.88x | 6 | 40m | 22d ago | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 98.88% | 97.24% | 93.57% | 93.57% | — | ↑ 1.10x | 1 | 4m | 27d ago | 6m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.88% | 98.95% | 99.85% | 99.85% | — | → 1.01x | 0 | — | — | 6m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 98.87% | 98.87% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 98.87% | 97.93% | 98.78% | 98.78% | — | ↓ 0.88x | 1 | 0s | 23d ago | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 98.87% | 97.40% | 26.84% | 26.84% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.86% | 98.72% | 99.34% | 99.34% | — | ↑ 1.11x | 2 | 0s | 23d ago | 6m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 98.86% | 99.47% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 7m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.76% | 98.97% | 74.11% | 74.11% | — | → 1.00x | 1 | 1h | 22d ago | 49s ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 98.76% | 97.47% | 99.27% | 99.27% | — | ↑ 1.42x | 0 | — | — | 44s ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 98.76% | 86.25% | 85.28% | 85.28% | — | ↑ 1.17x | 0 | — | — | 3m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.75% | 91.24% | 95.25% | 95.25% | — | ↑ 1.13x | 11 | 1h 11m | 23d ago | 10m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.75% | 99.04% | 99.94% | 99.94% | — | → 1.05x | 0 | — | — | 6m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 98.64% | 99.39% | 91.90% | 91.90% | — | → 0.98x | 0 | — | — | 7m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.53% | 99.11% | 24.43% | 24.43% | — | ↓ 0.87x | 0 | — | — | 2m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.52% | 91.18% | 87.87% | 87.87% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.30% | 95.60% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.18% | 99.19% | 95.85% | 95.85% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 98.18% | 99.24% | 99.77% | 99.77% | — | ↑ 1.33x | 1 | 0s | 23d ago | 7m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.08% | 97.73% | 89.02% | 89.02% | — | → 1.04x | 0 | — | — | 4m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.07% | 97.72% | 66.05% | 66.05% | — | ↑ 1.14x | 7 | 19h 32m | 26d ago | 10m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 97.96% | 99.07% | 99.85% | 99.85% | — | ↑ 1.29x | 1 | 6h 1m | 22d ago | 9m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 97.75% | 98.93% | 99.56% | 99.56% | — | → 1.03x | 0 | — | — | 6m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.73% | 98.87% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.39% | 96.50% | 98.02% | 98.02% | — | ↑ 1.72x | 0 | — | — | 10m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.17% | 98.87% | 98.88% | 98.88% | — | ↑ 1.08x | 1 | 0s | 22d ago | 9m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 96.95% | 96.84% | 83.18% | 83.18% | — | ↑ 1.49x | 1 | 3m | 27d ago | 29s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 96.71% | 98.34% | 88.31% | 88.31% | — | ↓ 0.86x | 0 | — | — | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.27% | 98.80% | 99.68% | 99.68% | — | → 1.03x | 0 | — | — | 3m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 95.92% | 91.21% | 77.59% | 77.59% | — | ↑ 1.29x | 0 | — | — | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 95.91% | 98.67% | 98.83% | 98.83% | — | → 1.02x | 0 | — | — | 10m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 94.23% | 96.26% | 98.12% | 98.12% | — | ↑ 1.25x | 0 | — | — | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.21% | 94.64% | 97.00% | 97.00% | — | → 0.99x | 1 | 0s | 24d ago | 10m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 93.36% | 76.16% | 94.11% | 94.11% | — | → 1.03x | 3 | 23h 14m | 24d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 92.30% | 97.66% | 56.85% | 56.85% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 92.23% | 96.35% | 96.43% | 96.43% | — | ↑ 1.16x | 3 | 1d 4h | 21d ago | 5m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 92.01% | 80.51% | 67.23% | 67.23% | — | ↑ 1.36x | 1 | 9d 1h | 30d ago | 6m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.34% | 89.18% | 78.01% | 78.01% | — | ↑ 1.09x | 44 | 7s | 23d ago | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 90.21% | 82.74% | 98.89% | 98.89% | — | ↑ 1.25x | 0 | — | — | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 89.93% | 83.59% | 69.98% | 69.98% | — | ↑ 1.16x | 0 | — | — | 3m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 85.96% | 75.85% | 54.05% | 54.05% | — | ↑ 1.58x | 1 | 9d 1h | 30d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 85.83% | 26.23% | 46.51% | 46.51% | — | ↓ 0.85x | 3 | 8h 3m | 29d ago | 11m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 85.50% | 80.52% | 87.06% | 87.06% | — | ↑ 1.23x | 0 | — | — | 11m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 85.39% | 75.48% | 83.85% | 83.85% | — | ↑ 1.78x | 2 | 0s | 27d ago | 12m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 85.17% | 78.05% | 75.11% | 75.11% | — | ↑ 1.73x | 1 | 9d 1h | 30d ago | 6m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 85.17% | 77.68% | 66.07% | 66.07% | — | ↑ 1.81x | 1 | 9d 1h | 30d ago | 6m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 84.89% | 83.22% | — | — | — | ↑ 1.22x | 0 | — | — | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 84.48% | 78.44% | 48.46% | 48.46% | — | ↑ 1.20x | 1 | 9d 1h | 30d ago | 11m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 84.05% | 92.68% | 96.18% | 96.18% | — | ↑ 1.07x | 1 | 0s | 30d ago | 4s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 83.58% | 79.28% | 10.72% | 10.72% | — | ↑ 1.20x | 1 | 9d 1h | 30d ago | 11m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 81.19% | 85.42% | 75.72% | 75.72% | — | ↑ 1.07x | 1 | 9d 1h | 30d ago | 5m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 80.93% | 90.69% | 99.95% | 99.95% | — | ↓ 0.91x | 0 | — | — | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 80.32% | 75.44% | 86.83% | 86.83% | — | ↑ 1.38x | 2 | 0s | 28d ago | 2m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 79.66% | 77.15% | 68.41% | 68.41% | — | ↑ 1.08x | 1 | 9d 1h | 30d ago | 6m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 79.44% | 69.88% | 50.52% | 50.52% | — | ↓ 0.93x | 116 | 43m | 22d ago | 6m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 79.44% | 75.99% | 86.29% | 86.29% | — | ↑ 1.39x | 3 | 0s | 23d ago | 4m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 79.30% | 77.30% | 99.65% | 99.65% | — | → 1.05x | 0 | — | — | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 79.10% | 76.22% | 98.92% | 98.92% | — | ↑ 1.14x | 1 | 0s | 27d ago | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 78.96% | 75.70% | 96.79% | 96.79% | — | ↑ 1.30x | 0 | — | — | 2m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 78.80% | 79.67% | 96.32% | 96.32% | — | → 1.05x | 26 | 11m | 24d ago | 5m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 78.74% | 20.08% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 6m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 78.74% | 69.26% | 64.20% | 64.20% | — | → 0.98x | 2 | 0s | 25d ago | 6m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 78.73% | 80.80% | 63.15% | 63.15% | — | ↑ 1.09x | 43 | 1m | 23d ago | 3m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 78.17% | 71.63% | 69.01% | 69.01% | — | → 1.01x | 0 | — | — | 29s ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 77.59% | 83.95% | 99.78% | 99.78% | — | ↑ 1.67x | 0 | — | — | 5m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 77.48% | 84.94% | 99.92% | 99.92% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 77.19% | 71.79% | 91.98% | 91.98% | — | ↑ 1.13x | 2 | 2m | 23d ago | 6m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.96% | 76.83% | 88.70% | 88.70% | — | ↑ 1.36x | 1 | 6h | 21d ago | 11m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 76.49% | 76.84% | 99.77% | 99.77% | — | ↑ 1.38x | 0 | — | — | 6m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 76.38% | 77.55% | 86.23% | 86.23% | — | ↑ 1.13x | 2 | 0s | 27d ago | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 75.71% | 75.31% | 6.48% | 6.48% | — | ↑ 1.10x | 1 | 8d 13h | 29d ago | 8m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 75.31% | 74.13% | 93.16% | 93.16% | — | → 1.00x | 1 | 0s | 26d ago | 12m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 73.53% | 75.82% | 54.78% | 54.78% | — | ↑ 1.11x | 1 | 9d 1h | 30d ago | 3m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 72.87% | 75.58% | 98.53% | 98.53% | — | ↑ 1.06x | 2 | 0s | 22d ago | 8m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 72.33% | 72.37% | 99.93% | 99.93% | — | ↑ 3.37x | 0 | — | — | 6m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 71.06% | 73.36% | 99.85% | 99.85% | — | → 1.01x | 0 | — | — | 7m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 69.58% | 72.56% | 100.00% | 100.00% | — | → 1.05x | 0 | — | — | 8m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 63.71% | 59.65% | 52.45% | 52.45% | — | → 1.03x | 1 | 9d 1h | 30d ago | 6m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 60.84% | 89.55% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 6m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 49.60% | 65.69% | 99.88% | 99.88% | — | ↑ 1.06x | 1 | 0s | 29d ago | 7m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 38.22% | 56.31% | 98.87% | 98.87% | — | ↑ 1.89x | 0 | — | — | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 13.35% | 3.70% | 27.04% | 27.04% | — | ↓ 0.93x | 1 | 9d 1h | 30d ago | 49s ago |

</details>

<details open>
<summary><strong>🔴 Down (321)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.89% | 74.61% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 7m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.77% | 99.45% | 98.95% | 98.95% | — | ↑ 1.11x | 0 | — | — | 10m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.68% | 99.68% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.66% | 97.89% | 98.93% | 98.93% | — | → 0.97x | 1 | 0s | 27d ago | 2m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.55% | 99.49% | 99.74% | 99.74% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.44% | 99.61% | 98.78% | 98.78% | — | → 0.97x | 3 | 0s | 27d ago | 6m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.43% | 99.06% | 99.76% | 99.76% | — | → 1.03x | 0 | — | — | 3m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.43% | 99.54% | 24.91% | 24.91% | — | → 1.02x | 0 | — | — | 1m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.43% | 99.82% | — | — | — | ↑ 1.17x | 0 | — | — | 6m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.21% | 99.38% | — | — | — | ↓ 0.91x | 0 | — | — | 6m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 98.98% | 99.36% | 14.21% | 14.21% | — | ↑ 1.64x | 1 | 8d 13h | 29d ago | 9m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 98.88% | 98.88% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 98.27% | 98.27% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.16% | 97.03% | 97.85% | 97.85% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 83.16% | 36.01% | 40.01% | 40.01% | — | ↑ 1.16x | 1 | 21h 58m | 30d ago | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 82.07% | 51.00% | 78.42% | 78.42% | — | ↑ 1.25x | 1 | 8d 13h | 29d ago | 8m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 81.33% | 81.18% | 98.45% | 98.45% | — | → 1.02x | 5 | 0s | 23d ago | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 80.97% | 77.35% | 44.62% | 44.62% | — | ↑ 1.10x | 1 | 8d 10h | 30d ago | 11m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 80.45% | 84.88% | — | — | — | ↑ 1.24x | 0 | — | — | 6m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 79.75% | 82.89% | 68.13% | 68.13% | — | ↑ 1.09x | 1 | 9d 1h | 30d ago | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 79.39% | 84.63% | 99.09% | 99.09% | — | ↑ 1.17x | 0 | — | — | 5m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 74.07% | 28.93% | 97.75% | 97.75% | — | → 1.01x | 2 | 0s | 22d ago | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 74.07% | 72.88% | 85.02% | 85.02% | — | ↑ 1.18x | 3 | 0s | 24d ago | 11m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 69.81% | 78.29% | 82.00% | 82.00% | — | ↑ 1.17x | 33 | 8m | 23d ago | 6m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 69.35% | 30.86% | 99.82% | 99.82% | — | ↑ 1.07x | 2 | 2m | 25d ago | 7m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 69.26% | 76.95% | 93.77% | 93.77% | — | → 0.98x | 0 | — | — | 5m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 60.16% | 19.34% | 25.44% | 25.44% | — | ↓ 0.91x | 2 | 3d 20h | 23d ago | 10m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 54.64% | 16.97% | 22.80% | 22.80% | — | ↓ 0.85x | 0 | — | — | 2m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 53.12% | 72.63% | 97.23% | 97.23% | — | ↑ 1.35x | 5 | 0s | 24d ago | 6m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 51.76% | 73.62% | 99.06% | 99.06% | — | ↑ 1.23x | 1 | 0s | 23d ago | 6m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 51.42% | 57.18% | 98.37% | 98.37% | — | ↑ 2.78x | 3 | 3m | 25d ago | 7m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 49.66% | 61.00% | 75.15% | 75.15% | — | ↑ 1.07x | 1 | 9d 1h | 30d ago | 2m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 35.07% | 83.02% | — | — | — | ↑ 1.15x | 0 | — | — | 7m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 28.15% | 62.39% | 91.43% | 91.43% | — | ↑ 2.16x | 0 | — | — | 6m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 26.61% | 81.37% | 99.80% | 99.80% | — | → 1.00x | 0 | — | — | 5m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 16.48% | 78.59% | 76.88% | 76.88% | — | ↑ 1.14x | 1 | 9d 1h | 30d ago | 4m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 3.06% | 4.55% | 7.76% | 7.76% | — | ↑ 1.07x | 1 | 8d 13h | 29d ago | 9m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.79% | 1.11% | 0.10% | 0.10% | — | ↑ 1.92x | 1 | 9d 1h | 30d ago | 2m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.11% | 0.43% | 34.65% | 34.65% | — | ↑ 1.48x | 0 | — | — | 30s ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.11% | 0.86% | 87.63% | 87.63% | — | ↑ 1.63x | 0 | — | — | 10s ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.31% | 63.31% | 63.31% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.32% | 59.84% | 59.84% | — | — | 2 | 60m | 22d ago | 11m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.32% | 70.78% | 70.78% | — | — | 3 | 2d 22h | 21d ago | 11m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.32% | 52.44% | 52.44% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.31% | 5.20% | 5.20% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.31% | 10.24% | 10.24% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.26% | 88.73% | 88.73% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.32% | 99.82% | 99.82% | — | — | 1 | 7h | 22d ago | 8m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.32% | 47.31% | 47.31% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.32% | 73.96% | 73.96% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.31% | 74.22% | 74.22% | — | — | 2 | 3d 9h | 28d ago | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.31% | 3.13% | 3.13% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.35% | 79.86% | 79.86% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.31% | 40.15% | 40.15% | — | — | 0 | — | — | 3m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.31% | 33.64% | 33.64% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 32.30% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.32% | 99.65% | 99.65% | — | — | 2 | 30m | 23d ago | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.29% | 90.14% | 90.14% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.32% | 85.33% | 85.33% | — | — | 95 | 33m | 23d ago | 10m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.31% | 83.66% | 83.66% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.32% | 21.09% | 21.09% | — | — | 1 | 9d 1h | 30d ago | 29s ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.31% | 84.65% | 84.65% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.31% | 75.27% | 75.27% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.31% | 57.88% | 57.88% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.31% | 70.96% | 70.96% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.31% | 19.82% | 19.82% | — | — | 1 | 7d 21h | 29d ago | 2m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.48% | 83.11% | 83.11% | — | — | 2 | 2d 24h | 26d ago | 10m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.32% | 13.15% | 13.15% | — | — | 1 | 9d 1h | 30d ago | 4s ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 17.38% | 44.49% | 44.49% | — | — | 1 | 9d 1h | 30d ago | 29s ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.31% | 87.39% | 87.39% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.32% | 30.30% | 30.30% | — | — | 1 | 9d 1h | 30d ago | 10s ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.26% | 99.75% | 99.75% | — | — | 1 | 0s | 22d ago | 6m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 57.47% | 68.70% | 68.70% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.31% | 78.14% | 78.14% | — | — | 96 | 43m | 22d ago | 2m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.31% | 98.15% | 98.15% | — | — | 1 | 8d 1h | 29d ago | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.32% | 78.64% | 78.64% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.32% | 3.12% | 3.12% | — | — | 1 | 9d 1h | 30d ago | 50s ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.31% | 32.40% | 32.40% | — | — | 1 | 4d 12h | 25d ago | 3m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.26% | 76.21% | 76.21% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.32% | 72.40% | 72.40% | — | — | 1 | 8d 13h | 29d ago | 7m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.31% | 48.90% | 48.90% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.32% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 25d ago | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 63.30% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.32% | 31.88% | 31.88% | — | — | 1 | 9d 1h | 30d ago | 49s ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.26% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 22d ago | 8m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.26% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.31% | 84.44% | 84.44% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.32% | 32.34% | 32.34% | — | — | 1 | 8d 13h | 29d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.35% | 64.69% | 64.69% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.32% | 46.41% | 46.41% | — | — | 2 | 4d 11h | 22d ago | 51s ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.31% | 50.25% | 50.25% | — | — | 0 | — | — | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.31% | 96.06% | 96.06% | — | — | 1 | 3d 6h | 24d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.32% | 69.29% | 69.29% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.32% | 39.40% | 39.40% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.32% | 64.35% | 64.35% | — | — | 1 | 9d 1h | 30d ago | 30s ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.32% | 26.33% | 26.33% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 26.43% | 93.54% | 93.54% | — | — | 2 | 30m | 24d ago | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.26% | 98.70% | 98.70% | — | — | 0 | — | — | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.31% | 50.43% | 50.43% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.26% | 75.41% | 75.41% | — | — | 68 | 1h 25m | 21d ago | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.32% | 22.07% | 22.07% | — | — | 1 | 9d 1h | 30d ago | 30s ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.32% | 98.37% | 98.37% | — | — | 0 | — | — | 11m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.29% | 32.48% | 32.48% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.32% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.32% | 48.30% | 48.30% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.31% | 46.73% | 46.73% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.32% | 21.32% | 21.32% | — | — | 1 | 9d 1h | 30d ago | 4s ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.32% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.32% | 4.63% | 4.63% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.31% | 60.67% | 60.67% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.32% | 99.92% | 99.92% | — | — | 0 | — | — | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.32% | 68.44% | 68.44% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.26% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.26% | 98.40% | 98.40% | — | — | 0 | — | — | 7m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.31% | 99.74% | 99.74% | — | — | 0 | — | — | 6m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.32% | 5.52% | 5.52% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.32% | 81.13% | 81.13% | — | — | 0 | — | — | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.31% | 73.53% | 73.53% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.31% | 74.18% | 74.18% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.31% | 99.84% | 99.84% | — | — | 0 | — | — | 6m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.32% | 99.89% | 99.89% | — | — | 1 | 3m | 24d ago | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.32% | 83.98% | 83.98% | — | — | 1 | 9d 1h | 30d ago | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.32% | 20.14% | 20.14% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.32% | 99.95% | 99.95% | — | — | 0 | — | — | 8m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.31% | 48.81% | 48.81% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.31% | 83.92% | 83.92% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.32% | 67.73% | 67.73% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.26% | 83.84% | 83.84% | — | — | 5 | 13m | 26d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.32% | 74.74% | 74.74% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.32% | 47.90% | 47.90% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.32% | 99.25% | 99.25% | — | — | 0 | — | — | 9m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.26% | 91.99% | 91.99% | — | — | 0 | — | — | 9m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.31% | 22.80% | 22.80% | — | — | 0 | — | — | 2m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.26% | 98.05% | 98.05% | — | — | 1 | 0s | 22d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.32% | 55.75% | 55.75% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.03% | — | — | — | — | 0 | — | — | 6m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.26% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 23d ago | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.31% | 43.20% | 43.20% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.26% | 16.44% | 16.44% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.31% | 39.16% | 39.16% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.31% | 74.31% | 74.31% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.32% | 20.55% | 20.55% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 0.00% | 24.77% | 98.24% | 98.24% | — | — | 0 | — | — | 4s ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3s ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.31% | 54.39% | 54.39% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.32% | 75.74% | 75.74% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.31% | 35.55% | 35.55% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.32% | 65.91% | 65.91% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.26% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.32% | 70.74% | 70.74% | — | — | 3 | 2d 22h | 21d ago | 11m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.31% | 34.00% | 34.00% | — | — | 2 | 30m | 25d ago | 3m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.32% | 62.39% | 62.39% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.31% | 45.59% | 45.59% | — | — | 0 | — | — | 6m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.31% | 76.99% | 76.99% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.31% | 38.64% | 38.64% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.31% | 22.32% | 22.32% | — | — | 0 | — | — | 5m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.31% | 90.53% | 90.53% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.32% | 91.04% | 91.04% | — | — | 1 | 3d 23h | 25d ago | 8m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.32% | 42.69% | 42.69% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.32% | 39.95% | 39.95% | — | — | 1 | 9d 1h | 30d ago | 30s ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.26% | 99.29% | 99.29% | — | — | 0 | — | — | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.32% | 24.01% | 24.01% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.31% | 81.34% | 81.34% | — | — | 1 | 3h | 25d ago | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.31% | 73.32% | 73.32% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.32% | 2.87% | 2.87% | — | — | 1 | 9d 1h | 30d ago | 30s ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.32% | 49.45% | 49.45% | — | — | 0 | — | — | 11m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.31% | 39.57% | 39.57% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.31% | 20.82% | 20.82% | — | — | 40 | 10m | 21d ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.31% | 23.09% | 23.09% | — | — | 2 | 30m | 27d ago | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.32% | 20.58% | 20.58% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.26% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.32% | 33.55% | 33.55% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.32% | 52.99% | 52.99% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.31% | 82.46% | 82.46% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.31% | 92.62% | 92.62% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.31% | 23.25% | 23.25% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.32% | 27.77% | 27.77% | — | — | 26 | 14m | 24d ago | 26s ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.31% | 86.17% | 86.17% | — | — | 1 | 10s | 27d ago | 4m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 1m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.31% | 49.10% | 49.10% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.31% | 86.30% | 86.30% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.32% | 65.07% | 65.07% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.31% | 99.12% | 99.12% | — | — | 1 | 11h 60m | 21d ago | 4m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.32% | 92.19% | 92.19% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.00% | 1.52% | 44.99% | 44.99% | — | — | 0 | — | — | 10s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.26% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.31% | 99.26% | 99.26% | — | — | 0 | — | — | 2m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.31% | 99.77% | 99.77% | — | — | 0 | — | — | 6m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.31% | 16.23% | 16.23% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.31% | 45.98% | 45.98% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.32% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 21d ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.32% | 98.92% | 98.92% | — | — | 0 | — | — | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.32% | 46.05% | 46.05% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.32% | 16.77% | 16.77% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.00% | 68.45% | 98.59% | 98.59% | — | — | 11 | 6m | 23d ago | 8m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.31% | 51.26% | 51.26% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.32% | 35.56% | 35.56% | — | — | 1 | 9d 1h | 30d ago | 1m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.32% | 19.49% | 19.49% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.32% | 99.81% | 99.81% | — | — | 0 | — | — | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.32% | 72.39% | 72.39% | — | — | 1 | 9d 1h | 30d ago | 9s ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.31% | 83.68% | 83.68% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.32% | 26.68% | 26.68% | — | — | 0 | — | — | 1m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.32% | 46.80% | 46.80% | — | — | 1 | 8d 13h | 29d ago | 7m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.31% | 75.88% | 75.88% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.31% | 22.72% | 22.72% | — | — | 1 | 5d 15h | 27d ago | 2m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.31% | 68.72% | 68.72% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.31% | 18.10% | 18.10% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.31% | 54.28% | 54.28% | — | — | 1 | 9d 1h | 30d ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.32% | 35.49% | 35.49% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.31% | 3.84% | 3.84% | — | — | 2 | 4d 6h | 22d ago | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.31% | 63.55% | 63.55% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.31% | 23.11% | 23.11% | — | — | 0 | — | — | 4m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.26% | 99.60% | 99.60% | — | — | 0 | — | — | 8m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.32% | 22.23% | 22.23% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.32% | 6.70% | 6.70% | — | — | 1 | 9d 1h | 30d ago | 10s ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.32% | 22.60% | 22.60% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.31% | 62.64% | 62.64% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.32% | 30.92% | 30.92% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.32% | 68.76% | 68.76% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.26% | 3.80% | 3.80% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.32% | 44.20% | 44.20% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.32% | 38.02% | 38.02% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.32% | 17.16% | 17.16% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.32% | 10.15% | 10.15% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.29% | 23.40% | 23.40% | — | — | 11 | 5m | 24d ago | 1m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.31% | 99.53% | 99.53% | — | — | 0 | — | — | 6m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.31% | 16.69% | 16.69% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.31% | 21.71% | 21.71% | — | — | 31 | 2h 13m | 21d ago | 4m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.32% | 14.75% | 14.75% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.32% | 25.49% | 25.49% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.32% | 8.99% | 8.99% | — | — | 1 | 9d 1h | 30d ago | 29s ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 15.95% | 92.86% | 92.86% | — | — | 3 | 0s | 21d ago | 10m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.32% | 3.93% | 3.93% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.32% | 4.55% | 4.55% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.31% | 46.30% | 46.30% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.32% | 76.63% | 76.63% | — | — | 1 | 8d 13h | 29d ago | 7m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.26% | 32.96% | 32.96% | — | — | 0 | — | — | 4m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.32% | 36.28% | 36.28% | — | — | 1 | 8d 13h | 29d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.32% | 98.48% | 98.48% | — | — | 0 | — | — | 4s ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.32% | 63.49% | 63.49% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.32% | 40.17% | 40.17% | — | — | 1 | 9d 1h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.31% | 77.23% | 77.23% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.32% | 43.61% | 43.61% | — | — | 1 | 9d 1h | 30d ago | 10m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.31% | 23.13% | 23.13% | — | — | 0 | — | — | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.31% | 0.01% | 0.01% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.31% | 22.68% | 22.68% | — | — | 0 | — | — | 2m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.32% | 60.97% | 60.97% | — | — | 21 | 0s | 23d ago | 10m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 3m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.31% | 38.37% | 38.37% | — | — | 1 | 9d 1h | 30d ago | 5m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.32% | 1.35% | 1.35% | — | — | 1 | 8d 13h | 29d ago | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.32% | 17.59% | 17.59% | — | — | 1 | 9d 1h | 30d ago | 29s ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.32% | 91.72% | 91.72% | — | — | 21 | 0s | 21d ago | 9s ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.32% | 99.77% | 99.77% | — | — | 2 | 2m | 22d ago | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.31% | 99.17% | 99.17% | — | — | 0 | — | — | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | 4m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 8d 13h | 29d ago | 8m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 9d 1h | 30d ago | — |

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
