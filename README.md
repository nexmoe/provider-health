# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 354 🟢 operational · 52 🟡 degraded · 269 🔴 down · 0 ⚫ unknown

_Updated 2026-07-05 06:44 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (354)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.42% | 98.42% | 922 ms | ↑ 1.14x | 0 | — | — | 26m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.93% | 94.19% | 94.19% | 687 ms | ↓ 0.48x | 1 | 0s | 29d ago | 31m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.79% | 23.90% | 23.90% | 2919 ms | ↓ 0.95x | 3 | 0s | 25d ago | 33m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.55% | 97.55% | 3214 ms | ↓ 0.85x | 0 | — | — | 42m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 59.27% | 59.27% | 1804 ms | ↑ 1.06x | 0 | — | — | 30m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.37% | 99.58% | 99.58% | 819 ms | ↓ 0.86x | 4 | 35m | 13d ago | 22m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.72% | 98.72% | 1092 ms | ↓ 0.94x | 2 | 0s | 15d ago | 31m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.60% | 99.60% | 2943 ms | ↓ 0.80x | 0 | — | — | 44m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.76% | 95.76% | 2250 ms | ↓ 0.80x | 0 | — | — | 27m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2358 ms | ↑ 1.13x | 0 | — | — | 24m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.97% | 97.97% | 2820 ms | ↓ 0.77x | 0 | — | — | 27m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2233 ms | ↑ 1.06x | 1 | 0s | 16d ago | 24m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1191 ms | ↑ 1.09x | 0 | — | — | 21m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1274 ms | ↓ 0.77x | 0 | — | — | 28m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.02% | 96.94% | 96.94% | 1260 ms | ↓ 0.69x | 4 | 4h 2m | 12d ago | 27m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.05% | 99.05% | 481 ms | ↓ 0.42x | 0 | — | — | 24m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.74% | 39.74% | 692 ms | ↓ 0.73x | 0 | — | — | 38m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1562 ms | ↓ 0.94x | 0 | — | — | 21m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.72% | 99.86% | 99.86% | 1558 ms | ↓ 0.86x | 3 | 7m | 9d ago | 27m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.17% | 97.17% | 2592 ms | ↓ 0.90x | 0 | — | — | 31m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.92% | 98.92% | 1205 ms | → 1.03x | 1 | 30m | 26d ago | 40m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 907 ms | ↓ 0.77x | 0 | — | — | 23m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 96.98% | 96.98% | 764 ms | ↓ 0.84x | 2 | 0s | 16d ago | 29m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.58% | 88.58% | 1694 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1550 ms | ↓ 0.88x | 1 | 0s | 14d ago | 24m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.51% | 99.72% | 99.72% | 1549 ms | ↓ 0.65x | 3 | 39m | 10d ago | 24m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.53% | 98.53% | 3621 ms | ↓ 0.80x | 0 | — | — | 29m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 80.06% | 80.06% | 2290 ms | → 0.97x | 3 | 0s | 12d ago | 38m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.66% | 99.66% | 1438 ms | ↓ 0.91x | 3 | 19m | 20d ago | 25m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 915 ms | ↓ 0.77x | 1 | 0s | 22d ago | 23m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.87% | 97.87% | 1498 ms | → 1.02x | 0 | — | — | 30m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 399 ms | ↓ 0.76x | 1 | 0s | 13d ago | 39m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.75% | 99.75% | 3166 ms | → 1.01x | 1 | 0s | 13d ago | 39m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.09% | 99.09% | 588 ms | ↓ 0.88x | 1 | 0s | 13d ago | 29m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.97% | 97.97% | 3623 ms | ↓ 0.86x | 0 | — | — | 42m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.90% | 99.64% | 99.64% | 2195 ms | → 0.97x | 2 | 3h 20m | 16d ago | 29m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.64% | 96.64% | 745 ms | ↓ 0.82x | 0 | — | — | 29m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1145 ms | ↓ 0.85x | 0 | — | — | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 612 ms | ↓ 0.34x | 0 | — | — | 23m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.81% | 99.81% | 99.81% | 1587 ms | ↓ 0.94x | 2 | 0s | 20d ago | 21m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.86% | 99.07% | 99.07% | 2680 ms | ↓ 0.84x | 2 | 0s | 17d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.86% | 99.87% | 99.87% | 1309 ms | ↓ 0.79x | 2 | 0s | 26d ago | 27m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.87% | 99.87% | 771 ms | ↓ 0.89x | 0 | — | — | 22m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.22% | 91.43% | 91.43% | 1041 ms | ↓ 0.49x | 22 | 1h 48m | 9d ago | 22m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3146 ms | ↓ 0.81x | 0 | — | — | 38m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.74% | 99.74% | 879 ms | → 0.98x | 0 | — | — | 27m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1366 ms | ↑ 1.08x | 0 | — | — | 21m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.71% | 96.71% | 1871 ms | ↓ 0.76x | 1 | 0s | 14d ago | 27m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 100.00% | 98.31% | 21.77% | 21.77% | 3430 ms | ↓ 0.83x | 25 | 0s | 10d ago | 38m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 100.00% | 89.93% | 93.47% | 93.47% | 955 ms | ↓ 0.53x | 80 | 19m | 9d ago | 24m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.07% | 98.07% | 4305 ms | ↑ 1.28x | 0 | — | — | 29m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.84% | 99.84% | 99.84% | 1797 ms | ↓ 0.88x | 1 | 30m | 22d ago | 21m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1019 ms | ↓ 0.73x | 0 | — | — | 24m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 603 ms | → 1.03x | 0 | — | — | 24m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.79% | 99.83% | 99.83% | 652 ms | ↓ 0.93x | 3 | 0s | 24d ago | 24m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.95% | 96.95% | 515 ms | ↓ 0.69x | 0 | — | — | 31m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 948 ms | ↓ 0.78x | 0 | — | — | 21m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.68% | 56.68% | 1328 ms | ↓ 0.65x | 0 | — | — | 33m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.54% | 98.60% | 98.60% | 693 ms | ↓ 0.94x | 2 | 4h 33m | 24d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1280 ms | ↓ 0.75x | 0 | — | — | 23m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 3775 ms | ↓ 0.92x | 0 | — | — | 38m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.58% | 87.37% | 87.37% | 864 ms | ↓ 0.58x | 5 | 6m | 9d ago | 23m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.26% | 97.26% | 1449 ms | → 1.03x | 0 | — | — | 38m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.79% | 99.03% | 99.03% | 2071 ms | ↑ 1.67x | 2 | 10m | 8d ago | 22m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.17% | 99.17% | 951 ms | ↓ 0.75x | 1 | 0s | 22d ago | 31m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.98% | 49.88% | 49.88% | 2172 ms | ↓ 0.83x | 8 | 1h 3m | 12d ago | 39m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.41% | 84.41% | 2649 ms | ↓ 0.77x | 0 | — | — | 31m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.79% | 68.19% | 68.19% | 1295 ms | ↓ 0.95x | 2 | 10m | 15d ago | 31m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 943 ms | ↑ 1.29x | 0 | — | — | 24m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.83% | 98.83% | 2530 ms | ↓ 0.87x | 0 | — | — | 29m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3691 ms | ↓ 0.80x | 0 | — | — | 23m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.21% | 93.21% | 654 ms | ↓ 0.76x | 0 | — | — | 32m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.81% | 98.81% | 1122 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.85% | 99.85% | 651 ms | ↑ 1.24x | 0 | — | — | 29m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.49% | 99.49% | 712 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.91% | 99.91% | 99.91% | 1392 ms | ↓ 0.65x | 1 | 0s | 11d ago | 22m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.13% | 98.13% | 3229 ms | ↑ 1.44x | 1 | 0s | 25d ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.59% | 90.59% | 1075 ms | → 0.98x | 1 | 0s | 28d ago | 27m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 49.77% | 49.77% | 1444 ms | ↓ 0.65x | 2 | 0s | 15d ago | 33m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1729 ms | ↓ 0.66x | 0 | — | — | 23m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.74% | 77.74% | 1095 ms | ↓ 0.71x | 0 | — | — | 31m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.65% | 96.74% | 96.74% | 1206 ms | ↓ 0.85x | 1 | 2h 1m | 17d ago | 22m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.46% | 56.67% | 56.67% | 1547 ms | ↓ 0.91x | 8 | 0s | 11d ago | 39m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 973 ms | ↓ 0.89x | 0 | — | — | 23m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.35% | 68.66% | 68.66% | 4566 ms | ↓ 0.86x | 20 | 6m | 9d ago | 31m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.35% | 98.35% | 2513 ms | ↓ 0.94x | 0 | — | — | 30m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.38% | 54.37% | 54.37% | 928 ms | ↓ 0.75x | 5 | 24m | 15d ago | 33m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 871 ms | ↓ 0.94x | 0 | — | — | 21m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2007 ms | ↓ 0.63x | 0 | — | — | 23m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1011 ms | → 1.00x | 0 | — | — | 21m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.79% | 99.84% | 99.84% | 1653 ms | ↓ 0.79x | 3 | 0s | 17d ago | 21m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.86% | 83.29% | 83.29% | 1844 ms | ↓ 0.81x | 2 | 0s | 26d ago | 31m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.56% | 64.56% | 568 ms | ↓ 0.79x | 2 | 0s | 15d ago | 31m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.10% | 98.10% | 2775 ms | ↑ 1.42x | 0 | — | — | 33m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1780 ms | ↓ 0.85x | 0 | — | — | 24m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.78% | 99.33% | 99.33% | 2822 ms | ↓ 0.78x | 5 | 5h 45m | 20d ago | 38m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.32% | 62.32% | 1576 ms | → 0.99x | 0 | — | — | 32m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.27% | 65.27% | 1236 ms | ↓ 0.73x | 0 | — | — | 32m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.72% | 99.88% | 99.88% | 1681 ms | → 0.98x | 1 | 1h 9m | 19d ago | 25m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.26% | 99.26% | 1700 ms | ↓ 0.84x | 0 | — | — | 31m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1808 ms | ↑ 1.08x | 0 | — | — | 29m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.61% | 99.61% | 546 ms | ↓ 0.79x | 0 | — | — | 31m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.74% | 97.98% | 97.98% | 1091 ms | ↓ 0.57x | 1 | 12h 2m | 20d ago | 31m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.91% | 90.83% | 90.83% | 2462 ms | ↓ 0.84x | 2 | 1d 13h | 23d ago | 21m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.93% | 22.40% | 22.40% | 649 ms | ↓ 0.49x | 1 | 0s | 12d ago | 39m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.75% | 99.75% | 1818 ms | ↓ 0.76x | 0 | — | — | 42m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2200 ms | ↓ 0.82x | 0 | — | — | 22m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 3244 ms | ↓ 0.85x | 0 | — | — | 42m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 96.00% | 99.48% | 99.48% | 3138 ms | ↓ 0.73x | 3 | 9h 27m | 8d ago | 44m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.27% | 98.27% | 2999 ms | ↓ 0.80x | 0 | — | — | 44m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 783 ms | ↓ 0.91x | 1 | 0s | 13d ago | 39m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.24% | 77.24% | 2237 ms | ↓ 0.90x | 0 | — | — | 30m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.91% | 99.91% | 99.91% | 1136 ms | → 1.02x | 1 | 0s | 10d ago | 24m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2676 ms | ↑ 1.26x | 0 | — | — | 21m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.37% | 98.34% | 98.34% | 1192 ms | ↓ 0.76x | 7 | 8m | 21d ago | 22m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.31% | 99.69% | 99.69% | 1662 ms | → 0.95x | 1 | 2h 60m | 27d ago | 25m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1620 ms | ↓ 0.91x | 0 | — | — | 44m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 626 ms | ↓ 0.62x | 0 | — | — | 43m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.93% | 99.64% | 99.64% | 2102 ms | ↓ 0.80x | 1 | 0s | 26d ago | 42m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.20% | 90.20% | 1154 ms | ↓ 0.83x | 0 | — | — | 31m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 795 ms | → 1.00x | 0 | — | — | 21m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.65% | 80.79% | 80.79% | 1955 ms | ↓ 0.95x | 3 | 20m | 10d ago | 29m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1070 ms | ↑ 1.09x | 0 | — | — | 43m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 788 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.86% | 99.94% | 99.94% | 1344 ms | ↓ 0.71x | 2 | 0s | 20d ago | 23m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.53% | 86.53% | 2500 ms | ↓ 0.89x | 0 | — | — | 27m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1580 ms | ↓ 0.66x | 0 | — | — | 23m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1938 ms | ↓ 0.88x | 0 | — | — | 27m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.08% | 99.08% | 680 ms | ↓ 0.65x | 0 | — | — | 33m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.74% | 97.74% | 2019 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1633 ms | ↓ 0.91x | 1 | 0s | 29d ago | 21m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1463 ms | → 0.99x | 1 | 0s | 21d ago | 24m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 1501 ms | ↓ 0.68x | 1 | 0s | 26d ago | 23m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1568 ms | ↓ 0.79x | 0 | — | — | 23m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.94% | 98.94% | 592 ms | ↑ 1.62x | 1 | 29m | 13d ago | 29m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.86% | 99.22% | 99.22% | 1502 ms | ↓ 0.94x | 2 | 0s | 10d ago | 25m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.02% | 99.02% | 2658 ms | ↓ 0.94x | 0 | — | — | 33m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.29% | 91.29% | 665 ms | ↓ 0.84x | 0 | — | — | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.86% | 98.00% | 98.00% | 517 ms | ↓ 0.78x | 2 | 0s | 11d ago | 23m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.84% | 99.84% | 916 ms | ↑ 1.18x | 0 | — | — | 22m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 1232 ms | ↓ 0.66x | 0 | — | — | 22m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.28% | 26.28% | 1758 ms | ↓ 0.67x | 0 | — | — | 33m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2498 ms | ↓ 0.90x | 0 | — | — | 43m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.38% | 98.79% | 98.79% | 2284 ms | ↓ 0.92x | 4 | 38m | 11d ago | 29m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 800 ms | ↑ 1.15x | 0 | — | — | 42m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.38% | 98.38% | 1198 ms | ↓ 0.74x | 1 | 0s | 17d ago | 26m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.74% | 99.74% | 2583 ms | ↓ 0.84x | 2 | 0s | 12d ago | 42m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.22% | 98.22% | 1059 ms | → 0.99x | 0 | — | — | 31m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 22.26% | 22.26% | 600 ms | ↓ 0.48x | 2 | 0s | 15d ago | 33m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 417 ms | ↓ 0.62x | 0 | — | — | 43m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.73% | 99.76% | 99.76% | 1582 ms | ↓ 0.86x | 3 | 10m | 29d ago | 37m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2739 ms | ↑ 1.38x | 0 | — | — | 42m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2335 ms | → 0.99x | 1 | 21m | 11d ago | 24m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 55.94% | 34.02% | 34.02% | 1848 ms | ↓ 0.91x | 2 | 5d 14h | 15d ago | 31m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 94.59% | 97.98% | 97.98% | 1735 ms | ↓ 0.81x | 39 | 28m | 25d ago | 42m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2225 ms | ↓ 0.88x | 0 | — | — | 38m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.37% | 99.37% | 2043 ms | ↓ 0.89x | 1 | 0s | 26d ago | 33m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.21% | 45.21% | 614 ms | ↓ 0.81x | 1 | 0s | 25d ago | 43m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.64% | 98.64% | 1953 ms | ↓ 0.62x | 1 | 0s | 13d ago | 29m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 98.89% | 92.89% | 92.89% | 710 ms | ↓ 0.86x | 11 | 13m | 9d ago | 27m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1054 ms | ↓ 0.86x | 0 | — | — | 42m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2603 ms | ↓ 0.89x | 0 | — | — | 38m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.03% | 99.72% | 99.72% | 359 ms | ↑ 1.71x | 10 | 10m | 12d ago | 42m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.93% | 99.83% | 99.83% | 1347 ms | ↓ 0.95x | 1 | 0s | 29d ago | 30m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 21.77% | 21.77% | 786 ms | ↓ 0.89x | 1 | 0s | 22d ago | 42m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2184 ms | ↓ 0.85x | 0 | — | — | 31m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.72% | 99.72% | 666 ms | ↓ 0.57x | 0 | — | — | 26m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 535 ms | → 1.02x | 0 | — | — | 22m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.58% | 99.60% | 99.60% | 911 ms | ↓ 0.84x | 3 | 30m | 12d ago | 24m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 622 ms | ↓ 0.92x | 0 | — | — | 43m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.84% | 62.84% | 1247 ms | ↓ 0.90x | 0 | — | — | 32m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.79% | 24.38% | 24.38% | 649 ms | ↓ 0.52x | 3 | 0s | 9d ago | 33m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 70.67% | 87.84% | 87.84% | 607 ms | ↓ 0.62x | 4 | 1d 21h | 18d ago | 22m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2655 ms | → 0.95x | 0 | — | — | 42m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.10% | 98.87% | 98.87% | 1982 ms | ↑ 1.15x | 1 | 5h 50m | 21d ago | 25m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.17% | 99.17% | 99.17% | 2218 ms | ↓ 0.82x | 1 | 2h 37m | 15d ago | 22m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.11% | 65.45% | 65.45% | 1128 ms | ↓ 0.74x | 3 | 1h 32m | 15d ago | 33m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.93% | 89.66% | 89.66% | 1501 ms | ↓ 0.85x | 1 | 0s | 22d ago | 42m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 24.02% | 24.02% | 1422 ms | ↓ 0.85x | 3 | 40m | 19d ago | 33m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.45% | 98.99% | 98.99% | 2829 ms | ↑ 1.26x | 4 | 30m | 19d ago | 31m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.50% | 89.50% | 877 ms | ↓ 0.71x | 2 | 0s | 21d ago | 24m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.93% | 99.90% | 99.90% | 971 ms | ↓ 0.66x | 1 | 0s | 25d ago | 42m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1023 ms | ↓ 0.91x | 0 | — | — | 43m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 48.67% | 48.67% | 654 ms | → 1.03x | 1 | 0s | 25d ago | 30m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.62% | 99.62% | 874 ms | ↓ 0.90x | 1 | 0s | 10d ago | 43m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1196 ms | ↓ 0.82x | 0 | — | — | 23m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.95% | 99.95% | 775 ms | ↓ 0.79x | 0 | — | — | 27m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.07% | 98.87% | 98.87% | 2940 ms | ↓ 0.82x | 2 | 8h 60m | 16d ago | 42m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.66% | 98.66% | 1525 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.65% | 98.31% | 98.31% | 820 ms | ↓ 0.94x | 1 | 1h 40m | 17d ago | 27m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.88% | 96.88% | 1099 ms | ↑ 1.06x | 1 | 0s | 24d ago | 27m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.51% | 71.51% | 1206 ms | → 0.97x | 0 | — | — | 31m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1258 ms | ↓ 0.89x | 0 | — | — | 22m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1266 ms | ↓ 0.92x | 0 | — | — | 21m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 82.06% | 82.06% | 2482 ms | ↓ 0.74x | 1 | 0s | 25d ago | 31m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1749 ms | ↓ 0.78x | 0 | — | — | 42m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 915 ms | ↓ 0.70x | 0 | — | — | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 677 ms | ↓ 0.87x | 1 | 0s | 26d ago | 37m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.21% | 37.84% | 37.84% | 1920 ms | ↓ 0.94x | 13 | 5h 54m | 17d ago | 32m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 83.59% | 31.05% | 31.05% | 2771 ms | ↑ 1.07x | 2 | 2d 3h | 26d ago | 27m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 96.69% | 56.13% | 56.13% | 1103 ms | ↑ 1.82x | 8 | 2h 1m | 9d ago | 29m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.34% | 99.34% | 2409 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.75% | 98.93% | 98.93% | 2662 ms | ↓ 0.82x | 5 | 0s | 19d ago | 44m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 69.14% | 69.14% | 1288 ms | ↓ 0.94x | 2 | 0s | 11d ago | 31m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.85% | 96.85% | 1021 ms | ↓ 0.74x | 0 | — | — | 31m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1403 ms | ↓ 0.91x | 0 | — | — | 23m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.93% | 24.01% | 24.01% | 2956 ms | → 0.99x | 1 | 0s | 12d ago | 38m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2426 ms | ↓ 0.91x | 0 | — | — | 43m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.72% | 97.76% | 97.76% | 700 ms | ↑ 1.10x | 2 | 31m | 14d ago | 24m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.93% | 99.93% | 1832 ms | ↓ 0.91x | 1 | 0s | 23d ago | 25m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3883 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.26% | 60.26% | 1094 ms | ↑ 1.23x | 0 | — | — | 32m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.49% | 98.36% | 98.36% | 1655 ms | ↓ 0.90x | 2 | 3h 26m | 9d ago | 31m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.36% | 44.36% | 2980 ms | ↓ 0.86x | 0 | — | — | 31m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.48% | 99.48% | 99.48% | 2386 ms | ↓ 0.72x | 2 | 59m | 10d ago | 23m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1267 ms | → 1.00x | 0 | — | — | 21m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.26% | 99.26% | 3324 ms | ↓ 0.78x | 0 | — | — | 38m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 3036 ms | ↓ 0.90x | 0 | — | — | 43m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2104 ms | ↓ 0.83x | 0 | — | — | 31m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.25% | 69.59% | 69.59% | 1403 ms | ↑ 1.07x | 9 | 7m | 9d ago | 31m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.75% | 98.88% | 98.88% | 2121 ms | ↑ 1.12x | 10 | 19m | 8d ago | 24m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.30% | 99.30% | 2191 ms | ↓ 0.82x | 0 | — | — | 31m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.86% | 80.86% | 1734 ms | ↑ 1.52x | 0 | — | — | 31m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 189 ms | ↓ 0.92x | 0 | — | — | 43m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.86% | 99.89% | 99.89% | 2007 ms | ↓ 0.74x | 2 | 0s | 10d ago | 22m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.33% | 69.77% | 69.77% | 4003 ms | → 0.96x | 7 | 10m | 12d ago | 39m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2352 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1111 ms | ↓ 0.65x | 0 | — | — | 24m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1708 ms | ↓ 0.90x | 1 | 0s | 17d ago | 38m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 3087 ms | ↓ 0.90x | 1 | 0s | 20d ago | 43m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.32% | 81.32% | 2293 ms | ↓ 0.76x | 0 | — | — | 31m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.48% | 87.48% | 2790 ms | ↑ 1.39x | 0 | — | — | 31m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.65% | 99.80% | 99.80% | 1280 ms | ↓ 0.83x | 2 | 36m | 9d ago | 24m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.30% | 96.30% | 1915 ms | ↓ 0.79x | 1 | 0s | 15d ago | 33m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1839 ms | ↑ 1.20x | 0 | — | — | 41m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.71% | 98.71% | 801 ms | ↓ 0.92x | 0 | — | — | 29m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 26.08% | 26.08% | 694 ms | ↓ 0.83x | 0 | — | — | 32m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.81% | 97.81% | 470 ms | ↓ 0.57x | 1 | 0s | 23d ago | 26m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 787 ms | ↓ 0.87x | 0 | — | — | 29m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.36% | 63.36% | 2474 ms | ↓ 0.92x | 1 | 0s | 15d ago | 31m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 43.37% | 43.37% | 532 ms | ↓ 0.55x | 0 | — | — | 42m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.65% | 93.57% | 93.57% | 54 ms | ↑ 1.40x | 1 | 1h 22m | 12d ago | 27m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 98.08% | 96.76% | 96.76% | 3917 ms | ↓ 0.73x | 9 | 1h 1m | 9d ago | 33m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.57% | 22.57% | 1344 ms | ↓ 0.75x | 0 | — | — | 41m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 510 ms | ↓ 0.40x | 0 | — | — | 24m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.59% | 99.59% | 2888 ms | ↑ 1.09x | 1 | 0s | 19d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2599 ms | ↓ 0.48x | 0 | — | — | 25m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 483 ms | ↓ 0.80x | 0 | — | — | 24m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.66% | 24.81% | 24.81% | 1612 ms | ↓ 0.85x | 5 | 0s | 9d ago | 33m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.73% | 93.73% | 4719 ms | → 1.00x | 0 | — | — | 42m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.63% | 99.63% | 1484 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.97% | 99.97% | 2054 ms | ↓ 0.82x | 1 | 0s | 15d ago | 31m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.29% | 99.29% | 882 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1505 ms | → 0.95x | 0 | — | — | 24m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.60% | 99.60% | 2577 ms | ↑ 1.09x | 0 | — | — | 43m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.49% | 99.49% | 1276 ms | ↓ 0.77x | 0 | — | — | 41m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 59.32% | 88.94% | 88.94% | 1438 ms | ↓ 0.78x | 1 | 10d 16h | 30d ago | 41m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.92% | 98.92% | 2803 ms | ↓ 0.74x | 0 | — | — | 27m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.40% | 99.05% | 99.05% | 873 ms | ↓ 0.77x | 4 | 1h 35m | 11d ago | 21m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.51% | 99.64% | 99.64% | 1062 ms | ↓ 0.79x | 4 | 15m | 17d ago | 21m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.31% | 99.40% | 99.40% | 4844 ms | ↑ 1.27x | 8 | 6m | 12d ago | 25m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.42% | 89.42% | 1923 ms | ↓ 0.87x | 0 | — | — | 31m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1079 ms | ↓ 0.86x | 0 | — | — | 27m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1744 ms | ↓ 0.87x | 0 | — | — | 25m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 98.53% | 98.53% | 98.53% | 1575 ms | ↓ 0.66x | 13 | 8m | 9d ago | 23m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1457 ms | ↓ 0.79x | 0 | — | — | 42m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1126 ms | ↓ 0.67x | 0 | — | — | 43m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1167 ms | ↓ 0.56x | 1 | 0s | 29d ago | 23m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.76% | 99.76% | 904 ms | ↓ 0.71x | 0 | — | — | 43m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.53% | 76.53% | 987 ms | ↓ 0.86x | 1 | 0s | 13d ago | 29m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 788 ms | ↓ 0.84x | 0 | — | — | 41m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.18% | 85.18% | 2300 ms | → 1.00x | 0 | — | — | 38m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.25% | 98.88% | 98.88% | 1654 ms | ↓ 0.84x | 4 | 45m | 14d ago | 31m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.34% | 98.34% | 2118 ms | ↓ 0.78x | 0 | — | — | 27m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1859 ms | ↓ 0.68x | 1 | 0s | 22d ago | 22m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1476 ms | → 0.95x | 1 | 0s | 13d ago | 23m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 97.98% | 97.98% | 3699 ms | → 1.01x | 1 | 0s | 29d ago | 25m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.56% | 95.73% | 95.73% | 1545 ms | ↓ 0.93x | 4 | 6h 14m | 18d ago | 25m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.87% | 98.87% | 1443 ms | → 1.02x | 0 | — | — | 31m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.78% | 98.78% | 1840 ms | ↓ 0.90x | 0 | — | — | 41m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.66% | 99.66% | 2076 ms | ↓ 0.78x | 0 | — | — | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.08% | 98.08% | 3592 ms | ↓ 0.85x | 2 | 10m | 11d ago | 29m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1083 ms | → 1.03x | 0 | — | — | 24m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.72% | 98.72% | 98.72% | 1195 ms | → 0.99x | 3 | 10m | 22d ago | 30m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.83% | 99.83% | 99.83% | 1128 ms | ↓ 0.73x | 2 | 0s | 17d ago | 22m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.49% | 32.49% | 1052 ms | ↓ 0.80x | 0 | — | — | 40m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 96.97% | 86.86% | 86.86% | 4750 ms | → 0.97x | 33 | 9m | 8d ago | 30m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 1110 ms | ↓ 0.85x | 0 | — | — | 31m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.45% | 98.45% | 1944 ms | ↓ 0.84x | 1 | 0s | 17d ago | 31m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 58.93% | 57.71% | 57.71% | 1291 ms | ↓ 0.85x | 1 | 10d 10h | 30d ago | 21m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1742 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.28% | 89.28% | 3520 ms | ↓ 0.75x | 0 | — | — | 31m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.90% | 16.61% | 16.61% | 2105 ms | ↓ 0.78x | 1 | 0s | 12d ago | 39m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.71% | 96.71% | 2808 ms | ↓ 0.89x | 1 | 0s | 16d ago | 33m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.87% | 99.87% | 1805 ms | ↓ 0.94x | 1 | 0s | 25d ago | 41m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.59% | 22.59% | 1835 ms | ↓ 0.94x | 0 | — | — | 42m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1642 ms | ↑ 1.31x | 0 | — | — | 24m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.44% | 97.44% | 2122 ms | ↓ 0.75x | 0 | — | — | 27m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.86% | 99.86% | 2095 ms | ↓ 0.90x | 0 | — | — | 41m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1120 ms | ↑ 1.32x | 1 | 20m | 25d ago | 42m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 24.11% | 24.11% | 3057 ms | ↓ 0.77x | 1 | 0s | 16d ago | 33m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 22.14% | 22.14% | 1896 ms | ↓ 0.80x | 0 | — | — | 33m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 3921 ms | ↓ 0.83x | 3 | 0s | 12d ago | 29m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.58% | 99.75% | 99.75% | 2813 ms | ↑ 1.13x | 2 | 60m | 27d ago | 24m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2850 ms | → 1.01x | 0 | — | — | 29m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1563 ms | ↓ 0.76x | 0 | — | — | 42m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.41% | 99.62% | 99.62% | 1960 ms | ↓ 0.86x | 1 | 3h 60m | 18d ago | 41m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 1995 ms | ↑ 1.32x | 0 | — | — | 41m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.77% | 98.77% | 1372 ms | ↓ 0.80x | 0 | — | — | 27m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.59% | 99.81% | 99.81% | 3140 ms | ↑ 1.53x | 4 | 15m | 10d ago | 33m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.16% | 99.16% | 1302 ms | ↓ 0.74x | 0 | — | — | 42m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 883 ms | ↓ 0.89x | 0 | — | — | 41m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1129 ms | ↑ 2.02x | 0 | — | — | 21m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.97% | 99.98% | 98.92% | 98.92% | 4131 ms | ↓ 0.92x | 1 | 0s | 2d ago | 45m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.93% | 99.95% | 99.98% | 99.98% | 449 ms | ↓ 0.93x | 1 | 4m | 2d ago | 45m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.93% | 99.95% | 99.98% | 99.98% | 832 ms | ↓ 0.86x | 1 | 4m | 2d ago | 45m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.93% | 99.88% | 93.53% | 93.53% | 2053 ms | ↓ 0.83x | 2 | 27m | 2d ago | 45m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.90% | 99.86% | 93.38% | 93.38% | 3162 ms | ↓ 0.81x | 3 | 20m | 2d ago | 45m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.86% | 99.88% | 35.94% | 35.94% | 1908 ms | ↓ 0.92x | 3 | 2m | 2d ago | 45m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.85% | 99.95% | 98.88% | 98.88% | 1764 ms | ↓ 0.85x | 1 | 0s | 6d ago | 44m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.85% | 99.64% | 99.28% | 99.28% | 724 ms | ↓ 0.61x | 3 | 30m | 6d ago | 43m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.80% | 99.41% | 91.85% | 91.85% | 2530 ms | ↓ 0.80x | 23 | 13s | 2d ago | 45m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.79% | 98.64% | 99.74% | 99.74% | 1940 ms | ↓ 0.92x | 4 | 1h 38m | 6d ago | 43m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.60% | 98.77% | 99.58% | 99.58% | 2566 ms | ↓ 0.84x | 18 | 2m | 3d ago | 42m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.60% | 98.51% | 50.02% | 50.02% | 3138 ms | → 1.03x | 12 | 23m | 1d ago | 42m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.60% | 99.93% | 98.93% | 98.93% | 1128 ms | ↓ 0.90x | 1 | 0s | 3d ago | 41m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.58% | 99.55% | 86.13% | 86.13% | 2305 ms | → 0.97x | 8 | 0s | 2d ago | 43m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.51% | 99.30% | 98.76% | 98.76% | 4499 ms | → 0.97x | 28 | 3s | 2d ago | 44m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.50% | 99.87% | 99.87% | 99.87% | 2766 ms | ↓ 0.83x | 2 | 0s | 4d ago | 39m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.49% | 99.59% | 22.26% | 22.26% | 2382 ms | ↓ 0.72x | 5 | 6m | 7d ago | 38m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.49% | 98.92% | 98.92% | 98.92% | 1882 ms | ↓ 0.94x | 12 | 9m | 2d ago | 38m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.49% | 99.86% | 99.80% | 99.80% | 1655 ms | ↓ 0.87x | 2 | 0s | 1d ago | 38m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.48% | 99.79% | 90.83% | 90.83% | 2083 ms | ↓ 0.86x | 3 | 0s | 4d ago | 31m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.48% | 99.59% | 90.98% | 90.98% | 924 ms | ↓ 0.87x | 6 | 0s | 7d ago | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.48% | 99.31% | 96.12% | 96.12% | 3048 ms | ↓ 0.87x | 4 | 41m | 5d ago | 31m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.48% | 99.66% | 93.07% | 93.07% | 1129 ms | ↓ 0.76x | 3 | 17m | 23h ago | 31m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.47% | 99.72% | 97.73% | 97.73% | 2616 ms | ↑ 1.11x | 4 | 0s | 18h ago | 30m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.47% | 96.47% | 84.38% | 84.38% | 1407 ms | ↓ 0.82x | 2 | 10h | 2d ago | 27m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.47% | 99.10% | 98.44% | 98.44% | 3567 ms | ↓ 0.89x | 5 | 42m | 4d ago | 29m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.47% | 99.93% | 99.81% | 99.81% | 773 ms | ↓ 0.93x | 1 | 0s | 7d ago | 27m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.47% | 99.38% | 97.03% | 97.03% | 1542 ms | ↓ 0.73x | 4 | 35m | 5d ago | 27m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.47% | 99.72% | 98.11% | 98.11% | 621 ms | ↓ 0.73x | 4 | 0s | 4d ago | 26m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.46% | 98.13% | 97.24% | 97.24% | 2017 ms | → 0.96x | 11 | 42m | 2d ago | 25m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 99.46% | 99.93% | 99.93% | 99.93% | 1328 ms | ↓ 0.76x | 1 | 0s | 22h ago | 22m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.46% | 99.24% | 99.27% | 99.27% | 305 ms | ↓ 0.68x | 10 | 2m | 5d ago | 24m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.46% | 99.79% | 99.65% | 99.65% | 1468 ms | ↓ 0.73x | 3 | 0s | 5d ago | 23m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.46% | 98.68% | 98.65% | 98.65% | 2537 ms | ↓ 0.78x | 19 | 0s | 6d ago | 22m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.46% | 99.91% | 99.91% | 99.91% | 1664 ms | ↓ 0.62x | 1 | 0s | 5d ago | 22m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.38% | 99.38% | 99.38% | 99.38% | 645 ms | → 1.00x | 1 | 0s | 3d ago | 21m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.37% | 99.66% | 63.95% | 63.95% | 2702 ms | → 0.97x | 6 | 0s | 4d ago | 43m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.19% | 99.87% | 86.08% | 86.08% | 726 ms | ↓ 0.86x | 1 | 10s | 2d ago | 41m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.15% | 98.03% | 86.20% | 86.20% | 4388 ms | ↓ 0.91x | 28 | 2m | 4d ago | 40m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.15% | 99.67% | 99.01% | 99.01% | 4070 ms | ↓ 0.95x | 5 | 0s | 6d ago | 40m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.15% | 99.67% | 99.17% | 99.17% | 4147 ms | ↓ 0.93x | 5 | 0s | 6d ago | 40m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (52)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.95% | 99.59% | 82.99% | 82.99% | 2051 ms | ↓ 0.72x | 5 | 41s | 2d ago | 31m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.95% | 99.73% | 97.56% | 97.56% | 2227 ms | → 0.96x | 4 | 0s | 3d ago | 33m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.95% | 98.42% | 86.74% | 86.74% | 4555 ms | ↓ 0.86x | 22 | 1m | 3d ago | 32m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.94% | 98.89% | 97.94% | 97.94% | 4041 ms | ↓ 0.92x | 11 | 12m | 4d ago | 29m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.94% | 99.86% | 91.74% | 91.74% | 669 ms | ↑ 1.36x | 1 | 30m | 7d ago | 29m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 98.94% | 99.86% | 92.63% | 92.63% | 2093 ms | ↓ 0.90x | 2 | 0s | 2d ago | 29m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.94% | 75.45% | 92.74% | 92.74% | 4480 ms | ↑ 1.16x | 7 | 20h 26m | 2d ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.92% | 99.17% | 96.82% | 96.82% | 2344 ms | ↑ 1.07x | 11 | 1h 4m | 6d ago | 25m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.92% | 96.87% | 93.00% | 93.00% | 4656 ms | ↓ 0.84x | 27 | 21m | 4d ago | 22m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 98.92% | 99.17% | 99.17% | 99.17% | 505 ms | ↑ 1.22x | 1 | 4m | 15h ago | 21m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.92% | 99.44% | 98.82% | 98.82% | 2781 ms | ↑ 1.07x | 4 | 22m | 17h ago | 24m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 98.92% | 99.86% | 99.87% | 99.87% | 3325 ms | ↓ 0.74x | 2 | 0s | 4d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 98.92% | 99.83% | 99.83% | 99.83% | 345 ms | ↑ 1.14x | 1 | 4m | 2d ago | 23m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 98.81% | 99.42% | 22.55% | 22.55% | 2141 ms | ↓ 0.94x | 8 | 8m | 2d ago | 42m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 98.43% | 95.81% | 83.61% | 83.61% | 4786 ms | ↓ 0.89x | 55 | 3m | 2d ago | 31m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.39% | 97.08% | 92.34% | 92.34% | 4673 ms | ↑ 1.21x | 20 | 26m | 14h ago | 25m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 98.38% | 99.24% | 98.36% | 98.36% | 1848 ms | ↓ 0.93x | 3 | 1h 8m | 16h ago | 22m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 97.97% | 99.73% | 97.92% | 97.92% | 2721 ms | ↓ 0.73x | 2 | 30m | 16h ago | 38m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 97.97% | 99.61% | 99.64% | 99.64% | 1611 ms | ↓ 0.86x | 5 | 57m | 2d ago | 41m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.91% | 98.35% | 73.85% | 73.85% | 906 ms | ↓ 0.82x | 9 | 50m | 6d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 97.88% | 99.45% | 92.08% | 92.08% | 3102 ms | → 1.01x | 8 | 0s | 17h ago | 29m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.85% | 99.38% | 98.71% | 98.71% | 1137 ms | ↑ 1.12x | 8 | 17s | 1d ago | 25m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.84% | 98.88% | 33.54% | 33.54% | 2286 ms | → 1.00x | 5 | 50m | 8h ago | 40m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.69% | 82.62% | 77.87% | 77.87% | 3961 ms | → 1.00x | 77 | 3h 29m | 2d ago | 44m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 97.38% | 98.63% | 91.76% | 91.76% | 1762 ms | → 1.04x | 19 | 2m | 17h ago | 31m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.35% | 96.13% | 84.76% | 84.76% | 4355 ms | ↓ 0.90x | 49 | 4m | 16h ago | 29m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 96.48% | 98.93% | 48.97% | 48.97% | 1569 ms | ↑ 1.12x | 7 | 30m | 6d ago | 43m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.45% | 96.27% | 98.45% | 98.45% | 3888 ms | ↓ 0.85x | 53 | 1m | 22h ago | 38m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 96.30% | 21.16% | 45.47% | 45.47% | 2253 ms | ↓ 0.59x | 4 | 5d 7h | 4d ago | 29m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 96.00% | 97.24% | 96.56% | 96.56% | 1848 ms | → 0.99x | 8 | 1h 41m | 7d ago | 39m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 95.77% | 97.24% | 54.25% | 54.25% | 3737 ms | → 0.98x | 38 | 1m | 19h ago | 29m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 95.70% | 86.81% | 83.18% | 83.18% | 1479 ms | ↓ 0.93x | 9 | 8h 44m | 18h ago | 25m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 95.68% | 99.37% | 99.40% | 99.40% | 1045 ms | ↓ 0.71x | 3 | 2h | 3d ago | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 95.68% | 97.29% | 98.50% | 98.50% | 2276 ms | ↑ 1.09x | 6 | 2h 13m | 7d ago | 24m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 94.59% | 98.86% | 98.86% | 98.86% | 966 ms | ↓ 0.78x | 2 | 2h 30m | 2d ago | 22m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.72% | 94.23% | 73.72% | 73.72% | 1535 ms | ↓ 0.76x | 21 | 1h 5m | 5h ago | 31m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 93.12% | 87.48% | 82.74% | 82.74% | 1224 ms | ↓ 0.48x | 22 | 4h 11m | 4d ago | 28m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 93.01% | 94.93% | 96.95% | 96.95% | 1300 ms | ↓ 0.62x | 3 | 17h 47m | 9d ago | 25m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 92.97% | 75.96% | 37.05% | 37.05% | 3229 ms | ↓ 0.64x | 154 | 33m | 3d ago | 22m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.15% | 87.79% | 22.82% | 22.82% | 4146 ms | ↓ 0.84x | 134 | 12m | 14h ago | 32m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 92.06% | 88.59% | 60.27% | 60.27% | 3240 ms | ↓ 0.84x | 136 | 6m | 3h ago | 28m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 84.82% | 73.51% | 27.00% | 27.00% | 3952 ms | ↓ 0.73x | 232 | 20m | 6h ago | 31m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 84.26% | 95.20% | 21.68% | 21.68% | 3117 ms | ↑ 1.19x | 41 | 24m | 17h ago | 40m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 83.00% | 93.12% | 20.36% | 20.36% | 3711 ms | ↑ 1.14x | 90 | 5m | 39m ago | 39m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.67% | 74.31% | 62.98% | 62.98% | 4754 ms | ↓ 0.87x | 260 | 15m | 2h ago | 39m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 79.84% | 66.78% | 96.33% | 96.33% | 4444 ms | ↓ 0.88x | 289 | 21m | 11h ago | 41m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 78.84% | 10.29% | 25.18% | 25.18% | 2654 ms | → 1.00x | 1 | 24d 6h | 30d ago | 29m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 72.49% | 96.40% | 86.47% | 86.47% | 1950 ms | ↓ 0.73x | 48 | 4m | 31m ago | 28m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 67.19% | 94.61% | 96.46% | 96.46% | 2408 ms | ↓ 0.75x | 2 | 1d 12h | 24h ago | 42m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 62.13% | 9.60% | 39.59% | 39.59% | 1057 ms | → 1.00x | 1 | 25d 21h | 30d ago | 40m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 32.89% | 76.28% | 94.08% | 94.08% | 3084 ms | ↓ 0.91x | 10 | 8h 57m | 6d ago | 43m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 21.73% | 58.73% | 95.65% | 95.65% | 2695 ms | ↓ 0.91x | 2 | 4d 7h | 13d ago | 44m ago |

