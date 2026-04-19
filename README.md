# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**516 providers** — 220 🟢 operational · 145 🟡 degraded · 150 🔴 down · 1 ⚫ unknown

_Updated 2026-04-19 05:33 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (220)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 93.03% | 93.03% | 93.03% | 1424 ms | ↑ 1.14x | 1 | 18h 20m | 12d ago | 1m ago |
| [ai.api.xn--fiqs8s](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.95% | 90.58% | 90.58% | 1378 ms | ↑ 2.41x | 2 | 0s | 16d ago | 3m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 100.00% | 97.76% | 99.41% | 99.41% | 2278 ms | ↑ 1.40x | 79 | 2m | 9d ago | 3m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 100.00% | 99.93% | 38.71% | 38.71% | 475 ms | ↓ 0.92x | 3 | 0s | 13d ago | 2m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.98% | 99.98% | 99.98% | 2166 ms | ↑ 1.34x | 1 | 0s | 29d ago | 3m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 100.00% | 99.88% | 99.97% | 99.97% | 668 ms | ↓ 0.78x | 5 | 0s | 13d ago | 3m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 100.00% | 99.26% | 92.32% | 92.32% | 510 ms | ↓ 0.46x | 31 | 0s | 10d ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 97.63% | 97.63% | 97.63% | 1720 ms | → 1.02x | 3 | 1h 20m | 8d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 609 ms | → 1.00x | 0 | — | — | 1m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 100.00% | 100.00% | 99.98% | 99.98% | 1967 ms | ↑ 1.17x | 0 | — | — | 2m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 98.67% | 36.33% | 36.33% | 462 ms | ↓ 0.79x | 50 | 1m | 9d ago | 2m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.98% | 99.70% | 99.70% | 1765 ms | ↑ 1.18x | 1 | 0s | 25d ago | 3m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.94% | 99.94% | 916 ms | ↑ 1.35x | 7 | 0s | 10d ago | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 100.00% | 99.94% | 99.94% | 2525 ms | ↑ 1.35x | 0 | — | — | 3m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.88% | 99.96% | 99.96% | 828 ms | → 1.00x | 5 | 0s | 10d ago | 3m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 100.00% | 100.00% | 911 ms | → 1.00x | 0 | — | — | 3m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1030 ms | ↑ 1.17x | 0 | — | — | 1m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.74% | 98.80% | 98.80% | 976 ms | ↑ 1.31x | 4 | 18m | 17d ago | 2m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.98% | 99.99% | 99.99% | 724 ms | → 0.99x | 1 | 0s | 16d ago | 3m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.98% | 99.93% | 99.93% | 710 ms | ↑ 1.13x | 1 | 0s | 12d ago | 3m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.90% | 99.90% | 1314 ms | ↑ 1.22x | 3 | 0s | 8d ago | 3m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.93% | 90.07% | 90.07% | 819 ms | ↑ 1.85x | 3 | 0s | 10d ago | 3m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.98% | 99.98% | 99.98% | 639 ms | → 1.00x | 1 | 0s | 29d ago | 3m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 100.00% | 99.88% | 40.94% | 40.94% | 754 ms | ↑ 1.20x | 2 | 15m | 15d ago | 2m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 100.00% | 100.00% | 100.00% | 100.00% | 824 ms | ↑ 1.11x | 0 | — | — | 3m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 100.00% | 99.91% | 99.91% | 99.91% | 982 ms | → 1.02x | 1 | 0s | 8d ago | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 904 ms | → 1.00x | 0 | — | — | 1m ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 100.00% | 90.32% | 90.32% | 90.32% | 586 ms | ↓ 0.87x | 1 | 15h 49m | 8d ago | 1m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.76% | 99.62% | 99.62% | 1549 ms | ↑ 1.06x | 10 | 0s | 10d ago | 3m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.50% | 99.32% | 99.32% | 1802 ms | ↑ 1.08x | 79 | 3m | 9d ago | 3m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.91% | 99.70% | 99.70% | 1574 ms | ↑ 1.16x | 3 | 3m | 10d ago | 3m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1555 ms | ↑ 1.12x | 4 | 0s | 12d ago | 3m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.17% | 57.74% | 57.74% | 959 ms | ↓ 0.76x | 31 | 1m | 9d ago | 3m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.33% | 99.33% | 383 ms | → 0.98x | 0 | — | — | 3m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.17% | 99.76% | 99.76% | 1512 ms | ↓ 0.81x | 35 | 0s | 9d ago | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.71% | 99.84% | 99.84% | 568 ms | → 1.04x | 6 | 10m | 11d ago | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 90.54% | 90.54% | 90.54% | 1485 ms | → 0.99x | 1 | 1d 1h | 12d ago | 1m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.69% | 99.83% | 99.83% | 1186 ms | → 1.03x | 9 | 4m | 8d ago | 3m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.98% | 99.97% | 99.97% | 1425 ms | ↑ 1.17x | 1 | 0s | 25d ago | 3m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.98% | 99.99% | 99.99% | 1096 ms | ↑ 1.43x | 1 | 0s | 9d ago | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.89% | 99.86% | 99.92% | 99.92% | 2499 ms | ↓ 0.90x | 6 | 0s | 15h ago | 3m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.89% | 99.95% | 99.99% | 99.99% | 519 ms | ↓ 0.78x | 2 | 0s | 5d ago | 3m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.89% | 24.81% | 6.49% | 6.49% | 1631 ms | → 1.01x | 2 | 11d | 1d ago | 3m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.89% | 99.93% | 99.81% | 99.81% | 831 ms | ↑ 1.08x | 3 | 0s | 6d ago | 3m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.89% | 99.81% | 99.75% | 99.75% | 906 ms | ↓ 0.92x | 8 | 0s | 5d ago | 3m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.89% | 99.34% | 99.53% | 99.53% | 1105 ms | → 0.99x | 24 | 2m | 4d ago | 3m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.89% | 99.98% | 99.91% | 99.91% | 1123 ms | ↑ 1.11x | 1 | 0s | 5d ago | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.89% | 99.07% | 99.48% | 99.48% | 881 ms | ↓ 0.92x | 29 | 3m | 4d ago | 3m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.89% | 98.20% | 99.38% | 99.38% | 957 ms | ↓ 0.89x | 60 | 3m | 5d ago | 3m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.89% | 99.79% | 99.80% | 99.80% | 836 ms | → 0.98x | 8 | 1m | 4d ago | 3m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.89% | 99.95% | 99.94% | 99.94% | 1595 ms | ↑ 1.27x | 2 | 0s | 5d ago | 3m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.89% | 99.88% | 99.93% | 99.93% | 494 ms | ↑ 1.60x | 5 | 0s | 5d ago | 3m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.89% | 99.98% | 99.99% | 99.99% | 1382 ms | ↑ 1.88x | 1 | 0s | 1d ago | 3m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.89% | 99.90% | 98.89% | 98.89% | 2069 ms | ↑ 1.43x | 4 | 0s | 1d ago | 3m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.89% | 99.88% | 99.93% | 99.93% | 1154 ms | ↓ 0.63x | 5 | 0s | 21h ago | 3m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.89% | 99.86% | 99.91% | 99.91% | 1187 ms | ↓ 0.93x | 6 | 0s | 3d ago | 3m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.89% | 99.95% | 99.91% | 99.91% | 1321 ms | → 1.04x | 2 | 0s | 3d ago | 3m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.89% | 99.86% | 98.63% | 98.63% | 1986 ms | ↑ 1.40x | 5 | 2m | 2d ago | 3m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.89% | 95.84% | 96.88% | 96.88% | 1518 ms | ↓ 0.93x | 7 | 3h 60m | 3d ago | 3m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.89% | 99.90% | 50.22% | 50.22% | 1737 ms | → 1.03x | 4 | 0s | 4d ago | 3m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.89% | 99.95% | 31.69% | 31.69% | 2303 ms | → 1.04x | 2 | 0s | 3d ago | 3m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.89% | 51.01% | 13.33% | 13.33% | 1327 ms | ↓ 0.63x | 3 | 4d 19h | 19h ago | 2m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.89% | 97.57% | 96.47% | 96.47% | 1982 ms | ↓ 0.92x | 91 | 1m | 19h ago | 2m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.89% | 99.95% | 98.58% | 98.58% | 609 ms | ↑ 1.51x | 2 | 0s | 19h ago | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.89% | 99.79% | 47.62% | 47.62% | 2220 ms | ↑ 1.19x | 9 | 0s | 19h ago | 2m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.89% | 98.26% | 99.51% | 99.51% | 549 ms | ↓ 0.63x | 61 | 2m | 19h ago | 2m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.89% | 99.95% | 45.44% | 45.44% | 1055 ms | ↑ 2.07x | 2 | 0s | 19h ago | 2m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.89% | 25.20% | 6.59% | 6.59% | 1382 ms | ↑ 1.19x | 2 | 10d 22h | 5d ago | 2m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.89% | 99.93% | 99.80% | 99.80% | 730 ms | ↑ 1.15x | 3 | 0s | 4d ago | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.89% | 99.67% | 54.27% | 54.27% | 1112 ms | ↓ 0.90x | 12 | 2m | 3d ago | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.89% | 99.95% | 56.29% | 56.29% | 1705 ms | ↑ 1.81x | 2 | 0s | 19h ago | 2m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.89% | 99.79% | 99.00% | 99.00% | 1496 ms | ↑ 1.10x | 9 | 0s | 19h ago | 2m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.89% | 99.86% | 61.39% | 61.39% | 1514 ms | → 1.01x | 6 | 0s | 19h ago | 2m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.89% | 99.90% | 66.04% | 66.04% | 1705 ms | ↑ 1.30x | 4 | 0s | 19h ago | 2m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.89% | 99.90% | 98.63% | 98.63% | 1263 ms | ↑ 1.46x | 4 | 0s | 19h ago | 2m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.89% | 99.31% | 75.32% | 75.32% | 1191 ms | ↑ 1.18x | 19 | 5m | 19h ago | 2m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 99.89% | 99.59% | 71.60% | 71.60% | 2872 ms | ↑ 1.19x | 16 | 37s | 19h ago | 2m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.89% | 99.40% | 84.02% | 84.02% | 1484 ms | ↑ 1.59x | 25 | 0s | 19h ago | 2m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.89% | 99.88% | 85.23% | 85.23% | 2586 ms | ↑ 1.94x | 5 | 0s | 19h ago | 2m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.89% | 99.98% | 90.15% | 90.15% | 2499 ms | ↑ 2.12x | 1 | 0s | 19h ago | 2m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.89% | 99.90% | 97.62% | 97.62% | 1532 ms | ↑ 1.16x | 4 | 0s | 19h ago | 2m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.89% | 99.98% | 79.81% | 79.81% | 1246 ms | ↑ 1.46x | 1 | 0s | 19h ago | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.89% | 99.95% | 99.97% | 99.97% | 2823 ms | ↑ 1.57x | 2 | 0s | 19h ago | 2m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.89% | 99.64% | 98.22% | 98.22% | 1932 ms | → 1.04x | 15 | 0s | 19h ago | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.89% | 99.59% | 97.98% | 97.98% | 1792 ms | ↑ 1.06x | 11 | 5m | 19h ago | 2m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.89% | 99.93% | 94.31% | 94.31% | 713 ms | ↑ 1.32x | 3 | 0s | 19h ago | 2m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.89% | 99.33% | 98.03% | 98.03% | 1446 ms | ↑ 1.17x | 26 | 47s | 19h ago | 2m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.89% | 99.48% | 98.08% | 98.08% | 1648 ms | ↑ 1.29x | 14 | 6m | 19h ago | 2m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.89% | 98.47% | 80.68% | 80.68% | 1136 ms | ↑ 1.19x | 31 | 11m | 19h ago | 2m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.89% | 99.81% | 97.90% | 97.90% | 1674 ms | ↑ 1.94x | 7 | 1m | 19h ago | 1m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.89% | 99.00% | 99.00% | 99.00% | 1734 ms | ↑ 1.20x | 24 | 7m | 19h ago | 1m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.89% | 99.81% | 99.81% | 99.81% | 1142 ms | → 0.98x | 6 | 0s | 19h ago | 1m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.89% | 99.93% | 99.93% | 99.93% | 1935 ms | ↑ 1.92x | 2 | 0s | 19h ago | 1m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.89% | 98.12% | 96.74% | 96.74% | 1254 ms | → 1.04x | 13 | 51m | 19h ago | 1m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.89% | 99.81% | 99.81% | 99.81% | 1251 ms | ↑ 1.48x | 6 | 0s | 19h ago | 1m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.89% | 98.94% | 98.94% | 98.94% | 2684 ms | ↑ 1.37x | 26 | 2m | 19h ago | 1m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.89% | 97.76% | 97.76% | 97.76% | 641 ms | → 1.04x | 2 | 6h 50m | 19h ago | 1m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.89% | 83.94% | 83.94% | 83.94% | 943 ms | ↓ 0.90x | 2 | 2d 2h | 19h ago | 1m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.89% | 95.90% | 95.90% | 95.90% | 1972 ms | ↑ 1.32x | 2 | 7h 45m | 19h ago | 1m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.89% | 99.92% | 99.92% | 99.92% | 1358 ms | → 1.05x | 1 | 0s | 5d ago | 1m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.89% | 94.20% | 94.20% | 94.20% | 1153 ms | ↑ 1.12x | 3 | 5h 3m | 4d ago | 1m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.89% | 99.69% | 99.69% | 99.69% | 1458 ms | → 1.05x | 4 | 0s | 3d ago | 1m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.89% | 99.92% | 99.92% | 99.92% | 940 ms | ↑ 1.11x | 1 | 0s | 5d ago | 1m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.89% | 99.58% | 99.58% | 99.58% | 761 ms | ↓ 0.84x | 6 | 3m | 2d ago | 1m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.89% | 99.90% | 99.90% | 99.90% | 1595 ms | ↑ 1.06x | 1 | 0s | 3d ago | 1m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 99.78% | 99.81% | 99.78% | 99.78% | 2388 ms | ↑ 1.12x | 8 | 0s | 1d ago | 3m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.78% | 99.64% | 99.64% | 99.64% | 1427 ms | → 0.98x | 10 | 0s | 3d ago | 3m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.78% | 99.83% | 98.94% | 98.94% | 1265 ms | ↑ 1.39x | 4 | 7m | 43m ago | 3m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.78% | 99.83% | 99.89% | 99.89% | 945 ms | → 1.04x | 7 | 0s | 2d ago | 3m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.78% | 99.95% | 99.91% | 99.91% | 1612 ms | ↑ 1.45x | 2 | 0s | 1d ago | 3m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.78% | 99.95% | 96.84% | 96.84% | 2060 ms | ↑ 1.07x | 2 | 0s | 1d ago | 3m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.78% | 99.93% | 99.96% | 99.96% | 1608 ms | ↑ 1.12x | 3 | 0s | 1d ago | 3m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 99.78% | 98.48% | 98.68% | 98.68% | 1494 ms | ↑ 1.35x | 51 | 3m | 1d ago | 3m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.78% | 99.29% | 33.84% | 33.84% | 2145 ms | → 1.03x | 18 | 7m | 16h ago | 3m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.78% | 99.74% | 99.42% | 99.42% | 1841 ms | ↑ 1.35x | 11 | 0s | 3d ago | 2m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.78% | 99.88% | 99.83% | 99.83% | 1797 ms | ↑ 1.08x | 5 | 0s | 19h ago | 2m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.78% | 99.83% | 99.84% | 99.84% | 2084 ms | ↑ 1.23x | 7 | 0s | 1d ago | 2m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.78% | 99.86% | 99.86% | 99.86% | 1360 ms | ↑ 1.30x | 6 | 0s | 2d ago | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.78% | 99.79% | 90.79% | 90.79% | 938 ms | ↑ 1.14x | 9 | 0s | 19h ago | 2m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.78% | 99.95% | 99.71% | 99.71% | 784 ms | → 1.03x | 2 | 0s | 19h ago | 2m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.78% | 99.36% | 51.85% | 51.85% | 1562 ms | ↑ 1.13x | 19 | 4m | 19h ago | 2m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.78% | 99.07% | 99.09% | 99.09% | 974 ms | ↓ 0.78x | 37 | 32s | 19h ago | 2m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 99.78% | 99.88% | 99.77% | 99.77% | 1992 ms | ↑ 1.49x | 4 | 3m | 1d ago | 2m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.78% | 99.86% | 99.77% | 99.77% | 1902 ms | ↑ 1.40x | 5 | 2m | 1d ago | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.78% | 99.95% | 48.81% | 48.81% | 1474 ms | ↑ 1.57x | 2 | 0s | 19h ago | 2m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.78% | 99.74% | 41.57% | 41.57% | 944 ms | ↑ 1.25x | 11 | 0s | 2d ago | 2m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.78% | 98.52% | 95.59% | 95.59% | 1092 ms | ↓ 0.76x | 43 | 4m | 19h ago | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.78% | 99.90% | 58.13% | 58.13% | 592 ms | ↑ 1.06x | 4 | 0s | 18h ago | 2m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.78% | 99.55% | 70.94% | 70.94% | 832 ms | ↑ 1.34x | 12 | 6m | 19h ago | 2m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.78% | 99.52% | 84.94% | 84.94% | 2982 ms | ↑ 1.17x | 9 | 12m | 19h ago | 2m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.78% | 98.16% | 98.88% | 98.88% | 2834 ms | ↑ 1.38x | 31 | 15m | 19h ago | 2m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.78% | 99.81% | 82.72% | 82.72% | 1679 ms | ↑ 1.20x | 5 | 6m | 19h ago | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.78% | 97.09% | 96.07% | 96.07% | 1564 ms | ↑ 1.39x | 30 | 31m | 19h ago | 2m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.78% | 99.90% | 99.84% | 99.84% | 1689 ms | ↑ 1.13x | 4 | 0s | 19h ago | 2m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.78% | 99.76% | 97.17% | 97.17% | 1236 ms | ↑ 1.36x | 10 | 0s | 19h ago | 2m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.78% | 96.35% | 96.35% | 96.35% | 2193 ms | ↑ 1.15x | 5 | 2h 32m | 19h ago | 1m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.78% | 96.72% | 96.72% | 96.72% | 1245 ms | ↑ 1.28x | 4 | 3h 45m | 19h ago | 1m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.78% | 95.51% | 95.51% | 95.51% | 1174 ms | ↓ 0.70x | 31 | 28m | 19h ago | 1m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.78% | 96.89% | 96.89% | 96.89% | 1550 ms | ↑ 1.15x | 6 | 2h 13m | 19h ago | 1m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.78% | 99.74% | 99.74% | 99.74% | 2016 ms | ↑ 1.24x | 10 | 1m | 19h ago | 1m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.78% | 95.91% | 95.91% | 95.91% | 1293 ms | ↑ 1.24x | 3 | 4h 10m | 2d ago | 1m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.78% | 96.53% | 96.53% | 96.53% | 1309 ms | → 1.03x | 4 | 1h 48m | 3d ago | 1m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.78% | 93.36% | 93.36% | 93.36% | 1428 ms | → 1.01x | 13 | 1h 4m | 2d ago | 1m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.78% | 95.44% | 95.44% | 95.44% | 916 ms | ↓ 0.75x | 2 | 6h 15m | 1d ago | 1m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.67% | 99.36% | 99.68% | 99.68% | 733 ms | ↓ 0.72x | 17 | 6m | 6d ago | 3m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.67% | 99.88% | 99.64% | 99.64% | 1311 ms | ↑ 1.29x | 4 | 2m | 2d ago | 3m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.67% | 99.36% | 99.43% | 99.43% | 1790 ms | ↓ 0.92x | 27 | 0s | 7h ago | 3m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.67% | 98.91% | 99.56% | 99.56% | 1907 ms | ↑ 1.09x | 43 | 42s | 1d ago | 3m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.67% | 99.52% | 99.79% | 99.79% | 1204 ms | ↑ 1.08x | 20 | 0s | 3d ago | 3m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.67% | 98.48% | 98.28% | 98.28% | 2540 ms | ↑ 1.08x | 62 | 19s | 1d ago | 3m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.67% | 95.82% | 98.52% | 98.52% | 1969 ms | ↓ 0.72x | 158 | 1m | 3d ago | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.67% | 99.86% | 99.83% | 99.83% | 2555 ms | ↑ 1.33x | 6 | 0s | 19h ago | 2m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.67% | 99.79% | 49.38% | 49.38% | 1740 ms | → 0.97x | 9 | 0s | 19h ago | 2m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.67% | 99.88% | 99.94% | 99.94% | 1858 ms | ↑ 2.13x | 4 | 42s | 19h ago | 2m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 99.67% | 98.91% | 98.82% | 98.82% | 1335 ms | ↓ 0.92x | 43 | 42s | 19h ago | 2m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 99.66% | 94.42% | 68.26% | 68.26% | 1783 ms | ↓ 0.93x | 30 | 1h 8m | 19h ago | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.66% | 99.55% | 73.75% | 73.75% | 1035 ms | ↑ 1.73x | 17 | 1m | 19h ago | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.66% | 99.67% | 71.84% | 71.84% | 1164 ms | ↑ 1.55x | 13 | 43s | 13h ago | 2m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.66% | 99.24% | 99.24% | 99.24% | 1335 ms | ↑ 1.10x | 8 | 16m | 19h ago | 1m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.66% | 99.89% | 99.89% | 99.89% | 858 ms | ↑ 1.07x | 4 | 0s | 19h ago | 1m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.66% | 97.88% | 97.88% | 97.88% | 1433 ms | ↓ 0.54x | 40 | 5m | 19h ago | 1m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.66% | 99.70% | 99.70% | 99.70% | 2295 ms | ↑ 1.93x | 8 | 1m | 19h ago | 1m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.66% | 99.84% | 99.84% | 99.84% | 1739 ms | ↑ 1.20x | 4 | 0s | 19h ago | 1m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.66% | 95.19% | 95.19% | 95.19% | 1534 ms | → 1.02x | 5 | 2h 40m | 2d ago | 1m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.56% | 99.64% | 99.90% | 99.90% | 2676 ms | ↑ 2.00x | 15 | 0s | 12h ago | 3m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.56% | 99.79% | 99.71% | 99.71% | 2631 ms | ↑ 1.15x | 9 | 0s | 5d ago | 3m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.56% | 99.50% | 99.17% | 99.17% | 2809 ms | ↑ 1.21x | 18 | 2m | 12h ago | 3m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.56% | 99.83% | 99.71% | 99.71% | 2836 ms | ↑ 1.34x | 7 | 0s | 12h ago | 3m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.55% | 93.12% | 97.43% | 97.43% | 2653 ms | → 1.02x | 18 | 2h 31m | 19h ago | 2m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.55% | 99.83% | 40.81% | 40.81% | 1433 ms | ↑ 1.12x | 7 | 0s | 2d ago | 2m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.55% | 98.50% | 95.08% | 95.08% | 616 ms | ↓ 0.68x | 57 | 1m | 19h ago | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.55% | 99.52% | 98.38% | 98.38% | 621 ms | → 1.03x | 16 | 2m | 2d ago | 2m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.55% | 99.07% | 99.43% | 99.43% | 1009 ms | ↑ 1.50x | 18 | 12m | 19h ago | 2m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.55% | 99.88% | 99.82% | 99.82% | 1760 ms | ↑ 1.09x | 4 | 2m | 11h ago | 2m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.55% | 99.86% | 90.38% | 90.38% | 3046 ms | ↑ 1.21x | 6 | 0s | 19h ago | 2m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.55% | 98.76% | 97.97% | 97.97% | 1546 ms | ↑ 1.22x | 17 | 21m | 19h ago | 2m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.55% | 62.62% | 55.30% | 55.30% | 1455 ms | ↓ 0.73x | 9 | 1d 5h | 19h ago | 1m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.55% | 96.74% | 96.74% | 96.74% | 1493 ms | ↑ 2.13x | 10 | 1h 38m | 19h ago | 1m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.55% | 95.63% | 95.63% | 95.63% | 1044 ms | → 0.99x | 49 | 24m | 19h ago | 1m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.55% | 27.00% | 24.40% | 24.40% | 2536 ms | ↓ 0.89x | 5 | 4d 6h | 21m ago | 1m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.55% | 94.53% | 94.53% | 94.53% | 1586 ms | → 1.01x | 9 | 1h 47m | 21h ago | 1m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.45% | 96.39% | 97.52% | 97.52% | 2694 ms | ↑ 1.13x | 144 | 33s | 12h ago | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.45% | 99.05% | 98.81% | 98.81% | 2818 ms | ↑ 1.14x | 39 | 16s | 1d ago | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.44% | 99.60% | 99.55% | 99.55% | 2827 ms | → 1.00x | 17 | 0s | 19h ago | 2m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.44% | 98.64% | 33.63% | 33.63% | 703 ms | ↓ 0.91x | 47 | 2m | 3d ago | 2m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 99.44% | 99.81% | 99.81% | 99.81% | 2090 ms | ↑ 1.65x | 6 | 3m | 1d ago | 2m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.44% | 99.76% | 73.45% | 73.45% | 2700 ms | ↑ 1.14x | 9 | 1m | 19h ago | 2m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.44% | 99.74% | 99.70% | 99.70% | 1373 ms | ↑ 1.32x | 9 | 2m | 12h ago | 2m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.44% | 99.57% | 98.27% | 98.27% | 1416 ms | ↑ 1.11x | 18 | 0s | 19h ago | 2m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.44% | 96.16% | 96.16% | 96.16% | 1541 ms | → 1.03x | 24 | 31m | 19h ago | 1m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.44% | 99.83% | 99.84% | 99.84% | 2167 ms | ↑ 2.93x | 6 | 2m | 19h ago | 1m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.44% | 55.44% | 52.46% | 52.46% | 2108 ms | ↑ 2.37x | 5 | 2d 14h | 19h ago | 1m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.44% | 99.65% | 99.65% | 99.65% | 1505 ms | ↑ 1.14x | 8 | 4m | 19h ago | 1m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.44% | 99.62% | 99.62% | 99.62% | 1179 ms | ↑ 1.14x | 7 | 0s | 2d ago | 1m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.42% | 99.42% | 99.42% | 99.42% | 1797 ms | → 1.00x | 4 | 3m | 4d ago | 1m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.34% | 99.62% | 98.86% | 98.86% | 2567 ms | ↑ 1.11x | 15 | 40s | 12h ago | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.33% | 33.98% | 44.48% | 44.48% | 1111 ms | ↑ 1.22x | 9 | 2d 3h | 13h ago | 2m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.33% | 97.71% | 97.44% | 97.44% | 512 ms | ↓ 0.65x | 17 | 46m | 1d ago | 2m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.33% | 93.51% | 94.92% | 94.92% | 1596 ms | ↑ 1.19x | 11 | 3h 57m | 19h ago | 2m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.33% | 99.43% | 98.27% | 98.27% | 3233 ms | ↑ 1.07x | 22 | 55s | 19h ago | 2m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.33% | 93.72% | 93.74% | 93.74% | 2287 ms | ↑ 1.68x | 23 | 1h 44m | 19h ago | 1m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.33% | 95.57% | 95.57% | 95.57% | 1992 ms | ↓ 0.92x | 48 | 18m | 19h ago | 1m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.33% | 97.69% | 97.34% | 97.34% | 2389 ms | ↑ 1.91x | 15 | 55m | 19h ago | 1m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.33% | 98.54% | 98.57% | 98.57% | 2247 ms | ↑ 1.82x | 35 | 7m | 19h ago | 1m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 99.23% | 98.27% | 98.52% | 98.52% | 3500 ms | → 0.99x | 68 | 44s | 1d ago | 3m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.23% | 99.60% | 99.75% | 99.75% | 2733 ms | ↑ 1.24x | 14 | 2m | 1d ago | 3m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.23% | 99.23% | 99.23% | 99.23% | 2904 ms | → 1.00x | 3 | 0s | 1d ago | 2m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.22% | 99.81% | 99.61% | 99.61% | 2396 ms | ↑ 1.58x | 8 | 0s | 1d ago | 3m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.22% | 99.64% | 97.77% | 97.77% | 1879 ms | ↑ 1.08x | 14 | 43s | 1d ago | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.22% | 98.00% | 99.10% | 99.10% | 1773 ms | ↑ 1.19x | 65 | 3m | 1h ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.22% | 99.22% | 99.22% | 99.22% | 2827 ms | → 1.00x | 1 | 0s | 14h ago | 1m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.21% | 95.99% | 95.99% | 95.99% | 2336 ms | ↑ 1.08x | 18 | 42m | 4h ago | 1m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.21% | 90.20% | 90.20% | 90.20% | 1894 ms | ↓ 0.82x | 76 | 15m | 2d ago | 1m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.21% | 99.52% | 99.52% | 99.52% | 892 ms | ↑ 1.05x | 6 | 10m | 2h ago | 1m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.19% | 99.19% | 99.19% | 99.19% | 568 ms | → 1.00x | 7 | 0s | 2d ago | 1m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.12% | 98.17% | 99.49% | 99.49% | 2797 ms | ↑ 1.63x | 65 | 2m | 12h ago | 3m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.12% | 99.57% | 86.65% | 86.65% | 2264 ms | ↑ 1.55x | 16 | 1m | 1d ago | 3m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.10% | 97.65% | 97.65% | 97.65% | 420 ms | ↑ 1.59x | 8 | 1h 39m | 2h ago | 1m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.01% | 99.01% | 99.01% | 99.01% | 688 ms | → 1.00x | 2 | 25m | 1d ago | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.01% | 99.24% | 99.26% | 99.26% | 2168 ms | ↑ 1.05x | 31 | 19s | 1d ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (145)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.00% | 98.59% | 97.57% | 97.57% | 1555 ms | ↑ 1.23x | 27 | 12m | 22h ago | 2m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.00% | 98.83% | 99.18% | 99.18% | 2773 ms | → 1.05x | 21 | 13m | 19h ago | 2m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.00% | 96.71% | 98.75% | 98.75% | 2139 ms | ↑ 1.55x | 76 | 8m | 19h ago | 2m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.99% | 94.82% | 94.57% | 94.57% | 2155 ms | → 0.98x | 132 | 7m | 9h ago | 2m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.90% | 99.36% | 99.10% | 99.10% | 2211 ms | ↑ 1.62x | 26 | 23s | 15h ago | 3m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.89% | 99.55% | 99.70% | 99.70% | 2846 ms | → 0.97x | 16 | 2m | 1d ago | 3m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.89% | 99.62% | 99.79% | 99.79% | 2605 ms | ↑ 1.20x | 15 | 11s | 19h ago | 2m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 98.89% | 97.17% | 99.21% | 99.21% | 1430 ms | → 0.95x | 82 | 5m | 2d ago | 2m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.88% | 99.12% | 88.26% | 88.26% | 3346 ms | → 1.02x | 37 | 0s | 13h ago | 2m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.79% | 95.90% | 96.54% | 96.54% | 3591 ms | → 0.99x | 155 | 1m | 2d ago | 3m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.79% | 99.62% | 90.37% | 90.37% | 2888 ms | ↑ 3.07x | 15 | 40s | 15h ago | 3m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.79% | 99.38% | 99.73% | 99.73% | 3025 ms | → 1.00x | 26 | 0s | 12h ago | 3m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.79% | 96.32% | 96.09% | 96.09% | 2404 ms | ↑ 1.29x | 61 | 15m | 12h ago | 3m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.79% | 99.64% | 99.90% | 99.90% | 3006 ms | ↑ 1.59x | 12 | 2m | 1d ago | 3m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.67% | 95.17% | 90.35% | 90.35% | 2022 ms | ↑ 1.10x | 134 | 5m | 10h ago | 3m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.67% | 99.67% | 99.70% | 99.70% | 1260 ms | ↑ 1.14x | 7 | 10m | 3d ago | 3m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.55% | 98.52% | 56.61% | 56.61% | 693 ms | ↑ 1.17x | 43 | 4m | 19h ago | 2m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.46% | 99.15% | 98.42% | 98.42% | 3801 ms | ↑ 1.13x | 36 | 0s | 12h ago | 3m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.32% | 98.47% | 87.12% | 87.12% | 2462 ms | ↑ 1.16x | 50 | 3m | 7h ago | 2m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 98.32% | 89.50% | 89.50% | 89.50% | 3012 ms | ↑ 1.10x | 6 | 8h 38m | 19h ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 98.31% | 98.31% | 98.31% | 98.31% | 3592 ms | → 1.00x | 2 | 0s | 4h ago | 1m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.20% | 89.64% | 89.64% | 89.64% | 919 ms | ↓ 0.51x | 54 | 25m | 1h ago | 1m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 98.13% | 78.02% | 93.21% | 93.21% | 3264 ms | ↓ 0.78x | 400 | 13m | 8h ago | 3m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.01% | 98.95% | 98.76% | 98.76% | 3824 ms | ↑ 1.11x | 29 | 7m | 1d ago | 3m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 97.98% | 96.09% | 96.09% | 96.09% | 1126 ms | ↓ 0.37x | 60 | 3m | 19h ago | 1m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.87% | 83.99% | 83.99% | 83.99% | 1545 ms | → 1.01x | 16 | 2h 28m | 3h ago | 1m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 97.76% | 98.95% | 97.93% | 97.93% | 3978 ms | ↑ 1.12x | 41 | 44s | 13h ago | 1m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 97.64% | 99.48% | 97.31% | 97.31% | 2584 ms | ↑ 2.63x | 21 | 29s | 19h ago | 1m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 97.64% | 95.39% | 95.39% | 95.39% | 3436 ms | ↑ 1.26x | 80 | 7m | 12h ago | 1m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 97.55% | 97.55% | 80.93% | 80.93% | 3541 ms | → 1.01x | 99 | 24s | 13h ago | 2m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 97.44% | 97.44% | 97.44% | 97.44% | 3459 ms | → 1.00x | 9 | 1m | 1d ago | 3m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 97.42% | 98.09% | 95.99% | 95.99% | 1616 ms | → 0.97x | 68 | 2m | 51m ago | 1m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 97.42% | 90.72% | 90.72% | 90.72% | 3278 ms | ↑ 1.28x | 71 | 29m | 19h ago | 1m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 97.33% | 95.69% | 96.02% | 96.02% | 2056 ms | ↓ 0.91x | 93 | 10m | 19h ago | 2m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 97.26% | 98.24% | 99.18% | 99.18% | 3264 ms | ↑ 1.39x | 36 | 10m | 12h ago | 3m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 97.25% | 98.93% | 99.50% | 99.50% | 1218 ms | → 1.03x | 19 | 14m | 6d ago | 3m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 97.19% | 98.15% | 98.15% | 98.15% | 2246 ms | ↑ 1.91x | 49 | 5m | 19h ago | 1m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 97.11% | 50.13% | 13.11% | 13.11% | 344 ms | ↓ 0.13x | 33 | 10h 26m | 2h ago | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 97.09% | 20.70% | 12.48% | 12.48% | 1905 ms | ↑ 1.71x | 10 | 2d 7h | 19h ago | 2m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 96.99% | 96.43% | 97.09% | 97.09% | 1414 ms | ↑ 1.20x | 6 | 4h 3m | 3d ago | 2m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 96.63% | 92.48% | 92.48% | 92.48% | 1555 ms | ↓ 0.74x | 133 | 11m | 19h ago | 1m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.55% | 99.24% | 99.59% | 99.59% | 2683 ms | ↑ 1.55x | 4 | 1h 8m | 19h ago | 2m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 96.51% | 96.51% | 96.51% | 96.51% | 3374 ms | → 1.00x | 14 | 0s | 15h ago | 3m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 96.51% | 96.51% | 96.51% | 96.51% | 1978 ms | → 1.00x | 3 | 37m | 1d ago | 1m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 96.48% | 97.41% | 97.72% | 97.72% | 4231 ms | ↑ 1.34x | 101 | 53s | 23m ago | 3m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 96.44% | 98.98% | 98.91% | 98.91% | 1109 ms | ↓ 0.62x | 14 | 21m | 10h ago | 2m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 96.41% | 67.42% | 67.42% | 67.42% | 2148 ms | ↓ 0.50x | 50 | 2h 10m | 19h ago | 1m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 96.18% | 97.02% | 97.02% | 97.02% | 4143 ms | ↑ 1.73x | 61 | 5m | 5h ago | 1m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 95.96% | 92.71% | 92.71% | 92.71% | 1800 ms | ↑ 1.13x | 73 | 22m | 3h ago | 1m ago |
| [Groq](https://lmspeed.net/provider/groq) | 95.88% | 99.10% | 99.76% | 99.76% | 1085 ms | ↑ 1.88x | 21 | 9m | 19h ago | 2m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 95.74% | 86.01% | 86.01% | 86.01% | 1559 ms | → 0.95x | 108 | 25m | 19h ago | 1m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.48% | 95.04% | 90.89% | 90.89% | 1928 ms | → 1.01x | 123 | 7m | 1d ago | 3m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 95.30% | 97.50% | 96.95% | 96.95% | 963 ms | ↑ 1.20x | 26 | 30m | 19h ago | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 94.99% | 98.50% | 42.93% | 42.93% | 1036 ms | ↑ 1.28x | 51 | 2m | 3h ago | 2m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 94.88% | 98.79% | 88.14% | 88.14% | 2841 ms | ↑ 1.24x | 31 | 7m | 19h ago | 2m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 94.51% | 95.75% | 98.76% | 98.76% | 2051 ms | ↓ 0.89x | 137 | 3m | 1d ago | 3m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 94.49% | 89.98% | 89.98% | 89.98% | 4139 ms | → 0.95x | 26 | 42m | 2d ago | 1m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 93.60% | 69.30% | 69.30% | 69.30% | 1360 ms | ↑ 1.07x | 4 | 15h 20m | 1d ago | 1m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 93.37% | 93.37% | 93.37% | 93.37% | 1376 ms | → 1.00x | 1 | 9h 60m | 7d ago | 1m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 93.29% | 98.52% | 97.32% | 97.32% | 1917 ms | ↑ 1.21x | 3 | 3h 47m | 19h ago | 2m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 92.13% | 88.98% | 88.98% | 88.98% | 1851 ms | → 1.00x | 4 | 5h 15m | 3d ago | 1m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 91.66% | 94.38% | 96.97% | 96.97% | 4307 ms | ↑ 1.36x | 199 | 2m | 43m ago | 3m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 90.37% | 93.49% | 70.65% | 70.65% | 2075 ms | ↑ 1.41x | 80 | 24m | 1h ago | 2m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 90.22% | 90.22% | 90.22% | 90.22% | 240 ms | → 1.00x | 1 | 13h 50m | 7d ago | 1m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 86.97% | 86.38% | 86.38% | 86.38% | 250 ms | → 1.00x | 2 | 10h 19m | 4d ago | 1m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 85.32% | 95.69% | 97.32% | 97.32% | 3388 ms | → 1.00x | 177 | 14s | 52m ago | 2m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 84.56% | 91.32% | 62.53% | 62.53% | 2348 ms | ↑ 1.17x | 46 | 1h 9m | 5h ago | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 84.51% | 84.51% | 84.51% | 84.51% | 923 ms | → 1.00x | 7 | 4h 36m | 23h ago | 1m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 84.20% | 82.12% | 95.26% | 95.26% | 4341 ms | ↑ 2.46x | 162 | 37m | 22m ago | 2m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 83.09% | 95.67% | 95.93% | 95.93% | 2820 ms | ↑ 1.47x | 49 | 28m | 21h ago | 2m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 82.86% | 82.86% | 82.86% | 82.86% | 990 ms | → 1.00x | 3 | 11h 20m | 2d ago | 1m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.44% | 81.88% | 89.30% | 89.30% | 3967 ms | → 0.97x | 507 | 5m | 33m ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 82.27% | 17.49% | 15.14% | 15.14% | 1349 ms | ↑ 1.09x | 3 | 8d 1h | 16h ago | 1m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 80.12% | 80.12% | 80.12% | 80.12% | 2638 ms | → 1.00x | 4 | 4h 9m | 2d ago | 1m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 80.09% | 93.17% | 97.75% | 97.75% | 940 ms | ↑ 1.74x | 80 | 26m | 2d ago | 2m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 79.76% | 90.79% | 75.01% | 75.01% | 2209 ms | ↑ 1.39x | 187 | 12m | 19h ago | 2m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 77.64% | 77.68% | 69.15% | 69.15% | 4431 ms | → 1.04x | 662 | 4m | 12m ago | 2m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 76.99% | 77.29% | 76.86% | 76.86% | 4640 ms | → 1.04x | 652 | 5m | 21m ago | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 76.39% | 77.98% | 82.93% | 82.93% | 4441 ms | → 1.04x | 663 | 4m | 23m ago | 3m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 75.84% | 77.73% | 83.39% | 83.39% | 4401 ms | → 1.03x | 653 | 4m | 12m ago | 2m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 75.75% | 61.92% | 61.88% | 61.88% | 4674 ms | ↓ 0.91x | 919 | 7m | 1h ago | 2m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 75.00% | 75.00% | 75.00% | 75.00% | 2313 ms | → 1.00x | 3 | 5h 3m | 20h ago | 1m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 72.90% | 74.56% | 52.28% | 52.28% | 4652 ms | → 1.05x | 714 | 5m | 22m ago | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 72.84% | 72.64% | 72.64% | 72.64% | 4598 ms | ↑ 1.07x | 487 | 7m | 21m ago | 1m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 72.83% | 72.83% | 72.83% | 72.83% | 1590 ms | → 1.00x | 1 | 12h 20m | 2d ago | 1m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 72.59% | 68.80% | 62.14% | 62.14% | 1505 ms | ↑ 1.09x | 46 | 4h 37m | 2d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 72.42% | 75.03% | 73.57% | 73.57% | 4921 ms | ↑ 1.09x | 706 | 5m | 12m ago | 2m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 72.17% | 71.04% | 71.04% | 71.04% | 4550 ms | → 0.99x | 622 | 7m | 21m ago | 1m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 72.01% | 72.01% | 72.01% | 72.01% | 546 ms | → 1.00x | 1 | 12h 47m | 2d ago | 1m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 70.43% | 70.43% | 70.43% | 70.43% | 2176 ms | → 1.00x | 1 | 12h 50m | 2d ago | 1m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 69.88% | 69.88% | 69.88% | 69.88% | 1640 ms | → 1.00x | 1 | 13h 20m | 2d ago | 1m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 66.91% | 66.91% | 66.91% | 66.91% | 4061 ms | → 1.00x | 23 | 1h 13m | 15h ago | 1m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 64.29% | 65.12% | 41.31% | 41.31% | 4558 ms | → 1.01x | 825 | 8m | 32m ago | 2m ago |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | 62.19% | 62.19% | 62.19% | 62.19% | 1867 ms | → 1.00x | 1 | 13h 10m | 1d ago | 1m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 61.80% | 40.86% | 40.86% | 40.86% | 1310 ms | → 1.00x | 2 | 3d 2h | 4d ago | 1m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 61.46% | 71.43% | 82.11% | 82.11% | 4470 ms | ↑ 1.12x | 652 | 9m | 13m ago | 3m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 61.09% | 61.09% | 61.09% | 61.09% | 2294 ms | → 1.00x | 7 | 5h 50m | 14h ago | 1m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 60.48% | 60.48% | 60.48% | 60.48% | 1851 ms | → 1.00x | 5 | 8h 28m | 13h ago | 1m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 59.89% | 68.33% | 68.33% | 68.33% | 4536 ms | ↑ 1.08x | 346 | 10m | 21m ago | 1m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.39% | 65.65% | 77.04% | 77.04% | 4822 ms | ↑ 1.12x | 810 | 8m | 53m ago | 3m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 58.59% | 76.34% | 32.21% | 32.21% | 3765 ms | ↑ 1.23x | 559 | 8m | 2d ago | 2m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 55.80% | 55.80% | 55.80% | 55.80% | 2553 ms | → 1.00x | 2 | 1d 3h | 3d ago | 1m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 52.88% | 52.88% | 52.88% | 52.88% | 951 ms | → 1.00x | 10 | 7h 2m | 11h ago | 1m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 48.15% | 71.84% | 59.05% | 59.05% | 2202 ms | ↑ 3.03x | 17 | 11h 43m | 19h ago | 2m ago |
| [mars-hk-duckdns-org-31328](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 47.10% | 47.10% | 47.10% | 47.10% | 2231 ms | → 1.00x | 2 | 6h 5m | 2h ago | 1m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 44.54% | 9.53% | 3.09% | 3.09% | 2145 ms | ↑ 2.86x | 3 | 9d 1h | 19h ago | 2m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 43.56% | 9.28% | 6.18% | 6.18% | 1164 ms | ↑ 1.40x | 2 | 13d 14h | 19h ago | 2m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 43.32% | 17.69% | 17.69% | 17.69% | 1746 ms | ↑ 1.45x | 2 | 6d 14h | 19h ago | 1m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 43.32% | 9.26% | 2.71% | 2.71% | 412 ms | ↓ 0.66x | 1 | 27d 4h | 30d ago | 2m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 43.21% | 10.35% | 10.35% | 10.35% | 256 ms | → 0.97x | 2 | 11d 23h | 19h ago | 1m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 43.21% | 14.09% | 14.09% | 14.09% | 2397 ms | ↑ 1.10x | 3 | 5d 16h | 19h ago | 1m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 43.21% | 9.24% | 2.45% | 2.45% | 962 ms | → 0.99x | 2 | 13d 14h | 9h ago | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 43.21% | 9.24% | 3.36% | 3.36% | 2138 ms | ↑ 1.07x | 2 | 13d 14h | 10h ago | 2m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 43.21% | 9.24% | 2.42% | 2.42% | 1659 ms | → 0.99x | 2 | 13d 14h | 12h ago | 2m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 43.18% | 9.20% | 4.73% | 4.73% | 2369 ms | ↑ 1.71x | 2 | 13d 14h | 19h ago | 2m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 43.10% | 9.21% | 2.41% | 2.41% | 1562 ms | ↑ 1.13x | 3 | 9d 1h | 1d ago | 2m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 43.05% | 9.16% | 7.41% | 7.41% | 1445 ms | ↑ 1.10x | 3 | 9d 1h | 19h ago | 2m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 42.65% | 9.51% | 9.51% | 9.51% | 2343 ms | ↓ 0.88x | 6 | 4d 7h | 19h ago | 1m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 42.49% | 9.09% | 2.38% | 2.38% | 988 ms | ↑ 1.19x | 6 | 4d 13h | 32m ago | 2m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 42.09% | 9.10% | 20.07% | 20.07% | 2391 ms | ↑ 1.44x | 13 | 2d 2h | 10h ago | 2m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 42.05% | 48.92% | 61.18% | 61.18% | 4866 ms | → 1.03x | 869 | 15m | 43m ago | 2m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 41.87% | 8.95% | 2.34% | 2.34% | 4028 ms | ↑ 1.28x | 12 | 2d 6h | 19h ago | 2m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 41.67% | 41.67% | 41.67% | 41.67% | 3010 ms | → 1.00x | 1 | 12h 60m | 23h ago | 1m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 40.97% | 56.57% | 56.57% | 56.57% | 1666 ms | ↓ 0.93x | 7 | 1d 11h | 19h ago | 1m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 40.74% | 68.74% | 47.36% | 47.36% | 3238 ms | → 1.00x | 5 | 1d 23h | 19h ago | 2m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 39.62% | 30.38% | 30.38% | 30.38% | 2655 ms | ↑ 1.23x | 31 | 8h 3m | 13h ago | 1m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 38.60% | 8.25% | 2.16% | 2.16% | 4031 ms | ↑ 1.62x | 33 | 19h 48m | 19h ago | 2m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 38.42% | 36.92% | 77.30% | 77.30% | 175 ms | → 1.01x | 9 | 2d 3h | 2d ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 37.30% | 20.62% | 20.62% | 20.62% | 4352 ms | ↑ 1.10x | 46 | 4h 50m | 2h ago | 1m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 36.75% | 36.75% | 36.75% | 36.75% | 285 ms | → 1.00x | 1 | 12h 30m | 20h ago | 58s ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 35.68% | 7.71% | 14.93% | 14.93% | 3486 ms | ↓ 0.84x | 10 | 2d 18h | 9h ago | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 33.77% | 34.82% | 53.18% | 53.18% | 4631 ms | → 1.01x | 764 | 27m | 33m ago | 3m ago |
| [New API](https://lmspeed.net/provider/new-waadri-top) | 30.88% | 30.88% | 30.88% | 30.88% | 3279 ms | → 1.00x | 2 | 7h 50m | 4h ago | 1m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 20.40% | 21.18% | 20.44% | 20.44% | 2993 ms | ↑ 1.17x | 645 | 43m | 1h ago | 1m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 19.79% | 19.79% | 19.79% | 19.79% | 1151 ms | → 1.00x | 1 | 12h 40m | 16h ago | 57s ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 19.19% | 19.19% | 19.19% | 19.19% | 564 ms | → 1.00x | 1 | 13h 10m | 17h ago | 58s ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 15.14% | 54.60% | 87.73% | 87.73% | 1850 ms | ↓ 0.33x | 6 | 2d 8h | 19h ago | 2m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 9.29% | 1.98% | 1.04% | 1.04% | 4590 ms | ↑ 1.31x | 58 | 11h 60m | 32m ago | 2m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 1.77% | 1.77% | 1.77% | 1.77% | 3061 ms | → 1.00x | 1 | 3d 16h | 4d ago | 1m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 1.22% | 0.26% | 4.47% | 4.47% | 816 ms | ↑ 2.36x | 2 | 14d 23h | 3d ago | 2m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 1.00% | 0.21% | 0.06% | 0.06% | 1852 ms | ↑ 1.30x | 1 | 29d 22h | 30d ago | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 1.00% | 0.21% | 0.06% | 0.06% | 548 ms | ↓ 0.47x | 1 | 29d 22h | 30d ago | 2m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 1.00% | 0.21% | 0.06% | 0.06% | 2106 ms | ↑ 1.07x | 1 | 29d 22h | 30d ago | 2m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 1.00% | 0.21% | 0.06% | 0.06% | 969 ms | ↑ 1.17x | 1 | 29d 22h | 30d ago | 2m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.88% | 0.19% | 46.82% | 46.82% | 492 ms | → 0.99x | 1 | 29d 22h | 30d ago | 3m ago |

</details>

<details open>
<summary><strong>🔴 Down (150)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.44% | 99.62% | 98.93% | 98.93% | 1560 ms | → 1.01x | 15 | 41s | 2m ago | 2m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 98.79% | 99.53% | 99.76% | 99.76% | 669 ms | ↑ 1.05x | 12 | 7m | 1h ago | 3m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 85.86% | 93.90% | 93.90% | 93.90% | 883 ms | ↑ 1.78x | 9 | 3h 53m | 21h ago | 1m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 84.51% | 96.21% | 96.11% | 96.11% | 2195 ms | ↑ 2.54x | 15 | 1h 39m | 23h ago | 1m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 84.19% | 86.05% | 84.61% | 84.61% | 2214 ms | ↑ 1.09x | 475 | 3m | 2m ago | 2m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 83.10% | 86.29% | 79.24% | 79.24% | 4354 ms | ↑ 1.18x | 449 | 3m | 3m ago | 3m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 79.80% | 81.00% | 94.86% | 94.86% | 4494 ms | ↑ 2.07x | 209 | 29m | 3m ago | 3m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 76.40% | 76.00% | 82.72% | 82.72% | 4504 ms | → 1.02x | 672 | 5m | 1h ago | 3m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 74.97% | 88.63% | 91.96% | 91.96% | 4802 ms | ↑ 1.06x | 204 | 14m | 13m ago | 3m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 73.24% | 75.76% | 82.06% | 82.06% | 4442 ms | ↑ 1.06x | 665 | 5m | 3m ago | 3m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 72.86% | 79.70% | 45.22% | 45.22% | 2458 ms | ↑ 1.93x | 155 | 46m | 1h ago | 2m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 72.17% | 84.87% | 83.50% | 83.50% | 4595 ms | ↑ 1.45x | 374 | 7m | 41m ago | 1m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 70.80% | 63.33% | 71.71% | 71.71% | 4717 ms | ↓ 0.90x | 787 | 10m | 23m ago | 3m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 59.02% | 89.09% | 39.08% | 39.08% | 226 ms | ↓ 0.82x | 19 | 3h 57m | 3d ago | 2m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 56.62% | 61.43% | 71.11% | 71.11% | 4653 ms | → 1.04x | 889 | 9m | 2m ago | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 56.46% | 90.28% | 40.47% | 40.47% | 1334 ms | ↓ 0.76x | 15 | 4h 34m | 3d ago | 2m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 47.42% | 48.68% | 48.68% | 48.68% | 4903 ms | → 1.00x | 236 | 13m | 13m ago | 3m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 37.87% | 69.38% | 91.97% | 91.97% | 4462 ms | ↓ 0.84x | 465 | 20m | 3m ago | 3m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 26.49% | 30.46% | 38.07% | 38.07% | 1826 ms | → 1.01x | 162 | 2h 53m | 4d ago | 1m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 21.49% | 81.60% | 95.11% | 95.11% | 621 ms | ↑ 1.21x | 59 | 2h 7m | 5d ago | 2m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 11.25% | 2.41% | 0.74% | 0.74% | 4868 ms | ↑ 1.14x | 67 | 10h 19m | 2m ago | 2m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 8.28% | 62.92% | 75.34% | 75.34% | 2954 ms | ↑ 2.54x | 472 | 25m | 6d ago | 3m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 7.94% | 80.12% | 61.48% | 61.48% | 1096 ms | ↓ 0.71x | 12 | 12h 60m | 7d ago | 2m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 6.51% | 33.33% | 82.34% | 82.34% | 1021 ms | ↑ 1.31x | 3 | 6d 18h | 7d ago | 3m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 5.16% | 1.50% | 1.50% | 1.50% | 1348 ms | → 0.97x | 2 | 10d 22h | 2d ago | 1m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.22% | 0.50% | 0.13% | 0.13% | 830 ms | ↓ 0.35x | 18 | 1d 16h | 1d ago | 2m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.53x | 1 | 29d 24h | 30d ago | 2m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 42.14% | 82.12% | 82.12% | — | ↓ 0.57x | 8 | 2d 5h | 18d ago | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 11.93% | 21.31% | 21.31% | — | ↑ 1.11x | 8 | 3d 7h | 26d ago | 1m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.02x | 1 | 29d 24h | 30d ago | 3m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.89% | 6.89% | — | ↑ 1.35x | 1 | 29d 24h | 30d ago | 2m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 15.56% | 4.07% | 4.07% | — | ↓ 0.66x | 2 | 12d 17h | 18d ago | 2m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 25.62% | 25.62% | — | ↑ 1.43x | 1 | 29d 24h | 30d ago | 2m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 43.67% | 43.67% | — | ↓ 0.78x | 1 | 29d 24h | 30d ago | 2m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.29x | 1 | 29d 24h | 30d ago | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 27.25% | 32.83% | 32.83% | — | ↑ 1.18x | 3 | 7d 8h | 21d ago | 2m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.08x | 1 | 29d 24h | 30d ago | 3m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d 24h | 30d ago | 3m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.67% | 4.67% | — | ↑ 1.83x | 1 | 29d 24h | 30d ago | 2m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 23.02% | 23.02% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 25.94% | 49.68% | 49.68% | — | ↑ 1.43x | 2 | 11d 5h | 22d ago | 2m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 45.42% | 36.74% | 36.74% | — | ↓ 0.84x | 3 | 5d 14h | 17d ago | 2m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d 24h | 30d ago | 2m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 65.47% | 65.47% | — | ↑ 1.71x | 1 | 29d 24h | 30d ago | 3m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 16.16% | 16.16% | — | ↑ 1.25x | 1 | 29d 24h | 30d ago | 2m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 68.67% | 68.67% | — | ↓ 0.48x | 1 | 29d 24h | 30d ago | 3m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.24x | 1 | 29d 24h | 30d ago | 2m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.98% | 8.98% | — | ↑ 1.32x | 1 | 29d 24h | 30d ago | 2m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 19.88% | 78.98% | 78.98% | — | ↓ 0.59x | 1 | 24d 4h | 24d ago | 3m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.92x | 1 | 29d 24h | 30d ago | 1m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 15.64% | 15.64% | 15.64% | — | ↑ 1.70x | 5 | 3d 4h | 16d ago | 1m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 62.14% | 62.14% | 62.14% | — | ↓ 0.91x | 7 | 1d 9h | 9d ago | 1m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.96x | 1 | 29d 24h | 30d ago | 2m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.27x | 1 | 29d 24h | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.94x | 1 | 15d 16h | 16d ago | 1m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 51.14% | 51.14% | 51.14% | — | ↓ 0.13x | 5 | 2d 19h | 14d ago | 1m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 63.47% | 63.47% | — | ↑ 1.61x | 1 | 29d 24h | 30d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 56.18% | 88.41% | 88.41% | — | ↑ 1.92x | 2 | 6d 18h | 14d ago | 3m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.64x | 1 | 29d 24h | 30d ago | 2m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 56.04% | 56.04% | — | ↑ 1.08x | 1 | 29d 24h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 50.95% | 50.95% | — | → 1.00x | 1 | 29d 24h | 30d ago | 3m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.97x | 1 | 12d 21h | 13d ago | 1m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.82x | 1 | 29d 24h | 30d ago | 2m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 0.05% | 0.04% | 0.04% | — | ↓ 0.71x | 3 | 9d 24h | 14d ago | 2m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 70.54% | 70.54% | — | ↑ 3.12x | 3 | 9d 24h | 12d ago | 2m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 21h | 3d ago | 3m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.67x | 1 | 29d 24h | 30d ago | 3m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 19h | 3d ago | 2m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.90x | 1 | 29d 24h | 30d ago | 2m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 14.76% | 14.76% | — | ↑ 1.92x | 1 | 29d 24h | 30d ago | 3m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 27.88% | 27.88% | — | ↓ 0.82x | 1 | 29d 24h | 30d ago | 3m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 50.03% | 50.03% | — | → 1.00x | 1 | 29d 24h | 30d ago | 2m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.79x | 1 | 29d 24h | 30d ago | 3m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.81x | 1 | 29d 24h | 30d ago | 2m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 2m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.03x | 1 | 15d 17h | 16d ago | 1m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 19h | 3d ago | 2m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 9.49% | 75.57% | 75.57% | — | ↑ 1.08x | 2 | 13d 14h | 27d ago | 3m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.18x | 1 | 29d 24h | 30d ago | 3m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.45% | 4.45% | — | → 0.98x | 1 | 29d 24h | 30d ago | 2m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.94x | 1 | 29d 24h | 30d ago | 1m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 52.09% | 52.09% | — | ↓ 0.70x | 1 | 29d 24h | 30d ago | 3m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.13x | 1 | 29d 24h | 30d ago | 2m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.00% | 0.02% | 0.02% | — | ↑ 1.06x | 1 | 29d 24h | 30d ago | 3m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 34.14% | 34.14% | — | ↑ 2.61x | 1 | 29d 24h | 30d ago | 3m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.95x | 1 | 29d 24h | 30d ago | 2m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 29.07% | 29.07% | — | ↓ 0.35x | 1 | 29d 24h | 30d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.65x | 1 | 29d 24h | 30d ago | 3m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 3.91x | 1 | 29d 24h | 30d ago | 2m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.58x | 1 | 29d 24h | 30d ago | 3m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.34x | 1 | 29d 24h | 30d ago | 2m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 21.05% | 21.05% | — | ↓ 0.94x | 1 | 29d 24h | 30d ago | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 59.68% | 59.68% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 2m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 66.49% | 66.49% | — | ↑ 1.14x | 1 | 29d 24h | 30d ago | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.99x | 1 | 29d 24h | 30d ago | 2m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.19x | 1 | 29d 24h | 30d ago | 2m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 74.72% | 93.32% | 93.32% | — | ↑ 1.43x | 1 | 8d 3h | 8d ago | 2m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 4d 22h | 5d ago | 1m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.97x | 1 | 29d 24h | 30d ago | 2m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.20x | 1 | 29d 24h | 30d ago | 3m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.94x | 1 | 29d 24h | 30d ago | 3m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.79x | 1 | 29d 24h | 30d ago | 2m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 68.53% | 90.47% | 90.47% | — | ↓ 0.66x | 23 | 10h 10m | 10d ago | 3m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.49x | 1 | 29d 24h | 30d ago | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.92% | 23.92% | — | ↑ 2.20x | 1 | 29d 24h | 30d ago | 2m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 21h | 3d ago | 3m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 0.89% | 0.89% | — | ↑ 1.18x | 1 | 29d 24h | 30d ago | 3m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.71x | 1 | 29d 24h | 30d ago | 3m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.25x | 1 | 29d 24h | 30d ago | 3m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 19.29% | 11.00% | 11.00% | — | ↓ 0.36x | 2 | 12d 4h | 19d ago | 2m ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 3m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.75x | 1 | 29d 24h | 30d ago | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.69x | 1 | 29d 24h | 30d ago | 3m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.91x | 1 | 29d 24h | 30d ago | 2m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 31.63% | 81.57% | 81.57% | — | → 1.03x | 13 | 1d 14h | 21d ago | 3m ago |
| [速创API](https://lmspeed.net/provider/succhuang-api) | 0.00% | 0.00% | 19.67% | 19.67% | — | ↑ 3.58x | 1 | 29d 24h | 30d ago | 3m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.66x | 1 | 29d 24h | 30d ago | 3m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.95x | 1 | 29d 24h | 30d ago | 3m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 24.61% | 24.61% | 24.61% | — | ↑ 1.32x | 3 | 6d 2h | 18d ago | 1m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 20h | 3d ago | 3m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.63x | 1 | 29d 24h | 30d ago | 3m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 2m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.65% | 21.65% | — | ↑ 2.49x | 1 | 29d 24h | 30d ago | 2m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 3m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.19x | 1 | 29d 24h | 30d ago | 3m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 17.45% | 60.22% | 60.22% | — | → 1.04x | 4 | 6d 5h | 25d ago | 3m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 12.92% | 12.92% | — | ↑ 1.40x | 1 | 29d 24h | 30d ago | 3m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d 24h | 30d ago | 3m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 3.15x | 1 | 29d 24h | 30d ago | 3m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | ↑ 1.11x | 1 | 29d 24h | 30d ago | 2m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.48x | 1 | 29d 24h | 30d ago | 2m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.03x | 1 | 15d 21h | 16d ago | 1m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.77x | 1 | 29d 24h | 30d ago | 2m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.19x | 1 | 29d 24h | 30d ago | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.03x | 1 | 29d 24h | 30d ago | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 49.95% | 49.95% | — | ↑ 1.05x | 1 | 29d 24h | 30d ago | 3m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 75.37% | 93.56% | 93.56% | — | ↓ 0.44x | 2 | 3d 23h | 8d ago | 3m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.16x | 1 | 29d 24h | 30d ago | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.53x | 1 | 29d 24h | 30d ago | 3m ago |

</details>

<details>
<summary><strong>⚫ Unknown (1)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Codex666](https://lmspeed.net/provider/codex666) | — | — | 21.37% | 21.37% | — | — | 5 | 2d 2h | 13d ago | — |

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
