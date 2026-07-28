# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**696 providers** — 294 🟢 operational · 85 🟡 degraded · 315 🔴 down · 2 ⚫ unknown

_Updated 2026-07-28 05:51 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (294)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [1984](https://lmspeed.net/provider/1984-hosting) | 100.00% | 99.66% | 76.22% | 76.22% | — | → 1.00x | 1 | 11d 1h | 30d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.81% | 98.73% | 98.73% | — | ↑ 1.11x | 0 | — | — | 41s ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 100.00% | 76.36% | 76.64% | 76.64% | — | → 1.02x | 1 | 11d 1h | 30d ago | 3m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.72% | 98.92% | 98.92% | — | → 0.99x | 0 | — | — | 3m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.78% | 80.20% | 80.20% | — | → 1.02x | 1 | 0s | 21d ago | 2m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.82% | 99.02% | 99.02% | — | → 0.99x | 2 | 0s | 29d ago | 3m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 98.83% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 7m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.69% | 99.10% | 99.10% | — | → 1.02x | 0 | — | — | 9m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 97.96% | 98.75% | 98.75% | — | → 1.03x | 3 | 46s | 24d ago | 9m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 98.80% | 99.33% | 99.33% | — | → 0.96x | 1 | 0s | 28d ago | 9m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 99.81% | 31.33% | 31.33% | — | ↑ 1.06x | 1 | 11d 1h | 30d ago | 10m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.88% | 97.57% | 97.57% | — | → 1.02x | 5 | 0s | 22d ago | 1m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.75% | 84.58% | 84.58% | — | → 1.02x | 0 | — | — | 20s ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.66% | 68.50% | 68.50% | — | → 1.02x | 0 | — | — | 40s ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.41% | 98.85% | 98.85% | — | ↑ 1.11x | 0 | — | — | 11m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.72% | 43.99% | 43.99% | — | → 1.00x | 1 | 11d 1h | 30d ago | 11m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.68% | 96.87% | 96.87% | — | → 0.99x | 0 | — | — | 8m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.56% | 99.89% | 99.89% | — | ↓ 0.93x | 0 | — | — | 9m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 100.00% | 99.75% | 0.11% | 0.11% | — | → 1.00x | 1 | 11d 1h | 30d ago | 3m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.63% | 98.00% | 98.00% | — | → 1.03x | 0 | — | — | 20s ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.81% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 9m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.79% | 99.65% | 99.65% | — | ↓ 0.89x | 0 | — | — | 4m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 99.75% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 99.68% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 8m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 83.82% | 99.03% | 99.03% | — | → 1.02x | 0 | — | — | 1m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.30% | 99.85% | 99.85% | — | → 1.01x | 0 | — | — | 7m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.78% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 8m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 99.68% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 24d ago | 7m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 100.00% | 97.81% | 98.93% | 98.93% | — | → 0.96x | 1 | 0s | 25d ago | 2m ago |
| [Groq](https://lmspeed.net/provider/groq) | 100.00% | 99.51% | 76.97% | 76.97% | — | ↓ 0.95x | 1 | 11d 1h | 30d ago | 2m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.69% | 91.09% | 91.09% | — | ↑ 1.06x | 1 | 0s | 30d ago | 12m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 99.12% | 88.31% | 88.31% | — | → 1.02x | 0 | — | — | 8m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.57% | 66.42% | 66.42% | — | ↑ 1.12x | 0 | — | — | 1m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 100.00% | 99.75% | 0.00% | 0.00% | — | → 0.99x | 1 | 11d 1h | 30d ago | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.69% | 99.90% | 99.90% | — | → 0.96x | 0 | — | — | 4m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 100.00% | 99.59% | — | — | — | → 1.02x | 0 | — | — | 7m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.27% | 99.97% | 99.97% | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.47% | 69.43% | 69.43% | — | → 1.01x | 0 | — | — | 40s ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.72% | 99.94% | 99.94% | — | → 1.05x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.88% | 60.60% | 60.60% | — | → 0.99x | 0 | — | — | 1m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.72% | 98.38% | 98.38% | — | → 1.03x | 0 | — | — | 12m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.78% | 99.31% | 99.31% | — | ↑ 1.54x | 0 | — | — | 12m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 99.69% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 9m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.51% | 95.68% | 95.68% | — | → 1.03x | 1 | 3d | 30d ago | 6m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.81% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 12m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.78% | 99.30% | 99.30% | — | ↑ 1.16x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.91% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 8m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.72% | 99.49% | 99.49% | — | → 1.00x | 0 | — | — | 4m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.85% | 99.98% | 99.98% | — | ↑ 1.08x | 1 | 4m | 25d ago | 6m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.78% | 99.66% | 99.66% | — | → 0.97x | 0 | — | — | 7m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 99.69% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 9m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.31% | 76.90% | 76.90% | — | → 0.98x | 0 | — | — | 12m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.54% | 99.84% | 99.84% | — | → 0.99x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.65% | 97.35% | 97.35% | — | ↓ 0.93x | 1 | 0s | 25d ago | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.75% | 99.86% | 99.86% | — | → 1.04x | 0 | — | — | 8m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.66% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 12m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 100.00% | 99.63% | 76.89% | 76.89% | — | ↑ 1.06x | 1 | 11d 1h | 30d ago | 4m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.63% | 24.63% | 24.63% | — | ↑ 1.30x | 0 | — | — | 1m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.69% | 99.90% | 99.90% | — | → 1.00x | 0 | — | — | 5m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.51% | 99.62% | 99.62% | — | ↑ 1.25x | 1 | 0s | 21d ago | 4m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.88% | 99.66% | 99.98% | 99.98% | — | → 1.03x | 1 | 4m | 25d ago | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.88% | 99.69% | 99.28% | 99.28% | — | → 1.00x | 2 | 0s | 21d ago | 6m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.88% | 99.88% | 99.74% | 99.74% | — | ↓ 0.94x | 3 | 0s | 20d ago | 5m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.88% | 99.76% | 17.47% | 17.47% | — | ↓ 0.79x | 1 | 11d 1h | 30d ago | 5m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.88% | 99.69% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 5m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.88% | 61.57% | 0.00% | 0.00% | — | ↓ 0.28x | 1 | 11d 1h | 30d ago | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.88% | 99.54% | 49.74% | 49.74% | — | → 1.03x | 5 | 41m | 29d ago | 5m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.88% | 99.69% | 36.33% | 36.33% | — | ↓ 0.93x | 2 | 2m | 25d ago | 6m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.88% | 99.78% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 3m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.88% | 99.39% | 97.98% | 97.98% | — | → 0.97x | 0 | — | — | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.88% | 99.82% | 1.90% | 1.90% | — | → 1.02x | 1 | 11d 1h | 30d ago | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.88% | 99.48% | 97.28% | 97.28% | — | → 1.04x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.88% | 99.78% | 93.26% | 93.26% | — | → 0.98x | 0 | — | — | 1m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.88% | 99.63% | 54.70% | 54.70% | — | → 1.00x | 0 | — | — | 1m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.88% | 99.69% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 2m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.88% | 99.48% | 22.94% | 22.94% | — | → 0.97x | 0 | — | — | 3m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.88% | 99.66% | 89.73% | 89.73% | — | ↑ 1.22x | 0 | — | — | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.88% | 99.63% | 24.54% | 24.54% | — | ↑ 1.12x | 0 | — | — | 1m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.88% | 99.02% | 99.64% | 99.64% | — | ↓ 0.87x | 5 | 57m | 23d ago | 4m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.88% | 99.78% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 2m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.88% | 99.72% | 5.16% | 5.16% | — | ↓ 0.95x | 1 | 11d 1h | 30d ago | 1m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.88% | 99.75% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 4m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.88% | 99.69% | 44.95% | 44.95% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.88% | 99.72% | 25.33% | 25.33% | — | → 1.02x | 0 | — | — | 1m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.88% | 99.72% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 19d ago | 4m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.88% | 99.79% | 99.81% | 99.81% | — | → 0.98x | 0 | — | — | 5m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.88% | 99.51% | 99.87% | 99.87% | — | → 0.98x | 1 | 0s | 27d ago | 3m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.88% | 99.66% | 99.92% | 99.92% | — | ↓ 0.91x | 1 | 0s | 21d ago | 4m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.88% | 99.57% | 99.87% | 99.87% | — | ↑ 1.20x | 1 | 0s | 21d ago | 4m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.88% | 99.57% | 99.77% | 99.77% | — | → 0.97x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.88% | 99.75% | 83.46% | 83.46% | — | → 1.01x | 2 | 0s | 21d ago | 20s ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.88% | 99.66% | 64.92% | 64.92% | — | ↑ 1.06x | 0 | — | — | 40s ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.88% | 99.75% | 99.61% | 99.61% | — | → 1.03x | 0 | — | — | 41s ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.88% | 99.81% | 71.79% | 71.79% | — | ↑ 1.14x | 0 | — | — | 40s ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.88% | 99.56% | 99.35% | 99.35% | — | ↑ 1.16x | 0 | — | — | 40s ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.88% | 99.69% | 96.88% | 96.88% | — | → 1.03x | 0 | — | — | 40s ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.88% | 99.50% | 69.87% | 69.87% | — | → 1.01x | 2 | 0s | 22d ago | 40s ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.88% | 99.88% | 63.68% | 63.68% | — | ↓ 0.92x | 0 | — | — | 41s ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.88% | 96.46% | 74.00% | 74.00% | — | ↑ 1.08x | 4 | 1h 8m | 23d ago | 20s ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.88% | 99.47% | 89.40% | 89.40% | — | → 1.04x | 0 | — | — | 20s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.88% | 98.25% | 99.10% | 99.10% | — | ↓ 0.55x | 0 | — | — | 12m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.88% | 99.72% | 96.69% | 96.69% | — | → 0.98x | 0 | — | — | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.88% | 99.81% | 97.00% | 97.00% | — | → 1.03x | 0 | — | — | 12m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.88% | 99.72% | 99.18% | 99.18% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.88% | 99.78% | 99.86% | 99.86% | — | ↓ 0.85x | 0 | — | — | 12m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.88% | 99.63% | 99.83% | 99.83% | — | → 1.03x | 0 | — | — | 12m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.88% | 99.06% | 28.39% | 28.39% | — | ↑ 1.31x | 1 | 11d 1h | 30d ago | 12m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.88% | 99.81% | 99.89% | 99.89% | — | → 0.97x | 0 | — | — | 12m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.88% | 99.72% | 92.20% | 92.20% | — | → 1.00x | 5 | 0s | 23d ago | 12m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.88% | 99.75% | 98.73% | 98.73% | — | → 1.02x | 0 | — | — | 12m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.88% | 99.15% | 97.07% | 97.07% | — | → 1.04x | 1 | 6h 31m | 30d ago | 9m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.88% | 99.81% | 99.08% | 99.08% | — | → 1.01x | 0 | — | — | 9m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.88% | 99.66% | 99.87% | 99.87% | — | ↑ 1.24x | 0 | — | — | 10m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.88% | 99.59% | 96.80% | 96.80% | — | → 1.00x | 0 | — | — | 10m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.88% | 99.53% | 93.61% | 93.61% | — | → 1.02x | 1 | 1h | 21d ago | 9m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.88% | 99.53% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.88% | 99.65% | 99.51% | 99.51% | — | → 0.98x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.88% | 99.62% | 86.85% | 86.85% | — | → 0.97x | 0 | — | — | 11m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.88% | 75.09% | 98.16% | 98.16% | — | ↑ 1.20x | 1 | 0s | 27d ago | 10m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.88% | 99.72% | 98.43% | 98.43% | — | → 0.96x | 0 | — | — | 10m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.88% | 99.50% | 84.75% | 84.75% | — | → 0.98x | 1 | 0s | 25d ago | 10m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.88% | 99.75% | 98.69% | 98.69% | — | → 1.01x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.88% | 99.78% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.88% | 99.75% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.88% | 99.84% | 98.81% | 98.81% | — | → 1.00x | 0 | — | — | 11m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.88% | 99.69% | 64.61% | 64.61% | — | → 1.02x | 1 | 4d 6h | 27d ago | 11m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.88% | 99.62% | 99.85% | 99.85% | — | → 0.99x | 1 | 3m | 21d ago | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.88% | 99.72% | 99.94% | 99.94% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.88% | 99.75% | 98.47% | 98.47% | — | → 0.97x | 1 | 0s | 27d ago | 11m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.88% | 99.72% | 29.98% | 29.98% | — | → 0.99x | 1 | 11d 1h | 30d ago | 11m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.88% | 99.65% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 8m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.88% | 99.46% | 99.67% | 99.67% | — | → 1.03x | 0 | — | — | 8m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.88% | 99.40% | 99.97% | 99.97% | — | → 0.96x | 0 | — | — | 8m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.88% | 99.68% | — | — | — | ↑ 1.29x | 0 | — | — | 7m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.88% | 99.65% | 99.95% | 99.95% | — | → 1.04x | 0 | — | — | 8m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.88% | 99.46% | 99.88% | 99.88% | — | ↑ 1.18x | 0 | — | — | 7m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.88% | 99.78% | 24.52% | 24.52% | — | ↑ 1.42x | 1 | 11d 1h | 30d ago | 8m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.88% | 99.40% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.88% | 99.72% | 100.00% | 100.00% | — | ↓ 0.93x | 0 | — | — | 8m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.88% | 99.75% | 99.67% | 99.67% | — | ↑ 1.22x | 1 | 0s | 22d ago | 7m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.88% | 99.75% | 100.00% | 100.00% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.88% | 99.75% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 7m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.88% | 99.68% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 8m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.88% | 98.10% | 39.41% | 39.41% | — | ↑ 1.16x | 12 | 18m | 21d ago | 8m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.88% | 99.68% | 99.77% | 99.77% | — | ↑ 1.30x | 1 | 0s | 21d ago | 8m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.88% | 99.84% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 7m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.88% | 99.78% | 98.04% | 98.04% | — | → 0.99x | 0 | — | — | 10m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.77% | 99.63% | 75.23% | 75.23% | — | ↑ 1.05x | 1 | 11d 1h | 30d ago | 6m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.77% | 99.66% | 68.59% | 68.59% | — | → 1.02x | 1 | 11d 1h | 30d ago | 6m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.77% | 99.66% | 98.93% | 98.93% | — | → 0.99x | 1 | 0s | 22d ago | 6m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.77% | 99.60% | 97.57% | 97.57% | — | → 1.03x | 0 | — | — | 4m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.77% | 99.75% | 99.85% | 99.85% | — | ↓ 0.88x | 0 | — | — | 2m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.77% | 99.69% | 77.28% | 77.28% | — | → 0.98x | 1 | 11d 1h | 30d ago | 1m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.77% | 96.03% | 47.85% | 47.85% | — | → 1.00x | 1 | 11d 1h | 30d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.77% | 99.60% | 50.15% | 50.15% | — | ↑ 1.08x | 0 | — | — | 1m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.77% | 99.35% | 38.65% | 38.65% | — | → 1.02x | 1 | 11d 1h | 30d ago | 3m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.77% | 99.63% | 62.65% | 62.65% | — | → 0.99x | 0 | — | — | 1m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.77% | 99.57% | 99.74% | 99.74% | — | ↑ 1.13x | 1 | 4s | 22d ago | 5m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.77% | 99.54% | 99.74% | 99.74% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.77% | 99.78% | 99.37% | 99.37% | — | → 1.04x | 0 | — | — | 1m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.77% | 99.60% | 99.48% | 99.48% | — | → 0.96x | 0 | — | — | 2m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.77% | 99.72% | 99.87% | 99.87% | — | → 0.97x | 0 | — | — | 2m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.77% | 99.63% | 88.17% | 88.17% | — | → 0.98x | 1 | 11d 1h | 30d ago | 2m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.77% | 99.51% | 99.91% | 99.91% | — | → 1.03x | 0 | — | — | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.77% | 99.60% | 96.32% | 96.32% | — | → 1.01x | 0 | — | — | 1m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.77% | 99.54% | 99.58% | 99.58% | — | → 0.98x | 2 | 0s | 22d ago | 5m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.77% | 98.77% | 98.94% | 98.94% | — | ↓ 0.26x | 1 | 0s | 26d ago | 4m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.77% | 99.29% | 96.73% | 96.73% | — | ↑ 1.32x | 0 | — | — | 1m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.77% | 99.54% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 19d ago | 5m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.77% | 99.51% | 99.79% | 99.79% | — | ↓ 0.92x | 3 | 0s | 20d ago | 2m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.77% | 99.69% | 99.67% | 99.67% | — | → 1.00x | 1 | 1d 4h | 20d ago | 1m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.77% | 99.60% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.77% | 99.69% | 99.88% | 99.88% | — | → 1.01x | 0 | — | — | 40s ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.77% | 99.47% | 82.26% | 82.26% | — | → 0.98x | 0 | — | — | 20s ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.77% | 99.59% | 97.90% | 97.90% | — | ↑ 1.45x | 0 | — | — | 12m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.77% | 99.72% | 66.50% | 66.50% | — | ↑ 1.21x | 1 | 11d 1h | 30d ago | 12m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.77% | 99.53% | 90.95% | 90.95% | — | ↑ 1.22x | 1 | 0s | 26d ago | 12m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.77% | 99.78% | 90.32% | 90.32% | — | → 1.04x | 0 | — | — | 12m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.77% | 98.81% | 98.96% | 98.96% | — | → 1.01x | 0 | — | — | 12m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.77% | 99.72% | 43.48% | 43.48% | — | → 0.97x | 1 | 11d 1h | 30d ago | 12m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.77% | 99.50% | 91.87% | 91.87% | — | → 0.95x | 1 | 30m | 30d ago | 12m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.77% | 99.78% | 89.57% | 89.57% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.77% | 99.59% | 99.78% | 99.78% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.77% | 95.74% | 97.00% | 97.00% | — | → 0.99x | 1 | 0s | 22d ago | 10m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.77% | 97.04% | 96.89% | 96.89% | — | ↑ 2.06x | 3 | 3h 55m | 19d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.77% | 99.66% | 99.87% | 99.87% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.77% | 99.44% | 99.74% | 99.74% | — | → 1.00x | 0 | — | — | 11m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.77% | 99.69% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 9m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.77% | 99.50% | 97.80% | 97.80% | — | → 0.96x | 0 | — | — | 11m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.77% | 99.75% | 6.05% | 6.05% | — | ↑ 1.15x | 1 | 11d 1h | 30d ago | 10m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.77% | 99.56% | 89.89% | 89.89% | — | → 1.02x | 1 | 0s | 20d ago | 9m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.77% | 99.62% | 96.94% | 96.94% | — | → 1.03x | 1 | 0s | 21d ago | 11m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.77% | 99.53% | 28.78% | 28.78% | — | ↑ 1.18x | 1 | 11d 1h | 30d ago | 11m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.77% | 99.78% | 93.73% | 93.73% | — | → 1.01x | 0 | — | — | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.77% | 99.34% | 99.86% | 99.86% | — | → 1.04x | 0 | — | — | 10m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.77% | 99.47% | 96.10% | 96.10% | — | ↑ 1.09x | 0 | — | — | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.77% | 88.72% | 0.69% | 0.69% | — | → 0.95x | 1 | 11d 1h | 30d ago | 10m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.77% | 99.75% | 98.78% | 98.78% | — | ↑ 1.09x | 1 | 0s | 19d ago | 11m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.77% | 99.68% | 99.97% | 99.97% | — | ↑ 1.14x | 0 | — | — | 8m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.77% | 99.62% | 98.56% | 98.56% | — | ↑ 1.15x | 0 | — | — | 11m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.77% | 99.59% | 16.67% | 16.67% | — | ↑ 1.05x | 1 | 11d 1h | 30d ago | 8m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.77% | 99.68% | 0.00% | 0.00% | — | → 1.04x | 1 | 11d 1h | 30d ago | 8m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.77% | 98.84% | 83.10% | 83.10% | — | → 1.03x | 2 | 2h 60m | 27d ago | 11m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.77% | 99.68% | 99.45% | 99.45% | — | → 0.99x | 2 | 3h 1m | 26d ago | 8m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.77% | 99.78% | 99.61% | 99.61% | — | → 1.04x | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.77% | 99.75% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.77% | 99.65% | 99.97% | 99.97% | — | ↑ 1.17x | 0 | — | — | 8m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.77% | 99.43% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 8m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.77% | 99.62% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 7m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.77% | 99.68% | 99.98% | 99.98% | — | ↑ 1.22x | 0 | — | — | 8m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.77% | 99.59% | 99.85% | 99.85% | — | → 0.97x | 1 | 0s | 21d ago | 8m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.77% | 99.72% | 60.72% | 60.72% | — | ↓ 0.86x | 0 | — | — | 7m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.77% | 99.65% | 99.92% | 99.92% | — | → 1.03x | 1 | 0s | 28d ago | 8m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.65% | 99.63% | 98.78% | 98.78% | — | → 0.98x | 13 | 7s | 25d ago | 6m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.65% | 99.72% | 70.89% | 70.89% | — | → 1.00x | 1 | 11d 1h | 30d ago | 5m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.65% | 99.69% | 99.76% | 99.76% | — | → 0.96x | 0 | — | — | 6m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.65% | 99.38% | 97.94% | 97.94% | — | ↑ 1.06x | 2 | 30m | 24d ago | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.65% | 76.08% | 0.11% | 0.11% | — | ↑ 2.78x | 1 | 11d 1h | 30d ago | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.65% | 98.39% | 57.00% | 57.00% | — | ↑ 1.07x | 0 | — | — | 1m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.65% | 99.63% | 65.57% | 65.57% | — | ↑ 1.06x | 0 | — | — | 1m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.65% | 99.66% | 99.94% | 99.94% | — | ↓ 0.87x | 0 | — | — | 5m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.65% | 99.66% | 98.00% | 98.00% | — | → 1.01x | 0 | — | — | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.65% | 99.45% | 99.96% | 99.96% | — | → 0.99x | 0 | — | — | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.65% | 99.19% | 63.14% | 63.14% | — | ↑ 1.07x | 1 | 0s | 21d ago | 1m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.65% | 98.23% | 38.36% | 38.36% | — | ↑ 1.19x | 0 | — | — | 1m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.65% | 99.69% | 22.33% | 22.33% | — | ↓ 0.89x | 1 | 11d 1h | 30d ago | 4m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.65% | 41.76% | 5.08% | 5.08% | — | → 1.00x | 1 | 11d 1h | 30d ago | 4m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.65% | 99.69% | 77.97% | 77.97% | — | ↑ 1.31x | 1 | 0s | 20d ago | 21s ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.65% | 99.57% | 81.07% | 81.07% | — | ↓ 0.95x | 0 | — | — | 40s ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.65% | 98.82% | 98.88% | 98.88% | — | ↓ 0.72x | 0 | — | — | 41s ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.65% | 99.69% | 94.26% | 94.26% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.65% | 99.34% | 97.03% | 97.03% | — | → 1.03x | 0 | — | — | 12m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.65% | 99.56% | 99.83% | 99.83% | — | ↑ 1.18x | 0 | — | — | 12m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.65% | 99.75% | 58.17% | 58.17% | — | ↑ 2.15x | 1 | 11d 1h | 30d ago | 12m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.65% | 99.78% | 98.47% | 98.47% | — | ↑ 1.26x | 0 | — | — | 10m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.65% | 99.40% | 99.67% | 99.67% | — | → 0.99x | 0 | — | — | 9m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.65% | 99.47% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 11m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.65% | 99.47% | 99.71% | 99.71% | — | ↓ 0.92x | 1 | 0s | 21d ago | 10m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.65% | 81.31% | 97.48% | 97.48% | — | → 1.00x | 1 | 0s | 20d ago | 11m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.65% | 99.53% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 11m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.65% | 99.59% | 99.76% | 99.76% | — | → 1.04x | 0 | — | — | 8m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.65% | 99.68% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 20d ago | 7m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.65% | 99.43% | — | — | — | ↓ 0.74x | 0 | — | — | 7m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.65% | 99.40% | 100.00% | 100.00% | — | ↑ 1.15x | 0 | — | — | 7m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.65% | 99.56% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 8m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.65% | 99.87% | — | — | — | ↑ 1.15x | 0 | — | — | 7m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.54% | 99.57% | 99.49% | 99.49% | — | ↑ 1.09x | 0 | — | — | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.54% | 99.51% | 99.75% | 99.75% | — | ↓ 0.92x | 0 | — | — | 6m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.54% | 99.60% | 99.65% | 99.65% | — | ↑ 1.77x | 0 | — | — | 5m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.54% | 99.42% | 99.62% | 99.62% | — | → 1.05x | 0 | — | — | 5m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.54% | 99.66% | 99.90% | 99.90% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.54% | 99.69% | 30.20% | 30.20% | — | → 0.98x | 1 | 11d 1h | 30d ago | 1m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.54% | 99.57% | 24.91% | 24.91% | — | → 0.97x | 0 | — | — | 1m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.54% | 99.47% | 98.66% | 98.66% | — | → 1.00x | 0 | — | — | 12m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.54% | 99.69% | 98.90% | 98.90% | — | → 1.02x | 0 | — | — | 12m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.54% | 90.83% | 95.25% | 95.25% | — | ↑ 1.12x | 11 | 1h 11m | 21d ago | 10m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.54% | 99.62% | 99.93% | 99.93% | — | → 1.02x | 1 | 0s | 21d ago | 10m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.54% | 99.62% | 98.35% | 98.35% | — | ↑ 1.41x | 0 | — | — | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.54% | 99.62% | 97.87% | 97.87% | — | → 0.95x | 0 | — | — | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.54% | 99.62% | 98.37% | 98.37% | — | → 1.04x | 0 | — | — | 11m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.54% | 99.47% | 98.11% | 98.11% | — | ↑ 1.10x | 0 | — | — | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.54% | 99.19% | 97.74% | 97.74% | — | ↑ 1.08x | 3 | 5h 37m | 20d ago | 11m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.54% | 99.53% | 98.81% | 98.81% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.54% | 99.75% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 7m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.54% | 99.62% | 99.98% | 99.98% | — | → 0.96x | 0 | — | — | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.54% | 99.27% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 8m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.42% | 99.02% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 6m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.42% | 99.45% | 99.60% | 99.60% | — | → 1.02x | 1 | 2s | 21d ago | 6m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.42% | 99.51% | 22.30% | 22.30% | — | ↑ 1.18x | 1 | 0s | 21d ago | 2m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.42% | 99.42% | 56.98% | 56.98% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.42% | 99.54% | 99.73% | 99.73% | — | ↑ 1.11x | 0 | — | — | 5m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.42% | 99.44% | 24.53% | 24.53% | — | → 1.01x | 0 | — | — | 2m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.42% | 98.90% | 51.42% | 51.42% | — | ↑ 1.10x | 1 | 0s | 24d ago | 5m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.42% | 96.30% | 17.31% | 17.31% | — | ↓ 0.87x | 0 | — | — | 3m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.42% | 98.85% | 99.82% | 99.82% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.42% | 98.40% | 90.79% | 90.79% | — | ↑ 1.11x | 1 | 0s | 21d ago | 11m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.42% | 98.28% | 32.93% | 32.93% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.42% | 90.31% | 96.14% | 96.14% | — | → 1.04x | 3 | 13h 21m | 21d ago | 8m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.31% | 99.32% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 2m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.31% | 99.57% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 20d ago | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.31% | 99.22% | 98.16% | 98.16% | — | → 0.96x | 0 | — | — | 12m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.31% | 99.63% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.31% | 99.43% | 98.56% | 98.56% | — | → 1.00x | 1 | 3h 29m | 30d ago | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.30% | 99.27% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 8m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.19% | 99.24% | 99.61% | 99.61% | — | → 1.01x | 0 | — | — | 6m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.19% | 99.05% | 99.76% | 99.76% | — | → 1.02x | 0 | — | — | 3m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.19% | 99.10% | 31.58% | 31.58% | — | → 1.04x | 1 | 11d 1h | 30d ago | 1m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.19% | 99.44% | 99.64% | 99.64% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.19% | 99.59% | 26.43% | 26.43% | — | ↑ 1.14x | 1 | 1d 7h | 30d ago | 12m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.19% | 99.15% | 97.10% | 97.10% | — | ↑ 1.05x | 1 | 0s | 27d ago | 10m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.19% | 99.50% | 55.08% | 55.08% | — | ↑ 1.15x | 9 | 0s | 20d ago | 11m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.19% | 99.29% | — | — | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.08% | 99.59% | 99.00% | 99.00% | — | ↑ 1.78x | 0 | — | — | 12m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.07% | 99.56% | 99.34% | 99.34% | — | ↓ 0.93x | 3 | 0s | 20d ago | 10m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (85)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 98.96% | 99.33% | 98.29% | 98.29% | — | → 1.00x | 0 | — | — | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.96% | 98.70% | 2.34% | 2.34% | — | ↑ 1.14x | 1 | 11d 1h | 30d ago | 1m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 98.96% | 97.42% | 99.27% | 99.27% | — | ↑ 1.28x | 0 | — | — | 40s ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 98.88% | 98.88% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.85% | 98.91% | 74.11% | 74.11% | — | → 0.99x | 2 | 1h 15m | 20d ago | 40s ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.84% | 91.61% | 92.56% | 92.56% | — | → 0.96x | 6 | 40m | 20d ago | 10m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 98.84% | 99.34% | 14.21% | 14.21% | — | ↑ 1.49x | 1 | 11d 1h | 30d ago | 10m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.84% | 90.54% | 87.87% | 87.87% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 98.73% | 99.10% | 24.43% | 24.43% | — | → 1.02x | 0 | — | — | 1m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.73% | 99.34% | 93.06% | 93.06% | — | ↑ 1.35x | 0 | — | — | 10m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.72% | 98.99% | 99.94% | 99.94% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.61% | 98.61% | 99.34% | 99.34% | — | ↑ 1.15x | 2 | 0s | 21d ago | 7m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 98.61% | 99.34% | 91.90% | 91.90% | — | → 1.05x | 0 | — | — | 7m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.50% | 97.01% | 83.18% | 83.18% | — | → 1.04x | 1 | 3m | 25d ago | 20s ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.50% | 99.00% | 81.53% | 81.53% | — | ↑ 1.06x | 0 | — | — | 21s ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 98.50% | 99.15% | 99.85% | 99.85% | — | ↑ 1.16x | 1 | 6h 1m | 20d ago | 9m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 98.49% | 99.02% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.38% | 86.90% | 99.61% | 99.61% | — | ↑ 1.12x | 3 | 0s | 19d ago | 8m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.26% | 99.15% | 95.85% | 95.85% | — | → 1.04x | 0 | — | — | 11m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.26% | 97.65% | 66.05% | 66.05% | — | ↑ 1.20x | 7 | 19h 32m | 24d ago | 11m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.15% | 95.26% | 99.82% | 99.82% | — | → 1.00x | 1 | 0s | 30d ago | 10m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.03% | 98.69% | 98.12% | 98.12% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 97.93% | 98.93% | 99.56% | 99.56% | — | → 1.02x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 97.92% | 96.72% | 97.21% | 97.21% | — | ↑ 1.16x | 0 | — | — | 12m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.80% | 96.49% | 98.02% | 98.02% | — | ↑ 1.82x | 0 | — | — | 11m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 97.69% | 97.63% | 89.02% | 89.02% | — | → 1.02x | 0 | — | — | 4m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 97.58% | 85.18% | 85.28% | 85.28% | — | ↑ 1.41x | 0 | — | — | 2m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.57% | 99.03% | 98.88% | 98.88% | — | ↑ 1.13x | 1 | 0s | 20d ago | 9m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.45% | 96.98% | 97.85% | 97.85% | — | → 1.04x | 0 | — | — | 8m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.31% | 98.77% | 99.68% | 99.68% | — | → 1.02x | 0 | — | — | 2m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 95.83% | 98.56% | 98.83% | 98.83% | — | → 1.04x | 0 | — | — | 11m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 94.23% | 97.76% | 98.78% | 98.78% | — | ↑ 2.38x | 1 | 0s | 21d ago | 4m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 93.29% | 90.51% | 77.59% | 77.59% | — | ↑ 1.51x | 0 | — | — | 12m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 91.91% | 97.47% | 56.85% | 56.85% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 91.70% | 97.27% | 26.84% | 26.84% | — | ↑ 1.56x | 0 | — | — | 1m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 91.36% | 82.23% | 98.89% | 98.89% | — | ↑ 1.48x | 1 | 0s | 29d ago | 6m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 91.36% | 97.53% | 93.42% | 93.42% | — | ↑ 1.31x | 2 | 6m | 25d ago | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 91.01% | 74.59% | 94.11% | 94.11% | — | ↑ 1.15x | 3 | 1d 6h | 22d ago | 6m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.78% | 89.17% | 78.01% | 78.01% | — | ↑ 1.10x | 66 | 5s | 21d ago | 6m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 89.85% | 33.47% | 40.01% | 40.01% | — | ↑ 1.21x | 1 | 2d 22h | 30d ago | 3m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 89.63% | 97.07% | 93.57% | 93.57% | — | ↑ 1.19x | 1 | 4m | 25d ago | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 86.85% | 82.89% | 69.98% | 69.98% | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 86.76% | 83.45% | — | — | — | ↑ 1.22x | 0 | — | — | 7m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 85.25% | 77.15% | 66.07% | 66.07% | — | ↑ 1.89x | 1 | 11d 1h | 30d ago | 6m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 85.14% | 77.49% | 75.11% | 75.11% | — | ↑ 1.76x | 1 | 11d 1h | 30d ago | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 85.09% | 79.81% | 87.06% | 87.06% | — | ↑ 1.29x | 0 | — | — | 12m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 84.79% | 85.13% | — | — | — | → 1.01x | 0 | — | — | 6m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 83.93% | 74.70% | 83.85% | 83.85% | — | ↑ 2.09x | 3 | 0s | 25d ago | 12m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.49% | 79.36% | 67.23% | 67.23% | — | ↑ 1.84x | 1 | 11d 1h | 30d ago | 6m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 82.12% | 82.90% | 68.13% | 68.13% | — | ↑ 1.15x | 1 | 11d 1h | 30d ago | 2m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 82.12% | 92.32% | 99.09% | 99.09% | — | → 1.01x | 0 | — | — | 1m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 81.85% | 78.65% | 10.72% | 10.72% | — | ↑ 1.25x | 1 | 11d 1h | 30d ago | 12m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 80.81% | 77.37% | 48.46% | 48.46% | — | ↑ 1.30x | 1 | 11d 1h | 30d ago | 12m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 80.53% | 76.91% | 68.41% | 68.41% | — | ↑ 1.14x | 1 | 11d 1h | 30d ago | 6m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 80.07% | 48.22% | 78.42% | 78.42% | — | ↑ 1.40x | 1 | 11d 1h | 30d ago | 8m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 79.84% | 74.86% | 54.05% | 54.05% | — | ↑ 2.37x | 1 | 11d 1h | 30d ago | 6m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 79.49% | 69.04% | 50.52% | 50.52% | — | ↑ 1.07x | 130 | 59m | 20d ago | 6m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 79.49% | 75.90% | 98.92% | 98.92% | — | ↑ 1.17x | 1 | 0s | 25d ago | 6m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 79.35% | 84.70% | 99.09% | 99.09% | — | ↑ 1.21x | 0 | — | — | 5m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 79.35% | 75.37% | 96.79% | 96.79% | — | ↑ 1.46x | 0 | — | — | 1m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 78.69% | 71.98% | 99.93% | 99.93% | — | ↑ 2.83x | 0 | — | — | 5m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 78.55% | 79.68% | 96.32% | 96.32% | — | ↑ 1.09x | 42 | 19m | 22d ago | 4m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 78.41% | 71.33% | 69.01% | 69.01% | — | ↑ 1.09x | 0 | — | — | 20s ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 78.32% | 80.89% | 63.15% | 63.15% | — | ↑ 1.11x | 52 | 9m | 21d ago | 3m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 77.39% | 85.32% | 99.92% | 99.92% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 77.39% | 84.30% | 99.78% | 99.78% | — | ↑ 1.77x | 0 | — | — | 5m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 77.30% | 71.20% | 91.98% | 91.98% | — | ↑ 1.16x | 5 | 59s | 21d ago | 6m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 77.23% | 24.91% | 97.75% | 97.75% | — | → 1.00x | 2 | 0s | 20d ago | 12m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 77.16% | 80.62% | 98.45% | 98.45% | — | → 1.04x | 9 | 0s | 21d ago | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 77.06% | 76.50% | 88.70% | 88.70% | — | ↑ 1.33x | 1 | 6h | 19d ago | 11m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 76.04% | 77.31% | 86.23% | 86.23% | — | ↑ 1.13x | 2 | 0s | 25d ago | 5m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 75.43% | 76.05% | 54.78% | 54.78% | — | ↑ 1.11x | 1 | 11d 1h | 30d ago | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 74.88% | 68.22% | 64.20% | 64.20% | — | ↑ 1.12x | 4 | 0s | 23d ago | 5m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 73.64% | 74.13% | 93.16% | 93.16% | — | → 1.02x | 1 | 0s | 24d ago | 12m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 73.20% | 79.45% | 82.00% | 82.00% | — | ↑ 1.15x | 38 | 9m | 21d ago | 7m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 72.72% | 72.75% | 85.02% | 85.02% | — | ↑ 1.17x | 5 | 6m | 22d ago | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 71.93% | 75.50% | 98.53% | 98.53% | — | → 1.04x | 2 | 0s | 20d ago | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 71.86% | 75.15% | 86.83% | 86.83% | — | ↑ 1.71x | 2 | 0s | 26d ago | 1m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 71.58% | 73.47% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 7m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 70.92% | 72.71% | 100.00% | 100.00% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 69.55% | 77.04% | 93.77% | 93.77% | — | → 0.97x | 0 | — | — | 5m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 68.29% | 89.92% | 99.95% | 99.95% | — | → 0.96x | 0 | — | — | 9m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 51.44% | 61.69% | 75.15% | 75.15% | — | ↑ 1.09x | 1 | 11d 1h | 30d ago | 2m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 49.54% | 13.48% | 99.95% | 99.95% | — | → 0.97x | 0 | — | — | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 22.15% | 54.39% | 98.87% | 98.87% | — | ↑ 3.45x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🔴 Down (315)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.77% | 72.49% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.54% | 99.44% | 98.95% | 98.95% | — | ↑ 1.09x | 0 | — | — | 10m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.44% | 99.44% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.42% | 99.59% | 100.00% | 100.00% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 99.30% | 33.44% | 99.82% | 99.82% | — | → 1.05x | 2 | 2m | 23d ago | 7m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.07% | 99.30% | — | — | — | → 0.97x | 0 | — | — | 7m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 98.02% | 98.02% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 97.57% | 95.82% | 96.18% | 96.18% | — | ↑ 1.07x | 1 | 0s | 28d ago | 12m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 94.23% | 96.38% | 98.12% | 98.12% | — | ↑ 1.16x | 0 | — | — | 1m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 90.89% | 96.05% | 96.43% | 96.43% | — | ↑ 1.15x | 3 | 1d 4h | 19d ago | 5m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 80.51% | 85.32% | 75.72% | 75.72% | — | ↑ 1.09x | 1 | 11d 1h | 30d ago | 5m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 78.61% | 76.62% | 44.62% | 44.62% | — | ↑ 1.07x | 1 | 10d 10h | 30d ago | 12m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 77.85% | 75.40% | 86.29% | 86.29% | — | ↑ 1.54x | 4 | 0s | 21d ago | 3m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 77.07% | 76.70% | 99.77% | 99.77% | — | ↑ 1.40x | 0 | — | — | 5m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 76.47% | 76.60% | 99.65% | 99.65% | — | ↑ 1.10x | 0 | — | — | 2m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 75.29% | 75.28% | 6.48% | 6.48% | — | ↑ 1.09x | 1 | 11d 1h | 30d ago | 8m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 73.84% | 20.73% | 25.44% | 25.44% | — | → 0.99x | 2 | 4d 20h | 21d ago | 10m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 72.74% | 92.16% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 7m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 71.58% | 78.69% | 97.23% | 97.23% | — | ↑ 1.81x | 6 | 0s | 22d ago | 7m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 71.38% | 20.15% | 46.51% | 46.51% | — | → 0.98x | 3 | 10h 4m | 27d ago | 11m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 67.13% | 18.37% | 22.80% | 22.80% | — | ↓ 0.85x | 0 | — | — | 1m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 64.63% | 59.21% | 52.45% | 52.45% | — | ↑ 1.05x | 1 | 11d 1h | 30d ago | 6m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 64.15% | 89.96% | — | — | — | ↑ 1.12x | 0 | — | — | 7m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 56.38% | 66.25% | 99.88% | 99.88% | — | → 0.99x | 2 | 0s | 27d ago | 8m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 56.26% | 75.47% | 99.06% | 99.06% | — | ↑ 1.23x | 1 | 0s | 21d ago | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 55.82% | 88.09% | 99.80% | 99.80% | — | → 1.02x | 0 | — | — | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 52.20% | 57.30% | 98.37% | 98.37% | — | ↑ 3.04x | 3 | 3m | 23d ago | 7m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 51.86% | 67.59% | 91.43% | 91.43% | — | ↑ 2.00x | 0 | — | — | 7m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 45.44% | 85.06% | 76.88% | 76.88% | — | ↑ 1.11x | 1 | 11d 1h | 30d ago | 4m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 16.69% | 62.26% | 68.70% | 68.70% | — | ↓ 0.73x | 1 | 11d 1h | 30d ago | 8m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 15.16% | 74.14% | 98.59% | 98.59% | — | → 0.97x | 11 | 6m | 21d ago | 9m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 3.01% | 4.71% | 7.76% | 7.76% | — | ↑ 1.08x | 1 | 11d 1h | 30d ago | 10m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.38% | 1.21% | 0.10% | 0.10% | — | ↑ 2.21x | 1 | 11d 1h | 30d ago | 2m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.12% | 0.38% | 79.86% | 79.86% | — | ↑ 4.72x | 1 | 11d 1h | 30d ago | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.12% | 0.90% | 87.63% | 87.63% | — | ↓ 0.05x | 0 | — | — | 12m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.34% | 63.31% | 63.31% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.34% | 59.84% | 59.84% | — | — | 2 | 60m | 20d ago | 12m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.34% | 70.78% | 70.78% | — | — | 3 | 3d 14h | 19d ago | 12m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.34% | 52.44% | 52.44% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.34% | 5.20% | 5.20% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.34% | 10.24% | 10.24% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.28% | 88.73% | 88.73% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.35% | 99.82% | 99.82% | — | — | 1 | 7h | 20d ago | 9m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.34% | 47.31% | 47.31% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.35% | 73.96% | 73.96% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.34% | 74.22% | 74.22% | — | — | 3 | 2d 6h | 26d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.28% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.34% | 3.13% | 3.13% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.34% | 40.15% | 40.15% | — | — | 0 | — | — | 2m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.34% | 33.64% | 33.64% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 34.98% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.35% | 99.65% | 99.65% | — | — | 2 | 30m | 21d ago | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.31% | 90.14% | 90.14% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.34% | 85.33% | 85.33% | — | — | 95 | 33m | 21d ago | 11m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.34% | 83.66% | 83.66% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.34% | 21.09% | 21.09% | — | — | 1 | 11d 1h | 30d ago | 19s ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.34% | 27.04% | 27.04% | — | — | 1 | 11d 1h | 30d ago | 41s ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.34% | 84.65% | 84.65% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.34% | 75.27% | 75.27% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.34% | 57.88% | 57.88% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.34% | 70.96% | 70.96% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.34% | 19.82% | 19.82% | — | — | 1 | 7d 21h | 27d ago | 2m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.60% | 83.11% | 83.11% | — | — | 2 | 2d 24h | 24d ago | 10m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.34% | 13.15% | 13.15% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 18.81% | 44.49% | 44.49% | — | — | 1 | 11d 1h | 30d ago | 20s ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.34% | 87.39% | 87.39% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.34% | 30.30% | 30.30% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.28% | 99.75% | 99.75% | — | — | 1 | 0s | 20d ago | 7m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.34% | 78.14% | 78.14% | — | — | 96 | 1h 13m | 20d ago | 1m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.34% | 98.15% | 98.15% | — | — | 1 | 8d 1h | 27d ago | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.34% | 78.64% | 78.64% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.34% | 3.12% | 3.12% | — | — | 1 | 11d 1h | 30d ago | 41s ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.34% | 32.40% | 32.40% | — | — | 1 | 4d 12h | 23d ago | 3m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.28% | 76.21% | 76.21% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.28% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.35% | 72.40% | 72.40% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.34% | 48.90% | 48.90% | — | — | 2 | 5d 12h | 30d ago | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.35% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 23d ago | 7m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 68.57% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.34% | 31.88% | 31.88% | — | — | 1 | 9d 1h | 28d ago | 40s ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.28% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 20d ago | 9m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.28% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.34% | 84.44% | 84.44% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.35% | 32.34% | 32.34% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.38% | 64.69% | 64.69% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.34% | 46.41% | 46.41% | — | — | 2 | 5d 11h | 20d ago | 42s ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.34% | 50.25% | 50.25% | — | — | 0 | — | — | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.34% | 96.06% | 96.06% | — | — | 2 | 1d 17h | 22d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.35% | 69.29% | 69.29% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.35% | 39.40% | 39.40% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.34% | 64.35% | 64.35% | — | — | 1 | 11d 1h | 30d ago | 20s ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.34% | 26.33% | 26.33% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 28.63% | 93.54% | 93.54% | — | — | 2 | 30m | 22d ago | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.28% | 98.70% | 98.70% | — | — | 1 | 0s | 29d ago | 8m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.34% | 50.43% | 50.43% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.28% | 75.41% | 75.41% | — | — | 78 | 1h 32m | 19d ago | 10m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.34% | 22.07% | 22.07% | — | — | 1 | 11d 1h | 30d ago | 21s ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.34% | 98.37% | 98.37% | — | — | 0 | — | — | 12m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.31% | 32.48% | 32.48% | — | — | 1 | 9d 18h | 29d ago | 1m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.35% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.35% | 48.30% | 48.30% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.34% | 46.73% | 46.73% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.34% | 21.32% | 21.32% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.35% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.34% | 4.63% | 4.63% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.34% | 60.67% | 60.67% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.35% | 99.92% | 99.92% | — | — | 0 | — | — | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.34% | 68.44% | 68.44% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.28% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.28% | 98.40% | 98.40% | — | — | 0 | — | — | 8m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.34% | 99.74% | 99.74% | — | — | 0 | — | — | 6m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.34% | 5.52% | 5.52% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.34% | 81.13% | 81.13% | — | — | 0 | — | — | 12m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.34% | 73.53% | 73.53% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.34% | 74.18% | 74.18% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.34% | 99.84% | 99.84% | — | — | 0 | — | — | 5m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.35% | 99.89% | 99.89% | — | — | 1 | 3m | 22d ago | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.28% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.34% | 83.98% | 83.98% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.34% | 20.14% | 20.14% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.35% | 99.95% | 99.95% | — | — | 0 | — | — | 8m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.34% | 48.81% | 48.81% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.34% | 83.92% | 83.92% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.35% | 67.73% | 67.73% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.28% | 83.84% | 83.84% | — | — | 5 | 13m | 24d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.35% | 74.74% | 74.74% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.34% | 47.90% | 47.90% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.35% | 99.25% | 99.25% | — | — | 0 | — | — | 9m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.28% | 91.99% | 91.99% | — | — | 0 | — | — | 10m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.34% | 22.80% | 22.80% | — | — | 1 | 0s | 29d ago | 2m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.28% | 98.05% | 98.05% | — | — | 1 | 0s | 20d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.34% | 55.75% | 55.75% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.03% | — | — | — | — | 0 | — | — | 7m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.28% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 21d ago | 8m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.34% | 43.20% | 43.20% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.28% | 16.44% | 16.44% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.34% | 39.16% | 39.16% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.34% | 74.31% | 74.31% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.35% | 20.55% | 20.55% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 0.00% | 26.83% | 98.24% | 98.24% | — | — | 0 | — | — | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.34% | 54.39% | 54.39% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.35% | 75.74% | 75.74% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.34% | 35.55% | 35.55% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.34% | 65.91% | 65.91% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.28% | 99.94% | 99.94% | — | — | 0 | — | — | 9m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.34% | 70.74% | 70.74% | — | — | 3 | 3d 14h | 19d ago | 12m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.34% | 34.00% | 34.00% | — | — | 2 | 30m | 23d ago | 3m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.34% | 62.39% | 62.39% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.43% | 34.65% | 34.65% | — | — | 0 | — | — | 40s ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.34% | 45.59% | 45.59% | — | — | 0 | — | — | 6m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.34% | 76.99% | 76.99% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.34% | 38.64% | 38.64% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.34% | 22.32% | 22.32% | — | — | 0 | — | — | 5m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.34% | 90.53% | 90.53% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.35% | 91.04% | 91.04% | — | — | 1 | 3d 23h | 23d ago | 9m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.34% | 42.69% | 42.69% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.34% | 39.95% | 39.95% | — | — | 1 | 11d 1h | 30d ago | 21s ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.28% | 99.29% | 99.29% | — | — | 0 | — | — | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.34% | 24.01% | 24.01% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.28% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.34% | 81.34% | 81.34% | — | — | 1 | 3h | 23d ago | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.34% | 73.32% | 73.32% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.34% | 2.87% | 2.87% | — | — | 1 | 11d 1h | 30d ago | 21s ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.34% | 49.45% | 49.45% | — | — | 0 | — | — | 12m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.34% | 39.57% | 39.57% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.34% | 20.82% | 20.82% | — | — | 43 | 9m | 19d ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.34% | 23.09% | 23.09% | — | — | 2 | 30m | 25d ago | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.35% | 20.58% | 20.58% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.28% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.35% | 33.55% | 33.55% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.34% | 52.99% | 52.99% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.34% | 82.46% | 82.46% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.34% | 92.62% | 92.62% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.34% | 23.25% | 23.25% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.34% | 27.77% | 27.77% | — | — | 32 | 13m | 22d ago | 20s ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.34% | 86.17% | 86.17% | — | — | 1 | 10s | 25d ago | 4m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.28% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.34% | 49.10% | 49.10% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.34% | 86.30% | 86.30% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.34% | 65.07% | 65.07% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.34% | 99.12% | 99.12% | — | — | 3 | 4h | 19d ago | 3m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.34% | 92.19% | 92.19% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.00% | 1.65% | 44.99% | 44.99% | — | — | 0 | — | — | 20s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.28% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.34% | 99.26% | 99.26% | — | — | 0 | — | — | 2m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.34% | 99.77% | 99.77% | — | — | 0 | — | — | 5m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.34% | 16.23% | 16.23% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.34% | 45.98% | 45.98% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.34% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 19d ago | 12m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.35% | 98.92% | 98.92% | — | — | 0 | — | — | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.34% | 46.05% | 46.05% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.35% | 16.77% | 16.77% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.34% | 51.26% | 51.26% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.34% | 35.56% | 35.56% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.34% | 19.49% | 19.49% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.35% | 99.81% | 99.81% | — | — | 0 | — | — | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.34% | 72.39% | 72.39% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.34% | 83.68% | 83.68% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.34% | 26.68% | 26.68% | — | — | 0 | — | — | 1m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.35% | 46.80% | 46.80% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.34% | 75.88% | 75.88% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.34% | 22.72% | 22.72% | — | — | 2 | 2d 20h | 25d ago | 1m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.34% | 68.72% | 68.72% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 8m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.34% | 18.10% | 18.10% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.34% | 54.28% | 54.28% | — | — | 1 | 11d 1h | 30d ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.34% | 35.49% | 35.49% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.34% | 3.84% | 3.84% | — | — | 2 | 5d 6h | 20d ago | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.34% | 63.55% | 63.55% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.34% | 23.11% | 23.11% | — | — | 0 | — | — | 4m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.28% | 99.60% | 99.60% | — | — | 0 | — | — | 9m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.34% | 22.23% | 22.23% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.34% | 6.70% | 6.70% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.35% | 22.60% | 22.60% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 1m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.34% | 62.64% | 62.64% | — | — | 1 | 11d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.35% | 30.92% | 30.92% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.35% | 68.76% | 68.76% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.28% | 3.80% | 3.80% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.35% | 44.20% | 44.20% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.35% | 38.02% | 38.02% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.34% | 17.16% | 17.16% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.34% | 10.15% | 10.15% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.31% | 23.40% | 23.40% | — | — | 14 | 32m | 22d ago | 1m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.34% | 99.53% | 99.53% | — | — | 0 | — | — | 6m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.34% | 16.69% | 16.69% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.34% | 21.71% | 21.71% | — | — | 31 | 2h 13m | 19d ago | 3m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.34% | 14.75% | 14.75% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.35% | 25.49% | 25.49% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.34% | 8.99% | 8.99% | — | — | 1 | 11d 1h | 30d ago | 20s ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 0.00% | 17.27% | 92.86% | 92.86% | — | — | 3 | 0s | 19d ago | 11m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.35% | 3.93% | 3.93% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.35% | 4.55% | 4.55% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.34% | 46.30% | 46.30% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.35% | 76.63% | 76.63% | — | — | 1 | 11d 1h | 30d ago | 7m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.28% | 32.96% | 32.96% | — | — | 0 | — | — | 3m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.35% | 36.28% | 36.28% | — | — | 1 | 11d 1h | 30d ago | 9m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.34% | 98.48% | 98.48% | — | — | 0 | — | — | 12m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.34% | 63.49% | 63.49% | — | — | 1 | 11d 1h | 30d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.34% | 40.17% | 40.17% | — | — | 1 | 11d 1h | 30d ago | 12m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.34% | 77.23% | 77.23% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.34% | 43.61% | 43.61% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.34% | 23.13% | 23.13% | — | — | 0 | — | — | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.34% | 0.01% | 0.01% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.34% | 22.68% | 22.68% | — | — | 0 | — | — | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.34% | 60.97% | 60.97% | — | — | 24 | 0s | 21d ago | 11m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.34% | 38.37% | 38.37% | — | — | 1 | 11d 1h | 30d ago | 4m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.35% | 1.35% | 1.35% | — | — | 1 | 11d 1h | 30d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.34% | 17.59% | 17.59% | — | — | 1 | 11d 1h | 30d ago | 20s ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.34% | 91.72% | 91.72% | — | — | 22 | 0s | 19d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.35% | 99.77% | 99.77% | — | — | 2 | 2m | 20d ago | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.34% | 99.17% | 99.17% | — | — | 0 | — | — | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.34% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 3m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | 9m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 11d 1h | 30d ago | — |

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
