# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**673 providers** — 361 🟢 operational · 49 🟡 degraded · 263 🔴 down · 0 ⚫ unknown

_Updated 2026-06-30 06:58 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (361)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.38% | 98.38% | 632 ms | ↓ 0.94x | 0 | — | — | 6h ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1547 ms | ↓ 0.95x | 0 | — | — | 6h ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.81% | 94.12% | 94.12% | 1650 ms | ↓ 0.75x | 3 | 0s | 24d ago | 6h ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.81% | 23.36% | 23.36% | 3153 ms | ↑ 1.21x | 3 | 0s | 20d ago | 6h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.53% | 97.53% | 3701 ms | ↑ 1.07x | 0 | — | — | 7h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.63% | 58.63% | 1793 ms | ↓ 0.88x | 0 | — | — | 6h ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.93% | 99.93% | 99.93% | 1210 ms | ↓ 0.93x | 1 | 0s | 24d ago | 6h ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.43% | 99.55% | 99.55% | 925 ms | ↓ 0.82x | 4 | 35m | 8d ago | 6h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.75% | 98.70% | 98.70% | 1199 ms | ↓ 0.95x | 4 | 0s | 10d ago | 6h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.58% | 99.58% | 3170 ms | ↓ 0.86x | 0 | — | — | 7h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.65% | 95.65% | 2995 ms | ↑ 1.15x | 0 | — | — | 6h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2495 ms | ↑ 1.24x | 0 | — | — | 6h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.92% | 97.92% | 3536 ms | ↑ 1.22x | 0 | — | — | 6h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.88% | 93.08% | 93.08% | 2494 ms | → 0.97x | 1 | 50m | 19d ago | 7h ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 2483 ms | ↑ 1.22x | 1 | 0s | 11d ago | 6h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 94.71% | 95.74% | 95.74% | 1215 ms | ↓ 0.40x | 11 | 2h 55m | 21m ago | 6h ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1210 ms | ↑ 1.12x | 0 | — | — | 6h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1486 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 24.14% | 65.38% | 65.38% | 2057 ms | → 0.95x | 2 | 10d 12h | 7d ago | 6h ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 100.00% | 100.00% | 100.00% | 100.00% | 205 ms | → 1.00x | 0 | — | — | 6h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.02% | 99.02% | 384 ms | ↓ 0.31x | 0 | — | — | 6h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.30% | 39.30% | 808 ms | ↑ 1.15x | 0 | — | — | 7h ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1609 ms | ↑ 1.14x | 0 | — | — | 6h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.13% | 97.13% | 3013 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.91% | 98.91% | 1132 ms | ↑ 1.12x | 1 | 30m | 21d ago | 7h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 87.61% | 68.12% | 68.12% | 2048 ms | ↑ 1.48x | 2 | 1d 14h | 14d ago | 6h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1337 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.87% | 96.93% | 96.93% | 1004 ms | ↑ 1.18x | 2 | 0s | 11d ago | 6h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.35% | 88.35% | 1935 ms | ↑ 1.23x | 0 | — | — | 6h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.94% | 99.94% | 1872 ms | ↑ 1.09x | 1 | 0s | 9d ago | 6h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.50% | 98.50% | 4138 ms | ↑ 1.14x | 0 | — | — | 6h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.68% | 99.65% | 99.65% | 1432 ms | ↑ 1.11x | 3 | 19m | 15d ago | 6h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.96% | 86.96% | 2600 ms | ↑ 1.31x | 0 | — | — | 6h ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.95% | 99.95% | 1011 ms | ↓ 0.91x | 1 | 0s | 17d ago | 6h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.84% | 97.84% | 1447 ms | ↑ 1.17x | 0 | — | — | 6h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.94% | 99.98% | 99.98% | 825 ms | ↓ 0.94x | 1 | 0s | 8d ago | 7h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.94% | 99.75% | 99.75% | 3179 ms | ↑ 1.08x | 1 | 0s | 8d ago | 7h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.94% | 99.07% | 99.07% | 848 ms | ↑ 1.39x | 1 | 0s | 8d ago | 6h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.95% | 97.95% | 3969 ms | → 0.98x | 0 | — | — | 7h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.00% | 99.63% | 99.63% | 2250 ms | ↑ 1.09x | 2 | 3h 20m | 11d ago | 6h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 98.95% | 20.07% | 20.07% | 2926 ms | ↓ 0.88x | 7 | 37m | 10d ago | 7h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.58% | 96.58% | 751 ms | ↓ 0.91x | 0 | — | — | 6h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.14% | 86.53% | 86.53% | 1780 ms | ↓ 0.93x | 8 | 6h 40m | 21d ago | 6h ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1180 ms | → 0.99x | 0 | — | — | 6h ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1413 ms | ↓ 0.57x | 0 | — | — | 6h ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.79% | 99.79% | 99.79% | 1602 ms | → 0.97x | 2 | 0s | 15d ago | 6h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.87% | 99.04% | 99.04% | 2884 ms | → 0.99x | 2 | 0s | 12d ago | 6h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.87% | 99.87% | 99.87% | 1569 ms | ↑ 1.13x | 2 | 0s | 21d ago | 6h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.94% | 99.54% | 99.54% | 2164 ms | → 1.00x | 1 | 0s | 8d ago | 7h ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.81% | 99.86% | 99.86% | 573 ms | ↓ 0.40x | 0 | — | — | 6h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3715 ms | ↓ 0.94x | 0 | — | — | 7h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.31% | 97.70% | 97.70% | 2281 ms | ↑ 1.05x | 9 | 7m | 8d ago | 6h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.73% | 99.73% | 837 ms | ↓ 0.94x | 1 | 0s | 29d ago | 6h ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1287 ms | ↑ 1.06x | 0 | — | — | 6h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.94% | 32.25% | 32.25% | 1348 ms | ↑ 1.10x | 1 | 0s | 8d ago | 7h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.94% | 96.62% | 96.62% | 2009 ms | ↓ 0.94x | 1 | 0s | 9d ago | 6h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.86% | 98.03% | 98.03% | 4648 ms | ↑ 1.46x | 13 | 48m | 27d ago | 6h ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.82% | 99.82% | 99.82% | 2170 ms | ↑ 1.05x | 1 | 30m | 17d ago | 6h ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1181 ms | ↓ 0.76x | 0 | — | — | 6h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 376 ms | ↓ 0.58x | 0 | — | — | 6h ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.81% | 99.82% | 99.82% | 613 ms | → 0.98x | 3 | 0s | 19d ago | 6h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.91% | 96.91% | 599 ms | ↓ 0.91x | 0 | — | — | 6h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.85% | 98.38% | 98.38% | 1978 ms | → 1.01x | 1 | 21h 30m | 26d ago | 6h ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1048 ms | → 0.97x | 0 | — | — | 6h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.34% | 56.34% | 1931 ms | ↑ 1.21x | 0 | — | — | 6h ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.45% | 98.45% | 98.45% | 749 ms | → 0.95x | 2 | 4h 33m | 19d ago | 6h ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.81% | 99.67% | 99.67% | 1628 ms | ↓ 0.55x | 3 | 0s | 12d ago | 6h ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1627 ms | ↑ 1.19x | 0 | — | — | 6h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 4024 ms | ↑ 1.11x | 0 | — | — | 7h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.24% | 97.24% | 1834 ms | ↑ 1.31x | 0 | — | — | 7h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.16% | 99.16% | 1195 ms | ↓ 0.85x | 2 | 0s | 17d ago | 6h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.22% | 84.22% | 3263 ms | ↑ 1.16x | 0 | — | — | 6h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.75% | 67.88% | 67.88% | 1431 ms | → 1.01x | 3 | 7m | 10d ago | 6h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 982 ms | ↑ 1.18x | 0 | — | — | 6h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.80% | 98.80% | 2630 ms | → 1.05x | 0 | — | — | 6h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4483 ms | ↑ 1.15x | 0 | — | — | 6h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.15% | 93.15% | 714 ms | ↓ 0.85x | 0 | — | — | 6h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1191 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 680 ms | ↑ 1.41x | 1 | 0s | 27d ago | 6h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.47% | 99.47% | 829 ms | ↓ 0.81x | 0 | — | — | 6h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.09% | 98.09% | 3288 ms | ↑ 1.30x | 1 | 0s | 20d ago | 6h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.36% | 90.36% | 1283 ms | ↑ 1.13x | 1 | 0s | 23d ago | 6h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.88% | 49.38% | 49.38% | 2163 ms | ↑ 1.23x | 2 | 0s | 10d ago | 6h ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2271 ms | → 0.99x | 0 | — | — | 6h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.49% | 77.49% | 1365 ms | ↑ 1.16x | 0 | — | — | 6h ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.68% | 96.59% | 96.59% | 1529 ms | ↑ 1.23x | 1 | 2h 1m | 12d ago | 6h ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 973 ms | → 1.05x | 0 | — | — | 6h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.32% | 98.32% | 2639 ms | ↑ 1.05x | 0 | — | — | 6h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.44% | 54.04% | 54.04% | 1014 ms | ↓ 0.91x | 5 | 24m | 10d ago | 6h ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 923 ms | → 0.96x | 0 | — | — | 6h ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2491 ms | ↑ 1.28x | 0 | — | — | 6h ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.81% | 99.83% | 99.83% | 1662 ms | ↓ 0.87x | 3 | 0s | 12d ago | 6h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 83.09% | 83.09% | 2317 ms | ↑ 1.10x | 2 | 0s | 21d ago | 6h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.88% | 64.18% | 64.18% | 629 ms | ↓ 0.93x | 2 | 0s | 10d ago | 6h ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.09% | 98.09% | 3340 ms | ↑ 2.15x | 0 | — | — | 6h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 96.98% | 97.92% | 97.92% | 4436 ms | → 1.03x | 24 | 28m | 7d ago | 6h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2082 ms | → 1.00x | 0 | — | — | 6h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.26% | 99.33% | 99.33% | 3264 ms | ↓ 0.89x | 5 | 5h 45m | 15d ago | 7h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.98% | 61.98% | 1914 ms | ↑ 1.16x | 0 | — | — | 6h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.96% | 64.96% | 2061 ms | ↑ 1.15x | 0 | — | — | 6h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.75% | 99.88% | 99.88% | 1591 ms | ↓ 0.92x | 1 | 1h 9m | 14d ago | 6h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2182 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.88% | 90.73% | 90.73% | 2324 ms | → 1.04x | 2 | 0s | 10d ago | 6h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1930 ms | → 0.98x | 0 | — | — | 6h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 629 ms | ↓ 0.87x | 0 | — | — | 6h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.82% | 97.96% | 97.96% | 1786 ms | ↓ 0.95x | 2 | 6h 16m | 15d ago | 6h ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.22% | 90.13% | 90.13% | 3243 ms | ↓ 0.94x | 5 | 15h 33m | 18d ago | 6h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2338 ms | → 0.95x | 0 | — | — | 7h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2722 ms | ↑ 1.26x | 0 | — | — | 6h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3604 ms | → 0.98x | 0 | — | — | 7h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.25% | 98.25% | 3766 ms | ↓ 0.92x | 0 | — | — | 7h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.63% | 99.90% | 99.90% | 876 ms | → 0.98x | 4 | 10m | 8d ago | 7h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.88% | 76.88% | 2321 ms | → 0.95x | 0 | — | — | 6h ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2455 ms | ↑ 1.50x | 0 | — | — | 6h ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.43% | 98.26% | 98.26% | 1657 ms | ↑ 1.52x | 7 | 8m | 16d ago | 6h ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.37% | 99.68% | 99.68% | 1606 ms | ↑ 1.05x | 1 | 2h 60m | 22d ago | 6h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1751 ms | → 1.02x | 0 | — | — | 7h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 633 ms | ↓ 0.51x | 0 | — | — | 7h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2546 ms | ↑ 1.17x | 1 | 0s | 21d ago | 7h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.07% | 90.07% | 1589 ms | → 1.03x | 0 | — | — | 6h ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 334 ms | → 1.00x | 0 | — | — | 6h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.82% | 99.82% | 1268 ms | ↑ 1.30x | 0 | — | — | 7h ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 588 ms | → 1.00x | 0 | — | — | 6h ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.87% | 99.94% | 99.94% | 1762 ms | ↑ 1.23x | 2 | 0s | 15d ago | 6h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.19% | 86.19% | 2967 ms | ↑ 1.15x | 0 | — | — | 6h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2024 ms | → 1.04x | 0 | — | — | 6h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2327 ms | ↑ 1.21x | 0 | — | — | 6h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 932 ms | ↑ 1.21x | 0 | — | — | 6h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.68% | 97.68% | 2658 ms | ↑ 1.47x | 0 | — | — | 6h ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1738 ms | ↑ 1.16x | 1 | 0s | 24d ago | 6h ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1644 ms | ↑ 1.09x | 1 | 0s | 16d ago | 6h ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.95% | 99.95% | 1858 ms | ↑ 1.44x | 1 | 0s | 21d ago | 6h ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2149 ms | ↑ 1.09x | 0 | — | — | 6h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.87% | 98.92% | 98.92% | 243 ms | ↓ 0.83x | 1 | 29m | 8d ago | 6h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3211 ms | ↑ 1.41x | 0 | — | — | 6h ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.44% | 90.44% | 1093 ms | ↓ 0.95x | 0 | — | — | 6h ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.81% | 99.83% | 99.83% | 733 ms | → 1.02x | 1 | 1h | 30d ago | 6h ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.88% | 99.88% | 99.88% | 777 ms | ↓ 0.54x | 1 | 0s | 16d ago | 6h ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1520 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.70% | 25.70% | 2830 ms | ↑ 1.43x | 0 | — | — | 6h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 950 ms | → 0.98x | 0 | — | — | 7h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2283 ms | ↓ 0.95x | 0 | — | — | 7h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 854 ms | ↑ 1.22x | 0 | — | — | 7h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.33% | 98.33% | 1370 ms | ↓ 0.94x | 1 | 0s | 12d ago | 6h ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.20% | 98.20% | 889 ms | ↓ 0.78x | 0 | — | — | 6h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.88% | 21.69% | 21.69% | 638 ms | ↓ 0.49x | 2 | 0s | 10d ago | 6h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 570 ms | ↓ 0.72x | 0 | — | — | 7h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.69% | 99.75% | 99.75% | 1670 ms | → 1.02x | 4 | 8m | 24d ago | 7h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.84% | 98.84% | 4345 ms | → 0.95x | 0 | — | — | 7h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 3106 ms | ↑ 1.34x | 0 | — | — | 7h ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 68 ms | → 1.00x | 0 | — | — | 6h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.76% | 33.07% | 33.07% | 2356 ms | ↑ 1.11x | 6 | 1h 58m | 16d ago | 7h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 41.55% | 33.35% | 33.35% | 1963 ms | → 0.97x | 2 | 8d 2h | 10d ago | 6h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 86.42% | 97.97% | 97.97% | 1971 ms | ↑ 1.06x | 94 | 33m | 20d ago | 7h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2750 ms | → 0.99x | 0 | — | — | 7h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.94% | 99.36% | 99.36% | 2327 ms | ↑ 1.12x | 1 | 0s | 21d ago | 6h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 44.47% | 44.47% | 759 ms | ↓ 0.90x | 1 | 0s | 20d ago | 7h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.94% | 98.62% | 98.62% | 2746 ms | ↓ 0.76x | 1 | 0s | 8d ago | 6h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1097 ms | ↓ 0.95x | 0 | — | — | 7h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2886 ms | → 0.97x | 0 | — | — | 7h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.94% | 99.82% | 99.82% | 1592 ms | ↑ 1.08x | 1 | 0s | 24d ago | 6h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.18% | 21.18% | 778 ms | → 0.98x | 1 | 0s | 17d ago | 7h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2593 ms | → 1.04x | 0 | — | — | 6h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 674 ms | ↓ 0.59x | 0 | — | — | 6h ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 434 ms | ↓ 0.88x | 0 | — | — | 6h ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.56% | 99.56% | 99.56% | 913 ms | → 0.97x | 3 | 30m | 7d ago | 6h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 607 ms | → 0.98x | 0 | — | — | 7h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.52% | 62.52% | 1483 ms | → 0.99x | 0 | — | — | 6h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 73.35% | 87.32% | 87.32% | 717 ms | ↓ 0.78x | 5 | 1d 12h | 13d ago | 6h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.10% | 83.99% | 83.99% | 1700 ms | ↑ 1.30x | 2 | 13h | 21d ago | 6h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2908 ms | → 1.02x | 0 | — | — | 7h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.18% | 98.83% | 98.83% | 2084 ms | ↑ 1.25x | 1 | 5h 50m | 16d ago | 6h ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.00% | 99.00% | 99.00% | 3135 ms | → 1.02x | 1 | 2h 37m | 10d ago | 6h ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.19% | 64.40% | 64.40% | 1281 ms | ↓ 0.58x | 3 | 1h 32m | 10d ago | 6h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.58% | 89.58% | 1865 ms | → 1.02x | 1 | 0s | 17d ago | 7h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.56% | 23.47% | 23.47% | 1633 ms | ↓ 0.93x | 3 | 40m | 14d ago | 6h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.50% | 98.97% | 98.97% | 3452 ms | ↑ 1.38x | 4 | 30m | 14d ago | 6h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.38% | 80.99% | 80.99% | 2022 ms | ↓ 0.92x | 1 | 13h | 27d ago | 7h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.87% | 89.04% | 89.04% | 792 ms | ↓ 0.78x | 2 | 0s | 16d ago | 6h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1019 ms | ↓ 0.85x | 1 | 0s | 20d ago | 7h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1025 ms | ↓ 0.92x | 0 | — | — | 7h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 47.86% | 47.86% | 659 ms | ↑ 1.06x | 1 | 0s | 20d ago | 6h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1604 ms | ↑ 1.19x | 0 | — | — | 6h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 849 ms | → 0.98x | 0 | — | — | 6h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.31% | 98.86% | 98.86% | 3664 ms | ↑ 1.06x | 2 | 8h 60m | 11d ago | 7h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.63% | 98.63% | 1837 ms | ↑ 1.09x | 0 | — | — | 6h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.69% | 98.28% | 98.28% | 458 ms | ↓ 0.65x | 1 | 1h 40m | 12d ago | 6h ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.69% | 96.81% | 96.81% | 1358 ms | ↑ 1.22x | 2 | 45m | 19d ago | 6h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.21% | 71.21% | 1610 ms | ↑ 1.20x | 0 | — | — | 6h ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1290 ms | → 1.05x | 0 | — | — | 6h ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1326 ms | → 0.99x | 0 | — | — | 6h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.85% | 81.85% | 3208 ms | ↑ 1.21x | 1 | 0s | 20d ago | 6h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2001 ms | → 0.99x | 0 | — | — | 7h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 624 ms | ↓ 0.33x | 0 | — | — | 6h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 666 ms | ↓ 0.81x | 1 | 0s | 21d ago | 7h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 87.41% | 37.30% | 37.30% | 1843 ms | → 1.01x | 14 | 5h 29m | 12d ago | 6h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 66.65% | 29.02% | 29.02% | 3450 ms | ↑ 1.07x | 2 | 4d 14h | 21d ago | 6h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.98% | 85.98% | 1306 ms | ↑ 1.42x | 0 | — | — | 7h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2642 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.75% | 98.91% | 98.91% | 3091 ms | ↓ 0.93x | 5 | 0s | 14d ago | 7h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.82% | 96.82% | 1261 ms | → 0.96x | 0 | — | — | 6h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1723 ms | ↑ 1.19x | 0 | — | — | 6h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2612 ms | → 0.99x | 0 | — | — | 7h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.75% | 97.66% | 97.66% | 555 ms | ↓ 0.72x | 2 | 31m | 9d ago | 6h ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1752 ms | → 1.02x | 1 | 0s | 18d ago | 6h ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4119 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.91% | 59.91% | 742 ms | → 0.97x | 0 | — | — | 6h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.70% | 43.70% | 3017 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 3680 ms | ↓ 0.90x | 0 | — | — | 7h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3286 ms | → 1.00x | 0 | — | — | 7h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2650 ms | ↑ 1.09x | 0 | — | — | 6h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 93.91% | 92.52% | 92.52% | 2152 ms | ↓ 0.94x | 1 | 1d 15h | 29d ago | 6h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2457 ms | ↑ 1.06x | 0 | — | — | 6h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.18% | 98.83% | 98.83% | 2685 ms | ↑ 1.14x | 5 | 47m | 8d ago | 6h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.65% | 80.65% | 2116 ms | ↑ 1.49x | 0 | — | — | 6h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 189 ms | → 1.01x | 0 | — | — | 7h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2805 ms | ↑ 1.15x | 0 | — | — | 7h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1233 ms | ↓ 0.70x | 0 | — | — | 6h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2288 ms | → 1.02x | 1 | 0s | 12d ago | 7h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.55% | 99.55% | 3304 ms | → 0.95x | 1 | 0s | 15d ago | 7h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.10% | 81.10% | 2722 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.33% | 87.33% | 3452 ms | ↑ 1.76x | 0 | — | — | 6h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.94% | 96.27% | 96.27% | 2780 ms | ↑ 1.31x | 1 | 0s | 10d ago | 6h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1868 ms | ↑ 1.23x | 0 | — | — | 7h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.69% | 98.69% | 825 ms | ↑ 1.20x | 0 | — | — | 6h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.46% | 25.46% | 999 ms | ↑ 1.45x | 0 | — | — | 6h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.74% | 97.74% | 458 ms | ↓ 0.50x | 1 | 0s | 18d ago | 6h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 849 ms | → 1.03x | 0 | — | — | 6h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.94% | 63.02% | 63.02% | 2971 ms | ↑ 1.12x | 1 | 0s | 10d ago | 6h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 98.87% | 99.59% | 99.59% | 2602 ms | ↓ 0.82x | 18 | 2m | 10d ago | 7h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 41.59% | 41.59% | 587 ms | ↓ 0.72x | 0 | — | — | 7h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.82% | 98.92% | 98.92% | 1121 ms | ↓ 0.92x | 0 | — | — | 7h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.99% | 21.99% | 1523 ms | → 1.04x | 0 | — | — | 7h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 523 ms | ↓ 0.45x | 0 | — | — | 6h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.58% | 99.58% | 2819 ms | ↑ 1.41x | 1 | 0s | 14d ago | 6h ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2815 ms | ↓ 0.64x | 0 | — | — | 6h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 471 ms | ↓ 0.72x | 0 | — | — | 6h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.68% | 93.68% | 4695 ms | → 1.02x | 0 | — | — | 7h ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.62% | 99.62% | 1915 ms | → 1.05x | 0 | — | — | 7h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.88% | 99.97% | 99.97% | 2332 ms | ↑ 1.06x | 2 | 0s | 10d ago | 6h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 97.11% | 98.42% | 98.42% | 4040 ms | ↑ 1.08x | 19 | 41m | 7d ago | 6h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1137 ms | ↑ 1.16x | 0 | — | — | 6h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1690 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2518 ms | ↑ 1.18x | 0 | — | — | 7h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1661 ms | → 0.96x | 0 | — | — | 7h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 446 ms | ↓ 0.93x | 0 | — | — | 7h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 55.75% | 88.86% | 88.86% | 1812 ms | → 0.99x | 1 | 12d 20h | 27d ago | 7h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.39% | 48.47% | 48.47% | 3176 ms | ↑ 1.09x | 16 | 18m | 13d ago | 7h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.89% | 98.89% | 2919 ms | ↓ 0.94x | 0 | — | — | 6h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.84% | 96.84% | 2941 ms | ↓ 0.94x | 0 | — | — | 7h ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.56% | 99.61% | 99.61% | 1091 ms | ↓ 0.75x | 4 | 15m | 12d ago | 6h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.27% | 89.27% | 2625 ms | ↑ 1.14x | 0 | — | — | 6h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1279 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1792 ms | → 0.99x | 0 | — | — | 6h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1797 ms | ↓ 0.94x | 0 | — | — | 7h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.52% | 99.52% | 1247 ms | ↓ 0.74x | 0 | — | — | 7h ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1384 ms | ↓ 0.75x | 1 | 0s | 24d ago | 6h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1073 ms | ↓ 0.81x | 0 | — | — | 7h ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 100.00% | 97.65% | 21.28% | 21.28% | 2722 ms | ↑ 1.16x | 37 | 32s | 8d ago | 7h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 76.14% | 76.14% | 1032 ms | → 0.99x | 1 | 0s | 8d ago | 6h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 2920 ms | → 1.02x | 1 | 0s | 8d ago | 7h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 1655 ms | → 1.02x | 0 | — | — | 7h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 85.07% | 85.07% | 2284 ms | ↑ 1.10x | 1 | 0s | 29d ago | 7h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.25% | 98.87% | 98.87% | 1969 ms | ↑ 1.08x | 5 | 36m | 9d ago | 6h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.29% | 98.29% | 2767 ms | ↑ 1.16x | 0 | — | — | 6h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2174 ms | ↑ 1.28x | 1 | 0s | 17d ago | 6h ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.75% | 99.85% | 99.85% | 1594 ms | ↑ 1.21x | 2 | 30m | 8d ago | 6h ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.91% | 97.91% | 3839 ms | ↑ 1.42x | 1 | 0s | 24d ago | 6h ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.27% | 95.27% | 95.27% | 1469 ms | ↓ 0.93x | 4 | 6h 14m | 13d ago | 6h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.86% | 98.86% | 1704 ms | ↑ 1.30x | 0 | — | — | 6h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1832 ms | → 0.97x | 0 | — | — | 7h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.65% | 99.65% | 2790 ms | ↑ 1.09x | 0 | — | — | 6h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 944 ms | ↑ 1.09x | 0 | — | — | 6h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.75% | 98.70% | 98.70% | 1234 ms | ↑ 1.24x | 3 | 10m | 17d ago | 6h ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.80% | 99.80% | 99.80% | 1406 ms | ↑ 1.06x | 2 | 0s | 12d ago | 6h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.99% | 31.99% | 1304 ms | ↑ 1.12x | 0 | — | — | 7h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1593 ms | ↑ 1.10x | 0 | — | — | 6h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.94% | 98.43% | 98.43% | 2458 ms | ↑ 1.12x | 1 | 0s | 12d ago | 6h ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 50.22% | 54.15% | 54.15% | 1413 ms | ↓ 0.95x | 1 | 13d 23h | 29d ago | 6h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1820 ms | ↑ 1.16x | 0 | — | — | 7h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.14% | 89.14% | 4062 ms | ↑ 1.15x | 0 | — | — | 6h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.94% | 96.68% | 96.68% | 3178 ms | ↑ 1.21x | 1 | 0s | 11d ago | 6h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1953 ms | ↑ 1.17x | 1 | 0s | 20d ago | 7h ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.00% | 22.00% | 1994 ms | → 0.96x | 0 | — | — | 7h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 606 ms | ↓ 0.72x | 0 | — | — | 6h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.37% | 97.37% | 2763 ms | ↑ 1.22x | 0 | — | — | 6h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2290 ms | → 1.02x | 0 | — | — | 7h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.82% | 99.93% | 99.93% | 1601 ms | ↑ 1.42x | 2 | 10m | 20d ago | 7h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.94% | 23.56% | 23.56% | 3791 ms | ↑ 1.26x | 1 | 0s | 11d ago | 6h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.59% | 21.59% | 2017 ms | ↑ 1.07x | 0 | — | — | 6h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.31% | 99.75% | 99.75% | 4287 ms | ↑ 1.11x | 7 | 17m | 7d ago | 6h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.31% | 96.97% | 96.97% | 1718 ms | → 1.00x | 5 | 32m | 10d ago | 6h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.62% | 99.74% | 99.74% | 3333 ms | ↑ 1.25x | 2 | 60m | 22d ago | 6h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2980 ms | ↑ 1.06x | 0 | — | — | 6h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1978 ms | ↓ 0.94x | 0 | — | — | 7h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.46% | 99.62% | 99.62% | 2129 ms | → 1.00x | 1 | 3h 60m | 13d ago | 7h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2145 ms | ↑ 1.32x | 0 | — | — | 7h ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 326 ms | → 0.98x | 0 | — | — | 6h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.74% | 98.74% | 1648 ms | ↑ 1.08x | 0 | — | — | 6h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.16% | 99.16% | 1660 ms | ↓ 0.93x | 1 | 0s | 27d ago | 7h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 331 ms | ↓ 0.55x | 0 | — | — | 7h ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 900 ms | ↑ 1.18x | 0 | — | — | 6h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.91% | 99.80% | 92.92% | 92.92% | 3791 ms | ↓ 0.91x | 3 | 17m | 1d ago | 7h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.84% | 99.95% | 98.87% | 98.87% | 1986 ms | ↓ 0.94x | 1 | 0s | 20h ago | 7h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.84% | 99.64% | 99.27% | 99.27% | 1027 ms | ↓ 0.72x | 3 | 30m | 1d ago | 7h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.82% | 99.84% | 31.41% | 31.41% | 1959 ms | → 0.98x | 3 | 21s | 1d ago | 7h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.80% | 99.95% | 99.61% | 99.61% | 875 ms | ↓ 0.95x | 1 | 0s | 5d ago | 7h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.80% | 98.69% | 99.74% | 99.74% | 2194 ms | ↑ 1.07x | 4 | 1h 38m | 1d ago | 7h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.71% | 99.88% | 99.73% | 99.73% | 3067 ms | ↓ 0.94x | 2 | 0s | 7d ago | 7h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.71% | 99.10% | 99.72% | 99.72% | 397 ms | ↑ 1.85x | 10 | 10m | 7d ago | 7h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.67% | 98.16% | 49.50% | 49.50% | 2728 ms | ↑ 1.11x | 8 | 1h 3m | 7d ago | 7h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.67% | 99.88% | 21.85% | 21.85% | 1443 ms | ↓ 0.78x | 2 | 0s | 7d ago | 7h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.67% | 99.26% | 69.56% | 69.56% | 3676 ms | ↓ 0.95x | 9 | 8m | 7d ago | 7h ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.67% | 99.88% | 15.89% | 15.89% | 2709 ms | → 1.01x | 1 | 0s | 7d ago | 7h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.67% | 99.69% | 79.92% | 79.92% | 2646 ms | ↑ 1.13x | 5 | 0s | 7d ago | 7h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.67% | 99.88% | 23.46% | 23.46% | 2899 ms | ↑ 1.23x | 2 | 0s | 7d ago | 7h ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.67% | 99.88% | 99.81% | 99.81% | 2106 ms | → 0.99x | 2 | 0s | 7d ago | 7h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 99.66% | 48.94% | 32.49% | 32.49% | 1162 ms | ↑ 1.22x | 4 | 3d 15h | 26m ago | 6h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.66% | 99.88% | 97.56% | 97.56% | 2214 ms | ↑ 1.06x | 2 | 0s | 5d ago | 6h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.66% | 99.56% | 90.86% | 90.86% | 855 ms | → 0.97x | 7 | 0s | 2d ago | 6h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.66% | 99.44% | 96.07% | 96.07% | 3861 ms | ↑ 1.15x | 4 | 41m | 25m ago | 6h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.66% | 99.81% | 23.84% | 23.84% | 651 ms | ↓ 0.46x | 3 | 0s | 4d ago | 6h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.66% | 99.88% | 68.85% | 68.85% | 1725 ms | ↑ 1.14x | 2 | 0s | 6d ago | 6h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.66% | 99.69% | 24.27% | 24.27% | 1576 ms | ↓ 0.94x | 5 | 0s | 4d ago | 6h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.65% | 99.75% | 99.86% | 99.86% | 1693 ms | ↑ 1.27x | 3 | 7m | 4d ago | 6h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 99.65% | 99.69% | 80.43% | 80.43% | 1973 ms | → 1.01x | 3 | 20m | 5d ago | 6h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.65% | 97.17% | 98.76% | 98.76% | 2476 ms | ↑ 1.08x | 18 | 44m | 6d ago | 6h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.65% | 98.18% | 92.70% | 92.70% | 694 ms | → 1.01x | 14 | 25m | 4d ago | 6h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.65% | 99.94% | 99.80% | 99.80% | 1166 ms | ↑ 1.15x | 1 | 0s | 2d ago | 6h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.65% | 99.75% | 98.07% | 98.07% | 626 ms | ↓ 0.86x | 3 | 0s | 5d ago | 6h ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.65% | 99.56% | 99.71% | 99.71% | 1255 ms | ↓ 0.61x | 3 | 39m | 5d ago | 6h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.65% | 99.50% | 86.82% | 86.82% | 1589 ms | ↓ 0.69x | 7 | 4m | 4d ago | 6h ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.65% | 99.90% | 99.90% | 99.90% | 2235 ms | ↑ 1.10x | 1 | 0s | 6d ago | 6h ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.65% | 99.90% | 99.90% | 99.90% | 1283 ms | ↑ 1.12x | 1 | 0s | 5d ago | 6h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.65% | 99.87% | 99.19% | 99.19% | 1457 ms | → 1.05x | 2 | 0s | 5d ago | 6h ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.65% | 99.40% | 99.40% | 99.40% | 2898 ms | → 0.96x | 2 | 59m | 5d ago | 6h ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.65% | 99.87% | 99.88% | 99.88% | 2688 ms | ↑ 1.41x | 2 | 0s | 5d ago | 6h ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.65% | 98.31% | 98.31% | 98.31% | 2096 ms | ↓ 0.90x | 13 | 8m | 4d ago | 6h ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.65% | 99.93% | 99.93% | 99.93% | 2710 ms | ↑ 1.25x | 1 | 0s | 1d ago | 6h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.60% | 99.67% | 86.00% | 86.00% | 2479 ms | → 1.02x | 6 | 0s | 4d ago | 7h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.42% | 99.64% | 21.98% | 21.98% | 2164 ms | → 1.02x | 6 | 0s | 6d ago | 7h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.41% | 99.82% | 99.66% | 99.66% | 1462 ms | → 1.04x | 2 | 2h 23m | 23h ago | 7h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.40% | 99.73% | 63.57% | 63.57% | 3012 ms | → 1.04x | 5 | 0s | 1d ago | 7h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.39% | 99.52% | 99.00% | 99.00% | 4095 ms | → 0.99x | 8 | 0s | 1d ago | 7h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.39% | 99.58% | 99.17% | 99.17% | 4402 ms | → 1.03x | 7 | 0s | 1d ago | 7h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.34% | 99.51% | 56.36% | 56.36% | 1850 ms | ↑ 1.12x | 8 | 0s | 6d ago | 7h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.34% | 98.52% | 98.92% | 98.92% | 2275 ms | ↑ 1.08x | 17 | 12m | 5d ago | 7h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.33% | 98.27% | 21.21% | 21.21% | 3864 ms | ↓ 0.95x | 27 | 0s | 5d ago | 7h ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.33% | 99.57% | 21.71% | 21.71% | 3332 ms | ↓ 0.84x | 6 | 5m | 2d ago | 7h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.32% | 99.75% | 82.80% | 82.80% | 2476 ms | ↑ 1.07x | 4 | 0s | 6d ago | 6h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.32% | 99.31% | 69.28% | 69.28% | 1673 ms | ↑ 1.18x | 9 | 7m | 4d ago | 6h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.32% | 99.75% | 22.71% | 22.71% | 1266 ms | → 1.04x | 3 | 8m | 1d ago | 6h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.32% | 98.94% | 91.69% | 91.69% | 1869 ms | ↑ 1.17x | 17 | 2m | 6h ago | 6h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.31% | 99.87% | 91.60% | 91.60% | 527 ms | ↑ 1.07x | 1 | 30m | 2d ago | 6h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.31% | 77.81% | 92.62% | 92.62% | 4620 ms | ↑ 1.51x | 5 | 1d 5h | 4d ago | 6h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.30% | 98.24% | 98.76% | 98.76% | 901 ms | ↑ 1.10x | 7 | 57m | 6d ago | 6h ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.30% | 99.81% | 98.96% | 98.96% | 2481 ms | ↑ 2.47x | 2 | 10m | 3d ago | 6h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.30% | 99.87% | 97.91% | 97.91% | 513 ms | → 0.95x | 2 | 0s | 6d ago | 6h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.30% | 99.87% | 99.94% | 99.94% | 2558 ms | ↑ 1.20x | 1 | 21m | 6d ago | 6h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.30% | 98.62% | 90.05% | 90.05% | 3128 ms | ↓ 0.89x | 32 | 2s | 13h ago | 7h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.00% | 99.82% | 97.91% | 97.91% | 3461 ms | ↓ 0.91x | 1 | 1h | 1d ago | 7h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (49)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.98% | 98.44% | 86.65% | 86.65% | 4632 ms | ↑ 1.09x | 24 | 1m | 4d ago | 6h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.98% | 98.07% | 96.74% | 96.74% | 4370 ms | ↑ 1.06x | 12 | 46m | 4d ago | 6h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.98% | 99.56% | 99.81% | 99.81% | 3556 ms | ↑ 1.68x | 5 | 12m | 5d ago | 6h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.96% | 99.81% | 98.04% | 98.04% | 4253 ms | ↑ 1.05x | 2 | 10m | 6d ago | 6h ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.95% | 99.37% | 99.37% | 99.37% | 4807 ms | ↑ 1.27x | 8 | 6m | 7d ago | 6h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.84% | 98.86% | 98.53% | 98.53% | 4486 ms | → 0.97x | 27 | 4s | 15h ago | 7h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.63% | 98.38% | 68.29% | 68.29% | 4756 ms | → 1.01x | 22 | 5m | 4d ago | 6h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.63% | 99.56% | 92.98% | 92.98% | 1442 ms | ↓ 0.88x | 5 | 10m | 3d ago | 6h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.62% | 99.31% | 91.95% | 91.95% | 3176 ms | → 1.05x | 11 | 0s | 18h ago | 6h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.61% | 98.55% | 98.59% | 98.59% | 3145 ms | ↑ 1.21x | 23 | 0s | 2d ago | 6h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.27% | 99.69% | 93.39% | 93.39% | 29 ms | ↑ 1.11x | 1 | 1h 22m | 7d ago | 6h ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.26% | 92.39% | 92.39% | 92.39% | 4654 ms | → 1.00x | 26 | 1h 23m | 4d ago | 6h ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 98.26% | 99.68% | 99.79% | 99.79% | 1484 ms | ↑ 1.06x | 2 | 36m | 4d ago | 6h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 98.07% | 60.36% | 76.51% | 76.51% | 3948 ms | → 1.00x | 37 | 10h 29m | 19m ago | 7h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.93% | 97.00% | 86.65% | 86.65% | 4639 ms | → 0.99x | 36 | 9m | 3d ago | 6h ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 97.91% | 70.07% | 82.68% | 82.68% | 1396 ms | → 0.98x | 4 | 2d 1h | 4d ago | 6h ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.56% | 97.12% | 91.77% | 91.77% | 4339 ms | ↑ 1.09x | 17 | 30m | 4d ago | 6h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.27% | 98.07% | 86.10% | 86.10% | 4440 ms | → 0.99x | 29 | 2m | 2d ago | 7h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.27% | 98.44% | 73.57% | 73.57% | 913 ms | → 0.98x | 10 | 45m | 1d ago | 6h ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.21% | 97.54% | 98.44% | 98.44% | 2260 ms | ↑ 1.22x | 6 | 2h 13m | 2d ago | 6h ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.04% | 97.48% | 96.53% | 96.53% | 2005 ms | ↑ 1.17x | 8 | 1h 41m | 2d ago | 7h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.04% | 95.46% | 19.94% | 19.94% | 3446 ms | ↑ 1.16x | 69 | 2m | 2d ago | 7h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.65% | 98.97% | 47.77% | 47.77% | 1510 ms | → 1.00x | 7 | 30m | 14h ago | 7h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.54% | 97.87% | 53.44% | 53.44% | 4130 ms | ↑ 1.45x | 32 | 2m | 18h ago | 6h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.38% | 97.11% | 75.12% | 75.12% | 4559 ms | → 0.97x | 41 | 4m | 1d ago | 7h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.25% | 95.88% | 83.39% | 83.39% | 4860 ms | → 1.02x | 59 | 3m | 2d ago | 6h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.19% | 95.86% | 84.50% | 84.50% | 4664 ms | → 1.02x | 54 | 6m | 18h ago | 6h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.00% | 96.36% | 98.45% | 98.45% | 4283 ms | → 0.98x | 56 | 1m | 1d ago | 7h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 95.95% | 95.95% | 99.48% | 99.48% | 3534 ms | ↓ 0.83x | 4 | 7h 5m | 3d ago | 7h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.82% | 87.90% | 93.25% | 93.25% | 959 ms | ↓ 0.53x | 87 | 28m | 4d ago | 6h ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 95.82% | 96.93% | 96.93% | 96.93% | 4693 ms | → 1.01x | 28 | 3m | 2d ago | 6h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 95.49% | 97.29% | 96.85% | 96.85% | 1455 ms | ↓ 0.87x | 4 | 4h 2m | 7d ago | 6h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 95.47% | 98.68% | 98.83% | 98.83% | 2420 ms | ↑ 1.27x | 13 | 15m | 3d ago | 6h ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 95.47% | 98.30% | 97.15% | 97.15% | 1908 ms | ↑ 1.11x | 11 | 42m | 3d ago | 6h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 92.83% | 98.63% | 98.33% | 98.33% | 1920 ms | ↑ 1.06x | 2 | 3h 26m | 4d ago | 6h ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 92.33% | 98.55% | 98.99% | 98.99% | 2381 ms | → 1.04x | 4 | 1h 35m | 6d ago | 6h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 89.42% | 92.82% | 73.48% | 73.48% | 1939 ms | ↑ 1.10x | 22 | 1h 29m | 2d ago | 6h ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 88.50% | 92.82% | 90.88% | 90.88% | 1347 ms | ↑ 1.05x | 24 | 1h 39m | 4d ago | 6h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.40% | 86.79% | 22.24% | 22.24% | 4179 ms | → 0.97x | 154 | 12m | 1d ago | 6h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.20% | 88.87% | 59.57% | 59.57% | 4244 ms | ↑ 1.09x | 143 | 7m | 1d ago | 6h ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 86.06% | 62.70% | 34.63% | 34.63% | 3173 ms | → 1.02x | 181 | 57m | 1d ago | 6h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 85.47% | 96.93% | 55.37% | 55.37% | 939 ms | ↑ 1.63x | 9 | 1h 48m | 4d ago | 6h ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.09% | 76.43% | 81.31% | 81.31% | 4154 ms | ↓ 0.93x | 162 | 34m | 1d ago | 6h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 77.82% | 72.16% | 26.28% | 26.28% | 4498 ms | ↓ 0.94x | 268 | 18m | 1d ago | 6h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 77.00% | 95.40% | 96.82% | 96.82% | 1391 ms | ↓ 0.66x | 3 | 17h 47m | 4d ago | 6h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 75.43% | 77.37% | 82.37% | 82.37% | 1521 ms | ↓ 0.52x | 27 | 6h 14m | 4d ago | 6h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.10% | 72.08% | 62.84% | 62.84% | 4825 ms | → 0.99x | 295 | 16m | 1d ago | 7h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 64.81% | 70.44% | 96.40% | 96.40% | 4577 ms | ↑ 1.16x | 276 | 21m | 3h ago | 7h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.35% | 0.06% | 23.87% | 23.87% | 2625 ms | → 1.00x | 1 | 29d 6h | 30d ago | 6h ago |

