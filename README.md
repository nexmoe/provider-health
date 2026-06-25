# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**670 providers** — 362 🟢 operational · 50 🟡 degraded · 258 🔴 down · 0 ⚫ unknown

_Updated 2026-06-25 06:51 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (362)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.32% | 98.32% | 800 ms | ↑ 1.13x | 1 | 0s | 28d ago | 14m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1568 ms | → 0.96x | 0 | — | — | 11m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 94.03% | 94.03% | 2435 ms | ↑ 1.50x | 3 | 0s | 19d ago | 19m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 22.75% | 22.75% | 3263 ms | ↑ 1.41x | 4 | 0s | 15d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.51% | 97.51% | 3950 ms | ↑ 1.21x | 0 | — | — | 28m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 57.91% | 57.91% | 1710 ms | ↓ 0.94x | 0 | — | — | 17m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.92% | 99.92% | 99.92% | 1185 ms | ↓ 0.94x | 1 | 0s | 19d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.91% | 97.91% | 4221 ms | ↑ 1.17x | 1 | 0s | 28d ago | 24m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.84% | 98.84% | 2196 ms | ↑ 1.13x | 0 | — | — | 30m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.54% | 99.54% | 3672 ms | ↑ 1.08x | 0 | — | — | 30m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.37% | 99.37% | 278 ms | ↓ 0.30x | 0 | — | — | 13m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.53% | 95.53% | 2865 ms | ↑ 1.21x | 0 | — | — | 14m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2287 ms | ↑ 1.37x | 0 | — | — | 12m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.86% | 97.86% | 3467 ms | ↑ 1.31x | 0 | — | — | 14m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.57% | 92.57% | 3622 ms | ↑ 1.43x | 1 | 50m | 14d ago | 31m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1072 ms | ↑ 1.20x | 0 | — | — | 10m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.72% | 98.72% | 1492 ms | ↑ 1.15x | 0 | — | — | 15m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 99.42% | 96.64% | 96.64% | 2052 ms | ↑ 1.13x | 10 | 0s | 12d ago | 13m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.98% | 98.98% | 479 ms | ↓ 0.39x | 0 | — | — | 12m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.80% | 38.80% | 904 ms | ↑ 1.39x | 0 | — | — | 25m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1620 ms | ↑ 1.16x | 0 | — | — | 10m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1551 ms | ↑ 1.32x | 2 | 10m | 16d ago | 14m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.08% | 97.08% | 3046 ms | ↑ 1.22x | 0 | — | — | 18m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.90% | 98.90% | 1162 ms | ↑ 1.17x | 2 | 15m | 16d ago | 27m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 72.11% | 67.30% | 67.30% | 2161 ms | ↑ 1.60x | 2 | 4d 2h | 9d ago | 14m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1413 ms | ↑ 1.44x | 0 | — | — | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 88.10% | 88.10% | 2089 ms | ↑ 1.56x | 1 | 3h 51m | 27d ago | 16m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.59% | 99.72% | 99.72% | 1734 ms | ↓ 0.81x | 3 | 39m | 14d ago | 12m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.47% | 98.47% | 4360 ms | ↑ 1.30x | 0 | — | — | 16m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.34% | 98.34% | 502 ms | ↑ 1.37x | 0 | — | — | 14m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.63% | 99.63% | 1369 ms | ↑ 1.17x | 4 | 14m | 10d ago | 13m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.63% | 86.63% | 2528 ms | ↑ 1.52x | 0 | — | — | 15m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1124 ms | → 1.02x | 1 | 0s | 12d ago | 11m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.80% | 97.80% | 1441 ms | ↑ 1.06x | 0 | — | — | 17m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.93% | 97.93% | 4219 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.51% | 96.51% | 875 ms | → 0.97x | 0 | — | — | 17m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.07% | 86.13% | 86.13% | 1678 ms | ↓ 0.91x | 9 | 6h 19m | 16d ago | 14m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1124 ms | → 0.98x | 0 | — | — | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2052 ms | ↑ 1.10x | 0 | — | — | 11m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.74% | 99.74% | 99.74% | 1752 ms | → 1.00x | 2 | 0s | 10d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1253 ms | ↑ 1.06x | 2 | 0s | 16d ago | 14m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.85% | 99.85% | 404 ms | ↓ 0.37x | 1 | 51m | 25d ago | 10m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 4312 ms | ↑ 1.17x | 0 | — | — | 24m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.72% | 99.72% | 801 ms | ↓ 0.87x | 1 | 0s | 24d ago | 14m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1372 ms | ↑ 1.11x | 0 | — | — | 10m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.98% | 97.98% | 3958 ms | ↓ 0.77x | 13 | 48m | 22d ago | 16m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.79% | 99.79% | 99.79% | 2163 ms | ↑ 1.08x | 1 | 30m | 12d ago | 10m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1082 ms | ↓ 0.72x | 0 | — | — | 12m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 453 ms | ↓ 0.56x | 0 | — | — | 12m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.82% | 99.82% | 591 ms | → 0.98x | 4 | 0s | 14d ago | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.85% | 96.85% | 552 ms | ↓ 0.88x | 0 | — | — | 18m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.08% | 98.30% | 98.30% | 2045 ms | → 1.04x | 1 | 21h 30m | 21d ago | 11m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1126 ms | → 0.96x | 0 | — | — | 10m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.96% | 55.96% | 1941 ms | ↑ 1.30x | 0 | — | — | 20m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.25% | 98.25% | 98.25% | 919 ms | → 1.00x | 2 | 4h 33m | 14d ago | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1770 ms | ↑ 1.40x | 0 | — | — | 11m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3647 ms | → 0.99x | 0 | — | — | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.21% | 97.21% | 1340 ms | ↓ 0.85x | 0 | — | — | 25m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.95% | 98.98% | 98.98% | 1838 ms | ↑ 1.25x | 2 | 2h 41m | 13d ago | 11m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.15% | 99.15% | 1193 ms | ↓ 0.86x | 2 | 0s | 12d ago | 18m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.01% | 84.01% | 3584 ms | ↑ 1.35x | 0 | — | — | 19m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 774 ms | ↓ 0.67x | 0 | — | — | 12m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.78% | 98.78% | 2771 ms | ↑ 1.22x | 0 | — | — | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4449 ms | ↑ 1.27x | 0 | — | — | 11m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.09% | 93.09% | 717 ms | ↓ 0.87x | 0 | — | — | 19m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1230 ms | ↑ 1.16x | 0 | — | — | 14m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 629 ms | ↑ 1.38x | 1 | 0s | 22d ago | 17m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.45% | 99.45% | 765 ms | ↓ 0.63x | 0 | — | — | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.05% | 98.05% | 2504 ms | ↓ 0.62x | 1 | 0s | 15d ago | 16m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.10% | 90.10% | 1311 ms | ↑ 1.24x | 1 | 0s | 18d ago | 14m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2268 ms | → 1.04x | 0 | — | — | 11m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.21% | 77.21% | 1367 ms | ↑ 1.28x | 0 | — | — | 19m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 936 ms | → 0.97x | 0 | — | — | 11m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.29% | 98.29% | 2548 ms | ↑ 1.15x | 0 | — | — | 17m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 922 ms | → 0.96x | 0 | — | — | 10m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2622 ms | ↑ 1.47x | 0 | — | — | 11m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.81% | 99.81% | 99.81% | 1673 ms | ↓ 0.88x | 3 | 0s | 7d ago | 10m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.87% | 82.87% | 2464 ms | ↑ 1.30x | 2 | 0s | 16d ago | 19m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.07% | 98.07% | 3328 ms | ↑ 2.30x | 0 | — | — | 20m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2179 ms | ↑ 1.14x | 0 | — | — | 12m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.28% | 99.32% | 99.32% | 4079 ms | ↑ 1.18x | 10 | 2h 52m | 10d ago | 24m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.60% | 61.60% | 1638 ms | ↓ 0.87x | 0 | — | — | 19m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.61% | 64.61% | 2025 ms | ↑ 1.21x | 0 | — | — | 19m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.77% | 99.87% | 99.87% | 1133 ms | ↓ 0.76x | 1 | 1h 9m | 9d ago | 13m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2178 ms | ↑ 1.18x | 0 | — | — | 19m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 1135 ms | ↓ 0.57x | 0 | — | — | 16m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.60% | 99.60% | 585 ms | ↓ 0.81x | 1 | 0s | 26d ago | 19m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.93% | 97.93% | 1843 ms | ↓ 0.94x | 2 | 6h 16m | 10d ago | 19m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 89.06% | 89.25% | 89.25% | 3120 ms | ↓ 0.94x | 5 | 15h 33m | 13d ago | 10m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2528 ms | ↑ 1.09x | 0 | — | — | 29m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2817 ms | ↑ 1.37x | 0 | — | — | 11m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.07% | 99.07% | 3945 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.21% | 98.21% | 3835 ms | ↑ 1.15x | 0 | — | — | 30m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.47% | 76.47% | 2944 ms | ↑ 1.17x | 0 | — | — | 17m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1064 ms | → 1.00x | 0 | — | — | 12m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1592 ms | ↑ 1.07x | 0 | — | — | 10m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.47% | 98.18% | 98.18% | 1670 ms | ↑ 1.79x | 7 | 8m | 11d ago | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.66% | 99.66% | 1512 ms | ↑ 1.16x | 1 | 2h 60m | 17d ago | 13m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1896 ms | ↑ 1.22x | 0 | — | — | 30m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.73% | 99.73% | 633 ms | ↓ 0.42x | 1 | 0s | 29d ago | 30m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2609 ms | ↑ 1.23x | 1 | 0s | 16d ago | 28m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.93% | 89.93% | 1774 ms | → 0.99x | 0 | — | — | 19m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.81% | 99.81% | 1097 ms | ↑ 1.25x | 1 | 0s | 28d ago | 29m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 610 ms | ↑ 1.09x | 0 | — | — | 12m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1943 ms | ↑ 1.52x | 2 | 0s | 10d ago | 11m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.79% | 85.79% | 2884 ms | ↑ 1.25x | 0 | — | — | 14m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2215 ms | ↑ 1.18x | 0 | — | — | 11m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2353 ms | ↑ 1.34x | 0 | — | — | 14m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.07% | 99.07% | 946 ms | ↑ 1.31x | 0 | — | — | 20m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.62% | 97.62% | 2647 ms | ↑ 1.81x | 0 | — | — | 14m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.92% | 99.92% | 99.92% | 1717 ms | ↑ 1.15x | 1 | 0s | 19d ago | 10m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1699 ms | ↑ 1.31x | 1 | 0s | 11d ago | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.94% | 99.94% | 1875 ms | ↑ 1.66x | 1 | 0s | 16d ago | 11m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2212 ms | ↑ 1.21x | 0 | — | — | 11m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 67.99% | 82.02% | 82.02% | 1214 ms | → 0.96x | 2 | 4d 20h | 26d ago | 13m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.18% | 99.18% | 1238 ms | → 1.05x | 3 | 0s | 18d ago | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.00% | 99.00% | 3219 ms | ↑ 1.65x | 0 | — | — | 20m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 89.33% | 89.33% | 1594 ms | ↑ 1.30x | 0 | — | — | 13m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.81% | 99.81% | 99.81% | 748 ms | ↑ 1.17x | 1 | 1h | 25d ago | 11m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.85% | 99.85% | 99.85% | 1542 ms | ↓ 0.90x | 1 | 0s | 11d ago | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.90% | 99.90% | 1520 ms | ↑ 1.17x | 2 | 11m | 26d ago | 11m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.06% | 25.06% | 2405 ms | ↑ 1.56x | 0 | — | — | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1626 ms | ↑ 1.36x | 0 | — | — | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2741 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 823 ms | ↑ 1.26x | 0 | — | — | 29m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.27% | 98.27% | 1844 ms | ↑ 1.22x | 1 | 0s | 7d ago | 14m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.17% | 98.17% | 984 ms | ↓ 0.75x | 0 | — | — | 18m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 723 ms | ↑ 1.10x | 0 | — | — | 30m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.74% | 99.74% | 1627 ms | → 1.02x | 4 | 8m | 19d ago | 24m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.76% | 98.76% | 4774 ms | → 1.04x | 0 | — | — | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2350 ms | ↓ 0.68x | 0 | — | — | 29m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.73% | 32.43% | 32.43% | 2315 ms | ↑ 1.13x | 8 | 2h 29m | 11d ago | 27m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.48% | 97.94% | 97.94% | 2039 ms | ↑ 1.15x | 126 | 29m | 15d ago | 28m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2751 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.36% | 99.36% | 2526 ms | ↑ 1.28x | 2 | 0s | 16d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 43.15% | 43.15% | 912 ms | → 0.99x | 1 | 0s | 15d ago | 30m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1152 ms | → 0.99x | 0 | — | — | 29m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.47% | 99.47% | 2973 ms | → 1.02x | 1 | 0s | 28d ago | 24m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1487 ms | → 1.04x | 2 | 14m | 19d ago | 17m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 20.36% | 20.36% | 734 ms | → 0.97x | 1 | 0s | 12d ago | 29m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2701 ms | ↑ 1.12x | 0 | — | — | 19m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.70% | 99.70% | 748 ms | ↓ 0.57x | 0 | — | — | 14m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 566 ms | ↑ 1.12x | 0 | — | — | 11m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 770 ms | → 1.04x | 0 | — | — | 29m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.16% | 62.16% | 1634 ms | → 1.02x | 0 | — | — | 19m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.80% | 86.71% | 86.71% | 700 ms | ↓ 0.80x | 7 | 1d 2h | 8d ago | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 83.53% | 83.53% | 1584 ms | ↑ 1.42x | 3 | 8h 40m | 16d ago | 14m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2856 ms | ↑ 1.05x | 0 | — | — | 29m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.78% | 98.78% | 1526 ms | ↓ 0.77x | 2 | 2h 55m | 11d ago | 13m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.47% | 89.47% | 2092 ms | ↑ 1.20x | 1 | 0s | 12d ago | 28m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.54% | 22.87% | 22.87% | 1717 ms | ↑ 1.07x | 4 | 30m | 9d ago | 20m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.54% | 98.96% | 98.96% | 2711 ms | ↓ 0.66x | 4 | 30m | 9d ago | 18m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.51% | 80.51% | 2218 ms | ↑ 1.09x | 1 | 13h | 22d ago | 30m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.50% | 88.50% | 821 ms | ↓ 0.80x | 2 | 0s | 11d ago | 12m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1248 ms | ↑ 1.14x | 1 | 0s | 15d ago | 28m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1096 ms | → 0.98x | 0 | — | — | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.89% | 99.66% | 99.66% | 1386 ms | ↑ 1.22x | 2 | 0s | 11d ago | 28m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 46.94% | 46.94% | 639 ms | → 1.03x | 1 | 0s | 15d ago | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1772 ms | ↑ 1.46x | 0 | — | — | 11m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 920 ms | → 1.03x | 1 | 0s | 28d ago | 14m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.59% | 98.59% | 1767 ms | ↑ 1.15x | 0 | — | — | 14m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.71% | 98.23% | 98.23% | 449 ms | ↓ 0.54x | 1 | 1h 40m | 7d ago | 14m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.73% | 96.73% | 1303 ms | ↑ 1.39x | 2 | 45m | 14d ago | 14m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.88% | 70.88% | 1499 ms | ↑ 1.27x | 0 | — | — | 19m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1340 ms | ↑ 1.11x | 0 | — | — | 11m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1362 ms | → 0.97x | 0 | — | — | 10m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.61% | 81.61% | 3446 ms | ↑ 1.44x | 1 | 0s | 15d ago | 19m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2230 ms | ↑ 1.14x | 0 | — | — | 28m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 765 ms | ↓ 0.39x | 0 | — | — | 11m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 545 ms | ↓ 0.69x | 1 | 0s | 16d ago | 24m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 52.66% | 26.67% | 26.67% | 2867 ms | ↑ 1.08x | 2 | 7d 3h | 16d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.84% | 85.84% | 1353 ms | ↑ 1.78x | 0 | — | — | 28m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.47% | 91.47% | 514 ms | ↑ 1.24x | 0 | — | — | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2669 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.66% | 98.89% | 98.89% | 3212 ms | ↑ 1.15x | 6 | 0s | 9d ago | 30m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.79% | 96.79% | 1534 ms | ↑ 1.06x | 0 | — | — | 19m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.88% | 99.88% | 1835 ms | ↑ 1.42x | 1 | 0s | 28d ago | 11m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 3183 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1597 ms | → 1.01x | 1 | 0s | 13d ago | 13m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4178 ms | ↑ 1.14x | 0 | — | — | 12m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.52% | 59.52% | 801 ms | → 1.05x | 0 | — | — | 19m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.94% | 98.51% | 98.51% | 1957 ms | ↑ 1.20x | 1 | 0s | 8d ago | 18m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 42.96% | 42.96% | 3311 ms | ↑ 1.26x | 0 | — | — | 19m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.41% | 99.41% | 99.41% | 3158 ms | → 1.01x | 1 | 1h 58m | 14d ago | 11m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.24% | 99.24% | 4335 ms | ↑ 1.15x | 1 | 0s | 27d ago | 24m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3484 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2683 ms | ↑ 1.23x | 0 | — | — | 18m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.29% | 92.38% | 92.38% | 2772 ms | → 0.99x | 2 | 19h 25m | 24d ago | 17m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.28% | 99.28% | 2399 ms | ↑ 1.12x | 0 | — | — | 19m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.41% | 80.41% | 1314 ms | ↓ 0.65x | 0 | — | — | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 1.00x | 1 | 0s | 28d ago | 29m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2888 ms | ↑ 1.21x | 0 | — | — | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1375 ms | ↓ 0.87x | 0 | — | — | 12m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2245 ms | ↑ 1.09x | 1 | 0s | 7d ago | 25m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3439 ms | → 1.05x | 1 | 0s | 10d ago | 29m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.36% | 91.84% | 91.84% | 2816 ms | ↓ 0.93x | 11 | 0s | 16d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 80.85% | 80.85% | 2764 ms | ↑ 1.25x | 0 | — | — | 19m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.15% | 87.15% | 2885 ms | ↓ 0.66x | 0 | — | — | 19m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 99.94% | 99.94% | 1653 ms | ↑ 1.21x | 0 | — | — | 12m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1372 ms | ↑ 1.10x | 0 | — | — | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.67% | 98.67% | 840 ms | ↑ 1.19x | 0 | — | — | 17m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 24.76% | 24.76% | 915 ms | ↑ 1.68x | 0 | — | — | 19m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.66% | 97.66% | 495 ms | ↓ 0.45x | 1 | 0s | 13d ago | 14m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 932 ms | ↑ 1.08x | 0 | — | — | 17m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 96.51% | 38.94% | 38.94% | 839 ms | ↓ 0.87x | 1 | 22h 40m | 30d ago | 29m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.91% | 98.91% | 1246 ms | ↑ 1.10x | 1 | 5h 60m | 25d ago | 28m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.18% | 21.18% | 1582 ms | ↑ 1.24x | 0 | — | — | 28m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 644 ms | ↓ 0.51x | 0 | — | — | 12m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.56% | 99.56% | 2972 ms | ↑ 1.70x | 1 | 0s | 9d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3290 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 470 ms | ↓ 0.62x | 0 | — | — | 12m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.62% | 93.62% | 4696 ms | → 1.04x | 0 | — | — | 29m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.60% | 99.60% | 2102 ms | ↑ 1.16x | 1 | 1h 20m | 26d ago | 28m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.27% | 99.27% | 1027 ms | ↑ 1.13x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1531 ms | → 0.97x | 0 | — | — | 12m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2697 ms | ↑ 1.51x | 0 | — | — | 30m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1851 ms | ↑ 1.17x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 505 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 57.67% | 88.75% | 88.75% | 2039 ms | ↑ 1.24x | 1 | 12d 20h | 22d ago | 28m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 97.31% | 46.13% | 46.13% | 3580 ms | ↑ 1.23x | 28 | 16m | 8d ago | 29m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.85% | 98.85% | 2834 ms | → 1.01x | 0 | — | — | 14m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.81% | 96.81% | 3354 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.82% | 99.82% | 901 ms | ↓ 0.90x | 1 | 20m | 27d ago | 14m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.09% | 89.09% | 2626 ms | ↑ 1.31x | 0 | — | — | 18m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.84% | 99.84% | 1111 ms | ↓ 0.89x | 0 | — | — | 14m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1710 ms | → 0.99x | 0 | — | — | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2120 ms | ↑ 1.09x | 0 | — | — | 29m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1929 ms | ↑ 1.12x | 0 | — | — | 30m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1599 ms | → 1.01x | 1 | 0s | 19d ago | 11m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1373 ms | ↑ 1.08x | 0 | — | — | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1662 ms | → 1.04x | 0 | — | — | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.95% | 84.95% | 1846 ms | → 0.96x | 1 | 0s | 24d ago | 25m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.25% | 98.25% | 2752 ms | ↑ 1.27x | 2 | 0s | 27d ago | 14m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.40% | 92.40% | 4509 ms | ↑ 1.20x | 2 | 25m | 14d ago | 31m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2449 ms | ↑ 1.56x | 1 | 0s | 12d ago | 11m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.12% | 97.42% | 97.42% | 1764 ms | ↑ 1.18x | 11 | 11m | 15d ago | 13m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.83% | 97.83% | 3709 ms | ↑ 1.63x | 1 | 0s | 19d ago | 13m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 94.65% | 94.65% | 94.65% | 1478 ms | → 0.98x | 4 | 6h 14m | 8d ago | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.85% | 98.85% | 1476 ms | ↑ 1.24x | 0 | — | — | 19m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.76% | 98.76% | 1875 ms | → 1.02x | 0 | — | — | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.63% | 99.63% | 3081 ms | ↑ 1.28x | 0 | — | — | 12m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1184 ms | ↑ 1.48x | 0 | — | — | 12m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.68% | 98.68% | 1269 ms | ↑ 1.45x | 4 | 7m | 12d ago | 17m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.77% | 99.77% | 99.77% | 1388 ms | → 1.01x | 2 | 0s | 7d ago | 11m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2688 ms | ↑ 1.27x | 0 | — | — | 11m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.70% | 97.70% | 97.70% | 178 ms | ↓ 0.16x | 2 | 6h 36m | 16d ago | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.32% | 31.32% | 1344 ms | ↑ 1.20x | 0 | — | — | 27m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1670 ms | ↑ 1.43x | 0 | — | — | 18m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 49.59% | 49.59% | 49.59% | 1503 ms | ↓ 0.91x | 1 | 13d 23h | 24d ago | 10m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1921 ms | ↑ 1.28x | 0 | — | — | 27m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.99% | 88.99% | 4194 ms | ↑ 1.31x | 0 | — | — | 19m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2063 ms | ↑ 1.27x | 1 | 0s | 15d ago | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 21.18% | 21.18% | 2172 ms | → 0.99x | 0 | — | — | 29m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 645 ms | ↓ 0.79x | 0 | — | — | 12m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.30% | 97.30% | 2881 ms | ↑ 1.35x | 0 | — | — | 14m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2506 ms | ↑ 1.16x | 0 | — | — | 27m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1335 ms | ↑ 1.08x | 2 | 10m | 15d ago | 29m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 20.97% | 20.97% | 2324 ms | ↑ 1.25x | 0 | — | — | 20m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.72% | 99.72% | 2742 ms | ↓ 0.71x | 4 | 30m | 17d ago | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2914 ms | ↑ 1.09x | 0 | — | — | 16m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2172 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2070 ms | → 1.02x | 0 | — | — | 11m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.48% | 99.62% | 99.62% | 2495 ms | ↑ 1.12x | 1 | 3h 60m | 8d ago | 27m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 1785 ms | ↓ 0.78x | 0 | — | — | 27m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 326 ms | → 0.98x | 0 | — | — | 11m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.71% | 98.71% | 1570 ms | ↑ 1.19x | 0 | — | — | 14m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.15% | 99.15% | 1860 ms | ↑ 1.09x | 1 | 0s | 22d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 666 ms | ↑ 1.10x | 0 | — | — | 28m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 560 ms | → 1.04x | 0 | — | — | 10m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 96.91% | 99.59% | 99.59% | 4145 ms | ↑ 1.22x | 3 | 6h 10m | 3d ago | 30m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.89% | 99.73% | 99.73% | 3272 ms | ↑ 1.06x | 2 | 0s | 2d ago | 29m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.76% | 99.14% | 99.71% | 99.71% | 316 ms | ↑ 1.51x | 10 | 10m | 2d ago | 29m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.76% | 99.54% | 99.26% | 99.26% | 2176 ms | ↑ 1.28x | 4 | 22m | 5d ago | 30m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 98.63% | 99.74% | 99.74% | 2115 ms | ↑ 1.15x | 4 | 1h 38m | 5d ago | 29m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.76% | 99.94% | 99.60% | 99.60% | 963 ms | → 1.02x | 1 | 0s | 6h ago | 29m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.89% | 45.76% | 45.76% | 1394 ms | ↑ 1.06x | 2 | 0s | 6d ago | 29m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.76% | 99.77% | 62.92% | 62.92% | 2904 ms | ↑ 1.07x | 4 | 0s | 5d ago | 29m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.76% | 99.89% | 26.36% | 26.36% | 2661 ms | ↑ 1.19x | 2 | 0s | 3d ago | 31m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.75% | 99.94% | 99.98% | 99.98% | 574 ms | → 1.00x | 1 | 0s | 3d ago | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.75% | 99.94% | 99.75% | 99.75% | 3210 ms | ↑ 1.12x | 1 | 0s | 3d ago | 26m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.75% | 99.43% | 99.00% | 99.00% | 4035 ms | ↑ 1.05x | 9 | 2m | 3d ago | 27m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.75% | 99.94% | 99.53% | 99.53% | 2202 ms | → 1.03x | 1 | 0s | 3d ago | 26m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.75% | 99.94% | 31.68% | 31.68% | 1230 ms | ↑ 1.09x | 1 | 0s | 3d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.75% | 99.66% | 99.90% | 99.90% | 908 ms | → 1.04x | 4 | 10m | 3d ago | 26m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.75% | 99.43% | 99.17% | 99.17% | 4282 ms | ↑ 1.06x | 9 | 2m | 3d ago | 27m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.75% | 99.89% | 99.87% | 99.87% | 3055 ms | ↑ 1.06x | 2 | 0s | 3d ago | 26m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.75% | 99.85% | 15.03% | 15.03% | 2674 ms | → 1.02x | 1 | 0s | 2d ago | 26m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.71% | 79.76% | 79.76% | 1852 ms | ↓ 0.92x | 5 | 0s | 2d ago | 25m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.89% | 21.19% | 21.19% | 1948 ms | ↑ 1.53x | 2 | 0s | 2d ago | 26m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.88% | 22.83% | 22.83% | 2388 ms | ↑ 1.29x | 2 | 0s | 2d ago | 25m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.88% | 99.80% | 99.80% | 2110 ms | ↑ 1.08x | 2 | 0s | 2d ago | 25m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.69% | 98.69% | 1038 ms | ↓ 0.87x | 6 | 0s | 5d ago | 19m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.54% | 97.54% | 2386 ms | ↑ 1.19x | 1 | 0s | 5d ago | 20m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.71% | 67.53% | 67.53% | 1363 ms | → 0.97x | 4 | 5m | 5d ago | 19m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 48.94% | 48.94% | 2146 ms | ↑ 1.33x | 2 | 0s | 5d ago | 20m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.42% | 53.66% | 53.66% | 963 ms | ↓ 0.88x | 6 | 20m | 5d ago | 20m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.75% | 63.75% | 635 ms | ↓ 0.92x | 3 | 0s | 5d ago | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.59% | 90.59% | 2270 ms | ↑ 1.09x | 2 | 0s | 5d ago | 19m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.71% | 21.07% | 21.07% | 582 ms | ↓ 0.37x | 4 | 8m | 5d ago | 20m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 99.75% | 29.39% | 32.61% | 32.61% | 2732 ms | → 1.02x | 2 | 10d 14h | 5d ago | 19m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 23.23% | 23.23% | 658 ms | ↓ 0.40x | 2 | 0s | 5d ago | 20m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.75% | 99.77% | 92.90% | 92.90% | 1340 ms | ↓ 0.84x | 4 | 0s | 2d ago | 18m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.75% | 88.30% | 36.70% | 36.70% | 1955 ms | → 1.04x | 14 | 5h 29m | 7d ago | 19m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.23% | 96.23% | 2435 ms | ↑ 1.41x | 1 | 0s | 5d ago | 20m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.83% | 22.08% | 22.08% | 1272 ms | ↑ 1.11x | 3 | 0s | 5d ago | 20m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.64% | 62.64% | 2728 ms | ↑ 1.17x | 1 | 0s | 5d ago | 19m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.26% | 96.72% | 96.72% | 4576 ms | ↑ 1.11x | 12 | 43m | 5d ago | 20m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.75% | 99.77% | 23.68% | 23.68% | 1621 ms | → 1.04x | 4 | 0s | 6d ago | 20m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2322 ms | ↑ 1.12x | 2 | 0s | 5d ago | 19m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.41% | 98.41% | 2533 ms | ↑ 1.29x | 1 | 0s | 7d ago | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.66% | 96.66% | 3353 ms | ↑ 1.40x | 1 | 0s | 6d ago | 20m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 22.96% | 22.96% | 3997 ms | ↑ 1.46x | 1 | 0s | 6d ago | 20m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.36% | 97.66% | 97.66% | 2215 ms | ↑ 1.10x | 9 | 7m | 3d ago | 17m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.06% | 99.06% | 686 ms | ↑ 1.37x | 1 | 0s | 3d ago | 17m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.60% | 98.60% | 2605 ms | ↓ 0.64x | 1 | 0s | 3d ago | 17m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 75.71% | 75.71% | 977 ms | ↓ 0.90x | 1 | 0s | 3d ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 97.20% | 97.88% | 97.88% | 4492 ms | ↑ 1.12x | 24 | 28m | 2d ago | 16m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.75% | 97.32% | 98.39% | 98.39% | 4119 ms | ↑ 1.15x | 19 | 41m | 2d ago | 16m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 99.36% | 96.51% | 96.51% | 2098 ms | → 1.01x | 2 | 1h 35m | 4d ago | 14m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.75% | 99.47% | 99.52% | 99.52% | 793 ms | ↓ 0.49x | 4 | 35m | 3d ago | 11m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.94% | 99.94% | 99.94% | 2531 ms | ↑ 1.38x | 1 | 0s | 6d ago | 12m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.94% | 99.94% | 1725 ms | → 1.00x | 1 | 0s | 4d ago | 12m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 99.88% | 99.00% | 99.00% | 3004 ms | → 1.04x | 2 | 0s | 7d ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.75% | 88.38% | 93.26% | 93.26% | 895 ms | ↓ 0.47x | 84 | 31m | 2d ago | 12m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.75% | 99.88% | 99.88% | 99.88% | 2099 ms | ↑ 1.05x | 1 | 0s | 1d ago | 11m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.82% | 98.03% | 98.03% | 624 ms | ↓ 0.82x | 3 | 0s | 7d ago | 14m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.50% | 99.50% | 99.50% | 968 ms | ↓ 0.90x | 3 | 30m | 2d ago | 12m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.75% | 99.94% | 99.94% | 99.94% | 2639 ms | ↑ 1.53x | 1 | 0s | 3d ago | 11m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.75% | 99.59% | 99.58% | 99.58% | 1092 ms | ↓ 0.76x | 4 | 15m | 7d ago | 10m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.77% | 99.85% | 99.85% | 1418 ms | ↑ 1.27x | 2 | 30m | 3d ago | 11m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.50% | 99.83% | 68.52% | 68.52% | 1636 ms | ↑ 1.29x | 3 | 0s | 1d ago | 19m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.50% | 99.01% | 91.59% | 91.59% | 1495 ms | → 1.03x | 16 | 2m | 2d ago | 19m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.50% | 99.88% | 96.87% | 96.87% | 849 ms | ↑ 1.16x | 2 | 0s | 6d ago | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.50% | 99.88% | 98.90% | 98.90% | 332 ms | ↑ 1.11x | 1 | 29m | 3d ago | 17m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.50% | 78.13% | 92.49% | 92.49% | 4635 ms | ↑ 1.67x | 4 | 1d 14h | 2d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.50% | 99.36% | 99.75% | 99.75% | 4602 ms | ↑ 1.27x | 7 | 17m | 2d ago | 16m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.50% | 99.18% | 96.88% | 96.88% | 1550 ms | → 0.96x | 6 | 35m | 5d ago | 14m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.49% | 99.18% | 98.74% | 98.74% | 1394 ms | ↓ 0.61x | 4 | 60m | 6d ago | 13m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.49% | 99.82% | 99.65% | 99.65% | 1989 ms | ↓ 0.66x | 3 | 0s | 7d ago | 11m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.49% | 99.88% | 97.81% | 97.81% | 507 ms | ↓ 0.89x | 2 | 0s | 22h ago | 11m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.49% | 99.88% | 99.94% | 99.94% | 2533 ms | ↑ 1.33x | 1 | 21m | 21h ago | 12m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.49% | 99.18% | 98.78% | 98.78% | 2561 ms | ↑ 1.17x | 6 | 40m | 3d ago | 12m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.27% | 99.60% | 21.16% | 21.16% | 2286 ms | → 1.03x | 7 | 0s | 23h ago | 29m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.27% | 99.60% | 85.75% | 85.75% | 2420 ms | → 1.04x | 7 | 0s | 16h ago | 29m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.26% | 97.13% | 20.51% | 20.51% | 1181 ms | ↓ 0.89x | 47 | 1m | 3d ago | 27m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.26% | 98.28% | 49.06% | 49.06% | 3446 ms | ↑ 1.20x | 8 | 1h 3m | 2d ago | 26m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 99.26% | 95.81% | 19.30% | 19.30% | 2213 ms | → 0.99x | 68 | 2m | 1d ago | 26m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.26% | 98.73% | 19.41% | 19.41% | 3785 ms | ↑ 1.21x | 10 | 31m | 5d ago | 24m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.26% | 99.65% | 21.07% | 21.07% | 4635 ms | ↑ 1.26x | 5 | 6m | 2d ago | 24m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.26% | 99.77% | 82.58% | 82.58% | 2623 ms | ↑ 1.23x | 4 | 0s | 20h ago | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.26% | 99.65% | 90.74% | 90.74% | 791 ms | ↓ 0.92x | 6 | 0s | 5d ago | 19m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.26% | 99.48% | 68.94% | 68.94% | 1860 ms | ↑ 1.40x | 7 | 9m | 4d ago | 19m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.26% | 99.77% | 99.82% | 99.82% | 3016 ms | ↓ 0.65x | 4 | 0s | 5d ago | 20m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.25% | 99.83% | 98.00% | 98.00% | 4335 ms | ↑ 1.13x | 2 | 10m | 19h ago | 16m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.24% | 97.49% | 98.71% | 98.71% | 834 ms | ↑ 1.29x | 8 | 1h 52m | 1d ago | 13m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.24% | 99.58% | 99.58% | 99.58% | 377 ms | ↓ 0.85x | 4 | 5m | 2d ago | 12m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.24% | 99.59% | 86.20% | 86.20% | 1554 ms | ↓ 0.65x | 6 | 5m | 3d ago | 11m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.24% | 96.14% | 97.54% | 97.54% | 588 ms | ↓ 0.70x | 3 | 8h 24m | 4d ago | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.24% | 98.12% | 98.12% | 98.12% | 2410 ms | ↓ 0.94x | 12 | 9m | 3d ago | 11m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.02% | 99.48% | 96.09% | 96.09% | 3347 ms | ↑ 1.11x | 10 | 0s | 5s ago | 30m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.02% | 99.54% | 55.99% | 55.99% | 1800 ms | ↑ 1.18x | 8 | 0s | 1d ago | 26m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.02% | 99.20% | 69.30% | 69.30% | 3953 ms | → 1.01x | 11 | 6m | 2d ago | 26m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (50)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.99% | 99.77% | 80.04% | 80.04% | 1982 ms | → 1.04x | 2 | 30m | 2d ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.76% | 98.14% | 96.01% | 96.01% | 3868 ms | ↑ 1.26x | 4 | 3h 3m | 2d ago | 18m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.76% | 98.49% | 86.55% | 86.55% | 4624 ms | ↑ 1.07x | 25 | 1m | 2d ago | 20m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.76% | 99.30% | 98.85% | 98.85% | 2074 ms | ↑ 1.26x | 5 | 36m | 4d ago | 18m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.74% | 99.71% | 93.18% | 93.18% | 33 ms | → 1.00x | 1 | 1h 22m | 2d ago | 14m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.74% | 98.71% | 98.61% | 98.61% | 3042 ms | ↑ 1.28x | 22 | 0s | 9h ago | 11m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.74% | 99.71% | 96.42% | 96.42% | 1442 ms | ↑ 1.35x | 1 | 2h 1m | 7d ago | 11m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.53% | 99.03% | 98.36% | 98.36% | 4487 ms | → 1.03x | 17 | 0s | 2d ago | 31m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.52% | 98.62% | 98.91% | 98.91% | 1734 ms | → 0.97x | 17 | 12m | 12h ago | 25m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.48% | 99.42% | 99.34% | 99.34% | 4876 ms | ↑ 1.31x | 8 | 6m | 2d ago | 13m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.26% | 99.25% | 63.18% | 63.18% | 1208 ms | ↓ 0.48x | 3 | 1h 32m | 5d ago | 20m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.24% | 99.48% | 54.99% | 54.99% | 744 ms | ↑ 1.08x | 8 | 4m | 8h ago | 17m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.23% | 98.71% | 98.71% | 98.71% | 3142 ms | → 0.99x | 1 | 2h 37m | 5d ago | 11m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 98.04% | 28.96% | 74.92% | 74.92% | 3865 ms | → 1.01x | 9 | 2d 8h | 13h ago | 31m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.04% | 98.40% | 86.00% | 86.00% | 4426 ms | → 0.99x | 27 | 1m | 1d ago | 27m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 97.98% | 98.25% | 92.51% | 92.51% | 827 ms | ↑ 1.12x | 15 | 23m | 3d ago | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.77% | 98.49% | 67.90% | 67.90% | 4800 ms | ↑ 1.06x | 23 | 4m | 17h ago | 19m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 97.74% | 97.32% | 98.73% | 98.73% | 2599 ms | ↑ 1.12x | 19 | 42m | 16h ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 97.56% | 98.91% | 99.58% | 99.58% | 3753 ms | ↓ 0.95x | 18 | 2m | 5d ago | 29m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.53% | 98.16% | 20.56% | 20.56% | 4552 ms | ↑ 1.15x | 32 | 0s | 1d ago | 24m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.49% | 96.33% | 84.27% | 84.27% | 4503 ms | → 1.00x | 53 | 6m | 5h ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.31% | 98.23% | 87.38% | 87.38% | 4373 ms | ↑ 1.21x | 31 | 0s | 2h ago | 31m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.24% | 99.07% | 99.62% | 99.62% | 2210 ms | ↑ 1.12x | 2 | 3h 20m | 6d ago | 17m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.24% | 82.51% | 82.98% | 82.98% | 4433 ms | ↓ 0.91x | 34 | 3h 27m | 2d ago | 15m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.98% | 98.37% | 52.51% | 52.51% | 4151 ms | ↑ 1.73x | 26 | 2m | 20h ago | 16m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.97% | 97.31% | 97.31% | 97.31% | 4641 ms | → 0.99x | 20 | 4m | 3h ago | 10m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.76% | 97.27% | 86.47% | 86.47% | 4616 ms | → 1.03x | 35 | 9m | 2d ago | 17m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 96.72% | 96.99% | 91.01% | 91.01% | 4481 ms | ↑ 1.20x | 15 | 33m | 2d ago | 13m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 96.46% | 91.57% | 91.57% | 91.57% | 4593 ms | → 1.01x | 24 | 1h 30m | 16h ago | 11m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.46% | 98.07% | 98.61% | 98.61% | 2389 ms | ↑ 1.40x | 7 | 1h 24m | 3d ago | 12m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.28% | 98.67% | 73.29% | 73.29% | 914 ms | → 0.96x | 11 | 33m | 2d ago | 19m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.07% | 97.07% | 74.93% | 74.93% | 4508 ms | ↑ 1.06x | 44 | 5m | 16h ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.07% | 98.05% | 96.54% | 96.54% | 1957 ms | ↑ 1.24x | 8 | 1h 15m | 2d ago | 26m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.20% | 97.49% | 96.75% | 96.75% | 1531 ms | → 0.95x | 4 | 4h 2m | 2d ago | 14m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.79% | 93.91% | 73.23% | 73.23% | 2120 ms | ↑ 1.22x | 16 | 1h 55m | 1d ago | 19m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 94.19% | 98.65% | 98.91% | 98.91% | 2120 ms | ↓ 0.72x | 4 | 1h 35m | 20h ago | 10m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.04% | 95.94% | 83.14% | 83.14% | 4858 ms | → 1.04x | 64 | 3m | 5h ago | 18m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 89.39% | 94.05% | 95.62% | 95.62% | 1809 ms | ↓ 0.79x | 13 | 3h 2m | 2d ago | 14m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.24% | 97.42% | 98.85% | 98.85% | 3680 ms | ↑ 1.21x | 2 | 8h 60m | 6d ago | 28m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.09% | 87.72% | 21.66% | 21.66% | 4441 ms | → 0.95x | 162 | 9m | 3h ago | 20m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 78.16% | 72.27% | 25.59% | 25.59% | 4580 ms | → 0.96x | 291 | 18m | 3h ago | 19m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 77.27% | 79.65% | 81.20% | 81.20% | 4291 ms | ↓ 0.93x | 145 | 36m | 1h ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.02% | 71.56% | 62.74% | 62.74% | 4816 ms | → 1.00x | 315 | 16m | 55m ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 65.28% | 75.49% | 96.70% | 96.70% | 4573 ms | ↑ 1.13x | 235 | 22m | 5h ago | 28m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 58.69% | 13.59% | 25.67% | 25.67% | 2360 ms | → 1.00x | 2 | 12d 23h | 2d ago | 14m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 57.04% | 13.24% | 64.61% | 64.61% | 2199 ms | → 1.00x | 2 | 13d 1h | 2d ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 55.09% | 47.60% | 32.42% | 32.42% | 2375 ms | ↑ 1.16x | 2 | 7d 22h | 8d ago | 20m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 39.95% | 48.20% | 31.77% | 31.77% | 1234 ms | ↑ 1.62x | 5 | 3d 3h | 2d ago | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 27.27% | 70.68% | 80.81% | 80.81% | 4966 ms | ↑ 2.29x | 134 | 1h 9m | 2h ago | 13m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 2.01% | 0.47% | 43.21% | 43.21% | 2367 ms | → 1.00x | 1 | 29d 20h | 30d ago | 16m ago |

