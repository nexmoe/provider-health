# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 345 🟢 operational · 57 🟡 degraded · 198 🔴 down · 0 ⚫ unknown

_Updated 2026-05-12 06:17 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (345)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.81% | 92.26% | 92.26% | 751 ms | ↓ 0.63x | 4 | 0s | 24d ago | 16m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 78.76% | 11.44% | 11.44% | 2052 ms | → 1.01x | 5 | 22h 20m | 11d ago | 17m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.89% | 97.14% | 97.14% | 2453 ms | → 0.96x | 2 | 0s | 24d ago | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 96.64% | 98.67% | 98.67% | 2256 ms | → 1.01x | 62 | 6m | 10d ago | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.96% | 99.01% | 99.01% | 3872 ms | ↑ 1.06x | 21 | 0s | 16d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 96.97% | 96.97% | 96.97% | 2094 ms | ↓ 0.95x | 11 | 13m | 8d ago | 11m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 98.83% | 91.96% | 91.96% | 1940 ms | ↑ 1.07x | 10 | 31m | 9d ago | 13m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1710 ms | ↓ 0.76x | 0 | — | — | 10m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.96% | 96.60% | 96.60% | 1719 ms | ↑ 1.10x | 0 | — | — | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 96.63% | 96.63% | 96.63% | 2908 ms | → 0.98x | 10 | 22m | 8d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 984 ms | ↓ 0.78x | 0 | — | — | 10m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.49% | 91.49% | 1763 ms | → 0.99x | 0 | — | — | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1369 ms | → 1.03x | 0 | — | — | 10m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.26% | 95.31% | 95.31% | 2803 ms | ↑ 1.23x | 5 | 3h 2m | 10d ago | 13m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.77% | 99.80% | 99.80% | 866 ms | ↓ 0.61x | 5 | 0s | 25d ago | 13m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 95.07% | 95.11% | 95.11% | 1412 ms | ↑ 1.20x | 8 | 4h 1m | 20d ago | 13m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.25% | 97.25% | 97.25% | 739 ms | ↓ 0.59x | 1 | 13h 57m | 19d ago | 10m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 45.29% | 29.78% | 29.78% | 546 ms | ↓ 0.84x | 4 | 3d 13h | 13d ago | 22m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.84% | 99.90% | 99.90% | 564 ms | ↓ 0.60x | 2 | 9m | 15d ago | 13m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.49% | 96.03% | 96.03% | 2091 ms | ↑ 1.18x | 7 | 14m | 8d ago | 15m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.75% | 98.75% | 802 ms | ↓ 0.83x | 2 | 0s | 9d ago | 24m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 508 ms | ↓ 0.59x | 0 | — | — | 9m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.73% | 95.52% | 95.52% | 476 ms | ↓ 0.54x | 5 | 2m | 24d ago | 15m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2201 ms | → 0.99x | 0 | — | — | 10m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1866 ms | → 0.96x | 0 | — | — | 10m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.65% | 97.60% | 97.60% | 2934 ms | ↑ 1.34x | 6 | 5m | 16d ago | 14m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.08% | 96.13% | 96.13% | 176 ms | ↓ 0.27x | 1 | 12h 47m | 25d ago | 11m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.34% | 77.51% | 77.51% | 2361 ms | ↑ 1.13x | 31 | 1h 4m | 13d ago | 14m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1039 ms | ↓ 0.70x | 0 | — | — | 9m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 100.00% | 98.89% | 99.66% | 99.66% | 3320 ms | ↑ 1.06x | 27 | 45s | 8d ago | 26m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.65% | 96.96% | 96.96% | 1101 ms | ↓ 0.62x | 4 | 20m | 13d ago | 15m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 463 ms | ↓ 0.62x | 0 | — | — | 23m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.91% | 98.65% | 98.65% | 179 ms | ↓ 0.11x | 17 | 6m | 19d ago | 15m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.69% | 99.75% | 99.75% | 2458 ms | ↑ 1.44x | 5 | 8m | 8d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 98.79% | 94.82% | 94.82% | 2890 ms | ↑ 1.15x | 22 | 4m | 24d ago | 14m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 93.06% | 97.97% | 97.97% | 2334 ms | ↑ 1.87x | 10 | 2h 54m | 25d ago | 23m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1806 ms | ↓ 0.75x | 0 | — | — | 9m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2724 ms | → 1.03x | 0 | — | — | 10m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 70.52% | 88.89% | 88.89% | 1337 ms | ↓ 0.71x | 2 | 2d 24h | 24d ago | 17m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.88% | 99.47% | 99.47% | 1936 ms | → 1.03x | 2 | 0s | 26d ago | 23m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.77% | 99.83% | 99.83% | 4301 ms | ↑ 1.58x | 5 | 0s | 8d ago | 22m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.75% | 99.32% | 99.32% | 3891 ms | ↑ 1.94x | 4 | 2h 15m | 8d ago | 14m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.99% | 96.99% | 96.99% | 3243 ms | ↑ 1.15x | 23 | 53s | 22d ago | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.73% | 21.59% | 21.59% | 1175 ms | ↓ 0.71x | 6 | 0s | 9d ago | 23m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1257 ms | → 0.97x | 0 | — | — | 9m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.25% | 50.26% | 50.26% | 3528 ms | ↑ 1.47x | 104 | 18m | 15d ago | 23m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.69% | 97.67% | 97.67% | 3476 ms | ↑ 1.60x | 6 | 0s | 23d ago | 14m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1217 ms | ↑ 1.30x | 0 | — | — | 10m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.88% | 95.67% | 95.67% | 828 ms | ↓ 0.77x | 2 | 0s | 10d ago | 15m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1694 ms | → 0.96x | 0 | — | — | 9m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.75% | 48.83% | 48.83% | 949 ms | ↑ 1.16x | 41 | 5m | 21d ago | 16m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.65% | 97.12% | 97.12% | 2592 ms | ↑ 1.19x | 5 | 12m | 16d ago | 14m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 85.15% | 46.02% | 46.02% | 221 ms | ↓ 0.57x | 1 | 2d 17h | 26d ago | 16m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1046 ms | ↓ 0.75x | 0 | — | — | 9m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.77% | 99.59% | 99.59% | 3147 ms | ↑ 1.13x | 5 | 0s | 24d ago | 22m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2982 ms | → 1.00x | 0 | — | — | 10m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.88% | 96.80% | 96.80% | 1787 ms | ↓ 0.85x | 2 | 0s | 18d ago | 22m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.77% | 98.88% | 98.88% | 1361 ms | ↑ 1.23x | 4 | 2m | 11d ago | 15m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 39.62% | 41.54% | 41.54% | 1689 ms | → 1.00x | 1 | 7d 1h | 30d ago | 23m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.88% | 79.65% | 79.65% | 2087 ms | ↑ 1.13x | 2 | 0s | 17d ago | 16m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.88% | 60.59% | 60.59% | 1712 ms | ↑ 1.19x | 2 | 0s | 20d ago | 16m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 986 ms | ↓ 0.90x | 0 | — | — | 10m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 98.06% | 98.06% | 2428 ms | → 1.04x | 2 | 0s | 24d ago | 14m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4475 ms | → 1.00x | 0 | — | — | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.88% | 91.85% | 91.85% | 776 ms | ↓ 0.78x | 2 | 0s | 24d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.88% | 97.83% | 97.83% | 690 ms | ↓ 0.66x | 2 | 0s | 25d ago | 13m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.65% | 99.83% | 99.83% | 277 ms | ↓ 0.31x | 7 | 1m | 9d ago | 15m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 97.30% | 97.30% | 97.30% | 2787 ms | ↑ 1.07x | 12 | 10m | 8d ago | 11m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 78.79% | 61.50% | 61.50% | 2723 ms | ↑ 1.35x | 21 | 4h 57m | 10d ago | 14m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1887 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 81.67% | 81.67% | 81.67% | 2691 ms | ↓ 0.92x | 14 | 1d 1h | 8d ago | 11m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.57% | 97.05% | 97.05% | 3925 ms | ↑ 1.86x | 8 | 3m | 8d ago | 14m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.77% | 40.62% | 40.62% | 1027 ms | ↑ 1.18x | 1 | 40m | 26d ago | 16m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.92% | 71.52% | 71.52% | 727 ms | ↓ 0.73x | 1 | 0s | 24d ago | 16m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 98.04% | 49.54% | 49.54% | 1587 ms | ↑ 1.22x | 13 | 32m | 14d ago | 23m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.60% | 97.60% | 2740 ms | ↑ 1.50x | 1 | 0s | 24d ago | 15m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.69% | 46.63% | 46.63% | 1126 ms | ↓ 0.88x | 6 | 3m | 20d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.92% | 38.23% | 38.23% | 1353 ms | ↓ 0.69x | 1 | 0s | 26d ago | 23m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1138 ms | ↓ 0.69x | 0 | — | — | 9m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.81% | 78.29% | 78.29% | 1701 ms | → 1.04x | 4 | 0s | 19d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 78.60% | 55.20% | 55.20% | 1022 ms | ↓ 0.70x | 14 | 7h 41m | 9d ago | 16m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.61% | 97.80% | 97.80% | 1869 ms | ↓ 0.81x | 5 | 8m | 24d ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 98.05% | 97.77% | 97.77% | 2566 ms | ↓ 0.90x | 41 | 3m | 9d ago | 14m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.73% | 99.72% | 99.72% | 3123 ms | ↑ 1.30x | 6 | 0s | 8d ago | 22m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.84% | 57.81% | 57.81% | 1121 ms | ↓ 0.93x | 3 | 0s | 21d ago | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2964 ms | → 1.00x | 0 | — | — | 11m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.73% | 99.08% | 99.08% | 1647 ms | ↑ 1.15x | 6 | 0s | 23d ago | 16m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.88% | 87.83% | 87.83% | 2109 ms | ↓ 0.92x | 2 | 0s | 24d ago | 16m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 68.31% | 68.31% | 68.31% | 573 ms | → 0.99x | 1 | 1d 24h | 25d ago | 11m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.65% | 99.73% | 99.73% | 2603 ms | ↑ 1.35x | 8 | 0s | 8d ago | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.62% | 97.75% | 97.75% | 2167 ms | ↑ 1.54x | 2 | 5h 35m | 24d ago | 16m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 80.47% | 25.92% | 25.92% | 423 ms | ↓ 0.31x | 2 | 2d 1h | 24d ago | 15m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.92% | 99.72% | 99.72% | 2722 ms | ↑ 1.21x | 1 | 0s | 17d ago | 26m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1981 ms | → 1.01x | 0 | — | — | 9m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.74% | 97.94% | 97.94% | 3896 ms | → 1.01x | 28 | 2m | 23d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 802 ms | ↓ 0.79x | 1 | 0s | 21d ago | 23m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.80% | 66.96% | 66.96% | 2829 ms | ↑ 1.19x | 4 | 0s | 24d ago | 15m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 85.63% | 85.67% | 85.67% | 360 ms | ↓ 0.74x | 10 | 7h 2m | 23d ago | 13m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1253 ms | ↓ 0.86x | 0 | — | — | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.85% | 99.94% | 99.94% | 1102 ms | ↓ 0.84x | 3 | 0s | 17d ago | 26m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.01% | 99.70% | 99.70% | 3680 ms | ↑ 2.01x | 4 | 55m | 22d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.81% | 99.60% | 99.60% | 1688 ms | → 1.04x | 4 | 0s | 9d ago | 25m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 56.11% | 69.94% | 69.94% | 2563 ms | ↑ 1.11x | 2 | 5d 5h | 19d ago | 15m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 93.02% | 36.59% | 36.59% | 2682 ms | ↑ 1.48x | 24 | 1h 7m | 8d ago | 15m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1332 ms | → 0.96x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 86.83% | 73.62% | 73.62% | 1759 ms | ↑ 1.35x | 2 | 1d 11h | 27d ago | 13m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1478 ms | ↓ 0.84x | 0 | — | — | 9m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1166 ms | ↑ 1.22x | 0 | — | — | 13m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.92% | 98.92% | 570 ms | ↓ 0.77x | 0 | — | — | 16m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.81% | 98.40% | 98.40% | 2074 ms | ↑ 1.43x | 4 | 0s | 24d ago | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 98.05% | 95.57% | 95.57% | 476 ms | ↓ 0.21x | 15 | 24m | 25d ago | 13m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1081 ms | → 0.99x | 0 | — | — | 10m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 690 ms | ↓ 0.55x | 0 | — | — | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1434 ms | ↓ 0.80x | 0 | — | — | 9m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 90.17% | 90.17% | 90.17% | 2406 ms | → 0.96x | 12 | 1d 6h | 7d ago | 11m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 96.30% | 96.30% | 96.30% | 1955 ms | → 0.95x | 11 | 20m | 8d ago | 11m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 94.73% | 94.79% | 94.79% | 297 ms | ↓ 0.34x | 16 | 51m | 9d ago | 11m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.65% | 98.40% | 98.40% | 265 ms | ↓ 0.65x | 5 | 12m | 23d ago | 15m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 96.30% | 96.30% | 96.30% | 1977 ms | → 0.95x | 11 | 20m | 7d ago | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.53% | 98.86% | 98.86% | 872 ms | ↓ 0.68x | 11 | 0s | 15d ago | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 64.85% | 9.46% | 9.46% | 2729 ms | → 0.99x | 2 | 3d 13h | 8d ago | 22m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1106 ms | → 1.00x | 0 | — | — | 9m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 80.33% | 12.90% | 12.90% | 1099 ms | ↑ 1.13x | 1 | 4d 3h | 30d ago | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 804 ms | ↑ 1.12x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.92% | 99.83% | 99.83% | 664 ms | → 1.01x | 1 | 0s | 29d ago | 26m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.57% | 99.12% | 99.12% | 180 ms | ↓ 0.36x | 10 | 0s | 8d ago | 14m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 822 ms | ↓ 0.80x | 0 | — | — | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 95.89% | 95.94% | 95.94% | 1351 ms | ↓ 0.89x | 1 | 13h 10m | 24d ago | 11m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 100.00% | 99.33% | 99.33% | 99.33% | 1003 ms | ↓ 0.86x | 4 | 0s | 8d ago | 9m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.32% | 97.58% | 97.58% | 2429 ms | ↑ 1.93x | 7 | 50m | 24d ago | 16m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.62% | 99.72% | 99.72% | 442 ms | ↓ 0.79x | 7 | 4m | 18d ago | 26m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1319 ms | → 0.99x | 0 | — | — | 10m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.43% | 98.58% | 98.58% | 4475 ms | ↑ 1.15x | 14 | 0s | 24d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 56.05% | 80.58% | 80.58% | 784 ms | ↓ 0.54x | 4 | 3d 13h | 24d ago | 15m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3438 ms | ↑ 1.75x | 0 | — | — | 26m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1428 ms | → 1.00x | 0 | — | — | 10m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.50% | 99.17% | 99.17% | 1457 ms | ↑ 1.13x | 11 | 55s | 9d ago | 25m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 64.86% | 34.74% | 34.74% | 732 ms | → 1.05x | 1 | 7d 1h | 30d ago | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.14% | 98.03% | 98.03% | 4434 ms | ↑ 1.88x | 20 | 30s | 24d ago | 15m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.92% | 99.95% | 99.95% | 1110 ms | ↓ 0.90x | 1 | 0s | 28d ago | 25m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 98.92% | 99.41% | 99.41% | 3696 ms | ↑ 1.75x | 16 | 14m | 8d ago | 22m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.85% | 99.90% | 99.90% | 337 ms | ↓ 0.28x | 3 | 0s | 17d ago | 25m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.88% | 99.81% | 99.81% | 1612 ms | ↑ 1.05x | 2 | 0s | 24d ago | 15m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.81% | 99.85% | 99.85% | 2187 ms | ↑ 1.13x | 3 | 3m | 23d ago | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.01% | 99.84% | 99.84% | 2363 ms | ↑ 1.41x | 25 | 0s | 8d ago | 26m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.28% | 99.32% | 99.32% | 1687 ms | ↑ 1.32x | 3 | 37m | 24d ago | 13m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.88% | 88.06% | 88.06% | 1185 ms | → 1.03x | 2 | 0s | 18d ago | 16m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.92% | 99.58% | 99.58% | 1204 ms | → 0.99x | 1 | 0s | 27d ago | 26m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.60% | 95.46% | 95.46% | 3111 ms | ↑ 1.14x | 9 | 31m | 16d ago | 15m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 80.30% | 11.82% | 11.82% | 2593 ms | ↑ 1.96x | 2 | 2d 2h | 23d ago | 17m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 411 ms | ↓ 0.84x | 0 | — | — | 9m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.77% | 99.74% | 99.74% | 2036 ms | → 0.96x | 5 | 0s | 17d ago | 26m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.62% | 87.92% | 87.92% | 1151 ms | ↓ 0.86x | 8 | 1m | 9d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 79.84% | 11.59% | 11.59% | 1604 ms | ↓ 0.79x | 12 | 8h 19m | 24d ago | 17m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.77% | 98.69% | 98.69% | 2608 ms | ↑ 1.66x | 5 | 0s | 24d ago | 15m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 64.57% | 77.80% | 77.80% | 2316 ms | → 0.95x | 3 | 2d 9h | 9d ago | 26m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.85% | 99.91% | 99.91% | 829 ms | ↓ 0.83x | 3 | 0s | 9d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.89% | 99.91% | 99.91% | 1744 ms | ↑ 1.09x | 2 | 0s | 22d ago | 26m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.62% | 99.64% | 99.64% | 836 ms | ↓ 0.76x | 9 | 0s | 10d ago | 25m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 64.73% | 25.67% | 25.67% | 646 ms | ↓ 0.91x | 4 | 1d 18h | 9d ago | 15m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.01% | 99.55% | 99.55% | 1656 ms | → 0.99x | 2 | 1h 55m | 29d ago | 26m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1964 ms | ↓ 0.78x | 0 | — | — | 9m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.77% | 98.93% | 98.93% | 1751 ms | ↓ 0.91x | 5 | 0s | 24d ago | 25m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.84% | 97.53% | 97.53% | 1159 ms | ↓ 0.83x | 3 | 0s | 25d ago | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.80% | 97.09% | 97.09% | 2828 ms | ↑ 1.61x | 4 | 0s | 24d ago | 14m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.34% | 94.60% | 94.60% | 995 ms | ↓ 0.61x | 11 | 5m | 23d ago | 13m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 64.79% | 9.53% | 9.53% | 1434 ms | → 1.02x | 4 | 1d 18h | 10d ago | 25m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 64.27% | 64.27% | 1095 ms | ↑ 1.32x | 2 | 0s | 24d ago | 16m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 76.70% | 76.70% | 1787 ms | ↑ 1.09x | 5 | 0s | 17d ago | 16m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.69% | 99.77% | 99.77% | 1446 ms | ↓ 0.85x | 6 | 2m | 24d ago | 25m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.85% | 99.67% | 99.67% | 2299 ms | ↑ 1.32x | 2 | 5m | 25d ago | 26m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2706 ms | → 1.00x | 0 | — | — | 10m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 75.55% | 90.58% | 90.58% | 1632 ms | ↓ 0.68x | 8 | 1d | 11d ago | 15m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.86% | 99.86% | 1058 ms | ↓ 0.80x | 2 | 0s | 24d ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 89.99% | 83.67% | 83.67% | 1249 ms | ↓ 0.75x | 177 | 5m | 8d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 86.12% | 83.74% | 83.74% | 346 ms | ↓ 0.12x | 168 | 12m | 15d ago | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 89.50% | 87.78% | 87.78% | 413 ms | ↓ 0.12x | 176 | 6m | 18d ago | 15m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.16% | 99.16% | 2214 ms | ↑ 1.27x | 1 | 0s | 24d ago | 16m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 62.08% | 62.08% | 244 ms | ↓ 0.16x | 1 | 0s | 24d ago | 16m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.88% | 96.15% | 96.15% | 1506 ms | ↑ 1.54x | 2 | 0s | 24d ago | 16m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.77% | 99.73% | 99.73% | 2662 ms | ↑ 1.05x | 5 | 0s | 10d ago | 26m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1813 ms | → 0.98x | 0 | — | — | 10m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 98.24% | 91.26% | 91.26% | 3783 ms | ↑ 1.16x | 27 | 7m | 15d ago | 14m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1299 ms | → 1.00x | 0 | — | — | 10m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 51.99% | 51.99% | 573 ms | ↓ 0.66x | 1 | 0s | 24d ago | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.15% | 98.15% | 1340 ms | ↑ 1.08x | 1 | 0s | 24d ago | 15m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.03% | 27.64% | 27.64% | 2027 ms | ↑ 1.07x | 9 | 16m | 11d ago | 16m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.73% | 99.15% | 99.15% | 3376 ms | ↑ 1.49x | 3 | 22m | 21d ago | 22m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.72% | 99.72% | 2626 ms | ↑ 1.19x | 0 | — | — | 26m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.88% | 99.88% | 1945 ms | ↑ 1.18x | 2 | 0s | 24d ago | 15m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.80% | 44.47% | 44.47% | 4046 ms | ↑ 1.31x | 4 | 0s | 23d ago | 15m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2007 ms | → 0.96x | 0 | — | — | 10m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.81% | 99.07% | 99.07% | 2113 ms | ↑ 1.18x | 4 | 0s | 10d ago | 16m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.65% | 97.65% | 97.65% | 1684 ms | ↑ 1.45x | 1 | 11h 52m | 12d ago | 10m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.65% | 75.54% | 75.54% | 1567 ms | ↑ 2.05x | 3 | 33m | 12d ago | 16m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.42x | 0 | — | — | 26m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.46% | 99.90% | 99.90% | 1715 ms | → 1.00x | 10 | 3m | 9d ago | 25m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 778 ms | → 0.99x | 0 | — | — | 10m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.85% | 99.94% | 99.94% | 2193 ms | ↑ 1.23x | 2 | 1m | 24d ago | 22m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.89% | 99.48% | 99.48% | 2988 ms | ↑ 1.35x | 2 | 0s | 23d ago | 26m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 96.65% | 75.74% | 75.74% | 1875 ms | ↓ 0.89x | 18 | 38m | 23d ago | 16m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.51% | 83.51% | 2048 ms | ↑ 1.82x | 1 | 0s | 24d ago | 16m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.81% | 95.61% | 95.61% | 1074 ms | ↑ 1.23x | 4 | 0s | 24d ago | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.89% | 99.97% | 99.97% | 922 ms | ↓ 0.81x | 2 | 0s | 24d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.38% | 90.45% | 90.45% | 2575 ms | ↓ 0.82x | 15 | 0s | 13d ago | 16m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.69% | 97.99% | 97.99% | 1209 ms | ↓ 0.88x | 7 | 0s | 24d ago | 25m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 64.72% | 11.38% | 11.38% | 597 ms | ↓ 0.38x | 1 | 7d 1h | 30d ago | 16m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1094 ms | ↓ 0.66x | 0 | — | — | 9m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.84% | 99.93% | 99.93% | 801 ms | → 0.99x | 3 | 0s | 24d ago | 15m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 64.69% | 9.97% | 9.97% | 1109 ms | ↓ 0.87x | 2 | 3d 13h | 10d ago | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.88% | 55.30% | 55.30% | 2022 ms | ↑ 1.19x | 2 | 0s | 24d ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.85% | 99.75% | 99.75% | 2710 ms | ↑ 1.22x | 3 | 0s | 17d ago | 26m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 61.80% | 61.80% | 863 ms | → 0.95x | 0 | — | — | 26m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.92% | 98.99% | 98.99% | 976 ms | ↓ 0.77x | 1 | 0s | 24d ago | 25m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 64.95% | 9.52% | 9.52% | 888 ms | ↓ 0.91x | 1 | 7d 1h | 30d ago | 25m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 940 ms | → 0.95x | 0 | — | — | 10m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.89% | 98.89% | 98.89% | 1194 ms | ↓ 0.68x | 1 | 3h 45m | 17d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.72% | 99.86% | 99.86% | 2449 ms | ↓ 0.92x | 1 | 0s | 9d ago | 11m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1161 ms | ↓ 0.86x | 0 | — | — | 10m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.05% | 99.45% | 99.45% | 3329 ms | ↑ 1.12x | 23 | 52s | 8d ago | 26m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1954 ms | → 0.97x | 0 | — | — | 10m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 90.90% | 92.67% | 92.67% | 3908 ms | ↓ 0.85x | 86 | 18m | 23d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 1996 ms | ↑ 1.09x | 1 | 0s | 24d ago | 16m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.53% | 98.48% | 98.48% | 2479 ms | ↑ 1.66x | 10 | 59s | 9d ago | 14m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 97.64% | 97.64% | 97.64% | 1637 ms | ↓ 0.86x | 10 | 8m | 8d ago | 11m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.69% | 98.95% | 98.95% | 1075 ms | → 0.98x | 6 | 2m | 18d ago | 15m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 57.20% | 23.43% | 23.43% | 1889 ms | ↓ 0.89x | 2 | 4d 22h | 20d ago | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.92% | 99.53% | 99.53% | 1326 ms | ↑ 1.07x | 1 | 0s | 27d ago | 26m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 98.50% | 98.50% | 98.50% | 2625 ms | → 1.03x | 12 | 18m | 8d ago | 11m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.40% | 99.40% | 1170 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 517 ms | → 0.95x | 1 | 0s | 28d ago | 27m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.19% | 91.23% | 91.23% | 1335 ms | ↓ 0.72x | 11 | 15m | 12d ago | 25m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.81% | 97.70% | 97.70% | 1620 ms | ↓ 0.92x | 1 | 9h 9m | 30d ago | 13m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.66% | 96.33% | 96.33% | 2906 ms | ↑ 1.12x | 25 | 6m | 12d ago | 26m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 98.36% | 98.52% | 98.52% | 1871 ms | → 0.96x | 7 | 6m | 8d ago | 11m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.66% | 99.71% | 99.71% | 823 ms | ↓ 0.73x | 2 | 25m | 24d ago | 13m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.16% | 85.16% | 1428 ms | ↑ 1.27x | 1 | 0s | 24d ago | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.64% | 99.68% | 99.68% | 1446 ms | ↑ 1.18x | 8 | 0s | 9d ago | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1449 ms | ↑ 1.14x | 0 | — | — | 26m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.92% | 99.44% | 99.44% | 1006 ms | ↑ 1.06x | 1 | 0s | 28d ago | 26m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 474 ms | ↓ 0.55x | 0 | — | — | 9m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.85% | 99.71% | 99.71% | 914 ms | → 1.02x | 2 | 5m | 29d ago | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.57% | 65.43% | 65.43% | 1211 ms | ↑ 1.20x | 9 | 1m | 9d ago | 15m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.85% | 99.87% | 99.87% | 2867 ms | ↑ 1.62x | 3 | 0s | 16d ago | 23m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.85% | 99.81% | 99.81% | 734 ms | ↓ 0.94x | 3 | 0s | 26d ago | 24m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.03% | 82.73% | 82.73% | 2573 ms | ↓ 0.86x | 23 | 26s | 8d ago | 22m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.61% | 98.61% | 1667 ms | ↓ 0.87x | 1 | 0s | 24d ago | 15m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.84% | 96.89% | 96.89% | 1463 ms | ↑ 1.19x | 3 | 0s | 17d ago | 13m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.54% | 91.30% | 91.30% | 3901 ms | ↑ 1.27x | 10 | 1m | 24d ago | 27m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 277 ms | ↓ 0.47x | 0 | — | — | 9m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 94.97% | 95.02% | 95.02% | 787 ms | ↓ 0.44x | 4 | 4h 8m | 12d ago | 11m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.81% | 98.60% | 98.60% | 557 ms | ↓ 0.94x | 2 | 10m | 25d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2244 ms | → 0.99x | 0 | — | — | 10m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.02% | 96.98% | 96.98% | 3019 ms | ↑ 1.25x | 22 | 1m | 12d ago | 14m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1008 ms | → 0.99x | 0 | — | — | 10m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 64.86% | 21.17% | 21.17% | 845 ms | → 1.03x | 2 | 3d 13h | 13d ago | 24m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.77% | 99.76% | 99.76% | 1828 ms | ↓ 0.88x | 4 | 3m | 24d ago | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.84% | 97.84% | 1601 ms | ↑ 1.29x | 2 | 0s | 24d ago | 15m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.02% | 94.03% | 94.03% | 2589 ms | ↓ 0.63x | 18 | 4m | 8d ago | 14m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1340 ms | ↓ 0.94x | 1 | 0s | 26d ago | 24m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.84% | 85.87% | 85.87% | 2532 ms | ↑ 1.32x | 3 | 0s | 17d ago | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.72% | 96.17% | 96.17% | 1976 ms | ↑ 1.30x | 5 | 15h 59m | 15d ago | 17m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.92% | 99.85% | 99.85% | 1792 ms | ↑ 1.17x | 1 | 0s | 21d ago | 24m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 725 ms | ↓ 0.60x | 0 | — | — | 10m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.88% | 99.84% | 99.84% | 1969 ms | ↑ 1.09x | 1 | 20m | 19d ago | 24m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.89% | 99.93% | 99.93% | 989 ms | ↑ 1.65x | 2 | 0s | 10d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 80.27% | 11.66% | 11.66% | 2096 ms | → 1.02x | 3 | 1d 9h | 19d ago | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 64.54% | 9.37% | 9.37% | 1661 ms | ↑ 1.06x | 6 | 1d 4h | 9d ago | 17m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.80% | 99.88% | 99.88% | 3227 ms | ↑ 1.65x | 4 | 0s | 16d ago | 14m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 97.38% | 95.48% | 95.48% | 1689 ms | ↑ 1.08x | 2 | 5h 25m | 26d ago | 13m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3145 ms | → 1.00x | 0 | — | — | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 80.09% | 20.89% | 20.89% | 1769 ms | ↑ 1.05x | 7 | 14h 14m | 8d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.77% | 99.77% | 99.77% | 3363 ms | ↑ 1.92x | 3 | 7m | 24d ago | 14m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.35% | 99.88% | 99.88% | 1387 ms | ↑ 1.07x | 3 | 1h 27m | 15d ago | 26m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.92% | 99.92% | 99.92% | 3064 ms | ↑ 1.68x | 1 | 0s | 26d ago | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.50% | 99.72% | 99.72% | 2607 ms | ↑ 1.65x | 5 | 14m | 26d ago | 24m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.88% | 97.71% | 97.71% | 1004 ms | ↓ 0.93x | 1 | 10m | 25d ago | 13m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.50% | 99.80% | 99.80% | 2286 ms | ↑ 1.09x | 11 | 15s | 20d ago | 22m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.82% | 99.82% | 2413 ms | ↑ 2.28x | 1 | 0s | 27d ago | 17m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.77% | 99.03% | 99.03% | 1442 ms | ↑ 1.09x | 5 | 0s | 23d ago | 26m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 50.41% | 27.23% | 27.23% | 1372 ms | ↓ 0.56x | 20 | 15h 3m | 8d ago | 14m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 424 ms | ↓ 0.58x | 0 | — | — | 25m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.80% | 97.40% | 91.62% | 91.62% | 991 ms | ↓ 0.86x | 26 | 25m | 22h ago | 26m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.80% | 99.24% | 99.84% | 99.84% | 3629 ms | ↑ 1.34x | 19 | 0s | 6d ago | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.80% | 99.57% | 99.62% | 99.62% | 446 ms | ↓ 0.86x | 8 | 0s | 4d ago | 26m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.80% | 99.20% | 99.71% | 99.71% | 3115 ms | ↑ 1.35x | 5 | 1h | 6d ago | 26m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.80% | 75.48% | 57.45% | 57.45% | 3104 ms | → 1.03x | 189 | 29m | 6d ago | 26m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 99.81% | 15.47% | 15.47% | 2214 ms | ↑ 1.08x | 4 | 0s | 5d ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.80% | 64.76% | 9.52% | 9.52% | 2325 ms | → 1.05x | 4 | 1d 18h | 23h ago | 26m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.80% | 99.42% | 97.62% | 97.62% | 3436 ms | ↑ 1.09x | 12 | 3m | 7d ago | 22m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.80% | 88.92% | 76.81% | 76.81% | 2605 ms | ↑ 1.15x | 168 | 9m | 3d ago | 22m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.80% | 99.50% | 99.72% | 99.72% | 2973 ms | ↑ 1.10x | 9 | 3m | 3d ago | 23m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 65.56% | 9.57% | 9.57% | 1400 ms | ↓ 0.90x | 5 | 1d 9h | 7d ago | 23m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.80% | 98.73% | 99.62% | 99.62% | 2759 ms | ↑ 1.58x | 4 | 1h 8m | 4d ago | 22m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.85% | 99.84% | 99.84% | 1614 ms | ↓ 0.88x | 3 | 0s | 4d ago | 22m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 78.57% | 11.46% | 11.46% | 895 ms | ↓ 0.57x | 38 | 2h 39m | 6d ago | 23m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.80% | 96.07% | 96.13% | 96.13% | 2345 ms | ↓ 0.77x | 3 | 4h 13m | 1d ago | 11m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 64.73% | 41.21% | 41.21% | 1565 ms | ↓ 0.80x | 4 | 1d 18h | 3h ago | 15m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.77% | 97.86% | 97.86% | 932 ms | ↓ 0.76x | 5 | 0s | 4d ago | 14m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.69% | 78.03% | 78.03% | 1647 ms | → 1.00x | 6 | 2m | 1d ago | 16m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.80% | 99.54% | 99.54% | 99.54% | 154 ms | ↓ 0.11x | 4 | 15m | 2d ago | 10m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.80% | 99.83% | 99.83% | 99.83% | 1882 ms | → 0.97x | 1 | 0s | 2d ago | 9m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.80% | 99.70% | 99.70% | 99.70% | 470 ms | → 0.98x | 2 | 0s | 2d ago | 10m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.80% | 99.83% | 99.83% | 99.83% | 3065 ms | → 1.00x | 1 | 0s | 7d ago | 10m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.80% | 97.36% | 97.36% | 97.36% | 1458 ms | → 1.03x | 2 | 1h 20m | 3d ago | 11m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.81% | 54.15% | 54.15% | 2084 ms | → 1.03x | 4 | 0s | 2d ago | 16m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.80% | 99.77% | 99.51% | 99.51% | 996 ms | ↓ 0.75x | 5 | 0s | 21h ago | 16m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.80% | 99.85% | 99.85% | 99.85% | 686 ms | ↓ 0.88x | 1 | 0s | 6d ago | 10m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.88% | 99.92% | 99.92% | 806 ms | ↓ 0.74x | 2 | 0s | 6d ago | 13m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.80% | 99.85% | 99.85% | 99.85% | 1586 ms | ↓ 0.90x | 1 | 0s | 2d ago | 9m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.80% | 99.65% | 97.75% | 97.75% | 2392 ms | ↑ 1.30x | 7 | 1m | 5d ago | 14m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.80% | 99.83% | 99.83% | 99.83% | 1006 ms | → 0.98x | 1 | 0s | 2d ago | 10m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.80% | 99.69% | 98.08% | 98.08% | 489 ms | ↓ 0.47x | 6 | 2m | 3d ago | 15m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.80% | 98.60% | 96.38% | 96.38% | 4151 ms | ↑ 1.43x | 11 | 29m | 6d ago | 16m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 80.27% | 12.51% | 12.51% | 1193 ms | ↓ 0.59x | 3 | 1d 9h | 7d ago | 17m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.80% | 99.81% | 99.81% | 99.81% | 851 ms | → 1.00x | 1 | 0s | 7d ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.80% | 99.65% | 99.70% | 99.70% | 4082 ms | ↑ 1.83x | 8 | 0s | 4d ago | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.80% | 98.39% | 98.39% | 726 ms | ↓ 0.57x | 4 | 0s | 15h ago | 15m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.93% | 99.93% | 99.93% | 910 ms | ↓ 0.89x | 1 | 0s | 5d ago | 10m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.80% | 99.69% | 95.17% | 95.17% | 1346 ms | ↓ 0.86x | 2 | 51m | 4d ago | 13m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.60% | 40.72% | 85.89% | 85.89% | 1709 ms | ↓ 0.85x | 3 | 5d | 5d ago | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 64.85% | 22.83% | 22.83% | 2509 ms | ↑ 1.13x | 2 | 3d 13h | 6d ago | 24m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.33% | 99.38% | 99.38% | 1828 ms | ↓ 0.85x | 11 | 3m | 6d ago | 25m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.59% | 93.98% | 96.30% | 96.30% | 1254 ms | ↓ 0.82x | 26 | 51m | 4d ago | 23m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.59% | 99.50% | 99.50% | 99.50% | 4517 ms | → 0.96x | 5 | 0s | 3d ago | 9m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.59% | 89.42% | 81.82% | 81.82% | 740 ms | ↓ 0.23x | 171 | 8m | 4d ago | 14m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.59% | 99.40% | 99.40% | 99.40% | 766 ms | ↓ 0.93x | 4 | 0s | 2d ago | 10m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.59% | 99.45% | 99.58% | 99.58% | 1050 ms | ↓ 0.93x | 9 | 9m | 6d ago | 13m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.59% | 99.70% | 99.70% | 99.70% | 1422 ms | → 0.98x | 1 | 19m | 6d ago | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.59% | 95.70% | 95.75% | 95.75% | 1871 ms | ↓ 0.83x | 7 | 1h 50m | 1d ago | 11m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.50% | 99.27% | 99.27% | 2237 ms | ↑ 1.15x | 10 | 2m | 3d ago | 17m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.59% | 97.62% | 86.92% | 86.92% | 693 ms | ↓ 0.76x | 8 | 1h 11m | 5d ago | 13m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.77% | 55.30% | 55.30% | 1503 ms | ↓ 0.82x | 5 | 0s | 3d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.59% | 99.66% | 99.66% | 99.66% | 2168 ms | → 0.99x | 1 | 20m | 7d ago | 10m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.39% | 95.58% | 98.75% | 98.75% | 3208 ms | → 1.00x | 88 | 5m | 8h ago | 26m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.39% | 99.57% | 86.96% | 86.96% | 2275 ms | ↑ 1.81x | 8 | 5m | 4d ago | 16m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.39% | 99.62% | 99.66% | 99.66% | 1340 ms | ↓ 0.89x | 5 | 8m | 4d ago | 17m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.39% | 99.50% | 99.50% | 99.50% | 1101 ms | → 1.00x | 3 | 0s | 3d ago | 10m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.39% | 95.21% | 95.25% | 95.25% | 2083 ms | ↑ 1.09x | 7 | 2h 25m | 54m ago | 13m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.19% | 99.54% | 98.94% | 98.94% | 2629 ms | → 1.04x | 8 | 8m | 7d ago | 26m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.19% | 71.24% | 78.39% | 78.39% | 126 ms | ↓ 0.61x | 9 | 18h 47m | 46m ago | 27m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.19% | 98.34% | 98.96% | 98.96% | 2480 ms | ↑ 1.41x | 12 | 26m | 17h ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.19% | 99.80% | 99.84% | 99.84% | 1363 ms | ↑ 1.08x | 2 | 20m | 3d ago | 13m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.19% | 98.99% | 98.99% | 98.99% | 1401 ms | → 1.00x | 6 | 0s | 14h ago | 9m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.19% | 99.33% | 99.33% | 99.33% | 2949 ms | → 1.00x | 3 | 7m | 8h ago | 10m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (57)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.99% | 99.01% | 99.24% | 99.24% | 842 ms | ↓ 0.62x | 25 | 0s | 20h ago | 26m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.98% | 99.46% | 67.18% | 67.18% | 1167 ms | ↓ 0.91x | 10 | 6m | 20h ago | 16m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 98.98% | 97.64% | 97.64% | 97.64% | 2392 ms | → 0.99x | 9 | 11m | 5d ago | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.98% | 95.76% | 62.07% | 62.07% | 798 ms | ↑ 1.08x | 16 | 1h 49m | 4d ago | 16m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.98% | 98.52% | 89.33% | 89.33% | 1826 ms | → 1.00x | 30 | 2m | 2d ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.79% | 78.31% | 77.07% | 77.07% | 3523 ms | ↓ 0.87x | 260 | 13m | 6h ago | 27m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.78% | 99.65% | 98.72% | 98.72% | 1358 ms | ↑ 1.86x | 8 | 0s | 20h ago | 16m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.78% | 96.99% | 96.99% | 96.99% | 2492 ms | ↓ 0.81x | 6 | 2h 14m | 4d ago | 10m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.58% | 99.12% | 97.66% | 97.66% | 4054 ms | ↑ 1.11x | 22 | 0s | 45m ago | 26m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.58% | 88.46% | 59.85% | 59.85% | 4644 ms | → 1.00x | 198 | 5m | 3d ago | 16m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.37% | 64.41% | 9.52% | 9.52% | 2764 ms | ↑ 1.61x | 6 | 1d 4h | 19h ago | 17m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.98% | 97.87% | 97.95% | 97.95% | 4621 ms | ↑ 1.49x | 48 | 3m | 6m ago | 27m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 97.97% | 99.53% | 98.33% | 98.33% | 2922 ms | ↑ 1.55x | 3 | 54m | 3d ago | 15m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 97.97% | 99.53% | 98.41% | 98.41% | 684 ms | ↓ 0.57x | 3 | 54m | 3d ago | 15m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 97.77% | 90.77% | 95.58% | 95.58% | 3469 ms | ↓ 0.91x | 121 | 20m | 5h ago | 26m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.77% | 62.42% | 9.11% | 9.11% | 4408 ms | ↑ 1.25x | 55 | 3h 13m | 5h ago | 22m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.76% | 89.86% | 82.03% | 82.03% | 4708 ms | → 1.04x | 190 | 4m | 18h ago | 15m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.57% | 99.23% | 98.57% | 98.57% | 3963 ms | ↑ 1.32x | 8 | 30m | 2d ago | 24m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.56% | 82.53% | 79.75% | 79.75% | 4785 ms | ↑ 1.15x | 175 | 19m | 18h ago | 14m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.36% | 95.75% | 98.69% | 98.69% | 4396 ms | ↑ 1.30x | 63 | 15m | 5h ago | 22m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 97.36% | 90.86% | 65.41% | 65.41% | 4415 ms | → 1.02x | 176 | 4m | 42m ago | 23m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.36% | 99.15% | 99.15% | 99.15% | 1085 ms | ↓ 0.54x | 1 | 4h 12m | 3d ago | 10m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.36% | 89.43% | 84.70% | 84.70% | 4466 ms | → 1.02x | 197 | 4m | 16h ago | 16m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 97.17% | 97.63% | 98.64% | 98.64% | 3663 ms | → 0.98x | 52 | 4m | 1d ago | 25m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.96% | 89.09% | 71.64% | 71.64% | 4464 ms | → 1.01x | 219 | 3m | 15h ago | 23m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.95% | 94.10% | 94.14% | 94.14% | 1549 ms | ↑ 1.18x | 5 | 7h 39m | 8h ago | 13m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.76% | 89.28% | 84.20% | 84.20% | 4558 ms | → 1.03x | 214 | 4m | 16h ago | 24m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.75% | 85.36% | 78.17% | 78.17% | 4714 ms | → 1.03x | 283 | 7m | 15h ago | 14m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.56% | 86.77% | 83.63% | 83.63% | 4504 ms | ↑ 1.06x | 183 | 13m | 7m ago | 27m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.14% | 96.40% | 96.40% | 96.40% | 1551 ms | ↓ 0.88x | 18 | 7m | 16h ago | 9m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.33% | 86.47% | 78.46% | 78.46% | 4823 ms | → 1.03x | 248 | 5m | 15h ago | 15m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.53% | 62.99% | 9.21% | 9.21% | 2481 ms | ↑ 1.18x | 46 | 3h 43m | 1d ago | 24m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 94.12% | 23.56% | 7.67% | 7.67% | 2657 ms | ↑ 1.12x | 7 | 3d 1h | 1d ago | 22m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.89% | 91.54% | 67.90% | 67.90% | 1148 ms | ↓ 0.72x | 27 | 1h 34m | 3d ago | 16m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 92.68% | 98.52% | 96.05% | 96.05% | 1114 ms | ↓ 0.90x | 2 | 5h 55m | 4d ago | 13m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 92.31% | 98.15% | 98.97% | 98.97% | 3866 ms | ↑ 1.36x | 14 | 45m | 17h ago | 24m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 92.31% | 98.38% | 96.95% | 96.95% | 3809 ms | ↑ 1.37x | 13 | 45m | 17h ago | 24m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 92.31% | 98.35% | 54.76% | 54.76% | 4186 ms | ↑ 1.36x | 14 | 41m | 17h ago | 24m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 92.31% | 98.38% | 99.15% | 99.15% | 3894 ms | ↑ 1.98x | 12 | 50m | 17h ago | 24m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 92.11% | 98.39% | 39.95% | 39.95% | 1342 ms | ↓ 0.90x | 13 | 45m | 17h ago | 24m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.46% | 78.02% | 45.36% | 45.36% | 1947 ms | → 0.98x | 25 | 4h 29m | 7h ago | 14m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.06% | 98.12% | 96.96% | 96.96% | 1982 ms | ↑ 1.31x | 4 | 3h 35m | 7d ago | 13m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.02% | 57.36% | 38.36% | 38.36% | 3883 ms | ↑ 1.14x | 158 | 1h 9m | 11h ago | 14m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.82% | 60.84% | 10.23% | 10.23% | 4491 ms | → 1.03x | 230 | 41m | 3h ago | 16m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 88.46% | 59.13% | 8.68% | 8.68% | 808 ms | ↓ 0.78x | 76 | 2h 35m | 16h ago | 25m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 87.60% | 89.75% | 89.75% | 89.75% | 624 ms | ↓ 0.93x | 4 | 5h 13m | 7h ago | 10m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 86.79% | 88.05% | 91.50% | 91.50% | 2890 ms | ↑ 1.57x | 14 | 7h 13m | 2d ago | 15m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 84.96% | 88.89% | 88.89% | 88.89% | 1045 ms | ↓ 0.92x | 1 | 1d 1h | 5d ago | 10m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.10% | 76.53% | 34.59% | 34.59% | 591 ms | ↓ 0.52x | 10 | 12h 56m | 4d ago | 15m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 80.08% | 81.33% | 81.33% | 81.33% | 1450 ms | → 1.00x | 3 | 11h 14m | 1d ago | 9m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 78.46% | 77.25% | 78.09% | 78.09% | 1714 ms | ↑ 1.12x | 2 | 4d 1h | 8d ago | 13m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 75.46% | 55.95% | 8.15% | 8.15% | 3738 ms | ↓ 0.85x | 190 | 58m | 2m ago | 23m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 73.98% | 17.60% | 17.60% | 17.60% | 3272 ms | → 1.00x | 2 | 10d 7h | 18d ago | 17m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 69.51% | 15.82% | 21.00% | 21.00% | 1454 ms | → 1.00x | 1 | 25d 2h | 30d ago | 14m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 66.94% | 59.40% | 61.89% | 61.89% | 4833 ms | → 1.04x | 480 | 17m | 1h ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 41.06% | 82.34% | 82.39% | 82.39% | 2728 ms | ↑ 1.48x | 13 | 8h 3m | 5d ago | 11m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 16.60% | 3.14% | 0.47% | 0.47% | 1650 ms | → 1.00x | 2 | 14d 10h | 1d ago | 25m ago |

