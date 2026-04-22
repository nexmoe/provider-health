# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**530 providers** — 216 🟢 operational · 138 🟡 degraded · 176 🔴 down · 0 ⚫ unknown

_Updated 2026-04-22 05:30 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (216)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2076 ms | → 1.00x | 0 | — | — | 6m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 100.00% | 100.00% | 174 ms | → 1.00x | 0 | — | — | 6m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2447 ms | → 1.00x | 0 | — | — | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 3022 ms | → 1.00x | 0 | — | — | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 366 ms | → 1.00x | 0 | — | — | 6m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3191 ms | → 1.00x | 0 | — | — | 6m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 502 ms | → 1.00x | 0 | — | — | 6m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2034 ms | → 1.00x | 0 | — | — | 6m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 746 ms | → 1.00x | 0 | — | — | 6m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 3151 ms | → 1.00x | 0 | — | — | 6m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3204 ms | → 1.00x | 0 | — | — | 6m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1304 ms | → 1.00x | 0 | — | — | 6m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 122 ms | → 1.00x | 0 | — | — | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.87% | 99.93% | 90.71% | 90.71% | 1443 ms | ↑ 2.32x | 2 | 0s | 19d ago | 20m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.87% | 99.80% | 99.94% | 99.94% | 2369 ms | ↑ 2.34x | 7 | 0s | 13d ago | 19m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.87% | 99.95% | 99.99% | 99.99% | 753 ms | → 1.05x | 1 | 0s | 19d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.87% | 99.10% | 58.31% | 58.31% | 977 ms | ↓ 0.86x | 31 | 1m | 12d ago | 20m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.87% | 99.93% | 99.99% | 99.99% | 446 ms | ↓ 0.61x | 2 | 0s | 8d ago | 20m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.87% | 99.88% | 99.96% | 99.96% | 894 ms | ↑ 1.09x | 4 | 0s | 13d ago | 19m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.87% | 99.93% | 99.81% | 99.81% | 930 ms | ↑ 1.12x | 2 | 0s | 9d ago | 19m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.87% | 99.98% | 99.98% | 99.98% | 863 ms | ↑ 1.07x | 0 | — | — | 19m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.87% | 99.08% | 99.51% | 99.51% | 1247 ms | ↑ 1.21x | 10 | 26m | 9d ago | 19m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.87% | 99.73% | 99.63% | 99.63% | 1622 ms | ↑ 1.09x | 10 | 0s | 13d ago | 19m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.87% | 98.08% | 99.39% | 99.39% | 966 ms | → 1.03x | 60 | 3m | 8d ago | 19m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.87% | 99.48% | 99.68% | 99.68% | 775 ms | ↓ 0.77x | 10 | 10m | 9d ago | 19m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.87% | 99.95% | 99.70% | 99.70% | 1845 ms | ↑ 1.46x | 1 | 0s | 28d ago | 19m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.87% | 99.95% | 99.93% | 99.93% | 828 ms | ↑ 1.33x | 1 | 0s | 15d ago | 18m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.87% | 99.78% | 99.80% | 99.80% | 1925 ms | ↑ 1.31x | 7 | 1m | 7d ago | 19m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.87% | 99.90% | 99.90% | 99.90% | 1312 ms | ↑ 1.15x | 3 | 0s | 11d ago | 18m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.87% | 99.93% | 99.94% | 99.94% | 1611 ms | ↑ 1.26x | 2 | 0s | 8d ago | 18m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.87% | 99.78% | 99.71% | 99.71% | 2580 ms | ↑ 1.15x | 8 | 0s | 8d ago | 19m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.87% | 99.88% | 99.70% | 99.70% | 1644 ms | ↑ 1.27x | 3 | 3m | 13d ago | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.87% | 99.88% | 99.91% | 99.91% | 1612 ms | → 1.03x | 4 | 0s | 15d ago | 19m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.87% | 99.13% | 99.76% | 99.76% | 1580 ms | → 0.99x | 34 | 0s | 12d ago | 19m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.87% | 99.95% | 99.97% | 99.97% | 1472 ms | ↑ 1.35x | 1 | 0s | 28d ago | 19m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.87% | 99.85% | 99.93% | 99.93% | 518 ms | ↑ 1.53x | 5 | 0s | 8d ago | 18m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.87% | 99.97% | 99.34% | 99.34% | 1043 ms | ↑ 1.40x | 0 | — | — | 18m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.87% | 99.95% | 99.99% | 99.99% | 1194 ms | ↑ 1.54x | 1 | 0s | 12d ago | 18m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.87% | 99.65% | 99.83% | 99.83% | 1620 ms | ↑ 1.25x | 9 | 4m | 11d ago | 17m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.87% | 97.34% | 99.33% | 99.33% | 1869 ms | ↑ 1.49x | 79 | 3m | 12d ago | 16m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.87% | 99.97% | 99.98% | 99.98% | 2223 ms | ↑ 1.47x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.87% | 99.70% | 98.81% | 98.81% | 1003 ms | ↑ 1.42x | 4 | 18m | 20d ago | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.87% | 93.76% | 93.81% | 93.81% | 1966 ms | ↑ 1.34x | 1 | 18h 20m | 15d ago | 6m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.87% | 99.87% | 99.93% | 99.93% | 1403 ms | ↑ 1.09x | 1 | 0s | 8d ago | 6m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.87% | 97.92% | 98.00% | 98.00% | 1788 ms | ↑ 1.13x | 3 | 1h 20m | 11d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.87% | 99.91% | 100.00% | 100.00% | 605 ms | → 0.96x | 0 | — | — | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.87% | 99.94% | 100.00% | 100.00% | 1100 ms | ↑ 1.35x | 0 | — | — | 6m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.87% | 92.00% | 92.10% | 92.10% | 243 ms | ↑ 1.13x | 1 | 13h 50m | 10d ago | 6m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.87% | 99.87% | 99.93% | 99.93% | 1240 ms | ↑ 1.38x | 1 | 0s | 8d ago | 6m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.87% | 94.50% | 94.59% | 94.59% | 1842 ms | → 1.03x | 1 | 9h 60m | 10d ago | 6m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.87% | 91.55% | 91.60% | 91.60% | 2010 ms | ↑ 1.20x | 1 | 1d 1h | 15d ago | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.84% | 99.84% | 100.00% | 100.00% | 866 ms | → 1.00x | 0 | — | — | 19m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.74% | 31.62% | 7.77% | 7.77% | 1767 ms | → 1.01x | 2 | 9d 13h | 4d ago | 20m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.74% | 99.28% | 99.54% | 99.54% | 1082 ms | ↑ 1.06x | 24 | 2m | 7d ago | 19m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.74% | 99.93% | 99.90% | 99.90% | 1134 ms | ↑ 1.15x | 2 | 0s | 2d ago | 19m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.74% | 99.15% | 99.49% | 99.49% | 957 ms | ↑ 1.17x | 23 | 4m | 7d ago | 19m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.74% | 99.43% | 99.44% | 99.44% | 1912 ms | ↑ 1.06x | 22 | 0s | 3d ago | 19m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.74% | 99.83% | 99.89% | 99.89% | 1304 ms | ↑ 1.54x | 6 | 0s | 5d ago | 18m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.74% | 99.92% | 96.88% | 96.88% | 2747 ms | ↑ 1.29x | 2 | 0s | 4d ago | 18m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.74% | 99.90% | 99.96% | 99.96% | 1659 ms | ↑ 1.16x | 3 | 0s | 4d ago | 18m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.74% | 99.60% | 97.81% | 97.81% | 2003 ms | ↑ 1.14x | 14 | 43s | 4d ago | 18m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.74% | 99.87% | 98.90% | 98.90% | 2256 ms | ↑ 1.68x | 4 | 0s | 4d ago | 18m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.74% | 99.82% | 99.91% | 99.91% | 1241 ms | → 1.02x | 6 | 0s | 6d ago | 17m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.74% | 99.67% | 99.84% | 99.84% | 1261 ms | ↑ 1.54x | 6 | 10m | 1d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.74% | 99.92% | 99.91% | 99.91% | 1342 ms | ↑ 1.05x | 2 | 0s | 6d ago | 17m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.74% | 99.62% | 99.70% | 99.70% | 1335 ms | ↑ 1.13x | 7 | 10m | 6d ago | 17m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.74% | 99.82% | 98.64% | 98.64% | 2031 ms | ↑ 1.71x | 5 | 2m | 5d ago | 17m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.74% | 95.59% | 96.92% | 96.92% | 3130 ms | ↑ 1.56x | 7 | 3h 60m | 6d ago | 17m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.74% | 99.87% | 50.89% | 50.89% | 3244 ms | ↑ 1.61x | 4 | 0s | 7d ago | 17m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.74% | 99.72% | 99.42% | 99.42% | 1964 ms | ↑ 1.43x | 10 | 0s | 6d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.74% | 99.92% | 32.60% | 32.60% | 2296 ms | ↓ 0.88x | 2 | 0s | 6d ago | 16m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.74% | 99.95% | 99.94% | 99.94% | 2561 ms | ↑ 1.44x | 1 | 0s | 1d ago | 16m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.74% | 59.15% | 14.48% | 14.48% | 1387 ms | ↑ 1.09x | 3 | 3d 19h | 4d ago | 15m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.74% | 99.82% | 99.86% | 99.86% | 1396 ms | ↑ 1.26x | 6 | 0s | 5d ago | 15m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.74% | 97.49% | 96.52% | 96.52% | 2003 ms | ↓ 0.83x | 88 | 1m | 4d ago | 15m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.74% | 98.14% | 99.52% | 99.52% | 1277 ms | ↑ 1.19x | 61 | 2m | 4d ago | 14m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.74% | 99.80% | 99.85% | 99.85% | 2292 ms | ↑ 1.40x | 7 | 0s | 4d ago | 10m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.74% | 99.92% | 98.61% | 98.61% | 695 ms | ↑ 1.72x | 2 | 0s | 4d ago | 8m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.74% | 99.75% | 90.93% | 90.93% | 970 ms | ↑ 1.22x | 9 | 0s | 4d ago | 8m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.74% | 99.75% | 48.52% | 48.52% | 2282 ms | ↑ 1.25x | 9 | 0s | 4d ago | 8m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.74% | 99.92% | 46.33% | 46.33% | 1083 ms | ↑ 2.28x | 2 | 0s | 4d ago | 8m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.74% | 99.90% | 99.80% | 99.80% | 743 ms | ↑ 1.22x | 3 | 0s | 7d ago | 9m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.73% | 99.62% | 55.15% | 55.15% | 1107 ms | ↓ 0.86x | 12 | 2m | 6d ago | 8m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.73% | 99.92% | 57.09% | 57.09% | 1679 ms | ↑ 1.85x | 2 | 0s | 4d ago | 8m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.73% | 99.50% | 95.67% | 95.67% | 1170 ms | ↑ 1.13x | 18 | 34s | 4d ago | 8m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.73% | 99.87% | 62.23% | 62.23% | 1574 ms | → 1.01x | 4 | 0s | 4d ago | 8m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.73% | 98.99% | 99.44% | 99.44% | 1862 ms | ↑ 1.97x | 18 | 12m | 4d ago | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.73% | 99.82% | 99.02% | 99.02% | 1542 ms | ↑ 1.15x | 6 | 0s | 4d ago | 8m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.73% | 99.87% | 98.67% | 98.67% | 1332 ms | ↑ 1.71x | 4 | 0s | 4d ago | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.73% | 99.32% | 75.95% | 75.95% | 2068 ms | ↑ 1.87x | 18 | 4m | 4d ago | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.73% | 99.90% | 66.82% | 66.82% | 1797 ms | ↑ 1.36x | 3 | 0s | 4d ago | 8m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.73% | 99.34% | 84.46% | 84.46% | 1542 ms | ↑ 1.95x | 25 | 0s | 4d ago | 8m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.73% | 98.66% | 98.04% | 98.04% | 1560 ms | ↑ 1.33x | 17 | 21m | 4d ago | 8m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.73% | 99.85% | 85.65% | 85.65% | 2648 ms | ↑ 2.00x | 5 | 0s | 4d ago | 8m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.73% | 99.95% | 90.44% | 90.44% | 2640 ms | ↑ 2.57x | 1 | 0s | 4d ago | 8m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.73% | 99.87% | 97.70% | 97.70% | 1650 ms | ↑ 1.65x | 4 | 0s | 4d ago | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.73% | 99.19% | 98.91% | 98.91% | 3011 ms | ↑ 1.39x | 30 | 20s | 4d ago | 8m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.73% | 99.52% | 71.60% | 71.60% | 856 ms | ↑ 1.42x | 11 | 6m | 4d ago | 8m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.73% | 99.95% | 80.35% | 80.35% | 1297 ms | ↑ 1.56x | 1 | 0s | 4d ago | 8m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.73% | 99.92% | 99.97% | 99.97% | 2938 ms | ↑ 1.59x | 2 | 0s | 4d ago | 8m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.73% | 99.62% | 98.28% | 98.28% | 2050 ms | ↑ 1.20x | 14 | 0s | 4d ago | 8m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.73% | 99.77% | 83.18% | 83.18% | 1792 ms | ↑ 1.25x | 5 | 6m | 4d ago | 8m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.73% | 99.55% | 98.05% | 98.05% | 1880 ms | ↑ 1.10x | 11 | 5m | 4d ago | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.73% | 96.92% | 96.22% | 96.22% | 1617 ms | ↑ 1.71x | 29 | 32m | 4d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.73% | 99.90% | 94.52% | 94.52% | 1930 ms | ↑ 2.20x | 3 | 0s | 4d ago | 8m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.73% | 99.27% | 98.11% | 98.11% | 1892 ms | ↑ 1.59x | 26 | 47s | 4d ago | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.73% | 97.98% | 96.87% | 96.87% | 1282 ms | → 1.01x | 13 | 51m | 4d ago | 7m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.73% | 99.42% | 98.15% | 98.15% | 1665 ms | ↑ 1.48x | 14 | 6m | 4d ago | 8m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.73% | 99.72% | 99.75% | 99.75% | 2122 ms | ↑ 1.28x | 9 | 1m | 4d ago | 7m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.73% | 99.02% | 81.36% | 81.36% | 1459 ms | ↑ 2.16x | 30 | 3m | 4d ago | 8m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.73% | 99.77% | 97.99% | 97.99% | 1748 ms | ↑ 2.65x | 7 | 1m | 4d ago | 8m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.73% | 98.97% | 99.04% | 99.04% | 1917 ms | ↑ 1.53x | 24 | 7m | 4d ago | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.73% | 96.90% | 96.93% | 96.93% | 2146 ms | ↑ 1.76x | 4 | 3h 45m | 4d ago | 7m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.73% | 99.79% | 99.82% | 99.82% | 1376 ms | ↑ 1.33x | 6 | 0s | 4d ago | 7m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.73% | 99.91% | 99.94% | 99.94% | 2082 ms | ↑ 2.04x | 2 | 0s | 4d ago | 7m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.73% | 99.79% | 99.82% | 99.82% | 2191 ms | ↑ 2.24x | 6 | 0s | 4d ago | 7m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.73% | 90.13% | 90.16% | 90.16% | 3085 ms | ↑ 1.27x | 6 | 8h 38m | 4d ago | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.73% | 98.97% | 99.00% | 99.00% | 2752 ms | ↑ 1.53x | 26 | 2m | 4d ago | 7m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.73% | 96.89% | 96.92% | 96.92% | 1558 ms | ↑ 2.43x | 10 | 1h 38m | 4d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.73% | 84.74% | 84.77% | 84.77% | 1356 ms | ↑ 1.30x | 2 | 2d 2h | 4d ago | 7m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.73% | 99.64% | 99.67% | 99.67% | 1575 ms | ↑ 1.21x | 8 | 4m | 4d ago | 7m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.73% | 94.79% | 94.84% | 94.84% | 1388 ms | ↑ 1.48x | 3 | 5h 3m | 7d ago | 6m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.73% | 48.48% | 48.55% | 48.55% | 1255 ms | → 1.00x | 2 | 3d 2h | 7d ago | 6m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.73% | 99.66% | 99.73% | 99.73% | 1464 ms | ↑ 1.16x | 4 | 0s | 6d ago | 6m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.73% | 99.44% | 99.53% | 99.53% | 236 ms | ↓ 0.35x | 4 | 3m | 7d ago | 6m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.73% | 99.84% | 99.92% | 99.92% | 1680 ms | ↑ 1.17x | 1 | 0s | 6d ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.73% | 90.54% | 90.61% | 90.61% | 1894 ms | → 1.02x | 4 | 5h 15m | 6d ago | 6m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.73% | 99.82% | 99.91% | 99.91% | 1135 ms | ↑ 1.10x | 1 | 0s | 2d ago | 6m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.61% | 99.88% | 90.20% | 90.20% | 859 ms | ↑ 1.76x | 3 | 7m | 12h ago | 18m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.61% | 99.85% | 99.64% | 99.64% | 1348 ms | ↑ 1.33x | 4 | 2m | 5d ago | 19m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.61% | 99.63% | 99.66% | 99.66% | 1655 ms | → 1.04x | 10 | 0s | 6d ago | 19m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.61% | 99.93% | 99.91% | 99.91% | 1793 ms | ↑ 1.70x | 2 | 0s | 4d ago | 18m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.61% | 99.47% | 99.79% | 99.79% | 1222 ms | ↑ 1.10x | 20 | 0s | 6d ago | 17m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.61% | 99.22% | 34.72% | 34.72% | 2211 ms | ↑ 1.11x | 18 | 7m | 4d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.61% | 98.52% | 98.31% | 98.31% | 2568 ms | ↑ 1.24x | 56 | 21s | 4d ago | 17m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.61% | 99.92% | 99.72% | 99.72% | 2349 ms | ↑ 1.39x | 2 | 0s | 4d ago | 14m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.61% | 98.87% | 98.92% | 98.92% | 1178 ms | ↓ 0.78x | 15 | 19m | 2d ago | 15m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.61% | 99.85% | 99.83% | 99.83% | 1856 ms | ↑ 1.17x | 5 | 0s | 4d ago | 15m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.60% | 98.62% | 97.60% | 97.60% | 1804 ms | ↑ 1.82x | 26 | 11m | 4d ago | 10m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.60% | 98.49% | 95.15% | 95.15% | 639 ms | ↓ 0.75x | 54 | 55s | 4d ago | 8m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.60% | 99.92% | 49.70% | 49.70% | 1905 ms | ↑ 2.18x | 2 | 0s | 4d ago | 8m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.60% | 99.87% | 58.99% | 58.99% | 920 ms | ↑ 1.55x | 4 | 0s | 4d ago | 8m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.60% | 99.47% | 85.36% | 85.36% | 3057 ms | ↑ 1.38x | 9 | 12m | 4d ago | 8m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.60% | 23.61% | 18.57% | 18.57% | 1375 ms | → 1.04x | 3 | 7d 1h | 4d ago | 8m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.60% | 99.87% | 99.85% | 99.85% | 1979 ms | ↑ 1.39x | 4 | 0s | 4d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.60% | 99.72% | 97.27% | 97.27% | 1584 ms | ↑ 2.20x | 10 | 0s | 4d ago | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.60% | 96.62% | 96.66% | 96.66% | 2291 ms | ↑ 1.27x | 5 | 2h 32m | 4d ago | 7m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.60% | 96.41% | 96.44% | 96.44% | 1605 ms | ↑ 1.12x | 24 | 31m | 4d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.60% | 95.79% | 95.83% | 95.83% | 2511 ms | ↑ 2.09x | 31 | 28m | 4d ago | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.60% | 97.07% | 97.11% | 97.11% | 2476 ms | ↑ 1.50x | 6 | 2h 13m | 4d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.60% | 95.82% | 95.85% | 95.85% | 2108 ms | ↑ 1.07x | 48 | 18m | 4d ago | 7m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.60% | 99.26% | 99.30% | 99.30% | 1349 ms | ↑ 1.06x | 8 | 16m | 4d ago | 7m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.60% | 99.87% | 99.90% | 99.90% | 965 ms | ↑ 1.10x | 4 | 0s | 4d ago | 7m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.60% | 96.25% | 96.30% | 96.30% | 1485 ms | ↑ 1.24x | 3 | 4h 10m | 5d ago | 6m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.60% | 96.85% | 96.92% | 96.92% | 1347 ms | ↑ 1.08x | 5 | 1h 26m | 1d ago | 6m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.60% | 94.11% | 94.17% | 94.17% | 1515 ms | ↑ 1.19x | 13 | 1h 4m | 5d ago | 6m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.60% | 95.87% | 95.93% | 95.93% | 1376 ms | ↑ 1.35x | 2 | 6h 15m | 4d ago | 6m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.60% | 86.42% | 86.52% | 86.52% | 1000 ms | → 1.02x | 3 | 11h 20m | 5d ago | 6m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.48% | 96.90% | 97.55% | 97.55% | 3019 ms | ↑ 1.46x | 118 | 25s | 3d ago | 19m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.48% | 98.85% | 99.56% | 99.56% | 2148 ms | ↑ 1.31x | 42 | 43s | 4d ago | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.48% | 99.00% | 98.83% | 98.83% | 2793 ms | ↑ 1.20x | 38 | 16s | 4d ago | 18m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.48% | 99.75% | 99.61% | 99.61% | 2554 ms | ↑ 1.72x | 9 | 0s | 2d ago | 18m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.48% | 96.29% | 98.54% | 98.54% | 1975 ms | ↓ 0.83x | 132 | 1m | 5d ago | 17m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.48% | 92.72% | 97.46% | 97.46% | 2865 ms | ↑ 1.25x | 18 | 2h 31m | 4d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.48% | 99.82% | 99.83% | 99.83% | 2599 ms | ↑ 1.55x | 6 | 0s | 4d ago | 14m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.48% | 99.70% | 99.55% | 99.55% | 2656 ms | → 0.98x | 11 | 0s | 4d ago | 15m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.48% | 99.85% | 99.94% | 99.94% | 2049 ms | ↑ 2.71x | 4 | 42s | 4d ago | 15m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.47% | 99.77% | 41.58% | 41.58% | 1476 ms | ↑ 1.13x | 8 | 0s | 2d ago | 9m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.47% | 99.27% | 52.66% | 52.66% | 1582 ms | ↑ 1.18x | 20 | 4m | 17h ago | 8m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.47% | 99.75% | 50.19% | 50.19% | 1768 ms | → 0.99x | 9 | 0s | 4d ago | 8m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.47% | 98.41% | 57.49% | 57.49% | 904 ms | ↑ 1.59x | 43 | 4m | 4d ago | 8m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.47% | 99.62% | 74.40% | 74.40% | 1860 ms | ↑ 2.30x | 13 | 45s | 4d ago | 8m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.47% | 99.70% | 99.71% | 99.71% | 1379 ms | ↑ 1.35x | 9 | 2m | 3d ago | 8m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.47% | 71.34% | 57.14% | 57.14% | 2223 ms | ↑ 1.58x | 9 | 20h 52m | 4d ago | 8m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.47% | 97.99% | 98.02% | 98.02% | 1672 ms | ↓ 0.91x | 40 | 5m | 4d ago | 7m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.47% | 99.69% | 99.72% | 99.72% | 2370 ms | ↑ 2.18x | 8 | 1m | 4d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.47% | 99.81% | 99.85% | 99.85% | 1822 ms | ↑ 1.27x | 4 | 0s | 4d ago | 7m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.46% | 91.23% | 91.30% | 91.30% | 3159 ms | ↓ 0.84x | 26 | 42m | 5d ago | 6m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.46% | 95.63% | 95.68% | 95.68% | 1838 ms | ↑ 1.20x | 5 | 2h 40m | 5d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.39% | 99.39% | 99.70% | 99.70% | 2626 ms | → 1.00x | 1 | 0s | 4d ago | 6m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.36% | 99.53% | 99.61% | 99.61% | 3392 ms | ↑ 1.34x | 5 | 0s | 18h ago | 20m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.36% | 99.70% | 99.72% | 99.72% | 823 ms | ↓ 0.85x | 10 | 37s | 2d ago | 19m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.36% | 99.63% | 98.87% | 98.87% | 2554 ms | ↑ 1.18x | 13 | 47s | 3d ago | 19m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.36% | 99.80% | 99.72% | 99.72% | 2852 ms | ↑ 1.40x | 7 | 0s | 3d ago | 19m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.35% | 98.79% | 99.19% | 99.19% | 2542 ms | → 1.04x | 19 | 15m | 4d ago | 14m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 99.35% | 98.79% | 98.83% | 98.83% | 2645 ms | ↑ 1.26x | 44 | 41s | 20h ago | 14m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.34% | 97.58% | 97.47% | 97.47% | 735 ms | ↑ 1.40x | 16 | 49m | 4d ago | 10m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.34% | 95.64% | 96.08% | 96.08% | 2100 ms | ↑ 1.16x | 84 | 11m | 4d ago | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.34% | 99.47% | 98.41% | 98.41% | 683 ms | ↑ 1.11x | 16 | 2m | 5d ago | 8m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.34% | 99.85% | 99.83% | 99.83% | 2043 ms | ↑ 1.19x | 4 | 2m | 3d ago | 8m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.34% | 99.34% | 99.50% | 99.50% | 2660 ms | → 1.00x | 3 | 0s | 4d ago | 14m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.33% | 99.82% | 90.66% | 90.66% | 3127 ms | ↑ 1.23x | 6 | 0s | 4d ago | 8m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.33% | 99.60% | 72.53% | 72.53% | 2030 ms | ↑ 2.50x | 14 | 40s | 3d ago | 8m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.33% | 27.00% | 14.66% | 14.66% | 2354 ms | ↑ 1.20x | 10 | 2d | 4d ago | 8m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.33% | 93.14% | 95.10% | 95.10% | 1976 ms | ↑ 1.55x | 10 | 4h 21m | 4d ago | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.33% | 99.52% | 98.34% | 98.34% | 1458 ms | ↑ 1.13x | 18 | 0s | 4d ago | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.33% | 33.67% | 27.59% | 27.59% | 2575 ms | → 1.03x | 5 | 3d 16h | 3d ago | 7m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.33% | 96.27% | 96.31% | 96.31% | 2282 ms | ↑ 1.10x | 18 | 42m | 3d ago | 7m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.33% | 73.63% | 73.70% | 73.70% | 1458 ms | ↑ 1.10x | 4 | 15h 20m | 4d ago | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.33% | 95.01% | 95.05% | 95.05% | 2063 ms | ↑ 1.10x | 9 | 1h 47m | 4d ago | 6m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.23% | 99.73% | 98.94% | 98.94% | 1394 ms | ↑ 1.66x | 7 | 4m | 3d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.21% | 98.90% | 99.07% | 99.07% | 2409 ms | ↑ 1.52x | 38 | 2m | 1d ago | 14m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.21% | 98.54% | 34.57% | 34.57% | 754 ms | → 1.04x | 47 | 2m | 6d ago | 9m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.20% | 99.75% | 74.11% | 74.11% | 2814 ms | ↑ 1.41x | 8 | 1m | 4d ago | 8m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.20% | 99.82% | 99.84% | 99.84% | 2225 ms | ↑ 3.27x | 5 | 2m | 4d ago | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.20% | 98.54% | 98.63% | 98.63% | 2369 ms | ↑ 2.13x | 33 | 7m | 4d ago | 7m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.20% | 63.73% | 54.55% | 54.55% | 2186 ms | ↑ 2.03x | 5 | 1d 24h | 4d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.20% | 99.61% | 99.66% | 99.66% | 1424 ms | ↑ 1.26x | 7 | 0s | 5d ago | 6m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.20% | 91.09% | 91.14% | 91.14% | 1919 ms | → 0.98x | 76 | 15m | 5d ago | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.09% | 41.19% | 45.21% | 45.21% | 1214 ms | ↑ 1.16x | 10 | 1d 15h | 21h ago | 16m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.07% | 99.60% | 98.94% | 98.94% | 1736 ms | ↑ 1.12x | 15 | 0s | 3d ago | 8m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.07% | 95.36% | 94.76% | 94.76% | 2631 ms | ↑ 1.31x | 114 | 6m | 3d ago | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.06% | 93.36% | 94.03% | 94.03% | 2351 ms | ↑ 2.00x | 22 | 1h 49m | 4d ago | 7m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.06% | 99.60% | 97.46% | 97.46% | 2460 ms | ↑ 2.22x | 14 | 43s | 4d ago | 7m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.06% | 99.52% | 99.57% | 99.57% | 1031 ms | ↑ 1.08x | 6 | 10m | 3d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.06% | 99.06% | 99.37% | 99.37% | 3107 ms | → 1.00x | 2 | 0s | 3d ago | 6m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (138)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Meta API](https://lmspeed.net/provider/meta-api) | 98.97% | 99.68% | 99.75% | 99.75% | 2972 ms | ↑ 1.47x | 9 | 3m | 4d ago | 18m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.96% | 97.87% | 99.12% | 99.12% | 3126 ms | ↑ 2.08x | 65 | 3m | 3d ago | 17m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.93% | 93.09% | 71.38% | 71.38% | 2641 ms | ↑ 1.55x | 80 | 24m | 3d ago | 8m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 98.93% | 99.25% | 99.34% | 99.34% | 520 ms | → 1.00x | 7 | 0s | 5d ago | 6m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.93% | 99.12% | 99.23% | 99.23% | 840 ms | ↑ 1.10x | 2 | 25m | 4d ago | 6m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.84% | 98.05% | 99.50% | 99.50% | 3030 ms | ↑ 2.21x | 65 | 2m | 3d ago | 19m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.84% | 99.40% | 99.11% | 99.11% | 2428 ms | ↑ 2.16x | 22 | 27s | 4d ago | 18m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.84% | 99.58% | 86.83% | 86.83% | 2436 ms | ↑ 2.14x | 15 | 40s | 4d ago | 18m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.80% | 97.75% | 97.77% | 97.77% | 898 ms | ↑ 2.07x | 8 | 1h 39m | 3d ago | 7m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.71% | 99.15% | 99.26% | 99.26% | 2225 ms | → 0.96x | 32 | 19s | 1h ago | 19m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.68% | 97.31% | 98.76% | 98.76% | 2348 ms | ↑ 1.97x | 66 | 6m | 4d ago | 10m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 98.68% | 96.98% | 99.22% | 99.22% | 1708 ms | ↑ 1.30x | 82 | 5m | 5d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.67% | 99.17% | 88.58% | 88.58% | 3518 ms | ↑ 1.18x | 32 | 0s | 4d ago | 8m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.59% | 95.98% | 96.57% | 96.57% | 3517 ms | → 0.98x | 145 | 1m | 19h ago | 19m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.59% | 99.10% | 98.45% | 98.45% | 3931 ms | ↑ 1.34x | 35 | 0s | 3d ago | 20m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.59% | 99.58% | 90.50% | 90.50% | 3094 ms | ↑ 3.89x | 15 | 40s | 4d ago | 20m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 98.56% | 97.49% | 81.18% | 81.18% | 3473 ms | ↓ 0.87x | 95 | 25s | 4d ago | 15m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.56% | 99.55% | 99.79% | 99.79% | 2770 ms | ↑ 1.43x | 16 | 10s | 2d ago | 15m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.53% | 98.13% | 98.21% | 98.21% | 2272 ms | ↑ 2.35x | 47 | 6m | 2d ago | 7m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.45% | 99.60% | 99.90% | 99.90% | 3200 ms | ↑ 1.85x | 12 | 2m | 4d ago | 18m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.44% | 99.50% | 99.70% | 99.70% | 2999 ms | ↑ 1.19x | 16 | 2m | 3d ago | 16m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.39% | 90.62% | 90.67% | 90.67% | 1191 ms | ↓ 0.90x | 54 | 25m | 3d ago | 6m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.33% | 99.30% | 99.72% | 99.72% | 3130 ms | ↑ 1.14x | 27 | 0s | 3d ago | 19m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.32% | 98.17% | 90.48% | 90.48% | 2118 ms | → 1.02x | 66 | 55s | 3d ago | 18m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.28% | 98.28% | 98.28% | 98.28% | 989 ms | → 1.00x | 1 | 0s | 8h ago | 6m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 98.21% | 98.21% | 98.37% | 98.37% | 3320 ms | → 1.00x | 9 | 1m | 4d ago | 18m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.14% | 98.61% | 87.47% | 87.47% | 2415 ms | ↑ 1.09x | 41 | 3m | 2d ago | 8m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 98.12% | 87.63% | 87.73% | 87.73% | 928 ms | → 1.01x | 7 | 4h 36m | 4d ago | 6m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.94% | 98.90% | 98.77% | 98.77% | 3745 ms | ↑ 1.07x | 28 | 7m | 1d ago | 18m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 97.74% | 99.17% | 72.11% | 72.11% | 3077 ms | ↑ 1.36x | 18 | 15m | 3d ago | 8m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 97.59% | 95.65% | 95.68% | 95.68% | 3522 ms | ↑ 1.43x | 80 | 7m | 3d ago | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.59% | 97.59% | 97.75% | 97.75% | 3338 ms | → 1.00x | 14 | 0s | 4d ago | 19m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 97.59% | 96.40% | 96.44% | 96.44% | 1511 ms | ↓ 0.73x | 60 | 3m | 4d ago | 6m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.59% | 85.76% | 85.82% | 85.82% | 2054 ms | ↑ 1.15x | 16 | 2h 28m | 3d ago | 6m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 97.50% | 97.50% | 97.67% | 97.67% | 1850 ms | → 1.00x | 3 | 37m | 4d ago | 6m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 97.07% | 99.42% | 97.42% | 97.42% | 2675 ms | ↑ 2.66x | 21 | 29s | 4d ago | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 97.04% | 96.03% | 96.07% | 96.07% | 2543 ms | ↑ 1.39x | 65 | 14m | 3h ago | 19m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 96.91% | 99.15% | 99.67% | 99.67% | 665 ms | → 1.05x | 12 | 18m | 2d ago | 19m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 96.79% | 91.28% | 91.31% | 91.31% | 3459 ms | ↑ 1.72x | 71 | 29m | 4d ago | 7m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 96.67% | 98.03% | 96.12% | 96.12% | 2115 ms | ↑ 1.30x | 67 | 2m | 2d ago | 8m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 96.66% | 98.13% | 99.19% | 99.19% | 3512 ms | ↑ 1.56x | 36 | 10m | 3d ago | 19m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 95.88% | 97.40% | 97.75% | 97.75% | 4259 ms | ↑ 1.55x | 95 | 57s | 3d ago | 19m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 95.86% | 92.84% | 92.87% | 92.87% | 1538 ms | ↓ 0.76x | 133 | 11m | 4d ago | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 95.81% | 99.17% | 99.59% | 99.59% | 2802 ms | ↑ 1.54x | 4 | 1h 8m | 4d ago | 14m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 95.58% | 70.21% | 70.25% | 70.25% | 2235 ms | ↑ 1.21x | 50 | 2h 10m | 4d ago | 6m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 94.92% | 97.06% | 97.09% | 97.09% | 4234 ms | ↑ 1.68x | 65 | 5m | 1d ago | 7m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 94.79% | 86.96% | 86.99% | 86.99% | 2836 ms | ↑ 1.43x | 108 | 25m | 4d ago | 7m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 94.72% | 94.98% | 91.02% | 91.02% | 1732 ms | → 0.96x | 116 | 8m | 4d ago | 19m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 94.54% | 97.50% | 97.04% | 97.04% | 1056 ms | → 1.04x | 20 | 39m | 4d ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.12% | 92.55% | 92.58% | 92.58% | 2306 ms | ↑ 1.73x | 77 | 25m | 14h ago | 7m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 93.83% | 95.68% | 98.77% | 98.77% | 2223 ms | → 1.05x | 130 | 3m | 1d ago | 19m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 92.32% | 98.31% | 43.65% | 43.65% | 2132 ms | ↑ 1.41x | 50 | 4m | 1d ago | 9m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.88% | 98.41% | 97.38% | 97.38% | 2068 ms | ↑ 1.31x | 3 | 3h 47m | 4d ago | 8m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 89.21% | 90.90% | 63.40% | 63.40% | 2417 ms | ↑ 1.38x | 42 | 1h 16m | 3d ago | 8m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 85.67% | 85.67% | 85.82% | 85.82% | 2345 ms | → 1.00x | 4 | 4h 9m | 5d ago | 6m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 84.30% | 84.30% | 84.52% | 84.52% | 1642 ms | → 1.00x | 1 | 12h 20m | 5d ago | 6m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 83.76% | 83.76% | 83.97% | 83.97% | 393 ms | → 1.00x | 1 | 12h 47m | 5d ago | 6m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 83.51% | 83.51% | 83.68% | 83.68% | 1948 ms | → 1.00x | 3 | 5h 3m | 4d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 83.15% | 83.15% | 83.37% | 83.37% | 2137 ms | → 1.00x | 1 | 12h 50m | 5d ago | 6m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 82.33% | 95.46% | 95.98% | 95.98% | 3110 ms | ↑ 1.47x | 47 | 29m | 4d ago | 15m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.20% | 65.27% | 62.38% | 62.38% | 4697 ms | ↓ 0.93x | 810 | 7m | 3d ago | 15m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 81.06% | 77.34% | 83.55% | 83.55% | 4605 ms | ↑ 1.07x | 618 | 5m | 18h ago | 9m ago |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | 80.80% | 80.80% | 81.05% | 81.05% | 1691 ms | → 1.00x | 1 | 13h 10m | 4d ago | 6m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 80.54% | 90.05% | 92.00% | 92.00% | 4797 ms | ↓ 0.91x | 173 | 13m | 3d ago | 19m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 80.26% | 77.89% | 83.10% | 83.10% | 4378 ms | → 1.04x | 628 | 4m | 14h ago | 17m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 80.16% | 77.18% | 69.44% | 69.44% | 4451 ms | ↑ 1.07x | 639 | 4m | 1h ago | 15m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 79.47% | 77.12% | 77.59% | 77.59% | 4819 ms | ↑ 1.12x | 607 | 5m | 16h ago | 8m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 79.05% | 75.84% | 82.83% | 82.83% | 4468 ms | → 1.04x | 624 | 6m | 4h ago | 20m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 78.83% | 14.93% | 9.13% | 9.13% | 955 ms | → 1.00x | 2 | 12d 2h | 4d ago | 8m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 78.74% | 76.09% | 82.26% | 82.26% | 4180 ms | ↓ 0.93x | 614 | 6m | 3d ago | 19m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 78.54% | 14.93% | 4.08% | 4.08% | 462 ms | → 1.00x | 1 | 24d 4h | 30d ago | 9m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 78.52% | 62.90% | 63.01% | 63.01% | 862 ms | → 1.00x | 10 | 7h 2m | 3d ago | 6m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 78.48% | 24.62% | 24.66% | 24.66% | 1605 ms | → 1.00x | 2 | 6d 14h | 4d ago | 7m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 78.44% | 14.93% | 4.59% | 4.59% | 2270 ms | → 1.00x | 2 | 12d 2h | 3d ago | 10m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 78.44% | 14.92% | 3.65% | 3.65% | 1888 ms | → 1.00x | 2 | 12d 2h | 3d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 78.43% | 14.85% | 7.05% | 7.05% | 2220 ms | → 1.00x | 2 | 12d 2h | 4d ago | 8m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 78.41% | 14.90% | 3.70% | 3.70% | 910 ms | → 1.00x | 2 | 12d 2h | 3d ago | 9m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 78.39% | 65.62% | 65.73% | 65.73% | 2442 ms | → 1.00x | 2 | 1d 3h | 6d ago | 6m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 78.34% | 14.94% | 14.96% | 14.96% | 1134 ms | → 1.00x | 2 | 11d 23h | 4d ago | 7m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 78.31% | 14.90% | 3.65% | 3.65% | 1657 ms | → 1.00x | 3 | 8d 1h | 4d ago | 10m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 78.27% | 14.80% | 10.92% | 10.92% | 1315 ms | → 1.00x | 3 | 8d 1h | 4d ago | 8m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 78.21% | 19.93% | 19.97% | 19.97% | 2209 ms | → 1.00x | 4 | 4d 6h | 2d ago | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 77.85% | 69.88% | 70.00% | 70.00% | 1800 ms | → 1.00x | 5 | 8h 28m | 4d ago | 6m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 77.72% | 70.44% | 70.56% | 70.56% | 2044 ms | → 1.00x | 7 | 5h 50m | 4d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 77.67% | 14.66% | 13.86% | 13.86% | 2154 ms | → 1.00x | 6 | 4d 1h | 4d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 77.51% | 77.51% | 77.81% | 77.81% | 2152 ms | → 1.00x | 4 | 3h 2m | 5h ago | 6m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 77.47% | 75.54% | 74.25% | 74.25% | 4880 ms | ↑ 1.08x | 651 | 5m | 16h ago | 7m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 77.10% | 75.01% | 53.32% | 53.32% | 4680 ms | ↑ 1.10x | 655 | 5m | 14h ago | 8m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 77.01% | 74.24% | 74.27% | 74.27% | 4534 ms | → 0.99x | 489 | 7m | 3d ago | 7m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 76.85% | 14.62% | 3.58% | 3.58% | 3185 ms | → 1.00x | 12 | 2d | 4d ago | 10m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 76.51% | 76.51% | 76.81% | 76.81% | 2172 ms | → 1.00x | 1 | 12h 60m | 4d ago | 6m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 76.50% | 92.78% | 97.78% | 97.78% | 1051 ms | ↓ 0.90x | 80 | 26m | 5d ago | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 76.47% | 72.15% | 72.18% | 72.18% | 4560 ms | → 0.98x | 636 | 7m | 15h ago | 7m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 76.34% | 76.34% | 76.66% | 76.66% | 2542 ms | → 1.00x | 1 | 12h 30m | 4d ago | 6m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 75.60% | 83.63% | 83.94% | 83.94% | 4672 ms | ↑ 1.42x | 383 | 7m | 15h ago | 7m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 75.56% | 66.95% | 48.49% | 48.49% | 2991 ms | ↑ 1.21x | 4 | 2d 11h | 4d ago | 8m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 75.53% | 59.11% | 59.14% | 59.14% | 1678 ms | ↑ 1.39x | 8 | 1d 7h | 4h ago | 7m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 75.52% | 90.17% | 75.31% | 75.31% | 2387 ms | ↑ 1.15x | 191 | 11m | 4h ago | 15m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 74.03% | 36.57% | 36.61% | 36.61% | 2366 ms | → 0.99x | 31 | 8h 3m | 4d ago | 6m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 73.17% | 14.02% | 3.44% | 3.44% | 3726 ms | → 1.00x | 34 | 17h 7m | 2d ago | 15m ago |
| [New API](https://lmspeed.net/provider/new-waadri-top) | 71.73% | 71.73% | 72.02% | 72.02% | 3132 ms | → 1.00x | 2 | 7h 50m | 3d ago | 6m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 68.74% | 13.17% | 20.87% | 20.87% | 2322 ms | → 1.00x | 16 | 1d 13h | 1h ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 66.32% | 89.07% | 45.86% | 45.86% | 2802 ms | ↑ 1.65x | 155 | 19m | 3d ago | 15m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 63.40% | 26.12% | 26.17% | 26.17% | 4350 ms | → 1.00x | 50 | 4h 49m | 3d ago | 6m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 62.60% | 70.51% | 70.55% | 70.55% | 4561 ms | → 1.03x | 356 | 10m | 15h ago | 6m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 62.35% | 71.13% | 82.30% | 82.30% | 4236 ms | ↓ 0.69x | 611 | 9m | 3d ago | 18m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 59.13% | 56.54% | 56.58% | 56.58% | 4757 ms | ↓ 0.91x | 238 | 14m | 17h ago | 20m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 58.72% | 70.22% | 60.27% | 60.27% | 2248 ms | ↑ 1.71x | 16 | 12h 26m | 4d ago | 8m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 52.31% | 29.63% | 76.60% | 76.60% | 172 ms | → 1.02x | 8 | 2d 16h | 3d ago | 20m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 50.71% | 37.54% | 53.73% | 53.73% | 4342 ms | ↓ 0.83x | 685 | 28m | 1h ago | 19m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 49.40% | 88.12% | 39.93% | 39.93% | 339 ms | → 1.03x | 19 | 4h 4m | 6d ago | 8m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 45.11% | 52.01% | 87.88% | 87.88% | 1590 ms | ↑ 1.68x | 5 | 2d 19h | 4d ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 43.81% | 49.44% | 61.27% | 61.27% | 4867 ms | → 1.05x | 809 | 16m | 3h ago | 16m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 36.29% | 6.90% | 1.98% | 1.98% | 4779 ms | → 1.00x | 87 | 7h 9m | 2h ago | 8m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 29.38% | 29.38% | 29.52% | 29.52% | 2557 ms | → 1.00x | 1 | 3d 16h | 7d ago | 6m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 29.06% | 5.57% | 1.37% | 1.37% | 2539 ms | → 1.00x | 1 | 26d 22h | 30d ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 28.93% | 5.54% | 1.36% | 1.36% | 1547 ms | → 1.00x | 2 | 13d 11h | 2d ago | 15m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 26.84% | 5.20% | 1.27% | 1.27% | 1832 ms | → 1.00x | 1 | 27d 2h | 30d ago | 18m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 26.84% | 5.20% | 1.29% | 1.29% | 1245 ms | → 1.00x | 1 | 27d 2h | 30d ago | 18m ago |
| [xAI](https://lmspeed.net/provider/xai) | 26.80% | 5.20% | 1.27% | 1.27% | 1531 ms | → 1.00x | 1 | 27d 2h | 30d ago | 19m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 26.78% | 5.18% | 1.27% | 1.27% | 865 ms | → 1.00x | 1 | 27d 2h | 30d ago | 18m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 26.77% | 5.19% | 28.78% | 28.78% | 590 ms | → 1.00x | 1 | 27d 2h | 30d ago | 19m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 26.74% | 5.19% | 75.82% | 75.82% | 1707 ms | → 1.00x | 1 | 27d 2h | 30d ago | 20m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 26.43% | 5.09% | 15.81% | 15.81% | 2533 ms | → 1.00x | 1 | 27d 2h | 30d ago | 17m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 26.40% | 5.09% | 13.99% | 13.99% | 796 ms | → 1.00x | 1 | 27d 2h | 30d ago | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 26.18% | 5.02% | 26.51% | 26.51% | 741 ms | → 1.00x | 1 | 27d 2h | 30d ago | 15m ago |
| [Crond](https://lmspeed.net/provider/crond) | 26.18% | 5.02% | 1.23% | 1.23% | 2427 ms | → 1.00x | 1 | 27d 2h | 30d ago | 14m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 25.40% | 4.83% | 1.18% | 1.18% | 956 ms | → 1.00x | 1 | 27d 2h | 30d ago | 10m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 25.33% | 8.12% | 24.20% | 24.20% | 2240 ms | ↑ 1.25x | 4 | 6d 13h | 29d ago | 8m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 25.33% | 4.79% | 3.81% | 3.81% | 194 ms | → 1.00x | 1 | 27d 2h | 30d ago | 8m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 25.30% | 4.86% | 1.23% | 1.23% | 894 ms | → 1.00x | 3 | 9d 1h | 17d ago | 9m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 25.30% | 4.81% | 1.45% | 1.45% | 1034 ms | → 1.00x | 1 | 27d 2h | 30d ago | 8m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 25.30% | 4.81% | 1.25% | 1.25% | 1076 ms | → 1.00x | 1 | 27d 2h | 30d ago | 9m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 25.26% | 4.86% | 1.19% | 1.19% | 990 ms | → 1.00x | 9 | 3d | 2h ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 25.00% | 4.79% | 1.17% | 1.17% | 3298 ms | → 1.00x | 10 | 2d 17h | 20h ago | 15m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 24.23% | 4.59% | 2.22% | 2.22% | 4482 ms | → 1.00x | 104 | 6h 11m | 1h ago | 8m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 16.91% | 3.20% | 1.65% | 1.65% | 4528 ms | → 1.00x | 40 | 16h 32m | 1h ago | 8m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 1.03% | 0.20% | 0.16% | 0.16% | 1719 ms | → 1.00x | 1 | 29d 20h | 30d ago | 19m ago |

</details>

<details open>
<summary><strong>🔴 Down (176)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 93.32% | 96.62% | 94.68% | 94.68% | 1773 ms | ↑ 2.02x | 50 | 27m | 17h ago | 7m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 92.56% | 57.22% | 14.02% | 14.02% | 4135 ms | ↑ 1.93x | 66 | 4h 10m | 15m ago | 15m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 79.37% | 93.91% | 96.34% | 96.34% | 1561 ms | ↑ 2.02x | 6 | 11h 2m | 2d ago | 10m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 78.69% | 78.03% | 78.12% | 78.12% | 751 ms | ↑ 1.11x | 3 | 21h 33m | 2d ago | 6m ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 74.80% | 76.19% | 76.28% | 76.28% | 703 ms | ↑ 1.14x | 2 | 1d 18h | 3d ago | 6m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 74.70% | 89.41% | 66.91% | 66.91% | 1854 ms | ↑ 1.15x | 30 | 3h 24m | 3d ago | 8m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 74.70% | 88.15% | 88.19% | 88.19% | 2292 ms | ↑ 2.13x | 3 | 1d 4h | 3d ago | 6m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 74.66% | 90.64% | 90.69% | 90.69% | 897 ms | → 1.00x | 7 | 9h 56m | 3d ago | 6m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 74.60% | 93.09% | 93.11% | 93.11% | 634 ms | → 1.02x | 3 | 1d 4h | 3d ago | 7m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 74.57% | 95.12% | 38.11% | 38.11% | 478 ms | ↓ 0.93x | 3 | 23h 3m | 3d ago | 8m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 74.57% | 95.17% | 98.81% | 98.81% | 2102 ms | ↑ 1.39x | 1 | 2d 21h | 3d ago | 9m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 74.57% | 93.78% | 35.91% | 35.91% | 501 ms | → 0.95x | 50 | 1h 24m | 3d ago | 9m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 74.57% | 95.04% | 40.42% | 40.42% | 810 ms | ↑ 1.33x | 3 | 23h 13m | 3d ago | 8m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 74.57% | 26.96% | 6.60% | 6.60% | 1380 ms | ↑ 1.07x | 3 | 7d 6h | 3d ago | 9m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 74.44% | 94.89% | 41.10% | 41.10% | 1046 ms | ↑ 1.46x | 12 | 5h 46m | 3d ago | 9m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 74.21% | 95.02% | 98.57% | 98.57% | 2455 ms | ↑ 1.77x | 5 | 13h 52m | 3d ago | 10m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 74.21% | 94.99% | 98.59% | 98.59% | 2467 ms | ↑ 1.69x | 6 | 11h 33m | 3d ago | 10m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 73.87% | 94.78% | 95.27% | 95.27% | 2967 ms | ↑ 1.06x | 16 | 4h 20m | 3d ago | 8m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 73.81% | 94.94% | 98.64% | 98.64% | 2566 ms | ↑ 2.07x | 7 | 9h 56m | 3d ago | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 73.40% | 92.53% | 98.17% | 98.17% | 2502 ms | ↑ 2.56x | 80 | 54m | 3d ago | 16m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 73.31% | 73.31% | 73.65% | 73.65% | 3526 ms | → 1.00x | 2 | 6h 20m | 6m ago | 6m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 73.25% | 94.74% | 98.68% | 98.68% | 1112 ms | ↓ 0.53x | 6 | 11h 32m | 3d ago | 17m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 73.14% | 94.66% | 98.70% | 98.70% | 762 ms | ↑ 1.16x | 6 | 11h 32m | 3d ago | 19m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 73.07% | 94.00% | 91.15% | 91.15% | 590 ms | ↓ 0.63x | 32 | 2h 10m | 3d ago | 19m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 73.07% | 83.68% | 83.76% | 83.76% | 1034 ms | ↑ 1.48x | 1 | 2d 21h | 3d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 73.01% | 94.63% | 98.65% | 98.65% | 2665 ms | → 1.05x | 7 | 9h 53m | 3d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 73.01% | 94.61% | 98.51% | 98.51% | 2497 ms | ↑ 1.23x | 8 | 8h 39m | 3d ago | 20m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 72.96% | 94.77% | 98.72% | 98.72% | 1835 ms | ↑ 2.41x | 2 | 1d 11h | 3d ago | 18m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 72.94% | 93.28% | 97.27% | 97.27% | 3272 ms | → 1.00x | 58 | 1h 12m | 3d ago | 19m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 72.83% | 93.19% | 97.43% | 97.43% | 1993 ms | ↑ 2.22x | 52 | 1h 22m | 3d ago | 18m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 72.59% | 94.41% | 98.63% | 98.63% | 3087 ms | ↑ 2.42x | 16 | 4h 19m | 3d ago | 19m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 72.55% | 94.43% | 97.91% | 97.91% | 2994 ms | ↑ 1.45x | 12 | 5h 48m | 3d ago | 19m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 72.53% | 94.17% | 94.06% | 94.06% | 4033 ms | ↑ 1.18x | 38 | 1h 50m | 3d ago | 7m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 72.16% | 71.82% | 92.02% | 92.02% | 3225 ms | ↓ 0.93x | 394 | 24m | 3d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 68.85% | 94.00% | 98.53% | 98.53% | 1341 ms | ↑ 2.19x | 22 | 3h 17m | 3d ago | 14m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 68.52% | 93.94% | 87.11% | 87.11% | 2894 ms | ↑ 1.24x | 29 | 2h 30m | 3d ago | 10m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 65.04% | 89.04% | 95.73% | 95.73% | 4499 ms | ↑ 1.51x | 193 | 23m | 3d ago | 20m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 64.00% | 81.94% | 81.65% | 81.65% | 2412 ms | ↑ 1.20x | 429 | 12m | 3d ago | 8m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 60.68% | 90.53% | 96.12% | 96.12% | 3658 ms | ↑ 1.11x | 173 | 24m | 3d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 60.47% | 76.02% | 94.07% | 94.07% | 4334 ms | ↑ 2.02x | 165 | 1h 1m | 3d ago | 14m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 57.33% | 76.54% | 88.14% | 88.14% | 3874 ms | → 0.95x | 477 | 14m | 3d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 57.20% | 80.71% | 78.17% | 78.17% | 4407 ms | ↑ 1.25x | 431 | 13m | 3d ago | 20m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 56.15% | 88.81% | 88.81% | 88.81% | 1040 ms | ↑ 1.13x | 9 | 11h 52m | 4d ago | 7m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 55.78% | 74.74% | 93.64% | 93.64% | 4367 ms | ↑ 1.63x | 211 | 48m | 3d ago | 19m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 54.70% | 10.40% | 3.15% | 3.15% | 2128 ms | → 1.00x | 4 | 6d 18h | 3d ago | 8m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 54.47% | 90.92% | 91.74% | 91.74% | 2431 ms | ↑ 2.66x | 13 | 7h 25m | 4d ago | 7m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 54.24% | 59.17% | 70.76% | 70.76% | 4643 ms | ↓ 0.87x | 713 | 16m | 2h ago | 20m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 51.50% | 9.90% | 2.43% | 2.43% | 1025 ms | → 1.00x | 7 | 3d 21h | 3d ago | 16m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 50.67% | 50.67% | 50.81% | 50.81% | 4035 ms | → 1.00x | 24 | 4h 2m | 3d ago | 6m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 46.41% | 60.57% | 40.53% | 40.53% | 4663 ms | ↑ 1.05x | 762 | 14m | 3d ago | 8m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 45.12% | 64.14% | 90.76% | 90.76% | 4454 ms | ↓ 0.94x | 416 | 32m | 3d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 43.44% | 8.44% | 14.81% | 14.81% | 3493 ms | → 1.00x | 11 | 2d 12h | 3d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 42.42% | 60.69% | 76.00% | 76.00% | 4910 ms | ↑ 1.32x | 743 | 14m | 3d ago | 20m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 42.27% | 42.27% | 42.48% | 42.48% | 1631 ms | → 1.00x | 2 | 1d 17h | 3d ago | 6m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 41.28% | 72.81% | 61.40% | 61.40% | 2089 ms | ↓ 0.94x | 47 | 4h 27m | 3d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 40.99% | 57.00% | 70.17% | 70.17% | 4648 ms | → 1.03x | 807 | 15m | 3d ago | 16m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 34.18% | 71.45% | 31.71% | 31.71% | 3953 ms | → 0.98x | 521 | 16m | 3d ago | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 26.16% | 26.16% | 26.16% | 26.16% | 1969 ms | → 1.00x | 3 | 1d 5h | 15h ago | 19m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 21.66% | 6.87% | 6.87% | 6.87% | 3001 ms | → 1.00x | 24 | 15h 60m | 6m ago | 6m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 21.19% | 84.79% | 39.83% | 39.83% | 1348 ms | ↓ 0.86x | 6 | 23h 23m | 6d ago | 8m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 14.80% | 19.87% | 19.72% | 19.72% | 3077 ms | ↑ 1.28x | 582 | 50m | 3d ago | 8m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 13.00% | 2.51% | 1.49% | 1.49% | 4642 ms | → 1.00x | 3 | 9d 13h | 2h ago | 16m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 10.70% | 10.70% | 11.04% | 11.04% | 582 ms | → 1.00x | 2 | 1d 17h | 3d ago | 6m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 6.15% | 1.41% | 1.41% | 1.41% | 1348 ms | → 1.00x | 2 | 12d 10h | 5d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 3.18% | 0.60% | 4.52% | 4.52% | 730 ms | → 1.00x | 3 | 9d 22h | 3d ago | 8m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 2.88% | 0.55% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 3d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 2.87% | 0.55% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 3d ago | 16m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.70% | 0.52% | 46.27% | 46.27% | 444 ms | → 1.00x | 2 | 14d 22h | 3d ago | 19m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.92% | 0.53% | 0.13% | 0.13% | 831 ms | ↓ 0.72x | 18 | 1d 16h | 4d ago | 14m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 33.63% | 81.04% | 81.04% | — | — | 7 | 2d 23h | 21d ago | 14m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.80% | 6.80% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 16.40% | 4.01% | 4.01% | — | — | 2 | 12d 17h | 21d ago | 15m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 43.09% | 43.09% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 17.92% | 32.06% | 32.06% | — | — | 3 | 8d 8h | 24d ago | 8m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 59.84% | 74.32% | 74.32% | — | — | 369 | 42m | 9d ago | 18m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.61% | 4.61% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 19h | 6d ago | 19m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 22.29% | 22.29% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 16.54% | 48.34% | 48.34% | — | — | 2 | 12d 17h | 25d ago | 8m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 37.13% | 36.04% | 36.04% | — | — | 3 | 6d 14h | 20d ago | 8m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 64.60% | 64.60% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.95% | 15.95% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.62% | 8.62% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 10.15% | 77.90% | 77.90% | — | — | 1 | 27d 4h | 27d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 14.50% | 14.50% | 14.50% | — | — | 5 | 3d 19h | 19d ago | 7m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 58.67% | 58.67% | 58.67% | — | — | 7 | 1d 20h | 12d ago | 7m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 16h | 19d ago | 6m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 47.30% | 48.60% | 48.60% | — | — | 5 | 3d 9h | 17d ago | 7m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 19.35% | 19.35% | 19.35% | — | — | 5 | 3d 6h | 16d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 62.63% | 62.63% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 48.34% | 87.20% | 87.20% | — | — | 2 | 8d 6h | 17d ago | 18m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 55.30% | 55.30% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 20m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 50.28% | 50.28% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 21h | 16d ago | 6m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 69.62% | 69.62% | — | — | 3 | 9d 24h | 15d ago | 15m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 21h | 6d ago | 18m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 19h | 6d ago | 10m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 49.40% | 49.40% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 73.83% | 60.08% | 60.08% | — | — | 12 | 18h 59m | 9d ago | 8m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 17h | 19d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 19h | 6d ago | 10m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 75.24% | 93.86% | 93.86% | — | — | 58 | 3h 23m | 8d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.35% | 4.35% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 51.38% | 51.38% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 17m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.68% | 33.68% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.68% | 28.68% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 18m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.77% | 20.77% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 58.88% | 58.88% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 65.61% | 65.61% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 67.96% | 92.09% | 92.09% | — | — | 1 | 11d 3h | 11d ago | 14m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 22h | 8d ago | 6m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 18m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 61.36% | 89.24% | 89.24% | — | — | 22 | 13h 53m | 13d ago | 19m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.59% | 23.59% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 26.57% | 81.22% | 81.22% | — | — | 3 | 7d 13h | 10d ago | 18m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 25.50% | 36.58% | 36.58% | — | — | 128 | 4h 2m | 7d ago | 7m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 20.40% | 10.71% | 10.71% | — | — | 2 | 12d 4h | 22d ago | 8m ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 22.66% | 80.46% | 80.46% | — | — | 9 | 2d 15h | 24d ago | 19m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 23.19% | 23.19% | 23.19% | — | — | 3 | 7d 1h | 21d ago | 7m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 20h | 6d ago | 19m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.37% | 21.37% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 7.64% | 59.41% | 59.41% | — | — | 2 | 13d 22h | 28d ago | 17m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 49.27% | 49.27% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 68.53% | 92.28% | 92.28% | — | — | 2 | 5d 11h | 11d ago | 18m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |

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
