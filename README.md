# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**595 providers** — 333 🟢 operational · 79 🟡 degraded · 183 🔴 down · 0 ⚫ unknown

_Updated 2026-05-04 06:17 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (333)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.84% | 91.72% | 91.72% | 1649 ms | ↓ 0.75x | 4 | 0s | 16d ago | 25m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.05% | 97.05% | 3383 ms | ↑ 1.34x | 2 | 0s | 16d ago | 35m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.68% | 98.34% | 98.34% | 2808 ms | ↑ 1.40x | 9 | 0s | 16d ago | 25m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 98.58% | 98.64% | 98.64% | 4217 ms | ↑ 1.10x | 21 | 0s | 8d ago | 36m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1755 ms | ↓ 0.82x | 0 | — | — | 22m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.86% | 95.90% | 95.90% | 2263 ms | ↑ 1.32x | 1 | 18h 20m | 27d ago | 23m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4003 ms | → 1.00x | 0 | — | — | 22m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.97% | 91.21% | 91.21% | 2213 ms | ↑ 1.55x | 0 | — | — | 37m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1320 ms | → 1.00x | 0 | — | — | 22m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.73% | 99.76% | 99.76% | 1729 ms | ↑ 1.32x | 7 | 0s | 17d ago | 23m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 93.59% | 93.64% | 93.64% | 1780 ms | ↑ 1.18x | 8 | 4h 1m | 12d ago | 23m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2222 ms | → 1.00x | 0 | — | — | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 99.84% | 97.59% | 97.59% | 2674 ms | ↑ 1.40x | 4 | 0s | 8d ago | 24m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 95.66% | 95.66% | 95.66% | 2785 ms | → 0.96x | 1 | 13h 57m | 11d ago | 22m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.88% | 99.88% | 1264 ms | ↓ 0.91x | 2 | 9m | 7d ago | 23m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 4569 ms | → 1.00x | 0 | — | — | 22m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.14% | 95.05% | 95.05% | 1563 ms | → 0.97x | 13 | 10m | 16d ago | 25m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2101 ms | → 1.00x | 0 | — | — | 22m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2153 ms | → 1.00x | 0 | — | — | 22m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.05% | 97.24% | 97.24% | 3353 ms | ↑ 1.70x | 25 | 2m | 8d ago | 24m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 94.48% | 94.56% | 94.56% | 1547 ms | ↑ 1.52x | 1 | 12h 47m | 17d ago | 23m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2941 ms | → 1.00x | 0 | — | — | 22m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 552 ms | ↓ 0.68x | 0 | — | — | 33m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.53% | 99.72% | 99.72% | 3683 ms | ↑ 1.41x | 11 | 3m | 15d ago | 32m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 98.00% | 98.51% | 98.51% | 2558 ms | ↑ 1.25x | 38 | 6m | 11d ago | 25m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 94.82% | 94.22% | 94.22% | 2358 ms | → 1.04x | 106 | 5m | 16d ago | 25m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 91.80% | 97.90% | 97.90% | 3022 ms | ↑ 2.81x | 76 | 25m | 17d ago | 33m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3018 ms | → 1.00x | 0 | — | — | 22m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3517 ms | ↑ 1.15x | 0 | — | — | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 3417 ms | ↑ 2.14x | 0 | — | — | 23m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 39.80% | 88.53% | 88.53% | 1775 ms | ↑ 1.11x | 2 | 6d 24h | 16d ago | 26m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.78% | 99.45% | 99.45% | 2397 ms | ↑ 1.42x | 6 | 0s | 18d ago | 33m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.62% | 96.71% | 96.71% | 3551 ms | ↑ 1.34x | 64 | 2m | 14d ago | 25m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 93.11% | 93.17% | 93.17% | 1736 ms | ↑ 1.15x | 3 | 11h 20m | 17d ago | 23m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2875 ms | → 1.00x | 0 | — | — | 22m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.52% | 97.29% | 97.29% | 3553 ms | ↑ 1.38x | 14 | 0s | 15d ago | 24m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2782 ms | → 1.00x | 0 | — | — | 22m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1814 ms | ↑ 1.24x | 0 | — | — | 22m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 100.00% | 100.00% | 100.00% | 3010 ms | → 1.00x | 0 | — | — | 21m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.94% | 46.97% | 46.97% | 960 ms | ↑ 1.27x | 48 | 5m | 13d ago | 26m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 98.73% | 96.69% | 96.69% | 3373 ms | ↑ 1.76x | 33 | 3m | 8d ago | 24m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2766 ms | → 1.00x | 0 | — | — | 22m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 87.89% | 43.85% | 43.85% | 1510 ms | ↑ 2.09x | 2 | 1d 9h | 18d ago | 26m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2030 ms | → 1.00x | 0 | — | — | 22m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.65% | 99.58% | 99.58% | 3935 ms | ↑ 1.23x | 10 | 0s | 16d ago | 31m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2579 ms | → 1.00x | 0 | — | — | 22m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.08% | 98.33% | 98.33% | 3377 ms | ↑ 1.50x | 26 | 47s | 8d ago | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.53% | 96.70% | 96.70% | 3086 ms | ↓ 0.88x | 13 | 46s | 10d ago | 31m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 1.53% | 39.50% | 39.50% | 1405 ms | → 1.00x | 1 | 15d 1h | 30d ago | 32m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 85.95% | 86.07% | 86.07% | 1614 ms | → 1.00x | 1 | 2h 40m | 15d ago | 22m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.40% | 78.38% | 78.38% | 3026 ms | ↑ 1.64x | 17 | 35s | 9d ago | 25m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.68% | 58.68% | 58.68% | 1528 ms | → 0.98x | 8 | 1m | 12d ago | 26m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2255 ms | → 1.00x | 0 | — | — | 22m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.05% | 74.84% | 74.84% | 3192 ms | ↑ 1.26x | 15 | 18m | 9d ago | 25m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2315 ms | → 1.00x | 0 | — | — | 22m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.87% | 97.78% | 97.78% | 3583 ms | ↑ 1.45x | 3 | 0s | 16d ago | 24m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4708 ms | → 1.00x | 0 | — | — | 22m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.75% | 91.53% | 91.53% | 1757 ms | ↑ 1.67x | 7 | 0s | 16d ago | 26m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.39% | 97.43% | 97.43% | 1581 ms | ↑ 1.30x | 3 | 4h 10m | 17d ago | 23m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4015 ms | → 1.00x | 0 | — | — | 22m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.52% | 96.56% | 96.56% | 2357 ms | ↑ 1.39x | 3 | 5h 3m | 19d ago | 23m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.23% | 38.45% | 38.45% | 1268 ms | ↑ 1.20x | 45 | 2m | 18d ago | 26m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.90% | 69.89% | 69.89% | 2331 ms | ↑ 1.57x | 2 | 0s | 16d ago | 25m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.90% | 97.36% | 97.36% | 2817 ms | ↑ 1.97x | 2 | 0s | 16d ago | 25m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.75% | 44.81% | 44.81% | 2408 ms | ↑ 1.51x | 6 | 3m | 12d ago | 26m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 36.20% | 36.20% | 2001 ms | ↓ 0.76x | 1 | 0s | 18d ago | 33m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2985 ms | → 1.00x | 0 | — | — | 22m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.75% | 76.96% | 76.96% | 2857 ms | ↑ 1.63x | 7 | 0s | 11d ago | 25m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.51% | 97.72% | 97.72% | 2344 ms | ↑ 1.61x | 21 | 12m | 16d ago | 26m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 1935 ms | → 1.00x | 0 | — | — | 22m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.68% | 55.99% | 55.99% | 2808 ms | ↑ 1.91x | 7 | 3m | 13d ago | 26m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.59% | 99.03% | 99.03% | 2059 ms | ↑ 1.18x | 12 | 0s | 15d ago | 26m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.49% | 87.00% | 87.00% | 3728 ms | ↑ 1.44x | 4 | 28m | 16d ago | 25m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 10.68% | 10.97% | 10.97% | 917 ms | → 1.00x | 1 | 1d 24h | 17d ago | 23m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.81% | 99.49% | 99.49% | 2334 ms | ↑ 1.78x | 5 | 0s | 16d ago | 26m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.00% | 97.63% | 97.63% | 3473 ms | ↑ 1.64x | 3 | 3h 47m | 16d ago | 26m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 35.69% | 6.60% | 6.60% | 2070 ms | → 1.01x | 4 | 3d 17h | 11d ago | 32m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 47.62% | 20.31% | 20.31% | 2205 ms | ↑ 1.09x | 2 | 6d 1h | 16d ago | 25m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.94% | 99.71% | 99.71% | 3128 ms | ↑ 1.70x | 1 | 0s | 9d ago | 35m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.59% | 98.93% | 98.93% | 3110 ms | ↑ 1.20x | 12 | 0s | 9d ago | 35m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.47% | 97.87% | 97.87% | 4626 ms | ↑ 1.33x | 72 | 1m | 15d ago | 36m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 953 ms | → 0.95x | 1 | 0s | 13d ago | 33m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.11% | 63.80% | 63.80% | 2893 ms | ↑ 1.50x | 7 | 29m | 16d ago | 25m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 81.24% | 81.30% | 81.30% | 348 ms | ↓ 0.66x | 10 | 7h 2m | 15d ago | 23m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 3950 ms | → 1.00x | 0 | — | — | 21m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1958 ms | → 1.00x | 0 | — | — | 22m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.81% | 99.94% | 99.94% | 2922 ms | ↑ 1.35x | 5 | 0s | 9d ago | 36m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.03% | 99.69% | 99.69% | 4472 ms | ↑ 2.64x | 9 | 24m | 14d ago | 36m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 54.18% | 66.22% | 66.22% | 2312 ms | ↑ 1.09x | 3 | 4d 5h | 11d ago | 25m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 3049 ms | → 1.00x | 0 | — | — | 22m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 67.55% | 67.60% | 67.60% | 2061 ms | ↑ 1.29x | 2 | 3d 2h | 19d ago | 23m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2915 ms | → 1.00x | 0 | — | — | 22m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1884 ms | ↑ 1.75x | 0 | — | — | 23m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.88% | 98.88% | 1928 ms | ↑ 2.18x | 0 | — | — | 26m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.71% | 98.28% | 98.28% | 1652 ms | ↑ 1.09x | 8 | 0s | 16d ago | 25m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.50% | 94.54% | 94.54% | 1351 ms | ↓ 0.46x | 26 | 42m | 17d ago | 23m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1097 ms | → 1.00x | 0 | — | — | 22m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 2384 ms | → 1.00x | 0 | — | — | 22m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2775 ms | → 1.00x | 0 | — | — | 22m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2671 ms | → 1.00x | 0 | — | — | 22m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 62.65% | 64.95% | 64.95% | 1773 ms | ↑ 1.15x | 13 | 15h 19m | 11d ago | 25m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.68% | 98.21% | 98.21% | 815 ms | ↑ 1.27x | 6 | 10m | 15d ago | 25m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 100.00% | 17.88% | 18.33% | 18.33% | 514 ms | → 1.00x | 1 | 1d 1h | 16d ago | 23m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.53% | 98.82% | 98.82% | 1683 ms | ↑ 1.23x | 14 | 0s | 7d ago | 27m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 47.58% | 9.73% | 9.73% | 1226 ms | ↑ 1.12x | 1 | 12d 3h | 30d ago | 26m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.97% | 99.99% | 99.99% | 1101 ms | ↑ 1.48x | 0 | — | — | 37m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 682 ms | → 1.00x | 1 | 0s | 21d ago | 36m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1224 ms | ↑ 1.25x | 1 | 0s | 27d ago | 35m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 94.12% | 94.20% | 94.20% | 2641 ms | ↑ 1.36x | 1 | 13h 10m | 16d ago | 23m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.41% | 99.72% | 99.72% | 3537 ms | ↑ 2.03x | 3 | 1h 40m | 9d ago | 35m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.51% | 97.40% | 97.40% | 1514 ms | ↑ 1.06x | 11 | 32m | 16d ago | 25m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 34.91% | 6.56% | 6.56% | 2711 ms | ↑ 1.40x | 2 | 7d 13h | 29d ago | 26m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.63% | 99.72% | 99.72% | 521 ms | ↓ 0.70x | 9 | 3m | 10d ago | 36m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 3141 ms | → 1.00x | 0 | — | — | 22m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 98.94% | 98.53% | 98.53% | 4479 ms | ↑ 1.30x | 33 | 0s | 16d ago | 37m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 3758 ms | ↑ 2.07x | 1 | 0s | 23d ago | 35m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1480 ms | → 1.00x | 0 | — | — | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.56% | 98.42% | 98.42% | 2358 ms | ↑ 1.61x | 10 | 3m | 16d ago | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 35.22% | 20.31% | 20.31% | 2342 ms | ↑ 1.07x | 1 | 15d 1h | 30d ago | 33m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 98.03% | 98.07% | 98.07% | 2034 ms | ↑ 1.26x | 5 | 1h 26m | 13d ago | 23m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.96% | 99.62% | 99.62% | 2990 ms | ↑ 1.70x | 4 | 1h 8m | 16d ago | 32m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.21% | 99.26% | 99.26% | 2303 ms | ↑ 1.19x | 82 | 5m | 17d ago | 26m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 35.31% | 32.59% | 32.59% | 848 ms | ↑ 1.11x | 1 | 15d 1h | 30d ago | 36m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.30% | 97.84% | 97.84% | 4143 ms | ↑ 2.18x | 20 | 30s | 16d ago | 25m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.94% | 99.95% | 99.95% | 1450 ms | → 1.03x | 1 | 0s | 20d ago | 35m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.72% | 90.69% | 90.69% | 1031 ms | → 1.01x | 3 | 33m | 11d ago | 35m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.81% | 99.89% | 99.89% | 594 ms | ↓ 0.41x | 5 | 0s | 9d ago | 35m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.78% | 99.79% | 99.79% | 2356 ms | ↑ 1.23x | 5 | 2m | 16d ago | 25m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.84% | 99.84% | 3087 ms | ↑ 1.24x | 3 | 0s | 16d ago | 31m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.84% | 99.84% | 99.84% | 2059 ms | ↑ 1.13x | 3 | 3m | 15d ago | 26m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.01% | 99.07% | 99.07% | 1607 ms | ↑ 1.08x | 3 | 37m | 16d ago | 23m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.87% | 87.24% | 87.24% | 1146 ms | → 1.01x | 3 | 0s | 10d ago | 25m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.19% | 99.57% | 99.57% | 1514 ms | → 1.03x | 22 | 1m | 19d ago | 36m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.10% | 95.08% | 95.08% | 2856 ms | ↑ 1.12x | 30 | 10m | 8d ago | 25m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 53.49% | 53.49% | 3362 ms | ↑ 1.46x | 4 | 0s | 16d ago | 26m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 47.56% | 8.89% | 8.89% | 2308 ms | ↑ 1.69x | 2 | 6d 2h | 15d ago | 26m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1561 ms | → 1.00x | 0 | — | — | 21m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.78% | 99.73% | 99.73% | 2479 ms | ↑ 1.14x | 6 | 0s | 9d ago | 35m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 2973 ms | ↓ 0.92x | 0 | — | — | 22m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 47.20% | 8.70% | 8.70% | 2369 ms | → 1.01x | 12 | 1d | 16d ago | 26m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.43% | 98.58% | 98.58% | 2495 ms | ↑ 1.50x | 17 | 0s | 16d ago | 25m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 100.00% | 100.00% | 3015 ms | → 1.00x | 0 | — | — | 22m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 2374 ms | ↑ 1.49x | 2 | 0s | 14d ago | 36m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.13% | 99.54% | 99.54% | 2065 ms | ↑ 1.35x | 4 | 58m | 21d ago | 36m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2232 ms | → 1.00x | 0 | — | — | 22m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.90% | 99.95% | 99.95% | 2370 ms | ↑ 1.69x | 1 | 0s | 14d ago | 23m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.78% | 98.89% | 98.89% | 2427 ms | ↑ 1.12x | 6 | 0s | 16d ago | 35m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 97.01% | 97.05% | 97.05% | 2003 ms | ↑ 1.26x | 5 | 2h 40m | 17d ago | 23m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.84% | 38.20% | 38.20% | 1407 ms | ↓ 0.93x | 4 | 0s | 16d ago | 34m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.52% | 96.55% | 96.55% | 1959 ms | ↑ 1.12x | 9 | 1h 47m | 16d ago | 24m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 93.53% | 93.56% | 93.56% | 1309 ms | ↑ 1.08x | 54 | 25m | 15d ago | 23m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.87% | 62.43% | 62.43% | 1123 ms | ↑ 1.34x | 3 | 0s | 16d ago | 26m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.69% | 98.40% | 98.40% | 2075 ms | → 1.05x | 9 | 0s | 17d ago | 34m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.62% | 75.27% | 75.27% | 2836 ms | ↑ 1.69x | 11 | 0s | 9d ago | 25m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.75% | 99.76% | 99.76% | 2223 ms | ↑ 1.16x | 6 | 2m | 16d ago | 35m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.84% | 99.66% | 99.66% | 3497 ms | ↑ 2.00x | 3 | 3m | 17d ago | 36m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.87% | 99.85% | 99.85% | 1192 ms | ↓ 0.77x | 3 | 0s | 16d ago | 27m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 47.35% | 29.22% | 29.22% | 3005 ms | → 0.97x | 6 | 2d 1h | 16d ago | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 81.97% | 86.51% | 86.51% | 4471 ms | ↓ 0.93x | 369 | 6m | 10d ago | 25m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.94% | 99.11% | 99.11% | 2242 ms | ↑ 1.54x | 1 | 0s | 16d ago | 26m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 60.33% | 60.33% | 1322 ms | ↑ 1.13x | 1 | 0s | 16d ago | 26m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.98% | 95.98% | 1968 ms | ↑ 1.63x | 2 | 0s | 16d ago | 26m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 4163 ms | → 1.00x | 0 | — | — | 22m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 46.30% | 8.56% | 8.56% | 1894 ms | ↓ 0.69x | 37 | 7h 55m | 8d ago | 32m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2828 ms | → 1.00x | 0 | — | — | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1905 ms | → 1.00x | 0 | — | — | 22m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.94% | 49.98% | 49.98% | 2449 ms | ↑ 2.75x | 1 | 0s | 16d ago | 26m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.90% | 98.00% | 98.00% | 1722 ms | ↑ 1.12x | 2 | 0s | 16d ago | 25m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.83% | 99.12% | 99.12% | 4041 ms | ↑ 2.01x | 31 | 3m | 13d ago | 31m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.91% | 99.72% | 99.72% | 3732 ms | ↑ 1.96x | 2 | 0s | 25d ago | 36m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.87% | 99.87% | 99.87% | 2441 ms | ↑ 1.22x | 3 | 0s | 16d ago | 25m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1227 ms | → 1.00x | 0 | — | — | 22m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 71.22% | 39.05% | 39.05% | 4252 ms | ↑ 1.46x | 5 | 1d 6h | 15d ago | 25m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 100.00% | 100.00% | 100.00% | 100.00% | 3609 ms | → 1.00x | 0 | — | — | 22m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 189 ms | ↓ 0.33x | 1 | 0s | 28d ago | 36m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 761 ms | → 1.00x | 0 | — | — | 22m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.87% | 99.94% | 99.94% | 2326 ms | ↑ 1.90x | 2 | 1m | 16d ago | 32m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.69% | 99.47% | 99.47% | 4061 ms | ↑ 1.86x | 9 | 0s | 15d ago | 36m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.72% | 74.24% | 74.24% | 2159 ms | ↓ 0.85x | 74 | 25m | 15d ago | 25m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 82.43% | 82.43% | 3026 ms | ↑ 2.07x | 1 | 0s | 16d ago | 25m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1328 ms | → 1.00x | 0 | — | — | 22m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.26% | 95.45% | 95.45% | 1441 ms | ↑ 1.25x | 49 | 1m | 16d ago | 26m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.97% | 99.97% | 1062 ms | ↓ 0.82x | 2 | 0s | 16d ago | 35m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.56% | 97.89% | 97.89% | 3689 ms | ↑ 2.42x | 12 | 50s | 16d ago | 25m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.72% | 97.92% | 97.92% | 1374 ms | ↓ 0.94x | 8 | 0s | 16d ago | 35m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 34.88% | 7.84% | 7.84% | 2355 ms | ↑ 1.32x | 1 | 15d 1h | 30d ago | 26m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 93.71% | 93.78% | 93.78% | 2690 ms | ↑ 1.09x | 5 | 3h 19m | 9d ago | 23m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2742 ms | → 1.00x | 0 | — | — | 22m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.84% | 99.92% | 99.92% | 1492 ms | ↑ 1.21x | 4 | 0s | 16d ago | 25m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 53.32% | 53.32% | 2530 ms | ↑ 1.95x | 2 | 0s | 16d ago | 26m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.72% | 99.72% | 99.72% | 3221 ms | ↑ 1.65x | 8 | 0s | 9d ago | 35m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.88% | 60.55% | 60.55% | 955 ms | ↓ 0.87x | 31 | 1m | 24d ago | 36m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.87% | 98.96% | 98.96% | 1525 ms | ↑ 1.27x | 3 | 0s | 16d ago | 35m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 35.32% | 6.55% | 6.55% | 1011 ms | ↓ 0.94x | 1 | 15d 1h | 30d ago | 34m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2563 ms | → 1.00x | 0 | — | — | 22m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.24% | 98.24% | 98.24% | 2029 ms | ↓ 0.86x | 1 | 3h 45m | 9d ago | 22m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2961 ms | ↑ 1.19x | 0 | — | — | 22m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3756 ms | → 1.00x | 0 | — | — | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 47.58% | 9.66% | 9.66% | 2550 ms | → 1.00x | 2 | 6d 2h | 15d ago | 26m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.72% | 92.43% | 92.43% | 4154 ms | ↓ 0.81x | 139 | 17m | 15d ago | 35m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.22% | 99.28% | 99.28% | 2636 ms | → 0.98x | 10 | 1m | 9d ago | 35m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.98% | 99.98% | 3731 ms | ↑ 1.85x | 1 | 0s | 16d ago | 25m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.49% | 98.84% | 98.84% | 1889 ms | ↑ 1.27x | 14 | 43s | 10d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2150 ms | → 1.00x | 0 | — | — | 22m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 29.04% | 15.98% | 15.98% | 3047 ms | ↑ 1.11x | 2 | 8d 22h | 12d ago | 36m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.41% | 99.52% | 99.52% | 1448 ms | ↑ 1.29x | 11 | 6m | 19d ago | 36m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.38% | 99.38% | 1547 ms | ↑ 1.65x | 0 | — | — | 35m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 799 ms | ↑ 1.08x | 1 | 0s | 20d ago | 37m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 97.00% | 97.05% | 97.05% | 3118 ms | ↑ 1.32x | 1 | 9h 60m | 22d ago | 23m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.56% | 99.62% | 99.62% | 3296 ms | ↑ 1.80x | 2 | 25m | 16d ago | 23m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.79% | 83.91% | 83.91% | 1728 ms | ↑ 1.37x | 29 | 3m | 16d ago | 25m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 98.94% | 99.77% | 99.77% | 1648 ms | ↑ 1.17x | 33 | 0s | 24d ago | 35m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.63% | 99.42% | 99.42% | 1347 ms | ↑ 1.16x | 59 | 3m | 20d ago | 36m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2486 ms | → 1.00x | 0 | — | — | 22m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.81% | 99.70% | 99.70% | 1090 ms | ↑ 1.09x | 4 | 2m | 21d ago | 36m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.75% | 99.86% | 99.86% | 3537 ms | ↑ 2.00x | 7 | 0s | 8d ago | 33m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.34% | 99.80% | 99.80% | 862 ms | ↓ 0.94x | 20 | 0s | 18d ago | 34m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.65% | 98.50% | 98.50% | 2235 ms | ↑ 1.23x | 10 | 0s | 16d ago | 25m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.17% | 96.21% | 96.21% | 2290 ms | ↑ 1.55x | 14 | 59m | 9d ago | 23m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.53% | 91.01% | 91.01% | 4339 ms | ↑ 2.18x | 13 | 46s | 16d ago | 37m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2815 ms | ↓ 0.88x | 0 | — | — | 22m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1927 ms | → 1.00x | 0 | — | — | 22m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3404 ms | → 1.00x | 0 | — | — | 22m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.34% | 98.53% | 98.53% | 691 ms | ↑ 1.09x | 16 | 2m | 17d ago | 26m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.56% | 98.60% | 98.60% | 2236 ms | → 1.03x | 12 | 50s | 8d ago | 34m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2083 ms | → 1.00x | 0 | — | — | 22m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1235 ms | → 1.00x | 0 | — | — | 22m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.78% | 98.27% | 98.27% | 2340 ms | ↑ 2.29x | 6 | 0s | 12d ago | 25m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.75% | 99.74% | 99.74% | 1458 ms | → 1.02x | 6 | 2m | 16d ago | 25m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2322 ms | ↑ 1.25x | 0 | — | — | 22m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.87% | 97.65% | 97.65% | 1874 ms | ↑ 1.55x | 3 | 0s | 16d ago | 25m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.71% | 93.23% | 93.23% | 4694 ms | ↑ 1.79x | 68 | 10m | 16d ago | 24m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.87% | 99.91% | 99.91% | 1630 ms | ↑ 1.56x | 3 | 0s | 18d ago | 34m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.87% | 84.95% | 84.95% | 3505 ms | ↑ 1.75x | 3 | 0s | 9d ago | 25m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.91% | 99.95% | 99.95% | 1125 ms | ↓ 0.85x | 1 | 0s | 18d ago | 23m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.62% | 99.85% | 99.85% | 1934 ms | ↑ 1.88x | 5 | 12m | 13d ago | 34m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 35.24% | 6.55% | 6.55% | 2873 ms | ↑ 1.20x | 3 | 5d | 9d ago | 35m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2827 ms | → 1.02x | 0 | — | — | 22m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.66% | 99.83% | 99.83% | 2355 ms | ↑ 1.52x | 5 | 12m | 11d ago | 34m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 47.55% | 8.77% | 8.77% | 2269 ms | → 1.03x | 3 | 4d 1h | 11d ago | 26m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.84% | 99.86% | 99.86% | 3502 ms | ↑ 1.63x | 4 | 0s | 8d ago | 24m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.32% | 94.37% | 94.37% | 1515 ms | ↓ 0.95x | 4 | 5h 15m | 18d ago | 23m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3059 ms | → 1.00x | 0 | — | — | 22m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.71% | 99.74% | 99.74% | 3492 ms | ↑ 2.14x | 6 | 3m | 16d ago | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 3054 ms | ↑ 1.89x | 1 | 0s | 18d ago | 34m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.59% | 99.72% | 99.72% | 2557 ms | ↑ 1.74x | 5 | 14m | 18d ago | 34m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 97.21% | 97.25% | 97.25% | 1567 ms | ↑ 1.25x | 2 | 6h 15m | 17d ago | 23m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.56% | 99.79% | 99.79% | 2474 ms | ↑ 1.37x | 12 | 14s | 12d ago | 32m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2371 ms | ↑ 2.28x | 1 | 0s | 19d ago | 26m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.81% | 99.00% | 99.00% | 1707 ms | ↑ 1.52x | 5 | 0s | 15d ago | 35m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 574 ms | ↓ 0.72x | 1 | 0s | 24d ago | 35m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.80% | 99.88% | 99.64% | 99.64% | 2605 ms | ↑ 1.34x | 3 | 0s | 2d ago | 36m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.80% | 93.78% | 91.49% | 91.49% | 1789 ms | ↓ 0.80x | 115 | 7m | 4d ago | 35m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.80% | 99.72% | 99.72% | 99.72% | 4159 ms | ↑ 1.44x | 8 | 0s | 2d ago | 36m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.80% | 99.47% | 99.88% | 99.88% | 1499 ms | ↑ 1.35x | 3 | 1h 27m | 7d ago | 35m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 98.56% | 99.58% | 99.58% | 2385 ms | ↑ 1.38x | 42 | 43s | 1d ago | 35m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.80% | 99.56% | 87.53% | 87.53% | 1934 ms | ↑ 1.54x | 12 | 50s | 14h ago | 35m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.80% | 99.87% | 99.91% | 99.91% | 2223 ms | ↑ 1.54x | 3 | 0s | 17h ago | 35m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.80% | 99.69% | 99.63% | 99.63% | 932 ms | ↓ 0.93x | 9 | 0s | 2d ago | 34m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.80% | 74.14% | 83.21% | 83.21% | 1574 ms | ↓ 0.21x | 377 | 12m | 7d ago | 35m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.80% | 99.81% | 99.93% | 99.93% | 1338 ms | ↑ 2.49x | 5 | 0s | 2d ago | 35m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.80% | 99.87% | 98.71% | 98.71% | 1801 ms | ↑ 1.23x | 3 | 0s | 23h ago | 34m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.80% | 97.43% | 99.15% | 99.15% | 4379 ms | ↑ 2.03x | 63 | 3m | 13m ago | 34m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.80% | 99.91% | 97.07% | 97.07% | 4071 ms | ↑ 1.86x | 3 | 0s | 13m ago | 34m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.80% | 79.11% | 47.89% | 47.89% | 2099 ms | ↑ 1.64x | 16 | 6h 46m | 6d ago | 33m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.80% | 35.17% | 18.58% | 18.58% | 859 ms | ↑ 1.06x | 2 | 7d 13h | 5d ago | 34m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 34.85% | 6.83% | 6.83% | 2129 ms | ↑ 1.48x | 2 | 7d 13h | 2d ago | 26m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.80% | 92.44% | 96.05% | 96.05% | 2279 ms | ↑ 1.98x | 5 | 15h 59m | 7d ago | 26m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.80% | 34.84% | 35.71% | 35.71% | 1775 ms | ↓ 0.61x | 3 | 5d | 5h ago | 25m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.80% | 99.91% | 98.71% | 98.71% | 1344 ms | ↑ 1.45x | 2 | 0s | 3h ago | 26m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.80% | 81.71% | 79.40% | 79.40% | 4071 ms | → 0.98x | 351 | 7m | 1h ago | 24m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.78% | 76.68% | 76.68% | 2090 ms | → 0.95x | 5 | 2m | 6d ago | 25m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.90% | 95.29% | 95.29% | 1641 ms | ↑ 1.49x | 2 | 0s | 2d ago | 25m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.78% | 98.79% | 98.79% | 2201 ms | ↑ 2.33x | 5 | 2m | 3d ago | 25m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.80% | 94.81% | 96.19% | 96.19% | 2360 ms | ↑ 1.26x | 35 | 38m | 6d ago | 32m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.80% | 98.99% | 86.11% | 86.11% | 3024 ms | ↑ 1.97x | 31 | 0s | 5d ago | 25m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.80% | 35.09% | 6.48% | 6.48% | 3114 ms | ↑ 1.06x | 2 | 7d 13h | 3h ago | 31m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 99.80% | 92.35% | 92.31% | 92.31% | 4340 ms | ↑ 1.48x | 4 | 9h 52m | 14h ago | 24m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.80% | 99.67% | 99.74% | 99.74% | 2186 ms | ↓ 0.89x | 4 | 0s | 2d ago | 27m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.80% | 98.80% | 98.95% | 98.95% | 3553 ms | ↑ 1.95x | 8 | 36m | 15h ago | 31m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.80% | 99.75% | 99.79% | 99.79% | 1309 ms | → 1.03x | 5 | 0s | 6d ago | 23m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.80% | 93.24% | 89.96% | 89.96% | 3641 ms | ↑ 1.34x | 111 | 9m | 7d ago | 24m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.80% | 62.78% | 23.18% | 23.18% | 3089 ms | ↑ 1.16x | 11 | 17h 36m | 3d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.80% | 99.18% | 89.79% | 89.79% | 3597 ms | ↑ 1.14x | 25 | 0s | 5d ago | 25m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.80% | 99.54% | 99.59% | 99.59% | 3132 ms | ↑ 2.29x | 8 | 0s | 15h ago | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.80% | 98.65% | 82.17% | 82.17% | 3662 ms | ↓ 0.83x | 40 | 28s | 14h ago | 31m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.61% | 93.76% | 98.63% | 98.63% | 3825 ms | ↑ 1.35x | 144 | 5m | 2d ago | 36m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.61% | 68.30% | 12.70% | 12.70% | 2398 ms | ↑ 1.15x | 4 | 1d 18h | 2d ago | 37m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.60% | 99.44% | 99.15% | 99.15% | 2164 ms | ↑ 1.78x | 16 | 38s | 17h ago | 35m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.60% | 35.21% | 6.55% | 6.55% | 1493 ms | ↑ 1.06x | 4 | 3d 18h | 2d ago | 35m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.60% | 99.47% | 99.90% | 99.90% | 2844 ms | ↑ 1.48x | 13 | 2m | 17h ago | 35m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.60% | 92.65% | 19.02% | 19.02% | 2282 ms | → 1.04x | 7 | 5h 20m | 13h ago | 33m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.60% | 99.87% | 53.49% | 53.49% | 4264 ms | ↑ 2.03x | 4 | 0s | 13m ago | 34m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.60% | 99.78% | 52.16% | 52.16% | 3674 ms | ↑ 1.65x | 6 | 0s | 16h ago | 26m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.60% | 94.54% | 94.62% | 94.62% | 2972 ms | ↑ 1.32x | 2 | 6h 20m | 5d ago | 23m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.60% | 93.47% | 93.54% | 93.54% | 3250 ms | ↑ 1.21x | 5 | 3h 2m | 2d ago | 23m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.60% | 99.78% | 97.53% | 97.53% | 3115 ms | ↑ 1.47x | 6 | 0s | 1d ago | 24m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.60% | 99.62% | 99.74% | 99.74% | 2815 ms | ↑ 1.85x | 9 | 4m | 5h ago | 25m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.60% | 99.81% | 99.83% | 99.83% | 4490 ms | ↑ 1.96x | 5 | 0s | 3h ago | 31m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.60% | 99.53% | 99.57% | 99.57% | 1570 ms | ↑ 1.39x | 10 | 6m | 2d ago | 23m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.60% | 98.09% | 96.68% | 96.68% | 3699 ms | ↑ 1.73x | 50 | 2m | 3m ago | 25m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.60% | 97.49% | 97.47% | 97.47% | 3495 ms | ↓ 0.93x | 67 | 2m | 14h ago | 24m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.60% | 99.68% | 99.72% | 99.72% | 3971 ms | ↑ 2.26x | 9 | 0s | 5h ago | 24m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.60% | 99.62% | 97.51% | 97.51% | 2821 ms | ↑ 1.85x | 10 | 1m | 5h ago | 25m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.60% | 99.02% | 99.01% | 99.01% | 3847 ms | ↑ 1.99x | 29 | 20s | 2d ago | 25m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.60% | 99.59% | 99.65% | 99.65% | 1035 ms | ↑ 1.13x | 6 | 2m | 13h ago | 23m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.60% | 99.81% | 99.71% | 99.71% | 3976 ms | ↑ 2.26x | 6 | 0s | 3m ago | 25m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.41% | 98.72% | 99.65% | 99.65% | 4318 ms | ↑ 1.35x | 39 | 31s | 5h ago | 36m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.41% | 97.07% | 99.43% | 99.43% | 4284 ms | ↑ 1.76x | 80 | 2m | 5h ago | 36m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.40% | 87.74% | 48.63% | 48.63% | 3896 ms | ↑ 1.73x | 174 | 13m | 7d ago | 32m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.40% | 34.75% | 6.40% | 6.40% | 2460 ms | ↑ 1.26x | 6 | 2d 12h | 1d ago | 26m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.40% | 99.71% | 99.81% | 99.81% | 1468 ms | ↑ 1.30x | 7 | 1m | 14h ago | 25m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.40% | 99.78% | 99.71% | 99.71% | 3596 ms | ↑ 1.88x | 6 | 0s | 3h ago | 31m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.40% | 98.95% | 99.01% | 99.01% | 922 ms | ↓ 0.48x | 28 | 1m | 7h ago | 24m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.40% | 34.80% | 18.60% | 18.60% | 1255 ms | ↑ 1.28x | 4 | 3d 18h | 14h ago | 25m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.40% | 98.13% | 98.27% | 98.27% | 3613 ms | ↑ 2.21x | 46 | 3m | 14h ago | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.40% | 96.06% | 96.57% | 96.57% | 3762 ms | ↑ 1.18x | 79 | 6m | 4d ago | 24m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.31% | 99.31% | 99.31% | 99.31% | 4634 ms | → 1.00x | 3 | 0s | 2d ago | 22m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.21% | 99.25% | 99.85% | 99.85% | 4484 ms | ↑ 2.32x | 23 | 0s | 5h ago | 36m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.21% | 40.69% | 77.70% | 77.70% | 369 ms | ↓ 0.81x | 7 | 2d 3h | 1h ago | 36m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.21% | 99.54% | 99.55% | 99.55% | 905 ms | ↑ 1.15x | 7 | 0s | 15m ago | 36m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.20% | 22.20% | 85.44% | 85.44% | 3264 ms | ↑ 1.11x | 1 | 21d 14h | 29d ago | 35m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.20% | 98.17% | 97.58% | 97.58% | 1300 ms | ↑ 1.96x | 14 | 33m | 4d ago | 26m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.20% | 99.72% | 65.46% | 65.46% | 2625 ms | ↑ 1.28x | 7 | 3m | 9h ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.20% | 54.73% | 54.66% | 54.66% | 2046 ms | → 0.99x | 39 | 6h 22m | 2d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.20% | 94.07% | 94.15% | 94.15% | 2370 ms | → 1.01x | 5 | 2h 34m | 13h ago | 23m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.20% | 80.79% | 64.36% | 64.36% | 4143 ms | ↓ 0.86x | 401 | 5m | 1d ago | 32m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.20% | 47.32% | 16.10% | 16.10% | 2009 ms | ↑ 1.06x | 7 | 1d 18h | 2h ago | 25m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.04% | 99.04% | 99.05% | 99.05% | 1094 ms | → 1.00x | 1 | 0s | 23h ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.04% | 98.58% | 99.30% | 99.30% | 4940 ms | ↑ 1.22x | 1 | 0s | 1d ago | 22m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 99.04% | 99.04% | 99.05% | 99.05% | 4694 ms | → 1.00x | 1 | 0s | 17h ago | 22m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.01% | 99.06% | 99.25% | 99.25% | 2434 ms | ↓ 0.90x | 29 | 0s | 8h ago | 36m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.00% | 34.51% | 6.39% | 6.39% | 2524 ms | ↑ 1.22x | 22 | 16h 27m | 4h ago | 33m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (79)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.00% | 99.68% | 96.68% | 96.68% | 2088 ms | ↑ 1.61x | 5 | 16m | 5d ago | 25m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.00% | 83.78% | 83.83% | 83.83% | 2103 ms | ↑ 1.47x | 6 | 10h 26m | 6d ago | 23m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.00% | 99.65% | 61.93% | 61.93% | 1872 ms | ↑ 1.55x | 9 | 1m | 14h ago | 25m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.80% | 99.31% | 97.55% | 97.55% | 3748 ms | ↑ 1.31x | 19 | 2m | 3h ago | 31m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.80% | 93.59% | 93.62% | 93.62% | 2237 ms | → 0.99x | 77 | 16m | 15h ago | 24m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.80% | 99.38% | 99.38% | 99.38% | 2487 ms | ↓ 0.77x | 3 | 20m | 17h ago | 22m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 98.80% | 48.16% | 48.22% | 48.22% | 4358 ms | → 1.03x | 57 | 4h 37m | 2d ago | 23m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.80% | 99.49% | 74.16% | 74.16% | 1400 ms | ↑ 2.07x | 8 | 15m | 4d ago | 26m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.80% | 94.17% | 94.20% | 94.20% | 2106 ms | → 1.02x | 2 | 13h 21m | 1d ago | 23m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.62% | 35.11% | 77.07% | 77.07% | 3567 ms | ↑ 1.12x | 3 | 5d 1h | 19h ago | 36m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.61% | 98.09% | 97.63% | 97.63% | 4431 ms | ↑ 1.59x | 58 | 21s | 2d ago | 35m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.61% | 98.91% | 96.21% | 96.21% | 3329 ms | ↑ 1.52x | 25 | 6m | 4d ago | 35m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.41% | 98.47% | 90.95% | 90.95% | 1674 ms | ↓ 0.76x | 39 | 4m | 4d ago | 35m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 98.22% | 81.32% | 83.14% | 83.14% | 1831 ms | ↓ 0.67x | 372 | 6m | 15m ago | 36m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 98.20% | 75.38% | 73.60% | 73.60% | 3758 ms | ↑ 2.00x | 56 | 2h 14m | 5d ago | 24m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.20% | 57.80% | 52.79% | 52.79% | 2543 ms | ↑ 1.09x | 14 | 17h 1m | 18h ago | 26m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.20% | 46.94% | 38.48% | 38.48% | 3005 ms | ↑ 1.23x | 19 | 15h 21m | 3h ago | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.20% | 98.83% | 88.68% | 88.68% | 1896 ms | ↓ 0.78x | 29 | 2m | 1d ago | 25m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.08% | 98.08% | 98.10% | 98.10% | 1951 ms | → 1.00x | 2 | 0s | 20h ago | 22m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.00% | 95.22% | 96.25% | 96.25% | 3644 ms | ↑ 1.60x | 64 | 15m | 2d ago | 26m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.00% | 90.24% | 90.28% | 90.28% | 2482 ms | ↑ 1.19x | 17 | 2h 30m | 23h ago | 23m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 97.39% | 91.17% | 91.85% | 91.85% | 2459 ms | ↑ 2.17x | 44 | 1h 49m | 5d ago | 25m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 97.19% | 46.87% | 30.55% | 30.55% | 2720 ms | ↑ 1.10x | 19 | 15h 24m | 3m ago | 25m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 96.99% | 99.33% | 87.22% | 87.22% | 2783 ms | ↑ 1.60x | 17 | 5m | 3m ago | 25m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 96.99% | 92.66% | 92.75% | 92.75% | 2521 ms | ↓ 0.76x | 4 | 4h 8m | 4d ago | 22m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.99% | 23.25% | 17.51% | 17.51% | 3373 ms | ↑ 1.05x | 19 | 1d 2h | 3m ago | 24m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 96.97% | 96.97% | 97.06% | 97.06% | 2348 ms | → 1.00x | 1 | 0s | 9h ago | 21m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 96.79% | 92.34% | 92.43% | 92.43% | 1953 ms | ↑ 1.09x | 16 | 51m | 13h ago | 23m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.42% | 97.87% | 98.69% | 98.69% | 3763 ms | → 1.02x | 47 | 7m | 14h ago | 35m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 96.19% | 79.83% | 89.83% | 89.83% | 1324 ms | ↓ 0.28x | 16 | 12h 14m | 3d ago | 25m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 96.04% | 99.22% | 99.83% | 99.83% | 3496 ms | ↑ 2.29x | 25 | 0s | 15m ago | 36m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 95.99% | 98.13% | 98.13% | 98.13% | 3122 ms | ↑ 1.23x | 12 | 18m | 1m ago | 22m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 95.86% | 95.14% | 98.74% | 98.74% | 4422 ms | ↑ 1.42x | 99 | 8m | 4h ago | 36m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 95.79% | 84.80% | 76.06% | 76.06% | 3163 ms | ↑ 1.25x | 260 | 10m | 11m ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 95.79% | 96.85% | 96.85% | 96.85% | 3668 ms | ↑ 1.24x | 12 | 45m | 1m ago | 22m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 95.79% | 97.83% | 97.73% | 97.73% | 2960 ms | ↓ 0.86x | 11 | 20m | 56s ago | 22m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 95.59% | 57.80% | 30.62% | 30.62% | 3283 ms | ↑ 1.73x | 24 | 9h 7m | 2h ago | 25m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 95.46% | 71.49% | 71.51% | 71.51% | 3620 ms | ↓ 0.84x | 291 | 12m | 4h ago | 37m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 95.19% | 95.19% | 95.24% | 95.24% | 3578 ms | → 1.00x | 2 | 29m | 22h ago | 22m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 94.83% | 32.36% | 6.01% | 6.01% | 1853 ms | ↓ 0.94x | 67 | 5h 32m | 15h ago | 35m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.79% | 81.79% | 80.50% | 80.50% | 4753 ms | ↑ 1.07x | 379 | 5m | 2d ago | 25m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.60% | 81.78% | 84.27% | 84.27% | 4511 ms | ↑ 1.16x | 377 | 5m | 1d ago | 26m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 94.59% | 80.50% | 57.52% | 57.52% | 4734 ms | ↑ 1.13x | 391 | 6m | 1h ago | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 94.39% | 99.02% | 99.26% | 99.26% | 3750 ms | ↑ 2.47x | 4 | 2h 15m | 3m ago | 25m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 94.39% | 90.38% | 90.46% | 90.46% | 3254 ms | → 1.05x | 40 | 22m | 1d ago | 22m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.19% | 92.14% | 66.40% | 66.40% | 3112 ms | ↑ 1.48x | 35 | 1h 11m | 14h ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 94.08% | 98.10% | 98.15% | 98.15% | 4694 ms | ↑ 1.79x | 33 | 5m | 2h ago | 37m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 93.43% | 82.50% | 83.79% | 83.79% | 4339 ms | → 1.01x | 393 | 5m | 1d ago | 34m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 93.19% | 81.64% | 70.81% | 70.81% | 4639 ms | ↑ 1.09x | 408 | 4m | 20h ago | 32m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 92.79% | 96.28% | 96.28% | 96.28% | 2108 ms | ↑ 1.44x | 1 | 11h 52m | 4d ago | 22m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.38% | 95.97% | 95.97% | 95.97% | 3994 ms | ↑ 1.17x | 3 | 4h 1m | 4d ago | 22m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 92.20% | 46.32% | 8.54% | 8.54% | 2598 ms | ↑ 1.08x | 5 | 2d 13h | 3d ago | 26m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 89.78% | 80.75% | 76.97% | 76.97% | 4822 ms | → 1.01x | 410 | 5m | 1h ago | 25m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.78% | 76.93% | 76.71% | 76.71% | 4599 ms | ↑ 1.12x | 362 | 12m | 1h ago | 24m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 87.98% | 77.68% | 75.88% | 75.88% | 4752 ms | ↑ 1.06x | 476 | 7m | 1h ago | 24m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 87.50% | 87.50% | 87.88% | 87.88% | 4147 ms | → 1.00x | 4 | 0s | 58m ago | 22m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 86.98% | 91.58% | 95.51% | 95.51% | 4216 ms | → 1.02x | 144 | 17m | 16m ago | 36m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 85.17% | 30.58% | 29.49% | 29.49% | 4011 ms | ↑ 1.19x | 110 | 3h 22m | 2h ago | 24m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 84.62% | 84.62% | 83.81% | 83.81% | 3360 ms | → 1.00x | 11 | 11m | 56s ago | 22m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 83.97% | 31.98% | 5.91% | 5.91% | 3874 ms | ↓ 0.92x | 88 | 4h 9m | 2h ago | 32m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 82.80% | 42.54% | 25.56% | 25.56% | 3179 ms | ↑ 1.12x | 18 | 18h 49m | 4d ago | 26m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 82.57% | 95.54% | 60.20% | 60.20% | 1099 ms | → 0.96x | 38 | 48m | 4h ago | 26m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 82.20% | 33.84% | 7.26% | 7.26% | 4690 ms | ↑ 1.08x | 177 | 1h 56m | 2h ago | 26m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 81.85% | 79.18% | 83.21% | 83.21% | 4592 ms | → 1.04x | 370 | 10m | 2d ago | 37m ago |
| [Lyux API](https://lmspeed.net/provider/api-lyux-space) | 80.77% | 80.77% | 80.00% | 80.00% | 3288 ms | → 1.00x | 9 | 27m | 56s ago | 22m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 75.00% | 35.78% | 35.62% | 35.62% | 4638 ms | → 1.00x | 14 | 1d 1h | 1m ago | 22m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 75.00% | 80.43% | 80.85% | 80.85% | 4883 ms | ↑ 1.48x | 7 | 6m | 57s ago | 22m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 62.50% | 62.50% | 60.61% | 60.61% | 4719 ms | → 1.00x | 9 | 9m | 57s ago | 22m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 61.92% | 24.64% | 9.04% | 9.04% | 4646 ms | ↑ 1.13x | 187 | 2h 12m | 4m ago | 25m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 50.00% | 50.00% | 48.48% | 48.48% | 4554 ms | → 1.00x | 10 | 14m | 56s ago | 22m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 48.30% | 22.23% | 7.72% | 7.72% | 3970 ms | ↑ 1.06x | 292 | 1h 27m | 1h ago | 25m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 46.88% | 46.88% | 45.45% | 45.45% | 4318 ms | → 1.00x | 10 | 16m | 56s ago | 22m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 40.63% | 40.63% | 39.39% | 39.39% | 3543 ms | → 1.00x | 9 | 24m | 56s ago | 22m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 40.63% | 40.63% | 39.39% | 39.39% | 3347 ms | → 1.00x | 9 | 24m | 56s ago | 22m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 34.38% | 15.94% | 15.71% | 15.71% | 4909 ms | → 1.00x | 11 | 1d 9h | 1m ago | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 25.05% | 64.16% | 78.55% | 78.55% | 4488 ms | ↑ 4.69x | 7 | 2d 1h | 16d ago | 25m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 15.43% | 2.43% | 4.82% | 4.82% | 2758 ms | → 1.00x | 1 | 28d 22h | 30d ago | 31m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 14.79% | 55.19% | 89.05% | 89.05% | 1962 ms | ↓ 0.44x | 210 | 1h 43m | 15h ago | 36m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 9.42% | 19.14% | 27.47% | 27.47% | 806 ms | ↓ 0.79x | 4 | 5d 13h | 5d ago | 32m ago |

</details>

<details open>
<summary><strong>🔴 Down (183)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.60% | 96.64% | 99.34% | 99.34% | 4301 ms | ↑ 2.43x | 80 | 4m | 33m ago | 33m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.00% | 99.59% | 95.69% | 95.69% | 2281 ms | ↑ 1.30x | 8 | 12m | 2h ago | 25m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 95.84% | 56.76% | 56.07% | 56.07% | 3987 ms | ↑ 1.07x | 409 | 26m | 36m ago | 36m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 95.39% | 96.91% | 99.40% | 99.40% | 4251 ms | ↑ 2.67x | 75 | 5m | 51m ago | 31m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 90.63% | 90.63% | 87.88% | 87.88% | 2276 ms | → 1.00x | 2 | 21m | 22m ago | 22m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 90.38% | 95.87% | 95.89% | 95.89% | 1789 ms | ↑ 1.25x | 62 | 19m | 16h ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 89.38% | 94.57% | 92.31% | 92.31% | 3572 ms | ↑ 1.77x | 92 | 13m | 43m ago | 24m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 86.37% | 33.61% | 6.21% | 6.21% | 4410 ms | ↑ 1.30x | 41 | 8h 59m | 51m ago | 31m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 84.77% | 96.85% | 98.75% | 98.75% | 4558 ms | ↑ 1.42x | 55 | 16m | 1h ago | 31m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 74.35% | 94.59% | 94.59% | 94.59% | 1746 ms | ↑ 1.67x | 2 | 21h 26m | 2d ago | 23m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 62.87% | 53.57% | 61.78% | 61.78% | 4846 ms | → 1.05x | 596 | 18m | 52m ago | 32m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 48.54% | 48.54% | 48.08% | 48.08% | 3395 ms | → 1.00x | 1 | 17h 49m | 18h ago | 22m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 44.89% | 58.65% | 58.68% | 58.68% | 1375 ms | ↓ 0.82x | 10 | 18h 12m | 3d ago | 23m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 42.12% | 20.18% | 4.56% | 4.56% | 3858 ms | ↑ 1.11x | 6 | 3d 15h | 4d ago | 33m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 18.44% | 80.34% | 80.35% | 80.35% | 1670 ms | ↑ 1.27x | 4 | 1d 11h | 6d ago | 23m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 14.23% | 83.96% | 85.08% | 85.08% | 130 ms | ↓ 0.32x | 3 | 2d 5h | 6d ago | 25m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 12.50% | 12.50% | 12.50% | 12.50% | 3538 ms | → 1.00x | 11 | 2h 27m | 58m ago | 21m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 3.41% | 32.23% | 30.83% | 30.83% | 1050 ms | → 1.04x | 3 | 6d 7h | 7d ago | 24m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 3.16% | 43.49% | 67.89% | 67.89% | 3909 ms | ↓ 0.70x | 410 | 57m | 1d ago | 37m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.60% | 84.06% | 89.47% | 89.47% | 1754 ms | ↑ 2.46x | 6 | 1d 4h | 7d ago | 25m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 64.50% | 92.67% | 92.67% | — | — | 6 | 2d 12h | 15d ago | 35m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 76.72% | 76.72% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 63.56% | 82.49% | 82.49% | — | — | 29 | 12h 28m | 15d ago | 27m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.40% | 6.40% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 10.54% | 14.02% | 14.02% | — | — | 11 | 2d 12h | 15d ago | 37m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 61.81% | 92.93% | 92.93% | — | — | 80 | 4h 30m | 15d ago | 33m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.79% | 40.79% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 29.02% | 29.02% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 49.10% | 83.42% | 83.42% | — | — | 291 | 1h 21m | 15d ago | 36m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 55.98% | 69.87% | 69.87% | — | — | 227 | 1h 38m | 15d ago | 25m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 65.07% | 35.21% | 35.21% | — | — | 2 | 7d 11h | 15d ago | 26m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 64.52% | 93.40% | 93.40% | — | — | 5 | 2d 24h | 15d ago | 36m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 32.24% | 70.34% | 70.34% | — | — | 129 | 4h 5m | 21d ago | 35m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 36m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 36m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 63.70% | 86.27% | 86.27% | — | — | 32 | 11h 11m | 15d ago | 36m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.55% | 19.55% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 63.96% | 60.75% | 60.75% | — | — | 27 | 13h 18m | 15d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 43.16% | 43.16% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.76% | 4.14% | 4.14% | — | — | 3 | 9d 22h | 15d ago | 26m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 65.09% | 93.56% | 93.56% | — | — | 1 | 14d 22h | 15d ago | 26m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.69% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 15d ago | 31m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 56.12% | 58.12% | 58.12% | — | — | 29 | 13h 48m | 15d ago | 34m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 33.24% | 33.24% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 12.41% | 2.30% | 2.30% | — | — | 7 | 3d 21h | 15d ago | 33m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 32.26% | 48.40% | 48.40% | — | — | 5 | 4d 3h | 11d ago | 24m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 61.15% | 61.15% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 46.14% | 29.15% | 29.15% | — | — | 264 | 1h 35m | 15d ago | 25m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 63.38% | 33.76% | 33.76% | — | — | 49 | 7h 20m | 15d ago | 26m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.69% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 15d ago | 32m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 64.09% | 64.09% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 35m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.35% | 7.35% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 73.74% | 73.74% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 64.18% | 93.34% | 93.34% | — | — | 16 | 22h 23m | 15d ago | 36m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 36m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 10.92% | 10.92% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 54.58% | 89.06% | 89.06% | — | — | 165 | 2h 20m | 15d ago | 27m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11h 3m | 11h ago | 22m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 4.92% | 39.69% | 39.69% | — | — | 1 | 28d 22h | 29d ago | 25m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 11.67% | 13.27% | 13.27% | — | — | 4 | 6d 23h | 28d ago | 24m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 59.28% | 59.28% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 36m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 35.19% | 85.90% | 85.90% | — | — | 188 | 2h 39m | 15d ago | 37m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 52.35% | 52.35% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 37m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.59% | 47.59% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 64.53% | 93.35% | 93.35% | — | — | 4 | 3d 17h | 15d ago | 37m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 65.91% | 65.91% | — | — | 3 | 9d 24h | 27d ago | 31m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.66% | 43.79% | 43.79% | — | — | 2 | 14d 22h | 15d ago | 36m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 22h | 18d ago | 35m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 27m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10h 42m | 11h ago | 27m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 40.35% | 37.25% | 37.25% | — | — | 422 | 60m | 15d ago | 25m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 13.06% | 2.94% | 2.94% | — | — | 4 | 6d 18h | 15d ago | 26m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.77% | 46.77% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 63.65% | 93.28% | 93.28% | — | — | 22 | 16h 25m | 15d ago | 31m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 65.05% | 37.84% | 37.84% | — | — | 2 | 7d 11h | 15d ago | 26m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 64.55% | 93.22% | 93.22% | — | — | 4 | 3d 17h | 15d ago | 36m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 48.64% | 48.66% | 48.66% | — | — | 1 | 14d 22h | 15d ago | 36m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 38.54% | 54.55% | 54.55% | — | — | 3 | 7d 4h | 22d ago | 26m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 60.34% | 90.60% | 90.60% | — | — | 116 | 3h 7m | 15d ago | 36m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.41% | 0.12% | 0.12% | — | — | 13 | 2d 7h | 16d ago | 31m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.07% | 0.07% | 0.07% | — | — | 2 | 8d 22h | 10d ago | 26m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 27m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 40.22% | 88.86% | 88.86% | — | — | 55 | 8h 50m | 20d ago | 31m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 65.07% | 75.66% | 75.66% | — | — | 2 | 7d 11h | 15d ago | 25m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.94% | 3.94% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 48.63% | 48.63% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 55.15% | 87.09% | 87.09% | — | — | 104 | 3h 46m | 15d ago | 36m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 36.64% | 66.42% | 66.42% | — | — | 462 | 58m | 15d ago | 32m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 34m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 31.87% | 31.87% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 22.81% | 22.85% | 22.85% | — | — | 24 | 16h 5m | 15d ago | 23m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 13.61% | 16.87% | 16.87% | — | — | 320 | 1h 51m | 15d ago | 25m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.14% | 27.14% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 11h | 1d ago | 22m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 35m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 63.92% | 79.05% | 79.05% | — | — | 34 | 10h 33m | 15d ago | 25m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 30.04% | 30.10% | 30.10% | — | — | 3 | 3d 14h | 10d ago | 23m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.67% | 19.67% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 55.74% | 55.74% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10h 44m | 11h ago | 22m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 62.12% | 62.12% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 63.18% | 63.19% | 63.19% | — | — | 7 | 2d 3h | 15d ago | 23m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 73.26% | 77.95% | 77.95% | — | — | 7 | 1d 14h | 11d ago | 24m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 33.87% | 6.25% | 6.25% | — | — | 3 | 7d 6h | 15d ago | 26m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 23h | 20d ago | 23m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 35m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 64.62% | 93.44% | 93.44% | — | — | 2 | 7d 11h | 15d ago | 35m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 36m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 62.68% | 92.22% | 92.22% | — | — | 51 | 7h 4m | 15d ago | 34m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 37.69% | 71.93% | 71.93% | — | — | 423 | 1h 1m | 15d ago | 37m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 23.36% | 84.46% | 84.46% | — | — | 12 | 2d 1h | 25d ago | 35m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 63.01% | 92.06% | 92.06% | — | — | 50 | 7h 10m | 15d ago | 35m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 10.56% | 10.55% | 10.55% | — | — | 3 | 5d 5h | 13d ago | 35m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 64.96% | 38.74% | 38.74% | — | — | 5 | 2d 24h | 15d ago | 26m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.19% | 76.88% | 76.88% | — | — | 2 | 13d 23h | 22d ago | 35m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 25.98% | 31.12% | 31.12% | — | — | 104 | 5h 18m | 20d ago | 25m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.55% | 9.55% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 53.43% | 73.98% | 73.98% | — | — | 259 | 1h 27m | 15d ago | 37m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10h 42m | 11h ago | 27m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 76.15% | 76.15% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 80.68% | 80.79% | 80.79% | — | — | 2 | 5h 22m | 11h ago | 22m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 64.99% | 63.34% | 63.34% | — | — | 3 | 4d 23h | 15d ago | 24m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 61.19% | 61.21% | 61.21% | — | — | 3 | 4d 22h | 14d ago | 23m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 18.41% | 18.41% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 20h | 18d ago | 35m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.23% | 20.23% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.65% | 2.73% | 2.73% | — | — | 2 | 7d 18h | 15d ago | 22m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 14.18% | 14.24% | 14.24% | — | — | 2 | 7d 18h | 15d ago | 23m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 18.01% | 18.08% | 18.08% | — | — | 2 | 6d 7h | 12d ago | 22m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 56.23% | 56.23% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 64.60% | 93.40% | 93.40% | — | — | 5 | 2d 24h | 15d ago | 34m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 60.62% | 71.35% | 71.35% | — | — | 7 | 2d 7h | 16d ago | 24m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 70.02% | 93.59% | 93.59% | — | — | 41 | 6h 60m | 12d ago | 31m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 46.63% | 46.63% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 60.08% | 91.00% | 91.00% | — | — | 148 | 2h 26m | 15d ago | 26m ago |

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
