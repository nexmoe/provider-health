# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 347 🟢 operational · 67 🟡 degraded · 257 🔴 down · 0 ⚫ unknown

_Updated 2026-06-23 06:54 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (347)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.27% | 98.27% | 820 ms | ↑ 1.24x | 1 | 0s | 26d ago | 26m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1471 ms | ↓ 0.93x | 0 | — | — | 23m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.97% | 93.97% | 2438 ms | ↑ 1.78x | 3 | 0s | 17d ago | 30m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 22.30% | 22.30% | 3305 ms | ↑ 1.51x | 4 | 0s | 13d ago | 32m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.49% | 97.49% | 4062 ms | ↑ 1.27x | 0 | — | — | 41m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 57.35% | 57.35% | 1662 ms | → 0.99x | 0 | — | — | 29m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.91% | 99.91% | 99.91% | 1222 ms | → 0.98x | 1 | 0s | 17d ago | 24m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.90% | 97.90% | 4152 ms | ↑ 1.26x | 1 | 0s | 26d ago | 37m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.83% | 98.83% | 2269 ms | ↑ 1.18x | 0 | — | — | 43m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.53% | 99.53% | 3677 ms | ↑ 1.11x | 0 | — | — | 43m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.35% | 99.35% | 281 ms | ↓ 0.29x | 0 | — | — | 25m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.44% | 95.44% | 2872 ms | ↑ 1.25x | 0 | — | — | 27m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2197 ms | ↑ 1.48x | 0 | — | — | 25m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.82% | 97.82% | 3444 ms | ↑ 1.37x | 0 | — | — | 27m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.53% | 92.53% | 3574 ms | ↑ 1.55x | 1 | 50m | 12d ago | 44m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1197 ms | ↑ 1.30x | 0 | — | — | 23m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.70% | 98.70% | 1513 ms | ↑ 1.19x | 0 | — | — | 27m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 99.42% | 96.52% | 96.52% | 1787 ms | ↑ 1.15x | 10 | 0s | 10d ago | 25m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.95% | 98.95% | 514 ms | ↓ 0.45x | 0 | — | — | 25m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.45% | 38.45% | 912 ms | ↑ 1.52x | 0 | — | — | 37m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1633 ms | ↑ 1.19x | 0 | — | — | 23m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1426 ms | ↑ 1.39x | 2 | 10m | 14d ago | 26m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 97.05% | 97.05% | 3003 ms | ↑ 1.26x | 1 | 0s | 28d ago | 30m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.89% | 98.89% | 1100 ms | ↑ 1.16x | 2 | 15m | 14d ago | 40m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1415 ms | ↑ 1.60x | 0 | — | — | 24m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 87.90% | 87.90% | 2092 ms | ↑ 1.73x | 1 | 3h 51m | 25d ago | 28m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.59% | 99.71% | 99.71% | 1866 ms | ↓ 0.89x | 3 | 39m | 12d ago | 25m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.44% | 98.44% | 4420 ms | ↑ 1.38x | 0 | — | — | 28m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.30% | 98.30% | 542 ms | ↑ 1.58x | 0 | — | — | 26m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.62% | 99.62% | 1365 ms | ↑ 1.22x | 4 | 14m | 8d ago | 25m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.38% | 86.38% | 2521 ms | ↑ 1.67x | 0 | — | — | 27m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1124 ms | ↑ 1.07x | 1 | 0s | 10d ago | 24m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.77% | 97.77% | 1438 ms | → 1.05x | 0 | — | — | 29m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.92% | 97.92% | 4182 ms | ↑ 1.09x | 1 | 0s | 29d ago | 42m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.45% | 96.45% | 952 ms | → 1.00x | 0 | — | — | 29m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.06% | 85.81% | 85.81% | 1600 ms | ↓ 0.93x | 9 | 6h 19m | 14d ago | 26m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1081 ms | → 0.99x | 0 | — | — | 23m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2211 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.70% | 99.70% | 99.70% | 1630 ms | → 1.02x | 2 | 0s | 8d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1148 ms | → 1.04x | 2 | 0s | 14d ago | 26m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.84% | 99.84% | 427 ms | ↓ 0.39x | 1 | 51m | 23d ago | 23m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.85% | 99.85% | 4338 ms | ↑ 1.26x | 1 | 0s | 29d ago | 37m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.72% | 99.72% | 800 ms | ↓ 0.85x | 1 | 0s | 22d ago | 27m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1281 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.94% | 97.94% | 1389 ms | ↓ 0.48x | 13 | 48m | 20d ago | 27m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.76% | 99.76% | 99.76% | 1989 ms | ↑ 1.10x | 1 | 30m | 10d ago | 23m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1137 ms | ↓ 0.72x | 0 | — | — | 25m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 472 ms | ↓ 0.56x | 0 | — | — | 25m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.81% | 99.81% | 677 ms | → 0.98x | 4 | 0s | 12d ago | 25m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.82% | 96.82% | 586 ms | ↓ 0.89x | 0 | — | — | 30m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.07% | 98.23% | 98.23% | 2058 ms | ↑ 1.06x | 1 | 21h 30m | 19d ago | 24m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1109 ms | → 0.97x | 0 | — | — | 23m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.68% | 55.68% | 1942 ms | ↑ 1.34x | 0 | — | — | 32m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.05% | 98.05% | 98.05% | 944 ms | → 1.03x | 2 | 4h 33m | 12d ago | 23m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1789 ms | ↑ 1.53x | 0 | — | — | 24m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3517 ms | → 0.96x | 0 | — | — | 37m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.20% | 97.20% | 954 ms | ↓ 0.71x | 0 | — | — | 37m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.89% | 98.91% | 98.91% | 594 ms | ↓ 0.65x | 3 | 1h 47m | 11d ago | 23m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.14% | 99.14% | 1368 ms | ↓ 0.94x | 2 | 0s | 10d ago | 30m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.85% | 83.85% | 3544 ms | ↑ 1.45x | 0 | — | — | 31m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 355 ms | ↓ 0.49x | 0 | — | — | 25m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.76% | 98.76% | 2832 ms | ↑ 1.31x | 0 | — | — | 28m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4400 ms | ↑ 1.35x | 0 | — | — | 24m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 93.04% | 93.04% | 734 ms | ↓ 0.94x | 1 | 0s | 29d ago | 32m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.72% | 98.72% | 1203 ms | ↑ 1.19x | 0 | — | — | 27m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 598 ms | ↑ 1.45x | 1 | 0s | 20d ago | 29m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.42% | 99.42% | 729 ms | ↓ 0.59x | 0 | — | — | 25m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1780 ms | → 1.03x | 0 | — | — | 24m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 98.02% | 98.02% | 1019 ms | ↓ 0.40x | 2 | 0s | 13d ago | 28m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.82% | 89.90% | 89.90% | 1423 ms | ↑ 1.35x | 2 | 0s | 16d ago | 27m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2349 ms | ↑ 1.05x | 0 | — | — | 24m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.00% | 77.00% | 1328 ms | ↑ 1.33x | 0 | — | — | 31m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 937 ms | → 0.96x | 0 | — | — | 24m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.27% | 98.27% | 2610 ms | ↑ 1.22x | 0 | — | — | 29m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 899 ms | → 0.95x | 0 | — | — | 23m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2605 ms | ↑ 1.58x | 0 | — | — | 24m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.70% | 82.70% | 2457 ms | ↑ 1.40x | 2 | 0s | 14d ago | 31m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.06% | 98.06% | 3155 ms | ↑ 2.00x | 0 | — | — | 32m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.87% | 99.87% | 2263 ms | ↑ 1.22x | 0 | — | — | 25m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.31% | 61.31% | 1148 ms | ↓ 0.76x | 0 | — | — | 31m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.35% | 64.35% | 1880 ms | ↑ 1.23x | 0 | — | — | 32m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.24% | 99.24% | 2061 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 892 ms | ↓ 0.48x | 0 | — | — | 29m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 574 ms | ↓ 0.82x | 1 | 0s | 24d ago | 31m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.91% | 97.91% | 1808 ms | ↓ 0.94x | 2 | 6h 16m | 8d ago | 31m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.46% | 88.46% | 88.46% | 2708 ms | ↓ 0.94x | 5 | 15h 33m | 11d ago | 23m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2630 ms | ↑ 1.14x | 0 | — | — | 42m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2767 ms | ↑ 1.29x | 0 | — | — | 24m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.06% | 99.06% | 4054 ms | ↑ 1.11x | 1 | 29m | 29d ago | 42m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.20% | 98.20% | 3825 ms | ↑ 1.18x | 0 | — | — | 43m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.15% | 76.15% | 3152 ms | ↑ 1.31x | 0 | — | — | 29m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 971 ms | → 0.95x | 0 | — | — | 25m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1405 ms | → 1.01x | 0 | — | — | 23m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.47% | 98.11% | 98.11% | 1668 ms | ↑ 1.98x | 7 | 8m | 9d ago | 24m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.65% | 99.65% | 1514 ms | ↑ 1.23x | 1 | 2h 60m | 15d ago | 25m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1849 ms | ↑ 1.27x | 0 | — | — | 43m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 632 ms | ↓ 0.39x | 1 | 0s | 27d ago | 42m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2479 ms | ↑ 1.24x | 1 | 0s | 14d ago | 41m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.83% | 89.83% | 1612 ms | → 0.96x | 0 | — | — | 31m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.81% | 99.81% | 963 ms | ↑ 1.21x | 1 | 0s | 26d ago | 42m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 628 ms | ↑ 1.16x | 0 | — | — | 25m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1955 ms | ↑ 1.65x | 2 | 0s | 8d ago | 24m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.49% | 85.49% | 2864 ms | ↑ 1.30x | 0 | — | — | 27m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2216 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2370 ms | ↑ 1.41x | 0 | — | — | 27m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.06% | 99.06% | 924 ms | ↑ 1.36x | 0 | — | — | 32m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.57% | 97.57% | 2635 ms | ↑ 2.04x | 0 | — | — | 27m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.91% | 99.91% | 99.91% | 1784 ms | ↑ 1.21x | 1 | 0s | 17d ago | 23m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 1777 ms | ↑ 1.44x | 1 | 0s | 9d ago | 25m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.94% | 99.94% | 1859 ms | ↑ 1.80x | 1 | 0s | 14d ago | 24m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2226 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 67.95% | 81.32% | 81.32% | 1210 ms | → 0.99x | 2 | 4d 20h | 24d ago | 25m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.15% | 99.15% | 1195 ms | ↑ 1.09x | 3 | 0s | 16d ago | 25m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.00% | 99.00% | 3225 ms | ↑ 1.81x | 0 | — | — | 32m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 88.29% | 88.29% | 1673 ms | ↑ 1.47x | 0 | — | — | 26m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.79% | 99.79% | 99.79% | 756 ms | ↑ 1.23x | 1 | 1h | 23d ago | 23m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.82% | 99.82% | 99.82% | 2117 ms | → 1.05x | 1 | 0s | 9d ago | 24m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.90% | 99.90% | 1720 ms | ↑ 1.24x | 2 | 11m | 24d ago | 24m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 24.59% | 24.59% | 2357 ms | ↑ 1.72x | 0 | — | — | 32m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1776 ms | ↑ 1.50x | 0 | — | — | 44m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2744 ms | ↑ 1.09x | 0 | — | — | 42m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 742 ms | ↑ 1.21x | 0 | — | — | 41m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.15% | 98.15% | 941 ms | ↓ 0.71x | 0 | — | — | 30m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 742 ms | ↑ 1.23x | 0 | — | — | 42m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.74% | 99.74% | 1642 ms | → 1.05x | 4 | 8m | 17d ago | 37m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.75% | 98.75% | 4747 ms | ↑ 1.06x | 0 | — | — | 43m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1045 ms | ↓ 0.46x | 0 | — | — | 41m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2448 ms | ↑ 1.42x | 0 | — | — | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.68% | 32.04% | 32.04% | 2202 ms | ↑ 1.17x | 9 | 2h 12m | 9d ago | 39m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.49% | 97.93% | 97.93% | 2087 ms | ↑ 1.18x | 126 | 29m | 13d ago | 41m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2802 ms | ↑ 1.10x | 0 | — | — | 37m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2553 ms | ↑ 1.34x | 2 | 0s | 14d ago | 32m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.82% | 42.82% | 948 ms | → 1.03x | 1 | 0s | 13d ago | 42m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1180 ms | → 1.02x | 0 | — | — | 41m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2954 ms | ↑ 1.06x | 1 | 0s | 26d ago | 37m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1424 ms | ↑ 1.05x | 2 | 14m | 17d ago | 29m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 19.89% | 19.89% | 711 ms | → 0.96x | 1 | 0s | 10d ago | 41m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2674 ms | ↑ 1.15x | 0 | — | — | 31m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.69% | 99.69% | 750 ms | ↓ 0.54x | 0 | — | — | 26m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 588 ms | ↑ 1.24x | 0 | — | — | 23m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 775 ms | ↑ 1.05x | 0 | — | — | 42m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.90% | 61.90% | 1645 ms | → 1.03x | 0 | — | — | 32m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 83.17% | 83.17% | 1467 ms | ↑ 1.55x | 3 | 8h 40m | 14d ago | 26m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2881 ms | ↑ 1.08x | 0 | — | — | 42m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.75% | 98.75% | 808 ms | ↓ 0.59x | 2 | 2h 55m | 9d ago | 25m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.41% | 89.41% | 2118 ms | ↑ 1.28x | 1 | 0s | 10d ago | 41m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.40% | 80.40% | 2250 ms | ↑ 1.14x | 1 | 13h | 20d ago | 43m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.06% | 88.06% | 919 ms | ↓ 0.87x | 2 | 0s | 9d ago | 25m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1285 ms | ↑ 1.27x | 1 | 0s | 13d ago | 41m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1104 ms | → 0.99x | 0 | — | — | 42m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.89% | 99.66% | 99.66% | 1334 ms | ↑ 1.29x | 2 | 0s | 9d ago | 40m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 46.23% | 46.23% | 200 ms | → 1.01x | 1 | 0s | 13d ago | 29m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.61% | 99.61% | 970 ms | → 1.05x | 0 | — | — | 42m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1752 ms | ↑ 1.60x | 0 | — | — | 24m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 924 ms | → 1.05x | 1 | 0s | 26d ago | 26m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.56% | 98.56% | 1700 ms | ↑ 1.18x | 0 | — | — | 27m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.66% | 96.66% | 1265 ms | ↑ 1.47x | 2 | 45m | 12d ago | 27m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.64% | 70.64% | 1402 ms | ↑ 1.32x | 0 | — | — | 31m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1342 ms | ↑ 1.12x | 0 | — | — | 23m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1357 ms | → 1.00x | 0 | — | — | 23m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.43% | 81.43% | 3339 ms | ↑ 1.55x | 1 | 0s | 13d ago | 31m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2231 ms | ↑ 1.21x | 0 | — | — | 41m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 966 ms | ↓ 0.43x | 0 | — | — | 24m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 536 ms | ↓ 0.66x | 1 | 0s | 14d ago | 37m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 45.74% | 24.81% | 24.81% | 2702 ms | ↑ 1.07x | 2 | 8d 2h | 14d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.75% | 85.75% | 1352 ms | ↑ 2.03x | 0 | — | — | 40m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.35% | 91.35% | 469 ms | ↑ 1.29x | 0 | — | — | 29m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.32% | 99.32% | 2514 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.76% | 96.76% | 1560 ms | ↑ 1.11x | 0 | — | — | 31m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.87% | 99.87% | 1851 ms | ↑ 1.55x | 1 | 0s | 26d ago | 24m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 3114 ms | ↑ 1.10x | 0 | — | — | 42m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.91% | 99.91% | 99.91% | 1607 ms | → 1.01x | 1 | 0s | 11d ago | 25m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4258 ms | ↑ 1.18x | 0 | — | — | 25m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.23% | 59.23% | 806 ms | ↑ 1.07x | 0 | — | — | 32m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.88% | 98.46% | 98.46% | 2316 ms | ↑ 1.39x | 2 | 0s | 13d ago | 29m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 42.40% | 42.40% | 3400 ms | ↑ 1.35x | 0 | — | — | 31m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.32% | 99.32% | 99.32% | 3036 ms | → 1.01x | 1 | 1h 58m | 12d ago | 24m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.24% | 99.24% | 4337 ms | ↑ 1.24x | 1 | 0s | 25d ago | 37m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3485 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2630 ms | ↑ 1.26x | 0 | — | — | 30m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 92.26% | 92.26% | 2795 ms | → 1.03x | 3 | 12h 57m | 22d ago | 29m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.28% | 99.28% | 2345 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.23% | 80.23% | 450 ms | ↓ 0.34x | 0 | — | — | 31m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 0.98x | 1 | 0s | 26d ago | 42m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2846 ms | ↑ 1.24x | 0 | — | — | 41m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1387 ms | ↓ 0.92x | 0 | — | — | 25m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3389 ms | → 1.05x | 1 | 0s | 8d ago | 42m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.30% | 91.72% | 91.72% | 2637 ms | ↓ 0.89x | 12 | 0s | 14d ago | 29m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.67% | 80.67% | 2755 ms | ↑ 1.34x | 1 | 0s | 28d ago | 31m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.02% | 87.02% | 295 ms | ↓ 0.20x | 0 | — | — | 31m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 100.00% | 99.93% | 99.93% | 1696 ms | ↑ 1.31x | 0 | — | — | 25m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1387 ms | ↑ 1.22x | 0 | — | — | 40m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.65% | 98.65% | 863 ms | ↑ 1.25x | 0 | — | — | 29m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 24.24% | 24.24% | 916 ms | ↑ 1.84x | 0 | — | — | 32m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.53% | 97.60% | 97.60% | 455 ms | ↓ 0.43x | 5 | 16m | 11d ago | 26m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 916 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 89.65% | 37.39% | 37.39% | 887 ms | → 0.96x | 1 | 2d 22h | 30d ago | 42m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.91% | 98.91% | 1510 ms | ↑ 1.23x | 1 | 5h 60m | 23d ago | 40m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 20.73% | 20.73% | 1555 ms | ↑ 1.34x | 0 | — | — | 40m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 654 ms | ↓ 0.53x | 0 | — | — | 25m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.55% | 99.55% | 2990 ms | ↑ 1.88x | 1 | 0s | 7d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3807 ms | ↑ 1.08x | 0 | — | — | 26m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 470 ms | ↓ 0.58x | 0 | — | — | 25m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.58% | 93.58% | 4721 ms | ↑ 1.07x | 0 | — | — | 42m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.59% | 99.59% | 2143 ms | ↑ 1.20x | 1 | 1h 20m | 24d ago | 41m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.26% | 99.26% | 1023 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.90% | 99.90% | 1381 ms | ↓ 0.91x | 0 | — | — | 25m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2731 ms | ↑ 1.46x | 0 | — | — | 42m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 1892 ms | ↑ 1.30x | 0 | — | — | 40m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 674 ms | ↑ 1.35x | 0 | — | — | 44m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 57.70% | 88.68% | 88.68% | 2089 ms | ↑ 1.37x | 1 | 12d 20h | 20d ago | 40m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.83% | 98.83% | 2864 ms | ↑ 1.06x | 0 | — | — | 26m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.79% | 96.79% | 3323 ms | ↑ 1.12x | 0 | — | — | 42m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.81% | 99.81% | 612 ms | ↓ 0.82x | 1 | 20m | 25d ago | 26m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.96% | 88.96% | 2520 ms | ↑ 1.35x | 0 | — | — | 30m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.84% | 99.84% | 814 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1728 ms | → 1.01x | 0 | — | — | 25m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2150 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1565 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.93% | 99.93% | 1620 ms | ↑ 1.13x | 1 | 0s | 17d ago | 24m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1386 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1065 ms | → 1.03x | 0 | — | — | 40m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.86% | 84.86% | 1678 ms | ↓ 0.91x | 1 | 0s | 22d ago | 37m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.21% | 98.21% | 2724 ms | ↑ 1.33x | 2 | 0s | 25d ago | 27m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.36% | 92.36% | 4542 ms | ↑ 1.26x | 2 | 25m | 12d ago | 44m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.93% | 99.93% | 2558 ms | ↑ 1.75x | 1 | 0s | 10d ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.06% | 97.32% | 97.32% | 1804 ms | ↑ 1.27x | 12 | 10m | 13d ago | 25m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.76% | 97.76% | 3700 ms | ↑ 1.82x | 1 | 0s | 17d ago | 26m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.84% | 98.84% | 1336 ms | ↑ 1.23x | 0 | — | — | 31m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.75% | 98.75% | 1874 ms | → 1.01x | 0 | — | — | 40m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.88% | 99.62% | 99.62% | 3077 ms | ↑ 1.36x | 1 | 29m | 29d ago | 25m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 100.00% | 98.01% | 98.01% | 4239 ms | ↑ 1.17x | 0 | — | — | 28m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1233 ms | ↑ 1.69x | 0 | — | — | 25m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.66% | 98.66% | 1306 ms | ↑ 1.64x | 4 | 7m | 10d ago | 29m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2688 ms | ↑ 1.31x | 0 | — | — | 24m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.51% | 97.51% | 97.51% | 164 ms | ↓ 0.13x | 2 | 6h 36m | 14d ago | 23m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 30.92% | 30.92% | 1268 ms | ↑ 1.22x | 0 | — | — | 40m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1613 ms | ↑ 1.57x | 0 | — | — | 30m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 45.44% | 45.44% | 45.44% | 1328 ms | ↓ 0.92x | 1 | 13d 23h | 22d ago | 23m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1900 ms | ↑ 1.30x | 0 | — | — | 40m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.88% | 88.88% | 4228 ms | ↑ 1.39x | 0 | — | — | 31m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1914 ms | ↑ 1.22x | 1 | 0s | 13d ago | 40m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 20.72% | 20.72% | 2144 ms | → 1.00x | 0 | — | — | 42m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 692 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.25% | 97.25% | 2836 ms | ↑ 1.41x | 0 | — | — | 27m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2546 ms | ↑ 1.17x | 1 | 0s | 28d ago | 40m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1243 ms | → 1.00x | 2 | 10m | 13d ago | 41m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 20.51% | 20.51% | 2397 ms | ↑ 1.36x | 0 | — | — | 32m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.71% | 99.71% | 1376 ms | ↓ 0.54x | 4 | 30m | 15d ago | 24m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2893 ms | ↑ 1.13x | 0 | — | — | 29m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2191 ms | ↑ 1.21x | 0 | — | — | 42m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2064 ms | → 1.03x | 0 | — | — | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 762 ms | ↓ 0.56x | 0 | — | — | 40m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 312 ms | → 0.99x | 0 | — | — | 24m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.68% | 98.68% | 1564 ms | ↑ 1.23x | 0 | — | — | 27m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.14% | 99.14% | 1915 ms | ↑ 1.16x | 1 | 0s | 20d ago | 42m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 806 ms | ↑ 1.45x | 0 | — | — | 40m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 405 ms | → 1.00x | 0 | — | — | 23m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 96.91% | 99.59% | 99.59% | 4193 ms | ↑ 1.32x | 3 | 6h 10m | 19h ago | 43m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.75% | 99.94% | 99.73% | 99.73% | 3334 ms | ↑ 1.11x | 1 | 0s | 6d ago | 42m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.75% | 99.54% | 99.26% | 99.26% | 2275 ms | ↑ 1.48x | 4 | 22m | 3d ago | 42m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.75% | 98.63% | 99.74% | 99.74% | 1919 ms | ↑ 1.13x | 4 | 1h 38m | 3d ago | 42m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.71% | 20.71% | 20.71% | 2270 ms | → 1.04x | 5 | 0s | 4d ago | 41m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.75% | 99.66% | 98.88% | 98.88% | 3110 ms | ↑ 1.16x | 6 | 0s | 7d ago | 43m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 45.05% | 45.05% | 1394 ms | ↑ 1.11x | 2 | 0s | 4d ago | 42m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.77% | 62.71% | 62.71% | 2766 ms | ↑ 1.06x | 4 | 0s | 3d ago | 42m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.75% | 95.48% | 44.75% | 44.75% | 3441 ms | ↑ 1.13x | 42 | 21m | 6d ago | 42m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.75% | 99.94% | 99.98% | 99.98% | 704 ms | ↑ 1.07x | 1 | 0s | 24h ago | 39m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.75% | 99.94% | 99.75% | 99.75% | 3070 ms | ↑ 1.11x | 1 | 0s | 24h ago | 39m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.75% | 99.94% | 99.53% | 99.53% | 2045 ms | → 1.03x | 1 | 0s | 24h ago | 39m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.75% | 99.94% | 31.29% | 31.29% | 1188 ms | ↑ 1.12x | 1 | 0s | 24h ago | 39m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.75% | 99.66% | 99.90% | 99.90% | 921 ms | ↑ 1.07x | 4 | 10m | 24h ago | 39m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.75% | 99.89% | 99.87% | 99.87% | 2927 ms | ↑ 1.06x | 2 | 0s | 24h ago | 39m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.89% | 25.93% | 25.93% | 2745 ms | ↑ 1.26x | 2 | 0s | 16h ago | 44m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.75% | 99.82% | 14.43% | 14.43% | 2659 ms | → 1.02x | 1 | 0s | 4h ago | 38m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.89% | 20.73% | 20.73% | 2005 ms | ↑ 1.74x | 2 | 0s | 4h ago | 37m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.89% | 22.38% | 22.38% | 2313 ms | ↑ 1.34x | 2 | 0s | 4h ago | 37m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.75% | 99.94% | 99.95% | 99.95% | 2299 ms | ↑ 1.14x | 1 | 0s | 5d ago | 37m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.89% | 99.80% | 99.80% | 2234 ms | ↑ 1.13x | 2 | 0s | 4h ago | 37m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.68% | 98.68% | 995 ms | ↓ 0.84x | 6 | 0s | 3d ago | 31m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.88% | 82.42% | 82.42% | 2690 ms | ↑ 1.31x | 2 | 0s | 3d ago | 31m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.53% | 97.53% | 2715 ms | ↑ 1.28x | 1 | 0s | 3d ago | 32m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.71% | 67.27% | 67.27% | 1356 ms | → 0.96x | 4 | 5m | 3d ago | 31m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 48.61% | 48.61% | 2020 ms | ↑ 1.39x | 2 | 0s | 3d ago | 32m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.43% | 63.43% | 635 ms | ↓ 0.92x | 3 | 0s | 3d ago | 31m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.49% | 90.49% | 2258 ms | ↑ 1.14x | 2 | 0s | 3d ago | 31m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.65% | 20.60% | 20.60% | 608 ms | ↓ 0.37x | 5 | 6m | 3d ago | 32m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 22.78% | 22.78% | 658 ms | ↓ 0.37x | 2 | 0s | 3d ago | 32m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.54% | 22.42% | 22.42% | 1727 ms | ↑ 1.14x | 4 | 30m | 7d ago | 32m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.75% | 99.77% | 92.82% | 92.82% | 1466 ms | ↓ 0.90x | 4 | 0s | 2h ago | 30m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.88% | 68.28% | 68.28% | 1658 ms | ↑ 1.41x | 2 | 0s | 3d ago | 31m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.94% | 98.50% | 98.50% | 1943 ms | ↑ 1.24x | 1 | 0s | 6d ago | 30m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.21% | 96.21% | 2289 ms | ↑ 1.48x | 1 | 0s | 3d ago | 32m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.36% | 62.36% | 2615 ms | ↑ 1.19x | 1 | 0s | 3d ago | 31m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.26% | 96.70% | 96.70% | 4652 ms | ↑ 1.16x | 12 | 43m | 3d ago | 32m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2242 ms | ↑ 1.15x | 2 | 0s | 3d ago | 31m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.39% | 98.39% | 2503 ms | ↑ 1.33x | 1 | 0s | 5d ago | 30m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.64% | 96.64% | 3446 ms | ↑ 1.49x | 1 | 0s | 4d ago | 32m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 22.51% | 22.51% | 4002 ms | ↑ 1.57x | 1 | 0s | 4d ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.75% | 99.07% | 91.51% | 91.51% | 1427 ms | → 0.98x | 15 | 2m | 3d ago | 31m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.30% | 97.63% | 97.63% | 2194 ms | ↑ 1.15x | 10 | 6m | 16h ago | 29m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.04% | 99.04% | 713 ms | ↑ 1.52x | 1 | 0s | 24h ago | 29m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.58% | 98.58% | 2568 ms | ↓ 0.60x | 1 | 0s | 24h ago | 29m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 75.37% | 75.37% | 921 ms | ↓ 0.86x | 1 | 0s | 24h ago | 29m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.75% | 97.32% | 98.36% | 98.36% | 4014 ms | ↑ 1.20x | 19 | 41m | 6h ago | 28m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.74% | 65.21% | 66.66% | 66.66% | 2046 ms | ↑ 1.51x | 2 | 5d 2h | 7d ago | 27m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.74% | 98.07% | 96.43% | 96.43% | 2164 ms | ↑ 1.07x | 2 | 6h 1m | 2d ago | 26m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.74% | 99.47% | 99.48% | 99.48% | 419 ms | ↓ 0.36x | 4 | 35m | 1d ago | 23m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.74% | 99.94% | 99.94% | 99.94% | 2414 ms | ↑ 1.46x | 1 | 0s | 4d ago | 25m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.74% | 99.94% | 99.93% | 99.93% | 1660 ms | → 0.96x | 1 | 0s | 2d ago | 25m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 99.88% | 98.97% | 98.97% | 3057 ms | ↑ 1.06x | 2 | 0s | 5d ago | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.74% | 99.94% | 97.76% | 97.76% | 497 ms | ↓ 0.87x | 1 | 0s | 5h ago | 24m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.74% | 99.94% | 98.22% | 98.22% | 1848 ms | ↑ 1.34x | 1 | 0s | 5d ago | 26m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.74% | 99.44% | 99.44% | 99.44% | 990 ms | ↓ 0.90x | 3 | 30m | 8h ago | 25m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.74% | 99.93% | 99.93% | 99.93% | 2710 ms | ↑ 1.62x | 1 | 0s | 13h ago | 24m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 99.74% | 99.94% | 99.95% | 99.95% | 558 ms | ↓ 0.35x | 1 | 0s | 1d ago | 23m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.74% | 99.77% | 99.84% | 99.84% | 1097 ms | ↑ 1.31x | 2 | 30m | 16h ago | 24m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.51% | 99.66% | 96.09% | 96.09% | 3302 ms | ↑ 1.14x | 6 | 0s | 2d ago | 43m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.66% | 85.67% | 85.67% | 2217 ms | → 1.05x | 6 | 0s | 3d ago | 42m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.51% | 99.43% | 99.00% | 99.00% | 3903 ms | ↑ 1.06x | 9 | 2m | 18h ago | 40m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.51% | 99.43% | 99.16% | 99.16% | 4087 ms | ↑ 1.07x | 9 | 2m | 18h ago | 40m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.51% | 99.71% | 79.64% | 79.64% | 1559 ms | ↓ 0.87x | 5 | 0s | 4h ago | 37m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.50% | 99.42% | 53.38% | 53.38% | 1050 ms | ↓ 0.91x | 6 | 20m | 3d ago | 32m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.50% | 99.83% | 21.60% | 21.60% | 1275 ms | ↑ 1.16x | 3 | 0s | 3d ago | 32m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.50% | 99.77% | 23.24% | 23.24% | 1501 ms | ↑ 1.09x | 4 | 0s | 4d ago | 32m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.50% | 99.48% | 98.94% | 98.94% | 898 ms | ↓ 0.41x | 5 | 24m | 7d ago | 29m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.49% | 99.88% | 96.82% | 96.82% | 851 ms | ↑ 1.20x | 2 | 0s | 4d ago | 29m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.49% | 99.88% | 98.89% | 98.89% | 396 ms | ↑ 1.33x | 1 | 29m | 17h ago | 29m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.49% | 97.20% | 97.84% | 97.84% | 4433 ms | ↑ 1.16x | 24 | 28m | 6h ago | 28m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.49% | 99.36% | 99.74% | 99.74% | 4670 ms | ↑ 1.36x | 7 | 17m | 6h ago | 28m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.49% | 99.18% | 96.81% | 96.81% | 1385 ms | → 0.96x | 6 | 35m | 3d ago | 26m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.49% | 99.18% | 98.69% | 98.69% | 1379 ms | ↓ 0.59x | 4 | 60m | 4d ago | 25m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.49% | 97.54% | 98.72% | 98.72% | 836 ms | ↑ 1.42x | 7 | 2h 8m | 3d ago | 25m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.49% | 99.82% | 99.64% | 99.64% | 2025 ms | ↓ 0.66x | 3 | 0s | 5d ago | 24m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.49% | 99.79% | 99.79% | 99.79% | 1738 ms | ↓ 0.88x | 3 | 0s | 5d ago | 23m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.49% | 99.82% | 97.97% | 97.97% | 617 ms | ↓ 0.80x | 3 | 0s | 5d ago | 26m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.49% | 99.06% | 99.15% | 99.15% | 2193 ms | ↑ 1.56x | 9 | 21m | 2d ago | 25m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.49% | 99.59% | 99.55% | 99.55% | 1113 ms | ↓ 0.77x | 4 | 15m | 5d ago | 23m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.49% | 99.73% | 99.73% | 99.73% | 1368 ms | → 1.03x | 2 | 0s | 5d ago | 24m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.25% | 99.65% | 90.64% | 90.64% | 720 ms | ↓ 0.91x | 6 | 0s | 3d ago | 31m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.25% | 99.48% | 68.68% | 68.68% | 1849 ms | ↑ 1.50x | 7 | 9m | 2d ago | 31m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.25% | 99.77% | 99.82% | 99.82% | 366 ms | ↓ 0.24x | 4 | 0s | 3d ago | 32m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.23% | 99.54% | 99.54% | 99.54% | 389 ms | ↓ 0.86x | 4 | 5m | 2h ago | 25m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.23% | 98.89% | 85.67% | 85.67% | 1560 ms | ↓ 0.61x | 15 | 9m | 22h ago | 24m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.23% | 74.77% | 86.21% | 86.21% | 921 ms | → 1.04x | 7 | 1d 2h | 6d ago | 24m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.02% | 99.66% | 55.75% | 55.75% | 1692 ms | ↑ 1.22x | 6 | 0s | 24h ago | 39m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.01% | 98.28% | 48.74% | 48.74% | 3412 ms | ↑ 1.21x | 8 | 1h 3m | 4h ago | 38m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (67)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.00% | 98.55% | 86.46% | 86.46% | 4589 ms | ↑ 1.10x | 25 | 1m | 1m ago | 32m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.98% | 99.77% | 79.72% | 79.72% | 1986 ms | ↑ 1.05x | 2 | 30m | 7h ago | 29m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 98.98% | 99.77% | 99.87% | 99.87% | 1148 ms | ↓ 0.75x | 1 | 1h 9m | 7d ago | 25m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 98.98% | 96.14% | 97.45% | 97.45% | 664 ms | ↓ 0.76x | 3 | 8h 24m | 2d ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.77% | 99.03% | 98.34% | 98.34% | 4439 ms | → 1.03x | 17 | 0s | 2d ago | 43m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.77% | 99.08% | 69.12% | 69.12% | 4087 ms | → 1.00x | 13 | 5m | 4h ago | 38m ago |
| [Crond](https://lmspeed.net/provider/crond) | 98.76% | 99.65% | 20.61% | 20.61% | 4611 ms | ↑ 1.38x | 5 | 6m | 2h ago | 37m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.75% | 99.30% | 98.84% | 98.84% | 2042 ms | ↑ 1.30x | 5 | 36m | 2d ago | 30m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.72% | 99.71% | 98.20% | 98.20% | 447 ms | ↓ 0.51x | 1 | 1h 40m | 5d ago | 27m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.72% | 99.71% | 93.02% | 93.02% | 31 ms | → 1.00x | 1 | 1h 22m | 6h ago | 26m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.72% | 99.71% | 96.28% | 96.28% | 1410 ms | ↑ 1.44x | 1 | 2h 1m | 5d ago | 24m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.72% | 99.18% | 98.75% | 98.75% | 2485 ms | ↑ 1.20x | 6 | 40m | 15h ago | 25m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.72% | 99.59% | 99.41% | 99.41% | 4870 ms | ↑ 1.38x | 6 | 3m | 11h ago | 26m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.52% | 98.39% | 98.90% | 98.90% | 1605 ms | → 0.95x | 19 | 13m | 4h ago | 37m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.51% | 98.56% | 18.94% | 18.94% | 3844 ms | ↑ 1.35x | 11 | 32m | 3d ago | 37m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.25% | 99.25% | 62.22% | 62.22% | 1144 ms | ↓ 0.45x | 3 | 1h 32m | 3d ago | 32m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.22% | 99.53% | 54.35% | 54.35% | 596 ms | ↓ 0.82x | 7 | 4m | 6h ago | 29m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.21% | 98.65% | 98.59% | 98.59% | 3164 ms | ↑ 1.37x | 23 | 0s | 2d ago | 24m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.21% | 98.34% | 98.34% | 98.34% | 3113 ms | → 1.01x | 1 | 2h 37m | 3d ago | 23m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.99% | 98.49% | 67.60% | 67.60% | 4744 ms | ↑ 1.08x | 24 | 4m | 34s ago | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 97.99% | 97.74% | 95.98% | 95.98% | 3762 ms | ↑ 1.30x | 4 | 3h 38m | 3d ago | 30m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 97.96% | 97.37% | 98.73% | 98.73% | 2999 ms | ↑ 1.38x | 18 | 44m | 6h ago | 28m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 97.96% | 98.25% | 92.34% | 92.34% | 808 ms | ↑ 1.15x | 15 | 23m | 17h ago | 26m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 97.79% | 99.03% | 99.71% | 99.71% | 209 ms | ↑ 1.41x | 12 | 8m | 4h ago | 41m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.79% | 98.40% | 87.15% | 87.15% | 4155 ms | ↑ 1.27x | 28 | 0s | 1d ago | 44m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.79% | 99.48% | 99.62% | 99.62% | 2575 ms | ↑ 1.12x | 1 | 3h 60m | 6d ago | 40m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.54% | 96.79% | 20.05% | 20.05% | 870 ms | ↓ 0.80x | 53 | 1m | 19h ago | 38m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.54% | 98.45% | 85.92% | 85.92% | 4413 ms | → 0.98x | 26 | 1m | 5h ago | 40m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.54% | 97.42% | 74.82% | 74.82% | 4518 ms | ↑ 1.07x | 40 | 3m | 4h ago | 38m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.24% | 98.90% | 73.09% | 73.09% | 915 ms | → 0.95x | 10 | 27m | 1d ago | 31m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 97.24% | 22.51% | 32.05% | 32.05% | 2381 ms | → 1.00x | 2 | 11d 13h | 3d ago | 31m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.21% | 99.07% | 99.62% | 99.62% | 2125 ms | ↑ 1.16x | 2 | 3h 20m | 4d ago | 29m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 97.19% | 97.82% | 97.82% | 97.82% | 3056 ms | → 1.02x | 12 | 9m | 19h ago | 24m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 97.03% | 95.11% | 99.32% | 99.32% | 4123 ms | ↑ 1.28x | 11 | 2h 40m | 8d ago | 37m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.95% | 96.39% | 84.08% | 84.08% | 4450 ms | → 0.98x | 51 | 6m | 1d ago | 28m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 96.78% | 98.10% | 20.11% | 20.11% | 4558 ms | ↑ 1.22x | 33 | 0s | 10h ago | 37m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.74% | 95.12% | 73.14% | 73.14% | 2006 ms | ↑ 1.26x | 14 | 1h 43m | 5d ago | 31m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.69% | 82.32% | 82.66% | 82.66% | 4584 ms | → 1.04x | 37 | 3h 10m | 5h ago | 27m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.69% | 98.60% | 51.78% | 51.78% | 4189 ms | ↑ 1.92x | 22 | 2m | 6h ago | 28m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.55% | 95.93% | 18.84% | 18.84% | 2688 ms | → 1.02x | 66 | 2m | 4h ago | 38m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.47% | 97.33% | 86.30% | 86.30% | 4728 ms | ↑ 1.06x | 34 | 9m | 15h ago | 29m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 96.42% | 90.92% | 90.92% | 90.92% | 4640 ms | → 1.03x | 21 | 1h 43m | 15h ago | 24m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.42% | 97.28% | 97.28% | 97.28% | 4602 ms | → 1.01x | 17 | 5m | 5h ago | 23m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.42% | 98.07% | 98.56% | 98.56% | 2294 ms | ↑ 1.51x | 7 | 1h 24m | 22h ago | 25m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.06% | 98.05% | 96.52% | 96.52% | 1720 ms | ↑ 1.28x | 8 | 1h 15m | 4h ago | 38m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 95.82% | 22.29% | 74.79% | 74.79% | 3684 ms | → 1.00x | 6 | 3d 21h | 6h ago | 44m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 95.59% | 98.91% | 99.57% | 99.57% | 4098 ms | → 0.99x | 18 | 2m | 3d ago | 42m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.54% | 96.66% | 98.49% | 98.49% | 4572 ms | ↑ 1.14x | 55 | 2m | 10h ago | 37m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 95.24% | 88.30% | 36.25% | 36.25% | 1934 ms | ↑ 1.06x | 14 | 5h 29m | 5d ago | 32m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.74% | 96.23% | 83.01% | 83.01% | 4850 ms | → 1.03x | 59 | 3m | 16h ago | 30m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 94.63% | 88.36% | 93.06% | 93.06% | 1181 ms | ↓ 0.46x | 84 | 31m | 5h ago | 25m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 94.37% | 97.03% | 90.44% | 90.44% | 4695 ms | ↑ 1.25x | 13 | 33m | 11h ago | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.22% | 97.42% | 98.84% | 98.84% | 3843 ms | ↑ 1.30x | 2 | 8h 60m | 4d ago | 41m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 89.00% | 46.63% | 29.99% | 29.99% | 3175 ms | ↑ 1.07x | 189 | 1h 36m | 1h ago | 24m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 88.49% | 93.75% | 95.50% | 95.50% | 1775 ms | ↓ 0.83x | 14 | 2h 55m | 7h ago | 26m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 87.53% | 71.24% | 92.37% | 92.37% | 4639 ms | ↑ 1.80x | 4 | 2d 2h | 6h ago | 28m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.47% | 88.01% | 21.19% | 21.19% | 4521 ms | → 0.98x | 159 | 9m | 3m ago | 32m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.77% | 88.68% | 58.31% | 58.31% | 4037 ms | → 1.03x | 154 | 8m | 2h ago | 27m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 83.89% | 94.06% | 94.06% | 94.06% | 1509 ms | → 0.99x | 4 | 6h 14m | 6d ago | 25m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 80.56% | 95.14% | 91.22% | 91.22% | 1387 ms | ↑ 1.23x | 20 | 1h 21m | 2h ago | 23m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 75.94% | 71.74% | 25.05% | 25.05% | 4648 ms | → 0.98x | 292 | 18m | 2h ago | 31m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.71% | 71.23% | 62.68% | 62.68% | 4859 ms | → 1.01x | 320 | 16m | 8m ago | 38m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 67.89% | 78.13% | 96.91% | 96.91% | 4559 ms | ↑ 1.16x | 216 | 20m | 2h ago | 41m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 45.11% | 40.71% | 31.99% | 31.99% | 2148 ms | ↑ 1.17x | 2 | 8d 22h | 6d ago | 32m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 29.08% | 6.65% | 23.81% | 23.81% | 2224 ms | → 1.00x | 2 | 13d 22h | 6h ago | 26m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 27.48% | 6.30% | 64.01% | 64.01% | 2283 ms | → 1.00x | 2 | 14d | 6h ago | 28m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 10.78% | 41.39% | 31.23% | 31.23% | 1147 ms | ↑ 1.98x | 4 | 4d 10h | 12d ago | 31m ago |

</details>

<details open>
<summary><strong>🔴 Down (257)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.40% | 97.55% | 96.69% | 96.69% | 1569 ms | → 1.00x | 4 | 3h 55m | 6h ago | 26m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 89.95% | 97.54% | 99.24% | 99.24% | 3203 ms | ↑ 1.12x | 3 | 4h 53m | 15h ago | 43m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 87.97% | 46.43% | 47.96% | 47.96% | 503 ms | ↓ 0.92x | 2 | 8d | 19h ago | 31m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.80% | 81.25% | 81.58% | 81.58% | 4380 ms | → 0.96x | 125 | 41m | 23m ago | 23m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 70.84% | 48.74% | 46.50% | 46.50% | 690 ms | → 1.03x | 5 | 3d 1h | 2d ago | 24m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 69.67% | 48.52% | 67.33% | 67.33% | 688 ms | → 0.99x | 6 | 2d 13h | 2d ago | 31m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 47.31% | 87.54% | 92.87% | 92.87% | 2347 ms | ↑ 1.13x | 8 | 11h 5m | 4d ago | 25m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 47.06% | 87.64% | 86.55% | 86.55% | 1240 ms | → 1.03x | 1 | 3d 16h | 4d ago | 41m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 36.83% | 84.27% | 90.25% | 90.25% | 1721 ms | ↓ 0.92x | 8 | 13h 51m | 4d ago | 25m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 24.55% | 75.50% | 82.67% | 82.67% | 4965 ms | ↑ 2.52x | 108 | 1h 13m | 2h ago | 26m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 19.44% | 81.58% | 89.69% | 89.69% | 646 ms | ↓ 0.67x | 1 | 5d 15h | 6d ago | 25m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 5.63% | 77.08% | 87.28% | 87.28% | 597 ms | ↓ 0.93x | 24 | 6h 33m | 7d ago | 24m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.97% | 1.60% | 57.81% | 57.81% | 3765 ms | ↑ 1.13x | 29 | 1d | 1d ago | 44m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.98% | 49.40% | 50.30% | 50.30% | 2844 ms | ↑ 1.37x | 10 | 1d 12h | 23h ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 78.61% | 78.61% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 65.11% | 65.11% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 70.05% | 70.05% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 42.10% | 42.10% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 75.04% | 75.04% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 56.10% | 56.10% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.36% | 5.36% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.89% | 11.89% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 51.64% | 51.64% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.22% | 3.22% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 56.45% | 87.42% | 87.42% | — | — | 1 | 13d 3h | 13d ago | 26m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 78.85% | 78.85% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.61% | 34.61% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 88.05% | 88.05% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.04% | 22.04% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 70.75% | 70.75% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 47.17% | 47.17% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.07% | 28.07% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 37.76% | 87.30% | 87.30% | — | — | 6 | 3d 2h | 19d ago | 42m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 79.22% | 79.22% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.67% | 59.67% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 73.18% | 73.18% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 21h | 13d ago | 43m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.87% | 13.87% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 46.45% | 46.45% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 3.44% | 89.90% | 89.90% | — | — | 4 | 7d 6h | 29d ago | 39m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.79% | 31.79% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 66.86% | 81.37% | 81.37% | — | — | 1 | 9d 22h | 10d ago | 24m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 79.61% | 79.61% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 48.75% | 47.17% | 47.17% | — | — | 3 | 3d 5h | 10d ago | 26m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 38.34% | 84.84% | 84.84% | — | — | 1 | 18d 14h | 19d ago | 28m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.25% | 3.25% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 73.42% | 85.44% | 85.44% | — | — | 1 | 8d 1h | 8d ago | 24m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 79.46% | 79.46% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 29.04% | 29.04% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.31% | 49.31% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.95% | 1.95% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 87.00% | 87.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 44.92% | 44.92% | 44.92% | — | — | 1 | 14d | 14d ago | 24m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 70.13% | 70.13% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 70.57% | 70.57% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 67.66% | 81.72% | 81.72% | — | — | 3 | 3d 5h | 10d ago | 26m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 28.37% | 28.37% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.88% | 51.88% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 48.02% | 48.02% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.95% | 22.95% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 29.71% | 79.56% | 79.56% | — | — | 4 | 5d 7h | 21d ago | 43m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 29.11% | 39.77% | 39.77% | — | — | 3 | 7d 3h | 21d ago | 39m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 3h | 19d ago | 23m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 31.37% | 56.49% | 56.49% | — | — | 1 | 20d 20h | 21d ago | 26m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.36% | 54.36% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.48% | 22.48% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.91% | 4.91% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.55% | 62.55% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 79.17% | 79.17% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 53.24% | 76.41% | 76.41% | — | — | 1 | 14d 2h | 14d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.99% | 5.99% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 75.62% | 75.62% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 78.00% | 78.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 30.19% | 30.19% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 38.77% | 88.60% | 88.60% | — | — | 2 | 9d 4h | 18d ago | 30m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 24.66% | 24.66% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 22.06% | 22.06% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.29% | 50.29% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 29.47% | 29.47% | 29.47% | — | — | 2 | 4d 13h | 9d ago | 24m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 67.60% | 80.08% | 80.08% | — | — | 4 | 2d 10h | 10d ago | 26m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 67.15% | 84.62% | 84.62% | — | — | 13 | 17h 42m | 10d ago | 26m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 50.44% | 50.44% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 23.74% | 23.88% | 23.88% | — | — | 8 | 1d 5h | 10d ago | 26m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.12% | 7.12% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 60.17% | 60.17% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.43% | 44.43% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 25.05% | 25.05% | 25.05% | — | — | 3 | 4d 17h | 14d ago | 25m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.37% | 40.37% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 70.06% | 78.20% | 78.20% | — | — | 4 | 2d 5h | 9d ago | 43m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 24.34% | 24.34% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 79.18% | 79.18% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.94% | 55.94% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.15% | 37.15% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 21.96% | 70.36% | 70.36% | — | — | 2 | 11d 18h | 24d ago | 29m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 75.01% | 75.01% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 6.30% | 68.86% | 68.86% | — | — | 1 | 28d 4h | 28d ago | 26m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.42% | 2.42% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 79.39% | 79.39% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.73% | 39.73% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 21.38% | 93.11% | 93.11% | — | — | 1 | 23d 17h | 24d ago | 37m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 79.17% | 79.17% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.19% | 31.19% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 79.08% | 79.08% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 47.16% | 47.16% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 20.28% | 20.28% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 41.71% | 41.71% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 76.85% | 76.85% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 61.23% | 61.23% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 26.37% | 26.37% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 2h | 19d ago | 25m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 2h | 19d ago | 25m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 46.60% | 46.60% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.00% | 3.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 3h | 19d ago | 25m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.25% | 41.25% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.87% | 73.87% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 12.71% | 39.79% | 39.79% | — | — | 2 | 13d 4h | 26d ago | 40m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.36% | 56.36% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 31.35% | 31.35% | 31.35% | — | — | 1 | 13d | 13d ago | 25m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 37.98% | 37.98% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 57.13% | 57.13% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 84.91% | 84.91% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 63.24% | 96.55% | 96.55% | — | — | 2 | 5d 11h | 11d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.03% | 27.03% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.38% | 11.38% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.03% | 23.03% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.60% | 50.60% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 89.90% | 89.90% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 51.61% | 51.61% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 8.05% | 70.49% | 70.49% | — | — | 1 | 27d 16h | 28d ago | 28m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.78% | 8.78% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.30% | 47.30% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 43.40% | 49.03% | 49.03% | — | — | 2 | 8d 12h | 17d ago | 29m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 19.86% | 19.86% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.72% | 52.72% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 91.05% | 91.05% | — | — | 1 | 12d 21h | 13d ago | 37m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.99% | 36.99% | — | — | 1 | 19d 3h | 19d ago | 31m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.89% | 20.89% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 31.48% | 31.48% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 43.84% | 43.84% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.30% | 5.30% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 76.07% | 76.07% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 86.27% | 86.27% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 13.11% | 54.82% | 54.82% | — | — | 1 | 26d 5h | 26d ago | 23m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 79.26% | 79.26% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 78.23% | 78.23% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.01% | 61.01% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 71.64% | 71.64% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 78.09% | 78.09% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 22h | 13d ago | 25m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.65% | 18.65% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 57.13% | 57.13% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 38.42% | 38.42% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.89% | 3.89% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.52% | 32.52% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 65.54% | 65.54% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.61% | 23.61% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.03% | 7.03% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.75% | 62.75% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 26.77% | 26.77% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.60% | 64.60% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 35.02% | 35.02% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 67.66% | 81.45% | 81.45% | — | — | 3 | 3d 5h | 10d ago | 26m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.47% | 4.47% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 50.06% | 50.06% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 43.40% | 43.40% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 32.70% | 32.70% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 19.36% | 19.36% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 12.71% | 5.24% | 5.24% | — | — | 2 | 13d 4h | 26d ago | 40m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.92% | 10.92% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.17% | 17.17% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.07% | 16.07% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 29.09% | 29.09% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.41% | 9.41% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.65% | 7.65% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.78% | 0.78% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.44% | 4.44% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.15% | 5.15% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.71% | 47.71% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 41.39% | 41.39% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 79.24% | 79.24% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 68.53% | 68.53% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 43.15% | 43.15% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 79.43% | 79.43% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 48.38% | 48.38% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.56% | 39.56% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.60% | 1.60% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.40% | 18.40% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 3h | 19d ago | 25m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 77.27% | 77.27% | — | — | 1 | 29d 23h | 30d ago | 36m ago |

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
