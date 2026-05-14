# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 342 🟢 operational · 57 🟡 degraded · 201 🔴 down · 0 ⚫ unknown

_Updated 2026-05-14 06:27 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (342)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.80% | 92.38% | 92.38% | 766 ms | ↓ 0.64x | 4 | 0s | 26d ago | 15m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 86.43% | 12.11% | 12.11% | 2270 ms | → 1.03x | 5 | 12h 42m | 13d ago | 16m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 97.16% | 97.16% | 2437 ms | ↓ 0.93x | 1 | 0s | 26d ago | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.70% | 98.68% | 98.68% | 2077 ms | ↓ 0.94x | 59 | 7m | 12d ago | 27m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.02% | 99.07% | 99.07% | 3798 ms | → 1.03x | 21 | 0s | 18d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 97.53% | 97.53% | 97.53% | 2039 ms | → 0.95x | 11 | 13m | 10d ago | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 98.80% | 92.29% | 92.29% | 1897 ms | → 1.02x | 10 | 31m | 11d ago | 12m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1717 ms | ↓ 0.78x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.74% | 96.74% | 1734 ms | ↑ 1.06x | 0 | — | — | 12m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 950 ms | ↓ 0.80x | 0 | — | — | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.55% | 91.55% | 1893 ms | → 0.99x | 0 | — | — | 27m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.56% | 95.60% | 95.60% | 3327 ms | ↑ 1.24x | 5 | 3h 2m | 12d ago | 12m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.76% | 99.81% | 99.81% | 906 ms | ↓ 0.60x | 5 | 0s | 27d ago | 12m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.39% | 95.37% | 95.37% | 1421 ms | ↑ 1.20x | 8 | 39m | 22d ago | 12m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.48% | 97.48% | 97.48% | 745 ms | ↓ 0.63x | 1 | 13h 57m | 21d ago | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 52.02% | 30.32% | 30.32% | 531 ms | ↓ 0.85x | 4 | 3d 1h | 15d ago | 21m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.56% | 96.11% | 96.11% | 2096 ms | ↑ 1.12x | 5 | 20m | 10d ago | 14m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.76% | 98.76% | 792 ms | ↓ 0.76x | 2 | 0s | 11d ago | 24m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 501 ms | ↓ 0.63x | 0 | — | — | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.72% | 95.62% | 95.62% | 474 ms | ↓ 0.53x | 5 | 2m | 26d ago | 14m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2143 ms | → 0.99x | 0 | — | — | 9m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1863 ms | → 0.97x | 0 | — | — | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.64% | 97.68% | 97.68% | 3037 ms | ↑ 1.28x | 6 | 5m | 18d ago | 13m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.34% | 96.39% | 96.39% | 181 ms | ↓ 0.31x | 1 | 12h 47m | 27d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.13% | 78.29% | 78.29% | 2359 ms | → 1.05x | 31 | 1h 4m | 15d ago | 13m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1039 ms | ↓ 0.72x | 0 | — | — | 9m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 100.00% | 98.86% | 99.66% | 99.66% | 3334 ms | → 1.00x | 27 | 45s | 10d ago | 26m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.64% | 97.02% | 97.02% | 1090 ms | ↓ 0.58x | 4 | 20m | 15d ago | 14m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 480 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.88% | 98.68% | 98.68% | 177 ms | ↓ 0.11x | 17 | 6m | 21d ago | 14m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.68% | 99.76% | 99.76% | 2492 ms | ↑ 1.34x | 5 | 8m | 10d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.76% | 94.95% | 94.95% | 2926 ms | ↑ 1.15x | 22 | 4m | 26d ago | 14m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 76.63% | 79.11% | 79.11% | 1698 ms | ↑ 1.06x | 2 | 4d 1h | 10d ago | 12m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.87% | 97.99% | 97.99% | 2300 ms | ↑ 1.65x | 10 | 2h 54m | 27d ago | 22m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2780 ms | → 1.04x | 0 | — | — | 9m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 77.96% | 88.98% | 88.98% | 1267 ms | ↓ 0.73x | 2 | 1d 24h | 26d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.88% | 99.48% | 99.48% | 1901 ms | → 0.99x | 2 | 0s | 28d ago | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.76% | 99.83% | 99.83% | 4322 ms | ↑ 1.47x | 5 | 0s | 10d ago | 21m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.96% | 97.06% | 97.06% | 3251 ms | ↑ 1.06x | 23 | 53s | 24d ago | 14m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.48% | 99.59% | 99.59% | 1108 ms | ↑ 1.15x | 8 | 10m | 8d ago | 12m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.72% | 22.20% | 22.20% | 1144 ms | ↓ 0.67x | 6 | 0s | 11d ago | 22m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1233 ms | → 0.99x | 0 | — | — | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.72% | 97.75% | 97.75% | 3612 ms | ↑ 1.55x | 6 | 0s | 25d ago | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1213 ms | ↑ 1.30x | 0 | — | — | 9m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.88% | 95.76% | 95.76% | 783 ms | ↓ 0.72x | 2 | 0s | 12d ago | 14m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.68% | 49.26% | 49.26% | 944 ms | ↑ 1.10x | 41 | 5m | 23d ago | 16m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 84.74% | 46.52% | 46.52% | 222 ms | ↓ 0.57x | 1 | 2d 17h | 28d ago | 15m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1055 ms | ↓ 0.78x | 0 | — | — | 9m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.84% | 99.59% | 99.59% | 3099 ms | ↑ 1.12x | 3 | 0s | 26d ago | 21m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3055 ms | → 1.01x | 0 | — | — | 9m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.88% | 96.83% | 96.83% | 1793 ms | ↓ 0.87x | 2 | 0s | 20d ago | 21m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.76% | 98.90% | 98.90% | 1285 ms | ↑ 1.10x | 4 | 2m | 13d ago | 14m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.88% | 79.94% | 79.94% | 2074 ms | ↑ 1.07x | 2 | 0s | 19d ago | 15m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.88% | 61.04% | 61.04% | 1726 ms | ↑ 1.21x | 2 | 0s | 22d ago | 15m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 987 ms | ↓ 0.93x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 98.12% | 98.12% | 2409 ms | → 0.99x | 2 | 0s | 26d ago | 13m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4232 ms | → 0.99x | 0 | — | — | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.92% | 91.93% | 91.93% | 891 ms | ↓ 0.79x | 1 | 0s | 26d ago | 15m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.88% | 97.91% | 97.91% | 709 ms | ↓ 0.68x | 2 | 0s | 27d ago | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.64% | 99.84% | 99.84% | 269 ms | ↓ 0.30x | 7 | 1m | 11d ago | 14m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 97.76% | 97.76% | 97.76% | 2693 ms | ↑ 1.06x | 12 | 10m | 10d ago | 10m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 86.40% | 62.86% | 62.86% | 2753 ms | ↑ 1.35x | 21 | 2h 40m | 12d ago | 13m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1905 ms | → 0.96x | 0 | — | — | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 84.39% | 84.39% | 84.39% | 2622 ms | ↓ 0.93x | 14 | 1d 1h | 10d ago | 10m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.76% | 41.13% | 41.13% | 1030 ms | ↑ 1.16x | 1 | 40m | 28d ago | 16m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.98% | 49.93% | 49.93% | 1551 ms | ↑ 1.08x | 13 | 32m | 16d ago | 22m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.65% | 97.65% | 2734 ms | ↑ 1.37x | 1 | 0s | 26d ago | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.76% | 47.06% | 47.06% | 1123 ms | ↓ 0.88x | 4 | 5m | 22d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.92% | 38.70% | 38.70% | 1337 ms | ↓ 0.70x | 1 | 0s | 28d ago | 22m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1243 ms | ↓ 0.72x | 0 | — | — | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.80% | 78.60% | 78.60% | 1587 ms | → 0.98x | 4 | 0s | 21d ago | 15m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 86.28% | 55.75% | 55.75% | 1048 ms | ↓ 0.72x | 14 | 4h 14m | 11d ago | 15m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.88% | 97.81% | 97.81% | 1617 ms | ↓ 0.63x | 2 | 0s | 26d ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 98.03% | 97.83% | 97.83% | 2704 ms | ↓ 0.94x | 40 | 3m | 11d ago | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.84% | 58.23% | 58.23% | 1097 ms | ↓ 0.90x | 3 | 0s | 23d ago | 15m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2882 ms | → 1.00x | 0 | — | — | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.72% | 99.09% | 99.09% | 1744 ms | ↑ 1.11x | 6 | 0s | 25d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 72.59% | 72.59% | 72.59% | 588 ms | → 1.02x | 1 | 1d 24h | 27d ago | 10m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.64% | 99.74% | 99.74% | 2744 ms | ↑ 1.31x | 8 | 0s | 10d ago | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.56% | 97.78% | 97.78% | 2261 ms | ↑ 1.45x | 2 | 5h 35m | 26d ago | 15m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 72.86% | 10.26% | 10.26% | 1415 ms | ↓ 0.94x | 5 | 23h 30m | 9d ago | 22m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 88.15% | 27.17% | 27.17% | 399 ms | ↓ 0.30x | 2 | 1d 1h | 26d ago | 14m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.92% | 99.72% | 99.72% | 2694 ms | ↑ 1.10x | 1 | 0s | 19d ago | 25m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1977 ms | → 1.03x | 0 | — | — | 8m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.57% | 98.95% | 98.95% | 2531 ms | → 1.01x | 7 | 9m | 9d ago | 25m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.22% | 99.84% | 99.84% | 3608 ms | ↑ 1.20x | 19 | 0s | 8d ago | 26m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.70% | 97.96% | 97.96% | 3899 ms | → 0.95x | 28 | 2m | 25d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 799 ms | ↓ 0.79x | 1 | 0s | 23d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.80% | 67.65% | 67.65% | 2824 ms | ↑ 1.11x | 4 | 0s | 26d ago | 14m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 88.07% | 86.44% | 86.44% | 384 ms | ↓ 0.77x | 10 | 4h 56m | 25d ago | 12m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | → 0.96x | 0 | — | — | 8m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.88% | 99.88% | 99.88% | 692 ms | ↓ 0.90x | 1 | 0s | 8d ago | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.84% | 99.94% | 99.94% | 1085 ms | ↓ 0.82x | 3 | 0s | 19d ago | 26m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.02% | 99.70% | 99.70% | 3668 ms | ↑ 1.80x | 3 | 1h 13m | 24d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.80% | 99.60% | 99.60% | 1673 ms | → 0.99x | 4 | 0s | 11d ago | 25m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 63.10% | 70.73% | 70.73% | 2566 ms | ↑ 1.10x | 2 | 4d 5h | 21d ago | 14m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 98.92% | 37.90% | 37.90% | 2660 ms | ↑ 1.41x | 23 | 3m | 10d ago | 14m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1348 ms | → 0.98x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 94.66% | 74.76% | 74.76% | 1758 ms | ↑ 1.34x | 2 | 10h 55m | 29d ago | 12m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1502 ms | ↓ 0.91x | 0 | — | — | 9m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1162 ms | ↑ 1.14x | 0 | — | — | 12m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.93% | 98.93% | 537 ms | ↓ 0.75x | 0 | — | — | 16m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.84% | 98.43% | 98.43% | 1921 ms | ↑ 1.33x | 3 | 0s | 26d ago | 14m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 98.76% | 95.76% | 95.76% | 457 ms | ↓ 0.24x | 10 | 21m | 27d ago | 12m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1081 ms | → 1.00x | 0 | — | — | 9m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 703 ms | ↓ 0.58x | 0 | — | — | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1494 ms | ↓ 0.82x | 0 | — | — | 9m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 91.92% | 91.92% | 91.92% | 2271 ms | → 0.96x | 12 | 1d 6h | 9d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 96.99% | 96.99% | 96.99% | 1901 ms | → 0.95x | 11 | 20m | 10d ago | 10m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 95.10% | 95.15% | 95.15% | 300 ms | ↓ 0.37x | 16 | 51m | 11d ago | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.64% | 98.44% | 98.44% | 237 ms | ↓ 0.61x | 5 | 12m | 25d ago | 14m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 96.99% | 96.99% | 96.99% | 1859 ms | ↓ 0.95x | 11 | 20m | 9d ago | 10m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.52% | 98.87% | 98.87% | 866 ms | ↓ 0.65x | 11 | 0s | 17d ago | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 72.10% | 10.16% | 10.16% | 2754 ms | → 1.00x | 2 | 2d 13h | 10d ago | 21m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1037 ms | → 1.00x | 0 | — | — | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 88.05% | 13.64% | 13.64% | 1182 ms | ↑ 1.17x | 1 | 2d 3h | 30d ago | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 900 ms | ↑ 1.11x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.96% | 99.83% | 99.83% | 668 ms | → 1.00x | 0 | — | — | 26m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 756 ms | ↓ 0.74x | 0 | — | — | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 96.17% | 96.22% | 96.22% | 1370 ms | ↓ 0.91x | 1 | 13h 10m | 26d ago | 10m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 100.00% | 99.45% | 99.45% | 99.45% | 972 ms | ↓ 0.89x | 4 | 0s | 10d ago | 9m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.17% | 99.72% | 99.72% | 3066 ms | ↑ 1.24x | 5 | 1h | 8d ago | 25m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.32% | 97.62% | 97.62% | 2590 ms | ↑ 1.82x | 6 | 58m | 26d ago | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.61% | 99.73% | 99.73% | 429 ms | ↓ 0.82x | 7 | 4m | 20d ago | 26m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1335 ms | → 1.01x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.45% | 98.59% | 98.59% | 4401 ms | ↑ 1.11x | 13 | 0s | 26d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 54.87% | 81.01% | 81.01% | 782 ms | ↓ 0.55x | 4 | 3d 13h | 26d ago | 14m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3384 ms | ↑ 1.61x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1391 ms | → 1.01x | 0 | — | — | 9m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 72.11% | 23.43% | 23.43% | 2368 ms | ↑ 1.07x | 2 | 2d 13h | 8d ago | 24m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 98.07% | 97.10% | 97.10% | 1784 ms | ↑ 1.13x | 4 | 3h 35m | 9d ago | 12m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.57% | 99.18% | 99.18% | 1364 ms | → 1.03x | 9 | 1m | 11d ago | 25m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 72.15% | 35.24% | 35.24% | 725 ms | → 1.02x | 1 | 5d 1h | 30d ago | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.12% | 98.07% | 98.07% | 4312 ms | ↑ 1.69x | 20 | 30s | 26d ago | 14m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.84% | 99.90% | 99.90% | 309 ms | ↓ 0.25x | 3 | 0s | 19d ago | 25m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.92% | 99.81% | 99.81% | 1591 ms | → 1.03x | 1 | 0s | 26d ago | 14m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.80% | 99.85% | 99.85% | 2207 ms | ↑ 1.11x | 3 | 3m | 25d ago | 15m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.98% | 99.84% | 99.84% | 2306 ms | ↑ 1.31x | 25 | 0s | 10d ago | 26m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.32% | 99.37% | 99.37% | 1808 ms | ↑ 1.37x | 3 | 37m | 26d ago | 12m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.88% | 88.24% | 88.24% | 1221 ms | → 1.04x | 2 | 0s | 20d ago | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.92% | 99.58% | 99.58% | 1147 ms | → 0.98x | 1 | 0s | 29d ago | 26m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.64% | 95.54% | 95.54% | 2962 ms | ↑ 1.10x | 7 | 40m | 18d ago | 14m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 88.02% | 12.51% | 12.51% | 2742 ms | ↑ 1.87x | 2 | 1d 2h | 25d ago | 16m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 389 ms | ↓ 0.83x | 0 | — | — | 8m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.76% | 99.74% | 99.74% | 1957 ms | ↓ 0.95x | 5 | 0s | 19d ago | 25m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 22.70% | 22.70% | 22.70% | 3476 ms | → 1.01x | 2 | 10d 7h | 20d ago | 16m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.61% | 88.02% | 88.02% | 1167 ms | ↓ 0.82x | 8 | 1m | 11d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 87.54% | 12.27% | 12.27% | 1706 ms | ↓ 0.81x | 12 | 4h 18m | 26d ago | 16m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.80% | 98.72% | 98.72% | 2590 ms | ↑ 1.55x | 4 | 0s | 26d ago | 14m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 71.87% | 77.97% | 77.97% | 2212 ms | ↓ 0.95x | 3 | 1d 17h | 11d ago | 27m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.84% | 99.91% | 99.91% | 850 ms | ↓ 0.80x | 3 | 0s | 11d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.91% | 99.91% | 1728 ms | → 1.05x | 1 | 0s | 24d ago | 26m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.72% | 99.64% | 99.64% | 840 ms | ↓ 0.75x | 6 | 0s | 12d ago | 25m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 71.96% | 27.21% | 27.21% | 655 ms | ↓ 0.91x | 4 | 1d 6h | 11d ago | 14m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.55% | 99.55% | 1619 ms | ↓ 0.90x | 0 | — | — | 26m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1725 ms | ↓ 0.81x | 0 | — | — | 9m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.88% | 99.93% | 99.93% | 810 ms | ↓ 0.72x | 2 | 0s | 8d ago | 12m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.84% | 98.94% | 98.94% | 1726 ms | ↓ 0.90x | 3 | 0s | 26d ago | 25m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.84% | 97.62% | 97.62% | 1153 ms | ↓ 0.81x | 3 | 0s | 27d ago | 12m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.80% | 97.20% | 97.20% | 2858 ms | ↑ 1.57x | 4 | 0s | 26d ago | 13m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 72.07% | 10.23% | 10.23% | 1418 ms | → 1.01x | 4 | 1d 6h | 12d ago | 25m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 64.69% | 64.69% | 1076 ms | ↑ 1.24x | 2 | 0s | 26d ago | 15m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.76% | 77.03% | 77.03% | 1767 ms | → 1.02x | 5 | 0s | 19d ago | 15m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.69% | 99.77% | 99.77% | 1492 ms | ↓ 0.83x | 6 | 2m | 26d ago | 25m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.88% | 99.68% | 99.68% | 2215 ms | ↑ 1.24x | 1 | 10m | 27d ago | 26m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2745 ms | → 1.00x | 0 | — | — | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 74.92% | 90.74% | 90.74% | 1581 ms | ↓ 0.73x | 7 | 1d 4h | 13d ago | 14m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.92% | 99.86% | 99.86% | 1033 ms | ↓ 0.79x | 1 | 0s | 26d ago | 16m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 91.63% | 83.80% | 83.80% | 1205 ms | ↓ 0.77x | 140 | 5m | 10d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 87.47% | 83.87% | 83.87% | 352 ms | ↓ 0.14x | 137 | 14m | 17d ago | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 91.15% | 88.06% | 88.06% | 470 ms | ↓ 0.14x | 140 | 6m | 20d ago | 14m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.17% | 99.17% | 2217 ms | ↑ 1.20x | 1 | 0s | 26d ago | 15m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 62.49% | 62.49% | 339 ms | ↓ 0.19x | 1 | 0s | 26d ago | 15m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.92% | 96.19% | 96.19% | 1439 ms | ↑ 1.38x | 1 | 0s | 26d ago | 15m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 86.23% | 12.14% | 12.14% | 957 ms | ↓ 0.62x | 38 | 1h 23m | 8d ago | 22m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.92% | 99.73% | 99.73% | 2509 ms | → 1.03x | 1 | 0s | 12d ago | 26m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1336 ms | → 1.02x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 52.45% | 52.45% | 594 ms | ↓ 0.64x | 1 | 0s | 26d ago | 15m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.18% | 98.18% | 1333 ms | → 1.02x | 1 | 0s | 26d ago | 14m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.72% | 28.65% | 28.65% | 2121 ms | → 1.01x | 6 | 0s | 13d ago | 15m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.76% | 99.16% | 99.16% | 3456 ms | ↑ 1.42x | 2 | 33m | 23d ago | 21m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2483 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 1931 ms | ↑ 1.12x | 2 | 0s | 26d ago | 14m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.80% | 45.64% | 45.64% | 4044 ms | ↑ 1.24x | 4 | 0s | 25d ago | 14m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.80% | 99.09% | 99.09% | 2172 ms | ↑ 1.15x | 4 | 0s | 12d ago | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.84% | 97.84% | 97.84% | 1693 ms | ↑ 1.43x | 1 | 11h 52m | 14d ago | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.64% | 75.86% | 75.86% | 1585 ms | ↑ 1.86x | 3 | 33m | 14d ago | 15m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.46x | 0 | — | — | 26m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.45% | 99.90% | 99.90% | 1727 ms | ↓ 0.94x | 10 | 3m | 11d ago | 25m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 787 ms | → 1.00x | 0 | — | — | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.84% | 99.94% | 99.94% | 2115 ms | ↑ 1.13x | 2 | 1m | 26d ago | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.92% | 99.49% | 99.49% | 2900 ms | ↑ 1.26x | 1 | 0s | 25d ago | 26m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.75% | 83.75% | 2068 ms | ↑ 1.66x | 1 | 0s | 26d ago | 15m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.88% | 95.65% | 95.65% | 1063 ms | ↑ 1.19x | 2 | 0s | 26d ago | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.88% | 99.97% | 99.97% | 933 ms | ↓ 0.84x | 2 | 0s | 26d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.40% | 90.60% | 90.60% | 2657 ms | ↓ 0.85x | 14 | 0s | 15d ago | 15m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 72.00% | 12.20% | 12.20% | 695 ms | ↓ 0.43x | 1 | 5d 1h | 30d ago | 16m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 538 ms | ↓ 0.61x | 0 | — | — | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.88% | 99.93% | 99.93% | 803 ms | → 0.98x | 2 | 0s | 26d ago | 14m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 71.96% | 10.70% | 10.70% | 1070 ms | ↓ 0.86x | 2 | 2d 13h | 12d ago | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.88% | 55.76% | 55.76% | 2002 ms | ↑ 1.11x | 2 | 0s | 26d ago | 15m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.84% | 99.76% | 99.76% | 2664 ms | ↑ 1.15x | 3 | 0s | 19d ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 62.10% | 62.10% | 845 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.92% | 99.00% | 99.00% | 974 ms | ↓ 0.74x | 1 | 0s | 26d ago | 25m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.36% | 96.41% | 96.41% | 4078 ms | ↑ 1.31x | 8 | 17m | 8d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 72.22% | 10.22% | 10.22% | 899 ms | ↓ 0.93x | 1 | 5d 1h | 30d ago | 25m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 935 ms | → 0.98x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.98% | 98.98% | 98.98% | 1214 ms | ↓ 0.74x | 1 | 3h 45m | 19d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.76% | 99.88% | 99.88% | 2279 ms | ↓ 0.92x | 1 | 0s | 11d ago | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1182 ms | ↓ 0.89x | 0 | — | — | 9m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1980 ms | → 0.99x | 0 | — | — | 9m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 87.98% | 13.18% | 13.18% | 1169 ms | ↓ 0.60x | 3 | 17h 3m | 9d ago | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 93.75% | 92.73% | 92.73% | 3746 ms | ↓ 0.85x | 54 | 21m | 25d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 2067 ms | ↑ 1.07x | 1 | 0s | 26d ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.52% | 98.53% | 98.53% | 2452 ms | ↑ 1.49x | 10 | 59s | 11d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.08% | 98.08% | 98.08% | 1504 ms | ↓ 0.86x | 10 | 8m | 10d ago | 10m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.72% | 98.98% | 98.98% | 1076 ms | → 0.96x | 5 | 2m | 20d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.73% | 99.73% | 99.73% | 2154 ms | → 1.00x | 1 | 20m | 9d ago | 9m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 64.28% | 25.06% | 25.06% | 1793 ms | ↓ 0.89x | 2 | 3d 22h | 22d ago | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.92% | 99.54% | 99.54% | 1270 ms | → 0.99x | 1 | 0s | 29d ago | 26m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 98.62% | 98.62% | 98.62% | 2546 ms | → 1.01x | 12 | 18m | 10d ago | 10m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.40% | 99.40% | 1172 ms | → 1.00x | 0 | — | — | 25m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 525 ms | → 0.98x | 1 | 0s | 30d ago | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 79.77% | 57.78% | 57.78% | 3033 ms | → 1.03x | 147 | 26m | 8d ago | 26m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.17% | 91.30% | 91.30% | 1336 ms | ↓ 0.74x | 11 | 15m | 14d ago | 25m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.96% | 97.81% | 97.81% | 1598 ms | ↓ 0.90x | 0 | — | — | 12m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.66% | 96.36% | 96.36% | 2783 ms | ↑ 1.06x | 24 | 7m | 14d ago | 25m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.68% | 99.72% | 99.72% | 783 ms | ↓ 0.71x | 2 | 25m | 26d ago | 12m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.44% | 85.44% | 1408 ms | ↑ 1.16x | 1 | 0s | 26d ago | 14m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.64% | 99.70% | 99.70% | 1431 ms | ↑ 1.13x | 8 | 0s | 11d ago | 12m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1429 ms | ↑ 1.08x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.96% | 99.44% | 99.44% | 1009 ms | → 1.04x | 0 | — | — | 26m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 406 ms | ↓ 0.57x | 0 | — | — | 9m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.96% | 99.71% | 99.71% | 894 ms | → 1.00x | 0 | — | — | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.56% | 66.19% | 66.19% | 1163 ms | ↑ 1.14x | 9 | 1m | 11d ago | 14m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.88% | 99.87% | 99.87% | 2835 ms | ↑ 1.49x | 2 | 0s | 18d ago | 22m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.84% | 99.81% | 99.81% | 742 ms | ↓ 0.95x | 3 | 0s | 28d ago | 24m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.29% | 82.87% | 82.87% | 2536 ms | ↓ 0.90x | 16 | 38s | 10d ago | 21m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.64% | 98.64% | 1638 ms | ↓ 0.86x | 1 | 0s | 26d ago | 14m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.84% | 97.02% | 97.02% | 1443 ms | ↑ 1.14x | 3 | 0s | 19d ago | 12m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.53% | 91.37% | 91.37% | 4034 ms | ↑ 1.18x | 10 | 1m | 26d ago | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.85% | 99.85% | 99.85% | 842 ms | → 1.00x | 1 | 0s | 9d ago | 8m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 285 ms | ↓ 0.52x | 0 | — | — | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 95.32% | 95.37% | 95.37% | 796 ms | ↓ 0.45x | 4 | 4h 8m | 14d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.80% | 98.62% | 98.62% | 550 ms | ↓ 0.94x | 2 | 10m | 27d ago | 15m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2518 ms | → 1.03x | 0 | — | — | 9m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.04% | 97.06% | 97.06% | 3160 ms | ↑ 1.21x | 21 | 1m | 14d ago | 13m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1141 ms | → 1.04x | 0 | — | — | 9m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 72.12% | 21.78% | 21.78% | 846 ms | → 1.02x | 2 | 2d 13h | 15d ago | 24m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.84% | 99.77% | 99.77% | 1742 ms | ↓ 0.85x | 3 | 0s | 26d ago | 14m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.88% | 97.88% | 1568 ms | ↑ 1.19x | 2 | 0s | 26d ago | 14m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.00% | 94.19% | 94.19% | 2789 ms | ↓ 0.64x | 18 | 4m | 10d ago | 13m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1356 ms | ↓ 0.88x | 1 | 0s | 28d ago | 24m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.88% | 86.08% | 86.08% | 2511 ms | ↑ 1.25x | 2 | 0s | 19d ago | 15m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.46% | 96.20% | 96.20% | 2095 ms | ↑ 1.23x | 5 | 15h 59m | 17d ago | 16m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.92% | 99.85% | 99.85% | 1764 ms | ↑ 1.08x | 1 | 0s | 23d ago | 24m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 729 ms | ↓ 0.64x | 0 | — | — | 9m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.88% | 99.84% | 99.84% | 2013 ms | → 1.01x | 1 | 20m | 21d ago | 24m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.88% | 99.93% | 99.93% | 961 ms | ↑ 1.50x | 2 | 0s | 12d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 87.98% | 12.33% | 12.33% | 2092 ms | → 1.03x | 3 | 17h 3m | 21d ago | 16m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 71.82% | 10.06% | 10.06% | 1690 ms | ↑ 1.06x | 6 | 20h 13m | 11d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.80% | 99.88% | 99.88% | 3347 ms | ↑ 1.56x | 4 | 0s | 18d ago | 13m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3192 ms | → 1.00x | 0 | — | — | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 87.79% | 21.97% | 21.97% | 1730 ms | ↑ 1.06x | 7 | 7h 21m | 10d ago | 15m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.76% | 99.78% | 99.78% | 3411 ms | ↑ 1.76x | 3 | 7m | 26d ago | 14m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.33% | 99.88% | 99.88% | 1437 ms | → 1.01x | 3 | 1h 27m | 17d ago | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.92% | 99.92% | 99.92% | 3126 ms | ↑ 1.58x | 1 | 0s | 28d ago | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.61% | 99.73% | 99.73% | 2726 ms | ↑ 1.56x | 3 | 20m | 28d ago | 24m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.88% | 97.80% | 97.80% | 1013 ms | ↓ 0.91x | 1 | 10m | 27d ago | 12m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.82% | 99.82% | 2524 ms | ↑ 2.05x | 1 | 0s | 29d ago | 16m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.76% | 99.04% | 99.04% | 1433 ms | → 1.01x | 5 | 0s | 25d ago | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 460 ms | ↓ 0.58x | 0 | — | — | 25m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.80% | 97.33% | 91.69% | 91.69% | 991 ms | ↓ 0.88x | 26 | 25m | 3d ago | 25m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.80% | 99.60% | 99.64% | 99.64% | 447 ms | ↓ 0.86x | 8 | 0s | 6d ago | 26m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.80% | 47.32% | 86.00% | 86.00% | 1687 ms | ↓ 0.86x | 3 | 4d 8h | 7d ago | 25m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.80% | 99.92% | 99.94% | 99.94% | 1075 ms | ↓ 0.90x | 1 | 0s | 45m ago | 25m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.80% | 98.98% | 99.45% | 99.45% | 3301 ms | → 1.03x | 24 | 50s | 2d ago | 26m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.80% | 99.33% | 99.38% | 99.38% | 1836 ms | ↓ 0.85x | 12 | 3m | 10h ago | 25m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 99.80% | 16.13% | 16.13% | 2287 ms | ↑ 1.09x | 4 | 0s | 7d ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.80% | 72.05% | 10.22% | 10.22% | 2274 ms | → 1.01x | 4 | 1d 6h | 3d ago | 25m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.40% | 97.63% | 97.63% | 3646 ms | ↑ 1.07x | 12 | 3m | 2d ago | 21m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.79% | 88.61% | 76.99% | 76.99% | 2570 ms | ↑ 1.11x | 168 | 9m | 5d ago | 21m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.79% | 99.49% | 99.72% | 99.72% | 2930 ms | → 1.03x | 9 | 3m | 5d ago | 22m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.79% | 88.91% | 50.64% | 50.64% | 3524 ms | ↑ 1.31x | 105 | 18m | 16h ago | 22m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.79% | 98.69% | 99.63% | 99.63% | 2753 ms | ↑ 1.47x | 4 | 1h 8m | 6d ago | 21m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.79% | 99.84% | 99.84% | 99.84% | 1426 ms | ↓ 0.85x | 3 | 0s | 6d ago | 21m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.79% | 71.96% | 42.42% | 42.42% | 1616 ms | ↓ 0.80x | 4 | 1d 6h | 2d ago | 14m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.79% | 99.68% | 78.33% | 78.33% | 1702 ms | → 0.97x | 6 | 2m | 3d ago | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.88% | 71.88% | 71.88% | 733 ms | ↓ 0.73x | 2 | 0s | 2h ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.79% | 99.80% | 54.62% | 54.62% | 1969 ms | → 0.98x | 4 | 0s | 4d ago | 15m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.79% | 99.84% | 88.01% | 88.01% | 2140 ms | ↓ 0.89x | 3 | 0s | 1d ago | 15m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.76% | 99.51% | 99.51% | 989 ms | ↓ 0.74x | 5 | 0s | 3d ago | 15m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.79% | 71.69% | 10.23% | 10.23% | 2864 ms | ↑ 1.53x | 6 | 20h 23m | 3d ago | 16m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.79% | 95.96% | 62.51% | 62.51% | 796 ms | → 1.01x | 13 | 2h 11m | 6d ago | 15m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.79% | 99.68% | 98.12% | 98.12% | 509 ms | ↓ 0.47x | 6 | 2m | 5d ago | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.79% | 99.80% | 98.42% | 98.42% | 706 ms | ↓ 0.53x | 4 | 0s | 3d ago | 14m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.79% | 96.33% | 96.38% | 96.38% | 2325 ms | ↓ 0.77x | 3 | 4h 13m | 3d ago | 10m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.79% | 99.88% | 99.88% | 99.88% | 1320 ms | → 1.03x | 1 | 0s | 2h ago | 9m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.79% | 99.76% | 97.94% | 97.94% | 919 ms | ↓ 0.75x | 5 | 0s | 6d ago | 13m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.79% | 99.80% | 99.87% | 99.87% | 655 ms | ↓ 0.65x | 3 | 6m | 2d ago | 12m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.79% | 99.58% | 99.58% | 99.58% | 176 ms | ↓ 0.15x | 4 | 15m | 4d ago | 9m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.79% | 98.68% | 99.32% | 99.32% | 4046 ms | ↑ 1.79x | 5 | 1h 48m | 2d ago | 14m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.79% | 99.75% | 99.75% | 99.75% | 471 ms | → 0.99x | 2 | 0s | 4d ago | 9m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.79% | 97.80% | 97.80% | 97.80% | 1491 ms | → 1.03x | 2 | 1h 20m | 5d ago | 10m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.79% | 99.52% | 97.11% | 97.11% | 4089 ms | ↑ 1.73x | 9 | 2m | 2d ago | 14m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.79% | 99.63% | 99.63% | 99.63% | 1474 ms | → 1.00x | 2 | 10m | 2d ago | 9m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.79% | 99.48% | 94.77% | 94.77% | 991 ms | ↓ 0.63x | 11 | 52s | 2d ago | 12m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.79% | 99.68% | 97.81% | 97.81% | 2373 ms | ↑ 1.20x | 6 | 2m | 7d ago | 14m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.79% | 99.86% | 99.86% | 99.86% | 1002 ms | → 0.98x | 1 | 0s | 4d ago | 9m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.79% | 95.49% | 95.53% | 95.53% | 1892 ms | ↑ 1.08x | 7 | 2h 25m | 2d ago | 12m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.79% | 98.52% | 98.66% | 98.66% | 1880 ms | → 0.97x | 8 | 5m | 2d ago | 10m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.79% | 99.68% | 95.36% | 95.36% | 1336 ms | ↓ 0.83x | 2 | 51m | 6d ago | 12m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.79% | 57.20% | 29.24% | 29.24% | 1517 ms | ↓ 0.62x | 21 | 12h 2m | 2d ago | 14m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.59% | 95.45% | 98.76% | 98.76% | 3117 ms | ↓ 0.95x | 88 | 5m | 2d ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.59% | 93.89% | 96.33% | 96.33% | 1258 ms | ↓ 0.81x | 24 | 55m | 6d ago | 22m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.59% | 99.64% | 99.71% | 99.71% | 3142 ms | ↑ 1.23x | 8 | 0s | 17h ago | 21m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.59% | 98.81% | 99.41% | 99.41% | 3613 ms | ↑ 1.59x | 18 | 12m | 17h ago | 21m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.59% | 99.40% | 99.79% | 99.79% | 2203 ms | → 1.03x | 13 | 13s | 1d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.48% | 99.28% | 99.28% | 2423 ms | ↑ 1.12x | 10 | 2m | 5d ago | 16m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.76% | 55.72% | 55.72% | 1537 ms | ↓ 0.81x | 5 | 0s | 5d ago | 15m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.59% | 99.40% | 76.06% | 76.06% | 2180 ms | ↓ 0.93x | 14 | 0s | 21h ago | 15m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.59% | 90.81% | 82.34% | 82.34% | 800 ms | ↓ 0.25x | 139 | 8m | 6d ago | 13m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.59% | 99.50% | 99.50% | 99.50% | 921 ms | → 0.96x | 4 | 0s | 4d ago | 9m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.59% | 99.73% | 99.73% | 99.73% | 590 ms | ↓ 0.67x | 2 | 0s | 10h ago | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.59% | 97.18% | 97.18% | 97.18% | 2933 ms | ↓ 0.89x | 7 | 1h 55m | 6h ago | 9m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.59% | 99.45% | 99.45% | 99.45% | 2948 ms | → 1.02x | 3 | 7m | 2d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.59% | 95.98% | 96.03% | 96.03% | 2079 ms | ↓ 0.88x | 7 | 1h 50m | 3d ago | 10m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.59% | 99.52% | 87.51% | 87.51% | 682 ms | ↓ 0.70x | 7 | 12m | 7d ago | 12m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.59% | 99.75% | 99.75% | 99.75% | 1519 ms | ↓ 0.94x | 2 | 0s | 2d ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.59% | 99.60% | 99.69% | 99.69% | 4208 ms | ↑ 1.68x | 9 | 0s | 2d ago | 14m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.38% | 99.64% | 98.74% | 98.74% | 1424 ms | ↑ 1.72x | 8 | 0s | 3d ago | 15m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.38% | 99.56% | 87.16% | 87.16% | 2283 ms | ↑ 1.64x | 8 | 5m | 6d ago | 15m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.38% | 99.64% | 99.68% | 99.68% | 1319 ms | ↓ 0.89x | 5 | 8m | 6d ago | 16m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.38% | 96.85% | 96.85% | 96.85% | 2929 ms | → 0.98x | 12 | 21m | 16h ago | 10m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.38% | 99.59% | 99.59% | 99.59% | 1124 ms | → 1.01x | 3 | 0s | 5d ago | 9m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.18% | 78.74% | 78.55% | 78.55% | 129 ms | ↓ 0.64x | 9 | 13h 26m | 2d ago | 27m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.18% | 99.48% | 98.97% | 98.97% | 2486 ms | ↑ 1.32x | 11 | 2m | 3d ago | 21m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.18% | 99.44% | 67.59% | 67.59% | 1191 ms | ↓ 0.91x | 10 | 6m | 3d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.17% | 99.80% | 99.85% | 99.85% | 1335 ms | → 1.04x | 2 | 20m | 5d ago | 12m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.17% | 97.67% | 97.67% | 97.67% | 2286 ms | → 0.99x | 11 | 11m | 14h ago | 9m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.17% | 99.45% | 99.45% | 99.45% | 1871 ms | → 0.98x | 2 | 19m | 1d ago | 8m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.17% | 98.91% | 98.91% | 98.91% | 1444 ms | → 0.98x | 8 | 0s | 18h ago | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (57)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.98% | 98.94% | 99.24% | 99.24% | 867 ms | ↓ 0.65x | 26 | 0s | 12h ago | 26m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.97% | 98.52% | 89.47% | 89.47% | 1890 ms | ↑ 1.08x | 29 | 2m | 16h ago | 15m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.97% | 99.36% | 99.05% | 99.05% | 180 ms | ↓ 0.38x | 11 | 13m | 6h ago | 13m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.76% | 99.04% | 99.04% | 99.04% | 3452 ms | → 1.02x | 5 | 9m | 1d ago | 9m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.57% | 90.62% | 95.61% | 95.61% | 3438 ms | ↓ 0.92x | 118 | 21m | 2d ago | 26m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.56% | 90.07% | 60.37% | 60.37% | 4655 ms | → 1.00x | 166 | 6m | 2h ago | 15m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 98.55% | 99.12% | 99.12% | 99.12% | 4549 ms | → 0.96x | 10 | 0s | 6h ago | 9m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 98.35% | 99.52% | 98.36% | 98.36% | 2724 ms | ↑ 1.41x | 3 | 54m | 5d ago | 14m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 98.35% | 99.52% | 98.44% | 98.44% | 654 ms | ↓ 0.51x | 3 | 54m | 5d ago | 14m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.35% | 91.13% | 84.82% | 84.82% | 4558 ms | → 1.02x | 162 | 4m | 3d ago | 16m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.16% | 98.94% | 97.65% | 97.65% | 3868 ms | → 1.03x | 26 | 0s | 3h ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.16% | 97.69% | 97.98% | 97.98% | 4649 ms | ↑ 1.36x | 50 | 3m | 16h ago | 27m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 98.14% | 98.77% | 98.77% | 98.77% | 1860 ms | → 0.98x | 5 | 16m | 14h ago | 9m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.75% | 81.49% | 77.96% | 77.96% | 3462 ms | ↓ 0.91x | 216 | 13m | 3h ago | 27m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.75% | 97.68% | 98.65% | 98.65% | 3536 ms | → 0.99x | 49 | 4m | 1d ago | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 97.73% | 96.51% | 96.51% | 96.51% | 1593 ms | ↓ 0.91x | 22 | 5m | 15h ago | 9m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.54% | 99.21% | 98.58% | 98.58% | 3957 ms | ↑ 1.34x | 8 | 30m | 4d ago | 24m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.52% | 98.36% | 98.36% | 98.36% | 1844 ms | → 1.01x | 1 | 3h 38m | 2d ago | 9m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.52% | 98.44% | 88.52% | 88.52% | 4215 ms | ↑ 2.00x | 31 | 5m | 54m ago | 14m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.52% | 83.90% | 80.37% | 80.37% | 4790 ms | ↑ 1.14x | 147 | 21m | 3h ago | 13m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.34% | 90.49% | 84.30% | 84.30% | 4576 ms | → 1.05x | 185 | 4m | 1h ago | 24m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.33% | 90.17% | 71.82% | 71.82% | 4408 ms | → 0.99x | 190 | 4m | 13h ago | 22m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.33% | 69.33% | 9.77% | 9.77% | 4314 ms | ↑ 1.24x | 62 | 2h 4m | 17h ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.12% | 95.56% | 98.66% | 98.66% | 4390 ms | ↑ 1.29x | 66 | 14m | 17h ago | 21m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.91% | 90.91% | 82.33% | 82.33% | 4745 ms | → 1.04x | 168 | 4m | 3h ago | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.90% | 96.42% | 94.45% | 94.45% | 1812 ms | ↑ 1.28x | 5 | 3h 13m | 2d ago | 12m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.31% | 87.80% | 83.74% | 83.74% | 4469 ms | ↑ 1.07x | 156 | 15m | 21h ago | 27m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 95.90% | 98.10% | 98.97% | 98.97% | 3657 ms | ↑ 1.23x | 14 | 45m | 3d ago | 24m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 95.90% | 98.34% | 96.98% | 96.98% | 3656 ms | ↑ 1.24x | 13 | 45m | 3d ago | 24m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 95.90% | 98.30% | 55.11% | 55.11% | 3931 ms | ↑ 1.24x | 14 | 41m | 3d ago | 24m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 95.90% | 98.34% | 99.16% | 99.16% | 3702 ms | ↑ 1.75x | 12 | 50m | 3d ago | 24m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 95.70% | 98.34% | 40.42% | 40.42% | 1223 ms | ↓ 0.87x | 13 | 45m | 3d ago | 24m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.67% | 91.83% | 68.33% | 68.33% | 1185 ms | ↓ 0.72x | 23 | 1h 46m | 5d ago | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.66% | 86.76% | 78.57% | 78.57% | 4677 ms | → 1.03x | 250 | 4m | 54m ago | 13m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 95.47% | 29.68% | 8.38% | 8.38% | 2706 ms | ↑ 1.14x | 7 | 2d 18h | 3d ago | 21m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.26% | 88.34% | 78.79% | 78.79% | 4821 ms | → 1.03x | 207 | 5m | 15h ago | 14m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.42% | 98.84% | 94.78% | 94.78% | 1689 ms | ↑ 1.07x | 2 | 4h 19m | 2d ago | 12m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.06% | 70.04% | 9.89% | 9.89% | 2150 ms | ↑ 1.13x | 50 | 2h 27m | 1d ago | 24m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 92.77% | 21.44% | 23.18% | 23.18% | 1393 ms | → 1.00x | 2 | 11d 17h | 2d ago | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 92.77% | 97.90% | 97.90% | 97.90% | 1095 ms | ↓ 0.55x | 2 | 5h 34m | 2d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.56% | 98.47% | 96.21% | 96.21% | 1216 ms | ↓ 0.93x | 2 | 5h 55m | 6d ago | 12m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.32% | 85.60% | 47.00% | 47.00% | 1990 ms | → 1.01x | 25 | 2h 33m | 2d ago | 13m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 91.13% | 84.08% | 36.13% | 36.13% | 661 ms | ↓ 0.56x | 10 | 8h 7m | 6d ago | 14m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 90.53% | 47.95% | 41.75% | 41.75% | 1855 ms | → 1.01x | 5 | 1d 3h | 24h ago | 22m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.67% | 63.86% | 40.14% | 40.14% | 4055 ms | ↑ 1.16x | 170 | 47m | 12h ago | 13m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.64% | 95.99% | 90.30% | 90.30% | 3817 ms | ↑ 1.11x | 28 | 46m | 2d ago | 13m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.40% | 91.66% | 91.66% | 91.66% | 636 ms | → 0.98x | 4 | 5h 13m | 2d ago | 9m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 87.30% | 97.25% | 99.28% | 99.28% | 1044 ms | → 0.95x | 7 | 3h 4m | 2d ago | 26m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 85.86% | 65.74% | 9.32% | 9.32% | 795 ms | ↓ 0.79x | 82 | 1h 50m | 16h ago | 25m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 84.74% | 96.45% | 97.23% | 97.23% | 1143 ms | → 0.96x | 8 | 3h 27m | 3d ago | 16m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 84.71% | 90.77% | 90.77% | 90.77% | 1030 ms | ↓ 0.93x | 1 | 1d 1h | 7d ago | 9m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 80.45% | 89.18% | 65.22% | 65.22% | 4434 ms | ↑ 1.06x | 159 | 12m | 9h ago | 22m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 79.75% | 85.17% | 85.17% | 85.17% | 1411 ms | → 0.98x | 3 | 11h 14m | 3d ago | 8m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 74.49% | 61.63% | 8.68% | 8.68% | 3822 ms | ↓ 0.88x | 211 | 40m | 1h ago | 22m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 45.29% | 8.71% | 1.24% | 1.24% | 1654 ms | → 1.00x | 2 | 13d 10h | 3d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 41.94% | 83.58% | 83.64% | 83.64% | 2334 ms | ↑ 1.34x | 13 | 8h 3m | 7d ago | 10m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 25.00% | 50.27% | 50.27% | 50.27% | 1197 ms | → 0.98x | 1 | 5d 5h | 7d ago | 9m ago |

