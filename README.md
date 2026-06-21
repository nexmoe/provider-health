# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 355 🟢 operational · 58 🟡 degraded · 258 🔴 down · 0 ⚫ unknown

_Updated 2026-06-21 08:03 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (355)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.23% | 98.23% | 836 ms | ↑ 1.24x | 1 | 0s | 24d ago | 16m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1444 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.91% | 93.91% | 2435 ms | ↑ 1.91x | 3 | 0s | 15d ago | 20m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 21.86% | 21.86% | 3262 ms | ↑ 1.59x | 4 | 0s | 11d ago | 22m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.48% | 97.48% | 4038 ms | ↑ 1.31x | 0 | — | — | 30m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 56.82% | 56.82% | 1733 ms | ↑ 1.07x | 0 | — | — | 20m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.90% | 99.90% | 99.90% | 1257 ms | → 1.00x | 1 | 0s | 16d ago | 13m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.89% | 97.89% | 3893 ms | ↑ 1.31x | 1 | 0s | 24d ago | 27m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.51% | 99.51% | 99.51% | 599 ms | ↓ 0.42x | 3 | 47m | 10d ago | 13m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.83% | 98.83% | 2273 ms | ↑ 1.21x | 0 | — | — | 33m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.51% | 99.51% | 3702 ms | ↑ 1.13x | 0 | — | — | 33m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.32% | 99.32% | 295 ms | ↓ 0.28x | 0 | — | — | 15m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.35% | 95.35% | 2791 ms | ↑ 1.27x | 0 | — | — | 17m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2166 ms | ↑ 1.49x | 0 | — | — | 15m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.78% | 97.78% | 3383 ms | ↑ 1.41x | 0 | — | — | 17m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.48% | 92.48% | 3504 ms | ↑ 1.61x | 1 | 50m | 10d ago | 33m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1418 ms | ↑ 1.46x | 0 | — | — | 13m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.68% | 98.68% | 1533 ms | ↑ 1.24x | 0 | — | — | 17m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.60% | 96.99% | 96.99% | 1628 ms | → 1.04x | 1 | 8h 47m | 11d ago | 16m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 100.00% | 98.01% | 96.39% | 96.39% | 1810 ms | ↑ 1.19x | 11 | 49m | 8d ago | 15m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.92% | 98.92% | 641 ms | ↓ 0.48x | 0 | — | — | 15m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 38.09% | 38.09% | 928 ms | ↑ 1.62x | 0 | — | — | 27m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1700 ms | ↑ 1.23x | 0 | — | — | 13m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.82% | 99.87% | 99.87% | 1507 ms | ↑ 1.52x | 2 | 10m | 12d ago | 16m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 97.01% | 97.01% | 2996 ms | ↑ 1.29x | 1 | 0s | 26d ago | 20m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.89% | 98.89% | 1020 ms | ↑ 1.15x | 2 | 15m | 12d ago | 29m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.97% | 99.97% | 1439 ms | ↑ 1.69x | 1 | 0s | 30d ago | 14m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 87.71% | 87.71% | 2070 ms | ↑ 1.84x | 1 | 3h 51m | 23d ago | 18m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.53% | 99.70% | 99.70% | 1903 ms | ↓ 0.91x | 4 | 30m | 10d ago | 15m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.41% | 98.41% | 4416 ms | ↑ 1.43x | 0 | — | — | 18m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.25% | 98.25% | 550 ms | ↑ 1.68x | 0 | — | — | 16m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.14% | 86.14% | 2540 ms | ↑ 1.78x | 0 | — | — | 17m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.88% | 99.94% | 99.94% | 1108 ms | ↑ 1.08x | 2 | 0s | 8d ago | 14m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.75% | 97.75% | 1475 ms | ↑ 1.10x | 0 | — | — | 20m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.99% | 99.99% | 758 ms | ↑ 1.10x | 0 | — | — | 28m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3067 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.04% | 99.04% | 725 ms | ↑ 1.62x | 0 | — | — | 19m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.91% | 97.91% | 4216 ms | ↑ 1.11x | 1 | 0s | 27d ago | 31m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.40% | 96.40% | 1088 ms | → 1.04x | 0 | — | — | 19m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.06% | 85.51% | 85.51% | 1616 ms | → 1.01x | 9 | 6h 19m | 12d ago | 16m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1106 ms | → 1.00x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2187 ms | ↑ 1.28x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1133 ms | ↑ 1.06x | 2 | 0s | 12d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 2130 ms | → 1.04x | 0 | — | — | 28m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.83% | 99.83% | 495 ms | ↓ 0.38x | 1 | 51m | 21d ago | 13m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.85% | 99.85% | 4450 ms | ↑ 1.32x | 1 | 0s | 27d ago | 27m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.71% | 99.71% | 820 ms | ↓ 0.83x | 1 | 0s | 20d ago | 17m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1294 ms | ↑ 1.22x | 0 | — | — | 13m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 30.89% | 30.89% | 1200 ms | ↑ 1.15x | 0 | — | — | 28m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.91% | 97.91% | 1041 ms | ↓ 0.46x | 13 | 48m | 18d ago | 17m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.73% | 99.73% | 99.73% | 1890 ms | ↑ 1.12x | 1 | 30m | 8d ago | 13m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1151 ms | ↓ 0.72x | 0 | — | — | 15m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 483 ms | ↓ 0.56x | 0 | — | — | 15m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.80% | 99.80% | 559 ms | → 0.97x | 4 | 0s | 11d ago | 15m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.78% | 96.78% | 727 ms | ↓ 0.93x | 0 | — | — | 20m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.08% | 98.17% | 98.17% | 2065 ms | → 1.05x | 1 | 21h 30m | 17d ago | 13m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1150 ms | → 1.00x | 0 | — | — | 13m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.41% | 55.41% | 1888 ms | ↑ 1.36x | 0 | — | — | 22m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 97.84% | 97.84% | 97.84% | 951 ms | → 1.01x | 2 | 4h 33m | 10d ago | 13m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 44.25% | 47.90% | 47.90% | 498 ms | ↓ 0.94x | 1 | 16d 18h | 30d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1818 ms | ↑ 1.58x | 1 | 0s | 30d ago | 14m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3147 ms | → 0.96x | 0 | — | — | 27m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.18% | 97.18% | 992 ms | ↓ 0.72x | 0 | — | — | 27m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.83% | 98.83% | 98.83% | 565 ms | ↓ 0.64x | 3 | 1h 47m | 9d ago | 13m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.13% | 99.13% | 1380 ms | → 0.99x | 2 | 0s | 8d ago | 20m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.70% | 83.70% | 3512 ms | ↑ 1.52x | 0 | — | — | 21m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 354 ms | ↓ 0.47x | 0 | — | — | 15m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.74% | 98.74% | 2814 ms | ↑ 1.36x | 0 | — | — | 18m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4278 ms | ↑ 1.37x | 1 | 0s | 30d ago | 13m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.99% | 92.99% | 751 ms | → 0.95x | 1 | 0s | 27d ago | 22m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.70% | 98.70% | 1209 ms | ↑ 1.24x | 0 | — | — | 17m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.84% | 99.84% | 631 ms | ↑ 1.56x | 1 | 0s | 18d ago | 19m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.40% | 99.40% | 769 ms | ↓ 0.61x | 0 | — | — | 15m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1926 ms | → 1.02x | 0 | — | — | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 97.99% | 97.99% | 1022 ms | ↓ 0.38x | 2 | 0s | 11d ago | 18m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 93.46% | 89.70% | 89.70% | 1371 ms | ↑ 1.38x | 2 | 23h 44m | 14d ago | 17m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2348 ms | → 1.04x | 0 | — | — | 13m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.80% | 76.80% | 1324 ms | ↑ 1.37x | 0 | — | — | 21m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 934 ms | ↓ 0.95x | 0 | — | — | 14m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.25% | 98.25% | 2663 ms | ↑ 1.28x | 0 | — | — | 19m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 945 ms | → 0.97x | 0 | — | — | 13m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2583 ms | ↑ 1.65x | 1 | 0s | 30d ago | 14m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.54% | 82.54% | 2476 ms | ↑ 1.47x | 2 | 0s | 12d ago | 21m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.05% | 98.05% | 2834 ms | ↑ 1.58x | 0 | — | — | 22m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.87% | 99.87% | 2298 ms | ↑ 1.27x | 1 | 0s | 30d ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.03% | 61.03% | 1148 ms | ↓ 0.75x | 0 | — | — | 21m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.09% | 64.09% | 1878 ms | ↑ 1.25x | 0 | — | — | 22m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.23% | 99.23% | 1976 ms | ↑ 1.18x | 0 | — | — | 21m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 957 ms | ↓ 0.47x | 0 | — | — | 19m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 578 ms | ↓ 0.80x | 1 | 0s | 22d ago | 21m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.63% | 87.63% | 87.63% | 2538 ms | ↓ 0.92x | 5 | 15h 33m | 9d ago | 13m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 20.28% | 20.28% | 2068 ms | ↑ 1.82x | 1 | 0s | 17d ago | 27m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2619 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2453 ms | ↑ 1.10x | 0 | — | — | 13m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.06% | 99.06% | 3934 ms | ↑ 1.12x | 1 | 29m | 27d ago | 31m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.19% | 98.19% | 3980 ms | ↑ 1.22x | 0 | — | — | 33m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.71% | 99.91% | 99.91% | 922 ms | ↑ 1.10x | 3 | 13m | 19d ago | 28m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.85% | 75.85% | 3162 ms | ↑ 1.41x | 0 | — | — | 20m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 969 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1392 ms | → 1.00x | 0 | — | — | 13m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.64% | 99.64% | 1570 ms | ↑ 1.32x | 1 | 2h 60m | 14d ago | 15m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1765 ms | ↑ 1.30x | 0 | — | — | 33m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 630 ms | ↓ 0.37x | 1 | 0s | 25d ago | 32m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.63% | 99.63% | 2498 ms | ↑ 1.28x | 1 | 0s | 12d ago | 30m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.72% | 89.72% | 1732 ms | ↓ 0.92x | 0 | — | — | 21m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 79.48% | 79.48% | 2088 ms | ↑ 1.08x | 0 | — | — | 19m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.80% | 99.80% | 923 ms | ↑ 1.24x | 1 | 0s | 24d ago | 32m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 664 ms | ↑ 1.18x | 0 | — | — | 15m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.19% | 85.19% | 2728 ms | ↑ 1.34x | 0 | — | — | 17m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2306 ms | ↑ 1.29x | 0 | — | — | 14m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2271 ms | ↑ 1.45x | 0 | — | — | 17m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.06% | 99.06% | 916 ms | ↑ 1.39x | 0 | — | — | 22m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.52% | 97.52% | 2470 ms | ↑ 2.27x | 0 | — | — | 17m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.90% | 99.90% | 99.90% | 1760 ms | ↑ 1.24x | 1 | 0s | 15d ago | 13m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.88% | 99.94% | 99.94% | 1844 ms | ↑ 1.92x | 2 | 0s | 12d ago | 14m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2328 ms | ↑ 1.30x | 0 | — | — | 14m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 67.97% | 80.63% | 80.63% | 1237 ms | → 1.03x | 2 | 4d 20h | 23d ago | 15m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.90% | 98.90% | 372 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.12% | 99.12% | 1227 ms | ↑ 1.15x | 3 | 0s | 14d ago | 15m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.99% | 98.99% | 3265 ms | ↑ 1.98x | 0 | — | — | 22m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 87.15% | 87.15% | 1670 ms | ↑ 1.53x | 0 | — | — | 16m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.60% | 97.71% | 97.71% | 494 ms | ↓ 0.87x | 1 | 9h 26m | 30d ago | 14m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.78% | 99.78% | 99.78% | 733 ms | ↑ 1.18x | 1 | 1h | 21d ago | 13m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.90% | 99.90% | 1690 ms | ↑ 1.28x | 2 | 11m | 22d ago | 13m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 24.12% | 24.12% | 2247 ms | ↑ 1.82x | 0 | — | — | 22m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1783 ms | ↑ 1.60x | 0 | — | — | 34m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2649 ms | ↑ 1.08x | 0 | — | — | 32m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 691 ms | ↑ 1.15x | 0 | — | — | 31m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.13% | 98.13% | 940 ms | ↓ 0.67x | 0 | — | — | 20m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 750 ms | ↑ 1.29x | 0 | — | — | 32m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.73% | 99.73% | 1645 ms | ↑ 1.06x | 4 | 8m | 15d ago | 27m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.74% | 98.74% | 4745 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1054 ms | ↓ 0.43x | 0 | — | — | 31m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2400 ms | ↑ 1.41x | 0 | — | — | 15m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 96.67% | 31.64% | 31.64% | 2098 ms | ↑ 1.21x | 9 | 2h 12m | 7d ago | 29m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.47% | 97.92% | 97.92% | 2030 ms | ↑ 1.21x | 126 | 29m | 11d ago | 30m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2802 ms | ↑ 1.13x | 0 | — | — | 27m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2542 ms | ↑ 1.38x | 2 | 0s | 12d ago | 22m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.49% | 42.49% | 952 ms | ↑ 1.07x | 1 | 0s | 11d ago | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.57% | 98.57% | 2550 ms | ↓ 0.59x | 0 | — | — | 19m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1172 ms | → 1.03x | 0 | — | — | 31m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2974 ms | ↑ 1.08x | 1 | 0s | 24d ago | 27m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.81% | 99.81% | 1432 ms | ↑ 1.07x | 2 | 14m | 15d ago | 19m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 19.43% | 19.43% | 730 ms | → 0.96x | 1 | 0s | 8d ago | 31m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2678 ms | ↑ 1.15x | 0 | — | — | 21m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.68% | 99.68% | 720 ms | ↓ 0.49x | 0 | — | — | 16m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 566 ms | ↑ 1.18x | 0 | — | — | 13m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.48% | 99.48% | 99.48% | 995 ms | → 0.95x | 2 | 45m | 9d ago | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 704 ms | → 1.03x | 0 | — | — | 32m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.64% | 61.64% | 1657 ms | ↑ 1.05x | 0 | — | — | 22m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.32% | 82.83% | 82.83% | 1539 ms | ↑ 1.76x | 3 | 8h 40m | 12d ago | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2845 ms | ↑ 1.07x | 0 | — | — | 31m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.35% | 89.35% | 2062 ms | ↑ 1.34x | 1 | 0s | 8d ago | 30m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.28% | 80.28% | 2255 ms | ↑ 1.18x | 1 | 13h | 18d ago | 33m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1365 ms | ↑ 1.32x | 1 | 0s | 11d ago | 30m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1110 ms | → 1.00x | 0 | — | — | 32m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 45.55% | 45.55% | 200 ms | → 1.00x | 1 | 0s | 11d ago | 19m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 989 ms | ↑ 1.06x | 0 | — | — | 32m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1810 ms | ↑ 1.67x | 1 | 0s | 30d ago | 14m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 990 ms | ↑ 1.11x | 1 | 0s | 24d ago | 16m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.53% | 98.53% | 1747 ms | ↑ 1.22x | 0 | — | — | 17m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.60% | 96.60% | 1202 ms | ↑ 1.57x | 2 | 45m | 10d ago | 17m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.39% | 70.39% | 1358 ms | ↑ 1.34x | 0 | — | — | 21m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1316 ms | ↑ 1.09x | 0 | — | — | 13m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1352 ms | → 1.00x | 0 | — | — | 13m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.26% | 81.26% | 3381 ms | ↑ 1.65x | 1 | 0s | 11d ago | 21m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2176 ms | ↑ 1.24x | 0 | — | — | 30m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 846 ms | ↓ 0.38x | 1 | 0s | 30d ago | 14m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.74% | 92.74% | 1508 ms | → 0.96x | 3 | 0s | 19d ago | 20m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.87% | 99.87% | 486 ms | ↓ 0.61x | 2 | 0s | 12d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 39.40% | 23.03% | 23.03% | 2721 ms | ↑ 1.08x | 2 | 9d 2h | 12d ago | 16m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.67% | 85.67% | 1348 ms | ↑ 2.24x | 0 | — | — | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.24% | 91.24% | 489 ms | ↑ 1.35x | 0 | — | — | 19m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.31% | 99.31% | 2361 ms | ↑ 1.14x | 0 | — | — | 21m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.74% | 96.74% | 1546 ms | ↑ 1.09x | 0 | — | — | 21m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.87% | 99.87% | 1965 ms | ↑ 1.63x | 2 | 0s | 24d ago | 14m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 21.94% | 21.94% | 2356 ms | ↑ 1.42x | 1 | 0s | 17d ago | 27m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2835 ms | ↑ 1.11x | 0 | — | — | 32m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.90% | 99.90% | 99.90% | 1640 ms | → 1.03x | 1 | 0s | 9d ago | 15m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4315 ms | ↑ 1.22x | 0 | — | — | 15m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.95% | 58.95% | 740 ms | ↑ 1.07x | 0 | — | — | 22m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.83% | 98.43% | 98.43% | 2436 ms | ↑ 1.45x | 3 | 0s | 11d ago | 19m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 41.86% | 41.86% | 3366 ms | ↑ 1.38x | 1 | 0s | 29d ago | 21m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.20% | 99.20% | 99.20% | 2994 ms | → 1.00x | 1 | 1h 58m | 10d ago | 14m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.24% | 99.24% | 4338 ms | ↑ 1.28x | 1 | 0s | 23d ago | 27m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3481 ms | ↑ 1.16x | 0 | — | — | 32m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.89% | 99.89% | 2639 ms | ↑ 1.29x | 1 | 30m | 29d ago | 20m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.23% | 92.15% | 92.15% | 2893 ms | ↑ 1.07x | 3 | 12h 57m | 20d ago | 19m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.27% | 99.27% | 2328 ms | ↑ 1.19x | 0 | — | — | 21m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.06% | 80.06% | 419 ms | ↓ 0.30x | 0 | — | — | 21m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 189 ms | → 0.99x | 1 | 0s | 24d ago | 32m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2689 ms | ↑ 1.67x | 0 | — | — | 13m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2775 ms | ↑ 1.28x | 0 | — | — | 30m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1416 ms | ↓ 0.94x | 1 | 0s | 30d ago | 15m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.18% | 91.60% | 91.60% | 2594 ms | ↓ 0.87x | 14 | 0s | 12d ago | 19m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.48% | 80.48% | 2779 ms | ↑ 1.42x | 1 | 0s | 26d ago | 21m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.90% | 86.90% | 296 ms | ↓ 0.19x | 0 | — | — | 21m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1707 ms | ↑ 1.36x | 1 | 0s | 30d ago | 15m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1395 ms | ↑ 1.34x | 0 | — | — | 30m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.63% | 98.63% | 866 ms | ↑ 1.36x | 0 | — | — | 19m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 23.73% | 23.73% | 919 ms | ↑ 1.92x | 0 | — | — | 22m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.53% | 97.55% | 97.55% | 446 ms | ↓ 0.42x | 5 | 16m | 9d ago | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 915 ms | ↓ 0.92x | 0 | — | — | 19m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 83.05% | 35.76% | 35.76% | 915 ms | → 0.96x | 1 | 4d 21h | 30d ago | 31m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.97% | 92.97% | 29 ms | ↓ 0.95x | 0 | — | — | 16m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.90% | 98.90% | 1600 ms | ↑ 1.35x | 1 | 5h 60m | 22d ago | 30m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 20.26% | 20.26% | 1531 ms | ↑ 1.46x | 0 | — | — | 30m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 798 ms | ↓ 0.55x | 0 | — | — | 15m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 4112 ms | ↑ 1.20x | 0 | — | — | 15m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 510 ms | ↓ 0.58x | 0 | — | — | 15m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.54% | 93.54% | 4696 ms | ↑ 1.09x | 0 | — | — | 31m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.58% | 99.58% | 2072 ms | ↑ 1.20x | 1 | 1h 20m | 23d ago | 30m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 97.37% | 98.35% | 98.35% | 4085 ms | ↑ 1.28x | 18 | 43m | 8d ago | 18m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.25% | 99.25% | 1022 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.90% | 99.90% | 1402 ms | ↓ 0.90x | 1 | 0s | 30d ago | 15m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.58% | 99.58% | 2505 ms | ↑ 1.34x | 0 | — | — | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 1974 ms | ↑ 1.42x | 0 | — | — | 30m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 673 ms | ↑ 1.36x | 0 | — | — | 34m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.80% | 98.80% | 2892 ms | ↑ 1.10x | 0 | — | — | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.77% | 96.77% | 3311 ms | ↑ 1.15x | 0 | — | — | 31m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 577 ms | ↓ 0.32x | 0 | — | — | 13m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.81% | 99.81% | 608 ms | ↓ 0.85x | 1 | 20m | 24d ago | 16m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.83% | 88.83% | 2440 ms | ↑ 1.38x | 0 | — | — | 20m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.84% | 99.84% | 776 ms | ↓ 0.84x | 0 | — | — | 16m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1750 ms | → 1.01x | 0 | — | — | 15m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2149 ms | ↑ 1.18x | 0 | — | — | 31m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1461 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.93% | 99.93% | 1594 ms | ↑ 1.17x | 2 | 0s | 15d ago | 14m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1398 ms | ↑ 1.18x | 0 | — | — | 32m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 100.00% | 75.06% | 75.06% | 963 ms | ↓ 0.86x | 0 | — | — | 19m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.88% | 99.88% | 2886 ms | ↑ 1.06x | 1 | 0s | 26d ago | 28m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 891 ms | → 1.01x | 0 | — | — | 29m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.77% | 84.77% | 1676 ms | ↓ 0.92x | 1 | 0s | 20d ago | 27m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 25.51% | 25.51% | 2810 ms | ↑ 1.29x | 1 | 0s | 18d ago | 33m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.59% | 98.87% | 98.87% | 2043 ms | ↑ 1.33x | 4 | 15m | 10d ago | 20m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.17% | 98.17% | 2585 ms | ↑ 1.36x | 2 | 0s | 23d ago | 17m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.31% | 92.31% | 4478 ms | ↑ 1.29x | 2 | 25m | 10d ago | 33m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.93% | 99.93% | 2486 ms | ↑ 1.88x | 1 | 0s | 8d ago | 13m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 98.83% | 97.22% | 97.22% | 1801 ms | ↑ 1.34x | 15 | 10m | 11d ago | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.87% | 99.87% | 1076 ms | ↑ 1.39x | 2 | 30m | 18d ago | 14m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.70% | 97.70% | 3844 ms | ↑ 2.05x | 1 | 0s | 15d ago | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.83% | 98.83% | 1032 ms | ↑ 1.21x | 0 | — | — | 21m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.74% | 98.74% | 1860 ms | → 0.99x | 0 | — | — | 29m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.82% | 99.60% | 99.60% | 3098 ms | ↑ 1.42x | 2 | 15m | 27d ago | 15m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 100.00% | 97.98% | 97.98% | 4241 ms | ↑ 1.23x | 0 | — | — | 18m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1130 ms | ↑ 1.82x | 1 | 0s | 30d ago | 15m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.64% | 98.64% | 1365 ms | ↑ 1.87x | 4 | 7m | 8d ago | 20m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2689 ms | ↑ 1.34x | 0 | — | — | 13m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.31% | 97.31% | 97.31% | 164 ms | ↓ 0.13x | 2 | 6h 36m | 12d ago | 13m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 30.52% | 30.52% | 1205 ms | ↑ 1.21x | 0 | — | — | 29m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 1717 ms | ↑ 1.72x | 1 | 0s | 28d ago | 20m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1922 ms | ↑ 1.38x | 0 | — | — | 29m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.77% | 88.77% | 4202 ms | ↑ 1.44x | 0 | — | — | 21m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 13.83% | 13.83% | 2617 ms | → 1.01x | 0 | — | — | 28m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1808 ms | ↑ 1.19x | 1 | 0s | 11d ago | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 20.26% | 20.26% | 2065 ms | → 1.01x | 0 | — | — | 31m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 797 ms | ↓ 0.90x | 0 | — | — | 15m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.19% | 97.19% | 2736 ms | ↑ 1.45x | 0 | — | — | 17m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2530 ms | ↑ 1.21x | 1 | 0s | 26d ago | 29m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1261 ms | → 1.01x | 2 | 10m | 11d ago | 30m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 20.05% | 20.05% | 2418 ms | ↑ 1.45x | 0 | — | — | 22m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.47% | 99.70% | 99.70% | 1489 ms | ↓ 0.53x | 5 | 24m | 13d ago | 14m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.76% | 99.76% | 2861 ms | ↑ 1.15x | 1 | 2h 18m | 29d ago | 19m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2272 ms | ↑ 1.24x | 0 | — | — | 31m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2081 ms | → 0.99x | 0 | — | — | 13m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 776 ms | ↓ 0.54x | 0 | — | — | 29m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 311 ms | → 0.98x | 0 | — | — | 14m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.65% | 98.65% | 1646 ms | ↑ 1.29x | 0 | — | — | 17m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2299 ms | ↑ 1.17x | 1 | 0s | 18d ago | 27m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.14% | 99.14% | 1900 ms | ↑ 1.21x | 1 | 0s | 18d ago | 31m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 858 ms | ↑ 1.78x | 0 | — | — | 30m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 383 ms | → 0.96x | 0 | — | — | 13m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.89% | 99.73% | 99.73% | 3371 ms | ↑ 1.14x | 2 | 0s | 4d ago | 31m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.76% | 99.54% | 99.25% | 99.25% | 2277 ms | ↑ 1.57x | 4 | 22m | 24h ago | 32m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.66% | 98.87% | 98.87% | 3108 ms | ↑ 1.18x | 6 | 0s | 5d ago | 33m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.94% | 99.54% | 99.54% | 3517 ms | ↑ 1.05x | 1 | 0s | 6d ago | 32m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.31% | 99.45% | 99.45% | 3166 ms | ↑ 1.14x | 5 | 38m | 6d ago | 33m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.83% | 44.32% | 44.32% | 1432 ms | ↑ 1.08x | 3 | 0s | 2d ago | 32m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.76% | 99.77% | 62.49% | 62.49% | 2708 ms | ↑ 1.06x | 4 | 0s | 24h ago | 32m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.89% | 99.66% | 99.66% | 1332 ms | ↑ 1.41x | 2 | 0s | 7d ago | 30m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.77% | 79.53% | 79.53% | 1628 ms | ↓ 0.89x | 4 | 0s | 3d ago | 27m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.76% | 99.48% | 98.99% | 98.99% | 3886 ms | ↑ 1.07x | 8 | 2m | 5d ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.76% | 99.48% | 99.16% | 99.16% | 4081 ms | ↑ 1.10x | 8 | 2m | 5d ago | 29m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.76% | 99.94% | 99.95% | 99.95% | 2265 ms | ↑ 1.17x | 1 | 0s | 3d ago | 27m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.75% | 99.48% | 72.93% | 72.93% | 921 ms | → 0.96x | 8 | 4m | 20h ago | 21m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.67% | 98.67% | 996 ms | ↓ 0.84x | 6 | 0s | 20h ago | 21m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.88% | 82.26% | 82.26% | 2718 ms | ↑ 1.35x | 2 | 0s | 20h ago | 21m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.51% | 97.51% | 2717 ms | ↑ 1.32x | 1 | 0s | 1d ago | 22m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 48.29% | 48.29% | 1964 ms | ↑ 1.42x | 2 | 0s | 20h ago | 22m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 63.12% | 63.12% | 636 ms | ↓ 0.91x | 3 | 0s | 20h ago | 21m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.86% | 20.14% | 20.14% | 617 ms | ↓ 0.37x | 7 | 1h 40m | 20h ago | 22m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.88% | 22.33% | 22.33% | 657 ms | ↓ 0.35x | 2 | 0s | 20h ago | 22m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.54% | 21.98% | 21.98% | 1759 ms | ↑ 1.17x | 4 | 30m | 5d ago | 22m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.88% | 68.04% | 68.04% | 1628 ms | ↑ 1.51x | 2 | 0s | 20h ago | 21m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.36% | 98.48% | 98.48% | 1967 ms | ↑ 1.30x | 2 | 2h 9m | 4d ago | 20m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.18% | 96.18% | 2274 ms | ↑ 1.54x | 1 | 0s | 20h ago | 22m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.09% | 62.09% | 2578 ms | ↑ 1.21x | 1 | 0s | 20h ago | 21m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.26% | 96.68% | 96.68% | 4639 ms | ↑ 1.22x | 12 | 43m | 20h ago | 22m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.96% | 99.96% | 2244 ms | ↑ 1.19x | 2 | 0s | 20h ago | 21m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.37% | 98.37% | 2499 ms | ↑ 1.36x | 1 | 0s | 3d ago | 20m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.62% | 96.62% | 3333 ms | ↑ 1.56x | 1 | 0s | 2d ago | 22m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 22.07% | 22.07% | 3988 ms | ↑ 1.65x | 1 | 0s | 2d ago | 22m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.75% | 99.07% | 91.43% | 91.43% | 1451 ms | → 0.99x | 15 | 2m | 20h ago | 21m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.36% | 97.61% | 97.61% | 2230 ms | ↑ 1.21x | 9 | 7m | 6d ago | 20m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.94% | 99.93% | 99.93% | 2306 ms | ↑ 1.45x | 1 | 0s | 2d ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 58.84% | 66.04% | 66.04% | 1654 ms | ↑ 1.34x | 2 | 6d 1h | 5d ago | 17m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.88% | 99.93% | 99.93% | 1716 ms | → 0.97x | 2 | 0s | 5h ago | 15m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.65% | 99.60% | 99.60% | 1398 ms | ↑ 1.28x | 4 | 14m | 6d ago | 15m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 99.82% | 98.94% | 98.94% | 3092 ms | ↑ 1.10x | 3 | 0s | 3d ago | 15m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 98.07% | 96.35% | 96.35% | 2210 ms | ↑ 1.15x | 2 | 6h 1m | 5h ago | 16m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.75% | 99.88% | 99.93% | 99.93% | 2067 ms | ↑ 1.73x | 2 | 0s | 6d ago | 14m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.93% | 99.93% | 1748 ms | ↑ 1.50x | 2 | 0s | 7d ago | 15m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.75% | 99.77% | 99.77% | 99.77% | 2394 ms | → 1.04x | 1 | 0s | 7d ago | 13m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.94% | 98.18% | 98.18% | 1747 ms | ↑ 1.35x | 1 | 0s | 3d ago | 16m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.75% | 99.88% | 87.62% | 87.62% | 1070 ms | ↓ 0.90x | 2 | 0s | 7d ago | 15m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.75% | 96.32% | 97.46% | 97.46% | 686 ms | ↓ 0.74x | 2 | 12h 5m | 3d ago | 15m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.54% | 99.54% | 2912 ms | ↑ 1.78x | 1 | 0s | 5d ago | 15m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.52% | 99.66% | 96.06% | 96.06% | 3306 ms | ↑ 1.16x | 6 | 0s | 2h ago | 33m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.52% | 99.66% | 85.59% | 85.59% | 2209 ms | ↑ 1.06x | 6 | 0s | 16h ago | 32m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.71% | 20.25% | 20.25% | 2295 ms | ↑ 1.06x | 5 | 0s | 2d ago | 31m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.51% | 99.25% | 68.96% | 68.96% | 3917 ms | → 0.99x | 12 | 3m | 5d ago | 28m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.51% | 99.42% | 53.10% | 53.10% | 1107 ms | ↓ 0.94x | 6 | 20m | 20h ago | 22m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.51% | 99.88% | 90.40% | 90.40% | 2229 ms | ↑ 1.16x | 2 | 0s | 20h ago | 21m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.51% | 99.83% | 21.13% | 21.13% | 1257 ms | ↑ 1.12x | 3 | 0s | 20h ago | 22m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.51% | 99.77% | 22.80% | 22.80% | 1517 ms | ↑ 1.18x | 4 | 0s | 2d ago | 22m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.51% | 99.48% | 98.93% | 98.93% | 956 ms | ↓ 0.41x | 5 | 24m | 5d ago | 20m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.50% | 99.88% | 96.78% | 96.78% | 846 ms | ↑ 1.22x | 2 | 0s | 3d ago | 19m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.50% | 99.64% | 99.64% | 99.64% | 1615 ms | → 1.04x | 2 | 0s | 6d ago | 13m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.50% | 99.78% | 99.78% | 99.78% | 1753 ms | ↓ 0.87x | 3 | 0s | 3d ago | 13m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.50% | 99.53% | 99.53% | 99.53% | 1163 ms | ↓ 0.78x | 5 | 12m | 3d ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.50% | 99.18% | 98.64% | 98.64% | 1383 ms | ↓ 0.57x | 4 | 60m | 2d ago | 15m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.50% | 97.49% | 98.69% | 98.69% | 872 ms | ↑ 1.55x | 8 | 1h 52m | 1d ago | 15m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.50% | 99.69% | 99.69% | 99.69% | 389 ms | ↓ 0.86x | 3 | 0s | 1d ago | 15m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.50% | 99.77% | 99.63% | 99.63% | 1973 ms | ↓ 0.60x | 4 | 0s | 3d ago | 14m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.50% | 97.26% | 97.82% | 97.82% | 4508 ms | ↑ 1.25x | 23 | 29m | 4d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.50% | 99.77% | 97.92% | 97.92% | 616 ms | ↓ 0.78x | 4 | 0s | 3d ago | 16m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.50% | 99.18% | 98.71% | 98.71% | 803 ms | ↓ 0.58x | 2 | 2h 55m | 7d ago | 15m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.50% | 99.68% | 99.68% | 99.68% | 1384 ms | → 0.99x | 2 | 0s | 3d ago | 13m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.50% | 99.42% | 99.75% | 99.75% | 4699 ms | ↑ 1.42x | 6 | 20m | 2d ago | 18m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.50% | 99.18% | 96.74% | 96.74% | 1419 ms | → 1.01x | 6 | 35m | 1d ago | 16m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.27% | 98.33% | 48.44% | 48.44% | 3525 ms | ↑ 1.22x | 7 | 1h 12m | 12h ago | 28m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.27% | 99.71% | 55.49% | 55.49% | 1678 ms | ↑ 1.24x | 5 | 0s | 3d ago | 28m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.26% | 99.71% | 67.01% | 67.01% | 1331 ms | → 0.97x | 4 | 5m | 20h ago | 21m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.26% | 99.65% | 90.55% | 90.55% | 719 ms | ↓ 0.94x | 6 | 0s | 20h ago | 21m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.26% | 99.54% | 68.43% | 68.43% | 1484 ms | ↑ 1.49x | 6 | 10m | 3h ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.26% | 99.77% | 99.82% | 99.82% | 362 ms | ↓ 0.22x | 4 | 0s | 20h ago | 22m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.25% | 96.09% | 85.18% | 85.18% | 1334 ms | ↓ 0.52x | 15 | 1h 29m | 16h ago | 14m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 99.25% | 97.19% | 98.04% | 98.04% | 1680 ms | ↑ 2.08x | 8 | 1h 60m | 7d ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.25% | 99.30% | 98.76% | 98.76% | 2411 ms | ↑ 1.17x | 5 | 42m | 4d ago | 15m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.03% | 99.09% | 98.34% | 98.34% | 4546 ms | → 1.04x | 16 | 0s | 18h ago | 33m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.03% | 99.71% | 20.16% | 20.16% | 3897 ms | ↑ 1.41x | 4 | 8m | 17h ago | 27m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.01% | 99.71% | 53.76% | 53.76% | 588 ms | ↓ 0.81x | 5 | 0s | 8h ago | 19m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.00% | 99.77% | 99.86% | 99.86% | 1168 ms | ↓ 0.74x | 1 | 1h 9m | 5d ago | 15m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.00% | 74.80% | 85.71% | 85.71% | 1024 ms | ↑ 1.42x | 7 | 1d 2h | 4d ago | 13m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.00% | 99.07% | 99.15% | 99.15% | 2146 ms | ↑ 1.57x | 9 | 21m | 4d ago | 15m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (58)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.78% | 98.27% | 98.91% | 98.91% | 1618 ms | → 0.99x | 20 | 14m | 2d ago | 27m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.77% | 98.72% | 67.34% | 67.34% | 4712 ms | ↑ 1.07x | 20 | 3m | 19h ago | 21m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.77% | 98.61% | 86.40% | 86.40% | 4572 ms | ↑ 1.11x | 23 | 1m | 20h ago | 22m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.76% | 99.71% | 96.14% | 96.14% | 1369 ms | ↑ 1.53x | 1 | 2h 1m | 3d ago | 13m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.76% | 98.48% | 92.26% | 92.26% | 796 ms | ↑ 1.13x | 12 | 27m | 12h ago | 16m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.76% | 99.71% | 98.16% | 98.16% | 463 ms | ↓ 0.49x | 1 | 1h 40m | 3d ago | 17m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.51% | 99.59% | 99.43% | 99.43% | 4872 ms | ↑ 1.45x | 6 | 3m | 5h ago | 15m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.30% | 98.50% | 18.48% | 18.48% | 3834 ms | ↑ 1.41x | 12 | 29m | 1d ago | 27m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.30% | 98.57% | 85.86% | 85.86% | 4420 ms | → 1.01x | 24 | 1m | 3h ago | 29m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.28% | 99.19% | 61.25% | 61.25% | 1082 ms | ↓ 0.42x | 4 | 1h 9m | 15h ago | 22m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.26% | 97.43% | 98.72% | 98.72% | 3095 ms | ↑ 1.54x | 17 | 47m | 2d ago | 18m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.26% | 82.60% | 82.45% | 82.45% | 4387 ms | ↓ 0.86x | 35 | 3h 17m | 2h ago | 17m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.06% | 98.46% | 86.88% | 86.88% | 4084 ms | ↑ 1.30x | 27 | 0s | 1h ago | 33m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.03% | 97.67% | 95.93% | 95.93% | 3731 ms | ↑ 1.33x | 5 | 2h 55m | 1d ago | 20m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.01% | 98.54% | 98.54% | 98.54% | 3172 ms | ↑ 1.44x | 25 | 0s | 4h ago | 13m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.81% | 99.48% | 99.61% | 99.61% | 2584 ms | ↑ 1.12x | 1 | 3h 60m | 4d ago | 29m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 97.77% | 97.77% | 97.77% | 97.77% | 3100 ms | → 1.00x | 1 | 2h 37m | 15h ago | 13m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.53% | 97.56% | 86.19% | 86.19% | 4748 ms | ↑ 1.07x | 30 | 11m | 5h ago | 19m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.32% | 97.53% | 74.69% | 74.69% | 4498 ms | ↑ 1.07x | 38 | 4m | 2h ago | 28m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 97.27% | 99.07% | 99.61% | 99.61% | 2049 ms | ↑ 1.17x | 2 | 3h 20m | 2d ago | 19m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.26% | 90.32% | 90.32% | 90.32% | 4640 ms | → 1.03x | 17 | 2h 7m | 2d ago | 13m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.26% | 98.19% | 98.61% | 98.61% | 2201 ms | ↑ 1.49x | 7 | 1h 16m | 2d ago | 15m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.08% | 98.33% | 19.67% | 19.67% | 4552 ms | ↑ 1.26x | 29 | 0s | 9h ago | 27m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.08% | 98.10% | 96.52% | 96.52% | 1669 ms | ↑ 1.29x | 8 | 1h 10m | 2d ago | 28m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.77% | 97.29% | 97.29% | 97.29% | 4609 ms | → 1.04x | 14 | 6m | 2d ago | 13m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 96.77% | 97.60% | 97.60% | 97.60% | 3297 ms | ↑ 1.06x | 11 | 9m | 3d ago | 14m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.77% | 98.72% | 51.09% | 51.09% | 4213 ms | ↑ 2.15x | 20 | 3m | 16h ago | 18m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.60% | 99.08% | 99.72% | 99.72% | 177 ms | ↑ 1.25x | 11 | 9m | 4d ago | 31m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.35% | 95.98% | 18.37% | 18.37% | 2695 ms | ↑ 1.07x | 65 | 2m | 3d ago | 28m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.35% | 96.61% | 19.59% | 19.59% | 875 ms | ↓ 0.79x | 56 | 1m | 4d ago | 28m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.78% | 96.21% | 83.85% | 83.85% | 4537 ms | → 0.98x | 54 | 6m | 23h ago | 19m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 95.64% | 98.91% | 99.56% | 99.56% | 4011 ms | → 1.04x | 18 | 2m | 23h ago | 31m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.63% | 93.64% | 43.32% | 43.32% | 3454 ms | → 1.04x | 48 | 32m | 4d ago | 31m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.62% | 96.95% | 98.51% | 98.51% | 4481 ms | ↑ 1.17x | 50 | 2m | 9h ago | 27m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.57% | 93.90% | 72.90% | 72.90% | 1909 ms | ↑ 1.28x | 17 | 1h 47m | 4d ago | 21m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 94.78% | 97.01% | 89.75% | 89.75% | 4762 ms | ↑ 1.21x | 11 | 37m | 5h ago | 15m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.43% | 98.63% | 99.74% | 99.74% | 1968 ms | ↑ 1.16x | 4 | 1h 38m | 24h ago | 32m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.87% | 97.97% | 97.89% | 97.89% | 1840 ms | ↓ 0.92x | 2 | 6h 16m | 6d ago | 21m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.05% | 94.05% | 95.50% | 95.50% | 1784 ms | ↓ 0.79x | 12 | 3h 18m | 2d ago | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 89.32% | 97.42% | 98.83% | 98.83% | 3727 ms | ↑ 1.35x | 2 | 8h 60m | 2d ago | 30m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.93% | 88.40% | 20.78% | 20.78% | 4535 ms | → 0.95x | 155 | 8m | 3h ago | 22m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.41% | 96.91% | 99.59% | 99.59% | 4178 ms | ↑ 1.39x | 3 | 6h 10m | 7d ago | 33m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 87.06% | 41.90% | 27.92% | 27.92% | 3174 ms | ↑ 1.10x | 191 | 1h 46m | 2h ago | 13m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 86.57% | 88.37% | 92.89% | 92.89% | 2330 ms | ↓ 0.52x | 84 | 31m | 3d ago | 15m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.33% | 93.40% | 93.40% | 93.40% | 1517 ms | → 0.99x | 4 | 6h 14m | 4d ago | 15m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 82.97% | 95.11% | 99.32% | 99.32% | 4200 ms | ↑ 1.32x | 11 | 2h 40m | 6d ago | 27m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 82.88% | 92.80% | 91.20% | 91.20% | 1379 ms | ↑ 1.22x | 40 | 52m | 1d ago | 13m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 81.64% | 81.65% | 81.65% | 81.65% | 4341 ms | → 0.98x | 110 | 44m | 2h ago | 13m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 79.40% | 41.04% | 41.04% | 41.04% | 1312 ms | ↓ 0.92x | 1 | 13d 23h | 20d ago | 13m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 75.00% | 57.65% | 88.62% | 88.62% | 2107 ms | ↑ 1.45x | 1 | 12d 20h | 18d ago | 30m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.45% | 70.94% | 62.61% | 62.61% | 4799 ms | → 1.00x | 321 | 16m | 1h ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 70.20% | 88.28% | 35.81% | 35.81% | 2003 ms | ↑ 1.07x | 14 | 5h 29m | 3d ago | 22m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 70.15% | 80.40% | 97.09% | 97.09% | 4643 ms | ↑ 1.21x | 189 | 21m | 2h ago | 30m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 67.73% | 15.98% | 31.51% | 31.51% | 2365 ms | → 1.00x | 2 | 12d 13h | 20h ago | 21m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 66.83% | 15.78% | 74.66% | 74.66% | 3597 ms | → 1.00x | 3 | 8d 9h | 1d ago | 33m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 58.46% | 69.00% | 92.26% | 92.26% | 4620 ms | ↑ 1.94x | 3 | 2d 24h | 2d ago | 18m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 23.63% | 80.07% | 84.56% | 84.56% | 4978 ms | ↑ 2.73x | 89 | 1h 11m | 6h ago | 16m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 1.49% | 0.35% | 22.05% | 22.05% | 2206 ms | → 1.00x | 1 | 29d 20h | 30d ago | 16m ago |

