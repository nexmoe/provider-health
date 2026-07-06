# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**675 providers** — 360 🟢 operational · 43 🟡 degraded · 272 🔴 down · 0 ⚫ unknown

_Updated 2026-07-06 07:17 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (360)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.44% | 98.44% | 920 ms | ↑ 1.19x | 0 | — | — | 59m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.93% | 94.22% | 94.22% | 680 ms | ↓ 0.44x | 1 | 0s | 30d ago | 1h ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 98.69% | 73.95% | 73.95% | 898 ms | ↓ 0.75x | 5 | 1h 24m | 7d ago | 1h ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.79% | 24.09% | 24.09% | 3045 ms | ↓ 0.91x | 3 | 0s | 26d ago | 1h ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.56% | 97.56% | 3026 ms | ↓ 0.81x | 0 | — | — | 1h ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 59.49% | 59.49% | 1800 ms | ↑ 1.10x | 0 | — | — | 1h ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.37% | 99.59% | 99.59% | 815 ms | ↓ 0.85x | 4 | 35m | 14d ago | 55m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.86% | 98.72% | 98.72% | 1011 ms | ↓ 0.86x | 2 | 0s | 16d ago | 1h ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.61% | 99.61% | 2909 ms | ↓ 0.80x | 0 | — | — | 1h ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.79% | 95.79% | 1924 ms | ↓ 0.72x | 0 | — | — | 1h ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2304 ms | ↑ 1.09x | 0 | — | — | 57m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.99% | 97.99% | 2209 ms | ↓ 0.66x | 0 | — | — | 1h ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 94.91% | 96.99% | 96.99% | 975 ms | ↓ 0.60x | 3 | 17h 47m | 10d ago | 58m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.94% | 99.94% | 2150 ms | → 1.02x | 1 | 0s | 17d ago | 57m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1157 ms | ↑ 1.08x | 0 | — | — | 55m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.79% | 98.79% | 1155 ms | ↓ 0.67x | 0 | — | — | 1h ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 97.01% | 96.97% | 96.97% | 1227 ms | ↓ 0.62x | 4 | 4h 2m | 13d ago | 60m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.06% | 99.06% | 512 ms | ↓ 0.47x | 0 | — | — | 58m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.88% | 39.88% | 645 ms | ↓ 0.62x | 0 | — | — | 1h ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1553 ms | ↓ 0.86x | 0 | — | — | 55m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.79% | 99.86% | 99.86% | 1234 ms | ↓ 0.72x | 2 | 10m | 10d ago | 60m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.19% | 97.19% | 2414 ms | ↓ 0.88x | 0 | — | — | 1h ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.87% | 98.92% | 98.92% | 1204 ms | → 0.97x | 1 | 30m | 27d ago | 1h ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 898 ms | ↓ 0.75x | 0 | — | — | 56m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.86% | 97.00% | 97.00% | 519 ms | ↓ 0.69x | 2 | 0s | 17d ago | 1h ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 100.00% | 88.65% | 88.65% | 1697 ms | ↓ 0.81x | 0 | — | — | 1h ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.93% | 99.94% | 99.94% | 1482 ms | ↓ 0.82x | 1 | 0s | 15d ago | 57m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.51% | 99.72% | 99.72% | 1490 ms | ↓ 0.63x | 3 | 39m | 11d ago | 57m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.54% | 98.54% | 2894 ms | ↓ 0.68x | 0 | — | — | 1h ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.80% | 80.11% | 80.11% | 1962 ms | ↓ 0.89x | 3 | 0s | 13d ago | 1h ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.65% | 99.67% | 99.67% | 1329 ms | ↓ 0.84x | 3 | 19m | 21d ago | 58m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.93% | 99.95% | 99.95% | 913 ms | ↓ 0.71x | 1 | 0s | 23d ago | 56m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.88% | 97.88% | 1487 ms | → 0.98x | 0 | — | — | 1h ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.93% | 99.98% | 99.98% | 399 ms | ↓ 0.70x | 1 | 0s | 14d ago | 1h ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.93% | 99.75% | 99.75% | 3292 ms | → 1.03x | 1 | 0s | 14d ago | 1h ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.93% | 99.10% | 99.10% | 303 ms | ↓ 0.71x | 1 | 0s | 14d ago | 1h ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.67% | 99.01% | 99.01% | 4441 ms | ↓ 0.91x | 5 | 0s | 7d ago | 1h ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.97% | 97.97% | 3523 ms | ↓ 0.81x | 0 | — | — | 1h ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 98.89% | 99.64% | 99.64% | 1965 ms | ↓ 0.90x | 2 | 3h 20m | 17d ago | 1h ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.66% | 96.66% | 685 ms | ↓ 0.74x | 0 | — | — | 1h ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1173 ms | ↓ 0.79x | 0 | — | — | 55m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 582 ms | ↓ 0.31x | 0 | — | — | 56m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1564 ms | ↓ 0.94x | 2 | 0s | 21d ago | 55m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.86% | 99.08% | 99.08% | 2512 ms | ↓ 0.78x | 2 | 0s | 18d ago | 57m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.93% | 99.87% | 99.87% | 985 ms | ↓ 0.68x | 1 | 0s | 27d ago | 60m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 99.87% | 99.87% | 757 ms | ↑ 1.11x | 0 | — | — | 55m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 100.00% | 92.26% | 91.59% | 91.59% | 659 ms | ↓ 0.36x | 21 | 1h 54m | 10d ago | 55m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 3109 ms | ↓ 0.77x | 0 | — | — | 1h ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 100.00% | 99.74% | 99.74% | 900 ms | → 1.02x | 0 | — | — | 1h ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1240 ms | ↑ 1.10x | 0 | — | — | 55m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.93% | 96.74% | 96.74% | 1745 ms | ↓ 0.70x | 1 | 0s | 15d ago | 60m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 100.00% | 98.37% | 21.96% | 21.96% | 3542 ms | ↓ 0.78x | 24 | 0s | 11d ago | 1h ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 100.00% | 89.97% | 93.54% | 93.54% | 883 ms | ↓ 0.50x | 79 | 19m | 10d ago | 58m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 100.00% | 98.08% | 98.08% | 3663 ms | ↑ 1.13x | 0 | — | — | 1h ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 999 ms | ↓ 0.75x | 0 | — | — | 58m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 606 ms | ↑ 1.13x | 0 | — | — | 57m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.79% | 99.83% | 99.83% | 702 ms | ↓ 0.93x | 3 | 0s | 25d ago | 57m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.97% | 96.97% | 511 ms | ↓ 0.64x | 0 | — | — | 1h ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 841 ms | ↓ 0.76x | 0 | — | — | 55m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.79% | 56.79% | 859 ms | ↓ 0.50x | 0 | — | — | 1h ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.54% | 98.64% | 98.64% | 696 ms | → 0.95x | 2 | 4h 33m | 25d ago | 55m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 882 ms | ↓ 0.61x | 0 | — | — | 56m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.65% | 99.65% | 3419 ms | ↓ 0.82x | 0 | — | — | 1h ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 99.58% | 87.55% | 87.55% | 837 ms | ↓ 0.57x | 5 | 6m | 10d ago | 56m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.26% | 97.26% | 1185 ms | ↓ 0.95x | 0 | — | — | 1h ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.79% | 99.05% | 99.05% | 1434 ms | ↑ 1.34x | 2 | 10m | 9d ago | 56m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 99.18% | 99.18% | 828 ms | ↓ 0.69x | 1 | 0s | 23d ago | 1h ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.97% | 50.01% | 50.01% | 2068 ms | ↓ 0.77x | 8 | 1h 3m | 13d ago | 1h ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.47% | 84.47% | 2024 ms | ↓ 0.69x | 0 | — | — | 1h ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.79% | 68.30% | 68.30% | 1130 ms | ↓ 0.88x | 2 | 10m | 16d ago | 1h ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 899 ms | ↑ 1.21x | 0 | — | — | 58m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.84% | 98.84% | 2211 ms | ↓ 0.78x | 0 | — | — | 1h ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 3238 ms | ↓ 0.75x | 0 | — | — | 56m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.23% | 93.23% | 593 ms | ↓ 0.74x | 0 | — | — | 1h ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 100.00% | 98.68% | 98.67% | 98.67% | 1888 ms | ↓ 0.67x | 19 | 0s | 8d ago | 56m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.81% | 98.81% | 1140 ms | ↓ 0.80x | 0 | — | — | 1h ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 100.00% | 99.85% | 99.85% | 650 ms | ↑ 1.19x | 0 | — | — | 1h ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.50% | 99.50% | 676 ms | ↓ 0.77x | 0 | — | — | 58m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 99.92% | 99.92% | 99.92% | 911 ms | ↓ 0.53x | 1 | 0s | 12d ago | 56m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.93% | 98.14% | 98.14% | 3141 ms | ↑ 1.39x | 1 | 0s | 26d ago | 1h ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.93% | 90.66% | 90.66% | 1107 ms | → 0.99x | 1 | 0s | 29d ago | 1h ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.86% | 49.90% | 49.90% | 901 ms | ↓ 0.51x | 2 | 0s | 16d ago | 1h ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1124 ms | ↓ 0.54x | 0 | — | — | 56m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.82% | 77.82% | 1000 ms | ↓ 0.58x | 0 | — | — | 1h ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.65% | 96.78% | 96.78% | 1049 ms | ↓ 0.79x | 1 | 2h 1m | 18d ago | 56m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.46% | 56.78% | 56.78% | 1466 ms | ↓ 0.90x | 8 | 0s | 12d ago | 1h ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 965 ms | ↓ 0.81x | 0 | — | — | 56m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 100.00% | 98.41% | 68.78% | 68.78% | 4373 ms | ↓ 0.82x | 19 | 6m | 10d ago | 1h ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.36% | 98.36% | 2392 ms | ↓ 0.92x | 0 | — | — | 1h ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.38% | 54.49% | 54.49% | 854 ms | ↓ 0.68x | 5 | 24m | 16d ago | 1h ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 844 ms | ↓ 0.92x | 0 | — | — | 55m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1239 ms | ↓ 0.46x | 0 | — | — | 56m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1008 ms | → 1.00x | 0 | — | — | 55m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.86% | 99.84% | 99.84% | 1640 ms | ↓ 0.75x | 2 | 0s | 18d ago | 55m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.86% | 83.36% | 83.36% | 1544 ms | ↓ 0.74x | 2 | 0s | 27d ago | 1h ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.86% | 64.68% | 64.68% | 534 ms | ↓ 0.73x | 2 | 0s | 16d ago | 1h ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.11% | 98.11% | 2645 ms | ↑ 1.27x | 0 | — | — | 1h ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.89% | 99.89% | 1775 ms | ↓ 0.81x | 0 | — | — | 57m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 94.76% | 99.33% | 99.33% | 2695 ms | ↓ 0.74x | 5 | 5h 45m | 21d ago | 1h ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 62.44% | 62.44% | 1504 ms | ↓ 0.91x | 0 | — | — | 1h ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 65.37% | 65.37% | 1042 ms | ↓ 0.63x | 0 | — | — | 1h ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.72% | 99.88% | 99.88% | 1486 ms | ↓ 0.90x | 1 | 1h 9m | 20d ago | 58m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.26% | 99.26% | 1531 ms | ↓ 0.76x | 0 | — | — | 1h ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1467 ms | → 0.99x | 0 | — | — | 1h ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 100.00% | 99.61% | 99.61% | 535 ms | ↓ 0.70x | 0 | — | — | 1h ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.73% | 97.99% | 97.99% | 848 ms | ↓ 0.43x | 1 | 12h 2m | 21d ago | 1h ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.87% | 91.04% | 91.04% | 2320 ms | ↓ 0.79x | 2 | 1d 13h | 24d ago | 55m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.93% | 22.59% | 22.59% | 928 ms | ↓ 0.50x | 1 | 0s | 13d ago | 1h ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1601 ms | ↓ 0.68x | 0 | — | — | 56m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.08% | 99.08% | 2961 ms | ↓ 0.79x | 0 | — | — | 1h ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 95.98% | 99.48% | 99.48% | 3136 ms | ↓ 0.73x | 3 | 9h 27m | 9d ago | 1h ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.28% | 98.28% | 2941 ms | ↓ 0.78x | 0 | — | — | 1h ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.93% | 99.90% | 99.90% | 785 ms | ↓ 0.89x | 1 | 0s | 14d ago | 1h ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 77.36% | 77.36% | 2026 ms | ↓ 0.89x | 0 | — | — | 1h ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 99.92% | 99.92% | 99.92% | 1100 ms | → 0.96x | 1 | 0s | 11d ago | 57m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2546 ms | ↑ 1.16x | 0 | — | — | 55m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.37% | 98.36% | 98.36% | 813 ms | ↓ 0.62x | 7 | 8m | 22d ago | 56m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.30% | 99.69% | 99.69% | 1601 ms | ↓ 0.92x | 1 | 2h 60m | 28d ago | 58m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1595 ms | ↓ 0.90x | 0 | — | — | 1h ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.74% | 99.74% | 622 ms | ↓ 0.63x | 0 | — | — | 1h ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.93% | 99.65% | 99.65% | 1789 ms | ↓ 0.71x | 1 | 0s | 27d ago | 1h ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.24% | 90.24% | 812 ms | ↓ 0.68x | 0 | — | — | 1h ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 100.00% | 100.00% | 100.00% | 100.00% | 829 ms | → 1.03x | 0 | — | — | 55m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.65% | 80.91% | 80.91% | 1918 ms | ↓ 0.87x | 3 | 20m | 11d ago | 1h ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.83% | 99.83% | 1069 ms | → 1.05x | 0 | — | — | 1h ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 786 ms | ↑ 1.19x | 0 | — | — | 57m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.64% | 86.64% | 2158 ms | ↓ 0.85x | 0 | — | — | 1h ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1234 ms | ↓ 0.55x | 0 | — | — | 56m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1763 ms | ↓ 0.84x | 0 | — | — | 1h ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.09% | 99.09% | 445 ms | ↓ 0.55x | 0 | — | — | 1h ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.76% | 97.76% | 1709 ms | ↓ 0.84x | 0 | — | — | 1h ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 99.94% | 99.94% | 1456 ms | ↓ 0.83x | 0 | — | — | 55m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.93% | 99.94% | 99.94% | 1406 ms | → 0.95x | 1 | 0s | 22d ago | 57m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.93% | 99.95% | 99.95% | 824 ms | ↓ 0.50x | 1 | 0s | 27d ago | 56m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1442 ms | ↓ 0.70x | 0 | — | — | 56m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.86% | 98.95% | 98.95% | 612 ms | ↑ 1.79x | 1 | 29m | 14d ago | 1h ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.86% | 99.23% | 99.23% | 1288 ms | ↓ 0.87x | 2 | 0s | 11d ago | 58m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.02% | 99.02% | 2656 ms | ↓ 0.84x | 0 | — | — | 1h ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 91.54% | 91.54% | 611 ms | ↓ 0.83x | 0 | — | — | 58m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.59% | 22.45% | 22.45% | 2191 ms | ↓ 0.68x | 5 | 6m | 8d ago | 1h ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 99.86% | 98.02% | 98.02% | 513 ms | ↓ 0.69x | 2 | 0s | 12d ago | 56m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 99.84% | 99.84% | 903 ms | ↑ 1.20x | 0 | — | — | 55m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 99.91% | 99.91% | 938 ms | ↓ 0.53x | 0 | — | — | 56m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 26.48% | 26.48% | 1237 ms | ↓ 0.55x | 0 | — | — | 1h ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.85% | 99.85% | 2309 ms | ↓ 0.86x | 0 | — | — | 1h ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.38% | 98.79% | 98.79% | 189 ms | ↓ 0.59x | 4 | 38m | 12d ago | 1h ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 750 ms | ↑ 1.11x | 0 | — | — | 1h ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.93% | 98.40% | 98.40% | 1207 ms | ↓ 0.69x | 1 | 0s | 18d ago | 59m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.87% | 99.74% | 99.74% | 2509 ms | ↓ 0.82x | 2 | 0s | 13d ago | 1h ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.23% | 98.23% | 1059 ms | → 1.02x | 0 | — | — | 1h ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.86% | 22.45% | 22.45% | 602 ms | ↓ 0.47x | 2 | 0s | 16d ago | 1h ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.75% | 99.75% | 400 ms | ↓ 0.58x | 0 | — | — | 1h ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 100.00% | 99.76% | 99.76% | 1555 ms | ↓ 0.79x | 0 | — | — | 1h ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2695 ms | ↑ 1.34x | 0 | — | — | 1h ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 99.86% | 99.94% | 99.94% | 2321 ms | ↓ 0.93x | 1 | 21m | 12d ago | 57m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 59.48% | 34.24% | 34.24% | 1839 ms | ↓ 0.88x | 2 | 5d 1h | 16d ago | 1h ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 96.14% | 97.99% | 97.99% | 1642 ms | ↓ 0.75x | 30 | 26m | 26d ago | 1h ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.68% | 99.68% | 2134 ms | ↓ 0.87x | 0 | — | — | 1h ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.93% | 99.37% | 99.37% | 1907 ms | ↓ 0.83x | 1 | 0s | 27d ago | 1h ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.95% | 45.34% | 45.34% | 582 ms | ↓ 0.78x | 1 | 0s | 26d ago | 1h ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.93% | 98.65% | 98.65% | 1228 ms | ↓ 0.56x | 1 | 0s | 14d ago | 1h ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 100.00% | 99.03% | 92.95% | 92.95% | 715 ms | ↓ 0.77x | 10 | 12m | 10d ago | 60m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1035 ms | ↓ 0.82x | 0 | — | — | 1h ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2502 ms | ↓ 0.86x | 0 | — | — | 1h ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.02% | 99.73% | 99.73% | 315 ms | ↑ 1.64x | 10 | 10m | 13d ago | 1h ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 100.00% | 99.83% | 99.83% | 1343 ms | ↓ 0.89x | 0 | — | — | 1h ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.93% | 21.96% | 21.96% | 757 ms | ↓ 0.83x | 1 | 0s | 23d ago | 1h ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.64% | 99.29% | 99.29% | 722 ms | ↓ 0.59x | 3 | 30m | 7d ago | 1h ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 1985 ms | ↓ 0.76x | 0 | — | — | 1h ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.72% | 99.72% | 664 ms | ↓ 0.55x | 0 | — | — | 59m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 535 ms | ↑ 1.15x | 0 | — | — | 55m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.59% | 91.02% | 91.02% | 981 ms | ↓ 0.81x | 6 | 0s | 8d ago | 1h ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 616 ms | ↓ 0.88x | 0 | — | — | 1h ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.94% | 62.94% | 1244 ms | ↓ 0.87x | 0 | — | — | 1h ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.79% | 24.57% | 24.57% | 641 ms | ↓ 0.52x | 3 | 0s | 10d ago | 1h ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 70.85% | 88.00% | 88.00% | 548 ms | ↓ 0.63x | 4 | 1d 20h | 19d ago | 56m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2594 ms | ↓ 0.91x | 0 | — | — | 1h ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.09% | 98.88% | 98.88% | 1776 ms | ↑ 1.07x | 1 | 5h 50m | 22d ago | 58m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 99.21% | 99.21% | 99.21% | 1740 ms | ↓ 0.74x | 1 | 2h 37m | 16d ago | 55m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.11% | 65.79% | 65.79% | 1226 ms | ↓ 0.87x | 3 | 1h 32m | 16d ago | 1h ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.93% | 89.68% | 89.68% | 1439 ms | ↓ 0.80x | 1 | 0s | 23d ago | 1h ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 24.20% | 24.20% | 1413 ms | ↓ 0.82x | 3 | 40m | 20d ago | 1h ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.45% | 98.99% | 98.99% | 2577 ms | ↑ 1.17x | 4 | 30m | 20d ago | 1h ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.86% | 89.65% | 89.65% | 853 ms | ↓ 0.63x | 2 | 0s | 22d ago | 58m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.93% | 99.90% | 99.90% | 848 ms | ↓ 0.59x | 1 | 0s | 26d ago | 1h ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1018 ms | ↓ 0.90x | 0 | — | — | 1h ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.93% | 48.94% | 48.94% | 635 ms | → 0.99x | 1 | 0s | 26d ago | 1h ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.94% | 99.62% | 99.62% | 872 ms | ↓ 0.87x | 1 | 0s | 11d ago | 1h ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1104 ms | ↓ 0.71x | 0 | — | — | 56m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.95% | 99.95% | 780 ms | ↓ 0.72x | 0 | — | — | 60m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.06% | 98.87% | 98.87% | 2716 ms | ↓ 0.74x | 2 | 8h 60m | 17d ago | 1h ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.67% | 98.67% | 1466 ms | ↓ 0.80x | 0 | — | — | 1h ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.65% | 98.33% | 98.33% | 852 ms | ↑ 1.07x | 1 | 1h 40m | 18d ago | 1h ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.93% | 96.91% | 96.91% | 1057 ms | ↑ 1.07x | 1 | 0s | 25d ago | 1h ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.61% | 71.61% | 1103 ms | ↓ 0.89x | 0 | — | — | 1h ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1243 ms | ↓ 0.82x | 0 | — | — | 55m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1202 ms | ↓ 0.90x | 0 | — | — | 55m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.93% | 82.13% | 82.13% | 1807 ms | ↓ 0.64x | 1 | 0s | 26d ago | 1h ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 1669 ms | ↓ 0.70x | 0 | — | — | 1h ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 1150 ms | ↓ 0.86x | 0 | — | — | 56m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.93% | 99.87% | 99.87% | 672 ms | ↓ 0.87x | 1 | 0s | 27d ago | 1h ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 86.17% | 38.03% | 38.03% | 1897 ms | ↓ 0.92x | 13 | 5h 54m | 18d ago | 1h ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 87.21% | 31.71% | 31.71% | 2579 ms | ↑ 1.07x | 2 | 1d 14h | 27d ago | 60m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 96.67% | 56.38% | 56.38% | 1217 ms | ↑ 1.85x | 8 | 2h 1m | 10d ago | 1h ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.86% | 91.79% | 91.79% | 657 ms | ↑ 1.41x | 1 | 30m | 8d ago | 1h ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.34% | 99.34% | 2244 ms | ↓ 0.88x | 0 | — | — | 1h ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.86% | 69.24% | 69.24% | 1123 ms | ↓ 0.89x | 2 | 0s | 12d ago | 1h ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.86% | 96.86% | 970 ms | ↓ 0.69x | 0 | — | — | 1h ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.89% | 99.89% | 1355 ms | ↓ 0.82x | 0 | — | — | 56m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.93% | 24.19% | 24.19% | 2198 ms | ↓ 0.93x | 1 | 0s | 13d ago | 1h ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2331 ms | ↓ 0.88x | 0 | — | — | 1h ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.72% | 97.79% | 97.79% | 702 ms | ↑ 1.17x | 2 | 31m | 15d ago | 57m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1572 ms | ↓ 0.85x | 1 | 0s | 24d ago | 58m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3577 ms | ↓ 0.86x | 0 | — | — | 57m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 97.28% | 98.53% | 98.53% | 2334 ms | ↑ 1.05x | 6 | 2h 13m | 8d ago | 57m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 99.67% | 99.17% | 99.17% | 4334 ms | ↓ 0.91x | 5 | 0s | 7d ago | 1h ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 60.38% | 60.38% | 1123 ms | ↑ 1.35x | 0 | — | — | 1h ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.48% | 98.36% | 98.36% | 1606 ms | ↓ 0.90x | 2 | 3h 26m | 10d ago | 1h ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 44.58% | 44.58% | 2898 ms | ↓ 0.81x | 0 | — | — | 1h ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.50% | 99.50% | 99.50% | 2016 ms | ↓ 0.65x | 2 | 59m | 11d ago | 56m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1221 ms | → 1.00x | 0 | — | — | 55m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.26% | 99.26% | 3319 ms | ↓ 0.73x | 0 | — | — | 1h ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.77% | 99.77% | 2802 ms | ↓ 0.86x | 0 | — | — | 1h ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2057 ms | ↓ 0.79x | 0 | — | — | 1h ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 100.00% | 98.74% | 98.89% | 98.89% | 2206 ms | ↑ 1.12x | 10 | 19m | 9d ago | 57m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.31% | 99.31% | 1972 ms | ↓ 0.74x | 0 | — | — | 1h ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.94% | 80.94% | 1429 ms | ↑ 1.40x | 0 | — | — | 1h ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 188 ms | ↓ 0.88x | 0 | — | — | 1h ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 99.86% | 99.90% | 99.90% | 1392 ms | ↓ 0.56x | 2 | 0s | 11d ago | 56m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 100.00% | 99.46% | 69.85% | 69.85% | 4103 ms | → 0.96x | 5 | 14m | 13d ago | 1h ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2029 ms | ↓ 0.73x | 0 | — | — | 1h ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1080 ms | ↓ 0.65x | 0 | — | — | 57m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.93% | 99.95% | 99.95% | 1624 ms | ↓ 0.88x | 1 | 0s | 18d ago | 1h ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.55% | 99.55% | 3042 ms | ↓ 0.90x | 1 | 0s | 21d ago | 1h ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.40% | 81.40% | 1972 ms | ↓ 0.64x | 0 | — | — | 1h ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.53% | 87.53% | 2107 ms | ↑ 1.23x | 0 | — | — | 1h ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.65% | 99.80% | 99.80% | 1220 ms | ↓ 0.76x | 2 | 36m | 10d ago | 57m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.93% | 96.31% | 96.31% | 1402 ms | ↓ 0.68x | 1 | 0s | 16d ago | 1h ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1845 ms | ↑ 1.15x | 0 | — | — | 1h ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.72% | 98.72% | 754 ms | ↓ 0.84x | 0 | — | — | 1h ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 26.29% | 26.29% | 673 ms | ↓ 0.73x | 0 | — | — | 1h ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.93% | 97.83% | 97.83% | 430 ms | ↓ 0.51x | 1 | 0s | 24d ago | 59m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 787 ms | ↓ 0.81x | 0 | — | — | 1h ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.47% | 63.47% | 2244 ms | ↓ 0.85x | 1 | 0s | 16d ago | 1h ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 43.92% | 43.92% | 531 ms | ↓ 0.51x | 0 | — | — | 1h ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.65% | 93.63% | 93.63% | 55 ms | ↑ 1.43x | 1 | 1h 22m | 13d ago | 60m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 100.00% | 98.14% | 96.77% | 96.77% | 3302 ms | ↓ 0.65x | 8 | 1h 9m | 10d ago | 1h ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 22.75% | 22.75% | 1007 ms | ↓ 0.65x | 0 | — | — | 1h ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 506 ms | ↓ 0.39x | 0 | — | — | 58m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.93% | 99.60% | 99.60% | 2927 ms | → 1.01x | 1 | 0s | 20d ago | 57m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 2413 ms | ↓ 0.46x | 0 | — | — | 58m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 489 ms | ↓ 0.77x | 0 | — | — | 57m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.66% | 25.00% | 25.00% | 1300 ms | ↓ 0.75x | 5 | 0s | 10d ago | 1h ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.75% | 93.75% | 4804 ms | → 1.00x | 0 | — | — | 1h ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 99.63% | 99.63% | 1405 ms | ↓ 0.77x | 0 | — | — | 1h ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.93% | 99.97% | 99.97% | 1734 ms | ↓ 0.73x | 1 | 0s | 16d ago | 1h ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.30% | 99.30% | 805 ms | ↓ 0.80x | 0 | — | — | 1h ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1441 ms | ↓ 0.88x | 0 | — | — | 57m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.61% | 99.61% | 2542 ms | ↑ 1.07x | 0 | — | — | 1h ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.49% | 99.49% | 1145 ms | ↓ 0.71x | 0 | — | — | 1h ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 62.70% | 88.97% | 88.97% | 1273 ms | ↓ 0.73x | 1 | 9d 16h | 30d ago | 1h ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.93% | 98.93% | 2412 ms | ↓ 0.67x | 0 | — | — | 60m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 98.40% | 99.07% | 99.07% | 842 ms | ↓ 0.83x | 4 | 1h 35m | 12d ago | 55m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.51% | 99.65% | 99.65% | 1059 ms | ↓ 0.79x | 4 | 15m | 18d ago | 55m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.30% | 99.41% | 99.41% | 4750 ms | ↑ 1.27x | 8 | 6m | 13d ago | 58m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.93% | 99.81% | 99.81% | 646 ms | ↓ 0.83x | 1 | 0s | 8d ago | 60m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.47% | 89.47% | 1845 ms | ↓ 0.83x | 0 | — | — | 1h ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 790 ms | ↓ 0.76x | 0 | — | — | 60m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1558 ms | ↓ 0.81x | 0 | — | — | 58m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 100.00% | 98.58% | 98.59% | 98.59% | 1320 ms | ↓ 0.58x | 13 | 8m | 10d ago | 56m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1407 ms | ↓ 0.76x | 0 | — | — | 1h ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.53% | 99.53% | 1152 ms | ↓ 0.71x | 0 | — | — | 1h ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.93% | 99.94% | 99.94% | 1050 ms | ↓ 0.53x | 1 | 0s | 30d ago | 56m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.76% | 99.76% | 867 ms | ↓ 0.67x | 0 | — | — | 1h ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.93% | 76.66% | 76.66% | 822 ms | ↓ 0.79x | 1 | 0s | 14d ago | 1h ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.84% | 99.84% | 730 ms | ↓ 0.78x | 0 | — | — | 1h ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 100.00% | 85.21% | 85.21% | 1770 ms | ↓ 0.94x | 0 | — | — | 1h ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.24% | 98.89% | 98.89% | 1653 ms | ↓ 0.81x | 4 | 45m | 15d ago | 1h ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 100.00% | 98.35% | 98.35% | 1848 ms | ↓ 0.71x | 0 | — | — | 1h ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.94% | 99.94% | 1140 ms | ↓ 0.55x | 1 | 0s | 23d ago | 56m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.93% | 99.86% | 99.86% | 1445 ms | ↓ 0.91x | 1 | 0s | 14d ago | 56m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.93% | 98.00% | 98.00% | 3263 ms | ↓ 0.87x | 1 | 0s | 30d ago | 58m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.54% | 95.87% | 95.87% | 1373 ms | ↓ 0.91x | 4 | 6h 14m | 19d ago | 58m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.87% | 98.87% | 1529 ms | ↑ 1.05x | 0 | — | — | 1h ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.78% | 98.78% | 1857 ms | ↓ 0.89x | 0 | — | — | 1h ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.67% | 99.67% | 1866 ms | ↓ 0.75x | 0 | — | — | 57m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.79% | 98.09% | 98.09% | 3214 ms | ↓ 0.76x | 2 | 10m | 12d ago | 1h ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1097 ms | → 1.01x | 0 | — | — | 57m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.72% | 98.73% | 98.73% | 1065 ms | ↓ 0.91x | 3 | 10m | 23d ago | 1h ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.83% | 99.83% | 99.83% | 797 ms | ↓ 0.60x | 2 | 0s | 18d ago | 56m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 32.65% | 32.65% | 1037 ms | ↓ 0.71x | 0 | — | — | 1h ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 100.00% | 96.96% | 86.93% | 86.93% | 4670 ms | ↓ 0.92x | 33 | 9m | 9d ago | 1h ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.82% | 99.82% | 946 ms | ↓ 0.82x | 0 | — | — | 1h ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.93% | 98.46% | 98.46% | 1847 ms | ↓ 0.79x | 1 | 0s | 18d ago | 1h ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 62.48% | 58.77% | 58.77% | 1114 ms | ↓ 0.82x | 1 | 9d 9h | 30d ago | 55m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1603 ms | ↓ 0.91x | 0 | — | — | 1h ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.32% | 89.32% | 2495 ms | ↓ 0.64x | 0 | — | — | 1h ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 99.90% | 16.86% | 16.86% | 1830 ms | ↓ 0.69x | 1 | 0s | 13d ago | 1h ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.93% | 96.72% | 96.72% | 2804 ms | ↓ 0.83x | 1 | 0s | 17d ago | 1h ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.93% | 99.87% | 99.87% | 1639 ms | ↓ 0.89x | 1 | 0s | 26d ago | 1h ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 22.77% | 22.77% | 1821 ms | ↓ 0.94x | 0 | — | — | 1h ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2182 ms | ↑ 1.48x | 0 | — | — | 58m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.46% | 97.46% | 1641 ms | ↓ 0.65x | 0 | — | — | 1h ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.86% | 99.86% | 1993 ms | ↓ 0.84x | 0 | — | — | 1h ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.87% | 99.93% | 99.93% | 1099 ms | ↑ 1.25x | 1 | 20m | 26d ago | 1h ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.93% | 24.29% | 24.29% | 2600 ms | ↓ 0.67x | 1 | 0s | 17d ago | 1h ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 22.33% | 22.33% | 1624 ms | ↓ 0.73x | 0 | — | — | 1h ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.79% | 99.76% | 99.76% | 3239 ms | ↓ 0.72x | 3 | 0s | 13d ago | 1h ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.58% | 99.75% | 99.75% | 2638 ms | → 1.05x | 2 | 60m | 28d ago | 57m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.78% | 99.78% | 2914 ms | → 0.97x | 0 | — | — | 1h ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 1361 ms | ↓ 0.74x | 0 | — | — | 1h ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.41% | 99.63% | 99.63% | 2040 ms | ↓ 0.83x | 1 | 3h 60m | 19d ago | 1h ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2031 ms | ↑ 1.28x | 0 | — | — | 1h ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.78% | 98.78% | 1350 ms | ↓ 0.76x | 0 | — | — | 1h ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.59% | 99.81% | 99.81% | 3040 ms | ↑ 1.41x | 4 | 15m | 11d ago | 1h ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.17% | 99.17% | 1169 ms | ↓ 0.70x | 0 | — | — | 1h ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 922 ms | → 1.05x | 0 | — | — | 1h ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1125 ms | ↑ 2.17x | 0 | — | — | 55m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.96% | 99.98% | 98.92% | 98.92% | 4072 ms | ↓ 0.91x | 1 | 0s | 3d ago | 1h ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.93% | 99.95% | 99.98% | 99.98% | 501 ms | ↓ 0.92x | 1 | 4m | 3d ago | 1h ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.93% | 99.95% | 99.98% | 99.98% | 810 ms | ↓ 0.82x | 1 | 4m | 3d ago | 1h ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.93% | 99.88% | 93.54% | 93.54% | 2037 ms | ↓ 0.81x | 2 | 27m | 3d ago | 1h ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.93% | 99.88% | 36.07% | 36.07% | 1914 ms | ↓ 0.91x | 3 | 2m | 3d ago | 1h ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.93% | 99.86% | 93.39% | 93.39% | 3117 ms | ↓ 0.80x | 3 | 20m | 3d ago | 1h ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 99.84% | 99.95% | 98.88% | 98.88% | 1679 ms | ↓ 0.84x | 1 | 0s | 7d ago | 1h ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.84% | 99.80% | 98.93% | 98.93% | 2652 ms | ↓ 0.82x | 4 | 0s | 9h ago | 1h ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.82% | 99.41% | 91.90% | 91.90% | 2440 ms | ↓ 0.78x | 23 | 13s | 3d ago | 1h ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.77% | 98.58% | 99.74% | 99.74% | 1880 ms | ↓ 0.89x | 5 | 1h 18m | 17h ago | 1h ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.61% | 98.76% | 99.59% | 99.59% | 2521 ms | ↓ 0.83x | 18 | 2m | 4d ago | 1h ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.61% | 98.50% | 50.50% | 50.50% | 2962 ms | → 1.01x | 12 | 23m | 3d ago | 1h ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.60% | 99.93% | 98.93% | 98.93% | 1120 ms | ↓ 0.89x | 1 | 0s | 4d ago | 1h ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.59% | 99.33% | 98.77% | 98.77% | 4502 ms | → 0.96x | 27 | 4s | 3d ago | 1h ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.55% | 99.60% | 64.03% | 64.03% | 2682 ms | → 0.95x | 7 | 0s | 17h ago | 1h ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.54% | 99.54% | 86.17% | 86.17% | 2322 ms | → 0.96x | 7 | 0s | 3d ago | 1h ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.52% | 99.86% | 99.87% | 99.87% | 2677 ms | ↓ 0.80x | 2 | 0s | 5d ago | 1h ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.51% | 99.73% | 97.93% | 97.93% | 2670 ms | ↓ 0.68x | 2 | 30m | 2d ago | 1h ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.51% | 98.98% | 98.92% | 98.92% | 1653 ms | ↓ 0.89x | 11 | 10m | 3d ago | 1h ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.50% | 99.79% | 90.87% | 90.87% | 1880 ms | ↓ 0.79x | 3 | 0s | 5d ago | 1h ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.50% | 99.31% | 96.14% | 96.14% | 2800 ms | ↓ 0.81x | 4 | 41m | 6d ago | 1h ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.50% | 99.66% | 93.10% | 93.10% | 954 ms | ↓ 0.72x | 3 | 17m | 2d ago | 1h ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.50% | 99.17% | 69.69% | 69.69% | 1368 ms | ↑ 1.07x | 10 | 6m | 10h ago | 1h ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.50% | 99.72% | 97.74% | 97.74% | 2606 ms | ↑ 1.13x | 4 | 0s | 2d ago | 1h ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.50% | 96.46% | 84.50% | 84.50% | 1175 ms | ↓ 0.71x | 2 | 10h | 3d ago | 60m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.50% | 99.10% | 98.45% | 98.45% | 3281 ms | ↓ 0.78x | 5 | 42m | 5d ago | 1h ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.50% | 91.12% | 82.87% | 82.87% | 1116 ms | ↓ 0.48x | 21 | 3h 16m | 5d ago | 1h ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.50% | 99.38% | 97.06% | 97.06% | 1163 ms | ↓ 0.64x | 4 | 35m | 6d ago | 60m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.49% | 99.72% | 98.13% | 98.13% | 621 ms | ↓ 0.66x | 4 | 0s | 5d ago | 59m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.49% | 99.52% | 99.52% | 99.52% | 692 ms | → 1.03x | 1 | 0s | 4d ago | 55m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.49% | 98.19% | 97.28% | 97.28% | 1878 ms | ↓ 0.90x | 11 | 34m | 3d ago | 58m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 99.49% | 99.86% | 99.87% | 99.87% | 3327 ms | ↓ 0.56x | 2 | 0s | 5d ago | 55m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.49% | 99.92% | 99.92% | 99.92% | 875 ms | ↓ 0.49x | 1 | 0s | 6d ago | 56m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.49% | 99.23% | 99.29% | 99.29% | 300 ms | ↓ 0.64x | 10 | 2m | 6d ago | 57m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.49% | 99.79% | 99.66% | 99.66% | 2068 ms | ↓ 0.83x | 3 | 0s | 6d ago | 56m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.21% | 99.87% | 99.74% | 99.74% | 1748 ms | ↓ 0.73x | 1 | 4s | 4h ago | 1h ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.20% | 99.87% | 86.11% | 86.11% | 706 ms | ↓ 0.77x | 1 | 10s | 3d ago | 1h ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.17% | 97.96% | 86.23% | 86.23% | 4166 ms | ↓ 0.86x | 29 | 2m | 20h ago | 1h ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.02% | 99.80% | 99.80% | 99.80% | 1613 ms | ↓ 0.85x | 3 | 0s | 10h ago | 1h ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.00% | 99.59% | 83.05% | 83.05% | 1725 ms | ↓ 0.61x | 5 | 41s | 3d ago | 1h ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.00% | 98.55% | 86.77% | 86.77% | 4214 ms | ↓ 0.76x | 20 | 2m | 4d ago | 1h ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 99.00% | 95.93% | 83.69% | 83.69% | 4590 ms | ↓ 0.82x | 53 | 3m | 3d ago | 1h ago |

