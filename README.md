# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 342 🟢 operational · 61 🟡 degraded · 197 🔴 down · 0 ⚫ unknown

_Updated 2026-05-13 06:28 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.80% | 92.32% | 92.32% | 765 ms | ↓ 0.64x | 4 | 0s | 25d ago | 8m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 83.82% | 11.78% | 11.78% | 2218 ms | → 1.03x | 5 | 17h 30m | 12d ago | 9m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 97.15% | 97.15% | 2454 ms | → 0.95x | 1 | 0s | 25d ago | 16m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.58% | 98.68% | 98.68% | 2164 ms | → 0.97x | 61 | 7m | 11d ago | 18m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.99% | 99.04% | 99.04% | 3838 ms | → 1.05x | 21 | 0s | 17d ago | 18m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 97.29% | 97.29% | 97.29% | 2092 ms | → 0.97x | 11 | 13m | 9d ago | 3m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 98.79% | 92.13% | 92.13% | 1935 ms | ↑ 1.05x | 10 | 31m | 10d ago | 6m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1712 ms | ↓ 0.77x | 0 | — | — | 3m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.67% | 96.67% | 1768 ms | ↑ 1.08x | 0 | — | — | 6m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 96.99% | 96.99% | 96.99% | 2924 ms | → 1.00x | 10 | 22m | 9d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 976 ms | ↓ 0.80x | 0 | — | — | 2m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.52% | 91.52% | 1858 ms | → 1.00x | 0 | — | — | 19m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1316 ms | → 1.03x | 0 | — | — | 3m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.42% | 95.47% | 95.47% | 3189 ms | ↑ 1.23x | 5 | 3h 2m | 11d ago | 5m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.76% | 99.81% | 99.81% | 898 ms | ↓ 0.60x | 5 | 0s | 26d ago | 6m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 95.86% | 95.25% | 95.25% | 1417 ms | ↑ 1.20x | 8 | 3h 39m | 21d ago | 5m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.37% | 97.37% | 97.37% | 759 ms | ↓ 0.62x | 1 | 13h 57m | 20d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 49.38% | 30.05% | 30.05% | 540 ms | ↓ 0.84x | 4 | 3d 7h | 14d ago | 13m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.56% | 96.07% | 96.07% | 2092 ms | ↑ 1.14x | 5 | 20m | 9d ago | 8m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.76% | 98.76% | 748 ms | ↓ 0.78x | 2 | 0s | 10d ago | 15m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 512 ms | ↓ 0.62x | 0 | — | — | 2m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.72% | 95.58% | 95.58% | 477 ms | ↓ 0.53x | 5 | 2m | 25d ago | 7m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2176 ms | → 0.99x | 0 | — | — | 2m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1851 ms | → 0.96x | 0 | — | — | 2m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.64% | 97.64% | 97.64% | 3036 ms | ↑ 1.32x | 6 | 5m | 17d ago | 6m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.22% | 96.27% | 96.27% | 180 ms | ↓ 0.29x | 1 | 12h 47m | 26d ago | 4m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.13% | 77.92% | 77.92% | 2397 ms | ↑ 1.10x | 31 | 1h 4m | 14d ago | 6m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1031 ms | ↓ 0.71x | 0 | — | — | 2m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 100.00% | 98.86% | 99.66% | 99.66% | 3348 ms | → 1.03x | 27 | 45s | 9d ago | 18m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.64% | 96.99% | 96.99% | 1162 ms | ↓ 0.60x | 4 | 20m | 14d ago | 8m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 475 ms | ↓ 0.62x | 0 | — | — | 14m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.88% | 98.67% | 98.67% | 181 ms | ↓ 0.11x | 17 | 6m | 20d ago | 7m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.68% | 99.76% | 99.76% | 2507 ms | ↑ 1.39x | 5 | 8m | 9d ago | 7m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.76% | 94.89% | 94.89% | 2942 ms | ↑ 1.17x | 22 | 4m | 25d ago | 7m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.86% | 97.98% | 97.98% | 2364 ms | ↑ 1.77x | 10 | 2h 54m | 26d ago | 14m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 577 ms | ↓ 0.61x | 0 | — | — | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2794 ms | → 1.03x | 0 | — | — | 3m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 75.35% | 88.94% | 88.94% | 1236 ms | ↓ 0.73x | 2 | 2d 12h | 25d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.88% | 99.47% | 99.47% | 1941 ms | → 1.00x | 2 | 0s | 27d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.76% | 99.83% | 99.83% | 4320 ms | ↑ 1.52x | 5 | 0s | 9d ago | 13m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.96% | 97.03% | 97.03% | 3279 ms | ↑ 1.12x | 23 | 53s | 23d ago | 8m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.72% | 21.89% | 21.89% | 1161 ms | ↓ 0.69x | 6 | 0s | 10d ago | 14m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1270 ms | → 1.00x | 0 | — | — | 2m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 88.94% | 50.46% | 50.46% | 3571 ms | ↑ 1.39x | 104 | 18m | 16d ago | 14m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.72% | 97.71% | 97.71% | 3572 ms | ↑ 1.58x | 6 | 0s | 24d ago | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1219 ms | ↑ 1.32x | 0 | — | — | 3m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.88% | 95.72% | 95.72% | 819 ms | ↓ 0.73x | 2 | 0s | 11d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.68% | 49.05% | 49.05% | 946 ms | ↑ 1.12x | 41 | 5m | 22d ago | 9m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.64% | 97.17% | 97.17% | 2674 ms | ↑ 1.15x | 5 | 12m | 17d ago | 6m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 84.73% | 46.28% | 46.28% | 223 ms | ↓ 0.57x | 1 | 2d 17h | 27d ago | 9m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1046 ms | ↓ 0.77x | 0 | — | — | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.80% | 99.59% | 99.59% | 3153 ms | ↑ 1.13x | 4 | 0s | 25d ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3012 ms | → 1.00x | 0 | — | — | 2m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.88% | 96.82% | 96.82% | 1874 ms | ↓ 0.92x | 2 | 0s | 19d ago | 13m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.76% | 98.89% | 98.89% | 1351 ms | ↑ 1.16x | 4 | 2m | 12d ago | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.88% | 79.80% | 79.80% | 2109 ms | ↑ 1.10x | 2 | 0s | 18d ago | 8m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.88% | 60.82% | 60.82% | 1754 ms | ↑ 1.23x | 2 | 0s | 21d ago | 8m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1001 ms | ↓ 0.93x | 0 | — | — | 3m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 98.09% | 98.09% | 2431 ms | → 1.02x | 2 | 0s | 25d ago | 6m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4301 ms | → 1.00x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.92% | 91.89% | 91.89% | 792 ms | ↓ 0.77x | 1 | 0s | 25d ago | 9m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.88% | 97.88% | 97.88% | 705 ms | ↓ 0.68x | 2 | 0s | 26d ago | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.64% | 99.83% | 99.83% | 286 ms | ↓ 0.31x | 7 | 1m | 10d ago | 7m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 97.55% | 97.55% | 97.55% | 2780 ms | ↑ 1.08x | 12 | 10m | 9d ago | 3m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 83.85% | 62.21% | 62.21% | 2745 ms | ↑ 1.35x | 21 | 3h 48m | 11d ago | 6m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1905 ms | → 0.96x | 0 | — | — | 2m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 83.18% | 83.18% | 83.18% | 2686 ms | ↓ 0.95x | 14 | 1d 1h | 9d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.76% | 40.88% | 40.88% | 1040 ms | ↑ 1.18x | 1 | 40m | 27d ago | 9m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.92% | 71.71% | 71.71% | 735 ms | ↓ 0.73x | 1 | 0s | 25d ago | 8m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.98% | 49.74% | 49.74% | 1611 ms | ↑ 1.14x | 13 | 32m | 15d ago | 14m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.62% | 97.62% | 2755 ms | ↑ 1.44x | 1 | 0s | 25d ago | 8m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.76% | 46.85% | 46.85% | 1106 ms | ↓ 0.88x | 4 | 5m | 21d ago | 9m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.92% | 38.47% | 38.47% | 1347 ms | ↓ 0.72x | 1 | 0s | 27d ago | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1259 ms | ↓ 0.71x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.80% | 78.45% | 78.45% | 1651 ms | → 1.01x | 4 | 0s | 20d ago | 8m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 83.67% | 55.48% | 55.48% | 1042 ms | ↓ 0.71x | 14 | 5h 57m | 10d ago | 8m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.64% | 97.80% | 97.80% | 1699 ms | ↓ 0.71x | 4 | 10m | 25d ago | 9m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 97.99% | 97.80% | 97.80% | 2697 ms | ↓ 0.94x | 41 | 3m | 10d ago | 6m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.72% | 99.72% | 99.72% | 3178 ms | ↑ 1.26x | 6 | 0s | 9d ago | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.84% | 58.03% | 58.03% | 1133 ms | ↓ 0.92x | 3 | 0s | 22d ago | 9m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2972 ms | → 1.02x | 0 | — | — | 3m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.72% | 99.08% | 99.08% | 1802 ms | ↑ 1.14x | 6 | 0s | 24d ago | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 70.67% | 70.67% | 70.67% | 581 ms | → 1.01x | 1 | 1d 24h | 26d ago | 4m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.64% | 99.73% | 99.73% | 2735 ms | ↑ 1.32x | 8 | 0s | 9d ago | 7m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.55% | 97.77% | 97.77% | 2260 ms | ↑ 1.50x | 2 | 5h 35m | 25d ago | 8m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 70.24% | 9.92% | 9.92% | 1399 ms | ↓ 0.91x | 5 | 1d 4h | 8d ago | 14m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 85.57% | 26.56% | 26.56% | 429 ms | ↓ 0.32x | 2 | 1d 13h | 25d ago | 8m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.92% | 99.72% | 99.72% | 2690 ms | ↑ 1.15x | 1 | 0s | 18d ago | 17m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2061 ms | → 1.03x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.53% | 98.94% | 98.94% | 2485 ms | → 1.02x | 8 | 8m | 8d ago | 17m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.21% | 99.84% | 99.84% | 3618 ms | ↑ 1.26x | 19 | 0s | 7d ago | 18m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.70% | 97.95% | 97.95% | 3910 ms | → 0.98x | 28 | 2m | 24d ago | 18m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 799 ms | ↓ 0.79x | 1 | 0s | 22d ago | 14m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.80% | 67.32% | 67.32% | 2830 ms | ↑ 1.15x | 4 | 0s | 25d ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 86.04% | 86.08% | 86.08% | 357 ms | ↓ 0.75x | 10 | 7h 2m | 24d ago | 5m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1368 ms | ↓ 0.94x | 0 | — | — | 2m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.84% | 99.94% | 99.94% | 1106 ms | ↓ 0.84x | 3 | 0s | 18d ago | 18m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 98.98% | 99.70% | 99.70% | 3682 ms | ↑ 1.90x | 4 | 55m | 23d ago | 18m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.80% | 99.60% | 99.60% | 1676 ms | → 1.01x | 4 | 0s | 10d ago | 16m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 60.52% | 70.35% | 70.35% | 2555 ms | ↑ 1.11x | 2 | 4d 17h | 20d ago | 7m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 98.48% | 37.26% | 37.26% | 2660 ms | ↑ 1.46x | 24 | 7m | 9d ago | 8m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1353 ms | → 0.99x | 0 | — | — | 2m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 92.12% | 74.22% | 74.22% | 1759 ms | ↑ 1.36x | 2 | 22h 55m | 28d ago | 6m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1497 ms | ↓ 0.89x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1195 ms | ↑ 1.18x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.93% | 98.93% | 522 ms | ↓ 0.75x | 0 | — | — | 9m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.80% | 98.42% | 98.42% | 2051 ms | ↑ 1.38x | 4 | 0s | 25d ago | 8m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 98.27% | 95.67% | 95.67% | 477 ms | ↓ 0.23x | 14 | 21m | 26d ago | 6m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1078 ms | → 0.99x | 0 | — | — | 2m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 685 ms | ↓ 0.57x | 0 | — | — | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1469 ms | ↓ 0.82x | 0 | — | — | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 91.16% | 91.16% | 91.16% | 2364 ms | → 0.98x | 12 | 1d 6h | 8d ago | 3m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 96.69% | 96.69% | 96.69% | 1945 ms | → 0.97x | 11 | 20m | 9d ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 94.93% | 94.98% | 94.98% | 291 ms | ↓ 0.35x | 16 | 51m | 10d ago | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.64% | 98.42% | 98.42% | 258 ms | ↓ 0.60x | 5 | 12m | 24d ago | 7m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 96.69% | 96.69% | 96.69% | 1947 ms | → 0.98x | 11 | 20m | 8d ago | 3m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.52% | 98.86% | 98.86% | 860 ms | ↓ 0.66x | 11 | 0s | 16d ago | 9m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 69.49% | 9.81% | 9.81% | 2762 ms | → 1.01x | 2 | 3d 1h | 9d ago | 13m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1108 ms | → 1.01x | 0 | — | — | 2m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 85.45% | 13.28% | 13.28% | 1099 ms | ↑ 1.16x | 1 | 3d 3h | 30d ago | 9m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 851 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.96% | 99.83% | 99.83% | 668 ms | → 1.01x | 0 | — | — | 18m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.56% | 99.14% | 99.14% | 181 ms | ↓ 0.37x | 10 | 0s | 9d ago | 6m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 806 ms | ↓ 0.78x | 0 | — | — | 17m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 96.04% | 96.09% | 96.09% | 1370 ms | ↓ 0.90x | 1 | 13h 10m | 25d ago | 4m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 100.00% | 99.40% | 99.40% | 99.40% | 1021 ms | ↓ 0.90x | 4 | 0s | 9d ago | 2m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.28% | 97.60% | 97.60% | 2551 ms | ↑ 1.86x | 7 | 50m | 25d ago | 8m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.61% | 99.73% | 99.73% | 459 ms | ↓ 0.82x | 7 | 4m | 19d ago | 18m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1367 ms | → 1.02x | 0 | — | — | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.45% | 98.58% | 98.58% | 4414 ms | ↑ 1.13x | 13 | 0s | 25d ago | 19m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 54.80% | 80.80% | 80.80% | 779 ms | ↓ 0.54x | 4 | 3d 13h | 25d ago | 7m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3425 ms | ↑ 1.68x | 0 | — | — | 17m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1378 ms | → 1.01x | 0 | — | — | 3m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 69.49% | 23.13% | 23.13% | 2344 ms | ↑ 1.07x | 2 | 3d 1h | 7d ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 98.07% | 97.03% | 97.03% | 1965 ms | ↑ 1.25x | 4 | 3h 35m | 8d ago | 6m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.57% | 99.18% | 99.18% | 1433 ms | ↑ 1.07x | 9 | 1m | 10d ago | 16m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 69.52% | 34.99% | 34.99% | 724 ms | → 1.03x | 1 | 6d 1h | 30d ago | 18m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.12% | 98.05% | 98.05% | 4436 ms | ↑ 1.78x | 20 | 30s | 25d ago | 8m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.92% | 99.95% | 99.95% | 1086 ms | ↓ 0.90x | 1 | 0s | 29d ago | 17m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.84% | 99.90% | 99.90% | 332 ms | ↓ 0.27x | 3 | 0s | 18d ago | 17m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.92% | 99.81% | 99.81% | 1605 ms | → 1.04x | 1 | 0s | 25d ago | 8m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.80% | 99.85% | 99.85% | 2227 ms | ↑ 1.12x | 3 | 3m | 24d ago | 8m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.98% | 99.84% | 99.84% | 2364 ms | ↑ 1.37x | 25 | 0s | 9d ago | 17m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.30% | 99.35% | 99.35% | 1807 ms | ↑ 1.37x | 3 | 37m | 25d ago | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.88% | 88.15% | 88.15% | 1205 ms | → 1.04x | 2 | 0s | 19d ago | 8m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.92% | 99.58% | 99.58% | 1236 ms | → 0.99x | 1 | 0s | 28d ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.64% | 95.50% | 95.50% | 3121 ms | ↑ 1.13x | 7 | 40m | 17d ago | 8m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 85.41% | 12.17% | 12.17% | 2685 ms | ↑ 1.92x | 2 | 1d 14h | 24d ago | 9m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 396 ms | ↓ 0.85x | 0 | — | — | 2m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.76% | 99.74% | 99.74% | 1948 ms | ↓ 0.95x | 5 | 0s | 18d ago | 17m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.61% | 87.97% | 87.97% | 1158 ms | ↓ 0.83x | 8 | 1m | 10d ago | 17m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 84.94% | 11.94% | 11.94% | 1704 ms | ↓ 0.80x | 12 | 6h 18m | 25d ago | 9m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.80% | 98.71% | 98.71% | 2618 ms | ↑ 1.60x | 4 | 0s | 25d ago | 8m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 69.25% | 77.89% | 77.89% | 2186 ms | → 0.95x | 3 | 2d 1h | 10d ago | 18m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.84% | 99.91% | 99.91% | 854 ms | ↓ 0.82x | 3 | 0s | 10d ago | 17m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.88% | 99.91% | 99.91% | 1742 ms | ↑ 1.07x | 2 | 0s | 23d ago | 17m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.64% | 99.64% | 99.64% | 840 ms | ↓ 0.76x | 8 | 0s | 11d ago | 16m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 69.38% | 26.46% | 26.46% | 654 ms | ↓ 0.92x | 4 | 1d 12h | 10d ago | 8m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.55% | 99.55% | 1652 ms | → 0.95x | 0 | — | — | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1976 ms | ↓ 0.81x | 0 | — | — | 2m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.84% | 98.93% | 98.93% | 1734 ms | ↓ 0.91x | 3 | 0s | 25d ago | 17m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.84% | 97.58% | 97.58% | 1160 ms | ↓ 0.82x | 3 | 0s | 26d ago | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.80% | 97.15% | 97.15% | 2761 ms | ↑ 1.58x | 4 | 0s | 25d ago | 6m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 69.44% | 9.88% | 9.88% | 1418 ms | → 1.01x | 4 | 1d 12h | 11d ago | 17m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 64.49% | 64.49% | 1093 ms | ↑ 1.28x | 2 | 0s | 25d ago | 8m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.76% | 76.87% | 76.87% | 1841 ms | → 1.05x | 5 | 0s | 18d ago | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.68% | 99.77% | 99.77% | 1458 ms | ↓ 0.83x | 6 | 2m | 25d ago | 17m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.88% | 99.68% | 99.68% | 2291 ms | ↑ 1.29x | 1 | 10m | 26d ago | 17m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2714 ms | → 1.00x | 0 | — | — | 2m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 74.85% | 90.66% | 90.66% | 1606 ms | ↓ 0.72x | 8 | 1d | 12d ago | 8m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.92% | 99.86% | 99.86% | 1047 ms | ↓ 0.79x | 1 | 0s | 25d ago | 9m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 90.87% | 83.74% | 83.74% | 1205 ms | ↓ 0.75x | 156 | 5m | 9d ago | 17m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 86.62% | 83.80% | 83.80% | 366 ms | ↓ 0.14x | 151 | 13m | 16d ago | 16m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 90.21% | 87.92% | 87.92% | 408 ms | ↓ 0.13x | 158 | 6m | 19d ago | 7m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.16% | 99.16% | 2222 ms | ↑ 1.23x | 1 | 0s | 25d ago | 8m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 62.29% | 62.29% | 339 ms | ↓ 0.18x | 1 | 0s | 25d ago | 9m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.88% | 96.17% | 96.17% | 1467 ms | ↑ 1.47x | 2 | 0s | 25d ago | 9m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.88% | 99.73% | 99.73% | 2573 ms | → 1.04x | 2 | 0s | 11d ago | 17m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1307 ms | → 1.01x | 0 | — | — | 3m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 52.23% | 52.23% | 612 ms | ↓ 0.66x | 1 | 0s | 25d ago | 9m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.16% | 98.16% | 1354 ms | ↑ 1.06x | 1 | 0s | 25d ago | 8m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.72% | 28.16% | 28.16% | 2081 ms | → 1.03x | 6 | 0s | 12d ago | 8m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.76% | 99.15% | 99.15% | 3454 ms | ↑ 1.47x | 2 | 33m | 22d ago | 13m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2587 ms | ↑ 1.06x | 0 | — | — | 17m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 1946 ms | ↑ 1.15x | 2 | 0s | 25d ago | 8m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.80% | 45.07% | 45.07% | 4102 ms | ↑ 1.27x | 4 | 0s | 24d ago | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.80% | 99.08% | 99.08% | 2162 ms | ↑ 1.16x | 4 | 0s | 11d ago | 8m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.75% | 97.75% | 97.75% | 1701 ms | ↑ 1.46x | 1 | 11h 52m | 13d ago | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.64% | 75.71% | 75.71% | 1605 ms | ↑ 1.96x | 3 | 33m | 13d ago | 8m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.44x | 0 | — | — | 17m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.45% | 99.90% | 99.90% | 1744 ms | → 0.97x | 10 | 3m | 10d ago | 17m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 779 ms | → 0.99x | 0 | — | — | 2m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.84% | 99.94% | 99.94% | 2227 ms | ↑ 1.18x | 2 | 1m | 25d ago | 13m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.88% | 99.49% | 99.49% | 2976 ms | ↑ 1.31x | 2 | 0s | 24d ago | 17m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.40% | 75.91% | 75.91% | 1873 ms | ↓ 0.90x | 14 | 0s | 24d ago | 8m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.63% | 83.63% | 2057 ms | ↑ 1.73x | 1 | 0s | 25d ago | 8m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.80% | 95.63% | 95.63% | 1076 ms | ↑ 1.23x | 4 | 0s | 25d ago | 9m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.88% | 99.97% | 99.97% | 932 ms | ↓ 0.84x | 2 | 0s | 25d ago | 16m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.40% | 90.53% | 90.53% | 2614 ms | ↓ 0.83x | 14 | 0s | 14d ago | 8m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.76% | 98.00% | 98.00% | 1212 ms | ↓ 0.87x | 5 | 0s | 25d ago | 16m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 69.38% | 11.80% | 11.80% | 598 ms | ↓ 0.40x | 1 | 6d 1h | 30d ago | 9m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 551 ms | ↓ 0.60x | 0 | — | — | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.84% | 99.93% | 99.93% | 807 ms | → 0.99x | 3 | 0s | 25d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 69.34% | 10.34% | 10.34% | 1067 ms | ↓ 0.84x | 2 | 3d 1h | 11d ago | 9m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.88% | 55.54% | 55.54% | 2050 ms | ↑ 1.14x | 2 | 0s | 25d ago | 9m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.84% | 99.76% | 99.76% | 2692 ms | ↑ 1.18x | 3 | 0s | 18d ago | 17m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 61.95% | 61.95% | 844 ms | ↓ 0.94x | 0 | — | — | 18m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.92% | 99.00% | 99.00% | 982 ms | ↓ 0.75x | 1 | 0s | 25d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 69.61% | 9.87% | 9.87% | 904 ms | ↓ 0.94x | 1 | 6d 1h | 30d ago | 16m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 950 ms | → 0.98x | 0 | — | — | 3m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.94% | 98.94% | 98.94% | 1201 ms | ↓ 0.72x | 1 | 3h 45m | 18d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.74% | 99.87% | 99.87% | 2403 ms | ↓ 0.95x | 1 | 0s | 10d ago | 3m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1161 ms | ↓ 0.88x | 0 | — | — | 3m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2014 ms | → 0.99x | 0 | — | — | 3m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 85.38% | 12.86% | 12.86% | 1136 ms | ↓ 0.59x | 3 | 1d 1h | 8d ago | 9m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 92.60% | 92.70% | 92.70% | 3769 ms | ↓ 0.85x | 67 | 19m | 24d ago | 17m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.35% | 99.40% | 99.40% | 1828 ms | ↓ 0.84x | 11 | 3m | 7d ago | 17m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 2055 ms | ↑ 1.08x | 1 | 0s | 25d ago | 8m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.52% | 98.51% | 98.51% | 2464 ms | ↑ 1.57x | 10 | 59s | 10d ago | 6m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 97.89% | 97.89% | 97.89% | 1594 ms | ↓ 0.89x | 10 | 8m | 9d ago | 3m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.68% | 98.96% | 98.96% | 1080 ms | → 0.97x | 6 | 2m | 19d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.70% | 99.70% | 99.70% | 2171 ms | → 1.00x | 1 | 20m | 8d ago | 2m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 61.64% | 24.25% | 24.25% | 1886 ms | ↓ 0.91x | 2 | 4d 10h | 21d ago | 17m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.92% | 99.54% | 99.54% | 1302 ms | → 1.03x | 1 | 0s | 28d ago | 18m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 98.56% | 98.56% | 98.56% | 2591 ms | → 1.04x | 12 | 18m | 9d ago | 3m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.40% | 99.40% | 1188 ms | → 1.03x | 0 | — | — | 16m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 532 ms | → 1.02x | 1 | 0s | 29d ago | 19m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 77.90% | 57.62% | 57.62% | 3077 ms | → 1.04x | 156 | 32m | 7d ago | 17m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.17% | 91.27% | 91.27% | 1336 ms | ↓ 0.74x | 11 | 15m | 13d ago | 16m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.96% | 97.76% | 97.76% | 1620 ms | ↓ 0.91x | 0 | — | — | 5m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.62% | 96.35% | 96.35% | 2876 ms | ↑ 1.09x | 25 | 6m | 13d ago | 17m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.67% | 99.71% | 99.71% | 829 ms | ↓ 0.74x | 2 | 25m | 25d ago | 5m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.31% | 85.31% | 1434 ms | ↑ 1.21x | 1 | 0s | 25d ago | 8m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.64% | 99.69% | 99.69% | 1474 ms | ↑ 1.16x | 8 | 0s | 10d ago | 5m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1438 ms | ↑ 1.11x | 0 | — | — | 17m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.92% | 99.44% | 99.44% | 1042 ms | ↑ 1.06x | 1 | 0s | 29d ago | 18m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 447 ms | ↓ 0.57x | 0 | — | — | 2m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.88% | 99.71% | 99.71% | 916 ms | → 1.01x | 1 | 10m | 30d ago | 18m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.56% | 65.82% | 65.82% | 1182 ms | ↑ 1.15x | 9 | 1m | 10d ago | 8m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.84% | 99.87% | 99.87% | 2854 ms | ↑ 1.56x | 3 | 0s | 17d ago | 14m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.84% | 99.81% | 99.81% | 742 ms | ↓ 0.95x | 3 | 0s | 27d ago | 15m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.17% | 82.80% | 82.80% | 2600 ms | ↓ 0.91x | 19 | 32s | 9d ago | 13m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.62% | 98.62% | 1656 ms | ↓ 0.87x | 1 | 0s | 25d ago | 8m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.84% | 96.96% | 96.96% | 1473 ms | ↑ 1.16x | 3 | 0s | 18d ago | 6m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.53% | 91.33% | 91.33% | 4028 ms | ↑ 1.21x | 10 | 1m | 25d ago | 19m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.83% | 99.83% | 99.83% | 850 ms | → 1.02x | 1 | 0s | 8d ago | 2m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 284 ms | ↓ 0.50x | 0 | — | — | 2m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 95.16% | 95.21% | 95.21% | 795 ms | ↓ 0.46x | 4 | 4h 8m | 13d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.80% | 98.61% | 98.61% | 554 ms | ↓ 0.94x | 2 | 10m | 26d ago | 8m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2371 ms | → 1.01x | 0 | — | — | 2m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.04% | 97.02% | 97.02% | 3083 ms | ↑ 1.24x | 21 | 1m | 13d ago | 6m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1138 ms | → 1.04x | 0 | — | — | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 69.50% | 21.47% | 21.47% | 846 ms | → 1.02x | 2 | 3d 1h | 14d ago | 15m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.76% | 99.76% | 99.76% | 1901 ms | ↓ 0.91x | 4 | 3m | 25d ago | 8m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.86% | 97.86% | 1579 ms | ↑ 1.24x | 2 | 0s | 25d ago | 8m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.00% | 94.11% | 94.11% | 2766 ms | ↓ 0.64x | 18 | 4m | 9d ago | 7m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1354 ms | ↓ 0.89x | 1 | 0s | 27d ago | 16m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.88% | 85.98% | 85.98% | 2527 ms | ↑ 1.28x | 2 | 0s | 18d ago | 8m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.45% | 96.19% | 96.19% | 2000 ms | ↑ 1.25x | 5 | 15h 59m | 16d ago | 9m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.92% | 99.85% | 99.85% | 1778 ms | ↑ 1.10x | 1 | 0s | 22d ago | 15m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 758 ms | ↓ 0.64x | 0 | — | — | 3m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.88% | 99.84% | 99.84% | 1954 ms | → 1.02x | 1 | 20m | 20d ago | 16m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.88% | 99.93% | 99.93% | 980 ms | ↑ 1.55x | 2 | 0s | 11d ago | 17m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 85.38% | 12.00% | 12.00% | 2050 ms | → 1.03x | 3 | 1d 1h | 20d ago | 9m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 69.20% | 9.72% | 9.72% | 1701 ms | ↑ 1.07x | 6 | 1d | 10d ago | 9m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.80% | 99.88% | 99.88% | 3337 ms | ↑ 1.61x | 4 | 0s | 17d ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3119 ms | → 1.00x | 0 | — | — | 2m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 85.20% | 21.44% | 21.44% | 1764 ms | ↑ 1.08x | 7 | 10h 47m | 9d ago | 8m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.76% | 99.77% | 99.77% | 3463 ms | ↑ 1.84x | 3 | 7m | 25d ago | 7m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.33% | 99.88% | 99.88% | 1399 ms | → 1.05x | 3 | 1h 27m | 16d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.92% | 99.92% | 99.92% | 3064 ms | ↑ 1.61x | 1 | 0s | 27d ago | 15m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.56% | 99.73% | 99.73% | 2666 ms | ↑ 1.59x | 4 | 15m | 27d ago | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.88% | 97.76% | 97.76% | 1016 ms | ↓ 0.91x | 1 | 10m | 26d ago | 6m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.82% | 99.82% | 2494 ms | ↑ 2.15x | 1 | 0s | 28d ago | 9m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.76% | 99.03% | 99.03% | 1458 ms | ↑ 1.05x | 5 | 0s | 24d ago | 17m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 450 ms | ↓ 0.58x | 0 | — | — | 16m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.80% | 97.32% | 91.66% | 91.66% | 1004 ms | ↓ 0.88x | 26 | 25m | 2d ago | 17m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.80% | 99.59% | 99.63% | 99.63% | 445 ms | ↓ 0.86x | 8 | 0s | 5d ago | 17m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.80% | 99.17% | 99.71% | 99.71% | 3089 ms | ↑ 1.29x | 5 | 1h | 7d ago | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.80% | 98.98% | 99.45% | 99.45% | 3405 ms | ↑ 1.07x | 24 | 50s | 15h ago | 18m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 99.80% | 15.80% | 15.80% | 2246 ms | ↑ 1.09x | 4 | 0s | 6d ago | 19m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.80% | 69.42% | 9.87% | 9.87% | 2310 ms | → 1.04x | 4 | 1d 12h | 2d ago | 17m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.80% | 99.40% | 97.62% | 97.62% | 3705 ms | ↑ 1.09x | 12 | 3m | 23h ago | 13m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.80% | 88.60% | 76.90% | 76.90% | 2648 ms | ↑ 1.14x | 168 | 9m | 4d ago | 13m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.80% | 99.48% | 99.72% | 99.72% | 2976 ms | ↑ 1.07x | 9 | 3m | 4d ago | 14m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.80% | 98.69% | 99.62% | 99.62% | 2779 ms | ↑ 1.53x | 4 | 1h 8m | 5d ago | 13m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.80% | 98.85% | 99.41% | 99.41% | 3696 ms | ↑ 1.68x | 17 | 13m | 23h ago | 13m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.84% | 99.84% | 99.84% | 1621 ms | ↓ 0.89x | 3 | 0s | 5d ago | 13m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 83.63% | 11.80% | 11.80% | 935 ms | ↓ 0.60x | 38 | 2h 1m | 7d ago | 14m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.80% | 96.21% | 96.26% | 96.26% | 2335 ms | ↓ 0.77x | 3 | 4h 13m | 2d ago | 4m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 69.38% | 41.83% | 41.83% | 1594 ms | ↓ 0.81x | 4 | 1d 12h | 1d ago | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.76% | 97.90% | 97.90% | 916 ms | ↓ 0.75x | 5 | 0s | 5d ago | 6m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.80% | 99.80% | 99.87% | 99.87% | 590 ms | ↓ 0.63x | 3 | 6m | 12h ago | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.68% | 78.18% | 78.18% | 1659 ms | → 0.98x | 6 | 2m | 2d ago | 8m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.80% | 99.56% | 99.56% | 99.56% | 163 ms | ↓ 0.12x | 4 | 15m | 3d ago | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.80% | 98.67% | 99.31% | 99.31% | 4041 ms | ↑ 1.85x | 5 | 1h 48m | 22h ago | 7m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.80% | 99.73% | 99.73% | 99.73% | 471 ms | → 0.99x | 2 | 0s | 3d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.80% | 97.61% | 97.61% | 97.61% | 1482 ms | → 1.03x | 2 | 1h 20m | 4d ago | 3m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.80% | 99.52% | 97.07% | 97.07% | 4012 ms | ↑ 1.79x | 9 | 2m | 22h ago | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.80% | 54.39% | 54.39% | 2059 ms | → 1.02x | 4 | 0s | 3d ago | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.80% | 99.84% | 87.92% | 87.92% | 2174 ms | ↓ 0.90x | 3 | 0s | 8h ago | 8m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.80% | 99.76% | 99.51% | 99.51% | 1010 ms | ↓ 0.75x | 5 | 0s | 2d ago | 8m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.80% | 99.86% | 99.86% | 99.86% | 721 ms | ↓ 0.90x | 1 | 0s | 7d ago | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.88% | 99.92% | 99.92% | 813 ms | ↓ 0.73x | 2 | 0s | 7d ago | 5m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.80% | 99.28% | 94.67% | 94.67% | 997 ms | ↓ 0.63x | 12 | 4m | 21h ago | 6m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.80% | 99.64% | 97.78% | 97.78% | 2414 ms | ↑ 1.26x | 7 | 1m | 6d ago | 7m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.80% | 95.68% | 62.30% | 62.30% | 805 ms | → 1.04x | 15 | 1h 56m | 5d ago | 8m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.80% | 99.85% | 99.85% | 99.85% | 954 ms | → 0.98x | 1 | 0s | 3d ago | 2m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.80% | 99.68% | 98.10% | 98.10% | 495 ms | ↓ 0.46x | 6 | 2m | 4d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.80% | 95.36% | 95.40% | 95.40% | 2083 ms | ↑ 1.10x | 7 | 2h 25m | 1d ago | 5m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.80% | 99.16% | 96.39% | 96.39% | 4120 ms | ↑ 1.36x | 10 | 17m | 7d ago | 9m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.80% | 98.38% | 98.53% | 98.53% | 1899 ms | → 0.97x | 8 | 5m | 15h ago | 3m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.80% | 98.40% | 98.40% | 739 ms | ↓ 0.55x | 4 | 0s | 2d ago | 8m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.94% | 99.94% | 99.94% | 927 ms | ↓ 0.91x | 1 | 0s | 6d ago | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.80% | 99.68% | 95.27% | 95.27% | 1346 ms | ↓ 0.85x | 2 | 51m | 5d ago | 6m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.80% | 54.62% | 28.27% | 28.27% | 1517 ms | ↓ 0.60x | 21 | 13h 11m | 22h ago | 7m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.59% | 44.66% | 85.95% | 85.95% | 1715 ms | ↓ 0.86x | 3 | 4d 16h | 6d ago | 17m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.59% | 95.44% | 98.76% | 98.76% | 3111 ms | → 0.97x | 88 | 5m | 1d ago | 18m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.59% | 93.84% | 96.31% | 96.31% | 1333 ms | ↓ 0.82x | 25 | 53m | 5d ago | 14m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.59% | 99.40% | 99.79% | 99.79% | 2307 ms | ↑ 1.07x | 13 | 13s | 4h ago | 13m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.59% | 89.96% | 82.09% | 82.09% | 798 ms | ↓ 0.24x | 154 | 8m | 5d ago | 7m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.59% | 99.46% | 99.46% | 99.46% | 896 ms | → 0.97x | 4 | 0s | 3d ago | 3m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.59% | 99.48% | 99.59% | 99.59% | 1075 ms | ↑ 1.06x | 8 | 10m | 7d ago | 6m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.59% | 99.40% | 99.40% | 99.40% | 2952 ms | → 1.01x | 3 | 7m | 1d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.59% | 95.85% | 95.90% | 95.90% | 1902 ms | ↓ 0.84x | 7 | 1h 50m | 2d ago | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.48% | 99.28% | 99.28% | 2303 ms | ↑ 1.14x | 10 | 2m | 4d ago | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.59% | 99.52% | 87.23% | 87.23% | 688 ms | ↓ 0.72x | 7 | 12m | 6d ago | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.76% | 55.51% | 55.51% | 1520 ms | ↓ 0.82x | 5 | 0s | 4d ago | 9m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.59% | 99.73% | 99.73% | 99.73% | 1586 ms | ↓ 0.94x | 2 | 0s | 20h ago | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.59% | 99.60% | 99.69% | 99.69% | 4207 ms | ↑ 1.74x | 9 | 0s | 22h ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.39% | 99.59% | 99.59% | 99.59% | 1423 ms | → 0.99x | 2 | 10m | 17h ago | 2m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.39% | 99.56% | 87.06% | 87.06% | 2300 ms | ↑ 1.72x | 8 | 5m | 5d ago | 8m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.39% | 99.63% | 99.67% | 99.67% | 1341 ms | ↓ 0.89x | 5 | 8m | 5d ago | 9m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.39% | 99.55% | 99.55% | 99.55% | 1103 ms | → 1.01x | 3 | 0s | 4d ago | 3m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.19% | 76.12% | 78.47% | 78.47% | 128 ms | ↓ 0.63x | 9 | 16h 6m | 1d ago | 18m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.19% | 98.98% | 99.25% | 99.25% | 859 ms | ↓ 0.64x | 25 | 0s | 2d ago | 18m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.18% | 98.29% | 98.96% | 98.96% | 2542 ms | ↑ 1.38x | 12 | 26m | 2d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.18% | 99.80% | 99.85% | 99.85% | 1375 ms | ↑ 1.08x | 2 | 20m | 4d ago | 5m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.18% | 99.40% | 99.40% | 99.40% | 1883 ms | → 0.98x | 4 | 0s | 18h ago | 2m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.18% | 99.40% | 99.40% | 99.40% | 1743 ms | → 0.98x | 2 | 19m | 5h ago | 2m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.18% | 98.95% | 98.95% | 98.95% | 1456 ms | → 0.99x | 7 | 0s | 22h ago | 2m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.18% | 98.56% | 89.42% | 89.42% | 1812 ms | → 1.05x | 28 | 3m | 3d ago | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (61)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.98% | 99.44% | 67.39% | 67.39% | 1183 ms | ↓ 0.91x | 10 | 6m | 2d ago | 8m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 98.98% | 99.25% | 99.25% | 99.25% | 4509 ms | ↓ 0.95x | 8 | 0s | 14h ago | 2m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.98% | 99.64% | 98.73% | 98.73% | 1422 ms | ↑ 1.81x | 8 | 0s | 2d ago | 8m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 98.98% | 97.74% | 97.74% | 97.74% | 2393 ms | → 1.00x | 10 | 10m | 22h ago | 2m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.77% | 97.12% | 97.12% | 97.12% | 2668 ms | ↓ 0.86x | 6 | 2h 14m | 5d ago | 3m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.77% | 89.09% | 60.12% | 60.12% | 4638 ms | → 1.00x | 180 | 6m | 17h ago | 8m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.36% | 69.06% | 9.88% | 9.88% | 2832 ms | ↑ 1.58x | 6 | 1d | 2d ago | 9m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.17% | 90.61% | 95.60% | 95.60% | 3469 ms | ↓ 0.93x | 118 | 21m | 24h ago | 18m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.17% | 98.98% | 97.65% | 97.65% | 3913 ms | ↑ 1.06x | 25 | 0s | 3h ago | 17m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.17% | 80.17% | 77.49% | 77.49% | 3534 ms | ↓ 0.91x | 230 | 13m | 3h ago | 19m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.16% | 90.33% | 84.76% | 84.76% | 4502 ms | → 1.01x | 178 | 4m | 2d ago | 9m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.96% | 97.72% | 97.96% | 97.96% | 4651 ms | ↑ 1.41x | 49 | 3m | 14h ago | 19m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 97.96% | 99.52% | 98.34% | 98.34% | 2845 ms | ↑ 1.48x | 3 | 54m | 4d ago | 8m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 97.96% | 99.52% | 98.42% | 98.42% | 671 ms | ↓ 0.55x | 3 | 54m | 4d ago | 7m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.76% | 89.64% | 71.73% | 71.73% | 4477 ms | → 1.01x | 200 | 4m | 14h ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.75% | 98.51% | 88.41% | 88.41% | 4216 ms | ↑ 2.10x | 29 | 6m | 13h ago | 7m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.75% | 83.08% | 80.09% | 80.09% | 4785 ms | ↑ 1.14x | 157 | 21m | 18h ago | 6m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.56% | 99.21% | 98.58% | 98.58% | 3963 ms | ↑ 1.33x | 8 | 30m | 3d ago | 15m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.55% | 98.20% | 98.20% | 98.20% | 1832 ms | → 1.01x | 1 | 3h 38m | 15h ago | 3m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.55% | 90.33% | 82.20% | 82.20% | 4727 ms | → 1.04x | 177 | 4m | 17h ago | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.35% | 97.60% | 98.64% | 98.64% | 3674 ms | → 1.00x | 51 | 4m | 2h ago | 16m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.35% | 89.72% | 84.25% | 84.25% | 4559 ms | → 1.04x | 197 | 4m | 23h ago | 15m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.35% | 66.79% | 9.43% | 9.43% | 4399 ms | ↑ 1.26x | 60 | 2h 32m | 6h ago | 13m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.94% | 95.51% | 98.67% | 98.67% | 4418 ms | ↑ 1.31x | 67 | 14m | 5h ago | 13m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.93% | 94.26% | 94.31% | 94.31% | 1674 ms | ↑ 1.24x | 5 | 7h 39m | 1d ago | 5m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.54% | 87.12% | 83.68% | 83.68% | 4449 ms | ↑ 1.06x | 167 | 15m | 20h ago | 19m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.11% | 96.33% | 96.33% | 96.33% | 1612 ms | ↓ 0.91x | 21 | 6m | 9h ago | 2m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.91% | 86.02% | 78.33% | 78.33% | 4716 ms | → 1.04x | 259 | 7m | 5h ago | 7m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 95.72% | 98.10% | 98.97% | 98.97% | 3756 ms | ↑ 1.28x | 14 | 45m | 2d ago | 15m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 95.72% | 98.34% | 96.96% | 96.96% | 3721 ms | ↑ 1.28x | 13 | 45m | 2d ago | 15m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 95.72% | 98.30% | 54.93% | 54.93% | 4008 ms | ↑ 1.29x | 14 | 41m | 2d ago | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 95.72% | 98.34% | 99.15% | 99.15% | 3756 ms | ↑ 1.83x | 12 | 50m | 2d ago | 15m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 95.52% | 98.34% | 40.18% | 40.18% | 1179 ms | ↓ 0.87x | 13 | 45m | 2d ago | 15m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 95.51% | 27.02% | 8.02% | 8.02% | 2704 ms | ↑ 1.15x | 7 | 2d 21h | 2d ago | 13m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.50% | 91.54% | 68.12% | 68.12% | 1161 ms | ↓ 0.71x | 23 | 1h 50m | 4d ago | 8m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.68% | 87.40% | 78.60% | 78.60% | 4814 ms | → 1.05x | 223 | 6m | 16h ago | 8m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.48% | 98.83% | 94.66% | 94.66% | 1715 ms | ↑ 1.09x | 2 | 4h 19m | 14h ago | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 93.89% | 67.42% | 9.54% | 9.54% | 2104 ms | ↑ 1.13x | 50 | 2h 56m | 7h ago | 15m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 93.25% | 76.60% | 78.63% | 78.63% | 1719 ms | ↑ 1.09x | 2 | 4d 1h | 9d ago | 5m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 92.84% | 97.81% | 97.81% | 97.81% | 1079 ms | ↓ 0.54x | 2 | 5h 34m | 15h ago | 3m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.64% | 98.47% | 96.14% | 96.14% | 1198 ms | ↓ 0.92x | 2 | 5h 55m | 5d ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.41% | 83.05% | 46.21% | 46.21% | 1974 ms | → 1.02x | 25 | 3h 31m | 1d ago | 6m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 90.82% | 43.38% | 41.52% | 41.52% | 1825 ms | → 1.01x | 4 | 1d 16h | 16h ago | 14m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.18% | 65.15% | 10.60% | 10.60% | 4442 ms | → 1.03x | 234 | 34m | 7h ago | 9m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.16% | 61.53% | 39.28% | 39.28% | 3910 ms | ↑ 1.15x | 164 | 58m | 1h ago | 6m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 88.75% | 20.29% | 20.29% | 20.29% | 3404 ms | → 1.00x | 2 | 10d 7h | 19d ago | 9m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.53% | 90.83% | 90.83% | 90.83% | 644 ms | → 0.98x | 4 | 5h 13m | 1d ago | 3m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 87.37% | 63.41% | 9.01% | 9.01% | 806 ms | ↓ 0.79x | 80 | 2h 9m | 5h ago | 17m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 86.71% | 87.75% | 91.60% | 91.60% | 3008 ms | ↑ 1.49x | 13 | 7h 46m | 3d ago | 7m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 86.15% | 97.25% | 99.27% | 99.27% | 1517 ms | → 0.98x | 7 | 3h 4m | 1d ago | 17m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 84.87% | 89.95% | 89.95% | 89.95% | 1065 ms | ↓ 0.94x | 1 | 1d 1h | 6d ago | 3m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 83.64% | 96.36% | 97.22% | 97.22% | 961 ms | ↓ 0.76x | 10 | 2h 46m | 2d ago | 9m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 80.98% | 81.53% | 35.38% | 35.38% | 648 ms | ↓ 0.55x | 10 | 10h 31m | 5d ago | 7m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 79.96% | 83.53% | 83.53% | 83.53% | 1438 ms | → 1.00x | 3 | 11h 14m | 2d ago | 2m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 78.32% | 18.32% | 21.74% | 21.74% | 1408 ms | → 1.00x | 2 | 12d 5h | 14h ago | 6m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 72.86% | 59.44% | 8.38% | 8.38% | 3690 ms | ↓ 0.86x | 201 | 49m | 1h ago | 14m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.35% | 59.61% | 61.91% | 61.91% | 4848 ms | → 1.04x | 464 | 17m | 54m ago | 14m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 49.49% | 40.66% | 10.42% | 10.42% | 4097 ms | → 1.04x | 442 | 37m | 1h ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 40.70% | 83.00% | 83.06% | 83.06% | 2604 ms | ↑ 1.47x | 13 | 8h 3m | 6d ago | 3m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 30.96% | 6.00% | 0.85% | 0.85% | 1619 ms | → 1.00x | 2 | 13d 22h | 2d ago | 16m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 25.77% | 45.33% | 45.33% | 45.33% | 1200 ms | → 0.96x | 1 | 5d 5h | 6d ago | 3m ago |

