# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**599 providers** — 330 🟢 operational · 57 🟡 degraded · 212 🔴 down · 0 ⚫ unknown

_Updated 2026-05-18 07:00 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (330)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.82% | 96.78% | 96.78% | 2229 ms | ↓ 0.76x | 2 | 10m | 7d ago | 14m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.91% | 92.60% | 92.60% | 765 ms | ↓ 0.75x | 1 | 0s | 30d ago | 19m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.19% | 13.37% | 13.37% | 1977 ms | ↓ 0.91x | 2 | 6h 11m | 17d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.96% | 97.20% | 97.20% | 2282 ms | ↓ 0.80x | 0 | — | — | 28m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.31% | 98.70% | 98.70% | 1834 ms | ↓ 0.78x | 22 | 14m | 16d ago | 29m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.56% | 99.17% | 99.17% | 3630 ms | → 0.95x | 9 | 0s | 22d ago | 29m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.18% | 98.18% | 98.18% | 1672 ms | ↓ 0.87x | 11 | 13m | 14d ago | 14m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.14% | 92.84% | 92.84% | 1791 ms | ↓ 0.88x | 2 | 2h 20m | 15d ago | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1451 ms | ↓ 0.68x | 0 | — | — | 13m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 875 ms | ↓ 0.85x | 0 | — | — | 13m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.96% | 91.68% | 91.68% | 1781 ms | ↓ 0.93x | 0 | — | — | 30m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.77% | 96.07% | 96.07% | 3544 ms | ↑ 1.14x | 3 | 3m | 16d ago | 16m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 433 ms | → 1.00x | 0 | — | — | 12m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.77% | 98.06% | 98.06% | 903 ms | ↓ 0.76x | 4 | 0s | 10d ago | 17m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 93.02% | 93.02% | 93.02% | 985 ms | ↓ 0.93x | 1 | 1d 1h | 11d ago | 13m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.82% | 97.82% | 97.82% | 699 ms | ↓ 0.64x | 1 | 13h 57m | 25d ago | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 70.59% | 31.32% | 31.32% | 522 ms | ↓ 0.84x | 4 | 2d 1h | 19d ago | 24m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.64% | 96.24% | 96.24% | 2119 ms | → 0.98x | 2 | 50m | 14d ago | 19m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.78% | 98.78% | 670 ms | ↓ 0.75x | 1 | 0s | 15d ago | 26m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 470 ms | ↓ 0.65x | 0 | — | — | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.91% | 95.81% | 95.81% | 476 ms | ↓ 0.62x | 1 | 0s | 30d ago | 18m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1930 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2009 ms | → 1.02x | 0 | — | — | 13m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.77% | 97.81% | 97.81% | 2773 ms | → 1.01x | 3 | 6m | 22d ago | 17m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 99.95% | 96.79% | 96.79% | 175 ms | ↓ 0.34x | 0 | — | — | 14m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.50% | 79.63% | 79.63% | 1448 ms | ↓ 0.78x | 7 | 4h 35m | 19d ago | 17m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 999 ms | ↓ 0.73x | 0 | — | — | 12m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.82% | 78.89% | 78.89% | 1671 ms | ↓ 0.94x | 3 | 0s | 7d ago | 19m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.64% | 97.13% | 97.13% | 811 ms | ↓ 0.46x | 3 | 26m | 20d ago | 18m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.96% | 99.98% | 99.98% | 415 ms | ↓ 0.74x | 0 | — | — | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.87% | 99.73% | 99.73% | 2812 ms | ↓ 0.87x | 2 | 0s | 10d ago | 26m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.82% | 98.74% | 98.74% | 179 ms | ↓ 0.11x | 3 | 0s | 25d ago | 18m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.64% | 99.77% | 99.77% | 2172 ms | → 0.96x | 5 | 8m | 14d ago | 18m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 45.31% | 9.70% | 9.70% | 2664 ms | ↑ 1.08x | 7 | 2d 4h | 7d ago | 24m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 99.91% | 95.18% | 95.18% | 2099 ms | ↓ 0.89x | 1 | 0s | 30d ago | 18m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 73.53% | 80.82% | 80.82% | 1559 ms | ↓ 0.92x | 2 | 4d 1h | 14d ago | 16m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3182 ms | ↑ 1.11x | 0 | — | — | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 99.64% | 99.64% | 99.64% | 1198 ms | ↓ 0.56x | 4 | 15m | 8d ago | 14m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.96% | 99.48% | 99.48% | 1816 ms | ↓ 0.90x | 0 | — | — | 26m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.82% | 99.83% | 99.83% | 4211 ms | ↑ 1.21x | 3 | 0s | 14d ago | 24m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.69% | 23.31% | 23.31% | 872 ms | ↓ 0.57x | 6 | 0s | 15d ago | 26m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1109 ms | ↓ 0.90x | 0 | — | — | 12m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1146 ms | ↑ 1.19x | 0 | — | — | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.81% | 99.81% | 99.81% | 486 ms | → 0.99x | 2 | 0s | 8d ago | 13m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.86% | 95.91% | 95.91% | 700 ms | ↓ 0.65x | 2 | 0s | 16d ago | 19m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.96% | 50.06% | 50.06% | 865 ms | → 1.00x | 15 | 8m | 27d ago | 20m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1024 ms | ↓ 0.76x | 0 | — | — | 12m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.91% | 99.60% | 99.60% | 2933 ms | → 1.03x | 1 | 0s | 30d ago | 24m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.87% | 96.87% | 96.87% | 1450 ms | ↓ 0.91x | 2 | 0s | 24d ago | 24m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 99.78% | 96.38% | 96.38% | 1415 ms | ↓ 0.85x | 4 | 0s | 10d ago | 25m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 98.33% | 98.33% | 98.33% | 1260 ms | → 0.97x | 2 | 1h 20m | 9d ago | 14m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.86% | 80.46% | 80.46% | 1943 ms | ↓ 0.85x | 2 | 0s | 23d ago | 19m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.91% | 61.85% | 61.85% | 1620 ms | ↑ 1.09x | 1 | 0s | 26d ago | 20m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 923 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.86% | 98.22% | 98.22% | 1980 ms | ↓ 0.79x | 2 | 0s | 30d ago | 17m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3637 ms | ↓ 0.74x | 0 | — | — | 12m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.91% | 92.07% | 92.07% | 835 ms | ↓ 0.79x | 1 | 0s | 30d ago | 20m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.95% | 98.05% | 98.05% | 686 ms | ↓ 0.68x | 0 | — | — | 16m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.77% | 99.84% | 99.84% | 238 ms | ↓ 0.30x | 4 | 0s | 15d ago | 18m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.30% | 98.30% | 98.30% | 2254 ms | → 0.96x | 12 | 10m | 14d ago | 14m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.23% | 65.20% | 65.20% | 2459 ms | ↑ 1.19x | 16 | 0s | 16d ago | 17m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1752 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 87.82% | 87.82% | 87.82% | 1925 ms | ↓ 0.81x | 14 | 1d 1h | 14d ago | 14m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.95% | 42.06% | 42.06% | 920 ms | → 1.03x | 0 | — | — | 20m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.90% | 50.65% | 50.65% | 1412 ms | ↓ 0.82x | 9 | 46m | 20d ago | 26m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.74% | 97.74% | 2356 ms | → 1.03x | 1 | 0s | 30d ago | 18m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.82% | 47.85% | 47.85% | 1084 ms | ↓ 0.90x | 2 | 9m | 26d ago | 20m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.96% | 39.58% | 39.58% | 1074 ms | ↓ 0.66x | 0 | — | — | 26m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1262 ms | ↓ 0.72x | 0 | — | — | 12m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.91% | 56.76% | 56.76% | 907 ms | ↓ 0.80x | 12 | 18m | 15d ago | 20m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 99.05% | 97.94% | 97.94% | 2318 ms | → 0.98x | 19 | 56s | 15d ago | 17m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.77% | 55.47% | 55.47% | 1672 ms | ↓ 0.94x | 4 | 0s | 8d ago | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.86% | 59.01% | 59.01% | 1046 ms | ↓ 0.85x | 2 | 0s | 27d ago | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2434 ms | ↓ 0.93x | 0 | — | — | 14m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.77% | 99.11% | 99.11% | 1604 ms | → 0.98x | 4 | 0s | 29d ago | 20m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 87.14% | 78.18% | 78.18% | 567 ms | → 0.96x | 1 | 1d 1h | 30d ago | 14m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.59% | 99.75% | 99.75% | 2543 ms | ↑ 1.06x | 8 | 0s | 14d ago | 18m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.91% | 97.83% | 97.83% | 2160 ms | ↑ 1.24x | 1 | 0s | 30d ago | 20m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 94.16% | 11.55% | 11.55% | 1395 ms | ↓ 0.94x | 5 | 4h 12m | 13d ago | 25m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.91% | 99.73% | 99.73% | 2484 ms | ↓ 0.93x | 1 | 0s | 23d ago | 28m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1519 ms | ↓ 0.92x | 0 | — | — | 12m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.69% | 98.96% | 98.96% | 2234 ms | ↓ 0.95x | 3 | 20m | 13d ago | 28m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.11% | 99.85% | 99.85% | 3356 ms | ↓ 0.90x | 19 | 0s | 12d ago | 29m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 99.60% | 97.99% | 97.99% | 3418 ms | ↓ 0.84x | 6 | 3m | 29d ago | 29m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.91% | 99.94% | 99.94% | 775 ms | ↓ 0.83x | 1 | 0s | 27d ago | 26m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.91% | 68.88% | 68.88% | 2667 ms | ↓ 0.91x | 1 | 0s | 30d ago | 18m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.91% | 87.70% | 87.70% | 385 ms | ↓ 0.92x | 1 | 0s | 30d ago | 16m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 713 ms | ↓ 0.92x | 1 | 0s | 12d ago | 13m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.82% | 99.95% | 99.95% | 1170 ms | ↓ 0.84x | 3 | 0s | 23d ago | 29m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.91% | 99.60% | 99.60% | 1472 ms | ↓ 0.87x | 1 | 0s | 15d ago | 28m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.50% | 87.52% | 87.52% | 2178 ms | ↑ 1.28x | 8 | 5m | 10d ago | 19m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 83.20% | 72.11% | 72.11% | 2346 ms | → 0.98x | 2 | 2d 5h | 25d ago | 18m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.60% | 99.68% | 99.68% | 413 ms | ↓ 0.82x | 8 | 0s | 10d ago | 28m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1210 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 99.95% | 76.68% | 76.68% | 1723 ms | ↑ 1.19x | 0 | — | — | 16m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1442 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.95% | 100.00% | 100.00% | 1108 ms | ↓ 0.92x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.95% | 98.95% | 98.95% | 486 ms | ↓ 0.72x | 0 | — | — | 20m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.91% | 98.48% | 98.48% | 1817 ms | ↑ 1.17x | 1 | 0s | 30d ago | 19m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 99.95% | 96.08% | 96.08% | 437 ms | ↓ 0.32x | 0 | — | — | 16m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 995 ms | ↓ 0.92x | 0 | — | — | 13m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 601 ms | ↓ 0.57x | 0 | — | — | 12m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1446 ms | ↓ 0.80x | 0 | — | — | 12m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 93.95% | 93.95% | 93.95% | 1761 ms | ↓ 0.79x | 12 | 1d 6h | 13d ago | 14m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 97.77% | 97.77% | 97.77% | 1626 ms | ↓ 0.90x | 11 | 20m | 14d ago | 14m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 95.68% | 95.72% | 95.72% | 273 ms | ↓ 0.38x | 16 | 51m | 15d ago | 14m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.73% | 98.51% | 98.51% | 190 ms | ↓ 0.49x | 2 | 30m | 29d ago | 18m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 97.77% | 97.77% | 97.77% | 1521 ms | ↓ 0.78x | 11 | 20m | 13d ago | 14m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.82% | 98.88% | 98.88% | 804 ms | ↓ 0.67x | 3 | 0s | 21d ago | 21m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 93.31% | 11.45% | 11.45% | 2731 ms | → 0.99x | 2 | 12h 25m | 14d ago | 24m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 930 ms | ↓ 0.92x | 0 | — | — | 12m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 99.95% | 15.00% | 15.00% | 1104 ms | → 0.97x | 0 | — | — | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.96% | 99.99% | 99.99% | 771 ms | ↓ 0.88x | 0 | — | — | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.96% | 99.93% | 99.93% | 621 ms | ↓ 0.60x | 0 | — | — | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.64% | 96.65% | 96.65% | 1307 ms | ↓ 0.87x | 1 | 50m | 30d ago | 14m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.11% | 99.72% | 99.72% | 2695 ms | → 0.97x | 4 | 1h 15m | 12d ago | 28m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 99.91% | 97.69% | 97.69% | 2465 ms | ↑ 1.51x | 1 | 0s | 30d ago | 19m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.78% | 99.72% | 99.72% | 1316 ms | ↓ 0.88x | 2 | 20m | 10d ago | 21m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1198 ms | → 0.96x | 0 | — | — | 13m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.78% | 98.61% | 98.61% | 4224 ms | → 0.99x | 4 | 0s | 30d ago | 30m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 49.14% | 81.79% | 81.79% | 771 ms | ↓ 0.64x | 1 | 14d 5h | 30d ago | 18m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.96% | 99.91% | 99.91% | 2989 ms | ↑ 1.31x | 0 | — | — | 28m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1292 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.87% | 99.63% | 99.63% | 2675 ms | ↑ 1.27x | 2 | 0s | 10d ago | 24m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.86% | 99.29% | 99.29% | 1979 ms | → 0.96x | 2 | 0s | 9d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 93.42% | 36.18% | 36.18% | 691 ms | → 0.98x | 1 | 1d 1h | 30d ago | 29m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.91% | 98.15% | 98.15% | 4027 ms | ↑ 1.35x | 1 | 0s | 30d ago | 18m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.91% | 99.82% | 99.82% | 1409 ms | → 1.02x | 1 | 0s | 30d ago | 18m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.87% | 99.85% | 99.85% | 1260 ms | ↓ 0.81x | 2 | 0s | 11d ago | 24m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.86% | 99.86% | 99.86% | 1977 ms | → 0.98x | 2 | 0s | 30d ago | 20m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.84% | 99.84% | 99.84% | 2063 ms | → 0.97x | 25 | 0s | 14d ago | 28m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.95% | 99.43% | 99.43% | 1775 ms | ↑ 1.34x | 0 | — | — | 16m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.86% | 88.57% | 88.57% | 1258 ms | ↑ 1.11x | 2 | 0s | 24d ago | 19m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.96% | 99.59% | 99.59% | 1011 ms | → 0.98x | 0 | — | — | 28m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.50% | 95.69% | 95.69% | 2527 ms | ↓ 0.94x | 6 | 47m | 22d ago | 19m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 368 ms | ↓ 0.72x | 0 | — | — | 12m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.82% | 99.74% | 99.74% | 1946 ms | ↓ 0.95x | 3 | 0s | 23d ago | 28m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 34.45% | 30.84% | 30.84% | 3493 ms | ↑ 1.06x | 2 | 9d 8h | 24d ago | 21m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.91% | 88.19% | 88.19% | 1002 ms | ↓ 0.71x | 1 | 0s | 15d ago | 28m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.91% | 13.53% | 13.53% | 1726 ms | ↓ 0.87x | 1 | 0s | 30d ago | 20m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.91% | 98.76% | 98.76% | 2447 ms | ↑ 1.36x | 1 | 0s | 30d ago | 19m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 93.11% | 78.29% | 78.29% | 1901 ms | ↓ 0.87x | 3 | 8h 50m | 15d ago | 29m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1243 ms | ↓ 0.94x | 1 | 0s | 28d ago | 28m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.96% | 99.56% | 99.56% | 1024 ms | ↓ 0.76x | 0 | — | — | 28m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1124 ms | ↓ 0.69x | 0 | — | — | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.86% | 99.93% | 99.93% | 787 ms | ↓ 0.65x | 2 | 0s | 12d ago | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.96% | 98.95% | 98.95% | 1630 ms | ↓ 0.85x | 0 | — | — | 28m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.95% | 97.78% | 97.78% | 1133 ms | ↓ 0.76x | 0 | — | — | 16m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.91% | 97.38% | 97.38% | 2691 ms | ↑ 1.25x | 1 | 0s | 30d ago | 17m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 93.28% | 11.53% | 11.53% | 1256 ms | → 0.98x | 4 | 6h 12m | 16d ago | 28m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 65.47% | 65.47% | 1002 ms | ↓ 0.94x | 2 | 0s | 30d ago | 20m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 77.62% | 77.62% | 1733 ms | ↓ 0.83x | 4 | 0s | 23d ago | 19m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.96% | 99.77% | 99.77% | 1263 ms | ↓ 0.80x | 0 | — | — | 28m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.96% | 99.68% | 99.68% | 2002 ms | → 1.02x | 0 | — | — | 28m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2653 ms | → 0.96x | 0 | — | — | 13m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 977 ms | ↓ 0.80x | 0 | — | — | 21m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 97.60% | 84.04% | 84.04% | 1124 ms | ↓ 0.92x | 35 | 6m | 14d ago | 28m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.69% | 38.86% | 38.86% | 626 ms | ↓ 0.66x | 5 | 5h 57m | 10d ago | 18m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 97.73% | 84.10% | 84.10% | 261 ms | ↓ 0.22x | 30 | 7m | 21d ago | 27m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.91% | 99.19% | 99.19% | 2021 ms | ↑ 1.07x | 1 | 0s | 30d ago | 20m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.91% | 63.23% | 63.23% | 349 ms | ↓ 0.23x | 1 | 0s | 30d ago | 20m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 96.27% | 96.27% | 1132 ms | ↑ 1.10x | 1 | 0s | 30d ago | 20m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.64% | 13.40% | 13.40% | 993 ms | ↓ 0.77x | 7 | 0s | 12d ago | 25m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.91% | 99.74% | 99.74% | 2126 ms | ↓ 0.88x | 1 | 0s | 16d ago | 28m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1166 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 53.31% | 53.31% | 533 ms | ↓ 0.58x | 1 | 0s | 30d ago | 20m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 98.24% | 98.24% | 1368 ms | → 0.99x | 1 | 0s | 30d ago | 19m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.73% | 97.92% | 97.92% | 1958 ms | ↓ 0.89x | 5 | 0s | 11d ago | 18m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.86% | 30.49% | 30.49% | 2070 ms | ↓ 0.86x | 2 | 0s | 17d ago | 19m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.96% | 99.73% | 99.73% | 2408 ms | ↓ 0.81x | 0 | — | — | 28m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.91% | 99.88% | 99.88% | 1851 ms | → 1.00x | 1 | 0s | 30d ago | 19m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.86% | 47.74% | 47.74% | 3936 ms | ↑ 1.06x | 2 | 0s | 29d ago | 18m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.82% | 99.11% | 99.11% | 2172 ms | ↑ 1.08x | 3 | 0s | 16d ago | 19m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.13% | 98.13% | 98.13% | 1508 ms | ↑ 1.29x | 1 | 11h 52m | 18d ago | 13m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.64% | 76.44% | 76.44% | 1435 ms | ↑ 1.39x | 2 | 50m | 18d ago | 20m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.96% | 99.92% | 99.92% | 188 ms | ↓ 0.78x | 0 | — | — | 28m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.87% | 99.90% | 99.90% | 1573 ms | ↓ 0.82x | 2 | 0s | 15d ago | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 796 ms | → 1.01x | 0 | — | — | 13m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.91% | 99.94% | 99.94% | 1898 ms | ↓ 0.92x | 1 | 0s | 30d ago | 24m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.91% | 99.49% | 99.49% | 2674 ms | → 1.01x | 1 | 0s | 29d ago | 28m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.91% | 84.19% | 84.19% | 2016 ms | ↑ 1.31x | 1 | 0s | 30d ago | 19m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.90% | 99.90% | 99.90% | 869 ms | → 0.96x | 1 | 0s | 8d ago | 13m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.91% | 95.72% | 95.72% | 962 ms | → 0.99x | 1 | 0s | 30d ago | 20m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.96% | 99.97% | 99.97% | 938 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.86% | 98.20% | 98.20% | 454 ms | ↓ 0.47x | 2 | 0s | 9d ago | 18m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 100.00% | 99.55% | 90.86% | 90.86% | 2621 ms | ↓ 0.85x | 9 | 0s | 19d ago | 19m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 93.31% | 13.72% | 13.72% | 679 ms | ↓ 0.46x | 1 | 1d 1h | 30d ago | 20m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1316 ms | ↓ 0.89x | 0 | — | — | 12m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.91% | 99.93% | 99.93% | 756 ms | ↓ 0.95x | 1 | 0s | 30d ago | 18m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 56.60% | 56.60% | 1887 ms | ↓ 0.94x | 1 | 0s | 30d ago | 20m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.91% | 99.77% | 99.77% | 2369 ms | → 0.95x | 1 | 0s | 23d ago | 28m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.96% | 62.65% | 62.65% | 808 ms | ↓ 0.91x | 0 | — | — | 29m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.96% | 99.02% | 99.02% | 855 ms | ↓ 0.66x | 0 | — | — | 27m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 99.37% | 96.47% | 96.47% | 4107 ms | ↑ 1.17x | 6 | 23m | 12d ago | 20m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 93.40% | 11.52% | 11.52% | 827 ms | ↓ 0.86x | 1 | 1d 1h | 30d ago | 27m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 925 ms | → 0.99x | 0 | — | — | 13m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.12% | 99.12% | 99.12% | 1120 ms | ↓ 0.72x | 1 | 3h 45m | 23d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.82% | 99.91% | 99.91% | 1851 ms | ↓ 0.75x | 1 | 0s | 15d ago | 14m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1168 ms | ↓ 0.88x | 0 | — | — | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 95.02% | 92.83% | 92.83% | 3572 ms | ↓ 0.90x | 28 | 31m | 29d ago | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.98% | 99.98% | 2088 ms | → 1.00x | 1 | 0s | 30d ago | 19m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.55% | 98.61% | 98.61% | 2203 ms | → 1.03x | 9 | 0s | 15d ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.58% | 98.58% | 98.58% | 1197 ms | ↓ 0.75x | 10 | 8m | 14d ago | 14m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.86% | 99.02% | 99.02% | 975 ms | → 0.98x | 2 | 0s | 24d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.80% | 99.80% | 99.80% | 1936 ms | ↓ 0.93x | 1 | 20m | 13d ago | 13m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 84.48% | 27.97% | 27.97% | 1586 ms | ↓ 0.75x | 2 | 1d 21h | 26d ago | 28m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.96% | 99.54% | 99.54% | 1323 ms | ↓ 0.89x | 0 | — | — | 29m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.96% | 99.41% | 99.41% | 1028 ms | ↓ 0.74x | 0 | — | — | 27m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 100.00% | 21.53% | 2.66% | 2.66% | 1718 ms | → 1.00x | 2 | 11d 9h | 7d ago | 27m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.96% | 99.99% | 99.99% | 501 ms | ↓ 0.74x | 0 | — | — | 30m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 94.49% | 58.40% | 58.40% | 2884 ms | → 0.98x | 55 | 13m | 12d ago | 28m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.29% | 91.43% | 91.43% | 1193 ms | ↓ 0.71x | 6 | 27m | 18d ago | 27m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.95% | 98.00% | 98.00% | 1519 ms | ↓ 0.79x | 0 | — | — | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.75% | 96.41% | 96.41% | 2518 ms | ↓ 0.93x | 19 | 8m | 18d ago | 28m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.95% | 99.75% | 99.75% | 619 ms | ↓ 0.52x | 0 | — | — | 16m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.91% | 85.94% | 85.94% | 1344 ms | → 0.96x | 1 | 0s | 30d ago | 19m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.91% | 99.73% | 99.73% | 939 ms | ↓ 0.80x | 1 | 0s | 15d ago | 16m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.96% | 99.79% | 99.79% | 1373 ms | → 1.01x | 0 | — | — | 28m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.96% | 99.45% | 99.45% | 934 ms | → 0.96x | 0 | — | — | 29m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.96% | 99.71% | 99.71% | 834 ms | ↓ 0.90x | 0 | — | — | 29m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.68% | 67.53% | 67.53% | 1110 ms | ↑ 1.08x | 6 | 0s | 15d ago | 18m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.91% | 99.87% | 99.87% | 2676 ms | ↑ 1.21x | 1 | 0s | 22d ago | 26m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.96% | 99.81% | 99.81% | 718 ms | → 1.00x | 0 | — | — | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.78% | 83.11% | 83.11% | 2044 ms | ↓ 0.93x | 3 | 3m | 14d ago | 24m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.91% | 98.68% | 98.68% | 1607 ms | ↓ 0.86x | 1 | 0s | 30d ago | 19m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.91% | 97.24% | 97.24% | 1401 ms | → 0.99x | 1 | 0s | 23d ago | 16m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.87% | 91.49% | 91.49% | 3909 ms | → 0.95x | 2 | 0s | 30d ago | 30m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.89% | 99.89% | 99.89% | 722 ms | ↓ 0.85x | 1 | 0s | 13d ago | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 287 ms | ↓ 0.55x | 0 | — | — | 12m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.95% | 98.64% | 98.64% | 484 ms | ↓ 0.93x | 0 | — | — | 20m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.24% | 98.60% | 98.60% | 3031 ms | ↑ 1.19x | 5 | 48m | 8d ago | 26m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2077 ms | → 0.99x | 0 | — | — | 13m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.73% | 97.21% | 97.21% | 2620 ms | ↑ 1.15x | 4 | 5m | 18d ago | 17m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 570 ms | ↓ 0.93x | 0 | — | — | 13m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 93.34% | 22.91% | 22.91% | 811 ms | ↓ 0.94x | 2 | 12h 25m | 19d ago | 26m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.86% | 99.77% | 99.77% | 802 ms | ↓ 0.69x | 2 | 0s | 30d ago | 19m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.91% | 97.95% | 97.95% | 1444 ms | ↓ 0.91x | 1 | 0s | 30d ago | 19m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.86% | 94.49% | 94.49% | 1832 ms | ↓ 0.53x | 2 | 0s | 14d ago | 17m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.96% | 99.92% | 99.92% | 1275 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.86% | 86.46% | 86.46% | 2384 ms | → 1.05x | 2 | 0s | 23d ago | 19m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.42% | 96.26% | 96.26% | 2172 ms | → 1.00x | 3 | 1d 1h | 21d ago | 20m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.91% | 99.86% | 99.86% | 1719 ms | ↓ 0.91x | 1 | 0s | 27d ago | 27m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 690 ms | ↓ 0.63x | 0 | — | — | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.64% | 95.69% | 95.69% | 1220 ms | ↓ 0.77x | 2 | 51m | 10d ago | 16m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.87% | 99.84% | 99.84% | 2031 ms | ↓ 0.89x | 1 | 20m | 25d ago | 26m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.91% | 99.93% | 99.93% | 790 ms | ↑ 1.07x | 1 | 0s | 16d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.86% | 13.59% | 13.59% | 2082 ms | ↓ 0.95x | 2 | 0s | 25d ago | 20m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 93.08% | 11.35% | 11.35% | 1592 ms | → 0.98x | 6 | 4h 8m | 15d ago | 20m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.86% | 99.89% | 99.89% | 2841 ms | ↑ 1.25x | 2 | 0s | 22d ago | 17m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2920 ms | → 0.96x | 0 | — | — | 13m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.91% | 99.79% | 99.79% | 3296 ms | ↑ 1.32x | 1 | 0s | 30d ago | 18m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.24% | 99.88% | 99.88% | 1371 ms | ↓ 0.94x | 3 | 1h 27m | 21d ago | 28m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.96% | 99.73% | 99.73% | 2448 ms | ↑ 1.32x | 0 | — | — | 26m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.95% | 97.95% | 97.95% | 964 ms | ↓ 0.76x | 0 | — | — | 16m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.95% | 99.82% | 99.82% | 2570 ms | ↑ 1.56x | 0 | — | — | 20m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.73% | 99.05% | 99.05% | 1280 ms | ↓ 0.87x | 5 | 0s | 29d ago | 28m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.96% | 99.99% | 99.99% | 333 ms | ↓ 0.55x | 0 | — | — | 27m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 98.89% | 99.70% | 99.70% | 3252 ms | ↑ 1.36x | 3 | 1h 13m | 4d ago | 29m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.79% | 99.91% | 99.82% | 99.82% | 652 ms | → 1.01x | 1 | 0s | 12h ago | 29m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.79% | 91.29% | 78.87% | 78.87% | 130 ms | ↓ 0.65x | 7 | 8h 51m | 6d ago | 29m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.79% | 99.16% | 99.46% | 99.46% | 2884 ms | ↓ 0.86x | 17 | 1m | 6d ago | 29m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.78% | 17.33% | 17.33% | 2178 ms | ↓ 0.94x | 4 | 0s | 3d ago | 30m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.79% | 65.23% | 86.20% | 86.20% | 1273 ms | ↓ 0.80x | 4 | 2d 6h | 10h ago | 28m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.91% | 99.94% | 99.94% | 1033 ms | ↓ 0.91x | 1 | 0s | 4d ago | 28m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.87% | 99.89% | 99.89% | 230 ms | ↓ 0.18x | 2 | 0s | 4d ago | 28m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.78% | 99.44% | 99.44% | 1664 ms | ↓ 0.81x | 3 | 7m | 4d ago | 28m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.79% | 93.28% | 11.51% | 11.51% | 2008 ms | ↓ 0.93x | 4 | 6h 12m | 7d ago | 28m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.42% | 97.67% | 97.67% | 3352 ms | → 1.00x | 10 | 4m | 6d ago | 24m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.79% | 95.20% | 77.31% | 77.31% | 2121 ms | → 1.01x | 83 | 6m | 4d ago | 24m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.79% | 98.66% | 98.01% | 98.01% | 2100 ms | ↑ 1.25x | 2 | 2h 10m | 10h ago | 26m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.79% | 99.37% | 68.33% | 68.33% | 1111 ms | ↓ 0.91x | 10 | 6m | 7d ago | 20m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 99.79% | 93.26% | 47.45% | 47.45% | 215 ms | ↓ 0.58x | 2 | 12h 25m | 8h ago | 20m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.86% | 72.56% | 72.56% | 759 ms | ↓ 0.77x | 2 | 0s | 4d ago | 19m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.79% | 99.82% | 79.14% | 79.14% | 1435 ms | ↓ 0.81x | 3 | 0s | 3d ago | 19m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.79% | 99.86% | 97.84% | 97.84% | 717 ms | ↓ 0.45x | 2 | 0s | 2d ago | 20m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.86% | 99.53% | 99.53% | 869 ms | ↓ 0.64x | 2 | 0s | 7d ago | 20m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.79% | 92.94% | 11.53% | 11.53% | 2817 ms | ↑ 1.38x | 6 | 4h 18m | 7d ago | 20m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.79% | 99.77% | 56.50% | 56.50% | 1011 ms | ↓ 0.78x | 4 | 0s | 2d ago | 20m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.79% | 99.86% | 13.77% | 13.77% | 2701 ms | ↑ 1.57x | 2 | 0s | 19h ago | 20m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.79% | 95.56% | 63.32% | 63.32% | 743 ms | ↓ 0.80x | 10 | 2h 50m | 1d ago | 20m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.79% | 99.82% | 14.42% | 14.42% | 978 ms | ↓ 0.56x | 3 | 0s | 19h ago | 20m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.78% | 93.20% | 44.57% | 44.57% | 1486 ms | ↓ 0.76x | 4 | 6h 12m | 6d ago | 18m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.78% | 99.73% | 97.15% | 97.15% | 2221 ms | ↓ 0.78x | 5 | 0s | 3d ago | 18m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.78% | 99.68% | 98.93% | 98.93% | 1137 ms | ↓ 0.88x | 5 | 2m | 3d ago | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.78% | 99.86% | 88.35% | 88.35% | 2185 ms | ↓ 0.90x | 2 | 0s | 5d ago | 19m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.78% | 93.15% | 29.94% | 29.94% | 197 ms | ↓ 0.88x | 5 | 4h 58m | 16h ago | 18m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.78% | 96.33% | 88.53% | 88.53% | 516 ms | ↓ 0.19x | 45 | 8m | 3d ago | 18m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.78% | 99.91% | 99.91% | 99.91% | 1257 ms | ↓ 0.92x | 1 | 0s | 4d ago | 13m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.78% | 99.91% | 99.80% | 99.80% | 897 ms | ↓ 0.60x | 1 | 0s | 3d ago | 16m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.78% | 99.86% | 95.76% | 95.76% | 1359 ms | ↑ 1.07x | 2 | 0s | 3d ago | 16m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.78% | 99.82% | 99.88% | 99.88% | 748 ms | ↓ 0.79x | 2 | 9m | 6d ago | 16m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.78% | 96.82% | 83.22% | 83.22% | 714 ms | ↓ 0.30x | 34 | 17m | 3d ago | 17m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.78% | 98.50% | 99.36% | 99.36% | 3743 ms | ↑ 1.34x | 5 | 1h 48m | 6d ago | 18m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.78% | 99.45% | 99.60% | 99.60% | 1134 ms | ↑ 1.23x | 7 | 11m | 4d ago | 16m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.78% | 97.56% | 97.56% | 97.56% | 3666 ms | ↑ 1.18x | 7 | 1h 55m | 4d ago | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.78% | 99.68% | 97.26% | 97.26% | 3814 ms | ↑ 1.34x | 6 | 0s | 6d ago | 18m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.78% | 99.72% | 99.72% | 99.72% | 1483 ms | → 1.01x | 2 | 10m | 6d ago | 13m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.78% | 99.60% | 99.60% | 99.60% | 2625 ms | ↓ 0.94x | 3 | 7m | 6d ago | 13m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.78% | 99.81% | 99.81% | 99.81% | 1297 ms | ↓ 0.81x | 2 | 0s | 6d ago | 12m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.78% | 99.77% | 95.98% | 95.98% | 1728 ms | → 1.02x | 3 | 6m | 6d ago | 16m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.78% | 99.64% | 99.71% | 99.71% | 3893 ms | ↑ 1.31x | 7 | 0s | 6d ago | 18m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.78% | 74.43% | 32.81% | 32.81% | 1132 ms | ↓ 0.58x | 20 | 8h 16m | 6d ago | 18m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.78% | 99.53% | 99.53% | 99.53% | 1697 ms | ↑ 1.06x | 5 | 0s | 11h ago | 13m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.78% | 98.90% | 99.00% | 99.00% | 1565 ms | ↓ 0.88x | 8 | 5m | 6d ago | 14m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.58% | 95.65% | 98.78% | 98.78% | 2808 ms | ↓ 0.84x | 74 | 6m | 6d ago | 29m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.58% | 98.75% | 91.80% | 91.80% | 969 ms | ↓ 0.93x | 5 | 1h 28m | 3d ago | 28m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.58% | 99.73% | 99.18% | 99.18% | 1211 ms | ↓ 0.89x | 5 | 0s | 2d ago | 27m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.57% | 99.78% | 99.64% | 99.64% | 916 ms | ↓ 0.82x | 3 | 7m | 5h ago | 27m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.57% | 99.64% | 99.71% | 99.71% | 3094 ms | → 1.02x | 7 | 0s | 5d ago | 24m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.57% | 99.64% | 99.16% | 99.16% | 3338 ms | ↑ 1.11x | 4 | 17m | 2d ago | 24m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.57% | 99.73% | 99.79% | 99.79% | 1956 ms | ↓ 0.92x | 5 | 0s | 5d ago | 24m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.57% | 99.73% | 76.67% | 76.67% | 2069 ms | ↓ 0.89x | 5 | 0s | 5d ago | 19m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.57% | 93.17% | 12.05% | 12.05% | 1079 ms | ↓ 0.86x | 4 | 6h 12m | 1d ago | 20m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.57% | 71.70% | 91.01% | 91.01% | 1408 ms | ↓ 0.88x | 5 | 1d 15h | 3d ago | 19m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.57% | 99.80% | 99.80% | 99.80% | 3410 ms | ↑ 1.28x | 2 | 0s | 4d ago | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.57% | 99.59% | 96.38% | 96.38% | 1980 ms | ↓ 0.85x | 8 | 0s | 3d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.57% | 85.52% | 85.57% | 85.57% | 2050 ms | ↑ 1.17x | 13 | 8h 3m | 11d ago | 14m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.57% | 93.73% | 93.73% | 93.73% | 664 ms | → 1.03x | 5 | 4h 10m | 4d ago | 13m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.36% | 97.91% | 98.65% | 98.65% | 3238 ms | → 0.97x | 40 | 4m | 1h ago | 27m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.36% | 98.61% | 99.41% | 99.41% | 2992 ms | ↑ 1.12x | 19 | 12m | 2d ago | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.35% | 98.73% | 89.76% | 89.76% | 1828 ms | ↑ 1.14x | 27 | 0s | 16h ago | 19m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.35% | 97.67% | 97.67% | 97.67% | 2590 ms | ↓ 0.94x | 12 | 21m | 5d ago | 14m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.15% | 89.65% | 95.67% | 95.67% | 3347 ms | ↓ 0.90x | 113 | 21m | 2d ago | 29m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.15% | 99.42% | 99.71% | 99.71% | 415 ms | ↓ 0.92x | 8 | 10m | 2d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.15% | 99.73% | 99.89% | 99.89% | 760 ms | ↓ 0.77x | 3 | 17m | 2d ago | 28m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.15% | 99.42% | 98.98% | 98.98% | 1951 ms | → 1.02x | 11 | 2m | 2d ago | 24m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.14% | 98.18% | 98.18% | 98.18% | 1958 ms | ↓ 0.90x | 12 | 10m | 2h ago | 13m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.14% | 99.60% | 99.60% | 99.60% | 1773 ms | → 0.96x | 2 | 19m | 5d ago | 12m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.14% | 99.09% | 99.09% | 99.09% | 1283 ms | ↓ 0.94x | 9 | 0s | 4d ago | 12m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.14% | 99.29% | 99.29% | 99.29% | 1022 ms | ↓ 0.86x | 7 | 0s | 4h ago | 13m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (57)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.94% | 98.12% | 98.99% | 98.99% | 3664 ms | → 1.04x | 13 | 45m | 7d ago | 26m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 98.94% | 98.17% | 97.02% | 97.02% | 3695 ms | → 1.04x | 12 | 48m | 7d ago | 26m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 98.94% | 98.12% | 55.76% | 55.76% | 3940 ms | → 1.05x | 13 | 45m | 7d ago | 26m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.94% | 98.12% | 99.17% | 99.17% | 3704 ms | ↑ 1.41x | 12 | 50m | 7d ago | 26m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.93% | 96.02% | 85.03% | 85.03% | 4584 ms | → 1.01x | 71 | 3m | 15h ago | 20m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.92% | 99.27% | 99.09% | 99.09% | 173 ms | ↓ 0.65x | 11 | 13m | 4d ago | 17m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.92% | 99.59% | 95.02% | 95.02% | 465 ms | ↓ 0.41x | 5 | 12m | 3d ago | 16m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.71% | 95.69% | 61.34% | 61.34% | 4697 ms | → 0.99x | 76 | 4m | 3d ago | 19m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.71% | 99.59% | 97.74% | 97.74% | 3043 ms | ↑ 1.26x | 3 | 34m | 6h ago | 17m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.71% | 99.29% | 99.29% | 99.29% | 3471 ms | → 0.98x | 5 | 9m | 5d ago | 13m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.52% | 97.25% | 98.05% | 98.05% | 4599 ms | → 1.04x | 53 | 3m | 5h ago | 30m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.49% | 98.23% | 89.03% | 89.03% | 3885 ms | ↑ 1.41x | 31 | 5m | 4d ago | 18m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.28% | 88.47% | 88.47% | 88.47% | 1343 ms | ↓ 0.87x | 5 | 7h 21m | 2d ago | 12m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.28% | 93.50% | 81.47% | 81.47% | 4789 ms | ↑ 1.14x | 85 | 12m | 14h ago | 17m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.09% | 92.18% | 83.96% | 83.96% | 4533 ms | ↑ 1.05x | 68 | 28m | 18h ago | 30m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.09% | 98.89% | 99.22% | 99.22% | 846 ms | ↓ 0.72x | 18 | 7m | 2d ago | 29m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.09% | 90.74% | 11.16% | 11.16% | 1892 ms | → 1.04x | 55 | 29m | 13h ago | 26m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.88% | 98.93% | 97.68% | 97.68% | 3670 ms | ↓ 0.95x | 23 | 0s | 4d ago | 28m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.85% | 99.37% | 98.35% | 98.35% | 642 ms | ↓ 0.44x | 6 | 23m | 1d ago | 18m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 97.84% | 98.92% | 98.92% | 98.92% | 4646 ms | → 1.01x | 14 | 1m | 14h ago | 12m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.84% | 99.06% | 99.06% | 99.06% | 816 ms | ↓ 0.76x | 1 | 2h 60m | 1d ago | 12m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.66% | 92.80% | 24.47% | 24.47% | 1908 ms | ↑ 1.23x | 5 | 5h 34m | 3d ago | 26m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.44% | 90.08% | 11.05% | 11.05% | 4070 ms | ↑ 1.11x | 64 | 30m | 2d ago | 24m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.44% | 95.02% | 98.67% | 98.67% | 4003 ms | ↑ 1.08x | 65 | 14m | 2d ago | 24m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.41% | 98.79% | 98.79% | 98.79% | 1260 ms | ↓ 0.95x | 1 | 3h 38m | 6d ago | 13m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 97.23% | 97.81% | 41.23% | 41.23% | 1059 ms | ↓ 0.92x | 14 | 51m | 4d ago | 26m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.02% | 94.77% | 84.48% | 84.48% | 4486 ms | → 1.05x | 95 | 3m | 13h ago | 27m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.01% | 94.17% | 72.19% | 72.19% | 4439 ms | → 0.98x | 105 | 3m | 3h ago | 25m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 96.98% | 99.32% | 96.59% | 96.59% | 1690 ms | ↓ 0.93x | 1 | 4h 31m | 4d ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.82% | 90.99% | 79.53% | 79.53% | 3130 ms | ↓ 0.94x | 95 | 12m | 1d ago | 30m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 96.77% | 99.27% | 94.97% | 94.97% | 1901 ms | ↑ 1.34x | 2 | 2h 9m | 6d ago | 16m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.56% | 94.92% | 82.86% | 82.86% | 4718 ms | → 0.97x | 92 | 2m | 16h ago | 18m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.55% | 96.32% | 96.32% | 96.32% | 1365 ms | ↓ 0.86x | 33 | 4m | 2h ago | 12m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.91% | 91.69% | 79.43% | 79.43% | 4645 ms | → 1.03x | 147 | 4m | 5h ago | 18m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.48% | 92.88% | 79.35% | 79.35% | 4822 ms | → 1.03x | 116 | 6m | 17h ago | 19m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 95.47% | 96.96% | 49.77% | 49.77% | 1791 ms | ↓ 0.95x | 27 | 29m | 22h ago | 17m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.28% | 94.79% | 68.90% | 68.90% | 1206 ms | ↓ 0.78x | 19 | 1h 33m | 1d ago | 19m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 95.25% | 98.18% | 98.18% | 98.18% | 1024 ms | ↓ 0.57x | 2 | 5h 34m | 6d ago | 13m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 95.12% | 85.93% | 10.60% | 10.60% | 799 ms | ↓ 0.83x | 86 | 38m | 3d ago | 28m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.18% | 98.73% | 95.20% | 95.20% | 1373 ms | → 1.03x | 1 | 8h 38m | 6d ago | 16m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 93.75% | 34.45% | 28.34% | 28.34% | 1073 ms | ↓ 0.94x | 2 | 9d 5h | 6d ago | 17m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 92.92% | 98.14% | 98.50% | 98.50% | 1307 ms | ↑ 1.34x | 9 | 1h 11m | 2d ago | 20m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.73% | 82.88% | 43.20% | 43.20% | 3900 ms | ↑ 1.10x | 193 | 12m | 5h ago | 17m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 89.66% | 84.06% | 91.25% | 91.25% | 3010 ms | ↑ 1.12x | 12 | 9h 50m | 5d ago | 18m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.27% | 83.58% | 12.23% | 12.23% | 4558 ms | ↑ 1.08x | 216 | 10m | 40m ago | 20m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 89.15% | 97.68% | 99.63% | 99.63% | 3011 ms | ↑ 1.34x | 4 | 4h 15m | 6m ago | 26m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 89.10% | 82.60% | 42.61% | 42.61% | 1752 ms | → 1.02x | 8 | 5h 1m | 10h ago | 25m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.15% | 97.14% | 90.83% | 90.83% | 2673 ms | ↓ 0.80x | 7 | 2h 38m | 6d ago | 17m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 84.83% | 80.47% | 9.87% | 9.87% | 3023 ms | ↓ 0.74x | 228 | 12m | 45m ago | 25m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 84.55% | 95.98% | 97.25% | 97.25% | 2049 ms | ↑ 1.59x | 7 | 4h 1m | 17h ago | 20m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 83.62% | 96.19% | 95.74% | 95.74% | 2464 ms | ↓ 0.59x | 5 | 5h 26m | 4d ago | 17m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 80.56% | 93.72% | 65.70% | 65.70% | 4371 ms | ↑ 1.12x | 60 | 25m | 17h ago | 25m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 79.05% | 63.26% | 63.26% | 63.26% | 1087 ms | → 0.96x | 1 | 5d 5h | 11d ago | 13m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 50.00% | 61.30% | 74.68% | 74.68% | 608 ms | ↓ 0.31x | 3 | 4d 1h | 7d ago | 16m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 41.20% | 79.86% | 28.48% | 28.48% | 1744 ms | ↓ 0.84x | 19 | 7h 40m | 6d ago | 20m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 38.15% | 84.54% | 88.26% | 88.26% | 24 ms | ↓ 0.15x | 4 | 1d 5h | 8d ago | 16m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 21.02% | 4.41% | 3.99% | 3.99% | 2943 ms | → 1.00x | 11 | 2d 14h | 1h ago | 28m ago |

