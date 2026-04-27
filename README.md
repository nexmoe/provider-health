# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**526 providers** — 290 🟢 operational · 62 🟡 degraded · 174 🔴 down · 0 ⚫ unknown

_Updated 2026-04-27 06:06 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (290)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 91.67% | 91.78% | 91.78% | 1566 ms | → 0.98x | 1 | 12h 20m | 10d ago | 4m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.84% | 91.17% | 91.17% | 1658 ms | ↓ 0.94x | 5 | 0s | 9d ago | 5m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 27.42% | 6.03% | 6.03% | 2225 ms | ↑ 1.22x | 3 | 6d 9h | 9d ago | 7m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 96.96% | 96.96% | 3841 ms | ↑ 1.85x | 2 | 0s | 9d ago | 14m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.73% | 98.19% | 98.19% | 1398 ms | ↓ 0.90x | 9 | 0s | 9d ago | 5m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 100.00% | 99.26% | 99.13% | 99.13% | 2270 ms | ↑ 2.10x | 16 | 6m | 9d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.92% | 98.66% | 98.66% | 788 ms | ↑ 1.91x | 2 | 0s | 9d ago | 6m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 88.46% | 88.51% | 88.51% | 2478 ms | ↑ 1.46x | 16 | 2h 28m | 8d ago | 4m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2164 ms | → 1.00x | 0 | — | — | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 94.92% | 94.97% | 94.97% | 2461 ms | ↑ 1.72x | 1 | 18h 20m | 20d ago | 4m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.95% | 90.94% | 90.94% | 2119 ms | ↑ 1.91x | 1 | 0s | 24d ago | 16m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 90.37% | 90.48% | 90.48% | 2741 ms | ↑ 1.06x | 3 | 5h 3m | 9d ago | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.68% | 99.72% | 99.72% | 2058 ms | ↑ 1.59x | 7 | 0s | 10d ago | 4m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 97.12% | 97.16% | 97.16% | 1307 ms | ↓ 0.95x | 5 | 2h 32m | 9d ago | 4m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 95.84% | 95.44% | 95.44% | 2550 ms | ↑ 2.13x | 10 | 2h 20m | 9d ago | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.86% | 98.68% | 98.68% | 1091 ms | ↑ 1.34x | 3 | 3m | 10d ago | 13m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 92.55% | 92.59% | 92.59% | 2260 ms | ↑ 1.08x | 76 | 15m | 10d ago | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 92.80% | 94.54% | 94.54% | 1726 ms | ↑ 1.47x | 22 | 1h 49m | 9d ago | 5m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 91.35% | 91.47% | 91.47% | 1288 ms | ↑ 1.23x | 1 | 12h 47m | 10d ago | 4m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.73% | 75.35% | 75.35% | 2353 ms | ↑ 1.40x | 8 | 1m | 9d ago | 6m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 914 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.48% | 99.71% | 99.71% | 3429 ms | ↑ 1.59x | 15 | 2m | 8d ago | 12m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.69% | 99.14% | 99.14% | 3804 ms | ↑ 2.60x | 65 | 3m | 8d ago | 13m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.10% | 93.55% | 93.55% | 2245 ms | ↓ 0.91x | 122 | 5m | 9d ago | 5m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 98.42% | 98.48% | 98.48% | 1501 ms | → 1.05x | 3 | 1h 20m | 16d ago | 4m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.31% | 97.84% | 97.84% | 684 ms | → 0.97x | 79 | 26m | 10d ago | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2433 ms | → 1.00x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.93% | 100.00% | 100.00% | 790 ms | → 0.98x | 0 | — | — | 4m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2845 ms | → 1.00x | 0 | — | — | 4m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 47.97% | 88.18% | 88.18% | 1256 ms | ↑ 1.32x | 5 | 2d 19h | 9d ago | 7m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.73% | 99.44% | 99.44% | 2452 ms | ↑ 1.79x | 9 | 0s | 11d ago | 12m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.84% | 99.83% | 99.83% | 2863 ms | ↑ 1.52x | 5 | 0s | 9d ago | 10m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.92% | 99.95% | 99.95% | 1609 ms | ↑ 1.87x | 2 | 0s | 9d ago | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 90.56% | 90.64% | 90.64% | 2143 ms | ↑ 1.31x | 3 | 11h 20m | 10d ago | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 96.80% | 96.83% | 96.83% | 1269 ms | ↓ 0.71x | 18 | 42m | 8d ago | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 570 ms | → 1.00x | 0 | — | — | 4m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 98.50% | 97.54% | 97.54% | 1103 ms | ↑ 2.58x | 14 | 29m | 9d ago | 7m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 94.91% | 94.91% | 2563 ms | ↑ 2.88x | 3 | 0s | 9d ago | 5m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 95.25% | 97.00% | 97.00% | 3599 ms | ↑ 2.07x | 6 | 4h 40m | 11d ago | 13m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 87.11% | 41.77% | 41.77% | 409 ms | ↑ 1.20x | 19 | 4h 4m | 11d ago | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.67% | 99.56% | 99.56% | 2161 ms | ↓ 0.83x | 11 | 0s | 9d ago | 10m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 95.22% | 96.08% | 96.08% | 3502 ms | ↑ 1.46x | 43 | 31m | 9d ago | 11m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 97.43% | 97.46% | 97.46% | 3207 ms | ↑ 2.24x | 6 | 2h 13m | 9d ago | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.73% | 91.21% | 91.21% | 772 ms | → 1.02x | 9 | 0s | 9d ago | 6m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 96.87% | 96.91% | 96.91% | 1620 ms | ↑ 1.29x | 3 | 4h 10m | 10d ago | 4m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.81% | 99.86% | 99.86% | 652 ms | ↓ 0.80x | 5 | 2m | 9d ago | 5m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 97.23% | 96.31% | 96.31% | 1692 ms | → 0.98x | 48 | 11m | 9d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 95.75% | 95.79% | 95.79% | 2167 ms | ↑ 2.12x | 3 | 5h 3m | 12d ago | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.42% | 36.39% | 36.39% | 878 ms | ↑ 1.06x | 47 | 2m | 11d ago | 7m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.89% | 68.28% | 68.28% | 1159 ms | ↑ 1.08x | 3 | 0s | 9d ago | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 97.81% | 97.11% | 97.11% | 3238 ms | ↑ 2.03x | 13 | 51m | 9d ago | 5m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.95% | 34.28% | 34.28% | 1064 ms | ↓ 0.42x | 1 | 0s | 11d ago | 12m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.61% | 97.66% | 97.66% | 2132 ms | ↑ 2.34x | 24 | 11m | 9d ago | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.78% | 50.24% | 50.24% | 1543 ms | ↓ 0.85x | 7 | 0s | 9d ago | 6m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.56% | 98.98% | 98.98% | 1924 ms | ↑ 1.34x | 15 | 0s | 8d ago | 6m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.56% | 86.15% | 86.15% | 2165 ms | ↑ 1.10x | 4 | 28m | 9d ago | 6m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.78% | 99.47% | 99.47% | 2013 ms | ↑ 1.84x | 7 | 0s | 9d ago | 6m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.28% | 97.50% | 97.50% | 912 ms | ↓ 0.74x | 3 | 3h 47m | 9d ago | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 27.46% | 14.55% | 14.55% | 1034 ms | ↑ 1.09x | 2 | 9d 13h | 9d ago | 5m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.54% | 97.81% | 97.81% | 4638 ms | ↑ 1.43x | 82 | 1m | 8d ago | 15m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 88.67% | 60.43% | 60.43% | 3376 ms | ↑ 2.38x | 9 | 7h 28m | 9d ago | 5m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 100.00% | 80.29% | 80.37% | 80.37% | 625 ms | ↓ 0.52x | 7 | 5h 50m | 9d ago | 4m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 74.27% | 74.35% | 74.35% | 240 ms | ↓ 0.51x | 10 | 7h 2m | 8d ago | 4m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.76% | 99.58% | 99.58% | 2299 ms | ↑ 1.50x | 42 | 43s | 9d ago | 14m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 59.30% | 59.35% | 59.35% | 1363 ms | → 1.02x | 2 | 3d 2h | 12d ago | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.95% | 100.00% | 100.00% | 2091 ms | ↑ 1.97x | 0 | — | — | 4m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.67% | 98.85% | 98.85% | 417 ms | ↓ 0.88x | 4 | 18m | 25d ago | 7m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 98.61% | 98.15% | 98.15% | 1351 ms | → 0.98x | 15 | 23m | 9d ago | 5m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 93.09% | 93.14% | 93.14% | 1423 ms | ↓ 0.40x | 26 | 42m | 10d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 91.13% | 91.24% | 91.24% | 2018 ms | ↓ 0.86x | 1 | 12h 50m | 10d ago | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.70% | 97.99% | 97.99% | 733 ms | ↑ 2.07x | 7 | 9m | 8d ago | 5m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 16.75% | 3.69% | 3.69% | 2523 ms | → 1.01x | 1 | 22d 2h | 30d ago | 10m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 91.25% | 91.28% | 91.28% | 2405 ms | ↑ 1.27x | 6 | 8h 38m | 9d ago | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 27.46% | 6.73% | 6.73% | 1130 ms | ↑ 1.46x | 1 | 19d 3h | 30d ago | 7m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.95% | 99.99% | 99.99% | 912 ms | ↑ 1.45x | 1 | 0s | 24d ago | 16m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.92% | 99.81% | 99.81% | 684 ms | ↓ 0.80x | 2 | 0s | 14d ago | 15m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.95% | 99.93% | 99.93% | 1169 ms | ↑ 1.84x | 1 | 0s | 20d ago | 14m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 90.52% | 90.64% | 90.64% | 1282 ms | ↓ 0.85x | 1 | 13h 10m | 9d ago | 4m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 27.33% | 17.26% | 17.26% | 862 ms | ↓ 0.87x | 3 | 6d 9h | 9d ago | 5m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 97.48% | 97.21% | 97.21% | 1287 ms | ↑ 1.14x | 16 | 47m | 9d ago | 5m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 16.52% | 3.72% | 3.72% | 938 ms | → 0.99x | 2 | 11d 1h | 22d ago | 7m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.61% | 99.71% | 99.71% | 2351 ms | ↑ 1.07x | 3 | 0s | 9d ago | 10m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.05% | 98.48% | 98.48% | 4115 ms | ↑ 1.42x | 34 | 0s | 9d ago | 16m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.89% | 99.90% | 99.90% | 947 ms | ↓ 0.77x | 3 | 0s | 16d ago | 14m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.59% | 98.29% | 98.29% | 1194 ms | ↑ 1.17x | 11 | 3m | 9d ago | 5m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 16.85% | 17.91% | 17.91% | 1399 ms | → 0.97x | 1 | 22d 2h | 30d ago | 13m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.51% | 99.13% | 99.13% | 1899 ms | ↑ 2.11x | 16 | 38s | 9d ago | 14m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.10% | 99.60% | 99.60% | 1181 ms | ↓ 0.88x | 4 | 1h 8m | 9d ago | 10m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.73% | 99.24% | 99.24% | 1965 ms | ↑ 1.51x | 82 | 5m | 10d ago | 7m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 16.93% | 30.56% | 30.56% | 682 ms | → 0.99x | 1 | 22d 2h | 30d ago | 15m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.40% | 97.63% | 97.63% | 1271 ms | ↑ 1.47x | 20 | 30s | 9d ago | 5m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 79.60% | 79.66% | 79.66% | 1106 ms | ↓ 0.93x | 4 | 15h 20m | 9d ago | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.92% | 99.94% | 99.94% | 1476 ms | → 1.02x | 2 | 0s | 13d ago | 14m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.73% | 99.77% | 99.77% | 879 ms | ↓ 0.78x | 8 | 1m | 9d ago | 5m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 100.00% | 94.25% | 94.32% | 94.32% | 558 ms | ↑ 1.33x | 1 | 13h 50m | 15d ago | 4m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.86% | 99.84% | 99.84% | 1712 ms | ↑ 1.18x | 4 | 0s | 9d ago | 11m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.84% | 99.84% | 99.84% | 2373 ms | ↑ 1.32x | 4 | 2m | 8d ago | 6m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.52% | 98.62% | 98.62% | 1420 ms | ↓ 0.79x | 3 | 37m | 9d ago | 4m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.22% | 99.55% | 99.55% | 955 ms | ↓ 0.84x | 24 | 2m | 12d ago | 15m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 51.74% | 51.74% | 1177 ms | ↓ 0.74x | 4 | 0s | 9d ago | 6m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 100.00% | 99.74% | 99.79% | 99.79% | 1305 ms | → 1.04x | 4 | 0s | 11d ago | 4m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 27.44% | 6.12% | 6.12% | 615 ms | ↓ 0.81x | 2 | 9d 14h | 8d ago | 7m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.90% | 99.95% | 99.95% | 1793 ms | ↑ 1.85x | 1 | 0s | 13d ago | 4m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 2991 ms | → 1.00x | 0 | — | — | 4m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.59% | 87.16% | 87.16% | 2380 ms | ↑ 2.62x | 13 | 46s | 9d ago | 14m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 27.12% | 5.96% | 5.96% | 1882 ms | ↓ 0.83x | 12 | 1d 14h | 9d ago | 7m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.48% | 98.46% | 98.46% | 1024 ms | ↓ 0.82x | 18 | 0s | 9d ago | 5m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 16.92% | 76.42% | 76.42% | 2544 ms | → 1.01x | 1 | 22d 2h | 30d ago | 15m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.92% | 99.91% | 99.91% | 1674 ms | ↑ 1.61x | 2 | 0s | 9d ago | 14m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.90% | 99.90% | 984 ms | → 1.00x | 2 | 0s | 7d ago | 15m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 16.48% | 11.14% | 11.14% | 199 ms | → 1.00x | 1 | 22d 2h | 30d ago | 5m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.16% | 99.52% | 99.52% | 1149 ms | ↑ 1.06x | 5 | 50m | 14d ago | 15m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.87% | 99.93% | 99.93% | 1344 ms | ↑ 1.35x | 1 | 0s | 7d ago | 4m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.32% | 98.86% | 98.86% | 2669 ms | ↑ 1.23x | 23 | 26s | 9d ago | 14m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.39% | 96.43% | 96.43% | 1993 ms | ↑ 1.27x | 5 | 2h 40m | 10d ago | 4m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.24% | 36.35% | 36.35% | 1682 ms | → 0.95x | 15 | 8m | 9d ago | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 95.83% | 95.86% | 95.86% | 1536 ms | → 1.00x | 9 | 1h 47m | 9d ago | 4m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 92.21% | 92.25% | 92.25% | 1754 ms | ↑ 1.37x | 54 | 25m | 8d ago | 4m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 60.62% | 60.62% | 1418 ms | ↑ 2.51x | 4 | 0s | 9d ago | 6m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.00% | 98.35% | 98.35% | 2093 ms | → 1.03x | 35 | 17s | 10d ago | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.78% | 99.75% | 99.75% | 2830 ms | ↑ 1.46x | 6 | 2m | 9d ago | 14m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.65% | 99.65% | 1454 ms | ↑ 1.25x | 3 | 3m | 10d ago | 15m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.84% | 99.85% | 99.85% | 1771 ms | → 0.98x | 5 | 0s | 9d ago | 10m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 27.20% | 21.56% | 21.56% | 775 ms | ↓ 0.56x | 6 | 3d 5h | 9d ago | 5m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.86% | 99.06% | 99.06% | 1875 ms | ↑ 1.23x | 4 | 0s | 9d ago | 6m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 58.62% | 58.62% | 1357 ms | ↑ 1.68x | 2 | 0s | 9d ago | 6m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.84% | 95.82% | 95.82% | 891 ms | ↑ 1.50x | 5 | 0s | 9d ago | 6m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 99.92% | 52.11% | 52.11% | 3731 ms | ↑ 2.30x | 2 | 0s | 12d ago | 13m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.78% | 99.64% | 99.64% | 708 ms | ↓ 0.77x | 7 | 0s | 18d ago | 15m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.76% | 99.72% | 99.72% | 2126 ms | ↑ 1.06x | 8 | 0s | 13d ago | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.12% | 99.34% | 99.34% | 720 ms | → 1.03x | 79 | 3m | 17d ago | 12m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 48.05% | 48.05% | 1201 ms | ↑ 2.16x | 2 | 0s | 9d ago | 6m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 97.85% | 97.85% | 1641 ms | ↑ 1.83x | 2 | 0s | 9d ago | 5m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.70% | 97.25% | 97.25% | 2222 ms | ↑ 2.93x | 9 | 1m | 9d ago | 5m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 40.56% | 18.74% | 18.74% | 2782 ms | ↑ 1.62x | 10 | 1d 12h | 9d ago | 6m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.86% | 99.71% | 99.71% | 2244 ms | ↑ 1.56x | 3 | 3m | 18d ago | 15m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.86% | 99.86% | 99.86% | 2187 ms | ↑ 1.69x | 4 | 0s | 9d ago | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 47.81% | 33.26% | 33.26% | 4443 ms | ↑ 1.21x | 5 | 2d 16h | 8d ago | 5m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.12% | 98.97% | 98.97% | 1646 ms | ↓ 0.94x | 30 | 20s | 9d ago | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 490 ms | → 1.00x | 0 | — | — | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.70% | 72.85% | 72.85% | 469 ms | → 0.96x | 8 | 3m | 9d ago | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.92% | 99.92% | 99.92% | 186 ms | ↓ 0.20x | 2 | 0s | 21d ago | 15m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.59% | 99.90% | 99.90% | 2528 ms | ↑ 1.77x | 11 | 2m | 9d ago | 14m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.84% | 99.94% | 99.94% | 2410 ms | ↑ 3.00x | 4 | 42s | 9d ago | 11m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.49% | 99.45% | 99.45% | 2643 ms | ↑ 1.41x | 18 | 0s | 8d ago | 15m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.59% | 72.75% | 72.75% | 2730 ms | ↑ 1.54x | 77 | 25m | 8d ago | 6m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.95% | 81.35% | 81.35% | 563 ms | ↓ 0.95x | 1 | 0s | 9d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.42% | 95.29% | 95.29% | 1162 ms | ↑ 1.10x | 52 | 57s | 9d ago | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.92% | 99.96% | 99.96% | 1811 ms | ↑ 1.07x | 2 | 0s | 9d ago | 14m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.56% | 97.68% | 97.68% | 789 ms | → 0.96x | 14 | 43s | 9d ago | 5m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.59% | 97.86% | 97.86% | 2025 ms | → 1.02x | 13 | 46s | 9d ago | 14m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 16.49% | 4.45% | 4.45% | 1055 ms | → 0.97x | 1 | 22d 2h | 30d ago | 6m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.86% | 99.91% | 99.91% | 921 ms | ↓ 0.92x | 4 | 0s | 9d ago | 5m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 16.49% | 3.86% | 3.86% | 585 ms | → 0.99x | 1 | 22d 2h | 30d ago | 7m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.92% | 51.41% | 51.41% | 2404 ms | ↑ 2.86x | 2 | 0s | 9d ago | 6m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.03% | 59.35% | 59.35% | 1087 ms | → 0.99x | 31 | 1m | 17d ago | 15m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 100.00% | 55.32% | 55.41% | 55.41% | 424 ms | ↓ 0.77x | 1 | 3d 16h | 12d ago | 4m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.59% | 99.66% | 99.66% | 67 ms | ↓ 0.18x | 4 | 3m | 12d ago | 4m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.86% | 98.93% | 98.93% | 2381 ms | ↑ 1.85x | 4 | 0s | 9d ago | 14m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 95.77% | 96.19% | 96.19% | 2511 ms | ↑ 1.24x | 75 | 11m | 9d ago | 7m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 16.93% | 3.74% | 3.74% | 1826 ms | → 1.02x | 1 | 22d 2h | 30d ago | 14m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2188 ms | → 1.00x | 0 | — | — | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 27.46% | 6.95% | 6.95% | 2474 ms | ↑ 1.19x | 2 | 9d 14h | 8d ago | 7m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 89.77% | 92.20% | 92.20% | 4445 ms | ↓ 0.73x | 155 | 15m | 8d ago | 14m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.97% | 99.97% | 1789 ms | → 1.02x | 2 | 0s | 9d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.59% | 99.73% | 99.73% | 749 ms | ↓ 0.57x | 2 | 0s | 8d ago | 4m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.49% | 99.50% | 99.50% | 2016 ms | ↑ 1.94x | 11 | 6m | 12d ago | 15m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2874 ms | → 1.00x | 0 | — | — | 4m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.36% | 99.36% | 2500 ms | ↑ 2.94x | 0 | — | — | 14m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 957 ms | ↑ 1.49x | 2 | 0s | 13d ago | 16m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.56% | 90.72% | 90.72% | 2693 ms | ↓ 0.92x | 50 | 24s | 8d ago | 14m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.01% | 96.07% | 96.07% | 2226 ms | ↑ 1.10x | 1 | 9h 60m | 15d ago | 4m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.39% | 99.47% | 99.47% | 1210 ms | ↑ 1.22x | 2 | 25m | 9d ago | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.93% | 82.61% | 82.61% | 1749 ms | ↑ 2.79x | 30 | 3m | 9d ago | 5m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.46% | 99.53% | 99.53% | 631 ms | ↓ 0.90x | 7 | 0s | 10d ago | 4m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.05% | 99.77% | 99.77% | 1560 ms | → 0.99x | 34 | 0s | 17d ago | 15m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.92% | 99.40% | 99.40% | 1012 ms | ↓ 0.89x | 60 | 3m | 13d ago | 15m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.84% | 99.69% | 99.69% | 1203 ms | ↓ 0.93x | 4 | 2m | 14d ago | 15m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 80.43% | 58.26% | 58.26% | 602 ms | ↓ 0.86x | 5 | 23h 36m | 9d ago | 5m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.43% | 99.80% | 99.80% | 846 ms | ↓ 0.81x | 20 | 0s | 11d ago | 13m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 97.69% | 81.65% | 81.65% | 1475 ms | ↓ 0.45x | 80 | 29s | 9d ago | 10m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 45.54% | 10.07% | 10.07% | 1958 ms | ↑ 1.06x | 2 | 7d | 9d ago | 16m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.62% | 98.39% | 98.39% | 1993 ms | ↑ 1.09x | 13 | 0s | 9d ago | 5m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.57% | 90.74% | 90.74% | 3784 ms | ↑ 3.33x | 14 | 43s | 9d ago | 16m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 100.00% | 35.73% | 35.77% | 35.77% | 907 ms | ↓ 0.81x | 2 | 6d 14h | 9d ago | 4m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3031 ms | → 1.00x | 0 | — | — | 4m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 89.70% | 89.84% | 89.84% | 2848 ms | ↑ 1.09x | 1 | 12h 30m | 9d ago | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.43% | 98.47% | 98.47% | 719 ms | → 0.97x | 16 | 2m | 10d ago | 6m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.73% | 99.75% | 99.75% | 1775 ms | ↑ 1.90x | 8 | 1m | 9d ago | 4m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 96.15% | 96.17% | 96.17% | 1701 ms | → 1.02x | 80 | 7m | 9d ago | 4m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 16.85% | 16.14% | 16.14% | 870 ms | → 0.99x | 1 | 22d 2h | 30d ago | 13m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.75% | 99.73% | 99.73% | 1651 ms | ↑ 1.49x | 7 | 1m | 9d ago | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1146 ms | → 1.00x | 0 | — | — | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.73% | 97.46% | 97.46% | 1859 ms | ↑ 2.90x | 9 | 0s | 9d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 92.27% | 92.30% | 92.30% | 2968 ms | ↑ 1.73x | 71 | 29m | 9d ago | 4m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.86% | 99.91% | 99.91% | 2050 ms | ↑ 2.23x | 4 | 0s | 11d ago | 13m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.88% | 99.94% | 99.94% | 1011 ms | ↓ 0.78x | 1 | 0s | 11d ago | 4m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2884 ms | → 1.00x | 0 | — | — | 4m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 93.12% | 93.17% | 93.17% | 2374 ms | ↑ 1.46x | 1 | 1d 1h | 20d ago | 4m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.84% | 99.93% | 99.93% | 630 ms | ↑ 1.75x | 5 | 0s | 13d ago | 14m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 92.73% | 92.78% | 92.78% | 1261 ms | ↓ 0.76x | 4 | 5h 15m | 11d ago | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.67% | 99.71% | 99.71% | 1056 ms | → 1.00x | 8 | 4m | 9d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.95% | 99.91% | 99.91% | 613 ms | ↓ 0.75x | 1 | 0s | 11d ago | 13m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.59% | 99.71% | 99.71% | 873 ms | ↓ 0.76x | 7 | 10m | 11d ago | 13m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 96.61% | 96.66% | 96.66% | 1691 ms | ↑ 1.85x | 2 | 6h 15m | 10d ago | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.81% | 99.81% | 365 ms | ↓ 0.91x | 2 | 0s | 12d ago | 7m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.70% | 98.97% | 98.97% | 1511 ms | ↑ 1.68x | 7 | 4m | 8d ago | 15m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.95% | 99.99% | 99.99% | 1606 ms | ↑ 1.88x | 1 | 0s | 17d ago | 14m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.82% | 94.54% | 91.24% | 91.24% | 1660 ms | ↓ 0.81x | 117 | 7m | 3d ago | 15m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.82% | 97.40% | 97.60% | 97.60% | 3546 ms | ↑ 1.69x | 91 | 26s | 2d ago | 15m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.95% | 99.70% | 99.70% | 1924 ms | ↑ 1.54x | 1 | 0s | 2d ago | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.57% | 98.89% | 98.89% | 2689 ms | ↑ 1.19x | 14 | 43s | 2d ago | 15m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.82% | 99.08% | 99.68% | 99.68% | 600 ms | ↓ 0.77x | 12 | 18m | 7d ago | 15m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.82% | 99.78% | 99.88% | 99.88% | 1575 ms | ↑ 1.49x | 7 | 0s | 2d ago | 14m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.78% | 99.72% | 99.72% | 1697 ms | → 0.96x | 7 | 0s | 2d ago | 15m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.82% | 99.73% | 99.62% | 99.62% | 1515 ms | ↑ 1.25x | 9 | 0s | 7d ago | 14m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.82% | 16.91% | 3.75% | 3.75% | 1468 ms | → 0.99x | 2 | 11d 1h | 2d ago | 14m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.65% | 99.68% | 99.68% | 2152 ms | ↑ 1.42x | 11 | 0s | 2d ago | 15m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.82% | 98.84% | 98.93% | 98.93% | 3026 ms | ↑ 1.10x | 10 | 1m | 2d ago | 14m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.82% | 99.65% | 99.84% | 99.84% | 2167 ms | ↑ 2.65x | 6 | 10m | 6d ago | 13m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.82% | 99.95% | 99.94% | 99.94% | 1386 ms | ↑ 1.14x | 1 | 0s | 6d ago | 12m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.82% | 73.14% | 63.32% | 63.32% | 4082 ms | ↓ 0.68x | 624 | 6m | 5d ago | 11m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.78% | 99.86% | 99.86% | 1024 ms | ↓ 0.86x | 7 | 0s | 14h ago | 11m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.82% | 98.21% | 96.60% | 96.60% | 1270 ms | ↓ 0.33x | 59 | 1m | 3d ago | 11m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.82% | 99.89% | 99.72% | 99.72% | 2991 ms | ↑ 2.23x | 3 | 0s | 4d ago | 10m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.82% | 97.96% | 99.53% | 99.53% | 2105 ms | ↑ 2.31x | 62 | 2m | 4d ago | 10m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.81% | 27.42% | 6.03% | 6.03% | 2160 ms | ↑ 1.16x | 3 | 6d 9h | 4d ago | 7m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.81% | 99.56% | 56.81% | 56.81% | 1172 ms | ↓ 0.86x | 13 | 2m | 5d ago | 6m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.81% | 99.73% | 54.23% | 54.23% | 1128 ms | → 0.97x | 7 | 3m | 6d ago | 6m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.81% | 25.44% | 23.37% | 23.37% | 2260 ms | → 0.96x | 15 | 1d 8h | 5d ago | 6m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.81% | 98.39% | 59.14% | 59.14% | 1310 ms | ↑ 2.33x | 39 | 5m | 2d ago | 6m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.81% | 16.45% | 29.88% | 29.88% | 2499 ms | → 1.02x | 2 | 11d 1h | 1d ago | 5m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.81% | 96.66% | 96.48% | 96.48% | 1697 ms | ↑ 1.89x | 29 | 32m | 4d ago | 5m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.81% | 97.92% | 96.41% | 96.41% | 3140 ms | ↑ 2.11x | 65 | 2m | 7d ago | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.81% | 99.34% | 77.10% | 77.10% | 2568 ms | ↑ 2.85x | 18 | 3m | 2d ago | 6m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 99.81% | 99.10% | 73.41% | 73.41% | 2455 ms | ↑ 1.27x | 18 | 15m | 2d ago | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.81% | 99.64% | 75.62% | 75.62% | 2311 ms | ↑ 3.19x | 11 | 54s | 4d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.81% | 67.70% | 62.53% | 62.53% | 1730 ms | ↑ 1.44x | 16 | 12h 26m | 4d ago | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.81% | 99.81% | 86.41% | 86.41% | 719 ms | ↓ 0.52x | 6 | 0s | 3d ago | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.81% | 99.54% | 73.83% | 73.83% | 2584 ms | ↑ 3.29x | 15 | 38s | 2d ago | 6m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.81% | 98.77% | 98.73% | 98.73% | 426 ms | ↓ 0.64x | 23 | 9m | 3d ago | 5m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.81% | 99.78% | 98.12% | 98.12% | 1535 ms | ↑ 2.90x | 7 | 0s | 5d ago | 5m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.81% | 99.86% | 84.02% | 84.02% | 2520 ms | ↑ 1.40x | 4 | 0s | 2d ago | 6m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.81% | 99.81% | 99.84% | 99.84% | 986 ms | ↓ 0.83x | 5 | 0s | 21h ago | 4m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.81% | 96.92% | 96.96% | 96.96% | 2114 ms | ↑ 1.61x | 61 | 3m | 20h ago | 4m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.81% | 91.26% | 91.33% | 91.33% | 2011 ms | ↑ 1.15x | 8 | 4h 1m | 5d ago | 4m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 99.81% | 89.37% | 89.50% | 89.50% | 1295 ms | ↓ 0.88x | 2 | 6h 30m | 5d ago | 4m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.81% | 97.52% | 97.57% | 97.57% | 1080 ms | ↓ 0.94x | 5 | 1h 26m | 6d ago | 4m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.81% | 90.89% | 90.98% | 90.98% | 1614 ms | ↓ 0.76x | 5 | 3h 19m | 2d ago | 4m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.81% | 95.24% | 95.29% | 95.29% | 1838 ms | ↑ 1.21x | 14 | 59m | 2d ago | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.79% | 99.79% | 99.79% | 99.79% | 2831 ms | → 1.00x | 1 | 0s | 5d ago | 4m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.64% | 99.71% | 99.81% | 99.81% | 376 ms | ↓ 0.78x | 2 | 0s | 2d ago | 15m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.64% | 77.58% | 82.69% | 82.69% | 1311 ms | ↓ 0.51x | 518 | 6m | 2d ago | 15m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.64% | 16.88% | 3.73% | 3.73% | 1729 ms | → 1.01x | 3 | 7d 9h | 2d ago | 15m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.64% | 99.62% | 99.83% | 99.83% | 2538 ms | ↑ 1.81x | 8 | 8m | 4d ago | 13m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.64% | 17.30% | 3.81% | 3.81% | 3021 ms | → 1.02x | 3 | 7d 7h | 17h ago | 10m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.64% | 99.57% | 99.78% | 99.78% | 2449 ms | ↑ 1.63x | 14 | 12s | 5d ago | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.63% | 99.02% | 98.78% | 98.78% | 1583 ms | ↑ 1.75x | 33 | 37s | 1h ago | 7m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.63% | 16.45% | 3.61% | 3.61% | 1178 ms | → 1.02x | 3 | 7d 9h | 4d ago | 7m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.63% | 36.84% | 24.68% | 24.68% | 2196 ms | ↑ 1.50x | 4 | 4d 1h | 3d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.63% | 27.32% | 11.38% | 11.38% | 1485 ms | → 1.00x | 4 | 4d 19h | 2d ago | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.63% | 97.21% | 97.24% | 97.24% | 2980 ms | ↑ 3.00x | 6 | 2h 30m | 14h ago | 4m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.63% | 97.97% | 98.35% | 98.35% | 2316 ms | ↑ 2.57x | 47 | 6m | 4d ago | 5m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.62% | 99.52% | 99.56% | 99.56% | 1806 ms | ↑ 1.49x | 8 | 8m | 23h ago | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.62% | 99.79% | 99.84% | 99.84% | 1284 ms | ↓ 0.93x | 2 | 9m | 1h ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.46% | 99.78% | 99.94% | 99.94% | 3493 ms | ↑ 1.75x | 7 | 0s | 2d ago | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.46% | 75.31% | 16.60% | 16.60% | 3683 ms | ↑ 1.62x | 6 | 1d 1h | 3d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.45% | 95.13% | 97.51% | 97.51% | 2965 ms | ↑ 1.24x | 21 | 1h 14m | 23h ago | 10m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.45% | 17.26% | 3.81% | 3.81% | 2318 ms | → 1.04x | 4 | 5d 11h | 4d ago | 10m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.45% | 98.89% | 98.93% | 98.93% | 1510 ms | ↑ 1.17x | 11 | 26m | 1d ago | 10m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.44% | 99.86% | 63.77% | 63.77% | 895 ms | ↓ 0.65x | 3 | 7m | 18h ago | 6m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.44% | 99.73% | 43.08% | 43.08% | 1029 ms | ↓ 0.81x | 8 | 2m | 5d ago | 7m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.44% | 99.15% | 98.19% | 98.19% | 3046 ms | ↑ 2.52x | 28 | 44s | 17h ago | 5m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.44% | 99.78% | 98.71% | 98.71% | 778 ms | ↑ 1.46x | 6 | 2m | 1d ago | 5m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.44% | 96.78% | 96.81% | 96.81% | 3163 ms | ↑ 1.61x | 26 | 30m | 14h ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.44% | 99.73% | 99.76% | 99.76% | 2221 ms | ↑ 2.20x | 7 | 6m | 5d ago | 5m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.28% | 99.86% | 99.95% | 99.95% | 2152 ms | ↑ 1.82x | 4 | 0s | 2d ago | 15m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.28% | 45.67% | 54.87% | 54.87% | 2928 ms | ↓ 0.79x | 570 | 27m | 2d ago | 15m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.28% | 98.45% | 98.55% | 98.55% | 2308 ms | ↓ 0.86x | 51 | 59s | 1d ago | 13m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.27% | 26.42% | 5.82% | 5.82% | 2297 ms | ↓ 0.77x | 37 | 12h 28m | 1d ago | 10m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.27% | 98.86% | 99.10% | 99.10% | 3102 ms | ↑ 2.58x | 36 | 2m | 6d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.25% | 99.21% | 89.14% | 89.14% | 2912 ms | → 1.04x | 28 | 0s | 1d ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.25% | 99.70% | 99.73% | 99.73% | 2568 ms | ↑ 2.34x | 10 | 0s | 3d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.25% | 99.84% | 86.12% | 86.12% | 2328 ms | ↑ 2.40x | 5 | 0s | 2h ago | 5m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.25% | 46.26% | 46.29% | 46.29% | 1771 ms | ↓ 0.85x | 35 | 7h 8m | 1h ago | 4m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.10% | 99.11% | 99.26% | 99.26% | 2207 ms | ↓ 0.87x | 31 | 19s | 2d ago | 15m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.10% | 71.93% | 82.71% | 82.71% | 1490 ms | ↓ 0.20x | 526 | 10m | 16h ago | 14m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.07% | 99.15% | 85.22% | 85.22% | 902 ms | ↑ 1.33x | 30 | 0s | 5d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.06% | 88.44% | 88.47% | 88.47% | 3591 ms | ↑ 2.11x | 112 | 25m | 14h ago | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.06% | 98.08% | 98.11% | 98.11% | 1304 ms | ↑ 1.47x | 45 | 5m | 14h ago | 4m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (62)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.91% | 98.56% | 99.17% | 99.17% | 3095 ms | ↑ 1.09x | 24 | 12m | 3h ago | 10m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.88% | 79.17% | 83.95% | 83.95% | 4406 ms | ↓ 0.83x | 517 | 5m | 12h ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.88% | 96.15% | 96.18% | 96.18% | 3345 ms | ↑ 3.33x | 34 | 27m | 14h ago | 4m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.88% | 98.92% | 98.95% | 98.95% | 174 ms | ↓ 0.21x | 32 | 2m | 14h ago | 4m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 98.88% | 27.17% | 22.91% | 22.91% | 2263 ms | ↑ 1.53x | 7 | 2d 18h | 1h ago | 5m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 98.87% | 76.02% | 76.10% | 76.10% | 2614 ms | ↓ 0.94x | 8 | 6h 41m | 8h ago | 4m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.75% | 77.71% | 83.25% | 83.25% | 4329 ms | ↓ 0.92x | 525 | 6m | 3d ago | 16m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.75% | 97.89% | 97.98% | 97.98% | 4124 ms | → 1.04x | 21 | 0s | 12h ago | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 98.75% | 99.57% | 99.71% | 99.71% | 472 ms | ↓ 0.51x | 13 | 2m | 3d ago | 15m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 98.75% | 99.73% | 90.41% | 90.41% | 912 ms | ↑ 1.45x | 4 | 25m | 4d ago | 14m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.69% | 98.99% | 88.06% | 88.06% | 1302 ms | ↓ 0.54x | 29 | 2m | 16h ago | 5m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.56% | 79.74% | 83.50% | 83.50% | 4195 ms | ↓ 0.85x | 527 | 4m | 13h ago | 13m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.51% | 98.20% | 45.20% | 45.20% | 941 ms | ↑ 1.19x | 49 | 4m | 6d ago | 7m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.51% | 77.24% | 55.42% | 55.42% | 4481 ms | → 0.96x | 537 | 6m | 15h ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.50% | 29.55% | 29.58% | 29.58% | 856 ms | ↓ 0.65x | 11 | 1d 13h | 14h ago | 4m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.39% | 98.65% | 98.76% | 98.76% | 3598 ms | ↓ 0.91x | 34 | 6m | 16h ago | 14m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.21% | 99.30% | 99.35% | 99.35% | 4208 ms | ↑ 2.12x | 10 | 2m | 3d ago | 16m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.13% | 82.04% | 85.14% | 85.14% | 4404 ms | ↑ 1.05x | 389 | 7m | 3d ago | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.13% | 78.57% | 79.17% | 79.17% | 4757 ms | ↑ 1.19x | 518 | 5m | 14h ago | 5m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.94% | 97.14% | 97.17% | 97.17% | 1773 ms | ↓ 0.82x | 73 | 4m | 14h ago | 4m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.76% | 78.74% | 75.90% | 75.90% | 4802 ms | → 0.97x | 529 | 5m | 14h ago | 5m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.67% | 98.92% | 99.65% | 99.65% | 4284 ms | ↑ 1.37x | 38 | 32s | 12h ago | 15m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 97.67% | 99.43% | 99.87% | 99.87% | 4606 ms | ↑ 4.00x | 20 | 0s | 5h ago | 15m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.67% | 97.54% | 99.43% | 99.43% | 4258 ms | ↑ 2.28x | 77 | 2m | 12h ago | 15m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 97.58% | 63.81% | 50.50% | 50.50% | 665 ms | ↓ 0.36x | 10 | 23h 42m | 2d ago | 6m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.39% | 90.46% | 64.89% | 64.89% | 1747 ms | ↑ 1.12x | 41 | 1h 18m | 1d ago | 6m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 97.31% | 99.08% | 96.14% | 96.14% | 2470 ms | ↑ 1.40x | 29 | 2m | 5d ago | 15m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.31% | 99.57% | 99.88% | 99.88% | 1453 ms | ↑ 1.32x | 2 | 2h 10m | 2d ago | 15m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.19% | 74.51% | 74.55% | 74.55% | 4526 ms | ↓ 0.87x | 363 | 10m | 16h ago | 4m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.09% | 16.23% | 3.57% | 3.57% | 3552 ms | → 1.02x | 19 | 1d 4h | 5h ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 96.99% | 97.56% | 97.70% | 97.70% | 1212 ms | ↓ 0.80x | 2 | 2h 29m | 4d ago | 4m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 96.95% | 99.40% | 99.71% | 99.71% | 2594 ms | ↑ 2.22x | 6 | 50m | 2d ago | 15m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 96.93% | 16.37% | 3.61% | 3.61% | 889 ms | → 0.96x | 17 | 1d 7h | 18h ago | 12m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.62% | 87.72% | 87.85% | 87.85% | 2243 ms | → 1.02x | 18 | 43m | 8h ago | 4m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.56% | 78.44% | 70.14% | 70.14% | 4508 ms | ↓ 0.92x | 550 | 5m | 13h ago | 11m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 96.38% | 96.38% | 96.38% | 96.38% | 2290 ms | → 1.00x | 1 | 3h 45m | 2d ago | 4m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 95.88% | 76.56% | 76.59% | 76.59% | 2130 ms | ↓ 0.60x | 491 | 8m | 3d ago | 4m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.15% | 96.31% | 94.69% | 94.69% | 3092 ms | ↑ 1.61x | 91 | 5m | 1d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.94% | 94.49% | 92.73% | 92.73% | 2696 ms | ↑ 2.33x | 93 | 14m | 2h ago | 5m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 93.73% | 94.65% | 98.60% | 98.60% | 4067 ms | ↑ 1.35x | 142 | 5m | 13h ago | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 93.45% | 74.36% | 74.36% | 74.36% | 4562 ms | ↓ 0.81x | 597 | 7m | 8h ago | 5m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 93.12% | 18.02% | 4.63% | 4.63% | 4382 ms | ↓ 0.85x | 110 | 4h 34m | 5h ago | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.24% | 54.79% | 46.33% | 46.33% | 1255 ms | ↑ 1.29x | 15 | 18h 26m | 1d ago | 12m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 91.06% | 64.36% | 64.36% | 64.36% | 3091 ms | ↓ 0.74x | 272 | 13m | 18h ago | 16m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 91.04% | 91.04% | 91.04% | 91.04% | 2276 ms | → 1.00x | 1 | 13h 57m | 4d ago | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.70% | 19.46% | 19.46% | 19.46% | 2887 ms | → 0.98x | 52 | 7h 26m | 14h ago | 4m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 88.35% | 96.32% | 98.82% | 98.82% | 4219 ms | ↑ 1.53x | 82 | 8m | 2h ago | 15m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 87.59% | 36.81% | 36.86% | 36.86% | 3869 ms | → 1.01x | 51 | 5h 10m | 5d ago | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 85.82% | 97.87% | 89.94% | 89.94% | 507 ms | ↓ 0.75x | 2 | 6h 55m | 2d ago | 5m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 85.71% | 71.89% | 15.85% | 15.85% | 4181 ms | ↑ 3.45x | 108 | 1h 28m | 31m ago | 11m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 85.45% | 87.42% | 75.47% | 75.47% | 1714 ms | ↓ 0.73x | 240 | 11m | 2h ago | 10m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 79.85% | 12.83% | 5.79% | 5.79% | 4457 ms | → 0.97x | 89 | 6h 9m | 1h ago | 6m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 77.98% | 11.72% | 3.44% | 3.44% | 4009 ms | → 1.00x | 5 | 4d 23h | 15h ago | 12m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 77.60% | 24.05% | 77.05% | 77.05% | 701 ms | ↑ 1.45x | 4 | 5d 8h | 3d ago | 15m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 76.16% | 11.50% | 7.99% | 7.99% | 2590 ms | → 1.00x | 2 | 12d 10h | 5d ago | 15m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 71.11% | 69.06% | 69.10% | 69.10% | 524 ms | ↓ 0.48x | 55 | 2h 31m | 2d ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 70.60% | 60.39% | 62.03% | 62.03% | 2575 ms | ↑ 1.50x | 6 | 2d 3h | 4d ago | 5m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 62.87% | 12.61% | 5.36% | 5.36% | 3603 ms | ↓ 0.71x | 172 | 3h 10m | 2h ago | 6m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 61.41% | 91.18% | 95.94% | 95.94% | 2520 ms | ↑ 3.31x | 6 | 15h 37m | 3d ago | 7m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 58.24% | 92.66% | 91.23% | 91.23% | 2404 ms | ↑ 2.88x | 45 | 1h 41m | 9h ago | 5m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 55.66% | 91.43% | 97.99% | 97.99% | 806 ms | → 0.97x | 10 | 10h 42m | 3d ago | 7m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 38.01% | 6.82% | 6.76% | 6.76% | 2312 ms | ↑ 1.08x | 6 | 4d 14h | 2h ago | 4m ago |

