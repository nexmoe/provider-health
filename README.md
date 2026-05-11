# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 354 🟢 operational · 55 🟡 degraded · 191 🔴 down · 0 ⚫ unknown

_Updated 2026-05-11 06:43 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (354)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.81% | 92.20% | 92.20% | 765 ms | ↓ 0.63x | 4 | 0s | 23d ago | 21m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 74.00% | 11.09% | 11.09% | 2050 ms | → 1.00x | 5 | 1d 3h | 10d ago | 22m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.89% | 97.13% | 97.13% | 2502 ms | → 1.00x | 2 | 0s | 23d ago | 31m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 60.36% | 40.59% | 40.59% | 1628 ms | ↓ 0.80x | 3 | 2d 16h | 7d ago | 21m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.73% | 98.66% | 98.66% | 2255 ms | → 1.03x | 62 | 6m | 9d ago | 32m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.92% | 98.97% | 98.97% | 3955 ms | ↑ 1.05x | 21 | 0s | 15d ago | 32m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 97.60% | 91.79% | 91.79% | 1953 ms | ↑ 1.09x | 11 | 57m | 8d ago | 19m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1681 ms | ↓ 0.74x | 0 | — | — | 16m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.53% | 96.53% | 1720 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1160 ms | ↓ 0.81x | 0 | — | — | 16m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.45% | 91.45% | 1855 ms | → 1.02x | 0 | — | — | 33m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1370 ms | → 1.04x | 0 | — | — | 16m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.09% | 95.14% | 95.14% | 2684 ms | ↑ 1.22x | 5 | 3h 2m | 9d ago | 19m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.77% | 99.80% | 99.80% | 867 ms | ↓ 0.62x | 5 | 0s | 24d ago | 19m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.92% | 94.96% | 94.96% | 1412 ms | ↑ 1.21x | 8 | 4h 1m | 19d ago | 19m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.12% | 97.12% | 97.12% | 748 ms | ↓ 0.58x | 1 | 13h 57m | 18d ago | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 41.45% | 29.50% | 29.50% | 543 ms | ↓ 0.83x | 4 | 3d 19h | 12d ago | 27m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.90% | 99.90% | 551 ms | ↓ 0.59x | 2 | 9m | 14d ago | 19m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.47% | 95.99% | 95.99% | 2157 ms | ↑ 1.24x | 8 | 12m | 7d ago | 21m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.89% | 98.75% | 98.75% | 748 ms | ↓ 0.85x | 2 | 0s | 8d ago | 30m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 560 ms | ↓ 0.57x | 0 | — | — | 16m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.70% | 95.47% | 95.47% | 476 ms | ↓ 0.55x | 6 | 2m | 23d ago | 20m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2175 ms | → 1.00x | 0 | — | — | 16m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1902 ms | ↓ 0.95x | 0 | — | — | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.66% | 97.56% | 97.56% | 2898 ms | ↑ 1.39x | 6 | 5m | 15d ago | 20m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.93% | 95.99% | 95.99% | 179 ms | ↓ 0.27x | 1 | 12h 47m | 24d ago | 17m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.55% | 77.08% | 77.08% | 2311 ms | ↑ 1.16x | 31 | 1h 4m | 12d ago | 20m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1045 ms | ↓ 0.69x | 0 | — | — | 16m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 100.00% | 98.92% | 99.66% | 99.66% | 3353 ms | ↑ 1.11x | 27 | 45s | 7d ago | 32m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.66% | 96.93% | 96.93% | 1081 ms | ↓ 0.62x | 4 | 20m | 13d ago | 21m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 457 ms | ↓ 0.63x | 0 | — | — | 28m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.94% | 98.63% | 98.63% | 172 ms | ↓ 0.11x | 17 | 6m | 18d ago | 20m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.82% | 94.75% | 94.75% | 2850 ms | ↑ 1.16x | 22 | 4m | 23d ago | 20m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 93.25% | 97.96% | 97.96% | 2392 ms | ↑ 2.08x | 10 | 2h 54m | 24d ago | 28m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2532 ms | ↓ 0.88x | 0 | — | — | 16m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2813 ms | → 1.03x | 0 | — | — | 16m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 65.99% | 88.85% | 88.85% | 1269 ms | ↓ 0.69x | 2 | 3d 12h | 23d ago | 22m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.89% | 99.47% | 99.47% | 2021 ms | → 1.02x | 2 | 0s | 25d ago | 28m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.77% | 99.83% | 99.83% | 4327 ms | ↑ 1.66x | 5 | 0s | 7d ago | 27m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.01% | 96.96% | 96.96% | 3279 ms | ↑ 1.20x | 23 | 53s | 21d ago | 21m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.74% | 21.28% | 21.28% | 1205 ms | ↓ 0.75x | 6 | 0s | 8d ago | 28m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 94.56% | 94.61% | 94.61% | 1492 ms | ↑ 1.16x | 3 | 11h 20m | 24d ago | 19m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1267 ms | → 0.98x | 0 | — | — | 16m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.53% | 50.07% | 50.07% | 3684 ms | ↑ 1.60x | 104 | 18m | 14d ago | 28m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.70% | 97.63% | 97.63% | 3478 ms | ↑ 1.64x | 7 | 0s | 22d ago | 20m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1218 ms | ↑ 1.31x | 0 | — | — | 17m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 95.63% | 95.63% | 861 ms | ↓ 0.81x | 2 | 0s | 9d ago | 21m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1836 ms | → 0.97x | 0 | — | — | 16m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.81% | 48.61% | 48.61% | 946 ms | ↑ 1.21x | 41 | 5m | 20d ago | 22m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.66% | 97.08% | 97.08% | 2565 ms | ↑ 1.26x | 5 | 12m | 15d ago | 20m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 85.55% | 45.76% | 45.76% | 221 ms | ↓ 0.58x | 1 | 2d 17h | 25d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1050 ms | ↓ 0.74x | 0 | — | — | 16m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.70% | 99.59% | 99.59% | 3143 ms | ↑ 1.11x | 7 | 0s | 23d ago | 27m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3023 ms | → 1.00x | 0 | — | — | 16m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.85% | 96.79% | 96.79% | 1786 ms | ↓ 0.82x | 3 | 0s | 17d ago | 27m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.77% | 98.87% | 98.87% | 1452 ms | ↑ 1.31x | 4 | 2m | 10d ago | 21m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 33.40% | 41.30% | 41.30% | 1570 ms | → 1.00x | 1 | 8d 1h | 30d ago | 28m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.89% | 79.50% | 79.50% | 2104 ms | ↑ 1.19x | 2 | 0s | 16d ago | 22m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 60.37% | 60.37% | 1738 ms | ↑ 1.19x | 2 | 0s | 19d ago | 22m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2254 ms | → 1.01x | 0 | — | — | 16m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.32% | 76.11% | 76.11% | 2666 ms | ↑ 1.15x | 4 | 1h 5m | 16d ago | 22m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 984 ms | ↓ 0.89x | 0 | — | — | 17m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.89% | 98.03% | 98.03% | 2452 ms | ↑ 1.10x | 2 | 0s | 23d ago | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4475 ms | → 1.00x | 0 | — | — | 16m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.89% | 91.81% | 91.81% | 825 ms | ↓ 0.78x | 2 | 0s | 23d ago | 22m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.89% | 97.79% | 97.79% | 706 ms | ↓ 0.67x | 2 | 0s | 24d ago | 19m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.66% | 99.83% | 99.83% | 276 ms | ↓ 0.31x | 7 | 1m | 8d ago | 20m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 74.00% | 60.76% | 60.76% | 2723 ms | ↑ 1.37x | 21 | 6h 5m | 9d ago | 20m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1920 ms | ↓ 0.95x | 0 | — | — | 16m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.77% | 40.36% | 40.36% | 1016 ms | ↑ 1.21x | 1 | 40m | 25d ago | 22m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.92% | 71.33% | 71.33% | 726 ms | ↓ 0.73x | 1 | 0s | 23d ago | 22m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 98.09% | 49.34% | 49.34% | 1705 ms | ↑ 1.31x | 13 | 32m | 13d ago | 28m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.57% | 97.57% | 2782 ms | ↑ 1.61x | 1 | 0s | 23d ago | 21m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.70% | 46.41% | 46.41% | 1126 ms | ↓ 0.89x | 6 | 3m | 19d ago | 22m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 37.98% | 37.98% | 1422 ms | ↓ 0.70x | 1 | 0s | 25d ago | 28m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1157 ms | ↓ 0.67x | 0 | — | — | 16m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.81% | 78.14% | 78.14% | 1787 ms | ↑ 1.10x | 4 | 0s | 18d ago | 22m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 73.84% | 54.91% | 54.91% | 1030 ms | ↓ 0.69x | 14 | 9h 22m | 8d ago | 22m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.62% | 97.79% | 97.79% | 2002 ms | ↓ 0.90x | 5 | 8m | 23d ago | 22m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 98.10% | 97.74% | 97.74% | 2538 ms | ↓ 0.87x | 41 | 3m | 8d ago | 20m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.74% | 99.72% | 99.72% | 3110 ms | ↑ 1.35x | 6 | 0s | 7d ago | 27m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.85% | 57.59% | 57.59% | 1145 ms | → 0.97x | 3 | 0s | 20d ago | 22m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2904 ms | → 1.00x | 0 | — | — | 17m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.73% | 99.07% | 99.07% | 1662 ms | ↑ 1.18x | 6 | 0s | 22d ago | 22m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.89% | 87.73% | 87.73% | 2108 ms | ↓ 0.92x | 2 | 0s | 23d ago | 21m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 65.54% | 65.54% | 65.54% | 568 ms | → 0.99x | 1 | 1d 24h | 24d ago | 17m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.81% | 99.51% | 99.51% | 970 ms | ↓ 0.76x | 4 | 0s | 23d ago | 22m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.69% | 97.74% | 97.74% | 2218 ms | ↑ 1.61x | 2 | 5h 35m | 23d ago | 22m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 75.64% | 25.26% | 25.26% | 471 ms | ↓ 0.34x | 2 | 2d 13h | 23d ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.72% | 99.72% | 2801 ms | ↑ 1.25x | 1 | 0s | 16d ago | 31m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1994 ms | → 1.00x | 0 | — | — | 16m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.74% | 97.93% | 97.93% | 3920 ms | → 1.04x | 29 | 2m | 22d ago | 32m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 803 ms | ↓ 0.80x | 1 | 0s | 20d ago | 28m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.77% | 66.60% | 66.60% | 2950 ms | ↑ 1.23x | 5 | 0s | 23d ago | 21m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 85.20% | 85.24% | 85.24% | 346 ms | ↓ 0.72x | 10 | 7h 2m | 23d ago | 19m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1220 ms | ↓ 0.81x | 0 | — | — | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.85% | 99.94% | 99.94% | 1121 ms | ↓ 0.86x | 3 | 0s | 16d ago | 32m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.03% | 99.70% | 99.70% | 3687 ms | ↑ 2.13x | 4 | 55m | 21d ago | 32m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.81% | 99.59% | 99.59% | 1709 ms | ↑ 1.09x | 4 | 0s | 8d ago | 31m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 51.94% | 69.53% | 69.53% | 2538 ms | ↑ 1.10x | 2 | 5d 17h | 18d ago | 20m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 100.00% | 53.21% | 89.36% | 89.36% | 521 ms | ↓ 0.39x | 165 | 2h 3m | 8d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 87.85% | 35.90% | 35.90% | 2700 ms | ↑ 1.51x | 24 | 2h 7m | 7d ago | 21m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1344 ms | → 0.98x | 0 | — | — | 16m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 81.82% | 73.00% | 73.00% | 1792 ms | ↑ 1.38x | 2 | 1d 23h | 26d ago | 19m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1463 ms | ↓ 0.81x | 0 | — | — | 16m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1180 ms | ↑ 1.29x | 0 | — | — | 19m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.92% | 98.92% | 570 ms | ↓ 0.78x | 0 | — | — | 22m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.81% | 98.39% | 98.39% | 2132 ms | ↑ 1.50x | 4 | 0s | 23d ago | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 98.06% | 95.46% | 95.46% | 456 ms | ↓ 0.20x | 16 | 23m | 24d ago | 19m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1082 ms | → 1.00x | 0 | — | — | 16m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 738 ms | ↓ 0.54x | 0 | — | — | 16m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1430 ms | ↓ 0.78x | 0 | — | — | 16m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 94.52% | 94.58% | 94.58% | 276 ms | ↓ 0.32x | 16 | 51m | 8d ago | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.66% | 98.38% | 98.38% | 314 ms | ↓ 0.68x | 5 | 12m | 22d ago | 20m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.55% | 98.85% | 98.85% | 901 ms | ↓ 0.70x | 11 | 0s | 14d ago | 23m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 60.49% | 9.10% | 9.10% | 2729 ms | → 0.99x | 2 | 4d | 7d ago | 27m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 94.15% | 93.13% | 93.13% | 1010 ms | ↓ 0.56x | 3 | 8h 20m | 8d ago | 20m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1115 ms | → 1.00x | 0 | — | — | 16m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 75.53% | 12.52% | 12.52% | 1074 ms | ↑ 1.09x | 1 | 5d 3h | 30d ago | 22m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 775 ms | ↑ 1.11x | 0 | — | — | 33m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.83% | 99.83% | 666 ms | → 1.01x | 1 | 0s | 28d ago | 32m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.47% | 99.11% | 99.11% | 179 ms | ↓ 0.34x | 11 | 2m | 7d ago | 20m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 829 ms | ↓ 0.84x | 0 | — | — | 31m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 95.73% | 95.78% | 95.78% | 1344 ms | ↓ 0.89x | 1 | 13h 10m | 24d ago | 17m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 100.00% | 99.24% | 99.24% | 99.24% | 1015 ms | ↓ 0.87x | 4 | 0s | 7d ago | 16m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.37% | 97.56% | 97.56% | 2405 ms | ↑ 2.01x | 7 | 50m | 23d ago | 21m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.63% | 99.72% | 99.72% | 461 ms | ↓ 0.80x | 7 | 4m | 17d ago | 32m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1294 ms | ↓ 0.93x | 0 | — | — | 17m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.41% | 98.57% | 98.57% | 4493 ms | ↑ 1.17x | 15 | 0s | 23d ago | 33m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 57.24% | 80.34% | 80.34% | 792 ms | ↓ 0.57x | 4 | 3d 13h | 23d ago | 20m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3511 ms | ↑ 1.84x | 1 | 0s | 30d ago | 31m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1414 ms | → 1.00x | 0 | — | — | 16m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.52% | 99.17% | 99.17% | 1512 ms | ↑ 1.19x | 11 | 55s | 8d ago | 31m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 60.54% | 34.48% | 34.48% | 748 ms | ↑ 1.05x | 1 | 8d 1h | 30d ago | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.16% | 98.01% | 98.01% | 4448 ms | ↑ 1.99x | 20 | 30s | 23d ago | 21m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1106 ms | ↓ 0.91x | 1 | 0s | 27d ago | 31m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.85% | 99.90% | 99.90% | 346 ms | ↓ 0.29x | 3 | 0s | 16d ago | 31m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.85% | 99.81% | 99.81% | 1638 ms | ↑ 1.08x | 3 | 0s | 23d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.81% | 99.85% | 99.85% | 2181 ms | ↑ 1.15x | 3 | 3m | 23d ago | 22m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.03% | 99.84% | 99.84% | 2404 ms | ↑ 1.48x | 25 | 0s | 7d ago | 32m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.25% | 99.30% | 99.30% | 1634 ms | ↑ 1.30x | 3 | 37m | 23d ago | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.89% | 87.96% | 87.96% | 1185 ms | → 0.97x | 2 | 0s | 17d ago | 21m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.93% | 99.58% | 99.58% | 1170 ms | → 1.00x | 1 | 0s | 26d ago | 32m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.60% | 95.42% | 95.42% | 3148 ms | ↑ 1.18x | 10 | 28m | 15d ago | 21m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 75.50% | 11.47% | 11.47% | 2583 ms | ↑ 2.03x | 2 | 2d 13h | 22d ago | 22m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 442 ms | ↓ 0.84x | 0 | — | — | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.74% | 99.74% | 99.74% | 2166 ms | → 0.97x | 6 | 0s | 16d ago | 31m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.63% | 87.88% | 87.88% | 1205 ms | ↓ 0.90x | 8 | 1m | 8d ago | 31m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 75.06% | 11.25% | 11.25% | 1533 ms | ↓ 0.77x | 12 | 10h 17m | 23d ago | 22m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.77% | 98.68% | 98.68% | 2716 ms | ↑ 1.74x | 5 | 0s | 23d ago | 21m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 60.27% | 77.72% | 77.72% | 2405 ms | → 0.96x | 3 | 2d 17h | 8d ago | 32m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.85% | 99.91% | 99.91% | 827 ms | ↓ 0.85x | 3 | 0s | 8d ago | 31m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.89% | 99.91% | 99.91% | 1744 ms | ↑ 1.11x | 2 | 0s | 21d ago | 32m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.63% | 99.64% | 99.64% | 858 ms | ↓ 0.77x | 9 | 0s | 9d ago | 30m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 60.33% | 24.85% | 24.85% | 242 ms | ↓ 0.88x | 4 | 2d | 8d ago | 21m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.03% | 99.55% | 99.55% | 1656 ms | → 1.00x | 2 | 1h 55m | 28d ago | 32m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1931 ms | ↓ 0.77x | 0 | — | — | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.78% | 98.92% | 98.92% | 1756 ms | ↓ 0.91x | 5 | 0s | 23d ago | 31m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.85% | 97.48% | 97.48% | 1162 ms | ↓ 0.84x | 3 | 0s | 24d ago | 19m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.81% | 97.03% | 97.03% | 2752 ms | ↑ 1.64x | 4 | 0s | 23d ago | 20m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.35% | 94.49% | 94.49% | 920 ms | ↓ 0.59x | 11 | 5m | 22d ago | 19m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 60.47% | 9.17% | 9.17% | 1435 ms | → 1.02x | 4 | 2d | 9d ago | 31m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.89% | 64.05% | 64.05% | 1109 ms | ↑ 1.36x | 2 | 0s | 23d ago | 22m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 76.53% | 76.53% | 1916 ms | ↑ 1.15x | 5 | 0s | 16d ago | 22m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.70% | 99.77% | 99.77% | 1513 ms | ↓ 0.86x | 6 | 2m | 23d ago | 31m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.85% | 99.67% | 99.67% | 2339 ms | ↑ 1.37x | 2 | 5m | 24d ago | 32m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2708 ms | → 1.00x | 0 | — | — | 16m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 76.02% | 90.49% | 90.49% | 1682 ms | ↓ 0.66x | 11 | 17h 48m | 10d ago | 21m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.89% | 99.86% | 99.86% | 1055 ms | ↓ 0.79x | 2 | 0s | 23d ago | 23m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 88.84% | 83.61% | 83.61% | 1264 ms | ↓ 0.73x | 200 | 5m | 7d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 85.41% | 83.68% | 83.68% | 355 ms | ↓ 0.11x | 191 | 11m | 14d ago | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 88.57% | 87.64% | 87.64% | 408 ms | ↓ 0.12x | 201 | 5m | 17d ago | 20m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.15% | 99.15% | 2224 ms | ↑ 1.31x | 1 | 0s | 23d ago | 22m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 61.87% | 61.87% | 244 ms | ↓ 0.18x | 1 | 0s | 23d ago | 22m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.89% | 96.13% | 96.13% | 1656 ms | ↑ 1.69x | 2 | 0s | 23d ago | 22m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.70% | 99.73% | 99.73% | 2789 ms | ↑ 1.07x | 7 | 0s | 9d ago | 32m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1652 ms | → 0.97x | 0 | — | — | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 98.29% | 91.12% | 91.12% | 3630 ms | ↑ 1.19x | 27 | 7m | 14d ago | 20m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1254 ms | → 0.99x | 0 | — | — | 16m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 51.75% | 51.75% | 592 ms | ↓ 0.68x | 1 | 0s | 23d ago | 22m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.13% | 98.13% | 1388 ms | ↑ 1.11x | 1 | 0s | 23d ago | 21m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 93.78% | 27.11% | 27.11% | 2079 ms | ↑ 1.08x | 11 | 2h 18m | 10d ago | 22m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.74% | 99.15% | 99.15% | 3310 ms | ↑ 1.46x | 3 | 22m | 20d ago | 27m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.72% | 99.72% | 2719 ms | ↑ 1.35x | 0 | — | — | 32m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2004 ms | ↑ 1.22x | 2 | 0s | 23d ago | 21m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.81% | 43.84% | 43.84% | 4067 ms | ↑ 1.35x | 4 | 0s | 22d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 1986 ms | → 0.96x | 0 | — | — | 17m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.81% | 99.06% | 99.06% | 2060 ms | ↑ 1.21x | 4 | 0s | 9d ago | 21m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.53% | 97.53% | 97.53% | 1679 ms | ↑ 1.49x | 1 | 11h 52m | 11d ago | 17m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.66% | 75.38% | 75.38% | 1567 ms | ↑ 2.18x | 3 | 33m | 11d ago | 22m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.40x | 0 | — | — | 32m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.48% | 99.90% | 99.90% | 1715 ms | → 1.05x | 10 | 3m | 8d ago | 31m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 782 ms | → 1.00x | 0 | — | — | 16m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.85% | 99.94% | 99.94% | 2214 ms | ↑ 1.30x | 2 | 1m | 23d ago | 27m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.85% | 99.48% | 99.48% | 3052 ms | ↑ 1.40x | 3 | 0s | 22d ago | 32m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 95.37% | 75.56% | 75.56% | 1873 ms | ↓ 0.90x | 24 | 41m | 22d ago | 22m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.38% | 83.38% | 2084 ms | ↑ 1.96x | 1 | 0s | 23d ago | 22m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.81% | 95.59% | 95.59% | 1128 ms | ↑ 1.25x | 4 | 0s | 23d ago | 22m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.89% | 99.97% | 99.97% | 920 ms | ↓ 0.79x | 2 | 0s | 23d ago | 30m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.39% | 90.37% | 90.37% | 2586 ms | ↓ 0.83x | 15 | 0s | 12d ago | 21m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.70% | 97.98% | 97.98% | 1209 ms | ↓ 0.89x | 7 | 0s | 23d ago | 30m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 60.34% | 10.96% | 10.96% | 593 ms | ↓ 0.38x | 1 | 8d 1h | 30d ago | 22m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1399 ms | ↓ 0.76x | 0 | — | — | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.85% | 99.92% | 99.92% | 799 ms | → 0.99x | 3 | 0s | 23d ago | 20m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 60.30% | 9.59% | 9.59% | 1123 ms | ↓ 0.90x | 2 | 4d 1h | 9d ago | 22m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.89% | 55.07% | 55.07% | 2134 ms | ↑ 1.26x | 2 | 0s | 23d ago | 22m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.81% | 99.75% | 99.75% | 2728 ms | ↑ 1.25x | 4 | 0s | 16d ago | 31m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 61.65% | 61.65% | 806 ms | → 0.95x | 0 | — | — | 32m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.93% | 98.99% | 98.99% | 990 ms | ↓ 0.78x | 1 | 0s | 23d ago | 30m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 60.62% | 9.17% | 9.17% | 884 ms | ↓ 0.91x | 1 | 8d 1h | 30d ago | 30m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 941 ms | → 0.95x | 0 | — | — | 17m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.83% | 98.83% | 98.83% | 1183 ms | ↓ 0.67x | 1 | 3h 45m | 16d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.68% | 99.84% | 99.84% | 2552 ms | ↓ 0.93x | 1 | 0s | 8d ago | 17m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1139 ms | ↓ 0.84x | 0 | — | — | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.07% | 99.45% | 99.45% | 3369 ms | ↑ 1.18x | 23 | 52s | 7d ago | 32m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1924 ms | → 0.97x | 0 | — | — | 17m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.87% | 92.64% | 92.64% | 3932 ms | ↓ 0.85x | 99 | 21m | 22d ago | 31m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 1948 ms | ↑ 1.09x | 1 | 0s | 23d ago | 21m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.54% | 98.46% | 98.46% | 2480 ms | ↑ 1.80x | 10 | 59s | 8d ago | 20m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.70% | 98.94% | 98.94% | 1086 ms | → 1.04x | 6 | 2m | 17d ago | 21m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 53.09% | 22.58% | 22.58% | 1918 ms | ↓ 0.89x | 2 | 5d 9h | 19d ago | 32m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.93% | 99.53% | 99.53% | 1281 ms | ↑ 1.10x | 1 | 0s | 26d ago | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.40% | 99.40% | 1169 ms | ↑ 1.09x | 0 | — | — | 30m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 496 ms | → 0.96x | 1 | 0s | 27d ago | 33m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.07% | 91.20% | 91.20% | 1341 ms | ↓ 0.71x | 15 | 11m | 11d ago | 30m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.59% | 97.63% | 97.63% | 1621 ms | ↓ 0.92x | 1 | 9h 60m | 29d ago | 19m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.70% | 96.32% | 96.32% | 3037 ms | ↑ 1.17x | 25 | 6m | 11d ago | 31m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 98.14% | 98.33% | 98.33% | 1858 ms | → 0.95x | 7 | 6m | 7d ago | 17m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.65% | 99.70% | 99.70% | 828 ms | ↓ 0.73x | 2 | 25m | 23d ago | 19m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.02% | 85.02% | 1524 ms | ↑ 1.36x | 1 | 0s | 23d ago | 21m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.63% | 99.68% | 99.68% | 1420 ms | ↑ 1.18x | 8 | 0s | 8d ago | 19m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1466 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.93% | 99.44% | 99.44% | 1015 ms | ↑ 1.08x | 1 | 0s | 27d ago | 32m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 480 ms | ↓ 0.52x | 0 | — | — | 16m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.85% | 99.71% | 99.71% | 919 ms | → 1.02x | 2 | 5m | 28d ago | 32m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.58% | 65.03% | 65.03% | 1264 ms | ↑ 1.29x | 9 | 1m | 8d ago | 21m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.85% | 99.86% | 99.86% | 2933 ms | ↑ 1.71x | 3 | 0s | 15d ago | 28m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.85% | 99.81% | 99.81% | 738 ms | ↓ 0.94x | 3 | 0s | 25d ago | 30m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.60% | 98.60% | 1738 ms | ↓ 0.88x | 1 | 0s | 23d ago | 21m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.85% | 96.82% | 96.82% | 1478 ms | ↑ 1.24x | 3 | 0s | 16d ago | 19m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.55% | 91.26% | 91.26% | 3993 ms | ↑ 1.36x | 10 | 1m | 23d ago | 33m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 280 ms | ↓ 0.44x | 0 | — | — | 16m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 94.76% | 94.82% | 94.82% | 776 ms | ↓ 0.43x | 4 | 4h 8m | 11d ago | 17m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.81% | 98.59% | 98.59% | 564 ms | ↓ 0.94x | 2 | 10m | 24d ago | 22m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2128 ms | → 0.99x | 0 | — | — | 16m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.05% | 96.93% | 96.93% | 3009 ms | ↑ 1.29x | 22 | 1m | 11d ago | 20m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 947 ms | → 0.99x | 0 | — | — | 16m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 60.52% | 20.86% | 20.86% | 831 ms | → 1.01x | 2 | 4d | 12d ago | 30m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.77% | 99.76% | 99.76% | 1644 ms | ↓ 0.86x | 4 | 3m | 23d ago | 21m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.89% | 97.82% | 97.82% | 1692 ms | ↑ 1.38x | 2 | 0s | 23d ago | 21m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.93% | 99.92% | 99.92% | 1406 ms | → 1.03x | 1 | 0s | 25d ago | 30m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.85% | 85.76% | 85.76% | 2615 ms | ↑ 1.38x | 3 | 0s | 16d ago | 22m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.97% | 96.16% | 96.16% | 1952 ms | ↑ 1.36x | 5 | 15h 59m | 14d ago | 22m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.85% | 99.85% | 1797 ms | ↑ 1.26x | 1 | 0s | 20d ago | 30m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 60.48% | 9.16% | 9.16% | 2520 ms | ↑ 1.06x | 3 | 2d 16h | 16d ago | 31m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 728 ms | ↓ 0.59x | 0 | — | — | 17m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.89% | 99.84% | 99.84% | 2097 ms | ↑ 1.15x | 1 | 20m | 18d ago | 30m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.89% | 99.93% | 99.93% | 1001 ms | ↑ 1.80x | 2 | 0s | 9d ago | 31m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 75.47% | 11.31% | 11.31% | 2105 ms | → 1.02x | 3 | 1d 17h | 18d ago | 22m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 60.17% | 9.01% | 9.01% | 1711 ms | ↑ 1.08x | 6 | 1d 8h | 8d ago | 22m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.81% | 99.88% | 99.88% | 3196 ms | ↑ 1.72x | 4 | 0s | 15d ago | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 95.40% | 95.37% | 95.37% | 1703 ms | ↑ 1.09x | 3 | 6h 37m | 25d ago | 19m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3117 ms | → 1.00x | 0 | — | — | 16m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 75.27% | 20.32% | 20.32% | 1826 ms | ↑ 1.07x | 7 | 17h 37m | 7d ago | 22m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.77% | 99.77% | 99.77% | 3307 ms | ↑ 2.01x | 3 | 7m | 23d ago | 20m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.37% | 99.88% | 99.88% | 1380 ms | ↑ 1.11x | 3 | 1h 27m | 14d ago | 31m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.92% | 99.92% | 3062 ms | ↑ 1.76x | 1 | 0s | 25d ago | 30m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.51% | 99.72% | 99.72% | 2667 ms | ↑ 1.73x | 5 | 14m | 25d ago | 30m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.89% | 97.66% | 97.66% | 1019 ms | → 0.96x | 1 | 10m | 24d ago | 19m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.51% | 99.80% | 99.80% | 2303 ms | ↑ 1.11x | 11 | 15s | 19d ago | 27m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.82% | 99.82% | 2414 ms | ↑ 2.47x | 1 | 0s | 26d ago | 22m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.78% | 99.02% | 99.02% | 1445 ms | ↑ 1.13x | 5 | 0s | 22d ago | 31m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 406 ms | ↓ 0.58x | 0 | — | — | 30m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.80% | 99.56% | 99.61% | 99.61% | 468 ms | ↓ 0.87x | 8 | 0s | 3d ago | 32m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 99.74% | 15.14% | 15.14% | 2128 ms | ↑ 1.07x | 4 | 0s | 4d ago | 33m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.80% | 99.40% | 97.61% | 97.61% | 3417 ms | ↑ 1.11x | 13 | 3m | 6d ago | 27m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.80% | 99.51% | 99.72% | 99.72% | 3023 ms | ↑ 1.16x | 9 | 3m | 3d ago | 28m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 61.18% | 9.21% | 9.21% | 1396 ms | ↓ 0.89x | 5 | 1d 14h | 6d ago | 28m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.80% | 98.76% | 99.62% | 99.62% | 2791 ms | ↑ 1.64x | 4 | 1h 8m | 3d ago | 27m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.80% | 98.95% | 99.41% | 99.41% | 3685 ms | ↑ 1.84x | 16 | 14m | 7d ago | 27m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.81% | 99.84% | 99.84% | 1637 ms | ↓ 0.91x | 4 | 0s | 4d ago | 27m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 73.84% | 11.11% | 11.11% | 879 ms | ↓ 0.56x | 38 | 3h 16m | 5d ago | 28m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.80% | 98.95% | 82.67% | 82.67% | 2511 ms | ↓ 0.83x | 26 | 23s | 7d ago | 27m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.80% | 98.60% | 96.36% | 96.36% | 4212 ms | ↑ 1.50x | 12 | 27m | 5d ago | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 75.47% | 12.17% | 12.17% | 1254 ms | ↓ 0.59x | 3 | 1d 17h | 6d ago | 22m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.80% | 95.93% | 95.98% | 95.98% | 2275 ms | ↓ 0.73x | 3 | 4h 13m | 5h ago | 17m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.80% | 96.56% | 96.56% | 96.56% | 2107 ms | → 0.95x | 11 | 13m | 7d ago | 17m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.77% | 97.82% | 97.82% | 948 ms | ↓ 0.78x | 5 | 0s | 3d ago | 20m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.80% | 99.77% | 97.83% | 97.83% | 1740 ms | → 0.97x | 5 | 0s | 4d ago | 20m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.70% | 77.87% | 77.87% | 1640 ms | → 1.03x | 6 | 2m | 5h ago | 22m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.80% | 99.70% | 99.75% | 99.75% | 2504 ms | ↑ 1.51x | 5 | 8m | 7d ago | 20m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.80% | 99.52% | 99.52% | 99.52% | 161 ms | ↓ 0.11x | 4 | 15m | 22h ago | 17m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.80% | 98.78% | 99.31% | 99.31% | 3876 ms | ↑ 2.08x | 4 | 2h 15m | 7d ago | 20m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.80% | 99.81% | 99.81% | 99.81% | 1882 ms | → 0.97x | 1 | 0s | 1d ago | 16m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.80% | 99.66% | 99.66% | 99.66% | 475 ms | → 0.98x | 2 | 0s | 1d ago | 16m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.80% | 99.81% | 99.81% | 99.81% | 3047 ms | → 1.00x | 1 | 0s | 6d ago | 16m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.80% | 97.06% | 97.06% | 97.06% | 1370 ms | → 1.02x | 2 | 1h 20m | 2d ago | 17m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.80% | 96.98% | 96.98% | 96.98% | 2780 ms | ↑ 1.09x | 12 | 10m | 7d ago | 17m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.80% | 99.58% | 97.01% | 97.01% | 3894 ms | ↑ 1.96x | 8 | 3m | 7d ago | 20m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.81% | 53.92% | 53.92% | 2084 ms | ↑ 1.08x | 4 | 0s | 24h ago | 22m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.80% | 99.66% | 99.73% | 99.73% | 2615 ms | ↑ 1.40x | 8 | 0s | 7d ago | 20m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.80% | 99.83% | 99.83% | 99.83% | 715 ms | ↓ 0.87x | 1 | 0s | 5d ago | 17m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.88% | 99.92% | 99.92% | 800 ms | ↓ 0.73x | 2 | 0s | 5d ago | 19m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.80% | 99.83% | 99.83% | 99.83% | 1652 ms | ↓ 0.89x | 1 | 0s | 23h ago | 16m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.80% | 99.81% | 99.81% | 99.81% | 1021 ms | → 0.99x | 1 | 0s | 16h ago | 16m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.80% | 99.70% | 98.06% | 98.06% | 499 ms | ↓ 0.49x | 6 | 2m | 2d ago | 20m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 99.80% | 97.33% | 97.33% | 97.33% | 1645 ms | ↓ 0.88x | 10 | 8m | 7d ago | 17m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 99.80% | 98.42% | 98.42% | 98.42% | 2833 ms | → 1.04x | 12 | 18m | 7d ago | 17m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.85% | 98.39% | 98.39% | 737 ms | ↓ 0.60x | 3 | 0s | 6d ago | 21m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.93% | 99.93% | 99.93% | 892 ms | ↓ 0.89x | 1 | 0s | 4d ago | 16m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 99.05% | 93.93% | 93.93% | 2439 ms | ↓ 0.62x | 18 | 4m | 7d ago | 20m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.80% | 99.70% | 95.06% | 95.06% | 1394 ms | ↓ 0.88x | 2 | 51m | 3d ago | 19m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.78% | 99.78% | 99.78% | 99.78% | 869 ms | → 1.00x | 1 | 0s | 6d ago | 16m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.60% | 99.26% | 99.84% | 99.84% | 3617 ms | ↑ 1.41x | 19 | 0s | 5d ago | 32m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.60% | 37.03% | 85.84% | 85.84% | 1769 ms | ↓ 0.85x | 3 | 5d 8h | 4d ago | 31m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.60% | 99.22% | 99.71% | 99.71% | 3216 ms | ↑ 1.41x | 5 | 1h | 5d ago | 31m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.63% | 90.94% | 90.94% | 627 ms | ↓ 0.65x | 3 | 40m | 5d ago | 31m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.60% | 95.77% | 98.76% | 98.76% | 3206 ms | → 1.03x | 87 | 5m | 5d ago | 32m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.60% | 73.19% | 57.29% | 57.29% | 3159 ms | → 1.03x | 221 | 27m | 5d ago | 31m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 60.50% | 22.53% | 22.53% | 2686 ms | ↑ 1.11x | 2 | 4d 1h | 5d ago | 29m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.31% | 99.36% | 99.36% | 1845 ms | ↓ 0.85x | 11 | 3m | 5d ago | 31m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.59% | 89.21% | 76.72% | 76.72% | 2535 ms | ↑ 1.16x | 168 | 9m | 2d ago | 27m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.59% | 94.14% | 96.28% | 96.28% | 1226 ms | ↓ 0.82x | 26 | 51m | 3d ago | 28m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.59% | 98.50% | 98.97% | 98.97% | 2438 ms | ↑ 1.44x | 10 | 29m | 22h ago | 27m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.51% | 99.27% | 99.27% | 2208 ms | ↑ 1.17x | 10 | 2m | 2d ago | 22m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.59% | 99.46% | 99.46% | 99.46% | 4517 ms | → 0.98x | 5 | 0s | 2d ago | 16m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.59% | 96.18% | 96.18% | 96.18% | 2854 ms | → 0.98x | 10 | 22m | 7d ago | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.59% | 88.83% | 81.55% | 81.55% | 741 ms | ↓ 0.22x | 190 | 7m | 3d ago | 20m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.59% | 99.33% | 99.33% | 99.33% | 766 ms | ↓ 0.93x | 4 | 0s | 16h ago | 17m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.59% | 99.47% | 99.57% | 99.57% | 1033 ms | ↓ 0.82x | 9 | 9m | 5d ago | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.59% | 79.86% | 79.86% | 79.86% | 2763 ms | ↓ 0.92x | 14 | 1d 1h | 7d ago | 17m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.59% | 99.66% | 99.66% | 99.66% | 1455 ms | → 0.99x | 1 | 19m | 5d ago | 16m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.59% | 95.80% | 95.80% | 95.80% | 2029 ms | → 0.97x | 11 | 20m | 7d ago | 17m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.59% | 95.53% | 95.59% | 95.59% | 1774 ms | ↓ 0.81x | 7 | 1h 50m | 7h ago | 17m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.59% | 95.80% | 95.80% | 95.80% | 2043 ms | → 0.97x | 11 | 20m | 6d ago | 17m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.59% | 92.32% | 86.59% | 86.59% | 688 ms | ↓ 0.77x | 8 | 4h 8m | 4d ago | 19m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.77% | 55.08% | 55.08% | 1651 ms | ↓ 0.86x | 5 | 0s | 2d ago | 22m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.59% | 99.66% | 97.72% | 97.72% | 2392 ms | ↑ 1.37x | 7 | 1m | 4d ago | 20m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.59% | 95.09% | 95.14% | 95.14% | 2116 ms | ↑ 1.11x | 6 | 2h 49m | 6d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.59% | 99.62% | 99.62% | 99.62% | 2149 ms | → 1.00x | 1 | 20m | 6d ago | 16m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.59% | 99.66% | 99.70% | 99.70% | 4074 ms | ↑ 1.94x | 8 | 0s | 3d ago | 20m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.59% | 46.39% | 26.14% | 26.14% | 1329 ms | ↓ 0.54x | 20 | 16h 14m | 7d ago | 20m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.39% | 66.80% | 78.31% | 78.31% | 139 ms | ↓ 0.61x | 8 | 1d | 3d ago | 32m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.39% | 99.60% | 99.65% | 99.65% | 1355 ms | ↓ 0.89x | 5 | 8m | 3d ago | 23m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.39% | 99.58% | 86.86% | 86.86% | 2302 ms | ↑ 1.94x | 8 | 5m | 3d ago | 22m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.39% | 88.95% | 88.95% | 88.95% | 2458 ms | → 0.96x | 12 | 1d 6h | 6d ago | 17m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.39% | 99.43% | 99.43% | 99.43% | 2911 ms | → 1.00x | 2 | 10m | 17h ago | 16m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 99.39% | 92.93% | 92.98% | 92.98% | 3367 ms | ↓ 0.94x | 43 | 21m | 18h ago | 17m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.39% | 99.43% | 99.43% | 99.43% | 1113 ms | → 1.00x | 3 | 0s | 2d ago | 16m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.19% | 99.29% | 97.68% | 97.68% | 4064 ms | ↑ 1.16x | 18 | 0s | 4d ago | 31m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.19% | 99.48% | 98.93% | 98.93% | 2602 ms | → 1.04x | 10 | 6m | 6d ago | 31m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.19% | 99.51% | 66.98% | 66.98% | 1247 ms | ↓ 0.93x | 9 | 7m | 3d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.19% | 99.80% | 99.84% | 99.84% | 1383 ms | ↑ 1.09x | 2 | 20m | 2d ago | 19m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.19% | 99.05% | 99.05% | 99.05% | 1348 ms | → 1.00x | 5 | 0s | 4d ago | 16m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (55)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.99% | 99.03% | 99.24% | 99.24% | 854 ms | ↓ 0.61x | 25 | 0s | 11h ago | 32m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.98% | 99.70% | 98.72% | 98.72% | 1374 ms | ↑ 1.97x | 7 | 0s | 2d ago | 22m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.79% | 76.65% | 76.51% | 76.51% | 3633 ms | ↓ 0.86x | 293 | 12m | 4h ago | 33m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.78% | 98.52% | 89.25% | 89.25% | 1818 ms | → 0.99x | 31 | 2m | 14h ago | 21m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.58% | 60.08% | 9.17% | 9.17% | 2764 ms | ↑ 1.66x | 5 | 1d 15h | 4d ago | 22m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.57% | 96.85% | 96.85% | 96.85% | 2415 ms | ↓ 0.78x | 6 | 2h 14m | 3d ago | 17m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.57% | 95.87% | 61.84% | 61.84% | 844 ms | ↑ 1.14x | 16 | 1h 49m | 3d ago | 22m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 98.38% | 99.63% | 99.61% | 99.61% | 1516 ms | → 1.00x | 5 | 16m | 2d ago | 32m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.17% | 90.13% | 65.30% | 65.30% | 4408 ms | → 1.02x | 196 | 3m | 16h ago | 28m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.17% | 87.75% | 59.56% | 59.56% | 4632 ms | → 1.00x | 220 | 5m | 2d ago | 21m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 97.98% | 91.01% | 95.58% | 95.58% | 3417 ms | ↓ 0.91x | 121 | 20m | 17h ago | 32m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 97.96% | 99.54% | 98.31% | 98.31% | 3137 ms | ↑ 1.64x | 3 | 54m | 2d ago | 21m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.96% | 97.33% | 97.33% | 97.33% | 2404 ms | → 1.00x | 9 | 11m | 4d ago | 16m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 97.96% | 99.54% | 98.39% | 98.39% | 694 ms | ↓ 0.61x | 3 | 54m | 2d ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.96% | 98.78% | 88.20% | 88.20% | 4145 ms | ↑ 2.39x | 24 | 7m | 15h ago | 20m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.96% | 88.76% | 81.85% | 81.85% | 4724 ms | → 1.04x | 215 | 4m | 2h ago | 21m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.57% | 99.25% | 98.57% | 98.57% | 3962 ms | ↑ 1.31x | 8 | 30m | 21h ago | 30m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.57% | 58.23% | 8.77% | 8.77% | 4289 ms | ↑ 1.25x | 52 | 3h 51m | 6h ago | 27m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 97.56% | 99.13% | 97.58% | 97.58% | 576 ms | ↓ 0.65x | 9 | 29m | 1d ago | 22m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.56% | 81.86% | 79.43% | 79.43% | 4785 ms | ↑ 1.17x | 195 | 18m | 13h ago | 20m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.36% | 88.17% | 84.65% | 84.65% | 4387 ms | → 1.02x | 225 | 4m | 24h ago | 22m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.35% | 99.11% | 99.11% | 99.11% | 1098 ms | ↓ 0.54x | 1 | 4h 12m | 2d ago | 17m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.17% | 97.92% | 97.97% | 97.97% | 4644 ms | ↑ 1.58x | 47 | 3m | 2h ago | 33m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.16% | 95.94% | 98.71% | 98.71% | 4396 ms | ↑ 1.31x | 61 | 15m | 6h ago | 27m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 96.95% | 68.91% | 28.06% | 28.06% | 1902 ms | ↓ 0.79x | 24 | 7h 13m | 6h ago | 22m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.76% | 97.46% | 98.64% | 98.64% | 3403 ms | → 0.95x | 58 | 4m | 4h ago | 31m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.57% | 85.60% | 83.58% | 83.58% | 4445 ms | → 1.04x | 205 | 13m | 2h ago | 33m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.56% | 88.44% | 84.14% | 84.14% | 4548 ms | → 1.04x | 235 | 4m | 2h ago | 30m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.55% | 88.18% | 71.53% | 71.53% | 4465 ms | → 1.01x | 243 | 3m | 19h ago | 28m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.33% | 96.14% | 96.14% | 96.14% | 1578 ms | ↓ 0.90x | 17 | 7m | 2h ago | 16m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.13% | 84.84% | 77.88% | 77.88% | 4719 ms | → 1.03x | 303 | 6m | 2h ago | 20m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.35% | 97.51% | 91.60% | 91.60% | 985 ms | ↓ 0.85x | 25 | 26m | 7d ago | 31m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.32% | 86.03% | 78.27% | 78.27% | 4824 ms | → 1.04x | 267 | 5m | 23h ago | 21m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.33% | 58.69% | 8.85% | 8.85% | 2319 ms | ↑ 1.16x | 46 | 4h 14m | 8h ago | 29m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 93.51% | 20.30% | 7.30% | 7.30% | 2650 ms | → 1.04x | 7 | 3d 4h | 9h ago | 27m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 93.32% | 98.39% | 98.99% | 98.99% | 3842 ms | ↑ 1.43x | 13 | 42m | 3h ago | 29m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 93.32% | 98.61% | 96.97% | 96.97% | 3760 ms | ↑ 1.41x | 12 | 42m | 3h ago | 29m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 93.32% | 98.58% | 54.61% | 54.61% | 4115 ms | ↑ 1.41x | 13 | 38m | 3h ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 93.32% | 98.61% | 99.18% | 99.18% | 3848 ms | ↑ 2.09x | 11 | 47m | 3h ago | 29m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 93.12% | 98.62% | 39.74% | 39.74% | 1221 ms | ↓ 0.90x | 12 | 42m | 3h ago | 29m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.87% | 91.51% | 67.68% | 67.68% | 1160 ms | ↓ 0.75x | 29 | 1h 30m | 2d ago | 22m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.67% | 98.56% | 95.97% | 95.97% | 1091 ms | ↓ 0.92x | 2 | 5h 55m | 3d ago | 19m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.04% | 98.17% | 96.89% | 96.89% | 2086 ms | ↑ 1.37x | 4 | 3h 35m | 6d ago | 19m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 89.70% | 55.18% | 8.36% | 8.36% | 808 ms | ↓ 0.77x | 73 | 2h 60m | 1d ago | 31m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.41% | 53.31% | 37.31% | 37.31% | 3823 ms | ↑ 1.14x | 154 | 1h 20m | 1h ago | 20m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.78% | 88.57% | 88.57% | 88.57% | 628 ms | ↓ 0.92x | 3 | 6h 57m | 14h ago | 17m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 86.76% | 88.37% | 91.39% | 91.39% | 2878 ms | ↑ 1.67x | 14 | 7h 13m | 1d ago | 20m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 84.93% | 87.58% | 87.58% | 87.58% | 1036 ms | ↓ 0.90x | 1 | 1d 1h | 4d ago | 17m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.06% | 71.81% | 33.77% | 33.77% | 543 ms | ↓ 0.48x | 10 | 15h 18m | 3d ago | 20m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 78.46% | 78.46% | 78.46% | 78.46% | 1449 ms | → 1.00x | 3 | 11h 14m | 4h ago | 16m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 65.52% | 58.79% | 61.88% | 61.88% | 4870 ms | → 1.05x | 495 | 17m | 1h ago | 28m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 64.77% | 76.95% | 77.52% | 77.52% | 1699 ms | ↑ 1.13x | 4 | 2d 2h | 7d ago | 19m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 59.63% | 14.72% | 14.76% | 14.76% | 3375 ms | → 1.00x | 2 | 10d 7h | 17d ago | 23m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 55.40% | 12.18% | 19.37% | 19.37% | 1459 ms | → 1.00x | 1 | 26d 1h | 30d ago | 20m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 2.43% | 0.45% | 0.07% | 0.07% | 1505 ms | → 1.00x | 2 | 14d 21h | 2h ago | 30m ago |