</details>

<details open>
<summary><strong>🔴 Down (201)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.76% | 99.40% | 97.08% | 97.08% | 2769 ms | ↑ 1.11x | 6 | 27m | 2h ago | 13m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 97.52% | 99.22% | 99.22% | 99.22% | 924 ms | ↓ 0.91x | 2 | 2h 1m | 4h ago | 9m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.48% | 67.57% | 10.95% | 10.95% | 4497 ms | ↑ 1.05x | 239 | 27m | 15m ago | 15m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 89.14% | 97.68% | 97.70% | 97.70% | 1217 ms | ↓ 0.86x | 6 | 3h 5m | 19h ago | 24m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 80.37% | 86.56% | 91.15% | 91.15% | 3106 ms | ↑ 1.51x | 13 | 8h 39m | 12h ago | 14m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 74.59% | 83.15% | 83.15% | 83.15% | 2042 ms | → 0.99x | 1 | 1d 19h | 2d ago | 9m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 70.10% | 50.62% | 13.60% | 13.60% | 4617 ms | ↑ 1.06x | 320 | 38m | 15m ago | 15m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 67.42% | 74.99% | 28.03% | 28.03% | 1797 ms | ↓ 0.81x | 25 | 6h 11m | 2d ago | 15m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 66.67% | 60.25% | 61.93% | 61.93% | 4820 ms | → 1.03x | 461 | 18m | 1h ago | 22m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 62.60% | 77.43% | 77.43% | 77.43% | 2246 ms | → 1.03x | 1 | 2d 15h | 3d ago | 9m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 62.27% | 91.95% | 74.77% | 74.77% | 2604 ms | ↑ 1.10x | 6 | 11h 13m | 3d ago | 15m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 58.68% | 91.86% | 89.27% | 89.27% | 1013 ms | ↓ 0.55x | 3 | 23h 11m | 3d ago | 13m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 58.40% | 44.21% | 88.35% | 88.35% | 518 ms | ↓ 0.43x | 128 | 3h 11m | 3d ago | 26m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 58.40% | 91.62% | 89.91% | 89.91% | 551 ms | ↓ 0.62x | 4 | 17h 58m | 3d ago | 25m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 58.26% | 91.70% | 93.62% | 93.62% | 1731 ms | ↓ 0.89x | 6 | 11h 39m | 3d ago | 13m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 57.85% | 83.34% | 83.39% | 83.39% | 3347 ms | → 1.00x | 44 | 1h 56m | 3d ago | 10m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 48.66% | 41.81% | 10.66% | 10.66% | 4286 ms | → 1.03x | 461 | 33m | 1h ago | 15m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 47.31% | 89.60% | 90.19% | 90.19% | 479 ms | ↑ 1.10x | 5 | 17h 34m | 4d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 41.44% | 70.64% | 64.47% | 64.47% | 1793 ms | ↑ 1.10x | 6 | 1d 5h | 4d ago | 14m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 40.41% | 88.22% | 94.34% | 94.34% | 3521 ms | ↑ 1.60x | 7 | 14h 12m | 4d ago | 14m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 30.37% | 86.39% | 88.09% | 88.09% | 1111 ms | → 0.98x | 3 | 1d 15h | 5d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 16.74% | 77.05% | 77.11% | 77.11% | 2797 ms | ↑ 1.29x | 14 | 10h 40m | 6d ago | 10m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 15.91% | 75.92% | 82.84% | 82.84% | 1358 ms | → 1.04x | 16 | 12h 32m | 6d ago | 13m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 15.16% | 83.53% | 96.15% | 96.15% | 1281 ms | ↓ 0.91x | 3 | 1d 24h | 6d ago | 23m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.26% | 8.35% | 8.35% | 8.35% | 3155 ms | ↓ 0.90x | 62 | 3h 44m | 10h ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 5.99% | 76.57% | 84.12% | 84.12% | 1059 ms | ↓ 0.32x | 71 | 2h 28m | 7d ago | 13m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.71% | 3.08% | 28.19% | 28.19% | 4557 ms | ↑ 1.51x | 13 | 2d 6h | 4d ago | 14m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.02% | 27.25% | 65.27% | 65.27% | 3970 ms | ↑ 1.08x | 128 | 4h 24m | 1d ago | 27m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.83% | 66.95% | 73.47% | 73.47% | 835 ms | ↓ 0.72x | 3 | 3d 22h | 3d ago | 12m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 27.63% | 89.02% | 89.02% | — | — | 5 | 4d 24h | 25d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 73.71% | 73.71% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 26.17% | 79.26% | 79.26% | — | — | 26 | 23h 8m | 25d ago | 16m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 52.00% | 78.70% | 78.70% | — | — | 2 | 8d 12h | 17d ago | 14m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.13% | 6.13% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 13.25% | 13.47% | 13.47% | — | — | 11 | 2d 12h | 25d ago | 27m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.65% | 3.65% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 27.78% | 89.29% | 89.29% | — | — | 1 | 24d 22h | 25d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.19% | 39.19% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 75.11% | 78.42% | 78.42% | — | — | 8 | 1d 2h | 9d ago | 13m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 27.06% | 27.06% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 22.21% | 80.14% | 80.14% | — | — | 91 | 6h 41m | 25d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 23.68% | 62.91% | 62.91% | — | — | 77 | 7h 51m | 25d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 27.98% | 33.27% | 33.27% | — | — | 1 | 24d 22h | 25d ago | 15m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 27.81% | 89.73% | 89.73% | — | — | 1 | 24d 22h | 25d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 67.58% | 67.58% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 27.79% | 82.88% | 82.88% | — | — | 1 | 24d 22h | 25d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.87% | 17.87% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 27.95% | 56.74% | 56.74% | — | — | 4 | 6d 5h | 25d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 39.89% | 39.89% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.96% | 3.90% | 3.90% | — | — | 3 | 9d 22h | 25d ago | 15m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 27.96% | 89.90% | 89.90% | — | — | 1 | 24d 22h | 25d ago | 16m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.87% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 25d ago | 21m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 18.02% | 55.84% | 55.84% | — | — | 2 | 13d 8h | 25d ago | 24m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.37% | 31.37% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 15.64% | 2.21% | 2.21% | — | — | 7 | 3d 21h | 25d ago | 22m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 25.79% | 41.64% | 41.64% | — | — | 4 | 5d 19h | 21d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 58.75% | 58.75% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 14.69% | 27.45% | 27.45% | — | — | 65 | 9h 55m | 25d ago | 15m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 27.96% | 32.28% | 32.28% | — | — | 1 | 24d 22h | 25d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.87% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 25d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 61.58% | 61.58% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.60% | 6.60% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 70.84% | 70.84% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 27.64% | 89.67% | 89.67% | — | — | 5 | 4d 24h | 25d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.18% | 9.18% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 22.80% | 85.58% | 85.58% | — | — | 96 | 6h 17m | 25d ago | 16m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 11h | 10d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 34.81% | 34.81% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 56.95% | 56.95% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 26.00% | 26.00% | 26.00% | — | — | 2 | 4d 4h | 7d ago | 10m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 13.76% | 82.52% | 82.52% | — | — | 38 | 17h 10m | 25d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 50.30% | 50.30% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.72% | 45.72% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 27.76% | 89.68% | 89.68% | — | — | 2 | 12d 11h | 25d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 63.32% | 63.32% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.82% | 42.07% | 42.07% | — | — | 2 | 14d 22h | 25d ago | 26m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 22h | 28d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 20h | 28d ago | 16m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 11h | 10d ago | 16m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 17.57% | 35.08% | 35.08% | — | — | 143 | 4h 20m | 25d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 16.49% | 2.81% | 2.81% | — | — | 4 | 6d 18h | 25d ago | 16m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.94% | 44.94% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 26.35% | 89.62% | 89.62% | — | — | 21 | 1d 5h | 25d ago | 21m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 27.96% | 36.07% | 36.07% | — | — | 1 | 24d 22h | 25d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 27.78% | 89.56% | 89.56% | — | — | 2 | 12d 11h | 25d ago | 27m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 78.80% | 82.81% | 82.81% | — | — | 3 | 2d 13h | 8d ago | 12m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 27.78% | 36.86% | 36.86% | — | — | 1 | 24d 22h | 25d ago | 26m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 50.95% | 50.95% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 25.26% | 87.04% | 87.04% | — | — | 50 | 12h 1m | 25d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.44% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 26d ago | 21m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 51.74% | 78.10% | 78.10% | — | — | 3 | 5d 13h | 16d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 60.84% | 44.35% | 44.35% | — | — | 58 | 4h 34m | 7d ago | 12m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 20h | 28d ago | 16m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 85.37% | 85.37% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 27.88% | 66.17% | 66.17% | — | — | 2 | 12d 11h | 25d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.68% | 3.68% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.72% | 46.72% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 27.39% | 83.67% | 83.67% | — | — | 11 | 2d 6h | 25d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 15.52% | 63.82% | 63.82% | — | — | 159 | 3h 56m | 25d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.62% | 30.62% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 16.04% | 16.08% | 16.08% | — | — | 24 | 1d 2h | 25d ago | 12m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 5.77% | 15.18% | 15.18% | — | — | 109 | 6h 12m | 25d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 41.85% | 41.90% | 41.90% | — | — | 10 | 1d 18h | 13d ago | 12m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.08% | 26.08% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 11h | 11d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 25m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 27.28% | 70.43% | 70.43% | — | — | 15 | 1d 16h | 25d ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 19.25% | 19.30% | 19.30% | — | — | 3 | 6d 22h | 20d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.89% | 18.89% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 53.55% | 53.55% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 11h | 10d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 59.68% | 59.68% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 65.86% | 29.71% | 29.71% | — | — | 23 | 10h 14m | 8d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 27.86% | 51.30% | 51.30% | — | — | 2 | 12d 11h | 25d ago | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 38.31% | 66.11% | 66.11% | — | — | 5 | 4d 5h | 21d ago | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 27.92% | 6.00% | 6.00% | — | — | 2 | 12d 11h | 25d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 25m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 27.70% | 89.76% | 89.76% | — | — | 2 | 12d 11h | 25d ago | 25m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 27.66% | 88.59% | 88.59% | — | — | 3 | 8d 7h | 25d ago | 25m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 16.08% | 69.10% | 69.10% | — | — | 148 | 4h 13m | 25d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 81.14% | 81.14% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 27.71% | 88.44% | 88.44% | — | — | 3 | 8d 7h | 25d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.29% | 21.29% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.24% | 7.24% | 7.24% | — | — | 3 | 8d 13h | 23d ago | 25m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 25.43% | 4.39% | 4.39% | — | — | 6 | 3d 15h | 14d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 27.88% | 37.12% | 37.12% | — | — | 3 | 8d 7h | 25d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 73.86% | 73.86% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.83% | 8.83% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 22.20% | 71.07% | 71.07% | — | — | 100 | 6h 3m | 25d ago | 27m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 11h | 10d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 73.16% | 73.16% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 16.25% | 16.36% | 16.36% | — | — | 2 | 5d 5h | 10d ago | 9m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 27.89% | 52.10% | 52.10% | — | — | 2 | 12d 11h | 25d ago | 13m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 38.45% | 40.87% | 40.87% | — | — | 2 | 12d 2h | 24d ago | 12m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 15.90% | 15.90% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 25m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.43% | 19.43% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 40.71% | 25.45% | 25.45% | — | — | 3 | 6d 7h | 17d ago | 13m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 69.73% | 69.73% | 69.73% | — | — | 1 | 7d 7h | 7d ago | 9m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 29.80% | 29.80% | 29.80% | — | — | 8 | 23h 59m | 8d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.68% | 1.73% | 1.73% | — | — | 2 | 12d 18h | 25d ago | 10m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 9.39% | 9.44% | 9.44% | — | — | 2 | 12d 18h | 25d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 11.40% | 11.46% | 11.46% | — | — | 2 | 11d 7h | 22d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 54.02% | 54.02% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 27.74% | 89.73% | 89.73% | — | — | 2 | 12d 11h | 25d ago | 24m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 22.34% | 62.03% | 62.03% | — | — | 5 | 5d 4h | 26d ago | 14m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 35.79% | 89.92% | 89.92% | — | — | 6 | 3d 16h | 22d ago | 21m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.80% | 44.80% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 6.24% | 6.24% | 6.24% | — | — | 1 | 10d 18h | 11d ago | 9m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 22.88% | 87.44% | 87.44% | — | — | 121 | 4h 57m | 25d ago | 16m ago |

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
