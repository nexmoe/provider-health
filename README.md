# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**519 providers** — 296 🟢 operational · 55 🟡 degraded · 168 🔴 down · 0 ⚫ unknown

_Updated 2026-04-30 06:08 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (296)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 91.42% | 91.42% | 1755 ms | → 0.96x | 5 | 0s | 12d ago | 7m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 35.40% | 7.23% | 7.23% | 2651 ms | ↑ 1.25x | 3 | 5d 9h | 12d ago | 9m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.00% | 97.00% | 3890 ms | ↑ 1.69x | 2 | 0s | 12d ago | 16m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4566 ms | → 1.00x | 0 | — | — | 5m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.71% | 98.26% | 98.26% | 1581 ms | ↓ 0.92x | 9 | 0s | 12d ago | 7m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.91% | 98.69% | 98.69% | 902 ms | ↑ 1.96x | 2 | 0s | 12d ago | 8m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 89.50% | 89.54% | 89.54% | 2498 ms | ↑ 1.37x | 16 | 2h 28m | 11d ago | 6m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1992 ms | → 0.97x | 0 | — | — | 5m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.38% | 95.42% | 95.42% | 2442 ms | ↑ 1.59x | 1 | 18h 20m | 23d ago | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 91.06% | 91.06% | 2316 ms | ↑ 1.91x | 1 | 0s | 27d ago | 18m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 92.10% | 92.19% | 92.19% | 2770 ms | ↑ 1.18x | 3 | 5h 3m | 12d ago | 6m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.70% | 99.74% | 99.74% | 2023 ms | ↑ 1.54x | 7 | 0s | 13d ago | 6m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 92.45% | 92.51% | 92.51% | 2076 ms | ↑ 1.31x | 8 | 4h 1m | 8d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.71% | 95.59% | 95.59% | 2559 ms | ↑ 1.93x | 9 | 0s | 12d ago | 7m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.70% | 98.70% | 1126 ms | ↑ 1.27x | 2 | 0s | 13d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 93.14% | 93.18% | 93.18% | 2295 ms | ↑ 1.07x | 76 | 15m | 13d ago | 6m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 94.85% | 94.77% | 94.77% | 1576 ms | → 0.96x | 17 | 1h 33m | 12d ago | 7m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 93.06% | 93.15% | 93.15% | 1426 ms | ↑ 1.49x | 1 | 12h 47m | 13d ago | 6m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2051 ms | → 1.00x | 0 | — | — | 5m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 660 ms | ↓ 0.75x | 0 | — | — | 14m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.51% | 99.71% | 99.71% | 3382 ms | ↑ 1.47x | 13 | 2m | 11d ago | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.64% | 99.15% | 99.15% | 3674 ms | ↑ 2.13x | 62 | 3m | 11d ago | 15m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.71% | 99.77% | 99.77% | 2408 ms | ↑ 2.14x | 7 | 6m | 8d ago | 6m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.20% | 93.86% | 93.86% | 2271 ms | → 0.98x | 108 | 5m | 12d ago | 7m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.41% | 97.87% | 97.87% | 1199 ms | ↑ 1.27x | 78 | 24m | 13d ago | 14m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2839 ms | → 0.98x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.94% | 100.00% | 100.00% | 1376 ms | ↑ 1.14x | 0 | — | — | 6m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 44.74% | 88.34% | 88.34% | 1360 ms | ↑ 1.21x | 4 | 3d 12h | 12d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.74% | 99.44% | 99.44% | 2101 ms | ↑ 1.53x | 8 | 0s | 14d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.86% | 99.83% | 99.83% | 3044 ms | ↑ 1.57x | 4 | 0s | 12d ago | 12m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.91% | 99.95% | 99.95% | 1882 ms | ↑ 1.84x | 2 | 0s | 12d ago | 6m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.79% | 96.55% | 96.55% | 3170 ms | ↑ 1.89x | 65 | 2m | 10d ago | 7m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 91.87% | 91.93% | 91.93% | 2286 ms | ↑ 1.52x | 3 | 11h 20m | 13d ago | 6m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.02% | 97.05% | 97.05% | 1520 ms | ↓ 0.77x | 18 | 42m | 11d ago | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1298 ms | ↑ 1.08x | 0 | — | — | 5m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 98.43% | 97.57% | 97.57% | 1217 ms | ↑ 2.34x | 13 | 31m | 12d ago | 9m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.88% | 95.09% | 95.09% | 2206 ms | ↑ 1.63x | 3 | 0s | 12d ago | 7m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.09% | 45.98% | 45.98% | 821 ms | → 1.04x | 49 | 4m | 9d ago | 8m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 95.01% | 97.04% | 97.04% | 3682 ms | ↑ 1.80x | 4 | 6h 60m | 14d ago | 15m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 88.86% | 42.69% | 42.69% | 508 ms | ↑ 1.23x | 3 | 21h 46m | 14d ago | 8m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1916 ms | → 1.00x | 0 | — | — | 5m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.65% | 99.57% | 99.57% | 2173 ms | ↓ 0.86x | 11 | 0s | 12d ago | 13m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.56% | 57.64% | 57.64% | 1278 ms | ↓ 0.88x | 12 | 2m | 8d ago | 8m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.83% | 97.61% | 97.61% | 3293 ms | ↑ 1.98x | 5 | 0s | 12d ago | 6m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4575 ms | → 1.00x | 0 | — | — | 5m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.71% | 91.35% | 91.35% | 869 ms | → 1.01x | 9 | 0s | 12d ago | 8m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.12% | 97.16% | 97.16% | 1581 ms | ↑ 1.24x | 3 | 4h 10m | 13d ago | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.80% | 99.86% | 99.86% | 652 ms | ↓ 0.85x | 5 | 2m | 12d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.31% | 96.52% | 96.52% | 1820 ms | → 0.97x | 47 | 2m | 12d ago | 6m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.12% | 96.16% | 96.16% | 2268 ms | ↑ 1.95x | 3 | 5h 3m | 15d ago | 6m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.32% | 37.30% | 37.30% | 929 ms | → 1.04x | 47 | 2m | 14d ago | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.88% | 69.00% | 69.00% | 1302 ms | ↑ 1.08x | 3 | 0s | 12d ago | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.23% | 97.23% | 3363 ms | ↑ 2.60x | 2 | 0s | 12d ago | 7m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.74% | 43.84% | 43.84% | 1359 ms | ↓ 0.85x | 7 | 3m | 8d ago | 9m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 35.12% | 35.12% | 1069 ms | ↓ 0.47x | 1 | 0s | 14d ago | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2106 ms | → 1.00x | 0 | — | — | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.65% | 76.22% | 76.22% | 2440 ms | ↑ 2.62x | 10 | 59s | 7d ago | 7m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.52% | 97.69% | 97.69% | 2218 ms | ↑ 2.05x | 24 | 11m | 12d ago | 9m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.71% | 55.00% | 55.00% | 1569 ms | ↑ 1.25x | 7 | 3m | 9d ago | 8m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.56% | 99.00% | 99.00% | 1996 ms | ↑ 1.32x | 14 | 0s | 11d ago | 8m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.53% | 86.53% | 86.53% | 2194 ms | ↑ 1.10x | 4 | 28m | 12d ago | 7m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.77% | 99.48% | 99.48% | 1638 ms | ↓ 0.92x | 7 | 0s | 12d ago | 8m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.17% | 97.56% | 97.56% | 1119 ms | ↓ 0.80x | 3 | 3h 47m | 12d ago | 8m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 35.47% | 17.14% | 17.14% | 1074 ms | ↑ 1.10x | 2 | 8d 1h | 12d ago | 7m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.65% | 97.84% | 97.84% | 4624 ms | ↑ 1.37x | 73 | 1m | 11d ago | 17m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 1194 ms | ↑ 1.08x | 1 | 0s | 9d ago | 14m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.16% | 61.96% | 61.96% | 3422 ms | ↑ 2.19x | 8 | 25m | 12d ago | 7m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 77.84% | 77.91% | 77.91% | 254 ms | ↓ 0.56x | 10 | 7h 2m | 11d ago | 6m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.08% | 99.68% | 99.68% | 2102 ms | ↓ 0.95x | 10 | 22m | 10d ago | 17m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.68% | 99.58% | 99.58% | 2141 ms | ↑ 1.33x | 42 | 43s | 12d ago | 16m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 63.34% | 63.39% | 63.39% | 1936 ms | ↑ 1.13x | 2 | 3d 2h | 15d ago | 6m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2142 ms | → 1.00x | 0 | — | — | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 2204 ms | ↑ 2.42x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.68% | 98.86% | 98.86% | 783 ms | → 0.98x | 3 | 23m | 28d ago | 9m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 98.60% | 98.21% | 98.21% | 1623 ms | ↑ 1.08x | 12 | 29m | 12d ago | 7m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 93.78% | 93.83% | 93.83% | 1508 ms | ↓ 0.48x | 26 | 42m | 13d ago | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1795 ms | → 1.00x | 0 | — | — | 5m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2043 ms | → 1.00x | 0 | — | — | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.68% | 98.09% | 98.09% | 737 ms | ↑ 1.86x | 7 | 9m | 11d ago | 7m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 24.05% | 4.92% | 4.92% | 2704 ms | → 1.01x | 1 | 19d 2h | 30d ago | 12m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 92.95% | 91.77% | 91.77% | 2626 ms | ↑ 1.17x | 5 | 7h 54m | 12d ago | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 35.45% | 8.05% | 8.05% | 1192 ms | ↑ 1.48x | 1 | 16d 3h | 30d ago | 8m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 1072 ms | ↑ 1.57x | 1 | 0s | 27d ago | 18m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 687 ms | ↓ 0.79x | 1 | 0s | 17d ago | 17m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1042 ms | ↑ 1.42x | 1 | 0s | 23d ago | 16m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 92.51% | 92.61% | 92.61% | 1559 ms | ↓ 0.85x | 1 | 13h 10m | 12d ago | 6m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 35.33% | 20.23% | 20.23% | 1078 ms | ↓ 0.91x | 3 | 5d 9h | 12d ago | 7m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.63% | 97.30% | 97.30% | 1348 ms | ↑ 1.10x | 11 | 32m | 12d ago | 7m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 23.82% | 4.97% | 4.97% | 1032 ms | → 0.97x | 2 | 9d 13h | 25d ago | 9m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.68% | 99.76% | 99.76% | 2359 ms | → 1.03x | 3 | 0s | 12d ago | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.00% | 98.50% | 98.50% | 4193 ms | ↑ 1.30x | 34 | 0s | 12d ago | 18m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 1775 ms | ↓ 0.88x | 1 | 0s | 19d ago | 16m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.59% | 98.35% | 98.35% | 1457 ms | ↑ 1.17x | 10 | 3m | 12d ago | 7m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 24.13% | 18.96% | 18.96% | 1384 ms | → 1.01x | 1 | 19d 2h | 30d ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.77% | 97.82% | 97.82% | 1160 ms | ↓ 0.86x | 5 | 1h 26m | 9d ago | 6m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.54% | 99.14% | 99.14% | 1593 ms | ↑ 1.75x | 14 | 43s | 12d ago | 16m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.05% | 99.61% | 99.61% | 1687 ms | → 0.98x | 4 | 1h 8m | 12d ago | 13m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.52% | 99.25% | 99.25% | 2202 ms | ↑ 1.40x | 82 | 5m | 13d ago | 9m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 24.23% | 31.45% | 31.45% | 691 ms | ↓ 0.94x | 1 | 19d 2h | 30d ago | 17m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.36% | 97.72% | 97.72% | 2137 ms | ↑ 1.39x | 20 | 30s | 12d ago | 7m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.91% | 99.94% | 99.94% | 1501 ms | → 0.96x | 2 | 0s | 16d ago | 16m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.71% | 99.78% | 99.78% | 1013 ms | ↓ 0.85x | 8 | 1m | 12d ago | 7m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.88% | 99.84% | 99.84% | 1773 ms | ↑ 1.13x | 3 | 0s | 12d ago | 13m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.85% | 99.84% | 99.84% | 2341 ms | ↑ 1.25x | 3 | 3m | 11d ago | 8m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.78% | 98.86% | 98.86% | 1471 ms | ↑ 1.06x | 3 | 37m | 12d ago | 6m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.20% | 99.56% | 99.56% | 999 ms | ↓ 0.82x | 23 | 2m | 15d ago | 17m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 52.51% | 52.51% | 1301 ms | ↓ 0.78x | 4 | 0s | 12d ago | 8m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 35.42% | 7.34% | 7.34% | 714 ms | ↓ 0.89x | 2 | 8d 2h | 11d ago | 9m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.91% | 99.95% | 99.95% | 1846 ms | ↑ 1.79x | 1 | 0s | 16d ago | 6m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3149 ms | → 0.96x | 0 | — | — | 6m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.57% | 87.32% | 87.32% | 2375 ms | ↑ 2.25x | 13 | 46s | 12d ago | 16m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 35.08% | 7.17% | 7.17% | 2238 ms | ↓ 0.87x | 12 | 1d 8h | 12d ago | 9m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.48% | 98.51% | 98.51% | 1966 ms | → 0.99x | 17 | 0s | 12d ago | 7m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 24.21% | 76.72% | 76.72% | 2458 ms | → 1.00x | 1 | 19d 2h | 30d ago | 17m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.91% | 99.91% | 99.91% | 1670 ms | ↑ 1.44x | 2 | 0s | 12d ago | 16m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1656 ms | ↑ 1.09x | 2 | 0s | 10d ago | 17m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.71% | 99.63% | 99.63% | 1320 ms | ↑ 1.11x | 9 | 0s | 10d ago | 16m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 23.79% | 14.56% | 14.56% | 206 ms | → 1.01x | 1 | 19d 2h | 30d ago | 7m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.11% | 99.53% | 99.53% | 1380 ms | → 1.03x | 5 | 50m | 17d ago | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2267 ms | → 1.00x | 0 | — | — | 5m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.88% | 99.94% | 99.94% | 1401 ms | ↑ 1.30x | 1 | 0s | 10d ago | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.51% | 98.87% | 98.87% | 2595 ms | ↑ 1.16x | 15 | 41s | 12d ago | 16m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.69% | 96.73% | 96.73% | 1990 ms | ↑ 1.21x | 5 | 2h 40m | 13d ago | 6m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.22% | 37.16% | 37.16% | 1787 ms | → 0.96x | 14 | 9m | 12d ago | 15m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.16% | 96.19% | 96.19% | 1529 ms | → 0.98x | 9 | 1h 47m | 12d ago | 6m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 92.84% | 92.88% | 92.88% | 1689 ms | ↑ 1.33x | 54 | 25m | 11d ago | 6m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.85% | 61.43% | 61.43% | 1406 ms | ↑ 2.21x | 4 | 0s | 12d ago | 8m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.19% | 98.37% | 98.37% | 2004 ms | → 0.99x | 26 | 23s | 13d ago | 15m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.77% | 99.76% | 99.76% | 2737 ms | ↑ 1.29x | 6 | 2m | 12d ago | 16m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.66% | 99.66% | 1994 ms | ↑ 1.40x | 3 | 3m | 13d ago | 17m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.86% | 99.85% | 99.85% | 1566 ms | ↓ 0.54x | 4 | 0s | 12d ago | 9m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 35.20% | 25.07% | 25.07% | 821 ms | ↓ 0.69x | 6 | 2d 17h | 12d ago | 7m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.85% | 99.08% | 99.08% | 2226 ms | ↑ 1.46x | 4 | 0s | 12d ago | 8m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 59.38% | 59.38% | 1488 ms | ↑ 1.57x | 1 | 0s | 12d ago | 8m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.89% | 95.89% | 936 ms | ↑ 1.51x | 2 | 0s | 12d ago | 8m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 99.91% | 52.73% | 52.73% | 3959 ms | ↑ 2.08x | 2 | 0s | 15d ago | 15m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.86% | 99.64% | 99.64% | 750 ms | ↓ 0.77x | 4 | 0s | 21d ago | 17m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.74% | 99.72% | 99.72% | 2603 ms | ↑ 1.12x | 8 | 0s | 16d ago | 17m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 96.94% | 99.35% | 99.35% | 2005 ms | ↑ 1.10x | 79 | 3m | 20d ago | 15m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 48.90% | 48.90% | 1328 ms | ↑ 2.71x | 2 | 0s | 12d ago | 8m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 97.91% | 97.91% | 1880 ms | ↑ 1.74x | 2 | 0s | 12d ago | 7m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.68% | 97.39% | 97.39% | 2286 ms | ↑ 2.65x | 9 | 1m | 12d ago | 6m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 49.39% | 20.73% | 20.73% | 2874 ms | ↑ 1.51x | 10 | 1d 5h | 12d ago | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.84% | 99.11% | 99.11% | 3144 ms | ↑ 2.23x | 34 | 3m | 9d ago | 12m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.86% | 99.71% | 99.71% | 2453 ms | ↑ 1.65x | 3 | 3m | 21d ago | 17m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.85% | 99.86% | 99.86% | 2436 ms | ↑ 1.56x | 4 | 0s | 12d ago | 7m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 57.10% | 35.90% | 35.90% | 4597 ms | ↑ 1.48x | 5 | 2d 1h | 11d ago | 7m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.10% | 99.00% | 99.00% | 2088 ms | ↑ 1.29x | 29 | 20s | 12d ago | 7m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.71% | 73.46% | 73.46% | 866 ms | ↑ 1.26x | 7 | 3m | 12d ago | 8m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.91% | 99.92% | 99.92% | 185 ms | ↓ 0.22x | 2 | 0s | 24d ago | 17m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.57% | 99.91% | 99.91% | 2365 ms | ↑ 1.51x | 11 | 2m | 12d ago | 16m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.83% | 99.94% | 99.94% | 2407 ms | ↑ 2.53x | 4 | 42s | 12d ago | 13m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.54% | 99.46% | 99.46% | 2898 ms | ↑ 1.54x | 15 | 0s | 11d ago | 17m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.38% | 73.42% | 73.42% | 2467 ms | ↑ 1.30x | 75 | 25m | 11d ago | 7m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 81.83% | 81.83% | 1427 ms | ↑ 1.21x | 1 | 0s | 12d ago | 7m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.32% | 95.36% | 95.36% | 1288 ms | ↑ 1.29x | 52 | 57s | 12d ago | 8m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.96% | 99.96% | 1698 ms | → 0.99x | 2 | 0s | 12d ago | 16m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.53% | 97.78% | 97.78% | 1654 ms | ↑ 1.24x | 14 | 43s | 12d ago | 7m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.60% | 97.89% | 97.89% | 1953 ms | → 1.02x | 12 | 50s | 12d ago | 16m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 23.79% | 5.95% | 5.95% | 1165 ms | → 1.01x | 1 | 19d 2h | 30d ago | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.85% | 99.91% | 99.91% | 1188 ms | → 0.96x | 4 | 0s | 12d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 23.79% | 5.17% | 5.17% | 773 ms | → 0.97x | 1 | 19d 2h | 30d ago | 9m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 52.26% | 52.26% | 2464 ms | ↑ 2.44x | 2 | 0s | 12d ago | 8m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.97% | 59.87% | 59.87% | 1112 ms | → 1.01x | 31 | 1m | 20d ago | 17m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.65% | 99.70% | 99.70% | 135 ms | ↓ 0.27x | 4 | 3m | 15d ago | 6m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.86% | 98.94% | 98.94% | 2306 ms | ↑ 1.71x | 4 | 0s | 12d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 24.22% | 4.97% | 4.97% | 1381 ms | → 0.97x | 1 | 19d 2h | 30d ago | 16m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2934 ms | ↑ 1.16x | 0 | — | — | 5m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 35.44% | 8.14% | 8.14% | 2638 ms | ↑ 1.16x | 2 | 8d 2h | 11d ago | 9m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 89.26% | 92.30% | 92.30% | 4577 ms | ↓ 0.78x | 151 | 15m | 11d ago | 16m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.97% | 99.97% | 2100 ms | ↑ 1.34x | 2 | 0s | 12d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.68% | 99.79% | 99.79% | 932 ms | ↓ 0.64x | 2 | 0s | 11d ago | 5m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 18.46% | 11.61% | 11.61% | 2260 ms | → 1.02x | 2 | 10d 22h | 8d ago | 17m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.45% | 99.51% | 99.51% | 2036 ms | ↑ 1.89x | 11 | 6m | 15d ago | 17m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2958 ms | → 0.96x | 0 | — | — | 6m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.37% | 99.37% | 2283 ms | ↑ 2.50x | 0 | — | — | 16m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 1022 ms | ↑ 1.62x | 1 | 0s | 16d ago | 18m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.51% | 96.57% | 96.57% | 2283 ms | ↑ 1.07x | 1 | 9h 60m | 18d ago | 6m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.02% | 96.19% | 96.19% | 2849 ms | ↑ 1.40x | 29 | 2m | 8d ago | 16m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.48% | 99.54% | 99.54% | 1281 ms | → 0.95x | 2 | 25m | 12d ago | 6m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.87% | 83.20% | 83.20% | 1834 ms | ↑ 2.29x | 30 | 3m | 12d ago | 7m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.53% | 99.59% | 99.59% | 1338 ms | ↑ 1.15x | 7 | 0s | 13d ago | 6m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.02% | 99.77% | 99.77% | 1619 ms | ↑ 1.05x | 33 | 0s | 20d ago | 16m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.79% | 99.41% | 99.41% | 1084 ms | ↓ 0.89x | 60 | 3m | 16d ago | 17m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.83% | 99.69% | 99.69% | 1214 ms | → 0.97x | 4 | 2m | 17d ago | 17m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 91.77% | 59.98% | 59.98% | 648 ms | ↓ 0.92x | 5 | 9h 12m | 12d ago | 7m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.40% | 99.80% | 99.80% | 861 ms | ↓ 0.80x | 20 | 0s | 14d ago | 15m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 98.12% | 81.88% | 81.88% | 1524 ms | ↓ 0.50x | 60 | 39s | 12d ago | 13m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.62% | 98.44% | 98.44% | 2090 ms | ↑ 1.06x | 12 | 0s | 12d ago | 7m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.57% | 90.86% | 90.86% | 3910 ms | ↑ 2.69x | 13 | 46s | 12d ago | 18m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3074 ms | → 0.95x | 0 | — | — | 6m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.39% | 98.50% | 98.50% | 687 ms | ↓ 0.92x | 16 | 2m | 13d ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.74% | 99.77% | 99.77% | 2033 ms | ↑ 1.66x | 7 | 1m | 12d ago | 6m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 95.95% | 96.39% | 96.39% | 1823 ms | → 1.01x | 80 | 7m | 12d ago | 6m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.77% | 98.19% | 98.19% | 1690 ms | ↑ 2.60x | 7 | 0s | 8d ago | 7m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.74% | 99.73% | 99.73% | 1662 ms | ↑ 1.37x | 7 | 1m | 12d ago | 7m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1983 ms | → 0.97x | 0 | — | — | 5m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.83% | 97.55% | 97.55% | 1960 ms | ↑ 2.41x | 5 | 0s | 12d ago | 7m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.95% | 92.73% | 92.73% | 3070 ms | ↑ 1.61x | 70 | 10m | 12d ago | 6m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.88% | 99.91% | 99.91% | 2100 ms | ↑ 2.30x | 3 | 0s | 14d ago | 15m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.89% | 99.95% | 99.95% | 1088 ms | ↓ 0.85x | 1 | 0s | 14d ago | 6m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.63% | 99.85% | 99.85% | 2190 ms | ↑ 2.33x | 6 | 10m | 9d ago | 15m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 3194 ms | ↑ 1.21x | 0 | — | — | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 93.73% | 93.78% | 93.78% | 2370 ms | ↑ 1.34x | 1 | 1d 1h | 23d ago | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.60% | 99.83% | 99.83% | 2582 ms | ↑ 1.69x | 8 | 8m | 7d ago | 15m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.94% | 99.94% | 680 ms | ↑ 1.86x | 5 | 0s | 16d ago | 16m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 93.52% | 93.57% | 93.57% | 1370 ms | ↓ 0.81x | 4 | 5h 15m | 14d ago | 6m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.72% | 99.72% | 1954 ms | ↑ 1.25x | 8 | 4m | 12d ago | 6m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 1587 ms | ↓ 0.89x | 1 | 0s | 14d ago | 15m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.57% | 99.71% | 99.71% | 1402 ms | ↓ 0.84x | 7 | 10m | 14d ago | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 96.90% | 96.94% | 96.94% | 1738 ms | ↑ 1.69x | 2 | 6h 15m | 13d ago | 6m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.57% | 99.79% | 99.79% | 2418 ms | ↑ 1.57x | 13 | 13s | 8d ago | 13m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.91% | 99.81% | 99.81% | 617 ms | → 1.01x | 2 | 0s | 15d ago | 9m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.68% | 98.98% | 98.98% | 1687 ms | ↑ 1.66x | 7 | 4m | 11d ago | 16m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1517 ms | ↑ 1.76x | 1 | 0s | 20d ago | 16m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.82% | 54.56% | 11.22% | 11.22% | 2176 ms | ↑ 1.12x | 3 | 3d 16h | 6h ago | 18m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.82% | 94.31% | 91.35% | 91.35% | 1698 ms | ↓ 0.79x | 114 | 8m | 6d ago | 16m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.82% | 97.73% | 97.63% | 97.63% | 3942 ms | ↑ 1.67x | 75 | 24s | 5d ago | 16m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.94% | 99.71% | 99.71% | 2565 ms | ↑ 1.58x | 1 | 0s | 5d ago | 16m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.57% | 98.91% | 98.91% | 2931 ms | ↑ 1.18x | 13 | 47s | 5d ago | 16m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.82% | 99.37% | 99.71% | 99.71% | 2979 ms | ↑ 2.09x | 6 | 50m | 5d ago | 16m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.82% | 99.77% | 99.89% | 99.89% | 424 ms | ↓ 0.46x | 7 | 0s | 5d ago | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.80% | 99.72% | 99.72% | 1965 ms | → 0.97x | 6 | 0s | 5d ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.66% | 99.69% | 99.69% | 2691 ms | ↑ 1.49x | 11 | 0s | 5d ago | 16m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.82% | 99.04% | 99.12% | 99.12% | 2944 ms | ↑ 1.05x | 10 | 1m | 5d ago | 16m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.82% | 24.09% | 17.20% | 17.20% | 868 ms | → 0.96x | 2 | 9d 13h | 1d ago | 15m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.09% | 96.12% | 96.12% | 3542 ms | ↑ 1.70x | 40 | 33m | 2d ago | 14m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.82% | 77.26% | 63.78% | 63.78% | 4034 ms | ↓ 0.72x | 519 | 5m | 2d ago | 14m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.77% | 99.86% | 99.86% | 1753 ms | ↓ 0.89x | 7 | 0s | 4d ago | 14m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.82% | 99.05% | 96.64% | 96.64% | 1327 ms | ↓ 0.39x | 29 | 1m | 6d ago | 13m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.82% | 24.58% | 5.03% | 5.03% | 2293 ms | → 1.05x | 4 | 4d 17h | 7d ago | 14m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.82% | 97.83% | 99.53% | 99.53% | 2181 ms | ↑ 2.17x | 62 | 2m | 7d ago | 12m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.82% | 99.83% | 51.09% | 51.09% | 1731 ms | ↓ 0.92x | 5 | 0s | 3d ago | 8m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.82% | 35.40% | 7.23% | 7.23% | 2286 ms | ↑ 1.12x | 3 | 5d 9h | 7d ago | 9m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.82% | 23.75% | 4.85% | 4.85% | 1322 ms | ↑ 1.08x | 3 | 6d 9h | 7d ago | 9m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.82% | 23.76% | 32.54% | 32.54% | 2466 ms | → 1.02x | 2 | 9d 13h | 4d ago | 7m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.82% | 97.15% | 97.18% | 97.18% | 2147 ms | ↑ 1.59x | 61 | 3m | 4d ago | 6m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.82% | 97.30% | 97.33% | 97.33% | 1442 ms | → 0.96x | 6 | 2h 6m | 13h ago | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.82% | 99.77% | 75.94% | 75.94% | 2389 ms | ↑ 1.29x | 6 | 2m | 2d ago | 7m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.82% | 97.85% | 98.42% | 98.42% | 2388 ms | ↑ 2.29x | 47 | 6m | 7d ago | 7m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.82% | 99.45% | 77.67% | 77.67% | 2646 ms | ↑ 2.42x | 17 | 35s | 5d ago | 7m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 99.82% | 99.10% | 74.05% | 74.05% | 2725 ms | ↑ 1.24x | 16 | 17m | 5d ago | 8m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.82% | 99.07% | 85.61% | 85.61% | 857 ms | ↑ 1.18x | 31 | 0s | 1d ago | 7m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 99.82% | 57.90% | 63.96% | 63.96% | 2584 ms | ↑ 1.39x | 6 | 2d 3h | 7d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.82% | 65.73% | 63.62% | 63.62% | 1613 ms | ↑ 1.28x | 14 | 14h 13m | 7d ago | 7m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.82% | 99.80% | 86.78% | 86.78% | 740 ms | ↓ 0.62x | 6 | 0s | 6d ago | 7m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.82% | 99.71% | 99.76% | 99.76% | 1391 ms | ↑ 1.12x | 5 | 0s | 2d ago | 6m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.82% | 99.51% | 74.47% | 74.47% | 2675 ms | ↑ 2.65x | 15 | 38s | 5d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 92.38% | 92.45% | 92.45% | 1687 ms | ↓ 0.92x | 5 | 3h 19m | 5d ago | 6m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.82% | 99.48% | 98.78% | 98.78% | 483 ms | ↓ 0.67x | 16 | 38s | 6d ago | 7m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 95.69% | 95.73% | 95.73% | 2259 ms | ↑ 1.57x | 14 | 59m | 5d ago | 6m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.82% | 99.85% | 84.44% | 84.44% | 2867 ms | ↑ 1.79x | 4 | 0s | 5d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.82% | 99.82% | 99.85% | 99.85% | 2014 ms | → 0.98x | 5 | 0s | 4d ago | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.64% | 99.76% | 99.84% | 99.84% | 444 ms | ↓ 0.81x | 2 | 0s | 5d ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.64% | 78.67% | 82.91% | 82.91% | 1266 ms | ↓ 0.53x | 460 | 6m | 5d ago | 17m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.64% | 99.71% | 90.53% | 90.53% | 712 ms | ↑ 1.08x | 4 | 25m | 7d ago | 16m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.64% | 24.17% | 4.98% | 4.98% | 1494 ms | → 0.97x | 3 | 6d 9h | 2d ago | 16m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.64% | 24.15% | 4.96% | 4.96% | 2269 ms | → 1.05x | 3 | 6d 9h | 5d ago | 16m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.64% | 99.86% | 99.72% | 99.72% | 3282 ms | ↑ 2.05x | 4 | 0s | 16h ago | 12m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.64% | 34.32% | 7.03% | 7.03% | 2283 ms | ↓ 0.82x | 37 | 10h 31m | 4d ago | 14m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 99.57% | 98.80% | 98.80% | 1779 ms | ↑ 1.75x | 14 | 0s | 3d ago | 9m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.64% | 93.13% | 93.22% | 93.22% | 1629 ms | → 1.00x | 2 | 6h 20m | 13h ago | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.64% | 99.83% | 97.40% | 97.40% | 2911 ms | ↑ 2.52x | 5 | 0s | 4d ago | 6m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.81% | 99.86% | 99.86% | 1421 ms | → 1.02x | 2 | 9m | 3d ago | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.64% | 99.71% | 99.71% | 99.71% | 2809 ms | → 0.96x | 1 | 21m | 1d ago | 6m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.64% | 99.56% | 99.60% | 99.60% | 1982 ms | ↑ 1.59x | 8 | 8m | 4d ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.64% | 99.68% | 99.75% | 99.75% | 2291 ms | ↑ 1.19x | 10 | 0s | 6d ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.64% | 45.43% | 27.55% | 27.55% | 2289 ms | ↑ 1.58x | 4 | 3d 7h | 6d ago | 7m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.64% | 91.55% | 91.66% | 91.66% | 1527 ms | ↓ 0.93x | 4 | 3h 15m | 20h ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.64% | 92.71% | 92.80% | 92.80% | 2117 ms | ↓ 0.87x | 3 | 4h 17m | 1d ago | 6m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.64% | 35.31% | 13.51% | 13.51% | 1696 ms | ↑ 1.06x | 4 | 4d 1h | 5d ago | 8m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.47% | 99.80% | 99.94% | 99.94% | 3415 ms | ↑ 1.53x | 6 | 0s | 5d ago | 17m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.47% | 99.57% | 99.71% | 99.71% | 462 ms | ↓ 0.53x | 12 | 2m | 6d ago | 17m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.47% | 49.77% | 55.45% | 55.45% | 3000 ms | ↓ 0.90x | 488 | 28m | 5d ago | 17m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.47% | 72.53% | 82.92% | 82.92% | 1493 ms | ↓ 0.22x | 470 | 11m | 3d ago | 16m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.46% | 98.87% | 98.94% | 98.94% | 1506 ms | ↑ 1.28x | 9 | 32m | 4d ago | 13m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.46% | 99.85% | 64.54% | 64.54% | 1188 ms | ↓ 0.69x | 3 | 7m | 4d ago | 8m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.46% | 96.98% | 97.01% | 97.01% | 3260 ms | ↑ 2.08x | 26 | 30m | 4d ago | 6m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.46% | 96.39% | 96.42% | 96.42% | 3187 ms | ↑ 2.76x | 34 | 27m | 4d ago | 6m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.46% | 99.10% | 98.26% | 98.26% | 3350 ms | ↑ 2.37x | 28 | 44s | 4d ago | 7m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.46% | 99.77% | 98.75% | 98.75% | 1126 ms | ↑ 1.51x | 6 | 2m | 4d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.46% | 99.83% | 86.77% | 86.77% | 2700 ms | ↑ 2.42x | 5 | 0s | 3d ago | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.29% | 98.25% | 98.33% | 98.33% | 4083 ms | ↑ 1.06x | 21 | 0s | 4d ago | 17m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.29% | 99.25% | 99.27% | 99.27% | 2376 ms | → 1.01x | 25 | 0s | 5d ago | 17m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.29% | 99.37% | 98.57% | 98.57% | 2388 ms | ↓ 0.92x | 20 | 30s | 4d ago | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.29% | 86.23% | 17.66% | 17.66% | 3594 ms | ↑ 1.49x | 7 | 11h 18m | 3d ago | 14m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.29% | 99.39% | 97.53% | 97.53% | 3072 ms | ↑ 1.22x | 20 | 0s | 12h ago | 12m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.29% | 24.57% | 5.03% | 5.03% | 3204 ms | → 1.04x | 5 | 3d 19h | 15h ago | 12m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.28% | 50.30% | 50.33% | 50.33% | 1754 ms | ↓ 0.86x | 35 | 7h 8m | 3d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.28% | 90.89% | 89.15% | 89.15% | 3440 ms | ↑ 1.88x | 113 | 18m | 3d ago | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.28% | 99.24% | 89.43% | 89.43% | 2854 ms | → 1.01x | 25 | 0s | 1d ago | 7m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.28% | 98.05% | 98.22% | 98.22% | 1582 ms | ↑ 1.50x | 45 | 5m | 4d ago | 6m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.10% | 81.53% | 81.58% | 81.58% | 1190 ms | ↓ 0.93x | 6 | 10h 26m | 2d ago | 6m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.10% | 80.91% | 85.77% | 85.77% | 4436 ms | ↓ 0.92x | 389 | 7m | 6d ago | 7m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.10% | 35.17% | 26.57% | 26.57% | 2666 ms | ↑ 1.56x | 7 | 2d 7h | 3d ago | 7m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.10% | 91.60% | 65.66% | 65.66% | 1940 ms | ↑ 1.12x | 38 | 1h 9m | 14h ago | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (55)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 98.92% | 97.67% | 96.52% | 96.52% | 1744 ms | ↑ 1.79x | 15 | 45m | 1d ago | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.92% | 98.95% | 98.98% | 98.98% | 174 ms | ↓ 0.21x | 31 | 1m | 3d ago | 6m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.75% | 99.28% | 99.18% | 99.18% | 3258 ms | ↑ 1.11x | 23 | 27s | 3d ago | 12m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.58% | 99.74% | 99.93% | 99.93% | 2296 ms | ↑ 2.00x | 8 | 0s | 2d ago | 17m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.58% | 98.39% | 90.79% | 90.79% | 2481 ms | ↓ 0.90x | 46 | 3m | 9h ago | 16m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.57% | 23.53% | 4.82% | 4.82% | 1005 ms | ↓ 0.94x | 20 | 22h 54m | 10h ago | 15m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.56% | 35.05% | 33.82% | 33.82% | 1268 ms | ↓ 0.73x | 12 | 1d 8h | 14h ago | 6m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.40% | 99.40% | 99.87% | 99.87% | 4559 ms | ↑ 3.18x | 20 | 0s | 3d ago | 17m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.38% | 95.36% | 96.18% | 96.18% | 3096 ms | ↑ 1.31x | 73 | 13m | 2d ago | 8m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.38% | 97.35% | 97.30% | 97.30% | 1493 ms | ↓ 0.76x | 70 | 3m | 3d ago | 6m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.38% | 98.87% | 88.33% | 88.33% | 1321 ms | ↓ 0.61x | 31 | 2m | 1d ago | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.22% | 98.85% | 99.66% | 99.66% | 4260 ms | ↑ 1.31x | 38 | 32s | 4d ago | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.22% | 97.39% | 99.44% | 99.44% | 4253 ms | ↑ 2.00x | 77 | 2m | 4d ago | 17m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.20% | 61.51% | 51.55% | 51.55% | 1071 ms | ↓ 0.43x | 11 | 21h 33m | 3d ago | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.20% | 80.01% | 84.12% | 84.12% | 4236 ms | ↓ 0.84x | 456 | 5m | 16h ago | 9m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.04% | 98.42% | 98.74% | 98.74% | 3257 ms | ↓ 0.88x | 39 | 5m | 17h ago | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 98.03% | 90.60% | 95.98% | 95.98% | 2634 ms | ↑ 2.89x | 7 | 13h 23m | 3d ago | 9m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.87% | 98.91% | 98.96% | 98.96% | 4394 ms | ↑ 1.86x | 18 | 2m | 18h ago | 18m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.66% | 90.68% | 90.78% | 90.78% | 2835 ms | → 1.04x | 3 | 5h 24m | 8h ago | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.30% | 79.46% | 79.81% | 79.81% | 4676 ms | ↑ 1.13x | 463 | 5m | 17h ago | 7m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.15% | 80.84% | 83.62% | 83.62% | 3992 ms | ↓ 0.81x | 468 | 5m | 19h ago | 15m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.15% | 99.51% | 99.88% | 99.88% | 1454 ms | ↑ 1.29x | 3 | 1h 27m | 3d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 97.12% | 98.12% | 98.22% | 98.22% | 1413 ms | ↓ 0.87x | 2 | 2h 29m | 7d ago | 6m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 96.97% | 88.72% | 47.76% | 47.76% | 2380 ms | ↑ 1.20x | 175 | 13m | 3d ago | 14m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 96.94% | 97.52% | 97.52% | 97.52% | 2112 ms | ↓ 0.93x | 1 | 3h 45m | 5d ago | 5m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.94% | 76.02% | 76.05% | 76.05% | 4522 ms | ↓ 0.89x | 371 | 10m | 15h ago | 6m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 96.76% | 78.52% | 56.36% | 56.36% | 4431 ms | ↓ 0.94x | 479 | 6m | 15h ago | 7m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 96.27% | 94.29% | 98.61% | 98.61% | 4029 ms | ↑ 1.31x | 143 | 5m | 3d ago | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 96.22% | 79.21% | 77.91% | 77.91% | 2359 ms | ↓ 0.62x | 442 | 7m | 6d ago | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.22% | 89.74% | 89.84% | 89.84% | 2691 ms | → 1.02x | 24 | 33m | 12h ago | 6m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 95.74% | 29.23% | 77.34% | 77.34% | 703 ms | ↑ 1.37x | 5 | 3d 19h | 2d ago | 17m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 95.68% | 42.37% | 42.41% | 42.41% | 4085 ms | → 0.97x | 52 | 5h 4m | 3d ago | 6m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.32% | 96.86% | 94.87% | 94.87% | 3126 ms | ↑ 1.48x | 66 | 7m | 4d ago | 7m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.78% | 79.70% | 76.37% | 76.37% | 4793 ms | ↓ 0.92x | 475 | 5m | 18h ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.24% | 94.18% | 92.90% | 92.90% | 2542 ms | ↑ 1.47x | 91 | 15m | 13h ago | 6m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 93.75% | 22.62% | 4.63% | 4.63% | 3557 ms | → 1.01x | 48 | 9h 33m | 3h ago | 14m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 93.17% | 93.87% | 93.87% | 93.87% | 2888 ms | ↑ 1.21x | 1 | 13h 57m | 7d ago | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.34% | 64.43% | 47.01% | 47.01% | 1377 ms | ↑ 1.31x | 16 | 12h 47m | 2d ago | 14m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 91.37% | 75.90% | 75.11% | 75.11% | 4563 ms | ↓ 0.84x | 543 | 7m | 14h ago | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.84% | 24.49% | 5.83% | 5.83% | 4578 ms | ↓ 0.85x | 135 | 3h 12m | 2h ago | 8m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 89.70% | 95.73% | 98.76% | 98.76% | 4208 ms | ↑ 1.47x | 93 | 8m | 23h ago | 17m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 89.68% | 22.07% | 4.53% | 4.53% | 2291 ms | → 1.02x | 54 | 8h 37m | 12h ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 89.01% | 67.73% | 67.73% | 67.73% | 3197 ms | ↓ 0.76x | 282 | 13m | 4h ago | 18m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 88.39% | 86.37% | 75.73% | 75.73% | 1711 ms | ↓ 0.76x | 248 | 11m | 3d ago | 13m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 85.64% | 96.08% | 59.23% | 59.23% | 1268 ms | ↑ 2.08x | 38 | 44m | 46m ago | 8m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 85.10% | 30.90% | 23.99% | 23.99% | 2259 ms | → 0.97x | 16 | 1d 3h | 2d ago | 8m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 78.96% | 91.82% | 91.35% | 91.35% | 2030 ms | ↑ 2.35x | 47 | 1h 42m | 1d ago | 6m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 76.83% | 52.91% | 61.82% | 61.82% | 4801 ms | ↓ 0.90x | 656 | 17m | 33m ago | 14m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 76.08% | 17.56% | 7.26% | 7.26% | 4461 ms | ↓ 0.90x | 125 | 3h 56m | 1h ago | 7m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 76.02% | 92.23% | 95.69% | 95.69% | 4201 ms | ↓ 0.93x | 160 | 13m | 5h ago | 17m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 75.18% | 13.51% | 11.91% | 11.91% | 2275 ms | → 1.04x | 7 | 3d 12h | 3d ago | 6m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 71.04% | 71.03% | 71.06% | 71.06% | 1406 ms | ↓ 0.86x | 56 | 2h 30m | 1d ago | 6m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 63.49% | 16.60% | 6.48% | 6.48% | 3570 ms | ↓ 0.72x | 223 | 2h 12m | 26m ago | 7m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 37.90% | 28.48% | 85.19% | 85.19% | 1713 ms | ↑ 1.11x | 2 | 10d 19h | 25d ago | 16m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 35.79% | 81.51% | 89.43% | 89.43% | 1177 ms | ↓ 0.29x | 16 | 12h 14m | 11d ago | 7m ago |

