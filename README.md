# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**526 providers** — 270 🟢 operational · 86 🟡 degraded · 170 🔴 down · 0 ⚫ unknown

_Updated 2026-04-26 05:44 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (270)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2154 ms | → 1.00x | 0 | — | — | 5m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2495 ms | → 1.00x | 0 | — | — | 5m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2869 ms | → 1.00x | 0 | — | — | 5m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 563 ms | → 1.00x | 0 | — | — | 5m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3106 ms | → 1.00x | 0 | — | — | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 503 ms | → 1.00x | 0 | — | — | 5m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1753 ms | → 1.00x | 0 | — | — | 5m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2987 ms | → 1.00x | 0 | — | — | 5m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3133 ms | → 1.00x | 0 | — | — | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1159 ms | → 1.00x | 0 | — | — | 5m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2694 ms | → 1.00x | 0 | — | — | 5m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.82% | 99.95% | 90.90% | 90.90% | 2086 ms | ↑ 1.94x | 1 | 0s | 23d ago | 14m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.82% | 99.95% | 99.99% | 99.99% | 824 ms | ↑ 1.42x | 1 | 0s | 23d ago | 14m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.82% | 99.07% | 98.48% | 98.48% | 4096 ms | ↑ 1.48x | 34 | 0s | 8d ago | 14m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.82% | 99.92% | 99.99% | 99.99% | 867 ms | ↑ 1.36x | 2 | 0s | 12d ago | 14m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.82% | 42.53% | 9.61% | 9.61% | 1923 ms | ↑ 1.05x | 2 | 7d 12h | 8d ago | 14m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.82% | 99.57% | 90.69% | 90.69% | 3704 ms | ↑ 3.62x | 14 | 43s | 8d ago | 14m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.82% | 99.92% | 96.94% | 96.94% | 3726 ms | ↑ 1.82x | 2 | 0s | 8d ago | 12m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.82% | 97.50% | 97.80% | 97.80% | 4535 ms | ↑ 1.43x | 85 | 1m | 7d ago | 13m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.82% | 98.78% | 99.57% | 99.57% | 2274 ms | ↑ 1.48x | 42 | 43s | 8d ago | 12m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.82% | 99.92% | 99.81% | 99.81% | 695 ms | ↓ 0.87x | 2 | 0s | 13d ago | 13m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.82% | 99.95% | 99.93% | 99.93% | 1160 ms | ↑ 1.85x | 1 | 0s | 19d ago | 13m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.82% | 99.89% | 99.90% | 99.90% | 948 ms | ↓ 0.80x | 3 | 0s | 15d ago | 13m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.82% | 99.47% | 99.13% | 99.13% | 1837 ms | ↑ 2.15x | 18 | 33s | 8d ago | 12m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.82% | 99.92% | 99.94% | 99.94% | 1466 ms | ↑ 1.06x | 2 | 0s | 12d ago | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.82% | 99.23% | 99.55% | 99.55% | 934 ms | ↓ 0.86x | 24 | 2m | 11d ago | 13m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.82% | 99.57% | 87.09% | 87.09% | 2221 ms | ↑ 2.59x | 14 | 43s | 8d ago | 12m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.82% | 99.92% | 99.91% | 99.91% | 1552 ms | ↑ 1.64x | 2 | 0s | 8d ago | 12m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.82% | 99.12% | 99.52% | 99.52% | 1147 ms | ↑ 1.11x | 6 | 43m | 13d ago | 13m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.82% | 99.23% | 98.85% | 98.85% | 2500 ms | ↑ 1.21x | 27 | 23s | 8d ago | 12m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.82% | 99.79% | 99.75% | 99.75% | 2685 ms | ↑ 1.48x | 6 | 2m | 8d ago | 12m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.82% | 99.84% | 99.65% | 99.65% | 1423 ms | ↑ 1.27x | 4 | 2m | 9d ago | 13m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.82% | 99.76% | 99.63% | 99.63% | 699 ms | ↓ 0.80x | 8 | 0s | 17d ago | 13m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.82% | 99.76% | 99.72% | 99.72% | 2107 ms | ↑ 1.06x | 8 | 0s | 12d ago | 13m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.82% | 99.87% | 99.71% | 99.71% | 2144 ms | ↑ 1.51x | 3 | 3m | 17d ago | 13m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.82% | 99.89% | 99.92% | 99.92% | 189 ms | ↓ 0.24x | 3 | 0s | 19d ago | 13m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.82% | 99.60% | 99.90% | 99.90% | 2411 ms | ↑ 1.75x | 11 | 2m | 8d ago | 12m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.82% | 99.49% | 99.45% | 99.45% | 2533 ms | ↑ 1.36x | 18 | 0s | 7d ago | 13m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.82% | 99.04% | 59.15% | 59.15% | 924 ms | ↓ 0.92x | 31 | 1m | 16d ago | 13m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.82% | 99.49% | 99.50% | 99.50% | 1970 ms | ↑ 1.84x | 11 | 6m | 11d ago | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.82% | 99.07% | 99.77% | 99.77% | 1531 ms | → 0.98x | 34 | 0s | 16d ago | 13m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.82% | 97.95% | 99.40% | 99.40% | 968 ms | ↓ 0.90x | 60 | 3m | 12d ago | 13m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.82% | 99.57% | 99.69% | 99.69% | 1128 ms | ↓ 0.90x | 5 | 20m | 13d ago | 13m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.82% | 99.84% | 99.93% | 99.93% | 622 ms | ↑ 1.61x | 5 | 0s | 12d ago | 12m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.82% | 99.92% | 99.96% | 99.96% | 1570 ms | ↑ 1.06x | 2 | 0s | 8d ago | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.82% | 99.60% | 97.85% | 97.85% | 1877 ms | → 1.02x | 13 | 46s | 8d ago | 12m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.82% | 99.87% | 98.92% | 98.92% | 2269 ms | ↑ 1.81x | 4 | 0s | 8d ago | 12m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.82% | 99.97% | 99.36% | 99.36% | 2351 ms | ↑ 2.93x | 0 | — | — | 12m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 99.82% | 98.53% | 90.67% | 90.67% | 2694 ms | ↓ 0.90x | 52 | 23s | 7d ago | 12m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.82% | 99.95% | 99.99% | 99.99% | 1517 ms | ↑ 1.77x | 1 | 0s | 16d ago | 12m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.82% | 99.44% | 99.80% | 99.80% | 856 ms | ↓ 0.84x | 20 | 0s | 10d ago | 11m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.82% | 99.87% | 99.91% | 99.91% | 2036 ms | ↑ 2.05x | 4 | 0s | 10d ago | 11m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.82% | 99.87% | 98.67% | 98.67% | 1071 ms | ↑ 1.33x | 3 | 3m | 9d ago | 11m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.82% | 97.73% | 99.13% | 99.13% | 3990 ms | ↑ 2.82x | 65 | 3m | 7d ago | 11m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.82% | 95.33% | 96.98% | 96.98% | 3911 ms | ↑ 2.23x | 6 | 4h 40m | 10d ago | 11m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.82% | 99.23% | 36.03% | 36.03% | 1598 ms | ↓ 0.93x | 16 | 8m | 8d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.82% | 98.88% | 98.34% | 98.34% | 2196 ms | → 1.05x | 40 | 15s | 9d ago | 11m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.82% | 99.89% | 51.87% | 51.87% | 4038 ms | ↑ 2.41x | 3 | 0s | 11d ago | 11m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.82% | 99.95% | 99.91% | 99.91% | 634 ms | ↓ 0.79x | 1 | 0s | 10d ago | 11m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.82% | 99.60% | 99.71% | 99.71% | 883 ms | ↓ 0.81x | 7 | 10m | 10d ago | 11m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.82% | 99.97% | 99.98% | 99.98% | 914 ms | ↓ 0.91x | 0 | — | — | 10m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.82% | 99.73% | 99.43% | 99.43% | 2431 ms | ↑ 1.83x | 9 | 0s | 10d ago | 10m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.82% | 99.95% | 33.95% | 33.95% | 1104 ms | ↓ 0.41x | 1 | 0s | 10d ago | 10m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.82% | 97.17% | 99.34% | 99.34% | 715 ms | → 1.04x | 79 | 3m | 16d ago | 10m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.82% | 92.44% | 97.83% | 97.83% | 743 ms | ↓ 0.90x | 79 | 26m | 9d ago | 10m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.81% | 99.86% | 99.86% | 1120 ms | ↓ 0.95x | 6 | 0s | 9d ago | 10m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.82% | 99.81% | 99.83% | 99.83% | 2724 ms | ↑ 1.53x | 6 | 0s | 8d ago | 9m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.82% | 99.68% | 99.56% | 99.56% | 2148 ms | ↓ 0.84x | 11 | 0s | 8d ago | 9m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.30% | 96.06% | 96.06% | 2625 ms | ↑ 1.26x | 43 | 31m | 8d ago | 10m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.82% | 99.57% | 99.68% | 99.68% | 2349 ms | ↑ 1.07x | 3 | 0s | 8d ago | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.82% | 99.12% | 99.60% | 99.60% | 1180 ms | ↓ 0.87x | 4 | 1h 8m | 8d ago | 9m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.82% | 99.84% | 99.84% | 99.84% | 1702 ms | ↑ 1.18x | 5 | 0s | 8d ago | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.82% | 99.84% | 99.94% | 99.94% | 2327 ms | ↑ 3.13x | 4 | 42s | 8d ago | 9m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.82% | 97.65% | 81.55% | 81.55% | 1609 ms | ↓ 0.45x | 83 | 28s | 8d ago | 9m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.81% | 99.84% | 99.85% | 99.85% | 1864 ms | ↑ 1.17x | 5 | 0s | 8d ago | 9m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 99.81% | 24.71% | 5.56% | 5.56% | 1996 ms | ↑ 1.19x | 3 | 6d 17h | 8d ago | 8m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 99.81% | 48.83% | 88.12% | 88.12% | 1252 ms | ↑ 1.37x | 5 | 2d 19h | 8d ago | 8m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.81% | 98.52% | 97.52% | 97.52% | 1032 ms | ↑ 2.59x | 14 | 29m | 8d ago | 8m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.81% | 98.60% | 97.64% | 97.64% | 2142 ms | ↑ 2.45x | 25 | 10m | 8d ago | 8m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.81% | 98.98% | 98.79% | 98.79% | 1568 ms | ↑ 1.70x | 35 | 34s | 8d ago | 8m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.81% | 96.78% | 99.23% | 99.23% | 1954 ms | ↑ 1.55x | 82 | 5m | 9d ago | 8m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.81% | 24.42% | 5.49% | 5.49% | 1881 ms | ↓ 0.83x | 12 | 1d 16h | 8d ago | 8m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.81% | 24.75% | 6.48% | 6.48% | 2457 ms | ↑ 1.20x | 2 | 10d 2h | 7d ago | 8m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.81% | 99.92% | 98.65% | 98.65% | 727 ms | ↑ 1.82x | 2 | 0s | 8d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.81% | 99.73% | 91.16% | 91.16% | 758 ms | → 1.02x | 9 | 0s | 8d ago | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.81% | 98.44% | 36.03% | 36.03% | 875 ms | ↑ 1.08x | 47 | 2m | 10d ago | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.81% | 99.79% | 49.90% | 49.90% | 1458 ms | ↓ 0.85x | 7 | 0s | 8d ago | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.81% | 99.68% | 98.84% | 98.84% | 416 ms | ↓ 0.92x | 4 | 18m | 24d ago | 7m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.81% | 24.75% | 6.20% | 6.20% | 1091 ms | ↑ 1.40x | 1 | 20d 4h | 30d ago | 7m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.81% | 99.84% | 99.83% | 99.83% | 2401 ms | ↑ 1.34x | 4 | 2m | 7d ago | 6m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.81% | 99.84% | 51.43% | 51.43% | 1093 ms | ↓ 0.74x | 5 | 0s | 8d ago | 7m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.81% | 24.72% | 5.64% | 5.64% | 613 ms | ↓ 0.80x | 2 | 10d 2h | 7d ago | 7m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.81% | 99.87% | 60.30% | 60.30% | 1407 ms | ↑ 2.50x | 4 | 0s | 8d ago | 6m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.81% | 99.92% | 58.32% | 58.32% | 1278 ms | ↑ 1.67x | 2 | 0s | 8d ago | 6m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.81% | 99.70% | 95.79% | 95.79% | 862 ms | ↑ 1.34x | 10 | 0s | 8d ago | 6m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.81% | 99.92% | 47.71% | 47.71% | 1152 ms | ↑ 1.93x | 2 | 0s | 8d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.81% | 98.42% | 95.26% | 95.26% | 1135 ms | → 1.00x | 53 | 56s | 8d ago | 7m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.81% | 99.92% | 51.07% | 51.07% | 2320 ms | ↑ 2.94x | 2 | 0s | 8d ago | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.81% | 95.84% | 96.17% | 96.17% | 2516 ms | ↑ 1.25x | 75 | 11m | 8d ago | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.81% | 99.44% | 98.46% | 98.46% | 717 ms | → 1.00x | 16 | 2m | 9d ago | 6m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.81% | 99.92% | 99.81% | 99.81% | 361 ms | ↓ 0.91x | 2 | 0s | 11d ago | 7m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.81% | 99.84% | 91.07% | 91.07% | 1594 ms | ↓ 0.91x | 5 | 0s | 8d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.81% | 99.73% | 98.17% | 98.17% | 1398 ms | ↓ 0.92x | 9 | 0s | 8d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.81% | 92.68% | 95.37% | 95.37% | 2445 ms | ↑ 2.15x | 10 | 4h 21m | 8d ago | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.81% | 99.73% | 75.10% | 75.10% | 2370 ms | ↑ 1.43x | 8 | 1m | 8d ago | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.81% | 99.89% | 94.83% | 94.83% | 2617 ms | ↑ 3.33x | 3 | 0s | 8d ago | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.81% | 99.81% | 99.85% | 99.85% | 656 ms | ↓ 0.88x | 5 | 2m | 8d ago | 6m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.81% | 99.89% | 67.99% | 67.99% | 1165 ms | ↑ 1.13x | 3 | 0s | 8d ago | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.81% | 97.85% | 97.07% | 97.07% | 3114 ms | ↑ 1.69x | 13 | 51m | 8d ago | 6m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.81% | 99.54% | 86.00% | 86.00% | 2252 ms | ↑ 1.13x | 5 | 22m | 8d ago | 6m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.81% | 98.93% | 99.46% | 99.46% | 2098 ms | ↑ 2.26x | 18 | 12m | 8d ago | 6m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.81% | 98.31% | 97.48% | 97.48% | 899 ms | ↓ 0.77x | 3 | 3h 47m | 8d ago | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 99.81% | 24.74% | 13.50% | 13.50% | 1001 ms | ↑ 1.07x | 2 | 10d 2h | 8d ago | 6m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.81% | 84.93% | 59.80% | 59.80% | 3332 ms | ↑ 2.39x | 9 | 10h 11m | 8d ago | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.81% | 98.57% | 98.13% | 98.13% | 1286 ms | → 0.96x | 17 | 21m | 8d ago | 6m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 99.81% | 24.62% | 16.04% | 16.04% | 855 ms | ↓ 0.87x | 3 | 6d 17h | 8d ago | 6m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 99.81% | 97.42% | 97.18% | 97.18% | 1152 ms | ↑ 1.12x | 18 | 43m | 8d ago | 6m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.81% | 99.60% | 98.26% | 98.26% | 1213 ms | ↑ 1.23x | 11 | 3m | 8d ago | 6m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.81% | 99.41% | 97.59% | 97.59% | 1318 ms | ↑ 1.58x | 20 | 30s | 8d ago | 6m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.81% | 99.73% | 99.77% | 99.77% | 936 ms | ↓ 0.78x | 8 | 1m | 8d ago | 6m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.81% | 99.49% | 98.43% | 98.43% | 1028 ms | ↓ 0.84x | 18 | 0s | 8d ago | 6m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.81% | 99.87% | 99.06% | 99.06% | 1194 ms | ↑ 1.09x | 4 | 0s | 8d ago | 6m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.81% | 99.92% | 97.82% | 97.82% | 1602 ms | ↑ 1.85x | 2 | 0s | 8d ago | 6m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.81% | 37.63% | 17.94% | 17.94% | 2741 ms | ↑ 1.62x | 10 | 1d 15h | 8d ago | 6m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.81% | 99.87% | 99.85% | 99.85% | 2181 ms | ↑ 1.76x | 4 | 0s | 8d ago | 6m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.81% | 44.75% | 32.18% | 32.18% | 4212 ms | ↑ 1.09x | 5 | 2d 21h | 7d ago | 6m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.81% | 99.14% | 98.96% | 98.96% | 936 ms | ↓ 0.80x | 30 | 20s | 8d ago | 6m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.81% | 99.70% | 72.60% | 72.60% | 468 ms | → 0.95x | 8 | 3m | 8d ago | 6m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.81% | 92.71% | 72.48% | 72.48% | 2946 ms | ↑ 1.67x | 77 | 25m | 7d ago | 6m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.81% | 99.95% | 81.15% | 81.15% | 570 ms | → 0.97x | 1 | 0s | 8d ago | 6m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.81% | 99.92% | 99.97% | 99.97% | 1841 ms | → 0.96x | 2 | 0s | 8d ago | 6m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.81% | 98.95% | 82.37% | 82.37% | 1724 ms | ↑ 2.98x | 30 | 3m | 8d ago | 6m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.81% | 76.83% | 57.56% | 57.56% | 690 ms | ↓ 0.93x | 5 | 1d 4h | 8d ago | 6m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.81% | 99.60% | 98.36% | 98.36% | 2028 ms | ↑ 1.14x | 14 | 0s | 8d ago | 6m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.81% | 99.76% | 99.72% | 99.72% | 1538 ms | ↑ 1.47x | 7 | 1m | 7d ago | 6m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.81% | 99.70% | 97.42% | 97.42% | 1827 ms | ↑ 3.07x | 10 | 0s | 8d ago | 6m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.81% | 99.17% | 99.11% | 99.11% | 2085 ms | ↑ 2.01x | 20 | 5m | 8d ago | 6m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.81% | 97.03% | 97.07% | 97.07% | 1359 ms | → 0.98x | 5 | 2h 32m | 8d ago | 5m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.81% | 92.92% | 94.44% | 94.44% | 1750 ms | ↑ 1.67x | 22 | 1h 49m | 8d ago | 6m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.81% | 95.13% | 93.42% | 93.42% | 2086 ms | ↓ 0.88x | 124 | 5m | 8d ago | 6m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.81% | 99.92% | 99.94% | 99.94% | 1501 ms | ↑ 1.87x | 2 | 0s | 8d ago | 5m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.81% | 96.70% | 96.74% | 96.74% | 1210 ms | ↓ 0.72x | 18 | 42m | 7d ago | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.81% | 97.36% | 97.39% | 97.39% | 3244 ms | ↑ 2.28x | 6 | 2h 13m | 8d ago | 5m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.81% | 96.20% | 96.23% | 96.23% | 1650 ms | → 0.98x | 48 | 18m | 8d ago | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.81% | 99.70% | 97.95% | 97.95% | 931 ms | ↑ 2.45x | 7 | 9m | 7d ago | 6m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.81% | 91.04% | 91.07% | 91.07% | 2435 ms | ↑ 1.30x | 6 | 8h 38m | 8d ago | 5m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.81% | 24.48% | 20.11% | 20.11% | 657 ms | ↓ 0.47x | 6 | 3d 9h | 8d ago | 6m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.81% | 99.70% | 97.19% | 97.19% | 2033 ms | ↑ 2.90x | 9 | 1m | 8d ago | 6m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.81% | 99.57% | 97.64% | 97.64% | 874 ms | → 1.00x | 14 | 43s | 8d ago | 6m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.81% | 99.87% | 99.91% | 99.91% | 930 ms | → 0.95x | 4 | 0s | 8d ago | 6m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 99.81% | 33.74% | 33.78% | 33.78% | 886 ms | ↓ 0.79x | 2 | 6d 14h | 8d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.81% | 99.72% | 99.75% | 99.75% | 1728 ms | ↑ 1.88x | 8 | 1m | 8d ago | 5m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.81% | 96.05% | 96.08% | 96.08% | 1643 ms | → 0.98x | 80 | 7m | 7d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.81% | 92.09% | 92.12% | 92.12% | 2908 ms | ↑ 1.71x | 71 | 29m | 8d ago | 5m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.81% | 99.83% | 99.87% | 99.87% | 1006 ms | ↓ 0.86x | 4 | 0s | 8d ago | 5m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.81% | 99.67% | 99.70% | 99.70% | 956 ms | → 0.96x | 8 | 4m | 8d ago | 5m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.81% | 88.00% | 88.04% | 88.04% | 2480 ms | ↑ 1.51x | 16 | 2h 28m | 7d ago | 5m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.81% | 96.86% | 96.90% | 96.90% | 1976 ms | ↑ 1.59x | 60 | 3m | 8d ago | 5m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.81% | 94.72% | 94.77% | 94.77% | 2457 ms | ↑ 1.78x | 1 | 18h 20m | 19d ago | 5m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.81% | 99.66% | 99.71% | 99.71% | 1947 ms | ↑ 1.60x | 7 | 0s | 9d ago | 5m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.81% | 92.30% | 92.34% | 92.34% | 2156 ms | → 1.01x | 76 | 15m | 9d ago | 5m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.81% | 96.76% | 96.80% | 96.80% | 1625 ms | ↑ 1.34x | 3 | 4h 10m | 9d ago | 5m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.81% | 44.66% | 44.69% | 44.69% | 1767 ms | ↓ 0.84x | 31 | 8h 3m | 8d ago | 5m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.81% | 95.58% | 95.63% | 95.63% | 2068 ms | ↑ 2.17x | 3 | 5h 3m | 11d ago | 5m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.81% | 96.25% | 96.30% | 96.30% | 2028 ms | ↑ 1.31x | 5 | 2h 40m | 9d ago | 5m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.81% | 95.68% | 95.72% | 95.72% | 1615 ms | → 1.04x | 9 | 1h 47m | 8d ago | 5m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.81% | 91.93% | 91.97% | 91.97% | 1640 ms | ↑ 1.34x | 54 | 25m | 7d ago | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.81% | 92.85% | 92.90% | 92.90% | 2398 ms | ↑ 1.51x | 1 | 1d 1h | 19d ago | 5m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.81% | 96.48% | 96.53% | 96.53% | 1703 ms | ↑ 1.93x | 2 | 6h 15m | 8d ago | 5m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.81% | 99.89% | 99.95% | 99.95% | 1224 ms | ↓ 0.88x | 1 | 0s | 12d ago | 5m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.81% | 98.34% | 98.40% | 98.40% | 1492 ms | ↑ 1.07x | 3 | 1h 20m | 15d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.81% | 99.93% | 100.00% | 100.00% | 758 ms | → 0.97x | 0 | — | — | 5m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.81% | 57.47% | 57.52% | 57.52% | 1170 ms | → 0.98x | 2 | 3d 2h | 11d ago | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.81% | 99.95% | 100.00% | 100.00% | 2010 ms | ↑ 1.77x | 0 | — | — | 5m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.81% | 92.78% | 92.83% | 92.83% | 1501 ms | ↓ 0.39x | 26 | 42m | 9d ago | 5m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.81% | 78.61% | 78.67% | 78.67% | 1064 ms | ↓ 0.95x | 4 | 15h 20m | 8d ago | 5m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.81% | 93.90% | 93.97% | 93.97% | 460 ms | ↑ 1.18x | 1 | 13h 50m | 14d ago | 5m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.81% | 99.72% | 99.78% | 99.78% | 1235 ms | → 1.00x | 4 | 0s | 10d ago | 5m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.81% | 99.89% | 99.95% | 99.95% | 1698 ms | ↑ 1.85x | 1 | 0s | 12d ago | 5m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.81% | 99.57% | 99.64% | 99.64% | 80 ms | ↓ 0.17x | 4 | 3m | 11d ago | 5m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.81% | 95.77% | 95.84% | 95.84% | 2208 ms | ↑ 1.12x | 1 | 9h 60m | 14d ago | 5m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.81% | 99.42% | 99.50% | 99.50% | 561 ms | ↓ 0.85x | 7 | 0s | 9d ago | 5m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.81% | 99.87% | 99.94% | 99.94% | 1012 ms | ↓ 0.76x | 1 | 0s | 10d ago | 5m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.81% | 92.37% | 92.43% | 92.43% | 1254 ms | ↓ 0.77x | 4 | 5h 15m | 10d ago | 5m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.81% | 90.78% | 90.91% | 90.91% | 1601 ms | → 0.98x | 1 | 12h 20m | 9d ago | 5m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.81% | 89.48% | 89.59% | 89.59% | 2448 ms | → 0.99x | 3 | 5h 3m | 8d ago | 5m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 99.81% | 90.44% | 90.57% | 90.57% | 1016 ms | ↑ 1.10x | 1 | 12h 47m | 9d ago | 5m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.81% | 89.94% | 90.02% | 90.02% | 2112 ms | ↑ 1.21x | 3 | 11h 20m | 9d ago | 5m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 99.81% | 78.85% | 78.94% | 78.94% | 638 ms | ↓ 0.45x | 7 | 5h 50m | 8d ago | 5m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.81% | 72.55% | 72.63% | 72.63% | 499 ms | ↓ 0.58x | 10 | 7h 2m | 7d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.81% | 90.18% | 90.31% | 90.31% | 2014 ms | ↓ 0.87x | 1 | 12h 50m | 9d ago | 5m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.81% | 89.42% | 89.56% | 89.56% | 1370 ms | ↓ 0.90x | 1 | 13h 10m | 8d ago | 5m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.81% | 98.38% | 98.49% | 98.49% | 1329 ms | ↓ 0.66x | 3 | 37m | 8d ago | 5m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 99.81% | 51.69% | 51.79% | 51.79% | 452 ms | ↓ 0.89x | 1 | 3d 16h | 11d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.81% | 99.53% | 99.69% | 99.69% | 907 ms | ↓ 0.61x | 2 | 0s | 7d ago | 5m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.81% | 99.35% | 99.43% | 99.43% | 1253 ms | ↑ 1.32x | 2 | 25m | 8d ago | 5m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.81% | 88.35% | 88.51% | 88.51% | 2858 ms | ↑ 1.07x | 1 | 12h 30m | 8d ago | 5m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.74% | 99.74% | 99.74% | 99.74% | 2616 ms | → 1.00x | 1 | 0s | 4d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.64% | 94.63% | 91.19% | 91.19% | 1642 ms | ↓ 0.82x | 117 | 7m | 2d ago | 13m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.64% | 97.29% | 97.59% | 97.59% | 3554 ms | ↑ 1.73x | 97 | 25s | 17h ago | 13m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.64% | 99.95% | 99.70% | 99.70% | 1981 ms | ↑ 1.58x | 1 | 0s | 17h ago | 13m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.64% | 99.57% | 98.89% | 98.89% | 2670 ms | ↑ 1.20x | 14 | 43s | 17h ago | 13m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.64% | 99.79% | 99.88% | 99.88% | 1591 ms | ↑ 1.77x | 7 | 0s | 1d ago | 13m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.64% | 99.79% | 99.72% | 99.72% | 1843 ms | → 1.01x | 7 | 0s | 17h ago | 13m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.64% | 99.92% | 99.90% | 99.90% | 981 ms | → 1.03x | 2 | 0s | 6d ago | 13m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.64% | 99.64% | 99.67% | 99.67% | 2166 ms | ↑ 1.42x | 11 | 0s | 17h ago | 13m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.64% | 98.73% | 98.84% | 98.84% | 2891 ms | ↑ 1.08x | 10 | 1m | 1d ago | 12m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.64% | 99.73% | 99.62% | 99.62% | 1452 ms | ↑ 1.25x | 9 | 0s | 6d ago | 12m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.64% | 99.65% | 99.84% | 99.84% | 2087 ms | ↑ 2.67x | 6 | 10m | 5d ago | 11m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.64% | 99.47% | 99.71% | 99.71% | 3367 ms | ↑ 1.58x | 16 | 2m | 7d ago | 10m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.64% | 99.95% | 99.94% | 99.94% | 1388 ms | ↑ 1.14x | 1 | 0s | 5d ago | 10m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.64% | 71.39% | 63.13% | 63.13% | 4201 ms | ↓ 0.69x | 661 | 6m | 4d ago | 10m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.63% | 14.79% | 3.33% | 3.33% | 2728 ms | → 1.00x | 2 | 11d 11h | 3d ago | 9m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.63% | 97.89% | 96.58% | 96.58% | 1127 ms | ↓ 0.28x | 68 | 1m | 2d ago | 9m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.63% | 99.89% | 99.72% | 99.72% | 2828 ms | ↑ 2.27x | 3 | 0s | 3d ago | 9m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.63% | 97.99% | 99.52% | 99.52% | 2019 ms | ↑ 2.28x | 62 | 2m | 3d ago | 9m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.63% | 24.71% | 5.56% | 5.56% | 2168 ms | ↑ 1.17x | 3 | 6d 17h | 3d ago | 8m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.63% | 99.57% | 56.48% | 56.48% | 1122 ms | ↓ 0.83x | 13 | 2m | 4d ago | 6m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.63% | 99.68% | 53.92% | 53.92% | 850 ms | ↓ 0.87x | 9 | 2m | 5d ago | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.63% | 99.57% | 98.98% | 98.98% | 1887 ms | ↑ 1.29x | 15 | 0s | 7d ago | 6m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.63% | 98.42% | 58.82% | 58.82% | 1291 ms | ↑ 2.33x | 39 | 5m | 1d ago | 6m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.62% | 96.72% | 96.42% | 96.42% | 1623 ms | ↑ 1.86x | 29 | 32m | 3d ago | 6m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.62% | 99.35% | 76.87% | 76.87% | 2566 ms | ↑ 2.97x | 18 | 3m | 17h ago | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.62% | 99.65% | 75.38% | 75.38% | 2260 ms | ↑ 3.38x | 11 | 54s | 3d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.62% | 68.24% | 62.09% | 62.09% | 1753 ms | ↑ 1.48x | 16 | 12h 26m | 3d ago | 6m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.62% | 99.81% | 86.25% | 86.25% | 739 ms | ↓ 0.58x | 6 | 0s | 2d ago | 6m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.62% | 98.55% | 98.71% | 98.71% | 456 ms | ↓ 0.72x | 29 | 8m | 2d ago | 6m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.62% | 99.78% | 98.09% | 98.09% | 1462 ms | ↑ 2.92x | 7 | 0s | 4d ago | 6m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.62% | 99.76% | 83.86% | 83.86% | 2204 ms | ↑ 1.21x | 5 | 6m | 17h ago | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.62% | 97.17% | 97.20% | 97.20% | 2990 ms | ↑ 3.05x | 5 | 3h | 3d ago | 5m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.62% | 99.55% | 99.59% | 99.59% | 1751 ms | ↑ 1.50x | 7 | 9m | 3d ago | 5m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.62% | 97.41% | 97.46% | 97.46% | 1082 ms | → 0.98x | 5 | 1h 26m | 5d ago | 5m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.62% | 95.04% | 95.09% | 95.09% | 1726 ms | ↑ 1.10x | 14 | 59m | 14h ago | 5m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.62% | 90.69% | 90.77% | 90.77% | 1981 ms | ↑ 1.08x | 8 | 4h 1m | 4d ago | 5m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 99.62% | 88.01% | 88.16% | 88.16% | 1359 ms | ↓ 0.89x | 2 | 6h 30m | 4d ago | 5m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.62% | 99.86% | 99.93% | 99.93% | 1314 ms | ↑ 1.36x | 1 | 0s | 6d ago | 5m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.62% | 90.15% | 90.24% | 90.24% | 1510 ms | ↓ 0.70x | 5 | 3h 19m | 13h ago | 5m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.46% | 99.68% | 99.79% | 99.79% | 463 ms | ↓ 0.80x | 2 | 0s | 16h ago | 13m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.46% | 99.63% | 99.83% | 99.83% | 2481 ms | ↑ 1.81x | 8 | 8m | 3d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.45% | 92.19% | 97.50% | 97.50% | 2930 ms | ↑ 1.24x | 20 | 2h 16m | 2d ago | 9m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.45% | 99.55% | 99.78% | 99.78% | 2375 ms | ↑ 1.61x | 15 | 11s | 4d ago | 9m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.44% | 99.89% | 63.47% | 63.47% | 910 ms | ↓ 0.69x | 2 | 10m | 2d ago | 6m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.44% | 97.95% | 96.35% | 96.35% | 3176 ms | ↑ 2.13x | 65 | 2m | 6d ago | 6m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.44% | 99.19% | 98.18% | 98.18% | 2886 ms | ↑ 2.46x | 27 | 45s | 36m ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.44% | 33.96% | 23.50% | 23.50% | 1846 ms | ↑ 1.44x | 4 | 4d 7h | 2d ago | 6m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.44% | 99.54% | 73.57% | 73.57% | 2548 ms | ↑ 3.50x | 15 | 38s | 17h ago | 6m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.44% | 24.60% | 10.53% | 10.53% | 1411 ms | → 0.96x | 4 | 5d 1h | 17h ago | 6m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.43% | 96.72% | 96.75% | 96.75% | 2890 ms | ↑ 1.36x | 25 | 31m | 2d ago | 5m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.43% | 98.01% | 98.32% | 98.32% | 2110 ms | ↑ 2.52x | 47 | 6m | 3d ago | 6m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.43% | 98.12% | 98.15% | 98.15% | 1177 ms | ↑ 1.41x | 42 | 5m | 2d ago | 5m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 99.43% | 74.69% | 74.77% | 74.77% | 2574 ms | ↓ 0.94x | 4 | 13h 23m | 23h ago | 5m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.28% | 99.79% | 99.94% | 99.94% | 3239 ms | ↑ 1.61x | 7 | 0s | 1d ago | 13m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.28% | 99.71% | 98.96% | 98.96% | 1672 ms | ↑ 1.76x | 7 | 4m | 7d ago | 13m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.27% | 97.92% | 98.55% | 98.55% | 2246 ms | ↓ 0.84x | 69 | 1m | 23h ago | 11m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.27% | 71.81% | 16.17% | 16.17% | 3549 ms | ↑ 1.54x | 6 | 1d 5h | 2d ago | 10m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.27% | 98.66% | 99.19% | 99.19% | 3061 ms | ↑ 1.09x | 21 | 13m | 13h ago | 9m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.27% | 14.73% | 3.32% | 3.32% | 2177 ms | → 1.01x | 4 | 5d 18h | 3d ago | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.25% | 99.70% | 42.78% | 42.78% | 1027 ms | ↓ 0.84x | 9 | 2m | 4d ago | 7m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.25% | 99.78% | 98.69% | 98.69% | 863 ms | ↑ 1.52x | 6 | 2m | 6h ago | 6m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.25% | 99.73% | 99.76% | 99.76% | 2010 ms | ↑ 2.19x | 7 | 6m | 4d ago | 6m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.25% | 24.54% | 21.45% | 21.45% | 1989 ms | ↑ 1.51x | 5 | 4d 1h | 35m ago | 6m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.25% | 98.65% | 85.87% | 85.87% | 2099 ms | ↑ 2.30x | 5 | 1h 28m | 35m ago | 6m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.10% | 99.87% | 99.95% | 99.95% | 2110 ms | ↑ 1.73x | 4 | 0s | 16h ago | 13m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.08% | 98.90% | 98.92% | 98.92% | 1429 ms | ↑ 1.12x | 11 | 26m | 9h ago | 9m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.08% | 23.74% | 5.35% | 5.35% | 2367 ms | ↓ 0.75x | 37 | 13h 7m | 3h ago | 9m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.08% | 98.88% | 99.09% | 99.09% | 3019 ms | ↑ 2.65x | 36 | 2m | 5d ago | 9m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.06% | 99.19% | 89.02% | 89.02% | 2758 ms | → 1.02x | 29 | 0s | 5h ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.06% | 99.70% | 99.73% | 99.73% | 2589 ms | ↑ 2.79x | 10 | 0s | 2d ago | 6m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.06% | 98.95% | 98.98% | 98.98% | 178 ms | ↓ 0.24x | 30 | 2m | 2d ago | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.06% | 88.17% | 88.20% | 88.20% | 3557 ms | ↑ 2.13x | 111 | 25m | 2d ago | 5m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (86)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.92% | 99.07% | 99.26% | 99.26% | 2108 ms | ↓ 0.80x | 33 | 18s | 16h ago | 13m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.87% | 99.17% | 85.06% | 85.06% | 925 ms | ↑ 1.37x | 30 | 0s | 3d ago | 6m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.87% | 98.87% | 87.95% | 87.95% | 1310 ms | ↓ 0.53x | 34 | 2m | 1h ago | 6m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.87% | 96.08% | 96.11% | 96.11% | 3246 ms | ↑ 3.45x | 33 | 28m | 2d ago | 5m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.74% | 97.80% | 97.91% | 97.91% | 3997 ms | → 1.01x | 20 | 0s | 1d ago | 13m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 98.56% | 99.73% | 90.36% | 90.36% | 934 ms | ↑ 1.50x | 4 | 25m | 3d ago | 13m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.49% | 27.80% | 27.83% | 27.83% | 977 ms | ↓ 0.66x | 9 | 1d 21h | 2d ago | 5m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 98.38% | 99.57% | 99.71% | 99.71% | 429 ms | ↓ 0.50x | 13 | 2m | 2d ago | 13m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.38% | 98.70% | 98.76% | 98.76% | 3619 ms | ↓ 0.92x | 33 | 6m | 16h ago | 12m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.20% | 77.02% | 82.60% | 82.60% | 1379 ms | ↓ 0.52x | 541 | 6m | 16h ago | 13m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.02% | 99.26% | 99.32% | 99.32% | 4210 ms | ↑ 2.23x | 10 | 2m | 2d ago | 14m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.02% | 97.66% | 99.45% | 99.45% | 4108 ms | ↑ 2.29x | 75 | 2m | 1d ago | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 98.02% | 89.91% | 92.16% | 92.16% | 4238 ms | ↓ 0.71x | 156 | 15m | 7d ago | 13m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.84% | 98.99% | 99.67% | 99.67% | 4118 ms | ↑ 1.34x | 37 | 0s | 1d ago | 13m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 97.84% | 99.49% | 99.88% | 99.88% | 4543 ms | ↑ 4.13x | 18 | 0s | 1d ago | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.75% | 78.58% | 83.88% | 83.88% | 4487 ms | ↓ 0.88x | 540 | 5m | 2d ago | 7m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 97.65% | 71.62% | 82.63% | 82.63% | 1099 ms | ↓ 0.18x | 545 | 10m | 2d ago | 12m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.57% | 98.20% | 44.90% | 44.90% | 1147 ms | ↑ 1.30x | 50 | 4m | 5d ago | 7m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.55% | 97.10% | 97.13% | 97.13% | 1834 ms | ↓ 0.84x | 72 | 4m | 2d ago | 5m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 97.48% | 14.39% | 30.21% | 30.21% | 657 ms | → 1.00x | 1 | 23d 2h | 30d ago | 13m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 97.48% | 14.38% | 76.30% | 76.30% | 2511 ms | → 1.00x | 1 | 23d 2h | 30d ago | 13m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 97.47% | 14.39% | 3.25% | 3.25% | 1756 ms | → 1.00x | 1 | 23d 2h | 30d ago | 12m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.46% | 79.33% | 83.42% | 83.42% | 4191 ms | ↓ 0.87x | 549 | 4m | 2d ago | 11m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.45% | 14.30% | 17.50% | 17.50% | 1699 ms | → 1.00x | 1 | 23d 2h | 30d ago | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 97.45% | 14.30% | 15.72% | 15.72% | 871 ms | → 1.00x | 1 | 23d 2h | 30d ago | 11m ago |
| [Crond](https://lmspeed.net/provider/crond) | 97.44% | 14.23% | 3.20% | 3.20% | 2491 ms | → 1.00x | 1 | 23d 2h | 30d ago | 9m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 97.38% | 87.33% | 41.40% | 41.40% | 408 ms | ↑ 1.20x | 19 | 4h 4m | 10d ago | 7m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 97.38% | 64.41% | 50.08% | 50.08% | 684 ms | ↓ 0.40x | 10 | 23h 42m | 1d ago | 6m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 97.38% | 13.99% | 3.22% | 3.22% | 916 ms | → 1.00x | 2 | 11d 13h | 21d ago | 7m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 97.38% | 13.96% | 3.85% | 3.85% | 1020 ms | → 1.00x | 1 | 23d 2h | 30d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 97.38% | 13.96% | 3.34% | 3.34% | 989 ms | → 1.00x | 1 | 23d 2h | 30d ago | 7m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 97.37% | 13.94% | 28.81% | 28.81% | 2497 ms | → 1.00x | 1 | 23d 2h | 30d ago | 6m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 97.37% | 13.94% | 9.74% | 9.74% | 200 ms | → 1.00x | 1 | 23d 2h | 30d ago | 6m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 97.30% | 99.10% | 99.68% | 99.68% | 612 ms | ↓ 0.79x | 12 | 18m | 6d ago | 13m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 97.30% | 14.37% | 3.27% | 3.27% | 1408 ms | → 1.00x | 2 | 11d 13h | 1d ago | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 97.25% | 14.19% | 27.97% | 27.97% | 818 ms | → 1.00x | 2 | 11d 13h | 4d ago | 9m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.18% | 90.56% | 64.57% | 64.57% | 1756 ms | ↑ 1.16x | 43 | 1h 14m | 5h ago | 6m ago |
| [xAI](https://lmspeed.net/provider/xai) | 97.12% | 14.34% | 3.24% | 3.24% | 1721 ms | → 1.00x | 3 | 7d 17h | 17h ago | 13m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.12% | 99.57% | 99.88% | 99.88% | 1451 ms | ↑ 1.35x | 2 | 2h 10m | 17h ago | 13m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 97.01% | 13.93% | 3.13% | 3.13% | 1107 ms | → 1.00x | 3 | 7d 17h | 3d ago | 8m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 96.99% | 76.52% | 55.02% | 55.02% | 4526 ms | → 0.99x | 568 | 5m | 2d ago | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.96% | 86.62% | 86.77% | 86.77% | 2174 ms | → 1.01x | 15 | 51m | 8h ago | 5m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 96.94% | 43.75% | 54.64% | 54.64% | 2836 ms | ↓ 0.76x | 594 | 27m | 16h ago | 13m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 96.94% | 98.67% | 96.12% | 96.12% | 2446 ms | ↑ 1.43x | 34 | 5m | 4d ago | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 96.80% | 99.11% | 73.15% | 73.15% | 2618 ms | ↑ 1.33x | 18 | 15m | 1d ago | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.80% | 78.12% | 78.87% | 78.87% | 4805 ms | ↑ 1.20x | 541 | 5m | 1d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 96.77% | 97.25% | 97.40% | 97.40% | 1431 ms | ↓ 0.81x | 2 | 2h 29m | 3d ago | 5m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 96.76% | 99.41% | 99.71% | 99.71% | 2650 ms | ↑ 2.27x | 6 | 50m | 17h ago | 13m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.04% | 77.10% | 83.16% | 83.16% | 4350 ms | ↓ 0.93x | 552 | 6m | 2d ago | 14m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.03% | 73.76% | 73.80% | 73.80% | 4499 ms | ↓ 0.90x | 362 | 10m | 1d ago | 5m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 95.86% | 82.34% | 84.88% | 84.88% | 4380 ms | ↑ 1.09x | 389 | 7m | 2d ago | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 95.86% | 94.92% | 98.67% | 98.67% | 3674 ms | ↑ 1.28x | 141 | 4m | 1d ago | 13m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 95.58% | 95.58% | 95.58% | 95.58% | 2299 ms | → 1.00x | 1 | 3h 45m | 1d ago | 5m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.49% | 77.67% | 75.57% | 75.57% | 4805 ms | → 0.97x | 558 | 5m | 2d ago | 6m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 95.26% | 89.79% | 46.87% | 46.87% | 2284 ms | ↑ 1.33x | 166 | 14m | 1d ago | 10m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 95.09% | 76.00% | 76.03% | 76.03% | 2276 ms | ↓ 0.61x | 491 | 8m | 2d ago | 5m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.92% | 95.53% | 94.62% | 94.62% | 3075 ms | ↑ 1.65x | 98 | 7m | 9h ago | 6m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 94.71% | 77.80% | 69.99% | 69.99% | 4490 ms | ↓ 0.94x | 579 | 4m | 1d ago | 10m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 94.54% | 13.85% | 3.12% | 3.12% | 898 ms | → 1.00x | 16 | 1d 11h | 10h ago | 10m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 94.51% | 13.79% | 3.10% | 3.10% | 3510 ms | → 1.00x | 16 | 1d 11h | 3d ago | 9m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 92.45% | 73.96% | 73.98% | 73.98% | 4588 ms | ↓ 0.83x | 620 | 7m | 55m ago | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 91.99% | 51.63% | 46.05% | 46.05% | 1217 ms | ↑ 1.24x | 15 | 20h 3m | 7h ago | 10m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 91.89% | 92.59% | 92.61% | 92.61% | 2708 ms | ↑ 2.60x | 92 | 22m | 1h ago | 5m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 91.35% | 96.86% | 98.93% | 98.93% | 4089 ms | ↑ 1.51x | 71 | 8m | 1d ago | 13m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 90.83% | 63.16% | 63.19% | 63.19% | 3062 ms | ↓ 0.72x | 263 | 13m | 44m ago | 14m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.26% | 15.65% | 4.12% | 4.12% | 4452 ms | ↓ 0.87x | 105 | 5h 1m | 1d ago | 6m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 89.09% | 89.09% | 89.09% | 89.09% | 2124 ms | → 1.00x | 1 | 13h 57m | 3d ago | 5m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 88.47% | 13.07% | 2.95% | 2.95% | 2234 ms | → 1.00x | 35 | 15h 59m | 14h ago | 12m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 88.01% | 22.77% | 22.87% | 22.87% | 2260 ms | → 0.97x | 15 | 1d 10h | 4d ago | 6m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 87.00% | 87.76% | 75.41% | 75.41% | 1667 ms | ↓ 0.76x | 237 | 11m | 1d ago | 9m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.60% | 17.09% | 17.09% | 17.09% | 2954 ms | → 1.00x | 49 | 7h 53m | 1d ago | 5m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 85.53% | 97.90% | 89.82% | 89.82% | 327 ms | ↓ 0.71x | 2 | 6h 55m | 15h ago | 6m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 84.49% | 68.66% | 15.47% | 15.47% | 4175 ms | ↑ 3.77x | 101 | 1h 48m | 1h ago | 10m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 79.28% | 93.51% | 95.97% | 95.97% | 4280 ms | ↓ 0.93x | 168 | 8m | 1d ago | 13m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 76.14% | 34.33% | 34.38% | 34.38% | 4013 ms | → 1.03x | 51 | 5h 10m | 4d ago | 5m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 75.59% | 51.60% | 61.66% | 61.66% | 4788 ms | ↓ 0.92x | 729 | 16m | 22h ago | 10m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 74.62% | 10.68% | 4.95% | 4.95% | 4480 ms | → 1.00x | 79 | 7h 14m | 17h ago | 6m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 69.40% | 10.17% | 3.15% | 3.15% | 4093 ms | → 1.00x | 3 | 8d 10h | 4d ago | 10m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 66.13% | 25.31% | 76.93% | 76.93% | 699 ms | ↑ 1.55x | 4 | 5d 8h | 2d ago | 13m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 61.26% | 9.04% | 6.51% | 6.51% | 2627 ms | → 1.00x | 2 | 12d 22h | 4d ago | 13m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 60.56% | 91.33% | 95.91% | 95.91% | 2409 ms | ↑ 3.32x | 6 | 15h 37m | 2d ago | 8m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 58.65% | 10.62% | 4.64% | 4.64% | 3821 ms | ↓ 0.73x | 157 | 3h 37m | 13h ago | 6m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 58.49% | 92.89% | 91.15% | 91.15% | 2049 ms | ↑ 3.07x | 44 | 1h 42m | 1d ago | 6m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 55.28% | 61.00% | 61.22% | 61.22% | 2535 ms | ↑ 1.50x | 7 | 1d 19h | 3d ago | 6m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 42.80% | 91.57% | 97.98% | 97.98% | 1200 ms | ↑ 1.15x | 10 | 10h 42m | 2d ago | 8m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 23.21% | 4.70% | 4.70% | 4.70% | 2345 ms | ↑ 1.12x | 2 | 13d 20h | 9d ago | 5m ago |

</details>

<details open>
<summary><strong>🔴 Down (170)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 78.75% | 68.80% | 68.89% | 68.89% | 1543 ms | → 0.96x | 8 | 8h 2m | 20h ago | 5m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 76.37% | 69.21% | 69.25% | 69.25% | 504 ms | ↓ 0.44x | 55 | 2h 24m | 24h ago | 5m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 63.00% | 56.41% | 56.56% | 56.56% | 2980 ms | → 0.99x | 3 | 21h 55m | 2d ago | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 52.45% | 55.98% | 56.01% | 56.01% | 1834 ms | ↑ 1.64x | 9 | 1d 11h | 3d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 51.89% | 91.66% | 91.69% | 91.69% | 1092 ms | ↓ 0.82x | 10 | 7h 16m | 3d ago | 5m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 39.74% | 90.00% | 96.88% | 96.88% | 3269 ms | ↑ 2.18x | 45 | 2h 6m | 4d ago | 9m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 37.57% | 34.83% | 34.99% | 34.99% | 3746 ms | ↑ 1.05x | 2 | 2d 6h | 4d ago | 5m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 29.37% | 17.05% | 17.03% | 17.03% | 1969 ms | → 1.00x | 3 | 2d 13h | 5d ago | 13m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 21.58% | 55.31% | 70.04% | 70.04% | 3905 ms | ↓ 0.55x | 617 | 24m | 14m ago | 14m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 3.20% | 83.52% | 64.55% | 64.55% | 2072 ms | ↓ 0.94x | 30 | 5h 51m | 7d ago | 6m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 2.47% | 35.20% | 35.29% | 35.29% | 3718 ms | ↑ 1.08x | 24 | 8h 3m | 7d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 2.47% | 5.11% | 5.27% | 5.27% | 577 ms | ↓ 0.79x | 2 | 3d 17h | 7d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 2.47% | 24.68% | 24.81% | 24.81% | 1443 ms | → 0.98x | 2 | 3d 17h | 7d ago | 5m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 2.46% | 78.36% | 78.41% | 78.41% | 627 ms | ↓ 0.84x | 7 | 23h 41m | 7d ago | 5m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 2.46% | 77.24% | 77.27% | 77.27% | 1815 ms | ↑ 3.06x | 3 | 2d 12h | 7d ago | 5m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 2.45% | 86.05% | 85.97% | 85.97% | 530 ms | → 0.96x | 2 | 3d 11h | 7d ago | 6m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 2.44% | 85.61% | 90.49% | 90.49% | 2832 ms | ↑ 1.18x | 16 | 10h 21m | 7d ago | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 2.44% | 84.95% | 88.04% | 88.04% | 3951 ms | ↑ 1.28x | 38 | 4h 22m | 7d ago | 6m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 2.44% | 63.73% | 30.73% | 30.73% | 2487 ms | ↑ 1.07x | 442 | 32m | 7d ago | 6m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 2.43% | 85.96% | 37.01% | 37.01% | 533 ms | → 0.97x | 3 | 2d 7h | 7d ago | 6m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 2.43% | 0.64% | 4.37% | 4.37% | 594 ms | ↓ 0.87x | 3 | 9d 22h | 7d ago | 6m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 2.43% | 86.01% | 96.85% | 96.85% | 2604 ms | ↑ 2.68x | 1 | 6d 21h | 7d ago | 8m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 2.43% | 84.54% | 35.10% | 35.10% | 392 ms | ↓ 0.83x | 50 | 3h 20m | 7d ago | 7m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 2.43% | 11.09% | 3.07% | 3.07% | 1717 ms | ↓ 0.81x | 4 | 6d 18h | 7d ago | 7m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 2.43% | 85.88% | 39.45% | 39.45% | 538 ms | ↑ 1.09x | 3 | 2d 7h | 7d ago | 6m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 2.43% | 28.75% | 6.47% | 6.47% | 879 ms | ↓ 0.92x | 3 | 7d 6h | 7d ago | 7m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 2.43% | 85.80% | 40.22% | 40.22% | 656 ms | ↑ 1.15x | 9 | 18h 23m | 7d ago | 7m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 2.43% | 84.71% | 85.39% | 85.39% | 2489 ms | ↑ 1.25x | 29 | 5h 49m | 7d ago | 8m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 2.43% | 85.86% | 96.58% | 96.58% | 2073 ms | ↑ 2.79x | 5 | 1d 9h | 7d ago | 8m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 2.43% | 85.83% | 96.64% | 96.64% | 2133 ms | ↑ 2.71x | 6 | 1d 4h | 7d ago | 8m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 2.38% | 0.59% | 0.14% | 0.14% | 50 ms | ↓ 0.43x | 2 | 14d 22h | 7d ago | 9m ago |
| [Groq](https://lmspeed.net/provider/groq) | 2.38% | 84.73% | 96.56% | 96.56% | 832 ms | ↑ 2.87x | 22 | 7h 39m | 7d ago | 9m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 2.37% | 83.18% | 96.21% | 96.21% | 769 ms | ↑ 1.36x | 80 | 2h 6m | 7d ago | 10m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 2.37% | 10.55% | 2.38% | 2.38% | 1139 ms | → 1.04x | 7 | 3d 21h | 7d ago | 10m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 2.37% | 0.59% | 0.14% | 0.14% | 1819 ms | → 0.96x | 2 | 14d 22h | 7d ago | 10m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 2.36% | 76.97% | 60.17% | 60.17% | 4281 ms | ↑ 2.10x | 46 | 4h 39m | 7d ago | 11m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 2.36% | 85.54% | 96.69% | 96.69% | 333 ms | ↓ 0.33x | 5 | 1d 9h | 7d ago | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 2.35% | 85.56% | 96.74% | 96.74% | 625 ms | ↑ 1.54x | 2 | 3d 11h | 7d ago | 12m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 2.35% | 83.88% | 95.48% | 95.48% | 728 ms | ↑ 1.22x | 52 | 3h 14m | 7d ago | 12m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 2.34% | 85.39% | 95.95% | 95.95% | 3341 ms | ↑ 1.87x | 7 | 23h 41m | 7d ago | 13m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 2.34% | 85.46% | 96.72% | 96.72% | 352 ms | ↑ 1.05x | 6 | 1d 4h | 7d ago | 13m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 2.34% | 84.76% | 89.33% | 89.33% | 142 ms | ↓ 0.14x | 32 | 5h 11m | 7d ago | 13m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 2.34% | 85.19% | 96.65% | 96.65% | 3435 ms | ↑ 5.25x | 16 | 10h 21m | 7d ago | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.34% | 0.56% | 45.34% | 45.34% | 404 ms | → 1.02x | 2 | 14d 22h | 7d ago | 13m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 2.34% | 85.46% | 96.53% | 96.53% | 2760 ms | ↑ 1.66x | 6 | 1d 4h | 7d ago | 13m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 2.34% | 66.42% | 66.44% | 66.44% | 1308 ms | ↑ 2.48x | 1 | 6d 22h | 7d ago | 13m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 2.34% | 63.95% | 90.18% | 90.18% | 3107 ms | → 0.96x | 321 | 46m | 7d ago | 13m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 2.34% | 84.01% | 95.32% | 95.32% | 4378 ms | ↑ 1.19x | 57 | 2h 55m | 7d ago | 13m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 2.34% | 8.98% | 14.52% | 14.52% | 3664 ms | ↑ 1.26x | 11 | 2d 12h | 7d ago | 14m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 2.34% | 85.47% | 96.66% | 96.66% | 2719 ms | ↑ 1.91x | 5 | 1d 9h | 7d ago | 14m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 2.26% | 74.09% | 76.98% | 76.98% | 2588 ms | ↑ 1.23x | 361 | 30m | 7d ago | 6m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 2.16% | 79.78% | 93.81% | 93.81% | 4063 ms | ↑ 1.51x | 182 | 57m | 7d ago | 13m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 1.83% | 81.27% | 94.20% | 94.20% | 3896 ms | ↑ 1.50x | 164 | 1h 1m | 7d ago | 8m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 1.83% | 65.58% | 92.19% | 92.19% | 3260 ms | ↑ 1.96x | 165 | 1h 36m | 7d ago | 9m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 1.80% | 64.25% | 91.76% | 91.76% | 3516 ms | ↑ 1.28x | 211 | 1h 16m | 7d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 1.44% | 67.79% | 86.37% | 86.37% | 4437 ms | ↑ 1.51x | 422 | 30m | 7d ago | 13m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 1.08% | 55.07% | 88.95% | 88.95% | 4405 ms | ↑ 1.35x | 347 | 54m | 7d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.56% | 54.10% | 39.28% | 39.28% | 4048 ms | ↑ 1.27x | 659 | 23m | 7d ago | 6m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.54% | 53.08% | 74.48% | 74.48% | 4930 ms | ↑ 1.83x | 649 | 24m | 7d ago | 14m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.54% | 72.08% | 76.61% | 76.61% | 3944 ms | ↑ 1.63x | 382 | 29m | 7d ago | 14m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.38% | 17.86% | 18.59% | 18.59% | 1722 ms | ↑ 1.21x | 500 | 1h 2m | 7d ago | 6m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.19% | 0.11% | 0.11% | 0.11% | 2848 ms | → 1.00x | 2 | 4d 22h | 2d ago | 7m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.18% | 50.33% | 68.77% | 68.77% | 1588 ms | ↓ 0.54x | 696 | 24m | 7d ago | 10m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 20.45% | 79.42% | 79.42% | — | — | 5 | 4d 22h | 25d ago | 9m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.65% | 6.65% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 17.47% | 3.93% | 3.93% | — | — | 2 | 12d 17h | 25d ago | 10m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 42.23% | 42.23% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 3.63% | 30.90% | 30.90% | — | — | 3 | 9d 16h | 28d ago | 6m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 52.81% | 72.82% | 72.82% | — | — | 264 | 1h 18m | 13d ago | 12m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 21h | 10d ago | 13m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.52% | 4.52% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 21.22% | 21.22% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 2.18% | 46.34% | 46.34% | — | — | 1 | 29d 10h | 29d ago | 6m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 24.16% | 34.98% | 34.98% | — | — | 2 | 11d 21h | 24d ago | 6m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 63.31% | 63.31% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.64% | 15.64% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 66.37% | 66.37% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.12% | 8.12% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 76.34% | 76.34% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 12.97% | 12.97% | 12.97% | — | — | 5 | 4d 14h | 23d ago | 5m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 17h | 23d ago | 5m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 34.93% | 44.97% | 44.97% | — | — | 5 | 4d 4h | 21d ago | 6m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 16.61% | 16.61% | 16.61% | — | — | 5 | 4d 2h | 20d ago | 5m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 61.37% | 61.37% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 36.12% | 85.46% | 85.46% | — | — | 2 | 10d 6h | 21d ago | 12m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 54.20% | 54.20% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 14m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 49.27% | 49.27% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 21h | 20d ago | 5m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 68.23% | 68.23% | — | — | 3 | 9d 24h | 19d ago | 9m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 22h | 10d ago | 13m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 81.48% | 85.47% | 85.47% | — | — | 13 | 14h 50m | 8d ago | 6m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 19h | 10d ago | 8m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 48.42% | 48.42% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 63.32% | 57.97% | 57.97% | — | — | 10 | 1d 8h | 14d ago | 6m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.56% | 0.13% | 0.13% | — | — | 18 | 1d 16h | 8d ago | 9m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 17h | 23d ago | 5m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 19h | 10d ago | 8m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 64.75% | 91.98% | 91.98% | — | — | 58 | 5h 3m | 12d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.19% | 4.19% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 50.35% | 50.35% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 11m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.00% | 33.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.10% | 28.10% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 12m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.36% | 20.36% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 57.71% | 57.71% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 64.30% | 64.30% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 56.99% | 90.25% | 90.25% | — | — | 1 | 15d 3h | 15d ago | 9m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 23h | 12d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 12m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 50.13% | 87.45% | 87.45% | — | — | 20 | 20h 5m | 17d ago | 13m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.08% | 23.08% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 13.28% | 79.59% | 79.59% | — | — | 2 | 13d 6h | 14d ago | 12m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 22.04% | 34.40% | 34.40% | — | — | 104 | 5h 18m | 11d ago | 6m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 14.93% | 10.26% | 10.26% | — | — | 1 | 26d 3h | 26d ago | 6m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 8.99% | 78.85% | 78.85% | — | — | 1 | 27d 16h | 28d ago | 13m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 20.87% | 21.21% | 21.21% | — | — | 2 | 12d 7h | 25d ago | 6m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 20h | 10d ago | 13m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.94% | 20.94% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 58.22% | 58.22% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 82.25% | 81.62% | 81.62% | — | — | 8 | 23h 37m | 8d ago | 5m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 48.28% | 48.28% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 57.63% | 90.43% | 90.43% | — | — | 2 | 7d 11h | 15d ago | 13m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |

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