</details>

<details open>
<summary><strong>🔴 Down (197)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.77% | 98.95% | 98.95% | 98.95% | 3319 ms | → 1.01x | 5 | 9m | 2m ago | 2m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 92.23% | 96.67% | 90.54% | 90.54% | 3820 ms | ↑ 1.14x | 28 | 34m | 13h ago | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 88.37% | 90.04% | 65.30% | 65.30% | 4434 ms | → 1.04x | 165 | 8m | 3h ago | 14m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 88.34% | 91.42% | 91.42% | 91.42% | 2023 ms | → 0.98x | 1 | 19h 5m | 19h ago | 3m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 80.37% | 75.05% | 28.16% | 28.16% | 1872 ms | ↓ 0.81x | 25 | 6h 11m | 1d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 76.48% | 84.38% | 84.38% | 84.38% | 2245 ms | → 1.01x | 1 | 1d 15h | 2d ago | 2m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 76.28% | 94.63% | 75.27% | 75.27% | 2639 ms | ↑ 1.11x | 6 | 7h 15m | 2d ago | 8m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 72.71% | 46.43% | 88.69% | 88.69% | 520 ms | ↓ 0.42x | 137 | 2h 48m | 2d ago | 18m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 72.71% | 94.33% | 90.26% | 90.26% | 607 ms | ↓ 0.63x | 4 | 11h 55m | 2d ago | 17m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 72.60% | 94.50% | 90.51% | 90.51% | 1014 ms | ↓ 0.55x | 3 | 15h 14m | 2d ago | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 72.19% | 94.34% | 94.96% | 94.96% | 1738 ms | ↓ 0.91x | 6 | 7h 40m | 2d ago | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 71.78% | 86.27% | 86.32% | 86.32% | 3189 ms | → 0.96x | 44 | 1h 23m | 2d ago | 3m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 71.57% | 48.96% | 13.23% | 13.23% | 4633 ms | ↑ 1.07x | 305 | 44m | 8m ago | 8m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 61.35% | 92.24% | 92.48% | 92.48% | 466 ms | ↑ 1.11x | 5 | 12h 47m | 3d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 55.42% | 72.65% | 64.99% | 64.99% | 1772 ms | ↑ 1.09x | 6 | 1d 2h | 3d ago | 8m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 54.60% | 90.89% | 95.26% | 95.26% | 3580 ms | ↑ 1.64x | 7 | 10h 47m | 3d ago | 7m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 44.58% | 89.02% | 90.19% | 90.19% | 1829 ms | ↑ 1.22x | 3 | 1d 7h | 4d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 31.08% | 79.78% | 79.83% | 79.83% | 2714 ms | ↑ 1.31x | 14 | 8h 58m | 5d ago | 3m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 30.27% | 78.51% | 84.28% | 84.28% | 1541 ms | → 1.02x | 17 | 10h 24m | 5d ago | 6m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 29.74% | 86.19% | 96.52% | 96.52% | 1777 ms | ↓ 0.93x | 4 | 1d 6h | 5d ago | 15m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 20.45% | 79.16% | 85.26% | 85.26% | 2231 ms | ↓ 0.42x | 72 | 2h 6m | 6d ago | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 12.68% | 60.92% | 45.23% | 45.23% | 4176 ms | ↑ 1.18x | 58 | 4h 34m | 6d ago | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 10.84% | 28.11% | 28.11% | 28.11% | 541 ms | → 1.04x | 2 | 3d 16h | 6d ago | 4m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 10.43% | 72.61% | 72.61% | 72.61% | 752 ms | ↓ 0.41x | 1 | 6d 7h | 6d ago | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.38% | 8.70% | 8.70% | 8.70% | 3161 ms | ↓ 0.91x | 59 | 3h 34m | 4h ago | 2m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 6.13% | 81.42% | 84.62% | 84.62% | 703 ms | ↓ 0.82x | 3 | 2d 5h | 7d ago | 6m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 5.73% | 65.94% | 30.06% | 30.06% | 4045 ms | ↑ 2.60x | 23 | 10h 14m | 7d ago | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.68% | 5.22% | 28.47% | 28.47% | 4557 ms | ↑ 1.70x | 20 | 1d 10h | 3d ago | 8m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.22% | 28.70% | 65.52% | 65.52% | 3900 ms | → 1.01x | 145 | 3h 44m | 3h ago | 19m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.82% | 69.52% | 75.07% | 75.07% | 835 ms | ↓ 0.74x | 4 | 2d 16h | 2d ago | 6m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 30.26% | 89.37% | 89.37% | — | — | 5 | 4d 19h | 24d ago | 17m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 74.00% | 74.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 28.78% | 79.56% | 79.56% | — | — | 26 | 22h 13m | 24d ago | 9m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 54.62% | 79.62% | 79.62% | — | — | 2 | 7d 24h | 16d ago | 7m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.15% | 6.15% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 13.27% | 13.52% | 13.52% | — | — | 11 | 2d 12h | 24d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.66% | 3.66% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 30.39% | 89.63% | 89.63% | — | — | 1 | 23d 22h | 24d ago | 14m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.34% | 39.34% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 77.73% | 79.84% | 79.84% | — | — | 8 | 23h 20m | 8d ago | 6m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 27.23% | 27.23% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 24.52% | 80.45% | 80.45% | — | — | 98 | 5h 57m | 24d ago | 18m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 25.71% | 63.52% | 63.52% | — | — | 87 | 6h 41m | 24d ago | 8m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 30.60% | 33.44% | 33.44% | — | — | 1 | 23d 22h | 24d ago | 8m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 30.44% | 90.08% | 90.08% | — | — | 1 | 23d 22h | 24d ago | 18m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 67.84% | 67.84% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 17m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 18m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 30.42% | 83.21% | 83.21% | — | — | 1 | 23d 22h | 24d ago | 17m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.02% | 18.02% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 30.55% | 57.10% | 57.10% | — | — | 4 | 5d 23h | 24d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 40.18% | 40.18% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.96% | 3.92% | 3.92% | — | — | 3 | 9d 22h | 24d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 30.58% | 90.24% | 90.24% | — | — | 1 | 23d 22h | 24d ago | 9m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.87% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 24d ago | 13m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 20.62% | 56.05% | 56.05% | — | — | 2 | 12d 20h | 24d ago | 15m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.54% | 31.54% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 15.66% | 2.22% | 2.22% | — | — | 7 | 3d 21h | 24d ago | 14m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 25.82% | 42.20% | 42.20% | — | — | 4 | 5d 19h | 20d ago | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 58.98% | 58.98% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 16.62% | 27.60% | 27.60% | — | — | 75 | 8h 18m | 24d ago | 8m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 30.58% | 32.42% | 32.42% | — | — | 1 | 23d 22h | 24d ago | 9m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.87% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 24d ago | 14m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 61.82% | 61.82% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 17m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.66% | 6.66% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 71.12% | 71.12% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 30.27% | 90.02% | 90.02% | — | — | 5 | 4d 19h | 24d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 18m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.32% | 9.32% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 25.16% | 85.90% | 85.90% | — | — | 102 | 5h 41m | 24d ago | 9m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 11h | 9d ago | 2m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 35.22% | 35.22% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 57.18% | 57.18% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 18m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 13.78% | 82.85% | 82.85% | — | — | 38 | 17h 10m | 24d ago | 19m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 50.49% | 50.49% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 20h | 27d ago | 19m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.90% | 45.90% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 30.39% | 90.03% | 90.03% | — | — | 2 | 11d 23h | 24d ago | 18m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 63.57% | 63.57% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.83% | 42.24% | 42.24% | — | — | 2 | 14d 22h | 24d ago | 17m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 22h | 27d ago | 17m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 20h | 27d ago | 9m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 11h | 9d ago | 9m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 19.11% | 35.28% | 35.28% | — | — | 159 | 3h 45m | 24d ago | 8m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 16.51% | 2.82% | 2.82% | — | — | 4 | 6d 18h | 24d ago | 9m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 45.11% | 45.11% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 28.96% | 89.97% | 89.97% | — | — | 21 | 1d 3h | 24d ago | 13m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 30.58% | 36.23% | 36.23% | — | — | 1 | 23d 22h | 24d ago | 9m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 30.40% | 89.91% | 89.91% | — | — | 2 | 11d 23h | 24d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 30.41% | 37.77% | 37.77% | — | — | 1 | 23d 22h | 24d ago | 17m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 51.28% | 51.28% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 27.73% | 87.38% | 87.38% | — | — | 54 | 10h 41m | 24d ago | 18m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.44% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 25d ago | 13m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 54.37% | 78.72% | 78.72% | — | — | 3 | 5d 5h | 15d ago | 8m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 20h | 27d ago | 9m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 1.91% | 85.70% | 85.70% | — | — | 1 | 29d 4h | 29d ago | 13m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 30.44% | 66.97% | 66.97% | — | — | 2 | 11d 23h | 24d ago | 7m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.70% | 3.70% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.90% | 46.90% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 29.94% | 84.00% | 84.00% | — | — | 13 | 1d 20h | 24d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 16.57% | 64.07% | 64.07% | — | — | 172 | 3h 35m | 24d ago | 14m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.74% | 30.74% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 16.50% | 16.54% | 16.54% | — | — | 24 | 1d 1h | 24d ago | 5m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 6.22% | 15.33% | 15.33% | — | — | 119 | 5h 38m | 24d ago | 8m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 43.02% | 43.06% | 43.06% | — | — | 10 | 1d 16h | 12d ago | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.18% | 26.18% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 11h | 10d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 29.74% | 71.18% | 71.18% | — | — | 18 | 1d 8h | 24d ago | 7m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 19.93% | 19.98% | 19.98% | — | — | 3 | 6d 14h | 19d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.97% | 18.97% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 53.76% | 53.76% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 11h | 9d ago | 2m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 59.91% | 59.91% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 30.43% | 52.23% | 52.23% | — | — | 2 | 11d 23h | 24d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 40.88% | 67.07% | 67.07% | — | — | 5 | 3d 24h | 20d ago | 6m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 30.54% | 6.02% | 6.02% | — | — | 2 | 11d 23h | 24d ago | 9m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 23h | 29d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 30.31% | 90.12% | 90.12% | — | — | 2 | 11d 23h | 24d ago | 16m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 18m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 30.27% | 88.94% | 88.94% | — | — | 3 | 7d 23h | 24d ago | 16m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 17.43% | 69.37% | 69.37% | — | — | 162 | 3h 44m | 24d ago | 19m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 81.46% | 81.46% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 30.18% | 88.79% | 88.79% | — | — | 7 | 3d 10h | 24d ago | 17m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.38% | 21.38% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.47% | 7.47% | 7.47% | — | — | 3 | 8d 5h | 22d ago | 17m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 25.46% | 4.40% | 4.40% | — | — | 6 | 3d 15h | 13d ago | 14m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 30.50% | 37.27% | 37.27% | — | — | 3 | 7d 23h | 24d ago | 9m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 74.15% | 74.15% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.89% | 8.89% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 24.30% | 71.35% | 71.35% | — | — | 111 | 5h 15m | 24d ago | 19m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 11h | 9d ago | 9m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 73.44% | 73.44% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 17.57% | 17.70% | 17.70% | — | — | 2 | 4d 17h | 9d ago | 3m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 30.45% | 52.99% | 52.99% | — | — | 2 | 11d 23h | 24d ago | 6m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 41.86% | 42.20% | 42.20% | — | — | 2 | 11d 14h | 23d ago | 5m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 16.11% | 16.11% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 21h | 27d ago | 17m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.51% | 19.51% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 40.76% | 25.88% | 25.88% | — | — | 3 | 6d 7h | 16d ago | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 32.47% | 32.47% | 32.47% | — | — | 8 | 21h | 7d ago | 2m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.74% | 1.79% | 1.79% | — | — | 2 | 12d 6h | 24d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 9.70% | 9.75% | 9.75% | — | — | 2 | 12d 6h | 24d ago | 4m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 11.81% | 11.87% | 11.87% | — | — | 2 | 10d 19h | 21d ago | 3m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 54.24% | 54.24% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 30.36% | 90.08% | 90.08% | — | — | 2 | 11d 23h | 24d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 24.90% | 62.81% | 62.81% | — | — | 5 | 4d 24h | 25d ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 38.42% | 90.26% | 90.26% | — | — | 6 | 3d 12h | 21d ago | 13m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.98% | 44.98% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 6.80% | 6.80% | 6.80% | — | — | 1 | 9d 18h | 10d ago | 3m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 25.13% | 87.77% | 87.77% | — | — | 130 | 4h 25m | 24d ago | 9m ago |

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
