# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**670 providers** — 354 🟢 operational · 56 🟡 degraded · 260 🔴 down · 0 ⚫ unknown

_Updated 2026-06-26 06:58 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (354)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.34% | 98.34% | 775 ms | ↑ 1.08x | 1 | 0s | 29d ago | 30m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1568 ms | ↓ 0.95x | 0 | — | — | 27m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 94.06% | 94.06% | 2431 ms | ↑ 1.33x | 3 | 0s | 20d ago | 35m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 22.97% | 22.97% | 3329 ms | ↑ 1.35x | 4 | 0s | 16d ago | 36m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.52% | 97.52% | 3872 ms | ↑ 1.18x | 0 | — | — | 45m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.18% | 58.18% | 1654 ms | ↓ 0.91x | 0 | — | — | 34m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.92% | 99.92% | 99.92% | 1168 ms | ↓ 0.92x | 1 | 0s | 20d ago | 28m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.92% | 97.92% | 4011 ms | ↑ 1.10x | 1 | 0s | 29d ago | 41m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.85% | 98.85% | 2121 ms | ↑ 1.11x | 0 | — | — | 47m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.54% | 99.54% | 3572 ms | ↑ 1.06x | 0 | — | — | 47m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.58% | 95.58% | 2890 ms | ↑ 1.19x | 0 | — | — | 31m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2393 ms | ↑ 1.32x | 0 | — | — | 29m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.88% | 97.88% | 3526 ms | ↑ 1.29x | 0 | — | — | 31m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.59% | 92.59% | 3486 ms | ↑ 1.38x | 1 | 50m | 15d ago | 48m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1069 ms | ↑ 1.16x | 0 | — | — | 27m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.74% | 98.74% | 1472 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.99% | 98.99% | 467 ms | ↓ 0.37x | 0 | — | — | 29m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.98% | 38.98% | 867 ms | ↑ 1.32x | 0 | — | — | 42m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1598 ms | ↑ 1.14x | 0 | — | — | 27m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.10% | 97.10% | 3046 ms | ↑ 1.19x | 0 | — | — | 35m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.90% | 98.90% | 1131 ms | ↑ 1.15x | 2 | 15m | 17d ago | 44m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 75.67% | 67.61% | 67.61% | 2175 ms | ↑ 1.56x | 2 | 3d 14h | 10d ago | 31m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1374 ms | ↑ 1.34x | 0 | — | — | 28m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.88% | 96.89% | 96.89% | 858 ms | ↑ 1.14x | 2 | 0s | 7d ago | 33m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 88.19% | 88.19% | 2065 ms | ↑ 1.49x | 1 | 3h 51m | 28d ago | 32m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.48% | 98.48% | 4276 ms | ↑ 1.25x | 0 | — | — | 32m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.64% | 99.64% | 1313 ms | ↑ 1.12x | 4 | 14m | 11d ago | 29m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.76% | 86.76% | 2549 ms | ↑ 1.46x | 0 | — | — | 31m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.95% | 99.95% | 1116 ms | → 1.00x | 1 | 0s | 13d ago | 28m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.82% | 97.82% | 1438 ms | ↑ 1.08x | 0 | — | — | 34m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.94% | 97.94% | 4184 ms | → 1.05x | 0 | — | — | 46m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.53% | 96.53% | 828 ms | ↓ 0.95x | 0 | — | — | 33m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.69% | 86.28% | 86.28% | 1691 ms | ↓ 0.89x | 8 | 6h 40m | 17d ago | 31m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1148 ms | → 0.98x | 0 | — | — | 27m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2003 ms | → 1.00x | 0 | — | — | 28m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.76% | 99.76% | 99.76% | 1599 ms | → 0.98x | 2 | 0s | 11d ago | 27m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.88% | 99.02% | 99.02% | 2970 ms | → 1.02x | 2 | 0s | 8d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1304 ms | → 1.05x | 2 | 0s | 17d ago | 31m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.85% | 99.85% | 446 ms | ↓ 0.38x | 1 | 51m | 26d ago | 27m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 4198 ms | ↑ 1.11x | 0 | — | — | 41m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.73% | 99.73% | 836 ms | ↓ 0.89x | 1 | 0s | 25d ago | 31m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1240 ms | ↑ 1.08x | 0 | — | — | 27m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.01% | 98.00% | 98.00% | 4159 ms | ↓ 0.93x | 13 | 48m | 23d ago | 32m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.80% | 99.80% | 99.80% | 2136 ms | ↑ 1.06x | 1 | 30m | 13d ago | 27m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1110 ms | ↓ 0.74x | 0 | — | — | 29m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 439 ms | ↓ 0.55x | 0 | — | — | 29m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.82% | 99.82% | 676 ms | → 0.98x | 4 | 0s | 15d ago | 29m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.87% | 96.87% | 563 ms | ↓ 0.88x | 0 | — | — | 35m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.07% | 98.33% | 98.33% | 2003 ms | → 1.03x | 1 | 21h 30m | 22d ago | 28m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1083 ms | ↓ 0.95x | 0 | — | — | 27m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.10% | 56.10% | 1942 ms | ↑ 1.28x | 0 | — | — | 36m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.33% | 98.33% | 98.33% | 917 ms | → 1.00x | 2 | 4h 33m | 15d ago | 27m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.82% | 99.66% | 99.66% | 1805 ms | ↓ 0.63x | 3 | 0s | 8d ago | 28m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1705 ms | ↑ 1.35x | 0 | — | — | 28m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3648 ms | → 1.00x | 0 | — | — | 42m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.22% | 97.22% | 1442 ms | ↓ 0.92x | 0 | — | — | 42m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.95% | 99.01% | 99.01% | 2054 ms | ↑ 1.54x | 2 | 2h 41m | 14d ago | 28m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.15% | 99.15% | 1160 ms | ↓ 0.86x | 2 | 0s | 13d ago | 34m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.09% | 84.09% | 3583 ms | ↑ 1.31x | 0 | — | — | 35m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 845 ms | ↓ 0.78x | 0 | — | — | 29m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.79% | 98.79% | 2703 ms | ↑ 1.18x | 0 | — | — | 32m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4471 ms | ↑ 1.23x | 0 | — | — | 28m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.11% | 93.11% | 721 ms | ↓ 0.88x | 0 | — | — | 36m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.76% | 98.76% | 1225 ms | ↑ 1.15x | 0 | — | — | 31m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 601 ms | ↑ 1.34x | 1 | 0s | 23d ago | 33m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.46% | 99.46% | 774 ms | ↓ 0.65x | 0 | — | — | 29m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.07% | 98.07% | 2740 ms | ↓ 0.77x | 1 | 0s | 16d ago | 33m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.20% | 90.20% | 1318 ms | ↑ 1.22x | 1 | 0s | 19d ago | 31m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2249 ms | → 1.01x | 0 | — | — | 28m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.32% | 77.32% | 1367 ms | ↑ 1.25x | 0 | — | — | 35m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.71% | 96.49% | 96.49% | 1438 ms | ↑ 1.30x | 1 | 2h 1m | 8d ago | 28m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 937 ms | → 0.97x | 0 | — | — | 28m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.30% | 98.30% | 2515 ms | ↑ 1.12x | 0 | — | — | 34m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 920 ms | ↓ 0.95x | 0 | — | — | 27m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2510 ms | ↑ 1.39x | 0 | — | — | 28m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1650 ms | ↓ 0.87x | 3 | 0s | 8d ago | 27m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.95% | 82.95% | 2546 ms | ↑ 1.26x | 2 | 0s | 17d ago | 35m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.08% | 98.08% | 3372 ms | ↑ 2.40x | 0 | — | — | 36m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2170 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.39% | 99.32% | 99.32% | 4024 ms | ↑ 1.10x | 8 | 3h 35m | 11d ago | 41m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.74% | 61.74% | 1660 ms | ↓ 0.93x | 0 | — | — | 36m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.74% | 64.74% | 2017 ms | ↑ 1.19x | 0 | — | — | 36m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.77% | 99.87% | 99.87% | 1178 ms | ↓ 0.76x | 1 | 1h 9m | 10d ago | 29m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2178 ms | ↑ 1.16x | 0 | — | — | 35m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1328 ms | ↓ 0.64x | 0 | — | — | 33m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.60% | 99.60% | 597 ms | ↓ 0.82x | 1 | 0s | 27d ago | 35m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.94% | 97.94% | 1842 ms | → 0.95x | 2 | 6h 16m | 11d ago | 35m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 89.05% | 89.59% | 89.59% | 3111 ms | ↓ 0.94x | 5 | 15h 33m | 14d ago | 27m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2477 ms | ↑ 1.08x | 0 | — | — | 46m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2798 ms | ↑ 1.32x | 0 | — | — | 28m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.07% | 99.07% | 3743 ms | → 1.04x | 0 | — | — | 46m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.21% | 98.21% | 3834 ms | ↑ 1.13x | 0 | — | — | 47m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.62% | 76.62% | 2657 ms | ↑ 1.07x | 0 | — | — | 34m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1989 ms | ↑ 1.15x | 0 | — | — | 27m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.47% | 98.21% | 98.21% | 1621 ms | ↑ 1.71x | 7 | 8m | 12d ago | 28m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.41% | 99.67% | 99.67% | 1510 ms | ↑ 1.13x | 1 | 2h 60m | 18d ago | 29m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1858 ms | ↑ 1.20x | 0 | — | — | 47m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.73% | 99.73% | 634 ms | ↓ 0.43x | 1 | 0s | 30d ago | 47m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2545 ms | ↑ 1.22x | 1 | 0s | 17d ago | 45m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.99% | 89.99% | 1763 ms | → 1.01x | 0 | — | — | 35m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.81% | 99.81% | 1168 ms | ↑ 1.28x | 1 | 0s | 29d ago | 46m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 603 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1939 ms | ↑ 1.45x | 2 | 0s | 11d ago | 28m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.94% | 85.94% | 2914 ms | ↑ 1.22x | 0 | — | — | 31m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2187 ms | ↑ 1.15x | 0 | — | — | 28m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2363 ms | ↑ 1.31x | 0 | — | — | 31m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.07% | 99.07% | 961 ms | ↑ 1.30x | 0 | — | — | 36m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.64% | 97.64% | 2664 ms | ↑ 1.71x | 0 | — | — | 31m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.92% | 99.92% | 99.92% | 1647 ms | ↑ 1.12x | 1 | 0s | 20d ago | 27m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1699 ms | ↑ 1.25x | 1 | 0s | 12d ago | 28m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.95% | 99.95% | 1830 ms | ↑ 1.57x | 1 | 0s | 17d ago | 28m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2215 ms | ↑ 1.17x | 0 | — | — | 28m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3218 ms | ↑ 1.57x | 0 | — | — | 36m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 89.77% | 89.77% | 1564 ms | ↑ 1.24x | 0 | — | — | 30m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.82% | 99.82% | 99.82% | 738 ms | ↑ 1.12x | 1 | 1h | 26d ago | 27m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.86% | 99.86% | 99.86% | 1258 ms | ↓ 0.71x | 1 | 0s | 12d ago | 28m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.91% | 99.91% | 1520 ms | ↑ 1.14x | 2 | 11m | 27d ago | 28m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.30% | 25.30% | 2576 ms | ↑ 1.52x | 0 | — | — | 36m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1609 ms | ↑ 1.31x | 0 | — | — | 48m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2619 ms | → 1.05x | 0 | — | — | 47m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 793 ms | ↑ 1.23x | 0 | — | — | 45m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.29% | 98.29% | 1852 ms | ↑ 1.16x | 1 | 0s | 8d ago | 30m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.18% | 98.18% | 971 ms | ↓ 0.77x | 0 | — | — | 35m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 721 ms | → 1.05x | 0 | — | — | 47m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.75% | 99.75% | 1638 ms | → 1.02x | 4 | 8m | 20d ago | 41m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.76% | 98.76% | 4752 ms | → 1.03x | 0 | — | — | 48m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2658 ms | ↓ 0.83x | 0 | — | — | 46m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.72% | 32.62% | 32.62% | 2323 ms | ↑ 1.13x | 8 | 2h 29m | 12d ago | 44m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.44% | 97.95% | 97.95% | 2082 ms | ↑ 1.13x | 126 | 29m | 16d ago | 45m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2749 ms | → 1.04x | 0 | — | — | 42m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.36% | 99.36% | 2504 ms | ↑ 1.24x | 2 | 0s | 17d ago | 36m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 43.32% | 43.32% | 912 ms | → 0.97x | 1 | 0s | 16d ago | 47m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1117 ms | → 0.97x | 0 | — | — | 45m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.47% | 99.47% | 2972 ms | → 1.02x | 1 | 0s | 29d ago | 41m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1515 ms | → 1.04x | 2 | 14m | 20d ago | 34m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 20.58% | 20.58% | 734 ms | → 0.97x | 1 | 0s | 13d ago | 45m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2580 ms | ↑ 1.09x | 0 | — | — | 35m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.70% | 99.70% | 718 ms | ↓ 0.58x | 0 | — | — | 30m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 564 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 830 ms | → 1.04x | 0 | — | — | 46m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.29% | 62.29% | 1624 ms | → 1.00x | 0 | — | — | 36m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.77% | 86.95% | 86.95% | 700 ms | ↓ 0.76x | 7 | 1d 2h | 9d ago | 28m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 83.71% | 83.71% | 1602 ms | ↑ 1.34x | 3 | 8h 40m | 17d ago | 31m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2827 ms | → 1.03x | 0 | — | — | 46m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.80% | 98.80% | 1626 ms | ↓ 0.87x | 2 | 2h 55m | 12d ago | 29m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.50% | 89.50% | 2063 ms | ↑ 1.16x | 1 | 0s | 13d ago | 45m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.54% | 23.09% | 23.09% | 1720 ms | → 1.03x | 4 | 30m | 10d ago | 36m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.53% | 98.96% | 98.96% | 2983 ms | ↓ 0.83x | 4 | 30m | 10d ago | 34m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.57% | 80.57% | 2187 ms | ↑ 1.08x | 1 | 13h | 23d ago | 47m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.71% | 88.71% | 804 ms | ↓ 0.79x | 2 | 0s | 12d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1195 ms | ↑ 1.07x | 1 | 0s | 16d ago | 45m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1098 ms | → 0.97x | 0 | — | — | 46m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.94% | 99.66% | 99.66% | 1390 ms | ↑ 1.17x | 1 | 0s | 12d ago | 45m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 47.28% | 47.28% | 250 ms | → 0.99x | 1 | 0s | 16d ago | 34m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1667 ms | ↑ 1.37x | 0 | — | — | 28m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 881 ms | → 0.99x | 1 | 0s | 29d ago | 31m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.60% | 98.60% | 1804 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.71% | 98.25% | 98.25% | 460 ms | ↓ 0.56x | 1 | 1h 40m | 8d ago | 31m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.76% | 96.76% | 1413 ms | ↑ 1.37x | 2 | 45m | 15d ago | 31m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.00% | 71.00% | 1493 ms | ↑ 1.24x | 0 | — | — | 35m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1294 ms | ↑ 1.07x | 0 | — | — | 27m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1275 ms | → 0.96x | 0 | — | — | 27m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.70% | 81.70% | 3445 ms | ↑ 1.38x | 1 | 0s | 16d ago | 35m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2160 ms | ↑ 1.11x | 0 | — | — | 45m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 728 ms | ↓ 0.38x | 0 | — | — | 28m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 625 ms | ↓ 0.72x | 1 | 0s | 17d ago | 41m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 88.28% | 36.92% | 36.92% | 1952 ms | → 1.03x | 14 | 5h 29m | 8d ago | 36m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 56.17% | 27.56% | 27.56% | 3063 ms | ↑ 1.07x | 2 | 6d 14h | 17d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.88% | 85.88% | 1351 ms | ↑ 1.67x | 0 | — | — | 45m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.53% | 91.53% | 513 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2607 ms | ↑ 1.11x | 0 | — | — | 35m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.66% | 98.89% | 98.89% | 3170 ms | ↑ 1.13x | 6 | 0s | 10d ago | 47m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.80% | 96.80% | 1373 ms | → 1.02x | 0 | — | — | 35m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.88% | 99.88% | 1806 ms | ↑ 1.35x | 1 | 0s | 29d ago | 28m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2989 ms | ↑ 1.06x | 0 | — | — | 46m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1591 ms | → 1.00x | 1 | 0s | 14d ago | 29m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4176 ms | ↑ 1.12x | 0 | — | — | 28m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.67% | 59.67% | 766 ms | → 1.04x | 0 | — | — | 36m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.23% | 43.23% | 3286 ms | ↑ 1.22x | 0 | — | — | 35m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.25% | 99.25% | 4251 ms | ↑ 1.08x | 1 | 0s | 28d ago | 41m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3484 ms | ↑ 1.10x | 0 | — | — | 46m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2651 ms | ↑ 1.19x | 0 | — | — | 35m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.28% | 92.43% | 92.43% | 2667 ms | → 0.97x | 2 | 19h 25m | 25d ago | 33m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2432 ms | ↑ 1.10x | 0 | — | — | 35m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.50% | 80.50% | 1506 ms | ↓ 0.83x | 0 | — | — | 35m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 1.00x | 1 | 0s | 29d ago | 46m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2778 ms | ↑ 1.20x | 0 | — | — | 45m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1364 ms | ↓ 0.85x | 0 | — | — | 28m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2131 ms | ↑ 1.07x | 1 | 0s | 8d ago | 42m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3538 ms | → 1.04x | 1 | 0s | 11d ago | 46m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.36% | 91.90% | 91.90% | 2827 ms | ↓ 0.94x | 11 | 0s | 17d ago | 33m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 80.94% | 80.94% | 2783 ms | ↑ 1.20x | 0 | — | — | 35m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.22% | 87.22% | 3099 ms | ↓ 0.92x | 0 | — | — | 35m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1630 ms | ↑ 1.12x | 0 | — | — | 45m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.68% | 98.68% | 827 ms | ↑ 1.17x | 0 | — | — | 33m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.02% | 25.02% | 941 ms | ↑ 1.63x | 0 | — | — | 36m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.69% | 97.69% | 438 ms | ↓ 0.44x | 1 | 0s | 14d ago | 30m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 901 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 39.69% | 39.69% | 824 ms | ↓ 0.81x | 0 | — | — | 46m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.92% | 98.92% | 1211 ms | → 1.03x | 1 | 5h 60m | 26d ago | 45m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.41% | 21.41% | 1579 ms | ↑ 1.19x | 0 | — | — | 45m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 633 ms | ↓ 0.49x | 0 | — | — | 29m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.57% | 99.57% | 2886 ms | ↑ 1.62x | 1 | 0s | 10d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3276 ms | ↓ 0.82x | 0 | — | — | 29m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 466 ms | ↓ 0.63x | 0 | — | — | 29m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.77% | 23.90% | 23.90% | 1588 ms | → 0.99x | 4 | 0s | 7d ago | 36m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.64% | 93.64% | 4696 ms | → 1.03x | 0 | — | — | 45m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.60% | 99.60% | 2110 ms | ↑ 1.15x | 1 | 1h 20m | 27d ago | 45m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.27% | 99.27% | 1018 ms | ↑ 1.11x | 0 | — | — | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1615 ms | → 1.00x | 0 | — | — | 28m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 46.12% | 46.12% | 1359 ms | → 1.04x | 2 | 0s | 7d ago | 46m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2655 ms | ↑ 1.45x | 0 | — | — | 47m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1787 ms | ↑ 1.11x | 0 | — | — | 45m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 480 ms | ↑ 1.05x | 0 | — | — | 48m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 57.58% | 88.78% | 88.78% | 1974 ms | ↑ 1.16x | 1 | 12d 20h | 23d ago | 45m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 97.99% | 46.79% | 46.79% | 3566 ms | ↑ 1.21x | 24 | 12m | 9d ago | 46m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.87% | 98.87% | 2814 ms | → 0.99x | 0 | — | — | 31m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.82% | 96.82% | 3300 ms | → 1.05x | 0 | — | — | 46m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.59% | 99.59% | 99.59% | 1079 ms | ↓ 0.75x | 4 | 15m | 8d ago | 27m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.82% | 99.82% | 928 ms | ↓ 0.94x | 1 | 20m | 28d ago | 31m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.16% | 89.16% | 2626 ms | ↑ 1.27x | 0 | — | — | 35m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1151 ms | ↓ 0.90x | 0 | — | — | 31m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1700 ms | → 0.98x | 0 | — | — | 29m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2057 ms | ↑ 1.06x | 0 | — | — | 46m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1883 ms | ↑ 1.09x | 0 | — | — | 47m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1552 ms | ↓ 0.94x | 1 | 0s | 20d ago | 28m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1349 ms | → 1.04x | 0 | — | — | 47m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1664 ms | → 1.04x | 0 | — | — | 44m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.99% | 84.99% | 1821 ms | → 0.96x | 1 | 0s | 25d ago | 42m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.94% | 98.26% | 98.26% | 2812 ms | ↑ 1.25x | 1 | 0s | 28d ago | 31m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.42% | 92.42% | 4487 ms | ↑ 1.18x | 2 | 25m | 15d ago | 48m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2331 ms | ↑ 1.48x | 1 | 0s | 13d ago | 28m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.12% | 97.46% | 97.46% | 1772 ms | ↑ 1.15x | 11 | 11m | 16d ago | 29m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.86% | 97.86% | 3678 ms | ↑ 1.56x | 1 | 0s | 20d ago | 30m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 94.90% | 94.90% | 94.90% | 1485 ms | → 0.96x | 4 | 6h 14m | 9d ago | 29m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.85% | 98.85% | 1511 ms | ↑ 1.25x | 0 | — | — | 35m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.76% | 98.76% | 1865 ms | → 1.01x | 0 | — | — | 44m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.64% | 99.64% | 3021 ms | ↑ 1.24x | 0 | — | — | 28m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1184 ms | ↑ 1.39x | 0 | — | — | 28m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.69% | 98.69% | 1252 ms | ↑ 1.40x | 4 | 7m | 13d ago | 34m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.78% | 99.78% | 99.78% | 1378 ms | → 1.01x | 2 | 0s | 8d ago | 28m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2611 ms | ↑ 1.24x | 0 | — | — | 28m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.52% | 31.52% | 1345 ms | ↑ 1.20x | 0 | — | — | 44m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1667 ms | ↑ 1.36x | 0 | — | — | 35m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.94% | 98.42% | 98.42% | 2528 ms | ↑ 1.25x | 1 | 0s | 8d ago | 35m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 51.38% | 51.38% | 51.38% | 1326 ms | ↓ 0.90x | 1 | 13d 23h | 25d ago | 27m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1919 ms | ↑ 1.25x | 0 | — | — | 44m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.05% | 89.05% | 4193 ms | ↑ 1.27x | 0 | — | — | 35m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.94% | 96.67% | 96.67% | 3349 ms | ↑ 1.34x | 1 | 0s | 7d ago | 36m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2038 ms | ↑ 1.25x | 1 | 0s | 16d ago | 44m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 21.41% | 21.41% | 2186 ms | → 1.00x | 0 | — | — | 46m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 629 ms | ↓ 0.76x | 0 | — | — | 29m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.33% | 97.33% | 2862 ms | ↑ 1.31x | 0 | — | — | 31m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2494 ms | ↑ 1.12x | 0 | — | — | 44m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1355 ms | ↑ 1.19x | 2 | 10m | 16d ago | 45m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.94% | 23.18% | 23.18% | 3955 ms | ↑ 1.40x | 1 | 0s | 7d ago | 36m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.19% | 21.19% | 2232 ms | ↑ 1.19x | 0 | — | — | 36m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.73% | 99.73% | 2945 ms | ↓ 0.84x | 4 | 30m | 18d ago | 28m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2891 ms | ↑ 1.07x | 0 | — | — | 33m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2085 ms | ↑ 1.10x | 0 | — | — | 46m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2130 ms | → 1.02x | 0 | — | — | 28m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.48% | 99.62% | 99.62% | 2458 ms | ↑ 1.11x | 1 | 3h 60m | 9d ago | 44m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 1915 ms | ↓ 0.90x | 0 | — | — | 44m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 317 ms | → 0.96x | 0 | — | — | 28m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.72% | 98.72% | 1595 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.15% | 99.15% | 1825 ms | ↑ 1.05x | 1 | 0s | 23d ago | 46m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 626 ms | ↓ 0.91x | 0 | — | — | 45m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 709 ms | ↑ 1.07x | 0 | — | — | 27m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 96.91% | 99.59% | 99.59% | 4087 ms | ↑ 1.17x | 3 | 6h 10m | 4d ago | 47m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.89% | 99.73% | 99.73% | 3259 ms | → 1.04x | 2 | 0s | 3d ago | 46m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.76% | 99.14% | 99.72% | 99.72% | 348 ms | ↑ 1.65x | 10 | 10m | 3d ago | 45m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.76% | 99.54% | 99.26% | 99.26% | 2055 ms | ↑ 1.16x | 4 | 22m | 6d ago | 47m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 98.62% | 99.74% | 99.74% | 2163 ms | ↑ 1.17x | 4 | 1h 38m | 6d ago | 46m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.76% | 99.94% | 99.61% | 99.61% | 970 ms | → 1.01x | 1 | 0s | 1d ago | 46m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.76% | 99.89% | 26.57% | 26.57% | 2656 ms | ↑ 1.17x | 2 | 0s | 4d ago | 48m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.76% | 99.94% | 99.98% | 99.98% | 642 ms | → 0.99x | 1 | 0s | 4d ago | 43m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.76% | 99.94% | 99.75% | 99.75% | 3218 ms | ↑ 1.10x | 1 | 0s | 4d ago | 43m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.76% | 99.54% | 99.00% | 99.00% | 4035 ms | → 1.04x | 8 | 0s | 4d ago | 44m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.76% | 99.94% | 99.54% | 99.54% | 2143 ms | → 1.01x | 1 | 0s | 4d ago | 43m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.76% | 99.94% | 31.88% | 31.88% | 1258 ms | ↑ 1.10x | 1 | 0s | 4d ago | 43m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.76% | 99.66% | 99.90% | 99.90% | 897 ms | → 1.01x | 4 | 10m | 4d ago | 43m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.76% | 99.54% | 99.17% | 99.17% | 4282 ms | ↑ 1.05x | 8 | 0s | 4d ago | 44m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.94% | 99.87% | 99.87% | 3055 ms | → 1.04x | 1 | 0s | 4d ago | 43m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.75% | 99.86% | 15.33% | 15.33% | 2765 ms | → 1.02x | 1 | 0s | 3d ago | 43m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.71% | 79.81% | 79.81% | 1932 ms | ↓ 0.95x | 5 | 0s | 3d ago | 42m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.88% | 21.42% | 21.42% | 1845 ms | ↑ 1.35x | 2 | 0s | 3d ago | 43m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.88% | 23.06% | 23.06% | 2405 ms | ↑ 1.26x | 2 | 0s | 3d ago | 42m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.88% | 99.80% | 99.80% | 2109 ms | ↑ 1.06x | 2 | 0s | 3d ago | 42m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.70% | 98.70% | 1015 ms | ↓ 0.87x | 6 | 0s | 6d ago | 35m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.71% | 67.66% | 67.66% | 1356 ms | → 0.97x | 4 | 5m | 6d ago | 35m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 49.10% | 49.10% | 2155 ms | ↑ 1.30x | 2 | 0s | 6d ago | 36m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.42% | 53.80% | 53.80% | 972 ms | ↓ 0.88x | 6 | 20m | 6d ago | 36m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.91% | 63.91% | 635 ms | ↓ 0.92x | 3 | 0s | 6d ago | 35m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.64% | 90.64% | 2274 ms | ↑ 1.07x | 2 | 0s | 6d ago | 35m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.71% | 21.30% | 21.30% | 580 ms | ↓ 0.40x | 4 | 8m | 6d ago | 36m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 99.75% | 32.83% | 32.88% | 32.88% | 2706 ms | → 1.02x | 2 | 10d 2h | 6d ago | 35m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.65% | 90.79% | 90.79% | 735 ms | ↓ 0.91x | 6 | 0s | 6d ago | 35m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 23.45% | 23.45% | 660 ms | ↓ 0.42x | 2 | 0s | 6d ago | 36m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.75% | 99.77% | 92.94% | 92.94% | 1338 ms | ↓ 0.85x | 4 | 0s | 3d ago | 34m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.25% | 96.25% | 2524 ms | ↑ 1.38x | 1 | 0s | 6d ago | 36m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.83% | 22.31% | 22.31% | 1272 ms | ↑ 1.13x | 3 | 0s | 6d ago | 36m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.78% | 62.78% | 2695 ms | ↑ 1.14x | 1 | 0s | 6d ago | 35m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2306 ms | ↑ 1.10x | 2 | 0s | 6d ago | 35m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.36% | 97.68% | 97.68% | 2200 ms | ↑ 1.08x | 9 | 7m | 4d ago | 34m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.06% | 99.06% | 687 ms | ↑ 1.30x | 1 | 0s | 4d ago | 33m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.61% | 98.61% | 2599 ms | ↓ 0.65x | 1 | 0s | 4d ago | 33m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 75.87% | 75.87% | 965 ms | ↓ 0.91x | 1 | 0s | 4d ago | 33m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 97.19% | 97.89% | 97.89% | 4389 ms | ↑ 1.06x | 24 | 28m | 3d ago | 32m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.75% | 97.31% | 98.40% | 98.40% | 4021 ms | ↑ 1.11x | 19 | 41m | 3d ago | 32m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.75% | 99.77% | 99.86% | 99.86% | 1576 ms | ↑ 1.26x | 3 | 7m | 1h ago | 31m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 99.94% | 96.55% | 96.55% | 2085 ms | → 0.97x | 1 | 0s | 5d ago | 31m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.75% | 99.47% | 99.53% | 99.53% | 842 ms | ↓ 0.56x | 4 | 35m | 4d ago | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.94% | 99.94% | 99.94% | 2483 ms | ↑ 1.32x | 1 | 0s | 7d ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.75% | 99.36% | 96.67% | 96.67% | 2169 ms | ↑ 1.11x | 11 | 0s | 18h ago | 29m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.94% | 99.94% | 1799 ms | → 1.03x | 1 | 0s | 5d ago | 28m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.75% | 99.59% | 99.70% | 99.70% | 1726 ms | ↓ 0.78x | 3 | 39m | 20h ago | 28m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.75% | 99.89% | 99.89% | 99.89% | 2059 ms | ↑ 1.05x | 1 | 0s | 2d ago | 28m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.75% | 99.89% | 99.89% | 99.89% | 1198 ms | → 1.03x | 1 | 0s | 23h ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.77% | 98.03% | 98.03% | 626 ms | ↓ 0.83x | 4 | 0s | 13h ago | 30m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.82% | 99.16% | 99.16% | 1238 ms | → 1.03x | 3 | 0s | 18h ago | 29m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.52% | 99.52% | 99.52% | 932 ms | ↓ 0.89x | 3 | 30m | 3d ago | 29m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.75% | 99.34% | 99.34% | 99.34% | 3129 ms | → 0.99x | 2 | 59m | 20h ago | 28m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.77% | 99.85% | 99.85% | 1507 ms | ↑ 1.27x | 2 | 30m | 4d ago | 28m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.51% | 99.71% | 63.02% | 63.02% | 2950 ms | ↑ 1.08x | 5 | 0s | 18h ago | 46m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.51% | 98.73% | 19.64% | 19.64% | 3633 ms | ↑ 1.12x | 10 | 31m | 6d ago | 41m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.50% | 99.88% | 97.54% | 97.54% | 2348 ms | ↑ 1.16x | 2 | 0s | 17h ago | 36m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.50% | 99.83% | 68.64% | 68.64% | 1590 ms | ↑ 1.19x | 3 | 0s | 2d ago | 35m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.50% | 98.26% | 96.72% | 96.72% | 4531 ms | ↑ 1.10x | 13 | 40m | 6m ago | 36m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.50% | 99.88% | 98.91% | 98.91% | 281 ms | → 1.01x | 1 | 29m | 4d ago | 33m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.50% | 99.36% | 99.75% | 99.75% | 4471 ms | ↑ 1.22x | 7 | 17m | 3d ago | 32m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.50% | 99.36% | 96.91% | 96.91% | 1566 ms | ↓ 0.94x | 5 | 32m | 6d ago | 31m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.50% | 99.18% | 98.76% | 98.76% | 1358 ms | ↓ 0.62x | 4 | 60m | 7d ago | 29m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.50% | 99.88% | 97.85% | 97.85% | 509 ms | ↓ 0.90x | 2 | 0s | 2d ago | 28m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.50% | 99.88% | 99.94% | 99.94% | 2479 ms | ↑ 1.28x | 1 | 21m | 2d ago | 29m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.50% | 99.18% | 98.80% | 98.80% | 2596 ms | ↑ 1.14x | 6 | 40m | 4d ago | 29m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.50% | 99.88% | 99.88% | 99.88% | 2619 ms | ↑ 1.49x | 2 | 0s | 23h ago | 28m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.50% | 98.13% | 98.13% | 98.13% | 2136 ms | ↓ 0.90x | 13 | 8m | 2h ago | 28m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.27% | 99.60% | 21.38% | 21.38% | 2271 ms | → 1.02x | 7 | 0s | 2d ago | 45m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.27% | 98.91% | 99.58% | 99.58% | 3550 ms | ↓ 0.91x | 18 | 2m | 6d ago | 46m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.27% | 99.54% | 56.12% | 56.12% | 1839 ms | ↑ 1.17x | 8 | 0s | 2d ago | 43m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.27% | 97.53% | 20.74% | 20.74% | 1872 ms | ↓ 0.93x | 42 | 28s | 4d ago | 44m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.26% | 98.27% | 49.21% | 49.21% | 3445 ms | ↑ 1.18x | 8 | 1h 3m | 3d ago | 43m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.26% | 99.65% | 21.29% | 21.29% | 4629 ms | ↑ 1.17x | 5 | 6m | 3d ago | 41m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.26% | 99.77% | 82.66% | 82.66% | 2607 ms | ↑ 1.19x | 4 | 0s | 2d ago | 35m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.26% | 98.49% | 86.59% | 86.59% | 4590 ms | ↑ 1.07x | 25 | 1m | 3d ago | 36m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.26% | 98.95% | 91.63% | 91.63% | 1535 ms | ↑ 1.06x | 17 | 2m | 18h ago | 35m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.25% | 99.82% | 98.02% | 98.02% | 4242 ms | ↑ 1.09x | 2 | 10m | 2d ago | 32m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.24% | 98.36% | 98.73% | 98.73% | 794 ms | ↑ 1.22x | 7 | 1h 24m | 2d ago | 29m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.24% | 96.14% | 97.59% | 97.59% | 568 ms | ↓ 0.71x | 3 | 8h 24m | 5d ago | 29m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.24% | 98.13% | 98.64% | 98.64% | 2286 ms | ↑ 1.33x | 6 | 1h 38m | 4d ago | 29m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.02% | 99.54% | 85.78% | 85.78% | 2471 ms | → 1.04x | 8 | 0s | 1h ago | 46m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.02% | 98.10% | 96.55% | 96.55% | 1971 ms | ↑ 1.22x | 7 | 1h 26m | 3d ago | 43m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.02% | 99.19% | 69.39% | 69.39% | 3918 ms | → 0.99x | 11 | 6m | 3d ago | 43m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.01% | 99.42% | 69.06% | 69.06% | 1860 ms | ↑ 1.34x | 8 | 8m | 20h ago | 35m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (56)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.00% | 79.37% | 92.52% | 92.52% | 4616 ms | ↑ 1.61x | 5 | 1d 5h | 5h ago | 32m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.99% | 99.53% | 86.42% | 86.42% | 1556 ms | ↓ 0.66x | 7 | 4m | 7h ago | 28m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.78% | 99.43% | 96.10% | 96.10% | 3361 ms | ↑ 1.10x | 10 | 0s | 1d ago | 47m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.76% | 98.78% | 96.04% | 96.04% | 3904 ms | ↑ 1.24x | 4 | 1h 45m | 3d ago | 34m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.76% | 99.30% | 98.86% | 98.86% | 2043 ms | ↑ 1.22x | 5 | 36m | 5d ago | 35m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.75% | 99.71% | 80.18% | 80.18% | 1927 ms | → 1.01x | 3 | 20m | 21h ago | 33m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.74% | 99.71% | 93.26% | 93.26% | 30 ms | → 1.00x | 1 | 1h 22m | 3d ago | 31m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 98.74% | 99.71% | 99.78% | 99.78% | 1648 ms | ↑ 1.18x | 2 | 36m | 3h ago | 28m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.74% | 99.41% | 99.35% | 99.35% | 4890 ms | ↑ 1.30x | 8 | 6m | 3d ago | 29m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.54% | 99.03% | 98.38% | 98.38% | 4489 ms | → 1.04x | 17 | 0s | 3d ago | 48m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.53% | 98.62% | 98.91% | 98.91% | 1774 ms | → 0.98x | 17 | 12m | 1d ago | 42m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.51% | 99.59% | 99.81% | 99.81% | 3216 ms | ↓ 0.89x | 5 | 12m | 23h ago | 36m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.50% | 99.47% | 55.31% | 55.31% | 815 ms | ↑ 1.20x | 8 | 4m | 1d ago | 33m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.49% | 98.65% | 98.61% | 98.61% | 3053 ms | ↑ 1.24x | 23 | 0s | 13h ago | 28m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 98.49% | 67.56% | 82.15% | 82.15% | 1217 ms | ↓ 0.95x | 5 | 1d 23h | 3h ago | 29m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.49% | 98.77% | 99.04% | 99.04% | 2349 ms | ↑ 1.38x | 12 | 21m | 1d ago | 29m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.29% | 98.45% | 86.04% | 86.04% | 4425 ms | → 0.97x | 26 | 1m | 18h ago | 44m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.27% | 99.25% | 63.63% | 63.63% | 1240 ms | ↓ 0.50x | 3 | 1h 32m | 6d ago | 36m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.24% | 98.25% | 92.59% | 92.59% | 748 ms | ↑ 1.09x | 15 | 23m | 4d ago | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.24% | 98.83% | 98.83% | 98.83% | 3161 ms | → 1.01x | 1 | 2h 37m | 6d ago | 27m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.99% | 96.27% | 84.38% | 84.38% | 4555 ms | → 1.00x | 54 | 5m | 15h ago | 33m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.98% | 99.20% | 99.20% | 99.20% | 379 ms | ↓ 0.87x | 9 | 2m | 3h ago | 29m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 97.98% | 88.93% | 93.19% | 93.19% | 894 ms | ↓ 0.49x | 84 | 29m | 20h ago | 29m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.77% | 98.49% | 68.05% | 68.05% | 4778 ms | → 1.05x | 23 | 4m | 2d ago | 35m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 97.74% | 97.31% | 98.74% | 98.74% | 2265 ms | → 0.99x | 19 | 42m | 2d ago | 32m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.56% | 32.26% | 74.98% | 74.98% | 3945 ms | → 1.00x | 11 | 1d 20h | 14h ago | 48m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.54% | 98.15% | 20.79% | 20.79% | 4465 ms | ↑ 1.09x | 32 | 0s | 17h ago | 41m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.26% | 97.21% | 86.54% | 86.54% | 4634 ms | → 1.02x | 36 | 9m | 17h ago | 34m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.24% | 99.07% | 99.63% | 99.63% | 2201 ms | ↑ 1.09x | 2 | 3h 20m | 7d ago | 33m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.23% | 91.96% | 91.96% | 91.96% | 4653 ms | → 1.01x | 24 | 1h 30m | 2d ago | 27m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.07% | 98.17% | 87.50% | 87.50% | 4178 ms | ↑ 1.18x | 32 | 0s | 15h ago | 48m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.99% | 82.52% | 83.12% | 83.12% | 4316 ms | ↓ 0.84x | 33 | 3h 33m | 13h ago | 31m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.81% | 97.06% | 75.00% | 75.00% | 4566 ms | ↑ 1.08x | 44 | 5m | 2d ago | 43m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.74% | 98.19% | 52.85% | 52.85% | 4010 ms | ↑ 1.63x | 29 | 2m | 3h ago | 32m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.73% | 97.04% | 97.04% | 97.04% | 4671 ms | → 0.99x | 24 | 4m | 7h ago | 27m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.29% | 98.66% | 73.41% | 73.41% | 915 ms | → 0.96x | 11 | 33m | 3d ago | 35m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 96.22% | 96.89% | 91.17% | 91.17% | 4472 ms | ↑ 1.18x | 17 | 30m | 7h ago | 29m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.57% | 96.48% | 98.47% | 98.47% | 4452 ms | ↑ 1.05x | 58 | 2m | 17h ago | 41m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.30% | 95.93% | 83.24% | 83.24% | 4841 ms | → 1.03x | 64 | 3m | 1d ago | 34m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.21% | 97.48% | 96.79% | 96.79% | 1507 ms | ↓ 0.92x | 4 | 4h 2m | 3d ago | 31m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 94.80% | 98.72% | 98.32% | 98.32% | 1968 ms | ↑ 1.18x | 2 | 3h 26m | 10h ago | 35m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 94.21% | 98.65% | 98.94% | 98.94% | 2145 ms | ↓ 0.80x | 4 | 1h 35m | 2d ago | 27m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.06% | 93.72% | 73.33% | 73.33% | 2138 ms | ↑ 1.19x | 19 | 1h 36m | 5h ago | 35m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 89.42% | 94.21% | 95.67% | 95.67% | 1638 ms | ↓ 0.69x | 11 | 3h 33m | 3d ago | 30m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.27% | 97.42% | 98.85% | 98.85% | 3666 ms | ↑ 1.16x | 2 | 8h 60m | 7d ago | 45m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.61% | 87.75% | 21.89% | 21.89% | 4388 ms | ↓ 0.93x | 162 | 9m | 17h ago | 36m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 87.66% | 54.39% | 32.93% | 32.93% | 3177 ms | → 1.03x | 195 | 1h 16m | 7h ago | 28m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 84.38% | 93.33% | 90.47% | 90.47% | 1403 ms | ↑ 1.13x | 24 | 1h 39m | 12h ago | 27m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.60% | 79.22% | 81.40% | 81.40% | 4236 ms | ↓ 0.91x | 149 | 36m | 16h ago | 27m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 77.97% | 72.21% | 25.82% | 25.82% | 4586 ms | → 0.96x | 289 | 18m | 2h ago | 35m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.33% | 71.55% | 62.76% | 62.76% | 4808 ms | → 1.00x | 317 | 16m | 13m ago | 43m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 73.12% | 17.02% | 26.55% | 26.55% | 2352 ms | → 1.00x | 2 | 12d 10h | 3d ago | 31m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 71.43% | 16.66% | 64.90% | 64.90% | 2171 ms | → 1.00x | 2 | 12d 12h | 3d ago | 32m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 69.31% | 51.07% | 32.64% | 32.64% | 2395 ms | ↑ 1.14x | 2 | 7d 10h | 9d ago | 36m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 54.21% | 51.68% | 32.04% | 32.04% | 1176 ms | ↑ 1.46x | 5 | 2d 22h | 3d ago | 35m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 16.54% | 3.86% | 43.68% | 43.68% | 2133 ms | → 1.00x | 1 | 28d 20h | 30d ago | 32m ago |

