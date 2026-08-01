# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**699 providers** — 303 🟢 operational · 86 🟡 degraded · 308 🔴 down · 2 ⚫ unknown

_Updated 2026-08-01 06:01 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (303)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.73% | 99.45% | 99.45% | — | → 0.99x | 0 | — | — | 7m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.84% | 98.73% | 98.73% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 100.00% | 79.75% | 76.64% | 76.64% | — | → 1.03x | 1 | 7d 1h | 30d ago | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.68% | 98.56% | 98.56% | — | → 1.02x | 0 | — | — | 34s ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.81% | 80.20% | 80.20% | — | → 1.04x | 1 | 0s | 25d ago | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.84% | 99.02% | 99.02% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.47% | 97.98% | 97.98% | — | → 1.01x | 0 | — | — | 5m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.52% | 99.64% | 99.64% | — | ↑ 1.12x | 0 | — | — | 54s ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.73% | 99.10% | 99.10% | — | → 1.03x | 0 | — | — | 8m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 98.98% | 99.33% | 99.33% | — | → 0.99x | 0 | — | — | 8m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.65% | 96.80% | 96.80% | — | → 0.98x | 0 | — | — | 10m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 100.00% | 99.84% | 1.90% | 1.90% | — | → 1.00x | 1 | 7d 1h | 30d ago | 4m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.71% | 68.50% | 68.50% | — | → 0.97x | 0 | — | — | 2m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.68% | 98.00% | 98.00% | — | → 1.04x | 0 | — | — | 2m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.84% | 99.70% | 99.70% | — | → 1.01x | 0 | — | — | 9m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.82% | 99.65% | 99.65% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 99.78% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 8m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 99.73% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 98.98% | 98.96% | 98.96% | — | ↑ 1.17x | 0 | — | — | 54s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.41% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.81% | 99.92% | 99.92% | — | ↑ 1.08x | 0 | — | — | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.60% | 98.81% | 98.81% | — | ↑ 1.52x | 0 | — | — | 34s ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.76% | 98.43% | 98.43% | — | → 0.98x | 0 | — | — | 10m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.71% | 98.00% | 98.00% | — | → 1.01x | 0 | — | — | 5m ago |
| [Groq](https://lmspeed.net/provider/groq) | 100.00% | 99.58% | 76.97% | 76.97% | — | → 1.00x | 1 | 7d 1h | 30d ago | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 100.00% | 99.79% | 17.47% | 17.47% | — | ↓ 0.82x | 1 | 7d 1h | 30d ago | 6m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.71% | 89.73% | 89.73% | — | ↑ 1.17x | 0 | — | — | 5m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.68% | 98.35% | 98.35% | — | ↑ 1.26x | 0 | — | — | 11s ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.38% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.76% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 3m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.57% | 91.87% | 91.87% | — | → 0.98x | 0 | — | — | 56s ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.73% | 96.88% | 96.88% | — | → 1.01x | 0 | — | — | 2m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 99.52% | 98.56% | 98.56% | — | → 0.97x | 0 | — | — | 8m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.89% | 60.60% | 60.60% | — | → 0.99x | 0 | — | — | 3m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.76% | 98.38% | 98.38% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.65% | 99.85% | 99.85% | — | → 1.03x | 1 | 0s | 25d ago | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.79% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 5m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.76% | 25.33% | 25.33% | — | → 0.99x | 0 | — | — | 3m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.84% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 2m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.76% | 99.49% | 99.49% | — | → 1.01x | 0 | — | — | 5m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.81% | 99.66% | 99.66% | — | → 1.00x | 0 | — | — | 7m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.70% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 8m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 97.88% | 93.42% | 93.42% | — | ↓ 0.92x | 1 | 11m | 29d ago | 6m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.70% | 97.35% | 97.35% | — | ↓ 0.93x | 1 | 0s | 29d ago | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.78% | 99.86% | 99.86% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.39% | 96.73% | 96.73% | — | → 1.01x | 0 | — | — | 3m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.68% | 24.63% | 24.63% | — | ↑ 1.20x | 0 | — | — | 3m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.74% | 99.90% | 99.90% | — | ↑ 1.16x | 0 | — | — | 5m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.89% | 99.71% | 68.59% | 68.59% | — | → 1.03x | 1 | 6d 24h | 30d ago | 6m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.84% | 99.98% | 99.98% | — | ↑ 1.13x | 1 | 4m | 29d ago | 6m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.89% | 99.68% | 76.22% | 76.22% | — | → 1.01x | 1 | 7d 1h | 30d ago | 5m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.89% | 25.85% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 6m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.89% | 99.74% | 44.95% | 44.95% | — | ↓ 0.95x | 0 | — | — | 5m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.89% | 99.58% | 49.74% | 49.74% | — | → 1.03x | 0 | — | — | 6m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.89% | 99.79% | 99.81% | 99.81% | — | → 0.99x | 0 | — | — | 5m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.89% | 99.58% | 99.91% | 99.91% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.89% | 99.16% | 99.64% | 99.64% | — | ↓ 0.87x | 2 | 0s | 27d ago | 5m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.89% | 98.95% | 98.94% | 98.94% | — | ↓ 0.44x | 0 | — | — | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.89% | 99.74% | 98.92% | 98.92% | — | → 1.01x | 0 | — | — | 4m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.89% | 99.87% | 97.57% | 97.57% | — | → 1.02x | 3 | 0s | 26d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.89% | 99.66% | 50.15% | 50.15% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.89% | 99.71% | 99.34% | 99.34% | — | → 1.00x | 0 | — | — | 3m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.89% | 99.68% | 65.57% | 65.57% | — | → 1.05x | 0 | — | — | 3m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.89% | 99.63% | 96.32% | 96.32% | — | ↓ 0.92x | 0 | — | — | 3m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.89% | 99.74% | 5.16% | 5.16% | — | → 0.97x | 1 | 7d 1h | 30d ago | 3m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.89% | 96.80% | 17.31% | 17.31% | — | ↓ 0.76x | 0 | — | — | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.89% | 99.74% | 99.67% | 99.67% | — | ↑ 1.05x | 1 | 1d 4h | 24d ago | 3m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.89% | 99.76% | 84.58% | 84.58% | — | → 1.00x | 0 | — | — | 2m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.89% | 99.73% | 77.97% | 77.97% | — | ↑ 1.24x | 1 | 0s | 24d ago | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.89% | 99.79% | 83.46% | 83.46% | — | → 1.01x | 2 | 0s | 25d ago | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.89% | 99.84% | 71.79% | 71.79% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.89% | 99.55% | 82.26% | 82.26% | — | → 0.98x | 0 | — | — | 2m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.89% | 99.63% | 99.35% | 99.35% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.89% | 99.89% | 63.68% | 63.68% | — | → 0.96x | 0 | — | — | 2m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.89% | 99.81% | 31.33% | 31.33% | — | → 1.04x | 1 | 7d 1h | 30d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.89% | 78.68% | 98.16% | 98.16% | — | ↑ 1.07x | 0 | — | — | 10m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.89% | 99.81% | 99.97% | 99.97% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.89% | 99.68% | 99.87% | 99.87% | — | ↑ 1.49x | 0 | — | — | 10m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.89% | 99.68% | 99.51% | 99.51% | — | → 0.98x | 0 | — | — | 9m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.89% | 99.68% | 99.93% | 99.93% | — | → 1.02x | 1 | 0s | 25d ago | 10m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.89% | 99.73% | 99.94% | 99.94% | — | ↓ 0.95x | 0 | — | — | 9m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.89% | 99.81% | 93.73% | 93.73% | — | → 0.99x | 0 | — | — | 10m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.89% | 99.54% | 96.10% | 96.10% | — | ↓ 0.94x | 0 | — | — | 9m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.89% | 99.73% | 94.26% | 94.26% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.89% | 99.84% | 99.08% | 99.08% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.89% | 99.41% | 97.03% | 97.03% | — | → 0.98x | 0 | — | — | 57s ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.89% | 99.57% | 93.61% | 93.61% | — | → 0.98x | 1 | 1h | 25d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.89% | 99.84% | 97.00% | 97.00% | — | ↑ 1.11x | 0 | — | — | 1m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.89% | 99.73% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.89% | 99.79% | 99.86% | 99.86% | — | ↓ 0.73x | 0 | — | — | 57s ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.89% | 99.65% | 99.83% | 99.83% | — | ↑ 1.11x | 0 | — | — | 55s ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.89% | 99.73% | 99.94% | 99.94% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.89% | 99.71% | 91.09% | 91.09% | — | → 1.02x | 0 | — | — | 2m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.89% | 99.62% | 89.89% | 89.89% | — | → 1.02x | 1 | 0s | 24d ago | 8m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.89% | 99.76% | 0.00% | 0.00% | — | → 1.00x | 1 | 7d 1h | 30d ago | 8m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.89% | 99.76% | 98.73% | 98.73% | — | → 1.01x | 0 | — | — | 57s ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.89% | 99.70% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.89% | 99.89% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.89% | 99.39% | 76.90% | 76.90% | — | → 1.00x | 0 | — | — | 57s ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.89% | 99.68% | 98.74% | 98.74% | — | → 0.99x | 0 | — | — | 1m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.89% | 99.65% | 99.78% | 99.78% | — | ↑ 1.06x | 0 | — | — | 54s ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.89% | 99.78% | 99.61% | 99.61% | — | ↑ 1.31x | 0 | — | — | 7m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.89% | 99.70% | 99.97% | 99.97% | — | ↓ 0.91x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.89% | 99.78% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 8m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.89% | 99.73% | 99.93% | 99.93% | — | → 1.01x | 1 | 0s | 24d ago | 6m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.89% | 99.68% | 99.97% | 99.97% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.89% | 99.70% | 96.87% | 96.87% | — | → 1.01x | 0 | — | — | 7m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.89% | 99.65% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.89% | 99.76% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 7m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.89% | 99.70% | 99.48% | 99.48% | — | → 1.01x | 1 | 4m | 28d ago | 6m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.89% | 99.62% | — | — | — | → 1.04x | 0 | — | — | 7m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.89% | 98.35% | 39.41% | 39.41% | — | ↑ 1.10x | 5 | 12m | 25d ago | 7m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.89% | 99.84% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 6m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.89% | 99.76% | 98.47% | 98.47% | — | → 0.98x | 0 | — | — | 35s ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.89% | 99.52% | 99.74% | 99.74% | — | ↑ 1.14x | 0 | — | — | 11s ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.89% | 99.73% | 43.99% | 43.99% | — | → 1.00x | 1 | 7d 1h | 30d ago | 12s ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.89% | 99.73% | 29.98% | 29.98% | — | → 0.98x | 1 | 7d 1h | 30d ago | 14s ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.89% | 99.68% | 98.37% | 98.37% | — | → 0.96x | 0 | — | — | 12s ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.89% | 84.02% | 97.48% | 97.48% | — | → 0.98x | 1 | 0s | 24d ago | 12s ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.89% | 99.76% | 98.78% | 98.78% | — | ↑ 1.38x | 1 | 0s | 23d ago | 11s ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.78% | 99.69% | 99.98% | 99.98% | — | → 1.01x | 1 | 4m | 29d ago | 6m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.78% | 99.40% | 98.29% | 98.29% | — | → 1.00x | 0 | — | — | 6m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.78% | 99.66% | 75.23% | 75.23% | — | ↑ 1.10x | 1 | 6d 24h | 30d ago | 6m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.78% | 99.53% | 99.96% | 99.96% | — | → 1.03x | 0 | — | — | 5m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.78% | 99.63% | 99.65% | 99.65% | — | ↑ 1.73x | 0 | — | — | 6m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.78% | 99.69% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 6m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.78% | 99.74% | 70.89% | 70.89% | — | → 1.03x | 1 | 7d 1h | 30d ago | 6m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.78% | 99.61% | 99.58% | 99.58% | — | ↓ 0.91x | 2 | 0s | 26d ago | 5m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.78% | 99.53% | 95.68% | 95.68% | — | → 1.00x | 0 | — | — | 6m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.78% | 99.66% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 5m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.78% | 99.68% | 99.90% | 99.90% | — | → 0.98x | 0 | — | — | 5m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.78% | 99.74% | 99.58% | 99.58% | — | → 1.01x | 1 | 2h | 23d ago | 5m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.78% | 99.61% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 5m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.78% | 96.57% | 47.85% | 47.85% | — | → 1.01x | 1 | 7d 1h | 30d ago | 4m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.78% | 99.55% | 99.84% | 99.84% | — | ↑ 1.15x | 0 | — | — | 4m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.78% | 99.63% | 76.89% | 76.89% | — | ↑ 1.09x | 1 | 7d 1h | 30d ago | 4m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.78% | 99.60% | 99.87% | 99.87% | — | ↑ 1.21x | 1 | 0s | 25d ago | 4m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.78% | 99.58% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 24d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.78% | 99.53% | 99.62% | 99.62% | — | ↑ 1.16x | 1 | 0s | 25d ago | 4m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.78% | 99.76% | 99.98% | 99.98% | — | → 1.01x | 0 | — | — | 4m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.78% | 99.71% | 77.28% | 77.28% | — | → 0.99x | 1 | 7d 1h | 30d ago | 3m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.78% | 99.76% | 93.26% | 93.26% | — | → 1.01x | 0 | — | — | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.78% | 99.50% | 56.98% | 56.98% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.78% | 99.66% | 54.70% | 54.70% | — | → 1.02x | 0 | — | — | 3m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.78% | 99.65% | 62.65% | 62.65% | — | → 1.02x | 0 | — | — | 3m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.78% | 99.74% | 0.11% | 0.11% | — | → 0.99x | 1 | 7d 1h | 30d ago | 4m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.78% | 99.50% | 22.94% | 22.94% | — | → 0.97x | 0 | — | — | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.78% | 99.79% | 99.37% | 99.37% | — | → 1.02x | 0 | — | — | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.78% | 99.58% | 66.42% | 66.42% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.78% | 99.66% | 88.17% | 88.17% | — | → 1.02x | 1 | 7d 1h | 30d ago | 3m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.78% | 99.49% | 69.43% | 69.43% | — | → 1.00x | 0 | — | — | 2m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.78% | 99.63% | 81.07% | 81.07% | — | → 0.98x | 0 | — | — | 2m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.78% | 96.94% | 74.00% | 74.00% | — | ↑ 1.08x | 2 | 1h 30m | 27d ago | 2m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.78% | 99.68% | 97.87% | 97.87% | — | → 1.00x | 0 | — | — | 10m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.78% | 99.25% | 97.07% | 97.07% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.78% | 97.45% | 96.89% | 96.89% | — | ↑ 1.66x | 2 | 0s | 23d ago | 9m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.78% | 99.46% | 99.67% | 99.67% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.78% | 99.41% | 99.86% | 99.86% | — | → 1.02x | 0 | — | — | 10m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.78% | 99.68% | 100.00% | 100.00% | — | → 1.05x | 0 | — | — | 9m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.78% | 97.20% | 97.21% | 97.21% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.78% | 99.73% | 66.50% | 66.50% | — | ↑ 1.20x | 1 | 7d 1h | 30d ago | 1m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.78% | 99.17% | 28.39% | 28.39% | — | ↑ 1.78x | 1 | 7d 1h | 30d ago | 1m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.78% | 99.60% | 99.83% | 99.83% | — | → 0.97x | 0 | — | — | 1m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.78% | 99.76% | 99.31% | 99.31% | — | ↑ 2.06x | 0 | — | — | 2m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.78% | 99.70% | 0.00% | 0.00% | — | → 0.99x | 1 | 7d 1h | 30d ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.78% | 99.73% | 92.20% | 92.20% | — | → 1.02x | 2 | 0s | 27d ago | 55s ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.78% | 99.76% | 99.30% | 99.30% | — | ↑ 1.12x | 0 | — | — | 57s ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.78% | 99.49% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 8m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.78% | 99.67% | — | — | — | ↑ 1.24x | 0 | — | — | 6m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.78% | 99.68% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 8m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.78% | 99.43% | 99.09% | 99.09% | — | → 1.04x | 0 | — | — | 7m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.78% | 99.46% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 7m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.78% | 99.62% | 99.85% | 99.85% | — | → 1.04x | 1 | 3m | 25d ago | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.78% | 99.73% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 8m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.78% | 99.08% | 99.94% | 99.94% | — | ↑ 1.11x | 0 | — | — | 6m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.78% | 99.73% | 100.00% | 100.00% | — | → 0.95x | 0 | — | — | 7m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.78% | 99.48% | — | — | — | ↓ 0.93x | 0 | — | — | 6m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.78% | 99.62% | 99.89% | 99.89% | — | → 1.03x | 0 | — | — | 8m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.78% | 99.73% | 60.72% | 60.72% | — | ↓ 0.94x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.78% | 99.44% | 98.85% | 98.85% | — | ↑ 1.08x | 0 | — | — | 35s ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.78% | 99.63% | 86.85% | 86.85% | — | → 0.98x | 0 | — | — | 11s ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.67% | 99.69% | 36.33% | 36.33% | — | → 1.03x | 1 | 4m | 29d ago | 6m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.67% | 99.58% | 99.74% | 99.74% | — | ↑ 1.08x | 1 | 4s | 26d ago | 5m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.67% | 99.61% | 99.49% | 99.49% | — | ↑ 1.10x | 0 | — | — | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.67% | 99.69% | 99.28% | 99.28% | — | → 1.01x | 1 | 0s | 25d ago | 6m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.67% | 99.58% | 99.92% | 99.92% | — | → 0.98x | 1 | 0s | 23d ago | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.67% | 99.74% | 99.85% | 99.85% | — | → 0.96x | 0 | — | — | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.67% | 99.47% | 97.28% | 97.28% | — | → 0.99x | 0 | — | — | 3m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.67% | 99.39% | 38.65% | 38.65% | — | ↑ 1.05x | 1 | 7d 1h | 30d ago | 4m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.67% | 93.40% | 99.09% | 99.09% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.67% | 98.86% | 99.68% | 99.68% | — | → 1.04x | 0 | — | — | 3m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.67% | 98.86% | 2.34% | 2.34% | — | → 1.04x | 1 | 7d 1h | 30d ago | 3m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.67% | 99.60% | 99.48% | 99.48% | — | → 1.02x | 0 | — | — | 3m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.67% | 99.28% | 63.14% | 63.14% | — | ↑ 1.19x | 1 | 0s | 25d ago | 2m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.67% | 99.60% | 24.54% | 24.54% | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.67% | 99.50% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.67% | 99.65% | 64.92% | 64.92% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.67% | 99.73% | 99.61% | 99.61% | — | → 1.04x | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.67% | 98.94% | 98.88% | 98.88% | — | ↓ 0.67x | 0 | — | — | 2m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.67% | 99.49% | 99.71% | 99.71% | — | ↑ 1.10x | 1 | 0s | 25d ago | 10m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.67% | 99.60% | 99.34% | 99.34% | — | ↓ 0.95x | 3 | 0s | 24d ago | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.67% | 99.76% | 98.04% | 98.04% | — | → 1.00x | 0 | — | — | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.67% | 90.33% | 0.69% | 0.69% | — | ↑ 1.07x | 1 | 7d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.67% | 99.62% | 99.87% | 99.87% | — | ↑ 1.38x | 0 | — | — | 10m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.67% | 99.54% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 9m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.67% | 91.35% | 99.95% | 99.95% | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.67% | 99.71% | 96.69% | 96.69% | — | → 1.05x | 0 | — | — | 55s ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.67% | 99.52% | 98.66% | 98.66% | — | → 0.98x | 0 | — | — | 56s ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.67% | 99.76% | 58.17% | 58.17% | — | ↑ 1.84x | 1 | 7d 1h | 30d ago | 1m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.67% | 99.79% | 89.57% | 89.57% | — | ↑ 1.08x | 0 | — | — | 1m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.67% | 99.71% | 98.90% | 98.90% | — | ↑ 1.11x | 0 | — | — | 1m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.67% | 99.62% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 8m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.67% | 98.92% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 7m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.67% | 99.60% | 16.67% | 16.67% | — | ↑ 1.09x | 1 | 7d 1h | 30d ago | 8m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.67% | 99.68% | 99.98% | 99.98% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.67% | 99.65% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.67% | 99.68% | 64.61% | 64.61% | — | → 1.01x | 1 | 3d 7h | 30d ago | 34s ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.67% | 99.49% | 98.11% | 98.11% | — | ↑ 1.07x | 0 | — | — | 34s ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.67% | 99.81% | 98.81% | 98.81% | — | → 1.04x | 0 | — | — | 14s ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.67% | 99.52% | 97.80% | 97.80% | — | ↓ 0.89x | 0 | — | — | 11s ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.67% | 99.57% | 28.78% | 28.78% | — | ↑ 1.12x | 1 | 7d 1h | 30d ago | 11s ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.56% | 97.41% | 93.57% | 93.57% | — | ↑ 1.08x | 1 | 4m | 29d ago | 6m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.56% | 99.58% | 99.73% | 99.73% | — | ↓ 0.89x | 0 | — | — | 5m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.56% | 99.63% | 98.93% | 98.93% | — | ↑ 1.14x | 1 | 0s | 26d ago | 6m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.56% | 99.68% | 22.33% | 22.33% | — | ↓ 0.92x | 1 | 7d 1h | 30d ago | 5m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.56% | 99.60% | 99.92% | 99.92% | — | → 0.96x | 1 | 0s | 25d ago | 4m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.56% | 99.42% | 97.94% | 97.94% | — | → 1.02x | 1 | 0s | 28d ago | 3m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.56% | 99.10% | 99.76% | 99.76% | — | → 1.03x | 0 | — | — | 4m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.56% | 99.50% | 22.30% | 22.30% | — | → 0.98x | 1 | 0s | 25d ago | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.56% | 99.68% | 99.90% | 99.90% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.56% | 86.04% | 99.03% | 99.03% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.56% | 99.52% | 24.91% | 24.91% | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.56% | 99.74% | 99.95% | 99.95% | — | → 1.01x | 0 | — | — | 3m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.56% | 98.15% | 98.75% | 98.75% | — | → 0.98x | 3 | 46s | 28d ago | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.56% | 99.36% | 93.06% | 93.06% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.56% | 98.50% | 32.93% | 32.93% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.56% | 99.68% | 99.18% | 99.18% | — | ↑ 1.14x | 0 | — | — | 1m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.56% | 99.73% | 90.32% | 90.32% | — | → 1.04x | 0 | — | — | 2m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.56% | 99.68% | 43.48% | 43.48% | — | → 0.96x | 1 | 7d 1h | 30d ago | 54s ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.56% | 99.76% | 99.89% | 99.89% | — | ↓ 0.92x | 0 | — | — | 1m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.56% | 99.38% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.56% | 99.57% | 99.76% | 99.76% | — | → 1.03x | 0 | — | — | 8m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.56% | 98.81% | 99.34% | 99.34% | — | ↑ 1.09x | 2 | 0s | 25d ago | 6m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.56% | 99.70% | 24.52% | 24.52% | — | ↑ 1.23x | 1 | 7d 1h | 30d ago | 8m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.56% | 99.73% | 98.72% | 98.72% | — | → 1.00x | 0 | — | — | 7m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.56% | 99.65% | 99.98% | 99.98% | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.56% | 99.41% | 100.00% | 100.00% | — | ↑ 1.51x | 0 | — | — | 7m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.56% | 91.63% | 96.14% | 96.14% | — | ↑ 1.06x | 3 | 13h 21m | 25d ago | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.56% | 99.38% | 99.94% | 99.94% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.56% | 99.49% | 99.76% | 99.76% | — | → 0.99x | 0 | — | — | 34s ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.56% | 99.55% | 55.08% | 55.08% | — | ↑ 1.21x | 4 | 0s | 24d ago | 34s ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.56% | 98.93% | 83.10% | 83.10% | — | ↑ 1.05x | 0 | — | — | 13s ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.45% | 99.61% | 98.78% | 98.78% | — | → 0.98x | 1 | 0s | 29d ago | 6m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.45% | 99.66% | 99.94% | 99.94% | — | ↓ 0.88x | 0 | — | — | 5m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.45% | 99.42% | 99.62% | 99.62% | — | → 1.04x | 0 | — | — | 6m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.45% | 66.95% | 0.00% | 0.00% | — | ↓ 0.43x | 1 | 6d 24h | 30d ago | 6m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.45% | 99.50% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 4m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.45% | 79.41% | 0.11% | 0.11% | — | ↑ 2.65x | 1 | 7d 1h | 30d ago | 3m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.45% | 97.56% | 26.84% | 26.84% | — | ↓ 0.89x | 0 | — | — | 3m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.45% | 99.34% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 3m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.45% | 97.99% | 98.93% | 98.93% | — | ↑ 1.07x | 1 | 0s | 29d ago | 3m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.45% | 99.66% | 30.20% | 30.20% | — | ↑ 1.06x | 1 | 7d 1h | 30d ago | 3m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.45% | 99.39% | 24.53% | 24.53% | — | → 1.02x | 0 | — | — | 3m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.45% | 99.44% | 99.79% | 99.79% | — | ↓ 0.94x | 3 | 0s | 24d ago | 3m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.45% | 99.63% | 99.88% | 99.88% | — | → 1.02x | 0 | — | — | 2m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.45% | 99.44% | 69.87% | 69.87% | — | → 1.03x | 2 | 0s | 26d ago | 2m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.45% | 92.75% | 92.56% | 92.56% | — | ↓ 0.79x | 6 | 40m | 24d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.45% | 98.63% | 90.79% | 90.79% | — | ↑ 1.06x | 1 | 0s | 25d ago | 10m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.45% | 99.57% | 97.90% | 97.90% | — | ↑ 1.57x | 0 | — | — | 1m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.45% | 99.49% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 8m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.45% | 99.68% | 99.67% | 99.67% | — | ↑ 1.22x | 1 | 0s | 26d ago | 6m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.45% | 99.25% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.45% | 99.46% | 100.00% | 100.00% | — | ↓ 0.84x | 0 | — | — | 11s ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.45% | 99.54% | 96.94% | 96.94% | — | → 0.98x | 1 | 0s | 25d ago | 11s ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.41% | 99.41% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.34% | 99.48% | 99.75% | 99.75% | — | → 1.01x | 0 | — | — | 6m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.34% | 99.45% | 99.60% | 99.60% | — | → 1.02x | 1 | 2s | 25d ago | 6m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.34% | 99.63% | 99.76% | 99.76% | — | → 1.02x | 0 | — | — | 6m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.34% | 49.99% | 5.08% | 5.08% | — | → 0.99x | 1 | 7d 1h | 30d ago | 5m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.34% | 98.05% | 98.78% | 98.78% | — | ↓ 0.78x | 1 | 0s | 25d ago | 4m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.34% | 98.35% | 38.36% | 38.36% | — | → 0.97x | 0 | — | — | 3m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.34% | 99.02% | 74.11% | 74.11% | — | → 1.01x | 1 | 1h | 24d ago | 2m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.34% | 99.70% | 98.47% | 98.47% | — | ↑ 1.22x | 0 | — | — | 10m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.34% | 99.63% | 99.00% | 99.00% | — | ↑ 2.17x | 0 | — | — | 1m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.34% | 99.60% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 54s ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.34% | 99.22% | 97.74% | 97.74% | — | ↑ 1.08x | 1 | 16h 52m | 24d ago | 33s ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.34% | 98.77% | 98.83% | 98.83% | — | → 1.01x | 0 | — | — | 11s ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.34% | 99.63% | 98.69% | 98.69% | — | → 1.05x | 0 | — | — | 11s ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.24% | 96.61% | 96.43% | 96.43% | — | ↑ 1.09x | 3 | 15h 40m | 23d ago | 5m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.23% | 98.49% | 57.00% | 57.00% | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.23% | 99.20% | 31.58% | 31.58% | — | → 1.02x | 1 | 7d 1h | 30d ago | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.23% | 99.24% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 8m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.13% | 99.27% | 99.61% | 99.61% | — | → 1.03x | 0 | — | — | 6m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.13% | 99.42% | 99.74% | 99.74% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.12% | 87.23% | 85.28% | 85.28% | — | ↓ 0.95x | 0 | — | — | 3m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.12% | 99.23% | 98.16% | 98.16% | — | ↓ 0.94x | 0 | — | — | 54s ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.11% | 99.11% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.01% | 97.63% | 99.27% | 99.27% | — | ↑ 1.71x | 0 | — | — | 2m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.01% | 99.33% | 14.21% | 14.21% | — | ↑ 1.95x | 1 | 7d 1h | 30d ago | 9m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.01% | 98.92% | 98.88% | 98.88% | — | → 1.05x | 1 | 0s | 24d ago | 9m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.01% | 99.57% | 26.43% | 26.43% | — | ↑ 1.12x | 0 | — | — | 54s ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.01% | 99.51% | 100.00% | 100.00% | — | ↑ 1.15x | 0 | — | — | 7m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (86)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.91% | 98.87% | 51.42% | 51.42% | — | ↑ 1.41x | 1 | 0s | 28d ago | 5m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.89% | 98.69% | 98.12% | 98.12% | — | ↑ 1.35x | 0 | — | — | 34s ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.79% | 99.18% | 24.43% | 24.43% | — | ↓ 0.68x | 0 | — | — | 3m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 98.78% | 99.64% | — | — | — | ↑ 1.60x | 0 | — | — | 7m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.69% | 98.93% | 99.85% | 99.85% | — | → 1.03x | 0 | — | — | 6m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.58% | 97.79% | 89.02% | 89.02% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.57% | 91.83% | 87.87% | 87.87% | — | → 1.04x | 0 | — | — | 8m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.46% | 95.92% | 99.82% | 99.82% | — | → 1.01x | 0 | — | — | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.23% | 99.25% | 95.85% | 95.85% | — | ↑ 1.29x | 0 | — | — | 11s ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.12% | 97.86% | 66.05% | 66.05% | — | ↑ 1.11x | 7 | 19h 32m | 28d ago | 11s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.01% | 98.05% | 99.10% | 99.10% | — | ↓ 0.59x | 0 | — | — | 56s ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 97.91% | 98.75% | 81.53% | 81.53% | — | ↑ 1.17x | 0 | — | — | 2m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 97.90% | 99.22% | 99.77% | 99.77% | — | ↑ 1.19x | 1 | 0s | 25d ago | 7m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 97.79% | 91.78% | 77.59% | 77.59% | — | ↓ 0.46x | 0 | — | — | 1m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 97.79% | 99.03% | 99.85% | 99.85% | — | ↑ 1.37x | 1 | 6h 1m | 24d ago | 8m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 97.71% | 98.90% | 99.56% | 99.56% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.67% | 96.65% | 98.02% | 98.02% | — | ↑ 1.47x | 0 | — | — | 11s ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.46% | 97.01% | 97.85% | 97.85% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 97.35% | 98.43% | 99.82% | 99.82% | — | ↑ 1.25x | 0 | — | — | 1m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 97.24% | 88.15% | 99.61% | 99.61% | — | → 0.98x | 2 | 0s | 23d ago | 8m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.02% | 98.73% | 99.97% | 99.97% | — | ↑ 1.14x | 0 | — | — | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 96.93% | 97.02% | 83.18% | 83.18% | — | ↑ 1.86x | 1 | 3m | 29d ago | 2m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.62% | 99.11% | 99.74% | 99.74% | — | → 0.99x | 2 | 0s | 24d ago | 6m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 96.57% | 98.41% | 88.31% | 88.31% | — | ↓ 0.71x | 0 | — | — | 7m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 96.24% | 98.62% | 99.88% | 99.88% | — | ↑ 1.30x | 0 | — | — | 7m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 96.02% | 98.76% | 91.90% | 91.90% | — | → 0.98x | 0 | — | — | 7m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 95.48% | 98.18% | 97.10% | 97.10% | — | → 0.97x | 0 | — | — | 10m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 95.04% | 90.98% | 95.25% | 95.25% | — | ↑ 1.12x | 10 | 1h 18m | 25d ago | 9m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.60% | 95.04% | 97.00% | 97.00% | — | → 1.00x | 1 | 0s | 26d ago | 10m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 94.32% | 81.77% | 67.23% | 67.23% | — | ↑ 1.26x | 1 | 6d 24h | 30d ago | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 93.78% | 77.58% | 94.11% | 94.11% | — | → 1.00x | 3 | 7h 1m | 26d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 92.60% | 97.84% | 56.85% | 56.85% | — | ↑ 1.06x | 0 | — | — | 56s ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 91.05% | 83.65% | 98.89% | 98.89% | — | ↑ 1.24x | 0 | — | — | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 91.01% | 84.36% | 69.98% | 69.98% | — | ↑ 1.12x | 0 | — | — | 4m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.62% | 89.41% | 78.01% | 78.01% | — | ↑ 1.08x | 2 | 2m | 25d ago | 6m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 87.68% | 77.03% | 54.05% | 54.05% | — | ↑ 1.37x | 1 | 6d 24h | 30d ago | 6m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 87.31% | 76.63% | 83.85% | 83.85% | — | ↑ 1.62x | 1 | 0s | 29d ago | 1m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 85.87% | 80.89% | 87.06% | 87.06% | — | ↑ 1.24x | 0 | — | — | 1m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 85.51% | 83.57% | — | — | — | → 1.04x | 0 | — | — | 6m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.87% | 81.82% | 98.45% | 98.45% | — | → 1.02x | 4 | 0s | 25d ago | 3m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 84.84% | 78.67% | 75.11% | 75.11% | — | ↑ 1.61x | 1 | 6d 24h | 30d ago | 6m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 84.84% | 78.28% | 66.07% | 66.07% | — | ↑ 1.62x | 1 | 6d 24h | 30d ago | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 84.55% | 79.00% | 48.46% | 48.46% | — | ↑ 1.19x | 1 | 7d 1h | 30d ago | 1m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 84.44% | 93.22% | 96.18% | 96.18% | — | ↑ 1.07x | 0 | — | — | 1m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 84.33% | 53.35% | 78.42% | 78.42% | — | ↑ 1.17x | 1 | 7d 1h | 30d ago | 8m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 84.11% | 79.72% | 10.72% | 10.72% | — | ↑ 1.19x | 1 | 7d 1h | 30d ago | 1m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 83.44% | 83.74% | 68.13% | 68.13% | — | ↑ 1.05x | 1 | 7d 1h | 30d ago | 3m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 81.93% | 39.39% | 40.01% | 40.01% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 81.77% | 85.19% | 75.72% | 75.72% | — | ↑ 1.05x | 1 | 7d 1h | 30d ago | 5m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 81.03% | 77.76% | 68.41% | 68.41% | — | → 1.05x | 1 | 6d 24h | 30d ago | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 80.70% | 77.72% | 99.65% | 99.65% | — | → 1.03x | 0 | — | — | 3m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 80.70% | 70.99% | 50.52% | 50.52% | — | ↓ 0.91x | 85 | 24m | 24d ago | 6m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 80.26% | 76.82% | 98.92% | 98.92% | — | ↑ 1.12x | 1 | 0s | 29d ago | 6m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 80.15% | 75.68% | 86.83% | 86.83% | — | ↑ 1.33x | 1 | 0s | 30d ago | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 80.13% | 70.15% | 64.20% | 64.20% | — | → 0.96x | 1 | 0s | 27d ago | 6m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 80.02% | 77.45% | 44.62% | 44.62% | — | ↑ 1.10x | 1 | 6d 10h | 30d ago | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 79.96% | 76.26% | 86.29% | 86.29% | — | ↑ 1.35x | 2 | 0s | 25d ago | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 79.93% | 80.83% | 63.15% | 63.15% | — | ↑ 1.06x | 37 | 0s | 25d ago | 4m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 79.91% | 84.30% | 99.09% | 99.09% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 79.45% | 79.94% | 96.32% | 96.32% | — | → 1.05x | 20 | 0s | 26d ago | 5m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 78.74% | 72.74% | 91.98% | 91.98% | — | ↑ 1.14x | 2 | 2m | 25d ago | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 78.71% | 74.38% | 99.93% | 99.93% | — | ↑ 2.75x | 0 | — | — | 6m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 77.95% | 83.54% | 99.78% | 99.78% | — | ↑ 1.56x | 0 | — | — | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 77.85% | 76.93% | 88.70% | 88.70% | — | ↑ 1.33x | 1 | 6h | 23d ago | 34s ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 77.51% | 84.33% | 99.92% | 99.92% | — | ↑ 1.08x | 0 | — | — | 5m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 77.26% | 74.68% | 93.16% | 93.16% | — | → 1.02x | 1 | 0s | 28d ago | 1m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 77.24% | 73.20% | 85.02% | 85.02% | — | ↑ 1.19x | 2 | 0s | 26d ago | 54s ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 77.18% | 76.87% | 99.77% | 99.77% | — | ↑ 1.32x | 0 | — | — | 6m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 76.18% | 71.63% | 69.01% | 69.01% | — | → 1.01x | 0 | — | — | 2m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 76.13% | 75.38% | 6.48% | 6.48% | — | → 1.02x | 1 | 7d 1h | 30d ago | 8m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 75.50% | 32.37% | 97.75% | 97.75% | — | → 1.02x | 2 | 0s | 24d ago | 1m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 73.57% | 75.69% | 54.78% | 54.78% | — | ↑ 1.06x | 1 | 7d 1h | 30d ago | 4m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 73.15% | 75.62% | 98.53% | 98.53% | — | ↑ 1.07x | 2 | 0s | 24d ago | 8m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 71.51% | 76.71% | 93.77% | 93.77% | — | → 1.01x | 0 | — | — | 5m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 71.27% | 73.32% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 7m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 70.64% | 72.59% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 68.07% | 77.89% | 82.00% | 82.00% | — | ↑ 1.12x | 28 | 4m | 25d ago | 7m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 65.87% | 60.69% | 52.45% | 52.45% | — | → 1.02x | 1 | 6d 24h | 30d ago | 6m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 61.77% | 90.30% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 59.02% | 58.18% | 98.87% | 98.87% | — | ↑ 1.34x | 0 | — | — | 5m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 56.69% | 65.74% | 99.88% | 99.88% | — | ↑ 1.47x | 0 | — | — | 7m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 56.46% | 57.71% | 98.37% | 98.37% | — | ↑ 2.74x | 3 | 3m | 27d ago | 7m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 53.18% | 61.16% | 75.15% | 75.15% | — | → 1.04x | 1 | 7d 1h | 30d ago | 3m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 43.25% | 10.77% | 27.04% | 27.04% | — | → 0.97x | 1 | 7d 1h | 30d ago | 2m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 15.32% | 76.55% | 76.88% | 76.88% | — | ↑ 1.31x | 1 | 7d 1h | 30d ago | 5m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 14.68% | 26.49% | 98.24% | 98.24% | — | ↑ 2.34x | 0 | — | — | 1m ago |

</details>

<details open>
<summary><strong>🔴 Down (308)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.89% | 99.57% | 90.95% | 90.95% | — | ↑ 1.13x | 0 | — | — | 1m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.78% | 76.46% | 100.00% | 100.00% | — | ↑ 1.13x | 0 | — | — | 7m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.78% | 99.78% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.67% | 99.44% | 98.95% | 98.95% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.45% | 99.45% | — | — | — | ↓ 0.89x | 0 | — | — | 6m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.17% | 99.17% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 97.90% | 98.34% | — | — | — | → 1.03x | 0 | — | — | 6m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 94.52% | 96.00% | 98.12% | 98.12% | — | ↑ 1.25x | 0 | — | — | 3m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 91.73% | 97.56% | 84.75% | 84.75% | — | → 1.04x | 1 | 0s | 29d ago | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 91.61% | 97.74% | 100.00% | 100.00% | — | ↑ 1.22x | 0 | — | — | 8m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 86.83% | 96.35% | 89.40% | 89.40% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 79.54% | 86.66% | — | — | — | ↑ 1.46x | 0 | — | — | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 77.85% | 75.76% | 96.79% | 96.79% | — | ↑ 1.43x | 0 | — | — | 3m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 77.21% | 29.45% | 46.51% | 46.51% | — | ↓ 0.87x | 0 | — | — | 15s ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 76.97% | 77.55% | 86.23% | 86.23% | — | ↑ 1.10x | 1 | 0s | 29d ago | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 73.24% | 93.26% | 6.05% | 6.05% | — | ↑ 1.24x | 1 | 7d 1h | 30d ago | 9m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 52.82% | 72.49% | 99.06% | 99.06% | — | ↑ 1.22x | 1 | 0s | 25d ago | 6m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 40.00% | 28.59% | 99.82% | 99.82% | — | → 1.04x | 2 | 2m | 27d ago | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 31.09% | 17.91% | 25.44% | 25.44% | — | → 1.02x | 2 | 2d 20h | 25d ago | 10m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 28.40% | 67.27% | 97.23% | 97.23% | — | ↑ 1.59x | 4 | 0s | 26d ago | 6m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 25.66% | 15.73% | 22.80% | 22.80% | — | ↓ 0.75x | 0 | — | — | 3m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 8.28% | 2.77% | 87.63% | 87.63% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 6.63% | 76.89% | — | — | — | → 1.03x | 0 | — | — | 7m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 5.08% | 57.78% | 91.43% | 91.43% | — | ↑ 1.75x | 0 | — | — | 7m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 3.19% | 4.54% | 7.76% | 7.76% | — | → 1.02x | 1 | 7d 1h | 30d ago | 9m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.22% | 1.03% | 0.10% | 0.10% | — | ↓ 0.42x | 1 | 7d 1h | 30d ago | 3m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.11% | 0.40% | 34.65% | 34.65% | — | ↑ 1.48x | 0 | — | — | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.11% | 1.44% | 44.99% | 44.99% | — | ↑ 9.86x | 0 | — | — | 2m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.29% | 63.31% | 63.31% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.29% | 59.84% | 59.84% | — | — | 2 | 60m | 24d ago | 1m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.29% | 70.78% | 70.78% | — | — | 3 | 2d 6h | 23d ago | 1m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.29% | 52.44% | 52.44% | — | — | 1 | 7d 1h | 30d ago | 55s ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.29% | 5.20% | 5.20% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.29% | 10.24% | 10.24% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.24% | 88.73% | 88.73% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.30% | 99.82% | 99.82% | — | — | 1 | 7h | 24d ago | 8m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.29% | 47.31% | 47.31% | — | — | 1 | 7d 1h | 30d ago | 14s ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.30% | 73.96% | 73.96% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.29% | 74.22% | 74.22% | — | — | 1 | 6d 15h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.29% | 3.13% | 3.13% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.32% | 79.86% | 79.86% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.29% | 40.15% | 40.15% | — | — | 0 | — | — | 3m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.29% | 33.64% | 33.64% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 29.91% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.30% | 99.65% | 99.65% | — | — | 2 | 30m | 25d ago | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.27% | 90.14% | 90.14% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.29% | 85.33% | 85.33% | — | — | 95 | 33m | 25d ago | 14s ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.29% | 83.66% | 83.66% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.29% | 21.09% | 21.09% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.29% | 84.65% | 84.65% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.29% | 75.27% | 75.27% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.29% | 57.88% | 57.88% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.29% | 70.96% | 70.96% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.29% | 19.82% | 19.82% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.37% | 83.11% | 83.11% | — | — | 2 | 2d 24h | 28d ago | 10m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.29% | 13.15% | 13.15% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 16.10% | 44.49% | 44.49% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.29% | 87.39% | 87.39% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.29% | 30.30% | 30.30% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.24% | 99.75% | 99.75% | — | — | 1 | 0s | 24d ago | 6m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 53.24% | 68.70% | 68.70% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.29% | 78.14% | 78.14% | — | — | 96 | 13m | 24d ago | 3m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.29% | 98.15% | 98.15% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.29% | 78.64% | 78.64% | — | — | 1 | 7d 1h | 30d ago | 15s ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.29% | 3.12% | 3.12% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.29% | 32.40% | 32.40% | — | — | 1 | 4d 12h | 27d ago | 4m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.24% | 76.21% | 76.21% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.30% | 72.40% | 72.40% | — | — | 1 | 7d 1h | 30d ago | 7m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.29% | 48.90% | 48.90% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.30% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 27d ago | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 58.63% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.29% | 31.88% | 31.88% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.24% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 24d ago | 8m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.24% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.29% | 84.44% | 84.44% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.30% | 32.34% | 32.34% | — | — | 1 | 7d 1h | 30d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.32% | 64.69% | 64.69% | — | — | 1 | 7d 1h | 30d ago | 35s ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.29% | 46.41% | 46.41% | — | — | 2 | 3d 11h | 24d ago | 2m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.29% | 50.25% | 50.25% | — | — | 0 | — | — | 4m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.29% | 96.06% | 96.06% | — | — | 1 | 3d 6h | 26d ago | 4m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.30% | 69.29% | 69.29% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.30% | 39.40% | 39.40% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.29% | 64.35% | 64.35% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.29% | 26.33% | 26.33% | — | — | 1 | 7d 1h | 30d ago | 35s ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 24.48% | 93.54% | 93.54% | — | — | 1 | 0s | 26d ago | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.24% | 98.70% | 98.70% | — | — | 0 | — | — | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.29% | 50.43% | 50.43% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.24% | 75.41% | 75.41% | — | — | 64 | 1h 6m | 23d ago | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.29% | 22.07% | 22.07% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.29% | 98.37% | 98.37% | — | — | 0 | — | — | 1m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.27% | 32.48% | 32.48% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.30% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.30% | 48.30% | 48.30% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.29% | 46.73% | 46.73% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.29% | 21.32% | 21.32% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.30% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.29% | 4.63% | 4.63% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.29% | 60.67% | 60.67% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.30% | 99.92% | 99.92% | — | — | 0 | — | — | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.29% | 68.44% | 68.44% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.24% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.24% | 98.40% | 98.40% | — | — | 0 | — | — | 7m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.29% | 99.74% | 99.74% | — | — | 0 | — | — | 6m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 57s ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.29% | 5.52% | 5.52% | — | — | 1 | 7d 1h | 30d ago | 34s ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.29% | 81.13% | 81.13% | — | — | 0 | — | — | 54s ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.29% | 73.53% | 73.53% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.29% | 74.18% | 74.18% | — | — | 1 | 7d | 30d ago | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.29% | 99.84% | 99.84% | — | — | 0 | — | — | 6m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 13s ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.30% | 99.89% | 99.89% | — | — | 1 | 3m | 26d ago | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.29% | 83.98% | 83.98% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.29% | 20.14% | 20.14% | — | — | 1 | 7d 1h | 30d ago | 14s ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.30% | 99.95% | 99.95% | — | — | 0 | — | — | 8m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.29% | 48.81% | 48.81% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.29% | 83.92% | 83.92% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.30% | 67.73% | 67.73% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.24% | 83.84% | 83.84% | — | — | 4 | 16m | 28d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.30% | 74.74% | 74.74% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.29% | 47.90% | 47.90% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.30% | 99.25% | 99.25% | — | — | 0 | — | — | 9m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.24% | 91.99% | 91.99% | — | — | 0 | — | — | 9m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.29% | 22.80% | 22.80% | — | — | 0 | — | — | 3m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.24% | 98.05% | 98.05% | — | — | 1 | 0s | 24d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.29% | 55.75% | 55.75% | — | — | 1 | 7d 1h | 30d ago | 35s ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.03% | — | — | — | — | 0 | — | — | 6m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.24% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 25d ago | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.29% | 43.20% | 43.20% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.24% | 16.44% | 16.44% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.29% | 39.16% | 39.16% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.29% | 74.31% | 74.31% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.30% | 20.55% | 20.55% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.29% | 54.39% | 54.39% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.30% | 75.74% | 75.74% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.29% | 35.55% | 35.55% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.29% | 65.91% | 65.91% | — | — | 1 | 7d 1h | 30d ago | 57s ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.24% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.29% | 70.74% | 70.74% | — | — | 3 | 2d 6h | 23d ago | 1m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.29% | 34.00% | 34.00% | — | — | 2 | 30m | 27d ago | 4m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.29% | 62.39% | 62.39% | — | — | 1 | 7d 1h | 30d ago | 12s ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.29% | 45.59% | 45.59% | — | — | 0 | — | — | 6m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.29% | 76.99% | 76.99% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.29% | 38.64% | 38.64% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.29% | 22.32% | 22.32% | — | — | 0 | — | — | 5m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.29% | 90.53% | 90.53% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.30% | 91.04% | 91.04% | — | — | 1 | 3d 23h | 27d ago | 8m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.29% | 42.69% | 42.69% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.29% | 39.95% | 39.95% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.24% | 99.29% | 99.29% | — | — | 0 | — | — | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.29% | 24.01% | 24.01% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 14s ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.29% | 81.34% | 81.34% | — | — | 1 | 3h | 27d ago | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.29% | 73.32% | 73.32% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.29% | 2.87% | 2.87% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.29% | 49.45% | 49.45% | — | — | 0 | — | — | 57s ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.29% | 39.57% | 39.57% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.29% | 20.82% | 20.82% | — | — | 39 | 10m | 23d ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.29% | 23.09% | 23.09% | — | — | 1 | 0s | 29d ago | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.30% | 20.58% | 20.58% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.24% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.30% | 33.55% | 33.55% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.29% | 52.99% | 52.99% | — | — | 1 | 7d 1h | 30d ago | 35s ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.29% | 82.46% | 82.46% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 75.45% | 99.80% | 99.80% | — | — | 0 | — | — | 5m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.29% | 92.62% | 92.62% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.29% | 23.25% | 23.25% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.29% | 27.77% | 27.77% | — | — | 23 | 13m | 26d ago | 2m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.29% | 86.17% | 86.17% | — | — | 1 | 10s | 29d ago | 4m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.24% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.29% | 49.10% | 49.10% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.29% | 86.30% | 86.30% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.29% | 65.07% | 65.07% | — | — | 1 | 7d 1h | 30d ago | 15s ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.29% | 99.12% | 99.12% | — | — | 1 | 11h 60m | 23d ago | 4m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.29% | 92.19% | 92.19% | — | — | 1 | 7d 1h | 30d ago | 54s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.24% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.29% | 99.26% | 99.26% | — | — | 0 | — | — | 3m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.29% | 99.77% | 99.77% | — | — | 0 | — | — | 6m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.29% | 16.23% | 16.23% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.29% | 45.98% | 45.98% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.29% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 23d ago | 54s ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.30% | 98.92% | 98.92% | — | — | 0 | — | — | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.29% | 46.05% | 46.05% | — | — | 1 | 7d 1h | 30d ago | 57s ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.30% | 16.77% | 16.77% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.00% | 63.40% | 98.59% | 98.59% | — | — | 11 | 6m | 25d ago | 8m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.29% | 51.26% | 51.26% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.29% | 35.56% | 35.56% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.29% | 19.49% | 19.49% | — | — | 1 | 7d 1h | 30d ago | 35s ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.30% | 99.81% | 99.81% | — | — | 0 | — | — | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.29% | 72.39% | 72.39% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.29% | 83.68% | 83.68% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.29% | 26.68% | 26.68% | — | — | 0 | — | — | 3m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.30% | 46.80% | 46.80% | — | — | 1 | 7d 1h | 30d ago | 7m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.29% | 75.88% | 75.88% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.26% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.29% | 22.72% | 22.72% | — | — | 1 | 5d 15h | 29d ago | 3m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.29% | 68.72% | 68.72% | — | — | 1 | 7d 1h | 30d ago | 6m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.29% | 18.10% | 18.10% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.29% | 54.28% | 54.28% | — | — | 1 | 6d 24h | 30d ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.29% | 35.49% | 35.49% | — | — | 1 | 7d 1h | 30d ago | 30s ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.29% | 3.84% | 3.84% | — | — | 2 | 3d 6h | 24d ago | 4m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.29% | 63.55% | 63.55% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.29% | 23.11% | 23.11% | — | — | 0 | — | — | 5m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.24% | 99.60% | 99.60% | — | — | 0 | — | — | 8m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.29% | 22.23% | 22.23% | — | — | 1 | 7d 1h | 30d ago | 1m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.29% | 6.70% | 6.70% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.30% | 22.60% | 22.60% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.29% | 62.64% | 62.64% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.30% | 30.92% | 30.92% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.30% | 68.76% | 68.76% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.24% | 3.80% | 3.80% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.30% | 44.20% | 44.20% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.30% | 38.02% | 38.02% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.29% | 17.16% | 17.16% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.29% | 10.15% | 10.15% | — | — | 1 | 7d 1h | 30d ago | 55s ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.27% | 23.40% | 23.40% | — | — | 10 | 6m | 26d ago | 3m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.29% | 99.53% | 99.53% | — | — | 0 | — | — | 6m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.29% | 16.69% | 16.69% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.29% | 21.71% | 21.71% | — | — | 28 | 2h 28m | 23d ago | 4m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.29% | 14.75% | 14.75% | — | — | 1 | 7d 1h | 30d ago | 15s ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.30% | 25.49% | 25.49% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.29% | 8.99% | 8.99% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 14.77% | 92.86% | 92.86% | — | — | 3 | 0s | 23d ago | 15s ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.30% | 3.93% | 3.93% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.30% | 4.55% | 4.55% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.29% | 46.30% | 46.30% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.30% | 76.63% | 76.63% | — | — | 1 | 7d 1h | 30d ago | 7m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.24% | 32.96% | 32.96% | — | — | 0 | — | — | 4m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.30% | 36.28% | 36.28% | — | — | 1 | 7d 1h | 30d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.29% | 98.48% | 98.48% | — | — | 0 | — | — | 1m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.29% | 63.49% | 63.49% | — | — | 1 | 7d 1h | 30d ago | 34s ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.29% | 40.17% | 40.17% | — | — | 1 | 7d 1h | 30d ago | 54s ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.29% | 77.23% | 77.23% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.29% | 43.61% | 43.61% | — | — | 1 | 7d 1h | 30d ago | 10m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.29% | 23.13% | 23.13% | — | — | 0 | — | — | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.29% | 0.01% | 0.01% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.29% | 22.68% | 22.68% | — | — | 0 | — | — | 3m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.29% | 60.97% | 60.97% | — | — | 19 | 0s | 25d ago | 13s ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 3m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.29% | 38.37% | 38.37% | — | — | 1 | 7d 1h | 30d ago | 5m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.30% | 1.35% | 1.35% | — | — | 1 | 7d 1h | 30d ago | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.29% | 17.59% | 17.59% | — | — | 1 | 7d 1h | 30d ago | 2m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.29% | 91.72% | 91.72% | — | — | 21 | 0s | 23d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.30% | 99.77% | 99.77% | — | — | 2 | 2m | 24d ago | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.29% | 99.17% | 99.17% | — | — | 0 | — | — | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.29% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 4m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.30% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | 8m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 7d 1h | 30d ago | — |

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
