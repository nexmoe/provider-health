# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**599 providers** — 331 🟢 operational · 62 🟡 degraded · 206 🔴 down · 0 ⚫ unknown

_Updated 2026-05-17 06:26 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (331)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.78% | 92.55% | 92.55% | 754 ms | ↓ 0.65x | 4 | 0s | 29d ago | 2h ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.22% | 13.07% | 13.07% | 2089 ms | → 0.95x | 3 | 4h 7m | 16d ago | 2h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.19% | 97.19% | 2290 ms | ↓ 0.84x | 1 | 0s | 29d ago | 3h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.03% | 98.69% | 98.69% | 1886 ms | ↓ 0.80x | 30 | 10m | 15d ago | 3h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.19% | 99.14% | 99.14% | 3777 ms | → 0.98x | 18 | 0s | 21d ago | 3h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.05% | 98.05% | 98.05% | 1817 ms | ↓ 0.90x | 11 | 13m | 13d ago | 2h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.13% | 92.71% | 92.71% | 1850 ms | ↓ 0.91x | 3 | 1h 33m | 14d ago | 2h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1566 ms | ↓ 0.73x | 0 | — | — | 2h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 873 ms | ↓ 0.84x | 0 | — | — | 2h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.64% | 91.64% | 2014 ms | → 0.96x | 0 | — | — | 3h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.30% | 95.96% | 95.96% | 3552 ms | ↑ 1.18x | 4 | 28m | 15d ago | 2h ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 438 ms | → 1.00x | 0 | — | — | 2h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.74% | 98.03% | 98.03% | 903 ms | ↓ 0.72x | 5 | 0s | 9d ago | 2h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 92.58% | 92.58% | 92.58% | 1004 ms | ↓ 0.94x | 1 | 1d 1h | 10d ago | 2h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.74% | 97.74% | 97.74% | 725 ms | ↓ 0.64x | 1 | 13h 57m | 24d ago | 2h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 65.13% | 31.07% | 31.07% | 570 ms | ↓ 0.86x | 4 | 2d 7h | 18d ago | 3h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.61% | 96.21% | 96.21% | 2064 ms | → 1.00x | 3 | 33m | 13d ago | 2h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.77% | 98.77% | 761 ms | ↓ 0.69x | 2 | 0s | 14d ago | 3h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 477 ms | ↓ 0.66x | 0 | — | — | 2h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.74% | 95.76% | 95.76% | 476 ms | ↓ 0.53x | 4 | 3m | 29d ago | 2h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2077 ms | ↓ 0.93x | 0 | — | — | 2h ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1939 ms | → 0.99x | 0 | — | — | 2h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.78% | 97.78% | 97.78% | 2848 ms | ↑ 1.06x | 3 | 6m | 21d ago | 2h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 96.65% | 96.70% | 96.70% | 175 ms | ↓ 0.33x | 1 | 12h 47m | 30d ago | 2h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.26% | 79.32% | 79.32% | 1753 ms | ↓ 0.80x | 14 | 2h 21m | 18d ago | 2h ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1012 ms | ↓ 0.73x | 0 | — | — | 2h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.65% | 97.10% | 97.10% | 1090 ms | ↓ 0.51x | 3 | 26m | 18d ago | 2h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 435 ms | ↓ 0.61x | 0 | — | — | 3h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.53% | 99.72% | 99.72% | 2809 ms | ↓ 0.86x | 8 | 3m | 8d ago | 3h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.61% | 98.72% | 98.72% | 178 ms | ↓ 0.10x | 7 | 1m | 24d ago | 2h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.65% | 99.77% | 99.77% | 2323 ms | ↑ 1.06x | 5 | 8m | 13d ago | 2h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 99.61% | 95.12% | 95.12% | 2502 ms | → 0.99x | 7 | 1m | 29d ago | 2h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 74.53% | 80.43% | 80.43% | 1686 ms | ↓ 0.93x | 2 | 4d 1h | 13d ago | 2h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.67% | 98.01% | 98.01% | 2132 ms | ↑ 1.28x | 1 | 1d 5h | 30d ago | 3h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3054 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.78% | 99.86% | 99.86% | 1122 ms | ↓ 0.87x | 2 | 20m | 8d ago | 2h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.96% | 99.48% | 99.48% | 1750 ms | ↓ 0.94x | 0 | — | — | 3h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.78% | 99.83% | 99.83% | 4273 ms | ↑ 1.26x | 4 | 0s | 13d ago | 3h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.70% | 23.03% | 23.03% | 963 ms | ↓ 0.57x | 6 | 0s | 14d ago | 3h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1161 ms | ↓ 0.94x | 0 | — | — | 2h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.87% | 97.85% | 97.85% | 3232 ms | ↑ 1.29x | 2 | 0s | 28d ago | 2h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1149 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.80% | 99.80% | 99.80% | 465 ms | → 0.98x | 2 | 0s | 7d ago | 2h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.87% | 95.87% | 95.87% | 694 ms | ↓ 0.65x | 2 | 0s | 15d ago | 2h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.87% | 49.87% | 49.87% | 924 ms | → 1.01x | 31 | 6m | 26d ago | 2h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 86.95% | 47.23% | 47.23% | 219 ms | ↓ 0.58x | 1 | 2d 1h | 30d ago | 2h ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1055 ms | ↓ 0.78x | 0 | — | — | 2h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.83% | 99.60% | 99.60% | 2961 ms | → 1.05x | 3 | 0s | 29d ago | 3h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.87% | 96.86% | 96.86% | 1523 ms | ↓ 0.89x | 2 | 0s | 23d ago | 3h ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 98.92% | 96.37% | 96.37% | 1413 ms | ↓ 0.80x | 20 | 2m | 9d ago | 3h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 98.22% | 98.22% | 98.22% | 1420 ms | → 0.99x | 2 | 1h 20m | 8d ago | 2h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.87% | 80.34% | 80.34% | 1962 ms | ↓ 0.89x | 2 | 0s | 22d ago | 2h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.91% | 61.65% | 61.65% | 1685 ms | ↑ 1.14x | 1 | 0s | 25d ago | 2h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 969 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.87% | 98.20% | 98.20% | 2099 ms | ↓ 0.84x | 2 | 0s | 29d ago | 2h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3931 ms | ↓ 0.83x | 0 | — | — | 2h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.91% | 92.04% | 92.04% | 834 ms | ↓ 0.76x | 1 | 0s | 29d ago | 2h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.87% | 98.02% | 98.02% | 682 ms | ↓ 0.66x | 2 | 0s | 30d ago | 2h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.61% | 99.84% | 99.84% | 237 ms | ↓ 0.25x | 7 | 1m | 14d ago | 2h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.19% | 98.19% | 98.19% | 2353 ms | → 0.99x | 12 | 10m | 13d ago | 2h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.13% | 64.65% | 64.65% | 2472 ms | ↑ 1.22x | 19 | 0s | 15d ago | 2h ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1866 ms | ↓ 0.93x | 0 | — | — | 2h ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 87.13% | 87.13% | 87.13% | 2119 ms | ↓ 0.84x | 14 | 1d 1h | 13d ago | 2h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.96% | 41.83% | 41.83% | 938 ms | ↑ 1.07x | 0 | — | — | 2h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.93% | 50.47% | 50.47% | 1441 ms | ↓ 0.85x | 10 | 41m | 19d ago | 3h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.71% | 97.71% | 2426 ms | ↑ 1.09x | 1 | 0s | 29d ago | 2h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.78% | 47.66% | 47.66% | 1107 ms | ↓ 0.86x | 3 | 6m | 25d ago | 2h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.96% | 39.36% | 39.36% | 1153 ms | ↓ 0.64x | 0 | — | — | 3h ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1281 ms | ↓ 0.73x | 0 | — | — | 2h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.95% | 56.52% | 56.52% | 946 ms | ↓ 0.71x | 12 | 18m | 14d ago | 2h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 97.95% | 97.92% | 97.92% | 2567 ms | ↓ 0.92x | 38 | 3m | 14d ago | 2h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.87% | 58.82% | 58.82% | 1079 ms | ↓ 0.83x | 2 | 0s | 26d ago | 2h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2514 ms | → 0.96x | 0 | — | — | 2h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.78% | 99.10% | 99.10% | 1675 ms | → 1.02x | 4 | 0s | 28d ago | 2h ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 77.04% | 77.04% | 77.04% | 578 ms | → 0.97x | 1 | 1d 24h | 30d ago | 2h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.61% | 99.75% | 99.75% | 2677 ms | ↑ 1.13x | 8 | 0s | 13d ago | 2h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.91% | 97.82% | 97.82% | 2156 ms | ↑ 1.26x | 1 | 0s | 29d ago | 2h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 87.81% | 11.23% | 11.23% | 1408 ms | ↓ 0.94x | 5 | 9h 6m | 12d ago | 3h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.91% | 99.72% | 99.72% | 2609 ms | → 0.97x | 1 | 0s | 22d ago | 3h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1607 ms | → 0.96x | 0 | — | — | 2h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.57% | 98.96% | 98.96% | 2505 ms | → 0.95x | 6 | 10m | 12d ago | 3h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.14% | 99.85% | 99.85% | 3434 ms | → 0.98x | 19 | 0s | 11d ago | 3h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 98.72% | 97.98% | 97.98% | 3636 ms | ↓ 0.86x | 25 | 2m | 28d ago | 3h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.91% | 99.94% | 99.94% | 781 ms | ↓ 0.76x | 1 | 0s | 26d ago | 3h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.91% | 68.59% | 68.59% | 2752 ms | → 0.95x | 1 | 0s | 29d ago | 2h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.61% | 87.41% | 87.41% | 397 ms | ↓ 0.82x | 8 | 0s | 28d ago | 2h ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.90% | 99.90% | 99.90% | 724 ms | ↓ 0.92x | 1 | 0s | 11d ago | 2h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.83% | 99.94% | 99.94% | 1121 ms | ↓ 0.83x | 3 | 0s | 22d ago | 3h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.79% | 99.60% | 99.60% | 1620 ms | ↓ 0.88x | 4 | 0s | 14d ago | 3h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.52% | 87.44% | 87.44% | 2194 ms | ↑ 1.32x | 8 | 5m | 9d ago | 2h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 77.27% | 71.78% | 71.78% | 2425 ms | → 1.02x | 2 | 2d 17h | 24d ago | 2h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.61% | 99.67% | 99.67% | 423 ms | ↓ 0.83x | 8 | 0s | 9d ago | 3h ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1295 ms | ↓ 0.94x | 0 | — | — | 2h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 99.96% | 76.23% | 76.23% | 1732 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1495 ms | ↓ 0.90x | 0 | — | — | 2h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1121 ms | → 0.96x | 0 | — | — | 2h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.96% | 98.94% | 98.94% | 494 ms | ↓ 0.69x | 0 | — | — | 2h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.91% | 98.47% | 98.47% | 1745 ms | ↑ 1.16x | 1 | 0s | 29d ago | 2h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 99.87% | 96.01% | 96.01% | 438 ms | ↓ 0.27x | 2 | 0s | 30d ago | 2h ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1004 ms | ↓ 0.94x | 0 | — | — | 2h ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 687 ms | ↓ 0.59x | 0 | — | — | 2h ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1464 ms | ↓ 0.81x | 0 | — | — | 2h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 60.03% | 86.15% | 86.15% | 1431 ms | ↓ 0.83x | 3 | 3d 8h | 10d ago | 3h ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 93.56% | 93.56% | 93.56% | 1824 ms | ↓ 0.83x | 12 | 1d 6h | 12d ago | 2h ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 97.62% | 97.62% | 97.62% | 1701 ms | ↓ 0.92x | 11 | 20m | 13d ago | 2h ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 95.55% | 95.60% | 95.60% | 288 ms | ↓ 0.38x | 16 | 51m | 14d ago | 2h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.74% | 98.49% | 98.49% | 202 ms | ↓ 0.49x | 2 | 30m | 28d ago | 2h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 97.62% | 97.62% | 97.62% | 1610 ms | ↓ 0.84x | 11 | 20m | 12d ago | 2h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.48% | 98.88% | 98.88% | 811 ms | ↓ 0.61x | 11 | 0s | 20d ago | 2h ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 86.99% | 11.12% | 11.12% | 2746 ms | → 1.00x | 2 | 1d 1h | 13d ago | 3h ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 990 ms | → 0.95x | 0 | — | — | 2h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 99.96% | 14.67% | 14.67% | 1103 ms | → 1.03x | 0 | — | — | 2h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 874 ms | → 0.97x | 0 | — | — | 3h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.96% | 99.83% | 99.83% | 659 ms | → 0.99x | 0 | — | — | 3h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 706 ms | ↓ 0.65x | 0 | — | — | 3h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 96.50% | 96.55% | 96.55% | 1335 ms | ↓ 0.88x | 1 | 13h 10m | 29d ago | 2h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.14% | 99.72% | 99.72% | 2975 ms | ↑ 1.06x | 4 | 1h 15m | 11d ago | 3h ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 99.74% | 97.68% | 97.68% | 2478 ms | ↑ 1.60x | 2 | 15m | 29d ago | 2h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.70% | 99.71% | 99.71% | 1316 ms | ↓ 0.88x | 4 | 10m | 9d ago | 2h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1277 ms | → 0.98x | 0 | — | — | 2h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.61% | 98.60% | 98.60% | 4268 ms | → 0.99x | 8 | 0s | 29d ago | 3h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 50.83% | 81.60% | 81.60% | 778 ms | ↓ 0.50x | 4 | 3d 13h | 29d ago | 2h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 3246 ms | ↑ 1.41x | 0 | — | — | 3h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1332 ms | → 0.97x | 0 | — | — | 2h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.78% | 99.63% | 99.63% | 2717 ms | ↑ 1.26x | 3 | 56s | 9d ago | 3h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.70% | 99.29% | 99.29% | 2002 ms | → 1.00x | 5 | 0s | 8d ago | 2h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 87.15% | 35.94% | 35.94% | 712 ms | → 0.99x | 1 | 2d 1h | 30d ago | 3h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.65% | 98.13% | 98.13% | 4140 ms | ↑ 1.41x | 6 | 2m | 29d ago | 2h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.52% | 88.27% | 88.27% | 686 ms | ↓ 0.62x | 6 | 14m | 10d ago | 2h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.91% | 99.82% | 99.82% | 1465 ms | → 1.00x | 1 | 0s | 29d ago | 2h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.85% | 99.85% | 1351 ms | ↓ 0.82x | 2 | 0s | 9d ago | 3h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.87% | 99.86% | 99.86% | 2055 ms | → 1.01x | 2 | 0s | 28d ago | 2h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.89% | 99.84% | 99.84% | 2084 ms | ↑ 1.06x | 25 | 0s | 13d ago | 3h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.91% | 99.42% | 99.42% | 1808 ms | ↑ 1.34x | 1 | 0s | 29d ago | 2h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.87% | 88.49% | 88.49% | 1232 ms | → 0.96x | 2 | 0s | 23d ago | 2h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.96% | 99.59% | 99.59% | 1035 ms | → 0.97x | 0 | — | — | 3h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.56% | 95.66% | 95.66% | 2597 ms | → 0.97x | 6 | 47m | 21d ago | 2h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.91% | 13.47% | 13.47% | 2698 ms | ↑ 1.65x | 1 | 0s | 28d ago | 2h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 369 ms | ↓ 0.77x | 0 | — | — | 2h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.74% | 99.74% | 99.74% | 1960 ms | ↓ 0.91x | 5 | 0s | 22d ago | 3h ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 30.35% | 29.00% | 29.00% | 3527 ms | ↑ 1.07x | 2 | 9d 21h | 23d ago | 2h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.57% | 88.15% | 88.15% | 1005 ms | ↓ 0.69x | 8 | 1m | 14d ago | 3h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.43% | 13.22% | 13.22% | 1745 ms | ↓ 0.82x | 11 | 2m | 29d ago | 2h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.87% | 98.75% | 98.75% | 2444 ms | ↑ 1.38x | 2 | 0s | 29d ago | 2h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 86.86% | 78.21% | 78.21% | 2073 ms | ↓ 0.89x | 3 | 16h 60m | 14d ago | 3h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1348 ms | → 0.96x | 1 | 0s | 27d ago | 3h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 873 ms | ↓ 0.71x | 4 | 0s | 15d ago | 3h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 86.91% | 29.30% | 29.30% | 197 ms | ↓ 0.89x | 4 | 12h 19m | 14d ago | 2h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.56% | 99.56% | 1133 ms | ↓ 0.78x | 0 | — | — | 3h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1223 ms | ↓ 0.72x | 0 | — | — | 2h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.87% | 99.93% | 99.93% | 793 ms | ↓ 0.67x | 2 | 0s | 11d ago | 2h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.83% | 98.95% | 98.95% | 1663 ms | ↓ 0.84x | 3 | 0s | 29d ago | 3h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.83% | 97.75% | 97.75% | 1134 ms | ↓ 0.76x | 3 | 0s | 30d ago | 2h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.83% | 97.34% | 97.34% | 2855 ms | ↑ 1.36x | 3 | 0s | 29d ago | 2h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 87.01% | 11.20% | 11.20% | 1342 ms | → 1.00x | 4 | 12h 20m | 15d ago | 3h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.87% | 65.28% | 65.28% | 1017 ms | → 1.01x | 2 | 0s | 29d ago | 2h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.74% | 77.48% | 77.48% | 1731 ms | ↓ 0.86x | 5 | 0s | 22d ago | 2h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.66% | 99.77% | 99.77% | 1290 ms | ↓ 0.77x | 6 | 2m | 29d ago | 3h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.87% | 99.68% | 99.68% | 2021 ms | ↑ 1.06x | 1 | 10m | 30d ago | 3h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2648 ms | → 0.96x | 0 | — | — | 2h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.91% | 99.86% | 99.86% | 1031 ms | ↓ 0.78x | 1 | 0s | 29d ago | 2h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 95.63% | 83.98% | 83.98% | 1121 ms | ↓ 0.86x | 64 | 6m | 13d ago | 3h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.63% | 38.20% | 38.20% | 562 ms | ↓ 0.49x | 9 | 3h 20m | 9d ago | 2h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 93.91% | 84.04% | 84.04% | 350 ms | ↓ 0.20x | 60 | 14m | 20d ago | 3h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.91% | 99.18% | 99.18% | 2122 ms | ↑ 1.10x | 1 | 0s | 29d ago | 2h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.91% | 63.05% | 63.05% | 347 ms | ↓ 0.21x | 1 | 0s | 29d ago | 2h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 96.25% | 96.25% | 1215 ms | ↑ 1.17x | 1 | 0s | 29d ago | 2h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 97.41% | 13.09% | 13.09% | 999 ms | ↓ 0.70x | 37 | 6m | 11d ago | 3h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.91% | 99.74% | 99.74% | 2217 ms | ↓ 0.91x | 1 | 0s | 15d ago | 3h ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1232 ms | → 0.97x | 0 | — | — | 2h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 53.11% | 53.11% | 556 ms | ↓ 0.56x | 1 | 0s | 29d ago | 2h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 98.23% | 98.23% | 1352 ms | → 0.95x | 1 | 0s | 29d ago | 2h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.74% | 97.89% | 97.89% | 2125 ms | → 0.99x | 5 | 0s | 10d ago | 2h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.78% | 30.05% | 30.05% | 2059 ms | ↓ 0.87x | 4 | 0s | 16d ago | 2h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2396 ms | ↓ 0.82x | 0 | — | — | 3h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.91% | 99.88% | 99.88% | 1840 ms | → 1.03x | 1 | 0s | 29d ago | 2h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.83% | 47.24% | 47.24% | 4013 ms | ↑ 1.11x | 3 | 0s | 28d ago | 2h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.83% | 99.11% | 99.11% | 2162 ms | → 1.04x | 3 | 0s | 15d ago | 2h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.06% | 98.06% | 98.06% | 1520 ms | ↑ 1.33x | 1 | 11h 52m | 17d ago | 2h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.65% | 76.30% | 76.30% | 1454 ms | ↑ 1.46x | 2 | 50m | 17d ago | 2h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.58x | 0 | — | — | 3h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.40% | 99.90% | 99.90% | 1674 ms | ↓ 0.80x | 10 | 3m | 14d ago | 3h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 795 ms | → 1.00x | 0 | — | — | 2h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.83% | 99.94% | 99.94% | 1936 ms | ↓ 0.94x | 2 | 1m | 29d ago | 3h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.91% | 99.49% | 99.49% | 2695 ms | ↑ 1.06x | 1 | 0s | 28d ago | 3h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.91% | 84.09% | 84.09% | 2024 ms | ↑ 1.35x | 1 | 0s | 29d ago | 2h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.87% | 95.70% | 95.70% | 982 ms | → 1.03x | 2 | 0s | 29d ago | 2h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.97% | 99.97% | 934 ms | ↓ 0.87x | 1 | 0s | 29d ago | 3h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.69% | 98.18% | 98.18% | 473 ms | ↓ 0.44x | 5 | 2m | 8d ago | 2h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.35% | 90.80% | 90.80% | 2620 ms | ↓ 0.82x | 14 | 0s | 18d ago | 2h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 86.95% | 13.35% | 13.35% | 709 ms | ↓ 0.46x | 1 | 2d 1h | 30d ago | 2h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1195 ms | ↓ 0.79x | 0 | — | — | 2h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.91% | 99.93% | 99.93% | 769 ms | ↓ 0.94x | 1 | 0s | 29d ago | 2h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.87% | 56.40% | 56.40% | 1927 ms | → 0.96x | 2 | 0s | 29d ago | 2h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.91% | 99.77% | 99.77% | 2617 ms | → 1.02x | 1 | 0s | 22d ago | 3h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 62.51% | 62.51% | 825 ms | ↓ 0.90x | 0 | — | — | 3h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.91% | 99.01% | 99.01% | 894 ms | ↓ 0.64x | 1 | 0s | 29d ago | 3h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.35% | 96.45% | 96.45% | 4113 ms | ↑ 1.21x | 7 | 20m | 11d ago | 2h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 87.12% | 11.20% | 11.20% | 838 ms | ↓ 0.88x | 1 | 2d 1h | 30d ago | 3h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 942 ms | → 0.99x | 0 | — | — | 2h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.09% | 99.09% | 99.09% | 1138 ms | ↓ 0.73x | 1 | 3h 45m | 22d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.81% | 99.90% | 99.90% | 1987 ms | ↓ 0.80x | 1 | 0s | 14d ago | 2h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1184 ms | ↓ 0.88x | 0 | — | — | 2h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.87% | 14.12% | 14.12% | 1044 ms | ↓ 0.58x | 2 | 0s | 12d ago | 2h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 94.00% | 92.81% | 92.81% | 3646 ms | ↓ 0.89x | 40 | 27m | 28d ago | 3h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.98% | 99.98% | 2076 ms | → 0.97x | 1 | 0s | 29d ago | 2h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.56% | 98.59% | 98.59% | 2263 ms | ↑ 1.13x | 9 | 0s | 14d ago | 2h ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.49% | 98.49% | 98.49% | 1237 ms | ↓ 0.78x | 10 | 8m | 13d ago | 2h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.69% | 99.01% | 99.01% | 1039 ms | ↓ 0.89x | 5 | 2m | 23d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.78% | 99.78% | 99.78% | 2009 ms | → 0.95x | 1 | 20m | 12d ago | 2h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 78.53% | 27.24% | 27.24% | 1601 ms | ↓ 0.80x | 2 | 2d 10h | 25d ago | 3h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.96% | 99.54% | 99.54% | 1323 ms | ↓ 0.91x | 0 | — | — | 3h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.41% | 99.41% | 1061 ms | ↓ 0.82x | 0 | — | — | 3h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.96% | 99.99% | 99.99% | 514 ms | ↓ 0.86x | 0 | — | — | 3h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 90.15% | 58.24% | 58.24% | 2897 ms | → 1.00x | 77 | 20m | 11d ago | 3h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.23% | 91.40% | 91.40% | 1232 ms | ↓ 0.72x | 7 | 23m | 17d ago | 3h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.96% | 97.96% | 97.96% | 1535 ms | ↓ 0.82x | 0 | — | — | 2h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.54% | 96.40% | 96.40% | 2736 ms | → 0.96x | 24 | 7m | 17d ago | 3h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.91% | 99.74% | 99.74% | 644 ms | ↓ 0.56x | 1 | 0s | 29d ago | 2h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.91% | 85.82% | 85.82% | 1362 ms | → 1.00x | 1 | 0s | 29d ago | 2h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.87% | 99.72% | 99.72% | 1081 ms | ↓ 0.89x | 2 | 0s | 14d ago | 2h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.79% | 99.79% | 1384 ms | → 1.02x | 0 | — | — | 3h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.96% | 99.45% | 99.45% | 964 ms | → 0.98x | 0 | — | — | 3h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.96% | 99.71% | 99.71% | 853 ms | ↓ 0.93x | 0 | — | — | 3h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.52% | 67.21% | 67.21% | 1182 ms | → 1.02x | 9 | 1m | 14d ago | 2h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.87% | 99.87% | 99.87% | 2711 ms | ↑ 1.27x | 2 | 0s | 21d ago | 3h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.96% | 99.81% | 99.81% | 726 ms | → 0.97x | 0 | — | — | 3h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.65% | 83.05% | 83.05% | 2227 ms | ↓ 0.90x | 6 | 2m | 13d ago | 3h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.91% | 98.67% | 98.67% | 1607 ms | ↓ 0.84x | 1 | 0s | 29d ago | 2h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.91% | 97.19% | 97.19% | 1423 ms | → 1.02x | 1 | 0s | 22d ago | 2h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.66% | 91.46% | 91.46% | 4028 ms | → 0.99x | 6 | 2m | 29d ago | 3h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.88% | 99.88% | 99.88% | 776 ms | ↓ 0.92x | 1 | 0s | 12d ago | 2h ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 312 ms | ↓ 0.56x | 0 | — | — | 2h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.96% | 98.64% | 98.64% | 518 ms | ↓ 0.93x | 0 | — | — | 2h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2331 ms | → 1.00x | 0 | — | — | 2h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.52% | 97.18% | 97.18% | 2764 ms | ↑ 1.12x | 9 | 2m | 17d ago | 2h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 710 ms | ↓ 0.94x | 0 | — | — | 2h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 87.05% | 22.63% | 22.63% | 806 ms | → 0.96x | 2 | 1d 1h | 18d ago | 3h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.87% | 99.77% | 99.77% | 1006 ms | ↓ 0.74x | 2 | 0s | 29d ago | 2h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.91% | 97.93% | 97.93% | 1448 ms | → 0.97x | 1 | 0s | 29d ago | 2h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.48% | 94.42% | 94.42% | 2215 ms | ↓ 0.54x | 10 | 1m | 13d ago | 2h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.96% | 99.92% | 99.92% | 1301 ms | ↓ 0.84x | 0 | — | — | 3h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.87% | 86.37% | 86.37% | 2437 ms | ↑ 1.08x | 2 | 0s | 22d ago | 2h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.78% | 96.24% | 96.24% | 2182 ms | → 1.04x | 3 | 1d 1h | 20d ago | 2h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.91% | 99.86% | 99.86% | 1719 ms | → 0.96x | 1 | 0s | 26d ago | 3h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 721 ms | ↓ 0.64x | 0 | — | — | 2h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.65% | 95.61% | 95.61% | 1238 ms | ↓ 0.78x | 2 | 51m | 9d ago | 2h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.87% | 99.84% | 99.84% | 2029 ms | ↓ 0.93x | 1 | 20m | 24d ago | 3h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.91% | 99.93% | 99.93% | 843 ms | ↑ 1.19x | 1 | 0s | 15d ago | 3h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.87% | 13.28% | 13.28% | 2203 ms | → 0.98x | 2 | 0s | 24d ago | 2h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 86.74% | 11.04% | 11.04% | 1611 ms | → 1.00x | 6 | 8h 13m | 14d ago | 2h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.83% | 99.89% | 99.89% | 2972 ms | ↑ 1.29x | 3 | 0s | 21d ago | 2h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2919 ms | → 0.97x | 0 | — | — | 2h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.91% | 99.79% | 99.79% | 3365 ms | ↑ 1.42x | 1 | 0s | 29d ago | 2h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.27% | 99.88% | 99.88% | 1392 ms | ↓ 0.94x | 3 | 1h 27m | 20d ago | 3h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.96% | 99.92% | 99.92% | 3081 ms | ↑ 1.38x | 0 | — | — | 3h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.96% | 99.73% | 99.73% | 2522 ms | ↑ 1.35x | 0 | — | — | 3h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.87% | 97.91% | 97.91% | 992 ms | ↓ 0.80x | 1 | 10m | 30d ago | 2h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.96% | 99.82% | 99.82% | 2562 ms | ↑ 1.66x | 0 | — | — | 2h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.74% | 99.05% | 99.05% | 1374 ms | ↓ 0.89x | 5 | 0s | 28d ago | 3h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 386 ms | ↓ 0.53x | 0 | — | — | 3h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 98.93% | 99.70% | 99.70% | 3411 ms | ↑ 1.47x | 3 | 1h 13m | 3d ago | 3h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.79% | 91.57% | 78.79% | 78.79% | 130 ms | ↓ 0.66x | 8 | 7h 45m | 5d ago | 3h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.91% | 99.94% | 99.94% | 1049 ms | ↓ 0.89x | 1 | 0s | 3d ago | 3h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.87% | 99.89% | 99.89% | 251 ms | ↓ 0.20x | 2 | 0s | 3d ago | 3h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.79% | 98.89% | 99.45% | 99.45% | 3015 ms | ↓ 0.88x | 24 | 50s | 5d ago | 3h ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.36% | 99.43% | 99.43% | 1685 ms | ↓ 0.82x | 12 | 3m | 3d ago | 3h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.74% | 17.03% | 17.03% | 2198 ms | → 0.96x | 5 | 0s | 2d ago | 3h ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.79% | 87.01% | 11.19% | 11.19% | 2187 ms | → 0.97x | 4 | 12h 20m | 6d ago | 3h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.79% | 99.39% | 68.15% | 68.15% | 1097 ms | ↓ 0.88x | 10 | 6m | 6d ago | 2h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.35% | 97.66% | 97.66% | 3343 ms | → 1.00x | 12 | 3m | 5d ago | 3h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.79% | 92.22% | 77.23% | 77.23% | 2320 ms | → 1.02x | 117 | 7m | 3d ago | 3h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.79% | 99.69% | 78.76% | 78.76% | 1666 ms | ↓ 0.89x | 5 | 2m | 6d ago | 2h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 99.79% | 93.39% | 89.09% | 89.09% | 1228 ms | ↓ 0.73x | 3 | 7h 53m | 16h ago | 2h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.79% | 93.88% | 51.17% | 51.17% | 2982 ms | ↑ 1.08x | 54 | 15m | 4d ago | 3h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.87% | 72.39% | 72.39% | 763 ms | ↓ 0.73x | 2 | 0s | 3d ago | 2h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.79% | 99.83% | 79.01% | 79.01% | 1474 ms | ↓ 0.85x | 3 | 0s | 2d ago | 2h ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.79% | 99.87% | 97.83% | 97.83% | 716 ms | ↓ 0.46x | 2 | 0s | 1d ago | 2h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.79% | 99.78% | 55.26% | 55.26% | 1801 ms | ↓ 0.92x | 4 | 0s | 7d ago | 2h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.87% | 99.52% | 99.52% | 921 ms | ↓ 0.65x | 2 | 0s | 6d ago | 2h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.79% | 86.60% | 11.21% | 11.21% | 2828 ms | ↑ 1.42x | 6 | 8h 23m | 6d ago | 2h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.79% | 99.78% | 56.31% | 56.31% | 1144 ms | ↓ 0.77x | 4 | 0s | 1d ago | 2h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.79% | 95.69% | 63.12% | 63.12% | 766 ms | ↓ 0.85x | 11 | 2h 34m | 9h ago | 2h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.79% | 86.91% | 44.05% | 44.05% | 1500 ms | ↓ 0.77x | 4 | 12h 19m | 5d ago | 2h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.79% | 99.56% | 97.12% | 97.12% | 2489 ms | ↓ 0.86x | 8 | 1m | 2d ago | 2h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.79% | 99.69% | 98.92% | 98.92% | 1154 ms | ↓ 0.90x | 5 | 2m | 2d ago | 2h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.79% | 99.87% | 88.27% | 88.27% | 2176 ms | ↓ 0.87x | 2 | 0s | 4d ago | 2h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.79% | 94.06% | 88.41% | 88.41% | 525 ms | ↓ 0.17x | 77 | 8m | 2d ago | 2h ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.79% | 96.65% | 96.69% | 96.69% | 2324 ms | ↓ 0.77x | 3 | 4h 13m | 6d ago | 2h ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.79% | 99.90% | 99.90% | 99.90% | 1283 ms | → 0.97x | 1 | 0s | 3d ago | 2h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.79% | 99.78% | 99.79% | 99.79% | 885 ms | ↓ 0.58x | 4 | 0s | 2d ago | 2h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.79% | 99.82% | 95.66% | 95.66% | 1403 ms | ↑ 1.11x | 3 | 0s | 2d ago | 2h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.79% | 99.82% | 99.88% | 99.88% | 692 ms | ↓ 0.71x | 2 | 9m | 5d ago | 2h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.79% | 94.23% | 83.00% | 83.00% | 728 ms | ↓ 0.28x | 66 | 13m | 2d ago | 2h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.79% | 99.60% | 99.60% | 99.60% | 1645 ms | → 1.04x | 4 | 0s | 7d ago | 2h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.79% | 99.62% | 99.62% | 99.62% | 1079 ms | ↓ 0.40x | 4 | 15m | 7d ago | 2h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.79% | 98.56% | 99.35% | 99.35% | 3925 ms | ↑ 1.43x | 5 | 1h 48m | 5d ago | 2h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.79% | 99.39% | 99.59% | 99.59% | 1117 ms | ↑ 1.26x | 9 | 9m | 3d ago | 2h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.79% | 97.47% | 97.47% | 97.47% | 3595 ms | ↑ 1.09x | 7 | 1h 55m | 3d ago | 2h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.79% | 99.69% | 97.22% | 97.22% | 3859 ms | ↑ 1.42x | 6 | 0s | 5d ago | 2h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.79% | 99.70% | 99.70% | 99.70% | 1483 ms | → 1.01x | 2 | 10m | 5d ago | 2h ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.79% | 99.89% | 99.89% | 99.89% | 880 ms | → 0.97x | 1 | 0s | 7d ago | 2h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.79% | 99.69% | 95.88% | 95.88% | 1717 ms | → 1.00x | 5 | 4m | 5d ago | 2h ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.79% | 98.83% | 98.94% | 98.94% | 1740 ms | ↓ 0.92x | 8 | 5m | 5d ago | 2h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.79% | 99.56% | 99.70% | 99.70% | 4098 ms | ↑ 1.39x | 9 | 0s | 5d ago | 2h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.79% | 68.84% | 31.96% | 31.96% | 1384 ms | ↓ 0.61x | 20 | 9h 29m | 5d ago | 2h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.58% | 98.67% | 91.77% | 91.77% | 991 ms | ↓ 0.92x | 7 | 1h 3m | 2d ago | 3h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.58% | 99.49% | 99.18% | 99.18% | 1244 ms | ↓ 0.87x | 10 | 1m | 12h ago | 3h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.58% | 95.12% | 98.78% | 98.78% | 2907 ms | ↓ 0.83x | 86 | 5m | 5d ago | 3h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.58% | 99.65% | 99.71% | 99.71% | 3106 ms | ↑ 1.07x | 7 | 0s | 4d ago | 3h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.58% | 99.65% | 99.15% | 99.15% | 3388 ms | ↑ 1.18x | 4 | 17m | 24h ago | 3h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.58% | 99.69% | 76.52% | 76.52% | 2141 ms | ↓ 0.91x | 6 | 0s | 4d ago | 2h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.58% | 86.82% | 11.72% | 11.72% | 1103 ms | ↓ 0.87x | 4 | 12h 20m | 5h ago | 2h ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.58% | 99.61% | 99.79% | 99.79% | 1986 ms | ↓ 0.92x | 7 | 24s | 4d ago | 3h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.58% | 72.68% | 90.94% | 90.94% | 1420 ms | ↓ 0.78x | 7 | 1d 4h | 2d ago | 2h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.58% | 99.78% | 99.78% | 99.78% | 2959 ms | ↑ 1.12x | 2 | 0s | 3d ago | 2h ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.58% | 99.57% | 99.57% | 99.57% | 2701 ms | → 0.96x | 3 | 7m | 5d ago | 2h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.58% | 97.90% | 97.21% | 97.21% | 1497 ms | → 0.99x | 3 | 4h 53m | 2d ago | 2h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.58% | 99.80% | 99.80% | 99.80% | 1393 ms | ↓ 0.89x | 2 | 0s | 5d ago | 2h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.58% | 99.46% | 99.46% | 99.46% | 1072 ms | ↓ 0.94x | 5 | 0s | 9h ago | 2h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.38% | 97.47% | 98.65% | 98.65% | 3249 ms | → 0.95x | 49 | 4m | 3d ago | 3h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.37% | 98.66% | 99.41% | 99.41% | 3152 ms | ↑ 1.25x | 19 | 12m | 17h ago | 3h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.37% | 98.82% | 89.70% | 89.70% | 1812 ms | ↑ 1.07x | 26 | 0s | 4d ago | 2h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.37% | 97.51% | 97.51% | 97.51% | 2702 ms | → 0.95x | 12 | 21m | 4d ago | 2h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.37% | 98.16% | 98.16% | 98.16% | 2122 ms | ↓ 0.94x | 11 | 11m | 4d ago | 2h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.37% | 96.24% | 96.28% | 96.28% | 1962 ms | ↓ 0.87x | 9 | 1h 26m | 2d ago | 2h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.17% | 99.44% | 99.71% | 99.71% | 428 ms | ↓ 0.86x | 8 | 10m | 1d ago | 3h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.17% | 99.66% | 99.89% | 99.89% | 777 ms | ↓ 0.75x | 5 | 10m | 1d ago | 3h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.16% | 99.57% | 99.57% | 99.57% | 1816 ms | → 0.97x | 2 | 19m | 4d ago | 2h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.16% | 99.03% | 99.03% | 99.03% | 1296 ms | ↓ 0.94x | 9 | 0s | 3d ago | 2h ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.16% | 93.30% | 93.30% | 93.30% | 662 ms | → 1.04x | 5 | 4h 10m | 3d ago | 2h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (62)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.96% | 99.44% | 98.97% | 98.97% | 2238 ms | ↑ 1.06x | 11 | 2m | 12h ago | 3h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.96% | 94.56% | 84.98% | 84.98% | 4587 ms | → 1.03x | 94 | 4m | 21h ago | 2h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.95% | 99.30% | 99.08% | 99.08% | 175 ms | ↓ 0.44x | 11 | 13m | 3d ago | 2h ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.95% | 99.43% | 94.93% | 94.93% | 998 ms | ↓ 0.56x | 9 | 7m | 2d ago | 2h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.75% | 89.98% | 95.65% | 95.65% | 3463 ms | ↓ 0.91x | 114 | 21m | 21h ago | 3h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.75% | 93.46% | 61.10% | 61.10% | 4660 ms | → 0.98x | 100 | 5m | 2d ago | 2h ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.74% | 99.24% | 99.24% | 99.24% | 3478 ms | → 0.99x | 5 | 9m | 4d ago | 2h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.34% | 98.19% | 98.98% | 98.98% | 3756 ms | ↑ 1.08x | 13 | 45m | 6d ago | 3h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 98.34% | 98.24% | 97.01% | 97.01% | 3752 ms | ↑ 1.09x | 12 | 48m | 6d ago | 3h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 98.34% | 98.19% | 55.60% | 55.60% | 4014 ms | ↑ 1.09x | 13 | 45m | 6d ago | 3h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.34% | 98.19% | 99.17% | 99.17% | 3780 ms | ↑ 1.46x | 12 | 50m | 6d ago | 3h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 98.32% | 99.02% | 99.02% | 99.02% | 4570 ms | → 0.99x | 12 | 2m | 20h ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.32% | 98.30% | 88.91% | 88.91% | 4044 ms | ↑ 1.58x | 31 | 5m | 3d ago | 2h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.13% | 97.39% | 98.04% | 98.04% | 4662 ms | ↑ 1.13x | 52 | 3m | 1d ago | 3h ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.13% | 84.67% | 10.85% | 10.85% | 2013 ms | ↑ 1.07x | 52 | 59m | 2d ago | 3h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.92% | 98.93% | 97.67% | 97.67% | 3888 ms | → 0.97x | 24 | 0s | 3d ago | 3h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 97.92% | 98.80% | 99.21% | 99.21% | 850 ms | ↓ 0.68x | 21 | 6m | 1d ago | 3h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.91% | 99.39% | 98.34% | 98.34% | 645 ms | ↓ 0.42x | 6 | 23m | 8h ago | 2h ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.90% | 99.00% | 99.00% | 99.00% | 947 ms | ↓ 0.82x | 1 | 2h 60m | 11h ago | 2h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.90% | 90.73% | 81.24% | 81.24% | 4771 ms | ↑ 1.14x | 98 | 15m | 17h ago | 2h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.71% | 86.53% | 24.20% | 24.20% | 2006 ms | ↑ 1.17x | 5 | 10h 28m | 2d ago | 3h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 97.51% | 90.97% | 83.90% | 83.90% | 4568 ms | ↑ 1.06x | 86 | 24m | 15h ago | 3h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.51% | 99.27% | 98.60% | 98.60% | 3233 ms | ↑ 1.23x | 5 | 48m | 7d ago | 3h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.48% | 98.70% | 98.70% | 98.70% | 1380 ms | → 0.99x | 1 | 3h 38m | 5d ago | 2h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.09% | 93.47% | 84.43% | 84.43% | 4557 ms | → 1.04x | 120 | 3m | 18h ago | 3h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.08% | 83.88% | 10.73% | 10.73% | 4215 ms | ↑ 1.15x | 64 | 53m | 17h ago | 3h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.06% | 99.34% | 96.52% | 96.52% | 1716 ms | → 0.96x | 1 | 4h 31m | 3d ago | 2h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.87% | 92.58% | 72.09% | 72.09% | 4488 ms | → 0.98x | 130 | 4m | 20h ago | 3h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.86% | 93.19% | 82.72% | 82.72% | 4751 ms | → 0.99x | 115 | 3m | 16h ago | 2h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.86% | 99.26% | 94.85% | 94.85% | 1886 ms | ↑ 1.33x | 3 | 1h 26m | 5d ago | 2h ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 96.67% | 97.89% | 41.02% | 41.02% | 1224 ms | ↓ 0.87x | 14 | 51m | 3d ago | 3h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.66% | 95.12% | 98.67% | 98.67% | 4086 ms | ↑ 1.13x | 67 | 14m | 17h ago | 3h ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 96.65% | 87.62% | 87.62% | 87.62% | 1372 ms | ↓ 0.94x | 5 | 7h 21m | 20h ago | 2h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.47% | 87.80% | 79.09% | 79.09% | 3264 ms | ↓ 0.95x | 120 | 14m | 10h ago | 3h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.03% | 91.18% | 79.23% | 79.23% | 4833 ms | → 1.04x | 142 | 6m | 13h ago | 2h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.02% | 96.19% | 96.19% | 96.19% | 1580 ms | ↓ 0.89x | 32 | 4m | 10h ago | 2h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.81% | 90.12% | 79.24% | 79.24% | 4647 ms | → 1.05x | 176 | 4m | 1d ago | 2h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 95.41% | 40.80% | 9.37% | 9.37% | 2698 ms | ↑ 1.10x | 7 | 2d 8h | 6d ago | 3h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.41% | 94.94% | 68.71% | 68.71% | 1209 ms | ↓ 0.73x | 20 | 1h 29m | 3h ago | 2h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 95.39% | 98.12% | 98.12% | 98.12% | 1058 ms | ↓ 0.57x | 2 | 5h 34m | 5d ago | 2h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 95.22% | 79.93% | 10.27% | 10.27% | 794 ms | ↓ 0.81x | 86 | 55m | 2d ago | 3h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.34% | 98.77% | 95.10% | 95.10% | 1468 ms | → 1.01x | 1 | 8h 38m | 5d ago | 2h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 93.92% | 32.35% | 27.13% | 27.13% | 1237 ms | → 0.96x | 2 | 9d 5h | 5d ago | 2h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 91.61% | 97.20% | 49.16% | 49.16% | 1880 ms | ↓ 0.94x | 25 | 31m | 3d ago | 2h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.99% | 77.32% | 42.51% | 42.51% | 3869 ms | ↑ 1.12x | 186 | 20m | 14h ago | 2h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 89.94% | 84.62% | 91.16% | 91.16% | 3124 ms | ↑ 1.24x | 13 | 9h 5m | 3d ago | 2h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 89.56% | 71.57% | 42.39% | 42.39% | 1828 ms | → 1.03x | 7 | 9h 14m | 10h ago | 3h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.73% | 79.95% | 11.91% | 11.91% | 4513 ms | ↑ 1.08x | 240 | 12m | 12h ago | 2h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.47% | 96.77% | 90.70% | 90.70% | 2915 ms | ↓ 0.87x | 13 | 1h 29m | 5d ago | 2h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 86.90% | 17.94% | 2.31% | 2.31% | 1729 ms | → 1.00x | 2 | 11d 22h | 6d ago | 3h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 84.07% | 96.33% | 95.68% | 95.68% | 2560 ms | ↓ 0.74x | 5 | 5h 26m | 3d ago | 2h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 83.92% | 96.09% | 97.24% | 97.24% | 1918 ms | ↑ 1.48x | 8 | 3h 31m | 1d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 83.44% | 85.09% | 85.14% | 85.14% | 2067 ms | ↑ 1.20x | 13 | 8h 3m | 10d ago | 2h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 80.79% | 74.68% | 9.54% | 9.54% | 3160 ms | ↓ 0.77x | 227 | 18m | 2d ago | 3h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 80.79% | 92.15% | 65.58% | 65.58% | 4442 ms | ↑ 1.10x | 86 | 19m | 3d ago | 3h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 79.42% | 95.33% | 99.07% | 99.07% | 666 ms | ↓ 0.89x | 11 | 3h 7m | 21h ago | 3h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 66.95% | 60.69% | 14.66% | 14.66% | 4665 ms | → 1.00x | 354 | 24m | 5h ago | 2h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 63.88% | 62.54% | 61.92% | 61.92% | 4850 ms | → 1.04x | 416 | 18m | 4h ago | 3h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 63.52% | 60.76% | 60.76% | 60.76% | 1087 ms | → 0.95x | 1 | 5d 5h | 10d ago | 2h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 41.96% | 80.46% | 28.16% | 28.16% | 1864 ms | ↓ 0.83x | 23 | 6h 20m | 5d ago | 2h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 35.22% | 62.76% | 74.19% | 74.19% | 608 ms | ↓ 0.30x | 3 | 4d 1h | 6d ago | 2h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 30.19% | 85.12% | 88.00% | 88.00% | 167 ms | ↓ 0.41x | 4 | 1d 5h | 7d ago | 2h ago |

