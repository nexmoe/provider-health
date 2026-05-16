# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**599 providers** — 333 🟢 operational · 61 🟡 degraded · 205 🔴 down · 0 ⚫ unknown

_Updated 2026-05-16 05:57 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.79% | 92.50% | 92.50% | 766 ms | ↓ 0.66x | 4 | 0s | 28d ago | 15m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 97.21% | 12.78% | 12.78% | 2045 ms | → 0.99x | 5 | 3h 12m | 15d ago | 16m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 97.18% | 97.18% | 2401 ms | ↓ 0.86x | 1 | 0s | 28d ago | 24m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 97.30% | 98.69% | 98.69% | 1904 ms | ↓ 0.85x | 45 | 8m | 14d ago | 26m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.08% | 99.12% | 99.12% | 3831 ms | → 1.01x | 21 | 0s | 19d ago | 26m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 97.92% | 97.92% | 97.92% | 1932 ms | ↓ 0.93x | 11 | 13m | 12d ago | 9m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.07% | 92.59% | 92.59% | 1842 ms | ↓ 0.95x | 5 | 56m | 13d ago | 12m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1603 ms | ↓ 0.74x | 0 | — | — | 9m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 891 ms | ↓ 0.83x | 0 | — | — | 8m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.62% | 91.62% | 2031 ms | → 1.00x | 0 | — | — | 27m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 95.82% | 95.86% | 95.86% | 3554 ms | ↑ 1.20x | 5 | 3h 2m | 14d ago | 11m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 455 ms | → 1.00x | 0 | — | — | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.75% | 98.01% | 98.01% | 903 ms | ↓ 0.72x | 5 | 0s | 8d ago | 12m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 92.11% | 92.11% | 92.11% | 1015 ms | ↓ 0.95x | 1 | 1d 1h | 9d ago | 9m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.67% | 97.67% | 97.67% | 736 ms | ↓ 0.64x | 1 | 13h 57m | 23d ago | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 60.79% | 30.85% | 30.85% | 563 ms | ↓ 0.86x | 4 | 2d 13h | 17d ago | 21m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.58% | 96.18% | 96.18% | 2052 ms | → 1.03x | 4 | 25m | 12d ago | 15m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.77% | 98.77% | 761 ms | ↓ 0.70x | 2 | 0s | 13d ago | 23m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 486 ms | ↓ 0.65x | 0 | — | — | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.75% | 95.72% | 95.72% | 476 ms | ↓ 0.53x | 4 | 3m | 28d ago | 14m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2107 ms | → 0.96x | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1834 ms | → 0.96x | 0 | — | — | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.79% | 97.75% | 97.75% | 2922 ms | ↑ 1.12x | 3 | 6m | 20d ago | 13m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.56% | 96.61% | 96.61% | 178 ms | ↓ 0.33x | 1 | 12h 47m | 29d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.44% | 79.01% | 79.01% | 1867 ms | ↓ 0.86x | 15 | 2h 12m | 17d ago | 12m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1024 ms | ↓ 0.73x | 0 | — | — | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.66% | 97.08% | 97.08% | 1088 ms | ↓ 0.52x | 3 | 26m | 17d ago | 14m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 460 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.46% | 99.72% | 99.72% | 2810 ms | ↓ 0.90x | 9 | 3m | 7d ago | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.53% | 98.71% | 98.71% | 178 ms | ↓ 0.10x | 9 | 1m | 23d ago | 14m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.66% | 99.77% | 99.77% | 2350 ms | ↑ 1.14x | 5 | 8m | 12d ago | 13m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 99.49% | 95.07% | 95.07% | 2657 ms | → 1.05x | 10 | 1m | 28d ago | 13m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 75.26% | 80.05% | 80.05% | 1684 ms | → 0.96x | 2 | 4d 1h | 12d ago | 11m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.50% | 98.00% | 98.00% | 2164 ms | ↑ 1.37x | 9 | 3h 13m | 29d ago | 22m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2932 ms | ↑ 1.05x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.79% | 99.86% | 99.86% | 1155 ms | ↓ 0.92x | 2 | 20m | 7d ago | 11m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 88.26% | 89.06% | 89.06% | 1193 ms | ↓ 0.73x | 2 | 1d | 28d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.96% | 99.48% | 99.48% | 1766 ms | → 0.96x | 0 | — | — | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.75% | 99.83% | 99.83% | 4268 ms | ↑ 1.30x | 5 | 0s | 12d ago | 20m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.71% | 22.79% | 22.79% | 995 ms | ↓ 0.59x | 6 | 0s | 13d ago | 22m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1195 ms | → 0.97x | 0 | — | — | 8m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.79% | 97.82% | 97.82% | 3294 ms | ↑ 1.36x | 4 | 0s | 27d ago | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1162 ms | ↑ 1.24x | 0 | — | — | 9m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.87% | 95.84% | 95.84% | 697 ms | ↓ 0.67x | 2 | 0s | 14d ago | 15m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.63% | 49.68% | 49.68% | 941 ms | → 1.02x | 40 | 5m | 25d ago | 16m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 83.85% | 47.02% | 47.02% | 218 ms | ↓ 0.56x | 1 | 2d 17h | 30d ago | 16m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1055 ms | ↓ 0.78x | 0 | — | — | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.83% | 99.60% | 99.60% | 3070 ms | ↑ 1.07x | 3 | 0s | 28d ago | 21m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2970 ms | → 0.97x | 0 | — | — | 8m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.87% | 96.85% | 96.85% | 1614 ms | ↓ 0.87x | 2 | 0s | 22d ago | 21m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 98.74% | 96.35% | 96.35% | 1396 ms | ↓ 0.81x | 22 | 3m | 8d ago | 21m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.87% | 80.22% | 80.22% | 1991 ms | ↓ 0.95x | 2 | 0s | 21d ago | 16m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.87% | 61.47% | 61.47% | 1707 ms | ↑ 1.18x | 2 | 0s | 24d ago | 16m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 983 ms | ↓ 0.92x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.87% | 98.18% | 98.18% | 2150 ms | ↓ 0.89x | 2 | 0s | 28d ago | 13m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4130 ms | ↓ 0.90x | 0 | — | — | 8m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.92% | 92.00% | 92.00% | 891 ms | ↓ 0.77x | 1 | 0s | 28d ago | 16m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.87% | 97.99% | 97.99% | 689 ms | ↓ 0.67x | 2 | 0s | 29d ago | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.62% | 99.84% | 99.84% | 240 ms | ↓ 0.26x | 7 | 1m | 13d ago | 14m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.08% | 98.08% | 98.08% | 2528 ms | → 1.02x | 12 | 10m | 12d ago | 9m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 97.24% | 64.13% | 64.13% | 2742 ms | ↑ 1.27x | 21 | 24m | 14d ago | 12m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1905 ms | ↓ 0.95x | 0 | — | — | 8m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 86.41% | 86.41% | 86.41% | 2331 ms | ↓ 0.87x | 14 | 1d 1h | 12d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 98.43% | 96.36% | 96.36% | 1159 ms | ↓ 0.87x | 1 | 11h 51m | 8d ago | 12m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.75% | 41.62% | 41.62% | 1001 ms | ↑ 1.10x | 1 | 40m | 30d ago | 16m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.95% | 50.31% | 50.31% | 1479 ms | ↓ 0.92x | 11 | 37m | 18d ago | 22m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.92% | 97.69% | 97.69% | 2435 ms | ↑ 1.17x | 1 | 0s | 28d ago | 14m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.79% | 47.48% | 47.48% | 1109 ms | ↓ 0.87x | 3 | 6m | 24d ago | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.96% | 39.17% | 39.17% | 1211 ms | ↓ 0.66x | 0 | — | — | 22m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | ↓ 0.73x | 0 | — | — | 8m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 97.08% | 56.29% | 56.29% | 1005 ms | ↓ 0.71x | 14 | 51m | 13d ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 97.96% | 97.89% | 97.89% | 2589 ms | ↓ 0.91x | 39 | 3m | 13d ago | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.83% | 58.65% | 58.65% | 1090 ms | ↓ 0.85x | 3 | 0s | 25d ago | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2693 ms | → 0.98x | 0 | — | — | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.79% | 99.10% | 99.10% | 1760 ms | → 1.04x | 4 | 0s | 27d ago | 16m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 75.85% | 75.85% | 75.85% | 579 ms | → 0.97x | 1 | 1d 24h | 29d ago | 10m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.62% | 99.74% | 99.74% | 2701 ms | ↑ 1.20x | 8 | 0s | 12d ago | 13m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.69% | 97.81% | 97.81% | 2189 ms | ↑ 1.31x | 2 | 2h 35m | 28d ago | 16m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 82.83% | 10.94% | 10.94% | 1407 ms | ↓ 0.94x | 5 | 13h 60m | 11d ago | 21m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 99.07% | 28.37% | 28.37% | 402 ms | ↓ 0.32x | 2 | 1h 35m | 28d ago | 15m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.92% | 99.72% | 99.72% | 2601 ms | → 1.00x | 1 | 0s | 21d ago | 25m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1678 ms | → 0.97x | 0 | — | — | 8m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.58% | 98.96% | 98.96% | 2467 ms | → 0.97x | 6 | 10m | 11d ago | 25m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.17% | 99.85% | 99.85% | 3539 ms | ↑ 1.06x | 19 | 0s | 10d ago | 26m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.71% | 97.97% | 97.97% | 3711 ms | ↓ 0.89x | 26 | 2m | 27d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.92% | 99.94% | 99.94% | 788 ms | ↓ 0.78x | 1 | 0s | 25d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.92% | 68.31% | 68.31% | 2855 ms | → 1.00x | 1 | 0s | 28d ago | 14m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.02% | 87.13% | 87.13% | 397 ms | ↓ 0.78x | 10 | 11m | 27d ago | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1165 ms | ↓ 0.90x | 0 | — | — | 8m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.89% | 99.89% | 99.89% | 679 ms | ↓ 0.91x | 1 | 0s | 10d ago | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.83% | 99.94% | 99.94% | 1109 ms | ↓ 0.83x | 3 | 0s | 21d ago | 26m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.79% | 99.60% | 99.60% | 1636 ms | ↓ 0.91x | 4 | 0s | 13d ago | 24m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.53% | 87.35% | 87.35% | 2205 ms | ↑ 1.42x | 8 | 5m | 8d ago | 16m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 72.57% | 71.47% | 71.47% | 2440 ms | → 1.04x | 2 | 3d 5h | 23d ago | 13m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 100.00% | 98.85% | 39.14% | 39.14% | 2561 ms | ↑ 1.26x | 23 | 3m | 12d ago | 14m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.62% | 99.66% | 99.66% | 410 ms | ↓ 0.83x | 8 | 0s | 7d ago | 25m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1332 ms | → 0.96x | 0 | — | — | 8m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 99.96% | 75.81% | 75.81% | 1733 ms | ↑ 1.26x | 0 | — | — | 12m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1502 ms | ↓ 0.90x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1135 ms | → 1.01x | 0 | — | — | 12m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.94% | 98.94% | 525 ms | ↓ 0.72x | 0 | — | — | 16m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.92% | 98.46% | 98.46% | 1802 ms | ↑ 1.19x | 1 | 0s | 28d ago | 15m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 99.87% | 95.93% | 95.93% | 439 ms | ↓ 0.26x | 2 | 0s | 29d ago | 12m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1020 ms | → 0.96x | 0 | — | — | 8m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 693 ms | ↓ 0.60x | 0 | — | — | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1499 ms | ↓ 0.81x | 0 | — | — | 8m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 55.81% | 86.11% | 86.11% | 1465 ms | ↓ 0.84x | 3 | 3d 16h | 9d ago | 25m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 93.13% | 93.13% | 93.13% | 1952 ms | ↓ 0.88x | 12 | 1d 6h | 11d ago | 9m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 97.46% | 97.46% | 97.46% | 1734 ms | ↓ 0.93x | 11 | 20m | 12d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 95.42% | 95.47% | 95.47% | 295 ms | ↓ 0.38x | 16 | 51m | 13d ago | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.66% | 98.48% | 98.48% | 208 ms | ↓ 0.50x | 4 | 15m | 27d ago | 14m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 97.46% | 97.46% | 97.46% | 1660 ms | ↓ 0.88x | 11 | 20m | 11d ago | 9m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.49% | 98.87% | 98.87% | 807 ms | ↓ 0.61x | 11 | 0s | 19d ago | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 82.03% | 10.84% | 10.84% | 2772 ms | → 1.01x | 2 | 1d 13h | 12d ago | 20m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1012 ms | → 0.98x | 0 | — | — | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 98.94% | 14.36% | 14.36% | 1114 ms | ↑ 1.10x | 1 | 3h 40m | 30d ago | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 946 ms | ↑ 1.07x | 0 | — | — | 27m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.96% | 99.83% | 99.83% | 663 ms | → 0.99x | 0 | — | — | 26m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 734 ms | ↓ 0.67x | 0 | — | — | 25m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 96.41% | 96.46% | 96.46% | 1350 ms | ↓ 0.90x | 1 | 13h 10m | 28d ago | 10m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.17% | 99.72% | 99.72% | 2998 ms | ↑ 1.11x | 4 | 1h 15m | 10d ago | 25m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 99.75% | 97.66% | 97.66% | 2490 ms | ↑ 1.67x | 2 | 15m | 28d ago | 15m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.66% | 99.70% | 99.70% | 1316 ms | ↓ 0.89x | 5 | 8m | 8d ago | 17m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1304 ms | → 1.00x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.54% | 98.60% | 98.60% | 4347 ms | → 1.03x | 10 | 0s | 28d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 52.23% | 81.43% | 81.43% | 779 ms | ↓ 0.51x | 4 | 3d 13h | 28d ago | 14m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3270 ms | ↑ 1.48x | 0 | — | — | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1368 ms | → 0.99x | 0 | — | — | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.79% | 99.63% | 99.63% | 2747 ms | ↑ 1.33x | 3 | 56s | 8d ago | 21m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 82.11% | 35.73% | 35.73% | 722 ms | → 1.00x | 1 | 3d 2h | 30d ago | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.45% | 98.11% | 98.11% | 4206 ms | ↑ 1.49x | 11 | 55s | 28d ago | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.49% | 88.05% | 88.05% | 682 ms | ↓ 0.65x | 7 | 12m | 9d ago | 11m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.92% | 99.82% | 99.82% | 1504 ms | → 1.02x | 1 | 0s | 28d ago | 14m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.84% | 99.84% | 1413 ms | ↓ 0.83x | 2 | 0s | 8d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.79% | 99.85% | 99.85% | 2102 ms | → 1.04x | 3 | 3m | 27d ago | 16m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.92% | 99.84% | 99.84% | 2155 ms | ↑ 1.13x | 25 | 0s | 12d ago | 25m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.36% | 99.40% | 99.40% | 1808 ms | ↑ 1.36x | 3 | 37m | 28d ago | 11m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.87% | 88.42% | 88.42% | 1259 ms | → 0.98x | 2 | 0s | 22d ago | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.96% | 99.59% | 99.59% | 1039 ms | → 0.97x | 0 | — | — | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.60% | 95.62% | 95.62% | 2690 ms | → 1.00x | 6 | 47m | 20d ago | 15m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 98.90% | 13.18% | 13.18% | 2694 ms | ↑ 1.76x | 2 | 1h 50m | 27d ago | 16m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 376 ms | ↓ 0.77x | 0 | — | — | 8m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.75% | 99.74% | 99.74% | 1979 ms | ↓ 0.93x | 5 | 0s | 21d ago | 25m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 27.21% | 27.21% | 27.21% | 3498 ms | ↑ 1.06x | 2 | 10d 7h | 22d ago | 17m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.58% | 88.11% | 88.11% | 1110 ms | ↓ 0.74x | 8 | 1m | 13d ago | 24m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 98.40% | 12.94% | 12.94% | 1706 ms | ↓ 0.82x | 12 | 21m | 28d ago | 16m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.79% | 98.74% | 98.74% | 2465 ms | ↑ 1.42x | 4 | 0s | 28d ago | 15m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 81.80% | 78.14% | 78.14% | 2130 ms | ↓ 0.91x | 3 | 1d 1h | 13d ago | 26m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.91% | 99.91% | 1434 ms | → 0.98x | 1 | 0s | 26d ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 838 ms | ↓ 0.71x | 4 | 0s | 14d ago | 24m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 81.93% | 28.68% | 28.68% | 197 ms | ↓ 0.88x | 4 | 18h 27m | 13d ago | 14m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.56% | 99.56% | 1207 ms | ↓ 0.80x | 0 | — | — | 25m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1278 ms | ↓ 0.75x | 0 | — | — | 8m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.87% | 99.93% | 99.93% | 795 ms | ↓ 0.69x | 2 | 0s | 10d ago | 11m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.83% | 98.94% | 98.94% | 1669 ms | ↓ 0.86x | 3 | 0s | 28d ago | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.83% | 97.71% | 97.71% | 1133 ms | ↓ 0.77x | 3 | 0s | 29d ago | 12m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.83% | 97.30% | 97.30% | 2916 ms | ↑ 1.44x | 3 | 0s | 28d ago | 12m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 82.01% | 10.91% | 10.91% | 1366 ms | → 1.00x | 4 | 18h 27m | 14d ago | 25m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.87% | 65.10% | 65.10% | 1046 ms | ↑ 1.07x | 2 | 0s | 28d ago | 16m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.75% | 77.35% | 77.35% | 1748 ms | ↓ 0.91x | 5 | 0s | 21d ago | 16m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.67% | 99.77% | 99.77% | 1369 ms | ↓ 0.79x | 6 | 2m | 28d ago | 24m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.88% | 99.68% | 99.68% | 2068 ms | ↑ 1.11x | 1 | 10m | 29d ago | 25m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2716 ms | → 0.98x | 0 | — | — | 8m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.92% | 99.86% | 99.86% | 1053 ms | ↓ 0.79x | 1 | 0s | 28d ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 94.13% | 83.92% | 83.92% | 1131 ms | ↓ 0.83x | 87 | 6m | 12d ago | 25m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 94.78% | 37.59% | 37.59% | 577 ms | ↓ 0.52x | 10 | 3h 22m | 8d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 91.08% | 83.99% | 83.99% | 347 ms | ↓ 0.18x | 91 | 14m | 19d ago | 24m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.92% | 99.18% | 99.18% | 2148 ms | ↑ 1.13x | 1 | 0s | 28d ago | 16m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 62.88% | 62.88% | 341 ms | ↓ 0.21x | 1 | 0s | 28d ago | 16m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.92% | 96.23% | 96.23% | 1353 ms | ↑ 1.24x | 1 | 0s | 28d ago | 16m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 96.98% | 12.81% | 12.81% | 980 ms | ↓ 0.66x | 38 | 8m | 10d ago | 21m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.92% | 99.73% | 99.73% | 2335 ms | ↓ 0.94x | 1 | 0s | 14d ago | 25m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1282 ms | → 0.99x | 0 | — | — | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 52.91% | 52.91% | 576 ms | ↓ 0.59x | 1 | 0s | 28d ago | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 98.21% | 98.21% | 1346 ms | → 0.96x | 1 | 0s | 28d ago | 15m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.75% | 97.87% | 97.87% | 2130 ms | → 1.04x | 5 | 0s | 9d ago | 13m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.79% | 29.63% | 29.63% | 2086 ms | ↓ 0.91x | 4 | 0s | 15d ago | 16m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2385 ms | ↓ 0.83x | 0 | — | — | 25m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.92% | 99.88% | 99.88% | 1880 ms | → 1.05x | 1 | 0s | 28d ago | 15m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 95.85% | 62.94% | 62.94% | 783 ms | ↓ 0.90x | 10 | 2h 50m | 8d ago | 16m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.83% | 46.77% | 46.77% | 4036 ms | ↑ 1.15x | 3 | 0s | 27d ago | 14m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.83% | 99.10% | 99.10% | 2147 ms | ↑ 1.07x | 3 | 0s | 14d ago | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.00% | 98.00% | 98.00% | 1652 ms | ↑ 1.36x | 1 | 11h 52m | 16d ago | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.66% | 76.17% | 76.17% | 1498 ms | ↑ 1.59x | 2 | 50m | 16d ago | 16m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.53x | 0 | — | — | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.42% | 99.90% | 99.90% | 1731 ms | ↓ 0.85x | 10 | 3m | 13d ago | 24m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 790 ms | → 1.00x | 0 | — | — | 8m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.83% | 99.94% | 99.94% | 2065 ms | → 1.00x | 2 | 1m | 28d ago | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.92% | 99.49% | 99.49% | 2754 ms | ↑ 1.12x | 1 | 0s | 27d ago | 25m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.92% | 83.99% | 83.99% | 2044 ms | ↑ 1.45x | 1 | 0s | 28d ago | 16m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.87% | 95.69% | 95.69% | 1018 ms | ↑ 1.09x | 2 | 0s | 28d ago | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.92% | 99.97% | 99.97% | 933 ms | ↓ 0.85x | 1 | 0s | 28d ago | 24m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.70% | 98.16% | 98.16% | 483 ms | ↓ 0.45x | 5 | 2m | 7d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.36% | 90.74% | 90.74% | 2618 ms | ↓ 0.82x | 14 | 0s | 17d ago | 15m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 81.96% | 13.01% | 13.01% | 695 ms | ↓ 0.46x | 1 | 3d 2h | 30d ago | 16m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1065 ms | ↓ 0.70x | 0 | — | — | 8m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.92% | 99.93% | 99.93% | 786 ms | ↓ 0.95x | 1 | 0s | 28d ago | 13m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 81.92% | 11.42% | 11.42% | 1093 ms | ↓ 0.88x | 2 | 1d 13h | 13d ago | 16m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.87% | 56.21% | 56.21% | 1952 ms | → 1.01x | 2 | 0s | 28d ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.88% | 99.77% | 99.77% | 2642 ms | ↑ 1.07x | 2 | 0s | 21d ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 62.38% | 62.38% | 838 ms | ↓ 0.91x | 0 | — | — | 26m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.92% | 99.01% | 99.01% | 920 ms | ↓ 0.68x | 1 | 0s | 28d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.32% | 96.44% | 96.44% | 4117 ms | ↑ 1.27x | 8 | 17m | 10d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 82.15% | 10.91% | 10.91% | 864 ms | ↓ 0.90x | 1 | 3d 2h | 30d ago | 24m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 938 ms | → 0.98x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.06% | 99.06% | 99.06% | 1194 ms | ↓ 0.74x | 1 | 3h 45m | 21d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.79% | 99.90% | 99.90% | 2104 ms | ↓ 0.85x | 1 | 0s | 13d ago | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1184 ms | ↓ 0.89x | 0 | — | — | 9m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 98.86% | 13.84% | 13.84% | 1032 ms | ↓ 0.59x | 3 | 1h 13m | 11d ago | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 94.05% | 92.78% | 92.78% | 3723 ms | ↓ 0.88x | 43 | 25m | 27d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.98% | 99.98% | 2063 ms | → 1.00x | 1 | 0s | 28d ago | 15m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.49% | 98.57% | 98.57% | 2280 ms | ↑ 1.21x | 10 | 59s | 13d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.38% | 98.38% | 98.38% | 1406 ms | ↓ 0.83x | 10 | 8m | 12d ago | 9m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.70% | 99.00% | 99.00% | 1078 ms | ↓ 0.94x | 5 | 2m | 22d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.77% | 99.77% | 99.77% | 2016 ms | → 0.96x | 1 | 20m | 11d ago | 8m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 73.75% | 26.60% | 26.60% | 1625 ms | ↓ 0.82x | 2 | 2d 22h | 24d ago | 25m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.96% | 99.54% | 99.54% | 1295 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.41% | 99.41% | 1134 ms | ↓ 0.88x | 0 | — | — | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.96% | 99.99% | 99.99% | 517 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 86.81% | 58.10% | 58.10% | 2932 ms | → 1.00x | 105 | 21m | 10d ago | 25m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.25% | 91.37% | 91.37% | 1264 ms | ↓ 0.73x | 8 | 20m | 16d ago | 24m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.96% | 97.92% | 97.92% | 1560 ms | ↓ 0.84x | 0 | — | — | 11m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.59% | 96.39% | 96.39% | 2739 ms | → 1.00x | 24 | 7m | 16d ago | 25m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.91% | 99.74% | 99.74% | 675 ms | ↓ 0.61x | 1 | 0s | 28d ago | 11m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.92% | 85.70% | 85.70% | 1389 ms | → 1.03x | 1 | 0s | 28d ago | 15m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.87% | 99.71% | 99.71% | 1114 ms | → 0.97x | 2 | 0s | 13d ago | 11m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.78% | 99.78% | 1384 ms | → 1.03x | 0 | — | — | 25m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.96% | 99.45% | 99.45% | 970 ms | → 1.00x | 0 | — | — | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.96% | 99.71% | 99.71% | 878 ms | → 0.95x | 0 | — | — | 26m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.53% | 66.91% | 66.91% | 1181 ms | ↑ 1.07x | 9 | 1m | 13d ago | 14m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.87% | 99.87% | 99.87% | 2773 ms | ↑ 1.34x | 2 | 0s | 20d ago | 22m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.96% | 99.81% | 99.81% | 742 ms | → 0.97x | 0 | — | — | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.62% | 83.00% | 83.00% | 2354 ms | ↓ 0.91x | 7 | 1m | 12d ago | 21m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.92% | 98.66% | 98.66% | 1592 ms | ↓ 0.84x | 1 | 0s | 28d ago | 15m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.87% | 97.14% | 97.14% | 1425 ms | → 1.05x | 2 | 0s | 21d ago | 12m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.63% | 91.43% | 91.43% | 4067 ms | ↑ 1.05x | 7 | 1m | 28d ago | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.87% | 99.87% | 99.87% | 839 ms | → 0.96x | 1 | 0s | 11d ago | 8m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 313 ms | ↓ 0.55x | 0 | — | — | 8m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.87% | 98.63% | 98.63% | 526 ms | ↓ 0.93x | 1 | 10m | 29d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2342 ms | → 1.00x | 0 | — | — | 8m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.49% | 97.15% | 97.15% | 2857 ms | ↑ 1.16x | 10 | 2m | 16d ago | 13m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 803 ms | ↓ 0.93x | 0 | — | — | 8m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 82.07% | 22.37% | 22.37% | 825 ms | → 0.99x | 2 | 1d 13h | 17d ago | 23m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.87% | 99.77% | 99.77% | 1651 ms | ↓ 0.78x | 2 | 0s | 28d ago | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.92% | 97.92% | 97.92% | 1531 ms | ↑ 1.06x | 1 | 0s | 28d ago | 15m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.49% | 94.35% | 94.35% | 2490 ms | ↓ 0.56x | 10 | 1m | 12d ago | 13m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1357 ms | ↓ 0.88x | 1 | 0s | 30d ago | 23m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.87% | 86.28% | 86.28% | 2412 ms | ↑ 1.13x | 2 | 0s | 21d ago | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 91.01% | 96.23% | 96.23% | 2134 ms | ↑ 1.09x | 4 | 18h 51m | 19d ago | 16m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.92% | 99.86% | 99.86% | 1721 ms | → 0.99x | 1 | 0s | 25d ago | 23m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 726 ms | ↓ 0.64x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.66% | 95.54% | 95.54% | 1241 ms | ↓ 0.79x | 2 | 51m | 8d ago | 12m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.87% | 99.84% | 99.84% | 2053 ms | → 0.95x | 1 | 20m | 23d ago | 23m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.92% | 99.93% | 99.93% | 862 ms | ↑ 1.28x | 1 | 0s | 14d ago | 25m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 98.86% | 13.00% | 13.00% | 2098 ms | → 1.02x | 3 | 1h 13m | 23d ago | 16m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 81.76% | 10.75% | 10.75% | 1666 ms | → 1.02x | 6 | 12h 18m | 13d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.89% | 99.89% | 3095 ms | ↑ 1.37x | 4 | 0s | 20d ago | 13m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2986 ms | → 0.97x | 0 | — | — | 8m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.92% | 99.78% | 99.78% | 3349 ms | ↑ 1.52x | 1 | 0s | 28d ago | 13m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.29% | 99.88% | 99.88% | 1394 ms | → 0.96x | 3 | 1h 27m | 19d ago | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.96% | 99.92% | 99.92% | 3101 ms | ↑ 1.46x | 0 | — | — | 23m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.96% | 99.73% | 99.73% | 2637 ms | ↑ 1.42x | 0 | — | — | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.87% | 97.88% | 97.88% | 994 ms | ↓ 0.83x | 1 | 10m | 28d ago | 12m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.96% | 99.82% | 99.82% | 2549 ms | ↑ 1.77x | 0 | — | — | 16m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.75% | 99.04% | 99.04% | 1402 ms | ↓ 0.93x | 5 | 0s | 27d ago | 25m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 409 ms | ↓ 0.55x | 0 | — | — | 24m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 98.96% | 99.70% | 99.70% | 3477 ms | ↑ 1.58x | 3 | 1h 13m | 2d ago | 26m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.79% | 89.07% | 78.72% | 78.72% | 129 ms | ↓ 0.65x | 9 | 8h 9m | 4d ago | 26m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.79% | 99.54% | 99.18% | 99.18% | 1253 ms | ↓ 0.91x | 9 | 1m | 1d ago | 24m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.92% | 99.94% | 99.94% | 1066 ms | ↓ 0.90x | 1 | 0s | 2d ago | 25m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.83% | 99.89% | 99.89% | 260 ms | ↓ 0.21x | 3 | 0s | 2d ago | 25m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.79% | 98.92% | 99.45% | 99.45% | 3093 ms | ↓ 0.93x | 24 | 50s | 4d ago | 26m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.37% | 99.41% | 99.41% | 1771 ms | ↓ 0.85x | 12 | 3m | 2d ago | 24m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.75% | 16.76% | 16.76% | 2252 ms | → 1.02x | 5 | 0s | 1d ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.79% | 81.98% | 10.90% | 10.90% | 2202 ms | → 0.98x | 4 | 18h 27m | 5d ago | 25m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.37% | 97.65% | 97.65% | 3468 ms | → 1.02x | 12 | 3m | 4d ago | 20m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.79% | 90.22% | 77.16% | 77.16% | 2414 ms | → 1.05x | 145 | 8m | 2d ago | 21m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.79% | 90.78% | 51.02% | 51.02% | 3140 ms | ↑ 1.12x | 84 | 17m | 3d ago | 22m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.79% | 99.41% | 67.98% | 67.98% | 1113 ms | ↓ 0.89x | 10 | 6m | 5d ago | 16m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.79% | 99.62% | 98.75% | 98.75% | 1373 ms | ↑ 1.50x | 8 | 0s | 5d ago | 16m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.79% | 99.70% | 78.63% | 78.63% | 1662 ms | ↓ 0.91x | 5 | 2m | 5d ago | 16m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.87% | 72.24% | 72.24% | 760 ms | ↓ 0.73x | 2 | 0s | 2d ago | 16m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.79% | 99.79% | 78.88% | 78.88% | 1535 ms | ↓ 0.89x | 4 | 0s | 12h ago | 16m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.79% | 99.87% | 97.82% | 97.82% | 775 ms | ↓ 0.47x | 2 | 0s | 11h ago | 16m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.79% | 99.79% | 55.07% | 55.07% | 1922 ms | ↓ 0.93x | 4 | 0s | 6d ago | 16m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.87% | 99.52% | 99.52% | 962 ms | ↓ 0.69x | 2 | 0s | 5d ago | 16m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.79% | 81.62% | 10.92% | 10.92% | 2831 ms | ↑ 1.45x | 6 | 12h 28m | 5d ago | 16m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.79% | 96.56% | 96.60% | 96.60% | 2325 ms | ↓ 0.79x | 3 | 4h 13m | 5d ago | 10m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.79% | 81.93% | 43.57% | 43.57% | 1580 ms | ↓ 0.78x | 4 | 18h 27m | 4d ago | 14m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.79% | 99.89% | 99.89% | 99.89% | 1319 ms | → 1.00x | 1 | 0s | 2d ago | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.79% | 99.75% | 99.79% | 99.79% | 882 ms | ↓ 0.59x | 5 | 0s | 20h ago | 12m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.79% | 99.70% | 95.56% | 95.56% | 1406 ms | ↑ 1.13x | 5 | 2m | 22h ago | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.79% | 99.83% | 99.88% | 99.88% | 691 ms | ↓ 0.70x | 2 | 9m | 3d ago | 12m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.79% | 92.99% | 82.80% | 82.80% | 738 ms | ↓ 0.27x | 92 | 10m | 18h ago | 13m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.79% | 99.57% | 99.57% | 99.57% | 1370 ms | → 1.00x | 4 | 0s | 6d ago | 9m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.79% | 99.61% | 99.61% | 99.61% | 879 ms | ↓ 0.26x | 4 | 15m | 6d ago | 9m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.79% | 99.41% | 97.10% | 97.10% | 2769 ms | ↓ 0.92x | 12 | 50s | 14h ago | 14m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.79% | 99.41% | 99.58% | 99.58% | 1113 ms | ↑ 1.25x | 9 | 9m | 2d ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.79% | 97.39% | 97.39% | 97.39% | 3484 ms | → 1.02x | 7 | 1h 55m | 2d ago | 9m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.79% | 99.79% | 99.79% | 99.79% | 465 ms | → 0.98x | 2 | 0s | 6d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.79% | 99.70% | 98.91% | 98.91% | 1203 ms | → 0.95x | 5 | 2m | 1d ago | 15m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.79% | 98.12% | 98.12% | 98.12% | 1474 ms | → 1.01x | 2 | 1h 20m | 7d ago | 9m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.79% | 99.68% | 99.68% | 99.68% | 1469 ms | → 1.00x | 2 | 10m | 4d ago | 8m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.79% | 99.87% | 88.19% | 88.19% | 2126 ms | ↓ 0.87x | 2 | 0s | 3d ago | 15m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.79% | 92.88% | 88.30% | 88.30% | 496 ms | ↓ 0.16x | 99 | 7m | 1d ago | 14m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.79% | 99.54% | 99.54% | 99.54% | 1101 ms | → 0.97x | 4 | 0s | 19h ago | 9m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.79% | 99.88% | 99.88% | 99.88% | 906 ms | → 0.98x | 1 | 0s | 6d ago | 8m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.79% | 99.40% | 95.78% | 95.78% | 1728 ms | → 1.02x | 7 | 8m | 4d ago | 11m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.79% | 98.75% | 98.86% | 98.86% | 1814 ms | ↓ 0.94x | 8 | 5m | 4d ago | 9m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.79% | 99.79% | 98.45% | 98.45% | 649 ms | ↓ 0.45x | 4 | 0s | 5d ago | 14m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.79% | 98.60% | 99.34% | 99.34% | 3972 ms | ↑ 1.53x | 5 | 1h 48m | 4d ago | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.79% | 99.66% | 97.19% | 97.19% | 3896 ms | ↑ 1.51x | 7 | 0s | 4d ago | 13m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.79% | 99.58% | 99.70% | 99.70% | 4124 ms | ↑ 1.47x | 9 | 0s | 4d ago | 13m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.79% | 66.33% | 31.16% | 31.16% | 1340 ms | ↓ 0.62x | 21 | 9h 47m | 4d ago | 13m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.59% | 98.54% | 91.75% | 91.75% | 980 ms | ↓ 0.91x | 12 | 37m | 21h ago | 25m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.59% | 95.26% | 98.77% | 98.77% | 2961 ms | ↓ 0.88x | 86 | 5m | 4d ago | 26m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.59% | 99.66% | 99.71% | 99.71% | 3174 ms | ↑ 1.12x | 7 | 0s | 3d ago | 20m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.59% | 98.74% | 99.41% | 99.41% | 3371 ms | ↑ 1.36x | 18 | 12m | 3d ago | 20m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.59% | 99.54% | 99.79% | 99.79% | 2055 ms | → 0.95x | 9 | 19s | 3d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.59% | 99.70% | 99.28% | 99.28% | 2049 ms | → 1.03x | 6 | 0s | 7d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.59% | 99.62% | 76.39% | 76.39% | 2130 ms | ↓ 0.92x | 8 | 0s | 3d ago | 16m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.59% | 99.77% | 99.77% | 99.77% | 2349 ms | ↓ 0.92x | 2 | 0s | 2d ago | 8m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.59% | 99.54% | 99.54% | 99.54% | 2797 ms | → 0.98x | 3 | 7m | 4d ago | 8m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.59% | 97.92% | 97.16% | 97.16% | 1488 ms | → 0.99x | 4 | 3h 40m | 1d ago | 12m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.59% | 73.41% | 90.87% | 90.87% | 1481 ms | ↓ 0.76x | 8 | 1d | 14h ago | 15m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.59% | 99.79% | 99.79% | 99.79% | 1401 ms | ↓ 0.91x | 2 | 0s | 4d ago | 8m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.38% | 97.34% | 97.34% | 97.34% | 2744 ms | → 0.97x | 12 | 21m | 3d ago | 9m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.38% | 98.04% | 98.04% | 98.04% | 2162 ms | → 0.95x | 11 | 11m | 3d ago | 8m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.38% | 98.47% | 89.63% | 89.63% | 1829 ms | ↑ 1.06x | 28 | 3m | 3d ago | 15m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.18% | 99.50% | 98.97% | 98.97% | 2379 ms | ↑ 1.15x | 10 | 2m | 5d ago | 21m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.17% | 99.54% | 99.54% | 99.54% | 1871 ms | → 0.99x | 2 | 19m | 3d ago | 8m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.17% | 98.96% | 98.96% | 98.96% | 1308 ms | ↓ 0.95x | 9 | 0s | 1d ago | 8m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.17% | 96.14% | 96.18% | 96.18% | 1926 ms | ↓ 0.86x | 9 | 1h 26m | 1d ago | 10m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (61)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.97% | 90.28% | 95.65% | 95.65% | 3509 ms | ↓ 0.93x | 114 | 21m | 4d ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.97% | 97.54% | 98.65% | 98.65% | 3377 ms | → 0.96x | 49 | 4m | 2d ago | 24m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.97% | 99.32% | 99.07% | 99.07% | 175 ms | ↓ 0.40x | 11 | 13m | 2d ago | 13m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.97% | 99.32% | 94.85% | 94.85% | 993 ms | ↓ 0.58x | 11 | 7m | 17h ago | 12m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.76% | 93.49% | 84.93% | 84.93% | 4584 ms | → 1.01x | 116 | 4m | 23h ago | 16m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.76% | 99.19% | 99.19% | 99.19% | 3471 ms | → 0.99x | 5 | 9m | 3d ago | 8m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.36% | 97.99% | 98.98% | 98.98% | 3755 ms | ↑ 1.12x | 14 | 45m | 5d ago | 23m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 98.36% | 98.29% | 97.00% | 97.00% | 3789 ms | ↑ 1.13x | 12 | 48m | 5d ago | 23m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 98.36% | 98.24% | 55.45% | 55.45% | 4025 ms | ↑ 1.13x | 13 | 45m | 5d ago | 23m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.36% | 98.24% | 99.16% | 99.16% | 3801 ms | ↑ 1.54x | 12 | 50m | 5d ago | 23m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 98.35% | 99.05% | 99.05% | 99.05% | 4637 ms | → 0.98x | 11 | 2m | 1d ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.34% | 98.34% | 88.79% | 88.79% | 4051 ms | ↑ 1.70x | 31 | 5m | 2d ago | 13m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.14% | 91.99% | 60.87% | 60.87% | 4709 ms | → 0.99x | 125 | 6m | 19h ago | 15m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 98.14% | 98.96% | 98.96% | 98.96% | 1748 ms | ↓ 0.95x | 5 | 16m | 3d ago | 8m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.14% | 86.06% | 80.99% | 80.99% | 4782 ms | ↑ 1.13x | 97 | 30m | 2d ago | 13m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.95% | 98.96% | 97.67% | 97.67% | 3895 ms | → 1.01x | 24 | 0s | 2d ago | 25m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 97.95% | 98.75% | 99.21% | 99.21% | 855 ms | ↓ 0.68x | 23 | 5m | 7h ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.95% | 97.47% | 98.00% | 98.00% | 4640 ms | ↑ 1.20x | 52 | 3m | 1h ago | 27m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.74% | 81.56% | 23.95% | 23.95% | 2075 ms | ↑ 1.10x | 5 | 15h 22m | 1d ago | 23m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.74% | 79.76% | 10.56% | 10.56% | 2043 ms | ↑ 1.08x | 52 | 1h 27m | 1d ago | 23m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.54% | 99.16% | 98.59% | 98.59% | 3928 ms | ↑ 1.27x | 8 | 30m | 6d ago | 23m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.52% | 98.62% | 98.62% | 98.62% | 1797 ms | → 1.01x | 1 | 3h 38m | 4d ago | 9m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.33% | 92.36% | 84.39% | 84.39% | 4590 ms | → 1.05x | 143 | 4m | 4h ago | 23m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.12% | 79.05% | 10.45% | 10.45% | 4289 ms | ↑ 1.18x | 63 | 1h 17m | 1d ago | 20m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.11% | 99.36% | 96.47% | 96.47% | 1718 ms | → 1.00x | 1 | 4h 31m | 2d ago | 12m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 96.92% | 90.12% | 83.86% | 83.86% | 4549 ms | ↑ 1.06x | 107 | 20m | 2d ago | 27m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.91% | 91.91% | 72.01% | 72.01% | 4526 ms | → 0.99x | 150 | 4m | 17h ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.91% | 95.30% | 98.67% | 98.67% | 4284 ms | ↑ 1.18x | 66 | 14m | 1d ago | 20m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.90% | 99.28% | 94.73% | 94.73% | 1853 ms | ↑ 1.31x | 3 | 1h 26m | 4d ago | 11m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 96.71% | 97.95% | 40.82% | 40.82% | 1225 ms | ↓ 0.87x | 14 | 51m | 2d ago | 23m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.51% | 85.88% | 78.72% | 78.72% | 3339 ms | ↓ 0.94x | 152 | 13m | 19h ago | 27m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.49% | 92.11% | 82.60% | 82.60% | 4806 ms | → 1.01x | 137 | 4m | 2h ago | 14m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.29% | 92.75% | 68.57% | 68.57% | 1166 ms | ↓ 0.72x | 18 | 2h 10m | 1d ago | 16m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.28% | 96.16% | 96.16% | 96.16% | 1573 ms | ↓ 0.90x | 30 | 4m | 8h ago | 8m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.28% | 90.25% | 79.12% | 79.12% | 4834 ms | → 1.03x | 164 | 5m | 35m ago | 15m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 95.47% | 37.15% | 9.08% | 9.08% | 2736 ms | ↑ 1.12x | 7 | 2d 11h | 5d ago | 20m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 95.04% | 92.85% | 92.85% | 92.85% | 650 ms | → 1.03x | 5 | 4h 10m | 2d ago | 9m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 94.42% | 87.58% | 87.58% | 87.58% | 1412 ms | → 0.97x | 4 | 8h 26m | 48m ago | 8m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.42% | 98.77% | 95.01% | 95.01% | 1464 ms | → 1.02x | 2 | 4h 19m | 4d ago | 11m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 94.05% | 75.14% | 9.98% | 9.98% | 786 ms | ↓ 0.81x | 86 | 1h 12m | 19h ago | 25m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 94.01% | 29.91% | 25.98% | 25.98% | 1288 ms | → 0.96x | 2 | 10d 18h | 4d ago | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 92.77% | 98.06% | 98.06% | 98.06% | 1070 ms | ↓ 0.56x | 2 | 5h 34m | 4d ago | 9m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.74% | 96.35% | 48.51% | 48.51% | 1953 ms | → 0.95x | 26 | 38m | 2d ago | 13m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.29% | 72.82% | 41.81% | 41.81% | 4017 ms | ↑ 1.15x | 181 | 29m | 1h ago | 12m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 89.92% | 63.36% | 42.20% | 42.20% | 1751 ms | → 1.01x | 6 | 14h 52m | 4h ago | 21m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.28% | 76.64% | 11.64% | 11.64% | 4533 ms | ↑ 1.08x | 251 | 15m | 36m ago | 16m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.64% | 96.86% | 90.58% | 90.58% | 3379 ms | ↓ 0.94x | 13 | 1h 29m | 4d ago | 13m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 86.13% | 85.05% | 91.07% | 91.07% | 3160 ms | ↑ 1.34x | 13 | 9h 5m | 2d ago | 14m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 84.30% | 96.43% | 95.63% | 95.63% | 2642 ms | ↓ 0.88x | 5 | 5h 26m | 2d ago | 13m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 84.12% | 96.16% | 97.24% | 97.24% | 1745 ms | ↑ 1.31x | 9 | 3h 8m | 36m ago | 16m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 82.14% | 96.01% | 99.14% | 99.14% | 690 ms | ↓ 0.91x | 10 | 2h 55m | 18h ago | 25m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.07% | 90.90% | 65.47% | 65.47% | 4372 ms | ↑ 1.07x | 116 | 15m | 2d ago | 21m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 77.78% | 70.07% | 9.25% | 9.25% | 3407 ms | ↓ 0.80x | 227 | 25m | 1d ago | 21m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 73.51% | 14.93% | 1.99% | 1.99% | 1761 ms | → 1.00x | 2 | 12d 10h | 5d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 70.04% | 84.67% | 84.72% | 84.72% | 2142 ms | ↑ 1.23x | 13 | 8h 3m | 9d ago | 9m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 63.99% | 61.60% | 61.89% | 61.89% | 4863 ms | → 1.04x | 433 | 18m | 3h ago | 22m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 50.41% | 58.08% | 58.08% | 58.08% | 1103 ms | → 0.95x | 1 | 5d 5h | 9d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 49.48% | 47.12% | 11.20% | 11.20% | 4094 ms | → 1.04x | 496 | 26m | 2h ago | 15m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 42.27% | 79.97% | 27.87% | 27.87% | 1932 ms | ↓ 0.83x | 25 | 5h 58m | 4d ago | 16m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 30.37% | 85.54% | 87.75% | 87.75% | 387 ms | ↓ 0.72x | 4 | 1d 5h | 6d ago | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 23.14% | 63.82% | 73.72% | 73.72% | 584 ms | ↓ 0.29x | 3 | 4d 1h | 5d ago | 12m ago |

