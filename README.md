# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**610 providers** — 341 🟢 operational · 50 🟡 degraded · 219 🔴 down · 0 ⚫ unknown

_Updated 2026-05-27 07:07 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.85% | 97.39% | 97.39% | 1372 ms | ↓ 0.74x | 2 | 10m | 16d ago | 10m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.02% | 93.02% | 683 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.50% | 69.76% | 69.76% | 1011 ms | ↓ 0.85x | 8 | 5m | 7d ago | 16m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.05% | 15.89% | 15.89% | 1573 ms | ↓ 0.79x | 2 | 6h 11m | 26d ago | 17m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.29% | 97.29% | 2347 ms | ↓ 0.93x | 0 | — | — | 25m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 48.57% | 48.57% | 1581 ms | → 0.97x | 2 | 0s | 15d ago | 14m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.55% | 97.73% | 97.73% | 2720 ms | ↓ 0.88x | 7 | 6m | 8d ago | 21m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 921 ms | → 1.00x | 0 | — | — | 7m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 98.05% | 98.57% | 98.57% | 1034 ms | → 0.99x | 8 | 1h 20m | 11d ago | 16m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.90% | 98.74% | 98.74% | 1473 ms | ↓ 0.79x | 2 | 0s | 25d ago | 27m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.69% | 98.69% | 98.69% | 1224 ms | ↓ 0.77x | 12 | 13m | 8d ago | 9m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.50% | 93.76% | 93.76% | 1602 ms | ↓ 0.89x | 1 | 2h 59m | 24d ago | 11m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1488 ms | ↓ 0.87x | 0 | — | — | 8m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.30% | 97.02% | 97.02% | 1710 ms | → 0.97x | 1 | 4h 31m | 13d ago | 11m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 98.30% | 98.30% | 98.30% | 2154 ms | ↓ 0.87x | 13 | 22m | 9d ago | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.92% | 91.92% | 1446 ms | ↓ 0.82x | 0 | — | — | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 1261 ms | → 0.98x | 1 | 0s | 13d ago | 8m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.82% | 99.82% | 849 ms | ↓ 0.73x | 1 | 0s | 12d ago | 11m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 476 ms | → 1.00x | 0 | — | — | 7m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.85% | 98.28% | 98.28% | 985 ms | ↓ 0.83x | 3 | 0s | 19d ago | 11m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.44% | 96.44% | 1316 ms | → 0.97x | 1 | 0s | 12d ago | 11m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.29% | 98.29% | 680 ms | ↓ 0.76x | 0 | — | — | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 77.63% | 33.32% | 33.32% | 348 ms | ↓ 0.94x | 2 | 3d 4h | 28d ago | 22m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 590 ms | ↓ 0.91x | 1 | 0s | 15d ago | 11m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.82% | 98.82% | 798 ms | ↓ 0.91x | 1 | 0s | 24d ago | 24m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.14% | 96.14% | 481 ms | ↓ 0.94x | 0 | — | — | 13m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.39% | 97.39% | 167 ms | ↓ 0.38x | 0 | — | — | 10m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 98.75% | 77.97% | 77.97% | 1812 ms | ↓ 0.82x | 24 | 49s | 8d ago | 22m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.62% | 99.62% | 99.62% | 776 ms | → 0.95x | 6 | 0s | 9d ago | 9m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 99.55% | 81.96% | 81.96% | 984 ms | ↓ 0.60x | 1 | 1h 36m | 28d ago | 11m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.45% | 79.89% | 79.89% | 1735 ms | → 1.03x | 4 | 38m | 9d ago | 16m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.75% | 97.33% | 97.33% | 1164 ms | ↑ 1.22x | 1 | 1h 19m | 29d ago | 14m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 397 ms | ↓ 0.89x | 0 | — | — | 23m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 95.95% | 95.79% | 95.79% | 2841 ms | ↓ 0.87x | 49 | 13m | 8d ago | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2512 ms | ↓ 0.83x | 1 | 0s | 19d ago | 23m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.84% | 98.84% | 118 ms | ↓ 0.21x | 0 | — | — | 13m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.79% | 99.79% | 1392 ms | ↓ 0.74x | 3 | 0s | 23d ago | 13m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.59% | 95.59% | 872 ms | ↓ 0.57x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.75% | 99.86% | 99.86% | 956 ms | ↓ 0.62x | 3 | 13m | 9d ago | 11m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1643 ms | ↓ 0.92x | 0 | — | — | 23m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 687 ms | → 1.00x | 0 | — | — | 7m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.44% | 99.42% | 99.42% | 2714 ms | ↓ 0.83x | 4 | 2h 15m | 15d ago | 13m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.75% | 99.64% | 99.64% | 942 ms | → 1.04x | 4 | 5m | 13d ago | 11m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.90% | 25.56% | 25.56% | 910 ms | ↓ 0.81x | 2 | 0s | 24d ago | 23m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.70% | 97.99% | 97.99% | 2554 ms | → 0.95x | 1 | 1h 41m | 9d ago | 12m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1074 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.60% | 97.33% | 97.33% | 1552 ms | ↑ 1.25x | 7 | 4h 1m | 10d ago | 17m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.87% | 99.87% | 99.87% | 465 ms | → 0.99x | 2 | 0s | 17d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.19% | 96.19% | 894 ms | ↓ 0.90x | 1 | 0s | 26d ago | 15m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.74% | 99.74% | 99.74% | 1464 ms | → 0.96x | 2 | 19m | 14d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.65% | 51.65% | 750 ms | ↓ 0.93x | 0 | — | — | 17m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 2766 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.97% | 96.97% | 1054 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 99.00% | 99.00% | 1239 ms | ↓ 0.88x | 2 | 0s | 12d ago | 15m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.47% | 81.47% | 1798 ms | ↓ 0.92x | 0 | — | — | 16m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 63.43% | 63.43% | 1317 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 898 ms | ↓ 0.91x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.40% | 98.40% | 1579 ms | ↓ 0.84x | 0 | — | — | 12m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.28% | 98.28% | 682 ms | ↓ 0.80x | 0 | — | — | 11m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.87% | 98.87% | 98.87% | 1806 ms | ↓ 0.87x | 12 | 10m | 23d ago | 9m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1340 ms | ↓ 0.82x | 0 | — | — | 8m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.19% | 91.65% | 91.65% | 1538 ms | ↓ 0.73x | 14 | 23m | 23d ago | 9m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 43.92% | 43.92% | 850 ms | ↓ 0.91x | 0 | — | — | 17m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.87% | 73.87% | 797 ms | ↓ 0.80x | 1 | 0s | 13d ago | 16m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 92.71% | 92.71% | 92.71% | 465 ms | ↓ 0.55x | 5 | 7h 21m | 11d ago | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 952 ms | → 1.00x | 0 | — | — | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.90% | 97.90% | 1814 ms | ↓ 0.80x | 0 | — | — | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 49.42% | 49.42% | 1118 ms | ↓ 0.86x | 0 | — | — | 17m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 41.35% | 41.35% | 991 ms | ↓ 0.68x | 0 | — | — | 23m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.21% | 80.21% | 1328 ms | ↓ 0.87x | 1 | 0s | 12d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.55% | 58.72% | 58.72% | 735 ms | ↓ 0.73x | 5 | 16m | 24d ago | 16m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.90% | 97.90% | 790 ms | ↓ 0.64x | 1 | 0s | 12d ago | 17m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.80% | 57.15% | 57.15% | 1504 ms | ↓ 0.84x | 4 | 0s | 8d ago | 16m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.54% | 60.54% | 999 ms | ↓ 0.77x | 0 | — | — | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1924 ms | ↓ 0.85x | 0 | — | — | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.15% | 99.15% | 1437 ms | ↓ 0.93x | 0 | — | — | 16m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.00% | 89.00% | 1794 ms | ↓ 0.81x | 1 | 0s | 14d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 84.70% | 84.70% | 460 ms | ↓ 0.85x | 0 | — | — | 10m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.77% | 99.77% | 2099 ms | ↓ 0.86x | 3 | 0s | 23d ago | 13m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.55% | 99.55% | 745 ms | ↓ 0.68x | 1 | 0s | 16d ago | 16m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.94% | 97.94% | 2076 ms | ↓ 0.95x | 0 | — | — | 16m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 3404 ms | → 1.00x | 0 | — | — | 7m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 14.14% | 14.14% | 1320 ms | ↓ 0.89x | 1 | 0s | 22d ago | 22m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1266 ms | ↓ 0.87x | 0 | — | — | 7m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 100.00% | 97.73% | 82.51% | 82.51% | 2493 ms | ↓ 0.80x | 42 | 2m | 8d ago | 27m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.04% | 98.04% | 2665 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.80% | 99.93% | 99.93% | 758 ms | ↓ 0.89x | 1 | 1h 16m | 8d ago | 23m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 71.16% | 71.16% | 1900 ms | ↓ 0.78x | 0 | — | — | 14m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 664 ms | → 0.96x | 1 | 0s | 21d ago | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 954 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.71% | 99.71% | 2634 ms | ↓ 0.89x | 1 | 0s | 13d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.61% | 99.61% | 1643 ms | ↓ 0.92x | 2 | 0s | 8d ago | 25m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.80% | 88.22% | 88.22% | 1868 ms | → 0.96x | 2 | 19m | 19d ago | 16m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 74.61% | 74.61% | 1920 ms | ↓ 0.82x | 0 | — | — | 13m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.70% | 99.74% | 99.74% | 386 ms | ↓ 0.83x | 6 | 0s | 19d ago | 26m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 966 ms | ↓ 0.89x | 0 | — | — | 8m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 79.86% | 79.86% | 1510 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1355 ms | ↓ 0.91x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1040 ms | ↓ 0.87x | 0 | — | — | 11m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.98% | 98.98% | 424 ms | ↓ 0.63x | 0 | — | — | 17m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.57% | 98.57% | 1398 ms | ↓ 0.54x | 0 | — | — | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.62% | 96.62% | 292 ms | ↓ 0.44x | 0 | — | — | 11m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1373 ms | ↓ 0.83x | 0 | — | — | 8m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.36% | 96.03% | 96.03% | 1278 ms | ↓ 0.73x | 12 | 23m | 22d ago | 9m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 98.49% | 98.49% | 98.49% | 1229 ms | ↓ 0.71x | 12 | 18m | 8d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.20% | 96.56% | 96.56% | 250 ms | ↓ 0.53x | 14 | 3m | 24d ago | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.64% | 98.64% | 102 ms | ↓ 0.51x | 0 | — | — | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.91% | 98.91% | 674 ms | ↓ 0.79x | 0 | — | — | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 14.03% | 14.03% | 2310 ms | ↓ 0.88x | 1 | 0s | 23d ago | 21m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 916 ms | → 1.00x | 0 | — | — | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 17.72% | 17.72% | 844 ms | ↓ 0.79x | 0 | — | — | 17m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 577 ms | ↓ 0.80x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2199 ms | ↑ 2.08x | 1 | 0s | 10d ago | 26m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.60% | 99.18% | 99.18% | 174 ms | ↓ 0.80x | 4 | 35m | 13d ago | 12m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 507 ms | ↓ 0.60x | 0 | — | — | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.29% | 97.29% | 1192 ms | ↓ 0.82x | 0 | — | — | 10m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.83% | 97.83% | 2016 ms | → 0.99x | 0 | — | — | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 565 ms | ↑ 1.21x | 2 | 25m | 11d ago | 26m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.80% | 99.77% | 99.77% | 1269 ms | ↓ 0.95x | 2 | 20m | 19d ago | 17m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 988 ms | ↓ 0.86x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.65% | 98.65% | 3903 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 81.39% | 83.22% | 83.22% | 686 ms | ↓ 0.61x | 1 | 5d 5h | 30d ago | 13m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2691 ms | ↓ 0.93x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1228 ms | → 0.98x | 0 | — | — | 8m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.80% | 99.21% | 99.21% | 1208 ms | ↓ 0.91x | 4 | 0s | 11d ago | 25m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2088 ms | ↓ 0.92x | 1 | 0s | 19d ago | 22m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.31% | 99.31% | 1474 ms | ↓ 0.87x | 2 | 0s | 18d ago | 17m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 38.06% | 38.06% | 710 ms | → 0.97x | 0 | — | — | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.29% | 98.29% | 3774 ms | → 0.96x | 0 | — | — | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.50% | 90.05% | 90.05% | 682 ms | ↓ 0.66x | 5 | 23m | 9d ago | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1026 ms | ↓ 0.95x | 1 | 0s | 13d ago | 25m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 98.56% | 99.42% | 99.42% | 2399 ms | ↓ 0.76x | 18 | 12m | 8d ago | 21m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.00% | 13.21% | 13.21% | 747 ms | ↓ 0.90x | 40 | 33m | 7d ago | 25m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.06% | 99.24% | 99.24% | 721 ms | ↓ 0.79x | 13 | 9m | 11d ago | 26m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 986 ms | ↓ 0.76x | 1 | 0s | 20d ago | 22m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2371 ms | → 0.98x | 0 | — | — | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.96% | 99.85% | 99.85% | 1635 ms | ↓ 0.77x | 21 | 0s | 23d ago | 26m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.53% | 99.53% | 1527 ms | → 1.03x | 0 | — | — | 11m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.21% | 89.21% | 981 ms | → 0.96x | 0 | — | — | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 669 ms | ↓ 0.82x | 0 | — | — | 26m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 58.04% | 58.04% | 828 ms | ↓ 0.76x | 3 | 0s | 11d ago | 16m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 16.31% | 16.31% | 2254 ms | → 1.00x | 1 | 0s | 10d ago | 17m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 428 ms | ↓ 0.91x | 0 | — | — | 8m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 57.33% | 78.18% | 78.18% | 266 ms | ↓ 0.42x | 3 | 4d 1h | 16d ago | 11m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2082 ms | → 0.97x | 0 | — | — | 25m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.19% | 98.54% | 98.54% | 1100 ms | ↓ 0.82x | 3 | 3h 43m | 9d ago | 9m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 16.04% | 16.04% | 1570 ms | ↓ 0.86x | 0 | — | — | 17m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.65% | 78.93% | 78.93% | 1605 ms | ↓ 0.83x | 2 | 50m | 24d ago | 27m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 76.21% | 76.21% | 76.21% | 1061 ms | → 0.96x | 1 | 5d 5h | 20d ago | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 680 ms | ↓ 0.79x | 3 | 17m | 11d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1064 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.80% | 35.05% | 35.05% | 193 ms | ↓ 0.85x | 4 | 0s | 10d ago | 14m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 910 ms | ↓ 0.75x | 0 | — | — | 26m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 661 ms | ↓ 0.68x | 1 | 0s | 21d ago | 11m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.98% | 98.98% | 2022 ms | ↓ 0.94x | 0 | — | — | 25m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.06% | 98.06% | 1134 ms | ↓ 0.85x | 0 | — | — | 11m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.69% | 97.69% | 1904 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.75% | 95.62% | 95.62% | 406 ms | ↓ 0.46x | 2 | 31m | 12d ago | 11m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.90% | 14.12% | 14.12% | 1976 ms | → 1.02x | 2 | 0s | 25d ago | 25m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.97% | 66.97% | 811 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1345 ms | ↓ 0.91x | 0 | — | — | 25m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1680 ms | ↓ 0.80x | 0 | — | — | 26m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.10% | 91.58% | 91.58% | 1460 ms | ↑ 1.12x | 4 | 1h 8m | 12d ago | 15m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 81.23% | 31.05% | 31.05% | 1695 ms | ↓ 0.91x | 10 | 12h 33m | 15d ago | 16m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.51% | 84.50% | 84.50% | 1398 ms | → 0.99x | 10 | 0s | 23d ago | 26m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.34% | 43.85% | 43.85% | 680 ms | ↓ 0.76x | 4 | 7h 27m | 19d ago | 13m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.95% | 84.57% | 84.57% | 233 ms | ↓ 0.45x | 1 | 0s | 30d ago | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.42% | 89.42% | 312 ms | ↓ 0.26x | 1 | 0s | 12d ago | 13m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.23% | 99.23% | 1839 ms | ↓ 0.91x | 0 | — | — | 16m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 98.82% | 98.82% | 98.82% | 2159 ms | ↓ 0.79x | 20 | 4m | 15d ago | 27m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.70% | 64.70% | 871 ms | ↓ 0.74x | 0 | — | — | 16m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.41% | 96.41% | 941 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 15.93% | 15.93% | 928 ms | → 0.97x | 1 | 0s | 21d ago | 22m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 2073 ms | ↓ 0.79x | 1 | 0s | 25d ago | 26m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.21% | 99.21% | 99.21% | 1139 ms | ↓ 0.89x | 1 | 3h 38m | 15d ago | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.01% | 55.01% | 505 ms | ↓ 0.58x | 0 | — | — | 16m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.90% | 99.18% | 99.18% | 3046 ms | ↓ 0.94x | 2 | 0s | 11d ago | 21m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2593 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 51.63% | 51.63% | 3553 ms | ↓ 0.86x | 0 | — | — | 14m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.16% | 99.16% | 1793 ms | ↓ 0.78x | 2 | 0s | 25d ago | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.19% | 98.54% | 98.54% | 1373 ms | → 0.98x | 1 | 11h 52m | 27d ago | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.70% | 77.56% | 77.56% | 1157 ms | ↓ 0.91x | 1 | 1h 39m | 27d ago | 16m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 188 ms | ↓ 0.95x | 0 | — | — | 26m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1727 ms | ↓ 0.89x | 2 | 0s | 24d ago | 25m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1472 ms | ↓ 0.85x | 0 | — | — | 22m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.50% | 99.50% | 2458 ms | ↓ 0.90x | 1 | 0s | 7d ago | 26m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.04% | 85.04% | 1774 ms | → 0.98x | 0 | — | — | 16m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.86% | 95.86% | 967 ms | ↓ 0.93x | 0 | — | — | 17m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 845 ms | → 0.97x | 0 | — | — | 25m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.34% | 98.34% | 422 ms | ↓ 0.47x | 1 | 0s | 18d ago | 13m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 16.72% | 16.72% | 638 ms | ↓ 0.50x | 0 | — | — | 17m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 414 ms | ↓ 0.62x | 0 | — | — | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 702 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.80% | 14.74% | 14.74% | 1123 ms | ↓ 0.84x | 4 | 0s | 8d ago | 17m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.26% | 58.26% | 1676 ms | ↓ 0.91x | 0 | — | — | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.80% | 99.80% | 3176 ms | → 0.99x | 0 | — | — | 25m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.98% | 90.09% | 90.09% | 27 ms | ↓ 0.17x | 4 | 1d 5h | 17d ago | 11m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.81% | 98.92% | 98.92% | 734 ms | ↓ 0.77x | 1 | 7h 40m | 9d ago | 25m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 14.11% | 14.11% | 806 ms | → 0.96x | 0 | — | — | 25m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 862 ms | → 0.96x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.31% | 99.31% | 1157 ms | ↓ 0.94x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 1252 ms | ↓ 0.65x | 1 | 0s | 24d ago | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1040 ms | ↓ 0.83x | 0 | — | — | 9m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.85% | 16.90% | 16.90% | 1144 ms | ↓ 0.77x | 3 | 0s | 8d ago | 17m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.04% | 93.04% | 3928 ms | → 0.98x | 0 | — | — | 25m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.85% | 99.54% | 99.54% | 1629 ms | ↓ 0.93x | 2 | 10m | 13d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1765 ms | ↓ 0.79x | 0 | — | — | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.85% | 98.74% | 98.74% | 1628 ms | ↓ 0.82x | 3 | 0s | 24d ago | 12m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.08% | 99.08% | 99.08% | 805 ms | ↓ 0.65x | 10 | 8m | 23d ago | 9m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.09% | 99.09% | 1055 ms | ↓ 0.90x | 0 | — | — | 14m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 826 ms | ↓ 0.79x | 0 | — | — | 25m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 388 ms | ↓ 0.73x | 0 | — | — | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.81% | 59.61% | 59.61% | 2572 ms | ↓ 0.90x | 22 | 2m | 21d ago | 26m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.60% | 91.68% | 91.68% | 970 ms | ↓ 0.83x | 1 | 2h 20m | 27d ago | 25m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.31% | 98.31% | 2414 ms | ↑ 1.18x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.65% | 96.52% | 96.52% | 2267 ms | ↓ 0.90x | 1 | 1h 60m | 27d ago | 25m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 2063 ms | → 1.00x | 0 | — | — | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.79% | 99.79% | 455 ms | ↓ 0.45x | 0 | — | — | 11m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.87% | 86.87% | 1299 ms | → 0.98x | 0 | — | — | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.77% | 99.77% | 790 ms | ↓ 0.60x | 1 | 0s | 24d ago | 11m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1363 ms | → 0.97x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1074 ms | ↑ 1.10x | 0 | — | — | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 930 ms | ↑ 1.08x | 0 | — | — | 26m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 713 ms | → 0.99x | 0 | — | — | 24m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.61% | 83.61% | 1539 ms | ↓ 0.80x | 2 | 0s | 23d ago | 22m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.80% | 19.76% | 19.76% | 1605 ms | ↓ 0.84x | 4 | 0s | 12d ago | 27m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.76% | 98.76% | 1524 ms | ↓ 0.80x | 0 | — | — | 15m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.74% | 91.74% | 2703 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.93% | 99.93% | 621 ms | ↓ 0.89x | 1 | 0s | 22d ago | 8m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.15% | 96.43% | 96.43% | 619 ms | ↓ 0.60x | 3 | 1h 21m | 27d ago | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.70% | 98.70% | 516 ms | ↓ 0.93x | 0 | — | — | 16m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.40% | 98.64% | 98.64% | 1983 ms | ↓ 0.76x | 1 | 3h 60m | 17d ago | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.80% | 97.46% | 97.46% | 1901 ms | ↓ 0.93x | 3 | 6m | 7d ago | 12m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.40% | 98.46% | 98.46% | 502 ms | ↓ 0.48x | 5 | 28m | 9d ago | 14m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.90% | 25.16% | 25.16% | 798 ms | → 0.98x | 2 | 0s | 9d ago | 24m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.09% | 98.09% | 1429 ms | → 1.00x | 0 | — | — | 15m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 965 ms | ↓ 0.77x | 0 | — | — | 24m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.18% | 87.18% | 2301 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.95% | 96.37% | 96.37% | 1594 ms | ↓ 0.86x | 1 | 0s | 30d ago | 17m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1339 ms | ↓ 0.82x | 0 | — | — | 24m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 14.11% | 14.11% | 1754 ms | ↓ 0.84x | 1 | 0s | 16d ago | 25m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 666 ms | ↓ 0.75x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.65% | 96.24% | 96.24% | 1194 ms | ↓ 0.89x | 2 | 51m | 19d ago | 11m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 655 ms | ↓ 0.78x | 1 | 0s | 25d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 16.10% | 16.10% | 1745 ms | ↓ 0.87x | 0 | — | — | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 13.92% | 13.92% | 1415 ms | ↓ 0.80x | 3 | 0s | 24d ago | 17m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.95% | 99.89% | 99.89% | 1349 ms | → 0.98x | 1 | 0s | 30d ago | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.32% | 99.63% | 99.63% | 2072 ms | ↓ 0.86x | 6 | 2h 50m | 9d ago | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1918 ms | ↓ 0.89x | 0 | — | — | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 100.00% | 99.10% | 90.33% | 90.33% | 1433 ms | ↓ 0.87x | 18 | 0s | 10d ago | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.21% | 98.21% | 982 ms | ↓ 0.88x | 0 | — | — | 11m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1562 ms | ↓ 0.85x | 2 | 0s | 14d ago | 22m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 2052 ms | → 0.97x | 0 | — | — | 17m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.08% | 99.08% | 1134 ms | ↓ 0.89x | 0 | — | — | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 358 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.76% | 99.95% | 99.28% | 99.28% | 2953 ms | ↓ 0.82x | 1 | 0s | 6d ago | 27m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.61% | 99.84% | 99.84% | 2678 ms | ↓ 0.81x | 8 | 0s | 5d ago | 27m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.76% | 99.95% | 99.55% | 99.55% | 1300 ms | ↑ 1.05x | 1 | 0s | 7d ago | 26m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 98.91% | 97.75% | 97.75% | 3322 ms | → 0.99x | 22 | 0s | 2d ago | 25m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.76% | 99.85% | 99.72% | 99.72% | 1744 ms | ↓ 0.83x | 3 | 0s | 7d ago | 25m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.76% | 99.60% | 86.58% | 86.58% | 1157 ms | ↓ 0.81x | 8 | 0s | 4d ago | 25m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.90% | 88.53% | 88.53% | 1008 ms | ↓ 0.86x | 2 | 0s | 6d ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.75% | 99.64% | 99.64% | 882 ms | → 1.01x | 4 | 5m | 24h ago | 25m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.95% | 33.35% | 33.35% | 1466 ms | ↓ 0.68x | 1 | 0s | 4d ago | 26m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.76% | 99.90% | 52.09% | 52.09% | 1190 ms | ↓ 0.79x | 2 | 0s | 6d ago | 23m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2430 ms | ↓ 0.89x | 1 | 0s | 18h ago | 23m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1875 ms | ↓ 0.88x | 1 | 0s | 1d ago | 24m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.76% | 96.57% | 44.38% | 44.38% | 3018 ms | ↑ 1.11x | 9 | 1h 42m | 7d ago | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.83% | 99.83% | 3298 ms | ↓ 0.79x | 3 | 0s | 2d ago | 21m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.34% | 92.34% | 902 ms | ↓ 0.78x | 1 | 0s | 2d ago | 16m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 65.12% | 43.26% | 43.26% | 2842 ms | → 0.98x | 2 | 4d 21h | 3d ago | 17m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 877 ms | ↓ 0.89x | 1 | 0s | 4d ago | 17m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 99.35% | 96.57% | 96.57% | 4047 ms | → 0.97x | 6 | 23m | 5h ago | 16m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.76% | 99.65% | 96.48% | 96.48% | 2071 ms | → 0.96x | 2 | 50m | 1d ago | 15m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.76% | 99.95% | 98.84% | 98.84% | 2403 ms | → 1.02x | 1 | 0s | 3d ago | 15m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.76% | 99.90% | 34.03% | 34.03% | 2049 ms | → 0.96x | 2 | 0s | 4d ago | 16m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.76% | 95.19% | 64.89% | 64.89% | 689 ms | ↓ 0.88x | 9 | 3h 9m | 5d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.76% | 99.85% | 77.85% | 77.85% | 1759 ms | ↓ 0.90x | 3 | 0s | 1d ago | 16m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.76% | 99.95% | 99.78% | 99.78% | 874 ms | ↓ 0.85x | 1 | 0s | 3d ago | 15m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.76% | 99.65% | 84.78% | 84.78% | 824 ms | ↓ 0.46x | 5 | 8m | 7d ago | 12m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.76% | 99.70% | 97.29% | 97.29% | 1534 ms | ↓ 0.65x | 3 | 20m | 1d ago | 14m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.76% | 99.75% | 99.83% | 99.83% | 174 ms | ↓ 0.46x | 5 | 0s | 6d ago | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.76% | 99.70% | 97.50% | 97.50% | 2725 ms | ↓ 0.82x | 6 | 0s | 1d ago | 13m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.76% | 99.80% | 98.11% | 98.11% | 1929 ms | ↓ 0.92x | 4 | 0s | 6d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.50% | 96.99% | 96.99% | 1696 ms | ↓ 0.86x | 10 | 0s | 3d ago | 10m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.95% | 99.82% | 99.82% | 1458 ms | ↓ 0.89x | 1 | 0s | 5d ago | 14m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.76% | 99.70% | 70.01% | 70.01% | 1134 ms | ↓ 0.92x | 6 | 0s | 5d ago | 14m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.76% | 99.95% | 99.88% | 99.88% | 2325 ms | → 0.96x | 1 | 0s | 6d ago | 12m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.76% | 99.93% | 99.93% | 99.93% | 1573 ms | ↓ 0.88x | 1 | 0s | 5d ago | 8m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.76% | 98.04% | 98.42% | 98.42% | 2272 ms | ↓ 0.80x | 2 | 6h 41m | 4d ago | 8m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.76% | 99.48% | 99.48% | 99.48% | 2485 ms | ↓ 0.90x | 6 | 8m | 5d ago | 8m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.76% | 99.75% | 99.75% | 99.75% | 1513 ms | ↑ 1.06x | 3 | 6m | 5d ago | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.76% | 99.93% | 99.93% | 99.93% | 793 ms | ↓ 0.87x | 1 | 0s | 5d ago | 8m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.76% | 99.67% | 99.67% | 99.67% | 2212 ms | ↓ 0.89x | 4 | 5m | 5d ago | 8m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.76% | 98.43% | 98.43% | 98.43% | 1121 ms | ↓ 0.63x | 13 | 17m | 23h ago | 9m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.76% | 99.93% | 99.93% | 99.93% | 2322 ms | ↓ 0.92x | 1 | 0s | 5d ago | 8m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.76% | 99.35% | 99.35% | 99.35% | 934 ms | ↓ 0.94x | 10 | 0s | 3d ago | 8m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.76% | 99.93% | 99.93% | 99.93% | 762 ms | → 0.96x | 1 | 0s | 5d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.76% | 99.80% | 99.80% | 99.80% | 1509 ms | ↓ 0.88x | 2 | 10m | 5d ago | 8m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.76% | 99.28% | 99.29% | 99.29% | 1278 ms | ↓ 0.82x | 9 | 5m | 4d ago | 9m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.76% | 99.93% | 99.93% | 99.93% | 401 ms | ↓ 0.85x | 1 | 0s | 5d ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.76% | 99.94% | 99.94% | 99.94% | 2662 ms | ↓ 0.95x | 1 | 0s | 5d ago | 8m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.76% | 99.87% | 99.87% | 99.87% | 883 ms | → 0.97x | 2 | 0s | 5d ago | 8m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.75% | 99.94% | 99.94% | 99.94% | 408 ms | ↓ 0.71x | 1 | 0s | 5d ago | 8m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.95% | 99.95% | 99.95% | 953 ms | ↓ 0.77x | 1 | 0s | 5d ago | 8m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.75% | 99.80% | 99.80% | 99.80% | 549 ms | ↓ 0.53x | 3 | 0s | 5d ago | 8m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.75% | 99.94% | 99.94% | 99.94% | 951 ms | ↓ 0.86x | 1 | 0s | 5d ago | 8m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 853 ms | ↓ 0.77x | 1 | 0s | 5d ago | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.75% | 99.95% | 99.95% | 99.95% | 3270 ms | ↓ 0.79x | 1 | 0s | 5d ago | 8m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 1056 ms | ↓ 0.74x | 1 | 0s | 5d ago | 8m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.95% | 99.95% | 99.95% | 528 ms | ↓ 0.59x | 1 | 0s | 5d ago | 8m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.75% | 99.95% | 99.95% | 99.95% | 810 ms | ↓ 0.69x | 1 | 0s | 5d ago | 8m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.81% | 99.81% | 99.81% | 860 ms | ↓ 0.76x | 3 | 0s | 5d ago | 8m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.93% | 99.93% | 99.93% | 361 ms | ↓ 0.60x | 1 | 0s | 5d ago | 8m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.94% | 99.94% | 99.94% | 292 ms | ↓ 0.66x | 1 | 0s | 5d ago | 8m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.62% | 99.62% | 99.62% | 99.62% | 1457 ms | → 1.00x | 1 | 0s | 3d ago | 7m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.52% | 94.03% | 84.41% | 84.41% | 4547 ms | → 0.99x | 43 | 37m | 4d ago | 27m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.70% | 98.98% | 98.98% | 2706 ms | → 0.97x | 2 | 45m | 2d ago | 25m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.52% | 99.80% | 99.72% | 99.72% | 2479 ms | ↓ 0.88x | 4 | 0s | 4d ago | 25m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.52% | 98.07% | 98.68% | 98.68% | 3150 ms | ↓ 0.95x | 33 | 5m | 2d ago | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.52% | 99.26% | 26.67% | 26.67% | 1571 ms | ↑ 1.16x | 6 | 30m | 2d ago | 24m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.52% | 99.52% | 99.52% | 99.52% | 404 ms | → 1.00x | 1 | 0s | 2d ago | 7m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.52% | 99.52% | 99.52% | 99.52% | 4388 ms | → 1.00x | 1 | 0s | 2d ago | 7m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.51% | 99.90% | 99.87% | 99.87% | 1753 ms | ↓ 0.91x | 1 | 30m | 4d ago | 15m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 99.70% | 98.07% | 98.07% | 1277 ms | ↓ 0.65x | 6 | 0s | 1d ago | 13m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.51% | 93.53% | 91.94% | 91.94% | 2131 ms | ↓ 0.93x | 11 | 3h 51m | 1d ago | 13m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.51% | 99.90% | 97.56% | 97.56% | 1297 ms | ↓ 0.89x | 2 | 0s | 24h ago | 11m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.51% | 98.95% | 39.16% | 39.16% | 1038 ms | ↓ 0.67x | 17 | 5m | 3d ago | 13m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.51% | 99.81% | 99.81% | 99.81% | 1715 ms | ↓ 0.89x | 3 | 0s | 13h ago | 8m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.51% | 99.21% | 99.21% | 99.21% | 1086 ms | ↓ 0.94x | 3 | 1h 4m | 2h ago | 8m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.28% | 98.57% | 92.03% | 92.03% | 938 ms | ↓ 0.94x | 7 | 1h 3m | 19h ago | 25m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.27% | 97.55% | 85.45% | 85.45% | 4615 ms | → 0.99x | 44 | 2m | 5d ago | 17m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.27% | 99.85% | 78.74% | 78.74% | 1679 ms | ↓ 0.88x | 1 | 51m | 5d ago | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.27% | 99.85% | 97.98% | 97.98% | 2266 ms | ↓ 0.94x | 1 | 60m | 6d ago | 12m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.27% | 99.85% | 89.60% | 89.60% | 328 ms | → 0.99x | 3 | 0s | 7d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.27% | 98.49% | 95.81% | 95.81% | 1133 ms | ↓ 0.91x | 2 | 4h 44m | 3h ago | 11m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.27% | 99.25% | 99.25% | 99.25% | 1656 ms | ↓ 0.94x | 3 | 1h 3m | 2d ago | 8m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.04% | 99.15% | 96.41% | 96.41% | 1178 ms | ↓ 0.87x | 8 | 24m | 2h ago | 22m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.04% | 77.33% | 12.31% | 12.31% | 2553 ms | → 0.98x | 9 | 16h 42m | 2d ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.03% | 98.09% | 89.88% | 89.88% | 2772 ms | ↓ 0.93x | 31 | 5m | 1d ago | 13m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.02% | 99.69% | 98.64% | 98.64% | 996 ms | ↓ 0.84x | 2 | 44m | 4d ago | 9m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (50)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.80% | 94.12% | 66.63% | 66.63% | 4122 ms | ↓ 0.86x | 46 | 32m | 1d ago | 22m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.80% | 95.07% | 13.62% | 13.62% | 3294 ms | ↓ 0.83x | 67 | 10m | 6h ago | 21m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.78% | 97.14% | 84.05% | 84.05% | 4599 ms | → 0.97x | 56 | 19s | 15h ago | 14m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.78% | 95.61% | 95.61% | 95.61% | 784 ms | ↑ 1.13x | 9 | 2h 22m | 2d ago | 9m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.77% | 98.56% | 98.56% | 98.56% | 1373 ms | ↑ 1.05x | 20 | 2m | 2d ago | 8m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.57% | 99.65% | 99.83% | 99.83% | 115 ms | ↓ 0.52x | 5 | 12m | 2d ago | 25m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.56% | 86.21% | 12.45% | 12.45% | 1676 ms | ↓ 0.75x | 218 | 6m | 6d ago | 22m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.56% | 99.45% | 99.69% | 99.69% | 2896 ms | ↓ 0.90x | 9 | 4m | 22h ago | 21m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.54% | 99.70% | 99.70% | 99.70% | 2153 ms | ↓ 0.78x | 1 | 2h 18m | 4d ago | 13m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.54% | 99.56% | 99.56% | 99.56% | 659 ms | ↓ 0.71x | 7 | 0s | 2d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.32% | 96.31% | 72.95% | 72.95% | 4354 ms | → 0.97x | 64 | 3m | 2d ago | 22m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.32% | 94.37% | 98.66% | 98.66% | 3426 ms | ↓ 0.86x | 68 | 13m | 6h ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.30% | 97.49% | 63.20% | 63.20% | 4657 ms | → 0.99x | 45 | 3m | 2d ago | 16m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.30% | 99.50% | 96.46% | 96.46% | 1915 ms | ↓ 0.91x | 6 | 16m | 2d ago | 11m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.05% | 99.50% | 96.51% | 96.51% | 2729 ms | → 0.95x | 5 | 20m | 9h ago | 11m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.86% | 96.99% | 98.07% | 98.07% | 4556 ms | → 0.97x | 54 | 3m | 3d ago | 27m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.85% | 96.38% | 84.88% | 84.88% | 4514 ms | → 1.01x | 66 | 3m | 3h ago | 24m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.62% | 99.26% | 99.41% | 99.41% | 2482 ms | ↓ 0.83x | 8 | 24m | 5d ago | 27m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.57% | 99.50% | 98.23% | 98.23% | 1232 ms | → 0.95x | 1 | 4h 17m | 5d ago | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.37% | 97.42% | 99.14% | 99.14% | 3270 ms | → 0.98x | 15 | 52m | 6h ago | 24m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.32% | 70.28% | 83.32% | 83.32% | 1298 ms | ↓ 0.83x | 3 | 2d 18h | 24h ago | 11m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.32% | 95.63% | 83.33% | 83.33% | 4724 ms | → 1.03x | 51 | 16m | 16h ago | 12m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 97.14% | 50.62% | 5.45% | 5.45% | 1391 ms | → 0.95x | 4 | 3d 12h | 6h ago | 25m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.13% | 97.42% | 98.95% | 98.95% | 3172 ms | ↓ 0.92x | 16 | 48m | 6h ago | 24m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.12% | 99.00% | 98.94% | 98.94% | 1480 ms | ↓ 0.75x | 15 | 8m | 2d ago | 22m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.07% | 98.03% | 98.03% | 98.03% | 1607 ms | ↓ 0.86x | 16 | 21m | 16h ago | 8m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 96.89% | 97.02% | 42.88% | 42.88% | 961 ms | ↓ 0.93x | 16 | 58m | 6h ago | 24m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.87% | 94.24% | 80.50% | 80.50% | 4830 ms | → 1.02x | 97 | 4m | 1d ago | 14m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.86% | 94.13% | 80.97% | 80.97% | 4678 ms | → 0.98x | 103 | 3m | 2d ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.85% | 98.74% | 98.98% | 98.98% | 169 ms | ↓ 0.21x | 8 | 45m | 8h ago | 9m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.90% | 94.49% | 70.19% | 70.19% | 1512 ms | ↓ 0.88x | 19 | 1h 37m | 3d ago | 16m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 94.76% | 96.79% | 79.18% | 79.18% | 112 ms | ↓ 0.83x | 6 | 4h 15m | 8d ago | 27m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 93.90% | 93.80% | 93.80% | 93.80% | 1043 ms | → 1.03x | 3 | 11h 15m | 4d ago | 9m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 93.86% | 95.67% | 95.67% | 95.67% | 982 ms | ↓ 0.73x | 40 | 17m | 5d ago | 8m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 93.30% | 96.47% | 13.61% | 13.61% | 1995 ms | → 0.96x | 65 | 2m | 5h ago | 24m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.93% | 95.28% | 96.14% | 96.14% | 3228 ms | ↓ 0.92x | 15 | 1h 51m | 7h ago | 9m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.21% | 97.64% | 94.82% | 94.82% | 1675 ms | ↑ 1.05x | 3 | 5h 26m | 1d ago | 11m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 92.01% | 97.95% | 13.96% | 13.96% | 2427 ms | → 0.97x | 9 | 1h 21m | 2d ago | 17m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.01% | 88.04% | 14.90% | 14.90% | 4536 ms | ↓ 0.95x | 186 | 7m | 5h ago | 17m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.42% | 96.87% | 96.87% | 96.87% | 414 ms | ↓ 0.39x | 3 | 5h 59m | 4d ago | 8m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.83% | 88.65% | 48.43% | 48.43% | 4051 ms | → 1.01x | 187 | 5m | 5h ago | 11m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 78.33% | 79.96% | 79.96% | 79.96% | 760 ms | → 1.01x | 51 | 21m | 2d ago | 7m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 78.28% | 26.62% | 17.60% | 17.60% | 3010 ms | → 0.99x | 62 | 7h 50m | 12h ago | 25m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 68.93% | 67.12% | 17.92% | 17.92% | 4724 ms | → 1.03x | 373 | 17m | 1h ago | 16m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.39% | 63.63% | 61.95% | 61.95% | 4842 ms | → 1.00x | 400 | 18m | 2h ago | 23m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 55.98% | 82.10% | 50.87% | 50.87% | 2522 ms | ↓ 0.84x | 5 | 1d 3h | 10d ago | 23m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 55.85% | 71.76% | 71.76% | 71.76% | 2485 ms | ↓ 0.83x | 10 | 16h 47m | 2d ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 55.72% | 90.57% | 96.51% | 96.51% | 3088 ms | ↓ 0.88x | 8 | 9h 6m | 4d ago | 13m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 43.55% | 75.55% | 86.26% | 86.26% | 621 ms | ↓ 0.53x | 2 | 4d | 10d ago | 11m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.48% | 0.10% | 5.39% | 5.39% | 2130 ms | → 1.00x | 1 | 29d 23h | 30d ago | 25m ago |