</details>

<details open>
<summary><strong>🔴 Down (206)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.58% | 98.73% | 39.64% | 39.64% | 2491 ms | ↑ 1.19x | 24 | 3m | 3h ago | 2h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 94.34% | 97.20% | 95.67% | 95.67% | 1187 ms | ↓ 0.83x | 2 | 10h 21m | 11h ago | 2h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 93.11% | 98.22% | 98.49% | 98.49% | 1350 ms | ↑ 1.42x | 9 | 1h 11m | 13h ago | 2h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 92.03% | 95.79% | 95.79% | 95.79% | 1719 ms | ↓ 0.94x | 6 | 1h 51m | 12h ago | 2h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 89.75% | 97.77% | 28.29% | 28.29% | 368 ms | ↓ 0.29x | 2 | 9h 4m | 21h ago | 2h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 87.63% | 93.62% | 93.62% | 93.62% | 2988 ms | → 0.96x | 1 | 21h 57m | 1d ago | 2h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 86.82% | 96.73% | 97.52% | 97.52% | 2511 ms | ↑ 1.22x | 8 | 2h 57m | 17h ago | 2h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 86.61% | 96.68% | 97.58% | 97.58% | 557 ms | ↓ 0.47x | 8 | 2h 60m | 17h ago | 2h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 77.99% | 93.12% | 93.12% | 93.12% | 2542 ms | → 0.99x | 14 | 2h 57m | 2d ago | 2h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 77.57% | 88.43% | 88.43% | 88.43% | 1955 ms | → 1.00x | 2 | 19h 4m | 2d ago | 2h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 74.74% | 94.37% | 22.29% | 22.29% | 1595 ms | → 0.96x | 7 | 6h 17m | 2d ago | 2h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 62.68% | 80.32% | 80.32% | 80.32% | 1039 ms | ↓ 0.91x | 5 | 12h 44m | 3d ago | 2h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 61.95% | 90.92% | 98.66% | 98.66% | 3088 ms | ↓ 0.90x | 28 | 2h 20m | 3d ago | 3h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 56.60% | 88.82% | 88.82% | 88.82% | 932 ms | ↓ 0.91x | 2 | 1d 13h | 3d ago | 2h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 51.15% | 48.98% | 11.42% | 11.42% | 4034 ms | ↑ 1.05x | 495 | 25m | 2h ago | 2h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 48.02% | 89.18% | 96.65% | 96.65% | 1209 ms | ↓ 0.88x | 2 | 1d 20h | 4d ago | 3h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 33.33% | 65.62% | 65.62% | 65.62% | 2134 ms | → 1.02x | 1 | 4d 17h | 5d ago | 2h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 21.17% | 62.29% | 62.29% | 62.29% | 2070 ms | → 1.00x | 1 | 5d 13h | 6d ago | 2h ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 20.88% | 82.69% | 73.33% | 73.33% | 2518 ms | → 1.03x | 6 | 22h 51m | 6d ago | 2h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 17.19% | 82.60% | 85.80% | 85.80% | 994 ms | ↓ 0.49x | 3 | 1d 22h | 6d ago | 2h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 16.98% | 82.47% | 89.87% | 89.87% | 1569 ms | ↓ 0.74x | 5 | 1d 4h | 6d ago | 2h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 16.84% | 34.55% | 87.39% | 87.39% | 514 ms | ↓ 0.51x | 55 | 8h 37m | 6d ago | 3h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 16.84% | 82.42% | 88.94% | 88.94% | 489 ms | ↓ 0.55x | 4 | 1d 11h | 6d ago | 3h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 16.77% | 75.75% | 75.79% | 75.79% | 3277 ms | → 1.03x | 44 | 3h 31m | 6d ago | 2h ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.27% | 9.63% | 9.63% | 9.63% | 3148 ms | ↓ 0.91x | 88 | 3h 12m | 4h ago | 2h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 7.90% | 1.63% | 1.56% | 1.56% | 3991 ms | → 1.00x | 6 | 4d 21h | 3h ago | 3h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 3.35% | 0.79% | 27.40% | 27.40% | 4561 ms | ↑ 1.08x | 5 | 5d 22h | 7d ago | 2h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.04% | 14.21% | 64.57% | 64.57% | 3970 ms | → 1.04x | 103 | 6h 7m | 9h ago | 3h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 12.69% | 88.06% | 88.06% | — | — | 4 | 6d 23h | 28d ago | 3h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 72.92% | 72.92% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 11.08% | 78.40% | 78.40% | — | — | 25 | 1d 3h | 28d ago | 2h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 39.19% | 76.13% | 76.13% | — | — | 2 | 9d 22h | 20d ago | 2h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 12.41% | 13.32% | 13.32% | — | — | 10 | 2d 19h | 28d ago | 3h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 65.54% | 78.85% | 78.85% | — | — | 9 | 1d 6h | 9d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.61% | 3.61% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 12.89% | 88.33% | 88.33% | — | — | 1 | 27d 20h | 28d ago | 3h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.77% | 38.77% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 64.52% | 74.50% | 74.50% | — | — | 4 | 2d 22h | 12d ago | 2h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.55% | 26.55% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 11.01% | 79.27% | 79.27% | — | — | 31 | 21h 36m | 28d ago | 3h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 11.00% | 61.21% | 61.21% | — | — | 30 | 22h 21m | 28d ago | 2h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 13.02% | 32.76% | 32.76% | — | — | 1 | 27d 20h | 28d ago | 2h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 12.80% | 88.76% | 88.76% | — | — | 1 | 27d 20h | 28d ago | 3h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 66.85% | 66.85% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 12.82% | 81.99% | 81.99% | — | — | 1 | 27d 20h | 28d ago | 3h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.45% | 17.45% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 13.04% | 55.71% | 55.71% | — | — | 3 | 9d 6h | 28d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 39.06% | 39.06% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.96% | 3.83% | 3.83% | — | — | 2 | 14d 21h | 28d ago | 2h ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 13.01% | 88.92% | 88.92% | — | — | 1 | 27d 20h | 28d ago | 2h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.95% | 0.13% | 0.13% | — | — | 2 | 14d 21h | 28d ago | 3h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 2.24% | 55.23% | 55.23% | — | — | 2 | 14d 19h | 28d ago | 3h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.89% | 30.89% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 12.63% | 2.19% | 2.19% | — | — | 6 | 4d 15h | 28d ago | 3h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 78.66% | 91.76% | 91.76% | — | — | 7 | 1d | 7d ago | 2h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 24.48% | 40.08% | 40.08% | — | — | 3 | 7d 23h | 24d ago | 2h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 58.12% | 58.12% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 1.74% | 27.00% | 27.00% | — | — | 4 | 7d 10h | 28d ago | 2h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 13.01% | 31.89% | 31.89% | — | — | 1 | 27d 20h | 28d ago | 2h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.95% | 0.13% | 0.13% | — | — | 2 | 14d 21h | 28d ago | 3h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 60.91% | 60.91% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.41% | 6.41% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 70.07% | 70.07% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 12.63% | 88.70% | 88.70% | — | — | 5 | 5d 14h | 28d ago | 3h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.79% | 8.79% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 9.65% | 84.65% | 84.65% | — | — | 50 | 13h 26m | 28d ago | 2h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 9h | 13d ago | 2h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 33.65% | 33.65% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 56.34% | 56.34% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 76.96% | 63.01% | 63.01% | — | — | 6 | 1d 5h | 7d ago | 2h ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 21.27% | 21.27% | 21.27% | — | — | 2 | 5d 14h | 10d ago | 2h ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 10.61% | 81.63% | 81.63% | — | — | 35 | 19h 9m | 28d ago | 3h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.76% | 49.76% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.22% | 45.22% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 12.75% | 88.71% | 88.71% | — | — | 2 | 13d 22h | 28d ago | 3h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.90% | 41.62% | 41.62% | — | — | 2 | 14d 21h | 28d ago | 3h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 8h | 13d ago | 2h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 8.20% | 34.52% | 34.52% | — | — | 62 | 10h 54m | 28d ago | 2h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 12.92% | 2.77% | 2.77% | — | — | 3 | 9d 7h | 28d ago | 2h ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.46% | 44.46% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 11.32% | 88.65% | 88.65% | — | — | 21 | 1d 8h | 28d ago | 3h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 13.01% | 35.61% | 35.61% | — | — | 1 | 27d 20h | 28d ago | 2h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 12.76% | 88.59% | 88.59% | — | — | 2 | 13d 22h | 28d ago | 3h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 68.40% | 77.88% | 77.88% | — | — | 2 | 5d 6h | 11d ago | 2h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 12.81% | 34.53% | 34.53% | — | — | 1 | 27d 20h | 28d ago | 3h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 50.03% | 50.03% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 11.69% | 86.10% | 86.10% | — | — | 23 | 1d 5h | 28d ago | 3h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.04% | 0.12% | 0.12% | — | — | 2 | 14d 23h | 29d ago | 2h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 38.92% | 76.35% | 76.35% | — | — | 3 | 6d 12h | 19d ago | 2h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 62.10% | 41.96% | 41.96% | — | — | 48 | 5h 55m | 10d ago | 2h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 84.45% | 84.45% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 12.89% | 63.93% | 63.93% | — | — | 2 | 13d 22h | 28d ago | 2h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.61% | 3.61% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.21% | 46.21% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 12.64% | 82.77% | 82.77% | — | — | 5 | 5d 14h | 28d ago | 3h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 6.60% | 63.13% | 63.13% | — | — | 69 | 9h 52m | 28d ago | 3h ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 66.30% | 80.92% | 80.92% | — | — | 67 | 3h 39m | 10d ago | 2h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 73.58% | 95.11% | 95.11% | — | — | 3 | 2d 23h | 9d ago | 3h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.29% | 30.29% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 12.26% | 14.85% | 14.85% | — | — | 15 | 1d 21h | 28d ago | 2h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 2.79% | 14.77% | 14.77% | — | — | 46 | 15h 12m | 28d ago | 2h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 40.11% | 38.79% | 38.79% | — | — | 8 | 2d 8h | 16d ago | 2h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.79% | 25.79% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 9h | 14d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 12.35% | 68.35% | 68.35% | — | — | 13 | 2d 3h | 28d ago | 2h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 17.49% | 17.54% | 17.54% | — | — | 3 | 7d 21h | 23d ago | 2h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.69% | 18.69% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.98% | 52.98% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 9h | 13d ago | 2h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 59.04% | 59.04% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 67.26% | 28.69% | 28.69% | — | — | 22 | 11h 33m | 11d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 12.86% | 48.73% | 48.73% | — | — | 2 | 13d 22h | 28d ago | 2h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 24.34% | 63.41% | 63.41% | — | — | 3 | 7d 23h | 24d ago | 2h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 13.01% | 5.94% | 5.94% | — | — | 1 | 27d 20h | 28d ago | 2h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 12.79% | 88.79% | 88.79% | — | — | 2 | 13d 22h | 28d ago | 3h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 12.75% | 87.64% | 87.64% | — | — | 3 | 9d 7h | 28d ago | 3h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 6.72% | 68.36% | 68.36% | — | — | 59 | 11h 33m | 28d ago | 3h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 80.26% | 80.26% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 12.77% | 87.49% | 87.49% | — | — | 2 | 13d 22h | 28d ago | 3h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 21.04% | 21.04% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 6.99% | 6.66% | 6.66% | — | — | 3 | 9d 5h | 26d ago | 3h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 27.70% | 4.34% | 4.34% | — | — | 6 | 3d 15h | 17d ago | 3h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 12.96% | 36.68% | 36.68% | — | — | 2 | 13d 22h | 28d ago | 2h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 73.06% | 73.06% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.64% | 8.64% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 9.16% | 70.31% | 70.31% | — | — | 57 | 11h 48m | 28d ago | 3h ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 8h | 13d ago | 2h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 72.37% | 72.37% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 70.00% | 70.05% | 70.05% | — | — | 14 | 15h 39m | 9d ago | 2h ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 13.28% | 13.38% | 13.38% | — | — | 2 | 6d 16h | 13d ago | 2h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 12.90% | 49.64% | 49.64% | — | — | 2 | 13d 22h | 28d ago | 2h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 21.69% | 37.39% | 37.39% | — | — | 1 | 26d 19h | 27d ago | 2h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 15.32% | 15.32% | — | — | 1 | 29d 21h | 30d ago | 2h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.23% | 19.23% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 39.82% | 24.27% | 24.27% | — | — | 2 | 9d 20h | 20d ago | 2h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 62.42% | 62.42% | 62.42% | — | — | 1 | 10d 4h | 10d ago | 2h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 23.97% | 23.97% | 23.97% | — | — | 8 | 1d 9h | 11d ago | 2h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.52% | 1.57% | 1.57% | — | — | 2 | 14d 4h | 28d ago | 2h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 8.58% | 8.62% | 8.62% | — | — | 2 | 14d 5h | 28d ago | 2h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 10.34% | 10.39% | 10.39% | — | — | 2 | 12d 18h | 25d ago | 2h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 53.44% | 53.44% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 12.81% | 88.76% | 88.76% | — | — | 2 | 13d 22h | 28d ago | 3h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 6.99% | 59.84% | 59.84% | — | — | 2 | 14d 10h | 29d ago | 2h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 21.69% | 88.95% | 88.95% | — | — | 4 | 6d 5h | 25d ago | 3h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 76.67% | 82.43% | 82.43% | — | — | 2 | 3d 21h | 8d ago | 2h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.32% | 44.32% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 5.02% | 5.02% | 5.02% | — | — | 1 | 13d 16h | 14d ago | 2h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 21h | 30d ago | 3h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 10.64% | 86.49% | 86.49% | — | — | 47 | 14h 13m | 28d ago | 2h ago |

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
