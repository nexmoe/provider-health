# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 332 🟢 operational · 83 🟡 degraded · 185 🔴 down · 0 ⚫ unknown

_Updated 2026-05-07 06:14 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (332)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 95.28% | 95.34% | 95.34% | 2956 ms | ↑ 1.26x | 2 | 6h 20m | 8d ago | 10m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 91.93% | 91.93% | 915 ms | ↓ 0.62x | 4 | 0s | 19d ago | 12m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.90% | 97.08% | 97.08% | 2992 ms | ↑ 1.20x | 2 | 0s | 19d ago | 22m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.75% | 98.81% | 98.81% | 4414 ms | ↑ 1.13x | 21 | 0s | 11d ago | 23m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1649 ms | ↓ 0.78x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 96.16% | 96.20% | 96.20% | 1884 ms | ↑ 1.16x | 1 | 18h 20m | 30d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2309 ms | → 1.00x | 0 | — | — | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.97% | 91.32% | 91.32% | 1960 ms | ↑ 1.34x | 0 | — | — | 24m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1369 ms | → 1.00x | 0 | — | — | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.76% | 99.78% | 99.78% | 1584 ms | → 1.05x | 6 | 0s | 20d ago | 11m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.24% | 94.29% | 94.29% | 1302 ms | → 1.04x | 8 | 4h 1m | 15d ago | 10m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1379 ms | → 1.00x | 0 | — | — | 9m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 99.83% | 97.71% | 97.71% | 2578 ms | → 1.03x | 4 | 0s | 11d ago | 11m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 96.44% | 96.44% | 96.44% | 1003 ms | ↓ 0.49x | 1 | 13h 57m | 14d ago | 9m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.89% | 99.89% | 919 ms | ↓ 0.70x | 2 | 9m | 10d ago | 11m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 3524 ms | → 1.00x | 0 | — | — | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.52% | 95.24% | 95.24% | 1575 ms | → 0.99x | 10 | 3m | 19d ago | 12m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2178 ms | → 1.00x | 0 | — | — | 9m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1946 ms | → 1.00x | 0 | — | — | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.42% | 97.39% | 97.39% | 3237 ms | ↑ 1.43x | 14 | 2m | 11d ago | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.22% | 95.29% | 95.29% | 1512 ms | ↑ 1.15x | 1 | 12h 47m | 20d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 88.29% | 75.23% | 75.23% | 3814 ms | ↑ 2.07x | 56 | 57m | 8d ago | 11m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2928 ms | → 1.00x | 0 | — | — | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.76% | 77.22% | 77.22% | 1488 ms | ↓ 0.83x | 5 | 2m | 9d ago | 13m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.69% | 96.79% | 96.79% | 2039 ms | ↑ 1.25x | 4 | 20m | 8d ago | 12m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 473 ms | ↓ 0.63x | 0 | — | — | 20m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.56% | 99.72% | 99.72% | 3675 ms | ↑ 1.42x | 9 | 3m | 18d ago | 20m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.43% | 98.57% | 98.57% | 1995 ms | ↓ 0.56x | 25 | 8m | 14d ago | 12m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 96.69% | 94.46% | 94.46% | 2525 ms | ↑ 1.11x | 57 | 7m | 19d ago | 11m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.72% | 97.93% | 97.93% | 3156 ms | ↑ 3.27x | 39 | 46m | 20d ago | 20m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2950 ms | → 1.00x | 0 | — | — | 8m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3154 ms | ↑ 1.11x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 3430 ms | ↑ 2.19x | 0 | — | — | 10m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 49.83% | 88.67% | 88.67% | 1788 ms | → 1.00x | 2 | 5d 12h | 19d ago | 13m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.76% | 99.46% | 99.46% | 2421 ms | ↑ 1.29x | 6 | 0s | 21d ago | 20m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.53% | 96.82% | 96.82% | 3585 ms | ↑ 1.24x | 38 | 1m | 17d ago | 12m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 93.83% | 93.88% | 93.88% | 1499 ms | → 0.98x | 3 | 11h 20m | 20d ago | 10m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1939 ms | → 1.00x | 0 | — | — | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 90.05% | 49.27% | 49.27% | 4127 ms | ↑ 2.00x | 120 | 15m | 10d ago | 20m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.62% | 97.45% | 97.45% | 3668 ms | ↑ 1.69x | 10 | 0s | 18d ago | 11m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2098 ms | → 1.00x | 0 | — | — | 8m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1599 ms | ↑ 1.29x | 0 | — | — | 9m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1934 ms | → 1.00x | 0 | — | — | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.83% | 47.69% | 47.69% | 970 ms | ↑ 1.27x | 47 | 5m | 16d ago | 13m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 98.94% | 96.87% | 96.87% | 3097 ms | ↑ 1.38x | 24 | 4m | 11d ago | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 86.99% | 44.69% | 44.69% | 1504 ms | ↑ 1.93x | 2 | 1d 9h | 21d ago | 13m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1947 ms | ↓ 0.92x | 0 | — | — | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.63% | 99.58% | 99.58% | 4012 ms | ↑ 1.29x | 10 | 0s | 19d ago | 19m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3018 ms | → 1.00x | 0 | — | — | 9m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.45% | 98.39% | 98.39% | 3581 ms | ↑ 1.46x | 13 | 2m | 11d ago | 12m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.86% | 96.74% | 96.74% | 3240 ms | ↑ 1.14x | 3 | 0s | 13d ago | 19m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 13.21% | 40.29% | 40.29% | 1484 ms | → 1.00x | 1 | 12d 1h | 30d ago | 19m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 94.73% | 96.24% | 96.24% | 1424 ms | ↓ 0.94x | 26 | 51m | 9d ago | 19m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 94.93% | 94.93% | 94.93% | 1398 ms | → 1.00x | 1 | 2h 40m | 18d ago | 9m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.76% | 78.88% | 78.88% | 2701 ms | ↑ 1.31x | 6 | 0s | 12d ago | 13m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 59.43% | 59.43% | 1756 ms | ↑ 1.06x | 5 | 2m | 15d ago | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2270 ms | → 1.00x | 0 | — | — | 9m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.22% | 75.41% | 75.41% | 3091 ms | ↑ 1.19x | 9 | 29m | 12d ago | 13m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1601 ms | → 1.00x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.90% | 97.90% | 97.90% | 3562 ms | ↑ 1.16x | 2 | 0s | 19d ago | 11m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4678 ms | → 1.01x | 0 | — | — | 8m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.86% | 91.65% | 91.65% | 1757 ms | ↑ 1.56x | 3 | 0s | 19d ago | 13m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.90% | 97.60% | 97.60% | 1418 ms | → 1.03x | 2 | 0s | 20d ago | 11m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2803 ms | → 1.00x | 0 | — | — | 8m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 97.37% | 96.81% | 96.81% | 2216 ms | ↑ 1.12x | 3 | 4h 3m | 22d ago | 11m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.64% | 39.30% | 39.30% | 1307 ms | ↑ 1.24x | 29 | 3m | 21d ago | 13m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.90% | 70.53% | 70.53% | 2340 ms | ↑ 1.39x | 2 | 0s | 19d ago | 13m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1464 ms | → 1.00x | 0 | — | — | 8m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 92.18% | 48.53% | 48.53% | 2145 ms | ↑ 1.74x | 16 | 2h 16m | 9d ago | 20m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.90% | 97.46% | 97.46% | 2568 ms | ↑ 1.68x | 2 | 0s | 19d ago | 12m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.73% | 45.52% | 45.52% | 2393 ms | ↑ 1.46x | 6 | 3m | 15d ago | 13m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 36.99% | 36.99% | 2004 ms | ↓ 0.89x | 1 | 0s | 21d ago | 20m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2928 ms | → 1.00x | 0 | — | — | 8m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.76% | 77.48% | 77.48% | 2801 ms | ↑ 1.25x | 6 | 0s | 14d ago | 13m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.61% | 97.75% | 97.75% | 2156 ms | ↑ 1.20x | 15 | 17m | 19d ago | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.66% | 56.70% | 56.70% | 2816 ms | ↑ 1.68x | 7 | 3m | 16d ago | 13m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2798 ms | → 1.00x | 0 | — | — | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.69% | 99.05% | 99.05% | 1858 ms | ↑ 1.13x | 8 | 0s | 18d ago | 13m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.46% | 87.33% | 87.33% | 3708 ms | ↑ 1.34x | 4 | 28m | 19d ago | 12m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 47.23% | 47.23% | 47.23% | 564 ms | → 1.00x | 1 | 1d 24h | 20d ago | 10m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.80% | 99.50% | 99.50% | 2339 ms | ↑ 1.74x | 5 | 0s | 19d ago | 13m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.92% | 97.68% | 97.68% | 3484 ms | ↑ 1.94x | 2 | 5h 35m | 19d ago | 13m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 58.45% | 22.54% | 22.54% | 2195 ms | ↓ 0.92x | 2 | 4d 13h | 19d ago | 12m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.71% | 99.71% | 3113 ms | ↑ 1.55x | 1 | 0s | 12d ago | 22m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1719 ms | → 1.00x | 0 | — | — | 8m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.86% | 97.90% | 97.90% | 4522 ms | ↑ 1.22x | 55 | 2m | 18d ago | 23m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.94% | 99.94% | 881 ms | ↓ 0.87x | 1 | 0s | 16d ago | 20m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.80% | 65.07% | 65.07% | 2657 ms | ↑ 1.28x | 5 | 0s | 19d ago | 12m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 83.20% | 83.24% | 83.24% | 262 ms | ↓ 0.67x | 10 | 7h 2m | 18d ago | 10m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 2072 ms | → 1.00x | 0 | — | — | 8m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.80% | 99.94% | 99.94% | 2594 ms | ↑ 1.24x | 5 | 0s | 12d ago | 23m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.03% | 99.69% | 99.69% | 4531 ms | ↑ 2.97x | 7 | 31m | 17d ago | 23m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.39% | 86.46% | 86.46% | 3102 ms | ↑ 2.45x | 17 | 0s | 8d ago | 13m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 50.77% | 67.74% | 67.74% | 2206 ms | → 1.00x | 3 | 4d 5h | 14d ago | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2112 ms | → 1.00x | 0 | — | — | 8m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 70.15% | 70.19% | 70.19% | 1972 ms | ↑ 1.41x | 2 | 3d 2h | 22d ago | 11m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2788 ms | → 0.97x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1325 ms | ↑ 1.35x | 0 | — | — | 11m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.90% | 98.90% | 1934 ms | ↑ 2.06x | 0 | — | — | 13m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.80% | 98.33% | 98.33% | 1874 ms | ↑ 1.27x | 5 | 0s | 19d ago | 12m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.95% | 94.98% | 94.98% | 1094 ms | ↓ 0.31x | 26 | 42m | 20d ago | 11m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1080 ms | → 1.00x | 0 | — | — | 9m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2376 ms | → 0.95x | 0 | — | — | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2762 ms | → 0.99x | 0 | — | — | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.69% | 98.28% | 98.28% | 815 ms | ↑ 1.13x | 5 | 12m | 18d ago | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.59% | 98.83% | 98.83% | 975 ms | ↓ 0.82x | 11 | 0s | 10d ago | 14m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1206 ms | → 1.00x | 0 | — | — | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 58.39% | 10.97% | 10.97% | 1190 ms | ↑ 1.06x | 1 | 9d 3h | 30d ago | 13m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.97% | 99.99% | 99.99% | 972 ms | ↑ 1.29x | 0 | — | — | 24m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.82% | 99.82% | 670 ms | → 1.02x | 1 | 0s | 24d ago | 23m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.97% | 99.93% | 99.93% | 1307 ms | ↑ 1.22x | 0 | — | — | 22m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 94.95% | 95.01% | 95.01% | 2643 ms | ↑ 1.34x | 1 | 13h 10m | 19d ago | 10m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.50% | 97.47% | 97.47% | 2182 ms | ↑ 1.58x | 8 | 44m | 19d ago | 12m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.63% | 99.72% | 99.72% | 538 ms | ↓ 0.78x | 8 | 3m | 13d ago | 23m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1608 ms | → 1.00x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.03% | 98.55% | 98.55% | 4513 ms | ↑ 1.27x | 28 | 0s | 19d ago | 24m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3898 ms | ↑ 2.39x | 1 | 0s | 26d ago | 22m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1416 ms | → 1.00x | 0 | — | — | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.88% | 99.62% | 99.62% | 3151 ms | ↑ 1.96x | 4 | 1h 8m | 19d ago | 19m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 97.39% | 99.27% | 99.27% | 2178 ms | ↑ 1.08x | 48 | 6m | 20d ago | 13m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 45.13% | 33.43% | 33.43% | 856 ms | ↑ 1.12x | 1 | 12d 1h | 30d ago | 23m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.25% | 97.91% | 97.91% | 4463 ms | ↑ 2.49x | 20 | 30s | 19d ago | 12m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 85.15% | 85.19% | 85.19% | 2102 ms | ↑ 1.39x | 6 | 10h 26m | 9d ago | 10m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1288 ms | → 0.98x | 1 | 0s | 23d ago | 22m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.80% | 99.89% | 99.89% | 634 ms | ↓ 0.52x | 5 | 0s | 12d ago | 22m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.80% | 99.80% | 2375 ms | ↑ 1.37x | 4 | 0s | 19d ago | 12m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.86% | 99.85% | 99.85% | 3348 ms | ↑ 1.16x | 3 | 0s | 19d ago | 19m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.83% | 99.85% | 99.85% | 2038 ms | ↑ 1.07x | 3 | 3m | 18d ago | 13m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.13% | 99.19% | 99.19% | 1749 ms | ↑ 1.23x | 3 | 37m | 19d ago | 10m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.90% | 87.56% | 87.56% | 1313 ms | ↑ 1.09x | 2 | 0s | 13d ago | 12m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.50% | 99.57% | 99.57% | 1538 ms | ↑ 1.07x | 13 | 46s | 22d ago | 23m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.47% | 95.23% | 95.23% | 2546 ms | → 0.99x | 17 | 17m | 11d ago | 12m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 54.20% | 54.20% | 3497 ms | ↑ 1.44x | 3 | 0s | 19d ago | 13m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 58.37% | 10.03% | 10.03% | 3040 ms | ↑ 2.16x | 2 | 4d 14h | 18d ago | 13m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1225 ms | → 1.00x | 0 | — | — | 8m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.77% | 99.73% | 99.73% | 2583 ms | ↑ 1.12x | 6 | 0s | 12d ago | 22m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1698 ms | ↓ 0.67x | 0 | — | — | 9m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 57.98% | 9.82% | 9.82% | 1990 ms | ↓ 0.90x | 12 | 18h 19m | 19d ago | 13m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.69% | 98.62% | 98.62% | 2758 ms | ↑ 1.73x | 8 | 0s | 19d ago | 12m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1444 ms | → 1.00x | 0 | — | — | 9m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.90% | 99.91% | 99.91% | 2106 ms | ↑ 1.42x | 2 | 0s | 17d ago | 23m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.06% | 99.54% | 99.54% | 2009 ms | ↑ 1.25x | 4 | 58m | 24d ago | 23m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2006 ms | ↓ 0.89x | 0 | — | — | 8m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.80% | 98.91% | 98.91% | 2206 ms | → 1.03x | 5 | 0s | 19d ago | 22m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.83% | 97.25% | 97.25% | 1882 ms | ↑ 1.09x | 4 | 0s | 20d ago | 11m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 98.87% | 96.78% | 96.78% | 2483 ms | ↑ 1.37x | 8 | 30m | 19d ago | 11m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 97.81% | 94.00% | 94.00% | 1148 ms | ↓ 0.82x | 45 | 4m | 18d ago | 11m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 63.15% | 63.15% | 967 ms | ↑ 1.12x | 3 | 0s | 19d ago | 13m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.83% | 98.42% | 98.42% | 2117 ms | → 1.03x | 4 | 0s | 20d ago | 21m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.73% | 75.83% | 75.83% | 2582 ms | ↑ 1.31x | 7 | 0s | 12d ago | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.73% | 99.77% | 99.77% | 1904 ms | → 1.00x | 6 | 2m | 19d ago | 22m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.87% | 99.67% | 99.67% | 3516 ms | ↑ 1.89x | 2 | 5m | 20d ago | 23m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3090 ms | → 1.00x | 0 | — | — | 9m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.86% | 99.86% | 99.86% | 1266 ms | ↓ 0.93x | 3 | 0s | 19d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 78.80% | 83.42% | 83.42% | 1225 ms | ↓ 0.22x | 293 | 12m | 10d ago | 22m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 85.10% | 87.03% | 87.03% | 3594 ms | ↓ 0.64x | 290 | 5m | 13d ago | 12m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.93% | 99.13% | 99.13% | 2223 ms | ↑ 1.42x | 1 | 0s | 19d ago | 13m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.93% | 61.01% | 61.01% | 960 ms | ↓ 0.56x | 1 | 0s | 19d ago | 13m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.90% | 96.05% | 96.05% | 2130 ms | ↑ 1.99x | 2 | 0s | 19d ago | 13m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 3121 ms | → 1.00x | 0 | — | — | 8m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1658 ms | → 1.00x | 0 | — | — | 9m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.17% | 90.50% | 90.50% | 3574 ms | ↑ 1.15x | 57 | 5m | 10d ago | 11m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1274 ms | → 1.00x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.93% | 50.76% | 50.76% | 2345 ms | ↑ 2.09x | 1 | 0s | 19d ago | 13m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.93% | 98.06% | 98.06% | 1360 ms | ↓ 0.88x | 1 | 0s | 19d ago | 12m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.56% | 99.13% | 99.13% | 3928 ms | ↑ 1.71x | 9 | 7m | 16d ago | 18m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.93% | 99.72% | 99.72% | 3906 ms | ↑ 1.83x | 1 | 0s | 28d ago | 23m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 2067 ms | ↑ 1.06x | 2 | 0s | 19d ago | 12m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1155 ms | → 1.00x | 0 | — | — | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 83.81% | 41.23% | 41.23% | 4023 ms | ↑ 1.36x | 5 | 15h 36m | 18d ago | 12m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2358 ms | → 1.00x | 0 | — | — | 9m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.97% | 99.92% | 99.92% | 190 ms | ↓ 0.39x | 0 | — | — | 23m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 787 ms | → 1.00x | 0 | — | — | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.86% | 99.94% | 99.94% | 2342 ms | ↑ 1.60x | 2 | 1m | 19d ago | 19m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.77% | 99.47% | 99.47% | 4128 ms | ↑ 1.81x | 6 | 0s | 18d ago | 23m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.14% | 74.83% | 74.83% | 1585 ms | ↓ 0.70x | 73 | 26m | 18d ago | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.93% | 82.86% | 82.86% | 2916 ms | ↑ 2.36x | 1 | 0s | 19d ago | 13m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1100 ms | → 1.00x | 0 | — | — | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.81% | 95.51% | 95.51% | 1413 ms | ↑ 1.29x | 31 | 58s | 19d ago | 13m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.90% | 99.97% | 99.97% | 935 ms | ↓ 0.76x | 2 | 0s | 19d ago | 22m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.62% | 97.98% | 97.98% | 3692 ms | ↑ 2.12x | 9 | 1m | 19d ago | 12m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.18% | 90.05% | 90.05% | 3705 ms | ↑ 1.19x | 23 | 0s | 8d ago | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.70% | 97.95% | 97.95% | 1232 ms | ↓ 0.91x | 8 | 0s | 19d ago | 22m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 44.75% | 9.22% | 9.22% | 2358 ms | ↑ 1.19x | 1 | 12d 1h | 30d ago | 13m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2420 ms | → 1.00x | 0 | — | — | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.83% | 99.92% | 99.92% | 1346 ms | ↑ 1.12x | 4 | 0s | 19d ago | 11m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.90% | 54.09% | 54.09% | 2373 ms | ↑ 1.56x | 2 | 0s | 19d ago | 13m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.80% | 99.73% | 99.73% | 3208 ms | ↑ 1.54x | 5 | 0s | 12d ago | 22m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.50% | 61.04% | 61.04% | 928 ms | ↓ 0.92x | 12 | 2m | 27d ago | 23m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.90% | 98.97% | 98.97% | 1307 ms | → 1.00x | 2 | 0s | 19d ago | 22m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 45.15% | 7.71% | 7.71% | 993 ms | ↓ 0.93x | 1 | 12d 1h | 30d ago | 22m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1141 ms | → 1.00x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.56% | 98.56% | 98.56% | 1903 ms | ↓ 0.80x | 1 | 3h 45m | 12d ago | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1566 ms | ↓ 0.76x | 0 | — | — | 9m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2298 ms | → 1.00x | 0 | — | — | 9m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.24% | 92.53% | 92.53% | 4154 ms | ↓ 0.85x | 129 | 18m | 18d ago | 22m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.98% | 99.98% | 3692 ms | ↑ 1.66x | 1 | 0s | 19d ago | 12m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.56% | 98.89% | 98.89% | 2045 ms | ↑ 1.44x | 11 | 55s | 13d ago | 12m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 38.41% | 19.00% | 19.00% | 3076 ms | ↑ 1.16x | 2 | 7d 10h | 15d ago | 23m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.53% | 99.52% | 99.52% | 1442 ms | ↑ 1.24x | 6 | 12m | 22d ago | 23m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.39% | 99.39% | 1413 ms | ↑ 1.36x | 0 | — | — | 22m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 612 ms | → 0.99x | 1 | 0s | 23d ago | 24m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.66% | 91.06% | 91.06% | 1540 ms | ↓ 0.70x | 30 | 5m | 7d ago | 22m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.29% | 97.34% | 97.34% | 3122 ms | ↑ 1.23x | 1 | 9h 60m | 25d ago | 10m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.61% | 99.66% | 99.66% | 3304 ms | ↑ 1.93x | 2 | 25m | 19d ago | 10m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.22% | 84.41% | 84.41% | 1561 ms | ↑ 1.09x | 16 | 4m | 19d ago | 12m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.40% | 99.78% | 99.78% | 1609 ms | ↑ 1.19x | 17 | 0s | 27d ago | 22m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 98.56% | 99.43% | 99.43% | 1193 ms | ↑ 1.17x | 35 | 2m | 23d ago | 23m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2098 ms | → 1.00x | 0 | — | — | 8m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.83% | 99.70% | 99.70% | 959 ms | → 1.00x | 3 | 3m | 24d ago | 23m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.80% | 99.86% | 99.86% | 3621 ms | ↑ 2.28x | 5 | 0s | 11d ago | 20m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.56% | 99.81% | 99.81% | 817 ms | ↓ 0.93x | 12 | 0s | 21d ago | 21m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.83% | 98.54% | 98.54% | 2215 ms | ↑ 1.10x | 4 | 0s | 19d ago | 12m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.46% | 96.50% | 96.50% | 1772 ms | ↑ 1.29x | 14 | 59m | 12d ago | 11m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.57% | 91.12% | 91.12% | 4340 ms | ↑ 1.87x | 11 | 54s | 19d ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 807 ms | → 1.00x | 0 | — | — | 9m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2621 ms | → 1.00x | 0 | — | — | 8m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.66% | 98.56% | 98.56% | 628 ms | → 1.04x | 6 | 5m | 20d ago | 13m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.53% | 98.61% | 98.61% | 2969 ms | ↑ 1.16x | 12 | 50s | 11d ago | 21m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2007 ms | → 1.00x | 0 | — | — | 9m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 657 ms | → 1.00x | 0 | — | — | 9m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 45.02% | 19.59% | 19.59% | 859 ms | → 1.04x | 2 | 6d 1h | 8d ago | 21m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.80% | 99.75% | 99.75% | 1413 ms | ↓ 0.89x | 4 | 3m | 19d ago | 12m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.86% | 97.73% | 97.73% | 1697 ms | ↑ 1.21x | 3 | 0s | 19d ago | 12m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.90% | 99.91% | 99.91% | 1621 ms | ↑ 1.36x | 2 | 0s | 21d ago | 21m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.86% | 85.31% | 85.31% | 3226 ms | ↑ 1.50x | 3 | 0s | 12d ago | 13m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.92% | 99.96% | 99.96% | 1614 ms | ↑ 1.08x | 1 | 0s | 21d ago | 10m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 91.89% | 96.10% | 96.10% | 1955 ms | ↑ 1.48x | 5 | 15h 59m | 10d ago | 13m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.63% | 99.85% | 99.85% | 1928 ms | ↑ 1.63x | 4 | 15m | 16d ago | 21m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 45.06% | 7.71% | 7.71% | 2847 ms | ↑ 1.20x | 3 | 4d | 12d ago | 22m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1039 ms | ↓ 0.50x | 0 | — | — | 9m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.73% | 99.83% | 99.83% | 2318 ms | ↑ 1.43x | 2 | 30m | 14d ago | 21m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 58.35% | 9.89% | 9.89% | 2095 ms | ↓ 0.94x | 3 | 3d 1h | 14d ago | 13m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.83% | 99.87% | 99.87% | 3538 ms | ↑ 1.85x | 4 | 0s | 11d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.81% | 94.85% | 94.85% | 1640 ms | → 0.99x | 4 | 5h 15m | 21d ago | 10m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3098 ms | → 1.00x | 0 | — | — | 9m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.76% | 99.75% | 99.75% | 3839 ms | ↑ 2.44x | 4 | 5m | 19d ago | 11m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.43% | 99.88% | 99.88% | 1495 ms | ↑ 1.30x | 3 | 1h 27m | 10d ago | 22m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.91% | 99.91% | 3148 ms | ↑ 2.11x | 1 | 0s | 21d ago | 21m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.56% | 99.72% | 99.72% | 2665 ms | ↑ 2.00x | 5 | 14m | 21d ago | 21m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.90% | 97.45% | 97.45% | 1149 ms | ↓ 0.94x | 1 | 10m | 20d ago | 11m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.56% | 99.79% | 99.79% | 2507 ms | ↑ 1.25x | 11 | 15s | 15d ago | 19m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.93% | 99.81% | 99.81% | 2841 ms | ↑ 2.95x | 1 | 0s | 22d ago | 13m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.80% | 99.01% | 99.01% | 1538 ms | ↑ 1.35x | 5 | 0s | 18d ago | 22m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.93% | 99.99% | 99.99% | 361 ms | ↓ 0.51x | 1 | 0s | 27d ago | 22m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.80% | 95.75% | 98.64% | 98.64% | 3506 ms | ↑ 1.25x | 92 | 5m | 5d ago | 23m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.80% | 80.48% | 13.79% | 13.79% | 2182 ms | ↑ 1.12x | 4 | 1d | 5d ago | 24m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.73% | 99.73% | 99.73% | 4132 ms | ↑ 1.38x | 7 | 0s | 5d ago | 23m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.80% | 23.98% | 85.62% | 85.62% | 3476 ms | ↑ 1.09x | 2 | 10d | 23h ago | 22m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.80% | 45.04% | 7.72% | 7.72% | 1471 ms | ↑ 1.06x | 4 | 3d | 5d ago | 22m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.80% | 99.87% | 99.93% | 99.93% | 1399 ms | ↑ 2.73x | 3 | 0s | 5d ago | 22m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 99.03% | 99.59% | 99.59% | 2277 ms | ↑ 1.38x | 27 | 22s | 4d ago | 22m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.53% | 87.68% | 87.68% | 1662 ms | ↑ 1.24x | 12 | 50s | 4d ago | 22m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.87% | 99.91% | 99.91% | 2251 ms | ↑ 1.31x | 3 | 0s | 4d ago | 22m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.66% | 99.63% | 99.63% | 895 ms | ↓ 0.86x | 9 | 0s | 5d ago | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.87% | 98.73% | 98.73% | 1794 ms | ↑ 1.16x | 3 | 0s | 4d ago | 21m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 99.76% | 20.02% | 20.02% | 1617 ms | ↓ 0.91x | 6 | 0s | 4d ago | 20m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 45.57% | 7.75% | 7.75% | 1598 ms | ↓ 0.93x | 5 | 2d 9h | 2d ago | 19m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 44.95% | 7.64% | 7.64% | 2865 ms | → 1.03x | 2 | 6d 1h | 3d ago | 18m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.80% | 99.71% | 99.77% | 99.77% | 1796 ms | ↓ 0.81x | 4 | 0s | 5d ago | 14m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 56.96% | 9.68% | 9.68% | 1129 ms | ↓ 0.56x | 38 | 5h 49m | 13h ago | 19m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 44.72% | 8.05% | 8.05% | 2129 ms | ↑ 1.56x | 2 | 6d 1h | 5d ago | 13m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 58.35% | 10.76% | 10.76% | 1897 ms | ↓ 0.71x | 3 | 3d 1h | 2d ago | 13m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.83% | 52.94% | 52.94% | 3732 ms | ↑ 1.69x | 4 | 0s | 4d ago | 13m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 44.72% | 37.92% | 37.92% | 1350 ms | ↓ 0.51x | 3 | 4d | 3d ago | 12m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.80% | 97.68% | 97.68% | 3211 ms | ↑ 1.36x | 5 | 0s | 4d ago | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.80% | 85.02% | 80.41% | 80.41% | 4074 ms | ↓ 0.87x | 277 | 7m | 3d ago | 11m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.90% | 95.44% | 95.44% | 1630 ms | ↑ 1.41x | 2 | 0s | 5d ago | 12m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.76% | 98.83% | 98.83% | 2244 ms | ↑ 2.25x | 5 | 2m | 6d ago | 12m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 98.16% | 97.59% | 97.59% | 3573 ms | ↓ 0.94x | 45 | 2m | 4d ago | 11m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.80% | 65.26% | 65.88% | 65.88% | 1767 ms | ↑ 1.12x | 6 | 1d 5h | 18h ago | 12m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 91.81% | 92.69% | 92.69% | 4342 ms | ↑ 1.27x | 3 | 13h 10m | 4d ago | 11m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.86% | 99.91% | 99.91% | 2372 ms | ↑ 1.49x | 2 | 0s | 22h ago | 10m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.80% | 78.36% | 90.13% | 90.13% | 1551 ms | ↓ 0.41x | 15 | 13h 3m | 6d ago | 12m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.80% | 74.73% | 24.94% | 24.94% | 2930 ms | → 1.03x | 11 | 11h 4m | 6d ago | 13m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.80% | 91.10% | 92.16% | 92.16% | 2614 ms | ↑ 1.92x | 27 | 2h 57m | 6h ago | 12m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.59% | 99.63% | 99.63% | 3035 ms | ↑ 2.35x | 8 | 0s | 4d ago | 10m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.80% | 98.31% | 98.31% | 2290 ms | ↑ 1.68x | 5 | 0s | 2d ago | 12m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.92% | 99.92% | 99.92% | 2014 ms | ↑ 1.10x | 1 | 0s | 5h ago | 9m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 98.74% | 93.54% | 93.54% | 4646 ms | ↑ 1.51x | 30 | 3m | 3d ago | 11m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.69% | 99.69% | 99.69% | 99.69% | 790 ms | → 1.00x | 1 | 0s | 4d ago | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.69% | 99.69% | 99.69% | 99.69% | 1073 ms | → 1.00x | 1 | 0s | 22h ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.69% | 99.44% | 99.72% | 99.72% | 4323 ms | ↑ 1.07x | 1 | 0s | 4d ago | 9m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.60% | 99.30% | 99.71% | 99.71% | 3568 ms | ↑ 1.80x | 5 | 1h | 16h ago | 22m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.63% | 90.80% | 90.80% | 1041 ms | → 1.01x | 4 | 30m | 1d ago | 22m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.46% | 99.16% | 99.16% | 2208 ms | ↑ 1.67x | 14 | 43s | 4d ago | 22m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.46% | 99.90% | 99.90% | 2811 ms | ↑ 1.45x | 12 | 2m | 4d ago | 22m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.20% | 99.26% | 99.26% | 2355 ms | ↓ 0.93x | 11 | 3m | 1d ago | 22m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 45.00% | 21.28% | 21.28% | 3034 ms | ↑ 1.22x | 2 | 6d 1h | 1d ago | 21m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.80% | 99.83% | 99.83% | 4604 ms | ↑ 2.09x | 5 | 0s | 3d ago | 18m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.60% | 99.76% | 99.71% | 99.71% | 3328 ms | ↑ 1.63x | 6 | 0s | 3d ago | 18m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.68% | 98.96% | 98.96% | 3568 ms | ↑ 2.05x | 9 | 32m | 3d ago | 19m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.85% | 82.39% | 82.39% | 3698 ms | → 0.98x | 32 | 19s | 3d ago | 19m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.60% | 96.81% | 96.30% | 96.30% | 4143 ms | ↑ 1.65x | 40 | 15m | 23h ago | 13m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.60% | 99.66% | 98.36% | 98.36% | 3149 ms | ↑ 1.71x | 8 | 3m | 13h ago | 12m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.60% | 94.29% | 94.35% | 94.35% | 3192 ms | ↑ 1.25x | 5 | 3h 2m | 5d ago | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.60% | 94.87% | 94.94% | 94.94% | 2191 ms | ↓ 0.92x | 5 | 2h 34m | 4d ago | 10m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.11% | 99.05% | 99.05% | 1040 ms | ↓ 0.54x | 22 | 1m | 3d ago | 11m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.60% | 99.76% | 98.45% | 98.45% | 2293 ms | ↑ 1.37x | 5 | 4m | 13h ago | 12m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.60% | 99.35% | 99.03% | 99.03% | 3827 ms | ↑ 1.82x | 18 | 0s | 5d ago | 12m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.60% | 94.34% | 94.40% | 94.40% | 2981 ms | ↑ 1.18x | 6 | 2h 49m | 2d ago | 10m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.63% | 99.68% | 99.68% | 993 ms | ↑ 1.27x | 6 | 2m | 4d ago | 10m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.60% | 93.75% | 93.82% | 93.82% | 1044 ms | ↓ 0.41x | 4 | 4h 8m | 7d ago | 9m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.60% | 99.60% | 99.60% | 99.60% | 3100 ms | → 1.00x | 1 | 0s | 2d ago | 9m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.44% | 99.44% | 99.44% | 99.44% | 863 ms | → 1.00x | 1 | 0s | 2d ago | 8m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.41% | 98.83% | 99.65% | 99.65% | 4280 ms | ↑ 1.30x | 33 | 37s | 3d ago | 23m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.41% | 50.89% | 77.98% | 77.98% | 186 ms | ↓ 0.71x | 7 | 1d 17h | 3d ago | 23m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.41% | 97.63% | 99.44% | 99.44% | 4274 ms | ↑ 1.57x | 59 | 2m | 3d ago | 23m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.40% | 44.60% | 7.55% | 7.55% | 2548 ms | ↑ 1.32x | 6 | 2d | 4d ago | 13m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.40% | 99.54% | 99.54% | 99.54% | 4573 ms | → 1.01x | 3 | 0s | 5d ago | 8m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.40% | 99.59% | 99.73% | 99.73% | 2879 ms | ↑ 1.69x | 9 | 4m | 3d ago | 11m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.40% | 99.69% | 99.82% | 99.82% | 1471 ms | ↑ 1.22x | 7 | 1m | 4d ago | 12m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.40% | 99.62% | 99.71% | 99.71% | 3989 ms | ↑ 2.35x | 10 | 0s | 3d ago | 11m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.40% | 44.68% | 21.44% | 21.44% | 1233 ms | ↑ 1.29x | 4 | 3d | 4d ago | 12m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.40% | 99.66% | 97.60% | 97.60% | 2870 ms | ↑ 1.64x | 8 | 1m | 3d ago | 11m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.40% | 99.32% | 98.36% | 98.36% | 3603 ms | ↑ 2.50x | 18 | 33s | 4d ago | 11m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.40% | 98.02% | 96.74% | 96.74% | 3819 ms | ↑ 1.37x | 47 | 2m | 7d ago | 11m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.37% | 99.37% | 99.37% | 99.37% | 1615 ms | → 1.00x | 2 | 0s | 4d ago | 9m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.37% | 99.37% | 99.37% | 99.37% | 1575 ms | → 1.00x | 1 | 19m | 18h ago | 9m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.21% | 99.43% | 98.92% | 98.92% | 2915 ms | ↑ 1.14x | 13 | 5m | 2d ago | 22m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.20% | 85.15% | 64.79% | 64.79% | 4310 ms | → 0.97x | 300 | 5m | 2d ago | 19m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.19% | 99.80% | 98.71% | 98.71% | 1487 ms | ↑ 1.61x | 5 | 0s | 1h ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.19% | 99.49% | 99.49% | 99.49% | 1075 ms | ↓ 0.33x | 3 | 20m | 4d ago | 9m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.19% | 99.45% | 99.53% | 99.53% | 999 ms | → 0.96x | 11 | 7m | 13h ago | 11m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.19% | 56.96% | 57.52% | 57.52% | 2344 ms | ↑ 1.18x | 21 | 10h 41m | 5d ago | 11m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.19% | 98.74% | 96.82% | 96.82% | 3905 ms | ↑ 2.22x | 27 | 3m | 3d ago | 11m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.19% | 99.73% | 99.70% | 99.70% | 4128 ms | ↑ 2.53x | 7 | 0s | 3d ago | 11m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.19% | 58.12% | 17.99% | 17.99% | 2106 ms | → 1.03x | 7 | 1d 7h | 3d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.19% | 99.19% | 99.19% | 99.19% | 2138 ms | → 1.00x | 1 | 20m | 2d ago | 9m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.19% | 99.19% | 99.19% | 99.19% | 2798 ms | → 1.00x | 1 | 20m | 1d ago | 9m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.01% | 99.54% | 99.60% | 99.60% | 891 ms | ↑ 1.20x | 7 | 0s | 3d ago | 23m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.00% | 44.20% | 7.53% | 7.53% | 2828 ms | ↑ 1.26x | 25 | 11h 36m | 15h ago | 21m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (83)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.99% | 99.66% | 66.15% | 66.15% | 2632 ms | ↑ 1.32x | 8 | 2m | 1h ago | 13m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.99% | 99.63% | 63.34% | 63.34% | 2004 ms | ↑ 1.74x | 9 | 1m | 4d ago | 12m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.81% | 99.16% | 99.84% | 99.84% | 4446 ms | ↑ 1.92x | 24 | 0s | 1d ago | 23m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.80% | 99.36% | 97.57% | 97.57% | 3770 ms | ↑ 1.27x | 16 | 3m | 2d ago | 18m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.52% | 95.83% | 95.83% | 2088 ms | ↑ 1.11x | 8 | 12m | 3d ago | 12m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.79% | 99.49% | 74.70% | 74.70% | 1526 ms | ↑ 2.41x | 7 | 17m | 7d ago | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.79% | 94.59% | 94.63% | 94.63% | 1423 ms | ↓ 0.80x | 2 | 13h 21m | 4d ago | 11m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.62% | 44.90% | 77.36% | 77.36% | 3639 ms | ↑ 1.14x | 3 | 4d 1h | 4d ago | 23m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.61% | 98.93% | 99.25% | 99.25% | 2010 ms | ↓ 0.70x | 31 | 0s | 2d ago | 23m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 98.61% | 99.67% | 99.61% | 99.61% | 2697 ms | ↑ 1.39x | 5 | 16m | 10h ago | 23m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.61% | 98.83% | 96.26% | 96.26% | 3325 ms | ↑ 1.41x | 25 | 6m | 7d ago | 22m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.59% | 44.52% | 7.69% | 7.69% | 3308 ms | ↑ 1.67x | 5 | 2d 10h | 8h ago | 13m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.39% | 56.85% | 53.73% | 53.73% | 2580 ms | ↑ 1.20x | 14 | 16h 15m | 4d ago | 13m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.39% | 57.73% | 41.71% | 41.71% | 3006 ms | ↑ 1.31x | 19 | 11h 35m | 3d ago | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.39% | 98.71% | 88.93% | 88.93% | 2025 ms | ↓ 0.92x | 30 | 2m | 14h ago | 12m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 98.37% | 98.37% | 98.37% | 98.37% | 1795 ms | → 1.00x | 4 | 0s | 3d ago | 8m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.02% | 94.92% | 98.74% | 98.74% | 4256 ms | ↑ 1.28x | 98 | 7m | 1d ago | 23m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.02% | 84.43% | 83.35% | 83.35% | 2063 ms | ↓ 0.73x | 297 | 6m | 3d ago | 23m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 97.99% | 99.39% | 97.58% | 97.58% | 1244 ms | ↑ 1.53x | 9 | 18m | 17h ago | 13m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.98% | 90.96% | 90.99% | 90.99% | 2186 ms | ↑ 1.07x | 17 | 2h 30m | 4d ago | 11m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.82% | 98.69% | 97.64% | 97.64% | 4372 ms | ↑ 1.35x | 36 | 33s | 8h ago | 22m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.63% | 73.96% | 73.97% | 73.97% | 3647 ms | ↓ 0.89x | 293 | 12m | 2d ago | 24m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 97.59% | 52.65% | 26.64% | 26.64% | 3070 ms | ↑ 1.06x | 21 | 12h 48m | 23h ago | 13m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.19% | 89.22% | 76.35% | 76.35% | 3264 ms | ↑ 1.38x | 192 | 9m | 3d ago | 19m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 97.18% | 93.47% | 93.54% | 93.54% | 1841 ms | ↓ 0.81x | 16 | 51m | 4d ago | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 97.18% | 96.06% | 60.90% | 60.90% | 850 ms | ↓ 0.93x | 22 | 1h 20m | 1d ago | 13m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.63% | 99.13% | 99.83% | 99.83% | 3519 ms | ↑ 2.11x | 25 | 0s | 3d ago | 23m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.57% | 32.17% | 21.47% | 21.47% | 3375 ms | ↓ 0.94x | 20 | 21h 3m | 3d ago | 11m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 96.41% | 99.26% | 38.87% | 38.87% | 1249 ms | ↓ 0.90x | 8 | 33m | 12h ago | 21m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.37% | 84.87% | 81.17% | 81.17% | 4743 ms | → 1.04x | 314 | 4m | 2d ago | 12m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 96.34% | 96.15% | 96.54% | 96.54% | 2544 ms | → 1.05x | 7 | 6m | 3d ago | 9m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.22% | 97.95% | 98.67% | 98.67% | 3806 ms | → 1.02x | 51 | 4m | 19h ago | 22m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 96.02% | 41.95% | 7.17% | 7.17% | 961 ms | ↓ 0.79x | 68 | 4h 24m | 6h ago | 22m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 96.01% | 98.11% | 99.06% | 99.06% | 4346 ms | ↑ 1.87x | 32 | 11m | 12h ago | 21m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 96.01% | 99.26% | 97.01% | 97.01% | 4100 ms | ↑ 1.69x | 8 | 33m | 12h ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 95.97% | 83.62% | 58.42% | 58.42% | 4708 ms | ↑ 1.09x | 315 | 6m | 33m ago | 13m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 95.81% | 99.23% | 53.97% | 53.97% | 4321 ms | ↑ 1.77x | 9 | 29m | 12h ago | 21m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 95.81% | 97.98% | 99.25% | 99.25% | 4368 ms | ↑ 2.90x | 35 | 11m | 12h ago | 21m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 95.77% | 91.79% | 91.85% | 91.85% | 3431 ms | → 0.95x | 40 | 22m | 4d ago | 10m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 95.77% | 99.08% | 87.66% | 87.66% | 3686 ms | ↑ 1.84x | 19 | 9m | 15h ago | 11m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 95.56% | 69.39% | 33.01% | 33.01% | 3554 ms | ↑ 1.76x | 24 | 6h 7m | 3d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 95.36% | 97.17% | 97.24% | 97.24% | 3836 ms | ↑ 1.37x | 13 | 41m | 3d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 95.36% | 98.05% | 98.05% | 98.05% | 2654 ms | ↓ 0.80x | 12 | 18m | 3d ago | 9m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.24% | 95.11% | 91.46% | 91.46% | 1621 ms | ↓ 0.86x | 67 | 15m | 3d ago | 22m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.24% | 62.54% | 56.60% | 56.60% | 4013 ms | ↑ 1.12x | 326 | 27m | 1d ago | 23m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 94.99% | 97.74% | 99.40% | 99.40% | 4355 ms | ↑ 2.66x | 46 | 7m | 3d ago | 18m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 94.72% | 94.72% | 94.72% | 94.72% | 2419 ms | → 1.00x | 8 | 12m | 20h ago | 9m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.58% | 84.38% | 84.43% | 84.43% | 4547 ms | ↑ 1.15x | 313 | 5m | 16h ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 94.56% | 96.95% | 96.95% | 96.95% | 1961 ms | ↑ 1.54x | 1 | 11h 52m | 7d ago | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 94.34% | 94.34% | 94.34% | 94.34% | 3151 ms | → 1.00x | 12 | 10m | 3d ago | 9m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 94.31% | 94.31% | 94.31% | 94.31% | 3150 ms | → 1.00x | 10 | 8m | 3d ago | 9m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 94.22% | 85.16% | 83.93% | 83.93% | 4525 ms | ↑ 1.05x | 320 | 4m | 5h ago | 21m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 94.07% | 97.90% | 97.94% | 97.94% | 4629 ms | ↑ 1.70x | 42 | 4m | 14h ago | 24m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.95% | 98.91% | 99.27% | 99.27% | 3906 ms | ↑ 2.80x | 4 | 2h 15m | 3d ago | 11m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 93.79% | 83.97% | 71.11% | 71.11% | 4521 ms | ↑ 1.09x | 343 | 4m | 14h ago | 19m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 92.74% | 83.24% | 77.59% | 77.59% | 4804 ms | → 1.03x | 350 | 5m | 13h ago | 12m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 92.68% | 92.68% | 92.68% | 92.68% | 2932 ms | → 1.00x | 11 | 13m | 3d ago | 9m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 92.17% | 57.03% | 9.66% | 9.66% | 2153 ms | ↓ 0.94x | 5 | 1d 22h | 6d ago | 13m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.14% | 91.90% | 66.99% | 66.99% | 3172 ms | ↑ 1.31x | 35 | 1h 11m | 7h ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 91.87% | 91.87% | 91.87% | 91.87% | 3544 ms | → 1.00x | 10 | 22m | 3d ago | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 91.73% | 96.19% | 96.19% | 96.19% | 2424 ms | ↓ 0.76x | 5 | 2h 41m | 8h ago | 9m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.13% | 96.53% | 96.56% | 96.56% | 2220 ms | ↑ 1.61x | 6 | 3h 35m | 2d ago | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 91.13% | 80.89% | 76.80% | 76.80% | 4819 ms | ↑ 1.07x | 401 | 6m | 4h ago | 11m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 91.06% | 91.06% | 91.06% | 91.06% | 2618 ms | → 1.00x | 11 | 20m | 3d ago | 9m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 91.06% | 91.06% | 91.06% | 91.06% | 2330 ms | → 1.00x | 11 | 20m | 2d ago | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 90.88% | 66.90% | 66.90% | 66.90% | 3739 ms | → 1.00x | 14 | 1d 1h | 3d ago | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 90.32% | 94.44% | 92.61% | 92.61% | 3785 ms | ↑ 1.72x | 86 | 14m | 3d ago | 11m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 90.32% | 91.71% | 95.53% | 95.53% | 4191 ms | → 1.01x | 126 | 19m | 2h ago | 23m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 89.84% | 78.09% | 78.09% | 78.09% | 3257 ms | → 1.00x | 12 | 1d 6h | 2d ago | 9m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 89.72% | 79.21% | 77.99% | 77.99% | 4732 ms | ↑ 1.18x | 288 | 13m | 13h ago | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.09% | 39.51% | 33.26% | 33.26% | 4024 ms | ↑ 1.22x | 126 | 2h 23m | 5h ago | 11m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 84.77% | 43.02% | 7.32% | 7.32% | 4504 ms | ↑ 1.42x | 49 | 6h 3m | 3h ago | 18m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 83.20% | 82.29% | 83.39% | 83.39% | 4564 ms | → 1.04x | 303 | 10m | 1d ago | 24m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 83.13% | 42.72% | 8.41% | 8.41% | 4667 ms | ↑ 1.07x | 195 | 1h 24m | 3h ago | 13m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 82.77% | 96.38% | 98.71% | 98.71% | 4643 ms | ↑ 1.49x | 60 | 15m | 3h ago | 18m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 68.35% | 61.56% | 79.37% | 79.37% | 3730 ms | ↑ 2.00x | 5 | 2d 20h | 19d ago | 12m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 64.92% | 92.59% | 92.44% | 92.44% | 1498 ms | ↑ 1.07x | 36 | 1h 39m | 4d ago | 11m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 60.88% | 55.97% | 61.79% | 61.79% | 4869 ms | ↑ 1.06x | 555 | 17m | 2h ago | 20m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 57.71% | 56.27% | 89.19% | 89.19% | 1149 ms | ↓ 0.36x | 206 | 1h 39m | 4d ago | 23m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 56.71% | 9.56% | 5.94% | 5.94% | 2549 ms | → 1.00x | 3 | 8d 16h | 1d ago | 18m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 50.90% | 27.84% | 28.37% | 28.37% | 572 ms | ↓ 0.79x | 4 | 4d 19h | 8d ago | 19m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 8.06% | 74.90% | 74.94% | 74.94% | 1603 ms | ↑ 1.07x | 5 | 1d 16h | 3d ago | 10m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 3.21% | 0.98% | 0.98% | 0.98% | 2402 ms | ↓ 0.95x | 2 | 10d 7h | 13d ago | 13m ago |

