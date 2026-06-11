# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**664 providers** — 347 🟢 operational · 61 🟡 degraded · 256 🔴 down · 0 ⚫ unknown

_Updated 2026-06-11 08:07 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 97.96% | 97.96% | 533 ms | ↓ 0.88x | 1 | 0s | 14d ago | 19m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1718 ms | → 1.00x | 0 | — | — | 15m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.41% | 97.41% | 2811 ms | ↑ 1.13x | 0 | — | — | 35m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 53.83% | 53.83% | 2131 ms | ↑ 1.22x | 0 | — | — | 22m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.89% | 97.82% | 97.82% | 2877 ms | → 1.02x | 2 | 0s | 14d ago | 31m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1805 ms | ↑ 1.23x | 0 | — | — | 15m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.79% | 98.79% | 1781 ms | ↑ 1.07x | 0 | — | — | 37m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.44% | 99.44% | 3210 ms | → 0.99x | 1 | 0s | 21d ago | 37m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.16% | 99.16% | 2579 ms | ↑ 1.46x | 1 | 19m | 23d ago | 18m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.82% | 94.82% | 2336 ms | ↑ 1.21x | 0 | — | — | 19m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1914 ms | ↑ 1.51x | 0 | — | — | 17m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.21% | 97.52% | 97.52% | 2504 ms | ↑ 1.25x | 1 | 4h 31m | 28d ago | 20m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.96% | 99.96% | 1779 ms | ↑ 1.41x | 1 | 0s | 28d ago | 17m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 877 ms | ↑ 1.22x | 0 | — | — | 15m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.54% | 98.54% | 1214 ms | → 1.04x | 0 | — | — | 20m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.73% | 98.73% | 2047 ms | ↑ 1.96x | 0 | — | — | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 36.25% | 36.25% | 665 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1339 ms | → 0.99x | 0 | — | — | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.82% | 96.82% | 2480 ms | ↑ 1.17x | 1 | 0s | 16d ago | 23m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 24.51% | 62.43% | 62.43% | 850 ms | → 0.95x | 1 | 22d 2h | 30d ago | 20m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 913 ms | ↑ 1.12x | 1 | 0s | 20d ago | 16m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.57% | 96.57% | 642 ms | ↑ 1.09x | 0 | — | — | 22m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.21% | 86.62% | 86.62% | 1255 ms | ↑ 1.36x | 4 | 1h 3m | 13d ago | 21m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1717 ms | ↑ 1.13x | 1 | 0s | 20d ago | 17m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.26% | 98.26% | 3023 ms | ↑ 1.19x | 1 | 60m | 21d ago | 21m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.98% | 97.98% | 254 ms | ↑ 1.17x | 0 | — | — | 19m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.78% | 78.93% | 78.93% | 2147 ms | ↑ 1.11x | 4 | 0s | 10d ago | 31m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 84.71% | 84.71% | 1709 ms | ↑ 1.48x | 0 | — | — | 20m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.96% | 99.96% | 966 ms | → 0.99x | 1 | 0s | 20d ago | 16m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.60% | 97.60% | 1527 ms | ↑ 1.40x | 0 | — | — | 22m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 836 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.74% | 99.74% | 3103 ms | ↑ 1.10x | 0 | — | — | 32m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.97% | 98.97% | 376 ms | ↑ 1.67x | 0 | — | — | 22m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.06% | 98.97% | 98.97% | 3558 ms | ↑ 1.06x | 9 | 20m | 8d ago | 33m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.67% | 97.84% | 97.84% | 3556 ms | ↑ 1.05x | 6 | 0s | 17d ago | 36m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.82% | 99.82% | 1850 ms | ↑ 1.05x | 0 | — | — | 22m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.12% | 96.12% | 1016 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1220 ms | → 1.00x | 0 | — | — | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 785 ms | → 1.00x | 0 | — | — | 16m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.87% | 99.87% | 2861 ms | ↑ 1.71x | 3 | 0s | 20d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2113 ms | ↑ 1.06x | 0 | — | — | 32m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.74% | 99.74% | 99.74% | 1528 ms | ↑ 1.33x | 1 | 51m | 11d ago | 15m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3168 ms | ↓ 0.89x | 1 | 0s | 17d ago | 31m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.89% | 99.68% | 99.68% | 1235 ms | ↓ 0.89x | 2 | 0s | 10d ago | 20m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | → 1.00x | 0 | — | — | 15m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 28.83% | 28.83% | 1152 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.20% | 95.87% | 95.87% | 1955 ms | → 1.04x | 1 | 12h 2m | 16d ago | 19m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 1113 ms | ↓ 0.62x | 1 | 0s | 20d ago | 16m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.75% | 97.70% | 97.70% | 3694 ms | ↑ 1.22x | 14 | 52m | 8d ago | 21m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1572 ms | → 1.00x | 0 | — | — | 15m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2432 ms | → 0.99x | 0 | — | — | 17m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 634 ms | ↓ 0.59x | 0 | — | — | 17m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 98.60% | 97.45% | 97.45% | 1909 ms | ↑ 1.09x | 4 | 1h 54m | 25d ago | 25m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.56% | 96.56% | 865 ms | → 1.01x | 0 | — | — | 23m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.97% | 53.97% | 1259 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.55% | 99.62% | 99.62% | 2687 ms | ↓ 0.94x | 6 | 8m | 9d ago | 16m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 990 ms | ↓ 0.65x | 1 | 0s | 20d ago | 16m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3519 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.10% | 97.10% | 1573 ms | ↑ 1.29x | 0 | — | — | 31m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.30% | 98.30% | 98.30% | 1193 ms | ↑ 1.36x | 2 | 2h 41m | 12d ago | 15m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.89% | 99.08% | 99.08% | 1343 ms | ↑ 1.07x | 2 | 0s | 10d ago | 23m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.28% | 46.97% | 46.97% | 2008 ms | → 1.00x | 9 | 1h 31m | 22d ago | 32m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.87% | 82.87% | 2427 ms | ↑ 1.16x | 0 | — | — | 24m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 65.66% | 65.66% | 1371 ms | → 0.98x | 2 | 0s | 9d ago | 24m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 966 ms | ↓ 0.64x | 0 | — | — | 17m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.62% | 98.62% | 2115 ms | ↑ 1.17x | 0 | — | — | 21m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 3491 ms | → 1.04x | 1 | 0s | 20d ago | 16m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.74% | 92.74% | 886 ms | → 1.00x | 1 | 0s | 17d ago | 24m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.56% | 98.56% | 1095 ms | ↑ 1.44x | 0 | — | — | 20m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.83% | 99.83% | 371 ms | ↑ 1.44x | 3 | 0s | 8d ago | 22m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.26% | 99.26% | 810 ms | ↓ 0.51x | 0 | — | — | 18m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1723 ms | → 1.00x | 0 | — | — | 15m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2128 ms | → 1.00x | 0 | — | — | 16m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.94% | 75.70% | 75.70% | 1019 ms | ↑ 1.06x | 1 | 0s | 28d ago | 24m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.55% | 95.40% | 95.40% | 1087 ms | ↑ 1.54x | 2 | 1h 30m | 26d ago | 16m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.94% | 54.20% | 54.20% | 1542 ms | ↑ 1.19x | 1 | 0s | 21d ago | 32m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1101 ms | ↓ 0.90x | 0 | — | — | 16m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.12% | 98.12% | 2190 ms | ↑ 1.05x | 0 | — | — | 22m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1150 ms | → 1.00x | 0 | — | — | 15m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1563 ms | ↑ 1.11x | 1 | 0s | 20d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.94% | 61.47% | 61.47% | 942 ms | → 1.02x | 1 | 0s | 14d ago | 24m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 97.99% | 97.99% | 945 ms | ↑ 1.06x | 1 | 0s | 27d ago | 25m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.89% | 99.84% | 99.84% | 1816 ms | ↑ 1.08x | 2 | 0s | 20d ago | 17m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 59.56% | 59.56% | 1973 ms | ↑ 1.08x | 1 | 0s | 23d ago | 24m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.74% | 62.74% | 1195 ms | ↑ 1.09x | 0 | — | — | 24m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1156 ms | ↓ 0.56x | 0 | — | — | 18m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1608 ms | → 0.99x | 0 | — | — | 24m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.94% | 89.89% | 89.89% | 2040 ms | ↑ 1.05x | 1 | 0s | 29d ago | 23m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.80% | 99.80% | 2619 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.57% | 99.57% | 953 ms | → 1.02x | 1 | 0s | 12d ago | 24m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.89% | 98.06% | 98.06% | 1918 ms | → 0.96x | 1 | 30m | 9d ago | 24m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.83% | 99.73% | 99.73% | 2096 ms | → 1.05x | 3 | 0s | 22d ago | 36m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2253 ms | ↑ 1.30x | 0 | — | — | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.03% | 99.03% | 3238 ms | ↑ 1.09x | 1 | 29m | 17d ago | 36m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.84% | 99.84% | 3224 ms | ↑ 1.08x | 3 | 0s | 11d ago | 37m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.13% | 98.13% | 3250 ms | ↑ 1.08x | 0 | — | — | 37m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.50% | 99.90% | 99.90% | 842 ms | ↑ 1.11x | 4 | 29m | 9d ago | 32m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 74.16% | 74.16% | 2014 ms | ↓ 0.95x | 0 | — | — | 22m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1344 ms | → 1.00x | 0 | — | — | 17m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1410 ms | ↑ 1.13x | 0 | — | — | 37m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 3091 ms | → 0.96x | 2 | 0s | 15d ago | 36m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.16% | 89.16% | 774 ms | ↓ 0.27x | 0 | — | — | 23m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 77.76% | 77.76% | 2006 ms | → 0.98x | 0 | — | — | 22m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.77% | 99.77% | 734 ms | ↑ 1.20x | 1 | 0s | 14d ago | 36m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 473 ms | → 1.00x | 0 | — | — | 17m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1111 ms | ↓ 0.67x | 0 | — | — | 16m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.42% | 83.42% | 2249 ms | ↑ 1.25x | 0 | — | — | 20m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1607 ms | → 1.04x | 0 | — | — | 16m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1769 ms | ↑ 1.37x | 0 | — | — | 20m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.03% | 99.03% | 655 ms | ↑ 1.15x | 0 | — | — | 25m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.22% | 97.22% | 1728 ms | ↑ 2.14x | 0 | — | — | 20m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 1089 ms | ↑ 1.07x | 1 | 0s | 20d ago | 17m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1656 ms | ↑ 1.07x | 0 | — | — | 16m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.72% | 87.17% | 87.17% | 1665 ms | ↑ 1.07x | 5 | 0s | 19d ago | 35m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 704 ms | → 1.00x | 0 | — | — | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.72% | 97.66% | 97.66% | 1547 ms | → 0.96x | 5 | 0s | 11d ago | 19m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.81% | 98.81% | 232 ms | ↑ 1.25x | 0 | — | — | 22m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.96% | 98.96% | 2000 ms | ↑ 1.27x | 0 | — | — | 25m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 73.52% | 73.52% | 482 ms | → 1.01x | 0 | — | — | 18m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.46% | 97.18% | 97.18% | 650 ms | ↓ 0.77x | 22 | 26m | 20d ago | 16m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.61% | 99.61% | 99.61% | 748 ms | ↑ 1.14x | 1 | 1h | 11d ago | 15m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.87% | 99.87% | 1389 ms | ↑ 1.31x | 2 | 11m | 12d ago | 15m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 21.66% | 21.66% | 1605 ms | ↑ 1.50x | 0 | — | — | 25m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 867 ms | ↑ 1.13x | 0 | — | — | 38m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.84% | 99.84% | 2431 ms | ↑ 1.18x | 1 | 0s | 25d ago | 36m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.64% | 98.72% | 98.72% | 184 ms | ↑ 1.10x | 16 | 49m | 8d ago | 21m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 695 ms | ↑ 1.21x | 0 | — | — | 35m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.30% | 80.05% | 80.05% | 143 ms | ↑ 1.08x | 2 | 14h 15m | 13d ago | 37m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.92% | 97.92% | 1138 ms | ↑ 1.05x | 0 | — | — | 19m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2713 ms | → 1.05x | 2 | 0s | 19d ago | 36m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.02% | 98.02% | 916 ms | ↓ 0.44x | 0 | — | — | 23m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 658 ms | ↑ 1.21x | 2 | 25m | 26d ago | 36m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 451 ms | ↓ 0.35x | 0 | — | — | 17m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.71% | 98.71% | 4513 ms | → 1.04x | 0 | — | — | 38m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2886 ms | → 0.96x | 0 | — | — | 35m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1872 ms | ↑ 1.37x | 0 | — | — | 17m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2491 ms | → 1.05x | 0 | — | — | 31m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.47% | 98.47% | 3928 ms | → 0.97x | 0 | — | — | 22m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.94% | 99.95% | 99.95% | 1124 ms | → 1.04x | 1 | 0s | 28d ago | 35m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.78% | 99.44% | 99.44% | 2786 ms | → 0.99x | 4 | 0s | 14d ago | 31m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.61% | 99.85% | 99.85% | 161 ms | ↑ 1.17x | 5 | 12m | 17d ago | 35m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 98.95% | 17.03% | 17.03% | 771 ms | → 1.01x | 12 | 12m | 22d ago | 35m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1999 ms | → 0.98x | 0 | — | — | 24m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.94% | 99.85% | 99.85% | 1744 ms | ↓ 0.93x | 1 | 0s | 14d ago | 36m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.64% | 99.64% | 1857 ms | → 1.03x | 0 | — | — | 19m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 510 ms | → 0.99x | 0 | — | — | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 678 ms | → 0.97x | 0 | — | — | 36m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 96.97% | 95.76% | 95.76% | 2858 ms | ↑ 1.15x | 4 | 4h 46m | 15d ago | 23m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 60.26% | 60.26% | 1615 ms | → 1.04x | 1 | 0s | 26d ago | 24m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2529 ms | ↑ 1.13x | 0 | — | — | 36m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.65% | 98.88% | 98.88% | 2028 ms | ↑ 1.53x | 3 | 2h 19m | 14d ago | 18m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.04% | 89.04% | 1417 ms | ↑ 1.12x | 1 | 0s | 21d ago | 35m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.23% | 79.69% | 79.69% | 2134 ms | ↑ 1.08x | 1 | 13h | 8d ago | 37m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 98.70% | 84.72% | 84.72% | 963 ms | ↓ 0.69x | 1 | 7h 48m | 30d ago | 17m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1272 ms | ↑ 1.05x | 0 | — | — | 36m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.65% | 99.65% | 1093 ms | ↑ 1.08x | 3 | 7m | 16d ago | 34m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 990 ms | ↑ 1.05x | 0 | — | — | 36m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 918 ms | ↓ 0.62x | 1 | 0s | 20d ago | 16m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 881 ms | ↑ 1.11x | 1 | 0s | 14d ago | 19m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.37% | 98.37% | 1499 ms | ↑ 1.27x | 0 | — | — | 20m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.06% | 98.06% | 1548 ms | → 1.03x | 0 | — | — | 20m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 69.10% | 69.10% | 962 ms | → 1.00x | 0 | — | — | 24m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1501 ms | ↑ 1.15x | 0 | — | — | 15m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1648 ms | ↑ 1.11x | 0 | — | — | 35m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 2141 ms | ↓ 0.90x | 1 | 0s | 20d ago | 16m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.72% | 92.30% | 92.30% | 1540 ms | ↑ 1.07x | 5 | 0s | 9d ago | 23m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.24% | 85.24% | 395 ms | ↑ 1.37x | 0 | — | — | 34m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.94% | 90.59% | 90.59% | 281 ms | ↓ 0.90x | 1 | 0s | 27d ago | 22m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.28% | 99.28% | 1966 ms | ↓ 0.94x | 0 | — | — | 24m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 66.77% | 66.77% | 1485 ms | ↑ 2.55x | 1 | 0s | 13d ago | 24m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.61% | 96.61% | 1599 ms | ↑ 1.16x | 0 | — | — | 24m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.83% | 99.84% | 99.84% | 1230 ms | ↓ 0.67x | 3 | 0s | 14d ago | 16m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 2676 ms | ↑ 1.10x | 0 | — | — | 36m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 95.83% | 96.89% | 96.89% | 532 ms | ↓ 0.45x | 2 | 13h 54m | 13d ago | 17m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1534 ms | → 0.99x | 0 | — | — | 18m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3589 ms | → 1.00x | 0 | — | — | 17m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.11% | 99.15% | 99.15% | 3701 ms | ↑ 1.12x | 8 | 23m | 8d ago | 33m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.45% | 57.45% | 675 ms | ↑ 1.13x | 0 | — | — | 24m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.44% | 98.40% | 98.40% | 1628 ms | ↑ 1.21x | 1 | 4h 17m | 20d ago | 23m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 38.93% | 38.93% | 2423 ms | ↑ 1.07x | 1 | 0s | 19d ago | 24m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.83% | 99.21% | 99.21% | 3443 ms | ↑ 1.07x | 3 | 0s | 13d ago | 31m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2738 ms | ↑ 1.06x | 0 | — | — | 36m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2134 ms | ↑ 1.12x | 1 | 30m | 19d ago | 23m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 91.63% | 91.54% | 91.54% | 2279 ms | ↓ 0.95x | 6 | 9h 19m | 10d ago | 22m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.23% | 99.23% | 2068 ms | ↑ 1.06x | 0 | — | — | 23m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.12% | 79.12% | 1459 ms | → 1.02x | 0 | — | — | 24m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 190 ms | → 1.02x | 1 | 0s | 14d ago | 36m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1499 ms | ↑ 1.13x | 0 | — | — | 15m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1852 ms | ↑ 1.17x | 0 | — | — | 35m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2792 ms | ↑ 1.96x | 1 | 0s | 20d ago | 17m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1874 ms | → 1.04x | 0 | — | — | 31m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.53% | 99.53% | 3409 ms | ↑ 1.06x | 1 | 0s | 22d ago | 36m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.83% | 79.50% | 79.50% | 2055 ms | ↑ 1.13x | 3 | 0s | 16d ago | 24m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.21% | 86.21% | 2530 ms | ↑ 1.15x | 0 | — | — | 24m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.92% | 99.92% | 1069 ms | → 1.00x | 1 | 0s | 20d ago | 17m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.06% | 96.06% | 1474 ms | ↑ 1.17x | 0 | — | — | 25m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1134 ms | ↑ 1.06x | 0 | — | — | 34m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.53% | 98.53% | 693 ms | ↑ 1.09x | 0 | — | — | 22m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 21.06% | 21.06% | 442 ms | ↓ 0.70x | 0 | — | — | 24m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.61% | 97.22% | 97.22% | 1968 ms | → 0.98x | 4 | 20m | 17d ago | 19m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 829 ms | ↑ 1.06x | 0 | — | — | 22m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.78% | 18.68% | 18.68% | 1208 ms | ↑ 1.05x | 4 | 0s | 14d ago | 25m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.64% | 60.64% | 2221 ms | ↑ 1.10x | 0 | — | — | 24m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.94% | 99.81% | 99.81% | 2662 ms | ↑ 1.08x | 1 | 0s | 9d ago | 36m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 47.76% | 26.18% | 26.18% | 633 ms | ↓ 0.50x | 1 | 14d 22h | 30d ago | 36m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 88.03% | 92.04% | 92.04% | 29 ms | → 1.00x | 1 | 3d 2h | 30d ago | 19m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.62% | 98.87% | 98.87% | 1074 ms | ↑ 1.11x | 2 | 6h 50m | 12d ago | 34m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 17.89% | 17.89% | 1213 ms | ↑ 1.15x | 0 | — | — | 34m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2172 ms | ↑ 1.76x | 0 | — | — | 17m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.49% | 99.49% | 1639 ms | ↑ 1.37x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 3129 ms | ↑ 1.55x | 0 | — | — | 18m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 632 ms | ↓ 0.59x | 0 | — | — | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.28% | 99.43% | 99.43% | 2874 ms | ↑ 1.06x | 6 | 32m | 9d ago | 37m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.35% | 93.35% | 4610 ms | ↑ 1.13x | 0 | — | — | 35m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.67% | 99.51% | 99.51% | 1351 ms | ↓ 0.80x | 2 | 40m | 13d ago | 35m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 98.09% | 98.37% | 98.37% | 3220 ms | ↑ 1.34x | 15 | 37m | 8d ago | 21m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.19% | 99.19% | 856 ms | ↓ 0.83x | 0 | — | — | 22m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.87% | 99.87% | 1704 ms | ↑ 1.07x | 1 | 0s | 20d ago | 17m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.94% | 99.57% | 99.57% | 1502 ms | ↓ 0.94x | 1 | 0s | 22d ago | 36m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.45% | 99.45% | 1309 ms | ↑ 1.18x | 0 | — | — | 34m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 430 ms | → 1.02x | 0 | — | — | 38m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.64% | 98.64% | 2730 ms | ↑ 1.19x | 0 | — | — | 19m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.67% | 96.67% | 2821 ms | ↑ 1.07x | 0 | — | — | 36m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4263 ms | ↑ 1.75x | 0 | — | — | 15m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.54% | 99.54% | 3327 ms | ↑ 1.73x | 2 | 0s | 19d ago | 18m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.78% | 99.78% | 864 ms | ↑ 1.32x | 1 | 20m | 14d ago | 19m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.11% | 88.11% | 1860 ms | ↑ 1.25x | 0 | — | — | 23m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.81% | 99.81% | 1057 ms | ↑ 1.19x | 0 | — | — | 19m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1593 ms | → 1.00x | 0 | — | — | 18m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2369 ms | → 1.00x | 0 | — | — | 16m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1601 ms | → 1.04x | 0 | — | — | 36m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.49% | 99.49% | 1226 ms | ↑ 1.10x | 0 | — | — | 36m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1110 ms | ↑ 1.13x | 0 | — | — | 36m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 73.25% | 73.25% | 1110 ms | → 0.98x | 1 | 0s | 20d ago | 22m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 2986 ms | ↑ 1.08x | 1 | 0s | 16d ago | 32m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 879 ms | → 1.04x | 0 | — | — | 34m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.32% | 84.32% | 2098 ms | ↑ 1.13x | 1 | 0s | 10d ago | 31m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.89% | 23.29% | 23.29% | 2087 ms | ↑ 1.09x | 2 | 0s | 8d ago | 38m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 97.96% | 97.96% | 2109 ms | ↑ 1.28x | 3 | 0s | 13d ago | 20m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.96% | 99.96% | 1485 ms | ↑ 1.77x | 0 | — | — | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.84% | 99.84% | 1385 ms | ↑ 2.61x | 2 | 30m | 8d ago | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.78% | 98.78% | 754 ms | ↑ 1.09x | 0 | — | — | 24m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.70% | 98.70% | 1843 ms | ↓ 0.86x | 0 | — | — | 34m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.32% | 99.51% | 99.51% | 1803 ms | → 1.05x | 3 | 1h 3m | 17d ago | 17m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.80% | 97.80% | 3447 ms | ↑ 1.26x | 1 | 0s | 22d ago | 21m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 722 ms | ↑ 1.20x | 1 | 0s | 20d ago | 17m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1353 ms | → 1.00x | 0 | — | — | 15m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1590 ms | → 1.01x | 0 | — | — | 15m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.94% | 28.45% | 28.45% | 995 ms | ↑ 1.20x | 1 | 0s | 24d ago | 34m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.80% | 99.80% | 858 ms | ↑ 1.16x | 1 | 0s | 18d ago | 23m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.27% | 98.27% | 1932 ms | ↑ 1.23x | 0 | — | — | 23m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1280 ms | → 1.03x | 0 | — | — | 34m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.18% | 88.18% | 3057 ms | ↑ 1.13x | 0 | — | — | 24m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.52% | 96.52% | 2107 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 17.88% | 17.88% | 1907 ms | → 1.05x | 0 | — | — | 36m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 794 ms | ↓ 0.53x | 0 | — | — | 17m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.87% | 96.87% | 1942 ms | ↑ 1.30x | 0 | — | — | 20m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 1918 ms | → 1.01x | 1 | 0s | 16d ago | 34m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 19.77% | 19.77% | 2415 ms | ↑ 1.14x | 0 | — | — | 25m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 17.69% | 17.69% | 1614 ms | ↑ 1.17x | 0 | — | — | 25m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.49% | 99.76% | 99.76% | 3350 ms | ↑ 1.23x | 5 | 24m | 8d ago | 21m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.74% | 99.74% | 2680 ms | ↑ 1.05x | 1 | 2h 18m | 19d ago | 22m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1797 ms | ↑ 1.09x | 0 | — | — | 36m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1913 ms | → 1.00x | 0 | — | — | 15m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.01% | 99.65% | 99.65% | 1990 ms | ↓ 0.94x | 6 | 2h 50m | 24d ago | 34m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1737 ms | ↓ 0.88x | 0 | — | — | 34m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 336 ms | → 1.00x | 0 | — | — | 16m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.50% | 98.50% | 1514 ms | ↑ 1.48x | 0 | — | — | 20m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.83% | 99.80% | 99.80% | 1922 ms | → 1.03x | 3 | 0s | 8d ago | 31m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 2579 ms | ↑ 1.14x | 1 | 0s | 11d ago | 25m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.11% | 99.11% | 1356 ms | → 1.04x | 1 | 0s | 8d ago | 36m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 509 ms | ↑ 1.18x | 0 | — | — | 34m ago |
| [ZYF API](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 406 ms | → 1.00x | 0 | — | — | 15m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.75% | 99.89% | 99.62% | 99.62% | 1668 ms | ↑ 1.07x | 2 | 0s | 2d ago | 35m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.75% | 99.94% | 40.78% | 40.78% | 815 ms | ↑ 1.06x | 1 | 0s | 1d ago | 36m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.75% | 99.72% | 99.89% | 99.89% | 1035 ms | ↑ 1.12x | 3 | 17m | 1d ago | 34m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.75% | 99.94% | 99.02% | 99.02% | 3242 ms | ↑ 1.19x | 1 | 0s | 1d ago | 35m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.89% | 17.89% | 17.89% | 2158 ms | ↑ 1.09x | 2 | 0s | 1d ago | 35m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.75% | 99.94% | 99.70% | 99.70% | 1717 ms | ↓ 0.93x | 1 | 0s | 2d ago | 36m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 40.35% | 40.35% | 1297 ms | → 1.01x | 2 | 0s | 6d ago | 36m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.83% | 61.38% | 61.38% | 2586 ms | ↓ 0.95x | 3 | 0s | 2d ago | 36m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.75% | 99.94% | 99.86% | 99.86% | 1400 ms | ↓ 0.91x | 1 | 0s | 1d ago | 34m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.94% | 17.91% | 17.91% | 623 ms | ↓ 0.57x | 1 | 0s | 7d ago | 32m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.75% | 98.94% | 16.09% | 16.09% | 2618 ms | → 1.03x | 8 | 34m | 2d ago | 31m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.75% | 99.94% | 17.80% | 17.80% | 2675 ms | ↑ 1.05x | 1 | 0s | 6d ago | 31m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.94% | 19.62% | 19.62% | 2166 ms | ↑ 1.14x | 1 | 0s | 7d ago | 31m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.89% | 99.86% | 99.86% | 1070 ms | ↑ 1.06x | 2 | 0s | 2d ago | 30m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 97.93% | 17.76% | 17.76% | 3021 ms | → 1.05x | 7 | 1h 40m | 1d ago | 25m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.89% | 99.33% | 99.33% | 1643 ms | → 1.04x | 2 | 0s | 2d ago | 25m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.89% | 20.02% | 20.02% | 2624 ms | → 1.00x | 2 | 0s | 2d ago | 25m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.94% | 46.61% | 46.61% | 1417 ms | ↑ 1.16x | 1 | 0s | 2d ago | 25m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.74% | 97.93% | 98.62% | 98.62% | 1249 ms | → 1.02x | 6 | 1h 46m | 2d ago | 24m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.74% | 99.44% | 81.37% | 81.37% | 2022 ms | ↑ 1.10x | 3 | 50m | 7h ago | 24m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.74% | 99.16% | 97.46% | 97.46% | 2074 ms | ↑ 1.18x | 10 | 12m | 5d ago | 22m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.74% | 99.83% | 97.81% | 97.81% | 2976 ms | → 0.99x | 3 | 0s | 23h ago | 22m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.74% | 99.78% | 99.80% | 99.80% | 1445 ms | → 1.03x | 3 | 10m | 5d ago | 22m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.74% | 99.89% | 41.75% | 41.75% | 646 ms | ↑ 1.12x | 2 | 0s | 1d ago | 22m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.74% | 99.78% | 80.31% | 80.31% | 2212 ms | ↑ 1.13x | 2 | 26m | 17h ago | 24m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.74% | 99.94% | 50.25% | 50.25% | 711 ms | ↑ 1.34x | 1 | 0s | 7d ago | 22m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.74% | 99.83% | 98.30% | 98.30% | 1665 ms | ↑ 1.06x | 3 | 0s | 23h ago | 22m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.74% | 99.94% | 99.97% | 99.97% | 2089 ms | ↑ 1.06x | 1 | 0s | 7d ago | 23m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.74% | 74.59% | 88.54% | 88.54% | 1146 ms | ↑ 1.34x | 2 | 3d 18h | 4d ago | 20m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.74% | 99.44% | 96.23% | 96.23% | 866 ms | ↑ 1.95x | 4 | 38m | 1h ago | 20m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.74% | 99.75% | 99.75% | 99.75% | 1376 ms | → 1.00x | 1 | 0s | 6d ago | 16m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.74% | 99.77% | 99.67% | 99.67% | 1315 ms | ↑ 1.42x | 4 | 0s | 2d ago | 18m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 97.75% | 98.79% | 98.79% | 2976 ms | ↑ 1.09x | 3 | 4h 28m | 5d ago | 17m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.74% | 97.64% | 98.52% | 98.52% | 799 ms | ↑ 1.57x | 7 | 2h 8m | 17h ago | 18m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.74% | 99.75% | 99.75% | 99.75% | 557 ms | → 1.00x | 1 | 0s | 3d ago | 17m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.74% | 99.75% | 91.47% | 91.47% | 3212 ms | → 1.00x | 1 | 0s | 2h ago | 18m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.74% | 75.56% | 81.73% | 81.73% | 2681 ms | ↓ 0.90x | 13 | 12h 55m | 3d ago | 16m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.74% | 99.72% | 99.07% | 99.07% | 2832 ms | ↑ 1.82x | 2 | 44m | 2h ago | 18m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.87% | 99.87% | 99.87% | 2469 ms | → 1.04x | 1 | 0s | 5d ago | 15m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 99.74% | 97.12% | 97.91% | 97.91% | 974 ms | ↑ 1.64x | 4 | 4h 29m | 14h ago | 15m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.74% | 99.76% | 99.76% | 99.76% | 1197 ms | ↓ 0.93x | 1 | 0s | 5d ago | 15m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.74% | 99.89% | 99.93% | 99.93% | 1019 ms | ↓ 0.85x | 2 | 0s | 2d ago | 16m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.74% | 99.61% | 99.54% | 99.54% | 1897 ms | ↓ 0.70x | 7 | 0s | 5h ago | 17m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.74% | 99.77% | 98.91% | 98.91% | 1822 ms | ↑ 1.43x | 4 | 0s | 4d ago | 18m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.74% | 98.99% | 99.12% | 99.12% | 1611 ms | ↑ 1.58x | 11 | 17m | 6d ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 99.74% | 99.94% | 99.37% | 99.37% | 2531 ms | ↑ 1.83x | 1 | 0s | 2h ago | 18m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.87% | 99.91% | 99.91% | 2740 ms | ↑ 2.57x | 2 | 0s | 5d ago | 16m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.74% | 99.94% | 97.31% | 97.31% | 1601 ms | ↑ 1.61x | 1 | 0s | 5d ago | 18m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.74% | 99.75% | 99.75% | 99.75% | 1568 ms | → 1.00x | 1 | 0s | 20h ago | 18m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.74% | 95.31% | 95.31% | 95.31% | 1444 ms | → 0.98x | 2 | 6h 36m | 2d ago | 15m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.50% | 99.83% | 98.85% | 98.85% | 986 ms | ↑ 1.18x | 2 | 15m | 2d ago | 33m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.50% | 99.78% | 85.17% | 85.17% | 2176 ms | ↑ 1.10x | 4 | 0s | 2d ago | 36m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.50% | 99.83% | 99.92% | 99.92% | 784 ms | ↑ 1.07x | 2 | 10m | 1d ago | 35m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.49% | 99.78% | 20.53% | 20.53% | 1241 ms | ↑ 1.11x | 4 | 0s | 15h ago | 25m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.49% | 99.83% | 93.57% | 93.57% | 698 ms | → 1.02x | 3 | 0s | 5d ago | 23m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.49% | 99.83% | 81.66% | 81.66% | 1914 ms | ↑ 1.15x | 3 | 0s | 2d ago | 24m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.49% | 99.89% | 90.07% | 90.07% | 886 ms | → 0.98x | 2 | 0s | 2d ago | 23m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.49% | 99.27% | 98.58% | 98.58% | 729 ms | ↑ 1.30x | 6 | 23m | 14h ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.49% | 99.83% | 99.84% | 99.84% | 1159 ms | ↑ 1.20x | 3 | 0s | 2d ago | 19m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.49% | 92.61% | 92.61% | 92.61% | 1556 ms | ↑ 1.27x | 55 | 20m | 2d ago | 15m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.49% | 99.89% | 94.34% | 94.34% | 3746 ms | ↑ 1.63x | 2 | 0s | 2h ago | 18m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.49% | 99.89% | 97.35% | 97.35% | 3203 ms | ↑ 1.60x | 2 | 0s | 2h ago | 18m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.25% | 99.83% | 92.26% | 92.26% | 2378 ms | ↑ 1.26x | 1 | 50m | 5h ago | 38m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.25% | 99.78% | 92.08% | 92.08% | 3797 ms | ↑ 1.11x | 2 | 25m | 5h ago | 38m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.25% | 94.12% | 68.06% | 68.06% | 4225 ms | → 1.01x | 35 | 42m | 6d ago | 32m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.24% | 99.78% | 19.55% | 19.55% | 2138 ms | ↑ 1.16x | 4 | 0s | 14h ago | 25m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.23% | 98.82% | 90.93% | 90.93% | 3214 ms | ↓ 0.94x | 21 | 0s | 2d ago | 22m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.23% | 99.66% | 47.06% | 47.06% | 2648 ms | ↑ 1.29x | 6 | 0s | 6h ago | 21m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.23% | 99.78% | 99.85% | 99.85% | 1094 ms | ↑ 1.12x | 3 | 7m | 2d ago | 19m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.23% | 99.77% | 99.75% | 99.75% | 580 ms | → 1.05x | 4 | 0s | 13h ago | 17m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.23% | 98.65% | 98.74% | 98.74% | 2169 ms | ↑ 1.28x | 22 | 2m | 15h ago | 15m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.23% | 99.10% | 99.33% | 99.33% | 1702 ms | ↑ 1.42x | 5 | 50m | 5d ago | 17m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.00% | 99.72% | 98.84% | 98.84% | 2723 ms | ↑ 1.07x | 5 | 0s | 5d ago | 37m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.00% | 76.51% | 35.34% | 35.34% | 2506 ms | → 0.98x | 78 | 1h 36m | 15h ago | 36m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (61)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 98.99% | 99.00% | 96.55% | 96.55% | 1402 ms | ↑ 1.08x | 7 | 36m | 2d ago | 32m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.99% | 99.72% | 99.69% | 99.69% | 1543 ms | → 1.05x | 4 | 8m | 5d ago | 30m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.98% | 99.66% | 67.10% | 67.10% | 1137 ms | → 1.03x | 4 | 15m | 3d ago | 24m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.97% | 98.99% | 98.99% | 98.99% | 1188 ms | → 1.00x | 1 | 1h 30m | 4d ago | 17m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.75% | 99.17% | 99.24% | 99.24% | 1473 ms | ↑ 1.13x | 5 | 42m | 1d ago | 36m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.74% | 98.44% | 98.91% | 98.91% | 2275 ms | ↑ 1.17x | 20 | 11m | 3d ago | 31m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.72% | 99.50% | 71.72% | 71.72% | 1116 ms | → 1.01x | 8 | 4m | 5d ago | 24m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.71% | 98.99% | 98.40% | 98.40% | 3385 ms | ↑ 1.25x | 6 | 46m | 2d ago | 18m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.71% | 98.20% | 95.67% | 95.67% | 1807 ms | ↑ 1.50x | 9 | 59m | 2d ago | 18m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.71% | 99.46% | 99.46% | 99.46% | 2209 ms | ↑ 1.17x | 3 | 20m | 2d ago | 15m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.50% | 98.29% | 85.45% | 85.45% | 3392 ms | ↑ 1.10x | 31 | 0s | 8h ago | 38m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.50% | 98.28% | 85.49% | 85.49% | 4460 ms | → 0.98x | 29 | 2m | 3m ago | 34m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.49% | 98.56% | 17.35% | 17.35% | 3537 ms | → 1.02x | 26 | 0s | 1d ago | 31m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.49% | 99.06% | 99.66% | 99.66% | 3028 ms | → 1.00x | 11 | 14m | 3d ago | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.48% | 99.61% | 55.66% | 55.66% | 3444 ms | ↓ 0.90x | 3 | 40m | 1d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.48% | 99.61% | 19.68% | 19.68% | 1642 ms | → 1.00x | 3 | 40m | 3d ago | 25m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.47% | 99.61% | 98.88% | 98.88% | 2828 ms | ↑ 1.13x | 4 | 22m | 3d ago | 23m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 98.46% | 99.61% | 97.18% | 97.18% | 3419 ms | ↑ 3.25x | 7 | 0s | 2h ago | 18m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.46% | 99.49% | 99.63% | 99.63% | 2867 ms | → 1.02x | 5 | 24m | 3d ago | 17m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.25% | 98.68% | 98.24% | 98.24% | 4555 ms | → 1.00x | 24 | 0s | 18h ago | 38m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.22% | 99.55% | 51.68% | 51.68% | 1126 ms | → 0.98x | 4 | 30m | 1d ago | 25m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.22% | 98.94% | 86.05% | 86.05% | 4443 ms | → 0.97x | 19 | 0s | 1h ago | 25m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.21% | 99.61% | 98.80% | 98.80% | 1902 ms | ↑ 1.13x | 4 | 15m | 11h ago | 23m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.20% | 98.24% | 82.24% | 82.24% | 2762 ms | → 1.00x | 1 | 2h 11m | 4d ago | 18m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.20% | 99.49% | 98.64% | 98.64% | 2470 ms | ↑ 1.39x | 4 | 37m | 6d ago | 17m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.18% | 98.18% | 98.18% | 98.18% | 4890 ms | → 1.00x | 1 | 0s | 45m ago | 15m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 97.99% | 97.12% | 17.32% | 17.32% | 2022 ms | → 1.00x | 51 | 47s | 1m ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.95% | 99.27% | 91.01% | 91.01% | 1534 ms | → 0.96x | 13 | 0s | 5h ago | 23m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.94% | 98.70% | 99.06% | 99.06% | 861 ms | → 0.98x | 23 | 0s | 7h ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.69% | 97.47% | 97.69% | 97.69% | 3936 ms | ↑ 1.38x | 21 | 32m | 15h ago | 21m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.49% | 97.61% | 74.03% | 74.03% | 4526 ms | → 1.04x | 36 | 5m | 17h ago | 32m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.43% | 99.44% | 99.55% | 99.55% | 1492 ms | ↑ 1.69x | 1 | 2h 60m | 4d ago | 18m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.73% | 97.61% | 98.59% | 98.59% | 4054 ms | → 1.04x | 42 | 43s | 9h ago | 31m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.66% | 98.82% | 96.55% | 96.55% | 1812 ms | ↑ 1.81x | 16 | 9m | 15h ago | 18m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 96.15% | 96.15% | 50.00% | 50.00% | 4423 ms | → 1.00x | 1 | 32m | 2h ago | 18m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 96.14% | 98.20% | 98.06% | 98.06% | 1879 ms | ↑ 1.12x | 10 | 50m | 14h ago | 17m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.91% | 96.08% | 82.04% | 82.04% | 4822 ms | → 1.05x | 64 | 2m | 53m ago | 23m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.65% | 96.18% | 82.86% | 82.86% | 4592 ms | → 0.97x | 57 | 5m | 52m ago | 21m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 95.40% | 97.48% | 85.40% | 85.40% | 4650 ms | → 0.99x | 34 | 9m | 8h ago | 22m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 95.38% | 98.65% | 91.41% | 91.41% | 1003 ms | ↓ 0.90x | 9 | 37m | 20h ago | 19m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 94.15% | 98.38% | 96.58% | 96.58% | 4463 ms | ↑ 1.13x | 11 | 47m | 1d ago | 25m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.85% | 98.59% | 96.59% | 96.59% | 1507 ms | → 1.04x | 2 | 4h 23m | 1d ago | 19m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 91.48% | 96.18% | 29.61% | 29.61% | 1858 ms | ↑ 1.08x | 12 | 1h 52m | 2d ago | 33m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.26% | 96.57% | 95.90% | 95.90% | 1556 ms | ↓ 0.59x | 8 | 3h 3m | 9h ago | 19m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 88.24% | 94.01% | 71.79% | 71.79% | 1604 ms | ↑ 1.08x | 15 | 2h 7m | 8h ago | 24m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 87.15% | 96.95% | 97.72% | 97.72% | 2205 ms | ↑ 1.21x | 3 | 7h 23m | 7d ago | 15m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 86.89% | 91.78% | 94.20% | 94.20% | 3883 ms | ↑ 1.23x | 31 | 1h 21m | 4h ago | 17m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 86.67% | 87.52% | 80.76% | 80.76% | 1166 ms | ↑ 1.37x | 4 | 20h 32m | 2d ago | 19m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 84.73% | 89.27% | 18.52% | 18.52% | 4493 ms | → 0.97x | 149 | 8m | 1h ago | 25m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 81.49% | 79.65% | 79.65% | 79.65% | 4676 ms | → 1.00x | 4 | 9h | 2d ago | 15m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 79.64% | 81.33% | 34.25% | 34.25% | 2019 ms | ↑ 1.09x | 3 | 1d 17h | 2d ago | 24m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 72.25% | 84.90% | 97.86% | 97.86% | 1365 ms | ↑ 1.07x | 128 | 28m | 16h ago | 35m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 70.26% | 92.36% | 83.68% | 83.68% | 1751 ms | ↑ 1.19x | 9 | 6h 19m | 2d ago | 19m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 68.89% | 15.10% | 36.35% | 36.35% | 691 ms | → 1.00x | 2 | 12d 15h | 2d ago | 17m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 68.80% | 15.07% | 66.45% | 66.45% | 691 ms | → 1.00x | 2 | 12d 15h | 2d ago | 24m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 59.03% | 12.97% | 30.57% | 30.57% | 1546 ms | → 1.00x | 1 | 25d 22h | 30d ago | 25m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 55.01% | 82.67% | 82.67% | 82.67% | 4685 ms | → 0.99x | 26 | 2h 32m | 46m ago | 15m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 41.65% | 69.09% | 75.96% | 75.96% | 1589 ms | ↑ 1.37x | 3 | 3d 5h | 13d ago | 18m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 40.56% | 46.22% | 46.06% | 46.06% | 568 ms | ↑ 1.40x | 2 | 8d 9h | 20d ago | 24m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 34.96% | 16.48% | 14.33% | 14.33% | 4090 ms | ↑ 1.25x | 180 | 2h 56m | 4h ago | 15m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 26.15% | 5.73% | 12.00% | 12.00% | 2493 ms | → 1.00x | 2 | 14d 2h | 2d ago | 19m ago |

</details>

<details open>
<summary><strong>🔴 Down (256)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.78% | 95.97% | 95.97% | 2991 ms | → 1.05x | 4 | 0s | 36m ago | 36m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.49% | 99.72% | 99.80% | 99.80% | 2944 ms | ↑ 1.64x | 5 | 0s | 17m ago | 17m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.23% | 97.98% | 96.45% | 96.45% | 1539 ms | ↑ 1.08x | 5 | 2h 10m | 1h ago | 19m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.23% | 99.25% | 99.25% | 99.25% | 983 ms | → 1.00x | 1 | 1h | 1h ago | 15m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.08% | 98.08% | 98.08% | 98.08% | 3400 ms | → 1.00x | 1 | 0s | 16m ago | 16m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.19% | 98.43% | 65.77% | 65.77% | 4705 ms | → 1.01x | 25 | 4m | 23m ago | 23m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 96.92% | 89.04% | 96.78% | 96.78% | 457 ms | ↓ 0.17x | 4 | 19h 30m | 6h ago | 21m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 93.72% | 94.62% | 16.13% | 16.13% | 3200 ms | ↑ 1.15x | 79 | 5m | 32m ago | 32m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.51% | 89.99% | 54.76% | 54.76% | 3761 ms | → 0.96x | 147 | 6m | 20m ago | 20m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 84.83% | 85.14% | 85.14% | 85.14% | 389 ms | → 1.00x | 1 | 1d 1h | 1d ago | 17m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 83.59% | 96.35% | 98.64% | 98.64% | 1256 ms | ↑ 1.55x | 2 | 13h 56m | 1d ago | 19m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 70.51% | 84.99% | 81.43% | 81.43% | 4591 ms | ↓ 0.82x | 37 | 2h 46m | 50m ago | 20m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 70.18% | 84.86% | 84.86% | 84.86% | 2015 ms | ↑ 1.10x | 1 | 2d 2h | 2d ago | 15m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.57% | 69.90% | 22.16% | 22.16% | 4684 ms | → 1.00x | 318 | 18m | 54m ago | 23m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 69.49% | 93.14% | 88.86% | 88.86% | 327 ms | ↑ 1.05x | 4 | 12h 45m | 2d ago | 19m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 68.67% | 65.72% | 62.25% | 62.25% | 4800 ms | → 0.99x | 335 | 22m | 1h ago | 32m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 68.37% | 37.55% | 32.45% | 32.45% | 1047 ms | ↑ 1.37x | 4 | 4d 14h | 24m ago | 24m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 67.61% | 68.01% | 68.01% | 68.01% | 4638 ms | → 1.00x | 3 | 17h 54m | 2d ago | 17m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 59.75% | 90.60% | 97.90% | 97.90% | 4256 ms | ↑ 1.19x | 65 | 43m | 1h ago | 34m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 58.10% | 81.26% | 81.26% | 81.26% | 4278 ms | ↑ 1.27x | 4 | 18h 15m | 3d ago | 14m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 55.39% | 69.84% | 52.08% | 52.08% | 3660 ms | ↑ 1.07x | 8 | 1d 2h | 3d ago | 32m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 27.11% | 83.96% | 53.19% | 53.19% | 3866 ms | → 1.04x | 2 | 2d 12h | 5d ago | 22m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 25.71% | 83.19% | 87.81% | 87.81% | 747 ms | ↑ 2.03x | 4 | 1d 7h | 5d ago | 15m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 17.39% | 79.54% | 94.93% | 94.93% | 251 ms | ↓ 0.38x | 2 | 3d 5h | 6d ago | 23m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 5.00% | 78.66% | 90.43% | 90.43% | 937 ms | → 1.00x | 7 | 22h 34m | 7d ago | 36m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 4.09% | 78.90% | 93.73% | 93.73% | 3236 ms | ↑ 1.12x | 2 | 3d 8h | 7d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.25% | 1.43% | 59.80% | 59.80% | 4345 ms | ↑ 1.25x | 26 | 1d 3h | 2d ago | 38m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 81.42% | 81.42% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 67.43% | 67.43% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 72.53% | 72.53% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 25.93% | 52.43% | 52.43% | — | — | 11 | 2d 2h | 23d ago | 16m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 14.81% | 81.02% | 81.02% | — | — | 5 | 5d 5h | 26d ago | 22m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 61.25% | 61.25% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.56% | 5.56% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.32% | 12.32% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 58.04% | 58.04% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.34% | 3.34% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 69.21% | 69.21% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 81.67% | 81.67% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.85% | 35.85% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 8.11% | 91.21% | 91.21% | — | — | 1 | 27d 21h | 28d ago | 37m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.32% | 23.32% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 73.29% | 73.29% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 50.91% | 50.91% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.42% | 29.42% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 82.06% | 82.06% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 61.81% | 61.81% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 75.80% | 75.80% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22h 30m | 23h ago | 37m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.85% | 14.85% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 49.07% | 49.07% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 45.34% | 93.12% | 93.12% | — | — | 6 | 2d 20h | 17d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 33.82% | 33.82% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 18.27% | 82.42% | 82.42% | — | — | 2 | 12d 12h | 25d ago | 25m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.41% | 3.41% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 82.27% | 82.27% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 16.24% | 37.38% | 37.38% | — | — | 5 | 5d 3h | 26d ago | 16m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.07% | 51.07% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.02% | 2.02% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 22.86% | 90.12% | 90.12% | — | — | 1 | 23d 19h | 24d ago | 33m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 32.04% | 78.03% | 78.03% | — | — | 2 | 10d 11h | 20d ago | 21m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 76.22% | 76.22% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 31.29% | 31.29% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.74% | 53.74% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 38.11% | 53.97% | 53.97% | — | — | 1 | 19d 7h | 19d ago | 19m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.12% | 24.12% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 70.44% | 82.41% | 82.41% | — | — | 12 | 18h 32m | 9d ago | 37m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 70.29% | 41.19% | 41.19% | — | — | 3 | 3d 4h | 9d ago | 32m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 5h | 7d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 72.22% | 70.99% | 70.99% | — | — | 1 | 8d 21h | 9d ago | 19m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 56.31% | 56.31% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 15.58% | 24.07% | 24.07% | — | — | 1 | 25d 22h | 26d ago | 23m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.31% | 5.31% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.79% | 64.79% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 82.00% | 82.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.67% | 6.67% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 78.31% | 78.31% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 80.79% | 80.79% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 18.23% | 32.69% | 32.69% | — | — | 1 | 25d 4h | 25d ago | 22m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 26.96% | 26.96% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 32.38% | 24.93% | 24.93% | — | — | 4 | 5d 4h | 18d ago | 20m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 52.09% | 52.09% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 53.89% | 53.89% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 9.04% | 9.04% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 66.52% | 66.52% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 75.47% | 75.47% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.01% | 46.01% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.81% | 41.81% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 8.35% | 31.32% | 31.32% | — | — | 1 | 27d 19h | 28d ago | 16m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 82.01% | 82.01% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 57.93% | 57.93% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.48% | 38.48% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 63.21% | 76.58% | 76.58% | — | — | 2 | 5d 19h | 12d ago | 22m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 14.75% | 81.00% | 81.00% | — | — | 5 | 5d 5h | 26d ago | 22m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 47.84% | 78.69% | 78.69% | — | — | 4 | 4d 2h | 16d ago | 20m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.82% | 30.82% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.52% | 2.52% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 82.23% | 82.23% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.13% | 41.13% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 62.78% | 96.43% | 96.43% | — | — | 1 | 11d 19h | 12d ago | 31m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 81.98% | 81.98% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 81.91% | 81.91% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 53.96% | 53.96% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 23.38% | 23.38% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 44.07% | 44.07% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 79.60% | 79.60% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 65.39% | 65.39% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 29.92% | 29.92% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 4h | 7d ago | 17m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 78.10% | 78.10% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 4h | 7d ago | 18m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 51.02% | 51.02% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.17% | 3.17% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 4h | 7d ago | 17m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.72% | 42.72% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 76.52% | 76.52% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 53.51% | 41.21% | 41.21% | — | — | 6 | 2d 10h | 14d ago | 33m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 58.38% | 58.38% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 45.18% | 45.18% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 63.05% | 63.05% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 87.94% | 87.94% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.00% | 28.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.28% | 12.28% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 24.99% | 24.99% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.85% | 23.85% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 29.16% | 52.41% | 52.41% | — | — | 1 | 22d 1h | 22d ago | 33m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 31.97% | 93.12% | 93.12% | — | — | 11 | 1d 22h | 20d ago | 36m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 56.00% | 56.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 46.71% | 78.34% | 78.34% | — | — | 2 | 8d 6h | 16d ago | 21m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 10.45% | 10.45% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.28% | 17.28% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 48.99% | 48.99% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.45% | 25.56% | 25.56% | — | — | 1 | 29d 20h | 30d ago | 17m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.59% | 54.59% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 94.80% | 94.80% | — | — | 1 | 22h 30m | 23h ago | 30m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 38.90% | 38.90% | — | — | 1 | 7d 4h | 7d ago | 24m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 22.88% | 22.88% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 35.50% | 35.50% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 48.64% | 48.64% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.49% | 5.49% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 34.98% | 81.06% | 81.06% | — | — | 2 | 10d 3h | 20d ago | 23m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 4.43% | 89.36% | 89.36% | — | — | 1 | 28d 20h | 29d ago | 34m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 54.71% | 69.16% | 69.16% | — | — | 1 | 14d 6h | 14d ago | 15m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 82.10% | 82.10% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 81.03% | 81.03% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 63.20% | 63.20% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 74.21% | 74.21% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 80.89% | 80.89% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23h 31m | 24h ago | 17m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.35% | 19.35% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 33.22% | 59.17% | 59.17% | — | — | 1 | 20d 20h | 21d ago | 37m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 35.81% | 42.66% | 42.66% | — | — | 5 | 3d 24h | 20d ago | 21m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.03% | 4.03% | — | — | 2 | 14d 23h | 22d ago | 32m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.75% | 33.75% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.60% | 67.88% | 67.88% | — | — | 4 | 7d 5h | 21d ago | 35m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.52% | 25.53% | 25.53% | — | — | 27 | 22h 39m | 18d ago | 22m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.48% | 7.48% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 65.00% | 65.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 12.33% | 34.44% | 34.44% | — | — | 2 | 13d 9h | 27d ago | 17m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 66.91% | 66.91% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 41.68% | 41.68% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.68% | 5.68% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21h 36m | 22h ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 36.54% | 59.61% | 59.61% | — | — | 1 | 19d 18h | 20d ago | 18m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 12.44% | 52.33% | 52.33% | — | — | 2 | 13d 9h | 27d ago | 18m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 36.70% | 36.70% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 22.88% | 22.88% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 54.01% | 5.43% | 5.43% | — | — | 3 | 4d 20h | 14d ago | 34m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.03% | 12.03% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 74.38% | 89.68% | 89.68% | — | — | 1 | 8d 5h | 8d ago | 34m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.78% | 17.78% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 18.01% | 18.01% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 35.08% | 35.08% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 9.47% | 9.97% | 9.97% | — | — | 87 | 7h 11m | 25d ago | 24m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 9.78% | 9.78% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.93% | 0.93% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.25% | 5.25% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.14% | 6.14% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 49.41% | 49.41% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 6.70% | 49.91% | 49.91% | — | — | 1 | 28d 6h | 28d ago | 17m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 82.07% | 82.07% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 29.99% | 29.99% | 29.99% | — | — | 1 | 9d 14h | 10d ago | 15m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 27.82% | 75.78% | 75.78% | — | — | 1 | 22d 12h | 22d ago | 20m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 47.37% | 47.37% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 82.26% | 82.26% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 55.74% | 55.74% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 40.98% | 40.98% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.04% | 2.04% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 11.60% | 19.49% | 19.49% | — | — | 1 | 26d 23h | 27d ago | 24m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 7d 4h | 7d ago | 17m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 80.02% | 80.02% | — | — | 1 | 29d 23h | 30d ago | 29m ago |

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
