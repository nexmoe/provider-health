# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**609 providers** — 344 🟢 operational · 42 🟡 degraded · 223 🔴 down · 0 ⚫ unknown

_Updated 2026-05-25 07:18 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (344)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 97.27% | 97.27% | 2200 ms | ↓ 0.78x | 2 | 10m | 14d ago | 30m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.93% | 92.93% | 700 ms | ↓ 0.85x | 0 | — | — | 35m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.13% | 15.35% | 15.35% | 1660 ms | ↓ 0.82x | 2 | 6h 11m | 24d ago | 37m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.27% | 97.27% | 2324 ms | ↓ 0.88x | 0 | — | — | 46m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 47.74% | 47.74% | 1619 ms | ↓ 0.88x | 3 | 0s | 13d ago | 34m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 887 ms | → 1.00x | 0 | — | — | 28m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 98.12% | 98.55% | 98.55% | 1090 ms | → 1.05x | 8 | 1h 20m | 9d ago | 36m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.29% | 98.73% | 98.73% | 1598 ms | ↓ 0.80x | 7 | 23m | 23d ago | 48m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.52% | 93.58% | 93.58% | 1618 ms | ↓ 0.88x | 1 | 2h 59m | 22d ago | 32m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1504 ms | ↓ 0.76x | 0 | — | — | 29m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.32% | 96.94% | 96.94% | 1592 ms | ↓ 0.95x | 1 | 4h 31m | 11d ago | 32m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.87% | 91.87% | 1378 ms | ↓ 0.76x | 0 | — | — | 49m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.93% | 99.93% | 1304 ms | → 0.96x | 1 | 0s | 11d ago | 29m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.90% | 96.65% | 96.65% | 2740 ms | → 0.96x | 2 | 0s | 23d ago | 32m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.82% | 99.82% | 862 ms | ↓ 0.66x | 1 | 0s | 10d ago | 32m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 395 ms | → 0.99x | 0 | — | — | 28m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.24% | 98.24% | 931 ms | ↓ 0.85x | 3 | 0s | 17d ago | 32m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.31% | 96.31% | 1308 ms | → 0.99x | 1 | 0s | 10d ago | 32m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.21% | 98.21% | 680 ms | ↓ 0.64x | 0 | — | — | 29m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 75.79% | 32.90% | 32.90% | 454 ms | ↓ 0.95x | 2 | 3d 13h | 26d ago | 43m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 743 ms | → 0.96x | 2 | 9m | 13d ago | 32m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.71% | 96.44% | 96.44% | 2118 ms | → 0.99x | 1 | 1h 40m | 21d ago | 35m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.81% | 98.81% | 722 ms | ↓ 0.83x | 1 | 0s | 22d ago | 45m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.07% | 96.07% | 487 ms | → 1.01x | 0 | — | — | 34m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.28% | 97.28% | 163 ms | ↓ 0.30x | 0 | — | — | 30m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.53% | 81.49% | 81.49% | 987 ms | ↓ 0.59x | 2 | 15h 18m | 26d ago | 32m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.76% | 97.29% | 97.29% | 1148 ms | → 0.95x | 1 | 1h 19m | 27d ago | 34m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 441 ms | ↓ 0.89x | 0 | — | — | 44m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 100.00% | 98.76% | 91.99% | 91.99% | 933 ms | → 0.96x | 4 | 1h 50m | 10d ago | 47m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2511 ms | ↓ 0.81x | 1 | 0s | 17d ago | 44m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.82% | 98.82% | 106 ms | ↓ 0.13x | 0 | — | — | 34m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 98.95% | 97.74% | 97.74% | 3361 ms | → 1.02x | 22 | 0s | 11d ago | 47m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.86% | 99.79% | 99.79% | 1481 ms | ↓ 0.74x | 3 | 0s | 21d ago | 34m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.51% | 95.51% | 1033 ms | ↓ 0.56x | 0 | — | — | 34m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 71.99% | 83.07% | 83.07% | 1428 ms | ↓ 0.88x | 2 | 4d 1h | 21d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.76% | 99.85% | 99.85% | 1029 ms | ↓ 0.66x | 3 | 13m | 7d ago | 32m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1583 ms | ↓ 0.89x | 0 | — | — | 44m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 595 ms | → 1.00x | 0 | — | — | 28m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.51% | 99.40% | 99.40% | 2933 ms | ↓ 0.93x | 4 | 2h 15m | 13d ago | 34m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.71% | 99.63% | 99.63% | 931 ms | → 1.01x | 5 | 4m | 11d ago | 32m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.90% | 25.08% | 25.08% | 967 ms | ↓ 0.78x | 2 | 0s | 22d ago | 44m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.28% | 95.62% | 95.62% | 1779 ms | ↑ 1.10x | 2 | 2h 9m | 13d ago | 32m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.71% | 97.94% | 97.94% | 2674 ms | → 1.05x | 1 | 1h 41m | 7d ago | 33m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1039 ms | → 0.96x | 0 | — | — | 29m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.77% | 97.31% | 97.31% | 1567 ms | ↑ 1.29x | 7 | 4h 1m | 8d ago | 37m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.86% | 99.86% | 99.86% | 547 ms | → 1.01x | 2 | 0s | 15d ago | 29m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.13% | 96.13% | 926 ms | → 0.98x | 1 | 0s | 24d ago | 35m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.72% | 99.72% | 99.72% | 1398 ms | ↓ 0.93x | 2 | 19m | 12d ago | 28m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.31% | 51.31% | 734 ms | → 0.99x | 0 | — | — | 37m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 2440 ms | ↓ 0.92x | 0 | — | — | 43m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.95% | 96.95% | 1104 ms | ↓ 0.65x | 0 | — | — | 43m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 100.00% | 100.00% | 100.00% | 365 ms | → 1.00x | 0 | — | — | 28m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.81% | 98.98% | 98.98% | 1324 ms | ↓ 0.94x | 3 | 3m | 10d ago | 35m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 81.26% | 81.26% | 1845 ms | ↓ 0.89x | 1 | 0s | 30d ago | 36m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 63.09% | 63.09% | 1388 ms | → 0.98x | 0 | — | — | 36m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 876 ms | ↓ 0.88x | 0 | — | — | 29m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.36% | 98.36% | 1630 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.29% | 92.29% | 937 ms | ↓ 0.87x | 0 | — | — | 37m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.24% | 98.24% | 648 ms | ↓ 0.77x | 0 | — | — | 32m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.78% | 98.78% | 98.78% | 1837 ms | ↓ 0.89x | 12 | 10m | 21d ago | 30m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1439 ms | ↓ 0.81x | 0 | — | — | 28m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.04% | 91.02% | 91.02% | 1557 ms | ↓ 0.76x | 14 | 23m | 21d ago | 30m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.47% | 97.47% | 2835 ms | ↓ 0.93x | 5 | 0s | 13d ago | 34m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 43.52% | 43.52% | 806 ms | ↓ 0.94x | 0 | — | — | 37m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.59% | 73.59% | 726 ms | ↓ 0.82x | 1 | 0s | 11d ago | 36m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 92.07% | 92.07% | 92.07% | 439 ms | ↓ 0.50x | 5 | 7h 21m | 9d ago | 28m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 872 ms | → 1.00x | 0 | — | — | 28m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.87% | 97.87% | 2070 ms | ↓ 0.82x | 0 | — | — | 34m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 49.08% | 49.08% | 1094 ms | ↓ 0.89x | 0 | — | — | 37m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.98% | 40.98% | 1049 ms | ↓ 0.71x | 0 | — | — | 44m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 79.98% | 79.98% | 1403 ms | ↓ 0.83x | 1 | 0s | 10d ago | 36m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.57% | 58.31% | 58.31% | 794 ms | ↓ 0.78x | 5 | 16m | 22d ago | 36m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.89% | 97.89% | 848 ms | ↓ 0.60x | 1 | 0s | 10d ago | 37m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.22% | 60.22% | 937 ms | ↓ 0.77x | 0 | — | — | 37m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1917 ms | ↓ 0.87x | 0 | — | — | 30m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.14% | 99.14% | 1427 ms | ↓ 0.94x | 0 | — | — | 36m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.86% | 88.86% | 1997 ms | ↓ 0.89x | 1 | 0s | 12d ago | 35m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 83.62% | 83.62% | 517 ms | ↓ 0.87x | 0 | — | — | 30m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.86% | 99.77% | 99.77% | 2239 ms | → 0.99x | 3 | 0s | 21d ago | 34m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.54% | 99.54% | 765 ms | ↓ 0.74x | 1 | 0s | 14d ago | 36m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.92% | 97.92% | 2065 ms | → 1.04x | 0 | — | — | 36m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 13.59% | 13.59% | 1327 ms | ↓ 0.95x | 1 | 0s | 20d ago | 44m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1192 ms | ↓ 0.84x | 0 | — | — | 28m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.76% | 98.99% | 98.99% | 2158 ms | → 0.96x | 2 | 30m | 20d ago | 47m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.03% | 98.03% | 2864 ms | ↓ 0.81x | 0 | — | — | 48m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 70.69% | 70.69% | 2222 ms | ↓ 0.83x | 0 | — | — | 34m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 624 ms | ↓ 0.92x | 1 | 0s | 19d ago | 29m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1107 ms | ↓ 0.89x | 0 | — | — | 48m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.71% | 99.71% | 2866 ms | → 1.00x | 1 | 0s | 11d ago | 48m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.81% | 88.07% | 88.07% | 1952 ms | → 1.03x | 2 | 19m | 17d ago | 36m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 74.10% | 74.10% | 1999 ms | ↓ 0.84x | 0 | — | — | 34m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.67% | 99.73% | 99.73% | 399 ms | ↓ 0.88x | 7 | 0s | 17d ago | 47m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 941 ms | ↓ 0.87x | 0 | — | — | 28m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 79.23% | 79.23% | 1533 ms | ↓ 0.94x | 0 | — | — | 32m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1341 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1016 ms | ↓ 0.80x | 0 | — | — | 32m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.97% | 98.97% | 388 ms | ↓ 0.64x | 0 | — | — | 37m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.55% | 98.55% | 1685 ms | ↓ 0.79x | 0 | — | — | 35m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.51% | 96.51% | 347 ms | ↓ 0.41x | 0 | — | — | 32m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1252 ms | ↓ 0.80x | 0 | — | — | 28m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.22% | 95.71% | 95.71% | 1292 ms | ↓ 0.75x | 12 | 23m | 20d ago | 30m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.23% | 96.41% | 96.41% | 249 ms | ↓ 0.50x | 14 | 3m | 22d ago | 30m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.61% | 98.61% | 168 ms | ↓ 0.47x | 0 | — | — | 34m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.90% | 98.91% | 98.91% | 716 ms | ↓ 0.77x | 2 | 0s | 28d ago | 37m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 13.48% | 13.48% | 2306 ms | ↓ 0.87x | 1 | 0s | 21d ago | 42m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 914 ms | → 0.97x | 0 | — | — | 28m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 17.14% | 17.14% | 1115 ms | ↓ 0.78x | 0 | — | — | 37m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 552 ms | ↓ 0.76x | 0 | — | — | 49m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2076 ms | ↑ 2.25x | 1 | 0s | 8d ago | 47m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.52% | 99.16% | 99.16% | 176 ms | ↓ 0.88x | 6 | 23m | 11d ago | 33m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 520 ms | ↓ 0.58x | 0 | — | — | 47m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.17% | 97.17% | 1230 ms | ↓ 0.88x | 0 | — | — | 30m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.80% | 97.80% | 2097 ms | ↑ 1.08x | 0 | — | — | 35m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.81% | 99.72% | 99.72% | 531 ms | ↑ 1.22x | 2 | 25m | 9d ago | 47m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.76% | 99.76% | 1276 ms | ↓ 0.95x | 2 | 20m | 17d ago | 37m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.64% | 98.64% | 3938 ms | → 0.95x | 0 | — | — | 49m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 72.40% | 82.92% | 82.92% | 686 ms | ↓ 0.58x | 1 | 7d 5h | 30d ago | 34m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2661 ms | → 1.01x | 0 | — | — | 47m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1217 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.81% | 99.20% | 99.20% | 1238 ms | ↓ 0.93x | 4 | 0s | 9d ago | 46m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2226 ms | → 1.01x | 1 | 0s | 17d ago | 43m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.31% | 99.31% | 1602 ms | ↓ 0.92x | 2 | 0s | 16d ago | 37m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 37.66% | 37.66% | 682 ms | → 1.00x | 0 | — | — | 47m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.26% | 98.26% | 3854 ms | ↑ 1.07x | 0 | — | — | 34m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1014 ms | → 0.97x | 1 | 0s | 11d ago | 47m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.00% | 99.23% | 99.23% | 700 ms | ↓ 0.72x | 15 | 8m | 9d ago | 47m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1094 ms | ↓ 0.79x | 1 | 0s | 18d ago | 43m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2368 ms | → 1.01x | 0 | — | — | 36m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.91% | 99.84% | 99.84% | 1802 ms | ↓ 0.81x | 23 | 0s | 21d ago | 47m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.52% | 99.52% | 1644 ms | ↑ 1.06x | 0 | — | — | 32m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.08% | 89.08% | 1016 ms | ↑ 1.08x | 0 | — | — | 35m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1367 ms | → 0.98x | 0 | — | — | 47m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 57.71% | 57.71% | 821 ms | ↓ 0.78x | 3 | 0s | 9d ago | 37m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 15.76% | 15.76% | 2285 ms | ↑ 1.11x | 1 | 0s | 8d ago | 37m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 376 ms | ↓ 0.88x | 0 | — | — | 28m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 59.02% | 77.49% | 77.49% | 296 ms | ↓ 0.35x | 3 | 4d 1h | 14d ago | 32m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.75% | 99.75% | 1727 ms | → 0.95x | 1 | 0s | 30d ago | 47m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 15.50% | 15.50% | 1601 ms | ↓ 0.90x | 0 | — | — | 37m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.67% | 78.80% | 78.80% | 1646 ms | ↓ 0.85x | 2 | 50m | 22d ago | 48m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 74.18% | 74.18% | 74.18% | 1053 ms | ↓ 0.94x | 1 | 5d 5h | 18d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.76% | 99.89% | 99.89% | 678 ms | ↓ 0.79x | 3 | 17m | 9d ago | 46m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1097 ms | ↓ 0.86x | 0 | — | — | 47m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.81% | 33.99% | 33.99% | 193 ms | ↓ 0.85x | 4 | 0s | 8d ago | 34m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 957 ms | ↓ 0.79x | 0 | — | — | 47m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 664 ms | ↓ 0.71x | 1 | 0s | 19d ago | 32m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.98% | 98.98% | 1633 ms | ↓ 0.90x | 0 | — | — | 46m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.00% | 98.00% | 1141 ms | ↓ 0.84x | 0 | — | — | 32m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.63% | 97.63% | 2477 ms | → 0.98x | 0 | — | — | 32m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.76% | 95.50% | 95.50% | 419 ms | ↓ 0.41x | 2 | 31m | 10d ago | 32m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.90% | 13.57% | 13.57% | 1372 ms | → 1.00x | 2 | 0s | 23d ago | 47m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.65% | 66.65% | 814 ms | ↓ 0.90x | 0 | — | — | 36m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1345 ms | ↓ 0.91x | 0 | — | — | 46m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1900 ms | ↓ 0.86x | 0 | — | — | 47m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 89.41% | 91.46% | 91.46% | 1554 ms | ↑ 1.14x | 4 | 13h 4m | 10d ago | 35m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 81.97% | 30.50% | 30.50% | 1709 ms | ↓ 0.91x | 10 | 12h 33m | 13d ago | 37m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.48% | 84.40% | 84.40% | 1207 ms | → 0.99x | 11 | 0s | 21d ago | 47m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.52% | 42.82% | 42.82% | 695 ms | ↓ 0.67x | 4 | 7h 27m | 17d ago | 34m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.90% | 84.47% | 84.47% | 251 ms | ↓ 0.44x | 2 | 0s | 28d ago | 46m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.24% | 89.24% | 363 ms | ↓ 0.25x | 1 | 0s | 10d ago | 34m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.22% | 99.22% | 1868 ms | ↓ 0.92x | 0 | — | — | 36m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 97.96% | 98.81% | 98.81% | 2328 ms | ↓ 0.82x | 32 | 7m | 13d ago | 48m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.39% | 64.39% | 624 ms | ↓ 0.52x | 0 | — | — | 37m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.38% | 96.38% | 916 ms | ↓ 0.92x | 0 | — | — | 37m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.90% | 15.40% | 15.40% | 944 ms | ↓ 0.93x | 2 | 0s | 19d ago | 44m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1898 ms | ↓ 0.79x | 1 | 0s | 23d ago | 47m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.15% | 99.15% | 99.15% | 1129 ms | ↓ 0.87x | 1 | 3h 38m | 13d ago | 29m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.25% | 91.57% | 91.57% | 2191 ms | ↓ 0.82x | 3 | 6h 4m | 13d ago | 33m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 54.65% | 54.65% | 491 ms | ↓ 0.52x | 0 | — | — | 37m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.90% | 99.18% | 99.18% | 3100 ms | → 0.97x | 2 | 0s | 9d ago | 42m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2766 ms | ↑ 1.16x | 0 | — | — | 47m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 50.83% | 50.83% | 3646 ms | ↓ 0.89x | 0 | — | — | 34m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.15% | 99.15% | 1958 ms | ↓ 0.86x | 2 | 0s | 23d ago | 35m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.26% | 98.46% | 98.46% | 1392 ms | → 1.05x | 1 | 11h 52m | 25d ago | 29m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.71% | 77.32% | 77.32% | 1183 ms | → 0.99x | 1 | 1h 39m | 25d ago | 36m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 188 ms | → 1.01x | 0 | — | — | 47m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1713 ms | ↓ 0.86x | 2 | 0s | 22d ago | 46m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1611 ms | ↓ 0.86x | 0 | — | — | 43m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.90% | 77.61% | 77.61% | 1793 ms | ↓ 0.92x | 2 | 0s | 12d ago | 36m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.86% | 84.86% | 1765 ms | ↑ 1.05x | 0 | — | — | 36m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.83% | 95.83% | 917 ms | ↓ 0.86x | 0 | — | — | 37m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 877 ms | → 0.97x | 0 | — | — | 46m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.31% | 98.31% | 426 ms | ↓ 0.49x | 1 | 0s | 16d ago | 34m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 16.08% | 16.08% | 710 ms | ↓ 0.55x | 0 | — | — | 37m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1201 ms | ↓ 0.76x | 0 | — | — | 28m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 718 ms | → 0.95x | 0 | — | — | 34m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.91% | 57.91% | 1711 ms | ↓ 0.91x | 0 | — | — | 37m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.79% | 99.79% | 3095 ms | → 0.98x | 1 | 0s | 30d ago | 47m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 83.65% | 89.73% | 89.73% | 27 ms | ↓ 0.16x | 4 | 1d 5h | 15d ago | 32m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 13.56% | 13.56% | 912 ms | → 1.03x | 0 | — | — | 46m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 875 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.42% | 99.27% | 99.27% | 1152 ms | ↓ 0.85x | 1 | 1h 49m | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 1348 ms | ↓ 0.68x | 1 | 0s | 22d ago | 30m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | ↓ 0.77x | 0 | — | — | 29m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.00% | 93.00% | 3549 ms | ↓ 0.91x | 0 | — | — | 47m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.86% | 99.52% | 99.52% | 1611 ms | ↓ 0.86x | 2 | 10m | 11d ago | 46m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1827 ms | ↓ 0.86x | 0 | — | — | 35m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.71% | 98.71% | 98.71% | 1761 ms | ↓ 0.89x | 6 | 0s | 22d ago | 33m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.00% | 99.00% | 99.00% | 870 ms | ↓ 0.68x | 10 | 8m | 21d ago | 30m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.08% | 99.08% | 1071 ms | → 1.01x | 0 | — | — | 34m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 858 ms | ↓ 0.75x | 0 | — | — | 46m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 372 ms | ↓ 0.52x | 0 | — | — | 49m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.77% | 59.36% | 59.36% | 2651 ms | ↓ 0.91x | 24 | 2m | 19d ago | 47m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.62% | 91.63% | 91.63% | 1057 ms | ↓ 0.80x | 1 | 2h 20m | 25d ago | 46m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.25% | 98.25% | 2266 ms | ↑ 1.22x | 0 | — | — | 32m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.67% | 96.50% | 96.50% | 2353 ms | ↓ 0.92x | 1 | 1h 60m | 25d ago | 47m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1517 ms | → 1.00x | 0 | — | — | 28m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4280 ms | → 1.00x | 0 | — | — | 27m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.78% | 99.78% | 525 ms | ↓ 0.49x | 0 | — | — | 32m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.67% | 86.67% | 1363 ms | → 1.01x | 0 | — | — | 35m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.76% | 99.76% | 816 ms | ↓ 0.64x | 1 | 0s | 22d ago | 32m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1361 ms | → 0.98x | 0 | — | — | 47m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 1062 ms | ↑ 1.15x | 0 | — | — | 47m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 904 ms | ↑ 1.11x | 0 | — | — | 47m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2344 ms | ↓ 0.95x | 1 | 0s | 29d ago | 44m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 716 ms | → 1.04x | 0 | — | — | 45m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.50% | 83.50% | 1570 ms | ↓ 0.82x | 2 | 0s | 21d ago | 43m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.81% | 19.25% | 19.25% | 1527 ms | ↓ 0.83x | 4 | 0s | 10d ago | 49m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1594 ms | ↓ 0.86x | 0 | — | — | 35m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.69% | 91.69% | 2998 ms | ↓ 0.81x | 0 | — | — | 49m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.93% | 99.93% | 603 ms | ↓ 0.81x | 1 | 0s | 20d ago | 28m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.19% | 96.25% | 96.25% | 648 ms | ↓ 0.49x | 3 | 1h 21m | 25d ago | 30m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.69% | 98.69% | 519 ms | → 0.98x | 0 | — | — | 36m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.33% | 98.64% | 98.64% | 2308 ms | ↓ 0.87x | 2 | 1h 60m | 15d ago | 45m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.06% | 98.06% | 1493 ms | → 1.03x | 0 | — | — | 35m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1082 ms | ↓ 0.75x | 0 | — | — | 45m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 87.03% | 87.03% | 2345 ms | ↓ 0.93x | 1 | 0s | 30d ago | 36m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.95% | 96.34% | 96.34% | 1647 ms | ↓ 0.90x | 1 | 0s | 28d ago | 37m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1363 ms | ↓ 0.81x | 0 | — | — | 45m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.90% | 13.56% | 13.56% | 1784 ms | ↓ 0.83x | 2 | 0s | 14d ago | 47m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 649 ms | ↓ 0.57x | 0 | — | — | 29m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.66% | 96.13% | 96.13% | 1195 ms | ↓ 0.88x | 2 | 51m | 17d ago | 32m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.84% | 99.84% | 1859 ms | ↓ 0.89x | 0 | — | — | 45m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 712 ms | ↓ 0.79x | 1 | 0s | 23d ago | 47m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 15.56% | 15.56% | 1794 ms | ↓ 0.90x | 0 | — | — | 37m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.86% | 13.37% | 13.37% | 1240 ms | ↓ 0.82x | 3 | 0s | 22d ago | 37m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.70% | 95.75% | 95.75% | 1162 ms | → 0.97x | 1 | 8h 38m | 13d ago | 32m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.90% | 99.89% | 99.89% | 1288 ms | → 0.98x | 2 | 0s | 28d ago | 47m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 2046 ms | → 0.99x | 0 | — | — | 45m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 100.00% | 98.99% | 90.21% | 90.21% | 1507 ms | → 0.96x | 21 | 0s | 8d ago | 35m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.16% | 98.16% | 905 ms | ↓ 0.82x | 0 | — | — | 32m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1699 ms | ↓ 0.87x | 2 | 0s | 12d ago | 43m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1984 ms | ↑ 1.09x | 0 | — | — | 37m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.07% | 99.07% | 1080 ms | ↓ 0.86x | 0 | — | — | 47m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 366 ms | ↓ 0.67x | 0 | — | — | 46m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.77% | 99.91% | 99.25% | 99.25% | 3314 ms | ↓ 0.88x | 2 | 0s | 4d ago | 48m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.77% | 94.36% | 95.77% | 95.77% | 2734 ms | ↓ 0.89x | 62 | 18m | 6d ago | 48m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.77% | 99.95% | 99.50% | 99.50% | 2603 ms | ↓ 0.94x | 1 | 0s | 5d ago | 47m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.77% | 99.95% | 32.25% | 32.25% | 1506 ms | ↓ 0.68x | 1 | 0s | 2d ago | 47m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.77% | 99.95% | 99.55% | 99.55% | 1289 ms | ↓ 0.94x | 1 | 0s | 5d ago | 47m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.77% | 99.90% | 99.61% | 99.61% | 1587 ms | ↓ 0.91x | 2 | 0s | 6d ago | 46m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.77% | 99.90% | 88.46% | 88.46% | 1013 ms | ↓ 0.78x | 2 | 0s | 4d ago | 46m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.77% | 99.81% | 99.64% | 99.64% | 893 ms | → 1.02x | 3 | 7m | 7d ago | 46m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.77% | 97.90% | 51.78% | 51.78% | 1277 ms | ↓ 0.81x | 7 | 59m | 4d ago | 44m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.77% | 99.90% | 24.68% | 24.68% | 728 ms | ↓ 0.95x | 2 | 0s | 7d ago | 45m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.77% | 99.52% | 97.71% | 97.71% | 2877 ms | ↓ 0.92x | 8 | 5m | 6d ago | 42m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.77% | 98.28% | 77.83% | 77.83% | 1789 ms | ↓ 0.88x | 33 | 2m | 6d ago | 43m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.77% | 68.66% | 11.77% | 11.77% | 2588 ms | → 1.00x | 8 | 1d 1h | 2d ago | 42m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.77% | 99.86% | 99.83% | 99.83% | 3557 ms | ↓ 0.86x | 3 | 0s | 9h ago | 42m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.77% | 98.61% | 99.42% | 99.42% | 2835 ms | ↓ 0.85x | 18 | 12m | 6d ago | 42m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 56.79% | 40.93% | 40.93% | 3343 ms | → 1.01x | 2 | 5d 21h | 1d ago | 37m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 950 ms | → 0.98x | 1 | 0s | 2d ago | 37m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.81% | 56.79% | 56.79% | 1610 ms | ↓ 0.88x | 4 | 0s | 6d ago | 37m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.81% | 14.16% | 14.16% | 1079 ms | ↓ 0.80x | 4 | 0s | 6d ago | 37m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 99.42% | 96.55% | 96.55% | 4003 ms | → 1.01x | 5 | 28m | 7d ago | 37m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.76% | 99.86% | 16.37% | 16.37% | 935 ms | ↓ 0.68x | 3 | 0s | 6d ago | 37m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.76% | 99.47% | 69.45% | 69.45% | 1040 ms | ↓ 0.90x | 9 | 4m | 5d ago | 36m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.76% | 99.95% | 98.82% | 98.82% | 2426 ms | ↑ 1.13x | 1 | 0s | 21h ago | 35m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.76% | 99.90% | 33.28% | 33.28% | 2104 ms | ↓ 0.93x | 2 | 0s | 2d ago | 36m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.76% | 95.38% | 64.56% | 64.56% | 742 ms | ↓ 0.83x | 9 | 3h 9m | 3d ago | 36m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.76% | 99.95% | 99.77% | 99.77% | 976 ms | ↓ 0.83x | 1 | 0s | 1d ago | 35m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.95% | 99.82% | 99.82% | 1446 ms | ↓ 0.94x | 1 | 0s | 3d ago | 34m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.76% | 99.76% | 98.05% | 98.05% | 1369 ms | ↓ 0.64x | 5 | 0s | 2d ago | 34m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.76% | 99.71% | 69.49% | 69.49% | 1206 ms | → 1.03x | 6 | 0s | 3d ago | 34m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.42% | 98.43% | 98.43% | 582 ms | ↓ 0.44x | 5 | 28m | 7d ago | 34m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.76% | 99.52% | 89.73% | 89.73% | 678 ms | ↓ 0.68x | 5 | 23m | 7d ago | 32m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.76% | 99.90% | 97.51% | 97.51% | 1254 ms | ↓ 0.87x | 2 | 0s | 4d ago | 32m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.76% | 99.81% | 97.41% | 97.41% | 2057 ms | → 1.00x | 3 | 6m | 5d ago | 33m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.76% | 99.90% | 99.88% | 99.88% | 2371 ms | → 1.04x | 2 | 0s | 4d ago | 33m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.76% | 99.93% | 99.93% | 99.93% | 1571 ms | ↓ 0.86x | 1 | 0s | 3d ago | 29m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.76% | 99.59% | 99.59% | 99.59% | 774 ms | ↓ 0.93x | 6 | 0s | 7d ago | 29m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.76% | 99.43% | 99.43% | 99.43% | 2374 ms | ↓ 0.88x | 6 | 8m | 3d ago | 29m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.76% | 99.73% | 99.73% | 99.73% | 1430 ms | → 1.04x | 3 | 6m | 3d ago | 29m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.76% | 99.93% | 99.93% | 99.93% | 782 ms | ↓ 0.85x | 1 | 0s | 3d ago | 29m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.76% | 98.36% | 98.37% | 98.37% | 1336 ms | ↓ 0.78x | 12 | 18m | 6d ago | 30m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.76% | 99.64% | 99.64% | 99.64% | 2222 ms | ↓ 0.89x | 4 | 5m | 3d ago | 29m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.76% | 98.36% | 98.37% | 98.37% | 1272 ms | ↓ 0.69x | 12 | 18m | 6d ago | 30m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.26% | 98.46% | 98.46% | 1066 ms | ↓ 0.68x | 3 | 3h 43m | 7d ago | 29m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.76% | 99.92% | 99.92% | 99.92% | 2396 ms | ↓ 0.93x | 1 | 0s | 3d ago | 29m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.76% | 99.93% | 99.93% | 99.93% | 776 ms | → 0.97x | 1 | 0s | 3d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.76% | 99.79% | 99.79% | 99.79% | 1626 ms | ↓ 0.89x | 2 | 10m | 3d ago | 29m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.76% | 99.22% | 99.23% | 99.23% | 1270 ms | ↓ 0.83x | 9 | 5m | 2d ago | 30m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.76% | 99.93% | 99.93% | 99.93% | 344 ms | ↓ 0.80x | 1 | 0s | 3d ago | 29m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.76% | 99.93% | 99.93% | 99.93% | 2666 ms | ↓ 0.94x | 1 | 0s | 3d ago | 29m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.76% | 99.93% | 99.93% | 99.93% | 408 ms | ↓ 0.69x | 1 | 0s | 3d ago | 28m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.76% | 99.95% | 99.95% | 99.95% | 904 ms | ↓ 0.75x | 1 | 0s | 3d ago | 28m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.76% | 99.79% | 99.79% | 99.79% | 3101 ms | ↓ 0.90x | 3 | 0s | 3d ago | 28m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.76% | 99.93% | 99.93% | 99.93% | 982 ms | ↓ 0.86x | 1 | 0s | 3d ago | 28m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.76% | 99.95% | 99.95% | 99.95% | 831 ms | ↓ 0.75x | 1 | 0s | 3d ago | 28m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.76% | 99.94% | 99.94% | 99.94% | 3249 ms | ↓ 0.73x | 1 | 0s | 3d ago | 28m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.76% | 99.95% | 99.95% | 99.95% | 1063 ms | ↓ 0.72x | 1 | 0s | 3d ago | 28m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.76% | 99.95% | 99.95% | 99.95% | 539 ms | ↓ 0.59x | 1 | 0s | 3d ago | 28m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.76% | 99.95% | 99.95% | 99.95% | 788 ms | ↓ 0.66x | 1 | 0s | 3d ago | 28m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.80% | 99.80% | 99.80% | 818 ms | ↓ 0.73x | 3 | 0s | 3d ago | 28m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.76% | 99.86% | 99.86% | 99.86% | 848 ms | → 0.95x | 2 | 0s | 3d ago | 29m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.76% | 99.93% | 99.93% | 99.93% | 255 ms | ↓ 0.61x | 1 | 0s | 3d ago | 28m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.72% | 99.93% | 99.93% | 99.93% | 354 ms | ↓ 0.57x | 1 | 0s | 3d ago | 28m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.54% | 95.59% | 81.93% | 81.93% | 2675 ms | ↓ 0.83x | 73 | 4m | 6d ago | 49m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.54% | 99.53% | 99.84% | 99.84% | 2875 ms | ↓ 0.80x | 10 | 0s | 3d ago | 48m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.54% | 99.76% | 99.72% | 99.72% | 2474 ms | ↓ 0.89x | 5 | 0s | 2d ago | 47m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.54% | 94.25% | 12.66% | 12.66% | 809 ms | ↓ 0.90x | 54 | 26m | 5d ago | 47m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.53% | 98.05% | 98.67% | 98.67% | 3392 ms | → 0.97x | 35 | 4m | 2h ago | 46m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.53% | 99.29% | 26.20% | 26.20% | 1618 ms | ↑ 1.23x | 6 | 30m | 4h ago | 45m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.53% | 96.28% | 44.00% | 44.00% | 3032 ms | ↑ 1.13x | 9 | 1h 42m | 5d ago | 44m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.52% | 99.90% | 99.86% | 99.86% | 1816 ms | → 0.98x | 1 | 30m | 2d ago | 35m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.52% | 99.76% | 99.82% | 99.82% | 142 ms | ↓ 0.37x | 5 | 0s | 4d ago | 34m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.52% | 93.64% | 91.80% | 91.80% | 2159 ms | → 0.96x | 11 | 3h 56m | 4d ago | 34m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.52% | 98.80% | 37.86% | 37.86% | 1091 ms | ↓ 0.63x | 21 | 4m | 1d ago | 34m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.52% | 99.76% | 98.07% | 98.07% | 2159 ms | → 0.98x | 5 | 0s | 4d ago | 33m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.52% | 99.52% | 96.86% | 96.86% | 1933 ms | ↓ 0.93x | 10 | 0s | 1d ago | 30m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.52% | 97.64% | 97.48% | 97.48% | 1453 ms | → 0.96x | 4 | 3h 45m | 1d ago | 32m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.52% | 98.58% | 98.58% | 98.58% | 1261 ms | ↓ 0.81x | 12 | 13m | 6d ago | 30m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.52% | 99.86% | 99.86% | 99.86% | 1753 ms | ↓ 0.94x | 2 | 0s | 3d ago | 29m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.32% | 99.32% | 99.32% | 99.32% | 1307 ms | → 1.00x | 1 | 0s | 1d ago | 28m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.31% | 94.27% | 84.31% | 84.31% | 4341 ms | → 1.00x | 43 | 37m | 2d ago | 49m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.30% | 99.81% | 99.72% | 99.72% | 1780 ms | ↓ 0.83x | 4 | 0s | 5d ago | 47m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.30% | 97.43% | 99.63% | 99.63% | 2216 ms | → 0.96x | 6 | 2h 50m | 7d ago | 45m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.30% | 95.36% | 13.08% | 13.08% | 3525 ms | ↓ 0.91x | 66 | 10m | 12m ago | 42m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.29% | 99.81% | 78.50% | 78.50% | 1741 ms | ↓ 0.86x | 2 | 26m | 3d ago | 36m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.28% | 99.66% | 84.45% | 84.45% | 578 ms | ↓ 0.36x | 5 | 8m | 5d ago | 33m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.28% | 99.81% | 97.93% | 97.93% | 2272 ms | ↓ 0.92x | 2 | 30m | 4d ago | 33m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.28% | 99.86% | 89.21% | 89.21% | 304 ms | → 1.01x | 3 | 0s | 5d ago | 32m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.28% | 98.15% | 98.15% | 98.15% | 2206 ms | ↓ 0.89x | 13 | 22m | 7d ago | 30m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.28% | 99.52% | 99.57% | 99.57% | 877 ms | ↓ 0.40x | 7 | 9m | 7h ago | 29m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.28% | 99.29% | 99.29% | 99.29% | 930 ms | ↓ 0.89x | 10 | 0s | 1d ago | 29m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.07% | 89.92% | 86.50% | 86.50% | 1149 ms | ↓ 0.79x | 8 | 5h 58m | 2d ago | 47m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.07% | 99.81% | 99.92% | 99.92% | 760 ms | ↓ 0.87x | 1 | 1h 16m | 6d ago | 44m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.06% | 99.57% | 99.70% | 99.70% | 2941 ms | ↓ 0.90x | 7 | 6m | 20h ago | 42m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.05% | 97.55% | 85.36% | 85.36% | 4570 ms | → 1.04x | 46 | 2m | 3d ago | 37m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.05% | 99.76% | 97.26% | 97.26% | 1772 ms | ↓ 0.65x | 2 | 30m | 6d ago | 34m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.05% | 98.12% | 89.71% | 89.71% | 3202 ms | → 1.01x | 32 | 5m | 1d ago | 34m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.05% | 97.21% | 83.80% | 83.80% | 4604 ms | → 0.99x | 57 | 19s | 1d ago | 34m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.04% | 99.66% | 98.53% | 98.53% | 974 ms | ↓ 0.87x | 2 | 44m | 2d ago | 30m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.04% | 95.31% | 95.31% | 95.31% | 809 ms | ↑ 1.09x | 8 | 2h 40m | 1d ago | 29m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (42)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.61% | 99.67% | 99.83% | 99.83% | 141 ms | ↓ 0.47x | 5 | 12m | 5h ago | 47m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.57% | 99.71% | 99.70% | 99.70% | 2308 ms | ↓ 0.88x | 1 | 2h 18m | 2d ago | 34m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.57% | 95.95% | 83.01% | 83.01% | 4733 ms | ↑ 1.10x | 48 | 17m | 3d ago | 33m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.37% | 96.57% | 84.80% | 84.80% | 4444 ms | → 1.05x | 65 | 3m | 1d ago | 45m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.36% | 94.55% | 98.67% | 98.67% | 3564 ms | ↓ 0.91x | 69 | 13m | 1d ago | 42m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.34% | 97.55% | 62.80% | 62.80% | 4658 ms | → 1.03x | 45 | 4m | 2h ago | 36m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.33% | 99.53% | 99.53% | 99.53% | 851 ms | ↓ 0.81x | 7 | 0s | 7h ago | 29m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 98.14% | 43.07% | 4.86% | 4.86% | 1661 ms | → 0.97x | 3 | 5d 7h | 3d ago | 46m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.13% | 96.46% | 72.79% | 72.79% | 4194 ms | → 1.00x | 64 | 3m | 2d ago | 44m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.90% | 97.33% | 42.54% | 42.54% | 952 ms | ↓ 0.93x | 15 | 58m | 3d ago | 45m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.90% | 97.62% | 99.14% | 99.14% | 3248 ms | ↑ 1.07x | 14 | 54m | 3d ago | 45m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.90% | 86.61% | 11.89% | 11.89% | 2425 ms | ↓ 0.75x | 221 | 5m | 4d ago | 44m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.89% | 99.19% | 98.95% | 98.95% | 1512 ms | ↓ 0.78x | 14 | 5m | 14h ago | 43m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.86% | 99.47% | 79.66% | 79.66% | 1772 ms | → 1.04x | 4 | 38m | 7d ago | 36m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.69% | 97.11% | 98.01% | 98.01% | 4632 ms | → 1.01x | 54 | 3m | 22h ago | 49m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.67% | 97.62% | 98.96% | 98.96% | 3225 ms | ↓ 0.94x | 15 | 49m | 3d ago | 45m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.62% | 99.52% | 98.21% | 98.21% | 1329 ms | → 1.00x | 1 | 4h 17m | 3d ago | 35m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 97.61% | 99.32% | 99.32% | 99.32% | 1583 ms | ↓ 0.94x | 2 | 1h 20m | 3d ago | 29m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.45% | 99.15% | 99.41% | 99.41% | 2620 ms | ↓ 0.85x | 10 | 21m | 3d ago | 48m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.37% | 97.94% | 97.94% | 97.94% | 1762 ms | ↓ 0.88x | 15 | 22m | 3d ago | 29m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.37% | 99.22% | 99.22% | 99.22% | 1171 ms | ↓ 0.93x | 2 | 1h 36m | 2d ago | 29m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.36% | 98.58% | 98.58% | 98.58% | 1283 ms | → 1.02x | 18 | 2m | 1d ago | 28m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.96% | 99.24% | 96.39% | 96.39% | 1249 ms | ↓ 0.84x | 7 | 27m | 2d ago | 44m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 96.96% | 94.41% | 66.42% | 66.42% | 4280 ms | → 0.98x | 45 | 33m | 10h ago | 44m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.80% | 97.00% | 13.11% | 13.11% | 1937 ms | → 1.01x | 59 | 1m | 21h ago | 45m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.71% | 93.93% | 80.60% | 80.60% | 4671 ms | → 1.02x | 110 | 3m | 17h ago | 34m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.49% | 94.46% | 80.22% | 80.22% | 4794 ms | → 1.04x | 97 | 4m | 17h ago | 34m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.54% | 97.64% | 95.63% | 95.63% | 2396 ms | → 0.98x | 3 | 3h 54m | 2d ago | 35m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.42% | 98.86% | 98.91% | 98.91% | 751 ms | ↓ 0.72x | 1 | 7h 40m | 7d ago | 46m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.30% | 94.66% | 69.87% | 69.87% | 1553 ms | ↓ 0.89x | 20 | 1h 32m | 1d ago | 36m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 94.02% | 93.30% | 93.30% | 93.30% | 1027 ms | → 0.97x | 3 | 11h 15m | 2d ago | 29m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 92.81% | 95.33% | 95.33% | 95.33% | 1133 ms | ↓ 0.77x | 40 | 17m | 3d ago | 28m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.58% | 96.28% | 96.67% | 96.67% | 3091 ms | ↓ 0.95x | 14 | 1h 33m | 2d ago | 29m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.42% | 88.61% | 14.33% | 14.33% | 4722 ms | → 1.04x | 184 | 7m | 14h ago | 37m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.41% | 89.92% | 47.56% | 47.56% | 4255 ms | ↑ 1.07x | 175 | 4m | 1h ago | 32m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 90.67% | 98.12% | 98.33% | 98.33% | 2682 ms | ↓ 0.90x | 2 | 6h 41m | 2d ago | 29m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.41% | 96.61% | 96.61% | 96.61% | 538 ms | ↓ 0.50x | 3 | 5h 59m | 2d ago | 28m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 86.77% | 96.92% | 79.05% | 79.05% | 133 ms | ↓ 0.74x | 6 | 4h 15m | 6d ago | 48m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 81.44% | 21.38% | 15.36% | 15.36% | 2813 ms | → 1.00x | 51 | 10h 17m | 7h ago | 47m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 26.57% | 82.53% | 50.56% | 50.56% | 2563 ms | ↓ 0.84x | 11 | 12h 23m | 8d ago | 44m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 26.32% | 69.42% | 69.42% | 69.42% | 2626 ms | ↓ 0.80x | 9 | 18h 39m | 2h ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 14.08% | 76.52% | 85.86% | 85.86% | 563 ms | ↓ 0.42x | 2 | 4d | 9d ago | 32m ago |