</details>

<details open>
<summary><strong>🔴 Down (263)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.65% | 99.90% | 99.90% | 99.90% | 2210 ms | ↑ 1.05x | 1 | 0s | 6h ago | 6h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 99.32% | 61.00% | 32.99% | 32.99% | 2445 ms | ↑ 1.14x | 3 | 3d 21h | 18h ago | 6h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.61% | 99.18% | 96.68% | 96.68% | 2292 ms | ↑ 1.13x | 12 | 59m | 18h ago | 6h ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.21% | 99.19% | 99.19% | 99.19% | 364 ms | ↓ 0.85x | 10 | 2m | 6h ago | 6h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 70.24% | 19.18% | 26.28% | 26.28% | 2354 ms | → 0.99x | 3 | 8d 5h | 4d ago | 6h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 65.51% | 93.76% | 96.43% | 96.43% | 271 ms | ↓ 0.30x | 1 | 3d 18h | 4d ago | 6h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 58.57% | 86.22% | 94.90% | 94.90% | 3622 ms | ↑ 1.05x | 11 | 1h 48m | 20h ago | 7h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 56.75% | 10.31% | 44.42% | 44.42% | 2351 ms | → 1.00x | 2 | 12d 13h | 6h ago | 6h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 56.60% | 92.13% | 95.71% | 95.71% | 357 ms | → 0.97x | 2 | 2d 5h | 4d ago | 6h ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 49.13% | 90.74% | 89.44% | 89.44% | 189 ms | ↓ 0.19x | 2 | 2d 6h | 5d ago | 6h ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 33.45% | 62.19% | 78.87% | 78.87% | 4964 ms | ↑ 1.81x | 167 | 1h 6m | 6h ago | 6h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 23.88% | 86.14% | 95.64% | 95.64% | 2142 ms | ↑ 1.16x | 2 | 3d 1h | 6d ago | 6h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.23% | 1.54% | 53.62% | 53.62% | 3984 ms | → 0.96x | 43 | 16h 13m | 3h ago | 7h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.33% | 28.41% | 49.60% | 49.60% | 2175 ms | ↑ 1.09x | 9 | 2d 10h | 2d ago | 7h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.34% | 77.34% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.21% | 64.21% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.10% | 69.10% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 38.99% | 38.99% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.86% | 72.86% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.24% | 54.24% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.28% | 5.28% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.02% | 11.02% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.42% | 49.42% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 58.29% | 80.22% | 80.22% | — | — | 19 | 16h 49m | 14d ago | 6h ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 35.72% | 83.54% | 83.54% | — | — | 1 | 20d 3h | 20d ago | 6h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.74% | 77.74% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.12% | 34.12% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 85.40% | 85.40% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.57% | 21.57% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 68.62% | 68.62% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.80% | 45.80% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.56% | 27.56% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 15.75% | 85.89% | 85.89% | — | — | 1 | 25d 12h | 26d ago | 7h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 76.83% | 76.83% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.72% | 58.72% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.00% | 72.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 21h | 20d ago | 7h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.51% | 13.51% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.47% | 45.47% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.63% | 88.63% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.04% | 31.04% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 47.01% | 74.65% | 74.65% | — | — | 1 | 16d 16h | 17d ago | 6h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.53% | 78.53% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 38.85% | 37.84% | 37.84% | — | — | 3 | 5d 11h | 17d ago | 6h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 16.26% | 81.68% | 81.68% | — | — | 1 | 25d 14h | 26d ago | 6h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 65.85% | 82.80% | 82.80% | — | — | 6 | 1d 21h | 11d ago | 6h ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 54.06% | 78.53% | 78.53% | — | — | 1 | 14d 19h | 15d ago | 6h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.38% | 78.38% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.64% | 26.64% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.54% | 48.54% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.92% | 1.92% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.66% | 85.66% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 32.45% | 37.75% | 37.75% | — | — | 1 | 20d 18h | 21d ago | 6h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.35% | 67.35% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 49.94% | 47.19% | 47.19% | — | — | 2 | 8d 1h | 8d ago | 6h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.51% | 68.51% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 47.83% | 75.15% | 75.15% | — | — | 3 | 5d 11h | 17d ago | 6h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 52.49% | 42.74% | 42.74% | — | — | 5 | 3d | 9d ago | 6h ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 52.18% | 65.84% | 65.84% | — | — | 6 | 2d 13h | 9d ago | 6h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.33% | 27.33% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.15% | 51.15% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.95% | 45.95% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.51% | 22.51% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 4.82% | 73.68% | 73.68% | — | — | 1 | 28d 5h | 28d ago | 7h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 6.55% | 39.21% | 39.21% | — | — | 3 | 9d 11h | 28d ago | 7h ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 6h ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 8.68% | 52.16% | 52.16% | — | — | 1 | 27d 20h | 28d ago | 6h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 50.34% | 50.34% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.89% | 21.89% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.77% | 4.77% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.56% | 61.56% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 76.79% | 76.79% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 32.26% | 72.28% | 72.28% | — | — | 1 | 21d 2h | 21d ago | 6h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.75% | 5.75% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.57% | 74.57% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 75.71% | 75.71% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.28% | 29.28% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 17.60% | 86.28% | 86.28% | — | — | 2 | 12d 11h | 25d ago | 6h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.07% | 21.07% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.52% | 49.52% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 67.46% | 85.15% | 85.15% | — | — | 1 | 10d 15h | 11d ago | 7h ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 21.43% | 21.43% | 21.43% | — | — | 2 | 7d 22h | 16d ago | 6h ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 47.76% | 73.55% | 73.55% | — | — | 4 | 4d 2h | 17d ago | 6h ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 69.50% | 85.20% | 85.20% | — | — | 4 | 2d 15h | 11d ago | 6h ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 47.26% | 79.50% | 79.50% | — | — | 13 | 1d 6h | 17d ago | 6h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.17% | 49.17% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 17.26% | 17.93% | 17.93% | — | — | 8 | 2d 1h | 17d ago | 6h ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.92% | 57.92% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.81% | 43.81% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 19.96% | 19.96% | 19.96% | — | — | 3 | 6d 23h | 21d ago | 6h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.73% | 39.73% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 42.25% | 75.85% | 75.85% | — | — | 3 | 5d 5h | 16d ago | 7h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.33% | 22.33% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 73.63% | 73.63% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.16% | 55.16% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 62.82% | 82.29% | 82.29% | — | — | 1 | 12d 9h | 13d ago | 6h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.20% | 36.20% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 68.10% | 68.10% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.82% | 72.82% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 65.53% | 65.53% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.38% | 2.38% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.12% | 78.12% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.19% | 39.19% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.81% | 91.81% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.06% | 78.06% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.69% | 30.69% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 76.67% | 76.67% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.86% | 44.86% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 18.58% | 18.58% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.83% | 40.83% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 71.16% | 71.16% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.69% | 59.69% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.16% | 25.16% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 20h | 26d ago | 6h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.36% | 74.36% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 20h | 26d ago | 6h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.01% | 45.01% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.93% | 2.93% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 6h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.27% | 40.27% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 72.14% | 72.14% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 0.00% | 39.18% | 39.18% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.57% | 55.57% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 24.98% | 24.98% | 24.98% | — | — | 1 | 19d 18h | 20d ago | 6h ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.68% | 35.68% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.02% | 55.02% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.64% | 83.64% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 38.38% | 94.26% | 94.26% | — | — | 2 | 8d 22h | 18d ago | 7h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 25.04% | 25.04% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.05% | 11.05% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.66% | 22.66% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.82% | 49.82% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 87.82% | 87.82% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.02% | 50.02% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 67.72% | 67.72% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.25% | 8.25% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.46% | 16.46% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.63% | 46.63% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 21.83% | 47.52% | 47.52% | — | — | 1 | 23d 23h | 24d ago | 6h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.22% | 18.22% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.98% | 51.98% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.60% | 89.60% | — | — | 1 | 19d 21h | 20d ago | 7h ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.27% | 36.27% | — | — | 1 | 26d 3h | 26d ago | 6h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.18% | 20.18% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.10% | 30.10% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.23% | 5.23% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.90% | 84.90% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 50.59% | 50.59% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.00% | 78.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 56.50% | 56.50% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.94% | 69.94% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.83% | 76.83% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 16h | 20d ago | 6h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.37% | 18.37% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 55.41% | 55.41% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.93% | 36.93% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.05% | 32.05% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.49% | 64.49% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.91% | 22.91% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.86% | 6.86% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 0.00% | 66.14% | 96.26% | 96.26% | — | — | 3 | 2d 13h | 8d ago | 7h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 58.18% | 58.18% | — | — | 1 | 29d 24h | 30d ago | 7h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.56% | 24.56% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.89% | 32.89% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 47.83% | 74.72% | 74.72% | — | — | 3 | 5d 11h | 17d ago | 6h ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.12% | 4.12% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 14h | 20d ago | 6h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 47.02% | 47.02% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.60% | 40.60% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.31% | 31.31% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.22% | 18.22% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.15% | 5.15% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.53% | 10.53% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.93% | 16.93% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.39% | 15.39% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.22% | 27.22% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.20% | 9.20% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.03% | 7.03% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.73% | 0.73% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.17% | 4.17% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.84% | 4.84% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.97% | 46.97% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 38.72% | 38.72% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.01% | 78.01% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 65.96% | 65.96% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.64% | 41.64% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.32% | 78.32% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.92% | 45.92% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.93% | 38.93% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.47% | 1.47% | — | — | 1 | 29d 17h | 30d ago | 6h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.99% | 17.99% | — | — | 1 | 29d 23h | 30d ago | 6h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 7h ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 6h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 1 | 29d 23h | 30d ago | 7h ago |

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
