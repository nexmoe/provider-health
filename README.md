# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**603 providers** — 339 🟢 operational · 54 🟡 degraded · 210 🔴 down · 0 ⚫ unknown

_Updated 2026-05-21 06:56 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 97.02% | 97.02% | 1430 ms | ↓ 0.75x | 2 | 10m | 10d ago | 7m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.76% | 92.76% | 730 ms | ↓ 0.80x | 0 | — | — | 13m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.17% | 14.28% | 14.28% | 1690 ms | ↓ 0.84x | 2 | 6h 11m | 20d ago | 13m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.23% | 97.23% | 2194 ms | ↓ 0.79x | 0 | — | — | 24m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 46.05% | 46.05% | 1583 ms | ↓ 0.79x | 3 | 0s | 9d ago | 12m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.33% | 98.71% | 98.71% | 1597 ms | ↓ 0.74x | 21 | 14m | 19d ago | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.68% | 99.23% | 99.23% | 3457 ms | ↓ 0.92x | 7 | 0s | 25d ago | 26m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.53% | 93.19% | 93.19% | 1670 ms | ↓ 0.84x | 1 | 2h 59m | 18d ago | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1411 ms | ↓ 0.62x | 0 | — | — | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.76% | 91.76% | 1595 ms | ↓ 0.86x | 0 | — | — | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.92% | 99.92% | 99.92% | 1298 ms | ↓ 0.86x | 1 | 0s | 7d ago | 6m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.91% | 96.35% | 96.35% | 2635 ms | → 1.03x | 2 | 0s | 19d ago | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 428 ms | → 1.00x | 0 | — | — | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.15% | 98.15% | 934 ms | ↓ 0.81x | 3 | 0s | 13d ago | 10m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 94.08% | 94.08% | 94.08% | 986 ms | ↓ 0.92x | 1 | 1d 1h | 14d ago | 6m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 98.01% | 98.01% | 98.01% | 672 ms | ↓ 0.61x | 1 | 13h 57m | 28d ago | 6m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 76.28% | 32.04% | 32.04% | 500 ms | ↓ 0.87x | 3 | 2d 9h | 22d ago | 20m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 804 ms | ↓ 0.87x | 2 | 9m | 9d ago | 9m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 96.33% | 96.33% | 2172 ms | → 1.00x | 1 | 1h 40m | 17d ago | 12m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.79% | 98.79% | 585 ms | ↓ 0.73x | 1 | 0s | 18d ago | 23m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 419 ms | ↓ 0.66x | 0 | — | — | 5m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 95.93% | 95.93% | 486 ms | ↓ 0.73x | 0 | — | — | 11m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1614 ms | ↓ 0.85x | 0 | — | — | 6m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.86% | 97.89% | 97.89% | 2247 ms | ↓ 0.90x | 2 | 9m | 25d ago | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.03% | 97.03% | 170 ms | ↓ 0.30x | 0 | — | — | 7m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.31% | 80.52% | 80.52% | 1072 ms | ↓ 0.62x | 6 | 5h 21m | 22d ago | 10m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 948 ms | ↓ 0.72x | 0 | — | — | 5m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.72% | 97.20% | 97.20% | 933 ms | ↓ 0.56x | 2 | 40m | 23d ago | 12m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 439 ms | ↓ 0.82x | 0 | — | — | 21m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2676 ms | ↓ 0.82x | 1 | 0s | 13d ago | 21m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.95% | 98.78% | 98.78% | 170 ms | ↓ 0.11x | 1 | 0s | 28d ago | 11m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.72% | 99.78% | 99.78% | 1626 ms | ↓ 0.80x | 4 | 10m | 17d ago | 11m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 56.25% | 10.64% | 10.64% | 2590 ms | → 1.02x | 7 | 1d 18h | 10d ago | 19m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.33% | 95.33% | 1260 ms | ↓ 0.66x | 0 | — | — | 11m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.59% | 81.91% | 81.91% | 1511 ms | ↓ 0.89x | 2 | 4d 1h | 17d ago | 9m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.83% | 99.83% | 3753 ms | ↑ 1.55x | 2 | 0s | 7d ago | 5m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1706 ms | ↓ 0.89x | 0 | — | — | 21m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.91% | 99.84% | 99.84% | 3769 ms | → 1.04x | 2 | 0s | 17d ago | 19m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.54% | 99.38% | 99.38% | 3143 ms | ↑ 1.09x | 4 | 2h 15m | 9d ago | 11m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.77% | 24.11% | 24.11% | 937 ms | ↓ 0.62x | 5 | 0s | 18d ago | 21m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.29% | 95.29% | 95.29% | 1910 ms | ↑ 1.24x | 2 | 2h 9m | 9d ago | 9m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 976 ms | ↓ 0.83x | 0 | — | — | 5m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1084 ms | ↑ 1.09x | 0 | — | — | 6m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.84% | 99.84% | 99.84% | 481 ms | → 1.00x | 2 | 0s | 11d ago | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.01% | 96.01% | 863 ms | ↓ 0.75x | 1 | 0s | 19d ago | 12m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.66% | 99.66% | 99.66% | 1385 ms | ↓ 0.94x | 2 | 19m | 8d ago | 5m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 50.63% | 50.63% | 763 ms | → 1.02x | 0 | — | — | 13m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.41% | 99.41% | 99.41% | 2487 ms | ↓ 0.88x | 5 | 9m | 8d ago | 6m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 927 ms | ↓ 0.73x | 0 | — | — | 5m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.60% | 99.60% | 2476 ms | → 0.96x | 0 | — | — | 20m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.95% | 96.91% | 96.91% | 1103 ms | ↓ 0.75x | 1 | 0s | 27d ago | 20m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.92% | 98.58% | 98.58% | 1010 ms | ↓ 0.90x | 1 | 0s | 12d ago | 7m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 80.83% | 80.83% | 1790 ms | ↓ 0.81x | 1 | 0s | 26d ago | 13m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.95% | 62.42% | 62.42% | 1411 ms | → 0.98x | 1 | 0s | 29d ago | 13m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 886 ms | ↓ 0.87x | 0 | — | — | 6m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.29% | 98.29% | 1659 ms | ↓ 0.74x | 0 | — | — | 11m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2821 ms | ↓ 0.58x | 0 | — | — | 5m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.17% | 92.17% | 920 ms | ↓ 0.83x | 0 | — | — | 13m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.14% | 98.14% | 673 ms | ↓ 0.72x | 0 | — | — | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.56% | 98.56% | 98.56% | 1834 ms | ↓ 0.90x | 12 | 10m | 17d ago | 7m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.62% | 66.74% | 66.74% | 2134 ms | ↑ 1.08x | 8 | 0s | 19d ago | 10m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1440 ms | ↓ 0.80x | 0 | — | — | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 97.68% | 89.52% | 89.52% | 1558 ms | ↓ 0.74x | 14 | 23m | 17d ago | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.36% | 97.36% | 3062 ms | ↑ 1.11x | 5 | 0s | 9d ago | 11m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 42.73% | 42.73% | 805 ms | ↓ 0.94x | 0 | — | — | 13m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.04% | 73.04% | 764 ms | ↓ 0.79x | 1 | 0s | 7d ago | 13m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.94% | 51.16% | 51.16% | 1353 ms | ↓ 0.77x | 7 | 59m | 23d ago | 21m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.80% | 97.80% | 2185 ms | ↓ 0.90x | 0 | — | — | 12m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.91% | 48.41% | 48.41% | 1080 ms | ↓ 0.89x | 1 | 19m | 29d ago | 13m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.21% | 40.21% | 1032 ms | ↓ 0.71x | 0 | — | — | 21m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1150 ms | ↓ 0.70x | 0 | — | — | 5m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.97% | 57.47% | 57.47% | 789 ms | ↓ 0.79x | 11 | 20m | 18d ago | 13m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.76% | 99.76% | 99.76% | 1453 ms | → 1.03x | 2 | 10m | 9d ago | 6m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.72% | 99.72% | 99.72% | 3010 ms | ↓ 0.93x | 6 | 0s | 8d ago | 19m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.95% | 59.56% | 59.56% | 933 ms | ↓ 0.79x | 1 | 0s | 30d ago | 13m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1918 ms | ↓ 0.87x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.12% | 99.12% | 1337 ms | ↓ 0.89x | 0 | — | — | 13m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.59% | 88.59% | 2125 ms | ↓ 0.93x | 1 | 0s | 8d ago | 13m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 81.03% | 81.03% | 550 ms | ↓ 0.89x | 0 | — | — | 7m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.67% | 99.76% | 99.76% | 2336 ms | → 0.99x | 7 | 0s | 17d ago | 11m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.53% | 99.53% | 767 ms | ↓ 0.64x | 1 | 0s | 10d ago | 13m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.87% | 97.87% | 1908 ms | ↑ 1.08x | 0 | — | — | 13m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.86% | 12.48% | 12.48% | 1359 ms | ↓ 0.91x | 3 | 0s | 16d ago | 20m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1231 ms | ↓ 0.85x | 0 | — | — | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.77% | 98.97% | 98.97% | 2076 ms | ↓ 0.94x | 2 | 30m | 16d ago | 25m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.01% | 98.01% | 2902 ms | ↓ 0.79x | 0 | — | — | 26m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 69.73% | 69.73% | 2696 ms | ↓ 0.86x | 0 | — | — | 12m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 641 ms | ↓ 0.90x | 1 | 0s | 15d ago | 6m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.95% | 99.95% | 1222 ms | ↓ 0.84x | 3 | 0s | 26d ago | 26m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.58% | 87.78% | 87.78% | 2065 ms | ↑ 1.13x | 7 | 6m | 13d ago | 13m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 95.33% | 73.05% | 73.05% | 2065 ms | ↓ 0.88x | 2 | 16h 45m | 28d ago | 11m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.63% | 99.70% | 99.70% | 412 ms | ↓ 0.87x | 8 | 0s | 13d ago | 25m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 944 ms | ↓ 0.82x | 0 | — | — | 5m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 77.91% | 77.91% | 1631 ms | ↑ 1.08x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1371 ms | ↓ 0.88x | 0 | — | — | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 996 ms | ↓ 0.85x | 0 | — | — | 9m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.96% | 98.96% | 392 ms | ↓ 0.66x | 0 | — | — | 13m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.51% | 98.51% | 1953 ms | ↑ 1.12x | 0 | — | — | 12m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.29% | 96.29% | 390 ms | ↓ 0.37x | 0 | — | — | 9m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 849 ms | ↓ 0.85x | 0 | — | — | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 564 ms | ↓ 0.55x | 0 | — | — | 5m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1318 ms | ↓ 0.78x | 0 | — | — | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 97.88% | 94.90% | 94.90% | 1194 ms | ↓ 0.70x | 12 | 23m | 16d ago | 7m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.66% | 99.66% | 99.66% | 2353 ms | ↓ 0.90x | 3 | 7m | 9d ago | 6m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.20% | 96.06% | 96.06% | 245 ms | ↓ 0.42x | 15 | 3m | 18d ago | 7m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.56% | 98.56% | 166 ms | ↓ 0.42x | 0 | — | — | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.91% | 98.89% | 98.89% | 776 ms | ↓ 0.71x | 2 | 0s | 24d ago | 14m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 12.37% | 12.37% | 2649 ms | ↓ 0.92x | 1 | 0s | 17d ago | 19m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 868 ms | ↓ 0.88x | 0 | — | — | 5m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 15.98% | 15.98% | 1034 ms | ↓ 0.79x | 0 | — | — | 13m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 542 ms | ↓ 0.77x | 0 | — | — | 27m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.34% | 99.13% | 99.13% | 170 ms | ↓ 0.87x | 10 | 14m | 7d ago | 11m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.93% | 99.93% | 589 ms | ↓ 0.52x | 0 | — | — | 24m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 96.91% | 96.91% | 1274 ms | ↓ 0.87x | 0 | — | — | 7m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.12% | 99.72% | 99.72% | 2445 ms | ↓ 0.87x | 4 | 1h 15m | 15d ago | 25m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.75% | 97.75% | 2277 ms | ↑ 1.27x | 0 | — | — | 13m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.62% | 12.47% | 12.47% | 2424 ms | ↑ 1.19x | 5 | 12m | 10d ago | 13m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.74% | 99.74% | 1315 ms | ↓ 0.91x | 2 | 20m | 13d ago | 14m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1195 ms | ↓ 0.92x | 0 | — | — | 6m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.62% | 98.62% | 4142 ms | → 0.99x | 0 | — | — | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 60.01% | 82.32% | 82.32% | 757 ms | ↓ 0.62x | 1 | 11d 5h | 30d ago | 11m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2616 ms | ↑ 1.11x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1185 ms | ↓ 0.85x | 0 | — | — | 6m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2453 ms | ↑ 1.15x | 1 | 0s | 13d ago | 20m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.91% | 99.30% | 99.30% | 1724 ms | ↓ 0.90x | 2 | 0s | 12d ago | 13m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 36.85% | 36.85% | 602 ms | ↓ 0.95x | 0 | — | — | 25m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.20% | 98.20% | 3885 ms | ↑ 1.23x | 0 | — | — | 12m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1004 ms | ↓ 0.91x | 1 | 0s | 7d ago | 24m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.83% | 99.83% | 1346 ms | → 1.02x | 0 | — | — | 12m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1160 ms | ↓ 0.77x | 1 | 0s | 14d ago | 20m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 1834 ms | → 0.95x | 0 | — | — | 13m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.84% | 99.84% | 99.84% | 1747 ms | ↓ 0.83x | 25 | 0s | 17d ago | 25m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.47% | 99.47% | 1687 ms | ↑ 1.18x | 0 | — | — | 9m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.95% | 88.81% | 88.81% | 1207 ms | ↑ 1.18x | 1 | 0s | 27d ago | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.59% | 99.59% | 1439 ms | → 1.02x | 0 | — | — | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.78% | 95.80% | 95.80% | 2530 ms | → 0.96x | 1 | 4h 31m | 25d ago | 12m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 294 ms | ↓ 0.71x | 0 | — | — | 5m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.74% | 99.74% | 1663 ms | ↓ 0.94x | 1 | 0s | 26d ago | 25m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 44.79% | 35.82% | 35.82% | 3631 ms | → 1.03x | 2 | 7d 20h | 27d ago | 14m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.31% | 88.31% | 941 ms | ↓ 0.69x | 1 | 0s | 18d ago | 24m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 14.43% | 14.43% | 1590 ms | ↓ 0.88x | 0 | — | — | 13m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 100.00% | 98.80% | 98.80% | 2498 ms | ↑ 1.25x | 0 | — | — | 12m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.68% | 78.52% | 78.52% | 1700 ms | ↓ 0.83x | 2 | 50m | 18d ago | 26m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 69.19% | 69.19% | 69.19% | 1070 ms | ↓ 0.94x | 1 | 5d 5h | 14d ago | 6m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1180 ms | ↓ 0.90x | 0 | — | — | 25m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 1008 ms | ↓ 0.79x | 0 | — | — | 25m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 786 ms | ↓ 0.62x | 0 | — | — | 5m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 681 ms | ↓ 0.65x | 1 | 0s | 15d ago | 9m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.96% | 98.96% | 1608 ms | ↓ 0.83x | 0 | — | — | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 97.89% | 97.89% | 1135 ms | ↓ 0.79x | 0 | — | — | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.50% | 97.50% | 2566 ms | → 1.05x | 0 | — | — | 9m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.86% | 12.46% | 12.46% | 1147 ms | → 0.98x | 3 | 0s | 19d ago | 24m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.01% | 66.01% | 868 ms | ↓ 0.84x | 0 | — | — | 13m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.95% | 78.04% | 78.04% | 1625 ms | ↓ 0.80x | 1 | 0s | 26d ago | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1240 ms | ↓ 0.81x | 0 | — | — | 24m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.68% | 99.68% | 1928 ms | ↓ 0.91x | 0 | — | — | 25m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2342 ms | ↓ 0.92x | 0 | — | — | 6m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 100.00% | 99.86% | 99.86% | 953 ms | ↓ 0.89x | 0 | — | — | 14m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.44% | 84.20% | 84.20% | 1160 ms | → 0.98x | 12 | 0s | 17d ago | 25m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.62% | 40.72% | 40.72% | 636 ms | ↓ 0.69x | 4 | 7h 27m | 13d ago | 11m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.72% | 84.27% | 84.27% | 103 ms | ↓ 0.37x | 6 | 0s | 24d ago | 24m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.20% | 99.20% | 1870 ms | → 0.96x | 0 | — | — | 13m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 95.82% | 98.79% | 98.79% | 2376 ms | ↓ 0.80x | 69 | 6m | 9d ago | 26m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 63.76% | 63.76% | 353 ms | ↓ 0.33x | 0 | — | — | 13m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.32% | 96.32% | 1005 ms | → 0.96x | 0 | — | — | 13m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.84% | 99.84% | 99.84% | 855 ms | ↓ 0.68x | 2 | 0s | 9d ago | 5m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.81% | 14.31% | 14.31% | 950 ms | ↓ 0.86x | 4 | 0s | 15d ago | 20m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1895 ms | ↓ 0.80x | 1 | 0s | 19d ago | 25m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 98.98% | 98.98% | 98.98% | 1193 ms | ↓ 0.88x | 1 | 3h 38m | 9d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.12% | 91.18% | 91.18% | 2238 ms | ↓ 0.75x | 6 | 3h 5m | 9d ago | 11m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 98.09% | 99.18% | 99.18% | 3454 ms | ↑ 1.21x | 12 | 50m | 10d ago | 23m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 53.93% | 53.93% | 497 ms | ↓ 0.54x | 0 | — | — | 13m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 100.00% | 98.28% | 98.28% | 1405 ms | → 1.03x | 0 | — | — | 12m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.81% | 97.99% | 97.99% | 1461 ms | ↓ 0.70x | 4 | 0s | 14d ago | 11m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 31.79% | 31.79% | 2010 ms | ↓ 0.86x | 1 | 0s | 20d ago | 13m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.73% | 99.73% | 2761 ms | ↑ 1.16x | 0 | — | — | 25m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 1896 ms | → 1.02x | 0 | — | — | 12m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 49.19% | 49.19% | 3681 ms | → 0.99x | 0 | — | — | 12m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.91% | 99.13% | 99.13% | 2068 ms | → 0.98x | 2 | 0s | 19d ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.30% | 98.30% | 98.30% | 1476 ms | ↑ 1.20x | 1 | 11h 52m | 21d ago | 6m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.72% | 76.84% | 76.84% | 1176 ms | ↑ 1.12x | 1 | 1h 39m | 21d ago | 13m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 187 ms | → 1.01x | 0 | — | — | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.91% | 99.90% | 99.90% | 1395 ms | ↓ 0.76x | 2 | 0s | 18d ago | 24m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 791 ms | → 1.00x | 0 | — | — | 6m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1737 ms | ↓ 0.87x | 0 | — | — | 20m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.91% | 77.11% | 77.11% | 1788 ms | ↓ 0.88x | 2 | 0s | 8d ago | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.50% | 84.50% | 1795 ms | ↑ 1.16x | 0 | — | — | 13m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 820 ms | ↓ 0.94x | 1 | 0s | 11d ago | 6m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.77% | 95.77% | 789 ms | ↓ 0.84x | 0 | — | — | 13m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 896 ms | ↓ 0.90x | 0 | — | — | 24m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.25% | 98.25% | 437 ms | ↓ 0.52x | 1 | 0s | 12d ago | 11m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 14.80% | 14.80% | 703 ms | ↓ 0.51x | 0 | — | — | 13m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.81% | 96.26% | 96.26% | 1551 ms | → 0.95x | 3 | 6m | 9d ago | 9m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1429 ms | → 1.04x | 0 | — | — | 5m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.93% | 99.93% | 727 ms | ↓ 0.94x | 0 | — | — | 11m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.20% | 57.20% | 1744 ms | ↓ 0.88x | 0 | — | — | 13m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.78% | 99.78% | 2474 ms | ↓ 0.91x | 1 | 0s | 26d ago | 24m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 100.00% | 63.04% | 63.04% | 818 ms | ↓ 0.86x | 0 | — | — | 26m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 12.44% | 12.44% | 801 ms | ↓ 0.90x | 0 | — | — | 24m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 909 ms | → 0.95x | 0 | — | — | 6m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.20% | 99.20% | 99.20% | 1065 ms | ↓ 0.70x | 1 | 3h 45m | 26d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1410 ms | ↓ 0.66x | 1 | 0s | 18d ago | 7m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1102 ms | ↓ 0.83x | 0 | — | — | 6m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 92.91% | 92.91% | 3030 ms | ↓ 0.89x | 0 | — | — | 25m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.81% | 99.48% | 99.48% | 1608 ms | ↓ 0.79x | 3 | 7m | 7d ago | 24m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 2028 ms | → 0.97x | 0 | — | — | 13m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.62% | 98.66% | 98.66% | 1821 ms | ↓ 0.91x | 8 | 0s | 18d ago | 11m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.81% | 98.81% | 98.81% | 850 ms | ↓ 0.65x | 10 | 8m | 17d ago | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.95% | 99.05% | 99.05% | 1003 ms | ↑ 1.10x | 1 | 0s | 27d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 85.23% | 86.73% | 86.73% | 1854 ms | ↑ 1.12x | 11 | 9h 31m | 14d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.83% | 99.83% | 99.83% | 1687 ms | ↓ 0.89x | 1 | 20m | 16d ago | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 97.26% | 29.96% | 29.96% | 1437 ms | ↓ 0.68x | 2 | 9h 20m | 29d ago | 25m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.42% | 99.42% | 823 ms | ↓ 0.65x | 0 | — | — | 24m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 100.00% | 31.49% | 3.68% | 3.68% | 1738 ms | → 0.96x | 2 | 9d 21h | 10d ago | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 395 ms | ↓ 0.59x | 0 | — | — | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.70% | 58.83% | 58.83% | 2646 ms | ↓ 0.93x | 26 | 2m | 15d ago | 25m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.63% | 91.52% | 91.52% | 927 ms | ↓ 0.70x | 1 | 2h 20m | 21d ago | 24m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.13% | 98.13% | 2212 ms | ↓ 0.93x | 0 | — | — | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.21% | 96.45% | 96.45% | 2348 ms | ↓ 0.90x | 11 | 11m | 21d ago | 25m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1519 ms | → 1.00x | 0 | — | — | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.15% | 99.16% | 99.16% | 1260 ms | ↓ 0.82x | 8 | 5m | 9d ago | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.76% | 99.76% | 520 ms | ↓ 0.45x | 0 | — | — | 9m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.28% | 86.28% | 1436 ms | → 0.99x | 0 | — | — | 12m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.74% | 99.74% | 854 ms | ↓ 0.68x | 1 | 0s | 18d ago | 9m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1343 ms | → 0.98x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 941 ms | → 0.99x | 0 | — | — | 25m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 361 ms | ↓ 0.56x | 0 | — | — | 5m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 867 ms | ↓ 0.93x | 0 | — | — | 25m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.76% | 68.46% | 68.46% | 1148 ms | ↑ 1.14x | 5 | 0s | 18d ago | 12m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2488 ms | ↑ 1.06x | 1 | 0s | 25d ago | 21m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 709 ms | → 1.00x | 0 | — | — | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.91% | 83.29% | 83.29% | 1639 ms | ↓ 0.86x | 2 | 0s | 17d ago | 20m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.71% | 98.71% | 1700 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.58% | 91.58% | 3438 ms | ↓ 0.89x | 0 | — | — | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.91% | 99.91% | 99.91% | 599 ms | ↓ 0.73x | 1 | 0s | 16d ago | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 263 ms | ↓ 0.55x | 0 | — | — | 5m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.21% | 95.85% | 95.85% | 662 ms | ↓ 0.37x | 3 | 1h 21m | 21d ago | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.66% | 98.66% | 415 ms | ↓ 0.92x | 0 | — | — | 13m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.25% | 98.62% | 98.62% | 2968 ms | ↑ 1.07x | 5 | 48m | 11d ago | 23m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.72% | 99.72% | 99.72% | 3397 ms | ↑ 1.09x | 6 | 0s | 9d ago | 11m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 380 ms | ↓ 0.83x | 0 | — | — | 6m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 722 ms | ↓ 0.68x | 0 | — | — | 12m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.00% | 98.00% | 1532 ms | ↓ 0.94x | 0 | — | — | 12m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1270 ms | ↓ 0.76x | 0 | — | — | 23m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 86.72% | 86.72% | 2355 ms | → 0.98x | 1 | 0s | 26d ago | 13m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 93.09% | 96.30% | 96.30% | 1758 ms | ↓ 0.92x | 3 | 16h 35m | 24d ago | 13m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1719 ms | ↓ 0.84x | 0 | — | — | 23m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.86% | 12.44% | 12.44% | 1775 ms | ↓ 0.84x | 3 | 0s | 10d ago | 25m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 648 ms | ↓ 0.59x | 0 | — | — | 6m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.67% | 95.90% | 95.90% | 1220 ms | ↓ 0.81x | 2 | 51m | 13d ago | 9m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.91% | 99.84% | 99.84% | 1964 ms | ↓ 0.88x | 1 | 20m | 28d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.93% | 99.93% | 721 ms | ↓ 0.85x | 1 | 0s | 19d ago | 24m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.95% | 14.49% | 14.49% | 1909 ms | ↓ 0.90x | 1 | 0s | 28d ago | 13m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.76% | 12.27% | 12.27% | 1248 ms | ↓ 0.85x | 5 | 0s | 18d ago | 13m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.95% | 99.89% | 99.89% | 2415 ms | ↑ 1.12x | 1 | 0s | 25d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.73% | 95.47% | 95.47% | 1295 ms | → 1.02x | 1 | 8h 38m | 9d ago | 9m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2696 ms | ↓ 0.94x | 0 | — | — | 6m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2509 ms | ↑ 1.06x | 0 | — | — | 11m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.26% | 99.89% | 99.89% | 1254 ms | ↓ 0.93x | 3 | 1h 27m | 24d ago | 25m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.73% | 99.73% | 2271 ms | ↑ 1.18x | 0 | — | — | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.05% | 98.05% | 945 ms | ↓ 0.76x | 0 | — | — | 9m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.86% | 99.79% | 99.79% | 1829 ms | ↓ 0.89x | 3 | 0s | 8d ago | 20m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 2049 ms | ↑ 1.27x | 0 | — | — | 13m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.06% | 99.06% | 1055 ms | ↓ 0.84x | 0 | — | — | 25m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 86.24% | 35.22% | 35.22% | 1003 ms | ↓ 0.57x | 20 | 4h 39m | 9d ago | 11m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 324 ms | ↓ 0.55x | 0 | — | — | 24m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.78% | 99.07% | 99.84% | 99.84% | 2901 ms | ↓ 0.79x | 20 | 0s | 3d ago | 26m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.78% | 99.95% | 99.70% | 99.70% | 2870 ms | ↑ 1.15x | 1 | 0s | 7d ago | 26m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.78% | 99.95% | 99.83% | 99.83% | 1863 ms | ↑ 1.59x | 1 | 0s | 4d ago | 25m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.78% | 99.95% | 99.49% | 99.49% | 2574 ms | ↓ 0.94x | 1 | 0s | 1d ago | 25m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.78% | 99.16% | 99.46% | 99.46% | 2562 ms | ↓ 0.82x | 17 | 1m | 3d ago | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.78% | 99.95% | 99.54% | 99.54% | 1272 ms | ↓ 0.85x | 1 | 0s | 14h ago | 25m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.78% | 99.81% | 18.20% | 18.20% | 1666 ms | ↓ 0.86x | 4 | 0s | 6d ago | 27m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.78% | 98.74% | 91.89% | 91.89% | 942 ms | ↓ 0.94x | 5 | 1h 28m | 6d ago | 25m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.78% | 98.98% | 97.71% | 97.71% | 3548 ms | → 1.02x | 22 | 0s | 7d ago | 25m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.78% | 99.91% | 99.60% | 99.60% | 1440 ms | ↓ 0.83x | 2 | 0s | 2d ago | 24m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.78% | 98.09% | 98.99% | 98.99% | 3546 ms | → 0.97x | 13 | 45m | 18h ago | 23m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.78% | 99.91% | 23.71% | 23.71% | 706 ms | ↓ 0.86x | 2 | 0s | 3d ago | 23m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.78% | 99.44% | 97.68% | 97.68% | 3002 ms | → 0.97x | 10 | 4m | 2d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.78% | 99.95% | 98.03% | 98.03% | 1994 ms | → 1.04x | 1 | 0s | 3d ago | 21m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.78% | 99.39% | 68.84% | 68.84% | 1058 ms | ↓ 0.92x | 10 | 6m | 1d ago | 13m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 99.78% | 99.95% | 48.11% | 48.11% | 523 ms | ↓ 0.82x | 1 | 0s | 3d ago | 13m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.78% | 99.91% | 79.53% | 79.53% | 1327 ms | ↓ 0.77x | 2 | 0s | 6d ago | 13m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.78% | 99.95% | 97.86% | 97.86% | 754 ms | ↓ 0.50x | 1 | 0s | 5d ago | 13m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.78% | 99.81% | 56.07% | 56.07% | 1622 ms | ↓ 0.89x | 4 | 0s | 2d ago | 13m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.78% | 99.86% | 57.05% | 57.05% | 803 ms | ↓ 0.76x | 3 | 0s | 5d ago | 13m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.78% | 99.95% | 14.68% | 14.68% | 2325 ms | ↑ 1.28x | 1 | 0s | 4d ago | 13m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.78% | 95.48% | 63.89% | 63.89% | 619 ms | ↓ 0.74x | 9 | 3h 9m | 4d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.78% | 98.21% | 89.36% | 89.36% | 3352 ms | ↑ 1.15x | 31 | 5m | 2d ago | 11m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.78% | 99.44% | 96.50% | 96.50% | 4086 ms | ↑ 1.11x | 5 | 28m | 3d ago | 13m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.78% | 99.95% | 99.81% | 99.81% | 894 ms | ↓ 0.63x | 1 | 0s | 6d ago | 9m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.78% | 99.91% | 96.02% | 96.02% | 1350 ms | → 1.02x | 2 | 0s | 6d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.78% | 99.76% | 99.84% | 99.84% | 1056 ms | ↓ 0.71x | 3 | 13m | 3d ago | 9m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.78% | 99.67% | 99.61% | 99.61% | 956 ms | ↑ 1.10x | 6 | 3m | 7d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.78% | 99.76% | 98.95% | 98.95% | 1244 ms | ↓ 0.94x | 4 | 2m | 6d ago | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.78% | 99.81% | 99.83% | 99.83% | 189 ms | ↓ 0.38x | 4 | 0s | 3d ago | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.78% | 99.43% | 98.00% | 98.00% | 2146 ms | → 0.97x | 11 | 2m | 3d ago | 11m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.78% | 99.81% | 31.84% | 31.84% | 192 ms | ↓ 0.85x | 4 | 0s | 4d ago | 12m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.78% | 99.58% | 88.86% | 88.86% | 515 ms | ↓ 0.23x | 8 | 2m | 6d ago | 11m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.78% | 99.91% | 97.35% | 97.35% | 1279 ms | ↓ 0.94x | 2 | 0s | 2h ago | 9m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.78% | 99.81% | 97.30% | 97.30% | 2139 ms | → 1.03x | 3 | 6m | 1d ago | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.78% | 98.87% | 89.97% | 89.97% | 1754 ms | ↑ 1.07x | 24 | 0s | 4d ago | 13m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.78% | 99.92% | 99.92% | 99.92% | 2011 ms | ↑ 1.08x | 1 | 0s | 3d ago | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.78% | 99.62% | 99.62% | 99.62% | 1244 ms | ↓ 0.72x | 5 | 12m | 2d ago | 6m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.78% | 98.47% | 98.47% | 98.47% | 1815 ms | ↓ 0.88x | 12 | 10m | 3d ago | 6m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.78% | 98.05% | 98.05% | 98.05% | 1433 ms | ↓ 0.86x | 12 | 18m | 2d ago | 7m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.78% | 98.05% | 98.05% | 98.05% | 1261 ms | ↓ 0.68x | 12 | 18m | 2d ago | 7m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.78% | 98.30% | 98.30% | 98.30% | 984 ms | ↓ 0.55x | 3 | 3h 43m | 3d ago | 6m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.78% | 94.74% | 94.74% | 94.74% | 688 ms | → 1.03x | 5 | 4h 10m | 7d ago | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.56% | 89.23% | 95.71% | 95.71% | 2988 ms | ↓ 0.87x | 113 | 21m | 2d ago | 26m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.56% | 99.81% | 99.19% | 99.19% | 1158 ms | ↓ 0.86x | 4 | 0s | 5d ago | 24m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.56% | 97.91% | 98.67% | 98.67% | 3055 ms | → 0.95x | 39 | 4m | 3d ago | 24m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.56% | 95.04% | 77.54% | 77.54% | 1806 ms | ↓ 0.92x | 83 | 6m | 2d ago | 20m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.56% | 99.49% | 98.98% | 98.98% | 1566 ms | ↓ 0.85x | 10 | 2m | 3d ago | 20m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.56% | 98.60% | 99.41% | 99.41% | 2754 ms | ↓ 0.94x | 19 | 12m | 2d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.56% | 99.91% | 99.17% | 99.17% | 3093 ms | → 0.99x | 2 | 0s | 5d ago | 19m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.55% | 99.86% | 15.31% | 15.31% | 864 ms | ↓ 0.57x | 3 | 0s | 2d ago | 13m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.55% | 76.60% | 91.22% | 91.22% | 1482 ms | ↑ 1.08x | 4 | 1d 13h | 6d ago | 12m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.55% | 98.30% | 98.30% | 98.30% | 1298 ms | ↓ 0.81x | 12 | 13m | 2d ago | 7m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.55% | 99.84% | 99.84% | 99.84% | 886 ms | ↓ 0.87x | 2 | 0s | 28m ago | 6m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.55% | 99.52% | 99.52% | 99.52% | 1373 ms | → 1.01x | 6 | 0s | 3d ago | 6m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.34% | 99.81% | 99.71% | 99.71% | 2031 ms | ↓ 0.85x | 4 | 0s | 15h ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.34% | 99.81% | 99.64% | 99.64% | 988 ms | ↓ 0.91x | 3 | 7m | 3d ago | 24m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.33% | 99.81% | 13.01% | 13.01% | 1078 ms | ↓ 0.85x | 4 | 0s | 2d ago | 13m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.33% | 99.86% | 88.38% | 88.38% | 360 ms | → 1.02x | 3 | 0s | 12h ago | 9m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.33% | 97.78% | 97.38% | 97.38% | 1458 ms | → 1.02x | 3 | 4h 53m | 3d ago | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.33% | 99.53% | 89.04% | 89.04% | 716 ms | ↓ 0.65x | 5 | 23m | 3d ago | 9m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.33% | 99.62% | 91.02% | 91.02% | 2508 ms | ↓ 0.81x | 6 | 6m | 2d ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.33% | 97.79% | 97.79% | 97.79% | 2265 ms | ↓ 0.90x | 13 | 22m | 3d ago | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.33% | 99.58% | 96.62% | 96.62% | 1829 ms | ↓ 0.86x | 9 | 0s | 3d ago | 7m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.12% | 99.63% | 99.71% | 99.71% | 472 ms | → 1.03x | 5 | 14m | 5d ago | 25m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.12% | 77.02% | 86.33% | 86.33% | 1147 ms | ↓ 0.76x | 7 | 20h 36m | 2d ago | 24m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.12% | 99.77% | 99.89% | 99.89% | 649 ms | ↓ 0.73x | 3 | 17m | 5d ago | 24m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.12% | 95.46% | 11.97% | 11.97% | 3711 ms | → 1.01x | 65 | 10m | 19h ago | 19m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.12% | 99.81% | 99.92% | 99.92% | 761 ms | ↓ 0.83x | 1 | 1h 16m | 2d ago | 21m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.11% | 95.86% | 97.28% | 97.28% | 2032 ms | ↑ 1.50x | 7 | 4h 1m | 4d ago | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.11% | 97.56% | 85.18% | 85.18% | 4585 ms | → 1.04x | 47 | 2m | 1d ago | 13m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.11% | 98.63% | 83.77% | 83.77% | 602 ms | ↓ 0.32x | 7 | 1h 6m | 15h ago | 11m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.11% | 99.76% | 95.25% | 95.25% | 422 ms | ↓ 0.41x | 2 | 31m | 6d ago | 9m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (54)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.90% | 94.25% | 84.11% | 84.11% | 4485 ms | → 1.00x | 46 | 34m | 20h ago | 26m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.90% | 99.72% | 99.85% | 99.85% | 147 ms | ↓ 0.21x | 4 | 15m | 16h ago | 24m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.89% | 97.55% | 62.03% | 62.03% | 4754 ms | → 1.02x | 47 | 3m | 23h ago | 13m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.88% | 99.76% | 97.17% | 97.17% | 1859 ms | ↓ 0.68x | 2 | 30m | 2d ago | 12m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.88% | 96.98% | 51.66% | 51.66% | 1231 ms | ↓ 0.87x | 25 | 32m | 2d ago | 11m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 98.68% | 92.09% | 11.53% | 11.53% | 819 ms | ↓ 0.85x | 87 | 20m | 1d ago | 24m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.67% | 94.71% | 98.67% | 98.67% | 3666 ms | → 0.97x | 68 | 13m | 19h ago | 19m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.66% | 99.72% | 97.84% | 97.84% | 2681 ms | ↑ 1.12x | 1 | 1h 41m | 3d ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.66% | 99.24% | 99.24% | 99.24% | 935 ms | ↓ 0.76x | 9 | 0s | 1d ago | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.46% | 98.88% | 99.22% | 99.22% | 719 ms | ↓ 0.68x | 18 | 7m | 5d ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.46% | 97.08% | 98.04% | 98.04% | 4624 ms | → 0.99x | 55 | 3m | 14h ago | 26m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 98.45% | 95.54% | 43.24% | 43.24% | 2050 ms | → 1.04x | 9 | 1h 42m | 19h ago | 20m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.44% | 95.62% | 82.20% | 82.20% | 4775 ms | ↑ 1.13x | 54 | 16m | 13h ago | 11m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 98.23% | 97.81% | 41.85% | 41.85% | 948 ms | ↓ 0.88x | 13 | 55m | 7d ago | 23m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.21% | 90.44% | 90.44% | 90.44% | 1117 ms | ↓ 0.66x | 5 | 7h 21m | 5d ago | 5m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.01% | 96.64% | 84.63% | 84.63% | 4393 ms | → 1.04x | 67 | 2m | 3h ago | 23m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.00% | 99.48% | 79.20% | 79.20% | 1671 ms | ↓ 0.94x | 4 | 38m | 3d ago | 13m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.99% | 98.56% | 98.56% | 98.56% | 1289 ms | → 1.01x | 15 | 3m | 2d ago | 5m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 97.99% | 99.28% | 99.28% | 99.28% | 1782 ms | ↓ 0.95x | 1 | 2h 39m | 3d ago | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.81% | 95.55% | 80.65% | 80.65% | 2846 ms | ↓ 0.90x | 77 | 4m | 2d ago | 27m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.79% | 97.11% | 12.06% | 12.06% | 1800 ms | → 1.01x | 57 | 2m | 2h ago | 23m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.79% | 99.39% | 96.36% | 96.36% | 1395 ms | ↓ 0.83x | 5 | 34m | 1d ago | 20m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.77% | 99.39% | 98.38% | 98.38% | 600 ms | ↓ 0.41x | 6 | 23m | 3d ago | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.76% | 99.15% | 99.15% | 99.15% | 1060 ms | ↓ 0.83x | 1 | 3h 12m | 1d ago | 6m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.57% | 99.39% | 25.26% | 25.26% | 1740 ms | ↑ 1.37x | 4 | 45m | 6d ago | 22m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.54% | 99.12% | 99.12% | 99.12% | 594 ms | ↓ 0.57x | 2 | 1h 30m | 3d ago | 5m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.35% | 95.98% | 72.45% | 72.45% | 4174 ms | → 0.97x | 76 | 3m | 16h ago | 20m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.32% | 96.99% | 83.30% | 83.30% | 4608 ms | → 0.97x | 62 | 17s | 15h ago | 12m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 97.12% | 94.67% | 66.01% | 66.01% | 4352 ms | ↑ 1.07x | 42 | 35m | 1d ago | 20m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 96.88% | 99.34% | 96.75% | 96.75% | 1648 ms | ↓ 0.92x | 1 | 4h 31m | 7d ago | 9m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.44% | 93.54% | 80.00% | 80.00% | 4639 ms | → 1.04x | 119 | 3m | 12h ago | 11m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.42% | 96.48% | 96.48% | 96.48% | 1222 ms | ↓ 0.80x | 38 | 3m | 1d ago | 5m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 96.21% | 83.51% | 91.51% | 91.51% | 2519 ms | → 1.02x | 12 | 9h 50m | 1d ago | 11m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.76% | 94.77% | 79.79% | 79.79% | 4829 ms | → 1.03x | 93 | 5m | 54m ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.08% | 96.73% | 96.73% | 96.73% | 3640 ms | ↑ 1.26x | 13 | 1h 27m | 8h ago | 6m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.70% | 98.88% | 98.90% | 98.90% | 741 ms | ↓ 0.62x | 1 | 7h 40m | 3d ago | 24m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.43% | 95.15% | 69.42% | 69.42% | 1188 ms | ↓ 0.83x | 19 | 1h 28m | 2d ago | 13m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 93.97% | 59.91% | 76.03% | 76.03% | 606 ms | ↓ 0.31x | 3 | 4d 1h | 10d ago | 9m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 93.36% | 86.57% | 10.77% | 10.77% | 2543 ms | ↓ 0.68x | 227 | 5m | 41m ago | 20m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 92.87% | 98.17% | 98.53% | 98.53% | 1090 ms | ↑ 1.11x | 8 | 1h 20m | 5d ago | 13m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 91.50% | 98.20% | 98.20% | 98.20% | 3269 ms | ↑ 1.15x | 1 | 13h 23m | 2d ago | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 91.09% | 88.67% | 13.22% | 13.22% | 4745 ms | ↑ 1.09x | 190 | 6m | 4h ago | 13m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.07% | 89.16% | 45.32% | 45.32% | 3813 ms | → 1.03x | 190 | 4m | 6h ago | 9m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 88.08% | 97.48% | 99.62% | 99.62% | 2603 ms | ↑ 1.16x | 6 | 2h 50m | 3d ago | 23m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 87.50% | 94.62% | 78.78% | 78.78% | 134 ms | ↓ 0.68x | 8 | 5h 11m | 2d ago | 26m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 85.83% | 85.83% | 85.83% | 85.83% | 584 ms | → 1.00x | 10 | 15m | 1h ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 84.60% | 96.13% | 95.91% | 95.91% | 341 ms | ↓ 0.21x | 4 | 6h 47m | 7d ago | 11m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 84.21% | 93.45% | 98.90% | 98.90% | 554 ms | ↓ 0.81x | 16 | 2h 44m | 13h ago | 25m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 81.92% | 84.01% | 88.98% | 88.98% | 25 ms | ↓ 0.16x | 4 | 1d 5h | 11d ago | 9m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 73.27% | 82.32% | 29.41% | 29.41% | 1688 ms | ↓ 0.89x | 11 | 11h 25m | 9d ago | 13m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 67.41% | 69.82% | 16.07% | 16.07% | 4574 ms | ↑ 1.08x | 375 | 15m | 1h ago | 13m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 57.58% | 12.18% | 9.71% | 9.71% | 2971 ms | → 1.00x | 33 | 18h 26m | 3h ago | 25m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 29.69% | 7.11% | 28.27% | 28.27% | 3598 ms | → 0.96x | 20 | 1d 9h | 2h ago | 12m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 8.37% | 1.77% | 72.24% | 72.24% | 1057 ms | → 1.00x | 2 | 14d 17h | 12h ago | 24m ago |