</details>

<details open>
<summary><strong>🟡 Degraded (43)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.99% | 98.89% | 97.95% | 97.95% | 3627 ms | ↓ 0.82x | 10 | 13m | 5d ago | 1h ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 98.99% | 13.66% | 25.62% | 25.62% | 2668 ms | → 1.00x | 1 | 23d 5h | 30d ago | 1h ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 98.99% | 99.86% | 92.67% | 92.67% | 2058 ms | ↓ 0.86x | 2 | 0s | 3d ago | 1h ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.99% | 75.36% | 92.79% | 92.79% | 4108 ms | → 0.98x | 7 | 20h 26m | 3d ago | 1h ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.98% | 99.23% | 96.86% | 96.86% | 2208 ms | → 1.02x | 10 | 1h 11m | 7d ago | 58m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 98.98% | 99.31% | 99.31% | 99.31% | 505 ms | ↑ 1.38x | 1 | 4m | 2d ago | 55m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 98.97% | 99.72% | 99.89% | 99.89% | 970 ms | ↓ 0.56x | 3 | 59s | 11h ago | 56m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 98.97% | 99.83% | 99.83% | 99.83% | 348 ms | ↑ 1.20x | 1 | 4m | 3d ago | 56m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 98.82% | 99.41% | 22.73% | 22.73% | 2117 ms | ↓ 0.87x | 8 | 8m | 3d ago | 1h ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 98.74% | 99.59% | 81.25% | 81.25% | 1754 ms | ↓ 0.82x | 1 | 3h | 1d ago | 1h ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.50% | 99.66% | 97.57% | 97.57% | 2214 ms | ↓ 0.92x | 5 | 0s | 16h ago | 1h ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.49% | 99.38% | 92.11% | 92.11% | 2670 ms | ↓ 0.95x | 9 | 0s | 14h ago | 1h ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 98.49% | 96.39% | 84.86% | 84.86% | 4350 ms | ↓ 0.85x | 47 | 3m | 2d ago | 1h ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 98.47% | 99.79% | 99.81% | 99.81% | 1213 ms | ↓ 0.69x | 2 | 2m | 23h ago | 55m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 98.47% | 98.05% | 93.15% | 93.15% | 4646 ms | ↓ 0.77x | 27 | 2m | 6h ago | 56m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 98.19% | 98.98% | 49.24% | 49.24% | 1466 ms | ↑ 1.16x | 6 | 35m | 7d ago | 1h ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.96% | 99.37% | 98.72% | 98.72% | 1169 ms | ↑ 1.14x | 8 | 17s | 2d ago | 58m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.96% | 97.00% | 92.50% | 92.50% | 4790 ms | ↑ 1.30x | 21 | 24m | 13h ago | 58m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 97.96% | 97.09% | 97.09% | 97.09% | 4463 ms | ↓ 0.83x | 32 | 3m | 20h ago | 55m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 97.89% | 98.87% | 33.70% | 33.70% | 1942 ms | ↓ 0.93x | 5 | 50m | 1d ago | 1h ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.71% | 83.89% | 77.92% | 77.92% | 3970 ms | → 1.00x | 77 | 3h 10m | 3d ago | 1h ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 97.59% | 99.54% | 99.64% | 99.64% | 1424 ms | ↓ 0.79x | 6 | 48m | 1d ago | 1h ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.55% | 96.33% | 98.45% | 98.45% | 3848 ms | ↓ 0.81x | 51 | 1m | 17h ago | 1h ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 97.45% | 99.65% | 98.32% | 98.32% | 1666 ms | ↓ 0.87x | 3 | 3m | 18h ago | 56m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 96.48% | 24.57% | 45.83% | 45.83% | 308 ms | ↓ 0.22x | 4 | 5d | 5d ago | 1h ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.48% | 97.22% | 54.54% | 54.54% | 3111 ms | ↓ 0.82x | 38 | 1m | 2d ago | 1h ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.00% | 94.21% | 73.82% | 73.82% | 1447 ms | ↓ 0.68x | 21 | 1h 5m | 1d ago | 1h ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 95.92% | 99.44% | 99.42% | 99.42% | 866 ms | ↓ 0.61x | 2 | 3h 1m | 4d ago | 56m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 95.92% | 90.45% | 83.41% | 83.41% | 1346 ms | ↓ 0.86x | 9 | 5h 60m | 2d ago | 58m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 94.90% | 98.91% | 98.91% | 98.91% | 959 ms | ↓ 0.86x | 2 | 2h 30m | 3d ago | 56m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 94.90% | 79.15% | 37.89% | 37.89% | 3230 ms | ↓ 0.51x | 150 | 26m | 4d ago | 56m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.46% | 88.41% | 60.49% | 60.49% | 2965 ms | ↓ 0.73x | 138 | 6m | 2h ago | 1h ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 91.00% | 97.79% | 91.68% | 91.68% | 1657 ms | → 0.96x | 32 | 56s | 7m ago | 1h ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 85.60% | 66.97% | 96.32% | 96.32% | 4586 ms | ↓ 0.80x | 293 | 20m | 2h ago | 1h ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 84.34% | 92.00% | 95.30% | 95.30% | 1428 ms | ↓ 0.94x | 14 | 3h 13m | 16h ago | 59m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 84.18% | 72.38% | 81.54% | 81.54% | 4350 ms | ↓ 0.76x | 179 | 33m | 4h ago | 55m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 80.83% | 12.81% | 39.73% | 39.73% | 1070 ms | → 1.00x | 1 | 24d 21h | 30d ago | 1h ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 77.67% | 92.28% | 20.47% | 20.47% | 3528 ms | ↑ 1.14x | 99 | 5m | 12m ago | 1h ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 67.32% | 94.59% | 96.47% | 96.47% | 2128 ms | ↓ 0.69x | 2 | 1d 12h | 2d ago | 1h ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 61.81% | 94.73% | 86.19% | 86.19% | 1355 ms | ↓ 0.55x | 73 | 2m | 4m ago | 1h ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 31.06% | 58.58% | 95.66% | 95.66% | 2653 ms | ↓ 0.90x | 2 | 4d 7h | 14d ago | 1h ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 27.13% | 76.04% | 94.08% | 94.08% | 3044 ms | ↓ 0.92x | 12 | 7h 28m | 2h ago | 1h ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 20.60% | 29.29% | 64.17% | 64.17% | 2278 ms | ↑ 1.06x | 3 | 6d 10h | 5d ago | 1h ago |

