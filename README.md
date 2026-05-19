# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**603 providers** — 337 🟢 operational · 56 🟡 degraded · 210 🔴 down · 0 ⚫ unknown

_Updated 2026-05-19 06:52 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.81% | 96.88% | 96.88% | 1437 ms | ↓ 0.74x | 2 | 10m | 8d ago | 6m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.95% | 92.66% | 92.66% | 788 ms | ↓ 0.79x | 0 | — | — | 10m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.39% | 68.52% | 68.52% | 1082 ms | ↓ 0.92x | 9 | 7m | 8d ago | 11m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.13% | 13.71% | 13.71% | 1932 ms | ↓ 0.89x | 2 | 6h 11m | 18d ago | 11m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.95% | 97.21% | 97.21% | 2224 ms | ↓ 0.78x | 0 | — | — | 19m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.53% | 45.13% | 45.13% | 1537 ms | ↓ 0.76x | 4 | 15m | 7d ago | 9m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.26% | 98.70% | 98.70% | 1741 ms | ↓ 0.76x | 22 | 14m | 17d ago | 21m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.63% | 99.19% | 99.19% | 3512 ms | ↓ 0.94x | 7 | 0s | 23d ago | 21m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.30% | 98.30% | 98.30% | 1521 ms | ↓ 0.85x | 11 | 13m | 15d ago | 5m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.48% | 92.97% | 92.97% | 1774 ms | ↓ 0.86x | 1 | 2h 59m | 16d ago | 8m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1419 ms | ↓ 0.64x | 0 | — | — | 5m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.95% | 91.71% | 91.71% | 1750 ms | ↓ 0.93x | 0 | — | — | 22m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.86% | 96.18% | 96.18% | 3326 ms | ↑ 1.10x | 2 | 0s | 17d ago | 7m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 432 ms | → 1.00x | 0 | — | — | 3m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.81% | 98.10% | 98.10% | 935 ms | ↓ 0.79x | 3 | 0s | 11d ago | 8m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 93.46% | 93.46% | 93.46% | 987 ms | ↓ 0.93x | 1 | 1d 1h | 12d ago | 5m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 97.89% | 97.89% | 97.89% | 701 ms | ↓ 0.64x | 1 | 13h 57m | 26d ago | 5m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 76.17% | 31.58% | 31.58% | 529 ms | ↓ 0.85x | 4 | 1d 19h | 20d ago | 16m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.67% | 96.28% | 96.28% | 2123 ms | → 0.99x | 1 | 1h 40m | 15d ago | 10m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.78% | 98.78% | 614 ms | ↓ 0.74x | 1 | 0s | 16d ago | 18m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 452 ms | ↓ 0.65x | 0 | — | — | 4m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.95% | 95.85% | 95.85% | 478 ms | ↓ 0.66x | 0 | — | — | 9m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1820 ms | ↓ 0.88x | 0 | — | — | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.81% | 97.84% | 97.84% | 2521 ms | → 0.97x | 2 | 9m | 23d ago | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 99.95% | 96.88% | 96.88% | 173 ms | ↓ 0.33x | 0 | — | — | 6m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.31% | 79.97% | 79.97% | 1216 ms | ↓ 0.70x | 6 | 5h 21m | 20d ago | 8m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 990 ms | ↓ 0.72x | 0 | — | — | 4m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.67% | 97.15% | 97.15% | 704 ms | ↓ 0.44x | 2 | 40m | 21d ago | 9m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.95% | 99.98% | 99.98% | 458 ms | ↓ 0.79x | 0 | — | — | 17m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.86% | 99.73% | 99.73% | 2738 ms | ↓ 0.84x | 2 | 0s | 11d ago | 17m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.86% | 98.75% | 98.75% | 159 ms | ↓ 0.10x | 2 | 0s | 26d ago | 9m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 98.11% | 98.99% | 98.99% | 3563 ms | → 0.97x | 12 | 48m | 8d ago | 18m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.67% | 99.77% | 99.77% | 2063 ms | ↓ 0.88x | 4 | 10m | 15d ago | 9m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 50.07% | 10.04% | 10.04% | 2664 ms | ↑ 1.06x | 7 | 2d 1h | 8d ago | 16m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 99.95% | 95.24% | 95.24% | 1821 ms | ↓ 0.81x | 0 | — | — | 9m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.69% | 81.24% | 81.24% | 1530 ms | ↓ 0.91x | 2 | 4d 1h | 15d ago | 7m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 99.65% | 99.65% | 99.65% | 1248 ms | ↓ 0.71x | 4 | 15m | 9d ago | 5m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.95% | 99.48% | 99.48% | 1777 ms | ↓ 0.89x | 0 | — | — | 17m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 550 ms | → 1.00x | 0 | — | — | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.86% | 99.84% | 99.84% | 4014 ms | ↑ 1.14x | 2 | 0s | 15d ago | 16m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.72% | 23.61% | 23.61% | 853 ms | ↓ 0.58x | 5 | 0s | 16d ago | 17m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.25% | 95.09% | 95.09% | 1911 ms | ↑ 1.32x | 2 | 2h 9m | 7d ago | 7m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1037 ms | ↓ 0.85x | 0 | — | — | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1132 ms | ↑ 1.16x | 0 | — | — | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.82% | 99.82% | 99.82% | 490 ms | → 1.00x | 2 | 0s | 9d ago | 5m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.91% | 95.95% | 95.95% | 784 ms | ↓ 0.65x | 1 | 0s | 17d ago | 10m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 99.53% | 50.28% | 50.28% | 822 ms | → 1.01x | 4 | 26m | 28d ago | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1007 ms | ↓ 0.75x | 0 | — | — | 4m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.95% | 99.60% | 99.60% | 2736 ms | → 1.00x | 0 | — | — | 16m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.91% | 96.89% | 96.89% | 1269 ms | ↓ 0.90x | 1 | 0s | 25d ago | 16m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.30% | 98.43% | 98.43% | 1170 ms | ↓ 0.94x | 2 | 30m | 10d ago | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.91% | 80.60% | 80.60% | 1920 ms | ↓ 0.82x | 1 | 0s | 24d ago | 11m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.91% | 62.06% | 62.06% | 1574 ms | → 1.04x | 1 | 0s | 27d ago | 11m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 923 ms | ↓ 0.90x | 0 | — | — | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.95% | 98.25% | 98.25% | 1762 ms | ↓ 0.75x | 0 | — | — | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 3410 ms | ↓ 0.67x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.11% | 92.11% | 854 ms | ↓ 0.79x | 0 | — | — | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 99.95% | 98.08% | 98.08% | 688 ms | ↓ 0.70x | 0 | — | — | 8m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.41% | 98.41% | 98.41% | 2016 ms | ↓ 0.93x | 12 | 10m | 15d ago | 5m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.58% | 65.79% | 65.79% | 2378 ms | ↑ 1.16x | 8 | 0s | 17d ago | 8m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1650 ms | ↓ 0.85x | 0 | — | — | 4m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 96.84% | 88.51% | 88.51% | 1766 ms | ↓ 0.78x | 14 | 23h 34m | 15d ago | 5m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.95% | 42.31% | 42.31% | 886 ms | → 0.99x | 0 | — | — | 11m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 97.92% | 50.84% | 50.84% | 1381 ms | ↓ 0.79x | 7 | 59m | 21d ago | 17m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.95% | 97.76% | 97.76% | 2256 ms | → 0.97x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.81% | 48.06% | 48.06% | 1076 ms | ↓ 0.90x | 2 | 9m | 27d ago | 11m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.95% | 39.81% | 39.81% | 969 ms | ↓ 0.73x | 0 | — | — | 17m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1258 ms | ↓ 0.71x | 0 | — | — | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 98.92% | 57.03% | 57.03% | 871 ms | ↓ 0.85x | 11 | 20m | 16d ago | 11m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.81% | 55.70% | 55.70% | 1684 ms | ↓ 0.92x | 3 | 0s | 9d ago | 11m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.91% | 59.22% | 59.22% | 1046 ms | ↓ 0.83x | 1 | 0s | 28d ago | 11m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2153 ms | ↓ 0.90x | 0 | — | — | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.95% | 99.11% | 99.11% | 1585 ms | ↓ 0.94x | 0 | — | — | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 99.34% | 79.34% | 79.34% | 566 ms | ↓ 0.93x | 1 | 60m | 30d ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.62% | 99.75% | 99.75% | 2532 ms | → 1.03x | 7 | 0s | 15d ago | 9m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.91% | 99.53% | 99.53% | 846 ms | ↓ 0.63x | 1 | 0s | 8d ago | 11m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.95% | 97.85% | 97.85% | 2024 ms | ↑ 1.16x | 0 | — | — | 11m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.77% | 11.89% | 11.89% | 1401 ms | ↓ 0.95x | 4 | 0s | 14d ago | 17m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1446 ms | ↓ 0.89x | 0 | — | — | 4m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.72% | 98.97% | 98.97% | 2135 ms | ↓ 0.94x | 2 | 30m | 14d ago | 20m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 99.95% | 97.99% | 97.99% | 3242 ms | ↓ 0.84x | 0 | — | — | 21m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.91% | 99.95% | 99.95% | 774 ms | ↓ 0.84x | 1 | 0s | 28d ago | 17m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.95% | 69.20% | 69.20% | 2667 ms | ↓ 0.86x | 0 | — | — | 9m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.95% | 88.00% | 88.00% | 385 ms | → 1.00x | 0 | — | — | 7m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 671 ms | ↓ 0.92x | 1 | 0s | 13d ago | 5m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.82% | 99.95% | 99.95% | 1204 ms | ↓ 0.83x | 3 | 0s | 24d ago | 21m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.91% | 99.61% | 99.61% | 1380 ms | ↓ 0.84x | 1 | 0s | 16d ago | 19m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.53% | 87.62% | 87.62% | 2178 ms | ↑ 1.24x | 7 | 6m | 11d ago | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 89.22% | 72.47% | 72.47% | 2221 ms | ↓ 0.94x | 2 | 1d 17h | 26d ago | 9m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.59% | 99.69% | 99.69% | 423 ms | ↓ 0.88x | 8 | 0s | 11d ago | 20m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1125 ms | ↓ 0.85x | 0 | — | — | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 99.95% | 77.15% | 77.15% | 1649 ms | ↑ 1.13x | 0 | — | — | 8m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1431 ms | ↓ 0.88x | 0 | — | — | 4m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.95% | 100.00% | 100.00% | 1068 ms | ↓ 0.91x | 0 | — | — | 8m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.95% | 98.95% | 98.95% | 484 ms | ↓ 0.71x | 0 | — | — | 11m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.95% | 98.49% | 98.49% | 1846 ms | ↑ 1.17x | 0 | — | — | 10m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 99.95% | 96.16% | 96.16% | 411 ms | ↓ 0.38x | 0 | — | — | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 950 ms | ↓ 0.88x | 0 | — | — | 4m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 615 ms | ↓ 0.57x | 0 | — | — | 4m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1373 ms | ↓ 0.79x | 0 | — | — | 4m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 97.00% | 94.34% | 94.34% | 1532 ms | ↓ 0.75x | 12 | 1d 5h | 14d ago | 5m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.62% | 99.62% | 99.62% | 2584 ms | ↓ 0.93x | 3 | 7m | 7d ago | 4m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.15% | 95.86% | 95.86% | 253 ms | ↓ 0.40x | 15 | 3m | 16d ago | 6m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.95% | 98.53% | 98.53% | 207 ms | ↓ 0.49x | 0 | — | — | 9m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.86% | 98.89% | 98.89% | 800 ms | ↓ 0.69x | 2 | 0s | 22d ago | 12m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.63% | 11.79% | 11.79% | 2703 ms | → 0.97x | 2 | 25m | 15d ago | 16m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 909 ms | ↓ 0.90x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 99.95% | 15.37% | 15.37% | 1090 ms | ↓ 0.88x | 0 | — | — | 11m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.95% | 99.99% | 99.99% | 692 ms | ↓ 0.87x | 0 | — | — | 22m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.95% | 99.93% | 99.93% | 614 ms | ↓ 0.56x | 0 | — | — | 20m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 91.01% | 78.95% | 78.95% | 134 ms | ↓ 0.67x | 7 | 8h 51m | 7d ago | 21m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.95% | 96.75% | 96.75% | 1294 ms | ↓ 0.88x | 0 | — | — | 6m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.08% | 99.72% | 99.72% | 2627 ms | ↓ 0.90x | 4 | 1h 15m | 13d ago | 20m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 99.95% | 97.71% | 97.71% | 2428 ms | ↑ 1.42x | 0 | — | — | 11m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.30% | 11.88% | 11.88% | 2682 ms | ↑ 1.33x | 6 | 18m | 8d ago | 11m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.77% | 99.73% | 99.73% | 1321 ms | ↓ 0.89x | 2 | 20m | 11d ago | 12m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1216 ms | → 0.95x | 0 | — | — | 5m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.95% | 98.61% | 98.61% | 4050 ms | → 0.99x | 0 | — | — | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 54.05% | 81.99% | 81.99% | 767 ms | ↓ 0.65x | 1 | 13d 5h | 30d ago | 9m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.95% | 99.91% | 99.91% | 2793 ms | ↑ 1.22x | 0 | — | — | 20m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1274 ms | ↓ 0.88x | 0 | — | — | 5m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.91% | 99.63% | 99.63% | 2622 ms | ↑ 1.24x | 1 | 0s | 11d ago | 16m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.86% | 99.29% | 99.29% | 1848 ms | ↓ 0.93x | 2 | 0s | 10d ago | 11m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.68% | 36.43% | 36.43% | 638 ms | → 0.97x | 1 | 50m | 30d ago | 21m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.95% | 98.17% | 98.17% | 3986 ms | ↑ 1.31x | 0 | — | — | 9m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.95% | 99.82% | 99.82% | 1371 ms | ↑ 1.06x | 0 | — | — | 9m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.91% | 99.85% | 99.85% | 1207 ms | ↓ 0.79x | 1 | 0s | 12d ago | 16m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.95% | 99.86% | 99.86% | 1967 ms | → 0.97x | 0 | — | — | 11m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.81% | 99.84% | 99.84% | 1998 ms | ↓ 0.91x | 25 | 0s | 15d ago | 20m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 99.95% | 99.45% | 99.45% | 1768 ms | ↑ 1.30x | 0 | — | — | 7m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.91% | 88.66% | 88.66% | 1223 ms | ↑ 1.26x | 1 | 0s | 25d ago | 10m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.95% | 99.59% | 99.59% | 1074 ms | → 0.98x | 0 | — | — | 20m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 98.74% | 95.73% | 95.73% | 2511 ms | ↓ 0.94x | 1 | 4h 31m | 23d ago | 10m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 320 ms | ↓ 0.72x | 0 | — | — | 4m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.91% | 99.74% | 99.74% | 1798 ms | → 0.98x | 1 | 0s | 24d ago | 20m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 38.89% | 32.77% | 32.77% | 3632 ms | ↑ 1.05x | 2 | 8d 20h | 25d ago | 12m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.91% | 88.24% | 88.24% | 958 ms | ↓ 0.69x | 1 | 0s | 16d ago | 19m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.95% | 13.87% | 13.87% | 1632 ms | ↓ 0.87x | 0 | — | — | 11m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.78% | 98.78% | 2464 ms | ↑ 1.31x | 0 | — | — | 10m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.36% | 78.38% | 78.38% | 1862 ms | ↓ 0.85x | 3 | 50m | 16d ago | 21m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1186 ms | ↓ 0.92x | 1 | 0s | 29d ago | 20m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.95% | 99.56% | 99.56% | 955 ms | ↓ 0.74x | 0 | — | — | 20m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 918 ms | ↓ 0.65x | 0 | — | — | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.86% | 99.93% | 99.93% | 794 ms | ↓ 0.65x | 2 | 0s | 13d ago | 7m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.95% | 98.95% | 98.95% | 1586 ms | ↓ 0.83x | 0 | — | — | 19m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 99.95% | 97.82% | 97.82% | 1134 ms | ↓ 0.77x | 0 | — | — | 8m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.95% | 97.43% | 97.43% | 2668 ms | ↑ 1.17x | 0 | — | — | 8m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.54% | 11.87% | 11.87% | 1197 ms | → 0.98x | 4 | 12m | 17d ago | 20m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.95% | 65.67% | 65.67% | 977 ms | ↓ 0.89x | 0 | — | — | 11m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.86% | 77.78% | 77.78% | 1733 ms | ↓ 0.80x | 2 | 0s | 24d ago | 11m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.95% | 99.78% | 99.78% | 1238 ms | ↓ 0.80x | 0 | — | — | 19m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.95% | 99.68% | 99.68% | 1948 ms | → 0.97x | 0 | — | — | 20m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2671 ms | ↓ 0.95x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 975 ms | ↓ 0.85x | 0 | — | — | 12m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.31% | 84.10% | 84.10% | 1124 ms | → 0.97x | 14 | 0s | 15d ago | 20m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.60% | 39.56% | 39.56% | 626 ms | ↓ 0.70x | 4 | 7h 27m | 11d ago | 9m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.49% | 84.16% | 84.16% | 346 ms | ↓ 0.38x | 7 | 4m | 22d ago | 19m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.95% | 99.19% | 99.19% | 1948 ms | → 1.01x | 0 | — | — | 11m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 95.83% | 98.79% | 98.79% | 2494 ms | ↓ 0.84x | 69 | 6m | 7d ago | 21m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.95% | 63.43% | 63.43% | 345 ms | ↓ 0.26x | 0 | — | — | 11m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.95% | 96.28% | 96.28% | 1115 ms | → 1.04x | 0 | — | — | 11m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.72% | 13.74% | 13.74% | 993 ms | ↓ 0.87x | 5 | 0s | 13d ago | 17m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 98.06% | 55.93% | 55.93% | 3609 ms | → 0.98x | 13 | 45m | 8d ago | 18m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.91% | 99.74% | 99.74% | 2080 ms | ↓ 0.85x | 1 | 0s | 17d ago | 20m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 100.00% | 100.00% | 100.00% | 1161 ms | ↓ 0.87x | 0 | — | — | 5m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 98.06% | 99.17% | 99.17% | 3561 ms | ↑ 1.31x | 12 | 50m | 8d ago | 18m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.95% | 53.54% | 53.54% | 533 ms | ↓ 0.59x | 0 | — | — | 11m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.95% | 98.26% | 98.26% | 1380 ms | → 1.02x | 0 | — | — | 10m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.77% | 97.94% | 97.94% | 1832 ms | ↓ 0.80x | 4 | 0s | 12d ago | 9m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.91% | 30.98% | 30.98% | 2092 ms | ↓ 0.85x | 1 | 0s | 18d ago | 11m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.95% | 99.73% | 99.73% | 2556 ms | ↓ 0.93x | 0 | — | — | 20m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.95% | 99.88% | 99.88% | 1881 ms | → 1.01x | 0 | — | — | 10m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.95% | 48.29% | 48.29% | 3781 ms | → 1.03x | 0 | — | — | 9m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.86% | 99.12% | 99.12% | 2131 ms | → 1.04x | 2 | 0s | 17d ago | 11m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.19% | 98.19% | 98.19% | 1510 ms | ↑ 1.27x | 1 | 11h 52m | 19d ago | 5m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.67% | 76.59% | 76.59% | 1394 ms | ↑ 1.28x | 1 | 1h 39m | 19d ago | 11m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 188 ms | → 1.02x | 0 | — | — | 20m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.86% | 99.90% | 99.90% | 1482 ms | ↓ 0.78x | 2 | 0s | 16d ago | 19m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 803 ms | → 1.02x | 0 | — | — | 4m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.95% | 99.95% | 99.95% | 1844 ms | ↓ 0.90x | 0 | — | — | 16m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.50% | 99.50% | 2621 ms | → 0.97x | 0 | — | — | 20m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.95% | 84.31% | 84.31% | 2053 ms | ↑ 1.27x | 0 | — | — | 11m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 841 ms | → 0.96x | 1 | 0s | 9d ago | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.95% | 95.74% | 95.74% | 950 ms | ↓ 0.93x | 0 | — | — | 11m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.95% | 99.97% | 99.97% | 935 ms | ↓ 0.91x | 0 | — | — | 19m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.91% | 98.22% | 98.22% | 453 ms | ↓ 0.53x | 1 | 0s | 10d ago | 9m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 99.67% | 14.13% | 14.13% | 644 ms | ↓ 0.47x | 1 | 50m | 30d ago | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.77% | 96.09% | 96.09% | 1702 ms | → 1.02x | 3 | 6m | 7d ago | 7m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1428 ms | → 0.99x | 0 | — | — | 4m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.95% | 99.93% | 99.93% | 745 ms | ↓ 0.94x | 0 | — | — | 9m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.95% | 56.83% | 56.83% | 1912 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.91% | 99.78% | 99.78% | 2231 ms | ↓ 0.90x | 1 | 0s | 24d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.95% | 62.79% | 62.79% | 797 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 99.68% | 11.86% | 11.86% | 846 ms | ↓ 0.89x | 1 | 50m | 30d ago | 19m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 925 ms | → 0.99x | 0 | — | — | 5m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.15% | 99.15% | 99.15% | 1120 ms | ↓ 0.72x | 1 | 3h 45m | 24d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.82% | 99.91% | 99.91% | 1710 ms | ↓ 0.70x | 1 | 0s | 16d ago | 5m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1169 ms | ↓ 0.87x | 0 | — | — | 5m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 99.77% | 92.86% | 92.86% | 3524 ms | ↓ 0.91x | 3 | 3m | 30d ago | 20m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.95% | 99.98% | 99.98% | 2066 ms | → 1.02x | 0 | — | — | 11m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.58% | 98.62% | 98.62% | 2026 ms | → 0.97x | 8 | 0s | 16d ago | 8m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.68% | 98.68% | 98.68% | 1015 ms | ↓ 0.72x | 10 | 8m | 15d ago | 5m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.91% | 99.03% | 99.03% | 975 ms | ↑ 1.14x | 1 | 0s | 25d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 85.25% | 86.02% | 86.02% | 1912 ms | ↑ 1.22x | 11 | 9h 31m | 12d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.81% | 99.81% | 99.81% | 1868 ms | ↓ 0.91x | 1 | 20m | 14d ago | 4m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 90.45% | 28.72% | 28.72% | 1531 ms | ↓ 0.73x | 2 | 1d 9h | 27d ago | 20m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.55% | 99.55% | 1320 ms | ↓ 0.86x | 0 | — | — | 21m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.95% | 99.41% | 99.41% | 968 ms | ↓ 0.69x | 0 | — | — | 19m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 100.00% | 25.49% | 3.03% | 3.03% | 1767 ms | → 0.98x | 2 | 10d 21h | 8d ago | 19m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.95% | 99.99% | 99.99% | 430 ms | ↓ 0.67x | 0 | — | — | 22m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.39% | 58.56% | 58.56% | 2744 ms | → 0.97x | 27 | 3m | 13d ago | 20m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.59% | 91.46% | 91.46% | 1121 ms | ↓ 0.73x | 1 | 2h 20m | 19d ago | 19m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 99.95% | 98.05% | 98.05% | 2022 ms | ↓ 0.82x | 0 | — | — | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 98.90% | 96.43% | 96.43% | 2460 ms | ↓ 0.92x | 15 | 10m | 19d ago | 20m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1389 ms | → 1.00x | 0 | — | — | 3m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.95% | 99.75% | 99.75% | 578 ms | ↓ 0.47x | 0 | — | — | 7m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.95% | 86.07% | 86.07% | 1397 ms | → 0.97x | 0 | — | — | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.91% | 99.73% | 99.73% | 895 ms | ↓ 0.75x | 1 | 0s | 16d ago | 7m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.95% | 99.79% | 99.79% | 1360 ms | → 1.00x | 0 | — | — | 20m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 99.95% | 99.45% | 99.45% | 911 ms | → 0.97x | 0 | — | — | 21m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 354 ms | ↓ 0.51x | 0 | — | — | 4m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.95% | 99.72% | 99.72% | 842 ms | ↓ 0.90x | 0 | — | — | 21m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.72% | 67.88% | 67.88% | 1125 ms | ↑ 1.19x | 5 | 0s | 16d ago | 9m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.91% | 99.87% | 99.87% | 2631 ms | ↑ 1.16x | 1 | 0s | 23d ago | 17m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.95% | 99.81% | 99.81% | 718 ms | → 1.01x | 0 | — | — | 18m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.86% | 83.18% | 83.18% | 1848 ms | ↓ 0.93x | 2 | 0s | 15d ago | 16m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.95% | 98.69% | 98.69% | 1698 ms | ↓ 0.89x | 0 | — | — | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.91% | 97.29% | 97.29% | 1363 ms | → 0.99x | 1 | 0s | 24d ago | 8m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.95% | 91.52% | 91.52% | 3597 ms | ↓ 0.93x | 0 | — | — | 22m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.90% | 99.90% | 99.90% | 738 ms | ↓ 0.80x | 1 | 0s | 14d ago | 4m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 274 ms | ↓ 0.54x | 0 | — | — | 4m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.16% | 95.61% | 95.61% | 709 ms | ↓ 0.37x | 3 | 1h 21m | 19d ago | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.95% | 98.65% | 98.65% | 447 ms | ↓ 0.92x | 0 | — | — | 11m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.22% | 98.61% | 98.61% | 3000 ms | ↑ 1.15x | 5 | 48m | 9d ago | 18m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.81% | 97.25% | 97.25% | 2525 ms | ↑ 1.10x | 2 | 9m | 19d ago | 8m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 522 ms | ↓ 0.91x | 0 | — | — | 4m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.78% | 99.78% | 686 ms | ↓ 0.67x | 0 | — | — | 10m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.95% | 97.97% | 97.97% | 1471 ms | ↓ 0.91x | 0 | — | — | 10m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 99.91% | 94.57% | 94.57% | 1544 ms | ↓ 0.51x | 1 | 0s | 15d ago | 8m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.95% | 99.92% | 99.92% | 1271 ms | ↓ 0.76x | 0 | — | — | 18m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.91% | 86.56% | 86.56% | 2442 ms | → 1.03x | 1 | 0s | 24d ago | 11m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 90.10% | 96.27% | 96.27% | 2093 ms | → 0.97x | 3 | 1d 1h | 22d ago | 11m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.91% | 99.86% | 99.86% | 1719 ms | ↓ 0.87x | 1 | 0s | 28d ago | 18m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.54% | 11.85% | 11.85% | 1914 ms | ↓ 0.89x | 4 | 12m | 8d ago | 20m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 677 ms | ↓ 0.63x | 0 | — | — | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.62% | 95.77% | 95.77% | 1249 ms | ↓ 0.78x | 2 | 51m | 11d ago | 8m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.86% | 99.84% | 99.84% | 2031 ms | ↓ 0.87x | 1 | 20m | 26d ago | 18m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.91% | 99.93% | 99.93% | 760 ms | → 0.96x | 1 | 0s | 17d ago | 20m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.91% | 13.93% | 13.93% | 2058 ms | ↓ 0.92x | 1 | 0s | 26d ago | 11m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.44% | 11.70% | 11.70% | 1560 ms | ↓ 0.95x | 6 | 8m | 16d ago | 11m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.91% | 99.89% | 99.89% | 2656 ms | ↑ 1.20x | 1 | 0s | 23d ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2904 ms | → 0.95x | 0 | — | — | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.95% | 99.79% | 99.79% | 2933 ms | ↑ 1.21x | 0 | — | — | 9m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.22% | 99.89% | 99.89% | 1355 ms | ↓ 0.94x | 3 | 1h 27m | 22d ago | 20m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.95% | 99.73% | 99.73% | 2379 ms | ↑ 1.26x | 0 | — | — | 18m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.95% | 97.99% | 97.99% | 974 ms | ↓ 0.76x | 0 | — | — | 8m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.95% | 99.82% | 99.82% | 2386 ms | ↑ 1.44x | 0 | — | — | 11m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.91% | 99.05% | 99.05% | 1157 ms | ↓ 0.86x | 1 | 0s | 30d ago | 20m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.95% | 99.99% | 99.99% | 327 ms | ↓ 0.55x | 0 | — | — | 19m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.79% | 89.32% | 95.69% | 95.69% | 3128 ms | ↓ 0.89x | 113 | 21m | 3d ago | 21m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.79% | 99.04% | 99.84% | 99.84% | 3154 ms | ↓ 0.83x | 20 | 0s | 14h ago | 21m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.79% | 99.59% | 99.70% | 99.70% | 3108 ms | ↑ 1.27x | 3 | 17m | 5d ago | 21m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.79% | 99.91% | 99.83% | 99.83% | 1736 ms | ↑ 1.19x | 1 | 0s | 2d ago | 21m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.79% | 99.77% | 17.66% | 17.66% | 2100 ms | ↓ 0.93x | 4 | 0s | 4d ago | 22m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.79% | 98.71% | 91.83% | 91.83% | 946 ms | ↓ 0.93x | 5 | 1h 28m | 4d ago | 20m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.79% | 99.91% | 99.94% | 99.94% | 1009 ms | ↓ 0.91x | 1 | 0s | 5d ago | 20m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.79% | 99.86% | 99.89% | 99.89% | 198 ms | ↓ 0.18x | 2 | 0s | 5d ago | 20m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.77% | 99.46% | 99.46% | 1649 ms | ↓ 0.78x | 3 | 7m | 5d ago | 19m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.79% | 99.58% | 23.20% | 23.20% | 741 ms | ↓ 0.90x | 3 | 17m | 21h ago | 18m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.79% | 99.44% | 97.67% | 97.67% | 3180 ms | → 0.99x | 9 | 4m | 7d ago | 16m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.79% | 95.09% | 77.40% | 77.40% | 1932 ms | → 0.98x | 82 | 6m | 5d ago | 16m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.79% | 99.91% | 98.02% | 98.02% | 2100 ms | ↑ 1.19x | 1 | 0s | 1d ago | 17m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.79% | 99.77% | 96.39% | 96.39% | 1405 ms | ↓ 0.85x | 4 | 0s | 1h ago | 17m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 99.79% | 99.63% | 47.69% | 47.69% | 204 ms | ↓ 0.59x | 2 | 25m | 1d ago | 11m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.79% | 99.91% | 72.74% | 72.74% | 763 ms | ↓ 0.78x | 1 | 0s | 5d ago | 11m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.79% | 99.86% | 79.29% | 79.29% | 1432 ms | ↓ 0.78x | 2 | 0s | 4d ago | 11m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 99.79% | 99.91% | 97.85% | 97.85% | 717 ms | ↓ 0.47x | 1 | 0s | 3d ago | 11m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.79% | 99.81% | 56.70% | 56.70% | 1041 ms | ↓ 0.78x | 3 | 0s | 3d ago | 11m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.79% | 99.91% | 14.11% | 14.11% | 2664 ms | ↑ 1.45x | 1 | 0s | 2d ago | 11m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.79% | 95.47% | 63.53% | 63.53% | 714 ms | ↓ 0.77x | 9 | 3h 9m | 2d ago | 11m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.79% | 99.39% | 96.48% | 96.48% | 4072 ms | ↑ 1.13x | 5 | 28m | 18h ago | 11m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.79% | 99.86% | 14.76% | 14.76% | 939 ms | ↓ 0.57x | 2 | 0s | 2d ago | 11m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.78% | 99.86% | 97.18% | 97.18% | 2009 ms | ↓ 0.72x | 2 | 0s | 4d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.78% | 99.72% | 98.94% | 98.94% | 1139 ms | ↓ 0.91x | 4 | 2m | 4d ago | 10m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.78% | 99.77% | 99.83% | 99.83% | 217 ms | ↓ 0.41x | 4 | 0s | 19h ago | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.78% | 99.91% | 88.44% | 88.44% | 2125 ms | ↓ 0.92x | 1 | 0s | 6d ago | 11m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.78% | 99.49% | 30.66% | 30.66% | 195 ms | ↓ 0.86x | 5 | 12m | 2d ago | 9m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.78% | 99.16% | 88.65% | 88.65% | 522 ms | ↓ 0.21x | 14 | 3m | 4d ago | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.78% | 99.91% | 99.80% | 99.80% | 904 ms | ↓ 0.61x | 1 | 0s | 4d ago | 8m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.78% | 99.86% | 95.86% | 95.86% | 1374 ms | ↑ 1.05x | 2 | 0s | 4d ago | 7m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.78% | 99.81% | 99.88% | 99.88% | 801 ms | ↓ 0.87x | 2 | 9m | 7d ago | 8m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.78% | 98.64% | 83.45% | 83.45% | 656 ms | ↓ 0.32x | 6 | 1h 15m | 4d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.78% | 99.72% | 99.83% | 99.83% | 1059 ms | ↓ 0.76x | 3 | 13m | 1d ago | 7m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 99.78% | 98.50% | 99.36% | 99.36% | 3567 ms | ↑ 1.24x | 4 | 2h 15m | 7d ago | 9m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.78% | 99.62% | 99.60% | 99.60% | 1051 ms | ↑ 1.17x | 6 | 3m | 5d ago | 8m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.78% | 99.72% | 97.30% | 97.30% | 3675 ms | ↑ 1.24x | 5 | 0s | 7d ago | 9m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.78% | 99.20% | 97.95% | 97.95% | 2295 ms | → 1.01x | 15 | 1m | 17h ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.78% | 99.67% | 99.71% | 99.71% | 3848 ms | ↑ 1.23x | 6 | 0s | 7d ago | 9m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.78% | 80.17% | 33.72% | 33.72% | 1041 ms | ↓ 0.57x | 20 | 7h 4m | 7d ago | 9m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.78% | 99.91% | 99.91% | 99.91% | 928 ms | ↓ 0.87x | 1 | 0s | 3h ago | 4m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.78% | 99.91% | 99.91% | 99.91% | 1265 ms | ↓ 0.89x | 1 | 0s | 5d ago | 5m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.78% | 99.91% | 99.91% | 99.91% | 2054 ms | ↑ 1.08x | 1 | 0s | 13h ago | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.78% | 97.64% | 97.64% | 97.64% | 3640 ms | ↑ 1.22x | 7 | 1h 55m | 5d ago | 5m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.78% | 99.73% | 99.73% | 99.73% | 1497 ms | → 1.03x | 2 | 10m | 7d ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.78% | 97.83% | 97.83% | 97.83% | 1515 ms | ↓ 0.88x | 12 | 18m | 2h ago | 5m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.78% | 97.83% | 97.83% | 97.83% | 1381 ms | ↓ 0.72x | 12 | 18m | 2h ago | 5m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.78% | 99.82% | 99.82% | 99.82% | 1155 ms | ↓ 0.74x | 2 | 0s | 7d ago | 4m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.78% | 98.97% | 99.07% | 99.07% | 1364 ms | ↓ 0.85x | 8 | 5m | 7d ago | 5m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.78% | 94.15% | 94.15% | 94.15% | 672 ms | → 1.02x | 5 | 4h 10m | 5d ago | 5m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.58% | 99.13% | 99.45% | 99.45% | 2802 ms | ↓ 0.85x | 17 | 1m | 21h ago | 21m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.58% | 99.82% | 99.72% | 99.72% | 2286 ms | ↓ 0.90x | 3 | 0s | 21h ago | 20m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.58% | 99.77% | 99.18% | 99.18% | 1135 ms | ↓ 0.86x | 4 | 0s | 3d ago | 19m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.57% | 99.68% | 99.71% | 99.71% | 3058 ms | → 0.96x | 6 | 0s | 6d ago | 16m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.57% | 99.40% | 98.97% | 98.97% | 1679 ms | ↓ 0.92x | 11 | 2m | 21h ago | 16m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.57% | 99.68% | 99.16% | 99.16% | 3278 ms | → 1.03x | 3 | 22m | 3d ago | 16m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.57% | 99.77% | 99.79% | 99.79% | 1928 ms | ↓ 0.90x | 4 | 0s | 6d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.57% | 99.86% | 76.84% | 76.84% | 2044 ms | ↓ 0.89x | 2 | 0s | 6d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.57% | 70.83% | 91.09% | 91.09% | 1422 ms | → 1.04x | 4 | 2d 1h | 4d ago | 10m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.57% | 99.47% | 99.47% | 99.47% | 1766 ms | ↑ 1.06x | 6 | 0s | 22h ago | 5m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.57% | 99.81% | 99.81% | 99.81% | 3681 ms | ↑ 1.43x | 2 | 0s | 5d ago | 4m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.36% | 70.50% | 86.24% | 86.24% | 1211 ms | ↓ 0.78x | 6 | 1d 8h | 21h ago | 20m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.36% | 97.84% | 98.66% | 98.66% | 2865 ms | ↓ 0.95x | 40 | 4m | 1d ago | 19m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.36% | 99.72% | 99.63% | 99.63% | 953 ms | ↓ 0.89x | 4 | 5m | 17h ago | 19m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.36% | 98.61% | 99.41% | 99.41% | 2964 ms | → 1.02x | 18 | 12m | 3d ago | 16m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.36% | 97.38% | 85.09% | 85.09% | 4547 ms | → 1.01x | 48 | 2m | 2d ago | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.36% | 99.49% | 12.40% | 12.40% | 1077 ms | ↓ 0.86x | 5 | 10m | 3h ago | 11m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.35% | 99.58% | 90.90% | 90.90% | 2622 ms | ↓ 0.87x | 6 | 6m | 5h ago | 10m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.35% | 98.78% | 89.84% | 89.84% | 1801 ms | ↑ 1.21x | 25 | 0s | 2d ago | 10m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.35% | 97.70% | 97.29% | 97.29% | 1466 ms | → 1.01x | 4 | 3h 40m | 1d ago | 8m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.35% | 99.48% | 88.65% | 88.65% | 758 ms | ↓ 0.63x | 5 | 23m | 1d ago | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.35% | 99.53% | 96.45% | 96.45% | 1921 ms | ↓ 0.88x | 9 | 0s | 12h ago | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.15% | 99.40% | 99.71% | 99.71% | 421 ms | → 0.97x | 8 | 10m | 3d ago | 21m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.15% | 99.72% | 99.89% | 99.89% | 707 ms | ↓ 0.73x | 3 | 17m | 3d ago | 19m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 99.14% | 96.95% | 50.50% | 50.50% | 1464 ms | ↓ 0.94x | 25 | 32m | 2d ago | 8m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.14% | 98.30% | 98.30% | 98.30% | 1958 ms | ↓ 0.90x | 12 | 10m | 1d ago | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 99.14% | 99.62% | 99.62% | 99.62% | 1796 ms | → 0.95x | 2 | 19m | 6d ago | 4m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.14% | 99.34% | 99.34% | 99.34% | 1019 ms | ↓ 0.81x | 7 | 0s | 1d ago | 5m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (56)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.94% | 97.16% | 98.09% | 98.09% | 4625 ms | → 0.99x | 53 | 3m | 1d ago | 22m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.94% | 98.94% | 97.69% | 97.69% | 3624 ms | → 0.96x | 22 | 0s | 5d ago | 20m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.92% | 99.30% | 99.11% | 99.11% | 173 ms | ↓ 0.86x | 10 | 14m | 5d ago | 8m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.92% | 99.72% | 95.11% | 95.11% | 412 ms | ↓ 0.37x | 2 | 31m | 4d ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.92% | 98.22% | 89.16% | 89.16% | 3799 ms | ↑ 1.29x | 30 | 5m | 5d ago | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.71% | 99.67% | 97.78% | 97.78% | 2915 ms | ↑ 1.21x | 1 | 1h 41m | 1d ago | 8m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.70% | 97.54% | 97.54% | 97.54% | 2442 ms | ↓ 0.92x | 13 | 22m | 15h ago | 5m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 98.70% | 99.34% | 99.34% | 99.34% | 3414 ms | → 0.95x | 5 | 9m | 6d ago | 4m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.52% | 93.86% | 84.01% | 84.01% | 4518 ms | → 1.03x | 50 | 32m | 17h ago | 22m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.50% | 97.29% | 61.60% | 61.60% | 4664 ms | → 0.99x | 51 | 3m | 16h ago | 11m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.49% | 95.50% | 81.78% | 81.78% | 4785 ms | ↑ 1.12x | 56 | 16m | 2d ago | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.31% | 98.85% | 99.22% | 99.22% | 816 ms | ↓ 0.71x | 18 | 7m | 3d ago | 21m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 98.30% | 97.78% | 41.46% | 41.46% | 1004 ms | ↓ 0.90x | 13 | 55m | 5d ago | 18m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.27% | 89.29% | 89.29% | 89.29% | 1234 ms | ↓ 0.81x | 5 | 7h 21m | 3d ago | 4m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.09% | 96.95% | 11.50% | 11.50% | 1857 ms | → 1.02x | 55 | 3m | 2d ago | 18m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.08% | 95.55% | 11.40% | 11.40% | 3889 ms | ↑ 1.07x | 63 | 10m | 3d ago | 16m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.07% | 99.44% | 78.95% | 78.95% | 1731 ms | ↓ 0.94x | 4 | 38m | 20h ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.06% | 98.58% | 98.58% | 98.58% | 1189 ms | ↓ 0.93x | 13 | 3m | 3h ago | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 98.06% | 99.20% | 99.20% | 99.20% | 2096 ms | → 0.98x | 1 | 2h 39m | 15h ago | 4m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.86% | 94.85% | 98.67% | 98.67% | 3812 ms | → 1.03x | 65 | 14m | 16h ago | 16m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.85% | 99.34% | 98.35% | 98.35% | 615 ms | ↓ 0.41x | 6 | 23m | 17h ago | 9m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.66% | 99.08% | 24.76% | 24.76% | 1786 ms | ↑ 1.24x | 5 | 46m | 4d ago | 18m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 97.62% | 98.90% | 98.90% | 98.90% | 4683 ms | → 1.03x | 15 | 1m | 2h ago | 4m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.62% | 99.03% | 99.03% | 99.03% | 764 ms | ↓ 0.70x | 2 | 1h 30m | 17h ago | 4m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.45% | 96.45% | 84.54% | 84.54% | 4462 ms | ↑ 1.05x | 70 | 2m | 2d ago | 18m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.41% | 98.87% | 98.87% | 98.87% | 1240 ms | ↓ 0.92x | 1 | 3h 38m | 7d ago | 5m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.01% | 95.65% | 72.29% | 72.29% | 4375 ms | → 0.97x | 81 | 3m | 3h ago | 17m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 96.98% | 99.30% | 96.65% | 96.65% | 1709 ms | ↓ 0.92x | 1 | 4h 31m | 5d ago | 8m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 96.82% | 95.33% | 79.95% | 79.95% | 2982 ms | ↓ 0.95x | 77 | 5m | 23h ago | 22m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.77% | 96.77% | 83.03% | 83.03% | 4631 ms | → 0.96x | 63 | 1m | 2d ago | 9m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 96.18% | 91.91% | 10.94% | 10.94% | 838 ms | ↓ 0.84x | 87 | 21m | 16h ago | 20m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.12% | 93.34% | 79.69% | 79.69% | 4594 ms | → 1.02x | 121 | 4m | 1d ago | 9m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 96.11% | 96.29% | 96.29% | 96.29% | 1324 ms | ↓ 0.84x | 36 | 3m | 2h ago | 4m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.48% | 94.43% | 79.52% | 79.52% | 4839 ms | → 1.02x | 97 | 5m | 30m ago | 10m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 95.03% | 98.19% | 98.19% | 98.19% | 1018 ms | ↓ 0.57x | 3 | 3h 43m | 22h ago | 5m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.89% | 98.85% | 98.89% | 98.89% | 822 ms | ↓ 0.65x | 1 | 7h 40m | 15h ago | 19m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.64% | 95.13% | 69.07% | 69.07% | 1198 ms | ↓ 0.80x | 19 | 1h 28m | 6h ago | 11m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 94.38% | 65.72% | 65.72% | 65.72% | 1095 ms | → 0.96x | 1 | 5d 5h | 12d ago | 5m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.18% | 98.69% | 95.30% | 95.30% | 1335 ms | → 1.04x | 1 | 8h 38m | 7d ago | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 93.99% | 95.85% | 97.26% | 97.26% | 2014 ms | ↑ 1.53x | 7 | 4h 1m | 2d ago | 11m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 93.13% | 98.13% | 98.51% | 98.51% | 1301 ms | ↑ 1.25x | 8 | 1h 20m | 3d ago | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.52% | 88.65% | 44.02% | 44.02% | 3940 ms | ↑ 1.08x | 197 | 4m | 1h ago | 8m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.34% | 88.09% | 12.60% | 12.60% | 4675 ms | ↑ 1.08x | 197 | 6m | 2h ago | 11m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 89.66% | 83.59% | 91.36% | 91.36% | 2942 ms | ↑ 1.08x | 11 | 10h 44m | 6d ago | 9m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 89.32% | 94.60% | 42.84% | 42.84% | 1794 ms | → 1.02x | 8 | 2h 1m | 1d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 88.51% | 97.46% | 99.62% | 99.62% | 2800 ms | ↑ 1.26x | 6 | 2h 50m | 21h ago | 18m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 88.15% | 97.09% | 90.96% | 90.96% | 2387 ms | ↓ 0.75x | 6 | 3h 5m | 7d ago | 8m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 88.03% | 86.32% | 10.21% | 10.21% | 2806 ms | ↓ 0.71x | 229 | 6m | 17h ago | 17m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 83.62% | 96.11% | 95.81% | 95.81% | 1851 ms | ↓ 0.43x | 4 | 6h 47m | 5d ago | 8m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 81.78% | 93.58% | 98.91% | 98.91% | 598 ms | ↓ 0.83x | 14 | 3h 8m | 22h ago | 20m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.41% | 95.05% | 65.82% | 65.82% | 4349 ms | ↑ 1.13x | 37 | 38m | 21h ago | 17m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 65.09% | 60.07% | 75.20% | 75.20% | 605 ms | ↓ 0.29x | 3 | 4d 1h | 8d ago | 8m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 53.45% | 84.05% | 88.54% | 88.54% | 26 ms | ↓ 0.16x | 4 | 1d 5h | 9d ago | 7m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 44.85% | 79.53% | 28.83% | 28.83% | 1594 ms | ↓ 0.85x | 12 | 12h 8m | 7d ago | 11m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 34.18% | 7.40% | 6.25% | 6.25% | 3381 ms | → 1.00x | 16 | 1d 17h | 5h ago | 20m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 5.81% | 2.11% | 27.26% | 27.26% | 2933 ms | ↓ 0.82x | 8 | 3d 16h | 48m ago | 9m ago |

