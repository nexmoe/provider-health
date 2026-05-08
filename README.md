# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 328 🟢 operational · 85 🟡 degraded · 187 🔴 down · 0 ⚫ unknown

_Updated 2026-05-08 05:32 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (328)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 95.47% | 95.53% | 95.53% | 2783 ms | ↑ 1.15x | 2 | 6h 20m | 9d ago | 18m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 92.00% | 92.00% | 915 ms | ↓ 0.63x | 4 | 0s | 20d ago | 21m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.90% | 97.09% | 97.09% | 2986 ms | ↑ 1.18x | 2 | 0s | 20d ago | 30m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.80% | 98.86% | 98.86% | 4404 ms | ↑ 1.13x | 21 | 0s | 11d ago | 32m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1669 ms | ↓ 0.78x | 0 | — | — | 17m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.97% | 96.28% | 96.28% | 1875 ms | ↑ 1.19x | 0 | — | — | 19m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2074 ms | → 1.00x | 0 | — | — | 17m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.97% | 91.35% | 91.35% | 1976 ms | ↑ 1.29x | 0 | — | — | 33m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1371 ms | → 1.00x | 0 | — | — | 17m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.76% | 99.78% | 99.78% | 1528 ms | → 0.95x | 6 | 0s | 21d ago | 19m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.43% | 94.47% | 94.47% | 1317 ms | ↑ 1.09x | 8 | 4h 1m | 16d ago | 19m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 96.64% | 96.64% | 96.64% | 1015 ms | ↓ 0.56x | 1 | 13h 57m | 15d ago | 17m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.89% | 99.89% | 913 ms | ↓ 0.68x | 2 | 9m | 11d ago | 19m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 3352 ms | → 1.00x | 0 | — | — | 17m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.69% | 95.30% | 95.30% | 1420 ms | ↓ 0.95x | 7 | 1m | 20d ago | 20m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2166 ms | → 1.00x | 0 | — | — | 17m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2062 ms | → 1.00x | 0 | — | — | 17m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.48% | 97.43% | 97.43% | 3259 ms | ↑ 1.47x | 12 | 2m | 12d ago | 20m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.42% | 95.48% | 95.48% | 1462 ms | → 0.99x | 1 | 12h 47m | 21d ago | 18m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 89.65% | 75.72% | 75.72% | 3700 ms | ↑ 1.83x | 54 | 51m | 9d ago | 20m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2889 ms | → 0.97x | 0 | — | — | 17m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.76% | 77.39% | 77.39% | 1556 ms | ↓ 0.89x | 5 | 2m | 10d ago | 21m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.69% | 96.83% | 96.83% | 1929 ms | → 1.04x | 4 | 20m | 9d ago | 21m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 471 ms | ↓ 0.63x | 0 | — | — | 28m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.55% | 99.72% | 99.72% | 3659 ms | ↑ 1.39x | 9 | 3m | 19d ago | 28m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.39% | 98.58% | 98.58% | 2010 ms | ↓ 0.52x | 25 | 8m | 15d ago | 20m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 96.71% | 94.54% | 94.54% | 2695 ms | ↑ 1.11x | 54 | 7m | 20d ago | 20m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.54% | 97.94% | 97.94% | 3167 ms | ↑ 3.02x | 39 | 46m | 21d ago | 28m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2876 ms | → 1.00x | 0 | — | — | 17m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3197 ms | ↑ 1.10x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.96% | 100.00% | 100.00% | 3407 ms | ↑ 1.94x | 0 | — | — | 19m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 53.43% | 88.71% | 88.71% | 1786 ms | ↓ 0.94x | 2 | 5d | 20d ago | 22m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.76% | 99.46% | 99.46% | 2437 ms | ↑ 1.25x | 6 | 0s | 22d ago | 28m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.50% | 96.86% | 96.86% | 3611 ms | ↑ 1.28x | 38 | 1m | 18d ago | 21m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 94.03% | 94.07% | 94.07% | 1511 ms | → 1.03x | 3 | 11h 20m | 21d ago | 19m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1733 ms | → 1.00x | 0 | — | — | 17m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.81% | 49.47% | 49.47% | 4098 ms | ↑ 1.92x | 120 | 15m | 11d ago | 28m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.69% | 97.50% | 97.50% | 3770 ms | ↑ 1.74x | 8 | 0s | 19d ago | 20m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2015 ms | → 1.00x | 0 | — | — | 17m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1630 ms | ↑ 1.39x | 0 | — | — | 17m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 1874 ms | → 1.00x | 0 | — | — | 17m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.77% | 47.92% | 47.92% | 1006 ms | ↑ 1.29x | 47 | 5m | 17d ago | 22m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 99.02% | 96.92% | 96.92% | 3214 ms | ↑ 1.41x | 21 | 4m | 12d ago | 20m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 86.67% | 44.96% | 44.96% | 1474 ms | ↑ 1.68x | 2 | 1d 9h | 22d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1856 ms | ↓ 0.87x | 0 | — | — | 17m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.62% | 99.58% | 99.58% | 4012 ms | ↑ 1.30x | 10 | 0s | 20d ago | 27m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2997 ms | → 1.00x | 0 | — | — | 17m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.86% | 96.75% | 96.75% | 3240 ms | ↑ 1.21x | 3 | 0s | 14d ago | 27m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 17.54% | 40.55% | 40.55% | 1525 ms | → 1.00x | 1 | 11d 2h | 30d ago | 28m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 94.60% | 96.25% | 96.25% | 1424 ms | ↓ 0.92x | 26 | 51m | 10d ago | 28m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 95.78% | 95.78% | 95.78% | 1306 ms | → 1.00x | 1 | 2h 40m | 19d ago | 18m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.76% | 79.04% | 79.04% | 2701 ms | ↑ 1.35x | 6 | 0s | 13d ago | 21m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 59.67% | 59.67% | 1783 ms | ↑ 1.11x | 5 | 2m | 16d ago | 21m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2278 ms | → 1.00x | 0 | — | — | 17m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.20% | 75.58% | 75.58% | 2958 ms | ↑ 1.16x | 9 | 29m | 13d ago | 21m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1467 ms | → 1.00x | 0 | — | — | 17m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.90% | 97.93% | 97.93% | 3564 ms | ↑ 1.21x | 2 | 0s | 20d ago | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4575 ms | → 1.00x | 0 | — | — | 17m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.90% | 91.69% | 91.69% | 1740 ms | ↑ 1.41x | 2 | 0s | 20d ago | 22m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.90% | 97.65% | 97.65% | 1359 ms | ↓ 0.95x | 2 | 0s | 21d ago | 19m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2642 ms | → 1.00x | 0 | — | — | 17m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.64% | 39.56% | 39.56% | 1309 ms | ↑ 1.27x | 28 | 4m | 22d ago | 22m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.90% | 70.73% | 70.73% | 2289 ms | ↑ 1.25x | 2 | 0s | 20d ago | 21m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 96.79% | 48.73% | 48.73% | 2139 ms | ↑ 1.73x | 16 | 49m | 10d ago | 28m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.90% | 97.49% | 97.49% | 2643 ms | ↑ 1.70x | 2 | 0s | 20d ago | 21m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.72% | 45.74% | 45.74% | 2333 ms | ↑ 1.33x | 6 | 3m | 16d ago | 22m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 37.24% | 37.24% | 2004 ms | ↓ 0.90x | 1 | 0s | 22d ago | 28m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2935 ms | → 0.98x | 0 | — | — | 17m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.76% | 77.65% | 77.65% | 2802 ms | ↑ 1.30x | 6 | 0s | 15d ago | 21m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.58% | 97.76% | 97.76% | 2159 ms | ↑ 1.18x | 7 | 6m | 20d ago | 22m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.69% | 56.92% | 56.92% | 2780 ms | ↑ 1.54x | 6 | 3m | 17d ago | 22m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2879 ms | → 1.00x | 0 | — | — | 18m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.69% | 99.05% | 99.05% | 1847 ms | ↑ 1.16x | 8 | 0s | 19d ago | 21m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.44% | 87.43% | 87.43% | 3730 ms | ↑ 1.27x | 4 | 28m | 20d ago | 21m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 53.30% | 53.30% | 53.30% | 569 ms | → 1.00x | 1 | 1d 24h | 21d ago | 18m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.79% | 99.50% | 99.50% | 2341 ms | ↑ 1.51x | 5 | 0s | 20d ago | 21m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.87% | 97.69% | 97.69% | 3488 ms | ↑ 1.94x | 2 | 5h 35m | 20d ago | 21m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 62.27% | 23.23% | 23.23% | 2195 ms | ↓ 0.87x | 2 | 4d 2h | 20d ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.71% | 99.71% | 3128 ms | ↑ 1.50x | 1 | 0s | 13d ago | 31m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1947 ms | → 1.00x | 0 | — | — | 17m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.91% | 97.91% | 97.91% | 4525 ms | ↑ 1.20x | 52 | 2m | 19d ago | 32m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.94% | 99.94% | 867 ms | ↓ 0.85x | 1 | 0s | 17d ago | 28m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.79% | 65.46% | 65.46% | 2746 ms | ↑ 1.30x | 5 | 0s | 20d ago | 21m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 83.73% | 83.78% | 83.78% | 260 ms | ↓ 0.69x | 10 | 7h 2m | 19d ago | 19m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1849 ms | → 1.00x | 0 | — | — | 17m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.79% | 99.94% | 99.94% | 2573 ms | ↑ 1.24x | 5 | 0s | 13d ago | 32m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.01% | 99.69% | 99.69% | 4529 ms | ↑ 2.78x | 7 | 31m | 18d ago | 32m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.37% | 86.57% | 86.57% | 3105 ms | ↑ 2.44x | 17 | 0s | 9d ago | 21m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 49.55% | 68.20% | 68.20% | 2406 ms | → 1.02x | 3 | 4d 5h | 15d ago | 20m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1974 ms | → 1.00x | 0 | — | — | 17m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 70.89% | 70.94% | 70.94% | 1984 ms | ↑ 1.44x | 2 | 3d 2h | 23d ago | 19m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2739 ms | → 0.96x | 0 | — | — | 17m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1342 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.90% | 98.90% | 1853 ms | ↑ 1.77x | 0 | — | — | 22m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.79% | 98.34% | 98.34% | 2062 ms | ↑ 1.34x | 5 | 0s | 20d ago | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 95.07% | 95.11% | 95.11% | 1052 ms | ↓ 0.28x | 26 | 42m | 21d ago | 19m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1078 ms | → 1.00x | 0 | — | — | 17m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2347 ms | ↓ 0.91x | 0 | — | — | 17m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2671 ms | → 0.96x | 0 | — | — | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.69% | 98.31% | 98.31% | 797 ms | → 1.05x | 5 | 12m | 19d ago | 20m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.58% | 98.84% | 98.84% | 973 ms | ↓ 0.81x | 11 | 0s | 11d ago | 23m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1101 ms | → 1.00x | 0 | — | — | 17m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 62.20% | 11.36% | 11.36% | 1191 ms | ↑ 1.12x | 1 | 8d 4h | 30d ago | 22m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.97% | 99.99% | 99.99% | 792 ms | ↑ 1.24x | 0 | — | — | 33m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.82% | 99.82% | 675 ms | → 1.02x | 1 | 0s | 25d ago | 32m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.97% | 99.93% | 99.93% | 1308 ms | ↑ 1.19x | 0 | — | — | 31m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 95.16% | 95.23% | 95.23% | 2613 ms | ↑ 1.25x | 1 | 13h 10m | 20d ago | 18m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.50% | 97.49% | 97.49% | 2267 ms | ↑ 1.73x | 7 | 50m | 20d ago | 21m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.66% | 99.72% | 99.72% | 533 ms | ↓ 0.80x | 7 | 4m | 14d ago | 32m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1600 ms | → 1.00x | 0 | — | — | 17m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.04% | 98.55% | 98.55% | 4563 ms | ↑ 1.26x | 27 | 0s | 19d ago | 33m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3795 ms | ↑ 2.27x | 1 | 0s | 27d ago | 31m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1412 ms | → 1.00x | 0 | — | — | 17m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.89% | 99.62% | 99.62% | 3271 ms | ↑ 1.93x | 3 | 1h 31m | 20d ago | 27m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 97.32% | 99.27% | 99.27% | 2246 ms | ↑ 1.13x | 48 | 6m | 21d ago | 22m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 48.58% | 33.69% | 33.69% | 856 ms | ↑ 1.13x | 1 | 11d 2h | 30d ago | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.23% | 97.94% | 97.94% | 4496 ms | ↑ 2.38x | 20 | 30s | 20d ago | 21m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1289 ms | → 0.97x | 1 | 0s | 24d ago | 30m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.83% | 99.89% | 99.89% | 600 ms | ↓ 0.50x | 4 | 0s | 13d ago | 31m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.86% | 99.80% | 99.80% | 2377 ms | ↑ 1.36x | 3 | 0s | 20d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.83% | 99.85% | 99.85% | 2065 ms | ↑ 1.10x | 3 | 3m | 19d ago | 21m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.16% | 99.22% | 99.22% | 1711 ms | ↑ 1.28x | 3 | 37m | 20d ago | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.90% | 87.66% | 87.66% | 1342 ms | ↑ 1.08x | 2 | 0s | 14d ago | 21m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.49% | 99.57% | 99.57% | 1529 ms | ↑ 1.06x | 13 | 46s | 23d ago | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.46% | 95.28% | 95.28% | 2726 ms | ↑ 1.06x | 16 | 18m | 12d ago | 21m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 54.42% | 54.42% | 3498 ms | ↑ 1.38x | 3 | 0s | 20d ago | 22m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 62.18% | 10.39% | 10.39% | 2993 ms | ↑ 2.18x | 2 | 4d 2h | 19d ago | 22m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1024 ms | → 1.00x | 0 | — | — | 17m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.76% | 99.73% | 99.73% | 2497 ms | ↑ 1.09x | 6 | 0s | 13d ago | 31m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1636 ms | ↓ 0.66x | 0 | — | — | 17m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 61.77% | 10.18% | 10.18% | 1988 ms | ↓ 0.88x | 12 | 16h 23m | 20d ago | 22m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.69% | 98.64% | 98.64% | 2798 ms | ↑ 1.79x | 8 | 0s | 20d ago | 21m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.90% | 99.91% | 99.91% | 2109 ms | ↑ 1.40x | 2 | 0s | 18d ago | 31m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.07% | 99.54% | 99.54% | 2055 ms | ↑ 1.24x | 3 | 1h 17m | 25d ago | 31m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2069 ms | ↓ 0.84x | 0 | — | — | 17m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.79% | 98.91% | 98.91% | 2210 ms | → 1.03x | 5 | 0s | 20d ago | 30m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.83% | 97.31% | 97.31% | 1787 ms | → 1.03x | 4 | 0s | 21d ago | 19m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 98.85% | 96.84% | 96.84% | 2485 ms | ↑ 1.44x | 8 | 30m | 20d ago | 20m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 97.87% | 94.13% | 94.13% | 1084 ms | ↓ 0.74x | 43 | 4m | 19d ago | 19m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 63.38% | 63.38% | 1032 ms | ↑ 1.20x | 3 | 0s | 20d ago | 21m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.86% | 98.42% | 98.42% | 2082 ms | → 1.03x | 3 | 0s | 20d ago | 29m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.72% | 76.01% | 76.01% | 2584 ms | ↑ 1.35x | 7 | 0s | 13d ago | 21m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.73% | 99.77% | 99.77% | 1843 ms | → 0.99x | 6 | 2m | 20d ago | 30m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.67% | 99.67% | 3640 ms | ↑ 1.84x | 2 | 5m | 21d ago | 31m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3083 ms | → 1.00x | 0 | — | — | 17m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.90% | 99.86% | 99.86% | 1269 ms | ↓ 0.90x | 2 | 0s | 20d ago | 23m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 79.77% | 83.48% | 83.48% | 1225 ms | ↓ 0.24x | 265 | 13m | 11d ago | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 86.30% | 87.18% | 87.18% | 3448 ms | ↓ 0.53x | 260 | 5m | 14d ago | 20m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.93% | 99.14% | 99.14% | 2227 ms | ↑ 1.42x | 1 | 0s | 20d ago | 21m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.93% | 61.23% | 61.23% | 937 ms | ↓ 0.49x | 1 | 0s | 20d ago | 22m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.90% | 96.07% | 96.07% | 2131 ms | ↑ 2.03x | 2 | 0s | 20d ago | 22m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2902 ms | → 1.00x | 0 | — | — | 17m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1598 ms | → 1.00x | 0 | — | — | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.20% | 90.66% | 90.66% | 3831 ms | ↑ 1.20x | 55 | 5m | 11d ago | 20m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1294 ms | → 1.00x | 0 | — | — | 17m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.93% | 51.01% | 51.01% | 2171 ms | ↑ 1.79x | 1 | 0s | 20d ago | 22m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.93% | 98.08% | 98.08% | 1445 ms | → 0.97x | 1 | 0s | 20d ago | 21m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 78.95% | 25.49% | 25.49% | 3025 ms | ↑ 1.10x | 11 | 8h 57m | 7d ago | 21m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.58% | 99.14% | 99.14% | 3928 ms | ↑ 1.67x | 8 | 8m | 17d ago | 26m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.93% | 99.72% | 99.72% | 3941 ms | ↑ 1.77x | 1 | 0s | 29d ago | 31m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 2083 ms | ↑ 1.13x | 2 | 0s | 20d ago | 21m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1161 ms | → 1.00x | 0 | — | — | 17m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 88.26% | 41.90% | 41.90% | 4086 ms | ↑ 1.38x | 5 | 10h 58m | 19d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2318 ms | → 1.00x | 0 | — | — | 17m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 97.12% | 97.12% | 97.12% | 1959 ms | ↑ 1.58x | 1 | 11h 52m | 8d ago | 17m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.58% | 74.87% | 74.87% | 1582 ms | ↑ 2.39x | 6 | 17m | 8d ago | 21m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.97% | 99.92% | 99.92% | 191 ms | ↓ 0.41x | 0 | — | — | 31m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 786 ms | → 1.00x | 0 | — | — | 17m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.86% | 99.94% | 99.94% | 2397 ms | ↑ 1.57x | 2 | 1m | 20d ago | 27m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.79% | 99.48% | 99.48% | 4149 ms | ↑ 1.76x | 5 | 0s | 19d ago | 31m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.10% | 75.02% | 75.02% | 1699 ms | ↓ 0.76x | 69 | 27m | 19d ago | 21m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.93% | 82.99% | 82.99% | 2917 ms | ↑ 2.39x | 1 | 0s | 20d ago | 21m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1054 ms | → 1.00x | 0 | — | — | 17m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.82% | 95.53% | 95.53% | 1442 ms | ↑ 1.33x | 30 | 1m | 20d ago | 22m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.90% | 99.97% | 99.97% | 943 ms | ↓ 0.78x | 2 | 0s | 20d ago | 30m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.76% | 98.00% | 98.00% | 3694 ms | ↑ 1.73x | 5 | 2m | 20d ago | 20m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.27% | 90.13% | 90.13% | 3723 ms | ↑ 1.13x | 20 | 0s | 9d ago | 21m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.69% | 97.96% | 97.96% | 1234 ms | ↓ 0.94x | 8 | 0s | 20d ago | 30m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 48.23% | 9.66% | 9.66% | 2278 ms | ↑ 1.08x | 1 | 11d 2h | 30d ago | 22m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2297 ms | ↓ 0.93x | 0 | — | — | 17m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.83% | 99.92% | 99.92% | 1305 ms | ↑ 1.10x | 4 | 0s | 20d ago | 20m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.90% | 54.34% | 54.34% | 2365 ms | ↑ 1.51x | 2 | 0s | 20d ago | 22m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.79% | 99.74% | 99.74% | 3153 ms | ↑ 1.49x | 5 | 0s | 13d ago | 31m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.49% | 61.19% | 61.19% | 900 ms | ↓ 0.93x | 12 | 2m | 28d ago | 32m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.90% | 98.98% | 98.98% | 1308 ms | → 0.97x | 2 | 0s | 20d ago | 30m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 48.61% | 8.07% | 8.07% | 1000 ms | ↓ 0.95x | 1 | 11d 2h | 30d ago | 30m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1070 ms | → 1.00x | 0 | — | — | 17m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.64% | 98.64% | 98.64% | 1903 ms | ↓ 0.80x | 1 | 3h 45m | 13d ago | 17m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1585 ms | ↓ 0.83x | 0 | — | — | 17m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2220 ms | → 1.00x | 0 | — | — | 17m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.06% | 92.55% | 92.55% | 4152 ms | ↓ 0.85x | 126 | 18m | 19d ago | 31m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.98% | 99.98% | 3673 ms | ↑ 1.55x | 1 | 0s | 20d ago | 21m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.69% | 98.90% | 98.90% | 2050 ms | ↑ 1.44x | 7 | 1m | 14d ago | 21m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 41.70% | 19.91% | 19.91% | 3084 ms | ↑ 1.17x | 2 | 6d 22h | 16d ago | 31m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.52% | 99.53% | 99.53% | 1422 ms | ↑ 1.24x | 6 | 12m | 23d ago | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.39% | 99.39% | 1437 ms | ↑ 1.33x | 0 | — | — | 30m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 649 ms | → 1.04x | 1 | 0s | 24d ago | 33m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.62% | 91.09% | 91.09% | 1583 ms | ↓ 0.72x | 30 | 5m | 8d ago | 30m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.37% | 97.41% | 97.41% | 3099 ms | ↑ 1.16x | 1 | 9h 60m | 26d ago | 19m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.80% | 96.27% | 96.27% | 3300 ms | ↑ 1.36x | 25 | 6m | 8d ago | 31m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.62% | 99.67% | 99.67% | 3310 ms | ↑ 1.69x | 2 | 25m | 20d ago | 19m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.23% | 84.57% | 84.57% | 1566 ms | ↑ 1.20x | 15 | 4m | 20d ago | 21m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.38% | 99.78% | 99.78% | 1610 ms | ↑ 1.19x | 17 | 0s | 28d ago | 31m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 98.56% | 99.43% | 99.43% | 1232 ms | ↑ 1.17x | 34 | 2m | 24d ago | 32m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2028 ms | → 1.00x | 0 | — | — | 17m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.83% | 99.70% | 99.70% | 952 ms | → 1.01x | 3 | 3m | 25d ago | 32m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.79% | 99.86% | 99.86% | 3631 ms | ↑ 2.19x | 5 | 0s | 12d ago | 28m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.55% | 99.81% | 99.81% | 816 ms | ↓ 0.94x | 12 | 0s | 22d ago | 29m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.83% | 98.56% | 98.56% | 2202 ms | ↑ 1.07x | 4 | 0s | 20d ago | 21m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.55% | 96.58% | 96.58% | 1793 ms | ↑ 1.33x | 14 | 59m | 13d ago | 19m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.56% | 91.16% | 91.16% | 4385 ms | ↑ 1.77x | 11 | 54s | 20d ago | 33m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 789 ms | → 1.00x | 0 | — | — | 17m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2580 ms | → 1.00x | 0 | — | — | 17m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 94.03% | 94.10% | 94.10% | 1070 ms | ↓ 0.42x | 4 | 4h 8m | 8d ago | 18m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.65% | 98.57% | 98.57% | 632 ms | → 1.03x | 6 | 5m | 21d ago | 21m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.62% | 98.62% | 98.62% | 2976 ms | ↑ 1.20x | 10 | 0s | 12d ago | 29m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1990 ms | → 1.00x | 0 | — | — | 17m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 97.97% | 96.79% | 96.79% | 3852 ms | ↑ 1.40x | 47 | 2m | 8d ago | 20m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1071 ms | → 1.00x | 0 | — | — | 17m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 48.48% | 19.91% | 19.91% | 872 ms | → 1.05x | 2 | 5d 13h | 9d ago | 29m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.79% | 99.75% | 99.75% | 1483 ms | ↓ 0.87x | 4 | 3m | 19d ago | 21m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.86% | 97.75% | 97.75% | 1720 ms | ↑ 1.30x | 3 | 0s | 20d ago | 21m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.93% | 99.91% | 99.91% | 1605 ms | ↑ 1.30x | 1 | 0s | 22d ago | 29m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.86% | 85.43% | 85.43% | 3226 ms | ↑ 1.53x | 3 | 0s | 13d ago | 21m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.92% | 99.96% | 99.96% | 1689 ms | ↑ 1.14x | 1 | 0s | 22d ago | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 91.69% | 96.11% | 96.11% | 1973 ms | ↑ 1.50x | 5 | 15h 59m | 11d ago | 22m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.85% | 99.85% | 1913 ms | ↑ 1.57x | 1 | 0s | 17d ago | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 48.51% | 8.07% | 8.07% | 2779 ms | ↑ 1.18x | 3 | 3d 17h | 13d ago | 31m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1057 ms | ↓ 0.58x | 0 | — | — | 17m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.72% | 99.83% | 99.83% | 2315 ms | ↑ 1.38x | 2 | 30m | 15d ago | 29m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 62.16% | 10.24% | 10.24% | 2145 ms | → 0.99x | 3 | 2d 17h | 15d ago | 22m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.83% | 99.87% | 99.87% | 3605 ms | ↑ 1.86x | 4 | 0s | 12d ago | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.95% | 94.99% | 94.99% | 1734 ms | → 1.03x | 4 | 5h 15m | 22d ago | 19m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3127 ms | → 1.00x | 0 | — | — | 17m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.79% | 99.76% | 99.76% | 3890 ms | ↑ 2.39x | 3 | 7m | 20d ago | 20m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.42% | 99.88% | 99.88% | 1496 ms | ↑ 1.28x | 3 | 1h 27m | 11d ago | 31m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.91% | 99.91% | 3139 ms | ↑ 2.06x | 1 | 0s | 22d ago | 29m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.55% | 99.72% | 99.72% | 2665 ms | ↑ 1.96x | 5 | 14m | 22d ago | 29m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.90% | 97.50% | 97.50% | 1160 ms | → 0.98x | 1 | 10m | 20d ago | 19m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.55% | 99.79% | 99.79% | 2633 ms | ↑ 1.26x | 11 | 15s | 16d ago | 27m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.93% | 99.82% | 99.82% | 2844 ms | ↑ 2.92x | 1 | 0s | 23d ago | 22m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.79% | 99.01% | 99.01% | 1527 ms | ↑ 1.31x | 5 | 0s | 19d ago | 31m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.93% | 99.99% | 99.99% | 392 ms | ↓ 0.52x | 1 | 0s | 28d ago | 30m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.80% | 95.75% | 98.65% | 98.65% | 3506 ms | ↑ 1.26x | 89 | 6m | 6d ago | 32m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.73% | 99.73% | 99.73% | 4100 ms | ↑ 1.36x | 7 | 0s | 6d ago | 31m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.80% | 48.49% | 8.08% | 8.08% | 1472 ms | ↑ 1.06x | 4 | 2d 19h | 6d ago | 30m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.80% | 99.86% | 99.93% | 99.93% | 1395 ms | ↑ 2.55x | 3 | 0s | 6d ago | 31m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 99.04% | 99.59% | 99.59% | 2277 ms | ↑ 1.34x | 25 | 24s | 5d ago | 30m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.55% | 87.73% | 87.73% | 1636 ms | ↑ 1.19x | 11 | 55s | 5d ago | 30m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.86% | 99.91% | 99.91% | 2226 ms | ↑ 1.28x | 3 | 0s | 5d ago | 30m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.66% | 99.63% | 99.63% | 910 ms | ↓ 0.86x | 9 | 0s | 6d ago | 30m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.86% | 98.73% | 98.73% | 1801 ms | ↑ 1.16x | 3 | 0s | 5d ago | 29m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 99.76% | 20.34% | 20.34% | 1595 ms | ↓ 0.91x | 6 | 0s | 5d ago | 28m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 49.07% | 8.12% | 8.12% | 1522 ms | ↓ 0.92x | 5 | 2d 4h | 3d ago | 28m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 48.43% | 8.01% | 8.01% | 2869 ms | → 1.04x | 2 | 5d 13h | 4d ago | 26m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.80% | 99.83% | 99.84% | 99.84% | 3348 ms | ↑ 1.18x | 4 | 0s | 11h ago | 27m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.80% | 60.73% | 10.04% | 10.04% | 1011 ms | ↓ 0.56x | 38 | 5h 12m | 2d ago | 28m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 48.19% | 8.44% | 8.44% | 2068 ms | ↑ 1.42x | 2 | 5d 13h | 5d ago | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 62.16% | 11.11% | 11.11% | 1877 ms | ↓ 0.68x | 3 | 2d 17h | 3d ago | 22m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.86% | 53.19% | 53.19% | 3733 ms | ↑ 1.58x | 3 | 0s | 5d ago | 22m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 48.20% | 38.61% | 38.61% | 1379 ms | ↓ 0.59x | 3 | 3d 17h | 4d ago | 21m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.80% | 99.79% | 97.72% | 97.72% | 3214 ms | ↑ 1.23x | 5 | 0s | 5d ago | 20m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.80% | 99.79% | 97.72% | 97.72% | 2581 ms | ↑ 1.09x | 5 | 0s | 18h ago | 20m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.80% | 86.08% | 80.72% | 80.72% | 4003 ms | ↓ 0.72x | 254 | 7m | 4d ago | 20m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.90% | 95.49% | 95.49% | 1587 ms | ↑ 1.26x | 2 | 0s | 6d ago | 21m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.76% | 98.84% | 98.84% | 2233 ms | ↑ 2.05x | 5 | 2m | 7d ago | 21m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 98.11% | 97.63% | 97.63% | 3535 ms | ↓ 0.95x | 45 | 2m | 5d ago | 20m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.80% | 69.25% | 66.17% | 66.17% | 1729 ms | ↑ 1.11x | 6 | 1d 1h | 2d ago | 21m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 91.61% | 92.80% | 92.80% | 4320 ms | ↑ 1.10x | 3 | 13h 10m | 5d ago | 20m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.80% | 99.87% | 99.91% | 99.91% | 2363 ms | ↑ 1.34x | 2 | 0s | 2d ago | 19m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.80% | 77.83% | 90.22% | 90.22% | 1635 ms | ↓ 0.48x | 15 | 13h 3m | 7d ago | 21m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.80% | 90.94% | 92.27% | 92.27% | 2724 ms | ↑ 1.83x | 25 | 3h 11m | 1d ago | 20m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.80% | 99.41% | 99.04% | 99.04% | 3827 ms | ↑ 1.70x | 16 | 0s | 6d ago | 21m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.60% | 99.65% | 99.65% | 3015 ms | ↑ 2.05x | 8 | 0s | 5d ago | 19m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.79% | 98.33% | 98.33% | 2288 ms | ↑ 1.41x | 5 | 0s | 3d ago | 21m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 99.80% | 99.92% | 99.92% | 99.92% | 2007 ms | ↑ 1.08x | 1 | 0s | 1d ago | 17m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 98.71% | 93.65% | 93.65% | 4585 ms | ↑ 1.27x | 30 | 3m | 4d ago | 20m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.74% | 99.74% | 99.74% | 99.74% | 789 ms | → 1.00x | 1 | 0s | 5d ago | 17m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.74% | 99.74% | 99.74% | 99.74% | 1030 ms | → 1.00x | 1 | 0s | 2d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.74% | 99.53% | 99.76% | 99.76% | 4143 ms | ↑ 1.05x | 1 | 0s | 5d ago | 18m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.68% | 99.68% | 99.68% | 99.68% | 3034 ms | → 1.00x | 1 | 0s | 3d ago | 17m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.60% | 84.74% | 14.12% | 14.12% | 2016 ms | ↑ 1.11x | 5 | 14h 36m | 13h ago | 33m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.60% | 99.28% | 99.71% | 99.71% | 3431 ms | ↑ 1.72x | 5 | 1h | 2d ago | 31m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.60% | 26.89% | 85.67% | 85.67% | 3488 ms | ↑ 1.12x | 3 | 6d 9h | 21h ago | 30m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.62% | 90.83% | 90.83% | 1035 ms | → 0.97x | 4 | 30m | 2d ago | 31m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.45% | 99.16% | 99.16% | 2208 ms | ↑ 1.61x | 14 | 43s | 5d ago | 30m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.45% | 99.90% | 99.90% | 2812 ms | ↑ 1.40x | 12 | 2m | 5d ago | 30m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.23% | 99.29% | 99.29% | 2330 ms | ↓ 0.94x | 11 | 3m | 2d ago | 30m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 48.46% | 21.59% | 21.59% | 3142 ms | ↑ 1.24x | 2 | 5d 13h | 2d ago | 29m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.79% | 99.83% | 99.83% | 4584 ms | ↑ 1.98x | 5 | 0s | 4d ago | 26m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.60% | 99.76% | 99.71% | 99.71% | 3328 ms | ↑ 1.58x | 6 | 0s | 4d ago | 26m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.65% | 98.97% | 98.97% | 3568 ms | ↑ 2.03x | 9 | 32m | 4d ago | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.86% | 82.46% | 82.46% | 3698 ms | → 1.01x | 31 | 20s | 4d ago | 27m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.60% | 97.77% | 96.31% | 96.31% | 4199 ms | ↑ 1.61x | 37 | 9m | 2d ago | 22m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.60% | 99.58% | 99.58% | 99.58% | 4589 ms | → 1.01x | 3 | 0s | 6d ago | 17m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 99.60% | 99.65% | 98.38% | 98.38% | 3212 ms | ↑ 1.74x | 8 | 3m | 1d ago | 21m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.60% | 94.51% | 94.57% | 94.57% | 3067 ms | ↑ 1.25x | 5 | 3h 2m | 6d ago | 19m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.60% | 99.41% | 98.38% | 98.38% | 3630 ms | ↑ 1.57x | 14 | 1m | 9h ago | 21m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.60% | 95.08% | 95.15% | 95.15% | 2161 ms | ↓ 0.90x | 5 | 2h 34m | 5d ago | 18m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.09% | 99.07% | 99.07% | 1042 ms | ↓ 0.55x | 22 | 1m | 4d ago | 20m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 99.60% | 99.79% | 98.46% | 98.46% | 2266 ms | ↑ 1.21x | 4 | 5m | 1d ago | 21m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.60% | 85.47% | 85.51% | 85.51% | 2104 ms | ↑ 1.27x | 8 | 7h 49m | 22h ago | 19m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.60% | 48.17% | 22.31% | 22.31% | 1233 ms | ↑ 1.30x | 4 | 2d 19h | 5d ago | 21m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.60% | 94.55% | 94.60% | 94.60% | 2902 ms | ↑ 1.21x | 6 | 2h 49m | 3d ago | 19m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.65% | 99.69% | 99.69% | 714 ms | ↑ 1.14x | 6 | 2m | 5d ago | 19m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.59% | 99.59% | 99.59% | 99.59% | 846 ms | → 1.00x | 1 | 0s | 3d ago | 17m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.48% | 99.48% | 99.48% | 99.48% | 1619 ms | → 1.00x | 2 | 0s | 5d ago | 17m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.48% | 99.48% | 99.48% | 99.48% | 1540 ms | → 1.00x | 1 | 19m | 2d ago | 17m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.41% | 98.80% | 99.65% | 99.65% | 4278 ms | ↑ 1.30x | 33 | 37s | 4d ago | 32m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.41% | 54.47% | 78.06% | 78.06% | 189 ms | ↓ 0.74x | 7 | 1d 14h | 4d ago | 32m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.41% | 97.64% | 99.44% | 99.44% | 4266 ms | ↑ 1.51x | 57 | 2m | 4d ago | 32m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.40% | 48.07% | 7.92% | 7.92% | 2596 ms | ↑ 1.33x | 6 | 1d 20h | 5d ago | 22m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.39% | 99.58% | 99.74% | 99.74% | 2895 ms | ↑ 1.70x | 9 | 4m | 4d ago | 20m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.39% | 99.52% | 99.52% | 99.52% | 996 ms | ↓ 0.28x | 3 | 20m | 5d ago | 17m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.39% | 99.44% | 99.54% | 99.54% | 923 ms | ↓ 0.90x | 11 | 7m | 2d ago | 19m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.39% | 99.69% | 99.82% | 99.82% | 1472 ms | ↑ 1.11x | 7 | 1m | 5d ago | 20m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.39% | 99.62% | 99.71% | 99.71% | 3971 ms | ↑ 2.12x | 10 | 0s | 4d ago | 20m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.39% | 99.30% | 98.39% | 98.39% | 3583 ms | ↑ 2.38x | 18 | 33s | 5d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.37% | 99.37% | 99.37% | 99.37% | 2166 ms | → 1.00x | 1 | 20m | 3d ago | 17m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.36% | 99.36% | 99.36% | 99.36% | 2818 ms | → 1.00x | 1 | 20m | 2d ago | 17m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.20% | 99.42% | 98.92% | 98.92% | 2887 ms | ↑ 1.13x | 13 | 5m | 3d ago | 31m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.20% | 45.33% | 7.54% | 7.54% | 928 ms | ↓ 0.78x | 68 | 4h 3m | 1d ago | 30m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.19% | 60.76% | 58.38% | 58.38% | 2340 ms | ↑ 1.22x | 21 | 9h 34m | 6d ago | 20m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.19% | 98.71% | 96.87% | 96.87% | 3994 ms | ↑ 2.19x | 27 | 3m | 4d ago | 20m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.19% | 99.65% | 97.62% | 97.62% | 2950 ms | ↑ 1.65x | 8 | 1m | 15h ago | 20m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.19% | 99.72% | 99.71% | 99.71% | 4203 ms | ↑ 2.40x | 7 | 0s | 4d ago | 20m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.19% | 61.93% | 18.58% | 18.58% | 2164 ms | ↑ 1.09x | 7 | 1d 4h | 4d ago | 21m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.01% | 99.56% | 99.62% | 99.62% | 891 ms | ↑ 1.20x | 7 | 0s | 4d ago | 31m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (85)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.99% | 99.76% | 98.71% | 98.71% | 1523 ms | ↑ 1.79x | 6 | 0s | 13h ago | 21m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.99% | 99.62% | 63.77% | 63.77% | 2007 ms | ↑ 1.70x | 9 | 1m | 5d ago | 21m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.81% | 99.14% | 99.84% | 99.84% | 4365 ms | ↑ 1.81x | 24 | 0s | 2d ago | 32m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.80% | 99.45% | 97.58% | 97.58% | 3770 ms | ↑ 1.27x | 13 | 3m | 3d ago | 26m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.79% | 99.37% | 97.59% | 97.59% | 1226 ms | ↑ 1.35x | 9 | 18m | 2d ago | 22m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.51% | 95.87% | 95.87% | 2110 ms | ↑ 1.17x | 8 | 12m | 4d ago | 21m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.79% | 96.40% | 96.40% | 96.40% | 2449 ms | ↓ 0.79x | 5 | 2h 41m | 1d ago | 17m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.79% | 99.09% | 94.75% | 94.75% | 1429 ms | ↓ 0.85x | 2 | 2h 16m | 5d ago | 19m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 98.73% | 98.73% | 98.73% | 98.73% | 1709 ms | → 1.00x | 4 | 0s | 4d ago | 17m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.61% | 48.34% | 77.45% | 77.45% | 3641 ms | ↑ 1.15x | 3 | 3d 17h | 5d ago | 32m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 98.59% | 47.98% | 8.06% | 8.06% | 3339 ms | ↑ 1.76x | 5 | 2d 5h | 1d ago | 22m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.59% | 98.67% | 89.02% | 89.02% | 2070 ms | → 0.97x | 30 | 2m | 2d ago | 21m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.41% | 98.41% | 98.41% | 98.41% | 1448 ms | → 1.00x | 5 | 0s | 15h ago | 17m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.41% | 98.90% | 97.65% | 97.65% | 4325 ms | ↑ 1.29x | 29 | 41s | 1d ago | 31m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.41% | 98.87% | 99.25% | 99.25% | 2010 ms | ↓ 0.71x | 32 | 0s | 7h ago | 32m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 98.41% | 99.62% | 99.61% | 99.61% | 2701 ms | ↑ 1.40x | 6 | 13m | 20h ago | 31m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.39% | 86.17% | 64.91% | 64.91% | 4330 ms | → 0.98x | 283 | 4m | 2h ago | 28m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.38% | 60.63% | 54.03% | 54.03% | 2551 ms | ↑ 1.10x | 14 | 14h 36m | 5d ago | 21m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.38% | 61.54% | 42.68% | 42.68% | 2996 ms | ↑ 1.25x | 19 | 10h 21m | 4d ago | 20m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.22% | 94.83% | 98.75% | 98.75% | 4276 ms | ↑ 1.24x | 96 | 7m | 2d ago | 32m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.19% | 56.32% | 27.01% | 27.01% | 2998 ms | → 1.02x | 21 | 11h 42m | 2d ago | 22m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.01% | 85.77% | 83.41% | 83.41% | 2063 ms | ↓ 0.75x | 268 | 6m | 4d ago | 31m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 97.99% | 60.80% | 10.02% | 10.02% | 2121 ms | → 0.95x | 5 | 1d 18h | 7d ago | 22m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.98% | 93.67% | 91.20% | 91.20% | 2187 ms | ↑ 1.11x | 16 | 1h 50m | 5d ago | 19m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.82% | 74.64% | 74.65% | 74.65% | 3713 ms | ↓ 0.90x | 294 | 12m | 13h ago | 33m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.19% | 89.03% | 76.44% | 76.44% | 3275 ms | ↑ 1.39x | 190 | 9m | 4d ago | 27m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 97.17% | 93.76% | 93.83% | 93.83% | 1744 ms | ↓ 0.74x | 16 | 51m | 5d ago | 18m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 97.17% | 95.99% | 61.14% | 61.14% | 896 ms | → 1.02x | 21 | 1h 24m | 2d ago | 21m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 97.13% | 96.95% | 97.26% | 97.26% | 2311 ms | → 1.04x | 7 | 6m | 4d ago | 18m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.80% | 47.24% | 7.83% | 7.83% | 2880 ms | ↑ 1.27x | 35 | 7h 38m | 2h ago | 29m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 96.77% | 84.61% | 58.71% | 58.71% | 4636 ms | ↑ 1.05x | 291 | 6m | 14h ago | 21m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.77% | 86.03% | 81.33% | 81.33% | 4771 ms | → 1.05x | 286 | 4m | 11h ago | 21m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.62% | 99.11% | 99.83% | 99.83% | 3558 ms | ↑ 2.03x | 25 | 0s | 4d ago | 31m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.57% | 35.35% | 22.68% | 22.68% | 3384 ms | ↓ 0.91x | 20 | 19h 53m | 4d ago | 20m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.44% | 83.47% | 83.43% | 83.43% | 4563 ms | → 1.04x | 271 | 11m | 13h ago | 33m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 96.16% | 98.16% | 98.16% | 98.16% | 2890 ms | ↓ 0.87x | 12 | 18m | 4d ago | 18m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.01% | 97.87% | 98.67% | 98.67% | 3809 ms | → 1.00x | 52 | 4m | 21h ago | 30m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 95.80% | 99.14% | 39.09% | 39.09% | 1255 ms | ↓ 0.90x | 10 | 29m | 13h ago | 29m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 95.60% | 98.14% | 99.05% | 99.05% | 4341 ms | ↑ 1.78x | 30 | 12m | 22h ago | 29m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 95.60% | 99.17% | 97.01% | 97.01% | 4056 ms | ↑ 1.63x | 9 | 32m | 22h ago | 29m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 95.56% | 73.49% | 33.76% | 33.76% | 3620 ms | ↑ 1.75x | 24 | 5h 10m | 4d ago | 21m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 95.56% | 92.09% | 92.15% | 92.15% | 3597 ms | → 0.98x | 41 | 22m | 5h ago | 18m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 95.54% | 95.54% | 95.54% | 95.54% | 2414 ms | → 1.00x | 9 | 11m | 23h ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 95.54% | 95.54% | 95.54% | 95.54% | 2993 ms | → 1.00x | 10 | 8m | 4d ago | 18m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.43% | 95.03% | 91.50% | 91.50% | 1621 ms | ↓ 0.85x | 66 | 16m | 4d ago | 31m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 95.40% | 99.14% | 54.14% | 54.14% | 4273 ms | ↑ 1.69x | 10 | 29m | 22h ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 95.40% | 97.96% | 99.24% | 99.24% | 4360 ms | ↑ 2.70x | 34 | 12m | 22h ago | 29m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 95.35% | 98.99% | 87.78% | 87.78% | 3802 ms | ↑ 2.07x | 21 | 8m | 6h ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 95.35% | 97.30% | 97.37% | 97.37% | 3844 ms | ↑ 1.44x | 13 | 41m | 4d ago | 18m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 95.34% | 95.34% | 95.34% | 95.34% | 3168 ms | → 1.00x | 12 | 10m | 4d ago | 18m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 95.34% | 95.34% | 95.34% | 95.34% | 2579 ms | → 1.00x | 12 | 10m | 10h ago | 17m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.23% | 64.90% | 56.77% | 56.77% | 3988 ms | ↑ 1.12x | 298 | 27m | 2d ago | 31m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 95.05% | 97.92% | 97.96% | 97.96% | 4576 ms | ↑ 1.67x | 43 | 4m | 13h ago | 33m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 95.01% | 85.91% | 83.99% | 83.99% | 4519 ms | ↑ 1.05x | 300 | 4m | 2h ago | 29m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 94.98% | 97.72% | 99.41% | 99.41% | 4355 ms | ↑ 2.49x | 44 | 7m | 4d ago | 26m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.97% | 85.59% | 84.48% | 84.48% | 4506 ms | ↑ 1.12x | 286 | 5m | 21h ago | 22m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 94.27% | 94.27% | 94.27% | 94.27% | 2848 ms | → 1.00x | 11 | 13m | 4d ago | 18m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 94.18% | 85.24% | 71.22% | 71.22% | 4534 ms | ↑ 1.05x | 310 | 4m | 19h ago | 27m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.94% | 98.88% | 99.28% | 99.28% | 3920 ms | ↑ 2.64x | 4 | 2h 15m | 4d ago | 20m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 93.63% | 93.63% | 93.63% | 93.63% | 3524 ms | → 1.00x | 10 | 22m | 4d ago | 18m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 92.99% | 92.99% | 92.99% | 92.99% | 2287 ms | → 1.00x | 11 | 20m | 4d ago | 18m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 92.99% | 92.99% | 92.99% | 92.99% | 2209 ms | → 1.00x | 11 | 20m | 3d ago | 18m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.93% | 91.07% | 67.01% | 67.01% | 3172 ms | ↑ 1.21x | 34 | 1h 24m | 10h ago | 21m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 92.53% | 81.99% | 77.08% | 77.08% | 4852 ms | ↑ 1.07x | 373 | 6m | 41m ago | 20m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 92.49% | 71.40% | 71.40% | 71.40% | 3574 ms | → 1.00x | 14 | 1d 1h | 4d ago | 18m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 92.12% | 83.90% | 77.72% | 77.72% | 4807 ms | → 1.04x | 330 | 5m | 12h ago | 21m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 92.04% | 82.34% | 82.34% | 82.34% | 3228 ms | → 1.00x | 12 | 1d 6h | 3d ago | 18m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.11% | 96.61% | 96.65% | 96.65% | 2274 ms | ↑ 1.63x | 6 | 3h 35m | 3d ago | 19m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 90.71% | 80.16% | 78.39% | 78.39% | 4751 ms | ↑ 1.18x | 256 | 15m | 12h ago | 20m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 90.50% | 91.58% | 95.55% | 95.55% | 4191 ms | → 1.02x | 124 | 20m | 1d ago | 32m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.46% | 42.66% | 34.36% | 34.36% | 3911 ms | ↑ 1.18x | 133 | 2h 5m | 31s ago | 20m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 84.94% | 46.45% | 7.69% | 7.69% | 4498 ms | ↑ 1.40x | 49 | 5h 35m | 1d ago | 26m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 84.51% | 45.96% | 8.79% | 8.79% | 4622 ms | ↑ 1.06x | 200 | 1h 15m | 1h ago | 22m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 82.93% | 96.30% | 98.71% | 98.71% | 4636 ms | ↑ 1.46x | 60 | 15m | 1d ago | 26m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 82.22% | 60.64% | 79.62% | 79.62% | 3605 ms | ↑ 1.73x | 4 | 3d 13h | 20d ago | 20m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 81.53% | 43.01% | 7.11% | 7.11% | 3654 ms | ↓ 0.83x | 136 | 2h 1m | 8m ago | 28m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.41% | 58.78% | 31.22% | 31.22% | 3234 ms | ↑ 1.23x | 9 | 1d 1h | 14h ago | 20m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 71.49% | 55.49% | 89.23% | 89.23% | 733 ms | ↓ 0.36x | 200 | 1h 42m | 5d ago | 32m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 70.68% | 12.18% | 6.31% | 6.31% | 2581 ms | → 1.00x | 3 | 8d 8h | 2d ago | 26m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.46% | 34.03% | 10.99% | 10.99% | 4661 ms | ↑ 1.13x | 240 | 1h 22m | 3h ago | 21m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 64.86% | 30.90% | 28.65% | 28.65% | 562 ms | ↓ 0.80x | 4 | 4d 13h | 9d ago | 27m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 59.80% | 56.73% | 61.80% | 61.80% | 4841 ms | ↑ 1.06x | 537 | 17m | 8m ago | 28m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 21.82% | 75.58% | 75.62% | 75.62% | 1618 ms | ↑ 1.08x | 5 | 1d 16h | 4d ago | 19m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 16.87% | 4.74% | 4.79% | 4.79% | 3993 ms | → 0.99x | 2 | 10d 7h | 14d ago | 22m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 12.53% | 2.52% | 14.07% | 14.07% | 1379 ms | → 1.00x | 1 | 29d 3h | 30d ago | 20m ago |

