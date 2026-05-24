# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**609 providers** — 340 🟢 operational · 49 🟡 degraded · 220 🔴 down · 0 ⚫ unknown

_Updated 2026-05-24 06:40 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (340)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 97.21% | 97.21% | 2216 ms | ↓ 0.80x | 2 | 10m | 13d ago | 22m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.89% | 92.89% | 708 ms | ↓ 0.83x | 0 | — | — | 27m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.13% | 15.06% | 15.06% | 1667 ms | ↓ 0.82x | 2 | 6h 11m | 23d ago | 29m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.26% | 97.26% | 2282 ms | ↓ 0.86x | 0 | — | — | 38m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 47.29% | 47.29% | 1595 ms | ↓ 0.86x | 3 | 0s | 12d ago | 26m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 897 ms | → 1.00x | 0 | — | — | 19m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 98.13% | 98.55% | 98.55% | 1067 ms | → 1.05x | 8 | 1h 20m | 8d ago | 28m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.15% | 98.73% | 98.73% | 1618 ms | ↓ 0.79x | 10 | 16m | 22d ago | 39m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.52% | 93.48% | 93.48% | 1660 ms | ↓ 0.87x | 1 | 2h 59m | 21d ago | 24m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1463 ms | ↓ 0.72x | 0 | — | — | 21m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.33% | 96.89% | 96.89% | 1619 ms | ↓ 0.95x | 1 | 4h 31m | 10d ago | 24m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.84% | 91.84% | 1408 ms | ↓ 0.77x | 0 | — | — | 40m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.93% | 99.93% | 1291 ms | ↓ 0.91x | 1 | 0s | 10d ago | 21m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.90% | 96.57% | 96.57% | 2648 ms | → 0.97x | 2 | 0s | 22d ago | 23m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.81% | 99.81% | 873 ms | ↓ 0.67x | 1 | 0s | 9d ago | 24m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 381 ms | → 0.98x | 0 | — | — | 19m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.21% | 98.21% | 931 ms | ↓ 0.84x | 3 | 0s | 16d ago | 24m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.23% | 96.23% | 1308 ms | → 0.98x | 1 | 0s | 9d ago | 23m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.16% | 98.16% | 680 ms | ↓ 0.60x | 0 | — | — | 21m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 75.88% | 32.67% | 32.67% | 437 ms | ↓ 0.93x | 2 | 3d 13h | 25d ago | 34m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 767 ms | ↓ 0.92x | 2 | 9m | 12d ago | 24m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.71% | 96.41% | 96.41% | 2148 ms | → 1.01x | 1 | 1h 40m | 20d ago | 27m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.80% | 98.80% | 696 ms | ↓ 0.80x | 1 | 0s | 21d ago | 36m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.03% | 96.03% | 487 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.21% | 97.21% | 164 ms | ↓ 0.29x | 0 | — | — | 22m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.32% | 81.24% | 81.24% | 986 ms | ↓ 0.59x | 3 | 10h 42m | 25d ago | 24m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.76% | 97.26% | 97.26% | 1128 ms | ↓ 0.84x | 1 | 1h 19m | 26d ago | 26m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 450 ms | ↓ 0.89x | 0 | — | — | 35m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 100.00% | 98.72% | 91.97% | 91.97% | 948 ms | ↓ 0.95x | 5 | 1h 28m | 9d ago | 38m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2651 ms | ↓ 0.83x | 1 | 0s | 16d ago | 35m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.81% | 98.81% | 105 ms | ↓ 0.12x | 0 | — | — | 26m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 98.96% | 97.73% | 97.73% | 3326 ms | → 1.01x | 22 | 0s | 10d ago | 38m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.86% | 99.79% | 99.79% | 1489 ms | ↓ 0.73x | 3 | 0s | 20d ago | 26m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.46% | 95.46% | 1031 ms | ↓ 0.56x | 0 | — | — | 26m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.09% | 82.77% | 82.77% | 1443 ms | ↓ 0.86x | 2 | 4d 1h | 20d ago | 23m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1672 ms | ↓ 0.90x | 0 | — | — | 35m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 589 ms | → 1.00x | 0 | — | — | 19m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.90% | 99.84% | 99.84% | 3660 ms | ↓ 0.91x | 2 | 0s | 20d ago | 34m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.51% | 99.40% | 99.40% | 2945 ms | → 0.95x | 4 | 2h 15m | 12d ago | 26m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.71% | 99.63% | 99.63% | 952 ms | → 1.04x | 5 | 4m | 10d ago | 24m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.86% | 24.83% | 24.83% | 971 ms | ↓ 0.74x | 3 | 0s | 21d ago | 35m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.28% | 95.54% | 95.54% | 1779 ms | ↑ 1.10x | 2 | 2h 9m | 12d ago | 23m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1058 ms | → 0.99x | 0 | — | — | 21m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.86% | 99.86% | 99.86% | 664 ms | → 1.01x | 2 | 0s | 14d ago | 21m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.10% | 96.10% | 927 ms | ↓ 0.94x | 1 | 0s | 22d ago | 27m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.70% | 99.70% | 99.70% | 1309 ms | ↓ 0.93x | 2 | 19m | 11d ago | 20m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.13% | 51.13% | 742 ms | → 0.99x | 0 | — | — | 29m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 2395 ms | ↓ 0.93x | 0 | — | — | 34m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.94% | 96.94% | 1152 ms | ↓ 0.68x | 0 | — | — | 34m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 100.00% | 100.00% | 100.00% | 359 ms | → 1.00x | 0 | — | — | 19m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.76% | 98.98% | 98.98% | 1337 ms | → 0.96x | 4 | 2m | 9d ago | 27m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 81.15% | 81.15% | 1905 ms | ↓ 0.87x | 1 | 0s | 29d ago | 28m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 62.91% | 62.91% | 1387 ms | → 0.96x | 0 | — | — | 28m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 879 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.34% | 98.34% | 1648 ms | ↓ 0.80x | 0 | — | — | 25m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.26% | 92.26% | 943 ms | ↓ 0.89x | 0 | — | — | 28m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.21% | 98.21% | 672 ms | ↓ 0.77x | 0 | — | — | 24m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.73% | 98.73% | 98.73% | 1890 ms | ↓ 0.90x | 12 | 10m | 20d ago | 21m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1438 ms | ↓ 0.80x | 0 | — | — | 20m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 97.95% | 90.67% | 90.67% | 1621 ms | ↓ 0.77x | 14 | 23m | 20d ago | 21m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.44% | 97.44% | 2840 ms | → 0.96x | 5 | 0s | 12d ago | 26m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 43.31% | 43.31% | 801 ms | ↓ 0.95x | 0 | — | — | 29m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.45% | 73.45% | 729 ms | ↓ 0.80x | 1 | 0s | 10d ago | 28m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 91.69% | 91.69% | 91.69% | 440 ms | ↓ 0.50x | 5 | 7h 21m | 8d ago | 20m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 824 ms | → 1.00x | 0 | — | — | 20m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.85% | 97.85% | 2076 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 48.90% | 48.90% | 1091 ms | ↓ 0.89x | 0 | — | — | 29m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.78% | 40.78% | 1048 ms | ↓ 0.73x | 0 | — | — | 35m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 79.86% | 79.86% | 1406 ms | ↓ 0.81x | 1 | 0s | 9d ago | 28m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.38% | 58.09% | 58.09% | 791 ms | ↓ 0.78x | 8 | 12m | 21d ago | 28m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.88% | 97.88% | 821 ms | ↓ 0.56x | 1 | 0s | 8d ago | 29m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.04% | 60.04% | 944 ms | ↓ 0.78x | 0 | — | — | 28m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1956 ms | ↓ 0.87x | 0 | — | — | 21m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.13% | 99.13% | 1368 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.79% | 88.79% | 2023 ms | ↓ 0.90x | 1 | 0s | 11d ago | 27m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 82.99% | 82.99% | 522 ms | ↓ 0.86x | 0 | — | — | 22m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.86% | 99.77% | 99.77% | 2265 ms | → 1.02x | 3 | 0s | 20d ago | 26m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.54% | 99.54% | 770 ms | ↓ 0.76x | 1 | 0s | 13d ago | 28m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.90% | 97.90% | 2061 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 13.29% | 13.29% | 1330 ms | ↓ 0.93x | 1 | 0s | 19d ago | 35m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1186 ms | ↓ 0.84x | 0 | — | — | 19m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.76% | 98.98% | 98.98% | 2163 ms | → 0.96x | 2 | 30m | 19d ago | 38m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.03% | 98.03% | 2936 ms | ↓ 0.81x | 0 | — | — | 39m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 70.44% | 70.44% | 2431 ms | ↓ 0.84x | 0 | — | — | 26m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 625 ms | ↓ 0.91x | 1 | 0s | 18d ago | 21m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.95% | 99.95% | 1171 ms | ↓ 0.87x | 3 | 0s | 29d ago | 39m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.70% | 99.70% | 2876 ms | → 1.04x | 1 | 0s | 10d ago | 39m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.81% | 87.99% | 87.99% | 2003 ms | ↑ 1.05x | 2 | 19m | 16d ago | 28m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 73.83% | 73.83% | 1985 ms | ↓ 0.82x | 0 | — | — | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.62% | 99.72% | 99.72% | 411 ms | ↓ 0.89x | 8 | 0s | 16d ago | 38m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 960 ms | ↓ 0.85x | 0 | — | — | 20m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 78.89% | 78.89% | 1554 ms | → 0.97x | 0 | — | — | 24m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1359 ms | ↓ 0.89x | 0 | — | — | 20m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1018 ms | ↓ 0.80x | 0 | — | — | 24m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.97% | 98.97% | 389 ms | ↓ 0.64x | 0 | — | — | 29m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.54% | 98.54% | 1849 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.46% | 96.46% | 375 ms | ↓ 0.39x | 0 | — | — | 24m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1254 ms | ↓ 0.79x | 0 | — | — | 20m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.14% | 95.52% | 95.52% | 1344 ms | ↓ 0.74x | 12 | 23m | 19d ago | 21m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.23% | 96.32% | 96.32% | 247 ms | ↓ 0.48x | 14 | 3m | 21d ago | 22m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.60% | 98.60% | 168 ms | ↓ 0.46x | 0 | — | — | 26m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.90% | 98.90% | 98.90% | 721 ms | ↓ 0.75x | 2 | 0s | 27d ago | 29m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 13.19% | 13.19% | 2337 ms | ↓ 0.87x | 1 | 0s | 20d ago | 34m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 909 ms | ↓ 0.94x | 0 | — | — | 20m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 16.82% | 16.82% | 1072 ms | ↓ 0.79x | 0 | — | — | 29m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 542 ms | ↓ 0.76x | 0 | — | — | 40m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.47% | 99.15% | 99.15% | 176 ms | ↓ 0.87x | 7 | 20m | 10d ago | 25m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 524 ms | ↓ 0.55x | 0 | — | — | 38m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.10% | 97.10% | 1315 ms | ↓ 0.88x | 0 | — | — | 22m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.79% | 97.79% | 2129 ms | ↑ 1.12x | 0 | — | — | 27m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.67% | 99.71% | 99.71% | 519 ms | ↑ 1.17x | 4 | 18m | 8d ago | 39m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.75% | 99.75% | 1287 ms | ↓ 0.94x | 2 | 20m | 16d ago | 29m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1104 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.63% | 98.63% | 4074 ms | → 0.97x | 0 | — | — | 40m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 69.19% | 82.77% | 82.77% | 706 ms | ↓ 0.58x | 1 | 8d 5h | 30d ago | 26m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2625 ms | → 1.03x | 0 | — | — | 38m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1192 ms | ↓ 0.89x | 0 | — | — | 21m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.81% | 99.20% | 99.20% | 1260 ms | ↓ 0.93x | 4 | 0s | 8d ago | 38m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2262 ms | → 1.05x | 1 | 0s | 16d ago | 34m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.30% | 99.30% | 1635 ms | ↓ 0.90x | 2 | 0s | 15d ago | 29m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 37.45% | 37.45% | 682 ms | → 0.99x | 0 | — | — | 39m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.24% | 98.24% | 3847 ms | ↑ 1.11x | 0 | — | — | 26m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1012 ms | → 0.95x | 1 | 0s | 10d ago | 38m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 98.96% | 99.23% | 99.23% | 670 ms | ↓ 0.70x | 16 | 8m | 8d ago | 39m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1113 ms | ↓ 0.78x | 1 | 0s | 17d ago | 34m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2360 ms | → 1.01x | 0 | — | — | 28m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.87% | 99.84% | 99.84% | 1833 ms | ↓ 0.81x | 24 | 0s | 20d ago | 38m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.50% | 99.50% | 1612 ms | ↑ 1.06x | 0 | — | — | 23m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.95% | 89.01% | 89.01% | 1033 ms | ↑ 1.12x | 1 | 0s | 30d ago | 27m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1388 ms | → 1.00x | 0 | — | — | 38m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 57.53% | 57.53% | 824 ms | ↓ 0.78x | 3 | 0s | 8d ago | 28m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 617 ms | ↓ 0.86x | 0 | — | — | 20m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 59.17% | 77.12% | 77.12% | 477 ms | ↓ 0.34x | 3 | 4d 1h | 13d ago | 24m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.75% | 99.75% | 1699 ms | ↓ 0.95x | 1 | 0s | 29d ago | 38m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 15.21% | 15.21% | 1657 ms | ↓ 0.90x | 0 | — | — | 29m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 100.00% | 98.82% | 98.82% | 2451 ms | ↑ 1.16x | 0 | — | — | 27m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.67% | 78.72% | 78.72% | 1665 ms | ↓ 0.84x | 2 | 50m | 21d ago | 39m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 73.03% | 73.03% | 73.03% | 1061 ms | ↓ 0.94x | 1 | 5d 5h | 17d ago | 21m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.76% | 99.89% | 99.89% | 671 ms | ↓ 0.78x | 3 | 17m | 8d ago | 38m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1120 ms | ↓ 0.87x | 0 | — | — | 38m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 964 ms | ↓ 0.80x | 0 | — | — | 38m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 665 ms | ↓ 0.69x | 1 | 0s | 18d ago | 23m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.97% | 98.97% | 1615 ms | ↓ 0.88x | 0 | — | — | 38m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 97.97% | 97.97% | 1141 ms | ↓ 0.83x | 0 | — | — | 24m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.60% | 97.60% | 2548 ms | → 1.00x | 0 | — | — | 24m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.76% | 95.44% | 95.44% | 424 ms | ↓ 0.41x | 2 | 31m | 9d ago | 24m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.86% | 13.28% | 13.28% | 1283 ms | → 1.00x | 3 | 0s | 22d ago | 38m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.48% | 66.48% | 831 ms | ↓ 0.88x | 0 | — | — | 28m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1344 ms | ↓ 0.88x | 0 | — | — | 38m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1930 ms | ↓ 0.88x | 0 | — | — | 38m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 86.14% | 91.40% | 91.40% | 1580 ms | ↑ 1.14x | 4 | 19h 15m | 9d ago | 27m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 82.03% | 30.21% | 30.21% | 1714 ms | ↓ 0.90x | 10 | 12h 33m | 12d ago | 28m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.43% | 84.35% | 84.35% | 1219 ms | → 0.99x | 12 | 0s | 20d ago | 38m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.54% | 42.27% | 42.27% | 804 ms | ↓ 0.68x | 4 | 7h 27m | 16d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.86% | 84.41% | 84.41% | 176 ms | ↓ 0.41x | 3 | 0s | 27d ago | 37m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.86% | 89.14% | 89.14% | 437 ms | ↓ 0.25x | 2 | 10m | 9d ago | 26m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.22% | 99.22% | 1872 ms | ↓ 0.91x | 0 | — | — | 28m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 97.40% | 98.81% | 98.81% | 2402 ms | ↓ 0.82x | 42 | 6m | 12d ago | 39m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.22% | 64.22% | 524 ms | ↓ 0.46x | 0 | — | — | 28m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.36% | 96.36% | 915 ms | ↓ 0.93x | 0 | — | — | 28m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.90% | 15.11% | 15.11% | 957 ms | ↓ 0.91x | 2 | 0s | 18d ago | 35m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1698 ms | ↓ 0.79x | 1 | 0s | 22d ago | 38m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.11% | 99.11% | 99.11% | 1143 ms | ↓ 0.87x | 1 | 3h 38m | 12d ago | 21m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.17% | 91.47% | 91.47% | 2192 ms | ↓ 0.80x | 4 | 4h 37m | 12d ago | 25m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 54.45% | 54.45% | 496 ms | ↓ 0.51x | 0 | — | — | 28m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.90% | 99.17% | 99.17% | 3100 ms | → 0.97x | 2 | 0s | 8d ago | 34m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2851 ms | ↑ 1.17x | 0 | — | — | 38m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 50.40% | 50.40% | 3696 ms | ↓ 0.91x | 0 | — | — | 26m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.15% | 99.15% | 1966 ms | ↓ 0.89x | 2 | 0s | 22d ago | 27m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.27% | 98.42% | 98.42% | 1437 ms | ↑ 1.09x | 1 | 11h 52m | 24d ago | 21m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.71% | 77.19% | 77.19% | 1172 ms | → 1.01x | 1 | 1h 39m | 24d ago | 28m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 188 ms | → 0.99x | 0 | — | — | 38m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.91% | 99.90% | 99.90% | 1706 ms | ↓ 0.84x | 2 | 0s | 21d ago | 38m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1642 ms | ↓ 0.86x | 0 | — | — | 34m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.90% | 77.48% | 77.48% | 1825 ms | ↓ 0.93x | 2 | 0s | 11d ago | 28m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.77% | 84.77% | 1797 ms | ↑ 1.08x | 0 | — | — | 28m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.81% | 95.81% | 910 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 876 ms | ↓ 0.95x | 0 | — | — | 37m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.30% | 98.30% | 431 ms | ↓ 0.51x | 1 | 0s | 15d ago | 26m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 15.74% | 15.74% | 710 ms | ↓ 0.56x | 0 | — | — | 29m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.81% | 96.48% | 96.48% | 1659 ms | ↓ 0.90x | 3 | 6m | 12d ago | 23m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1334 ms | ↓ 0.88x | 0 | — | — | 20m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.93% | 99.93% | 716 ms | → 0.95x | 0 | — | — | 26m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.72% | 57.72% | 1711 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.79% | 99.79% | 3050 ms | → 0.96x | 1 | 0s | 29d ago | 38m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 83.72% | 89.54% | 89.54% | 27 ms | ↓ 0.16x | 4 | 1d 5h | 14d ago | 23m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 13.27% | 13.27% | 924 ms | → 1.00x | 0 | — | — | 37m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 861 ms | ↓ 0.93x | 0 | — | — | 21m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.18% | 99.25% | 99.25% | 1146 ms | ↓ 0.81x | 1 | 3h 45m | 29d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 1497 ms | ↓ 0.68x | 1 | 0s | 21d ago | 21m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1075 ms | ↓ 0.78x | 0 | — | — | 21m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 92.98% | 92.98% | 3499 ms | ↓ 0.90x | 0 | — | — | 38m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.81% | 99.51% | 99.51% | 1611 ms | ↓ 0.82x | 3 | 7m | 10d ago | 38m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1846 ms | ↓ 0.87x | 0 | — | — | 27m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.66% | 98.70% | 98.70% | 1758 ms | ↓ 0.89x | 7 | 0s | 21d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.96% | 98.96% | 98.96% | 872 ms | ↓ 0.67x | 10 | 8m | 20d ago | 21m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.07% | 99.07% | 1069 ms | → 1.03x | 0 | — | — | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.42% | 99.42% | 844 ms | ↓ 0.72x | 0 | — | — | 37m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 386 ms | ↓ 0.53x | 0 | — | — | 40m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.77% | 59.22% | 59.22% | 2691 ms | ↓ 0.92x | 24 | 2m | 18d ago | 38m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.62% | 91.60% | 91.60% | 1051 ms | ↓ 0.78x | 1 | 2h 20m | 24d ago | 37m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.22% | 98.22% | 2247 ms | ↑ 1.13x | 0 | — | — | 23m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.67% | 96.49% | 96.49% | 2351 ms | ↓ 0.91x | 1 | 1h 60m | 24d ago | 38m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1517 ms | → 1.00x | 0 | — | — | 19m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4113 ms | → 1.00x | 0 | — | — | 19m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.78% | 99.78% | 525 ms | ↓ 0.47x | 0 | — | — | 23m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.57% | 86.57% | 1399 ms | → 1.02x | 0 | — | — | 27m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.76% | 99.76% | 807 ms | ↓ 0.64x | 1 | 0s | 21d ago | 23m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1327 ms | → 0.98x | 0 | — | — | 38m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 1057 ms | ↑ 1.12x | 0 | — | — | 39m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 904 ms | ↑ 1.07x | 0 | — | — | 39m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2432 ms | → 0.99x | 1 | 0s | 28d ago | 35m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 715 ms | → 1.04x | 0 | — | — | 37m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.45% | 83.45% | 1567 ms | ↓ 0.82x | 2 | 0s | 20d ago | 34m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.81% | 18.97% | 18.97% | 1572 ms | ↓ 0.84x | 4 | 0s | 9d ago | 40m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.74% | 98.74% | 1659 ms | ↓ 0.88x | 0 | — | — | 27m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.66% | 91.66% | 3017 ms | ↓ 0.83x | 0 | — | — | 40m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.92% | 99.92% | 99.92% | 602 ms | ↓ 0.77x | 1 | 0s | 19d ago | 20m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.19% | 96.16% | 96.16% | 673 ms | ↓ 0.47x | 3 | 1h 21m | 24d ago | 21m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.68% | 98.68% | 514 ms | → 0.97x | 0 | — | — | 28m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.29% | 98.63% | 98.63% | 2538 ms | ↓ 0.91x | 3 | 1h 20m | 14d ago | 36m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.05% | 98.05% | 1515 ms | → 1.01x | 0 | — | — | 27m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1204 ms | ↓ 0.73x | 0 | — | — | 37m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 86.95% | 86.95% | 2369 ms | ↓ 0.94x | 1 | 0s | 29d ago | 28m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.90% | 96.33% | 96.33% | 1646 ms | ↓ 0.89x | 2 | 0s | 27d ago | 29m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1382 ms | ↓ 0.81x | 0 | — | — | 37m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.91% | 13.27% | 13.27% | 1718 ms | ↓ 0.83x | 2 | 0s | 13d ago | 38m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 663 ms | ↓ 0.58x | 0 | — | — | 21m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.66% | 96.07% | 96.07% | 1214 ms | ↓ 0.86x | 2 | 51m | 16d ago | 24m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.84% | 99.84% | 1931 ms | ↓ 0.88x | 0 | — | — | 37m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 709 ms | ↓ 0.80x | 1 | 0s | 22d ago | 38m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 15.27% | 15.27% | 1815 ms | ↓ 0.89x | 0 | — | — | 29m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.86% | 13.08% | 13.08% | 1238 ms | ↓ 0.83x | 3 | 0s | 21d ago | 29m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.70% | 95.68% | 95.68% | 1273 ms | → 0.98x | 1 | 8h 38m | 12d ago | 23m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.53% | 99.89% | 99.89% | 1295 ms | → 0.97x | 3 | 40m | 27d ago | 38m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 2121 ms | → 1.05x | 0 | — | — | 37m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.13% | 98.13% | 924 ms | ↓ 0.81x | 0 | — | — | 24m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.79% | 99.79% | 1715 ms | ↓ 0.87x | 2 | 0s | 11d ago | 34m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1984 ms | ↑ 1.13x | 0 | — | — | 29m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.07% | 99.07% | 1081 ms | ↓ 0.85x | 0 | — | — | 38m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 357 ms | ↓ 0.63x | 0 | — | — | 37m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.77% | 99.81% | 99.24% | 99.24% | 3346 ms | ↓ 0.89x | 4 | 0s | 3d ago | 39m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.77% | 92.73% | 95.75% | 95.75% | 2740 ms | ↓ 0.88x | 76 | 21m | 5d ago | 39m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.77% | 99.95% | 99.83% | 99.83% | 2038 ms | ↑ 2.10x | 1 | 0s | 7d ago | 39m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.77% | 99.95% | 99.50% | 99.50% | 2650 ms | → 0.95x | 1 | 0s | 4d ago | 38m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.77% | 99.95% | 31.66% | 31.66% | 1527 ms | ↓ 0.68x | 1 | 0s | 16h ago | 38m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.77% | 99.95% | 99.55% | 99.55% | 1225 ms | ↓ 0.90x | 1 | 0s | 4d ago | 39m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.77% | 99.91% | 99.61% | 99.61% | 1574 ms | ↓ 0.90x | 2 | 0s | 5d ago | 38m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.77% | 99.91% | 88.42% | 88.42% | 1015 ms | ↓ 0.76x | 2 | 0s | 2d ago | 38m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.77% | 98.10% | 98.68% | 98.68% | 3474 ms | → 0.96x | 34 | 4m | 6d ago | 38m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.77% | 97.91% | 51.62% | 51.62% | 1299 ms | ↓ 0.82x | 7 | 59m | 2d ago | 35m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.77% | 99.34% | 25.96% | 25.96% | 1744 ms | ↑ 1.29x | 5 | 36m | 2d ago | 36m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.77% | 99.91% | 24.42% | 24.42% | 733 ms | ↓ 0.92x | 2 | 0s | 6d ago | 36m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.77% | 99.48% | 97.71% | 97.71% | 2928 ms | ↓ 0.94x | 9 | 4m | 5d ago | 34m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.77% | 97.19% | 77.75% | 77.75% | 1786 ms | ↓ 0.89x | 47 | 5m | 5d ago | 34m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.77% | 65.40% | 11.46% | 11.46% | 2587 ms | → 1.01x | 8 | 1d 4h | 17h ago | 34m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.77% | 99.71% | 99.71% | 99.71% | 2977 ms | ↓ 0.91x | 6 | 0s | 3d ago | 34m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.77% | 98.62% | 99.42% | 99.42% | 2842 ms | ↓ 0.88x | 18 | 12m | 5d ago | 34m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 53.68% | 39.62% | 39.62% | 3340 ms | → 1.01x | 3 | 4d 6h | 9h ago | 29m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 941 ms | → 0.99x | 1 | 0s | 12h ago | 29m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.76% | 99.38% | 69.29% | 69.29% | 1072 ms | ↓ 0.92x | 10 | 6m | 4d ago | 28m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.76% | 95.79% | 97.30% | 97.30% | 1757 ms | ↑ 1.32x | 7 | 4h 1m | 7d ago | 29m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.81% | 56.60% | 56.60% | 1609 ms | ↓ 0.88x | 4 | 0s | 5d ago | 28m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.76% | 99.95% | 15.47% | 15.47% | 2302 ms | ↑ 1.15x | 1 | 0s | 7d ago | 29m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.76% | 99.90% | 32.88% | 32.88% | 2154 ms | ↓ 0.93x | 2 | 0s | 16h ago | 28m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.76% | 95.35% | 64.38% | 64.38% | 728 ms | ↓ 0.81x | 10 | 2h 50m | 2d ago | 28m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.81% | 13.85% | 13.85% | 1076 ms | ↓ 0.79x | 4 | 0s | 5d ago | 29m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 99.43% | 96.54% | 96.54% | 3968 ms | → 1.02x | 5 | 28m | 6d ago | 29m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.76% | 99.95% | 99.77% | 99.77% | 920 ms | ↓ 0.78x | 1 | 0s | 5h ago | 27m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 98.90% | 90.15% | 90.15% | 1571 ms | → 0.98x | 23 | 0s | 7d ago | 27m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.95% | 99.82% | 99.82% | 1442 ms | → 0.96x | 1 | 0s | 2d ago | 26m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.76% | 99.81% | 33.43% | 33.43% | 193 ms | ↓ 0.86x | 4 | 0s | 7d ago | 26m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.76% | 99.76% | 98.03% | 98.03% | 1340 ms | ↓ 0.63x | 5 | 0s | 19h ago | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.76% | 99.71% | 69.22% | 69.22% | 1198 ms | → 1.05x | 6 | 0s | 2d ago | 26m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.42% | 98.42% | 98.42% | 612 ms | ↓ 0.44x | 5 | 28m | 6d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.76% | 99.76% | 99.85% | 99.85% | 1000 ms | ↓ 0.67x | 3 | 13m | 6d ago | 23m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.76% | 99.90% | 97.47% | 97.47% | 1258 ms | ↓ 0.88x | 2 | 0s | 3d ago | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.76% | 99.81% | 97.38% | 97.38% | 2060 ms | → 1.01x | 3 | 6m | 4d ago | 25m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.76% | 99.90% | 99.88% | 99.88% | 2379 ms | ↑ 1.07x | 2 | 0s | 3d ago | 25m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.76% | 99.93% | 99.93% | 99.93% | 1599 ms | ↓ 0.86x | 1 | 0s | 2d ago | 20m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.76% | 99.41% | 99.41% | 99.41% | 2460 ms | ↓ 0.89x | 6 | 8m | 2d ago | 20m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.76% | 99.72% | 99.72% | 99.72% | 1456 ms | → 1.04x | 3 | 6m | 2d ago | 20m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.76% | 99.93% | 99.93% | 99.93% | 792 ms | ↓ 0.85x | 1 | 0s | 2d ago | 20m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.76% | 98.29% | 98.29% | 98.29% | 1380 ms | ↓ 0.81x | 12 | 18m | 5d ago | 21m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.76% | 99.63% | 99.63% | 99.63% | 2301 ms | ↓ 0.90x | 4 | 5m | 2d ago | 20m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.76% | 98.29% | 98.29% | 98.29% | 1300 ms | ↓ 0.70x | 12 | 18m | 5d ago | 21m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.27% | 98.42% | 98.42% | 1037 ms | ↓ 0.65x | 3 | 3h 43m | 6d ago | 21m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.76% | 99.92% | 99.92% | 99.92% | 2431 ms | ↓ 0.94x | 1 | 0s | 2d ago | 20m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.76% | 99.93% | 99.93% | 99.93% | 778 ms | → 0.99x | 1 | 0s | 2d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.76% | 99.78% | 99.78% | 99.78% | 1646 ms | ↓ 0.90x | 2 | 10m | 2d ago | 20m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.76% | 99.18% | 99.19% | 99.19% | 1280 ms | ↓ 0.84x | 9 | 5m | 1d ago | 21m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.76% | 99.93% | 99.93% | 99.93% | 370 ms | ↓ 0.79x | 1 | 0s | 2d ago | 20m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.76% | 99.93% | 99.93% | 99.93% | 2683 ms | ↓ 0.94x | 1 | 0s | 2d ago | 20m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.76% | 99.93% | 99.93% | 99.93% | 407 ms | ↓ 0.68x | 1 | 0s | 2d ago | 20m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.76% | 99.94% | 99.94% | 99.94% | 908 ms | ↓ 0.74x | 1 | 0s | 2d ago | 20m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.76% | 99.78% | 99.78% | 99.78% | 3494 ms | ↑ 1.18x | 3 | 0s | 2d ago | 20m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.76% | 99.93% | 99.93% | 99.93% | 979 ms | ↓ 0.84x | 1 | 0s | 2d ago | 20m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.76% | 99.94% | 99.94% | 99.94% | 862 ms | ↓ 0.74x | 1 | 0s | 2d ago | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.76% | 99.94% | 99.94% | 99.94% | 3244 ms | ↓ 0.69x | 1 | 0s | 2d ago | 20m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.76% | 99.94% | 99.94% | 99.94% | 1074 ms | ↓ 0.71x | 1 | 0s | 2d ago | 20m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.76% | 99.94% | 99.94% | 99.94% | 549 ms | ↓ 0.57x | 1 | 0s | 2d ago | 20m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.76% | 99.94% | 99.94% | 99.94% | 802 ms | ↓ 0.65x | 1 | 0s | 2d ago | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.79% | 99.79% | 99.79% | 846 ms | ↓ 0.72x | 3 | 0s | 2d ago | 20m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.76% | 99.85% | 99.85% | 99.85% | 849 ms | → 0.95x | 2 | 0s | 2d ago | 20m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.76% | 99.93% | 99.93% | 99.93% | 257 ms | ↓ 0.58x | 1 | 0s | 2d ago | 20m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.67% | 99.92% | 99.92% | 99.92% | 356 ms | ↓ 0.56x | 1 | 0s | 2d ago | 20m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.54% | 95.51% | 81.60% | 81.60% | 2689 ms | ↓ 0.84x | 76 | 4m | 5d ago | 40m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.54% | 99.39% | 99.84% | 99.84% | 2929 ms | ↓ 0.80x | 13 | 0s | 2d ago | 39m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.54% | 99.76% | 99.71% | 99.71% | 2465 ms | ↓ 0.88x | 5 | 0s | 22h ago | 38m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.54% | 93.61% | 12.36% | 12.36% | 819 ms | ↓ 0.89x | 66 | 22m | 4d ago | 38m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.54% | 99.90% | 98.04% | 98.04% | 2036 ms | → 0.96x | 2 | 0s | 2d ago | 35m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.53% | 99.90% | 99.86% | 99.86% | 1822 ms | → 1.01x | 1 | 30m | 21h ago | 27m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.53% | 99.86% | 16.08% | 16.08% | 912 ms | ↓ 0.64x | 3 | 0s | 5d ago | 29m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.53% | 99.76% | 99.82% | 99.82% | 147 ms | ↓ 0.37x | 5 | 0s | 3d ago | 26m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.53% | 92.27% | 91.72% | 91.72% | 2163 ms | → 0.97x | 13 | 4h | 3d ago | 26m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.53% | 95.82% | 37.16% | 37.16% | 1097 ms | ↓ 0.62x | 22 | 58m | 8h ago | 26m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.53% | 99.66% | 98.04% | 98.04% | 2149 ms | → 0.98x | 6 | 3m | 3d ago | 25m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.52% | 98.51% | 98.51% | 98.51% | 1305 ms | ↓ 0.81x | 12 | 13m | 5d ago | 21m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.52% | 99.86% | 99.86% | 99.86% | 1870 ms | → 1.01x | 2 | 0s | 2d ago | 20m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.52% | 99.58% | 99.58% | 99.58% | 840 ms | ↓ 0.94x | 6 | 0s | 6d ago | 21m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.52% | 99.57% | 99.61% | 99.61% | 1074 ms | ↓ 0.60x | 6 | 10m | 2d ago | 21m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.52% | 99.52% | 96.79% | 96.79% | 1944 ms | ↓ 0.91x | 10 | 0s | 8h ago | 22m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.31% | 99.81% | 99.71% | 99.71% | 1813 ms | ↓ 0.83x | 4 | 0s | 4d ago | 38m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.31% | 99.81% | 99.64% | 99.64% | 970 ms | → 1.00x | 3 | 7m | 6d ago | 37m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.30% | 96.11% | 43.80% | 43.80% | 2965 ms | ↑ 1.10x | 9 | 1h 42m | 4d ago | 35m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.30% | 95.38% | 12.79% | 12.79% | 3606 ms | ↓ 0.93x | 65 | 10m | 3d ago | 34m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.29% | 99.81% | 78.37% | 78.37% | 1769 ms | ↓ 0.86x | 2 | 26m | 2d ago | 28m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.29% | 99.66% | 84.27% | 84.27% | 584 ms | ↓ 0.35x | 5 | 8m | 4d ago | 25m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.29% | 99.71% | 97.90% | 97.90% | 2275 ms | ↓ 0.89x | 3 | 26m | 3d ago | 25m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.29% | 99.86% | 89.00% | 89.00% | 303 ms | → 1.01x | 3 | 0s | 4d ago | 23m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.29% | 97.65% | 97.44% | 97.44% | 1453 ms | → 0.98x | 4 | 3h 45m | 4h ago | 24m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.29% | 99.52% | 89.55% | 89.55% | 678 ms | ↓ 0.67x | 5 | 23m | 6d ago | 23m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.29% | 98.07% | 98.07% | 98.07% | 2288 ms | ↓ 0.89x | 13 | 22m | 6d ago | 21m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.08% | 94.23% | 84.26% | 84.26% | 4449 ms | → 1.00x | 44 | 36m | 23h ago | 40m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.08% | 99.72% | 99.85% | 99.85% | 116 ms | ↓ 0.37x | 4 | 15m | 4d ago | 38m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.07% | 99.81% | 99.92% | 99.92% | 760 ms | ↓ 0.86x | 1 | 1h 16m | 5d ago | 35m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.05% | 99.76% | 97.24% | 97.24% | 1793 ms | ↓ 0.66x | 2 | 30m | 5d ago | 26m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.05% | 98.13% | 89.60% | 89.60% | 3196 ms | → 1.03x | 32 | 5m | 8h ago | 26m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.05% | 99.65% | 98.47% | 98.47% | 1055 ms | ↓ 0.89x | 2 | 44m | 14h ago | 21m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.05% | 95.10% | 95.10% | 95.10% | 776 ms | ↑ 1.08x | 8 | 2h 40m | 1h ago | 21m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (49)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 98.85% | 86.60% | 86.45% | 86.45% | 1147 ms | ↓ 0.78x | 8 | 9h 4m | 19h ago | 38m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.84% | 98.84% | 98.84% | 98.84% | 1473 ms | → 1.00x | 1 | 0s | 10h ago | 19m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.82% | 97.51% | 85.31% | 85.31% | 4472 ms | → 1.01x | 47 | 2m | 2d ago | 28m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.81% | 99.26% | 99.26% | 99.26% | 930 ms | ↓ 0.83x | 10 | 0s | 3h ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.58% | 97.51% | 62.60% | 62.60% | 4659 ms | → 1.02x | 45 | 4m | 3d ago | 28m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.58% | 97.07% | 83.66% | 83.66% | 4600 ms | → 0.99x | 60 | 18s | 3h ago | 26m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.58% | 99.71% | 99.69% | 99.69% | 2309 ms | ↓ 0.90x | 1 | 2h 18m | 14h ago | 26m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.58% | 99.71% | 97.91% | 97.91% | 2677 ms | ↑ 1.07x | 1 | 1h 41m | 6d ago | 25m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.57% | 99.58% | 99.58% | 99.58% | 896 ms | ↓ 0.83x | 6 | 0s | 17h ago | 20m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.37% | 94.52% | 98.66% | 98.66% | 3627 ms | ↓ 0.94x | 70 | 13m | 8h ago | 34m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 98.15% | 39.92% | 4.54% | 4.54% | 1652 ms | → 0.96x | 3 | 5d 15h | 2d ago | 37m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.14% | 99.19% | 98.95% | 98.95% | 1518 ms | ↓ 0.80x | 14 | 5m | 18h ago | 34m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.10% | 95.82% | 82.79% | 82.79% | 4761 ms | ↑ 1.11x | 51 | 16m | 2d ago | 25m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.91% | 97.34% | 42.34% | 42.34% | 960 ms | ↓ 0.92x | 15 | 58m | 2d ago | 36m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.91% | 97.63% | 99.14% | 99.14% | 3360 ms | ↑ 1.10x | 14 | 54m | 2d ago | 36m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.91% | 96.58% | 84.75% | 84.75% | 4495 ms | ↑ 1.06x | 65 | 3m | 2h ago | 37m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.91% | 96.29% | 72.69% | 72.69% | 4155 ms | → 0.99x | 68 | 3m | 16h ago | 35m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.88% | 99.47% | 79.54% | 79.54% | 1793 ms | → 1.02x | 4 | 38m | 6d ago | 28m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.70% | 97.07% | 98.00% | 98.00% | 4608 ms | → 1.01x | 55 | 3m | 15h ago | 40m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.68% | 97.63% | 98.95% | 98.95% | 3362 ms | ↓ 0.95x | 15 | 49m | 2d ago | 36m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.67% | 86.66% | 11.59% | 11.59% | 2666 ms | ↓ 0.74x | 221 | 5m | 3d ago | 35m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.64% | 99.52% | 98.20% | 98.20% | 1351 ms | → 1.02x | 1 | 4h 17m | 2d ago | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 97.62% | 99.29% | 99.29% | 99.29% | 1614 ms | ↓ 0.93x | 2 | 1h 20m | 2d ago | 20m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.47% | 98.96% | 99.41% | 99.41% | 2652 ms | ↓ 0.85x | 14 | 15m | 2d ago | 39m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.39% | 99.18% | 99.18% | 99.18% | 1141 ms | ↓ 0.89x | 2 | 1h 36m | 19h ago | 21m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.38% | 98.51% | 98.51% | 98.51% | 1291 ms | → 1.01x | 18 | 2m | 9h ago | 20m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.15% | 97.85% | 97.85% | 97.85% | 1766 ms | ↓ 0.89x | 15 | 22m | 2d ago | 20m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.98% | 99.24% | 96.38% | 96.38% | 1267 ms | ↓ 0.80x | 7 | 27m | 19h ago | 35m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 96.98% | 94.48% | 66.31% | 66.31% | 4346 ms | → 1.00x | 44 | 34m | 1d ago | 35m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.59% | 97.06% | 12.83% | 12.83% | 1923 ms | → 1.01x | 58 | 1m | 11h ago | 36m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.51% | 93.61% | 80.43% | 80.43% | 4666 ms | → 1.02x | 115 | 3m | 19h ago | 26m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.81% | 94.39% | 80.08% | 80.08% | 4795 ms | → 1.03x | 99 | 4m | 57m ago | 26m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.58% | 97.65% | 95.60% | 95.60% | 2468 ms | → 0.99x | 3 | 3h 54m | 1d ago | 27m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.44% | 98.86% | 98.91% | 98.91% | 732 ms | ↓ 0.69x | 1 | 7h 40m | 6d ago | 37m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.34% | 94.68% | 69.70% | 69.70% | 1565 ms | ↓ 0.89x | 20 | 1h 32m | 2h ago | 28m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 94.06% | 93.02% | 93.02% | 93.02% | 1018 ms | ↓ 0.94x | 3 | 11h 15m | 16h ago | 21m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.64% | 96.30% | 96.58% | 96.58% | 3474 ms | → 0.99x | 14 | 1h 33m | 1d ago | 21m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 92.62% | 95.13% | 95.13% | 95.13% | 1143 ms | ↓ 0.78x | 40 | 17m | 2d ago | 20m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 92.45% | 98.08% | 13.10% | 13.10% | 2307 ms | ↑ 1.09x | 8 | 1h 31m | 2d ago | 29m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 91.51% | 88.46% | 14.01% | 14.01% | 4762 ms | → 1.04x | 186 | 7m | 14h ago | 29m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 90.74% | 98.13% | 98.29% | 98.29% | 3111 ms | → 0.99x | 2 | 6h 41m | 18h ago | 21m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.48% | 96.47% | 96.47% | 96.47% | 592 ms | ↓ 0.56x | 3 | 5h 59m | 17h ago | 20m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 87.47% | 97.44% | 99.63% | 99.63% | 2287 ms | → 0.99x | 6 | 2h 50m | 6d ago | 37m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 86.90% | 96.93% | 78.98% | 78.98% | 133 ms | ↓ 0.73x | 6 | 4h 15m | 5d ago | 39m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 83.18% | 18.88% | 13.92% | 13.92% | 2676 ms | → 0.99x | 44 | 12h 26m | 2h ago | 38m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 67.94% | 67.94% | 67.94% | 67.94% | 1548 ms | → 1.00x | 50 | 22m | 5h ago | 19m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 17.40% | 82.50% | 50.39% | 50.39% | 2730 ms | ↓ 0.88x | 13 | 10h 28m | 7d ago | 35m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 14.49% | 68.87% | 68.87% | 68.87% | 2738 ms | ↓ 0.78x | 1 | 6d 22h | 8d ago | 20m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.71% | 9.95% | 9.95% | 9.95% | 3173 ms | ↓ 0.90x | 126 | 3h 20m | 3h ago | 20m ago |

