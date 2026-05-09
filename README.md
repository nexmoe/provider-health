# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 327 🟢 operational · 83 🟡 degraded · 190 🔴 down · 0 ⚫ unknown

_Updated 2026-05-09 05:51 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (327)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 95.65% | 95.71% | 95.71% | 2418 ms | → 0.99x | 2 | 6h 20m | 10d ago | 2h ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.82% | 92.07% | 92.07% | 861 ms | ↓ 0.63x | 4 | 0s | 21d ago | 2h ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 64.72% | 10.37% | 10.37% | 2050 ms | → 0.97x | 5 | 1d 13h | 8d ago | 2h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.89% | 97.11% | 97.11% | 2940 ms | ↑ 1.14x | 2 | 0s | 21d ago | 2h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.84% | 98.90% | 98.90% | 4308 ms | ↑ 1.11x | 21 | 0s | 12d ago | 2h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1712 ms | ↓ 0.76x | 0 | — | — | 2h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.37% | 96.37% | 1887 ms | ↑ 1.19x | 0 | — | — | 2h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1889 ms | → 1.00x | 0 | — | — | 2h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.38% | 91.38% | 1926 ms | ↑ 1.20x | 0 | — | — | 2h ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1369 ms | → 1.00x | 0 | — | — | 2h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 94.71% | 94.77% | 94.77% | 2885 ms | ↑ 1.25x | 5 | 3h 2m | 7d ago | 2h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.75% | 99.79% | 99.79% | 1429 ms | ↓ 0.83x | 6 | 0s | 22d ago | 2h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.60% | 94.64% | 94.64% | 1361 ms | ↑ 1.14x | 8 | 4h 1m | 17d ago | 2h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 96.81% | 96.81% | 96.81% | 1018 ms | ↓ 0.63x | 1 | 13h 57m | 16d ago | 2h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.89% | 99.89% | 882 ms | ↓ 0.67x | 2 | 9m | 12d ago | 2h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 3218 ms | → 1.00x | 0 | — | — | 2h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.71% | 95.36% | 95.36% | 1068 ms | ↓ 0.88x | 6 | 2m | 21d ago | 2h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2186 ms | → 1.00x | 0 | — | — | 2h ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2043 ms | → 1.00x | 0 | — | — | 2h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.64% | 97.48% | 97.48% | 3246 ms | ↑ 1.49x | 7 | 4m | 13d ago | 2h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.60% | 95.66% | 95.66% | 1338 ms | ↓ 0.77x | 1 | 12h 47m | 22d ago | 2h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.54% | 76.18% | 76.18% | 3592 ms | ↑ 1.70x | 38 | 53m | 10d ago | 2h ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2900 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.75% | 77.55% | 77.55% | 1617 ms | → 0.96x | 5 | 2m | 11d ago | 2h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.68% | 96.86% | 96.86% | 1534 ms | ↓ 0.81x | 4 | 20m | 10d ago | 2h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 471 ms | ↓ 0.64x | 0 | — | — | 2h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.57% | 98.60% | 98.60% | 1086 ms | ↓ 0.41x | 21 | 6m | 16d ago | 2h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.67% | 94.61% | 94.61% | 2782 ms | ↑ 1.14x | 24 | 3m | 21d ago | 2h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 93.21% | 97.95% | 97.95% | 3130 ms | ↑ 2.79x | 20 | 1h 27m | 22d ago | 2h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2783 ms | → 1.00x | 0 | — | — | 2h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3176 ms | ↑ 1.10x | 0 | — | — | 2h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 57.16% | 88.76% | 88.76% | 1731 ms | ↓ 0.86x | 2 | 4d 12h | 21d ago | 2h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.75% | 99.46% | 99.46% | 2422 ms | ↑ 1.19x | 6 | 0s | 23d ago | 2h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.93% | 96.89% | 96.89% | 3560 ms | ↑ 1.31x | 27 | 46s | 19d ago | 2h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 94.21% | 94.26% | 94.26% | 1512 ms | ↑ 1.09x | 3 | 11h 20m | 22d ago | 2h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1568 ms | → 1.00x | 0 | — | — | 2h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.88% | 49.66% | 49.66% | 4064 ms | ↑ 1.85x | 109 | 17m | 12d ago | 2h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.71% | 97.54% | 97.54% | 3777 ms | ↑ 1.74x | 7 | 0s | 20d ago | 2h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1973 ms | → 1.00x | 0 | — | — | 2h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1632 ms | ↑ 1.47x | 0 | — | — | 2h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 95.54% | 95.54% | 1505 ms | ↑ 1.12x | 2 | 0s | 7d ago | 2h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1899 ms | → 1.00x | 0 | — | — | 2h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.72% | 48.15% | 48.15% | 970 ms | ↑ 1.30x | 46 | 5m | 18d ago | 2h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.57% | 96.98% | 96.98% | 3162 ms | ↑ 1.42x | 7 | 8m | 13d ago | 2h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 86.38% | 45.22% | 45.22% | 1428 ms | ↑ 1.36x | 1 | 2d 17h | 23d ago | 2h ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1510 ms | ↓ 0.78x | 0 | — | — | 2h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.61% | 99.58% | 99.58% | 3770 ms | ↑ 1.24x | 10 | 0s | 21d ago | 2h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3062 ms | → 1.00x | 0 | — | — | 2h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.86% | 96.77% | 96.77% | 3077 ms | ↑ 1.15x | 3 | 0s | 15d ago | 2h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.79% | 98.85% | 98.85% | 2144 ms | ↑ 1.81x | 4 | 2m | 8d ago | 2h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 22.15% | 40.79% | 40.79% | 1550 ms | → 1.00x | 1 | 10d 2h | 30d ago | 2h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 96.39% | 96.39% | 96.39% | 1269 ms | → 1.00x | 1 | 2h 40m | 20d ago | 2h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.89% | 79.19% | 79.19% | 2589 ms | ↑ 1.35x | 2 | 0s | 14d ago | 2h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.82% | 59.90% | 59.90% | 1803 ms | ↑ 1.15x | 3 | 3m | 17d ago | 2h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2306 ms | → 1.00x | 0 | — | — | 2h ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.28% | 75.76% | 75.76% | 2974 ms | ↑ 1.19x | 5 | 52m | 14d ago | 2h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1355 ms | → 1.00x | 0 | — | — | 2h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.89% | 97.97% | 97.97% | 3285 ms | ↑ 1.21x | 2 | 0s | 21d ago | 2h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4496 ms | → 1.00x | 0 | — | — | 2h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.89% | 91.73% | 91.73% | 1592 ms | ↑ 1.20x | 2 | 0s | 21d ago | 2h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.89% | 97.70% | 97.70% | 1278 ms | ↓ 0.85x | 2 | 0s | 22d ago | 2h ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2344 ms | → 1.00x | 0 | — | — | 2h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.47% | 39.82% | 39.82% | 1318 ms | ↑ 1.30x | 8 | 5m | 23d ago | 2h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.93% | 70.93% | 70.93% | 2175 ms | ↑ 1.07x | 1 | 0s | 21d ago | 2h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 98.16% | 48.93% | 48.93% | 2041 ms | ↑ 1.63x | 14 | 29m | 11d ago | 2h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.89% | 97.51% | 97.51% | 2742 ms | ↑ 1.69x | 2 | 0s | 21d ago | 2h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.71% | 45.96% | 45.96% | 2170 ms | ↑ 1.18x | 6 | 3m | 17d ago | 2h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 37.48% | 37.48% | 2002 ms | ↓ 0.87x | 1 | 0s | 23d ago | 2h ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2897 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.79% | 77.81% | 77.81% | 2755 ms | ↑ 1.30x | 5 | 0s | 16d ago | 2h ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.64% | 97.77% | 97.77% | 2191 ms | ↑ 1.15x | 5 | 8m | 21d ago | 2h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.75% | 57.14% | 57.14% | 2570 ms | ↑ 1.36x | 4 | 5m | 18d ago | 2h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2865 ms | → 1.00x | 0 | — | — | 2h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.71% | 99.06% | 99.06% | 1841 ms | ↑ 1.23x | 7 | 0s | 20d ago | 2h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.75% | 87.53% | 87.53% | 3372 ms | ↑ 1.14x | 3 | 10m | 21d ago | 2h ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 58.12% | 58.18% | 58.18% | 566 ms | → 1.00x | 1 | 1d 24h | 22d ago | 2h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.82% | 99.51% | 99.51% | 2276 ms | ↑ 1.27x | 4 | 0s | 21d ago | 2h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.82% | 97.71% | 97.71% | 3311 ms | ↑ 1.89x | 2 | 5h 35m | 21d ago | 2h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 66.24% | 23.90% | 23.90% | 1802 ms | ↓ 0.71x | 2 | 3d 14h | 21d ago | 2h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.72% | 99.72% | 2880 ms | ↑ 1.40x | 1 | 0s | 14d ago | 2h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1997 ms | → 1.00x | 0 | — | — | 2h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.32% | 97.92% | 97.92% | 4455 ms | ↑ 1.15x | 38 | 2m | 20d ago | 2h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.94% | 99.94% | 867 ms | ↓ 0.85x | 1 | 0s | 18d ago | 2h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.79% | 65.84% | 65.84% | 2746 ms | ↑ 1.29x | 5 | 0s | 21d ago | 2h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 84.24% | 84.29% | 84.29% | 265 ms | ↓ 0.69x | 10 | 7h 2m | 20d ago | 2h ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1734 ms | → 1.00x | 0 | — | — | 2h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.82% | 99.94% | 99.94% | 2528 ms | ↑ 1.18x | 4 | 0s | 14d ago | 2h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 98.98% | 99.69% | 99.69% | 4432 ms | ↑ 2.55x | 6 | 37m | 19d ago | 2h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 48.33% | 68.64% | 68.64% | 2468 ms | → 1.04x | 2 | 6d 8h | 16d ago | 2h ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1779 ms | → 1.00x | 0 | — | — | 2h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 72.06% | 71.64% | 71.64% | 1977 ms | ↑ 1.44x | 2 | 2d 23h | 24d ago | 2h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2690 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1372 ms | ↑ 1.42x | 0 | — | — | 2h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.91% | 98.91% | 1822 ms | ↑ 1.43x | 0 | — | — | 2h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.82% | 98.36% | 98.36% | 2133 ms | ↑ 1.42x | 4 | 0s | 21d ago | 2h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 95.19% | 95.23% | 95.23% | 983 ms | ↓ 0.24x | 26 | 38m | 22d ago | 2h ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1141 ms | → 1.00x | 0 | — | — | 2h ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2355 ms | ↓ 0.82x | 0 | — | — | 2h ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2564 ms | ↓ 0.91x | 0 | — | — | 2h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.68% | 98.33% | 98.33% | 717 ms | ↓ 0.95x | 5 | 12m | 20d ago | 2h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.57% | 98.84% | 98.84% | 973 ms | ↓ 0.80x | 11 | 0s | 12d ago | 2h ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1110 ms | → 1.00x | 0 | — | — | 2h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 66.16% | 11.74% | 11.74% | 1266 ms | ↑ 1.21x | 1 | 7d 4h | 30d ago | 2h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 780 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.82% | 99.82% | 671 ms | → 1.02x | 1 | 0s | 26d ago | 2h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 1194 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 95.36% | 95.42% | 95.42% | 2399 ms | ↑ 1.10x | 1 | 13h 10m | 21d ago | 2h ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.46% | 97.52% | 97.52% | 2358 ms | ↑ 1.87x | 7 | 50m | 21d ago | 2h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.65% | 99.72% | 99.72% | 515 ms | ↓ 0.81x | 7 | 4m | 15d ago | 2h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1574 ms | → 1.00x | 0 | — | — | 2h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.12% | 98.56% | 98.56% | 4517 ms | ↑ 1.24x | 23 | 0s | 21d ago | 2h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3637 ms | ↑ 2.12x | 1 | 0s | 28d ago | 2h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1418 ms | → 1.00x | 0 | — | — | 2h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.00% | 99.28% | 99.28% | 2290 ms | ↑ 1.18x | 18 | 2m | 22d ago | 2h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 52.14% | 33.95% | 33.95% | 834 ms | ↑ 1.10x | 1 | 10d 2h | 30d ago | 2h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.21% | 97.96% | 97.96% | 4546 ms | ↑ 2.24x | 20 | 30s | 21d ago | 2h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1206 ms | → 0.96x | 1 | 0s | 25d ago | 2h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.86% | 99.90% | 99.90% | 500 ms | ↓ 0.43x | 3 | 0s | 14d ago | 2h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.86% | 99.80% | 99.80% | 2301 ms | ↑ 1.29x | 3 | 0s | 21d ago | 2h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.82% | 99.85% | 99.85% | 2124 ms | ↑ 1.12x | 3 | 3m | 20d ago | 2h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.19% | 99.25% | 99.25% | 1797 ms | ↑ 1.31x | 3 | 37m | 21d ago | 2h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.89% | 87.76% | 87.76% | 1333 ms | ↑ 1.06x | 2 | 0s | 15d ago | 2h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.86% | 99.57% | 99.57% | 1514 ms | ↑ 1.06x | 3 | 0s | 24d ago | 2h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.57% | 95.33% | 95.33% | 2804 ms | ↑ 1.11x | 11 | 26m | 13d ago | 2h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 66.13% | 10.74% | 10.74% | 3042 ms | ↑ 2.18x | 2 | 3d 14h | 20d ago | 2h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 911 ms | → 1.00x | 0 | — | — | 2h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.75% | 99.73% | 99.73% | 2497 ms | ↑ 1.06x | 6 | 0s | 14d ago | 2h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1538 ms | ↓ 0.63x | 0 | — | — | 2h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 65.72% | 10.53% | 10.53% | 1852 ms | ↓ 0.84x | 12 | 14h 22m | 21d ago | 2h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.75% | 98.65% | 98.65% | 2876 ms | ↑ 1.82x | 5 | 0s | 21d ago | 2h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.89% | 99.91% | 99.91% | 2075 ms | ↑ 1.33x | 2 | 0s | 19d ago | 2h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.05% | 99.55% | 99.55% | 1973 ms | ↑ 1.19x | 3 | 1h 17m | 26d ago | 2h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1894 ms | ↓ 0.77x | 0 | — | — | 2h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.79% | 98.91% | 98.91% | 2181 ms | → 1.00x | 5 | 0s | 21d ago | 2h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.86% | 97.37% | 97.37% | 1661 ms | → 0.97x | 3 | 0s | 22d ago | 2h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.82% | 96.91% | 96.91% | 2571 ms | ↑ 1.56x | 4 | 0s | 21d ago | 2h ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.03% | 94.25% | 94.25% | 1015 ms | ↓ 0.66x | 17 | 5m | 20d ago | 2h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.89% | 63.60% | 63.60% | 1083 ms | ↑ 1.30x | 2 | 0s | 21d ago | 2h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.79% | 76.18% | 76.18% | 2539 ms | ↑ 1.33x | 5 | 0s | 14d ago | 2h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.72% | 99.77% | 99.77% | 1789 ms | → 0.96x | 6 | 2m | 21d ago | 2h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.67% | 99.67% | 3502 ms | ↑ 1.71x | 2 | 5m | 22d ago | 2h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2746 ms | → 1.00x | 0 | — | — | 2h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 77.35% | 90.31% | 90.31% | 1672 ms | ↓ 0.55x | 13 | 15h 4m | 8d ago | 2h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.89% | 99.86% | 99.86% | 1207 ms | ↓ 0.87x | 2 | 0s | 21d ago | 2h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 82.63% | 83.55% | 83.55% | 1082 ms | ↓ 0.22x | 237 | 11m | 12d ago | 2h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 87.15% | 87.33% | 87.33% | 3247 ms | ↓ 0.37x | 239 | 5m | 15d ago | 2h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.93% | 99.14% | 99.14% | 2243 ms | ↑ 1.39x | 1 | 0s | 21d ago | 2h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.93% | 61.44% | 61.44% | 799 ms | ↓ 0.39x | 1 | 0s | 21d ago | 2h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.89% | 96.09% | 96.09% | 2109 ms | ↑ 2.01x | 2 | 0s | 21d ago | 2h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2743 ms | → 1.00x | 0 | — | — | 2h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1560 ms | → 1.00x | 0 | — | — | 2h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 98.14% | 90.81% | 90.81% | 3996 ms | ↑ 1.24x | 32 | 6m | 12d ago | 2h ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1312 ms | → 1.00x | 0 | — | — | 2h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.93% | 51.25% | 51.25% | 2072 ms | ↑ 1.41x | 1 | 0s | 21d ago | 2h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.93% | 98.09% | 98.09% | 1463 ms | → 1.05x | 1 | 0s | 21d ago | 2h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 83.33% | 26.03% | 26.03% | 2938 ms | ↑ 1.13x | 11 | 6h 44m | 8d ago | 2h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.72% | 99.14% | 99.14% | 3746 ms | ↑ 1.61x | 3 | 22m | 18d ago | 2h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.93% | 99.72% | 99.72% | 3758 ms | ↑ 1.66x | 0 | — | — | 2h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 2113 ms | ↑ 1.19x | 2 | 0s | 21d ago | 2h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 92.88% | 42.55% | 42.55% | 4091 ms | ↑ 1.38x | 5 | 6h 6m | 20d ago | 2h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2270 ms | → 1.00x | 0 | — | — | 2h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.27% | 97.27% | 97.27% | 1967 ms | ↑ 1.66x | 1 | 11h 52m | 9d ago | 2h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.61% | 75.04% | 75.04% | 1607 ms | ↑ 2.37x | 4 | 25m | 9d ago | 2h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 190 ms | ↓ 0.42x | 0 | — | — | 2h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 782 ms | → 1.00x | 0 | — | — | 2h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.86% | 99.94% | 99.94% | 2359 ms | ↑ 1.50x | 2 | 1m | 21d ago | 2h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.82% | 99.48% | 99.48% | 4067 ms | ↑ 1.66x | 4 | 0s | 20d ago | 2h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.92% | 75.20% | 75.20% | 1783 ms | ↓ 0.81x | 56 | 30m | 20d ago | 2h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.93% | 83.12% | 83.12% | 2764 ms | ↑ 2.33x | 1 | 0s | 21d ago | 2h ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1064 ms | → 1.00x | 0 | — | — | 2h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.36% | 95.55% | 95.55% | 1422 ms | ↑ 1.36x | 13 | 47s | 21d ago | 2h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.89% | 99.97% | 99.97% | 944 ms | ↓ 0.78x | 2 | 0s | 21d ago | 2h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.32% | 90.21% | 90.21% | 3564 ms | → 1.03x | 18 | 0s | 10d ago | 2h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.68% | 97.96% | 97.96% | 1229 ms | ↓ 0.94x | 7 | 0s | 21d ago | 2h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 51.84% | 10.09% | 10.09% | 1995 ms | ↓ 0.85x | 1 | 10d 2h | 30d ago | 2h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2306 ms | ↓ 0.91x | 0 | — | — | 2h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.86% | 99.92% | 99.92% | 1241 ms | ↑ 1.07x | 3 | 0s | 21d ago | 2h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.89% | 54.58% | 54.58% | 2273 ms | ↑ 1.44x | 2 | 0s | 21d ago | 2h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.79% | 99.74% | 99.74% | 2918 ms | ↑ 1.40x | 4 | 0s | 14d ago | 2h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.82% | 61.34% | 61.34% | 891 ms | → 1.00x | 3 | 0s | 29d ago | 2h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.93% | 98.98% | 98.98% | 1258 ms | ↓ 0.92x | 1 | 0s | 21d ago | 2h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 52.18% | 8.43% | 8.43% | 990 ms | ↓ 0.95x | 1 | 10d 2h | 30d ago | 2h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1032 ms | → 1.00x | 0 | — | — | 2h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.71% | 98.71% | 98.71% | 1904 ms | ↓ 0.80x | 1 | 3h 45m | 14d ago | 2h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1572 ms | ↓ 0.90x | 0 | — | — | 2h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2112 ms | → 1.00x | 0 | — | — | 2h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.05% | 92.58% | 92.58% | 4150 ms | ↓ 0.85x | 119 | 19m | 20d ago | 2h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.98% | 99.98% | 3424 ms | ↑ 1.37x | 1 | 0s | 21d ago | 2h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.68% | 98.91% | 98.91% | 1954 ms | ↑ 1.37x | 6 | 2m | 15d ago | 2h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 45.10% | 20.81% | 20.81% | 3063 ms | ↑ 1.12x | 2 | 6d 10h | 17d ago | 2h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.79% | 99.53% | 99.53% | 1334 ms | ↑ 1.19x | 1 | 0s | 24d ago | 2h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.39% | 99.39% | 1425 ms | ↑ 1.27x | 0 | — | — | 2h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 607 ms | → 1.01x | 1 | 0s | 25d ago | 2h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.84% | 91.13% | 91.13% | 1587 ms | ↓ 0.73x | 23 | 7m | 9d ago | 2h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.45% | 97.49% | 97.49% | 3003 ms | ↑ 1.06x | 1 | 9h 60m | 27d ago | 2h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.77% | 96.29% | 96.29% | 3186 ms | ↑ 1.29x | 25 | 6m | 9d ago | 2h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.63% | 99.68% | 99.68% | 2902 ms | ↑ 1.35x | 2 | 25m | 21d ago | 2h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.68% | 84.72% | 84.72% | 1592 ms | ↑ 1.31x | 4 | 5m | 21d ago | 2h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.75% | 99.78% | 99.78% | 1490 ms | ↑ 1.19x | 3 | 0s | 29d ago | 2h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.51% | 99.43% | 99.43% | 1145 ms | ↑ 1.17x | 8 | 1m | 25d ago | 2h ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2030 ms | ↓ 0.94x | 0 | — | — | 2h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.86% | 99.70% | 99.70% | 930 ms | → 1.01x | 2 | 5m | 26d ago | 2h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.82% | 99.86% | 99.86% | 3601 ms | ↑ 2.05x | 4 | 0s | 13d ago | 2h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.86% | 99.81% | 99.81% | 809 ms | → 0.95x | 3 | 0s | 23d ago | 2h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.89% | 98.57% | 98.57% | 2109 ms | → 1.01x | 2 | 0s | 21d ago | 2h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.64% | 96.66% | 96.66% | 1758 ms | ↑ 1.35x | 7 | 0s | 14d ago | 2h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.58% | 91.19% | 91.19% | 4388 ms | ↑ 1.64x | 10 | 1m | 21d ago | 2h ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2435 ms | → 1.00x | 0 | — | — | 2h ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 94.29% | 94.35% | 94.35% | 1146 ms | ↓ 0.44x | 4 | 4h 8m | 9d ago | 2h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.82% | 98.58% | 98.58% | 625 ms | → 1.01x | 2 | 10m | 22d ago | 2h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.72% | 98.62% | 98.62% | 3015 ms | ↑ 1.23x | 7 | 0s | 13d ago | 2h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2108 ms | → 1.00x | 0 | — | — | 2h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.03% | 96.84% | 96.84% | 3671 ms | ↑ 1.40x | 24 | 1m | 9d ago | 2h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1130 ms | → 1.00x | 0 | — | — | 2h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 52.07% | 20.22% | 20.22% | 869 ms | → 1.04x | 2 | 5d 1h | 10d ago | 2h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.79% | 99.76% | 99.76% | 1380 ms | ↓ 0.88x | 4 | 3m | 20d ago | 2h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.89% | 97.77% | 97.77% | 1738 ms | ↑ 1.36x | 2 | 0s | 21d ago | 2h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.93% | 99.91% | 99.91% | 1584 ms | ↑ 1.22x | 1 | 0s | 23d ago | 2h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.86% | 85.54% | 85.54% | 3129 ms | ↑ 1.52x | 3 | 0s | 14d ago | 2h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 91.48% | 96.13% | 96.13% | 1986 ms | ↑ 1.49x | 5 | 15h 59m | 12d ago | 2h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.85% | 99.85% | 1884 ms | ↑ 1.48x | 1 | 0s | 18d ago | 2h ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 52.07% | 8.43% | 8.43% | 2713 ms | ↑ 1.14x | 3 | 3d 9h | 14d ago | 2h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1064 ms | ↓ 0.66x | 0 | — | — | 2h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.72% | 99.84% | 99.84% | 2224 ms | ↑ 1.31x | 2 | 30m | 16d ago | 2h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.89% | 99.93% | 99.93% | 1292 ms | ↑ 2.33x | 2 | 0s | 7d ago | 2h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 66.11% | 10.59% | 10.59% | 2115 ms | → 1.01x | 3 | 2d 9h | 16d ago | 2h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.82% | 99.87% | 99.87% | 3578 ms | ↑ 1.84x | 4 | 0s | 13d ago | 2h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 95.08% | 95.12% | 95.12% | 1828 ms | ↑ 1.07x | 4 | 5h 15m | 23d ago | 2h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3194 ms | → 1.00x | 0 | — | — | 2h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.79% | 99.76% | 99.76% | 3924 ms | ↑ 2.30x | 3 | 7m | 21d ago | 2h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.40% | 99.88% | 99.88% | 1441 ms | ↑ 1.22x | 3 | 1h 27m | 12d ago | 2h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.91% | 99.91% | 3135 ms | ↑ 1.97x | 1 | 0s | 23d ago | 2h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.54% | 99.72% | 99.72% | 2673 ms | ↑ 1.89x | 5 | 14m | 23d ago | 2h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.89% | 97.56% | 97.56% | 1185 ms | → 1.04x | 1 | 10m | 21d ago | 2h ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.54% | 99.79% | 99.79% | 2450 ms | ↑ 1.22x | 11 | 15s | 17d ago | 2h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.93% | 99.82% | 99.82% | 2904 ms | ↑ 2.85x | 1 | 0s | 24d ago | 2h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.79% | 99.02% | 99.02% | 1477 ms | ↑ 1.25x | 5 | 0s | 20d ago | 2h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.93% | 99.99% | 99.99% | 411 ms | ↓ 0.53x | 1 | 0s | 29d ago | 2h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.80% | 96.39% | 98.65% | 98.65% | 3435 ms | ↑ 1.23x | 71 | 6m | 7d ago | 2h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.72% | 99.73% | 99.73% | 3898 ms | ↑ 1.29x | 7 | 0s | 7d ago | 2h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.80% | 52.06% | 8.44% | 8.44% | 1481 ms | → 1.05x | 4 | 2d 12h | 7d ago | 2h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 99.61% | 99.59% | 99.59% | 2209 ms | ↑ 1.29x | 8 | 0s | 6d ago | 2h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.58% | 87.78% | 87.78% | 1563 ms | ↑ 1.12x | 10 | 1m | 6d ago | 2h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.86% | 99.91% | 99.91% | 2067 ms | ↑ 1.17x | 3 | 0s | 6d ago | 2h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.65% | 99.64% | 99.64% | 915 ms | ↓ 0.84x | 9 | 0s | 7d ago | 2h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.89% | 98.74% | 98.74% | 1602 ms | ↑ 1.10x | 2 | 0s | 6d ago | 2h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.80% | 99.54% | 99.72% | 99.72% | 3624 ms | ↑ 1.35x | 9 | 3m | 11h ago | 2h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 99.75% | 20.65% | 20.65% | 1594 ms | ↓ 0.89x | 6 | 0s | 6d ago | 2h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 52.68% | 8.47% | 8.47% | 1441 ms | ↓ 0.92x | 5 | 1d 24h | 4d ago | 2h ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 52.02% | 8.36% | 8.36% | 2825 ms | → 1.02x | 2 | 5d 1h | 5d ago | 2h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.80% | 98.83% | 99.62% | 99.62% | 3168 ms | ↑ 1.86x | 4 | 1h 8m | 14h ago | 2h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.82% | 99.84% | 99.84% | 2774 ms | ↑ 1.13x | 4 | 0s | 1d ago | 2h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 64.62% | 10.39% | 10.39% | 920 ms | ↓ 0.56x | 38 | 4h 34m | 3d ago | 2h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 51.80% | 8.82% | 8.82% | 1950 ms | ↑ 1.25x | 2 | 5d 1h | 6d ago | 2h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 66.11% | 11.46% | 11.46% | 1684 ms | ↓ 0.63x | 3 | 2d 9h | 4d ago | 2h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.80% | 51.67% | 8.28% | 8.28% | 2512 ms | ↑ 1.31x | 6 | 1d 16h | 6d ago | 2h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.86% | 53.43% | 53.43% | 3251 ms | ↑ 1.41x | 3 | 0s | 6d ago | 2h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.80% | 99.82% | 54.64% | 54.64% | 3074 ms | ↑ 1.23x | 4 | 0s | 6h ago | 2h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 51.83% | 39.27% | 39.27% | 1537 ms | ↓ 0.68x | 3 | 3d 9h | 5d ago | 2h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.80% | 99.79% | 97.76% | 97.76% | 2504 ms | ↑ 1.11x | 5 | 0s | 2d ago | 2h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 98.17% | 97.67% | 97.67% | 3319 ms | ↓ 0.92x | 42 | 3m | 6d ago | 2h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.80% | 73.39% | 66.46% | 66.46% | 1748 ms | ↑ 1.12x | 6 | 21h 2m | 3d ago | 2h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 91.40% | 92.91% | 92.91% | 3772 ms | ↓ 0.88x | 3 | 13h 10m | 6d ago | 2h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.87% | 99.92% | 99.92% | 2245 ms | ↑ 1.14x | 2 | 0s | 3d ago | 2h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.80% | 99.71% | 99.05% | 99.05% | 3676 ms | ↑ 1.53x | 6 | 0s | 7d ago | 2h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.80% | 99.71% | 98.01% | 98.01% | 3520 ms | ↑ 1.24x | 6 | 2m | 2h ago | 2h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.61% | 99.66% | 99.66% | 2554 ms | ↑ 1.70x | 8 | 0s | 6d ago | 2h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.86% | 98.35% | 98.35% | 2074 ms | ↑ 1.11x | 3 | 0s | 4d ago | 2h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.92% | 99.92% | 99.92% | 2009 ms | ↑ 1.05x | 1 | 0s | 2d ago | 2h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 99.03% | 93.74% | 93.74% | 4102 ms | → 1.03x | 20 | 4m | 5d ago | 2h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.80% | 99.88% | 99.92% | 99.92% | 1741 ms | ↑ 1.22x | 2 | 0s | 23h ago | 2h ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.78% | 99.78% | 99.78% | 99.78% | 791 ms | → 1.00x | 1 | 0s | 6d ago | 2h ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.78% | 99.78% | 99.78% | 99.78% | 974 ms | → 1.00x | 1 | 0s | 3d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.78% | 99.59% | 99.80% | 99.80% | 3957 ms | → 1.04x | 1 | 0s | 6d ago | 2h ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.74% | 99.74% | 99.74% | 99.74% | 3057 ms | → 1.00x | 1 | 0s | 4d ago | 2h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.68% | 99.68% | 99.68% | 99.68% | 845 ms | → 1.00x | 1 | 0s | 4d ago | 2h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.60% | 89.17% | 14.46% | 14.46% | 2147 ms | ↑ 1.12x | 5 | 9h 44m | 2d ago | 2h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.60% | 99.26% | 99.71% | 99.71% | 3296 ms | ↑ 1.60x | 5 | 1h | 3d ago | 2h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.60% | 29.93% | 85.72% | 85.72% | 3191 ms | ↑ 1.07x | 3 | 6d | 2d ago | 2h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.61% | 90.87% | 90.87% | 870 ms | ↓ 0.86x | 3 | 40m | 3d ago | 2h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.47% | 99.16% | 99.16% | 2002 ms | ↑ 1.50x | 13 | 46s | 6d ago | 2h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.47% | 99.90% | 99.90% | 2630 ms | ↑ 1.33x | 11 | 2m | 6d ago | 2h ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.26% | 99.31% | 99.31% | 2216 ms | ↓ 0.92x | 11 | 3m | 3d ago | 2h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 52.05% | 21.90% | 21.90% | 3166 ms | ↑ 1.24x | 2 | 5d 1h | 3d ago | 2h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.79% | 99.83% | 99.83% | 4563 ms | ↑ 1.88x | 5 | 0s | 5d ago | 2h ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.60% | 94.44% | 96.25% | 96.25% | 1337 ms | ↓ 0.89x | 27 | 49m | 16h ago | 2h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.60% | 99.75% | 99.72% | 99.72% | 3288 ms | ↑ 1.50x | 6 | 0s | 5d ago | 2h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.62% | 98.97% | 98.97% | 3433 ms | ↑ 1.90x | 9 | 32m | 5d ago | 2h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.94% | 82.53% | 82.53% | 3593 ms | → 0.99x | 28 | 22s | 5d ago | 2h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.60% | 98.29% | 96.33% | 96.33% | 4212 ms | ↑ 1.58x | 21 | 15m | 3d ago | 2h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.60% | 99.49% | 99.49% | 99.49% | 4559 ms | → 1.00x | 4 | 0s | 14h ago | 2h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.60% | 99.79% | 98.39% | 98.39% | 3267 ms | ↑ 1.74x | 4 | 5m | 3d ago | 2h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.60% | 99.75% | 97.74% | 97.74% | 2844 ms | ↑ 1.06x | 6 | 0s | 23h ago | 2h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.60% | 99.43% | 99.55% | 99.55% | 821 ms | ↓ 0.81x | 11 | 7m | 3d ago | 2h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.60% | 99.61% | 98.39% | 98.39% | 3644 ms | ↑ 1.69x | 9 | 0s | 1d ago | 2h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.60% | 99.68% | 99.83% | 99.83% | 1330 ms | ↓ 0.90x | 7 | 1m | 6d ago | 2h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.60% | 95.28% | 95.34% | 95.34% | 2079 ms | ↓ 0.86x | 5 | 2h 34m | 6d ago | 2h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.36% | 99.08% | 99.08% | 778 ms | ↓ 0.54x | 15 | 1m | 5d ago | 2h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.60% | 99.86% | 98.48% | 98.48% | 2008 ms | → 1.01x | 2 | 10m | 3d ago | 2h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.60% | 85.84% | 85.88% | 85.88% | 1977 ms | ↑ 1.11x | 8 | 7h 49m | 2d ago | 2h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.60% | 51.79% | 23.16% | 23.16% | 965 ms | ↑ 1.28x | 4 | 2d 12h | 6d ago | 2h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.60% | 94.74% | 94.79% | 94.79% | 2822 ms | ↑ 1.21x | 6 | 2h 49m | 4d ago | 2h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.66% | 99.70% | 99.70% | 631 ms | → 0.98x | 6 | 2m | 6d ago | 2h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.56% | 99.56% | 99.56% | 99.56% | 1546 ms | → 1.00x | 1 | 19m | 3d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.48% | 99.48% | 99.48% | 99.48% | 2161 ms | → 1.00x | 1 | 20m | 4d ago | 2h ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.48% | 99.48% | 99.48% | 99.48% | 2914 ms | → 1.00x | 1 | 20m | 3d ago | 2h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.40% | 98.95% | 99.65% | 99.65% | 4212 ms | ↑ 1.26x | 28 | 43s | 5d ago | 2h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.40% | 98.60% | 99.44% | 99.44% | 4237 ms | ↑ 1.44x | 32 | 56s | 5d ago | 2h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.39% | 86.92% | 80.97% | 80.97% | 3690 ms | ↓ 0.53x | 229 | 7m | 12h ago | 2h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.39% | 99.68% | 99.74% | 99.74% | 2851 ms | ↑ 1.68x | 5 | 8m | 5d ago | 2h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.39% | 99.54% | 99.54% | 99.54% | 671 ms | ↓ 0.19x | 3 | 20m | 6d ago | 2h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.39% | 64.70% | 59.18% | 59.18% | 2474 ms | ↑ 1.30x | 21 | 8h 24m | 7d ago | 2h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.39% | 99.64% | 99.72% | 99.72% | 3851 ms | ↑ 1.87x | 8 | 0s | 5d ago | 2h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.39% | 99.54% | 86.64% | 86.64% | 3055 ms | ↑ 2.37x | 8 | 5m | 23h ago | 2h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.39% | 99.53% | 98.41% | 98.41% | 3330 ms | ↑ 2.27x | 11 | 54s | 6d ago | 2h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.39% | 99.61% | 64.19% | 64.19% | 1805 ms | ↑ 1.62x | 9 | 1m | 6d ago | 2h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.34% | 99.34% | 99.34% | 99.34% | 1428 ms | → 1.00x | 3 | 0s | 11h ago | 2h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.22% | 99.22% | 99.22% | 99.22% | 1170 ms | → 1.00x | 3 | 0s | 3h ago | 2h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.20% | 99.40% | 98.93% | 98.93% | 2792 ms | ↑ 1.10x | 13 | 5m | 4d ago | 2h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.20% | 99.57% | 99.63% | 99.63% | 1732 ms | ↓ 0.87x | 5 | 8m | 1d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.19% | 99.78% | 99.83% | 99.83% | 3057 ms | ↑ 1.63x | 2 | 20m | 10h ago | 2h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.19% | 99.50% | 96.91% | 96.91% | 4094 ms | ↑ 2.15x | 10 | 2m | 5d ago | 2h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.19% | 99.68% | 97.65% | 97.65% | 2872 ms | ↑ 1.62x | 7 | 1m | 2d ago | 2h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.19% | 65.89% | 19.15% | 19.15% | 2200 ms | ↑ 1.14x | 7 | 1d 1h | 5d ago | 2h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.01% | 58.06% | 78.13% | 78.13% | 184 ms | ↓ 0.73x | 8 | 1d 6h | 12h ago | 2h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.01% | 99.16% | 97.66% | 97.66% | 4318 ms | ↑ 1.25x | 23 | 0s | 2d ago | 2h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.01% | 99.52% | 99.58% | 99.58% | 863 ms | ↑ 1.19x | 8 | 0s | 12h ago | 2h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (83)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.99% | 99.68% | 99.69% | 99.69% | 4227 ms | ↑ 2.25x | 8 | 0s | 15h ago | 2h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 98.95% | 98.95% | 98.95% | 98.95% | 1559 ms | → 1.00x | 4 | 0s | 5d ago | 2h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.81% | 99.23% | 99.84% | 99.84% | 4284 ms | ↑ 1.69x | 21 | 0s | 3d ago | 2h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.80% | 99.43% | 97.59% | 97.59% | 3606 ms | ↑ 1.21x | 13 | 3m | 4d ago | 2h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.79% | 99.39% | 97.60% | 97.60% | 1169 ms | ↑ 1.14x | 8 | 20m | 3d ago | 2h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.79% | 99.71% | 98.71% | 98.71% | 1541 ms | ↑ 1.96x | 7 | 0s | 6h ago | 2h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.50% | 95.91% | 95.91% | 2219 ms | ↑ 1.22x | 8 | 12m | 5d ago | 2h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.69% | 98.69% | 98.69% | 98.69% | 1409 ms | → 1.00x | 5 | 0s | 2d ago | 2h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.61% | 51.89% | 77.54% | 77.54% | 3473 ms | ↑ 1.11x | 3 | 3d 9h | 6d ago | 2h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.59% | 51.59% | 8.42% | 8.42% | 3343 ms | ↑ 1.78x | 5 | 2d 1h | 2d ago | 2h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.58% | 96.51% | 96.51% | 96.51% | 2480 ms | ↓ 0.82x | 6 | 2h 14m | 18h ago | 2h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.58% | 99.71% | 94.83% | 94.83% | 1444 ms | ↓ 0.89x | 2 | 51m | 23h ago | 2h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 98.41% | 99.68% | 99.61% | 99.61% | 2427 ms | ↑ 1.31x | 4 | 20m | 2d ago | 2h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.38% | 99.54% | 66.55% | 66.55% | 2554 ms | ↑ 1.16x | 9 | 7m | 1d ago | 2h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.38% | 64.55% | 54.32% | 54.32% | 2395 ms | → 0.96x | 14 | 12h 51m | 6d ago | 2h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.38% | 86.83% | 81.52% | 81.52% | 4716 ms | → 1.04x | 263 | 4m | 20h ago | 2h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.38% | 98.57% | 89.08% | 89.08% | 2150 ms | → 1.00x | 32 | 2m | 14h ago | 2h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.21% | 94.81% | 98.75% | 98.75% | 4186 ms | ↑ 1.17x | 93 | 8m | 3d ago | 2h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.21% | 98.84% | 99.24% | 99.24% | 1806 ms | ↓ 0.70x | 32 | 0s | 21h ago | 2h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.21% | 86.83% | 83.48% | 83.48% | 2050 ms | ↓ 0.76x | 240 | 6m | 5d ago | 2h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.19% | 87.61% | 65.03% | 65.03% | 4500 ms | → 0.99x | 251 | 4m | 3h ago | 2h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.18% | 60.13% | 27.37% | 27.37% | 2890 ms | ↓ 0.94x | 21 | 10h 32m | 3d ago | 2h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.02% | 75.31% | 75.33% | 75.33% | 3672 ms | ↓ 0.88x | 294 | 12m | 2d ago | 2h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.98% | 93.51% | 91.40% | 91.40% | 2192 ms | ↑ 1.13x | 16 | 1h 50m | 6d ago | 2h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 97.98% | 65.39% | 43.54% | 43.54% | 2698 ms | ↑ 1.17x | 21 | 8h 13m | 17h ago | 2h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 97.77% | 92.36% | 92.43% | 92.43% | 3574 ms | → 0.99x | 42 | 21m | 15h ago | 2h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 97.77% | 95.93% | 61.37% | 61.37% | 873 ms | ↑ 1.13x | 20 | 1h 28m | 20h ago | 2h ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 97.64% | 97.47% | 97.73% | 97.73% | 2128 ms | → 1.03x | 7 | 6m | 5d ago | 2h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.19% | 89.44% | 76.53% | 76.53% | 3170 ms | ↑ 1.35x | 174 | 9m | 11h ago | 2h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.17% | 85.59% | 59.00% | 59.00% | 4663 ms | → 1.05x | 268 | 5m | 2d ago | 2h ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 97.17% | 94.03% | 94.10% | 94.10% | 1766 ms | ↓ 0.66x | 16 | 51m | 6d ago | 2h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 97.02% | 84.16% | 83.49% | 83.49% | 4465 ms | → 1.04x | 247 | 11m | 24h ago | 2h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.82% | 99.09% | 99.84% | 99.84% | 3463 ms | ↑ 1.87x | 25 | 0s | 5d ago | 2h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 96.77% | 86.49% | 84.54% | 84.54% | 4455 ms | ↑ 1.08x | 264 | 4m | 23h ago | 2h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.76% | 38.66% | 23.84% | 23.84% | 3202 ms | ↓ 0.79x | 20 | 18h 40m | 5d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 96.36% | 77.74% | 34.47% | 34.47% | 3562 ms | ↑ 1.67x | 24 | 4h 9m | 5d ago | 2h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 96.34% | 96.34% | 96.34% | 96.34% | 2417 ms | → 1.00x | 9 | 11m | 2d ago | 2h ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 96.34% | 96.34% | 96.34% | 96.34% | 2720 ms | → 1.00x | 10 | 8m | 5d ago | 2h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 96.15% | 59.67% | 79.86% | 79.86% | 3371 ms | ↑ 1.54x | 4 | 3d 13h | 21d ago | 2h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 96.15% | 98.25% | 98.25% | 98.25% | 3009 ms | ↓ 0.92x | 12 | 18m | 5d ago | 2h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 96.04% | 96.04% | 96.04% | 96.04% | 3082 ms | → 1.00x | 12 | 10m | 5d ago | 2h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.04% | 96.04% | 96.04% | 96.04% | 2483 ms | → 1.00x | 12 | 10m | 1d ago | 2h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 96.03% | 97.97% | 98.01% | 98.01% | 4582 ms | ↑ 1.64x | 43 | 4m | 2d ago | 2h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.01% | 86.73% | 84.03% | 84.03% | 4492 ms | → 1.05x | 278 | 4m | 12m ago | 2h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.63% | 67.31% | 56.94% | 56.94% | 3873 ms | ↑ 1.11x | 271 | 27m | 3d ago | 2h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.43% | 96.77% | 91.53% | 91.53% | 1310 ms | ↓ 0.87x | 34 | 23m | 5d ago | 2h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 95.41% | 97.61% | 98.64% | 98.64% | 3819 ms | → 1.00x | 57 | 4m | 11h ago | 2h ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.40% | 50.55% | 8.14% | 8.14% | 2804 ms | ↑ 1.27x | 41 | 5h 56m | 11m ago | 2h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 95.38% | 86.19% | 71.32% | 71.32% | 4508 ms | → 1.03x | 291 | 4m | 9m ago | 2h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 95.38% | 98.55% | 99.41% | 99.41% | 4268 ms | ↑ 2.33x | 24 | 10m | 5d ago | 2h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 95.29% | 95.29% | 95.29% | 95.29% | 2826 ms | → 1.00x | 11 | 13m | 5d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 94.94% | 98.89% | 87.90% | 87.90% | 3936 ms | ↑ 2.29x | 23 | 7m | 7h ago | 2h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 94.76% | 94.76% | 94.76% | 94.76% | 3500 ms | → 1.00x | 10 | 22m | 5d ago | 2h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 94.33% | 83.23% | 77.40% | 77.40% | 4802 ms | ↑ 1.06x | 347 | 6m | 1d ago | 2h ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 94.24% | 94.24% | 94.24% | 94.24% | 2162 ms | → 1.00x | 11 | 20m | 5d ago | 2h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 94.24% | 94.24% | 94.24% | 94.24% | 2198 ms | → 1.00x | 11 | 20m | 4d ago | 2h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.93% | 98.85% | 99.29% | 99.29% | 3950 ms | ↑ 2.46x | 4 | 2h 15m | 5d ago | 2h ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 93.80% | 98.76% | 39.27% | 39.27% | 1167 ms | ↓ 0.91x | 11 | 43m | 21h ago | 2h ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 93.61% | 74.82% | 74.82% | 74.82% | 3491 ms | → 1.00x | 14 | 1d 1h | 5d ago | 2h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 93.60% | 98.34% | 99.00% | 99.00% | 4181 ms | ↑ 1.70x | 17 | 31m | 21h ago | 2h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 93.60% | 98.80% | 96.96% | 96.96% | 4031 ms | ↑ 1.56x | 10 | 47m | 21h ago | 2h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 93.60% | 98.76% | 54.26% | 54.26% | 4229 ms | ↑ 1.59x | 11 | 43m | 21h ago | 2h ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 93.46% | 85.20% | 85.20% | 85.20% | 3172 ms | → 1.00x | 12 | 1d 6h | 4d ago | 2h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 93.40% | 98.34% | 99.19% | 99.19% | 4257 ms | ↑ 2.56x | 16 | 33m | 21h ago | 2h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 93.32% | 84.79% | 77.89% | 77.89% | 4812 ms | → 1.05x | 306 | 5m | 18h ago | 2h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.71% | 98.64% | 95.78% | 95.78% | 1998 ms | ↑ 1.16x | 2 | 5h 55m | 1d ago | 2h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.71% | 91.78% | 67.23% | 67.23% | 3054 ms | → 1.05x | 33 | 1h 19m | 3h ago | 2h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.09% | 96.70% | 96.73% | 96.73% | 2262 ms | ↑ 1.56x | 6 | 3h 35m | 4d ago | 2h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 90.87% | 91.37% | 95.55% | 95.55% | 4183 ms | → 0.99x | 124 | 20m | 14h ago | 2h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 90.69% | 80.67% | 78.71% | 78.71% | 4761 ms | ↑ 1.18x | 237 | 15m | 3h ago | 2h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 86.75% | 50.00% | 8.04% | 8.04% | 4462 ms | ↑ 1.33x | 49 | 5h 5m | 2d ago | 2h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.64% | 45.79% | 35.34% | 35.34% | 3912 ms | ↑ 1.18x | 139 | 1h 49m | 2h ago | 2h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 85.69% | 49.23% | 9.14% | 9.14% | 4583 ms | ↑ 1.05x | 209 | 1h 5m | 3m ago | 2h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 85.12% | 54.77% | 89.27% | 89.27% | 688 ms | ↓ 0.37x | 189 | 1h 48m | 6d ago | 2h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.94% | 96.24% | 98.72% | 98.72% | 4501 ms | ↑ 1.40x | 59 | 16m | 2d ago | 2h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 84.34% | 14.89% | 6.68% | 6.68% | 2573 ms | → 1.00x | 3 | 8d | 3d ago | 2h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 83.70% | 83.70% | 83.70% | 83.70% | 1324 ms | → 1.00x | 1 | 1d 1h | 2d ago | 2h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.17% | 62.63% | 32.06% | 32.06% | 3237 ms | ↑ 1.32x | 10 | 20h 11m | 22h ago | 2h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 79.52% | 45.73% | 7.35% | 7.35% | 3794 ms | ↓ 0.86x | 149 | 1h 41m | 3h ago | 2h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 78.51% | 34.07% | 28.93% | 28.93% | 522 ms | ↓ 0.80x | 4 | 4d 7h | 10d ago | 2h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 35.63% | 76.23% | 76.28% | 76.28% | 1641 ms | ↑ 1.12x | 5 | 1d 16h | 5d ago | 2h ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 30.58% | 8.22% | 8.27% | 8.27% | 3405 ms | → 0.99x | 2 | 10d 7h | 15d ago | 2h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 26.32% | 5.43% | 15.87% | 15.87% | 1468 ms | → 1.00x | 1 | 28d 2h | 30d ago | 2h ago |