</details>

<details open>
<summary><strong>🔴 Down (174)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 96.75% | 89.46% | 47.11% | 47.11% | 2276 ms | ↑ 1.28x | 172 | 13m | 11m ago | 11m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 90.00% | 15.25% | 28.01% | 28.01% | 815 ms | → 1.00x | 3 | 7d 14h | 18h ago | 10m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 87.81% | 15.10% | 3.33% | 3.33% | 2293 ms | → 1.02x | 47 | 11h 26m | 14m ago | 14m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 77.08% | 52.50% | 61.75% | 61.75% | 4773 ms | ↓ 0.90x | 706 | 16m | 11m ago | 11m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 73.12% | 92.62% | 95.78% | 95.78% | 4396 ms | → 0.95x | 174 | 11m | 2h ago | 15m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 63.35% | 64.14% | 64.22% | 64.22% | 1552 ms | → 0.95x | 8 | 11h 5m | 2d ago | 4m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 47.74% | 50.07% | 50.20% | 50.20% | 2988 ms | → 0.98x | 3 | 1d 6h | 3d ago | 4m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 37.27% | 55.11% | 54.77% | 54.77% | 1869 ms | ↑ 1.63x | 8 | 1d 17h | 4d ago | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 36.70% | 89.39% | 89.42% | 89.42% | 1018 ms | ↓ 0.80x | 10 | 9h 42m | 4d ago | 4m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 26.30% | 54.40% | 69.86% | 69.86% | 3684 ms | ↓ 0.54x | 591 | 26m | 6h ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 25.09% | 87.54% | 96.39% | 96.39% | 3461 ms | ↑ 2.31x | 45 | 2h 38m | 5d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 22.56% | 30.69% | 30.83% | 30.83% | 3841 ms | ↑ 1.10x | 2 | 2d 19h | 5d ago | 4m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 17.03% | 15.66% | 15.66% | 15.66% | 1883 ms | → 1.00x | 3 | 2d 21h | 6d ago | 15m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.19% | 0.10% | 0.10% | 0.10% | 2848 ms | → 1.00x | 2 | 5d 10h | 3d ago | 7m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 82.85% | 95.47% | 95.47% | — | — | 7 | 1d 3h | 8d ago | 15m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 16.83% | 79.02% | 79.02% | — | — | 5 | 5d 3h | 26d ago | 10m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 82.16% | 84.96% | 84.96% | — | — | 29 | 6h 40m | 8d ago | 7m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.61% | 6.61% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 9.13% | 14.44% | 14.44% | — | — | 11 | 2d 12h | 8d ago | 16m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 17.44% | 3.91% | 3.91% | — | — | 1 | 25d 13h | 26d ago | 11m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 80.59% | 95.72% | 95.72% | — | — | 80 | 2h 24m | 8d ago | 12m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 42.02% | 42.02% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 1.56% | 30.61% | 30.61% | — | — | 2 | 14d 19h | 29d ago | 6m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 65.52% | 85.94% | 85.94% | — | — | 406 | 34m | 8d ago | 15m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 71.79% | 75.86% | 75.86% | — | — | 346 | 36m | 8d ago | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 83.43% | 36.74% | 36.74% | — | — | 3 | 2d 15h | 8d ago | 6m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 82.95% | 96.23% | 96.23% | — | — | 5 | 1d 14h | 8d ago | 15m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 50.47% | 72.46% | 72.46% | — | — | 242 | 1h 31m | 14d ago | 14m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 21h | 11d ago | 15m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 82.20% | 88.88% | 88.88% | — | — | 32 | 5h 56m | 8d ago | 15m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.50% | 4.50% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 20.97% | 20.97% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 82.47% | 63.97% | 63.97% | — | — | 29 | 6h 35m | 8d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 45.85% | 45.85% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.66% | 4.34% | 4.34% | — | — | 3 | 9d 22h | 8d ago | 6m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 83.48% | 96.36% | 96.36% | — | — | 1 | 7d 22h | 8d ago | 7m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.60% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 8d ago | 10m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 74.36% | 59.87% | 59.87% | — | — | 43 | 5h 32m | 8d ago | 13m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 20.58% | 34.72% | 34.72% | — | — | 2 | 12d 9h | 25d ago | 6m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 10.73% | 2.37% | 2.37% | — | — | 7 | 3d 21h | 8d ago | 12m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 62.99% | 62.99% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 61.53% | 30.49% | 30.49% | — | — | 420 | 37m | 8d ago | 6m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.56% | 15.56% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 81.98% | 34.90% | 34.90% | — | — | 50 | 3h 49m | 8d ago | 7m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.60% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 8d ago | 11m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 66.04% | 66.04% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 8.00% | 8.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 75.96% | 75.96% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 82.64% | 96.17% | 96.17% | — | — | 16 | 11h 52m | 8d ago | 15m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 12.63% | 12.63% | 12.63% | — | — | 5 | 4d 19h | 24d ago | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 62.71% | 91.73% | 91.73% | — | — | 165 | 1h 45m | 8d ago | 10m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 61.35% | 91.30% | 91.30% | — | — | 211 | 1h 22m | 8d ago | 15m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 17h | 24d ago | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 31.53% | 44.12% | 44.12% | — | — | 5 | 4d 9h | 22d ago | 5m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 16.03% | 16.03% | 16.03% | — | — | 5 | 4d 6h | 21d ago | 4m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 61.06% | 61.06% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 32.75% | 85.03% | 85.03% | — | — | 2 | 10d 18h | 22d ago | 14m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 52.43% | 88.50% | 88.50% | — | — | 335 | 1h | 8d ago | 16m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 53.92% | 53.92% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 16m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 49.02% | 49.02% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 4m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 82.96% | 96.18% | 96.18% | — | — | 4 | 1d 23h | 8d ago | 16m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 67.88% | 67.88% | — | — | 3 | 9d 24h | 20d ago | 11m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.57% | 45.12% | 45.12% | — | — | 2 | 14d 22h | 8d ago | 15m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 22h | 11d ago | 14m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 78.86% | 84.00% | 84.00% | — | — | 13 | 16h 42m | 9d ago | 5m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 7m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 52.80% | 38.98% | 38.98% | — | — | 622 | 27m | 8d ago | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 11.27% | 3.05% | 3.05% | — | — | 4 | 6d 18h | 8d ago | 6m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 48.17% | 48.17% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 82.19% | 96.08% | 96.08% | — | — | 22 | 8h 46m | 8d ago | 10m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 83.35% | 39.21% | 39.21% | — | — | 3 | 2d 15h | 8d ago | 6m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 82.95% | 96.05% | 96.05% | — | — | 5 | 1d 14h | 8d ago | 15m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 63.10% | 63.15% | 63.15% | — | — | 1 | 7d 22h | 8d ago | 15m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 60.49% | 57.45% | 57.45% | — | — | 7 | 2d 2h | 15d ago | 6m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 77.30% | 93.34% | 93.34% | — | — | 176 | 1h 7m | 8d ago | 15m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.57% | 0.13% | 0.13% | — | — | 18 | 1d 16h | 9d ago | 10m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 17h | 24d ago | 4m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 7m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 61.87% | 91.52% | 91.52% | — | — | 58 | 5h 28m | 13d ago | 10m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 83.51% | 84.32% | 84.32% | — | — | 2 | 3d 23h | 8d ago | 5m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.15% | 4.15% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 50.10% | 50.10% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 61.86% | 89.73% | 89.73% | — | — | 295 | 55m | 8d ago | 15m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 48.59% | 68.42% | 68.42% | — | — | 667 | 27m | 8d ago | 11m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 13m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.83% | 32.83% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 0.00% | 83.06% | 89.34% | 89.34% | — | — | 16 | 11h 52m | 8d ago | 5m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 32.64% | 32.73% | 32.73% | — | — | 24 | 9h 4m | 8d ago | 4m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 17.56% | 18.32% | 18.32% | — | — | 484 | 1h 5m | 8d ago | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.96% | 27.96% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 14m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 82.40% | 86.62% | 86.62% | — | — | 38 | 5h | 8d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.26% | 20.26% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 57.42% | 57.42% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 63.98% | 63.98% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 0.00% | 83.33% | 96.09% | 96.09% | — | — | 5 | 1d 14h | 8d ago | 7m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 83.30% | 96.15% | 96.15% | — | — | 6 | 1d 8h | 8d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 75.74% | 75.78% | 75.78% | — | — | 7 | 1d 3h | 8d ago | 4m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 53.98% | 89.79% | 89.79% | — | — | 1 | 16d 4h | 16d ago | 10m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 29.24% | 6.43% | 6.43% | — | — | 3 | 7d 6h | 8d ago | 7m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 23h | 13d ago | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 14m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 83.01% | 96.25% | 96.25% | — | — | 2 | 3d 23h | 8d ago | 14m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 81.31% | 95.00% | 95.00% | — | — | 52 | 3h 42m | 8d ago | 14m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 51.27% | 74.11% | 74.11% | — | — | 623 | 27m | 8d ago | 16m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 47.03% | 87.01% | 87.01% | — | — | 19 | 22h 24m | 18d ago | 15m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 81.44% | 94.84% | 94.84% | — | — | 57 | 3h 20m | 8d ago | 15m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.95% | 22.95% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 83.27% | 40.00% | 40.00% | — | — | 9 | 21h 5m | 8d ago | 7m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.53% | 79.19% | 79.19% | — | — | 2 | 13d 18h | 15d ago | 14m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 22.41% | 33.89% | 33.89% | — | — | 104 | 5h 18m | 12d ago | 5m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 11.19% | 10.15% | 10.15% | — | — | 1 | 27d 4h | 27d ago | 5m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 69.72% | 76.22% | 76.22% | — | — | 370 | 34m | 8d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 5.17% | 78.45% | 78.45% | — | — | 1 | 28d 16h | 29d ago | 15m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 74.86% | 74.90% | 74.90% | — | — | 3 | 2d 20h | 8d ago | 4m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 17.23% | 20.75% | 20.75% | — | — | 2 | 12d 19h | 26d ago | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 20h | 11d ago | 15m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.83% | 20.83% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 4.51% | 4.65% | 4.65% | — | — | 2 | 4d 5h | 8d ago | 4m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 22.30% | 22.41% | 22.41% | — | — | 2 | 4d 6h | 8d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 57.93% | 57.93% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 82.99% | 96.21% | 96.21% | — | — | 5 | 1d 14h | 8d ago | 13m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 79.65% | 79.96% | 79.96% | — | — | 8 | 1d 3h | 9d ago | 4m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 48.04% | 48.04% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 54.61% | 89.98% | 89.98% | — | — | 2 | 7d 23h | 16d ago | 14m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 78.73% | 93.72% | 93.72% | — | — | 162 | 1h 11m | 8d ago | 9m ago |

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
