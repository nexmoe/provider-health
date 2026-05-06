# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**600 providers** — 334 🟢 operational · 88 🟡 degraded · 178 🔴 down · 0 ⚫ unknown

_Updated 2026-05-06 06:09 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (334)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 91.86% | 91.86% | 897 ms | ↓ 0.61x | 4 | 0s | 18d ago | 7m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.90% | 97.07% | 97.07% | 3011 ms | ↑ 1.23x | 2 | 0s | 18d ago | 17m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.73% | 98.37% | 98.37% | 3059 ms | ↑ 1.64x | 7 | 0s | 18d ago | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.70% | 98.76% | 98.76% | 4365 ms | ↑ 1.11x | 21 | 0s | 10d ago | 18m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1649 ms | ↓ 0.76x | 0 | — | — | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 96.06% | 96.10% | 96.10% | 1943 ms | ↑ 1.16x | 1 | 18h 20m | 29d ago | 6m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3358 ms | → 1.00x | 0 | — | — | 4m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.97% | 91.28% | 91.28% | 2053 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1366 ms | → 1.00x | 0 | — | — | 4m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.73% | 99.77% | 99.77% | 1602 ms | ↑ 1.15x | 7 | 0s | 19d ago | 6m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 94.04% | 94.09% | 94.09% | 1364 ms | → 1.03x | 8 | 4h 1m | 14d ago | 5m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1493 ms | → 1.00x | 0 | — | — | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 99.83% | 97.67% | 97.67% | 2612 ms | ↑ 1.06x | 4 | 0s | 10d ago | 7m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 96.21% | 96.21% | 96.21% | 1449 ms | ↓ 0.53x | 1 | 13h 57m | 13d ago | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.84% | 99.88% | 99.88% | 1000 ms | ↓ 0.74x | 2 | 9m | 9d ago | 6m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 3880 ms | → 1.00x | 0 | — | — | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.47% | 95.18% | 95.18% | 1575 ms | → 0.98x | 12 | 3m | 18d ago | 7m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2085 ms | → 1.00x | 0 | — | — | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2004 ms | → 1.00x | 0 | — | — | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.43% | 97.34% | 97.34% | 3246 ms | ↑ 1.45x | 14 | 2m | 10d ago | 7m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 95.00% | 95.06% | 95.06% | 1512 ms | ↑ 1.22x | 1 | 12h 47m | 19d ago | 5m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 83.75% | 74.70% | 74.70% | 3814 ms | ↑ 2.15x | 56 | 1h 23m | 7d ago | 6m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2928 ms | → 0.99x | 0 | — | — | 4m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.77% | 77.04% | 77.04% | 1581 ms | ↓ 0.83x | 5 | 2m | 8d ago | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.70% | 96.75% | 96.75% | 2080 ms | ↑ 1.39x | 4 | 20m | 7d ago | 7m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 486 ms | ↓ 0.63x | 0 | — | — | 14m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.57% | 99.72% | 99.72% | 3675 ms | ↑ 1.42x | 9 | 3m | 17d ago | 14m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.47% | 98.55% | 98.55% | 1995 ms | ↓ 0.59x | 25 | 8m | 13d ago | 7m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 96.54% | 94.38% | 94.38% | 2430 ms | ↑ 1.09x | 63 | 6m | 18d ago | 7m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.76% | 97.92% | 97.92% | 3072 ms | ↑ 3.31x | 43 | 42m | 19d ago | 14m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3013 ms | → 1.00x | 0 | — | — | 4m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3526 ms | ↑ 1.16x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 3430 ms | ↑ 2.25x | 0 | — | — | 5m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 46.26% | 88.62% | 88.62% | 1790 ms | → 1.05x | 2 | 5d 24h | 18d ago | 8m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.77% | 99.46% | 99.46% | 2400 ms | ↑ 1.32x | 6 | 0s | 20d ago | 14m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 98.57% | 96.79% | 96.79% | 3540 ms | ↑ 1.23x | 38 | 1m | 16d ago | 7m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 93.61% | 93.66% | 93.66% | 1465 ms | → 0.97x | 3 | 11h 20m | 19d ago | 5m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2152 ms | → 1.00x | 0 | — | — | 4m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 100.00% | 90.29% | 49.06% | 49.06% | 4123 ms | ↑ 1.99x | 120 | 15m | 9d ago | 14m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.60% | 97.40% | 97.40% | 3647 ms | ↑ 1.60x | 11 | 0s | 17d ago | 7m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2266 ms | → 1.00x | 0 | — | — | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1817 ms | ↑ 1.40x | 0 | — | — | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2270 ms | → 1.00x | 0 | — | — | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.88% | 47.45% | 47.45% | 970 ms | ↑ 1.26x | 47 | 5m | 15d ago | 8m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 98.93% | 96.81% | 96.81% | 3140 ms | ↑ 1.43x | 25 | 4m | 10d ago | 7m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 87.30% | 44.41% | 44.41% | 1521 ms | ↑ 2.05x | 2 | 1d 9h | 20d ago | 8m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1947 ms | ↓ 0.93x | 0 | — | — | 4m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.64% | 99.58% | 99.58% | 3935 ms | ↑ 1.26x | 10 | 0s | 18d ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2968 ms | → 1.00x | 0 | — | — | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.40% | 98.37% | 98.37% | 3436 ms | ↑ 1.40x | 15 | 1m | 10d ago | 7m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.87% | 96.73% | 96.73% | 3199 ms | → 1.03x | 3 | 0s | 12d ago | 13m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 9.03% | 40.03% | 40.03% | 1438 ms | → 1.00x | 1 | 13d 2h | 30d ago | 14m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 94.56% | 96.22% | 96.22% | 1477 ms | → 1.00x | 35 | 38m | 8d ago | 14m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 93.54% | 93.54% | 93.54% | 1471 ms | → 1.00x | 1 | 2h 40m | 17d ago | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.73% | 78.71% | 78.71% | 2884 ms | ↑ 1.35x | 7 | 0s | 11d ago | 8m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.77% | 59.18% | 59.18% | 1683 ms | → 1.03x | 5 | 2m | 14d ago | 8m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2287 ms | → 1.00x | 0 | — | — | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.24% | 75.22% | 75.22% | 3149 ms | ↑ 1.24x | 9 | 29m | 11d ago | 8m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1689 ms | → 1.00x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.90% | 97.86% | 97.86% | 3569 ms | ↑ 1.18x | 2 | 0s | 18d ago | 7m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4682 ms | → 1.00x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.77% | 91.61% | 91.61% | 1757 ms | ↑ 1.61x | 6 | 0s | 18d ago | 8m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.90% | 97.54% | 97.54% | 1472 ms | ↑ 1.13x | 2 | 0s | 19d ago | 6m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3011 ms | → 1.00x | 0 | — | — | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.70% | 96.73% | 96.73% | 2252 ms | ↑ 1.16x | 3 | 5h 3m | 21d ago | 6m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.61% | 39.02% | 39.02% | 1362 ms | ↑ 1.23x | 31 | 3m | 20d ago | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.90% | 70.32% | 70.32% | 2340 ms | ↑ 1.46x | 2 | 0s | 18d ago | 8m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1447 ms | → 1.00x | 0 | — | — | 4m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 87.62% | 48.31% | 48.31% | 2145 ms | ↑ 1.74x | 16 | 3h 47m | 8d ago | 14m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.90% | 97.43% | 97.43% | 2534 ms | ↑ 1.71x | 2 | 0s | 18d ago | 7m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.73% | 45.28% | 45.28% | 2393 ms | ↑ 1.51x | 6 | 3m | 14d ago | 8m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.93% | 36.73% | 36.73% | 2006 ms | ↓ 0.85x | 1 | 0s | 20d ago | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2928 ms | → 0.99x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.73% | 77.31% | 77.31% | 2826 ms | ↑ 1.29x | 7 | 0s | 13d ago | 8m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.64% | 97.74% | 97.74% | 2180 ms | ↑ 1.29x | 15 | 17m | 18d ago | 8m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 1632 ms | → 1.00x | 0 | — | — | 4m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.67% | 56.46% | 56.46% | 2816 ms | ↑ 1.75x | 7 | 3m | 15d ago | 8m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2373 ms | → 1.00x | 0 | — | — | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.70% | 99.04% | 99.04% | 1835 ms | ↑ 1.13x | 8 | 0s | 17d ago | 8m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.47% | 87.22% | 87.22% | 3708 ms | ↑ 1.39x | 4 | 28m | 18d ago | 7m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 38.80% | 38.80% | 38.80% | 589 ms | → 1.00x | 1 | 1d 24h | 19d ago | 5m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.80% | 99.50% | 99.50% | 2339 ms | ↑ 1.83x | 5 | 0s | 18d ago | 8m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.66% | 97.66% | 3484 ms | ↑ 1.88x | 2 | 5h 35m | 18d ago | 8m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 54.65% | 21.80% | 21.80% | 2221 ms | ↓ 0.94x | 2 | 5d 1h | 18d ago | 7m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.93% | 99.71% | 99.71% | 3268 ms | ↑ 1.61x | 1 | 0s | 11d ago | 17m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1468 ms | → 1.00x | 0 | — | — | 4m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.84% | 97.89% | 97.89% | 4524 ms | ↑ 1.25x | 57 | 2m | 17d ago | 18m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.94% | 99.94% | 887 ms | ↓ 0.89x | 1 | 0s | 15d ago | 14m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.10% | 64.65% | 64.65% | 2643 ms | ↑ 1.31x | 6 | 33m | 18d ago | 7m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 82.58% | 82.64% | 82.64% | 251 ms | ↓ 0.67x | 10 | 7h 2m | 17d ago | 5m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 2395 ms | → 1.00x | 0 | — | — | 4m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1127 ms | → 1.00x | 0 | — | — | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.80% | 99.94% | 99.94% | 2595 ms | ↑ 1.25x | 5 | 0s | 11d ago | 18m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.02% | 99.69% | 99.69% | 4516 ms | ↑ 2.97x | 8 | 28m | 16d ago | 18m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.37% | 86.34% | 86.34% | 3077 ms | ↑ 2.35x | 18 | 0s | 7d ago | 8m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 51.95% | 67.24% | 67.24% | 2192 ms | → 1.01x | 3 | 4d 5h | 13d ago | 7m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2318 ms | → 1.00x | 0 | — | — | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 69.32% | 69.36% | 69.36% | 2070 ms | ↑ 1.44x | 2 | 3d 2h | 21d ago | 6m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2788 ms | → 0.97x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1556 ms | ↑ 1.41x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.89% | 98.89% | 1934 ms | ↑ 2.17x | 0 | — | — | 8m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.77% | 98.31% | 98.31% | 1852 ms | ↑ 1.21x | 6 | 0s | 18d ago | 7m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.80% | 94.84% | 94.84% | 1127 ms | ↓ 0.34x | 26 | 42m | 19d ago | 6m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1134 ms | → 1.00x | 0 | — | — | 4m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2376 ms | ↓ 0.95x | 0 | — | — | 4m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2762 ms | → 0.98x | 0 | — | — | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 21.09% | 85.56% | 85.56% | 3476 ms | ↑ 1.07x | 1 | 21d 1h | 30d ago | 17m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 61.34% | 65.58% | 65.58% | 1767 ms | ↑ 1.11x | 5 | 1d 16h | 13d ago | 7m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.70% | 98.26% | 98.26% | 822 ms | ↑ 1.21x | 5 | 12m | 17d ago | 7m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 100.00% | 54.21% | 54.21% | 54.21% | 519 ms | → 1.00x | 1 | 1d 1h | 18d ago | 5m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.57% | 98.83% | 98.83% | 1167 ms | ↓ 0.90x | 12 | 0s | 9d ago | 9m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1013 ms | → 1.00x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 54.61% | 10.55% | 10.55% | 1190 ms | → 1.04x | 1 | 10d 3h | 30d ago | 8m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.97% | 99.99% | 99.99% | 1004 ms | ↑ 1.32x | 0 | — | — | 19m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.93% | 99.82% | 99.82% | 669 ms | → 1.02x | 1 | 0s | 23d ago | 18m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.93% | 99.93% | 99.93% | 1308 ms | ↑ 1.23x | 1 | 0s | 29d ago | 17m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 94.70% | 94.77% | 94.77% | 2643 ms | ↑ 1.40x | 1 | 13h 10m | 18d ago | 5m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.54% | 97.45% | 97.45% | 2038 ms | ↑ 1.41x | 8 | 44m | 18d ago | 7m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 41.30% | 7.34% | 7.34% | 3167 ms | ↑ 1.57x | 1 | 13d 2h | 30d ago | 8m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.61% | 99.72% | 99.72% | 533 ms | ↓ 0.75x | 9 | 3m | 12d ago | 18m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1796 ms | → 1.00x | 0 | — | — | 4m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.02% | 98.54% | 98.54% | 4490 ms | ↑ 1.29x | 29 | 0s | 18d ago | 19m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.91% | 99.91% | 3899 ms | ↑ 2.37x | 1 | 0s | 25d ago | 17m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1433 ms | → 1.00x | 0 | — | — | 4m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.83% | 98.46% | 98.46% | 2326 ms | ↑ 1.48x | 4 | 0s | 18d ago | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.91% | 99.62% | 99.62% | 3047 ms | ↑ 1.90x | 4 | 1h 8m | 18d ago | 13m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 97.38% | 99.27% | 99.27% | 2178 ms | ↑ 1.08x | 50 | 6m | 19d ago | 8m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 41.71% | 33.15% | 33.15% | 863 ms | ↑ 1.13x | 1 | 13d 2h | 30d ago | 18m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.27% | 97.89% | 97.89% | 4399 ms | ↑ 2.46x | 20 | 30s | 18d ago | 7m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 84.72% | 84.76% | 84.76% | 2102 ms | ↑ 1.43x | 6 | 10h 26m | 8d ago | 5m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.93% | 99.95% | 99.95% | 1297 ms | → 0.98x | 1 | 0s | 22d ago | 17m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.80% | 99.89% | 99.89% | 620 ms | ↓ 0.49x | 5 | 0s | 11d ago | 17m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.80% | 99.80% | 2417 ms | ↑ 1.37x | 4 | 0s | 18d ago | 7m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.84% | 99.84% | 3133 ms | ↑ 1.15x | 3 | 0s | 18d ago | 13m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.83% | 99.85% | 99.85% | 1979 ms | ↑ 1.07x | 3 | 3m | 17d ago | 8m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.09% | 99.15% | 99.15% | 1689 ms | ↑ 1.13x | 3 | 37m | 18d ago | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.90% | 87.45% | 87.45% | 1313 ms | ↑ 1.08x | 2 | 0s | 12d ago | 8m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.44% | 99.57% | 99.57% | 1529 ms | ↑ 1.07x | 14 | 1m | 21d ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.47% | 95.18% | 95.18% | 2537 ms | → 0.99x | 18 | 16m | 10d ago | 7m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.87% | 53.96% | 53.96% | 3497 ms | ↑ 1.46x | 3 | 0s | 18d ago | 8m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 100.00% | 99.76% | 99.80% | 99.80% | 966 ms | ↓ 0.88x | 5 | 0s | 8d ago | 6m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 54.59% | 9.65% | 9.65% | 2990 ms | ↑ 2.06x | 2 | 5d 2h | 17d ago | 8m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1271 ms | → 1.00x | 0 | — | — | 4m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.77% | 99.73% | 99.73% | 2513 ms | ↑ 1.14x | 6 | 0s | 11d ago | 17m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1918 ms | ↓ 0.70x | 0 | — | — | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 54.21% | 9.45% | 9.45% | 2080 ms | ↓ 0.94x | 12 | 20h 20m | 18d ago | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.63% | 98.61% | 98.61% | 2746 ms | ↑ 1.75x | 10 | 0s | 18d ago | 7m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1557 ms | → 1.00x | 0 | — | — | 4m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.90% | 99.91% | 99.91% | 2109 ms | ↑ 1.45x | 2 | 0s | 16d ago | 17m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.08% | 99.54% | 99.54% | 2065 ms | ↑ 1.27x | 4 | 58m | 23d ago | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1976 ms | ↓ 0.90x | 0 | — | — | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.91% | 99.95% | 99.95% | 2372 ms | ↑ 1.56x | 1 | 0s | 16d ago | 5m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.80% | 98.90% | 98.90% | 2244 ms | ↑ 1.06x | 5 | 0s | 18d ago | 17m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 97.73% | 97.19% | 97.19% | 1927 ms | ↑ 1.16x | 5 | 2h 2m | 19d ago | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 98.90% | 96.70% | 96.70% | 2474 ms | ↑ 1.30x | 8 | 30m | 18d ago | 6m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 96.20% | 93.86% | 93.86% | 1160 ms | ↓ 0.89x | 54 | 11m | 17d ago | 6m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.87% | 62.91% | 62.91% | 923 ms | ↑ 1.10x | 3 | 0s | 18d ago | 8m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.80% | 98.41% | 98.41% | 2153 ms | → 1.04x | 5 | 0s | 19d ago | 15m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.70% | 75.64% | 75.64% | 2724 ms | ↑ 1.35x | 8 | 0s | 11d ago | 8m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.74% | 99.76% | 99.76% | 1947 ms | → 1.03x | 6 | 2m | 18d ago | 17m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.84% | 99.67% | 99.67% | 3517 ms | ↑ 1.95x | 3 | 3m | 19d ago | 17m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3241 ms | → 1.00x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.87% | 99.86% | 99.86% | 1224 ms | ↓ 0.90x | 3 | 0s | 18d ago | 9m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 54.38% | 31.12% | 31.12% | 2859 ms | → 1.03x | 6 | 1d 17h | 18d ago | 7m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 77.66% | 83.35% | 83.35% | 1213 ms | ↓ 0.20x | 312 | 12m | 9d ago | 16m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 83.73% | 86.86% | 86.86% | 4175 ms | ↓ 0.81x | 317 | 6m | 12d ago | 7m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.93% | 99.12% | 99.12% | 2201 ms | ↑ 1.43x | 1 | 0s | 18d ago | 8m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.93% | 60.78% | 60.78% | 1146 ms | ↓ 0.71x | 1 | 0s | 18d ago | 8m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.90% | 96.03% | 96.03% | 2114 ms | ↑ 1.88x | 2 | 0s | 18d ago | 8m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 3222 ms | → 1.00x | 0 | — | — | 4m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 53.27% | 9.31% | 9.31% | 1373 ms | ↓ 0.58x | 37 | 6h 37m | 10d ago | 14m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1677 ms | → 1.00x | 0 | — | — | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 96.94% | 90.32% | 90.32% | 3501 ms | ↑ 1.16x | 65 | 4m | 9d ago | 7m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1493 ms | → 1.00x | 0 | — | — | 4m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.93% | 50.50% | 50.50% | 2361 ms | ↑ 2.27x | 1 | 0s | 18d ago | 8m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.93% | 98.04% | 98.04% | 1467 ms | ↓ 0.88x | 1 | 0s | 18d ago | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.47% | 99.13% | 99.13% | 3931 ms | ↑ 1.77x | 12 | 6m | 15d ago | 13m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.93% | 99.72% | 99.72% | 3872 ms | ↑ 1.89x | 1 | 0s | 27d ago | 17m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 2130 ms | ↑ 1.07x | 2 | 0s | 18d ago | 7m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 91.28% | 92.07% | 92.07% | 2653 ms | ↑ 2.03x | 28 | 2h 51m | 7d ago | 7m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1180 ms | → 1.00x | 0 | — | — | 4m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 79.41% | 40.51% | 40.51% | 4066 ms | ↑ 1.37x | 5 | 20h 26m | 17d ago | 7m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 2634 ms | → 1.00x | 0 | — | — | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.93% | 99.92% | 99.92% | 190 ms | ↓ 0.38x | 1 | 0s | 30d ago | 17m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 794 ms | → 1.00x | 0 | — | — | 4m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.87% | 99.94% | 99.94% | 2283 ms | ↑ 1.65x | 2 | 1m | 18d ago | 13m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.77% | 99.47% | 99.47% | 4131 ms | ↑ 1.84x | 6 | 0s | 17d ago | 17m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.36% | 74.64% | 74.64% | 1771 ms | ↓ 0.71x | 73 | 26m | 17d ago | 8m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.93% | 82.72% | 82.72% | 3032 ms | ↑ 2.47x | 1 | 0s | 18d ago | 8m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1120 ms | → 1.00x | 0 | — | — | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.74% | 95.49% | 95.49% | 1503 ms | ↑ 1.29x | 33 | 1m | 18d ago | 8m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.90% | 99.97% | 99.97% | 941 ms | ↓ 0.76x | 2 | 0s | 18d ago | 16m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.60% | 97.95% | 97.95% | 3692 ms | ↑ 2.32x | 10 | 1m | 18d ago | 7m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.20% | 89.97% | 89.97% | 3705 ms | ↑ 1.19x | 23 | 0s | 7d ago | 8m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.70% | 97.94% | 97.94% | 1234 ms | ↓ 0.91x | 8 | 0s | 18d ago | 16m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 41.30% | 8.76% | 8.76% | 2358 ms | ↑ 1.22x | 1 | 13d 2h | 30d ago | 8m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2540 ms | → 1.00x | 0 | — | — | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.83% | 99.92% | 99.92% | 1358 ms | ↑ 1.14x | 4 | 0s | 18d ago | 7m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.90% | 53.84% | 53.84% | 2373 ms | ↑ 1.65x | 2 | 0s | 18d ago | 8m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.80% | 99.73% | 99.73% | 3271 ms | ↑ 1.58x | 5 | 0s | 11d ago | 17m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.48% | 60.87% | 60.87% | 939 ms | ↓ 0.90x | 13 | 2m | 26d ago | 18m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.87% | 98.97% | 98.97% | 1343 ms | ↑ 1.07x | 3 | 0s | 18d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 41.72% | 7.32% | 7.32% | 1000 ms | ↓ 0.93x | 1 | 13d 2h | 30d ago | 16m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | → 1.00x | 0 | — | — | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.47% | 98.47% | 98.47% | 1903 ms | ↓ 0.78x | 1 | 3h 45m | 11d ago | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1880 ms | ↓ 0.79x | 0 | — | — | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2417 ms | → 1.00x | 0 | — | — | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.45% | 92.49% | 92.49% | 4154 ms | ↓ 0.84x | 131 | 18m | 17d ago | 17m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.98% | 99.98% | 3692 ms | ↑ 1.73x | 1 | 0s | 18d ago | 8m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.53% | 98.87% | 98.87% | 2045 ms | ↑ 1.41x | 12 | 50s | 12d ago | 7m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 35.15% | 18.01% | 18.01% | 3077 ms | ↑ 1.15x | 2 | 7d 22h | 14d ago | 17m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.54% | 99.52% | 99.52% | 1304 ms | ↑ 1.23x | 6 | 12m | 21d ago | 18m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.38% | 99.38% | 1437 ms | ↑ 1.41x | 0 | — | — | 16m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.93% | 99.99% | 99.99% | 612 ms | → 0.96x | 1 | 0s | 22d ago | 19m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.20% | 97.25% | 97.25% | 3151 ms | ↑ 1.26x | 1 | 9h 60m | 24d ago | 5m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.59% | 99.64% | 99.64% | 3304 ms | ↑ 1.96x | 2 | 25m | 18d ago | 5m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.14% | 84.25% | 84.25% | 1608 ms | ↑ 1.11x | 19 | 3m | 18d ago | 7m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.38% | 99.78% | 99.78% | 1613 ms | ↑ 1.19x | 18 | 0s | 26d ago | 17m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 98.50% | 99.43% | 99.43% | 1189 ms | ↑ 1.16x | 38 | 2m | 22d ago | 18m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2124 ms | → 1.00x | 0 | — | — | 4m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.80% | 99.70% | 99.70% | 993 ms | → 1.02x | 4 | 2m | 23d ago | 18m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.80% | 99.86% | 99.86% | 3621 ms | ↑ 2.25x | 5 | 0s | 10d ago | 14m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.54% | 99.80% | 99.80% | 816 ms | ↓ 0.93x | 13 | 0s | 20d ago | 16m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.83% | 98.53% | 98.53% | 2216 ms | ↑ 1.14x | 4 | 0s | 18d ago | 7m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.37% | 96.40% | 96.40% | 1875 ms | ↑ 1.33x | 14 | 59m | 11d ago | 6m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.54% | 91.09% | 91.09% | 4368 ms | ↑ 1.98x | 12 | 50s | 18d ago | 19m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1706 ms | ↓ 0.64x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 820 ms | → 1.00x | 0 | — | — | 4m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2748 ms | → 1.00x | 0 | — | — | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.67% | 98.55% | 98.55% | 627 ms | → 1.05x | 6 | 5m | 19d ago | 8m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.54% | 98.61% | 98.61% | 2938 ms | ↑ 1.12x | 12 | 50s | 10d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2021 ms | → 1.00x | 0 | — | — | 4m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 562 ms | → 1.00x | 0 | — | — | 4m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 41.58% | 19.25% | 19.25% | 859 ms | → 1.05x | 2 | 6d 13h | 7d ago | 15m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.77% | 99.75% | 99.75% | 1386 ms | ↓ 0.88x | 5 | 2m | 18d ago | 7m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2323 ms | ↑ 1.26x | 0 | — | — | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.87% | 97.70% | 97.70% | 1809 ms | ↑ 1.24x | 3 | 0s | 18d ago | 7m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.87% | 99.91% | 99.91% | 1621 ms | ↑ 1.42x | 3 | 0s | 20d ago | 16m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.87% | 85.19% | 85.19% | 3343 ms | ↑ 1.53x | 3 | 0s | 11d ago | 8m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.91% | 99.96% | 99.96% | 1449 ms | → 0.98x | 1 | 0s | 20d ago | 5m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 92.08% | 96.08% | 96.08% | 1960 ms | ↑ 1.54x | 5 | 15h 59m | 9d ago | 8m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.61% | 99.85% | 99.85% | 1929 ms | ↑ 1.70x | 5 | 12m | 15d ago | 16m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 41.64% | 7.32% | 7.32% | 2908 ms | ↑ 1.21x | 3 | 4d 9h | 11d ago | 17m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1464 ms | ↓ 0.55x | 0 | — | — | 4m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.74% | 99.83% | 99.83% | 2318 ms | ↑ 1.47x | 2 | 30m | 13d ago | 16m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 54.57% | 9.51% | 9.51% | 2158 ms | ↓ 0.94x | 3 | 3d 9h | 13d ago | 8m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.83% | 99.87% | 99.87% | 3558 ms | ↑ 1.88x | 4 | 0s | 10d ago | 7m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.66% | 94.70% | 94.70% | 1492 ms | → 0.97x | 4 | 5h 15m | 20d ago | 5m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3127 ms | → 1.00x | 0 | — | — | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.77% | 99.75% | 99.75% | 3737 ms | ↑ 2.53x | 4 | 5m | 18d ago | 7m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.44% | 99.88% | 99.88% | 1499 ms | ↑ 1.30x | 3 | 1h 27m | 9d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.93% | 99.91% | 99.91% | 3185 ms | ↑ 2.12x | 1 | 0s | 20d ago | 16m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.57% | 99.72% | 99.72% | 2648 ms | ↑ 1.99x | 5 | 14m | 20d ago | 16m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 97.35% | 97.38% | 97.38% | 1283 ms | → 0.98x | 2 | 6h 15m | 19d ago | 6m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.57% | 99.79% | 99.79% | 2423 ms | ↑ 1.26x | 11 | 15s | 14d ago | 13m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.93% | 99.81% | 99.81% | 2792 ms | ↑ 2.84x | 1 | 0s | 21d ago | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.80% | 99.01% | 99.01% | 1508 ms | ↑ 1.37x | 5 | 0s | 17d ago | 17m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.93% | 99.99% | 99.99% | 393 ms | ↓ 0.54x | 1 | 0s | 26d ago | 16m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.80% | 95.69% | 98.64% | 98.64% | 3506 ms | ↑ 1.25x | 97 | 5m | 4d ago | 18m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.80% | 99.35% | 99.71% | 99.71% | 3595 ms | ↑ 1.88x | 4 | 1h 15m | 2d ago | 17m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.80% | 99.87% | 99.64% | 99.64% | 2674 ms | ↑ 1.38x | 3 | 0s | 4d ago | 17m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.74% | 99.72% | 99.72% | 4134 ms | ↑ 1.42x | 7 | 0s | 4d ago | 17m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.80% | 41.62% | 7.33% | 7.33% | 1507 ms | ↑ 1.06x | 4 | 3d 6h | 4d ago | 17m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.80% | 99.87% | 99.93% | 99.93% | 1399 ms | ↑ 2.76x | 3 | 0s | 4d ago | 17m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 98.85% | 99.59% | 99.59% | 2272 ms | ↑ 1.38x | 31 | 58s | 3d ago | 17m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.54% | 87.63% | 87.63% | 1720 ms | ↑ 1.31x | 12 | 50s | 3d ago | 17m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.87% | 99.91% | 99.91% | 2226 ms | ↑ 1.36x | 3 | 0s | 3d ago | 17m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.67% | 99.63% | 99.63% | 933 ms | ↓ 0.87x | 9 | 0s | 4d ago | 16m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.87% | 98.72% | 98.72% | 1795 ms | ↑ 1.18x | 3 | 0s | 3d ago | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.80% | 99.77% | 19.69% | 19.69% | 1671 ms | ↓ 0.92x | 6 | 0s | 3d ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.80% | 42.12% | 7.37% | 7.37% | 1782 ms | → 0.95x | 5 | 2d 14h | 22h ago | 14m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 41.50% | 7.25% | 7.25% | 3090 ms | → 1.05x | 2 | 6d 13h | 2d ago | 13m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.80% | 99.70% | 99.76% | 99.76% | 1870 ms | ↓ 0.81x | 4 | 0s | 4d ago | 9m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 41.27% | 7.65% | 7.65% | 2139 ms | ↑ 1.59x | 2 | 6d 13h | 4d ago | 8m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.80% | 95.72% | 96.28% | 96.28% | 4028 ms | ↑ 1.68x | 42 | 22m | 4d ago | 8m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.80% | 54.57% | 10.39% | 10.39% | 2202 ms | ↓ 0.79x | 3 | 3d 9h | 20h ago | 8m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.77% | 52.68% | 52.68% | 3732 ms | ↑ 1.73x | 6 | 0s | 3d ago | 8m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 41.25% | 37.19% | 37.19% | 1425 ms | ↓ 0.49x | 3 | 4d 9h | 2d ago | 7m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.80% | 83.75% | 80.08% | 80.08% | 4074 ms | ↓ 0.93x | 299 | 7m | 2d ago | 7m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.90% | 95.39% | 95.39% | 1630 ms | ↑ 1.48x | 2 | 0s | 4d ago | 7m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.77% | 98.82% | 98.82% | 2244 ms | ↑ 2.34x | 5 | 2m | 5d ago | 7m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.80% | 98.20% | 97.55% | 97.55% | 3548 ms | ↓ 0.93x | 45 | 2m | 3d ago | 7m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 91.97% | 92.56% | 92.56% | 4342 ms | ↑ 1.35x | 4 | 9h 52m | 3d ago | 7m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.80% | 78.88% | 90.03% | 90.03% | 1528 ms | ↓ 0.36x | 15 | 13h 3m | 5d ago | 7m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.80% | 70.55% | 24.35% | 24.35% | 3071 ms | → 1.03x | 11 | 13h 15m | 5d ago | 8m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.57% | 99.62% | 99.62% | 3133 ms | ↑ 2.44x | 8 | 0s | 3d ago | 5m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.80% | 99.77% | 98.30% | 98.30% | 2290 ms | ↑ 1.90x | 6 | 0s | 1d ago | 7m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 99.80% | 98.73% | 93.44% | 93.44% | 4672 ms | ↑ 1.63x | 31 | 3m | 2d ago | 7m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.60% | 76.24% | 13.42% | 13.42% | 2213 ms | ↑ 1.13x | 4 | 1d 6h | 4d ago | 19m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.60% | 99.64% | 90.76% | 90.76% | 1036 ms | → 1.01x | 4 | 30m | 8h ago | 17m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.44% | 99.15% | 99.15% | 2208 ms | ↑ 1.70x | 15 | 40s | 3d ago | 17m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.44% | 99.90% | 99.90% | 2873 ms | ↑ 1.47x | 13 | 2m | 3d ago | 17m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.60% | 99.17% | 99.23% | 99.23% | 2358 ms | ↓ 0.94x | 11 | 3m | 8h ago | 17m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.60% | 41.57% | 20.95% | 20.95% | 2853 ms | ↑ 1.19x | 2 | 6d 13h | 8h ago | 15m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.80% | 99.83% | 99.83% | 4594 ms | ↑ 2.10x | 5 | 0s | 2d ago | 13m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.60% | 98.71% | 98.96% | 98.96% | 3569 ms | ↑ 2.01x | 9 | 32m | 2d ago | 13m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.60% | 98.75% | 82.31% | 82.31% | 3699 ms | ↓ 0.92x | 35 | 32s | 2d ago | 13m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.60% | 95.05% | 95.12% | 95.12% | 2974 ms | ↑ 1.31x | 2 | 6h 20m | 7d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.60% | 99.87% | 98.72% | 98.72% | 1434 ms | ↑ 1.50x | 3 | 0s | 22h ago | 8m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.60% | 94.04% | 94.10% | 94.10% | 3192 ms | ↑ 1.21x | 5 | 3h 2m | 4d ago | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.60% | 99.77% | 97.63% | 97.63% | 3214 ms | ↑ 1.42x | 6 | 0s | 3d ago | 6m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.60% | 99.53% | 99.59% | 99.59% | 1448 ms | ↑ 1.21x | 10 | 6m | 4d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.60% | 94.63% | 94.69% | 94.69% | 2223 ms | ↓ 0.90x | 5 | 2h 34m | 3d ago | 5m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.60% | 99.07% | 99.04% | 99.04% | 1040 ms | ↓ 0.52x | 24 | 1m | 2d ago | 7m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.60% | 99.37% | 99.02% | 99.02% | 3827 ms | ↑ 1.90x | 18 | 0s | 4d ago | 7m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.60% | 94.11% | 94.17% | 94.17% | 2891 ms | ↑ 1.10x | 6 | 2h 49m | 13h ago | 5m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.62% | 99.67% | 99.67% | 1077 ms | ↑ 1.26x | 6 | 2m | 3d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.59% | 99.59% | 99.59% | 99.59% | 794 ms | → 1.00x | 1 | 0s | 3d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.59% | 99.29% | 99.65% | 99.65% | 4713 ms | ↑ 1.09x | 1 | 0s | 3d ago | 5m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.43% | 99.43% | 99.43% | 99.43% | 3059 ms | → 1.00x | 1 | 0s | 17h ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.41% | 98.79% | 99.65% | 99.65% | 4280 ms | ↑ 1.30x | 35 | 34s | 2d ago | 18m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.41% | 47.34% | 77.89% | 77.89% | 188 ms | ↓ 0.72x | 7 | 1d 21h | 2d ago | 18m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.41% | 97.58% | 99.44% | 99.44% | 4275 ms | ↑ 1.62x | 61 | 2m | 2d ago | 18m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.40% | 99.77% | 99.71% | 99.71% | 3383 ms | ↑ 1.71x | 6 | 0s | 2d ago | 13m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.40% | 41.15% | 7.17% | 7.17% | 2500 ms | ↑ 1.29x | 6 | 2d 4h | 3d ago | 8m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.40% | 99.48% | 99.48% | 99.48% | 4587 ms | → 1.02x | 3 | 0s | 4d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.40% | 99.60% | 99.73% | 99.73% | 2873 ms | ↑ 1.72x | 9 | 4m | 2d ago | 7m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.40% | 99.70% | 99.82% | 99.82% | 1471 ms | ↑ 1.27x | 7 | 1m | 3d ago | 7m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.40% | 99.63% | 99.70% | 99.70% | 3989 ms | ↑ 2.43x | 10 | 0s | 2d ago | 7m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.40% | 41.22% | 20.50% | 20.50% | 1168 ms | ↑ 1.27x | 4 | 3d 6h | 3d ago | 7m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.40% | 99.67% | 97.57% | 97.57% | 2837 ms | ↑ 1.66x | 8 | 1m | 2d ago | 7m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.40% | 99.33% | 98.33% | 98.33% | 3603 ms | ↑ 2.50x | 18 | 33s | 3d ago | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.40% | 97.07% | 96.68% | 96.68% | 3834 ms | ↑ 1.31x | 49 | 8m | 6d ago | 7m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.20% | 99.44% | 98.91% | 98.91% | 3002 ms | ↑ 1.16x | 13 | 5m | 15h ago | 17m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.20% | 99.60% | 97.60% | 97.60% | 1251 ms | ↑ 1.65x | 8 | 7m | 6d ago | 8m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.20% | 84.02% | 64.65% | 64.65% | 4258 ms | ↓ 0.94x | 334 | 5m | 1d ago | 14m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.19% | 99.70% | 65.93% | 65.93% | 2632 ms | ↑ 1.35x | 7 | 3m | 2d ago | 8m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.19% | 55.71% | 56.60% | 56.60% | 2331 ms | ↑ 1.12x | 29 | 8h 5m | 4d ago | 6m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.19% | 98.57% | 96.76% | 96.76% | 3874 ms | ↑ 2.12x | 32 | 3m | 2d ago | 7m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.19% | 99.73% | 99.70% | 99.70% | 4096 ms | ↑ 2.49x | 7 | 0s | 2d ago | 7m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.19% | 54.34% | 17.36% | 17.36% | 2019 ms | → 1.01x | 7 | 1d 11h | 2d ago | 8m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.19% | 99.19% | 99.19% | 99.19% | 1509 ms | → 1.00x | 2 | 0s | 3d ago | 4m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.05% | 99.05% | 99.05% | 99.05% | 777 ms | → 1.00x | 1 | 0s | 16h ago | 4m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.01% | 99.52% | 99.58% | 99.58% | 891 ms | ↑ 1.19x | 7 | 0s | 2d ago | 17m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (88)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.99% | 99.46% | 99.46% | 99.46% | 1328 ms | ↓ 0.42x | 3 | 20m | 3d ago | 4m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 98.99% | 50.73% | 50.77% | 50.77% | 4495 ms | → 1.02x | 57 | 4h 37m | 4d ago | 5m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.99% | 99.63% | 62.87% | 62.87% | 2038 ms | ↑ 1.73x | 9 | 1m | 3d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 98.86% | 98.86% | 98.86% | 98.86% | 2051 ms | → 1.00x | 1 | 20m | 14h ago | 4m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 98.85% | 98.85% | 98.85% | 98.85% | 2731 ms | → 1.00x | 1 | 20m | 8h ago | 4m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.81% | 99.18% | 99.84% | 99.84% | 4368 ms | ↑ 2.03x | 24 | 0s | 2h ago | 18m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.80% | 40.82% | 7.15% | 7.15% | 2907 ms | ↑ 1.26x | 24 | 13h 5m | 4h ago | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 99.53% | 95.78% | 95.78% | 2202 ms | ↑ 1.12x | 8 | 12m | 2d ago | 7m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.79% | 99.47% | 74.52% | 74.52% | 1507 ms | ↑ 2.49x | 8 | 15m | 6d ago | 8m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.79% | 94.46% | 94.49% | 94.49% | 1662 ms | ↓ 0.83x | 2 | 13h 21m | 3d ago | 6m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.61% | 41.50% | 77.26% | 77.26% | 3641 ms | ↑ 1.13x | 3 | 4d 9h | 3d ago | 18m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.61% | 98.95% | 99.25% | 99.25% | 2201 ms | ↓ 0.75x | 31 | 0s | 15h ago | 18m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.61% | 98.85% | 96.24% | 96.24% | 3452 ms | ↑ 1.45x | 25 | 6m | 6d ago | 17m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.60% | 99.37% | 97.56% | 97.56% | 3789 ms | ↑ 1.30x | 16 | 3m | 19h ago | 13m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.59% | 98.74% | 88.84% | 88.84% | 2024 ms | ↓ 0.87x | 30 | 2m | 14h ago | 8m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.40% | 98.56% | 91.02% | 91.02% | 1620 ms | ↓ 0.71x | 34 | 5m | 6d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.39% | 55.76% | 53.42% | 53.42% | 2548 ms | ↑ 1.21x | 14 | 17h 1m | 3d ago | 8m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.29% | 98.29% | 98.29% | 98.29% | 1181 ms | → 1.00x | 3 | 0s | 19h ago | 4m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.19% | 53.95% | 40.66% | 40.66% | 3007 ms | ↑ 1.30x | 19 | 12h 50m | 2d ago | 7m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.01% | 98.30% | 97.64% | 97.64% | 4453 ms | ↑ 1.44x | 49 | 24s | 6h ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.01% | 83.29% | 83.28% | 83.28% | 2063 ms | ↓ 0.72x | 320 | 6m | 2d ago | 17m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 97.98% | 90.73% | 90.76% | 90.76% | 2315 ms | ↑ 1.07x | 17 | 2h 30m | 3d ago | 6m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 97.82% | 95.04% | 98.74% | 98.74% | 4276 ms | ↑ 1.32x | 98 | 7m | 2h ago | 18m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 97.70% | 97.70% | 97.70% | 97.70% | 2187 ms | → 1.00x | 4 | 0s | 2d ago | 4m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 97.19% | 89.02% | 76.25% | 76.25% | 3213 ms | ↑ 1.34x | 200 | 9m | 2d ago | 13m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.18% | 93.42% | 93.49% | 93.49% | 1370 ms | ↓ 0.45x | 4 | 4h 8m | 6d ago | 5m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 96.98% | 93.13% | 93.20% | 93.20% | 1891 ms | ↓ 0.92x | 16 | 51m | 3d ago | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.75% | 96.75% | 96.75% | 96.75% | 3070 ms | → 1.00x | 5 | 12m | 1h ago | 4m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.63% | 73.16% | 73.16% | 73.16% | 3647 ms | ↓ 0.88x | 293 | 12m | 13h ago | 19m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.62% | 99.15% | 99.83% | 99.83% | 3520 ms | ↑ 2.19x | 25 | 0s | 2d ago | 17m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 96.60% | 99.28% | 38.62% | 38.62% | 1209 ms | ↓ 0.90x | 8 | 33m | 5h ago | 15m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.57% | 29.00% | 20.16% | 20.16% | 3376 ms | → 0.98x | 20 | 22h 15m | 2d ago | 7m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.21% | 97.71% | 98.68% | 98.68% | 3726 ms | → 1.01x | 49 | 7m | 17h ago | 17m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 96.20% | 97.96% | 99.06% | 99.06% | 4346 ms | ↑ 1.94x | 38 | 9m | 5h ago | 15m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 96.20% | 99.31% | 97.00% | 97.00% | 4125 ms | ↑ 1.76x | 7 | 37m | 5h ago | 15m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 96.17% | 53.71% | 32.44% | 32.44% | 3393 ms | ↑ 1.23x | 20 | 12h 18m | 2d ago | 7m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.17% | 83.63% | 80.94% | 80.94% | 4787 ms | → 1.04x | 334 | 5m | 24h ago | 7m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 96.00% | 99.28% | 53.78% | 53.78% | 4298 ms | ↑ 1.86x | 8 | 33m | 5h ago | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 96.00% | 97.66% | 99.25% | 99.25% | 4367 ms | ↑ 2.91x | 40 | 11m | 5h ago | 15m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 95.97% | 99.13% | 87.50% | 87.50% | 3551 ms | ↑ 1.73x | 18 | 9m | 2d ago | 7m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 95.62% | 38.64% | 6.79% | 6.79% | 1289 ms | ↓ 0.82x | 67 | 4h 49m | 3d ago | 17m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 95.56% | 65.34% | 32.22% | 32.22% | 3554 ms | ↑ 1.74x | 24 | 7h 8m | 2d ago | 7m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 95.36% | 82.41% | 58.12% | 58.12% | 4720 ms | ↑ 1.11x | 338 | 6m | 18h ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 95.36% | 91.36% | 91.43% | 91.43% | 3439 ms | → 0.98x | 40 | 22m | 3d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 95.36% | 97.03% | 97.10% | 97.10% | 3836 ms | ↑ 1.33x | 13 | 41m | 2d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 95.36% | 98.10% | 98.17% | 98.17% | 3400 ms | ↑ 1.43x | 12 | 23m | 2d ago | 5m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 95.36% | 97.93% | 97.93% | 97.93% | 2654 ms | ↓ 0.75x | 12 | 18m | 2d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 95.23% | 95.09% | 91.43% | 91.43% | 1484 ms | ↓ 0.84x | 70 | 15m | 2d ago | 17m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.23% | 60.25% | 56.42% | 56.42% | 3995 ms | ↑ 1.11x | 346 | 28m | 2h ago | 17m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 94.99% | 97.56% | 99.40% | 99.40% | 4327 ms | ↑ 2.71x | 52 | 6m | 2d ago | 13m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 94.83% | 94.68% | 95.21% | 95.21% | 3137 ms | ↑ 1.07x | 7 | 6m | 2d ago | 5m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.38% | 83.39% | 84.37% | 84.37% | 4574 ms | ↑ 1.19x | 330 | 5m | 5h ago | 8m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 94.25% | 94.25% | 94.25% | 94.25% | 2319 ms | → 1.00x | 6 | 13m | 1h ago | 4m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 94.21% | 84.26% | 83.88% | 83.88% | 4501 ms | ↑ 1.05x | 343 | 5m | 16h ago | 15m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 93.95% | 98.93% | 99.26% | 99.26% | 3850 ms | ↑ 2.76x | 4 | 2h 15m | 2d ago | 7m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 93.47% | 97.92% | 97.96% | 97.96% | 4634 ms | ↑ 1.73x | 40 | 4m | 5h ago | 19m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 92.74% | 96.75% | 96.75% | 96.75% | 2136 ms | ↑ 1.64x | 1 | 11h 52m | 6d ago | 4m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 92.74% | 82.51% | 77.41% | 77.41% | 4812 ms | → 1.03x | 369 | 5m | 3h ago | 7m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 92.68% | 92.68% | 92.68% | 92.68% | 3168 ms | → 1.00x | 12 | 10m | 2d ago | 5m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.54% | 96.39% | 96.39% | 96.39% | 2727 ms | ↓ 0.84x | 4 | 3h 1m | 2d ago | 4m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 92.17% | 53.28% | 9.29% | 9.29% | 2386 ms | → 0.97x | 5 | 2d 3h | 5d ago | 8m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 92.14% | 95.82% | 60.65% | 60.65% | 855 ms | ↓ 0.89x | 24 | 1h 17m | 5h ago | 8m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 91.95% | 91.95% | 91.95% | 91.95% | 3839 ms | → 1.00x | 10 | 8m | 2d ago | 5m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 91.94% | 91.33% | 66.75% | 66.75% | 3172 ms | ↑ 1.41x | 36 | 1h 15m | 23h ago | 8m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 91.13% | 96.43% | 96.47% | 96.47% | 2122 ms | ↑ 1.53x | 6 | 3h 35m | 20h ago | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 90.50% | 91.87% | 95.52% | 95.52% | 4183 ms | → 1.00x | 126 | 19m | 2h ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 89.92% | 94.34% | 92.49% | 92.49% | 3786 ms | ↑ 1.84x | 90 | 14m | 2d ago | 7m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 89.72% | 79.59% | 76.46% | 76.46% | 4831 ms | ↑ 1.08x | 431 | 6m | 1h ago | 7m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 89.66% | 89.66% | 89.66% | 89.66% | 3202 ms | → 1.00x | 11 | 13m | 2d ago | 5m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 89.31% | 78.31% | 77.56% | 77.56% | 4702 ms | ↑ 1.18x | 314 | 13m | 4h ago | 6m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 88.51% | 88.51% | 88.51% | 88.51% | 3444 ms | → 1.00x | 10 | 22m | 2d ago | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 88.21% | 60.28% | 60.28% | 60.28% | 4167 ms | → 1.00x | 14 | 1d 1h | 2d ago | 5m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 87.36% | 87.36% | 87.36% | 87.36% | 2677 ms | → 1.00x | 11 | 20m | 2d ago | 5m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 87.36% | 87.36% | 87.36% | 87.36% | 2532 ms | → 1.00x | 11 | 20m | 1d ago | 5m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 85.69% | 36.46% | 32.11% | 32.11% | 4012 ms | ↑ 1.23x | 120 | 2h 41m | 46m ago | 6m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 85.63% | 70.62% | 70.62% | 70.62% | 3480 ms | → 1.00x | 12 | 1d 6h | 1d ago | 5m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 84.97% | 39.69% | 6.94% | 6.94% | 4484 ms | ↑ 1.40x | 47 | 6h 49m | 53m ago | 13m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 83.37% | 37.53% | 6.56% | 6.56% | 3703 ms | ↓ 0.84x | 108 | 2h 57m | 1h ago | 14m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 83.17% | 96.50% | 98.71% | 98.71% | 4583 ms | ↑ 1.47x | 59 | 16m | 53m ago | 13m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 81.39% | 81.01% | 83.32% | 83.32% | 4568 ms | → 1.04x | 327 | 10m | 5h ago | 19m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 80.72% | 39.38% | 7.98% | 7.98% | 4732 ms | ↑ 1.10x | 193 | 1h 33m | 48m ago | 8m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 64.92% | 92.67% | 92.28% | 92.28% | 1770 ms | ↑ 1.18x | 39 | 1h 32m | 3d ago | 6m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 61.69% | 28.96% | 9.97% | 9.97% | 4664 ms | ↑ 1.16x | 215 | 1h 43m | 4h ago | 8m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 53.83% | 62.48% | 79.10% | 79.10% | 3921 ms | ↑ 2.43x | 5 | 2d 20h | 18d ago | 7m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 47.98% | 25.63% | 8.35% | 8.35% | 3985 ms | ↑ 1.10x | 319 | 1h 14m | 2h ago | 8m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 43.56% | 57.23% | 89.14% | 89.14% | 1363 ms | ↓ 0.38x | 208 | 1h 38m | 3d ago | 18m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 42.28% | 6.96% | 5.55% | 5.55% | 2320 ms | → 1.00x | 3 | 9d | 12h ago | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 36.47% | 24.80% | 28.07% | 28.07% | 514 ms | ↓ 0.77x | 4 | 5d 1h | 7d ago | 13m ago |