</details>

<details open>
<summary><strong>🔴 Down (210)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 94.82% | 98.80% | 98.80% | 98.80% | 3212 ms | ↑ 1.14x | 1 | 7h 53m | 8h ago | 4m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 88.51% | 95.62% | 96.74% | 96.74% | 3510 ms | → 0.98x | 13 | 2h 7m | 18h ago | 18m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 84.48% | 34.62% | 28.54% | 28.54% | 977 ms | ↓ 0.92x | 3 | 6d 8h | 14h ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 75.85% | 93.48% | 50.92% | 50.92% | 2856 ms | → 1.04x | 24 | 1h 36m | 2d ago | 17m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 70.82% | 93.60% | 88.43% | 88.43% | 1157 ms | ↓ 0.71x | 2 | 23h 13m | 2d ago | 11m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 70.54% | 92.42% | 38.87% | 38.87% | 2380 ms | → 1.04x | 22 | 2h 22m | 2d ago | 9m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 65.38% | 69.34% | 15.39% | 15.39% | 4554 ms | ↑ 1.05x | 379 | 16m | 49m ago | 11m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 65.09% | 90.67% | 92.24% | 92.24% | 1124 ms | ↓ 0.75x | 2 | 1d 12h | 2d ago | 7m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 62.85% | 83.68% | 83.68% | 83.68% | 1578 ms | ↓ 0.87x | 6 | 10h 18m | 3d ago | 4m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 60.43% | 91.34% | 27.84% | 27.84% | 309 ms | ↓ 0.27x | 1 | 2d 21h | 3d ago | 10m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 58.32% | 81.78% | 81.78% | 81.78% | 3032 ms | ↓ 0.95x | 1 | 3d 1h | 3d ago | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 58.12% | 66.34% | 61.79% | 61.79% | 4873 ms | ↑ 1.06x | 399 | 17m | 1h ago | 17m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 57.42% | 90.22% | 95.72% | 95.72% | 2506 ms | ↑ 1.18x | 7 | 10h 37m | 3d ago | 9m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 57.20% | 90.17% | 95.76% | 95.76% | 559 ms | ↓ 0.52x | 7 | 10h 40m | 3d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 48.38% | 86.86% | 86.86% | 86.86% | 2462 ms | ↓ 0.94x | 14 | 6h 34m | 4d ago | 5m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 47.95% | 77.24% | 77.24% | 77.24% | 1967 ms | → 0.98x | 2 | 1d 20h | 4d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 45.06% | 87.69% | 21.99% | 21.99% | 1642 ms | ↓ 0.94x | 6 | 15h 47m | 4d ago | 11m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 36.48% | 49.46% | 11.28% | 11.28% | 3894 ms | ↑ 1.11x | 453 | 29m | 2d ago | 11m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 32.61% | 70.16% | 70.16% | 70.16% | 860 ms | ↓ 0.80x | 5 | 22h 52m | 5d ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 31.99% | 84.50% | 97.91% | 97.91% | 3058 ms | ↓ 0.91x | 16 | 7h 16m | 5d ago | 21m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 26.35% | 82.85% | 82.85% | 82.85% | 963 ms | ↓ 0.91x | 2 | 2d 14h | 5d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 17.87% | 82.19% | 95.93% | 95.93% | 1188 ms | ↓ 0.93x | 1 | 5d 19h | 6d ago | 19m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.88% | 9.90% | 9.90% | 9.90% | 3145 ms | ↓ 0.88x | 101 | 3h 12m | 5h ago | 3m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 2.38% | 57.32% | 57.32% | 57.32% | 1868 ms | ↑ 1.12x | 1 | 6d 19h | 7d ago | 5m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.27% | 8.02% | 64.09% | 64.09% | 3900 ms | ↑ 1.41x | 48 | 13h 53m | 20h ago | 22m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.28% | 87.40% | 87.40% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 72.37% | 72.37% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.28% | 77.82% | 77.82% | — | — | 1 | 29d 22h | 30d ago | 12m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 28.49% | 74.46% | 74.46% | — | — | 1 | 21d 24h | 22d ago | 9m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.00% | 6.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.27% | 13.22% | 13.22% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 57.18% | 76.31% | 76.31% | — | — | 4 | 3d 8h | 11d ago | 8m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.58% | 3.58% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 74.92% | 87.45% | 87.45% | — | — | 4 | 1d 24h | 8d ago | 8m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.28% | 87.67% | 87.67% | — | — | 1 | 29d 22h | 30d ago | 17m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 38.48% | 38.48% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 55.68% | 72.01% | 72.01% | — | — | 3 | 4d 14h | 14d ago | 8m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 26.22% | 26.22% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.23% | 78.67% | 78.67% | — | — | 2 | 14d 23h | 30d ago | 21m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.23% | 60.08% | 60.08% | — | — | 2 | 14d 23h | 30d ago | 10m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.28% | 32.42% | 32.42% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.28% | 88.08% | 88.08% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 66.35% | 66.35% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.28% | 81.36% | 81.36% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 17.17% | 17.17% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.47% | 55.02% | 55.02% | — | — | 1 | 29d 21h | 30d ago | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 38.51% | 38.51% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.28% | 3.79% | 3.79% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.28% | 88.26% | 88.26% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.28% | 0.13% | 0.13% | — | — | 1 | 29d 22h | 30d ago | 16m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.28% | 54.82% | 54.82% | — | — | 1 | 29d 22h | 30d ago | 18m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.56% | 30.56% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.28% | 2.17% | 2.17% | — | — | 1 | 29d 22h | 30d ago | 17m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 70.83% | 90.06% | 90.06% | — | — | 6 | 1d 13h | 9d ago | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 54.91% | 54.91% | 54.91% | — | — | 1 | 7d 16h | 8d ago | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 75.15% | 72.37% | 72.37% | — | — | 5 | 1d 14h | 8d ago | 11m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 12.71% | 39.06% | 39.06% | — | — | 2 | 12d 23h | 26d ago | 9m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 57.69% | 57.69% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.28% | 26.71% | 26.71% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.28% | 31.63% | 31.63% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.28% | 0.13% | 0.13% | — | — | 1 | 29d 22h | 30d ago | 17m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 60.45% | 60.45% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.29% | 6.29% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 69.55% | 69.55% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.28% | 88.03% | 88.03% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.54% | 8.54% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.23% | 84.02% | 84.02% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 26.69% | 86.73% | 86.73% | — | — | 4 | 5d 11h | 8d ago | 21m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 12h | 15d ago | 4m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 32.89% | 32.89% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.92% | 55.92% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 71.11% | 62.04% | 62.04% | — | — | 4 | 2d 7h | 9d ago | 10m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 21.39% | 18.91% | 18.91% | — | — | 2 | 6d 4h | 12d ago | 6m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 75.06% | 83.55% | 83.55% | — | — | 2 | 3d 23h | 8d ago | 8m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.14% | 81.01% | 81.01% | — | — | 4 | 7d 12h | 30d ago | 22m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 49.39% | 49.39% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.89% | 44.89% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.27% | 88.04% | 88.04% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 62.17% | 62.17% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.28% | 41.30% | 41.30% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 11h | 15d ago | 12m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.05% | 34.14% | 34.14% | — | — | 2 | 14d 24h | 30d ago | 11m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.28% | 2.74% | 2.74% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 74.86% | 88.27% | 88.27% | — | — | 4 | 2d | 8d ago | 19m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 44.13% | 44.13% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.28% | 87.99% | 87.99% | — | — | 1 | 29d 22h | 30d ago | 16m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.28% | 35.29% | 35.29% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.28% | 87.92% | 87.92% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 59.78% | 74.80% | 74.80% | — | — | 2 | 6d 7h | 13d ago | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.28% | 33.06% | 33.06% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 49.41% | 49.41% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.28% | 85.44% | 85.44% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 28.18% | 75.18% | 75.18% | — | — | 2 | 10d 19h | 21d ago | 10m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 55.28% | 40.45% | 40.45% | — | — | 11 | 1d 6h | 12d ago | 8m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 83.82% | 83.82% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.28% | 62.47% | 62.47% | — | — | 1 | 29d 22h | 30d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.56% | 3.56% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.86% | 45.86% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.28% | 82.14% | 82.14% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.05% | 62.66% | 62.66% | — | — | 2 | 14d 24h | 30d ago | 17m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 72.76% | 71.33% | 71.33% | — | — | 42 | 4h 36m | 8d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 58.42% | 78.85% | 78.85% | — | — | 58 | 5h 3m | 12d ago | 8m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 65.48% | 94.40% | 94.40% | — | — | 1 | 10d 23h | 11d ago | 18m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 30.06% | 30.06% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.28% | 14.10% | 14.10% | — | — | 1 | 29d 22h | 30d ago | 7m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.05% | 14.50% | 14.50% | — | — | 2 | 14d 24h | 30d ago | 10m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 29.67% | 36.90% | 36.90% | — | — | 5 | 4d 4h | 18d ago | 7m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.60% | 25.60% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 11h | 16d ago | 5m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.28% | 66.98% | 66.98% | — | — | 1 | 29d 22h | 30d ago | 9m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 15.27% | 16.51% | 16.51% | — | — | 1 | 25d 3h | 25d ago | 6m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.55% | 18.55% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 52.58% | 52.58% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 11h | 15d ago | 4m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 58.59% | 58.59% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 58.60% | 28.03% | 28.03% | — | — | 21 | 14h 30m | 13d ago | 9m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.28% | 47.10% | 47.10% | — | — | 1 | 29d 22h | 30d ago | 8m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 12.56% | 61.67% | 61.67% | — | — | 2 | 12d 24h | 26d ago | 8m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.28% | 5.89% | 5.89% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.28% | 88.13% | 88.13% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.28% | 86.98% | 86.98% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.09% | 67.84% | 67.84% | — | — | 2 | 14d 24h | 30d ago | 22m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 79.66% | 79.66% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.28% | 86.83% | 86.83% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.87% | 20.87% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 7.49% | 6.31% | 6.31% | — | — | 3 | 9d 6h | 28d ago | 20m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 29.71% | 4.31% | 4.31% | — | — | 6 | 3d 15h | 19d ago | 17m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.28% | 36.39% | 36.39% | — | — | 1 | 29d 22h | 30d ago | 11m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 72.51% | 72.51% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.52% | 8.52% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.05% | 69.77% | 69.77% | — | — | 2 | 14d 24h | 30d ago | 21m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 11h | 15d ago | 12m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 71.82% | 71.82% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 63.74% | 65.90% | 65.90% | — | — | 13 | 20h 45m | 11d ago | 5m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.56% | 11.89% | 11.89% | — | — | 1 | 15d 11h | 15d ago | 5m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.28% | 48.06% | 48.06% | — | — | 1 | 29d 22h | 30d ago | 8m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 4.92% | 35.31% | 35.31% | — | — | 1 | 28d 21h | 29d ago | 7m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.94% | 14.94% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 19.08% | 19.08% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 29.16% | 23.51% | 23.51% | — | — | 1 | 21d 19h | 22d ago | 8m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 58.22% | 58.22% | 58.22% | — | — | 1 | 12d 7h | 12d ago | 5m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 21.13% | 21.13% | 21.13% | — | — | 8 | 1d 15h | 13d ago | 4m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.28% | 1.48% | 1.48% | — | — | 1 | 29d 23h | 30d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.28% | 8.14% | 8.14% | — | — | 1 | 29d 23h | 30d ago | 6m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 8.97% | 9.77% | 9.77% | — | — | 1 | 27d 1h | 27d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 53.04% | 53.04% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.28% | 88.10% | 88.10% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 58.41% | 58.41% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 9.74% | 88.28% | 88.28% | — | — | 3 | 8d 24h | 27d ago | 16m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 68.69% | 78.94% | 78.94% | — | — | 2 | 4d 22h | 10d ago | 6m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.98% | 43.98% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 4.42% | 4.42% | 4.42% | — | — | 1 | 15d 18h | 16d ago | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.19% | 85.85% | 85.85% | — | — | 2 | 14d 23h | 30d ago | 11m ago |

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