</details>

<details open>
<summary><strong>🔴 Down (220)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.76% | 89.63% | 46.96% | 46.96% | 3997 ms | ↑ 1.05x | 178 | 5m | 24m ago | 24m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 90.54% | 97.79% | 98.99% | 98.99% | 3242 ms | → 0.97x | 8 | 1h 51m | 15h ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 83.41% | 96.25% | 66.42% | 66.42% | 2044 ms | → 1.03x | 9 | 3h 17m | 1d ago | 24m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 79.95% | 95.93% | 48.13% | 48.13% | 788 ms | ↓ 0.88x | 2 | 17h 11m | 1d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 76.72% | 80.25% | 83.75% | 83.75% | 1992 ms | ↑ 1.08x | 12 | 12h 5m | 2d ago | 21m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 75.83% | 91.31% | 94.02% | 94.02% | 527 ms | ↓ 0.23x | 4 | 17h 17m | 2d ago | 25m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 73.93% | 91.93% | 51.18% | 51.18% | 1370 ms | ↓ 0.88x | 24 | 2h 24m | 2d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 70.05% | 93.72% | 89.87% | 89.87% | 2493 ms | ↓ 0.79x | 6 | 8h 52m | 2d ago | 27m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 68.97% | 88.51% | 98.36% | 98.36% | 554 ms | ↓ 0.81x | 17 | 4h 57m | 2d ago | 38m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 67.92% | 69.40% | 16.93% | 16.93% | 4658 ms | ↑ 1.14x | 367 | 16m | 2h ago | 27m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 66.11% | 44.33% | 31.03% | 31.03% | 1159 ms | → 0.95x | 5 | 3d 3h | 6h ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 62.53% | 92.30% | 62.50% | 62.50% | 863 ms | ↓ 0.89x | 1 | 2d 18h | 3d ago | 39m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 60.47% | 66.03% | 61.88% | 61.88% | 4844 ms | ↑ 1.06x | 389 | 18m | 35m ago | 35m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 56.97% | 12.43% | 29.09% | 29.09% | 3579 ms | → 0.98x | 31 | 19h 28m | 7h ago | 26m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 45.48% | 86.89% | 55.36% | 55.36% | 3510 ms | → 0.97x | 14 | 7h 29m | 4d ago | 36m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 40.05% | 87.80% | 90.19% | 90.19% | 1545 ms | ↓ 0.52x | 2 | 2d 5h | 4d ago | 24m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 33.73% | 83.28% | 83.28% | 83.28% | 4708 ms | → 0.99x | 16 | 7h 12m | 5d ago | 20m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 19.03% | 81.53% | 95.19% | 95.19% | 3361 ms | → 0.98x | 13 | 11h 21m | 6d ago | 36m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 15.01% | 3.08% | 71.70% | 71.70% | 1049 ms | → 1.00x | 4 | 7d 5h | 2d ago | 38m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.84% | 8.18% | 63.10% | 63.10% | 3357 ms | ↑ 1.26x | 46 | 14h 30m | 8h ago | 40m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.93% | 21.53% | 4.26% | 4.26% | 3342 ms | ↑ 1.45x | 4 | 6d 3h | 4d ago | 35m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.24% | 42.81% | 10.96% | 10.96% | 1211 ms | ↓ 0.81x | 373 | 49m | 7d ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 86.00% | 86.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 71.23% | 71.23% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 76.60% | 76.60% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 76.20% | 92.07% | 92.07% | — | — | 7 | 1d 4h | 8d ago | 26m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 13.00% | 71.11% | 71.11% | — | — | 1 | 26d 23h | 27d ago | 26m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.90% | 5.90% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 13.01% | 13.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 42.41% | 71.41% | 71.41% | — | — | 4 | 4d 14h | 16d ago | 24m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.53% | 3.53% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 60.61% | 82.70% | 82.70% | — | — | 3 | 4d 7h | 13d ago | 25m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 86.27% | 86.27% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.86% | 37.86% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 40.87% | 67.23% | 67.23% | — | — | 3 | 6d 6h | 19d ago | 24m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 70.34% | 96.34% | 96.34% | — | — | 10 | 23h 35m | 10d ago | 39m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.52% | 25.52% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 77.41% | 77.41% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 57.81% | 57.81% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.71% | 31.71% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 86.68% | 86.68% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 65.28% | 65.28% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 80.06% | 80.06% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.61% | 16.61% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 53.60% | 53.60% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 37.37% | 37.37% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 79.65% | 87.05% | 87.05% | — | — | 2 | 3d 11h | 7d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.70% | 3.70% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 86.89% | 86.89% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 65.90% | 65.90% | 65.90% | — | — | 6 | 1d 6h | 8d ago | 20m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.95% | 53.95% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 29.88% | 29.88% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.14% | 2.14% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 56.33% | 86.63% | 86.63% | — | — | 6 | 2d 9h | 14d ago | 26m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 43.79% | 43.79% | 43.79% | — | — | 1 | 12d 15h | 13d ago | 20m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 61.46% | 70.39% | 70.39% | — | — | 3 | 4d 5h | 13d ago | 28m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 37.05% | 37.05% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.77% | 56.77% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 26.10% | 26.10% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 0.00% | 76.71% | 85.70% | 85.70% | — | — | 2 | 3d 23h | 7d ago | 23m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 31.08% | 31.08% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 59.48% | 59.48% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 77.31% | 26.92% | 26.92% | — | — | 1 | 7d 20h | 8d ago | 26m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 86.62% | 86.62% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.04% | 8.04% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 82.71% | 82.71% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 27.30% | 85.34% | 85.34% | — | — | 3 | 7d 7h | 13d ago | 39m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 78.45% | 37.33% | 37.33% | — | — | 22 | 7h 47m | 7d ago | 26m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 20m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 31.39% | 31.39% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.03% | 55.03% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 56.64% | 60.05% | 60.05% | — | — | 3 | 4d 17h | 14d ago | 27m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 16.94% | 15.27% | 15.27% | — | — | 1 | 17d 6h | 17d ago | 22m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 60.71% | 79.14% | 79.14% | — | — | 2 | 6d 11h | 13d ago | 25m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 79.72% | 79.72% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.60% | 48.60% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.17% | 44.17% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 55.24% | 55.24% | 55.24% | — | — | 5 | 1d 23h | 10d ago | 20m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 86.64% | 86.64% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 61.19% | 61.19% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.64% | 40.64% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 76.15% | 92.10% | 92.10% | — | — | 7 | 1d 4h | 8d ago | 26m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.35% | 33.35% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.69% | 2.69% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 60.45% | 86.86% | 86.86% | — | — | 2 | 6d 11h | 13d ago | 38m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.44% | 43.44% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 86.60% | 86.60% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.64% | 34.64% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 86.52% | 86.52% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 45.10% | 69.00% | 69.00% | — | — | 2 | 8d 19h | 18d ago | 24m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 30.29% | 30.29% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 48.14% | 48.14% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 84.08% | 84.08% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 12.61% | 72.80% | 72.80% | — | — | 2 | 13d 7h | 26d ago | 27m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 46.40% | 37.57% | 37.57% | — | — | 7 | 2d 11h | 17d ago | 24m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 82.49% | 82.49% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 59.55% | 59.55% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.47% | 3.47% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.13% | 45.13% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 80.82% | 80.82% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 61.66% | 61.66% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 58.63% | 63.33% | 63.33% | — | — | 37 | 8h 27m | 13d ago | 21m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 44.81% | 74.77% | 74.77% | — | — | 50 | 8h 8m | 17d ago | 25m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 50.52% | 92.89% | 92.89% | — | — | 1 | 15d 23h | 16d ago | 36m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.58% | 29.58% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 12.74% | 12.74% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.95% | 13.95% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 14.65% | 33.43% | 33.43% | — | — | 3 | 8d 14h | 23d ago | 23m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.19% | 25.19% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 11h | 21d ago | 21m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 64.24% | 64.24% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 14.65% | 14.65% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.26% | 18.26% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.75% | 51.75% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 45.10% | 45.10% | 45.10% | — | — | 1 | 11d 19h | 12d ago | 21m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 20m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 57.66% | 57.66% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 43.95% | 26.72% | 26.72% | — | — | 19 | 22h 20m | 18d ago | 25m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 43.97% | 43.97% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 58.27% | 58.27% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.80% | 5.80% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 67.66% | 94.39% | 94.39% | — | — | 1 | 10d 19h | 11d ago | 37m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 86.72% | 86.72% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 85.59% | 85.59% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 66.76% | 66.76% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 78.38% | 78.38% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 85.44% | 85.44% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.52% | 20.52% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 5.66% | 5.66% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.78% | 35.78% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.27% | 8.27% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 68.66% | 68.66% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 60.77% | 60.77% | 60.77% | — | — | 2 | 4d 8h | 9d ago | 21m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 29m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 70.67% | 70.67% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 49.93% | 58.49% | 58.49% | — | — | 12 | 1d 8h | 16d ago | 21m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 9.60% | 9.60% | — | — | 1 | 20d 11h | 20d ago | 21m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 73.62% | 75.93% | 75.93% | — | — | 14 | 15h 6m | 9d ago | 21m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 45.03% | 45.03% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 31.58% | 31.58% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.19% | 14.19% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.78% | 18.78% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 13.69% | 22.04% | 22.04% | — | — | 1 | 26d 18h | 27d ago | 25m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 46.18% | 50.90% | 50.90% | — | — | 1 | 17d 7h | 17d ago | 21m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 16.87% | 16.87% | 16.87% | — | — | 8 | 2d 6h | 18d ago | 20m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.31% | 1.31% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.27% | 7.27% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 8.65% | 8.65% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.20% | 52.20% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 69.77% | 72.42% | 72.42% | — | — | 2 | 5d 2h | 10d ago | 20m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 86.69% | 86.69% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 55.59% | 55.59% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 86.88% | 86.88% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 54.20% | 72.38% | 72.38% | — | — | 2 | 7d 10h | 15d ago | 22m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.28% | 43.28% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.53% | 3.53% | 3.53% | — | — | 1 | 20d 18h | 21d ago | 21m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 73.63% | 21.39% | 21.39% | — | — | 5 | 1d 19h | 9d ago | 27m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 84.51% | 84.51% | — | — | 1 | 29d 23h | 30d ago | 29m ago |

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