</details>

<details open>
<summary><strong>🔴 Down (198)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.37% | 98.67% | 88.32% | 88.32% | 4195 ms | ↑ 2.23x | 26 | 6m | 14m ago | 14m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 93.90% | 72.95% | 28.30% | 28.30% | 1877 ms | ↓ 0.80x | 25 | 6h 11m | 5h ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 90.85% | 93.24% | 93.24% | 93.24% | 2254 ms | → 1.01x | 1 | 14h 50m | 15h ago | 10m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 90.65% | 97.50% | 75.81% | 75.81% | 2646 ms | ↑ 1.12x | 6 | 3h 12m | 15h ago | 16m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 89.88% | 98.01% | 99.37% | 99.37% | 1512 ms | → 0.99x | 7 | 2h 10m | 12h ago | 26m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 89.02% | 97.48% | 97.36% | 97.36% | 624 ms | ↓ 0.68x | 10 | 1h 49m | 14h ago | 16m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 87.04% | 50.04% | 89.04% | 89.04% | 524 ms | ↓ 0.40x | 153 | 2h 21m | 22h ago | 26m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 86.99% | 96.99% | 91.86% | 91.86% | 1013 ms | ↓ 0.57x | 4 | 5h 41m | 22h ago | 14m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 86.64% | 97.17% | 90.61% | 90.61% | 602 ms | ↓ 0.64x | 4 | 5h 55m | 22h ago | 25m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 86.59% | 97.23% | 96.43% | 96.43% | 1723 ms | ↓ 0.91x | 6 | 3h 37m | 22h ago | 14m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 86.18% | 89.61% | 89.66% | 89.66% | 3374 ms | → 0.97x | 44 | 50m | 22h ago | 11m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 75.81% | 94.99% | 95.03% | 95.03% | 396 ms | ↓ 0.61x | 8 | 4h 58m | 2d ago | 13m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 72.15% | 45.81% | 12.83% | 12.83% | 4625 ms | ↑ 1.07x | 289 | 50m | 16m ago | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 69.92% | 76.10% | 65.54% | 65.54% | 1755 ms | ↑ 1.09x | 7 | 18h 48m | 2d ago | 15m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 69.11% | 93.88% | 96.24% | 96.24% | 3577 ms | ↑ 1.69x | 7 | 7h 19m | 2d ago | 15m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 59.15% | 92.06% | 92.52% | 92.52% | 1842 ms | ↑ 1.25x | 3 | 22h 41m | 3d ago | 11m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.97% | 37.86% | 10.05% | 10.05% | 4237 ms | ↑ 1.07x | 424 | 41m | 16m ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 45.73% | 82.88% | 82.93% | 82.93% | 2684 ms | ↑ 1.22x | 14 | 7h 13m | 4d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 44.33% | 89.27% | 96.90% | 96.90% | 2084 ms | → 1.00x | 4 | 23h 43m | 4d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 35.16% | 82.16% | 86.50% | 86.50% | 2243 ms | ↓ 0.60x | 75 | 1h 42m | 5d ago | 14m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 33.54% | 81.84% | 85.86% | 85.86% | 1606 ms | ↑ 1.09x | 17 | 8h 58m | 4d ago | 13m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 31.91% | 43.60% | 43.60% | 43.60% | 1133 ms | ↓ 0.90x | 1 | 4d 19h | 5d ago | 10m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 27.44% | 59.23% | 46.19% | 46.19% | 4498 ms | ↑ 1.08x | 58 | 4h 34m | 5d ago | 13m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 25.61% | 30.77% | 30.77% | 30.77% | 524 ms | → 1.02x | 2 | 3d 3h | 5d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 25.20% | 75.93% | 75.93% | 75.93% | 842 ms | ↓ 0.40x | 1 | 5d 6h | 5d ago | 10m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 20.93% | 84.68% | 86.63% | 86.63% | 624 ms | ↓ 0.76x | 3 | 1d 20h | 6d ago | 13m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 20.53% | 64.12% | 30.45% | 30.45% | 3890 ms | ↑ 2.50x | 23 | 10h 14m | 6d ago | 14m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 13.82% | 35.89% | 35.89% | 35.89% | 4699 ms | → 0.99x | 8 | 17h 58m | 6d ago | 9m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 7.72% | 8.56% | 8.56% | 8.56% | 3156 ms | ↓ 0.88x | 53 | 3h 35m | 51m ago | 9m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 4.47% | 81.01% | 81.41% | 81.41% | 2460 ms | ↑ 1.39x | 10 | 16h 14m | 7d ago | 14m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.66% | 9.75% | 28.77% | 28.77% | 4557 ms | ↑ 1.88x | 35 | 18h 41m | 2d ago | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.81% | 73.10% | 76.84% | 76.84% | 835 ms | ↓ 0.78x | 4 | 2d 10h | 18h ago | 13m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.81% | 30.96% | 65.76% | 65.76% | 2174 ms | ↓ 0.75x | 169 | 3h 7m | 4d ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 34.91% | 89.72% | 89.72% | — | — | 5 | 4d 14h | 23d ago | 26m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 74.29% | 74.29% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 33.45% | 79.87% | 79.87% | — | — | 27 | 20h 30m | 23d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 58.61% | 80.60% | 80.60% | — | — | 2 | 7d 11h | 15d ago | 15m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.18% | 6.18% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 12.89% | 13.57% | 13.57% | — | — | 11 | 2d 12h | 23d ago | 27m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.68% | 3.68% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 35.04% | 89.98% | 89.98% | — | — | 1 | 22d 22h | 23d ago | 23m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 39.49% | 39.49% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 27.42% | 27.42% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 28.88% | 80.76% | 80.76% | — | — | 110 | 5h 5m | 23d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 29.60% | 64.16% | 64.16% | — | — | 106 | 5h 16m | 23d ago | 15m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 35.26% | 33.63% | 33.63% | — | — | 1 | 22d 22h | 23d ago | 16m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 35.13% | 90.43% | 90.43% | — | — | 1 | 22d 22h | 23d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 2.83% | 68.10% | 68.10% | — | — | 29 | 1d | 29d ago | 25m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 35.09% | 83.53% | 83.53% | — | — | 1 | 22d 22h | 23d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.18% | 18.18% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 35.23% | 57.49% | 57.49% | — | — | 4 | 5d 17h | 23d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 40.49% | 40.49% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.93% | 3.94% | 3.94% | — | — | 3 | 9d 22h | 23d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 35.24% | 90.59% | 90.59% | — | — | 1 | 22d 22h | 23d ago | 17m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.85% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 23d ago | 22m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 25.54% | 56.27% | 56.27% | — | — | 2 | 12d 8h | 23d ago | 24m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.72% | 31.72% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 15.22% | 2.23% | 2.23% | — | — | 7 | 3d 21h | 23d ago | 23m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 25.11% | 42.81% | 42.81% | — | — | 4 | 5d 19h | 19d ago | 14m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 59.21% | 59.21% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 20.79% | 27.76% | 27.76% | — | — | 94 | 6h 22m | 23d ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 35.24% | 32.56% | 32.56% | — | — | 1 | 22d 22h | 23d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.85% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 23d ago | 23m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 62.06% | 62.06% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.73% | 6.73% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 71.39% | 71.39% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 34.96% | 90.37% | 90.37% | — | — | 5 | 4d 14h | 23d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 9.47% | 9.47% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 29.48% | 86.24% | 86.24% | — | — | 113 | 4h 55m | 23d ago | 17m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 11h | 8d ago | 10m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 35.67% | 35.67% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 57.40% | 57.40% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 13.38% | 83.17% | 83.17% | — | — | 38 | 17h 10m | 23d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 50.69% | 50.69% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 20h | 26d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 46.07% | 46.07% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 35.07% | 90.38% | 90.38% | — | — | 2 | 11d 11h | 23d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 63.82% | 63.82% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.80% | 42.40% | 42.40% | — | — | 2 | 14d 22h | 23d ago | 26m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 22h | 26d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 20h | 26d ago | 17m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 11h | 8d ago | 17m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 22.43% | 35.49% | 35.49% | — | — | 186 | 3h 6m | 23d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 16.05% | 2.83% | 2.83% | — | — | 4 | 6d 18h | 23d ago | 16m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 45.29% | 45.29% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 33.64% | 90.32% | 90.32% | — | — | 21 | 1d 2h | 23d ago | 22m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 35.24% | 36.40% | 36.40% | — | — | 1 | 22d 22h | 23d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 35.05% | 90.26% | 90.26% | — | — | 3 | 7d 15h | 23d ago | 27m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 35.08% | 38.71% | 38.71% | — | — | 1 | 22d 22h | 23d ago | 26m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 2.61% | 51.62% | 51.62% | — | — | 1 | 29d 12h | 30d ago | 16m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 32.19% | 87.72% | 87.72% | — | — | 61 | 9h 4m | 23d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.42% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 24d ago | 22m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 58.36% | 79.38% | 79.38% | — | — | 3 | 4d 21h | 14d ago | 16m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 20h | 26d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 7.34% | 86.03% | 86.03% | — | — | 1 | 28d 4h | 28d ago | 22m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 35.10% | 67.83% | 67.83% | — | — | 2 | 11d 11h | 23d ago | 14m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.72% | 3.72% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 47.08% | 47.08% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 34.43% | 84.32% | 84.32% | — | — | 18 | 1d 7h | 23d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 19.58% | 64.31% | 64.31% | — | — | 201 | 2h 58m | 23d ago | 23m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.85% | 30.85% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 17.02% | 17.07% | 17.07% | — | — | 24 | 1d | 23d ago | 13m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 7.14% | 15.49% | 15.49% | — | — | 139 | 4h 46m | 23d ago | 15m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 44.33% | 44.37% | 44.37% | — | — | 10 | 1d 13h | 11d ago | 13m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.28% | 26.28% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 11h | 9d ago | 10m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 25m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 34.33% | 71.97% | 71.97% | — | — | 20 | 1d 3h | 23d ago | 15m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 20.70% | 20.75% | 20.75% | — | — | 3 | 6d 6h | 18d ago | 11m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.04% | 19.04% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 53.97% | 53.97% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 11h | 8d ago | 10m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 60.14% | 60.14% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 35.09% | 53.25% | 53.25% | — | — | 2 | 11d 11h | 23d ago | 13m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 45.26% | 68.13% | 68.13% | — | — | 5 | 3d 19h | 19d ago | 14m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 35.20% | 6.05% | 6.05% | — | — | 2 | 11d 11h | 23d ago | 17m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 23h | 28d ago | 13m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 25m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 34.97% | 90.47% | 90.47% | — | — | 2 | 11d 11h | 23d ago | 25m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 34.93% | 89.29% | 89.29% | — | — | 3 | 7d 15h | 23d ago | 25m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 20.70% | 69.64% | 69.64% | — | — | 189 | 3h 5m | 23d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 81.77% | 81.77% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 34.82% | 89.13% | 89.13% | — | — | 8 | 2d 21h | 23d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.47% | 21.47% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.72% | 7.72% | 7.72% | — | — | 3 | 7d 21h | 21d ago | 26m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 24.74% | 4.42% | 4.42% | — | — | 6 | 3d 15h | 12d ago | 23m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 35.16% | 37.42% | 37.42% | — | — | 3 | 7d 15h | 23d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 2.14% | 74.44% | 74.44% | — | — | 1 | 29d 15h | 30d ago | 25m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.96% | 8.96% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 28.86% | 71.63% | 71.63% | — | — | 118 | 4h 44m | 23d ago | 27m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 11h | 8d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 73.73% | 73.73% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 19.24% | 19.38% | 19.38% | — | — | 2 | 4d 5h | 8d ago | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 35.12% | 53.97% | 53.97% | — | — | 2 | 11d 11h | 23d ago | 14m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 43.87% | 43.70% | 43.70% | — | — | 3 | 7d 13h | 22d ago | 13m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 16.34% | 16.34% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 26m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.59% | 19.59% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 39.63% | 26.35% | 26.35% | — | — | 3 | 6d 7h | 15d ago | 14m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.81% | 1.86% | 1.86% | — | — | 2 | 11d 18h | 23d ago | 11m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 10.05% | 10.10% | 10.10% | — | — | 2 | 11d 18h | 23d ago | 11m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 12.28% | 12.34% | 12.34% | — | — | 2 | 10d 7h | 20d ago | 10m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 54.45% | 54.45% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 35.00% | 90.43% | 90.43% | — | — | 2 | 11d 11h | 23d ago | 24m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 29.71% | 63.65% | 63.65% | — | — | 5 | 4d 19h | 24d ago | 14m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 42.84% | 90.62% | 90.62% | — | — | 6 | 3d 8h | 20d ago | 22m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 45.15% | 45.15% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 7.52% | 7.52% | 7.52% | — | — | 1 | 8d 18h | 9d ago | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 29.88% | 88.11% | 88.11% | — | — | 131 | 4h 12m | 23d ago | 17m ago |

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