</details>

<details open>
<summary><strong>🔴 Down (223)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.76% | 99.76% | 96.48% | 96.48% | 1617 ms | ↓ 0.91x | 4 | 12m | 31m ago | 31m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 98.83% | 99.71% | 98.02% | 98.02% | 1960 ms | ↓ 0.91x | 5 | 10m | 44m ago | 44m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 92.18% | 98.03% | 13.40% | 13.40% | 2285 ms | ↑ 1.06x | 9 | 1h 21m | 37m ago | 37m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 75.95% | 94.84% | 97.88% | 97.88% | 3290 ms | → 0.98x | 8 | 4h 59m | 2d ago | 34m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 73.20% | 73.20% | 73.20% | 73.20% | 1360 ms | → 1.00x | 51 | 21m | 27m ago | 27m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 68.74% | 93.30% | 65.51% | 65.51% | 1975 ms | → 1.03x | 9 | 6h 4m | 2d ago | 32m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 68.41% | 69.38% | 17.27% | 17.27% | 4722 ms | ↑ 1.13x | 363 | 17m | 1h ago | 35m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.06% | 65.90% | 61.91% | 61.91% | 4840 ms | → 1.05x | 393 | 18m | 44m ago | 44m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 65.56% | 92.98% | 47.94% | 47.94% | 1113 ms | → 0.96x | 2 | 1d 6h | 2d ago | 36m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 62.20% | 77.27% | 81.81% | 81.81% | 2043 ms | ↑ 1.08x | 12 | 14h 8m | 3d ago | 29m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 61.10% | 88.43% | 92.87% | 92.87% | 571 ms | ↓ 0.25x | 3 | 1d 7h | 3d ago | 33m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 59.90% | 89.15% | 50.57% | 50.57% | 1398 ms | ↓ 0.89x | 21 | 3h 56m | 3d ago | 33m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 57.38% | 12.48% | 28.85% | 28.85% | 3579 ms | → 0.98x | 31 | 19h 29m | 1d ago | 34m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 55.92% | 85.47% | 98.03% | 98.03% | 554 ms | ↓ 0.81x | 17 | 6h 24m | 3d ago | 47m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 55.34% | 90.80% | 89.29% | 89.29% | 2157 ms | ↓ 0.81x | 4 | 19h 32m | 3d ago | 35m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 51.31% | 44.50% | 30.58% | 30.58% | 1272 ms | → 0.98x | 5 | 3d 3h | 1d ago | 33m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 47.33% | 89.24% | 62.29% | 62.29% | 881 ms | ↓ 0.90x | 1 | 3d 19h | 4d ago | 48m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 30.54% | 83.84% | 55.17% | 55.17% | 3527 ms | → 0.97x | 14 | 9h 14m | 5d ago | 45m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 25.06% | 84.81% | 89.17% | 89.17% | 1846 ms | ↓ 0.56x | 2 | 2d 18h | 5d ago | 32m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 19.38% | 80.51% | 80.51% | 80.51% | 4701 ms | ↓ 0.93x | 16 | 8h 44m | 6d ago | 28m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 15.12% | 3.09% | 71.46% | 71.46% | 1049 ms | → 1.00x | 4 | 7d 5h | 3d ago | 46m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.03% | 10.02% | 10.02% | 10.02% | 3176 ms | ↓ 0.81x | 133 | 3h 18m | 28m ago | 28m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 3.96% | 78.46% | 94.87% | 94.87% | 3381 ms | → 1.03x | 13 | 13h 14m | 7d ago | 45m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.08% | 7.91% | 62.89% | 62.89% | 3846 ms | ↑ 1.37x | 44 | 15h 13m | 13h ago | 49m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.93% | 18.23% | 4.24% | 4.24% | 3342 ms | ↑ 1.57x | 4 | 6d 9h | 5d ago | 44m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 85.71% | 85.71% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 70.99% | 70.99% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 76.34% | 76.34% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 73.17% | 91.33% | 91.33% | — | — | 7 | 1d 7h | 9d ago | 34m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 9.73% | 70.43% | 70.43% | — | — | 1 | 28d | 28d ago | 34m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.88% | 5.88% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.97% | 12.97% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 39.25% | 70.44% | 70.44% | — | — | 4 | 4d 20h | 17d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.52% | 3.52% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 57.52% | 81.75% | 81.75% | — | — | 3 | 4d 16h | 14d ago | 33m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 85.98% | 85.98% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.74% | 37.74% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 37.70% | 66.28% | 66.28% | — | — | 3 | 6d 15h | 20d ago | 32m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 67.38% | 96.01% | 96.01% | — | — | 6 | 1d 19h | 11d ago | 48m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.38% | 25.38% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 77.15% | 77.15% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 57.34% | 57.34% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.57% | 31.57% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 86.38% | 86.38% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 65.06% | 65.06% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 79.79% | 79.79% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.49% | 16.49% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 53.31% | 53.31% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 37.14% | 37.14% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 76.60% | 86.75% | 86.75% | — | — | 2 | 3d 23h | 8d ago | 37m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.68% | 3.68% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 86.59% | 86.59% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 63.09% | 63.09% | 63.09% | — | — | 6 | 1d 10h | 9d ago | 28m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.76% | 53.76% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 29.74% | 29.74% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.13% | 2.13% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 53.23% | 85.92% | 85.92% | — | — | 6 | 2d 13h | 15d ago | 34m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 42.02% | 42.02% | 42.02% | — | — | 1 | 13d 16h | 14d ago | 29m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 58.42% | 69.98% | 69.98% | — | — | 2 | 6d 20h | 14d ago | 35m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 36.65% | 36.65% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.57% | 56.57% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.97% | 25.97% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.96% | 30.96% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 59.28% | 59.28% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 74.29% | 26.73% | 26.73% | — | — | 1 | 8d 21h | 9d ago | 35m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.00% | 6.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 68.20% | 68.20% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 86.32% | 86.32% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.95% | 7.95% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 82.43% | 82.43% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 27.41% | 85.05% | 85.05% | — | — | 3 | 7d 6h | 14d ago | 47m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 75.53% | 37.01% | 37.01% | — | — | 21 | 9h 21m | 8d ago | 34m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 22d ago | 29m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 31.08% | 31.08% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 54.84% | 54.84% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 53.54% | 59.64% | 59.64% | — | — | 3 | 5d 1h | 15d ago | 35m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 16.20% | 14.66% | 14.66% | — | — | 1 | 18d 7h | 18d ago | 30m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 57.62% | 78.25% | 78.25% | — | — | 2 | 6d 23h | 14d ago | 33m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 79.44% | 79.44% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.44% | 48.44% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.02% | 44.02% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 52.88% | 52.88% | 52.88% | — | — | 5 | 2d 4h | 11d ago | 28m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 86.33% | 86.33% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.98% | 60.98% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.50% | 40.50% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 73.12% | 91.35% | 91.35% | — | — | 7 | 1d 7h | 9d ago | 34m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.19% | 33.19% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.68% | 2.68% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 57.30% | 86.57% | 86.57% | — | — | 2 | 6d 23h | 14d ago | 46m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.29% | 43.29% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.50% | 34.50% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 86.22% | 86.22% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 41.95% | 67.86% | 67.86% | — | — | 2 | 9d 7h | 19d ago | 32m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 29.76% | 29.76% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 47.87% | 47.87% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 83.79% | 83.79% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 9.34% | 72.31% | 72.31% | — | — | 2 | 13d 20h | 27d ago | 35m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 43.25% | 37.00% | 37.00% | — | — | 7 | 2d 14h | 18d ago | 32m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 82.21% | 82.21% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 58.96% | 58.96% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.45% | 3.45% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.98% | 44.98% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 80.55% | 80.55% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 61.46% | 61.46% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 55.79% | 61.86% | 61.86% | — | — | 34 | 9h 55m | 14d ago | 30m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 42.09% | 73.94% | 73.94% | — | — | 42 | 10h 16m | 18d ago | 33m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 47.33% | 92.58% | 92.58% | — | — | 1 | 16d 24h | 17d ago | 45m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.47% | 29.47% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 12.48% | 12.48% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.84% | 13.84% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 11.38% | 32.77% | 32.77% | — | — | 3 | 8d 22h | 24d ago | 32m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.11% | 25.11% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 11h | 22d ago | 29m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 63.67% | 63.67% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 14.31% | 14.31% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.19% | 18.19% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.57% | 51.57% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 43.17% | 43.17% | 43.17% | — | — | 1 | 12d 19h | 13d ago | 29m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 11h | 21d ago | 29m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 57.47% | 57.47% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 40.79% | 26.46% | 26.46% | — | — | 19 | 23h 38m | 19d ago | 34m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 43.35% | 43.35% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 57.58% | 57.58% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.78% | 5.78% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 64.54% | 94.07% | 94.07% | — | — | 1 | 11d 19h | 12d ago | 46m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 86.43% | 86.43% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 85.30% | 85.30% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 66.52% | 66.52% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 78.12% | 78.12% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 85.15% | 85.15% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.45% | 20.45% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 5.53% | 5.53% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.65% | 35.65% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.21% | 8.21% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 68.42% | 68.42% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 58.18% | 58.18% | 58.18% | — | — | 2 | 4d 20h | 10d ago | 29m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 12h | 21d ago | 37m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 70.43% | 70.43% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 46.81% | 57.12% | 57.12% | — | — | 12 | 1d 10h | 17d ago | 30m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 9.23% | 9.23% | — | — | 1 | 21d 11h | 21d ago | 29m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 70.61% | 73.95% | 73.95% | — | — | 14 | 16h 54m | 10d ago | 30m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 44.42% | 44.42% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 30.87% | 30.87% | — | — | 1 | 22d 12h | 22d ago | 31m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.04% | 14.04% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.72% | 18.72% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 10.41% | 21.75% | 21.75% | — | — | 1 | 27d 19h | 28d ago | 33m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 43.05% | 49.59% | 49.59% | — | — | 1 | 18d 7h | 18d ago | 29m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 41.39% | 10.90% | 10.90% | — | — | 358 | 54m | 8d ago | 35m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 16.18% | 16.18% | 16.18% | — | — | 8 | 2d 9h | 19d ago | 28m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.28% | 1.28% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.11% | 7.11% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 8.45% | 8.45% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.02% | 52.02% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 66.75% | 70.57% | 70.57% | — | — | 2 | 5d 14h | 11d ago | 29m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 86.40% | 86.40% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 55.01% | 55.01% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 86.59% | 86.59% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 51.09% | 71.10% | 71.10% | — | — | 2 | 7d 23h | 16d ago | 30m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.13% | 43.13% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.39% | 3.38% | 3.38% | — | — | 1 | 21d 19h | 22d ago | 30m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 70.60% | 21.27% | 21.27% | — | — | 5 | 1d 24h | 10d ago | 35m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 84.22% | 84.22% | — | — | 1 | 29d 24h | 30d ago | 37m ago |

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
