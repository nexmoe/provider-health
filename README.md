# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**604 providers** — 342 🟢 operational · 48 🟡 degraded · 214 🔴 down · 0 ⚫ unknown

_Updated 2026-05-22 06:52 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (342)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 97.09% | 97.09% | 2285 ms | ↓ 0.79x | 2 | 10m | 11d ago | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.80% | 92.80% | 719 ms | ↓ 0.81x | 0 | — | — | 10m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.16% | 14.54% | 14.54% | 1736 ms | ↓ 0.83x | 2 | 6h 11m | 21d ago | 10m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.24% | 97.24% | 2250 ms | ↓ 0.80x | 0 | — | — | 20m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 46.48% | 46.48% | 1590 ms | ↓ 0.81x | 3 | 0s | 10d ago | 9m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.41% | 98.72% | 98.72% | 1604 ms | ↓ 0.74x | 20 | 13m | 20d ago | 21m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.53% | 93.29% | 93.29% | 1692 ms | ↓ 0.85x | 1 | 2h 59m | 19d ago | 6m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1410 ms | ↓ 0.63x | 0 | — | — | 3m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.34% | 96.80% | 96.80% | 1648 ms | ↓ 0.92x | 1 | 4h 31m | 8d ago | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.79% | 91.79% | 1449 ms | ↓ 0.81x | 0 | — | — | 22m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.92% | 99.92% | 99.92% | 1263 ms | ↓ 0.85x | 1 | 0s | 8d ago | 3m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.91% | 96.43% | 96.43% | 2538 ms | → 0.99x | 2 | 0s | 20d ago | 6m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 421 ms | → 1.00x | 0 | — | — | 2m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.17% | 98.17% | 931 ms | ↓ 0.82x | 3 | 0s | 14d ago | 7m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 98.01% | 98.06% | 98.06% | 658 ms | ↓ 0.59x | 1 | 13h 57m | 29d ago | 4m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 76.19% | 32.25% | 32.25% | 466 ms | ↓ 0.87x | 2 | 3d 13h | 23d ago | 14m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 761 ms | ↓ 0.88x | 2 | 9m | 10d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 96.36% | 96.36% | 2191 ms | → 1.01x | 1 | 1h 40m | 18d ago | 9m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.80% | 98.80% | 612 ms | ↓ 0.74x | 1 | 0s | 19d ago | 19m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 415 ms | ↓ 0.66x | 0 | — | — | 2m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 95.97% | 95.97% | 487 ms | ↓ 0.77x | 0 | — | — | 8m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1605 ms | ↓ 0.87x | 0 | — | — | 3m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.09% | 97.09% | 168 ms | ↓ 0.29x | 0 | — | — | 5m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.27% | 80.77% | 80.77% | 1037 ms | ↓ 0.62x | 6 | 5h 21m | 23d ago | 7m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 926 ms | ↓ 0.72x | 0 | — | — | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.72% | 97.22% | 97.22% | 1028 ms | ↓ 0.65x | 2 | 40m | 24d ago | 9m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 426 ms | ↓ 0.83x | 0 | — | — | 16m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2733 ms | ↓ 0.84x | 1 | 0s | 14d ago | 16m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.95% | 98.79% | 98.79% | 174 ms | ↓ 0.12x | 1 | 0s | 29d ago | 8m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 98.97% | 97.71% | 97.71% | 3563 ms | → 1.03x | 22 | 0s | 8d ago | 20m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.72% | 99.78% | 99.78% | 1583 ms | ↓ 0.77x | 4 | 10m | 18d ago | 8m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 59.25% | 10.92% | 10.92% | 2587 ms | → 1.01x | 7 | 1d 15h | 11d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.38% | 95.38% | 1223 ms | ↓ 0.62x | 0 | — | — | 8m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.45% | 82.21% | 82.21% | 1459 ms | ↓ 0.88x | 2 | 4d 1h | 18d ago | 6m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.84% | 99.84% | 3808 ms | ↑ 1.56x | 2 | 0s | 8d ago | 2m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1738 ms | ↓ 0.90x | 0 | — | — | 15m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 248 ms | → 1.00x | 0 | — | — | 2m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.91% | 99.84% | 99.84% | 3820 ms | → 1.01x | 2 | 0s | 18d ago | 14m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.53% | 99.39% | 99.39% | 3087 ms | → 1.05x | 4 | 2h 15m | 10d ago | 8m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.67% | 99.62% | 99.62% | 956 ms | ↑ 1.08x | 6 | 3m | 8d ago | 6m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.77% | 24.35% | 24.35% | 962 ms | ↓ 0.64x | 5 | 0s | 19d ago | 15m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.29% | 95.37% | 95.37% | 1903 ms | ↑ 1.19x | 2 | 2h 9m | 10d ago | 6m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1020 ms | ↓ 0.84x | 0 | — | — | 2m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1103 ms | → 1.05x | 0 | — | — | 4m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.85% | 99.85% | 99.85% | 468 ms | → 0.99x | 2 | 0s | 12d ago | 3m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.04% | 96.04% | 889 ms | ↓ 0.79x | 1 | 0s | 20d ago | 9m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.68% | 99.68% | 99.68% | 1320 ms | ↓ 0.93x | 2 | 19m | 9d ago | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 50.80% | 50.80% | 749 ms | → 1.00x | 0 | — | — | 10m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 100.00% | 96.11% | 95.96% | 95.96% | 493 ms | ↓ 0.22x | 4 | 6h 47m | 8d ago | 8m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.43% | 99.43% | 99.43% | 2466 ms | ↓ 0.88x | 5 | 9m | 9d ago | 3m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 908 ms | ↓ 0.73x | 0 | — | — | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.60% | 99.60% | 2449 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.95% | 96.92% | 96.92% | 1111 ms | ↓ 0.70x | 1 | 0s | 28d ago | 14m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.76% | 98.96% | 98.96% | 1309 ms | → 0.96x | 4 | 2m | 7d ago | 9m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.92% | 98.64% | 98.64% | 1083 ms | ↓ 0.91x | 1 | 0s | 13d ago | 4m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 80.94% | 80.94% | 1867 ms | ↓ 0.83x | 1 | 0s | 27d ago | 10m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.95% | 62.59% | 62.59% | 1469 ms | → 0.99x | 1 | 0s | 30d ago | 10m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 857 ms | ↓ 0.86x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.31% | 98.31% | 1646 ms | ↓ 0.75x | 0 | — | — | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2798 ms | ↓ 0.58x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.20% | 92.20% | 924 ms | ↓ 0.85x | 0 | — | — | 10m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.16% | 98.16% | 671 ms | ↓ 0.73x | 0 | — | — | 6m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.62% | 98.62% | 98.62% | 1951 ms | ↓ 0.90x | 12 | 10m | 18d ago | 4m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.62% | 67.17% | 67.17% | 2142 ms | ↑ 1.07x | 8 | 0s | 20d ago | 7m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1439 ms | ↓ 0.80x | 0 | — | — | 2m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 97.78% | 89.94% | 89.94% | 1670 ms | ↓ 0.77x | 14 | 23m | 18d ago | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.38% | 97.38% | 3025 ms | ↑ 1.05x | 5 | 0s | 10d ago | 8m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 42.93% | 42.93% | 813 ms | ↓ 0.94x | 0 | — | — | 10m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.18% | 73.18% | 760 ms | ↓ 0.79x | 1 | 0s | 8d ago | 10m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.82% | 97.82% | 2123 ms | ↓ 0.86x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.91% | 48.58% | 48.58% | 1079 ms | ↓ 0.89x | 1 | 19m | 30d ago | 10m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.40% | 40.40% | 1046 ms | ↓ 0.73x | 0 | — | — | 15m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1107 ms | ↓ 0.70x | 0 | — | — | 2m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.96% | 57.68% | 57.68% | 792 ms | ↓ 0.79x | 11 | 20m | 19d ago | 10m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.77% | 99.77% | 99.77% | 1442 ms | → 1.04x | 2 | 10m | 10d ago | 3m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 59.73% | 59.73% | 945 ms | ↓ 0.79x | 0 | — | — | 10m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2061 ms | ↓ 0.88x | 0 | — | — | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.13% | 99.13% | 1427 ms | ↓ 0.90x | 0 | — | — | 10m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.66% | 88.66% | 2093 ms | ↓ 0.92x | 1 | 0s | 9d ago | 10m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 81.75% | 81.75% | 522 ms | ↓ 0.85x | 0 | — | — | 5m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.67% | 99.76% | 99.76% | 2339 ms | → 1.00x | 7 | 0s | 18d ago | 8m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.54% | 99.54% | 768 ms | ↓ 0.67x | 1 | 0s | 11d ago | 10m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.88% | 97.88% | 1986 ms | ↑ 1.07x | 0 | — | — | 10m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.91% | 12.75% | 12.75% | 1351 ms | ↓ 0.91x | 2 | 0s | 17d ago | 15m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1208 ms | ↓ 0.85x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.77% | 98.98% | 98.98% | 2138 ms | ↓ 0.95x | 2 | 30m | 17d ago | 20m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.01% | 98.01% | 2975 ms | ↓ 0.79x | 0 | — | — | 21m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 69.97% | 69.97% | 2723 ms | ↓ 0.87x | 0 | — | — | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 625 ms | ↓ 0.90x | 1 | 0s | 16d ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.95% | 99.95% | 1179 ms | ↓ 0.82x | 3 | 0s | 27d ago | 21m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.70% | 99.70% | 2886 ms | ↑ 1.11x | 1 | 0s | 8d ago | 21m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.57% | 87.85% | 87.85% | 2078 ms | ↑ 1.10x | 7 | 6m | 14d ago | 10m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 98.53% | 73.32% | 73.32% | 2017 ms | ↓ 0.85x | 2 | 4h 51m | 29d ago | 8m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.63% | 99.71% | 99.71% | 414 ms | ↓ 0.89x | 8 | 0s | 14d ago | 21m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 944 ms | ↓ 0.82x | 0 | — | — | 2m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 78.25% | 78.25% | 1650 ms | ↑ 1.05x | 0 | — | — | 6m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1368 ms | ↓ 0.88x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1018 ms | ↓ 0.83x | 0 | — | — | 6m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.96% | 98.96% | 386 ms | ↓ 0.65x | 0 | — | — | 10m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.52% | 98.52% | 1963 ms | ↑ 1.11x | 0 | — | — | 9m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.35% | 96.35% | 383 ms | ↓ 0.38x | 0 | — | — | 6m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 810 ms | ↓ 0.85x | 0 | — | — | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 555 ms | ↓ 0.55x | 0 | — | — | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1270 ms | ↓ 0.78x | 0 | — | — | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 97.98% | 95.13% | 95.13% | 1337 ms | ↓ 0.72x | 12 | 23m | 17d ago | 4m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.68% | 99.68% | 99.68% | 2326 ms | ↓ 0.91x | 3 | 7m | 10d ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.19% | 96.15% | 96.15% | 245 ms | ↓ 0.43x | 15 | 3m | 19d ago | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.57% | 98.57% | 169 ms | ↓ 0.44x | 0 | — | — | 8m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.91% | 98.90% | 98.90% | 764 ms | ↓ 0.72x | 2 | 0s | 25d ago | 11m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 12.64% | 12.64% | 2497 ms | ↓ 0.89x | 1 | 0s | 18d ago | 14m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 874 ms | ↓ 0.89x | 0 | — | — | 2m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 16.27% | 16.27% | 1107 ms | ↓ 0.81x | 0 | — | — | 10m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 533 ms | ↓ 0.77x | 0 | — | — | 22m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.34% | 99.14% | 99.14% | 171 ms | ↓ 0.88x | 10 | 14m | 8d ago | 8m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.93% | 99.93% | 592 ms | ↓ 0.54x | 0 | — | — | 20m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 96.98% | 96.98% | 1310 ms | ↓ 0.87x | 0 | — | — | 5m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.76% | 97.76% | 2266 ms | ↑ 1.21x | 0 | — | — | 10m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.74% | 99.74% | 1312 ms | ↓ 0.92x | 2 | 20m | 14d ago | 11m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1171 ms | ↓ 0.90x | 0 | — | — | 4m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.63% | 98.63% | 4050 ms | → 0.99x | 0 | — | — | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 63.02% | 82.48% | 82.48% | 753 ms | ↓ 0.62x | 1 | 10d 5h | 30d ago | 8m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2622 ms | ↑ 1.08x | 0 | — | — | 20m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1181 ms | ↓ 0.84x | 0 | — | — | 3m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2335 ms | ↑ 1.11x | 1 | 0s | 14d ago | 14m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.91% | 99.30% | 99.30% | 1676 ms | ↓ 0.89x | 2 | 0s | 13d ago | 10m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 37.05% | 37.05% | 657 ms | → 0.97x | 0 | — | — | 21m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.22% | 98.22% | 3914 ms | ↑ 1.19x | 0 | — | — | 9m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1009 ms | ↓ 0.92x | 1 | 0s | 8d ago | 20m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1138 ms | ↓ 0.77x | 1 | 0s | 15d ago | 14m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 1944 ms | → 0.96x | 0 | — | — | 10m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.83% | 99.84% | 99.84% | 1808 ms | ↓ 0.82x | 25 | 0s | 18d ago | 21m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.48% | 99.48% | 1621 ms | ↑ 1.13x | 0 | — | — | 6m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.95% | 88.88% | 88.88% | 1173 ms | ↑ 1.14x | 1 | 0s | 28d ago | 10m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.59% | 99.59% | 1341 ms | → 0.99x | 0 | — | — | 21m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 371 ms | ↓ 0.73x | 0 | — | — | 2m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 59.70% | 76.41% | 76.41% | 597 ms | ↓ 0.32x | 3 | 4d 1h | 11d ago | 6m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.75% | 99.75% | 1659 ms | ↓ 0.94x | 1 | 0s | 27d ago | 20m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 47.73% | 37.17% | 37.17% | 3591 ms | → 1.02x | 2 | 7d 8h | 28d ago | 11m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 14.69% | 14.69% | 1583 ms | ↓ 0.89x | 0 | — | — | 10m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 100.00% | 98.81% | 98.81% | 2482 ms | ↑ 1.22x | 0 | — | — | 9m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.67% | 78.59% | 78.59% | 1714 ms | ↓ 0.83x | 2 | 50m | 19d ago | 21m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 70.61% | 70.61% | 70.61% | 1063 ms | ↓ 0.93x | 1 | 5d 5h | 15d ago | 4m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1148 ms | ↓ 0.89x | 0 | — | — | 21m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 988 ms | ↓ 0.80x | 0 | — | — | 21m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 791 ms | ↓ 0.62x | 0 | — | — | 2m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 674 ms | ↓ 0.66x | 1 | 0s | 16d ago | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.97% | 98.97% | 1625 ms | ↓ 0.84x | 0 | — | — | 20m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 97.92% | 97.92% | 1140 ms | ↓ 0.80x | 0 | — | — | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.53% | 97.53% | 2582 ms | → 1.05x | 0 | — | — | 7m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.86% | 12.73% | 12.73% | 1273 ms | → 0.99x | 3 | 0s | 20d ago | 20m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.17% | 66.17% | 871 ms | ↓ 0.85x | 0 | — | — | 10m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1307 ms | ↓ 0.84x | 0 | — | — | 20m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1929 ms | ↓ 0.90x | 0 | — | — | 21m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2439 ms | ↓ 0.93x | 0 | — | — | 3m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 100.00% | 99.86% | 99.86% | 948 ms | ↓ 0.91x | 0 | — | — | 11m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.44% | 84.25% | 84.25% | 1157 ms | → 0.98x | 12 | 0s | 18d ago | 21m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.60% | 41.26% | 41.26% | 685 ms | ↓ 0.72x | 4 | 7h 27m | 14d ago | 8m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.77% | 84.31% | 84.31% | 126 ms | ↓ 0.39x | 5 | 0s | 25d ago | 20m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.67% | 88.96% | 88.96% | 513 ms | ↓ 0.24x | 6 | 3m | 7d ago | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.21% | 99.21% | 1877 ms | → 0.95x | 0 | — | — | 10m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 95.85% | 98.80% | 98.80% | 2435 ms | ↓ 0.80x | 68 | 6m | 10d ago | 21m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 63.92% | 63.92% | 396 ms | ↓ 0.36x | 0 | — | — | 10m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.33% | 96.33% | 1000 ms | ↓ 0.95x | 0 | — | — | 10m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.85% | 99.85% | 99.85% | 861 ms | ↓ 0.69x | 2 | 0s | 10d ago | 2m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.86% | 14.57% | 14.57% | 961 ms | ↓ 0.87x | 3 | 0s | 16d ago | 15m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1730 ms | ↓ 0.80x | 1 | 0s | 20d ago | 21m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.03% | 99.03% | 99.03% | 1181 ms | ↓ 0.88x | 1 | 3h 38m | 10d ago | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.11% | 91.28% | 91.28% | 2205 ms | ↓ 0.77x | 6 | 3h 5m | 10d ago | 8m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 54.11% | 54.11% | 500 ms | ↓ 0.53x | 0 | — | — | 10m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 100.00% | 98.29% | 98.29% | 1380 ms | → 1.04x | 0 | — | — | 9m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.81% | 98.01% | 98.01% | 1436 ms | ↓ 0.67x | 4 | 0s | 15d ago | 8m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 32.16% | 32.16% | 2074 ms | ↓ 0.88x | 1 | 0s | 21d ago | 10m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.73% | 99.73% | 2810 ms | ↑ 1.20x | 0 | — | — | 21m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 1874 ms | → 1.02x | 0 | — | — | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 49.60% | 49.60% | 3677 ms | → 0.96x | 0 | — | — | 9m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.91% | 99.14% | 99.14% | 2067 ms | → 0.95x | 2 | 0s | 20d ago | 10m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.29% | 98.34% | 98.34% | 1456 ms | ↑ 1.15x | 1 | 11h 52m | 22d ago | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.72% | 76.96% | 76.96% | 1196 ms | ↑ 1.08x | 1 | 1h 39m | 22d ago | 10m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 187 ms | → 1.00x | 0 | — | — | 21m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.91% | 99.90% | 99.90% | 1527 ms | ↓ 0.78x | 2 | 0s | 19d ago | 20m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 792 ms | → 1.00x | 0 | — | — | 3m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1665 ms | ↓ 0.86x | 0 | — | — | 14m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.91% | 77.23% | 77.23% | 1821 ms | ↓ 0.91x | 2 | 0s | 9d ago | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.59% | 84.59% | 1808 ms | ↑ 1.14x | 0 | — | — | 10m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 841 ms | ↓ 0.94x | 1 | 0s | 12d ago | 3m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.79% | 95.79% | 817 ms | ↓ 0.86x | 0 | — | — | 10m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 904 ms | ↓ 0.91x | 0 | — | — | 20m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.27% | 98.27% | 437 ms | ↓ 0.52x | 1 | 0s | 13d ago | 8m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 15.12% | 15.12% | 719 ms | ↓ 0.55x | 0 | — | — | 10m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.81% | 96.34% | 96.34% | 1568 ms | ↓ 0.93x | 3 | 6m | 10d ago | 6m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1432 ms | ↑ 1.07x | 0 | — | — | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.93% | 99.93% | 724 ms | ↓ 0.94x | 0 | — | — | 8m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.38% | 57.38% | 1764 ms | ↓ 0.89x | 0 | — | — | 10m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.78% | 99.78% | 2996 ms | ↓ 0.94x | 1 | 0s | 27d ago | 20m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 12.71% | 12.71% | 908 ms | ↓ 0.94x | 0 | — | — | 20m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 855 ms | ↓ 0.94x | 0 | — | — | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.19% | 99.22% | 99.22% | 1081 ms | ↓ 0.73x | 1 | 3h 45m | 27d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.92% | 99.93% | 99.93% | 1510 ms | ↓ 0.68x | 1 | 0s | 19d ago | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1079 ms | ↓ 0.81x | 0 | — | — | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 92.93% | 92.93% | 3475 ms | ↓ 0.89x | 0 | — | — | 20m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.81% | 99.49% | 99.49% | 1634 ms | ↓ 0.79x | 3 | 7m | 8d ago | 20m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 2017 ms | ↓ 0.94x | 0 | — | — | 10m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.62% | 98.67% | 98.67% | 1836 ms | ↓ 0.91x | 8 | 0s | 19d ago | 8m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.87% | 98.87% | 98.87% | 873 ms | ↓ 0.66x | 10 | 8m | 18d ago | 4m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.95% | 99.05% | 99.05% | 1024 ms | ↑ 1.08x | 1 | 0s | 28d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 85.15% | 87.04% | 87.04% | 1989 ms | ↑ 1.11x | 11 | 9h 31m | 15d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.84% | 99.84% | 1673 ms | ↓ 0.90x | 1 | 20m | 17d ago | 3m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 30.53% | 30.53% | 1502 ms | ↓ 0.69x | 1 | 0s | 30d ago | 21m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.42% | 99.42% | 853 ms | ↓ 0.66x | 0 | — | — | 20m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 390 ms | ↓ 0.53x | 0 | — | — | 22m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.74% | 58.96% | 58.96% | 2675 ms | ↓ 0.92x | 25 | 2m | 16d ago | 21m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.63% | 91.54% | 91.54% | 1026 ms | ↓ 0.71x | 1 | 2h 20m | 22d ago | 20m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.16% | 98.16% | 2226 ms | → 0.99x | 0 | — | — | 6m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.49% | 96.46% | 96.46% | 2361 ms | ↓ 0.90x | 5 | 24m | 22d ago | 20m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1556 ms | → 1.00x | 0 | — | — | 2m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.19% | 99.20% | 99.20% | 1305 ms | ↓ 0.84x | 8 | 5m | 10d ago | 4m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.77% | 99.77% | 520 ms | ↓ 0.45x | 0 | — | — | 6m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.38% | 86.38% | 1430 ms | → 1.01x | 0 | — | — | 9m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.75% | 99.75% | 820 ms | ↓ 0.66x | 1 | 0s | 19d ago | 6m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1357 ms | → 0.99x | 0 | — | — | 20m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 1023 ms | → 1.03x | 0 | — | — | 21m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 362 ms | ↓ 0.59x | 0 | — | — | 2m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 897 ms | → 0.97x | 0 | — | — | 21m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2455 ms | → 1.05x | 1 | 0s | 26d ago | 15m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 713 ms | → 1.02x | 0 | — | — | 19m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.91% | 83.34% | 83.34% | 1554 ms | ↓ 0.82x | 2 | 0s | 18d ago | 14m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.81% | 18.45% | 18.45% | 1615 ms | ↓ 0.85x | 4 | 0s | 7d ago | 22m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.72% | 98.72% | 1691 ms | ↓ 0.89x | 0 | — | — | 9m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.61% | 91.61% | 3234 ms | ↓ 0.87x | 0 | — | — | 22m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.91% | 99.91% | 99.91% | 581 ms | ↓ 0.72x | 1 | 0s | 17d ago | 2m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 94.98% | 94.98% | 94.98% | 690 ms | → 1.03x | 5 | 4h 10m | 8d ago | 4m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 256 ms | ↓ 0.56x | 0 | — | — | 2m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.20% | 95.96% | 95.96% | 647 ms | ↓ 0.39x | 3 | 1h 21m | 22d ago | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.67% | 98.67% | 422 ms | → 0.95x | 0 | — | — | 10m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.25% | 98.62% | 98.62% | 2958 ms | → 1.02x | 5 | 48m | 12d ago | 19m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 382 ms | ↓ 0.80x | 0 | — | — | 3m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 884 ms | ↓ 0.72x | 0 | — | — | 9m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.02% | 98.02% | 1493 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1243 ms | ↓ 0.75x | 0 | — | — | 19m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 86.80% | 86.80% | 2386 ms | → 0.96x | 1 | 0s | 27d ago | 10m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 96.27% | 96.31% | 96.31% | 1780 ms | ↓ 0.90x | 3 | 8h 39m | 25d ago | 10m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1685 ms | ↓ 0.85x | 0 | — | — | 19m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.86% | 12.71% | 12.71% | 1800 ms | ↓ 0.83x | 3 | 0s | 11d ago | 20m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 642 ms | ↓ 0.58x | 0 | — | — | 4m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.67% | 95.96% | 95.96% | 1253 ms | ↓ 0.83x | 2 | 51m | 14d ago | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.91% | 99.84% | 99.84% | 1995 ms | ↓ 0.88x | 1 | 20m | 29d ago | 19m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.93% | 99.93% | 732 ms | ↓ 0.84x | 1 | 0s | 20d ago | 20m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.95% | 14.75% | 14.75% | 1828 ms | ↓ 0.88x | 1 | 0s | 29d ago | 10m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.76% | 12.55% | 12.55% | 1253 ms | ↓ 0.84x | 5 | 0s | 19d ago | 10m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.72% | 95.54% | 95.54% | 1284 ms | → 1.00x | 1 | 8h 38m | 10d ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2743 ms | ↓ 0.94x | 0 | — | — | 3m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2498 ms | → 1.01x | 0 | — | — | 8m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.25% | 99.89% | 99.89% | 1308 ms | → 0.96x | 3 | 1h 27m | 25d ago | 20m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.73% | 99.73% | 2235 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.08% | 98.08% | 942 ms | ↓ 0.77x | 0 | — | — | 6m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.91% | 99.79% | 99.79% | 1763 ms | ↓ 0.87x | 2 | 0s | 9d ago | 14m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 2002 ms | ↑ 1.22x | 0 | — | — | 10m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.06% | 99.06% | 1082 ms | ↓ 0.85x | 0 | — | — | 20m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 89.39% | 35.90% | 35.90% | 1072 ms | ↓ 0.59x | 20 | 3h 28m | 10d ago | 8m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 324 ms | ↓ 0.55x | 0 | — | — | 20m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.77% | 99.67% | 99.21% | 99.21% | 3410 ms | ↓ 0.90x | 7 | 0s | 22h ago | 21m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.77% | 99.11% | 99.84% | 99.84% | 2932 ms | ↓ 0.78x | 19 | 0s | 4d ago | 21m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.77% | 99.95% | 99.83% | 99.83% | 1921 ms | ↑ 1.78x | 1 | 0s | 5d ago | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.77% | 99.95% | 99.50% | 99.50% | 2606 ms | ↓ 0.94x | 1 | 0s | 2d ago | 21m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.77% | 99.21% | 99.46% | 99.46% | 2684 ms | ↓ 0.82x | 16 | 1m | 4d ago | 21m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.77% | 99.95% | 99.55% | 99.55% | 1201 ms | ↓ 0.87x | 1 | 0s | 2d ago | 21m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.77% | 98.74% | 91.91% | 91.91% | 957 ms | → 0.95x | 5 | 1h 28m | 7d ago | 20m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.77% | 99.06% | 99.72% | 99.72% | 2447 ms | ↓ 0.87x | 5 | 1h | 8h ago | 20m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.77% | 99.91% | 99.60% | 99.60% | 1500 ms | ↓ 0.86x | 2 | 0s | 3d ago | 20m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.77% | 99.81% | 99.19% | 99.19% | 1226 ms | ↓ 0.88x | 4 | 0s | 6d ago | 20m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.77% | 99.91% | 88.34% | 88.34% | 1015 ms | ↓ 0.71x | 2 | 0s | 12h ago | 20m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.77% | 97.89% | 98.67% | 98.67% | 3439 ms | → 0.96x | 39 | 4m | 4d ago | 20m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.77% | 99.34% | 25.49% | 25.49% | 1750 ms | ↑ 1.38x | 5 | 36m | 3h ago | 18m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.77% | 99.91% | 23.94% | 23.94% | 712 ms | ↓ 0.87x | 2 | 0s | 4d ago | 19m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.77% | 99.44% | 97.69% | 97.69% | 2949 ms | → 0.96x | 10 | 4m | 3d ago | 14m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.77% | 95.25% | 77.61% | 77.61% | 1790 ms | ↓ 0.91x | 78 | 6m | 3d ago | 14m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.77% | 97.93% | 51.31% | 51.31% | 1353 ms | ↓ 0.81x | 7 | 59m | 12h ago | 15m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.77% | 99.67% | 99.71% | 99.71% | 2996 ms | ↓ 0.92x | 7 | 0s | 15h ago | 14m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.77% | 99.39% | 68.99% | 68.99% | 1070 ms | ↓ 0.92x | 10 | 6m | 2d ago | 10m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 99.77% | 99.95% | 48.30% | 48.30% | 579 ms | ↓ 0.81x | 1 | 0s | 4d ago | 10m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.77% | 99.91% | 79.64% | 79.64% | 1404 ms | ↓ 0.79x | 2 | 0s | 7d ago | 10m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.77% | 99.95% | 97.87% | 97.87% | 828 ms | ↓ 0.53x | 1 | 0s | 6d ago | 10m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.77% | 99.81% | 56.25% | 56.25% | 1623 ms | ↓ 0.88x | 4 | 0s | 3d ago | 10m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.77% | 99.57% | 12.74% | 12.74% | 2392 ms | ↑ 1.15x | 6 | 10m | 6h ago | 10m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.77% | 99.95% | 99.81% | 99.81% | 1380 ms | → 1.00x | 1 | 0s | 7h ago | 9m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.77% | 99.86% | 57.22% | 57.22% | 820 ms | ↓ 0.77x | 3 | 0s | 6d ago | 10m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.77% | 99.95% | 14.95% | 14.95% | 2312 ms | ↑ 1.22x | 1 | 0s | 5d ago | 10m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.77% | 99.81% | 32.39% | 32.39% | 193 ms | ↓ 0.86x | 4 | 0s | 5d ago | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.77% | 79.73% | 91.28% | 91.28% | 1554 ms | ↑ 1.11x | 4 | 1d 7h | 7d ago | 9m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.77% | 99.43% | 96.51% | 96.51% | 4080 ms | ↑ 1.08x | 5 | 28m | 4d ago | 10m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.77% | 99.72% | 68.71% | 68.71% | 1174 ms | ↑ 1.11x | 6 | 0s | 39m ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.77% | 99.67% | 99.70% | 99.70% | 3394 ms | → 1.05x | 7 | 0s | 13h ago | 8m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.77% | 98.86% | 90.03% | 90.03% | 1665 ms | → 1.04x | 24 | 0s | 5d ago | 10m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.77% | 99.95% | 99.81% | 99.81% | 910 ms | ↓ 0.65x | 1 | 0s | 7d ago | 6m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.77% | 99.91% | 96.10% | 96.10% | 1339 ms | → 1.00x | 2 | 0s | 7d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.77% | 99.76% | 99.84% | 99.84% | 1011 ms | ↓ 0.69x | 3 | 13m | 4d ago | 6m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.77% | 97.77% | 97.42% | 97.42% | 1432 ms | → 1.00x | 3 | 4h 53m | 4d ago | 6m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.77% | 99.91% | 97.39% | 97.39% | 1284 ms | ↓ 0.92x | 2 | 0s | 1d ago | 6m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.77% | 99.81% | 97.33% | 97.33% | 2131 ms | → 1.03x | 3 | 6m | 2d ago | 8m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.77% | 99.91% | 99.87% | 99.87% | 2406 ms | ↑ 1.11x | 2 | 0s | 15h ago | 8m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.77% | 94.26% | 94.26% | 94.26% | 985 ms | ↓ 0.91x | 2 | 12h 25m | 4h ago | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.77% | 99.92% | 99.92% | 99.92% | 2008 ms | ↑ 1.09x | 1 | 0s | 4d ago | 3m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.77% | 99.62% | 99.63% | 99.63% | 1283 ms | ↓ 0.80x | 5 | 12m | 3d ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.77% | 98.14% | 98.14% | 98.14% | 1447 ms | ↓ 0.86x | 12 | 18m | 3d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.77% | 99.57% | 96.69% | 96.69% | 1886 ms | ↓ 0.88x | 9 | 0s | 4d ago | 5m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.77% | 98.14% | 98.14% | 98.14% | 1303 ms | ↓ 0.69x | 12 | 18m | 3d ago | 4m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.77% | 98.29% | 98.34% | 98.34% | 987 ms | ↓ 0.57x | 3 | 3h 43m | 4d ago | 4m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.55% | 89.31% | 95.72% | 95.72% | 2814 ms | ↓ 0.86x | 110 | 22m | 3d ago | 21m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.55% | 99.91% | 98.03% | 98.03% | 2043 ms | → 1.03x | 2 | 0s | 4h ago | 15m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.55% | 98.59% | 99.41% | 99.41% | 2711 ms | ↓ 0.92x | 19 | 12m | 3d ago | 14m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.55% | 99.91% | 99.17% | 99.17% | 3079 ms | → 0.98x | 2 | 0s | 6d ago | 14m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.54% | 99.76% | 99.82% | 99.82% | 195 ms | ↓ 0.40x | 5 | 0s | 20h ago | 8m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.54% | 95.41% | 64.05% | 64.05% | 713 ms | ↓ 0.77x | 10 | 2h 50m | 7h ago | 10m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.54% | 85.79% | 91.57% | 91.57% | 2670 ms | → 1.02x | 13 | 7h 41m | 15h ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.54% | 98.15% | 89.44% | 89.44% | 3350 ms | ↑ 1.11x | 32 | 5m | 22h ago | 8m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.54% | 99.86% | 15.57% | 15.57% | 866 ms | ↓ 0.59x | 3 | 0s | 3d ago | 10m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.54% | 99.38% | 98.00% | 98.00% | 2169 ms | → 0.97x | 12 | 1m | 13h ago | 8m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.54% | 98.38% | 98.38% | 98.38% | 1415 ms | ↓ 0.82x | 12 | 13m | 3d ago | 4m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.54% | 99.54% | 99.54% | 99.54% | 1464 ms | → 1.02x | 6 | 0s | 4d ago | 4m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.32% | 99.81% | 99.71% | 99.71% | 1847 ms | ↓ 0.84x | 4 | 0s | 2d ago | 20m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.32% | 92.04% | 11.80% | 11.80% | 814 ms | ↓ 0.85x | 87 | 20m | 2d ago | 20m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.32% | 99.81% | 99.64% | 99.64% | 1042 ms | → 0.95x | 3 | 7m | 4d ago | 20m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.31% | 99.81% | 78.13% | 78.13% | 1771 ms | ↓ 0.83x | 2 | 26m | 6h ago | 10m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.31% | 99.81% | 13.30% | 13.30% | 1077 ms | ↓ 0.84x | 4 | 0s | 3d ago | 10m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.31% | 99.72% | 97.86% | 97.86% | 2279 ms | ↓ 0.89x | 3 | 26m | 17h ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.31% | 99.86% | 88.60% | 88.60% | 342 ms | → 1.02x | 3 | 0s | 2d ago | 6m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.31% | 99.53% | 89.22% | 89.22% | 696 ms | ↓ 0.65x | 5 | 23m | 4d ago | 6m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.31% | 97.89% | 97.89% | 97.89% | 2350 ms | ↓ 0.90x | 13 | 22m | 4d ago | 4m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.10% | 99.63% | 99.71% | 99.71% | 513 ms | ↑ 1.08x | 5 | 14m | 6d ago | 21m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.10% | 94.30% | 84.16% | 84.16% | 4417 ms | → 0.99x | 44 | 36m | 2d ago | 22m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.10% | 95.56% | 80.97% | 80.97% | 2774 ms | ↓ 0.88x | 76 | 4m | 3d ago | 22m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.10% | 80.16% | 86.37% | 86.37% | 1172 ms | ↓ 0.77x | 7 | 17h 9m | 3d ago | 20m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.10% | 99.72% | 99.85% | 99.85% | 156 ms | ↓ 0.26x | 4 | 15m | 2d ago | 20m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.10% | 99.77% | 99.89% | 99.89% | 661 ms | ↓ 0.74x | 3 | 17m | 6d ago | 20m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.09% | 95.39% | 12.24% | 12.24% | 3704 ms | → 0.98x | 66 | 10m | 22h ago | 14m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.09% | 99.81% | 99.92% | 99.92% | 761 ms | ↓ 0.83x | 1 | 1h 16m | 3d ago | 16m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.09% | 99.39% | 98.97% | 98.97% | 1491 ms | ↓ 0.81x | 12 | 2m | 12h ago | 14m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.08% | 95.84% | 97.29% | 97.29% | 2021 ms | ↑ 1.47x | 7 | 4h 1m | 5d ago | 10m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.08% | 98.63% | 83.94% | 83.94% | 600 ms | ↓ 0.33x | 7 | 1h 6m | 2d ago | 8m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 99.08% | 99.76% | 95.31% | 95.31% | 421 ms | ↓ 0.40x | 2 | 31m | 7d ago | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 99.08% | 96.97% | 52.21% | 52.21% | 1343 ms | ↓ 0.87x | 25 | 32m | 3d ago | 8m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.08% | 99.69% | 99.69% | 99.69% | 884 ms | ↓ 0.86x | 4 | 0s | 9h ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (48)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.86% | 99.76% | 97.19% | 97.19% | 1821 ms | ↓ 0.67x | 2 | 30m | 3d ago | 9m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.63% | 97.50% | 85.21% | 85.21% | 4610 ms | ↑ 1.05x | 48 | 2m | 3h ago | 10m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.62% | 99.72% | 97.86% | 97.86% | 2657 ms | ↑ 1.10x | 1 | 1h 41m | 4d ago | 8m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.62% | 99.27% | 99.27% | 99.27% | 933 ms | ↓ 0.74x | 9 | 0s | 2d ago | 3m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.42% | 98.92% | 99.23% | 99.23% | 661 ms | ↓ 0.67x | 17 | 7m | 6d ago | 21m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 98.41% | 95.75% | 43.42% | 43.42% | 2705 ms | ↑ 1.06x | 9 | 1h 42m | 2d ago | 15m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.41% | 94.59% | 98.66% | 98.66% | 3668 ms | → 0.96x | 70 | 13m | 46m ago | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.40% | 97.40% | 62.20% | 62.20% | 4689 ms | → 1.03x | 48 | 4m | 16h ago | 10m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 98.40% | 95.13% | 69.58% | 69.58% | 1379 ms | ↓ 0.85x | 19 | 1h 28m | 3d ago | 10m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 98.19% | 33.97% | 3.93% | 3.93% | 1440 ms | ↓ 0.94x | 3 | 6d 7h | 7h ago | 20m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.17% | 95.64% | 82.38% | 82.38% | 4782 ms | ↑ 1.13x | 53 | 17m | 38m ago | 8m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.16% | 90.90% | 90.90% | 90.90% | 1077 ms | ↓ 0.58x | 5 | 7h 21m | 6d ago | 2m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.96% | 97.37% | 41.98% | 41.98% | 977 ms | ↓ 0.89x | 15 | 58m | 7h ago | 19m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.96% | 97.65% | 99.13% | 99.13% | 3434 ms | ↑ 1.18x | 14 | 54m | 7h ago | 18m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.94% | 99.48% | 79.31% | 79.31% | 1721 ms | → 0.97x | 4 | 38m | 4d ago | 10m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.94% | 97.02% | 83.42% | 83.42% | 4593 ms | → 0.98x | 62 | 17s | 20h ago | 9m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 97.93% | 99.31% | 99.31% | 99.31% | 1725 ms | ↓ 0.95x | 1 | 2h 39m | 4d ago | 3m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.93% | 98.54% | 98.54% | 98.54% | 1291 ms | → 1.02x | 16 | 3m | 12h ago | 2m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.73% | 97.65% | 98.95% | 98.95% | 3515 ms | → 0.97x | 15 | 49m | 7h ago | 18m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.73% | 99.39% | 96.37% | 96.37% | 1254 ms | ↓ 0.80x | 5 | 34m | 2d ago | 15m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.73% | 86.54% | 11.04% | 11.04% | 2373 ms | ↓ 0.68x | 226 | 5m | 24h ago | 15m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.71% | 99.38% | 98.39% | 98.39% | 605 ms | ↓ 0.42x | 6 | 23m | 4d ago | 9m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.70% | 99.19% | 99.19% | 99.19% | 1097 ms | ↓ 0.82x | 1 | 3h 12m | 2d ago | 3m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.52% | 96.97% | 97.96% | 97.96% | 4620 ms | → 1.00x | 57 | 3m | 4h ago | 22m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.47% | 97.73% | 97.73% | 97.73% | 1808 ms | ↓ 0.90x | 14 | 24m | 5h ago | 3m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.47% | 99.16% | 99.16% | 99.16% | 600 ms | ↓ 0.57x | 2 | 1h 30m | 4d ago | 2m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.27% | 96.10% | 72.53% | 72.53% | 4166 ms | → 0.97x | 73 | 3m | 3h ago | 15m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 97.27% | 94.54% | 66.10% | 66.10% | 4341 ms | → 1.04x | 44 | 34m | 2h ago | 15m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 97.25% | 83.93% | 89.18% | 89.18% | 26 ms | ↓ 0.16x | 4 | 1d 5h | 12d ago | 6m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 97.24% | 96.55% | 96.55% | 96.55% | 1238 ms | ↓ 0.80x | 39 | 3m | 5h ago | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.05% | 97.18% | 12.31% | 12.31% | 1882 ms | → 1.02x | 56 | 1m | 2h ago | 18m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.42% | 93.51% | 80.11% | 80.11% | 4601 ms | → 1.02x | 119 | 3m | 3h ago | 8m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.97% | 97.73% | 95.55% | 95.55% | 2588 ms | → 0.98x | 2 | 5h 51m | 12h ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.56% | 98.88% | 98.90% | 98.90% | 727 ms | ↓ 0.63x | 1 | 7h 40m | 4d ago | 20m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.51% | 94.55% | 79.87% | 79.87% | 4798 ms | → 1.03x | 97 | 4m | 17h ago | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 93.10% | 96.39% | 96.45% | 96.45% | 3580 ms | ↑ 1.14x | 13 | 1h 40m | 7h ago | 4m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 92.68% | 98.16% | 98.53% | 98.53% | 1092 ms | ↑ 1.09x | 8 | 1h 20m | 6d ago | 10m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 91.26% | 98.20% | 98.25% | 98.25% | 3277 ms | ↑ 1.14x | 1 | 13h 23m | 3d ago | 3m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.39% | 88.42% | 13.47% | 13.47% | 4756 ms | ↑ 1.08x | 191 | 7m | 2h ago | 10m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.68% | 89.34% | 45.82% | 45.82% | 3803 ms | → 1.03x | 187 | 4m | 1h ago | 7m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 89.19% | 93.41% | 98.91% | 98.91% | 552 ms | ↓ 0.82x | 16 | 2h 44m | 2d ago | 21m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 88.33% | 82.27% | 29.68% | 29.68% | 1708 ms | ↓ 0.89x | 10 | 12h 33m | 10d ago | 10m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 87.76% | 97.47% | 99.63% | 99.63% | 2495 ms | ↑ 1.11x | 6 | 2h 50m | 4d ago | 19m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 87.16% | 95.89% | 78.84% | 78.84% | 132 ms | ↓ 0.73x | 7 | 4h 41m | 3d ago | 22m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 70.88% | 14.69% | 11.39% | 11.39% | 2896 ms | → 1.00x | 38 | 15h 23m | 5h ago | 20m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 70.18% | 39.10% | 29.48% | 29.48% | 1102 ms | ↓ 0.94x | 4 | 4d 9h | 2d ago | 8m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.13% | 69.65% | 16.34% | 16.34% | 4674 ms | ↑ 1.09x | 375 | 15m | 40m ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 59.32% | 66.07% | 61.82% | 61.82% | 4843 ms | ↑ 1.06x | 398 | 17m | 47m ago | 15m ago |

