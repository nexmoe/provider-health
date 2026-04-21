# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**516 providers** — 202 🟢 operational · 138 🟡 degraded · 176 🔴 down · 0 ⚫ unknown

_Updated 2026-04-21 05:32 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (202)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.88% | 99.93% | 90.67% | 90.67% | 1402 ms | ↑ 2.31x | 2 | 0s | 18d ago | 22m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.88% | 99.80% | 99.94% | 99.94% | 2170 ms | ↑ 1.99x | 7 | 0s | 12d ago | 21m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.88% | 99.95% | 99.99% | 99.99% | 715 ms | → 1.04x | 1 | 0s | 18d ago | 22m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.88% | 99.12% | 58.13% | 58.13% | 967 ms | ↓ 0.83x | 31 | 1m | 11d ago | 21m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.88% | 99.88% | 99.96% | 99.96% | 816 ms | → 1.05x | 4 | 0s | 12d ago | 21m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.88% | 99.93% | 99.81% | 99.81% | 1045 ms | ↑ 1.11x | 2 | 0s | 8d ago | 21m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.88% | 99.98% | 99.98% | 99.98% | 762 ms | → 1.04x | 0 | — | — | 20m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.88% | 98.95% | 99.51% | 99.51% | 1232 ms | ↑ 1.17x | 16 | 16m | 8d ago | 20m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.88% | 99.73% | 99.62% | 99.62% | 1558 ms | ↑ 1.08x | 10 | 0s | 12d ago | 20m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.88% | 98.11% | 99.38% | 99.38% | 968 ms | → 1.02x | 60 | 3m | 7d ago | 21m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.88% | 99.36% | 99.68% | 99.68% | 755 ms | ↓ 0.75x | 15 | 7m | 8d ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.88% | 99.95% | 99.70% | 99.70% | 1807 ms | ↑ 1.34x | 1 | 0s | 27d ago | 20m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.88% | 99.95% | 99.93% | 99.93% | 787 ms | ↑ 1.26x | 1 | 0s | 14d ago | 20m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.88% | 99.90% | 99.90% | 99.90% | 1302 ms | ↑ 1.17x | 3 | 0s | 10d ago | 20m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.88% | 99.93% | 99.94% | 99.94% | 1605 ms | ↑ 1.27x | 2 | 0s | 7d ago | 20m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.88% | 99.93% | 90.16% | 90.16% | 827 ms | ↑ 1.78x | 2 | 0s | 12d ago | 20m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.88% | 99.75% | 99.71% | 99.71% | 2478 ms | ↑ 1.12x | 9 | 0s | 7d ago | 20m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.88% | 99.88% | 99.70% | 99.70% | 1598 ms | ↑ 1.22x | 3 | 3m | 12d ago | 20m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.88% | 99.88% | 99.91% | 99.91% | 1583 ms | ↑ 1.06x | 4 | 0s | 14d ago | 20m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.88% | 99.12% | 99.76% | 99.76% | 1552 ms | ↓ 0.93x | 35 | 0s | 11d ago | 20m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.88% | 99.95% | 99.97% | 99.97% | 1446 ms | ↑ 1.27x | 1 | 0s | 27d ago | 20m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.88% | 99.95% | 99.99% | 99.99% | 1131 ms | ↑ 1.46x | 1 | 0s | 11d ago | 19m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.88% | 99.98% | 99.34% | 99.34% | 889 ms | ↑ 1.24x | 0 | — | — | 19m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.88% | 99.66% | 99.83% | 99.83% | 1520 ms | ↑ 1.18x | 9 | 4m | 10d ago | 19m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.88% | 97.39% | 99.32% | 99.32% | 1834 ms | ↑ 1.38x | 79 | 3m | 11d ago | 17m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.88% | 99.98% | 99.98% | 99.98% | 2203 ms | ↑ 1.40x | 0 | — | — | 17m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.88% | 99.70% | 98.81% | 98.81% | 984 ms | ↑ 1.36x | 4 | 18m | 19d ago | 10m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.88% | 93.51% | 93.57% | 93.57% | 1793 ms | ↑ 1.24x | 1 | 18h 20m | 14d ago | 7m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.88% | 97.81% | 97.89% | 97.89% | 1756 ms | ↑ 1.06x | 3 | 1h 20m | 10d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.88% | 99.90% | 100.00% | 100.00% | 605 ms | → 0.99x | 0 | — | — | 7m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.88% | 99.94% | 100.00% | 100.00% | 1058 ms | ↑ 1.27x | 0 | — | — | 7m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.88% | 91.45% | 91.56% | 91.56% | 239 ms | → 1.04x | 1 | 13h 50m | 9d ago | 7m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.88% | 99.86% | 99.93% | 99.93% | 1176 ms | ↑ 1.25x | 1 | 0s | 7d ago | 7m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.88% | 94.14% | 94.24% | 94.24% | 1720 ms | → 1.01x | 1 | 9h 60m | 9d ago | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.88% | 91.22% | 91.28% | 91.28% | 1887 ms | ↑ 1.13x | 1 | 1d 1h | 14d ago | 7m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.82% | 99.82% | 100.00% | 100.00% | 878 ms | → 1.00x | 0 | — | — | 20m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.77% | 99.93% | 99.99% | 99.99% | 478 ms | ↓ 0.70x | 2 | 0s | 7d ago | 22m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.77% | 29.31% | 7.36% | 7.36% | 1709 ms | → 1.01x | 2 | 10d | 3d ago | 22m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.76% | 99.29% | 99.54% | 99.54% | 1126 ms | → 1.05x | 24 | 2m | 6d ago | 20m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.76% | 99.93% | 99.90% | 99.90% | 1133 ms | ↑ 1.13x | 2 | 0s | 24h ago | 20m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.76% | 99.09% | 99.49% | 99.49% | 987 ms | ↑ 1.11x | 26 | 4m | 6d ago | 21m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.78% | 99.80% | 99.80% | 1808 ms | ↑ 1.16x | 7 | 1m | 6d ago | 20m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.39% | 99.43% | 99.43% | 1834 ms | → 1.01x | 24 | 0s | 2d ago | 20m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.76% | 99.85% | 99.93% | 99.93% | 506 ms | ↑ 1.53x | 5 | 0s | 7d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.76% | 99.93% | 96.87% | 96.87% | 2434 ms | ↑ 1.19x | 2 | 0s | 3d ago | 20m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.76% | 99.88% | 98.90% | 98.90% | 2106 ms | ↑ 1.56x | 4 | 0s | 3d ago | 19m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.76% | 99.83% | 99.91% | 99.91% | 1211 ms | → 0.99x | 6 | 0s | 5d ago | 19m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.76% | 99.68% | 99.84% | 99.84% | 1110 ms | ↑ 1.36x | 6 | 10m | 4h ago | 19m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.76% | 99.93% | 99.91% | 99.91% | 1332 ms | → 1.04x | 2 | 0s | 5d ago | 18m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.83% | 98.64% | 98.64% | 2007 ms | ↑ 1.58x | 5 | 2m | 4d ago | 18m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.76% | 95.67% | 96.91% | 96.91% | 2977 ms | ↑ 1.35x | 7 | 3h 60m | 5d ago | 18m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.76% | 99.88% | 50.67% | 50.67% | 3072 ms | ↑ 1.39x | 4 | 0s | 6d ago | 18m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.76% | 99.93% | 32.31% | 32.31% | 2275 ms | ↓ 0.92x | 2 | 0s | 5d ago | 17m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.76% | 56.35% | 14.11% | 14.11% | 1363 ms | → 1.02x | 3 | 4d 3h | 3d ago | 17m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.83% | 99.86% | 99.86% | 1382 ms | ↑ 1.28x | 6 | 0s | 4d ago | 17m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.76% | 97.51% | 96.50% | 96.50% | 1983 ms | ↓ 0.90x | 89 | 1m | 3d ago | 16m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.18% | 99.52% | 99.52% | 1199 ms | → 0.99x | 61 | 2m | 3d ago | 16m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.80% | 99.85% | 99.85% | 2246 ms | ↑ 1.32x | 7 | 0s | 3d ago | 11m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.76% | 99.93% | 98.60% | 98.60% | 674 ms | ↑ 1.63x | 2 | 0s | 3d ago | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.75% | 90.88% | 90.88% | 947 ms | ↑ 1.19x | 9 | 0s | 3d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.75% | 48.22% | 48.22% | 2247 ms | ↑ 1.21x | 9 | 0s | 3d ago | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.76% | 99.93% | 46.03% | 46.03% | 1063 ms | ↑ 2.15x | 2 | 0s | 3d ago | 9m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.76% | 99.90% | 99.80% | 99.80% | 733 ms | ↑ 1.19x | 3 | 0s | 6d ago | 10m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.76% | 99.63% | 54.85% | 54.85% | 1113 ms | ↓ 0.88x | 12 | 2m | 5d ago | 9m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.93% | 56.83% | 56.83% | 1686 ms | ↑ 1.83x | 2 | 0s | 3d ago | 9m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.76% | 99.04% | 95.64% | 95.64% | 1109 ms | → 1.02x | 32 | 2m | 3d ago | 9m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.76% | 99.85% | 61.95% | 61.95% | 1557 ms | → 1.01x | 5 | 0s | 3d ago | 9m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.76% | 99.75% | 99.01% | 99.01% | 1513 ms | ↑ 1.11x | 9 | 0s | 3d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.88% | 98.66% | 98.66% | 1308 ms | ↑ 1.60x | 4 | 0s | 3d ago | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.76% | 99.26% | 75.74% | 75.74% | 1851 ms | ↑ 1.59x | 19 | 5m | 3d ago | 9m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.76% | 99.90% | 66.56% | 66.56% | 1732 ms | ↑ 1.32x | 3 | 0s | 3d ago | 9m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.76% | 99.36% | 84.32% | 84.32% | 1511 ms | ↑ 1.84x | 25 | 0s | 3d ago | 8m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.76% | 99.85% | 85.51% | 85.51% | 2634 ms | ↑ 1.90x | 5 | 0s | 3d ago | 8m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.76% | 99.95% | 90.34% | 90.34% | 2610 ms | ↑ 2.33x | 1 | 0s | 3d ago | 8m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.76% | 99.88% | 97.67% | 97.67% | 1603 ms | ↑ 1.44x | 4 | 0s | 3d ago | 8m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.76% | 99.95% | 80.17% | 80.17% | 1277 ms | ↑ 1.52x | 1 | 0s | 3d ago | 8m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.76% | 99.93% | 99.97% | 99.97% | 2873 ms | ↑ 1.53x | 2 | 0s | 3d ago | 8m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.76% | 99.63% | 98.26% | 98.26% | 2019 ms | ↑ 1.15x | 14 | 0s | 3d ago | 8m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.76% | 99.78% | 83.03% | 83.03% | 1720 ms | ↑ 1.23x | 5 | 6m | 3d ago | 8m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.76% | 99.55% | 98.03% | 98.03% | 1835 ms | ↑ 1.09x | 11 | 5m | 3d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.76% | 99.90% | 94.45% | 94.45% | 1745 ms | ↑ 1.85x | 3 | 0s | 3d ago | 8m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.76% | 99.28% | 98.08% | 98.08% | 1748 ms | ↑ 1.46x | 26 | 47s | 3d ago | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.76% | 98.02% | 96.83% | 96.83% | 1271 ms | → 0.99x | 13 | 51m | 3d ago | 8m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.76% | 99.43% | 98.13% | 98.13% | 1646 ms | ↑ 1.40x | 14 | 6m | 3d ago | 8m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.73% | 99.75% | 99.75% | 2112 ms | ↑ 1.29x | 9 | 1m | 3d ago | 8m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.76% | 99.03% | 81.14% | 81.14% | 1401 ms | ↑ 1.86x | 30 | 3m | 3d ago | 8m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.78% | 97.96% | 97.96% | 1713 ms | ↑ 2.42x | 7 | 1m | 3d ago | 8m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.76% | 98.98% | 99.03% | 99.03% | 1838 ms | ↑ 1.43x | 24 | 7m | 3d ago | 8m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.76% | 99.79% | 99.82% | 99.82% | 1271 ms | ↑ 1.18x | 6 | 0s | 3d ago | 8m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.76% | 99.91% | 99.94% | 99.94% | 1957 ms | ↑ 1.95x | 2 | 0s | 3d ago | 7m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.76% | 99.79% | 99.82% | 99.82% | 1924 ms | ↑ 1.92x | 6 | 0s | 3d ago | 7m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.76% | 89.92% | 89.95% | 89.95% | 3029 ms | ↑ 1.17x | 6 | 8h 38m | 3d ago | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.76% | 98.95% | 98.98% | 98.98% | 2721 ms | ↑ 1.46x | 26 | 2m | 3d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.76% | 84.48% | 84.50% | 84.50% | 1070 ms | ↑ 1.17x | 2 | 2d 2h | 3d ago | 8m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.76% | 99.86% | 99.93% | 99.93% | 1377 ms | ↑ 1.07x | 1 | 0s | 7d ago | 7m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.76% | 94.59% | 94.65% | 94.65% | 1305 ms | ↑ 1.30x | 3 | 5h 3m | 6d ago | 7m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.76% | 99.65% | 99.72% | 99.72% | 1461 ms | ↑ 1.12x | 4 | 0s | 5d ago | 7m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.76% | 99.40% | 99.50% | 99.50% | 235 ms | ↓ 0.35x | 4 | 3m | 6d ago | 7m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.76% | 99.83% | 99.91% | 99.91% | 1654 ms | ↑ 1.13x | 1 | 0s | 5d ago | 7m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.76% | 90.05% | 90.12% | 90.12% | 1864 ms | → 1.00x | 4 | 5h 15m | 5d ago | 7m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.76% | 99.81% | 99.90% | 99.90% | 1074 ms | ↑ 1.05x | 1 | 0s | 24h ago | 7m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.65% | 99.67% | 99.75% | 99.75% | 2913 ms | ↑ 1.21x | 3 | 0s | 13h ago | 22m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.65% | 99.85% | 99.64% | 99.64% | 1323 ms | ↑ 1.30x | 4 | 2m | 4d ago | 20m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.65% | 99.62% | 99.65% | 99.65% | 1542 ms | → 1.01x | 10 | 0s | 5d ago | 20m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.65% | 99.83% | 99.89% | 99.89% | 1208 ms | ↑ 1.33x | 6 | 0s | 4d ago | 20m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.65% | 99.93% | 99.91% | 99.91% | 1754 ms | ↑ 1.59x | 2 | 0s | 3d ago | 20m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.65% | 99.90% | 99.96% | 99.96% | 1616 ms | ↑ 1.13x | 3 | 0s | 3d ago | 19m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.64% | 99.24% | 34.44% | 34.44% | 2153 ms | ↑ 1.07x | 18 | 7m | 3d ago | 18m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.64% | 98.55% | 98.30% | 98.30% | 2542 ms | ↑ 1.19x | 56 | 21s | 3d ago | 18m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.64% | 99.73% | 99.42% | 99.42% | 1903 ms | ↑ 1.43x | 10 | 0s | 5d ago | 17m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.64% | 99.93% | 99.72% | 99.72% | 2120 ms | ↑ 1.24x | 2 | 0s | 3d ago | 16m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.64% | 99.85% | 99.83% | 99.83% | 1830 ms | ↑ 1.12x | 5 | 0s | 3d ago | 16m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.64% | 98.64% | 97.59% | 97.59% | 1728 ms | ↑ 1.61x | 26 | 11m | 3d ago | 11m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.64% | 99.31% | 52.40% | 52.40% | 1577 ms | ↑ 1.16x | 19 | 4m | 3d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.64% | 98.49% | 95.13% | 95.13% | 618 ms | ↓ 0.73x | 55 | 54s | 3d ago | 9m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.64% | 99.93% | 49.41% | 49.41% | 1790 ms | ↑ 1.93x | 2 | 0s | 3d ago | 9m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.64% | 99.88% | 58.71% | 58.71% | 785 ms | ↑ 1.36x | 4 | 0s | 3d ago | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.64% | 99.48% | 85.23% | 85.23% | 3009 ms | ↑ 1.29x | 9 | 12m | 3d ago | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.64% | 99.21% | 98.90% | 98.90% | 2926 ms | ↑ 1.37x | 30 | 20s | 3d ago | 8m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.64% | 99.51% | 71.39% | 71.39% | 852 ms | ↑ 1.42x | 12 | 6m | 3d ago | 9m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.64% | 96.96% | 96.17% | 96.17% | 1586 ms | ↑ 1.55x | 30 | 31m | 3d ago | 8m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.64% | 21.49% | 17.46% | 17.46% | 1376 ms | → 1.00x | 3 | 7d 9h | 3d ago | 8m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.64% | 99.88% | 99.84% | 99.84% | 1940 ms | ↑ 1.28x | 4 | 0s | 3d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.64% | 99.73% | 97.24% | 97.24% | 1501 ms | ↑ 1.87x | 10 | 0s | 3d ago | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.64% | 96.52% | 96.57% | 96.57% | 2236 ms | ↑ 1.21x | 5 | 2h 32m | 3d ago | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.64% | 96.83% | 96.86% | 96.86% | 1955 ms | ↑ 1.57x | 4 | 3h 45m | 3d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.64% | 95.69% | 95.73% | 95.73% | 2219 ms | ↑ 1.73x | 31 | 28m | 3d ago | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.64% | 97.00% | 97.04% | 97.04% | 2269 ms | ↑ 1.37x | 6 | 2h 13m | 3d ago | 7m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.64% | 95.75% | 95.78% | 95.78% | 1316 ms | ↑ 1.72x | 49 | 24m | 3d ago | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.64% | 99.87% | 99.90% | 99.90% | 908 ms | ↑ 1.07x | 4 | 0s | 3d ago | 8m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.63% | 96.13% | 96.18% | 96.18% | 1350 ms | ↑ 1.23x | 3 | 4h 10m | 4d ago | 7m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.63% | 93.86% | 93.92% | 93.92% | 1489 ms | ↑ 1.14x | 13 | 1h 4m | 4d ago | 7m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.63% | 95.72% | 95.78% | 95.78% | 1228 ms | ↑ 1.25x | 2 | 6h 15m | 3d ago | 7m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.53% | 98.87% | 99.56% | 99.56% | 2082 ms | ↑ 1.25x | 42 | 43s | 3d ago | 20m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.53% | 98.99% | 98.82% | 98.82% | 2756 ms | ↑ 1.15x | 39 | 16s | 3d ago | 20m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.53% | 99.48% | 99.79% | 99.79% | 1215 ms | ↑ 1.09x | 20 | 0s | 5d ago | 19m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.53% | 96.07% | 98.53% | 98.53% | 1977 ms | ↓ 0.81x | 144 | 1m | 5d ago | 19m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.52% | 92.85% | 97.45% | 97.45% | 2732 ms | ↑ 1.21x | 18 | 2h 31m | 3d ago | 16m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.52% | 99.83% | 99.83% | 99.83% | 2579 ms | ↑ 1.44x | 6 | 0s | 3d ago | 16m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.52% | 99.66% | 99.55% | 99.55% | 2646 ms | → 0.96x | 13 | 0s | 3d ago | 16m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.52% | 98.89% | 98.91% | 98.91% | 1153 ms | ↓ 0.69x | 15 | 19m | 1d ago | 16m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.52% | 99.85% | 99.94% | 99.94% | 1952 ms | ↑ 2.41x | 4 | 42s | 3d ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 99.52% | 98.84% | 98.83% | 98.83% | 2344 ms | ↑ 1.14x | 43 | 42s | 3d ago | 16m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.52% | 99.78% | 41.32% | 41.32% | 1442 ms | ↑ 1.11x | 8 | 0s | 14h ago | 10m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.52% | 99.75% | 49.92% | 49.92% | 1769 ms | → 0.98x | 9 | 0s | 3d ago | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.52% | 99.51% | 74.19% | 74.19% | 1635 ms | ↑ 2.05x | 17 | 1m | 3d ago | 9m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.52% | 98.69% | 98.02% | 98.02% | 1552 ms | ↑ 1.31x | 17 | 21m | 3d ago | 8m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.52% | 99.70% | 99.71% | 99.71% | 1346 ms | ↑ 1.29x | 9 | 2m | 2d ago | 8m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 96.83% | 96.86% | 96.86% | 1526 ms | ↑ 2.36x | 10 | 1h 38m | 3d ago | 8m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.51% | 99.24% | 99.28% | 99.28% | 1338 ms | ↑ 1.07x | 8 | 16m | 3d ago | 7m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.51% | 97.94% | 97.98% | 97.98% | 1477 ms | ↓ 0.77x | 40 | 5m | 3d ago | 7m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.51% | 99.68% | 99.72% | 99.72% | 2321 ms | ↑ 2.09x | 8 | 1m | 3d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.51% | 99.81% | 99.85% | 99.85% | 1776 ms | ↑ 1.24x | 4 | 0s | 3d ago | 7m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.51% | 96.71% | 96.78% | 96.78% | 1334 ms | → 1.03x | 5 | 1h 26m | 3h ago | 7m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.51% | 95.48% | 95.53% | 95.53% | 1689 ms | ↑ 1.12x | 5 | 2h 40m | 4d ago | 7m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.41% | 99.80% | 99.72% | 99.72% | 2813 ms | ↑ 1.34x | 7 | 0s | 2d ago | 20m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.40% | 98.79% | 99.19% | 99.19% | 2444 ms | → 1.02x | 20 | 14m | 3d ago | 16m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.40% | 97.63% | 97.46% | 97.46% | 620 ms | ↑ 1.14x | 16 | 49m | 3d ago | 11m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.40% | 95.68% | 96.06% | 96.06% | 2068 ms | ↑ 1.12x | 86 | 10m | 3d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.40% | 99.48% | 98.40% | 98.40% | 654 ms | ↑ 1.08x | 16 | 2m | 4d ago | 9m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.39% | 99.01% | 99.44% | 99.44% | 1619 ms | ↑ 1.77x | 18 | 12m | 3d ago | 9m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.39% | 99.85% | 99.83% | 99.83% | 1960 ms | ↑ 1.15x | 4 | 2m | 2d ago | 9m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.39% | 99.83% | 90.57% | 90.57% | 3099 ms | ↑ 1.22x | 6 | 0s | 3d ago | 8m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.39% | 99.60% | 72.30% | 72.30% | 1733 ms | ↑ 2.11x | 14 | 40s | 2d ago | 9m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.39% | 93.27% | 95.04% | 95.04% | 1873 ms | ↑ 1.39x | 10 | 4h 21m | 3d ago | 8m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.39% | 68.32% | 56.54% | 56.54% | 2021 ms | ↑ 1.41x | 9 | 23h 32m | 3d ago | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.39% | 99.53% | 98.32% | 98.32% | 1436 ms | ↑ 1.12x | 18 | 0s | 3d ago | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.39% | 31.36% | 26.55% | 26.55% | 2555 ms | → 1.01x | 5 | 3d 21h | 2d ago | 8m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.39% | 72.31% | 72.38% | 72.38% | 1390 ms | → 1.05x | 4 | 15h 20m | 3d ago | 7m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.39% | 94.84% | 94.89% | 94.89% | 2005 ms | ↑ 1.07x | 9 | 1h 47m | 3d ago | 7m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.29% | 99.71% | 99.72% | 99.72% | 880 ms | ↓ 0.86x | 10 | 37s | 17h ago | 21m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.29% | 96.71% | 97.54% | 97.54% | 2931 ms | ↑ 1.36x | 127 | 28s | 2d ago | 20m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.29% | 99.61% | 98.87% | 98.87% | 2481 ms | ↑ 1.13x | 14 | 43s | 2d ago | 20m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.29% | 99.73% | 98.94% | 98.94% | 1342 ms | ↑ 1.56x | 7 | 4m | 2d ago | 20m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.29% | 99.75% | 99.61% | 99.61% | 2446 ms | ↑ 1.64x | 9 | 0s | 20h ago | 19m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.29% | 99.61% | 97.80% | 97.80% | 1909 ms | ↑ 1.11x | 14 | 43s | 3d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.28% | 98.92% | 99.07% | 99.07% | 2168 ms | ↑ 1.23x | 38 | 2m | 4h ago | 16m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.28% | 98.57% | 34.26% | 34.26% | 730 ms | → 1.01x | 47 | 2m | 5d ago | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.27% | 98.44% | 57.19% | 57.19% | 851 ms | ↑ 1.46x | 43 | 4m | 3d ago | 9m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.27% | 99.75% | 73.89% | 73.89% | 2778 ms | ↑ 1.28x | 8 | 1m | 3d ago | 9m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.27% | 24.81% | 13.95% | 13.95% | 2211 ms | ↑ 1.09x | 10 | 2d 3h | 3d ago | 9m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.27% | 99.83% | 99.84% | 99.84% | 2189 ms | ↑ 3.09x | 5 | 2m | 3d ago | 8m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.27% | 98.56% | 98.61% | 98.61% | 2300 ms | ↑ 2.06x | 33 | 7m | 3d ago | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.27% | 60.87% | 53.88% | 53.88% | 2158 ms | ↑ 1.89x | 5 | 2d 5h | 3d ago | 8m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.27% | 96.32% | 96.35% | 96.35% | 1570 ms | ↑ 1.08x | 24 | 31m | 3d ago | 7m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.27% | 99.63% | 99.66% | 99.66% | 1523 ms | ↑ 1.15x | 8 | 4m | 3d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.27% | 99.60% | 99.65% | 99.65% | 1342 ms | ↑ 1.23x | 7 | 0s | 4d ago | 7m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.27% | 90.80% | 90.85% | 90.85% | 1927 ms | → 0.96x | 76 | 15m | 4d ago | 7m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.25% | 99.25% | 99.44% | 99.44% | 2711 ms | → 1.00x | 3 | 0s | 3d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.23% | 99.23% | 99.62% | 99.62% | 2712 ms | → 1.00x | 1 | 0s | 3d ago | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.17% | 38.74% | 44.98% | 44.98% | 1195 ms | ↑ 1.14x | 9 | 1d 22h | 3d ago | 17m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.15% | 99.60% | 98.94% | 98.94% | 1624 ms | ↑ 1.06x | 15 | 0s | 2d ago | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.15% | 93.49% | 93.93% | 93.93% | 2311 ms | ↑ 1.82x | 22 | 1h 49m | 3d ago | 8m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.15% | 96.17% | 96.21% | 96.21% | 2278 ms | ↑ 1.09x | 18 | 42m | 2d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.15% | 95.73% | 95.76% | 95.76% | 2053 ms | → 1.00x | 48 | 18m | 3d ago | 7m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.15% | 99.60% | 97.42% | 97.42% | 2414 ms | ↑ 2.08x | 14 | 43s | 3d ago | 8m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.15% | 99.51% | 99.56% | 99.56% | 926 ms | → 1.01x | 6 | 10m | 2d ago | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.06% | 99.58% | 99.75% | 99.75% | 2821 ms | ↑ 1.39x | 13 | 2m | 3d ago | 20m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.05% | 97.91% | 99.11% | 99.11% | 2928 ms | ↑ 1.82x | 65 | 3m | 2d ago | 18m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.03% | 95.42% | 94.70% | 94.70% | 2544 ms | ↑ 1.23x | 115 | 6m | 2d ago | 8m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.03% | 99.20% | 99.30% | 99.30% | 533 ms | → 0.99x | 7 | 0s | 4d ago | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.02% | 99.05% | 99.17% | 99.17% | 784 ms | → 1.01x | 2 | 25m | 3d ago | 7m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (138)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.94% | 96.00% | 96.57% | 96.57% | 3519 ms | → 1.00x | 147 | 1m | 18h ago | 21m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.94% | 98.09% | 99.50% | 99.50% | 2930 ms | ↑ 2.01x | 65 | 2m | 2d ago | 21m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.94% | 99.36% | 99.11% | 99.11% | 2302 ms | ↑ 1.91x | 24 | 25s | 3d ago | 20m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.94% | 99.53% | 86.77% | 86.77% | 2377 ms | ↑ 1.86x | 16 | 1m | 3d ago | 20m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.91% | 97.71% | 97.73% | 97.73% | 882 ms | ↑ 1.83x | 8 | 1h 39m | 2d ago | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.82% | 99.19% | 99.27% | 99.27% | 2216 ms | → 1.00x | 31 | 19s | 3d ago | 20m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.81% | 99.63% | 99.70% | 99.70% | 1291 ms | ↑ 1.13x | 7 | 10m | 5d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 98.80% | 98.80% | 99.20% | 99.20% | 3230 ms | → 1.00x | 2 | 0s | 2d ago | 6m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.79% | 96.91% | 98.76% | 98.76% | 2230 ms | ↑ 1.87x | 69 | 8m | 3d ago | 11m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.79% | 99.08% | 88.48% | 88.48% | 3418 ms | ↑ 1.12x | 36 | 0s | 3d ago | 8m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 98.67% | 97.04% | 99.22% | 99.22% | 1632 ms | ↑ 1.19x | 82 | 5m | 4d ago | 11m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.59% | 99.58% | 90.46% | 90.46% | 3011 ms | ↑ 3.51x | 15 | 40s | 3d ago | 22m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.59% | 99.61% | 99.90% | 99.90% | 3102 ms | ↑ 1.71x | 12 | 2m | 3d ago | 20m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.57% | 99.51% | 99.70% | 99.70% | 2963 ms | → 1.04x | 16 | 2m | 2d ago | 17m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.57% | 99.56% | 99.78% | 99.78% | 2714 ms | ↑ 1.31x | 16 | 10s | 18h ago | 16m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.54% | 90.30% | 90.35% | 90.35% | 1059 ms | ↓ 0.74x | 54 | 25m | 2d ago | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.47% | 99.31% | 99.72% | 99.72% | 3102 ms | ↑ 1.07x | 27 | 0s | 2d ago | 21m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.46% | 96.98% | 90.44% | 90.44% | 2085 ms | → 1.04x | 94 | 3m | 2d ago | 19m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.42% | 93.22% | 71.14% | 71.14% | 2518 ms | ↑ 1.54x | 80 | 24m | 2d ago | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.36% | 99.12% | 98.44% | 98.44% | 3857 ms | ↑ 1.23x | 35 | 0s | 2d ago | 22m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.30% | 98.64% | 87.35% | 87.35% | 2460 ms | ↑ 1.12x | 41 | 3m | 19h ago | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.12% | 98.90% | 98.77% | 98.77% | 3679 ms | ↑ 1.06x | 29 | 7m | 2h ago | 20m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 98.09% | 97.51% | 81.10% | 81.10% | 3478 ms | ↓ 0.92x | 96 | 24s | 3d ago | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.00% | 96.07% | 96.09% | 96.09% | 2432 ms | ↑ 1.33x | 63 | 15m | 15h ago | 20m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 97.97% | 97.97% | 98.15% | 98.15% | 3346 ms | → 1.00x | 9 | 1m | 3d ago | 20m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 97.94% | 99.18% | 71.88% | 71.88% | 3007 ms | ↑ 1.30x | 18 | 15m | 2d ago | 9m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 97.81% | 96.29% | 96.33% | 96.33% | 1482 ms | ↓ 0.55x | 60 | 3m | 3d ago | 7m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.56% | 85.20% | 85.26% | 85.26% | 1918 ms | ↑ 1.06x | 16 | 2h 28m | 2d ago | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 97.45% | 95.56% | 95.59% | 95.59% | 3498 ms | ↑ 1.44x | 80 | 7m | 2d ago | 7m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 97.33% | 99.43% | 97.39% | 97.39% | 2642 ms | ↑ 2.56x | 21 | 29s | 3d ago | 8m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.28% | 97.28% | 97.47% | 97.47% | 3352 ms | → 1.00x | 14 | 0s | 3d ago | 21m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 97.19% | 97.19% | 97.38% | 97.38% | 1876 ms | → 1.00x | 3 | 37m | 3d ago | 6m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 97.08% | 91.09% | 91.12% | 91.12% | 3396 ms | ↑ 1.54x | 71 | 29m | 3d ago | 7m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 97.06% | 99.17% | 99.67% | 99.67% | 669 ms | ↑ 1.06x | 12 | 18m | 20h ago | 21m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 96.95% | 98.16% | 99.19% | 99.19% | 3479 ms | ↑ 1.47x | 36 | 10m | 2d ago | 21m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 96.84% | 98.07% | 96.06% | 96.06% | 1864 ms | ↑ 1.13x | 67 | 2m | 16h ago | 8m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 96.72% | 98.17% | 98.19% | 98.19% | 2321 ms | ↑ 2.30x | 47 | 6m | 14h ago | 8m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 96.23% | 92.72% | 92.74% | 92.74% | 1543 ms | ↓ 0.75x | 133 | 11m | 3d ago | 8m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 96.22% | 90.83% | 90.90% | 90.90% | 3558 ms | ↓ 0.88x | 26 | 42m | 4d ago | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.18% | 99.19% | 99.59% | 99.59% | 2740 ms | ↑ 1.48x | 4 | 1h 8m | 3d ago | 16m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 96.12% | 97.42% | 97.74% | 97.74% | 4247 ms | ↑ 1.47x | 96 | 56s | 2d ago | 21m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 95.99% | 69.32% | 69.36% | 69.36% | 2185 ms | ↑ 1.07x | 50 | 2h 10m | 3d ago | 7m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 95.26% | 86.65% | 86.68% | 86.68% | 2581 ms | ↑ 1.24x | 108 | 25m | 3d ago | 7m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 95.11% | 54.87% | 13.75% | 13.75% | 4081 ms | ↑ 1.53x | 52 | 5h 44m | 2h ago | 17m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.06% | 94.85% | 90.98% | 90.98% | 1683 ms | → 0.97x | 123 | 7m | 3d ago | 20m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 94.91% | 97.53% | 97.01% | 97.01% | 1027 ms | → 1.02x | 21 | 37m | 3d ago | 8m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.63% | 86.70% | 86.82% | 86.82% | 927 ms | → 1.00x | 7 | 4h 36m | 3d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.53% | 92.46% | 92.49% | 92.49% | 2269 ms | ↑ 1.59x | 75 | 25m | 1d ago | 7m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 94.37% | 95.61% | 98.76% | 98.76% | 2131 ms | ↓ 0.94x | 136 | 3m | 3h ago | 21m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 93.00% | 98.34% | 43.38% | 43.38% | 1645 ms | ↑ 1.25x | 50 | 4m | 6h ago | 10m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 92.61% | 98.44% | 97.36% | 97.36% | 2012 ms | ↑ 1.26x | 3 | 3h 47m | 3d ago | 9m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 90.37% | 85.37% | 85.48% | 85.48% | 998 ms | → 1.00x | 3 | 11h 20m | 4d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 84.15% | 84.15% | 84.31% | 84.31% | 2431 ms | → 1.00x | 4 | 4h 9m | 4d ago | 6m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 84.12% | 91.00% | 63.12% | 63.12% | 2411 ms | ↑ 1.32x | 45 | 1h 11m | 2d ago | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 83.19% | 46.15% | 46.22% | 46.22% | 1276 ms | → 1.00x | 2 | 3d 2h | 6d ago | 7m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 81.96% | 95.54% | 95.96% | 95.96% | 2904 ms | ↑ 1.47x | 47 | 29m | 3d ago | 16m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 81.66% | 81.66% | 81.91% | 81.91% | 1647 ms | → 1.00x | 1 | 12h 20m | 4d ago | 6m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 81.34% | 81.34% | 81.53% | 81.53% | 2107 ms | → 1.00x | 3 | 5h 3m | 3d ago | 6m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 81.18% | 89.30% | 91.97% | 91.97% | 4784 ms | → 0.96x | 186 | 14m | 2d ago | 20m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 81.05% | 81.05% | 81.30% | 81.30% | 449 ms | → 1.00x | 1 | 12h 47m | 4d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 80.26% | 80.26% | 80.51% | 80.51% | 2074 ms | → 1.00x | 1 | 12h 50m | 4d ago | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 79.50% | 64.06% | 62.22% | 62.22% | 4670 ms | → 0.95x | 846 | 7m | 2d ago | 17m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 79.26% | 77.28% | 69.35% | 69.35% | 4455 ms | ↑ 1.06x | 649 | 4m | 12h ago | 17m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 78.74% | 77.37% | 83.49% | 83.49% | 4552 ms | ↑ 1.06x | 633 | 5m | 2d ago | 10m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 78.67% | 77.72% | 83.04% | 83.04% | 4373 ms | → 1.04x | 644 | 4m | 12h ago | 19m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 78.64% | 77.18% | 77.32% | 77.32% | 4779 ms | ↑ 1.08x | 619 | 5m | 1d ago | 8m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 78.55% | 92.91% | 97.78% | 97.78% | 968 ms | ↓ 0.84x | 80 | 26m | 4d ago | 17m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 78.14% | 90.44% | 75.23% | 75.23% | 2268 ms | ↑ 1.14x | 187 | 12m | 3d ago | 16m ago |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | 76.95% | 76.95% | 77.25% | 77.25% | 1805 ms | → 1.00x | 1 | 13h 10m | 3d ago | 6m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 76.12% | 75.93% | 82.18% | 82.18% | 4250 ms | → 0.97x | 632 | 6m | 2d ago | 20m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 75.61% | 75.33% | 73.99% | 73.99% | 4896 ms | ↑ 1.10x | 667 | 5m | 1h ago | 8m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 75.27% | 74.74% | 52.95% | 52.95% | 4660 ms | ↑ 1.07x | 678 | 5m | 2d ago | 9m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 75.09% | 73.69% | 73.72% | 73.72% | 4568 ms | → 1.02x | 489 | 7m | 2d ago | 7m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 74.73% | 71.76% | 71.79% | 71.79% | 4556 ms | → 0.99x | 631 | 7m | 4h ago | 7m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 73.91% | 83.96% | 83.71% | 83.71% | 4608 ms | ↑ 1.39x | 382 | 7m | 1h ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 72.69% | 72.69% | 73.06% | 73.06% | 2036 ms | → 1.00x | 2 | 6h 5m | 2d ago | 6m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 70.57% | 70.57% | 70.94% | 70.94% | 2295 ms | → 1.00x | 1 | 12h 60m | 3d ago | 6m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 70.00% | 70.00% | 70.40% | 70.40% | 2386 ms | → 1.00x | 1 | 12h 30m | 3d ago | 6m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 69.25% | 85.72% | 45.63% | 45.63% | 2699 ms | ↑ 1.45x | 155 | 28m | 2d ago | 17m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 67.81% | 67.81% | 67.95% | 67.95% | 2114 ms | → 1.00x | 7 | 5h 50m | 3d ago | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 67.23% | 67.23% | 67.37% | 67.37% | 1829 ms | → 1.00x | 5 | 8h 28m | 3d ago | 7m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 65.94% | 65.94% | 66.38% | 66.38% | 3297 ms | → 1.00x | 1 | 12h 40m | 3d ago | 6m ago |
| [New API](https://lmspeed.net/provider/new-waadri-top) | 64.68% | 64.68% | 65.06% | 65.06% | 3135 ms | → 1.00x | 2 | 7h 50m | 2d ago | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 63.52% | 12.96% | 8.17% | 8.17% | 964 ms | → 1.00x | 2 | 12d 14h | 3d ago | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 63.29% | 12.95% | 3.62% | 3.62% | 440 ms | → 1.00x | 1 | 25d 4h | 30d ago | 10m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 63.21% | 12.94% | 4.18% | 4.18% | 2191 ms | → 1.00x | 2 | 12d 14h | 2d ago | 11m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 63.21% | 12.94% | 3.24% | 3.24% | 1872 ms | → 1.00x | 2 | 12d 14h | 3d ago | 11m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 63.18% | 22.44% | 22.49% | 22.49% | 1658 ms | → 1.00x | 2 | 6d 14h | 3d ago | 7m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 63.17% | 60.02% | 60.14% | 60.14% | 888 ms | → 1.00x | 10 | 7h 2m | 2d ago | 7m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 63.16% | 12.92% | 3.29% | 3.29% | 920 ms | → 1.00x | 2 | 12d 14h | 2d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 63.15% | 12.89% | 6.29% | 6.29% | 2261 ms | → 1.00x | 2 | 12d 14h | 3d ago | 9m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 63.09% | 12.92% | 3.23% | 3.23% | 1602 ms | → 1.00x | 3 | 8d 9h | 3d ago | 11m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 63.06% | 13.46% | 13.49% | 13.49% | 1054 ms | → 1.00x | 2 | 11d 23h | 3d ago | 8m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 63.05% | 62.82% | 62.94% | 62.94% | 2445 ms | → 1.00x | 2 | 1d 3h | 5d ago | 7m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 63.00% | 71.13% | 82.22% | 82.22% | 4288 ms | ↓ 0.85x | 626 | 9m | 2d ago | 19m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 62.99% | 12.84% | 9.78% | 9.78% | 1353 ms | → 1.00x | 3 | 8d 9h | 3d ago | 8m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 62.94% | 18.06% | 18.10% | 18.10% | 2250 ms | → 1.00x | 4 | 4d 6h | 1d ago | 7m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 62.45% | 12.73% | 12.47% | 12.47% | 2215 ms | → 1.00x | 6 | 4d 5h | 3d ago | 8m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 61.76% | 12.65% | 3.17% | 3.17% | 3437 ms | → 1.00x | 12 | 2d 2h | 3d ago | 11m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 61.27% | 69.78% | 69.82% | 69.82% | 4564 ms | → 1.02x | 353 | 10m | 4h ago | 7m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 60.63% | 58.31% | 58.34% | 58.34% | 1668 ms | ↑ 1.38x | 7 | 1d 11h | 3d ago | 8m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 60.53% | 67.56% | 48.12% | 48.12% | 3055 ms | ↑ 1.31x | 4 | 2d 11h | 3d ago | 9m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 59.12% | 34.62% | 34.66% | 34.66% | 2372 ms | → 0.99x | 31 | 8h 3m | 3d ago | 7m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 58.42% | 12.04% | 3.02% | 3.02% | 3765 ms | → 1.00x | 34 | 17h 49m | 18h ago | 16m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 54.47% | 11.24% | 20.44% | 20.44% | 2386 ms | → 1.00x | 15 | 1d 18h | 2d ago | 9m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 54.34% | 54.08% | 54.12% | 54.12% | 4805 ms | ↓ 0.95x | 237 | 14m | 2d ago | 22m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 53.86% | 88.34% | 39.61% | 39.61% | 319 ms | → 0.97x | 19 | 4h 4m | 5d ago | 9m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 49.45% | 23.28% | 23.34% | 23.34% | 4415 ms | → 1.00x | 50 | 4h 49m | 2d ago | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 45.21% | 70.76% | 59.87% | 59.87% | 2266 ms | ↑ 1.76x | 17 | 11h 43m | 3d ago | 8m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 43.69% | 49.15% | 61.25% | 61.25% | 4864 ms | → 1.04x | 827 | 15m | 57m ago | 17m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 42.30% | 36.47% | 53.54% | 53.54% | 4468 ms | ↓ 0.87x | 713 | 28m | 2d ago | 20m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 32.81% | 52.90% | 87.83% | 87.83% | 1630 ms | ↑ 1.76x | 5 | 2d 19h | 3d ago | 11m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 25.60% | 5.24% | 1.54% | 1.54% | 4818 ms | → 1.00x | 80 | 8h 4m | 49m ago | 9m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 24.64% | 24.64% | 24.64% | 24.64% | 2002 ms | → 1.00x | 2 | 1d 12h | 15h ago | 20m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 22.00% | 22.00% | 22.15% | 22.15% | 2641 ms | → 1.00x | 1 | 3d 16h | 6d ago | 7m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 18.79% | 3.83% | 1.91% | 1.91% | 4492 ms | → 1.00x | 90 | 7h 18m | 2h ago | 9m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 18.16% | 3.75% | 0.94% | 0.94% | 2628 ms | → 1.00x | 1 | 27d 22h | 30d ago | 16m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 18.04% | 3.72% | 0.94% | 0.94% | 1543 ms | → 1.00x | 2 | 13d 23h | 18h ago | 16m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 16.14% | 3.36% | 0.84% | 0.84% | 1519 ms | → 1.00x | 1 | 28d 2h | 30d ago | 20m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 16.14% | 3.36% | 0.86% | 0.86% | 1209 ms | → 1.00x | 1 | 28d 2h | 30d ago | 20m ago |
| [xAI](https://lmspeed.net/provider/xai) | 16.12% | 3.36% | 0.84% | 0.84% | 1599 ms | → 1.00x | 1 | 28d 2h | 30d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 16.10% | 3.36% | 28.47% | 28.47% | 591 ms | → 1.00x | 1 | 28d 2h | 30d ago | 21m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 16.08% | 6.15% | 75.71% | 75.71% | 1651 ms | → 1.04x | 1 | 27d 7h | 29d ago | 21m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 16.08% | 3.34% | 0.84% | 0.84% | 866 ms | → 1.00x | 1 | 28d 2h | 30d ago | 19m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 15.80% | 3.27% | 15.45% | 15.45% | 3056 ms | → 1.00x | 1 | 28d 2h | 30d ago | 18m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 15.78% | 3.27% | 13.62% | 13.62% | 842 ms | → 1.00x | 1 | 28d 2h | 30d ago | 18m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 15.56% | 3.22% | 0.81% | 0.81% | 1489 ms | → 1.00x | 3 | 9d 9h | 6h ago | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 15.53% | 3.20% | 26.19% | 26.19% | 641 ms | → 1.00x | 1 | 28d 2h | 30d ago | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 15.53% | 3.20% | 0.80% | 0.80% | 2344 ms | → 1.00x | 1 | 28d 2h | 30d ago | 16m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 14.84% | 3.04% | 0.76% | 0.76% | 966 ms | → 1.00x | 1 | 28d 2h | 30d ago | 11m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 14.81% | 9.83% | 23.17% | 23.17% | 2407 ms | ↑ 1.58x | 5 | 5d 6h | 28d ago | 8m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 14.81% | 3.02% | 2.48% | 2.48% | 194 ms | → 1.00x | 1 | 28d 2h | 30d ago | 8m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 14.73% | 3.06% | 0.80% | 0.80% | 896 ms | → 1.00x | 3 | 9d 9h | 16d ago | 10m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 14.73% | 3.01% | 0.93% | 0.93% | 1072 ms | → 1.00x | 1 | 28d 2h | 30d ago | 9m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 14.73% | 3.01% | 0.80% | 0.80% | 1060 ms | → 1.00x | 1 | 28d 2h | 30d ago | 10m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 14.58% | 3.00% | 0.75% | 0.75% | 3080 ms | → 1.00x | 9 | 3d 3h | 8h ago | 16m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 9.70% | 1.98% | 1.05% | 1.05% | 4546 ms | → 1.00x | 26 | 1d 2h | 48m ago | 8m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 5.81% | 1.21% | 1.18% | 1.18% | 4558 ms | → 1.00x | 1 | 29d 7h | 30d ago | 17m ago |

</details>

<details open>
<summary><strong>🔴 Down (176)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.76% | 99.95% | 99.94% | 99.94% | 2540 ms | ↑ 1.39x | 1 | 0s | 17m ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 95.38% | 96.99% | 97.02% | 97.02% | 4179 ms | ↑ 1.69x | 65 | 5m | 7m ago | 7m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 89.51% | 95.73% | 96.75% | 96.75% | 1548 ms | ↑ 1.75x | 6 | 7h 2m | 1d ago | 11m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 88.79% | 83.11% | 83.20% | 83.20% | 715 ms | → 1.04x | 3 | 13h 33m | 20h ago | 7m ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 85.26% | 80.73% | 80.82% | 80.82% | 647 ms | ↑ 1.06x | 2 | 1d 6h | 2d ago | 7m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 85.21% | 91.29% | 67.42% | 67.42% | 1842 ms | ↑ 1.09x | 30 | 2h 36m | 2d ago | 8m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 85.16% | 90.77% | 90.82% | 90.82% | 2147 ms | ↑ 1.73x | 3 | 20h 13m | 2d ago | 7m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 85.14% | 96.91% | 38.35% | 38.35% | 474 ms | ↓ 0.93x | 3 | 15h 3m | 2d ago | 9m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 85.14% | 96.96% | 99.23% | 99.23% | 2066 ms | ↑ 1.28x | 1 | 1d 21h | 2d ago | 10m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 85.14% | 95.60% | 36.08% | 36.08% | 467 ms | ↓ 0.94x | 50 | 55m | 2d ago | 10m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 85.14% | 96.84% | 40.63% | 40.63% | 774 ms | ↑ 1.27x | 3 | 15h 13m | 2d ago | 9m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 85.14% | 93.64% | 93.69% | 93.69% | 802 ms | ↓ 0.90x | 7 | 6h 30m | 2d ago | 7m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 85.05% | 94.69% | 94.72% | 94.72% | 636 ms | → 1.02x | 3 | 19h 36m | 2d ago | 8m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 85.02% | 26.46% | 6.62% | 6.62% | 1348 ms | → 1.05x | 3 | 7d 6h | 2d ago | 10m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 84.90% | 96.69% | 41.29% | 41.29% | 984 ms | ↑ 1.36x | 12 | 3h 46m | 2d ago | 10m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 84.80% | 96.81% | 99.00% | 99.00% | 2255 ms | ↑ 1.63x | 5 | 9h 4m | 2d ago | 11m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 84.80% | 96.79% | 99.01% | 99.01% | 2293 ms | ↑ 1.55x | 6 | 7h 33m | 2d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 84.47% | 96.46% | 96.32% | 96.32% | 2932 ms | → 1.04x | 20 | 2h 16m | 2d ago | 8m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 84.44% | 96.74% | 99.06% | 99.06% | 2364 ms | ↑ 1.84x | 7 | 6h 30m | 2d ago | 11m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 84.07% | 94.39% | 98.60% | 98.60% | 2405 ms | ↑ 2.22x | 80 | 36m | 2d ago | 17m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 83.89% | 96.56% | 99.10% | 99.10% | 1129 ms | ↓ 0.58x | 6 | 7h 32m | 2d ago | 19m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 83.80% | 96.49% | 99.12% | 99.12% | 718 ms | → 0.97x | 6 | 7h 35m | 2d ago | 21m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 83.76% | 95.85% | 91.55% | 91.55% | 568 ms | ↓ 0.58x | 32 | 1h 25m | 2d ago | 20m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 83.76% | 88.60% | 88.68% | 88.68% | 1005 ms | ↑ 1.30x | 1 | 1d 21h | 2d ago | 20m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 83.69% | 96.61% | 99.15% | 99.15% | 1518 ms | ↑ 2.09x | 2 | 22h 35m | 2d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 83.69% | 96.47% | 99.07% | 99.07% | 2608 ms | → 0.97x | 7 | 6h 30m | 2d ago | 21m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 83.69% | 96.45% | 98.93% | 98.93% | 2408 ms | ↑ 1.15x | 8 | 5h 41m | 2d ago | 21m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 83.57% | 95.06% | 97.86% | 97.86% | 1590 ms | ↑ 1.93x | 52 | 55m | 2d ago | 19m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 83.53% | 95.02% | 97.69% | 97.69% | 3210 ms | → 0.98x | 62 | 44m | 2d ago | 20m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 83.31% | 96.25% | 99.05% | 99.05% | 3017 ms | ↑ 2.24x | 16 | 2h 51m | 2d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 83.29% | 96.17% | 98.34% | 98.34% | 2885 ms | ↑ 1.33x | 16 | 2h 51m | 2d ago | 20m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 83.25% | 95.89% | 95.41% | 95.41% | 3985 ms | ↑ 1.13x | 41 | 1h 7m | 2d ago | 8m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 82.59% | 73.97% | 92.42% | 92.42% | 3215 ms | ↓ 0.92x | 398 | 20m | 2d ago | 20m ago |
| [Groq](https://lmspeed.net/provider/groq) | 79.93% | 95.83% | 98.96% | 98.96% | 1205 ms | ↑ 1.75x | 22 | 2h 11m | 2d ago | 16m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 79.64% | 95.73% | 87.48% | 87.48% | 2799 ms | ↑ 1.17x | 30 | 1h 37m | 2d ago | 11m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 77.23% | 75.81% | 82.77% | 82.77% | 4464 ms | → 1.03x | 640 | 5m | 22m ago | 22m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 76.17% | 90.93% | 96.14% | 96.14% | 4387 ms | ↑ 1.42x | 195 | 16m | 2d ago | 21m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 72.09% | 83.62% | 82.69% | 82.69% | 2304 ms | ↑ 1.15x | 439 | 9m | 2d ago | 8m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 69.38% | 92.43% | 96.53% | 96.53% | 3539 ms | ↑ 1.08x | 173 | 16m | 2d ago | 15m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 69.18% | 78.19% | 94.48% | 94.48% | 4306 ms | ↑ 2.05x | 165 | 53m | 2d ago | 16m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 68.29% | 90.43% | 90.43% | 90.43% | 936 ms | ↑ 1.07x | 9 | 9h 13m | 3d ago | 7m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 67.02% | 78.41% | 88.52% | 88.52% | 4054 ms | → 0.96x | 488 | 11m | 2d ago | 21m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 66.90% | 82.60% | 78.51% | 78.51% | 4414 ms | ↑ 1.23x | 438 | 9m | 2d ago | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 66.75% | 92.75% | 93.14% | 93.14% | 2291 ms | ↑ 2.17x | 13 | 5h 35m | 3d ago | 8m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 65.02% | 76.93% | 94.04% | 94.04% | 4449 ms | ↑ 1.67x | 211 | 41m | 2d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 61.97% | 60.61% | 71.06% | 71.06% | 4647 ms | ↓ 0.86x | 735 | 14m | 8h ago | 22m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 55.69% | 55.69% | 55.83% | 55.83% | 4035 ms | → 1.00x | 24 | 3h 3m | 2d ago | 6m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 54.75% | 71.49% | 61.67% | 61.67% | 1976 ms | ↓ 0.90x | 47 | 4h 27m | 2d ago | 18m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 53.51% | 62.20% | 40.79% | 40.79% | 4565 ms | → 1.03x | 783 | 12m | 2d ago | 9m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 49.88% | 10.21% | 3.17% | 3.17% | 2128 ms | → 1.00x | 4 | 6d 18h | 2d ago | 9m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 49.49% | 49.49% | 49.74% | 49.74% | 1631 ms | → 1.00x | 2 | 1d 5h | 2d ago | 6m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 48.24% | 62.50% | 76.34% | 76.34% | 4877 ms | ↑ 1.24x | 763 | 12m | 2d ago | 22m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 47.02% | 9.72% | 2.44% | 2.44% | 1025 ms | → 1.00x | 7 | 3d 21h | 2d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 46.72% | 58.74% | 70.47% | 70.47% | 4615 ms | → 1.01x | 833 | 13m | 2d ago | 17m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 44.92% | 73.20% | 31.92% | 31.92% | 3580 ms | → 0.97x | 537 | 13m | 2d ago | 9m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 43.31% | 31.70% | 76.70% | 76.70% | 174 ms | → 1.05x | 8 | 2d 15h | 2d ago | 21m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 41.20% | 65.76% | 91.16% | 91.16% | 4454 ms | ↓ 0.94x | 441 | 27m | 2d ago | 22m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 39.67% | 8.28% | 14.88% | 14.88% | 3493 ms | → 1.00x | 11 | 2d 12h | 2d ago | 22m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 36.35% | 86.63% | 40.04% | 40.04% | 1328 ms | ↓ 0.94x | 12 | 9h 42m | 5d ago | 9m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 17.60% | 20.29% | 19.97% | 19.97% | 3014 ms | ↑ 1.22x | 603 | 47m | 2d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 13.79% | 13.79% | 14.22% | 14.22% | 582 ms | → 1.00x | 2 | 1d 5h | 2d ago | 6m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 13.12% | 4.71% | 4.71% | 4.71% | 3000 ms | → 1.00x | 13 | 1d 5h | 7m ago | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 7.77% | 26.53% | 37.06% | 37.06% | 2191 ms | ↑ 1.15x | 134 | 3h 46m | 6d ago | 8m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 5.59% | 1.44% | 1.44% | 1.44% | 1348 ms | → 1.00x | 2 | 11d 22h | 4d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 2.90% | 0.59% | 4.55% | 4.55% | 730 ms | → 1.00x | 3 | 9d 22h | 2d ago | 9m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 2.63% | 0.54% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 2d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 2.62% | 0.54% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 2d ago | 17m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.47% | 0.52% | 46.47% | 46.47% | 444 ms | → 1.00x | 2 | 14d 22h | 2d ago | 20m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.31% | 0.52% | 0.13% | 0.13% | 830 ms | ↓ 0.68x | 18 | 1d 16h | 3d ago | 16m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 36.56% | 81.39% | 81.39% | — | — | 7 | 2d 19h | 20d ago | 16m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.83% | 6.83% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 16.10% | 4.03% | 4.03% | — | — | 2 | 12d 17h | 20d ago | 17m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 43.28% | 43.28% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 21.15% | 32.32% | 32.32% | — | — | 3 | 8d | 23d ago | 9m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 60.70% | 74.64% | 74.64% | — | — | 406 | 35m | 8d ago | 19m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 20m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 21m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 21m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 22.53% | 22.53% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 19.79% | 48.78% | 48.78% | — | — | 2 | 12d 5h | 24d ago | 8m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 40.00% | 36.27% | 36.27% | — | — | 3 | 6d 6h | 19d ago | 9m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 64.88% | 64.88% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 16.02% | 16.02% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 68.02% | 68.02% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 20m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.74% | 8.74% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 13.50% | 78.24% | 78.24% | — | — | 1 | 26d 4h | 26d ago | 20m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 21m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 14.86% | 14.86% | 14.86% | — | — | 5 | 3d 14h | 18d ago | 7m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 59.77% | 59.77% | 59.77% | — | — | 7 | 1d 16h | 11d ago | 8m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 16h | 18d ago | 7m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 49.41% | 49.41% | 49.41% | — | — | 5 | 3d 4h | 16d ago | 8m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 20.02% | 20.02% | 20.02% | — | — | 5 | 3d 2h | 15d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 62.90% | 62.90% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 51.01% | 87.59% | 87.59% | — | — | 2 | 7d 18h | 16d ago | 20m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 21m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 55.54% | 55.54% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 22m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 50.49% | 50.49% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 7m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 69.92% | 69.92% | — | — | 3 | 9d 24h | 14d ago | 16m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 21h | 5d ago | 20m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 19h | 5d ago | 11m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 49.61% | 49.61% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 76.01% | 60.54% | 60.54% | — | — | 12 | 16h 59m | 8d ago | 9m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 17h | 18d ago | 7m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 19h | 5d ago | 11m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 77.42% | 94.26% | 94.26% | — | — | 58 | 2h 59m | 7d ago | 16m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.38% | 4.38% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 51.60% | 51.60% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 19m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.82% | 33.82% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.80% | 28.80% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 19m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.86% | 20.86% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 59.14% | 59.14% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 65.90% | 65.90% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 70.27% | 92.49% | 92.49% | — | — | 1 | 10d 3h | 10d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 22h | 7d ago | 7m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 19m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 21m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 63.80% | 89.62% | 89.62% | — | — | 22 | 12h 49m | 12d ago | 20m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.70% | 23.70% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 27.39% | 81.58% | 81.58% | — | — | 3 | 7d 10h | 9d ago | 20m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 20.01% | 10.80% | 10.80% | — | — | 2 | 12d 4h | 21d ago | 8m ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 25.64% | 80.81% | 80.81% | — | — | 13 | 1d 18h | 23d ago | 20m ago |
| [速创API](https://lmspeed.net/provider/succhuang-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 23.64% | 23.64% | 23.64% | — | — | 3 | 6d 17h | 20d ago | 8m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 20h | 5d ago | 20m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.46% | 21.46% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 11.04% | 59.67% | 59.67% | — | — | 2 | 13d 10h | 27d ago | 19m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 49.48% | 49.48% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 70.84% | 92.69% | 92.69% | — | — | 2 | 4d 23h | 10d ago | 20m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |

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
