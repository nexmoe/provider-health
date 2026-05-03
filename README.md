# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**551 providers** — 328 🟢 operational · 51 🟡 degraded · 172 🔴 down · 0 ⚫ unknown

_Updated 2026-05-03 06:08 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (328)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.84% | 91.64% | 91.64% | 1651 ms | ↓ 0.81x | 4 | 0s | 15d ago | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.03% | 97.03% | 3538 ms | ↑ 1.42x | 2 | 0s | 15d ago | 16m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 31.97% | 34.95% | 34.95% | 2154 ms | ↓ 0.72x | 2 | 8d 1h | 7d ago | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.69% | 98.32% | 98.32% | 2287 ms | ↑ 1.23x | 9 | 0s | 15d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.94% | 98.71% | 98.71% | 887 ms | ↑ 1.45x | 1 | 0s | 15d ago | 5m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 90.35% | 90.39% | 90.39% | 2366 ms | ↑ 1.19x | 16 | 2h 28m | 14d ago | 3m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1860 ms | ↓ 0.88x | 0 | — | — | 2m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.75% | 95.78% | 95.78% | 2252 ms | ↑ 1.35x | 1 | 18h 20m | 26d ago | 3m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2388 ms | → 1.00x | 0 | — | — | 2m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 91.17% | 91.17% | 2142 ms | ↑ 1.56x | 1 | 0s | 30d ago | 18m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 100.00% | 100.00% | 100.00% | 1242 ms | → 1.00x | 0 | — | — | 2m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.72% | 99.76% | 99.76% | 1665 ms | ↑ 1.37x | 7 | 0s | 16d ago | 3m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 93.33% | 93.39% | 93.39% | 1855 ms | ↑ 1.25x | 8 | 4h 1m | 11d ago | 3m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1938 ms | → 1.00x | 0 | — | — | 2m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 95.31% | 95.31% | 95.31% | 2701 ms | ↑ 1.06x | 1 | 13h 57m | 10d ago | 2m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 95.74% | 95.74% | 2425 ms | ↑ 1.43x | 8 | 0s | 15d ago | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.71% | 98.71% | 1490 ms | ↑ 1.15x | 2 | 0s | 16d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 93.64% | 93.67% | 93.67% | 2081 ms | → 0.98x | 76 | 15m | 16d ago | 3m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 3396 ms | → 1.00x | 0 | — | — | 2m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 97.85% | 94.98% | 94.98% | 803 ms | ↓ 0.77x | 14 | 39m | 15d ago | 4m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 81.08% | 79.06% | 79.06% | 3909 ms | ↓ 0.92x | 371 | 7m | 9d ago | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2395 ms | → 1.00x | 0 | — | — | 2m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 94.18% | 94.26% | 94.26% | 1539 ms | ↑ 1.61x | 1 | 12h 47m | 16d ago | 3m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1758 ms | → 1.00x | 0 | — | — | 2m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2388 ms | → 1.00x | 0 | — | — | 2m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 561 ms | ↓ 0.69x | 0 | — | — | 14m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.54% | 99.71% | 99.71% | 3334 ms | ↑ 1.38x | 11 | 3m | 14d ago | 14m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 97.95% | 98.49% | 98.49% | 2303 ms | ↑ 1.48x | 40 | 6m | 10d ago | 4m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.51% | 99.16% | 99.16% | 4164 ms | ↑ 2.03x | 61 | 3m | 14d ago | 15m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.69% | 99.79% | 99.79% | 2352 ms | ↑ 1.85x | 7 | 6m | 11d ago | 4m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 94.90% | 94.13% | 94.13% | 2335 ms | → 1.03x | 107 | 5m | 15d ago | 4m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 91.93% | 97.89% | 97.89% | 2534 ms | ↑ 2.43x | 77 | 25m | 16d ago | 14m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 3055 ms | ↑ 1.10x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 3050 ms | ↑ 1.91x | 0 | — | — | 3m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 41.02% | 88.48% | 88.48% | 1667 ms | ↑ 1.15x | 2 | 6d 24h | 15d ago | 6m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.75% | 99.45% | 99.45% | 2206 ms | ↑ 1.42x | 7 | 0s | 17d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.85% | 99.84% | 99.84% | 4190 ms | ↑ 1.84x | 4 | 0s | 15d ago | 12m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.91% | 99.95% | 99.95% | 3368 ms | ↑ 2.27x | 2 | 0s | 15d ago | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.67% | 96.67% | 96.67% | 3007 ms | ↑ 1.37x | 64 | 2m | 13d ago | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 92.84% | 92.89% | 92.89% | 1998 ms | ↑ 1.26x | 3 | 11h 20m | 16d ago | 3m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 443 ms | → 1.00x | 0 | — | — | 2m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.47% | 97.23% | 97.23% | 2599 ms | ↑ 1.18x | 16 | 0s | 14d ago | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1524 ms | ↑ 1.11x | 0 | — | — | 2m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 100.00% | 100.00% | 100.00% | 445 ms | → 1.00x | 0 | — | — | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 97.99% | 46.72% | 46.72% | 871 ms | ↑ 1.17x | 48 | 5m | 12d ago | 6m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 99.94% | 97.07% | 97.07% | 3896 ms | ↑ 1.83x | 1 | 0s | 17d ago | 15m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 88.10% | 43.56% | 43.56% | 1345 ms | ↑ 1.87x | 3 | 21h 46m | 17d ago | 6m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2002 ms | → 1.00x | 0 | — | — | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.66% | 99.57% | 99.57% | 3453 ms | ↑ 1.11x | 10 | 0s | 15d ago | 13m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.51% | 96.68% | 96.68% | 2333 ms | ↓ 0.63x | 14 | 43s | 9d ago | 13m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 66.00% | 66.00% | 66.00% | 1393 ms | → 1.00x | 1 | 2h 40m | 14d ago | 3m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.41% | 78.20% | 78.20% | 2480 ms | ↑ 1.69x | 17 | 35s | 8d ago | 5m ago |
| [Lyux API](https://lmspeed.net/provider/api-lyux-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1177 ms | → 1.00x | 0 | — | — | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.66% | 58.42% | 58.42% | 1225 ms | ↓ 0.92x | 9 | 1m | 11d ago | 5m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2284 ms | → 1.00x | 0 | — | — | 2m ago |
| [别来了给蹬爆炸了.com](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.07% | 74.64% | 74.64% | 2819 ms | ↑ 1.21x | 15 | 18m | 8d ago | 5m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1921 ms | → 1.00x | 0 | — | — | 2m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 97.74% | 97.74% | 3091 ms | ↑ 1.49x | 3 | 0s | 15d ago | 4m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4704 ms | → 1.00x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.75% | 91.48% | 91.48% | 1592 ms | ↑ 1.53x | 7 | 0s | 15d ago | 6m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.33% | 97.36% | 97.36% | 1551 ms | ↑ 1.28x | 3 | 4h 10m | 16d ago | 3m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1373 ms | → 1.00x | 0 | — | — | 2m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.19% | 96.69% | 96.69% | 3110 ms | ↑ 1.47x | 47 | 2m | 15d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.43% | 96.47% | 96.47% | 1804 ms | ↑ 1.36x | 3 | 5h 3m | 18d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.26% | 38.16% | 38.16% | 929 ms | ↑ 1.09x | 45 | 2m | 17d ago | 6m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.91% | 69.67% | 69.67% | 2112 ms | ↑ 1.44x | 2 | 0s | 15d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.33% | 97.33% | 2981 ms | ↑ 2.14x | 2 | 0s | 15d ago | 4m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.75% | 44.57% | 44.57% | 2147 ms | ↑ 1.37x | 6 | 3m | 11d ago | 6m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 35.93% | 35.93% | 1424 ms | ↓ 0.63x | 1 | 0s | 17d ago | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2582 ms | → 1.00x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.75% | 76.77% | 76.77% | 2396 ms | ↑ 1.69x | 7 | 0s | 10d ago | 5m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.51% | 97.71% | 97.71% | 2217 ms | ↑ 1.71x | 22 | 11m | 15d ago | 6m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 2000 ms | → 1.00x | 0 | — | — | 2m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.69% | 55.74% | 55.74% | 2388 ms | ↑ 1.80x | 7 | 3m | 12d ago | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.60% | 99.02% | 99.02% | 1945 ms | ↑ 1.17x | 12 | 0s | 14d ago | 5m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.50% | 86.88% | 86.88% | 3411 ms | ↑ 1.37x | 4 | 28m | 15d ago | 5m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.75% | 99.76% | 99.76% | 3331 ms | ↑ 1.92x | 7 | 0s | 9d ago | 4m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.81% | 99.49% | 99.49% | 2056 ms | ↑ 1.50x | 5 | 0s | 15d ago | 5m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.04% | 97.61% | 97.61% | 2487 ms | ↑ 1.32x | 3 | 3h 47m | 15d ago | 5m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 32.79% | 6.21% | 6.21% | 2071 ms | → 1.02x | 4 | 3d 23h | 10d ago | 13m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 44.47% | 19.53% | 19.53% | 1464 ms | → 1.02x | 2 | 6d 13h | 15d ago | 5m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.94% | 99.71% | 99.71% | 3099 ms | ↑ 1.68x | 1 | 0s | 8d ago | 16m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.54% | 98.92% | 98.92% | 3090 ms | ↑ 1.20x | 13 | 47s | 8d ago | 16m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.52% | 97.86% | 97.86% | 4534 ms | ↑ 1.35x | 72 | 1m | 14d ago | 17m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 954 ms | → 0.96x | 1 | 0s | 12d ago | 14m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.13% | 63.35% | 63.35% | 2989 ms | ↑ 1.62x | 7 | 29m | 15d ago | 4m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 80.49% | 80.54% | 80.54% | 368 ms | ↓ 0.65x | 10 | 7h 2m | 14d ago | 3m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 100.00% | 100.00% | 100.00% | 1580 ms | → 1.00x | 0 | — | — | 2m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1513 ms | → 1.00x | 0 | — | — | 2m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.82% | 99.94% | 99.94% | 3049 ms | ↑ 1.36x | 5 | 0s | 8d ago | 17m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.05% | 99.69% | 99.69% | 3663 ms | ↑ 2.29x | 9 | 24m | 13d ago | 17m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 55.06% | 65.67% | 65.67% | 2469 ms | ↑ 1.17x | 4 | 3d 4h | 10d ago | 4m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 605 ms | → 1.00x | 0 | — | — | 2m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 66.58% | 66.62% | 66.62% | 1936 ms | ↑ 1.21x | 2 | 3d 2h | 18d ago | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2279 ms | → 1.00x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 1847 ms | ↑ 1.89x | 0 | — | — | 3m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.97% | 98.88% | 98.88% | 1742 ms | ↑ 1.95x | 0 | — | — | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.72% | 98.26% | 98.26% | 1591 ms | ↑ 1.08x | 8 | 0s | 15d ago | 5m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.34% | 94.38% | 94.38% | 1393 ms | ↓ 0.48x | 26 | 42m | 16d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1810 ms | → 1.00x | 0 | — | — | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2235 ms | → 1.00x | 0 | — | — | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 63.39% | 64.62% | 64.62% | 1775 ms | ↑ 1.17x | 13 | 15h 19m | 10d ago | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.66% | 98.18% | 98.18% | 808 ms | ↑ 1.40x | 7 | 9m | 14d ago | 4m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 32.22% | 6.10% | 6.10% | 2652 ms | → 1.04x | 1 | 16d 2h | 30d ago | 12m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1874 ms | → 1.00x | 0 | — | — | 2m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 92.53% | 92.20% | 92.20% | 4174 ms | ↑ 1.45x | 3 | 13h 10m | 15d ago | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 44.43% | 9.31% | 9.31% | 1045 ms | ↑ 1.07x | 1 | 13d 3h | 30d ago | 6m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 1093 ms | ↑ 1.48x | 1 | 0s | 30d ago | 18m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 693 ms | → 0.97x | 1 | 0s | 20d ago | 17m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1044 ms | ↑ 1.24x | 1 | 0s | 26d ago | 16m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 93.79% | 93.87% | 93.87% | 2398 ms | ↑ 1.23x | 1 | 13h 10m | 15d ago | 3m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.42% | 99.71% | 99.71% | 3383 ms | ↑ 2.04x | 3 | 1h 40m | 8d ago | 16m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.54% | 97.37% | 97.37% | 1184 ms | → 0.98x | 11 | 32m | 15d ago | 5m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 32.02% | 6.16% | 6.16% | 1804 ms | ↑ 1.23x | 2 | 8d 1h | 28d ago | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.60% | 99.71% | 99.71% | 538 ms | ↓ 0.69x | 10 | 3m | 9d ago | 17m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 98.96% | 98.52% | 98.52% | 4360 ms | ↑ 1.28x | 33 | 0s | 15d ago | 18m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 3569 ms | ↑ 1.81x | 1 | 0s | 22d ago | 16m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.56% | 98.41% | 98.41% | 2212 ms | ↑ 1.54x | 10 | 3m | 15d ago | 5m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 100.00% | 98.86% | 98.96% | 98.96% | 2706 ms | ↑ 1.68x | 7 | 41m | 7d ago | 13m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 32.33% | 19.97% | 19.97% | 1929 ms | → 0.99x | 1 | 16d 2h | 30d ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.97% | 98.01% | 98.01% | 1801 ms | ↑ 1.08x | 5 | 1h 26m | 12d ago | 3m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 98.98% | 99.61% | 99.61% | 2481 ms | ↑ 1.49x | 4 | 1h 8m | 15d ago | 13m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.28% | 99.26% | 99.26% | 2208 ms | ↑ 1.23x | 82 | 5m | 16d ago | 6m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 32.44% | 32.31% | 32.31% | 761 ms | ↑ 1.06x | 1 | 16d 2h | 30d ago | 17m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.32% | 97.81% | 97.81% | 3710 ms | ↑ 1.96x | 20 | 30s | 15d ago | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.91% | 99.95% | 99.95% | 1461 ms | → 1.03x | 2 | 0s | 19d ago | 16m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.72% | 90.65% | 90.65% | 832 ms | → 0.97x | 3 | 33m | 10d ago | 16m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.79% | 99.89% | 99.89% | 427 ms | ↓ 0.36x | 6 | 0s | 8d ago | 16m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.78% | 99.79% | 99.79% | 1745 ms | ↑ 1.06x | 5 | 2m | 15d ago | 4m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.88% | 99.84% | 99.84% | 2097 ms | ↑ 1.13x | 3 | 0s | 15d ago | 13m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.84% | 99.84% | 99.84% | 2133 ms | ↑ 1.15x | 3 | 3m | 14d ago | 5m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.96% | 99.03% | 99.03% | 1389 ms | → 1.05x | 3 | 37m | 15d ago | 3m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.88% | 87.12% | 87.12% | 949 ms | ↓ 0.93x | 3 | 0s | 9d ago | 5m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.14% | 99.56% | 99.56% | 1265 ms | → 0.98x | 23 | 2m | 18d ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.39% | 95.03% | 95.03% | 2983 ms | ↑ 1.18x | 42 | 11m | 7d ago | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 53.25% | 53.25% | 2863 ms | ↑ 1.25x | 4 | 0s | 15d ago | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 44.42% | 8.50% | 8.50% | 1586 ms | ↑ 1.41x | 2 | 6d 14h | 14d ago | 6m ago |
| [花殇API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 951 ms | → 1.00x | 0 | — | — | 2m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.79% | 99.73% | 99.73% | 2406 ms | ↑ 1.10x | 6 | 0s | 8d ago | 16m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 2946 ms | → 0.95x | 0 | — | — | 2m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.60% | 87.48% | 87.48% | 2143 ms | ↑ 1.68x | 11 | 55s | 15d ago | 16m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 44.05% | 8.32% | 8.32% | 2319 ms | → 1.00x | 12 | 1d 2h | 15d ago | 6m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.44% | 98.56% | 98.56% | 2167 ms | ↑ 1.32x | 17 | 0s | 15d ago | 5m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.91% | 99.91% | 99.91% | 1791 ms | ↑ 1.45x | 2 | 0s | 15d ago | 16m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1970 ms | ↑ 1.35x | 2 | 0s | 13d ago | 17m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.05% | 99.53% | 99.53% | 1791 ms | ↑ 1.23x | 5 | 50m | 20d ago | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2308 ms | → 1.00x | 0 | — | — | 2m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.90% | 99.95% | 99.95% | 2170 ms | ↑ 1.63x | 1 | 0s | 13d ago | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.75% | 98.89% | 98.89% | 2453 ms | ↑ 1.13x | 7 | 0s | 15d ago | 16m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.94% | 96.97% | 96.97% | 1940 ms | ↑ 1.25x | 5 | 2h 40m | 16d ago | 3m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.72% | 37.95% | 37.95% | 1612 ms | → 0.95x | 8 | 0s | 15d ago | 15m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.43% | 96.46% | 96.46% | 1553 ms | → 1.03x | 9 | 1h 47m | 15d ago | 3m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 93.37% | 93.40% | 93.40% | 1389 ms | ↑ 1.13x | 54 | 25m | 14d ago | 3m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 62.18% | 62.18% | 1183 ms | ↑ 1.53x | 3 | 0s | 15d ago | 5m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.54% | 98.39% | 98.39% | 2036 ms | → 1.04x | 14 | 0s | 16d ago | 15m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.63% | 75.07% | 75.07% | 2453 ms | ↑ 1.77x | 11 | 0s | 8d ago | 5m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.75% | 99.76% | 99.76% | 2330 ms | ↑ 1.19x | 6 | 2m | 15d ago | 16m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.85% | 99.66% | 99.66% | 2815 ms | ↑ 1.79x | 3 | 3m | 16d ago | 17m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.85% | 99.85% | 1143 ms | ↓ 0.65x | 3 | 0s | 15d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 44.20% | 28.21% | 28.21% | 1064 ms | ↓ 0.54x | 6 | 2d 5h | 15d ago | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 81.65% | 86.33% | 86.33% | 4441 ms | → 0.96x | 383 | 6m | 9d ago | 4m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.94% | 99.10% | 99.10% | 2326 ms | ↑ 1.56x | 1 | 0s | 15d ago | 5m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 60.09% | 60.09% | 1439 ms | ↑ 1.26x | 1 | 0s | 15d ago | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.96% | 95.96% | 1228 ms | ↑ 1.35x | 2 | 0s | 15d ago | 5m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1253 ms | → 1.00x | 0 | — | — | 2m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 43.18% | 8.18% | 8.18% | 1976 ms | ↓ 0.73x | 37 | 8h 34m | 7d ago | 13m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 96.74% | 99.36% | 99.36% | 3821 ms | ↑ 2.11x | 79 | 3m | 23d ago | 15m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.94% | 49.71% | 49.71% | 2075 ms | ↑ 2.75x | 1 | 0s | 15d ago | 5m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 97.98% | 97.98% | 1796 ms | ↑ 1.24x | 2 | 0s | 15d ago | 5m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.69% | 97.52% | 97.52% | 2286 ms | ↑ 1.91x | 8 | 1m | 15d ago | 4m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.83% | 99.12% | 99.12% | 3472 ms | ↑ 2.04x | 32 | 3m | 12d ago | 12m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.85% | 99.71% | 99.71% | 3287 ms | ↑ 1.83x | 3 | 3m | 24d ago | 17m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.86% | 99.86% | 2384 ms | ↑ 1.28x | 3 | 0s | 15d ago | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 67.60% | 38.28% | 38.28% | 4404 ms | ↑ 1.52x | 5 | 1d 11h | 14d ago | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 187 ms | ↓ 0.28x | 1 | 0s | 27d ago | 17m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.85% | 99.94% | 99.94% | 2257 ms | ↑ 1.97x | 3 | 56s | 15d ago | 13m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.66% | 99.46% | 99.46% | 3483 ms | ↑ 1.74x | 10 | 0s | 14d ago | 17m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 91.89% | 74.04% | 74.04% | 2237 ms | ↓ 0.94x | 74 | 25m | 14d ago | 5m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 82.28% | 82.28% | 2111 ms | ↑ 1.63x | 1 | 0s | 15d ago | 5m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.26% | 95.43% | 95.43% | 1260 ms | ↑ 1.17x | 50 | 1m | 15d ago | 6m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.97% | 99.97% | 1239 ms | ↓ 0.89x | 2 | 0s | 15d ago | 16m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.53% | 97.87% | 97.87% | 3370 ms | ↑ 2.25x | 13 | 47s | 15d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.72% | 97.91% | 97.91% | 1429 ms | ↓ 0.95x | 8 | 0s | 15d ago | 16m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 31.99% | 7.37% | 7.37% | 1718 ms | ↑ 1.22x | 1 | 16d 2h | 30d ago | 5m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 93.42% | 93.49% | 93.49% | 1985 ms | → 1.01x | 5 | 3h 19m | 8d ago | 3m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2050 ms | → 1.00x | 0 | — | — | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.84% | 99.92% | 99.92% | 1485 ms | ↑ 1.16x | 4 | 0s | 15d ago | 4m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 53.06% | 53.06% | 2448 ms | ↑ 2.06x | 2 | 0s | 15d ago | 5m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.66% | 99.71% | 99.71% | 3110 ms | ↑ 1.60x | 10 | 0s | 8d ago | 16m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.90% | 60.38% | 60.38% | 1022 ms | ↓ 0.90x | 31 | 1m | 23d ago | 17m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.68% | 99.74% | 99.74% | 592 ms | ↓ 0.85x | 4 | 3m | 18d ago | 3m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.88% | 98.96% | 98.96% | 1613 ms | ↑ 1.37x | 3 | 0s | 15d ago | 16m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 32.43% | 6.16% | 6.16% | 1009 ms | ↓ 0.93x | 1 | 16d 2h | 30d ago | 16m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 98.10% | 98.10% | 98.10% | 1850 ms | ↓ 0.87x | 1 | 3h 45m | 8d ago | 2m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2907 ms | ↑ 1.29x | 0 | — | — | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 44.44% | 9.28% | 9.28% | 2574 ms | ↑ 1.07x | 2 | 6d 14h | 14d ago | 6m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.73% | 92.40% | 92.40% | 4343 ms | ↓ 0.79x | 146 | 16m | 14d ago | 16m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.18% | 99.25% | 99.25% | 2679 ms | → 1.00x | 10 | 1m | 8d ago | 16m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.98% | 99.98% | 3431 ms | ↑ 1.77x | 2 | 0s | 15d ago | 5m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.50% | 98.83% | 98.83% | 1117 ms | → 0.98x | 14 | 43s | 9d ago | 4m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 26.29% | 14.93% | 14.93% | 2306 ms | → 1.04x | 2 | 9d 10h | 11d ago | 17m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.42% | 99.52% | 99.52% | 1848 ms | ↑ 1.42x | 11 | 6m | 18d ago | 17m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.38% | 99.38% | 1638 ms | ↑ 1.79x | 0 | — | — | 16m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 880 ms | ↑ 1.14x | 1 | 0s | 19d ago | 18m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.89% | 96.94% | 96.94% | 2941 ms | ↑ 1.27x | 1 | 9h 60m | 21d ago | 3m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.54% | 99.60% | 99.60% | 2828 ms | ↑ 1.51x | 2 | 25m | 15d ago | 3m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.79% | 83.74% | 83.74% | 1717 ms | ↑ 1.53x | 30 | 3m | 15d ago | 5m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.58% | 99.63% | 99.63% | 2917 ms | ↑ 2.07x | 7 | 0s | 16d ago | 3m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 98.96% | 99.77% | 99.77% | 1643 ms | ↑ 1.15x | 33 | 0s | 23d ago | 16m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.67% | 99.42% | 99.42% | 1355 ms | ↑ 1.13x | 59 | 3m | 19d ago | 17m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 2084 ms | → 1.00x | 0 | — | — | 2m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.82% | 99.70% | 99.70% | 1207 ms | ↑ 1.09x | 4 | 2m | 20d ago | 17m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.35% | 99.80% | 99.80% | 841 ms | ↓ 0.91x | 20 | 0s | 17d ago | 15m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 98.58% | 82.10% | 82.10% | 2798 ms | ↓ 0.68x | 42 | 41s | 15d ago | 13m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.63% | 98.48% | 98.48% | 2155 ms | ↑ 1.19x | 11 | 0s | 15d ago | 5m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 96.06% | 96.10% | 96.10% | 2251 ms | ↑ 1.59x | 14 | 59m | 8d ago | 3m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.54% | 90.98% | 90.98% | 4019 ms | ↑ 2.20x | 13 | 46s | 15d ago | 18m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2808 ms | ↓ 0.92x | 0 | — | — | 2m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4730 ms | → 1.00x | 0 | — | — | 2m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2664 ms | → 1.00x | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.35% | 98.53% | 98.53% | 663 ms | ↑ 1.06x | 16 | 2m | 16d ago | 5m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.54% | 98.59% | 98.59% | 2249 ms | → 1.01x | 13 | 46s | 7d ago | 15m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.88% | 99.78% | 99.78% | 3597 ms | ↑ 2.06x | 3 | 0s | 15d ago | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2268 ms | → 1.00x | 0 | — | — | 2m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.78% | 98.25% | 98.25% | 2169 ms | ↑ 2.37x | 6 | 0s | 11d ago | 5m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.75% | 99.74% | 99.74% | 1608 ms | ↑ 1.13x | 6 | 2m | 15d ago | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2088 ms | ↑ 1.16x | 0 | — | — | 2m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.63% | 97.63% | 1855 ms | ↑ 1.71x | 3 | 0s | 15d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.80% | 93.11% | 93.11% | 4467 ms | ↑ 1.78x | 68 | 10m | 15d ago | 4m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.88% | 99.91% | 99.91% | 1664 ms | ↑ 1.68x | 3 | 0s | 17d ago | 15m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.88% | 84.82% | 84.82% | 3027 ms | ↑ 1.78x | 3 | 0s | 8d ago | 5m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.90% | 99.95% | 99.95% | 895 ms | ↓ 0.78x | 1 | 0s | 17d ago | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.63% | 99.85% | 99.85% | 1931 ms | ↑ 1.96x | 5 | 12m | 12d ago | 15m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 32.36% | 6.16% | 6.16% | 2748 ms | ↑ 1.15x | 3 | 5d 9h | 8d ago | 16m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2916 ms | ↑ 1.18x | 0 | — | — | 2m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.66% | 99.83% | 99.83% | 2370 ms | ↑ 1.55x | 5 | 12m | 10d ago | 15m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 44.39% | 8.38% | 8.38% | 2279 ms | ↑ 1.06x | 3 | 4d 9h | 10d ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 94.14% | 94.18% | 94.18% | 1212 ms | ↓ 0.88x | 4 | 5h 15m | 17d ago | 3m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2888 ms | → 1.00x | 0 | — | — | 2m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 100.00% | 100.00% | 100.00% | 100.00% | 401 ms | → 1.00x | 0 | — | — | 3m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 100.00% | 44.30% | 15.49% | 15.49% | 1685 ms | → 1.01x | 4 | 3d 7h | 8d ago | 5m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.74% | 99.74% | 2814 ms | ↑ 1.78x | 7 | 4m | 15d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 2628 ms | ↑ 1.64x | 1 | 0s | 17d ago | 15m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.60% | 99.71% | 99.71% | 2306 ms | ↑ 1.52x | 5 | 14m | 17d ago | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 97.14% | 97.18% | 97.18% | 1546 ms | ↑ 1.27x | 2 | 6h 15m | 16d ago | 3m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.54% | 99.79% | 99.79% | 2374 ms | ↑ 1.38x | 13 | 13s | 11d ago | 13m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 1465 ms | ↑ 1.78x | 1 | 0s | 18d ago | 6m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.79% | 98.99% | 98.99% | 1686 ms | ↑ 1.55x | 6 | 0s | 14d ago | 16m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1018 ms | → 0.96x | 1 | 0s | 23d ago | 16m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.81% | 98.51% | 98.58% | 98.58% | 4120 ms | ↑ 1.09x | 21 | 0s | 7d ago | 17m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 99.81% | 32.43% | 77.01% | 77.01% | 2745 ms | ↑ 1.08x | 2 | 8d 1h | 22h ago | 17m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.81% | 99.73% | 99.80% | 99.80% | 536 ms | → 0.99x | 3 | 0s | 1d ago | 17m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 99.81% | 99.85% | 99.64% | 99.64% | 1734 ms | ↑ 1.12x | 4 | 0s | 14h ago | 17m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.81% | 93.91% | 91.45% | 91.45% | 1557 ms | ↓ 0.79x | 115 | 7m | 3d ago | 16m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.81% | 99.72% | 99.72% | 99.72% | 3442 ms | ↑ 1.30x | 8 | 0s | 22h ago | 17m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.81% | 99.48% | 99.88% | 99.88% | 1478 ms | ↑ 1.34x | 3 | 1h 27m | 6d ago | 16m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.81% | 98.56% | 99.58% | 99.58% | 2158 ms | ↑ 1.33x | 43 | 42s | 36m ago | 16m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.81% | 99.48% | 99.15% | 99.15% | 1677 ms | ↑ 1.73x | 15 | 40s | 36m ago | 16m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.81% | 99.66% | 99.63% | 99.63% | 943 ms | ↓ 0.94x | 10 | 0s | 20h ago | 16m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.81% | 99.51% | 99.90% | 99.90% | 2348 ms | ↑ 1.44x | 12 | 2m | 36m ago | 16m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.81% | 99.82% | 99.93% | 99.93% | 1181 ms | ↑ 2.26x | 5 | 0s | 1d ago | 16m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.81% | 91.84% | 18.68% | 18.68% | 3133 ms | ↑ 1.12x | 6 | 7h 20m | 6d ago | 14m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.81% | 75.34% | 47.67% | 47.67% | 1749 ms | ↑ 1.51x | 16 | 8h 17m | 5d ago | 14m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.81% | 99.91% | 53.31% | 53.31% | 4155 ms | ↑ 2.04x | 2 | 0s | 1d ago | 15m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.81% | 99.75% | 99.86% | 99.86% | 3156 ms | ↑ 1.72x | 7 | 0s | 7d ago | 14m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.81% | 32.29% | 18.24% | 18.24% | 841 ms | → 1.04x | 2 | 8d 1h | 4d ago | 15m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.80% | 94.88% | 96.17% | 96.17% | 3320 ms | ↑ 1.45x | 36 | 37m | 5d ago | 13m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.80% | 99.81% | 51.90% | 51.90% | 3369 ms | ↑ 1.47x | 5 | 0s | 6d ago | 5m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.80% | 31.96% | 6.42% | 6.42% | 1839 ms | ↑ 1.35x | 2 | 8d 1h | 12h ago | 6m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.80% | 92.59% | 96.03% | 96.03% | 2301 ms | ↑ 2.15x | 5 | 15h 59m | 6d ago | 6m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.80% | 97.34% | 97.38% | 97.38% | 1825 ms | ↑ 1.32x | 61 | 3m | 7d ago | 3m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.80% | 99.84% | 97.54% | 97.54% | 2398 ms | ↑ 1.51x | 4 | 0s | 7d ago | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.80% | 99.07% | 97.18% | 97.18% | 3160 ms | ↑ 1.80x | 25 | 2m | 7d ago | 4m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.80% | 99.78% | 76.50% | 76.50% | 2109 ms | → 1.02x | 5 | 2m | 5d ago | 5m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.80% | 99.91% | 95.24% | 95.24% | 1495 ms | ↑ 1.36x | 2 | 0s | 1d ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.80% | 98.76% | 96.63% | 96.63% | 2814 ms | ↑ 1.90x | 33 | 3m | 7d ago | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.80% | 99.07% | 98.32% | 98.32% | 3089 ms | ↑ 1.67x | 27 | 45s | 7d ago | 5m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.80% | 99.78% | 98.78% | 98.78% | 1940 ms | ↑ 2.15x | 5 | 2m | 2d ago | 5m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.80% | 99.85% | 99.72% | 99.72% | 3364 ms | ↑ 1.91x | 4 | 0s | 4d ago | 12m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.80% | 99.01% | 85.99% | 85.99% | 2130 ms | ↑ 1.54x | 31 | 0s | 4d ago | 5m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.80% | 99.65% | 99.72% | 99.72% | 2172 ms | ↓ 0.92x | 4 | 0s | 22h ago | 6m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.80% | 99.74% | 99.78% | 99.78% | 1359 ms | ↑ 1.06x | 5 | 0s | 5d ago | 3m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.80% | 59.32% | 22.57% | 22.57% | 2662 ms | ↑ 1.17x | 11 | 19h 48m | 2d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.80% | 99.81% | 87.36% | 87.36% | 2484 ms | ↑ 1.74x | 5 | 0s | 6d ago | 4m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.80% | 99.19% | 89.70% | 89.70% | 3417 ms | ↑ 1.11x | 25 | 0s | 4d ago | 5m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.80% | 99.84% | 99.86% | 99.86% | 2597 ms | ↑ 1.39x | 4 | 0s | 7d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.61% | 37.78% | 77.62% | 77.62% | 531 ms | ↓ 0.91x | 6 | 2d 16h | 2d ago | 17m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.61% | 64.75% | 12.34% | 12.34% | 2396 ms | ↑ 1.13x | 4 | 2d | 21h ago | 18m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.61% | 32.33% | 6.16% | 6.16% | 1478 ms | → 1.04x | 4 | 4d | 22h ago | 16m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.61% | 73.34% | 83.14% | 83.14% | 1010 ms | ↓ 0.17x | 407 | 12m | 6d ago | 16m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.61% | 99.54% | 98.81% | 98.81% | 1744 ms | ↑ 1.36x | 14 | 0s | 6d ago | 6m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.61% | 94.24% | 94.32% | 94.32% | 2508 ms | ↑ 1.23x | 2 | 6h 20m | 4d ago | 3m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.61% | 99.81% | 65.25% | 65.25% | 2269 ms | ↑ 1.13x | 4 | 5m | 8h ago | 5m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.61% | 99.48% | 97.57% | 97.57% | 3119 ms | ↑ 1.27x | 16 | 0s | 3d ago | 12m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.61% | 93.14% | 93.21% | 93.21% | 3169 ms | ↑ 1.22x | 5 | 3h 2m | 1d ago | 3m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.61% | 97.44% | 97.47% | 97.47% | 2699 ms | ↑ 1.36x | 7 | 1h 48m | 2h ago | 3m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.61% | 99.83% | 99.87% | 99.87% | 1295 ms | → 0.97x | 2 | 9m | 6d ago | 3m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.61% | 99.75% | 99.83% | 99.83% | 964 ms | → 1.04x | 6 | 2m | 17h ago | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.61% | 58.86% | 52.53% | 52.53% | 2225 ms | ↓ 0.92x | 11 | 21h 33m | 12h ago | 5m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.61% | 97.57% | 97.45% | 97.45% | 2608 ms | ↓ 0.84x | 66 | 2m | 6d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.61% | 93.90% | 93.98% | 93.98% | 2241 ms | → 0.97x | 3 | 4h 17m | 4d ago | 3m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.61% | 31.93% | 17.61% | 17.61% | 648 ms | ↑ 1.12x | 3 | 5d 9h | 22h ago | 4m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.61% | 90.69% | 89.77% | 89.77% | 3283 ms | ↑ 1.41x | 111 | 18m | 6d ago | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.61% | 99.04% | 99.00% | 99.00% | 3534 ms | ↑ 1.91x | 29 | 20s | 1d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 99.61% | 98.28% | 98.37% | 98.37% | 2299 ms | ↑ 1.10x | 4 | 1h 14m | 3h ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 99.61% | 99.57% | 99.65% | 99.65% | 2039 ms | → 1.03x | 4 | 0s | 3h ago | 3m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.42% | 99.36% | 99.87% | 99.87% | 4355 ms | ↑ 2.51x | 20 | 0s | 20h ago | 17m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.42% | 99.14% | 99.26% | 99.26% | 2282 ms | ↓ 0.88x | 27 | 0s | 19h ago | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.41% | 31.85% | 6.01% | 6.01% | 1694 ms | ↑ 1.18x | 6 | 2d 16h | 3h ago | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.41% | 99.67% | 99.67% | 99.67% | 2506 ms | ↓ 0.87x | 2 | 11m | 3d ago | 2m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.41% | 99.52% | 99.56% | 99.56% | 1584 ms | ↑ 1.40x | 10 | 6m | 1d ago | 3m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.41% | 99.04% | 99.04% | 99.04% | 180 ms | ↓ 0.29x | 26 | 2m | 6d ago | 4m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.41% | 97.59% | 99.52% | 99.52% | 3722 ms | ↑ 2.51x | 65 | 2m | 17h ago | 12m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.41% | 44.16% | 29.82% | 29.82% | 2388 ms | ↑ 1.19x | 7 | 1d 21h | 6d ago | 4m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.41% | 99.72% | 61.47% | 61.47% | 1281 ms | ↑ 1.29x | 7 | 1m | 17h ago | 4m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.41% | 95.70% | 96.50% | 96.50% | 2387 ms | → 1.04x | 81 | 7m | 3d ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.23% | 98.78% | 99.66% | 99.66% | 4092 ms | ↑ 1.32x | 38 | 32s | 20h ago | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.23% | 97.19% | 99.44% | 99.44% | 4233 ms | ↑ 1.80x | 78 | 2m | 20h ago | 17m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.23% | 80.35% | 83.10% | 83.10% | 1403 ms | ↓ 0.61x | 394 | 6m | 19h ago | 17m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.22% | 98.20% | 97.57% | 97.57% | 1271 ms | ↑ 2.08x | 14 | 33m | 3d ago | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.22% | 79.97% | 64.21% | 64.21% | 4110 ms | ↓ 0.83x | 429 | 5m | 7h ago | 13m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 99.22% | 44.01% | 37.49% | 37.49% | 2347 ms | ↑ 1.08x | 13 | 1d | 1d ago | 3m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.22% | 98.19% | 98.26% | 98.26% | 2928 ms | ↑ 1.99x | 45 | 3m | 9h ago | 4m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 99.22% | 99.55% | 99.55% | 99.55% | 2670 ms | ↓ 0.90x | 1 | 59m | 3d ago | 2m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.17% | 99.17% | 99.17% | 99.17% | 4663 ms | → 1.00x | 3 | 0s | 17h ago | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.03% | 31.66% | 6.00% | 6.00% | 1948 ms | ↑ 1.13x | 21 | 18h 23m | 2d ago | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.02% | 99.69% | 96.64% | 96.64% | 2038 ms | ↑ 1.67x | 5 | 16m | 4d ago | 5m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.02% | 83.27% | 83.31% | 83.31% | 1887 ms | ↑ 1.37x | 6 | 10h 26m | 5d ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (51)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 98.84% | 55.45% | 55.98% | 55.98% | 3562 ms | → 1.00x | 421 | 27m | 14h ago | 17m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 98.82% | 92.74% | 92.82% | 92.82% | 1705 ms | → 1.05x | 8 | 1h 37m | 3h ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 98.82% | 46.77% | 46.81% | 46.81% | 4355 ms | → 1.02x | 57 | 4h 37m | 17h ago | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.82% | 99.50% | 73.97% | 73.97% | 1216 ms | ↑ 1.76x | 8 | 15m | 3d ago | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.82% | 94.01% | 94.05% | 94.05% | 2145 ms | ↑ 1.08x | 2 | 13h 21m | 8h ago | 3m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.64% | 98.04% | 97.62% | 97.62% | 4275 ms | ↑ 1.59x | 61 | 20s | 1d ago | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.64% | 98.84% | 96.20% | 96.20% | 3227 ms | ↑ 1.49x | 27 | 6m | 3d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.63% | 54.91% | 30.03% | 30.03% | 2924 ms | ↑ 1.70x | 11 | 22h 3m | 6h ago | 4m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.45% | 98.43% | 90.91% | 90.91% | 1755 ms | ↓ 0.77x | 41 | 4m | 3d ago | 16m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 98.43% | 53.57% | 53.60% | 53.60% | 2134 ms | → 0.95x | 39 | 6h 24m | 14h ago | 3m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.26% | 99.57% | 99.90% | 99.90% | 3007 ms | ↑ 2.13x | 13 | 0s | 14h ago | 17m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.25% | 87.96% | 48.42% | 48.42% | 3547 ms | ↑ 1.61x | 175 | 13m | 6d ago | 14m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.24% | 20.88% | 16.33% | 16.33% | 2587 ms | → 1.04x | 10 | 2d 4h | 8h ago | 4m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.04% | 95.23% | 96.23% | 96.23% | 3545 ms | ↑ 1.49x | 67 | 14m | 1d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.04% | 98.82% | 88.57% | 88.57% | 1576 ms | ↓ 0.70x | 30 | 2m | 4h ago | 5m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 97.11% | 93.89% | 98.62% | 98.62% | 3697 ms | ↑ 1.31x | 144 | 5m | 20h ago | 17m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.06% | 92.21% | 92.29% | 92.29% | 2535 ms | ↓ 0.86x | 4 | 4h 8m | 3d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 96.97% | 97.14% | 98.57% | 98.57% | 1411 ms | ↑ 1.14x | 1 | 0s | 2h ago | 3m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.89% | 98.01% | 98.70% | 98.70% | 3339 ms | → 0.97x | 44 | 7m | 36m ago | 16m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 96.67% | 91.25% | 91.73% | 91.73% | 2258 ms | ↑ 2.24x | 47 | 1h 42m | 4d ago | 4m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 95.29% | 85.32% | 76.01% | 76.01% | 2864 ms | ↑ 1.11x | 252 | 10m | 5h ago | 13m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 94.51% | 79.65% | 57.20% | 57.20% | 4677 ms | ↑ 1.08x | 415 | 6m | 15h ago | 5m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.51% | 91.71% | 66.16% | 66.16% | 2869 ms | ↑ 1.39x | 35 | 1h 16m | 2d ago | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.51% | 80.75% | 80.26% | 80.26% | 4735 ms | ↑ 1.09x | 404 | 5m | 15h ago | 4m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 94.32% | 80.63% | 84.20% | 84.20% | 4513 ms | ↑ 1.09x | 409 | 6m | 45m ago | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 94.22% | 70.73% | 70.73% | 70.73% | 3562 ms | ↓ 0.79x | 287 | 12m | 16h ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 93.92% | 89.80% | 89.88% | 89.88% | 2945 ms | → 1.05x | 40 | 22m | 3h ago | 3m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 93.45% | 95.39% | 98.76% | 98.76% | 4230 ms | ↑ 1.44x | 95 | 8m | 20h ago | 17m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 93.39% | 81.84% | 83.72% | 83.72% | 4315 ms | → 0.97x | 422 | 4m | 35m ago | 15m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 92.94% | 95.98% | 95.98% | 95.98% | 1661 ms | ↑ 1.23x | 1 | 11h 52m | 3d ago | 2m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 92.55% | 72.96% | 73.00% | 73.00% | 2934 ms | ↑ 1.77x | 56 | 2h 30m | 4d ago | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.55% | 95.65% | 95.65% | 95.65% | 3913 ms | ↑ 1.26x | 3 | 4h 1m | 3d ago | 2m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 92.37% | 43.18% | 8.15% | 8.15% | 2699 ms | ↑ 1.15x | 5 | 2d 18h | 2d ago | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 92.16% | 95.02% | 92.56% | 92.56% | 2968 ms | ↑ 1.46x | 86 | 13m | 3h ago | 4m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 91.65% | 29.57% | 5.62% | 5.62% | 2152 ms | → 1.01x | 66 | 5h 59m | 14h ago | 16m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 89.61% | 76.29% | 76.32% | 76.32% | 4569 ms | ↑ 1.05x | 379 | 12m | 1d ago | 3m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 88.43% | 77.00% | 75.66% | 75.66% | 4654 ms | → 1.00x | 498 | 7m | 24m ago | 4m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 87.88% | 19.73% | 19.73% | 19.73% | 4384 ms | → 1.00x | 4 | 3d 14h | 3h ago | 3m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.25% | 28.31% | 28.31% | 28.31% | 3905 ms | ↑ 1.11x | 98 | 3h 60m | 23m ago | 3m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 86.67% | 29.61% | 5.60% | 5.60% | 3791 ms | ↓ 0.94x | 75 | 5h 11m | 2h ago | 13m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 84.78% | 92.27% | 95.64% | 95.64% | 4019 ms | → 0.98x | 134 | 17m | 15h ago | 17m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 83.76% | 31.37% | 6.89% | 6.89% | 4658 ms | → 1.02x | 165 | 2h 13m | 3h ago | 5m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 83.73% | 95.75% | 59.98% | 59.98% | 1147 ms | ↑ 1.17x | 37 | 47m | 1d ago | 5m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 83.17% | 39.49% | 25.16% | 25.16% | 2809 ms | ↑ 1.08x | 18 | 20h 9m | 3d ago | 5m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 83.11% | 23.75% | 85.38% | 85.38% | 2279 ms | ↑ 1.10x | 1 | 21d 14h | 28d ago | 16m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 82.27% | 78.25% | 83.14% | 83.14% | 4470 ms | → 1.00x | 401 | 10m | 15h ago | 18m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 80.20% | 80.20% | 89.73% | 89.73% | 1077 ms | ↓ 0.25x | 17 | 11h 31m | 2d ago | 5m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 64.90% | 22.65% | 8.55% | 8.55% | 4616 ms | ↑ 1.06x | 171 | 2h 32m | 2h ago | 5m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 10.59% | 64.84% | 78.26% | 78.26% | 3675 ms | ↑ 5.71x | 8 | 1d 19h | 15d ago | 4m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 1.18% | 0.19% | 4.42% | 4.42% | 357 ms | → 1.00x | 1 | 29d 22h | 30d ago | 12m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.96% | 51.96% | 89.01% | 89.01% | 685 ms | ↓ 0.33x | 209 | 1h 50m | 14d ago | 17m ago |

</details>

<details open>
<summary><strong>🔴 Down (172)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 94.61% | 98.13% | 98.18% | 98.18% | 4587 ms | ↑ 1.78x | 31 | 5m | 38m ago | 18m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 94.31% | 31.98% | 6.05% | 6.05% | 4344 ms | ↑ 1.22x | 24 | 16h 1m | 12m ago | 12m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 94.12% | 98.43% | 99.04% | 99.04% | 4362 ms | ↑ 1.34x | 40 | 5m | 12m ago | 12m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 93.35% | 80.77% | 70.69% | 70.69% | 4577 ms | → 1.05x | 433 | 5m | 32m ago | 13m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 90.59% | 80.20% | 76.78% | 76.78% | 4825 ms | → 1.00x | 430 | 5m | 4m ago | 4m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 88.82% | 97.47% | 97.51% | 97.51% | 1796 ms | ↑ 1.70x | 2 | 9h 21m | 19h ago | 3m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 65.50% | 53.14% | 61.77% | 61.77% | 4824 ms | → 1.01x | 608 | 18m | 33m ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 52.35% | 20.60% | 7.35% | 7.35% | 3892 ms | → 0.97x | 277 | 1h 36m | 25m ago | 5m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 50.68% | 19.78% | 4.58% | 4.58% | 3709 ms | → 1.03x | 6 | 3d 15h | 3d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 43.92% | 61.15% | 61.21% | 61.21% | 1375 ms | ↓ 0.82x | 10 | 15h 47m | 2d ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 34.12% | 83.01% | 83.06% | 83.06% | 1550 ms | ↑ 1.16x | 4 | 1d 5h | 5d ago | 3m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 30.00% | 86.48% | 85.88% | 85.88% | 525 ms | ↓ 0.58x | 3 | 1d 21h | 5d ago | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 19.41% | 31.59% | 31.52% | 31.52% | 1035 ms | → 0.95x | 3 | 6d 7h | 6d ago | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 18.18% | 18.18% | 18.18% | 18.18% | 2907 ms | → 1.00x | 5 | 1h 29m | 2h ago | 2m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 16.67% | 86.55% | 90.75% | 90.75% | 2593 ms | ↑ 2.46x | 7 | 20h 26m | 6d ago | 4m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 8.67% | 44.93% | 68.18% | 68.18% | 3460 ms | ↓ 0.56x | 440 | 51m | 9h ago | 18m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 7.25% | 17.58% | 27.36% | 27.36% | 431 ms | ↓ 0.69x | 4 | 5d 16h | 4d ago | 13m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 67.38% | 93.06% | 93.06% | — | — | 6 | 2d 8h | 14d ago | 16m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 77.05% | 77.05% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 66.49% | 82.83% | 82.83% | — | — | 29 | 11h 38m | 14d ago | 6m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.43% | 6.43% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 10.32% | 14.08% | 14.08% | — | — | 11 | 2d 12h | 14d ago | 18m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.82% | 3.82% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 64.76% | 93.32% | 93.32% | — | — | 80 | 4h 12m | 14d ago | 14m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 40.96% | 40.96% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 29.24% | 29.24% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 51.44% | 83.76% | 83.76% | — | — | 313 | 1h 11m | 14d ago | 17m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 58.22% | 70.67% | 70.67% | — | — | 249 | 1h 24m | 14d ago | 4m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 67.97% | 35.42% | 35.42% | — | — | 2 | 6d 23h | 14d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 67.39% | 93.79% | 93.79% | — | — | 5 | 2d 19h | 14d ago | 17m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 35.73% | 70.64% | 70.64% | — | — | 130 | 3h 52m | 20d ago | 16m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 17m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 21h | 17d ago | 17m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 66.60% | 86.64% | 86.64% | — | — | 32 | 10h 26m | 14d ago | 17m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.75% | 19.75% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 66.88% | 61.19% | 61.19% | — | — | 27 | 12h 24m | 14d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 43.53% | 43.53% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.74% | 4.17% | 4.17% | — | — | 3 | 9d 22h | 14d ago | 5m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 67.98% | 93.95% | 93.95% | — | — | 1 | 13d 22h | 14d ago | 6m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.68% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 14d ago | 12m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 59.09% | 58.36% | 58.36% | — | — | 32 | 11h 45m | 14d ago | 15m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 33.44% | 33.44% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 12.16% | 2.31% | 2.31% | — | — | 7 | 3d 21h | 14d ago | 14m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 35.82% | 49.23% | 49.23% | — | — | 5 | 3d 22h | 10d ago | 4m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 61.41% | 61.41% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 48.48% | 29.33% | 29.33% | — | — | 286 | 1h 23m | 14d ago | 5m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 66.27% | 33.92% | 33.92% | — | — | 50 | 6h 42m | 14d ago | 5m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.68% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 14d ago | 14m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 64.36% | 64.36% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 16m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.43% | 7.43% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 74.04% | 74.04% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 67.06% | 93.73% | 93.73% | — | — | 16 | 20h 52m | 14d ago | 17m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 17m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.44% | 11.13% | 11.13% | — | — | 2 | 14d 23h | 30d ago | 3m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 53.49% | 89.44% | 89.44% | — | — | 165 | 2h 20m | 14d ago | 6m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 17h | 30d ago | 3m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 9.03% | 40.28% | 40.28% | — | — | 1 | 27d 22h | 28d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 13.68% | 13.61% | 13.61% | — | — | 5 | 5d 11h | 27d ago | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 59.53% | 59.53% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 17m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 37.42% | 86.26% | 86.26% | — | — | 221 | 2h 9m | 14d ago | 18m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 52.58% | 52.58% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 18m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.79% | 47.79% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 67.41% | 93.74% | 93.74% | — | — | 4 | 3d 11h | 14d ago | 18m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 66.19% | 66.19% | — | — | 3 | 9d 24h | 26d ago | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.64% | 43.98% | 43.98% | — | — | 2 | 14d 22h | 14d ago | 17m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 22h | 17d ago | 16m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 6m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 41.82% | 37.49% | 37.49% | — | — | 453 | 53m | 14d ago | 5m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 12.80% | 2.96% | 2.96% | — | — | 4 | 6d 18h | 14d ago | 5m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 46.97% | 46.97% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 66.57% | 93.68% | 93.68% | — | — | 22 | 15h 19m | 14d ago | 12m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 67.95% | 38.03% | 38.03% | — | — | 2 | 6d 23h | 14d ago | 5m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 67.43% | 93.61% | 93.61% | — | — | 4 | 3d 11h | 14d ago | 17m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 50.26% | 50.30% | 50.30% | — | — | 1 | 13d 22h | 14d ago | 17m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 41.97% | 54.95% | 54.95% | — | — | 3 | 6d 20h | 21d ago | 5m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 63.28% | 90.98% | 90.98% | — | — | 117 | 2h 53m | 14d ago | 17m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.43% | 0.12% | 0.12% | — | — | 14 | 2d 3h | 15d ago | 12m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.07% | 0.07% | 0.07% | — | — | 2 | 8d 10h | 9d ago | 6m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 17h | 30d ago | 3m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 43.61% | 89.23% | 89.23% | — | — | 55 | 8h 23m | 19d ago | 12m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 67.97% | 76.80% | 76.80% | — | — | 2 | 6d 23h | 14d ago | 4m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.97% | 3.97% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 48.83% | 48.83% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 54.88% | 87.46% | 87.46% | — | — | 126 | 3h 2m | 14d ago | 17m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 38.25% | 66.70% | 66.70% | — | — | 490 | 52m | 14d ago | 13m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 15m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.00% | 32.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 23.83% | 23.89% | 23.89% | — | — | 24 | 15h 4m | 14d ago | 3m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 13.99% | 17.06% | 17.06% | — | — | 340 | 1h 43m | 14d ago | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.26% | 27.26% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10h 44m | 11h ago | 2m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 16m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 66.78% | 80.06% | 80.06% | — | — | 36 | 9h 17m | 14d ago | 4m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 31.86% | 31.94% | 31.94% | — | — | 3 | 3d 6h | 9d ago | 3m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.75% | 19.75% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 55.98% | 55.98% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 62.38% | 62.38% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 64.71% | 64.75% | 64.75% | — | — | 7 | 1d 24h | 14d ago | 3m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 76.00% | 79.42% | 79.42% | — | — | 7 | 1d 10h | 10d ago | 3m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 33.20% | 6.27% | 6.27% | — | — | 3 | 7d 6h | 14d ago | 6m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 23h | 19d ago | 3m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 16m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 67.51% | 93.83% | 93.83% | — | — | 2 | 6d 23h | 14d ago | 16m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 17m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 65.60% | 92.60% | 92.60% | — | — | 51 | 6h 35m | 14d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 39.40% | 72.23% | 72.23% | — | — | 455 | 54m | 14d ago | 18m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 27.06% | 84.82% | 84.82% | — | — | 12 | 1d 23h | 24d ago | 16m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 65.86% | 92.45% | 92.45% | — | — | 53 | 6h 19m | 14d ago | 16m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.33% | 22.33% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 11.07% | 11.07% | 11.07% | — | — | 3 | 4d 21h | 12d ago | 16m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 67.85% | 38.92% | 38.92% | — | — | 5 | 2d 19h | 14d ago | 6m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 9.01% | 77.20% | 77.20% | — | — | 2 | 13d 23h | 21d ago | 16m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 25.47% | 31.49% | 31.49% | — | — | 104 | 5h 18m | 18d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.64% | 9.64% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 55.74% | 74.29% | 74.29% | — | — | 278 | 1h 16m | 14d ago | 18m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 76.47% | 76.47% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10h 44m | 11h ago | 2m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 64.75% | 64.78% | 64.78% | — | — | 3 | 4d 20h | 14d ago | 3m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 64.46% | 64.53% | 64.53% | — | — | 3 | 4d 14h | 13d ago | 3m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 18.72% | 18.72% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.31% | 20.31% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 2.81% | 2.90% | 2.90% | — | — | 2 | 7d 5h | 14d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 14.96% | 15.03% | 15.03% | — | — | 2 | 7d 6h | 14d ago | 3m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 19.14% | 19.22% | 19.22% | — | — | 2 | 5d 19h | 11d ago | 2m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 56.47% | 56.47% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 67.49% | 93.79% | 93.79% | — | — | 5 | 2d 19h | 14d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 63.59% | 72.48% | 72.48% | — | — | 8 | 1d 21h | 15d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 72.78% | 93.99% | 93.99% | — | — | 42 | 6h 15m | 11d ago | 12m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 46.83% | 46.83% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 63.04% | 91.38% | 91.38% | — | — | 149 | 2h 15m | 14d ago | 12m ago |

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
