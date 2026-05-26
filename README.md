# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**610 providers** — 341 🟢 operational · 47 🟡 degraded · 222 🔴 down · 0 ⚫ unknown

_Updated 2026-05-26 06:51 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (341)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.85% | 97.33% | 97.33% | 1377 ms | ↓ 0.76x | 2 | 10m | 15d ago | 23m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.98% | 92.98% | 685 ms | ↓ 0.87x | 0 | — | — | 28m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.07% | 15.61% | 15.61% | 1603 ms | ↓ 0.80x | 2 | 6h 11m | 25d ago | 29m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.28% | 97.28% | 2400 ms | ↓ 0.92x | 0 | — | — | 38m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 48.13% | 48.13% | 1611 ms | → 0.95x | 2 | 0s | 14d ago | 26m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 912 ms | → 1.00x | 0 | — | — | 20m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 98.07% | 98.56% | 98.56% | 1062 ms | → 1.00x | 8 | 1h 20m | 10d ago | 28m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.27% | 98.73% | 98.73% | 1495 ms | ↓ 0.77x | 7 | 23m | 24d ago | 40m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.50% | 93.67% | 93.67% | 1578 ms | ↓ 0.88x | 1 | 2h 59m | 23d ago | 24m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1455 ms | ↓ 0.82x | 0 | — | — | 21m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.30% | 96.98% | 96.98% | 1632 ms | ↓ 0.95x | 1 | 4h 31m | 12d ago | 24m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 98.22% | 98.22% | 98.22% | 2179 ms | ↓ 0.88x | 13 | 22m | 8d ago | 22m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.89% | 91.89% | 1437 ms | ↓ 0.81x | 0 | — | — | 41m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.93% | 99.93% | 1287 ms | → 0.98x | 1 | 0s | 12d ago | 21m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.82% | 99.82% | 868 ms | ↓ 0.72x | 1 | 0s | 11d ago | 24m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 412 ms | → 0.99x | 0 | — | — | 20m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.85% | 98.26% | 98.26% | 940 ms | ↓ 0.83x | 3 | 0s | 18d ago | 24m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.37% | 96.37% | 1290 ms | → 0.96x | 1 | 0s | 11d ago | 24m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.25% | 98.25% | 660 ms | ↓ 0.68x | 0 | — | — | 22m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 75.05% | 33.10% | 33.10% | 348 ms | ↓ 0.94x | 2 | 3d 13h | 27d ago | 35m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.85% | 99.90% | 99.90% | 612 ms | ↓ 0.91x | 2 | 9m | 14d ago | 24m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.81% | 98.81% | 725 ms | ↓ 0.86x | 1 | 0s | 23d ago | 37m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.10% | 96.10% | 486 ms | → 0.96x | 0 | — | — | 26m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.33% | 97.33% | 164 ms | ↓ 0.33x | 0 | — | — | 23m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.61% | 99.61% | 99.61% | 768 ms | ↓ 0.93x | 6 | 0s | 8d ago | 22m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 98.21% | 81.71% | 81.71% | 985 ms | ↓ 0.60x | 2 | 3h 28m | 27d ago | 24m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.45% | 79.76% | 79.76% | 1719 ms | → 1.01x | 4 | 38m | 8d ago | 28m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.75% | 97.31% | 97.31% | 1152 ms | ↑ 1.13x | 1 | 1h 19m | 28d ago | 26m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 418 ms | ↓ 0.89x | 0 | — | — | 36m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2553 ms | ↓ 0.83x | 1 | 0s | 18d ago | 36m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.83% | 98.83% | 119 ms | ↓ 0.17x | 0 | — | — | 26m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.79% | 99.79% | 1418 ms | ↓ 0.74x | 3 | 0s | 22d ago | 26m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.55% | 95.55% | 876 ms | ↓ 0.57x | 0 | — | — | 26m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 71.12% | 83.33% | 83.33% | 1330 ms | ↓ 0.84x | 2 | 4d 1h | 22d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.75% | 99.85% | 99.85% | 991 ms | ↓ 0.63x | 3 | 13m | 8d ago | 24m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1585 ms | ↓ 0.90x | 0 | — | — | 36m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 598 ms | → 1.00x | 0 | — | — | 20m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.46% | 99.41% | 99.41% | 2837 ms | ↓ 0.88x | 4 | 2h 15m | 14d ago | 26m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.70% | 99.64% | 99.64% | 947 ms | ↑ 1.06x | 4 | 5m | 12d ago | 24m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.90% | 25.31% | 25.31% | 957 ms | ↓ 0.79x | 2 | 0s | 23d ago | 36m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.70% | 97.97% | 97.97% | 2580 ms | → 0.98x | 1 | 1h 41m | 8d ago | 25m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1057 ms | ↓ 0.95x | 0 | — | — | 22m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.64% | 97.32% | 97.32% | 1562 ms | ↑ 1.27x | 7 | 4h 1m | 9d ago | 29m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.87% | 99.87% | 99.87% | 474 ms | → 1.00x | 2 | 0s | 16d ago | 21m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.16% | 96.16% | 900 ms | ↓ 0.93x | 1 | 0s | 24d ago | 27m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.73% | 99.73% | 99.73% | 1475 ms | → 0.96x | 2 | 19m | 13d ago | 20m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.48% | 51.48% | 750 ms | ↓ 0.95x | 0 | — | — | 29m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 2522 ms | ↓ 0.91x | 0 | — | — | 35m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.96% | 96.96% | 1183 ms | ↓ 0.65x | 0 | — | — | 35m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 98.99% | 98.99% | 1295 ms | ↓ 0.91x | 2 | 0s | 11d ago | 27m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.36% | 81.36% | 1781 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 63.25% | 63.25% | 1338 ms | → 0.95x | 0 | — | — | 28m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 874 ms | ↓ 0.89x | 0 | — | — | 22m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.38% | 98.38% | 1548 ms | ↓ 0.81x | 0 | — | — | 25m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.26% | 98.26% | 655 ms | ↓ 0.77x | 0 | — | — | 24m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.83% | 98.83% | 98.83% | 1854 ms | ↓ 0.88x | 12 | 10m | 22d ago | 22m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1442 ms | ↓ 0.81x | 0 | — | — | 20m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.11% | 91.33% | 91.33% | 1624 ms | ↓ 0.75x | 14 | 23m | 22d ago | 22m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 43.71% | 43.71% | 826 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.72% | 73.72% | 746 ms | ↓ 0.79x | 1 | 0s | 12d ago | 28m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 92.39% | 92.39% | 92.39% | 448 ms | ↓ 0.52x | 5 | 7h 21m | 10d ago | 20m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 901 ms | → 1.00x | 0 | — | — | 20m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.89% | 97.89% | 1976 ms | ↓ 0.83x | 0 | — | — | 26m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 49.25% | 49.25% | 1126 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 41.16% | 41.16% | 1052 ms | ↓ 0.70x | 0 | — | — | 36m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.09% | 80.09% | 1321 ms | ↓ 0.85x | 1 | 0s | 11d ago | 28m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.55% | 58.50% | 58.50% | 793 ms | ↓ 0.75x | 5 | 16m | 23d ago | 28m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.89% | 97.89% | 836 ms | ↓ 0.62x | 1 | 0s | 10d ago | 29m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.37% | 60.37% | 960 ms | ↓ 0.77x | 0 | — | — | 29m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2035 ms | ↓ 0.86x | 0 | — | — | 22m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.14% | 99.14% | 1425 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.93% | 88.93% | 1980 ms | ↓ 0.84x | 1 | 0s | 13d ago | 28m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 84.15% | 84.15% | 460 ms | ↓ 0.84x | 0 | — | — | 23m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.77% | 99.77% | 2204 ms | ↓ 0.92x | 3 | 0s | 22d ago | 26m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.55% | 99.55% | 756 ms | ↓ 0.71x | 1 | 0s | 15d ago | 28m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.93% | 97.93% | 2083 ms | → 0.99x | 0 | — | — | 28m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2452 ms | → 1.00x | 0 | — | — | 20m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 13.85% | 13.85% | 1323 ms | ↓ 0.93x | 1 | 0s | 21d ago | 36m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1224 ms | ↓ 0.85x | 0 | — | — | 20m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.04% | 98.04% | 2709 ms | ↓ 0.79x | 0 | — | — | 40m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 70.92% | 70.92% | 2136 ms | ↓ 0.83x | 0 | — | — | 26m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 628 ms | ↓ 0.94x | 1 | 0s | 20d ago | 22m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 963 ms | ↓ 0.84x | 0 | — | — | 40m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.71% | 99.71% | 2712 ms | ↓ 0.93x | 1 | 0s | 12d ago | 40m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.80% | 88.14% | 88.14% | 1848 ms | → 0.98x | 2 | 19m | 18d ago | 28m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 74.35% | 74.35% | 1916 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.71% | 99.73% | 99.73% | 390 ms | ↓ 0.85x | 6 | 0s | 18d ago | 39m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 956 ms | ↓ 0.88x | 0 | — | — | 20m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 79.53% | 79.53% | 1549 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1341 ms | ↓ 0.90x | 0 | — | — | 20m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1029 ms | ↓ 0.85x | 0 | — | — | 24m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.98% | 98.98% | 395 ms | ↓ 0.63x | 0 | — | — | 29m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.56% | 98.56% | 1532 ms | ↓ 0.65x | 0 | — | — | 27m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.56% | 96.56% | 334 ms | ↓ 0.42x | 0 | — | — | 24m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1322 ms | ↓ 0.81x | 0 | — | — | 20m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.29% | 95.87% | 95.87% | 1342 ms | ↓ 0.74x | 12 | 23m | 21d ago | 22m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 98.43% | 98.43% | 98.43% | 1330 ms | ↓ 0.75x | 12 | 18m | 7d ago | 22m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.20% | 96.48% | 96.48% | 249 ms | ↓ 0.51x | 14 | 3m | 23d ago | 23m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.63% | 98.63% | 106 ms | ↓ 0.49x | 0 | — | — | 26m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 98.43% | 98.43% | 98.43% | 1214 ms | ↓ 0.66x | 12 | 18m | 7d ago | 22m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.90% | 98.91% | 98.91% | 699 ms | ↓ 0.78x | 2 | 0s | 29d ago | 30m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 13.75% | 13.75% | 2311 ms | ↓ 0.87x | 1 | 0s | 22d ago | 35m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 915 ms | → 0.99x | 0 | — | — | 20m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 17.41% | 17.41% | 1053 ms | ↓ 0.81x | 0 | — | — | 29m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 537 ms | ↓ 0.77x | 0 | — | — | 41m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2158 ms | ↑ 2.16x | 1 | 0s | 9d ago | 40m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.50% | 99.17% | 99.17% | 172 ms | ↓ 0.83x | 6 | 23m | 12d ago | 25m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 508 ms | ↓ 0.58x | 0 | — | — | 39m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.23% | 97.23% | 1196 ms | ↓ 0.83x | 0 | — | — | 23m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.82% | 97.82% | 2083 ms | → 1.02x | 0 | — | — | 28m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 554 ms | ↑ 1.20x | 2 | 25m | 10d ago | 40m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.80% | 99.76% | 99.76% | 1276 ms | ↓ 0.94x | 2 | 20m | 18d ago | 30m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1006 ms | ↓ 0.85x | 0 | — | — | 22m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.64% | 98.64% | 3815 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 77.46% | 83.06% | 83.06% | 685 ms | ↓ 0.58x | 1 | 6d 5h | 30d ago | 26m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2690 ms | → 0.96x | 0 | — | — | 39m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1220 ms | → 0.97x | 0 | — | — | 21m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.80% | 99.20% | 99.20% | 1289 ms | ↓ 0.92x | 4 | 0s | 10d ago | 38m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2149 ms | → 0.96x | 1 | 0s | 18d ago | 35m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.31% | 99.31% | 1497 ms | ↓ 0.88x | 2 | 0s | 17d ago | 29m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 37.85% | 37.85% | 698 ms | → 0.97x | 0 | — | — | 40m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.27% | 98.27% | 3810 ms | → 1.02x | 0 | — | — | 26m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.50% | 89.88% | 89.88% | 652 ms | ↓ 0.63x | 5 | 23m | 8d ago | 24m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1026 ms | ↓ 0.94x | 1 | 0s | 12d ago | 39m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.07% | 99.24% | 99.24% | 741 ms | ↓ 0.77x | 13 | 9m | 10d ago | 40m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1016 ms | ↓ 0.76x | 1 | 0s | 19d ago | 35m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2373 ms | → 0.99x | 0 | — | — | 28m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.97% | 99.84% | 99.84% | 1734 ms | ↓ 0.80x | 21 | 0s | 22d ago | 39m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.52% | 99.52% | 1579 ms | → 1.05x | 0 | — | — | 24m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.14% | 89.14% | 1006 ms | → 1.00x | 0 | — | — | 28m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1030 ms | ↓ 0.91x | 0 | — | — | 39m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 57.87% | 57.87% | 828 ms | ↓ 0.76x | 3 | 0s | 10d ago | 29m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 16.02% | 16.02% | 2263 ms | → 1.04x | 1 | 0s | 9d ago | 29m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 396 ms | ↓ 0.88x | 0 | — | — | 20m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 57.75% | 77.82% | 77.82% | 299 ms | ↓ 0.38x | 3 | 4d 1h | 15d ago | 24m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1764 ms | ↓ 0.94x | 0 | — | — | 39m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.21% | 98.50% | 98.50% | 1085 ms | ↓ 0.75x | 3 | 3h 43m | 8d ago | 22m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 15.76% | 15.76% | 1600 ms | ↓ 0.87x | 0 | — | — | 29m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.66% | 78.86% | 78.86% | 1604 ms | ↓ 0.82x | 2 | 50m | 23d ago | 40m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 75.19% | 75.19% | 75.19% | 1050 ms | ↓ 0.95x | 1 | 5d 5h | 19d ago | 22m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 680 ms | ↓ 0.78x | 3 | 17m | 10d ago | 38m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1090 ms | ↓ 0.83x | 0 | — | — | 39m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.80% | 99.64% | 99.64% | 883 ms | → 1.02x | 3 | 7m | 8d ago | 38m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.80% | 34.50% | 34.50% | 193 ms | ↓ 0.84x | 4 | 0s | 9d ago | 26m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 929 ms | ↓ 0.76x | 0 | — | — | 39m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 647 ms | ↓ 0.67x | 1 | 0s | 20d ago | 24m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.98% | 98.98% | 1747 ms | ↓ 0.91x | 0 | — | — | 38m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.03% | 98.03% | 1139 ms | ↓ 0.84x | 0 | — | — | 24m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.66% | 97.66% | 2463 ms | ↓ 0.94x | 0 | — | — | 24m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.75% | 95.56% | 95.56% | 423 ms | ↓ 0.47x | 2 | 31m | 11d ago | 24m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.90% | 13.84% | 13.84% | 1481 ms | → 1.01x | 2 | 0s | 24d ago | 39m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.80% | 66.80% | 832 ms | ↓ 0.91x | 0 | — | — | 28m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1349 ms | ↓ 0.90x | 0 | — | — | 38m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1759 ms | ↓ 0.83x | 0 | — | — | 39m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 94.99% | 91.51% | 91.51% | 1479 ms | ↑ 1.14x | 4 | 7h 14m | 11d ago | 27m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 81.42% | 30.77% | 30.77% | 1709 ms | ↓ 0.91x | 10 | 12h 33m | 14d ago | 29m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.51% | 84.45% | 84.45% | 1319 ms | → 0.98x | 10 | 0s | 22d ago | 39m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.38% | 43.31% | 43.31% | 799 ms | ↓ 0.77x | 4 | 7h 27m | 18d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.90% | 84.51% | 84.51% | 234 ms | ↓ 0.47x | 2 | 0s | 29d ago | 38m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.33% | 89.33% | 336 ms | ↓ 0.25x | 1 | 0s | 11d ago | 26m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.22% | 99.22% | 1835 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 97.90% | 98.81% | 98.81% | 2242 ms | ↓ 0.79x | 32 | 7m | 14d ago | 40m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.54% | 64.54% | 844 ms | ↓ 0.64x | 0 | — | — | 29m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.39% | 96.39% | 942 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 15.66% | 15.66% | 928 ms | → 0.95x | 1 | 0s | 20d ago | 36m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 2070 ms | ↓ 0.79x | 1 | 0s | 24d ago | 39m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.18% | 99.18% | 99.18% | 1131 ms | ↓ 0.87x | 1 | 3h 38m | 14d ago | 22m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.17% | 91.66% | 91.66% | 2034 ms | ↓ 0.80x | 3 | 6h 4m | 14d ago | 25m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 54.82% | 54.82% | 504 ms | ↓ 0.56x | 0 | — | — | 29m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.90% | 99.18% | 99.18% | 3056 ms | ↓ 0.95x | 2 | 0s | 10d ago | 35m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2672 ms | ↑ 1.12x | 0 | — | — | 39m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 51.21% | 51.21% | 3681 ms | ↓ 0.88x | 0 | — | — | 26m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.16% | 99.16% | 1886 ms | ↓ 0.81x | 2 | 0s | 24d ago | 28m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.21% | 98.50% | 98.50% | 1337 ms | → 1.00x | 1 | 11h 52m | 26d ago | 22m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.70% | 77.43% | 77.43% | 1165 ms | ↓ 0.95x | 1 | 1h 39m | 26d ago | 28m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 188 ms | → 0.96x | 0 | — | — | 39m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1752 ms | ↓ 0.88x | 2 | 0s | 23d ago | 38m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1563 ms | ↓ 0.86x | 0 | — | — | 35m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.95% | 84.95% | 1734 ms | → 1.01x | 0 | — | — | 28m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.84% | 95.84% | 952 ms | ↓ 0.92x | 0 | — | — | 29m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 869 ms | → 0.95x | 0 | — | — | 38m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.33% | 98.33% | 418 ms | ↓ 0.47x | 1 | 0s | 17d ago | 26m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 16.39% | 16.39% | 709 ms | ↓ 0.54x | 0 | — | — | 29m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 447 ms | ↓ 0.61x | 0 | — | — | 20m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 705 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.80% | 14.44% | 14.44% | 1089 ms | ↓ 0.80x | 4 | 0s | 7d ago | 29m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.08% | 58.08% | 1711 ms | ↓ 0.91x | 0 | — | — | 29m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.79% | 99.79% | 3176 ms | → 1.00x | 0 | — | — | 39m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 83.15% | 89.90% | 89.90% | 25 ms | ↓ 0.17x | 4 | 1d 5h | 16d ago | 24m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.82% | 98.91% | 98.91% | 740 ms | ↓ 0.74x | 1 | 7h 40m | 8d ago | 38m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.41% | 96.56% | 96.56% | 4049 ms | → 0.98x | 5 | 28m | 8d ago | 29m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 13.82% | 13.82% | 836 ms | → 0.99x | 0 | — | — | 38m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 860 ms | ↓ 0.94x | 0 | — | — | 22m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.29% | 99.29% | 1148 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.93% | 99.94% | 99.94% | 1436 ms | ↓ 0.67x | 1 | 0s | 23d ago | 22m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1036 ms | ↓ 0.78x | 0 | — | — | 22m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.02% | 93.02% | 3606 ms | → 0.95x | 0 | — | — | 39m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.85% | 99.53% | 99.53% | 1651 ms | ↓ 0.91x | 2 | 10m | 12d ago | 38m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1822 ms | ↓ 0.81x | 0 | — | — | 28m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.75% | 98.73% | 98.73% | 1649 ms | ↓ 0.85x | 5 | 0s | 23d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.04% | 99.04% | 99.04% | 866 ms | ↓ 0.67x | 10 | 8m | 22d ago | 22m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.09% | 99.09% | 1082 ms | → 0.96x | 0 | — | — | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 827 ms | ↓ 0.77x | 0 | — | — | 38m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 378 ms | ↓ 0.64x | 0 | — | — | 41m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.83% | 59.48% | 59.48% | 2628 ms | ↓ 0.91x | 22 | 2m | 20d ago | 39m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.61% | 91.65% | 91.65% | 980 ms | ↓ 0.81x | 1 | 2h 20m | 26d ago | 38m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.28% | 98.28% | 2279 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.66% | 96.51% | 96.51% | 2349 ms | ↓ 0.91x | 1 | 1h 60m | 26d ago | 39m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1639 ms | → 1.00x | 0 | — | — | 20m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.78% | 99.78% | 518 ms | ↓ 0.47x | 0 | — | — | 24m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.77% | 86.77% | 1263 ms | → 0.97x | 0 | — | — | 27m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.77% | 99.77% | 814 ms | ↓ 0.62x | 1 | 0s | 23d ago | 24m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1383 ms | → 0.98x | 0 | — | — | 39m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1075 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 916 ms | ↑ 1.07x | 0 | — | — | 40m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2422 ms | ↓ 0.90x | 1 | 0s | 30d ago | 36m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 711 ms | → 1.00x | 0 | — | — | 37m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.55% | 83.55% | 1540 ms | ↓ 0.80x | 2 | 0s | 22d ago | 35m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.80% | 19.50% | 19.50% | 1470 ms | ↓ 0.84x | 4 | 0s | 11d ago | 41m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.76% | 98.76% | 1515 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.71% | 91.71% | 2746 ms | ↓ 0.81x | 0 | — | — | 41m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.93% | 99.93% | 602 ms | ↓ 0.86x | 1 | 0s | 21d ago | 20m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.16% | 96.34% | 96.34% | 646 ms | ↓ 0.55x | 3 | 1h 21m | 26d ago | 22m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.69% | 98.69% | 529 ms | ↓ 0.94x | 0 | — | — | 28m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.41% | 98.64% | 98.64% | 1991 ms | ↓ 0.81x | 1 | 3h 60m | 16d ago | 37m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.40% | 98.44% | 98.44% | 535 ms | ↓ 0.46x | 5 | 28m | 8d ago | 26m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.90% | 24.91% | 24.91% | 756 ms | ↓ 0.94x | 2 | 0s | 8d ago | 37m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.07% | 98.07% | 1442 ms | → 0.99x | 0 | — | — | 27m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 956 ms | ↓ 0.75x | 0 | — | — | 37m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.10% | 87.10% | 2255 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.95% | 96.35% | 96.35% | 1613 ms | ↓ 0.87x | 1 | 0s | 29d ago | 29m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1326 ms | ↓ 0.80x | 0 | — | — | 37m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 13.82% | 13.82% | 1804 ms | ↓ 0.84x | 1 | 0s | 15d ago | 39m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 639 ms | ↓ 0.66x | 0 | — | — | 22m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.65% | 96.18% | 96.18% | 1194 ms | ↓ 0.88x | 2 | 51m | 18d ago | 24m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.84% | 99.84% | 1807 ms | ↓ 0.87x | 1 | 0s | 7m ago | 37m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 666 ms | ↓ 0.80x | 1 | 0s | 24d ago | 39m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 15.82% | 15.82% | 1784 ms | ↓ 0.88x | 0 | — | — | 29m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 13.64% | 13.64% | 1256 ms | ↓ 0.80x | 3 | 0s | 23d ago | 29m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.66% | 95.82% | 95.82% | 1157 ms | ↓ 0.93x | 1 | 8h 38m | 14d ago | 24m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.95% | 99.89% | 99.89% | 1287 ms | → 0.98x | 1 | 0s | 29d ago | 39m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.35% | 99.63% | 99.63% | 2094 ms | ↓ 0.89x | 6 | 2h 50m | 8d ago | 37m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1920 ms | ↓ 0.92x | 0 | — | — | 37m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 100.00% | 99.06% | 90.27% | 90.27% | 1516 ms | ↓ 0.93x | 19 | 0s | 9d ago | 27m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.18% | 98.18% | 947 ms | ↓ 0.85x | 0 | — | — | 24m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1629 ms | ↓ 0.86x | 2 | 0s | 13d ago | 35m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1983 ms | → 1.02x | 0 | — | — | 29m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.07% | 99.07% | 1105 ms | ↓ 0.88x | 0 | — | — | 39m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 379 ms | ↓ 0.80x | 0 | — | — | 38m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.76% | 97.27% | 82.21% | 82.21% | 2520 ms | ↓ 0.82x | 50 | 2m | 7d ago | 41m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.76% | 99.95% | 99.55% | 99.55% | 1302 ms | → 1.02x | 1 | 0s | 6d ago | 40m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.76% | 99.90% | 99.27% | 99.27% | 3073 ms | ↓ 0.83x | 2 | 0s | 5d ago | 40m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.76% | 94.19% | 95.78% | 95.78% | 2780 ms | ↓ 0.87x | 62 | 18m | 7d ago | 40m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 98.92% | 97.74% | 97.74% | 3351 ms | → 1.00x | 22 | 0s | 16h ago | 39m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.76% | 99.85% | 99.72% | 99.72% | 1746 ms | ↓ 0.83x | 3 | 0s | 6d ago | 39m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.51% | 99.84% | 99.84% | 2858 ms | ↓ 0.79x | 10 | 0s | 4d ago | 40m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 94.12% | 12.93% | 12.93% | 766 ms | ↓ 0.88x | 53 | 27m | 6d ago | 39m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.95% | 99.50% | 99.50% | 2575 ms | ↓ 0.92x | 1 | 0s | 6d ago | 39m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.95% | 32.78% | 32.78% | 1437 ms | ↓ 0.69x | 1 | 0s | 3d ago | 39m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.76% | 99.90% | 99.61% | 99.61% | 1670 ms | ↓ 0.91x | 2 | 0s | 7d ago | 38m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.90% | 88.49% | 88.49% | 1016 ms | ↓ 0.82x | 2 | 0s | 5d ago | 38m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.76% | 99.90% | 51.93% | 51.93% | 1237 ms | ↓ 0.80x | 2 | 0s | 4d ago | 36m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.51% | 97.72% | 97.72% | 2788 ms | ↓ 0.89x | 8 | 5m | 7d ago | 35m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 98.22% | 77.90% | 77.90% | 1812 ms | ↓ 0.85x | 33 | 2m | 7d ago | 35m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.83% | 99.83% | 3350 ms | ↓ 0.82x | 3 | 0s | 1d ago | 35m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.57% | 99.42% | 99.42% | 2646 ms | ↓ 0.81x | 18 | 12m | 7d ago | 35m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 61.36% | 42.07% | 42.07% | 2849 ms | → 0.99x | 2 | 5d 9h | 2d ago | 30m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 946 ms | ↓ 0.93x | 1 | 0s | 3d ago | 30m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.31% | 92.31% | 938 ms | ↓ 0.85x | 1 | 0s | 13h ago | 29m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.80% | 56.96% | 56.96% | 1534 ms | ↓ 0.84x | 4 | 0s | 7d ago | 29m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.76% | 99.85% | 16.62% | 16.62% | 1054 ms | ↓ 0.73x | 3 | 0s | 7d ago | 29m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.75% | 99.45% | 69.60% | 69.60% | 1040 ms | ↓ 0.87x | 9 | 4m | 6d ago | 28m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.75% | 99.65% | 96.45% | 96.45% | 2086 ms | → 0.96x | 2 | 50m | 6h ago | 27m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.75% | 99.95% | 98.83% | 98.83% | 2355 ms | ↑ 1.05x | 1 | 0s | 2d ago | 27m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.75% | 99.90% | 33.63% | 33.63% | 2145 ms | → 0.96x | 2 | 0s | 3d ago | 28m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.75% | 95.24% | 64.71% | 64.71% | 725 ms | ↓ 0.87x | 9 | 3h 9m | 4d ago | 28m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.75% | 99.85% | 77.72% | 77.72% | 1768 ms | ↓ 0.90x | 3 | 0s | 3h ago | 28m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.75% | 99.95% | 99.77% | 99.77% | 915 ms | ↓ 0.85x | 1 | 0s | 2d ago | 27m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.75% | 99.82% | 99.82% | 140 ms | ↓ 0.43x | 5 | 0s | 5d ago | 26m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.70% | 97.47% | 97.47% | 2792 ms | ↓ 0.87x | 6 | 0s | 2h ago | 26m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.75% | 99.95% | 99.82% | 99.82% | 1465 ms | ↓ 0.93x | 1 | 0s | 4d ago | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.70% | 69.74% | 69.74% | 1201 ms | → 0.97x | 6 | 0s | 4d ago | 26m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 99.75% | 98.09% | 98.09% | 1981 ms | ↓ 0.93x | 5 | 0s | 5d ago | 25m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.50% | 96.93% | 96.93% | 1862 ms | ↓ 0.89x | 10 | 0s | 2d ago | 23m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.95% | 97.54% | 97.54% | 1284 ms | ↓ 0.88x | 1 | 0s | 5d ago | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.75% | 99.80% | 97.44% | 97.44% | 1943 ms | ↓ 0.95x | 3 | 6m | 6d ago | 25m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.90% | 99.88% | 99.88% | 2307 ms | → 0.98x | 2 | 0s | 5d ago | 25m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.93% | 99.93% | 99.93% | 1532 ms | ↓ 0.87x | 1 | 0s | 4d ago | 21m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.75% | 99.87% | 99.87% | 99.87% | 1623 ms | ↓ 0.87x | 2 | 0s | 4d ago | 21m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.45% | 99.45% | 99.45% | 2374 ms | ↓ 0.89x | 6 | 8m | 4d ago | 21m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.75% | 99.74% | 99.74% | 99.74% | 1473 ms | ↑ 1.05x | 3 | 6m | 4d ago | 21m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.93% | 99.93% | 99.93% | 778 ms | ↓ 0.86x | 1 | 0s | 4d ago | 21m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.75% | 99.66% | 99.66% | 99.66% | 2190 ms | ↓ 0.89x | 4 | 5m | 4d ago | 21m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.75% | 99.92% | 99.92% | 99.92% | 2316 ms | ↓ 0.92x | 1 | 0s | 4d ago | 21m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.75% | 99.93% | 99.93% | 99.93% | 760 ms | → 0.95x | 1 | 0s | 4d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.75% | 99.80% | 99.80% | 99.80% | 1516 ms | ↓ 0.89x | 2 | 10m | 4d ago | 21m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.75% | 99.25% | 99.26% | 99.26% | 1300 ms | ↓ 0.83x | 9 | 5m | 3d ago | 22m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.75% | 99.93% | 99.93% | 99.93% | 348 ms | ↓ 0.82x | 1 | 0s | 4d ago | 21m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.75% | 99.93% | 99.93% | 99.93% | 2631 ms | ↓ 0.94x | 1 | 0s | 4d ago | 21m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.75% | 99.93% | 99.93% | 99.93% | 409 ms | ↓ 0.70x | 1 | 0s | 4d ago | 20m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.95% | 99.95% | 99.95% | 944 ms | ↓ 0.76x | 1 | 0s | 4d ago | 20m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.75% | 99.79% | 99.79% | 99.79% | 585 ms | ↓ 0.58x | 3 | 0s | 4d ago | 20m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.75% | 99.93% | 99.93% | 99.93% | 1000 ms | ↓ 0.87x | 1 | 0s | 4d ago | 20m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 831 ms | ↓ 0.76x | 1 | 0s | 4d ago | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.75% | 99.94% | 99.94% | 99.94% | 3265 ms | ↓ 0.77x | 1 | 0s | 4d ago | 20m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 1056 ms | ↓ 0.74x | 1 | 0s | 4d ago | 20m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.95% | 99.95% | 99.95% | 509 ms | ↓ 0.58x | 1 | 0s | 4d ago | 20m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.75% | 99.95% | 99.95% | 99.95% | 801 ms | ↓ 0.68x | 1 | 0s | 4d ago | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.80% | 99.80% | 99.80% | 824 ms | ↓ 0.75x | 3 | 0s | 4d ago | 20m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.75% | 99.86% | 99.86% | 99.86% | 853 ms | → 0.96x | 2 | 0s | 4d ago | 21m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.93% | 99.93% | 99.93% | 358 ms | ↓ 0.59x | 1 | 0s | 4d ago | 20m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.93% | 99.93% | 99.93% | 263 ms | ↓ 0.63x | 1 | 0s | 4d ago | 20m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.52% | 94.09% | 84.36% | 84.36% | 4443 ms | → 0.99x | 43 | 37m | 3d ago | 41m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.52% | 98.63% | 92.01% | 92.01% | 938 ms | ↓ 0.95x | 6 | 1h 13m | 1h ago | 39m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.71% | 98.98% | 98.98% | 2233 ms | → 0.96x | 2 | 45m | 22h ago | 39m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.52% | 95.45% | 86.54% | 86.54% | 1155 ms | ↓ 0.79x | 8 | 3h 3m | 3d ago | 39m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.52% | 99.80% | 99.72% | 99.72% | 2479 ms | ↓ 0.89x | 4 | 0s | 3d ago | 39m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.52% | 98.04% | 98.68% | 98.68% | 3501 ms | → 0.95x | 34 | 4m | 1d ago | 38m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.52% | 99.26% | 26.43% | 26.43% | 1554 ms | ↑ 1.19x | 6 | 30m | 1d ago | 37m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.52% | 96.42% | 44.18% | 44.18% | 3094 ms | ↑ 1.16x | 9 | 1h 42m | 6d ago | 36m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.51% | 99.90% | 99.87% | 99.87% | 1770 ms | ↓ 0.93x | 1 | 30m | 3d ago | 27m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 99.70% | 98.05% | 98.05% | 1277 ms | ↓ 0.64x | 6 | 0s | 2h ago | 26m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.51% | 98.76% | 38.48% | 38.48% | 1128 ms | ↓ 0.67x | 21 | 4m | 2d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.51% | 98.63% | 98.63% | 98.63% | 1263 ms | ↓ 0.79x | 12 | 13m | 7d ago | 22m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.50% | 99.50% | 99.50% | 99.50% | 1299 ms | → 1.00x | 1 | 0s | 2d ago | 20m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.32% | 99.32% | 99.32% | 99.32% | 375 ms | → 1.00x | 1 | 0s | 19h ago | 20m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.32% | 99.32% | 99.32% | 99.32% | 4354 ms | → 1.00x | 1 | 0s | 20h ago | 20m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.26% | 99.85% | 78.61% | 78.61% | 1704 ms | ↓ 0.88x | 1 | 51m | 4d ago | 28m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.26% | 93.39% | 91.86% | 91.86% | 2136 ms | ↓ 0.94x | 12 | 3h 37m | 10h ago | 26m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.26% | 99.65% | 84.60% | 84.60% | 576 ms | ↓ 0.38x | 5 | 8m | 6d ago | 25m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.26% | 99.80% | 97.95% | 97.95% | 2257 ms | ↓ 0.91x | 2 | 30m | 5d ago | 25m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.26% | 99.85% | 89.39% | 89.39% | 319 ms | → 1.00x | 3 | 0s | 6d ago | 24m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.26% | 99.50% | 99.58% | 99.58% | 155 ms | ↓ 0.18x | 7 | 9m | 1d ago | 22m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.26% | 99.32% | 99.32% | 99.32% | 932 ms | ↓ 0.94x | 10 | 0s | 2d ago | 21m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.26% | 99.22% | 99.22% | 99.22% | 1556 ms | ↓ 0.94x | 3 | 1h 3m | 14h ago | 21m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.04% | 99.80% | 99.92% | 99.92% | 758 ms | ↓ 0.88x | 1 | 1h 16m | 7d ago | 36m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.03% | 73.42% | 12.02% | 12.02% | 2570 ms | → 0.99x | 9 | 19h 25m | 15h ago | 35m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.03% | 99.56% | 99.70% | 99.70% | 2920 ms | ↓ 0.90x | 7 | 6m | 2d ago | 35m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.02% | 97.47% | 85.40% | 85.40% | 4661 ms | → 1.00x | 46 | 2m | 4d ago | 29m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.02% | 97.12% | 83.92% | 83.92% | 4599 ms | → 0.99x | 57 | 19s | 2d ago | 26m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.01% | 99.67% | 98.58% | 98.58% | 1012 ms | ↓ 0.86x | 2 | 44m | 3d ago | 22m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (47)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.79% | 95.12% | 13.34% | 13.34% | 3474 ms | ↓ 0.87x | 67 | 10m | 22h ago | 35m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.77% | 99.70% | 97.27% | 97.27% | 1631 ms | ↓ 0.66x | 3 | 20m | 7h ago | 26m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.77% | 98.06% | 89.78% | 89.78% | 3022 ms | → 0.96x | 32 | 5m | 6h ago | 26m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.77% | 99.65% | 96.54% | 96.54% | 2732 ms | → 0.96x | 3 | 27m | 7h ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.77% | 95.42% | 95.42% | 95.42% | 775 ms | ↑ 1.10x | 9 | 2h 22m | 13h ago | 22m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.56% | 99.66% | 99.83% | 99.83% | 126 ms | ↓ 0.49x | 5 | 12m | 1d ago | 39m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.53% | 99.70% | 99.70% | 99.70% | 2235 ms | ↓ 0.82x | 1 | 2h 18m | 3d ago | 26m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.52% | 99.54% | 99.54% | 99.54% | 772 ms | ↓ 0.76x | 7 | 0s | 1d ago | 21m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.32% | 96.47% | 84.84% | 84.84% | 4493 ms | → 1.01x | 65 | 3m | 2d ago | 37m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.31% | 94.38% | 98.66% | 98.66% | 3474 ms | ↓ 0.88x | 69 | 13m | 22h ago | 35m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.28% | 97.42% | 62.99% | 62.99% | 4660 ms | → 1.00x | 46 | 3m | 18h ago | 28m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.28% | 99.50% | 96.38% | 96.38% | 1889 ms | ↓ 0.90x | 6 | 16m | 17h ago | 24m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.27% | 98.50% | 98.50% | 98.50% | 1321 ms | → 1.04x | 20 | 2m | 14h ago | 20m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 98.08% | 47.18% | 5.15% | 5.15% | 1471 ms | → 0.96x | 3 | 4d 23h | 4d ago | 38m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.07% | 96.31% | 72.86% | 72.86% | 4333 ms | → 0.97x | 65 | 3m | 14h ago | 36m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.07% | 86.20% | 12.16% | 12.16% | 1878 ms | ↓ 0.75x | 221 | 5m | 5d ago | 36m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.84% | 97.25% | 42.71% | 42.71% | 960 ms | ↓ 0.91x | 15 | 58m | 4d ago | 37m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.84% | 97.54% | 99.14% | 99.14% | 3197 ms | → 1.01x | 14 | 54m | 4d ago | 37m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.78% | 95.68% | 83.15% | 83.15% | 4725 ms | ↑ 1.06x | 51 | 16m | 16h ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.61% | 97.02% | 98.04% | 98.04% | 4605 ms | → 1.00x | 54 | 3m | 2d ago | 41m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.61% | 99.12% | 99.41% | 99.41% | 2496 ms | ↓ 0.82x | 10 | 21m | 4d ago | 40m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.60% | 97.54% | 98.96% | 98.96% | 3095 ms | ↓ 0.91x | 15 | 49m | 4d ago | 37m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.55% | 99.50% | 98.22% | 98.22% | 1226 ms | ↓ 0.95x | 1 | 4h 17m | 4d ago | 27m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.28% | 98.02% | 98.02% | 98.02% | 1676 ms | ↓ 0.87x | 15 | 22m | 4d ago | 21m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.28% | 99.25% | 99.25% | 99.25% | 1111 ms | → 0.95x | 2 | 1h 36m | 3d ago | 21m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.11% | 99.21% | 96.40% | 96.40% | 1175 ms | ↓ 0.83x | 7 | 27m | 3d ago | 36m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.10% | 99.01% | 98.93% | 98.93% | 1529 ms | ↓ 0.77x | 15 | 8m | 15h ago | 35m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 96.87% | 94.19% | 66.51% | 66.51% | 4211 ms | ↓ 0.90x | 46 | 32m | 3h ago | 36m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 96.05% | 98.06% | 98.37% | 98.37% | 2350 ms | ↓ 0.82x | 2 | 6h 41m | 3d ago | 21m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.34% | 94.19% | 80.34% | 80.34% | 4789 ms | → 1.03x | 99 | 4m | 2h ago | 27m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.33% | 93.84% | 80.77% | 80.77% | 4689 ms | → 1.00x | 108 | 3m | 17h ago | 26m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.85% | 94.54% | 70.02% | 70.02% | 1531 ms | ↓ 0.87x | 19 | 1h 37m | 2d ago | 28m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.71% | 96.81% | 13.36% | 13.36% | 1883 ms | → 0.96x | 61 | 1m | 1h ago | 37m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 93.83% | 93.55% | 93.55% | 93.55% | 1029 ms | → 0.99x | 3 | 11h 15m | 3d ago | 22m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 93.32% | 95.50% | 95.50% | 95.50% | 1020 ms | ↓ 0.74x | 40 | 17m | 4d ago | 20m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 92.40% | 98.46% | 95.57% | 95.57% | 2378 ms | → 0.96x | 3 | 3h 11m | 8h ago | 27m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.35% | 96.17% | 96.75% | 96.75% | 3124 ms | ↓ 0.89x | 14 | 1h 33m | 3d ago | 22m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.18% | 88.11% | 14.61% | 14.61% | 4548 ms | → 0.98x | 187 | 7m | 2h ago | 29m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 91.93% | 97.97% | 13.67% | 13.67% | 2255 ms | → 1.00x | 9 | 1h 21m | 1d ago | 29m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.35% | 96.74% | 96.74% | 96.74% | 485 ms | ↓ 0.43x | 3 | 5h 59m | 3d ago | 20m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.15% | 89.17% | 47.99% | 47.99% | 4019 ms | → 1.02x | 182 | 4m | 55m ago | 24m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 86.36% | 96.82% | 79.11% | 79.11% | 120 ms | ↓ 0.81x | 6 | 4h 15m | 7d ago | 40m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 76.92% | 76.92% | 76.92% | 76.92% | 839 ms | → 1.00x | 51 | 21m | 24h ago | 20m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.12% | 67.64% | 17.57% | 17.57% | 4724 ms | ↑ 1.06x | 373 | 17m | 2h ago | 28m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 41.11% | 82.00% | 50.71% | 50.71% | 2507 ms | ↓ 0.83x | 11 | 12h 23m | 9d ago | 36m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 40.99% | 70.54% | 70.54% | 70.54% | 2531 ms | ↓ 0.82x | 10 | 16h 47m | 22h ago | 21m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 28.57% | 75.80% | 86.05% | 86.05% | 622 ms | ↓ 0.50x | 2 | 4d | 9d ago | 24m ago |

