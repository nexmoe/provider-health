# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**528 providers** — 233 🟢 operational · 118 🟡 degraded · 177 🔴 down · 0 ⚫ unknown

_Updated 2026-04-24 05:40 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (233)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2280 ms | → 1.00x | 0 | — | — | 7m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2585 ms | → 1.00x | 0 | — | — | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2969 ms | → 1.00x | 0 | — | — | 7m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 459 ms | → 1.00x | 0 | — | — | 7m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3319 ms | → 1.00x | 0 | — | — | 7m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 561 ms | → 1.00x | 0 | — | — | 7m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2343 ms | → 1.00x | 0 | — | — | 7m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 486 ms | → 1.00x | 0 | — | — | 7m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 3119 ms | → 1.00x | 0 | — | — | 7m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3347 ms | → 1.00x | 0 | — | — | 7m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1300 ms | → 1.00x | 0 | — | — | 7m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 148 ms | → 1.00x | 0 | — | — | 7m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.85% | 99.92% | 90.79% | 90.79% | 1580 ms | ↑ 2.18x | 2 | 0s | 21d ago | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.85% | 99.95% | 99.99% | 99.99% | 767 ms | ↑ 1.21x | 1 | 0s | 21d ago | 20m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.85% | 99.92% | 99.99% | 99.99% | 438 ms | ↓ 0.69x | 2 | 0s | 10d ago | 20m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.85% | 99.95% | 99.70% | 99.70% | 1935 ms | ↑ 1.74x | 1 | 0s | 30d ago | 18m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.85% | 99.87% | 99.96% | 99.96% | 2771 ms | ↑ 1.44x | 4 | 0s | 15d ago | 19m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.85% | 99.87% | 100.00% | 100.00% | 870 ms | ↑ 1.05x | 0 | — | — | 18m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.85% | 99.92% | 99.81% | 99.81% | 1140 ms | ↑ 1.14x | 2 | 0s | 11d ago | 19m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.85% | 99.95% | 99.93% | 99.93% | 1076 ms | ↑ 1.68x | 1 | 0s | 17d ago | 18m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.85% | 99.90% | 99.90% | 99.90% | 1033 ms | → 1.01x | 3 | 0s | 13d ago | 18m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.85% | 99.92% | 99.94% | 99.94% | 1620 ms | ↑ 1.28x | 2 | 0s | 10d ago | 18m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.85% | 99.82% | 99.89% | 99.89% | 1575 ms | ↑ 2.01x | 6 | 0s | 7d ago | 18m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.85% | 99.25% | 99.54% | 99.54% | 1036 ms | → 1.02x | 24 | 2m | 9d ago | 18m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.85% | 99.12% | 99.51% | 99.51% | 1336 ms | ↑ 1.32x | 7 | 37m | 11d ago | 18m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.85% | 99.74% | 99.63% | 99.63% | 1162 ms | → 1.04x | 9 | 0s | 15d ago | 18m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.85% | 99.77% | 99.71% | 99.71% | 2474 ms | ↑ 1.16x | 8 | 0s | 10d ago | 18m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.85% | 99.87% | 99.70% | 99.70% | 2124 ms | ↑ 1.47x | 3 | 3m | 15d ago | 18m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.85% | 99.90% | 99.91% | 99.91% | 1812 ms | ↓ 0.90x | 3 | 0s | 17d ago | 18m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.85% | 99.65% | 99.68% | 99.68% | 1810 ms | ↑ 1.19x | 10 | 0s | 8d ago | 18m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.85% | 99.07% | 58.67% | 58.67% | 914 ms | ↓ 0.83x | 31 | 1m | 14d ago | 19m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.85% | 99.33% | 99.50% | 99.50% | 1088 ms | ↑ 1.39x | 17 | 5m | 9d ago | 19m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.85% | 99.09% | 99.76% | 99.76% | 1600 ms | ↑ 1.08x | 34 | 0s | 14d ago | 18m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.85% | 98.00% | 99.39% | 99.39% | 1016 ms | ↑ 1.05x | 60 | 3m | 10d ago | 19m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.85% | 99.56% | 99.68% | 99.68% | 1048 ms | ↓ 0.91x | 6 | 17m | 11d ago | 19m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.85% | 99.84% | 99.93% | 99.93% | 368 ms | → 0.97x | 5 | 0s | 10d ago | 18m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.84% | 99.97% | 99.35% | 99.35% | 2028 ms | ↑ 2.14x | 0 | — | — | 17m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.84% | 99.95% | 99.99% | 99.99% | 1593 ms | ↑ 1.76x | 1 | 0s | 14d ago | 17m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.84% | 99.45% | 99.79% | 99.79% | 1224 ms | ↑ 1.07x | 20 | 0s | 8d ago | 17m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.84% | 99.87% | 99.91% | 99.91% | 1514 ms | ↑ 1.25x | 4 | 0s | 8d ago | 17m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.84% | 95.42% | 96.95% | 96.95% | 3511 ms | ↑ 2.00x | 7 | 3h 60m | 8d ago | 16m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.84% | 99.87% | 51.32% | 51.32% | 3662 ms | ↑ 2.10x | 4 | 0s | 9d ago | 16m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.84% | 99.95% | 99.91% | 99.91% | 1370 ms | ↑ 1.09x | 1 | 0s | 8d ago | 16m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.84% | 99.61% | 99.70% | 99.70% | 1391 ms | ↑ 1.15x | 7 | 10m | 8d ago | 16m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.84% | 99.97% | 99.98% | 99.98% | 2379 ms | ↑ 1.66x | 0 | — | — | 15m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.84% | 99.71% | 99.43% | 99.43% | 2364 ms | ↑ 1.59x | 10 | 0s | 8d ago | 15m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.84% | 99.92% | 33.19% | 33.19% | 2309 ms | ↓ 0.77x | 2 | 0s | 8d ago | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.84% | 97.24% | 99.33% | 99.33% | 1937 ms | ↑ 1.59x | 79 | 3m | 14d ago | 15m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.84% | 98.48% | 35.21% | 35.21% | 817 ms | ↑ 1.07x | 47 | 2m | 8d ago | 10m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.84% | 99.69% | 98.83% | 98.83% | 1079 ms | ↑ 1.51x | 4 | 18m | 22d ago | 10m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.84% | 19.21% | 5.01% | 5.01% | 715 ms | ↑ 1.06x | 1 | 22d 4h | 30d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.84% | 99.45% | 98.43% | 98.43% | 698 ms | ↑ 1.10x | 16 | 2m | 7d ago | 9m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.84% | 99.90% | 99.80% | 99.80% | 774 ms | ↑ 1.26x | 3 | 0s | 9d ago | 10m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.84% | 94.21% | 94.26% | 94.26% | 2303 ms | ↑ 1.60x | 1 | 18h 20m | 17d ago | 7m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.84% | 95.16% | 95.21% | 95.21% | 1525 ms | ↑ 1.78x | 3 | 5h 3m | 9d ago | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.84% | 92.16% | 92.21% | 92.21% | 2283 ms | ↑ 1.43x | 1 | 1d 1h | 17d ago | 7m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.84% | 99.88% | 99.94% | 99.94% | 1466 ms | ↑ 1.09x | 1 | 0s | 10d ago | 7m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.84% | 98.12% | 98.19% | 98.19% | 1875 ms | ↑ 1.28x | 3 | 1h 20m | 13d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.84% | 99.92% | 100.00% | 100.00% | 597 ms | ↓ 0.94x | 0 | — | — | 7m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.84% | 52.76% | 52.82% | 52.82% | 1307 ms | → 1.02x | 2 | 3d 2h | 9d ago | 7m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.84% | 99.95% | 100.00% | 100.00% | 1228 ms | ↑ 1.54x | 0 | — | — | 7m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.84% | 92.94% | 93.03% | 93.03% | 267 ms | ↑ 1.13x | 1 | 13h 50m | 12d ago | 7m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.84% | 99.69% | 99.75% | 99.75% | 1534 ms | ↑ 1.21x | 4 | 0s | 8d ago | 7m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.84% | 99.88% | 99.94% | 99.94% | 1454 ms | ↑ 1.68x | 1 | 0s | 10d ago | 7m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.84% | 99.50% | 99.59% | 99.59% | 236 ms | ↓ 0.35x | 4 | 3m | 9d ago | 7m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.84% | 95.13% | 95.21% | 95.21% | 2073 ms | ↑ 1.09x | 1 | 9h 60m | 12d ago | 7m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.84% | 94.57% | 94.63% | 94.63% | 1532 ms | ↑ 1.22x | 13 | 1h 4m | 7d ago | 7m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.84% | 99.85% | 99.93% | 99.93% | 1728 ms | ↑ 1.22x | 1 | 0s | 8d ago | 7m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.84% | 91.42% | 91.48% | 91.48% | 1975 ms | → 1.05x | 4 | 5h 15m | 8d ago | 7m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 99.84% | 70.29% | 70.39% | 70.39% | 2492 ms | → 1.00x | 2 | 1d 3h | 8d ago | 7m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.69% | 36.55% | 8.57% | 8.57% | 1845 ms | ↑ 1.11x | 2 | 8d 12h | 6d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.69% | 99.92% | 96.91% | 96.91% | 3520 ms | ↑ 1.60x | 2 | 0s | 6d ago | 18m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.69% | 99.95% | 99.97% | 99.97% | 1344 ms | ↑ 1.31x | 1 | 0s | 21h ago | 18m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.69% | 99.92% | 99.90% | 99.90% | 1204 ms | ↑ 1.20x | 2 | 0s | 4d ago | 18m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.69% | 99.46% | 99.44% | 99.44% | 2416 ms | ↑ 1.29x | 20 | 0s | 5d ago | 18m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.69% | 99.90% | 99.96% | 99.96% | 2022 ms | ↑ 1.26x | 3 | 0s | 6d ago | 17m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.69% | 99.58% | 97.82% | 97.82% | 2363 ms | ↑ 1.25x | 14 | 43s | 6d ago | 17m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.69% | 99.87% | 98.91% | 98.91% | 2871 ms | ↑ 2.11x | 4 | 0s | 6d ago | 17m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.69% | 96.91% | 98.55% | 98.55% | 2129 ms | ↓ 0.89x | 105 | 1m | 17h ago | 17m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.69% | 99.66% | 99.84% | 99.84% | 1782 ms | ↑ 2.09x | 6 | 10m | 3d ago | 17m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.69% | 99.82% | 98.66% | 98.66% | 2023 ms | ↑ 1.88x | 5 | 2m | 7d ago | 16m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.69% | 97.79% | 99.12% | 99.12% | 3656 ms | ↑ 2.64x | 65 | 3m | 5d ago | 16m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.69% | 99.19% | 35.29% | 35.29% | 2281 ms | ↑ 1.18x | 18 | 7m | 6d ago | 16m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.69% | 99.95% | 99.94% | 99.94% | 2704 ms | ↑ 1.59x | 1 | 0s | 3d ago | 15m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.69% | 99.82% | 99.86% | 99.86% | 1394 ms | ↑ 1.22x | 6 | 0s | 7d ago | 15m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.69% | 99.84% | 99.84% | 99.84% | 1852 ms | ↑ 1.25x | 5 | 0s | 6d ago | 14m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 99.68% | 19.18% | 4.48% | 4.48% | 1813 ms | ↑ 1.11x | 3 | 7d 9h | 6d ago | 11m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.68% | 98.56% | 97.62% | 97.62% | 2045 ms | ↑ 2.33x | 26 | 11m | 6d ago | 11m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.68% | 99.82% | 99.85% | 99.85% | 2445 ms | ↑ 1.62x | 6 | 0s | 6d ago | 14m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.68% | 19.21% | 5.41% | 5.41% | 2401 ms | ↑ 1.07x | 2 | 11d 2h | 5d ago | 11m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.68% | 99.92% | 98.63% | 98.63% | 764 ms | ↑ 1.91x | 2 | 0s | 6d ago | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.68% | 99.74% | 91.03% | 91.03% | 1014 ms | ↑ 1.31x | 9 | 0s | 6d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.68% | 99.76% | 49.12% | 49.12% | 2258 ms | ↑ 1.22x | 8 | 0s | 6d ago | 9m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.68% | 99.82% | 50.73% | 50.73% | 1633 ms | → 0.97x | 6 | 0s | 6d ago | 9m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.68% | 19.18% | 4.55% | 4.55% | 902 ms | → 1.04x | 2 | 11d 2h | 5d ago | 10m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.68% | 99.92% | 46.93% | 46.93% | 1128 ms | ↑ 2.59x | 2 | 0s | 6d ago | 9m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.68% | 99.58% | 55.73% | 55.73% | 1128 ms | ↓ 0.80x | 13 | 2m | 2d ago | 9m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.68% | 99.92% | 57.63% | 57.63% | 1721 ms | ↑ 2.04x | 2 | 0s | 6d ago | 9m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.68% | 99.63% | 95.72% | 95.72% | 1052 ms | ↑ 1.20x | 13 | 0s | 6d ago | 9m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.68% | 99.95% | 62.78% | 62.78% | 1579 ms | → 1.00x | 1 | 0s | 6d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.68% | 99.87% | 98.70% | 98.70% | 1351 ms | ↑ 1.97x | 4 | 0s | 6d ago | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.68% | 99.40% | 76.36% | 76.36% | 2371 ms | ↑ 2.55x | 17 | 3m | 6d ago | 9m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.68% | 99.90% | 67.33% | 67.33% | 1879 ms | ↑ 1.50x | 3 | 0s | 6d ago | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.68% | 99.45% | 85.64% | 85.64% | 3103 ms | ↑ 1.49x | 9 | 12m | 6d ago | 8m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.68% | 98.95% | 99.45% | 99.45% | 2047 ms | ↑ 2.48x | 18 | 12m | 6d ago | 9m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.68% | 98.35% | 97.42% | 97.42% | 1756 ms | ↑ 1.18x | 3 | 3h 47m | 6d ago | 9m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 99.68% | 19.19% | 11.06% | 11.06% | 874 ms | → 1.02x | 2 | 11d 2h | 6d ago | 8m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.68% | 98.61% | 98.08% | 98.08% | 1603 ms | ↑ 1.34x | 17 | 21m | 6d ago | 8m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.68% | 99.84% | 85.92% | 85.92% | 2791 ms | ↑ 2.17x | 5 | 0s | 6d ago | 8m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.68% | 99.95% | 90.63% | 90.63% | 2766 ms | ↑ 2.97x | 1 | 0s | 6d ago | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.68% | 99.87% | 99.04% | 99.04% | 1556 ms | ↑ 1.14x | 4 | 0s | 6d ago | 9m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.68% | 99.90% | 97.75% | 97.75% | 1695 ms | ↑ 1.99x | 3 | 0s | 6d ago | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.68% | 99.16% | 98.93% | 98.93% | 3091 ms | ↑ 1.46x | 30 | 20s | 6d ago | 8m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.68% | 99.71% | 72.04% | 72.04% | 894 ms | ↑ 1.39x | 8 | 3m | 6d ago | 9m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.68% | 99.95% | 80.70% | 80.70% | 1410 ms | ↑ 1.61x | 1 | 0s | 6d ago | 9m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.68% | 99.92% | 99.97% | 99.97% | 3037 ms | ↑ 1.72x | 2 | 0s | 6d ago | 9m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.68% | 99.61% | 98.32% | 98.32% | 2164 ms | ↑ 1.30x | 14 | 0s | 6d ago | 8m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.68% | 99.79% | 83.48% | 83.48% | 1890 ms | ↑ 1.28x | 4 | 8m | 6d ago | 9m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.68% | 99.53% | 98.10% | 98.10% | 1915 ms | ↑ 1.16x | 11 | 5m | 6d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.68% | 99.90% | 94.66% | 94.66% | 2411 ms | ↑ 2.96x | 3 | 0s | 6d ago | 8m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.68% | 99.27% | 98.16% | 98.16% | 2330 ms | ↑ 2.08x | 25 | 49s | 6d ago | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.68% | 97.90% | 96.96% | 96.96% | 1427 ms | ↑ 1.16x | 13 | 51m | 6d ago | 8m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.68% | 77.78% | 58.33% | 58.33% | 2655 ms | ↑ 1.91x | 9 | 15h 31m | 6d ago | 8m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.68% | 99.40% | 98.20% | 98.20% | 1770 ms | ↑ 1.62x | 14 | 6m | 6d ago | 8m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.68% | 99.74% | 99.76% | 99.76% | 2170 ms | ↑ 1.31x | 8 | 1m | 6d ago | 8m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.68% | 99.87% | 99.85% | 99.85% | 2090 ms | ↑ 1.66x | 4 | 0s | 6d ago | 8m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.68% | 98.98% | 81.81% | 81.81% | 1612 ms | ↑ 2.71x | 30 | 3m | 6d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.68% | 99.71% | 97.34% | 97.34% | 1714 ms | ↑ 2.83x | 10 | 0s | 6d ago | 8m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.68% | 99.00% | 99.08% | 99.08% | 2047 ms | ↑ 1.79x | 22 | 7m | 6d ago | 8m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.68% | 96.58% | 96.61% | 96.61% | 1791 ms | ↑ 1.18x | 24 | 31m | 6d ago | 7m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.68% | 99.91% | 99.94% | 99.94% | 2192 ms | ↑ 2.37x | 2 | 0s | 6d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.68% | 95.99% | 96.02% | 96.02% | 2138 ms | ↑ 1.19x | 48 | 18m | 6d ago | 7m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.68% | 90.54% | 90.57% | 90.57% | 3229 ms | ↑ 1.55x | 6 | 8h 38m | 6d ago | 7m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.68% | 97.01% | 97.04% | 97.04% | 1620 ms | ↑ 2.48x | 10 | 1h 38m | 6d ago | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.68% | 99.87% | 99.90% | 99.90% | 1024 ms | ↑ 1.13x | 4 | 0s | 6d ago | 8m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 99.68% | 28.83% | 28.87% | 28.87% | 1575 ms | ↑ 1.11x | 2 | 6d 14h | 6d ago | 7m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.68% | 99.65% | 99.68% | 99.68% | 1635 ms | ↑ 1.22x | 8 | 4m | 6d ago | 7m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.68% | 91.65% | 91.70% | 91.70% | 2001 ms | → 0.97x | 76 | 15m | 7d ago | 7m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.68% | 97.12% | 97.18% | 97.18% | 1410 ms | ↑ 1.14x | 5 | 1h 26m | 3d ago | 7m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.68% | 99.33% | 99.42% | 99.42% | 528 ms | → 0.97x | 7 | 0s | 7d ago | 7m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.68% | 88.19% | 88.28% | 88.28% | 1116 ms | ↑ 1.05x | 3 | 11h 20m | 7d ago | 7m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.68% | 97.98% | 98.11% | 98.11% | 1835 ms | → 1.03x | 3 | 37m | 6d ago | 7m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.68% | 99.84% | 99.92% | 99.92% | 1278 ms | ↑ 1.26x | 1 | 0s | 4d ago | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.68% | 99.24% | 99.33% | 99.33% | 1120 ms | ↑ 1.28x | 2 | 25m | 6d ago | 7m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.54% | 94.79% | 91.10% | 91.10% | 1381 ms | ↓ 0.88x | 116 | 8m | 6d ago | 18m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.54% | 97.07% | 97.57% | 97.57% | 3341 ms | ↑ 1.77x | 107 | 28s | 5d ago | 18m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.54% | 99.92% | 99.91% | 99.91% | 2001 ms | ↑ 1.87x | 2 | 0s | 6d ago | 18m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.54% | 99.84% | 99.65% | 99.65% | 1715 ms | ↑ 1.46x | 4 | 2m | 7d ago | 18m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.53% | 99.58% | 99.82% | 99.82% | 2125 ms | ↑ 1.54x | 10 | 6m | 1d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.53% | 98.52% | 98.32% | 98.32% | 2610 ms | ↑ 1.38x | 54 | 22s | 6d ago | 16m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.53% | 99.82% | 99.83% | 99.83% | 2742 ms | ↑ 1.63x | 6 | 0s | 6d ago | 14m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.53% | 97.47% | 96.54% | 96.54% | 1871 ms | ↓ 0.57x | 86 | 1m | 2h ago | 14m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.53% | 99.90% | 99.71% | 99.71% | 2643 ms | ↑ 1.78x | 3 | 0s | 22h ago | 14m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.53% | 99.46% | 99.60% | 99.60% | 2696 ms | ↑ 1.07x | 3 | 0s | 6d ago | 14m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.53% | 98.05% | 99.52% | 99.52% | 1419 ms | ↑ 1.57x | 62 | 2m | 22h ago | 14m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.52% | 19.18% | 4.48% | 4.48% | 2092 ms | ↑ 1.08x | 3 | 7d 9h | 14h ago | 11m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.52% | 97.52% | 97.50% | 97.50% | 855 ms | ↑ 1.99x | 15 | 53m | 6d ago | 11m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.52% | 99.69% | 53.21% | 53.21% | 1602 ms | ↑ 1.19x | 9 | 2m | 3d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.52% | 98.46% | 95.20% | 95.20% | 634 ms | ↓ 0.76x | 53 | 56s | 6d ago | 10m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.52% | 99.92% | 50.30% | 50.30% | 2212 ms | ↑ 2.77x | 2 | 0s | 6d ago | 9m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.52% | 98.48% | 58.07% | 58.07% | 1173 ms | ↑ 1.88x | 38 | 5m | 6d ago | 9m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.52% | 99.84% | 99.83% | 99.83% | 2310 ms | ↑ 1.32x | 4 | 2m | 5d ago | 9m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.52% | 99.87% | 59.57% | 59.57% | 1274 ms | ↑ 2.08x | 4 | 0s | 6d ago | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.52% | 99.63% | 74.83% | 74.83% | 2014 ms | ↑ 2.78x | 12 | 49s | 1d ago | 9m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.52% | 99.76% | 99.71% | 99.71% | 1259 ms | ↑ 1.32x | 7 | 1m | 5d ago | 8m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.52% | 19.08% | 8.58% | 8.58% | 2163 ms | ↑ 1.10x | 3 | 7d 9h | 20h ago | 9m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.52% | 92.88% | 95.22% | 95.22% | 2225 ms | ↑ 1.90x | 10 | 4h 21m | 6d ago | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.52% | 96.80% | 96.30% | 96.30% | 1748 ms | ↑ 2.02x | 29 | 32m | 20h ago | 8m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.52% | 28.22% | 20.78% | 20.78% | 1533 ms | ↑ 1.14x | 3 | 6d 9h | 6d ago | 8m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 99.52% | 19.07% | 13.20% | 13.20% | 1286 ms | ↑ 1.07x | 3 | 7d 9h | 6d ago | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.52% | 99.50% | 98.38% | 98.38% | 1406 ms | ↑ 1.08x | 18 | 0s | 6d ago | 8m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.52% | 99.74% | 98.02% | 98.02% | 1846 ms | ↑ 3.17x | 8 | 1m | 2d ago | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.52% | 96.81% | 96.85% | 96.85% | 2393 ms | ↑ 1.39x | 5 | 2h 32m | 6d ago | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.52% | 97.01% | 97.04% | 97.04% | 2436 ms | ↑ 2.28x | 5 | 3h | 14h ago | 7m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.52% | 96.47% | 96.51% | 96.51% | 2226 ms | ↑ 1.10x | 18 | 42m | 5d ago | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.52% | 97.20% | 97.24% | 97.24% | 2832 ms | ↑ 1.87x | 6 | 2h 13m | 6d ago | 7m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.52% | 98.04% | 98.08% | 98.08% | 1819 ms | ↑ 1.29x | 41 | 5m | 1d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.52% | 99.82% | 99.86% | 99.86% | 1916 ms | ↑ 1.29x | 4 | 0s | 6d ago | 7m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.52% | 96.49% | 96.54% | 96.54% | 1669 ms | ↑ 1.43x | 3 | 4h 10m | 7d ago | 7m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.52% | 96.16% | 96.21% | 96.21% | 1618 ms | ↑ 1.68x | 2 | 6h 15m | 6d ago | 7m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.51% | 91.97% | 92.03% | 92.03% | 3206 ms | ↓ 0.76x | 26 | 42m | 7d ago | 7m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.51% | 89.11% | 89.20% | 89.20% | 955 ms | → 1.05x | 8 | 4h 1m | 2d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.51% | 88.07% | 88.19% | 88.19% | 2328 ms | → 1.02x | 4 | 4h 9m | 7d ago | 7m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.49% | 99.49% | 99.49% | 99.49% | 1718 ms | → 1.00x | 1 | 0s | 2d ago | 7m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.38% | 98.81% | 99.57% | 99.57% | 2524 ms | ↑ 1.61x | 42 | 43s | 6d ago | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.38% | 98.99% | 98.84% | 98.84% | 3056 ms | ↑ 1.35x | 37 | 16s | 6d ago | 18m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.38% | 99.74% | 99.62% | 99.62% | 2816 ms | ↑ 2.05x | 9 | 0s | 4d ago | 17m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.37% | 65.07% | 15.21% | 15.21% | 3255 ms | ↑ 1.40x | 5 | 1d 21h | 6h ago | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.37% | 99.69% | 99.56% | 99.56% | 2806 ms | → 1.01x | 11 | 0s | 6d ago | 14m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.37% | 98.91% | 98.92% | 98.92% | 1471 ms | → 1.05x | 12 | 24m | 17h ago | 14m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.37% | 99.14% | 99.60% | 99.60% | 2855 ms | ↑ 1.62x | 4 | 1h 8m | 6d ago | 14m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.37% | 99.84% | 99.94% | 99.94% | 2429 ms | ↑ 3.46x | 4 | 42s | 6d ago | 14m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.36% | 96.86% | 99.23% | 99.23% | 1862 ms | ↑ 1.52x | 82 | 5m | 7d ago | 11m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.36% | 95.90% | 96.12% | 96.12% | 2142 ms | ↑ 1.20x | 77 | 10m | 6d ago | 10m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.36% | 31.74% | 16.10% | 16.10% | 2637 ms | ↑ 1.44x | 10 | 1d 19h | 6d ago | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.36% | 38.67% | 29.63% | 29.63% | 2612 ms | ↑ 1.08x | 5 | 3d 6h | 5d ago | 8m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.36% | 98.96% | 98.99% | 98.99% | 2886 ms | ↑ 1.38x | 28 | 2m | 8h ago | 7m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.36% | 19.01% | 17.86% | 17.86% | 1418 ms | ↑ 1.12x | 4 | 5d 13h | 11h ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.36% | 91.16% | 85.25% | 85.25% | 1687 ms | ↑ 1.61x | 4 | 13h 50m | 11h ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.36% | 99.70% | 99.73% | 99.73% | 2548 ms | ↑ 2.43x | 8 | 1m | 6d ago | 7m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.35% | 99.64% | 99.68% | 99.68% | 1638 ms | ↑ 1.49x | 7 | 0s | 7d ago | 7m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.35% | 95.92% | 95.97% | 95.97% | 2082 ms | ↑ 1.40x | 5 | 2h 40m | 7d ago | 7m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.35% | 95.32% | 95.37% | 95.37% | 2323 ms | ↑ 1.11x | 9 | 1h 47m | 6d ago | 7m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.35% | 76.02% | 76.09% | 76.09% | 1527 ms | ↑ 1.22x | 4 | 15h 20m | 6d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.34% | 99.34% | 99.56% | 99.56% | 2992 ms | → 1.00x | 2 | 0s | 5d ago | 7m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.23% | 99.61% | 98.88% | 98.88% | 2708 ms | ↑ 1.30x | 13 | 47s | 5d ago | 18m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.23% | 99.82% | 99.72% | 99.72% | 2899 ms | ↑ 1.50x | 6 | 0s | 5d ago | 18m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.22% | 46.47% | 45.69% | 45.69% | 1227 ms | ↑ 1.20x | 10 | 1d 10h | 3d ago | 15m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.22% | 92.42% | 97.48% | 97.48% | 2982 ms | ↑ 1.33x | 19 | 2h 23m | 22h ago | 14m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.22% | 98.75% | 99.19% | 99.19% | 2754 ms | ↑ 1.08x | 19 | 15m | 22h ago | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.20% | 99.71% | 42.10% | 42.10% | 1487 ms | ↑ 1.16x | 9 | 2m | 2d ago | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.20% | 99.58% | 98.96% | 98.96% | 1853 ms | ↑ 1.18x | 15 | 0s | 5d ago | 9m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.20% | 99.84% | 90.84% | 90.84% | 3293 ms | ↑ 1.33x | 5 | 0s | 6d ago | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.20% | 99.74% | 74.54% | 74.54% | 2920 ms | ↑ 1.64x | 8 | 1m | 6d ago | 9m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.20% | 99.58% | 72.99% | 72.99% | 2154 ms | ↑ 3.01x | 14 | 40s | 5d ago | 9m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.20% | 92.83% | 71.86% | 71.86% | 2757 ms | ↑ 1.63x | 80 | 24m | 5d ago | 9m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.20% | 98.66% | 87.69% | 87.69% | 2373 ms | → 0.97x | 39 | 3m | 2d ago | 9m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.19% | 99.71% | 99.74% | 99.74% | 1590 ms | ↑ 1.86x | 7 | 6m | 2d ago | 8m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.19% | 95.89% | 95.93% | 95.93% | 2877 ms | ↑ 2.93x | 32 | 28m | 2d ago | 7m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.07% | 99.66% | 99.72% | 99.72% | 820 ms | ↓ 0.82x | 11 | 33s | 2d ago | 19m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.07% | 99.09% | 99.27% | 99.27% | 2301 ms | ↓ 0.88x | 33 | 18s | 21h ago | 18m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.07% | 99.71% | 98.95% | 98.95% | 1547 ms | ↑ 1.95x | 7 | 4m | 5d ago | 18m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.06% | 98.88% | 99.08% | 99.08% | 2670 ms | ↑ 2.10x | 37 | 2m | 3d ago | 14m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.06% | 97.50% | 81.34% | 81.34% | 3292 ms | ↓ 0.73x | 91 | 26s | 6d ago | 14m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 99.04% | 97.41% | 97.10% | 97.10% | 1103 ms | ↑ 1.07x | 20 | 39m | 6d ago | 8m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.04% | 99.82% | 99.85% | 99.85% | 2265 ms | ↑ 3.67x | 5 | 2m | 6d ago | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.04% | 69.90% | 55.90% | 55.90% | 2232 ms | ↑ 2.37x | 5 | 1d 14h | 6d ago | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.03% | 93.10% | 94.21% | 94.21% | 2468 ms | ↑ 2.43x | 22 | 1h 49m | 6d ago | 8m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.03% | 99.68% | 99.71% | 99.71% | 2543 ms | ↑ 3.05x | 10 | 0s | 8h ago | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.03% | 99.71% | 97.85% | 97.85% | 899 ms | ↑ 2.23x | 7 | 9m | 5d ago | 8m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.03% | 99.58% | 97.54% | 97.54% | 2497 ms | ↑ 2.52x | 14 | 43s | 6d ago | 8m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 99.03% | 23.54% | 23.57% | 23.57% | 2014 ms | → 0.96x | 6 | 2d 20h | 8h ago | 7m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 99.03% | 74.74% | 74.84% | 74.84% | 1990 ms | → 0.99x | 7 | 5h 50m | 6d ago | 7m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (118)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 98.90% | 99.53% | 99.78% | 99.78% | 2928 ms | ↑ 1.73x | 16 | 10s | 2d ago | 14m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.88% | 99.19% | 84.69% | 84.69% | 1712 ms | ↑ 2.12x | 30 | 0s | 1d ago | 9m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.88% | 95.31% | 94.88% | 94.88% | 2784 ms | ↑ 1.50x | 111 | 6m | 5d ago | 8m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 98.88% | 98.53% | 98.65% | 98.65% | 2430 ms | ↑ 2.36x | 31 | 8m | 3h ago | 8m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.87% | 18.93% | 16.66% | 16.66% | 2151 ms | ↑ 1.16x | 6 | 3d 17h | 6d ago | 8m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.76% | 99.56% | 90.59% | 90.59% | 3251 ms | ↑ 4.44x | 15 | 40s | 6d ago | 20m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.76% | 99.43% | 99.12% | 99.12% | 2786 ms | ↑ 2.77x | 20 | 30s | 6d ago | 18m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 98.76% | 99.74% | 90.25% | 90.25% | 955 ms | ↑ 1.85x | 4 | 25m | 1d ago | 18m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 98.76% | 99.71% | 99.75% | 99.75% | 3215 ms | ↑ 1.74x | 7 | 4m | 6d ago | 18m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 98.72% | 99.42% | 97.50% | 97.50% | 2711 ms | ↑ 2.70x | 20 | 30s | 6d ago | 8m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.71% | 95.83% | 95.86% | 95.86% | 3474 ms | ↑ 1.44x | 80 | 7m | 5d ago | 7m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 98.71% | 99.51% | 99.55% | 99.55% | 1230 ms | ↑ 1.33x | 7 | 9m | 22h ago | 7m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.71% | 91.23% | 91.28% | 91.28% | 1430 ms | ↑ 1.20x | 54 | 25m | 5d ago | 7m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.61% | 99.09% | 98.46% | 98.46% | 4130 ms | ↑ 1.60x | 34 | 0s | 5d ago | 20m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.61% | 99.30% | 99.37% | 99.37% | 4071 ms | ↑ 1.77x | 8 | 3m | 11h ago | 20m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.61% | 99.59% | 99.90% | 99.90% | 4161 ms | ↑ 3.27x | 15 | 0s | 13h ago | 19m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.61% | 99.58% | 86.94% | 86.94% | 2784 ms | ↑ 2.86x | 14 | 43s | 6d ago | 18m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.60% | 98.52% | 90.57% | 90.57% | 2740 ms | → 1.03x | 54 | 22s | 5d ago | 17m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.56% | 97.98% | 96.22% | 96.22% | 2547 ms | ↑ 1.56x | 66 | 2m | 4d ago | 8m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.55% | 98.03% | 98.25% | 98.25% | 2347 ms | ↑ 2.90x | 48 | 5m | 22h ago | 8m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 98.55% | 95.12% | 93.12% | 93.12% | 1348 ms | ↓ 0.76x | 129 | 4m | 6d ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 98.54% | 67.76% | 67.85% | 67.85% | 852 ms | → 0.98x | 10 | 7h 2m | 5d ago | 7m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.44% | 99.48% | 99.70% | 99.70% | 3245 ms | ↑ 1.53x | 16 | 2m | 5d ago | 15m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.41% | 97.78% | 98.77% | 98.77% | 2726 ms | ↑ 2.23x | 57 | 5m | 6d ago | 11m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.40% | 65.48% | 49.17% | 49.17% | 2962 ms | ↑ 1.07x | 6 | 1d 15h | 3h ago | 9m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 98.39% | 96.61% | 96.65% | 96.65% | 1771 ms | ↑ 1.18x | 60 | 3m | 6d ago | 7m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.38% | 86.82% | 86.87% | 86.87% | 2305 ms | ↑ 1.38x | 16 | 2h 28m | 5d ago | 7m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 98.30% | 98.55% | 98.68% | 98.68% | 3401 ms | ↑ 1.10x | 9 | 1m | 6d ago | 18m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.24% | 99.19% | 88.79% | 88.79% | 3648 ms | ↑ 1.28x | 30 | 0s | 2d ago | 9m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 98.23% | 91.64% | 91.67% | 91.67% | 3540 ms | ↑ 2.00x | 71 | 29m | 6d ago | 7m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.14% | 99.59% | 99.90% | 99.90% | 3624 ms | ↑ 2.27x | 12 | 2m | 6d ago | 18m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 98.06% | 40.32% | 40.36% | 40.36% | 2356 ms | → 1.01x | 31 | 8h 3m | 6d ago | 7m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 97.93% | 18.89% | 4.41% | 4.41% | 3160 ms | → 1.03x | 12 | 1d 20h | 6d ago | 11m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 97.89% | 73.51% | 73.61% | 73.61% | 1795 ms | → 1.03x | 7 | 6h 17m | 14h ago | 7m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 97.73% | 86.73% | 86.87% | 86.87% | 1788 ms | → 0.99x | 3 | 5h 3m | 6d ago | 7m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.68% | 97.82% | 99.47% | 99.47% | 4087 ms | ↑ 2.69x | 71 | 2m | 13h ago | 19m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 97.58% | 87.50% | 87.53% | 87.53% | 3269 ms | ↑ 1.82x | 110 | 25m | 1d ago | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.52% | 97.52% | 97.65% | 97.65% | 3936 ms | ↑ 1.06x | 18 | 0s | 16h ago | 19m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 97.37% | 99.43% | 99.71% | 99.71% | 2221 ms | ↑ 1.67x | 6 | 50m | 1d ago | 18m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 97.28% | 99.14% | 72.58% | 72.58% | 3239 ms | ↑ 1.51x | 18 | 15m | 5d ago | 9m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 97.26% | 71.79% | 71.84% | 71.84% | 2217 ms | ↑ 1.20x | 53 | 2h 2m | 21h ago | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.06% | 99.12% | 99.69% | 99.69% | 4051 ms | ↑ 1.49x | 33 | 0s | 13h ago | 19m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.90% | 98.75% | 98.75% | 98.75% | 4019 ms | ↑ 1.10x | 32 | 6m | 15h ago | 18m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.55% | 95.36% | 96.02% | 96.02% | 3140 ms | ↑ 1.47x | 45 | 30m | 6d ago | 15m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 96.28% | 99.12% | 99.67% | 99.67% | 647 ms | → 1.03x | 12 | 18m | 4d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 96.15% | 96.15% | 96.37% | 96.37% | 2480 ms | → 1.00x | 2 | 2h 29m | 15h ago | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 95.82% | 97.12% | 96.08% | 96.08% | 2675 ms | ↑ 1.63x | 54 | 11m | 2d ago | 18m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 95.67% | 95.13% | 98.67% | 98.67% | 3512 ms | ↑ 1.36x | 138 | 4m | 13h ago | 19m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 95.36% | 97.49% | 97.77% | 97.77% | 4531 ms | ↑ 1.68x | 88 | 1m | 5d ago | 19m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.35% | 90.81% | 63.84% | 63.84% | 2500 ms | ↑ 1.45x | 43 | 1h 14m | 1d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 93.11% | 69.05% | 61.07% | 61.07% | 2243 ms | ↑ 1.63x | 17 | 11h 43m | 23h ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 93.08% | 92.74% | 92.76% | 92.76% | 2664 ms | ↑ 2.40x | 81 | 23m | 8h ago | 7m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 92.52% | 98.25% | 44.20% | 44.20% | 2151 ms | ↑ 1.58x | 50 | 4m | 3d ago | 10m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 90.89% | 18.23% | 4.27% | 4.27% | 3726 ms | → 1.01x | 36 | 14h 49m | 17h ago | 14m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 90.87% | 97.15% | 98.99% | 98.99% | 4089 ms | ↑ 1.87x | 63 | 9m | 3h ago | 19m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 88.22% | 17.28% | 21.75% | 21.75% | 2324 ms | → 1.04x | 15 | 1d 13h | 2d ago | 9m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 88.11% | 67.86% | 62.70% | 62.70% | 4535 ms | ↓ 0.86x | 734 | 7m | 2d ago | 15m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 87.93% | 87.93% | 88.10% | 88.10% | 1633 ms | → 1.00x | 1 | 12h 20m | 7d ago | 7m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 87.74% | 77.73% | 83.70% | 83.70% | 4571 ms | ↑ 1.06x | 581 | 5m | 2d ago | 10m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 87.50% | 87.50% | 87.66% | 87.66% | 376 ms | → 1.00x | 1 | 12h 47m | 7d ago | 7m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 87.46% | 94.02% | 96.14% | 96.14% | 4137 ms | → 1.03x | 175 | 5m | 2h ago | 19m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 87.10% | 87.10% | 87.27% | 87.27% | 2137 ms | → 1.00x | 1 | 12h 50m | 7d ago | 7m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 86.45% | 78.30% | 83.23% | 83.23% | 4440 ms | → 1.05x | 594 | 4m | 2h ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 86.22% | 76.44% | 82.41% | 82.41% | 3734 ms | ↓ 0.77x | 576 | 6m | 5d ago | 18m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 85.78% | 76.11% | 82.97% | 82.97% | 4448 ms | → 1.03x | 590 | 6m | 1d ago | 20m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 85.77% | 85.77% | 85.95% | 85.95% | 1670 ms | → 1.00x | 1 | 13h 10m | 6d ago | 7m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 84.27% | 77.34% | 78.16% | 78.16% | 4847 ms | ↑ 1.21x | 577 | 5m | 16h ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 83.88% | 77.12% | 69.67% | 69.67% | 4550 ms | ↑ 1.10x | 613 | 4m | 15h ago | 15m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 83.81% | 75.70% | 54.07% | 54.07% | 4704 ms | ↑ 1.13x | 610 | 5m | 21h ago | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 83.59% | 83.59% | 83.81% | 83.81% | 2826 ms | → 1.00x | 1 | 12h 30m | 6d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 83.47% | 83.47% | 83.68% | 83.68% | 2156 ms | → 1.00x | 7 | 1h 44m | 20h ago | 7m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 83.31% | 76.35% | 74.84% | 74.84% | 4872 ms | → 1.05x | 604 | 5m | 15h ago | 8m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 83.26% | 83.26% | 83.47% | 83.47% | 1897 ms | → 1.00x | 2 | 6h 30m | 2d ago | 7m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 82.29% | 72.97% | 72.99% | 72.99% | 4605 ms | → 0.97x | 644 | 7m | 11h ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 80.44% | 90.11% | 46.27% | 46.27% | 2786 ms | ↑ 1.67x | 164 | 14m | 3h ago | 15m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 79.71% | 74.66% | 74.69% | 74.69% | 4487 ms | ↓ 0.91x | 491 | 8m | 8h ago | 7m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 79.32% | 71.92% | 71.96% | 71.96% | 4616 ms | ↑ 1.05x | 359 | 10m | 18h ago | 7m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 78.79% | 78.79% | 78.79% | 78.79% | 1389 ms | → 1.00x | 1 | 13h 57m | 1d ago | 7m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 78.76% | 71.08% | 82.43% | 82.43% | 3635 ms | ↓ 0.45x | 578 | 9m | 2d ago | 17m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 78.65% | 82.86% | 84.32% | 84.32% | 4607 ms | ↑ 1.42x | 388 | 7m | 10h ago | 8m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 78.33% | 89.91% | 92.07% | 92.07% | 4842 ms | ↓ 0.78x | 164 | 14m | 5d ago | 18m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 76.91% | 50.17% | 87.99% | 87.99% | 1505 ms | ↑ 1.57x | 5 | 2d 19h | 6d ago | 11m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 73.40% | 92.63% | 97.80% | 97.80% | 1070 ms | → 0.95x | 79 | 26m | 7d ago | 15m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 72.33% | 28.04% | 28.09% | 28.09% | 4341 ms | → 1.04x | 51 | 5h 10m | 2d ago | 7m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 70.74% | 26.44% | 76.67% | 76.67% | 183 ms | → 1.02x | 8 | 2d 17h | 9h ago | 19m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 70.32% | 60.95% | 60.95% | 60.95% | 4642 ms | ↓ 0.85x | 238 | 14m | 3d ago | 20m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 69.35% | 40.01% | 54.13% | 54.13% | 3703 ms | ↓ 0.77x | 630 | 28m | 21h ago | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 66.61% | 91.58% | 95.87% | 95.87% | 1837 ms | ↑ 3.11x | 5 | 18h 45m | 4d ago | 11m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 60.03% | 10.51% | 2.88% | 2.88% | 4690 ms | → 0.97x | 101 | 5h 41m | 28m ago | 9m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 57.14% | 9.49% | 2.22% | 2.22% | 2461 ms | → 1.00x | 2 | 12d 11h | 22h ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 56.83% | 9.43% | 2.21% | 2.21% | 2155 ms | → 1.00x | 4 | 6d 6h | 17h ago | 14m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 56.40% | 41.04% | 41.16% | 41.16% | 2382 ms | → 1.00x | 1 | 3d 16h | 9d ago | 7m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 54.49% | 9.12% | 29.40% | 29.40% | 664 ms | → 1.00x | 1 | 25d 2h | 30d ago | 19m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 54.49% | 9.12% | 76.03% | 76.03% | 2530 ms | → 1.00x | 1 | 25d 2h | 30d ago | 19m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 54.49% | 9.13% | 2.16% | 2.16% | 1385 ms | → 1.00x | 1 | 25d 2h | 30d ago | 18m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 54.42% | 9.11% | 2.13% | 2.13% | 1864 ms | → 1.00x | 1 | 25d 2h | 30d ago | 17m ago |
| [xAI](https://lmspeed.net/provider/xai) | 54.33% | 9.10% | 2.13% | 2.13% | 1660 ms | → 1.00x | 2 | 12d 13h | 14h ago | 18m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 54.13% | 9.02% | 16.55% | 16.55% | 2230 ms | → 1.00x | 1 | 25d 2h | 30d ago | 16m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 54.13% | 9.02% | 14.74% | 14.74% | 869 ms | → 1.00x | 1 | 25d 2h | 30d ago | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 53.85% | 8.94% | 2.09% | 2.09% | 2439 ms | → 1.00x | 1 | 25d 2h | 30d ago | 14m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 53.69% | 8.91% | 27.14% | 27.14% | 870 ms | → 1.00x | 2 | 12d 13h | 2d ago | 14m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 53.13% | 8.67% | 26.25% | 26.25% | 2420 ms | → 1.00x | 1 | 25d 2h | 30d ago | 8m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 53.13% | 8.67% | 6.45% | 6.45% | 219 ms | → 1.00x | 1 | 25d 2h | 30d ago | 8m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 53.03% | 87.66% | 40.57% | 40.57% | 400 ms | ↑ 1.18x | 19 | 4h 4m | 8d ago | 9m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 53.03% | 8.73% | 2.10% | 2.10% | 969 ms | → 1.00x | 2 | 12d 13h | 19d ago | 10m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 53.03% | 8.70% | 2.50% | 2.50% | 886 ms | → 1.00x | 1 | 25d 2h | 30d ago | 9m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 53.03% | 8.70% | 2.17% | 2.17% | 1045 ms | → 1.00x | 1 | 25d 2h | 30d ago | 10m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 52.87% | 8.68% | 2.02% | 2.02% | 1093 ms | → 1.00x | 3 | 8d 9h | 14h ago | 11m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 52.03% | 8.66% | 2.03% | 2.03% | 1013 ms | → 1.00x | 13 | 1d 22h | 23h ago | 15m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 51.33% | 8.52% | 1.99% | 1.99% | 3474 ms | → 1.00x | 16 | 1d 14h | 17h ago | 14m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 50.80% | 91.80% | 97.96% | 97.96% | 3249 ms | ↑ 2.88x | 10 | 10h 42m | 12h ago | 11m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 49.84% | 50.09% | 61.35% | 61.35% | 4852 ms | → 1.04x | 779 | 15m | 55m ago | 15m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 49.23% | 8.25% | 1.93% | 1.93% | 2250 ms | → 1.00x | 21 | 1d 5h | 7h ago | 18m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 45.73% | 11.36% | 11.36% | 11.36% | 3769 ms | → 1.00x | 41 | 9h 23m | 2h ago | 7m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 30.00% | 4.99% | 2.04% | 2.04% | 4363 ms | → 1.00x | 3 | 9d 2h | 2d ago | 15m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 23.37% | 3.91% | 2.99% | 2.99% | 2025 ms | → 1.00x | 2 | 13d 22h | 2d ago | 18m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 17.07% | 59.29% | 59.29% | 59.29% | 2562 ms | ↑ 1.74x | 8 | 1d 16h | 13h ago | 8m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 9.08% | 82.20% | 39.83% | 39.83% | 279 ms | ↓ 0.15x | 2 | 3d 12h | 8d ago | 9m ago |

</details>

<details open>
<summary><strong>🔴 Down (177)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.23% | 99.84% | 99.95% | 99.95% | 1537 ms | ↑ 1.55x | 2 | 30m | 1h ago | 18m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 93.40% | 97.03% | 97.06% | 97.06% | 4304 ms | ↑ 1.53x | 70 | 4m | 7m ago | 7m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 89.37% | 58.96% | 58.98% | 58.98% | 1746 ms | ↑ 1.50x | 9 | 1d 6h | 21h ago | 8m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 89.20% | 62.52% | 14.62% | 14.62% | 4161 ms | ↑ 2.75x | 84 | 2h 43m | 35m ago | 15m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 88.89% | 97.15% | 97.18% | 97.18% | 1425 ms | → 1.01x | 10 | 2h 27m | 22h ago | 7m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 81.32% | 88.67% | 75.27% | 75.27% | 2218 ms | ↑ 1.09x | 223 | 11m | 14m ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 78.57% | 78.57% | 78.78% | 78.78% | 3026 ms | → 1.00x | 3 | 5h 53m | 2h ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 77.86% | 95.15% | 98.00% | 98.00% | 2925 ms | ↑ 1.47x | 46 | 1h | 2d ago | 14m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 69.24% | 93.76% | 91.49% | 91.49% | 1999 ms | ↑ 2.73x | 48 | 1h 21m | 3d ago | 7m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 58.09% | 69.20% | 69.28% | 69.28% | 829 ms | ↑ 1.29x | 3 | 1d 14h | 4d ago | 7m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 49.77% | 49.77% | 50.00% | 50.00% | 3526 ms | → 1.00x | 2 | 1d 6h | 2d ago | 7m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 47.12% | 85.31% | 65.87% | 65.87% | 2076 ms | ↑ 1.29x | 30 | 4h 60m | 5d ago | 9m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 46.82% | 91.22% | 37.63% | 37.63% | 481 ms | → 0.95x | 3 | 1d 15h | 5d ago | 9m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 46.82% | 91.27% | 97.95% | 97.95% | 2298 ms | ↑ 1.74x | 1 | 4d 21h | 5d ago | 11m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 46.82% | 89.83% | 35.55% | 35.55% | 442 ms | ↓ 0.94x | 50 | 2h 22m | 5d ago | 10m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 46.82% | 91.14% | 39.99% | 39.99% | 920 ms | ↑ 1.47x | 3 | 1d 15h | 5d ago | 9m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 46.82% | 27.99% | 6.54% | 6.54% | 1398 ms | ↑ 1.16x | 3 | 7d 6h | 5d ago | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 46.77% | 83.10% | 83.14% | 83.14% | 2730 ms | ↑ 3.58x | 3 | 1d 20h | 5d ago | 7m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 46.70% | 91.32% | 89.90% | 89.90% | 643 ms | ↑ 1.06x | 2 | 2d 11h | 5d ago | 8m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 46.69% | 84.92% | 84.97% | 84.97% | 1219 ms | ↑ 1.22x | 7 | 16h 48m | 5d ago | 7m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 46.66% | 91.04% | 40.71% | 40.71% | 1159 ms | ↑ 1.95x | 10 | 11h 44m | 5d ago | 10m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 46.50% | 10.79% | 3.12% | 3.12% | 2204 ms | ↑ 1.09x | 4 | 6d 18h | 5d ago | 9m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 46.50% | 91.12% | 97.70% | 97.70% | 3027 ms | ↑ 2.36x | 5 | 23h 29m | 5d ago | 11m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 46.50% | 91.09% | 97.74% | 97.74% | 3033 ms | ↑ 2.30x | 6 | 19h 35m | 5d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 46.23% | 90.89% | 93.15% | 93.15% | 3116 ms | ↑ 1.18x | 16 | 7h 20m | 5d ago | 8m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 45.78% | 88.53% | 97.32% | 97.32% | 2808 ms | ↑ 3.84x | 80 | 1h 30m | 5d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 45.48% | 90.83% | 97.81% | 97.81% | 317 ms | ↓ 0.34x | 5 | 23h 28m | 5d ago | 17m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 45.36% | 90.73% | 97.83% | 97.83% | 906 ms | ↑ 2.01x | 6 | 19h 33m | 5d ago | 19m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 45.36% | 90.05% | 90.36% | 90.36% | 429 ms | ↓ 0.42x | 32 | 3h 40m | 5d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 45.36% | 75.23% | 75.30% | 75.30% | 1446 ms | ↑ 2.54x | 1 | 4d 21h | 5d ago | 18m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 45.27% | 90.84% | 97.85% | 97.85% | 2277 ms | ↑ 3.67x | 2 | 2d 11h | 5d ago | 17m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 45.20% | 90.70% | 97.65% | 97.65% | 2759 ms | ↑ 1.56x | 7 | 16h 46m | 5d ago | 19m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 45.20% | 89.32% | 96.42% | 96.42% | 3672 ms | ↑ 1.06x | 57 | 2h 4m | 5d ago | 18m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 45.13% | 90.71% | 97.78% | 97.78% | 2986 ms | ↑ 1.58x | 6 | 19h 33m | 5d ago | 20m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 45.12% | 89.20% | 96.58% | 96.58% | 2544 ms | ↑ 3.19x | 52 | 2h 18m | 5d ago | 17m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 44.89% | 90.56% | 97.05% | 97.05% | 3192 ms | ↑ 1.86x | 9 | 13h 6m | 5d ago | 18m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 44.84% | 10.28% | 2.41% | 2.41% | 1063 ms | → 1.00x | 7 | 3d 21h | 5d ago | 15m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 44.74% | 90.47% | 97.77% | 97.77% | 3378 ms | ↑ 3.28x | 16 | 7h 20m | 5d ago | 19m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 44.74% | 67.76% | 91.22% | 91.22% | 3383 ms | → 0.97x | 373 | 33m | 5d ago | 18m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 44.62% | 90.25% | 91.37% | 91.37% | 4268 ms | ↑ 1.33x | 38 | 3h 6m | 5d ago | 8m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 44.57% | 42.65% | 42.76% | 42.76% | 4104 ms | ↑ 1.08x | 24 | 6h 3m | 5d ago | 7m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 43.89% | 8.75% | 14.68% | 14.68% | 3582 ms | ↑ 1.09x | 11 | 2d 12h | 5d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 41.33% | 85.06% | 94.90% | 94.90% | 4598 ms | ↑ 1.65x | 187 | 40m | 5d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 40.19% | 90.04% | 97.67% | 97.67% | 1501 ms | ↑ 4.26x | 22 | 5h 28m | 5d ago | 14m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 40.13% | 78.60% | 79.57% | 79.57% | 2623 ms | ↑ 1.27x | 396 | 20m | 5d ago | 8m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 39.65% | 89.99% | 86.36% | 86.36% | 3211 ms | ↑ 1.43x | 29 | 4h 10m | 5d ago | 11m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 38.85% | 72.68% | 87.37% | 87.37% | 3832 ms | → 0.96x | 450 | 21m | 5d ago | 19m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 38.05% | 86.55% | 95.28% | 95.28% | 3877 ms | ↑ 1.25x | 169 | 42m | 5d ago | 13m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 37.40% | 60.01% | 89.97% | 89.97% | 4657 ms | ↑ 1.20x | 384 | 42m | 5d ago | 20m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 37.02% | 6.05% | 2.95% | 2.95% | 4528 ms | → 1.00x | 66 | 9h 21m | 9m ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 37.02% | 6.52% | 2.99% | 2.99% | 4369 ms | → 0.96x | 139 | 4h 23m | 27m ago | 9m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 34.83% | 70.06% | 92.82% | 92.82% | 4512 ms | ↑ 1.73x | 211 | 1h 2m | 5d ago | 19m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 34.54% | 71.38% | 93.25% | 93.25% | 4328 ms | ↑ 1.93x | 165 | 1h 19m | 5d ago | 14m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 32.39% | 32.39% | 32.55% | 32.55% | 1631 ms | → 1.00x | 2 | 2d 17h | 5d ago | 7m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 32.15% | 77.04% | 77.49% | 77.49% | 4497 ms | ↑ 1.43x | 406 | 21m | 5d ago | 20m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 29.97% | 57.74% | 39.98% | 39.98% | 4602 ms | ↑ 1.07x | 709 | 18m | 5d ago | 9m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 25.23% | 21.25% | 21.25% | 21.25% | 1969 ms | → 1.00x | 3 | 1d 21h | 3d ago | 18m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 24.96% | 86.73% | 85.57% | 85.57% | 1072 ms | ↑ 1.21x | 9 | 16h 15m | 6d ago | 7m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 24.88% | 56.36% | 70.17% | 70.17% | 4857 ms | ↑ 1.11x | 658 | 21m | 5h ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 23.49% | 57.31% | 75.34% | 75.34% | 4929 ms | ↑ 1.55x | 696 | 19m | 5d ago | 20m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 23.47% | 53.98% | 69.56% | 69.56% | 4632 ms | → 1.05x | 750 | 19m | 5d ago | 15m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 22.51% | 86.87% | 88.94% | 88.94% | 2686 ms | ↑ 5.90x | 13 | 11h 8m | 6d ago | 8m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 10.27% | 19.12% | 19.21% | 19.21% | 3281 ms | ↑ 1.49x | 544 | 55m | 5d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 7.29% | 7.29% | 7.52% | 7.52% | 582 ms | → 1.00x | 2 | 2d 17h | 5d ago | 7m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 7.18% | 75.56% | 60.86% | 60.86% | 3832 ms | ↑ 1.39x | 47 | 4h 27m | 5d ago | 16m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 5.92% | 67.77% | 31.28% | 31.28% | 3661 ms | ↑ 1.08x | 489 | 23m | 5d ago | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 3.50% | 0.63% | 4.45% | 4.45% | 740 ms | → 0.98x | 3 | 9d 22h | 5d ago | 9m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 3.45% | 0.57% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 5d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 3.44% | 0.57% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 5d ago | 15m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 3.25% | 0.54% | 45.87% | 45.87% | 444 ms | → 1.00x | 2 | 14d 22h | 5d ago | 18m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.16% | 0.55% | 0.13% | 0.13% | 834 ms | ↓ 0.81x | 18 | 1d 16h | 6d ago | 14m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 27.40% | 80.33% | 80.33% | — | — | 6 | 3d 19h | 23d ago | 14m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.73% | 6.73% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 17.02% | 3.98% | 3.98% | — | — | 2 | 12d 17h | 23d ago | 15m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 42.72% | 42.72% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 11.07% | 31.55% | 31.55% | — | — | 3 | 9d | 26d ago | 9m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 56.41% | 73.67% | 73.67% | — | — | 322 | 56m | 11d ago | 17m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 18m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 19m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.57% | 4.57% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 19m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 21.82% | 21.82% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 9.66% | 47.46% | 47.46% | — | — | 1 | 27d 10h | 27d ago | 9m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 31.02% | 35.57% | 35.57% | — | — | 3 | 7d 6h | 22d ago | 9m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 64.04% | 64.04% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.81% | 15.81% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 67.14% | 67.14% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 18m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.40% | 8.40% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 3.03% | 77.22% | 77.22% | — | — | 1 | 29d 4h | 29d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 19m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 13.80% | 13.80% | 13.80% | — | — | 5 | 4d 4h | 21d ago | 7m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 16h | 21d ago | 7m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 41.56% | 46.97% | 46.97% | — | — | 5 | 3d 19h | 19d ago | 8m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 18.07% | 18.07% | 18.07% | — | — | 5 | 3d 16h | 18d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 62.08% | 62.08% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 42.66% | 86.44% | 86.44% | — | — | 2 | 9d 6h | 19d ago | 18m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 19m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 54.82% | 54.82% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 20m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 49.84% | 49.84% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 7m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 69.01% | 69.01% | — | — | 3 | 9d 24h | 17d ago | 14m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 21h | 8d ago | 18m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 19h | 8d ago | 11m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 48.97% | 48.97% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 69.14% | 59.16% | 59.16% | — | — | 12 | 22h 60m | 12d ago | 9m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 17h | 21d ago | 7m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 19h | 8d ago | 11m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 70.58% | 93.04% | 93.04% | — | — | 58 | 4h 13m | 10d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.28% | 4.28% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 50.93% | 50.93% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 17m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.38% | 33.38% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.43% | 28.43% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 17m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.59% | 20.59% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 58.37% | 58.37% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 65.04% | 65.04% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 63.02% | 91.29% | 91.29% | — | — | 1 | 13d 3h | 13d ago | 14m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 22h | 10d ago | 7m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 18m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 19m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 56.18% | 88.46% | 88.46% | — | — | 22 | 16h 5m | 15d ago | 18m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.37% | 23.37% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 20.41% | 80.51% | 80.51% | — | — | 2 | 12d 6h | 12d ago | 18m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 21.46% | 35.61% | 35.61% | — | — | 104 | 5h 18m | 9d ago | 8m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 21.18% | 10.51% | 10.51% | — | — | 2 | 12d 4h | 24d ago | 9m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 16.20% | 79.76% | 79.76% | — | — | 2 | 12d 20h | 26d ago | 18m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 22.30% | 22.30% | 22.30% | — | — | 3 | 7d 18h | 23d ago | 8m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 20h | 8d ago | 18m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.18% | 21.18% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.44% | 58.89% | 58.89% | — | — | 1 | 29d 21h | 30d ago | 17m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 48.84% | 48.84% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 63.62% | 91.48% | 91.48% | — | — | 2 | 6d 11h | 13d ago | 18m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 0.00% | 1.35% | 1.35% | 1.35% | — | — | 2 | 13d 10h | 7d ago | 7m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |

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
