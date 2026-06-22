# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 352 🟢 operational · 61 🟡 degraded · 258 🔴 down · 0 ⚫ unknown

_Updated 2026-06-22 09:14 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (352)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.25% | 98.25% | 833 ms | ↑ 1.24x | 1 | 0s | 25d ago | 27m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1467 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.94% | 93.94% | 2438 ms | ↑ 1.83x | 3 | 0s | 16d ago | 31m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 22.09% | 22.09% | 3281 ms | ↑ 1.56x | 4 | 0s | 12d ago | 33m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.49% | 97.49% | 4065 ms | ↑ 1.28x | 0 | — | — | 41m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 57.10% | 57.10% | 1669 ms | → 1.02x | 0 | — | — | 31m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.90% | 99.90% | 99.90% | 1236 ms | → 0.99x | 1 | 0s | 17d ago | 24m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.89% | 97.89% | 4015 ms | ↑ 1.29x | 1 | 0s | 25d ago | 38m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.83% | 98.83% | 2278 ms | ↑ 1.20x | 0 | — | — | 43m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.52% | 99.52% | 3688 ms | ↑ 1.12x | 0 | — | — | 43m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.33% | 99.33% | 283 ms | ↓ 0.29x | 0 | — | — | 26m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.40% | 95.40% | 2796 ms | ↑ 1.26x | 0 | — | — | 28m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2183 ms | ↑ 1.50x | 0 | — | — | 26m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.80% | 97.80% | 3404 ms | ↑ 1.39x | 0 | — | — | 28m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.51% | 92.51% | 3574 ms | ↑ 1.58x | 1 | 50m | 11d ago | 44m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1464 ms | ↑ 1.42x | 0 | — | — | 24m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.69% | 98.69% | 1525 ms | ↑ 1.21x | 0 | — | — | 28m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.60% | 97.03% | 97.03% | 1626 ms | → 1.02x | 1 | 8h 47m | 13d ago | 28m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 98.01% | 96.46% | 96.46% | 1777 ms | ↑ 1.16x | 11 | 49m | 9d ago | 26m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.93% | 98.93% | 535 ms | ↓ 0.45x | 0 | — | — | 26m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.28% | 38.28% | 923 ms | ↑ 1.56x | 0 | — | — | 38m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1687 ms | ↑ 1.21x | 0 | — | — | 24m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1471 ms | ↑ 1.46x | 2 | 10m | 13d ago | 28m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 97.03% | 97.03% | 2998 ms | ↑ 1.27x | 1 | 0s | 27d ago | 31m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.89% | 98.89% | 1044 ms | ↑ 1.16x | 2 | 15m | 13d ago | 40m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1433 ms | ↑ 1.64x | 0 | — | — | 25m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 87.81% | 87.81% | 2088 ms | ↑ 1.79x | 1 | 3h 51m | 24d ago | 29m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.59% | 99.71% | 99.71% | 1854 ms | ↓ 0.89x | 3 | 39m | 11d ago | 26m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.43% | 98.43% | 4410 ms | ↑ 1.40x | 0 | — | — | 29m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.28% | 98.28% | 550 ms | ↑ 1.64x | 0 | — | — | 27m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.26% | 86.26% | 2520 ms | ↑ 1.73x | 0 | — | — | 28m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1141 ms | ↑ 1.09x | 1 | 0s | 9d ago | 25m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.76% | 97.76% | 1449 ms | ↑ 1.05x | 0 | — | — | 31m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.91% | 97.91% | 4198 ms | ↑ 1.10x | 1 | 0s | 28d ago | 42m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.43% | 96.43% | 1062 ms | → 1.03x | 0 | — | — | 30m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.06% | 85.67% | 85.67% | 1613 ms | → 0.97x | 9 | 6h 19m | 13d ago | 28m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1093 ms | → 0.99x | 0 | — | — | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2200 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.67% | 99.67% | 99.67% | 1590 ms | → 1.03x | 2 | 0s | 7d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1137 ms | ↑ 1.06x | 2 | 0s | 13d ago | 28m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.83% | 99.83% | 422 ms | ↓ 0.39x | 1 | 51m | 22d ago | 24m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.85% | 99.85% | 4338 ms | ↑ 1.29x | 1 | 0s | 28d ago | 38m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.36% | 97.63% | 97.63% | 2174 ms | ↑ 1.16x | 9 | 7m | 7d ago | 31m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.72% | 99.72% | 802 ms | ↓ 0.84x | 1 | 0s | 21d ago | 28m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1271 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.92% | 97.92% | 1144 ms | ↓ 0.47x | 13 | 48m | 19d ago | 28m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.75% | 99.75% | 99.75% | 1895 ms | ↑ 1.11x | 1 | 30m | 9d ago | 24m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1156 ms | ↓ 0.73x | 0 | — | — | 26m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 474 ms | ↓ 0.56x | 0 | — | — | 26m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.81% | 99.81% | 564 ms | → 0.98x | 4 | 0s | 12d ago | 26m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.80% | 96.80% | 664 ms | ↓ 0.91x | 0 | — | — | 31m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.07% | 98.20% | 98.20% | 2059 ms | ↑ 1.05x | 1 | 21h 30m | 18d ago | 24m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1150 ms | → 1.00x | 0 | — | — | 24m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.55% | 55.55% | 1948 ms | ↑ 1.35x | 0 | — | — | 33m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 97.96% | 97.96% | 97.96% | 962 ms | → 1.04x | 2 | 4h 33m | 11d ago | 24m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 46.14% | 48.08% | 48.08% | 502 ms | ↓ 0.91x | 1 | 16d 4h | 30d ago | 33m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1824 ms | ↑ 1.57x | 0 | — | — | 25m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3521 ms | → 0.97x | 0 | — | — | 38m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.19% | 97.19% | 1008 ms | ↓ 0.71x | 0 | — | — | 38m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.87% | 98.87% | 98.87% | 574 ms | ↓ 0.65x | 3 | 1h 47m | 10d ago | 24m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.13% | 99.13% | 1384 ms | → 0.97x | 2 | 0s | 9d ago | 31m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.78% | 83.78% | 3450 ms | ↑ 1.48x | 0 | — | — | 32m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 355 ms | ↓ 0.48x | 0 | — | — | 26m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.75% | 98.75% | 2803 ms | ↑ 1.33x | 0 | — | — | 29m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4323 ms | ↑ 1.37x | 0 | — | — | 25m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 93.02% | 93.02% | 734 ms | ↓ 0.94x | 1 | 0s | 28d ago | 33m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.71% | 98.71% | 1188 ms | ↑ 1.21x | 0 | — | — | 28m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.84% | 99.84% | 632 ms | ↑ 1.49x | 1 | 0s | 19d ago | 30m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.42% | 99.42% | 728 ms | ↓ 0.59x | 0 | — | — | 26m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1781 ms | → 1.03x | 0 | — | — | 24m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 98.00% | 98.00% | 1034 ms | ↓ 0.40x | 2 | 0s | 12d ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.79% | 89.81% | 89.81% | 1375 ms | ↑ 1.36x | 2 | 11h 15m | 15d ago | 28m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2352 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.91% | 76.91% | 1325 ms | ↑ 1.35x | 0 | — | — | 32m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 940 ms | → 0.96x | 0 | — | — | 25m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.26% | 98.26% | 2670 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 927 ms | → 0.96x | 0 | — | — | 24m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2587 ms | ↑ 1.63x | 0 | — | — | 25m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.63% | 82.63% | 2450 ms | ↑ 1.43x | 2 | 0s | 13d ago | 32m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.06% | 98.06% | 2990 ms | ↑ 1.81x | 0 | — | — | 33m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.87% | 99.87% | 2302 ms | ↑ 1.25x | 0 | — | — | 26m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.18% | 61.18% | 1162 ms | ↓ 0.76x | 0 | — | — | 32m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.23% | 64.23% | 1880 ms | ↑ 1.23x | 0 | — | — | 33m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.24% | 99.24% | 2060 ms | ↑ 1.18x | 0 | — | — | 32m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 891 ms | ↓ 0.47x | 0 | — | — | 30m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 579 ms | ↓ 0.80x | 1 | 0s | 23d ago | 32m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.08% | 88.08% | 88.08% | 2546 ms | ↓ 0.93x | 5 | 15h 33m | 11d ago | 24m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 20.52% | 20.52% | 2011 ms | ↑ 1.79x | 1 | 0s | 18d ago | 38m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2590 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2513 ms | ↑ 1.20x | 0 | — | — | 24m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.06% | 99.06% | 3981 ms | ↑ 1.11x | 1 | 29m | 28d ago | 42m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 96.97% | 99.59% | 99.59% | 4172 ms | ↑ 1.36x | 2 | 9h 15m | 8d ago | 43m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.19% | 98.19% | 3836 ms | ↑ 1.20x | 0 | — | — | 43m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.01% | 76.01% | 3139 ms | ↑ 1.37x | 0 | — | — | 31m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 974 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1416 ms | → 1.00x | 0 | — | — | 24m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.19% | 98.08% | 98.08% | 1680 ms | ↑ 2.03x | 8 | 1h 60m | 8d ago | 24m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.64% | 99.64% | 1546 ms | ↑ 1.27x | 1 | 2h 60m | 15d ago | 26m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1798 ms | ↑ 1.28x | 0 | — | — | 43m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 630 ms | ↓ 0.38x | 1 | 0s | 26d ago | 43m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.63% | 99.63% | 2511 ms | ↑ 1.26x | 1 | 0s | 13d ago | 41m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.78% | 89.78% | 1663 ms | ↓ 0.95x | 0 | — | — | 32m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 79.63% | 79.63% | 2058 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.80% | 99.80% | 944 ms | ↑ 1.23x | 1 | 0s | 25d ago | 42m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 628 ms | ↑ 1.17x | 0 | — | — | 26m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.93% | 99.93% | 2049 ms | ↑ 1.71x | 2 | 0s | 7d ago | 25m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.35% | 85.35% | 2768 ms | ↑ 1.32x | 0 | — | — | 28m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2313 ms | ↑ 1.29x | 0 | — | — | 25m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2315 ms | ↑ 1.44x | 0 | — | — | 28m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.06% | 99.06% | 901 ms | ↑ 1.37x | 0 | — | — | 33m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.54% | 97.54% | 2480 ms | ↑ 2.15x | 0 | — | — | 28m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.90% | 99.90% | 99.90% | 1739 ms | ↑ 1.22x | 1 | 0s | 16d ago | 24m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 1753 ms | ↑ 1.47x | 1 | 0s | 8d ago | 26m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.94% | 99.94% | 1843 ms | ↑ 1.87x | 1 | 0s | 13d ago | 25m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2325 ms | ↑ 1.30x | 0 | — | — | 25m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 67.97% | 81.00% | 81.00% | 1211 ms | → 1.01x | 2 | 4d 20h | 24d ago | 26m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.90% | 98.90% | 395 ms | ↑ 1.36x | 0 | — | — | 30m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.13% | 99.13% | 1215 ms | ↑ 1.12x | 3 | 0s | 15d ago | 26m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.00% | 99.00% | 3222 ms | ↑ 1.88x | 0 | — | — | 33m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 87.78% | 87.78% | 1670 ms | ↑ 1.49x | 0 | — | — | 27m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 100.00% | 97.76% | 97.76% | 490 ms | ↓ 0.87x | 0 | — | — | 25m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.79% | 99.79% | 99.79% | 764 ms | ↑ 1.23x | 1 | 1h | 22d ago | 24m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.80% | 99.80% | 99.80% | 2139 ms | ↑ 1.06x | 1 | 0s | 8d ago | 24m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.90% | 99.90% | 1697 ms | ↑ 1.26x | 2 | 11m | 23d ago | 24m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 24.37% | 24.37% | 2267 ms | ↑ 1.76x | 0 | — | — | 33m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1768 ms | ↑ 1.53x | 0 | — | — | 44m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2678 ms | ↑ 1.08x | 0 | — | — | 43m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 713 ms | ↑ 1.18x | 0 | — | — | 41m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.14% | 98.14% | 943 ms | ↓ 0.69x | 0 | — | — | 31m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 742 ms | ↑ 1.25x | 0 | — | — | 43m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.73% | 99.73% | 1641 ms | ↑ 1.05x | 4 | 8m | 16d ago | 37m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.75% | 98.75% | 4753 ms | ↑ 1.07x | 0 | — | — | 44m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1014 ms | ↓ 0.44x | 0 | — | — | 41m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2434 ms | ↑ 1.42x | 0 | — | — | 26m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.67% | 31.85% | 31.85% | 2110 ms | ↑ 1.18x | 9 | 2h 12m | 8d ago | 40m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.47% | 97.93% | 97.93% | 2087 ms | ↑ 1.19x | 126 | 29m | 12d ago | 41m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2802 ms | ↑ 1.11x | 0 | — | — | 38m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2547 ms | ↑ 1.36x | 2 | 0s | 13d ago | 33m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.67% | 42.67% | 930 ms | → 1.03x | 1 | 0s | 12d ago | 43m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1195 ms | → 1.02x | 0 | — | — | 41m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2954 ms | ↑ 1.06x | 1 | 0s | 25d ago | 38m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1434 ms | ↑ 1.07x | 2 | 14m | 16d ago | 31m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 19.68% | 19.68% | 711 ms | ↓ 0.95x | 1 | 0s | 9d ago | 41m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2680 ms | ↑ 1.16x | 0 | — | — | 32m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.69% | 99.69% | 733 ms | ↓ 0.52x | 0 | — | — | 27m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 578 ms | ↑ 1.24x | 0 | — | — | 24m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.51% | 99.51% | 99.51% | 989 ms | ↓ 0.92x | 2 | 45m | 10d ago | 26m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 814 ms | ↑ 1.06x | 0 | — | — | 43m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.77% | 61.77% | 1651 ms | → 1.04x | 0 | — | — | 33m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 83.01% | 83.01% | 1491 ms | ↑ 1.65x | 3 | 8h 40m | 13d ago | 28m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2881 ms | ↑ 1.07x | 0 | — | — | 42m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.73% | 98.73% | 803 ms | ↓ 0.58x | 2 | 2h 55m | 8d ago | 26m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.38% | 89.38% | 2111 ms | ↑ 1.31x | 1 | 0s | 9d ago | 41m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.34% | 80.34% | 2250 ms | ↑ 1.16x | 1 | 13h | 19d ago | 43m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 87.85% | 87.85% | 932 ms | ↓ 0.87x | 2 | 0s | 8d ago | 26m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1366 ms | ↑ 1.29x | 1 | 0s | 12d ago | 41m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1111 ms | → 1.00x | 0 | — | — | 43m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.89% | 99.66% | 99.66% | 1334 ms | ↑ 1.35x | 2 | 0s | 8d ago | 41m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 45.92% | 45.92% | 641 ms | → 1.03x | 1 | 0s | 12d ago | 31m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.61% | 99.61% | 970 ms | ↑ 1.05x | 0 | — | — | 43m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1813 ms | ↑ 1.65x | 0 | — | — | 25m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 961 ms | ↑ 1.07x | 1 | 0s | 25d ago | 28m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.55% | 98.55% | 1743 ms | ↑ 1.20x | 0 | — | — | 28m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.63% | 96.63% | 1230 ms | ↑ 1.51x | 2 | 45m | 11d ago | 28m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.52% | 70.52% | 1395 ms | ↑ 1.33x | 0 | — | — | 32m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1330 ms | ↑ 1.12x | 0 | — | — | 24m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1301 ms | → 1.00x | 0 | — | — | 24m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.35% | 81.35% | 3336 ms | ↑ 1.60x | 1 | 0s | 12d ago | 32m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2232 ms | ↑ 1.22x | 0 | — | — | 41m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 905 ms | ↓ 0.41x | 0 | — | — | 25m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.79% | 92.79% | 1490 ms | ↓ 0.93x | 3 | 0s | 20d ago | 31m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.87% | 99.87% | 494 ms | ↓ 0.64x | 2 | 0s | 13d ago | 37m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 42.73% | 23.98% | 23.98% | 2535 ms | ↑ 1.06x | 2 | 8d 13h | 13d ago | 27m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.72% | 85.72% | 1352 ms | ↑ 2.12x | 0 | — | — | 41m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.30% | 91.30% | 497 ms | ↑ 1.33x | 0 | — | — | 30m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.32% | 99.32% | 2402 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.75% | 96.75% | 1548 ms | ↑ 1.10x | 0 | — | — | 32m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.87% | 99.87% | 1979 ms | ↑ 1.61x | 1 | 0s | 25d ago | 25m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 22.18% | 22.18% | 2326 ms | ↑ 1.38x | 1 | 0s | 18d ago | 38m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 3047 ms | ↑ 1.11x | 0 | — | — | 42m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.90% | 99.90% | 99.90% | 1617 ms | → 1.02x | 1 | 0s | 10d ago | 26m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4257 ms | ↑ 1.20x | 0 | — | — | 26m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.10% | 59.10% | 771 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.83% | 98.45% | 98.45% | 2341 ms | ↑ 1.42x | 3 | 0s | 12d ago | 30m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 42.15% | 42.15% | 3317 ms | ↑ 1.36x | 1 | 0s | 30d ago | 32m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.27% | 99.27% | 99.27% | 3035 ms | → 1.01x | 1 | 1h 58m | 11d ago | 25m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.24% | 99.24% | 4336 ms | ↑ 1.27x | 1 | 0s | 24d ago | 38m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3484 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.89% | 99.89% | 2639 ms | ↑ 1.27x | 1 | 0s | 30d ago | 31m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 92.21% | 92.21% | 2853 ms | ↑ 1.05x | 3 | 12h 57m | 21d ago | 30m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.27% | 99.27% | 2344 ms | ↑ 1.18x | 0 | — | — | 32m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.15% | 80.15% | 431 ms | ↓ 0.32x | 0 | — | — | 32m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 0.98x | 1 | 0s | 25d ago | 42m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2701 ms | ↑ 1.64x | 0 | — | — | 24m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2861 ms | ↑ 1.26x | 0 | — | — | 41m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1395 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.24% | 91.66% | 91.66% | 2590 ms | ↓ 0.88x | 13 | 0s | 13d ago | 30m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.58% | 80.58% | 2750 ms | ↑ 1.39x | 1 | 0s | 27d ago | 32m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.96% | 86.96% | 295 ms | ↓ 0.19x | 0 | — | — | 32m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 99.93% | 99.93% | 1690 ms | ↑ 1.34x | 0 | — | — | 26m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1369 ms | ↑ 1.26x | 0 | — | — | 41m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.64% | 98.64% | 863 ms | ↑ 1.29x | 0 | — | — | 30m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 24.00% | 24.00% | 916 ms | ↑ 1.88x | 0 | — | — | 33m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.53% | 97.58% | 97.58% | 451 ms | ↓ 0.43x | 5 | 16m | 10d ago | 27m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 913 ms | ↓ 0.91x | 0 | — | — | 30m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 86.60% | 36.63% | 36.63% | 904 ms | → 0.96x | 1 | 3d 20h | 30d ago | 42m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 93.05% | 93.05% | 29 ms | → 1.00x | 0 | — | — | 28m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.90% | 98.90% | 1548 ms | ↑ 1.29x | 1 | 5h 60m | 23d ago | 41m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 20.51% | 20.51% | 1525 ms | ↑ 1.39x | 0 | — | — | 41m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 658 ms | ↓ 0.53x | 0 | — | — | 26m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3822 ms | ↑ 1.13x | 0 | — | — | 27m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 488 ms | ↓ 0.58x | 0 | — | — | 26m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.89% | 99.45% | 99.45% | 3205 ms | ↑ 1.13x | 2 | 0s | 7d ago | 43m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.56% | 93.56% | 4721 ms | ↑ 1.08x | 0 | — | — | 42m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.58% | 99.58% | 2118 ms | ↑ 1.20x | 1 | 1h 20m | 24d ago | 41m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 97.37% | 98.36% | 98.36% | 4048 ms | ↑ 1.24x | 18 | 43m | 9d ago | 29m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.25% | 99.25% | 1023 ms | ↑ 1.14x | 0 | — | — | 30m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.90% | 99.90% | 1436 ms | ↓ 0.90x | 0 | — | — | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2663 ms | ↑ 1.40x | 0 | — | — | 43m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 1892 ms | ↑ 1.35x | 0 | — | — | 41m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 666 ms | ↑ 1.33x | 0 | — | — | 44m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.81% | 98.81% | 2864 ms | ↑ 1.08x | 0 | — | — | 28m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.78% | 96.78% | 3293 ms | ↑ 1.12x | 0 | — | — | 42m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.81% | 99.81% | 617 ms | ↓ 0.83x | 1 | 20m | 25d ago | 28m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.90% | 88.90% | 2465 ms | ↑ 1.36x | 0 | — | — | 31m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.84% | 99.84% | 813 ms | ↓ 0.82x | 0 | — | — | 28m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1743 ms | → 1.00x | 0 | — | — | 26m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2181 ms | ↑ 1.17x | 0 | — | — | 42m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1490 ms | ↑ 1.13x | 0 | — | — | 43m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.93% | 99.93% | 1620 ms | ↑ 1.16x | 1 | 0s | 16d ago | 25m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1378 ms | ↑ 1.15x | 0 | — | — | 43m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 872 ms | → 1.01x | 0 | — | — | 40m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.82% | 84.82% | 1677 ms | ↓ 0.91x | 1 | 0s | 21d ago | 38m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 25.74% | 25.74% | 2796 ms | ↑ 1.26x | 1 | 0s | 19d ago | 44m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.19% | 98.19% | 2628 ms | ↑ 1.35x | 2 | 0s | 24d ago | 28m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.34% | 92.34% | 4506 ms | ↑ 1.27x | 2 | 25m | 11d ago | 44m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.93% | 99.93% | 2621 ms | ↑ 1.80x | 1 | 0s | 9d ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 98.83% | 97.27% | 97.27% | 1825 ms | ↑ 1.31x | 15 | 10m | 12d ago | 26m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1093 ms | ↑ 1.35x | 1 | 1h | 19d ago | 25m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.74% | 97.74% | 3832 ms | ↑ 1.93x | 1 | 0s | 16d ago | 27m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.83% | 98.83% | 1268 ms | ↑ 1.23x | 0 | — | — | 32m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.75% | 98.75% | 1875 ms | → 1.00x | 0 | — | — | 40m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.88% | 99.61% | 99.61% | 3103 ms | ↑ 1.39x | 1 | 29m | 28d ago | 26m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 100.00% | 97.99% | 97.99% | 4239 ms | ↑ 1.20x | 0 | — | — | 29m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1184 ms | ↑ 1.74x | 0 | — | — | 26m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.65% | 98.65% | 1366 ms | ↑ 1.76x | 4 | 7m | 9d ago | 31m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2694 ms | ↑ 1.32x | 0 | — | — | 24m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.42% | 97.42% | 97.42% | 165 ms | ↓ 0.13x | 2 | 6h 36m | 13d ago | 24m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 30.74% | 30.74% | 1262 ms | ↑ 1.22x | 0 | — | — | 40m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 1614 ms | ↑ 1.62x | 1 | 0s | 29d ago | 31m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1852 ms | ↑ 1.32x | 0 | — | — | 40m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.83% | 88.83% | 4224 ms | ↑ 1.42x | 0 | — | — | 32m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 14.15% | 14.15% | 2670 ms | → 1.02x | 0 | — | — | 39m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1863 ms | ↑ 1.20x | 1 | 0s | 12d ago | 40m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 20.51% | 20.51% | 2065 ms | → 1.00x | 0 | — | — | 42m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 704 ms | ↓ 0.86x | 0 | — | — | 26m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.22% | 97.22% | 2723 ms | ↑ 1.43x | 0 | — | — | 28m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2519 ms | ↑ 1.18x | 1 | 0s | 27d ago | 40m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1309 ms | → 1.01x | 2 | 10m | 12d ago | 41m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 20.29% | 20.29% | 2424 ms | ↑ 1.41x | 0 | — | — | 33m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.71% | 99.71% | 1474 ms | ↓ 0.54x | 4 | 30m | 14d ago | 25m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.76% | 99.76% | 2892 ms | ↑ 1.14x | 1 | 2h 18m | 30d ago | 30m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2245 ms | ↑ 1.22x | 0 | — | — | 42m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2021 ms | → 1.01x | 0 | — | — | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 731 ms | ↓ 0.54x | 0 | — | — | 40m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 319 ms | → 0.99x | 0 | — | — | 25m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.67% | 98.67% | 1614 ms | ↑ 1.26x | 0 | — | — | 28m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2255 ms | ↑ 1.15x | 1 | 0s | 19d ago | 38m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.14% | 99.14% | 1915 ms | ↑ 1.19x | 1 | 0s | 19d ago | 42m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 818 ms | ↑ 1.60x | 0 | — | — | 41m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 379 ms | → 0.97x | 0 | — | — | 24m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.75% | 99.89% | 99.73% | 99.73% | 3266 ms | ↑ 1.12x | 1 | 0s | 5d ago | 42m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.75% | 99.54% | 99.26% | 99.26% | 2279 ms | ↑ 1.53x | 4 | 22m | 2d ago | 42m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.75% | 98.63% | 99.74% | 99.74% | 1966 ms | ↑ 1.14x | 4 | 1h 38m | 2d ago | 42m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.75% | 99.66% | 98.88% | 98.88% | 3089 ms | ↑ 1.18x | 6 | 0s | 6d ago | 43m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.75% | 99.94% | 99.54% | 99.54% | 3425 ms | → 1.05x | 1 | 0s | 7d ago | 42m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.83% | 44.71% | 44.71% | 1237 ms | ↑ 1.06x | 3 | 0s | 4d ago | 42m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.77% | 62.61% | 62.61% | 2766 ms | ↑ 1.06x | 4 | 0s | 2d ago | 42m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.75% | 99.94% | 99.98% | 99.98% | 785 ms | ↑ 1.10x | 1 | 0s | 2h ago | 39m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.75% | 99.94% | 99.75% | 99.75% | 3072 ms | ↑ 1.12x | 1 | 0s | 2h ago | 39m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.75% | 99.48% | 99.00% | 99.00% | 3883 ms | ↑ 1.06x | 8 | 2m | 6d ago | 40m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.75% | 99.94% | 99.53% | 99.53% | 2223 ms | → 1.04x | 1 | 0s | 2h ago | 39m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.75% | 99.94% | 31.10% | 31.10% | 1193 ms | ↑ 1.13x | 1 | 0s | 2h ago | 39m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.75% | 99.66% | 99.90% | 99.90% | 922 ms | ↑ 1.09x | 4 | 10m | 2h ago | 39m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.75% | 99.48% | 99.17% | 99.17% | 4086 ms | ↑ 1.08x | 8 | 2m | 6d ago | 40m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.75% | 99.89% | 99.87% | 99.87% | 2887 ms | ↑ 1.06x | 2 | 0s | 2h ago | 39m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.77% | 79.59% | 79.59% | 1618 ms | ↓ 0.88x | 4 | 0s | 4d ago | 38m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.75% | 99.94% | 99.95% | 99.95% | 2268 ms | ↑ 1.16x | 1 | 0s | 4d ago | 38m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.67% | 98.67% | 994 ms | ↓ 0.83x | 6 | 0s | 2d ago | 32m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.88% | 82.34% | 82.34% | 2688 ms | ↑ 1.32x | 2 | 0s | 2d ago | 32m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.52% | 97.52% | 2727 ms | ↑ 1.31x | 1 | 0s | 2d ago | 33m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 48.46% | 48.46% | 1988 ms | ↑ 1.41x | 2 | 0s | 2d ago | 33m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.29% | 63.29% | 634 ms | ↓ 0.91x | 3 | 0s | 2d ago | 32m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.45% | 90.45% | 2246 ms | ↑ 1.15x | 2 | 0s | 2d ago | 32m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.65% | 20.38% | 20.38% | 612 ms | ↓ 0.37x | 5 | 6m | 2d ago | 33m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 22.57% | 22.57% | 657 ms | ↓ 0.36x | 2 | 0s | 2d ago | 33m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.54% | 22.21% | 22.21% | 1762 ms | ↑ 1.16x | 4 | 30m | 6d ago | 33m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.88% | 68.17% | 68.17% | 1637 ms | ↑ 1.45x | 2 | 0s | 2d ago | 32m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.94% | 98.49% | 98.49% | 1945 ms | ↑ 1.26x | 1 | 0s | 5d ago | 31m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.20% | 96.20% | 2283 ms | ↑ 1.50x | 1 | 0s | 2d ago | 33m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.23% | 62.23% | 2605 ms | ↑ 1.20x | 1 | 0s | 2d ago | 32m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.26% | 96.69% | 96.69% | 4677 ms | ↑ 1.20x | 12 | 43m | 2d ago | 33m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2242 ms | ↑ 1.17x | 2 | 0s | 2d ago | 32m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.38% | 98.38% | 2500 ms | ↑ 1.33x | 1 | 0s | 4d ago | 31m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.63% | 96.63% | 3350 ms | ↑ 1.53x | 1 | 0s | 3d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 22.30% | 22.30% | 3963 ms | ↑ 1.61x | 1 | 0s | 3d ago | 33m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.75% | 99.07% | 91.47% | 91.47% | 1431 ms | → 0.97x | 15 | 2m | 2d ago | 32m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.04% | 99.04% | 685 ms | ↑ 1.52x | 1 | 0s | 2h ago | 30m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.57% | 98.57% | 2584 ms | ↓ 0.59x | 1 | 0s | 2h ago | 30m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 75.22% | 75.22% | 958 ms | ↓ 0.86x | 1 | 0s | 2h ago | 30m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.75% | 99.47% | 99.47% | 99.47% | 523 ms | ↓ 0.38x | 4 | 35m | 10h ago | 24m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 97.26% | 97.84% | 97.84% | 4494 ms | ↑ 1.20x | 23 | 29m | 5d ago | 29m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 99.75% | 99.94% | 99.95% | 99.95% | 536 ms | ↓ 0.33x | 1 | 0s | 2h ago | 24m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.42% | 99.76% | 99.76% | 4664 ms | ↑ 1.38x | 6 | 20m | 3d ago | 29m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.94% | 99.94% | 99.94% | 2383 ms | ↑ 1.47x | 1 | 0s | 3d ago | 26m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 62.17% | 66.37% | 66.37% | 1890 ms | ↑ 1.43x | 2 | 5d 13h | 6d ago | 28m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.93% | 99.93% | 1695 ms | → 0.97x | 1 | 0s | 1d ago | 26m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.65% | 99.61% | 99.61% | 1393 ms | ↑ 1.26x | 4 | 14m | 7d ago | 26m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 99.82% | 98.96% | 98.96% | 3069 ms | ↑ 1.08x | 3 | 0s | 4d ago | 26m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 98.07% | 96.39% | 96.39% | 2187 ms | ↑ 1.11x | 2 | 6h 1m | 1d ago | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.94% | 98.20% | 98.20% | 1792 ms | ↑ 1.34x | 1 | 0s | 4d ago | 27m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.54% | 99.54% | 2972 ms | ↑ 1.85x | 1 | 0s | 6d ago | 26m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.51% | 99.66% | 96.08% | 96.08% | 3313 ms | ↑ 1.15x | 6 | 0s | 1d ago | 43m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.71% | 20.49% | 20.49% | 2220 ms | → 1.05x | 5 | 0s | 3d ago | 41m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.66% | 85.63% | 85.63% | 2169 ms | → 1.04x | 6 | 0s | 2d ago | 42m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.50% | 99.42% | 53.25% | 53.25% | 1071 ms | ↓ 0.92x | 6 | 20m | 2d ago | 33m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.50% | 99.83% | 21.38% | 21.38% | 1272 ms | ↑ 1.18x | 3 | 0s | 2d ago | 33m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.50% | 99.77% | 23.03% | 23.03% | 1521 ms | ↑ 1.13x | 4 | 0s | 3d ago | 33m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.50% | 99.48% | 98.94% | 98.94% | 1027 ms | ↓ 0.41x | 5 | 24m | 6d ago | 31m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.50% | 99.88% | 96.80% | 96.80% | 845 ms | ↑ 1.20x | 2 | 0s | 4d ago | 30m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.49% | 99.79% | 99.79% | 99.79% | 1759 ms | ↓ 0.88x | 3 | 0s | 4d ago | 24m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.49% | 99.53% | 99.54% | 99.54% | 1157 ms | ↓ 0.78x | 5 | 12m | 4d ago | 24m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.49% | 99.18% | 98.67% | 98.67% | 1391 ms | ↓ 0.59x | 4 | 60m | 3d ago | 26m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.49% | 97.55% | 98.71% | 98.71% | 879 ms | ↑ 1.47x | 7 | 2h 8m | 2d ago | 26m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.49% | 99.71% | 99.71% | 99.71% | 385 ms | ↓ 0.85x | 3 | 0s | 2d ago | 26m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.49% | 99.82% | 99.63% | 99.63% | 2045 ms | ↓ 0.64x | 3 | 0s | 4d ago | 25m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.49% | 99.77% | 97.95% | 97.95% | 615 ms | ↓ 0.79x | 4 | 0s | 4d ago | 27m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.49% | 99.71% | 99.71% | 99.71% | 1380 ms | → 1.01x | 2 | 0s | 4d ago | 24m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.49% | 99.18% | 96.78% | 96.78% | 1417 ms | → 0.99x | 6 | 35m | 2d ago | 28m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.26% | 98.33% | 48.60% | 48.60% | 3409 ms | ↑ 1.22x | 7 | 1h 12m | 2d ago | 39m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.25% | 99.71% | 67.14% | 67.14% | 1345 ms | → 0.97x | 4 | 5m | 2d ago | 32m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.25% | 99.65% | 90.60% | 90.60% | 720 ms | ↓ 0.92x | 6 | 0s | 2d ago | 32m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.25% | 99.48% | 68.56% | 68.56% | 1761 ms | ↑ 1.52x | 7 | 9m | 22h ago | 32m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.25% | 99.77% | 99.82% | 99.82% | 362 ms | ↓ 0.23x | 4 | 0s | 2d ago | 33m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.24% | 74.78% | 85.98% | 85.98% | 962 ms | ↑ 1.22x | 7 | 1d 2h | 5d ago | 24m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.24% | 99.01% | 99.14% | 99.14% | 2176 ms | ↑ 1.57x | 10 | 19m | 24h ago | 26m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.24% | 99.30% | 98.78% | 98.78% | 2432 ms | ↑ 1.19x | 5 | 42m | 5d ago | 26m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.02% | 93.81% | 44.09% | 44.09% | 3278 ms | ↑ 1.06x | 45 | 34m | 5d ago | 42m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.02% | 99.66% | 55.63% | 55.63% | 1687 ms | ↑ 1.24x | 6 | 0s | 2h ago | 39m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.01% | 99.14% | 69.04% | 69.04% | 3946 ms | → 1.00x | 12 | 6m | 11h ago | 39m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.01% | 99.71% | 20.40% | 20.40% | 4419 ms | ↑ 1.40x | 4 | 8m | 2d ago | 38m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.00% | 98.61% | 86.44% | 86.44% | 4588 ms | ↑ 1.10x | 23 | 1m | 2d ago | 33m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (61)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 98.99% | 99.77% | 99.86% | 99.86% | 1162 ms | ↓ 0.74x | 1 | 1h 9m | 6d ago | 26m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.99% | 98.48% | 92.34% | 92.34% | 798 ms | ↑ 1.16x | 12 | 27m | 2d ago | 28m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 98.99% | 96.14% | 97.41% | 97.41% | 680 ms | ↓ 0.76x | 3 | 8h 24m | 21h ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.77% | 98.97% | 98.32% | 98.32% | 4468 ms | → 1.02x | 18 | 0s | 20h ago | 44m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.77% | 98.33% | 98.91% | 98.91% | 1605 ms | → 0.97x | 19 | 13m | 12h ago | 38m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.75% | 98.72% | 67.50% | 67.50% | 4721 ms | ↑ 1.08x | 20 | 3m | 2d ago | 32m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.75% | 99.30% | 98.83% | 98.83% | 2042 ms | ↑ 1.30x | 5 | 36m | 1d ago | 31m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.73% | 99.71% | 96.22% | 96.22% | 1397 ms | ↑ 1.48x | 1 | 2h 1m | 4d ago | 24m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.73% | 99.71% | 98.18% | 98.18% | 447 ms | ↓ 0.50x | 1 | 1h 40m | 4d ago | 28m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.53% | 98.62% | 85.91% | 85.91% | 4424 ms | → 1.00x | 23 | 1m | 1d ago | 40m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.49% | 99.59% | 54.07% | 54.07% | 590 ms | ↓ 0.82x | 6 | 5m | 17h ago | 30m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.48% | 99.65% | 99.44% | 99.44% | 4864 ms | ↑ 1.39x | 5 | 4m | 1d ago | 27m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.27% | 98.50% | 18.72% | 18.72% | 3844 ms | ↑ 1.38x | 12 | 29m | 2d ago | 38m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.25% | 99.19% | 61.77% | 61.77% | 1085 ms | ↓ 0.43x | 4 | 1h 9m | 2d ago | 34m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.23% | 97.43% | 98.73% | 98.73% | 3029 ms | ↑ 1.45x | 17 | 47m | 3d ago | 29m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.23% | 98.60% | 98.57% | 98.57% | 3174 ms | ↑ 1.40x | 24 | 0s | 1d ago | 24m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.11% | 98.11% | 98.11% | 98.11% | 3055 ms | → 1.00x | 1 | 2h 37m | 2d ago | 24m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 98.00% | 97.97% | 97.90% | 97.90% | 1856 ms | ↓ 0.93x | 2 | 6h 16m | 7d ago | 32m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.00% | 97.73% | 95.95% | 95.95% | 3801 ms | ↑ 1.31x | 4 | 3h 38m | 2d ago | 31m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.98% | 82.61% | 82.60% | 82.60% | 4471 ms | → 0.96x | 35 | 3h 17m | 4h ago | 28m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.79% | 98.40% | 87.02% | 87.02% | 4155 ms | ↑ 1.29x | 28 | 0s | 4h ago | 44m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.79% | 99.48% | 99.61% | 99.61% | 2575 ms | ↑ 1.12x | 1 | 3h 60m | 5d ago | 40m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.28% | 98.22% | 19.90% | 19.90% | 4550 ms | ↑ 1.25x | 31 | 0s | 1h ago | 38m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.23% | 99.07% | 99.61% | 99.61% | 2124 ms | ↑ 1.18x | 2 | 3h 20m | 3d ago | 30m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.22% | 98.19% | 98.64% | 98.64% | 2250 ms | ↑ 1.51x | 7 | 1h 16m | 4d ago | 26m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.04% | 97.41% | 74.75% | 74.75% | 4499 ms | ↑ 1.07x | 40 | 3m | 5h ago | 39m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.04% | 98.16% | 96.53% | 96.53% | 1739 ms | ↑ 1.28x | 7 | 1h 20m | 4d ago | 39m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.99% | 97.44% | 86.26% | 86.26% | 4750 ms | ↑ 1.08x | 32 | 10m | 3h ago | 31m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.97% | 98.60% | 51.46% | 51.46% | 4190 ms | ↑ 2.02x | 22 | 2m | 6h ago | 29m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.72% | 97.37% | 97.37% | 97.37% | 4599 ms | → 1.02x | 15 | 6m | 19h ago | 24m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 96.71% | 97.80% | 97.80% | 97.80% | 3104 ms | ↑ 1.07x | 11 | 9m | 4d ago | 25m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.57% | 99.08% | 99.72% | 99.72% | 204 ms | ↑ 1.32x | 11 | 9m | 5d ago | 41m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.56% | 96.73% | 19.83% | 19.83% | 874 ms | ↓ 0.78x | 54 | 1m | 1h ago | 39m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.50% | 95.06% | 73.03% | 73.03% | 1958 ms | ↑ 1.27x | 15 | 1h 36m | 5d ago | 32m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.47% | 96.33% | 83.97% | 83.97% | 4522 ms | → 0.99x | 52 | 6m | 5h ago | 30m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.31% | 95.98% | 18.62% | 18.62% | 2752 ms | ↑ 1.07x | 65 | 2m | 4d ago | 39m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 95.59% | 98.91% | 99.57% | 99.57% | 4036 ms | → 1.00x | 18 | 2m | 2d ago | 42m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.56% | 96.72% | 98.50% | 98.50% | 4624 ms | ↑ 1.15x | 54 | 2m | 1h ago | 38m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 95.20% | 43.45% | 43.45% | 43.45% | 1288 ms | ↓ 0.92x | 1 | 13d 23h | 21d ago | 24m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.75% | 96.28% | 82.95% | 82.95% | 4849 ms | → 1.03x | 58 | 3m | 18h ago | 31m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 94.68% | 97.18% | 90.27% | 90.27% | 4732 ms | ↑ 1.24x | 11 | 37m | 1d ago | 27m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 90.93% | 57.65% | 88.65% | 88.65% | 2098 ms | ↑ 1.38x | 1 | 12d 20h | 19d ago | 41m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 90.63% | 88.43% | 92.99% | 92.99% | 1510 ms | ↓ 0.47x | 83 | 32m | 4d ago | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.22% | 97.42% | 98.84% | 98.84% | 3860 ms | ↑ 1.33x | 2 | 8h 60m | 3d ago | 41m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 88.86% | 93.81% | 95.47% | 95.47% | 1756 ms | ↓ 0.82x | 13 | 3h 8m | 16h ago | 27m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.75% | 88.23% | 21.00% | 21.00% | 4540 ms | → 0.98x | 156 | 9m | 2h ago | 33m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.37% | 88.91% | 58.11% | 58.11% | 4183 ms | ↑ 1.07x | 153 | 7m | 5h ago | 28m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 87.12% | 44.56% | 29.09% | 29.09% | 3174 ms | ↑ 1.09x | 189 | 1h 41m | 2h ago | 24m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.05% | 93.77% | 93.77% | 93.77% | 1552 ms | → 0.99x | 4 | 6h 14m | 5d ago | 26m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 83.50% | 19.40% | 31.80% | 31.80% | 2341 ms | → 1.00x | 2 | 12d | 2d ago | 32m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 83.46% | 95.11% | 99.32% | 99.32% | 4216 ms | ↑ 1.30x | 11 | 2h 40m | 7d ago | 38m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 82.84% | 19.33% | 74.73% | 74.73% | 3509 ms | → 1.00x | 3 | 8d 1h | 2d ago | 44m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 82.58% | 94.26% | 91.41% | 91.41% | 1397 ms | ↑ 1.24x | 26 | 1h 10m | 19h ago | 24m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 81.50% | 88.29% | 36.04% | 36.04% | 1897 ms | ↑ 1.06x | 14 | 5h 29m | 4d ago | 33m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.80% | 81.67% | 81.67% | 81.67% | 4410 ms | → 0.98x | 119 | 41m | 2h ago | 24m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 73.99% | 69.02% | 92.32% | 92.32% | 4626 ms | ↑ 1.86x | 3 | 2d 24h | 3d ago | 29m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.71% | 71.13% | 62.64% | 62.64% | 4818 ms | → 1.00x | 320 | 16m | 1h ago | 39m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 72.00% | 71.35% | 24.77% | 24.77% | 4651 ms | → 0.98x | 294 | 19m | 1h ago | 32m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 45.25% | 37.62% | 31.79% | 31.79% | 2144 ms | ↑ 1.15x | 2 | 9d 9h | 5d ago | 33m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 15.95% | 3.68% | 22.99% | 22.99% | 2216 ms | → 1.00x | 1 | 28d 19h | 30d ago | 28m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 14.39% | 3.33% | 63.75% | 63.75% | 2456 ms | → 1.00x | 1 | 28d 23h | 30d ago | 29m ago |

