# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 364 🟢 operational · 42 🟡 degraded · 269 🔴 down · 0 ⚫ unknown

_Updated 2026-07-08 05:56 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (364)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.46% | 98.46% | 924 ms | ↑ 1.21x | 0 | — | — | 29m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 94.25% | 94.25% | 663 ms | ↓ 0.40x | 0 | — | — | 33m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.79% | 24.33% | 24.33% | 3177 ms | ↓ 0.92x | 3 | 0s | 27d ago | 35m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.57% | 97.57% | 2700 ms | ↓ 0.79x | 0 | — | — | 40m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 59.77% | 59.77% | 1901 ms | ↑ 1.15x | 0 | — | — | 32m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.35% | 99.60% | 99.60% | 800 ms | ↓ 0.89x | 4 | 35m | 16d ago | 26m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.73% | 98.73% | 953 ms | ↓ 0.86x | 2 | 0s | 18d ago | 34m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.89% | 98.89% | 1872 ms | ↓ 0.93x | 1 | 0s | 9d ago | 42m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.61% | 99.61% | 3122 ms | ↑ 1.08x | 0 | — | — | 42m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.83% | 95.83% | 1876 ms | ↓ 0.71x | 0 | — | — | 29m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 98.01% | 98.01% | 2188 ms | ↓ 0.64x | 0 | — | — | 29m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 94.76% | 97.05% | 97.05% | 950 ms | ↓ 0.65x | 3 | 17h 47m | 12d ago | 28m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.95% | 99.95% | 2169 ms | → 0.99x | 1 | 0s | 19d ago | 27m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1075 ms | → 1.04x | 0 | — | — | 25m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.80% | 98.80% | 1115 ms | ↓ 0.63x | 0 | — | — | 30m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.07% | 99.07% | 601 ms | ↓ 0.63x | 0 | — | — | 27m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 40.08% | 40.08% | 556 ms | ↓ 0.55x | 0 | — | — | 38m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1495 ms | ↓ 0.80x | 0 | — | — | 25m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.79% | 99.87% | 99.87% | 1260 ms | ↓ 0.69x | 2 | 10m | 12d ago | 29m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.21% | 97.21% | 2458 ms | ↓ 0.87x | 0 | — | — | 33m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.86% | 98.92% | 98.92% | 1232 ms | → 1.00x | 1 | 30m | 29d ago | 39m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 944 ms | ↓ 0.72x | 0 | — | — | 26m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 97.02% | 97.02% | 499 ms | ↓ 0.62x | 2 | 0s | 19d ago | 31m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.75% | 88.75% | 1662 ms | ↓ 0.78x | 0 | — | — | 31m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1457 ms | ↓ 0.81x | 1 | 0s | 17d ago | 27m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.55% | 98.55% | 2727 ms | ↓ 0.64x | 0 | — | — | 30m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.64% | 99.67% | 99.67% | 1299 ms | ↓ 0.81x | 3 | 19m | 23d ago | 28m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 902 ms | ↓ 0.67x | 1 | 0s | 25d ago | 26m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.90% | 97.90% | 1429 ms | ↓ 0.93x | 0 | — | — | 32m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 376 ms | ↓ 0.63x | 1 | 0s | 16d ago | 39m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.76% | 99.76% | 3308 ms | ↑ 1.06x | 1 | 0s | 16d ago | 39m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.10% | 99.10% | 278 ms | ↓ 0.68x | 1 | 0s | 16d ago | 31m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.66% | 99.01% | 99.01% | 4104 ms | ↓ 0.87x | 5 | 0s | 9d ago | 39m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.98% | 97.98% | 3348 ms | ↓ 0.79x | 0 | — | — | 41m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.86% | 99.64% | 99.64% | 1702 ms | ↓ 0.87x | 2 | 3h 20m | 19d ago | 31m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.68% | 96.68% | 683 ms | ↓ 0.67x | 0 | — | — | 31m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1058 ms | ↓ 0.79x | 0 | — | — | 25m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 560 ms | ↓ 0.29x | 0 | — | — | 26m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.83% | 99.83% | 99.83% | 1460 ms | → 0.96x | 2 | 0s | 23d ago | 25m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.93% | 99.09% | 99.09% | 2584 ms | ↓ 0.76x | 1 | 0s | 20d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.93% | 99.87% | 99.87% | 1236 ms | ↓ 0.69x | 1 | 0s | 29d ago | 29m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.87% | 99.87% | 1158 ms | ↑ 1.52x | 0 | — | — | 25m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 99.21% | 99.32% | 99.32% | 288 ms | ↓ 0.64x | 10 | 2m | 8d ago | 27m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.03% | 91.82% | 91.82% | 691 ms | ↓ 0.39x | 21 | 1h 54m | 12d ago | 26m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3017 ms | ↓ 0.75x | 0 | — | — | 37m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.74% | 99.74% | 900 ms | → 1.02x | 0 | — | — | 29m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.79% | 96.79% | 1772 ms | ↓ 0.65x | 1 | 0s | 17d ago | 29m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.10% | 98.10% | 3468 ms | ↑ 1.10x | 0 | — | — | 30m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1017 ms | ↓ 0.81x | 0 | — | — | 27m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 630 ms | ↑ 1.23x | 0 | — | — | 27m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.99% | 96.99% | 511 ms | ↓ 0.63x | 0 | — | — | 33m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 876 ms | ↓ 0.79x | 0 | — | — | 25m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.95% | 56.95% | 816 ms | ↓ 0.45x | 0 | — | — | 35m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.49% | 98.70% | 98.70% | 699 ms | ↓ 0.95x | 2 | 4h 33m | 27d ago | 26m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.78% | 99.67% | 99.67% | 2585 ms | → 1.05x | 3 | 0s | 7d ago | 26m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 867 ms | ↓ 0.59x | 0 | — | — | 26m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 3250 ms | ↓ 0.76x | 0 | — | — | 38m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.57% | 87.78% | 87.78% | 840 ms | ↓ 0.62x | 5 | 6m | 12d ago | 26m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.27% | 97.27% | 1108 ms | ↓ 0.91x | 0 | — | — | 38m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.78% | 99.08% | 99.08% | 1428 ms | ↑ 1.21x | 2 | 10m | 11d ago | 26m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.18% | 99.18% | 785 ms | ↓ 0.68x | 1 | 0s | 25d ago | 33m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.91% | 50.18% | 50.18% | 2048 ms | ↓ 0.73x | 8 | 1h 3m | 15d ago | 38m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.55% | 84.55% | 2023 ms | ↓ 0.67x | 0 | — | — | 33m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.79% | 68.44% | 68.44% | 1127 ms | ↓ 0.87x | 2 | 10m | 18d ago | 34m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1075 ms | ↑ 1.25x | 0 | — | — | 27m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.85% | 98.85% | 2122 ms | ↓ 0.74x | 0 | — | — | 30m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3080 ms | ↓ 0.72x | 0 | — | — | 26m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.25% | 93.25% | 590 ms | ↓ 0.73x | 0 | — | — | 34m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 100.00% | 98.71% | 98.69% | 98.69% | 1792 ms | ↓ 0.64x | 18 | 0s | 9d ago | 26m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.83% | 98.83% | 1144 ms | ↓ 0.76x | 0 | — | — | 29m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.86% | 99.86% | 652 ms | ↑ 1.20x | 0 | — | — | 31m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.51% | 99.51% | 674 ms | ↓ 0.71x | 0 | — | — | 28m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.92% | 99.92% | 99.92% | 829 ms | ↓ 0.51x | 1 | 0s | 14d ago | 26m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.16% | 98.16% | 3264 ms | ↑ 1.38x | 1 | 0s | 28d ago | 31m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 50.08% | 50.08% | 853 ms | ↓ 0.48x | 2 | 0s | 18d ago | 35m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.64% | 96.85% | 96.85% | 1015 ms | ↓ 0.82x | 1 | 2h 1m | 20d ago | 26m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.44% | 56.92% | 56.92% | 1415 ms | ↓ 0.89x | 8 | 0s | 14d ago | 39m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 942 ms | ↓ 0.76x | 0 | — | — | 26m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.44% | 68.94% | 68.94% | 4403 ms | ↓ 0.79x | 18 | 7m | 12d ago | 33m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.37% | 98.37% | 2473 ms | ↓ 0.94x | 0 | — | — | 32m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.65% | 54.64% | 54.64% | 853 ms | ↓ 0.64x | 4 | 0s | 18d ago | 35m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 789 ms | → 0.95x | 0 | — | — | 25m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.98% | 99.98% | 1208 ms | ↓ 0.43x | 0 | — | — | 26m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1006 ms | → 1.00x | 0 | — | — | 25m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.86% | 99.85% | 99.85% | 1583 ms | ↓ 0.75x | 2 | 0s | 20d ago | 25m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.85% | 64.85% | 534 ms | ↓ 0.67x | 2 | 0s | 18d ago | 34m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.11% | 98.11% | 2676 ms | ↑ 1.21x | 0 | — | — | 35m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1774 ms | ↓ 0.77x | 0 | — | — | 27m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.90% | 99.34% | 99.34% | 2475 ms | ↓ 0.72x | 4 | 6h 42m | 23d ago | 37m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.59% | 62.59% | 1358 ms | ↓ 0.90x | 0 | — | — | 34m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.52% | 65.52% | 992 ms | ↓ 0.60x | 0 | — | — | 34m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.71% | 99.89% | 99.89% | 1205 ms | ↓ 0.83x | 1 | 1h 9m | 22d ago | 28m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.27% | 99.27% | 1649 ms | ↓ 0.77x | 0 | — | — | 34m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1439 ms | → 0.98x | 0 | — | — | 31m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.61% | 99.61% | 511 ms | ↓ 0.67x | 0 | — | — | 34m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.66% | 98.00% | 98.00% | 776 ms | ↓ 0.40x | 1 | 12h 2m | 23d ago | 33m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.51% | 91.33% | 91.33% | 2288 ms | ↓ 0.79x | 2 | 1d 13h | 26d ago | 25m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.93% | 22.84% | 22.84% | 766 ms | ↓ 0.46x | 1 | 0s | 15d ago | 38m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1451 ms | ↓ 0.67x | 0 | — | — | 26m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.09% | 99.09% | 2885 ms | ↓ 0.76x | 0 | — | — | 41m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 95.90% | 99.49% | 99.49% | 3338 ms | → 1.00x | 3 | 9h 27m | 11d ago | 42m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.28% | 98.28% | 3010 ms | ↓ 0.90x | 0 | — | — | 42m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 782 ms | ↓ 0.89x | 1 | 0s | 16d ago | 39m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.53% | 77.53% | 2061 ms | ↓ 0.90x | 0 | — | — | 32m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1117 ms | ↓ 0.93x | 1 | 0s | 13d ago | 27m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2152 ms | ↑ 1.08x | 0 | — | — | 25m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.35% | 98.39% | 98.39% | 891 ms | ↓ 0.65x | 7 | 8m | 24d ago | 26m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 99.70% | 99.70% | 1488 ms | ↓ 0.89x | 0 | — | — | 28m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1758 ms | → 1.03x | 0 | — | — | 42m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 619 ms | ↓ 0.52x | 0 | — | — | 42m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.93% | 99.65% | 99.65% | 1499 ms | ↓ 0.66x | 1 | 0s | 29d ago | 40m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.30% | 90.30% | 888 ms | ↓ 0.72x | 0 | — | — | 33m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.64% | 81.06% | 81.06% | 1766 ms | ↓ 0.83x | 3 | 20m | 13d ago | 31m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.84% | 99.84% | 1153 ms | → 0.96x | 0 | — | — | 42m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 829 ms | ↑ 1.23x | 0 | — | — | 27m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.79% | 86.79% | 2148 ms | ↓ 0.85x | 0 | — | — | 29m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1231 ms | ↓ 0.53x | 0 | — | — | 26m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1694 ms | ↓ 0.82x | 0 | — | — | 29m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.09% | 99.09% | 422 ms | ↓ 0.51x | 0 | — | — | 35m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.79% | 97.79% | 1781 ms | ↓ 0.79x | 0 | — | — | 29m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 100.00% | 18.99% | 26.21% | 26.21% | 2642 ms | → 1.00x | 1 | 21d 7h | 30d ago | 31m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 99.94% | 99.94% | 1388 ms | ↓ 0.83x | 0 | — | — | 25m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1519 ms | ↓ 0.94x | 1 | 0s | 24d ago | 27m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 838 ms | ↓ 0.51x | 1 | 0s | 29d ago | 26m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1435 ms | ↓ 0.69x | 0 | — | — | 26m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.96% | 98.96% | 608 ms | ↑ 1.76x | 1 | 29m | 16d ago | 31m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.93% | 99.25% | 99.25% | 1214 ms | ↓ 0.86x | 1 | 0s | 13d ago | 28m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.03% | 99.03% | 2411 ms | ↓ 0.81x | 0 | — | — | 35m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.87% | 91.87% | 674 ms | ↓ 0.85x | 0 | — | — | 28m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.58% | 22.70% | 22.70% | 2174 ms | ↓ 0.66x | 5 | 6m | 9d ago | 37m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.85% | 99.85% | 929 ms | ↑ 1.25x | 0 | — | — | 26m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 857 ms | ↓ 0.49x | 0 | — | — | 26m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.74% | 26.74% | 1540 ms | ↓ 0.56x | 0 | — | — | 35m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2250 ms | ↓ 0.67x | 0 | — | — | 42m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.36% | 98.80% | 98.80% | 181 ms | ↓ 0.46x | 4 | 38m | 14d ago | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 770 ms | ↑ 1.08x | 0 | — | — | 41m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.42% | 98.42% | 1236 ms | ↓ 0.65x | 1 | 0s | 20d ago | 29m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.74% | 99.74% | 2513 ms | ↓ 0.84x | 2 | 0s | 15d ago | 41m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.24% | 98.24% | 1458 ms | ↑ 1.19x | 0 | — | — | 32m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 22.71% | 22.71% | 601 ms | ↓ 0.53x | 2 | 0s | 18d ago | 35m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 417 ms | ↓ 0.52x | 0 | — | — | 42m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 100.00% | 99.77% | 99.77% | 1539 ms | ↓ 0.74x | 0 | — | — | 36m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2673 ms | ↑ 1.38x | 0 | — | — | 41m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2321 ms | ↓ 0.90x | 1 | 21m | 14d ago | 27m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 66.12% | 34.54% | 34.54% | 1363 ms | ↓ 0.88x | 2 | 4d 2h | 18d ago | 34m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 96.10% | 97.99% | 97.99% | 1307 ms | ↓ 0.70x | 29 | 27m | 28d ago | 40m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2154 ms | ↓ 0.85x | 0 | — | — | 38m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.37% | 99.37% | 1823 ms | ↓ 0.81x | 1 | 0s | 29d ago | 35m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.52% | 45.52% | 556 ms | ↓ 0.64x | 1 | 0s | 28d ago | 42m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.66% | 98.66% | 1202 ms | ↓ 0.61x | 1 | 0s | 16d ago | 31m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.00% | 93.03% | 93.03% | 694 ms | ↓ 0.68x | 10 | 12m | 12d ago | 29m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.96% | 99.96% | 1010 ms | ↓ 0.75x | 0 | — | — | 41m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.48% | 99.48% | 2505 ms | ↓ 0.85x | 0 | — | — | 37m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.00% | 99.73% | 99.73% | 271 ms | ↑ 1.47x | 10 | 10m | 15d ago | 41m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.83% | 99.83% | 1353 ms | ↓ 0.89x | 0 | — | — | 32m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.93% | 22.22% | 22.22% | 709 ms | ↓ 0.72x | 1 | 0s | 25d ago | 41m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 1977 ms | ↓ 0.74x | 0 | — | — | 34m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 556 ms | ↑ 1.24x | 0 | — | — | 26m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.57% | 91.07% | 91.07% | 926 ms | ↓ 0.77x | 6 | 0s | 10d ago | 33m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.65% | 99.65% | 546 ms | ↓ 0.63x | 0 | — | — | 42m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 99.29% | 96.17% | 96.17% | 2711 ms | ↓ 0.79x | 4 | 41m | 8d ago | 33m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.79% | 24.82% | 24.82% | 642 ms | ↓ 0.62x | 3 | 0s | 12d ago | 35m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 77.89% | 88.23% | 88.23% | 545 ms | ↓ 0.66x | 4 | 1d 8h | 21d ago | 26m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 2373 ms | ↓ 0.87x | 0 | — | — | 41m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.27% | 99.27% | 99.27% | 1777 ms | ↓ 0.74x | 1 | 2h 37m | 18d ago | 26m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.15% | 66.25% | 66.25% | 1367 ms | → 1.03x | 2 | 2h 18m | 18d ago | 35m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.93% | 89.71% | 89.71% | 1365 ms | ↓ 0.78x | 1 | 0s | 25d ago | 40m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.79% | 24.45% | 24.45% | 1388 ms | ↓ 0.78x | 2 | 0s | 22d ago | 35m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.72% | 99.00% | 99.00% | 2574 ms | ↑ 1.15x | 2 | 15m | 22d ago | 33m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.84% | 89.84% | 851 ms | ↓ 0.59x | 2 | 0s | 24d ago | 27m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.93% | 99.90% | 99.90% | 699 ms | ↓ 0.48x | 1 | 0s | 28d ago | 40m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1067 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 49.31% | 49.31% | 593 ms | → 1.00x | 1 | 0s | 28d ago | 32m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.62% | 99.62% | 921 ms | ↓ 0.77x | 1 | 0s | 13d ago | 42m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.98% | 99.98% | 1096 ms | ↓ 0.71x | 0 | — | — | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 96.98% | 98.87% | 98.87% | 2448 ms | ↓ 0.67x | 2 | 8h 60m | 19d ago | 40m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.68% | 98.68% | 1470 ms | ↓ 0.76x | 0 | — | — | 29m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 17.91% | 39.93% | 39.93% | 1067 ms | → 1.00x | 1 | 22d 22h | 30d ago | 39m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.64% | 98.34% | 98.34% | 881 ms | ↑ 1.23x | 1 | 1h 40m | 20d ago | 29m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.74% | 71.74% | 1113 ms | ↓ 0.88x | 0 | — | — | 34m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1219 ms | ↓ 0.79x | 0 | — | — | 26m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1121 ms | ↓ 0.92x | 0 | — | — | 25m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 82.23% | 82.23% | 1750 ms | ↓ 0.62x | 1 | 0s | 28d ago | 33m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1627 ms | ↓ 0.60x | 0 | — | — | 40m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 1205 ms | ↑ 1.12x | 0 | — | — | 26m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 664 ms | ↓ 0.88x | 1 | 0s | 29d ago | 36m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 85.77% | 38.27% | 38.27% | 1872 ms | ↓ 0.90x | 13 | 5h 54m | 20d ago | 34m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 94.71% | 32.60% | 32.60% | 2576 ms | ↑ 1.07x | 2 | 14h 56m | 29d ago | 29m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 96.57% | 56.72% | 56.72% | 1252 ms | ↑ 1.78x | 8 | 2h 1m | 12d ago | 31m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.86% | 91.85% | 91.85% | 649 ms | ↑ 1.37x | 1 | 30m | 10d ago | 31m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.35% | 99.35% | 2298 ms | ↓ 0.89x | 0 | — | — | 34m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 69.38% | 69.38% | 1176 ms | ↓ 0.91x | 2 | 0s | 14d ago | 34m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.87% | 96.87% | 1054 ms | ↓ 0.77x | 0 | — | — | 34m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1366 ms | ↓ 0.82x | 0 | — | — | 26m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.93% | 24.44% | 24.44% | 2138 ms | ↓ 0.87x | 1 | 0s | 15d ago | 38m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2478 ms | ↓ 0.85x | 0 | — | — | 41m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.71% | 97.83% | 97.83% | 714 ms | ↑ 1.20x | 2 | 31m | 17d ago | 27m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1497 ms | ↓ 0.81x | 1 | 0s | 26d ago | 28m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3513 ms | ↓ 0.83x | 0 | — | — | 27m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 97.42% | 98.55% | 98.55% | 2253 ms | → 1.02x | 5 | 2h 28m | 10d ago | 27m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.66% | 99.18% | 99.18% | 4335 ms | ↓ 0.91x | 5 | 0s | 9d ago | 39m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.54% | 60.54% | 1199 ms | ↑ 1.42x | 0 | — | — | 34m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.44% | 98.37% | 98.37% | 1652 ms | ↓ 0.91x | 2 | 3h 26m | 12d ago | 33m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.87% | 44.87% | 3120 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1167 ms | → 1.00x | 0 | — | — | 25m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.26% | 99.26% | 3104 ms | ↓ 0.70x | 0 | — | — | 37m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 2716 ms | ↓ 0.83x | 0 | — | — | 42m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2048 ms | ↓ 0.78x | 0 | — | — | 33m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.71% | 98.91% | 98.91% | 2186 ms | ↑ 1.11x | 10 | 19m | 11d ago | 27m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.31% | 99.31% | 2013 ms | ↓ 0.71x | 0 | — | — | 33m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 81.03% | 81.03% | 1537 ms | ↑ 1.43x | 0 | — | — | 34m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 187 ms | ↓ 0.67x | 0 | — | — | 42m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.44% | 69.94% | 69.94% | 4115 ms | → 0.96x | 5 | 14m | 15d ago | 38m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1984 ms | ↓ 0.69x | 0 | — | — | 40m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1058 ms | ↓ 0.71x | 0 | — | — | 27m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1636 ms | ↓ 0.86x | 1 | 0s | 20d ago | 38m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.56% | 99.56% | 3194 ms | → 0.98x | 1 | 0s | 23d ago | 42m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.50% | 81.50% | 1864 ms | ↓ 0.60x | 0 | — | — | 33m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.60% | 87.60% | 2086 ms | ↑ 1.20x | 0 | — | — | 33m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.64% | 99.81% | 99.81% | 1270 ms | ↓ 0.72x | 2 | 36m | 12d ago | 27m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.32% | 96.32% | 1390 ms | ↓ 0.67x | 1 | 0s | 18d ago | 35m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1830 ms | ↑ 1.09x | 0 | — | — | 40m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.73% | 98.73% | 727 ms | ↓ 0.77x | 0 | — | — | 31m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 26.57% | 26.57% | 724 ms | ↓ 0.73x | 0 | — | — | 34m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.85% | 97.85% | 418 ms | ↓ 0.54x | 1 | 0s | 26d ago | 29m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 781 ms | ↓ 0.76x | 0 | — | — | 31m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.62% | 63.62% | 2240 ms | ↓ 0.83x | 1 | 0s | 18d ago | 34m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 44.65% | 44.65% | 456 ms | ↓ 0.42x | 0 | — | — | 41m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.64% | 93.70% | 93.70% | 60 ms | ↑ 1.27x | 1 | 1h 22m | 15d ago | 29m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 98.58% | 96.78% | 96.78% | 3075 ms | ↓ 0.61x | 8 | 39m | 12d ago | 35m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 23.01% | 23.01% | 897 ms | ↓ 0.57x | 0 | — | — | 40m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 498 ms | ↓ 0.41x | 0 | — | — | 27m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.60% | 99.60% | 2836 ms | ↓ 0.93x | 1 | 0s | 22d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2401 ms | ↓ 0.44x | 0 | — | — | 28m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 465 ms | ↓ 0.75x | 0 | — | — | 27m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.65% | 25.24% | 25.24% | 1229 ms | ↓ 0.65x | 5 | 0s | 12d ago | 35m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.77% | 93.77% | 4802 ms | → 1.04x | 0 | — | — | 41m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.64% | 99.64% | 1327 ms | ↓ 0.75x | 0 | — | — | 40m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.97% | 99.97% | 1663 ms | ↓ 0.70x | 1 | 0s | 18d ago | 33m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.30% | 99.30% | 774 ms | ↓ 0.74x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1441 ms | ↓ 0.88x | 0 | — | — | 27m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 98.96% | 49.59% | 49.59% | 1436 ms | ↑ 1.16x | 6 | 35m | 9d ago | 42m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.49% | 99.49% | 1054 ms | ↓ 0.69x | 0 | — | — | 40m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 69.15% | 89.01% | 89.01% | 1180 ms | ↓ 0.71x | 1 | 7d 17h | 30d ago | 40m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.94% | 98.94% | 2480 ms | ↓ 0.63x | 0 | — | — | 29m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.50% | 99.66% | 99.66% | 1058 ms | ↓ 0.86x | 4 | 15m | 20d ago | 25m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.93% | 99.81% | 99.81% | 671 ms | ↓ 0.84x | 1 | 0s | 10d ago | 29m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.54% | 89.54% | 1844 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.86% | 99.86% | 850 ms | ↓ 0.78x | 0 | — | — | 29m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1548 ms | ↓ 0.77x | 0 | — | — | 28m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1321 ms | ↓ 0.71x | 0 | — | — | 41m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1368 ms | ↓ 0.92x | 0 | — | — | 42m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 99.94% | 99.94% | 1044 ms | ↓ 0.57x | 0 | — | — | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.76% | 99.76% | 868 ms | ↓ 0.54x | 0 | — | — | 42m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.83% | 76.83% | 751 ms | ↓ 0.78x | 1 | 0s | 16d ago | 31m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 798 ms | ↓ 0.72x | 0 | — | — | 39m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.26% | 85.26% | 1687 ms | ↓ 0.91x | 0 | — | — | 38m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.50% | 98.89% | 98.89% | 1654 ms | ↓ 0.80x | 3 | 40m | 17d ago | 33m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.37% | 98.37% | 1772 ms | ↓ 0.68x | 0 | — | — | 29m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1118 ms | ↓ 0.53x | 1 | 0s | 25d ago | 26m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1486 ms | ↓ 0.89x | 1 | 0s | 16d ago | 26m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 98.03% | 98.03% | 3085 ms | ↓ 0.80x | 0 | — | — | 28m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.41% | 96.04% | 96.04% | 1295 ms | ↓ 0.89x | 4 | 6h 14m | 21d ago | 28m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.88% | 98.88% | 1390 ms | ↓ 0.93x | 0 | — | — | 34m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.67% | 99.67% | 1832 ms | ↓ 0.72x | 0 | — | — | 27m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.11% | 98.11% | 3126 ms | ↓ 0.73x | 2 | 10m | 14d ago | 30m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1198 ms | → 0.98x | 0 | — | — | 27m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.72% | 98.74% | 98.74% | 1039 ms | ↓ 0.84x | 3 | 10m | 25d ago | 32m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.87% | 32.87% | 953 ms | ↓ 0.60x | 0 | — | — | 39m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 97.01% | 87.03% | 87.03% | 4453 ms | ↓ 0.90x | 31 | 9m | 11d ago | 32m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 1061 ms | ↓ 0.84x | 0 | — | — | 33m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.47% | 98.47% | 1891 ms | ↓ 0.77x | 1 | 0s | 20d ago | 33m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 69.27% | 60.20% | 60.20% | 1093 ms | ↓ 0.83x | 1 | 7d 11h | 30d ago | 25m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.38% | 89.38% | 2301 ms | ↓ 0.61x | 0 | — | — | 33m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.91% | 17.18% | 17.18% | 1526 ms | ↓ 0.68x | 1 | 0s | 15d ago | 38m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.73% | 96.73% | 2718 ms | ↓ 0.83x | 1 | 0s | 19d ago | 35m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 23.03% | 23.03% | 1863 ms | → 1.01x | 0 | — | — | 41m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2117 ms | ↑ 1.47x | 0 | — | — | 27m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.48% | 97.48% | 1550 ms | ↓ 0.61x | 0 | — | — | 29m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1101 ms | ↑ 1.29x | 1 | 20m | 28d ago | 41m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 24.54% | 24.54% | 2310 ms | ↓ 0.64x | 1 | 0s | 19d ago | 35m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 22.59% | 22.59% | 1524 ms | ↓ 0.73x | 0 | — | — | 35m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 3022 ms | ↓ 0.69x | 3 | 0s | 15d ago | 30m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.36% | 97.09% | 97.09% | 1161 ms | ↓ 0.63x | 4 | 35m | 7d ago | 29m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.86% | 99.75% | 99.75% | 2669 ms | → 1.03x | 1 | 0s | 30d ago | 27m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2779 ms | → 0.95x | 0 | — | — | 31m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1312 ms | ↓ 0.67x | 0 | — | — | 41m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 99.92% | 99.92% | 99.92% | 871 ms | ↓ 0.48x | 1 | 0s | 8d ago | 26m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 1933 ms | ↑ 1.26x | 0 | — | — | 39m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.79% | 98.79% | 1346 ms | ↓ 0.73x | 0 | — | — | 29m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.17% | 99.17% | 1108 ms | ↓ 0.71x | 0 | — | — | 41m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 971 ms | ↑ 1.21x | 0 | — | — | 40m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1196 ms | ↑ 2.12x | 0 | — | — | 25m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.68% | 99.98% | 98.92% | 98.92% | 4170 ms | → 1.03x | 1 | 0s | 5d ago | 43m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.63% | 99.90% | 98.93% | 98.93% | 2910 ms | → 1.03x | 2 | 0s | 2d ago | 42m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.63% | 99.58% | 99.28% | 99.28% | 659 ms | ↓ 0.44x | 4 | 22m | 18h ago | 42m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.63% | 98.55% | 99.74% | 99.74% | 1724 ms | ↓ 0.92x | 5 | 1h 18m | 3d ago | 42m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.63% | 99.59% | 64.15% | 64.15% | 2779 ms | → 1.00x | 7 | 0s | 3d ago | 41m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.63% | 99.59% | 86.21% | 86.21% | 2145 ms | ↓ 0.86x | 7 | 0s | 5d ago | 41m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.62% | 99.93% | 98.93% | 98.93% | 1092 ms | ↓ 0.92x | 1 | 0s | 6d ago | 40m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.62% | 98.53% | 51.16% | 51.16% | 3211 ms | ↑ 1.06x | 11 | 25m | 4d ago | 41m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.62% | 99.93% | 98.78% | 98.78% | 1888 ms | ↓ 0.90x | 1 | 0s | 1d ago | 39m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.62% | 99.93% | 99.92% | 99.92% | 1550 ms | ↓ 0.89x | 1 | 0s | 1d ago | 39m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.62% | 99.86% | 99.87% | 99.87% | 1596 ms | ↓ 0.85x | 2 | 0s | 1d ago | 39m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.62% | 99.93% | 99.85% | 99.85% | 1875 ms | ↓ 0.77x | 1 | 0s | 1d ago | 39m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.62% | 99.32% | 99.62% | 99.62% | 1939 ms | ↓ 0.81x | 2 | 1h 60m | 1d ago | 39m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.62% | 99.86% | 99.87% | 99.87% | 2563 ms | ↓ 0.79x | 2 | 0s | 7d ago | 39m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.62% | 99.72% | 97.93% | 97.93% | 2611 ms | ↓ 0.65x | 2 | 30m | 4d ago | 37m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.62% | 99.72% | 80.17% | 80.17% | 1842 ms | ↓ 0.84x | 4 | 0s | 18h ago | 38m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.62% | 99.79% | 97.76% | 97.76% | 2431 ms | ↑ 1.14x | 3 | 0s | 4d ago | 32m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.62% | 98.46% | 22.21% | 22.21% | 3321 ms | ↓ 0.75x | 22 | 0s | 24h ago | 37m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.62% | 99.93% | 77.93% | 77.93% | 879 ms | ↓ 0.53x | 1 | 0s | 3h ago | 33m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.62% | 99.79% | 90.93% | 90.93% | 1819 ms | ↓ 0.76x | 3 | 0s | 6d ago | 33m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.62% | 99.09% | 98.92% | 98.92% | 1465 ms | ↓ 0.87x | 10 | 8m | 5d ago | 38m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.62% | 99.93% | 63.08% | 63.08% | 1244 ms | ↓ 0.86x | 1 | 0s | 17h ago | 34m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.62% | 99.65% | 93.14% | 93.14% | 931 ms | ↓ 0.75x | 3 | 17m | 4d ago | 33m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.62% | 96.85% | 96.98% | 96.98% | 1204 ms | ↓ 0.58x | 5 | 3h 14m | 2d ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.62% | 99.21% | 96.89% | 96.89% | 2175 ms | → 1.00x | 10 | 1h 11m | 2d ago | 28m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.62% | 99.93% | 90.75% | 90.75% | 1152 ms | → 1.00x | 1 | 0s | 1d ago | 29m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.62% | 99.71% | 98.15% | 98.15% | 620 ms | ↓ 0.63x | 4 | 0s | 7d ago | 29m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.62% | 99.93% | 99.70% | 99.70% | 669 ms | ↓ 0.58x | 1 | 0s | 18h ago | 29m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.62% | 96.35% | 84.68% | 84.68% | 1189 ms | ↓ 0.67x | 2 | 10h | 5d ago | 29m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.62% | 99.00% | 98.87% | 98.87% | 1644 ms | → 1.04x | 2 | 2h 55m | 12h ago | 28m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.62% | 99.93% | 99.93% | 99.93% | 780 ms | ↓ 0.67x | 1 | 0s | 18h ago | 29m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.62% | 99.86% | 96.93% | 96.93% | 1063 ms | ↑ 1.07x | 2 | 0s | 17h ago | 29m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.62% | 99.07% | 98.47% | 98.47% | 3051 ms | ↓ 0.74x | 5 | 42m | 7d ago | 30m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.62% | 99.21% | 99.39% | 99.39% | 4814 ms | ↑ 1.23x | 9 | 6m | 13h ago | 28m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.62% | 90.86% | 83.04% | 83.04% | 1101 ms | ↓ 0.51x | 21 | 3h 16m | 7d ago | 30m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.62% | 98.42% | 97.33% | 97.33% | 1824 ms | ↓ 0.86x | 10 | 34m | 5d ago | 28m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.62% | 99.93% | 99.93% | 99.93% | 1234 ms | ↑ 1.13x | 1 | 0s | 8h ago | 25m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.62% | 99.64% | 99.64% | 99.64% | 1096 ms | → 1.04x | 1 | 0s | 2d ago | 25m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.62% | 99.78% | 98.03% | 98.03% | 513 ms | ↓ 0.63x | 3 | 0s | 2h ago | 26m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.62% | 99.78% | 99.85% | 99.85% | 1343 ms | ↓ 0.50x | 3 | 0s | 18h ago | 26m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 99.62% | 98.28% | 99.05% | 99.05% | 841 ms | → 1.01x | 5 | 1h 16m | 23h ago | 25m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.62% | 99.76% | 99.76% | 99.76% | 778 ms | ↓ 0.59x | 3 | 0s | 19h ago | 26m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.62% | 99.86% | 99.88% | 99.88% | 3316 ms | ↓ 0.53x | 2 | 0s | 7d ago | 26m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.35% | 99.88% | 93.56% | 93.56% | 2460 ms | → 1.00x | 2 | 27m | 5d ago | 43m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.35% | 99.95% | 99.98% | 99.98% | 802 ms | ↓ 0.91x | 1 | 4m | 5d ago | 43m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.35% | 99.95% | 99.98% | 99.98% | 947 ms | ↑ 2.17x | 1 | 4m | 5d ago | 43m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.35% | 99.88% | 36.26% | 36.26% | 1974 ms | → 1.02x | 3 | 2m | 5d ago | 43m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.35% | 99.86% | 93.41% | 93.41% | 3330 ms | ↑ 1.09x | 3 | 20m | 5d ago | 43m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.35% | 99.34% | 98.78% | 98.78% | 4441 ms | → 0.95x | 26 | 4s | 5d ago | 43m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.26% | 99.89% | 99.60% | 99.60% | 2614 ms | ↑ 1.11x | 1 | 2s | 1d ago | 42m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.25% | 99.87% | 99.74% | 99.74% | 1655 ms | ↓ 0.72x | 1 | 4s | 2d ago | 41m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.25% | 99.87% | 86.16% | 86.16% | 703 ms | ↓ 0.75x | 1 | 10s | 5d ago | 40m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.25% | 98.66% | 99.58% | 99.58% | 2631 ms | ↓ 0.90x | 19 | 2m | 2d ago | 41m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.24% | 98.51% | 74.06% | 74.06% | 896 ms | ↓ 0.71x | 6 | 1h 20m | 12h ago | 34m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.24% | 99.57% | 83.14% | 83.14% | 1713 ms | ↓ 0.56x | 5 | 41s | 5d ago | 33m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.24% | 99.72% | 83.43% | 83.43% | 1703 ms | ↓ 0.73x | 4 | 0s | 20h ago | 33m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.24% | 99.36% | 69.82% | 69.82% | 1415 ms | ↑ 1.13x | 9 | 0s | 2d ago | 34m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.24% | 98.51% | 86.81% | 86.81% | 4212 ms | ↓ 0.70x | 20 | 2m | 6d ago | 35m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 99.24% | 96.31% | 83.81% | 83.81% | 4617 ms | ↓ 0.79x | 46 | 4m | 5d ago | 33m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.24% | 99.79% | 99.80% | 99.80% | 1616 ms | ↓ 0.83x | 3 | 0s | 2d ago | 38m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.24% | 98.93% | 97.97% | 97.97% | 3593 ms | ↓ 0.78x | 10 | 13m | 7d ago | 30m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.24% | 99.86% | 92.73% | 92.73% | 2011 ms | ↓ 0.81x | 2 | 0s | 5d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.24% | 99.43% | 92.18% | 92.18% | 2635 ms | ↓ 0.93x | 8 | 0s | 3d ago | 31m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.24% | 74.64% | 92.85% | 92.85% | 3845 ms | ↓ 0.86x | 7 | 20h 26m | 5d ago | 30m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.23% | 99.28% | 99.28% | 99.28% | 691 ms | → 1.03x | 2 | 0s | 16h ago | 25m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.23% | 99.84% | 99.84% | 99.84% | 1251 ms | ↓ 0.55x | 1 | 3m | 1d ago | 26m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.23% | 99.71% | 99.89% | 99.89% | 920 ms | ↓ 0.54x | 3 | 59s | 2d ago | 26m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.23% | 99.44% | 99.44% | 99.44% | 505 ms | ↑ 1.31x | 1 | 4m | 4d ago | 25m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.23% | 98.50% | 98.50% | 98.50% | 1359 ms | ↓ 0.64x | 15 | 7m | 2h ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 99.23% | 99.84% | 99.84% | 99.84% | 349 ms | ↑ 1.27x | 1 | 4m | 5d ago | 26m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.03% | 99.38% | 91.95% | 91.95% | 2701 ms | → 0.97x | 24 | 12s | 1d ago | 43m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (42)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.87% | 99.53% | 99.64% | 99.64% | 960 ms | ↓ 0.70x | 6 | 48m | 3d ago | 40m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 98.87% | 99.40% | 22.99% | 22.99% | 2106 ms | ↓ 0.81x | 8 | 8m | 5d ago | 41m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.87% | 97.83% | 86.27% | 86.27% | 4140 ms | ↓ 0.78x | 30 | 2m | 1d ago | 39m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.85% | 91.68% | 93.57% | 93.57% | 879 ms | ↓ 0.51x | 75 | 14m | 1d ago | 27m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 98.85% | 30.21% | 46.33% | 46.33% | 161 ms | ↓ 0.22x | 4 | 4d 13h | 7d ago | 30m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 98.85% | 96.43% | 84.97% | 84.97% | 4270 ms | ↓ 0.80x | 45 | 3m | 2d ago | 31m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 98.85% | 99.78% | 99.81% | 99.81% | 1155 ms | ↓ 0.64x | 2 | 2m | 3d ago | 26m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 98.85% | 99.28% | 99.65% | 99.65% | 1529 ms | ↓ 0.67x | 5 | 36m | 17h ago | 27m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.85% | 98.06% | 93.44% | 93.44% | 4504 ms | ↓ 0.73x | 26 | 2m | 2d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 98.71% | 86.37% | 77.98% | 77.98% | 3819 ms | ↓ 0.77x | 78 | 2h 32m | 1d ago | 43m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.52% | 57.74% | 95.68% | 95.68% | 2700 ms | ↓ 0.90x | 2 | 4d 7h | 16d ago | 42m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.47% | 99.35% | 98.74% | 98.74% | 1057 ms | ↑ 1.11x | 8 | 17s | 4d ago | 28m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 98.11% | 98.84% | 33.92% | 33.92% | 1752 ms | ↓ 0.87x | 5 | 50m | 3d ago | 39m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.10% | 99.50% | 97.56% | 97.56% | 2214 ms | ↓ 0.90x | 7 | 0s | 2d ago | 35m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.10% | 96.43% | 98.45% | 98.45% | 3828 ms | ↓ 0.79x | 49 | 1m | 24h ago | 37m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.09% | 97.35% | 92.74% | 92.74% | 4790 ms | ↑ 1.27x | 21 | 18m | 21h ago | 28m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 98.08% | 99.64% | 98.36% | 98.36% | 1830 ms | ↓ 0.89x | 3 | 3m | 3d ago | 26m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 98.08% | 97.17% | 97.17% | 97.17% | 4460 ms | ↓ 0.82x | 33 | 3m | 2d ago | 25m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.33% | 97.07% | 54.93% | 54.93% | 2835 ms | ↓ 0.76x | 39 | 1m | 8h ago | 30m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 97.05% | 99.58% | 81.31% | 81.31% | 1861 ms | ↓ 0.87x | 1 | 3h | 3d ago | 42m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.96% | 94.12% | 73.95% | 73.95% | 1392 ms | ↓ 0.63x | 20 | 1h 9m | 3d ago | 33m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 96.95% | 98.06% | 83.72% | 83.72% | 1269 ms | ↓ 0.84x | 9 | 49m | 4d ago | 28m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 96.93% | 99.43% | 99.44% | 99.44% | 863 ms | ↓ 0.56x | 2 | 3h 1m | 6d ago | 26m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 95.79% | 98.89% | 98.89% | 98.89% | 939 ms | ↓ 0.87x | 3 | 1h 40m | 24h ago | 26m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 95.44% | 88.39% | 23.30% | 23.30% | 3970 ms | ↓ 0.74x | 123 | 12m | 2d ago | 35m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 95.40% | 85.14% | 38.98% | 38.98% | 3246 ms | ↓ 0.53x | 137 | 14m | 17h ago | 26m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 94.64% | 98.64% | 98.59% | 98.59% | 2553 ms | → 0.99x | 13 | 12m | 1d ago | 27m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 92.78% | 97.73% | 91.72% | 91.72% | 1561 ms | ↓ 0.88x | 31 | 58s | 2d ago | 33m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.98% | 88.36% | 60.82% | 60.82% | 2815 ms | ↓ 0.68x | 134 | 6m | 1d ago | 29m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 91.32% | 71.19% | 96.31% | 96.31% | 4429 ms | ↓ 0.71x | 287 | 14m | 2d ago | 40m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 87.83% | 75.34% | 27.62% | 27.62% | 3868 ms | ↓ 0.63x | 213 | 19m | 2d ago | 33m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 85.88% | 91.55% | 95.23% | 95.23% | 1436 ms | ↓ 0.90x | 20 | 2h 11m | 1d ago | 29m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 85.44% | 77.82% | 81.79% | 81.79% | 4164 ms | ↓ 0.73x | 186 | 19m | 23h ago | 25m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 83.71% | 75.28% | 63.10% | 63.10% | 4555 ms | ↓ 0.79x | 254 | 13m | 1d ago | 39m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 81.37% | 92.14% | 20.72% | 20.72% | 3331 ms | ↑ 1.05x | 97 | 6m | 13h ago | 38m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 79.34% | 75.56% | 94.10% | 94.10% | 3010 ms | ↓ 0.92x | 12 | 7h 28m | 2d ago | 42m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 71.32% | 94.45% | 96.48% | 96.48% | 2104 ms | ↓ 0.69x | 2 | 1d 12h | 4d ago | 41m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 53.41% | 89.21% | 21.70% | 21.70% | 3082 ms | ↑ 1.08x | 58 | 57m | 2h ago | 39m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 46.77% | 8.70% | 78.12% | 78.12% | 1579 ms | → 1.00x | 96 | 6h 13m | 11h ago | 35m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 39.69% | 35.07% | 64.49% | 64.49% | 2493 ms | ↑ 1.07x | 3 | 5d 19h | 7d ago | 30m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 39.16% | 4.50% | 50.48% | 50.48% | 2267 ms | ↓ 0.68x | 149 | 3h 59m | 1d ago | 43m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 1.91% | 22.16% | 25.08% | 25.08% | 839 ms | ↓ 0.46x | 4 | 6d 2h | 18h ago | 29m ago |