</details>

<details open>
<summary><strong>🔴 Down (269)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.83% | 99.59% | 81.21% | 81.21% | 1828 ms | ↓ 0.84x | 1 | 3h | 4h ago | 43m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.84% | 97.06% | 97.06% | 97.06% | 4470 ms | ↓ 0.88x | 31 | 3m | 21m ago | 21m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 92.02% | 93.14% | 95.58% | 95.58% | 1424 ms | ↓ 0.78x | 13 | 2h 56m | 6h ago | 25m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 88.12% | 98.32% | 32.62% | 32.62% | 1320 ms | ↑ 1.08x | 2 | 5h 30m | 12h ago | 39m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 83.24% | 72.90% | 81.41% | 81.41% | 4143 ms | ↓ 0.81x | 173 | 34m | 21m ago | 21m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 58.12% | 94.38% | 22.89% | 22.89% | 561 ms | ↓ 0.64x | 4 | 9h 37m | 2d ago | 32m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 54.50% | 93.98% | 67.51% | 67.51% | 3040 ms | ↑ 1.56x | 8 | 4h 59m | 1d ago | 27m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 50.26% | 88.72% | 85.21% | 85.21% | 1655 ms | ↓ 0.80x | 5 | 15h 17m | 15h ago | 27m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 41.50% | 89.27% | 74.74% | 74.74% | 2749 ms | ↓ 0.37x | 40 | 1h 41m | 3d ago | 39m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 32.26% | 51.04% | 76.85% | 76.85% | 4990 ms | ↑ 1.45x | 197 | 1h 20m | 25m ago | 25m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 28.43% | 89.91% | 19.95% | 19.95% | 2552 ms | ↓ 0.75x | 6 | 15h 33m | 4d ago | 37m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 27.72% | 90.11% | 98.84% | 98.84% | 1730 ms | ↓ 0.94x | 2 | 1d 24h | 4d ago | 39m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 27.23% | 3.56% | 78.22% | 78.22% | 1485 ms | → 1.00x | 49 | 13h 38m | 33m ago | 33m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 23.81% | 26.83% | 64.12% | 64.12% | 2051 ms | ↑ 1.07x | 3 | 6d 16h | 4d ago | 28m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 22.51% | 40.43% | 32.18% | 32.18% | 917 ms | ↓ 0.92x | 4 | 4d 10h | 5d ago | 31m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 20.94% | 67.15% | 32.73% | 32.73% | 2419 ms | ↑ 1.20x | 3 | 3d 21h | 6d ago | 33m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 3.27% | 2.81% | 50.43% | 50.43% | 3879 ms | ↓ 0.85x | 113 | 5h 48m | 45m ago | 45m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.50% | 11.77% | 49.24% | 49.24% | 2175 ms | ↑ 1.06x | 6 | 4d 11h | 7d ago | 39m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.76% | 76.76% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.75% | 63.75% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.61% | 68.61% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 37.53% | 37.53% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 71.77% | 71.77% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 53.32% | 53.32% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.24% | 5.24% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.30% | 10.30% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 82.99% | 92.38% | 92.38% | — | — | 1 | 8d 24h | 9d ago | 25m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 48.33% | 48.33% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 44.27% | 76.94% | 76.94% | — | — | 14 | 1d 8h | 19d ago | 23m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.16% | 3.16% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 19.03% | 81.64% | 81.64% | — | — | 1 | 25d 2h | 25d ago | 27m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.18% | 77.18% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.88% | 33.88% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 81.15% | 92.81% | 92.81% | — | — | 2 | 4d 16h | 9d ago | 26m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.24% | 84.24% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.69% | 67.69% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 45.12% | 45.12% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.29% | 27.29% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 85.25% | 85.25% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.79% | 75.79% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.28% | 58.28% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.46% | 71.46% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 20h | 25d ago | 43m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.32% | 13.32% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.97% | 44.97% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.01% | 88.01% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.66% | 30.66% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 31.48% | 71.53% | 71.53% | — | — | 1 | 21d 22h | 22d ago | 23m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 32.36% | 34.24% | 34.24% | — | — | 3 | 7d 5h | 22d ago | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 80.12% | 80.12% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.15% | 3.15% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 52.26% | 79.34% | 79.34% | — | — | 6 | 2d 18h | 16d ago | 24m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 39.26% | 75.32% | 75.32% | — | — | 1 | 20d | 20d ago | 22m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 77.82% | 77.82% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 25.53% | 25.53% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.19% | 48.19% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.91% | 1.91% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 85.03% | 85.03% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 15.43% | 34.82% | 34.82% | — | — | 1 | 26d | 26d ago | 22m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 65.98% | 65.98% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 54.98% | 46.79% | 46.79% | — | — | 2 | 8d 1h | 13d ago | 32m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 67.48% | 67.48% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 32.36% | 72.07% | 72.07% | — | — | 3 | 7d 5h | 22d ago | 25m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 57.89% | 40.99% | 40.99% | — | — | 5 | 3d 2h | 14d ago | 23m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 57.38% | 65.08% | 65.08% | — | — | 6 | 2d 13h | 14d ago | 31m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.82% | 26.82% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.79% | 50.79% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 44.94% | 44.94% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.29% | 22.29% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.84% | 68.84% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 38.93% | 38.93% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 50.13% | 50.13% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 47.03% | 47.03% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.60% | 21.60% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.70% | 4.70% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.10% | 61.10% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.75% | 75.75% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 15.22% | 70.29% | 70.29% | — | — | 1 | 26d 2h | 26d ago | 27m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.63% | 5.63% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.04% | 74.04% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.69% | 74.69% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.83% | 28.83% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 1.17% | 85.10% | 85.10% | — | — | 1 | 29d 15h | 30d ago | 31m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.59% | 20.59% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.15% | 49.15% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 54.16% | 84.51% | 84.51% | — | — | 1 | 15d 15h | 16d ago | 42m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 18.73% | 18.73% | 18.73% | — | — | 2 | 10d 13h | 21d ago | 23m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 32.29% | 70.49% | 70.49% | — | — | 4 | 5d 10h | 22d ago | 25m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 56.36% | 81.65% | 81.65% | — | — | 3 | 5d 6h | 16d ago | 24m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 31.81% | 77.02% | 77.02% | — | — | 12 | 1d 19h | 22d ago | 25m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.52% | 48.52% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 15.08% | 15.84% | 15.84% | — | — | 8 | 2d 17h | 22d ago | 25m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.29% | 6.29% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 56.80% | 56.80% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.50% | 43.50% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 45m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 14.72% | 18.01% | 18.01% | — | — | 2 | 13d 2h | 26d ago | 24m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.44% | 39.44% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 27.23% | 74.82% | 74.82% | — | — | 3 | 6d 21h | 21d ago | 44m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 21.39% | 21.39% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 69.02% | 69.02% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.77% | 54.77% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 48.92% | 78.86% | 78.86% | — | — | 1 | 17d 15h | 18d ago | 24m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.80% | 35.80% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 66.98% | 66.98% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 71.72% | 71.72% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 63.90% | 63.90% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.36% | 2.36% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.53% | 77.53% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.91% | 38.91% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 91.16% | 91.16% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.51% | 77.51% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.44% | 30.44% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.63% | 75.63% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 43.74% | 43.74% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 17.90% | 17.90% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.38% | 40.38% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.48% | 66.48% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 58.91% | 58.91% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.56% | 24.56% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.83% | 73.83% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 44.22% | 44.22% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.90% | 2.90% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.85% | 39.85% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.38% | 71.38% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.17% | 55.17% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 19.38% | 22.55% | 22.55% | — | — | 1 | 24d 24h | 25d ago | 24m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 34.57% | 34.57% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 53.98% | 53.98% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.04% | 83.04% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 23.08% | 93.26% | 93.26% | — | — | 2 | 11d 10h | 23d ago | 43m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.39% | 23.39% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.88% | 10.88% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 21.11% | 25.54% | 25.54% | — | — | 3 | 8d 5h | 9d ago | 27m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.49% | 22.49% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.90% | 86.90% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 49.23% | 49.23% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 66.36% | 66.36% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 74.52% | 93.87% | 93.87% | — | — | 2 | 5d 12h | 11d ago | 29m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 7.99% | 7.99% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.34% | 16.34% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 3.79% | 46.77% | 46.77% | — | — | 1 | 28d 23h | 29d ago | 30m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 17.46% | 17.46% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.61% | 51.61% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 88.87% | 88.87% | — | — | 1 | 24d 21h | 25d ago | 37m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.91% | 35.91% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 29.41% | 29.41% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.19% | 5.19% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 73.29% | 73.29% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.27% | 84.27% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 48.61% | 48.61% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.42% | 77.42% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.41% | 76.41% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.78% | 52.78% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.20% | 69.20% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.26% | 76.26% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 22h | 25d ago | 24m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.23% | 18.23% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.65% | 54.65% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 36.19% | 36.19% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.81% | 3.81% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.81% | 31.81% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.00% | 64.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.56% | 22.56% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.78% | 6.78% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.38% | 54.38% | — | — | 1 | 29d 23h | 30d ago | 44m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 23.53% | 23.53% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.08% | 63.08% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 31.87% | 31.87% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 32.36% | 71.58% | 71.58% | — | — | 3 | 7d 5h | 22d ago | 25m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.95% | 3.95% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 20h | 25d ago | 25m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 45.55% | 45.55% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 39.26% | 39.26% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 30.63% | 30.63% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.67% | 17.67% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.12% | 5.12% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.33% | 10.33% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.81% | 16.81% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.06% | 15.06% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 26.31% | 26.31% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.09% | 9.09% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.74% | 6.74% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.71% | 0.71% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.05% | 4.05% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.69% | 4.69% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.62% | 46.62% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 79.71% | 82.49% | 82.49% | — | — | 2 | 4d 21h | 10d ago | 22m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 37.45% | 37.45% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.44% | 77.44% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.88% | 40.88% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.77% | 77.77% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 44.72% | 44.72% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.64% | 38.64% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.41% | 1.41% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.79% | 17.79% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.67% | 75.67% | — | — | 1 | 29d 23h | 30d ago | 36m ago |

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