</details>

<details open>
<summary><strong>🔴 Down (258)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 98.51% | 48.68% | 48.16% | 48.16% | 688 ms | → 1.00x | 5 | 3d 2h | 3h ago | 14m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 98.03% | 48.60% | 67.96% | 67.96% | 686 ms | → 0.98x | 6 | 2d 13h | 3h ago | 21m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.32% | 96.16% | 82.86% | 82.86% | 4847 ms | → 1.04x | 60 | 3m | 20m ago | 20m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.57% | 89.08% | 57.81% | 57.81% | 4167 ms | ↑ 1.05x | 151 | 7m | 17m ago | 17m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 75.97% | 94.27% | 87.05% | 87.05% | 1302 ms | → 1.03x | 2 | 20h 30m | 2d ago | 31m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 75.62% | 93.81% | 96.27% | 96.27% | 2347 ms | ↑ 1.11x | 9 | 4h 40m | 2d ago | 15m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 71.18% | 70.93% | 24.50% | 24.50% | 4659 ms | → 1.00x | 295 | 19m | 21m ago | 21m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 65.42% | 90.54% | 93.55% | 93.55% | 1663 ms | ↓ 0.93x | 9 | 7h 8m | 2d ago | 15m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 48.52% | 34.80% | 31.62% | 31.62% | 2046 ms | ↑ 1.15x | 2 | 9d 19h | 4d ago | 22m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 48.51% | 87.90% | 92.98% | 92.98% | 639 ms | ↓ 0.68x | 1 | 3d 16h | 4d ago | 15m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 34.58% | 83.29% | 90.40% | 90.40% | 755 ms | → 1.01x | 26 | 4h 15m | 5d ago | 14m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 13.93% | 79.71% | 88.50% | 88.50% | 2007 ms | ↑ 1.91x | 2 | 3d 1h | 6d ago | 13m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 4.36% | 76.72% | 78.66% | 78.66% | 146 ms | ↑ 1.12x | 4 | 1d 17h | 7d ago | 33m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.94% | 1.83% | 58.14% | 58.14% | 3765 ms | ↑ 1.13x | 32 | 21h 46m | 9h ago | 33m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.49% | 52.24% | 50.58% | 50.58% | 2396 ms | ↑ 1.08x | 9 | 1d 13h | 2d ago | 28m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 79.06% | 79.06% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 65.49% | 65.49% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 70.45% | 70.45% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 43.45% | 43.45% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 75.95% | 75.95% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 56.87% | 56.87% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.39% | 5.39% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.96% | 11.96% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 52.57% | 52.57% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.24% | 3.24% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 62.81% | 89.04% | 89.04% | — | — | 1 | 11d 4h | 11d ago | 16m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 63.46% | 63.46% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 79.31% | 79.31% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.81% | 34.81% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 88.56% | 88.56% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.24% | 22.24% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 71.16% | 71.16% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 47.74% | 47.74% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.28% | 28.28% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 44.39% | 87.80% | 87.80% | — | — | 6 | 2d 18h | 17d ago | 31m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 79.68% | 79.68% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.02% | 60.02% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 73.61% | 73.61% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 23h | 11d ago | 33m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.02% | 14.02% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 46.86% | 46.86% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 9.99% | 90.43% | 90.43% | — | — | 4 | 6d 18h | 27d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.11% | 32.11% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 73.16% | 84.35% | 84.35% | — | — | 2 | 3d 24h | 8d ago | 14m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 80.06% | 80.06% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 54.17% | 52.23% | 52.23% | — | — | 3 | 2d 13h | 8d ago | 16m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 44.72% | 86.15% | 86.15% | — | — | 1 | 16d 16h | 17d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.27% | 3.27% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 79.91% | 79.91% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 30.11% | 30.11% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.59% | 49.59% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.97% | 31.17% | 31.17% | — | — | 4 | 4d 14h | 10d ago | 21m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.96% | 1.96% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 87.51% | 87.51% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 48.54% | 48.54% | 48.54% | — | — | 1 | 12d 2h | 12d ago | 13m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.41% | 71.29% | 71.29% | — | — | 1 | 29d 20h | 30d ago | 18m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 71.43% | 71.43% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 73.76% | 84.62% | 84.62% | — | — | 4 | 1d 22h | 8d ago | 16m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 28.80% | 28.80% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.19% | 52.19% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 2.28% | 48.88% | 48.88% | — | — | 1 | 29d 7h | 29d ago | 17m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.14% | 23.14% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 36.31% | 80.02% | 80.02% | — | — | 5 | 3d 20h | 19d ago | 33m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 35.71% | 40.00% | 40.00% | — | — | 3 | 6d 11h | 19d ago | 28m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 5h | 17d ago | 13m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 37.71% | 58.38% | 58.38% | — | — | 1 | 18d 21h | 19d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.68% | 54.68% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.98% | 4.98% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 62.92% | 62.92% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 79.63% | 79.63% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 59.60% | 78.16% | 78.16% | — | — | 1 | 12d 3h | 12d ago | 16m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.09% | 6.09% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 76.05% | 76.05% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 78.45% | 78.45% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 30.57% | 30.57% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 45.23% | 89.58% | 89.58% | — | — | 2 | 8d 5h | 16d ago | 20m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.00% | 25.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 5.60% | 22.48% | 22.48% | — | — | 1 | 28d 7h | 28d ago | 17m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.59% | 50.59% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 34.56% | 34.56% | 34.56% | — | — | 2 | 3d 13h | 7d ago | 14m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 73.93% | 82.98% | 82.98% | — | — | 4 | 1d 22h | 8d ago | 16m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 73.48% | 86.82% | 86.82% | — | — | 13 | 14h 7m | 8d ago | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 50.97% | 50.97% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 27.84% | 27.46% | 27.46% | — | — | 8 | 23h 3m | 8d ago | 16m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.36% | 7.36% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 61.11% | 61.11% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.68% | 44.68% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 27.84% | 27.84% | 27.84% | — | — | 3 | 4d 2h | 12d ago | 15m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.60% | 40.60% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 25.23% | 25.23% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 79.64% | 79.64% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.26% | 56.26% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.36% | 37.36% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 28.32% | 71.29% | 71.29% | — | — | 2 | 10d 19h | 22d ago | 19m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 75.92% | 75.92% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 12.55% | 70.27% | 70.27% | — | — | 2 | 13d 3h | 26d ago | 16m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.44% | 2.44% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 79.85% | 79.85% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 27.86% | 93.65% | 93.65% | — | — | 1 | 21d 18h | 22d ago | 27m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 79.62% | 79.62% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.39% | 31.39% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 79.54% | 79.54% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 48.13% | 48.13% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 20.73% | 20.73% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 42.09% | 42.09% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 77.29% | 77.29% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 61.88% | 61.88% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 26.88% | 26.88% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 3h | 17d ago | 15m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 75.84% | 75.84% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 3h | 17d ago | 15m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 47.26% | 47.26% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.03% | 3.03% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 4h | 17d ago | 15m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.49% | 41.49% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 74.30% | 74.30% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 19.28% | 40.02% | 40.02% | — | — | 2 | 12d 4h | 24d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.69% | 56.69% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 34.85% | 34.85% | 34.85% | — | — | 1 | 11d 1h | 11d ago | 15m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 38.96% | 38.96% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 58.01% | 58.01% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 85.40% | 85.40% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 69.89% | 97.11% | 97.11% | — | — | 2 | 4d 11h | 9d ago | 32m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.19% | 27.19% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.51% | 11.51% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.16% | 23.16% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.89% | 50.89% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.74% | 90.42% | 90.42% | — | — | 1 | 29d 18h | 30d ago | 32m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 52.28% | 52.28% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 14.42% | 71.64% | 71.64% | — | — | 1 | 25d 17h | 26d ago | 18m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.01% | 9.01% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.78% | 16.78% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.57% | 47.57% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 49.83% | 49.66% | 49.66% | — | — | 2 | 7d 12h | 15d ago | 19m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 20.59% | 20.59% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.02% | 53.02% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 91.65% | 91.65% | — | — | 1 | 10d 22h | 11d ago | 27m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.29% | 37.29% | — | — | 1 | 17d 4h | 17d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.19% | 21.19% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 32.06% | 32.06% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 44.54% | 44.54% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.33% | 5.33% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 76.85% | 76.85% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 86.78% | 86.78% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 19.53% | 56.69% | 56.69% | — | — | 1 | 24d 6h | 24d ago | 13m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 79.73% | 79.73% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 78.69% | 78.69% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.37% | 61.37% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 72.05% | 72.05% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 78.54% | 78.54% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 23h | 11d ago | 15m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.76% | 18.76% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 57.46% | 57.46% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.18% | 39.04% | 39.04% | — | — | 1 | 29d 22h | 30d ago | 18m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.91% | 3.91% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.72% | 32.72% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 65.92% | 65.92% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 3.49% | 23.90% | 23.90% | — | — | 3 | 9d 15h | 28d ago | 19m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.10% | 7.10% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 63.11% | 63.11% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 27.75% | 27.75% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 64.97% | 64.97% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 35.93% | 35.93% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 73.99% | 84.43% | 84.43% | — | — | 3 | 2d 13h | 8d ago | 16m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.62% | 4.62% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 10d 22h | 11d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.64% | 51.36% | 51.36% | — | — | 1 | 29d 18h | 30d ago | 16m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 44.60% | 44.60% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 33.28% | 33.28% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 19.85% | 19.85% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 19.31% | 5.27% | 5.27% | — | — | 2 | 12d 4h | 24d ago | 30m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.09% | 11.09% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.27% | 17.27% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.35% | 16.35% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 29.90% | 29.90% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.50% | 9.50% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.92% | 7.92% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.80% | 0.80% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.29% | 5.29% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.99% | 47.99% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 42.54% | 42.54% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 79.70% | 79.70% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 69.60% | 69.60% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 43.77% | 43.77% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 79.88% | 79.88% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 49.43% | 49.43% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.79% | 39.79% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.66% | 1.66% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.57% | 18.57% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 4h | 17d ago | 15m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 77.71% | 77.71% | — | — | 1 | 29d 23h | 30d ago | 26m ago |

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
