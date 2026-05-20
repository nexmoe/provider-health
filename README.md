# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**603 providers** — 337 🟢 operational · 53 🟡 degraded · 213 🔴 down · 0 ⚫ unknown

_Updated 2026-05-20 06:52 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (337)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 96.95% | 96.95% | 1402 ms | ↓ 0.75x | 2 | 10m | 9d ago | 3h ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.71% | 92.71% | 733 ms | ↓ 0.80x | 0 | — | — | 3h ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.17% | 13.99% | 13.99% | 1771 ms | ↓ 0.86x | 2 | 6h 11m | 19d ago | 3h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.22% | 97.22% | 2254 ms | ↓ 0.79x | 0 | — | — | 3h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 45.58% | 45.58% | 1543 ms | ↓ 0.77x | 3 | 0s | 8d ago | 3h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.30% | 98.71% | 98.71% | 1692 ms | ↓ 0.75x | 22 | 14m | 18d ago | 3h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.68% | 99.21% | 99.21% | 3502 ms | ↓ 0.93x | 7 | 0s | 24d ago | 3h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.53% | 93.08% | 93.08% | 1706 ms | ↓ 0.85x | 1 | 2h 59m | 17d ago | 3h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1412 ms | ↓ 0.63x | 0 | — | — | 3h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.73% | 91.73% | 1704 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.91% | 96.26% | 96.26% | 2950 ms | ↑ 1.10x | 2 | 0s | 18d ago | 3h ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 430 ms | → 1.00x | 0 | — | — | 3h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.12% | 98.12% | 937 ms | ↓ 0.80x | 3 | 0s | 12d ago | 3h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 93.77% | 93.77% | 93.77% | 985 ms | ↓ 0.92x | 1 | 1d 1h | 13d ago | 3h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.95% | 97.95% | 97.95% | 686 ms | ↓ 0.63x | 1 | 13h 57m | 27d ago | 3h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 76.42% | 31.81% | 31.81% | 518 ms | ↓ 0.85x | 3 | 2d 9h | 21d ago | 3h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 822 ms | ↓ 0.90x | 2 | 9m | 8d ago | 3h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 96.31% | 96.31% | 2164 ms | → 1.00x | 1 | 1h 40m | 16d ago | 3h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.79% | 98.79% | 616 ms | ↓ 0.73x | 1 | 0s | 17d ago | 3h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 420 ms | ↓ 0.65x | 0 | — | — | 3h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 95.89% | 95.89% | 479 ms | ↓ 0.70x | 0 | — | — | 3h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1760 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.86% | 97.87% | 97.87% | 2350 ms | ↓ 0.93x | 2 | 9m | 24d ago | 3h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 96.95% | 96.95% | 171 ms | ↓ 0.32x | 0 | — | — | 3h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.32% | 80.24% | 80.24% | 1165 ms | ↓ 0.66x | 6 | 5h 21m | 21d ago | 3h ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 966 ms | ↓ 0.72x | 0 | — | — | 3h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.72% | 97.18% | 97.18% | 803 ms | ↓ 0.47x | 2 | 40m | 22d ago | 3h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 455 ms | ↓ 0.81x | 0 | — | — | 3h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2722 ms | ↓ 0.83x | 1 | 0s | 12d ago | 3h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.91% | 98.76% | 98.76% | 159 ms | ↓ 0.10x | 2 | 0s | 27d ago | 3h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 98.15% | 99.00% | 99.00% | 3582 ms | → 0.97x | 12 | 48m | 9d ago | 3h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.72% | 99.78% | 99.78% | 1778 ms | ↓ 0.84x | 4 | 10m | 16d ago | 3h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 53.02% | 10.34% | 10.34% | 2641 ms | → 1.04x | 7 | 1d 21h | 9d ago | 3h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.28% | 95.28% | 1591 ms | ↓ 0.74x | 0 | — | — | 3h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.62% | 81.57% | 81.57% | 1509 ms | ↓ 0.90x | 2 | 4d 1h | 16d ago | 3h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1717 ms | ↓ 0.88x | 0 | — | — | 3h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.91% | 99.84% | 99.84% | 3881 ms | ↑ 1.10x | 2 | 0s | 16d ago | 3h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.54% | 99.37% | 99.37% | 3369 ms | ↑ 1.17x | 4 | 2h 15m | 8d ago | 3h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.77% | 23.86% | 23.86% | 927 ms | ↓ 0.60x | 5 | 0s | 17d ago | 3h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.29% | 95.19% | 95.19% | 1950 ms | ↑ 1.29x | 2 | 2h 9m | 8d ago | 3h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1006 ms | ↓ 0.83x | 0 | — | — | 3h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1126 ms | ↑ 1.13x | 0 | — | — | 3h ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.83% | 99.83% | 99.83% | 484 ms | → 1.00x | 2 | 0s | 10d ago | 3h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 95.98% | 95.98% | 818 ms | ↓ 0.69x | 1 | 0s | 18d ago | 3h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.64% | 99.64% | 99.64% | 1820 ms | → 0.96x | 2 | 19m | 7d ago | 3h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 99.62% | 50.45% | 50.45% | 799 ms | → 1.01x | 3 | 34m | 29d ago | 3h ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 976 ms | ↓ 0.74x | 0 | — | — | 3h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.60% | 99.60% | 2588 ms | → 0.99x | 0 | — | — | 3h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.95% | 96.90% | 96.90% | 1175 ms | ↓ 0.81x | 1 | 0s | 26d ago | 3h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.92% | 98.51% | 98.51% | 1120 ms | ↓ 0.93x | 1 | 0s | 11d ago | 3h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 80.71% | 80.71% | 1843 ms | ↓ 0.81x | 1 | 0s | 25d ago | 3h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.95% | 62.23% | 62.23% | 1465 ms | → 1.00x | 1 | 0s | 28d ago | 3h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 898 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.27% | 98.27% | 1713 ms | ↓ 0.75x | 0 | — | — | 3h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3052 ms | ↓ 0.61x | 0 | — | — | 3h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.14% | 92.14% | 926 ms | ↓ 0.85x | 0 | — | — | 3h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.11% | 98.11% | 674 ms | ↓ 0.71x | 0 | — | — | 3h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.48% | 98.48% | 98.48% | 1930 ms | ↓ 0.92x | 12 | 10m | 16d ago | 3h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.62% | 66.25% | 66.25% | 2142 ms | ↑ 1.12x | 8 | 0s | 18d ago | 3h ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1531 ms | ↓ 0.82x | 0 | — | — | 3h ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 97.56% | 89.02% | 89.02% | 1750 ms | ↓ 0.77x | 14 | 23m | 16d ago | 3h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.32% | 97.32% | 3207 ms | ↑ 1.18x | 5 | 0s | 8d ago | 3h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 42.51% | 42.51% | 863 ms | → 0.96x | 0 | — | — | 3h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.96% | 51.00% | 51.00% | 1356 ms | ↓ 0.78x | 7 | 59m | 22d ago | 3h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.78% | 97.78% | 2193 ms | ↓ 0.93x | 0 | — | — | 3h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.86% | 48.23% | 48.23% | 1090 ms | ↓ 0.90x | 2 | 9m | 28d ago | 3h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.01% | 40.01% | 978 ms | ↓ 0.73x | 0 | — | — | 3h ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1170 ms | ↓ 0.70x | 0 | — | — | 3h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.97% | 57.24% | 57.24% | 822 ms | ↓ 0.83x | 11 | 20m | 17d ago | 3h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.75% | 99.75% | 99.75% | 1472 ms | → 1.03x | 2 | 10m | 8d ago | 3h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.95% | 59.39% | 59.39% | 942 ms | ↓ 0.81x | 1 | 0s | 29d ago | 3h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2100 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.12% | 99.12% | 1339 ms | ↓ 0.91x | 0 | — | — | 3h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.51% | 88.51% | 2113 ms | ↓ 0.93x | 1 | 0s | 7d ago | 3h ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 80.19% | 80.19% | 558 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.67% | 99.76% | 99.76% | 2388 ms | → 1.01x | 7 | 0s | 16d ago | 3h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.53% | 99.53% | 798 ms | ↓ 0.63x | 1 | 0s | 9d ago | 3h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.86% | 97.86% | 1910 ms | ↑ 1.12x | 0 | — | — | 3h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.81% | 12.18% | 12.18% | 1393 ms | ↓ 0.93x | 4 | 0s | 15d ago | 3h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1334 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.77% | 98.97% | 98.97% | 2141 ms | ↓ 0.94x | 2 | 30m | 15d ago | 3h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.00% | 98.00% | 3206 ms | ↓ 0.82x | 0 | — | — | 3h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 69.46% | 69.46% | 2713 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 100.00% | 88.24% | 88.24% | 384 ms | → 1.04x | 0 | — | — | 3h ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 646 ms | ↓ 0.91x | 1 | 0s | 14d ago | 3h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.95% | 99.95% | 1202 ms | ↓ 0.83x | 3 | 0s | 25d ago | 3h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.58% | 87.70% | 87.70% | 2095 ms | ↑ 1.18x | 7 | 6m | 12d ago | 3h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 92.28% | 72.75% | 72.75% | 2170 ms | ↓ 0.91x | 2 | 1d 5h | 27d ago | 3h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.63% | 99.70% | 99.70% | 424 ms | ↓ 0.89x | 8 | 0s | 12d ago | 3h ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 970 ms | ↓ 0.83x | 0 | — | — | 3h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 77.52% | 77.52% | 1642 ms | ↑ 1.11x | 0 | — | — | 3h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1384 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1025 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.95% | 98.95% | 436 ms | ↓ 0.69x | 0 | — | — | 3h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.50% | 98.50% | 1889 ms | ↑ 1.14x | 0 | — | — | 3h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.22% | 96.22% | 410 ms | ↓ 0.38x | 0 | — | — | 3h ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 900 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 584 ms | ↓ 0.57x | 0 | — | — | 3h ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1359 ms | ↓ 0.78x | 0 | — | — | 3h ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 97.76% | 94.62% | 94.62% | 1376 ms | ↓ 0.73x | 12 | 23m | 15d ago | 3h ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.64% | 99.64% | 99.64% | 2480 ms | ↓ 0.91x | 3 | 7m | 8d ago | 3h ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.20% | 95.96% | 95.96% | 248 ms | ↓ 0.41x | 15 | 3m | 17d ago | 3h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.54% | 98.54% | 186 ms | ↓ 0.47x | 0 | — | — | 3h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.91% | 98.89% | 98.89% | 804 ms | ↓ 0.71x | 2 | 0s | 23d ago | 3h ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 12.08% | 12.08% | 2683 ms | ↓ 0.94x | 1 | 0s | 16d ago | 3h ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 892 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 15.66% | 15.66% | 1108 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 578 ms | ↓ 0.81x | 0 | — | — | 3h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.93% | 99.93% | 588 ms | ↓ 0.55x | 0 | — | — | 3h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 96.83% | 96.83% | 1290 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.12% | 99.72% | 99.72% | 2568 ms | ↓ 0.90x | 4 | 1h 15m | 14d ago | 3h ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.73% | 97.73% | 2352 ms | ↑ 1.33x | 0 | — | — | 3h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.62% | 12.17% | 12.17% | 2532 ms | ↑ 1.25x | 5 | 12m | 9d ago | 3h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.73% | 99.73% | 1322 ms | ↓ 0.90x | 2 | 20m | 12d ago | 3h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1202 ms | ↓ 0.94x | 0 | — | — | 3h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.62% | 98.62% | 4128 ms | → 0.98x | 0 | — | — | 3h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 56.98% | 82.15% | 82.15% | 763 ms | ↓ 0.64x | 1 | 12d 5h | 30d ago | 3h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2700 ms | ↑ 1.18x | 0 | — | — | 3h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1176 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.63% | 99.63% | 2549 ms | ↑ 1.20x | 1 | 0s | 12d ago | 3h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.91% | 99.29% | 99.29% | 1735 ms | ↓ 0.90x | 2 | 0s | 11d ago | 3h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 36.64% | 36.64% | 622 ms | → 0.97x | 0 | — | — | 3h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.18% | 98.18% | 3915 ms | ↑ 1.26x | 0 | — | — | 3h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.82% | 99.82% | 1339 ms | → 1.04x | 0 | — | — | 3h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1175 ms | ↓ 0.77x | 1 | 0s | 13d ago | 3h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 1934 ms | → 0.96x | 0 | — | — | 3h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.85% | 99.84% | 99.84% | 1900 ms | ↓ 0.88x | 25 | 0s | 16d ago | 3h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.46% | 99.46% | 1699 ms | ↑ 1.24x | 0 | — | — | 3h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.95% | 88.73% | 88.73% | 1204 ms | ↑ 1.23x | 1 | 0s | 26d ago | 3h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.59% | 99.59% | 1457 ms | → 1.03x | 0 | — | — | 3h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.78% | 95.76% | 95.76% | 2439 ms | ↓ 0.95x | 1 | 4h 31m | 24d ago | 3h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 301 ms | ↓ 0.71x | 0 | — | — | 3h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.74% | 99.74% | 1757 ms | → 0.96x | 1 | 0s | 25d ago | 3h ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 41.78% | 34.29% | 34.29% | 3644 ms | → 1.04x | 2 | 8d 8h | 26d ago | 3h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.27% | 88.27% | 1003 ms | ↓ 0.69x | 1 | 0s | 17d ago | 3h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 14.14% | 14.14% | 1570 ms | ↓ 0.88x | 0 | — | — | 3h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 100.00% | 98.79% | 98.79% | 2463 ms | ↑ 1.28x | 0 | — | — | 3h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.68% | 78.45% | 78.45% | 1836 ms | ↓ 0.84x | 2 | 50m | 17d ago | 3h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 67.47% | 67.47% | 67.47% | 1086 ms | → 0.95x | 1 | 5d 5h | 13d ago | 3h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.95% | 99.91% | 99.91% | 1183 ms | ↓ 0.91x | 0 | — | — | 3h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.56% | 99.56% | 975 ms | ↓ 0.75x | 0 | — | — | 3h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 806 ms | ↓ 0.62x | 0 | — | — | 3h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.91% | 99.94% | 99.94% | 785 ms | ↓ 0.65x | 1 | 0s | 14d ago | 3h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.96% | 98.96% | 1614 ms | ↓ 0.83x | 0 | — | — | 3h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 97.86% | 97.86% | 1139 ms | ↓ 0.78x | 0 | — | — | 3h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.46% | 97.46% | 2620 ms | ↑ 1.12x | 0 | — | — | 3h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.86% | 12.16% | 12.16% | 1144 ms | → 0.98x | 3 | 0s | 18d ago | 3h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 65.84% | 65.84% | 936 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.95% | 77.91% | 77.91% | 1730 ms | ↓ 0.81x | 1 | 0s | 25d ago | 3h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1277 ms | ↓ 0.81x | 0 | — | — | 3h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.68% | 99.68% | 1929 ms | ↓ 0.95x | 0 | — | — | 3h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2566 ms | ↓ 0.94x | 0 | — | — | 3h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 100.00% | 99.86% | 99.86% | 972 ms | ↓ 0.88x | 0 | — | — | 3h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.45% | 84.15% | 84.15% | 1170 ms | → 0.98x | 12 | 0s | 16d ago | 3h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.63% | 40.13% | 40.13% | 658 ms | ↓ 0.71x | 4 | 7h 27m | 12d ago | 3h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.72% | 84.21% | 84.21% | 238 ms | ↓ 0.40x | 6 | 0s | 23d ago | 3h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.20% | 99.20% | 1920 ms | → 0.99x | 0 | — | — | 3h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 95.86% | 98.79% | 98.79% | 2492 ms | ↓ 0.83x | 69 | 6m | 8d ago | 3h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 63.59% | 63.59% | 337 ms | ↓ 0.28x | 0 | — | — | 3h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.30% | 96.30% | 1029 ms | → 1.00x | 0 | — | — | 3h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.83% | 99.83% | 99.83% | 918 ms | ↓ 0.70x | 2 | 0s | 8d ago | 3h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.77% | 14.02% | 14.02% | 966 ms | ↓ 0.86x | 5 | 0s | 14d ago | 3h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 98.10% | 56.07% | 56.07% | 3606 ms | → 0.98x | 13 | 45m | 9d ago | 3h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1988 ms | ↓ 0.83x | 1 | 0s | 18d ago | 3h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 98.93% | 98.93% | 98.93% | 1217 ms | ↓ 0.91x | 1 | 3h 38m | 8d ago | 3h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 98.10% | 99.18% | 99.18% | 3589 ms | ↑ 1.27x | 12 | 50m | 9d ago | 3h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 53.73% | 53.73% | 501 ms | ↓ 0.55x | 0 | — | — | 3h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 100.00% | 98.27% | 98.27% | 1380 ms | → 1.02x | 0 | — | — | 3h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.81% | 97.97% | 97.97% | 1585 ms | ↓ 0.76x | 4 | 0s | 13d ago | 3h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 31.37% | 31.37% | 2071 ms | ↓ 0.85x | 1 | 0s | 19d ago | 3h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.73% | 99.73% | 2753 ms | → 1.04x | 0 | — | — | 3h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.88% | 99.88% | 1876 ms | → 1.01x | 0 | — | — | 3h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 48.73% | 48.73% | 3687 ms | → 1.01x | 0 | — | — | 3h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.91% | 99.12% | 99.12% | 2099 ms | → 1.02x | 2 | 0s | 18d ago | 3h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.24% | 98.24% | 98.24% | 1510 ms | ↑ 1.24x | 1 | 11h 52m | 20d ago | 3h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.72% | 76.71% | 76.71% | 1277 ms | ↑ 1.20x | 1 | 1h 39m | 20d ago | 3h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 188 ms | → 1.02x | 0 | — | — | 3h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.91% | 99.90% | 99.90% | 1508 ms | ↓ 0.78x | 2 | 0s | 17d ago | 3h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 798 ms | → 1.01x | 0 | — | — | 3h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1774 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.40% | 84.40% | 1931 ms | ↑ 1.22x | 0 | — | — | 3h ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 836 ms | → 0.95x | 1 | 0s | 10d ago | 3h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.75% | 95.75% | 879 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 925 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.24% | 98.24% | 442 ms | ↓ 0.53x | 1 | 0s | 11d ago | 3h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 14.46% | 14.46% | 708 ms | ↓ 0.50x | 0 | — | — | 3h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.81% | 96.17% | 96.17% | 1664 ms | → 0.98x | 3 | 6m | 8d ago | 3h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1429 ms | → 1.01x | 0 | — | — | 3h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.93% | 99.93% | 736 ms | ↓ 0.94x | 0 | — | — | 3h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.01% | 57.01% | 1764 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.78% | 99.78% | 2251 ms | ↓ 0.90x | 1 | 0s | 25d ago | 3h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 100.00% | 62.91% | 62.91% | 803 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 12.14% | 12.14% | 843 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 920 ms | → 0.97x | 0 | — | — | 3h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.17% | 99.17% | 99.17% | 1078 ms | ↓ 0.71x | 1 | 3h 45m | 25d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1600 ms | ↓ 0.68x | 1 | 0s | 17d ago | 3h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 92.89% | 92.89% | 3488 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 2036 ms | → 1.00x | 0 | — | — | 3h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.62% | 98.64% | 98.64% | 2005 ms | → 0.96x | 8 | 0s | 17d ago | 3h ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.75% | 98.75% | 98.75% | 916 ms | ↓ 0.70x | 10 | 8m | 16d ago | 3h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.95% | 99.04% | 99.04% | 974 ms | ↑ 1.11x | 1 | 0s | 26d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 85.24% | 86.37% | 86.37% | 1918 ms | ↑ 1.17x | 11 | 9h 31m | 13d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1777 ms | ↓ 0.91x | 1 | 20m | 15d ago | 3h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 93.55% | 29.33% | 29.33% | 1462 ms | ↓ 0.71x | 2 | 21h 20m | 28d ago | 3h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.55% | 99.55% | 1316 ms | ↓ 0.87x | 0 | — | — | 3h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.42% | 99.42% | 872 ms | ↓ 0.67x | 0 | — | — | 3h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 100.00% | 28.36% | 3.35% | 3.35% | 1837 ms | → 0.98x | 2 | 10d 9h | 9d ago | 3h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 416 ms | ↓ 0.62x | 0 | — | — | 3h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.71% | 58.69% | 58.69% | 2722 ms | → 0.96x | 26 | 2m | 14d ago | 3h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.63% | 91.49% | 91.49% | 1037 ms | ↓ 0.72x | 1 | 2h 20m | 20d ago | 3h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.09% | 98.09% | 2170 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.99% | 96.44% | 96.44% | 2411 ms | ↓ 0.91x | 14 | 11m | 20d ago | 3h ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1467 ms | → 1.00x | 0 | — | — | 3h ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.10% | 99.12% | 99.12% | 1307 ms | ↓ 0.84x | 8 | 5m | 8d ago | 3h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.76% | 99.76% | 560 ms | ↓ 0.47x | 0 | — | — | 3h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.17% | 86.17% | 1387 ms | → 0.98x | 0 | — | — | 3h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.74% | 99.74% | 874 ms | ↓ 0.72x | 1 | 0s | 17d ago | 3h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1365 ms | → 0.99x | 0 | — | — | 3h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 915 ms | → 0.97x | 0 | — | — | 3h ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 355 ms | ↓ 0.54x | 0 | — | — | 3h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 854 ms | ↓ 0.91x | 0 | — | — | 3h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.77% | 68.16% | 68.16% | 1132 ms | ↑ 1.16x | 5 | 0s | 17d ago | 3h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2580 ms | ↑ 1.12x | 1 | 0s | 24d ago | 3h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.81% | 99.81% | 708 ms | → 1.01x | 0 | — | — | 3h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.91% | 83.23% | 83.23% | 1702 ms | ↓ 0.89x | 2 | 0s | 16d ago | 3h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.70% | 98.70% | 1694 ms | ↓ 0.89x | 0 | — | — | 3h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.95% | 97.34% | 97.34% | 1328 ms | → 0.97x | 1 | 0s | 25d ago | 3h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.55% | 91.55% | 3536 ms | ↓ 0.91x | 0 | — | — | 3h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.90% | 99.90% | 99.90% | 637 ms | ↓ 0.77x | 1 | 0s | 15d ago | 3h ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 262 ms | ↓ 0.54x | 0 | — | — | 3h ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.21% | 95.73% | 95.73% | 676 ms | ↓ 0.38x | 3 | 1h 21m | 20d ago | 3h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.66% | 98.66% | 447 ms | ↓ 0.93x | 0 | — | — | 3h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.26% | 98.61% | 98.61% | 2967 ms | ↑ 1.10x | 5 | 48m | 10d ago | 3h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.72% | 99.71% | 99.71% | 3600 ms | ↑ 1.16x | 6 | 0s | 8d ago | 3h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 440 ms | ↓ 0.85x | 0 | — | — | 3h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 647 ms | ↓ 0.65x | 0 | — | — | 3h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 97.99% | 97.99% | 1487 ms | ↓ 0.92x | 0 | — | — | 3h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1270 ms | ↓ 0.76x | 0 | — | — | 3h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 86.64% | 86.64% | 2437 ms | → 1.00x | 1 | 0s | 25d ago | 3h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.11% | 96.28% | 96.28% | 1849 ms | ↓ 0.94x | 3 | 1d 1h | 23d ago | 3h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.95% | 99.86% | 99.86% | 1718 ms | ↓ 0.85x | 1 | 0s | 29d ago | 3h ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.86% | 12.14% | 12.14% | 1864 ms | ↓ 0.87x | 3 | 0s | 9d ago | 3h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 662 ms | ↓ 0.61x | 0 | — | — | 3h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.67% | 95.83% | 95.83% | 1251 ms | ↓ 0.80x | 2 | 51m | 12d ago | 3h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.91% | 99.84% | 99.84% | 2024 ms | ↓ 0.88x | 1 | 20m | 27d ago | 3h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.93% | 99.93% | 730 ms | ↓ 0.91x | 1 | 0s | 18d ago | 3h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.95% | 14.20% | 14.20% | 1947 ms | ↓ 0.91x | 1 | 0s | 27d ago | 3h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.77% | 11.98% | 11.98% | 1349 ms | ↓ 0.90x | 5 | 0s | 17d ago | 3h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.95% | 99.89% | 99.89% | 2459 ms | ↑ 1.16x | 1 | 0s | 24d ago | 3h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.73% | 95.38% | 95.38% | 1323 ms | → 1.03x | 1 | 8h 38m | 8d ago | 3h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2796 ms | ↓ 0.94x | 0 | — | — | 3h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.79% | 99.79% | 2726 ms | ↑ 1.14x | 0 | — | — | 3h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.26% | 99.89% | 99.89% | 1283 ms | ↓ 0.93x | 3 | 1h 27m | 23d ago | 3h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.73% | 99.73% | 2299 ms | ↑ 1.21x | 0 | — | — | 3h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.02% | 98.02% | 957 ms | ↓ 0.77x | 0 | — | — | 3h ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.81% | 99.79% | 99.79% | 1874 ms | ↓ 0.90x | 4 | 0s | 7d ago | 3h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 2256 ms | ↑ 1.34x | 0 | — | — | 3h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.06% | 99.06% | 1080 ms | ↓ 0.85x | 0 | — | — | 3h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 83.20% | 34.45% | 34.45% | 994 ms | ↓ 0.58x | 20 | 5h 51m | 8d ago | 3h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 329 ms | ↓ 0.56x | 0 | — | — | 3h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.79% | 99.08% | 99.84% | 99.84% | 2988 ms | ↓ 0.81x | 20 | 0s | 2d ago | 3h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 99.91% | 99.70% | 99.70% | 3027 ms | ↑ 1.22x | 2 | 0s | 6d ago | 3h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.79% | 99.95% | 99.83% | 99.83% | 1827 ms | ↑ 1.38x | 1 | 0s | 3d ago | 3h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.79% | 99.95% | 99.49% | 99.49% | 2654 ms | → 0.96x | 1 | 0s | 8h ago | 3h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.79% | 99.17% | 99.46% | 99.46% | 2770 ms | ↓ 0.84x | 17 | 1m | 2d ago | 3h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.82% | 17.92% | 17.92% | 1847 ms | ↓ 0.90x | 4 | 0s | 5d ago | 3h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.79% | 98.76% | 91.86% | 91.86% | 941 ms | ↓ 0.94x | 5 | 1h 28m | 5d ago | 3h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.95% | 99.94% | 99.94% | 999 ms | ↓ 0.91x | 1 | 0s | 6d ago | 3h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.91% | 99.89% | 99.89% | 159 ms | ↓ 0.19x | 2 | 0s | 6d ago | 3h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.79% | 99.91% | 99.60% | 99.60% | 1466 ms | ↓ 0.84x | 2 | 0s | 19h ago | 3h ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.82% | 99.47% | 99.47% | 1669 ms | ↓ 0.80x | 3 | 7m | 6d ago | 3h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.79% | 99.91% | 23.45% | 23.45% | 714 ms | ↓ 0.87x | 2 | 0s | 2d ago | 3h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.44% | 97.68% | 97.68% | 3036 ms | → 0.97x | 10 | 4m | 18h ago | 3h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.79% | 99.95% | 98.02% | 98.02% | 2042 ms | ↑ 1.11x | 1 | 0s | 2d ago | 3h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.78% | 99.39% | 68.67% | 68.67% | 1072 ms | ↓ 0.93x | 10 | 6m | 8h ago | 3h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 99.78% | 99.95% | 47.90% | 47.90% | 199 ms | ↓ 0.56x | 1 | 0s | 2d ago | 3h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.78% | 99.95% | 72.88% | 72.88% | 763 ms | ↓ 0.79x | 1 | 0s | 6d ago | 3h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.78% | 99.91% | 79.41% | 79.41% | 1406 ms | ↓ 0.78x | 2 | 0s | 5d ago | 3h ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.78% | 99.95% | 97.85% | 97.85% | 747 ms | ↓ 0.48x | 1 | 0s | 4d ago | 3h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.78% | 99.81% | 55.88% | 55.88% | 1610 ms | ↓ 0.90x | 4 | 0s | 24h ago | 3h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.78% | 99.86% | 56.87% | 56.87% | 820 ms | ↓ 0.77x | 3 | 0s | 4d ago | 3h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.78% | 99.95% | 14.39% | 14.39% | 2393 ms | ↑ 1.35x | 1 | 0s | 3d ago | 3h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.78% | 95.50% | 63.71% | 63.71% | 705 ms | ↓ 0.76x | 9 | 3h 9m | 3d ago | 3h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.78% | 99.44% | 96.49% | 96.49% | 4093 ms | ↑ 1.13x | 5 | 28m | 2d ago | 3h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.78% | 99.77% | 98.95% | 98.95% | 1233 ms | ↓ 0.92x | 4 | 2m | 5d ago | 3h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.78% | 99.81% | 99.83% | 99.83% | 208 ms | ↓ 0.40x | 4 | 0s | 2d ago | 3h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.78% | 99.81% | 31.23% | 31.23% | 193 ms | ↓ 0.84x | 4 | 0s | 3d ago | 3h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.78% | 99.44% | 88.76% | 88.76% | 572 ms | ↓ 0.22x | 10 | 2m | 5d ago | 3h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.78% | 99.95% | 99.80% | 99.80% | 901 ms | ↓ 0.63x | 1 | 0s | 5d ago | 3h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.78% | 99.91% | 95.94% | 95.94% | 1359 ms | → 1.03x | 2 | 0s | 5d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.78% | 99.76% | 99.84% | 99.84% | 1027 ms | ↓ 0.73x | 3 | 13m | 2d ago | 3h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.78% | 99.67% | 99.61% | 99.61% | 976 ms | ↑ 1.12x | 6 | 3m | 6d ago | 3h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.78% | 99.34% | 97.98% | 97.98% | 2167 ms | → 0.97x | 13 | 1m | 2d ago | 3h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.78% | 99.81% | 97.26% | 97.26% | 2326 ms | ↑ 1.08x | 3 | 6m | 11h ago | 3h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.78% | 99.92% | 99.92% | 99.92% | 945 ms | ↓ 0.88x | 1 | 0s | 1d ago | 3h ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.78% | 99.92% | 99.92% | 99.92% | 1283 ms | ↓ 0.88x | 1 | 0s | 6d ago | 3h ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.78% | 99.92% | 99.92% | 99.92% | 2046 ms | ↑ 1.08x | 1 | 0s | 2d ago | 3h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.78% | 99.61% | 99.61% | 99.61% | 1251 ms | ↓ 0.72x | 5 | 12m | 24h ago | 3h ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.78% | 99.37% | 99.37% | 99.37% | 2978 ms | ↓ 0.92x | 5 | 9m | 7d ago | 3h ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.78% | 97.94% | 97.94% | 97.94% | 1494 ms | ↓ 0.87x | 12 | 18m | 1d ago | 3h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.78% | 97.94% | 97.94% | 97.94% | 1301 ms | ↓ 0.70x | 12 | 18m | 1d ago | 3h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.78% | 98.24% | 98.24% | 98.24% | 1001 ms | ↓ 0.56x | 3 | 3h 43m | 2d ago | 3h ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.78% | 94.45% | 94.45% | 94.45% | 676 ms | → 1.02x | 5 | 4h 10m | 6d ago | 3h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.58% | 89.28% | 95.70% | 95.70% | 3117 ms | ↓ 0.88x | 114 | 21m | 23h ago | 3h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.58% | 98.99% | 97.70% | 97.70% | 3629 ms | → 0.99x | 22 | 0s | 6d ago | 3h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.58% | 99.86% | 99.72% | 99.72% | 2191 ms | ↓ 0.88x | 3 | 0s | 2d ago | 3h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.57% | 99.82% | 99.19% | 99.19% | 1161 ms | ↓ 0.87x | 4 | 0s | 4d ago | 3h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.57% | 95.07% | 77.47% | 77.47% | 1883 ms | → 0.96x | 83 | 6m | 15h ago | 3h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.57% | 99.72% | 99.72% | 99.72% | 3024 ms | ↓ 0.94x | 6 | 0s | 7d ago | 3h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.57% | 99.49% | 98.98% | 98.98% | 1629 ms | ↓ 0.88x | 10 | 2m | 2d ago | 3h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.57% | 99.72% | 99.16% | 99.16% | 3172 ms | → 1.01x | 3 | 22m | 4d ago | 3h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.57% | 99.91% | 76.97% | 76.97% | 2046 ms | ↓ 0.91x | 2 | 0s | 7d ago | 3h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.57% | 99.86% | 15.02% | 15.02% | 915 ms | ↓ 0.58x | 3 | 0s | 22h ago | 3h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.57% | 73.54% | 91.15% | 91.15% | 1458 ms | ↑ 1.07x | 4 | 1d 19h | 5d ago | 3h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.57% | 98.21% | 98.21% | 98.21% | 1455 ms | ↓ 0.84x | 12 | 13m | 14h ago | 3h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.57% | 99.49% | 99.49% | 99.49% | 1575 ms | → 1.03x | 6 | 0s | 2d ago | 3h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.57% | 99.82% | 99.82% | 99.82% | 3746 ms | ↑ 1.50x | 2 | 0s | 6d ago | 3h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.36% | 97.88% | 98.66% | 98.66% | 2878 ms | ↓ 0.95x | 40 | 4m | 2d ago | 3h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.36% | 99.77% | 99.63% | 99.63% | 962 ms | ↓ 0.90x | 4 | 5m | 2d ago | 3h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.36% | 98.60% | 99.41% | 99.41% | 2708 ms | → 0.98x | 19 | 12m | 21h ago | 3h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.35% | 99.81% | 12.70% | 12.70% | 1078 ms | ↓ 0.86x | 4 | 0s | 1d ago | 3h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.35% | 99.62% | 90.96% | 90.96% | 2604 ms | ↓ 0.85x | 6 | 6m | 1d ago | 3h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.35% | 98.83% | 89.90% | 89.90% | 1789 ms | ↑ 1.14x | 25 | 0s | 3d ago | 3h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.35% | 98.21% | 89.25% | 89.25% | 3497 ms | ↑ 1.22x | 31 | 5m | 17h ago | 3h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.35% | 98.68% | 83.59% | 83.59% | 630 ms | ↓ 0.32x | 6 | 1h 17m | 15h ago | 3h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.35% | 97.74% | 97.33% | 97.33% | 1459 ms | → 1.02x | 4 | 3h 40m | 2d ago | 3h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.35% | 99.53% | 88.84% | 88.84% | 766 ms | ↓ 0.64x | 5 | 23m | 2d ago | 3h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.35% | 98.39% | 98.39% | 98.39% | 1858 ms | ↓ 0.89x | 12 | 10m | 2d ago | 3h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.35% | 99.58% | 96.53% | 96.53% | 1937 ms | ↓ 0.91x | 9 | 0s | 2d ago | 3h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.15% | 99.49% | 99.71% | 99.71% | 427 ms | → 1.00x | 7 | 11m | 4d ago | 3h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.15% | 73.49% | 86.28% | 86.28% | 1185 ms | ↓ 0.78x | 7 | 1d | 15h ago | 3h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.15% | 99.77% | 99.89% | 99.89% | 681 ms | ↓ 0.73x | 3 | 17m | 4d ago | 3h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.14% | 99.77% | 99.92% | 99.92% | 774 ms | ↓ 0.84x | 2 | 38m | 18h ago | 3h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.14% | 95.87% | 97.27% | 97.27% | 2024 ms | ↑ 1.50x | 7 | 4h 1m | 3d ago | 3h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.14% | 97.56% | 85.13% | 85.13% | 4568 ms | → 1.02x | 47 | 2m | 4h ago | 3h ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.13% | 99.76% | 95.18% | 95.18% | 422 ms | ↓ 0.40x | 2 | 31m | 5d ago | 3h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (53)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.94% | 94.21% | 84.07% | 84.07% | 4509 ms | → 1.02x | 48 | 33m | 2d ago | 3h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.94% | 97.15% | 98.10% | 98.10% | 4651 ms | → 1.00x | 54 | 3m | 23h ago | 3h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.93% | 95.53% | 11.68% | 11.68% | 3668 ms | → 1.04x | 64 | 10m | 21h ago | 3h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.92% | 99.72% | 97.15% | 97.15% | 1869 ms | ↓ 0.71x | 3 | 20m | 18h ago | 3h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.92% | 99.34% | 99.12% | 99.12% | 171 ms | ↓ 0.87x | 10 | 14m | 6d ago | 3h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.92% | 96.94% | 51.05% | 51.05% | 1367 ms | ↓ 0.91x | 25 | 32m | 23h ago | 3h ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.72% | 97.22% | 11.79% | 11.79% | 1886 ms | → 1.03x | 55 | 2m | 10h ago | 3h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.72% | 94.79% | 98.67% | 98.67% | 3662 ms | → 1.00x | 67 | 14m | 14h ago | 3h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.71% | 97.60% | 61.81% | 61.81% | 4672 ms | → 1.00x | 46 | 3m | 2d ago | 3h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.70% | 99.72% | 97.81% | 97.81% | 2720 ms | ↑ 1.16x | 1 | 1h 41m | 2d ago | 3h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.70% | 95.67% | 82.02% | 82.02% | 4778 ms | ↑ 1.13x | 53 | 17m | 3d ago | 3h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.70% | 97.67% | 97.67% | 97.67% | 2389 ms | ↓ 0.91x | 13 | 22m | 2d ago | 3h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.70% | 99.19% | 99.19% | 99.19% | 943 ms | ↓ 0.78x | 9 | 0s | 8h ago | 3h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 98.50% | 95.39% | 43.04% | 43.04% | 1902 ms | → 1.03x | 8 | 1h 55m | 18h ago | 3h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.31% | 98.89% | 99.22% | 99.22% | 814 ms | ↓ 0.70x | 18 | 7m | 4d ago | 3h ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 98.29% | 97.82% | 41.65% | 41.65% | 960 ms | ↓ 0.89x | 13 | 55m | 6d ago | 3h ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.26% | 89.88% | 89.88% | 89.88% | 1158 ms | ↓ 0.73x | 5 | 7h 21m | 4d ago | 3h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.06% | 99.48% | 79.07% | 79.07% | 1713 ms | ↓ 0.94x | 4 | 38m | 2d ago | 3h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 98.04% | 99.24% | 99.24% | 99.24% | 1892 ms | → 0.95x | 1 | 2h 39m | 2d ago | 3h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.84% | 99.39% | 98.37% | 98.37% | 596 ms | ↓ 0.40x | 6 | 23m | 2d ago | 3h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.83% | 98.48% | 98.48% | 98.48% | 1232 ms | → 0.98x | 15 | 3m | 19h ago | 3h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.65% | 99.40% | 25.01% | 25.01% | 1744 ms | ↑ 1.31x | 4 | 45m | 5d ago | 3h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.65% | 96.67% | 84.59% | 84.59% | 4471 ms | → 1.05x | 67 | 2m | 3d ago | 3h ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.61% | 99.07% | 99.07% | 99.07% | 578 ms | ↓ 0.57x | 2 | 1h 30m | 2d ago | 3h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.46% | 95.59% | 80.28% | 80.28% | 2960 ms | ↓ 0.92x | 77 | 4m | 19h ago | 3h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.19% | 97.09% | 83.17% | 83.17% | 4630 ms | → 0.96x | 61 | 18s | 3d ago | 3h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.19% | 93.65% | 79.87% | 79.87% | 4620 ms | → 1.04x | 117 | 3m | 14h ago | 3h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 97.03% | 92.16% | 11.23% | 11.23% | 830 ms | ↓ 0.85x | 87 | 20m | 10h ago | 3h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 96.96% | 99.34% | 96.70% | 96.70% | 1682 ms | ↓ 0.93x | 1 | 4h 31m | 6d ago | 3h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.30% | 96.30% | 96.30% | 96.30% | 1273 ms | ↓ 0.82x | 38 | 3m | 4h ago | 3h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.11% | 94.78% | 79.65% | 79.65% | 4826 ms | → 1.01x | 93 | 5m | 14h ago | 3h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.65% | 96.78% | 96.78% | 96.78% | 3652 ms | ↑ 1.25x | 10 | 1h 53m | 9h ago | 3h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.88% | 98.89% | 98.89% | 98.89% | 777 ms | ↓ 0.64x | 1 | 7h 40m | 2d ago | 3h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.61% | 95.16% | 69.24% | 69.24% | 1195 ms | ↓ 0.82x | 19 | 1h 28m | 1d ago | 3h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 94.58% | 97.13% | 91.07% | 91.07% | 2303 ms | ↓ 0.74x | 6 | 3h 5m | 8d ago | 3h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 93.10% | 98.17% | 98.52% | 98.52% | 1167 ms | ↑ 1.18x | 8 | 1h 20m | 4d ago | 3h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 92.08% | 86.65% | 10.49% | 10.49% | 2825 ms | ↓ 0.73x | 227 | 5m | 12h ago | 3h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 91.74% | 98.15% | 98.15% | 98.15% | 3250 ms | ↑ 1.15x | 1 | 13h 23m | 1d ago | 3h ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 91.38% | 91.38% | 91.38% | 91.38% | 582 ms | → 1.00x | 1 | 1h 20m | 11h ago | 3h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.32% | 89.12% | 44.70% | 44.70% | 3909 ms | ↑ 1.07x | 193 | 4m | 14h ago | 3h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.52% | 88.56% | 12.89% | 12.89% | 4746 ms | ↑ 1.09x | 192 | 6m | 14h ago | 3h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 89.39% | 83.53% | 91.42% | 91.42% | 2844 ms | ↑ 1.05x | 12 | 9h 50m | 7h ago | 3h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 88.94% | 36.96% | 29.36% | 29.36% | 980 ms | ↓ 0.92x | 3 | 6d 1h | 2d ago | 3h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 88.49% | 97.50% | 99.62% | 99.62% | 2770 ms | ↑ 1.22x | 6 | 2h 50m | 2d ago | 3h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 84.96% | 93.55% | 98.90% | 98.90% | 579 ms | ↓ 0.83x | 15 | 2h 55m | 11h ago | 3h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 83.51% | 96.14% | 95.86% | 95.86% | 1510 ms | ↓ 0.33x | 4 | 6h 47m | 6d ago | 3h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 77.87% | 59.94% | 75.61% | 75.61% | 608 ms | ↓ 0.30x | 3 | 4d 1h | 9d ago | 3h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 66.16% | 84.02% | 88.75% | 88.75% | 26 ms | ↓ 0.16x | 4 | 1d 5h | 10d ago | 3h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.09% | 69.97% | 15.75% | 15.75% | 4590 ms | ↑ 1.07x | 372 | 16m | 4h ago | 3h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 58.46% | 66.37% | 61.83% | 61.83% | 4853 ms | ↑ 1.06x | 400 | 17m | 4h ago | 3h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 57.54% | 82.27% | 29.11% | 29.11% | 1688 ms | ↓ 0.87x | 11 | 11h 25m | 8d ago | 3h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 44.59% | 9.68% | 7.96% | 7.96% | 3355 ms | → 1.00x | 25 | 1d 1h | 5h ago | 3h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 16.41% | 4.42% | 27.72% | 27.72% | 3269 ms | ↓ 0.91x | 15 | 1d 21h | 4h ago | 3h ago |

