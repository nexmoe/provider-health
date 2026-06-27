# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 357 🟢 operational · 51 🟡 degraded · 263 🔴 down · 0 ⚫ unknown

_Updated 2026-06-27 06:32 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (357)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.36% | 98.36% | 736 ms | → 1.04x | 0 | — | — | 14m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1563 ms | ↓ 0.94x | 0 | — | — | 11m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 94.09% | 94.09% | 2331 ms | ↑ 1.16x | 3 | 0s | 21d ago | 19m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 23.18% | 23.18% | 3244 ms | ↑ 1.29x | 4 | 0s | 17d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.52% | 97.52% | 3949 ms | ↑ 1.17x | 0 | — | — | 29m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.43% | 58.43% | 1635 ms | ↓ 0.88x | 0 | — | — | 17m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.92% | 99.92% | 99.92% | 1158 ms | ↓ 0.91x | 1 | 0s | 21d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 100.00% | 97.92% | 97.92% | 3812 ms | → 1.04x | 0 | — | — | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.85% | 98.85% | 2089 ms | ↑ 1.08x | 0 | — | — | 31m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.55% | 99.55% | 3567 ms | ↑ 1.05x | 0 | — | — | 31m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.62% | 95.62% | 2912 ms | ↑ 1.17x | 0 | — | — | 15m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2379 ms | ↑ 1.27x | 0 | — | — | 13m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.90% | 97.90% | 3526 ms | ↑ 1.26x | 0 | — | — | 15m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.61% | 92.61% | 3563 ms | ↑ 1.35x | 1 | 50m | 16d ago | 31m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 2474 ms | ↑ 1.27x | 1 | 0s | 8d ago | 12m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1095 ms | ↑ 1.14x | 0 | — | — | 11m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1497 ms | ↑ 1.13x | 0 | — | — | 15m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.01% | 99.01% | 453 ms | ↓ 0.36x | 0 | — | — | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.15% | 39.15% | 859 ms | ↑ 1.27x | 0 | — | — | 25m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1563 ms | ↑ 1.13x | 0 | — | — | 11m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.12% | 97.12% | 3038 ms | ↑ 1.15x | 0 | — | — | 18m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.90% | 98.90% | 1134 ms | ↑ 1.14x | 2 | 15m | 18d ago | 27m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 79.03% | 67.89% | 67.89% | 2096 ms | ↑ 1.51x | 2 | 3d 2h | 11d ago | 15m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1356 ms | ↑ 1.27x | 0 | — | — | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.88% | 96.91% | 96.91% | 878 ms | ↑ 1.14x | 2 | 0s | 8d ago | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.41% | 88.28% | 88.28% | 2046 ms | ↑ 1.44x | 1 | 3h 51m | 29d ago | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.49% | 98.49% | 4197 ms | ↑ 1.20x | 0 | — | — | 16m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.64% | 99.64% | 1312 ms | ↑ 1.12x | 4 | 14m | 12d ago | 13m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.87% | 86.87% | 2590 ms | ↑ 1.41x | 0 | — | — | 15m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.95% | 99.95% | 1116 ms | → 0.97x | 1 | 0s | 14d ago | 12m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.83% | 97.83% | 1439 ms | ↑ 1.10x | 0 | — | — | 17m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.94% | 97.94% | 4140 ms | → 1.04x | 0 | — | — | 29m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.06% | 99.63% | 99.63% | 2208 ms | ↑ 1.09x | 2 | 3h 20m | 8d ago | 17m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 98.85% | 19.86% | 19.86% | 3499 ms | ↑ 1.05x | 9 | 31m | 7d ago | 25m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.56% | 96.56% | 823 ms | ↓ 0.93x | 0 | — | — | 17m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.68% | 86.41% | 86.41% | 1712 ms | ↓ 0.89x | 8 | 6h 40m | 18d ago | 14m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1135 ms | → 0.97x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1776 ms | ↓ 0.87x | 0 | — | — | 12m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.78% | 99.78% | 99.78% | 1541 ms | → 0.97x | 2 | 0s | 12d ago | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.88% | 99.03% | 99.03% | 2925 ms | → 1.00x | 2 | 0s | 9d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.87% | 99.87% | 1409 ms | ↑ 1.06x | 2 | 0s | 18d ago | 14m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.86% | 99.86% | 543 ms | ↓ 0.38x | 1 | 51m | 27d ago | 11m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 4078 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.73% | 99.73% | 819 ms | ↓ 0.89x | 1 | 0s | 26d ago | 15m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1215 ms | ↑ 1.06x | 0 | — | — | 11m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.01% | 98.01% | 98.01% | 4249 ms | ↑ 1.06x | 13 | 48m | 24d ago | 16m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.81% | 99.81% | 99.81% | 2121 ms | ↑ 1.05x | 1 | 30m | 14d ago | 11m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1124 ms | ↓ 0.74x | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 410 ms | ↓ 0.55x | 0 | — | — | 13m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.82% | 99.82% | 571 ms | → 0.98x | 4 | 0s | 16d ago | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.89% | 96.89% | 581 ms | ↓ 0.88x | 0 | — | — | 18m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.07% | 98.36% | 98.36% | 1974 ms | → 1.02x | 1 | 21h 30m | 23d ago | 11m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | → 0.95x | 0 | — | — | 11m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.23% | 56.23% | 1940 ms | ↑ 1.27x | 0 | — | — | 20m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.40% | 98.40% | 98.40% | 891 ms | → 0.99x | 2 | 4h 33m | 16d ago | 11m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.82% | 99.67% | 99.67% | 1739 ms | ↓ 0.61x | 3 | 0s | 9d ago | 12m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1718 ms | ↑ 1.29x | 0 | — | — | 12m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3741 ms | → 1.03x | 0 | — | — | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.23% | 97.23% | 1535 ms | → 1.01x | 0 | — | — | 25m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.16% | 99.16% | 1143 ms | ↓ 0.84x | 2 | 0s | 14d ago | 18m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.16% | 84.16% | 3368 ms | ↑ 1.25x | 0 | — | — | 19m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 872 ms | ↓ 0.88x | 0 | — | — | 13m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.80% | 98.80% | 2666 ms | ↑ 1.13x | 0 | — | — | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4490 ms | ↑ 1.20x | 0 | — | — | 12m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.13% | 93.13% | 721 ms | ↓ 0.89x | 0 | — | — | 20m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.77% | 98.77% | 1212 ms | ↑ 1.12x | 0 | — | — | 15m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 653 ms | ↑ 1.36x | 1 | 0s | 24d ago | 17m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.46% | 99.46% | 760 ms | ↓ 0.68x | 0 | — | — | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.08% | 98.08% | 2988 ms | ↓ 0.91x | 1 | 0s | 17d ago | 17m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.29% | 90.29% | 1258 ms | ↑ 1.18x | 1 | 0s | 20d ago | 15m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2258 ms | → 1.00x | 0 | — | — | 12m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.41% | 77.41% | 1391 ms | ↑ 1.22x | 0 | — | — | 19m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.71% | 96.55% | 96.55% | 1426 ms | ↑ 1.23x | 1 | 2h 1m | 9d ago | 11m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 937 ms | → 0.99x | 0 | — | — | 12m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.31% | 98.31% | 2495 ms | ↑ 1.08x | 0 | — | — | 17m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 920 ms | → 0.96x | 0 | — | — | 11m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2533 ms | ↑ 1.35x | 0 | — | — | 12m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1635 ms | ↓ 0.87x | 3 | 0s | 9d ago | 11m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 83.03% | 83.03% | 2431 ms | ↑ 1.20x | 2 | 0s | 18d ago | 19m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.08% | 98.08% | 3410 ms | ↑ 2.35x | 0 | — | — | 20m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2143 ms | ↑ 1.08x | 0 | — | — | 12m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.44% | 99.33% | 99.33% | 3869 ms | → 1.04x | 7 | 4h 6m | 12d ago | 25m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.87% | 61.87% | 1758 ms | → 1.00x | 0 | — | — | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.86% | 64.86% | 2025 ms | ↑ 1.17x | 0 | — | — | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.77% | 99.88% | 99.88% | 1250 ms | ↓ 0.80x | 1 | 1h 9m | 11d ago | 13m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2188 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1593 ms | ↓ 0.74x | 0 | — | — | 17m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.60% | 99.60% | 589 ms | ↓ 0.83x | 1 | 0s | 28d ago | 19m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.97% | 97.95% | 97.95% | 1841 ms | → 0.95x | 2 | 6h 16m | 12d ago | 19m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 89.04% | 89.90% | 89.90% | 3175 ms | ↓ 0.94x | 5 | 15h 33m | 15d ago | 11m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2499 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2721 ms | ↑ 1.29x | 0 | — | — | 11m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.07% | 99.07% | 3830 ms | → 1.03x | 0 | — | — | 29m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.22% | 98.22% | 3848 ms | ↑ 1.11x | 0 | — | — | 31m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.76% | 76.76% | 2452 ms | → 1.01x | 0 | — | — | 17m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2259 ms | ↑ 1.21x | 0 | — | — | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.47% | 98.24% | 98.24% | 1595 ms | ↑ 1.63x | 7 | 8m | 13d ago | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.41% | 99.67% | 99.67% | 1505 ms | ↑ 1.10x | 1 | 2h 60m | 19d ago | 13m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 2023 ms | ↑ 1.22x | 0 | — | — | 31m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 635 ms | ↓ 0.45x | 0 | — | — | 30m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2588 ms | ↑ 1.22x | 1 | 0s | 18d ago | 29m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.03% | 90.03% | 1571 ms | → 0.99x | 0 | — | — | 19m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.81% | 99.81% | 1271 ms | ↑ 1.31x | 0 | — | — | 30m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 581 ms | → 1.03x | 0 | — | — | 13m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1943 ms | ↑ 1.39x | 2 | 0s | 12d ago | 12m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.07% | 86.07% | 2910 ms | ↑ 1.19x | 0 | — | — | 15m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2198 ms | ↑ 1.11x | 0 | — | — | 12m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2334 ms | ↑ 1.27x | 0 | — | — | 15m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.07% | 99.07% | 973 ms | ↑ 1.28x | 0 | — | — | 20m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.67% | 97.67% | 2658 ms | ↑ 1.62x | 0 | — | — | 15m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.92% | 99.92% | 99.92% | 1662 ms | ↑ 1.14x | 1 | 0s | 21d ago | 11m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1645 ms | ↑ 1.19x | 1 | 0s | 13d ago | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.95% | 99.95% | 1836 ms | ↑ 1.51x | 1 | 0s | 18d ago | 12m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2227 ms | ↑ 1.15x | 0 | — | — | 12m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3218 ms | ↑ 1.50x | 0 | — | — | 20m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.16% | 90.16% | 1515 ms | ↑ 1.15x | 0 | — | — | 13m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.82% | 99.82% | 99.82% | 738 ms | ↑ 1.09x | 1 | 1h | 27d ago | 11m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.87% | 99.87% | 99.87% | 1108 ms | ↓ 0.62x | 1 | 0s | 13d ago | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.91% | 99.91% | 1475 ms | ↑ 1.11x | 2 | 11m | 28d ago | 11m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.52% | 25.52% | 2609 ms | ↑ 1.49x | 0 | — | — | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1584 ms | ↑ 1.26x | 0 | — | — | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2581 ms | → 1.03x | 0 | — | — | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 804 ms | ↑ 1.23x | 0 | — | — | 29m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.31% | 98.31% | 1788 ms | ↑ 1.11x | 1 | 0s | 9d ago | 14m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.19% | 98.19% | 971 ms | ↓ 0.78x | 0 | — | — | 18m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 710 ms | → 0.98x | 0 | — | — | 30m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.75% | 99.75% | 1649 ms | → 1.02x | 4 | 8m | 21d ago | 24m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.77% | 98.77% | 4759 ms | → 1.03x | 0 | — | — | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2822 ms | → 0.97x | 0 | — | — | 29m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 69 ms | → 1.00x | 0 | — | — | 11m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.64% | 32.81% | 32.81% | 2303 ms | ↑ 1.11x | 8 | 1h 36m | 13d ago | 27m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.43% | 97.96% | 97.96% | 2095 ms | ↑ 1.12x | 126 | 29m | 17d ago | 29m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2749 ms | → 1.02x | 0 | — | — | 25m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.36% | 99.36% | 2425 ms | ↑ 1.19x | 2 | 0s | 18d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 43.47% | 43.47% | 878 ms | ↓ 0.94x | 1 | 0s | 17d ago | 30m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1132 ms | → 0.97x | 0 | — | — | 29m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2923 ms | → 1.00x | 0 | — | — | 25m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.83% | 99.82% | 99.82% | 1519 ms | → 1.05x | 2 | 14m | 21d ago | 17m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 20.80% | 20.80% | 742 ms | → 0.97x | 1 | 0s | 14d ago | 29m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2641 ms | ↑ 1.07x | 0 | — | — | 19m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 718 ms | ↓ 0.60x | 0 | — | — | 14m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 534 ms | → 1.01x | 0 | — | — | 11m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 754 ms | → 1.02x | 0 | — | — | 30m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.41% | 62.41% | 1555 ms | → 1.00x | 0 | — | — | 20m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.79% | 87.16% | 87.16% | 697 ms | ↓ 0.76x | 6 | 1d 6h | 10d ago | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.31% | 83.86% | 83.86% | 1648 ms | ↑ 1.30x | 3 | 8h 40m | 18d ago | 14m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2816 ms | → 1.04x | 0 | — | — | 29m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.82% | 98.82% | 1712 ms | → 0.97x | 2 | 2h 55m | 13d ago | 13m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.53% | 89.53% | 2067 ms | ↑ 1.13x | 1 | 0s | 14d ago | 29m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.54% | 23.30% | 23.30% | 1653 ms | → 1.00x | 4 | 30m | 11d ago | 20m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.53% | 98.97% | 98.97% | 3166 ms | → 0.97x | 4 | 30m | 11d ago | 18m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.16% | 80.62% | 80.62% | 2226 ms | ↑ 1.06x | 1 | 13h | 24d ago | 31m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.90% | 88.90% | 805 ms | ↓ 0.79x | 2 | 0s | 13d ago | 13m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1187 ms | → 1.01x | 1 | 0s | 17d ago | 29m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1090 ms | → 0.96x | 0 | — | — | 30m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.94% | 99.66% | 99.66% | 1340 ms | ↑ 1.11x | 1 | 0s | 13d ago | 28m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 47.60% | 47.60% | 562 ms | → 1.02x | 1 | 0s | 17d ago | 17m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1730 ms | ↑ 1.32x | 0 | — | — | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 848 ms | → 0.97x | 0 | — | — | 14m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.62% | 98.62% | 1767 ms | ↑ 1.12x | 0 | — | — | 15m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.71% | 98.26% | 98.26% | 458 ms | ↓ 0.59x | 1 | 1h 40m | 9d ago | 15m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.79% | 96.79% | 1358 ms | ↑ 1.31x | 2 | 45m | 16d ago | 15m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.12% | 71.12% | 1572 ms | ↑ 1.22x | 0 | — | — | 19m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1302 ms | ↑ 1.07x | 0 | — | — | 11m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1236 ms | → 0.95x | 0 | — | — | 11m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.78% | 81.78% | 3364 ms | ↑ 1.32x | 1 | 0s | 17d ago | 19m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2092 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 710 ms | ↓ 0.37x | 0 | — | — | 12m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 666 ms | ↓ 0.75x | 1 | 0s | 18d ago | 24m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 88.26% | 37.13% | 37.13% | 1960 ms | → 1.02x | 14 | 5h 29m | 9d ago | 19m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 59.50% | 28.36% | 28.36% | 2986 ms | ↑ 1.06x | 2 | 6d 3h | 18d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.92% | 85.92% | 1342 ms | ↑ 1.60x | 0 | — | — | 28m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.58% | 91.58% | 512 ms | ↑ 1.14x | 0 | — | — | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2652 ms | ↑ 1.12x | 0 | — | — | 19m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.71% | 98.89% | 98.89% | 3233 ms | ↑ 1.13x | 5 | 0s | 11d ago | 31m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.81% | 96.81% | 1497 ms | → 1.00x | 0 | — | — | 19m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.94% | 99.88% | 99.88% | 1809 ms | ↑ 1.30x | 1 | 0s | 30d ago | 12m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2965 ms | ↑ 1.06x | 0 | — | — | 30m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1590 ms | → 0.99x | 1 | 0s | 15d ago | 13m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4170 ms | ↑ 1.10x | 0 | — | — | 12m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.80% | 59.80% | 762 ms | → 1.02x | 0 | — | — | 20m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.48% | 43.48% | 3231 ms | ↑ 1.18x | 0 | — | — | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.25% | 99.25% | 4207 ms | → 1.04x | 1 | 0s | 29d ago | 25m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3487 ms | ↑ 1.09x | 0 | — | — | 30m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2593 ms | ↑ 1.16x | 0 | — | — | 18m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.27% | 92.48% | 92.48% | 2710 ms | → 0.97x | 2 | 19h 25m | 26d ago | 17m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2431 ms | ↑ 1.08x | 0 | — | — | 19m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.58% | 80.58% | 1659 ms | → 1.01x | 0 | — | — | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 189 ms | → 1.01x | 0 | — | — | 30m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2865 ms | ↑ 1.21x | 0 | — | — | 29m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1330 ms | ↓ 0.80x | 0 | — | — | 12m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2199 ms | → 1.05x | 1 | 0s | 9d ago | 25m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3455 ms | → 1.03x | 1 | 0s | 12d ago | 30m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.03% | 81.03% | 2759 ms | ↑ 1.15x | 0 | — | — | 19m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.28% | 87.28% | 3129 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1655 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.68% | 98.68% | 815 ms | ↑ 1.17x | 0 | — | — | 17m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.25% | 25.25% | 940 ms | ↑ 1.55x | 0 | — | — | 20m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.72% | 97.72% | 426 ms | ↓ 0.44x | 1 | 0s | 15d ago | 14m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 890 ms | → 1.05x | 0 | — | — | 17m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 40.39% | 40.39% | 815 ms | ↓ 0.81x | 0 | — | — | 29m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.92% | 98.92% | 1153 ms | → 0.99x | 1 | 5h 60m | 27d ago | 28m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.62% | 21.62% | 1574 ms | ↑ 1.13x | 0 | — | — | 28m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 623 ms | ↓ 0.49x | 0 | — | — | 13m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.57% | 99.57% | 2892 ms | ↑ 1.54x | 1 | 0s | 11d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3159 ms | ↓ 0.75x | 0 | — | — | 13m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 454 ms | ↓ 0.65x | 0 | — | — | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.65% | 93.65% | 4686 ms | → 1.03x | 0 | — | — | 29m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.61% | 99.61% | 2122 ms | ↑ 1.14x | 1 | 1h 20m | 28d ago | 29m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1080 ms | ↑ 1.14x | 0 | — | — | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1633 ms | → 1.03x | 0 | — | — | 12m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.89% | 46.45% | 46.45% | 1374 ms | → 1.03x | 2 | 0s | 8d ago | 30m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2582 ms | ↑ 1.39x | 0 | — | — | 30m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1703 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 474 ms | → 0.98x | 0 | — | — | 31m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 57.55% | 88.81% | 88.81% | 1899 ms | ↑ 1.11x | 1 | 12d 20h | 24d ago | 28m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.28% | 47.40% | 47.40% | 3391 ms | ↑ 1.20x | 19 | 15m | 10d ago | 29m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.88% | 98.88% | 2781 ms | → 0.97x | 0 | — | — | 14m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.82% | 96.82% | 3192 ms | → 1.03x | 0 | — | — | 29m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.59% | 99.60% | 99.60% | 1047 ms | ↓ 0.74x | 4 | 15m | 9d ago | 11m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.82% | 99.82% | 1013 ms | → 1.00x | 1 | 20m | 29d ago | 14m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.22% | 89.22% | 2625 ms | ↑ 1.22x | 0 | — | — | 18m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1251 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1662 ms | → 0.98x | 0 | — | — | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2024 ms | → 1.03x | 0 | — | — | 29m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1864 ms | ↑ 1.05x | 0 | — | — | 30m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1551 ms | ↓ 0.88x | 1 | 0s | 21d ago | 12m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1262 ms | → 0.99x | 0 | — | — | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1672 ms | → 1.04x | 0 | — | — | 28m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 85.03% | 85.03% | 1944 ms | → 0.99x | 1 | 0s | 26d ago | 25m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.94% | 98.28% | 98.28% | 2803 ms | ↑ 1.21x | 1 | 0s | 29d ago | 15m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.45% | 92.45% | 4562 ms | ↑ 1.16x | 2 | 25m | 16d ago | 31m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2244 ms | ↑ 1.38x | 1 | 0s | 14d ago | 11m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.89% | 97.89% | 3676 ms | ↑ 1.49x | 1 | 0s | 21d ago | 13m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.11% | 95.11% | 95.11% | 1500 ms | → 0.96x | 4 | 6h 14m | 10d ago | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.85% | 98.85% | 1539 ms | ↑ 1.27x | 0 | — | — | 19m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.76% | 98.76% | 1866 ms | → 1.02x | 0 | — | — | 28m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.64% | 99.64% | 2962 ms | ↑ 1.19x | 0 | — | — | 12m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1164 ms | ↑ 1.31x | 0 | — | — | 12m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.71% | 98.69% | 98.69% | 1247 ms | ↑ 1.34x | 4 | 7m | 14d ago | 18m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.79% | 99.79% | 99.79% | 1360 ms | → 1.03x | 2 | 0s | 9d ago | 11m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2590 ms | ↑ 1.23x | 0 | — | — | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.71% | 31.71% | 1343 ms | ↑ 1.20x | 0 | — | — | 27m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1600 ms | ↑ 1.27x | 0 | — | — | 18m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.94% | 98.42% | 98.42% | 2447 ms | ↑ 1.21x | 1 | 0s | 9d ago | 18m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 52.98% | 52.98% | 52.98% | 1320 ms | ↓ 0.90x | 1 | 13d 23h | 26d ago | 11m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1864 ms | ↑ 1.22x | 0 | — | — | 28m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.10% | 89.10% | 4069 ms | ↑ 1.22x | 0 | — | — | 19m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.94% | 96.68% | 96.68% | 3284 ms | ↑ 1.29x | 1 | 0s | 8d ago | 20m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2046 ms | ↑ 1.24x | 1 | 0s | 17d ago | 28m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 21.62% | 21.62% | 2169 ms | → 1.01x | 0 | — | — | 29m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 629 ms | ↓ 0.78x | 0 | — | — | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.35% | 97.35% | 2783 ms | ↑ 1.27x | 0 | — | — | 15m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2498 ms | ↑ 1.10x | 0 | — | — | 28m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1395 ms | ↑ 1.27x | 2 | 10m | 17d ago | 29m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.94% | 23.39% | 23.39% | 3893 ms | ↑ 1.34x | 1 | 0s | 8d ago | 20m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.41% | 21.41% | 2191 ms | ↑ 1.14x | 0 | — | — | 20m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.36% | 96.95% | 96.95% | 1632 ms | → 0.95x | 5 | 32m | 7d ago | 14m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.53% | 99.73% | 99.73% | 3079 ms | → 0.96x | 4 | 30m | 19d ago | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2912 ms | ↑ 1.06x | 0 | — | — | 17m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2137 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2135 ms | → 1.02x | 0 | — | — | 11m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.48% | 99.62% | 99.62% | 2446 ms | ↑ 1.09x | 1 | 3h 60m | 10d ago | 28m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 1975 ms | → 1.02x | 0 | — | — | 28m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 314 ms | → 0.96x | 0 | — | — | 12m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.73% | 98.73% | 1565 ms | ↑ 1.13x | 0 | — | — | 15m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.15% | 99.15% | 1788 ms | → 1.04x | 1 | 0s | 24d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 521 ms | ↓ 0.75x | 0 | — | — | 28m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 741 ms | ↑ 1.09x | 0 | — | — | 11m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.76% | 99.89% | 26.78% | 26.78% | 2586 ms | ↑ 1.14x | 2 | 0s | 5d ago | 31m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.89% | 99.73% | 99.73% | 3244 ms | → 1.03x | 2 | 0s | 4d ago | 29m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.76% | 99.14% | 99.72% | 99.72% | 362 ms | ↑ 1.75x | 10 | 10m | 4d ago | 29m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.76% | 99.54% | 99.27% | 99.27% | 2002 ms | → 1.04x | 4 | 22m | 7d ago | 30m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 98.68% | 99.74% | 99.74% | 2142 ms | ↑ 1.17x | 3 | 2h 10m | 7d ago | 30m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.76% | 99.94% | 99.61% | 99.61% | 968 ms | → 0.99x | 1 | 0s | 2d ago | 30m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.76% | 99.94% | 99.98% | 99.98% | 820 ms | → 0.99x | 1 | 0s | 5d ago | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.76% | 99.94% | 99.75% | 99.75% | 3217 ms | ↑ 1.10x | 1 | 0s | 5d ago | 26m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.76% | 99.54% | 99.01% | 99.01% | 3976 ms | → 1.02x | 8 | 0s | 5d ago | 27m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.76% | 99.94% | 99.54% | 99.54% | 2195 ms | → 1.02x | 1 | 0s | 5d ago | 26m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.76% | 99.94% | 32.07% | 32.07% | 1257 ms | ↑ 1.10x | 1 | 0s | 5d ago | 26m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.76% | 99.65% | 99.90% | 99.90% | 893 ms | → 1.00x | 4 | 10m | 5d ago | 26m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.76% | 99.60% | 99.17% | 99.17% | 4281 ms | ↑ 1.05x | 7 | 0s | 5d ago | 27m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.94% | 99.87% | 99.87% | 3079 ms | ↑ 1.05x | 1 | 0s | 5d ago | 26m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.76% | 99.87% | 15.61% | 15.61% | 2709 ms | → 1.01x | 1 | 0s | 4d ago | 26m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.71% | 79.87% | 79.87% | 2138 ms | → 0.99x | 5 | 0s | 4d ago | 25m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.76% | 99.88% | 21.63% | 21.63% | 1814 ms | ↑ 1.19x | 2 | 0s | 4d ago | 26m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.76% | 99.88% | 23.27% | 23.27% | 2544 ms | ↑ 1.24x | 2 | 0s | 4d ago | 25m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.76% | 99.88% | 99.80% | 99.80% | 2071 ms | → 1.03x | 2 | 0s | 4d ago | 25m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.75% | 99.65% | 98.70% | 98.70% | 1026 ms | ↓ 0.87x | 6 | 0s | 7d ago | 19m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.88% | 97.55% | 97.55% | 2256 ms | ↑ 1.12x | 2 | 0s | 2d ago | 20m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.71% | 67.78% | 67.78% | 1362 ms | → 0.98x | 4 | 5m | 7d ago | 19m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.88% | 49.25% | 49.25% | 2154 ms | ↑ 1.28x | 2 | 0s | 7d ago | 20m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.42% | 53.93% | 53.93% | 997 ms | ↓ 0.89x | 6 | 20m | 7d ago | 20m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.83% | 64.05% | 64.05% | 623 ms | ↓ 0.92x | 3 | 0s | 7d ago | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.88% | 90.69% | 90.69% | 2286 ms | ↑ 1.06x | 2 | 0s | 7d ago | 19m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 99.71% | 21.51% | 21.51% | 589 ms | ↓ 0.43x | 4 | 8m | 7d ago | 20m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 99.75% | 36.13% | 33.14% | 33.14% | 2331 ms | → 0.98x | 2 | 9d 14h | 7d ago | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.65% | 90.83% | 90.83% | 735 ms | ↓ 0.92x | 6 | 0s | 7d ago | 19m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.75% | 99.48% | 96.06% | 96.06% | 3801 ms | ↑ 1.20x | 3 | 54m | 4d ago | 18m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.94% | 96.26% | 96.26% | 2629 ms | ↑ 1.35x | 1 | 0s | 7d ago | 20m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.83% | 22.53% | 22.53% | 1268 ms | ↑ 1.10x | 3 | 0s | 7d ago | 20m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.75% | 99.94% | 62.91% | 62.91% | 2765 ms | ↑ 1.13x | 1 | 0s | 7d ago | 19m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.75% | 99.71% | 24.10% | 24.10% | 1567 ms | → 0.98x | 5 | 0s | 15h ago | 20m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.88% | 99.97% | 99.97% | 2290 ms | ↑ 1.08x | 2 | 0s | 7d ago | 19m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.36% | 97.69% | 97.69% | 2219 ms | ↑ 1.06x | 9 | 7m | 5d ago | 17m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.75% | 99.94% | 99.07% | 99.07% | 728 ms | ↑ 1.35x | 1 | 0s | 5d ago | 17m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.75% | 99.94% | 98.61% | 98.61% | 2687 ms | ↓ 0.69x | 1 | 0s | 5d ago | 17m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.94% | 76.02% | 76.02% | 965 ms | ↓ 0.92x | 1 | 0s | 5d ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 97.19% | 97.91% | 97.91% | 4389 ms | → 1.02x | 24 | 28m | 4d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.75% | 99.30% | 91.94% | 91.94% | 2998 ms | → 0.97x | 12 | 0s | 12h ago | 17m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.75% | 97.31% | 98.41% | 98.41% | 4004 ms | ↑ 1.06x | 19 | 41m | 4d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.36% | 99.75% | 99.75% | 4340 ms | ↑ 1.17x | 7 | 17m | 4d ago | 16m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.75% | 99.47% | 99.54% | 99.54% | 854 ms | ↓ 0.63x | 4 | 35m | 5d ago | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.75% | 99.77% | 99.86% | 99.86% | 1615 ms | ↑ 1.25x | 3 | 7m | 1d ago | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.75% | 99.94% | 96.59% | 96.59% | 2017 ms | → 0.96x | 1 | 0s | 6d ago | 14m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.75% | 99.90% | 99.90% | 99.90% | 2057 ms | ↑ 1.06x | 1 | 0s | 3d ago | 11m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.94% | 99.94% | 1798 ms | → 1.04x | 1 | 0s | 6d ago | 12m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.75% | 99.59% | 99.70% | 99.70% | 1634 ms | ↓ 0.73x | 3 | 39m | 2d ago | 12m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.75% | 99.90% | 99.90% | 99.90% | 1240 ms | ↑ 1.05x | 1 | 0s | 2d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.77% | 98.05% | 98.05% | 627 ms | ↓ 0.85x | 4 | 0s | 2d ago | 14m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.82% | 99.18% | 99.18% | 1264 ms | → 1.02x | 3 | 0s | 2d ago | 13m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.75% | 99.54% | 99.54% | 99.54% | 922 ms | ↓ 0.88x | 3 | 30m | 4d ago | 13m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.75% | 99.38% | 99.38% | 99.38% | 2969 ms | → 0.99x | 2 | 59m | 2d ago | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.77% | 99.85% | 99.85% | 1544 ms | ↑ 1.25x | 2 | 30m | 5d ago | 12m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.60% | 21.60% | 21.60% | 2159 ms | → 1.01x | 7 | 0s | 3d ago | 29m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.51% | 99.83% | 63.12% | 63.12% | 2975 ms | ↑ 1.09x | 3 | 0s | 2d ago | 30m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.51% | 98.27% | 49.36% | 49.36% | 2877 ms | ↑ 1.14x | 8 | 1h 3m | 4d ago | 26m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.51% | 99.83% | 23.66% | 23.66% | 660 ms | ↓ 0.43x | 3 | 0s | 15h ago | 20m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.51% | 99.83% | 68.75% | 68.75% | 1588 ms | ↑ 1.15x | 3 | 0s | 3d ago | 19m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.50% | 99.88% | 98.92% | 98.92% | 266 ms | → 0.96x | 1 | 29m | 5d ago | 17m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.50% | 97.31% | 98.75% | 98.75% | 2105 ms | → 0.98x | 19 | 42m | 3d ago | 16m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.50% | 98.83% | 98.93% | 98.93% | 2227 ms | ↑ 1.75x | 3 | 1h 54m | 10h ago | 11m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.50% | 99.88% | 99.88% | 99.88% | 2604 ms | ↑ 1.46x | 2 | 0s | 2d ago | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.50% | 99.30% | 96.70% | 96.70% | 2183 ms | ↑ 1.10x | 12 | 0s | 17h ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.50% | 98.36% | 98.74% | 98.74% | 793 ms | ↑ 1.18x | 7 | 1h 24m | 3d ago | 13m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.50% | 99.88% | 97.89% | 97.89% | 512 ms | ↓ 0.92x | 2 | 0s | 3d ago | 12m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.50% | 99.88% | 99.94% | 99.94% | 2467 ms | ↑ 1.24x | 1 | 21m | 3d ago | 12m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.50% | 99.18% | 98.82% | 98.82% | 2540 ms | ↑ 1.13x | 6 | 40m | 5d ago | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.50% | 98.24% | 98.24% | 98.24% | 2121 ms | ↓ 0.90x | 13 | 8m | 1d ago | 12m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.27% | 98.91% | 99.58% | 99.58% | 3099 ms | ↓ 0.90x | 18 | 2m | 7d ago | 29m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.27% | 99.54% | 56.24% | 56.24% | 1838 ms | ↑ 1.15x | 8 | 0s | 3d ago | 26m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.27% | 97.76% | 20.95% | 20.95% | 2293 ms | → 0.99x | 38 | 31s | 5d ago | 27m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.26% | 99.65% | 21.51% | 21.51% | 4627 ms | ↑ 1.10x | 5 | 6m | 4d ago | 25m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.26% | 99.77% | 82.74% | 82.74% | 2526 ms | ↑ 1.14x | 4 | 0s | 3d ago | 19m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.26% | 98.95% | 91.67% | 91.67% | 1561 ms | ↑ 1.09x | 17 | 2m | 2d ago | 19m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.25% | 79.33% | 92.58% | 92.58% | 4608 ms | ↑ 1.55x | 5 | 1d 5h | 1d ago | 16m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.25% | 99.82% | 98.03% | 98.03% | 4234 ms | ↑ 1.05x | 2 | 10m | 3d ago | 16m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.24% | 96.13% | 97.63% | 97.63% | 560 ms | ↓ 0.71x | 3 | 8h 24m | 6d ago | 13m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.24% | 98.12% | 98.66% | 98.66% | 2256 ms | ↑ 1.28x | 6 | 1h 38m | 5d ago | 12m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.03% | 99.60% | 85.82% | 85.82% | 2543 ms | → 1.05x | 7 | 0s | 1d ago | 30m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.02% | 98.10% | 96.56% | 96.56% | 1939 ms | ↑ 1.19x | 7 | 1h 26m | 4d ago | 26m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.02% | 99.25% | 69.47% | 69.47% | 3935 ms | → 0.97x | 10 | 7m | 4d ago | 26m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.02% | 98.62% | 98.91% | 98.91% | 1854 ms | → 1.01x | 17 | 12m | 2d ago | 25m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.01% | 99.59% | 92.95% | 92.95% | 1406 ms | ↓ 0.86x | 5 | 10m | 3h ago | 18m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.01% | 98.43% | 86.62% | 86.62% | 4529 ms | ↑ 1.08x | 26 | 1m | 16h ago | 20m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.01% | 98.14% | 96.73% | 96.73% | 4515 ms | ↑ 1.08x | 13 | 42m | 24h ago | 20m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.01% | 99.59% | 99.81% | 99.81% | 3344 ms | ↑ 1.10x | 5 | 12m | 2d ago | 20m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (51)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.99% | 99.53% | 86.65% | 86.65% | 1632 ms | ↓ 0.67x | 7 | 4m | 1d ago | 12m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.79% | 99.43% | 96.11% | 96.11% | 3502 ms | ↑ 1.11x | 10 | 0s | 2d ago | 30m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.79% | 98.97% | 98.37% | 98.37% | 4488 ms | → 1.04x | 18 | 0s | 15h ago | 31m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.77% | 99.36% | 69.18% | 69.18% | 1903 ms | ↑ 1.30x | 9 | 7m | 20h ago | 19m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.77% | 99.30% | 98.86% | 98.86% | 2015 ms | ↑ 1.17x | 5 | 36m | 6d ago | 18m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.75% | 99.71% | 80.31% | 80.31% | 1958 ms | → 1.00x | 3 | 20m | 2d ago | 17m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.74% | 98.59% | 98.60% | 98.60% | 3029 ms | ↑ 1.22x | 24 | 0s | 6h ago | 11m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.74% | 99.71% | 93.33% | 93.33% | 29 ms | ↓ 0.95x | 1 | 1h 22m | 4d ago | 14m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.74% | 94.31% | 95.72% | 95.72% | 1480 ms | ↓ 0.61x | 11 | 3h 27m | 4d ago | 14m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 98.74% | 99.71% | 99.79% | 99.79% | 1560 ms | ↑ 1.15x | 2 | 36m | 1d ago | 12m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.74% | 99.41% | 99.36% | 99.36% | 4867 ms | ↑ 1.27x | 8 | 6m | 4d ago | 13m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.54% | 95.80% | 19.74% | 19.74% | 2667 ms | ↑ 1.07x | 68 | 2m | 8h ago | 26m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 98.49% | 67.51% | 82.45% | 82.45% | 1232 ms | ↓ 0.94x | 5 | 1d 23h | 1d ago | 13m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.27% | 99.25% | 64.05% | 64.05% | 1258 ms | ↓ 0.53x | 3 | 1h 32m | 7d ago | 20m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 98.24% | 98.93% | 98.93% | 98.93% | 3145 ms | → 1.01x | 1 | 2h 37m | 7d ago | 11m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 98.24% | 99.24% | 99.24% | 99.24% | 368 ms | ↓ 0.86x | 9 | 2m | 1d ago | 13m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.06% | 98.22% | 87.62% | 87.62% | 4176 ms | ↑ 1.17x | 31 | 0s | 2d ago | 31m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 98.06% | 97.42% | 98.85% | 98.85% | 3664 ms | ↑ 1.14x | 2 | 8h 60m | 8d ago | 29m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.04% | 98.27% | 21.00% | 21.00% | 4285 ms | → 1.05x | 30 | 0s | 2d ago | 25m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 97.99% | 98.24% | 92.64% | 92.64% | 742 ms | ↑ 1.07x | 15 | 23m | 21h ago | 14m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.82% | 35.49% | 75.04% | 75.04% | 3932 ms | → 1.00x | 12 | 1d 14h | 15h ago | 31m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.74% | 92.14% | 92.14% | 92.14% | 4644 ms | → 1.00x | 26 | 1h 23m | 20h ago | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.49% | 96.26% | 84.45% | 84.45% | 4602 ms | → 1.01x | 54 | 5m | 12h ago | 17m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.28% | 98.43% | 68.17% | 68.17% | 4771 ms | → 1.04x | 23 | 5m | 17h ago | 19m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.23% | 97.03% | 91.52% | 91.52% | 4402 ms | ↑ 1.16x | 17 | 30m | 1d ago | 13m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.08% | 98.22% | 86.05% | 86.05% | 4447 ms | → 0.98x | 29 | 2m | 15h ago | 28m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 96.98% | 88.74% | 93.18% | 93.18% | 904 ms | ↓ 0.50x | 87 | 28m | 16h ago | 13m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.77% | 97.08% | 86.59% | 86.59% | 4613 ms | → 1.01x | 38 | 8m | 2h ago | 17m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.74% | 98.13% | 53.18% | 53.18% | 3980 ms | ↑ 1.54x | 30 | 2m | 22h ago | 16m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.73% | 96.90% | 96.90% | 96.90% | 4671 ms | → 1.00x | 27 | 3m | 4h ago | 11m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.59% | 97.00% | 75.06% | 75.06% | 4607 ms | ↑ 1.09x | 45 | 4m | 5h ago | 26m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 96.47% | 98.30% | 98.81% | 98.81% | 2354 ms | ↑ 1.33x | 14 | 27m | 4h ago | 12m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.30% | 98.66% | 73.51% | 73.51% | 908 ms | → 0.96x | 11 | 33m | 4d ago | 19m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.59% | 96.60% | 98.47% | 98.47% | 4401 ms | → 1.03x | 57 | 1m | 19h ago | 25m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.56% | 95.93% | 83.33% | 83.33% | 4837 ms | → 1.02x | 64 | 3m | 19h ago | 18m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.21% | 97.48% | 96.82% | 96.82% | 1457 ms | ↓ 0.89x | 4 | 4h 2m | 4d ago | 14m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 94.81% | 98.72% | 98.33% | 98.33% | 1941 ms | ↑ 1.14x | 2 | 3h 26m | 1d ago | 18m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 94.22% | 98.65% | 98.97% | 98.97% | 2143 ms | ↓ 0.84x | 4 | 1h 35m | 3d ago | 11m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.83% | 93.66% | 73.43% | 73.43% | 2139 ms | ↑ 1.16x | 20 | 1h 32m | 9h ago | 19m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 89.45% | 93.32% | 90.70% | 90.70% | 1385 ms | ↑ 1.10x | 24 | 1h 39m | 1d ago | 11m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 87.94% | 56.98% | 33.91% | 33.91% | 3179 ms | → 1.02x | 191 | 1h 13m | 15h ago | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.72% | 88.82% | 59.34% | 59.34% | 4266 ms | ↑ 1.07x | 153 | 7m | 3h ago | 15m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 85.21% | 19.91% | 65.16% | 65.16% | 2148 ms | → 1.00x | 2 | 12d 1h | 4d ago | 16m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 82.96% | 54.39% | 32.84% | 32.84% | 2383 ms | ↑ 1.13x | 2 | 6d 22h | 10d ago | 20m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.15% | 78.55% | 81.31% | 81.31% | 4211 ms | ↓ 0.91x | 157 | 35m | 40m ago | 11m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 78.02% | 72.06% | 26.06% | 26.06% | 4522 ms | ↓ 0.93x | 290 | 18m | 49m ago | 19m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 72.99% | 71.42% | 62.79% | 62.79% | 4845 ms | → 1.00x | 318 | 16m | 5h ago | 26m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 67.90% | 52.33% | 32.29% | 32.29% | 1153 ms | ↑ 1.36x | 4 | 3d 15h | 4d ago | 19m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 65.78% | 73.23% | 96.53% | 96.53% | 4568 ms | ↑ 1.11x | 261 | 21m | 4h ago | 28m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 30.33% | 7.08% | 44.11% | 44.11% | 2115 ms | → 1.00x | 1 | 27d 20h | 30d ago | 16m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 30.23% | 66.04% | 79.22% | 79.22% | 4963 ms | ↑ 2.06x | 156 | 1h 8m | 3h ago | 13m ago |