</details>

<details open>
<summary><strong>🔴 Down (269)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.23% | 99.71% | 99.78% | 99.78% | 704 ms | ↓ 0.92x | 3 | 24m | 2h ago | 27m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 98.48% | 99.29% | 99.79% | 99.79% | 3024 ms | ↑ 1.41x | 5 | 39m | 3h ago | 35m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 98.08% | 99.64% | 99.89% | 99.89% | 2305 ms | ↑ 1.08x | 1 | 4h 13m | 5h ago | 27m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 93.10% | 98.11% | 98.11% | 98.11% | 2026 ms | ↓ 0.65x | 5 | 3h 15m | 15h ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 68.82% | 91.65% | 96.18% | 96.18% | 1505 ms | ↓ 0.88x | 8 | 8h 5m | 2d ago | 38m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 60.54% | 92.38% | 92.38% | 92.38% | 1634 ms | ↓ 0.82x | 2 | 1d 8h | 3d ago | 25m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 55.94% | 91.60% | 92.50% | 92.50% | 915 ms | ↓ 0.78x | 3 | 23h 4m | 3d ago | 27m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 53.05% | 91.21% | 85.65% | 85.65% | 1287 ms | ↓ 0.52x | 95 | 17m | 1d ago | 29m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 46.21% | 90.07% | 32.44% | 32.44% | 1322 ms | ↑ 1.10x | 2 | 1d 17h | 3d ago | 39m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 32.06% | 44.19% | 75.61% | 75.61% | 4996 ms | ↑ 1.30x | 228 | 1h 16m | 4h ago | 28m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 25.48% | 85.85% | 22.75% | 22.75% | 544 ms | ↓ 0.61x | 4 | 1d 3h | 5d ago | 35m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 22.52% | 85.42% | 66.31% | 66.31% | 3706 ms | ↑ 1.60x | 8 | 13h 52m | 4d ago | 29m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 19.47% | 83.85% | 83.49% | 83.49% | 1437 ms | ↓ 0.68x | 3 | 1d 17h | 4d ago | 29m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 11.03% | 80.99% | 74.31% | 74.31% | 3004 ms | ↓ 0.51x | 36 | 3h 51m | 6d ago | 38m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 1.52% | 81.33% | 19.84% | 19.84% | 1383 ms | ↓ 0.64x | 6 | 1d 3h | 7d ago | 36m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.38% | 56.80% | 46.48% | 46.48% | 74 ms | ↓ 0.27x | 3 | 5d 8h | 2h ago | 34m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.32% | 76.32% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.39% | 63.39% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.22% | 68.22% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 36.43% | 36.43% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.91% | 70.91% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.60% | 52.60% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.25% | 10.25% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 74.03% | 89.37% | 89.37% | — | — | 1 | 11d 23h | 12d ago | 27m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.49% | 47.49% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 34.31% | 74.49% | 74.49% | — | — | 10 | 2d 4h | 22d ago | 26m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.14% | 3.14% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 8.01% | 80.18% | 80.18% | — | — | 1 | 28d 1h | 28d ago | 29m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 76.75% | 76.75% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.69% | 33.69% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 72.15% | 90.61% | 90.61% | — | — | 2 | 6d 4h | 12d ago | 29m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.77% | 83.77% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.13% | 21.13% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.31% | 67.31% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 44.58% | 44.58% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.09% | 27.09% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.76% | 84.76% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.37% | 75.37% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.95% | 57.95% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.05% | 71.05% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 20h | 28d ago | 42m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.18% | 13.18% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.58% | 44.58% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.51% | 87.51% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.36% | 30.36% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 20.82% | 69.20% | 69.20% | — | — | 1 | 24d 21h | 25d ago | 26m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 81.60% | 98.28% | 98.28% | — | — | 2 | 3d 11h | 7d ago | 39m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 21.74% | 31.82% | 31.82% | — | — | 3 | 8d 4h | 25d ago | 28m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.90% | 78.90% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 42.28% | 76.76% | 76.76% | — | — | 6 | 3d 6h | 19d ago | 27m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 28.86% | 72.91% | 72.91% | — | — | 1 | 22d 24h | 23d ago | 26m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 77.38% | 77.38% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.69% | 48.96% | 48.96% | — | — | 6 | 4d 23h | 10d ago | 39m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 24.70% | 24.70% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 47.92% | 47.92% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 35.20% | 31.93% | 31.93% | — | — | 3 | 6d 10h | 8d ago | 33m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.90% | 1.90% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.55% | 84.55% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 4.24% | 32.76% | 32.76% | — | — | 1 | 28d 23h | 29d ago | 26m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.92% | 64.92% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 66.67% | 66.67% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 21.74% | 69.78% | 69.78% | — | — | 3 | 8d 4h | 25d ago | 28m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 53.05% | 39.68% | 39.68% | — | — | 4 | 4d 6h | 17d ago | 26m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 52.59% | 64.48% | 64.48% | — | — | 5 | 3d 10h | 17d ago | 33m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.42% | 26.42% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.50% | 50.50% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 44.16% | 44.16% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.11% | 22.11% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.49% | 68.49% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 65.46% | 32.52% | 32.52% | — | — | 2 | 6d 7h | 9d ago | 35m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 38.71% | 38.71% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.62% | 48.62% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.79% | 46.79% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.37% | 21.37% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.64% | 4.64% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.75% | 60.75% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.33% | 75.33% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 4.07% | 68.77% | 68.77% | — | — | 1 | 29d 1h | 29d ago | 29m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.54% | 5.54% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.62% | 73.62% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.27% | 74.27% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.47% | 28.47% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 84.18% | 84.18% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.22% | 20.22% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.88% | 48.88% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 44.78% | 84.03% | 84.03% | — | — | 1 | 18d 14h | 19d ago | 41m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 17.01% | 17.01% | 17.01% | — | — | 2 | 12d | 24d ago | 26m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 21.74% | 68.22% | 68.22% | — | — | 3 | 8d 4h | 25d ago | 28m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 46.52% | 78.99% | 78.99% | — | — | 3 | 6d 5h | 19d ago | 27m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 21.31% | 75.15% | 75.15% | — | — | 10 | 2d 11h | 25d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.01% | 48.01% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 13.69% | 14.48% | 14.48% | — | — | 8 | 3d 2h | 25d ago | 28m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.09% | 6.09% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.94% | 55.94% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.26% | 43.26% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 3.59% | 16.71% | 16.71% | — | — | 1 | 29d 3h | 29d ago | 28m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.21% | 39.21% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 19.31% | 74.40% | 74.40% | — | — | 3 | 7d 21h | 24d ago | 42m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.70% | 20.70% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 68.67% | 68.67% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.46% | 54.46% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 38.84% | 76.29% | 76.29% | — | — | 1 | 20d 14h | 21d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.60% | 35.60% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 66.10% | 66.10% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.86% | 70.86% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.66% | 62.66% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.35% | 2.35% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.09% | 77.09% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.69% | 38.69% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.65% | 90.65% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.07% | 77.07% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.24% | 30.24% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.21% | 75.21% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.88% | 42.88% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 17.55% | 17.55% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.03% | 40.03% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.14% | 66.14% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 58.30% | 58.30% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.11% | 24.11% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.41% | 73.41% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.88% | 2.88% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.62% | 39.62% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 70.98% | 70.98% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 54.86% | 54.86% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 8.32% | 20.92% | 20.92% | — | — | 1 | 27d 23h | 28d ago | 27m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.73% | 33.73% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 53.17% | 53.17% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.57% | 82.57% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 14.11% | 92.74% | 92.74% | — | — | 2 | 12d 22h | 26d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.27% | 23.27% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.75% | 10.75% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.36% | 22.36% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.17% | 49.17% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.41% | 86.41% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 48.60% | 48.60% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.30% | 65.30% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 65.31% | 92.49% | 92.49% | — | — | 2 | 7d | 14d ago | 31m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 7.80% | 7.80% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.25% | 16.25% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.04% | 46.04% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.18% | 46.18% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.89% | 16.89% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.32% | 51.32% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 88.30% | 88.30% | — | — | 1 | 27d 20h | 28d ago | 36m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.62% | 35.62% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.55% | 19.55% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 28.89% | 28.89% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.16% | 5.16% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.55% | 72.55% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.79% | 83.79% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 47.12% | 47.12% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 76.98% | 76.98% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.98% | 75.98% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.52% | 52.52% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.81% | 68.81% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 75.82% | 75.82% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 21h | 28d ago | 27m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.12% | 18.12% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.35% | 54.35% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.62% | 35.62% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.79% | 3.79% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.62% | 31.62% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.64% | 63.64% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.29% | 22.29% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.71% | 6.71% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.11% | 54.11% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.77% | 22.77% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 36m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.72% | 62.72% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 31.09% | 31.09% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 21.74% | 69.25% | 69.25% | — | — | 3 | 8d 4h | 25d ago | 28m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.83% | 3.83% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 19h | 28d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.44% | 44.44% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.24% | 38.24% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 30.10% | 30.10% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.25% | 17.25% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.09% | 5.09% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.18% | 10.18% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.71% | 16.71% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.80% | 14.80% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.63% | 25.63% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.00% | 9.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.53% | 6.53% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.69% | 0.69% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.95% | 3.95% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.57% | 4.57% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.36% | 46.36% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 70.64% | 77.63% | 77.63% | — | — | 2 | 6d 9h | 13d ago | 26m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.48% | 36.48% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.00% | 77.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.70% | 63.70% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.30% | 40.30% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.33% | 77.33% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.81% | 43.81% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 38m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 37m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.42% | 38.42% | — | — | 1 | 29d 23h | 30d ago | 40m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.36% | 1.36% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.62% | 17.62% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.24% | 75.24% | — | — | 1 | 29d 23h | 30d ago | 35m ago |

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