</details>

<details open>
<summary><strong>🔴 Down (213)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.86% | 99.40% | 96.35% | 96.35% | 1377 ms | ↓ 0.84x | 5 | 34m | 6h ago | 3h ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.83% | 99.10% | 99.10% | 99.10% | 1110 ms | ↓ 0.85x | 1 | 3h 12m | 6h ago | 3h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.43% | 96.01% | 72.38% | 72.38% | 4367 ms | → 0.97x | 76 | 3m | 3h ago | 3h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 95.01% | 98.87% | 94.18% | 94.18% | 1496 ms | ↓ 0.50x | 2 | 3h 46m | 11h ago | 3h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 92.58% | 91.95% | 78.83% | 78.83% | 135 ms | ↓ 0.69x | 8 | 6h 37m | 15h ago | 3h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 88.26% | 95.91% | 95.91% | 95.91% | 4708 ms | → 1.02x | 16 | 1h 2m | 19h ago | 3h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 87.58% | 94.71% | 65.89% | 65.89% | 4361 ms | ↑ 1.11x | 42 | 35m | 3h ago | 3h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 75.69% | 92.87% | 96.42% | 96.42% | 3500 ms | → 0.98x | 13 | 3h 44m | 2d ago | 3h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 62.96% | 91.00% | 50.76% | 50.76% | 2820 ms | → 1.00x | 23 | 2h 33m | 3d ago | 3h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 58.19% | 90.90% | 88.15% | 88.15% | 1137 ms | ↓ 0.69x | 2 | 1d 10h | 3d ago | 3h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 57.88% | 89.71% | 38.55% | 38.55% | 2250 ms | → 1.00x | 22 | 3h 19m | 3d ago | 3h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 52.49% | 87.99% | 90.86% | 90.86% | 1094 ms | ↓ 0.73x | 2 | 1d 22h | 3d ago | 3h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 50.87% | 79.41% | 79.41% | 79.41% | 1341 ms | ↓ 0.83x | 6 | 13h 48m | 4d ago | 3h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 47.73% | 88.63% | 27.65% | 27.65% | 322 ms | ↓ 0.28x | 1 | 3d 18h | 4d ago | 3h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 45.65% | 77.60% | 77.60% | 77.60% | 2971 ms | ↓ 0.93x | 1 | 3d 22h | 4d ago | 3h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 44.71% | 87.50% | 94.96% | 94.96% | 2392 ms | ↑ 1.15x | 7 | 13h 37m | 4d ago | 3h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 44.49% | 87.45% | 95.00% | 95.00% | 556 ms | ↓ 0.52x | 7 | 13h 40m | 4d ago | 3h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 35.65% | 84.45% | 84.45% | 84.45% | 2678 ms | ↓ 0.94x | 14 | 8h 4m | 5d ago | 3h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 35.22% | 73.30% | 73.30% | 73.30% | 1973 ms | → 0.98x | 2 | 2d 7h | 5d ago | 3h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 32.33% | 84.97% | 21.87% | 21.87% | 1602 ms | ↓ 0.93x | 6 | 19h 17m | 5d ago | 3h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 28.66% | 47.91% | 11.21% | 11.21% | 3942 ms | ↑ 1.16x | 433 | 33m | 3d ago | 3h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 19.78% | 66.58% | 66.58% | 66.58% | 817 ms | ↓ 0.76x | 5 | 1d 3h | 6d ago | 3h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 19.07% | 81.69% | 97.59% | 97.59% | 3057 ms | ↓ 0.89x | 16 | 8h 33m | 6d ago | 3h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 13.48% | 80.55% | 80.55% | 80.55% | 851 ms | ↓ 0.89x | 2 | 3d 1h | 6d ago | 3h ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 12.17% | 10.10% | 10.10% | 10.10% | 3153 ms | ↓ 0.86x | 106 | 3h 12m | 6h ago | 3h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 4.90% | 79.40% | 95.61% | 95.61% | 993 ms | ↓ 0.90x | 1 | 6d 16h | 7d ago | 3h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.85% | 30.00% | 4.31% | 4.31% | 3342 ms | ↑ 1.27x | 7 | 3d 2h | 4h ago | 3h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.64% | 7.95% | 63.88% | 63.88% | 2196 ms | ↑ 1.09x | 47 | 14h 8m | 2d ago | 3h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 87.11% | 87.11% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 72.14% | 72.14% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 77.57% | 77.57% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 25.54% | 73.76% | 73.76% | — | — | 1 | 22d 21h | 23d ago | 3h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.98% | 5.98% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 13.18% | 13.18% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 54.36% | 75.28% | 75.28% | — | — | 4 | 3d 13h | 12d ago | 3h ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.57% | 3.57% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 72.18% | 86.46% | 86.46% | — | — | 4 | 2d 5h | 9d ago | 3h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 87.38% | 87.38% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.35% | 38.35% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 52.85% | 71.01% | 71.01% | — | — | 3 | 4d 21h | 15d ago | 3h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.07% | 26.07% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 78.41% | 78.41% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 59.61% | 59.61% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 32.28% | 32.28% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 87.80% | 87.80% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 66.13% | 66.13% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 81.10% | 81.10% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.06% | 17.06% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 54.73% | 54.73% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 38.27% | 38.27% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.77% | 3.77% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 87.98% | 87.98% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.13% | 0.13% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 54.64% | 54.64% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.42% | 30.42% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.16% | 2.16% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 68.05% | 89.35% | 89.35% | — | — | 6 | 1d 16h | 10d ago | 3h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 52.27% | 52.27% | 52.27% | — | — | 1 | 8d 13h | 9d ago | 3h ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 73.09% | 71.96% | 71.96% | — | — | 3 | 2d 20h | 9d ago | 3h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 9.69% | 38.64% | 38.64% | — | — | 2 | 13d 10h | 27d ago | 3h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 57.50% | 57.50% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 26.58% | 26.58% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 31.52% | 31.52% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.13% | 0.13% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 60.25% | 60.25% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.24% | 6.24% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 69.32% | 69.32% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 87.74% | 87.74% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.43% | 8.43% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 83.76% | 83.76% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 26.59% | 86.45% | 86.45% | — | — | 3 | 7d 5h | 9d ago | 3h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 9h | 16d ago | 3h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 32.58% | 32.58% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.73% | 55.73% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 68.33% | 61.63% | 61.63% | — | — | 4 | 2d 12h | 10d ago | 3h ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 20.43% | 18.05% | 18.05% | — | — | 1 | 13d 3h | 13d ago | 3h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 72.32% | 82.64% | 82.64% | — | — | 2 | 4d 10h | 9d ago | 3h ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 80.75% | 80.75% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.22% | 49.22% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.74% | 44.74% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 87.75% | 87.75% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 61.97% | 61.97% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 41.17% | 41.17% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.98% | 33.98% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.73% | 2.73% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 72.05% | 87.98% | 87.98% | — | — | 4 | 2d 5h | 9d ago | 3h ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.99% | 43.99% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 87.70% | 87.70% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 35.16% | 35.16% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 87.63% | 87.63% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 56.97% | 73.57% | 73.57% | — | — | 2 | 6d 18h | 14d ago | 3h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 32.46% | 32.46% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 49.15% | 49.15% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 85.16% | 85.16% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 25.23% | 74.69% | 74.69% | — | — | 2 | 11d 6h | 22d ago | 3h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 54.85% | 39.84% | 39.84% | — | — | 8 | 1d 18h | 13d ago | 3h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 83.54% | 83.54% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 61.86% | 61.86% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.54% | 3.54% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.71% | 45.71% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 81.87% | 81.87% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 62.46% | 62.46% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 70.00% | 69.58% | 69.58% | — | — | 42 | 5h 6m | 9d ago | 3h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 56.40% | 78.00% | 78.00% | — | — | 56 | 5h 31m | 13d ago | 3h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 62.64% | 94.09% | 94.09% | — | — | 1 | 11d 20h | 12d ago | 3h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.96% | 29.96% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 13.81% | 13.81% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 14.38% | 14.38% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 26.73% | 36.15% | 36.15% | — | — | 5 | 4d 8h | 19d ago | 3h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.52% | 25.52% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 8h | 17d ago | 3h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 66.41% | 66.41% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 12.26% | 16.10% | 16.10% | — | — | 1 | 26d | 26d ago | 3h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.49% | 18.49% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.41% | 52.41% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 54.39% | 54.39% | 54.39% | — | — | 1 | 7d 16h | 8d ago | 3h ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 58.40% | 58.40% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 55.79% | 27.76% | 27.76% | — | — | 21 | 15h 30m | 14d ago | 3h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 46.44% | 46.44% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 9.56% | 60.96% | 60.96% | — | — | 2 | 13d 10h | 27d ago | 3h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.87% | 5.87% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 87.84% | 87.84% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 86.70% | 86.70% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 67.62% | 67.62% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 79.39% | 79.39% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 86.54% | 86.54% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.80% | 20.80% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 4.70% | 6.16% | 6.16% | — | — | 2 | 14d 7h | 29d ago | 3h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 36.27% | 36.27% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 72.28% | 72.28% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.47% | 8.47% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 69.54% | 69.54% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 71.59% | 71.59% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 60.94% | 64.28% | 64.28% | — | — | 13 | 22h 22m | 12d ago | 3h ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 11.35% | 11.35% | — | — | 1 | 16d 8h | 16d ago | 3h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 47.43% | 47.43% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.66% | 34.50% | 34.50% | — | — | 1 | 29d 18h | 30d ago | 3h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.78% | 14.78% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.02% | 19.02% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 26.22% | 23.20% | 23.20% | — | — | 1 | 22d 16h | 23d ago | 3h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 56.61% | 56.61% | 56.61% | — | — | 1 | 13d 4h | 13d ago | 3h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 20.12% | 20.12% | 20.12% | — | — | 8 | 1d 18h | 14d ago | 3h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.44% | 1.44% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.95% | 7.95% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 5.94% | 9.52% | 9.52% | — | — | 1 | 27d 22h | 28d ago | 3h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.87% | 52.87% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 87.81% | 87.81% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 57.82% | 57.82% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 6.70% | 87.99% | 87.99% | — | — | 3 | 9d 7h | 28d ago | 3h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 65.91% | 77.54% | 77.54% | — | — | 2 | 5d 9h | 11d ago | 3h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.84% | 43.84% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 4.21% | 4.21% | 4.21% | — | — | 1 | 16d 15h | 17d ago | 3h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 3h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 85.58% | 85.58% | — | — | 1 | 29d 21h | 30d ago | 3h ago |

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