</details>

<details open>
<summary><strong>🔴 Down (187)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.60% | 99.67% | 99.67% | 99.67% | 1778 ms | ↓ 0.84x | 5 | 4m | 22m ago | 22m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.60% | 99.83% | 96.82% | 96.82% | 2209 ms | ↑ 1.17x | 3 | 7m | 40m ago | 19m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.79% | 99.62% | 66.35% | 66.35% | 2622 ms | ↑ 1.25x | 9 | 4m | 21m ago | 21m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.37% | 98.37% | 98.37% | 98.37% | 1448 ms | → 1.00x | 1 | 1h 1m | 1h ago | 16m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 83.84% | 53.03% | 50.50% | 50.50% | 4477 ms | → 1.03x | 58 | 4h 34m | 1d ago | 19m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 83.64% | 93.08% | 91.84% | 91.84% | 3818 ms | ↑ 1.58x | 83 | 24m | 13h ago | 20m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 82.90% | 82.90% | 82.90% | 82.90% | 1437 ms | → 1.00x | 1 | 22h 11m | 22h ago | 17m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 82.48% | 82.48% | 82.48% | 82.48% | 1455 ms | → 1.00x | 1 | 18h 20m | 19h ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 82.22% | 92.95% | 92.95% | 92.95% | 1426 ms | ↓ 0.58x | 1 | 1d 6h | 1d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 79.80% | 93.17% | 93.24% | 93.24% | 3792 ms | ↑ 1.63x | 13 | 2h 21m | 1d ago | 18m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 77.98% | 95.69% | 95.69% | 95.69% | 881 ms | ↓ 0.86x | 6 | 6h 8m | 2d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 73.74% | 57.41% | 32.11% | 32.11% | 3610 ms | ↑ 1.48x | 23 | 10h 15m | 2d ago | 20m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 72.61% | 49.46% | 49.46% | 49.46% | 524 ms | → 1.00x | 2 | 1d 3h | 1d ago | 18m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 64.65% | 92.44% | 92.53% | 92.53% | 1568 ms | ↑ 1.07x | 35 | 1h 43m | 19m ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 61.92% | 61.92% | 61.92% | 61.92% | 4699 ms | → 1.00x | 8 | 5h 51m | 2d ago | 17m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 60.00% | 90.73% | 88.30% | 88.30% | 2637 ms | ↑ 1.13x | 53 | 1h 18m | 3d ago | 20m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 46.87% | 29.14% | 8.91% | 8.91% | 4172 ms | ↑ 1.13x | 354 | 1h 1m | 21m ago | 21m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 17.17% | 84.66% | 84.70% | 84.70% | 1671 ms | ↑ 1.55x | 2 | 2d 21h | 6d ago | 19m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 12.99% | 12.99% | 12.99% | 12.99% | 3395 ms | → 1.00x | 1 | 4d 17h | 5d ago | 18m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 8.55% | 8.55% | 8.55% | 8.55% | 3179 ms | → 1.00x | 31 | 3h 30m | 16m ago | 16m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 5.86% | 50.47% | 50.52% | 50.52% | 1471 ms | → 1.04x | 10 | 1d 4h | 7d ago | 19m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.99% | 37.89% | 66.81% | 66.81% | 2172 ms | ↓ 0.66x | 292 | 1h 34m | 4h ago | 33m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 51.20% | 91.16% | 91.16% | — | — | 6 | 3d 4h | 19d ago | 31m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 75.47% | 75.47% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 50.05% | 81.14% | 81.14% | — | — | 29 | 15h 45m | 19d ago | 23m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 72.59% | 84.78% | 84.78% | — | — | 6 | 1d 20h | 11d ago | 20m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.29% | 6.29% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 11.57% | 13.79% | 13.79% | — | — | 11 | 2d 12h | 19d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.74% | 3.74% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 50.05% | 91.42% | 91.42% | — | — | 33 | 13h 47m | 19d ago | 28m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.13% | 40.13% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 28.20% | 28.20% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 40.99% | 82.06% | 82.06% | — | — | 195 | 2h 25m | 19d ago | 32m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 44.52% | 66.88% | 66.88% | — | — | 160 | 2h 54m | 19d ago | 21m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 51.78% | 34.40% | 34.40% | — | — | 1 | 18d 21h | 19d ago | 21m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 51.39% | 91.88% | 91.88% | — | — | 1 | 18d 21h | 19d ago | 32m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 15.80% | 69.20% | 69.20% | — | — | 128 | 4h 52m | 25d ago | 30m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 31m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 32m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 50.98% | 84.87% | 84.87% | — | — | 13 | 1d 11h | 19d ago | 31m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 18.84% | 18.84% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 51.50% | 59.06% | 59.06% | — | — | 11 | 1d 17h | 19d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 41.78% | 41.78% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.84% | 4.04% | 4.04% | — | — | 3 | 9d 22h | 19d ago | 21m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 51.74% | 92.04% | 92.04% | — | — | 1 | 18d 21h | 19d ago | 22m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.76% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 19d ago | 27m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 42.60% | 57.17% | 57.17% | — | — | 11 | 1d 21h | 19d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 32.46% | 32.46% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 13.64% | 2.26% | 2.26% | — | — | 7 | 3d 21h | 19d ago | 28m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 22.48% | 45.42% | 45.42% | — | — | 4 | 5d 19h | 15d ago | 20m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 60.15% | 60.15% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 34.82% | 28.43% | 28.43% | — | — | 176 | 2h 53m | 19d ago | 21m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 50.77% | 33.15% | 33.15% | — | — | 25 | 18h 10m | 19d ago | 22m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.76% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 19d ago | 28m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 63.05% | 63.05% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 31m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.02% | 7.02% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 72.54% | 72.54% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 51.01% | 91.82% | 91.82% | — | — | 12 | 1d 14h | 19d ago | 32m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 32m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 10.14% | 10.14% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 44.77% | 87.62% | 87.62% | — | — | 160 | 2h 52m | 19d ago | 23m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 10h | 4d ago | 17m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 37.56% | 37.56% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 58.32% | 58.32% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 32m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 22.62% | 84.50% | 84.50% | — | — | 110 | 5h 21m | 19d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 51.50% | 51.50% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 33m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 46.81% | 46.81% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 51.30% | 91.83% | 91.83% | — | — | 3 | 6d 7h | 19d ago | 32m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 64.84% | 64.84% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.72% | 43.08% | 43.08% | — | — | 2 | 14d 22h | 19d ago | 31m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 21h | 22d ago | 31m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 19h | 22d ago | 23m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 10h | 4d ago | 23m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 33.65% | 36.34% | 36.34% | — | — | 297 | 1h 40m | 19d ago | 21m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 14.37% | 2.89% | 2.89% | — | — | 4 | 6d 18h | 19d ago | 22m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.01% | 46.01% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 50.22% | 91.76% | 91.76% | — | — | 21 | 21h 44m | 19d ago | 26m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 51.74% | 37.10% | 37.10% | — | — | 1 | 18d 21h | 19d ago | 22m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 51.28% | 91.70% | 91.70% | — | — | 4 | 4d 17h | 19d ago | 32m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 43.05% | 43.08% | 43.08% | — | — | 1 | 18d 21h | 19d ago | 31m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 22.54% | 53.04% | 53.04% | — | — | 2 | 12d 18h | 25d ago | 21m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 47.55% | 89.12% | 89.12% | — | — | 93 | 4h 55m | 19d ago | 32m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.38% | 0.12% | 0.12% | — | — | 11 | 2d 17h | 20d ago | 26m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 72.50% | 82.12% | 82.12% | — | — | 3 | 3d 12h | 10d ago | 21m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 19h | 22d ago | 23m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 25.68% | 87.41% | 87.41% | — | — | 25 | 23h 11m | 24d ago | 26m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 51.68% | 71.51% | 71.51% | — | — | 2 | 9d 11h | 19d ago | 20m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.83% | 3.83% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 47.84% | 47.84% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 50.41% | 85.67% | 85.67% | — | — | 29 | 15h 38m | 19d ago | 31m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 29.57% | 65.34% | 65.34% | — | — | 332 | 1h 33m | 19d ago | 28m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 29m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.35% | 31.35% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 19.48% | 19.53% | 19.53% | — | — | 24 | 20h 2m | 19d ago | 18m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 10.58% | 16.14% | 16.14% | — | — | 235 | 2h 40m | 19d ago | 21m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.70% | 26.70% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 10h | 5d ago | 17m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 30m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 50.45% | 75.33% | 75.33% | — | — | 33 | 13h 45m | 19d ago | 20m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 24.49% | 24.56% | 24.56% | — | — | 3 | 4d 22h | 14d ago | 18m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.35% | 19.35% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 54.83% | 54.83% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 10h | 4d ago | 17m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 61.11% | 61.11% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 51.64% | 57.77% | 57.77% | — | — | 3 | 6d 7h | 19d ago | 19m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 60.73% | 72.68% | 72.68% | — | — | 6 | 2d 12h | 15d ago | 20m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 37.27% | 6.14% | 6.14% | — | — | 3 | 7d 6h | 19d ago | 22m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 22h | 24d ago | 19m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 30m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 51.32% | 91.92% | 91.92% | — | — | 2 | 9d 11h | 19d ago | 30m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 32m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 50.40% | 90.72% | 90.72% | — | — | 22 | 20h 39m | 19d ago | 30m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 31.31% | 70.76% | 70.76% | — | — | 302 | 1h 40m | 19d ago | 33m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 6.07% | 83.08% | 83.08% | — | — | 11 | 2d 15h | 29d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 50.39% | 90.56% | 90.56% | — | — | 30 | 15h 7m | 19d ago | 31m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.84% | 21.84% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 8.91% | 8.90% | 8.90% | — | — | 3 | 6d 13h | 17d ago | 31m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 22.18% | 4.49% | 4.49% | — | — | 6 | 3d 15h | 8d ago | 28m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 51.67% | 38.07% | 38.07% | — | — | 3 | 6d 7h | 19d ago | 22m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 10.10% | 75.63% | 75.63% | — | — | 2 | 13d 23h | 26d ago | 30m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 25.92% | 29.74% | 29.74% | — | — | 92 | 6h 10m | 23d ago | 20m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.25% | 9.25% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 42.92% | 72.77% | 72.77% | — | — | 183 | 2h 32m | 19d ago | 32m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 4d 10h | 4d ago | 23m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 74.91% | 74.91% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 31.00% | 31.22% | 31.22% | — | — | 2 | 2d 5h | 4d ago | 17m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 51.70% | 58.25% | 58.25% | — | — | 2 | 9d 11h | 19d ago | 20m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 50.92% | 50.98% | 50.98% | — | — | 3 | 6d 5h | 18d ago | 19m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 17.31% | 17.31% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 31m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.90% | 19.90% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 35.49% | 28.40% | 28.40% | — | — | 3 | 6d 7h | 11d ago | 20m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.15% | 2.21% | 2.21% | — | — | 2 | 9d 17h | 19d ago | 18m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 11.76% | 11.82% | 11.82% | — | — | 2 | 9d 17h | 19d ago | 18m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 14.59% | 14.66% | 14.66% | — | — | 2 | 8d 6h | 16d ago | 17m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 55.32% | 55.32% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 51.27% | 91.88% | 91.88% | — | — | 5 | 3d 19h | 19d ago | 29m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 46.82% | 67.26% | 67.26% | — | — | 6 | 3d 7h | 20d ago | 20m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 58.08% | 92.07% | 92.07% | — | — | 17 | 22h 28m | 16d ago | 26m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 45.87% | 45.87% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 46.55% | 89.52% | 89.52% | — | — | 140 | 3h 15m | 19d ago | 22m ago |

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