</details>

<details open>
<summary><strong>🔴 Down (178)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 96.75% | 96.75% | 96.75% | 96.75% | 4700 ms | → 1.00x | 7 | 3m | 4m ago | 4m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 94.77% | 49.20% | 26.30% | 26.30% | 3078 ms | ↑ 1.08x | 20 | 14h 34m | 8m ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 92.59% | 82.80% | 70.99% | 70.99% | 4530 ms | ↑ 1.08x | 367 | 5m | 13m ago | 13m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 88.31% | 95.34% | 92.26% | 92.26% | 2543 ms | ↑ 1.07x | 61 | 22m | 16h ago | 6m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 60.20% | 54.94% | 61.76% | 61.76% | 4871 ms | ↑ 1.05x | 575 | 17m | 54m ago | 14m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 45.56% | 89.32% | 89.36% | 89.36% | 1628 ms | ↑ 1.53x | 2 | 1d 21h | 4d ago | 6m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 20.56% | 54.23% | 54.28% | 54.28% | 1508 ms | → 0.96x | 10 | 22h 59m | 5d ago | 5m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 20.41% | 20.41% | 20.41% | 20.41% | 3395 ms | → 1.00x | 1 | 2d 18h | 3d ago | 4m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 13.20% | 21.14% | 4.53% | 4.53% | 4557 ms | ↑ 1.26x | 6 | 3d 15h | 6d ago | 14m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 9.35% | 9.35% | 9.35% | 9.35% | 3190 ms | → 1.00x | 21 | 3h 15m | 2h ago | 4m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.99% | 40.63% | 67.34% | 67.34% | 3730 ms | ↓ 0.93x | 344 | 1h 14m | 7h ago | 19m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.40% | 75.57% | 75.62% | 75.62% | 920 ms | ↓ 0.77x | 5 | 1d 13h | 2d ago | 5m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 58.08% | 91.90% | 91.90% | — | — | 6 | 2d 20h | 17d ago | 17m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 76.09% | 76.09% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 57.05% | 81.81% | 81.81% | — | — | 29 | 14h 7m | 17d ago | 9m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 78.55% | 87.06% | 87.06% | — | — | 6 | 1d 12h | 9d ago | 7m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.34% | 6.34% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 11.03% | 13.90% | 13.90% | — | — | 11 | 2d 12h | 17d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.77% | 3.77% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 56.73% | 92.17% | 92.17% | — | — | 42 | 9h 42m | 17d ago | 14m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.45% | 40.45% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 28.60% | 28.60% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 46.24% | 82.73% | 82.73% | — | — | 230 | 1h 52m | 17d ago | 18m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 50.58% | 68.34% | 68.34% | — | — | 188 | 2h 13m | 17d ago | 7m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 58.71% | 34.80% | 34.80% | — | — | 1 | 16d 22h | 17d ago | 8m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 58.21% | 92.63% | 92.63% | — | — | 2 | 8d 11h | 17d ago | 18m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 24.30% | 69.76% | 69.76% | — | — | 129 | 4h 27m | 23d ago | 16m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 17m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 21h | 20d ago | 18m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 57.77% | 85.56% | 85.56% | — | — | 16 | 1d 1h | 17d ago | 17m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.19% | 19.19% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 57.99% | 59.89% | 59.89% | — | — | 13 | 1d 7h | 17d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 42.46% | 42.46% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.80% | 4.09% | 4.09% | — | — | 3 | 9d 22h | 17d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 58.67% | 92.79% | 92.79% | — | — | 1 | 16d 22h | 17d ago | 8m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.73% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 17d ago | 13m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 49.72% | 57.64% | 57.64% | — | — | 17 | 1d 2h | 17d ago | 15m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 32.84% | 32.84% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 13.00% | 2.28% | 2.28% | — | — | 7 | 3d 21h | 17d ago | 14m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 24.28% | 46.87% | 46.87% | — | — | 4 | 5d 16h | 13d ago | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 60.65% | 60.65% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 40.67% | 28.79% | 28.79% | — | — | 220 | 2h 6m | 17d ago | 8m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 57.57% | 33.45% | 33.45% | — | — | 30 | 13h 33m | 17d ago | 8m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.72% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 17d ago | 14m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 63.56% | 63.56% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 17m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.18% | 7.18% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 73.13% | 73.13% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 57.89% | 92.57% | 92.57% | — | — | 12 | 1d 10h | 17d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 18m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 10.51% | 10.51% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 51.83% | 88.33% | 88.33% | — | — | 164 | 2h 31m | 17d ago | 9m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 11h | 2d ago | 4m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 38.60% | 38.60% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 1.54% | 12.66% | 12.66% | — | — | 1 | 29d 17h | 30d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 58.80% | 58.80% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 18m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 28.69% | 85.19% | 85.19% | — | — | 156 | 3h 29m | 17d ago | 19m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 51.92% | 51.92% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 19m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.20% | 47.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 58.16% | 92.58% | 92.58% | — | — | 3 | 5d 15h | 17d ago | 19m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.07% | 65.37% | 65.37% | — | — | 3 | 9d 24h | 29d ago | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.69% | 43.43% | 43.43% | — | — | 2 | 14d 22h | 17d ago | 17m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 22h | 20d ago | 17m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 9m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 11h | 2d ago | 9m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 36.96% | 36.79% | 36.79% | — | — | 359 | 1h 17m | 17d ago | 8m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 13.69% | 2.92% | 2.92% | — | — | 4 | 6d 18h | 17d ago | 8m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.39% | 46.39% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 57.21% | 92.51% | 92.51% | — | — | 21 | 19h 28m | 17d ago | 13m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 58.67% | 37.46% | 37.46% | — | — | 1 | 16d 22h | 17d ago | 8m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 58.15% | 92.45% | 92.45% | — | — | 4 | 4d 5h | 17d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 45.64% | 45.68% | 45.68% | — | — | 1 | 16d 22h | 17d ago | 17m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 30.87% | 53.78% | 53.78% | — | — | 2 | 11d 18h | 24d ago | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 54.00% | 89.85% | 89.85% | — | — | 108 | 3h 48m | 17d ago | 18m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.40% | 0.12% | 0.12% | — | — | 12 | 2d 12h | 18d ago | 13m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 78.46% | 83.57% | 83.57% | — | — | 3 | 2d 21h | 8d ago | 8m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.06% | 0.06% | 0.06% | — | — | 2 | 9d 22h | 12d ago | 8m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 9m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 33.59% | 88.13% | 88.13% | — | — | 29 | 18h 22m | 22d ago | 13m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 58.64% | 73.53% | 73.53% | — | — | 2 | 8d 11h | 17d ago | 7m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.88% | 3.88% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 48.23% | 48.23% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 54.97% | 86.37% | 86.37% | — | — | 57 | 7h 15m | 17d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 32.99% | 65.88% | 65.88% | — | — | 396 | 1h 13m | 17d ago | 14m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 16m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.60% | 31.60% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 21.00% | 21.06% | 21.06% | — | — | 24 | 18h 4m | 17d ago | 5m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 12.04% | 16.50% | 16.50% | — | — | 275 | 2h 13m | 17d ago | 7m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 26.92% | 26.92% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 11h | 3d ago | 4m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 17m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 57.44% | 77.14% | 77.14% | — | — | 34 | 11h 57m | 17d ago | 7m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 26.96% | 27.04% | 27.04% | — | — | 3 | 4d 6h | 12d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.50% | 19.50% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 55.28% | 55.28% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 11h | 2d ago | 4m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 61.61% | 61.61% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 58.56% | 60.36% | 60.36% | — | — | 5 | 3d 9h | 17d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 67.27% | 75.22% | 75.22% | — | — | 6 | 2d 4h | 13d ago | 7m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 35.50% | 6.19% | 6.19% | — | — | 3 | 7d 6h | 17d ago | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 23h | 22d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 16m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 58.22% | 92.67% | 92.67% | — | — | 2 | 8d 11h | 17d ago | 16m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 18m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 57.04% | 91.46% | 91.46% | — | — | 30 | 13h 34m | 17d ago | 16m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 34.20% | 71.33% | 71.33% | — | — | 362 | 1h 18m | 17d ago | 19m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 15.04% | 83.76% | 83.76% | — | — | 11 | 2d 10h | 27d ago | 17m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 57.18% | 91.30% | 91.30% | — | — | 33 | 12h 18m | 17d ago | 17m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.03% | 22.03% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 9.65% | 9.65% | 9.65% | — | — | 3 | 5d 21h | 15d ago | 17m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 58.57% | 38.40% | 38.40% | — | — | 4 | 4d 5h | 17d ago | 8m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.63% | 76.25% | 76.25% | — | — | 2 | 13d 23h | 24d ago | 17m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 27.25% | 30.41% | 30.41% | — | — | 104 | 5h 18m | 21d ago | 7m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.40% | 9.40% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 48.17% | 73.37% | 73.37% | — | — | 222 | 1h 54m | 17d ago | 19m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 11h | 2d ago | 9m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 75.52% | 75.52% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 44.65% | 44.97% | 44.97% | — | — | 2 | 1d 5h | 2d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 58.66% | 60.69% | 60.69% | — | — | 2 | 8d 11h | 17d ago | 6m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 55.55% | 55.61% | 55.61% | — | — | 3 | 5d 14h | 16d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 17.84% | 17.84% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 20h | 20d ago | 17m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.06% | 20.06% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 33.80% | 29.57% | 29.57% | — | — | 3 | 6d 7h | 9d ago | 7m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.37% | 2.44% | 2.44% | — | — | 2 | 8d 17h | 17d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 12.85% | 12.91% | 12.91% | — | — | 2 | 8d 18h | 17d ago | 5m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 16.11% | 16.18% | 16.18% | — | — | 2 | 7d 7h | 14d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 55.77% | 55.77% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 58.18% | 92.63% | 92.63% | — | — | 5 | 3d 9h | 17d ago | 16m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 54.01% | 69.25% | 69.25% | — | — | 6 | 2d 24h | 18d ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 64.57% | 92.82% | 92.82% | — | — | 21 | 15h 55m | 14d ago | 13m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 46.25% | 46.25% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 53.60% | 90.25% | 90.25% | — | — | 143 | 2h 51m | 17d ago | 8m ago |

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
