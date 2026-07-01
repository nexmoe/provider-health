# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 366 🟢 operational · 45 🟡 degraded · 264 🔴 down · 0 ⚫ unknown

_Updated 2026-07-01 07:15 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (366)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.38% | 98.38% | 630 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1395 ms | ↓ 0.91x | 0 | — | — | 24m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.80% | 94.12% | 94.12% | 667 ms | ↓ 0.57x | 3 | 0s | 25d ago | 33m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.80% | 23.37% | 23.37% | 3345 ms | ↑ 1.16x | 3 | 0s | 21d ago | 34m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.54% | 97.54% | 3678 ms | → 1.03x | 0 | — | — | 43m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.65% | 58.65% | 1669 ms | ↓ 0.85x | 0 | — | — | 32m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.93% | 99.93% | 99.93% | 1257 ms | ↓ 0.92x | 1 | 0s | 25d ago | 25m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.41% | 99.55% | 99.55% | 894 ms | ↓ 0.89x | 4 | 35m | 9d ago | 24m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.74% | 98.70% | 98.70% | 1225 ms | → 0.99x | 4 | 0s | 11d ago | 33m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.59% | 99.59% | 3003 ms | ↓ 0.82x | 0 | — | — | 45m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.65% | 95.65% | 2954 ms | ↑ 1.13x | 0 | — | — | 29m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2422 ms | ↑ 1.21x | 0 | — | — | 26m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.92% | 97.92% | 3547 ms | ↑ 1.19x | 0 | — | — | 29m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.93% | 93.50% | 93.50% | 2190 ms | ↓ 0.87x | 1 | 50m | 20d ago | 46m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2438 ms | ↑ 1.18x | 1 | 0s | 12d ago | 26m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1204 ms | ↑ 1.11x | 0 | — | — | 24m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1452 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.17% | 96.85% | 96.85% | 1402 ms | ↓ 0.86x | 4 | 4h 2m | 8d ago | 29m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 100.00% | 25.49% | 65.39% | 65.39% | 2029 ms | ↓ 0.93x | 2 | 10d | 8d ago | 30m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 100.00% | 100.00% | 100.00% | 100.00% | 187 ms | → 1.00x | 0 | — | — | 23m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.02% | 99.02% | 330 ms | ↓ 0.29x | 0 | — | — | 26m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.32% | 39.32% | 766 ms | ↑ 1.08x | 0 | — | — | 40m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1639 ms | ↑ 1.13x | 0 | — | — | 24m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.13% | 97.13% | 3008 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.91% | 98.91% | 1161 ms | ↑ 1.10x | 1 | 30m | 22d ago | 42m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 91.85% | 68.13% | 68.13% | 2047 ms | ↑ 1.48x | 2 | 1d 2h | 15d ago | 29m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1258 ms | → 1.01x | 0 | — | — | 25m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.87% | 96.93% | 96.93% | 1007 ms | ↑ 1.19x | 2 | 0s | 12d ago | 31m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.36% | 88.36% | 1906 ms | ↑ 1.14x | 0 | — | — | 30m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1915 ms | ↑ 1.12x | 1 | 0s | 10d ago | 26m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.50% | 98.50% | 3976 ms | ↑ 1.10x | 0 | — | — | 30m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.81% | 79.93% | 79.93% | 2824 ms | ↑ 1.17x | 3 | 0s | 8d ago | 40m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.67% | 99.65% | 99.65% | 1458 ms | ↑ 1.09x | 3 | 19m | 16d ago | 27m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.96% | 86.96% | 2565 ms | ↑ 1.25x | 0 | — | — | 29m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 1010 ms | ↓ 0.90x | 1 | 0s | 18d ago | 25m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.84% | 97.84% | 1419 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.94% | 99.98% | 99.98% | 825 ms | ↓ 0.94x | 1 | 0s | 9d ago | 41m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.94% | 99.75% | 99.75% | 3104 ms | → 1.04x | 1 | 0s | 9d ago | 41m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.07% | 99.07% | 863 ms | ↑ 1.40x | 1 | 0s | 9d ago | 31m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.95% | 97.95% | 3972 ms | → 0.97x | 0 | — | — | 44m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.95% | 99.63% | 99.63% | 2277 ms | ↑ 1.11x | 2 | 3h 20m | 12d ago | 31m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 98.91% | 20.08% | 20.08% | 2464 ms | ↓ 0.77x | 7 | 37m | 11d ago | 39m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.58% | 96.58% | 694 ms | ↓ 0.89x | 0 | — | — | 31m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 91.78% | 86.53% | 86.53% | 1808 ms | → 0.96x | 8 | 6h 40m | 22d ago | 29m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1172 ms | → 0.98x | 0 | — | — | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 709 ms | ↓ 0.40x | 0 | — | — | 25m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.79% | 99.79% | 99.79% | 1600 ms | → 0.96x | 2 | 0s | 16d ago | 24m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.87% | 99.04% | 99.04% | 2882 ms | → 0.98x | 2 | 0s | 13d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.87% | 99.87% | 99.87% | 1579 ms | ↑ 1.17x | 2 | 0s | 22d ago | 29m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 99.67% | 98.76% | 98.76% | 883 ms | ↑ 1.06x | 5 | 0s | 7d ago | 27m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.86% | 99.86% | 575 ms | ↓ 0.41x | 0 | — | — | 24m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3233 ms | ↓ 0.87x | 0 | — | — | 39m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.61% | 97.70% | 97.70% | 2280 ms | → 1.02x | 6 | 0s | 9d ago | 32m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.93% | 99.73% | 99.73% | 816 ms | ↓ 0.93x | 1 | 0s | 30d ago | 29m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1284 ms | → 1.04x | 0 | — | — | 24m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.94% | 32.27% | 32.27% | 1377 ms | ↑ 1.09x | 1 | 0s | 9d ago | 41m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.62% | 96.62% | 2015 ms | ↓ 0.92x | 1 | 0s | 10d ago | 29m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.16% | 98.03% | 98.03% | 4653 ms | ↑ 1.63x | 11 | 46m | 28d ago | 30m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.82% | 99.82% | 99.82% | 2129 ms | → 1.04x | 1 | 30m | 18d ago | 24m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1227 ms | ↓ 0.76x | 0 | — | — | 26m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 363 ms | ↓ 0.59x | 0 | — | — | 26m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.80% | 99.82% | 99.82% | 685 ms | → 0.98x | 3 | 0s | 20d ago | 26m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.91% | 96.91% | 610 ms | ↓ 0.90x | 0 | — | — | 33m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.70% | 98.38% | 98.38% | 1977 ms | → 1.01x | 1 | 21h 30m | 27d ago | 25m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1036 ms | → 0.95x | 0 | — | — | 24m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.35% | 56.35% | 1706 ms | ↑ 1.16x | 0 | — | — | 34m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.45% | 98.45% | 98.45% | 719 ms | ↓ 0.91x | 2 | 4h 33m | 20d ago | 24m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1603 ms | ↑ 1.17x | 0 | — | — | 25m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 4129 ms | ↑ 1.14x | 0 | — | — | 40m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.24% | 97.24% | 2013 ms | ↑ 1.40x | 0 | — | — | 40m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.16% | 99.16% | 1206 ms | ↓ 0.87x | 1 | 0s | 18d ago | 33m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 98.08% | 49.52% | 49.52% | 2588 ms | ↑ 1.09x | 8 | 1h 3m | 8d ago | 40m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.22% | 84.22% | 3137 ms | ↑ 1.12x | 0 | — | — | 33m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.74% | 67.89% | 67.89% | 1428 ms | → 1.01x | 3 | 7m | 11d ago | 33m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1034 ms | ↑ 1.33x | 0 | — | — | 26m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.80% | 98.80% | 2623 ms | → 1.03x | 0 | — | — | 30m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4366 ms | ↑ 1.15x | 0 | — | — | 25m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.15% | 93.15% | 717 ms | ↓ 0.84x | 0 | — | — | 34m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1181 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.93% | 99.85% | 99.85% | 699 ms | ↑ 1.41x | 1 | 0s | 28d ago | 31m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.47% | 99.47% | 785 ms | ↓ 0.86x | 0 | — | — | 27m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.90% | 99.90% | 99.90% | 1686 ms | → 1.02x | 1 | 0s | 7d ago | 25m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.09% | 98.09% | 3505 ms | ↑ 1.51x | 1 | 0s | 21d ago | 31m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.37% | 90.37% | 1232 ms | ↑ 1.09x | 1 | 0s | 24d ago | 29m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.87% | 49.39% | 49.39% | 2058 ms | ↑ 1.18x | 2 | 0s | 11d ago | 34m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2291 ms | → 0.99x | 0 | — | — | 25m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.50% | 77.50% | 1315 ms | ↑ 1.14x | 0 | — | — | 33m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.67% | 96.60% | 96.60% | 1508 ms | ↑ 1.18x | 1 | 2h 1m | 13d ago | 25m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.49% | 56.37% | 56.37% | 1846 ms | ↑ 1.07x | 8 | 0s | 7d ago | 41m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1052 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.32% | 98.32% | 2639 ms | → 1.03x | 0 | — | — | 32m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.41% | 54.04% | 54.04% | 1066 ms | ↓ 0.93x | 5 | 24m | 11d ago | 34m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 922 ms | → 0.96x | 0 | — | — | 24m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2485 ms | ↑ 1.24x | 0 | — | — | 25m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1032 ms | → 1.00x | 0 | — | — | 23m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.80% | 99.83% | 99.83% | 1708 ms | ↓ 0.88x | 3 | 0s | 13d ago | 24m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.87% | 83.10% | 83.10% | 2254 ms | ↑ 1.06x | 2 | 0s | 22d ago | 33m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.87% | 64.19% | 64.19% | 633 ms | ↓ 0.93x | 2 | 0s | 11d ago | 33m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.09% | 98.09% | 3514 ms | ↑ 2.05x | 0 | — | — | 34m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 97.31% | 97.92% | 97.92% | 4253 ms | → 1.02x | 22 | 24m | 8d ago | 30m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 1974 ms | → 0.98x | 0 | — | — | 26m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.05% | 99.33% | 99.33% | 2827 ms | ↓ 0.82x | 5 | 5h 45m | 16d ago | 39m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.99% | 61.99% | 1977 ms | ↑ 1.24x | 0 | — | — | 34m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.97% | 64.97% | 2018 ms | ↑ 1.12x | 0 | — | — | 34m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.74% | 99.88% | 99.88% | 1607 ms | → 0.95x | 1 | 1h 9m | 15d ago | 27m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2078 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.87% | 90.73% | 90.73% | 2265 ms | → 1.04x | 2 | 0s | 11d ago | 33m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1969 ms | ↑ 1.12x | 0 | — | — | 31m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 597 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.72% | 97.96% | 97.96% | 1769 ms | → 0.95x | 2 | 6h 16m | 16d ago | 33m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.73% | 90.14% | 90.14% | 3247 ms | ↓ 0.94x | 4 | 19h 27m | 19d ago | 24m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.87% | 21.86% | 21.86% | 1109 ms | ↓ 0.60x | 2 | 0s | 8d ago | 40m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2118 ms | ↓ 0.90x | 0 | — | — | 44m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2694 ms | ↑ 1.24x | 0 | — | — | 25m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3615 ms | ↓ 0.95x | 0 | — | — | 44m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.26% | 98.26% | 3548 ms | ↓ 0.87x | 0 | — | — | 45m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.62% | 99.90% | 99.90% | 844 ms | → 0.96x | 4 | 10m | 9d ago | 41m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.89% | 76.89% | 2234 ms | ↓ 0.89x | 0 | — | — | 32m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2480 ms | ↑ 1.61x | 0 | — | — | 23m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.41% | 98.27% | 98.27% | 1674 ms | ↑ 1.51x | 7 | 8m | 17d ago | 25m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.34% | 99.68% | 99.68% | 1647 ms | → 1.03x | 1 | 2h 60m | 23d ago | 27m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1705 ms | → 0.99x | 0 | — | — | 45m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 628 ms | ↓ 0.55x | 0 | — | — | 45m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2505 ms | ↑ 1.15x | 1 | 0s | 22d ago | 43m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.08% | 90.08% | 1571 ms | ↑ 1.07x | 0 | — | — | 33m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 317 ms | → 1.00x | 0 | — | — | 23m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1256 ms | ↑ 1.28x | 0 | — | — | 44m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 575 ms | → 0.99x | 0 | — | — | 26m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.87% | 99.94% | 99.94% | 1762 ms | ↑ 1.20x | 2 | 0s | 16d ago | 25m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.19% | 86.19% | 2958 ms | ↑ 1.13x | 0 | — | — | 29m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1983 ms | → 1.02x | 0 | — | — | 25m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2280 ms | ↑ 1.17x | 0 | — | — | 29m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 909 ms | ↑ 1.16x | 0 | — | — | 34m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.68% | 97.68% | 2654 ms | ↑ 1.40x | 0 | — | — | 29m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1854 ms | ↑ 1.16x | 1 | 0s | 25d ago | 24m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1589 ms | ↑ 1.06x | 1 | 0s | 17d ago | 26m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 1881 ms | ↑ 1.40x | 1 | 0s | 22d ago | 25m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2088 ms | ↑ 1.08x | 0 | — | — | 25m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.87% | 98.92% | 98.92% | 214 ms | ↓ 0.74x | 1 | 29m | 9d ago | 31m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3221 ms | ↑ 1.36x | 0 | — | — | 34m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.45% | 90.45% | 968 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.83% | 99.83% | 695 ms | → 0.98x | 0 | — | — | 24m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.88% | 99.88% | 99.88% | 683 ms | ↓ 0.45x | 1 | 0s | 17d ago | 25m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1516 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.72% | 25.72% | 2601 ms | ↑ 1.32x | 0 | — | — | 34m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 879 ms | ↓ 0.89x | 0 | — | — | 46m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2387 ms | ↓ 0.94x | 0 | — | — | 45m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 850 ms | ↑ 1.26x | 0 | — | — | 43m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.33% | 98.33% | 1197 ms | ↓ 0.89x | 1 | 0s | 13d ago | 28m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.88% | 99.73% | 99.73% | 2988 ms | ↓ 0.92x | 2 | 0s | 8d ago | 44m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.20% | 98.20% | 893 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.87% | 21.71% | 21.71% | 704 ms | ↓ 0.53x | 2 | 0s | 11d ago | 34m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 452 ms | ↓ 0.68x | 0 | — | — | 45m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.68% | 99.75% | 99.75% | 1683 ms | → 1.02x | 4 | 8m | 25d ago | 39m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.91% | 98.91% | 4184 ms | ↓ 0.93x | 0 | — | — | 46m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 3109 ms | ↑ 1.49x | 0 | — | — | 44m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 74 ms | → 1.00x | 0 | — | — | 23m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.80% | 33.10% | 33.10% | 2394 ms | ↑ 1.13x | 5 | 2h 16m | 17d ago | 41m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 43.71% | 33.37% | 33.37% | 1488 ms | ↓ 0.87x | 2 | 7d 14h | 11d ago | 33m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 88.03% | 97.97% | 97.97% | 1898 ms | → 1.04x | 80 | 35m | 21d ago | 43m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2545 ms | → 0.97x | 0 | — | — | 40m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.36% | 99.36% | 2299 ms | ↑ 1.07x | 1 | 0s | 22d ago | 34m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 44.83% | 44.83% | 711 ms | ↓ 0.87x | 1 | 0s | 21d ago | 45m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.62% | 98.62% | 2746 ms | ↓ 0.76x | 1 | 0s | 9d ago | 31m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1121 ms | ↓ 0.95x | 0 | — | — | 43m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2592 ms | → 0.97x | 0 | — | — | 39m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.07% | 99.72% | 99.72% | 399 ms | ↑ 1.95x | 10 | 10m | 8d ago | 43m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.93% | 99.82% | 99.82% | 1699 ms | ↑ 1.10x | 1 | 0s | 25d ago | 32m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.23% | 21.23% | 792 ms | → 0.99x | 1 | 0s | 18d ago | 43m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2578 ms | → 1.05x | 0 | — | — | 33m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 677 ms | ↓ 0.61x | 0 | — | — | 28m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 363 ms | ↓ 0.76x | 0 | — | — | 24m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.56% | 99.56% | 99.56% | 910 ms | → 0.99x | 3 | 30m | 8d ago | 26m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 641 ms | → 0.98x | 0 | — | — | 44m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.53% | 62.53% | 1566 ms | → 0.99x | 0 | — | — | 34m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 72.16% | 87.33% | 87.33% | 691 ms | ↓ 0.69x | 4 | 1d 21h | 14d ago | 25m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 95.92% | 84.00% | 84.00% | 1719 ms | ↑ 1.31x | 2 | 13h | 22d ago | 29m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2870 ms | → 1.01x | 0 | — | — | 44m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.14% | 98.83% | 98.83% | 2080 ms | ↑ 1.36x | 1 | 5h 50m | 17d ago | 27m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.00% | 99.00% | 99.00% | 3052 ms | → 1.01x | 1 | 2h 37m | 11d ago | 24m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.15% | 64.43% | 64.43% | 1183 ms | ↓ 0.58x | 3 | 1h 32m | 11d ago | 34m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.58% | 89.58% | 1752 ms | → 1.00x | 1 | 0s | 18d ago | 43m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.54% | 23.49% | 23.49% | 1558 ms | ↓ 0.89x | 3 | 40m | 15d ago | 34m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.48% | 98.97% | 98.97% | 3525 ms | ↑ 1.56x | 4 | 30m | 15d ago | 33m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.44% | 81.11% | 81.11% | 1953 ms | ↓ 0.89x | 1 | 13h | 28d ago | 45m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.87% | 89.05% | 89.05% | 784 ms | ↓ 0.78x | 2 | 0s | 17d ago | 26m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1003 ms | ↓ 0.80x | 1 | 0s | 21d ago | 43m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1027 ms | ↓ 0.92x | 0 | — | — | 44m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 47.87% | 47.87% | 661 ms | ↑ 1.11x | 1 | 0s | 21d ago | 32m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1584 ms | ↑ 1.18x | 0 | — | — | 25m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 834 ms | → 0.96x | 0 | — | — | 29m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.21% | 98.86% | 98.86% | 3653 ms | → 1.03x | 2 | 8h 60m | 12d ago | 43m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.63% | 98.63% | 1752 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.67% | 98.28% | 98.28% | 464 ms | ↓ 0.68x | 1 | 1h 40m | 13d ago | 29m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.67% | 96.81% | 96.81% | 1241 ms | ↑ 1.16x | 2 | 45m | 20d ago | 29m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.22% | 71.22% | 1600 ms | ↑ 1.21x | 0 | — | — | 33m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1229 ms | → 0.99x | 0 | — | — | 24m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1294 ms | → 0.95x | 0 | — | — | 24m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 81.85% | 81.85% | 2966 ms | ↑ 1.16x | 1 | 0s | 21d ago | 33m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1921 ms | → 0.97x | 0 | — | — | 43m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 442 ms | ↓ 0.32x | 0 | — | — | 25m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 673 ms | ↓ 0.84x | 1 | 0s | 22d ago | 39m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.86% | 37.32% | 37.32% | 1833 ms | → 0.99x | 14 | 5h 29m | 13d ago | 34m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 69.93% | 29.05% | 29.05% | 3082 ms | ↑ 1.05x | 2 | 4d 2h | 22d ago | 29m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.99% | 85.99% | 1258 ms | ↑ 1.35x | 0 | — | — | 43m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2597 ms | ↑ 1.07x | 0 | — | — | 33m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.76% | 98.92% | 98.92% | 2835 ms | ↓ 0.88x | 5 | 0s | 15d ago | 45m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.87% | 68.86% | 68.86% | 1696 ms | ↑ 1.15x | 2 | 0s | 7d ago | 33m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.82% | 96.82% | 1273 ms | → 0.96x | 0 | — | — | 33m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1718 ms | ↑ 1.17x | 0 | — | — | 25m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.87% | 23.48% | 23.48% | 2995 ms | ↑ 1.22x | 2 | 0s | 8d ago | 40m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2661 ms | → 0.98x | 0 | — | — | 44m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.74% | 97.66% | 97.66% | 556 ms | ↓ 0.74x | 2 | 31m | 10d ago | 26m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1826 ms | → 1.02x | 1 | 0s | 19d ago | 27m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4119 ms | ↑ 1.06x | 0 | — | — | 26m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.92% | 59.92% | 736 ms | → 0.96x | 0 | — | — | 34m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.72% | 43.72% | 3021 ms | ↑ 1.05x | 0 | — | — | 33m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 762 ms | → 1.00x | 0 | — | — | 24m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 3106 ms | ↓ 0.83x | 0 | — | — | 39m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 3286 ms | → 0.98x | 0 | — | — | 44m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2518 ms | ↑ 1.05x | 0 | — | — | 33m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 93.64% | 92.52% | 92.52% | 2107 ms | ↓ 0.93x | 1 | 1d 15h | 30d ago | 31m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2434 ms | ↑ 1.05x | 0 | — | — | 33m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.14% | 98.83% | 98.83% | 2633 ms | ↑ 1.14x | 5 | 47m | 9d ago | 26m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.66% | 80.66% | 2169 ms | ↑ 1.73x | 0 | — | — | 33m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 190 ms | → 1.01x | 0 | — | — | 44m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.29% | 69.56% | 69.56% | 3859 ms | ↓ 0.92x | 8 | 9m | 8d ago | 40m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2802 ms | ↑ 1.14x | 0 | — | — | 43m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1111 ms | ↓ 0.67x | 0 | — | — | 26m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2322 ms | → 1.01x | 1 | 0s | 13d ago | 40m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.55% | 99.55% | 3304 ms | ↓ 0.94x | 1 | 0s | 16d ago | 44m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.11% | 81.11% | 2508 ms | → 1.03x | 0 | — | — | 33m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.33% | 87.33% | 3511 ms | ↑ 2.04x | 0 | — | — | 33m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.27% | 96.27% | 2648 ms | ↑ 1.26x | 1 | 0s | 11d ago | 34m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1919 ms | ↑ 1.33x | 0 | — | — | 43m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.69% | 98.69% | 827 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.47% | 25.47% | 1058 ms | ↑ 1.40x | 0 | — | — | 34m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.74% | 97.74% | 469 ms | ↓ 0.53x | 1 | 0s | 19d ago | 28m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 830 ms | → 1.01x | 0 | — | — | 31m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.03% | 63.03% | 2967 ms | ↑ 1.12x | 1 | 0s | 11d ago | 33m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 98.83% | 99.59% | 99.59% | 2564 ms | ↓ 0.81x | 18 | 2m | 11d ago | 44m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 41.74% | 41.74% | 527 ms | ↓ 0.61x | 0 | — | — | 44m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.67% | 93.39% | 93.39% | 28 ms | ↑ 1.05x | 1 | 1h 22m | 8d ago | 29m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 100.00% | 98.93% | 98.93% | 1126 ms | ↓ 0.91x | 0 | — | — | 43m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.03% | 22.03% | 1519 ms | → 1.02x | 0 | — | — | 43m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 507 ms | ↓ 0.44x | 0 | — | — | 26m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.58% | 99.58% | 2856 ms | ↑ 1.37x | 1 | 0s | 15d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2647 ms | ↓ 0.56x | 0 | — | — | 27m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 472 ms | ↓ 0.74x | 0 | — | — | 26m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.69% | 93.69% | 4706 ms | → 1.02x | 0 | — | — | 43m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.62% | 99.62% | 1834 ms | → 1.00x | 0 | — | — | 43m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.87% | 99.97% | 99.97% | 2293 ms | ↑ 1.05x | 2 | 0s | 11d ago | 33m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 97.24% | 98.42% | 98.42% | 3953 ms | ↑ 1.07x | 16 | 46m | 8d ago | 30m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1203 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1688 ms | ↑ 1.14x | 0 | — | — | 26m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2505 ms | ↑ 1.14x | 0 | — | — | 45m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1668 ms | ↓ 0.95x | 0 | — | — | 43m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 406 ms | ↓ 0.89x | 0 | — | — | 46m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 54.16% | 88.87% | 88.87% | 1816 ms | → 0.97x | 1 | 12d 20h | 28d ago | 43m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.45% | 48.60% | 48.60% | 3130 ms | ↑ 1.07x | 14 | 20m | 14d ago | 44m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.89% | 98.89% | 2924 ms | ↓ 0.95x | 0 | — | — | 29m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.54% | 99.61% | 99.61% | 1107 ms | ↓ 0.77x | 4 | 15m | 13d ago | 24m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.34% | 99.37% | 99.37% | 4807 ms | ↑ 1.26x | 8 | 6m | 8d ago | 27m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.27% | 89.27% | 2491 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1329 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1789 ms | → 0.99x | 0 | — | — | 27m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1665 ms | ↓ 0.90x | 0 | — | — | 44m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1122 ms | ↓ 0.70x | 0 | — | — | 45m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1258 ms | ↓ 0.68x | 1 | 0s | 25d ago | 25m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 995 ms | ↓ 0.78x | 0 | — | — | 45m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.15% | 76.15% | 1050 ms | → 1.00x | 1 | 0s | 9d ago | 31m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 2864 ms | → 0.99x | 1 | 0s | 9d ago | 41m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 1399 ms | → 1.00x | 0 | — | — | 42m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.08% | 85.08% | 2521 ms | ↑ 1.13x | 0 | — | — | 40m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.22% | 98.87% | 98.87% | 1909 ms | → 1.03x | 5 | 36m | 10d ago | 33m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.29% | 98.29% | 2719 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 2155 ms | ↑ 1.24x | 1 | 0s | 18d ago | 25m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.74% | 99.85% | 99.85% | 1769 ms | ↑ 1.23x | 2 | 30m | 9d ago | 25m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.91% | 97.91% | 3846 ms | ↑ 1.41x | 1 | 0s | 25d ago | 27m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.28% | 95.28% | 95.28% | 1442 ms | ↓ 0.93x | 4 | 6h 14m | 14d ago | 27m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.86% | 98.86% | 1569 ms | ↑ 1.27x | 0 | — | — | 33m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1827 ms | ↓ 0.93x | 0 | — | — | 42m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.65% | 99.65% | 2772 ms | ↑ 1.05x | 0 | — | — | 26m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 905 ms | → 1.03x | 0 | — | — | 26m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.74% | 98.70% | 98.70% | 1130 ms | ↑ 1.20x | 3 | 10m | 18d ago | 32m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.80% | 99.80% | 99.80% | 1363 ms | ↑ 1.08x | 2 | 0s | 13d ago | 25m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.02% | 32.02% | 1244 ms | ↑ 1.09x | 0 | — | — | 42m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1576 ms | → 0.99x | 0 | — | — | 33m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.43% | 98.43% | 2385 ms | ↑ 1.08x | 1 | 0s | 13d ago | 33m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 47.89% | 54.20% | 54.20% | 1411 ms | → 0.97x | 1 | 13d 23h | 30d ago | 24m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1831 ms | ↑ 1.13x | 0 | — | — | 42m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.15% | 89.15% | 3913 ms | ↑ 1.11x | 0 | — | — | 33m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.88% | 15.91% | 15.91% | 2768 ms | → 1.01x | 1 | 0s | 8d ago | 40m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.68% | 96.68% | 3172 ms | ↑ 1.16x | 1 | 0s | 12d ago | 34m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1943 ms | ↑ 1.15x | 1 | 0s | 21d ago | 42m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.05% | 22.05% | 1980 ms | → 0.97x | 0 | — | — | 44m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 520 ms | ↓ 0.69x | 0 | — | — | 26m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.37% | 97.37% | 2781 ms | ↑ 1.19x | 0 | — | — | 29m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2304 ms | → 1.01x | 0 | — | — | 42m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.81% | 99.93% | 99.93% | 1634 ms | ↑ 1.53x | 2 | 10m | 21d ago | 43m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 23.58% | 23.58% | 3745 ms | ↑ 1.20x | 1 | 0s | 12d ago | 34m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.60% | 21.60% | 2002 ms | → 1.02x | 0 | — | — | 34m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.67% | 99.75% | 99.75% | 4156 ms | ↑ 1.08x | 5 | 0s | 8d ago | 30m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.60% | 99.74% | 99.74% | 3579 ms | ↑ 1.39x | 2 | 60m | 23d ago | 26m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2968 ms | ↑ 1.08x | 0 | — | — | 31m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1854 ms | ↓ 0.87x | 0 | — | — | 44m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.44% | 99.62% | 99.62% | 2110 ms | → 0.96x | 1 | 3h 60m | 14d ago | 42m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2205 ms | ↑ 1.46x | 0 | — | — | 42m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 316 ms | → 0.97x | 0 | — | — | 25m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.74% | 98.74% | 1547 ms | → 1.05x | 0 | — | — | 29m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.87% | 99.81% | 99.81% | 2114 ms | → 0.98x | 2 | 0s | 8d ago | 40m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.16% | 99.16% | 1559 ms | ↓ 0.87x | 1 | 0s | 28d ago | 44m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 327 ms | ↓ 0.53x | 0 | — | — | 43m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 897 ms | ↑ 1.21x | 0 | — | — | 24m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.97% | 99.88% | 93.34% | 93.34% | 3396 ms | ↓ 0.84x | 3 | 17m | 2d ago | 46m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.93% | 99.91% | 35.54% | 35.54% | 1932 ms | ↓ 0.94x | 3 | 21s | 2d ago | 46m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.86% | 99.95% | 98.87% | 98.87% | 1920 ms | ↓ 0.90x | 1 | 0s | 2d ago | 45m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.85% | 99.65% | 99.28% | 99.28% | 764 ms | ↓ 0.66x | 3 | 30m | 2d ago | 45m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.81% | 99.95% | 99.61% | 99.61% | 885 ms | ↓ 0.94x | 1 | 0s | 6d ago | 44m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.81% | 98.70% | 99.74% | 99.74% | 2106 ms | → 1.05x | 4 | 1h 38m | 2d ago | 44m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.76% | 99.23% | 91.73% | 91.73% | 2773 ms | ↓ 0.83x | 32 | 2s | 2d ago | 46m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.65% | 99.63% | 22.02% | 22.02% | 2160 ms | → 1.02x | 7 | 0s | 13m ago | 43m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.57% | 98.26% | 21.22% | 21.22% | 3591 ms | ↓ 0.89x | 27 | 0s | 6d ago | 39m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.57% | 99.55% | 21.72% | 21.72% | 2749 ms | ↓ 0.76x | 6 | 5m | 3d ago | 39m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.57% | 98.59% | 98.92% | 98.92% | 2346 ms | ↑ 1.11x | 15 | 13m | 6d ago | 40m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.55% | 99.87% | 97.56% | 97.56% | 2212 ms | → 1.02x | 2 | 0s | 6d ago | 34m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.55% | 99.54% | 90.87% | 90.87% | 856 ms | → 0.97x | 7 | 0s | 3d ago | 33m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.55% | 99.35% | 96.07% | 96.07% | 3862 ms | ↑ 1.12x | 4 | 41m | 1d ago | 33m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.55% | 99.80% | 23.85% | 23.85% | 650 ms | ↓ 0.49x | 3 | 0s | 5d ago | 34m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.55% | 99.31% | 98.76% | 98.76% | 4505 ms | → 0.97x | 28 | 3s | 3h ago | 46m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.55% | 98.44% | 86.65% | 86.65% | 4528 ms | ↑ 1.08x | 23 | 1m | 5d ago | 34m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.55% | 99.67% | 24.29% | 24.29% | 1597 ms | ↓ 0.94x | 5 | 0s | 5d ago | 34m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.55% | 99.74% | 99.86% | 99.86% | 1752 ms | ↑ 1.29x | 3 | 7m | 5d ago | 29m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 99.55% | 99.67% | 80.44% | 80.44% | 1981 ms | → 1.00x | 3 | 20m | 6d ago | 31m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.55% | 97.44% | 98.76% | 98.76% | 2389 ms | ↑ 1.06x | 16 | 43m | 7d ago | 30m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.55% | 98.09% | 92.70% | 92.70% | 692 ms | → 1.02x | 14 | 25m | 5d ago | 29m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.55% | 99.93% | 99.80% | 99.80% | 1201 ms | ↑ 1.22x | 1 | 0s | 3d ago | 29m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.55% | 99.80% | 98.04% | 98.04% | 4065 ms | → 1.04x | 2 | 10m | 7d ago | 30m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.55% | 99.41% | 96.95% | 96.95% | 1779 ms | → 1.03x | 4 | 35m | 13h ago | 29m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.54% | 94.40% | 95.74% | 95.74% | 750 ms | ↓ 0.23x | 11 | 2h 55m | 1d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.54% | 99.80% | 98.07% | 98.07% | 624 ms | ↓ 0.88x | 3 | 0s | 6d ago | 28m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.54% | 99.54% | 99.71% | 99.71% | 1131 ms | ↓ 0.57x | 3 | 39m | 6d ago | 26m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.54% | 99.74% | 99.64% | 99.64% | 1468 ms | ↓ 0.52x | 4 | 0s | 13h ago | 25m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.54% | 99.47% | 86.83% | 86.83% | 1738 ms | ↓ 0.72x | 7 | 4m | 5d ago | 25m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.54% | 99.90% | 99.90% | 99.90% | 1268 ms | ↑ 1.16x | 1 | 0s | 6d ago | 26m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.54% | 99.87% | 99.19% | 99.19% | 1457 ms | → 1.04x | 2 | 0s | 6d ago | 27m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.54% | 99.87% | 97.91% | 97.91% | 513 ms | → 0.98x | 2 | 0s | 7d ago | 25m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.54% | 99.41% | 99.41% | 99.41% | 2806 ms | ↓ 0.94x | 2 | 59m | 6d ago | 25m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.54% | 99.87% | 99.88% | 99.88% | 2692 ms | ↑ 1.36x | 2 | 0s | 6d ago | 25m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 99.54% | 98.48% | 98.99% | 98.99% | 2358 ms | → 1.05x | 4 | 1h 35m | 7d ago | 24m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.54% | 98.32% | 98.32% | 98.32% | 2073 ms | ↓ 0.90x | 13 | 8m | 5d ago | 25m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.54% | 99.93% | 99.93% | 99.93% | 2739 ms | ↑ 1.25x | 1 | 0s | 2d ago | 25m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.54% | 99.90% | 99.90% | 99.90% | 2213 ms | ↑ 1.07x | 1 | 0s | 1d ago | 25m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.41% | 99.62% | 86.04% | 86.04% | 2540 ms | → 1.04x | 7 | 0s | 5h ago | 44m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.25% | 99.50% | 99.00% | 99.00% | 4160 ms | → 0.99x | 8 | 0s | 2d ago | 42m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.25% | 99.56% | 99.17% | 99.17% | 4372 ms | → 1.02x | 7 | 0s | 2d ago | 42m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.25% | 97.56% | 21.31% | 21.31% | 3102 ms | ↑ 1.23x | 38 | 31s | 16h ago | 42m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.22% | 99.67% | 63.71% | 63.71% | 3003 ms | → 1.03x | 6 | 0s | 3h ago | 44m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.10% | 99.74% | 82.81% | 82.81% | 2470 ms | → 1.04x | 4 | 0s | 7d ago | 33m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.10% | 99.28% | 69.29% | 69.29% | 1653 ms | ↑ 1.19x | 9 | 7m | 5d ago | 33m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.10% | 99.74% | 22.73% | 22.73% | 1265 ms | → 0.98x | 3 | 8m | 2d ago | 34m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.10% | 98.83% | 91.70% | 91.70% | 1827 ms | ↑ 1.22x | 17 | 2m | 1d ago | 33m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.09% | 99.87% | 91.61% | 91.61% | 506 ms | → 1.01x | 1 | 30m | 3d ago | 31m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.09% | 76.81% | 92.63% | 92.63% | 4613 ms | ↑ 1.49x | 5 | 1d 5h | 5d ago | 30m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.08% | 99.80% | 98.96% | 98.96% | 2486 ms | ↑ 2.78x | 2 | 10m | 4d ago | 25m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.08% | 99.87% | 99.94% | 99.94% | 2467 ms | ↑ 1.16x | 1 | 21m | 7d ago | 26m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (45)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.92% | 99.75% | 99.65% | 99.65% | 1497 ms | → 1.05x | 3 | 1h 35m | 13h ago | 43m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.70% | 99.81% | 97.91% | 97.91% | 2772 ms | ↓ 0.82x | 1 | 1h | 2d ago | 39m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.65% | 98.31% | 68.30% | 68.30% | 4697 ms | → 1.00x | 22 | 5m | 5d ago | 33m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.65% | 99.54% | 92.98% | 92.98% | 1485 ms | ↓ 0.91x | 5 | 10m | 4d ago | 33m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.65% | 97.98% | 96.74% | 96.74% | 4355 ms | → 1.04x | 12 | 46m | 5d ago | 34m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.65% | 99.61% | 99.81% | 99.81% | 3792 ms | ↑ 1.94x | 4 | 15m | 6d ago | 34m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.62% | 97.12% | 91.78% | 91.78% | 4328 ms | ↑ 1.07x | 17 | 30m | 5d ago | 27m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.62% | 92.40% | 92.40% | 92.40% | 4661 ms | → 0.99x | 26 | 1h 23m | 5d ago | 25m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.21% | 98.37% | 73.58% | 73.58% | 918 ms | → 0.98x | 10 | 45m | 2d ago | 33m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.18% | 99.41% | 91.95% | 91.95% | 3203 ms | ↑ 1.10x | 9 | 0s | 2d ago | 31m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.16% | 99.14% | 96.68% | 96.68% | 2315 ms | ↑ 1.12x | 12 | 59m | 2d ago | 27m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.16% | 98.55% | 98.59% | 98.59% | 3167 ms | ↑ 1.19x | 22 | 0s | 3d ago | 25m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.73% | 96.86% | 86.66% | 86.66% | 4670 ms | → 1.01x | 36 | 9m | 4d ago | 32m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 97.70% | 99.67% | 99.79% | 99.79% | 1381 ms | → 1.03x | 2 | 36m | 5d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.61% | 77.77% | 77.74% | 77.74% | 3966 ms | → 1.00x | 76 | 4h 47m | 2h ago | 46m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.42% | 95.26% | 19.96% | 19.96% | 3145 ms | ↑ 1.11x | 69 | 2m | 3d ago | 40m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.40% | 98.06% | 86.11% | 86.11% | 4485 ms | → 1.00x | 29 | 2m | 3d ago | 42m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.31% | 95.89% | 83.39% | 83.39% | 4840 ms | → 1.01x | 57 | 3m | 3d ago | 33m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.24% | 99.19% | 99.19% | 99.19% | 364 ms | ↓ 0.85x | 10 | 2m | 1d ago | 26m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 97.24% | 73.48% | 82.69% | 82.69% | 1424 ms | → 1.00x | 4 | 1d 19h | 5d ago | 27m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.82% | 97.77% | 53.45% | 53.45% | 4066 ms | ↑ 1.40x | 32 | 2m | 2d ago | 30m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.70% | 98.97% | 48.20% | 48.20% | 1510 ms | → 1.04x | 7 | 30m | 2d ago | 44m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.57% | 97.37% | 96.53% | 96.53% | 2014 ms | ↑ 1.17x | 8 | 1h 41m | 3d ago | 40m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.36% | 95.80% | 84.51% | 84.51% | 4643 ms | → 1.04x | 53 | 6m | 2d ago | 31m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 96.36% | 96.14% | 99.48% | 99.48% | 3263 ms | ↓ 0.77x | 3 | 9h 27m | 4d ago | 45m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 96.31% | 97.43% | 98.44% | 98.44% | 2212 ms | ↑ 1.18x | 6 | 2h 13m | 3d ago | 26m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.14% | 96.99% | 75.13% | 75.13% | 4585 ms | ↓ 0.91x | 41 | 4m | 2d ago | 40m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.09% | 96.27% | 98.45% | 98.45% | 4149 ms | ↓ 0.95x | 57 | 1m | 9m ago | 39m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 95.85% | 96.94% | 96.94% | 96.94% | 4628 ms | → 1.01x | 28 | 3m | 3d ago | 24m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.52% | 93.42% | 73.49% | 73.49% | 1884 ms | ↑ 1.07x | 21 | 1h 21m | 3d ago | 33m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 94.93% | 87.34% | 93.25% | 93.25% | 1072 ms | ↓ 0.55x | 87 | 28m | 5d ago | 26m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 94.01% | 98.61% | 98.83% | 98.83% | 2378 ms | ↑ 1.23x | 13 | 15m | 4d ago | 26m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 94.01% | 98.22% | 97.15% | 97.15% | 1928 ms | ↑ 1.08x | 11 | 42m | 4d ago | 27m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 90.58% | 98.57% | 98.33% | 98.33% | 1868 ms | → 1.01x | 2 | 3h 26m | 5d ago | 33m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 88.64% | 88.76% | 59.59% | 59.59% | 4268 ms | ↑ 1.10x | 138 | 7m | 2d ago | 29m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.89% | 87.25% | 22.26% | 22.26% | 4202 ms | → 0.99x | 147 | 12m | 2d ago | 34m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 85.71% | 92.55% | 90.89% | 90.89% | 1211 ms | → 0.99x | 23 | 1h 44m | 5d ago | 24m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 81.36% | 96.79% | 55.38% | 55.38% | 942 ms | ↑ 1.77x | 9 | 1h 48m | 5d ago | 31m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 77.58% | 72.29% | 26.30% | 26.30% | 4397 ms | ↓ 0.93x | 259 | 18m | 2d ago | 33m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.04% | 72.40% | 62.84% | 62.84% | 4857 ms | → 0.99x | 285 | 16m | 7h ago | 41m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 69.59% | 95.18% | 96.82% | 96.82% | 1380 ms | ↓ 0.66x | 3 | 17h 47m | 5d ago | 27m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 69.55% | 77.20% | 82.38% | 82.38% | 1484 ms | ↓ 0.52x | 24 | 6h 51m | 5d ago | 29m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 65.48% | 68.88% | 96.36% | 96.36% | 4572 ms | ↑ 1.15x | 281 | 22m | 12m ago | 43m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 2.27% | 0.33% | 23.89% | 23.89% | 2572 ms | → 1.00x | 1 | 28d 5h | 30d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.75% | 0.13% | 39.17% | 39.17% | 1654 ms | → 1.00x | 1 | 29d 21h | 30d ago | 42m ago |

