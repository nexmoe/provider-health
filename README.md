# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**530 providers** — 217 🟢 operational · 135 🟡 degraded · 178 🔴 down · 0 ⚫ unknown

_Updated 2026-04-23 05:35 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (217)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2309 ms | → 1.00x | 0 | — | — | 20m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2586 ms | → 1.00x | 0 | — | — | 20m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2946 ms | → 1.00x | 0 | — | — | 20m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 451 ms | → 1.00x | 0 | — | — | 20m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3275 ms | → 1.00x | 0 | — | — | 20m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 520 ms | → 1.00x | 0 | — | — | 20m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2397 ms | → 1.00x | 0 | — | — | 20m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 555 ms | → 1.00x | 0 | — | — | 20m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 3097 ms | → 1.00x | 0 | — | — | 20m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3284 ms | → 1.00x | 0 | — | — | 20m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1301 ms | → 1.00x | 0 | — | — | 20m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 154 ms | → 1.00x | 0 | — | — | 20m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.86% | 99.92% | 90.75% | 90.75% | 1483 ms | ↑ 2.24x | 2 | 0s | 20d ago | 35m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.86% | 99.95% | 99.99% | 99.99% | 759 ms | ↑ 1.09x | 1 | 0s | 20d ago | 35m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.86% | 99.08% | 58.49% | 58.49% | 968 ms | ↓ 0.87x | 31 | 1m | 13d ago | 34m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.86% | 99.92% | 99.99% | 99.99% | 423 ms | ↓ 0.62x | 2 | 0s | 9d ago | 35m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.86% | 99.87% | 99.96% | 99.96% | 2356 ms | ↑ 1.28x | 4 | 0s | 14d ago | 34m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.86% | 99.92% | 99.81% | 99.81% | 1074 ms | ↑ 1.13x | 2 | 0s | 10d ago | 34m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.86% | 99.97% | 99.98% | 99.98% | 1093 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.86% | 99.26% | 99.54% | 99.54% | 1062 ms | → 1.05x | 24 | 2m | 8d ago | 33m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.86% | 99.14% | 99.51% | 99.51% | 1298 ms | ↑ 1.29x | 7 | 37m | 10d ago | 33m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.86% | 99.72% | 99.63% | 99.63% | 1284 ms | → 1.05x | 10 | 0s | 14d ago | 33m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.86% | 99.14% | 99.49% | 99.49% | 1007 ms | ↑ 1.27x | 23 | 4m | 8d ago | 34m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.86% | 98.04% | 99.39% | 99.39% | 986 ms | → 1.03x | 60 | 3m | 9d ago | 34m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.86% | 99.54% | 99.68% | 99.68% | 952 ms | ↓ 0.83x | 7 | 14m | 10d ago | 34m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.86% | 99.95% | 99.70% | 99.70% | 1886 ms | ↑ 1.61x | 1 | 0s | 29d ago | 33m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.86% | 99.95% | 99.93% | 99.93% | 972 ms | ↑ 1.51x | 1 | 0s | 16d ago | 33m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.86% | 99.90% | 99.90% | 99.90% | 1114 ms | ↑ 1.07x | 3 | 0s | 12d ago | 33m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.86% | 99.92% | 99.94% | 99.94% | 1596 ms | ↑ 1.25x | 2 | 0s | 9d ago | 33m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.86% | 99.77% | 99.71% | 99.71% | 2478 ms | ↑ 1.14x | 8 | 0s | 9d ago | 33m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.86% | 99.87% | 99.70% | 99.70% | 1874 ms | ↑ 1.35x | 3 | 3m | 14d ago | 33m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.86% | 99.87% | 99.91% | 99.91% | 1687 ms | → 0.98x | 4 | 0s | 16d ago | 33m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.86% | 99.11% | 99.76% | 99.76% | 1598 ms | ↑ 1.06x | 34 | 0s | 13d ago | 33m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.86% | 99.95% | 99.97% | 99.97% | 1513 ms | ↑ 1.43x | 1 | 0s | 29d ago | 33m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.86% | 99.85% | 99.93% | 99.93% | 404 ms | ↑ 1.18x | 5 | 0s | 9d ago | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.86% | 99.97% | 99.35% | 99.35% | 1309 ms | ↑ 1.73x | 0 | — | — | 32m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.86% | 99.95% | 99.99% | 99.99% | 1302 ms | ↑ 1.55x | 1 | 0s | 13d ago | 32m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.86% | 99.46% | 99.79% | 99.79% | 1213 ms | ↑ 1.08x | 20 | 0s | 7d ago | 31m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.86% | 95.51% | 96.93% | 96.93% | 3269 ms | ↑ 1.80x | 7 | 3h 60m | 7d ago | 31m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.86% | 99.87% | 51.10% | 51.10% | 3488 ms | ↑ 1.88x | 4 | 0s | 8d ago | 31m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.86% | 97.29% | 99.33% | 99.33% | 1899 ms | ↑ 1.56x | 79 | 3m | 13d ago | 30m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.86% | 99.95% | 99.91% | 99.91% | 1368 ms | ↑ 1.07x | 1 | 0s | 7d ago | 31m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.86% | 99.62% | 99.70% | 99.70% | 1365 ms | ↑ 1.14x | 7 | 10m | 7d ago | 31m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.86% | 99.97% | 99.98% | 99.98% | 2336 ms | ↑ 1.53x | 0 | — | — | 30m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.86% | 99.72% | 99.43% | 99.43% | 2133 ms | ↑ 1.44x | 10 | 0s | 7d ago | 30m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.86% | 99.92% | 32.90% | 32.90% | 2298 ms | ↓ 0.80x | 2 | 0s | 7d ago | 30m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.86% | 99.69% | 98.82% | 98.82% | 1027 ms | ↑ 1.45x | 4 | 18m | 21d ago | 23m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.86% | 99.90% | 99.80% | 99.80% | 765 ms | ↑ 1.24x | 3 | 0s | 8d ago | 23m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.85% | 99.85% | 100.00% | 100.00% | 840 ms | → 1.00x | 0 | — | — | 33m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.85% | 93.99% | 94.05% | 94.05% | 2132 ms | ↑ 1.43x | 1 | 18h 20m | 16d ago | 21m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.85% | 94.98% | 95.04% | 95.04% | 1450 ms | ↑ 1.60x | 3 | 5h 3m | 8d ago | 21m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.85% | 91.86% | 91.92% | 91.92% | 2134 ms | ↑ 1.30x | 1 | 1d 1h | 16d ago | 21m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.85% | 99.87% | 99.94% | 99.94% | 1417 ms | ↑ 1.10x | 1 | 0s | 9d ago | 20m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.85% | 98.03% | 98.10% | 98.10% | 1837 ms | ↑ 1.21x | 3 | 1h 20m | 12d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.85% | 99.91% | 100.00% | 100.00% | 607 ms | → 0.98x | 0 | — | — | 20m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.85% | 50.68% | 50.74% | 50.74% | 1294 ms | → 1.01x | 2 | 3d 2h | 8d ago | 20m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.85% | 99.94% | 100.00% | 100.00% | 1120 ms | ↑ 1.42x | 0 | — | — | 20m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.85% | 92.49% | 92.58% | 92.58% | 244 ms | ↑ 1.06x | 1 | 13h 50m | 11d ago | 20m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.85% | 99.87% | 99.94% | 99.94% | 1335 ms | ↑ 1.53x | 1 | 0s | 9d ago | 20m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.85% | 99.47% | 99.56% | 99.56% | 236 ms | ↓ 0.35x | 4 | 3m | 8d ago | 20m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.85% | 94.83% | 94.91% | 94.91% | 1925 ms | ↑ 1.05x | 1 | 9h 60m | 11d ago | 20m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.72% | 33.99% | 8.16% | 8.16% | 1772 ms | → 1.04x | 2 | 9d | 5d ago | 35m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.72% | 99.92% | 99.90% | 99.90% | 1169 ms | ↑ 1.18x | 2 | 0s | 3d ago | 33m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.72% | 99.41% | 99.44% | 99.44% | 2210 ms | ↑ 1.16x | 22 | 0s | 4d ago | 33m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.72% | 99.64% | 99.67% | 99.67% | 1735 ms | ↑ 1.09x | 10 | 0s | 7d ago | 33m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.72% | 99.82% | 99.89% | 99.89% | 1505 ms | ↑ 1.83x | 6 | 0s | 6d ago | 33m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.72% | 99.92% | 96.89% | 96.89% | 3157 ms | ↑ 1.44x | 2 | 0s | 5d ago | 32m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.72% | 99.90% | 99.96% | 99.96% | 1708 ms | ↑ 1.18x | 3 | 0s | 5d ago | 32m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.72% | 99.59% | 97.81% | 97.81% | 2232 ms | ↑ 1.19x | 14 | 43s | 5d ago | 32m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.72% | 99.87% | 98.91% | 98.91% | 2599 ms | ↑ 1.88x | 4 | 0s | 5d ago | 32m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.72% | 99.85% | 99.91% | 99.91% | 1189 ms | → 0.99x | 5 | 0s | 7d ago | 31m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.72% | 99.67% | 99.84% | 99.84% | 1491 ms | ↑ 1.79x | 6 | 10m | 2d ago | 31m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.72% | 99.82% | 98.65% | 98.65% | 2022 ms | ↑ 1.82x | 5 | 2m | 6d ago | 31m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.72% | 99.21% | 35.00% | 35.00% | 2216 ms | ↑ 1.13x | 18 | 7m | 5d ago | 31m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.72% | 99.95% | 99.94% | 99.94% | 2615 ms | ↑ 1.48x | 1 | 0s | 2d ago | 30m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.71% | 62.04% | 14.85% | 14.85% | 2040 ms | ↑ 1.27x | 3 | 3d 11h | 5d ago | 30m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.71% | 99.82% | 99.86% | 99.86% | 1393 ms | ↑ 1.20x | 6 | 0s | 6d ago | 30m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.71% | 97.44% | 96.53% | 96.53% | 1967 ms | ↓ 0.71x | 88 | 1m | 5d ago | 29m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.71% | 99.92% | 99.72% | 99.72% | 2476 ms | ↑ 1.57x | 2 | 0s | 5d ago | 29m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.71% | 98.11% | 99.52% | 99.52% | 1337 ms | ↑ 1.37x | 61 | 2m | 5d ago | 29m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.71% | 99.85% | 99.83% | 99.83% | 1801 ms | ↑ 1.18x | 5 | 0s | 5d ago | 29m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.71% | 98.59% | 97.61% | 97.61% | 1935 ms | ↑ 2.06x | 26 | 11m | 5d ago | 24m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.71% | 99.82% | 99.85% | 99.85% | 2334 ms | ↑ 1.50x | 6 | 0s | 5d ago | 24m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.71% | 99.92% | 98.62% | 98.62% | 721 ms | ↑ 1.80x | 2 | 0s | 5d ago | 22m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.71% | 99.74% | 90.98% | 90.98% | 1001 ms | ↑ 1.28x | 9 | 0s | 5d ago | 23m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.71% | 99.74% | 48.82% | 48.82% | 2269 ms | ↑ 1.24x | 9 | 0s | 5d ago | 22m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.71% | 99.92% | 46.63% | 46.63% | 1097 ms | ↑ 2.42x | 2 | 0s | 5d ago | 22m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.71% | 99.92% | 57.36% | 57.36% | 1719 ms | ↑ 1.96x | 2 | 0s | 5d ago | 22m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.71% | 99.59% | 95.70% | 95.70% | 1084 ms | ↑ 1.14x | 15 | 0s | 5d ago | 22m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.71% | 99.87% | 62.51% | 62.51% | 1575 ms | → 1.00x | 4 | 0s | 5d ago | 22m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.71% | 98.97% | 99.45% | 99.45% | 1946 ms | ↑ 2.23x | 18 | 12m | 5d ago | 22m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.71% | 99.87% | 99.03% | 99.03% | 1550 ms | ↑ 1.16x | 4 | 0s | 5d ago | 22m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.71% | 99.87% | 98.69% | 98.69% | 1344 ms | ↑ 1.85x | 4 | 0s | 5d ago | 22m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.71% | 99.41% | 76.16% | 76.16% | 2231 ms | ↑ 2.20x | 17 | 3m | 5d ago | 22m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.71% | 99.90% | 67.08% | 67.08% | 1851 ms | ↑ 1.42x | 3 | 0s | 5d ago | 22m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.71% | 99.46% | 85.51% | 85.51% | 3102 ms | ↑ 1.45x | 9 | 12m | 5d ago | 22m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.71% | 98.64% | 98.06% | 98.06% | 1622 ms | ↑ 1.34x | 17 | 21m | 5d ago | 22m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.71% | 99.85% | 85.79% | 85.79% | 2675 ms | ↑ 2.13x | 5 | 0s | 5d ago | 22m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.71% | 99.95% | 90.54% | 90.54% | 2679 ms | ↑ 2.77x | 1 | 0s | 5d ago | 22m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.71% | 99.87% | 97.73% | 97.73% | 1678 ms | ↑ 1.83x | 4 | 0s | 5d ago | 22m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.71% | 99.18% | 98.92% | 98.92% | 3045 ms | ↑ 1.41x | 30 | 20s | 5d ago | 22m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.71% | 99.64% | 71.83% | 71.83% | 870 ms | ↑ 1.40x | 10 | 3m | 5d ago | 22m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.71% | 99.95% | 80.53% | 80.53% | 1340 ms | ↑ 1.57x | 1 | 0s | 5d ago | 22m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.71% | 99.92% | 99.97% | 99.97% | 2999 ms | ↑ 1.66x | 2 | 0s | 5d ago | 22m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.71% | 99.61% | 98.30% | 98.30% | 2091 ms | ↑ 1.24x | 14 | 0s | 5d ago | 22m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.71% | 99.79% | 83.33% | 83.33% | 1834 ms | ↑ 1.25x | 4 | 8m | 5d ago | 22m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.71% | 99.54% | 98.08% | 98.08% | 1899 ms | ↑ 1.13x | 11 | 5m | 5d ago | 22m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.71% | 96.87% | 96.27% | 96.27% | 1689 ms | ↑ 1.86x | 29 | 32m | 5d ago | 22m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.71% | 99.90% | 94.59% | 94.59% | 2196 ms | ↑ 2.57x | 3 | 0s | 5d ago | 22m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.71% | 99.28% | 98.13% | 98.13% | 2150 ms | ↑ 1.79x | 25 | 49s | 5d ago | 22m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.71% | 97.94% | 96.92% | 96.92% | 1298 ms | ↑ 1.06x | 13 | 51m | 5d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.71% | 74.48% | 57.75% | 57.75% | 2488 ms | ↑ 1.75x | 9 | 18h 11m | 5d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.71% | 99.41% | 98.18% | 98.18% | 1745 ms | ↑ 1.55x | 14 | 6m | 5d ago | 22m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.71% | 99.72% | 99.75% | 99.75% | 2136 ms | ↑ 1.28x | 9 | 1m | 5d ago | 22m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.71% | 99.87% | 99.85% | 99.85% | 2031 ms | ↑ 1.51x | 4 | 0s | 5d ago | 22m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.71% | 99.00% | 81.59% | 81.59% | 1521 ms | ↑ 2.42x | 30 | 3m | 5d ago | 22m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.71% | 99.72% | 97.31% | 97.31% | 1655 ms | ↑ 2.50x | 10 | 0s | 5d ago | 22m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.71% | 98.97% | 99.06% | 99.06% | 1993 ms | ↑ 1.60x | 23 | 7m | 5d ago | 21m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.71% | 96.97% | 97.00% | 97.00% | 2253 ms | ↑ 1.99x | 4 | 3h 45m | 5d ago | 21m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.71% | 96.49% | 96.53% | 96.53% | 1604 ms | ↑ 1.13x | 24 | 31m | 5d ago | 21m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.71% | 99.91% | 99.94% | 99.94% | 2119 ms | ↑ 2.16x | 2 | 0s | 5d ago | 21m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.71% | 90.34% | 90.37% | 90.37% | 3131 ms | ↑ 1.40x | 6 | 8h 38m | 5d ago | 21m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.71% | 96.96% | 96.98% | 96.98% | 1517 ms | ↑ 2.38x | 10 | 1h 38m | 5d ago | 21m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.71% | 99.87% | 99.90% | 99.90% | 999 ms | ↑ 1.12x | 4 | 0s | 5d ago | 21m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.71% | 99.65% | 99.68% | 99.68% | 1630 ms | ↑ 1.21x | 8 | 4m | 5d ago | 21m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.71% | 99.68% | 99.74% | 99.74% | 1461 ms | ↑ 1.17x | 4 | 0s | 7d ago | 20m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.71% | 99.29% | 99.38% | 99.38% | 520 ms | ↓ 0.95x | 7 | 0s | 6d ago | 20m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.71% | 94.35% | 94.41% | 94.41% | 1520 ms | ↑ 1.21x | 13 | 1h 4m | 6d ago | 20m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.71% | 99.85% | 99.92% | 99.92% | 1693 ms | ↑ 1.22x | 1 | 0s | 7d ago | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.71% | 90.99% | 91.06% | 91.06% | 1921 ms | → 1.04x | 4 | 5h 15m | 7d ago | 20m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.71% | 87.35% | 87.45% | 87.45% | 1001 ms | → 1.05x | 3 | 11h 20m | 6d ago | 20m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.71% | 99.83% | 99.91% | 99.91% | 1216 ms | ↑ 1.16x | 1 | 0s | 3d ago | 20m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.71% | 99.18% | 99.28% | 99.28% | 968 ms | ↑ 1.13x | 2 | 25m | 5d ago | 20m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.58% | 96.97% | 97.56% | 97.56% | 3069 ms | ↑ 1.59x | 113 | 27s | 4d ago | 33m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.58% | 99.87% | 90.23% | 90.23% | 894 ms | ↑ 1.69x | 4 | 5m | 13m ago | 33m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.58% | 99.85% | 99.65% | 99.65% | 1577 ms | ↑ 1.40x | 4 | 2m | 6d ago | 33m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.58% | 99.92% | 99.91% | 99.91% | 1850 ms | ↑ 1.73x | 2 | 0s | 5d ago | 32m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.57% | 99.59% | 99.82% | 99.82% | 1850 ms | ↑ 1.38x | 10 | 6m | 7h ago | 31m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.57% | 98.52% | 98.31% | 98.31% | 2571 ms | ↑ 1.33x | 55 | 22s | 5d ago | 31m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.57% | 98.90% | 98.92% | 98.92% | 1279 ms | ↓ 0.91x | 13 | 22m | 3d ago | 29m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.57% | 98.49% | 95.18% | 95.18% | 628 ms | ↓ 0.76x | 53 | 56s | 5d ago | 23m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.57% | 99.92% | 50.00% | 50.00% | 2075 ms | ↑ 2.47x | 2 | 0s | 5d ago | 22m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.57% | 99.46% | 98.42% | 98.42% | 680 ms | ↑ 1.11x | 16 | 2m | 6d ago | 22m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.56% | 99.59% | 55.44% | 55.44% | 1112 ms | ↓ 0.83x | 13 | 2m | 17h ago | 22m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.56% | 98.46% | 57.78% | 57.78% | 1071 ms | ↑ 1.68x | 40 | 5m | 5d ago | 22m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.56% | 99.87% | 59.28% | 59.28% | 1076 ms | ↑ 1.82x | 4 | 0s | 5d ago | 22m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.56% | 99.72% | 99.71% | 99.71% | 1386 ms | ↑ 1.34x | 8 | 3m | 4d ago | 22m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.56% | 25.85% | 19.70% | 19.70% | 1386 ms | → 1.05x | 3 | 6d 17h | 5d ago | 22m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.56% | 99.74% | 98.00% | 98.00% | 1786 ms | ↑ 2.88x | 8 | 1m | 18h ago | 22m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.56% | 96.72% | 96.76% | 96.76% | 2322 ms | ↑ 1.34x | 5 | 2h 32m | 5d ago | 21m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.56% | 97.14% | 97.17% | 97.17% | 2729 ms | ↑ 1.66x | 6 | 2h 13m | 5d ago | 21m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.56% | 95.90% | 95.94% | 95.94% | 2136 ms | ↑ 1.13x | 48 | 18m | 5d ago | 21m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.56% | 98.96% | 98.99% | 98.99% | 2824 ms | ↑ 1.48x | 27 | 2m | 3h ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.56% | 87.63% | 85.01% | 85.01% | 1494 ms | ↑ 1.41x | 3 | 1d 2h | 3h ago | 21m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.56% | 99.25% | 99.28% | 99.28% | 1342 ms | → 1.04x | 9 | 14m | 3h ago | 21m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.56% | 91.38% | 91.43% | 91.43% | 1958 ms | → 0.97x | 76 | 15m | 6d ago | 21m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.56% | 96.38% | 96.42% | 96.42% | 1562 ms | ↑ 1.31x | 3 | 4h 10m | 6d ago | 21m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.56% | 96.02% | 96.07% | 96.07% | 1494 ms | ↑ 1.49x | 2 | 6h 15m | 5d ago | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.56% | 91.61% | 91.67% | 91.67% | 3200 ms | ↓ 0.82x | 26 | 42m | 6d ago | 20m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.56% | 96.99% | 97.05% | 97.05% | 1356 ms | ↑ 1.11x | 5 | 1h 26m | 2d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.50% | 99.50% | 99.75% | 99.75% | 2554 ms | → 1.00x | 1 | 0s | 5d ago | 20m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.44% | 98.83% | 99.57% | 99.57% | 2399 ms | ↑ 1.47x | 42 | 43s | 5d ago | 32m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.44% | 98.98% | 98.83% | 98.83% | 2951 ms | ↑ 1.26x | 38 | 16s | 5d ago | 32m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.43% | 99.75% | 99.62% | 99.62% | 2717 ms | ↑ 1.87x | 9 | 0s | 3d ago | 32m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.43% | 96.56% | 98.55% | 98.55% | 1984 ms | ↓ 0.85x | 119 | 1m | 7d ago | 31m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.43% | 92.58% | 97.47% | 97.47% | 2915 ms | ↑ 1.29x | 18 | 2h 31m | 5d ago | 29m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.43% | 99.82% | 99.83% | 99.83% | 2715 ms | ↑ 1.65x | 6 | 0s | 5d ago | 28m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.43% | 99.69% | 99.55% | 99.55% | 2723 ms | → 1.00x | 11 | 0s | 5d ago | 29m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.43% | 98.77% | 99.19% | 99.19% | 2682 ms | ↑ 1.06x | 19 | 15m | 5d ago | 29m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.43% | 99.16% | 99.60% | 99.60% | 2825 ms | ↑ 1.57x | 4 | 1h 8m | 5d ago | 29m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.43% | 99.85% | 99.94% | 99.94% | 2246 ms | ↑ 3.03x | 4 | 42s | 5d ago | 29m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.42% | 97.56% | 97.48% | 97.48% | 798 ms | ↑ 1.71x | 15 | 53m | 5d ago | 24m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.42% | 99.26% | 52.94% | 52.94% | 1601 ms | ↑ 1.19x | 20 | 4m | 2d ago | 22m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.42% | 99.77% | 50.46% | 50.46% | 1685 ms | → 0.98x | 8 | 0s | 5d ago | 23m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.42% | 99.64% | 74.61% | 74.61% | 1918 ms | ↑ 2.49x | 12 | 49s | 3h ago | 22m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.42% | 29.31% | 15.39% | 15.39% | 2528 ms | ↑ 1.30x | 10 | 1d 22h | 5d ago | 22m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.42% | 93.01% | 95.16% | 95.16% | 2108 ms | ↑ 1.72x | 10 | 4h 21m | 5d ago | 22m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.42% | 36.11% | 28.63% | 28.63% | 2576 ms | ↑ 1.05x | 5 | 3d 11h | 4d ago | 22m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.41% | 99.74% | 99.76% | 99.76% | 2473 ms | ↑ 2.62x | 8 | 0s | 2h ago | 21m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.41% | 99.70% | 99.73% | 99.73% | 2426 ms | ↑ 2.28x | 8 | 1m | 5d ago | 21m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.41% | 99.82% | 99.85% | 99.85% | 1862 ms | ↑ 1.28x | 4 | 0s | 5d ago | 21m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.41% | 95.78% | 95.83% | 95.83% | 1936 ms | ↑ 1.30x | 5 | 2h 40m | 6d ago | 21m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.41% | 95.17% | 95.22% | 95.22% | 2424 ms | ↑ 1.10x | 9 | 1h 47m | 5d ago | 21m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.40% | 99.40% | 99.55% | 99.55% | 2603 ms | → 1.00x | 3 | 0s | 5d ago | 28m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.30% | 99.69% | 99.92% | 99.92% | 3740 ms | ↑ 2.70x | 11 | 0s | 16h ago | 34m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.30% | 99.62% | 98.88% | 98.88% | 2613 ms | ↑ 1.24x | 13 | 47s | 4d ago | 33m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.30% | 99.80% | 99.72% | 99.72% | 2877 ms | ↑ 1.46x | 7 | 0s | 4d ago | 33m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.28% | 96.92% | 99.22% | 99.22% | 1817 ms | ↑ 1.40x | 82 | 5m | 6d ago | 24m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.28% | 99.72% | 41.83% | 41.83% | 1482 ms | ↑ 1.15x | 9 | 2m | 13h ago | 23m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.28% | 95.87% | 96.10% | 96.10% | 2201 ms | ↑ 1.18x | 79 | 10m | 5d ago | 23m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.27% | 99.59% | 98.95% | 98.95% | 1780 ms | ↑ 1.16x | 15 | 0s | 4d ago | 22m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.27% | 99.85% | 99.83% | 99.83% | 2162 ms | ↑ 1.26x | 4 | 2m | 4d ago | 22m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.27% | 99.82% | 90.75% | 90.75% | 3263 ms | ↑ 1.27x | 6 | 0s | 5d ago | 22m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.27% | 99.74% | 74.33% | 74.33% | 2845 ms | ↑ 1.52x | 8 | 1m | 5d ago | 22m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.27% | 99.59% | 72.76% | 72.76% | 2075 ms | ↑ 2.76x | 14 | 40s | 4d ago | 22m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.27% | 99.51% | 98.36% | 98.36% | 1426 ms | ↑ 1.11x | 18 | 0s | 5d ago | 22m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.27% | 99.71% | 99.74% | 99.74% | 1422 ms | ↑ 1.53x | 7 | 6m | 23h ago | 21m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.27% | 96.37% | 96.41% | 96.41% | 2260 ms | ↑ 1.10x | 18 | 42m | 4d ago | 21m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.27% | 95.79% | 95.83% | 95.83% | 2758 ms | ↑ 2.49x | 32 | 28m | 23h ago | 21m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.27% | 98.00% | 98.03% | 98.03% | 1725 ms | ↑ 1.09x | 41 | 5m | 3h ago | 21m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.27% | 99.62% | 99.67% | 99.67% | 1504 ms | ↑ 1.33x | 7 | 0s | 6d ago | 21m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.26% | 74.86% | 74.93% | 74.93% | 1499 ms | ↑ 1.15x | 4 | 15h 20m | 5d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.22% | 99.22% | 99.48% | 99.48% | 3053 ms | → 1.00x | 2 | 0s | 4d ago | 20m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.21% | 99.21% | 99.21% | 99.21% | 954 ms | → 1.00x | 1 | 0s | 1d ago | 20m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.16% | 99.67% | 99.72% | 99.72% | 847 ms | ↓ 0.84x | 11 | 33s | 16h ago | 34m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.15% | 99.72% | 98.94% | 98.94% | 1463 ms | ↑ 1.78x | 7 | 4m | 4d ago | 33m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.15% | 43.74% | 45.45% | 45.45% | 1209 ms | ↑ 1.13x | 10 | 1d 13h | 2d ago | 30m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.14% | 98.87% | 99.08% | 99.08% | 2563 ms | ↑ 1.80x | 38 | 2m | 2d ago | 29m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.13% | 98.51% | 34.89% | 34.89% | 794 ms | ↑ 1.05x | 47 | 2m | 7d ago | 23m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 99.13% | 97.46% | 97.07% | 97.07% | 1082 ms | → 1.05x | 20 | 39m | 5d ago | 22m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.12% | 99.82% | 99.85% | 99.85% | 2247 ms | ↑ 3.46x | 5 | 2m | 5d ago | 22m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.12% | 98.51% | 98.66% | 98.66% | 2414 ms | ↑ 2.21x | 33 | 7m | 5d ago | 22m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.12% | 66.74% | 55.24% | 55.24% | 2223 ms | ↑ 2.19x | 5 | 1d 19h | 5d ago | 22m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.12% | 93.24% | 94.12% | 94.12% | 2385 ms | ↑ 2.18x | 22 | 1h 49m | 5d ago | 21m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.12% | 99.59% | 97.50% | 97.50% | 2471 ms | ↑ 2.35x | 14 | 43s | 5d ago | 21m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.12% | 88.36% | 88.46% | 88.46% | 928 ms | → 1.03x | 8 | 4h 1m | 20h ago | 20m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.02% | 99.14% | 99.27% | 99.27% | 2236 ms | ↓ 0.91x | 32 | 19s | 1d ago | 33m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (135)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.00% | 97.50% | 81.26% | 81.26% | 3347 ms | ↓ 0.79x | 93 | 25s | 5d ago | 29m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.98% | 99.20% | 84.54% | 84.54% | 1605 ms | ↑ 2.02x | 30 | 0s | 12h ago | 22m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.98% | 92.96% | 71.63% | 71.63% | 2684 ms | ↑ 1.58x | 80 | 24m | 4d ago | 22m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.98% | 95.30% | 94.82% | 94.82% | 2717 ms | ↑ 1.40x | 113 | 6m | 4d ago | 22m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 98.97% | 99.54% | 99.58% | 99.58% | 1095 ms | ↑ 1.19x | 6 | 10m | 4d ago | 21m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.88% | 99.34% | 99.41% | 99.41% | 3921 ms | ↑ 1.52x | 7 | 3m | 15h ago | 35m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 98.87% | 94.89% | 91.06% | 91.06% | 1381 ms | ↓ 0.88x | 116 | 8m | 5d ago | 33m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.87% | 99.44% | 99.12% | 99.12% | 2582 ms | ↑ 2.51x | 20 | 30s | 5d ago | 32m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 98.87% | 99.72% | 99.75% | 99.75% | 3158 ms | ↑ 1.59x | 7 | 4m | 5d ago | 32m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.86% | 97.83% | 99.12% | 99.12% | 3499 ms | ↑ 2.36x | 65 | 3m | 4d ago | 31m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.83% | 97.79% | 97.81% | 97.81% | 883 ms | ↑ 2.12x | 8 | 1h 39m | 4d ago | 21m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.74% | 99.57% | 90.54% | 90.54% | 3170 ms | ↑ 4.14x | 15 | 40s | 5d ago | 35m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.73% | 99.57% | 86.89% | 86.89% | 2671 ms | ↑ 2.45x | 15 | 40s | 5d ago | 32m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.71% | 99.51% | 99.78% | 99.78% | 2798 ms | ↑ 1.56x | 17 | 10s | 24h ago | 29m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.68% | 95.74% | 95.77% | 95.77% | 3352 ms | ↑ 1.38x | 80 | 7m | 4d ago | 21m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.59% | 98.55% | 90.53% | 90.53% | 2393 ms | → 1.03x | 54 | 22s | 4d ago | 32m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.55% | 97.72% | 98.77% | 98.77% | 2618 ms | ↑ 2.14x | 61 | 4m | 5d ago | 24m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.54% | 98.10% | 98.24% | 98.24% | 2289 ms | ↑ 2.57x | 47 | 6m | 3d ago | 21m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.46% | 99.08% | 98.45% | 98.45% | 4041 ms | ↑ 1.46x | 35 | 0s | 4d ago | 35m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.40% | 99.18% | 88.68% | 88.68% | 3557 ms | ↑ 1.22x | 31 | 0s | 16h ago | 22m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 98.39% | 98.39% | 98.54% | 98.54% | 3330 ms | → 1.00x | 9 | 1m | 5d ago | 32m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 98.39% | 91.46% | 91.50% | 91.50% | 3464 ms | ↑ 1.85x | 71 | 29m | 5d ago | 21m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.38% | 90.94% | 90.99% | 90.99% | 1268 ms | → 1.03x | 54 | 25m | 4d ago | 21m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.31% | 97.94% | 99.48% | 99.48% | 3523 ms | ↑ 2.46x | 68 | 2m | 16h ago | 34m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.31% | 99.59% | 99.90% | 99.90% | 3461 ms | ↑ 2.04x | 12 | 2m | 5d ago | 32m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.29% | 99.49% | 99.70% | 99.70% | 3164 ms | ↑ 1.35x | 16 | 2m | 4d ago | 30m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 98.24% | 94.86% | 92.99% | 92.99% | 1355 ms | ↓ 0.75x | 133 | 5m | 5d ago | 21m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.24% | 86.31% | 86.37% | 86.37% | 2201 ms | ↑ 1.24x | 16 | 2h 28m | 4d ago | 21m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.23% | 86.96% | 87.09% | 87.09% | 2329 ms | → 1.00x | 4 | 4h 9m | 6d ago | 20m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.10% | 98.02% | 96.17% | 96.17% | 2421 ms | ↑ 1.40x | 66 | 2m | 3d ago | 22m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 98.10% | 99.41% | 97.46% | 97.46% | 2674 ms | ↑ 2.66x | 21 | 29s | 5d ago | 22m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.96% | 98.59% | 87.57% | 87.57% | 2465 ms | ↑ 1.07x | 41 | 3m | 13h ago | 22m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 97.80% | 87.20% | 87.24% | 87.24% | 3042 ms | ↑ 1.58x | 110 | 25m | 3h ago | 21m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 97.76% | 97.76% | 97.91% | 97.91% | 1807 ms | → 1.00x | 3 | 37m | 5d ago | 20m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.75% | 99.21% | 99.71% | 99.71% | 3688 ms | ↑ 1.30x | 30 | 0s | 16h ago | 34m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 97.61% | 99.36% | 99.71% | 99.71% | 2115 ms | ↑ 1.45x | 8 | 39m | 7h ago | 33m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.60% | 98.83% | 98.77% | 98.77% | 3926 ms | ↑ 1.09x | 30 | 6m | 17h ago | 32m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 97.52% | 99.15% | 72.35% | 72.35% | 3181 ms | ↑ 1.43x | 18 | 15m | 4d ago | 22m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 97.51% | 96.51% | 96.55% | 96.55% | 1688 ms | ↓ 0.95x | 60 | 3m | 5d ago | 21m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 97.51% | 71.00% | 71.05% | 71.05% | 2131 ms | ↑ 1.17x | 52 | 2h 5m | 2h ago | 21m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.40% | 97.40% | 97.55% | 97.55% | 3529 ms | → 1.00x | 17 | 0s | 16h ago | 34m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 96.62% | 99.14% | 99.67% | 99.67% | 667 ms | → 1.04x | 12 | 18m | 3d ago | 34m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 96.50% | 17.00% | 10.11% | 10.11% | 938 ms | → 1.00x | 2 | 11d 14h | 5d ago | 22m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 96.32% | 65.47% | 65.57% | 65.57% | 856 ms | → 1.00x | 10 | 7h 2m | 4d ago | 20m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 96.20% | 96.44% | 96.06% | 96.06% | 2618 ms | ↑ 1.48x | 63 | 12m | 15h ago | 33m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 96.19% | 26.77% | 26.84% | 26.84% | 1548 ms | → 1.00x | 2 | 6d 14h | 5d ago | 21m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 96.17% | 68.09% | 68.20% | 68.20% | 2440 ms | → 1.00x | 2 | 1d 3h | 7d ago | 20m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.14% | 95.43% | 96.00% | 96.00% | 2880 ms | ↑ 1.42x | 46 | 29m | 5d ago | 29m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 96.09% | 17.00% | 4.55% | 4.55% | 537 ms | → 1.00x | 1 | 23d 4h | 30d ago | 23m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 96.06% | 16.92% | 7.83% | 7.83% | 2129 ms | → 1.00x | 2 | 11d 14h | 5d ago | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 95.95% | 17.00% | 5.00% | 5.00% | 2353 ms | → 1.00x | 2 | 11d 14h | 4d ago | 24m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 95.95% | 17.00% | 4.07% | 4.07% | 1986 ms | → 1.00x | 2 | 11d 14h | 5d ago | 24m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 95.94% | 16.98% | 4.13% | 4.13% | 899 ms | → 1.00x | 2 | 11d 14h | 4d ago | 23m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 95.91% | 16.88% | 12.08% | 12.08% | 1282 ms | → 1.00x | 3 | 7d 17h | 5d ago | 22m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 95.90% | 16.85% | 16.45% | 16.45% | 1163 ms | → 1.00x | 3 | 7d 17h | 3h ago | 21m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 95.80% | 16.97% | 4.06% | 4.06% | 1772 ms | → 1.00x | 3 | 7d 17h | 5d ago | 24m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 95.75% | 21.76% | 21.82% | 21.82% | 2182 ms | → 1.00x | 5 | 3d 10h | 3h ago | 21m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 95.64% | 97.46% | 97.76% | 97.76% | 4398 ms | ↑ 1.63x | 91 | 59s | 4d ago | 34m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 95.43% | 72.73% | 72.84% | 72.84% | 2019 ms | → 1.00x | 7 | 5h 50m | 5d ago | 20m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 95.31% | 16.74% | 15.30% | 15.30% | 2105 ms | → 1.00x | 6 | 3d 21h | 5d ago | 21m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 95.19% | 98.38% | 97.40% | 97.40% | 1878 ms | ↑ 1.24x | 3 | 3h 47m | 5d ago | 22m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 94.85% | 71.64% | 71.75% | 71.75% | 1710 ms | → 1.00x | 6 | 7h 16m | 14h ago | 20m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 94.44% | 97.09% | 97.12% | 97.12% | 4262 ms | ↑ 1.62x | 66 | 5m | 3h ago | 21m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 94.21% | 16.69% | 4.00% | 4.00% | 3105 ms | → 1.00x | 12 | 1d 22h | 5d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.00% | 92.64% | 92.67% | 92.67% | 2495 ms | ↑ 2.00x | 79 | 24m | 3h ago | 21m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 93.96% | 95.32% | 98.69% | 98.69% | 2562 ms | ↑ 1.18x | 134 | 4m | 16h ago | 34m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 92.97% | 59.94% | 59.98% | 59.98% | 1716 ms | ↑ 1.40x | 8 | 1d 7h | 1d ago | 21m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 92.30% | 66.23% | 48.83% | 48.83% | 2944 ms | ↑ 1.14x | 5 | 1d 23h | 5h ago | 22m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 91.88% | 98.28% | 43.93% | 43.93% | 2362 ms | ↑ 1.55x | 50 | 4m | 2d ago | 23m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 91.73% | 59.90% | 14.35% | 14.35% | 4155 ms | ↑ 2.31x | 72 | 3h 29m | 2h ago | 30m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 91.35% | 38.49% | 38.56% | 38.56% | 2336 ms | → 0.99x | 31 | 8h 3m | 5d ago | 21m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 89.84% | 16.05% | 3.85% | 3.85% | 3648 ms | → 1.00x | 35 | 15h 56m | 24h ago | 29m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 87.17% | 90.99% | 63.55% | 63.55% | 2482 ms | ↑ 1.44x | 43 | 1h 14m | 10h ago | 22m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 86.33% | 86.33% | 86.52% | 86.52% | 1629 ms | → 1.00x | 1 | 12h 20m | 6d ago | 20m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 85.85% | 85.85% | 86.03% | 86.03% | 384 ms | → 1.00x | 1 | 12h 47m | 6d ago | 20m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 85.36% | 15.11% | 21.31% | 21.31% | 2306 ms | → 1.00x | 15 | 1d 14h | 1d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 85.36% | 85.36% | 85.55% | 85.55% | 2111 ms | → 1.00x | 1 | 12h 50m | 6d ago | 20m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 85.27% | 85.27% | 85.43% | 85.43% | 1930 ms | → 1.00x | 3 | 5h 3m | 5d ago | 20m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 84.35% | 77.43% | 83.62% | 83.62% | 4530 ms | ↑ 1.06x | 602 | 5m | 14h ago | 23m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 83.74% | 66.46% | 62.54% | 62.54% | 4647 ms | ↓ 0.91x | 774 | 7m | 20h ago | 30m ago |
| [New API](https://lmspeed.net/provider/dreamchatbot-top) | 83.62% | 83.62% | 83.83% | 83.83% | 1669 ms | → 1.00x | 1 | 13h 10m | 5d ago | 20m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 82.87% | 75.80% | 82.90% | 82.90% | 4452 ms | → 1.03x | 610 | 6m | 3h ago | 35m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 82.81% | 77.83% | 83.16% | 83.16% | 4448 ms | ↑ 1.06x | 613 | 4m | 15h ago | 31m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 82.60% | 77.04% | 69.56% | 69.56% | 4449 ms | ↑ 1.07x | 629 | 4m | 15h ago | 30m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 81.69% | 76.18% | 82.33% | 82.33% | 3996 ms | ↓ 0.85x | 596 | 6m | 4d ago | 33m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 80.84% | 80.84% | 81.08% | 81.08% | 2154 ms | → 1.00x | 6 | 2h 2m | 22h ago | 20m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 80.73% | 77.05% | 77.87% | 77.87% | 4815 ms | ↑ 1.15x | 594 | 5m | 14h ago | 22m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 80.57% | 80.57% | 80.83% | 80.83% | 2680 ms | → 1.00x | 1 | 12h 30m | 5d ago | 20m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 80.30% | 80.30% | 80.55% | 80.55% | 1949 ms | → 1.00x | 2 | 6h 30m | 18h ago | 20m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 80.00% | 75.72% | 74.54% | 74.54% | 4869 ms | ↑ 1.06x | 631 | 5m | 14h ago | 22m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 79.86% | 90.00% | 92.04% | 92.04% | 4812 ms | ↓ 0.85x | 168 | 14m | 4d ago | 33m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 79.50% | 74.76% | 74.79% | 74.79% | 4532 ms | → 0.96x | 490 | 7m | 20h ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 79.45% | 75.42% | 53.70% | 53.70% | 4703 ms | ↑ 1.12x | 628 | 5m | 15h ago | 22m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 78.77% | 72.58% | 72.61% | 72.61% | 4638 ms | → 0.98x | 640 | 7m | 14h ago | 21m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 78.54% | 89.52% | 75.31% | 75.31% | 2212 ms | ↑ 1.10x | 207 | 11m | 9m ago | 29m ago |
| [New API](https://lmspeed.net/provider/new-waadri-top) | 76.54% | 76.54% | 76.79% | 76.79% | 3044 ms | → 1.00x | 2 | 7h 50m | 4d ago | 20m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 76.20% | 83.26% | 84.14% | 84.14% | 4596 ms | ↑ 1.40x | 385 | 7m | 14h ago | 22m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 74.49% | 69.66% | 60.68% | 60.68% | 2245 ms | ↑ 1.67x | 16 | 12h 26m | 5d ago | 22m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 74.47% | 92.64% | 97.79% | 97.79% | 1044 ms | ↓ 0.86x | 80 | 26m | 6d ago | 30m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 71.18% | 90.45% | 46.07% | 46.07% | 2734 ms | ↑ 1.65x | 158 | 14m | 3h ago | 30m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 70.01% | 70.95% | 82.35% | 82.35% | 3916 ms | ↓ 0.57x | 598 | 9m | 17h ago | 32m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 66.99% | 28.32% | 76.70% | 76.70% | 180 ms | → 1.03x | 8 | 2d 16h | 4d ago | 34m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 64.89% | 58.79% | 58.82% | 58.82% | 4712 ms | ↓ 0.88x | 238 | 14m | 2d ago | 35m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 63.73% | 71.23% | 71.28% | 71.28% | 4611 ms | → 1.05x | 357 | 10m | 15h ago | 21m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 59.48% | 51.12% | 87.94% | 87.94% | 1548 ms | ↑ 1.62x | 5 | 2d 19h | 5d ago | 24m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 58.79% | 38.85% | 53.93% | 53.93% | 4056 ms | ↓ 0.80x | 655 | 28m | 1d ago | 33m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 48.70% | 8.62% | 2.42% | 2.42% | 4733 ms | → 1.00x | 95 | 6h 18m | 6h ago | 23m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 47.58% | 49.54% | 61.31% | 61.31% | 4853 ms | → 1.04x | 797 | 15m | 10m ago | 30m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 44.64% | 87.89% | 40.25% | 40.25% | 384 ms | ↑ 1.15x | 19 | 4h 4m | 7d ago | 23m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 41.77% | 7.47% | 1.80% | 1.80% | 2590 ms | → 1.00x | 1 | 25d 22h | 30d ago | 29m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 41.49% | 7.41% | 1.78% | 1.78% | 2002 ms | → 1.00x | 3 | 8d 15h | 24h ago | 29m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 40.80% | 35.65% | 35.78% | 35.78% | 2469 ms | → 1.00x | 1 | 3d 16h | 8d ago | 20m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 39.21% | 7.08% | 1.72% | 1.72% | 1350 ms | → 1.00x | 1 | 26d 2h | 30d ago | 33m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 39.18% | 7.06% | 1.70% | 1.70% | 1458 ms | → 1.00x | 1 | 26d 2h | 30d ago | 32m ago |
| [xAI](https://lmspeed.net/provider/xai) | 39.15% | 7.07% | 1.70% | 1.70% | 1608 ms | → 1.00x | 1 | 26d 2h | 30d ago | 33m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 39.10% | 7.07% | 29.09% | 29.09% | 658 ms | → 1.00x | 1 | 26d 2h | 30d ago | 34m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 39.04% | 7.07% | 75.92% | 75.92% | 2366 ms | → 1.00x | 1 | 26d 2h | 30d ago | 34m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 38.83% | 6.97% | 16.17% | 16.17% | 2084 ms | → 1.00x | 1 | 26d 2h | 30d ago | 31m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 38.83% | 6.97% | 14.36% | 14.36% | 862 ms | → 1.00x | 1 | 26d 2h | 30d ago | 31m ago |
| [Crond](https://lmspeed.net/provider/crond) | 38.63% | 6.91% | 1.66% | 1.66% | 2443 ms | → 1.00x | 1 | 26d 2h | 30d ago | 29m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 38.48% | 6.87% | 26.82% | 26.82% | 790 ms | → 1.00x | 2 | 13d 1h | 23h ago | 29m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 37.96% | 6.68% | 25.25% | 25.25% | 2435 ms | → 1.00x | 1 | 26d 2h | 30d ago | 22m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 37.96% | 6.68% | 5.16% | 5.16% | 196 ms | → 1.00x | 1 | 26d 2h | 30d ago | 22m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 37.83% | 6.72% | 1.67% | 1.67% | 927 ms | → 1.00x | 2 | 13d 1h | 18d ago | 23m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 37.83% | 6.69% | 1.98% | 1.98% | 923 ms | → 1.00x | 1 | 26d 2h | 30d ago | 23m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 37.83% | 6.69% | 1.71% | 1.71% | 1060 ms | → 1.00x | 1 | 26d 2h | 30d ago | 23m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 37.77% | 6.69% | 1.60% | 1.60% | 1050 ms | → 1.00x | 2 | 13d 1h | 16h ago | 24m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 37.13% | 6.66% | 1.60% | 1.60% | 1074 ms | → 1.00x | 12 | 2d 4h | 6h ago | 30m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 36.81% | 6.64% | 1.60% | 1.60% | 2203 ms | → 1.00x | 12 | 2d 4h | 4h ago | 32m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 36.62% | 6.54% | 1.57% | 1.57% | 3513 ms | → 1.00x | 14 | 1d 21h | 7h ago | 29m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 32.21% | 9.06% | 9.10% | 9.10% | 3116 ms | → 1.00x | 34 | 11h 19m | 3h ago | 21m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 26.24% | 4.62% | 2.32% | 2.32% | 4495 ms | → 1.00x | 52 | 12h 18m | 2m ago | 22m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 16.93% | 3.04% | 1.61% | 1.61% | 4623 ms | → 1.00x | 3 | 9d 10h | 1d ago | 30m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 10.85% | 1.96% | 1.57% | 1.57% | 2337 ms | → 1.00x | 2 | 14d 10h | 20h ago | 33m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 5.27% | 58.53% | 58.54% | 58.54% | 1912 ms | ↑ 1.44x | 7 | 1d 21h | 13d ago | 21m ago |

</details>

<details open>
<summary><strong>🔴 Down (178)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 98.43% | 98.43% | 98.43% | 98.43% | 207 ms | → 1.00x | 1 | 20m | 40m ago | 20m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 94.10% | 95.12% | 96.37% | 96.37% | 3852 ms | → 1.00x | 159 | 3m | 34m ago | 34m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 93.96% | 97.61% | 99.08% | 99.08% | 3889 ms | ↑ 1.69x | 50 | 10m | 34m ago | 34m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 90.27% | 97.11% | 98.43% | 98.43% | 2823 ms | ↑ 1.34x | 46 | 29m | 22h ago | 29m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 82.43% | 95.65% | 93.05% | 93.05% | 1873 ms | ↑ 2.25x | 49 | 50m | 2d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 73.68% | 26.65% | 26.70% | 26.70% | 4336 ms | → 1.00x | 51 | 4h 60m | 14h ago | 20m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 72.35% | 73.41% | 73.50% | 73.50% | 777 ms | ↑ 1.16x | 3 | 1d 5h | 3d ago | 20m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 71.06% | 92.00% | 95.92% | 95.92% | 1578 ms | ↑ 2.44x | 6 | 15h 3m | 3d ago | 24m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 62.24% | 87.42% | 66.38% | 66.38% | 1967 ms | ↑ 1.19x | 30 | 4h 12m | 4d ago | 22m ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 62.21% | 72.03% | 72.11% | 72.11% | 764 ms | ↑ 1.29x | 2 | 2d 6h | 4d ago | 20m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 62.03% | 93.23% | 37.87% | 37.87% | 480 ms | ↓ 0.94x | 3 | 1d 7h | 4d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 62.03% | 93.28% | 98.38% | 98.38% | 2191 ms | ↑ 1.57x | 1 | 3d 21h | 4d ago | 23m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 62.03% | 91.87% | 35.73% | 35.73% | 458 ms | ↓ 0.95x | 50 | 1h 53m | 4d ago | 23m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 62.03% | 93.15% | 40.20% | 40.20% | 852 ms | ↑ 1.39x | 3 | 1d 7h | 4d ago | 23m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 62.03% | 27.47% | 6.57% | 6.57% | 1368 ms | ↑ 1.08x | 3 | 7d 6h | 4d ago | 23m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 62.02% | 85.57% | 85.58% | 85.58% | 2466 ms | ↑ 2.64x | 3 | 1d 12h | 4d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 61.97% | 87.71% | 87.71% | 87.71% | 943 ms | ↑ 1.14x | 7 | 13h 23m | 4d ago | 21m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 61.93% | 93.31% | 91.47% | 91.47% | 636 ms | → 1.03x | 2 | 1d 23h | 4d ago | 21m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 61.88% | 93.05% | 40.91% | 40.91% | 1082 ms | ↑ 1.61x | 10 | 9h 20m | 4d ago | 23m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 61.79% | 93.13% | 98.13% | 98.13% | 2640 ms | ↑ 1.98x | 5 | 18h 42m | 4d ago | 24m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 61.65% | 93.10% | 98.16% | 98.16% | 2643 ms | ↑ 1.90x | 6 | 15h 35m | 4d ago | 24m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 61.36% | 93.05% | 98.21% | 98.21% | 2890 ms | ↑ 2.43x | 7 | 13h 23m | 4d ago | 24m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 61.31% | 92.88% | 94.19% | 94.19% | 2982 ms | ↑ 1.09x | 16 | 5h 51m | 4d ago | 22m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 60.97% | 90.61% | 97.75% | 97.75% | 2625 ms | ↑ 2.99x | 80 | 1h 12m | 4d ago | 30m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 60.81% | 92.78% | 98.27% | 98.27% | 801 ms | ↑ 1.45x | 6 | 15h 33m | 4d ago | 34m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 60.80% | 92.88% | 98.25% | 98.25% | 410 ms | ↓ 0.37x | 5 | 18h 40m | 4d ago | 31m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 60.70% | 92.11% | 90.76% | 90.76% | 537 ms | ↓ 0.57x | 32 | 2h 55m | 4d ago | 33m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 60.70% | 79.35% | 79.36% | 79.36% | 1194 ms | ↑ 1.81x | 1 | 3d 21h | 4d ago | 33m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 60.67% | 92.76% | 98.22% | 98.22% | 2758 ms | ↑ 1.21x | 7 | 13h 20m | 4d ago | 34m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 60.67% | 92.73% | 98.08% | 98.08% | 2549 ms | ↑ 1.34x | 8 | 11h 40m | 4d ago | 34m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 60.56% | 91.37% | 96.85% | 96.85% | 3389 ms | → 1.02x | 58 | 1h 37m | 4d ago | 33m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 60.54% | 92.89% | 98.29% | 98.29% | 2118 ms | ↑ 2.72x | 2 | 1d 23h | 4d ago | 32m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 60.40% | 91.28% | 97.01% | 97.01% | 2265 ms | ↑ 2.42x | 52 | 1h 50m | 4d ago | 32m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 60.28% | 92.62% | 97.49% | 97.49% | 3092 ms | ↑ 1.60x | 9 | 10h 26m | 4d ago | 33m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 60.20% | 92.52% | 98.20% | 98.20% | 3156 ms | ↑ 2.47x | 16 | 5h 50m | 4d ago | 34m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 59.86% | 10.59% | 3.13% | 3.13% | 2128 ms | → 1.00x | 4 | 6d 18h | 4d ago | 23m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 59.72% | 69.57% | 91.63% | 91.63% | 3275 ms | ↓ 0.94x | 392 | 28m | 4d ago | 33m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 59.71% | 92.26% | 92.69% | 92.69% | 4140 ms | ↑ 1.23x | 38 | 2h 28m | 4d ago | 21m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 59.45% | 59.45% | 59.73% | 59.73% | 3526 ms | → 1.00x | 2 | 18h 15m | 1d ago | 20m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 56.27% | 10.09% | 2.42% | 2.42% | 1025 ms | → 1.00x | 7 | 3d 21h | 4d ago | 30m ago |
| [Groq](https://lmspeed.net/provider/groq) | 55.94% | 92.10% | 98.10% | 98.10% | 1422 ms | ↑ 2.93x | 22 | 4h 23m | 4d ago | 28m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 55.57% | 92.03% | 86.74% | 86.74% | 2887 ms | ↑ 1.30x | 29 | 3h 20m | 4d ago | 24m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 55.52% | 46.37% | 46.49% | 46.49% | 4035 ms | → 1.00x | 24 | 5h 2m | 4d ago | 20m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 53.93% | 87.14% | 95.32% | 95.32% | 4535 ms | ↑ 1.56x | 190 | 31m | 4d ago | 34m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 53.43% | 80.34% | 80.59% | 80.59% | 2584 ms | ↑ 1.23x | 412 | 16m | 4d ago | 22m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 50.14% | 88.62% | 95.70% | 95.70% | 3781 ms | ↑ 1.18x | 171 | 33m | 4d ago | 28m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 50.14% | 74.63% | 87.76% | 87.76% | 3965 ms | → 0.96x | 465 | 18m | 4d ago | 34m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 49.30% | 62.23% | 90.38% | 90.38% | 4454 ms | ↓ 0.93x | 396 | 37m | 4d ago | 35m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 48.35% | 73.79% | 93.66% | 93.66% | 4236 ms | ↑ 1.95x | 165 | 1h 10m | 4d ago | 28m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 47.47% | 8.59% | 14.75% | 14.75% | 3493 ms | → 1.00x | 11 | 2d 12h | 4d ago | 34m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 46.49% | 72.49% | 93.23% | 93.23% | 4317 ms | ↑ 1.65x | 211 | 55m | 4d ago | 34m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 45.93% | 78.80% | 77.84% | 77.84% | 4451 ms | ↑ 1.31x | 422 | 16m | 4d ago | 35m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 41.73% | 87.17% | 87.14% | 87.14% | 1048 ms | ↑ 1.16x | 9 | 14h 34m | 5d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 41.29% | 57.73% | 70.46% | 70.46% | 4766 ms | ↓ 0.94x | 682 | 18m | 1d ago | 35m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 40.03% | 59.03% | 40.25% | 40.25% | 4749 ms | ↑ 1.06x | 739 | 16m | 4d ago | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 39.91% | 88.94% | 90.31% | 90.31% | 2522 ms | ↑ 3.55x | 13 | 9h 17m | 5d ago | 21m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 36.74% | 36.74% | 36.93% | 36.93% | 1631 ms | → 1.00x | 2 | 2d 5h | 4d ago | 20m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 33.10% | 55.45% | 69.87% | 69.87% | 4650 ms | → 1.05x | 776 | 17m | 4d ago | 30m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 33.01% | 58.97% | 75.68% | 75.68% | 4920 ms | ↑ 1.44x | 720 | 16m | 4d ago | 35m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 31.63% | 5.57% | 2.63% | 2.63% | 4479 ms | → 1.00x | 123 | 5h 5m | 22m ago | 22m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 25.89% | 74.17% | 61.13% | 61.13% | 2766 ms | ↓ 0.94x | 47 | 4h 27m | 4d ago | 31m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 23.52% | 23.52% | 23.49% | 23.49% | 1969 ms | → 1.00x | 3 | 1d 13h | 2d ago | 33m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 21.40% | 69.56% | 31.49% | 31.49% | 3944 ms | → 1.00x | 504 | 20m | 4d ago | 22m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 11.82% | 19.68% | 19.46% | 19.46% | 3218 ms | ↑ 1.40x | 564 | 52m | 4d ago | 22m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 8.70% | 8.70% | 8.97% | 8.97% | 582 ms | → 1.00x | 2 | 2d 5h | 4d ago | 20m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 6.73% | 1.38% | 1.38% | 1.38% | 1348 ms | → 1.00x | 2 | 12d 22h | 6d ago | 21m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 3.62% | 82.76% | 39.61% | 39.61% | 1295 ms | → 1.00x | 4 | 1d 17h | 7d ago | 23m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 3.48% | 0.62% | 4.48% | 4.48% | 730 ms | → 1.00x | 3 | 9d 22h | 4d ago | 22m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 3.15% | 0.56% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 4d ago | 29m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 3.13% | 0.56% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 4d ago | 30m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 2.95% | 0.53% | 46.07% | 46.07% | 444 ms | → 1.00x | 2 | 14d 22h | 4d ago | 33m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.72% | 0.54% | 0.13% | 0.13% | 832 ms | ↓ 0.71x | 18 | 1d 16h | 5d ago | 28m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 30.62% | 80.69% | 80.69% | — | — | 6 | 3d 15h | 22d ago | 29m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.76% | 6.76% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 16.70% | 4.00% | 4.00% | — | — | 2 | 12d 17h | 22d ago | 30m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 42.90% | 42.90% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 14.59% | 31.80% | 31.80% | — | — | 3 | 8d 16h | 25d ago | 22m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 58.20% | 73.99% | 73.99% | — | — | 345 | 49m | 10d ago | 32m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 33m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 34m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.59% | 4.59% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 34m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 22.05% | 22.05% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 13.18% | 47.89% | 47.89% | — | — | 2 | 13d 5h | 26d ago | 22m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 34.16% | 35.81% | 35.81% | — | — | 3 | 6d 22h | 21d ago | 22m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 64.32% | 64.32% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.88% | 15.88% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 67.44% | 67.44% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.51% | 8.51% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 6.70% | 77.56% | 77.56% | — | — | 1 | 28d 4h | 28d ago | 32m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 14.14% | 14.14% | 14.14% | — | — | 5 | 3d 24h | 20d ago | 21m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 16h | 20d ago | 21m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 44.50% | 47.76% | 47.76% | — | — | 5 | 3d 14h | 18d ago | 21m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 18.69% | 18.68% | 18.68% | — | — | 5 | 3d 11h | 17d ago | 21m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 62.36% | 62.36% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 45.60% | 86.83% | 86.83% | — | — | 2 | 8d 18h | 18d ago | 32m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 34m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 55.06% | 55.06% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 35m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 50.06% | 50.06% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 21h | 17d ago | 21m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 69.32% | 69.32% | — | — | 3 | 9d 24h | 16d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 21h | 7d ago | 33m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 19h | 7d ago | 24m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 49.18% | 49.18% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 71.55% | 59.61% | 59.61% | — | — | 12 | 20h 60m | 11d ago | 22m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 23m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 17h | 20d ago | 21m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 19h | 7d ago | 24m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 72.99% | 93.45% | 93.45% | — | — | 58 | 3h 48m | 9d ago | 28m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.31% | 4.31% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 51.16% | 51.16% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 31m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.53% | 33.53% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.55% | 28.55% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 32m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.68% | 20.68% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 58.63% | 58.63% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 65.33% | 65.33% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 65.58% | 91.69% | 91.69% | — | — | 1 | 12d 3h | 12d ago | 28m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 22h | 9d ago | 20m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 32m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 34m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 58.87% | 88.85% | 88.85% | — | — | 22 | 14h 59m | 14d ago | 33m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.48% | 23.48% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 23.75% | 80.87% | 80.87% | — | — | 2 | 11d 18h | 11d ago | 32m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 22.77% | 36.08% | 36.08% | — | — | 115 | 4h 41m | 8d ago | 22m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 20.78% | 10.61% | 10.61% | — | — | 2 | 12d 4h | 23d ago | 22m ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.05% | 0.05% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 19.62% | 80.11% | 80.11% | — | — | 2 | 12d 8h | 25d ago | 33m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 22.74% | 22.73% | 22.73% | — | — | 3 | 7d 10h | 22d ago | 21m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 20h | 7d ago | 33m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.27% | 21.27% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 4.13% | 59.15% | 59.15% | — | — | 2 | 14d 10h | 29d ago | 31m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 49.05% | 49.05% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 66.17% | 91.88% | 91.88% | — | — | 2 | 5d 23h | 12d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |

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