</details>

<details open>
<summary><strong>🔴 Down (191)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 95.11% | 73.94% | 44.89% | 44.89% | 1860 ms | → 0.97x | 24 | 5h 25m | 7h ago | 20m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 90.02% | 97.69% | 97.73% | 97.73% | 391 ms | ↓ 0.60x | 8 | 2h 1m | 15h ago | 19m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.01% | 56.86% | 9.87% | 9.87% | 4491 ms | → 1.03x | 222 | 49m | 1h ago | 22m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 84.11% | 79.40% | 66.10% | 66.10% | 1759 ms | ↑ 1.12x | 7 | 15h 25m | 1d ago | 21m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 83.30% | 96.70% | 97.24% | 97.24% | 3602 ms | ↑ 1.78x | 7 | 3h 56m | 1d ago | 21m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 76.27% | 52.39% | 7.88% | 7.88% | 3500 ms | ↓ 0.79x | 177 | 1h 10m | 28m ago | 28m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 73.32% | 94.94% | 94.98% | 94.98% | 1821 ms | ↑ 1.31x | 3 | 14h 47m | 2d ago | 17m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 72.10% | 42.91% | 12.44% | 12.44% | 4687 ms | ↑ 1.11x | 274 | 57m | 21m ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 59.67% | 86.23% | 86.29% | 86.29% | 2683 ms | ↑ 1.25x | 14 | 5h 32m | 3d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 58.50% | 92.18% | 97.28% | 97.28% | 2092 ms | → 1.00x | 4 | 17h 47m | 3d ago | 29m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 48.68% | 85.30% | 87.78% | 87.78% | 2720 ms | ↓ 0.82x | 75 | 1h 23m | 4d ago | 20m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.45% | 35.47% | 9.75% | 9.75% | 4245 ms | ↑ 1.05x | 405 | 46m | 21m ago | 21m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 46.03% | 49.43% | 49.43% | 49.43% | 1172 ms | ↓ 0.93x | 1 | 3d 20h | 4d ago | 17m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 41.55% | 57.63% | 47.20% | 47.20% | 4588 ms | ↑ 1.10x | 58 | 4h 34m | 4d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 41.14% | 81.79% | 81.85% | 81.85% | 2733 ms | ↑ 1.54x | 13 | 7h 59m | 4d ago | 17m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 39.71% | 33.98% | 33.98% | 33.98% | 526 ms | → 1.00x | 2 | 2d 16h | 4d ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 39.31% | 79.58% | 79.58% | 79.58% | 829 ms | ↓ 0.41x | 1 | 4d 7h | 4d ago | 16m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 35.03% | 87.75% | 88.74% | 88.74% | 603 ms | ↓ 0.77x | 3 | 1d 13h | 5d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 33.81% | 62.39% | 30.85% | 30.85% | 3874 ms | ↑ 2.51x | 23 | 10h 14m | 5d ago | 20m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 33.60% | 84.99% | 87.51% | 87.51% | 1606 ms | ↑ 1.16x | 17 | 7h 34m | 3d ago | 20m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 27.49% | 40.10% | 40.10% | 40.10% | 4712 ms | → 1.00x | 8 | 15h | 5d ago | 16m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 18.13% | 84.14% | 83.03% | 83.03% | 3026 ms | ↑ 1.44x | 11 | 12h 36m | 6d ago | 20m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 7.54% | 8.39% | 8.39% | 8.39% | 3169 ms | → 0.96x | 46 | 3h 43m | 12h ago | 15m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.67% | 14.09% | 29.07% | 29.07% | 4557 ms | ↑ 2.01x | 50 | 12h 37m | 16h ago | 20m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.81% | 32.78% | 66.02% | 66.02% | 2174 ms | ↓ 0.73x | 194 | 2h 38m | 3d ago | 33m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.61% | 76.45% | 78.66% | 78.66% | 836 ms | ↓ 0.93x | 3 | 2d 22h | 2d ago | 19m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 39.24% | 90.07% | 90.07% | — | — | 5 | 4d 9h | 22d ago | 31m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 74.58% | 74.58% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 37.88% | 80.18% | 80.18% | — | — | 27 | 19h 38m | 22d ago | 23m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 62.39% | 81.61% | 81.61% | — | — | 2 | 6d 24h | 14d ago | 20m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.20% | 6.20% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 12.55% | 13.63% | 13.63% | — | — | 11 | 2d 12h | 22d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.69% | 3.69% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 39.39% | 90.33% | 90.33% | — | — | 1 | 21d 22h | 22d ago | 28m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.65% | 39.65% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 27.61% | 27.61% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 32.76% | 81.08% | 81.08% | — | — | 126 | 4h 15m | 22d ago | 32m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 33.62% | 64.82% | 64.82% | — | — | 118 | 4h 32m | 22d ago | 21m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 39.65% | 33.82% | 33.82% | — | — | 1 | 21d 22h | 22d ago | 22m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 39.44% | 90.78% | 90.78% | — | — | 1 | 21d 22h | 22d ago | 32m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 5.07% | 68.37% | 68.37% | — | — | 66 | 10h 24m | 28d ago | 30m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 31m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 32m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 39.41% | 83.86% | 83.86% | — | — | 1 | 21d 22h | 22d ago | 32m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.34% | 18.34% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 39.63% | 57.87% | 57.87% | — | — | 4 | 5d 11h | 22d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 40.81% | 40.81% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.91% | 3.97% | 3.97% | — | — | 3 | 9d 22h | 22d ago | 22m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 39.62% | 90.95% | 90.95% | — | — | 1 | 21d 23h | 22d ago | 22m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.83% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 22d ago | 27m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 29.99% | 56.49% | 56.49% | — | — | 6 | 3d 23h | 22d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.90% | 31.90% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 14.81% | 2.24% | 2.24% | — | — | 7 | 3d 21h | 22d ago | 28m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 24.43% | 43.44% | 43.44% | — | — | 4 | 5d 19h | 18d ago | 20m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 59.44% | 59.44% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 23.71% | 27.93% | 27.93% | — | — | 120 | 4h 49m | 22d ago | 22m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 39.62% | 32.71% | 32.71% | — | — | 1 | 21d 23h | 22d ago | 22m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.82% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 22d ago | 28m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 62.30% | 62.30% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 31m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.80% | 6.80% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 71.67% | 71.67% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 39.28% | 90.73% | 90.73% | — | — | 5 | 4d 9h | 22d ago | 32m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 32m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.63% | 9.63% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 33.51% | 86.58% | 86.58% | — | — | 125 | 4h 16m | 22d ago | 23m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 11h | 7d ago | 16m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 36.13% | 36.13% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 57.62% | 57.62% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 32m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 13.03% | 83.49% | 83.49% | — | — | 38 | 17h 10m | 22d ago | 33m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 50.89% | 50.89% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 33m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 46.26% | 46.26% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 39.38% | 90.74% | 90.74% | — | — | 2 | 10d 23h | 22d ago | 33m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 64.07% | 64.07% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.78% | 42.57% | 42.57% | — | — | 2 | 14d 22h | 22d ago | 32m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 22h | 25d ago | 31m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 20h | 25d ago | 23m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 11h | 7d ago | 23m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 25.54% | 35.70% | 35.70% | — | — | 219 | 2h 32m | 22d ago | 22m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 15.61% | 2.84% | 2.84% | — | — | 4 | 6d 18h | 22d ago | 22m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 45.47% | 45.47% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 38.05% | 90.67% | 90.67% | — | — | 21 | 1d 1h | 22d ago | 27m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 39.62% | 36.57% | 36.57% | — | — | 1 | 21d 22h | 22d ago | 22m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 39.36% | 90.61% | 90.61% | — | — | 3 | 7d 7h | 22d ago | 32m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 39.40% | 39.71% | 39.71% | — | — | 1 | 21d 22h | 22d ago | 31m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 7.89% | 51.96% | 51.96% | — | — | 1 | 28d 13h | 29d ago | 22m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 36.35% | 88.06% | 88.06% | — | — | 66 | 8h 1m | 22d ago | 32m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.41% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 23d ago | 27m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 62.14% | 80.05% | 80.05% | — | — | 3 | 4d 13h | 13d ago | 21m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 20h | 25d ago | 23m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 12.44% | 86.37% | 86.37% | — | — | 1 | 27d 4h | 27d ago | 27m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 39.51% | 68.72% | 68.72% | — | — | 2 | 10d 23h | 22d ago | 20m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.75% | 3.75% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 47.27% | 47.27% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 38.50% | 84.65% | 84.65% | — | — | 25 | 21h 4m | 22d ago | 31m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 22.17% | 64.57% | 64.57% | — | — | 236 | 2h 27m | 22d ago | 28m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 30m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.98% | 30.98% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 17.58% | 17.62% | 17.62% | — | — | 24 | 23h 5m | 22d ago | 19m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 7.93% | 15.65% | 15.65% | — | — | 162 | 4h 2m | 22d ago | 21m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 45.72% | 45.76% | 45.76% | — | — | 10 | 1d 11h | 10d ago | 19m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.38% | 26.38% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 11h | 8d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 31m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 38.50% | 72.79% | 72.79% | — | — | 26 | 20h 15m | 22d ago | 21m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 21.53% | 21.59% | 21.59% | — | — | 3 | 5d 22h | 17d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.12% | 19.12% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 54.18% | 54.18% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 11h | 7d ago | 16m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 60.38% | 60.38% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 39.51% | 54.32% | 54.32% | — | — | 2 | 10d 23h | 22d ago | 19m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 49.35% | 69.21% | 69.21% | — | — | 6 | 2d 24h | 18d ago | 20m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 39.58% | 6.07% | 6.07% | — | — | 2 | 10d 23h | 22d ago | 22m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 23h | 27d ago | 19m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 31m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 39.31% | 90.82% | 90.82% | — | — | 2 | 10d 23h | 22d ago | 30m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 32m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 39.27% | 89.64% | 89.64% | — | — | 3 | 7d 7h | 22d ago | 30m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 23.20% | 69.92% | 69.92% | — | — | 217 | 2h 36m | 22d ago | 33m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 82.10% | 82.10% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 39.04% | 89.48% | 89.48% | — | — | 11 | 1d 24h | 22d ago | 31m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.56% | 21.56% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.99% | 7.98% | 7.98% | — | — | 3 | 7d 13h | 20d ago | 31m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 24.08% | 4.44% | 4.44% | — | — | 6 | 3d 15h | 11d ago | 28m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 39.55% | 37.58% | 37.58% | — | — | 3 | 7d 8h | 22d ago | 22m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 7.34% | 74.73% | 74.73% | — | — | 1 | 28d 15h | 29d ago | 31m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.03% | 9.03% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 32.63% | 71.91% | 71.91% | — | — | 132 | 4h 3m | 22d ago | 33m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 11h | 7d ago | 23m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 74.02% | 74.02% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 21.26% | 21.41% | 21.41% | — | — | 2 | 3d 17h | 7d ago | 17m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 39.53% | 54.98% | 54.98% | — | — | 2 | 10d 23h | 22d ago | 20m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 45.27% | 45.32% | 45.32% | — | — | 3 | 7d 6h | 21d ago | 19m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 16.57% | 16.57% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 21h | 25d ago | 31m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.66% | 19.66% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 38.56% | 26.84% | 26.84% | — | — | 3 | 6d 7h | 14d ago | 20m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.88% | 1.94% | 1.94% | — | — | 2 | 11d 6h | 22d ago | 17m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 10.43% | 10.48% | 10.48% | — | — | 2 | 11d 6h | 22d ago | 17m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 12.79% | 12.85% | 12.85% | — | — | 2 | 9d 19h | 19d ago | 17m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 54.66% | 54.66% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 39.34% | 90.79% | 90.79% | — | — | 2 | 10d 23h | 22d ago | 30m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 34.27% | 64.52% | 64.52% | — | — | 5 | 4d 14h | 23d ago | 20m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 46.99% | 90.97% | 90.97% | — | — | 6 | 3d 4h | 19d ago | 27m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 45.33% | 45.33% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 8.40% | 8.40% | 8.40% | — | — | 1 | 7d 18h | 8d ago | 17m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 34.39% | 88.46% | 88.46% | — | — | 131 | 4h 2m | 22d ago | 22m ago |

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
