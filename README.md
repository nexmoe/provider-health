# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 323 🟢 operational · 89 🟡 degraded · 188 🔴 down · 0 ⚫ unknown

_Updated 2026-05-10 06:15 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (323)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 95.82% | 95.88% | 95.88% | 2383 ms | ↓ 0.85x | 2 | 6h 20m | 11d ago | 19m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.82% | 92.13% | 92.13% | 881 ms | ↓ 0.64x | 4 | 0s | 22d ago | 23m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 69.34% | 10.74% | 10.74% | 2042 ms | → 1.01x | 5 | 1d 8h | 9d ago | 24m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.89% | 97.12% | 97.12% | 2881 ms | ↑ 1.09x | 2 | 0s | 22d ago | 33m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.64% | 98.66% | 98.66% | 3321 ms | ↑ 1.18x | 65 | 6m | 8d ago | 34m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.89% | 98.94% | 98.94% | 4198 ms | ↑ 1.09x | 21 | 0s | 14d ago | 34m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1722 ms | ↓ 0.75x | 0 | — | — | 18m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.45% | 96.45% | 1875 ms | ↑ 1.18x | 0 | — | — | 21m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1782 ms | → 0.99x | 0 | — | — | 18m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.42% | 91.42% | 1937 ms | ↑ 1.13x | 0 | — | — | 35m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1367 ms | → 1.00x | 0 | — | — | 18m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 94.91% | 94.97% | 94.97% | 2883 ms | ↑ 1.26x | 5 | 3h 2m | 8d ago | 21m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.78% | 99.79% | 99.79% | 1209 ms | ↓ 0.72x | 5 | 0s | 23d ago | 21m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.77% | 94.81% | 94.81% | 1390 ms | ↑ 1.18x | 8 | 4h 1m | 18d ago | 21m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 96.98% | 96.98% | 96.98% | 984 ms | ↓ 0.65x | 1 | 13h 57m | 17d ago | 19m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.89% | 99.89% | 661 ms | ↓ 0.62x | 2 | 9m | 13d ago | 21m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2903 ms | ↓ 0.90x | 0 | — | — | 18m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.70% | 95.41% | 95.41% | 613 ms | ↓ 0.77x | 6 | 2m | 22d ago | 22m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2198 ms | → 1.00x | 0 | — | — | 18m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1865 ms | → 0.96x | 0 | — | — | 18m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.67% | 97.52% | 97.52% | 3289 ms | ↑ 1.51x | 6 | 5m | 14d ago | 22m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.78% | 95.83% | 95.83% | 931 ms | ↓ 0.50x | 1 | 12h 47m | 23d ago | 19m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.58% | 76.65% | 76.65% | 2974 ms | ↑ 1.45x | 34 | 59m | 11d ago | 22m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2350 ms | ↓ 0.81x | 0 | — | — | 18m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.74% | 77.72% | 77.72% | 1623 ms | → 1.01x | 5 | 2m | 12d ago | 23m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.67% | 96.89% | 96.89% | 1384 ms | ↓ 0.69x | 4 | 20m | 11d ago | 23m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 480 ms | ↓ 0.65x | 0 | — | — | 30m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.97% | 98.62% | 98.62% | 452 ms | ↓ 0.30x | 17 | 6m | 17d ago | 22m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.82% | 94.68% | 94.68% | 2817 ms | ↑ 1.15x | 23 | 3m | 22d ago | 22m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 93.40% | 97.95% | 97.95% | 3048 ms | ↑ 2.48x | 11 | 2h 38m | 23d ago | 30m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2703 ms | → 1.00x | 0 | — | — | 18m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3199 ms | ↑ 1.09x | 0 | — | — | 18m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 61.55% | 88.80% | 88.80% | 1533 ms | ↓ 0.76x | 2 | 3d 24h | 22d ago | 24m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.82% | 99.47% | 99.47% | 2318 ms | ↑ 1.12x | 4 | 0s | 24d ago | 30m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.97% | 96.93% | 96.93% | 3487 ms | ↑ 1.31x | 25 | 49s | 20d ago | 23m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 94.40% | 94.44% | 94.44% | 1500 ms | ↑ 1.14x | 3 | 11h 20m | 23d ago | 21m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1526 ms | → 1.04x | 0 | — | — | 18m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.79% | 49.87% | 49.87% | 3946 ms | ↑ 1.73x | 105 | 18m | 13d ago | 30m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.70% | 97.59% | 97.59% | 3831 ms | ↑ 1.73x | 7 | 0s | 21d ago | 22m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1574 ms | ↑ 1.46x | 0 | — | — | 19m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 95.58% | 95.58% | 1370 ms | → 0.95x | 2 | 0s | 8d ago | 23m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1908 ms | → 1.00x | 0 | — | — | 18m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.80% | 48.38% | 48.38% | 975 ms | ↑ 1.29x | 43 | 5m | 19d ago | 24m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.67% | 97.03% | 97.03% | 3186 ms | ↑ 1.43x | 5 | 12m | 14d ago | 22m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 85.96% | 45.50% | 45.50% | 1228 ms | → 0.97x | 1 | 2d 17h | 24d ago | 24m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1227 ms | ↓ 0.76x | 0 | — | — | 18m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.60% | 99.59% | 99.59% | 3751 ms | ↑ 1.19x | 10 | 0s | 22d ago | 29m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2997 ms | → 1.00x | 0 | — | — | 18m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.85% | 96.78% | 96.78% | 3015 ms | → 1.05x | 3 | 0s | 16d ago | 29m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.78% | 98.86% | 98.86% | 2032 ms | ↑ 1.58x | 4 | 2m | 9d ago | 23m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 27.61% | 41.05% | 41.05% | 1537 ms | → 1.00x | 1 | 9d 1h | 30d ago | 30m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.89% | 79.35% | 79.35% | 2551 ms | ↑ 1.35x | 2 | 0s | 15d ago | 23m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 60.14% | 60.14% | 1863 ms | ↑ 1.22x | 2 | 0s | 18d ago | 23m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2265 ms | → 1.00x | 0 | — | — | 18m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.34% | 75.94% | 75.94% | 3000 ms | ↑ 1.21x | 4 | 1h 5m | 15d ago | 23m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1274 ms | → 0.97x | 0 | — | — | 19m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.89% | 98.00% | 98.00% | 3139 ms | ↑ 1.22x | 2 | 0s | 22d ago | 22m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4527 ms | → 1.01x | 0 | — | — | 18m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.89% | 91.77% | 91.77% | 1359 ms | → 0.97x | 2 | 0s | 22d ago | 24m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.89% | 97.75% | 97.75% | 1048 ms | ↓ 0.74x | 2 | 0s | 23d ago | 21m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 69.31% | 60.01% | 60.01% | 2725 ms | ↑ 1.35x | 21 | 7h 15m | 8d ago | 22m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2184 ms | → 1.00x | 0 | — | — | 18m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.78% | 40.10% | 40.10% | 1264 ms | ↑ 1.32x | 1 | 40m | 24d ago | 24m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.93% | 71.13% | 71.13% | 1738 ms | ↓ 0.89x | 1 | 0s | 22d ago | 23m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 98.14% | 49.14% | 49.14% | 1979 ms | ↑ 1.51x | 13 | 32m | 12d ago | 30m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.93% | 97.54% | 97.54% | 2784 ms | ↑ 1.68x | 1 | 0s | 22d ago | 23m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.71% | 46.19% | 46.19% | 1895 ms | → 1.02x | 6 | 3m | 18d ago | 24m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 37.74% | 37.74% | 1819 ms | ↓ 0.82x | 1 | 0s | 24d ago | 30m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2390 ms | ↓ 0.79x | 0 | — | — | 18m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.82% | 77.98% | 77.98% | 2561 ms | ↑ 1.30x | 4 | 0s | 17d ago | 23m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.63% | 97.78% | 97.78% | 2136 ms | → 1.04x | 5 | 8m | 22d ago | 24m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.85% | 57.37% | 57.37% | 2192 ms | ↑ 1.16x | 3 | 0s | 19d ago | 24m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2932 ms | → 1.00x | 0 | — | — | 19m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.74% | 99.07% | 99.07% | 1840 ms | ↑ 1.25x | 6 | 0s | 21d ago | 23m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.89% | 87.63% | 87.63% | 2821 ms | → 1.02x | 2 | 0s | 22d ago | 23m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 62.24% | 62.24% | 62.24% | 567 ms | → 1.00x | 1 | 1d 24h | 23d ago | 19m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.82% | 99.51% | 99.51% | 2105 ms | → 1.03x | 4 | 0s | 22d ago | 23m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.75% | 97.72% | 97.72% | 3194 ms | ↑ 1.86x | 2 | 5h 35m | 22d ago | 23m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 70.92% | 24.60% | 24.60% | 1450 ms | ↓ 0.61x | 2 | 3d 1h | 22d ago | 23m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.72% | 99.72% | 2801 ms | ↑ 1.31x | 1 | 0s | 15d ago | 33m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1977 ms | → 1.00x | 0 | — | — | 18m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.74% | 97.92% | 97.92% | 4305 ms | ↑ 1.10x | 30 | 2m | 21d ago | 34m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.94% | 99.94% | 860 ms | ↓ 0.84x | 1 | 0s | 19d ago | 30m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.78% | 66.23% | 66.23% | 2828 ms | ↑ 1.28x | 5 | 0s | 22d ago | 23m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 84.74% | 84.79% | 84.79% | 264 ms | ↓ 0.70x | 10 | 7h 2m | 21d ago | 21m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1735 ms | → 1.00x | 0 | — | — | 18m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.94% | 99.94% | 2198 ms | ↑ 1.09x | 3 | 0s | 15d ago | 34m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.06% | 99.69% | 99.69% | 4340 ms | ↑ 2.36x | 4 | 55m | 20d ago | 34m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.82% | 99.59% | 99.59% | 2195 ms | ↑ 1.24x | 4 | 0s | 7d ago | 33m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 47.88% | 69.10% | 69.10% | 2483 ms | ↑ 1.06x | 2 | 6d 5h | 17d ago | 22m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1676 ms | → 1.03x | 0 | — | — | 18m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 76.90% | 72.35% | 72.35% | 1984 ms | ↑ 1.45x | 2 | 2d 11h | 25d ago | 21m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2369 ms | ↓ 0.91x | 0 | — | — | 18m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1343 ms | ↑ 1.41x | 0 | — | — | 21m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.91% | 98.91% | 1390 ms | → 1.04x | 0 | — | — | 24m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.82% | 98.37% | 98.37% | 2199 ms | ↑ 1.50x | 4 | 0s | 22d ago | 23m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 97.89% | 95.35% | 95.35% | 787 ms | ↓ 0.21x | 21 | 18m | 23d ago | 21m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1134 ms | → 1.00x | 0 | — | — | 18m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2126 ms | ↓ 0.75x | 0 | — | — | 18m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2336 ms | ↓ 0.89x | 0 | — | — | 18m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.67% | 98.35% | 98.35% | 485 ms | ↓ 0.78x | 5 | 12m | 21d ago | 22m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.56% | 98.85% | 98.85% | 940 ms | ↓ 0.75x | 11 | 0s | 13d ago | 25m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1121 ms | → 1.00x | 0 | — | — | 18m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 70.82% | 12.14% | 12.14% | 1266 ms | ↑ 1.26x | 1 | 6d 3h | 30d ago | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 777 ms | ↑ 1.17x | 0 | — | — | 35m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.82% | 99.82% | 672 ms | → 1.02x | 1 | 0s | 27d ago | 34m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 1001 ms | → 1.01x | 0 | — | — | 33m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 95.55% | 95.61% | 95.61% | 1956 ms | → 1.02x | 1 | 13h 10m | 22d ago | 19m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.42% | 97.54% | 97.54% | 2403 ms | ↑ 2.00x | 7 | 50m | 22d ago | 23m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.64% | 99.72% | 99.72% | 480 ms | ↓ 0.80x | 7 | 4m | 16d ago | 34m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1550 ms | → 1.00x | 0 | — | — | 19m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.28% | 98.56% | 98.56% | 4520 ms | ↑ 1.20x | 18 | 0s | 22d ago | 35m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 58.45% | 80.11% | 80.11% | 2773 ms | ↑ 1.07x | 4 | 3d 13h | 22d ago | 22m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3580 ms | ↑ 1.97x | 1 | 0s | 29d ago | 33m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1412 ms | → 1.00x | 0 | — | — | 18m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 56.33% | 34.22% | 34.22% | 825 ms | ↑ 1.09x | 1 | 9d 1h | 30d ago | 34m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.19% | 97.99% | 97.99% | 4537 ms | ↑ 2.13x | 20 | 30s | 22d ago | 23m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1197 ms | ↓ 0.94x | 1 | 0s | 26d ago | 33m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.86% | 99.90% | 99.90% | 469 ms | ↓ 0.40x | 3 | 0s | 15d ago | 33m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.85% | 99.80% | 99.80% | 2079 ms | ↑ 1.22x | 3 | 0s | 22d ago | 23m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.82% | 99.85% | 99.85% | 2165 ms | ↑ 1.15x | 3 | 3m | 21d ago | 23m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.22% | 99.28% | 99.28% | 1711 ms | ↑ 1.34x | 3 | 37m | 22d ago | 21m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.89% | 87.86% | 87.86% | 1299 ms | → 1.02x | 2 | 0s | 16d ago | 23m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.93% | 99.58% | 99.58% | 1501 ms | → 1.04x | 1 | 0s | 25d ago | 34m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.64% | 95.37% | 95.37% | 2999 ms | ↑ 1.17x | 10 | 28m | 14d ago | 23m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 70.79% | 11.11% | 11.11% | 3041 ms | ↑ 2.18x | 2 | 3d 2h | 21d ago | 24m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 832 ms | → 0.99x | 0 | — | — | 18m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.75% | 99.73% | 99.73% | 2328 ms | → 1.00x | 6 | 0s | 15d ago | 33m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 70.36% | 10.90% | 10.90% | 1747 ms | ↓ 0.80x | 12 | 12h 19m | 22d ago | 24m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.78% | 98.67% | 98.67% | 2830 ms | ↑ 1.82x | 5 | 0s | 22d ago | 23m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.89% | 99.91% | 99.91% | 2029 ms | ↑ 1.26x | 2 | 0s | 20d ago | 34m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.64% | 99.64% | 99.64% | 937 ms | ↓ 0.83x | 9 | 0s | 8d ago | 32m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.02% | 99.55% | 99.55% | 1953 ms | ↑ 1.13x | 3 | 1h 17m | 27d ago | 34m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1929 ms | ↓ 0.74x | 0 | — | — | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.78% | 98.92% | 98.92% | 2150 ms | → 0.96x | 5 | 0s | 22d ago | 33m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.85% | 97.43% | 97.43% | 1399 ms | ↓ 0.90x | 3 | 0s | 23d ago | 21m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.82% | 96.97% | 96.97% | 2659 ms | ↑ 1.62x | 4 | 0s | 22d ago | 22m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.37% | 94.37% | 94.37% | 739 ms | ↓ 0.55x | 11 | 5m | 21d ago | 21m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 56.25% | 8.81% | 8.81% | 1445 ms | → 1.03x | 4 | 2d 6h | 8d ago | 33m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.89% | 63.83% | 63.83% | 1095 ms | ↑ 1.36x | 2 | 0s | 22d ago | 23m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.78% | 76.36% | 76.36% | 2436 ms | ↑ 1.34x | 5 | 0s | 15d ago | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.71% | 99.77% | 99.77% | 1760 ms | ↓ 0.94x | 6 | 2m | 22d ago | 33m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.67% | 99.67% | 3176 ms | ↑ 1.57x | 2 | 5m | 23d ago | 34m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2889 ms | → 1.00x | 0 | — | — | 18m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 76.66% | 90.40% | 90.40% | 1732 ms | ↓ 0.63x | 13 | 15h 4m | 9d ago | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.89% | 99.86% | 99.86% | 1132 ms | ↓ 0.82x | 2 | 0s | 22d ago | 25m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 84.25% | 83.61% | 83.61% | 1028 ms | ↓ 0.22x | 215 | 11m | 13d ago | 32m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 87.90% | 87.49% | 87.49% | 2398 ms | ↓ 0.23x | 217 | 5m | 16d ago | 22m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.93% | 99.15% | 99.15% | 2249 ms | ↑ 1.39x | 1 | 0s | 22d ago | 23m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.93% | 61.66% | 61.66% | 742 ms | ↓ 0.29x | 1 | 0s | 22d ago | 24m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.89% | 96.11% | 96.11% | 2107 ms | ↑ 2.01x | 2 | 0s | 22d ago | 24m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2629 ms | → 1.03x | 0 | — | — | 18m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.71% | 99.73% | 99.73% | 3804 ms | ↑ 1.22x | 7 | 0s | 8d ago | 34m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1721 ms | → 1.00x | 0 | — | — | 19m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 98.30% | 90.97% | 90.97% | 4061 ms | ↑ 1.27x | 28 | 7m | 13d ago | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1282 ms | → 1.00x | 0 | — | — | 18m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.93% | 51.51% | 51.51% | 1794 ms | → 1.05x | 1 | 0s | 22d ago | 24m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.93% | 98.11% | 98.11% | 1483 ms | ↑ 1.12x | 1 | 0s | 22d ago | 23m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 88.54% | 26.58% | 26.58% | 2848 ms | ↑ 1.18x | 11 | 4h 31m | 9d ago | 23m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.74% | 99.14% | 99.14% | 3728 ms | ↑ 1.58x | 3 | 22m | 19d ago | 29m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.72% | 99.72% | 3623 ms | ↑ 1.53x | 0 | — | — | 34m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 2122 ms | ↑ 1.23x | 2 | 0s | 22d ago | 23m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 98.38% | 43.22% | 43.22% | 4101 ms | ↑ 1.38x | 5 | 1h 12m | 21d ago | 23m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2134 ms | → 1.00x | 0 | — | — | 19m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.82% | 99.06% | 99.06% | 2913 ms | ↑ 1.37x | 4 | 0s | 8d ago | 23m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.41% | 97.41% | 97.41% | 1973 ms | ↑ 1.65x | 1 | 11h 52m | 10d ago | 19m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.67% | 75.21% | 75.21% | 1623 ms | ↑ 2.34x | 3 | 33m | 10d ago | 23m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 189 ms | ↓ 0.43x | 0 | — | — | 34m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 781 ms | → 1.00x | 0 | — | — | 18m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.85% | 99.94% | 99.94% | 2308 ms | ↑ 1.43x | 2 | 1m | 22d ago | 29m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.82% | 99.48% | 99.48% | 3968 ms | ↑ 1.55x | 4 | 0s | 21d ago | 34m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 94.21% | 75.38% | 75.38% | 1782 ms | ↓ 0.87x | 47 | 24m | 21d ago | 23m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.93% | 83.25% | 83.25% | 2739 ms | ↑ 2.28x | 1 | 0s | 22d ago | 23m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1048 ms | → 1.00x | 0 | — | — | 18m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.78% | 95.57% | 95.57% | 1377 ms | ↑ 1.37x | 4 | 0s | 22d ago | 24m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.89% | 99.97% | 99.97% | 926 ms | ↓ 0.77x | 2 | 0s | 22d ago | 32m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.41% | 90.30% | 90.30% | 2941 ms | ↓ 0.94x | 15 | 0s | 11d ago | 23m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.71% | 97.97% | 97.97% | 1213 ms | ↓ 0.91x | 7 | 0s | 22d ago | 32m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 56.06% | 10.53% | 10.53% | 1327 ms | ↓ 0.66x | 1 | 9d 1h | 30d ago | 24m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2283 ms | ↓ 0.95x | 0 | — | — | 18m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.85% | 99.92% | 99.92% | 925 ms | → 1.02x | 3 | 0s | 22d ago | 22m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 56.02% | 9.21% | 9.21% | 1589 ms | ↑ 1.06x | 2 | 4d 13h | 8d ago | 24m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.89% | 54.83% | 54.83% | 2315 ms | ↑ 1.38x | 2 | 0s | 22d ago | 24m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.82% | 99.75% | 99.75% | 2921 ms | ↑ 1.31x | 4 | 0s | 15d ago | 33m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 61.50% | 61.50% | 853 ms | → 0.99x | 0 | — | — | 34m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.93% | 98.99% | 98.99% | 1167 ms | ↓ 0.86x | 1 | 0s | 22d ago | 32m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 56.39% | 8.81% | 8.81% | 990 ms | → 0.95x | 1 | 9d 1h | 30d ago | 32m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1032 ms | → 1.00x | 0 | — | — | 19m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.78% | 98.78% | 98.78% | 1881 ms | ↓ 0.79x | 1 | 3h 45m | 15d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.64% | 99.82% | 99.82% | 3934 ms | ↑ 1.07x | 1 | 0s | 7d ago | 19m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1488 ms | ↓ 0.92x | 0 | — | — | 19m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2131 ms | → 1.00x | 0 | — | — | 19m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.02% | 92.61% | 92.61% | 4163 ms | ↓ 0.86x | 113 | 20m | 21d ago | 33m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.98% | 99.98% | 2890 ms | ↑ 1.23x | 1 | 0s | 22d ago | 23m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.70% | 98.93% | 98.93% | 1549 ms | ↑ 1.29x | 6 | 2m | 16d ago | 23m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 49.08% | 21.72% | 21.72% | 2734 ms | ↑ 1.05x | 2 | 5d 22h | 18d ago | 34m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.93% | 99.53% | 99.53% | 1332 ms | ↑ 1.16x | 1 | 0s | 25d ago | 34m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.39% | 99.39% | 1408 ms | ↑ 1.22x | 0 | — | — | 32m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 538 ms | → 1.00x | 1 | 0s | 26d ago | 35m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.95% | 91.16% | 91.16% | 1544 ms | ↓ 0.74x | 19 | 8m | 10d ago | 32m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.52% | 97.57% | 97.57% | 2672 ms | → 1.00x | 1 | 9h 60m | 28d ago | 21m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.73% | 96.30% | 96.30% | 3118 ms | ↑ 1.22x | 25 | 6m | 10d ago | 33m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.64% | 99.69% | 99.69% | 2316 ms | ↑ 1.08x | 2 | 25m | 22d ago | 21m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.93% | 84.87% | 84.87% | 1611 ms | ↑ 1.40x | 1 | 0s | 22d ago | 23m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1486 ms | ↑ 1.18x | 0 | — | — | 33m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.89% | 99.43% | 99.43% | 1048 ms | ↑ 1.11x | 1 | 0s | 26d ago | 34m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 1650 ms | ↓ 0.72x | 0 | — | — | 18m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.86% | 99.71% | 99.71% | 925 ms | → 1.02x | 2 | 5m | 27d ago | 34m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.85% | 99.86% | 99.86% | 3280 ms | ↑ 1.89x | 3 | 0s | 14d ago | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.85% | 99.81% | 99.81% | 743 ms | ↓ 0.95x | 3 | 0s | 24d ago | 32m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.93% | 98.59% | 98.59% | 1954 ms | → 0.95x | 1 | 0s | 22d ago | 23m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.85% | 96.74% | 96.74% | 1621 ms | ↑ 1.33x | 3 | 0s | 15d ago | 21m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.57% | 91.23% | 91.23% | 4462 ms | ↑ 1.52x | 10 | 1m | 22d ago | 35m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1808 ms | ↓ 0.80x | 0 | — | — | 18m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 94.54% | 94.60% | 94.60% | 690 ms | ↓ 0.39x | 4 | 4h 8m | 10d ago | 19m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.82% | 98.59% | 98.59% | 580 ms | → 0.96x | 2 | 10m | 23d ago | 24m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.71% | 98.63% | 98.63% | 3446 ms | ↑ 1.28x | 7 | 0s | 14d ago | 32m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2028 ms | → 0.99x | 0 | — | — | 18m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.08% | 96.89% | 96.89% | 3683 ms | ↑ 1.43x | 22 | 1m | 10d ago | 22m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1064 ms | → 1.00x | 0 | — | — | 18m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 56.28% | 20.55% | 20.55% | 867 ms | → 1.05x | 2 | 4d 13h | 11d ago | 32m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.78% | 99.76% | 99.76% | 1538 ms | ↓ 0.87x | 4 | 3m | 22d ago | 23m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.89% | 97.79% | 97.79% | 1771 ms | ↑ 1.42x | 2 | 0s | 22d ago | 23m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.93% | 99.92% | 99.92% | 1541 ms | ↑ 1.13x | 1 | 0s | 24d ago | 32m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.85% | 85.65% | 85.65% | 3037 ms | ↑ 1.51x | 3 | 0s | 15d ago | 23m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 91.22% | 96.14% | 96.14% | 1987 ms | ↑ 1.46x | 5 | 15h 59m | 13d ago | 24m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.85% | 99.85% | 1856 ms | ↑ 1.36x | 1 | 0s | 19d ago | 32m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 56.26% | 8.80% | 8.80% | 2664 ms | ↑ 1.10x | 3 | 3d | 15d ago | 33m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1010 ms | ↓ 0.67x | 0 | — | — | 19m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.71% | 99.84% | 99.84% | 2168 ms | ↑ 1.22x | 2 | 30m | 17d ago | 32m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.89% | 99.93% | 99.93% | 1259 ms | ↑ 2.10x | 2 | 0s | 8d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 70.77% | 10.96% | 10.96% | 2104 ms | → 1.04x | 3 | 2d 1h | 17d ago | 24m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 55.89% | 8.65% | 8.65% | 2331 ms | ↑ 1.23x | 6 | 1d 12h | 7d ago | 24m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.82% | 99.88% | 99.88% | 3599 ms | ↑ 1.84x | 4 | 0s | 14d ago | 22m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 95.21% | 95.25% | 95.25% | 1810 ms | ↑ 1.10x | 4 | 5h 15m | 24d ago | 21m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3170 ms | → 1.00x | 0 | — | — | 18m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.78% | 99.76% | 99.76% | 3917 ms | ↑ 2.21x | 3 | 7m | 22d ago | 22m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.38% | 99.88% | 99.88% | 1398 ms | ↑ 1.17x | 3 | 1h 27m | 13d ago | 33m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.92% | 99.92% | 3132 ms | ↑ 1.86x | 1 | 0s | 24d ago | 32m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.53% | 99.72% | 99.72% | 2709 ms | ↑ 1.81x | 5 | 14m | 24d ago | 32m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.89% | 97.61% | 97.61% | 1166 ms | ↑ 1.06x | 1 | 10m | 23d ago | 21m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.53% | 99.80% | 99.80% | 2447 ms | ↑ 1.19x | 11 | 15s | 18d ago | 29m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.93% | 99.82% | 99.82% | 2897 ms | ↑ 2.76x | 1 | 0s | 25d ago | 24m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.78% | 99.02% | 99.02% | 1443 ms | ↑ 1.19x | 5 | 0s | 21d ago | 33m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.93% | 99.99% | 99.99% | 404 ms | ↓ 0.56x | 1 | 0s | 30d ago | 32m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 99.80% | 53.97% | 89.32% | 89.32% | 646 ms | ↓ 0.39x | 178 | 1h 54m | 7d ago | 34m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 94.44% | 14.80% | 14.80% | 2143 ms | ↑ 1.10x | 5 | 4h 52m | 3d ago | 35m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.89% | 98.74% | 98.74% | 1588 ms | ↑ 1.05x | 2 | 0s | 7d ago | 32m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.80% | 99.49% | 99.17% | 99.17% | 1892 ms | ↑ 1.39x | 11 | 55s | 7d ago | 33m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.57% | 87.83% | 87.83% | 1455 ms | → 1.05x | 10 | 1m | 7d ago | 33m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.86% | 99.91% | 99.91% | 1932 ms | ↑ 1.09x | 3 | 0s | 7d ago | 33m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.80% | 99.49% | 99.90% | 99.90% | 2483 ms | ↑ 1.24x | 10 | 3m | 7d ago | 33m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.80% | 99.53% | 99.72% | 99.72% | 3558 ms | ↑ 1.27x | 9 | 3m | 1d ago | 30m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 99.74% | 20.97% | 20.97% | 1575 ms | ↓ 0.86x | 6 | 0s | 7d ago | 30m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 56.90% | 8.85% | 8.85% | 1429 ms | ↓ 0.91x | 5 | 1d 19h | 5d ago | 30m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 56.23% | 8.74% | 8.74% | 2838 ms | → 1.03x | 2 | 4d 13h | 6d ago | 29m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.80% | 98.79% | 99.62% | 99.62% | 3167 ms | ↑ 1.79x | 4 | 1h 8m | 2d ago | 29m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.82% | 99.84% | 99.84% | 2518 ms | ↑ 1.10x | 4 | 0s | 2d ago | 29m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 69.21% | 10.76% | 10.76% | 912 ms | ↓ 0.56x | 38 | 3h 55m | 4d ago | 30m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.80% | 98.49% | 96.35% | 96.35% | 4242 ms | ↑ 1.58x | 15 | 21m | 4d ago | 24m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 70.77% | 11.82% | 11.82% | 1347 ms | ↓ 0.60x | 3 | 2d 1h | 5d ago | 24m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 56.07% | 39.95% | 39.95% | 1590 ms | ↓ 0.76x | 3 | 3d | 6d ago | 23m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.74% | 97.78% | 97.78% | 2330 ms | ↓ 0.92x | 6 | 0s | 2d ago | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.80% | 99.78% | 97.79% | 97.79% | 2445 ms | ↑ 1.13x | 5 | 0s | 3d ago | 22m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.80% | 96.69% | 96.69% | 96.69% | 1347 ms | → 1.03x | 2 | 1h 20m | 17h ago | 19m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.80% | 99.67% | 99.83% | 99.83% | 768 ms | ↓ 0.68x | 7 | 1m | 7d ago | 22m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 98.15% | 97.70% | 97.70% | 3138 ms | ↓ 0.94x | 41 | 3m | 7d ago | 22m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.85% | 53.68% | 53.68% | 3015 ms | ↑ 1.26x | 3 | 0s | 7d ago | 24m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.80% | 99.81% | 99.81% | 99.81% | 878 ms | → 0.96x | 1 | 0s | 4d ago | 19m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 91.14% | 93.02% | 93.02% | 2660 ms | ↓ 0.68x | 3 | 13h 10m | 7d ago | 22m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.80% | 56.03% | 24.03% | 24.03% | 699 ms | ↑ 1.15x | 4 | 2d 6h | 7d ago | 23m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.88% | 99.92% | 99.92% | 1803 ms | ↓ 0.90x | 2 | 0s | 4d ago | 21m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.80% | 99.70% | 98.03% | 98.03% | 2602 ms | ↓ 0.79x | 6 | 2m | 1d ago | 22m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.80% | 99.56% | 98.44% | 98.44% | 3186 ms | ↑ 2.08x | 10 | 59s | 7d ago | 22m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.62% | 99.67% | 99.67% | 2203 ms | ↑ 1.44x | 8 | 0s | 7d ago | 21m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.85% | 98.37% | 98.37% | 1747 ms | ↓ 0.81x | 3 | 0s | 5d ago | 23m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.93% | 99.93% | 99.93% | 1935 ms | → 1.03x | 1 | 0s | 3d ago | 18m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 99.08% | 93.84% | 93.84% | 3654 ms | ↓ 0.79x | 18 | 4m | 6d ago | 22m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.80% | 99.70% | 94.95% | 94.95% | 1416 ms | ↓ 0.91x | 2 | 51m | 2d ago | 21m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.78% | 99.78% | 99.78% | 99.78% | 1945 ms | → 1.00x | 1 | 0s | 11h ago | 18m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.78% | 99.78% | 99.78% | 99.78% | 3056 ms | → 1.00x | 1 | 0s | 5d ago | 18m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.74% | 99.74% | 99.74% | 99.74% | 850 ms | → 1.00x | 1 | 0s | 5d ago | 18m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.60% | 98.95% | 99.65% | 99.65% | 4141 ms | ↑ 1.21x | 27 | 45s | 6d ago | 34m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.60% | 33.47% | 85.78% | 85.78% | 2920 ms | → 1.04x | 3 | 5d 16h | 3d ago | 33m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.60% | 99.24% | 99.71% | 99.71% | 3294 ms | ↑ 1.50x | 5 | 1h | 4d ago | 33m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.64% | 90.90% | 90.90% | 804 ms | ↓ 0.79x | 3 | 40m | 4d ago | 33m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.60% | 99.10% | 99.45% | 99.45% | 4082 ms | ↑ 1.33x | 23 | 52s | 6d ago | 34m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 56.26% | 22.22% | 22.22% | 3147 ms | ↑ 1.21x | 2 | 4d 13h | 4d ago | 32m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.29% | 99.34% | 99.34% | 2148 ms | ↓ 0.91x | 11 | 3m | 4d ago | 33m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.78% | 99.83% | 99.83% | 4506 ms | ↑ 1.78x | 5 | 0s | 6d ago | 29m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.60% | 94.27% | 96.27% | 96.27% | 1252 ms | ↓ 0.85x | 27 | 49m | 2d ago | 30m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.60% | 99.74% | 99.72% | 99.72% | 3227 ms | ↑ 1.44x | 6 | 0s | 6d ago | 29m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.58% | 98.97% | 98.97% | 3353 ms | ↑ 1.77x | 9 | 32m | 6d ago | 29m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.98% | 82.60% | 82.60% | 3519 ms | → 0.95x | 26 | 23s | 6d ago | 29m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.60% | 99.41% | 99.27% | 99.27% | 2248 ms | ↑ 1.20x | 12 | 2m | 19h ago | 24m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.60% | 99.41% | 99.41% | 99.41% | 4534 ms | → 1.00x | 5 | 0s | 15h ago | 18m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.60% | 99.45% | 99.56% | 99.56% | 994 ms | ↓ 0.77x | 10 | 8m | 4d ago | 21m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.60% | 99.62% | 99.62% | 99.62% | 790 ms | → 1.00x | 2 | 0s | 6h ago | 18m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.60% | 99.62% | 99.62% | 99.62% | 1502 ms | → 0.99x | 1 | 19m | 4d ago | 18m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.45% | 99.10% | 99.10% | 744 ms | ↓ 0.54x | 12 | 2m | 6d ago | 22m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.60% | 87.10% | 86.25% | 86.25% | 1579 ms | ↓ 0.90x | 8 | 7h 12m | 3d ago | 21m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.60% | 99.78% | 54.86% | 54.86% | 2445 ms | ↑ 1.08x | 5 | 0s | 20h ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 99.60% | 92.69% | 92.75% | 92.75% | 3500 ms | → 0.98x | 42 | 21m | 2d ago | 19m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.60% | 94.92% | 94.98% | 94.98% | 2902 ms | ↑ 1.22x | 6 | 2h 49m | 5d ago | 21m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.60% | 99.59% | 64.62% | 64.62% | 1738 ms | ↑ 1.52x | 9 | 1m | 7d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.56% | 99.56% | 99.56% | 99.56% | 2147 ms | → 1.00x | 1 | 20m | 5d ago | 18m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.56% | 99.56% | 99.56% | 99.56% | 2896 ms | → 1.00x | 1 | 20m | 4d ago | 18m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.40% | 99.59% | 99.64% | 99.64% | 1411 ms | ↓ 0.88x | 5 | 8m | 2d ago | 25m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.39% | 87.74% | 81.27% | 81.27% | 2404 ms | ↓ 0.34x | 212 | 7m | 2d ago | 22m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.39% | 99.43% | 99.43% | 99.43% | 1031 ms | → 0.97x | 3 | 0s | 1d ago | 19m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.39% | 99.70% | 99.74% | 99.74% | 2845 ms | ↑ 1.66x | 5 | 8m | 6d ago | 22m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.39% | 99.57% | 99.57% | 99.57% | 231 ms | ↓ 0.13x | 3 | 20m | 7d ago | 19m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.39% | 99.67% | 99.72% | 99.72% | 3402 ms | ↑ 1.64x | 8 | 0s | 6d ago | 22m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.39% | 99.59% | 86.75% | 86.75% | 3044 ms | ↑ 2.29x | 8 | 5m | 2d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.39% | 95.41% | 95.47% | 95.47% | 2068 ms | ↓ 0.86x | 6 | 2h 8m | 16h ago | 19m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.34% | 99.34% | 99.34% | 99.34% | 1148 ms | → 1.00x | 3 | 0s | 1d ago | 18m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.20% | 99.20% | 97.67% | 97.67% | 4288 ms | ↑ 1.21x | 21 | 0s | 3d ago | 33m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.20% | 99.38% | 98.93% | 98.93% | 2517 ms | ↑ 1.06x | 13 | 5m | 5d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.19% | 99.79% | 99.83% | 99.83% | 2539 ms | ↑ 1.39x | 2 | 20m | 1d ago | 21m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.19% | 99.59% | 96.96% | 96.96% | 4166 ms | ↑ 2.09x | 8 | 3m | 6d ago | 22m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.19% | 99.67% | 97.69% | 97.69% | 2842 ms | ↑ 1.58x | 7 | 1m | 3d ago | 22m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.19% | 70.56% | 19.75% | 19.75% | 2235 ms | ↑ 1.18x | 7 | 21h 6m | 6d ago | 23m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 99.12% | 99.12% | 99.12% | 99.12% | 1313 ms | → 1.00x | 4 | 0s | 6d ago | 18m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (89)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.00% | 99.28% | 99.84% | 99.84% | 4120 ms | ↑ 1.56x | 19 | 0s | 4d ago | 34m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.00% | 99.54% | 99.59% | 99.59% | 749 ms | ↑ 1.09x | 8 | 0s | 2d ago | 34m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.00% | 62.42% | 78.22% | 78.22% | 164 ms | ↓ 0.66x | 8 | 1d 3h | 2d ago | 34m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.99% | 99.67% | 99.69% | 99.69% | 4319 ms | ↑ 2.11x | 8 | 0s | 2d ago | 22m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.99% | 98.60% | 89.17% | 89.17% | 2091 ms | → 1.03x | 30 | 2m | 2d ago | 23m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.90% | 98.90% | 98.90% | 98.90% | 1401 ms | → 1.00x | 5 | 0s | 3d ago | 18m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.80% | 98.92% | 99.25% | 99.25% | 1494 ms | ↓ 0.70x | 29 | 0s | 2d ago | 34m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.80% | 56.06% | 77.63% | 77.63% | 3159 ms | ↑ 1.07x | 3 | 3d 1h | 7d ago | 34m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.80% | 87.63% | 83.55% | 83.55% | 1916 ms | ↓ 0.76x | 223 | 5m | 6d ago | 34m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.79% | 99.42% | 97.60% | 97.60% | 3726 ms | ↑ 1.18x | 13 | 3m | 5d ago | 29m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.79% | 99.71% | 98.72% | 98.72% | 1577 ms | ↑ 2.09x | 7 | 0s | 1d ago | 23m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.48% | 95.95% | 95.95% | 2225 ms | ↑ 1.26x | 8 | 12m | 6d ago | 23m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.79% | 99.50% | 99.54% | 99.54% | 548 ms | ↓ 0.89x | 7 | 10m | 21h ago | 21m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.59% | 95.02% | 98.76% | 98.76% | 3902 ms | ↑ 1.11x | 88 | 8m | 4d ago | 34m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.59% | 89.16% | 65.18% | 65.18% | 4323 ms | → 1.01x | 219 | 4m | 1d ago | 30m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.59% | 55.80% | 8.80% | 8.80% | 3338 ms | ↑ 1.78x | 5 | 1d 20h | 3d ago | 24m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.58% | 99.52% | 66.77% | 66.77% | 2181 ms | ↑ 1.06x | 9 | 7m | 2d ago | 23m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.58% | 96.69% | 96.69% | 96.69% | 2462 ms | ↓ 0.80x | 6 | 2h 14m | 2d ago | 19m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.58% | 69.17% | 54.62% | 54.62% | 2055 ms | ↓ 0.83x | 14 | 11h 6m | 7d ago | 23m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.39% | 75.96% | 75.97% | 75.97% | 3659 ms | ↓ 0.87x | 295 | 12m | 18h ago | 35m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 98.39% | 99.64% | 99.60% | 99.60% | 1955 ms | ↑ 1.22x | 5 | 16m | 13h ago | 34m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.18% | 87.64% | 81.67% | 81.67% | 4714 ms | → 1.05x | 241 | 4m | 10h ago | 23m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.02% | 97.86% | 98.08% | 98.08% | 2078 ms | → 1.02x | 7 | 6m | 6d ago | 19m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.98% | 89.37% | 76.63% | 76.63% | 3132 ms | ↑ 1.28x | 171 | 9m | 1d ago | 29m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.98% | 17.98% | 7.06% | 7.06% | 2622 ms | → 1.01x | 3 | 7d 16h | 4d ago | 29m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 97.98% | 99.56% | 98.29% | 98.29% | 3251 ms | ↑ 1.73x | 3 | 54m | 16h ago | 23m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.98% | 95.79% | 91.60% | 91.60% | 2206 ms | ↑ 1.16x | 13 | 1h 26m | 7d ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.98% | 86.69% | 59.27% | 59.27% | 4664 ms | → 1.03x | 243 | 5m | 14h ago | 23m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 97.98% | 94.29% | 94.35% | 94.35% | 663 ms | ↓ 0.47x | 16 | 51m | 7d ago | 19m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 97.98% | 99.56% | 98.37% | 98.37% | 1647 ms | ↓ 0.77x | 3 | 54m | 16h ago | 23m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 97.98% | 70.03% | 44.49% | 44.49% | 2360 ms | ↑ 1.11x | 21 | 7h 4m | 2d ago | 22m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 97.77% | 95.88% | 61.61% | 61.61% | 868 ms | ↑ 1.18x | 17 | 1h 43m | 2d ago | 24m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 97.59% | 99.06% | 99.84% | 99.84% | 3277 ms | ↑ 1.71x | 25 | 0s | 6d ago | 34m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.58% | 87.14% | 84.59% | 84.59% | 4393 ms | → 1.05x | 246 | 4m | 17h ago | 24m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 97.39% | 84.66% | 83.54% | 83.54% | 4557 ms | → 1.04x | 229 | 12m | 22h ago | 35m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.39% | 97.99% | 98.03% | 98.03% | 4641 ms | ↑ 1.61x | 44 | 4m | 24h ago | 35m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.37% | 99.06% | 99.06% | 99.06% | 1270 ms | ↓ 0.59x | 1 | 4h 12m | 23h ago | 19m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 97.37% | 64.46% | 27.71% | 27.71% | 2500 ms | ↓ 0.86x | 23 | 8h 35m | 1h ago | 24m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.37% | 81.12% | 79.13% | 79.13% | 4782 ms | ↑ 1.17x | 220 | 16m | 1d ago | 22m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.37% | 42.49% | 25.03% | 25.03% | 2658 ms | ↓ 0.69x | 20 | 17h 27m | 6d ago | 22m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.98% | 87.53% | 84.09% | 84.09% | 4486 ms | → 1.05x | 256 | 4m | 16h ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 96.96% | 82.77% | 35.21% | 35.21% | 3230 ms | ↑ 1.62x | 24 | 3h 7m | 6d ago | 23m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 96.92% | 96.92% | 96.92% | 96.92% | 2404 ms | → 1.00x | 9 | 11m | 3d ago | 18m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 96.92% | 96.92% | 96.92% | 96.92% | 2484 ms | → 1.00x | 10 | 8m | 6d ago | 19m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.77% | 87.12% | 71.43% | 71.43% | 4513 ms | → 1.02x | 265 | 4m | 17h ago | 30m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 96.39% | 70.54% | 57.12% | 57.12% | 3725 ms | ↑ 1.08x | 246 | 27m | 4d ago | 34m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.38% | 97.46% | 98.64% | 98.64% | 3813 ms | → 1.00x | 59 | 4m | 21h ago | 33m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 96.36% | 96.58% | 96.58% | 96.58% | 3086 ms | → 1.05x | 12 | 10m | 6d ago | 19m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.15% | 96.39% | 96.39% | 96.39% | 2375 ms | → 1.02x | 13 | 9m | 21h ago | 18m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 96.15% | 98.34% | 98.34% | 98.34% | 3016 ms | → 1.01x | 12 | 18m | 6d ago | 19m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 96.04% | 96.04% | 96.04% | 96.04% | 2716 ms | → 1.00x | 11 | 13m | 6d ago | 19m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 95.59% | 95.59% | 95.59% | 95.59% | 3420 ms | → 1.00x | 10 | 22m | 6d ago | 19m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 95.56% | 98.94% | 99.41% | 99.41% | 4155 ms | ↑ 2.12x | 16 | 14m | 6d ago | 29m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.38% | 97.14% | 91.56% | 91.56% | 1108 ms | ↓ 0.87x | 29 | 25m | 6d ago | 33m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.34% | 84.13% | 77.65% | 77.65% | 4804 ms | → 1.05x | 322 | 6m | 4h ago | 22m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 95.15% | 95.15% | 95.15% | 95.15% | 2135 ms | → 1.00x | 11 | 20m | 6d ago | 19m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 95.15% | 95.15% | 95.15% | 95.15% | 2148 ms | → 1.00x | 11 | 20m | 5d ago | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 94.94% | 77.66% | 77.66% | 77.66% | 3305 ms | → 0.97x | 14 | 1d 1h | 6d ago | 19m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 94.94% | 98.86% | 88.07% | 88.07% | 4066 ms | ↑ 2.42x | 23 | 7m | 1d ago | 22m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.77% | 54.61% | 8.51% | 8.51% | 2674 ms | ↑ 1.24x | 43 | 5h 6m | 7h ago | 32m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.74% | 85.21% | 78.08% | 78.08% | 4812 ms | → 1.04x | 289 | 5m | 17h ago | 23m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 94.49% | 87.37% | 87.37% | 87.37% | 2823 ms | → 1.00x | 12 | 1d 6h | 5d ago | 19m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.93% | 98.82% | 99.30% | 99.30% | 4011 ms | ↑ 2.27x | 4 | 2h 15m | 6d ago | 22m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 93.76% | 98.76% | 39.52% | 39.52% | 1139 ms | ↓ 0.89x | 10 | 47m | 2d ago | 32m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 93.56% | 98.54% | 99.00% | 99.00% | 4009 ms | ↑ 1.57x | 11 | 47m | 2d ago | 32m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 93.56% | 98.76% | 96.97% | 96.97% | 3993 ms | ↑ 1.50x | 10 | 47m | 2d ago | 32m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 93.56% | 98.73% | 54.45% | 54.45% | 4229 ms | ↑ 1.50x | 11 | 43m | 2d ago | 32m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 93.37% | 91.26% | 95.57% | 95.57% | 4188 ms | → 0.97x | 120 | 20m | 2d ago | 34m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 93.36% | 98.76% | 99.19% | 99.19% | 4133 ms | ↑ 2.35x | 9 | 54m | 2d ago | 32m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 93.35% | 37.73% | 29.22% | 29.22% | 528 ms | ↓ 0.82x | 4 | 4d 1h | 11d ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.71% | 98.60% | 95.88% | 95.88% | 1947 ms | ↑ 1.16x | 2 | 5h 55m | 2d ago | 21m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.71% | 91.67% | 67.46% | 67.46% | 2526 ms | ↓ 0.88x | 30 | 1h 27m | 1d ago | 23m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.09% | 97.93% | 96.82% | 96.82% | 2262 ms | ↑ 1.51x | 5 | 3h 4m | 5d ago | 21m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 89.56% | 51.10% | 7.99% | 7.99% | 910 ms | ↓ 0.78x | 73 | 3h 20m | 4h ago | 33m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 89.52% | 54.07% | 8.41% | 8.41% | 4363 ms | ↑ 1.29x | 51 | 4h 24m | 1h ago | 29m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 88.26% | 49.46% | 36.33% | 36.33% | 3871 ms | ↑ 1.17x | 147 | 1h 34m | 2h ago | 22m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 87.70% | 96.09% | 98.72% | 98.72% | 4472 ms | ↑ 1.35x | 60 | 15m | 1h ago | 29m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.47% | 53.05% | 9.52% | 9.52% | 4582 ms | ↑ 1.05x | 214 | 57m | 13h ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.25% | 87.25% | 87.25% | 87.25% | 747 ms | → 1.00x | 2 | 10h 16m | 17h ago | 19m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 86.84% | 88.67% | 91.28% | 91.28% | 2730 ms | ↑ 1.74x | 15 | 6h 44m | 10h ago | 22m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 85.02% | 85.93% | 85.93% | 85.93% | 1273 ms | → 0.97x | 1 | 1d 1h | 3d ago | 19m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.17% | 67.18% | 32.94% | 32.94% | 2811 ms | ↑ 1.29x | 10 | 17h 44m | 2d ago | 22m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 76.62% | 76.62% | 76.62% | 76.62% | 1450 ms | → 1.00x | 1 | 1d 8h | 2d ago | 18m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 70.24% | 39.62% | 11.93% | 11.93% | 4637 ms | ↑ 1.13x | 264 | 1h 5m | 43m ago | 23m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 64.92% | 57.84% | 61.86% | 61.86% | 4862 ms | ↑ 1.05x | 511 | 17m | 50m ago | 30m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 50.20% | 76.88% | 76.93% | 76.93% | 1649 ms | ↑ 1.12x | 5 | 1d 16h | 6d ago | 21m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 45.16% | 11.63% | 11.68% | 11.68% | 3335 ms | → 1.00x | 2 | 10d 7h | 16d ago | 25m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 40.89% | 8.74% | 17.69% | 17.69% | 1451 ms | → 1.00x | 1 | 27d 2h | 30d ago | 22m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.50% | 9.13% | 9.13% | 9.13% | 3171 ms | → 1.02x | 43 | 3h 27m | 4h ago | 18m ago |

