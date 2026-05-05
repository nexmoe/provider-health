# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 339 🟢 operational · 83 🟡 degraded · 178 🔴 down · 0 ⚫ unknown

_Updated 2026-05-05 05:47 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (339)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.84% | 91.79% | 91.79% | 1435 ms | ↓ 0.68x | 4 | 0s | 17d ago | 6m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.90% | 97.06% | 97.06% | 3332 ms | ↑ 1.31x | 2 | 0s | 17d ago | 14m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.71% | 98.35% | 98.35% | 3014 ms | ↑ 1.53x | 8 | 0s | 17d ago | 6m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.64% | 98.70% | 98.70% | 4254 ms | ↑ 1.10x | 21 | 0s | 8d ago | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1634 ms | ↓ 0.76x | 0 | — | — | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.96% | 96.00% | 96.00% | 2212 ms | ↑ 1.26x | 1 | 18h 20m | 28d ago | 5m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3787 ms | → 1.00x | 0 | — | — | 4m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.97% | 91.24% | 91.24% | 2351 ms | ↑ 1.57x | 0 | — | — | 17m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1269 ms | → 1.00x | 0 | — | — | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.74% | 99.77% | 99.77% | 1744 ms | ↑ 1.26x | 7 | 0s | 18d ago | 5m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 93.81% | 93.87% | 93.87% | 1670 ms | ↑ 1.11x | 8 | 4h 1m | 13d ago | 5m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1700 ms | → 1.00x | 0 | — | — | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 99.84% | 97.63% | 97.63% | 2745 ms | ↑ 1.25x | 4 | 0s | 9d ago | 5m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 95.95% | 95.95% | 95.95% | 2536 ms | ↓ 0.79x | 1 | 13h 57m | 12d ago | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.84% | 99.88% | 99.88% | 1197 ms | ↓ 0.83x | 2 | 9m | 8d ago | 5m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 4201 ms | → 1.00x | 0 | — | — | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.48% | 95.11% | 95.11% | 1571 ms | → 0.99x | 12 | 3m | 17d ago | 6m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2002 ms | → 1.00x | 0 | — | — | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2045 ms | → 1.00x | 0 | — | — | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.35% | 97.29% | 97.29% | 3258 ms | ↑ 1.58x | 17 | 2m | 9d ago | 5m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 94.74% | 94.81% | 94.81% | 1523 ms | ↑ 1.38x | 1 | 12h 47m | 18d ago | 4m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2926 ms | → 0.99x | 0 | — | — | 4m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 526 ms | ↓ 0.66x | 0 | — | — | 12m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.55% | 99.72% | 99.72% | 3683 ms | ↑ 1.44x | 10 | 3m | 16d ago | 12m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.31% | 98.53% | 98.53% | 2443 ms | ↓ 0.93x | 30 | 7m | 12d ago | 6m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.48% | 94.30% | 94.30% | 2429 ms | ↑ 1.09x | 90 | 5m | 17d ago | 6m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.25% | 97.91% | 97.91% | 3054 ms | ↑ 3.08x | 61 | 30m | 18d ago | 12m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2967 ms | → 1.00x | 0 | — | — | 4m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3518 ms | ↑ 1.15x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 3426 ms | ↑ 2.21x | 0 | — | — | 5m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 42.82% | 88.57% | 88.57% | 1781 ms | ↑ 1.08x | 2 | 6d 12h | 17d ago | 7m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.78% | 99.46% | 99.46% | 2416 ms | ↑ 1.38x | 6 | 0s | 19d ago | 12m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.15% | 96.75% | 96.75% | 3584 ms | ↑ 1.31x | 50 | 1m | 15d ago | 6m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 93.36% | 93.41% | 93.41% | 1671 ms | ↑ 1.07x | 3 | 11h 20m | 18d ago | 5m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2590 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 89.10% | 48.84% | 48.84% | 4098 ms | ↑ 1.87x | 149 | 13m | 8d ago | 12m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.54% | 97.34% | 97.34% | 3646 ms | ↑ 1.52x | 13 | 0s | 16d ago | 5m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2360 ms | → 1.00x | 0 | — | — | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1816 ms | ↑ 1.33x | 0 | — | — | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2669 ms | → 1.00x | 0 | — | — | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.93% | 47.21% | 47.21% | 970 ms | ↑ 1.27x | 47 | 5m | 14d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 98.89% | 96.75% | 96.75% | 3254 ms | ↑ 1.61x | 27 | 3m | 9d ago | 5m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 100.00% | 100.00% | 100.00% | 3016 ms | → 1.00x | 0 | — | — | 4m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 87.60% | 44.12% | 44.12% | 1517 ms | ↑ 2.09x | 2 | 1d 9h | 19d ago | 7m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1946 ms | → 0.96x | 0 | — | — | 4m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.65% | 99.58% | 99.58% | 3947 ms | ↑ 1.25x | 10 | 0s | 17d ago | 11m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2877 ms | → 1.00x | 0 | — | — | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.16% | 98.35% | 98.35% | 3568 ms | ↑ 1.46x | 23 | 53s | 9d ago | 6m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.87% | 96.71% | 96.71% | 3103 ms | → 0.95x | 3 | 0s | 11d ago | 11m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 5.09% | 39.76% | 39.76% | 1462 ms | → 1.00x | 1 | 14d 2h | 30d ago | 12m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 94.69% | 96.20% | 96.20% | 1516 ms | ↑ 1.08x | 35 | 38m | 7d ago | 12m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 91.05% | 91.05% | 91.05% | 1520 ms | → 1.00x | 1 | 2h 40m | 16d ago | 4m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.58% | 78.54% | 78.54% | 2907 ms | ↑ 1.50x | 12 | 0s | 10d ago | 6m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.74% | 58.92% | 58.92% | 1620 ms | → 1.00x | 6 | 2m | 13d ago | 6m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2265 ms | → 1.00x | 0 | — | — | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.19% | 75.02% | 75.02% | 3199 ms | ↑ 1.24x | 11 | 24m | 10d ago | 6m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1815 ms | → 1.00x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.87% | 97.82% | 97.82% | 3627 ms | ↑ 1.33x | 3 | 0s | 17d ago | 5m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4692 ms | → 1.00x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.77% | 91.57% | 91.57% | 1757 ms | ↑ 1.66x | 6 | 0s | 17d ago | 7m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.45% | 97.48% | 97.48% | 1547 ms | ↑ 1.23x | 3 | 4h 10m | 18d ago | 5m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3527 ms | → 1.00x | 0 | — | — | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.61% | 96.65% | 96.65% | 2476 ms | ↑ 1.33x | 3 | 5h 3m | 20d ago | 5m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.45% | 38.73% | 38.73% | 1361 ms | ↑ 1.23x | 37 | 3m | 19d ago | 7m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.90% | 70.10% | 70.10% | 2337 ms | ↑ 1.53x | 2 | 0s | 17d ago | 6m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1387 ms | → 1.00x | 0 | — | — | 4m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.90% | 97.39% | 97.39% | 2827 ms | ↑ 1.86x | 2 | 0s | 17d ago | 6m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.74% | 45.04% | 45.04% | 2409 ms | ↑ 1.51x | 6 | 3m | 13d ago | 7m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 36.46% | 36.46% | 2004 ms | ↓ 0.82x | 1 | 0s | 19d ago | 12m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2982 ms | → 0.99x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.74% | 77.13% | 77.13% | 2859 ms | ↑ 1.46x | 7 | 0s | 12d ago | 6m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.61% | 97.73% | 97.73% | 2321 ms | ↑ 1.45x | 17 | 15m | 17d ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 1655 ms | → 1.00x | 0 | — | — | 4m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.68% | 56.22% | 56.22% | 2813 ms | ↑ 1.85x | 7 | 3m | 14d ago | 7m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2396 ms | → 1.00x | 0 | — | — | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.64% | 99.04% | 99.04% | 1903 ms | ↑ 1.15x | 10 | 0s | 16d ago | 6m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.48% | 87.10% | 87.10% | 3729 ms | ↑ 1.41x | 4 | 28m | 17d ago | 6m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 26.98% | 26.98% | 26.98% | 594 ms | → 1.00x | 1 | 1d 24h | 18d ago | 4m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.81% | 99.49% | 99.49% | 2338 ms | ↑ 1.80x | 5 | 0s | 17d ago | 6m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.02% | 97.64% | 97.64% | 3481 ms | ↑ 1.79x | 2 | 5h 35m | 17d ago | 6m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 38.81% | 6.98% | 6.98% | 1884 ms | → 0.97x | 4 | 3d 12h | 12d ago | 12m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 50.99% | 21.03% | 21.03% | 2300 ms | → 1.05x | 2 | 5d 14h | 17d ago | 6m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.94% | 99.71% | 99.71% | 3222 ms | ↑ 1.69x | 1 | 0s | 10d ago | 15m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1688 ms | → 1.00x | 0 | — | — | 4m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.58% | 98.93% | 98.93% | 3076 ms | ↑ 1.18x | 12 | 0s | 10d ago | 15m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.70% | 97.88% | 97.88% | 4560 ms | ↑ 1.29x | 63 | 1m | 16d ago | 16m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 953 ms | ↓ 0.93x | 1 | 0s | 14d ago | 12m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.12% | 64.22% | 64.22% | 2896 ms | ↑ 1.43x | 6 | 33m | 17d ago | 6m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 81.92% | 81.97% | 81.97% | 297 ms | ↓ 0.66x | 10 | 7h 2m | 16d ago | 5m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 2619 ms | → 1.00x | 0 | — | — | 4m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1471 ms | → 1.00x | 0 | — | — | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.81% | 99.94% | 99.94% | 2603 ms | ↑ 1.27x | 5 | 0s | 10d ago | 16m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.04% | 99.69% | 99.69% | 4511 ms | ↑ 2.82x | 8 | 28m | 15d ago | 16m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 53.09% | 66.72% | 66.72% | 2205 ms | → 1.03x | 3 | 4d 5h | 12d ago | 6m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2757 ms | → 1.00x | 0 | — | — | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 68.44% | 68.48% | 68.48% | 2087 ms | ↑ 1.38x | 2 | 3d 2h | 20d ago | 5m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2910 ms | → 0.98x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1783 ms | ↑ 1.62x | 0 | — | — | 5m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.89% | 98.89% | 1931 ms | ↑ 2.17x | 0 | — | — | 7m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.74% | 98.30% | 98.30% | 1852 ms | ↑ 1.15x | 7 | 0s | 17d ago | 6m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.65% | 94.69% | 94.69% | 1295 ms | ↓ 0.41x | 26 | 42m | 18d ago | 5m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1141 ms | → 1.00x | 0 | — | — | 4m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2374 ms | → 0.97x | 0 | — | — | 4m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2760 ms | → 0.98x | 0 | — | — | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 20.43% | 85.50% | 85.50% | 3251 ms | ↑ 1.07x | 1 | 21d 14h | 30d ago | 15m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2725 ms | → 1.00x | 0 | — | — | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 61.83% | 65.26% | 65.26% | 1782 ms | ↑ 1.14x | 11 | 18h 6m | 12d ago | 6m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.71% | 98.23% | 98.23% | 822 ms | ↑ 1.27x | 5 | 12m | 16d ago | 6m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 100.00% | 40.73% | 40.73% | 40.73% | 521 ms | → 1.00x | 1 | 1d 1h | 17d ago | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.58% | 98.82% | 98.82% | 1485 ms | ↑ 1.06x | 12 | 0s | 8d ago | 7m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 937 ms | → 1.00x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 50.97% | 10.13% | 10.13% | 1193 ms | ↑ 1.11x | 1 | 11d 4h | 30d ago | 7m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.97% | 99.99% | 99.99% | 1101 ms | ↑ 1.49x | 0 | — | — | 17m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 677 ms | → 1.01x | 1 | 0s | 22d ago | 16m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1286 ms | ↑ 1.24x | 1 | 0s | 28d ago | 15m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 94.42% | 94.49% | 94.49% | 2642 ms | ↑ 1.38x | 1 | 13h 10m | 17d ago | 4m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.51% | 97.42% | 97.42% | 1938 ms | ↑ 1.25x | 10 | 35m | 17d ago | 6m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 38.01% | 6.94% | 6.94% | 3024 ms | ↑ 1.50x | 2 | 7d 1h | 30d ago | 7m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.62% | 99.72% | 99.72% | 521 ms | ↓ 0.73x | 9 | 3m | 11d ago | 16m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 2715 ms | → 1.00x | 0 | — | — | 4m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 98.92% | 98.53% | 98.53% | 4502 ms | ↑ 1.30x | 33 | 0s | 17d ago | 17m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 3874 ms | ↑ 2.22x | 1 | 0s | 24d ago | 15m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1351 ms | → 1.00x | 0 | — | — | 4m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.84% | 98.44% | 98.44% | 2363 ms | ↑ 1.57x | 4 | 0s | 17d ago | 6m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 38.31% | 20.63% | 20.63% | 2502 ms | ↑ 1.14x | 1 | 14d 2h | 30d ago | 13m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 98.08% | 98.12% | 98.12% | 2070 ms | ↑ 1.39x | 5 | 1h 26m | 14d ago | 5m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.94% | 99.62% | 99.62% | 3033 ms | ↑ 1.81x | 4 | 1h 8m | 17d ago | 11m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.80% | 99.26% | 99.26% | 2240 ms | ↑ 1.13x | 66 | 5m | 18d ago | 7m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 38.41% | 32.87% | 32.87% | 859 ms | ↑ 1.11x | 1 | 14d 2h | 30d ago | 16m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.29% | 97.86% | 97.86% | 4266 ms | ↑ 2.34x | 20 | 30s | 17d ago | 6m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.94% | 99.95% | 99.95% | 1419 ms | → 1.01x | 1 | 0s | 21d ago | 15m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.71% | 90.73% | 90.73% | 1029 ms | → 0.99x | 3 | 33m | 12d ago | 15m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.81% | 99.89% | 99.89% | 620 ms | ↓ 0.45x | 5 | 0s | 10d ago | 15m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.79% | 99.79% | 2414 ms | ↑ 1.31x | 5 | 2m | 17d ago | 6m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.84% | 99.84% | 3268 ms | ↑ 1.21x | 3 | 0s | 17d ago | 11m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.84% | 99.84% | 99.84% | 2039 ms | ↑ 1.10x | 3 | 3m | 16d ago | 6m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.05% | 99.11% | 99.11% | 1675 ms | ↑ 1.10x | 3 | 37m | 17d ago | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.87% | 87.34% | 87.34% | 1233 ms | → 1.04x | 3 | 0s | 11d ago | 6m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.39% | 99.57% | 99.57% | 1528 ms | → 1.04x | 16 | 1m | 20d ago | 15m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.28% | 95.13% | 95.13% | 2781 ms | ↑ 1.06x | 24 | 13m | 9d ago | 6m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.87% | 53.72% | 53.72% | 3496 ms | ↑ 1.47x | 3 | 0s | 17d ago | 7m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 50.96% | 9.26% | 9.26% | 2823 ms | ↑ 1.88x | 2 | 5d 14h | 16d ago | 7m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1389 ms | → 1.00x | 0 | — | — | 4m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.78% | 99.73% | 99.73% | 2511 ms | ↑ 1.14x | 6 | 0s | 10d ago | 15m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 2655 ms | ↓ 0.82x | 0 | — | — | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 50.58% | 9.07% | 9.07% | 2336 ms | → 0.98x | 12 | 22h 22m | 17d ago | 7m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.51% | 98.59% | 98.59% | 2729 ms | ↑ 1.66x | 14 | 0s | 17d ago | 6m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 100.00% | 100.00% | 2551 ms | → 1.00x | 0 | — | — | 4m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.90% | 99.91% | 99.91% | 2368 ms | ↑ 1.52x | 2 | 0s | 15d ago | 15m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.11% | 99.54% | 99.54% | 2072 ms | ↑ 1.33x | 4 | 58m | 22d ago | 15m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2128 ms | → 0.95x | 0 | — | — | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.90% | 99.95% | 99.95% | 2371 ms | ↑ 1.64x | 1 | 0s | 15d ago | 5m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.81% | 98.90% | 98.90% | 2422 ms | ↑ 1.10x | 5 | 0s | 17d ago | 14m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 97.08% | 97.12% | 97.12% | 2026 ms | ↑ 1.22x | 5 | 2h 40m | 18d ago | 5m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.84% | 38.45% | 38.45% | 1303 ms | ↓ 0.90x | 4 | 0s | 17d ago | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.84% | 96.63% | 96.63% | 2319 ms | ↑ 1.21x | 9 | 1h 37m | 17d ago | 5m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 93.68% | 93.71% | 93.71% | 1314 ms | → 1.02x | 54 | 25m | 16d ago | 5m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.87% | 62.66% | 62.66% | 1000 ms | ↑ 1.21x | 3 | 0s | 17d ago | 6m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.78% | 98.40% | 98.40% | 2075 ms | → 1.03x | 6 | 0s | 18d ago | 13m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.64% | 75.45% | 75.45% | 2776 ms | ↑ 1.53x | 10 | 0s | 10d ago | 6m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.74% | 99.76% | 99.76% | 2103 ms | ↑ 1.11x | 6 | 2m | 17d ago | 14m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.84% | 99.67% | 99.67% | 3515 ms | ↑ 2.03x | 3 | 3m | 18d ago | 15m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.87% | 99.86% | 99.86% | 1192 ms | ↓ 0.82x | 3 | 0s | 17d ago | 7m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 50.72% | 30.15% | 30.15% | 2849 ms | → 1.01x | 6 | 1d 21h | 17d ago | 6m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 75.59% | 83.28% | 83.28% | 1565 ms | ↓ 0.22x | 346 | 12m | 8d ago | 14m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 82.91% | 86.68% | 86.68% | 4474 ms | → 0.96x | 341 | 6m | 11d ago | 6m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.94% | 99.12% | 99.12% | 2240 ms | ↑ 1.47x | 1 | 0s | 17d ago | 6m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 60.55% | 60.55% | 1198 ms | ↓ 0.92x | 1 | 0s | 17d ago | 7m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.90% | 96.00% | 96.00% | 2019 ms | ↑ 1.80x | 2 | 0s | 17d ago | 7m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 3739 ms | → 1.00x | 0 | — | — | 4m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 49.66% | 8.93% | 8.93% | 1657 ms | ↓ 0.63x | 37 | 7h 17m | 9d ago | 12m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1738 ms | → 1.00x | 0 | — | — | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 95.81% | 90.14% | 90.14% | 3614 ms | ↑ 1.26x | 92 | 4m | 8d ago | 5m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1250 ms | → 1.00x | 0 | — | — | 4m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.94% | 50.23% | 50.23% | 2455 ms | ↑ 2.57x | 1 | 0s | 17d ago | 7m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.90% | 98.02% | 98.02% | 1725 ms | → 1.02x | 2 | 0s | 17d ago | 6m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.13% | 99.13% | 99.13% | 4041 ms | ↑ 1.88x | 22 | 3m | 14d ago | 11m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.94% | 99.72% | 99.72% | 3750 ms | ↑ 1.96x | 1 | 0s | 26d ago | 15m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.87% | 99.87% | 99.87% | 2439 ms | ↑ 1.16x | 3 | 0s | 17d ago | 6m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1165 ms | → 1.00x | 0 | — | — | 4m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 75.15% | 39.76% | 39.76% | 4224 ms | ↑ 1.42x | 5 | 1d 1h | 16d ago | 6m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 3219 ms | → 1.00x | 0 | — | — | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 190 ms | ↓ 0.36x | 1 | 0s | 28d ago | 15m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 826 ms | → 1.00x | 0 | — | — | 4m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.87% | 99.94% | 99.94% | 2287 ms | ↑ 1.77x | 2 | 1m | 17d ago | 11m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.78% | 99.47% | 99.47% | 4073 ms | ↑ 1.89x | 6 | 0s | 16d ago | 15m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.53% | 74.43% | 74.43% | 1935 ms | ↓ 0.78x | 74 | 25m | 16d ago | 6m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 82.57% | 82.57% | 3030 ms | ↑ 2.30x | 1 | 0s | 17d ago | 6m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1101 ms | → 1.00x | 0 | — | — | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.51% | 95.47% | 95.47% | 1511 ms | ↑ 1.29x | 41 | 58s | 17d ago | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.90% | 99.97% | 99.97% | 1028 ms | ↓ 0.80x | 2 | 0s | 17d ago | 14m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.54% | 97.92% | 97.92% | 3691 ms | ↑ 2.39x | 12 | 50s | 17d ago | 6m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.71% | 97.93% | 97.93% | 1348 ms | ↓ 0.93x | 8 | 0s | 17d ago | 14m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 37.97% | 8.29% | 8.29% | 2357 ms | ↑ 1.30x | 1 | 14d 2h | 30d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 93.97% | 94.03% | 94.03% | 2873 ms | ↑ 1.10x | 5 | 3h 19m | 10d ago | 5m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2660 ms | → 1.00x | 0 | — | — | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.84% | 99.92% | 99.92% | 1493 ms | ↑ 1.20x | 4 | 0s | 17d ago | 6m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.90% | 53.57% | 53.57% | 2456 ms | ↑ 1.80x | 2 | 0s | 17d ago | 7m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.74% | 99.72% | 99.72% | 3271 ms | ↑ 1.64x | 7 | 0s | 10d ago | 15m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.11% | 60.71% | 60.71% | 967 ms | ↓ 0.88x | 23 | 2m | 25d ago | 16m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.87% | 98.97% | 98.97% | 1494 ms | ↑ 1.18x | 3 | 0s | 17d ago | 14m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 38.40% | 6.93% | 6.93% | 1014 ms | ↓ 0.95x | 1 | 14d 2h | 30d ago | 14m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1297 ms | → 1.00x | 0 | — | — | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.36% | 98.36% | 98.36% | 1903 ms | ↓ 0.77x | 1 | 3h 45m | 10d ago | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2849 ms | → 1.02x | 0 | — | — | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2813 ms | → 1.00x | 0 | — | — | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 50.97% | 10.02% | 10.02% | 2490 ms | ↓ 0.90x | 2 | 5d 14h | 16d ago | 7m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.62% | 92.46% | 92.46% | 4205 ms | ↓ 0.83x | 134 | 17m | 16d ago | 15m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.25% | 99.31% | 99.31% | 2445 ms | → 0.97x | 10 | 1m | 10d ago | 14m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.98% | 99.98% | 3732 ms | ↑ 1.79x | 1 | 0s | 17d ago | 6m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.51% | 98.86% | 98.86% | 2040 ms | ↑ 1.35x | 13 | 47s | 11d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2001 ms | → 1.00x | 0 | — | — | 4m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 32.00% | 16.99% | 16.99% | 3076 ms | ↑ 1.15x | 2 | 8d 10h | 13d ago | 15m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.55% | 99.52% | 99.52% | 1448 ms | ↑ 1.27x | 6 | 12m | 20d ago | 16m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.38% | 99.38% | 1547 ms | ↑ 1.54x | 0 | — | — | 14m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 899 ms | ↑ 1.14x | 1 | 0s | 21d ago | 17m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.10% | 97.15% | 97.15% | 3120 ms | ↑ 1.29x | 1 | 9h 60m | 23d ago | 5m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.58% | 99.63% | 99.63% | 3301 ms | ↑ 1.89x | 2 | 25m | 17d ago | 5m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.86% | 84.08% | 84.08% | 1711 ms | ↑ 1.27x | 27 | 3m | 17d ago | 6m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.17% | 99.77% | 99.77% | 1619 ms | ↑ 1.18x | 25 | 0s | 25d ago | 15m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 98.15% | 99.42% | 99.42% | 1343 ms | ↑ 1.16x | 46 | 2m | 21d ago | 16m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2271 ms | → 1.00x | 0 | — | — | 4m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.81% | 99.70% | 99.70% | 1031 ms | → 1.05x | 4 | 2m | 22d ago | 16m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.74% | 99.86% | 99.86% | 3601 ms | ↑ 2.14x | 7 | 0s | 9d ago | 12m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.49% | 99.80% | 99.80% | 865 ms | ↓ 0.95x | 15 | 0s | 19d ago | 13m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.81% | 98.51% | 98.51% | 2228 ms | ↑ 1.18x | 5 | 0s | 17d ago | 6m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.27% | 96.30% | 96.30% | 2290 ms | ↑ 1.47x | 14 | 59m | 10d ago | 5m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.55% | 91.05% | 91.05% | 4383 ms | ↑ 2.12x | 12 | 50s | 17d ago | 17m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 100.00% | 100.00% | 713 ms | → 1.00x | 0 | — | — | 4m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2582 ms | ↓ 0.78x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 831 ms | → 1.00x | 0 | — | — | 4m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3014 ms | → 1.00x | 0 | — | — | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.55% | 98.54% | 98.54% | 666 ms | ↑ 1.08x | 10 | 3m | 18d ago | 6m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.55% | 98.60% | 98.60% | 2911 ms | ↑ 1.06x | 12 | 50s | 9d ago | 13m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2034 ms | → 1.00x | 0 | — | — | 4m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 793 ms | → 1.00x | 0 | — | — | 4m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.77% | 99.75% | 99.75% | 1399 ms | → 0.95x | 5 | 2m | 16d ago | 6m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2322 ms | ↑ 1.25x | 0 | — | — | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.87% | 97.68% | 97.68% | 1959 ms | ↑ 1.42x | 3 | 0s | 17d ago | 6m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.87% | 99.91% | 99.91% | 1637 ms | ↑ 1.49x | 3 | 0s | 19d ago | 13m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.87% | 85.07% | 85.07% | 3386 ms | ↑ 1.64x | 3 | 0s | 10d ago | 6m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.91% | 99.95% | 99.95% | 1355 ms | ↓ 0.92x | 1 | 0s | 19d ago | 5m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 92.27% | 96.06% | 96.06% | 2065 ms | ↑ 1.73x | 5 | 15h 59m | 8d ago | 7m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.62% | 99.85% | 99.85% | 1938 ms | ↑ 1.77x | 5 | 12m | 14d ago | 13m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 38.34% | 6.93% | 6.93% | 2891 ms | ↑ 1.22x | 3 | 4d 17h | 10d ago | 15m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2649 ms | ↓ 0.84x | 0 | — | — | 4m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.68% | 99.83% | 99.83% | 2318 ms | ↑ 1.49x | 4 | 15m | 12d ago | 13m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 50.94% | 9.13% | 9.13% | 2179 ms | → 0.98x | 3 | 3d 17h | 12d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.84% | 99.86% | 99.86% | 3538 ms | ↑ 1.77x | 4 | 0s | 9d ago | 5m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.49% | 94.53% | 94.53% | 1517 ms | → 0.96x | 4 | 5h 15m | 19d ago | 5m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3085 ms | → 1.00x | 0 | — | — | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.77% | 99.74% | 99.74% | 3685 ms | ↑ 2.39x | 4 | 5m | 17d ago | 6m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.46% | 99.88% | 99.88% | 1520 ms | ↑ 1.33x | 3 | 1h 27m | 8d ago | 15m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 3105 ms | ↑ 2.03x | 1 | 0s | 19d ago | 13m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.58% | 99.72% | 99.72% | 2600 ms | ↑ 1.88x | 5 | 14m | 19d ago | 13m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 97.28% | 97.32% | 97.32% | 1523 ms | ↑ 1.15x | 2 | 6h 15m | 17d ago | 5m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.55% | 99.79% | 99.79% | 2420 ms | ↑ 1.31x | 12 | 14s | 13d ago | 11m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2695 ms | ↑ 2.61x | 1 | 0s | 20d ago | 7m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.81% | 99.00% | 99.00% | 1837 ms | ↑ 1.48x | 5 | 0s | 16d ago | 15m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 568 ms | ↓ 0.66x | 1 | 0s | 25d ago | 14m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.80% | 94.71% | 98.63% | 98.63% | 3506 ms | ↑ 1.27x | 121 | 5m | 3d ago | 16m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.80% | 99.36% | 99.71% | 99.71% | 3597 ms | ↑ 1.98x | 4 | 1h 15m | 17h ago | 15m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.80% | 99.87% | 99.64% | 99.64% | 2639 ms | ↑ 1.38x | 3 | 0s | 3d ago | 15m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.74% | 99.72% | 99.72% | 4176 ms | ↑ 1.46x | 7 | 0s | 3d ago | 15m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.80% | 99.87% | 99.93% | 99.93% | 1386 ms | ↑ 2.66x | 3 | 0s | 3d ago | 15m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 98.72% | 99.58% | 99.58% | 2270 ms | ↑ 1.36x | 36 | 50s | 2d ago | 14m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.55% | 87.58% | 87.58% | 1824 ms | ↑ 1.44x | 12 | 50s | 2d ago | 14m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.87% | 99.91% | 99.91% | 2191 ms | ↑ 1.48x | 3 | 0s | 2d ago | 14m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.68% | 99.63% | 99.63% | 939 ms | ↓ 0.91x | 9 | 0s | 3d ago | 14m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 97.07% | 19.35% | 19.35% | 1704 ms | ↓ 0.94x | 7 | 1h 59m | 2d ago | 12m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.80% | 83.22% | 48.10% | 48.10% | 2139 ms | ↑ 1.69x | 16 | 5h 18m | 7d ago | 12m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.87% | 98.72% | 98.72% | 1801 ms | ↑ 1.21x | 3 | 0s | 2d ago | 13m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.80% | 38.27% | 18.91% | 18.91% | 859 ms | → 1.04x | 2 | 7d 1h | 6d ago | 13m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 38.19% | 6.86% | 6.86% | 3120 ms | ↑ 1.05x | 2 | 7d 1h | 1d ago | 11m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.80% | 99.69% | 99.75% | 99.75% | 2083 ms | ↓ 0.84x | 4 | 0s | 3d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 37.94% | 7.23% | 7.23% | 2129 ms | ↑ 1.53x | 2 | 7d 1h | 2d ago | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.77% | 52.41% | 52.41% | 3731 ms | ↑ 1.69x | 6 | 0s | 2d ago | 7m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 37.90% | 36.44% | 36.44% | 1680 ms | ↓ 0.57x | 3 | 4d 17h | 1d ago | 6m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.80% | 99.90% | 98.72% | 98.72% | 1430 ms | ↑ 1.48x | 2 | 0s | 1d ago | 6m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.80% | 82.61% | 79.73% | 79.73% | 4073 ms | → 0.96x | 325 | 7m | 1d ago | 5m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.77% | 76.86% | 76.86% | 1843 ms | ↓ 0.88x | 5 | 2m | 7d ago | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.90% | 95.34% | 95.34% | 1644 ms | ↑ 1.50x | 2 | 0s | 3d ago | 6m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.77% | 98.80% | 98.80% | 2222 ms | ↑ 2.35x | 5 | 2m | 4d ago | 6m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 97.89% | 97.51% | 97.51% | 3546 ms | ↓ 0.94x | 54 | 2m | 2d ago | 5m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.80% | 99.22% | 86.22% | 86.22% | 3029 ms | ↑ 2.20x | 23 | 0s | 6d ago | 6m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 92.17% | 92.43% | 92.43% | 4342 ms | ↑ 1.41x | 4 | 9h 52m | 2d ago | 5m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.80% | 99.76% | 99.80% | 99.80% | 1071 ms | → 0.96x | 5 | 0s | 7d ago | 5m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.80% | 79.35% | 89.93% | 89.93% | 1421 ms | ↓ 0.32x | 16 | 12h 14m | 4d ago | 6m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.80% | 66.53% | 23.75% | 23.75% | 3090 ms | ↑ 1.10x | 11 | 15h 28m | 4d ago | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.80% | 99.16% | 89.88% | 89.88% | 3649 ms | ↑ 1.15x | 25 | 0s | 6d ago | 6m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.56% | 99.61% | 99.61% | 3132 ms | ↑ 2.37x | 8 | 0s | 2d ago | 5m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.74% | 98.28% | 98.28% | 2309 ms | ↑ 2.12x | 7 | 0s | 5h ago | 6m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 97.85% | 93.32% | 93.32% | 4680 ms | ↑ 1.71x | 53 | 3m | 17h ago | 5m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.61% | 72.14% | 13.06% | 13.06% | 2398 ms | ↑ 1.17x | 4 | 1d 12h | 3d ago | 17m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.60% | 38.31% | 6.94% | 6.94% | 1506 ms | ↑ 1.06x | 4 | 3d 12h | 3d ago | 15m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.46% | 99.15% | 99.15% | 2164 ms | ↑ 1.74x | 15 | 40s | 2d ago | 14m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.46% | 99.90% | 99.90% | 2809 ms | ↑ 1.46x | 13 | 2m | 2d ago | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.60% | 97.88% | 99.16% | 99.16% | 4379 ms | ↑ 1.99x | 50 | 3m | 24h ago | 13m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.60% | 99.87% | 97.09% | 97.09% | 4098 ms | ↑ 1.79x | 3 | 0s | 24h ago | 13m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.81% | 99.83% | 99.83% | 4572 ms | ↑ 2.05x | 5 | 0s | 1d ago | 11m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.74% | 98.95% | 98.95% | 3554 ms | ↑ 1.98x | 9 | 32m | 22h ago | 11m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.68% | 82.24% | 82.24% | 3683 ms | ↓ 0.88x | 38 | 30s | 22h ago | 11m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.60% | 95.47% | 96.27% | 96.27% | 3799 ms | ↑ 1.67x | 53 | 18m | 3d ago | 7m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.60% | 94.80% | 94.87% | 94.87% | 2957 ms | ↑ 1.32x | 2 | 6h 20m | 6d ago | 4m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.60% | 93.76% | 93.82% | 93.82% | 3203 ms | ↑ 1.20x | 5 | 3h 2m | 3d ago | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.60% | 99.77% | 97.58% | 97.58% | 3211 ms | ↑ 1.44x | 6 | 0s | 2d ago | 5m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.60% | 99.54% | 99.58% | 99.58% | 1562 ms | ↑ 1.35x | 10 | 6m | 3d ago | 5m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.02% | 99.02% | 99.02% | 1038 ms | ↓ 0.50x | 26 | 1m | 1d ago | 5m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.60% | 84.25% | 84.29% | 84.29% | 2103 ms | ↑ 1.45x | 6 | 10h 26m | 7d ago | 5m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.60% | 99.16% | 99.02% | 99.02% | 3851 ms | ↑ 1.94x | 25 | 0s | 3d ago | 6m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.61% | 99.66% | 99.66% | 1076 ms | ↑ 1.21x | 6 | 2m | 2d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.42% | 99.42% | 99.42% | 99.42% | 799 ms | → 1.00x | 1 | 0s | 2d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.42% | 99.05% | 99.52% | 99.52% | 4815 ms | ↑ 1.13x | 1 | 0s | 2d ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.41% | 98.72% | 99.65% | 99.65% | 4317 ms | ↑ 1.31x | 38 | 32s | 1d ago | 16m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.41% | 97.38% | 99.43% | 99.43% | 4274 ms | ↑ 1.66x | 69 | 2m | 1d ago | 16m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.40% | 97.24% | 99.35% | 99.35% | 4332 ms | ↑ 2.63x | 62 | 4m | 1d ago | 13m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.40% | 99.84% | 53.68% | 53.68% | 4294 ms | ↑ 1.94x | 4 | 0s | 24h ago | 13m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.40% | 99.77% | 99.71% | 99.71% | 3657 ms | ↑ 1.82x | 6 | 0s | 1d ago | 11m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.40% | 37.83% | 6.78% | 6.78% | 2547 ms | ↑ 1.28x | 6 | 2d 8h | 2d ago | 7m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.40% | 99.40% | 99.40% | 99.40% | 4587 ms | → 1.00x | 3 | 0s | 3d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.40% | 99.58% | 99.72% | 99.72% | 2880 ms | ↑ 1.82x | 10 | 4m | 23h ago | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.40% | 99.71% | 99.82% | 99.82% | 1470 ms | ↑ 1.31x | 7 | 1m | 2d ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.40% | 99.64% | 99.70% | 99.70% | 3987 ms | ↑ 2.36x | 10 | 0s | 23h ago | 5m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.40% | 37.87% | 19.53% | 19.53% | 1232 ms | ↑ 1.27x | 4 | 3d 12h | 2d ago | 6m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.40% | 99.67% | 97.53% | 97.53% | 2861 ms | ↑ 1.78x | 8 | 1m | 23h ago | 6m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.40% | 98.89% | 98.30% | 98.30% | 3603 ms | ↑ 2.37x | 28 | 2m | 2d ago | 5m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.40% | 96.65% | 96.62% | 96.62% | 3762 ms | ↑ 1.27x | 62 | 7m | 5d ago | 5m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.21% | 43.91% | 77.79% | 77.79% | 385 ms | ↓ 0.80x | 7 | 2d | 1d ago | 16m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.20% | 82.30% | 64.50% | 64.50% | 4233 ms | ↓ 0.89x | 370 | 5m | 4h ago | 12m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.20% | 98.12% | 97.59% | 97.59% | 1274 ms | ↑ 1.78x | 14 | 33m | 5d ago | 7m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.20% | 99.71% | 65.69% | 65.69% | 2632 ms | ↑ 1.32x | 7 | 3m | 1d ago | 6m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.20% | 56.59% | 55.61% | 55.61% | 2331 ms | ↑ 1.07x | 35 | 6h 41m | 3d ago | 5m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.20% | 98.28% | 96.71% | 96.71% | 3813 ms | ↑ 1.93x | 42 | 2m | 23h ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.20% | 94.36% | 94.43% | 94.43% | 2312 ms | → 0.97x | 5 | 2h 34m | 2d ago | 4m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.20% | 99.74% | 99.69% | 99.69% | 4062 ms | ↑ 2.38x | 7 | 0s | 23h ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.20% | 50.70% | 16.71% | 16.71% | 2154 ms | ↑ 1.05x | 7 | 1d 14h | 1d ago | 6m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.01% | 99.20% | 99.84% | 99.84% | 4469 ms | ↑ 2.16x | 24 | 0s | 22h ago | 16m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.01% | 99.50% | 99.57% | 99.57% | 905 ms | ↑ 1.18x | 7 | 0s | 24h ago | 15m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.00% | 37.55% | 6.76% | 6.76% | 2496 ms | ↑ 1.22x | 23 | 14h 43m | 5h ago | 13m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (83)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 98.99% | 99.68% | 96.72% | 96.72% | 2088 ms | ↑ 1.52x | 5 | 16m | 6d ago | 6m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 98.99% | 49.44% | 49.48% | 49.48% | 4372 ms | → 1.02x | 57 | 4h 37m | 3d ago | 5m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.99% | 99.64% | 62.39% | 62.39% | 2001 ms | ↑ 1.65x | 9 | 1m | 2d ago | 6m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.84% | 98.84% | 98.84% | 98.84% | 1852 ms | → 1.00x | 2 | 0s | 2d ago | 4m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.81% | 99.01% | 99.25% | 99.25% | 2434 ms | ↓ 0.88x | 30 | 0s | 22h ago | 16m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.80% | 99.36% | 97.56% | 97.56% | 3717 ms | ↑ 1.30x | 17 | 2m | 1d ago | 11m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.55% | 95.74% | 95.74% | 2276 ms | ↑ 1.23x | 8 | 12m | 1d ago | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.79% | 99.42% | 99.42% | 99.42% | 2285 ms | ↓ 0.63x | 3 | 20m | 2d ago | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.79% | 99.48% | 74.33% | 74.33% | 1478 ms | ↑ 2.32x | 8 | 15m | 5d ago | 6m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.79% | 94.31% | 94.35% | 94.35% | 1923 ms | ↓ 0.93x | 2 | 13h 21m | 2d ago | 5m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.62% | 38.20% | 77.17% | 77.17% | 3597 ms | ↑ 1.13x | 3 | 4d 17h | 2d ago | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.61% | 98.88% | 96.23% | 96.23% | 3457 ms | ↑ 1.50x | 25 | 6m | 5d ago | 15m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.41% | 98.49% | 90.98% | 90.98% | 1674 ms | ↓ 0.74x | 37 | 4m | 5d ago | 14m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.39% | 93.79% | 93.70% | 93.70% | 2517 ms | → 1.04x | 78 | 15m | 17h ago | 5m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.39% | 56.79% | 53.09% | 53.09% | 2546 ms | ↑ 1.14x | 14 | 17h 1m | 2d ago | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 98.27% | 98.27% | 98.27% | 98.27% | 4698 ms | → 1.00x | 3 | 0s | 13h ago | 4m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.22% | 98.18% | 97.63% | 97.63% | 4525 ms | ↑ 1.53x | 54 | 22s | 4h ago | 15m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 98.19% | 79.41% | 74.14% | 74.14% | 3835 ms | ↑ 2.10x | 56 | 1h 49m | 6d ago | 5m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.19% | 50.29% | 39.55% | 39.55% | 3006 ms | ↑ 1.28x | 19 | 14h 7m | 1d ago | 5m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.04% | 98.04% | 98.04% | 98.04% | 1200 ms | → 1.00x | 2 | 0s | 11h ago | 4m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.02% | 82.08% | 83.21% | 83.21% | 1867 ms | ↓ 0.69x | 347 | 6m | 24h ago | 15m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.99% | 90.48% | 90.52% | 90.52% | 2482 ms | ↑ 1.15x | 17 | 2h 30m | 2d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.99% | 98.80% | 88.76% | 88.76% | 1906 ms | ↓ 0.82x | 29 | 2m | 1h ago | 6m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 97.83% | 95.12% | 98.74% | 98.74% | 4256 ms | ↑ 1.36x | 99 | 7m | 22h ago | 16m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 97.59% | 91.12% | 91.96% | 91.96% | 2461 ms | ↑ 2.10x | 39 | 2h 3m | 6d ago | 6m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.20% | 86.73% | 76.15% | 76.15% | 3184 ms | ↑ 1.28x | 237 | 9m | 22h ago | 11m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.18% | 93.05% | 93.13% | 93.13% | 2332 ms | ↓ 0.63x | 4 | 4h 8m | 5d ago | 4m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 97.11% | 97.11% | 97.11% | 97.11% | 3361 ms | → 1.00x | 2 | 29m | 2d ago | 4m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 96.78% | 92.75% | 92.82% | 92.82% | 1954 ms | → 1.03x | 16 | 51m | 2d ago | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.58% | 25.94% | 18.79% | 18.79% | 3376 ms | → 1.03x | 20 | 23h 28m | 23h ago | 5m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.22% | 97.79% | 98.68% | 98.68% | 3765 ms | → 1.02x | 48 | 7m | 14h ago | 14m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 96.18% | 50.07% | 31.44% | 31.44% | 3228 ms | ↑ 1.17x | 20 | 13h 31m | 16h ago | 5m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 96.04% | 96.04% | 96.04% | 96.04% | 2562 ms | → 1.00x | 4 | 0s | 1d ago | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.04% | 99.17% | 99.83% | 99.83% | 3560 ms | ↑ 2.30x | 25 | 0s | 24h ago | 15m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 95.98% | 99.15% | 87.31% | 87.31% | 3328 ms | ↑ 1.69x | 18 | 9m | 16h ago | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 95.77% | 82.72% | 80.72% | 80.72% | 4801 ms | ↑ 1.06x | 358 | 5m | 3d ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 95.57% | 61.42% | 31.40% | 31.40% | 3416 ms | ↑ 1.74x | 24 | 8h 9m | 1d ago | 6m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.45% | 58.56% | 56.24% | 56.24% | 4009 ms | ↑ 1.11x | 379 | 27m | 22h ago | 15m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 95.44% | 35.40% | 6.39% | 6.39% | 1728 ms | ↓ 0.90x | 67 | 5h 11m | 2d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 95.37% | 96.86% | 96.94% | 96.94% | 3733 ms | ↑ 1.31x | 13 | 41m | 22h ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 95.37% | 97.99% | 98.07% | 98.07% | 3365 ms | ↑ 1.35x | 12 | 23m | 24h ago | 4m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 95.37% | 97.78% | 97.78% | 97.78% | 2958 ms | ↓ 0.82x | 12 | 18m | 22h ago | 4m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 95.27% | 72.35% | 72.35% | 72.35% | 3648 ms | ↓ 0.87x | 292 | 12m | 22h ago | 17m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.25% | 94.25% | 91.39% | 91.39% | 1676 ms | ↓ 0.81x | 91 | 12m | 23h ago | 15m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 95.00% | 97.16% | 99.40% | 99.40% | 4277 ms | ↑ 2.70x | 65 | 5m | 23h ago | 11m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.59% | 82.58% | 84.32% | 84.32% | 4546 ms | ↑ 1.17x | 356 | 5m | 21h ago | 7m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 94.57% | 81.40% | 57.81% | 57.81% | 4709 ms | ↑ 1.12x | 363 | 6m | 14h ago | 6m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.57% | 91.95% | 66.64% | 66.64% | 3154 ms | ↑ 1.44x | 35 | 1h 11m | 2d ago | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 94.37% | 90.88% | 90.96% | 90.96% | 3307 ms | → 1.02x | 40 | 22m | 2d ago | 4m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.96% | 98.93% | 99.24% | 99.24% | 3835 ms | ↑ 2.64x | 5 | 1h 48m | 23h ago | 6m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 93.82% | 83.32% | 83.83% | 83.83% | 4382 ms | → 1.02x | 367 | 5m | 14h ago | 13m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 93.49% | 97.94% | 97.98% | 97.98% | 4728 ms | ↑ 1.77x | 38 | 4m | 3h ago | 17m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 92.76% | 96.53% | 96.53% | 96.53% | 2115 ms | ↑ 1.54x | 1 | 11h 52m | 5d ago | 4m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 92.18% | 49.68% | 8.90% | 8.90% | 2599 ms | → 1.04x | 5 | 2d 8h | 4d ago | 7m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.15% | 96.14% | 96.14% | 96.14% | 3709 ms | → 1.03x | 4 | 3h 1m | 16h ago | 4m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 91.15% | 81.59% | 77.18% | 77.18% | 4801 ms | → 1.02x | 389 | 5m | 21h ago | 6m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 91.09% | 91.09% | 91.09% | 91.09% | 2260 ms | → 1.00x | 5 | 16m | 5h ago | 4m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 91.09% | 91.30% | 92.17% | 92.17% | 4172 ms | ↑ 1.12x | 7 | 6m | 24h ago | 4m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 90.53% | 91.87% | 95.52% | 95.52% | 4179 ms | → 1.00x | 132 | 19m | 22h ago | 16m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 89.60% | 89.60% | 89.60% | 89.60% | 3265 ms | → 1.00x | 12 | 10m | 22h ago | 4m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.93% | 77.42% | 77.13% | 77.13% | 4628 ms | ↑ 1.14x | 338 | 12m | 4h ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 88.53% | 94.44% | 92.36% | 92.36% | 3735 ms | ↑ 1.88x | 91 | 14m | 21h ago | 5m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 88.53% | 78.48% | 76.15% | 76.15% | 4806 ms | ↑ 1.08x | 455 | 7m | 3h ago | 5m ago |
| [Lyux API](https://lmspeed.net/provider/api-lyux-space) | 87.28% | 87.28% | 87.28% | 87.28% | 2426 ms | → 1.00x | 10 | 24m | 22h ago | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.52% | 33.49% | 30.87% | 30.87% | 3955 ms | ↑ 1.20x | 112 | 3h 6m | 6h ago | 5m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 86.14% | 86.14% | 86.14% | 86.14% | 4372 ms | → 1.00x | 10 | 8m | 22h ago | 4m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 85.60% | 36.51% | 6.57% | 6.57% | 4418 ms | ↑ 1.35x | 44 | 7h 50m | 16h ago | 11m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.00% | 96.65% | 98.73% | 98.73% | 4579 ms | ↑ 1.46x | 57 | 16m | 18h ago | 11m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 83.24% | 50.17% | 50.17% | 50.17% | 4376 ms | → 1.00x | 14 | 1d 1h | 24h ago | 4m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 83.20% | 34.65% | 6.23% | 6.23% | 3865 ms | ↓ 0.87x | 97 | 3h 32m | 31m ago | 12m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 82.73% | 45.79% | 25.93% | 25.93% | 3189 ms | ↑ 1.12x | 18 | 17h 31m | 5d ago | 7m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 82.18% | 82.18% | 82.18% | 82.18% | 3917 ms | → 1.00x | 11 | 13m | 22h ago | 4m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 82.09% | 95.59% | 60.43% | 60.43% | 920 ms | ↓ 0.89x | 32 | 57m | 3h ago | 6m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 82.05% | 80.17% | 83.27% | 83.27% | 4551 ms | → 1.03x | 344 | 10m | 16h ago | 17m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 81.76% | 36.52% | 7.61% | 7.61% | 4692 ms | ↑ 1.10x | 186 | 1h 43m | 45m ago | 7m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 80.20% | 80.20% | 80.20% | 80.20% | 3838 ms | → 1.00x | 10 | 22m | 24h ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 78.22% | 78.22% | 78.22% | 78.22% | 3167 ms | → 1.00x | 11 | 20m | 18h ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 78.22% | 78.22% | 78.22% | 78.22% | 2731 ms | → 1.00x | 11 | 20m | 2h ago | 4m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 75.25% | 55.07% | 55.07% | 55.07% | 4160 ms | → 1.00x | 12 | 1d 6h | 2h ago | 4m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 60.97% | 26.59% | 9.45% | 9.45% | 4671 ms | ↑ 1.15x | 204 | 1h 55m | 24m ago | 6m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 39.03% | 63.34% | 78.82% | 78.82% | 4174 ms | ↑ 3.21x | 6 | 2d 9h | 17d ago | 6m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 28.99% | 58.20% | 89.10% | 89.10% | 1584 ms | ↓ 0.40x | 209 | 1h 37m | 2d ago | 16m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 23.60% | 21.87% | 27.77% | 27.77% | 536 ms | ↓ 0.76x | 4 | 5d 7h | 6d ago | 11m ago |

</details>

<details open>
<summary><strong>🔴 Down (178)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 93.40% | 82.43% | 70.92% | 70.92% | 4573 ms | ↑ 1.06x | 384 | 4m | 11m ago | 11m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 76.46% | 94.28% | 93.87% | 93.87% | 1922 ms | ↑ 1.25x | 48 | 52m | 2d ago | 5m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 60.96% | 54.00% | 61.75% | 61.75% | 4854 ms | → 1.05x | 585 | 18m | 12m ago | 12m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 60.36% | 91.95% | 91.99% | 91.99% | 1718 ms | ↑ 1.61x | 2 | 1d 9h | 3d ago | 5m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 48.89% | 23.86% | 8.02% | 8.02% | 3971 ms | ↑ 1.08x | 308 | 1h 20m | 6m ago | 6m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 35.41% | 56.42% | 56.47% | 56.47% | 1426 ms | ↓ 0.85x | 10 | 20h 33m | 4d ago | 5m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 29.20% | 4.71% | 5.19% | 5.19% | 2298 ms | → 1.00x | 2 | 13d 23h | 30m ago | 10m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 29.07% | 29.07% | 29.07% | 29.07% | 3395 ms | → 1.00x | 1 | 1d 17h | 2d ago | 4m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 28.09% | 20.65% | 4.55% | 4.55% | 4237 ms | ↑ 1.12x | 6 | 3d 15h | 5d ago | 12m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.98% | 10.98% | 10.98% | 10.98% | 3282 ms | → 1.00x | 17 | 2h 44m | 3h ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 4.63% | 78.00% | 78.04% | 78.04% | 2235 ms | ↑ 1.35x | 5 | 1d 9h | 15h ago | 5m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.76% | 41.95% | 67.62% | 67.62% | 3961 ms | ↓ 0.71x | 376 | 1h 5m | 2d ago | 17m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 61.39% | 92.29% | 92.29% | — | — | 6 | 2d 16h | 16d ago | 15m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 76.41% | 76.41% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 60.41% | 82.15% | 82.15% | — | — | 29 | 13h 17m | 16d ago | 7m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 81.44% | 88.29% | 88.29% | — | — | 6 | 1d 8h | 8d ago | 6m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.37% | 6.37% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 10.77% | 13.96% | 13.96% | — | — | 11 | 2d 12h | 16d ago | 17m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.78% | 3.78% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 59.42% | 92.56% | 92.56% | — | — | 61 | 6h 17m | 16d ago | 12m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.62% | 40.62% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 28.82% | 28.82% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 47.56% | 83.07% | 83.07% | — | — | 262 | 1h 34m | 16d ago | 16m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 53.54% | 69.12% | 69.12% | — | — | 205 | 1h 55m | 16d ago | 6m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 62.00% | 35.01% | 35.01% | — | — | 2 | 7d 23h | 16d ago | 6m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 61.45% | 93.02% | 93.02% | — | — | 4 | 3d 23h | 16d ago | 16m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 28.41% | 70.06% | 70.06% | — | — | 129 | 4h 16m | 22d ago | 14m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 15m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 16m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 60.73% | 85.92% | 85.92% | — | — | 27 | 14h 8m | 16d ago | 15m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.38% | 19.38% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 61.05% | 60.33% | 60.33% | — | — | 21 | 18h 13m | 16d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 42.82% | 42.82% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.78% | 4.12% | 4.12% | — | — | 3 | 9d 22h | 16d ago | 6m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 61.99% | 93.18% | 93.18% | — | — | 1 | 15d 21h | 16d ago | 7m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.71% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 16d ago | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 53.15% | 57.89% | 57.89% | — | — | 20 | 21h 11m | 16d ago | 13m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 33.05% | 33.05% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 12.70% | 2.29% | 2.29% | — | — | 7 | 3d 21h | 16d ago | 12m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 28.45% | 47.65% | 47.65% | — | — | 4 | 5d 10h | 12d ago | 5m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 60.90% | 60.90% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 43.61% | 28.97% | 28.97% | — | — | 241 | 1h 49m | 16d ago | 6m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 60.67% | 33.61% | 33.61% | — | — | 38 | 10h 3m | 16d ago | 7m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.71% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 16d ago | 12m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 63.83% | 63.83% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 15m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.26% | 7.26% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 73.44% | 73.44% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 61.17% | 92.96% | 92.96% | — | — | 13 | 1d 5h | 16d ago | 16m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 16m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 10.72% | 10.72% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 55.30% | 88.70% | 88.70% | — | — | 164 | 2h 22m | 16d ago | 7m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 10h | 1d ago | 4m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.42% | 39.16% | 39.16% | — | — | 1 | 29d 22h | 30d ago | 6m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 6.76% | 12.97% | 12.97% | — | — | 2 | 14d 9h | 29d ago | 5m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 59.04% | 59.04% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 16m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 32.16% | 85.55% | 85.55% | — | — | 169 | 3h 5m | 16d ago | 17m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 52.14% | 52.14% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 17m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.40% | 47.40% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 61.43% | 92.97% | 92.97% | — | — | 4 | 3d 23h | 16d ago | 17m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 65.64% | 65.64% | — | — | 3 | 9d 24h | 28d ago | 11m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.67% | 43.61% | 43.61% | — | — | 2 | 14d 22h | 16d ago | 15m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 21h | 19d ago | 15m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 19h | 19d ago | 7m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 10h | 1d ago | 7m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 38.76% | 37.03% | 37.03% | — | — | 390 | 1h 8m | 16d ago | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 13.37% | 2.93% | 2.93% | — | — | 4 | 6d 18h | 16d ago | 7m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.59% | 46.59% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 60.52% | 92.91% | 92.91% | — | — | 22 | 17h 29m | 16d ago | 11m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 61.99% | 37.65% | 37.65% | — | — | 1 | 15d 21h | 16d ago | 7m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 61.45% | 92.84% | 92.84% | — | — | 4 | 3d 23h | 16d ago | 16m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 47.10% | 47.14% | 47.14% | — | — | 1 | 15d 21h | 16d ago | 15m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 34.83% | 54.18% | 54.18% | — | — | 3 | 7d 12h | 23d ago | 6m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 57.21% | 90.23% | 90.23% | — | — | 114 | 3h 23m | 16d ago | 16m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.39% | 0.12% | 0.12% | — | — | 12 | 2d 12h | 17d ago | 11m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 81.34% | 84.35% | 84.35% | — | — | 3 | 2d 13h | 7d ago | 6m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.06% | 0.06% | 0.06% | — | — | 2 | 9d 10h | 11d ago | 7m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 19h | 19d ago | 7m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 36.93% | 88.50% | 88.50% | — | — | 44 | 11h 34m | 21d ago | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 62.00% | 74.62% | 74.62% | — | — | 2 | 7d 23h | 16d ago | 5m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.91% | 3.91% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 48.43% | 48.43% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 54.74% | 86.74% | 86.74% | — | — | 78 | 5h 11m | 16d ago | 15m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 34.89% | 66.16% | 66.16% | — | — | 432 | 1h 4m | 16d ago | 12m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 13m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.74% | 31.74% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 21.89% | 21.95% | 21.95% | — | — | 24 | 17h 3m | 16d ago | 4m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 12.82% | 16.68% | 16.68% | — | — | 299 | 2h | 16d ago | 6m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.03% | 27.03% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 10h | 2d ago | 4m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 14m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 60.82% | 78.12% | 78.12% | — | — | 34 | 11h 14m | 16d ago | 6m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 28.46% | 28.54% | 28.54% | — | — | 3 | 3d 22h | 11d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.59% | 19.59% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 55.52% | 55.52% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 10h | 1d ago | 4m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 61.87% | 61.87% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 61.76% | 61.80% | 61.80% | — | — | 7 | 2d 7h | 16d ago | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 70.38% | 76.61% | 76.61% | — | — | 7 | 1d 17h | 12d ago | 5m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 34.67% | 6.22% | 6.22% | — | — | 3 | 7d 6h | 16d ago | 7m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 23h | 21d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 14m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 61.53% | 93.06% | 93.06% | — | — | 2 | 7d 23h | 16d ago | 14m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 16m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 59.87% | 91.84% | 91.84% | — | — | 41 | 9h 21m | 16d ago | 14m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 35.99% | 71.63% | 71.63% | — | — | 393 | 1h 9m | 16d ago | 17m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 19.35% | 84.12% | 84.12% | — | — | 11 | 2d 8h | 26d ago | 15m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 60.26% | 91.68% | 91.68% | — | — | 40 | 9h 33m | 16d ago | 15m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.13% | 22.13% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 10.09% | 10.09% | 10.09% | — | — | 3 | 5d 13h | 14d ago | 15m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 61.90% | 38.58% | 38.58% | — | — | 4 | 3d 23h | 16d ago | 7m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.40% | 76.57% | 76.57% | — | — | 2 | 13d 23h | 23d ago | 14m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 26.60% | 30.77% | 30.77% | — | — | 104 | 5h 18m | 20d ago | 6m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.48% | 9.48% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 50.72% | 73.68% | 73.68% | — | — | 244 | 1h 38m | 16d ago | 17m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 10h | 1d ago | 7m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 75.84% | 75.84% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 57.96% | 58.37% | 58.37% | — | — | 2 | 17h 5m | 1d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 62.02% | 62.03% | 62.03% | — | — | 2 | 7d 23h | 16d ago | 5m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 58.31% | 58.38% | 58.38% | — | — | 3 | 5d 6h | 15d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 18.13% | 18.13% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 15m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.15% | 20.15% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 33.00% | 30.21% | 30.21% | — | — | 3 | 6d 7h | 8d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.51% | 2.58% | 2.58% | — | — | 2 | 8d 5h | 16d ago | 4m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 13.50% | 13.57% | 13.57% | — | — | 2 | 8d 5h | 16d ago | 4m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 17.03% | 17.11% | 17.11% | — | — | 2 | 6d 18h | 13d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 56.01% | 56.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 61.50% | 93.02% | 93.02% | — | — | 5 | 3d 4h | 16d ago | 13m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 57.48% | 70.32% | 70.32% | — | — | 6 | 2d 19h | 17d ago | 5m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 67.35% | 93.21% | 93.21% | — | — | 32 | 9h 42m | 13d ago | 11m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 46.44% | 46.44% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 56.87% | 90.63% | 90.63% | — | — | 148 | 2h 35m | 16d ago | 7m ago |

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
