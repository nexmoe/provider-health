# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**520 providers** — 303 🟢 operational · 52 🟡 degraded · 165 🔴 down · 0 ⚫ unknown

_Updated 2026-05-01 06:19 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (303)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.82% | 91.50% | 91.50% | 1746 ms | ↓ 0.91x | 5 | 0s | 13d ago | 14m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.01% | 97.01% | 3828 ms | ↑ 1.58x | 2 | 0s | 13d ago | 24m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.70% | 98.28% | 98.28% | 1763 ms | → 0.98x | 9 | 0s | 13d ago | 14m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.91% | 98.70% | 98.70% | 896 ms | ↑ 1.78x | 2 | 0s | 13d ago | 15m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 89.81% | 89.85% | 89.85% | 2446 ms | ↑ 1.28x | 16 | 2h 28m | 12d ago | 13m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1965 ms | ↓ 0.94x | 0 | — | — | 12m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.51% | 95.55% | 95.55% | 2322 ms | ↑ 1.47x | 1 | 18h 20m | 24d ago | 13m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 91.10% | 91.10% | 2316 ms | ↑ 1.92x | 1 | 0s | 28d ago | 27m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 92.55% | 92.63% | 92.63% | 3012 ms | ↑ 1.22x | 3 | 5h 3m | 13d ago | 13m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.71% | 99.75% | 99.75% | 1909 ms | ↑ 1.49x | 7 | 0s | 14d ago | 13m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 92.78% | 92.84% | 92.84% | 2021 ms | ↑ 1.29x | 8 | 4h 1m | 9d ago | 13m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 94.45% | 94.45% | 94.45% | 2861 ms | ↑ 1.21x | 1 | 13h 57m | 8d ago | 12m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.70% | 95.64% | 95.64% | 2526 ms | ↑ 1.75x | 9 | 0s | 13d ago | 14m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.70% | 98.70% | 1105 ms | ↑ 1.21x | 2 | 0s | 14d ago | 23m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 93.32% | 93.35% | 93.35% | 2249 ms | → 1.04x | 76 | 15m | 14d ago | 13m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 97.06% | 94.85% | 94.85% | 1416 ms | ↓ 0.74x | 16 | 51m | 13d ago | 14m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 80.10% | 78.31% | 78.31% | 2905 ms | ↓ 0.69x | 414 | 7m | 7d ago | 14m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 93.49% | 93.57% | 93.57% | 1442 ms | ↑ 1.58x | 1 | 12h 47m | 14d ago | 13m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2065 ms | → 1.00x | 0 | — | — | 12m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 557 ms | ↓ 0.69x | 0 | — | — | 22m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.56% | 99.71% | 99.71% | 3444 ms | ↑ 1.45x | 11 | 3m | 12d ago | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 97.89% | 98.44% | 98.44% | 2366 ms | ↑ 2.03x | 44 | 6m | 8d ago | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.59% | 99.15% | 99.15% | 3811 ms | ↑ 2.01x | 62 | 3m | 12d ago | 23m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.70% | 99.78% | 99.78% | 2428 ms | ↑ 2.04x | 7 | 6m | 9d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.09% | 93.95% | 93.95% | 2288 ms | → 1.02x | 108 | 5m | 13d ago | 14m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.25% | 97.88% | 97.88% | 1815 ms | ↑ 1.72x | 78 | 24m | 14d ago | 22m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2873 ms | → 0.98x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.94% | 100.00% | 100.00% | 2130 ms | ↑ 1.41x | 0 | — | — | 13m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 43.54% | 88.38% | 88.38% | 1433 ms | ↑ 1.16x | 4 | 3d 12h | 13d ago | 17m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.73% | 99.45% | 99.45% | 1996 ms | ↑ 1.45x | 8 | 0s | 15d ago | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.85% | 99.84% | 99.84% | 3538 ms | ↑ 1.68x | 4 | 0s | 13d ago | 21m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.91% | 99.95% | 99.95% | 2325 ms | ↑ 1.99x | 2 | 0s | 13d ago | 14m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.74% | 96.59% | 96.59% | 3137 ms | ↑ 1.73x | 65 | 2m | 11d ago | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 92.23% | 92.29% | 92.29% | 2254 ms | ↑ 1.52x | 3 | 11h 20m | 14d ago | 13m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.08% | 97.11% | 97.11% | 1854 ms | ↓ 0.85x | 18 | 42m | 12d ago | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1297 ms | ↑ 1.11x | 0 | — | — | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.91% | 95.14% | 95.14% | 1848 ms | ↑ 1.31x | 2 | 0s | 13d ago | 14m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.04% | 46.24% | 46.24% | 809 ms | → 1.03x | 49 | 4m | 10d ago | 16m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 95.50% | 97.05% | 97.05% | 3765 ms | ↑ 1.71x | 3 | 8h 13m | 15d ago | 23m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 88.62% | 42.99% | 42.99% | 693 ms | ↑ 1.39x | 3 | 21h 46m | 15d ago | 16m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1927 ms | → 1.00x | 0 | — | — | 12m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.65% | 99.57% | 99.57% | 2166 ms | ↓ 0.86x | 11 | 0s | 13d ago | 21m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.14% | 96.66% | 96.66% | 1132 ms | ↓ 0.40x | 25 | 1m | 7d ago | 21m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.56% | 57.91% | 57.91% | 1270 ms | ↓ 0.88x | 12 | 2m | 9d ago | 15m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.85% | 97.66% | 97.66% | 3138 ms | ↑ 1.74x | 4 | 0s | 13d ago | 13m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4679 ms | → 1.00x | 0 | — | — | 12m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.73% | 91.39% | 91.39% | 1092 ms | ↑ 1.10x | 8 | 0s | 13d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.20% | 97.23% | 97.23% | 1498 ms | ↑ 1.19x | 3 | 4h 10m | 14d ago | 13m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.79% | 99.86% | 99.86% | 656 ms | → 0.97x | 5 | 2m | 13d ago | 14m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.27% | 96.58% | 96.58% | 2368 ms | ↑ 1.12x | 47 | 2m | 13d ago | 14m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.23% | 96.27% | 96.27% | 2208 ms | ↑ 1.78x | 3 | 5h 3m | 16d ago | 13m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.31% | 37.59% | 37.59% | 861 ms | → 1.01x | 46 | 2m | 15d ago | 16m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.88% | 69.23% | 69.23% | 1567 ms | ↑ 1.12x | 3 | 0s | 13d ago | 15m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.26% | 97.26% | 3362 ms | ↑ 2.64x | 2 | 0s | 13d ago | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.76% | 44.09% | 44.09% | 1659 ms | → 0.97x | 6 | 3m | 9d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 35.40% | 35.40% | 1185 ms | ↓ 0.51x | 1 | 0s | 15d ago | 22m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2134 ms | → 1.00x | 0 | — | — | 12m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.73% | 76.41% | 76.41% | 2422 ms | ↑ 2.27x | 8 | 0s | 8d ago | 15m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.49% | 97.70% | 97.70% | 2216 ms | ↑ 1.86x | 24 | 11m | 13d ago | 16m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.70% | 55.26% | 55.26% | 1766 ms | ↑ 1.40x | 7 | 3m | 10d ago | 16m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.61% | 99.01% | 99.01% | 1907 ms | ↑ 1.21x | 12 | 0s | 12d ago | 15m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.52% | 86.65% | 86.65% | 2352 ms | ↑ 1.11x | 4 | 28m | 13d ago | 14m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.67% | 99.75% | 99.75% | 2214 ms | ↑ 1.16x | 10 | 0s | 7d ago | 14m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.79% | 99.48% | 99.48% | 1425 ms | ↓ 0.85x | 6 | 0s | 13d ago | 15m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.13% | 97.57% | 97.57% | 1368 ms | ↓ 0.88x | 3 | 3h 47m | 13d ago | 15m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 27.23% | 5.44% | 5.44% | 2171 ms | → 1.01x | 4 | 4d 11h | 8d ago | 22m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 38.37% | 17.97% | 17.97% | 1097 ms | ↑ 1.08x | 2 | 7d 13h | 13d ago | 14m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.63% | 97.85% | 97.85% | 4486 ms | ↑ 1.30x | 72 | 1m | 12d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 1013 ms | → 1.03x | 1 | 0s | 10d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.14% | 62.45% | 62.45% | 3421 ms | ↑ 2.02x | 8 | 25m | 13d ago | 14m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 78.82% | 78.88% | 78.88% | 312 ms | ↓ 0.57x | 10 | 7h 2m | 12d ago | 13m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.06% | 99.68% | 99.68% | 2860 ms | ↑ 1.35x | 10 | 22m | 11d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.65% | 99.58% | 99.58% | 2010 ms | ↑ 1.26x | 42 | 43s | 13d ago | 24m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 56.99% | 64.56% | 64.56% | 2546 ms | ↑ 1.29x | 6 | 2d 3h | 8d ago | 14m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 64.51% | 64.56% | 64.56% | 1936 ms | ↑ 1.19x | 2 | 3d 2h | 16d ago | 13m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2147 ms | → 1.00x | 0 | — | — | 12m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 2188 ms | ↑ 2.43x | 0 | — | — | 13m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.67% | 98.87% | 98.87% | 1203 ms | ↑ 1.24x | 3 | 23m | 29d ago | 16m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 98.66% | 98.23% | 98.23% | 1623 ms | ↑ 1.09x | 10 | 33m | 13d ago | 14m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 93.98% | 94.03% | 94.03% | 1467 ms | ↓ 0.48x | 26 | 42m | 14d ago | 13m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1762 ms | → 1.00x | 0 | — | — | 12m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2163 ms | → 1.00x | 0 | — | — | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 65.01% | 63.97% | 63.97% | 1657 ms | ↑ 1.23x | 13 | 15h 19m | 8d ago | 14m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.67% | 98.12% | 98.12% | 745 ms | ↑ 1.78x | 7 | 9m | 12d ago | 14m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 26.68% | 5.33% | 5.33% | 2702 ms | → 1.02x | 1 | 18d 1h | 30d ago | 21m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 92.83% | 91.92% | 91.92% | 3310 ms | ↑ 1.23x | 4 | 9h 52m | 13d ago | 14m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 38.35% | 8.49% | 8.49% | 1181 ms | ↑ 1.45x | 1 | 15d 3h | 30d ago | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 1106 ms | ↑ 1.64x | 1 | 0s | 28d ago | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 687 ms | ↓ 0.79x | 1 | 0s | 18d ago | 26m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 899 ms | ↑ 1.23x | 1 | 0s | 24d ago | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 93.00% | 93.09% | 93.09% | 1673 ms | ↓ 0.89x | 1 | 13h 10m | 13d ago | 13m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 38.24% | 21.17% | 21.17% | 1287 ms | → 0.97x | 3 | 5d 1h | 13d ago | 14m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.60% | 97.32% | 97.32% | 1276 ms | → 1.04x | 11 | 32m | 13d ago | 14m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 26.47% | 5.38% | 5.38% | 1057 ms | → 0.98x | 2 | 9d 1h | 26d ago | 16m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.69% | 99.77% | 99.77% | 2268 ms | → 0.97x | 3 | 0s | 13d ago | 17m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 98.98% | 98.51% | 98.51% | 4279 ms | ↑ 1.29x | 34 | 0s | 13d ago | 27m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 2680 ms | ↑ 1.12x | 1 | 0s | 20d ago | 25m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.58% | 98.37% | 98.37% | 1665 ms | ↑ 1.22x | 10 | 3m | 13d ago | 14m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 26.76% | 19.31% | 19.31% | 1436 ms | → 1.01x | 1 | 18d 1h | 30d ago | 23m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.84% | 97.89% | 97.89% | 1449 ms | ↓ 0.92x | 5 | 1h 26m | 10d ago | 13m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.53% | 99.15% | 99.15% | 1473 ms | ↑ 1.62x | 14 | 43s | 13d ago | 24m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.03% | 99.61% | 99.61% | 1971 ms | ↑ 1.10x | 4 | 1h 8m | 13d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.45% | 99.25% | 99.25% | 2143 ms | ↑ 1.26x | 82 | 5m | 14d ago | 16m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 26.85% | 31.74% | 31.74% | 680 ms | ↓ 0.93x | 1 | 18d 1h | 30d ago | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.35% | 97.75% | 97.75% | 2822 ms | ↑ 1.58x | 20 | 30s | 13d ago | 14m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.91% | 99.94% | 99.94% | 1461 ms | ↓ 0.92x | 2 | 0s | 17d ago | 25m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.71% | 90.57% | 90.57% | 650 ms | → 0.95x | 4 | 25m | 8d ago | 25m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 97.79% | 99.53% | 99.53% | 2523 ms | ↑ 2.26x | 62 | 2m | 8d ago | 21m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.70% | 99.78% | 99.78% | 1130 ms | ↓ 0.89x | 8 | 1m | 13d ago | 14m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.88% | 99.84% | 99.84% | 1708 ms | → 1.03x | 3 | 0s | 13d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.85% | 99.84% | 99.84% | 2235 ms | ↑ 1.17x | 3 | 3m | 12d ago | 15m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.85% | 98.92% | 98.92% | 1470 ms | ↑ 1.13x | 3 | 37m | 13d ago | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.18% | 99.56% | 99.56% | 1059 ms | ↓ 0.82x | 23 | 2m | 16d ago | 25m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 52.76% | 52.76% | 1473 ms | ↓ 0.83x | 4 | 0s | 13d ago | 16m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 38.32% | 7.74% | 7.74% | 1119 ms | → 1.04x | 2 | 7d 14h | 12d ago | 16m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.91% | 99.95% | 99.95% | 1845 ms | ↑ 1.74x | 1 | 0s | 17d ago | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3007 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.56% | 87.38% | 87.38% | 2260 ms | ↑ 1.98x | 13 | 46s | 13d ago | 24m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 37.97% | 7.56% | 7.56% | 2259 ms | ↓ 0.87x | 12 | 1d 6h | 13d ago | 17m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.47% | 98.53% | 98.53% | 1965 ms | → 1.04x | 17 | 0s | 13d ago | 14m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 26.85% | 76.82% | 76.82% | 2287 ms | → 0.97x | 1 | 18d 1h | 30d ago | 26m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.91% | 99.91% | 99.91% | 1499 ms | ↑ 1.30x | 2 | 0s | 13d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1745 ms | ↑ 1.11x | 2 | 0s | 11d ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.71% | 99.63% | 99.63% | 1078 ms | → 1.01x | 9 | 0s | 11d ago | 24m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.09% | 99.53% | 99.53% | 1537 ms | → 1.01x | 5 | 50m | 18d ago | 25m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2170 ms | → 1.00x | 0 | — | — | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.89% | 99.94% | 99.94% | 1610 ms | ↑ 1.33x | 1 | 0s | 11d ago | 13m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.68% | 98.88% | 98.88% | 2389 ms | ↑ 1.09x | 10 | 0s | 13d ago | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.78% | 96.81% | 96.81% | 1887 ms | ↑ 1.17x | 5 | 2h 40m | 14d ago | 13m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.47% | 37.43% | 37.43% | 1741 ms | ↓ 0.90x | 10 | 7m | 13d ago | 23m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.25% | 96.29% | 96.29% | 1519 ms | ↓ 0.95x | 9 | 1h 47m | 13d ago | 13m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 93.03% | 93.07% | 93.07% | 1616 ms | ↑ 1.27x | 54 | 25m | 12d ago | 13m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.85% | 61.69% | 61.69% | 1244 ms | ↑ 1.94x | 4 | 0s | 13d ago | 15m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.29% | 98.38% | 98.38% | 1886 ms | → 0.95x | 22 | 27s | 14d ago | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.77% | 99.76% | 99.76% | 2373 ms | ↑ 1.16x | 6 | 2m | 13d ago | 24m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.85% | 99.66% | 99.66% | 2087 ms | ↑ 1.45x | 3 | 3m | 14d ago | 25m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.85% | 99.85% | 99.85% | 866 ms | ↓ 0.45x | 4 | 0s | 13d ago | 17m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 38.10% | 26.17% | 26.17% | 821 ms | ↓ 0.71x | 6 | 2d 13h | 13d ago | 14m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.85% | 99.09% | 99.09% | 2288 ms | ↑ 1.49x | 4 | 0s | 13d ago | 15m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 59.62% | 59.62% | 1440 ms | ↑ 1.43x | 1 | 0s | 13d ago | 15m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.91% | 95.91% | 936 ms | ↑ 1.44x | 2 | 0s | 13d ago | 15m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 99.91% | 52.93% | 52.93% | 4053 ms | ↑ 1.98x | 2 | 0s | 16d ago | 23m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.85% | 99.64% | 99.64% | 1044 ms | ↓ 0.78x | 4 | 0s | 22d ago | 25m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.74% | 99.72% | 99.72% | 2634 ms | ↑ 1.14x | 8 | 0s | 17d ago | 25m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 96.88% | 99.35% | 99.35% | 2643 ms | ↑ 1.43x | 79 | 3m | 21d ago | 23m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 49.18% | 49.18% | 1527 ms | ↑ 2.92x | 2 | 0s | 13d ago | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 97.94% | 97.94% | 1858 ms | ↑ 1.54x | 2 | 0s | 13d ago | 14m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.67% | 97.43% | 97.43% | 2265 ms | ↑ 2.40x | 9 | 1m | 13d ago | 14m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.85% | 99.11% | 99.11% | 3146 ms | ↑ 2.13x | 33 | 3m | 10d ago | 21m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.85% | 99.71% | 99.71% | 2548 ms | ↑ 1.66x | 3 | 3m | 22d ago | 25m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.85% | 99.86% | 99.86% | 2398 ms | ↑ 1.42x | 4 | 0s | 13d ago | 14m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 60.48% | 36.73% | 36.73% | 4597 ms | ↑ 1.55x | 5 | 1d 20h | 12d ago | 14m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.91% | 99.92% | 99.92% | 185 ms | ↓ 0.22x | 2 | 0s | 25d ago | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.56% | 99.91% | 99.91% | 2152 ms | ↑ 1.38x | 11 | 2m | 13d ago | 24m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.82% | 99.94% | 99.94% | 2301 ms | ↑ 2.28x | 4 | 42s | 13d ago | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.56% | 99.46% | 99.46% | 2922 ms | ↑ 1.56x | 14 | 0s | 12d ago | 25m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.22% | 73.63% | 73.63% | 2358 ms | ↑ 1.17x | 75 | 25m | 12d ago | 15m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 81.99% | 81.99% | 1448 ms | ↑ 1.31x | 1 | 0s | 13d ago | 15m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.28% | 95.38% | 95.38% | 1288 ms | ↑ 1.32x | 52 | 57s | 13d ago | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.96% | 99.96% | 1419 ms | ↓ 0.90x | 2 | 0s | 13d ago | 24m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.52% | 97.81% | 97.81% | 2409 ms | ↑ 1.60x | 14 | 43s | 13d ago | 14m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.62% | 97.90% | 97.90% | 1577 ms | ↓ 0.92x | 11 | 55s | 13d ago | 24m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 26.44% | 6.43% | 6.43% | 1239 ms | ↑ 1.07x | 1 | 18d 1h | 30d ago | 16m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2122 ms | → 1.00x | 0 | — | — | 12m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.85% | 99.91% | 99.91% | 1278 ms | → 0.96x | 4 | 0s | 13d ago | 14m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 26.44% | 5.60% | 5.60% | 1319 ms | ↑ 1.07x | 1 | 18d 1h | 30d ago | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 52.53% | 52.53% | 2452 ms | ↑ 2.24x | 2 | 0s | 13d ago | 15m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.95% | 60.05% | 60.05% | 1065 ms | → 0.98x | 31 | 1m | 21d ago | 26m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.66% | 99.72% | 99.72% | 295 ms | ↓ 0.48x | 4 | 3m | 16d ago | 13m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.88% | 98.95% | 98.95% | 1948 ms | ↑ 1.54x | 3 | 0s | 13d ago | 24m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 26.85% | 5.38% | 5.38% | 1070 ms | ↓ 0.90x | 1 | 18d 1h | 30d ago | 24m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2932 ms | ↑ 1.24x | 0 | — | — | 12m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 38.34% | 8.53% | 8.53% | 2638 ms | ↑ 1.11x | 2 | 7d 14h | 12d ago | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 89.06% | 92.34% | 92.34% | 4596 ms | ↓ 0.80x | 150 | 15m | 12d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.97% | 99.97% | 2329 ms | ↑ 1.46x | 2 | 0s | 13d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 100.00% | 98.25% | 98.34% | 98.34% | 1505 ms | ↓ 0.88x | 2 | 2h 29m | 8d ago | 13m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.52% | 98.80% | 98.80% | 677 ms | ↓ 0.72x | 14 | 43s | 7d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.71% | 99.80% | 99.80% | 1124 ms | ↓ 0.70x | 2 | 0s | 12d ago | 13m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 20.96% | 12.76% | 12.76% | 2260 ms | ↑ 1.06x | 2 | 10d 10h | 9d ago | 25m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.44% | 99.51% | 99.51% | 2037 ms | ↑ 1.86x | 11 | 6m | 16d ago | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.37% | 99.37% | 2015 ms | ↑ 2.18x | 0 | — | — | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 1012 ms | ↑ 1.66x | 1 | 0s | 17d ago | 27m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.65% | 96.70% | 96.70% | 2415 ms | ↑ 1.08x | 1 | 9h 60m | 19d ago | 13m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.50% | 99.56% | 99.56% | 1880 ms | → 1.04x | 2 | 25m | 13d ago | 13m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.84% | 83.39% | 83.39% | 1787 ms | ↑ 2.00x | 30 | 3m | 13d ago | 14m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.55% | 99.60% | 99.60% | 2156 ms | ↑ 1.48x | 7 | 0s | 14d ago | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.00% | 99.77% | 99.77% | 1610 ms | ↑ 1.06x | 33 | 0s | 21d ago | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.74% | 99.41% | 99.41% | 1077 ms | ↓ 0.89x | 60 | 3m | 17d ago | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.82% | 99.69% | 99.69% | 1196 ms | ↓ 0.92x | 4 | 2m | 18d ago | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 95.90% | 60.52% | 60.52% | 824 ms | → 1.00x | 5 | 4h 22m | 13d ago | 14m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.38% | 99.80% | 99.80% | 816 ms | ↓ 0.78x | 20 | 0s | 15d ago | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 98.26% | 81.96% | 81.96% | 1503 ms | ↓ 0.51x | 54 | 43s | 13d ago | 21m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.61% | 98.45% | 98.45% | 2090 ms | → 1.05x | 12 | 0s | 13d ago | 14m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.56% | 90.90% | 90.90% | 3913 ms | ↑ 2.54x | 13 | 46s | 13d ago | 27m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2901 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.38% | 98.51% | 98.51% | 644 ms | ↓ 0.89x | 16 | 2m | 14d ago | 15m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.73% | 99.77% | 99.77% | 2655 ms | ↑ 1.77x | 7 | 1m | 13d ago | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.79% | 98.21% | 98.21% | 1796 ms | ↑ 2.53x | 6 | 0s | 9d ago | 14m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.73% | 99.74% | 99.74% | 1623 ms | ↑ 1.32x | 7 | 1m | 13d ago | 14m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2014 ms | → 0.95x | 0 | — | — | 12m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.85% | 97.58% | 97.58% | 1905 ms | ↑ 2.11x | 4 | 0s | 13d ago | 14m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.87% | 92.87% | 92.87% | 3452 ms | ↑ 1.63x | 70 | 10m | 13d ago | 14m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.88% | 99.91% | 99.91% | 1976 ms | ↑ 2.06x | 3 | 0s | 15d ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.90% | 99.95% | 99.95% | 1074 ms | ↓ 0.83x | 1 | 0s | 15d ago | 13m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.62% | 99.85% | 99.85% | 2060 ms | ↑ 2.10x | 6 | 10m | 10d ago | 23m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 3192 ms | ↑ 1.33x | 0 | — | — | 12m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 93.92% | 93.96% | 93.96% | 2190 ms | ↑ 1.20x | 1 | 1d 1h | 24d ago | 13m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.59% | 99.83% | 99.83% | 2428 ms | ↑ 1.58x | 8 | 8m | 8d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.85% | 99.94% | 99.94% | 756 ms | ↑ 2.15x | 4 | 0s | 17d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 38.30% | 7.63% | 7.63% | 2280 ms | ↑ 1.06x | 3 | 5d 1h | 8d ago | 16m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 26.39% | 5.25% | 5.25% | 1359 ms | ↑ 1.08x | 3 | 6d | 8d ago | 16m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 93.74% | 93.79% | 93.79% | 1341 ms | ↓ 0.80x | 4 | 5h 15m | 15d ago | 13m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.64% | 99.73% | 99.73% | 2227 ms | ↑ 1.43x | 8 | 4m | 13d ago | 14m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 2135 ms | ↑ 1.07x | 1 | 0s | 15d ago | 23m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.62% | 99.71% | 99.71% | 1717 ms | → 0.98x | 5 | 14m | 15d ago | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 96.99% | 97.03% | 97.03% | 1650 ms | ↑ 1.51x | 2 | 6h 15m | 14d ago | 13m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.56% | 99.79% | 99.79% | 2379 ms | ↑ 1.47x | 13 | 13s | 9d ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.91% | 99.81% | 99.81% | 1061 ms | ↑ 1.25x | 2 | 0s | 16d ago | 16m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.68% | 98.98% | 98.98% | 1705 ms | ↑ 1.60x | 7 | 4m | 12d ago | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1290 ms | ↑ 1.61x | 1 | 0s | 21d ago | 24m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.82% | 31.98% | 77.44% | 77.44% | 702 ms | ↑ 1.35x | 5 | 3d 14h | 3d ago | 26m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.82% | 57.83% | 11.60% | 11.60% | 2285 ms | ↑ 1.14x | 3 | 3d 8h | 1d ago | 27m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.94% | 99.71% | 99.71% | 2748 ms | ↑ 1.58x | 1 | 0s | 6d ago | 25m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.56% | 98.91% | 98.91% | 2918 ms | ↑ 1.16x | 13 | 47s | 6d ago | 25m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.82% | 99.38% | 99.71% | 99.71% | 3037 ms | ↑ 2.05x | 5 | 1h | 6d ago | 25m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.82% | 99.79% | 99.89% | 99.89% | 339 ms | ↓ 0.35x | 6 | 0s | 6d ago | 25m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.79% | 99.72% | 99.72% | 2081 ms | → 0.97x | 6 | 0s | 6d ago | 25m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.68% | 99.70% | 99.70% | 2769 ms | ↑ 1.50x | 10 | 0s | 6d ago | 25m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.82% | 99.09% | 99.17% | 99.17% | 2718 ms | → 1.00x | 10 | 1m | 6d ago | 24m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.82% | 26.77% | 5.37% | 5.37% | 2358 ms | ↑ 1.06x | 3 | 6d | 6d ago | 25m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.08% | 96.14% | 96.14% | 3506 ms | ↑ 1.67x | 37 | 36m | 3d ago | 22m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.82% | 77.90% | 63.93% | 63.93% | 3997 ms | ↓ 0.72x | 492 | 5m | 3d ago | 22m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.76% | 99.86% | 99.86% | 2354 ms | ↑ 1.06x | 7 | 0s | 5d ago | 22m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.82% | 26.72% | 17.56% | 17.56% | 843 ms | ↓ 0.93x | 2 | 9d 1h | 2d ago | 23m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.82% | 99.85% | 99.72% | 99.72% | 3302 ms | ↑ 1.98x | 4 | 0s | 2d ago | 21m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.82% | 37.17% | 7.42% | 7.42% | 2110 ms | ↓ 0.78x | 37 | 9h 52m | 5d ago | 22m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.82% | 26.42% | 33.38% | 33.38% | 2450 ms | → 0.98x | 2 | 9d 1h | 5d ago | 14m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.82% | 97.22% | 97.25% | 97.25% | 2073 ms | ↑ 1.50x | 61 | 3m | 5d ago | 13m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.82% | 97.36% | 97.39% | 97.39% | 1942 ms | → 1.03x | 6 | 2h 6m | 2d ago | 13m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.82% | 99.85% | 97.45% | 97.45% | 2866 ms | ↑ 2.18x | 4 | 0s | 5d ago | 13m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.82% | 99.76% | 76.13% | 76.13% | 2276 ms | ↑ 1.15x | 6 | 2m | 3d ago | 15m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.82% | 99.44% | 77.86% | 77.86% | 2606 ms | ↑ 2.14x | 17 | 35s | 6d ago | 15m ago |
| [别来了给蹬爆炸了.com](https://lmspeed.net/provider/api-minewuer-top) | 99.82% | 99.08% | 74.26% | 74.26% | 2850 ms | ↑ 1.22x | 16 | 17m | 6d ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.82% | 99.82% | 51.36% | 51.36% | 2068 ms | → 1.02x | 5 | 0s | 4d ago | 15m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.82% | 99.05% | 85.74% | 85.74% | 1021 ms | ↑ 1.26x | 31 | 0s | 2d ago | 15m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.82% | 99.79% | 86.90% | 86.90% | 753 ms | ↓ 0.68x | 6 | 0s | 7d ago | 14m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.82% | 99.72% | 99.77% | 99.77% | 1365 ms | ↑ 1.09x | 5 | 0s | 3d ago | 13m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.82% | 26.42% | 15.62% | 15.62% | 201 ms | → 1.01x | 2 | 9d 1h | 20h ago | 14m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.82% | 99.52% | 74.68% | 74.68% | 2612 ms | ↑ 2.33x | 14 | 40s | 6d ago | 15m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.82% | 52.57% | 21.36% | 21.36% | 2822 ms | ↑ 1.40x | 11 | 1d | 3h ago | 15m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.82% | 99.05% | 98.99% | 98.99% | 2388 ms | ↑ 1.45x | 30 | 20s | 3h ago | 14m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 92.77% | 92.84% | 92.84% | 1686 ms | → 0.95x | 5 | 3h 19m | 6d ago | 13m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 95.82% | 95.87% | 95.87% | 2258 ms | ↑ 1.60x | 14 | 59m | 6d ago | 13m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.82% | 99.88% | 84.57% | 84.57% | 2867 ms | ↑ 1.81x | 3 | 0s | 6d ago | 15m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.82% | 99.82% | 99.85% | 99.85% | 2138 ms | ↑ 1.07x | 5 | 0s | 5d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.82% | 38.21% | 14.20% | 14.20% | 1688 ms | ↑ 1.05x | 4 | 3d 19h | 6d ago | 15m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.64% | 99.77% | 99.85% | 99.85% | 452 ms | ↓ 0.82x | 2 | 0s | 6d ago | 25m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.64% | 79.36% | 82.98% | 82.98% | 1275 ms | ↓ 0.54x | 437 | 6m | 6d ago | 25m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.64% | 51.55% | 55.64% | 55.64% | 3145 ms | ↓ 0.93x | 461 | 28m | 6d ago | 25m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.64% | 94.16% | 91.38% | 91.38% | 1629 ms | ↓ 0.76x | 115 | 7m | 22h ago | 25m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.64% | 26.79% | 5.39% | 5.39% | 1409 ms | → 0.96x | 3 | 6d | 3d ago | 25m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.64% | 90.19% | 18.01% | 18.01% | 3331 ms | ↑ 1.33x | 7 | 7h 51m | 4d ago | 22m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.64% | 98.85% | 98.95% | 98.95% | 1493 ms | ↑ 1.31x | 9 | 32m | 5d ago | 21m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.64% | 93.56% | 93.64% | 93.64% | 1957 ms | → 1.04x | 2 | 6h 20m | 2d ago | 13m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.82% | 99.86% | 99.86% | 1364 ms | → 1.00x | 2 | 9m | 4d ago | 13m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.64% | 99.53% | 99.57% | 99.57% | 1954 ms | ↑ 1.58x | 9 | 7m | 23h ago | 13m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.64% | 48.56% | 28.45% | 28.45% | 2425 ms | ↑ 1.60x | 4 | 3d 1h | 7d ago | 14m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.64% | 92.14% | 92.24% | 92.24% | 1542 ms | ↓ 0.93x | 4 | 3h 15m | 2d ago | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.64% | 93.17% | 93.25% | 93.25% | 2116 ms | ↓ 0.87x | 3 | 4h 17m | 2d ago | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 99.56% | 98.80% | 98.80% | 1763 ms | ↑ 1.60x | 14 | 0s | 4d ago | 17m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.64% | 80.56% | 85.97% | 85.97% | 4434 ms | ↓ 0.89x | 387 | 7m | 7d ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.64% | 99.82% | 86.98% | 86.98% | 2700 ms | ↑ 2.22x | 5 | 0s | 4d ago | 14m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.64% | 92.89% | 96.00% | 96.00% | 2484 ms | ↑ 2.58x | 6 | 13h 19m | 4d ago | 16m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.55% | 99.55% | 99.55% | 99.55% | 4536 ms | → 1.00x | 1 | 0s | 4h ago | 12m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.47% | 98.35% | 98.42% | 98.42% | 3780 ms | → 1.01x | 21 | 0s | 5d ago | 26m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.47% | 99.82% | 99.94% | 99.94% | 3299 ms | ↑ 1.37x | 5 | 0s | 6d ago | 26m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.47% | 99.59% | 99.71% | 99.71% | 461 ms | ↓ 0.54x | 11 | 2m | 7d ago | 26m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.47% | 99.24% | 99.27% | 99.27% | 2297 ms | → 0.97x | 25 | 0s | 6d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.47% | 72.94% | 83.00% | 83.00% | 1488 ms | ↓ 0.22x | 449 | 11m | 4d ago | 24m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.46% | 99.38% | 98.58% | 98.58% | 2270 ms | ↓ 0.89x | 19 | 31s | 5d ago | 23m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.46% | 99.44% | 97.55% | 97.55% | 3072 ms | ↑ 1.19x | 18 | 0s | 1d ago | 21m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.46% | 99.85% | 64.79% | 64.79% | 1679 ms | ↓ 0.78x | 3 | 7m | 5d ago | 15m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.46% | 99.11% | 97.07% | 97.07% | 3251 ms | ↑ 2.07x | 25 | 2m | 5d ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.46% | 99.60% | 99.60% | 99.60% | 2764 ms | ↓ 0.92x | 2 | 11m | 15h ago | 13m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.46% | 98.81% | 96.49% | 96.49% | 2983 ms | ↑ 2.41x | 33 | 3m | 5d ago | 13m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.46% | 99.11% | 98.28% | 98.28% | 3323 ms | ↑ 2.15x | 27 | 45s | 5d ago | 14m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.46% | 99.76% | 98.77% | 98.77% | 1408 ms | ↑ 1.69x | 6 | 2m | 5d ago | 14m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 99.46% | 43.94% | 43.98% | 43.98% | 4082 ms | → 0.96x | 54 | 4h 53m | 16h ago | 13m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.46% | 95.78% | 96.38% | 96.38% | 1940 ms | → 0.96x | 82 | 7m | 14h ago | 14m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.29% | 97.83% | 97.63% | 97.63% | 4022 ms | ↑ 1.60x | 71 | 17s | 1h ago | 25m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.28% | 27.18% | 5.43% | 5.43% | 3399 ms | ↑ 1.09x | 6 | 2d 24h | 4h ago | 21m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.28% | 98.28% | 97.55% | 97.55% | 1242 ms | ↑ 2.25x | 14 | 33m | 17h ago | 17m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.28% | 51.51% | 51.54% | 51.54% | 1814 ms | ↓ 0.86x | 35 | 7h 8m | 4d ago | 13m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.28% | 91.11% | 89.37% | 89.37% | 3342 ms | ↑ 1.65x | 111 | 18m | 4d ago | 13m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.28% | 38.07% | 27.71% | 27.71% | 2666 ms | ↑ 1.48x | 7 | 2d 4h | 4d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.28% | 99.23% | 89.52% | 89.52% | 2850 ms | → 0.99x | 25 | 0s | 2d ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.28% | 98.01% | 98.25% | 98.25% | 1899 ms | ↑ 1.61x | 45 | 5m | 5d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 99.28% | 99.47% | 99.47% | 99.47% | 2862 ms | ↓ 0.91x | 1 | 59m | 22h ago | 13m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.11% | 99.39% | 99.87% | 99.87% | 4417 ms | ↑ 2.86x | 20 | 0s | 4d ago | 26m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.10% | 98.37% | 96.56% | 96.56% | 1867 ms | ↑ 1.82x | 8 | 1h 2m | 2d ago | 14m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.10% | 97.29% | 97.35% | 97.35% | 1526 ms | ↓ 0.75x | 70 | 3m | 4d ago | 13m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.10% | 98.96% | 99.00% | 99.00% | 173 ms | ↓ 0.22x | 29 | 1m | 4d ago | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.10% | 82.16% | 82.21% | 82.21% | 1414 ms | → 0.99x | 6 | 10h 26m | 3d ago | 13m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (52)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.92% | 60.68% | 51.89% | 51.89% | 1533 ms | ↓ 0.54x | 11 | 21h 33m | 4d ago | 15m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.92% | 99.53% | 73.59% | 73.59% | 978 ms | ↑ 1.46x | 8 | 15m | 24h ago | 15m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 98.76% | 98.83% | 99.66% | 99.66% | 3962 ms | ↑ 1.23x | 38 | 32s | 5d ago | 26m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.76% | 97.33% | 99.44% | 99.44% | 3985 ms | ↑ 1.80x | 77 | 2m | 5d ago | 26m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.75% | 99.74% | 99.93% | 99.93% | 2351 ms | ↑ 2.03x | 8 | 0s | 3d ago | 25m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.75% | 98.83% | 96.16% | 96.16% | 2976 ms | ↑ 1.39x | 29 | 6m | 13h ago | 25m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.75% | 99.23% | 99.18% | 99.18% | 3521 ms | ↑ 1.16x | 24 | 26s | 4h ago | 21m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.75% | 37.95% | 35.13% | 35.13% | 1775 ms | ↓ 0.81x | 12 | 1d 6h | 2d ago | 13m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.57% | 98.39% | 98.75% | 98.75% | 3226 ms | ↓ 0.88x | 39 | 5m | 2d ago | 24m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.57% | 98.35% | 90.83% | 90.83% | 2181 ms | ↓ 0.82x | 46 | 3m | 1d ago | 24m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.57% | 26.12% | 5.22% | 5.22% | 1107 ms | ↓ 0.94x | 21 | 20h 39m | 6h ago | 23m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.39% | 95.26% | 96.20% | 96.20% | 3220 ms | ↑ 1.36x | 73 | 13m | 3d ago | 16m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 98.22% | 99.50% | 99.88% | 99.88% | 1443 ms | ↑ 1.26x | 3 | 1h 27m | 4d ago | 25m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.21% | 98.84% | 88.43% | 88.43% | 1352 ms | ↓ 0.64x | 31 | 2m | 23h ago | 14m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.04% | 88.48% | 47.99% | 47.99% | 2866 ms | ↑ 1.31x | 175 | 13m | 4d ago | 22m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.49% | 80.62% | 84.17% | 84.17% | 4332 ms | ↓ 0.87x | 429 | 5m | 3h ago | 16m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.31% | 91.14% | 91.24% | 91.24% | 2759 ms | → 0.97x | 4 | 4h 8m | 16h ago | 13m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 96.98% | 94.17% | 98.61% | 98.61% | 3687 ms | ↑ 1.19x | 143 | 5m | 4d ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 96.98% | 98.65% | 98.70% | 98.70% | 4446 ms | ↑ 1.79x | 22 | 4m | 11h ago | 27m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 96.95% | 97.75% | 97.75% | 97.75% | 1986 ms | ↓ 0.89x | 1 | 3h 45m | 6d ago | 12m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.43% | 81.32% | 83.66% | 83.66% | 4072 ms | ↓ 0.82x | 448 | 5m | 3h ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.42% | 90.45% | 90.55% | 90.55% | 2710 ms | → 1.00x | 24 | 33m | 2d ago | 13m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.42% | 76.38% | 76.42% | 76.42% | 4499 ms | ↓ 0.89x | 375 | 10m | 5h ago | 13m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.42% | 80.15% | 79.96% | 79.96% | 4667 ms | ↑ 1.11x | 438 | 5m | 56m ago | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 96.06% | 78.88% | 56.65% | 56.65% | 4605 ms | → 0.96x | 455 | 6m | 1h ago | 15m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 95.89% | 80.25% | 70.54% | 70.54% | 4493 ms | ↓ 0.88x | 463 | 5m | 43m ago | 22m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.34% | 97.06% | 94.92% | 94.92% | 3102 ms | ↑ 1.36x | 57 | 8m | 5d ago | 14m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 94.80% | 37.44% | 7.45% | 7.45% | 2691 ms | ↑ 1.24x | 4 | 3d 21h | 11h ago | 16m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.80% | 91.95% | 65.67% | 65.67% | 2054 ms | ↑ 1.13x | 37 | 1h 12m | 5h ago | 15m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.27% | 80.10% | 76.58% | 76.58% | 4793 ms | ↓ 0.92x | 457 | 5m | 12h ago | 14m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 93.55% | 94.26% | 92.87% | 92.87% | 2359 ms | ↑ 1.31x | 87 | 15m | 2h ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 93.55% | 95.24% | 95.24% | 95.24% | 1433 ms | → 1.03x | 1 | 11h 52m | 1d ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 93.19% | 94.85% | 94.85% | 94.85% | 3846 ms | ↑ 1.26x | 3 | 4h 1m | 1d ago | 12m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 92.49% | 86.08% | 75.84% | 75.84% | 1600 ms | ↓ 0.77x | 248 | 11m | 4d ago | 21m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.32% | 67.91% | 47.23% | 47.23% | 1469 ms | ↑ 1.39x | 16 | 11h 16m | 3d ago | 22m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 92.18% | 95.64% | 98.76% | 98.76% | 4030 ms | ↑ 1.39x | 93 | 8m | 14h ago | 26m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 91.58% | 91.64% | 91.48% | 91.48% | 2028 ms | ↑ 2.24x | 47 | 1h 42m | 2d ago | 14m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.40% | 26.00% | 26.00% | 26.00% | 3263 ms | ↓ 0.94x | 77 | 5h 3m | 11h ago | 13m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 91.23% | 24.75% | 4.94% | 4.94% | 3704 ms | → 0.98x | 59 | 7h 23m | 1h ago | 22m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 90.50% | 76.47% | 75.29% | 75.29% | 4566 ms | ↓ 0.84x | 527 | 7m | 2h ago | 13m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 90.02% | 24.18% | 4.85% | 4.85% | 2190 ms | → 0.99x | 64 | 6h 55m | 2h ago | 25m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 88.63% | 68.81% | 68.82% | 68.82% | 3153 ms | ↓ 0.77x | 283 | 13m | 4h ago | 27m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 87.81% | 15.94% | 13.50% | 13.50% | 2260 ms | → 1.04x | 7 | 3d 9h | 4d ago | 14m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 85.66% | 96.03% | 59.50% | 59.50% | 1194 ms | ↑ 1.81x | 37 | 45m | 1d ago | 15m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 85.26% | 77.82% | 83.05% | 83.05% | 4319 ms | ↓ 0.88x | 438 | 9m | 1d ago | 27m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 84.59% | 33.61% | 24.38% | 24.38% | 2306 ms | → 0.98x | 18 | 22h 49m | 16h ago | 16m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 82.77% | 92.45% | 95.70% | 95.70% | 4072 ms | ↓ 0.89x | 148 | 15m | 3h ago | 26m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 71.33% | 71.72% | 71.75% | 71.75% | 2169 ms | ↑ 1.26x | 56 | 2h 30m | 2d ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 63.62% | 17.94% | 6.80% | 6.80% | 3392 ms | ↓ 0.71x | 241 | 1h 58m | 2h ago | 14m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 50.80% | 26.97% | 85.26% | 85.26% | 1709 ms | ↑ 1.09x | 2 | 10d 19h | 26d ago | 25m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 50.18% | 65.01% | 65.08% | 65.08% | 1259 ms | ↓ 0.76x | 9 | 13h 12m | 2d ago | 13m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 48.57% | 81.11% | 89.54% | 89.54% | 1162 ms | ↓ 0.27x | 16 | 12h 14m | 12d ago | 14m ago |

</details>

<details open>
<summary><strong>🔴 Down (165)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.61% | 26.76% | 6.21% | 6.21% | 4566 ms | ↓ 0.85x | 145 | 2h 50m | 15m ago | 15m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 80.18% | 18.93% | 4.62% | 4.62% | 3658 ms | ↓ 0.88x | 6 | 3d 15h | 1d ago | 22m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 76.61% | 53.18% | 61.86% | 61.86% | 4805 ms | ↓ 0.89x | 643 | 17m | 43m ago | 22m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 74.55% | 19.25% | 7.73% | 7.73% | 4501 ms | ↓ 0.87x | 143 | 3h 17m | 14m ago | 14m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 64.70% | 88.79% | 88.84% | 88.84% | 1520 ms | → 0.98x | 4 | 17h 11m | 3d ago | 13m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 51.25% | 32.91% | 32.94% | 32.94% | 1079 ms | ↓ 0.92x | 3 | 5d 16h | 4d ago | 13m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 48.75% | 91.14% | 93.33% | 93.33% | 2724 ms | ↑ 2.39x | 9 | 10h 37m | 4d ago | 14m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 47.31% | 91.21% | 87.45% | 87.45% | 525 ms | ↓ 0.73x | 3 | 1d 5h | 3d ago | 14m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 40.43% | 16.81% | 27.58% | 27.58% | 638 ms | ↓ 0.78x | 4 | 5d 16h | 2d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 27.53% | 48.67% | 68.75% | 68.75% | 3449 ms | ↓ 0.53x | 491 | 40m | 9h ago | 27m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.18% | 0.08% | 0.08% | 0.08% | 2848 ms | → 1.00x | 2 | 7d 10h | 7d ago | 16m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 72.98% | 93.84% | 93.84% | — | — | 6 | 1d 24h | 12d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 1.39% | 77.68% | 77.68% | — | — | 1 | 29d 16h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 72.11% | 83.52% | 83.52% | — | — | 29 | 9h 59m | 12d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.49% | 6.49% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 9.89% | 14.20% | 14.20% | — | — | 11 | 2d 12h | 12d ago | 27m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 1.92% | 3.85% | 3.85% | — | — | 1 | 29d 13h | 30d ago | 22m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 70.46% | 94.10% | 94.10% | — | — | 80 | 3h 37m | 12d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 41.30% | 41.30% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 29.68% | 29.68% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 56.37% | 84.47% | 84.47% | — | — | 347 | 56m | 12d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 62.77% | 72.28% | 72.28% | — | — | 286 | 1h 3m | 12d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 73.47% | 35.84% | 35.84% | — | — | 3 | 3d 23h | 12d ago | 15m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 73.00% | 94.58% | 94.58% | — | — | 5 | 2d 9h | 12d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 42.05% | 71.22% | 71.22% | — | — | 142 | 3h 13m | 18d ago | 24m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 25m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 72.23% | 87.36% | 87.36% | — | — | 32 | 8h 57m | 12d ago | 25m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.42% | 4.42% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 20.13% | 20.13% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 72.48% | 62.07% | 62.07% | — | — | 27 | 10h 37m | 12d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 44.26% | 44.26% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.71% | 4.22% | 4.22% | — | — | 3 | 9d 22h | 12d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 73.53% | 94.73% | 94.73% | — | — | 1 | 11d 22h | 12d ago | 16m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.65% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 12d ago | 21m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 65.00% | 58.85% | 58.85% | — | — | 33 | 9h 57m | 12d ago | 23m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 5.25% | 33.85% | 33.85% | — | — | 2 | 14d 9h | 29d ago | 15m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 11.64% | 2.33% | 2.33% | — | — | 7 | 3d 21h | 12d ago | 22m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 42.80% | 50.91% | 50.91% | — | — | 5 | 3d 13h | 8d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 61.92% | 61.92% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 53.22% | 29.70% | 29.70% | — | — | 333 | 1h 3m | 12d ago | 15m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 71.90% | 34.24% | 34.24% | — | — | 50 | 5h 44m | 12d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.65% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 12d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 64.91% | 64.91% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.61% | 7.61% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 74.66% | 74.66% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 72.69% | 94.52% | 94.52% | — | — | 16 | 17h 53m | 12d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 8.69% | 11.58% | 11.58% | — | — | 5 | 5d 14h | 28d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 51.15% | 90.17% | 90.17% | — | — | 165 | 2h 20m | 12d ago | 17m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 49.66% | 89.74% | 89.74% | — | — | 210 | 1h 50m | 12d ago | 26m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 17h | 28d ago | 13m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 17.13% | 41.45% | 41.45% | — | — | 3 | 8d 15h | 26d ago | 14m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 14.31% | 14.31% | 14.31% | — | — | 5 | 5d 2h | 25d ago | 13m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 60.03% | 60.03% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 42.17% | 86.98% | 86.98% | — | — | 273 | 1h 35m | 12d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 53.01% | 53.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 20h | 15d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 48.19% | 48.19% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 73.02% | 94.53% | 94.53% | — | — | 4 | 2d 24h | 12d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 66.73% | 66.73% | — | — | 3 | 9d 24h | 24d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.62% | 44.35% | 44.35% | — | — | 2 | 14d 22h | 12d ago | 25m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 22h | 15d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 68.87% | 79.32% | 79.32% | — | — | 10 | 1d 7h | 13d ago | 14m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 20h | 15d ago | 17m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 45.96% | 37.96% | 37.96% | — | — | 507 | 42m | 12d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 12.24% | 2.99% | 2.99% | — | — | 4 | 6d 18h | 12d ago | 16m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 47.36% | 47.36% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 72.17% | 94.44% | 94.44% | — | — | 22 | 13h 9m | 12d ago | 21m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 73.38% | 38.41% | 38.41% | — | — | 3 | 3d 23h | 12d ago | 15m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 73.01% | 94.40% | 94.40% | — | — | 5 | 2d 9h | 12d ago | 26m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 53.90% | 53.92% | 53.92% | — | — | 1 | 11d 22h | 12d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 48.63% | 55.74% | 55.74% | — | — | 4 | 4d 15h | 19d ago | 15m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 68.03% | 91.74% | 91.74% | — | — | 144 | 2h 1m | 12d ago | 26m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.62% | 0.12% | 0.12% | — | — | 18 | 1d 16h | 13d ago | 20m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 17h | 28d ago | 13m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 20h | 15d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 50.15% | 89.96% | 89.96% | — | — | 57 | 7h 15m | 17d ago | 21m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 73.53% | 79.10% | 79.10% | — | — | 2 | 5d 23h | 12d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.03% | 4.03% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 49.24% | 49.24% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 56.76% | 88.19% | 88.19% | — | — | 189 | 1h 50m | 12d ago | 25m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 42.03% | 67.26% | 67.26% | — | — | 547 | 42m | 12d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.27% | 32.27% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 26.13% | 26.20% | 26.20% | — | — | 24 | 13h 4m | 12d ago | 13m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 15.27% | 17.45% | 17.45% | — | — | 388 | 1h 27m | 12d ago | 14m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.48% | 27.48% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 24m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 72.35% | 82.08% | 82.08% | — | — | 37 | 7h 44m | 12d ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 36.14% | 36.23% | 36.23% | — | — | 3 | 2d 14h | 7d ago | 13m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.91% | 19.91% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 56.44% | 56.44% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 62.89% | 62.89% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 67.93% | 67.97% | 67.97% | — | — | 7 | 1d 17h | 12d ago | 13m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 80.73% | 82.42% | 82.42% | — | — | 10 | 19h 18m | 8d ago | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 31.74% | 6.32% | 6.32% | — | — | 3 | 7d 6h | 12d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 23h | 17d ago | 13m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 73.09% | 94.61% | 94.61% | — | — | 2 | 5d 23h | 12d ago | 24m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 71.27% | 93.38% | 93.38% | — | — | 51 | 5h 39m | 12d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 43.87% | 72.84% | 72.84% | — | — | 506 | 44m | 12d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 34.30% | 85.53% | 85.53% | — | — | 14 | 1d 13h | 22d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 71.50% | 93.22% | 93.22% | — | — | 54 | 5h 19m | 12d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.53% | 22.53% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 12.26% | 12.25% | 12.25% | — | — | 3 | 4d 5h | 10d ago | 25m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 73.38% | 39.27% | 39.27% | — | — | 6 | 1d 24h | 12d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 8.63% | 77.85% | 77.85% | — | — | 2 | 13d 23h | 19d ago | 25m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 24.34% | 32.23% | 32.23% | — | — | 104 | 5h 18m | 17d ago | 14m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.80% | 9.80% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 60.93% | 74.92% | 74.92% | — | — | 306 | 60m | 12d ago | 27m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 77.11% | 77.11% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 67.73% | 67.76% | 67.76% | — | — | 3 | 4d 4h | 12d ago | 13m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 1.58% | 19.33% | 19.33% | — | — | 1 | 29d 15h | 30d ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 25m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.48% | 20.48% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 3.21% | 3.31% | 3.31% | — | — | 2 | 6d 6h | 12d ago | 13m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 16.75% | 16.84% | 16.84% | — | — | 2 | 6d 6h | 12d ago | 13m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 21.81% | 21.91% | 21.91% | — | — | 2 | 4d 19h | 9d ago | 12m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 56.94% | 56.94% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 73.08% | 94.57% | 94.57% | — | — | 5 | 2d 9h | 12d ago | 23m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 69.33% | 74.76% | 74.76% | — | — | 8 | 1d 15h | 13d ago | 13m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 78.04% | 94.75% | 94.75% | — | — | 44 | 4h 53m | 9d ago | 21m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 47.22% | 47.22% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 68.62% | 92.13% | 92.13% | — | — | 155 | 1h 51m | 12d ago | 20m ago |

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
