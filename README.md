# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 365 🟢 operational · 38 🟡 degraded · 272 🔴 down · 0 ⚫ unknown

_Updated 2026-07-07 06:50 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (365)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.45% | 98.45% | 929 ms | ↑ 1.22x | 0 | — | — | 35m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 94.24% | 94.24% | 667 ms | ↓ 0.43x | 0 | — | — | 40m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 98.68% | 74.03% | 74.03% | 897 ms | ↓ 0.74x | 5 | 1h 24m | 8d ago | 41m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.79% | 24.25% | 24.25% | 2916 ms | ↓ 0.90x | 3 | 0s | 27d ago | 42m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.56% | 97.56% | 2697 ms | ↓ 0.80x | 0 | — | — | 48m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 59.67% | 59.67% | 1800 ms | ↑ 1.12x | 0 | — | — | 39m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.37% | 99.60% | 99.60% | 813 ms | ↓ 0.88x | 4 | 35m | 15d ago | 32m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.73% | 98.73% | 962 ms | ↓ 0.86x | 2 | 0s | 17d ago | 41m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.89% | 98.89% | 1749 ms | ↓ 0.89x | 1 | 0s | 8d ago | 49m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.61% | 99.61% | 3096 ms | → 0.97x | 0 | — | — | 49m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.82% | 95.82% | 1883 ms | ↓ 0.72x | 0 | — | — | 36m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2334 ms | ↑ 1.09x | 0 | — | — | 34m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 98.00% | 98.00% | 2194 ms | ↓ 0.66x | 0 | — | — | 36m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 94.88% | 97.03% | 97.03% | 936 ms | ↓ 0.63x | 3 | 17h 47m | 11d ago | 34m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.95% | 99.95% | 2176 ms | → 1.01x | 1 | 0s | 18d ago | 34m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1077 ms | → 1.05x | 0 | — | — | 32m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.80% | 98.80% | 1129 ms | ↓ 0.65x | 0 | — | — | 36m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.07% | 99.07% | 570 ms | ↓ 0.54x | 0 | — | — | 34m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 40.01% | 40.01% | 613 ms | ↓ 0.58x | 0 | — | — | 45m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1501 ms | ↓ 0.84x | 0 | — | — | 32m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.79% | 99.87% | 99.87% | 1264 ms | ↓ 0.71x | 2 | 10m | 11d ago | 36m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.20% | 97.20% | 2438 ms | ↓ 0.88x | 0 | — | — | 40m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.92% | 98.92% | 1221 ms | → 1.00x | 1 | 30m | 28d ago | 47m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 956 ms | ↓ 0.74x | 0 | — | — | 33m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 97.01% | 97.01% | 500 ms | ↓ 0.65x | 2 | 0s | 18d ago | 38m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.72% | 88.72% | 1690 ms | ↓ 0.79x | 0 | — | — | 37m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1459 ms | ↓ 0.81x | 1 | 0s | 16d ago | 33m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.55% | 98.55% | 2817 ms | ↓ 0.66x | 0 | — | — | 37m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.79% | 80.15% | 80.15% | 1872 ms | ↓ 0.86x | 3 | 0s | 14d ago | 45m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.67% | 99.67% | 1319 ms | ↓ 0.82x | 3 | 19m | 22d ago | 34m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 912 ms | ↓ 0.70x | 1 | 0s | 24d ago | 33m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.89% | 97.89% | 1438 ms | → 0.95x | 0 | — | — | 39m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 388 ms | ↓ 0.67x | 1 | 0s | 15d ago | 46m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.76% | 99.76% | 3301 ms | → 1.04x | 1 | 0s | 15d ago | 46m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.10% | 99.10% | 278 ms | ↓ 0.68x | 1 | 0s | 15d ago | 38m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.67% | 99.01% | 99.01% | 4171 ms | ↓ 0.91x | 5 | 0s | 8d ago | 47m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.98% | 97.98% | 3530 ms | ↓ 0.82x | 0 | — | — | 48m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.88% | 99.64% | 99.64% | 1717 ms | ↓ 0.88x | 2 | 3h 20m | 18d ago | 38m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.67% | 96.67% | 689 ms | ↓ 0.71x | 0 | — | — | 38m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | ↓ 0.78x | 0 | — | — | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 564 ms | ↓ 0.31x | 0 | — | — | 33m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.83% | 99.83% | 99.83% | 1467 ms | → 0.95x | 2 | 0s | 22d ago | 32m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.93% | 99.09% | 99.09% | 2584 ms | ↓ 0.78x | 1 | 0s | 19d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.93% | 99.87% | 99.87% | 1261 ms | ↓ 0.69x | 1 | 0s | 28d ago | 36m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.87% | 99.87% | 869 ms | ↑ 1.28x | 0 | — | — | 32m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.23% | 99.31% | 99.31% | 298 ms | ↓ 0.65x | 10 | 2m | 7d ago | 34m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.21% | 91.75% | 91.75% | 676 ms | ↓ 0.36x | 21 | 1h 54m | 11d ago | 32m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3067 ms | ↓ 0.75x | 0 | — | — | 44m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.74% | 99.74% | 900 ms | → 1.01x | 0 | — | — | 36m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1234 ms | ↑ 1.11x | 0 | — | — | 32m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.77% | 96.77% | 1775 ms | ↓ 0.68x | 1 | 0s | 16d ago | 36m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.09% | 98.09% | 3473 ms | ↑ 1.12x | 0 | — | — | 37m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1018 ms | ↓ 0.79x | 0 | — | — | 34m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 621 ms | ↑ 1.19x | 0 | — | — | 34m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.86% | 99.84% | 99.84% | 704 ms | ↓ 0.92x | 2 | 0s | 26d ago | 34m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.98% | 96.98% | 512 ms | ↓ 0.64x | 0 | — | — | 40m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 842 ms | ↓ 0.78x | 0 | — | — | 32m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.89% | 56.89% | 836 ms | ↓ 0.48x | 0 | — | — | 42m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.53% | 98.68% | 98.68% | 696 ms | ↓ 0.95x | 2 | 4h 33m | 26d ago | 32m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 868 ms | ↓ 0.60x | 0 | — | — | 33m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 3371 ms | ↓ 0.79x | 0 | — | — | 45m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.58% | 87.70% | 87.70% | 842 ms | ↓ 0.61x | 5 | 6m | 11d ago | 33m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.27% | 97.27% | 1109 ms | ↓ 0.90x | 0 | — | — | 45m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.79% | 99.07% | 99.07% | 1452 ms | ↑ 1.27x | 2 | 10m | 10d ago | 33m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.18% | 99.18% | 785 ms | ↓ 0.68x | 1 | 0s | 24d ago | 40m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.96% | 50.12% | 50.12% | 2053 ms | ↓ 0.75x | 8 | 1h 3m | 14d ago | 46m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.52% | 84.52% | 2030 ms | ↓ 0.68x | 0 | — | — | 41m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.79% | 68.39% | 68.39% | 1130 ms | ↓ 0.88x | 2 | 10m | 17d ago | 41m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1002 ms | ↑ 1.24x | 0 | — | — | 34m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.84% | 98.84% | 2132 ms | ↓ 0.76x | 0 | — | — | 37m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3159 ms | ↓ 0.73x | 0 | — | — | 33m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.25% | 93.25% | 593 ms | ↓ 0.74x | 0 | — | — | 42m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 100.00% | 98.67% | 98.68% | 98.68% | 1882 ms | ↓ 0.67x | 19 | 0s | 9d ago | 33m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.82% | 98.82% | 1146 ms | ↓ 0.79x | 0 | — | — | 36m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.85% | 99.85% | 650 ms | ↑ 1.17x | 0 | — | — | 38m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.51% | 99.51% | 675 ms | ↓ 0.75x | 0 | — | — | 34m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.92% | 99.92% | 99.92% | 908 ms | ↓ 0.53x | 1 | 0s | 13d ago | 33m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.15% | 98.15% | 3271 ms | ↑ 1.38x | 1 | 0s | 27d ago | 38m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 50.02% | 50.02% | 861 ms | ↓ 0.50x | 2 | 0s | 17d ago | 42m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.90% | 77.90% | 894 ms | ↓ 0.56x | 0 | — | — | 41m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.65% | 96.83% | 96.83% | 985 ms | ↓ 0.78x | 1 | 2h 1m | 19d ago | 33m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.46% | 56.87% | 56.87% | 1496 ms | ↓ 0.89x | 8 | 0s | 13d ago | 46m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 942 ms | ↓ 0.79x | 0 | — | — | 33m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.47% | 68.89% | 68.89% | 4407 ms | ↓ 0.81x | 18 | 7m | 11d ago | 41m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.37% | 98.37% | 2439 ms | ↓ 0.93x | 0 | — | — | 39m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.38% | 54.59% | 54.59% | 866 ms | ↓ 0.67x | 5 | 24m | 17d ago | 42m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 791 ms | ↓ 0.93x | 0 | — | — | 32m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 1194 ms | ↓ 0.45x | 0 | — | — | 33m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1010 ms | → 1.00x | 0 | — | — | 32m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.86% | 99.85% | 99.85% | 1589 ms | ↓ 0.75x | 2 | 0s | 19d ago | 32m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.79% | 64.79% | 534 ms | ↓ 0.71x | 2 | 0s | 17d ago | 41m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.11% | 98.11% | 2564 ms | ↑ 1.23x | 0 | — | — | 42m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1778 ms | ↓ 0.80x | 0 | — | — | 33m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.73% | 99.34% | 99.34% | 2560 ms | ↓ 0.74x | 5 | 5h 45m | 22d ago | 44m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.54% | 62.54% | 1358 ms | ↓ 0.90x | 0 | — | — | 42m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.47% | 65.47% | 994 ms | ↓ 0.62x | 0 | — | — | 42m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.72% | 99.89% | 99.89% | 1309 ms | ↓ 0.86x | 1 | 1h 9m | 21d ago | 34m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.27% | 99.27% | 1620 ms | ↓ 0.78x | 0 | — | — | 41m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1466 ms | → 0.98x | 0 | — | — | 38m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.61% | 99.61% | 516 ms | ↓ 0.68x | 0 | — | — | 41m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.71% | 97.99% | 97.99% | 801 ms | ↓ 0.42x | 1 | 12h 2m | 22d ago | 41m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.79% | 91.24% | 91.24% | 2299 ms | ↓ 0.79x | 2 | 1d 13h | 25d ago | 32m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.93% | 22.75% | 22.75% | 839 ms | ↓ 0.49x | 1 | 0s | 14d ago | 46m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1461 ms | ↓ 0.68x | 0 | — | — | 33m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.09% | 99.09% | 2914 ms | ↓ 0.78x | 0 | — | — | 48m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 95.97% | 99.48% | 99.48% | 3246 ms | ↓ 0.88x | 3 | 9h 27m | 10d ago | 49m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.28% | 98.28% | 3003 ms | ↓ 0.86x | 0 | — | — | 49m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 782 ms | ↓ 0.89x | 1 | 0s | 15d ago | 46m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.47% | 77.47% | 2026 ms | ↓ 0.89x | 0 | — | — | 39m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1123 ms | → 0.95x | 1 | 0s | 12d ago | 33m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2121 ms | ↑ 1.08x | 0 | — | — | 32m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.37% | 98.38% | 98.38% | 892 ms | ↓ 0.64x | 7 | 8m | 23d ago | 33m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.30% | 99.70% | 99.70% | 1538 ms | ↓ 0.90x | 1 | 2h 60m | 29d ago | 34m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1680 ms | → 1.00x | 0 | — | — | 49m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 619 ms | ↓ 0.60x | 0 | — | — | 49m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.93% | 99.65% | 99.65% | 1637 ms | ↓ 0.67x | 1 | 0s | 28d ago | 48m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.28% | 90.28% | 867 ms | ↓ 0.69x | 0 | — | — | 40m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.65% | 81.01% | 81.01% | 1768 ms | ↓ 0.85x | 3 | 20m | 12d ago | 38m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1113 ms | → 1.00x | 0 | — | — | 49m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 800 ms | ↑ 1.21x | 0 | — | — | 34m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.74% | 86.74% | 2085 ms | ↓ 0.85x | 0 | — | — | 36m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1234 ms | ↓ 0.54x | 0 | — | — | 33m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1697 ms | ↓ 0.83x | 0 | — | — | 36m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.09% | 99.09% | 429 ms | ↓ 0.54x | 0 | — | — | 42m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.78% | 97.78% | 1714 ms | ↓ 0.81x | 0 | — | — | 36m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 100.00% | 16.96% | 26.01% | 26.01% | 2654 ms | → 1.00x | 1 | 22d 6h | 30d ago | 38m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 99.94% | 99.94% | 1357 ms | ↓ 0.82x | 0 | — | — | 32m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1485 ms | → 0.96x | 1 | 0s | 23d ago | 33m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 821 ms | ↓ 0.50x | 1 | 0s | 28d ago | 33m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1356 ms | ↓ 0.69x | 0 | — | — | 33m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.96% | 98.96% | 608 ms | ↑ 1.74x | 1 | 29m | 15d ago | 38m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.86% | 99.24% | 99.24% | 1226 ms | ↓ 0.86x | 2 | 0s | 12d ago | 34m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.02% | 99.02% | 2411 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.76% | 91.76% | 673 ms | ↓ 0.86x | 0 | — | — | 35m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.59% | 22.61% | 22.61% | 2194 ms | ↓ 0.67x | 5 | 6m | 9d ago | 44m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.86% | 98.05% | 98.05% | 514 ms | ↓ 0.67x | 2 | 0s | 13d ago | 33m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.85% | 99.85% | 923 ms | ↑ 1.22x | 0 | — | — | 32m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 868 ms | ↓ 0.51x | 0 | — | — | 33m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.65% | 26.65% | 1467 ms | ↓ 0.55x | 0 | — | — | 42m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2516 ms | ↓ 0.80x | 0 | — | — | 49m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.37% | 98.80% | 98.80% | 181 ms | ↓ 0.51x | 4 | 38m | 13d ago | 37m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 776 ms | ↑ 1.15x | 0 | — | — | 48m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.41% | 98.41% | 1262 ms | ↓ 0.69x | 1 | 0s | 19d ago | 35m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.74% | 99.74% | 2510 ms | ↓ 0.85x | 2 | 0s | 14d ago | 48m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.24% | 98.24% | 1323 ms | ↑ 1.13x | 0 | — | — | 40m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 22.61% | 22.61% | 602 ms | ↓ 0.51x | 2 | 0s | 17d ago | 42m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 410 ms | ↓ 0.58x | 0 | — | — | 49m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 100.00% | 99.76% | 99.76% | 1554 ms | ↓ 0.77x | 0 | — | — | 43m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2690 ms | ↑ 1.39x | 0 | — | — | 48m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2328 ms | ↓ 0.92x | 1 | 21m | 13d ago | 34m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 63.04% | 34.43% | 34.43% | 1368 ms | ↓ 0.87x | 2 | 4d 14h | 17d ago | 41m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 96.18% | 97.99% | 97.99% | 1334 ms | ↓ 0.71x | 29 | 27m | 27d ago | 48m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2155 ms | ↓ 0.86x | 0 | — | — | 45m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.37% | 99.37% | 1831 ms | ↓ 0.82x | 1 | 0s | 28d ago | 42m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.45% | 45.45% | 552 ms | ↓ 0.68x | 1 | 0s | 27d ago | 49m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.66% | 98.66% | 1152 ms | ↓ 0.58x | 1 | 0s | 15d ago | 38m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.02% | 93.00% | 93.00% | 706 ms | ↓ 0.74x | 10 | 12m | 11d ago | 36m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1058 ms | ↓ 0.79x | 0 | — | — | 48m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.48% | 99.48% | 2516 ms | ↓ 0.85x | 0 | — | — | 44m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.02% | 99.73% | 99.73% | 296 ms | ↑ 1.61x | 10 | 10m | 14d ago | 48m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.83% | 99.83% | 1355 ms | ↓ 0.90x | 0 | — | — | 39m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.93% | 22.13% | 22.13% | 750 ms | ↓ 0.78x | 1 | 0s | 24d ago | 48m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.64% | 99.29% | 99.29% | 656 ms | ↓ 0.53x | 3 | 30m | 8d ago | 49m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 1985 ms | ↓ 0.76x | 0 | — | — | 41m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.72% | 99.72% | 665 ms | ↓ 0.55x | 0 | — | — | 35m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 553 ms | ↑ 1.20x | 0 | — | — | 32m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.58% | 91.05% | 91.05% | 981 ms | ↓ 0.80x | 6 | 0s | 9d ago | 40m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.65% | 99.65% | 620 ms | ↓ 0.77x | 0 | — | — | 49m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 63.04% | 63.04% | 1241 ms | ↓ 0.88x | 0 | — | — | 42m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.79% | 24.73% | 24.73% | 650 ms | ↓ 0.57x | 3 | 0s | 11d ago | 42m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.53% | 88.16% | 88.16% | 545 ms | ↓ 0.64x | 4 | 1d 14h | 20d ago | 33m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 2444 ms | ↓ 0.91x | 0 | — | — | 48m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.09% | 98.89% | 98.89% | 1676 ms | → 1.05x | 1 | 5h 50m | 23d ago | 34m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.25% | 99.25% | 99.25% | 1779 ms | ↓ 0.75x | 1 | 2h 37m | 17d ago | 32m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.17% | 66.09% | 66.09% | 1274 ms | → 0.96x | 2 | 2h 18m | 17d ago | 42m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.93% | 89.70% | 89.70% | 1336 ms | ↓ 0.79x | 1 | 0s | 24d ago | 48m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 24.36% | 24.36% | 1408 ms | ↓ 0.80x | 3 | 40m | 21d ago | 42m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.44% | 99.00% | 99.00% | 2578 ms | ↑ 1.17x | 4 | 30m | 21d ago | 40m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.78% | 89.78% | 851 ms | ↓ 0.62x | 2 | 0s | 23d ago | 34m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.93% | 99.90% | 99.90% | 708 ms | ↓ 0.52x | 1 | 0s | 27d ago | 48m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1072 ms | ↓ 0.87x | 0 | — | — | 49m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 49.18% | 49.18% | 635 ms | → 1.00x | 1 | 0s | 27d ago | 39m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.62% | 99.62% | 937 ms | ↓ 0.83x | 1 | 0s | 12d ago | 49m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.98% | 99.98% | 1089 ms | ↓ 0.71x | 0 | — | — | 33m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.95% | 99.95% | 784 ms | ↓ 0.70x | 0 | — | — | 36m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.04% | 98.87% | 98.87% | 2499 ms | ↓ 0.70x | 2 | 8h 60m | 18d ago | 48m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.68% | 98.68% | 1487 ms | ↓ 0.79x | 0 | — | — | 36m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.65% | 98.34% | 98.34% | 856 ms | ↑ 1.14x | 1 | 1h 40m | 19d ago | 36m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.93% | 96.93% | 1061 ms | ↑ 1.07x | 1 | 0s | 26d ago | 36m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.69% | 71.69% | 1116 ms | ↓ 0.89x | 0 | — | — | 41m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1229 ms | ↓ 0.81x | 0 | — | — | 32m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1127 ms | ↓ 0.91x | 0 | — | — | 32m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 82.19% | 82.19% | 1751 ms | ↓ 0.63x | 1 | 0s | 27d ago | 41m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1644 ms | ↓ 0.65x | 0 | — | — | 48m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 1144 ms | → 0.98x | 0 | — | — | 33m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 685 ms | ↓ 0.89x | 1 | 0s | 28d ago | 43m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.08% | 38.18% | 38.18% | 1830 ms | ↓ 0.91x | 13 | 5h 54m | 19d ago | 42m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 90.98% | 32.30% | 32.30% | 2569 ms | ↑ 1.07x | 2 | 1d 3h | 28d ago | 36m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 96.65% | 56.61% | 56.61% | 1263 ms | ↑ 1.80x | 8 | 2h 1m | 11d ago | 38m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.86% | 91.83% | 91.83% | 584 ms | ↑ 1.36x | 1 | 30m | 9d ago | 38m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.35% | 99.35% | 2328 ms | ↓ 0.90x | 0 | — | — | 41m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 69.33% | 69.33% | 1182 ms | ↓ 0.90x | 2 | 0s | 13d ago | 41m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.87% | 96.87% | 1023 ms | ↓ 0.72x | 0 | — | — | 41m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1328 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.93% | 24.35% | 24.35% | 2141 ms | ↓ 0.89x | 1 | 0s | 14d ago | 45m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2434 ms | ↓ 0.88x | 0 | — | — | 49m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.72% | 97.82% | 97.82% | 715 ms | ↑ 1.19x | 2 | 31m | 16d ago | 34m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1522 ms | ↓ 0.83x | 1 | 0s | 25d ago | 34m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3518 ms | ↓ 0.85x | 0 | — | — | 33m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 97.47% | 98.54% | 98.54% | 2327 ms | → 1.04x | 5 | 2h 28m | 9d ago | 34m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.67% | 99.18% | 99.18% | 4335 ms | ↓ 0.92x | 5 | 0s | 8d ago | 47m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.48% | 60.48% | 1159 ms | ↑ 1.37x | 0 | — | — | 42m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.47% | 98.37% | 98.37% | 1652 ms | ↓ 0.91x | 2 | 3h 26m | 11d ago | 40m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.77% | 44.77% | 2894 ms | ↓ 0.80x | 0 | — | — | 41m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1190 ms | → 1.00x | 0 | — | — | 32m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.26% | 99.26% | 3146 ms | ↓ 0.72x | 0 | — | — | 44m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 2791 ms | ↓ 0.87x | 0 | — | — | 49m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2048 ms | ↓ 0.78x | 0 | — | — | 40m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.74% | 98.91% | 98.91% | 2194 ms | ↑ 1.12x | 10 | 19m | 10d ago | 34m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.31% | 99.31% | 2039 ms | ↓ 0.74x | 0 | — | — | 40m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 81.00% | 81.00% | 1541 ms | ↑ 1.42x | 0 | — | — | 41m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 188 ms | ↓ 0.78x | 0 | — | — | 49m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.86% | 99.90% | 99.90% | 1356 ms | ↓ 0.53x | 2 | 0s | 12d ago | 33m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.45% | 69.91% | 69.91% | 4121 ms | → 0.96x | 5 | 14m | 14d ago | 46m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1995 ms | ↓ 0.71x | 0 | — | — | 48m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1059 ms | ↓ 0.68x | 0 | — | — | 33m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1639 ms | ↓ 0.87x | 1 | 0s | 19d ago | 45m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.56% | 99.56% | 3163 ms | → 0.96x | 1 | 0s | 22d ago | 49m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.46% | 81.46% | 1867 ms | ↓ 0.63x | 0 | — | — | 41m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.58% | 87.58% | 2070 ms | ↑ 1.20x | 0 | — | — | 41m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.65% | 99.80% | 99.80% | 1283 ms | ↓ 0.75x | 2 | 36m | 11d ago | 33m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.31% | 96.31% | 1368 ms | ↓ 0.66x | 1 | 0s | 17d ago | 42m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1774 ms | ↑ 1.11x | 0 | — | — | 47m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.73% | 98.73% | 729 ms | ↓ 0.80x | 0 | — | — | 38m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 26.48% | 26.48% | 709 ms | ↓ 0.72x | 0 | — | — | 42m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.85% | 97.85% | 430 ms | ↓ 0.54x | 1 | 0s | 25d ago | 35m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 785 ms | ↓ 0.79x | 0 | — | — | 38m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.57% | 63.57% | 2243 ms | ↓ 0.84x | 1 | 0s | 17d ago | 41m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 44.40% | 44.40% | 525 ms | ↓ 0.46x | 0 | — | — | 48m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.65% | 93.68% | 93.68% | 58 ms | ↑ 1.33x | 1 | 1h 22m | 14d ago | 36m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 98.13% | 96.78% | 96.78% | 3141 ms | ↓ 0.63x | 8 | 1h 9m | 11d ago | 42m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.92% | 22.92% | 976 ms | ↓ 0.60x | 0 | — | — | 47m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 500 ms | ↓ 0.40x | 0 | — | — | 34m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.60% | 99.60% | 2848 ms | → 0.98x | 1 | 0s | 21d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2436 ms | ↓ 0.45x | 0 | — | — | 34m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 481 ms | ↓ 0.77x | 0 | — | — | 34m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.65% | 25.15% | 25.15% | 1300 ms | ↓ 0.70x | 5 | 0s | 11d ago | 42m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.76% | 93.76% | 4800 ms | → 1.05x | 0 | — | — | 48m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.63% | 99.63% | 1326 ms | ↓ 0.76x | 0 | — | — | 48m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.97% | 99.97% | 1682 ms | ↓ 0.72x | 1 | 0s | 17d ago | 40m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.30% | 99.30% | 778 ms | ↓ 0.76x | 0 | — | — | 38m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1442 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 98.97% | 49.47% | 49.47% | 1420 ms | ↑ 1.19x | 6 | 35m | 8d ago | 49m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.49% | 99.49% | 1099 ms | ↓ 0.70x | 0 | — | — | 47m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 66.16% | 88.99% | 88.99% | 1201 ms | ↓ 0.72x | 1 | 8d 16h | 30d ago | 47m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.94% | 98.94% | 2495 ms | ↓ 0.66x | 0 | — | — | 36m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.39% | 99.08% | 99.08% | 841 ms | ↓ 0.91x | 4 | 1h 35m | 13d ago | 32m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.51% | 99.65% | 99.65% | 1058 ms | ↓ 0.83x | 4 | 15m | 19d ago | 32m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.30% | 99.41% | 99.41% | 4866 ms | ↑ 1.25x | 8 | 6m | 14d ago | 34m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.93% | 99.81% | 99.81% | 644 ms | ↓ 0.84x | 1 | 0s | 9d ago | 36m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.52% | 89.52% | 1867 ms | ↓ 0.83x | 0 | — | — | 40m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.86% | 99.86% | 852 ms | ↓ 0.78x | 0 | — | — | 36m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1582 ms | ↓ 0.80x | 0 | — | — | 34m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1353 ms | ↓ 0.73x | 0 | — | — | 48m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1368 ms | ↓ 0.84x | 0 | — | — | 49m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 99.94% | 99.94% | 1048 ms | ↓ 0.55x | 0 | — | — | 33m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.76% | 99.76% | 874 ms | ↓ 0.63x | 0 | — | — | 49m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.77% | 76.77% | 798 ms | ↓ 0.79x | 1 | 0s | 15d ago | 38m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 803 ms | ↓ 0.76x | 0 | — | — | 47m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.25% | 85.25% | 1692 ms | ↓ 0.92x | 0 | — | — | 45m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.24% | 98.89% | 98.89% | 1654 ms | ↓ 0.81x | 4 | 45m | 16d ago | 40m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.36% | 98.36% | 1799 ms | ↓ 0.70x | 0 | — | — | 36m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1119 ms | ↓ 0.53x | 1 | 0s | 24d ago | 33m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1488 ms | ↓ 0.91x | 1 | 0s | 15d ago | 33m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 98.02% | 98.02% | 3140 ms | ↓ 0.84x | 0 | — | — | 35m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.51% | 95.98% | 95.98% | 1302 ms | ↓ 0.90x | 4 | 6h 14m | 20d ago | 34m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.88% | 98.88% | 1431 ms | → 0.98x | 0 | — | — | 41m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.67% | 99.67% | 1970 ms | ↓ 0.74x | 0 | — | — | 33m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.11% | 98.11% | 3130 ms | ↓ 0.74x | 2 | 10m | 13d ago | 37m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1117 ms | → 1.00x | 0 | — | — | 33m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.72% | 98.73% | 98.73% | 1053 ms | ↓ 0.88x | 3 | 10m | 24d ago | 39m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.84% | 99.84% | 99.84% | 794 ms | ↓ 0.60x | 2 | 0s | 19d ago | 33m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.80% | 32.80% | 989 ms | ↓ 0.66x | 0 | — | — | 47m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 96.94% | 86.99% | 86.99% | 4629 ms | ↓ 0.91x | 33 | 9m | 10d ago | 39m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 1066 ms | ↓ 0.84x | 0 | — | — | 40m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.47% | 98.47% | 1904 ms | ↓ 0.79x | 1 | 0s | 19d ago | 40m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 66.11% | 59.73% | 59.73% | 1094 ms | ↓ 0.82x | 1 | 8d 10h | 30d ago | 32m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.36% | 89.36% | 2380 ms | ↓ 0.63x | 0 | — | — | 41m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.91% | 17.07% | 17.07% | 1563 ms | ↓ 0.69x | 1 | 0s | 14d ago | 46m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.72% | 96.72% | 2697 ms | ↓ 0.82x | 1 | 0s | 18d ago | 42m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.94% | 22.94% | 1856 ms | → 1.01x | 0 | — | — | 48m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2124 ms | ↑ 1.47x | 0 | — | — | 34m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.47% | 97.47% | 1576 ms | ↓ 0.63x | 0 | — | — | 36m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1100 ms | ↑ 1.29x | 1 | 20m | 27d ago | 48m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 24.45% | 24.45% | 2313 ms | ↓ 0.65x | 1 | 0s | 18d ago | 42m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 22.50% | 22.50% | 1524 ms | ↓ 0.72x | 0 | — | — | 42m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 3040 ms | ↓ 0.71x | 3 | 0s | 14d ago | 37m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.58% | 99.75% | 99.75% | 2669 ms | → 1.04x | 2 | 60m | 29d ago | 33m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2854 ms | → 0.96x | 0 | — | — | 38m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1326 ms | ↓ 0.70x | 0 | — | — | 48m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 99.92% | 99.92% | 99.92% | 941 ms | ↓ 0.49x | 1 | 0s | 7d ago | 33m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 1978 ms | ↑ 1.29x | 0 | — | — | 47m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.79% | 98.79% | 1351 ms | ↓ 0.75x | 0 | — | — | 36m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.58% | 99.81% | 99.81% | 3028 ms | ↑ 1.40x | 4 | 15m | 12d ago | 42m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.17% | 99.17% | 1120 ms | ↓ 0.71x | 0 | — | — | 48m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 946 ms | ↑ 1.16x | 0 | — | — | 47m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1198 ms | ↑ 2.13x | 0 | — | — | 32m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.94% | 99.98% | 98.92% | 98.92% | 4006 ms | ↓ 0.88x | 1 | 0s | 4d ago | 50m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.88% | 99.95% | 99.98% | 99.98% | 650 ms | → 0.95x | 1 | 4m | 4d ago | 50m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.88% | 99.95% | 99.98% | 99.98% | 761 ms | ↓ 0.76x | 1 | 4m | 4d ago | 50m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.88% | 99.88% | 93.56% | 93.56% | 1905 ms | ↓ 0.73x | 2 | 27m | 4d ago | 50m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.88% | 99.88% | 36.19% | 36.19% | 1923 ms | ↓ 0.90x | 3 | 2m | 4d ago | 50m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.88% | 99.86% | 93.40% | 93.40% | 3040 ms | ↓ 0.76x | 3 | 20m | 4d ago | 50m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.82% | 99.38% | 91.93% | 91.93% | 2281 ms | ↓ 0.74x | 24 | 12s | 5h ago | 50m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.82% | 99.35% | 98.78% | 98.78% | 4531 ms | → 0.95x | 26 | 4s | 4d ago | 50m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.74% | 99.90% | 98.93% | 98.93% | 2758 ms | ↓ 0.94x | 2 | 0s | 1d ago | 49m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.69% | 98.57% | 99.74% | 99.74% | 1884 ms | ↓ 0.93x | 5 | 1h 18m | 2d ago | 49m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.60% | 98.56% | 50.93% | 50.93% | 3120 ms | ↑ 1.06x | 11 | 25m | 3d ago | 48m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.60% | 99.93% | 98.93% | 98.93% | 1108 ms | ↓ 0.92x | 1 | 0s | 5d ago | 47m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.60% | 99.93% | 98.78% | 98.78% | 1872 ms | ↓ 0.91x | 1 | 0s | 2h ago | 47m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.60% | 99.93% | 99.92% | 99.92% | 1545 ms | ↓ 0.90x | 1 | 0s | 2h ago | 47m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.60% | 99.87% | 99.87% | 99.87% | 1602 ms | ↓ 0.88x | 2 | 0s | 2h ago | 47m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.60% | 99.93% | 99.85% | 99.85% | 1914 ms | ↓ 0.81x | 1 | 0s | 2h ago | 47m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.60% | 99.34% | 99.62% | 99.62% | 2007 ms | ↓ 0.84x | 2 | 1h 60m | 2h ago | 47m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.59% | 99.86% | 99.87% | 99.87% | 2579 ms | ↓ 0.80x | 2 | 0s | 6d ago | 46m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.59% | 99.73% | 97.93% | 97.93% | 2615 ms | ↓ 0.67x | 2 | 30m | 3d ago | 44m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.59% | 99.79% | 90.91% | 90.91% | 1844 ms | ↓ 0.78x | 3 | 0s | 6d ago | 40m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.59% | 98.97% | 98.92% | 98.92% | 1697 ms | ↓ 0.88x | 11 | 10m | 4d ago | 45m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.59% | 99.31% | 96.16% | 96.16% | 2798 ms | ↓ 0.81x | 4 | 41m | 7d ago | 40m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.59% | 99.65% | 93.13% | 93.13% | 906 ms | ↓ 0.73x | 3 | 17m | 3d ago | 40m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.59% | 96.92% | 96.97% | 96.97% | 1227 ms | ↓ 0.61x | 5 | 3h 14m | 23h ago | 36m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.59% | 99.79% | 97.75% | 97.75% | 2435 ms | ↑ 1.13x | 3 | 0s | 3d ago | 39m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.59% | 99.86% | 90.72% | 90.72% | 1131 ms | → 0.99x | 2 | 0s | 4h ago | 36m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.59% | 99.72% | 98.15% | 98.15% | 621 ms | ↓ 0.66x | 4 | 0s | 6d ago | 35m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.59% | 96.44% | 84.62% | 84.62% | 1190 ms | ↓ 0.70x | 2 | 10h | 4d ago | 36m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.59% | 99.09% | 98.46% | 98.46% | 3053 ms | ↓ 0.76x | 5 | 42m | 6d ago | 37m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.59% | 91.06% | 82.98% | 82.98% | 1102 ms | ↓ 0.50x | 21 | 3h 16m | 6d ago | 36m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.59% | 99.37% | 97.08% | 97.08% | 1173 ms | ↓ 0.64x | 4 | 35m | 7d ago | 36m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.58% | 99.23% | 96.87% | 96.87% | 2179 ms | → 1.01x | 10 | 1h 11m | 16h ago | 34m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.58% | 98.46% | 97.31% | 97.31% | 1832 ms | ↓ 0.88x | 10 | 34m | 4d ago | 34m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.58% | 99.61% | 99.61% | 99.61% | 696 ms | → 1.03x | 1 | 0s | 5d ago | 32m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.58% | 99.44% | 99.70% | 99.70% | 1535 ms | ↓ 0.67x | 4 | 30m | 15h ago | 33m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.58% | 99.79% | 99.66% | 99.66% | 2101 ms | ↓ 0.90x | 3 | 0s | 7d ago | 33m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.58% | 99.61% | 99.61% | 99.61% | 1027 ms | → 1.03x | 1 | 0s | 17h ago | 32m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.58% | 98.56% | 98.56% | 98.56% | 1331 ms | ↓ 0.62x | 14 | 7m | 21h ago | 33m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.58% | 99.86% | 99.87% | 99.87% | 3327 ms | ↓ 0.57x | 2 | 0s | 6d ago | 33m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.47% | 99.90% | 99.60% | 99.60% | 2657 ms | ↑ 1.11x | 1 | 2s | 4h ago | 49m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.37% | 99.60% | 64.11% | 64.11% | 2713 ms | → 0.99x | 7 | 0s | 2d ago | 49m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.37% | 99.60% | 86.20% | 86.20% | 2305 ms | → 0.96x | 7 | 0s | 4d ago | 49m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.21% | 99.87% | 99.74% | 99.74% | 1710 ms | ↓ 0.74x | 1 | 4s | 1d ago | 48m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.21% | 98.69% | 99.58% | 99.58% | 2806 ms | ↓ 0.90x | 19 | 2m | 17h ago | 48m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.20% | 99.87% | 86.14% | 86.14% | 706 ms | ↓ 0.73x | 1 | 10s | 4d ago | 47m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.17% | 99.58% | 83.11% | 83.11% | 1724 ms | ↓ 0.59x | 5 | 41s | 4d ago | 41m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.17% | 99.17% | 69.77% | 69.77% | 1366 ms | ↑ 1.08x | 10 | 6m | 19h ago | 41m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.17% | 98.55% | 86.80% | 86.80% | 4253 ms | ↓ 0.73x | 20 | 2m | 5d ago | 42m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 99.17% | 96.19% | 83.77% | 83.77% | 4680 ms | ↓ 0.81x | 49 | 4m | 4d ago | 40m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.17% | 99.79% | 99.80% | 99.80% | 1616 ms | ↓ 0.84x | 3 | 0s | 1d ago | 45m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.17% | 98.95% | 97.96% | 97.96% | 3612 ms | ↓ 0.80x | 10 | 13m | 6d ago | 37m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.17% | 99.86% | 92.71% | 92.71% | 2012 ms | ↓ 0.83x | 2 | 0s | 4d ago | 38m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.17% | 99.37% | 92.15% | 92.15% | 2668 ms | ↓ 0.94x | 9 | 0s | 2d ago | 38m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.17% | 75.21% | 92.83% | 92.83% | 3864 ms | ↓ 0.92x | 7 | 20h 26m | 4d ago | 37m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.16% | 99.84% | 99.84% | 99.84% | 1113 ms | ↓ 0.54x | 1 | 3m | 6h ago | 33m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.16% | 99.72% | 99.89% | 99.89% | 921 ms | ↓ 0.55x | 3 | 59s | 1d ago | 33m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.16% | 99.40% | 99.40% | 99.40% | 505 ms | ↑ 1.34x | 1 | 4m | 3d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 99.16% | 99.84% | 99.84% | 99.84% | 344 ms | ↑ 1.20x | 1 | 4m | 4d ago | 33m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (38)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [LLMService](https://lmspeed.net/provider/llmservice) | 98.81% | 99.41% | 22.90% | 22.90% | 2125 ms | ↓ 0.85x | 8 | 8m | 4d ago | 48m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.80% | 97.88% | 86.25% | 86.25% | 4175 ms | ↓ 0.83x | 30 | 2m | 2h ago | 47m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 98.76% | 96.30% | 84.93% | 84.93% | 4296 ms | ↓ 0.83x | 48 | 3m | 17h ago | 38m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.75% | 89.83% | 93.54% | 93.54% | 881 ms | ↓ 0.52x | 78 | 20m | 3h ago | 34m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 98.74% | 99.79% | 99.81% | 99.81% | 1158 ms | ↓ 0.66x | 2 | 2m | 2d ago | 32m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.74% | 98.04% | 93.35% | 93.35% | 4539 ms | ↓ 0.75x | 27 | 2m | 1d ago | 33m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 98.74% | 99.28% | 99.28% | 99.28% | 2016 ms | ↓ 0.65x | 4 | 30m | 12h ago | 33m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.41% | 99.54% | 99.64% | 99.64% | 974 ms | ↓ 0.74x | 6 | 48m | 2d ago | 47m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.33% | 99.37% | 98.74% | 98.74% | 1118 ms | ↑ 1.11x | 8 | 17s | 3d ago | 34m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.33% | 97.48% | 92.70% | 92.70% | 4794 ms | ↑ 1.27x | 20 | 19m | 2d ago | 34m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.98% | 98.87% | 33.84% | 33.84% | 1922 ms | ↓ 0.91x | 5 | 50m | 2d ago | 46m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 97.93% | 99.52% | 97.56% | 97.56% | 2225 ms | ↓ 0.92x | 7 | 0s | 15h ago | 42m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 97.93% | 99.59% | 81.29% | 81.29% | 1847 ms | ↓ 0.86x | 1 | 3h | 2d ago | 49m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 97.93% | 27.93% | 46.16% | 46.16% | 158 ms | ↓ 0.20x | 4 | 4d 19h | 6d ago | 37m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 97.91% | 99.65% | 98.35% | 98.35% | 1863 ms | ↓ 0.89x | 3 | 3m | 2d ago | 33m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.91% | 97.12% | 97.12% | 97.12% | 4470 ms | ↓ 0.84x | 33 | 3m | 15h ago | 32m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.51% | 97.21% | 54.81% | 54.81% | 2887 ms | ↓ 0.79x | 38 | 1m | 3d ago | 37m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.38% | 85.14% | 77.96% | 77.96% | 3973 ms | → 0.98x | 78 | 2h 49m | 4h ago | 50m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 96.77% | 15.95% | 39.86% | 39.86% | 1068 ms | → 1.00x | 1 | 23d 21h | 30d ago | 47m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.69% | 94.17% | 73.90% | 73.90% | 1398 ms | ↓ 0.66x | 21 | 1h 5m | 2d ago | 41m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 96.67% | 94.25% | 83.62% | 83.62% | 1292 ms | ↓ 0.85x | 9 | 3h 24m | 3d ago | 34m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 96.65% | 99.44% | 99.43% | 99.43% | 865 ms | ↓ 0.59x | 2 | 3h 1m | 5d ago | 33m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 95.04% | 88.37% | 23.20% | 23.20% | 4073 ms | ↓ 0.77x | 127 | 12m | 15h ago | 42m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 94.14% | 98.67% | 98.58% | 98.58% | 2611 ms | → 1.00x | 13 | 12m | 2h ago | 34m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 92.15% | 97.64% | 91.70% | 91.70% | 1598 ms | ↓ 0.92x | 33 | 55s | 23h ago | 40m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.29% | 88.34% | 60.69% | 60.69% | 2899 ms | ↓ 0.69x | 137 | 6m | 4h ago | 36m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 88.84% | 70.13% | 96.31% | 96.31% | 4437 ms | ↓ 0.74x | 298 | 15m | 15h ago | 48m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 86.78% | 74.90% | 27.48% | 27.48% | 3885 ms | ↓ 0.64x | 220 | 19m | 18h ago | 41m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 84.52% | 74.53% | 81.65% | 81.65% | 4371 ms | ↓ 0.76x | 185 | 26m | 4h ago | 32m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 84.23% | 91.46% | 95.21% | 95.21% | 1436 ms | ↓ 0.92x | 21 | 2h 9m | 10h ago | 35m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 81.89% | 75.12% | 63.06% | 63.06% | 4610 ms | ↓ 0.80x | 260 | 13m | 3h ago | 46m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 80.17% | 92.16% | 20.64% | 20.64% | 3443 ms | ↑ 1.08x | 99 | 5m | 22h ago | 46m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 67.06% | 94.56% | 96.48% | 96.48% | 2135 ms | ↓ 0.70x | 2 | 1d 12h | 3d ago | 48m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 63.45% | 58.41% | 95.67% | 95.67% | 2727 ms | ↓ 0.91x | 2 | 4d 7h | 15d ago | 49m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 49.61% | 75.94% | 94.09% | 94.09% | 3078 ms | ↓ 0.94x | 12 | 7h 28m | 1d ago | 49m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 41.32% | 6.93% | 78.10% | 78.10% | 1595 ms | → 1.00x | 95 | 6h 32m | 3h ago | 42m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 34.44% | 32.68% | 64.38% | 64.38% | 2496 ms | ↑ 1.10x | 3 | 6d 2h | 6d ago | 37m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 7.62% | 3.89% | 50.43% | 50.43% | 2938 ms | ↓ 0.78x | 149 | 4h 8m | 2h ago | 50m ago |

</details>

<details open>
<summary><strong>🔴 Down (272)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.59% | 98.42% | 22.12% | 22.12% | 3356 ms | ↓ 0.76x | 23 | 0s | 44m ago | 44m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.59% | 99.79% | 83.41% | 83.41% | 1753 ms | ↓ 0.77x | 3 | 0s | 40m ago | 40m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.93% | 96.44% | 98.45% | 98.45% | 3856 ms | ↓ 0.81x | 50 | 1m | 44m ago | 44m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 95.40% | 98.86% | 98.86% | 98.86% | 940 ms | ↓ 0.84x | 3 | 1h 40m | 33m ago | 33m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 95.40% | 82.25% | 38.62% | 38.62% | 3231 ms | ↓ 0.50x | 144 | 20m | 32m ago | 32m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 76.03% | 93.46% | 96.30% | 96.30% | 1501 ms | ↓ 0.90x | 8 | 5h 11m | 1d ago | 46m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 66.53% | 93.95% | 93.95% | 93.95% | 1630 ms | ↓ 0.82x | 2 | 20h 16m | 2d ago | 32m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 61.51% | 93.12% | 93.84% | 93.84% | 915 ms | ↓ 0.78x | 4 | 11h 53m | 2d ago | 34m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 58.51% | 93.02% | 85.94% | 85.94% | 1354 ms | ↓ 0.54x | 95 | 3m | 2h ago | 36m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 54.84% | 90.16% | 21.67% | 21.67% | 3197 ms | ↑ 1.17x | 55 | 52m | 3h ago | 47m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 51.44% | 91.91% | 32.48% | 32.48% | 1322 ms | ↑ 1.11x | 2 | 1d 6h | 2d ago | 46m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 31.67% | 46.42% | 75.86% | 75.86% | 4992 ms | ↑ 1.36x | 223 | 1h 15m | 35m ago | 35m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 28.93% | 87.81% | 22.78% | 22.78% | 544 ms | ↓ 0.61x | 4 | 21h 36m | 4d ago | 42m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 25.31% | 87.35% | 66.54% | 66.54% | 3702 ms | ↑ 1.63x | 8 | 10h 58m | 3d ago | 36m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 21.99% | 85.81% | 83.82% | 83.82% | 1432 ms | ↓ 0.69x | 3 | 1d 10h | 3d ago | 35m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 13.22% | 82.88% | 74.40% | 74.40% | 2994 ms | ↓ 0.53x | 38 | 3h 2m | 5d ago | 45m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 2.89% | 83.36% | 19.86% | 19.86% | 1374 ms | ↓ 0.59x | 6 | 23h 33m | 6d ago | 43m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 1.23% | 83.62% | 98.39% | 98.39% | 1251 ms | ↑ 1.16x | 2 | 2d 24h | 6d ago | 46m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.41% | 76.41% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.46% | 63.46% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.30% | 68.30% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 36.64% | 36.64% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 71.08% | 71.08% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.74% | 52.74% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.21% | 5.21% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.26% | 10.26% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 76.23% | 89.95% | 89.95% | — | — | 1 | 10d 24h | 11d ago | 34m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.65% | 47.65% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 37.26% | 74.96% | 74.96% | — | — | 12 | 1d 17h | 21d ago | 33m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.14% | 3.14% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 11.67% | 80.46% | 80.46% | — | — | 1 | 27d 2h | 27d ago | 36m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 76.84% | 76.84% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.73% | 33.73% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 74.39% | 91.04% | 91.04% | — | — | 2 | 5d 16h | 11d ago | 35m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.87% | 83.87% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.17% | 21.17% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.39% | 67.39% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 44.69% | 44.69% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.13% | 27.13% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.86% | 84.86% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.45% | 75.45% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.02% | 58.02% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.14% | 71.14% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 20h | 27d ago | 49m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.21% | 13.21% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.66% | 44.66% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.61% | 87.61% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.43% | 30.43% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 24.21% | 69.65% | 69.65% | — | — | 1 | 23d 21h | 24d ago | 33m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 25.11% | 32.27% | 32.27% | — | — | 3 | 7d 21h | 24d ago | 34m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 79.14% | 79.14% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 45.19% | 77.25% | 77.25% | — | — | 6 | 3d 2h | 18d ago | 33m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 32.07% | 73.37% | 73.37% | — | — | 1 | 22d | 22d ago | 33m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 77.47% | 77.47% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 4.42% | 49.02% | 49.02% | — | — | 6 | 4d 19h | 9d ago | 46m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 24.86% | 24.86% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 47.97% | 47.97% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.25% | 31.98% | 31.98% | — | — | 3 | 6d 2h | 7d ago | 41m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.90% | 1.90% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 8.00% | 33.15% | 33.15% | — | — | 1 | 28d | 28d ago | 33m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 65.12% | 65.12% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 55.51% | 46.54% | 46.54% | — | — | 2 | 8d | 15d ago | 41m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 66.84% | 66.84% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 25.11% | 70.22% | 70.22% | — | — | 3 | 7d 21h | 24d ago | 34m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 55.72% | 39.93% | 39.93% | — | — | 4 | 4d | 16d ago | 33m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 55.27% | 64.60% | 64.60% | — | — | 5 | 3d 5h | 16d ago | 40m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.49% | 26.49% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.56% | 50.56% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 44.31% | 44.31% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.15% | 22.15% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.56% | 68.56% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 67.80% | 32.57% | 32.57% | — | — | 2 | 5d 19h | 8d ago | 42m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 38.75% | 38.75% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.91% | 48.91% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.84% | 46.84% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.42% | 21.42% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.65% | 4.65% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.82% | 60.82% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.42% | 75.42% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 7.83% | 69.06% | 69.06% | — | — | 1 | 28d 1h | 28d ago | 36m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.56% | 5.56% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.71% | 73.71% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.36% | 74.36% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.54% | 28.54% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 84.37% | 84.37% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.29% | 20.29% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.93% | 48.93% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 47.48% | 84.13% | 84.13% | — | — | 1 | 17d 15h | 18d ago | 48m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 17.32% | 17.32% | 17.32% | — | — | 2 | 11d 12h | 23d ago | 33m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 25.04% | 68.65% | 68.65% | — | — | 4 | 5d 22h | 24d ago | 34m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 49.33% | 79.50% | 79.50% | — | — | 3 | 5d 21h | 18d ago | 33m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 24.54% | 75.51% | 75.51% | — | — | 12 | 1d 23h | 24d ago | 35m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.11% | 48.11% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 13.94% | 14.73% | 14.73% | — | — | 8 | 2d 23h | 24d ago | 34m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.13% | 6.13% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 56.10% | 56.10% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.31% | 43.31% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 7.29% | 16.95% | 16.95% | — | — | 2 | 14d 2h | 28d ago | 34m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.26% | 39.26% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 21.82% | 74.49% | 74.49% | — | — | 3 | 7d 13h | 23d ago | 49m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.83% | 20.83% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 68.74% | 68.74% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.52% | 54.52% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 41.82% | 76.78% | 76.78% | — | — | 1 | 19d 14h | 20d ago | 34m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.64% | 35.64% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 66.27% | 66.27% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 71.03% | 71.03% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.90% | 62.90% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.35% | 2.35% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.18% | 77.18% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.73% | 38.73% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.75% | 90.75% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.16% | 77.16% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.28% | 30.28% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.29% | 75.29% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 43.05% | 43.05% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 17.62% | 17.62% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.10% | 40.10% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.21% | 66.21% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 58.42% | 58.42% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.19% | 24.19% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.50% | 73.50% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 43.73% | 43.73% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.88% | 2.88% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.67% | 39.67% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.06% | 71.06% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 54.92% | 54.92% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 11.99% | 21.22% | 21.22% | — | — | 1 | 26d 24h | 27d ago | 34m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.89% | 33.89% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 53.33% | 53.33% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.66% | 82.66% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 17.00% | 92.84% | 92.84% | — | — | 2 | 12d 10h | 25d ago | 49m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.30% | 23.30% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.78% | 10.78% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 21.31% | 25.09% | 25.09% | — | — | 3 | 8d 5h | 11d ago | 36m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.39% | 22.39% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.23% | 49.23% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.51% | 86.51% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 48.73% | 48.73% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.51% | 65.51% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 67.69% | 92.76% | 92.76% | — | — | 2 | 6d 12h | 13d ago | 38m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 7.84% | 7.84% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.27% | 16.27% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.09% | 46.09% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.29% | 46.29% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 17.00% | 17.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.38% | 51.38% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 88.41% | 88.41% | — | — | 1 | 26d 20h | 27d ago | 43m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.68% | 35.68% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.60% | 19.60% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 28.99% | 28.99% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.17% | 5.17% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.70% | 72.70% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.89% | 83.89% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 47.41% | 47.41% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.07% | 77.07% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.07% | 76.07% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.57% | 52.57% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.89% | 68.89% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 75.91% | 75.91% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 22h | 27d ago | 33m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.15% | 18.15% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.41% | 54.41% | — | — | 1 | 29d 23h | 30d ago | 49m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.73% | 35.73% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.79% | 3.79% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.66% | 31.66% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.71% | 63.71% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.34% | 22.34% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.72% | 6.72% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.16% | 54.16% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.91% | 22.91% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.79% | 62.79% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 31.24% | 31.24% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 25.11% | 69.70% | 69.70% | — | — | 3 | 7d 21h | 24d ago | 34m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.85% | 3.85% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 20h | 27d ago | 34m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.65% | 44.65% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.44% | 38.44% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 30.20% | 30.20% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.33% | 17.33% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.09% | 5.09% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.21% | 10.21% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.73% | 16.73% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.85% | 14.85% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.77% | 25.77% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.02% | 9.02% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.57% | 6.57% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.70% | 0.70% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.97% | 3.97% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.60% | 4.60% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 72.91% | 78.54% | 78.54% | — | — | 2 | 5d 21h | 12d ago | 32m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.67% | 36.67% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.08% | 77.08% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.89% | 63.89% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.42% | 40.42% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.41% | 77.41% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.98% | 43.98% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.46% | 38.46% | — | — | 1 | 29d 23h | 30d ago | 48m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.37% | 1.37% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.66% | 17.66% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 47m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.33% | 75.33% | — | — | 1 | 29d 23h | 30d ago | 42m ago |

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
