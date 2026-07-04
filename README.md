# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 356 🟢 operational · 54 🟡 degraded · 265 🔴 down · 0 ⚫ unknown

_Updated 2026-07-04 06:23 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (356)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.41% | 98.41% | 907 ms | ↑ 1.09x | 0 | — | — | 6m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1384 ms | ↓ 0.81x | 0 | — | — | 2m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.86% | 94.17% | 94.17% | 706 ms | ↓ 0.51x | 2 | 0s | 28d ago | 10m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.80% | 23.72% | 23.72% | 2910 ms | → 0.96x | 3 | 0s | 24d ago | 12m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.55% | 97.55% | 3310 ms | ↓ 0.87x | 0 | — | — | 21m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 59.06% | 59.06% | 1784 ms | → 1.03x | 0 | — | — | 9m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.38% | 99.57% | 99.57% | 814 ms | ↓ 0.87x | 4 | 35m | 12d ago | 2m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.71% | 98.71% | 1118 ms | → 1.00x | 2 | 0s | 14d ago | 11m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.60% | 99.60% | 2906 ms | ↓ 0.78x | 0 | — | — | 23m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.72% | 95.72% | 2355 ms | ↓ 0.84x | 0 | — | — | 7m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2410 ms | ↑ 1.16x | 0 | — | — | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.95% | 97.95% | 2918 ms | ↓ 0.83x | 0 | — | — | 7m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2263 ms | ↑ 1.08x | 1 | 0s | 15d ago | 4m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1414 ms | ↑ 1.12x | 0 | — | — | 2m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.77% | 98.77% | 1309 ms | ↓ 0.83x | 0 | — | — | 7m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.03% | 96.91% | 96.91% | 1289 ms | ↓ 0.73x | 4 | 4h 2m | 11d ago | 6m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.04% | 99.04% | 404 ms | ↓ 0.38x | 0 | — | — | 4m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.60% | 39.60% | 751 ms | ↓ 0.80x | 0 | — | — | 18m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1607 ms | → 1.01x | 0 | — | — | 2m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.72% | 99.86% | 99.86% | 1677 ms | ↓ 0.93x | 3 | 7m | 8d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.16% | 97.16% | 2696 ms | ↓ 0.93x | 0 | — | — | 10m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.91% | 98.91% | 1200 ms | ↑ 1.06x | 1 | 30m | 25d ago | 20m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 946 ms | ↓ 0.80x | 0 | — | — | 3m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 96.96% | 96.96% | 841 ms | ↓ 0.93x | 2 | 0s | 15d ago | 9m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.50% | 88.50% | 1695 ms | ↓ 0.89x | 0 | — | — | 8m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1604 ms | ↓ 0.89x | 1 | 0s | 13d ago | 3m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.52% | 99.71% | 99.71% | 1754 ms | ↓ 0.66x | 3 | 39m | 9d ago | 3m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.52% | 98.52% | 3720 ms | ↓ 0.87x | 0 | — | — | 8m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 80.02% | 80.02% | 2683 ms | → 1.03x | 3 | 0s | 11d ago | 18m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.66% | 99.66% | 1483 ms | → 0.97x | 3 | 19m | 19d ago | 4m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 917 ms | ↓ 0.81x | 1 | 0s | 21d ago | 3m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.86% | 97.86% | 1614 ms | ↑ 1.06x | 0 | — | — | 9m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 411 ms | ↓ 0.80x | 1 | 0s | 12d ago | 19m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.75% | 99.75% | 2954 ms | → 0.98x | 1 | 0s | 12d ago | 19m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.08% | 99.08% | 624 ms | → 1.00x | 1 | 0s | 12d ago | 9m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.96% | 97.96% | 3675 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.90% | 99.64% | 99.64% | 2225 ms | → 0.99x | 2 | 3h 20m | 15d ago | 9m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.62% | 96.62% | 677 ms | ↓ 0.87x | 0 | — | — | 9m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1175 ms | ↓ 0.89x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 616 ms | ↓ 0.36x | 0 | — | — | 3m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.81% | 99.81% | 99.81% | 1699 ms | → 0.96x | 2 | 0s | 19d ago | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.86% | 99.06% | 99.06% | 2721 ms | ↓ 0.85x | 2 | 0s | 16d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.86% | 99.87% | 99.87% | 1353 ms | ↓ 0.85x | 2 | 0s | 25d ago | 6m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.86% | 99.86% | 729 ms | ↓ 0.67x | 0 | — | — | 2m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.25% | 91.25% | 91.25% | 1057 ms | ↓ 0.56x | 22 | 1h 48m | 8d ago | 2m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3230 ms | ↓ 0.82x | 0 | — | — | 17m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 99.79% | 97.73% | 97.73% | 2588 ms | ↑ 1.11x | 3 | 0s | 12d ago | 9m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.73% | 99.73% | 857 ms | → 0.95x | 0 | — | — | 7m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1453 ms | ↑ 1.08x | 0 | — | — | 2m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.93% | 32.58% | 32.58% | 1324 ms | ↑ 1.10x | 1 | 0s | 12d ago | 19m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.68% | 96.68% | 1911 ms | ↓ 0.80x | 1 | 0s | 13d ago | 6m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 100.00% | 98.25% | 21.59% | 21.59% | 3450 ms | ↓ 0.83x | 26 | 0s | 9d ago | 17m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 100.00% | 89.83% | 93.40% | 93.40% | 965 ms | ↓ 0.53x | 82 | 19m | 8d ago | 4m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.05% | 98.05% | 4396 ms | ↑ 1.38x | 0 | — | — | 8m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.84% | 99.84% | 99.84% | 2123 ms | ↓ 0.93x | 1 | 30m | 21d ago | 2m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1003 ms | ↓ 0.71x | 0 | — | — | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 603 ms | ↓ 0.93x | 0 | — | — | 4m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.79% | 99.83% | 99.83% | 681 ms | ↓ 0.94x | 3 | 0s | 23d ago | 4m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.94% | 96.94% | 522 ms | ↓ 0.72x | 0 | — | — | 10m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 940 ms | ↓ 0.76x | 0 | — | — | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.57% | 56.57% | 1349 ms | ↓ 0.72x | 0 | — | — | 12m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.55% | 98.55% | 98.55% | 696 ms | ↓ 0.94x | 2 | 4h 33m | 23d ago | 2m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1319 ms | ↓ 0.80x | 0 | — | — | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 4037 ms | → 0.97x | 0 | — | — | 18m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.58% | 87.19% | 87.19% | 953 ms | ↓ 0.58x | 5 | 6m | 8d ago | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.25% | 97.25% | 1480 ms | ↑ 1.09x | 0 | — | — | 18m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.79% | 99.00% | 99.00% | 2171 ms | ↑ 1.90x | 2 | 10m | 7d ago | 2m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.17% | 99.17% | 1008 ms | ↓ 0.77x | 1 | 0s | 21d ago | 10m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.99% | 49.76% | 49.76% | 2412 ms | ↓ 0.90x | 8 | 1h 3m | 11d ago | 18m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.34% | 84.34% | 2908 ms | ↓ 0.82x | 0 | — | — | 10m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.80% | 68.09% | 68.09% | 1340 ms | → 0.98x | 2 | 10m | 14d ago | 11m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 989 ms | ↑ 1.31x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.82% | 98.82% | 2618 ms | ↓ 0.93x | 0 | — | — | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3834 ms | ↓ 0.84x | 0 | — | — | 3m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.19% | 93.19% | 678 ms | ↓ 0.75x | 0 | — | — | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.80% | 98.80% | 1126 ms | ↓ 0.89x | 0 | — | — | 7m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.85% | 99.85% | 645 ms | ↑ 1.25x | 0 | — | — | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.49% | 99.49% | 889 ms | ↓ 0.94x | 0 | — | — | 4m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.91% | 99.91% | 99.91% | 1498 ms | ↓ 0.71x | 1 | 0s | 10d ago | 2m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.12% | 98.12% | 3322 ms | ↑ 1.47x | 1 | 0s | 24d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.52% | 90.52% | 1072 ms | → 0.97x | 1 | 0s | 27d ago | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 49.64% | 49.64% | 1596 ms | ↓ 0.73x | 2 | 0s | 14d ago | 12m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1789 ms | ↓ 0.69x | 0 | — | — | 3m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.66% | 77.66% | 1146 ms | ↓ 0.79x | 0 | — | — | 10m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.65% | 96.69% | 96.69% | 1192 ms | ↓ 0.84x | 1 | 2h 1m | 16d ago | 2m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.46% | 56.57% | 56.57% | 1509 ms | ↓ 0.91x | 8 | 0s | 10d ago | 19m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 986 ms | → 0.96x | 0 | — | — | 3m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.29% | 68.54% | 68.54% | 4585 ms | ↓ 0.91x | 21 | 6m | 8d ago | 10m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.34% | 98.34% | 2527 ms | ↓ 0.95x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.39% | 54.26% | 54.26% | 960 ms | ↓ 0.80x | 5 | 24m | 14d ago | 12m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 883 ms | ↓ 0.94x | 0 | — | — | 2m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2097 ms | ↓ 0.71x | 0 | — | — | 3m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1019 ms | → 1.00x | 0 | — | — | 1m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.79% | 99.84% | 99.84% | 1712 ms | ↓ 0.82x | 3 | 0s | 16d ago | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.86% | 83.23% | 83.23% | 2074 ms | ↓ 0.85x | 2 | 0s | 25d ago | 10m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.43% | 64.43% | 580 ms | ↓ 0.84x | 2 | 0s | 14d ago | 11m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.10% | 98.10% | 2885 ms | ↑ 1.51x | 0 | — | — | 12m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1783 ms | ↓ 0.88x | 0 | — | — | 3m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.81% | 99.33% | 99.33% | 2861 ms | ↓ 0.80x | 5 | 5h 45m | 19d ago | 17m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.21% | 62.21% | 1662 ms | → 1.03x | 0 | — | — | 11m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.17% | 65.17% | 1278 ms | ↓ 0.80x | 0 | — | — | 11m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.72% | 99.88% | 99.88% | 1719 ms | → 1.04x | 1 | 1h 9m | 18d ago | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.26% | 99.26% | 1733 ms | ↓ 0.88x | 0 | — | — | 11m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1898 ms | ↑ 1.11x | 0 | — | — | 9m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.60% | 99.60% | 562 ms | ↓ 0.84x | 0 | — | — | 11m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.75% | 97.97% | 97.97% | 1159 ms | ↓ 0.62x | 1 | 12h 2m | 19d ago | 10m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.96% | 90.61% | 90.61% | 2494 ms | ↓ 0.84x | 2 | 1d 13h | 22d ago | 2m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.87% | 22.22% | 22.22% | 650 ms | ↓ 0.50x | 2 | 0s | 11d ago | 18m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 1822 ms | ↓ 0.77x | 0 | — | — | 21m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2249 ms | ↓ 0.89x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3250 ms | ↓ 0.87x | 0 | — | — | 21m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.27% | 98.27% | 3047 ms | ↓ 0.80x | 0 | — | — | 23m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 790 ms | ↓ 0.93x | 1 | 0s | 12d ago | 19m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.12% | 77.12% | 2238 ms | ↓ 0.91x | 0 | — | — | 9m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 1186 ms | ↑ 1.08x | 1 | 0s | 9d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2507 ms | ↑ 1.28x | 0 | — | — | 1m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.38% | 98.31% | 98.31% | 1259 ms | ↓ 0.81x | 7 | 8m | 20d ago | 2m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.31% | 99.69% | 99.69% | 1816 ms | → 1.00x | 1 | 2h 60m | 26d ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1621 ms | ↓ 0.90x | 0 | — | — | 23m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 627 ms | ↓ 0.60x | 0 | — | — | 22m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2155 ms | ↓ 0.86x | 1 | 0s | 25d ago | 21m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.16% | 90.16% | 1333 ms | ↓ 0.87x | 0 | — | — | 10m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 629 ms | → 1.00x | 0 | — | — | 1m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.66% | 80.67% | 80.67% | 2070 ms | → 0.98x | 3 | 20m | 9d ago | 9m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1089 ms | ↑ 1.12x | 0 | — | — | 22m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 833 ms | ↑ 1.14x | 0 | — | — | 4m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.86% | 99.94% | 99.94% | 1371 ms | ↓ 0.78x | 2 | 0s | 19d ago | 3m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.42% | 86.42% | 2513 ms | ↓ 0.90x | 0 | — | — | 7m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1696 ms | ↓ 0.72x | 0 | — | — | 3m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1916 ms | ↓ 0.90x | 0 | — | — | 7m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 716 ms | ↓ 0.72x | 0 | — | — | 12m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.72% | 97.72% | 2196 ms | → 0.99x | 0 | — | — | 7m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1641 ms | ↓ 0.94x | 1 | 0s | 28d ago | 2m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1638 ms | → 1.02x | 1 | 0s | 20d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 1543 ms | ↓ 0.76x | 1 | 0s | 25d ago | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1571 ms | ↓ 0.81x | 0 | — | — | 3m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.94% | 98.94% | 577 ms | ↑ 1.39x | 1 | 29m | 12d ago | 9m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.86% | 99.21% | 99.21% | 1594 ms | → 1.00x | 2 | 0s | 9d ago | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.02% | 99.02% | 2678 ms | → 0.98x | 0 | — | — | 12m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.03% | 91.03% | 779 ms | ↓ 0.88x | 0 | — | — | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.86% | 97.97% | 97.97% | 519 ms | ↓ 0.84x | 2 | 0s | 10d ago | 3m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.84% | 99.84% | 893 ms | ↑ 1.14x | 0 | — | — | 2m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1260 ms | ↓ 0.74x | 0 | — | — | 2m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.09% | 26.09% | 1930 ms | ↓ 0.73x | 0 | — | — | 12m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2508 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.38% | 98.78% | 98.78% | 2559 ms | ↑ 1.05x | 4 | 38m | 10d ago | 8m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 823 ms | ↑ 1.18x | 0 | — | — | 21m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.37% | 98.37% | 1115 ms | ↓ 0.78x | 1 | 0s | 16d ago | 6m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.74% | 99.74% | 2606 ms | ↓ 0.83x | 2 | 0s | 11d ago | 21m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.21% | 98.21% | 936 ms | → 0.96x | 0 | — | — | 10m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 22.07% | 22.07% | 601 ms | ↓ 0.48x | 2 | 0s | 14d ago | 12m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 422 ms | ↓ 0.62x | 0 | — | — | 22m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.73% | 99.76% | 99.76% | 1582 ms | ↓ 0.90x | 3 | 10m | 28d ago | 16m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2777 ms | ↑ 1.38x | 0 | — | — | 21m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2441 ms | → 1.03x | 1 | 21m | 10d ago | 4m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 502 ms | ↑ 1.25x | 0 | — | — | 1m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.70% | 33.41% | 33.41% | 2357 ms | → 1.02x | 5 | 2h 16m | 20d ago | 19m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 52.43% | 33.80% | 33.80% | 1896 ms | ↓ 0.94x | 2 | 6d 2h | 14d ago | 11m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 92.67% | 97.98% | 97.98% | 1746 ms | ↓ 0.85x | 48 | 35m | 24d ago | 21m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2267 ms | ↓ 0.90x | 0 | — | — | 18m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.36% | 99.36% | 2094 ms | ↓ 0.91x | 1 | 0s | 25d ago | 12m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.09% | 45.09% | 618 ms | ↓ 0.82x | 1 | 0s | 24d ago | 22m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.64% | 98.64% | 1937 ms | ↓ 0.62x | 1 | 0s | 12d ago | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 98.07% | 92.83% | 92.83% | 671 ms | ↓ 0.92x | 13 | 27m | 8d ago | 6m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1059 ms | ↓ 0.89x | 0 | — | — | 21m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2585 ms | ↓ 0.88x | 0 | — | — | 17m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.03% | 99.72% | 99.72% | 372 ms | ↑ 1.79x | 10 | 10m | 11d ago | 21m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.93% | 99.82% | 99.82% | 1411 ms | → 0.97x | 1 | 0s | 28d ago | 9m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.59% | 21.59% | 814 ms | ↓ 0.93x | 1 | 0s | 21d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2192 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 671 ms | ↓ 0.59x | 0 | — | — | 6m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 525 ms | → 0.95x | 0 | — | — | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.58% | 99.59% | 99.59% | 916 ms | ↓ 0.91x | 3 | 30m | 11d ago | 4m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 622 ms | ↓ 0.94x | 0 | — | — | 22m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.73% | 62.73% | 1232 ms | ↓ 0.88x | 0 | — | — | 11m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.80% | 24.21% | 24.21% | 648 ms | ↓ 0.50x | 3 | 0s | 8d ago | 12m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 70.80% | 87.68% | 87.68% | 614 ms | ↓ 0.60x | 4 | 1d 21h | 17d ago | 2m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2606 ms | → 0.96x | 0 | — | — | 21m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.10% | 98.85% | 98.85% | 2013 ms | ↑ 1.21x | 1 | 5h 50m | 20d ago | 4m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.12% | 99.12% | 99.12% | 2258 ms | ↓ 0.86x | 1 | 2h 37m | 14d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.11% | 65.11% | 65.11% | 1110 ms | ↓ 0.68x | 3 | 1h 32m | 14d ago | 12m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.63% | 89.63% | 1494 ms | ↓ 0.86x | 1 | 0s | 21d ago | 21m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 23.84% | 23.84% | 1443 ms | ↓ 0.86x | 3 | 40m | 18d ago | 12m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.45% | 98.98% | 98.98% | 2918 ms | ↑ 1.32x | 4 | 30m | 18d ago | 10m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 100.00% | 81.20% | 81.20% | 1847 ms | ↓ 0.84x | 0 | — | — | 23m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.36% | 89.36% | 911 ms | ↓ 0.78x | 2 | 0s | 20d ago | 4m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 986 ms | ↓ 0.71x | 1 | 0s | 24d ago | 21m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1041 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 48.41% | 48.41% | 666 ms | → 1.01x | 1 | 0s | 24d ago | 9m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.61% | 99.61% | 891 ms | ↓ 0.91x | 1 | 0s | 9d ago | 22m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1201 ms | ↓ 0.86x | 0 | — | — | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 776 ms | ↓ 0.83x | 0 | — | — | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.08% | 98.86% | 98.86% | 2953 ms | ↓ 0.85x | 2 | 8h 60m | 15d ago | 21m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.65% | 98.65% | 1554 ms | ↓ 0.89x | 0 | — | — | 7m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.66% | 98.30% | 98.30% | 797 ms | ↓ 0.83x | 1 | 1h 40m | 16d ago | 7m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.86% | 96.86% | 1110 ms | → 1.05x | 1 | 0s | 23d ago | 7m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.41% | 71.41% | 1256 ms | → 1.02x | 0 | — | — | 11m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1292 ms | ↓ 0.94x | 0 | — | — | 2m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1404 ms | ↓ 0.92x | 0 | — | — | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 81.99% | 81.99% | 2672 ms | ↓ 0.80x | 1 | 0s | 24d ago | 10m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1765 ms | ↓ 0.82x | 0 | — | — | 21m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 801 ms | ↓ 0.58x | 0 | — | — | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.73% | 93.05% | 93.05% | 1273 ms | ↓ 0.76x | 2 | 26m | 7d ago | 10m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 727 ms | ↓ 0.91x | 1 | 0s | 25d ago | 16m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.21% | 37.67% | 37.67% | 1923 ms | → 0.96x | 14 | 5h 29m | 16d ago | 11m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 79.93% | 30.40% | 30.40% | 2777 ms | ↑ 1.08x | 2 | 2d 15h | 25d ago | 6m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.34% | 99.34% | 2527 ms | → 0.97x | 0 | — | — | 11m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.75% | 98.93% | 98.93% | 2667 ms | ↓ 0.81x | 5 | 0s | 18d ago | 23m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 69.05% | 69.05% | 1318 ms | → 0.97x | 2 | 0s | 10d ago | 11m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.84% | 96.84% | 1048 ms | ↓ 0.73x | 0 | — | — | 11m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1366 ms | ↓ 0.93x | 0 | — | — | 3m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.87% | 23.83% | 23.83% | 3275 ms | → 1.05x | 2 | 0s | 11d ago | 18m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2467 ms | ↓ 0.92x | 0 | — | — | 22m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.72% | 97.73% | 97.73% | 688 ms | → 1.04x | 2 | 31m | 13d ago | 4m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1913 ms | → 0.96x | 1 | 0s | 22d ago | 4m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3966 ms | → 0.97x | 0 | — | — | 3m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.15% | 60.15% | 834 ms | ↑ 1.14x | 0 | — | — | 11m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.50% | 98.35% | 98.35% | 1683 ms | ↓ 0.91x | 2 | 3h 26m | 8d ago | 10m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.14% | 44.14% | 2987 ms | ↓ 0.89x | 0 | — | — | 10m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.46% | 99.46% | 99.46% | 2438 ms | ↓ 0.76x | 2 | 59m | 9d ago | 3m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1306 ms | → 1.00x | 0 | — | — | 2m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 3467 ms | ↓ 0.79x | 0 | — | — | 17m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 3092 ms | ↓ 0.91x | 0 | — | — | 22m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2170 ms | ↓ 0.87x | 0 | — | — | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.25% | 69.49% | 69.49% | 1408 ms | ↑ 1.06x | 9 | 7m | 8d ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.69% | 98.86% | 98.86% | 2169 ms | ↑ 1.13x | 11 | 17m | 7d ago | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.30% | 99.30% | 2193 ms | ↓ 0.87x | 0 | — | — | 10m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 99.17% | 98.85% | 98.85% | 2844 ms | ↑ 1.10x | 4 | 59m | 12d ago | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.80% | 80.80% | 1678 ms | ↑ 1.58x | 0 | — | — | 11m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 190 ms | ↓ 0.95x | 0 | — | — | 22m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.86% | 99.89% | 99.89% | 2183 ms | ↓ 0.85x | 2 | 0s | 9d ago | 2m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.26% | 69.70% | 69.70% | 4198 ms | → 1.02x | 8 | 9m | 11d ago | 18m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2493 ms | ↓ 0.87x | 0 | — | — | 21m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1111 ms | ↓ 0.64x | 0 | — | — | 3m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1730 ms | ↓ 0.92x | 1 | 0s | 16d ago | 18m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 3151 ms | ↓ 0.90x | 1 | 0s | 19d ago | 22m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.25% | 81.25% | 2477 ms | ↓ 0.84x | 0 | — | — | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.43% | 87.43% | 3069 ms | ↑ 1.49x | 0 | — | — | 10m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.65% | 99.80% | 99.80% | 1292 ms | ↓ 0.88x | 2 | 36m | 8d ago | 3m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.29% | 96.29% | 2119 ms | ↓ 0.82x | 1 | 0s | 14d ago | 12m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1853 ms | ↑ 1.26x | 0 | — | — | 20m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.71% | 98.71% | 808 ms | → 1.00x | 0 | — | — | 9m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.88% | 25.88% | 796 ms | ↓ 0.87x | 0 | — | — | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.78% | 97.78% | 563 ms | ↓ 0.57x | 1 | 0s | 22d ago | 6m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 787 ms | ↓ 0.89x | 0 | — | — | 9m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.25% | 63.25% | 2488 ms | → 0.97x | 1 | 0s | 14d ago | 11m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 42.83% | 42.83% | 539 ms | ↓ 0.58x | 0 | — | — | 21m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.66% | 93.51% | 93.51% | 48 ms | ↑ 1.40x | 1 | 1h 22m | 11d ago | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 98.09% | 96.75% | 96.75% | 4168 ms | ↓ 0.78x | 9 | 1h 1m | 8d ago | 12m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.39% | 22.39% | 1432 ms | ↓ 0.79x | 0 | — | — | 20m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 511 ms | ↓ 0.40x | 0 | — | — | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.59% | 99.59% | 2840 ms | ↑ 1.17x | 1 | 0s | 18d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2791 ms | ↓ 0.54x | 0 | — | — | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 504 ms | ↓ 0.83x | 0 | — | — | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.66% | 24.64% | 24.64% | 1626 ms | → 0.97x | 5 | 0s | 8d ago | 12m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.72% | 93.72% | 4724 ms | → 1.01x | 0 | — | — | 21m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.62% | 99.62% | 1487 ms | ↓ 0.84x | 0 | — | — | 21m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.86% | 99.97% | 99.97% | 2108 ms | ↓ 0.88x | 2 | 0s | 14d ago | 10m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.29% | 99.29% | 939 ms | → 1.00x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1523 ms | → 0.97x | 0 | — | — | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2570 ms | ↑ 1.10x | 0 | — | — | 22m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1296 ms | ↓ 0.79x | 0 | — | — | 20m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 55.97% | 88.92% | 88.92% | 1556 ms | ↓ 0.80x | 1 | 11d 16h | 30d ago | 20m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.91% | 98.91% | 2887 ms | ↓ 0.79x | 0 | — | — | 6m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.41% | 99.03% | 99.03% | 1051 ms | ↓ 0.68x | 4 | 1h 35m | 10d ago | 2m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.52% | 99.63% | 99.63% | 1090 ms | ↓ 0.79x | 4 | 15m | 16d ago | 2m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.31% | 99.39% | 99.39% | 4876 ms | ↑ 1.26x | 8 | 6m | 11d ago | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.37% | 89.37% | 2080 ms | ↓ 0.91x | 0 | — | — | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1165 ms | ↓ 0.93x | 0 | — | — | 6m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1768 ms | ↓ 0.91x | 0 | — | — | 4m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 98.46% | 98.46% | 98.46% | 1703 ms | ↓ 0.66x | 13 | 8m | 8d ago | 3m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1567 ms | ↓ 0.82x | 0 | — | — | 21m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1073 ms | ↓ 0.65x | 0 | — | — | 22m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1173 ms | ↓ 0.56x | 1 | 0s | 28d ago | 3m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 904 ms | ↓ 0.72x | 0 | — | — | 22m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.40% | 76.40% | 969 ms | ↓ 0.88x | 1 | 0s | 12d ago | 9m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 808 ms | ↓ 0.89x | 0 | — | — | 20m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.14% | 85.14% | 2477 ms | → 1.03x | 0 | — | — | 18m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.18% | 98.88% | 98.88% | 1674 ms | ↓ 0.88x | 5 | 36m | 13d ago | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.32% | 98.32% | 2129 ms | ↓ 0.83x | 0 | — | — | 7m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1879 ms | ↓ 0.75x | 1 | 0s | 21d ago | 2m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1488 ms | → 0.99x | 1 | 0s | 12d ago | 3m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.95% | 97.95% | 3861 ms | ↑ 1.13x | 1 | 0s | 28d ago | 5m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.57% | 95.59% | 95.59% | 1658 ms | → 0.97x | 4 | 6h 14m | 17d ago | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.87% | 98.87% | 1311 ms | ↑ 1.08x | 0 | — | — | 11m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.77% | 98.77% | 1846 ms | ↓ 0.91x | 0 | — | — | 20m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.66% | 99.66% | 2079 ms | ↓ 0.81x | 0 | — | — | 3m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.07% | 98.07% | 3830 ms | ↓ 0.92x | 2 | 10m | 10d ago | 8m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1058 ms | → 1.01x | 0 | — | — | 3m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.73% | 98.71% | 98.71% | 1209 ms | → 1.05x | 3 | 10m | 21d ago | 9m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.82% | 99.82% | 99.82% | 1133 ms | ↓ 0.77x | 2 | 0s | 16d ago | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.34% | 32.34% | 1095 ms | ↓ 0.86x | 0 | — | — | 20m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 96.98% | 86.79% | 86.79% | 4777 ms | → 0.98x | 33 | 9m | 7d ago | 9m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 1138 ms | ↓ 0.86x | 0 | — | — | 10m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.45% | 98.45% | 2018 ms | ↓ 0.88x | 1 | 0s | 16d ago | 10m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 55.36% | 56.59% | 56.59% | 1440 ms | ↓ 0.86x | 1 | 11d 10h | 30d ago | 2m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1783 ms | → 0.96x | 0 | — | — | 20m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.23% | 89.23% | 3598 ms | ↓ 0.82x | 0 | — | — | 10m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.89% | 16.38% | 16.38% | 2410 ms | ↓ 0.81x | 1 | 0s | 11d ago | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.70% | 96.70% | 2861 ms | ↓ 0.92x | 1 | 0s | 15d ago | 12m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.87% | 99.87% | 1923 ms | → 0.98x | 1 | 0s | 24d ago | 20m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.41% | 22.41% | 1838 ms | ↓ 0.92x | 0 | — | — | 21m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1655 ms | ↑ 1.28x | 0 | — | — | 4m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.41% | 97.41% | 2516 ms | ↓ 0.81x | 0 | — | — | 7m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.86% | 99.86% | 2228 ms | ↓ 0.94x | 0 | — | — | 20m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1103 ms | ↑ 1.31x | 1 | 20m | 24d ago | 21m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 23.93% | 23.93% | 3104 ms | ↓ 0.83x | 1 | 0s | 15d ago | 12m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.96% | 21.96% | 1878 ms | ↓ 0.81x | 0 | — | — | 12m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 4032 ms | ↓ 0.89x | 3 | 0s | 11d ago | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.58% | 99.74% | 99.74% | 2874 ms | ↑ 1.17x | 2 | 60m | 26d ago | 3m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2851 ms | → 1.03x | 0 | — | — | 9m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1607 ms | ↓ 0.78x | 0 | — | — | 21m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.41% | 99.62% | 99.62% | 2046 ms | ↓ 0.87x | 1 | 3h 60m | 17d ago | 20m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2056 ms | ↑ 1.35x | 0 | — | — | 20m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.76% | 98.76% | 1404 ms | ↓ 0.83x | 0 | — | — | 7m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.59% | 99.81% | 99.81% | 3207 ms | ↑ 1.58x | 4 | 15m | 9d ago | 12m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.16% | 99.16% | 1334 ms | ↓ 0.75x | 0 | — | — | 21m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 849 ms | ↓ 0.80x | 0 | — | — | 20m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1122 ms | ↑ 1.93x | 0 | — | — | 2m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.97% | 99.98% | 98.91% | 98.91% | 4132 ms | ↓ 0.92x | 1 | 0s | 20h ago | 24m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.93% | 99.95% | 99.98% | 99.98% | 422 ms | ↓ 0.92x | 1 | 4m | 20h ago | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.93% | 99.95% | 99.98% | 99.98% | 833 ms | ↓ 0.85x | 1 | 4m | 20h ago | 24m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.93% | 99.88% | 93.52% | 93.52% | 2033 ms | ↓ 0.83x | 2 | 27m | 20h ago | 24m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.90% | 99.86% | 93.36% | 93.36% | 3164 ms | ↓ 0.81x | 3 | 20m | 20h ago | 24m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.86% | 99.88% | 35.81% | 35.81% | 1894 ms | ↓ 0.92x | 3 | 2m | 20h ago | 24m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.84% | 99.95% | 98.88% | 98.88% | 1764 ms | ↓ 0.85x | 1 | 0s | 5d ago | 23m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.84% | 96.01% | 99.48% | 99.48% | 3070 ms | ↓ 0.71x | 3 | 9h 27m | 7d ago | 23m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.83% | 99.64% | 99.28% | 99.28% | 726 ms | ↓ 0.63x | 3 | 30m | 5d ago | 22m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.79% | 99.34% | 91.80% | 91.80% | 2561 ms | ↓ 0.80x | 26 | 11s | 20h ago | 24m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.77% | 98.65% | 99.74% | 99.74% | 1942 ms | ↓ 0.92x | 4 | 1h 38m | 5d ago | 22m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.54% | 99.55% | 86.10% | 86.10% | 2305 ms | → 0.99x | 8 | 0s | 15h ago | 22m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.52% | 98.77% | 99.58% | 99.58% | 2692 ms | ↓ 0.83x | 18 | 2m | 2d ago | 21m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.52% | 98.45% | 49.55% | 49.55% | 2953 ms | → 1.02x | 13 | 22m | 11h ago | 21m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.50% | 99.94% | 98.93% | 98.93% | 1121 ms | ↓ 0.87x | 1 | 0s | 2d ago | 20m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.50% | 99.28% | 98.76% | 98.76% | 4502 ms | → 0.97x | 29 | 3s | 20h ago | 24m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.36% | 99.87% | 99.87% | 99.87% | 2771 ms | ↓ 0.84x | 2 | 0s | 3d ago | 19m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.34% | 99.53% | 22.08% | 22.08% | 2780 ms | ↓ 0.74x | 6 | 5m | 5d ago | 17m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.34% | 98.92% | 98.92% | 98.92% | 2376 ms | → 0.98x | 12 | 9m | 21h ago | 18m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.34% | 99.87% | 99.80% | 99.80% | 1664 ms | ↓ 0.88x | 2 | 0s | 7h ago | 18m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.32% | 99.79% | 90.80% | 90.80% | 2179 ms | ↓ 0.90x | 3 | 0s | 3d ago | 10m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.32% | 99.52% | 90.94% | 90.94% | 925 ms | ↓ 0.90x | 7 | 0s | 6d ago | 10m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.32% | 99.32% | 96.11% | 96.11% | 3169 ms | ↓ 0.91x | 4 | 41m | 4d ago | 10m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.31% | 99.66% | 63.87% | 63.87% | 2755 ms | → 0.97x | 6 | 0s | 3d ago | 22m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.31% | 96.14% | 84.25% | 84.25% | 1502 ms | ↓ 0.90x | 3 | 7h 23m | 1d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.31% | 96.63% | 55.88% | 55.88% | 1035 ms | ↑ 1.78x | 9 | 1h 48m | 8d ago | 9m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.31% | 99.10% | 98.43% | 98.43% | 3768 ms | → 0.97x | 5 | 42m | 3d ago | 8m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.31% | 99.93% | 99.81% | 99.81% | 967 ms | → 1.01x | 1 | 0s | 6d ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.31% | 99.38% | 97.00% | 97.00% | 1609 ms | ↓ 0.78x | 4 | 35m | 3d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.30% | 99.72% | 98.09% | 98.09% | 621 ms | ↓ 0.76x | 4 | 0s | 3d ago | 6m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.29% | 98.13% | 97.20% | 97.20% | 2134 ms | → 1.02x | 11 | 42m | 1d ago | 4m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.29% | 99.24% | 99.24% | 99.24% | 307 ms | ↓ 0.71x | 10 | 2m | 4d ago | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.29% | 99.79% | 99.65% | 99.65% | 1416 ms | ↓ 0.65x | 3 | 0s | 3d ago | 3m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.29% | 98.62% | 98.63% | 98.63% | 2594 ms | ↓ 0.83x | 20 | 0s | 5d ago | 2m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.29% | 99.91% | 99.91% | 99.91% | 1729 ms | ↓ 0.68x | 1 | 0s | 4d ago | 2m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.11% | 99.11% | 99.11% | 99.11% | 648 ms | → 1.00x | 1 | 0s | 2d ago | 1m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.01% | 99.87% | 86.04% | 86.04% | 729 ms | ↓ 0.90x | 1 | 10s | 18h ago | 20m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (54)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.95% | 98.04% | 86.17% | 86.17% | 4407 ms | ↓ 0.91x | 28 | 2m | 3d ago | 20m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.95% | 99.67% | 99.01% | 99.01% | 4129 ms | → 0.97x | 5 | 0s | 5d ago | 20m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.95% | 99.67% | 99.17% | 99.17% | 4168 ms | ↓ 0.94x | 5 | 0s | 5d ago | 20m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.63% | 99.59% | 82.92% | 82.92% | 2104 ms | ↓ 0.78x | 5 | 41s | 19h ago | 10m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.63% | 99.73% | 97.56% | 97.56% | 2227 ms | → 0.98x | 4 | 0s | 2d ago | 12m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.63% | 98.36% | 86.71% | 86.71% | 4598 ms | ↓ 0.91x | 23 | 1m | 2d ago | 12m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.61% | 98.90% | 97.92% | 97.92% | 4063 ms | → 1.00x | 11 | 12m | 3d ago | 8m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.61% | 99.86% | 91.70% | 91.70% | 691 ms | ↑ 1.38x | 1 | 30m | 6d ago | 9m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 98.61% | 99.86% | 92.59% | 92.59% | 2156 ms | ↓ 0.93x | 2 | 0s | 17h ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.61% | 75.55% | 92.69% | 92.69% | 4597 ms | ↑ 1.30x | 7 | 20h 26m | 1d ago | 8m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.60% | 94.06% | 95.81% | 95.81% | 1361 ms | ↓ 0.71x | 12 | 2h 40m | 2d ago | 6m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.58% | 99.17% | 96.77% | 96.77% | 2418 ms | ↑ 1.11x | 11 | 1h 4m | 5d ago | 4m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.58% | 97.16% | 92.16% | 92.16% | 4445 ms | ↑ 1.14x | 19 | 27m | 15h ago | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 98.57% | 96.40% | 98.36% | 98.36% | 1812 ms | ↓ 0.92x | 2 | 10h 47m | 19h ago | 2m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.57% | 93.15% | 92.76% | 92.76% | 4677 ms | ↓ 0.90x | 27 | 1h 15m | 3d ago | 2m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 98.57% | 99.86% | 99.86% | 99.86% | 3327 ms | ↓ 0.82x | 2 | 0s | 3d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 98.57% | 99.82% | 99.82% | 99.82% | 345 ms | ↑ 1.10x | 1 | 4m | 23h ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 98.56% | 99.42% | 22.37% | 22.37% | 2144 ms | → 0.96x | 8 | 8m | 14h ago | 21m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.42% | 97.45% | 21.66% | 21.66% | 3115 ms | ↑ 1.19x | 38 | 31s | 3d ago | 20m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.03% | 99.80% | 97.92% | 97.92% | 2756 ms | ↓ 0.76x | 1 | 1h | 5d ago | 17m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.95% | 98.70% | 91.75% | 91.75% | 1861 ms | ↑ 1.10x | 18 | 2m | 15h ago | 10m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.92% | 99.52% | 92.04% | 92.04% | 3343 ms | → 1.05x | 7 | 0s | 5d ago | 9m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.86% | 97.02% | 97.02% | 97.02% | 4508 ms | ↓ 0.93x | 30 | 3m | 2d ago | 1m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.65% | 81.35% | 77.83% | 77.83% | 3962 ms | → 1.00x | 77 | 3h 48m | 20h ago | 24m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 97.51% | 99.61% | 99.64% | 99.64% | 1613 ms | ↓ 0.91x | 5 | 57m | 16h ago | 20m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.26% | 98.36% | 73.76% | 73.76% | 906 ms | ↓ 0.87x | 9 | 50m | 5d ago | 11m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.26% | 95.83% | 83.53% | 83.53% | 4850 ms | ↓ 0.92x | 55 | 3m | 14h ago | 10m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.22% | 96.22% | 84.68% | 84.68% | 4469 ms | → 0.97x | 48 | 4m | 3d ago | 9m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.16% | 99.38% | 98.69% | 98.69% | 1081 ms | ↑ 1.11x | 8 | 17s | 8h ago | 4m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.71% | 96.22% | 98.46% | 98.46% | 3869 ms | ↓ 0.86x | 54 | 1m | 3d ago | 17m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.12% | 98.93% | 48.72% | 48.72% | 1574 ms | ↑ 1.12x | 7 | 30m | 5d ago | 22m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.89% | 93.16% | 73.68% | 73.68% | 1586 ms | ↓ 0.81x | 20 | 1h 25m | 6d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 95.74% | 83.26% | 83.00% | 83.00% | 1562 ms | → 0.99x | 7 | 14h 42m | 1h ago | 4m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 95.14% | 17.77% | 45.11% | 45.11% | 2336 ms | ↓ 0.66x | 4 | 5d 13h | 3d ago | 8m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 95.14% | 97.32% | 53.97% | 53.97% | 3796 ms | ↑ 1.08x | 37 | 1m | 2d ago | 8m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 94.84% | 97.25% | 96.55% | 96.55% | 1913 ms | → 1.02x | 8 | 1h 41m | 6d ago | 18m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 94.29% | 99.38% | 99.38% | 99.38% | 1105 ms | ↓ 0.77x | 3 | 2h | 2d ago | 2m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 94.29% | 97.30% | 98.48% | 98.48% | 2346 ms | ↑ 1.13x | 6 | 2h 13m | 6d ago | 4m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 92.86% | 98.80% | 98.80% | 98.80% | 853 ms | ↓ 0.66x | 2 | 2h 30m | 23h ago | 2m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 90.71% | 72.87% | 36.18% | 36.18% | 3170 ms | ↓ 0.65x | 160 | 39m | 2d ago | 2m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.41% | 87.37% | 22.62% | 22.62% | 4156 ms | ↓ 0.88x | 139 | 12m | 1h ago | 12m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 88.89% | 83.82% | 82.62% | 82.62% | 1257 ms | ↓ 0.48x | 22 | 5h 17m | 3d ago | 7m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 88.65% | 94.95% | 96.91% | 96.91% | 1399 ms | ↓ 0.62x | 3 | 17h 47m | 8d ago | 4m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 83.87% | 93.76% | 20.22% | 20.22% | 3462 ms | ↑ 1.13x | 83 | 4m | 1h ago | 18m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 82.88% | 72.66% | 26.75% | 26.75% | 4357 ms | ↓ 0.80x | 239 | 20m | 12h ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.80% | 73.56% | 62.94% | 62.94% | 4760 ms | ↓ 0.89x | 267 | 15m | 2h ago | 19m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 80.56% | 98.07% | 86.73% | 86.73% | 2088 ms | ↓ 0.81x | 24 | 7m | 11m ago | 7m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.00% | 73.15% | 81.22% | 81.22% | 4052 ms | ↓ 0.81x | 171 | 34m | 1h ago | 2m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 77.83% | 67.10% | 96.35% | 96.35% | 4578 ms | → 0.97x | 286 | 22m | 1h ago | 21m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 70.14% | 6.95% | 24.76% | 24.76% | 2733 ms | → 1.00x | 1 | 25d 6h | 30d ago | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 68.75% | 95.80% | 96.54% | 96.54% | 2558 ms | ↓ 0.77x | 1 | 2d 16h | 3d ago | 21m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 51.58% | 6.41% | 39.45% | 39.45% | 1071 ms | → 1.00x | 1 | 26d 21h | 30d ago | 20m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 28.17% | 76.36% | 94.07% | 94.07% | 3055 ms | ↓ 0.91x | 10 | 8h 57m | 5d ago | 23m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 15.72% | 58.88% | 95.64% | 95.64% | 2652 ms | ↓ 0.93x | 2 | 4d 7h | 12d ago | 23m ago |

