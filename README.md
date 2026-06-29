# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**673 providers** — 365 🟢 operational · 45 🟡 degraded · 263 🔴 down · 0 ⚫ unknown

_Updated 2026-06-29 08:18 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.37% | 98.37% | 654 ms | → 0.98x | 0 | — | — | 2h ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1552 ms | → 0.96x | 0 | — | — | 2h ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.82% | 94.12% | 94.12% | 2064 ms | ↓ 0.90x | 3 | 0s | 23d ago | 2h ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.82% | 23.34% | 23.34% | 3146 ms | ↑ 1.23x | 3 | 0s | 19d ago | 2h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.53% | 97.53% | 3821 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.61% | 58.61% | 1788 ms | ↓ 0.91x | 0 | — | — | 2h ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.93% | 99.93% | 99.93% | 1196 ms | ↓ 0.92x | 1 | 0s | 24d ago | 2h ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.45% | 99.55% | 99.55% | 887 ms | ↓ 0.76x | 4 | 35m | 7d ago | 2h ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.76% | 98.70% | 98.70% | 1150 ms | ↓ 0.93x | 4 | 0s | 9d ago | 2h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.86% | 98.86% | 2086 ms | → 1.04x | 0 | — | — | 2h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.56% | 99.56% | 3430 ms | → 1.00x | 0 | — | — | 2h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.65% | 95.65% | 2984 ms | ↑ 1.15x | 0 | — | — | 2h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2480 ms | ↑ 1.25x | 0 | — | — | 2h ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.92% | 97.92% | 3541 ms | ↑ 1.23x | 0 | — | — | 2h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.84% | 92.72% | 92.72% | 3030 ms | ↑ 1.11x | 1 | 50m | 18d ago | 2h ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 2477 ms | ↑ 1.23x | 1 | 0s | 10d ago | 2h ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1190 ms | ↑ 1.14x | 0 | — | — | 2h ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1487 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 100.00% | 100.00% | 100.00% | 100.00% | 222 ms | → 1.00x | 0 | — | — | 2h ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.02% | 99.02% | 416 ms | ↓ 0.33x | 0 | — | — | 2h ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.28% | 39.28% | 851 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1593 ms | ↑ 1.14x | 0 | — | — | 2h ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.13% | 97.13% | 3028 ms | ↑ 1.12x | 0 | — | — | 2h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.91% | 98.91% | 1154 ms | ↑ 1.18x | 1 | 30m | 20d ago | 2h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 85.17% | 68.10% | 68.10% | 2050 ms | ↑ 1.49x | 2 | 2d 1h | 13d ago | 2h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1329 ms | ↑ 1.14x | 0 | — | — | 2h ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.88% | 96.93% | 96.93% | 996 ms | ↑ 1.17x | 2 | 0s | 11d ago | 2h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.35% | 88.35% | 2001 ms | ↑ 1.31x | 0 | — | — | 2h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.94% | 99.94% | 1782 ms | ↑ 1.07x | 1 | 0s | 8d ago | 2h ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.50% | 98.50% | 4230 ms | ↑ 1.17x | 0 | — | — | 2h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.69% | 99.65% | 99.65% | 1370 ms | ↑ 1.11x | 3 | 19m | 14d ago | 2h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.95% | 86.95% | 2594 ms | ↑ 1.34x | 0 | — | — | 2h ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.95% | 99.95% | 1026 ms | ↓ 0.93x | 1 | 0s | 16d ago | 2h ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.84% | 97.84% | 1464 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.95% | 97.95% | 4007 ms | → 1.02x | 0 | — | — | 2h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.02% | 99.63% | 99.63% | 2162 ms | ↑ 1.09x | 2 | 3h 20m | 10d ago | 2h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 98.98% | 20.04% | 20.04% | 3199 ms | ↓ 0.94x | 7 | 37m | 9d ago | 2h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.57% | 96.57% | 760 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.34% | 86.52% | 86.52% | 1757 ms | ↓ 0.91x | 8 | 6h 40m | 20d ago | 2h ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1217 ms | → 1.00x | 0 | — | — | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1585 ms | ↓ 0.68x | 0 | — | — | 2h ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.78% | 99.78% | 99.78% | 1592 ms | → 0.98x | 2 | 0s | 14d ago | 2h ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.88% | 99.04% | 99.04% | 2925 ms | → 1.00x | 2 | 0s | 11d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.87% | 99.87% | 1530 ms | ↑ 1.11x | 2 | 0s | 20d ago | 2h ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.86% | 99.86% | 568 ms | ↓ 0.40x | 1 | 51m | 29d ago | 2h ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3934 ms | → 0.99x | 0 | — | — | 2h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.73% | 99.73% | 840 ms | ↓ 0.93x | 1 | 0s | 28d ago | 2h ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1266 ms | ↑ 1.06x | 0 | — | — | 2h ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.94% | 96.62% | 96.62% | 2021 ms | ↓ 0.94x | 1 | 0s | 8d ago | 2h ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.92% | 98.03% | 98.03% | 4507 ms | ↑ 1.33x | 13 | 48m | 26d ago | 2h ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.82% | 99.82% | 99.82% | 2166 ms | ↑ 1.05x | 1 | 30m | 16d ago | 2h ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1128 ms | ↓ 0.75x | 0 | — | — | 2h ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 400 ms | ↓ 0.58x | 0 | — | — | 2h ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.82% | 99.82% | 99.82% | 680 ms | → 0.99x | 3 | 0s | 19d ago | 2h ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.91% | 96.91% | 599 ms | ↓ 0.90x | 0 | — | — | 2h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.93% | 98.38% | 98.38% | 1995 ms | → 1.01x | 1 | 21h 30m | 25d ago | 2h ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1045 ms | → 0.96x | 0 | — | — | 2h ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.33% | 56.33% | 1928 ms | ↑ 1.23x | 0 | — | — | 2h ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.45% | 98.45% | 98.45% | 788 ms | → 0.96x | 2 | 4h 33m | 18d ago | 2h ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.82% | 99.67% | 99.67% | 1714 ms | ↓ 0.57x | 3 | 0s | 11d ago | 2h ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1668 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3920 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.24% | 97.24% | 1812 ms | ↑ 1.21x | 0 | — | — | 2h ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.16% | 99.16% | 1156 ms | ↓ 0.85x | 2 | 0s | 16d ago | 2h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.21% | 84.21% | 3336 ms | ↑ 1.19x | 0 | — | — | 2h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 67.87% | 67.87% | 1418 ms | → 1.00x | 3 | 7m | 9d ago | 2h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 956 ms | ↑ 1.10x | 0 | — | — | 2h ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.80% | 98.80% | 2661 ms | ↑ 1.09x | 0 | — | — | 2h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4620 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.15% | 93.15% | 717 ms | ↓ 0.86x | 0 | — | — | 2h ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1226 ms | ↑ 1.10x | 0 | — | — | 2h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 654 ms | ↑ 1.38x | 1 | 0s | 26d ago | 2h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.47% | 99.47% | 794 ms | ↓ 0.77x | 0 | — | — | 2h ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.09% | 98.09% | 3169 ms | ↑ 1.18x | 1 | 0s | 19d ago | 2h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.36% | 90.36% | 1315 ms | ↑ 1.14x | 1 | 0s | 22d ago | 2h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.88% | 49.36% | 49.36% | 2083 ms | ↑ 1.24x | 2 | 0s | 9d ago | 2h ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2281 ms | → 0.99x | 0 | — | — | 2h ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.48% | 77.48% | 1407 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.69% | 96.59% | 96.59% | 1498 ms | ↑ 1.23x | 1 | 2h 1m | 11d ago | 2h ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 948 ms | → 1.03x | 0 | — | — | 2h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.32% | 98.32% | 2607 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.45% | 54.03% | 54.03% | 982 ms | ↓ 0.91x | 5 | 24m | 9d ago | 2h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 59.42% | 32.99% | 32.99% | 2407 ms | ↑ 1.14x | 2 | 5d 22h | 12d ago | 2h ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 924 ms | → 0.97x | 0 | — | — | 2h ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2516 ms | ↑ 1.30x | 0 | — | — | 2h ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.82% | 99.83% | 99.83% | 1634 ms | ↓ 0.87x | 3 | 0s | 11d ago | 2h ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 83.09% | 83.09% | 2331 ms | ↑ 1.13x | 2 | 0s | 20d ago | 2h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.88% | 64.17% | 64.17% | 634 ms | ↓ 0.93x | 2 | 0s | 9d ago | 2h ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.09% | 98.09% | 3402 ms | ↑ 2.20x | 0 | — | — | 2h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2104 ms | → 1.02x | 0 | — | — | 2h ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.36% | 99.33% | 99.33% | 3560 ms | ↓ 0.95x | 5 | 5h 45m | 14d ago | 2h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.97% | 61.97% | 1860 ms | ↑ 1.10x | 0 | — | — | 2h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.95% | 64.95% | 2058 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.75% | 99.88% | 99.88% | 1386 ms | ↓ 0.89x | 1 | 1h 9m | 13d ago | 2h ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2112 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.88% | 90.72% | 90.72% | 2312 ms | ↑ 1.05x | 2 | 0s | 9d ago | 2h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1891 ms | ↓ 0.91x | 0 | — | — | 2h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 625 ms | ↓ 0.88x | 0 | — | — | 2h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.87% | 97.96% | 97.96% | 1784 ms | → 0.95x | 2 | 6h 16m | 14d ago | 2h ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.53% | 90.12% | 90.12% | 3226 ms | ↓ 0.94x | 5 | 15h 33m | 18d ago | 2h ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2478 ms | → 1.02x | 0 | — | — | 2h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2712 ms | ↑ 1.28x | 0 | — | — | 2h ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.07% | 99.07% | 3851 ms | → 1.02x | 0 | — | — | 2h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.23% | 98.23% | 3928 ms | ↑ 1.06x | 0 | — | — | 2h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.87% | 76.87% | 2499 ms | → 0.99x | 0 | — | — | 2h ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2356 ms | ↑ 1.38x | 0 | — | — | 2h ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.45% | 98.26% | 98.26% | 1643 ms | ↑ 1.54x | 7 | 8m | 15d ago | 2h ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.39% | 99.68% | 99.68% | 1558 ms | ↑ 1.06x | 1 | 2h 60m | 22d ago | 2h ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1963 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 638 ms | ↓ 0.49x | 0 | — | — | 2h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2531 ms | ↑ 1.20x | 1 | 0s | 20d ago | 2h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.07% | 90.07% | 1562 ms | → 1.02x | 0 | — | — | 2h ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 350 ms | → 1.00x | 0 | — | — | 2h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.82% | 99.82% | 1298 ms | ↑ 1.35x | 0 | — | — | 2h ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 596 ms | → 1.03x | 0 | — | — | 2h ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1885 ms | ↑ 1.27x | 2 | 0s | 14d ago | 2h ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.18% | 86.18% | 3019 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2109 ms | ↑ 1.06x | 0 | — | — | 2h ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2413 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 930 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.68% | 97.68% | 2672 ms | ↑ 1.51x | 0 | — | — | 2h ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1744 ms | ↑ 1.17x | 1 | 0s | 23d ago | 2h ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1648 ms | ↑ 1.13x | 1 | 0s | 15d ago | 2h ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.95% | 99.95% | 1866 ms | ↑ 1.47x | 1 | 0s | 20d ago | 2h ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2150 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3202 ms | ↑ 1.43x | 0 | — | — | 2h ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.43% | 90.43% | 1367 ms | → 1.05x | 0 | — | — | 2h ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.82% | 99.83% | 99.83% | 726 ms | → 1.05x | 1 | 1h | 29d ago | 2h ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.88% | 99.88% | 99.88% | 1066 ms | ↓ 0.61x | 1 | 0s | 15d ago | 2h ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1516 ms | ↑ 1.09x | 0 | — | — | 2h ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.69% | 25.69% | 2775 ms | ↑ 1.44x | 0 | — | — | 2h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1430 ms | ↑ 1.09x | 0 | — | — | 2h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2581 ms | → 1.00x | 0 | — | — | 2h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 890 ms | ↑ 1.26x | 0 | — | — | 2h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.33% | 98.33% | 1652 ms | → 0.99x | 1 | 0s | 11d ago | 2h ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.20% | 98.20% | 913 ms | ↓ 0.77x | 0 | — | — | 2h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.82% | 21.68% | 21.68% | 610 ms | ↓ 0.47x | 2 | 0s | 9d ago | 2h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 673 ms | ↓ 0.85x | 0 | — | — | 2h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.70% | 99.75% | 99.75% | 1651 ms | → 1.02x | 4 | 8m | 23d ago | 2h ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.78% | 98.78% | 4649 ms | → 1.00x | 0 | — | — | 2h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 3098 ms | ↑ 1.25x | 0 | — | — | 2h ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 68 ms | → 1.00x | 0 | — | — | 2h ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.78% | 32.96% | 32.96% | 2367 ms | ↑ 1.12x | 6 | 1h 58m | 15d ago | 2h ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 40.33% | 33.33% | 33.33% | 2366 ms | → 0.97x | 2 | 8d 13h | 9d ago | 2h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 85.18% | 97.96% | 97.96% | 1898 ms | ↑ 1.08x | 108 | 32m | 19d ago | 2h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2756 ms | → 1.00x | 0 | — | — | 2h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.94% | 99.36% | 99.36% | 2388 ms | ↑ 1.14x | 1 | 0s | 20d ago | 2h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 43.82% | 43.82% | 873 ms | ↓ 0.93x | 1 | 0s | 19d ago | 2h ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1103 ms | → 0.95x | 0 | — | — | 2h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2929 ms | → 0.99x | 0 | — | — | 2h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.94% | 99.82% | 99.82% | 1546 ms | ↑ 1.06x | 1 | 0s | 23d ago | 2h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.00% | 21.00% | 777 ms | → 0.98x | 1 | 0s | 16d ago | 2h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2570 ms | → 1.05x | 0 | — | — | 2h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 691 ms | ↓ 0.60x | 0 | — | — | 2h ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 484 ms | ↓ 0.93x | 0 | — | — | 2h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 640 ms | → 0.99x | 0 | — | — | 2h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.51% | 62.51% | 1352 ms | → 0.99x | 0 | — | — | 2h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.05% | 87.32% | 87.32% | 715 ms | ↓ 0.77x | 5 | 1d 12h | 12d ago | 2h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.20% | 83.98% | 83.98% | 1683 ms | ↑ 1.29x | 2 | 13h | 20d ago | 2h ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2834 ms | → 1.04x | 0 | — | — | 2h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.20% | 98.83% | 98.83% | 2010 ms | ↑ 1.17x | 1 | 5h 50m | 15d ago | 2h ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 98.99% | 98.99% | 98.99% | 3116 ms | → 1.01x | 1 | 2h 37m | 9d ago | 2h ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.21% | 64.37% | 64.37% | 1306 ms | ↓ 0.56x | 3 | 1h 32m | 9d ago | 2h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.55% | 89.55% | 1936 ms | ↑ 1.06x | 1 | 0s | 16d ago | 2h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.57% | 23.46% | 23.46% | 1644 ms | ↓ 0.95x | 3 | 40m | 13d ago | 2h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.51% | 98.97% | 98.97% | 3369 ms | ↑ 1.24x | 4 | 30m | 13d ago | 2h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.15% | 80.74% | 80.74% | 2229 ms | → 1.03x | 1 | 13h | 26d ago | 2h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 89.04% | 89.04% | 798 ms | ↓ 0.79x | 2 | 0s | 15d ago | 2h ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1029 ms | ↓ 0.90x | 1 | 0s | 19d ago | 2h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1074 ms | ↓ 0.93x | 0 | — | — | 2h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.94% | 99.66% | 99.66% | 1312 ms | ↑ 1.05x | 2 | 0s | 42m ago | 2h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 47.84% | 47.84% | 655 ms | → 1.04x | 1 | 0s | 19d ago | 2h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1616 ms | ↑ 1.23x | 0 | — | — | 2h ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 831 ms | → 0.97x | 0 | — | — | 2h ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.31% | 98.85% | 98.85% | 3664 ms | ↑ 1.09x | 2 | 8h 60m | 10d ago | 2h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.62% | 98.62% | 1842 ms | ↑ 1.10x | 0 | — | — | 2h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.69% | 98.27% | 98.27% | 465 ms | ↓ 0.63x | 1 | 1h 40m | 11d ago | 2h ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.69% | 96.81% | 96.81% | 1376 ms | ↑ 1.25x | 2 | 45m | 18d ago | 2h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.20% | 71.20% | 1609 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1306 ms | ↑ 1.07x | 0 | — | — | 2h ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1310 ms | → 0.98x | 0 | — | — | 2h ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.84% | 81.84% | 3210 ms | ↑ 1.23x | 1 | 0s | 19d ago | 2h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2038 ms | → 1.03x | 0 | — | — | 2h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 662 ms | ↓ 0.35x | 0 | — | — | 2h ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 680 ms | ↓ 0.79x | 1 | 0s | 20d ago | 2h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 87.73% | 37.29% | 37.29% | 1921 ms | → 1.01x | 14 | 5h 29m | 11d ago | 2h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 64.75% | 28.97% | 28.97% | 3204 ms | ↑ 1.07x | 2 | 5d 2h | 20d ago | 2h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.95% | 85.95% | 1260 ms | ↑ 1.51x | 0 | — | — | 2h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2884 ms | ↑ 1.12x | 0 | — | — | 2h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.71% | 98.90% | 98.90% | 3228 ms | ↑ 1.08x | 5 | 0s | 13d ago | 2h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.82% | 96.82% | 1240 ms | → 0.98x | 0 | — | — | 2h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1767 ms | ↑ 1.22x | 0 | — | — | 2h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 3201 ms | → 1.04x | 0 | — | — | 2h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.75% | 97.66% | 97.66% | 558 ms | ↓ 0.73x | 2 | 31m | 8d ago | 2h ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1662 ms | → 1.01x | 1 | 0s | 17d ago | 2h ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4120 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.90% | 59.90% | 756 ms | → 0.99x | 0 | — | — | 2h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.68% | 43.68% | 3072 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 4073 ms | → 0.95x | 0 | — | — | 2h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3433 ms | ↑ 1.07x | 0 | — | — | 2h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2604 ms | ↑ 1.11x | 0 | — | — | 2h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.07% | 92.52% | 92.52% | 2126 ms | ↓ 0.93x | 1 | 1d 15h | 28d ago | 2h ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2412 ms | ↑ 1.07x | 0 | — | — | 2h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.65% | 80.65% | 1922 ms | ↑ 1.33x | 0 | — | — | 2h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 190 ms | → 1.01x | 0 | — | — | 2h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2807 ms | ↑ 1.19x | 0 | — | — | 2h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1286 ms | ↓ 0.74x | 0 | — | — | 2h ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2306 ms | → 1.02x | 1 | 0s | 11d ago | 2h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 3490 ms | → 1.01x | 1 | 0s | 14d ago | 2h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.09% | 81.09% | 2728 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.32% | 87.32% | 3338 ms | ↑ 1.55x | 0 | — | — | 2h ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.94% | 96.27% | 96.27% | 2665 ms | ↑ 1.31x | 1 | 0s | 9d ago | 2h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1772 ms | ↑ 1.17x | 0 | — | — | 2h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.69% | 98.69% | 820 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.44% | 25.44% | 961 ms | ↑ 1.47x | 0 | — | — | 2h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.74% | 97.74% | 455 ms | ↓ 0.50x | 1 | 0s | 17d ago | 2h ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 860 ms | → 1.04x | 0 | — | — | 2h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.94% | 63.01% | 63.01% | 2955 ms | ↑ 1.12x | 1 | 0s | 9d ago | 2h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 98.87% | 99.59% | 99.59% | 2792 ms | ↓ 0.87x | 18 | 2m | 9d ago | 2h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 41.03% | 41.03% | 676 ms | ↓ 0.79x | 0 | — | — | 2h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.86% | 98.92% | 98.92% | 1120 ms | → 0.96x | 1 | 5h 60m | 30d ago | 2h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.82% | 21.82% | 1528 ms | ↑ 1.07x | 0 | — | — | 2h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 590 ms | ↓ 0.46x | 0 | — | — | 2h ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.58% | 99.58% | 2909 ms | ↑ 1.45x | 1 | 0s | 13d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3002 ms | ↓ 0.67x | 0 | — | — | 2h ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 458 ms | ↓ 0.70x | 0 | — | — | 2h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.67% | 93.67% | 4660 ms | → 1.04x | 0 | — | — | 2h ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.61% | 99.61% | 1938 ms | ↑ 1.09x | 0 | — | — | 2h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.88% | 99.97% | 99.97% | 2320 ms | ↑ 1.07x | 2 | 0s | 9d ago | 2h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1078 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1659 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2581 ms | ↑ 1.32x | 0 | — | — | 2h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1667 ms | → 1.02x | 0 | — | — | 2h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 478 ms | → 0.98x | 0 | — | — | 2h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 55.83% | 88.84% | 88.84% | 1814 ms | → 1.04x | 1 | 12d 20h | 26d ago | 2h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.33% | 47.97% | 47.97% | 3380 ms | ↑ 1.16x | 17 | 16m | 12d ago | 2h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.89% | 98.89% | 2892 ms | ↓ 0.95x | 0 | — | — | 2h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.83% | 96.83% | 3151 ms | → 1.00x | 0 | — | — | 2h ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.57% | 99.61% | 99.61% | 1079 ms | ↓ 0.75x | 4 | 15m | 11d ago | 2h ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.26% | 89.26% | 2622 ms | ↑ 1.17x | 0 | — | — | 2h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1271 ms | → 1.04x | 0 | — | — | 2h ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1724 ms | → 0.99x | 0 | — | — | 2h ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1870 ms | → 0.98x | 0 | — | — | 2h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.52% | 99.52% | 1687 ms | ↓ 0.89x | 0 | — | — | 2h ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1520 ms | ↓ 0.81x | 1 | 0s | 23d ago | 2h ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1224 ms | ↓ 0.92x | 0 | — | — | 2h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1672 ms | → 1.04x | 0 | — | — | 2h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 85.07% | 85.07% | 2280 ms | ↑ 1.07x | 1 | 0s | 28d ago | 2h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.27% | 98.87% | 98.87% | 1978 ms | ↑ 1.11x | 5 | 36m | 8d ago | 2h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.29% | 98.29% | 2770 ms | ↑ 1.18x | 0 | — | — | 2h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2150 ms | ↑ 1.31x | 1 | 0s | 16d ago | 2h ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.91% | 97.91% | 3788 ms | ↑ 1.44x | 1 | 0s | 23d ago | 2h ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.26% | 95.26% | 95.26% | 1424 ms | ↓ 0.93x | 4 | 6h 14m | 12d ago | 2h ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.86% | 98.86% | 1619 ms | ↑ 1.27x | 0 | — | — | 2h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1854 ms | → 1.01x | 0 | — | — | 2h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.65% | 99.65% | 2809 ms | ↑ 1.13x | 0 | — | — | 2h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1080 ms | ↑ 1.19x | 0 | — | — | 2h ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.70% | 98.70% | 98.70% | 1276 ms | ↑ 1.27x | 4 | 7m | 16d ago | 2h ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.80% | 99.80% | 99.80% | 1354 ms | ↑ 1.06x | 2 | 0s | 11d ago | 2h ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.86% | 31.86% | 1306 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1606 ms | ↑ 1.17x | 0 | — | — | 2h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.94% | 98.43% | 98.43% | 2472 ms | ↑ 1.15x | 1 | 0s | 11d ago | 2h ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 51.53% | 54.10% | 54.10% | 1424 ms | ↓ 0.94x | 1 | 13d 23h | 28d ago | 2h ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1876 ms | ↑ 1.20x | 0 | — | — | 2h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.14% | 89.14% | 4052 ms | ↑ 1.16x | 0 | — | — | 2h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.94% | 96.68% | 96.68% | 3208 ms | ↑ 1.23x | 1 | 0s | 10d ago | 2h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2032 ms | ↑ 1.22x | 1 | 0s | 19d ago | 2h ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 21.82% | 21.82% | 2143 ms | → 1.01x | 0 | — | — | 2h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 609 ms | ↓ 0.75x | 0 | — | — | 2h ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.37% | 97.37% | 2836 ms | ↑ 1.23x | 0 | — | — | 2h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2363 ms | ↑ 1.06x | 0 | — | — | 2h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.82% | 99.93% | 99.93% | 1540 ms | ↑ 1.39x | 2 | 10m | 19d ago | 2h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.94% | 23.55% | 23.55% | 3814 ms | ↑ 1.28x | 1 | 0s | 10d ago | 2h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.57% | 21.57% | 2080 ms | ↑ 1.08x | 0 | — | — | 2h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.33% | 96.97% | 96.97% | 1675 ms | → 0.98x | 5 | 32m | 9d ago | 2h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.63% | 99.74% | 99.74% | 3272 ms | ↑ 1.16x | 2 | 60m | 21d ago | 2h ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2935 ms | ↑ 1.06x | 0 | — | — | 2h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2085 ms | → 0.98x | 0 | — | — | 2h ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2199 ms | → 1.05x | 0 | — | — | 2h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.46% | 99.62% | 99.62% | 2287 ms | → 1.05x | 1 | 3h 60m | 12d ago | 2h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2091 ms | ↑ 1.24x | 0 | — | — | 2h ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 320 ms | → 0.98x | 0 | — | — | 2h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.74% | 98.74% | 1629 ms | ↑ 1.09x | 0 | — | — | 2h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.16% | 99.16% | 1692 ms | → 0.99x | 1 | 0s | 26d ago | 2h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 346 ms | ↓ 0.56x | 0 | — | — | 2h ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 912 ms | ↑ 1.17x | 0 | — | — | 2h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.81% | 99.73% | 92.55% | 92.55% | 4314 ms | → 1.03x | 3 | 17m | 8h ago | 2h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.75% | 99.59% | 99.27% | 99.27% | 1639 ms | ↓ 0.82x | 3 | 30m | 3h ago | 2h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.74% | 99.94% | 99.61% | 99.61% | 932 ms | → 0.97x | 1 | 0s | 4d ago | 2h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.74% | 98.60% | 99.74% | 99.74% | 2209 ms | ↑ 1.15x | 4 | 1h 38m | 4h ago | 2h ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.71% | 99.88% | 99.73% | 99.73% | 3136 ms | → 1.00x | 2 | 0s | 6d ago | 2h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.71% | 99.10% | 99.72% | 99.72% | 397 ms | ↑ 1.94x | 10 | 10m | 6d ago | 2h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.71% | 99.94% | 99.98% | 99.98% | 824 ms | → 0.96x | 1 | 0s | 7d ago | 2h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.71% | 99.94% | 99.75% | 99.75% | 3173 ms | ↑ 1.09x | 1 | 0s | 7d ago | 2h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.71% | 99.94% | 99.54% | 99.54% | 2154 ms | → 1.01x | 1 | 0s | 7d ago | 2h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.71% | 99.94% | 32.22% | 32.22% | 1240 ms | ↑ 1.09x | 1 | 0s | 7d ago | 2h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.71% | 99.64% | 99.90% | 99.90% | 879 ms | → 0.98x | 4 | 10m | 7d ago | 2h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.71% | 99.94% | 99.87% | 99.87% | 2978 ms | → 1.04x | 1 | 0s | 7d ago | 2h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.71% | 98.20% | 49.48% | 49.48% | 2651 ms | ↑ 1.10x | 8 | 1h 3m | 6d ago | 2h ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.71% | 99.28% | 69.54% | 69.54% | 3911 ms | → 0.95x | 9 | 8m | 6d ago | 2h ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.71% | 99.88% | 15.84% | 15.84% | 2671 ms | → 1.00x | 1 | 0s | 6d ago | 2h ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.71% | 99.88% | 21.81% | 21.81% | 1686 ms | ↓ 0.91x | 2 | 0s | 6d ago | 2h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.71% | 99.70% | 79.91% | 79.91% | 2579 ms | ↑ 1.08x | 5 | 0s | 6d ago | 2h ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.71% | 99.88% | 23.43% | 23.43% | 2727 ms | ↑ 1.23x | 2 | 0s | 6d ago | 2h ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.71% | 99.88% | 99.81% | 99.81% | 2104 ms | → 1.00x | 2 | 0s | 6d ago | 2h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.70% | 99.88% | 97.56% | 97.56% | 2218 ms | ↑ 1.07x | 2 | 0s | 4d ago | 2h ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.70% | 99.57% | 90.86% | 90.86% | 768 ms | ↓ 0.94x | 7 | 0s | 24h ago | 2h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.70% | 99.45% | 96.08% | 96.08% | 3780 ms | ↑ 1.17x | 3 | 54m | 6d ago | 2h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.70% | 99.82% | 23.82% | 23.82% | 655 ms | ↓ 0.46x | 3 | 0s | 3d ago | 2h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.70% | 99.88% | 68.84% | 68.84% | 1668 ms | ↑ 1.13x | 2 | 0s | 5d ago | 2h ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.70% | 99.70% | 24.26% | 24.26% | 1539 ms | ↓ 0.94x | 5 | 0s | 3d ago | 2h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.70% | 99.33% | 97.70% | 97.70% | 2278 ms | ↑ 1.07x | 9 | 7m | 7d ago | 2h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.70% | 99.94% | 99.07% | 99.07% | 845 ms | ↑ 1.38x | 1 | 0s | 7d ago | 2h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.70% | 99.94% | 98.62% | 98.62% | 2678 ms | ↓ 0.73x | 1 | 0s | 7d ago | 2h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.70% | 99.94% | 76.13% | 76.13% | 1013 ms | → 0.96x | 1 | 0s | 7d ago | 2h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.70% | 23.33% | 65.36% | 65.36% | 2109 ms | → 0.98x | 2 | 10d 24h | 6d ago | 2h ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.70% | 97.06% | 97.92% | 97.92% | 4401 ms | → 1.03x | 24 | 28m | 6d ago | 2h ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.70% | 97.18% | 98.42% | 98.42% | 3999 ms | ↑ 1.08x | 19 | 41m | 6d ago | 2h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.70% | 99.33% | 99.75% | 99.75% | 4410 ms | ↑ 1.14x | 7 | 17m | 6d ago | 2h ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.70% | 99.75% | 99.86% | 99.86% | 1658 ms | ↑ 1.25x | 3 | 7m | 3d ago | 2h ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.70% | 99.94% | 99.80% | 99.80% | 1135 ms | ↑ 1.10x | 1 | 0s | 17h ago | 2h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.69% | 94.85% | 95.76% | 95.76% | 1295 ms | ↓ 0.46x | 10 | 3h 12m | 6d ago | 2h ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.69% | 99.57% | 99.71% | 99.71% | 1370 ms | ↓ 0.65x | 3 | 39m | 4d ago | 2h ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.69% | 99.90% | 99.90% | 99.90% | 2143 ms | ↑ 1.09x | 1 | 0s | 5d ago | 2h ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.69% | 99.90% | 99.90% | 99.90% | 1265 ms | ↑ 1.09x | 1 | 0s | 4d ago | 2h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.69% | 99.75% | 98.07% | 98.07% | 627 ms | ↓ 0.86x | 4 | 0s | 4d ago | 2h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.69% | 99.88% | 99.19% | 99.19% | 1376 ms | → 1.04x | 2 | 0s | 4d ago | 2h ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.69% | 99.56% | 99.56% | 99.56% | 923 ms | ↓ 0.95x | 3 | 30m | 6d ago | 2h ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.69% | 99.40% | 99.40% | 99.40% | 2833 ms | → 0.97x | 2 | 59m | 4d ago | 2h ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.69% | 99.75% | 99.85% | 99.85% | 1588 ms | ↑ 1.24x | 2 | 30m | 7d ago | 2h ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.69% | 99.93% | 99.93% | 99.93% | 2655 ms | ↑ 1.25x | 1 | 0s | 9h ago | 2h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.48% | 99.65% | 85.89% | 85.89% | 2809 ms | ↑ 1.06x | 6 | 0s | 3d ago | 2h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.44% | 99.79% | 27.83% | 27.83% | 2288 ms | → 1.04x | 3 | 21s | 7h ago | 2h ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.42% | 99.64% | 21.80% | 21.80% | 2249 ms | → 1.03x | 6 | 0s | 5d ago | 2h ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.42% | 97.66% | 21.13% | 21.13% | 2732 ms | ↑ 1.12x | 38 | 31s | 7d ago | 2h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.41% | 98.56% | 98.91% | 98.91% | 2225 ms | ↑ 1.06x | 17 | 12m | 5d ago | 2h ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.41% | 99.58% | 21.68% | 21.68% | 4397 ms | ↓ 0.94x | 6 | 5m | 14h ago | 2h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.40% | 99.76% | 82.80% | 82.80% | 2502 ms | ↑ 1.09x | 4 | 0s | 5d ago | 2h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.40% | 99.33% | 69.27% | 69.27% | 1770 ms | ↑ 1.22x | 9 | 7m | 3d ago | 2h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.40% | 98.97% | 91.70% | 91.70% | 1750 ms | ↑ 1.15x | 16 | 2m | 4d ago | 2h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.39% | 99.88% | 91.60% | 91.60% | 513 ms | ↑ 1.09x | 1 | 30m | 17h ago | 2h ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.39% | 99.88% | 98.92% | 98.92% | 244 ms | ↓ 0.88x | 1 | 29m | 7d ago | 2h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.39% | 97.24% | 98.76% | 98.76% | 2297 ms | → 1.04x | 18 | 44m | 5d ago | 2h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.39% | 99.26% | 96.74% | 96.74% | 2258 ms | ↑ 1.12x | 12 | 0s | 3d ago | 2h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.39% | 98.28% | 98.76% | 98.76% | 819 ms | ↑ 1.12x | 7 | 1h 24m | 5d ago | 2h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.39% | 99.51% | 86.81% | 86.81% | 1607 ms | ↓ 0.69x | 7 | 4m | 3d ago | 2h ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.39% | 99.82% | 98.96% | 98.96% | 2404 ms | ↑ 2.23x | 2 | 10m | 3d ago | 2h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.39% | 99.88% | 97.91% | 97.91% | 514 ms | ↓ 0.95x | 2 | 0s | 5d ago | 2h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.39% | 99.88% | 99.94% | 99.94% | 2510 ms | ↑ 1.21x | 1 | 21m | 5d ago | 2h ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.39% | 99.20% | 98.83% | 98.83% | 2670 ms | ↑ 1.15x | 5 | 47m | 7d ago | 2h ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.39% | 99.88% | 99.88% | 99.88% | 2675 ms | ↑ 1.43x | 2 | 0s | 4d ago | 2h ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.39% | 98.31% | 98.31% | 98.31% | 2083 ms | ↓ 0.90x | 13 | 8m | 3d ago | 2h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.22% | 99.71% | 63.30% | 63.30% | 3014 ms | ↑ 1.09x | 5 | 0s | 4h ago | 2h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.13% | 99.52% | 99.00% | 99.00% | 4028 ms | → 1.02x | 8 | 0s | 8h ago | 2h ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.13% | 99.58% | 99.16% | 99.16% | 4403 ms | ↑ 1.05x | 7 | 0s | 8h ago | 2h ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.12% | 99.52% | 56.34% | 56.34% | 1862 ms | ↑ 1.13x | 8 | 0s | 5d ago | 2h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.11% | 99.82% | 97.91% | 97.91% | 3534 ms | → 0.95x | 1 | 1h | 8h ago | 2h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.10% | 98.48% | 86.65% | 86.65% | 4656 ms | ↑ 1.08x | 24 | 1m | 3d ago | 2h ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.10% | 98.12% | 96.73% | 96.73% | 4353 ms | → 1.04x | 12 | 46m | 3d ago | 2h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.10% | 99.57% | 99.81% | 99.81% | 3535 ms | ↑ 1.49x | 5 | 12m | 4d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.09% | 99.39% | 91.96% | 91.96% | 3140 ms | → 1.03x | 10 | 0s | 19h ago | 2h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.09% | 78.38% | 92.62% | 92.62% | 4631 ms | ↑ 1.53x | 5 | 1d 5h | 3d ago | 2h ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.09% | 99.82% | 98.04% | 98.04% | 4267 ms | ↑ 1.06x | 2 | 10m | 5d ago | 2h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.07% | 98.34% | 88.25% | 88.25% | 3726 ms | → 1.01x | 31 | 0s | 16h ago | 2h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.06% | 98.93% | 98.41% | 98.41% | 4489 ms | → 1.01x | 20 | 0s | 3h ago | 2h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (45)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.00% | 99.42% | 96.14% | 96.14% | 3513 ms | ↑ 1.07x | 10 | 0s | 4d ago | 2h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.80% | 99.57% | 92.98% | 92.98% | 1394 ms | ↓ 0.88x | 5 | 10m | 2d ago | 2h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.78% | 98.59% | 98.59% | 98.59% | 3096 ms | ↑ 1.21x | 23 | 0s | 14h ago | 2h ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.78% | 99.39% | 99.37% | 99.37% | 4853 ms | ↑ 1.32x | 8 | 6m | 6d ago | 2h ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.52% | 98.25% | 21.18% | 21.18% | 4030 ms | → 0.99x | 29 | 0s | 4d ago | 2h ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.48% | 99.69% | 80.42% | 80.42% | 1974 ms | → 1.01x | 3 | 20m | 4d ago | 2h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.48% | 98.16% | 92.70% | 92.70% | 705 ms | → 1.02x | 15 | 23m | 3d ago | 2h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.48% | 99.69% | 93.39% | 93.39% | 30 ms | ↓ 0.95x | 1 | 1h 22m | 6d ago | 2h ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 98.47% | 99.69% | 99.79% | 99.79% | 1503 ms | ↑ 1.09x | 2 | 36m | 3d ago | 2h ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 98.17% | 68.10% | 82.67% | 82.67% | 1362 ms | → 0.96x | 4 | 2d 7h | 3d ago | 2h ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.86% | 99.26% | 99.26% | 99.26% | 366 ms | ↓ 0.86x | 9 | 2m | 3d ago | 2h ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 97.69% | 99.36% | 46.96% | 46.96% | 1415 ms | → 1.02x | 5 | 36m | 16h ago | 2h ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.60% | 98.42% | 68.28% | 68.28% | 4769 ms | → 1.01x | 22 | 5m | 3d ago | 2h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.36% | 95.56% | 19.90% | 19.90% | 3310 ms | ↑ 1.09x | 69 | 2m | 14h ago | 2h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.28% | 97.07% | 86.65% | 86.65% | 4553 ms | → 1.01x | 36 | 9m | 2d ago | 2h ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.25% | 92.38% | 92.38% | 92.38% | 4649 ms | → 0.99x | 26 | 1h 23m | 3d ago | 2h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.96% | 96.03% | 84.51% | 84.51% | 4705 ms | → 1.03x | 54 | 6m | 19h ago | 2h ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 96.94% | 97.12% | 91.76% | 91.76% | 4376 ms | ↑ 1.07x | 17 | 30m | 3d ago | 2h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.66% | 97.98% | 53.43% | 53.43% | 4032 ms | ↑ 1.49x | 31 | 2m | 1d ago | 2h ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.64% | 97.61% | 98.44% | 98.44% | 2265 ms | ↑ 1.24x | 6 | 2h 13m | 21h ago | 2h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.50% | 98.08% | 86.08% | 86.08% | 4441 ms | → 0.98x | 30 | 2m | 22h ago | 2h ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.48% | 97.54% | 96.53% | 96.53% | 2004 ms | ↑ 1.17x | 8 | 1h 41m | 21h ago | 2h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 96.33% | 88.22% | 93.25% | 93.25% | 955 ms | ↓ 0.52x | 87 | 28m | 3d ago | 2h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.11% | 98.48% | 73.57% | 73.57% | 909 ms | → 0.98x | 10 | 45m | 13h ago | 2h ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.02% | 96.93% | 96.93% | 96.93% | 4682 ms | → 0.99x | 28 | 3m | 1d ago | 2h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 96.02% | 98.71% | 98.83% | 98.83% | 2366 ms | ↑ 1.28x | 13 | 15m | 2d ago | 2h ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.02% | 98.34% | 97.15% | 97.15% | 1834 ms | ↑ 1.10x | 11 | 42m | 2d ago | 2h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.86% | 96.45% | 98.45% | 98.45% | 4330 ms | → 0.99x | 58 | 1m | 2h ago | 2h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.81% | 95.92% | 83.38% | 83.38% | 4851 ms | → 1.02x | 61 | 3m | 24h ago | 2h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 94.91% | 50.21% | 32.48% | 32.48% | 1161 ms | ↑ 1.27x | 3 | 4d 19h | 6d ago | 2h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.19% | 97.36% | 96.85% | 96.85% | 1402 ms | ↓ 0.87x | 4 | 4h 2m | 6d ago | 2h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 93.71% | 98.66% | 98.33% | 98.33% | 1937 ms | ↑ 1.09x | 2 | 3h 26m | 3d ago | 2h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 93.23% | 95.37% | 99.47% | 99.47% | 3863 ms | → 1.02x | 4 | 7h 5m | 2d ago | 2h ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 92.97% | 98.59% | 98.99% | 98.99% | 2272 ms | → 0.97x | 4 | 1h 35m | 5d ago | 2h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 90.72% | 93.00% | 73.47% | 73.47% | 2138 ms | ↑ 1.11x | 22 | 1h 29m | 14h ago | 2h ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 87.77% | 93.01% | 90.87% | 90.87% | 1342 ms | ↑ 1.07x | 24 | 1h 39m | 4d ago | 2h ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 87.23% | 97.00% | 55.35% | 55.35% | 906 ms | ↑ 1.50x | 9 | 1h 48m | 3d ago | 2h ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.23% | 88.73% | 59.55% | 59.55% | 4243 ms | ↑ 1.05x | 149 | 7m | 8h ago | 2h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 79.82% | 95.52% | 96.82% | 96.82% | 1338 ms | ↓ 0.64x | 3 | 17h 47m | 3d ago | 2h ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.20% | 77.06% | 81.29% | 81.29% | 4154 ms | ↓ 0.93x | 162 | 34m | 9h ago | 2h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 78.14% | 72.31% | 26.25% | 26.25% | 4379 ms | ↓ 0.93x | 277 | 18m | 8h ago | 2h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 78.12% | 77.83% | 82.36% | 82.36% | 3217 ms | ↓ 0.63x | 31 | 5h 26m | 3d ago | 2h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.98% | 71.87% | 62.82% | 62.82% | 4841 ms | → 0.99x | 305 | 15m | 2h ago | 2h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 63.87% | 71.13% | 96.45% | 96.45% | 4560 ms | ↑ 1.15x | 270 | 21m | 2h ago | 2h ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 49.24% | 9.92% | 44.43% | 44.43% | 2352 ms | → 1.00x | 1 | 25d 19h | 30d ago | 2h ago |