</details>

<details open>
<summary><strong>🔴 Down (190)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 90.89% | 89.57% | 91.52% | 91.52% | 2736 ms | ↑ 1.86x | 17 | 5h 35m | 12h ago | 2h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 90.84% | 47.34% | 7.65% | 7.65% | 916 ms | ↓ 0.77x | 70 | 3h 48m | 15h ago | 2h ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 90.08% | 90.08% | 90.08% | 90.08% | 766 ms | → 1.00x | 1 | 12h 18m | 14h ago | 2h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 87.60% | 97.67% | 98.07% | 98.07% | 2083 ms | → 1.03x | 4 | 5h 34m | 22h ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 84.21% | 93.95% | 94.01% | 94.01% | 3852 ms | ↑ 1.47x | 14 | 1h 56m | 20h ago | 2h ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 77.00% | 77.00% | 77.00% | 77.00% | 1448 ms | → 1.00x | 1 | 23h 50m | 1d ago | 2h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 72.67% | 90.47% | 90.48% | 90.48% | 3822 ms | ↑ 1.42x | 82 | 42m | 2d ago | 2h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 70.45% | 54.34% | 49.37% | 49.37% | 4357 ms | → 1.03x | 58 | 4h 34m | 2d ago | 2h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.03% | 36.84% | 11.51% | 11.51% | 4647 ms | ↑ 1.12x | 249 | 1h 14m | 2h ago | 2h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 68.42% | 88.15% | 88.15% | 88.15% | 1381 ms | ↓ 0.54x | 1 | 2d 4h | 2d ago | 2h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 67.80% | 67.80% | 67.80% | 67.80% | 1455 ms | → 1.00x | 1 | 1d 17h | 2d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 65.99% | 89.16% | 89.22% | 89.22% | 3992 ms | ↑ 1.76x | 13 | 4h 6m | 2d ago | 2h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 64.17% | 93.31% | 93.31% | 93.31% | 853 ms | ↓ 0.83x | 6 | 10h 11m | 3d ago | 2h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 62.00% | 57.30% | 61.83% | 61.83% | 4852 ms | ↑ 1.05x | 522 | 17m | 2h ago | 2h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 59.92% | 58.83% | 31.69% | 31.69% | 3757 ms | ↑ 1.77x | 23 | 10h 15m | 3d ago | 2h ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 59.69% | 43.10% | 43.10% | 43.10% | 524 ms | → 1.00x | 2 | 1d 14h | 2d ago | 2h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 52.83% | 90.75% | 91.03% | 91.03% | 1512 ms | ↑ 1.14x | 21 | 3h 50m | 21h ago | 2h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 52.64% | 52.64% | 52.64% | 52.64% | 4699 ms | → 1.00x | 8 | 8h 42m | 3d ago | 2h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.98% | 31.19% | 9.23% | 9.23% | 4416 ms | ↑ 1.11x | 371 | 55m | 2h ago | 2h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 46.15% | 89.42% | 86.52% | 86.52% | 2674 ms | ↑ 1.23x | 20 | 4h 35m | 4d ago | 2h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 11.04% | 11.04% | 11.04% | 11.04% | 3395 ms | → 1.00x | 1 | 5d 16h | 6d ago | 2h ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.59% | 8.59% | 8.59% | 8.59% | 3173 ms | → 1.00x | 37 | 3h 27m | 4h ago | 2h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 3.24% | 82.57% | 82.58% | 82.58% | 2196 ms | ↑ 1.87x | 2 | 3d 9h | 7d ago | 2h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.99% | 36.52% | 66.55% | 66.55% | 2172 ms | ↓ 0.67x | 256 | 1h 51m | 1d ago | 2h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 47.66% | 90.80% | 90.80% | — | — | 5 | 3d 24h | 20d ago | 2h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 75.18% | 75.18% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 46.40% | 80.83% | 80.83% | — | — | 29 | 16h 35m | 20d ago | 2h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 69.62% | 83.72% | 83.72% | — | — | 2 | 5d 23h | 12d ago | 2h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.26% | 6.26% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 11.85% | 13.74% | 13.74% | — | — | 11 | 2d 12h | 20d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.72% | 3.72% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 47.42% | 91.06% | 91.06% | — | — | 7 | 2d 20h | 20d ago | 2h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.97% | 39.97% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 28.00% | 28.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 39.46% | 81.73% | 81.73% | — | — | 160 | 3h 4m | 20d ago | 2h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 41.25% | 66.20% | 66.20% | — | — | 145 | 3h 21m | 20d ago | 2h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 48.16% | 34.21% | 34.21% | — | — | 1 | 19d 22h | 20d ago | 2h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 47.83% | 91.52% | 91.52% | — | — | 1 | 19d 22h | 20d ago | 2h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 11.51% | 68.93% | 68.93% | — | — | 124 | 5h 13m | 26d ago | 2h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 47.75% | 84.53% | 84.53% | — | — | 3 | 6d 15h | 20d ago | 2h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.67% | 18.67% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 48.05% | 58.67% | 58.67% | — | — | 7 | 2d 20h | 20d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 41.46% | 41.46% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.86% | 4.02% | 4.02% | — | — | 3 | 9d 22h | 20d ago | 2h ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 48.13% | 91.68% | 91.68% | — | — | 1 | 19d 22h | 20d ago | 2h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.78% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 20d ago | 2h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 38.90% | 56.95% | 56.95% | — | — | 8 | 2d 17h | 20d ago | 2h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 32.28% | 32.28% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 13.97% | 2.25% | 2.25% | — | — | 7 | 3d 21h | 20d ago | 2h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 23.04% | 44.76% | 44.76% | — | — | 4 | 5d 19h | 16d ago | 2h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 59.92% | 59.92% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 31.46% | 28.27% | 28.27% | — | — | 157 | 3h 23m | 20d ago | 2h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 47.81% | 33.00% | 33.00% | — | — | 5 | 3d 24h | 20d ago | 2h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.78% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 20d ago | 2h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 62.80% | 62.80% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.95% | 6.95% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 72.25% | 72.25% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 47.61% | 91.46% | 91.46% | — | — | 7 | 2d 20h | 20d ago | 2h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.97% | 9.97% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 41.29% | 87.28% | 87.28% | — | — | 151 | 3h 12m | 20d ago | 2h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 9h | 5d ago | 2h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 37.08% | 37.08% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 58.09% | 58.09% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 19.00% | 84.17% | 84.17% | — | — | 91 | 6h 44m | 20d ago | 2h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 51.30% | 51.30% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 46.63% | 46.63% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 47.74% | 91.47% | 91.47% | — | — | 3 | 6d 15h | 20d ago | 2h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 64.59% | 64.59% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.74% | 42.91% | 42.91% | — | — | 2 | 14d 22h | 20d ago | 2h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 21h | 23d ago | 2h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 19h | 23d ago | 2h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 10h | 5d ago | 2h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 31.48% | 36.13% | 36.13% | — | — | 272 | 1h 53m | 20d ago | 2h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 14.72% | 2.87% | 2.87% | — | — | 4 | 6d 18h | 20d ago | 2h ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 45.84% | 45.84% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 46.60% | 91.41% | 91.41% | — | — | 21 | 22h 53m | 20d ago | 2h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 48.13% | 36.93% | 36.93% | — | — | 1 | 19d 22h | 20d ago | 2h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 47.72% | 91.34% | 91.34% | — | — | 4 | 4d 23h | 20d ago | 2h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 41.91% | 41.91% | 41.91% | — | — | 1 | 19d 22h | 20d ago | 2h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 18.23% | 52.69% | 52.69% | — | — | 1 | 26d 12h | 27d ago | 2h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 44.32% | 88.77% | 88.77% | — | — | 82 | 5h 52m | 20d ago | 2h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.39% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 21d ago | 2h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 69.38% | 81.43% | 81.43% | — | — | 3 | 3d 21h | 11d ago | 2h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 19h | 23d ago | 2h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 22.27% | 87.07% | 87.07% | — | — | 5 | 5d 1h | 25d ago | 2h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 48.05% | 70.58% | 70.58% | — | — | 2 | 9d 23h | 20d ago | 2h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 47.65% | 47.65% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 46.86% | 85.34% | 85.34% | — | — | 28 | 17h 3m | 20d ago | 2h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 27.46% | 65.09% | 65.09% | — | — | 301 | 1h 47m | 20d ago | 2h ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.23% | 31.23% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 18.82% | 18.86% | 18.86% | — | — | 24 | 21h 4m | 20d ago | 2h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 9.98% | 15.98% | 15.98% | — | — | 212 | 2h 59m | 20d ago | 2h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 48.83% | 48.85% | 48.85% | — | — | 10 | 1d 6h | 8d ago | 2h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.60% | 26.60% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 9h | 6d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 46.83% | 74.48% | 74.48% | — | — | 32 | 14h 56m | 20d ago | 2h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 23.45% | 23.50% | 23.50% | — | — | 3 | 5d 6h | 15d ago | 2h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.27% | 19.27% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 54.62% | 54.62% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 9h | 5d ago | 2h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 60.87% | 60.87% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 48.01% | 56.60% | 56.60% | — | — | 3 | 6d 15h | 20d ago | 2h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 57.33% | 71.52% | 71.52% | — | — | 6 | 2d 16h | 16d ago | 2h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 38.18% | 6.12% | 6.12% | — | — | 3 | 7d 6h | 20d ago | 2h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 23h | 25d ago | 2h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 47.74% | 91.56% | 91.56% | — | — | 2 | 9d 23h | 20d ago | 2h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 47.46% | 90.36% | 90.36% | — | — | 6 | 3d 8h | 20d ago | 2h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 28.99% | 70.48% | 70.48% | — | — | 270 | 1h 56m | 20d ago | 2h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 2.18% | 82.76% | 82.76% | — | — | 3 | 9d 21h | 30d ago | 2h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 47.19% | 90.20% | 90.20% | — | — | 16 | 1d 6h | 20d ago | 2h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.75% | 21.75% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 8.59% | 8.58% | 8.58% | — | — | 3 | 6d 21h | 18d ago | 2h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 22.72% | 4.47% | 4.47% | — | — | 6 | 3d 15h | 9d ago | 2h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 48.06% | 37.91% | 37.91% | — | — | 3 | 6d 15h | 20d ago | 2h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 10.34% | 75.33% | 75.33% | — | — | 2 | 13d 23h | 27d ago | 2h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 22.37% | 29.43% | 29.43% | — | — | 74 | 7h 59m | 24d ago | 2h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.17% | 9.17% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 39.89% | 72.49% | 72.49% | — | — | 164 | 2h 59m | 20d ago | 2h ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 10h | 5d ago | 2h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 74.62% | 74.62% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 27.00% | 27.19% | 27.19% | — | — | 2 | 2d 16h | 5d ago | 2h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 48.06% | 57.15% | 57.15% | — | — | 2 | 9d 23h | 20d ago | 2h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 48.94% | 48.97% | 48.97% | — | — | 3 | 6d 14h | 19d ago | 2h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 17.06% | 17.06% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 2h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 36.37% | 27.87% | 27.87% | — | — | 3 | 6d 7h | 12d ago | 2h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.05% | 2.12% | 2.12% | — | — | 2 | 10d 4h | 20d ago | 2h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 11.29% | 11.34% | 11.34% | — | — | 2 | 10d 5h | 20d ago | 2h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 13.95% | 14.02% | 14.02% | — | — | 2 | 8d 18h | 17d ago | 2h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 55.10% | 55.10% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 47.79% | 91.52% | 91.52% | — | — | 2 | 9d 23h | 20d ago | 2h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 43.07% | 66.35% | 66.35% | — | — | 6 | 3d 12h | 21d ago | 2h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 54.93% | 91.71% | 91.71% | — | — | 8 | 2d 3h | 17d ago | 2h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 45.69% | 45.69% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 42.94% | 89.17% | 89.17% | — | — | 137 | 3h 30m | 20d ago | 2h ago |

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
