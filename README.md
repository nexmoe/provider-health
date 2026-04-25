# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**526 providers** — 251 🟢 operational · 104 🟡 degraded · 171 🔴 down · 0 ⚫ unknown

_Updated 2026-04-25 05:18 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (251)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2240 ms | → 1.00x | 0 | — | — | 1h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2610 ms | → 1.00x | 0 | — | — | 1h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2906 ms | → 1.00x | 0 | — | — | 1h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 468 ms | → 1.00x | 0 | — | — | 1h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3179 ms | → 1.00x | 0 | — | — | 1h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 522 ms | → 1.00x | 0 | — | — | 1h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2354 ms | → 1.00x | 0 | — | — | 1h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 826 ms | → 1.00x | 0 | — | — | 1h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 3054 ms | → 1.00x | 0 | — | — | 1h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3223 ms | → 1.00x | 0 | — | — | 1h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1274 ms | → 1.00x | 0 | — | — | 1h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 190 ms | → 1.00x | 0 | — | — | 1h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.83% | 99.92% | 90.83% | 90.83% | 1599 ms | ↑ 2.00x | 1 | 0s | 22d ago | 2h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.83% | 99.95% | 99.99% | 99.99% | 770 ms | ↑ 1.33x | 1 | 0s | 22d ago | 2h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.83% | 99.92% | 99.99% | 99.99% | 447 ms | ↓ 0.77x | 2 | 0s | 11d ago | 2h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.83% | 99.92% | 96.92% | 96.92% | 3625 ms | ↑ 1.75x | 2 | 0s | 7d ago | 2h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.83% | 99.97% | 99.70% | 99.70% | 2055 ms | ↑ 1.73x | 0 | — | — | 2h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.83% | 98.79% | 99.57% | 99.57% | 2160 ms | ↑ 1.45x | 42 | 43s | 7d ago | 2h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.83% | 99.92% | 99.81% | 99.81% | 804 ms | ↑ 1.05x | 2 | 0s | 12d ago | 2h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.83% | 99.95% | 99.93% | 99.93% | 1129 ms | ↑ 1.81x | 1 | 0s | 18d ago | 2h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 99.83% | 99.89% | 99.90% | 99.90% | 972 ms | → 0.96x | 3 | 0s | 14d ago | 2h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.83% | 99.92% | 99.94% | 99.94% | 1499 ms | ↑ 1.23x | 2 | 0s | 11d ago | 2h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.83% | 99.24% | 99.55% | 99.55% | 935 ms | → 0.97x | 24 | 2m | 10d ago | 2h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.83% | 99.58% | 87.00% | 87.00% | 2147 ms | ↑ 2.48x | 14 | 43s | 7d ago | 2h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.83% | 99.92% | 99.91% | 99.91% | 1510 ms | ↑ 1.66x | 2 | 0s | 7d ago | 2h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.83% | 99.10% | 99.52% | 99.52% | 1149 ms | ↑ 1.25x | 7 | 37m | 12d ago | 2h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.83% | 99.10% | 98.84% | 98.84% | 2432 ms | ↑ 1.23x | 31 | 20s | 7d ago | 2h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.83% | 99.71% | 99.75% | 99.75% | 2657 ms | ↑ 1.59x | 7 | 4m | 7d ago | 2h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.83% | 99.84% | 99.65% | 99.65% | 1368 ms | ↑ 1.34x | 4 | 2m | 8d ago | 2h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.83% | 99.76% | 99.63% | 99.63% | 682 ms | ↓ 0.91x | 8 | 0s | 16d ago | 2h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.83% | 99.76% | 99.72% | 99.72% | 1820 ms | ↑ 1.08x | 8 | 0s | 11d ago | 2h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 99.83% | 99.87% | 99.70% | 99.70% | 1944 ms | ↑ 1.43x | 3 | 3m | 16d ago | 2h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.83% | 99.89% | 99.92% | 99.92% | 1139 ms | ↓ 0.57x | 3 | 0s | 18d ago | 2h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.83% | 99.58% | 99.90% | 99.90% | 2411 ms | ↑ 1.87x | 12 | 2m | 7d ago | 2h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.83% | 99.65% | 99.69% | 99.69% | 2008 ms | ↑ 1.33x | 10 | 0s | 9d ago | 2h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 99.83% | 99.05% | 58.85% | 58.85% | 889 ms | ↓ 0.82x | 31 | 1m | 15d ago | 2h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.83% | 99.47% | 99.50% | 99.50% | 1045 ms | ↑ 1.36x | 11 | 6m | 10d ago | 2h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.83% | 99.08% | 99.76% | 99.76% | 1597 ms | ↑ 1.06x | 34 | 0s | 15d ago | 2h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.83% | 97.97% | 99.40% | 99.40% | 993 ms | ↑ 1.07x | 60 | 3m | 11d ago | 2h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.83% | 99.58% | 99.69% | 99.69% | 1128 ms | → 0.99x | 5 | 20m | 12d ago | 2h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.83% | 99.84% | 99.93% | 99.93% | 320 ms | ↓ 0.82x | 5 | 0s | 11d ago | 2h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.83% | 99.92% | 99.96% | 99.96% | 1453 ms | ↑ 1.12x | 2 | 0s | 7d ago | 2h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.83% | 99.58% | 97.83% | 97.83% | 1796 ms | ↑ 1.10x | 14 | 43s | 7d ago | 2h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.83% | 99.87% | 98.92% | 98.92% | 2090 ms | ↑ 1.82x | 4 | 0s | 7d ago | 2h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.83% | 99.97% | 99.35% | 99.35% | 2232 ms | ↑ 2.51x | 0 | — | — | 2h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.83% | 99.95% | 99.99% | 99.99% | 1002 ms | ↑ 1.35x | 1 | 0s | 15d ago | 2h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.83% | 99.44% | 99.79% | 99.79% | 941 ms | → 0.98x | 20 | 0s | 9d ago | 2h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.83% | 99.87% | 99.91% | 99.91% | 1802 ms | ↑ 1.56x | 4 | 0s | 9d ago | 2h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.83% | 99.81% | 98.66% | 98.66% | 1087 ms | ↑ 1.38x | 5 | 2m | 8d ago | 2h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.83% | 95.37% | 96.96% | 96.96% | 3849 ms | ↑ 2.10x | 6 | 4h 40m | 9d ago | 2h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.83% | 98.68% | 98.33% | 98.33% | 2269 ms | ↑ 1.20x | 47 | 26s | 7d ago | 2h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.83% | 99.89% | 51.52% | 51.52% | 3982 ms | ↑ 2.23x | 3 | 0s | 10d ago | 2h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.83% | 99.95% | 99.91% | 99.91% | 853 ms | ↓ 0.93x | 1 | 0s | 9d ago | 2h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.83% | 99.60% | 99.70% | 99.70% | 912 ms | → 0.98x | 7 | 10m | 9d ago | 2h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.83% | 99.97% | 99.98% | 99.98% | 1151 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.83% | 99.71% | 99.43% | 99.43% | 2440 ms | ↑ 1.79x | 10 | 0s | 9d ago | 2h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.83% | 99.92% | 33.47% | 33.47% | 2243 ms | ↓ 0.71x | 2 | 0s | 9d ago | 2h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.83% | 97.20% | 99.33% | 99.33% | 914 ms | ↑ 1.11x | 79 | 3m | 15d ago | 2h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.83% | 99.81% | 99.86% | 99.86% | 1402 ms | ↑ 1.24x | 6 | 0s | 8d ago | 2h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.83% | 99.51% | 99.63% | 99.63% | 2368 ms | ↑ 1.08x | 3 | 0s | 7d ago | 2h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.82% | 99.81% | 99.85% | 99.85% | 2026 ms | ↑ 1.47x | 6 | 0s | 7d ago | 2h ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 99.82% | 21.27% | 4.86% | 4.86% | 1830 ms | ↑ 1.13x | 3 | 7d 1h | 7d ago | 1h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.82% | 97.47% | 97.51% | 97.51% | 909 ms | ↑ 2.30x | 15 | 53m | 7d ago | 1h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.82% | 96.81% | 99.23% | 99.23% | 1922 ms | ↑ 1.64x | 82 | 5m | 8d ago | 1h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.82% | 98.46% | 35.50% | 35.50% | 852 ms | ↑ 1.09x | 47 | 2m | 9d ago | 1h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.82% | 99.68% | 98.83% | 98.83% | 670 ms | ↑ 1.11x | 4 | 18m | 23d ago | 1h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.82% | 21.31% | 5.43% | 5.43% | 800 ms | ↑ 1.11x | 1 | 21d 4h | 30d ago | 1h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.82% | 99.44% | 98.44% | 98.44% | 717 ms | ↑ 1.10x | 16 | 2m | 8d ago | 1h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.82% | 99.89% | 99.80% | 99.80% | 441 ms | → 0.98x | 3 | 0s | 10d ago | 1h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.82% | 94.40% | 94.45% | 94.45% | 2422 ms | ↑ 1.75x | 1 | 18h 20m | 18d ago | 1h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.82% | 99.65% | 99.69% | 99.69% | 1558 ms | ↑ 1.49x | 7 | 0s | 8d ago | 1h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.82% | 91.89% | 91.93% | 91.93% | 2005 ms | → 0.96x | 76 | 15m | 8d ago | 1h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.82% | 96.59% | 96.64% | 96.64% | 1624 ms | ↑ 1.43x | 3 | 4h 10m | 8d ago | 1h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.82% | 95.32% | 95.37% | 95.37% | 1577 ms | ↑ 1.97x | 3 | 5h 3m | 10d ago | 1h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.82% | 96.05% | 96.09% | 96.09% | 2069 ms | ↑ 1.39x | 5 | 2h 40m | 8d ago | 1h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.82% | 92.42% | 92.47% | 92.47% | 2411 ms | ↑ 1.54x | 1 | 1d 1h | 18d ago | 1h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.82% | 96.28% | 96.33% | 96.33% | 1677 ms | ↑ 1.91x | 2 | 6h 15m | 7d ago | 1h ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.82% | 89.12% | 89.27% | 89.27% | 1621 ms | → 0.98x | 1 | 12h 20m | 8d ago | 1h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.82% | 99.88% | 99.94% | 99.94% | 1158 ms | ↓ 0.94x | 1 | 0s | 11d ago | 1h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.82% | 98.21% | 98.27% | 98.27% | 1511 ms | ↑ 1.17x | 3 | 1h 20m | 14d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.82% | 99.92% | 100.00% | 100.00% | 624 ms | → 0.96x | 0 | — | — | 1h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.82% | 54.54% | 54.59% | 54.59% | 1027 ms | ↓ 0.90x | 2 | 3d 2h | 10d ago | 1h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.82% | 99.95% | 100.00% | 100.00% | 1493 ms | ↑ 1.66x | 0 | — | — | 1h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.82% | 92.27% | 92.33% | 92.33% | 2846 ms | ↓ 0.61x | 26 | 42m | 8d ago | 1h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.82% | 88.39% | 88.54% | 88.54% | 2067 ms | → 0.97x | 1 | 12h 50m | 8d ago | 1h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.82% | 77.00% | 77.07% | 77.07% | 1111 ms | ↑ 1.08x | 4 | 15h 20m | 7d ago | 1h ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 99.82% | 93.31% | 93.39% | 93.39% | 319 ms | ↑ 1.06x | 1 | 13h 50m | 13d ago | 1h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.82% | 99.70% | 99.76% | 99.76% | 1143 ms | → 1.05x | 4 | 0s | 9d ago | 1h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.82% | 99.88% | 99.94% | 99.94% | 1598 ms | ↑ 1.69x | 1 | 0s | 11d ago | 1h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.82% | 99.53% | 99.61% | 99.61% | 222 ms | ↓ 0.26x | 4 | 3m | 10d ago | 1h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 99.82% | 95.37% | 95.45% | 95.45% | 2200 ms | ↑ 1.15x | 1 | 9h 60m | 13d ago | 1h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.82% | 99.37% | 99.45% | 99.45% | 529 ms | ↓ 0.90x | 7 | 0s | 8d ago | 1h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 94.77% | 94.82% | 94.82% | 1587 ms | ↑ 1.15x | 13 | 1h 4m | 8d ago | 1h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.82% | 99.86% | 99.93% | 99.93% | 1180 ms | → 0.97x | 1 | 0s | 9d ago | 1h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.82% | 91.78% | 91.84% | 91.84% | 1401 ms | ↓ 0.90x | 4 | 5h 15m | 9d ago | 1h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 99.82% | 88.72% | 88.87% | 88.87% | 315 ms | ↓ 0.91x | 1 | 12h 47m | 8d ago | 1h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.82% | 88.87% | 88.96% | 88.96% | 1822 ms | ↑ 1.09x | 3 | 11h 20m | 8d ago | 1h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.82% | 98.14% | 98.27% | 98.27% | 1341 ms | ↓ 0.75x | 3 | 37m | 7d ago | 1h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 88.94% | 89.05% | 89.05% | 1702 ms | ↓ 0.84x | 4 | 4h 9m | 8d ago | 1h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.82% | 99.28% | 99.37% | 99.37% | 1233 ms | ↑ 1.31x | 2 | 25m | 7d ago | 1h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.66% | 38.98% | 8.95% | 8.95% | 1864 ms | ↑ 1.12x | 2 | 8d 1h | 7d ago | 2h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.66% | 94.67% | 91.13% | 91.13% | 1390 ms | ↓ 0.87x | 117 | 7m | 15h ago | 2h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.66% | 97.20% | 97.58% | 97.58% | 3550 ms | ↑ 1.81x | 100 | 24s | 6d ago | 2h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.66% | 99.76% | 99.88% | 99.88% | 863 ms | ↑ 1.09x | 1 | 0s | 5h ago | 2h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.66% | 99.45% | 99.12% | 99.12% | 1778 ms | ↑ 2.24x | 19 | 32s | 7d ago | 2h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.66% | 99.79% | 99.88% | 99.88% | 1593 ms | ↑ 2.10x | 7 | 0s | 4h ago | 2h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.66% | 99.92% | 99.90% | 99.90% | 996 ms | ↑ 1.12x | 2 | 0s | 5d ago | 2h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.66% | 99.47% | 99.44% | 99.44% | 2144 ms | ↑ 1.26x | 19 | 0s | 6d ago | 2h ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.66% | 98.55% | 98.67% | 98.67% | 2836 ms | → 1.03x | 10 | 1m | 9h ago | 2h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.66% | 99.74% | 99.62% | 99.62% | 1466 ms | ↑ 1.49x | 9 | 0s | 5d ago | 2h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.65% | 99.66% | 99.84% | 99.84% | 2042 ms | ↑ 2.39x | 6 | 10m | 4d ago | 2h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.65% | 97.75% | 99.13% | 99.13% | 3958 ms | ↑ 2.69x | 65 | 3m | 6d ago | 2h ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.65% | 99.18% | 35.56% | 35.56% | 1530 ms | → 1.02x | 18 | 7m | 7d ago | 2h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.65% | 99.95% | 99.94% | 99.94% | 1506 ms | ↑ 1.21x | 1 | 0s | 4d ago | 2h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.65% | 99.81% | 99.83% | 99.83% | 2495 ms | ↑ 1.49x | 6 | 0s | 7d ago | 2h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.65% | 99.68% | 99.56% | 99.56% | 2201 ms | ↓ 0.93x | 11 | 0s | 7d ago | 2h ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.65% | 95.28% | 96.03% | 96.03% | 2565 ms | ↑ 1.25x | 45 | 30m | 7d ago | 2h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.65% | 99.13% | 99.60% | 99.60% | 1673 ms | ↑ 1.19x | 4 | 1h 8m | 7d ago | 2h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.65% | 99.84% | 99.84% | 99.84% | 1685 ms | ↑ 1.22x | 5 | 0s | 7d ago | 2h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.65% | 99.84% | 99.94% | 99.94% | 2237 ms | ↑ 3.16x | 4 | 42s | 7d ago | 2h ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.64% | 98.54% | 97.63% | 97.63% | 2107 ms | ↑ 2.67x | 26 | 11m | 7d ago | 1h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 98.32% | 98.78% | 98.78% | 1632 ms | ↑ 1.83x | 42 | 3m | 7d ago | 1h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.64% | 20.98% | 4.79% | 4.79% | 2166 ms | ↓ 0.90x | 12 | 1d 18h | 7d ago | 1h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.64% | 21.30% | 5.79% | 5.79% | 2464 ms | ↑ 1.20x | 2 | 10d 14h | 6d ago | 1h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.64% | 99.92% | 98.64% | 98.64% | 699 ms | ↑ 1.76x | 2 | 0s | 7d ago | 1h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.64% | 99.73% | 91.07% | 91.07% | 843 ms | ↑ 1.14x | 9 | 0s | 7d ago | 1h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.64% | 99.79% | 49.40% | 49.40% | 1682 ms | → 0.98x | 7 | 0s | 7d ago | 1h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.64% | 99.81% | 50.98% | 50.98% | 1150 ms | ↓ 0.87x | 6 | 0s | 7d ago | 1h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.64% | 21.28% | 4.94% | 4.94% | 628 ms | ↓ 0.86x | 2 | 10d 14h | 6d ago | 1h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.64% | 99.65% | 95.75% | 95.75% | 917 ms | ↑ 1.15x | 12 | 0s | 7d ago | 1h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.64% | 99.92% | 47.21% | 47.21% | 956 ms | ↑ 2.01x | 2 | 0s | 7d ago | 1h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.64% | 98.43% | 95.22% | 95.22% | 611 ms | ↓ 0.72x | 53 | 56s | 7d ago | 1h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.64% | 99.92% | 50.58% | 50.58% | 2272 ms | ↑ 2.75x | 2 | 0s | 7d ago | 1h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.64% | 99.57% | 56.00% | 56.00% | 1112 ms | ↓ 0.81x | 13 | 2m | 3d ago | 1h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.64% | 99.92% | 57.88% | 57.88% | 1501 ms | ↑ 1.88x | 2 | 0s | 7d ago | 1h ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.64% | 99.84% | 90.92% | 90.92% | 2091 ms | → 1.01x | 5 | 0s | 7d ago | 1h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.64% | 99.73% | 74.74% | 74.74% | 2429 ms | ↑ 1.45x | 8 | 1m | 7d ago | 1h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.64% | 99.39% | 76.55% | 76.55% | 2479 ms | ↑ 2.72x | 17 | 3m | 7d ago | 1h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.64% | 99.89% | 67.57% | 67.57% | 1187 ms | ↑ 1.30x | 3 | 0s | 7d ago | 1h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.64% | 99.44% | 85.77% | 85.77% | 2454 ms | ↑ 1.36x | 9 | 12m | 7d ago | 1h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.64% | 98.93% | 99.45% | 99.45% | 2081 ms | ↑ 2.47x | 18 | 12m | 7d ago | 1h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.64% | 98.32% | 97.44% | 97.44% | 906 ms | ↓ 0.89x | 3 | 3h 47m | 7d ago | 1h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 99.64% | 21.30% | 11.94% | 11.94% | 803 ms | → 1.01x | 2 | 10d 14h | 7d ago | 1h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.64% | 98.59% | 98.10% | 98.10% | 1440 ms | ↑ 1.16x | 17 | 21m | 7d ago | 1h ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 99.64% | 97.36% | 97.13% | 97.13% | 1103 ms | ↑ 1.09x | 20 | 39m | 7d ago | 1h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.64% | 99.95% | 90.72% | 90.72% | 1583 ms | ↑ 1.24x | 1 | 0s | 7d ago | 1h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.64% | 99.87% | 99.04% | 99.04% | 1122 ms | → 1.04x | 4 | 0s | 7d ago | 1h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.64% | 99.89% | 97.78% | 97.78% | 1646 ms | ↑ 1.96x | 2 | 0s | 7d ago | 1h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.64% | 34.06% | 16.76% | 16.76% | 2615 ms | ↑ 1.53x | 10 | 1d 17h | 7d ago | 1h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.64% | 99.15% | 98.94% | 98.94% | 1723 ms | → 0.95x | 30 | 20s | 7d ago | 1h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.64% | 99.71% | 72.24% | 72.24% | 336 ms | ↓ 0.83x | 8 | 3m | 7d ago | 1h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 99.64% | 99.95% | 80.86% | 80.86% | 1012 ms | ↑ 1.20x | 1 | 0s | 7d ago | 1h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.64% | 99.92% | 99.97% | 99.97% | 2385 ms | ↑ 1.41x | 2 | 0s | 7d ago | 1h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.64% | 99.60% | 98.33% | 98.33% | 2127 ms | ↑ 1.29x | 14 | 0s | 7d ago | 1h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.64% | 99.79% | 83.62% | 83.62% | 1552 ms | ↑ 1.13x | 4 | 8m | 7d ago | 1h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.64% | 99.73% | 98.13% | 98.13% | 1458 ms | → 1.04x | 9 | 0s | 7d ago | 1h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.64% | 92.75% | 95.28% | 95.28% | 2363 ms | ↑ 2.11x | 10 | 4h 21m | 7d ago | 1h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.64% | 99.89% | 94.72% | 94.72% | 2602 ms | ↑ 3.24x | 3 | 0s | 7d ago | 1h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.64% | 99.25% | 98.18% | 98.18% | 2591 ms | ↑ 2.14x | 25 | 49s | 7d ago | 1h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.64% | 99.81% | 99.85% | 99.85% | 2105 ms | ↑ 2.34x | 5 | 2m | 7d ago | 1h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 99.64% | 97.87% | 97.00% | 97.00% | 2305 ms | ↑ 1.25x | 13 | 51m | 7d ago | 1h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.64% | 80.93% | 58.86% | 58.86% | 2762 ms | ↑ 2.08x | 9 | 12h 53m | 7d ago | 1h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.64% | 99.60% | 98.22% | 98.22% | 1286 ms | ↑ 1.41x | 11 | 3m | 7d ago | 1h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.64% | 99.41% | 97.53% | 97.53% | 2439 ms | ↑ 2.21x | 20 | 30s | 7d ago | 1h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.64% | 99.73% | 99.76% | 99.76% | 1948 ms | ↑ 1.08x | 8 | 1m | 7d ago | 1h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.64% | 99.49% | 98.40% | 98.40% | 1097 ms | → 0.95x | 18 | 0s | 7d ago | 1h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.64% | 99.87% | 99.85% | 99.85% | 2249 ms | ↑ 1.85x | 4 | 0s | 7d ago | 1h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.64% | 98.96% | 82.01% | 82.01% | 1727 ms | ↑ 3.04x | 30 | 3m | 7d ago | 1h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.64% | 72.91% | 56.50% | 56.50% | 2021 ms | ↑ 1.79x | 5 | 1d 9h | 7d ago | 1h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.64% | 99.71% | 97.37% | 97.37% | 1853 ms | ↑ 3.19x | 10 | 0s | 7d ago | 1h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 99.64% | 98.99% | 99.09% | 99.09% | 2016 ms | ↑ 1.96x | 22 | 7m | 7d ago | 1h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.64% | 96.89% | 96.93% | 96.93% | 1850 ms | ↑ 1.21x | 5 | 2h 32m | 7d ago | 1h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.64% | 92.98% | 94.29% | 94.29% | 1924 ms | ↑ 1.97x | 22 | 1h 49m | 7d ago | 1h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.64% | 95.17% | 93.23% | 93.23% | 1315 ms | ↓ 0.78x | 124 | 5m | 7d ago | 1h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.64% | 99.91% | 99.94% | 99.94% | 1522 ms | ↑ 1.89x | 2 | 0s | 7d ago | 1h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.64% | 96.07% | 96.09% | 96.09% | 1527 ms | → 0.99x | 48 | 18m | 7d ago | 1h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.64% | 90.73% | 90.75% | 90.75% | 2553 ms | ↑ 1.39x | 6 | 8h 38m | 7d ago | 1h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.64% | 21.03% | 17.91% | 17.91% | 1498 ms | ↓ 0.53x | 6 | 3d 13h | 7d ago | 1h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.64% | 97.07% | 97.09% | 97.09% | 1589 ms | ↑ 2.50x | 10 | 1h 38m | 7d ago | 1h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.64% | 99.57% | 97.57% | 97.57% | 2280 ms | ↑ 1.90x | 14 | 43s | 7d ago | 1h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.64% | 99.87% | 99.90% | 99.90% | 970 ms | ↑ 1.08x | 4 | 0s | 7d ago | 1h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 99.64% | 30.64% | 30.68% | 30.68% | 1123 ms | ↓ 0.89x | 2 | 6d 14h | 7d ago | 1h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.64% | 99.71% | 99.74% | 99.74% | 1776 ms | ↑ 1.99x | 8 | 1m | 7d ago | 1h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.64% | 91.81% | 91.84% | 91.84% | 2918 ms | ↑ 1.76x | 71 | 29m | 7d ago | 1h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.64% | 99.83% | 99.86% | 99.86% | 1428 ms | ↑ 1.08x | 4 | 0s | 7d ago | 1h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.64% | 99.66% | 99.69% | 99.69% | 961 ms | ↓ 0.90x | 8 | 4m | 7d ago | 1h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.64% | 96.70% | 96.74% | 96.74% | 1751 ms | ↑ 1.36x | 60 | 3m | 7d ago | 1h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.64% | 95.45% | 95.50% | 95.50% | 1634 ms | ↑ 1.08x | 9 | 1h 47m | 7d ago | 1h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.64% | 97.23% | 97.29% | 97.29% | 1099 ms | → 1.01x | 5 | 1h 26m | 4d ago | 1h ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 99.64% | 71.99% | 72.08% | 72.08% | 2539 ms | → 0.97x | 3 | 17h 50m | 5h ago | 1h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.64% | 69.63% | 69.72% | 69.72% | 732 ms | ↓ 0.80x | 10 | 7h 2m | 6d ago | 1h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.64% | 99.85% | 99.92% | 99.92% | 1339 ms | ↑ 1.40x | 1 | 0s | 5d ago | 1h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.62% | 99.62% | 99.62% | 99.62% | 2616 ms | → 1.00x | 1 | 0s | 3d ago | 1h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.48% | 99.60% | 98.89% | 98.89% | 2714 ms | ↑ 1.29x | 13 | 47s | 6d ago | 2h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.48% | 99.82% | 99.94% | 99.94% | 3220 ms | ↑ 1.61x | 7 | 0s | 7m ago | 2h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.48% | 99.92% | 99.96% | 99.96% | 1518 ms | ↑ 1.41x | 2 | 0s | 5h ago | 2h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.48% | 99.82% | 99.72% | 99.72% | 2784 ms | ↑ 1.35x | 6 | 0s | 6d ago | 2h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.48% | 97.38% | 98.55% | 98.55% | 2066 ms | ↓ 0.87x | 87 | 1m | 23h ago | 2h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.48% | 99.60% | 99.82% | 99.82% | 2413 ms | ↑ 1.65x | 9 | 7m | 2d ago | 2h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.48% | 99.47% | 99.70% | 99.70% | 2958 ms | ↑ 1.38x | 16 | 2m | 6d ago | 2h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.48% | 97.64% | 96.56% | 96.56% | 1604 ms | ↓ 0.43x | 76 | 1m | 1d ago | 2h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.48% | 98.73% | 99.19% | 99.19% | 2826 ms | ↑ 1.07x | 19 | 15m | 2d ago | 2h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.48% | 99.89% | 99.72% | 99.72% | 2705 ms | ↑ 2.00x | 3 | 0s | 2d ago | 2h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.48% | 98.01% | 99.52% | 99.52% | 1501 ms | ↑ 1.84x | 62 | 2m | 2d ago | 2h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.48% | 97.54% | 81.42% | 81.42% | 2765 ms | ↓ 0.59x | 88 | 27s | 7d ago | 2h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.47% | 21.27% | 4.86% | 4.86% | 2140 ms | ↑ 1.14x | 3 | 7d 1h | 2d ago | 1h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.47% | 99.68% | 53.46% | 53.46% | 1180 ms | ↓ 0.94x | 9 | 2m | 4d ago | 1h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.47% | 98.43% | 58.33% | 58.33% | 1213 ms | ↑ 2.09x | 39 | 5m | 5h ago | 1h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.47% | 95.85% | 96.14% | 96.14% | 2466 ms | ↑ 1.21x | 76 | 11m | 7d ago | 1h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.46% | 99.84% | 99.83% | 99.83% | 2377 ms | ↑ 1.38x | 4 | 2m | 6d ago | 1h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.46% | 99.87% | 59.83% | 59.83% | 1343 ms | ↑ 2.30x | 4 | 0s | 7d ago | 1h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.46% | 99.84% | 98.70% | 98.70% | 1350 ms | ↑ 2.12x | 5 | 0s | 11h ago | 1h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.46% | 99.63% | 75.02% | 75.02% | 2064 ms | ↑ 3.02x | 12 | 49s | 2d ago | 1h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.46% | 68.52% | 61.43% | 61.43% | 2189 ms | ↑ 1.65x | 16 | 12h 26m | 2d ago | 1h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.46% | 99.81% | 86.03% | 86.03% | 2186 ms | ↑ 1.47x | 6 | 0s | 13h ago | 1h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.46% | 99.76% | 99.72% | 99.72% | 1266 ms | ↑ 1.34x | 7 | 1m | 6d ago | 1h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.46% | 21.18% | 9.28% | 9.28% | 1337 ms | ↓ 0.87x | 3 | 7d 1h | 2d ago | 1h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.46% | 96.75% | 96.35% | 96.35% | 1365 ms | ↑ 1.72x | 29 | 32m | 2d ago | 1h ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 99.46% | 21.17% | 14.22% | 14.22% | 958 ms | ↓ 0.92x | 3 | 7d 1h | 7d ago | 1h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.46% | 41.12% | 30.55% | 30.55% | 2592 ms | → 1.01x | 5 | 3d 1h | 6d ago | 1h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.46% | 98.56% | 98.67% | 98.67% | 2208 ms | ↑ 1.70x | 29 | 8m | 1d ago | 1h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.46% | 99.79% | 98.05% | 98.05% | 1283 ms | ↑ 2.57x | 7 | 0s | 3d ago | 1h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.46% | 97.07% | 97.10% | 97.10% | 2841 ms | ↑ 2.59x | 5 | 3h | 2d ago | 1h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.46% | 96.56% | 96.59% | 96.59% | 1658 ms | ↓ 0.91x | 18 | 42m | 6d ago | 1h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.46% | 97.26% | 97.29% | 97.29% | 3128 ms | ↑ 2.08x | 6 | 2h 13m | 7d ago | 1h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.46% | 95.91% | 95.94% | 95.94% | 1905 ms | ↑ 1.06x | 80 | 7m | 6d ago | 1h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.46% | 87.85% | 87.98% | 87.98% | 1529 ms | ↓ 0.94x | 3 | 5h 3m | 7d ago | 1h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.46% | 89.73% | 89.81% | 89.81% | 1981 ms | ↑ 1.10x | 8 | 4h 1m | 3d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.43% | 99.43% | 99.62% | 99.62% | 2925 ms | → 1.00x | 2 | 0s | 6d ago | 1h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.31% | 99.55% | 90.63% | 90.63% | 3215 ms | ↑ 4.09x | 14 | 43s | 7d ago | 2h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.31% | 99.10% | 99.26% | 99.26% | 1523 ms | ↓ 0.77x | 32 | 19s | 5h ago | 2h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.31% | 49.09% | 45.91% | 45.91% | 1200 ms | ↑ 1.15x | 10 | 1d 8h | 4d ago | 2h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.30% | 92.26% | 97.48% | 97.48% | 2834 ms | ↑ 1.29x | 20 | 2h 16m | 20h ago | 2h ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.30% | 99.52% | 99.78% | 99.78% | 2330 ms | ↑ 1.59x | 16 | 10s | 3d ago | 2h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.29% | 99.71% | 42.34% | 42.34% | 1105 ms | → 1.01x | 9 | 2m | 3d ago | 1h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.29% | 99.89% | 63.01% | 63.01% | 1485 ms | ↓ 0.92x | 2 | 10m | 15h ago | 1h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.28% | 99.57% | 73.20% | 73.20% | 2280 ms | ↑ 3.19x | 14 | 40s | 6d ago | 1h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.28% | 92.72% | 72.08% | 72.08% | 2931 ms | ↑ 1.70x | 79 | 25m | 6d ago | 1h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.28% | 96.59% | 96.62% | 96.62% | 2776 ms | ↑ 1.26x | 25 | 31m | 17h ago | 1h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.28% | 98.00% | 98.27% | 98.27% | 1900 ms | ↑ 2.37x | 48 | 5m | 2d ago | 1h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.28% | 21.11% | 19.18% | 19.18% | 1629 ms | ↑ 1.28x | 4 | 5d 7h | 1d ago | 1h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.28% | 94.56% | 85.48% | 85.48% | 1810 ms | ↑ 1.85x | 4 | 7h 55m | 1d ago | 1h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.28% | 98.05% | 98.08% | 98.08% | 1785 ms | ↑ 1.54x | 42 | 5m | 17h ago | 1h ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.28% | 91.49% | 91.54% | 91.54% | 1318 ms | ↑ 1.20x | 54 | 25m | 6d ago | 1h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.13% | 67.96% | 15.56% | 15.56% | 3541 ms | ↑ 1.48x | 6 | 1d 9h | 14h ago | 2h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.13% | 98.94% | 98.92% | 98.92% | 1420 ms | → 1.02x | 10 | 29m | 21h ago | 2h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.11% | 99.57% | 98.96% | 98.96% | 1856 ms | ↑ 1.25x | 15 | 0s | 6d ago | 1h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.10% | 97.97% | 96.27% | 96.27% | 2726 ms | ↑ 1.74x | 65 | 2m | 5d ago | 1h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.10% | 30.43% | 21.74% | 21.74% | 1545 ms | ↑ 1.26x | 4 | 4d 13h | 23h ago | 1h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.10% | 99.72% | 99.75% | 99.75% | 1766 ms | ↑ 1.99x | 7 | 6m | 3d ago | 1h ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 99.09% | 76.36% | 76.46% | 76.46% | 1262 ms | ↓ 0.66x | 7 | 5h 50m | 7d ago | 1h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (104)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 98.97% | 99.08% | 98.47% | 98.47% | 4180 ms | ↑ 1.59x | 34 | 0s | 6d ago | 2h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 98.97% | 99.71% | 98.95% | 98.95% | 1666 ms | ↑ 1.91x | 7 | 4m | 6d ago | 2h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 98.95% | 98.86% | 99.08% | 99.08% | 2758 ms | ↑ 2.31x | 37 | 2m | 4d ago | 2h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 98.92% | 99.25% | 88.89% | 88.89% | 3064 ms | ↑ 1.13x | 27 | 0s | 3d ago | 1h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 98.92% | 99.69% | 99.72% | 99.72% | 2570 ms | ↑ 3.02x | 10 | 0s | 1d ago | 1h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.92% | 99.71% | 97.89% | 97.89% | 884 ms | ↑ 2.00x | 7 | 9m | 6d ago | 1h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.92% | 98.92% | 98.95% | 98.95% | 1668 ms | ↓ 0.77x | 30 | 2m | 17h ago | 1h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 98.92% | 87.70% | 87.74% | 87.74% | 3436 ms | ↑ 1.98x | 111 | 25m | 17h ago | 1h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 98.92% | 72.49% | 72.53% | 72.53% | 1081 ms | ↓ 0.62x | 54 | 2h | 17h ago | 1h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 98.92% | 99.52% | 99.56% | 99.56% | 1121 ms | ↑ 1.31x | 7 | 9m | 2d ago | 1h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 98.78% | 20.34% | 4.67% | 4.67% | 2881 ms | ↓ 0.90x | 36 | 14h 10m | 2d ago | 2h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.75% | 99.17% | 84.82% | 84.82% | 1217 ms | ↑ 1.61x | 30 | 0s | 2d ago | 1h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.75% | 98.64% | 87.77% | 87.77% | 1812 ms | ↓ 0.75x | 39 | 3m | 12h ago | 1h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.74% | 95.41% | 94.94% | 94.94% | 3074 ms | ↑ 1.65x | 103 | 7m | 6d ago | 1h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.74% | 95.92% | 95.95% | 95.95% | 3027 ms | ↑ 3.18x | 33 | 28m | 17h ago | 1h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 98.63% | 99.74% | 90.29% | 90.29% | 894 ms | ↑ 1.63x | 4 | 25m | 2d ago | 2h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.62% | 98.52% | 90.61% | 90.61% | 2749 ms | → 1.00x | 53 | 22s | 6d ago | 2h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.45% | 97.60% | 97.61% | 97.61% | 3997 ms | → 1.04x | 20 | 0s | 6m ago | 2h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 98.45% | 99.58% | 99.70% | 99.70% | 566 ms | ↓ 0.65x | 13 | 2m | 15h ago | 2h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 98.38% | 41.92% | 41.97% | 41.97% | 2132 ms | → 0.98x | 31 | 8h 3m | 7d ago | 1h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.37% | 87.26% | 87.31% | 87.31% | 2482 ms | ↑ 1.50x | 16 | 2h 28m | 6d ago | 1h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.20% | 25.02% | 25.05% | 25.05% | 1655 ms | ↓ 0.85x | 9 | 1d 21h | 15h ago | 1h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.11% | 99.20% | 99.27% | 99.27% | 4144 ms | ↑ 2.04x | 10 | 2m | 14h ago | 2h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.11% | 99.53% | 99.88% | 99.88% | 4521 ms | ↑ 3.74x | 18 | 0s | 7m ago | 2h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.11% | 98.73% | 98.75% | 98.75% | 3520 ms | → 1.01x | 32 | 6m | 4h ago | 2h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.11% | 97.71% | 99.44% | 99.44% | 4143 ms | ↑ 2.64x | 75 | 2m | 7m ago | 2h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 97.94% | 97.47% | 97.78% | 97.78% | 4640 ms | ↑ 1.61x | 87 | 1m | 6d ago | 2h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 97.82% | 75.19% | 75.29% | 75.29% | 1613 ms | → 1.01x | 7 | 6h 17m | 2d ago | 1h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 97.69% | 49.30% | 88.04% | 88.04% | 1501 ms | ↑ 1.52x | 5 | 2d 19h | 7d ago | 1h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.42% | 99.02% | 99.67% | 99.67% | 4239 ms | ↑ 1.51x | 37 | 0s | 7m ago | 2h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.42% | 99.60% | 99.89% | 99.89% | 1498 ms | ↑ 1.52x | 1 | 4h 20m | 1d ago | 2h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 97.32% | 64.73% | 49.46% | 49.46% | 1792 ms | ↓ 0.73x | 10 | 23h 42m | 11h ago | 1h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 97.08% | 99.45% | 99.71% | 99.71% | 2477 ms | ↑ 1.97x | 5 | 1h | 2d ago | 2h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 96.95% | 99.15% | 72.79% | 72.79% | 2633 ms | ↑ 1.35x | 17 | 16m | 6d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 96.63% | 96.63% | 96.82% | 96.82% | 2410 ms | → 1.00x | 2 | 2h 29m | 2d ago | 1h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 96.58% | 97.00% | 97.03% | 97.03% | 3420 ms | ↑ 1.18x | 72 | 4m | 17h ago | 1h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 96.39% | 97.89% | 96.09% | 96.09% | 2649 ms | ↑ 1.59x | 44 | 8m | 3d ago | 2h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 96.22% | 94.99% | 98.66% | 98.66% | 3692 ms | ↑ 1.43x | 141 | 4m | 7m ago | 2h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 96.01% | 87.31% | 87.48% | 87.48% | 1648 ms | → 1.00x | 1 | 13h 10m | 7d ago | 1h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 95.88% | 99.10% | 99.67% | 99.67% | 622 ms | → 0.96x | 12 | 18m | 5d ago | 2h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 95.37% | 98.22% | 44.44% | 44.44% | 2062 ms | ↑ 1.58x | 50 | 4m | 4d ago | 1h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.98% | 90.65% | 64.10% | 64.10% | 1892 ms | ↑ 1.30x | 43 | 1h 14m | 2d ago | 1h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 93.57% | 69.18% | 62.86% | 62.86% | 4325 ms | ↓ 0.82x | 699 | 7m | 3d ago | 2h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 93.39% | 89.89% | 46.49% | 46.49% | 2467 ms | ↑ 1.48x | 166 | 14m | 12h ago | 2h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 92.52% | 92.51% | 97.81% | 97.81% | 1019 ms | ↓ 0.91x | 79 | 26m | 8d ago | 2h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 92.43% | 92.59% | 92.62% | 92.62% | 2695 ms | ↑ 2.45x | 88 | 22m | 5h ago | 1h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 92.16% | 78.11% | 83.76% | 83.76% | 4532 ms | → 1.04x | 557 | 5m | 17h ago | 1h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 91.24% | 76.56% | 82.48% | 82.48% | 2989 ms | ↓ 0.66x | 559 | 6m | 5h ago | 2h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 90.53% | 71.16% | 82.50% | 82.50% | 3328 ms | ↓ 0.34x | 561 | 10m | 17h ago | 2h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 89.97% | 78.50% | 83.30% | 83.30% | 4396 ms | → 1.01x | 575 | 4m | 1d ago | 2h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 89.86% | 96.81% | 98.92% | 98.92% | 4205 ms | ↑ 1.81x | 73 | 8m | 7m ago | 2h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 89.78% | 75.88% | 54.38% | 54.38% | 4671 ms | ↑ 1.10x | 593 | 5m | 13h ago | 1h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 88.87% | 77.63% | 78.40% | 78.40% | 4844 ms | ↑ 1.23x | 558 | 5m | 12h ago | 1h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 88.85% | 76.24% | 83.04% | 83.04% | 4458 ms | → 1.03x | 571 | 6m | 22h ago | 2h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 88.17% | 77.18% | 69.78% | 69.78% | 4623 ms | ↑ 1.08x | 598 | 4m | 5h ago | 2h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 87.97% | 76.91% | 75.06% | 75.06% | 4863 ms | ↑ 1.06x | 580 | 5m | 13h ago | 1h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 87.70% | 72.56% | 72.60% | 72.60% | 4636 ms | → 1.03x | 361 | 10m | 12h ago | 1h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 87.34% | 19.34% | 22.15% | 22.15% | 2255 ms | → 1.00x | 15 | 1d 11h | 3d ago | 1h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 87.26% | 87.89% | 75.23% | 75.23% | 1848 ms | → 0.95x | 237 | 11m | 1m ago | 2h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 86.85% | 75.15% | 75.18% | 75.18% | 3997 ms | ↓ 0.78x | 491 | 8m | 1d ago | 1h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 85.95% | 73.15% | 73.23% | 73.23% | 4690 ms | → 0.98x | 644 | 7m | 5h ago | 1h ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 85.66% | 85.66% | 85.85% | 85.85% | 2833 ms | → 1.00x | 1 | 12h 30m | 7d ago | 1h ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 85.57% | 64.99% | 14.88% | 14.88% | 4167 ms | ↑ 3.34x | 97 | 2h 7m | 2m ago | 2h ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 85.32% | 85.32% | 85.50% | 85.50% | 1857 ms | → 1.00x | 2 | 6h 30m | 3d ago | 1h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 84.74% | 82.50% | 84.50% | 84.50% | 4582 ms | ↑ 1.33x | 389 | 7m | 13h ago | 1h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 84.56% | 84.56% | 84.74% | 84.74% | 2179 ms | → 1.00x | 10 | 1h 17m | 14h ago | 1h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 84.09% | 84.09% | 84.09% | 84.09% | 2006 ms | → 1.00x | 1 | 13h 57m | 2d ago | 1h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 81.44% | 41.44% | 54.32% | 54.32% | 3207 ms | ↓ 0.74x | 612 | 28m | 2d ago | 2h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 79.07% | 62.73% | 62.75% | 62.75% | 4228 ms | ↓ 0.77x | 238 | 14m | 4d ago | 2h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 78.87% | 89.84% | 92.11% | 92.11% | 4845 ms | ↓ 0.70x | 160 | 15m | 6d ago | 2h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 75.39% | 11.45% | 2.63% | 2.63% | 2491 ms | → 1.00x | 2 | 11d 23h | 2d ago | 2h ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 75.14% | 45.30% | 45.40% | 45.40% | 2285 ms | → 1.00x | 1 | 3d 16h | 10d ago | 1h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 75.04% | 11.39% | 2.62% | 2.62% | 2210 ms | → 1.00x | 4 | 5d 24h | 2d ago | 2h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 72.64% | 30.39% | 30.44% | 30.44% | 4309 ms | ↑ 1.10x | 51 | 5h 10m | 3d ago | 1h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 72.16% | 11.07% | 29.70% | 29.70% | 666 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 72.16% | 11.07% | 76.13% | 76.13% | 2540 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 72.12% | 11.07% | 2.54% | 2.54% | 1885 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 71.99% | 11.06% | 2.56% | 2.56% | 1377 ms | → 1.00x | 2 | 12d 1h | 4h ago | 2h ago |
| [xAI](https://lmspeed.net/provider/xai) | 71.99% | 11.05% | 2.54% | 2.54% | 1684 ms | → 1.00x | 2 | 12d 1h | 2d ago | 2h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 71.92% | 10.98% | 16.89% | 16.89% | 2025 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 71.92% | 10.98% | 15.10% | 15.10% | 880 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [Crond](https://lmspeed.net/provider/crond) | 71.73% | 10.89% | 2.50% | 2.50% | 2436 ms | → 1.00x | 1 | 24d 2h | 30d ago | 2h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 71.55% | 10.86% | 27.45% | 27.45% | 854 ms | → 1.00x | 2 | 12d 1h | 3d ago | 2h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 71.27% | 10.59% | 27.17% | 27.17% | 2402 ms | → 1.00x | 1 | 24d 2h | 30d ago | 1h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 71.27% | 10.59% | 7.64% | 7.64% | 218 ms | → 1.00x | 1 | 24d 2h | 30d ago | 1h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 71.12% | 87.44% | 40.87% | 40.87% | 393 ms | ↑ 1.15x | 19 | 4h 4m | 9d ago | 1h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 71.12% | 10.64% | 2.50% | 2.50% | 968 ms | → 1.00x | 2 | 12d 1h | 20d ago | 1h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 71.12% | 10.61% | 2.98% | 2.98% | 1001 ms | → 1.00x | 1 | 24d 2h | 30d ago | 1h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 71.12% | 10.61% | 2.58% | 2.58% | 1027 ms | → 1.00x | 1 | 24d 2h | 30d ago | 1h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 70.82% | 10.58% | 2.42% | 2.42% | 1110 ms | → 1.00x | 3 | 8d 1h | 2d ago | 1h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 70.23% | 12.29% | 3.29% | 3.29% | 4649 ms | ↓ 0.94x | 105 | 5h 15m | 5h ago | 1h ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 69.44% | 10.58% | 2.43% | 2.43% | 999 ms | → 1.00x | 14 | 1d 17h | 17h ago | 2h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 68.94% | 10.46% | 2.40% | 2.40% | 3460 ms | → 1.00x | 16 | 1d 12h | 2d ago | 2h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 67.70% | 25.19% | 76.76% | 76.76% | 185 ms | → 0.99x | 7 | 3d 2h | 1d ago | 2h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 63.75% | 9.79% | 2.25% | 2.25% | 2279 ms | → 1.00x | 34 | 17h 10m | 3h ago | 2h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 62.46% | 91.41% | 95.88% | 95.88% | 2270 ms | ↑ 3.44x | 6 | 15h 37m | 22h ago | 1h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 60.90% | 13.18% | 13.18% | 13.18% | 3754 ms | → 1.00x | 49 | 7h 53m | 11h ago | 1h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 60.18% | 92.95% | 90.90% | 90.90% | 1982 ms | ↑ 3.36x | 44 | 1h 42m | 10h ago | 1h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 59.38% | 50.17% | 61.39% | 61.39% | 4840 ms | → 1.02x | 756 | 16m | 2m ago | 2h ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 45.55% | 91.65% | 97.97% | 97.97% | 2044 ms | ↑ 2.01x | 10 | 10h 42m | 1d ago | 1h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 45.14% | 6.88% | 2.45% | 2.45% | 4418 ms | → 1.00x | 3 | 8d 18h | 3d ago | 2h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 37.63% | 5.78% | 4.30% | 4.30% | 1795 ms | → 1.00x | 2 | 13d 10h | 3d ago | 2h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 30.99% | 61.14% | 59.99% | 59.99% | 2700 ms | ↑ 1.82x | 7 | 1d 19h | 2d ago | 1h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 0.36% | 1.38% | 1.38% | 1.38% | 1056 ms | ↑ 1.15x | 2 | 13d 20h | 8d ago | 1h ago |

</details>

<details open>
<summary><strong>🔴 Down (171)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 80.41% | 93.28% | 95.94% | 95.94% | 4341 ms | ↑ 1.05x | 180 | 8m | 2h ago | 2h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 76.22% | 57.87% | 57.90% | 57.90% | 1721 ms | ↑ 1.51x | 9 | 1d 8h | 2d ago | 1h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 75.68% | 95.14% | 95.17% | 95.17% | 1277 ms | ↓ 0.92x | 10 | 4h 41m | 2d ago | 1h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 69.00% | 69.00% | 69.19% | 69.19% | 3026 ms | → 1.00x | 3 | 13h 19m | 1d ago | 1h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 63.53% | 93.29% | 97.59% | 97.59% | 3132 ms | ↑ 1.65x | 45 | 1h 34m | 3d ago | 2h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 49.64% | 7.38% | 3.51% | 3.51% | 4624 ms | → 1.00x | 78 | 7h 39m | 2h ago | 1h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 43.23% | 43.23% | 43.43% | 43.43% | 3526 ms | → 1.00x | 2 | 1d 18h | 3d ago | 1h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 40.86% | 7.41% | 3.31% | 3.31% | 4324 ms | ↓ 0.88x | 154 | 3h 51m | 1h ago | 1h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 29.21% | 83.29% | 65.40% | 65.40% | 1745 ms | → 0.98x | 30 | 5h 45m | 6d ago | 1h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 28.80% | 29.17% | 29.32% | 29.32% | 1540 ms | ↓ 0.94x | 2 | 3d 4h | 6d ago | 1h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 28.70% | 89.31% | 37.41% | 37.41% | 483 ms | → 0.97x | 3 | 1d 23h | 6d ago | 1h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 28.70% | 89.36% | 97.56% | 97.56% | 2538 ms | ↑ 2.15x | 1 | 5d 20h | 6d ago | 1h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 28.70% | 87.90% | 35.39% | 35.39% | 412 ms | ↓ 0.91x | 50 | 2h 49m | 6d ago | 1h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 28.70% | 89.23% | 39.80% | 39.80% | 735 ms | ↑ 1.30x | 3 | 1d 23h | 6d ago | 1h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 28.70% | 28.49% | 6.51% | 6.51% | 1124 ms | → 1.00x | 3 | 7d 6h | 6d ago | 1h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 28.70% | 89.15% | 40.54% | 40.54% | 778 ms | ↑ 1.43x | 9 | 15h 31m | 6d ago | 1h ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 28.65% | 89.20% | 97.30% | 97.30% | 2171 ms | ↑ 2.25x | 5 | 1d 4h | 6d ago | 1h ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 28.65% | 89.18% | 97.35% | 97.35% | 2237 ms | ↑ 2.21x | 6 | 23h 18m | 6d ago | 1h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 28.57% | 82.49% | 82.53% | 82.53% | 926 ms | → 1.04x | 7 | 19h 60m | 6d ago | 1h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 28.52% | 10.99% | 3.10% | 3.10% | 2065 ms | → 1.01x | 4 | 6d 17h | 6d ago | 1h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 28.52% | 80.93% | 80.97% | 80.97% | 1911 ms | ↑ 3.03x | 3 | 2d 4h | 6d ago | 1h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 28.47% | 89.40% | 88.48% | 88.48% | 631 ms | → 1.01x | 2 | 2d 22h | 6d ago | 1h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 28.29% | 88.06% | 86.01% | 86.01% | 2678 ms | ↑ 1.31x | 29 | 4h 56m | 6d ago | 1h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 28.19% | 88.96% | 92.19% | 92.19% | 2986 ms | ↑ 1.19x | 16 | 8h 44m | 6d ago | 1h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 28.01% | 19.52% | 19.50% | 19.50% | 1969 ms | → 1.00x | 3 | 2d 5h | 4d ago | 2h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 27.95% | 86.53% | 96.91% | 96.91% | 1275 ms | ↑ 1.92x | 80 | 1h 48m | 6d ago | 2h ago |
| [Groq](https://lmspeed.net/provider/groq) | 27.92% | 88.07% | 97.27% | 97.27% | 1092 ms | ↑ 3.55x | 22 | 6h 33m | 6d ago | 2h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 27.77% | 39.68% | 39.79% | 39.79% | 4070 ms | → 1.04x | 24 | 6h 59m | 6d ago | 1h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 27.71% | 88.88% | 97.45% | 97.45% | 773 ms | ↑ 2.00x | 2 | 2d 23h | 6d ago | 2h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 27.71% | 87.22% | 96.18% | 96.18% | 766 ms | ↑ 1.62x | 52 | 2h 45m | 6d ago | 2h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 27.68% | 88.87% | 97.40% | 97.40% | 304 ms | ↓ 0.33x | 5 | 1d 4h | 6d ago | 2h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 27.66% | 88.77% | 97.42% | 97.42% | 783 ms | ↑ 1.67x | 6 | 23h 32m | 6d ago | 2h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 27.66% | 88.08% | 89.98% | 89.98% | 293 ms | ↓ 0.26x | 32 | 4h 25m | 6d ago | 2h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 27.66% | 71.80% | 71.82% | 71.82% | 722 ms | ↑ 1.77x | 1 | 5d 21h | 6d ago | 2h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 27.66% | 87.34% | 96.01% | 96.01% | 3773 ms | ↑ 1.09x | 57 | 2h 29m | 6d ago | 2h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 27.65% | 88.32% | 90.17% | 90.17% | 4174 ms | ↑ 1.32x | 38 | 3h 41m | 6d ago | 1h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 27.49% | 88.71% | 96.65% | 96.65% | 3198 ms | ↑ 1.86x | 7 | 20h 12m | 6d ago | 2h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 27.49% | 88.78% | 97.24% | 97.24% | 2798 ms | ↑ 1.68x | 6 | 23h 32m | 6d ago | 2h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 27.44% | 88.75% | 97.37% | 97.37% | 3046 ms | ↑ 1.86x | 5 | 1d 4h | 6d ago | 2h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 27.32% | 66.40% | 90.84% | 90.84% | 3196 ms | ↓ 0.92x | 342 | 40m | 6d ago | 2h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 27.15% | 88.51% | 97.36% | 97.36% | 3703 ms | ↑ 5.17x | 16 | 8h 49m | 6d ago | 2h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 26.91% | 10.46% | 2.40% | 2.40% | 900 ms | ↓ 0.90x | 7 | 3d 21h | 6d ago | 2h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 26.24% | 8.90% | 14.62% | 14.62% | 3553 ms | ↑ 1.18x | 11 | 2d 12h | 6d ago | 2h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 25.09% | 83.09% | 94.50% | 94.50% | 4667 ms | ↑ 1.66x | 183 | 48m | 6d ago | 2h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 24.06% | 76.83% | 78.64% | 78.64% | 2649 ms | ↑ 1.12x | 384 | 25m | 6d ago | 1h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 23.71% | 70.71% | 87.01% | 87.01% | 3977 ms | ↓ 0.95x | 439 | 25m | 6d ago | 2h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 22.73% | 84.57% | 94.88% | 94.88% | 3816 ms | ↑ 1.31x | 166 | 51m | 6d ago | 2h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 21.12% | 69.10% | 92.86% | 92.86% | 4167 ms | ↑ 1.78x | 165 | 1h 28m | 6d ago | 2h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 20.62% | 67.75% | 92.43% | 92.43% | 4566 ms | ↑ 1.62x | 211 | 1h 9m | 6d ago | 2h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 19.90% | 58.26% | 89.60% | 89.60% | 4696 ms | ↑ 1.31x | 361 | 48m | 6d ago | 2h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 18.35% | 75.14% | 77.17% | 77.17% | 4459 ms | ↑ 1.45x | 396 | 25m | 6d ago | 2h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 15.59% | 56.32% | 39.73% | 39.73% | 4559 ms | → 0.99x | 683 | 21m | 6d ago | 1h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 13.91% | 52.45% | 69.27% | 69.27% | 4622 ms | → 1.03x | 722 | 22m | 6d ago | 2h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 13.89% | 54.86% | 69.89% | 69.89% | 4863 ms | ↑ 1.17x | 634 | 23m | 7h ago | 2h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 13.04% | 55.65% | 75.03% | 75.03% | 4937 ms | ↑ 1.60x | 673 | 21m | 6d ago | 2h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 6.64% | 18.77% | 18.99% | 18.99% | 2398 ms | ↑ 1.26x | 524 | 58m | 6d ago | 1h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 6.34% | 6.34% | 6.53% | 6.53% | 582 ms | → 1.00x | 2 | 3d 4h | 6d ago | 1h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 4.32% | 85.64% | 84.13% | 84.13% | 952 ms | ↑ 1.47x | 8 | 20h 24m | 7d ago | 1h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 3.92% | 0.64% | 4.42% | 4.42% | 740 ms | → 0.98x | 3 | 9d 22h | 6d ago | 1h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 3.84% | 0.58% | 0.14% | 0.14% | 314 ms | → 1.00x | 2 | 14d 22h | 6d ago | 2h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 3.82% | 0.58% | 0.14% | 0.14% | 1897 ms | → 1.00x | 2 | 14d 22h | 6d ago | 2h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 3.81% | 76.88% | 60.61% | 60.61% | 4440 ms | ↑ 2.06x | 47 | 4h 28m | 6d ago | 2h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 3.76% | 66.37% | 31.09% | 31.09% | 2808 ms | ↑ 1.11x | 463 | 27m | 6d ago | 1h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 3.61% | 0.55% | 45.68% | 45.68% | 444 ms | → 1.00x | 2 | 14d 22h | 6d ago | 2h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 2.16% | 84.87% | 87.68% | 87.68% | 1812 ms | ↑ 4.80x | 13 | 12h 51m | 7d ago | 1h ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.18% | 0.12% | 0.12% | 0.12% | 2848 ms | → 1.00x | 2 | 4d 9h | 17h ago | 1h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.17% | 0.56% | 0.13% | 0.13% | 834 ms | ↓ 0.81x | 18 | 1d 16h | 7d ago | 2h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 24.35% | 80.00% | 80.00% | — | — | 6 | 3d 23h | 24d ago | 2h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 17.32% | 3.96% | 3.96% | — | — | 2 | 12d 17h | 24d ago | 2h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 42.54% | 42.54% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 7.73% | 31.32% | 31.32% | — | — | 3 | 9d 8h | 27d ago | 1h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 55.41% | 73.36% | 73.36% | — | — | 291 | 1h 6m | 12d ago | 2h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 19h | 9d ago | 2h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 21.61% | 21.61% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 6.29% | 47.06% | 47.06% | — | — | 1 | 28d 9h | 28d ago | 1h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 28.07% | 35.36% | 35.36% | — | — | 2 | 11d 8h | 23d ago | 1h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 63.77% | 63.77% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.75% | 15.75% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 66.86% | 66.86% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.30% | 8.30% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 76.90% | 76.90% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 13.49% | 13.49% | 13.49% | — | — | 5 | 4d 9h | 22d ago | 1h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 15h | 22d ago | 1h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 38.75% | 46.24% | 46.24% | — | — | 5 | 3d 23h | 20d ago | 1h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 17.52% | 17.52% | 17.52% | — | — | 5 | 3d 20h | 19d ago | 1h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 61.82% | 61.82% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 39.87% | 86.08% | 86.08% | — | — | 2 | 9d 18h | 20d ago | 2h ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 54.59% | 54.59% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 19h | 9d ago | 2h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 49.63% | 49.63% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 19h | 19d ago | 1h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 68.72% | 68.72% | — | — | 3 | 9d 24h | 18d ago | 2h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 21h | 9d ago | 2h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 17h | 9d ago | 1h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 48.77% | 48.77% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 66.85% | 58.73% | 58.73% | — | — | 10 | 1d 6h | 12d ago | 1h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 15h | 22d ago | 1h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 17h | 9d ago | 1h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 68.27% | 92.65% | 92.65% | — | — | 58 | 4h 38m | 11d ago | 2h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.25% | 4.25% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 50.72% | 50.72% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 33.24% | 33.24% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 28.31% | 28.31% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.51% | 20.51% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 58.13% | 58.13% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 64.77% | 64.77% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 60.59% | 90.91% | 90.91% | — | — | 1 | 14d 3h | 14d ago | 2h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 21h | 11d ago | 1h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 53.63% | 88.09% | 88.09% | — | — | 22 | 17h 10m | 16d ago | 2h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 23.26% | 23.26% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 17.23% | 80.18% | 80.18% | — | — | 2 | 12d 18h | 13d ago | 2h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 21.84% | 35.17% | 35.17% | — | — | 104 | 5h 17m | 10d ago | 1h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 18.92% | 10.42% | 10.42% | — | — | 1 | 25d 2h | 25d ago | 1h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 1h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 12.98% | 79.42% | 79.42% | — | — | 1 | 26d 15h | 27d ago | 2h ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 21.90% | 21.90% | 21.90% | — | — | 3 | 8d 1h | 24d ago | 1h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 20h | 9d ago | 2h ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 58.65% | 58.65% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 48.63% | 48.63% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 61.19% | 91.10% | 91.10% | — | — | 2 | 6d 23h | 14d ago | 2h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |

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
