# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 357 🟢 operational · 52 🟡 degraded · 266 🔴 down · 0 ⚫ unknown

_Updated 2026-07-03 06:35 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.39% | 98.39% | 834 ms | → 0.97x | 0 | — | — | 18m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1329 ms | ↓ 0.86x | 0 | — | — | 14m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.86% | 94.14% | 94.14% | 683 ms | ↓ 0.56x | 2 | 0s | 27d ago | 22m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.80% | 23.55% | 23.55% | 2850 ms | → 1.00x | 3 | 0s | 23d ago | 24m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.54% | 97.54% | 3494 ms | ↓ 0.93x | 0 | — | — | 33m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.86% | 58.86% | 1679 ms | ↓ 0.89x | 0 | — | — | 22m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.38% | 99.56% | 99.56% | 823 ms | ↓ 0.90x | 4 | 35m | 11d ago | 14m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.71% | 98.71% | 1174 ms | → 1.03x | 2 | 0s | 13d ago | 23m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.60% | 99.60% | 2942 ms | ↓ 0.78x | 0 | — | — | 35m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.69% | 95.69% | 2927 ms | → 0.99x | 0 | — | — | 19m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2393 ms | ↑ 1.17x | 0 | — | — | 16m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.94% | 97.94% | 3214 ms | → 1.01x | 0 | — | — | 19m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.93% | 93.51% | 93.51% | 2069 ms | ↓ 0.84x | 1 | 50m | 22d ago | 36m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2355 ms | ↑ 1.12x | 1 | 0s | 14d ago | 16m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1394 ms | ↑ 1.11x | 0 | — | — | 14m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.76% | 98.76% | 1394 ms | → 1.00x | 0 | — | — | 19m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.04% | 96.88% | 96.88% | 1277 ms | ↓ 0.84x | 4 | 4h 2m | 10d ago | 18m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.03% | 99.03% | 352 ms | ↓ 0.32x | 0 | — | — | 16m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.46% | 39.46% | 762 ms | → 0.98x | 0 | — | — | 30m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1684 ms | ↑ 1.13x | 0 | — | — | 14m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.73% | 99.86% | 99.86% | 1749 ms | ↑ 1.14x | 3 | 7m | 7d ago | 18m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.15% | 97.15% | 2868 ms | → 0.97x | 0 | — | — | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.91% | 98.91% | 1172 ms | ↑ 1.07x | 1 | 30m | 24d ago | 32m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1089 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 96.95% | 96.95% | 1024 ms | ↑ 1.12x | 2 | 0s | 14d ago | 21m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.43% | 88.43% | 1585 ms | → 0.97x | 0 | — | — | 20m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1663 ms | → 1.01x | 1 | 0s | 12d ago | 15m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.52% | 99.71% | 99.71% | 1226 ms | ↓ 0.59x | 3 | 39m | 8d ago | 15m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.51% | 98.51% | 3899 ms | → 1.00x | 0 | — | — | 20m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 79.97% | 79.97% | 3390 ms | ↑ 1.13x | 3 | 0s | 10d ago | 30m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.66% | 99.65% | 99.65% | 1501 ms | ↑ 1.08x | 3 | 19m | 18d ago | 16m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 914 ms | ↓ 0.87x | 1 | 0s | 20d ago | 15m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.73% | 82.87% | 82.87% | 2333 ms | ↓ 0.93x | 4 | 0s | 9d ago | 23m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.85% | 97.85% | 1809 ms | ↑ 1.15x | 0 | — | — | 22m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 827 ms | ↓ 0.92x | 1 | 0s | 11d ago | 31m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.75% | 99.75% | 2926 ms | → 0.95x | 1 | 0s | 11d ago | 31m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.08% | 99.08% | 844 ms | ↑ 1.21x | 1 | 0s | 11d ago | 21m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.96% | 97.96% | 3762 ms | ↓ 0.93x | 0 | — | — | 33m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.90% | 99.63% | 99.63% | 2263 ms | ↑ 1.07x | 2 | 3h 20m | 14d ago | 21m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.60% | 96.60% | 684 ms | ↓ 0.95x | 0 | — | — | 21m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 91.41% | 86.65% | 86.65% | 1705 ms | ↓ 0.86x | 8 | 6h 40m | 24d ago | 18m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1356 ms | → 0.97x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 644 ms | ↓ 0.39x | 0 | — | — | 15m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.80% | 99.80% | 99.80% | 1672 ms | → 0.96x | 2 | 0s | 18d ago | 14m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.86% | 99.05% | 99.05% | 2774 ms | ↓ 0.92x | 2 | 0s | 15d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.86% | 99.87% | 99.87% | 1499 ms | → 1.03x | 2 | 0s | 24d ago | 18m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 99.66% | 98.77% | 98.77% | 1082 ms | ↑ 1.08x | 5 | 0s | 9d ago | 16m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.86% | 99.86% | 675 ms | ↓ 0.44x | 0 | — | — | 14m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.28% | 91.08% | 91.08% | 1116 ms | ↓ 0.81x | 22 | 1h 48m | 7d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3236 ms | ↓ 0.84x | 0 | — | — | 29m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.73% | 97.72% | 97.72% | 2575 ms | → 1.05x | 4 | 0s | 11d ago | 22m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.73% | 99.73% | 742 ms | ↓ 0.87x | 0 | — | — | 19m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1397 ms | ↑ 1.06x | 0 | — | — | 14m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.93% | 32.43% | 32.43% | 1401 ms | ↑ 1.07x | 1 | 0s | 11d ago | 31m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.65% | 96.65% | 1825 ms | ↓ 0.88x | 1 | 0s | 12d ago | 18m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 100.00% | 98.25% | 21.41% | 21.41% | 3601 ms | ↓ 0.87x | 26 | 0s | 8d ago | 29m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.93% | 98.04% | 98.04% | 4649 ms | ↑ 1.55x | 1 | 0s | 30d ago | 20m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.83% | 99.83% | 99.83% | 2150 ms | → 1.03x | 1 | 30m | 20d ago | 14m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1066 ms | ↓ 0.73x | 0 | — | — | 16m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 389 ms | ↓ 0.72x | 0 | — | — | 16m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.79% | 99.83% | 99.83% | 538 ms | → 0.95x | 3 | 0s | 22d ago | 16m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.92% | 96.92% | 571 ms | ↓ 0.85x | 0 | — | — | 22m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.55% | 98.40% | 98.40% | 1910 ms | → 0.96x | 1 | 21h 30m | 29d ago | 15m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1018 ms | ↓ 0.86x | 0 | — | — | 14m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.46% | 56.46% | 1539 ms | → 0.95x | 0 | — | — | 24m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.51% | 98.51% | 98.51% | 703 ms | ↓ 0.92x | 2 | 4h 33m | 22d ago | 14m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1415 ms | → 0.97x | 0 | — | — | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 4204 ms | ↑ 1.10x | 0 | — | — | 29m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.45% | 87.02% | 87.02% | 1266 ms | ↓ 0.67x | 7 | 4m | 7d ago | 15m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.24% | 97.24% | 1927 ms | ↑ 1.21x | 0 | — | — | 30m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.16% | 99.16% | 1165 ms | ↓ 0.84x | 1 | 0s | 20d ago | 22m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.99% | 49.64% | 49.64% | 2489 ms | → 1.00x | 8 | 1h 3m | 10d ago | 30m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 100.00% | 97.22% | 92.05% | 92.05% | 4360 ms | → 1.01x | 17 | 30m | 7d ago | 16m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.29% | 84.29% | 2937 ms | → 0.95x | 0 | — | — | 23m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.80% | 67.99% | 67.99% | 1503 ms | → 1.04x | 2 | 10m | 13d ago | 23m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 979 ms | ↑ 1.31x | 0 | — | — | 16m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.81% | 98.81% | 2626 ms | → 1.00x | 0 | — | — | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3966 ms | → 0.98x | 0 | — | — | 15m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.17% | 93.17% | 708 ms | ↓ 0.79x | 0 | — | — | 23m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.79% | 98.79% | 1141 ms | → 0.99x | 0 | — | — | 19m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.85% | 99.85% | 657 ms | ↑ 1.28x | 0 | — | — | 21m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.48% | 99.48% | 845 ms | → 0.97x | 0 | — | — | 16m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.91% | 99.91% | 99.91% | 1664 ms | ↓ 0.92x | 1 | 0s | 9d ago | 15m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.10% | 98.10% | 3503 ms | ↑ 1.52x | 1 | 0s | 23d ago | 21m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.44% | 90.44% | 1057 ms | → 0.97x | 1 | 0s | 26d ago | 19m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 49.52% | 49.52% | 1718 ms | → 0.96x | 2 | 0s | 13d ago | 24m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2158 ms | ↓ 0.83x | 0 | — | — | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.58% | 77.58% | 1236 ms | → 0.97x | 0 | — | — | 23m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.66% | 96.65% | 96.65% | 1438 ms | ↓ 0.90x | 1 | 2h 1m | 15d ago | 15m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.47% | 56.47% | 56.47% | 1505 ms | ↓ 0.92x | 8 | 0s | 9d ago | 31m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1020 ms | ↑ 1.06x | 0 | — | — | 15m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.33% | 98.33% | 2681 ms | → 0.97x | 0 | — | — | 22m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.39% | 54.16% | 54.16% | 1064 ms | ↓ 0.92x | 5 | 24m | 13d ago | 24m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1009 ms | → 0.98x | 0 | — | — | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2306 ms | → 0.99x | 0 | — | — | 15m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1027 ms | → 1.00x | 0 | — | — | 14m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.79% | 99.83% | 99.83% | 1730 ms | ↓ 0.91x | 3 | 0s | 15d ago | 14m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.86% | 83.16% | 83.16% | 2170 ms | ↓ 0.94x | 2 | 0s | 24d ago | 23m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.31% | 64.31% | 615 ms | ↓ 0.93x | 2 | 0s | 13d ago | 23m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.09% | 98.09% | 3223 ms | ↑ 1.73x | 0 | — | — | 24m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 1803 ms | ↓ 0.95x | 0 | — | — | 15m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.83% | 99.33% | 99.33% | 2924 ms | ↓ 0.82x | 5 | 5h 45m | 18d ago | 29m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.10% | 62.10% | 1879 ms | ↑ 1.15x | 0 | — | — | 23m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.07% | 65.07% | 1787 ms | → 0.98x | 0 | — | — | 23m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.72% | 99.88% | 99.88% | 2079 ms | ↑ 1.10x | 1 | 1h 9m | 17d ago | 16m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.26% | 99.26% | 1981 ms | → 0.99x | 0 | — | — | 23m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 2050 ms | ↑ 1.21x | 0 | — | — | 21m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 571 ms | → 0.96x | 0 | — | — | 23m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.76% | 97.97% | 97.97% | 1566 ms | ↓ 0.83x | 1 | 12h 2m | 18d ago | 23m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.94% | 90.39% | 90.39% | 3145 ms | ↓ 0.91x | 3 | 1d | 21d ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.87% | 22.04% | 22.04% | 957 ms | ↓ 0.56x | 2 | 0s | 10d ago | 30m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2080 ms | ↓ 0.85x | 0 | — | — | 33m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2567 ms | ↑ 1.09x | 0 | — | — | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3469 ms | ↓ 0.92x | 0 | — | — | 33m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.27% | 98.27% | 3223 ms | ↓ 0.82x | 0 | — | — | 35m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 798 ms | → 0.95x | 1 | 0s | 11d ago | 31m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.01% | 77.01% | 2402 ms | ↓ 0.90x | 0 | — | — | 22m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 1236 ms | ↑ 1.15x | 1 | 0s | 8d ago | 15m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2374 ms | ↑ 1.42x | 0 | — | — | 14m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.38% | 98.29% | 98.29% | 1522 ms | ↑ 1.12x | 7 | 8m | 19d ago | 15m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.31% | 99.68% | 99.68% | 1803 ms | → 1.01x | 1 | 2h 60m | 25d ago | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1729 ms | → 0.95x | 0 | — | — | 35m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 628 ms | ↓ 0.59x | 0 | — | — | 34m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2396 ms | → 1.01x | 1 | 0s | 24d ago | 33m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.12% | 90.12% | 1458 ms | → 0.95x | 0 | — | — | 22m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 548 ms | → 1.00x | 0 | — | — | 14m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.66% | 80.56% | 80.56% | 2130 ms | → 1.03x | 3 | 20m | 8d ago | 21m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1168 ms | ↑ 1.18x | 0 | — | — | 34m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 587 ms | → 0.99x | 0 | — | — | 16m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.86% | 99.94% | 99.94% | 1548 ms | → 0.98x | 2 | 0s | 18d ago | 15m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.31% | 86.31% | 2676 ms | → 0.99x | 0 | — | — | 19m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1791 ms | ↓ 0.88x | 0 | — | — | 15m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2062 ms | → 1.00x | 0 | — | — | 19m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 842 ms | → 0.95x | 0 | — | — | 24m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.70% | 97.70% | 2426 ms | ↑ 1.14x | 0 | — | — | 19m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1891 ms | ↑ 1.09x | 1 | 0s | 27d ago | 14m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1415 ms | → 1.01x | 1 | 0s | 19d ago | 15m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 1743 ms | → 1.04x | 1 | 0s | 24d ago | 15m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1789 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.93% | 98.93% | 238 ms | ↓ 0.89x | 1 | 29m | 11d ago | 21m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.86% | 99.20% | 99.20% | 1566 ms | → 1.04x | 2 | 0s | 8d ago | 16m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.02% | 99.02% | 3177 ms | ↑ 1.12x | 0 | — | — | 24m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.76% | 90.76% | 833 ms | ↓ 0.80x | 0 | — | — | 17m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.86% | 97.94% | 97.94% | 519 ms | → 0.97x | 2 | 0s | 9d ago | 15m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.83% | 99.83% | 848 ms | → 1.01x | 0 | — | — | 14m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.88% | 99.88% | 99.88% | 558 ms | ↓ 0.46x | 1 | 0s | 19d ago | 15m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1399 ms | ↓ 0.91x | 0 | — | — | 15m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.91% | 25.91% | 2278 ms | → 0.96x | 0 | — | — | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 849 ms | ↓ 0.86x | 0 | — | — | 36m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2463 ms | ↓ 0.93x | 0 | — | — | 34m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.31% | 98.77% | 98.77% | 2761 ms | ↑ 1.21x | 5 | 30m | 9d ago | 20m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 832 ms | ↑ 1.23x | 0 | — | — | 33m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.35% | 98.35% | 1142 ms | ↓ 0.86x | 1 | 0s | 15d ago | 18m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.73% | 99.73% | 2822 ms | ↓ 0.87x | 2 | 0s | 10d ago | 33m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.21% | 98.21% | 941 ms | ↓ 0.92x | 0 | — | — | 22m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 21.89% | 21.89% | 709 ms | ↓ 0.56x | 2 | 0s | 13d ago | 24m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 424 ms | ↓ 0.64x | 0 | — | — | 34m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.66% | 99.76% | 99.76% | 1617 ms | → 1.01x | 4 | 8m | 27d ago | 28m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.92% | 98.92% | 4142 ms | ↓ 0.92x | 0 | — | — | 36m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2998 ms | ↑ 1.45x | 0 | — | — | 33m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2451 ms | ↑ 1.12x | 1 | 21m | 9d ago | 16m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 199 ms | → 1.00x | 0 | — | — | 14m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 100.00% | 98.99% | 98.92% | 98.92% | 2646 ms | → 1.05x | 11 | 10m | 8d ago | 30m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.71% | 33.26% | 33.26% | 2403 ms | ↑ 1.06x | 5 | 2h 16m | 19d ago | 31m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 49.01% | 33.59% | 33.59% | 1757 ms | ↓ 0.92x | 2 | 6d 14h | 13d ago | 23m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 91.21% | 97.97% | 97.97% | 1894 ms | → 0.96x | 55 | 38m | 23d ago | 33m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2443 ms | ↓ 0.92x | 0 | — | — | 30m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.36% | 99.36% | 2223 ms | → 0.98x | 1 | 0s | 24d ago | 24m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 44.96% | 44.96% | 648 ms | ↓ 0.84x | 1 | 0s | 23d ago | 34m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.63% | 98.63% | 2630 ms | ↓ 0.72x | 1 | 0s | 11d ago | 21m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1091 ms | → 0.95x | 0 | — | — | 33m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2473 ms | ↓ 0.92x | 0 | — | — | 29m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.03% | 99.72% | 99.72% | 361 ms | ↑ 1.76x | 10 | 10m | 10d ago | 33m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.93% | 99.82% | 99.82% | 1532 ms | → 1.05x | 1 | 0s | 27d ago | 22m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.42% | 21.42% | 796 ms | → 1.00x | 1 | 0s | 20d ago | 33m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2402 ms | → 1.01x | 0 | — | — | 23m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 688 ms | ↓ 0.67x | 0 | — | — | 18m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 408 ms | ↓ 0.78x | 0 | — | — | 14m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.57% | 99.57% | 99.57% | 915 ms | → 1.02x | 3 | 30m | 10d ago | 16m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 643 ms | → 0.98x | 0 | — | — | 34m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.63% | 62.63% | 1123 ms | → 0.96x | 0 | — | — | 23m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 70.92% | 87.51% | 87.51% | 630 ms | ↓ 0.57x | 4 | 1d 21h | 16d ago | 15m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 3015 ms | → 1.03x | 0 | — | — | 33m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.10% | 98.84% | 98.84% | 2074 ms | ↑ 1.34x | 1 | 5h 50m | 19d ago | 16m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.06% | 99.06% | 99.06% | 2820 ms | → 0.98x | 1 | 2h 37m | 13d ago | 14m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.12% | 64.78% | 64.78% | 1065 ms | ↓ 0.62x | 3 | 1h 32m | 13d ago | 24m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.61% | 89.61% | 1712 ms | ↓ 0.91x | 1 | 0s | 20d ago | 33m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 23.67% | 23.67% | 1541 ms | ↓ 0.91x | 3 | 40m | 17d ago | 24m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.45% | 98.98% | 98.98% | 3206 ms | ↑ 1.45x | 4 | 30m | 17d ago | 22m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.39% | 81.16% | 81.16% | 1877 ms | ↓ 0.86x | 1 | 13h | 30d ago | 35m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.21% | 89.21% | 835 ms | ↓ 0.85x | 2 | 0s | 19d ago | 16m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1075 ms | ↓ 0.79x | 1 | 0s | 23d ago | 33m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1021 ms | ↓ 0.92x | 0 | — | — | 34m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 48.14% | 48.14% | 669 ms | ↑ 1.09x | 1 | 0s | 23d ago | 22m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.61% | 99.61% | 873 ms | ↓ 0.93x | 1 | 0s | 8d ago | 34m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1395 ms | → 0.99x | 0 | — | — | 15m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 785 ms | → 0.96x | 0 | — | — | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.09% | 98.86% | 98.86% | 3609 ms | → 0.96x | 2 | 8h 60m | 14d ago | 33m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.64% | 98.64% | 1555 ms | → 0.98x | 0 | — | — | 19m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.66% | 98.29% | 98.29% | 448 ms | ↓ 0.68x | 1 | 1h 40m | 15d ago | 19m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.84% | 96.84% | 1124 ms | → 1.02x | 1 | 0s | 22d ago | 19m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.32% | 71.32% | 1548 ms | ↑ 1.15x | 0 | — | — | 23m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1281 ms | → 1.02x | 0 | — | — | 14m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1380 ms | → 0.96x | 0 | — | — | 14m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 81.92% | 81.92% | 2805 ms | → 0.95x | 1 | 0s | 23d ago | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1853 ms | ↓ 0.91x | 0 | — | — | 33m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 678 ms | ↓ 0.40x | 0 | — | — | 15m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 780 ms | ↓ 0.93x | 1 | 0s | 24d ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.27% | 37.49% | 37.49% | 1782 ms | → 0.96x | 14 | 5h 29m | 15d ago | 23m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 76.43% | 29.75% | 29.75% | 2727 ms | → 1.04x | 2 | 3d 3h | 24d ago | 18m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 86.02% | 86.02% | 736 ms | → 1.02x | 0 | — | — | 32m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.34% | 99.34% | 2526 ms | → 1.03x | 0 | — | — | 23m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.75% | 98.92% | 98.92% | 2836 ms | ↓ 0.84x | 5 | 0s | 17d ago | 35m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 68.95% | 68.95% | 1860 ms | ↑ 1.08x | 2 | 0s | 9d ago | 23m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.83% | 96.83% | 1214 ms | ↓ 0.81x | 0 | — | — | 23m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1439 ms | → 1.00x | 0 | — | — | 15m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.87% | 23.66% | 23.66% | 3704 ms | ↑ 1.14x | 2 | 0s | 10d ago | 30m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2533 ms | → 0.95x | 0 | — | — | 34m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.72% | 97.69% | 97.69% | 558 ms | ↓ 0.81x | 2 | 31m | 12d ago | 16m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 2018 ms | → 1.01x | 1 | 0s | 21d ago | 16m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4120 ms | ↑ 1.06x | 0 | — | — | 15m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.04% | 60.04% | 802 ms | ↓ 0.94x | 0 | — | — | 23m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.50% | 98.34% | 98.34% | 1727 ms | ↓ 0.91x | 2 | 3h 26m | 7d ago | 22m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.93% | 43.93% | 3023 ms | → 0.96x | 0 | — | — | 23m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.43% | 99.43% | 99.43% | 2813 ms | ↓ 0.87x | 2 | 59m | 8d ago | 15m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1427 ms | → 1.00x | 0 | — | — | 14m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 3335 ms | ↓ 0.82x | 0 | — | — | 29m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 3134 ms | ↓ 0.94x | 0 | — | — | 34m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2279 ms | → 0.95x | 0 | — | — | 22m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 99.86% | 92.57% | 92.57% | 2583 ms | → 0.99x | 1 | 30m | 30d ago | 21m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.30% | 99.30% | 2371 ms | → 0.99x | 0 | — | — | 22m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.17% | 98.84% | 98.84% | 2728 ms | ↑ 1.13x | 4 | 59m | 11d ago | 16m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.73% | 80.73% | 2063 ms | ↑ 1.67x | 0 | — | — | 23m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 190 ms | → 0.99x | 0 | — | — | 34m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.86% | 99.89% | 99.89% | 2689 ms | ↑ 1.13x | 2 | 0s | 8d ago | 15m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.26% | 69.63% | 69.63% | 4195 ms | → 0.98x | 8 | 9m | 10d ago | 30m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2812 ms | → 1.00x | 0 | — | — | 33m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1113 ms | ↓ 0.63x | 0 | — | — | 15m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 2137 ms | ↓ 0.95x | 1 | 0s | 15d ago | 30m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 2948 ms | ↓ 0.91x | 1 | 0s | 18d ago | 34m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.18% | 81.18% | 2725 ms | ↓ 0.93x | 0 | — | — | 23m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.38% | 87.38% | 3095 ms | ↑ 1.72x | 0 | — | — | 23m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.66% | 99.79% | 99.79% | 1333 ms | → 0.98x | 2 | 36m | 7d ago | 15m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.28% | 96.28% | 2337 ms | → 1.00x | 1 | 0s | 13d ago | 24m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1877 ms | ↑ 1.31x | 0 | — | — | 32m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.70% | 98.70% | 858 ms | ↑ 1.12x | 0 | — | — | 21m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.68% | 25.68% | 841 ms | → 1.02x | 0 | — | — | 23m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.76% | 97.76% | 639 ms | ↓ 0.60x | 1 | 0s | 21d ago | 18m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 793 ms | → 0.99x | 0 | — | — | 21m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.14% | 63.14% | 2845 ms | ↑ 1.07x | 1 | 0s | 13d ago | 23m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 42.30% | 42.30% | 531 ms | ↓ 0.62x | 0 | — | — | 33m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.66% | 93.45% | 93.45% | 33 ms | ↑ 1.20x | 1 | 1h 22m | 10d ago | 18m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.21% | 22.21% | 1437 ms | ↓ 0.88x | 0 | — | — | 32m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 511 ms | ↓ 0.45x | 0 | — | — | 16m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.58% | 99.58% | 2895 ms | ↑ 1.27x | 1 | 0s | 17d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2755 ms | ↓ 0.56x | 0 | — | — | 17m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 481 ms | ↓ 0.83x | 0 | — | — | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.70% | 93.70% | 4706 ms | → 1.01x | 0 | — | — | 33m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.62% | 99.62% | 1692 ms | ↓ 0.89x | 0 | — | — | 33m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.86% | 99.97% | 99.97% | 2260 ms | → 0.99x | 2 | 0s | 13d ago | 22m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.29% | 99.29% | 1289 ms | ↑ 1.14x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1584 ms | ↑ 1.10x | 0 | — | — | 15m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2538 ms | ↑ 1.11x | 0 | — | — | 34m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1508 ms | ↓ 0.83x | 0 | — | — | 32m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 403 ms | ↓ 0.90x | 0 | — | — | 36m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 52.68% | 88.89% | 88.89% | 1677 ms | ↓ 0.85x | 1 | 12d 16h | 30d ago | 32m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.52% | 49.09% | 49.09% | 2940 ms | → 1.02x | 12 | 23m | 16d ago | 33m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.90% | 98.90% | 2912 ms | ↓ 0.91x | 0 | — | — | 18m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.41% | 99.01% | 99.01% | 1054 ms | ↓ 0.65x | 4 | 1h 35m | 9d ago | 14m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.52% | 99.62% | 99.62% | 1212 ms | ↓ 0.82x | 4 | 15m | 15d ago | 14m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.31% | 99.38% | 99.38% | 4825 ms | ↑ 1.25x | 8 | 6m | 10d ago | 17m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.32% | 89.32% | 2264 ms | → 0.98x | 0 | — | — | 22m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1295 ms | ↑ 1.05x | 0 | — | — | 18m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1887 ms | → 1.00x | 0 | — | — | 16m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 98.39% | 98.39% | 98.39% | 1934 ms | ↓ 0.76x | 13 | 8m | 7d ago | 15m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1659 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1072 ms | ↓ 0.66x | 0 | — | — | 34m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1242 ms | ↓ 0.62x | 1 | 0s | 27d ago | 15m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 967 ms | ↓ 0.75x | 0 | — | — | 34m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.28% | 76.28% | 1015 ms | → 0.97x | 1 | 0s | 11d ago | 21m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 861 ms | → 0.97x | 0 | — | — | 32m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.11% | 85.11% | 3051 ms | ↑ 1.09x | 0 | — | — | 30m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.18% | 98.87% | 98.87% | 1780 ms | ↓ 0.94x | 5 | 36m | 12d ago | 22m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.31% | 98.31% | 2457 ms | → 0.98x | 0 | — | — | 19m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 2270 ms | → 0.97x | 1 | 0s | 20d ago | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.72% | 99.86% | 99.86% | 1542 ms | ↑ 1.08x | 2 | 30m | 11d ago | 15m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.93% | 97.93% | 3852 ms | ↑ 1.30x | 1 | 0s | 27d ago | 17m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.44% | 95.44% | 95.44% | 1719 ms | → 0.98x | 4 | 6h 14m | 16d ago | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.86% | 98.86% | 1585 ms | ↑ 1.27x | 0 | — | — | 23m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1838 ms | → 0.95x | 0 | — | — | 32m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.65% | 99.65% | 2323 ms | ↓ 0.92x | 0 | — | — | 15m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.06% | 98.06% | 3885 ms | → 0.98x | 2 | 10m | 9d ago | 20m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 787 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.73% | 98.71% | 98.71% | 1291 ms | ↑ 1.14x | 3 | 10m | 20d ago | 22m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.81% | 99.81% | 99.81% | 1294 ms | → 0.96x | 2 | 0s | 15d ago | 15m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.18% | 32.18% | 1128 ms | → 0.99x | 0 | — | — | 32m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1481 ms | ↓ 0.87x | 0 | — | — | 22m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.44% | 98.44% | 2256 ms | → 0.96x | 1 | 0s | 15d ago | 22m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 51.96% | 55.47% | 55.47% | 1545 ms | → 0.96x | 1 | 12d 10h | 30d ago | 14m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1790 ms | → 0.98x | 0 | — | — | 32m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.19% | 89.19% | 3772 ms | → 0.97x | 0 | — | — | 23m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.89% | 16.15% | 16.15% | 2614 ms | ↓ 0.91x | 1 | 0s | 10d ago | 30m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.69% | 96.69% | 3029 ms | → 1.01x | 1 | 0s | 14d ago | 24m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.87% | 99.87% | 1891 ms | ↑ 1.06x | 1 | 0s | 23d ago | 32m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.23% | 22.23% | 1845 ms | ↓ 0.92x | 0 | — | — | 33m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 614 ms | ↓ 0.87x | 0 | — | — | 16m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.39% | 97.39% | 2600 ms | → 1.00x | 0 | — | — | 19m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2316 ms | → 1.00x | 0 | — | — | 32m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1455 ms | ↑ 1.37x | 1 | 20m | 23d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 23.75% | 23.75% | 3614 ms | → 0.99x | 1 | 0s | 14d ago | 24m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.79% | 21.79% | 1979 ms | ↓ 0.89x | 0 | — | — | 24m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 4198 ms | → 1.00x | 3 | 0s | 10d ago | 20m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.59% | 99.74% | 99.74% | 3008 ms | ↑ 1.31x | 2 | 60m | 25d ago | 15m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2932 ms | → 1.05x | 0 | — | — | 21m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1754 ms | ↓ 0.85x | 0 | — | — | 33m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.41% | 99.62% | 99.62% | 2020 ms | ↓ 0.91x | 1 | 3h 60m | 16d ago | 32m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2081 ms | ↑ 1.41x | 0 | — | — | 32m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 324 ms | → 0.98x | 0 | — | — | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.75% | 98.75% | 1410 ms | ↓ 0.95x | 0 | — | — | 19m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.93% | 99.81% | 99.81% | 1774 ms | ↓ 0.92x | 1 | 0s | 10d ago | 30m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.59% | 99.81% | 99.81% | 3612 ms | ↑ 1.73x | 4 | 15m | 8d ago | 24m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.16% | 99.16% | 1521 ms | ↓ 0.81x | 1 | 0s | 30d ago | 33m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 334 ms | ↓ 0.57x | 0 | — | — | 32m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1165 ms | ↑ 1.53x | 0 | — | — | 14m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.97% | 99.88% | 93.36% | 93.36% | 3214 ms | ↓ 0.82x | 3 | 17m | 4d ago | 36m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.93% | 99.91% | 35.68% | 35.68% | 1910 ms | ↓ 0.92x | 3 | 21s | 4d ago | 36m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.86% | 99.29% | 91.78% | 91.78% | 2651 ms | ↓ 0.81x | 29 | 3s | 4d ago | 36m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.85% | 99.95% | 98.88% | 98.88% | 1765 ms | ↓ 0.86x | 1 | 0s | 4d ago | 35m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.84% | 99.64% | 99.28% | 99.28% | 722 ms | ↓ 0.64x | 3 | 30m | 4d ago | 34m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.78% | 98.65% | 99.74% | 99.74% | 1990 ms | → 0.95x | 4 | 1h 38m | 4d ago | 34m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.77% | 99.61% | 86.08% | 86.08% | 2355 ms | → 1.02x | 7 | 0s | 2d ago | 34m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.54% | 98.78% | 99.58% | 99.58% | 2542 ms | ↓ 0.80x | 18 | 2m | 1d ago | 33m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.53% | 99.94% | 98.92% | 98.92% | 1087 ms | ↓ 0.86x | 1 | 0s | 1d ago | 32m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.51% | 99.28% | 98.76% | 98.76% | 4505 ms | → 0.97x | 29 | 3s | 2d ago | 36m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.40% | 99.87% | 99.87% | 99.87% | 2946 ms | ↓ 0.93x | 2 | 0s | 2d ago | 31m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.38% | 99.53% | 21.90% | 21.90% | 2752 ms | ↓ 0.77x | 6 | 5m | 4d ago | 29m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.36% | 99.80% | 90.76% | 90.76% | 2233 ms | → 0.98x | 3 | 0s | 2d ago | 22m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.36% | 99.52% | 90.90% | 90.90% | 956 ms | → 1.02x | 7 | 0s | 5d ago | 22m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.36% | 99.32% | 96.09% | 96.09% | 3411 ms | → 0.99x | 4 | 41m | 3d ago | 22m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.36% | 99.25% | 69.39% | 69.39% | 1616 ms | ↑ 1.06x | 9 | 7m | 7d ago | 23m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.36% | 98.84% | 91.73% | 91.73% | 1993 ms | ↑ 1.26x | 16 | 2m | 3d ago | 22m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.35% | 99.80% | 24.03% | 24.03% | 654 ms | ↓ 0.53x | 3 | 0s | 7d ago | 24m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.35% | 99.66% | 24.47% | 24.47% | 1625 ms | → 1.02x | 5 | 0s | 7d ago | 24m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.35% | 98.01% | 92.77% | 92.77% | 689 ms | → 1.03x | 14 | 25m | 7d ago | 18m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.35% | 95.67% | 84.12% | 84.12% | 1584 ms | ↑ 1.08x | 3 | 8h 40m | 6h ago | 18m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.35% | 99.04% | 98.42% | 98.42% | 3861 ms | → 1.03x | 6 | 35m | 2d ago | 20m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.35% | 99.93% | 99.81% | 99.81% | 1266 ms | ↑ 1.16x | 1 | 0s | 5d ago | 18m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.35% | 99.38% | 96.98% | 96.98% | 1692 ms | ↓ 0.93x | 4 | 35m | 2d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.34% | 99.72% | 98.07% | 98.07% | 630 ms | ↓ 0.89x | 4 | 0s | 2d ago | 18m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.33% | 99.22% | 99.22% | 99.22% | 358 ms | ↓ 0.80x | 10 | 2m | 3d ago | 16m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.33% | 99.79% | 99.65% | 99.65% | 1515 ms | ↓ 0.56x | 3 | 0s | 2d ago | 15m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.33% | 80.08% | 82.91% | 82.91% | 1576 ms | → 1.05x | 5 | 1d 1h | 1d ago | 16m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.33% | 99.91% | 99.91% | 99.91% | 2047 ms | ↓ 0.88x | 1 | 0s | 3d ago | 15m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.32% | 99.66% | 63.79% | 63.79% | 2873 ms | → 0.99x | 6 | 0s | 2d ago | 34m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.08% | 99.48% | 22.20% | 22.20% | 2150 ms | → 1.01x | 7 | 9m | 2d ago | 33m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.00% | 99.61% | 99.00% | 99.00% | 4197 ms | → 1.01x | 6 | 0s | 4d ago | 32m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.00% | 99.61% | 99.17% | 99.17% | 4381 ms | → 1.01x | 6 | 0s | 4d ago | 32m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (52)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.72% | 98.30% | 68.42% | 68.42% | 4579 ms | → 0.98x | 21 | 6m | 7d ago | 23m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.71% | 99.73% | 97.55% | 97.55% | 2252 ms | → 1.03x | 4 | 0s | 1d ago | 24m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 98.71% | 99.73% | 22.92% | 22.92% | 589 ms | ↓ 0.66x | 3 | 8m | 4d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.71% | 98.10% | 96.74% | 96.74% | 4342 ms | ↓ 0.93x | 9 | 1h 1m | 7d ago | 24m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.69% | 98.83% | 97.91% | 97.91% | 4138 ms | → 1.02x | 12 | 11m | 2d ago | 20m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.69% | 99.86% | 91.65% | 91.65% | 644 ms | ↑ 1.10x | 1 | 30m | 5d ago | 21m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.68% | 94.09% | 95.76% | 95.76% | 1186 ms | ↓ 0.41x | 12 | 2h 40m | 23h ago | 18m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.67% | 99.79% | 98.98% | 98.98% | 2363 ms | ↑ 2.33x | 2 | 10m | 6d ago | 15m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.67% | 98.62% | 98.61% | 98.61% | 2903 ms | → 1.03x | 20 | 0s | 4d ago | 15m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 98.67% | 99.86% | 99.86% | 99.86% | 3247 ms | ↑ 1.11x | 2 | 0s | 2d ago | 15m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.50% | 97.39% | 21.49% | 21.49% | 3122 ms | ↑ 1.32x | 39 | 30s | 2d ago | 31m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.48% | 98.48% | 98.48% | 98.48% | 398 ms | → 1.00x | 1 | 0s | 12h ago | 14m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.15% | 99.80% | 97.92% | 97.92% | 2836 ms | ↓ 0.80x | 1 | 1h | 4d ago | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.10% | 99.68% | 99.65% | 99.65% | 1617 ms | → 0.96x | 4 | 1h 12m | 2d ago | 32m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.08% | 99.73% | 93.01% | 93.01% | 1666 ms | ↓ 0.85x | 2 | 26m | 6d ago | 22m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.06% | 98.30% | 86.67% | 86.67% | 4520 ms | ↑ 1.06x | 24 | 1m | 18h ago | 24m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 98.04% | 99.79% | 87.01% | 87.01% | 2367 ms | → 0.99x | 2 | 29m | 23m ago | 19m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.04% | 96.79% | 86.73% | 86.73% | 4842 ms | → 1.03x | 35 | 9m | 6d ago | 21m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.00% | 99.10% | 96.73% | 96.73% | 2508 ms | ↑ 1.13x | 12 | 59m | 4d ago | 16m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.69% | 80.14% | 77.79% | 77.79% | 3963 ms | → 1.00x | 76 | 4h 10m | 2d ago | 36m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.44% | 98.37% | 73.67% | 73.67% | 905 ms | → 0.97x | 9 | 50m | 4d ago | 23m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.44% | 95.85% | 83.46% | 83.46% | 4852 ms | → 1.00x | 55 | 3m | 2d ago | 22m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.39% | 99.45% | 92.00% | 92.00% | 3476 ms | ↑ 1.11x | 8 | 0s | 4d ago | 21m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 97.33% | 89.80% | 93.33% | 93.33% | 1028 ms | ↓ 0.57x | 83 | 18m | 7d ago | 16m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.33% | 92.53% | 92.53% | 92.53% | 4645 ms | → 0.97x | 27 | 1h 22m | 2d ago | 14m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.52% | 97.98% | 86.14% | 86.14% | 4439 ms | → 1.00x | 29 | 2m | 2d ago | 32m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.21% | 98.94% | 48.46% | 48.46% | 1503 ms | ↑ 1.09x | 7 | 30m | 4d ago | 34m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.00% | 96.89% | 96.89% | 96.89% | 4518 ms | → 1.05x | 30 | 3m | 15h ago | 14m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 95.99% | 96.02% | 99.48% | 99.48% | 3041 ms | ↓ 0.71x | 3 | 9h 27m | 6d ago | 35m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.68% | 96.24% | 98.45% | 98.45% | 3950 ms | ↓ 0.92x | 54 | 1m | 2d ago | 29m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.51% | 93.12% | 73.59% | 73.59% | 1703 ms | → 0.97x | 21 | 1h 21m | 5d ago | 23m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 95.42% | 14.48% | 44.76% | 44.76% | 2390 ms | ↓ 0.94x | 4 | 5d 19h | 2d ago | 20m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.42% | 96.16% | 84.59% | 84.59% | 4613 ms | ↑ 1.05x | 49 | 4m | 2d ago | 21m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 95.15% | 97.26% | 96.54% | 96.54% | 1938 ms | → 1.04x | 8 | 1h 41m | 5d ago | 30m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 94.77% | 97.33% | 53.69% | 53.69% | 3982 ms | ↑ 1.23x | 37 | 1m | 13h ago | 20m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 94.67% | 99.36% | 99.36% | 99.36% | 1230 ms | ↓ 0.88x | 3 | 2h | 1d ago | 15m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 94.67% | 97.31% | 98.46% | 98.46% | 2212 ms | ↑ 1.15x | 6 | 2h 13m | 5d ago | 16m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 94.67% | 98.55% | 98.85% | 98.85% | 2125 ms | ↑ 1.13x | 13 | 15m | 6d ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 93.33% | 94.79% | 20.11% | 20.11% | 3291 ms | ↑ 1.12x | 72 | 3m | 8h ago | 30m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.85% | 88.81% | 59.82% | 59.82% | 4014 ms | → 1.03x | 133 | 6m | 3h ago | 19m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 88.67% | 69.75% | 35.33% | 35.33% | 3167 ms | ↓ 0.88x | 165 | 44m | 20h ago | 15m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 87.10% | 87.29% | 22.44% | 22.44% | 4270 ms | → 1.03x | 139 | 12m | 14h ago | 24m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 78.85% | 72.36% | 26.50% | 26.50% | 4423 ms | ↓ 0.91x | 244 | 19m | 8h ago | 23m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 77.25% | 72.93% | 62.88% | 62.88% | 4857 ms | → 0.98x | 272 | 16m | 4h ago | 31m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 73.86% | 96.64% | 55.64% | 55.64% | 914 ms | ↑ 1.65x | 9 | 1h 48m | 7d ago | 21m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 72.77% | 67.31% | 96.36% | 96.36% | 4575 ms | ↑ 1.06x | 284 | 22m | 10h ago | 33m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 56.21% | 80.30% | 82.49% | 82.49% | 1258 ms | ↓ 0.49x | 22 | 6h 22m | 2d ago | 19m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 56.00% | 94.97% | 96.87% | 96.87% | 1590 ms | ↓ 0.67x | 3 | 17h 47m | 7d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 35.29% | 3.70% | 24.33% | 24.33% | 3150 ms | → 1.00x | 1 | 26d 6h | 30d ago | 21m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 29.28% | 76.40% | 94.05% | 94.05% | 3692 ms | → 1.01x | 11 | 8h 8m | 4d ago | 35m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 25.50% | 3.32% | 39.31% | 39.31% | 1181 ms | → 1.00x | 1 | 27d 21h | 30d ago | 32m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 8.20% | 59.02% | 95.63% | 95.63% | 2875 ms | → 0.99x | 2 | 4d 7h | 11d ago | 35m ago |