</details>

<details open>
<summary><strong>🔴 Down (205)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.79% | 99.71% | 99.16% | 99.16% | 3435 ms | ↑ 1.25x | 3 | 22m | 19m ago | 19m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.59% | 99.54% | 99.71% | 99.71% | 431 ms | ↓ 0.84x | 8 | 6m | 25m ago | 25m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.59% | 99.75% | 99.89% | 99.89% | 826 ms | ↓ 0.76x | 5 | 4m | 24m ago | 24m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.59% | 99.70% | 56.13% | 56.13% | 1252 ms | ↓ 0.78x | 6 | 0s | 16m ago | 16m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 95.87% | 98.98% | 98.22% | 98.22% | 2587 ms | ↑ 1.26x | 7 | 47m | 35m ago | 14m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 95.66% | 98.94% | 98.28% | 98.28% | 572 ms | ↓ 0.46x | 7 | 50m | 34m ago | 14m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.24% | 88.87% | 79.02% | 79.02% | 4678 ms | → 1.05x | 207 | 4m | 13m ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 90.50% | 96.17% | 96.17% | 96.17% | 2557 ms | → 1.00x | 14 | 1h 21m | 15h ago | 9m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 90.08% | 94.46% | 94.46% | 94.46% | 1984 ms | → 0.99x | 2 | 7h 55m | 14h ago | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 87.22% | 96.06% | 22.42% | 22.42% | 1653 ms | → 1.01x | 8 | 3h 10m | 22h ago | 15m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 75.41% | 85.80% | 85.80% | 85.80% | 971 ms | ↓ 0.90x | 5 | 8h 16m | 2d ago | 8m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 74.74% | 93.68% | 98.98% | 98.98% | 3205 ms | ↓ 0.94x | 28 | 1h 33m | 2d ago | 26m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 69.42% | 91.73% | 91.73% | 91.73% | 910 ms | ↓ 0.90x | 2 | 1d 2h | 2d ago | 8m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.12% | 57.23% | 14.31% | 14.31% | 4688 ms | → 1.02x | 346 | 28m | 36m ago | 15m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 60.99% | 91.99% | 96.96% | 96.96% | 1229 ms | ↓ 0.86x | 2 | 1d 9h | 3d ago | 24m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 46.49% | 70.09% | 70.09% | 70.09% | 2039 ms | → 1.01x | 1 | 3d 18h | 4d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 34.50% | 66.20% | 66.20% | 66.20% | 2098 ms | → 1.01x | 1 | 4d 15h | 5d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 34.02% | 85.68% | 73.75% | 73.75% | 2574 ms | ↑ 1.05x | 6 | 19h 8m | 5d ago | 16m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 30.58% | 85.61% | 86.82% | 86.82% | 1005 ms | ↓ 0.51x | 3 | 1d 15h | 5d ago | 13m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 30.37% | 85.48% | 90.98% | 90.98% | 1679 ms | ↓ 0.79x | 5 | 23h 28m | 5d ago | 13m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 30.18% | 37.72% | 87.68% | 87.68% | 521 ms | ↓ 0.48x | 81 | 5h 36m | 5d ago | 26m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 30.18% | 85.43% | 89.23% | 89.23% | 476 ms | ↓ 0.59x | 4 | 1d 6h | 5d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 30.17% | 77.90% | 77.94% | 77.94% | 3322 ms | → 1.00x | 44 | 3h | 5d ago | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 13.22% | 74.78% | 63.45% | 63.45% | 2013 ms | ↑ 1.16x | 6 | 1d 5h | 6d ago | 15m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 12.60% | 81.76% | 92.53% | 92.53% | 3290 ms | ↑ 1.44x | 7 | 20h 59m | 6d ago | 14m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.33% | 9.49% | 9.49% | 9.49% | 3138 ms | ↓ 0.82x | 82 | 3h 14m | 1h ago | 8m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.72% | 0.76% | 27.63% | 27.63% | 4557 ms | → 1.00x | 5 | 5d 22h | 6d ago | 14m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 2.48% | 79.80% | 84.06% | 84.06% | 657 ms | ↓ 0.81x | 3 | 2d 7h | 7d ago | 10m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.82% | 19.06% | 64.78% | 64.78% | 4040 ms | ↑ 1.11x | 105 | 5h 47m | 1d ago | 27m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 17.73% | 88.35% | 88.35% | — | — | 4 | 6d 17h | 27d ago | 25m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 73.15% | 73.15% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 16.12% | 78.66% | 78.66% | — | — | 25 | 1d 2h | 27d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 43.42% | 76.89% | 76.89% | — | — | 2 | 9d 11h | 19d ago | 14m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.07% | 6.07% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 14.04% | 13.37% | 13.37% | — | — | 11 | 2d 12h | 27d ago | 27m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 68.78% | 80.02% | 80.02% | — | — | 15 | 16h 32m | 8d ago | 12m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.62% | 3.62% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 17.84% | 88.61% | 88.61% | — | — | 1 | 26d 22h | 27d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.89% | 38.89% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 68.00% | 75.64% | 75.64% | — | — | 5 | 2d 4h | 11d ago | 12m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.70% | 26.70% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 14.75% | 79.53% | 79.53% | — | — | 50 | 12h 60m | 27d ago | 26m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 15.48% | 61.71% | 61.71% | — | — | 43 | 15h 7m | 27d ago | 15m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 18.01% | 32.91% | 32.91% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 17.86% | 89.05% | 89.05% | — | — | 1 | 26d 22h | 27d ago | 26m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 67.06% | 67.06% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 25m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 26m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 17.85% | 82.25% | 82.25% | — | — | 1 | 26d 22h | 27d ago | 25m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.58% | 17.58% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 18.01% | 56.02% | 56.02% | — | — | 3 | 8d 23h | 27d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 39.31% | 39.31% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 1.01% | 3.85% | 3.85% | — | — | 3 | 9d 22h | 27d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 18.00% | 89.21% | 89.21% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.92% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 27d ago | 21m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 7.53% | 55.41% | 55.41% | — | — | 2 | 14d 8h | 27d ago | 23m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.03% | 31.03% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 16.54% | 2.19% | 2.19% | — | — | 7 | 3d 21h | 27d ago | 22m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 27.30% | 40.54% | 40.54% | — | — | 4 | 5d 19h | 23d ago | 13m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 58.31% | 58.31% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 6.14% | 27.14% | 27.14% | — | — | 23 | 1d 6h | 27d ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 18.00% | 32.01% | 32.01% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.92% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 27d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 61.11% | 61.11% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 25m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.47% | 6.47% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 70.30% | 70.30% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 17.67% | 88.99% | 88.99% | — | — | 5 | 5d 9h | 27d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.90% | 8.90% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 14.16% | 84.93% | 84.93% | — | — | 65 | 10h | 27d ago | 16m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 11h | 12d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 33.99% | 33.99% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 56.52% | 56.52% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 22.51% | 22.51% | 22.51% | — | — | 2 | 5d 3h | 9d ago | 10m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 14.58% | 81.90% | 81.90% | — | — | 38 | 17h 10m | 27d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.92% | 49.92% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 27m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.37% | 45.37% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 17.82% | 89.00% | 89.00% | — | — | 2 | 13d 11h | 27d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 62.84% | 62.84% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.87% | 41.75% | 41.75% | — | — | 2 | 14d 22h | 27d ago | 25m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 25m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 19h | 30d ago | 17m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 10h | 12d ago | 17m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 11.61% | 34.68% | 34.68% | — | — | 87 | 7h 33m | 27d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 17.45% | 2.78% | 2.78% | — | — | 4 | 6d 18h | 27d ago | 16m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.60% | 44.60% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 16.33% | 88.94% | 88.94% | — | — | 21 | 1d 7h | 27d ago | 20m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 18.00% | 35.75% | 35.75% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 17.82% | 88.88% | 88.88% | — | — | 2 | 13d 11h | 27d ago | 26m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 71.77% | 79.31% | 79.31% | — | — | 3 | 3d 4h | 10d ago | 12m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 17.85% | 35.20% | 35.20% | — | — | 1 | 26d 22h | 27d ago | 25m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 50.30% | 50.30% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 15.83% | 86.38% | 86.38% | — | — | 34 | 19h 4m | 27d ago | 26m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.21% | 0.12% | 0.12% | — | — | 6 | 4d 24h | 28d ago | 20m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 43.15% | 76.87% | 76.87% | — | — | 3 | 6d 5h | 18d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 64.41% | 42.66% | 42.66% | — | — | 58 | 4h 34m | 9d ago | 11m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 19h | 30d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 84.72% | 84.72% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 17.88% | 64.59% | 64.59% | — | — | 2 | 13d 11h | 27d ago | 13m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.63% | 3.63% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.36% | 46.36% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 17.55% | 83.04% | 83.04% | — | — | 8 | 3d 9h | 27d ago | 25m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 9.64% | 63.33% | 63.33% | — | — | 100 | 6h 38m | 27d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 69.77% | 81.86% | 81.86% | — | — | 67 | 3h 19m | 9d ago | 13m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 76.84% | 95.42% | 95.42% | — | — | 3 | 2d 16h | 8d ago | 22m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.38% | 30.38% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 16.04% | 15.20% | 15.20% | — | — | 24 | 1d 3h | 27d ago | 11m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 3.39% | 14.89% | 14.89% | — | — | 60 | 11h 35m | 27d ago | 15m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 43.39% | 39.68% | 39.68% | — | — | 10 | 1d 19h | 15d ago | 11m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.88% | 25.88% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 10h | 13d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 24m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 17.26% | 68.97% | 68.97% | — | — | 15 | 1d 19h | 27d ago | 14m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 17.99% | 18.04% | 18.04% | — | — | 3 | 7d 14h | 22d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.75% | 18.75% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 53.15% | 53.15% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 10h | 12d ago | 8m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 59.22% | 59.22% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 69.72% | 28.99% | 28.99% | — | — | 23 | 10h 14m | 10d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 17.85% | 49.48% | 49.48% | — | — | 2 | 13d 11h | 27d ago | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 29.00% | 64.20% | 64.20% | — | — | 3 | 7d 16h | 23d ago | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 18.00% | 5.96% | 5.96% | — | — | 1 | 26d 21h | 27d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 24m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 17.76% | 89.08% | 89.08% | — | — | 2 | 13d 11h | 27d ago | 24m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 26m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 17.72% | 87.92% | 87.92% | — | — | 3 | 8d 23h | 27d ago | 24m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 9.72% | 68.58% | 68.58% | — | — | 93 | 7h 8m | 27d ago | 27m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 80.53% | 80.53% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 17.81% | 87.77% | 87.77% | — | — | 2 | 13d 11h | 27d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.12% | 21.12% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 6.83% | 6.83% | 6.83% | — | — | 3 | 9d 5h | 25d ago | 25m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 26.92% | 4.35% | 4.35% | — | — | 6 | 3d 15h | 16d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 17.96% | 36.81% | 36.81% | — | — | 2 | 13d 11h | 27d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 73.30% | 73.30% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.70% | 8.70% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 13.50% | 70.53% | 70.53% | — | — | 73 | 8h 55m | 27d ago | 27m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 10h | 12d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 72.60% | 72.60% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 71.99% | 72.04% | 72.04% | — | — | 14 | 14h 4m | 8d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 14.06% | 14.16% | 14.16% | — | — | 2 | 6d 5h | 12d ago | 9m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 17.88% | 50.36% | 50.36% | — | — | 2 | 13d 11h | 27d ago | 12m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 28.08% | 38.38% | 38.38% | — | — | 1 | 25d 20h | 26d ago | 11m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 15.49% | 15.49% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 20h | 30d ago | 25m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.29% | 19.29% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 43.10% | 24.61% | 24.61% | — | — | 3 | 6d 7h | 19d ago | 13m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 64.46% | 64.46% | 64.46% | — | — | 1 | 9d 6h | 9d ago | 9m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 25.48% | 25.48% | 25.48% | — | — | 8 | 1d 6h | 10d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.57% | 1.62% | 1.62% | — | — | 2 | 13d 17h | 27d ago | 9m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 8.81% | 8.86% | 8.86% | — | — | 2 | 13d 17h | 27d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 10.64% | 10.69% | 10.69% | — | — | 2 | 12d 7h | 24d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 53.61% | 53.61% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 17.79% | 89.05% | 89.05% | — | — | 2 | 13d 11h | 27d ago | 23m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 12.02% | 60.49% | 60.49% | — | — | 5 | 5d 14h | 28d ago | 13m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 26.41% | 89.23% | 89.23% | — | — | 4 | 5d 24h | 24d ago | 20m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.46% | 44.46% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 5.34% | 5.34% | 5.34% | — | — | 1 | 12d 17h | 13d ago | 9m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 14.67% | 86.77% | 86.77% | — | — | 73 | 8h 51m | 27d ago | 16m ago |

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