</details>

<details open>
<summary><strong>🔴 Down (263)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.73% | 98.42% | 97.11% | 97.11% | 1768 ms | ↑ 1.13x | 11 | 42m | 6h ago | 13m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 93.70% | 95.47% | 99.47% | 99.47% | 4042 ms | ↑ 1.13x | 4 | 7h 5m | 10h ago | 30m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 88.97% | 97.19% | 55.13% | 55.13% | 832 ms | ↑ 1.25x | 9 | 1h 44m | 15h ago | 17m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.90% | 87.33% | 22.07% | 22.07% | 4298 ms | ↓ 0.93x | 166 | 9m | 20m ago | 20m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 87.41% | 96.25% | 97.26% | 97.26% | 1344 ms | ↓ 0.62x | 5 | 4h 56m | 21h ago | 13m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 85.89% | 96.72% | 97.69% | 97.69% | 276 ms | ↓ 0.29x | 1 | 23h 50m | 1d ago | 13m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 84.96% | 79.51% | 82.48% | 82.48% | 4152 ms | ↓ 0.80x | 34 | 4h 4m | 21h ago | 15m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 79.60% | 95.25% | 96.63% | 96.63% | 437 ms | ↑ 1.21x | 2 | 16h 22m | 1d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 76.63% | 17.87% | 26.53% | 26.53% | 2339 ms | → 1.00x | 3 | 8d 5h | 16h ago | 14m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 74.12% | 91.73% | 91.73% | 91.73% | 178 ms | ↓ 0.16x | 3 | 18h 31m | 2d ago | 11m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 55.89% | 89.66% | 96.21% | 96.21% | 2154 ms | ↑ 1.24x | 2 | 1d 13h | 3d ago | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 33.17% | 84.06% | 98.11% | 98.11% | 3150 ms | ↑ 1.07x | 3 | 1d 13h | 5d ago | 30m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 30.62% | 46.57% | 47.31% | 47.31% | 501 ms | → 0.97x | 2 | 8d 1h | 5d ago | 19m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 12.85% | 48.83% | 43.29% | 43.29% | 692 ms | → 1.03x | 5 | 3d 2h | 6d ago | 12m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 12.59% | 48.66% | 66.08% | 66.08% | 682 ms | → 0.97x | 6 | 2d 13h | 6d ago | 19m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.45% | 1.72% | 57.17% | 57.17% | 2589 ms | ↓ 0.89x | 31 | 22h 31m | 7h ago | 31m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.73% | 35.83% | 49.73% | 49.73% | 2856 ms | ↑ 1.34x | 9 | 2d 2h | 5d ago | 26m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.72% | 77.72% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.37% | 64.37% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.26% | 69.26% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 39.45% | 39.45% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 73.21% | 73.21% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.54% | 54.54% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.29% | 5.29% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.76% | 11.76% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.77% | 49.77% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 63.54% | 81.25% | 81.25% | — | — | 22 | 11h 30m | 11d ago | 12m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.19% | 3.19% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 42.71% | 84.16% | 84.16% | — | — | 1 | 17d 2h | 17d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.95% | 77.95% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.22% | 34.22% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 87.05% | 87.05% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.65% | 21.65% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 69.95% | 69.95% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 46.02% | 46.02% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.64% | 27.64% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 24.34% | 86.31% | 86.31% | — | — | 2 | 11d 6h | 23d ago | 29m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 78.32% | 78.32% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 59.00% | 59.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.35% | 72.35% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 21h | 17d ago | 30m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.57% | 13.57% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.63% | 45.63% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.88% | 88.88% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.17% | 31.17% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 53.22% | 75.62% | 75.62% | — | — | 1 | 13d 22h | 14d ago | 12m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.71% | 78.71% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 40.12% | 39.05% | 39.05% | — | — | 3 | 4d 13h | 14d ago | 13m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 24.56% | 82.19% | 82.19% | — | — | 1 | 22d 14h | 23d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.19% | 3.19% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 70.75% | 83.88% | 83.88% | — | — | 6 | 1d 10h | 8d ago | 12m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 59.79% | 79.54% | 79.54% | — | — | 1 | 12d | 12d ago | 11m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.56% | 78.56% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.99% | 26.99% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.75% | 48.75% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.93% | 1.93% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 86.02% | 86.02% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 38.71% | 38.71% | 38.71% | — | — | 1 | 18d | 18d ago | 11m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.79% | 67.79% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.85% | 68.85% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 53.96% | 76.10% | 76.10% | — | — | 3 | 4d 13h | 14d ago | 13m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.50% | 27.50% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.30% | 51.30% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 46.28% | 46.28% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.59% | 22.59% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 16.00% | 78.66% | 78.66% | — | — | 4 | 6d 7h | 25d ago | 31m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 15.41% | 39.32% | 39.32% | — | — | 3 | 8d 11h | 25d ago | 26m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 3h | 23d ago | 11m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 17.53% | 52.82% | 52.82% | — | — | 1 | 24d 20h | 25d ago | 14m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 53.74% | 53.74% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.99% | 21.99% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.79% | 4.79% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.84% | 61.84% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 78.26% | 78.26% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 39.48% | 72.94% | 72.94% | — | — | 1 | 18d 1h | 18d ago | 14m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.79% | 5.79% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.76% | 74.76% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 77.11% | 77.11% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.43% | 29.43% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 25.03% | 86.66% | 86.66% | — | — | 2 | 11d 4h | 22d ago | 18m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 23.96% | 23.96% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.23% | 21.23% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.72% | 49.72% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 74.15% | 85.57% | 85.57% | — | — | 1 | 7d 15h | 8d ago | 29m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 22.38% | 22.38% | 22.38% | — | — | 2 | 6d 13h | 13d ago | 12m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 53.90% | 74.50% | 74.50% | — | — | 4 | 3d 10h | 14d ago | 13m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 73.92% | 86.31% | 86.31% | — | — | 8 | 23h 4m | 8d ago | 12m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 53.43% | 80.26% | 80.26% | — | — | 13 | 1d 1h | 14d ago | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.37% | 49.37% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 18.03% | 18.66% | 18.66% | — | — | 8 | 1d 17h | 14d ago | 13m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.64% | 6.64% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 58.28% | 58.28% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.93% | 43.93% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 20.61% | 20.61% | 20.61% | — | — | 3 | 6d 1h | 18d ago | 13m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.91% | 39.91% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 56.48% | 77.31% | 77.31% | — | — | 4 | 3d 5h | 13d ago | 30m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.62% | 22.62% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 78.28% | 78.28% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.30% | 55.30% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 67.92% | 83.36% | 83.36% | — | — | 1 | 9d 14h | 10d ago | 12m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.73% | 36.73% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 8.18% | 68.47% | 68.47% | — | — | 1 | 27d 13h | 28d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 73.17% | 73.17% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 66.06% | 66.06% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.39% | 2.39% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.49% | 78.49% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.28% | 39.28% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 7.61% | 92.05% | 92.05% | — | — | 1 | 27d 17h | 28d ago | 25m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.27% | 78.27% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.78% | 30.78% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 78.18% | 78.18% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 45.23% | 45.23% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 19.42% | 19.42% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.98% | 40.98% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 75.97% | 75.97% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.94% | 59.94% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.35% | 25.35% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 2h | 23d ago | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.55% | 74.55% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 2h | 23d ago | 13m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.27% | 45.27% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.95% | 2.95% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 3h | 23d ago | 13m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.78% | 40.78% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.04% | 73.04% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 0.00% | 39.34% | 39.34% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.72% | 55.72% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 25.80% | 25.80% | 25.80% | — | — | 1 | 16d 24h | 17d ago | 13m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 36.02% | 36.02% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.36% | 55.36% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.94% | 83.94% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 49.68% | 95.45% | 95.45% | — | — | 2 | 7d 10h | 15d ago | 30m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.72% | 26.72% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.10% | 11.10% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.76% | 22.76% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.02% | 50.02% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 88.88% | 88.88% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.28% | 50.28% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 68.17% | 68.17% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.33% | 8.33% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.50% | 16.50% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.76% | 46.76% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 29.72% | 47.76% | 47.76% | — | — | 1 | 20d 23h | 21d ago | 17m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.46% | 18.46% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.12% | 52.12% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.87% | 89.87% | — | — | 1 | 16d 21h | 17d ago | 24m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.39% | 36.39% | — | — | 1 | 23d 3h | 23d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.29% | 20.29% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.32% | 30.32% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.24% | 5.24% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.53% | 74.53% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 85.30% | 85.30% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 51.21% | 51.21% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.37% | 78.37% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 77.34% | 77.34% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 60.32% | 60.32% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 70.83% | 70.83% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.21% | 77.21% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 22h | 17d ago | 12m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.42% | 18.42% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.48% | 56.48% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 37.17% | 37.17% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.85% | 3.85% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.13% | 32.13% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.80% | 64.80% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.03% | 23.03% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.89% | 6.89% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.03% | 62.03% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.88% | 24.88% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.86% | 63.86% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 33.21% | 33.21% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 53.96% | 75.70% | 75.70% | — | — | 3 | 4d 13h | 14d ago | 13m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.17% | 4.17% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 20h | 17d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 47.47% | 47.47% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 41.01% | 41.01% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.53% | 31.53% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.40% | 18.40% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.18% | 5.18% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.59% | 10.59% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.97% | 16.97% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.50% | 15.50% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.49% | 27.49% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.23% | 9.23% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.12% | 7.12% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.74% | 0.74% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.22% | 4.22% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.89% | 4.89% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.17% | 47.17% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 39.12% | 39.12% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.34% | 78.34% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 66.37% | 66.37% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.88% | 41.88% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.52% | 78.52% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.11% | 39.11% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.49% | 1.49% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.06% | 18.06% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 3h | 23d ago | 12m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.39% | 76.39% | — | — | 1 | 29d 23h | 30d ago | 23m ago |

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
