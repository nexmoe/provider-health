# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 340 🟢 operational · 60 🟡 degraded · 200 🔴 down · 0 ⚫ unknown

_Updated 2026-05-15 06:36 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (340)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.79% | 92.44% | 92.44% | 800 ms | ↓ 0.65x | 4 | 0s | 27d ago | 15m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 91.90% | 12.46% | 12.46% | 2141 ms | → 1.01x | 5 | 7h 52m | 14d ago | 16m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 97.17% | 97.17% | 2406 ms | ↓ 0.90x | 1 | 0s | 27d ago | 24m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.60% | 98.69% | 98.69% | 1975 ms | ↓ 0.88x | 59 | 7m | 13d ago | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.05% | 99.10% | 99.10% | 3798 ms | → 1.02x | 21 | 0s | 19d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 97.75% | 97.75% | 97.75% | 1967 ms | ↓ 0.94x | 11 | 13m | 11d ago | 10m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 98.84% | 92.44% | 92.44% | 1891 ms | → 0.98x | 8 | 39m | 12d ago | 13m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1625 ms | ↓ 0.76x | 0 | — | — | 9m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 920 ms | ↓ 0.81x | 0 | — | — | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.59% | 91.59% | 2023 ms | → 1.00x | 0 | — | — | 27m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.69% | 95.74% | 95.74% | 3549 ms | ↑ 1.23x | 5 | 3h 2m | 13d ago | 12m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.75% | 99.81% | 99.81% | 882 ms | ↓ 0.59x | 5 | 0s | 28d ago | 13m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.38% | 95.49% | 95.49% | 1433 ms | ↑ 1.16x | 6 | 13m | 23d ago | 12m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.58% | 97.58% | 97.58% | 737 ms | ↓ 0.64x | 1 | 13h 57m | 22d ago | 10m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 56.46% | 30.59% | 30.59% | 545 ms | ↓ 0.86x | 4 | 2d 19h | 16d ago | 21m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.55% | 96.14% | 96.14% | 2094 ms | ↑ 1.08x | 5 | 20m | 11d ago | 15m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.77% | 98.77% | 783 ms | ↓ 0.73x | 2 | 0s | 12d ago | 23m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 501 ms | ↓ 0.65x | 0 | — | — | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.71% | 95.67% | 95.67% | 473 ms | ↓ 0.53x | 5 | 2m | 27d ago | 14m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2133 ms | → 0.97x | 0 | — | — | 9m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1799 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.75% | 97.71% | 97.71% | 3034 ms | ↑ 1.21x | 4 | 4m | 19d ago | 13m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.46% | 96.50% | 96.50% | 180 ms | ↓ 0.32x | 1 | 12h 47m | 28d ago | 11m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 91.89% | 78.66% | 78.66% | 2281 ms | ↓ 0.94x | 31 | 1h 4m | 16d ago | 13m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1048 ms | ↓ 0.73x | 0 | — | — | 9m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.67% | 97.05% | 97.05% | 1091 ms | ↓ 0.54x | 3 | 26m | 17d ago | 15m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 483 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.50% | 98.70% | 98.70% | 173 ms | ↓ 0.10x | 10 | 1m | 22d ago | 14m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.67% | 99.76% | 99.76% | 2384 ms | ↑ 1.24x | 5 | 8m | 11d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.72% | 95.01% | 95.01% | 2864 ms | ↑ 1.10x | 22 | 4m | 27d ago | 14m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 75.91% | 79.60% | 79.60% | 1698 ms | → 1.02x | 2 | 4d 1h | 11d ago | 12m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.66% | 97.99% | 97.99% | 2209 ms | ↑ 1.48x | 10 | 2h 54m | 28d ago | 22m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2747 ms | → 1.03x | 0 | — | — | 9m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 83.18% | 89.02% | 89.02% | 1238 ms | ↓ 0.73x | 2 | 1d 12h | 27d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.92% | 99.48% | 99.48% | 1823 ms | → 0.97x | 1 | 0s | 29d ago | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.75% | 99.83% | 99.83% | 4272 ms | ↑ 1.38x | 5 | 0s | 11d ago | 20m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.97% | 97.09% | 97.09% | 3175 ms | → 0.98x | 22 | 56s | 25d ago | 14m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.71% | 22.50% | 22.50% | 1064 ms | ↓ 0.62x | 6 | 0s | 12d ago | 22m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1216 ms | → 0.98x | 0 | — | — | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.79% | 97.79% | 97.79% | 3419 ms | ↑ 1.46x | 4 | 0s | 26d ago | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1197 ms | ↑ 1.26x | 0 | — | — | 10m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.88% | 95.80% | 95.80% | 734 ms | ↓ 0.69x | 2 | 0s | 13d ago | 15m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.61% | 49.48% | 49.48% | 939 ms | ↑ 1.06x | 41 | 5m | 24d ago | 16m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 84.28% | 46.78% | 46.78% | 222 ms | ↓ 0.57x | 1 | 2d 17h | 29d ago | 16m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1074 ms | ↓ 0.79x | 0 | — | — | 9m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.84% | 99.59% | 99.59% | 3095 ms | ↑ 1.10x | 3 | 0s | 27d ago | 21m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3041 ms | → 0.99x | 0 | — | — | 9m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.88% | 96.84% | 96.84% | 1745 ms | ↓ 0.87x | 2 | 0s | 21d ago | 21m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.88% | 80.08% | 80.08% | 2069 ms | → 1.01x | 2 | 0s | 20d ago | 15m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.88% | 61.26% | 61.26% | 1692 ms | ↑ 1.18x | 2 | 0s | 23d ago | 16m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 987 ms | ↓ 0.92x | 0 | — | — | 10m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 98.15% | 98.15% | 2249 ms | ↓ 0.94x | 2 | 0s | 27d ago | 13m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4247 ms | → 0.95x | 0 | — | — | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.92% | 91.97% | 91.97% | 835 ms | ↓ 0.77x | 1 | 0s | 27d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.88% | 97.95% | 97.95% | 690 ms | ↓ 0.68x | 2 | 0s | 28d ago | 13m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.63% | 99.84% | 99.84% | 247 ms | ↓ 0.27x | 7 | 1m | 12d ago | 14m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 97.93% | 97.93% | 97.93% | 2599 ms | → 1.03x | 12 | 10m | 11d ago | 10m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 91.89% | 63.51% | 63.51% | 2744 ms | ↑ 1.31x | 21 | 1h 31m | 13d ago | 13m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1874 ms | → 0.95x | 0 | — | — | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 85.48% | 85.48% | 85.48% | 2552 ms | ↓ 0.90x | 14 | 1d 1h | 11d ago | 10m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.75% | 41.38% | 41.38% | 1014 ms | ↑ 1.13x | 1 | 40m | 29d ago | 16m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 98.00% | 50.13% | 50.13% | 1503 ms | → 0.99x | 11 | 37m | 17d ago | 22m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.67% | 97.67% | 2638 ms | ↑ 1.27x | 1 | 0s | 27d ago | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.75% | 47.27% | 47.27% | 1114 ms | ↓ 0.88x | 4 | 5m | 23d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.92% | 38.94% | 38.94% | 1269 ms | ↓ 0.67x | 1 | 0s | 29d ago | 22m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1369 ms | ↓ 0.73x | 0 | — | — | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.79% | 78.75% | 78.75% | 1587 ms | ↓ 0.93x | 4 | 0s | 22d ago | 15m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 91.76% | 56.03% | 56.03% | 1038 ms | ↓ 0.72x | 14 | 2h 31m | 12d ago | 16m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.88% | 97.82% | 97.82% | 1446 ms | ↓ 0.56x | 2 | 0s | 27d ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 97.97% | 97.86% | 97.86% | 2686 ms | ↓ 0.92x | 40 | 3m | 12d ago | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.84% | 58.44% | 58.44% | 1093 ms | ↓ 0.87x | 3 | 0s | 24d ago | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2785 ms | → 0.99x | 0 | — | — | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.71% | 99.09% | 99.09% | 1746 ms | ↑ 1.07x | 6 | 0s | 26d ago | 16m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 74.35% | 74.35% | 74.35% | 579 ms | → 0.98x | 1 | 1d 24h | 28d ago | 11m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.63% | 99.74% | 99.74% | 2739 ms | ↑ 1.26x | 8 | 0s | 11d ago | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.48% | 97.80% | 97.80% | 2209 ms | ↑ 1.37x | 2 | 5h 35m | 27d ago | 16m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 77.92% | 10.61% | 10.61% | 1406 ms | ↓ 0.94x | 5 | 18h 40m | 10d ago | 21m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 93.69% | 27.79% | 27.79% | 400 ms | ↓ 0.31x | 2 | 13h 15m | 27d ago | 15m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.92% | 99.72% | 99.72% | 2588 ms | → 1.04x | 1 | 0s | 20d ago | 25m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1891 ms | → 1.00x | 0 | — | — | 9m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.59% | 98.95% | 98.95% | 2508 ms | → 0.99x | 6 | 10m | 10d ago | 25m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.19% | 99.84% | 99.84% | 3567 ms | ↑ 1.12x | 19 | 0s | 9d ago | 26m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.71% | 97.96% | 97.96% | 3802 ms | ↓ 0.92x | 27 | 2m | 26d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 797 ms | ↓ 0.79x | 1 | 0s | 24d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.83% | 67.99% | 67.99% | 2725 ms | → 1.04x | 3 | 0s | 27d ago | 14m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 93.62% | 86.80% | 86.80% | 389 ms | ↓ 0.78x | 10 | 2h 31m | 26d ago | 12m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1245 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.89% | 99.89% | 99.89% | 672 ms | ↓ 0.90x | 1 | 0s | 9d ago | 10m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.84% | 99.94% | 99.94% | 1104 ms | ↓ 0.82x | 3 | 0s | 20d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.80% | 99.60% | 99.60% | 1676 ms | → 0.95x | 4 | 0s | 12d ago | 24m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 67.88% | 71.11% | 71.11% | 2520 ms | ↑ 1.07x | 2 | 3d 17h | 22d ago | 14m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 98.89% | 38.53% | 38.53% | 2574 ms | ↑ 1.33x | 23 | 3m | 11d ago | 14m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1346 ms | → 0.97x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 99.92% | 75.30% | 75.30% | 1731 ms | ↑ 1.31x | 1 | 0s | 30d ago | 13m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1502 ms | ↓ 0.91x | 0 | — | — | 9m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1144 ms | ↑ 1.08x | 0 | — | — | 13m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.93% | 98.93% | 526 ms | ↓ 0.73x | 0 | — | — | 16m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.92% | 98.44% | 98.44% | 1889 ms | ↑ 1.26x | 1 | 0s | 27d ago | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 99.83% | 95.85% | 95.85% | 446 ms | ↓ 0.25x | 3 | 0s | 28d ago | 13m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1072 ms | → 0.99x | 0 | — | — | 9m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 719 ms | ↓ 0.59x | 0 | — | — | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1462 ms | ↓ 0.81x | 0 | — | — | 9m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 51.62% | 86.06% | 86.06% | 1603 ms | ↓ 0.84x | 3 | 4d | 8d ago | 24m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 92.58% | 92.58% | 92.58% | 2182 ms | ↓ 0.92x | 12 | 1d 6h | 10d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 97.25% | 97.25% | 97.25% | 1818 ms | → 0.95x | 11 | 20m | 11d ago | 10m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 95.27% | 95.32% | 95.32% | 303 ms | ↓ 0.38x | 16 | 51m | 12d ago | 11m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.63% | 98.46% | 98.46% | 220 ms | ↓ 0.57x | 5 | 12m | 26d ago | 14m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 97.25% | 97.25% | 97.25% | 1760 ms | ↓ 0.91x | 11 | 20m | 10d ago | 10m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.51% | 98.87% | 98.87% | 812 ms | ↓ 0.63x | 11 | 0s | 18d ago | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 77.15% | 10.51% | 10.51% | 2762 ms | → 1.02x | 2 | 2d 1h | 11d ago | 20m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1039 ms | → 0.99x | 0 | — | — | 9m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 93.58% | 14.01% | 14.01% | 1184 ms | ↑ 1.16x | 1 | 1d 3h | 30d ago | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 1038 ms | ↑ 1.09x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.96% | 99.83% | 99.83% | 663 ms | → 1.00x | 0 | — | — | 25m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 737 ms | ↓ 0.71x | 0 | — | — | 24m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 96.29% | 96.34% | 96.34% | 1368 ms | ↓ 0.91x | 1 | 13h 10m | 27d ago | 11m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.19% | 99.72% | 99.72% | 3050 ms | ↑ 1.17x | 4 | 1h 15m | 9d ago | 25m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.31% | 97.64% | 97.64% | 2591 ms | ↑ 1.74x | 5 | 1h 10m | 27d ago | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.64% | 99.73% | 99.73% | 450 ms | ↓ 0.84x | 6 | 4m | 21d ago | 25m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.65% | 99.69% | 99.69% | 1318 ms | ↓ 0.89x | 5 | 8m | 7d ago | 16m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1304 ms | → 1.00x | 0 | — | — | 10m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.56% | 98.59% | 98.59% | 4347 ms | ↑ 1.06x | 10 | 0s | 27d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 53.49% | 81.23% | 81.23% | 778 ms | ↓ 0.52x | 4 | 3d 13h | 27d ago | 14m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3412 ms | ↑ 1.54x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1392 ms | → 1.00x | 0 | — | — | 9m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 77.21% | 35.50% | 35.50% | 725 ms | → 1.02x | 1 | 4d 1h | 30d ago | 25m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.09% | 98.09% | 98.09% | 4272 ms | ↑ 1.58x | 20 | 30s | 27d ago | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.50% | 87.79% | 87.79% | 688 ms | ↓ 0.67x | 7 | 12m | 8d ago | 12m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.92% | 99.81% | 99.81% | 1578 ms | → 1.03x | 1 | 0s | 27d ago | 14m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.84% | 99.84% | 99.84% | 1450 ms | ↓ 0.83x | 3 | 0s | 8d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.79% | 99.85% | 99.85% | 2158 ms | ↑ 1.07x | 3 | 3m | 26d ago | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.95% | 99.84% | 99.84% | 2223 ms | ↑ 1.22x | 25 | 0s | 11d ago | 25m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.34% | 99.39% | 99.39% | 1813 ms | ↑ 1.38x | 3 | 37m | 27d ago | 12m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.88% | 88.33% | 88.33% | 1238 ms | → 1.02x | 2 | 0s | 21d ago | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.96% | 99.58% | 99.58% | 1114 ms | → 0.98x | 0 | — | — | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.64% | 95.58% | 95.58% | 2758 ms | → 1.04x | 6 | 47m | 19d ago | 15m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 93.54% | 12.85% | 12.85% | 2701 ms | ↑ 1.82x | 2 | 13h 30m | 26d ago | 16m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 381 ms | ↓ 0.80x | 0 | — | — | 9m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.76% | 99.74% | 99.74% | 1979 ms | ↓ 0.94x | 5 | 0s | 20d ago | 25m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 25.08% | 25.08% | 25.08% | 3373 ms | → 1.02x | 2 | 10d 7h | 21d ago | 16m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.59% | 88.06% | 88.06% | 1145 ms | ↓ 0.77x | 8 | 1m | 12d ago | 24m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 93.05% | 12.61% | 12.61% | 1722 ms | ↓ 0.81x | 12 | 2h 18m | 27d ago | 16m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.79% | 98.73% | 98.73% | 2473 ms | ↑ 1.47x | 4 | 0s | 27d ago | 15m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 76.91% | 78.06% | 78.06% | 2157 ms | ↓ 0.93x | 3 | 1d 9h | 12d ago | 26m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.84% | 99.91% | 99.91% | 855 ms | ↓ 0.77x | 3 | 0s | 12d ago | 24m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.91% | 99.91% | 1590 ms | → 1.01x | 1 | 0s | 25d ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.80% | 99.64% | 99.64% | 838 ms | ↓ 0.73x | 4 | 0s | 13d ago | 24m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 77.00% | 27.96% | 27.96% | 628 ms | ↓ 0.90x | 4 | 1d | 12d ago | 14m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.56% | 99.56% | 1313 ms | ↓ 0.84x | 0 | — | — | 25m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1705 ms | ↓ 0.79x | 0 | — | — | 9m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.88% | 99.93% | 99.93% | 808 ms | ↓ 0.71x | 2 | 0s | 9d ago | 12m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.84% | 98.94% | 98.94% | 1693 ms | ↓ 0.87x | 3 | 0s | 27d ago | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.83% | 97.67% | 97.67% | 1150 ms | ↓ 0.79x | 3 | 0s | 28d ago | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.79% | 97.25% | 97.25% | 2944 ms | ↑ 1.51x | 4 | 0s | 27d ago | 13m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 77.13% | 10.58% | 10.58% | 1379 ms | → 1.00x | 4 | 1d | 13d ago | 24m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 64.90% | 64.90% | 1050 ms | ↑ 1.16x | 2 | 0s | 27d ago | 16m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.75% | 77.19% | 77.19% | 1761 ms | → 0.96x | 5 | 0s | 20d ago | 15m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.68% | 99.77% | 99.77% | 1436 ms | ↓ 0.80x | 6 | 2m | 27d ago | 24m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.88% | 99.68% | 99.68% | 2097 ms | ↑ 1.17x | 1 | 10m | 28d ago | 25m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2718 ms | → 0.99x | 0 | — | — | 9m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.92% | 99.86% | 99.86% | 1034 ms | ↓ 0.79x | 1 | 0s | 27d ago | 16m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 92.91% | 83.86% | 83.86% | 1169 ms | ↓ 0.80x | 116 | 5m | 11d ago | 25m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 88.02% | 83.93% | 83.93% | 347 ms | ↓ 0.17x | 117 | 16m | 18d ago | 24m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.18% | 99.18% | 2192 ms | ↑ 1.14x | 1 | 0s | 27d ago | 16m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 62.69% | 62.69% | 334 ms | ↓ 0.20x | 1 | 0s | 27d ago | 16m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.92% | 96.21% | 96.21% | 1385 ms | ↑ 1.30x | 1 | 0s | 27d ago | 16m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 91.70% | 12.48% | 12.48% | 958 ms | ↓ 0.64x | 38 | 45m | 9d ago | 21m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.92% | 99.73% | 99.73% | 2398 ms | → 0.97x | 1 | 0s | 13d ago | 25m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1306 ms | → 1.01x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 52.69% | 52.69% | 607 ms | ↓ 0.62x | 1 | 0s | 27d ago | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.20% | 98.20% | 1346 ms | → 0.99x | 1 | 0s | 27d ago | 15m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.75% | 97.84% | 97.84% | 2186 ms | ↑ 1.11x | 5 | 0s | 8d ago | 14m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.75% | 29.16% | 29.16% | 2069 ms | ↓ 0.94x | 5 | 0s | 14d ago | 15m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.75% | 99.16% | 99.16% | 3454 ms | ↑ 1.33x | 2 | 33m | 24d ago | 20m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2385 ms | ↓ 0.84x | 0 | — | — | 25m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 1948 ms | ↑ 1.09x | 2 | 0s | 27d ago | 15m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.79% | 46.22% | 46.22% | 4038 ms | ↑ 1.20x | 4 | 0s | 26d ago | 14m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.83% | 99.09% | 99.09% | 2207 ms | ↑ 1.12x | 3 | 0s | 13d ago | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.92% | 97.92% | 97.92% | 1663 ms | ↑ 1.39x | 1 | 11h 52m | 15d ago | 10m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.67% | 76.02% | 76.02% | 1499 ms | ↑ 1.72x | 2 | 50m | 15d ago | 16m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.49x | 0 | — | — | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.43% | 99.90% | 99.90% | 1799 ms | ↓ 0.89x | 10 | 3m | 12d ago | 24m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 784 ms | → 1.00x | 0 | — | — | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.84% | 99.94% | 99.94% | 2076 ms | ↑ 1.06x | 2 | 1m | 27d ago | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.92% | 99.49% | 99.49% | 2850 ms | ↑ 1.18x | 1 | 0s | 26d ago | 25m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.87% | 83.87% | 2068 ms | ↑ 1.55x | 1 | 0s | 27d ago | 15m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.88% | 95.67% | 95.67% | 1019 ms | ↑ 1.14x | 2 | 0s | 27d ago | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.92% | 99.97% | 99.97% | 927 ms | ↓ 0.84x | 1 | 0s | 27d ago | 24m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.38% | 90.67% | 90.67% | 2642 ms | ↓ 0.83x | 14 | 0s | 16d ago | 15m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 77.05% | 12.62% | 12.62% | 679 ms | ↓ 0.45x | 1 | 4d 1h | 30d ago | 16m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 538 ms | ↓ 0.63x | 0 | — | — | 9m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.88% | 99.93% | 99.93% | 789 ms | → 0.96x | 2 | 0s | 27d ago | 14m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 77.01% | 11.07% | 11.07% | 1094 ms | ↓ 0.87x | 2 | 2d 1h | 13d ago | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.88% | 55.99% | 55.99% | 1942 ms | ↑ 1.05x | 2 | 0s | 27d ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.84% | 99.76% | 99.76% | 2663 ms | ↑ 1.11x | 3 | 0s | 20d ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 62.24% | 62.24% | 853 ms | ↓ 0.91x | 0 | — | — | 26m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.92% | 99.01% | 99.01% | 943 ms | ↓ 0.71x | 1 | 0s | 27d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.34% | 96.42% | 96.42% | 4056 ms | ↑ 1.27x | 8 | 17m | 9d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 77.26% | 10.57% | 10.57% | 882 ms | ↓ 0.91x | 1 | 4d 1h | 30d ago | 24m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 936 ms | → 0.98x | 0 | — | — | 10m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.02% | 99.02% | 99.02% | 1189 ms | ↓ 0.74x | 1 | 3h 45m | 20d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.78% | 99.89% | 99.89% | 2235 ms | ↓ 0.88x | 1 | 0s | 12d ago | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1179 ms | ↓ 0.88x | 0 | — | — | 10m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1971 ms | → 0.99x | 0 | — | — | 10m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 93.50% | 13.52% | 13.52% | 1139 ms | ↓ 0.59x | 3 | 9h | 10d ago | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 93.88% | 92.76% | 92.76% | 3726 ms | ↓ 0.87x | 49 | 22m | 26d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 2087 ms | → 1.04x | 1 | 0s | 27d ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.50% | 98.55% | 98.55% | 2355 ms | ↑ 1.34x | 10 | 59s | 12d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.25% | 98.25% | 98.25% | 1479 ms | ↓ 0.85x | 10 | 8m | 11d ago | 10m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.71% | 98.99% | 98.99% | 1081 ms | ↓ 0.95x | 5 | 2m | 21d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.75% | 99.75% | 99.75% | 2077 ms | → 0.98x | 1 | 20m | 10d ago | 9m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 69.10% | 25.86% | 25.86% | 1682 ms | ↓ 0.85x | 2 | 3d 10h | 23d ago | 25m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.92% | 99.54% | 99.54% | 1295 ms | → 0.97x | 1 | 0s | 30d ago | 25m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.41% | 99.41% | 1141 ms | ↓ 0.94x | 0 | — | — | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.96% | 99.99% | 99.99% | 526 ms | → 0.99x | 0 | — | — | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 83.60% | 57.95% | 57.95% | 2990 ms | → 1.01x | 127 | 23m | 9d ago | 25m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.15% | 91.34% | 91.34% | 1281 ms | ↓ 0.74x | 11 | 15m | 15d ago | 24m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.96% | 97.87% | 97.87% | 1582 ms | ↓ 0.87x | 0 | — | — | 12m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.62% | 96.38% | 96.38% | 2767 ms | → 1.03x | 24 | 7m | 15d ago | 25m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.67% | 99.73% | 99.73% | 726 ms | ↓ 0.66x | 2 | 25m | 27d ago | 12m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.58% | 85.58% | 1407 ms | ↑ 1.09x | 1 | 0s | 27d ago | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.63% | 99.71% | 99.71% | 1252 ms | → 1.03x | 8 | 0s | 12d ago | 12m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1424 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.96% | 99.45% | 99.45% | 987 ms | → 1.01x | 0 | — | — | 25m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 406 ms | ↓ 0.60x | 0 | — | — | 9m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.96% | 99.71% | 99.71% | 881 ms | → 0.97x | 0 | — | — | 25m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.55% | 66.56% | 66.56% | 1183 ms | ↑ 1.10x | 9 | 1m | 12d ago | 14m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.88% | 99.87% | 99.87% | 2796 ms | ↑ 1.40x | 2 | 0s | 19d ago | 22m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.88% | 99.81% | 99.81% | 742 ms | → 0.95x | 2 | 0s | 29d ago | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.51% | 82.93% | 82.93% | 2504 ms | ↓ 0.91x | 10 | 1m | 11d ago | 21m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.65% | 98.65% | 1639 ms | ↓ 0.85x | 1 | 0s | 27d ago | 15m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 97.08% | 97.08% | 1438 ms | ↑ 1.09x | 3 | 0s | 20d ago | 13m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.56% | 91.40% | 91.40% | 4070 ms | ↑ 1.11x | 9 | 1m | 27d ago | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.86% | 99.86% | 99.86% | 842 ms | → 0.99x | 1 | 0s | 10d ago | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 293 ms | ↓ 0.54x | 0 | — | — | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 95.48% | 95.53% | 95.53% | 794 ms | ↓ 0.45x | 4 | 4h 8m | 15d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.79% | 98.62% | 98.62% | 535 ms | ↓ 0.92x | 2 | 10m | 28d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2520 ms | → 1.02x | 0 | — | — | 9m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.17% | 97.11% | 97.11% | 3010 ms | ↑ 1.18x | 16 | 2m | 15d ago | 13m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 951 ms | → 0.97x | 0 | — | — | 9m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 77.17% | 22.09% | 22.09% | 828 ms | → 1.01x | 2 | 2d 1h | 16d ago | 23m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.83% | 99.77% | 99.77% | 1725 ms | ↓ 0.83x | 3 | 0s | 27d ago | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.90% | 97.90% | 1570 ms | ↑ 1.13x | 2 | 0s | 27d ago | 15m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 98.97% | 94.28% | 94.28% | 2732 ms | ↓ 0.59x | 18 | 4m | 11d ago | 13m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1358 ms | ↓ 0.87x | 1 | 0s | 29d ago | 23m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.88% | 86.18% | 86.18% | 2490 ms | ↑ 1.19x | 2 | 0s | 20d ago | 15m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.17% | 96.22% | 96.22% | 2140 ms | ↑ 1.16x | 5 | 15h 59m | 18d ago | 16m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.92% | 99.86% | 99.86% | 1783 ms | → 1.03x | 1 | 0s | 24d ago | 23m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 726 ms | ↓ 0.64x | 0 | — | — | 10m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.88% | 99.84% | 99.84% | 2078 ms | → 0.98x | 1 | 20m | 22d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.92% | 99.93% | 99.93% | 948 ms | ↑ 1.37x | 1 | 0s | 13d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 93.50% | 12.67% | 12.67% | 2100 ms | → 1.03x | 3 | 9h | 22d ago | 16m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 76.85% | 10.41% | 10.41% | 1634 ms | → 1.03x | 6 | 16h 12m | 12d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.89% | 99.89% | 3248 ms | ↑ 1.46x | 4 | 0s | 19d ago | 13m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3053 ms | → 0.99x | 0 | — | — | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 93.32% | 22.52% | 22.52% | 1676 ms | → 1.02x | 7 | 3h 54m | 11d ago | 15m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.92% | 99.78% | 99.78% | 3411 ms | ↑ 1.63x | 1 | 0s | 27d ago | 14m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.31% | 99.88% | 99.88% | 1443 ms | → 0.97x | 3 | 1h 27m | 18d ago | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.92% | 99.92% | 99.92% | 3103 ms | ↑ 1.52x | 1 | 0s | 29d ago | 23m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.92% | 99.73% | 99.73% | 2762 ms | ↑ 1.50x | 1 | 0s | 29d ago | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.88% | 97.84% | 97.84% | 1012 ms | ↓ 0.88x | 1 | 10m | 28d ago | 13m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.82% | 99.82% | 2535 ms | ↑ 1.90x | 1 | 0s | 30d ago | 16m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.76% | 99.04% | 99.04% | 1433 ms | → 0.96x | 5 | 0s | 26d ago | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 452 ms | ↓ 0.56x | 0 | — | — | 24m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.79% | 97.29% | 91.72% | 91.72% | 988 ms | ↓ 0.88x | 25 | 26m | 4d ago | 25m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 98.99% | 99.69% | 99.69% | 3607 ms | ↑ 1.69x | 3 | 1h 13m | 16h ago | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.79% | 99.61% | 99.65% | 99.65% | 432 ms | ↓ 0.85x | 8 | 0s | 7d ago | 25m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.79% | 99.51% | 99.18% | 99.18% | 1351 ms | → 0.97x | 10 | 1m | 4h ago | 24m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.92% | 99.94% | 99.94% | 1076 ms | ↓ 0.90x | 1 | 0s | 1d ago | 24m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.84% | 99.89% | 99.89% | 284 ms | ↓ 0.22x | 3 | 0s | 15h ago | 24m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.79% | 98.95% | 99.45% | 99.45% | 3178 ms | → 0.97x | 24 | 50s | 3d ago | 26m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.35% | 99.39% | 99.39% | 1789 ms | ↓ 0.85x | 12 | 3m | 1d ago | 24m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.76% | 16.45% | 16.45% | 2290 ms | ↑ 1.08x | 5 | 0s | 5h ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.79% | 77.11% | 10.57% | 10.57% | 2248 ms | → 1.00x | 4 | 1d | 4d ago | 25m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.79% | 99.42% | 67.79% | 67.79% | 1184 ms | ↓ 0.90x | 10 | 6m | 4d ago | 16m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.39% | 97.64% | 97.64% | 3449 ms | → 1.04x | 12 | 3m | 3d ago | 20m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.79% | 99.67% | 78.49% | 78.49% | 1727 ms | ↓ 0.94x | 6 | 2m | 4d ago | 15m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.79% | 99.47% | 99.72% | 99.72% | 2810 ms | → 0.95x | 9 | 3m | 7d ago | 22m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.79% | 88.58% | 50.83% | 50.83% | 3245 ms | ↑ 1.18x | 105 | 18m | 2d ago | 22m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.88% | 72.07% | 72.07% | 739 ms | ↓ 0.72x | 2 | 0s | 1d ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.79% | 99.79% | 54.85% | 54.85% | 1955 ms | → 0.95x | 4 | 0s | 5d ago | 16m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.88% | 99.52% | 99.52% | 990 ms | ↓ 0.72x | 2 | 0s | 4d ago | 16m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.79% | 76.72% | 10.58% | 10.58% | 2832 ms | ↑ 1.49x | 6 | 16h 21m | 4d ago | 16m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.79% | 98.65% | 99.63% | 99.63% | 2747 ms | ↑ 1.39x | 4 | 1h 8m | 7d ago | 21m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.79% | 95.92% | 62.73% | 62.73% | 773 ms | ↓ 0.93x | 11 | 2h 34m | 7d ago | 16m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.79% | 77.00% | 43.01% | 43.01% | 1631 ms | ↓ 0.80x | 4 | 1d | 3d ago | 15m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.79% | 99.71% | 98.90% | 98.90% | 1269 ms | → 1.02x | 5 | 2m | 5h ago | 15m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.79% | 99.88% | 88.10% | 88.10% | 2190 ms | ↓ 0.88x | 2 | 0s | 2d ago | 15m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.79% | 74.11% | 90.81% | 90.81% | 1531 ms | ↓ 0.74x | 8 | 1d | 5h ago | 15m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.79% | 89.50% | 36.88% | 36.88% | 630 ms | ↓ 0.54x | 10 | 5h 42m | 7d ago | 14m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.79% | 92.11% | 88.17% | 88.17% | 470 ms | ↓ 0.15x | 115 | 7m | 6h ago | 14m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.79% | 99.67% | 98.14% | 98.14% | 494 ms | ↓ 0.46x | 6 | 2m | 6d ago | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.79% | 99.79% | 98.44% | 98.44% | 689 ms | ↓ 0.49x | 4 | 0s | 4d ago | 15m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.79% | 96.45% | 96.50% | 96.50% | 2330 ms | ↓ 0.79x | 3 | 4h 13m | 4d ago | 11m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.79% | 99.89% | 99.89% | 99.89% | 1320 ms | → 1.02x | 1 | 0s | 1d ago | 9m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.79% | 99.75% | 97.97% | 97.97% | 905 ms | ↓ 0.73x | 5 | 0s | 7d ago | 13m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.79% | 99.83% | 99.87% | 99.87% | 708 ms | ↓ 0.68x | 2 | 9m | 3d ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.79% | 99.60% | 99.60% | 99.60% | 176 ms | ↓ 0.15x | 4 | 15m | 5d ago | 10m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.79% | 98.64% | 99.33% | 99.33% | 4032 ms | ↑ 1.66x | 5 | 1h 48m | 3d ago | 14m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.79% | 99.42% | 99.58% | 99.58% | 1109 ms | ↑ 1.22x | 9 | 9m | 17h ago | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.79% | 99.77% | 99.77% | 99.77% | 479 ms | → 0.99x | 2 | 0s | 5d ago | 9m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.79% | 97.97% | 97.97% | 97.97% | 1453 ms | → 1.01x | 2 | 1h 20m | 6d ago | 10m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.79% | 99.67% | 97.15% | 97.15% | 3993 ms | ↑ 1.62x | 7 | 0s | 3d ago | 14m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.79% | 99.66% | 99.66% | 99.66% | 1510 ms | → 1.00x | 2 | 10m | 3d ago | 9m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.79% | 99.46% | 94.87% | 94.87% | 999 ms | ↓ 0.60x | 11 | 52s | 3d ago | 13m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.79% | 99.88% | 99.88% | 99.88% | 963 ms | → 0.98x | 1 | 0s | 5d ago | 9m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.79% | 95.62% | 95.66% | 95.66% | 1811 ms | ↑ 1.06x | 7 | 2h 25m | 3d ago | 12m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 99.79% | 98.62% | 98.62% | 98.62% | 2586 ms | → 1.00x | 13 | 17m | 7h ago | 10m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.79% | 98.65% | 98.77% | 98.77% | 1856 ms | ↓ 0.95x | 8 | 5m | 3d ago | 10m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.79% | 99.67% | 95.45% | 95.45% | 1307 ms | ↓ 0.82x | 2 | 51m | 7d ago | 13m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.79% | 61.80% | 30.23% | 30.23% | 1387 ms | ↓ 0.61x | 21 | 10h 53m | 3d ago | 14m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.59% | 95.31% | 98.77% | 98.77% | 2987 ms | ↓ 0.91x | 88 | 5m | 3d ago | 26m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.59% | 99.63% | 98.75% | 98.75% | 1376 ms | ↑ 1.61x | 8 | 0s | 4d ago | 16m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.59% | 88.23% | 77.07% | 77.07% | 2550 ms | ↑ 1.07x | 169 | 9m | 23h ago | 21m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.59% | 94.61% | 96.34% | 96.34% | 1336 ms | ↓ 0.81x | 24 | 46m | 7d ago | 21m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.59% | 99.63% | 99.71% | 99.71% | 3184 ms | ↑ 1.18x | 8 | 0s | 2d ago | 20m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.51% | 99.28% | 99.28% | 2279 ms | ↑ 1.07x | 9 | 2m | 6d ago | 16m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.59% | 98.77% | 99.41% | 99.41% | 3626 ms | ↑ 1.48x | 18 | 12m | 2d ago | 20m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.75% | 55.93% | 55.93% | 1426 ms | ↓ 0.80x | 5 | 0s | 6d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.59% | 99.59% | 76.23% | 76.23% | 2150 ms | ↓ 0.93x | 9 | 0s | 2d ago | 15m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.59% | 99.47% | 99.79% | 99.79% | 2126 ms | → 0.99x | 11 | 15s | 2d ago | 21m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.59% | 91.94% | 82.59% | 82.59% | 762 ms | ↓ 0.26x | 116 | 9m | 7d ago | 13m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.59% | 99.54% | 99.54% | 99.54% | 958 ms | → 0.96x | 4 | 0s | 5d ago | 10m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.59% | 99.75% | 99.75% | 99.75% | 1501 ms | ↓ 0.76x | 2 | 0s | 1d ago | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.59% | 97.29% | 97.29% | 97.29% | 3429 ms | → 0.96x | 7 | 1h 55m | 1d ago | 10m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.59% | 99.50% | 99.50% | 99.50% | 2906 ms | → 1.00x | 3 | 7m | 3d ago | 9m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.59% | 97.97% | 97.10% | 97.10% | 1565 ms | → 1.02x | 4 | 3h 40m | 3h ago | 13m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.59% | 99.77% | 99.77% | 99.77% | 1450 ms | ↓ 0.93x | 2 | 0s | 3d ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.59% | 99.59% | 99.69% | 99.69% | 4205 ms | ↑ 1.57x | 9 | 0s | 3d ago | 14m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.38% | 99.55% | 87.26% | 87.26% | 2272 ms | ↑ 1.52x | 8 | 5m | 7d ago | 15m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.38% | 97.12% | 97.12% | 97.12% | 2802 ms | → 0.97x | 12 | 21m | 2d ago | 10m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.38% | 97.87% | 97.87% | 97.87% | 2200 ms | → 0.97x | 11 | 11m | 2d ago | 9m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.38% | 99.63% | 99.63% | 99.63% | 1126 ms | → 1.00x | 3 | 0s | 6d ago | 9m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.18% | 83.99% | 78.64% | 78.64% | 130 ms | ↓ 0.63x | 9 | 10h 44m | 3d ago | 26m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.18% | 98.95% | 99.25% | 99.25% | 858 ms | ↓ 0.66x | 25 | 0s | 1d ago | 25m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.17% | 99.51% | 98.97% | 98.97% | 2468 ms | ↑ 1.24x | 10 | 2m | 4d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.17% | 99.79% | 99.85% | 99.85% | 1281 ms | → 0.99x | 2 | 20m | 6d ago | 12m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.17% | 99.50% | 99.50% | 99.50% | 1871 ms | → 0.98x | 2 | 19m | 2d ago | 9m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.17% | 98.88% | 98.88% | 98.88% | 1329 ms | → 0.96x | 9 | 0s | 12h ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.17% | 96.02% | 96.06% | 96.06% | 2050 ms | ↓ 0.88x | 9 | 1h 26m | 8h ago | 11m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (60)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.96% | 98.47% | 89.55% | 89.55% | 1891 ms | ↑ 1.08x | 29 | 2m | 2d ago | 15m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.96% | 91.50% | 91.50% | 91.50% | 1016 ms | ↓ 0.93x | 1 | 1d 1h | 8d ago | 10m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.96% | 99.34% | 99.06% | 99.06% | 178 ms | ↓ 0.38x | 11 | 13m | 1d ago | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.76% | 92.35% | 84.88% | 84.88% | 4585 ms | → 1.01x | 137 | 4m | 4d ago | 16m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.76% | 99.13% | 99.13% | 99.13% | 3472 ms | → 1.01x | 5 | 9m | 2d ago | 9m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.56% | 90.34% | 95.63% | 95.63% | 3507 ms | ↓ 0.93x | 118 | 21m | 3d ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.35% | 97.62% | 98.02% | 98.02% | 4640 ms | ↑ 1.28x | 50 | 3m | 2d ago | 26m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.35% | 91.05% | 60.62% | 60.62% | 4674 ms | → 0.99x | 144 | 6m | 2h ago | 15m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 98.13% | 99.00% | 99.00% | 99.00% | 4538 ms | → 0.96x | 11 | 2m | 4h ago | 9m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 98.13% | 98.88% | 98.88% | 98.88% | 1851 ms | → 0.97x | 5 | 16m | 2d ago | 9m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.94% | 98.95% | 97.66% | 97.66% | 3891 ms | → 1.03x | 25 | 0s | 23h ago | 25m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 97.93% | 99.42% | 98.35% | 98.35% | 2622 ms | ↑ 1.33x | 4 | 45m | 13h ago | 15m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 97.93% | 99.42% | 98.43% | 98.43% | 606 ms | ↓ 0.49x | 4 | 45m | 13h ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.93% | 98.39% | 88.66% | 88.66% | 4202 ms | ↑ 1.85x | 31 | 5m | 1d ago | 14m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.74% | 76.71% | 23.67% | 23.67% | 2239 ms | ↑ 1.09x | 5 | 20h 2m | 6h ago | 23m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.74% | 97.57% | 98.65% | 98.65% | 3537 ms | → 0.99x | 50 | 4m | 14h ago | 24m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.53% | 99.19% | 98.59% | 98.59% | 3949 ms | ↑ 1.33x | 8 | 30m | 5d ago | 23m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.51% | 98.50% | 98.50% | 98.50% | 1826 ms | → 1.01x | 1 | 3h 38m | 3d ago | 10m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.51% | 85.15% | 80.68% | 80.68% | 4779 ms | ↑ 1.14x | 120 | 25m | 13h ago | 13m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.12% | 91.42% | 84.35% | 84.35% | 4594 ms | → 1.04x | 164 | 3m | 17h ago | 23m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.11% | 90.94% | 71.92% | 71.92% | 4527 ms | → 1.00x | 169 | 4m | 18h ago | 21m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.11% | 74.24% | 10.12% | 10.12% | 4290 ms | ↑ 1.22x | 63 | 1h 39m | 41m ago | 20m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.10% | 99.38% | 96.40% | 96.40% | 1736 ms | → 1.03x | 1 | 4h 31m | 22h ago | 13m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.91% | 88.68% | 83.80% | 83.80% | 4531 ms | ↑ 1.07x | 134 | 17m | 18h ago | 27m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.90% | 95.38% | 98.66% | 98.66% | 4384 ms | ↑ 1.24x | 67 | 14m | 5h ago | 20m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.89% | 99.25% | 94.60% | 94.60% | 1852 ms | ↑ 1.31x | 4 | 1h 4m | 3d ago | 12m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.89% | 96.21% | 96.21% | 96.21% | 1586 ms | ↓ 0.90x | 27 | 4m | 5h ago | 9m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.71% | 83.59% | 78.27% | 78.27% | 3396 ms | ↓ 0.93x | 186 | 13m | 2h ago | 27m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.69% | 91.41% | 82.46% | 82.46% | 4745 ms | → 1.02x | 154 | 4m | 4h ago | 14m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.48% | 89.31% | 78.98% | 78.98% | 4836 ms | → 1.04x | 182 | 6m | 20h ago | 15m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 96.30% | 98.05% | 98.98% | 98.98% | 3735 ms | ↑ 1.17x | 14 | 45m | 4d ago | 23m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 96.30% | 98.29% | 96.99% | 96.99% | 3747 ms | ↑ 1.18x | 13 | 45m | 4d ago | 23m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 96.30% | 98.25% | 55.28% | 55.28% | 3980 ms | ↑ 1.18x | 14 | 41m | 4d ago | 23m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 96.30% | 98.29% | 99.16% | 99.16% | 3818 ms | ↑ 1.64x | 12 | 50m | 4d ago | 23m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.09% | 74.95% | 10.23% | 10.23% | 2119 ms | ↑ 1.12x | 52 | 1h 54m | 7h ago | 23m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.07% | 92.70% | 68.37% | 68.37% | 1181 ms | ↓ 0.72x | 21 | 1h 53m | 11h ago | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.06% | 87.89% | 78.83% | 78.83% | 4674 ms | → 1.05x | 224 | 4m | 7h ago | 14m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 95.45% | 33.44% | 8.74% | 8.74% | 2727 ms | ↑ 1.13x | 7 | 2d 15h | 4d ago | 20m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 94.65% | 97.96% | 40.60% | 40.60% | 1224 ms | ↓ 0.87x | 15 | 47m | 18h ago | 23m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.40% | 98.80% | 94.90% | 94.90% | 1578 ms | → 1.04x | 2 | 4h 19m | 3d ago | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 93.98% | 25.64% | 24.63% | 24.63% | 1390 ms | → 0.98x | 2 | 11d 5h | 3d ago | 13m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 93.57% | 98.43% | 96.29% | 96.29% | 1194 ms | ↓ 0.90x | 2 | 5h 55m | 7d ago | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 92.74% | 97.98% | 97.98% | 97.98% | 1076 ms | ↓ 0.55x | 2 | 5h 34m | 3d ago | 10m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.08% | 91.03% | 47.77% | 47.77% | 1984 ms | → 1.00x | 26 | 1h 32m | 17h ago | 13m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 90.50% | 55.69% | 41.99% | 41.99% | 1855 ms | → 1.02x | 5 | 22h 20m | 2d ago | 21m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.25% | 68.50% | 41.07% | 41.07% | 4050 ms | ↑ 1.17x | 173 | 38m | 14h ago | 13m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.84% | 72.15% | 11.30% | 11.30% | 4516 ms | ↑ 1.06x | 244 | 21m | 7h ago | 16m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.59% | 95.87% | 90.44% | 90.44% | 3556 ms | → 1.01x | 28 | 46m | 3d ago | 13m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.14% | 92.25% | 92.25% | 92.25% | 644 ms | → 1.02x | 5 | 4h 10m | 16h ago | 10m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 85.39% | 70.48% | 9.65% | 9.65% | 792 ms | ↓ 0.80x | 85 | 1h 29m | 7h ago | 24m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 84.71% | 96.34% | 97.24% | 97.24% | 1261 ms | ↑ 1.11x | 8 | 3h 27m | 4d ago | 16m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 81.12% | 86.58% | 86.58% | 86.58% | 1412 ms | → 0.97x | 3 | 11h 14m | 4d ago | 9m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 80.58% | 89.96% | 65.34% | 65.34% | 4540 ms | ↑ 1.09x | 136 | 14m | 21h ago | 21m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 76.76% | 85.45% | 90.96% | 90.96% | 3141 ms | ↑ 1.43x | 13 | 9h 5m | 1d ago | 14m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 73.55% | 65.49% | 8.91% | 8.91% | 3615 ms | ↓ 0.87x | 227 | 31m | 1h ago | 21m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 59.88% | 11.81% | 1.62% | 1.62% | 1835 ms | → 1.00x | 2 | 12d 22h | 4d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 56.43% | 84.15% | 84.20% | 84.20% | 2212 ms | ↑ 1.28x | 13 | 8h 3m | 8d ago | 10m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 49.17% | 44.31% | 10.89% | 10.89% | 4101 ms | → 1.02x | 479 | 29m | 55m ago | 15m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 36.72% | 54.57% | 54.57% | 54.57% | 1123 ms | → 0.96x | 1 | 5d 5h | 8d ago | 10m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 9.34% | 64.78% | 73.16% | 73.16% | 634 ms | ↓ 0.32x | 3 | 4d 1h | 4d ago | 13m ago |

