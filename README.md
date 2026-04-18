# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**512 providers** — 82 🟢 operational · 23 🟡 degraded · 75 🔴 down · 332 ⚫ unknown

_Updated 2026-04-18 13:55 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (82)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ai.api.xn--fiqs8s](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.95% | 90.53% | 90.53% | 1253 ms | ↑ 2.34x | 2 | 0s | 15d ago | 7h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.98% | 99.98% | 99.98% | 2163 ms | ↑ 1.26x | 1 | 0s | 29d ago | 7h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 100.00% | 99.88% | 99.97% | 99.97% | 634 ms | ↓ 0.59x | 5 | 0s | 12d ago | 7h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 100.00% | 99.26% | 92.28% | 92.28% | 502 ms | ↓ 0.44x | 31 | 0s | 9d ago | 7h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.98% | 99.69% | 99.69% | 1620 ms | → 1.04x | 1 | 0s | 24d ago | 7h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.94% | 99.94% | 911 ms | ↑ 1.33x | 7 | 0s | 9d ago | 7h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 100.00% | 99.94% | 99.94% | 2524 ms | ↑ 1.29x | 0 | — | — | 7h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.88% | 99.96% | 99.96% | 865 ms | → 1.01x | 5 | 0s | 9d ago | 7h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 100.00% | 100.00% | 837 ms | → 1.00x | 0 | — | — | 7h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.98% | 99.99% | 99.99% | 647 ms | ↓ 0.87x | 1 | 0s | 15d ago | 7h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.98% | 99.93% | 99.93% | 704 ms | ↑ 1.17x | 1 | 0s | 12d ago | 7h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 100.00% | 99.88% | 99.93% | 99.93% | 2125 ms | ↓ 0.76x | 5 | 0s | 9d ago | 7h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.93% | 90.02% | 90.02% | 811 ms | ↑ 1.92x | 3 | 0s | 9d ago | 7h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.98% | 99.98% | 99.98% | 639 ms | → 0.99x | 1 | 0s | 29d ago | 7h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 100.00% | 100.00% | 100.00% | 100.00% | 752 ms | → 1.01x | 0 | — | — | 7h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.76% | 99.62% | 99.62% | 1548 ms | → 1.05x | 10 | 0s | 10d ago | 7h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.50% | 99.31% | 99.31% | 1802 ms | → 1.01x | 79 | 3m | 8d ago | 7h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.91% | 99.69% | 99.69% | 1562 ms | ↑ 1.12x | 3 | 3m | 9d ago | 7h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1512 ms | ↑ 1.06x | 4 | 0s | 12d ago | 7h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.17% | 57.50% | 57.50% | 922 ms | ↓ 0.74x | 31 | 1m | 8d ago | 7h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.33% | 99.33% | 388 ms | → 0.99x | 0 | — | — | 7h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.17% | 99.76% | 99.76% | 1417 ms | ↓ 0.73x | 35 | 0s | 8d ago | 7h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 100.00% | 99.90% | 99.92% | 99.92% | 1152 ms | ↓ 0.61x | 5 | 0s | 6h ago | 7h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.71% | 99.84% | 99.84% | 577 ms | ↑ 1.07x | 6 | 10m | 10d ago | 7h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.69% | 99.83% | 99.83% | 1187 ms | → 1.03x | 9 | 4m | 8d ago | 7h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.98% | 99.97% | 99.97% | 1355 ms | → 1.04x | 1 | 0s | 24d ago | 7h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.88% | 98.95% | 98.95% | 1114 ms | ↑ 1.18x | 2 | 15m | 15d ago | 7h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.98% | 99.99% | 99.99% | 1095 ms | ↑ 1.36x | 1 | 0s | 8d ago | 7h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.89% | 99.89% | 99.90% | 99.90% | 893 ms | → 1.00x | 1 | 0s | 7d ago | 7h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.95% | 99.99% | 99.99% | 547 ms | ↓ 0.80x | 2 | 0s | 4d ago | 7h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.89% | 99.93% | 99.81% | 99.81% | 776 ms | ↑ 1.07x | 3 | 0s | 6d ago | 7h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.89% | 99.81% | 99.74% | 99.74% | 901 ms | ↓ 0.92x | 8 | 0s | 4d ago | 7h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.89% | 99.34% | 99.53% | 99.53% | 1116 ms | → 0.99x | 24 | 2m | 3d ago | 7h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.89% | 99.98% | 99.91% | 99.91% | 1122 ms | ↑ 1.10x | 1 | 0s | 4d ago | 7h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.89% | 99.00% | 99.48% | 99.48% | 816 ms | ↓ 0.86x | 32 | 3m | 3d ago | 7h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.89% | 98.20% | 99.38% | 99.38% | 886 ms | ↓ 0.86x | 60 | 3m | 4d ago | 7h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.89% | 99.79% | 99.80% | 99.80% | 836 ms | → 1.02x | 8 | 1m | 4d ago | 7h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.89% | 99.93% | 99.90% | 99.90% | 1314 ms | ↑ 1.23x | 3 | 0s | 7d ago | 7h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.89% | 99.93% | 99.94% | 99.94% | 1587 ms | ↑ 1.24x | 2 | 0s | 4d ago | 7h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.89% | 99.88% | 99.93% | 99.93% | 493 ms | ↑ 1.58x | 5 | 0s | 4d ago | 7h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.89% | 99.98% | 99.99% | 99.99% | 1380 ms | ↑ 1.71x | 1 | 0s | 14h ago | 7h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.89% | 99.90% | 98.88% | 98.88% | 2069 ms | ↑ 1.32x | 4 | 0s | 14h ago | 7h ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.89% | 99.31% | 33.46% | 33.46% | 2144 ms | → 0.99x | 18 | 7m | 34m ago | 7h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.89% | 99.86% | 99.91% | 99.91% | 1186 ms | ↓ 0.91x | 6 | 0s | 2d ago | 7h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.89% | 99.95% | 99.91% | 99.91% | 1329 ms | → 1.03x | 2 | 0s | 2d ago | 7h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.89% | 99.86% | 98.62% | 98.62% | 1959 ms | ↑ 1.25x | 5 | 2m | 1d ago | 7h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.89% | 95.84% | 96.86% | 96.86% | 1527 ms | → 1.00x | 7 | 3h 60m | 3d ago | 7h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.89% | 99.90% | 49.94% | 49.94% | 1737 ms | ↑ 1.06x | 4 | 0s | 3d ago | 7h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 99.78% | 99.81% | 99.78% | 99.78% | 2340 ms | ↑ 1.06x | 8 | 0s | 9h ago | 7h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.78% | 21.59% | 5.96% | 5.96% | 1393 ms | ↓ 0.95x | 2 | 11d 8h | 9h ago | 7h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.78% | 99.69% | 99.91% | 99.91% | 2228 ms | ↑ 1.45x | 14 | 0s | 6h ago | 7h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.78% | 99.74% | 99.81% | 99.81% | 679 ms | ↑ 1.06x | 11 | 0s | 4d ago | 7h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.78% | 99.38% | 99.43% | 99.43% | 1745 ms | ↓ 0.87x | 26 | 0s | 5d ago | 7h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.78% | 99.83% | 99.88% | 99.88% | 673 ms | ↓ 0.82x | 7 | 0s | 1d ago | 7h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.78% | 99.95% | 99.91% | 99.91% | 1611 ms | ↑ 1.44x | 2 | 0s | 11h ago | 7h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.78% | 99.95% | 96.82% | 96.82% | 1821 ms | → 0.98x | 2 | 0s | 11h ago | 7h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.78% | 99.93% | 99.96% | 99.96% | 1604 ms | ↑ 1.10x | 3 | 0s | 14h ago | 7h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 99.78% | 98.48% | 98.67% | 98.67% | 1493 ms | ↑ 1.20x | 51 | 3m | 14h ago | 7h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.67% | 99.36% | 99.68% | 99.68% | 737 ms | ↓ 0.75x | 17 | 6m | 5d ago | 7h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.67% | 99.88% | 99.64% | 99.64% | 1305 ms | ↑ 1.25x | 4 | 2m | 1d ago | 7h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.67% | 99.62% | 99.62% | 99.62% | 1454 ms | → 1.01x | 10 | 0s | 2d ago | 7h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.67% | 99.53% | 99.18% | 99.18% | 2668 ms | ↑ 1.09x | 17 | 2m | 23h ago | 7h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.67% | 99.88% | 99.72% | 99.72% | 2738 ms | ↑ 1.26x | 6 | 0s | 2h ago | 7h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.67% | 98.91% | 99.56% | 99.56% | 1906 ms | ↑ 1.06x | 43 | 42s | 11h ago | 7h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.67% | 99.52% | 99.79% | 99.79% | 1204 ms | ↑ 1.06x | 20 | 0s | 2d ago | 7h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.67% | 98.48% | 98.27% | 98.27% | 2541 ms | → 1.03x | 62 | 19s | 20h ago | 7h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.67% | 95.63% | 98.51% | 98.51% | 1950 ms | ↓ 0.70x | 162 | 1m | 2d ago | 7h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.45% | 96.23% | 97.51% | 97.51% | 2522 ms | → 1.03x | 149 | 36s | 1d ago | 7h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.45% | 99.05% | 98.81% | 98.81% | 2877 ms | ↑ 1.17x | 39 | 16s | 11h ago | 7h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.34% | 99.79% | 99.71% | 99.71% | 2720 ms | ↑ 1.17x | 9 | 0s | 4d ago | 7h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.34% | 98.03% | 99.11% | 99.11% | 1770 ms | ↑ 1.13x | 64 | 3m | 2d ago | 7h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.23% | 98.20% | 99.49% | 99.49% | 2563 ms | ↑ 1.37x | 64 | 2m | 11h ago | 7h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.23% | 99.64% | 98.86% | 98.86% | 2627 ms | ↑ 1.11x | 14 | 43s | 10h ago | 7h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.23% | 96.35% | 96.08% | 96.08% | 2254 ms | ↑ 1.17x | 59 | 16m | 5m ago | 7h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.23% | 99.60% | 99.74% | 99.74% | 2726 ms | ↑ 1.19x | 14 | 2m | 11h ago | 7h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.23% | 99.81% | 99.61% | 99.61% | 2390 ms | ↑ 1.46x | 8 | 0s | 14h ago | 7h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.23% | 99.60% | 97.76% | 97.76% | 1874 ms | ↑ 1.06x | 16 | 38s | 14h ago | 7h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.12% | 99.45% | 99.73% | 99.73% | 2767 ms | ↓ 0.86x | 25 | 0s | 1h ago | 7h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.12% | 99.55% | 86.57% | 86.57% | 2230 ms | ↑ 1.44x | 16 | 1m | 11h ago | 7h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.01% | 99.67% | 90.33% | 90.33% | 2715 ms | ↑ 2.53x | 13 | 46s | 9h ago | 7h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.01% | 99.36% | 99.10% | 99.10% | 2191 ms | ↑ 1.45x | 26 | 23s | 11h ago | 7h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 99.00% | 95.32% | 90.34% | 90.34% | 1847 ms | ↑ 1.06x | 131 | 5m | 45m ago | 7h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (23)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.90% | 99.24% | 99.26% | 99.26% | 2140 ms | ↑ 1.06x | 31 | 19s | 16h ago | 7h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 98.90% | 98.27% | 98.51% | 98.51% | 3482 ms | → 0.99x | 68 | 44s | 11h ago | 7h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.80% | 99.24% | 98.44% | 98.44% | 3666 ms | → 1.02x | 32 | 0s | 9h ago | 7h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.79% | 99.64% | 99.90% | 99.90% | 3004 ms | ↑ 1.47x | 12 | 2m | 11h ago | 7h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.67% | 99.67% | 99.69% | 99.69% | 1256 ms | ↑ 1.14x | 7 | 10m | 2d ago | 7h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.58% | 95.80% | 96.52% | 96.52% | 3560 ms | → 0.99x | 157 | 1m | 1d ago | 7h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.03% | 98.41% | 99.18% | 99.18% | 3064 ms | ↑ 1.22x | 35 | 11m | 1h ago | 7h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 97.58% | 78.01% | 93.17% | 93.17% | 3283 ms | ↓ 0.79x | 400 | 13m | 6h ago | 7h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.35% | 98.96% | 98.76% | 98.76% | 3886 ms | ↑ 1.15x | 29 | 7m | 9h ago | 7h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 97.26% | 97.32% | 97.73% | 97.73% | 4132 ms | ↑ 1.20x | 103 | 1m | 1h ago | 7h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 97.26% | 98.93% | 99.50% | 99.50% | 1207 ms | → 1.01x | 19 | 14m | 6d ago | 7h ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 96.09% | 96.09% | 96.67% | 96.67% | 3571 ms | → 1.00x | 9 | 1m | 11h ago | 7h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.49% | 95.04% | 90.84% | 90.84% | 2072 ms | → 1.03x | 123 | 7m | 20h ago | 7h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 95.49% | 95.49% | 95.81% | 95.81% | 3369 ms | → 1.00x | 13 | 0s | 6h ago | 7h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 94.52% | 95.76% | 98.75% | 98.75% | 1733 ms | ↓ 0.81x | 137 | 3m | 11h ago | 7h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 92.11% | 94.50% | 96.99% | 96.99% | 4155 ms | ↑ 1.33x | 199 | 2m | 25m ago | 7h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 85.54% | 87.01% | 79.27% | 79.27% | 4339 ms | ↑ 1.15x | 435 | 3m | 15m ago | 7h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.69% | 82.18% | 89.29% | 89.29% | 4071 ms | → 0.97x | 503 | 5m | 45m ago | 7h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 82.04% | 81.82% | 94.96% | 94.96% | 4424 ms | ↑ 2.11x | 196 | 30m | 15m ago | 7h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 77.43% | 78.43% | 82.97% | 82.97% | 4437 ms | → 1.03x | 657 | 4m | 45m ago | 7h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 62.54% | 71.92% | 82.10% | 82.10% | 4439 ms | ↑ 1.11x | 648 | 9m | 55m ago | 7h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 26.83% | 70.23% | 92.03% | 92.03% | 4338 ms | ↓ 0.80x | 454 | 20m | 5m ago | 7h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 23.55% | 36.96% | 77.17% | 77.17% | 180 ms | ↑ 1.11x | 9 | 2d 3h | 1d ago | 7h ago |

</details>

<details open>
<summary><strong>🔴 Down (75)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 86.16% | 68.54% | 62.44% | 62.44% | 1531 ms | → 0.97x | 46 | 4h 39m | 1d ago | 7h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 79.54% | 90.86% | 92.32% | 92.32% | 4748 ms | ↑ 1.05x | 188 | 13m | 1h ago | 7h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 75.90% | 76.56% | 82.77% | 82.77% | 4539 ms | → 1.02x | 664 | 5m | 25m ago | 7h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 73.08% | 76.16% | 82.10% | 82.10% | 4462 ms | ↑ 1.07x | 660 | 5m | 55m ago | 7h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 71.08% | 64.09% | 71.83% | 71.83% | 4725 ms | ↓ 0.90x | 785 | 9m | 15m ago | 7h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 60.68% | 66.51% | 77.17% | 77.17% | 4788 ms | ↑ 1.09x | 805 | 8m | 5m ago | 7h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 51.81% | 51.78% | 49.85% | 49.85% | 4887 ms | → 1.00x | 220 | 12m | 2h ago | 7h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 34.69% | 34.49% | 53.25% | 53.25% | 4736 ms | → 1.00x | 761 | 27m | 45m ago | 7h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 21.59% | 36.58% | 82.81% | 82.81% | 1011 ms | ↑ 1.18x | 3 | 6d 13h | 6d ago | 7h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 21.47% | 4.65% | 14.49% | 14.49% | 3280 ms | ↓ 0.90x | 4 | 7d 2h | 7h ago | 7h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 14.87% | 64.92% | 75.77% | 75.77% | 2924 ms | ↑ 2.60x | 492 | 23m | 5d ago | 7h ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.77% | 78.59% | 94.09% | 94.09% | — | ↓ 0.49x | 2 | 3d 15h | 7d ago | 7h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.03x | 1 | 29d 24h | 30d ago | 7h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.04x | 1 | 29d 24h | 30d ago | 7h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d 24h | 30d ago | 7h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 5h | 2d ago | 7h ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 65.84% | 65.84% | — | ↑ 1.78x | 1 | 29d 24h | 30d ago | 7h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 69.06% | 69.06% | — | ↓ 0.56x | 1 | 29d 24h | 30d ago | 7h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 23.14% | 79.43% | 79.43% | — | ↓ 0.57x | 1 | 23d 13h | 24d ago | 7h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.03x | 1 | 29d 24h | 30d ago | 7h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 63.83% | 63.83% | — | ↑ 1.62x | 1 | 29d 24h | 30d ago | 7h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 59.41% | 88.91% | 88.91% | — | ↑ 2.03x | 2 | 6d 10h | 13d ago | 7h ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 51.24% | 51.24% | — | → 1.00x | 1 | 29d 24h | 30d ago | 7h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 47.04% | 47.04% | — | → 1.00x | 1 | 29d 24h | 30d ago | 7h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 6h | 2d ago | 7h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.61x | 1 | 29d 24h | 30d ago | 7h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 14.84% | 14.84% | — | ↑ 2.22x | 1 | 29d 24h | 30d ago | 7h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 28.04% | 28.04% | — | ↓ 0.80x | 1 | 29d 24h | 30d ago | 7h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.83x | 1 | 29d 24h | 30d ago | 7h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 12.75% | 76.00% | 76.00% | — | ↑ 1.11x | 2 | 13d 7h | 27d ago | 7h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 7h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 52.39% | 52.39% | — | ↓ 0.60x | 1 | 29d 24h | 30d ago | 7h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.00% | 0.02% | 0.02% | — | ↑ 1.06x | 1 | 29d 24h | 30d ago | 7h ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 34.33% | 34.33% | — | ↑ 2.35x | 1 | 29d 24h | 30d ago | 7h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 29.24% | 29.24% | — | ↓ 0.35x | 1 | 29d 24h | 30d ago | 7h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.42x | 1 | 29d 24h | 30d ago | 7h ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.44x | 1 | 29d 24h | 30d ago | 7h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 60.02% | 60.02% | — | ↑ 1.28x | 1 | 29d 24h | 30d ago | 7h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.16x | 1 | 29d 24h | 30d ago | 7h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.75x | 1 | 29d 24h | 30d ago | 7h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 71.75% | 90.98% | 90.98% | — | ↓ 0.62x | 23 | 9h 29m | 9d ago | 7h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.48x | 1 | 29d 24h | 30d ago | 7h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 6h | 2d ago | 7h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 0.89% | 0.89% | — | ↑ 1.13x | 1 | 29d 24h | 30d ago | 7h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.55x | 1 | 29d 24h | 30d ago | 7h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.19x | 1 | 29d 24h | 30d ago | 7h ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 7h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.47x | 1 | 29d 24h | 30d ago | 7h ago |
| [星辰MaaS](https://lmspeed.net/provider/spark-api-open-xf-yun-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.14x | 1 | 29d 24h | 30d ago | 7h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 34.86% | 82.03% | 82.03% | — | ↓ 0.85x | 14 | 1d 10h | 20d ago | 7h ago |
| [速创API](https://lmspeed.net/provider/succhuang-api) | 0.00% | 0.00% | 19.78% | 19.78% | — | ↑ 3.74x | 1 | 29d 24h | 30d ago | 7h ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.69x | 1 | 29d 24h | 30d ago | 7h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.21x | 1 | 29d 24h | 30d ago | 7h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 4h | 2d ago | 7h ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.54x | 1 | 29d 24h | 30d ago | 7h ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.06x | 1 | 29d 24h | 30d ago | 7h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.17x | 1 | 29d 24h | 30d ago | 7h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 20.65% | 60.56% | 60.56% | — | → 0.98x | 4 | 6d 1h | 24d ago | 7h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 12.99% | 12.99% | — | ↑ 1.27x | 1 | 29d 24h | 30d ago | 7h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d 24h | 30d ago | 7h ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.90x | 1 | 29d 24h | 30d ago | 7h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 7h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 50.23% | 50.23% | — | → 1.00x | 1 | 29d 24h | 30d ago | 7h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.15x | 1 | 29d 24h | 30d ago | 7h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.50x | 1 | 29d 24h | 30d ago | 7h ago |

</details>

<details>
<summary><strong>⚫ Unknown (332)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [081007 API](https://lmspeed.net/provider/081007-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | — | — | 58.62% | 58.62% | 1583 ms | — | 1 | 12h 20m | 1d ago | — |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | — | — | 90.25% | 90.25% | 3042 ms | — | 6 | 0s | 4h ago | — |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | — | — | 82.59% | 82.59% | — | — | 8 | 2d 3h | 17d ago | — |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | — | — | 61.01% | 61.01% | 1376 ms | — | 6 | 0s | 4h ago | — |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | — | — | 1.85% | 1.85% | 1520 ms | — | 3 | 9d 7h | 14h ago | — |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | — | — | 49.08% | 49.08% | 2571 ms | — | 2 | 1d 3h | 2d ago | — |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | — | — | 21.72% | 21.72% | — | — | 9 | 2d 22h | 25d ago | — |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | — | — | 88.08% | 88.08% | 2848 ms | — | 31 | 7m | 4h ago | — |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | — | — | 97.42% | 97.42% | 2617 ms | — | 18 | 2h 31m | 4h ago | — |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | — | — | 97.94% | 97.94% | 1792 ms | — | 11 | 5m | 4h ago | — |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | — | — | 98.97% | 98.97% | 1733 ms | — | 24 | 7m | 4h ago | — |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | — | — | 6.94% | 6.94% | — | — | 1 | 29d 24h | 30d ago | — |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | — | — | 98.57% | 98.57% | 601 ms | — | 2 | 0s | 4h ago | — |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | — | — | 83.55% | 83.55% | 1092 ms | — | 15 | 2h 31m | 1d ago | — |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | — | — | 95.91% | 95.91% | 1120 ms | — | 60 | 3m | 4h ago | — |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | — | — | 92.61% | 92.61% | 1105 ms | — | 1 | 18h 20m | 11d ago | — |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | — | — | 69.13% | 69.13% | 4413 ms | — | 653 | 4m | 24m ago | — |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | — | — | 4.09% | 4.09% | — | — | 2 | 12d 17h | 17d ago | — |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | — | — | 67.02% | 67.02% | 2147 ms | — | 3 | 5h 3m | 4h ago | — |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | — | — | 99.60% | 99.60% | 1139 ms | — | 7 | 0s | 23h ago | — |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | — | — | 96.19% | 96.19% | 2108 ms | — | 5 | 2h 32m | 4h ago | — |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | — | — | 82.41% | 82.41% | 915 ms | — | 7 | 4h 36m | 7h ago | — |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | — | — | 96.61% | 96.61% | 1244 ms | — | 4 | 3h 45m | 4h ago | — |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | — | — | 25.76% | 25.76% | — | — | 1 | 29d 24h | 30d ago | — |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | — | — | 99.92% | 99.92% | 1358 ms | — | 1 | 0s | 4d ago | — |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | — | — | 94.83% | 94.83% | 1067 ms | — | 11 | 3h 57m | 4h ago | — |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | — | — | 99.41% | 99.41% | 2271 ms | — | 79 | 2m | 8d ago | — |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | — | — | 43.92% | 43.92% | — | — | 1 | 29d 24h | 30d ago | — |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | — | — | 89.71% | 89.71% | 1893 ms | — | 76 | 15m | 1d ago | — |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | — | — | 93.60% | 93.60% | 2287 ms | — | 23 | 1h 44m | 4h ago | — |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | — | — | 72.44% | 72.44% | 4525 ms | — | 472 | 7m | 3m ago | — |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | — | — | 96.02% | 96.02% | 1485 ms | — | 24 | 31m | 4h ago | — |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | — | — | 57.63% | 57.63% | 578 ms | — | 1 | 12h 47m | 1d ago | — |
| [AI98](https://lmspeed.net/provider/ai98-vip) | — | — | 74.87% | 74.87% | 2198 ms | — | 187 | 12m | 4h ago | — |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | — | — | 65.96% | 65.96% | 2147 ms | — | 50 | 2h 10m | 4h ago | — |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | — | — | 73.14% | 73.14% | 2699 ms | — | 9 | 1m | 4h ago | — |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | — | — | 96.00% | 96.00% | 1554 ms | — | 30 | 31m | 4h ago | — |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | — | — | 33.19% | 33.19% | — | — | 3 | 7d 3h | 20d ago | — |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | — | — | 84.65% | 84.65% | 2179 ms | — | 478 | 2m | 13m ago | — |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | — | — | 38.19% | 38.19% | 474 ms | — | 4 | 3h 45m | 13d ago | — |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | — | — | 99.70% | 99.70% | 2812 ms | — | 16 | 2m | 9h ago | — |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | — | — | 98.11% | 98.11% | 2245 ms | — | 49 | 5m | 4h ago | — |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | — | — | 99.80% | 99.80% | 885 ms | — | 6 | 0s | 4h ago | — |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | — | — | 4.70% | 4.70% | — | — | 1 | 29d 24h | 30d ago | — |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | — | — | 92.29% | 92.29% | 1647 ms | — | 133 | 11m | 4h ago | — |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | — | — | 97.42% | 97.42% | 1716 ms | — | 3 | 1h 20m | 7d ago | — |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | — | — | 23.35% | 23.35% | — | — | 1 | 29d 24h | 30d ago | — |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | — | — | 67.93% | 67.93% | 1774 ms | — | 30 | 1h 8m | 4h ago | — |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | — | — | 97.74% | 97.74% | 751 ms | — | 80 | 26m | 1d ago | — |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | — | — | 50.29% | 50.29% | — | — | 3 | 7d 6h | 22d ago | — |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | — | — | 100.00% | 100.00% | 607 ms | — | 0 | — | — | — |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | — | — | 87.66% | 87.66% | 1955 ms | — | 6 | 2d 8h | 4h ago | — |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | — | — | 99.41% | 99.41% | 1867 ms | — | 11 | 0s | 3d ago | — |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | — | — | 99.82% | 99.82% | 2500 ms | — | 6 | 0s | 4h ago | — |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | — | — | 99.93% | 99.93% | 1935 ms | — | 2 | 0s | 4h ago | — |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | — | — | 95.94% | 95.94% | 1587 ms | — | 68 | 2m | 4h ago | — |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | — | — | 99.72% | 99.72% | 877 ms | — | 5 | 0s | 1d ago | — |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | — | — | 4.42% | 4.42% | 515 ms | — | 2 | 14d 23h | 2d ago | — |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | — | — | 12.84% | 12.84% | 1241 ms | — | 3 | 4d 24h | 4h ago | — |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | — | — | 80.43% | 80.43% | 998 ms | — | 3 | 11h 20m | 22h ago | — |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | — | — | 99.98% | 99.98% | 1053 ms | — | 0 | — | — | — |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | — | — | 44.97% | 44.97% | 2392 ms | — | 154 | 52m | 4h ago | — |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | — | — | 95.87% | 95.87% | 2343 ms | — | 17 | 44m | 4h ago | — |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | — | — | 37.05% | 37.05% | — | — | 3 | 5d 9h | 16d ago | — |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | — | — | 97.43% | 97.43% | 229 ms | — | 17 | 46m | 14h ago | — |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | — | — | 94.20% | 94.20% | 712 ms | — | 3 | 0s | 4h ago | — |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | — | — | 1.85% | 1.85% | 1008 ms | — | 3 | 9d 7h | 4h ago | — |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | — | — | 42.63% | 42.63% | 958 ms | — | 43 | 3m | 7h ago | — |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | — | — | 95.34% | 95.34% | 1093 ms | — | 31 | 28m | 4h ago | — |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | — | — | 39.36% | 39.36% | 222 ms | — | 19 | 3h 7m | 2d ago | — |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | — | — | 99.54% | 99.54% | 2986 ms | — | 18 | 0s | 4h ago | — |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | — | — | 98.00% | 98.00% | 1445 ms | — | 26 | 47s | 4h ago | — |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | — | — | 96.45% | 96.45% | 2023 ms | — | 92 | 3m | 4h ago | — |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | — | — | 98.60% | 98.60% | 884 ms | — | 4 | 0s | 4h ago | — |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | — | — | 95.90% | 95.90% | 2810 ms | — | 49 | 28m | 6h ago | — |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | — | — | 75.03% | 75.03% | 1048 ms | — | 19 | 5m | 4h ago | — |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | — | — | 53.86% | 53.86% | 1111 ms | — | 12 | 2m | 2d ago | — |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | — | — | 71.28% | 71.28% | 2872 ms | — | 16 | 37s | 4h ago | — |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | — | — | 96.79% | 96.79% | 1550 ms | — | 6 | 2h 13m | 4h ago | — |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | — | — | 55.29% | 55.29% | 1661 ms | — | 7 | 1d 11h | 4h ago | — |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | — | — | 90.72% | 90.72% | 932 ms | — | 9 | 0s | 4h ago | — |
| [Nuiziyyds API](https://lmspeed.net/provider/api-nuiziyyds-com) | — | — | 10.76% | 10.76% | — | — | 1 | 29d 24h | 30d ago | — |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | — | — | 95.70% | 95.70% | 1197 ms | — | 3 | 4h 10m | 1d ago | — |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | — | — | 99.83% | 99.83% | 2023 ms | — | 6 | 2m | 4h ago | — |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | — | — | 27.24% | 27.24% | 2830 ms | — | 29 | 8h 37m | 23m ago | — |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | — | — | 95.44% | 95.44% | 1991 ms | — | 48 | 18m | 4h ago | — |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | — | — | 32.42% | 32.42% | 3768 ms | — | 562 | 7m | 1d ago | — |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | — | — | 93.86% | 93.86% | 631 ms | — | 3 | 5h 3m | 3d ago | — |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | — | — | 33.21% | 33.21% | 702 ms | — | 47 | 2m | 2d ago | — |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | — | — | 65.68% | 65.68% | 1705 ms | — | 4 | 0s | 4h ago | — |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | — | — | 16.25% | 16.25% | — | — | 1 | 29d 24h | 30d ago | — |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | — | — | 44.17% | 44.17% | 1104 ms | — | 8 | 2d 12h | 4h ago | — |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | — | — | 51.96% | 51.96% | 4652 ms | — | 706 | 5m | 23m ago | — |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | — | — | 96.67% | 96.67% | 1171 ms | — | 13 | 51m | 4h ago | — |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | — | — | 40.45% | 40.45% | 1422 ms | — | 7 | 0s | 1d ago | — |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | — | — | 35.91% | 35.91% | 457 ms | — | 50 | 1m | 8d ago | — |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | — | — | 31.31% | 31.31% | 2308 ms | — | 2 | 0s | 2d ago | — |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | — | — | 73.45% | 73.45% | 1018 ms | — | 18 | 2m | 4h ago | — |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | — | — | 46.84% | 46.84% | 3461 ms | — | 5 | 1d 23h | 4h ago | — |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | — | — | 97.55% | 97.55% | 852 ms | — | 27 | 12m | 7h ago | — |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | — | — | 97.00% | 97.00% | 4140 ms | — | 59 | 5m | 1h ago | — |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | — | — | 99.17% | 99.17% | 2836 ms | — | 21 | 13m | 4h ago | — |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | — | — | 99.71% | 99.71% | 782 ms | — | 2 | 0s | 4h ago | — |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | — | — | 47.21% | 47.21% | 2218 ms | — | 9 | 0s | 4h ago | — |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | — | — | 51.48% | 51.48% | 1554 ms | — | 19 | 4m | 4h ago | — |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | — | — | 98.94% | 98.94% | 1538 ms | — | 13 | 47s | 4h ago | — |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | — | — | 84.74% | 84.74% | 2875 ms | — | 9 | 12m | 4h ago | — |
| [APIPool](https://lmspeed.net/provider/apipool) | — | — | 99.80% | 99.80% | 1021 ms | — | 6 | 0s | 4h ago | — |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | — | — | 99.42% | 99.42% | 926 ms | — | 18 | 12m | 4h ago | — |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | — | — | 97.30% | 97.30% | 1916 ms | — | 3 | 3h 47m | 4h ago | — |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | — | — | 4.81% | 4.81% | 1269 ms | — | 2 | 13d 22h | 4h ago | — |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | — | — | 9.14% | 9.14% | — | — | 1 | 29d 24h | 30d ago | — |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | — | — | 54.42% | 54.42% | 1418 ms | — | 9 | 1d 7h | 4h ago | — |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | — | — | 54.99% | 54.99% | 2452 ms | — | 4 | 10h 13m | 23m ago | — |
| [C85 API](https://lmspeed.net/provider/c85-api) | — | — | 46.32% | 46.32% | 960 ms | — | 9 | 7h 49m | 10h ago | — |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | — | — | 16.22% | 16.22% | — | — | 5 | 3d 1h | 15d ago | — |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | — | — | 83.81% | 83.81% | 1434 ms | — | 25 | 0s | 4h ago | — |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | — | — | 63.84% | 63.84% | — | — | 7 | 1d 7h | 9d ago | — |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | — | — | 95.42% | 95.42% | 4338 ms | — | 143 | 41m | 2h ago | — |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | — | — | 13.51% | 13.51% | 1377 ms | — | 3 | 8d 6h | 13m ago | — |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | — | — | 0.00% | 0.00% | — | — | 1 | 15d 1h | 15d ago | — |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | — | — | 36.57% | 36.57% | 1353 ms | — | 2 | 3d 2h | 3d ago | — |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | — | — | 100.00% | 100.00% | 537 ms | — | 0 | — | — | — |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | — | — | 98.79% | 98.79% | 976 ms | — | 4 | 18m | 16d ago | — |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | — | — | 97.94% | 97.94% | 1467 ms | — | 17 | 21m | 4h ago | — |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | — | — | 89.24% | 89.24% | 4153 ms | — | 26 | 42m | 1d ago | — |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | — | — | 52.37% | 52.37% | — | — | 5 | 2d 16h | 13d ago | — |
| [Codex666](https://lmspeed.net/provider/codex666) | — | — | 21.37% | 21.37% | — | — | 5 | 2d 2h | 12d ago | — |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | — | — | 54.22% | 54.22% | 1967 ms | — | 1 | 12h 50m | 1d ago | — |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | — | — | 58.47% | 58.47% | 2201 ms | — | 17 | 11h 43m | 4h ago | — |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | — | — | 97.70% | 97.70% | 409 ms | — | 7 | 1h 44m | 4h ago | — |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | — | — | 98.74% | 98.74% | 2139 ms | — | 76 | 8m | 4h ago | — |
| [Crond](https://lmspeed.net/provider/crond) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | — | — | 89.17% | 89.17% | 3043 ms | — | 6 | 8h 38m | 4h ago | — |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | — | — | 2.09% | 2.09% | 434 ms | — | 1 | 27d 20h | 30d ago | — |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | — | — | 56.36% | 56.36% | — | — | 1 | 29d 24h | 30d ago | — |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | — | — | 98.90% | 98.90% | 2684 ms | — | 26 | 2m | 4h ago | — |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | — | — | 30.91% | 30.91% | 1096 ms | — | 1 | 13h 10m | 19h ago | — |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | — | — | 0.00% | 0.00% | — | — | 1 | 12d 5h | 12d ago | — |
| [AI Proxy](https://lmspeed.net/provider/dual-proxy-gateway-565355327-replit-app) | — | — | 11.81% | 11.81% | — | — | 3 | 3d 15h | 10d ago | — |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | — | — | 5.76% | 5.76% | 1523 ms | — | 3 | 9d 7h | 4h ago | — |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | — | — | 96.90% | 96.90% | 950 ms | — | 28 | 29m | 4h ago | — |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | — | — | 0.04% | 0.04% | — | — | 3 | 9d 24h | 13d ago | — |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | — | — | 70.95% | 70.95% | — | — | 3 | 9d 24h | 11d ago | — |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | — | — | 98.99% | 98.99% | 3069 ms | — | 3 | 0s | 14h ago | — |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | — | — | 98.20% | 98.20% | 2160 ms | — | 18 | 32m | 7h ago | — |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | — | — | 0.00% | 0.00% | — | — | 1 | 2d 3h | 2d ago | — |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | — | — | 98.05% | 98.05% | 1646 ms | — | 14 | 6m | 4h ago | — |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | — | — | 98.91% | 98.91% | 1107 ms | — | 13 | 22m | 4d ago | — |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | — | — | 96.27% | 96.27% | 1309 ms | — | 4 | 1h 48m | 2d ago | — |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | — | — | 41.11% | 41.11% | 4534 ms | — | 817 | 8m | 34m ago | — |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | — | — | 61.30% | 61.30% | 4856 ms | — | 866 | 15m | 14m ago | — |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | — | — | 99.59% | 99.59% | 2680 ms | — | 4 | 1h 8m | 4h ago | — |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | — | — | 99.20% | 99.20% | 1110 ms | — | 82 | 5m | 21h ago | — |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | — | — | 97.25% | 97.25% | 2441 ms | — | 21 | 29s | 4h ago | — |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | — | — | 2.40% | 2.40% | 2145 ms | — | 3 | 9d 6h | 4h ago | — |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | — | — | 66.79% | 66.79% | 1451 ms | — | 4 | 15h 20m | 19h ago | — |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | — | — | 12.62% | 12.62% | 345 ms | — | 32 | 11h 15m | 3h ago | — |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | — | — | 99.51% | 99.51% | 518 ms | — | 61 | 2m | 4h ago | — |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | — | — | 99.73% | 99.73% | 1850 ms | — | 11 | 56s | 4h ago | — |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | — | — | 89.05% | 89.05% | 228 ms | — | 1 | 13h 50m | 6d ago | — |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | — | — | 50.32% | 50.32% | — | — | 1 | 29d 24h | 30d ago | — |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | — | — | 99.83% | 99.83% | 1799 ms | — | 5 | 0s | 4h ago | — |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | — | — | 99.83% | 99.83% | 1595 ms | — | 3 | 3m | 4h ago | — |
| [Groq](https://lmspeed.net/provider/groq) | — | — | 99.76% | 99.76% | 1036 ms | — | 21 | 9m | 4h ago | — |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | — | — | 40.53% | 40.53% | 752 ms | — | 2 | 15m | 14d ago | — |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | — | — | 95.48% | 95.48% | 2049 ms | — | 3 | 37m | 19h ago | — |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | — | — | 85.04% | 85.04% | 2496 ms | — | 5 | 0s | 4h ago | — |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | — | — | 94.57% | 94.57% | 1980 ms | — | 128 | 7m | 4h ago | — |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | — | — | 49.02% | 49.02% | 1703 ms | — | 9 | 0s | 4h ago | — |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | — | — | 99.66% | 99.66% | 1460 ms | — | 4 | 0s | 2d ago | — |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | — | — | 1.90% | 1.90% | 1003 ms | — | 1 | 27d 20h | 30d ago | — |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | — | — | 62.13% | 62.13% | 1155 ms | — | 12 | 11h 42m | 6d ago | — |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | — | — | 99.92% | 99.92% | 939 ms | — | 1 | 0s | 4d ago | — |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | — | — | 0.13% | 0.13% | 830 ms | — | 18 | 1d 16h | 8h ago | — |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | — | — | 90.01% | 90.01% | 2499 ms | — | 1 | 0s | 4h ago | — |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | — | — | 0.00% | 0.00% | — | — | 1 | 2d 5h | 2d ago | — |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | — | — | 16.52% | 16.52% | 4090 ms | — | 37 | 6h 1m | 2h ago | — |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | — | — | 0.00% | 0.00% | — | — | 1 | 15d 1h | 15d ago | — |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | — | — | 1.78% | 1.78% | 4146 ms | — | 12 | 2d 8h | 4h ago | — |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | — | — | 98.24% | 98.24% | 1415 ms | — | 18 | 0s | 4h ago | — |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | — | — | 0.00% | 0.00% | — | — | 1 | 2d 3h | 2d ago | — |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | — | — | 95.65% | 95.65% | 577 ms | — | 59 | 1h 51m | 4d ago | — |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | — | — | 97.70% | 97.70% | 637 ms | — | 2 | 6h 50m | 4h ago | — |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | — | — | 4.50% | 4.50% | — | — | 1 | 29d 24h | 30d ago | — |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | — | — | 100.00% | 100.00% | 926 ms | — | 0 | — | — | — |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | — | — | 94.93% | 94.93% | 1419 ms | — | 5 | 2h 40m | 1d ago | — |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | — | — | 94.26% | 94.26% | 1609 ms | — | 9 | 1h 47m | 6h ago | — |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | — | — | 89.22% | 89.22% | 840 ms | — | 52 | 26m | 7h ago | — |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | — | — | 57.74% | 57.74% | 526 ms | — | 4 | 0s | 2h ago | — |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | — | — | 71.17% | 71.17% | 4691 ms | — | 885 | 9m | 34m ago | — |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | — | — | 89.35% | 89.35% | 602 ms | — | 1 | 15h 49m | 7d ago | — |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | — | — | 92.69% | 92.69% | 1974 ms | — | 72 | 21m | 4h ago | — |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | — | — | 71.52% | 71.52% | 1156 ms | — | 12 | 47s | 4h ago | — |
| [MiniMax](https://lmspeed.net/provider/minimax) | — | — | 98.24% | 98.24% | 3279 ms | — | 22 | 55s | 4h ago | — |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | — | — | 99.84% | 99.84% | 1654 ms | — | 9 | 1m | 14h ago | — |
| [MIX API](https://lmspeed.net/provider/mix-api) | — | — | 19.51% | 19.51% | 2431 ms | — | 10 | 2d 19h | 44m ago | — |
| [ModelGate](https://lmspeed.net/provider/modelgate) | — | — | 60.49% | 60.49% | 4043 ms | — | 22 | 1h 16m | 1h ago | — |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | — | — | 20.41% | 20.41% | 3010 ms | — | 642 | 43m | 43m ago | — |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | — | — | 54.17% | 54.17% | 1904 ms | — | 4 | 10h 33m | 9h ago | — |
| [ModelScope](https://lmspeed.net/provider/ms-ens-257c1f27-2cc6-api-inference-modelscope-cn) | — | — | 99.20% | 99.20% | 2830 ms | — | 22 | 33m | 1h ago | — |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | — | — | 7.40% | 7.40% | 2376 ms | — | 6 | 4d 7h | 4h ago | — |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | — | — | 83.98% | 83.98% | 4568 ms | — | 354 | 9m | 23m ago | — |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | — | — | 98.99% | 98.99% | 1494 ms | — | 9 | 0s | 4h ago | — |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | — | — | 55.93% | 55.93% | 1472 ms | — | 2 | 0s | 4h ago | — |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | — | — | 95.56% | 95.56% | 1091 ms | — | 46 | 4m | 4h ago | — |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | — | — | 1.60% | 1.60% | 4175 ms | — | 33 | 20h 17m | 4h ago | — |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | — | — | 97.93% | 97.93% | 3927 ms | — | 39 | 46s | 2h ago | — |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | — | — | 85.52% | 85.52% | 1509 ms | — | 108 | 25m | 4h ago | — |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | — | — | 45.03% | 45.03% | 983 ms | — | 2 | 0s | 4h ago | — |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | — | — | 97.58% | 97.58% | 1422 ms | — | 6 | 1h 25m | 4h ago | — |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | — | — | 96.64% | 96.64% | 1427 ms | — | 10 | 1h 38m | 4h ago | — |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | — | — | 11.48% | 11.48% | 1943 ms | — | 10 | 2d 9h | 4h ago | — |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | — | — | 99.08% | 99.08% | 973 ms | — | 37 | 32s | 4h ago | — |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | — | — | 21.17% | 21.17% | — | — | 1 | 29d 24h | 30d ago | — |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | — | — | 99.84% | 99.84% | 903 ms | — | 4 | 0s | 4h ago | — |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | — | — | 56.20% | 56.20% | 631 ms | — | 43 | 4m | 4h ago | — |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | — | — | 95.52% | 95.52% | 584 ms | — | 49 | 24m | 4h ago | — |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | — | — | 22.91% | 22.91% | 2457 ms | — | 4 | 5d 12h | 4h ago | — |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | — | — | 83.39% | 83.39% | 4398 ms | — | 649 | 4m | 24m ago | — |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | — | — | 98.86% | 98.86% | 2829 ms | — | 31 | 15m | 4h ago | — |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | — | — | 70.64% | 70.64% | 832 ms | — | 12 | 6m | 4h ago | — |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | — | — | 66.86% | 66.86% | — | — | 1 | 29d 24h | 30d ago | — |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | — | — | 99.76% | 99.76% | 1366 ms | — | 4 | 3m | 14h ago | — |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | — | — | 99.81% | 99.81% | 1670 ms | — | 6 | 3m | 11h ago | — |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | — | — | 99.77% | 99.77% | 1396 ms | — | 5 | 2m | 14h ago | — |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | — | — | 61.80% | 61.80% | 4692 ms | — | 922 | 7m | 34m ago | — |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | — | — | 40.77% | 40.77% | 1328 ms | — | 15 | 3h 31m | 2d ago | — |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | — | — | 99.94% | 99.94% | 1858 ms | — | 4 | 42s | 4h ago | — |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | — | — | 8.10% | 8.10% | 255 ms | — | 2 | 11d 23h | 4h ago | — |
| [Ollama](https://lmspeed.net/provider/ollama-com) | — | — | 83.54% | 83.54% | 943 ms | — | 2 | 2d 2h | 4h ago | — |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [OminiGen](https://lmspeed.net/provider/ominigen) | — | — | 99.56% | 99.56% | 718 ms | — | 6 | 3m | 1d ago | — |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | — | — | 70.32% | 70.32% | 2046 ms | — | 79 | 25m | 1h ago | — |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | — | — | 79.56% | 79.56% | 1119 ms | — | 1 | 0s | 4h ago | — |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | — | — | 93.85% | 93.85% | — | — | 1 | 7d 12h | 7d ago | — |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | — | — | 95.05% | 95.05% | 623 ms | — | 58 | 1m | 4h ago | — |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | — | — | 99.22% | 99.22% | 1303 ms | — | 8 | 16m | 4h ago | — |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | — | — | 70.82% | 70.82% | 4511 ms | — | 608 | 7m | 3m ago | — |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | — | — | 6.06% | 6.06% | 1417 ms | — | 2 | 11d 6h | 4d ago | — |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | — | — | 0.00% | 0.00% | — | — | 1 | 4d 7h | 4d ago | — |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | — | — | 97.28% | 97.28% | 2247 ms | — | 15 | 1h 5m | 4h ago | — |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | — | — | 88.13% | 88.13% | 3173 ms | — | 35 | 0s | 4h ago | — |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [PICO API](https://lmspeed.net/provider/pico-api) | — | — | 75.68% | 75.68% | 2691 ms | — | 4 | 4h 9m | 23h ago | — |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | — | — | 99.89% | 99.89% | 814 ms | — | 4 | 0s | 4h ago | — |
| [Privnode](https://lmspeed.net/provider/privnode) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | — | — | 48.40% | 48.40% | 1474 ms | — | 2 | 0s | 4h ago | — |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | — | — | 24.06% | 24.06% | — | — | 1 | 29d 24h | 30d ago | — |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | — | — | 73.56% | 73.56% | 4921 ms | — | 704 | 5m | 33m ago | — |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | — | — | 11.13% | 11.13% | 2495 ms | — | 3 | 5d 16h | 4h ago | — |
| [R9S API](https://lmspeed.net/provider/r9s-api) | — | — | 0.00% | 0.00% | — | — | 1 | 3d 2h | 3d ago | — |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | — | — | 99.35% | 99.35% | 1884 ms | — | 4 | 3m | 3d ago | — |
| [Right Code](https://lmspeed.net/provider/right-codes) | — | — | 41.21% | 41.21% | 942 ms | — | 12 | 0s | 1d ago | — |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | — | — | 96.00% | 96.00% | 2116 ms | — | 93 | 10m | 4h ago | — |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | — | — | 38.78% | 38.78% | 1813 ms | — | 171 | 2h 38m | 4d ago | — |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | — | — | 11.14% | 11.14% | — | — | 2 | 12d 4h | 18d ago | — |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | — | — | 2.82% | 2.82% | 1175 ms | — | 1 | 27d 20h | 30d ago | — |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | — | — | 99.97% | 99.97% | 2715 ms | — | 2 | 0s | 4h ago | — |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | — | — | 97.81% | 97.81% | 1432 ms | — | 40 | 5m | 4h ago | — |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | — | — | 98.54% | 98.54% | 2126 ms | — | 36 | 7m | 4h ago | — |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | — | — | 95.71% | 95.71% | 1881 ms | — | 2 | 7h 45m | 4h ago | — |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | — | — | 84.84% | 84.84% | 252 ms | — | 2 | 10h 19m | 3d ago | — |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | — | — | 25.30% | 25.30% | — | — | 3 | 5d 20h | 17d ago | — |
| [Thorbase](https://lmspeed.net/provider/thorbase) | — | — | 92.62% | 92.62% | 1384 ms | — | 1 | 9h 60m | 6d ago | — |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | — | — | 0.58% | 0.58% | 4879 ms | — | 52 | 13h 25m | 4m ago | — |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | — | — | 98.87% | 98.87% | 692 ms | — | 2 | 25m | 16h ago | — |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | — | — | 80.36% | 80.36% | 482 ms | — | 31 | 41m | 4h ago | — |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | — | — | 99.09% | 99.09% | 572 ms | — | 7 | 0s | 1d ago | — |
| [Unlimit](https://lmspeed.net/provider/unlimit) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | — | — | 21.77% | 21.77% | — | — | 1 | 29d 24h | 30d ago | — |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | — | — | 68.14% | 68.14% | 4472 ms | — | 331 | 10m | 33m ago | — |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | — | — | 51.46% | 51.46% | 1997 ms | — | 5 | 2d 17h | 4h ago | — |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | — | — | 99.86% | 99.86% | 1223 ms | — | 6 | 0s | 1d ago | — |
| [火山引擎](https://lmspeed.net/provider/volcengine) | — | — | 80.83% | 80.83% | 3480 ms | — | 99 | 17s | 22h ago | — |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | — | — | 98.19% | 98.19% | 1835 ms | — | 15 | 0s | 4h ago | — |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | — | — | 92.92% | 92.92% | 1008 ms | — | 13 | 1h 4m | 2d ago | — |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | — | — | 14.11% | 14.11% | 1869 ms | — | 2 | 6d 14h | 4h ago | — |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | — | — | 62.28% | 62.28% | 2358 ms | — | 48 | 1h 7m | 4h ago | — |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | — | — | 0.73% | 0.73% | 4661 ms | — | 43 | 16h 20m | 53m ago | — |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | — | — | 98.37% | 98.37% | 616 ms | — | 16 | 2m | 2d ago | — |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | — | — | 99.69% | 99.69% | 2295 ms | — | 8 | 1m | 4h ago | — |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | — | — | 53.57% | 53.57% | 1602 ms | — | 1 | 13h 20m | 1d ago | — |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | — | — | 95.28% | 95.28% | 3433 ms | — | 79 | 7m | 4h ago | — |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | — | — | 97.86% | 97.86% | 1689 ms | — | 7 | 1m | 4h ago | — |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | — | — | 76.88% | 76.88% | 4587 ms | — | 645 | 5m | 3m ago | — |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | — | — | 99.71% | 99.71% | 1413 ms | — | 8 | 3m | 4h ago | — |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | — | — | 97.12% | 97.12% | 467 ms | — | 10 | 0s | 4h ago | — |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | — | — | 90.43% | 90.43% | 3277 ms | — | 71 | 29m | 4h ago | — |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | — | — | 96.39% | 96.39% | 879 ms | — | 9 | 2h 9m | 5h ago | — |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | — | — | 82.51% | 82.51% | 1589 ms | — | 5 | 6m | 4h ago | — |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | — | — | 98.81% | 98.81% | 1331 ms | — | 43 | 42s | 4h ago | — |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | — | — | 99.89% | 99.89% | 1594 ms | — | 1 | 0s | 2d ago | — |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | — | — | 97.07% | 97.07% | 1053 ms | — | 6 | 4h 3m | 2d ago | — |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | — | — | 89.97% | 89.97% | 1133 ms | — | 1 | 1d 1h | 11d ago | — |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | — | — | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | — |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | — | — | 1.87% | 1.87% | 1380 ms | — | 1 | 27d 20h | 30d ago | — |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | — | — | 0.00% | 0.00% | — | — | 1 | 15d 5h | 15d ago | — |
| [Xinapi](https://lmspeed.net/provider/xinapi) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | — | — | 99.83% | 99.83% | 1663 ms | — | 4 | 0s | 4h ago | — |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | — | — | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | — |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | — | — | 88.05% | 88.05% | 1890 ms | — | 4 | 5h 15m | 2d ago | — |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | — | — | 3.65% | 3.65% | 2452 ms | — | 2 | 13d 22h | 4h ago | — |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | — | — | 99.64% | 99.64% | 1503 ms | — | 8 | 4m | 4h ago | — |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | — | — | 86.97% | 86.97% | 2371 ms | — | 52 | 3m | 4h ago | — |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | — | — | 95.18% | 95.18% | 660 ms | — | 2 | 6h 15m | 20h ago | — |
| [Z.ai](https://lmspeed.net/provider/z-ai) | — | — | 99.79% | 99.79% | 2603 ms | — | 15 | 11s | 4h ago | — |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | — | — | 99.80% | 99.80% | 730 ms | — | 3 | 0s | 3d ago | — |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | — | — | 1.55% | 1.55% | 1348 ms | — | 2 | 10d 14h | 2d ago | — |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | — | — | 97.44% | 97.44% | 3305 ms | — | 163 | 4s | 44m ago | — |

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
