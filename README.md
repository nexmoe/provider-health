# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 350 🟢 operational · 61 🟡 degraded · 264 🔴 down · 0 ⚫ unknown

_Updated 2026-07-02 06:44 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (350)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.38% | 98.38% | 648 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1336 ms | ↓ 0.88x | 0 | — | — | 22m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.80% | 94.13% | 94.13% | 664 ms | ↓ 0.55x | 3 | 0s | 26d ago | 30m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.80% | 23.46% | 23.46% | 3223 ms | ↑ 1.09x | 3 | 0s | 22d ago | 32m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.54% | 97.54% | 3706 ms | → 0.98x | 0 | — | — | 41m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.75% | 58.75% | 1649 ms | ↓ 0.85x | 0 | — | — | 29m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.39% | 99.56% | 99.56% | 843 ms | ↓ 0.89x | 4 | 35m | 10d ago | 22m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.87% | 98.71% | 98.71% | 1118 ms | → 0.99x | 2 | 0s | 12d ago | 31m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.60% | 99.60% | 2927 ms | ↓ 0.80x | 0 | — | — | 43m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.67% | 95.67% | 3150 ms | ↑ 1.08x | 0 | — | — | 27m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2406 ms | ↑ 1.20x | 0 | — | — | 24m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.93% | 97.93% | 3561 ms | ↑ 1.12x | 0 | — | — | 27m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.93% | 93.50% | 93.50% | 2129 ms | ↓ 0.86x | 1 | 50m | 21d ago | 44m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2248 ms | ↑ 1.14x | 1 | 0s | 13d ago | 24m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1192 ms | ↑ 1.08x | 0 | — | — | 21m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.76% | 98.76% | 1451 ms | ↑ 1.05x | 0 | — | — | 27m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.11% | 96.87% | 96.87% | 1287 ms | ↓ 0.84x | 4 | 4h 2m | 9d ago | 26m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 100.00% | 100.00% | 100.00% | 100.00% | 328 ms | → 1.00x | 0 | — | — | 21m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.02% | 99.02% | 327 ms | ↓ 0.30x | 0 | — | — | 24m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.38% | 39.38% | 755 ms | → 1.04x | 0 | — | — | 38m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1691 ms | ↑ 1.12x | 0 | — | — | 21m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.14% | 97.14% | 2882 ms | → 1.02x | 0 | — | — | 30m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.91% | 98.91% | 1129 ms | ↑ 1.07x | 1 | 30m | 23d ago | 40m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 95.50% | 68.25% | 68.25% | 1747 ms | ↑ 1.45x | 2 | 13h 59m | 16d ago | 27m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1165 ms | → 0.96x | 0 | — | — | 23m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.87% | 96.94% | 96.94% | 1037 ms | ↑ 1.18x | 2 | 0s | 13d ago | 29m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.39% | 88.39% | 1707 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1813 ms | ↑ 1.08x | 1 | 0s | 11d ago | 24m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.51% | 98.51% | 3956 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 79.95% | 79.95% | 3101 ms | ↑ 1.15x | 3 | 0s | 9d ago | 38m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.66% | 99.65% | 99.65% | 1498 ms | ↑ 1.10x | 3 | 19m | 17d ago | 24m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 87.01% | 87.01% | 2533 ms | ↑ 1.13x | 0 | — | — | 27m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 931 ms | ↓ 0.89x | 1 | 0s | 19d ago | 23m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.73% | 82.84% | 82.84% | 2467 ms | → 1.00x | 4 | 0s | 8d ago | 31m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.85% | 97.85% | 1487 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 826 ms | ↓ 0.93x | 1 | 0s | 10d ago | 39m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.75% | 99.75% | 3009 ms | → 0.99x | 1 | 0s | 10d ago | 39m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.08% | 99.08% | 853 ms | ↑ 1.26x | 1 | 0s | 10d ago | 29m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.96% | 97.96% | 3838 ms | → 0.96x | 0 | — | — | 42m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.93% | 99.63% | 99.63% | 2186 ms | ↑ 1.08x | 2 | 3h 20m | 13d ago | 29m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.59% | 96.59% | 676 ms | ↓ 0.91x | 0 | — | — | 29m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 91.60% | 86.59% | 86.59% | 1724 ms | ↓ 0.89x | 8 | 6h 40m | 23d ago | 26m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1238 ms | → 0.98x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 795 ms | ↓ 0.41x | 0 | — | — | 23m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.79% | 99.79% | 99.79% | 1592 ms | ↓ 0.95x | 2 | 0s | 17d ago | 21m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.87% | 99.04% | 99.04% | 2865 ms | → 0.96x | 2 | 0s | 14d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.87% | 99.87% | 99.87% | 1571 ms | ↑ 1.07x | 2 | 0s | 23d ago | 26m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 99.66% | 98.77% | 98.77% | 983 ms | ↑ 1.06x | 5 | 0s | 8d ago | 24m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.86% | 99.86% | 557 ms | ↓ 0.42x | 0 | — | — | 21m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3257 ms | ↓ 0.85x | 0 | — | — | 37m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.73% | 97.71% | 97.71% | 2318 ms | → 1.04x | 4 | 0s | 10d ago | 29m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.73% | 99.73% | 786 ms | ↓ 0.94x | 0 | — | — | 27m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1251 ms | → 1.02x | 0 | — | — | 21m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.93% | 32.35% | 32.35% | 1421 ms | ↑ 1.08x | 1 | 0s | 10d ago | 39m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.64% | 96.64% | 1917 ms | ↓ 0.90x | 1 | 0s | 11d ago | 26m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.19% | 98.03% | 98.03% | 4676 ms | ↑ 1.61x | 10 | 51m | 29d ago | 28m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.82% | 99.82% | 99.82% | 2031 ms | → 1.02x | 1 | 30m | 19d ago | 21m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1326 ms | ↓ 0.77x | 0 | — | — | 24m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 362 ms | ↓ 0.64x | 0 | — | — | 24m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.80% | 99.83% | 99.83% | 705 ms | → 0.98x | 3 | 0s | 21d ago | 24m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.92% | 96.92% | 599 ms | ↓ 0.87x | 0 | — | — | 30m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.63% | 98.39% | 98.39% | 1973 ms | → 0.99x | 1 | 21h 30m | 28d ago | 22m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1056 ms | ↓ 0.94x | 0 | — | — | 21m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.40% | 56.40% | 1673 ms | ↑ 1.07x | 0 | — | — | 32m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.48% | 98.48% | 98.48% | 715 ms | ↓ 0.93x | 2 | 4h 33m | 21d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1509 ms | ↑ 1.09x | 0 | — | — | 23m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 4178 ms | ↑ 1.12x | 0 | — | — | 38m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.24% | 97.24% | 1898 ms | ↑ 1.29x | 0 | — | — | 38m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.16% | 99.16% | 1110 ms | ↓ 0.85x | 1 | 0s | 19d ago | 30m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 98.04% | 49.57% | 49.57% | 2704 ms | ↑ 1.05x | 8 | 1h 3m | 9d ago | 38m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.25% | 84.25% | 3013 ms | ↑ 1.05x | 0 | — | — | 30m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.80% | 67.94% | 67.94% | 1414 ms | → 1.02x | 2 | 10m | 12d ago | 31m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 998 ms | ↑ 1.34x | 0 | — | — | 24m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.81% | 98.81% | 2620 ms | → 1.02x | 0 | — | — | 28m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4270 ms | ↑ 1.08x | 0 | — | — | 23m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.16% | 93.16% | 718 ms | ↓ 0.81x | 0 | — | — | 31m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1139 ms | → 1.02x | 0 | — | — | 27m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.93% | 99.85% | 99.85% | 654 ms | ↑ 1.31x | 1 | 0s | 29d ago | 29m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.48% | 99.48% | 778 ms | ↓ 0.91x | 0 | — | — | 24m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.90% | 99.90% | 99.90% | 1667 ms | → 1.00x | 1 | 0s | 8d ago | 22m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.10% | 98.10% | 3314 ms | ↑ 1.50x | 1 | 0s | 22d ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.40% | 90.40% | 1138 ms | → 1.03x | 1 | 0s | 25d ago | 27m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.87% | 49.45% | 49.45% | 1965 ms | ↑ 1.07x | 2 | 0s | 12d ago | 32m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2286 ms | ↓ 0.93x | 0 | — | — | 23m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.54% | 77.54% | 1273 ms | ↑ 1.05x | 0 | — | — | 31m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.66% | 96.62% | 96.62% | 1424 ms | → 1.03x | 1 | 2h 1m | 14d ago | 22m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.48% | 56.42% | 56.42% | 1634 ms | → 0.99x | 8 | 0s | 8d ago | 39m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1023 ms | ↑ 1.07x | 0 | — | — | 23m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.33% | 98.33% | 2538 ms | → 0.98x | 0 | — | — | 29m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.40% | 54.10% | 54.10% | 1106 ms | ↓ 0.92x | 5 | 24m | 12d ago | 32m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 883 ms | ↓ 0.94x | 0 | — | — | 21m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2329 ms | ↑ 1.14x | 0 | — | — | 23m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1029 ms | → 1.00x | 0 | — | — | 21m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.80% | 99.83% | 99.83% | 1725 ms | ↓ 0.89x | 3 | 0s | 14d ago | 21m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.87% | 83.13% | 83.13% | 2284 ms | → 1.01x | 2 | 0s | 23d ago | 30m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.87% | 64.25% | 64.25% | 630 ms | ↓ 0.93x | 2 | 0s | 12d ago | 31m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.09% | 98.09% | 3354 ms | ↑ 1.90x | 0 | — | — | 32m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 1922 ms | → 0.97x | 0 | — | — | 24m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.94% | 99.33% | 99.33% | 2905 ms | ↓ 0.82x | 5 | 5h 45m | 17d ago | 37m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.04% | 62.04% | 1932 ms | ↑ 1.21x | 0 | — | — | 31m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.01% | 65.01% | 1833 ms | → 1.05x | 0 | — | — | 31m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.73% | 99.88% | 99.88% | 1855 ms | → 1.04x | 1 | 1h 9m | 16d ago | 24m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.26% | 99.26% | 1982 ms | → 1.02x | 0 | — | — | 31m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1969 ms | ↑ 1.16x | 0 | — | — | 29m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 611 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.67% | 97.96% | 97.96% | 1692 ms | ↓ 0.91x | 2 | 6h 16m | 17d ago | 31m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.46% | 90.27% | 90.27% | 3128 ms | ↓ 0.91x | 4 | 19h 27m | 20d ago | 21m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.87% | 21.95% | 21.95% | 1010 ms | ↓ 0.58x | 2 | 0s | 9d ago | 38m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2115 ms | ↓ 0.89x | 0 | — | — | 42m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2585 ms | ↑ 1.17x | 0 | — | — | 22m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3472 ms | ↓ 0.94x | 0 | — | — | 42m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.26% | 98.26% | 3360 ms | ↓ 0.84x | 0 | — | — | 43m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 824 ms | → 0.95x | 1 | 0s | 10d ago | 39m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.94% | 76.94% | 2238 ms | ↓ 0.88x | 0 | — | — | 29m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2583 ms | ↑ 1.55x | 0 | — | — | 21m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.39% | 98.28% | 98.28% | 1589 ms | ↑ 1.37x | 7 | 8m | 18d ago | 22m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.33% | 99.68% | 99.68% | 1696 ms | → 1.03x | 1 | 2h 60m | 24d ago | 24m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1718 ms | → 0.97x | 0 | — | — | 43m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 628 ms | ↓ 0.57x | 0 | — | — | 43m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2475 ms | ↑ 1.09x | 1 | 0s | 23d ago | 41m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.10% | 90.10% | 1369 ms | → 0.98x | 0 | — | — | 30m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 450 ms | → 1.00x | 0 | — | — | 21m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1251 ms | ↑ 1.24x | 0 | — | — | 43m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 584 ms | → 0.99x | 0 | — | — | 24m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.87% | 99.94% | 99.94% | 1660 ms | ↑ 1.11x | 2 | 0s | 17d ago | 23m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.25% | 86.25% | 2929 ms | ↑ 1.07x | 0 | — | — | 27m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1910 ms | → 0.97x | 0 | — | — | 23m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2304 ms | ↑ 1.11x | 0 | — | — | 27m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 880 ms | ↑ 1.06x | 0 | — | — | 32m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.69% | 97.69% | 2633 ms | ↑ 1.29x | 0 | — | — | 27m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1847 ms | ↑ 1.09x | 1 | 0s | 26d ago | 21m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1627 ms | → 1.05x | 1 | 0s | 18d ago | 24m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 1849 ms | ↑ 1.26x | 1 | 0s | 23d ago | 23m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1942 ms | → 1.02x | 0 | — | — | 23m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.87% | 98.93% | 98.93% | 200 ms | ↓ 0.71x | 1 | 29m | 10d ago | 29m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3204 ms | ↑ 1.25x | 0 | — | — | 32m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.60% | 90.60% | 861 ms | ↓ 0.83x | 0 | — | — | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.87% | 97.93% | 97.93% | 518 ms | → 0.99x | 2 | 0s | 8d ago | 23m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.83% | 99.83% | 690 ms | → 0.97x | 0 | — | — | 22m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.88% | 99.88% | 99.88% | 599 ms | ↓ 0.43x | 1 | 0s | 18d ago | 22m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1474 ms | → 1.01x | 0 | — | — | 22m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.81% | 25.81% | 2393 ms | ↑ 1.15x | 0 | — | — | 32m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 861 ms | ↓ 0.87x | 0 | — | — | 44m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2397 ms | ↓ 0.93x | 0 | — | — | 43m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.52% | 98.77% | 98.77% | 2418 ms | ↑ 1.09x | 14 | 49m | 8d ago | 28m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 822 ms | ↑ 1.21x | 0 | — | — | 42m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.34% | 98.34% | 1231 ms | ↓ 0.87x | 1 | 0s | 14d ago | 26m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.73% | 99.73% | 2870 ms | ↓ 0.90x | 2 | 0s | 9d ago | 42m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.20% | 98.20% | 908 ms | ↓ 0.85x | 0 | — | — | 30m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.87% | 21.80% | 21.80% | 740 ms | ↓ 0.57x | 2 | 0s | 12d ago | 32m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 437 ms | ↓ 0.67x | 0 | — | — | 43m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.67% | 99.75% | 99.75% | 1686 ms | → 1.03x | 4 | 8m | 26d ago | 36m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.91% | 98.91% | 4164 ms | ↓ 0.93x | 0 | — | — | 44m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 3098 ms | ↑ 1.48x | 0 | — | — | 42m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.87% | 99.94% | 99.94% | 2438 ms | ↑ 1.14x | 1 | 21m | 8d ago | 24m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 81 ms | → 1.00x | 0 | — | — | 21m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 100.00% | 98.55% | 98.92% | 98.92% | 2550 ms | ↑ 1.08x | 14 | 14m | 7d ago | 38m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.76% | 33.18% | 33.18% | 2365 ms | ↑ 1.08x | 5 | 2h 16m | 18d ago | 40m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 46.30% | 33.47% | 33.47% | 1606 ms | ↓ 0.90x | 2 | 7d 2h | 12d ago | 31m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 90.00% | 97.97% | 97.97% | 1989 ms | → 1.01x | 67 | 34m | 22d ago | 41m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2523 ms | → 0.95x | 0 | — | — | 38m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.36% | 99.36% | 2217 ms | → 1.03x | 1 | 0s | 23d ago | 32m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 44.89% | 44.89% | 667 ms | ↓ 0.86x | 1 | 0s | 22d ago | 43m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.63% | 98.63% | 2629 ms | ↓ 0.74x | 1 | 0s | 10d ago | 29m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1136 ms | ↓ 0.95x | 0 | — | — | 42m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2368 ms | ↓ 0.93x | 0 | — | — | 37m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.05% | 99.72% | 99.72% | 394 ms | ↑ 1.81x | 10 | 10m | 9d ago | 42m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.93% | 99.82% | 99.82% | 1554 ms | ↑ 1.05x | 1 | 0s | 26d ago | 29m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.32% | 21.32% | 802 ms | → 1.00x | 1 | 0s | 19d ago | 42m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2408 ms | → 1.02x | 0 | — | — | 31m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 676 ms | ↓ 0.65x | 0 | — | — | 25m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 366 ms | ↓ 0.77x | 0 | — | — | 22m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.56% | 99.56% | 99.56% | 909 ms | → 0.98x | 3 | 30m | 9d ago | 24m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 641 ms | → 0.99x | 0 | — | — | 43m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.58% | 62.58% | 1455 ms | → 0.98x | 0 | — | — | 31m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 71.54% | 87.42% | 87.42% | 697 ms | ↓ 0.67x | 4 | 1d 21h | 15d ago | 22m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 95.83% | 84.07% | 84.07% | 1665 ms | ↑ 1.16x | 2 | 13h | 23d ago | 26m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2982 ms | → 1.02x | 0 | — | — | 42m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.12% | 98.84% | 98.84% | 2013 ms | ↑ 1.35x | 1 | 5h 50m | 18d ago | 24m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.03% | 99.03% | 99.03% | 3046 ms | → 1.00x | 1 | 2h 37m | 12d ago | 22m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.14% | 64.60% | 64.60% | 1104 ms | ↓ 0.59x | 3 | 1h 32m | 12d ago | 32m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.60% | 89.60% | 1734 ms | → 0.96x | 1 | 0s | 19d ago | 41m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.53% | 23.57% | 23.57% | 1557 ms | ↓ 0.91x | 3 | 40m | 16d ago | 32m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.47% | 98.98% | 98.98% | 3175 ms | ↑ 1.52x | 4 | 30m | 16d ago | 30m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.41% | 81.13% | 81.13% | 1921 ms | ↓ 0.87x | 1 | 13h | 29d ago | 43m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.87% | 89.13% | 89.13% | 814 ms | ↓ 0.81x | 2 | 0s | 18d ago | 24m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 982 ms | ↓ 0.78x | 1 | 0s | 22d ago | 41m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1028 ms | ↓ 0.92x | 0 | — | — | 43m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 48.00% | 48.00% | 666 ms | ↑ 1.06x | 1 | 0s | 22d ago | 29m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.61% | 99.61% | 891 ms | ↓ 0.94x | 1 | 0s | 7d ago | 43m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1516 ms | ↑ 1.10x | 0 | — | — | 23m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 759 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.15% | 98.86% | 98.86% | 3661 ms | → 1.00x | 2 | 8h 60m | 13d ago | 41m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.63% | 98.63% | 1677 ms | → 1.04x | 0 | — | — | 27m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.66% | 98.28% | 98.28% | 457 ms | ↓ 0.69x | 1 | 1h 40m | 14d ago | 27m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.83% | 96.83% | 1212 ms | ↑ 1.12x | 1 | 0s | 21d ago | 27m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.27% | 71.27% | 1510 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1257 ms | → 1.00x | 0 | — | — | 22m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1345 ms | ↓ 0.95x | 0 | — | — | 21m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 81.89% | 81.89% | 2954 ms | ↑ 1.07x | 1 | 0s | 22d ago | 31m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1901 ms | ↓ 0.95x | 0 | — | — | 41m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 664 ms | ↓ 0.37x | 0 | — | — | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 758 ms | ↓ 0.90x | 1 | 0s | 23d ago | 36m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.56% | 37.40% | 37.40% | 1875 ms | → 0.98x | 14 | 5h 29m | 14d ago | 31m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 73.10% | 29.39% | 29.39% | 2816 ms | → 1.03x | 2 | 3d 15h | 23d ago | 26m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 86.01% | 86.01% | 914 ms | ↑ 1.17x | 0 | — | — | 41m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.34% | 99.34% | 2451 ms | → 1.01x | 0 | — | — | 31m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.75% | 98.92% | 98.92% | 2834 ms | ↓ 0.86x | 5 | 0s | 16d ago | 43m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.87% | 68.90% | 68.90% | 1521 ms | ↑ 1.09x | 2 | 0s | 8d ago | 31m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.82% | 96.82% | 1270 ms | ↓ 0.91x | 0 | — | — | 31m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1558 ms | ↑ 1.08x | 0 | — | — | 23m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.87% | 23.56% | 23.56% | 3676 ms | ↑ 1.18x | 2 | 0s | 9d ago | 38m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2547 ms | → 0.96x | 0 | — | — | 43m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.73% | 97.68% | 97.68% | 553 ms | ↓ 0.78x | 2 | 31m | 11d ago | 24m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1986 ms | → 1.03x | 1 | 0s | 20d ago | 24m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4177 ms | ↑ 1.06x | 0 | — | — | 24m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.98% | 59.98% | 701 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.82% | 43.82% | 2919 ms | → 1.01x | 0 | — | — | 31m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1504 ms | → 1.00x | 0 | — | — | 21m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 3240 ms | ↓ 0.82x | 0 | — | — | 37m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 3205 ms | → 0.96x | 0 | — | — | 43m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2326 ms | → 1.01x | 0 | — | — | 30m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 96.04% | 92.55% | 92.55% | 2089 ms | ↓ 0.93x | 1 | 1d | 30d ago | 29m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.30% | 99.30% | 2378 ms | → 1.02x | 0 | — | — | 30m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.12% | 98.84% | 98.84% | 2621 ms | ↑ 1.13x | 5 | 47m | 10d ago | 24m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.69% | 80.69% | 2086 ms | ↑ 1.68x | 0 | — | — | 31m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 190 ms | → 0.99x | 0 | — | — | 43m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.28% | 69.60% | 69.60% | 3885 ms | ↓ 0.92x | 8 | 9m | 9d ago | 38m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2779 ms | ↑ 1.08x | 0 | — | — | 41m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1109 ms | ↓ 0.67x | 0 | — | — | 24m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 2345 ms | → 0.99x | 1 | 0s | 14d ago | 38m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 3204 ms | ↓ 0.92x | 1 | 0s | 17d ago | 43m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.14% | 81.14% | 2489 ms | → 0.99x | 0 | — | — | 31m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.36% | 87.36% | 3482 ms | ↑ 1.91x | 0 | — | — | 31m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.27% | 96.27% | 2519 ms | ↑ 1.12x | 1 | 0s | 12d ago | 32m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1977 ms | ↑ 1.38x | 0 | — | — | 41m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.69% | 98.69% | 809 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.57% | 25.57% | 1043 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.75% | 97.75% | 471 ms | ↓ 0.56x | 1 | 0s | 20d ago | 26m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 800 ms | → 1.00x | 0 | — | — | 29m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.08% | 63.08% | 2903 ms | ↑ 1.09x | 1 | 0s | 12d ago | 31m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 42.01% | 42.01% | 529 ms | ↓ 0.62x | 0 | — | — | 42m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.66% | 93.42% | 93.42% | 28 ms | ↑ 1.15x | 1 | 1h 22m | 9d ago | 26m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.12% | 22.12% | 1443 ms | ↓ 0.95x | 0 | — | — | 41m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 498 ms | ↓ 0.44x | 0 | — | — | 24m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.58% | 99.58% | 2811 ms | ↑ 1.33x | 1 | 0s | 16d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2699 ms | ↓ 0.58x | 0 | — | — | 24m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 473 ms | ↓ 0.78x | 0 | — | — | 24m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.69% | 93.69% | 4716 ms | → 1.01x | 0 | — | — | 42m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.62% | 99.62% | 1809 ms | → 0.96x | 0 | — | — | 41m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.87% | 99.97% | 99.97% | 2234 ms | → 1.02x | 2 | 0s | 12d ago | 30m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1255 ms | ↑ 1.16x | 0 | — | — | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1673 ms | ↑ 1.11x | 0 | — | — | 24m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2526 ms | ↑ 1.13x | 0 | — | — | 43m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1639 ms | ↓ 0.88x | 0 | — | — | 41m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 402 ms | ↓ 0.89x | 0 | — | — | 44m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 53.20% | 88.88% | 88.88% | 1813 ms | ↓ 0.90x | 1 | 12d 20h | 29d ago | 41m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.55% | 48.84% | 48.84% | 2973 ms | → 1.05x | 12 | 23m | 15d ago | 42m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.89% | 98.89% | 2930 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.45% | 99.00% | 99.00% | 1159 ms | ↓ 0.67x | 4 | 1h 35m | 8d ago | 21m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.53% | 99.62% | 99.62% | 1168 ms | ↓ 0.78x | 4 | 15m | 14d ago | 21m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.33% | 99.38% | 99.38% | 4849 ms | ↑ 1.26x | 8 | 6m | 9d ago | 24m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.30% | 89.30% | 2267 ms | → 1.04x | 0 | — | — | 30m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1294 ms | ↑ 1.05x | 0 | — | — | 26m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1875 ms | → 1.01x | 0 | — | — | 24m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1734 ms | ↓ 0.90x | 0 | — | — | 42m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1073 ms | ↓ 0.68x | 0 | — | — | 43m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1224 ms | ↓ 0.64x | 1 | 0s | 26d ago | 23m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 994 ms | ↓ 0.77x | 0 | — | — | 43m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.21% | 76.21% | 1026 ms | → 0.97x | 1 | 0s | 10d ago | 29m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 817 ms | → 0.96x | 0 | — | — | 40m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.09% | 85.09% | 2850 ms | ↑ 1.10x | 0 | — | — | 38m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.20% | 98.87% | 98.87% | 1783 ms | → 0.99x | 5 | 36m | 11d ago | 30m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.30% | 98.30% | 2756 ms | ↑ 1.09x | 0 | — | — | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 2221 ms | ↑ 1.14x | 1 | 0s | 19d ago | 22m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.73% | 99.85% | 99.85% | 1608 ms | ↑ 1.17x | 2 | 30m | 10d ago | 23m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.92% | 97.92% | 3780 ms | ↑ 1.35x | 1 | 0s | 26d ago | 25m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.36% | 95.36% | 95.36% | 1655 ms | → 0.95x | 4 | 6h 14m | 15d ago | 24m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.86% | 98.86% | 1672 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1821 ms | ↓ 0.92x | 0 | — | — | 40m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.65% | 99.65% | 2636 ms | → 1.00x | 0 | — | — | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.80% | 98.05% | 98.05% | 3906 ms | → 1.00x | 2 | 10m | 8d ago | 28m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 870 ms | → 0.99x | 0 | — | — | 24m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.73% | 98.70% | 98.70% | 1099 ms | ↑ 1.15x | 3 | 10m | 19d ago | 29m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.81% | 99.81% | 99.81% | 1323 ms | ↑ 1.05x | 2 | 0s | 14d ago | 22m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.10% | 32.10% | 1166 ms | → 1.04x | 0 | — | — | 40m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1341 ms | ↓ 0.90x | 0 | — | — | 30m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.44% | 98.44% | 2275 ms | → 1.03x | 1 | 0s | 14d ago | 30m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 49.16% | 54.83% | 54.83% | 1403 ms | → 0.96x | 1 | 13d 10h | 30d ago | 21m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1821 ms | → 1.04x | 0 | — | — | 40m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.17% | 89.17% | 3817 ms | → 1.04x | 0 | — | — | 30m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.89% | 16.02% | 16.02% | 2821 ms | → 0.98x | 1 | 0s | 9d ago | 38m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.69% | 96.69% | 3087 ms | ↑ 1.09x | 1 | 0s | 13d ago | 32m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1833 ms | ↑ 1.09x | 1 | 0s | 22d ago | 40m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.14% | 22.14% | 1950 ms | → 0.95x | 0 | — | — | 42m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 605 ms | ↓ 0.76x | 0 | — | — | 24m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.38% | 97.38% | 2704 ms | ↑ 1.11x | 0 | — | — | 27m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2328 ms | → 1.00x | 0 | — | — | 40m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.81% | 99.93% | 99.93% | 1626 ms | ↑ 1.48x | 2 | 10m | 22d ago | 42m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 23.66% | 23.66% | 3710 ms | ↑ 1.10x | 1 | 0s | 13d ago | 32m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.69% | 21.69% | 2000 ms | → 0.96x | 0 | — | — | 32m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.73% | 99.75% | 99.75% | 4151 ms | → 1.04x | 4 | 0s | 9d ago | 28m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.60% | 99.74% | 99.74% | 3291 ms | ↑ 1.36x | 2 | 60m | 24d ago | 24m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2861 ms | ↑ 1.05x | 0 | — | — | 29m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1815 ms | ↓ 0.87x | 0 | — | — | 42m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.43% | 99.62% | 99.62% | 2047 ms | ↓ 0.93x | 1 | 3h 60m | 15d ago | 40m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2081 ms | ↑ 1.41x | 0 | — | — | 40m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 312 ms | → 0.96x | 0 | — | — | 23m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.74% | 98.74% | 1506 ms | → 1.01x | 0 | — | — | 27m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.87% | 99.81% | 99.81% | 2134 ms | → 0.96x | 2 | 0s | 9d ago | 38m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.16% | 99.16% | 1549 ms | ↓ 0.85x | 1 | 0s | 29d ago | 42m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 328 ms | ↓ 0.53x | 0 | — | — | 41m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 888 ms | ↑ 1.21x | 0 | — | — | 21m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.97% | 99.88% | 93.35% | 93.35% | 3299 ms | ↓ 0.83x | 3 | 17m | 3d ago | 44m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.93% | 99.91% | 35.60% | 35.60% | 1916 ms | ↓ 0.93x | 3 | 21s | 3d ago | 44m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.85% | 99.95% | 98.87% | 98.87% | 1853 ms | ↓ 0.88x | 1 | 0s | 3d ago | 43m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.85% | 99.65% | 99.28% | 99.28% | 750 ms | ↓ 0.65x | 3 | 30m | 3d ago | 43m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.83% | 99.25% | 91.75% | 91.75% | 2704 ms | ↓ 0.82x | 31 | 2s | 3d ago | 44m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.79% | 98.68% | 99.74% | 99.74% | 2067 ms | → 1.00x | 4 | 1h 38m | 3d ago | 43m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.59% | 99.94% | 98.92% | 98.92% | 1122 ms | ↓ 0.87x | 1 | 0s | 11h ago | 41m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.58% | 99.61% | 86.06% | 86.06% | 2378 ms | → 1.02x | 7 | 0s | 1d ago | 43m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.51% | 99.29% | 98.76% | 98.76% | 4505 ms | → 0.97x | 29 | 3s | 17h ago | 44m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.50% | 99.87% | 99.87% | 99.87% | 2902 ms | → 0.96x | 2 | 0s | 18h ago | 39m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.49% | 98.22% | 21.31% | 21.31% | 3558 ms | ↓ 0.86x | 27 | 0s | 7d ago | 37m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.49% | 99.54% | 21.81% | 21.81% | 2744 ms | ↓ 0.75x | 6 | 5m | 4d ago | 37m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.47% | 99.80% | 90.74% | 90.74% | 2246 ms | → 1.01x | 3 | 0s | 13h ago | 30m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.47% | 99.53% | 90.88% | 90.88% | 839 ms | → 0.98x | 7 | 0s | 4d ago | 30m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.47% | 99.33% | 96.08% | 96.08% | 3555 ms | ↑ 1.06x | 4 | 41m | 2d ago | 30m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.47% | 99.80% | 23.94% | 23.94% | 652 ms | ↓ 0.52x | 3 | 0s | 6d ago | 32m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.47% | 99.67% | 24.37% | 24.37% | 1484 ms | ↓ 0.94x | 5 | 0s | 6d ago | 32m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.46% | 99.73% | 99.86% | 99.86% | 1742 ms | ↑ 1.17x | 3 | 7m | 6d ago | 26m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 99.46% | 99.66% | 80.49% | 80.49% | 2070 ms | → 1.01x | 3 | 20m | 7d ago | 29m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.46% | 98.05% | 92.74% | 92.74% | 684 ms | → 1.03x | 14 | 25m | 6d ago | 26m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.46% | 97.25% | 98.42% | 98.42% | 3945 ms | → 1.05x | 15 | 50m | 22h ago | 28m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.46% | 99.93% | 99.81% | 99.81% | 1225 ms | ↑ 1.13x | 1 | 0s | 4d ago | 26m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.46% | 99.40% | 96.97% | 96.97% | 1769 ms | → 0.96x | 4 | 35m | 2d ago | 26m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.46% | 94.28% | 95.76% | 95.76% | 803 ms | ↓ 0.24x | 11 | 2h 55m | 2d ago | 26m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.45% | 99.53% | 99.71% | 99.71% | 1230 ms | ↓ 0.58x | 3 | 39m | 7d ago | 24m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.45% | 99.73% | 99.64% | 99.64% | 1558 ms | ↓ 0.53x | 4 | 0s | 2d ago | 23m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.45% | 99.46% | 86.92% | 86.92% | 1430 ms | ↓ 0.71x | 7 | 4m | 6d ago | 23m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.45% | 99.90% | 99.90% | 99.90% | 1277 ms | ↑ 1.15x | 1 | 0s | 7d ago | 24m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.45% | 99.87% | 99.20% | 99.20% | 1523 ms | ↑ 1.05x | 2 | 0s | 7d ago | 24m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.45% | 99.42% | 99.42% | 99.42% | 2776 ms | ↓ 0.91x | 2 | 59m | 7d ago | 23m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.45% | 99.87% | 99.89% | 99.89% | 2715 ms | ↑ 1.28x | 2 | 0s | 7d ago | 22m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.45% | 98.36% | 98.36% | 98.36% | 2086 ms | ↓ 0.86x | 13 | 8m | 6d ago | 23m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.45% | 99.90% | 99.90% | 99.90% | 2138 ms | → 1.01x | 1 | 0s | 2d ago | 22m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.20% | 99.50% | 22.10% | 22.10% | 2155 ms | → 1.02x | 7 | 9m | 24h ago | 42m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.16% | 99.67% | 63.75% | 63.75% | 2949 ms | → 1.00x | 6 | 0s | 1d ago | 43m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.15% | 99.49% | 99.00% | 99.00% | 3970 ms | → 0.99x | 8 | 0s | 3d ago | 40m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.15% | 99.55% | 99.17% | 99.17% | 4196 ms | → 1.01x | 7 | 0s | 3d ago | 40m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (61)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.94% | 98.27% | 68.36% | 68.36% | 4668 ms | → 0.99x | 22 | 5m | 6d ago | 30m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.94% | 99.27% | 69.33% | 69.33% | 1518 ms | ↑ 1.10x | 9 | 7m | 6d ago | 31m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.94% | 98.40% | 86.66% | 86.66% | 4477 ms | ↑ 1.08x | 23 | 1m | 17h ago | 32m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 98.94% | 99.73% | 22.82% | 22.82% | 1171 ms | ↓ 0.85x | 3 | 8m | 3d ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.94% | 98.80% | 91.71% | 91.71% | 1827 ms | ↑ 1.20x | 17 | 2m | 2d ago | 30m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.92% | 97.25% | 97.90% | 97.90% | 4142 ms | → 1.00x | 22 | 24m | 14h ago | 28m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.92% | 99.87% | 91.63% | 91.63% | 446 ms | → 0.98x | 1 | 30m | 4d ago | 29m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.92% | 76.29% | 92.65% | 92.65% | 4625 ms | ↑ 1.48x | 5 | 1d 5h | 6d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 98.92% | 99.73% | 98.06% | 98.06% | 627 ms | ↓ 0.90x | 4 | 0s | 20h ago | 25m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.91% | 99.80% | 98.97% | 98.97% | 2405 ms | ↑ 2.60x | 2 | 10m | 5d ago | 22m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 98.91% | 99.86% | 99.86% | 99.86% | 2954 ms | ↑ 1.21x | 2 | 0s | 18h ago | 22m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.72% | 97.44% | 21.39% | 21.39% | 3109 ms | ↑ 1.22x | 39 | 30s | 21h ago | 40m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.47% | 99.80% | 97.92% | 97.92% | 2800 ms | ↓ 0.82x | 1 | 1h | 3d ago | 37m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.41% | 99.73% | 97.55% | 97.55% | 2272 ms | → 1.04x | 4 | 0s | 6h ago | 32m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.41% | 99.67% | 93.00% | 93.00% | 1597 ms | ↓ 0.89x | 3 | 17m | 5d ago | 30m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.41% | 97.94% | 96.74% | 96.74% | 4362 ms | → 0.99x | 12 | 46m | 6d ago | 32m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.41% | 99.60% | 99.81% | 99.81% | 3550 ms | ↑ 1.84x | 4 | 15m | 7d ago | 32m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.37% | 99.68% | 99.65% | 99.65% | 1620 ms | → 1.01x | 4 | 1h 12m | 18h ago | 41m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.36% | 97.17% | 91.92% | 91.92% | 4336 ms | → 1.04x | 17 | 30m | 6d ago | 24m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.36% | 98.58% | 98.60% | 98.60% | 3165 ms | ↑ 1.15x | 21 | 0s | 3d ago | 22m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.88% | 98.40% | 73.63% | 73.63% | 906 ms | → 0.98x | 9 | 50m | 3d ago | 31m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.88% | 95.94% | 83.42% | 83.42% | 4785 ms | → 1.00x | 55 | 3m | 16h ago | 30m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.85% | 99.46% | 91.97% | 91.97% | 3306 ms | ↑ 1.10x | 8 | 0s | 3d ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 97.81% | 99.12% | 96.70% | 96.70% | 2340 ms | ↑ 1.12x | 12 | 59m | 3d ago | 24m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.81% | 92.39% | 92.39% | 92.39% | 4595 ms | → 0.96x | 27 | 1h 22m | 18h ago | 22m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.65% | 78.94% | 77.76% | 77.76% | 3967 ms | → 1.00x | 76 | 4h 29m | 1d ago | 44m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.31% | 96.86% | 86.69% | 86.69% | 4831 ms | → 1.01x | 35 | 9m | 5d ago | 29m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 97.27% | 99.66% | 99.79% | 99.79% | 1388 ms | → 1.03x | 2 | 36m | 6d ago | 24m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 96.72% | 99.20% | 99.20% | 99.20% | 364 ms | ↓ 0.86x | 10 | 2m | 2d ago | 24m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.60% | 97.96% | 86.12% | 86.12% | 4483 ms | → 1.00x | 30 | 2m | 20h ago | 40m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.48% | 96.66% | 75.13% | 75.13% | 4432 ms | ↓ 0.80x | 42 | 8m | 6h ago | 38m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.46% | 98.95% | 48.32% | 48.32% | 1455 ms | ↑ 1.06x | 7 | 30m | 3d ago | 43m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 96.24% | 12.49% | 44.57% | 44.57% | 2334 ms | → 0.99x | 4 | 6d 1h | 14h ago | 28m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 96.17% | 76.67% | 82.78% | 82.78% | 1443 ms | → 1.01x | 5 | 1d 6h | 1h ago | 24m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 96.17% | 96.08% | 99.48% | 99.48% | 3173 ms | ↓ 0.74x | 3 | 9h 27m | 5d ago | 43m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 95.98% | 97.32% | 96.54% | 96.54% | 2010 ms | ↑ 1.11x | 8 | 1h 41m | 4d ago | 38m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.70% | 96.11% | 84.54% | 84.54% | 4634 ms | → 1.04x | 51 | 4m | 19h ago | 28m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 95.63% | 99.35% | 99.35% | 99.35% | 1239 ms | ↓ 0.91x | 3 | 2h | 8h ago | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 95.63% | 97.37% | 98.45% | 98.45% | 2180 ms | ↑ 1.16x | 6 | 2h 13m | 4d ago | 24m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 95.16% | 97.52% | 53.56% | 53.56% | 3971 ms | ↑ 1.32x | 35 | 1m | 2h ago | 28m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 95.08% | 96.91% | 96.91% | 96.91% | 4673 ms | ↑ 1.08x | 29 | 3m | 14h ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 94.90% | 96.12% | 98.45% | 98.45% | 3947 ms | ↓ 0.91x | 57 | 1m | 24h ago | 37m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.71% | 93.27% | 73.54% | 73.54% | 1766 ms | → 1.02x | 21 | 1h 21m | 4d ago | 31m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 94.54% | 98.58% | 98.84% | 98.84% | 2128 ms | ↑ 1.17x | 13 | 15m | 5d ago | 24m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 93.99% | 89.41% | 93.29% | 93.29% | 962 ms | ↓ 0.55x | 86 | 20m | 6d ago | 24m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 92.90% | 98.18% | 97.17% | 97.17% | 2263 ms | ↑ 1.13x | 11 | 42m | 5d ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.25% | 88.78% | 59.70% | 59.70% | 4257 ms | ↑ 1.08x | 136 | 6m | 4h ago | 27m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 89.07% | 92.38% | 90.98% | 90.98% | 1124 ms | ↓ 0.90x | 23 | 1h 44m | 6d ago | 22m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 88.89% | 98.53% | 98.34% | 98.34% | 1770 ms | → 0.96x | 2 | 3h 26m | 6d ago | 30m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.36% | 87.36% | 22.35% | 22.35% | 4480 ms | → 1.02x | 143 | 12m | 18h ago | 32m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.87% | 74.38% | 81.16% | 81.16% | 3991 ms | ↓ 0.92x | 165 | 35m | 4h ago | 21m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 78.49% | 96.72% | 55.51% | 55.51% | 905 ms | ↑ 1.66x | 9 | 1h 48m | 6d ago | 29m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 77.78% | 72.42% | 26.41% | 26.41% | 4584 ms | ↓ 0.93x | 252 | 18m | 7h ago | 30m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 75.12% | 72.45% | 62.86% | 62.86% | 4838 ms | → 0.99x | 278 | 16m | 4h ago | 39m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 68.83% | 68.10% | 96.36% | 96.36% | 4558 ms | ↑ 1.10x | 282 | 22m | 21h ago | 41m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 63.93% | 95.08% | 96.84% | 96.84% | 1606 ms | ↓ 0.69x | 3 | 17h 47m | 6d ago | 24m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 63.44% | 76.90% | 82.43% | 82.43% | 1341 ms | ↓ 0.53x | 22 | 7h 27m | 13h ago | 27m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 35.52% | 58.19% | 78.46% | 78.46% | 4965 ms | ↑ 1.66x | 170 | 1h 20m | 2h ago | 25m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 15.59% | 1.94% | 24.10% | 24.10% | 2654 ms | → 1.00x | 1 | 27d 6h | 30d ago | 29m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 11.11% | 1.66% | 39.24% | 39.24% | 1354 ms | → 1.00x | 1 | 28d 21h | 30d ago | 40m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 3.55% | 59.54% | 95.63% | 95.63% | 3242 ms | → 1.02x | 3 | 2d 21h | 10d ago | 43m ago |