</details>

<details open>
<summary><strong>🔴 Down (266)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.35% | 99.24% | 68.36% | 68.36% | 1992 ms | ↑ 1.45x | 3 | 1h 20m | 18m ago | 18m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.69% | 75.63% | 92.65% | 92.65% | 4636 ms | ↑ 1.45x | 7 | 20h 26m | 20m ago | 20m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 90.67% | 98.07% | 97.16% | 97.16% | 2246 ms | ↑ 1.12x | 12 | 39m | 16m ago | 16m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 85.45% | 95.52% | 75.08% | 75.08% | 4074 ms | ↓ 0.65x | 42 | 28m | 15h ago | 30m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 78.00% | 73.60% | 81.14% | 81.14% | 4434 ms | ↓ 0.94x | 166 | 35m | 14m ago | 14m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 73.39% | 96.27% | 96.57% | 96.57% | 2642 ms | ↓ 0.85x | 1 | 2d 12h | 3d ago | 33m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 71.60% | 96.37% | 20.05% | 20.05% | 2535 ms | ↓ 0.75x | 6 | 7h 33m | 2d ago | 28m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 69.46% | 96.53% | 99.29% | 99.29% | 2095 ms | → 0.98x | 2 | 23h 48m | 2d ago | 31m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 67.97% | 26.63% | 64.95% | 64.95% | 2034 ms | ↓ 0.95x | 3 | 6d 16h | 2d ago | 20m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 66.03% | 40.68% | 32.38% | 32.38% | 1059 ms | → 0.97x | 4 | 4d 9h | 3d ago | 23m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 63.87% | 66.55% | 32.90% | 32.90% | 2400 ms | ↑ 1.12x | 3 | 3d 21h | 4d ago | 24m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 36.67% | 56.17% | 78.17% | 78.17% | 4940 ms | ↑ 1.55x | 175 | 1h 22m | 17m ago | 17m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 9.80% | 20.95% | 26.02% | 26.02% | 1771 ms | ↓ 0.92x | 3 | 8d 5h | 7d ago | 18m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 1.94% | 0.20% | 78.34% | 78.34% | 1062 ms | → 1.00x | 3 | 9d 23h | 24m ago | 24m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.76% | 1.79% | 50.44% | 50.44% | 4004 ms | ↓ 0.88x | 74 | 9h 24m | 2h ago | 36m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.60% | 18.87% | 49.47% | 49.47% | 2175 ms | ↑ 1.09x | 6 | 4d 3h | 5d ago | 31m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.11% | 77.11% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.04% | 64.04% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.93% | 68.93% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 38.47% | 38.47% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.48% | 72.48% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 53.92% | 53.92% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.26% | 5.26% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.35% | 10.35% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 89.66% | 94.97% | 94.97% | — | — | 1 | 6d 24h | 7d ago | 16m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.03% | 49.03% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 51.00% | 79.04% | 79.04% | — | — | 17 | 23h 22m | 17d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.17% | 3.17% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 26.17% | 82.87% | 82.87% | — | — | 1 | 23d 2h | 23d ago | 18m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.54% | 77.54% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.03% | 34.03% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 87.83% | 94.67% | 94.67% | — | — | 2 | 3d 16h | 7d ago | 18m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.62% | 84.62% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.48% | 21.48% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.99% | 67.99% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.56% | 45.56% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.46% | 27.46% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 4.89% | 85.64% | 85.64% | — | — | 1 | 28d 12h | 29d ago | 33m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 76.13% | 76.13% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.55% | 58.55% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.79% | 71.79% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 35m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.44% | 13.44% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.29% | 45.29% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.41% | 88.41% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.91% | 30.91% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 38.53% | 73.52% | 73.52% | — | — | 1 | 19d 22h | 20d ago | 15m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 37.44% | 36.50% | 36.50% | — | — | 3 | 6d 13h | 20d ago | 17m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 4.93% | 81.13% | 81.13% | — | — | 1 | 28d 14h | 29d ago | 20m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.17% | 3.17% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 59.13% | 81.55% | 81.55% | — | — | 6 | 2d 10h | 14d ago | 15m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 46.24% | 77.37% | 77.37% | — | — | 1 | 18d | 18d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.18% | 78.18% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.24% | 26.24% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.41% | 48.41% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.92% | 1.92% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.42% | 85.42% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 22.61% | 36.66% | 36.66% | — | — | 1 | 24d | 24d ago | 15m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 66.86% | 66.86% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 54.49% | 47.04% | 47.04% | — | — | 2 | 8d 1h | 11d ago | 23m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.15% | 68.15% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 39.42% | 74.04% | 74.04% | — | — | 3 | 6d 13h | 20d ago | 17m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 57.41% | 42.11% | 42.11% | — | — | 5 | 3d 2h | 12d ago | 15m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 56.91% | 65.57% | 65.57% | — | — | 6 | 2d 13h | 12d ago | 22m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.15% | 27.15% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.02% | 51.02% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.43% | 22.43% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 69.12% | 69.12% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 39.11% | 39.11% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 3h | 29d ago | 14m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 51.43% | 51.43% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 47.22% | 47.22% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.79% | 21.79% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.74% | 4.74% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.38% | 61.38% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 76.09% | 76.09% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 22.39% | 71.57% | 71.57% | — | — | 1 | 24d 1h | 24d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.71% | 5.71% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.38% | 74.38% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 75.03% | 75.03% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.12% | 29.12% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 8.44% | 85.86% | 85.86% | — | — | 1 | 27d 15h | 28d ago | 22m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.90% | 20.90% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.38% | 49.38% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 60.66% | 84.90% | 84.90% | — | — | 1 | 13d 15h | 14d ago | 33m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 20.40% | 20.40% | 20.40% | — | — | 2 | 9d 13h | 19d ago | 15m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 39.35% | 72.45% | 72.45% | — | — | 4 | 4d 22h | 20d ago | 17m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 63.20% | 83.91% | 83.91% | — | — | 3 | 4d 14h | 14d ago | 15m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 38.87% | 78.61% | 78.61% | — | — | 12 | 1d 15h | 20d ago | 17m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.94% | 48.94% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 16.43% | 17.14% | 17.14% | — | — | 8 | 2d 11h | 20d ago | 17m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.46% | 6.46% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.52% | 57.52% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.70% | 43.70% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 19.23% | 19.23% | 19.23% | — | — | 3 | 8d 1h | 24d ago | 16m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.62% | 39.62% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 32.53% | 75.16% | 75.16% | — | — | 3 | 6d 5h | 19d ago | 35m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 21.99% | 21.99% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 69.31% | 69.31% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.02% | 55.02% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 55.82% | 81.05% | 81.05% | — | — | 1 | 15d 14h | 16d ago | 16m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.96% | 35.96% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 67.71% | 67.71% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.43% | 72.43% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 64.95% | 64.95% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.37% | 2.37% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.89% | 77.89% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.09% | 39.09% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.58% | 91.58% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.87% | 77.87% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.60% | 30.60% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.97% | 75.97% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.46% | 44.46% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 18.18% | 18.18% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.67% | 40.67% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.75% | 66.75% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.41% | 59.41% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.95% | 24.95% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 2h | 29d ago | 16m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.17% | 74.17% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 2h | 29d ago | 16m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 44.73% | 44.73% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.92% | 2.92% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 3h | 29d ago | 16m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.03% | 40.03% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.71% | 71.71% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.42% | 55.42% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 24.07% | 24.07% | 24.07% | — | — | 1 | 22d 24h | 23d ago | 16m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.28% | 35.28% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 54.65% | 54.65% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.42% | 83.42% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 29.01% | 93.69% | 93.69% | — | — | 2 | 10d 10h | 21d ago | 34m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.49% | 23.49% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.99% | 10.99% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.59% | 22.59% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 23m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.68% | 49.68% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 87.29% | 87.29% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 49.74% | 49.74% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 67.24% | 67.24% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 81.23% | 95.01% | 95.01% | — | — | 2 | 4d 12h | 9d ago | 21m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.16% | 8.16% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.42% | 16.42% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.51% | 46.51% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 11.06% | 47.25% | 47.25% | — | — | 1 | 26d 23h | 27d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 17.95% | 17.95% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.85% | 51.85% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.34% | 89.34% | — | — | 1 | 22d 21h | 23d ago | 28m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.14% | 36.14% | — | — | 1 | 29d 3h | 29d ago | 23m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.05% | 20.05% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 29.85% | 29.85% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.22% | 5.22% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 73.89% | 73.89% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.66% | 84.66% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 49.88% | 49.88% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.76% | 76.76% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 53.00% | 53.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.52% | 69.52% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.61% | 76.61% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 22h | 23d ago | 15m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.32% | 18.32% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.90% | 54.90% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.67% | 36.67% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.83% | 3.83% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.97% | 31.97% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.30% | 64.30% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.79% | 22.79% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.83% | 6.83% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.61% | 54.61% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.19% | 24.19% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.37% | 63.37% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.53% | 32.53% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 39.42% | 73.60% | 73.60% | — | — | 3 | 6d 13h | 20d ago | 17m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.06% | 4.06% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 20h | 23d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 46.49% | 46.49% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.12% | 40.12% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.07% | 31.07% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.02% | 18.02% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.14% | 5.14% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.46% | 10.46% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.89% | 16.89% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.27% | 15.27% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 26.89% | 26.89% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.16% | 9.16% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.93% | 6.93% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.72% | 0.72% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.13% | 4.13% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.79% | 4.79% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.84% | 46.84% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 86.35% | 86.87% | 86.87% | — | — | 2 | 3d 21h | 8d ago | 14m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 38.27% | 38.27% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.79% | 77.79% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 65.51% | 65.51% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.37% | 41.37% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.12% | 78.12% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.50% | 45.50% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.82% | 38.82% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.45% | 1.45% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.92% | 17.92% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 3h | 29d ago | 16m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.02% | 76.02% | — | — | 1 | 29d 23h | 30d ago | 27m ago |

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