</details>

<details open>
<summary><strong>🔴 Down (260)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.75% | 99.94% | 99.35% | 99.35% | 276 ms | ↓ 0.30x | 1 | 0s | 29m ago | 29m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 99.02% | 95.74% | 19.53% | 19.53% | 2643 ms | → 1.03x | 69 | 2m | 42m ago | 42m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 93.45% | 98.48% | 97.79% | 97.79% | 446 ms | ↑ 1.26x | 2 | 4h 27m | 9h ago | 30m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 87.91% | 94.83% | 94.83% | 94.83% | 174 ms | ↓ 0.15x | 3 | 10h 34m | 19h ago | 27m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.47% | 88.78% | 59.09% | 59.09% | 4241 ms | ↑ 1.06x | 154 | 7m | 31m ago | 31m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 69.67% | 92.88% | 96.89% | 96.89% | 2177 ms | ↑ 1.26x | 2 | 1d 1h | 2d ago | 33m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 64.63% | 74.23% | 96.60% | 96.60% | 4615 ms | ↑ 1.13x | 249 | 21m | 45m ago | 45m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 46.59% | 87.34% | 98.38% | 98.38% | 3162 ms | ↑ 1.08x | 3 | 1d 5h | 4d ago | 47m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 44.31% | 46.52% | 47.47% | 47.47% | 511 ms | → 0.97x | 2 | 8d 1h | 4d ago | 35m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 29.22% | 68.27% | 79.96% | 79.96% | 4965 ms | ↑ 2.17x | 146 | 1h 8m | 59m ago | 29m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 26.70% | 48.77% | 44.01% | 44.01% | 690 ms | → 1.03x | 5 | 3d 2h | 5d ago | 28m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 26.24% | 48.60% | 66.37% | 66.37% | 687 ms | → 1.03x | 6 | 2d 13h | 5d ago | 35m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 4.15% | 77.44% | 85.80% | 85.80% | 1239 ms | ↑ 1.07x | 1 | 6d 16h | 7d ago | 45m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 3.53% | 77.17% | 87.78% | 87.78% | 2259 ms | ↑ 1.27x | 8 | 20h 5m | 7d ago | 28m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.95% | 1.66% | 57.33% | 57.33% | 2935 ms | → 0.98x | 30 | 23h 18m | 11h ago | 48m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.98% | 39.08% | 49.87% | 49.87% | 2844 ms | ↑ 1.34x | 10 | 1d 19h | 4d ago | 43m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.93% | 77.93% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.55% | 64.55% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.45% | 69.45% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 40.04% | 40.04% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 73.63% | 73.63% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.90% | 54.90% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.31% | 5.31% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.79% | 11.79% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 50.20% | 50.20% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 66.74% | 82.60% | 82.60% | — | — | 23 | 9h 58m | 10d ago | 28m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.20% | 3.20% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 46.02% | 84.89% | 84.89% | — | — | 1 | 16d 3h | 16d ago | 31m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 78.17% | 78.17% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.31% | 34.31% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 87.29% | 87.29% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.74% | 21.74% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 70.14% | 70.14% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 46.28% | 46.28% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.74% | 27.74% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 27.60% | 86.55% | 86.55% | — | — | 3 | 7d 4h | 22d ago | 46m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 78.53% | 78.53% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.16% | 59.16% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.55% | 72.55% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 21h | 16d ago | 47m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.64% | 13.64% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.82% | 45.82% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 89.12% | 89.12% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.32% | 31.32% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 56.50% | 76.91% | 76.91% | — | — | 1 | 12d 22h | 13d ago | 28m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.92% | 78.92% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 41.88% | 40.71% | 40.71% | — | — | 3 | 4d 5h | 13d ago | 29m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 27.90% | 82.79% | 82.79% | — | — | 1 | 21d 15h | 22d ago | 32m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.21% | 3.21% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 73.95% | 85.31% | 85.31% | — | — | 7 | 1d 2h | 7d ago | 28m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 63.06% | 80.86% | 80.86% | — | — | 1 | 11d 1h | 11d ago | 28m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.77% | 78.77% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 27.45% | 27.45% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.88% | 48.88% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.93% | 1.93% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 86.25% | 86.25% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 40.02% | 40.02% | 40.02% | — | — | 1 | 17d | 17d ago | 28m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 68.32% | 68.32% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 69.24% | 69.24% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 57.26% | 77.36% | 77.36% | — | — | 3 | 4d 5h | 13d ago | 29m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.70% | 27.70% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.44% | 51.44% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 46.68% | 46.68% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.67% | 22.67% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 19.31% | 78.88% | 78.88% | — | — | 4 | 6d 1h | 24d ago | 48m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 18.74% | 39.42% | 39.42% | — | — | 3 | 8d 3h | 24d ago | 43m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 3h | 22d ago | 27m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 20.89% | 53.64% | 53.64% | — | — | 1 | 23d 20h | 24d ago | 30m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 53.89% | 53.89% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.10% | 22.10% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.82% | 4.82% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.01% | 62.01% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 78.48% | 78.48% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 42.81% | 73.72% | 73.72% | — | — | 1 | 17d 2h | 17d ago | 31m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.84% | 5.84% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.96% | 74.96% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 77.33% | 77.33% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.60% | 29.60% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 28.37% | 87.11% | 87.11% | — | — | 2 | 10d 16h | 21d ago | 34m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 24.12% | 24.12% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.42% | 21.42% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.86% | 49.86% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 23.74% | 23.74% | 23.74% | — | — | 2 | 6d 1h | 12d ago | 28m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 57.20% | 75.75% | 75.75% | — | — | 4 | 3d 4h | 13d ago | 29m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 56.73% | 81.25% | 81.25% | — | — | 13 | 23h 14m | 13d ago | 29m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.62% | 49.62% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 19.12% | 19.68% | 19.68% | — | — | 8 | 1d 14h | 13d ago | 29m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.74% | 6.74% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 58.71% | 58.71% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.05% | 44.05% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 21.51% | 21.51% | 21.51% | — | — | 3 | 5d 17h | 17d ago | 29m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.02% | 40.02% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 59.77% | 77.53% | 77.53% | — | — | 4 | 2d 23h | 12d ago | 47m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 23.00% | 23.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 78.49% | 78.49% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.45% | 55.45% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 71.19% | 84.78% | 84.78% | — | — | 1 | 8d 15h | 9d ago | 29m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.83% | 36.83% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 11.49% | 68.90% | 68.90% | — | — | 2 | 13d 7h | 27d ago | 33m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 73.59% | 73.59% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 66.69% | 66.69% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.40% | 2.40% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.71% | 78.71% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.38% | 39.38% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 10.95% | 92.30% | 92.30% | — | — | 1 | 26d 17h | 27d ago | 42m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.48% | 78.48% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.87% | 30.87% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 78.39% | 78.39% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 45.66% | 45.66% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 19.62% | 19.62% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 41.15% | 41.15% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 76.18% | 76.18% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 60.24% | 60.24% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.58% | 25.58% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 2h | 22d ago | 29m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.76% | 74.76% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 2h | 22d ago | 29m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.57% | 45.57% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.96% | 2.96% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 3h | 22d ago | 29m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.89% | 40.89% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.24% | 73.24% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 2.53% | 39.45% | 39.45% | — | — | 1 | 29d 7h | 29d ago | 44m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.87% | 55.87% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 26.93% | 26.93% | 26.93% | — | — | 1 | 16d | 16d ago | 29m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 36.47% | 36.47% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.76% | 55.76% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 84.17% | 84.17% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 52.98% | 95.71% | 95.71% | — | — | 2 | 6d 23h | 14d ago | 46m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.80% | 26.80% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.16% | 11.16% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.83% | 22.83% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.16% | 50.16% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 89.12% | 89.12% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.58% | 50.58% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 68.69% | 68.69% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.43% | 8.43% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.55% | 16.55% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.89% | 46.89% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 33.00% | 48.05% | 48.05% | — | — | 2 | 9d 24h | 20d ago | 34m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.78% | 18.78% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.26% | 52.26% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 90.15% | 90.15% | — | — | 1 | 15d 21h | 16d ago | 41m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.53% | 36.53% | — | — | 1 | 22d 3h | 22d ago | 36m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.43% | 20.43% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.58% | 30.58% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.26% | 5.26% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.89% | 74.89% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 85.53% | 85.53% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 2.75% | 52.02% | 52.02% | — | — | 1 | 29d 5h | 29d ago | 28m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.58% | 78.58% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 77.55% | 77.55% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 60.49% | 60.49% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 71.02% | 71.02% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.42% | 77.42% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 22h | 16d ago | 28m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.47% | 18.47% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.63% | 56.63% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 37.45% | 37.45% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.86% | 3.86% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.22% | 32.22% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.97% | 64.97% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.16% | 23.16% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.92% | 6.92% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.21% | 62.21% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 25.30% | 25.30% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.04% | 64.04% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 33.62% | 33.62% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 57.26% | 76.99% | 76.99% | — | — | 3 | 4d 5h | 13d ago | 29m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.23% | 4.23% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 48.06% | 48.06% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 41.55% | 41.55% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.80% | 31.80% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.62% | 18.62% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 2.53% | 5.19% | 5.19% | — | — | 1 | 29d 7h | 29d ago | 45m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.67% | 10.67% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.02% | 17.02% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.63% | 15.63% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.86% | 27.86% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.27% | 9.27% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.24% | 7.24% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.75% | 0.75% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.27% | 4.27% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.95% | 4.95% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.30% | 47.30% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 39.64% | 39.64% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.55% | 78.55% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 66.86% | 66.86% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 42.17% | 42.17% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.74% | 78.74% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 46.77% | 46.77% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.22% | 39.22% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.51% | 1.51% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.14% | 18.14% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 3h | 22d ago | 29m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.60% | 76.60% | — | — | 1 | 29d 23h | 30d ago | 40m ago |

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