</details>

<details open>
<summary><strong>🔴 Down (258)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.74% | 98.83% | 99.06% | 99.06% | 2338 ms | ↑ 1.45x | 12 | 18m | 43m ago | 12m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.80% | 96.49% | 98.48% | 98.48% | 4488 ms | ↑ 1.09x | 58 | 2m | 24m ago | 24m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 88.38% | 51.93% | 31.98% | 31.98% | 3177 ms | → 1.04x | 197 | 1h 21m | 2h ago | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.93% | 88.57% | 58.84% | 58.84% | 4243 ms | ↑ 1.06x | 155 | 8m | 45m ago | 15m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 84.17% | 96.27% | 97.65% | 97.65% | 2268 ms | ↑ 1.31x | 2 | 12h 40m | 1d ago | 16m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 77.78% | 94.44% | 91.10% | 91.10% | 1432 ms | ↑ 1.17x | 23 | 1h 21m | 4h ago | 10m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 60.88% | 90.73% | 98.67% | 98.67% | 3139 ms | ↑ 1.09x | 3 | 20h 47m | 3d ago | 30m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 58.56% | 46.41% | 47.63% | 47.63% | 507 ms | → 0.96x | 2 | 8d 1h | 3d ago | 19m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 41.16% | 48.68% | 44.79% | 44.79% | 691 ms | → 1.03x | 5 | 3d 2h | 4d ago | 12m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 40.45% | 48.49% | 66.69% | 66.69% | 690 ms | → 1.02x | 6 | 2d 13h | 4d ago | 19m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 18.09% | 80.81% | 86.05% | 86.05% | 1259 ms | ↑ 1.07x | 1 | 5d 15h | 6d ago | 29m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 17.93% | 80.61% | 89.39% | 89.39% | 2300 ms | ↑ 1.16x | 8 | 17h 6m | 6d ago | 12m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 7.58% | 77.34% | 86.87% | 86.87% | 1864 ms | ↓ 0.93x | 8 | 19h 53m | 6d ago | 12m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.71% | 1.66% | 57.49% | 57.49% | 2954 ms | → 0.99x | 30 | 23h 18m | 8h ago | 31m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.98% | 42.55% | 50.01% | 50.01% | 2844 ms | ↑ 1.34x | 10 | 1d 17h | 3d ago | 26m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 78.15% | 78.15% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.74% | 64.74% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.65% | 69.65% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 40.69% | 40.69% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 74.09% | 74.09% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 55.29% | 55.29% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.32% | 5.32% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.82% | 11.82% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 50.67% | 50.67% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 70.21% | 84.08% | 84.08% | — | — | 23 | 8h 56m | 9d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.21% | 3.21% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 49.53% | 85.71% | 85.71% | — | — | 1 | 15d 3h | 15d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 78.39% | 78.39% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.41% | 34.41% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 87.54% | 87.54% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.84% | 21.84% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 70.34% | 70.34% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 46.57% | 46.57% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.85% | 27.85% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 31.02% | 86.80% | 86.80% | — | — | 4 | 5d 3h | 21d ago | 29m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 78.76% | 78.76% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.33% | 59.33% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.76% | 72.76% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 21h | 15d ago | 30m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.71% | 13.71% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 46.03% | 46.03% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 89.38% | 89.38% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.47% | 31.47% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 59.94% | 78.32% | 78.32% | — | — | 1 | 11d 22h | 12d ago | 11m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 79.15% | 79.15% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 43.91% | 42.63% | 42.63% | — | — | 3 | 3d 21h | 12d ago | 13m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 31.45% | 83.46% | 83.46% | — | — | 1 | 20d 14h | 21d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.22% | 3.22% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 66.49% | 82.31% | 82.31% | — | — | 1 | 10d 1h | 10d ago | 11m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 79.00% | 79.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 27.95% | 27.95% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.02% | 49.02% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.94% | 1.94% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 86.50% | 86.50% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 41.51% | 41.51% | 41.51% | — | — | 1 | 16d 1h | 16d ago | 11m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 68.91% | 68.91% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 69.67% | 69.67% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 60.75% | 78.74% | 78.74% | — | — | 3 | 3d 21h | 12d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.92% | 27.92% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.58% | 51.58% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 47.11% | 47.11% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.76% | 22.76% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 22.78% | 79.10% | 79.10% | — | — | 4 | 5d 19h | 23d ago | 31m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 22.25% | 39.54% | 39.54% | — | — | 3 | 7d 19h | 23d ago | 26m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 3h | 21d ago | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 24.46% | 54.55% | 54.55% | — | — | 1 | 22d 20h | 23d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.05% | 54.05% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.85% | 4.85% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.19% | 62.19% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 78.71% | 78.71% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 46.32% | 74.59% | 74.59% | — | — | 1 | 16d 2h | 16d ago | 14m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.89% | 5.89% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 75.18% | 75.18% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 77.55% | 77.55% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.80% | 29.80% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 31.90% | 87.60% | 87.60% | — | — | 2 | 10d 4h | 20d ago | 18m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 24.30% | 24.30% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.63% | 21.63% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.00% | 50.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 25.35% | 25.35% | 25.35% | — | — | 2 | 5d 13h | 11d ago | 11m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 60.69% | 77.12% | 77.12% | — | — | 4 | 2d 22h | 12d ago | 13m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 60.22% | 82.33% | 82.33% | — | — | 13 | 21h 24m | 12d ago | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.89% | 49.89% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 20.42% | 20.89% | 20.89% | — | — | 8 | 1d 11h | 12d ago | 13m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.86% | 6.86% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 59.18% | 59.18% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.17% | 44.17% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 22.56% | 22.56% | 22.56% | — | — | 3 | 5d 10h | 16d ago | 13m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.13% | 40.13% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 63.19% | 77.75% | 77.75% | — | — | 4 | 2d 17h | 11d ago | 30m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 23.42% | 23.42% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 78.72% | 78.72% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.61% | 55.61% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 74.65% | 86.33% | 86.33% | — | — | 1 | 7d 15h | 8d ago | 12m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.93% | 36.93% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 15.08% | 69.37% | 69.37% | — | — | 2 | 12d 18h | 26d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 74.05% | 74.05% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 67.40% | 67.40% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.40% | 2.40% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.94% | 78.94% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.50% | 39.50% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 14.49% | 92.57% | 92.57% | — | — | 1 | 25d 17h | 26d ago | 25m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.71% | 78.71% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.98% | 30.98% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 78.62% | 78.62% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 46.15% | 46.15% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 19.83% | 19.83% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 41.34% | 41.34% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 76.40% | 76.40% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 60.57% | 60.57% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.84% | 25.84% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 21d ago | 12m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.97% | 74.97% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 21d ago | 13m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.91% | 45.91% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.97% | 2.97% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 3h | 21d ago | 12m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.01% | 41.01% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.45% | 73.45% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 5.85% | 39.56% | 39.56% | — | — | 2 | 14d 4h | 28d ago | 27m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.03% | 56.03% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 28.24% | 28.24% | 28.24% | — | — | 1 | 15d | 15d ago | 12m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 36.95% | 36.95% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 56.21% | 56.21% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 84.42% | 84.42% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 56.41% | 95.99% | 95.99% | — | — | 2 | 6d 10h | 13d ago | 29m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.87% | 26.87% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.23% | 11.23% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.89% | 22.89% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.30% | 50.30% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 89.38% | 89.38% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.92% | 50.92% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 1.17% | 69.28% | 69.28% | — | — | 1 | 29d 16h | 30d ago | 16m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.54% | 8.54% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.59% | 16.59% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.02% | 47.02% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 36.53% | 48.37% | 48.37% | — | — | 2 | 9d 12h | 19d ago | 17m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 19.12% | 19.12% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.41% | 52.41% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 90.45% | 90.45% | — | — | 1 | 14d 21h | 15d ago | 24m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.68% | 36.68% | — | — | 1 | 21d 3h | 21d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.58% | 20.58% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.87% | 30.87% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.27% | 5.27% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 75.28% | 75.28% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 85.78% | 85.78% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 6.26% | 52.91% | 52.91% | — | — | 1 | 28d 5h | 28d ago | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.81% | 78.81% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 60.66% | 60.66% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 71.23% | 71.23% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.64% | 77.64% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 22h | 15d ago | 12m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.53% | 18.53% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.80% | 56.80% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 37.77% | 37.77% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.87% | 3.87% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.32% | 32.32% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 65.16% | 65.16% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.31% | 23.31% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.96% | 6.96% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 25.76% | 25.76% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.22% | 64.22% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 34.06% | 34.06% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 60.75% | 78.39% | 78.39% | — | — | 3 | 3d 21h | 12d ago | 13m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.31% | 4.31% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 20h | 15d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 48.70% | 48.70% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 42.14% | 42.14% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 32.09% | 32.09% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.86% | 18.86% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 5.84% | 5.21% | 5.21% | — | — | 2 | 14d 4h | 28d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.75% | 10.75% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.07% | 17.07% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.77% | 15.77% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 28.25% | 28.25% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.32% | 9.32% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.37% | 7.37% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.76% | 0.76% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.32% | 4.32% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.01% | 5.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.43% | 47.43% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 40.19% | 40.19% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.78% | 78.78% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 67.41% | 67.41% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 42.49% | 42.49% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.97% | 78.97% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 47.29% | 47.29% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.33% | 39.33% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.54% | 1.54% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.23% | 18.23% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 3h | 21d ago | 12m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.82% | 76.82% | — | — | 1 | 29d 23h | 30d ago | 23m ago |

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