</details>

<details open>
<summary><strong>🔴 Down (263)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.70% | 99.82% | 22.69% | 22.69% | 1257 ms | ↑ 1.06x | 3 | 8m | 2h ago | 2h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.38% | 45.65% | 75.38% | 75.38% | 3908 ms | → 1.01x | 17 | 1d | 2h ago | 2h ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.77% | 97.00% | 75.11% | 75.11% | 4583 ms | → 0.99x | 42 | 5m | 2h ago | 2h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.72% | 86.70% | 22.22% | 22.22% | 4138 ms | → 0.95x | 164 | 12m | 8h ago | 2h ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 86.54% | 61.17% | 34.59% | 34.59% | 3177 ms | → 1.01x | 185 | 1h 2m | 2h ago | 2h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 74.70% | 18.69% | 26.30% | 26.30% | 2352 ms | → 1.00x | 3 | 8d 4h | 3d ago | 2h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 70.34% | 94.05% | 96.49% | 96.49% | 274 ms | ↓ 0.30x | 1 | 2d 24h | 3d ago | 2h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 62.69% | 92.52% | 95.77% | 95.77% | 402 ms | ↑ 1.07x | 2 | 1d 17h | 3d ago | 2h ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 55.96% | 91.10% | 89.54% | 89.54% | 178 ms | ↓ 0.18x | 2 | 1d 21h | 4d ago | 2h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 34.04% | 86.67% | 95.69% | 95.69% | 2146 ms | ↑ 1.19x | 2 | 2d 13h | 5d ago | 2h ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 31.80% | 63.25% | 78.89% | 78.89% | 4965 ms | ↑ 1.88x | 166 | 1h 6m | 2h ago | 2h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 5.51% | 78.07% | 97.51% | 97.51% | 3192 ms | ↑ 1.14x | 3 | 2d 5h | 7d ago | 2h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 3.29% | 48.69% | 47.20% | 47.20% | 238 ms | ↓ 0.79x | 2 | 7d 24h | 7d ago | 2h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.50% | 1.77% | 56.36% | 56.36% | 3462 ms | → 0.97x | 34 | 20h 30m | 4h ago | 2h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.58% | 30.41% | 49.62% | 49.62% | 2175 ms | ↑ 1.28x | 10 | 2d 2h | 16h ago | 2h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.52% | 77.52% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.23% | 64.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.11% | 69.11% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 39.01% | 39.01% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.89% | 72.89% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.27% | 54.27% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.28% | 5.28% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.59% | 11.59% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 59.39% | 80.27% | 80.27% | — | — | 21 | 14h 21m | 13d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 37.56% | 83.59% | 83.59% | — | — | 1 | 19d 3h | 19d ago | 2h ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.14% | 34.14% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 86.51% | 86.51% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.57% | 21.57% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 69.52% | 69.52% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.82% | 45.82% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.56% | 27.56% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 18.39% | 86.09% | 86.09% | — | — | 1 | 24d 14h | 25d ago | 2h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 77.84% | 77.84% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.85% | 58.85% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.16% | 72.16% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 22h | 19d ago | 2h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.51% | 13.51% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.48% | 45.48% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.68% | 88.68% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.06% | 31.06% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 48.53% | 74.69% | 74.69% | — | — | 1 | 15d 22h | 16d ago | 2h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.54% | 78.54% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 38.91% | 37.90% | 37.90% | — | — | 3 | 5d 5h | 16d ago | 2h ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 18.59% | 81.72% | 81.72% | — | — | 1 | 24d 14h | 25d ago | 2h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 66.87% | 82.85% | 82.85% | — | — | 6 | 1d 18h | 10d ago | 2h ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 55.40% | 78.58% | 78.58% | — | — | 1 | 14d | 14d ago | 2h ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.39% | 78.39% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.66% | 26.66% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.63% | 48.63% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.93% | 1.93% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.82% | 85.82% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 34.36% | 37.79% | 37.79% | — | — | 1 | 20d | 20d ago | 2h ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.39% | 67.39% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.54% | 68.54% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 49.33% | 75.19% | 75.19% | — | — | 3 | 5d 5h | 16d ago | 2h ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 51.10% | 42.76% | 42.76% | — | — | 5 | 3d 1h | 8d ago | 2h ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 50.88% | 65.86% | 65.86% | — | — | 6 | 2d 13h | 8d ago | 2h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.35% | 27.35% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.18% | 51.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.98% | 45.98% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.52% | 22.52% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 8.69% | 77.52% | 77.52% | — | — | 4 | 6d 20h | 27d ago | 2h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 9.06% | 39.23% | 39.23% | — | — | 3 | 9d 3h | 27d ago | 2h ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 3h | 25d ago | 2h ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 11.22% | 52.20% | 52.20% | — | — | 1 | 26d 20h | 27d ago | 2h ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 52.96% | 52.96% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.90% | 21.90% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.77% | 4.77% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.69% | 61.69% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 34.19% | 72.34% | 72.34% | — | — | 1 | 20d 2h | 20d ago | 2h ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.76% | 5.76% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.60% | 74.60% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 76.64% | 76.64% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.29% | 29.29% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 19.10% | 86.31% | 86.31% | — | — | 2 | 12d 4h | 24d ago | 2h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 23.84% | 23.84% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.61% | 49.61% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 70.13% | 85.35% | 85.35% | — | — | 1 | 9d 17h | 10d ago | 2h ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 21.47% | 21.47% | 21.47% | — | — | 2 | 7d 13h | 15d ago | 2h ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 49.26% | 73.59% | 73.59% | — | — | 4 | 3d 22h | 16d ago | 2h ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 70.37% | 85.25% | 85.25% | — | — | 5 | 1d 23h | 10d ago | 2h ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 48.77% | 79.53% | 79.53% | — | — | 13 | 1d 5h | 16d ago | 2h ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.18% | 49.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 17.30% | 17.97% | 17.97% | — | — | 8 | 1d 23h | 16d ago | 2h ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.56% | 6.56% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.95% | 57.95% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.83% | 43.83% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 19.99% | 19.99% | 19.99% | — | — | 3 | 6d 17h | 20d ago | 2h ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.81% | 39.81% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 50.81% | 76.84% | 76.84% | — | — | 3 | 4d 21h | 15d ago | 2h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.34% | 22.34% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 77.18% | 77.18% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.18% | 55.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 63.93% | 82.34% | 82.34% | — | — | 1 | 11d 15h | 12d ago | 2h ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.53% | 36.53% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 1.47% | 68.14% | 68.14% | — | — | 1 | 29d 13h | 30d ago | 2h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.85% | 72.85% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 65.57% | 65.57% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.38% | 2.38% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.30% | 78.30% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.19% | 39.19% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.90% | 91.85% | 91.85% | — | — | 1 | 29d 17h | 30d ago | 2h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.09% | 78.09% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.70% | 30.70% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 77.68% | 77.68% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.89% | 44.89% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 19.07% | 19.07% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.85% | 40.85% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 74.87% | 74.87% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.71% | 59.71% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.17% | 25.17% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 2h | 25d ago | 2h ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.39% | 74.39% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 2h | 25d ago | 2h ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.03% | 45.03% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.94% | 2.94% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 3h | 25d ago | 2h ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.57% | 40.57% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 72.68% | 72.68% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 0.00% | 39.25% | 39.25% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.60% | 55.60% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 25.02% | 25.02% | 25.02% | — | — | 1 | 19d | 19d ago | 2h ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.70% | 35.70% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.05% | 55.05% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.76% | 83.76% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 43.65% | 94.98% | 94.98% | — | — | 2 | 8d 11h | 17d ago | 2h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.34% | 26.34% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.05% | 11.05% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.71% | 22.71% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.91% | 49.91% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 88.45% | 88.45% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.04% | 50.04% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 67.76% | 67.76% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.25% | 8.25% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.46% | 16.46% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.66% | 46.66% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 24.01% | 47.54% | 47.54% | — | — | 1 | 22d 24h | 23d ago | 2h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.23% | 18.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.00% | 52.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.64% | 89.64% | — | — | 1 | 18d 21h | 19d ago | 2h ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 1 | 25d 3h | 25d ago | 2h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.19% | 20.19% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.11% | 30.11% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.23% | 5.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.25% | 74.25% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 85.09% | 85.09% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 50.62% | 50.62% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.17% | 78.17% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 77.15% | 77.15% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 59.44% | 59.44% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 70.48% | 70.48% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.01% | 77.01% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 22h | 19d ago | 2h ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.38% | 18.38% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.13% | 56.13% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.95% | 36.95% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.06% | 32.06% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.63% | 64.63% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.92% | 22.92% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.86% | 6.86% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 61.15% | 61.15% | — | — | 1 | 29d 24h | 30d ago | 2h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.57% | 24.57% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.70% | 63.70% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.91% | 32.91% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 49.33% | 74.77% | 74.77% | — | — | 3 | 5d 5h | 16d ago | 2h ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.12% | 4.12% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 18d 20h | 19d ago | 2h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 47.04% | 47.04% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.62% | 40.62% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.33% | 31.33% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.23% | 18.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.17% | 5.17% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.53% | 10.53% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.94% | 16.94% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.40% | 15.40% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.23% | 27.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.20% | 9.20% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.03% | 7.03% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.73% | 0.73% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.18% | 4.18% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.84% | 4.84% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.06% | 47.06% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 38.74% | 38.74% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.16% | 78.16% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 66.00% | 66.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.66% | 41.66% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.35% | 78.35% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.95% | 45.95% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.01% | 39.01% | — | — | 1 | 29d 23h | 30d ago | 2h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.47% | 1.47% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.00% | 18.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 22h | 30d ago | 2h ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 3h | 25d ago | 2h ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.23% | 76.23% | — | — | 1 | 29d 22h | 30d ago | 2h ago |

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