</details>

<details open>
<summary><strong>🔴 Down (272)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 95.90% | 99.09% | 98.70% | 98.70% | 2673 ms | → 1.02x | 9 | 10m | 57m ago | 57m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 94.17% | 96.41% | 96.50% | 96.50% | 1571 ms | ↓ 0.92x | 9 | 2h 10m | 6h ago | 1h ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 94.00% | 87.96% | 23.02% | 23.02% | 4066 ms | ↓ 0.78x | 132 | 12m | 1h ago | 1h ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 85.50% | 74.16% | 27.23% | 27.23% | 3966 ms | ↓ 0.65x | 230 | 19m | 2m ago | 1h ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 83.65% | 74.88% | 63.04% | 63.04% | 4659 ms | ↓ 0.82x | 255 | 15m | 1h ago | 1h ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 82.65% | 97.25% | 97.25% | 97.25% | 1622 ms | ↓ 0.83x | 2 | 8h 17m | 17h ago | 55m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 76.41% | 96.37% | 96.57% | 96.57% | 914 ms | ↓ 0.78x | 4 | 6h 8m | 23h ago | 57m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 66.67% | 92.34% | 21.66% | 21.66% | 2719 ms | ↑ 1.13x | 47 | 45m | 2h ago | 1h ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 65.38% | 95.07% | 32.54% | 32.54% | 1325 ms | ↑ 1.11x | 2 | 18h | 2d ago | 1h ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 38.00% | 5.23% | 78.15% | 78.15% | 1886 ms | → 1.00x | 74 | 8h 42m | 4m ago | 1h ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 36.50% | 91.05% | 22.83% | 22.83% | 543 ms | ↓ 0.63x | 4 | 15h 52m | 3d ago | 1h ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 32.66% | 90.63% | 67.00% | 67.00% | 3621 ms | ↑ 1.64x | 8 | 8h 6m | 2d ago | 60m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 31.12% | 48.85% | 76.37% | 76.37% | 4994 ms | ↑ 1.41x | 210 | 1h 18m | 1h ago | 58m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 28.64% | 88.89% | 84.48% | 84.48% | 1438 ms | ↓ 0.71x | 4 | 19h 33m | 2d ago | 59m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 20.39% | 86.04% | 74.56% | 74.56% | 2947 ms | ↓ 0.49x | 39 | 2h 22m | 4d ago | 1h ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 7.35% | 86.60% | 19.91% | 19.91% | 2255 ms | ↓ 0.71x | 6 | 19h 43m | 5d ago | 1h ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 6.73% | 86.83% | 98.60% | 98.60% | 1923 ms | ↓ 0.93x | 2 | 2d 12h | 5d ago | 1h ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 4.21% | 3.34% | 50.43% | 50.43% | 3813 ms | ↓ 0.84x | 132 | 4h 49m | 17m ago | 1h ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 2.00% | 40.56% | 32.07% | 32.07% | 879 ms | ↑ 1.50x | 4 | 4d 10h | 6d ago | 1h ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.50% | 67.38% | 32.64% | 32.64% | — | ↑ 1.67x | 3 | 3d 21h | 7d ago | 1h ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 76.58% | 76.58% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.60% | 63.60% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 37.06% | 37.06% | — | — | 1 | 29d 24h | 30d ago | 56m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 71.40% | 71.40% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 53.01% | 53.01% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.22% | 5.22% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.28% | 10.28% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 79.58% | 91.09% | 91.09% | — | — | 1 | 10d 1h | 10d ago | 58m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.97% | 47.97% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 40.79% | 75.90% | 75.90% | — | — | 13 | 1d 12h | 20d ago | 56m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.15% | 3.15% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 15.42% | 81.02% | 81.02% | — | — | 1 | 26d 3h | 26d ago | 60m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.00% | 77.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.80% | 33.80% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 77.75% | 91.88% | 91.88% | — | — | 2 | 5d 5h | 10d ago | 59m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 84.04% | 84.04% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.24% | 21.24% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 67.53% | 67.53% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 44.89% | 44.89% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.21% | 27.21% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 85.04% | 85.04% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.61% | 75.61% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.14% | 58.14% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 71.29% | 71.29% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 1h ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.26% | 13.26% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.80% | 44.80% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.79% | 87.79% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.54% | 30.54% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 27.89% | 70.54% | 70.54% | — | — | 1 | 22d 22h | 23d ago | 56m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 28.78% | 33.19% | 33.19% | — | — | 3 | 7d 13h | 23d ago | 58m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 79.60% | 79.60% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.14% | 3.14% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 48.74% | 78.24% | 78.24% | — | — | 6 | 2d 23h | 17d ago | 57m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 35.70% | 74.31% | 74.31% | — | — | 1 | 21d | 21d ago | 56m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 77.63% | 77.63% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 8.17% | 49.12% | 49.12% | — | — | 6 | 4d 15h | 8d ago | 1h ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 25.18% | 25.18% | — | — | 1 | 29d 24h | 30d ago | 56m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.07% | 48.07% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.91% | 1.91% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.83% | 84.83% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 11.79% | 33.94% | 33.94% | — | — | 1 | 27d | 27d ago | 56m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 65.53% | 65.53% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 55.17% | 46.65% | 46.65% | — | — | 2 | 8d 1h | 14d ago | 1h ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 67.14% | 67.14% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 28.78% | 71.09% | 71.09% | — | — | 3 | 7d 13h | 23d ago | 58m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 58.09% | 40.43% | 40.43% | — | — | 5 | 3d 2h | 15d ago | 57m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 57.62% | 64.82% | 64.82% | — | — | 6 | 2d 13h | 15d ago | 1h ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.64% | 26.64% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.67% | 50.67% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 44.61% | 44.61% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.21% | 22.21% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 0.00% | 68.69% | 68.69% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 0.00% | 38.83% | 38.83% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 55m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 49.49% | 49.49% | — | — | 1 | 29d 24h | 30d ago | 59m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.93% | 46.93% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.50% | 21.50% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.67% | 4.67% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.95% | 60.95% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 75.58% | 75.58% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 11.60% | 69.64% | 69.64% | — | — | 1 | 27d 2h | 27d ago | 60m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.60% | 5.60% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.86% | 73.86% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.52% | 74.52% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 28.68% | 28.68% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 84.71% | 84.71% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.43% | 20.43% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.03% | 49.03% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 50.85% | 84.31% | 84.31% | — | — | 1 | 16d 16h | 17d ago | 1h ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 17.99% | 17.97% | 17.97% | — | — | 2 | 11d 1h | 22d ago | 56m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 28.71% | 69.52% | 69.52% | — | — | 4 | 5d 16h | 23d ago | 58m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 52.86% | 80.51% | 80.51% | — | — | 3 | 5d 14h | 17d ago | 57m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 28.22% | 76.22% | 76.22% | — | — | 12 | 1d 21h | 23d ago | 58m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 14.48% | 15.24% | 15.24% | — | — | 8 | 2d 20h | 23d ago | 58m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.21% | 6.21% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 56.43% | 56.43% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.40% | 43.40% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 11.08% | 17.44% | 17.44% | — | — | 2 | 13d 15h | 27d ago | 58m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.34% | 39.34% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 24.53% | 74.65% | 74.65% | — | — | 3 | 7d 5h | 22d ago | 1h ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 21.10% | 21.10% | — | — | 1 | 29d 24h | 30d ago | 56m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 68.87% | 68.87% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.63% | 54.63% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 45.40% | 77.76% | 77.76% | — | — | 1 | 18d 15h | 19d ago | 57m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.71% | 35.71% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 66.60% | 66.60% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 71.35% | 71.35% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 63.38% | 63.38% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.35% | 2.35% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 77.35% | 77.35% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.81% | 38.81% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.94% | 90.94% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 77.32% | 77.32% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.36% | 30.36% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 75.45% | 75.45% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 43.37% | 43.37% | — | — | 1 | 29d 24h | 30d ago | 60m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 17.75% | 17.75% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.23% | 40.23% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 66.34% | 66.34% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 58.65% | 58.65% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.37% | 24.37% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.65% | 73.65% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 43.96% | 43.96% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.89% | 2.89% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.75% | 39.75% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 71.21% | 71.21% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.04% | 55.04% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 15.75% | 21.83% | 21.83% | — | — | 1 | 26d 1h | 26d ago | 58m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 34.21% | 34.21% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 53.64% | 53.64% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.84% | 82.84% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 20.05% | 93.04% | 93.04% | — | — | 2 | 11d 23h | 24d ago | 1h ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.34% | 23.34% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 10.83% | 10.83% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 21.18% | 25.31% | 25.31% | — | — | 3 | 8d 5h | 10d ago | 60m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.44% | 22.44% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.33% | 49.33% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.69% | 86.69% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 48.96% | 48.96% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 71.08% | 93.28% | 93.28% | — | — | 2 | 6d 1h | 12d ago | 1h ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 7.91% | 7.91% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.30% | 16.30% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.19% | 46.19% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.07% | 46.51% | 46.51% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 17.22% | 17.22% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.49% | 51.49% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 88.63% | 88.63% | — | — | 1 | 25d 22h | 26d ago | 1h ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.78% | 35.78% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.70% | 19.70% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 29.19% | 29.19% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.18% | 5.18% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 60m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.97% | 72.97% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 84.07% | 84.07% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 47.99% | 47.99% | — | — | 1 | 29d 23h | 30d ago | 56m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 77.24% | 77.24% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 76.23% | 76.23% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 52.67% | 52.67% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 69.04% | 69.04% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 76.07% | 76.07% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 23h | 26d ago | 57m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.19% | 18.19% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.52% | 54.52% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.95% | 35.95% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 31.73% | 31.73% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.85% | 63.85% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.45% | 22.45% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.75% | 6.75% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 54.27% | 54.27% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 23.21% | 23.21% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.93% | 62.93% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 31.54% | 31.54% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 28.78% | 70.59% | 70.59% | — | — | 3 | 7d 13h | 23d ago | 58m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.90% | 3.90% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 21h | 26d ago | 58m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 45.08% | 45.08% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.83% | 38.83% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 30.40% | 30.40% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.49% | 17.49% | — | — | 1 | 29d 24h | 30d ago | 59m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.10% | 5.10% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.27% | 10.27% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.95% | 14.95% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 26.03% | 26.03% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.05% | 9.05% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 6.65% | 6.65% | — | — | 1 | 29d 24h | 30d ago | 56m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.70% | 0.70% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.01% | 4.01% | — | — | 1 | 29d 24h | 30d ago | 59m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.64% | 4.64% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.51% | 46.51% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 76.29% | 80.43% | 80.43% | — | — | 2 | 5d 9h | 11d ago | 55m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 37.04% | 37.04% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 77.25% | 77.25% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 64.27% | 64.27% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.63% | 40.63% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.58% | 77.58% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 44.33% | 44.33% | — | — | 1 | 29d 24h | 30d ago | 59m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.55% | 38.55% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.39% | 1.39% | — | — | 1 | 29d 24h | 30d ago | 58m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.72% | 17.72% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 1h ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 57m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.49% | 75.49% | — | — | 1 | 29d 24h | 30d ago | 1h ago |

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