</details>

<details open>
<summary><strong>🔴 Down (212)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.78% | 99.73% | 99.83% | 99.83% | 1078 ms | ↓ 0.80x | 3 | 13m | 15m ago | 15m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.57% | 99.55% | 88.44% | 88.44% | 672 ms | ↓ 0.62x | 5 | 19m | 36m ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.35% | 97.77% | 97.23% | 97.23% | 1470 ms | → 1.02x | 4 | 3h 40m | 16m ago | 16m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 91.03% | 96.10% | 51.12% | 51.12% | 2866 ms | ↑ 1.07x | 25 | 42m | 14h ago | 26m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 86.05% | 96.97% | 88.78% | 88.78% | 1223 ms | ↓ 0.73x | 3 | 7h 28m | 23h ago | 20m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 85.81% | 95.78% | 39.27% | 39.27% | 2408 ms | ↑ 1.11x | 24 | 1h 10m | 1d ago | 18m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 80.39% | 94.18% | 94.01% | 94.01% | 1153 ms | ↓ 0.79x | 2 | 23h 41m | 1d ago | 16m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 78.23% | 89.69% | 89.69% | 89.69% | 1691 ms | ↓ 0.91x | 6 | 6h 18m | 2d ago | 12m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 77.33% | 94.80% | 99.03% | 99.03% | 617 ms | ↓ 0.87x | 13 | 2h 48m | 2h ago | 28m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 75.70% | 94.78% | 28.08% | 28.08% | 306 ms | ↓ 0.28x | 2 | 22h 24m | 2d ago | 19m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 73.71% | 87.65% | 87.65% | 87.65% | 2995 ms | → 0.96x | 1 | 2d 1h | 2d ago | 13m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 72.69% | 93.70% | 96.66% | 96.66% | 2511 ms | ↑ 1.22x | 8 | 6h 17m | 2d ago | 18m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 72.47% | 93.65% | 96.71% | 96.71% | 558 ms | ↓ 0.51x | 8 | 6h 20m | 2d ago | 18m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 65.38% | 65.08% | 15.02% | 15.02% | 4479 ms | → 1.02x | 362 | 20m | 1h ago | 19m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 63.71% | 90.07% | 90.07% | 90.07% | 2587 ms | → 0.98x | 14 | 4h 51m | 3d ago | 14m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 63.28% | 82.79% | 82.79% | 82.79% | 1952 ms | → 0.99x | 2 | 1d 8h | 3d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 60.30% | 91.25% | 22.15% | 22.15% | 1602 ms | → 1.00x | 7 | 10h 6m | 3d ago | 19m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 58.12% | 64.35% | 61.79% | 61.79% | 4862 ms | → 1.05x | 408 | 18m | 25m ago | 25m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 48.06% | 75.20% | 75.20% | 75.20% | 921 ms | ↓ 0.86x | 5 | 18h 4m | 4d ago | 12m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 47.03% | 87.96% | 98.29% | 98.29% | 3058 ms | ↓ 0.90x | 20 | 4h 37m | 4d ago | 29m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 44.21% | 49.46% | 11.36% | 11.36% | 3911 ms | ↑ 1.08x | 475 | 27m | 22h ago | 19m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 41.81% | 85.91% | 85.91% | 85.91% | 903 ms | ↓ 0.90x | 2 | 2d 2h | 4d ago | 13m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 32.98% | 85.91% | 96.30% | 96.30% | 1217 ms | ↓ 0.94x | 1 | 4d 19h | 5d ago | 27m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 17.71% | 61.44% | 61.44% | 61.44% | 2013 ms | → 0.99x | 1 | 5d 19h | 6d ago | 13m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.21% | 9.62% | 9.62% | 9.62% | 3147 ms | ↓ 0.90x | 93 | 3h 17m | 1h ago | 12m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 5.39% | 58.58% | 58.58% | 58.58% | 2505 ms | ↑ 1.09x | 1 | 6d 15h | 7d ago | 13m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 4.94% | 79.10% | 72.87% | 72.87% | 2303 ms | ↑ 1.09x | 6 | 1d 3h | 7d ago | 19m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 1.08% | 79.02% | 84.72% | 84.72% | 1033 ms | ↓ 0.55x | 3 | 2d 7h | 7d ago | 17m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 1.06% | 78.81% | 88.61% | 88.61% | 566 ms | ↓ 0.69x | 4 | 1d 18h | 7d ago | 28m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 1.06% | 30.61% | 87.07% | 87.07% | 503 ms | ↓ 0.64x | 27 | 18h 32m | 7d ago | 29m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.06% | 10.61% | 64.33% | 64.33% | 3970 ms | ↑ 1.17x | 80 | 8h 8m | 1d ago | 30m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.86% | 73.78% | 73.63% | 73.63% | 2101 ms | ↑ 1.48x | 44 | 4h 6m | 7d ago | 14m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.86% | 78.88% | 88.71% | 88.71% | 1363 ms | ↓ 0.67x | 5 | 1d 9h | 7d ago | 17m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 6.50% | 87.74% | 87.74% | — | — | 2 | 14d 11h | 29d ago | 28m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 72.65% | 72.65% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 6.60% | 78.12% | 78.12% | — | — | 2 | 14d 11h | 29d ago | 21m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 33.91% | 75.33% | 75.33% | — | — | 2 | 10d 12h | 21d ago | 18m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.03% | 6.03% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 6.26% | 13.27% | 13.27% | — | — | 7 | 4d 3h | 29d ago | 30m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 61.70% | 77.62% | 77.62% | — | — | 5 | 2d 11h | 10d ago | 17m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.60% | 3.60% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 6.58% | 88.00% | 88.00% | — | — | 1 | 28d 23h | 29d ago | 26m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.63% | 38.63% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 60.27% | 73.30% | 73.30% | — | — | 3 | 4d 6h | 13d ago | 17m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.39% | 26.39% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 5.56% | 78.98% | 78.98% | — | — | 17 | 1d 17h | 29d ago | 29m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 5.58% | 60.67% | 60.67% | — | — | 16 | 1d 20h | 29d ago | 19m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 6.65% | 32.60% | 32.60% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 6.53% | 88.43% | 88.43% | — | — | 1 | 28d 23h | 29d ago | 29m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 66.60% | 66.60% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 6.54% | 81.68% | 81.68% | — | — | 1 | 28d 23h | 29d ago | 28m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.32% | 17.32% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 6.75% | 55.38% | 55.38% | — | — | 2 | 14d 11h | 29d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 38.80% | 38.80% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 1.00% | 3.81% | 3.81% | — | — | 2 | 14d 22h | 29d ago | 20m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 6.65% | 88.61% | 88.61% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.99% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 29d ago | 24m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.98% | 55.03% | 55.03% | — | — | 2 | 14d 22h | 29d ago | 26m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.73% | 30.73% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 6.31% | 2.18% | 2.18% | — | — | 6 | 4d 20h | 29d ago | 26m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 74.92% | 90.95% | 90.95% | — | — | 7 | 1d 4h | 8d ago | 18m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 18.62% | 39.59% | 39.59% | — | — | 3 | 8d 7h | 25d ago | 18m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 57.91% | 57.91% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.95% | 26.86% | 26.86% | — | — | 2 | 14d 22h | 29d ago | 19m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 6.65% | 31.77% | 31.77% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.99% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 29d ago | 26m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 60.68% | 60.68% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.35% | 6.35% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 69.82% | 69.82% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 6.44% | 88.37% | 88.37% | — | — | 3 | 9d 16h | 29d ago | 29m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.67% | 8.67% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 4.86% | 84.35% | 84.35% | — | — | 26 | 1d 3h | 29d ago | 20m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 12h | 14d ago | 13m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 33.29% | 33.29% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 56.13% | 56.13% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 75.19% | 62.55% | 62.55% | — | — | 5 | 1d 15h | 8d ago | 19m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 20.11% | 20.09% | 20.09% | — | — | 2 | 6d 4h | 11d ago | 14m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 4.66% | 81.33% | 81.33% | — | — | 27 | 1d 2h | 29d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.58% | 49.58% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 45.06% | 45.06% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 6.48% | 88.38% | 88.38% | — | — | 2 | 14d 11h | 29d ago | 30m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 62.41% | 62.41% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.93% | 41.46% | 41.46% | — | — | 2 | 14d 22h | 29d ago | 28m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 11h | 14d ago | 21m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 3.63% | 34.34% | 34.34% | — | — | 35 | 20h 1m | 29d ago | 20m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 6.60% | 2.76% | 2.76% | — | — | 2 | 14d 11h | 29d ago | 20m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.30% | 44.30% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 6.56% | 88.33% | 88.33% | — | — | 2 | 14d 11h | 29d ago | 24m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 6.65% | 35.46% | 35.46% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 6.53% | 88.26% | 88.26% | — | — | 1 | 28d 23h | 29d ago | 29m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 64.26% | 76.39% | 76.39% | — | — | 2 | 5d 19h | 12d ago | 16m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 6.54% | 33.80% | 33.80% | — | — | 1 | 28d 23h | 29d ago | 28m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 49.73% | 49.73% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 6.04% | 85.78% | 85.78% | — | — | 10 | 2d 21h | 29d ago | 29m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 33.61% | 75.79% | 75.79% | — | — | 3 | 6d 21h | 20d ago | 19m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 58.94% | 41.23% | 41.23% | — | — | 28 | 11h 1m | 11d ago | 16m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 84.14% | 84.14% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 6.58% | 63.23% | 63.23% | — | — | 2 | 14d 11h | 29d ago | 18m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.59% | 3.59% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 46.04% | 46.04% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 6.45% | 82.46% | 82.46% | — | — | 3 | 9d 16h | 29d ago | 28m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 3.32% | 62.90% | 62.90% | — | — | 28 | 1d 1h | 29d ago | 25m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 62.62% | 79.92% | 79.92% | — | — | 60 | 4h 30m | 11d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 69.74% | 94.76% | 94.76% | — | — | 1 | 9d 24h | 10d ago | 26m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.17% | 30.17% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 6.37% | 14.48% | 14.48% | — | — | 6 | 4d 20h | 29d ago | 16m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 1.45% | 14.64% | 14.64% | — | — | 28 | 1d 1h | 29d ago | 19m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 34.99% | 37.87% | 37.87% | — | — | 6 | 3d 7h | 17d ago | 16m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.70% | 25.70% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 11h | 15d ago | 13m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 6.39% | 67.70% | 67.70% | — | — | 6 | 4d 20h | 29d ago | 18m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 17.02% | 17.04% | 17.04% | — | — | 3 | 8d 6h | 24d ago | 14m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.62% | 18.62% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.79% | 52.79% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 11h | 14d ago | 13m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 58.82% | 58.82% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 63.08% | 28.38% | 28.38% | — | — | 22 | 12h 45m | 12d ago | 18m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 6.59% | 47.94% | 47.94% | — | — | 1 | 28d 22h | 29d ago | 16m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 18.48% | 62.57% | 62.57% | — | — | 3 | 8d 8h | 25d ago | 17m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 6.65% | 5.92% | 5.92% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 6.55% | 88.47% | 88.47% | — | — | 1 | 28d 23h | 29d ago | 27m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 6.55% | 87.32% | 87.32% | — | — | 1 | 28d 23h | 29d ago | 27m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 3.11% | 68.10% | 68.10% | — | — | 34 | 20h 39m | 29d ago | 30m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 79.96% | 79.96% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 6.54% | 87.16% | 87.16% | — | — | 1 | 28d 23h | 29d ago | 28m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.96% | 20.96% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.26% | 6.48% | 6.48% | — | — | 3 | 9d 6h | 27d ago | 28m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 28.78% | 4.32% | 4.32% | — | — | 6 | 3d 15h | 18d ago | 26m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 6.65% | 36.54% | 36.54% | — | — | 1 | 28d 22h | 29d ago | 20m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 72.79% | 72.79% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.82% | 27.15% | 27.15% | — | — | 5 | 5d 22h | 8d ago | 18m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.58% | 8.58% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 4.35% | 70.04% | 70.04% | — | — | 33 | 21h 8m | 29d ago | 30m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 11h | 14d ago | 21m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 72.10% | 72.10% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 67.99% | 68.03% | 68.03% | — | — | 14 | 17h 33m | 10d ago | 14m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 12.54% | 12.63% | 12.63% | — | — | 2 | 7d 6h | 14d ago | 13m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 6.59% | 48.88% | 48.88% | — | — | 2 | 14d 11h | 29d ago | 17m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 13.44% | 36.38% | 36.38% | — | — | 1 | 27d 21h | 28d ago | 15m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 15.14% | 15.14% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.16% | 19.16% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 34.56% | 23.90% | 23.90% | — | — | 2 | 10d 9h | 21d ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 60.37% | 60.37% | 60.37% | — | — | 1 | 11d 7h | 11d ago | 13m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 22.55% | 22.55% | 22.55% | — | — | 8 | 1d 12h | 12d ago | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 1.48% | 1.52% | 1.52% | — | — | 2 | 14d 18h | 29d ago | 14m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 6.60% | 8.39% | 8.39% | — | — | 1 | 28d 22h | 29d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 10.04% | 10.09% | 10.09% | — | — | 2 | 13d 7h | 26d ago | 13m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 53.25% | 53.25% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 6.52% | 88.44% | 88.44% | — | — | 2 | 14d 11h | 29d ago | 26m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.50% | 59.16% | 59.16% | — | — | 1 | 29d 22h | 30d ago | 18m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 15.72% | 88.62% | 88.62% | — | — | 4 | 6d 12h | 26d ago | 24m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 72.88% | 80.75% | 80.75% | — | — | 2 | 4d 10h | 9d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 44.15% | 44.15% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 4.72% | 4.72% | 4.72% | — | — | 1 | 14d 18h | 15d ago | 13m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 5.31% | 86.19% | 86.19% | — | — | 25 | 1d 4h | 29d ago | 20m ago |

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