</details>

<details open>
<summary><strong>🔴 Down (222)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 97.04% | 97.07% | 97.26% | 97.26% | 1428 ms | ↓ 0.91x | 5 | 3h 50m | 5h ago | 24m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 94.58% | 98.16% | 95.03% | 95.03% | 1736 ms | ↑ 1.08x | 3 | 4h 13m | 9h ago | 24m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 85.34% | 96.95% | 97.73% | 97.73% | 1979 ms | ↓ 0.89x | 6 | 3h 57m | 23h ago | 36m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 78.23% | 23.84% | 16.30% | 16.30% | 2755 ms | → 1.00x | 58 | 8h 44m | 5h ago | 39m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.23% | 63.98% | 61.91% | 61.91% | 4851 ms | → 1.01x | 404 | 18m | 36m ago | 36m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 61.18% | 91.85% | 96.90% | 96.90% | 3272 ms | ↓ 0.92x | 8 | 7h 52m | 3d ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 53.69% | 90.26% | 64.71% | 64.71% | 1964 ms | → 0.97x | 9 | 8h 38m | 3d ago | 24m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 52.83% | 12.86% | 28.63% | 28.63% | 3579 ms | → 0.99x | 31 | 19h 28m | 2d ago | 26m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 50.49% | 89.94% | 47.77% | 47.77% | 1556 ms | ↑ 1.11x | 2 | 1d 17h | 3d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 46.91% | 73.73% | 80.06% | 80.06% | 2078 ms | → 1.02x | 12 | 16h 6m | 4d ago | 22m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 46.41% | 82.25% | 97.73% | 97.73% | 553 ms | ↓ 0.77x | 17 | 7h 47m | 4d ago | 39m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 46.06% | 45.87% | 30.19% | 30.19% | 1279 ms | → 0.97x | 5 | 3d 3h | 2d ago | 25m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 45.81% | 85.24% | 91.86% | 91.86% | 652 ms | ↓ 0.25x | 3 | 1d 15h | 4d ago | 25m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 44.58% | 85.98% | 50.04% | 50.04% | 1376 ms | ↓ 0.85x | 21 | 5h 2m | 4d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 40.69% | 87.79% | 88.77% | 88.77% | 2417 ms | ↓ 0.81x | 3 | 1d 10h | 4d ago | 27m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 32.06% | 86.13% | 62.10% | 62.10% | 889 ms | ↓ 0.90x | 1 | 4d 19h | 5d ago | 40m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 15.59% | 3.19% | 71.24% | 71.24% | 1049 ms | → 1.00x | 4 | 7d 5h | 4d ago | 38m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 14.66% | 80.55% | 55.00% | 55.00% | 3450 ms | ↓ 0.93x | 14 | 10h 56m | 6d ago | 37m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 9.18% | 9.72% | 9.72% | 9.72% | 3359 ms | ↓ 0.86x | 134 | 3h 27m | 4h ago | 20m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 8.62% | 81.51% | 88.27% | 88.27% | 1771 ms | ↓ 0.54x | 2 | 3d 5h | 6d ago | 24m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 2.96% | 78.05% | 78.05% | 78.05% | 1040 ms | ↓ 0.35x | 16 | 10h 12m | 7d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.91% | 2.98% | 62.70% | 62.70% | 3861 ms | ↑ 1.31x | 32 | 21h 40m | 2d ago | 41m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.96% | 12.93% | 4.23% | 4.23% | 3342 ms | ↑ 1.23x | 4 | 6d 15h | 6d ago | 36m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 85.45% | 85.45% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 70.77% | 70.77% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 76.10% | 76.10% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 69.51% | 90.66% | 90.66% | — | — | 7 | 1d 11h | 10d ago | 26m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 4.12% | 69.83% | 69.83% | — | — | 1 | 28d 23h | 29d ago | 26m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.86% | 5.86% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.93% | 12.93% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 34.54% | 69.58% | 69.58% | — | — | 4 | 5d 2h | 18d ago | 24m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 29m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.50% | 3.50% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 53.38% | 80.90% | 80.90% | — | — | 3 | 4d 23h | 15d ago | 25m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 85.71% | 85.71% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.62% | 37.62% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 32.95% | 65.44% | 65.44% | — | — | 3 | 6d 22h | 21d ago | 24m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 63.61% | 95.72% | 95.72% | — | — | 6 | 1d 23h | 12d ago | 40m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.25% | 25.25% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 76.91% | 76.91% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 56.93% | 56.93% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.44% | 31.44% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 86.12% | 86.12% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 64.87% | 64.87% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 79.55% | 79.55% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.38% | 16.38% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 53.05% | 53.05% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 36.93% | 36.93% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 73.06% | 86.49% | 86.49% | — | — | 2 | 4d 11h | 9d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.67% | 3.67% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 29m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 86.33% | 86.33% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 60.63% | 60.63% | 60.63% | — | — | 6 | 1d 14h | 10d ago | 20m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.60% | 53.60% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 29.62% | 29.62% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.12% | 2.12% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 75.00% | 94.58% | 94.58% | — | — | 13 | 15h 3m | 8d ago | 37m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 49.06% | 85.30% | 85.30% | — | — | 4 | 4d 1h | 16d ago | 26m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 40.46% | 40.46% | 40.46% | — | — | 1 | 14d 15h | 15d ago | 21m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 54.32% | 69.62% | 69.62% | — | — | 2 | 7d 8h | 15d ago | 28m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 36.29% | 36.29% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.40% | 56.40% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.85% | 25.85% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.86% | 30.86% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 59.10% | 59.10% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 70.67% | 26.56% | 26.56% | — | — | 1 | 9d 21h | 10d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.95% | 5.95% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 68.00% | 68.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 86.06% | 86.06% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.86% | 7.86% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 82.18% | 82.18% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 28.24% | 84.79% | 84.79% | — | — | 3 | 7d 6h | 15d ago | 40m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 71.95% | 36.73% | 36.73% | — | — | 21 | 10h 27m | 9d ago | 26m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 21m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 29m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 30.81% | 30.81% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 54.67% | 54.67% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 49.28% | 59.28% | 59.28% | — | — | 3 | 5d 9h | 16d ago | 27m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 15.57% | 14.15% | 14.15% | — | — | 1 | 19d 6h | 19d ago | 22m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 53.48% | 77.46% | 77.46% | — | — | 2 | 7d 11h | 15d ago | 25m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 79.20% | 79.20% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.29% | 48.29% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.88% | 43.88% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 50.82% | 50.82% | 50.82% | — | — | 5 | 2d 8h | 12d ago | 20m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 86.07% | 86.07% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.79% | 60.79% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.38% | 40.38% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 69.46% | 90.68% | 90.68% | — | — | 7 | 1d 11h | 10d ago | 26m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 30m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.04% | 33.04% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.67% | 2.67% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 53.21% | 86.30% | 86.30% | — | — | 2 | 7d 11h | 15d ago | 38m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.16% | 43.16% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 86.04% | 86.04% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.38% | 34.38% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 85.96% | 85.96% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 37.33% | 66.87% | 66.87% | — | — | 2 | 9d 19h | 20d ago | 24m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 29.29% | 29.29% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 47.63% | 47.63% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 83.54% | 83.54% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 7.49% | 71.87% | 71.87% | — | — | 1 | 28d 1h | 28d ago | 28m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 38.67% | 36.50% | 36.50% | — | — | 7 | 2d 18h | 19d ago | 24m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 81.96% | 81.96% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 58.44% | 58.44% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.43% | 3.43% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.84% | 44.84% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 80.31% | 80.31% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 61.27% | 61.27% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 51.84% | 60.57% | 60.57% | — | — | 29 | 12h 25m | 15d ago | 22m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 37.97% | 73.21% | 73.21% | — | — | 38 | 11h 56m | 19d ago | 25m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 42.93% | 92.29% | 92.29% | — | — | 1 | 17d 23h | 18d ago | 37m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.38% | 29.38% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 12.25% | 12.25% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.74% | 13.74% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 11.13% | 32.19% | 32.19% | — | — | 3 | 8d 23h | 25d ago | 24m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.03% | 25.03% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 21m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 63.18% | 63.18% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 14.01% | 14.01% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.14% | 18.14% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.41% | 51.41% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 41.49% | 41.49% | 41.49% | — | — | 1 | 13d 19h | 14d ago | 21m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 21m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 57.29% | 57.29% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 36.18% | 26.22% | 26.22% | — | — | 18 | 1d 2h | 20d ago | 26m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 42.80% | 42.80% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 56.98% | 56.98% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.76% | 5.76% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 60.67% | 93.79% | 93.79% | — | — | 1 | 12d 19h | 13d ago | 38m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 85.04% | 85.04% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 29m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 66.32% | 66.32% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 77.88% | 77.88% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 84.89% | 84.89% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.38% | 20.38% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 5.43% | 5.43% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.53% | 35.53% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.17% | 8.17% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 68.21% | 68.21% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 55.91% | 55.91% | 55.91% | — | — | 2 | 5d 8h | 11d ago | 21m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 30m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 70.22% | 70.22% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 42.34% | 55.92% | 55.92% | — | — | 12 | 1d 12h | 18d ago | 22m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 8.90% | 8.90% | — | — | 1 | 22d 11h | 22d ago | 22m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 66.87% | 72.23% | 72.23% | — | — | 14 | 18h 33m | 11d ago | 22m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 43.89% | 43.89% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 30.26% | 30.26% | — | — | 1 | 23d 11h | 23d ago | 24m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.91% | 13.91% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.66% | 18.66% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 4.82% | 21.49% | 21.49% | — | — | 1 | 28d 19h | 29d ago | 25m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 38.46% | 48.42% | 48.42% | — | — | 1 | 19d 7h | 19d ago | 21m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 36.90% | 10.84% | 10.84% | — | — | 355 | 59m | 9d ago | 28m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 15.58% | 15.58% | 15.58% | — | — | 8 | 2d 12h | 20d ago | 20m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.25% | 1.25% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.96% | 6.96% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 8.27% | 8.27% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.86% | 51.86% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 62.89% | 68.89% | 68.89% | — | — | 2 | 6d 2h | 12d ago | 21m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 86.13% | 86.13% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 54.51% | 54.51% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 86.32% | 86.32% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 46.74% | 69.99% | 69.99% | — | — | 2 | 8d 10h | 17d ago | 23m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.00% | 43.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.26% | 3.26% | 3.26% | — | — | 1 | 22d 18h | 23d ago | 22m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 66.91% | 21.16% | 21.16% | — | — | 4 | 2d 18h | 11d ago | 28m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 83.97% | 83.97% | — | — | 1 | 29d 24h | 30d ago | 29m ago |

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