</details>

<details open>
<summary><strong>🔴 Down (188)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 98.38% | 78.03% | 66.66% | 66.66% | 1751 ms | ↑ 1.12x | 8 | 12h 58m | 2h ago | 23m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 97.78% | 99.19% | 97.57% | 97.57% | 979 ms | ↓ 0.85x | 9 | 29m | 2h ago | 24m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 97.57% | 99.34% | 98.25% | 98.25% | 3645 ms | ↑ 1.77x | 7 | 29m | 3h ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 87.65% | 97.54% | 97.58% | 97.58% | 1840 ms | ↑ 1.32x | 3 | 6h 37m | 20h ago | 19m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 77.42% | 49.09% | 7.62% | 7.62% | 3644 ms | ↓ 0.83x | 163 | 1h 24m | 30m ago | 30m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 72.84% | 94.94% | 97.67% | 97.67% | 2081 ms | → 1.01x | 4 | 11h 40m | 2d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 70.04% | 89.87% | 89.93% | 89.93% | 3648 ms | ↑ 1.44x | 14 | 3h 47m | 2d ago | 19m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 59.92% | 88.19% | 89.08% | 89.08% | 3738 ms | ↑ 1.23x | 78 | 1h 1m | 3d ago | 22m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 57.05% | 57.05% | 57.05% | 57.05% | 1455 ms | → 1.00x | 1 | 2d 19h | 3d ago | 19m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 56.07% | 55.99% | 48.23% | 48.23% | 4408 ms | ↑ 1.05x | 58 | 4h 34m | 3d ago | 21m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 53.85% | 83.59% | 83.59% | 83.59% | 1049 ms | ↓ 0.49x | 1 | 3d 6h | 3d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 51.82% | 85.26% | 85.32% | 85.32% | 3917 ms | ↑ 1.76x | 13 | 6h 6m | 3d ago | 19m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 50.22% | 37.94% | 37.94% | 37.94% | 524 ms | → 1.00x | 2 | 2d 3h | 3d ago | 19m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 49.60% | 90.69% | 90.92% | 90.92% | 784 ms | ↓ 0.83x | 3 | 1d 4h | 4d ago | 21m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.57% | 33.10% | 9.44% | 9.44% | 4210 ms | ↑ 1.06x | 388 | 51m | 23m ago | 23m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 45.34% | 60.61% | 31.26% | 31.26% | 3885 ms | ↑ 2.22x | 23 | 10h 14m | 4d ago | 22m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 41.90% | 45.44% | 45.44% | 45.44% | 4692 ms | → 1.01x | 8 | 11h 56m | 4d ago | 18m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 38.26% | 87.96% | 89.20% | 89.20% | 1598 ms | ↑ 1.15x | 18 | 5h 49m | 2d ago | 21m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 31.58% | 87.18% | 84.70% | 84.70% | 2898 ms | ↑ 1.37x | 11 | 10h 25m | 5d ago | 22m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 3.85% | 9.52% | 9.52% | 9.52% | 4370 ms | ↑ 2.07x | 1 | 6d 17h | 7d ago | 19m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.80% | 34.86% | 66.28% | 66.28% | 2174 ms | ↓ 0.71x | 226 | 2h 10m | 2d ago | 35m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.61% | 79.71% | 80.58% | 80.58% | 836 ms | → 0.97x | 3 | 2d 14h | 16h ago | 21m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.40% | 18.00% | 29.13% | 29.13% | 985 ms | ↓ 0.81x | 61 | 10h 4m | 13h ago | 22m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 43.47% | 90.43% | 90.43% | — | — | 5 | 4d 4h | 21d ago | 33m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 74.88% | 74.88% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 42.13% | 80.50% | 80.50% | — | — | 29 | 17h 26m | 21d ago | 25m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 66.04% | 82.63% | 82.63% | — | — | 2 | 6d 12h | 13d ago | 22m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.23% | 6.23% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 12.20% | 13.68% | 13.68% | — | — | 11 | 2d 12h | 21d ago | 35m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.71% | 3.71% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 43.61% | 90.69% | 90.69% | — | — | 1 | 20d 22h | 21d ago | 30m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.81% | 39.81% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 27.80% | 27.80% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 36.33% | 81.40% | 81.40% | — | — | 141 | 3h 38m | 21d ago | 34m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 37.24% | 65.49% | 65.49% | — | — | 136 | 3h 45m | 21d ago | 23m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 43.93% | 34.01% | 34.01% | — | — | 1 | 20d 22h | 21d ago | 23m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 43.65% | 91.14% | 91.14% | — | — | 1 | 20d 22h | 21d ago | 34m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 7.36% | 68.64% | 68.64% | — | — | 100 | 6h 42m | 27d ago | 32m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 34m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 21h | 24d ago | 34m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 43.63% | 84.19% | 84.19% | — | — | 1 | 20d 22h | 21d ago | 34m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.50% | 18.50% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 43.92% | 58.26% | 58.26% | — | — | 4 | 5d 5h | 21d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 41.12% | 41.12% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.88% | 3.99% | 3.99% | — | — | 3 | 9d 22h | 21d ago | 23m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 43.90% | 91.31% | 91.31% | — | — | 1 | 20d 22h | 21d ago | 24m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.80% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 21d ago | 29m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 34.43% | 56.72% | 56.72% | — | — | 8 | 2d 20h | 21d ago | 32m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 32.09% | 32.09% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 14.40% | 2.24% | 2.24% | — | — | 7 | 3d 21h | 21d ago | 30m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 23.74% | 44.07% | 44.07% | — | — | 4 | 5d 19h | 17d ago | 22m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 59.68% | 59.68% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 27.57% | 28.09% | 28.09% | — | — | 140 | 3h 58m | 21d ago | 23m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 43.90% | 32.85% | 32.85% | — | — | 1 | 20d 22h | 21d ago | 24m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.80% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 21d ago | 30m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 62.55% | 62.55% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.87% | 6.87% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 71.96% | 71.96% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 43.50% | 91.09% | 91.09% | — | — | 5 | 4d 4h | 21d ago | 34m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 21h | 24d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.79% | 9.79% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 37.46% | 86.92% | 86.92% | — | — | 138 | 3h 41m | 21d ago | 25m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 11h | 6d ago | 18m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 36.59% | 36.59% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 57.85% | 57.85% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 34m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 15.41% | 83.82% | 83.82% | — | — | 64 | 9h 56m | 21d ago | 35m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 51.09% | 51.09% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 35m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 46.44% | 46.44% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 43.59% | 91.10% | 91.10% | — | — | 2 | 10d 11h | 21d ago | 35m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 64.32% | 64.32% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.76% | 42.74% | 42.74% | — | — | 2 | 14d 22h | 21d ago | 34m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 22h | 24d ago | 33m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 25m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 11h | 6d ago | 25m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 28.65% | 35.91% | 35.91% | — | — | 244 | 2h 11m | 21d ago | 23m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 15.17% | 2.86% | 2.86% | — | — | 4 | 6d 18h | 21d ago | 24m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 45.65% | 45.65% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 42.35% | 91.03% | 91.03% | — | — | 21 | 1d | 21d ago | 29m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 43.90% | 36.75% | 36.75% | — | — | 1 | 20d 22h | 21d ago | 24m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 43.57% | 90.97% | 90.97% | — | — | 3 | 6d 23h | 21d ago | 34m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 40.74% | 40.77% | 40.77% | — | — | 1 | 20d 22h | 21d ago | 34m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 13.08% | 52.32% | 52.32% | — | — | 1 | 27d 13h | 28d ago | 23m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 40.43% | 88.41% | 88.41% | — | — | 72 | 7h 1m | 21d ago | 34m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.40% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 22d ago | 29m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 65.79% | 80.72% | 80.72% | — | — | 3 | 4d 5h | 12d ago | 23m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 25m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 17.46% | 86.72% | 86.72% | — | — | 1 | 26d 4h | 26d ago | 29m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 43.82% | 69.62% | 69.62% | — | — | 2 | 10d 11h | 21d ago | 22m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.78% | 3.78% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 47.45% | 47.45% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 42.71% | 84.99% | 84.99% | — | — | 26 | 19h 18m | 21d ago | 34m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 24.75% | 64.82% | 64.82% | — | — | 271 | 2h 3m | 21d ago | 30m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 21h | 24d ago | 32m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.10% | 31.10% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 18.17% | 18.21% | 18.21% | — | — | 24 | 22h 5m | 21d ago | 20m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 8.92% | 15.81% | 15.81% | — | — | 184 | 3h 30m | 21d ago | 23m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 47.20% | 47.22% | 47.22% | — | — | 10 | 1d 9h | 9d ago | 21m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.49% | 26.49% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 11h | 7d ago | 18m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 21h | 24d ago | 33m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 42.60% | 73.61% | 73.61% | — | — | 31 | 16h 13m | 21d ago | 22m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 22.44% | 22.50% | 22.50% | — | — | 3 | 5d 14h | 16d ago | 19m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.19% | 19.19% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 54.40% | 54.40% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 10h | 6d ago | 18m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 60.62% | 60.62% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 43.81% | 55.41% | 55.41% | — | — | 2 | 10d 11h | 21d ago | 21m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 53.38% | 70.32% | 70.32% | — | — | 6 | 2d 20h | 17d ago | 22m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 39.35% | 6.10% | 6.10% | — | — | 3 | 7d 6h | 21d ago | 24m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 23h | 26d ago | 21m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 33m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 43.54% | 91.18% | 91.18% | — | — | 2 | 10d 11h | 21d ago | 32m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 21h | 24d ago | 34m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 43.51% | 89.99% | 89.99% | — | — | 3 | 6d 23h | 21d ago | 32m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 26.24% | 70.19% | 70.19% | — | — | 242 | 2h 15m | 21d ago | 35m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 82.42% | 82.42% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 43.20% | 89.84% | 89.84% | — | — | 12 | 1d 18h | 21d ago | 33m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.65% | 21.65% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 8.27% | 8.27% | 8.27% | — | — | 3 | 7d 5h | 19d ago | 33m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 23.41% | 4.45% | 4.45% | — | — | 6 | 3d 15h | 10d ago | 30m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 43.83% | 37.74% | 37.74% | — | — | 3 | 6d 23h | 21d ago | 24m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 10.65% | 75.03% | 75.03% | — | — | 2 | 13d 23h | 28d ago | 33m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.10% | 9.10% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 36.23% | 72.19% | 72.19% | — | — | 151 | 3h 23m | 21d ago | 35m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 11h | 6d ago | 25m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 23.75% | 23.91% | 23.91% | — | — | 2 | 3d 5h | 6d ago | 19m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 43.83% | 56.02% | 56.02% | — | — | 2 | 10d 11h | 21d ago | 22m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 47.01% | 47.04% | 47.04% | — | — | 3 | 6d 22h | 20d ago | 21m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 16.81% | 16.81% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 33m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.74% | 19.74% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 37.47% | 27.33% | 27.33% | — | — | 3 | 6d 7h | 13d ago | 22m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.96% | 2.02% | 2.02% | — | — | 2 | 10d 17h | 21d ago | 19m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 10.84% | 10.89% | 10.89% | — | — | 2 | 10d 17h | 21d ago | 19m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 13.34% | 13.40% | 13.40% | — | — | 2 | 9d 7h | 18d ago | 19m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 54.88% | 54.88% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 43.58% | 91.15% | 91.15% | — | — | 2 | 10d 11h | 21d ago | 32m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 38.72% | 65.40% | 65.40% | — | — | 5 | 4d 9h | 22d ago | 22m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 51.04% | 91.34% | 91.34% | — | — | 6 | 2d 24h | 18d ago | 29m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 45.51% | 45.51% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 38.65% | 88.81% | 88.81% | — | — | 135 | 3h 44m | 21d ago | 24m ago |

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
