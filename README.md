# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**716 providers** — 287 🟢 operational · 83 🟡 degraded · 344 🔴 down · 2 ⚫ unknown

_Updated 2026-09-03 07:54 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (287)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.70% | 97.00% | 97.00% | — | ↑ 1.24x | 0 | — | — | 8m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.28% | 99.87% | 99.87% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.85% | 98.56% | 98.56% | — | ↓ 0.77x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.91% | 97.57% | 97.57% | — | ↑ 1.15x | 0 | — | — | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.85% | 97.00% | 97.00% | — | → 0.98x | 0 | — | — | 9m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 99.64% | 98.72% | 98.72% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.85% | 93.26% | 93.26% | — | ↑ 1.23x | 0 | — | — | 10m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.85% | 77.97% | 77.97% | — | ↑ 1.32x | 0 | — | — | 10m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.40% | 83.46% | 83.46% | — | ↑ 1.11x | 0 | — | — | 10m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.85% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.97% | 99.96% | 99.96% | — | → 1.04x | 0 | — | — | 2m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 100.00% | 99.76% | 30.20% | 30.20% | — | ↑ 1.32x | 0 | — | — | 11m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.91% | 24.91% | 24.91% | — | ↑ 1.46x | 0 | — | — | 11m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | — | ↑ 1.28x | 0 | — | — | 2m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.91% | 99.64% | 99.64% | — | → 0.99x | 0 | — | — | 2m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 99.61% | 100.00% | 100.00% | — | ↑ 1.38x | 0 | — | — | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.52% | 92.20% | 92.20% | — | ↑ 1.21x | 0 | — | — | 9m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 100.00% | 99.70% | 5.16% | 5.16% | — | → 1.02x | 0 | — | — | 12m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.94% | 99.97% | 99.97% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.79% | 95.68% | 95.68% | — | ↑ 1.19x | 0 | — | — | 3m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.88% | 98.47% | 98.47% | — | ↑ 1.10x | 0 | — | — | 9m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.73% | 96.73% | 96.73% | — | ↑ 1.42x | 0 | — | — | 12m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 98.35% | 99.85% | 99.85% | — | ↓ 0.90x | 0 | — | — | 6m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.88% | 99.85% | 99.74% | 99.74% | — | ↑ 1.85x | 0 | — | — | 3m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.88% | 99.38% | 99.65% | 99.65% | — | ↓ 0.38x | 0 | — | — | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.88% | 99.73% | 99.60% | 99.60% | — | ↑ 1.07x | 0 | — | — | 3m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.88% | 99.47% | 99.76% | 99.76% | — | ↑ 1.44x | 0 | — | — | 3m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.88% | 99.68% | 76.22% | 76.22% | — | → 1.03x | 0 | — | — | 2m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.88% | 99.70% | 99.74% | 99.74% | — | → 0.99x | 0 | — | — | 2m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.88% | 99.76% | 99.58% | 99.58% | — | → 0.96x | 0 | — | — | 2m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.88% | 63.71% | 23.13% | 23.13% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.88% | 99.76% | 76.89% | 76.89% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.88% | 99.67% | 99.98% | 99.98% | — | ↑ 1.23x | 0 | — | — | 48s ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.88% | 96.85% | 22.94% | 22.94% | — | ↑ 1.10x | 0 | — | — | 28s ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.88% | 99.85% | 99.90% | 99.90% | — | ↑ 1.07x | 0 | — | — | 48s ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.88% | 99.82% | 98.93% | 98.93% | — | ↑ 1.10x | 0 | — | — | 24s ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.88% | 99.91% | 99.48% | 99.48% | — | ↑ 1.08x | 0 | — | — | 4s ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.88% | 99.82% | 99.77% | 99.77% | — | → 1.01x | 0 | — | — | 12m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.88% | 99.88% | 88.17% | 88.17% | — | → 1.02x | 0 | — | — | 12m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.88% | 99.79% | 98.81% | 98.81% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.88% | 99.76% | 99.08% | 99.08% | — | ↑ 1.34x | 0 | — | — | 6m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.88% | 99.76% | 97.03% | 97.03% | — | ↑ 1.27x | 0 | — | — | 9m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.88% | 99.79% | 99.10% | 99.10% | — | ↑ 1.35x | 0 | — | — | 9m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.88% | 99.85% | 96.80% | 96.80% | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.88% | 99.70% | 98.11% | 98.11% | — | → 1.01x | 0 | — | — | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.88% | 99.67% | 99.18% | 99.18% | — | → 1.03x | 0 | — | — | 9m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.88% | 99.91% | 99.86% | 99.86% | — | ↑ 1.63x | 0 | — | — | 9m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.88% | 99.34% | 99.61% | 99.61% | — | → 1.00x | 0 | — | — | 10m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.88% | 99.73% | 98.43% | 98.43% | — | ↑ 1.26x | 0 | — | — | 7m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.88% | 65.15% | 22.80% | 22.80% | — | ↑ 1.23x | 0 | — | — | 11m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.88% | 99.76% | 99.71% | 99.71% | — | ↑ 1.35x | 0 | — | — | 7m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.88% | 99.61% | 98.38% | 98.38% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.88% | 99.79% | 99.89% | 99.89% | — | ↑ 1.09x | 0 | — | — | 9m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.88% | 99.82% | 93.73% | 93.73% | — | ↑ 1.49x | 0 | — | — | 8m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.88% | 99.88% | 100.00% | 100.00% | — | ↑ 1.15x | 0 | — | — | 6m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.88% | 99.70% | 99.97% | 99.97% | — | ↑ 1.22x | 0 | — | — | 7m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.88% | 96.79% | 29.98% | 29.98% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.88% | 99.91% | 99.34% | 99.34% | — | ↑ 1.14x | 0 | — | — | 7m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.88% | 98.53% | 99.82% | 99.82% | — | → 1.03x | 0 | — | — | 9m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.88% | 98.92% | 55.08% | 55.08% | — | ↓ 0.53x | 0 | — | — | 9m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.88% | 99.85% | 99.97% | 99.97% | — | ↑ 1.27x | 0 | — | — | 5m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.88% | 99.55% | 24.52% | 24.52% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.88% | 99.76% | 99.98% | 99.98% | — | ↑ 1.31x | 0 | — | — | 5m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.88% | 99.91% | 0.00% | 0.00% | — | ↑ 1.08x | 0 | — | — | 6m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 99.88% | 73.04% | 0.00% | 0.00% | — | → 1.02x | 0 | — | — | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.88% | 99.76% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 6m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.88% | 99.79% | 99.92% | 99.92% | — | ↑ 1.27x | 0 | — | — | 5m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.88% | 99.85% | 99.77% | 99.77% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 99.88% | 99.83% | — | — | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.75% | 98.47% | 98.29% | 98.29% | — | ↑ 1.68x | 0 | — | — | 3m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.75% | 99.71% | 99.95% | 99.95% | — | ↓ 0.90x | 0 | — | — | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.75% | 99.71% | 17.47% | 17.47% | — | ↑ 1.24x | 0 | — | — | 3m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.75% | 99.74% | 98.78% | 98.78% | — | ↑ 1.15x | 0 | — | — | 3m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.75% | 99.85% | 99.92% | 99.92% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.75% | 99.23% | 0.00% | 0.00% | — | ↑ 2.00x | 0 | — | — | 3m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.75% | 99.70% | 99.94% | 99.94% | — | ↑ 1.37x | 0 | — | — | 2m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.75% | 80.98% | 76.88% | 76.88% | — | → 0.99x | 0 | — | — | 2m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.75% | 99.85% | 99.49% | 99.49% | — | → 1.05x | 0 | — | — | 2m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.75% | 99.68% | 99.90% | 99.90% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.75% | 99.70% | 100.00% | 100.00% | — | ↓ 0.57x | 0 | — | — | 2m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.75% | 99.50% | 98.00% | 98.00% | — | ↓ 0.81x | 0 | — | — | 2m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.75% | 99.85% | 99.62% | 99.62% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.75% | 99.79% | 99.77% | 99.77% | — | → 0.97x | 0 | — | — | 1m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 99.75% | 42.79% | 63.31% | 63.31% | — | ↑ 1.19x | 0 | — | — | 24s ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.75% | 99.35% | 38.65% | 38.65% | — | ↑ 1.05x | 0 | — | — | 48s ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.75% | 99.67% | 99.68% | 99.68% | — | ↑ 1.07x | 0 | — | — | 24s ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.75% | 96.61% | 76.97% | 76.97% | — | → 1.00x | 0 | — | — | 4s ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.76% | 99.87% | 99.87% | — | → 0.97x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.75% | 99.85% | 99.87% | 99.87% | — | ↑ 1.25x | 0 | — | — | 8m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.75% | 99.70% | 31.33% | 31.33% | — | ↑ 1.21x | 0 | — | — | 7m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.75% | 96.72% | 77.28% | 77.28% | — | → 1.00x | 0 | — | — | 12m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.75% | 99.49% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.75% | 99.85% | 57.00% | 57.00% | — | ↑ 1.22x | 0 | — | — | 11m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.85% | 68.50% | 68.50% | — | ↑ 1.11x | 0 | — | — | 10m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.75% | 99.79% | 98.83% | 98.83% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.64% | 98.16% | 98.16% | — | → 1.02x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.67% | 54.70% | 54.70% | — | → 1.00x | 0 | — | — | 11m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.75% | 99.79% | 99.89% | 99.89% | — | ↑ 1.09x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.75% | 99.46% | 99.27% | 99.27% | — | ↓ 0.95x | 0 | — | — | 10m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.64% | 90.95% | 90.95% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.75% | 99.82% | 99.83% | 99.83% | — | ↑ 1.16x | 0 | — | — | 9m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.75% | 98.98% | 77.59% | 77.59% | — | ↑ 1.18x | 0 | — | — | 9m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.75% | 99.73% | 28.39% | 28.39% | — | → 1.03x | 0 | — | — | 9m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.75% | 99.70% | 100.00% | 100.00% | — | ↓ 0.80x | 0 | — | — | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.75% | 99.67% | 26.84% | 26.84% | — | ↑ 1.18x | 0 | — | — | 11m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.75% | 98.77% | 98.81% | 98.81% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.64% | 91.09% | 91.09% | — | ↑ 1.09x | 0 | — | — | 9m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.75% | 99.58% | 98.88% | 98.88% | — | → 1.00x | 0 | — | — | 7m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.75% | 99.76% | 99.93% | 99.93% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.75% | 99.91% | 60.60% | 60.60% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.75% | 99.88% | 28.78% | 28.78% | — | → 0.98x | 0 | — | — | 8m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.58% | 97.87% | 97.87% | — | ↑ 1.28x | 0 | — | — | 7m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.88% | 63.68% | 63.68% | — | → 0.99x | 0 | — | — | 10m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.75% | 99.52% | 31.58% | 31.58% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.75% | 99.55% | 99.30% | 99.30% | — | ↑ 1.23x | 0 | — | — | 9m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.75% | 99.70% | 99.82% | 99.82% | — | ↑ 1.40x | 0 | — | — | 8m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.75% | 99.79% | 89.57% | 89.57% | — | ↑ 1.31x | 0 | — | — | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.75% | 99.58% | 98.04% | 98.04% | — | ↑ 1.13x | 0 | — | — | 7m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.75% | 99.91% | 98.74% | 98.74% | — | → 1.00x | 0 | — | — | 9m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.55% | 99.76% | 99.76% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.75% | 99.85% | 98.78% | 98.78% | — | ↑ 1.47x | 0 | — | — | 8m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.64% | 99.95% | 99.95% | — | ↑ 1.34x | 0 | — | — | 6m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.76% | 99.33% | 99.33% | — | ↑ 1.33x | 0 | — | — | 6m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.75% | 99.61% | 98.56% | 98.56% | — | → 0.99x | 0 | — | — | 6m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.64% | 99.95% | 99.95% | — | → 1.02x | 0 | — | — | 5m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 96.32% | 99.61% | 99.61% | — | ↓ 0.87x | 0 | — | — | 5m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.75% | 99.73% | 99.85% | 99.85% | — | ↓ 0.92x | 0 | — | — | 5m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.82% | 99.94% | 99.94% | — | ↑ 1.17x | 0 | — | — | 6m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.75% | 99.79% | 16.67% | 16.67% | — | → 1.00x | 0 | — | — | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.73% | 99.86% | 99.86% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.75% | 98.88% | 99.45% | 99.45% | — | ↑ 1.41x | 0 | — | — | 5m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.75% | 83.29% | 93.54% | 93.54% | — | ↓ 0.21x | 0 | — | — | 5m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.75% | 99.67% | 99.94% | 99.94% | — | → 1.02x | 0 | — | — | 5m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.75% | 99.76% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 5m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.75% | 98.61% | 99.34% | 99.34% | — | ↓ 0.75x | 0 | — | — | 4m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.75% | 99.64% | — | — | — | ↑ 1.38x | 0 | — | — | 4m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.63% | 99.47% | 93.57% | 93.57% | — | → 1.00x | 0 | — | — | 3m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.63% | 96.53% | 99.49% | 99.49% | — | → 1.00x | 0 | — | — | 3m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.63% | 96.61% | 75.23% | 75.23% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.63% | 99.74% | 99.98% | 99.98% | — | → 0.96x | 0 | — | — | 3m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.63% | 99.71% | 70.89% | 70.89% | — | → 0.99x | 0 | — | — | 3m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.63% | 99.59% | 93.42% | 93.42% | — | → 1.01x | 0 | — | — | 3m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.63% | 99.76% | 99.65% | 99.65% | — | ↑ 1.14x | 0 | — | — | 2m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.63% | 99.53% | 99.58% | 99.58% | — | ↑ 1.14x | 0 | — | — | 2m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.63% | 99.76% | 99.84% | 99.84% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.63% | 99.70% | 99.87% | 99.87% | — | ↑ 1.15x | 0 | — | — | 1m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.63% | 99.79% | 99.85% | 99.85% | — | ↑ 1.15x | 0 | — | — | 1m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.63% | 99.70% | 99.85% | 99.85% | — | ↑ 1.08x | 0 | — | — | 4s ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.63% | 99.52% | 56.98% | 56.98% | — | ↑ 1.08x | 0 | — | — | 48s ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.63% | 99.79% | 99.34% | 99.34% | — | ↑ 1.11x | 0 | — | — | 4s ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.63% | 99.85% | 99.26% | 99.26% | — | ↑ 1.57x | 0 | — | — | 4s ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.63% | 99.73% | 99.95% | 99.95% | — | ↑ 1.06x | 0 | — | — | 24s ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.63% | 99.76% | 66.50% | 66.50% | — | → 0.95x | 0 | — | — | 9m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.63% | 99.67% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 6m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.63% | 99.82% | 98.85% | 98.85% | — | → 1.02x | 0 | — | — | 9m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.63% | 99.58% | 64.92% | 64.92% | — | ↓ 0.75x | 0 | — | — | 10m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.63% | 99.55% | 99.70% | 99.70% | — | ↑ 1.17x | 0 | — | — | 7m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.63% | 99.70% | 90.32% | 90.32% | — | ↑ 1.11x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.63% | 99.58% | 86.85% | 86.85% | — | → 0.99x | 0 | — | — | 8m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.63% | 99.61% | 26.43% | 26.43% | — | → 1.04x | 0 | — | — | 9m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.63% | 99.79% | 99.37% | 99.37% | — | ↑ 1.24x | 0 | — | — | 12m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.63% | 98.86% | 98.66% | 98.66% | — | → 1.02x | 0 | — | — | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.63% | 99.52% | 93.06% | 93.06% | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.63% | 99.64% | 58.17% | 58.17% | — | → 1.02x | 0 | — | — | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.63% | 99.88% | 98.35% | 98.35% | — | → 1.02x | 0 | — | — | 8m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.63% | 99.61% | 71.79% | 71.79% | — | → 1.04x | 0 | — | — | 10m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.63% | 99.49% | 82.26% | 82.26% | — | ↑ 1.11x | 0 | — | — | 10m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.63% | 99.52% | 56.85% | 56.85% | — | ↑ 1.12x | 0 | — | — | 9m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.63% | 99.88% | 99.31% | 99.31% | — | ↑ 1.22x | 0 | — | — | 9m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.63% | 99.67% | 98.73% | 98.73% | — | ↑ 1.14x | 0 | — | — | 9m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.63% | 96.71% | 76.90% | 76.90% | — | ↑ 1.20x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.63% | 99.49% | 97.48% | 97.48% | — | ↑ 1.31x | 0 | — | — | 8m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.63% | 99.76% | 99.67% | 99.67% | — | → 0.97x | 0 | — | — | 12m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.63% | 85.21% | 99.98% | 99.98% | — | ↓ 0.89x | 0 | — | — | 5m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.63% | 99.67% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 6m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.63% | 99.58% | 91.90% | 91.90% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.63% | 99.76% | 60.72% | 60.72% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.63% | 96.86% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.63% | 99.70% | 99.67% | 99.67% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [Jectora](https://lmspeed.net/provider/jectora) | 99.63% | 99.77% | — | — | — | ↑ 1.20x | 0 | — | — | 3m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.51% | 99.68% | 99.28% | 99.28% | — | ↑ 1.23x | 0 | — | — | 3m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.51% | 99.62% | 98.93% | 98.93% | — | ↑ 1.05x | 0 | — | — | 3m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.51% | 99.71% | 99.98% | 99.98% | — | → 1.02x | 0 | — | — | 3m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.51% | 99.59% | 99.73% | 99.73% | — | ↓ 0.50x | 0 | — | — | 2m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.51% | 99.70% | 22.30% | 22.30% | — | → 1.02x | 0 | — | — | 4s ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.51% | 99.11% | 97.28% | 97.28% | — | ↑ 1.12x | 0 | — | — | 24s ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.51% | 99.64% | 24.53% | 24.53% | — | → 1.05x | 0 | — | — | 23s ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.51% | 99.52% | 85.28% | 85.28% | — | → 1.03x | 0 | — | — | 23s ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.50% | 99.49% | 94.26% | 94.26% | — | ↑ 1.11x | 0 | — | — | 9m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.50% | 99.70% | 74.11% | 74.11% | — | → 0.98x | 0 | — | — | 10m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.50% | 99.73% | 98.73% | 98.73% | — | ↑ 1.21x | 0 | — | — | 10m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.50% | 99.61% | 27.04% | 27.04% | — | ↑ 1.19x | 0 | — | — | 10m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.50% | 99.52% | 84.58% | 84.58% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.50% | 99.73% | 99.51% | 99.51% | — | ↑ 1.27x | 0 | — | — | 7m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.50% | 99.61% | 90.79% | 90.79% | — | → 0.97x | 0 | — | — | 8m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.50% | 99.70% | 50.15% | 50.15% | — | → 1.04x | 0 | — | — | 11m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.50% | 97.76% | 98.00% | 98.00% | — | ↑ 1.18x | 0 | — | — | 10m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.50% | 99.49% | 2.34% | 2.34% | — | → 0.98x | 0 | — | — | 10m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.50% | 99.61% | 99.88% | 99.88% | — | → 1.04x | 0 | — | — | 10m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.50% | 99.29% | 24.54% | 24.54% | — | ↑ 1.20x | 0 | — | — | 12m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.50% | 96.68% | 43.48% | 43.48% | — | → 0.99x | 0 | — | — | 9m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.50% | 98.81% | 38.36% | 38.36% | — | → 1.03x | 0 | — | — | 10m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.50% | 99.64% | 91.87% | 91.87% | — | ↑ 1.24x | 0 | — | — | 9m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.50% | 96.68% | 69.43% | 69.43% | — | ↑ 1.35x | 0 | — | — | 10m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.50% | 99.58% | 96.88% | 96.88% | — | → 1.05x | 0 | — | — | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.50% | 99.79% | 98.37% | 98.37% | — | ↑ 1.29x | 0 | — | — | 8m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.50% | 99.76% | 97.35% | 97.35% | — | ↑ 1.50x | 0 | — | — | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.50% | 99.82% | 98.88% | 98.88% | — | ↑ 1.18x | 0 | — | — | 10m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.50% | 99.58% | 87.87% | 87.87% | — | ↑ 1.21x | 0 | — | — | 6m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.50% | 99.76% | 100.00% | 100.00% | — | ↑ 1.50x | 0 | — | — | 5m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.50% | 99.67% | 100.00% | 100.00% | — | ↑ 1.33x | 0 | — | — | 5m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.50% | 63.63% | 99.95% | 99.95% | — | → 1.04x | 0 | — | — | 5m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.50% | 99.67% | 99.85% | 99.85% | — | → 1.02x | 0 | — | — | 5m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.50% | 98.49% | 99.48% | 99.48% | — | ↓ 0.43x | 0 | — | — | 4m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.50% | 99.52% | — | — | — | ↑ 1.18x | 0 | — | — | 4m ago |
| [YearnstudioAI](https://lmspeed.net/provider/yearnstudio) | 99.50% | 99.14% | — | — | — | → 1.02x | 0 | — | — | 3m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.50% | 99.61% | — | — | — | → 1.04x | 0 | — | — | 4m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.39% | 99.59% | 99.75% | 99.75% | — | → 1.03x | 0 | — | — | 3m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.39% | 96.40% | 99.62% | 99.62% | — | → 1.00x | 0 | — | — | 3m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.38% | 99.70% | 44.95% | 44.95% | — | ↑ 1.22x | 0 | — | — | 2m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.38% | 99.29% | 98.94% | 98.94% | — | ↑ 1.55x | 0 | — | — | 2m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.38% | 99.59% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 1m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.38% | 99.50% | 99.02% | 99.02% | — | ↑ 1.36x | 0 | — | — | 1m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.38% | 99.29% | 0.11% | 0.11% | — | → 1.02x | 0 | — | — | 48s ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.38% | 94.74% | 69.98% | 69.98% | — | ↓ 0.74x | 0 | — | — | 27s ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.38% | 99.43% | 98.47% | 98.47% | — | → 1.05x | 0 | — | — | 7m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.38% | 99.46% | 24.43% | 24.43% | — | ↑ 1.31x | 0 | — | — | 12m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.38% | 99.43% | 95.85% | 95.85% | — | ↑ 1.28x | 0 | — | — | 8m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.38% | 89.21% | 98.02% | 98.02% | — | ↓ 0.77x | 0 | — | — | 8m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.38% | 98.68% | 97.07% | 97.07% | — | → 1.02x | 0 | — | — | 7m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.38% | 93.08% | 96.89% | 96.89% | — | → 1.05x | 0 | — | — | 7m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.38% | 99.40% | 97.90% | 97.90% | — | ↑ 1.10x | 0 | — | — | 9m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.38% | 99.73% | 96.69% | 96.69% | — | ↑ 1.22x | 0 | — | — | 9m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.38% | 99.10% | 92.56% | 92.56% | — | ↑ 1.18x | 0 | — | — | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.38% | 99.34% | 62.65% | 62.65% | — | ↑ 1.09x | 0 | — | — | 10m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.38% | 99.64% | 14.21% | 14.21% | — | ↑ 1.10x | 0 | — | — | 7m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.38% | 99.40% | 99.03% | 99.03% | — | → 1.00x | 0 | — | — | 12m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.38% | 99.28% | 63.14% | 63.14% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.38% | 99.34% | 99.00% | 99.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.38% | 99.76% | 98.69% | 98.69% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.38% | 99.64% | 99.35% | 99.35% | — | ↑ 1.18x | 0 | — | — | 10m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.38% | 99.67% | 96.32% | 96.32% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.38% | 99.64% | 25.33% | 25.33% | — | ↑ 1.25x | 0 | — | — | 12m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.38% | 99.64% | 100.00% | 100.00% | — | ↑ 1.17x | 0 | — | — | 7m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.38% | 98.95% | 83.10% | 83.10% | — | ↓ 0.92x | 0 | — | — | 8m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.38% | 99.61% | 98.90% | 98.90% | — | → 0.96x | 0 | — | — | 9m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.38% | 99.70% | 74.00% | 74.00% | — | → 1.03x | 0 | — | — | 10m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.38% | 99.64% | 96.10% | 96.10% | — | ↑ 1.17x | 0 | — | — | 7m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.38% | 97.98% | 99.10% | 99.10% | — | → 1.01x | 0 | — | — | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.38% | 99.40% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 5m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.38% | 99.61% | 99.98% | 99.98% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.38% | 99.73% | 99.61% | 99.61% | — | ↑ 1.30x | 0 | — | — | 4m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.38% | 99.70% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 4m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.38% | 99.76% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [APIArc](https://lmspeed.net/provider/apiarc) | 99.38% | 99.10% | — | — | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 99.38% | 99.76% | 99.66% | 99.66% | — | ↑ 1.85x | 0 | — | — | 4m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.26% | 99.53% | 36.33% | 36.33% | — | → 1.01x | 0 | — | — | 3m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.26% | 99.41% | 97.98% | 97.98% | — | → 1.01x | 0 | — | — | 2m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.26% | 99.70% | 99.81% | 99.81% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.26% | 98.42% | 97.94% | 97.94% | — | ↑ 1.05x | 0 | — | — | 4s ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.26% | 98.90% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 47s ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.26% | 99.23% | 99.79% | 99.79% | — | → 1.00x | 0 | — | — | 23s ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.26% | 99.58% | 99.74% | 99.74% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.26% | 99.58% | 97.80% | 97.80% | — | → 1.04x | 0 | — | — | 8m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.26% | 99.52% | 98.16% | 98.16% | — | ↑ 1.17x | 0 | — | — | 7m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.26% | 99.58% | 99.95% | 99.95% | — | ↑ 1.17x | 0 | — | — | 9m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.25% | 99.43% | 99.76% | 99.76% | — | ↑ 1.09x | 0 | — | — | 6m ago |
| [跑路中转站](https://lmspeed.net/provider/mrcwoods) | 99.25% | 99.34% | — | — | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.14% | 99.53% | 68.59% | 68.59% | — | → 1.03x | 0 | — | — | 3m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.14% | 99.53% | 99.56% | 99.56% | — | → 0.98x | 0 | — | — | 3m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.14% | 82.74% | 99.92% | 99.92% | — | → 0.96x | 0 | — | — | 2m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.14% | 99.56% | 99.91% | 99.91% | — | ↑ 1.34x | 0 | — | — | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.13% | 97.77% | 0.11% | 0.11% | — | → 1.01x | 0 | — | — | 13m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.13% | 98.59% | 99.86% | 99.86% | — | → 0.97x | 0 | — | — | 8m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.13% | 99.61% | 100.00% | 100.00% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 99.13% | 98.46% | — | — | — | → 1.05x | 0 | — | — | 3m ago |
| [PollyAI](https://lmspeed.net/provider/pollyai) | 99.13% | 98.95% | — | — | — | → 1.02x | 0 | — | — | 3m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.02% | 99.62% | 49.74% | 49.74% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.02% | 99.35% | 99.74% | 99.74% | — | → 0.97x | 0 | — | — | 2m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.01% | 98.26% | 98.75% | 98.75% | — | → 0.96x | 0 | — | — | 7m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.01% | 99.22% | 32.93% | 32.93% | — | → 1.00x | 0 | — | — | 8m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 99.01% | 81.62% | 83.85% | 83.85% | — | ↓ 0.12x | 0 | — | — | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.01% | 99.07% | 100.00% | 100.00% | — | ↓ 0.95x | 0 | — | — | 5m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.01% | 99.07% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 6m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.00% | 99.28% | 99.09% | 99.09% | — | → 1.02x | 0 | — | — | 5m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.00% | 99.67% | — | — | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.00% | 99.64% | — | — | — | ↑ 1.13x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (83)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 98.90% | 80.51% | 67.23% | 67.23% | — | ↓ 0.16x | 0 | — | — | 3m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 98.89% | 99.32% | 80.20% | 80.20% | — | ↑ 1.46x | 0 | — | — | 24s ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.88% | 99.28% | 97.21% | 97.21% | — | → 1.01x | 0 | — | — | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 98.88% | 45.59% | 22.07% | 22.07% | — | → 1.02x | 0 | — | — | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.88% | 99.13% | 98.96% | 98.96% | — | ↑ 1.15x | 0 | — | — | 9m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 98.88% | 99.58% | 0.00% | 0.00% | — | ↑ 1.33x | 0 | — | — | 6m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 98.88% | 99.37% | 100.00% | 100.00% | — | ↓ 0.92x | 0 | — | — | 4m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 98.76% | 99.10% | 99.83% | 99.83% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 98.75% | 96.52% | — | — | — | ↑ 1.76x | 0 | — | — | 4m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 98.75% | 97.49% | 99.88% | 99.88% | — | ↑ 1.22x | 0 | — | — | 4m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 98.75% | 99.24% | — | — | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.65% | 98.94% | 99.85% | 99.85% | — | ↑ 1.25x | 0 | — | — | 3m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.65% | 99.14% | 51.42% | 51.42% | — | ↑ 1.10x | 0 | — | — | 2m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 98.64% | 99.50% | 98.92% | 98.92% | — | ↑ 1.08x | 0 | — | — | 1m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.64% | 98.77% | 97.74% | 97.74% | — | → 1.02x | 0 | — | — | 9m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 98.63% | 99.13% | 39.41% | 39.41% | — | ↓ 0.69x | 0 | — | — | 5m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.52% | 98.55% | 96.43% | 96.43% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 98.52% | 45.00% | 32.40% | 32.40% | — | ↓ 0.88x | 0 | — | — | 29s ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 98.51% | 99.52% | 0.69% | 0.69% | — | ↓ 0.81x | 0 | — | — | 7m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 98.40% | 80.25% | 54.05% | 54.05% | — | ↓ 0.10x | 0 | — | — | 3m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.39% | 99.31% | 99.64% | 99.64% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.39% | 98.98% | 93.61% | 93.61% | — | ↑ 1.06x | 0 | — | — | 6m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 98.39% | 98.44% | 96.94% | 96.94% | — | ↓ 0.39x | 0 | — | — | 8m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.27% | 66.29% | 86.29% | 86.29% | — | ↓ 0.22x | 0 | — | — | 1m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.27% | 99.52% | 69.87% | 69.87% | — | → 1.02x | 0 | — | — | 10m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 98.26% | 52.44% | 6.48% | 6.48% | — | ↓ 0.42x | 0 | — | — | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.14% | 65.09% | 92.86% | 92.86% | — | ↓ 0.19x | 0 | — | — | 9m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 98.02% | 97.64% | 98.24% | 98.24% | — | → 0.99x | 0 | — | — | 9m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 97.91% | 43.37% | 23.09% | 23.09% | — | ↓ 0.51x | 0 | — | — | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 97.90% | 57.59% | 99.65% | 99.65% | — | → 0.95x | 0 | — | — | 24s ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.89% | 98.47% | 66.05% | 66.05% | — | ↑ 1.23x | 0 | — | — | 8m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 97.79% | 57.47% | 68.41% | 68.41% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.79% | 55.87% | 96.32% | 96.32% | — | ↓ 0.93x | 0 | — | — | 2m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.77% | 66.33% | 87.06% | 87.06% | — | ↓ 0.53x | 0 | — | — | 9m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 97.76% | 51.90% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 6m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.65% | 59.60% | 98.45% | 98.45% | — | → 1.00x | 0 | — | — | 3s ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 97.65% | 56.19% | 54.78% | 54.78% | — | → 0.95x | 0 | — | — | 46s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 97.65% | 64.11% | 10.72% | 10.72% | — | ↓ 0.48x | 0 | — | — | 9m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.55% | 78.61% | 78.01% | 78.01% | — | → 0.96x | 0 | — | — | 3m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 97.55% | 66.10% | 75.11% | 75.11% | — | ↓ 0.22x | 0 | — | — | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 97.55% | 57.65% | 64.20% | 64.20% | — | ↓ 0.73x | 0 | — | — | 3m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 97.53% | 56.67% | 63.15% | 63.15% | — | → 0.97x | 0 | — | — | 45s ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 97.52% | 57.68% | 68.13% | 68.13% | — | ↓ 0.91x | 0 | — | — | 12m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 97.42% | 57.30% | 50.52% | 50.52% | — | ↓ 0.90x | 0 | — | — | 3m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 97.42% | 58.30% | 86.23% | 86.23% | — | ↓ 0.54x | 0 | — | — | 3m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 97.42% | 56.82% | 99.77% | 99.77% | — | ↓ 0.41x | 0 | — | — | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 97.40% | 55.67% | 93.16% | 93.16% | — | → 1.01x | 0 | — | — | 9m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 97.30% | 68.52% | 94.11% | 94.11% | — | → 1.04x | 0 | — | — | 3m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 97.29% | 97.10% | 89.02% | 89.02% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 97.17% | 55.21% | 99.09% | 99.09% | — | ↓ 0.70x | 0 | — | — | 2m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 97.15% | 52.15% | 26.68% | 26.68% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 97.14% | 42.37% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 4m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.04% | 91.13% | 40.01% | 40.01% | — | ↑ 1.07x | 0 | — | — | 49s ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 97.03% | 98.95% | 65.57% | 65.57% | — | ↑ 1.30x | 0 | — | — | 10m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 97.03% | 40.66% | 38.64% | 38.64% | — | ↑ 1.29x | 0 | — | — | 12m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 96.93% | 62.87% | 98.89% | 98.89% | — | ↓ 0.27x | 0 | — | — | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 96.93% | 56.12% | 98.92% | 98.92% | — | ↓ 0.70x | 0 | — | — | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 96.92% | 53.33% | 98.87% | 98.87% | — | ↓ 0.48x | 0 | — | — | 2m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 96.90% | 59.59% | 48.46% | 48.46% | — | ↓ 0.45x | 0 | — | — | 9m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 96.80% | 60.95% | 99.78% | 99.78% | — | ↓ 0.36x | 0 | — | — | 2m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 96.80% | 57.02% | 75.72% | 75.72% | — | → 1.00x | 0 | — | — | 2m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.77% | 96.63% | 97.85% | 97.85% | — | → 1.04x | 0 | — | — | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.69% | 50.00% | 91.98% | 91.98% | — | → 0.98x | 0 | — | — | 3m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 96.39% | 46.63% | — | — | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 96.16% | 98.68% | 81.53% | 81.53% | — | ↑ 1.28x | 0 | — | — | 10m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 96.06% | 98.43% | 5.08% | 5.08% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 95.82% | 42.33% | 93.77% | 93.77% | — | → 1.05x | 0 | — | — | 2m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 95.71% | 64.07% | 66.07% | 66.07% | — | ↓ 0.30x | 0 | — | — | 3m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 95.53% | 56.01% | 98.53% | 98.53% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 94.55% | 67.47% | 98.12% | 98.12% | — | ↑ 1.46x | 0 | — | — | 12m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 94.23% | 41.67% | 52.45% | 52.45% | — | → 1.01x | 0 | — | — | 3m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.05% | 98.23% | 97.10% | 97.10% | — | ↑ 1.22x | 0 | — | — | 8m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 92.19% | 57.69% | 96.79% | 96.79% | — | ↓ 0.28x | 0 | — | — | 11m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 91.53% | 87.69% | — | — | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 85.75% | 69.44% | 97.75% | 97.75% | — | → 1.03x | 0 | — | — | 9m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 83.02% | 53.04% | 85.02% | 85.02% | — | ↓ 0.51x | 0 | — | — | 9m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 80.17% | 94.13% | 96.18% | 96.18% | — | → 1.03x | 0 | — | — | 9m ago |
| [Profundo AI](https://lmspeed.net/provider/profundo-ai) | 74.60% | 81.59% | — | — | — | ↑ 1.20x | 0 | — | — | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 74.16% | 71.11% | 78.42% | 78.42% | — | → 0.98x | 0 | — | — | 6m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 66.91% | 70.81% | 1.90% | 1.90% | — | ↑ 1.25x | 0 | — | — | 29s ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 57.59% | 48.05% | 98.37% | 98.37% | — | ↓ 0.62x | 0 | — | — | 5m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 55.42% | 51.83% | 91.43% | 91.43% | — | ↑ 2.09x | 0 | — | — | 4m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 30.86% | 29.96% | 87.63% | 87.63% | — | → 1.00x | 0 | — | — | 9m ago |

</details>

<details open>
<summary><strong>🔴 Down (344)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.85% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 99.88% | 99.58% | — | — | — | ↓ 0.54x | 0 | — | — | 4m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.88% | 99.63% | — | — | — | → 1.01x | 0 | — | — | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.75% | 99.58% | 66.42% | 66.42% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.55% | 99.94% | 99.94% | — | ↑ 1.28x | 0 | — | — | 5m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.75% | 99.73% | 100.00% | 100.00% | — | ↑ 1.47x | 0 | — | — | 4m ago |
| [JembatanAI](https://lmspeed.net/provider/jembatanai) | 99.75% | 95.76% | — | — | — | → 1.03x | 0 | — | — | 3m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.75% | 99.73% | — | — | — | ↑ 1.41x | 0 | — | — | 3m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 99.63% | 99.70% | — | — | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [Openference](https://lmspeed.net/provider/openference) | 99.63% | 99.58% | — | — | — | ↑ 1.27x | 0 | — | — | 3m ago |
| [柚子的公益站](https://lmspeed.net/provider/provider-ai-bayunzi-shop) | 99.63% | 99.76% | — | — | — | ↑ 1.28x | 0 | — | — | 4m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 99.50% | 54.90% | 99.82% | 99.82% | — | → 0.97x | 0 | — | — | 4m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.50% | 99.64% | — | — | — | ↑ 1.22x | 0 | — | — | 3m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.50% | 99.67% | 100.00% | 100.00% | — | ↑ 1.29x | 0 | — | — | 4m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.38% | 99.73% | 99.09% | 99.09% | — | ↓ 0.91x | 0 | — | — | 11m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.38% | 94.07% | — | — | — | → 1.05x | 0 | — | — | 4m ago |
| [iTokens](https://lmspeed.net/provider/itokens) | 99.38% | 99.23% | — | — | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [QuartzRouter](https://lmspeed.net/provider/quartzrouter) | 99.38% | 99.67% | — | — | — | → 1.03x | 0 | — | — | 3m ago |
| [Yomi API](https://lmspeed.net/provider/yomi-api) | 99.38% | 99.62% | — | — | — | → 0.97x | 0 | — | — | 3m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.25% | 99.46% | 99.92% | 99.92% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 98.88% | 99.25% | 98.95% | 98.95% | — | → 1.01x | 0 | — | — | 8m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 98.88% | 96.64% | — | — | — | ↓ 0.79x | 0 | — | — | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 98.26% | 99.37% | 99.67% | 99.67% | — | ↑ 1.14x | 0 | — | — | 5m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 97.63% | 97.79% | — | — | — | ↑ 2.27x | 0 | — | — | 4m ago |
| [优质企业级中转API 始终坚持只做 Pro 号池、高品质 ,尊重安全隐私。](https://lmspeed.net/provider/api-17nas-com) | 96.51% | 23.44% | 99.75% | 99.75% | — | → 1.00x | 0 | — | — | 4m ago |
| [S1AI API](https://lmspeed.net/provider/s1ai-api) | 93.65% | 95.64% | — | — | — | ↑ 1.09x | 0 | — | — | 3m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 89.22% | 97.28% | 99.97% | 99.97% | — | ↑ 1.22x | 0 | — | — | 9m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 82.94% | 30.53% | — | — | — | → 1.01x | 0 | — | — | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 73.62% | 69.64% | 99.93% | 99.93% | — | ↓ 0.91x | 0 | — | — | 2m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 72.60% | 38.75% | 99.06% | 99.06% | — | → 1.00x | 0 | — | — | 4m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 69.21% | 92.44% | 99.92% | 99.92% | — | ↑ 3.20x | 0 | — | — | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 68.65% | 51.72% | 44.62% | 44.62% | — | ↓ 0.85x | 0 | — | — | 9m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 55.03% | 88.94% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 39.90% | 81.34% | 46.51% | 46.51% | — | → 1.02x | 0 | — | — | 8m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 32.38% | 83.31% | — | — | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 28.48% | 81.99% | 88.31% | 88.31% | — | ↑ 1.38x | 0 | — | — | 5m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 18.09% | 60.82% | 25.44% | 25.44% | — | → 0.99x | 0 | — | — | 8m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 1.23% | 58.50% | 97.57% | 97.57% | — | ↓ 0.57x | 0 | — | — | 2m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.99% | 29.59% | 7.76% | 7.76% | — | ↑ 1.26x | 0 | — | — | 7m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.62% | 21.18% | 44.99% | 44.99% | — | ↑ 10.99x | 0 | — | — | 10m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.12% | 0.18% | 0.10% | 0.10% | — | ↓ 0.16x | 0 | — | — | 4s ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 28s ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 0 | — | — | 9m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.78% | 70.78% | — | — | 0 | — | — | 9m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 0 | — | — | 9m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 0 | — | — | 11m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 0.00% | 0.00% | 99.61% | 99.61% | — | — | 0 | — | — | 3m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 0 | — | — | 3m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.00% | 88.73% | 88.73% | — | — | 0 | — | — | 7m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.00% | 99.82% | 99.82% | — | — | 0 | — | — | 6m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 0 | — | — | 8m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.00% | 73.96% | 73.96% | — | — | 0 | — | — | 5m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 0 | — | — | 28s ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 0 | — | — | 28s ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 0.00% | 20.71% | 95.25% | 95.25% | — | — | 0 | — | — | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.00% | 79.86% | 79.86% | — | — | 0 | — | — | 8m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 64.61% | 64.61% | — | — | 0 | — | — | 8m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 40.15% | 40.15% | — | — | 0 | — | — | 24s ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 19.00% | 76.64% | 76.64% | — | — | 0 | — | — | 49s ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 0 | — | — | 48s ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 0.00% | 29.94% | 88.70% | 88.70% | — | — | 0 | — | — | 8m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 6m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.00% | 99.65% | 99.65% | — | — | 0 | — | — | 6m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 0 | — | — | 7m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 0.00% | 67.71% | 99.67% | 99.67% | — | — | 0 | — | — | 7m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 0 | — | — | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 0.00% | 44.61% | 83.18% | 83.18% | — | — | 0 | — | — | 10m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.66% | 83.66% | — | — | 0 | — | — | 3m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 0 | — | — | 10m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 0 | — | — | 2m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 0 | — | — | 3m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 0 | — | — | 2m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 0 | — | — | 2m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 0 | — | — | 4s ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.00% | 83.11% | 83.11% | — | — | 0 | — | — | 7m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 0 | — | — | 9m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 0 | — | — | 10m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.39% | 87.39% | — | — | 0 | — | — | 29s ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 0 | — | — | 9m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 0.00% | 68.70% | 68.70% | — | — | 0 | — | — | 5m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 0 | — | — | 12m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.00% | 98.15% | 98.15% | — | — | 0 | — | — | 29s ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.64% | 78.64% | — | — | 0 | — | — | 9m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 0.00% | 0.00% | 99.93% | 99.93% | — | — | 0 | — | — | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 0 | — | — | 10m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 0 | — | — | 6m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 0 | — | — | 5m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.00% | 48.90% | 48.90% | — | — | 0 | — | — | 48s ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.00% | 90.67% | 90.67% | — | — | 0 | — | — | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 14.77% | 47.85% | 47.85% | — | — | 0 | — | — | 49s ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.88% | 31.88% | — | — | 0 | — | — | 10m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.00% | 99.73% | 99.73% | — | — | 0 | — | — | 6m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 0 | — | — | 1m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.34% | 32.34% | — | — | 0 | — | — | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 0 | — | — | 9m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 0 | — | — | 10m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4s ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 0 | — | — | 28s ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.00% | 96.06% | 96.06% | — | — | 0 | — | — | 28s ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.00% | 69.29% | 69.29% | — | — | 0 | — | — | 7m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.00% | 39.40% | 39.40% | — | — | 0 | — | — | 5m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.00% | 64.35% | 64.35% | — | — | 0 | — | — | 10m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 0.00% | 72.25% | 99.97% | 99.97% | — | — | 0 | — | — | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 0 | — | — | 9m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.00% | 98.70% | 98.70% | — | — | 0 | — | — | 5m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 0.00% | 97.23% | 97.23% | — | — | 0 | — | — | 4m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 0 | — | — | 48s ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 55.16% | 43.99% | 43.99% | — | — | 0 | — | — | 8m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 0 | — | — | 7m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 0.00% | 56.17% | 96.87% | 96.87% | — | — | 0 | — | — | 5m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 0.00% | 26.58% | 69.01% | 69.01% | — | — | 0 | — | — | 9m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.00% | 98.37% | 98.37% | — | — | 0 | — | — | 9m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 0 | — | — | 11m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 6m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 0 | — | — | 7m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 0 | — | — | 3m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 0 | — | — | 9m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 28s ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 0 | — | — | 9m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 0 | — | — | 2m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.00% | 99.92% | 99.92% | — | — | 0 | — | — | 6m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 0 | — | — | 8m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.00% | 98.40% | 98.40% | — | — | 0 | — | — | 5m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.00% | 99.74% | 99.74% | — | — | 0 | — | — | 3m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 0 | — | — | 9m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.00% | 81.13% | 81.13% | — | — | 0 | — | — | 9m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 0 | — | — | 12m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 29s ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 0 | — | — | 3m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.00% | 99.84% | 99.84% | — | — | 0 | — | — | 3m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 0.00% | 50.30% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 5m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 0 | — | — | 9m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 0 | — | — | 8m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 0.00% | 29.79% | 99.94% | 99.94% | — | — | 0 | — | — | 4m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 0 | — | — | 1m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 0 | — | — | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 0 | — | — | 7m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 0 | — | — | 7m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.00% | 74.74% | 74.74% | — | — | 0 | — | — | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.90% | 47.90% | — | — | 0 | — | — | 9m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.00% | 99.25% | 99.25% | — | — | 0 | — | — | 7m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.03% | 6.05% | 6.05% | — | — | 0 | — | — | 7m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.00% | 91.99% | 91.99% | — | — | 0 | — | — | 7m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 22.80% | 22.80% | — | — | 0 | — | — | 4s ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.00% | 98.05% | 98.05% | — | — | 0 | — | — | 5m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 0 | — | — | 9m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 5m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 0 | — | — | 4s ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 0 | — | — | 6m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 0 | — | — | 2m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 0 | — | — | 3m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 0 | — | — | 5m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 0 | — | — | 24s ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.00% | 75.74% | 75.74% | — | — | 0 | — | — | 6m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 0 | — | — | 3m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 0 | — | — | 9m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 6m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 49s ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.74% | 70.74% | — | — | 0 | — | — | 9m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 0 | — | — | 49s ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 0 | — | — | 8m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.18% | 34.65% | 34.65% | — | — | 0 | — | — | 10m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 0 | — | — | 3m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 0 | — | — | 2m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 22.32% | 22.32% | — | — | 0 | — | — | 2m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 0 | — | — | 24s ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.00% | 91.04% | 91.04% | — | — | 0 | — | — | 6m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 0 | — | — | 8m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 0 | — | — | 10m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 0.00% | 84.75% | 84.75% | — | — | 0 | — | — | 8m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 24s ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.00% | 99.29% | 99.29% | — | — | 0 | — | — | 4m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 0 | — | — | 8m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 0.00% | 6.38% | 89.73% | 89.73% | — | — | 0 | — | — | 2m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 0 | — | — | 3m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 0.00% | 49.46% | 89.89% | 89.89% | — | — | 0 | — | — | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.32% | 73.32% | — | — | 0 | — | — | 4s ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 0 | — | — | 10m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 0 | — | — | 9m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 0 | — | — | 3m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 20.82% | 20.82% | — | — | 0 | — | — | 28s ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 35.50% | 20.58% | 20.58% | — | — | 0 | — | — | 6m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 0 | — | — | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 0 | — | — | 9m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 0 | — | — | 1m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 0.00% | 99.80% | 99.80% | — | — | 0 | — | — | 2m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.00% | 92.62% | 92.62% | — | — | 0 | — | — | 3m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 0 | — | — | 3m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 27.77% | 27.77% | — | — | 0 | — | — | 10m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 75.55% | 22.33% | 22.33% | — | — | 0 | — | — | 2m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 0 | — | — | 1m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 5m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 10m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.10% | 49.10% | — | — | 0 | — | — | 1m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 0 | — | — | 3m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 0.00% | 36.11% | 99.94% | 99.94% | — | — | 0 | — | — | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.07% | 65.07% | — | — | 0 | — | — | 8m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.00% | 99.12% | 99.12% | — | — | 0 | — | — | 1m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.00% | 92.19% | 92.19% | — | — | 0 | — | — | 9m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 0.00% | 68.18% | 96.14% | 96.14% | — | — | 0 | — | — | 5m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4s ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 8.64% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 3m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 0 | — | — | 12m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 45.98% | 45.98% | — | — | 0 | — | — | 29s ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.00% | 92.63% | 92.63% | — | — | 0 | — | — | 9m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 6m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 0 | — | — | 9m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 0.00% | 13.75% | 86.83% | 86.83% | — | — | 0 | — | — | 10m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 0 | — | — | 6m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.00% | 2.05% | 98.59% | 98.59% | — | — | 0 | — | — | 6m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 0.00% | 71.99% | 81.07% | 81.07% | — | — | 0 | — | — | 10m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 0 | — | — | 4s ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 24s ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 0 | — | — | 10m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 0 | — | — | 9m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 24s ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.00% | 99.81% | 99.81% | — | — | 0 | — | — | 6m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.39% | 72.39% | — | — | 0 | — | — | 9m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 0 | — | — | 2m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.80% | 46.80% | — | — | 0 | — | — | 5m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 0 | — | — | 2m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 0 | — | — | 11m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.72% | 68.72% | — | — | 0 | — | — | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 0 | — | — | 11m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 0 | — | — | 3m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.49% | 35.49% | — | — | 0 | — | — | 9m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 0 | — | — | 49s ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 0 | — | — | 2m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 23.11% | 23.11% | — | — | 0 | — | — | 2m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.00% | 99.60% | 99.60% | — | — | 0 | — | — | 6m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 0 | — | — | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 6m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 0 | — | — | 9m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.60% | 22.60% | — | — | 0 | — | — | 6m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4s ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.92% | 30.92% | — | — | 0 | — | — | 7m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.00% | 68.76% | 68.76% | — | — | 0 | — | — | 7m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 0 | — | — | 7m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.02% | 38.02% | — | — | 0 | — | — | 7m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.16% | 17.16% | — | — | 0 | — | — | 7m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 0 | — | — | 9m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.00% | 23.40% | 23.40% | — | — | 0 | — | — | 10m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 0.00% | 8.13% | 82.00% | 82.00% | — | — | 0 | — | — | 4m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.00% | 99.53% | 99.53% | — | — | 0 | — | — | 3m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 0 | — | — | 24s ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 21.71% | 21.71% | — | — | 0 | — | — | 1m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 0.00% | 56.32% | 99.87% | 99.87% | — | — | 0 | — | — | 48s ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 0 | — | — | 8m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.49% | 25.49% | — | — | 0 | — | — | 6m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 0 | — | — | 10m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 0.00% | 15.35% | 98.78% | 98.78% | — | — | 0 | — | — | 1m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 0 | — | — | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 0.00% | 12.07% | 98.12% | 98.12% | — | — | 0 | — | — | 9m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 0 | — | — | 7m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 0 | — | — | 1m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 0.00% | 0.00% | 99.88% | 99.88% | — | — | 0 | — | — | 5m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.00% | 76.63% | 76.63% | — | — | 0 | — | — | 4m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 32.96% | 32.96% | — | — | 0 | — | — | 1m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 0 | — | — | 6m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.00% | 98.48% | 98.48% | — | — | 0 | — | — | 9m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 0 | — | — | 9m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 0 | — | — | 9m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 0.00% | 89.40% | 89.40% | — | — | 0 | — | — | 10m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 0 | — | — | 4s ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 49s ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 0.00% | 0.00% | 17.31% | 17.31% | — | — | 0 | — | — | 28s ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 0 | — | — | 8m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 0 | — | — | 24s ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 0.00% | 7.51% | 24.63% | 24.63% | — | — | 0 | — | — | 12m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 0 | — | — | 12m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 60.97% | 60.97% | — | — | 0 | — | — | 8m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 24s ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4s ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 0 | — | — | 2m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.35% | 1.35% | — | — | 0 | — | — | 7m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 0 | — | — | 10m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 0.00% | 11.11% | 99.78% | 99.78% | — | — | 0 | — | — | 9m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.00% | 91.72% | 91.72% | — | — | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 5m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.00% | 99.17% | 99.17% | — | — | 0 | — | — | 2m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 9.94% | 75.15% | 75.15% | — | — | 0 | — | — | 12m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 0 | — | — | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 0 | — | — | — |

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