</details>

<details open>
<summary><strong>🔴 Down (265)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.67% | 88.71% | 60.03% | 60.03% | 3865 ms | ↓ 0.89x | 135 | 6m | 7m ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 78.08% | 97.68% | 22.95% | 22.95% | 556 ms | ↓ 0.65x | 4 | 3h 37m | 14h ago | 11m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 73.61% | 97.31% | 68.02% | 68.02% | 3004 ms | ↑ 1.58x | 8 | 1h 59m | 1h ago | 6m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 67.36% | 88.70% | 85.92% | 85.92% | 1696 ms | ↓ 0.81x | 8 | 9h 7m | 23h ago | 6m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 55.48% | 92.55% | 74.91% | 74.91% | 2771 ms | ↓ 0.38x | 40 | 1h 5m | 2d ago | 18m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 38.82% | 93.19% | 20.00% | 20.00% | 2565 ms | ↓ 0.77x | 6 | 11h 33m | 3d ago | 16m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 37.58% | 93.37% | 99.07% | 99.07% | 1715 ms | ↓ 0.94x | 2 | 1d 12h | 3d ago | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 34.75% | 53.60% | 77.48% | 77.48% | 4991 ms | ↑ 1.48x | 186 | 1h 21m | 2h ago | 5m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 33.33% | 26.72% | 64.54% | 64.54% | 2048 ms | ↑ 1.06x | 3 | 6d 16h | 3d ago | 8m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 31.51% | 40.23% | 32.28% | 32.28% | 1280 ms | → 1.02x | 4 | 4d 10h | 4d ago | 10m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 29.45% | 66.83% | 32.81% | 32.81% | 2378 ms | ↑ 1.20x | 3 | 3d 21h | 5d ago | 12m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 19.18% | 1.91% | 78.28% | 78.28% | 1480 ms | → 1.00x | 25 | 1d 4h | 12m ago | 12m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.52% | 2.29% | 50.44% | 50.44% | 3932 ms | ↓ 0.86x | 92 | 7h 21m | 24m ago | 24m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.64% | 15.39% | 49.36% | 49.36% | 2175 ms | ↑ 1.09x | 6 | 4d 7h | 6d ago | 19m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.94% | 76.94% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.90% | 63.90% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.77% | 68.77% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 38.00% | 38.00% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 72.12% | 72.12% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 53.62% | 53.62% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.25% | 5.25% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.32% | 10.32% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 86.38% | 93.67% | 93.67% | — | — | 1 | 7d 24h | 8d ago | 4m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 48.68% | 48.68% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 47.75% | 78.00% | 78.00% | — | — | 15 | 1d 4h | 18d ago | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.16% | 3.16% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 22.67% | 82.26% | 82.26% | — | — | 1 | 24d 2h | 24d ago | 6m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.36% | 77.36% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.96% | 33.96% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 84.54% | 93.74% | 93.74% | — | — | 2 | 4d 4h | 8d ago | 6m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.43% | 84.43% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.40% | 21.40% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.84% | 67.84% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.34% | 45.34% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.38% | 27.38% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 1.42% | 85.45% | 85.45% | — | — | 1 | 29d 12h | 30d ago | 21m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.96% | 75.96% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.42% | 58.42% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.63% | 71.63% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 23m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.38% | 13.38% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.13% | 45.13% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.21% | 88.21% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.79% | 30.79% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 35.09% | 72.53% | 72.53% | — | — | 1 | 20d 22h | 21d ago | 3m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 35.96% | 35.35% | 35.35% | — | — | 3 | 6d 21h | 21d ago | 5m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 1.31% | 80.62% | 80.62% | — | — | 1 | 29d 14h | 30d ago | 8m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.16% | 3.16% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 55.78% | 80.46% | 80.46% | — | — | 6 | 2d 14h | 15d ago | 3m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 42.84% | 76.35% | 76.35% | — | — | 1 | 19d | 19d ago | 2m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.00% | 78.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 25.89% | 25.89% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.91% | 1.91% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.23% | 85.23% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 19.10% | 35.73% | 35.73% | — | — | 1 | 25d | 25d ago | 2m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 66.42% | 66.42% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 54.71% | 46.92% | 46.92% | — | — | 2 | 8d 1h | 12d ago | 11m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 67.82% | 67.82% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 35.96% | 73.05% | 73.05% | — | — | 3 | 6d 21h | 21d ago | 5m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 57.65% | 41.55% | 41.55% | — | — | 5 | 3d 2h | 13d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 57.14% | 65.32% | 65.32% | — | — | 6 | 2d 13h | 13d ago | 10m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.98% | 26.98% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.91% | 50.91% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 45.27% | 45.27% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.36% | 22.36% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.98% | 68.98% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 39.02% | 39.02% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 2m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 50.78% | 50.78% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 47.12% | 47.12% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.70% | 21.70% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.72% | 4.72% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.24% | 61.24% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.93% | 75.93% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 18.88% | 70.93% | 70.93% | — | — | 1 | 25d 1h | 25d ago | 6m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.67% | 5.67% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.21% | 74.21% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.86% | 74.86% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.98% | 28.98% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 4.85% | 85.48% | 85.48% | — | — | 1 | 28d 15h | 29d ago | 10m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.75% | 20.75% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.27% | 49.27% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 57.44% | 84.71% | 84.71% | — | — | 1 | 14d 15h | 15d ago | 21m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 19.55% | 19.55% | 19.55% | — | — | 2 | 10d 1h | 20d ago | 3m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 35.89% | 71.47% | 71.47% | — | — | 4 | 5d 4h | 21d ago | 5m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 59.86% | 82.79% | 82.79% | — | — | 3 | 4d 22h | 15d ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 35.41% | 77.82% | 77.82% | — | — | 12 | 1d 17h | 21d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.73% | 48.73% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 15.73% | 16.47% | 16.47% | — | — | 8 | 2d 14h | 21d ago | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.37% | 6.37% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 57.16% | 57.16% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.60% | 43.60% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 18.40% | 18.61% | 18.61% | — | — | 2 | 12d 14h | 25d ago | 4m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.53% | 39.53% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 29.91% | 74.99% | 74.99% | — | — | 3 | 6d 13h | 20d ago | 23m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 21.69% | 21.69% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 69.16% | 69.16% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.89% | 54.89% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 52.46% | 79.96% | 79.96% | — | — | 1 | 16d 14h | 17d ago | 4m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.88% | 35.88% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 67.35% | 67.35% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 72.08% | 72.08% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 64.43% | 64.43% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.37% | 2.37% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.71% | 77.71% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.00% | 39.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.37% | 91.37% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.69% | 77.69% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.52% | 30.52% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.80% | 75.80% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 44.10% | 44.10% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 18.04% | 18.04% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.53% | 40.53% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.61% | 66.61% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.16% | 59.16% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.76% | 24.76% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.00% | 74.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 44.48% | 44.48% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.91% | 2.91% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.94% | 39.94% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.55% | 71.55% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.30% | 55.30% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 23.03% | 23.29% | 23.29% | — | — | 1 | 23d 24h | 24d ago | 4m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 34.93% | 34.93% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 54.32% | 54.32% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.23% | 83.23% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 26.08% | 93.48% | 93.48% | — | — | 2 | 10d 22h | 22d ago | 22m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.44% | 23.44% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.93% | 10.93% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 21.02% | 25.78% | 25.78% | — | — | 3 | 8d 5h | 8d ago | 6m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.54% | 22.54% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.56% | 49.56% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 87.10% | 87.10% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 49.48% | 49.48% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 66.80% | 66.80% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 77.92% | 94.44% | 94.44% | — | — | 2 | 5d | 10d ago | 9m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.08% | 8.08% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.38% | 16.38% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 7.47% | 47.01% | 47.01% | — | — | 1 | 27d 23h | 28d ago | 9m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 17.71% | 17.71% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.73% | 51.73% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.11% | 89.11% | — | — | 1 | 23d 21h | 24d ago | 16m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.03% | 36.03% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.94% | 19.94% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 29.63% | 29.63% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.21% | 5.21% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 73.59% | 73.59% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.47% | 84.47% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 49.25% | 49.25% | — | — | 1 | 29d 24h | 30d ago | 2m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.60% | 77.60% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.59% | 76.59% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.89% | 52.89% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.36% | 69.36% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.43% | 76.43% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 22h | 24d ago | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.28% | 18.28% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.78% | 54.78% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.43% | 36.43% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.82% | 3.82% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.89% | 31.89% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.15% | 64.15% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.81% | 6.81% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.50% | 54.50% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 23.86% | 23.86% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.22% | 63.22% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 32.20% | 32.20% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 35.96% | 72.59% | 72.59% | — | — | 3 | 6d 21h | 21d ago | 5m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.00% | 4.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 23d 20h | 24d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 46.02% | 46.02% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 39.69% | 39.69% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 30.85% | 30.85% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.85% | 17.85% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.13% | 5.13% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.40% | 10.40% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.85% | 16.85% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.17% | 15.17% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 26.60% | 26.60% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.12% | 9.12% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.83% | 6.83% | — | — | 1 | 29d 24h | 30d ago | 3m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.72% | 0.72% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.09% | 4.09% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.74% | 4.74% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 83.11% | 84.67% | 84.67% | — | — | 2 | 4d 9h | 9d ago | 2m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 37.86% | 37.86% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.62% | 77.62% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 65.10% | 65.10% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.13% | 41.13% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.95% | 77.95% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 45.11% | 45.11% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.73% | 38.73% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.43% | 1.43% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.85% | 17.85% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.85% | 75.85% | — | — | 1 | 29d 24h | 30d ago | 15m ago |

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