</details>

<details open>
<summary><strong>🔴 Down (168)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.46% | 99.42% | 99.42% | 99.42% | 3812 ms | ↑ 1.18x | 3 | 8m | 5m ago | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.38% | 98.69% | 98.69% | 98.69% | 1388 ms | → 1.02x | 1 | 2h 49m | 3h ago | 5m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 97.70% | 79.07% | 83.39% | 83.39% | 4329 ms | ↓ 0.90x | 461 | 6m | 18m ago | 18m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.08% | 79.62% | 70.44% | 70.44% | 4539 ms | ↓ 0.90x | 483 | 5m | 13m ago | 13m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 93.05% | 18.54% | 4.64% | 4.64% | 3744 ms | ↓ 0.93x | 6 | 3d 15h | 2h ago | 14m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.55% | 24.48% | 24.48% | 24.48% | 2962 ms | ↓ 0.95x | 71 | 5h 28m | 6m ago | 6m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 77.52% | 92.11% | 92.16% | 92.16% | 1524 ms | → 1.02x | 4 | 11h 10m | 2d ago | 6m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 64.03% | 33.70% | 33.73% | 33.73% | 1023 ms | ↓ 0.89x | 3 | 5d 8h | 3d ago | 6m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 61.51% | 93.30% | 94.73% | 94.73% | 2525 ms | ↑ 2.35x | 10 | 7h 12m | 3d ago | 7m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 60.07% | 93.49% | 88.29% | 88.29% | 516 ms | ↓ 0.72x | 3 | 20h 40m | 2d ago | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 54.14% | 65.00% | 65.07% | 65.07% | 1435 ms | ↓ 0.79x | 9 | 12h 16m | 14h ago | 6m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 53.39% | 16.46% | 27.70% | 27.70% | 841 ms | ↓ 0.92x | 4 | 5d 16h | 1d ago | 13m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 28.01% | 50.23% | 69.04% | 69.04% | 3569 ms | ↓ 0.54x | 518 | 36m | 8h ago | 18m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 11.15% | 38.84% | 38.94% | 38.94% | 2805 ms | → 1.01x | 3 | 2d 6h | 6d ago | 6m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 1.08% | 46.06% | 51.82% | 51.82% | 1571 ms | ↑ 1.55x | 6 | 2d 19h | 7d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.54% | 83.23% | 84.06% | 84.06% | 840 ms | ↓ 0.76x | 10 | 16h 54m | 7d ago | 6m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.18% | 0.08% | 0.08% | 0.08% | 2848 ms | → 1.00x | 2 | 6d 22h | 6d ago | 9m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 75.55% | 94.24% | 94.24% | — | — | 7 | 1d 13h | 11d ago | 16m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 5.40% | 78.01% | 78.01% | — | — | 4 | 7d 4h | 29d ago | 13m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 74.78% | 83.87% | 83.87% | — | — | 29 | 9h 9m | 11d ago | 9m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.52% | 6.52% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 9.69% | 14.26% | 14.26% | — | — | 11 | 2d 12h | 11d ago | 18m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 6.03% | 3.86% | 3.86% | — | — | 1 | 28d 13h | 29d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 73.15% | 94.50% | 94.50% | — | — | 80 | 3h 18m | 11d ago | 14m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 41.48% | 41.48% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 29.90% | 29.90% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 58.73% | 84.84% | 84.84% | — | — | 364 | 50m | 11d ago | 17m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 65.22% | 73.15% | 73.15% | — | — | 299 | 56m | 11d ago | 7m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 76.12% | 36.06% | 36.06% | — | — | 3 | 3d 15h | 11d ago | 8m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 75.65% | 95.00% | 95.00% | — | — | 5 | 2d 4h | 11d ago | 17m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 43.65% | 71.53% | 71.53% | — | — | 179 | 2h 26m | 17d ago | 16m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 17m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 21h | 14d ago | 17m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 74.87% | 87.74% | 87.74% | — | — | 32 | 8h 11m | 11d ago | 17m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.44% | 4.44% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 20.33% | 20.33% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 75.15% | 62.54% | 62.54% | — | — | 27 | 9h 44m | 11d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 44.65% | 44.65% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.70% | 4.25% | 4.25% | — | — | 3 | 9d 22h | 11d ago | 8m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 76.18% | 95.13% | 95.13% | — | — | 1 | 10d 22h | 11d ago | 9m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.64% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 11d ago | 13m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 67.77% | 59.10% | 59.10% | — | — | 34 | 8h 57m | 11d ago | 15m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 9.34% | 34.06% | 34.06% | — | — | 2 | 13d 21h | 28d ago | 8m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 11.40% | 2.34% | 2.34% | — | — | 7 | 3d 21h | 11d ago | 14m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 62.18% | 62.18% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 55.60% | 29.90% | 29.90% | — | — | 350 | 56m | 11d ago | 8m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 74.59% | 34.40% | 34.40% | — | — | 50 | 5h 15m | 11d ago | 8m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.63% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 11d ago | 14m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 65.19% | 65.19% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 16m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.70% | 7.70% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 74.98% | 74.98% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 75.32% | 94.93% | 94.93% | — | — | 16 | 16h 22m | 11d ago | 17m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 17m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 11.82% | 11.82% | 11.82% | — | — | 5 | 5d 9h | 27d ago | 6m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 54.13% | 90.56% | 90.56% | — | — | 165 | 2h 12m | 11d ago | 9m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 52.73% | 90.13% | 90.13% | — | — | 211 | 1h 43m | 11d ago | 17m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 17h | 27d ago | 6m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 20.99% | 42.09% | 42.09% | — | — | 3 | 8d 7h | 25d ago | 7m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 14.71% | 14.71% | 14.71% | — | — | 5 | 4d 21h | 24d ago | 6m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 60.28% | 60.28% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 17m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 44.44% | 87.36% | 87.36% | — | — | 301 | 1h 21m | 11d ago | 18m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 53.23% | 53.23% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 18m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 48.39% | 48.39% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 75.66% | 94.94% | 94.94% | — | — | 4 | 2d 17h | 11d ago | 18m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 67.02% | 67.02% | — | — | 3 | 9d 24h | 23d ago | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.60% | 44.54% | 44.54% | — | — | 2 | 14d 22h | 11d ago | 17m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 22h | 14d ago | 16m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 71.33% | 80.44% | 80.44% | — | — | 12 | 1d | 12d ago | 7m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 9m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 47.72% | 38.21% | 38.21% | — | — | 538 | 38m | 11d ago | 8m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 11.98% | 3.01% | 3.01% | — | — | 4 | 6d 18h | 11d ago | 8m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 47.56% | 47.56% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 74.83% | 94.85% | 94.85% | — | — | 22 | 12h 2m | 11d ago | 12m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 76.04% | 38.60% | 38.60% | — | — | 3 | 3d 15h | 11d ago | 8m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 75.65% | 94.82% | 94.82% | — | — | 5 | 2d 4h | 11d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 55.92% | 55.97% | 55.97% | — | — | 1 | 10d 22h | 11d ago | 17m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 51.82% | 56.16% | 56.16% | — | — | 4 | 4d 9h | 18d ago | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 70.40% | 92.14% | 92.14% | — | — | 157 | 1h 42m | 11d ago | 17m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.61% | 0.12% | 0.12% | — | — | 18 | 1d 16h | 12d ago | 12m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 17h | 27d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 9m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 53.24% | 90.35% | 90.35% | — | — | 58 | 6h 43m | 16d ago | 12m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 76.19% | 80.34% | 80.34% | — | — | 2 | 5d 11h | 11d ago | 7m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.06% | 4.06% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 57.65% | 88.57% | 88.57% | — | — | 217 | 1h 32m | 11d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 43.69% | 67.55% | 67.55% | — | — | 578 | 38m | 11d ago | 14m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 15m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.41% | 32.41% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 27.50% | 27.57% | 27.57% | — | — | 24 | 12h 4m | 11d ago | 6m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 15.79% | 17.66% | 17.66% | — | — | 408 | 1h 22m | 11d ago | 7m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.60% | 27.60% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 16m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 75.04% | 83.17% | 83.17% | — | — | 37 | 7h 5m | 11d ago | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.00% | 20.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 56.68% | 56.68% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 63.16% | 63.16% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 69.73% | 69.76% | 69.76% | — | — | 7 | 1d 13h | 11d ago | 6m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 31.07% | 6.35% | 6.35% | — | — | 3 | 7d 6h | 11d ago | 9m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 23h | 16d ago | 6m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 16m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 75.72% | 95.02% | 95.02% | — | — | 2 | 5d 11h | 11d ago | 16m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 17m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 73.94% | 93.78% | 93.78% | — | — | 51 | 5h 11m | 11d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 45.56% | 73.16% | 73.16% | — | — | 536 | 39m | 11d ago | 18m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 37.70% | 85.90% | 85.90% | — | — | 15 | 1d 9h | 21d ago | 16m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 74.15% | 93.63% | 93.63% | — | — | 54 | 4h 51m | 11d ago | 16m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.63% | 22.63% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 12.96% | 12.96% | 12.96% | — | — | 3 | 3d 21h | 9d ago | 16m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 75.98% | 39.45% | 39.45% | — | — | 8 | 1d 9h | 11d ago | 9m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 8.45% | 78.18% | 78.18% | — | — | 2 | 13d 23h | 18d ago | 16m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 23.82% | 32.63% | 32.63% | — | — | 104 | 5h 18m | 15d ago | 7m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.88% | 9.88% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 63.19% | 75.24% | 75.24% | — | — | 324 | 52m | 11d ago | 18m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 77.45% | 77.45% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 69.38% | 69.41% | 69.41% | — | — | 3 | 3d 20h | 11d ago | 6m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 5.74% | 19.67% | 19.67% | — | — | 2 | 14d 7h | 29d ago | 6m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 20h | 14d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.57% | 20.57% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 3.46% | 3.56% | 3.56% | — | — | 2 | 5d 17h | 11d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 17.86% | 17.96% | 17.96% | — | — | 2 | 5d 18h | 11d ago | 6m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 23.51% | 23.62% | 23.62% | — | — | 2 | 4d 7h | 8d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 57.19% | 57.19% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 75.71% | 94.98% | 94.98% | — | — | 5 | 2d 4h | 11d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 72.08% | 75.99% | 75.99% | — | — | 8 | 1d 12h | 12d ago | 6m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 80.52% | 95.16% | 95.16% | — | — | 45 | 4h 14m | 8d ago | 12m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 47.42% | 47.42% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 71.32% | 92.53% | 92.53% | — | — | 156 | 1h 41m | 11d ago | 12m ago |

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