</details>

<details open>
<summary><strong>🔴 Down (264)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.60% | 98.74% | 99.58% | 99.58% | 2496 ms | ↓ 0.79x | 19 | 2m | 42m ago | 42m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 95.98% | 95.03% | 20.04% | 20.04% | 3396 ms | ↑ 1.15x | 71 | 2m | 38m ago | 38m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 89.29% | 98.03% | 20.07% | 20.07% | 2433 ms | ↓ 0.76x | 7 | 3h 2m | 21h ago | 36m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 87.10% | 26.06% | 65.18% | 65.18% | 1994 ms | ↓ 0.93x | 3 | 6d 16h | 23h ago | 28m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 87.06% | 98.24% | 99.41% | 99.41% | 2035 ms | → 0.97x | 2 | 11h 48m | 1d ago | 39m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 86.89% | 67.30% | 34.92% | 34.92% | 3169 ms | → 1.00x | 173 | 48m | 22m ago | 22m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 86.85% | 97.92% | 96.69% | 96.69% | 2736 ms | ↓ 0.89x | 1 | 1d 12h | 2d ago | 42m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 85.19% | 43.61% | 32.43% | 32.43% | 1057 ms | ↓ 0.91x | 4 | 4d 3h | 2d ago | 31m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 83.60% | 65.14% | 32.94% | 32.94% | 2405 ms | ↑ 1.10x | 3 | 3d 21h | 3d ago | 32m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 39.25% | 20.50% | 26.15% | 26.15% | 1922 ms | ↓ 0.93x | 3 | 8d 5h | 6d ago | 26m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 35.94% | 77.97% | 94.16% | 94.16% | 3647 ms | → 1.01x | 11 | 6h 8m | 3d ago | 43m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 31.69% | 91.57% | 95.68% | 95.68% | 216 ms | ↓ 0.30x | 1 | 5d 24h | 6d ago | 24m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 17.84% | 89.77% | 95.18% | 95.18% | 278 ms | ↓ 0.86x | 2 | 3d 4h | 6d ago | 26m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 6.01% | 88.33% | 88.11% | 88.11% | 154 ms | ↓ 0.23x | 2 | 3d 9h | 7d ago | 22m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.67% | 1.73% | 50.49% | 50.49% | 4013 ms | ↓ 0.90x | 73 | 9h 32m | 1d ago | 44m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.50% | 22.19% | 49.53% | 49.53% | 2175 ms | ↑ 1.10x | 6 | 3d 23h | 4d ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.20% | 77.20% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.12% | 64.12% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.01% | 69.01% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 38.72% | 38.72% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.66% | 72.66% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.08% | 54.08% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.27% | 5.27% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.36% | 10.36% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.22% | 49.22% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 53.74% | 79.62% | 79.62% | — | — | 17 | 21h 57m | 16d ago | 23m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.17% | 3.17% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 29.44% | 83.20% | 83.20% | — | — | 1 | 22d 2h | 22d ago | 26m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.63% | 77.63% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.08% | 34.08% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.73% | 84.73% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.52% | 21.52% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 68.09% | 68.09% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.68% | 45.68% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.51% | 27.51% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 8.39% | 85.74% | 85.74% | — | — | 1 | 27d 12h | 28d ago | 42m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 76.23% | 76.23% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.62% | 58.62% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.87% | 71.87% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 43m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.47% | 13.47% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.38% | 45.38% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.52% | 88.52% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.97% | 30.97% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 41.54% | 74.07% | 74.07% | — | — | 1 | 18d 22h | 19d ago | 23m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.42% | 78.42% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 38.12% | 37.15% | 37.15% | — | — | 3 | 6d 5h | 19d ago | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 8.65% | 81.40% | 81.40% | — | — | 1 | 27d 14h | 28d ago | 28m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 61.70% | 82.16% | 82.16% | — | — | 6 | 2d 6h | 13d ago | 24m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 49.09% | 77.93% | 77.93% | — | — | 1 | 17d | 17d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.27% | 78.27% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.44% | 26.44% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.47% | 48.47% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.92% | 1.92% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.53% | 85.53% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 25.96% | 37.19% | 37.19% | — | — | 1 | 23d | 23d ago | 22m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.10% | 67.10% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 53.33% | 47.11% | 47.11% | — | — | 2 | 8d 1h | 10d ago | 31m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.33% | 68.33% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 42.41% | 74.58% | 74.58% | — | — | 3 | 6d 5h | 19d ago | 25m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 56.17% | 42.42% | 42.42% | — | — | 5 | 3d 2h | 11d ago | 23m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 55.70% | 65.70% | 65.70% | — | — | 6 | 2d 13h | 11d ago | 30m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.24% | 27.24% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.08% | 51.08% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.77% | 45.77% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.47% | 22.47% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 69.21% | 69.21% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 39.15% | 39.15% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 3h | 28d ago | 21m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.54% | 51.79% | 51.79% | — | — | 1 | 29d 20h | 30d ago | 25m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 47.28% | 47.28% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.84% | 21.84% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.76% | 4.76% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.45% | 61.45% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 76.20% | 76.20% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 25.74% | 71.92% | 71.92% | — | — | 1 | 23d 2h | 23d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.73% | 5.73% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.47% | 74.47% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 75.13% | 75.13% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.20% | 29.20% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 12.06% | 86.06% | 86.06% | — | — | 1 | 26d 15h | 27d ago | 30m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.99% | 20.99% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.44% | 49.44% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 63.03% | 85.00% | 85.00% | — | — | 1 | 12d 15h | 13d ago | 42m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 20.89% | 20.89% | 20.89% | — | — | 2 | 9d 1h | 18d ago | 23m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 42.35% | 72.98% | 72.98% | — | — | 4 | 4d 16h | 19d ago | 25m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 65.68% | 84.54% | 84.54% | — | — | 3 | 4d 6h | 13d ago | 23m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 41.87% | 79.05% | 79.05% | — | — | 12 | 1d 13h | 19d ago | 25m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.05% | 49.05% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 16.83% | 17.52% | 17.52% | — | — | 8 | 2d 8h | 19d ago | 25m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.50% | 6.50% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.71% | 57.71% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.76% | 43.76% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 19.58% | 19.58% | 19.58% | — | — | 3 | 7d 17h | 23d ago | 24m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.66% | 39.66% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 34.89% | 75.26% | 75.26% | — | — | 3 | 5d 21h | 18d ago | 43m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.15% | 22.15% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 69.40% | 69.40% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.09% | 55.09% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 58.46% | 81.65% | 81.65% | — | — | 1 | 14d 15h | 15d ago | 24m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.01% | 36.01% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 67.90% | 67.90% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.62% | 72.62% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 65.23% | 65.23% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.38% | 2.38% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.98% | 77.98% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.14% | 39.14% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.69% | 91.69% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.96% | 77.96% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.65% | 30.65% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 76.07% | 76.07% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.66% | 44.66% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 18.26% | 18.26% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.75% | 40.75% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.83% | 66.83% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.55% | 59.55% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.05% | 25.05% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 2h | 28d ago | 24m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.26% | 74.26% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 2h | 28d ago | 24m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 44.87% | 44.87% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.93% | 2.93% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 3h | 28d ago | 24m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.08% | 40.08% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.79% | 71.79% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.49% | 55.49% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 24.51% | 24.51% | 24.51% | — | — | 1 | 21d 24h | 22d ago | 24m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.48% | 35.48% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 54.83% | 54.83% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.52% | 83.52% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 31.66% | 93.80% | 93.80% | — | — | 2 | 9d 22h | 20d ago | 43m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.52% | 23.52% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.02% | 11.02% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.62% | 22.62% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.74% | 49.74% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 87.40% | 87.40% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 49.88% | 49.88% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 67.48% | 67.48% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 83.31% | 95.32% | 95.32% | — | — | 2 | 4d 1h | 8d ago | 29m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.20% | 8.20% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.57% | 46.57% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 14.63% | 47.38% | 47.38% | — | — | 1 | 25d 23h | 26d ago | 29m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.08% | 18.08% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.91% | 51.91% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.47% | 89.47% | — | — | 1 | 21d 21h | 22d ago | 36m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.21% | 36.21% | — | — | 1 | 28d 3h | 28d ago | 31m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.11% | 20.11% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 29.97% | 29.97% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.22% | 5.22% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.05% | 74.05% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.76% | 84.76% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 50.22% | 50.22% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.87% | 77.87% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.86% | 76.86% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 53.07% | 53.07% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.60% | 69.60% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.70% | 76.70% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 22h | 22d ago | 24m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.35% | 18.35% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.97% | 54.97% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.79% | 36.79% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.83% | 3.83% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.01% | 32.01% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.37% | 64.37% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.85% | 22.85% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.85% | 6.85% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.68% | 54.68% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.37% | 24.37% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.44% | 63.44% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.70% | 32.70% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 42.41% | 74.14% | 74.14% | — | — | 3 | 6d 5h | 19d ago | 24m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.08% | 4.08% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 20h | 22d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 46.75% | 46.75% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.35% | 40.35% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.19% | 31.19% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.12% | 18.12% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.15% | 5.15% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.49% | 10.49% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.91% | 16.91% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.33% | 15.33% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.05% | 27.05% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.18% | 9.18% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.98% | 6.98% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.73% | 0.73% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.15% | 4.15% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.81% | 4.81% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.89% | 46.89% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 38.49% | 38.49% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.89% | 77.89% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 65.73% | 65.73% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.50% | 41.50% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.22% | 78.22% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.70% | 45.70% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.86% | 38.86% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.46% | 1.46% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.96% | 17.96% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 3h | 28d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.11% | 76.11% | — | — | 1 | 29d 23h | 30d ago | 35m ago |

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