</details>

<details open>
<summary><strong>🔴 Down (219)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 89.56% | 97.84% | 95.45% | 95.45% | 2360 ms | → 0.95x | 4 | 3h 33m | 5h ago | 14m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 89.54% | 95.03% | 90.95% | 90.95% | 2040 ms | ↓ 0.82x | 3 | 11h 26m | 16h ago | 12m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 81.75% | 93.88% | 95.70% | 95.70% | 1432 ms | ↓ 0.89x | 5 | 8h 44m | 1d ago | 11m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 70.33% | 93.78% | 97.40% | 97.40% | 2034 ms | ↓ 0.86x | 6 | 7h 57m | 2d ago | 22m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 40.15% | 12.99% | 28.39% | 28.39% | 3616 ms | → 1.03x | 31 | 19h 28m | 3d ago | 14m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 38.93% | 87.20% | 63.84% | 63.84% | 1964 ms | → 0.95x | 5 | 20h 26m | 4d ago | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 35.68% | 86.68% | 47.57% | 47.57% | 1847 ms | ↑ 1.37x | 2 | 2d 6h | 4d ago | 16m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 33.58% | 46.34% | 29.75% | 29.75% | 1287 ms | → 0.98x | 5 | 3d 3h | 3d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 32.20% | 70.30% | 78.21% | 78.21% | 2115 ms | → 0.99x | 12 | 18h 8m | 5d ago | 9m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 31.74% | 78.94% | 97.41% | 97.41% | 546 ms | ↓ 0.75x | 17 | 9h 12m | 5d ago | 25m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 31.14% | 81.98% | 90.75% | 90.75% | 701 ms | ↓ 0.26x | 2 | 2d 23h | 5d ago | 12m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 30.17% | 82.78% | 49.45% | 49.45% | 1495 ms | ↓ 0.86x | 19 | 6h 51m | 5d ago | 12m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 25.97% | 84.51% | 88.19% | 88.19% | 1747 ms | ↓ 0.76x | 3 | 1d 18h | 5d ago | 15m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 17.38% | 82.87% | 61.89% | 61.89% | 982 ms | ↓ 0.94x | 1 | 5d 19h | 6d ago | 27m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 15.51% | 3.22% | 71.01% | 71.01% | 1049 ms | → 1.00x | 4 | 7d 5h | 5d ago | 25m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 9.36% | 9.91% | 9.91% | 9.91% | 3151 ms | ↓ 0.88x | 142 | 3h 23m | 7m ago | 7m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.14% | 1.73% | 62.50% | 62.50% | 3846 ms | ↑ 1.06x | 29 | 1d | 11h ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 85.17% | 85.17% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 70.53% | 70.53% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 75.85% | 75.85% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 75.57% | 75.57% | 75.57% | — | — | 16 | 11h 44m | 8d ago | 8m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 66.05% | 89.92% | 89.92% | — | — | 7 | 1d 14h | 11d ago | 14m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 69.16% | 69.16% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.84% | 5.84% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.88% | 12.88% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 30.77% | 68.64% | 68.64% | — | — | 3 | 7d 3h | 19d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.49% | 3.49% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 49.80% | 79.97% | 79.97% | — | — | 2 | 7d 23h | 16d ago | 12m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 85.43% | 85.43% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.50% | 37.50% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 29.12% | 64.53% | 64.53% | — | — | 3 | 7d 6h | 22d ago | 11m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 60.27% | 95.40% | 95.40% | — | — | 4 | 3d 5h | 13d ago | 26m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.11% | 25.11% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 76.66% | 76.66% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 56.47% | 56.47% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.29% | 31.29% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 85.83% | 85.83% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 64.65% | 64.65% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 79.29% | 79.29% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.27% | 16.27% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 52.75% | 52.75% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 36.70% | 36.70% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 69.63% | 86.20% | 86.20% | — | — | 2 | 4d 23h | 10d ago | 17m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.65% | 3.65% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 86.04% | 86.04% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 58.20% | 58.20% | 58.20% | — | — | 6 | 1d 18h | 11d ago | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.42% | 53.42% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 29.47% | 29.47% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.11% | 2.11% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 71.60% | 94.27% | 94.27% | — | — | 13 | 16h 54m | 9d ago | 24m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 45.44% | 84.60% | 84.60% | — | — | 3 | 5d 17h | 17d ago | 14m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 38.89% | 38.89% | 38.89% | — | — | 1 | 15d 16h | 16d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 50.70% | 69.21% | 69.21% | — | — | 2 | 7d 20h | 16d ago | 15m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 35.90% | 35.90% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.21% | 56.21% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.73% | 25.73% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.74% | 30.74% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 58.90% | 58.90% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 67.22% | 26.37% | 26.37% | — | — | 1 | 10d 21h | 11d ago | 14m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.91% | 5.91% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 67.77% | 67.77% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 85.78% | 85.78% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.76% | 7.76% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 81.91% | 81.91% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 28.53% | 84.51% | 84.51% | — | — | 3 | 7d 6h | 16d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 68.51% | 36.42% | 36.42% | — | — | 21 | 11h 37m | 10d ago | 14m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 12h | 23d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 30.51% | 30.51% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 54.49% | 54.49% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 45.61% | 58.87% | 58.87% | — | — | 3 | 5d 17h | 17d ago | 15m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 14.93% | 13.62% | 13.62% | — | — | 1 | 20d 7h | 20d ago | 9m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 49.85% | 76.59% | 76.59% | — | — | 2 | 7d 23h | 16d ago | 12m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 78.94% | 78.94% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.13% | 48.13% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.74% | 43.74% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 48.79% | 48.79% | 48.79% | — | — | 5 | 2d 13h | 13d ago | 8m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 85.79% | 85.79% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.59% | 60.59% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.25% | 40.25% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 66.00% | 89.94% | 89.94% | — | — | 7 | 1d 14h | 11d ago | 13m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.88% | 32.88% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.66% | 2.66% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 49.58% | 86.02% | 86.02% | — | — | 2 | 7d 23h | 16d ago | 25m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.01% | 43.01% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 85.75% | 85.75% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.24% | 34.24% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 85.67% | 85.67% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 33.53% | 65.78% | 65.78% | — | — | 2 | 10d 7h | 21d ago | 11m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 28.81% | 28.81% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 47.37% | 47.37% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 83.26% | 83.26% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 3.41% | 71.38% | 71.38% | — | — | 1 | 29d 1h | 29d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 34.89% | 35.96% | 35.96% | — | — | 7 | 2d 21h | 20d ago | 11m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 81.69% | 81.69% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 57.86% | 57.86% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.41% | 3.41% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.69% | 44.69% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 80.04% | 80.04% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 61.06% | 61.06% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 48.34% | 59.18% | 59.18% | — | — | 26 | 14h 48m | 16d ago | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 34.24% | 72.41% | 72.41% | — | — | 37 | 12h 55m | 20d ago | 12m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 39.18% | 91.99% | 91.99% | — | — | 1 | 18d 23h | 19d ago | 23m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.29% | 29.29% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 12.00% | 12.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.62% | 13.62% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 11.24% | 31.56% | 31.56% | — | — | 3 | 8d 23h | 26d ago | 11m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.95% | 24.95% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 12h | 24d ago | 8m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 77.21% | 54.82% | 54.82% | — | — | 14 | 12h 39m | 7d ago | 24m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 62.62% | 62.62% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 13.69% | 13.69% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.08% | 18.08% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.24% | 51.24% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 39.78% | 39.78% | 39.78% | — | — | 1 | 14d 20h | 15d ago | 9m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 8m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 57.10% | 57.10% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 32.53% | 25.96% | 25.96% | — | — | 16 | 1d 7h | 21d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 42.20% | 42.20% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 56.31% | 56.31% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.74% | 5.74% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 57.11% | 93.48% | 93.48% | — | — | 1 | 13d 19h | 14d ago | 25m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 85.88% | 85.88% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 84.76% | 84.76% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 66.10% | 66.10% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 77.62% | 77.62% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 84.61% | 84.61% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.31% | 20.31% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 10.54% | 4.22% | 4.22% | — | — | 2 | 13d 12h | 7d ago | 23m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.41% | 35.41% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.12% | 8.12% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 67.99% | 67.99% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 53.60% | 53.60% | 53.60% | — | — | 2 | 5d 21h | 12d ago | 8m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 11h | 23d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 69.99% | 69.99% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 38.59% | 54.63% | 54.63% | — | — | 12 | 1d 14h | 19d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 8.56% | 8.56% | — | — | 1 | 23d 11h | 23d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 63.37% | 70.38% | 70.38% | — | — | 14 | 20h 18m | 12d ago | 9m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 43.30% | 43.30% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 29.60% | 29.60% | — | — | 1 | 24d 12h | 24d ago | 11m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.76% | 13.76% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.60% | 18.60% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.70% | 21.21% | 21.21% | — | — | 1 | 29d 19h | 30d ago | 12m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 34.67% | 47.18% | 47.18% | — | — | 1 | 20d 7h | 20d ago | 8m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 34.07% | 10.78% | 10.78% | — | — | 339 | 1h 5m | 10d ago | 16m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 14.98% | 14.98% | 14.98% | — | — | 8 | 2d 15h | 21d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.22% | 1.22% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.81% | 6.81% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 8.08% | 8.08% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.69% | 51.69% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 59.35% | 67.13% | 67.13% | — | — | 2 | 6d 14h | 13d ago | 8m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 85.85% | 85.85% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 78.16% | 87.28% | 87.28% | — | — | 2 | 3d 17h | 7d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 53.95% | 53.95% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 86.04% | 86.04% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 43.04% | 68.78% | 68.78% | — | — | 2 | 8d 22h | 18d ago | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.86% | 42.86% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.13% | 3.13% | 3.13% | — | — | 1 | 23d 19h | 24d ago | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 63.43% | 21.04% | 21.04% | — | — | 4 | 2d 24h | 12d ago | 15m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 83.69% | 83.69% | — | — | 1 | 29d 24h | 30d ago | 17m ago |

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