</details>

<details open>
<summary><strong>🔴 Down (185)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.38% | 98.38% | 98.38% | 98.38% | 1264 ms | → 1.00x | 4 | 0s | 8m ago | 8m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 97.18% | 51.74% | 51.67% | 51.67% | 4392 ms | → 1.02x | 58 | 4h 34m | 3h ago | 10m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 95.97% | 98.31% | 98.31% | 98.31% | 1421 ms | ↓ 0.59x | 1 | 6h 24m | 7h ago | 9m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 94.65% | 94.65% | 94.65% | 94.65% | 2933 ms | → 1.00x | 11 | 11m | 48m ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 93.55% | 97.57% | 97.64% | 97.64% | 3524 ms | ↑ 1.54x | 13 | 34m | 3h ago | 9m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 92.68% | 58.02% | 58.02% | 58.02% | 524 ms | → 1.00x | 2 | 15h 26m | 6h ago | 9m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 91.73% | 98.19% | 98.23% | 98.23% | 877 ms | ↓ 0.85x | 6 | 2h 13m | 14h ago | 10m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 89.92% | 56.47% | 31.12% | 31.12% | 3026 ms | ↑ 1.10x | 7 | 1d 10h | 17h ago | 11m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 87.50% | 56.02% | 32.55% | 32.55% | 3457 ms | ↑ 1.28x | 23 | 10h 14m | 14h ago | 11m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 81.56% | 40.20% | 6.83% | 6.83% | 3654 ms | ↓ 0.82x | 122 | 2h 26m | 19m ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 75.16% | 75.16% | 75.16% | 75.16% | 4699 ms | → 1.00x | 8 | 2h 58m | 23h ago | 8m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 73.79% | 93.17% | 90.20% | 90.20% | 2551 ms | ↑ 1.09x | 55 | 49m | 2d ago | 11m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 64.52% | 31.47% | 10.49% | 10.49% | 4706 ms | ↑ 1.16x | 227 | 1h 32m | 33m ago | 12m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.78% | 27.52% | 8.68% | 8.68% | 3979 ms | ↑ 1.13x | 339 | 1h 6m | 1h ago | 12m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 31.05% | 86.86% | 86.90% | 86.90% | 1595 ms | ↑ 1.50x | 2 | 2d 9h | 5d ago | 10m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 15.77% | 15.77% | 15.77% | 15.77% | 3395 ms | → 1.00x | 1 | 3d 18h | 4d ago | 9m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 14.72% | 52.23% | 52.28% | 52.28% | 1509 ms | → 1.05x | 10 | 1d 1h | 6d ago | 10m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.49% | 8.49% | 8.49% | 8.49% | 3186 ms | → 1.00x | 25 | 3h 35m | 7h ago | 8m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.79% | 39.20% | 67.06% | 67.06% | 2991 ms | ↓ 0.71x | 317 | 1h 24m | 6h ago | 24m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 54.66% | 91.52% | 91.52% | — | — | 6 | 2d 24h | 18d ago | 22m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 75.78% | 75.78% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 53.56% | 81.47% | 81.47% | — | — | 29 | 14h 57m | 18d ago | 14m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 75.57% | 85.88% | 85.88% | — | — | 6 | 1d 16h | 10d ago | 12m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.31% | 6.31% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 11.30% | 13.85% | 13.85% | — | — | 11 | 2d 12h | 18d ago | 24m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.75% | 3.75% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 53.42% | 91.79% | 91.79% | — | — | 37 | 11h 39m | 18d ago | 20m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.29% | 40.29% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 28.39% | 28.39% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 44.11% | 82.38% | 82.38% | — | — | 212 | 2h 7m | 18d ago | 23m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 47.60% | 67.59% | 67.59% | — | — | 175 | 2h 31m | 18d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 55.25% | 34.59% | 34.59% | — | — | 1 | 17d 22h | 18d ago | 13m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 54.83% | 92.24% | 92.24% | — | — | 1 | 17d 22h | 18d ago | 23m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 20.06% | 69.47% | 69.47% | — | — | 129 | 4h 39m | 24d ago | 22m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 23m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 23m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 54.44% | 85.20% | 85.20% | — | — | 13 | 1d 9h | 18d ago | 23m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.01% | 19.01% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 54.55% | 59.47% | 59.47% | — | — | 12 | 1d 12h | 18d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 42.11% | 42.11% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.82% | 4.06% | 4.06% | — | — | 3 | 9d 22h | 18d ago | 13m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 55.21% | 92.40% | 92.40% | — | — | 1 | 17d 22h | 18d ago | 13m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.74% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 18d ago | 19m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 46.18% | 57.40% | 57.40% | — | — | 14 | 1d 10h | 18d ago | 21m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 32.65% | 32.65% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 13.32% | 2.27% | 2.27% | — | — | 7 | 3d 21h | 18d ago | 20m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 21.94% | 46.12% | 46.12% | — | — | 4 | 5d 19h | 14d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 60.40% | 60.40% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 37.79% | 28.60% | 28.60% | — | — | 197 | 2h 28m | 18d ago | 13m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 54.19% | 33.29% | 33.29% | — | — | 27 | 15h 57m | 18d ago | 13m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.74% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 18d ago | 20m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 63.30% | 63.30% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 22m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.10% | 7.10% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 72.82% | 72.82% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 54.47% | 92.18% | 92.18% | — | — | 12 | 1d 12h | 18d ago | 23m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 23m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 10.32% | 10.32% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 48.23% | 87.96% | 87.96% | — | — | 164 | 2h 40m | 18d ago | 14m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 11h | 3d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 38.06% | 38.06% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 12.36% | 12.36% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 58.55% | 58.55% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 23m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 25.60% | 84.83% | 84.83% | — | — | 132 | 4h 18m | 18d ago | 24m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 51.71% | 51.71% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 20h | 21d ago | 24m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.00% | 47.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 54.75% | 92.19% | 92.19% | — | — | 3 | 5d 23h | 18d ago | 24m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.07% | 65.10% | 65.10% | — | — | 3 | 9d 24h | 30d ago | 19m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.70% | 43.25% | 43.25% | — | — | 2 | 14d 22h | 18d ago | 23m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 22h | 21d ago | 22m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 20h | 21d ago | 14m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 11h | 3d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 35.18% | 36.56% | 36.56% | — | — | 331 | 1h 26m | 18d ago | 13m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 14.02% | 2.90% | 2.90% | — | — | 4 | 6d 18h | 18d ago | 13m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.20% | 46.20% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 53.73% | 92.13% | 92.13% | — | — | 21 | 20h 37m | 18d ago | 18m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 55.21% | 37.28% | 37.28% | — | — | 1 | 17d 22h | 18d ago | 13m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 54.73% | 92.07% | 92.07% | — | — | 4 | 4d 12h | 18d ago | 23m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 44.28% | 44.30% | 44.30% | — | — | 1 | 17d 22h | 18d ago | 23m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 26.73% | 53.40% | 53.40% | — | — | 2 | 12d 6h | 25d ago | 13m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 50.65% | 89.47% | 89.47% | — | — | 103 | 4h 13m | 18d ago | 23m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.41% | 0.12% | 0.12% | — | — | 12 | 2d 12h | 19d ago | 18m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 75.48% | 82.82% | 82.82% | — | — | 3 | 3d 5h | 9d ago | 12m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 20h | 21d ago | 14m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 29.67% | 87.76% | 87.76% | — | — | 27 | 20h 36m | 23d ago | 18m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 55.17% | 72.49% | 72.49% | — | — | 2 | 8d 23h | 18d ago | 11m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.86% | 3.86% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 48.02% | 48.02% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 53.85% | 86.01% | 86.01% | — | — | 30 | 14h 20m | 18d ago | 23m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 31.37% | 65.61% | 65.61% | — | — | 369 | 1h 21m | 18d ago | 20m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 21m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.47% | 31.47% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 20.19% | 20.25% | 20.25% | — | — | 24 | 19h 4m | 18d ago | 10m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 11.07% | 16.31% | 16.31% | — | — | 251 | 2h 28m | 18d ago | 12m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.81% | 26.81% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 11h | 4d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 22m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 53.94% | 76.20% | 76.20% | — | — | 34 | 12h 39m | 18d ago | 12m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 25.63% | 25.70% | 25.70% | — | — | 3 | 4d 14h | 13d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.42% | 19.42% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 55.05% | 55.05% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 11h | 3d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 61.35% | 61.35% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 55.10% | 59.01% | 59.01% | — | — | 4 | 4d 11h | 18d ago | 11m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 64.01% | 73.90% | 73.90% | — | — | 6 | 2d 8h | 14d ago | 11m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 36.37% | 6.17% | 6.17% | — | — | 3 | 7d 6h | 18d ago | 13m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 23h | 23d ago | 10m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 22m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 54.79% | 92.28% | 92.28% | — | — | 2 | 8d 23h | 18d ago | 22m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 23m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 53.88% | 91.08% | 91.08% | — | — | 23 | 18h 45m | 18d ago | 22m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 32.65% | 71.04% | 71.04% | — | — | 334 | 1h 27m | 18d ago | 24m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 10.58% | 83.41% | 83.41% | — | — | 11 | 2d 13h | 28d ago | 23m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 53.87% | 90.92% | 90.92% | — | — | 30 | 14h 20m | 18d ago | 22m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.93% | 21.93% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 9.26% | 9.25% | 9.25% | — | — | 3 | 6d 5h | 16d ago | 22m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 21.66% | 4.51% | 4.51% | — | — | 6 | 3d 15h | 7d ago | 20m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 55.14% | 38.23% | 38.23% | — | — | 3 | 5d 23h | 18d ago | 13m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.86% | 75.93% | 75.93% | — | — | 2 | 13d 23h | 25d ago | 22m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 27.91% | 30.07% | 30.07% | — | — | 104 | 5h 18m | 23d ago | 12m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.32% | 9.32% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 45.76% | 73.06% | 73.06% | — | — | 206 | 2h 9m | 18d ago | 24m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 11h | 3d ago | 14m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 75.21% | 75.21% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 36.41% | 36.67% | 36.67% | — | — | 2 | 1d 17h | 3d ago | 9m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 55.19% | 59.42% | 59.42% | — | — | 2 | 8d 23h | 18d ago | 11m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 53.07% | 53.13% | 53.13% | — | — | 3 | 5d 22h | 17d ago | 10m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 17.57% | 17.57% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 22m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.98% | 19.98% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 34.63% | 28.96% | 28.96% | — | — | 3 | 6d 7h | 10d ago | 11m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.25% | 2.32% | 2.32% | — | — | 2 | 9d 5h | 18d ago | 9m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 12.26% | 12.33% | 12.33% | — | — | 2 | 9d 6h | 18d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 15.29% | 15.36% | 15.36% | — | — | 2 | 7d 19h | 15d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 55.54% | 55.54% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 54.74% | 92.24% | 92.24% | — | — | 5 | 3d 14h | 18d ago | 21m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 50.43% | 68.22% | 68.22% | — | — | 6 | 3d 4h | 19d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 61.37% | 92.44% | 92.44% | — | — | 18 | 19h 54m | 15d ago | 18m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 46.06% | 46.06% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 50.14% | 89.87% | 89.87% | — | — | 140 | 3h 5m | 18d ago | 13m ago |

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