</details>

<details open>
<summary><strong>🔴 Down (258)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.99% | 98.89% | 85.42% | 85.42% | 1506 ms | ↓ 0.58x | 15 | 9m | 25m ago | 25m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.25% | 98.90% | 72.98% | 72.98% | 920 ms | → 0.95x | 10 | 27m | 5h ago | 32m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 96.96% | 90.76% | 90.76% | 90.76% | 4641 ms | → 1.03x | 18 | 2h | 24m ago | 24m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 84.05% | 48.71% | 47.27% | 47.27% | 690 ms | → 1.01x | 5 | 3d 2h | 1d ago | 26m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 83.25% | 48.58% | 67.62% | 67.62% | 686 ms | → 0.98x | 6 | 2d 13h | 1d ago | 32m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 67.40% | 78.97% | 96.97% | 96.97% | 4574 ms | ↑ 1.17x | 205 | 21m | 41m ago | 41m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 60.76% | 90.53% | 94.44% | 94.44% | 2345 ms | ↑ 1.12x | 8 | 8h 22m | 3d ago | 26m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 60.54% | 90.72% | 86.78% | 86.78% | 1272 ms | → 1.03x | 2 | 1d 9h | 3d ago | 41m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 50.38% | 87.26% | 91.78% | 91.78% | 1667 ms | ↓ 0.92x | 8 | 11h 9m | 4d ago | 26m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 33.16% | 84.57% | 91.21% | 91.21% | 653 ms | ↓ 0.72x | 1 | 4d 17h | 5d ago | 26m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 25.82% | 77.85% | 83.64% | 83.64% | 4965 ms | ↑ 2.61x | 100 | 1h 11m | 6h ago | 27m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 19.24% | 80.01% | 88.72% | 88.72% | 757 ms | → 1.03x | 25 | 5h 26m | 6d ago | 25m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.96% | 1.66% | 57.97% | 57.97% | 3765 ms | ↑ 1.14x | 30 | 23h 18m | 13h ago | 44m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.98% | 52.41% | 50.44% | 50.44% | 2844 ms | ↑ 1.38x | 10 | 1d 10h | 1h ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 78.82% | 78.82% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 65.29% | 65.29% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 70.24% | 70.24% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 42.73% | 42.73% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 75.47% | 75.47% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 56.46% | 56.46% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.37% | 5.37% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.92% | 11.92% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 52.08% | 52.08% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.23% | 3.23% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 59.49% | 88.18% | 88.18% | — | — | 1 | 12d 5h | 12d ago | 28m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 79.06% | 79.06% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.70% | 34.70% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 88.29% | 88.29% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.14% | 22.14% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 70.95% | 70.95% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 47.43% | 47.43% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.17% | 28.17% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 40.84% | 87.54% | 87.54% | — | — | 6 | 2d 23h | 18d ago | 42m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 79.44% | 79.44% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.83% | 59.83% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 73.38% | 73.38% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 24h | 12d ago | 43m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.94% | 13.94% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 46.65% | 46.65% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 6.43% | 90.15% | 90.15% | — | — | 4 | 7d 1h | 28d ago | 39m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.94% | 31.94% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 69.87% | 82.75% | 82.75% | — | — | 1 | 8d 24h | 9d ago | 25m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 79.82% | 79.82% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 51.17% | 49.44% | 49.44% | — | — | 3 | 2d 22h | 9d ago | 27m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 41.38% | 85.45% | 85.45% | — | — | 1 | 17d 16h | 18d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.26% | 3.26% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 76.42% | 86.86% | 86.86% | — | — | 1 | 7d 3h | 7d ago | 25m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 79.67% | 79.67% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 29.54% | 29.54% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.44% | 49.44% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.94% | 31.05% | 31.05% | — | — | 4 | 4d 14h | 11d ago | 32m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.96% | 1.96% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 87.24% | 87.24% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 46.56% | 46.56% | 46.56% | — | — | 1 | 13d 3h | 13d ago | 24m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 70.67% | 70.67% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 70.43% | 83.06% | 83.06% | — | — | 4 | 2d 5h | 9d ago | 27m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 28.57% | 28.57% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.03% | 52.03% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 48.43% | 48.43% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.04% | 23.04% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 32.82% | 79.78% | 79.78% | — | — | 4 | 5d 2h | 20d ago | 44m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 32.15% | 39.88% | 39.88% | — | — | 3 | 6d 20h | 20d ago | 39m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 6h | 18d ago | 24m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 34.38% | 57.37% | 57.37% | — | — | 1 | 19d 22h | 20d ago | 27m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.51% | 54.51% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.59% | 22.59% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.94% | 4.94% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.72% | 62.72% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 79.38% | 79.38% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 56.28% | 77.24% | 77.24% | — | — | 1 | 13d 4h | 13d ago | 28m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.04% | 6.04% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 75.82% | 75.82% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 78.21% | 78.21% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 30.37% | 30.37% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 41.84% | 89.06% | 89.06% | — | — | 2 | 8d 17h | 17d ago | 31m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 24.82% | 24.82% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 2.28% | 22.26% | 22.26% | — | — | 1 | 29d 8h | 29d ago | 28m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 31.67% | 31.67% | 31.67% | — | — | 2 | 4d 2h | 8d ago | 25m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 70.60% | 81.43% | 81.43% | — | — | 4 | 2d 4h | 9d ago | 27m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 70.15% | 85.65% | 85.65% | — | — | 13 | 16h 2m | 9d ago | 27m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 50.69% | 50.69% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 25.51% | 25.45% | 25.45% | — | — | 8 | 1d 2h | 9d ago | 27m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.23% | 7.23% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 60.61% | 60.61% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.55% | 44.55% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 26.29% | 26.29% | 26.29% | — | — | 3 | 4d 10h | 13d ago | 26m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.48% | 40.48% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 73.17% | 78.42% | 78.42% | — | — | 4 | 1d 23h | 8d ago | 43m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 24.75% | 24.75% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 79.40% | 79.40% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.09% | 56.09% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.25% | 37.25% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 24.99% | 70.79% | 70.79% | — | — | 2 | 11d 7h | 23d ago | 30m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 75.43% | 75.43% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 9.22% | 69.53% | 69.53% | — | — | 2 | 13d 15h | 27d ago | 28m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.43% | 2.43% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 79.61% | 79.61% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.83% | 39.83% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 24.41% | 93.36% | 93.36% | — | — | 1 | 22d 20h | 23d ago | 38m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 79.38% | 79.38% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.29% | 31.29% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 79.29% | 79.29% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 47.62% | 47.62% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 20.49% | 20.49% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 41.89% | 41.89% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 77.06% | 77.06% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 61.53% | 61.53% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 26.62% | 26.62% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 4h | 18d ago | 26m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 75.61% | 75.61% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 4h | 18d ago | 26m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 46.91% | 46.91% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.01% | 3.01% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 5h | 18d ago | 26m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.36% | 41.36% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 74.07% | 74.07% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 15.72% | 39.90% | 39.90% | — | — | 2 | 12d 17h | 25d ago | 40m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.51% | 56.51% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 32.91% | 32.91% | 32.91% | — | — | 1 | 12d 2h | 12d ago | 26m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 38.44% | 38.44% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 57.54% | 57.54% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 85.14% | 85.14% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 66.34% | 96.81% | 96.81% | — | — | 2 | 4d 24h | 10d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.10% | 27.10% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.44% | 11.44% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.09% | 23.09% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.73% | 50.73% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 51.92% | 51.92% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 11.09% | 71.03% | 71.03% | — | — | 1 | 26d 18h | 27d ago | 29m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.89% | 8.89% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.73% | 16.73% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.43% | 47.43% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 46.45% | 49.32% | 49.32% | — | — | 2 | 8d 1h | 16d ago | 31m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 20.20% | 20.20% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.86% | 52.86% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 91.33% | 91.33% | — | — | 1 | 11d 24h | 12d ago | 37m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.13% | 37.13% | — | — | 1 | 18d 6h | 18d ago | 32m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.03% | 21.03% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 31.76% | 31.76% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 44.17% | 44.17% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.32% | 5.32% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 76.43% | 76.43% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 86.51% | 86.51% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 16.15% | 55.69% | 55.69% | — | — | 1 | 25d 7h | 25d ago | 24m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 79.48% | 79.48% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 78.44% | 78.44% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.18% | 61.18% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 71.83% | 71.83% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 78.30% | 78.30% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d | 12d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.70% | 18.70% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 57.28% | 57.28% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 38.71% | 38.71% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.90% | 3.90% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.62% | 32.62% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 65.72% | 65.72% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.29% | 23.75% | 23.75% | — | — | 2 | 14d 23h | 29d ago | 31m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.06% | 7.06% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.92% | 62.92% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 27.22% | 27.22% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.77% | 64.77% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 35.44% | 35.44% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 70.66% | 82.83% | 82.83% | — | — | 3 | 2d 22h | 9d ago | 27m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.54% | 4.54% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 23h | 12d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 50.67% | 50.67% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 43.96% | 43.96% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 32.97% | 32.97% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 19.59% | 19.59% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 15.76% | 5.25% | 5.25% | — | — | 2 | 12d 17h | 25d ago | 41m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.00% | 11.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.21% | 17.21% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.20% | 16.20% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 29.47% | 29.47% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.45% | 9.45% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.77% | 7.77% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.79% | 0.79% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.49% | 4.49% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.22% | 5.22% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.84% | 47.84% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 41.93% | 41.93% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 79.45% | 79.45% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 69.03% | 69.03% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 43.44% | 43.44% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 79.64% | 79.64% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 48.88% | 48.88% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.67% | 39.67% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.63% | 1.63% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.48% | 18.48% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 5h | 18d ago | 26m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 77.48% | 77.48% | — | — | 1 | 29d 23h | 30d ago | 36m ago |

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
