# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**665 providers** — 345 🟢 operational · 73 🟡 degraded · 247 🔴 down · 0 ⚫ unknown

_Updated 2026-06-12 07:26 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (345)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 97.99% | 97.99% | 555 ms | ↓ 0.90x | 1 | 0s | 15d ago | 28m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1682 ms | → 0.99x | 0 | — | — | 25m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.41% | 97.41% | 3066 ms | ↑ 1.17x | 0 | — | — | 43m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 54.14% | 54.14% | 2090 ms | ↑ 1.24x | 0 | — | — | 32m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.83% | 97.83% | 2877 ms | → 1.02x | 2 | 0s | 15d ago | 40m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.80% | 98.80% | 1976 ms | ↑ 1.10x | 0 | — | — | 45m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.45% | 99.45% | 3316 ms | → 1.02x | 1 | 0s | 22d ago | 45m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.18% | 99.18% | 2578 ms | ↑ 1.31x | 1 | 19m | 24d ago | 27m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.88% | 94.88% | 2477 ms | ↑ 1.24x | 0 | — | — | 29m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1958 ms | ↑ 1.49x | 0 | — | — | 27m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.21% | 97.55% | 97.55% | 2638 ms | ↑ 1.28x | 1 | 4h 31m | 29d ago | 29m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.96% | 99.96% | 1738 ms | ↑ 1.37x | 1 | 0s | 29d ago | 27m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 942 ms | ↑ 1.27x | 0 | — | — | 25m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.56% | 98.56% | 1279 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.75% | 98.75% | 1964 ms | ↑ 1.74x | 0 | — | — | 27m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 36.43% | 36.43% | 704 ms | ↑ 1.19x | 0 | — | — | 40m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1382 ms | → 1.01x | 0 | — | — | 25m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.84% | 96.84% | 2530 ms | ↑ 1.18x | 1 | 0s | 17d ago | 32m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 27.77% | 62.81% | 62.81% | 861 ms | → 0.95x | 1 | 21d 3h | 30d ago | 29m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 1016 ms | ↑ 1.22x | 1 | 0s | 21d ago | 26m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.59% | 96.59% | 739 ms | ↑ 1.18x | 0 | — | — | 31m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.21% | 86.74% | 86.74% | 1482 ms | ↑ 1.49x | 4 | 1h 3m | 14d ago | 30m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1750 ms | ↑ 1.14x | 1 | 0s | 21d ago | 26m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.28% | 98.28% | 3203 ms | ↑ 1.25x | 1 | 60m | 22d ago | 30m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.01% | 98.01% | 284 ms | ↑ 1.24x | 0 | — | — | 28m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.78% | 78.99% | 78.99% | 2185 ms | ↑ 1.13x | 4 | 0s | 11d ago | 40m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 84.86% | 84.86% | 1971 ms | ↑ 1.61x | 0 | — | — | 29m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1019 ms | → 1.01x | 1 | 0s | 21d ago | 26m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.61% | 97.61% | 1519 ms | ↑ 1.39x | 0 | — | — | 32m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 824 ms | ↑ 1.13x | 0 | — | — | 41m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3221 ms | ↑ 1.13x | 0 | — | — | 41m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.98% | 98.98% | 581 ms | ↑ 1.94x | 0 | — | — | 31m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.05% | 98.98% | 98.98% | 3606 ms | ↑ 1.06x | 9 | 20m | 9d ago | 42m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.83% | 97.85% | 97.85% | 3734 ms | ↑ 1.07x | 3 | 0s | 18d ago | 44m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.82% | 99.82% | 2114 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.15% | 96.15% | 1007 ms | → 0.95x | 0 | — | — | 31m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1215 ms | → 1.00x | 0 | — | — | 25m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 767 ms | → 1.00x | 0 | — | — | 26m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1108 ms | → 1.00x | 0 | — | — | 25m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.88% | 99.88% | 2828 ms | ↑ 1.53x | 3 | 0s | 21d ago | 26m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2237 ms | ↑ 1.07x | 0 | — | — | 41m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.75% | 99.75% | 99.75% | 1523 ms | ↑ 1.21x | 1 | 51m | 12d ago | 25m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3195 ms | ↓ 0.90x | 1 | 0s | 18d ago | 40m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.89% | 99.69% | 99.69% | 1253 ms | → 1.00x | 2 | 0s | 11d ago | 29m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1160 ms | → 1.00x | 0 | — | — | 25m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 29.04% | 29.04% | 1185 ms | ↑ 1.17x | 0 | — | — | 41m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.19% | 95.92% | 95.92% | 2219 ms | ↑ 1.07x | 1 | 12h 2m | 17d ago | 29m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1413 ms | ↓ 0.83x | 1 | 0s | 21d ago | 26m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.74% | 97.72% | 97.72% | 3965 ms | ↑ 1.27x | 14 | 52m | 9d ago | 30m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1654 ms | → 1.00x | 0 | — | — | 25m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2398 ms | → 0.96x | 0 | — | — | 27m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 622 ms | ↓ 0.58x | 0 | — | — | 27m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.78% | 97.45% | 97.45% | 2022 ms | ↑ 1.12x | 3 | 10m | 26d ago | 35m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.58% | 96.58% | 870 ms | → 1.01x | 0 | — | — | 32m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 54.11% | 54.11% | 1467 ms | ↑ 1.21x | 0 | — | — | 35m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.89% | 99.63% | 99.63% | 2674 ms | ↓ 0.87x | 2 | 0s | 10d ago | 26m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1242 ms | ↓ 0.82x | 1 | 0s | 21d ago | 26m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3517 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.11% | 97.11% | 1631 ms | ↑ 1.35x | 0 | — | — | 40m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.38% | 98.38% | 98.38% | 1622 ms | ↑ 1.63x | 2 | 2h 41m | 13d ago | 25m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.89% | 99.09% | 99.09% | 1369 ms | ↑ 1.06x | 2 | 0s | 11d ago | 32m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.95% | 82.95% | 2683 ms | ↑ 1.24x | 0 | — | — | 33m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 65.80% | 65.80% | 1384 ms | → 0.99x | 2 | 0s | 10d ago | 33m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1070 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.63% | 98.63% | 2319 ms | ↑ 1.21x | 0 | — | — | 30m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 3708 ms | ↑ 1.12x | 1 | 0s | 21d ago | 25m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.77% | 92.77% | 826 ms | → 0.97x | 1 | 0s | 18d ago | 34m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.57% | 98.57% | 1116 ms | ↑ 1.42x | 0 | — | — | 29m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.83% | 99.83% | 512 ms | ↑ 1.67x | 3 | 0s | 9d ago | 31m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.28% | 99.28% | 816 ms | ↓ 0.53x | 0 | — | — | 27m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1636 ms | → 1.00x | 0 | — | — | 25m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2411 ms | → 1.00x | 0 | — | — | 26m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.94% | 75.81% | 75.81% | 1082 ms | ↑ 1.12x | 1 | 0s | 29d ago | 33m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.55% | 95.50% | 95.50% | 1156 ms | ↑ 1.57x | 2 | 1h 30m | 27d ago | 25m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1122 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.14% | 98.14% | 2459 ms | ↑ 1.12x | 0 | — | — | 32m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | → 1.00x | 0 | — | — | 25m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1835 ms | ↑ 1.23x | 1 | 0s | 21d ago | 26m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 98.00% | 98.00% | 949 ms | ↑ 1.07x | 1 | 0s | 28d ago | 35m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.84% | 99.84% | 2109 ms | ↑ 1.13x | 1 | 0s | 21d ago | 26m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 59.70% | 59.70% | 1952 ms | ↑ 1.10x | 1 | 0s | 24d ago | 34m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.88% | 62.88% | 1278 ms | ↑ 1.14x | 0 | — | — | 34m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1182 ms | ↓ 0.58x | 0 | — | — | 27m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1576 ms | → 1.03x | 0 | — | — | 33m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 100.00% | 89.94% | 89.94% | 2087 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.80% | 99.80% | 2600 ms | ↓ 0.89x | 0 | — | — | 31m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.57% | 99.57% | 896 ms | → 0.99x | 1 | 0s | 13d ago | 33m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.89% | 98.07% | 98.07% | 1901 ms | ↓ 0.95x | 1 | 30m | 10d ago | 33m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 18.14% | 18.14% | 687 ms | ↓ 0.60x | 1 | 0s | 8d ago | 41m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2230 ms | ↑ 1.08x | 3 | 0s | 23d ago | 44m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2338 ms | ↑ 1.34x | 0 | — | — | 25m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.03% | 99.03% | 3514 ms | ↑ 1.11x | 1 | 29m | 18d ago | 44m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.84% | 99.84% | 3330 ms | ↑ 1.11x | 3 | 0s | 12d ago | 45m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.14% | 98.14% | 3429 ms | ↑ 1.12x | 0 | — | — | 45m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.50% | 99.90% | 99.90% | 922 ms | ↑ 1.11x | 4 | 29m | 10d ago | 41m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 74.33% | 74.33% | 2116 ms | → 1.00x | 0 | — | — | 32m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1276 ms | → 1.00x | 0 | — | — | 26m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1494 ms | ↑ 1.18x | 0 | — | — | 45m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.72% | 99.72% | 2898 ms | ↓ 0.88x | 2 | 0s | 16d ago | 45m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.22% | 89.22% | 828 ms | ↓ 0.33x | 0 | — | — | 33m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 77.94% | 77.94% | 2041 ms | → 0.98x | 0 | — | — | 31m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.77% | 99.77% | 739 ms | ↑ 1.19x | 1 | 0s | 15d ago | 45m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 503 ms | → 1.00x | 0 | — | — | 27m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.61% | 83.61% | 2445 ms | ↑ 1.29x | 0 | — | — | 29m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1754 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1868 ms | ↑ 1.40x | 0 | — | — | 29m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.03% | 99.03% | 818 ms | ↑ 1.26x | 0 | — | — | 35m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.25% | 97.25% | 1943 ms | ↑ 2.54x | 0 | — | — | 29m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 1326 ms | ↑ 1.17x | 1 | 0s | 21d ago | 26m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1729 ms | ↑ 1.10x | 0 | — | — | 26m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.21% | 87.21% | 1643 ms | ↑ 1.08x | 5 | 0s | 20d ago | 44m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.72% | 97.69% | 97.69% | 1473 ms | ↓ 0.94x | 5 | 0s | 12d ago | 28m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.81% | 98.81% | 252 ms | ↑ 1.38x | 0 | — | — | 31m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.97% | 98.97% | 2572 ms | ↑ 1.53x | 0 | — | — | 35m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 75.97% | 75.97% | 554 ms | → 1.04x | 0 | — | — | 28m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.94% | 18.03% | 18.03% | 2672 ms | ↑ 1.05x | 1 | 0s | 7d ago | 40m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.62% | 97.24% | 97.24% | 642 ms | ↓ 0.79x | 19 | 30m | 21d ago | 26m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.63% | 99.63% | 99.63% | 746 ms | ↑ 1.11x | 1 | 1h | 12d ago | 25m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.87% | 99.87% | 1458 ms | ↑ 1.31x | 2 | 11m | 13d ago | 25m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 21.91% | 21.91% | 2181 ms | ↑ 1.75x | 0 | — | — | 35m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 950 ms | ↑ 1.26x | 0 | — | — | 46m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2509 ms | ↑ 1.15x | 1 | 0s | 26d ago | 45m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.62% | 98.73% | 98.73% | 189 ms | ↑ 1.22x | 16 | 49m | 9d ago | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 708 ms | ↑ 1.22x | 0 | — | — | 44m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.95% | 97.95% | 1190 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2854 ms | ↑ 1.09x | 2 | 0s | 20d ago | 44m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.03% | 98.03% | 910 ms | ↓ 0.46x | 0 | — | — | 32m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 676 ms | ↑ 1.24x | 2 | 25m | 27d ago | 45m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 455 ms | ↓ 0.35x | 0 | — | — | 27m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.71% | 98.71% | 4528 ms | ↑ 1.05x | 0 | — | — | 46m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2827 ms | ↓ 0.88x | 0 | — | — | 44m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1771 ms | ↑ 1.35x | 0 | — | — | 27m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2601 ms | ↑ 1.07x | 0 | — | — | 40m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.48% | 98.48% | 3909 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.94% | 99.95% | 99.95% | 1136 ms | → 1.04x | 1 | 0s | 29d ago | 44m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.78% | 99.44% | 99.44% | 2820 ms | → 0.99x | 4 | 0s | 15d ago | 40m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.61% | 99.85% | 99.85% | 153 ms | ↑ 1.16x | 5 | 12m | 18d ago | 44m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.22% | 17.27% | 17.27% | 771 ms | → 1.00x | 8 | 15m | 23d ago | 44m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2137 ms | → 1.00x | 0 | — | — | 33m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.94% | 99.85% | 99.85% | 1773 ms | → 0.98x | 1 | 0s | 15d ago | 45m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.64% | 99.64% | 1830 ms | → 0.97x | 0 | — | — | 28m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 442 ms | → 0.97x | 0 | — | — | 25m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 654 ms | → 0.96x | 0 | — | — | 45m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.95% | 95.79% | 95.79% | 3022 ms | ↑ 1.17x | 4 | 4h 46m | 16d ago | 33m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 60.40% | 60.40% | 1614 ms | → 1.04x | 1 | 0s | 27d ago | 34m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2626 ms | ↑ 1.12x | 0 | — | — | 44m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.89% | 98.90% | 98.90% | 2014 ms | ↑ 1.50x | 2 | 0s | 15d ago | 27m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.07% | 89.07% | 1665 ms | ↑ 1.19x | 1 | 0s | 22d ago | 43m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.22% | 79.75% | 79.75% | 2232 ms | ↑ 1.11x | 1 | 13h | 9d ago | 45m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 100.00% | 85.06% | 85.06% | 1060 ms | ↓ 0.77x | 0 | — | — | 27m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1150 ms | → 1.01x | 0 | — | — | 45m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.65% | 99.65% | 1249 ms | ↑ 1.18x | 3 | 7m | 17d ago | 43m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 974 ms | ↑ 1.05x | 0 | — | — | 45m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1154 ms | ↓ 0.84x | 1 | 0s | 21d ago | 26m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 950 ms | ↑ 1.15x | 1 | 0s | 15d ago | 29m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.39% | 98.39% | 1524 ms | ↑ 1.28x | 0 | — | — | 29m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.08% | 98.08% | 1529 ms | → 0.96x | 0 | — | — | 29m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.23% | 69.23% | 1025 ms | → 1.04x | 0 | — | — | 33m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1528 ms | ↑ 1.13x | 0 | — | — | 25m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1810 ms | ↑ 1.14x | 0 | — | — | 43m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 2116 ms | ↓ 0.80x | 1 | 0s | 21d ago | 26m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.72% | 92.35% | 92.35% | 1567 ms | ↑ 1.07x | 5 | 0s | 10d ago | 32m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 99.94% | 50.63% | 50.63% | 861 ms | ↑ 1.45x | 1 | 0s | 8d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.29% | 85.29% | 607 ms | ↑ 1.77x | 0 | — | — | 43m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.94% | 90.65% | 90.65% | 302 ms | ↓ 0.94x | 1 | 0s | 28d ago | 31m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.29% | 99.29% | 2088 ms | → 1.01x | 0 | — | — | 33m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 66.90% | 66.90% | 1500 ms | ↑ 2.36x | 1 | 0s | 14d ago | 33m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.63% | 96.63% | 1625 ms | ↑ 1.16x | 0 | — | — | 33m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.89% | 99.84% | 99.84% | 1368 ms | ↓ 0.87x | 2 | 0s | 15d ago | 26m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 19.85% | 19.85% | 2488 ms | ↑ 1.26x | 1 | 0s | 8d ago | 40m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2773 ms | ↑ 1.10x | 0 | — | — | 45m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 96.49% | 96.96% | 96.96% | 548 ms | ↓ 0.46x | 1 | 1d | 14d ago | 27m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1538 ms | → 0.99x | 0 | — | — | 27m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3906 ms | → 0.97x | 0 | — | — | 26m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.11% | 99.15% | 99.15% | 3835 ms | ↑ 1.14x | 8 | 23m | 9d ago | 42m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.60% | 57.60% | 674 ms | ↑ 1.14x | 0 | — | — | 34m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.44% | 98.40% | 98.40% | 1648 ms | ↑ 1.21x | 1 | 4h 17m | 21d ago | 33m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 39.23% | 39.23% | 2591 ms | ↑ 1.12x | 1 | 0s | 20d ago | 33m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.83% | 99.22% | 99.22% | 3446 ms | ↑ 1.06x | 3 | 0s | 14d ago | 40m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2882 ms | ↑ 1.06x | 0 | — | — | 45m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2211 ms | ↑ 1.14x | 1 | 30m | 20d ago | 33m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 91.58% | 91.60% | 91.60% | 2636 ms | → 0.97x | 6 | 9h 19m | 11d ago | 31m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.98% | 99.14% | 99.14% | 1514 ms | ↑ 1.54x | 11 | 17m | 7d ago | 27m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.23% | 99.23% | 2087 ms | ↑ 1.08x | 0 | — | — | 33m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.49% | 98.66% | 98.66% | 2394 ms | ↑ 1.33x | 4 | 37m | 7d ago | 27m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.22% | 79.22% | 1552 ms | ↑ 1.07x | 0 | — | — | 33m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 189 ms | → 1.01x | 1 | 0s | 15d ago | 45m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1908 ms | ↑ 1.24x | 0 | — | — | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2050 ms | ↑ 1.22x | 0 | — | — | 43m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2736 ms | ↑ 1.79x | 1 | 0s | 21d ago | 26m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1909 ms | ↑ 1.06x | 0 | — | — | 40m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.53% | 99.53% | 3396 ms | ↑ 1.07x | 1 | 0s | 23d ago | 45m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.83% | 79.60% | 79.60% | 2231 ms | ↑ 1.19x | 3 | 0s | 17d ago | 33m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.28% | 86.28% | 2801 ms | ↑ 1.24x | 0 | — | — | 33m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.92% | 99.92% | 1388 ms | ↑ 1.09x | 1 | 0s | 21d ago | 26m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.08% | 96.08% | 1911 ms | ↑ 1.32x | 0 | — | — | 35m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1241 ms | ↑ 1.12x | 0 | — | — | 43m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.54% | 98.54% | 795 ms | ↑ 1.20x | 0 | — | — | 31m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 21.32% | 21.32% | 573 ms | → 0.98x | 0 | — | — | 34m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.60% | 97.26% | 97.26% | 1968 ms | ↓ 0.92x | 4 | 20m | 18d ago | 28m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 833 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.77% | 18.92% | 18.92% | 1279 ms | ↑ 1.14x | 4 | 0s | 15d ago | 35m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.79% | 60.79% | 2293 ms | ↑ 1.13x | 0 | — | — | 33m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.81% | 99.81% | 2661 ms | ↑ 1.09x | 1 | 0s | 10d ago | 44m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 51.14% | 27.22% | 27.22% | 764 ms | ↓ 0.58x | 1 | 13d 22h | 30d ago | 44m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 91.69% | 92.14% | 92.14% | 28 ms | ↑ 1.06x | 1 | 2d 3h | 30d ago | 29m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.61% | 98.87% | 98.87% | 1163 ms | ↑ 1.19x | 2 | 6h 50m | 13d ago | 43m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 18.12% | 18.12% | 1432 ms | ↑ 1.26x | 0 | — | — | 43m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2100 ms | ↑ 1.58x | 0 | — | — | 27m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.49% | 99.49% | 1626 ms | ↑ 1.37x | 0 | — | — | 27m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3410 ms | ↑ 1.73x | 0 | — | — | 28m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 630 ms | ↓ 0.58x | 0 | — | — | 27m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.33% | 99.44% | 99.44% | 2986 ms | ↑ 1.08x | 5 | 38m | 10d ago | 45m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.37% | 93.37% | 4621 ms | ↑ 1.13x | 0 | — | — | 44m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.67% | 99.52% | 99.52% | 1613 ms | ↓ 0.86x | 2 | 40m | 14d ago | 43m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2085 ms | ↑ 1.08x | 1 | 0s | 7d ago | 33m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 98.08% | 98.39% | 98.39% | 3427 ms | ↑ 1.37x | 15 | 37m | 9d ago | 30m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.20% | 99.20% | 922 ms | ↓ 0.90x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.88% | 99.88% | 1662 ms | ↑ 1.06x | 1 | 0s | 21d ago | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.57% | 99.57% | 1550 ms | ↓ 0.94x | 1 | 0s | 23d ago | 45m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.46% | 99.46% | 1728 ms | ↑ 1.29x | 0 | — | — | 43m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 528 ms | ↑ 1.13x | 0 | — | — | 46m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.66% | 98.66% | 2905 ms | ↑ 1.19x | 0 | — | — | 29m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.68% | 96.68% | 3024 ms | ↑ 1.11x | 0 | — | — | 44m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4226 ms | ↑ 1.52x | 0 | — | — | 25m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.94% | 99.55% | 99.55% | 3618 ms | ↑ 1.81x | 1 | 0s | 20d ago | 28m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.79% | 99.79% | 873 ms | ↑ 1.37x | 1 | 20m | 15d ago | 29m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.18% | 88.18% | 2067 ms | ↑ 1.27x | 0 | — | — | 33m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.82% | 99.82% | 1070 ms | ↑ 1.21x | 0 | — | — | 29m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1672 ms | → 1.00x | 0 | — | — | 27m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2506 ms | → 1.00x | 0 | — | — | 25m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1862 ms | ↑ 1.08x | 0 | — | — | 44m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.49% | 99.49% | 1303 ms | ↑ 1.12x | 0 | — | — | 45m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1160 ms | ↑ 1.15x | 0 | — | — | 45m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 73.43% | 73.43% | 1110 ms | → 0.96x | 1 | 0s | 21d ago | 31m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3180 ms | ↑ 1.10x | 1 | 0s | 17d ago | 41m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 878 ms | → 1.04x | 0 | — | — | 42m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.37% | 84.37% | 2100 ms | ↑ 1.15x | 1 | 0s | 11d ago | 40m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.89% | 23.50% | 23.50% | 2132 ms | ↑ 1.14x | 2 | 0s | 9d ago | 46m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 97.98% | 97.98% | 2205 ms | ↑ 1.31x | 3 | 0s | 14d ago | 29m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.96% | 99.96% | 1728 ms | ↑ 1.85x | 0 | — | — | 25m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.84% | 99.84% | 1587 ms | ↑ 2.53x | 2 | 30m | 9d ago | 26m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.78% | 98.78% | 790 ms | ↑ 1.12x | 0 | — | — | 33m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.71% | 98.71% | 1852 ms | ↓ 0.88x | 0 | — | — | 42m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.32% | 99.52% | 99.52% | 2282 ms | ↑ 1.13x | 3 | 1h 3m | 18d ago | 26m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.82% | 97.82% | 3710 ms | ↑ 1.29x | 1 | 0s | 23d ago | 30m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 873 ms | ↑ 1.45x | 1 | 0s | 21d ago | 26m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1534 ms | → 1.00x | 0 | — | — | 25m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2168 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 28.66% | 28.66% | 1040 ms | ↑ 1.25x | 1 | 0s | 25d ago | 42m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 920 ms | ↑ 1.26x | 1 | 0s | 19d ago | 33m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.28% | 98.28% | 1952 ms | ↑ 1.24x | 0 | — | — | 33m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1420 ms | ↑ 1.11x | 0 | — | — | 42m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.24% | 88.24% | 3326 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.53% | 96.53% | 2416 ms | ↑ 1.22x | 0 | — | — | 35m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 18.12% | 18.12% | 1883 ms | ↑ 1.05x | 0 | — | — | 44m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 842 ms | ↓ 0.65x | 0 | — | — | 27m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.91% | 96.91% | 2071 ms | ↑ 1.34x | 0 | — | — | 29m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2097 ms | ↑ 1.05x | 1 | 0s | 17d ago | 42m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 20.00% | 20.00% | 2973 ms | ↑ 1.25x | 0 | — | — | 35m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 17.93% | 17.93% | 1862 ms | ↑ 1.24x | 0 | — | — | 35m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.49% | 99.77% | 99.77% | 3599 ms | ↑ 1.28x | 5 | 24m | 9d ago | 30m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.74% | 99.74% | 2839 ms | ↑ 1.10x | 1 | 2h 18m | 20d ago | 31m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1942 ms | ↑ 1.14x | 0 | — | — | 44m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2197 ms | → 1.00x | 0 | — | — | 25m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 96.99% | 99.65% | 99.65% | 2078 ms | → 0.98x | 6 | 2h 50m | 25d ago | 42m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1627 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 260 ms | → 1.00x | 0 | — | — | 26m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.52% | 98.52% | 1545 ms | ↑ 1.48x | 0 | — | — | 29m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 1937 ms | ↑ 1.05x | 1 | 0s | 9d ago | 40m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 2888 ms | ↑ 1.21x | 1 | 0s | 11d ago | 35m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.12% | 99.12% | 1538 ms | ↑ 1.10x | 1 | 0s | 9d ago | 44m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 570 ms | ↑ 1.35x | 0 | — | — | 43m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 440 ms | → 1.00x | 0 | — | — | 25m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.75% | 99.89% | 99.62% | 99.62% | 1899 ms | ↑ 1.14x | 2 | 0s | 3d ago | 43m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.75% | 96.23% | 80.10% | 80.10% | 145 ms | ↑ 1.08x | 3 | 9h 30m | 4h ago | 45m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.75% | 99.94% | 40.94% | 40.94% | 876 ms | ↑ 1.09x | 1 | 0s | 2d ago | 45m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.75% | 99.72% | 99.89% | 99.89% | 1035 ms | ↑ 1.17x | 3 | 17m | 2d ago | 43m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.75% | 99.94% | 99.02% | 99.02% | 3365 ms | ↑ 1.24x | 1 | 0s | 2d ago | 43m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.89% | 18.12% | 18.12% | 2157 ms | ↑ 1.08x | 3 | 0s | 14m ago | 44m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.75% | 99.94% | 99.70% | 99.70% | 1727 ms | ↓ 0.95x | 1 | 0s | 3d ago | 45m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 40.76% | 40.76% | 1296 ms | → 1.03x | 2 | 0s | 7d ago | 45m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.83% | 61.49% | 61.49% | 2636 ms | → 0.97x | 3 | 0s | 3d ago | 45m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.75% | 99.94% | 99.86% | 99.86% | 1482 ms | → 0.96x | 1 | 0s | 2d ago | 42m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.75% | 99.89% | 54.32% | 54.32% | 1566 ms | ↑ 1.23x | 2 | 0s | 16h ago | 41m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.75% | 98.94% | 16.32% | 16.32% | 2619 ms | → 1.02x | 8 | 34m | 3d ago | 40m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.89% | 99.86% | 99.86% | 1019 ms | → 1.01x | 2 | 0s | 3d ago | 39m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.92% | 18.00% | 18.00% | 2953 ms | → 0.97x | 7 | 1h 40m | 2d ago | 35m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.89% | 99.33% | 99.33% | 1774 ms | ↑ 1.10x | 2 | 0s | 3d ago | 35m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.89% | 20.25% | 20.25% | 2619 ms | ↓ 0.93x | 2 | 0s | 3d ago | 35m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.94% | 46.78% | 46.78% | 1874 ms | ↑ 1.28x | 1 | 0s | 3d ago | 35m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 97.92% | 98.63% | 98.63% | 1248 ms | → 1.01x | 6 | 1h 46m | 3d ago | 33m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.89% | 61.63% | 61.63% | 896 ms | → 1.00x | 2 | 0s | 15h ago | 33m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.75% | 99.83% | 93.60% | 93.60% | 715 ms | → 1.03x | 3 | 0s | 6d ago | 33m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.75% | 99.44% | 81.46% | 81.46% | 2160 ms | ↑ 1.15x | 3 | 50m | 1d ago | 33m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.15% | 97.48% | 97.48% | 2125 ms | ↑ 1.25x | 10 | 12m | 6d ago | 32m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.89% | 97.83% | 97.83% | 3085 ms | → 1.02x | 2 | 0s | 2d ago | 31m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.75% | 99.77% | 99.80% | 99.80% | 1479 ms | ↑ 1.05x | 3 | 10m | 6d ago | 32m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.75% | 99.89% | 42.14% | 42.14% | 646 ms | ↑ 1.14x | 2 | 0s | 2d ago | 32m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.75% | 99.77% | 80.41% | 80.41% | 2469 ms | ↑ 1.24x | 2 | 26m | 2d ago | 33m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.75% | 99.83% | 98.32% | 98.32% | 1874 ms | ↑ 1.15x | 3 | 0s | 2d ago | 31m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.74% | 74.43% | 88.66% | 88.66% | 1143 ms | ↑ 1.38x | 2 | 3d 18h | 5d ago | 29m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.74% | 99.49% | 96.27% | 96.27% | 933 ms | ↑ 1.93x | 3 | 51m | 1d ago | 29m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.74% | 99.78% | 99.78% | 99.78% | 1317 ms | → 1.01x | 1 | 0s | 6d ago | 25m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 97.73% | 98.81% | 98.81% | 2969 ms | ↑ 1.09x | 3 | 4h 28m | 6d ago | 27m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.74% | 97.62% | 98.54% | 98.54% | 812 ms | ↑ 1.50x | 7 | 2h 8m | 2d ago | 27m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.74% | 99.78% | 99.78% | 99.78% | 541 ms | → 0.99x | 1 | 0s | 4d ago | 27m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.74% | 99.78% | 92.43% | 92.43% | 3695 ms | → 1.03x | 1 | 0s | 1d ago | 28m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.74% | 75.41% | 82.14% | 82.14% | 2514 ms | ↓ 0.85x | 13 | 12h 55m | 4d ago | 26m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.74% | 99.72% | 99.09% | 99.09% | 3355 ms | ↑ 1.91x | 2 | 44m | 1d ago | 28m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.88% | 99.88% | 99.88% | 2423 ms | → 0.99x | 1 | 0s | 6d ago | 25m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.74% | 99.94% | 99.96% | 99.96% | 1409 ms | ↓ 0.87x | 1 | 0s | 6h ago | 26m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.74% | 99.79% | 99.79% | 99.79% | 1416 ms | → 0.98x | 1 | 0s | 6d ago | 25m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.74% | 99.89% | 99.93% | 99.93% | 1327 ms | ↑ 1.13x | 2 | 0s | 3d ago | 26m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.74% | 99.60% | 99.55% | 99.55% | 2210 ms | ↓ 0.80x | 7 | 0s | 1d ago | 26m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.74% | 99.77% | 98.93% | 98.93% | 1822 ms | ↑ 1.52x | 4 | 0s | 5d ago | 27m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 99.74% | 99.94% | 99.38% | 99.38% | 2823 ms | ↑ 2.04x | 1 | 0s | 1d ago | 28m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.87% | 99.92% | 99.92% | 2672 ms | ↑ 2.24x | 2 | 0s | 6d ago | 26m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.74% | 99.94% | 97.35% | 97.35% | 1694 ms | ↑ 1.62x | 1 | 0s | 6d ago | 28m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.74% | 99.78% | 99.78% | 99.78% | 2178 ms | → 1.00x | 1 | 0s | 2d ago | 27m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.74% | 95.62% | 95.62% | 95.62% | 1410 ms | ↓ 0.92x | 2 | 6h 36m | 3d ago | 25m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.50% | 99.83% | 98.86% | 98.86% | 1037 ms | ↑ 1.22x | 2 | 15m | 3d ago | 42m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.50% | 99.72% | 95.97% | 95.97% | 3036 ms | ↑ 1.07x | 5 | 0s | 17h ago | 45m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.50% | 99.78% | 85.21% | 85.21% | 2224 ms | ↑ 1.10x | 4 | 0s | 3d ago | 45m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.50% | 99.83% | 99.92% | 99.92% | 783 ms | → 1.05x | 2 | 10m | 2d ago | 43m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.50% | 99.50% | 47.12% | 47.12% | 2310 ms | → 1.04x | 7 | 7m | 5h ago | 41m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.50% | 96.59% | 68.15% | 68.15% | 4233 ms | → 1.00x | 25 | 28m | 7d ago | 41m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.49% | 99.78% | 20.76% | 20.76% | 1321 ms | ↑ 1.13x | 4 | 0s | 2d ago | 35m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.49% | 99.83% | 81.75% | 81.75% | 1984 ms | ↑ 1.23x | 3 | 0s | 3d ago | 33m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.49% | 99.83% | 90.11% | 90.11% | 890 ms | → 1.00x | 3 | 0s | 17h ago | 33m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.49% | 99.27% | 98.59% | 98.59% | 813 ms | ↑ 1.37x | 6 | 23m | 2d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.49% | 99.83% | 99.84% | 99.84% | 1230 ms | ↑ 1.25x | 3 | 0s | 3d ago | 29m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.49% | 92.91% | 92.91% | 92.91% | 1562 ms | ↑ 1.25x | 55 | 20m | 3d ago | 25m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.49% | 99.89% | 94.46% | 94.46% | 3962 ms | ↑ 1.72x | 2 | 0s | 1d ago | 28m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.49% | 99.89% | 97.41% | 97.41% | 3394 ms | ↑ 1.77x | 2 | 0s | 1d ago | 28m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.26% | 99.83% | 92.28% | 92.28% | 2546 ms | ↑ 1.34x | 1 | 50m | 1d ago | 46m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.26% | 80.04% | 36.25% | 36.25% | 2766 ms | → 0.99x | 78 | 1h 18m | 2d ago | 44m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.26% | 99.78% | 92.11% | 92.11% | 4140 ms | ↑ 1.16x | 2 | 25m | 1d ago | 46m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.24% | 99.78% | 19.78% | 19.78% | 2422 ms | ↑ 1.26x | 4 | 0s | 2d ago | 35m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.24% | 98.98% | 91.00% | 91.00% | 3202 ms | ↓ 0.94x | 18 | 0s | 3d ago | 31m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.23% | 99.83% | 99.85% | 99.85% | 1453 ms | ↑ 1.31x | 2 | 10m | 3d ago | 29m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.23% | 99.77% | 99.76% | 99.76% | 797 ms | ↑ 1.07x | 4 | 0s | 2d ago | 27m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 99.23% | 96.99% | 97.88% | 97.88% | 1109 ms | ↑ 2.07x | 6 | 2h 60m | 3h ago | 25m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.07% | 99.07% | 99.07% | 99.07% | 747 ms | → 1.00x | 1 | 0s | 9h ago | 26m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.01% | 99.72% | 98.85% | 98.85% | 2810 ms | ↑ 1.11x | 5 | 0s | 6d ago | 45m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (73)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.99% | 99.72% | 99.70% | 99.70% | 1517 ms | ↑ 1.05x | 4 | 8m | 6d ago | 39m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.98% | 99.66% | 67.24% | 67.24% | 1046 ms | ↑ 1.08x | 4 | 15m | 4d ago | 33m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.98% | 99.60% | 99.56% | 99.56% | 1319 ms | ↑ 1.40x | 5 | 12m | 23h ago | 27m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.98% | 99.11% | 99.11% | 99.11% | 1267 ms | → 1.02x | 1 | 1h 30m | 5d ago | 27m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.76% | 98.34% | 85.58% | 85.58% | 3432 ms | ↑ 1.14x | 30 | 0s | 7h ago | 46m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.76% | 99.17% | 99.24% | 99.24% | 1717 ms | ↑ 1.24x | 5 | 42m | 2d ago | 45m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.75% | 98.77% | 17.58% | 17.58% | 3479 ms | → 1.01x | 22 | 0s | 2d ago | 40m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.75% | 98.43% | 98.91% | 98.91% | 2361 ms | ↑ 1.20x | 20 | 11m | 4d ago | 40m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.73% | 99.49% | 71.84% | 71.84% | 1114 ms | → 1.01x | 8 | 4m | 6d ago | 33m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.72% | 99.38% | 96.45% | 96.45% | 1626 ms | ↑ 1.11x | 4 | 47m | 1d ago | 29m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.72% | 98.98% | 98.44% | 98.44% | 3380 ms | ↑ 1.16x | 6 | 46m | 3d ago | 27m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.72% | 98.52% | 98.64% | 98.64% | 2512 ms | ↑ 1.33x | 24 | 2m | 1h ago | 25m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.72% | 99.49% | 99.49% | 99.49% | 2125 ms | ↑ 1.08x | 3 | 20m | 3d ago | 25m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.50% | 99.05% | 99.66% | 99.66% | 2982 ms | → 0.98x | 11 | 14m | 4d ago | 40m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.48% | 99.61% | 56.29% | 56.29% | 3312 ms | ↓ 0.81x | 3 | 40m | 2d ago | 35m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.48% | 99.61% | 19.91% | 19.91% | 1665 ms | → 1.00x | 3 | 40m | 4d ago | 35m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.47% | 99.61% | 98.89% | 98.89% | 2915 ms | ↑ 1.13x | 4 | 22m | 4d ago | 32m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.47% | 99.61% | 98.81% | 98.81% | 1999 ms | ↑ 1.16x | 4 | 15m | 1d ago | 33m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.47% | 98.64% | 91.51% | 91.51% | 892 ms | ↓ 0.92x | 9 | 37m | 2d ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.47% | 98.13% | 95.72% | 95.72% | 1950 ms | ↑ 1.48x | 10 | 53m | 2h ago | 27m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.47% | 99.49% | 99.64% | 99.64% | 2925 ms | ↑ 1.49x | 5 | 24m | 24h ago | 26m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 98.47% | 97.16% | 97.78% | 97.78% | 2149 ms | ↑ 1.17x | 1 | 21h 30m | 8d ago | 25m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 98.47% | 99.60% | 97.23% | 97.23% | 3570 ms | ↑ 3.10x | 7 | 0s | 1d ago | 28m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.47% | 99.49% | 99.64% | 99.64% | 3070 ms | ↑ 1.05x | 5 | 24m | 4d ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.26% | 98.67% | 98.24% | 98.24% | 4556 ms | → 1.01x | 24 | 0s | 3h ago | 46m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.26% | 98.27% | 85.53% | 85.53% | 4418 ms | → 0.97x | 29 | 2m | 23h ago | 42m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.23% | 99.55% | 51.82% | 51.82% | 1136 ms | → 0.98x | 4 | 30m | 2d ago | 35m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.22% | 99.49% | 47.44% | 47.44% | 3093 ms | ↑ 1.64x | 8 | 3m | 2h ago | 30m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.18% | 98.18% | 98.18% | 98.18% | 4537 ms | → 1.00x | 2 | 0s | 18h ago | 24m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 97.95% | 99.28% | 99.28% | 99.28% | 1785 ms | ↑ 1.17x | 3 | 47m | 15h ago | 25m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.95% | 98.23% | 83.85% | 83.85% | 3265 ms | → 1.04x | 2 | 1h 6m | 7h ago | 28m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 97.72% | 98.76% | 86.07% | 86.07% | 4447 ms | → 0.97x | 22 | 0s | 19h ago | 34m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.71% | 99.15% | 91.04% | 91.04% | 1544 ms | → 1.01x | 14 | 2m | 20h ago | 33m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.70% | 97.45% | 97.71% | 97.71% | 4119 ms | ↑ 1.42x | 21 | 32m | 2d ago | 30m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.70% | 98.58% | 99.00% | 99.00% | 879 ms | → 0.98x | 25 | 0s | 4h ago | 26m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.49% | 97.87% | 98.59% | 98.59% | 4048 ms | → 1.03x | 37 | 48s | 1d ago | 40m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.46% | 98.48% | 65.94% | 65.94% | 4651 ms | → 1.00x | 24 | 4m | 24h ago | 33m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.44% | 99.43% | 99.56% | 99.56% | 1499 ms | ↑ 1.65x | 1 | 2h 60m | 4d ago | 27m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.26% | 96.16% | 29.81% | 29.81% | 1866 ms | ↑ 1.10x | 12 | 1h 52m | 3d ago | 42m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.26% | 97.10% | 17.55% | 17.55% | 1954 ms | → 0.96x | 50 | 48s | 7h ago | 41m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.00% | 97.65% | 74.10% | 74.10% | 4526 ms | → 1.04x | 35 | 5m | 14h ago | 41m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.68% | 98.81% | 96.63% | 96.63% | 1811 ms | ↑ 1.75x | 16 | 9m | 2d ago | 27m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 96.16% | 98.24% | 98.11% | 98.11% | 1885 ms | ↑ 1.13x | 9 | 55m | 2d ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 95.76% | 98.27% | 96.49% | 96.49% | 1435 ms | ↑ 1.10x | 8 | 1h 1m | 11h ago | 41m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 95.65% | 98.30% | 98.77% | 98.77% | 1661 ms | ↑ 1.40x | 6 | 1h 26m | 11h ago | 27m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.42% | 96.22% | 82.13% | 82.13% | 4839 ms | → 1.04x | 64 | 1m | 4h ago | 32m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 95.33% | 95.33% | 62.07% | 62.07% | 4250 ms | → 1.00x | 4 | 8m | 11h ago | 28m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 95.33% | 95.33% | 95.33% | 95.33% | 3255 ms | → 1.00x | 1 | 1h 58m | 24h ago | 26m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.17% | 96.33% | 82.97% | 82.97% | 4586 ms | → 0.99x | 55 | 5m | 18h ago | 31m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 94.88% | 81.90% | 81.90% | 81.90% | 4678 ms | → 1.00x | 5 | 7h 12m | 21h ago | 25m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.63% | 95.36% | 95.36% | 95.36% | 1071 ms | → 1.01x | 2 | 4h 33m | 15h ago | 25m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 94.40% | 97.35% | 85.45% | 85.45% | 4678 ms | → 1.00x | 36 | 8m | 2h ago | 32m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 94.18% | 98.37% | 96.59% | 96.59% | 4488 ms | ↑ 1.13x | 11 | 47m | 2d ago | 35m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.15% | 93.91% | 71.91% | 71.91% | 1777 ms | ↑ 1.12x | 16 | 1h 59m | 7h ago | 33m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.88% | 98.59% | 96.63% | 96.63% | 1652 ms | ↑ 1.06x | 2 | 4h 23m | 2d ago | 29m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 90.52% | 95.03% | 16.30% | 16.30% | 3498 ms | ↑ 1.18x | 79 | 3m | 11m ago | 41m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.05% | 96.49% | 95.93% | 95.93% | 2032 ms | ↓ 0.64x | 9 | 2h 43m | 3h ago | 28m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.03% | 89.82% | 55.05% | 55.05% | 3426 ms | → 0.97x | 148 | 6m | 60m ago | 29m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 87.24% | 91.18% | 80.98% | 80.98% | 1521 ms | ↑ 1.73x | 4 | 14h 43m | 3d ago | 29m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 82.91% | 92.31% | 83.88% | 83.88% | 1804 ms | ↑ 1.20x | 9 | 6h 19m | 3d ago | 29m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 82.61% | 18.31% | 37.74% | 37.74% | 708 ms | → 1.00x | 2 | 12d 3h | 3d ago | 26m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 82.19% | 18.22% | 66.60% | 66.60% | 694 ms | → 1.00x | 3 | 8d 2h | 12h ago | 33m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 80.00% | 84.97% | 34.48% | 34.48% | 2042 ms | ↑ 1.09x | 3 | 1d 9h | 3d ago | 34m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 79.40% | 84.82% | 97.87% | 97.87% | 1485 ms | ↑ 1.12x | 128 | 28m | 2d ago | 43m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 75.00% | 82.92% | 80.97% | 80.97% | 4592 ms | ↓ 0.82x | 39 | 2h 57m | 2h ago | 29m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 72.66% | 16.15% | 30.79% | 30.79% | 1961 ms | → 1.00x | 1 | 24d 23h | 30d ago | 35m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 70.90% | 66.07% | 62.29% | 62.29% | 4827 ms | → 1.00x | 335 | 21m | 11m ago | 41m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 68.96% | 69.81% | 22.35% | 22.35% | 4684 ms | → 0.98x | 311 | 19m | 2m ago | 33m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 58.31% | 90.10% | 97.85% | 97.85% | 4410 ms | ↑ 1.28x | 74 | 38m | 13m ago | 43m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 55.50% | 81.19% | 81.19% | 81.19% | 4240 ms | ↑ 1.17x | 5 | 15h 33m | 11h ago | 25m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 55.50% | 68.90% | 76.50% | 76.50% | 1587 ms | ↑ 1.32x | 3 | 3d 5h | 14d ago | 27m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 54.31% | 45.86% | 46.24% | 46.24% | 569 ms | ↑ 1.30x | 2 | 8d 9h | 20d ago | 34m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 40.05% | 8.88% | 13.20% | 13.20% | 3032 ms | → 1.00x | 2 | 13d 14h | 3d ago | 29m ago |