</details>

<details open>
<summary><strong>🔴 Down (210)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 86.31% | 95.20% | 55.88% | 55.88% | 3602 ms | → 0.98x | 14 | 2h 21m | 24h ago | 23m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 81.03% | 95.95% | 93.07% | 93.07% | 1441 ms | ↓ 0.47x | 2 | 17h 17m | 1d ago | 10m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 78.35% | 37.77% | 29.31% | 29.31% | 960 ms | ↓ 0.91x | 4 | 4d 11h | 17h ago | 10m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 74.50% | 92.14% | 92.14% | 92.14% | 4708 ms | → 1.02x | 16 | 2h 44m | 2d ago | 5m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 61.15% | 89.93% | 96.09% | 96.09% | 3492 ms | → 0.98x | 13 | 5h 49m | 3d ago | 23m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 57.74% | 66.17% | 61.82% | 61.82% | 4874 ms | ↑ 1.07x | 397 | 17m | 2h ago | 20m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 48.23% | 88.04% | 50.59% | 50.59% | 2702 ms | ↓ 0.95x | 23 | 3h 44m | 4d ago | 21m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 42.98% | 87.96% | 87.85% | 87.85% | 1141 ms | ↓ 0.69x | 2 | 1d 23h | 4d ago | 13m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 42.63% | 86.77% | 38.21% | 38.21% | 2183 ms | → 0.96x | 22 | 4h 33m | 4d ago | 12m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 37.28% | 85.05% | 89.41% | 89.41% | 952 ms | ↓ 0.70x | 2 | 2d 12h | 4d ago | 9m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 36.69% | 75.23% | 75.23% | 75.23% | 1214 ms | ↓ 0.79x | 6 | 18h 19m | 5d ago | 5m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 32.14% | 85.69% | 27.45% | 27.45% | 360 ms | ↓ 0.29x | 1 | 4d 21h | 5d ago | 12m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 30.20% | 73.51% | 73.51% | 73.51% | 2567 ms | ↓ 0.88x | 1 | 5d 1h | 5d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 29.02% | 84.56% | 94.16% | 94.16% | 2401 ms | ↑ 1.13x | 7 | 17h 29m | 5d ago | 12m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 28.79% | 84.51% | 94.20% | 94.20% | 557 ms | ↓ 0.53x | 7 | 17h 32m | 5d ago | 11m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 21.60% | 46.40% | 11.14% | 11.14% | 3861 ms | ↑ 1.17x | 421 | 37m | 4d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 19.91% | 81.97% | 81.97% | 81.97% | 3881 ms | ↓ 0.93x | 14 | 10h | 6d ago | 7m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 19.46% | 69.44% | 69.44% | 69.44% | 2005 ms | → 0.99x | 2 | 2d 20h | 6d ago | 6m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 16.26% | 82.02% | 21.74% | 21.74% | 1611 ms | ↓ 0.90x | 6 | 23h 47m | 6d ago | 13m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 12.75% | 9.92% | 9.92% | 9.92% | 3152 ms | ↓ 0.90x | 110 | 3h 18m | 27m ago | 5m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 3.58% | 63.07% | 63.07% | 63.07% | 1613 ms | ↑ 1.14x | 5 | 1d 8h | 7d ago | 5m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 2.63% | 78.65% | 97.26% | 97.26% | 2688 ms | ↓ 0.90x | 16 | 10h 14m | 7d ago | 26m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.88% | 27.70% | 4.30% | 4.30% | 3342 ms | ↑ 1.31x | 6 | 3d 18h | 1d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.88% | 8.02% | 63.67% | 63.67% | 3703 ms | ↑ 1.41x | 47 | 14h 11m | 12h ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 86.82% | 86.82% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 71.89% | 71.89% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 77.30% | 77.30% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 22.52% | 73.03% | 73.03% | — | — | 1 | 23d 24h | 24d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.96% | 5.96% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 13.13% | 13.13% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 51.39% | 74.20% | 74.20% | — | — | 4 | 3d 20h | 13d ago | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 13m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.56% | 3.56% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 69.21% | 85.42% | 85.42% | — | — | 4 | 2d 12h | 10d ago | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 87.09% | 87.09% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.22% | 38.22% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 49.88% | 69.95% | 69.95% | — | — | 3 | 5d 6h | 16d ago | 9m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.92% | 25.92% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 78.15% | 78.15% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 59.12% | 59.12% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 32.12% | 32.12% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 87.50% | 87.50% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 80.82% | 80.82% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.93% | 16.93% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 54.42% | 54.42% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 38.03% | 38.03% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.75% | 3.75% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 13m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 87.69% | 87.69% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.13% | 0.13% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 54.46% | 54.46% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.27% | 30.27% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.16% | 2.16% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 65.07% | 88.60% | 88.60% | — | — | 6 | 1d 21h | 11d ago | 12m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 49.68% | 49.68% | 49.68% | — | — | 1 | 9d 16h | 10d ago | 6m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 70.12% | 71.53% | 71.53% | — | — | 3 | 3d 5h | 10d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 6.64% | 38.20% | 38.20% | — | — | 2 | 13d 23h | 28d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 57.30% | 57.30% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 26.45% | 26.45% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 31.40% | 31.40% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.13% | 0.13% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 60.05% | 60.05% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.19% | 6.19% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 69.09% | 69.09% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 87.45% | 87.45% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.32% | 8.32% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 83.48% | 83.48% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 26.82% | 86.15% | 86.15% | — | — | 3 | 7d 6h | 10d ago | 25m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 12h | 17d ago | 6m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 13m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 32.25% | 32.25% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.55% | 55.55% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 65.35% | 61.20% | 61.20% | — | — | 4 | 2d 19h | 11d ago | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 19.35% | 17.21% | 17.21% | — | — | 1 | 14d 6h | 14d ago | 7m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 69.35% | 81.66% | 81.66% | — | — | 2 | 4d 23h | 10d ago | 11m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 80.48% | 80.48% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.06% | 49.06% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.59% | 44.59% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 87.46% | 87.46% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 61.76% | 61.76% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 41.03% | 41.03% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.81% | 33.81% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.72% | 2.72% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 68.92% | 87.69% | 87.69% | — | — | 4 | 2d 12h | 10d ago | 24m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.84% | 43.84% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 87.41% | 87.41% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 35.02% | 35.02% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 87.34% | 87.34% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 54.01% | 72.28% | 72.28% | — | — | 2 | 7d 7h | 15d ago | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 31.86% | 31.86% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 48.87% | 48.87% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 84.88% | 84.88% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 22.18% | 74.17% | 74.17% | — | — | 2 | 11d 19h | 23d ago | 13m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 52.17% | 39.20% | 39.20% | — | — | 8 | 1d 21h | 14d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 83.26% | 83.26% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 61.22% | 61.22% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.52% | 3.52% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.56% | 45.56% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 81.59% | 81.59% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 62.24% | 62.24% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 67.06% | 67.78% | 67.78% | — | — | 42 | 5h 45m | 10d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 53.42% | 77.10% | 77.10% | — | — | 56 | 5h 60m | 14d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 59.47% | 93.77% | 93.77% | — | — | 1 | 12d 23h | 13d ago | 22m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.86% | 29.86% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 13.50% | 13.50% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 14.26% | 14.26% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 23.77% | 35.38% | 35.38% | — | — | 5 | 4d 14h | 20d ago | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.43% | 25.43% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 65.81% | 65.81% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 9.30% | 15.68% | 15.68% | — | — | 1 | 27d 3h | 27d ago | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.43% | 18.43% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.23% | 52.23% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 51.53% | 51.53% | 51.53% | — | — | 1 | 8d 19h | 9d ago | 6m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 6m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 58.21% | 58.21% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 52.81% | 27.47% | 27.47% | — | — | 21 | 16h 48m | 15d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 45.75% | 45.75% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 6.51% | 60.21% | 60.21% | — | — | 2 | 13d 24h | 28d ago | 11m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.85% | 5.85% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 76.34% | 95.29% | 95.29% | — | — | 1 | 7d 19h | 8d ago | 24m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 87.55% | 87.55% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 86.41% | 86.41% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 13m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 67.39% | 67.39% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 79.13% | 79.13% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 86.25% | 86.25% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.73% | 20.73% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 1.02% | 6.02% | 6.02% | — | — | 1 | 29d 17h | 30d ago | 25m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 36.14% | 36.14% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.41% | 8.41% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 69.31% | 69.31% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 11h | 17d ago | 14m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 71.34% | 71.34% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 58.00% | 62.61% | 62.61% | — | — | 13 | 1d | 13d ago | 7m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 10.82% | 10.82% | — | — | 1 | 17d 11h | 17d ago | 6m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 46.76% | 46.76% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 33.66% | 33.66% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.62% | 14.62% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.96% | 18.96% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 23.20% | 22.88% | 22.88% | — | — | 1 | 23d 19h | 24d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 54.95% | 54.95% | 54.95% | — | — | 1 | 14d 7h | 14d ago | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 19.12% | 19.12% | 19.12% | — | — | 8 | 1d 21h | 15d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.40% | 1.40% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.76% | 7.76% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 2.97% | 9.27% | 9.27% | — | — | 1 | 29d 1h | 29d ago | 6m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.69% | 52.69% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 78.18% | 78.18% | 78.18% | — | — | 2 | 3d 14h | 7d ago | 6m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 87.51% | 87.51% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 57.20% | 57.20% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 3.23% | 87.70% | 87.70% | — | — | 3 | 9d 16h | 29d ago | 19m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 62.95% | 76.08% | 76.08% | — | — | 2 | 5d 22h | 12d ago | 7m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.69% | 43.69% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 4.00% | 4.00% | 4.00% | — | — | 1 | 17d 18h | 18d ago | 6m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 85.29% | 85.29% | — | — | 1 | 29d 24h | 30d ago | 14m ago |

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