</details>

<details open>
<summary><strong>🔴 Down (214)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.51% | 96.53% | 84.66% | 84.66% | 4389 ms | → 1.04x | 67 | 3m | 19m ago | 19m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 96.57% | 99.05% | 90.94% | 90.94% | 2506 ms | ↓ 0.79x | 7 | 48m | 5h ago | 9m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 89.64% | 97.85% | 62.90% | 62.90% | 817 ms | ↓ 0.84x | 1 | 18h 30m | 19h ago | 21m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 76.14% | 76.14% | 76.14% | 76.14% | 1437 ms | → 1.00x | 23 | 22m | 32m ago | 2m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 73.02% | 92.50% | 55.71% | 55.71% | 3532 ms | → 0.97x | 14 | 4h 4m | 2d ago | 18m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 67.43% | 93.22% | 92.07% | 92.07% | 1439 ms | ↓ 0.47x | 2 | 1d 5h | 2d ago | 7m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 61.15% | 88.93% | 88.93% | 88.93% | 4710 ms | → 1.04x | 16 | 4h 14m | 3d ago | 2m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 47.17% | 87.20% | 95.80% | 95.80% | 3410 ms | → 0.97x | 13 | 7h 39m | 4d ago | 18m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 41.19% | 9.38% | 28.69% | 28.69% | 3579 ms | → 0.97x | 27 | 23h 24m | 39m ago | 9m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 33.86% | 85.29% | 50.43% | 50.43% | 2817 ms | → 0.95x | 23 | 4h 46m | 5d ago | 15m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 28.38% | 85.21% | 87.58% | 87.58% | 1162 ms | ↓ 0.70x | 2 | 2d 11h | 5d ago | 10m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 28.15% | 84.00% | 37.91% | 37.91% | 2216 ms | ↓ 0.93x | 22 | 5h 38m | 5d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 22.48% | 82.27% | 88.11% | 88.11% | 1089 ms | ↓ 0.72x | 2 | 2d 24h | 5d ago | 6m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 21.89% | 71.82% | 71.82% | 71.82% | 1112 ms | ↓ 0.74x | 6 | 22h 18m | 6d ago | 2m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 17.39% | 82.91% | 27.27% | 27.27% | 333 ms | ↓ 0.27x | 1 | 5d 21h | 6d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 15.33% | 45.34% | 11.08% | 11.08% | 3905 ms | ↑ 1.23x | 407 | 40m | 5d ago | 10m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 15.17% | 70.12% | 70.12% | 70.12% | 2691 ms | ↓ 0.88x | 1 | 6d 1h | 6d ago | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 14.71% | 3.04% | 72.16% | 72.16% | 1049 ms | → 1.00x | 4 | 7d 5h | 11h ago | 20m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 14.65% | 81.77% | 93.44% | 93.44% | 2272 ms | ↑ 1.09x | 7 | 20h 54m | 6d ago | 9m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 14.42% | 81.72% | 93.48% | 93.48% | 545 ms | ↓ 0.49x | 7 | 20h 57m | 6d ago | 8m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.83% | 9.65% | 9.65% | 9.65% | 3156 ms | → 1.00x | 112 | 3h 27m | 9h ago | 2m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 4.83% | 79.22% | 79.82% | 79.82% | 1553 ms | → 0.95x | 14 | 11h 43m | 7d ago | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 4.14% | 66.23% | 66.23% | 66.23% | 1920 ms | → 0.99x | 2 | 3d 8h | 7d ago | 3m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.92% | 79.22% | 21.62% | 21.62% | 2772 ms | ↑ 1.40x | 6 | 1d 4h | 7d ago | 10m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.91% | 25.69% | 4.29% | 4.29% | 3342 ms | ↑ 1.36x | 5 | 4d 15h | 2d ago | 16m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.90% | 8.03% | 63.48% | 63.48% | 3699 ms | ↑ 1.38x | 46 | 14h 31m | 7h ago | 22m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 86.55% | 86.55% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 71.67% | 71.67% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 77.06% | 77.06% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 19.41% | 72.37% | 72.37% | — | — | 1 | 24d 24h | 25d ago | 8m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.94% | 5.94% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 13.09% | 13.09% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 48.44% | 73.23% | 73.23% | — | — | 4 | 4d 2h | 14d ago | 6m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 10m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.55% | 3.55% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 66.35% | 84.48% | 84.48% | — | — | 4 | 2d 18h | 11d ago | 7m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 86.82% | 86.82% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.11% | 38.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 46.92% | 69.00% | 69.00% | — | — | 3 | 5d 14h | 17d ago | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 75.91% | 96.96% | 96.96% | — | — | 15 | 12h 31m | 8d ago | 21m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.79% | 25.79% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 77.91% | 77.91% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 58.67% | 58.67% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.98% | 31.98% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 87.23% | 87.23% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 65.70% | 65.70% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 80.57% | 80.57% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.82% | 16.82% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 54.14% | 54.14% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 37.81% | 37.81% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.73% | 3.73% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 10m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 87.41% | 87.41% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 54.29% | 54.29% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.14% | 30.14% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.15% | 2.15% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 62.17% | 87.92% | 87.92% | — | — | 6 | 2d 1h | 12d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 47.51% | 47.51% | 47.51% | — | — | 1 | 10d 16h | 11d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 67.25% | 71.14% | 71.14% | — | — | 3 | 3d 13h | 11d ago | 10m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 3.51% | 37.80% | 37.80% | — | — | 1 | 28d 23h | 29d ago | 8m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 57.13% | 57.13% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 31.29% | 31.29% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 59.86% | 59.86% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.14% | 6.14% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 68.87% | 68.87% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 87.18% | 87.18% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.23% | 8.23% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 83.22% | 83.22% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 26.98% | 85.89% | 85.89% | — | — | 3 | 7d 6h | 11d ago | 21m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 12h | 18d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 10m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 31.95% | 31.95% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.37% | 55.37% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 62.45% | 60.81% | 60.81% | — | — | 4 | 3d 1h | 12d ago | 9m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 18.46% | 16.50% | 16.50% | — | — | 1 | 15d 6h | 15d ago | 4m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 66.49% | 80.79% | 80.79% | — | — | 2 | 5d 11h | 11d ago | 8m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 80.23% | 80.23% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.91% | 48.91% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.45% | 44.45% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 60.21% | 60.21% | 60.21% | — | — | 5 | 1d 13h | 8d ago | 2m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 87.19% | 87.19% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 61.57% | 61.57% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.90% | 40.90% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.65% | 33.65% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.71% | 2.71% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 66.15% | 87.42% | 87.42% | — | — | 3 | 3d 16h | 11d ago | 20m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.70% | 43.70% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 87.14% | 87.14% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.89% | 34.89% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 87.07% | 87.07% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 51.07% | 71.13% | 71.13% | — | — | 2 | 7d 19h | 16d ago | 6m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 31.33% | 31.33% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 48.62% | 48.62% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 84.62% | 84.62% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 19.03% | 73.70% | 73.70% | — | — | 2 | 12d 7h | 24d ago | 10m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 49.22% | 38.63% | 38.63% | — | — | 8 | 2d | 15d ago | 6m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 83.00% | 83.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 60.64% | 60.64% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.50% | 3.50% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.42% | 45.42% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 62.05% | 62.05% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 64.33% | 66.20% | 66.20% | — | — | 39 | 6h 48m | 11d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 50.57% | 76.30% | 76.30% | — | — | 54 | 6h 40m | 15d ago | 8m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 56.57% | 93.48% | 93.48% | — | — | 1 | 13d 23h | 14d ago | 18m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.76% | 29.76% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 13.23% | 13.23% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 14.16% | 14.16% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 20.67% | 34.69% | 34.69% | — | — | 5 | 4d 18h | 21d ago | 6m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.35% | 25.35% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 11h | 19d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 65.27% | 65.27% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 6.12% | 15.32% | 15.32% | — | — | 1 | 28d 3h | 28d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.37% | 18.37% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.07% | 52.07% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 49.15% | 49.15% | 49.15% | — | — | 1 | 9d 19h | 10d ago | 3m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 58.03% | 58.03% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 49.86% | 27.22% | 27.22% | — | — | 21 | 17h 56m | 16d ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 45.13% | 45.13% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 3.32% | 59.54% | 59.54% | — | — | 2 | 14d 12h | 29d ago | 8m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.84% | 5.84% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 73.52% | 95.00% | 95.00% | — | — | 1 | 8d 19h | 9d ago | 20m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 87.28% | 87.28% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 86.14% | 86.14% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 10m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 67.18% | 67.18% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 78.88% | 78.88% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 85.98% | 85.98% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.66% | 20.66% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 5.90% | 5.90% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 36.02% | 36.02% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.36% | 8.36% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 69.10% | 69.10% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 11h | 18d ago | 11m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 71.12% | 71.12% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 55.08% | 61.15% | 61.15% | — | — | 13 | 1d 2h | 14d ago | 4m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 10.37% | 10.37% | — | — | 1 | 18d 11h | 18d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 46.16% | 46.16% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 32.92% | 32.92% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.47% | 14.47% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.90% | 18.90% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 20.09% | 22.59% | 22.59% | — | — | 1 | 24d 19h | 25d ago | 7m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 52.13% | 53.50% | 53.50% | — | — | 1 | 15d 7h | 15d ago | 3m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 18.30% | 18.30% | 18.30% | — | — | 8 | 2d | 16d ago | 2m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.37% | 1.37% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.58% | 7.58% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 9.05% | 9.05% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.53% | 52.53% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 75.43% | 76.13% | 76.13% | — | — | 2 | 4d 2h | 8d ago | 3m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 87.24% | 87.24% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 56.64% | 56.64% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.09% | 87.43% | 87.43% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 60.06% | 74.78% | 74.78% | — | — | 2 | 6d 10h | 13d ago | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.56% | 43.56% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.83% | 3.83% | 3.83% | — | — | 1 | 18d 18h | 19d ago | 4m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 85.02% | 85.02% | — | — | 1 | 29d 24h | 30d ago | 10m ago |

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
