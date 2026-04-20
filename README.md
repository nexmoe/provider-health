# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**516 providers** — 198 🟢 operational · 145 🟡 degraded · 173 🔴 down · 0 ⚫ unknown

_Updated 2026-04-20 05:46 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (198)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ai.api.xn--fiqs8s](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.88% | 99.93% | 90.63% | 90.63% | 1394 ms | ↑ 2.41x | 2 | 0s | 17d ago | 46m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.88% | 99.81% | 99.94% | 99.94% | 1870 ms | ↑ 1.73x | 7 | 0s | 11d ago | 45m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.88% | 99.95% | 99.99% | 99.99% | 746 ms | → 1.02x | 1 | 0s | 17d ago | 46m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.88% | 99.82% | 99.91% | 99.91% | 2267 ms | ↑ 1.14x | 1 | 0s | 9d ago | 46m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.88% | 99.13% | 57.95% | 57.95% | 967 ms | ↓ 0.83x | 31 | 1m | 10d ago | 45m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.88% | 99.86% | 99.96% | 99.96% | 806 ms | → 1.03x | 5 | 0s | 11d ago | 45m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.88% | 99.90% | 99.81% | 99.81% | 1050 ms | ↑ 1.11x | 3 | 0s | 7d ago | 45m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.88% | 99.98% | 99.98% | 99.98% | 721 ms | → 1.02x | 0 | — | — | 44m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.88% | 98.89% | 99.51% | 99.51% | 1233 ms | ↑ 1.12x | 19 | 14m | 7d ago | 44m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.88% | 99.73% | 99.62% | 99.62% | 1610 ms | ↑ 1.08x | 10 | 0s | 11d ago | 44m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.88% | 99.95% | 99.70% | 99.70% | 1801 ms | ↑ 1.29x | 1 | 0s | 26d ago | 44m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.88% | 99.95% | 99.93% | 99.93% | 750 ms | ↑ 1.20x | 1 | 0s | 13d ago | 44m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.88% | 99.90% | 99.90% | 99.90% | 1333 ms | ↑ 1.20x | 3 | 0s | 9d ago | 44m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.88% | 99.90% | 90.12% | 90.12% | 841 ms | ↑ 1.84x | 3 | 0s | 11d ago | 44m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.88% | 99.88% | 99.70% | 99.70% | 1599 ms | ↑ 1.21x | 3 | 3m | 11d ago | 44m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.88% | 99.88% | 99.91% | 99.91% | 1583 ms | ↑ 1.10x | 4 | 0s | 13d ago | 44m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.88% | 99.13% | 99.76% | 99.76% | 1549 ms | ↓ 0.89x | 35 | 0s | 10d ago | 44m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.88% | 99.95% | 99.97% | 99.97% | 1437 ms | ↑ 1.24x | 1 | 0s | 26d ago | 44m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.88% | 99.95% | 99.99% | 99.99% | 1149 ms | ↑ 1.49x | 1 | 0s | 10d ago | 43m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.88% | 99.98% | 99.34% | 99.34% | 736 ms | ↑ 1.12x | 0 | — | — | 43m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.88% | 99.69% | 99.85% | 99.85% | 786 ms | ↑ 1.22x | 6 | 10m | 12d ago | 42m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.88% | 99.66% | 99.83% | 99.83% | 1346 ms | ↑ 1.11x | 9 | 4m | 9d ago | 42m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.88% | 97.44% | 99.32% | 99.32% | 1835 ms | ↑ 1.36x | 79 | 3m | 10d ago | 41m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.88% | 99.98% | 99.98% | 99.98% | 2204 ms | ↑ 1.40x | 0 | — | — | 41m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.88% | 99.98% | 99.94% | 99.94% | 2541 ms | ↑ 1.39x | 0 | — | — | 41m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.88% | 99.71% | 98.80% | 98.80% | 984 ms | ↑ 1.35x | 4 | 18m | 18d ago | 35m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.88% | 93.30% | 93.36% | 93.36% | 1674 ms | ↑ 1.19x | 1 | 18h 20m | 13d ago | 31m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.88% | 97.70% | 97.79% | 97.79% | 1755 ms | → 1.04x | 3 | 1h 20m | 9d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.88% | 99.89% | 100.00% | 100.00% | 605 ms | → 0.99x | 0 | — | — | 31m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.88% | 99.94% | 100.00% | 100.00% | 1058 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.88% | 90.94% | 91.06% | 91.06% | 239 ms | → 1.01x | 1 | 13h 50m | 8d ago | 31m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.88% | 99.90% | 100.00% | 100.00% | 1061 ms | → 1.04x | 0 | — | — | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.88% | 93.80% | 93.91% | 93.91% | 1635 ms | → 1.00x | 1 | 9h 60m | 8d ago | 31m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.88% | 90.93% | 90.99% | 90.99% | 1776 ms | ↑ 1.08x | 1 | 1d 1h | 13d ago | 31m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.79% | 99.79% | 100.00% | 100.00% | 906 ms | → 1.00x | 0 | — | — | 44m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.76% | 99.93% | 99.99% | 99.99% | 488 ms | ↓ 0.71x | 2 | 0s | 6d ago | 46m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.76% | 27.06% | 6.96% | 6.96% | 1706 ms | → 1.01x | 2 | 10d 12h | 2d ago | 46m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.76% | 99.30% | 99.54% | 99.54% | 1120 ms | → 1.04x | 24 | 2m | 5d ago | 44m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.76% | 99.95% | 99.90% | 99.90% | 1134 ms | ↑ 1.13x | 2 | 0s | 8m ago | 44m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.76% | 99.08% | 99.49% | 99.49% | 945 ms | → 1.05x | 27 | 4m | 5d ago | 45m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.76% | 98.14% | 99.38% | 99.38% | 970 ms | → 1.01x | 60 | 3m | 6d ago | 45m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.76% | 99.80% | 99.80% | 1576 ms | ↑ 1.07x | 8 | 1m | 5d ago | 44m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.76% | 99.93% | 99.94% | 99.94% | 1607 ms | ↑ 1.28x | 2 | 0s | 6d ago | 44m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.76% | 99.86% | 99.93% | 99.93% | 513 ms | ↑ 1.65x | 5 | 0s | 6d ago | 43m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.76% | 99.93% | 96.85% | 96.85% | 2246 ms | ↑ 1.14x | 2 | 0s | 2d ago | 43m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.76% | 99.88% | 98.89% | 98.89% | 2107 ms | ↑ 1.52x | 4 | 0s | 2d ago | 43m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.76% | 99.83% | 99.91% | 99.91% | 1189 ms | ↓ 0.95x | 6 | 0s | 4d ago | 42m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.76% | 99.93% | 99.91% | 99.91% | 1310 ms | → 1.03x | 2 | 0s | 4d ago | 42m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.83% | 98.63% | 98.63% | 2008 ms | ↑ 1.53x | 5 | 2m | 3d ago | 42m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.76% | 95.75% | 96.89% | 96.89% | 2416 ms | ↑ 1.20x | 7 | 3h 60m | 4d ago | 42m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.76% | 99.88% | 50.47% | 50.47% | 2574 ms | ↑ 1.22x | 4 | 0s | 5d ago | 42m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.76% | 99.93% | 32.03% | 32.03% | 2278 ms | → 0.96x | 2 | 0s | 4d ago | 41m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.76% | 53.66% | 13.76% | 13.76% | 1357 ms | → 1.00x | 3 | 4d 10h | 2d ago | 40m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.76% | 97.51% | 96.49% | 96.49% | 1990 ms | ↓ 0.93x | 91 | 1m | 2d ago | 40m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.21% | 99.52% | 99.52% | 908 ms | ↓ 0.85x | 61 | 2m | 2d ago | 39m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.81% | 99.85% | 99.85% | 2214 ms | ↑ 1.29x | 7 | 0s | 2d ago | 35m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.03% | 99.09% | 99.09% | 1814 ms | → 1.03x | 37 | 32s | 2d ago | 39m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.76% | 99.93% | 98.59% | 98.59% | 646 ms | ↑ 1.59x | 2 | 0s | 2d ago | 34m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.76% | 90.84% | 90.84% | 945 ms | ↑ 1.18x | 9 | 0s | 2d ago | 34m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.76% | 47.97% | 47.97% | 2240 ms | ↑ 1.20x | 9 | 0s | 2d ago | 34m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.76% | 99.93% | 45.78% | 45.78% | 1062 ms | ↑ 2.15x | 2 | 0s | 2d ago | 34m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.76% | 99.90% | 99.80% | 99.80% | 733 ms | ↑ 1.17x | 3 | 0s | 5d ago | 35m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.76% | 99.64% | 54.61% | 54.61% | 1114 ms | ↓ 0.89x | 12 | 2m | 4d ago | 34m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.93% | 56.61% | 56.61% | 1707 ms | ↑ 1.85x | 2 | 0s | 2d ago | 34m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.76% | 99.76% | 99.01% | 99.01% | 1519 ms | ↑ 1.11x | 9 | 0s | 2d ago | 33m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.76% | 99.85% | 61.72% | 61.72% | 1550 ms | → 1.01x | 5 | 0s | 2d ago | 34m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.88% | 98.64% | 98.64% | 1308 ms | ↑ 1.57x | 4 | 0s | 2d ago | 33m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.76% | 99.27% | 75.57% | 75.57% | 1766 ms | ↑ 1.45x | 19 | 5m | 2d ago | 33m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.76% | 99.88% | 66.34% | 66.34% | 1725 ms | ↑ 1.32x | 4 | 0s | 2d ago | 33m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.76% | 99.37% | 84.19% | 84.19% | 1510 ms | ↑ 1.83x | 25 | 0s | 2d ago | 33m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.76% | 99.85% | 85.40% | 85.40% | 2631 ms | ↑ 1.91x | 5 | 0s | 2d ago | 33m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.76% | 99.95% | 90.26% | 90.26% | 2609 ms | ↑ 2.28x | 1 | 0s | 2d ago | 33m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.76% | 99.88% | 97.65% | 97.65% | 1572 ms | ↑ 1.32x | 4 | 0s | 2d ago | 33m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.76% | 99.95% | 80.02% | 80.02% | 1277 ms | ↑ 1.54x | 1 | 0s | 2d ago | 33m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.76% | 99.93% | 99.97% | 99.97% | 2865 ms | ↑ 1.54x | 2 | 0s | 2d ago | 33m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.76% | 99.61% | 98.24% | 98.24% | 2003 ms | ↑ 1.13x | 14 | 0s | 2d ago | 33m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.76% | 99.78% | 82.90% | 82.90% | 1720 ms | ↑ 1.23x | 5 | 6m | 2d ago | 33m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.76% | 99.56% | 98.01% | 98.01% | 1831 ms | ↑ 1.08x | 11 | 5m | 2d ago | 33m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.76% | 99.90% | 94.39% | 94.39% | 1519 ms | ↑ 1.62x | 3 | 0s | 2d ago | 33m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.76% | 99.30% | 98.06% | 98.06% | 1657 ms | ↑ 1.39x | 26 | 47s | 2d ago | 33m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.76% | 99.44% | 98.11% | 98.11% | 1646 ms | ↑ 1.37x | 14 | 6m | 2d ago | 33m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.76% | 99.06% | 80.95% | 80.95% | 1292 ms | ↑ 1.70x | 30 | 3m | 2d ago | 33m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.78% | 97.94% | 97.94% | 1700 ms | ↑ 2.31x | 7 | 1m | 2d ago | 33m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.76% | 98.99% | 99.02% | 99.02% | 1824 ms | ↑ 1.37x | 24 | 7m | 2d ago | 32m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.76% | 99.78% | 99.81% | 99.81% | 1242 ms | ↑ 1.10x | 6 | 0s | 2d ago | 32m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.76% | 99.90% | 99.94% | 99.94% | 1986 ms | ↑ 1.95x | 2 | 0s | 2d ago | 32m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.76% | 98.06% | 96.79% | 96.79% | 1270 ms | → 1.01x | 13 | 51m | 2d ago | 32m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.76% | 99.78% | 99.81% | 99.81% | 1629 ms | ↑ 1.77x | 6 | 0s | 2d ago | 32m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.76% | 89.73% | 89.77% | 89.77% | 3026 ms | ↑ 1.13x | 6 | 8h 38m | 2d ago | 32m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.76% | 98.93% | 98.96% | 98.96% | 2717 ms | ↑ 1.47x | 26 | 2m | 2d ago | 32m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.73% | 99.74% | 99.74% | 2119 ms | ↑ 1.31x | 9 | 1m | 2d ago | 32m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.76% | 84.25% | 84.28% | 84.28% | 1018 ms | ↑ 1.09x | 2 | 2d 2h | 2d ago | 32m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.76% | 99.85% | 99.93% | 99.93% | 1386 ms | ↑ 1.07x | 1 | 0s | 6d ago | 31m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.76% | 94.41% | 94.47% | 94.47% | 1261 ms | ↑ 1.22x | 3 | 5h 3m | 5d ago | 31m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.76% | 99.63% | 99.70% | 99.70% | 1461 ms | ↑ 1.10x | 4 | 0s | 4d ago | 31m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.76% | 99.85% | 99.93% | 99.93% | 1163 ms | ↑ 1.19x | 1 | 0s | 6d ago | 31m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.76% | 99.36% | 99.47% | 99.47% | 235 ms | ↓ 0.35x | 4 | 3m | 5d ago | 31m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.76% | 99.82% | 99.91% | 99.91% | 1643 ms | ↑ 1.11x | 1 | 0s | 4d ago | 31m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.76% | 89.60% | 89.69% | 89.69% | 1860 ms | → 0.99x | 4 | 5h 15m | 4d ago | 31m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.65% | 99.76% | 99.74% | 99.74% | 881 ms | ↓ 0.88x | 9 | 0s | 16h ago | 45m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.65% | 99.33% | 99.68% | 99.68% | 753 ms | ↓ 0.73x | 17 | 6m | 7d ago | 45m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.65% | 99.86% | 99.64% | 99.64% | 1347 ms | ↑ 1.29x | 4 | 2m | 3d ago | 44m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.65% | 99.76% | 99.71% | 99.71% | 2631 ms | ↑ 1.13x | 9 | 0s | 6d ago | 44m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.65% | 99.40% | 99.43% | 99.43% | 1815 ms | → 0.97x | 24 | 0s | 1d ago | 44m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.65% | 99.61% | 99.65% | 99.65% | 1510 ms | → 1.00x | 10 | 0s | 4d ago | 44m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.64% | 99.83% | 99.89% | 99.89% | 1117 ms | ↑ 1.20x | 6 | 0s | 3d ago | 44m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.64% | 99.93% | 99.91% | 99.91% | 1745 ms | ↑ 1.53x | 2 | 0s | 2d ago | 43m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.64% | 99.90% | 99.96% | 99.96% | 1618 ms | ↑ 1.13x | 3 | 0s | 2d ago | 43m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.64% | 99.25% | 34.16% | 34.16% | 2160 ms | ↑ 1.07x | 18 | 7m | 2d ago | 42m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.64% | 99.73% | 99.42% | 99.42% | 1868 ms | ↑ 1.42x | 10 | 0s | 4d ago | 41m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.64% | 99.93% | 99.72% | 99.72% | 1796 ms | ↑ 1.13x | 2 | 0s | 2d ago | 39m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.64% | 99.86% | 99.83% | 99.83% | 1821 ms | ↑ 1.10x | 5 | 0s | 2d ago | 40m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.64% | 99.83% | 99.86% | 99.86% | 1397 ms | ↑ 1.31x | 6 | 0s | 3d ago | 40m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.64% | 99.81% | 41.11% | 41.11% | 1442 ms | ↑ 1.12x | 7 | 0s | 3d ago | 35m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.64% | 99.32% | 52.17% | 52.17% | 1575 ms | ↑ 1.15x | 19 | 4m | 2d ago | 34m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.64% | 99.93% | 49.16% | 49.16% | 1614 ms | ↑ 1.77x | 2 | 0s | 2d ago | 34m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.64% | 98.84% | 95.62% | 95.62% | 1108 ms | → 0.96x | 39 | 2m | 2d ago | 34m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.64% | 99.88% | 58.47% | 58.47% | 700 ms | ↑ 1.22x | 4 | 0s | 2d ago | 34m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.64% | 99.52% | 71.20% | 71.20% | 851 ms | ↑ 1.41x | 12 | 6m | 2d ago | 33m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.64% | 99.49% | 85.11% | 85.11% | 3006 ms | ↑ 1.25x | 9 | 12m | 2d ago | 33m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.64% | 98.64% | 98.89% | 98.89% | 2926 ms | ↑ 1.38x | 31 | 7m | 2d ago | 33m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.64% | 97.02% | 96.13% | 96.13% | 1584 ms | ↑ 1.49x | 30 | 31m | 2d ago | 33m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.64% | 99.88% | 99.84% | 99.84% | 1837 ms | ↑ 1.21x | 4 | 0s | 2d ago | 33m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.64% | 99.73% | 97.21% | 97.21% | 1397 ms | ↑ 1.67x | 10 | 0s | 2d ago | 33m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.64% | 96.43% | 96.48% | 96.48% | 2227 ms | ↑ 1.20x | 5 | 2h 32m | 2d ago | 31m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.64% | 96.77% | 96.80% | 96.80% | 1864 ms | ↑ 1.45x | 4 | 3h 45m | 2d ago | 32m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.64% | 95.60% | 95.64% | 95.64% | 1794 ms | ↑ 1.52x | 31 | 28m | 2d ago | 32m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.64% | 96.94% | 96.98% | 96.98% | 2076 ms | ↑ 1.29x | 6 | 2h 13m | 2d ago | 32m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.64% | 96.02% | 96.07% | 96.07% | 1335 ms | ↑ 1.22x | 3 | 4h 10m | 3d ago | 31m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.64% | 96.65% | 96.72% | 96.72% | 1340 ms | → 1.03x | 4 | 1h 48m | 4d ago | 31m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.64% | 93.64% | 93.70% | 93.70% | 1487 ms | ↑ 1.13x | 13 | 1h 4m | 3d ago | 31m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.64% | 95.59% | 95.64% | 95.64% | 1168 ms | ↑ 1.19x | 2 | 6h 15m | 2d ago | 31m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.53% | 98.89% | 99.56% | 99.56% | 2067 ms | ↑ 1.21x | 42 | 43s | 2d ago | 43m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.53% | 99.01% | 98.82% | 98.82% | 2811 ms | ↑ 1.15x | 39 | 16s | 2d ago | 43m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.52% | 98.55% | 98.29% | 98.29% | 2544 ms | ↑ 1.17x | 57 | 21s | 3d ago | 42m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.52% | 99.49% | 99.79% | 99.79% | 1216 ms | ↑ 1.10x | 20 | 0s | 4d ago | 42m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.52% | 95.85% | 98.53% | 98.53% | 1986 ms | ↓ 0.80x | 153 | 1m | 4d ago | 42m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.52% | 92.99% | 97.44% | 97.44% | 2669 ms | ↑ 1.19x | 18 | 2h 31m | 2d ago | 39m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.52% | 99.83% | 99.83% | 99.83% | 2579 ms | ↑ 1.43x | 6 | 0s | 2d ago | 39m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.52% | 99.86% | 99.94% | 99.94% | 1933 ms | ↑ 2.29x | 4 | 42s | 2d ago | 40m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 99.52% | 98.86% | 98.82% | 98.82% | 1948 ms | → 1.05x | 43 | 42s | 2d ago | 39m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.52% | 99.76% | 49.70% | 49.70% | 1769 ms | → 0.97x | 9 | 0s | 2d ago | 34m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.52% | 99.52% | 74.01% | 74.01% | 1560 ms | ↑ 1.92x | 17 | 1m | 2d ago | 33m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.52% | 95.69% | 95.72% | 95.72% | 1138 ms | ↑ 1.53x | 49 | 24m | 2d ago | 32m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.52% | 99.23% | 99.26% | 99.26% | 1344 ms | ↑ 1.09x | 8 | 16m | 2d ago | 32m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.52% | 99.87% | 99.89% | 99.89% | 883 ms | ↑ 1.06x | 4 | 0s | 2d ago | 32m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.52% | 97.90% | 97.94% | 97.94% | 1467 ms | ↓ 0.71x | 40 | 5m | 2d ago | 32m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.52% | 99.68% | 99.71% | 99.71% | 2314 ms | ↑ 2.10x | 8 | 1m | 2d ago | 32m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.52% | 99.80% | 99.84% | 99.84% | 1776 ms | ↑ 1.23x | 4 | 0s | 2d ago | 31m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.52% | 95.34% | 95.40% | 95.40% | 1650 ms | ↑ 1.08x | 5 | 2h 40m | 3d ago | 31m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.41% | 99.81% | 99.72% | 99.72% | 2838 ms | ↑ 1.35x | 7 | 0s | 2d ago | 44m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.40% | 99.59% | 99.55% | 99.55% | 2744 ms | → 0.98x | 16 | 0s | 2d ago | 40m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.40% | 98.48% | 95.11% | 95.11% | 616 ms | ↓ 0.72x | 55 | 54s | 2d ago | 34m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.40% | 99.49% | 98.39% | 98.39% | 636 ms | ↑ 1.07x | 16 | 2m | 3d ago | 34m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.40% | 99.03% | 99.43% | 99.43% | 1405 ms | ↑ 1.64x | 18 | 12m | 2d ago | 33m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.40% | 99.85% | 99.83% | 99.83% | 1869 ms | ↑ 1.12x | 4 | 2m | 1d ago | 34m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.40% | 99.83% | 90.49% | 90.49% | 3095 ms | ↑ 1.23x | 6 | 0s | 2d ago | 33m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.40% | 98.72% | 98.00% | 98.00% | 1562 ms | ↑ 1.31x | 17 | 21m | 2d ago | 33m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.40% | 99.61% | 72.10% | 72.10% | 1617 ms | ↑ 1.93x | 14 | 40s | 23h ago | 33m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.40% | 93.39% | 94.99% | 94.99% | 1778 ms | ↑ 1.30x | 10 | 4h 21m | 2d ago | 33m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.40% | 99.54% | 98.30% | 98.30% | 1434 ms | ↑ 1.13x | 18 | 0s | 2d ago | 33m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.40% | 65.47% | 56.03% | 56.03% | 1827 ms | ↑ 1.32x | 9 | 1d 2h | 2d ago | 33m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.40% | 96.78% | 96.81% | 96.81% | 1524 ms | ↑ 2.36x | 10 | 1h 38m | 2d ago | 32m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.40% | 29.29% | 25.67% | 25.67% | 2553 ms | → 1.00x | 5 | 4d 1h | 1d ago | 32m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.40% | 71.09% | 71.19% | 71.19% | 1389 ms | → 1.03x | 4 | 15h 20m | 2d ago | 31m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.40% | 94.70% | 94.75% | 94.75% | 1729 ms | → 1.05x | 9 | 1h 47m | 2d ago | 31m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.29% | 96.60% | 97.53% | 97.53% | 2896 ms | ↑ 1.31x | 133 | 27s | 2d ago | 44m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.29% | 99.73% | 98.93% | 98.93% | 1340 ms | ↑ 1.52x | 7 | 4m | 22h ago | 44m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.29% | 99.61% | 97.79% | 97.79% | 1978 ms | ↑ 1.10x | 14 | 43s | 2d ago | 43m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.28% | 98.60% | 34.00% | 34.00% | 713 ms | → 0.99x | 47 | 2m | 4d ago | 35m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.28% | 99.73% | 73.71% | 73.71% | 2768 ms | ↑ 1.23x | 8 | 1m | 2d ago | 33m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.28% | 22.89% | 13.34% | 13.34% | 2088 ms | → 1.05x | 10 | 2d 5h | 2d ago | 33m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.28% | 99.71% | 99.70% | 99.70% | 1333 ms | ↑ 1.26x | 9 | 2m | 1d ago | 33m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.28% | 96.24% | 96.28% | 96.28% | 1591 ms | ↑ 1.08x | 24 | 31m | 2d ago | 31m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.28% | 99.83% | 99.84% | 99.84% | 2188 ms | ↑ 3.11x | 5 | 2m | 2d ago | 32m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.28% | 58.18% | 53.29% | 53.29% | 2154 ms | ↑ 1.86x | 5 | 2d 9h | 2d ago | 32m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.28% | 99.62% | 99.66% | 99.66% | 1523 ms | ↑ 1.14x | 8 | 4m | 2d ago | 32m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.28% | 99.59% | 99.64% | 99.64% | 1315 ms | ↑ 1.22x | 7 | 0s | 3d ago | 31m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.28% | 90.54% | 90.59% | 90.59% | 1910 ms | → 0.96x | 76 | 15m | 3d ago | 31m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.17% | 99.59% | 98.86% | 98.86% | 2510 ms | ↑ 1.12x | 15 | 40s | 2d ago | 44m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.17% | 99.78% | 99.62% | 99.62% | 2448 ms | ↑ 1.62x | 8 | 0s | 2d ago | 43m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.16% | 36.36% | 44.75% | 44.75% | 1182 ms | ↑ 1.14x | 9 | 2d 1h | 2d ago | 41m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.16% | 98.79% | 99.18% | 99.18% | 2545 ms | → 1.02x | 21 | 13m | 2d ago | 39m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.16% | 97.65% | 97.45% | 97.45% | 585 ms | → 1.02x | 17 | 46m | 2d ago | 35m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.16% | 99.56% | 98.93% | 98.93% | 1608 ms | → 1.03x | 16 | 38s | 23h ago | 34m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.16% | 93.60% | 93.85% | 93.85% | 2305 ms | ↑ 1.76x | 23 | 1h 44m | 2d ago | 32m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.16% | 96.08% | 96.12% | 96.12% | 2282 ms | ↑ 1.10x | 18 | 42m | 1d ago | 31m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.16% | 95.65% | 95.69% | 95.69% | 2044 ms | → 0.98x | 48 | 18m | 2d ago | 32m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.16% | 99.61% | 97.39% | 97.39% | 2413 ms | ↑ 2.08x | 14 | 43s | 2d ago | 32m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.16% | 98.52% | 98.60% | 98.60% | 2295 ms | ↑ 2.09x | 34 | 8m | 2d ago | 32m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.16% | 99.49% | 99.54% | 99.54% | 921 ms | → 0.99x | 6 | 10m | 1d ago | 31m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.14% | 99.14% | 99.36% | 99.36% | 2767 ms | → 1.00x | 3 | 0s | 2d ago | 39m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.06% | 95.95% | 96.56% | 96.56% | 3561 ms | → 1.03x | 151 | 1m | 3d ago | 45m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.05% | 99.57% | 99.75% | 99.75% | 2805 ms | ↑ 1.33x | 14 | 2m | 2d ago | 43m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.05% | 97.95% | 99.11% | 99.11% | 2531 ms | ↑ 1.63x | 65 | 3m | 1d ago | 42m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.04% | 95.08% | 94.65% | 94.65% | 2432 ms | ↑ 1.18x | 121 | 7m | 1d ago | 33m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.04% | 99.15% | 99.26% | 99.26% | 546 ms | → 1.01x | 7 | 0s | 3d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.03% | 99.03% | 99.51% | 99.51% | 2748 ms | → 1.00x | 1 | 0s | 2d ago | 30m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (145)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.98% | 98.98% | 99.11% | 99.11% | 741 ms | → 1.00x | 2 | 25m | 2d ago | 31m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.94% | 98.12% | 99.49% | 99.49% | 2930 ms | ↑ 1.96x | 65 | 2m | 2d ago | 45m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.93% | 99.32% | 99.10% | 99.10% | 2304 ms | ↑ 1.80x | 26 | 23s | 2d ago | 43m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.93% | 99.54% | 86.71% | 86.71% | 2335 ms | ↑ 1.74x | 16 | 1m | 2d ago | 43m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.92% | 98.55% | 97.58% | 97.58% | 1638 ms | ↑ 1.51x | 27 | 12m | 2d ago | 35m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.92% | 97.67% | 97.70% | 97.70% | 882 ms | ↑ 1.77x | 8 | 1h 39m | 1d ago | 32m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.82% | 99.20% | 99.26% | 99.26% | 2217 ms | → 1.03x | 31 | 19s | 2d ago | 44m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.81% | 96.69% | 98.75% | 98.75% | 2222 ms | ↑ 1.82x | 75 | 8m | 2d ago | 35m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.80% | 99.08% | 88.39% | 88.39% | 3405 ms | ↑ 1.09x | 37 | 0s | 2d ago | 33m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.69% | 99.64% | 99.70% | 99.70% | 1264 ms | ↑ 1.13x | 7 | 10m | 4d ago | 42m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.69% | 99.59% | 99.79% | 99.79% | 2713 ms | ↑ 1.25x | 15 | 11s | 2d ago | 40m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 98.69% | 97.10% | 99.21% | 99.21% | 1547 ms | ↑ 1.13x | 82 | 5m | 3d ago | 35m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.58% | 99.59% | 90.42% | 90.42% | 2977 ms | ↑ 3.43x | 15 | 40s | 2d ago | 46m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.58% | 99.61% | 99.90% | 99.90% | 3115 ms | ↑ 1.67x | 12 | 2m | 2d ago | 43m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.57% | 99.52% | 99.70% | 99.70% | 2856 ms | → 0.97x | 16 | 2m | 23h ago | 41m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 98.47% | 98.47% | 98.98% | 98.98% | 3524 ms | → 1.00x | 2 | 0s | 1d ago | 30m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.47% | 99.33% | 99.72% | 99.72% | 3106 ms | ↑ 1.05x | 27 | 0s | 24h ago | 45m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.46% | 96.26% | 96.10% | 96.10% | 2432 ms | ↑ 1.32x | 60 | 16m | 22h ago | 44m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.46% | 95.20% | 90.40% | 90.40% | 2122 ms | ↑ 1.07x | 129 | 5m | 1d ago | 43m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.44% | 98.48% | 56.95% | 56.95% | 778 ms | ↑ 1.36x | 43 | 4m | 2d ago | 34m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.35% | 99.11% | 98.43% | 98.43% | 3847 ms | ↑ 1.17x | 36 | 0s | 2d ago | 46m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.20% | 93.36% | 70.94% | 70.94% | 2418 ms | ↑ 1.52x | 80 | 24m | 1d ago | 33m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.20% | 98.47% | 87.26% | 87.26% | 2462 ms | ↑ 1.14x | 47 | 3m | 1d ago | 33m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.99% | 98.91% | 98.77% | 98.77% | 3769 ms | ↑ 1.08x | 29 | 7m | 2d ago | 43m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 97.97% | 95.67% | 96.04% | 96.04% | 2040 ms | ↑ 1.10x | 90 | 10m | 2d ago | 35m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 97.96% | 99.20% | 71.69% | 71.69% | 3025 ms | ↑ 1.27x | 18 | 15m | 19h ago | 33m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 97.95% | 90.02% | 90.07% | 90.07% | 998 ms | ↓ 0.69x | 54 | 25m | 1d ago | 31m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 97.73% | 97.54% | 81.02% | 81.02% | 3481 ms | → 0.97x | 97 | 24s | 2d ago | 40m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 97.71% | 96.19% | 96.24% | 96.24% | 1390 ms | ↓ 0.46x | 60 | 3m | 2d ago | 31m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 97.66% | 97.66% | 97.88% | 97.88% | 3418 ms | → 1.00x | 9 | 1m | 2d ago | 43m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.59% | 84.70% | 84.77% | 84.77% | 1836 ms | → 1.00x | 16 | 2h 28m | 1d ago | 31m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 97.47% | 19.63% | 16.50% | 16.50% | 1375 ms | → 1.00x | 3 | 7d 17h | 2d ago | 33m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 97.47% | 95.47% | 95.51% | 95.51% | 3494 ms | ↑ 1.44x | 80 | 7m | 1d ago | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 97.35% | 99.44% | 97.35% | 97.35% | 2640 ms | ↑ 2.61x | 21 | 29s | 2d ago | 32m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 97.11% | 90.92% | 90.96% | 90.96% | 3392 ms | ↑ 1.47x | 71 | 29m | 2d ago | 32m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 97.05% | 99.18% | 99.67% | 99.67% | 677 ms | ↑ 1.08x | 12 | 18m | 1d ago | 45m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 96.99% | 98.09% | 96.04% | 96.04% | 1782 ms | ↑ 1.05x | 68 | 1m | 24h ago | 33m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 96.93% | 98.19% | 99.18% | 99.18% | 3483 ms | ↑ 1.45x | 36 | 10m | 2d ago | 45m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 96.88% | 96.88% | 97.10% | 97.10% | 3382 ms | → 1.00x | 14 | 0s | 2d ago | 45m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 96.87% | 98.13% | 98.19% | 98.19% | 2295 ms | ↑ 2.21x | 49 | 5m | 2d ago | 32m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 96.87% | 96.87% | 97.08% | 97.08% | 1934 ms | → 1.00x | 3 | 37m | 2d ago | 30m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 96.65% | 96.35% | 97.09% | 97.09% | 1546 ms | ↑ 1.67x | 7 | 3h 28m | 15m ago | 35m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 96.27% | 92.61% | 92.63% | 92.63% | 1537 ms | ↓ 0.75x | 133 | 11m | 2d ago | 32m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.18% | 99.20% | 99.59% | 99.59% | 2740 ms | ↑ 1.48x | 4 | 1h 8m | 2d ago | 39m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 96.10% | 97.42% | 97.73% | 97.73% | 4248 ms | ↑ 1.44x | 98 | 55s | 1d ago | 45m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 96.03% | 68.54% | 68.60% | 68.60% | 2179 ms | → 1.03x | 50 | 2h 10m | 2d ago | 31m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 95.94% | 98.91% | 98.91% | 98.91% | 1156 ms | ↓ 0.66x | 15 | 19m | 8h ago | 40m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 95.70% | 52.45% | 13.46% | 13.46% | 3091 ms | ↑ 1.31x | 43 | 7h 28m | 1h ago | 41m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 95.55% | 97.00% | 97.04% | 97.04% | 4177 ms | ↑ 1.73x | 63 | 5m | 17h ago | 32m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 95.31% | 86.37% | 86.41% | 86.41% | 2292 ms | ↑ 1.15x | 108 | 25m | 2d ago | 32m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 95.06% | 87.37% | 87.49% | 87.49% | 689 ms | → 1.02x | 2 | 10h 19m | 5d ago | 31m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.04% | 94.94% | 90.94% | 90.94% | 1736 ms | → 1.00x | 123 | 7m | 3d ago | 44m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 94.84% | 97.51% | 96.98% | 96.98% | 974 ms | → 1.00x | 23 | 34m | 2d ago | 33m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.46% | 92.32% | 92.36% | 92.36% | 2204 ms | ↑ 1.47x | 75 | 25m | 9h ago | 32m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 94.10% | 95.66% | 98.76% | 98.76% | 2149 ms | ↓ 0.91x | 137 | 3m | 2d ago | 45m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 94.03% | 98.36% | 43.22% | 43.22% | 1186 ms | ↑ 1.11x | 54 | 2m | 23h ago | 35m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 93.98% | 90.46% | 90.54% | 90.54% | 4114 ms | ↓ 0.94x | 26 | 42m | 3d ago | 31m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 92.68% | 98.47% | 97.35% | 97.35% | 2008 ms | ↑ 1.25x | 3 | 3h 47m | 2d ago | 33m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 86.87% | 85.83% | 85.95% | 85.95% | 923 ms | → 1.00x | 7 | 4h 36m | 2d ago | 31m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 84.38% | 84.38% | 84.50% | 84.50% | 999 ms | → 1.00x | 3 | 11h 20m | 3d ago | 31m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 84.03% | 91.16% | 62.87% | 62.87% | 2404 ms | ↑ 1.29x | 46 | 1h 9m | 1d ago | 33m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 82.64% | 82.64% | 82.81% | 82.81% | 2540 ms | → 1.00x | 4 | 4h 9m | 3d ago | 30m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 81.86% | 95.63% | 95.95% | 95.95% | 2904 ms | ↑ 1.49x | 47 | 29m | 2d ago | 40m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 79.07% | 79.07% | 79.30% | 79.30% | 2145 ms | → 1.00x | 3 | 5h 3m | 2d ago | 30m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 78.72% | 78.72% | 79.01% | 79.01% | 1588 ms | → 1.00x | 1 | 12h 20m | 3d ago | 30m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 78.52% | 93.04% | 97.77% | 97.77% | 972 ms | ↓ 0.86x | 80 | 26m | 3d ago | 40m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 78.16% | 90.63% | 75.13% | 75.13% | 2268 ms | ↑ 1.15x | 187 | 12m | 2d ago | 40m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 78.03% | 78.03% | 78.32% | 78.32% | 476 ms | → 1.00x | 1 | 12h 47m | 3d ago | 30m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 77.54% | 88.43% | 91.93% | 91.93% | 4804 ms | → 0.99x | 200 | 14m | 22h ago | 44m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 77.45% | 77.34% | 69.24% | 69.24% | 4434 ms | ↑ 1.07x | 662 | 4m | 16h ago | 40m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 77.45% | 63.13% | 62.07% | 62.07% | 4669 ms | → 0.98x | 883 | 7m | 1d ago | 40m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 77.01% | 77.01% | 77.31% | 77.31% | 2057 ms | → 1.00x | 1 | 12h 50m | 3d ago | 30m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 76.90% | 77.20% | 77.05% | 77.05% | 4744 ms | ↑ 1.08x | 637 | 5m | 12h ago | 33m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 76.22% | 77.50% | 83.43% | 83.43% | 4491 ms | → 1.05x | 646 | 4m | 20h ago | 34m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 75.98% | 77.79% | 82.98% | 82.98% | 4396 ms | → 1.04x | 656 | 4m | 13h ago | 42m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 75.54% | 44.03% | 44.14% | 44.14% | 1292 ms | → 1.00x | 2 | 3d 2h | 5d ago | 31m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 75.47% | 75.70% | 82.71% | 82.71% | 4488 ms | → 1.03x | 659 | 5m | 18h ago | 46m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 73.76% | 75.73% | 82.10% | 82.10% | 4442 ms | → 1.04x | 651 | 5m | 22h ago | 44m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 73.44% | 75.02% | 73.73% | 73.73% | 4895 ms | ↑ 1.10x | 691 | 5m | 15h ago | 33m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 72.63% | 74.47% | 52.62% | 52.62% | 4677 ms | ↑ 1.07x | 702 | 5m | 17h ago | 33m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 72.56% | 73.20% | 73.24% | 73.24% | 4600 ms | ↑ 1.05x | 489 | 7m | 23h ago | 32m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 72.56% | 71.35% | 71.39% | 71.39% | 4557 ms | → 1.00x | 629 | 7m | 18h ago | 32m ago |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | 72.40% | 72.40% | 72.76% | 72.76% | 1808 ms | → 1.00x | 1 | 13h 10m | 2d ago | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 71.72% | 84.34% | 83.55% | 83.55% | 4629 ms | ↑ 1.40x | 380 | 7m | 2h ago | 32m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 69.21% | 82.48% | 45.41% | 45.41% | 2701 ms | ↑ 1.37x | 155 | 37m | 1d ago | 40m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 65.74% | 65.74% | 66.20% | 66.20% | 1916 ms | → 1.00x | 2 | 6h 5m | 1d ago | 30m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 65.29% | 65.29% | 65.43% | 65.43% | 2203 ms | → 1.00x | 7 | 5h 50m | 2d ago | 31m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 64.69% | 64.69% | 64.83% | 64.83% | 1835 ms | → 1.00x | 5 | 8h 28m | 2d ago | 31m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 62.86% | 62.86% | 63.33% | 63.33% | 2468 ms | → 1.00x | 1 | 12h 60m | 2d ago | 30m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 61.54% | 61.54% | 62.05% | 62.05% | 2106 ms | → 1.00x | 1 | 12h 30m | 2d ago | 30m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 60.16% | 60.16% | 60.29% | 60.29% | 2462 ms | → 1.00x | 2 | 1d 3h | 4d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 60.10% | 71.07% | 82.14% | 82.14% | 4395 ms | → 0.97x | 645 | 9m | 22h ago | 43m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 59.64% | 69.11% | 69.17% | 69.17% | 4546 ms | → 1.04x | 351 | 10m | 18h ago | 31m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 57.30% | 57.30% | 57.43% | 57.43% | 917 ms | → 1.00x | 10 | 7h 2m | 1d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 55.94% | 11.29% | 7.35% | 7.35% | 1019 ms | → 1.00x | 2 | 13d 2h | 2d ago | 33m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 55.72% | 20.49% | 20.57% | 20.57% | 1679 ms | → 1.00x | 2 | 6d 14h | 2d ago | 31m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 55.68% | 11.27% | 3.24% | 3.24% | 440 ms | → 1.00x | 1 | 26d 4h | 30d ago | 35m ago |
| [New API](https://lmspeed.net/provider/new-waadri-top) | 55.61% | 55.61% | 56.07% | 56.07% | 3090 ms | → 1.00x | 2 | 7h 50m | 1d ago | 30m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 55.60% | 12.16% | 12.21% | 12.21% | 994 ms | → 1.00x | 2 | 11d 23h | 2d ago | 32m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 55.58% | 11.21% | 5.64% | 5.64% | 2277 ms | → 1.00x | 2 | 13d 2h | 2d ago | 33m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 55.56% | 11.25% | 2.94% | 2.94% | 935 ms | → 1.00x | 2 | 13d 2h | 1d ago | 35m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 55.56% | 11.25% | 3.84% | 3.84% | 2169 ms | → 1.00x | 2 | 13d 2h | 1d ago | 35m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 55.56% | 11.25% | 2.89% | 2.89% | 1847 ms | → 1.00x | 2 | 13d 2h | 2d ago | 35m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 55.44% | 11.22% | 2.89% | 2.89% | 1674 ms | → 1.00x | 3 | 8d 17h | 2d ago | 35m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 55.41% | 11.17% | 8.81% | 8.81% | 1419 ms | → 1.00x | 3 | 8d 17h | 2d ago | 33m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 55.17% | 55.17% | 55.75% | 55.75% | 3160 ms | → 1.00x | 1 | 12h 40m | 2d ago | 30m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 54.99% | 11.22% | 11.26% | 11.26% | 2273 ms | → 1.00x | 6 | 4d 7h | 2d ago | 32m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 54.36% | 88.58% | 39.34% | 39.34% | 292 ms | ↓ 0.94x | 19 | 4h 4m | 4d ago | 34m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 54.12% | 10.96% | 2.82% | 2.82% | 3588 ms | → 1.00x | 12 | 2d 4h | 2d ago | 35m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 53.19% | 57.58% | 57.63% | 57.63% | 1666 ms | ↑ 1.38x | 7 | 1d 11h | 2d ago | 32m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 52.93% | 68.22% | 47.80% | 47.80% | 3114 ms | ↑ 1.42x | 5 | 1d 23h | 2d ago | 34m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 51.74% | 32.89% | 32.97% | 32.97% | 2442 ms | → 1.01x | 31 | 8h 3m | 2d ago | 31m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 50.60% | 10.24% | 2.64% | 2.64% | 3879 ms | → 1.00x | 33 | 19h 4m | 2d ago | 40m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 49.76% | 51.18% | 51.27% | 51.27% | 4841 ms | → 0.98x | 237 | 14m | 23h ago | 46m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 46.95% | 9.60% | 20.08% | 20.08% | 2393 ms | → 1.00x | 15 | 1d 19h | 22h ago | 34m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 44.42% | 71.37% | 59.53% | 59.53% | 2255 ms | ↑ 1.68x | 17 | 11h 43m | 2d ago | 33m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 41.41% | 48.97% | 61.22% | 61.22% | 4873 ms | → 1.05x | 843 | 15m | 1h ago | 41m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 36.48% | 35.76% | 53.34% | 53.34% | 4515 ms | ↓ 0.93x | 744 | 27m | 23h ago | 44m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 25.45% | 53.86% | 87.79% | 87.79% | 1701 ms | ↑ 1.85x | 6 | 2d 8h | 2d ago | 35m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 18.76% | 3.80% | 1.15% | 1.15% | 4859 ms | → 1.00x | 77 | 8h 42m | 53m ago | 34m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 14.89% | 3.00% | 1.54% | 1.54% | 4527 ms | → 1.00x | 79 | 8h 33m | 13m ago | 33m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 14.68% | 14.68% | 14.85% | 14.85% | 2838 ms | → 1.00x | 1 | 3d 16h | 5d ago | 31m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 13.54% | 13.54% | 13.90% | 13.90% | 2024 ms | → 1.00x | 1 | 2d 24h | 4d ago | 44m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 10.26% | 2.08% | 0.55% | 0.55% | 2188 ms | → 1.00x | 1 | 28d 22h | 30d ago | 39m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 10.26% | 2.08% | 0.55% | 0.55% | 1523 ms | → 1.00x | 1 | 28d 22h | 30d ago | 40m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 7.72% | 1.57% | 0.41% | 0.41% | 840 ms | → 1.00x | 1 | 29d 2h | 30d ago | 43m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 7.70% | 11.70% | 22.29% | 22.29% | 2397 ms | ↑ 1.81x | 6 | 4d 9h | 27d ago | 33m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 7.70% | 1.55% | 1.34% | 1.34% | 194 ms | → 1.00x | 1 | 29d 2h | 30d ago | 33m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 7.69% | 1.57% | 0.41% | 0.41% | 1417 ms | → 1.00x | 1 | 29d 2h | 30d ago | 43m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 7.69% | 1.57% | 0.43% | 0.43% | 1203 ms | → 1.00x | 1 | 29d 2h | 30d ago | 44m ago |
| [xAI](https://lmspeed.net/provider/xai) | 7.68% | 1.57% | 0.41% | 0.41% | 1603 ms | → 1.00x | 1 | 29d 2h | 30d ago | 44m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 7.67% | 1.57% | 28.16% | 28.16% | 590 ms | → 1.00x | 1 | 29d 2h | 30d ago | 45m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 7.67% | 7.80% | 75.61% | 75.61% | 1550 ms | ↑ 1.08x | 1 | 27d 7h | 28d ago | 45m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 7.65% | 1.60% | 0.45% | 0.45% | 853 ms | → 1.00x | 3 | 9d 16h | 15d ago | 35m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 7.65% | 1.55% | 0.50% | 0.50% | 833 ms | → 1.00x | 1 | 29d 2h | 30d ago | 34m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 7.65% | 1.55% | 0.43% | 0.43% | 1048 ms | → 1.00x | 1 | 29d 2h | 30d ago | 35m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 7.65% | 1.55% | 0.40% | 0.40% | 958 ms | → 1.00x | 1 | 29d 2h | 30d ago | 35m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 7.64% | 1.55% | 25.90% | 25.90% | 702 ms | → 1.00x | 1 | 29d 2h | 30d ago | 40m ago |
| [Crond](https://lmspeed.net/provider/crond) | 7.64% | 1.55% | 0.41% | 0.41% | 2091 ms | → 1.00x | 1 | 29d 2h | 30d ago | 39m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 7.62% | 1.55% | 15.10% | 15.10% | 3127 ms | → 1.00x | 1 | 29d 2h | 30d ago | 42m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 7.62% | 1.55% | 0.41% | 0.41% | 2166 ms | → 1.00x | 1 | 29d 2h | 30d ago | 41m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 7.61% | 1.55% | 13.26% | 13.26% | 844 ms | → 1.00x | 1 | 29d 2h | 30d ago | 42m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 7.28% | 1.47% | 0.39% | 0.39% | 2668 ms | → 1.00x | 4 | 7d 6h | 10h ago | 40m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 6.98% | 2.60% | 2.64% | 2.64% | 3009 ms | → 1.00x | 6 | 2d 16h | 2h ago | 31m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 4.80% | 0.97% | 0.54% | 0.54% | 4302 ms | → 1.00x | 17 | 1d 17h | 52m ago | 33m ago |

</details>

<details open>
<summary><strong>🔴 Down (173)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 92.32% | 92.86% | 67.85% | 67.85% | 1835 ms | ↑ 1.08x | 30 | 1h 48m | 20h ago | 33m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 92.25% | 96.16% | 99.00% | 99.00% | 2359 ms | ↑ 2.12x | 80 | 18m | 22h ago | 41m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 92.23% | 98.38% | 38.55% | 38.55% | 478 ms | ↓ 0.93x | 3 | 7h 6m | 22h ago | 34m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 92.23% | 98.43% | 99.58% | 99.58% | 2047 ms | ↑ 1.24x | 1 | 21h 19m | 22h ago | 35m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 92.23% | 97.10% | 36.22% | 36.22% | 463 ms | ↓ 0.94x | 50 | 27m | 22h ago | 35m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 92.23% | 98.31% | 40.80% | 40.80% | 768 ms | ↑ 1.24x | 3 | 7h 16m | 22h ago | 34m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 92.22% | 98.29% | 99.56% | 99.56% | 691 ms | ↓ 0.91x | 6 | 3h 36m | 22h ago | 45m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 92.20% | 97.66% | 91.95% | 91.95% | 539 ms | ↓ 0.55x | 32 | 41m | 22h ago | 44m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 92.20% | 94.20% | 94.12% | 94.12% | 995 ms | ↑ 1.25x | 1 | 21h 36m | 22h ago | 44m ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 92.17% | 84.95% | 84.97% | 84.97% | 609 ms | → 1.05x | 2 | 18h 34m | 22h ago | 31m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 92.15% | 98.31% | 99.52% | 99.52% | 1147 ms | ↓ 0.60x | 6 | 3h 36m | 22h ago | 42m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 92.11% | 25.91% | 6.65% | 6.65% | 1325 ms | → 1.03x | 3 | 7d 6h | 22h ago | 35m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 92.10% | 98.27% | 99.51% | 99.51% | 2554 ms | ↓ 0.95x | 7 | 3h 5m | 22h ago | 46m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 92.10% | 98.22% | 99.36% | 99.36% | 2412 ms | ↑ 1.14x | 9 | 2h 24m | 22h ago | 45m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 92.06% | 96.11% | 96.11% | 96.11% | 637 ms | → 1.02x | 3 | 11h 39m | 22h ago | 32m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 92.06% | 93.08% | 93.09% | 93.09% | 2114 ms | ↑ 1.59x | 3 | 12h 16m | 22h ago | 31m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 92.05% | 96.30% | 96.30% | 96.30% | 781 ms | ↓ 0.88x | 7 | 3h 6m | 22h ago | 31m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 92.04% | 98.38% | 99.57% | 99.57% | 1491 ms | ↑ 2.03x | 2 | 10h 48m | 22h ago | 43m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 92.00% | 98.31% | 99.36% | 99.36% | 2198 ms | ↑ 1.59x | 5 | 4h 18m | 22h ago | 35m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 92.00% | 98.28% | 99.37% | 99.37% | 2161 ms | ↑ 1.49x | 6 | 3h 35m | 22h ago | 35m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 92.00% | 98.16% | 41.45% | 41.45% | 973 ms | ↑ 1.34x | 12 | 1h 47m | 22h ago | 35m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 91.92% | 96.86% | 98.27% | 98.27% | 1533 ms | ↑ 1.86x | 52 | 27m | 22h ago | 43m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 91.74% | 98.05% | 99.49% | 99.49% | 2890 ms | ↑ 2.20x | 16 | 1h 21m | 22h ago | 45m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 91.73% | 97.93% | 98.76% | 98.76% | 2853 ms | ↑ 1.29x | 18 | 1h 14m | 22h ago | 44m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 91.64% | 98.23% | 99.41% | 99.41% | 2333 ms | ↑ 1.77x | 7 | 3h 6m | 22h ago | 35m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 91.49% | 96.65% | 98.12% | 98.12% | 3353 ms | → 0.99x | 69 | 20m | 22h ago | 44m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 91.47% | 97.84% | 97.22% | 97.22% | 3047 ms | ↑ 1.05x | 23 | 56m | 22h ago | 33m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 90.78% | 76.11% | 92.83% | 92.83% | 3242 ms | ↓ 0.93x | 400 | 16m | 22h ago | 44m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 90.01% | 97.36% | 96.58% | 96.58% | 3986 ms | ↑ 1.12x | 42 | 31m | 22h ago | 32m ago |
| [Groq](https://lmspeed.net/provider/groq) | 87.83% | 97.51% | 99.35% | 99.35% | 1135 ms | ↑ 1.59x | 22 | 1h 7m | 22h ago | 39m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 86.87% | 97.20% | 87.80% | 87.80% | 2843 ms | ↑ 1.18x | 32 | 47m | 22h ago | 36m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 84.08% | 92.75% | 96.57% | 96.57% | 4342 ms | ↑ 1.41x | 198 | 8m | 22h ago | 45m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 77.64% | 84.79% | 83.59% | 83.59% | 2289 ms | ↑ 1.14x | 459 | 5m | 22h ago | 33m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 76.25% | 80.20% | 94.85% | 94.85% | 4325 ms | ↑ 2.10x | 165 | 44m | 22h ago | 39m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 76.25% | 94.10% | 96.91% | 96.91% | 3493 ms | ↑ 1.08x | 175 | 8m | 22h ago | 38m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 75.45% | 91.86% | 91.84% | 91.84% | 923 ms | ↑ 1.07x | 9 | 6h 34m | 2d ago | 32m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 74.29% | 80.21% | 88.91% | 88.91% | 4027 ms | → 0.96x | 500 | 8m | 22h ago | 45m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 74.01% | 94.30% | 94.36% | 94.36% | 2244 ms | ↑ 2.01x | 13 | 3h 45m | 2d ago | 32m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 73.82% | 84.40% | 78.86% | 78.86% | 4416 ms | ↑ 1.23x | 446 | 6m | 22h ago | 46m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 72.05% | 79.07% | 94.45% | 94.45% | 4431 ms | ↑ 1.70x | 211 | 35m | 22h ago | 45m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 66.63% | 61.98% | 71.37% | 71.37% | 4676 ms | ↓ 0.87x | 762 | 12m | 9h ago | 46m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 62.86% | 70.18% | 61.92% | 61.92% | 1921 ms | ↓ 0.89x | 47 | 4h 28m | 22h ago | 42m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 60.61% | 60.61% | 60.77% | 60.77% | 4035 ms | → 1.00x | 24 | 2h 2m | 22h ago | 31m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 57.72% | 63.46% | 41.02% | 41.02% | 4566 ms | → 1.02x | 811 | 10m | 22h ago | 33m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 57.57% | 57.57% | 57.86% | 57.86% | 1631 ms | → 1.00x | 2 | 17h 10m | 22h ago | 30m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 55.48% | 16.40% | 16.47% | 16.47% | 2273 ms | → 1.00x | 4 | 4d 6h | 31m ago | 31m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 52.83% | 63.95% | 76.67% | 76.67% | 4878 ms | ↑ 1.22x | 792 | 10m | 22h ago | 46m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 50.42% | 74.85% | 32.10% | 32.10% | 3538 ms | → 0.97x | 547 | 11m | 22h ago | 33m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 50.24% | 59.92% | 70.76% | 70.76% | 4616 ms | → 1.02x | 865 | 11m | 22h ago | 40m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 49.34% | 9.99% | 3.18% | 3.18% | 2128 ms | → 1.00x | 4 | 6d 18h | 22h ago | 34m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 47.14% | 9.54% | 2.45% | 2.45% | 1025 ms | → 1.00x | 7 | 3d 21h | 22h ago | 41m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 43.97% | 88.27% | 40.22% | 40.22% | 1345 ms | → 0.96x | 14 | 6h 36m | 4d ago | 34m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 43.51% | 34.63% | 77.03% | 77.03% | 174 ms | ↑ 1.07x | 8 | 2d 12h | 20h ago | 45m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 42.29% | 20.79% | 20.84% | 20.84% | 4411 ms | → 1.00x | 50 | 4h 49m | 18h ago | 31m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 41.39% | 67.47% | 91.56% | 91.56% | 4454 ms | ↓ 0.94x | 461 | 22m | 22h ago | 46m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 39.86% | 8.14% | 14.94% | 14.94% | 3493 ms | → 1.00x | 11 | 2d 12h | 22h ago | 45m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 18.63% | 20.49% | 20.19% | 20.19% | 3011 ms | ↑ 1.21x | 619 | 46m | 22h ago | 33m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 18.08% | 18.08% | 18.64% | 18.64% | 582 ms | → 1.00x | 2 | 17h 5m | 22h ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 14.32% | 27.91% | 37.48% | 37.48% | 1910 ms | ↑ 1.08x | 148 | 3h 18m | 5d ago | 32m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 6.56% | 79.45% | 94.64% | 94.64% | 737 ms | ↓ 0.91x | 58 | 2h 34m | 6d ago | 39m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 5.54% | 1.46% | 1.46% | 1.46% | 1348 ms | → 1.00x | 2 | 11d 10h | 3d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 2.87% | 0.58% | 4.57% | 4.57% | 730 ms | → 1.00x | 3 | 9d 22h | 22h ago | 34m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 2.63% | 0.53% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 22h ago | 39m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 2.63% | 0.53% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 22h ago | 41m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.48% | 0.51% | 46.68% | 46.68% | 444 ms | → 1.00x | 2 | 14d 22h | 22h ago | 44m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.31% | 0.51% | 0.13% | 0.13% | 830 ms | ↓ 0.68x | 18 | 1d 16h | 2d ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 39.37% | 81.71% | 81.71% | — | — | 7 | 2d 16h | 19d ago | 39m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.86% | 6.86% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 15.80% | 4.05% | 4.05% | — | — | 2 | 12d 17h | 19d ago | 40m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 43.45% | 43.45% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 24.21% | 32.53% | 32.53% | — | — | 3 | 7d 16h | 22d ago | 33m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 61.56% | 74.96% | 74.96% | — | — | 440 | 30m | 7d ago | 43m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 44m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 45m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.65% | 4.65% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 45m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 22.73% | 22.73% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 22.89% | 49.15% | 49.15% | — | — | 2 | 11d 17h | 23d ago | 33m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 42.67% | 36.47% | 36.47% | — | — | 3 | 5d 22h | 18d ago | 34m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 65.14% | 65.14% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 16.08% | 16.08% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 68.32% | 68.32% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 44m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.84% | 8.84% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 16.76% | 78.58% | 78.58% | — | — | 1 | 25d 4h | 25d ago | 43m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 45m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 15.18% | 15.18% | 15.18% | — | — | 5 | 3d 9h | 17d ago | 31m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 60.75% | 60.73% | 60.73% | — | — | 7 | 1d 13h | 10d ago | 32m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 16h | 17d ago | 31m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 50.13% | 50.11% | 50.11% | — | — | 5 | 2d 24h | 15d ago | 32m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 20.63% | 20.62% | 20.62% | — | — | 5 | 2d 21h | 14d ago | 31m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 63.16% | 63.16% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 53.61% | 87.96% | 87.96% | — | — | 2 | 7d 6h | 15d ago | 43m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 45m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 55.76% | 55.76% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 46m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 50.70% | 50.70% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 21h | 14d ago | 31m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 70.19% | 70.19% | — | — | 3 | 9d 24h | 13d ago | 40m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 21h | 4d ago | 44m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 19h | 4d ago | 35m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 49.79% | 49.79% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 77.92% | 60.93% | 60.93% | — | — | 12 | 14h 60m | 8d ago | 33m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 35m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 17h | 17d ago | 31m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 19h | 4d ago | 35m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.41% | 4.41% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 51.83% | 51.83% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.97% | 33.97% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.92% | 28.92% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 43m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.95% | 20.95% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 59.38% | 59.38% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 66.16% | 66.16% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 72.44% | 92.85% | 92.85% | — | — | 1 | 9d 4h | 9d ago | 39m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 22h | 6d ago | 31m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 43m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 45m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 66.17% | 90.01% | 90.01% | — | — | 22 | 11h 44m | 11d ago | 44m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.79% | 23.79% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 0.88% | 0.88% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 30.41% | 81.93% | 81.93% | — | — | 3 | 7d 2h | 8d ago | 43m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 19.59% | 10.89% | 10.89% | — | — | 2 | 12d 4h | 20d ago | 33m ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 28.69% | 81.16% | 81.16% | — | — | 13 | 1d 16h | 22d ago | 44m ago |
| [速创API](https://lmspeed.net/provider/succhuang-api) | 0.00% | 0.00% | 19.57% | 19.57% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 24.04% | 24.03% | 24.03% | — | — | 3 | 6d 10h | 19d ago | 32m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 20h | 4d ago | 44m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.54% | 21.54% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 14.32% | 59.92% | 59.92% | — | — | 3 | 8d 15h | 26d ago | 42m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 49.70% | 49.70% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 73.09% | 93.09% | 93.09% | — | — | 2 | 4d 11h | 9d ago | 44m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |

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