</details>

<details open>
<summary><strong>🔴 Down (247)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 85.42% | 91.27% | 94.06% | 94.06% | 3793 ms | ↑ 1.16x | 37 | 1h 9m | 27m ago | 27m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 85.32% | 89.14% | 18.74% | 18.74% | 4431 ms | ↓ 0.94x | 151 | 8m | 34m ago | 34m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 82.91% | 85.92% | 95.97% | 95.97% | 459 ms | ↓ 0.18x | 3 | 1d 10h | 1d ago | 30m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 70.84% | 74.78% | 74.78% | 74.78% | 330 ms | → 0.98x | 1 | 2d 1h | 2d ago | 27m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 69.64% | 93.21% | 97.63% | 97.63% | 1256 ms | ↑ 1.51x | 2 | 1d 2h | 2d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 68.02% | 37.80% | 32.32% | 32.32% | 1047 ms | ↑ 1.37x | 4 | 4d 14h | 24h ago | 33m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 56.27% | 79.17% | 79.17% | 79.17% | 2007 ms | ↑ 1.10x | 1 | 3d 1h | 3d ago | 25m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 55.61% | 89.99% | 87.71% | 87.71% | 337 ms | ↑ 1.08x | 4 | 18h 33m | 3d ago | 29m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 53.71% | 59.73% | 59.73% | 59.73% | 4652 ms | → 0.99x | 3 | 1d 2h | 3d ago | 27m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 52.69% | 82.36% | 82.36% | 82.36% | 4482 ms | → 0.97x | 35 | 1h 56m | 25m ago | 25m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 43.99% | 18.68% | 15.73% | 15.73% | 4084 ms | ↑ 1.24x | 185 | 2h 45m | 1h ago | 25m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 41.79% | 66.54% | 51.93% | 51.93% | 3885 ms | ↑ 1.11x | 8 | 1d 5h | 4d ago | 41m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 13.49% | 80.76% | 52.83% | 52.83% | 3894 ms | ↑ 1.06x | 2 | 3d | 6d ago | 32m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 12.02% | 79.97% | 85.87% | 85.87% | 726 ms | ↑ 2.12x | 4 | 1d 13h | 6d ago | 25m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 3.82% | 76.31% | 94.38% | 94.38% | 254 ms | ↓ 0.39x | 2 | 3d 17h | 7d ago | 32m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.74% | 1.44% | 59.65% | 59.65% | 4201 ms | ↑ 1.27x | 26 | 1d 3h | 10h ago | 46m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 81.19% | 81.19% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 67.25% | 67.25% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 72.32% | 72.32% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 22.52% | 51.41% | 51.41% | — | — | 8 | 2d 23h | 24d ago | 26m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 11.17% | 80.49% | 80.49% | — | — | 5 | 5d 10h | 27d ago | 31m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 60.79% | 60.79% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.54% | 5.54% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.28% | 12.28% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 57.46% | 57.46% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.33% | 3.33% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 68.62% | 68.62% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 81.44% | 81.44% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.74% | 35.74% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 4.50% | 90.95% | 90.95% | — | — | 1 | 28d 20h | 29d ago | 45m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.21% | 23.21% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 73.08% | 73.08% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 50.58% | 50.58% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.31% | 29.31% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 75.43% | 90.17% | 90.17% | — | — | 7 | 1d 2h | 8d ago | 44m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 81.82% | 81.82% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 61.63% | 61.63% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 75.58% | 75.58% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 22h | 2d ago | 45m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.76% | 14.76% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 48.85% | 48.85% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 41.89% | 92.85% | 92.85% | — | — | 6 | 3d | 18d ago | 41m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 14.62% | 82.19% | 82.19% | — | — | 2 | 12d 24h | 26d ago | 35m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 75.72% | 92.95% | 92.95% | — | — | 1 | 7d 15h | 8d ago | 30m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.40% | 3.40% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 82.03% | 82.03% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 12.77% | 36.53% | 36.53% | — | — | 2 | 13d 7h | 27d ago | 26m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 50.92% | 50.92% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.02% | 2.02% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 19.27% | 89.86% | 89.86% | — | — | 1 | 24d 19h | 25d ago | 42m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 28.51% | 77.33% | 77.33% | — | — | 2 | 10d 23h | 21d ago | 30m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 75.72% | 75.72% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 31.03% | 31.03% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.59% | 53.59% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 34.62% | 53.44% | 53.44% | — | — | 1 | 20d 6h | 20d ago | 29m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.02% | 24.02% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 67.28% | 82.18% | 82.18% | — | — | 11 | 22h 16m | 10d ago | 46m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 66.98% | 41.07% | 41.07% | — | — | 3 | 3d 11h | 10d ago | 41m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 4h | 8d ago | 25m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 68.93% | 69.55% | 69.55% | — | — | 1 | 9d 20h | 10d ago | 28m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 56.15% | 56.15% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 11.96% | 23.93% | 23.93% | — | — | 1 | 26d 22h | 27d ago | 32m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.28% | 5.28% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.61% | 64.61% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 81.77% | 81.77% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.61% | 6.61% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 78.09% | 78.09% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 80.56% | 80.56% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 14.62% | 32.47% | 32.47% | — | — | 1 | 26d 4h | 26d ago | 32m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 26.76% | 26.76% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 30.49% | 24.67% | 24.67% | — | — | 3 | 7d 2h | 19d ago | 29m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 51.94% | 51.94% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 53.59% | 53.59% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 8.84% | 8.84% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 65.96% | 65.96% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 75.26% | 75.26% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 45.88% | 45.88% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.69% | 41.69% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 4.65% | 30.61% | 30.61% | — | — | 1 | 28d 19h | 29d ago | 26m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 81.78% | 81.78% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.77% | 57.77% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 59.88% | 76.03% | 76.03% | — | — | 2 | 6d 7h | 13d ago | 31m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 11.12% | 80.48% | 80.48% | — | — | 5 | 5d 10h | 27d ago | 31m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 44.40% | 77.79% | 77.79% | — | — | 4 | 4d 7h | 17d ago | 29m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.70% | 30.70% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.51% | 2.51% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 82.00% | 82.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.01% | 41.01% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 59.45% | 96.16% | 96.16% | — | — | 1 | 12d 18h | 13d ago | 40m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 81.76% | 81.76% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.37% | 32.37% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 81.67% | 81.67% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 53.34% | 53.34% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 23.10% | 23.10% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 43.87% | 43.87% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 79.37% | 79.37% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 65.03% | 65.03% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 29.60% | 29.60% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 3h | 8d ago | 27m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 77.88% | 77.88% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 3h | 8d ago | 27m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 50.63% | 50.63% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.16% | 3.16% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 3h | 8d ago | 27m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.60% | 42.60% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 76.30% | 76.30% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 50.11% | 41.09% | 41.09% | — | — | 6 | 2d 14h | 15d ago | 42m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 58.21% | 58.21% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 44.50% | 44.50% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 62.53% | 62.53% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 87.69% | 87.69% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.92% | 27.92% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.20% | 12.20% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 24.66% | 24.66% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.78% | 23.78% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 25.61% | 52.26% | 52.26% | — | — | 1 | 22d 24h | 23d ago | 42m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 29.15% | 92.85% | 92.85% | — | — | 10 | 2d 4h | 21d ago | 44m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 55.61% | 55.61% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 45.48% | 77.64% | 77.64% | — | — | 2 | 8d 10h | 17d ago | 30m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 10.29% | 10.29% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.24% | 17.24% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.85% | 48.85% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 24.98% | 24.98% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.44% | 54.44% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 94.49% | 94.49% | — | — | 1 | 1d 22h | 2d ago | 39m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.73% | 38.73% | — | — | 1 | 8d 4h | 8d ago | 33m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 22.70% | 22.70% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 35.13% | 35.13% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 48.21% | 48.21% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.48% | 5.48% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 31.43% | 80.63% | 80.63% | — | — | 2 | 10d 15h | 21d ago | 33m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.78% | 89.11% | 89.11% | — | — | 1 | 29d 19h | 30d ago | 43m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 51.31% | 67.73% | 67.73% | — | — | 1 | 15d 6h | 15d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 81.87% | 81.87% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 80.80% | 80.80% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 63.02% | 63.02% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 73.99% | 73.99% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 80.66% | 80.66% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 23h | 2d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.29% | 19.29% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 29.74% | 59.00% | 59.00% | — | — | 1 | 21d 19h | 22d ago | 45m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 32.30% | 42.28% | 42.28% | — | — | 5 | 4d 4h | 21d ago | 30m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.02% | 4.02% | — | — | 2 | 14d 23h | 23d ago | 41m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.65% | 33.65% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.62% | 67.69% | 67.69% | — | — | 4 | 7d 5h | 21d ago | 43m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.60% | 25.36% | 25.36% | — | — | 27 | 22h 40m | 19d ago | 32m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.44% | 7.44% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 64.81% | 64.81% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 8.67% | 33.66% | 33.66% | — | — | 2 | 13d 21h | 28d ago | 26m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 66.72% | 66.72% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 41.05% | 41.05% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.56% | 5.56% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 21h | 2d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 33.03% | 58.70% | 58.70% | — | — | 1 | 20d 17h | 21d ago | 28m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 8.78% | 51.47% | 51.47% | — | — | 2 | 13d 20h | 28d ago | 27m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 36.35% | 36.35% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 22.55% | 22.55% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 50.64% | 5.41% | 5.41% | — | — | 3 | 5d 4h | 15d ago | 43m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.93% | 11.93% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 71.12% | 89.42% | 89.42% | — | — | 1 | 9d 4h | 9d ago | 43m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.73% | 17.73% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 17.84% | 17.84% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 34.50% | 34.50% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 7.22% | 9.93% | 9.93% | — | — | 69 | 9h 22m | 26d ago | 33m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 9.56% | 9.56% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.92% | 0.92% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.18% | 5.18% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 49.27% | 49.27% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 3.00% | 49.09% | 49.09% | — | — | 1 | 29d 5h | 29d ago | 27m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 81.84% | 81.84% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 27.98% | 27.98% | 27.98% | — | — | 1 | 10d 14h | 11d ago | 25m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 24.26% | 75.14% | 75.14% | — | — | 1 | 23d 11h | 23d ago | 29m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 47.00% | 47.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 82.03% | 82.03% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 55.07% | 55.07% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.86% | 40.86% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.00% | 2.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 7.90% | 19.40% | 19.40% | — | — | 1 | 27d 23h | 28d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 8d 3h | 8d ago | 26m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 79.79% | 79.79% | — | — | 1 | 29d 24h | 30d ago | 38m ago |

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