</details>

<details open>
<summary><strong>🔴 Down (264)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.15% | 99.81% | 99.52% | 99.52% | 2029 ms | → 0.98x | 2 | 18m | 47m ago | 41m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 98.21% | 46.42% | 32.48% | 32.48% | 1161 ms | ↑ 1.11x | 4 | 3d 21h | 1d ago | 33m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 96.86% | 63.70% | 32.98% | 32.98% | 2402 ms | ↑ 1.14x | 3 | 3d 21h | 2d ago | 34m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 96.85% | 99.44% | 96.79% | 96.79% | 2834 ms | ↓ 0.91x | 1 | 12h 38m | 13h ago | 44m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 86.64% | 65.11% | 34.64% | 34.64% | 3171 ms | → 1.02x | 175 | 53m | 24m ago | 24m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.65% | 75.33% | 81.28% | 81.28% | 4123 ms | ↓ 0.91x | 162 | 34m | 23m ago | 23m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 74.55% | 10.78% | 44.41% | 44.41% | 2351 ms | → 1.00x | 2 | 12d 13h | 1d ago | 30m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 59.55% | 20.05% | 26.27% | 26.27% | 2354 ms | → 0.99x | 3 | 8d 5h | 5d ago | 29m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 53.46% | 93.34% | 96.37% | 96.37% | 232 ms | ↓ 0.29x | 1 | 5d | 5d ago | 27m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 42.16% | 79.49% | 94.27% | 94.27% | 3628 ms | → 1.03x | 11 | 4h 3m | 2d ago | 45m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 41.55% | 91.57% | 95.66% | 95.66% | 352 ms | ↓ 0.90x | 2 | 2d 17h | 5d ago | 28m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 35.02% | 60.29% | 78.83% | 78.83% | 4970 ms | ↑ 1.73x | 167 | 1h 17m | 1d ago | 27m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 31.80% | 90.17% | 89.33% | 89.33% | 175 ms | ↓ 0.18x | 2 | 2d 21h | 6d ago | 24m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.72% | 1.72% | 50.54% | 50.54% | 4004 ms | ↓ 0.90x | 73 | 9h 33m | 1h ago | 46m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.43% | 25.30% | 49.58% | 49.58% | 2175 ms | ↑ 1.08x | 7 | 3d 6h | 3d ago | 41m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.29% | 77.29% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.19% | 64.19% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.09% | 69.09% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 38.97% | 38.97% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.84% | 72.84% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.23% | 54.23% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.28% | 5.28% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.37% | 10.37% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.40% | 49.40% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 56.27% | 80.18% | 80.18% | — | — | 18 | 19h 26m | 15d ago | 25m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 32.54% | 83.51% | 83.51% | — | — | 1 | 21d 3h | 21d ago | 29m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.72% | 77.72% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.11% | 34.11% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.83% | 84.83% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.56% | 21.56% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 68.16% | 68.16% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.79% | 45.79% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.55% | 27.55% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 11.74% | 85.84% | 85.84% | — | — | 1 | 26d 13h | 27d ago | 44m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 76.32% | 76.32% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.69% | 58.69% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.95% | 71.95% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 45m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.50% | 13.50% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.46% | 45.46% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.62% | 88.62% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.03% | 31.03% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 44.39% | 74.60% | 74.60% | — | — | 1 | 17d 22h | 18d ago | 25m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.51% | 78.51% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 38.79% | 37.79% | 37.79% | — | — | 3 | 5d 21h | 18d ago | 27m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 12.20% | 81.66% | 81.66% | — | — | 1 | 26d 14h | 27d ago | 30m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.18% | 3.18% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 64.12% | 82.75% | 82.75% | — | — | 6 | 2d 3h | 12d ago | 26m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 51.78% | 78.48% | 78.48% | — | — | 1 | 16d 1h | 16d ago | 25m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.36% | 78.36% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.63% | 26.63% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.52% | 48.52% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.92% | 1.92% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.62% | 85.62% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 29.16% | 37.70% | 37.70% | — | — | 1 | 22d 1h | 22d ago | 25m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.33% | 67.33% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 52.15% | 47.17% | 47.17% | — | — | 2 | 8d 1h | 9d ago | 33m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.49% | 68.49% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 45.25% | 75.10% | 75.10% | — | — | 3 | 5d 21h | 18d ago | 27m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 54.95% | 42.71% | 42.71% | — | — | 5 | 3d 2h | 10d ago | 26m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 54.50% | 65.81% | 65.81% | — | — | 6 | 2d 14h | 10d ago | 33m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.32% | 27.32% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.14% | 51.14% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.94% | 45.94% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.51% | 22.51% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 1.09% | 69.27% | 69.27% | — | — | 1 | 29d 5h | 29d ago | 46m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 2.17% | 39.20% | 39.20% | — | — | 3 | 9d 19h | 29d ago | 41m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 4h | 27d ago | 24m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 4.28% | 52.13% | 52.13% | — | — | 1 | 28d 20h | 29d ago | 28m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 47.33% | 47.33% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.89% | 21.89% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.77% | 4.77% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.52% | 61.52% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 76.28% | 76.28% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 28.93% | 72.26% | 72.26% | — | — | 1 | 22d 2h | 22d ago | 29m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.75% | 5.75% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.56% | 74.56% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 75.21% | 75.21% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.27% | 29.27% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 15.51% | 86.25% | 86.25% | — | — | 1 | 25d 16h | 26d ago | 33m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.07% | 21.07% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.49% | 49.49% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 65.27% | 85.10% | 85.10% | — | — | 1 | 11d 16h | 12d ago | 43m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 21.39% | 21.39% | 21.39% | — | — | 2 | 8d 13h | 17d ago | 25m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 45.18% | 73.50% | 73.50% | — | — | 4 | 4d 10h | 18d ago | 27m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 68.01% | 85.15% | 85.15% | — | — | 3 | 3d 22h | 12d ago | 26m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 44.66% | 79.46% | 79.46% | — | — | 13 | 1d 8h | 18d ago | 27m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.15% | 49.15% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 17.23% | 17.90% | 17.90% | — | — | 8 | 2d 5h | 18d ago | 27m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.90% | 57.90% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.80% | 43.80% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 19.93% | 19.93% | 19.93% | — | — | 3 | 7d 10h | 22d ago | 26m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.71% | 39.71% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 37.11% | 75.34% | 75.34% | — | — | 3 | 5d 13h | 17d ago | 45m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.31% | 22.31% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 69.46% | 69.46% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.15% | 55.15% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 60.95% | 82.24% | 82.24% | — | — | 1 | 13d 15h | 14d ago | 26m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.05% | 36.05% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 68.08% | 68.08% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.79% | 72.79% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 65.51% | 65.51% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.38% | 2.38% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.07% | 78.07% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.18% | 39.18% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.80% | 91.80% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.05% | 78.05% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.69% | 30.69% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 76.16% | 76.16% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.84% | 44.84% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 18.33% | 18.33% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.82% | 40.82% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.90% | 66.90% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.67% | 59.67% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.15% | 25.15% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 2h | 27d ago | 26m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.35% | 74.35% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 2h | 27d ago | 27m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.00% | 45.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.93% | 2.93% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 3h | 27d ago | 26m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.12% | 40.12% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.87% | 71.87% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.55% | 55.55% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 24.94% | 24.94% | 24.94% | — | — | 1 | 21d | 21d ago | 26m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.66% | 35.66% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.01% | 55.01% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.61% | 83.61% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 34.18% | 93.91% | 93.91% | — | — | 2 | 9d 11h | 19d ago | 44m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.54% | 23.54% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.04% | 11.04% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.64% | 22.64% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.79% | 49.79% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 87.49% | 87.49% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.01% | 50.01% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 67.71% | 67.71% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 85.25% | 95.60% | 95.60% | — | — | 2 | 3d 13h | 7d ago | 31m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.25% | 8.25% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.45% | 16.45% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.62% | 46.62% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 18.04% | 47.50% | 47.50% | — | — | 1 | 25d | 25d ago | 32m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.21% | 18.21% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.97% | 51.97% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.58% | 89.58% | — | — | 1 | 20d 21h | 21d ago | 39m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.26% | 36.26% | — | — | 1 | 27d 4h | 27d ago | 33m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.17% | 20.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.09% | 30.09% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.23% | 5.23% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.20% | 74.20% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.85% | 84.85% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 50.56% | 50.56% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.96% | 77.96% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.94% | 76.94% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 53.12% | 53.12% | — | — | 1 | 29d 23h | 30d ago | 46m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.68% | 69.68% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.78% | 76.78% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 22h | 21d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.37% | 18.37% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 55.03% | 55.03% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.92% | 36.92% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.05% | 32.05% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.45% | 64.45% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.91% | 22.91% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.86% | 6.86% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 0.00% | 60.20% | 95.62% | 95.62% | 2663 ms | — | 3 | 2d 21h | 9d ago | 45m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.73% | 54.73% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.54% | 24.54% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.51% | 63.51% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.88% | 32.88% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 45.25% | 74.68% | 74.68% | — | — | 3 | 5d 21h | 18d ago | 27m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.11% | 4.11% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 21h | 21d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 47.00% | 47.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.58% | 40.58% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.30% | 31.30% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.21% | 18.21% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.15% | 5.15% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.52% | 10.52% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.93% | 16.93% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.39% | 15.39% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.20% | 27.20% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.19% | 9.19% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.03% | 7.03% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.73% | 0.73% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.17% | 4.17% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.84% | 4.84% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.95% | 46.95% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 38.71% | 38.71% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.97% | 77.97% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 65.94% | 65.94% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.62% | 41.62% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.31% | 78.31% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.91% | 45.91% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.91% | 38.91% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.47% | 1.47% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.99% | 17.99% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 3h | 27d ago | 26m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.20% | 76.20% | — | — | 1 | 29d 24h | 30d ago | 38m ago |

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