</details>

<details open>
<summary><strong>🔴 Down (200)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 89.21% | 92.99% | 92.99% | 92.99% | 967 ms | ↓ 0.88x | 5 | 3h 36m | 18h ago | 9m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 88.48% | 96.56% | 99.35% | 99.35% | 3308 ms | → 0.97x | 28 | 43m | 20h ago | 26m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 84.44% | 96.53% | 95.58% | 95.58% | 2753 ms | ↑ 1.05x | 6 | 4h 28m | 1d ago | 13m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 83.20% | 95.27% | 95.27% | 95.27% | 911 ms | ↓ 0.91x | 2 | 14h 5m | 1d ago | 9m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 82.72% | 96.23% | 99.15% | 99.15% | 695 ms | ↓ 0.91x | 9 | 3h 12m | 25m ago | 25m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 74.69% | 94.92% | 97.32% | 97.32% | 1230 ms | ↓ 0.85x | 2 | 21h 20m | 2d ago | 23m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.15% | 54.15% | 14.01% | 14.01% | 4601 ms | → 1.04x | 332 | 32m | 15m ago | 15m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 65.08% | 60.40% | 61.88% | 61.88% | 4860 ms | → 1.04x | 447 | 18m | 22m ago | 22m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 60.17% | 75.97% | 75.97% | 75.97% | 2023 ms | → 0.99x | 1 | 2d 19h | 3d ago | 9m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 52.89% | 77.24% | 27.89% | 27.89% | 1875 ms | ↓ 0.82x | 25 | 6h 11m | 3d ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 48.13% | 71.30% | 71.30% | 71.30% | 2234 ms | → 1.03x | 1 | 3d 15h | 4d ago | 9m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 47.73% | 88.82% | 74.25% | 74.25% | 2601 ms | ↑ 1.08x | 6 | 15h 15m | 4d ago | 15m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 44.19% | 88.76% | 88.01% | 88.01% | 1011 ms | ↓ 0.53x | 3 | 1d 7h | 4d ago | 13m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 43.98% | 88.63% | 92.26% | 92.26% | 1727 ms | ↓ 0.85x | 5 | 18h 48m | 4d ago | 13m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 43.83% | 40.76% | 88.00% | 88.00% | 519 ms | ↓ 0.45x | 106 | 4h 4m | 4d ago | 25m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 43.83% | 88.53% | 89.56% | 89.56% | 498 ms | ↓ 0.60x | 4 | 1d | 4d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 43.57% | 80.49% | 80.54% | 80.54% | 3198 ms | → 0.99x | 44 | 2h 29m | 4d ago | 10m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 32.78% | 86.42% | 87.92% | 87.92% | 462 ms | ↑ 1.11x | 5 | 22h 23m | 5d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 26.92% | 72.80% | 63.95% | 63.95% | 2025 ms | ↑ 1.18x | 6 | 1d 5h | 5d ago | 15m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 26.29% | 85.01% | 93.41% | 93.41% | 3510 ms | ↑ 1.54x | 7 | 17h 39m | 5d ago | 14m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 15.77% | 83.11% | 86.00% | 86.00% | 1009 ms | → 1.02x | 3 | 1d 23h | 6d ago | 11m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 9.13% | 8.96% | 8.96% | 8.96% | 3135 ms | ↓ 0.77x | 71 | 3h 31m | 3h ago | 8m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.73% | 0.74% | 27.90% | 27.90% | 4557 ms | → 1.00x | 5 | 5d 22h | 5d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 2.07% | 74.40% | 74.45% | 74.45% | 3408 ms | ↑ 1.41x | 14 | 12h 23m | 7d ago | 10m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 1.66% | 72.33% | 81.38% | 81.38% | 922 ms | → 0.99x | 16 | 14h 3m | 7d ago | 13m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.82% | 23.61% | 65.02% | 65.02% | 4040 ms | ↑ 1.14x | 113 | 5h 10m | 4h ago | 27m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.41% | 80.18% | 95.77% | 95.77% | 2125 ms | ↑ 1.30x | 3 | 2d 8h | 7d ago | 23m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 22.57% | 88.68% | 88.68% | — | — | 5 | 5d 5h | 26d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 73.43% | 73.43% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 21.04% | 78.95% | 78.95% | — | — | 26 | 1d | 26d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 47.69% | 77.77% | 77.77% | — | — | 2 | 8d 24h | 18d ago | 14m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.10% | 6.10% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 13.66% | 13.42% | 13.42% | — | — | 11 | 2d 12h | 26d ago | 26m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.64% | 3.64% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 22.72% | 88.94% | 88.94% | — | — | 1 | 25d 22h | 26d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.04% | 39.04% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 71.49% | 76.99% | 76.99% | — | — | 8 | 1d 5h | 10d ago | 13m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.87% | 26.87% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 17.80% | 79.83% | 79.83% | — | — | 74 | 8h 32m | 26d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 19.61% | 62.30% | 62.30% | — | — | 57 | 11h 1m | 26d ago | 15m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 22.93% | 33.08% | 33.08% | — | — | 1 | 25d 22h | 26d ago | 16m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 22.77% | 89.38% | 89.38% | — | — | 1 | 25d 22h | 26d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 67.31% | 67.31% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 25m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 22.73% | 82.56% | 82.56% | — | — | 1 | 25d 22h | 26d ago | 25m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.72% | 17.72% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 22.90% | 56.37% | 56.37% | — | — | 4 | 6d 11h | 26d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 39.59% | 39.59% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.99% | 3.87% | 3.87% | — | — | 3 | 9d 22h | 26d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 22.91% | 89.55% | 89.55% | — | — | 1 | 25d 22h | 26d ago | 16m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.90% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 26d ago | 21m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 12.66% | 55.62% | 55.62% | — | — | 2 | 13d 20h | 26d ago | 23m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.20% | 31.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 16.11% | 2.20% | 2.20% | — | — | 7 | 3d 21h | 26d ago | 22m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 26.58% | 41.08% | 41.08% | — | — | 4 | 5d 19h | 22d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 58.52% | 58.52% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 10.35% | 27.29% | 27.29% | — | — | 42 | 15h 55m | 26d ago | 15m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 22.91% | 32.14% | 32.14% | — | — | 1 | 25d 22h | 26d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.90% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 26d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 61.34% | 61.34% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.53% | 6.53% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 70.56% | 70.56% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 22.58% | 89.32% | 89.32% | — | — | 5 | 5d 5h | 26d ago | 25m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 25m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.04% | 9.04% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 18.66% | 85.25% | 85.25% | — | — | 76 | 8h 15m | 26d ago | 16m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 11h | 11d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 34.39% | 34.39% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 56.73% | 56.73% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 24.10% | 24.10% | 24.10% | — | — | 2 | 4d 16h | 8d ago | 10m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 25m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 14.19% | 82.20% | 82.20% | — | — | 38 | 17h 10m | 26d ago | 26m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 50.10% | 50.10% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.54% | 45.54% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 22.72% | 89.33% | 89.33% | — | — | 2 | 12d 23h | 26d ago | 26m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 63.08% | 63.08% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.85% | 41.91% | 41.91% | — | — | 2 | 14d 22h | 26d ago | 25m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 22h | 29d ago | 24m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 20h | 29d ago | 16m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 11h | 11d ago | 16m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 14.31% | 34.88% | 34.88% | — | — | 117 | 5h 28m | 26d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 16.99% | 2.79% | 2.79% | — | — | 4 | 6d 18h | 26d ago | 16m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.77% | 44.77% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 21.26% | 89.27% | 89.27% | — | — | 21 | 1d 6h | 26d ago | 20m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 22.91% | 35.90% | 35.90% | — | — | 1 | 25d 22h | 26d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 22.73% | 89.21% | 89.21% | — | — | 2 | 12d 23h | 26d ago | 26m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 75.29% | 81.00% | 81.00% | — | — | 3 | 2d 21h | 9d ago | 13m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 22.72% | 35.99% | 35.99% | — | — | 1 | 25d 22h | 26d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 50.62% | 50.62% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 20.22% | 86.70% | 86.70% | — | — | 48 | 13h 1m | 26d ago | 26m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.29% | 0.12% | 0.12% | — | — | 7 | 4d 7h | 27d ago | 20m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 47.42% | 77.47% | 77.47% | — | — | 3 | 5d 21h | 17d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 62.71% | 43.48% | 43.48% | — | — | 58 | 4h 34m | 8d ago | 12m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 20h | 29d ago | 16m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 85.04% | 85.04% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 22.82% | 65.36% | 65.36% | — | — | 2 | 12d 23h | 26d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.65% | 3.65% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.54% | 46.54% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 22.44% | 83.34% | 83.34% | — | — | 8 | 3d 6h | 26d ago | 25m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 12.77% | 63.57% | 63.57% | — | — | 124 | 5h 12m | 26d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 73.13% | 82.96% | 82.96% | — | — | 69 | 2h 53m | 8d ago | 13m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.50% | 30.50% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 15.61% | 15.62% | 15.62% | — | — | 24 | 1d 3h | 26d ago | 12m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 4.54% | 15.03% | 15.03% | — | — | 85 | 8h 4m | 26d ago | 15m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 42.24% | 40.74% | 40.74% | — | — | 10 | 1d 19h | 14d ago | 12m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.97% | 25.97% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 11h | 12d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 24m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 22.21% | 69.68% | 69.68% | — | — | 15 | 1d 17h | 26d ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 18.59% | 18.64% | 18.64% | — | — | 3 | 7d 6h | 21d ago | 11m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.82% | 18.82% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 53.35% | 53.35% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 11h | 11d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 59.45% | 59.45% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 67.88% | 29.34% | 29.34% | — | — | 23 | 10h 14m | 9d ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 22.80% | 50.36% | 50.36% | — | — | 2 | 12d 23h | 26d ago | 13m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 33.61% | 65.13% | 65.13% | — | — | 4 | 5d 12h | 22d ago | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 22.91% | 5.98% | 5.98% | — | — | 1 | 25d 22h | 26d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 22.66% | 89.42% | 89.42% | — | — | 2 | 12d 23h | 26d ago | 24m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 22.61% | 88.25% | 88.25% | — | — | 3 | 8d 16h | 26d ago | 24m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 13.14% | 68.84% | 68.84% | — | — | 120 | 5h 21m | 26d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 80.83% | 80.83% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 22.69% | 88.10% | 88.10% | — | — | 2 | 12d 23h | 26d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.20% | 21.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.03% | 7.02% | 7.02% | — | — | 3 | 8d 21h | 24d ago | 25m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 26.20% | 4.37% | 4.37% | — | — | 6 | 3d 15h | 15d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 22.87% | 36.96% | 36.96% | — | — | 2 | 12d 23h | 26d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 73.57% | 73.57% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.76% | 8.76% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 17.78% | 70.80% | 70.80% | — | — | 87 | 7h 14m | 26d ago | 26m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 11h | 11d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 72.87% | 72.87% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 15.06% | 15.16% | 15.16% | — | — | 2 | 5d 17h | 11d ago | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 22.83% | 51.20% | 51.20% | — | — | 2 | 12d 23h | 26d ago | 13m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 32.12% | 39.57% | 39.57% | — | — | 2 | 12d 14h | 25d ago | 12m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 15.69% | 15.69% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 21h | 29d ago | 25m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.36% | 19.36% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 41.96% | 25.02% | 25.02% | — | — | 3 | 6d 7h | 18d ago | 13m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 66.96% | 66.96% | 66.96% | — | — | 1 | 8d 7h | 8d ago | 9m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 27.44% | 27.44% | 27.44% | — | — | 8 | 1d 3h | 9d ago | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.62% | 1.67% | 1.67% | — | — | 2 | 13d 6h | 26d ago | 10m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 9.09% | 9.13% | 9.13% | — | — | 2 | 13d 6h | 26d ago | 11m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 11.00% | 11.05% | 11.05% | — | — | 2 | 11d 19h | 23d ago | 10m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 53.81% | 53.81% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 22.69% | 89.38% | 89.38% | — | — | 2 | 12d 23h | 26d ago | 23m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 17.11% | 61.24% | 61.24% | — | — | 5 | 5d 9h | 27d ago | 14m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 30.99% | 89.57% | 89.57% | — | — | 6 | 3d 20h | 23d ago | 20m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.63% | 44.63% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 5.75% | 5.75% | 5.75% | — | — | 1 | 11d 18h | 12d ago | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 18.79% | 87.10% | 87.10% | — | — | 94 | 6h 38m | 26d ago | 16m ago |

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
