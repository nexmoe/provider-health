# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**643 providers** — 349 🟢 operational · 57 🟡 degraded · 237 🔴 down · 0 ⚫ unknown

_Updated 2026-06-07 07:08 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (349)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.89% | 97.82% | 97.82% | 507 ms | ↓ 0.80x | 2 | 0s | 10d ago | 8m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1732 ms | → 1.00x | 0 | — | — | 5m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.95% | 18.60% | 18.60% | 1748 ms | → 1.01x | 1 | 0s | 9d ago | 14m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.37% | 97.37% | 2521 ms | ↑ 1.06x | 0 | — | — | 25m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.95% | 52.52% | 52.52% | 1930 ms | ↑ 1.12x | 1 | 0s | 26d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.84% | 97.80% | 97.80% | 2842 ms | → 1.00x | 3 | 0s | 10d ago | 21m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1705 ms | ↑ 1.21x | 0 | — | — | 5m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.78% | 98.78% | 1824 ms | → 1.03x | 0 | — | — | 27m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.40% | 99.40% | 3385 ms | → 0.97x | 1 | 0s | 17d ago | 27m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.07% | 99.07% | 2365 ms | ↑ 1.27x | 1 | 19m | 19d ago | 8m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.57% | 94.57% | 2064 ms | ↑ 1.10x | 0 | — | — | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1817 ms | ↑ 1.27x | 0 | — | — | 7m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.23% | 97.41% | 97.41% | 2176 ms | ↑ 1.11x | 1 | 4h 31m | 24d ago | 9m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 99.29% | 98.46% | 98.46% | 3164 ms | ↑ 1.15x | 5 | 35m | 8d ago | 8m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.18% | 92.18% | 2407 ms | ↑ 1.22x | 0 | — | — | 28m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1743 ms | ↑ 1.31x | 1 | 0s | 24d ago | 7m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 98.74% | 96.70% | 96.70% | 2237 ms | ↓ 0.75x | 4 | 2h 10m | 10d ago | 8m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.84% | 99.84% | 1182 ms | ↑ 1.30x | 1 | 0s | 23d ago | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 848 ms | ↑ 1.26x | 0 | — | — | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.48% | 98.48% | 924 ms | → 1.02x | 0 | — | — | 9m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.99% | 96.99% | 1355 ms | → 1.00x | 1 | 0s | 23d ago | 9m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.64% | 98.64% | 1962 ms | ↑ 1.83x | 0 | — | — | 7m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 35.48% | 35.48% | 609 ms | → 1.03x | 0 | — | — | 21m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1210 ms | → 1.00x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.95% | 96.73% | 96.73% | 2291 ms | ↑ 1.07x | 1 | 0s | 12d ago | 12m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.85% | 98.85% | 899 ms | ↑ 1.14x | 1 | 0s | 10d ago | 24m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 492 ms | → 1.05x | 1 | 0s | 16d ago | 6m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.46% | 96.46% | 499 ms | → 1.05x | 0 | — | — | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.13% | 86.13% | 86.13% | 779 ms | ↑ 1.06x | 5 | 55m | 9d ago | 10m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1664 ms | → 1.03x | 1 | 0s | 16d ago | 7m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.84% | 99.86% | 99.86% | 2711 ms | ↑ 1.31x | 3 | 0s | 12d ago | 7m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.19% | 98.19% | 2754 ms | ↑ 1.08x | 1 | 60m | 17d ago | 10m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.85% | 97.85% | 185 ms | ↑ 1.11x | 0 | — | — | 8m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.73% | 99.68% | 99.68% | 1278 ms | ↑ 1.07x | 5 | 0s | 10d ago | 7m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 84.05% | 84.05% | 1210 ms | → 1.00x | 0 | — | — | 9m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 983 ms | → 1.01x | 1 | 0s | 16d ago | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.46% | 81.00% | 81.00% | 1662 ms | → 1.02x | 3 | 50m | 20d ago | 13m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.53% | 97.53% | 1228 ms | ↑ 1.29x | 0 | — | — | 11m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 491 ms | ↑ 1.06x | 0 | — | — | 22m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 3084 ms | ↑ 1.06x | 1 | 0s | 30d ago | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.94% | 98.94% | 303 ms | ↑ 1.39x | 0 | — | — | 11m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.41% | 97.82% | 97.82% | 3496 ms | → 1.04x | 11 | 0s | 13d ago | 26m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.81% | 99.81% | 1897 ms | → 0.99x | 0 | — | — | 11m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.99% | 95.99% | 1244 ms | ↓ 0.82x | 0 | — | — | 11m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.86% | 99.86% | 2610 ms | ↑ 1.28x | 3 | 0s | 16d ago | 7m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 1987 ms | → 1.05x | 0 | — | — | 22m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.68% | 99.68% | 99.68% | 1518 ms | ↑ 1.39x | 1 | 51m | 7d ago | 5m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 100.00% | 100.00% | 100.00% | 571 ms | → 1.00x | 0 | — | — | 7m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 82.52% | 82.52% | 2501 ms | → 1.00x | 0 | — | — | 8m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3117 ms | ↓ 0.83x | 1 | 0s | 13d ago | 21m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 27.96% | 27.96% | 1149 ms | ↑ 1.06x | 0 | — | — | 22m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 99.07% | 98.56% | 98.56% | 1781 ms | → 1.04x | 8 | 30m | 11d ago | 7m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.43% | 95.63% | 95.63% | 1721 ms | → 1.02x | 3 | 5h 26m | 12d ago | 9m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1039 ms | ↓ 0.84x | 1 | 0s | 16d ago | 6m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2461 ms | → 1.00x | 0 | — | — | 7m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1706 ms | → 1.05x | 0 | — | — | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.76% | 97.42% | 97.42% | 1846 ms | ↑ 1.17x | 5 | 5h 6m | 21d ago | 14m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.47% | 96.47% | 855 ms | → 1.03x | 0 | — | — | 12m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.36% | 53.36% | 938 ms | → 1.05x | 0 | — | — | 14m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 818 ms | → 1.00x | 0 | — | — | 5m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1964 ms | ↑ 1.05x | 0 | — | — | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 935 ms | ↓ 0.86x | 1 | 0s | 16d ago | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3340 ms | ↑ 1.07x | 0 | — | — | 21m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.06% | 97.06% | 1651 ms | ↑ 1.16x | 0 | — | — | 21m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 97.83% | 97.83% | 97.83% | 525 ms | ↑ 1.08x | 2 | 2h 41m | 8d ago | 5m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.13% | 46.28% | 46.28% | 1726 ms | → 0.95x | 9 | 1h 42m | 18d ago | 22m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.73% | 99.02% | 99.02% | 1985 ms | ↑ 1.36x | 2 | 44m | 15d ago | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.51% | 82.51% | 1920 ms | → 1.03x | 0 | — | — | 13m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1478 ms | → 1.04x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.57% | 98.57% | 2034 ms | ↑ 1.07x | 0 | — | — | 10m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.96% | 99.96% | 3552 ms | → 1.02x | 1 | 0s | 16d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.64% | 92.64% | 951 ms | ↑ 1.12x | 1 | 0s | 13d ago | 14m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.49% | 98.49% | 1020 ms | ↑ 1.19x | 0 | — | — | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.19% | 99.19% | 2356 ms | ↓ 0.84x | 0 | — | — | 7m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 100.00% | 93.87% | 93.87% | 2604 ms | ↑ 1.20x | 0 | — | — | 8m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.75% | 97.75% | 3053 ms | → 0.96x | 2 | 0s | 12d ago | 11m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 73.77% | 88.02% | 88.02% | 883 ms | → 1.00x | 2 | 3d 23h | 21d ago | 9m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.92% | 45.92% | 964 ms | → 1.04x | 0 | — | — | 14m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 75.23% | 75.23% | 704 ms | → 0.99x | 1 | 0s | 24d ago | 13m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.68% | 94.89% | 94.89% | 869 ms | ↑ 1.07x | 5 | 6h 45m | 22d ago | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.64% | 53.64% | 1580 ms | ↑ 1.09x | 1 | 0s | 17d ago | 22m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 923 ms | ↓ 0.91x | 0 | — | — | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.07% | 98.07% | 1913 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.95% | 51.11% | 51.11% | 1150 ms | → 1.02x | 1 | 0s | 8d ago | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1197 ms | → 1.03x | 1 | 0s | 16d ago | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 81.30% | 81.30% | 1473 ms | → 1.05x | 1 | 0s | 23d ago | 13m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.95% | 60.77% | 60.77% | 897 ms | → 1.01x | 1 | 0s | 10d ago | 13m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.97% | 97.97% | 932 ms | → 1.03x | 1 | 0s | 23d ago | 14m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.89% | 99.82% | 99.82% | 1579 ms | ↑ 1.05x | 2 | 0s | 16d ago | 7m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.40% | 99.68% | 99.68% | 3039 ms | → 1.02x | 9 | 4m | 9d ago | 21m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.89% | 58.93% | 58.93% | 1780 ms | ↑ 1.06x | 2 | 0s | 19d ago | 14m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.17% | 62.17% | 1146 ms | → 1.04x | 0 | — | — | 14m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2414 ms | ↓ 0.85x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.19% | 99.19% | 1476 ms | → 0.96x | 0 | — | — | 13m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.66% | 89.66% | 1932 ms | → 1.03x | 1 | 0s | 25d ago | 12m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.80% | 99.80% | 2609 ms | → 1.01x | 0 | — | — | 11m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.89% | 99.56% | 99.56% | 966 ms | ↑ 1.05x | 2 | 0s | 8d ago | 13m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.73% | 99.73% | 2102 ms | → 1.04x | 3 | 0s | 18d ago | 26m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1999 ms | ↑ 1.14x | 0 | — | — | 6m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.01% | 99.01% | 3134 ms | ↑ 1.08x | 1 | 29m | 13d ago | 26m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.11% | 98.11% | 2981 ms | → 1.00x | 0 | — | — | 27m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 73.42% | 73.42% | 1670 ms | ↓ 0.80x | 0 | — | — | 11m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 91.23% | 91.23% | 341 ms | → 1.04x | 3 | 0s | 18d ago | 9m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.26% | 97.74% | 97.74% | 731 ms | → 1.04x | 3 | 5h 59m | 15d ago | 6m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1379 ms | ↑ 1.43x | 0 | — | — | 7m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1216 ms | ↑ 1.08x | 0 | — | — | 27m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 2957 ms | → 0.99x | 2 | 0s | 11d ago | 27m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1692 ms | ↑ 1.06x | 1 | 0s | 19d ago | 25m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.89% | 88.93% | 88.93% | 1892 ms | ↓ 0.71x | 1 | 20m | 30d ago | 12m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.99% | 76.99% | 2054 ms | ↓ 0.94x | 0 | — | — | 11m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.89% | 99.76% | 99.76% | 740 ms | ↑ 1.27x | 2 | 0s | 10d ago | 27m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 462 ms | → 1.00x | 0 | — | — | 7m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1024 ms | ↓ 0.84x | 0 | — | — | 6m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 82.59% | 82.59% | 1958 ms | ↑ 1.11x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1476 ms | → 1.01x | 0 | — | — | 6m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1437 ms | ↑ 1.18x | 0 | — | — | 9m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.01% | 99.01% | 471 ms | → 1.03x | 0 | — | — | 14m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.08% | 97.08% | 331 ms | ↓ 0.84x | 0 | — | — | 9m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1030 ms | → 1.02x | 1 | 0s | 16d ago | 7m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 728 ms | ↓ 0.91x | 1 | 0s | 16d ago | 6m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1617 ms | → 1.03x | 0 | — | — | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.73% | 87.02% | 87.02% | 1374 ms | → 1.04x | 5 | 0s | 15d ago | 26m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 100.00% | 97.16% | 97.16% | 2180 ms | ↑ 1.10x | 0 | — | — | 8m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.62% | 97.50% | 97.50% | 1694 ms | → 0.97x | 7 | 0s | 7d ago | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.77% | 98.77% | 184 ms | → 0.95x | 0 | — | — | 11m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.84% | 98.84% | 98.84% | 1618 ms | → 1.01x | 3 | 0s | 9d ago | 8m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.95% | 98.95% | 818 ms | → 1.03x | 0 | — | — | 15m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 54.17% | 54.17% | 298 ms | → 1.00x | 0 | — | — | 8m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.21% | 96.89% | 96.89% | 976 ms | ↓ 0.83x | 28 | 20m | 16d ago | 6m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.84% | 99.86% | 99.86% | 1295 ms | ↑ 1.13x | 2 | 11m | 8d ago | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 20.63% | 20.63% | 1043 ms | ↑ 1.09x | 0 | — | — | 14m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 862 ms | ↑ 1.16x | 0 | — | — | 28m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.84% | 99.84% | 2474 ms | ↑ 1.42x | 1 | 0s | 21d ago | 27m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 648 ms | ↑ 1.06x | 0 | — | — | 26m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.17% | 79.80% | 79.80% | 146 ms | → 1.04x | 4 | 7h 18m | 9d ago | 27m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.78% | 97.78% | 1114 ms | → 1.02x | 0 | — | — | 8m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2684 ms | → 1.02x | 2 | 0s | 15d ago | 26m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.97% | 97.97% | 1995 ms | ↓ 0.75x | 0 | — | — | 12m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.99% | 16.76% | 16.76% | 2629 ms | → 1.04x | 7 | 1h 40m | 8d ago | 14m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 631 ms | ↑ 1.23x | 2 | 25m | 22d ago | 27m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1937 ms | ↑ 1.06x | 0 | — | — | 7m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.69% | 98.69% | 4502 ms | → 1.04x | 0 | — | — | 28m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2927 ms | → 1.02x | 0 | — | — | 26m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1663 ms | ↑ 1.22x | 0 | — | — | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2493 ms | → 1.03x | 1 | 0s | 30d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.84% | 99.33% | 99.33% | 1592 ms | → 0.96x | 3 | 0s | 8d ago | 14m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 40.05% | 40.05% | 842 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.42% | 98.42% | 3936 ms | → 1.00x | 0 | — | — | 11m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1117 ms | → 1.04x | 1 | 0s | 24d ago | 26m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.73% | 99.44% | 99.44% | 2723 ms | → 0.96x | 5 | 0s | 10d ago | 21m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.62% | 99.84% | 99.84% | 150 ms | → 1.00x | 5 | 12m | 13d ago | 26m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 96.01% | 16.01% | 16.01% | 748 ms | → 0.99x | 19 | 1h 2m | 18d ago | 26m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.30% | 99.25% | 99.25% | 822 ms | → 1.00x | 7 | 17m | 10d ago | 27m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2013 ms | → 0.99x | 0 | — | — | 13m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.85% | 99.85% | 1608 ms | ↓ 0.84x | 1 | 0s | 10d ago | 27m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.61% | 99.61% | 1842 ms | ↑ 1.06x | 0 | — | — | 9m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 542 ms | → 1.00x | 0 | — | — | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1011 ms | → 1.00x | 0 | — | — | 7m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 644 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.06% | 95.65% | 95.65% | 2509 ms | → 1.01x | 4 | 4h 46m | 11d ago | 12m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 59.69% | 59.69% | 1639 ms | → 1.04x | 3 | 0s | 22d ago | 14m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 19.05% | 19.05% | 2562 ms | → 1.04x | 1 | 0s | 21d ago | 14m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2220 ms | → 1.04x | 0 | — | — | 26m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 97.98% | 98.80% | 98.80% | 1976 ms | ↑ 1.38x | 4 | 2h 47m | 10d ago | 7m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.90% | 88.90% | 1747 ms | ↑ 1.17x | 1 | 0s | 17d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.95% | 18.75% | 18.75% | 1568 ms | → 1.03x | 1 | 0s | 8d ago | 14m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.92% | 98.92% | 2657 ms | → 1.05x | 1 | 0s | 14d ago | 12m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 83.42% | 83.09% | 83.09% | 1605 ms | → 1.00x | 1 | 4d 9h | 30d ago | 7m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.78% | 99.90% | 99.90% | 856 ms | → 1.04x | 2 | 25m | 22d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1286 ms | ↑ 1.08x | 0 | — | — | 27m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.65% | 99.65% | 803 ms | → 1.00x | 3 | 7m | 12d ago | 25m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.95% | 40.10% | 40.10% | 467 ms | → 1.01x | 1 | 0s | 21d ago | 11m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 904 ms | → 0.97x | 0 | — | — | 27m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 942 ms | ↓ 0.83x | 1 | 0s | 16d ago | 6m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.93% | 99.93% | 768 ms | → 1.00x | 1 | 0s | 10d ago | 9m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.01% | 99.01% | 2446 ms | ↑ 1.13x | 0 | — | — | 25m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.30% | 98.30% | 1351 ms | ↑ 1.12x | 0 | — | — | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.97% | 97.97% | 1549 ms | ↓ 0.88x | 0 | — | — | 9m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.95% | 16.89% | 16.89% | 2339 ms | ↑ 1.09x | 1 | 0s | 10d ago | 26m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.56% | 68.56% | 886 ms | → 0.98x | 0 | — | — | 13m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 100.00% | 100.00% | 100.00% | 100.00% | 444 ms | → 1.00x | 0 | — | — | 7m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1219 ms | → 1.02x | 0 | — | — | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.92% | 79.92% | 1514 ms | → 1.00x | 1 | 51m | 16d ago | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1489 ms | ↑ 1.07x | 0 | — | — | 25m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1668 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 2168 ms | → 0.98x | 1 | 0s | 16d ago | 7m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.87% | 99.87% | 1076 ms | ↑ 1.12x | 1 | 0s | 15d ago | 15m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.06% | 85.06% | 201 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 90.30% | 90.30% | 282 ms | ↓ 0.83x | 1 | 0s | 23d ago | 11m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.27% | 99.27% | 1890 ms | → 0.96x | 0 | — | — | 13m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.95% | 66.24% | 66.24% | 1332 ms | ↑ 2.26x | 1 | 0s | 9d ago | 13m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.56% | 96.56% | 1460 ms | ↑ 1.11x | 0 | — | — | 14m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.78% | 99.82% | 99.82% | 1069 ms | ↓ 0.80x | 4 | 0s | 10d ago | 6m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2462 ms | → 1.02x | 0 | — | — | 27m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 95.95% | 96.55% | 96.55% | 1884 ms | → 0.98x | 2 | 13h 54m | 9d ago | 7m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1636 ms | → 1.00x | 0 | — | — | 7m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3529 ms | → 1.00x | 0 | — | — | 7m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.82% | 56.82% | 650 ms | ↑ 1.07x | 0 | — | — | 14m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.46% | 98.35% | 98.35% | 1471 ms | → 1.05x | 1 | 4h 17m | 16d ago | 12m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.89% | 98.26% | 98.26% | 1564 ms | ↓ 0.94x | 2 | 0s | 12d ago | 11m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 37.69% | 37.69% | 2281 ms | ↑ 1.09x | 1 | 0s | 15d ago | 13m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.84% | 99.20% | 99.20% | 3459 ms | ↑ 1.05x | 3 | 0s | 9d ago | 21m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2580 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 1906 ms | → 0.98x | 1 | 30m | 15d ago | 12m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.21% | 99.21% | 1992 ms | → 1.02x | 0 | — | — | 12m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.72% | 78.72% | 1408 ms | → 1.03x | 0 | — | — | 13m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 188 ms | → 1.01x | 1 | 0s | 10d ago | 27m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 530 ms | → 1.02x | 0 | — | — | 5m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1877 ms | ↑ 1.13x | 0 | — | — | 25m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 2655 ms | ↑ 1.66x | 1 | 0s | 16d ago | 7m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1915 ms | → 1.04x | 0 | — | — | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 3124 ms | → 0.98x | 1 | 0s | 18d ago | 27m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 79.08% | 79.08% | 1629 ms | → 1.04x | 3 | 0s | 12d ago | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.91% | 85.91% | 1850 ms | → 1.03x | 0 | — | — | 13m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.91% | 99.91% | 957 ms | → 0.98x | 2 | 0s | 16d ago | 7m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.01% | 96.01% | 994 ms | → 1.04x | 0 | — | — | 14m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 923 ms | → 1.05x | 0 | — | — | 25m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.48% | 98.48% | 464 ms | → 0.98x | 1 | 0s | 29d ago | 11m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 19.93% | 19.93% | 297 ms | ↓ 0.50x | 0 | — | — | 14m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.56% | 97.05% | 97.05% | 1884 ms | → 1.01x | 5 | 16m | 13d ago | 9m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 795 ms | → 1.03x | 0 | — | — | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.78% | 17.65% | 17.65% | 851 ms | ↓ 0.84x | 4 | 0s | 10d ago | 14m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.02% | 60.02% | 2047 ms | → 1.04x | 0 | — | — | 14m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 33.84% | 21.42% | 21.42% | 575 ms | ↓ 0.42x | 1 | 18d 22h | 30d ago | 26m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 81.58% | 91.59% | 91.59% | 29 ms | ↓ 0.60x | 2 | 2d 10h | 28d ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.68% | 98.85% | 98.85% | 847 ms | → 1.05x | 2 | 6h 50m | 7d ago | 25m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 16.88% | 16.88% | 868 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2093 ms | ↑ 1.61x | 0 | — | — | 7m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.45% | 99.45% | 1502 ms | ↑ 1.18x | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 2141 ms | → 1.05x | 0 | — | — | 8m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1648 ms | → 1.04x | 0 | — | — | 7m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.89% | 19.59% | 19.59% | 1253 ms | ↑ 1.09x | 2 | 0s | 19d ago | 14m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.27% | 93.27% | 4565 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.68% | 99.48% | 99.48% | 1184 ms | ↓ 0.69x | 2 | 40m | 9d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.35% | 99.35% | 1509 ms | ↑ 1.20x | 0 | — | — | 8m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.17% | 99.17% | 933 ms | ↓ 0.90x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.95% | 99.86% | 99.86% | 1640 ms | → 1.01x | 1 | 0s | 16d ago | 7m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.57% | 99.57% | 1692 ms | ↑ 1.17x | 1 | 0s | 18d ago | 27m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.45% | 99.45% | 976 ms | → 1.02x | 0 | — | — | 25m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 573 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.89% | 60.91% | 60.91% | 2468 ms | ↓ 0.89x | 2 | 0s | 10d ago | 27m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.57% | 98.57% | 2618 ms | ↑ 1.22x | 0 | — | — | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.63% | 96.63% | 2527 ms | → 1.03x | 0 | — | — | 26m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 3851 ms | ↑ 1.09x | 0 | — | — | 5m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.89% | 99.89% | 99.89% | 2264 ms | ↑ 1.25x | 1 | 0s | 14d ago | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.49% | 99.49% | 2333 ms | ↑ 1.32x | 2 | 0s | 15d ago | 8m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.77% | 99.77% | 860 ms | ↑ 1.21x | 1 | 20m | 9d ago | 9m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.80% | 87.80% | 1612 ms | ↑ 1.08x | 0 | — | — | 12m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.80% | 99.80% | 1031 ms | ↑ 1.07x | 0 | — | — | 9m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1701 ms | → 1.00x | 0 | — | — | 7m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1407 ms | → 1.01x | 0 | — | — | 26m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1261 ms | ↑ 1.14x | 0 | — | — | 27m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1071 ms | ↑ 1.15x | 0 | — | — | 27m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.95% | 72.45% | 72.45% | 1146 ms | → 1.01x | 1 | 0s | 16d ago | 11m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2851 ms | ↑ 1.06x | 1 | 0s | 12d ago | 22m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 838 ms | → 1.04x | 0 | — | — | 24m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.84% | 97.86% | 97.86% | 1763 ms | ↑ 1.13x | 3 | 0s | 9d ago | 9m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.95% | 99.95% | 1054 ms | ↑ 1.38x | 0 | — | — | 6m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1415 ms | → 1.00x | 0 | — | — | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.76% | 98.76% | 564 ms | → 1.02x | 0 | — | — | 13m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.35% | 98.69% | 98.69% | 2013 ms | ↓ 0.81x | 1 | 3h 60m | 28d ago | 24m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 89.95% | 96.86% | 96.86% | 3103 ms | ↓ 0.65x | 4 | 18h 12m | 15d ago | 10m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.34% | 99.46% | 99.46% | 1618 ms | → 0.99x | 3 | 1h 3m | 13d ago | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.72% | 97.72% | 3592 ms | ↑ 1.38x | 1 | 0s | 18d ago | 10m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 654 ms | ↑ 1.08x | 1 | 0s | 16d ago | 7m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.35% | 98.56% | 98.56% | 652 ms | ↑ 1.10x | 5 | 28m | 8d ago | 11m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 584 ms | → 1.00x | 0 | — | — | 5m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 93.51% | 93.51% | 93.51% | 1545 ms | → 1.04x | 1 | 13h 12m | 9d ago | 5m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 27.57% | 27.57% | 982 ms | ↑ 1.19x | 1 | 0s | 20d ago | 24m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.79% | 99.79% | 671 ms | ↓ 0.91x | 1 | 0s | 14d ago | 12m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.23% | 98.23% | 1683 ms | ↑ 1.08x | 0 | — | — | 12m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1252 ms | → 1.01x | 0 | — | — | 24m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.93% | 87.93% | 2395 ms | → 1.04x | 0 | — | — | 13m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.48% | 96.48% | 1800 ms | → 1.00x | 0 | — | — | 14m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.87% | 99.87% | 1583 ms | → 0.95x | 0 | — | — | 24m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 16.88% | 16.88% | 1954 ms | → 1.02x | 1 | 0s | 27d ago | 26m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1512 ms | ↑ 1.10x | 0 | — | — | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.73% | 96.73% | 1570 ms | ↑ 1.14x | 0 | — | — | 9m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.85% | 99.85% | 2176 ms | → 1.04x | 1 | 0s | 12d ago | 24m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 18.81% | 18.81% | 1852 ms | → 1.02x | 0 | — | — | 14m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 16.71% | 16.71% | 1578 ms | ↑ 1.07x | 0 | — | — | 14m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.84% | 99.86% | 99.86% | 2853 ms | → 1.02x | 3 | 0s | 9d ago | 7m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.67% | 99.73% | 99.73% | 2597 ms | → 0.97x | 1 | 2h 18m | 15d ago | 11m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1741 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.08% | 99.64% | 99.64% | 2144 ms | ↓ 0.92x | 6 | 2h 50m | 20d ago | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2072 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.43% | 98.43% | 1283 ms | ↑ 1.26x | 0 | — | — | 9m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.84% | 45.18% | 45.18% | 1141 ms | → 0.96x | 3 | 0s | 14d ago | 11m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 330 ms | ↓ 0.94x | 0 | — | — | 25m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.74% | 99.46% | 95.92% | 95.92% | 2929 ms | → 1.00x | 10 | 0s | 3d ago | 27m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.74% | 99.95% | 16.91% | 16.91% | 574 ms | ↓ 0.51x | 1 | 0s | 3d ago | 22m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.74% | 99.84% | 99.84% | 99.84% | 3003 ms | → 1.02x | 3 | 0s | 7d ago | 27m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.74% | 99.95% | 16.81% | 16.81% | 2551 ms | → 1.02x | 1 | 0s | 2d ago | 21m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.74% | 99.89% | 52.98% | 52.98% | 3495 ms | ↑ 1.10x | 2 | 0s | 22h ago | 15m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.74% | 99.84% | 84.99% | 84.99% | 2243 ms | ↑ 1.10x | 3 | 0s | 1d ago | 27m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.74% | 99.95% | 18.65% | 18.65% | 1015 ms | ↑ 1.05x | 1 | 0s | 3d ago | 22m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.74% | 99.30% | 99.43% | 99.43% | 2735 ms | → 1.01x | 6 | 32m | 5d ago | 27m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.74% | 99.89% | 38.57% | 38.57% | 1335 ms | ↓ 0.91x | 2 | 0s | 2d ago | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.74% | 99.95% | 84.13% | 84.13% | 2065 ms | ↑ 1.06x | 1 | 0s | 6d ago | 21m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.74% | 99.89% | 22.35% | 22.35% | 2326 ms | ↑ 1.07x | 2 | 0s | 4d ago | 28m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.74% | 99.95% | 92.00% | 92.00% | 3615 ms | ↑ 1.05x | 1 | 0s | 4d ago | 28m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.74% | 99.84% | 99.80% | 99.80% | 1915 ms | → 1.02x | 3 | 0s | 4d ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.74% | 99.95% | 99.83% | 99.83% | 2231 ms | → 1.03x | 1 | 0s | 6d ago | 14m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.74% | 99.89% | 65.08% | 65.08% | 1531 ms | → 1.00x | 2 | 0s | 5d ago | 13m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.74% | 84.71% | 33.79% | 33.79% | 1866 ms | ↑ 1.06x | 5 | 19h 14m | 2d ago | 14m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.74% | 99.78% | 66.55% | 66.55% | 808 ms | → 0.98x | 4 | 0s | 5h ago | 13m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.74% | 99.95% | 99.80% | 99.80% | 2794 ms | → 1.04x | 1 | 0s | 5d ago | 26m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.74% | 99.95% | 99.93% | 99.93% | 791 ms | ↑ 1.12x | 1 | 0s | 4d ago | 26m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.74% | 99.95% | 99.10% | 99.10% | 1188 ms | → 0.96x | 1 | 0s | 4d ago | 26m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.74% | 99.89% | 99.06% | 99.06% | 1321 ms | ↑ 1.10x | 2 | 0s | 6d ago | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.74% | 99.84% | 99.83% | 99.83% | 349 ms | ↑ 1.27x | 3 | 0s | 4d ago | 11m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.74% | 99.78% | 99.80% | 99.80% | 1438 ms | → 1.00x | 3 | 10m | 1d ago | 11m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.74% | 99.95% | 89.86% | 89.86% | 1065 ms | → 0.99x | 1 | 0s | 2d ago | 12m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.74% | 99.89% | 48.68% | 48.68% | 584 ms | → 1.04x | 2 | 0s | 3d ago | 11m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.74% | 99.95% | 99.97% | 99.97% | 1956 ms | → 1.01x | 1 | 0s | 2d ago | 12m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.74% | 99.95% | 98.84% | 98.84% | 1395 ms | ↓ 0.87x | 1 | 0s | 3d ago | 12m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.74% | 99.89% | 99.89% | 99.89% | 538 ms | ↓ 0.95x | 2 | 0s | 1d ago | 9m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 97.81% | 98.70% | 98.70% | 2926 ms | ↑ 1.07x | 3 | 4h 28m | 15h ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.74% | 99.67% | 99.85% | 99.85% | 1150 ms | ↑ 1.08x | 4 | 10m | 1d ago | 9m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.74% | 99.89% | 99.67% | 99.67% | 884 ms | ↓ 0.72x | 2 | 0s | 6d ago | 9m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.74% | 99.84% | 99.82% | 99.82% | 494 ms | → 1.01x | 3 | 0s | 15h ago | 7m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.74% | 99.56% | 99.58% | 99.58% | 2696 ms | → 1.02x | 6 | 8m | 5d ago | 7m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.81% | 99.81% | 99.81% | 2464 ms | → 1.04x | 1 | 0s | 1d ago | 5m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.74% | 99.56% | 99.53% | 99.53% | 2094 ms | ↓ 0.83x | 8 | 0s | 7d ago | 7m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.74% | 99.95% | 97.17% | 97.17% | 2323 ms | ↑ 2.44x | 1 | 0s | 6d ago | 8m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.88% | 99.90% | 99.90% | 2537 ms | ↑ 2.35x | 2 | 0s | 20h ago | 7m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.74% | 99.94% | 97.11% | 97.11% | 1178 ms | ↑ 1.66x | 1 | 0s | 20h ago | 8m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.49% | 99.73% | 78.67% | 78.67% | 2167 ms | → 1.05x | 5 | 0s | 6d ago | 21m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.49% | 98.16% | 99.14% | 99.14% | 3572 ms | ↑ 1.08x | 12 | 39m | 4d ago | 24m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.49% | 96.87% | 16.36% | 16.36% | 2224 ms | ↑ 1.09x | 54 | 1m | 4d ago | 24m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.49% | 98.22% | 85.35% | 85.35% | 4610 ms | → 1.03x | 31 | 2m | 4d ago | 24m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.49% | 97.93% | 98.60% | 98.60% | 1348 ms | → 1.04x | 7 | 1h 31m | 6d ago | 13m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.49% | 99.89% | 98.03% | 98.03% | 1871 ms | → 0.97x | 1 | 30m | 5d ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.48% | 76.31% | 79.83% | 79.83% | 2851 ms | → 0.99x | 12 | 13h 59m | 4d ago | 7m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.48% | 99.48% | 99.48% | 99.48% | 1521 ms | → 1.00x | 1 | 0s | 1d ago | 5m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 99.41% | 99.41% | 99.41% | 99.41% | 4456 ms | → 1.00x | 1 | 0s | 3d ago | 7m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.40% | 99.40% | 99.40% | 99.40% | 1492 ms | → 1.00x | 1 | 0s | 1d ago | 6m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.23% | 98.11% | 98.96% | 98.96% | 3599 ms | ↑ 1.07x | 13 | 36m | 4d ago | 24m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.23% | 99.03% | 96.51% | 96.51% | 1305 ms | → 1.01x | 7 | 36m | 15h ago | 22m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.23% | 99.84% | 93.42% | 93.42% | 689 ms | → 1.02x | 3 | 0s | 16h ago | 12m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.23% | 99.73% | 92.11% | 92.11% | 1523 ms | ↑ 1.07x | 5 | 0s | 5d ago | 12m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.23% | 99.46% | 90.87% | 90.87% | 1568 ms | ↓ 0.94x | 10 | 0s | 2d ago | 12m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.22% | 98.25% | 95.36% | 95.36% | 1768 ms | ↑ 1.35x | 7 | 1h 22m | 5h ago | 7m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.22% | 91.15% | 91.15% | 91.15% | 1226 ms | ↑ 1.20x | 54 | 20m | 1d ago | 5m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.22% | 99.44% | 99.44% | 99.44% | 661 ms | → 1.03x | 1 | 1h | 7d ago | 5m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.22% | 99.12% | 99.26% | 99.26% | 1548 ms | ↑ 1.21x | 5 | 50m | 15h ago | 7m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.22% | 98.85% | 99.02% | 99.02% | 1432 ms | ↑ 1.35x | 14 | 13m | 2d ago | 7m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.22% | 99.78% | 99.82% | 99.82% | 1004 ms | ↑ 2.26x | 2 | 30m | 4d ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.22% | 98.20% | 96.33% | 96.33% | 1498 ms | → 1.00x | 4 | 2h 27m | 7d ago | 9m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (57)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.98% | 98.60% | 98.23% | 98.23% | 4596 ms | → 1.00x | 26 | 0s | 57m ago | 27m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.98% | 99.62% | 98.83% | 98.83% | 2486 ms | → 1.01x | 6 | 3m | 15h ago | 27m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.98% | 93.77% | 67.67% | 67.67% | 4003 ms | → 0.96x | 44 | 33m | 2d ago | 22m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.97% | 99.62% | 96.66% | 96.66% | 4410 ms | ↑ 1.09x | 7 | 0s | 2d ago | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.97% | 98.75% | 65.16% | 65.16% | 4748 ms | → 1.00x | 21 | 3m | 6h ago | 13m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.97% | 98.75% | 90.67% | 90.67% | 3695 ms | → 0.96x | 23 | 0s | 3d ago | 11m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.97% | 98.15% | 85.21% | 85.21% | 4744 ms | → 1.00x | 33 | 56s | 4d ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.97% | 98.74% | 98.69% | 98.69% | 1831 ms | ↑ 1.18x | 21 | 2m | 3d ago | 6m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 98.97% | 99.51% | 96.08% | 96.08% | 713 ms | ↑ 1.39x | 3 | 51m | 6d ago | 9m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.72% | 98.32% | 16.36% | 16.36% | 3676 ms | → 0.99x | 31 | 0s | 2h ago | 21m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.72% | 99.51% | 99.90% | 99.90% | 795 ms | → 1.04x | 4 | 29m | 5d ago | 22m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.72% | 99.73% | 99.67% | 99.67% | 1422 ms | ↑ 1.05x | 4 | 8m | 1d ago | 15m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.47% | 97.78% | 73.76% | 73.76% | 4562 ms | → 1.00x | 35 | 4m | 16h ago | 22m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.46% | 99.46% | 71.20% | 71.20% | 1235 ms | → 1.04x | 9 | 3m | 1d ago | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.46% | 98.91% | 85.89% | 85.89% | 4126 ms | ↓ 0.93x | 19 | 1m | 2d ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.46% | 62.01% | 31.21% | 31.21% | 2692 ms | → 1.02x | 76 | 2h 54m | 21h ago | 26m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.45% | 95.95% | 96.55% | 96.55% | 1526 ms | ↑ 1.49x | 12 | 1h 57m | 1d ago | 7m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.21% | 80.19% | 52.41% | 52.41% | 3466 ms | → 1.05x | 7 | 19h 44m | 6d ago | 22m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.21% | 91.88% | 15.22% | 15.22% | 2413 ms | → 1.01x | 113 | 7m | 1h ago | 22m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.19% | 99.02% | 99.19% | 99.19% | 879 ms | → 1.03x | 18 | 0s | 3h ago | 6m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.93% | 99.51% | 98.54% | 98.54% | 2761 ms | ↑ 1.39x | 4 | 37m | 2d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 97.93% | 99.51% | 99.75% | 99.75% | 3035 ms | ↑ 1.12x | 5 | 24m | 4d ago | 10m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.70% | 97.83% | 15.07% | 15.07% | 2596 ms | → 1.00x | 11 | 59m | 5d ago | 21m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 97.69% | 99.18% | 97.39% | 97.39% | 2225 ms | ↑ 1.10x | 10 | 12m | 13h ago | 11m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.44% | 98.22% | 84.72% | 84.72% | 3380 ms | ↑ 1.06x | 33 | 0s | 2d ago | 28m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.44% | 98.48% | 98.92% | 98.92% | 2075 ms | ↑ 1.09x | 20 | 11m | 1d ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.19% | 97.51% | 98.60% | 98.60% | 4262 ms | → 1.02x | 45 | 40s | 18h ago | 21m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.92% | 96.24% | 81.68% | 81.68% | 4852 ms | → 1.01x | 64 | 2m | 14h ago | 12m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 96.90% | 75.52% | 80.89% | 80.89% | 406 ms | → 0.96x | 5 | 1d 7h | 3d ago | 9m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 96.64% | 98.17% | 98.17% | 98.17% | 4185 ms | ↑ 1.12x | 3 | 1h 30m | 3d ago | 5m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.14% | 96.40% | 82.46% | 82.46% | 4620 ms | → 0.98x | 53 | 6m | 2d ago | 11m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 96.12% | 98.91% | 91.06% | 91.06% | 1802 ms | ↑ 1.19x | 7 | 39m | 1d ago | 9m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 95.88% | 95.88% | 66.79% | 66.79% | 1959 ms | → 1.00x | 1 | 2h 11m | 8h ago | 8m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.87% | 97.70% | 98.44% | 98.44% | 726 ms | ↑ 1.20x | 7 | 2h 8m | 6d ago | 7m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 93.61% | 96.87% | 28.81% | 28.81% | 1776 ms | ↑ 1.13x | 10 | 1h 56m | 2d ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.99% | 90.05% | 53.33% | 53.33% | 3446 ms | ↓ 0.94x | 153 | 5m | 39m ago | 9m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 91.82% | 98.28% | 79.45% | 79.45% | 2113 ms | → 1.04x | 1 | 13h | 4d ago | 27m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 91.21% | 97.81% | 97.60% | 97.60% | 3424 ms | ↑ 1.12x | 14 | 52m | 4d ago | 10m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 91.21% | 98.14% | 98.31% | 98.31% | 3085 ms | ↑ 1.43x | 15 | 37m | 4d ago | 10m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 90.96% | 97.98% | 97.73% | 97.73% | 3905 ms | ↑ 1.48x | 18 | 31m | 1d ago | 10m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 90.70% | 97.70% | 98.67% | 98.67% | 189 ms | ↑ 1.28x | 16 | 49m | 4d ago | 10m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 89.97% | 95.32% | 71.43% | 71.43% | 1252 ms | → 1.01x | 13 | 1h 57m | 3d ago | 13m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 87.08% | 94.47% | 95.26% | 95.26% | 4062 ms | ↑ 1.39x | 22 | 1h 20m | 8h ago | 7m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 87.08% | 97.04% | 97.48% | 97.48% | 2009 ms | ↑ 1.10x | 3 | 7h 23m | 3d ago | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 86.67% | 89.72% | 17.63% | 17.63% | 4465 ms | → 0.97x | 151 | 7m | 1h ago | 14m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 75.00% | 88.37% | 91.26% | 91.26% | 2586 ms | ↓ 0.94x | 10 | 7h 45m | 6d ago | 11m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 71.58% | 93.39% | 83.17% | 83.17% | 1762 ms | ↑ 1.15x | 8 | 6h 12m | 1d ago | 9m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.52% | 65.46% | 62.15% | 62.15% | 4797 ms | → 0.99x | 361 | 19m | 2h ago | 22m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 58.97% | 88.39% | 98.13% | 98.13% | 1381 ms | → 1.02x | 99 | 29m | 22h ago | 25m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 56.41% | 24.06% | 31.34% | 31.34% | 841 ms | ↑ 1.06x | 3 | 7d 11h | 4d ago | 13m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 54.12% | 54.12% | 54.12% | 54.12% | 4524 ms | → 1.00x | 1 | 1d 12h | 3d ago | 6m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 53.49% | 11.31% | 60.75% | 60.75% | 1140 ms | → 1.00x | 1 | 26d 4h | 30d ago | 9m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 40.31% | 85.57% | 80.84% | 80.84% | 4810 ms | → 1.01x | 40 | 2h 29m | 5d ago | 9m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 13.18% | 10.96% | 10.56% | 10.56% | 3174 ms | ↓ 0.87x | 176 | 3h 15m | 1h ago | 6m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 10.59% | 14.83% | 29.85% | 29.85% | 671 ms | ↓ 0.27x | 1 | 25d 23h | 27d ago | 7m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 10.54% | 14.71% | 65.79% | 65.79% | 667 ms | ↓ 0.21x | 2 | 12d 23h | 27d ago | 13m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.26% | 0.05% | 29.65% | 29.65% | 607 ms | → 1.00x | 1 | 29d 23h | 30d ago | 14m ago |

</details>

<details open>
<summary><strong>🔴 Down (237)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 87.08% | 93.72% | 93.72% | 93.72% | 4673 ms | → 1.02x | 12 | 1h 22m | 16h ago | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 85.60% | 96.89% | 54.74% | 54.74% | 3705 ms | → 0.98x | 2 | 11h 55m | 1d ago | 11m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 83.98% | 96.16% | 96.84% | 96.84% | 679 ms | ↑ 1.39x | 4 | 7h 6m | 1d ago | 6m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 81.79% | 95.36% | 98.35% | 98.35% | 2919 ms | → 0.97x | 19 | 1h 32m | 1d ago | 25m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 72.49% | 92.59% | 97.23% | 97.23% | 249 ms | ↓ 0.34x | 2 | 1d 4h | 2d ago | 12m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 70.44% | 69.81% | 21.09% | 21.09% | 4751 ms | → 1.04x | 333 | 17m | 43m ago | 12m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 63.33% | 91.91% | 91.54% | 91.54% | 1007 ms | → 1.01x | 8 | 7h 35m | 3d ago | 26m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 62.47% | 91.98% | 97.15% | 97.15% | 3371 ms | → 0.98x | 2 | 1d 7h | 3d ago | 10m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 42.20% | 87.79% | 90.78% | 90.78% | 1045 ms | → 0.98x | 1 | 4d 4h | 4d ago | 25m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 31.52% | 85.51% | 77.69% | 77.69% | 495 ms | ↓ 0.94x | 1 | 4d 20h | 5d ago | 8m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 26.60% | 83.31% | 83.42% | 83.42% | 4542 ms | → 0.99x | 21 | 5h 60m | 5d ago | 28m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 23.27% | 83.77% | 41.69% | 41.69% | 1097 ms | → 1.02x | 3 | 1d 19h | 5d ago | 22m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 20.16% | 42.67% | 42.67% | 42.67% | 2190 ms | ↑ 1.13x | 1 | 5d 14h | 6d ago | 5m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.79% | 1.29% | 60.53% | 60.53% | 4129 ms | ↑ 1.06x | 24 | 1d 5h | 1d ago | 28m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 82.42% | 82.42% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 68.25% | 68.25% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 73.40% | 73.40% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 40.42% | 57.13% | 57.13% | — | — | 13 | 1d 11h | 19d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 29.23% | 83.23% | 83.23% | — | — | 6 | 3d 16h | 22d ago | 11m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 63.19% | 63.19% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.63% | 5.63% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.47% | 12.47% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.33% | 60.56% | 60.56% | — | — | 1 | 29d 22h | 30d ago | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.38% | 3.38% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 11.48% | 71.82% | 71.82% | — | — | 1 | 26d 23h | 27d ago | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 82.67% | 82.67% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.29% | 36.29% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 23.06% | 92.33% | 92.33% | — | — | 1 | 23d 20h | 24d ago | 27m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.77% | 23.77% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 74.19% | 74.19% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 52.29% | 52.29% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.90% | 29.90% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 83.06% | 83.06% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 62.57% | 62.57% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 76.73% | 76.73% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.21% | 15.21% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 50.01% | 50.01% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 59.42% | 94.26% | 94.26% | — | — | 6 | 2d 4h | 13d ago | 22m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 34.55% | 34.55% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 33.01% | 83.41% | 83.41% | — | — | 2 | 10d 11h | 21d ago | 14m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.47% | 3.47% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 83.25% | 83.25% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 31.07% | 41.35% | 41.35% | — | — | 6 | 3d 14h | 22d ago | 6m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.70% | 51.70% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.05% | 2.05% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 36.52% | 91.22% | 91.22% | — | — | 5 | 3d 24h | 20d ago | 24m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 46.45% | 81.09% | 81.09% | — | — | 2 | 8d 11h | 16d ago | 10m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 51.55% | 45.73% | 45.73% | — | — | 2 | 7d 18h | 15d ago | 13m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 6.82% | 78.30% | 78.30% | — | — | 1 | 28d 4h | 28d ago | 11m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 32.41% | 32.41% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 54.40% | 54.40% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 52.35% | 56.32% | 56.32% | — | — | 1 | 15d 6h | 15d ago | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.53% | 24.53% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 4h | 3d ago | 5m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.00% | 57.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 30.41% | 24.65% | 24.65% | — | — | 1 | 21d 21h | 22d ago | 12m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.46% | 5.46% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 65.59% | 65.59% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 83.01% | 83.01% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.93% | 6.93% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 79.26% | 79.26% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 11.37% | 81.79% | 81.79% | — | — | 1 | 26d 22h | 27d ago | 27m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 32.99% | 33.61% | 33.61% | — | — | 1 | 21d 3h | 21d ago | 11m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 27.83% | 27.83% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 46.78% | 26.07% | 26.07% | — | — | 4 | 4d 4h | 14d ago | 10m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 52.73% | 52.73% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 73.58% | 76.48% | 76.48% | — | — | 3 | 2d 20h | 9d ago | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 6.98% | 55.14% | 55.14% | — | — | 2 | 14d 1h | 28d ago | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 9.93% | 9.93% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 11.53% | 68.96% | 68.96% | — | — | 1 | 26d 22h | 27d ago | 10m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 76.40% | 76.40% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.57% | 46.57% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.33% | 42.33% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 23.45% | 34.65% | 34.65% | — | — | 1 | 23d 19h | 24d ago | 6m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 83.02% | 83.02% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 58.63% | 58.63% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.95% | 38.95% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 76.72% | 78.92% | 78.92% | — | — | 2 | 3d 19h | 8d ago | 11m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 29.17% | 83.23% | 83.23% | — | — | 6 | 3d 16h | 22d ago | 11m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 61.80% | 82.64% | 82.64% | — | — | 4 | 3d 1h | 12d ago | 9m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.35% | 31.35% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.56% | 2.56% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 11.39% | 83.24% | 83.24% | — | — | 1 | 26d 22h | 27d ago | 25m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.62% | 41.62% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 76.38% | 97.60% | 97.60% | — | — | 1 | 7d 17h | 8d ago | 21m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 82.98% | 82.98% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.94% | 32.94% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 82.91% | 82.91% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 56.71% | 56.71% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 24.66% | 24.66% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 44.91% | 44.91% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 80.57% | 80.57% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 66.90% | 66.90% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 31.34% | 31.34% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 3h | 3d ago | 7m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 79.05% | 79.05% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 3h | 3d ago | 7m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 52.69% | 52.69% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.23% | 3.23% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 3h | 3d ago | 7m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.25% | 43.25% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 77.46% | 77.46% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 66.45% | 41.72% | 41.72% | — | — | 10 | 1d 2h | 10d ago | 24m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.09% | 59.09% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 11.38% | 48.25% | 48.25% | — | — | 3 | 8d 24h | 27d ago | 8m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 65.32% | 65.32% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.05% | 89.02% | 89.02% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.34% | 28.34% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.03% | 10.03% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.62% | 12.62% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 26.48% | 26.48% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.14% | 24.14% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 42.68% | 53.05% | 53.05% | — | — | 5 | 3d 15h | 18d ago | 24m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 43.72% | 94.26% | 94.26% | — | — | 13 | 1d 8h | 16d ago | 26m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 57.64% | 57.64% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 60.71% | 81.38% | 81.38% | — | — | 2 | 6d 5h | 12d ago | 10m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 11.16% | 11.16% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.49% | 17.49% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 49.59% | 49.59% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 15.75% | 28.27% | 28.27% | — | — | 1 | 25d 20h | 26d ago | 7m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 55.26% | 55.26% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 39.58% | 39.58% | — | — | 1 | 3d 3h | 3d ago | 13m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 23.63% | 23.63% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 37.08% | 37.08% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 50.49% | 50.49% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.56% | 5.56% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 49.26% | 82.86% | 82.86% | — | — | 2 | 8d 3h | 16d ago | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 19.50% | 90.46% | 90.46% | — | — | 1 | 24d 19h | 25d ago | 25m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 68.49% | 75.80% | 75.80% | — | — | 1 | 10d 6h | 10d ago | 5m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 83.11% | 83.11% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 82.03% | 82.03% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 63.97% | 63.97% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 75.12% | 75.12% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 81.88% | 81.88% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.60% | 19.60% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 47.58% | 59.90% | 59.90% | — | — | 1 | 16d 19h | 17d ago | 27m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 47.81% | 44.30% | 44.30% | — | — | 11 | 1d 12h | 16d ago | 10m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.08% | 4.08% | — | — | 2 | 14d 23h | 18d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.18% | 34.18% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.51% | 68.72% | 68.72% | — | — | 4 | 7d 5h | 16d ago | 25m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 14.12% | 26.24% | 26.24% | — | — | 31 | 19h 29m | 14d ago | 11m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.64% | 7.64% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 65.79% | 65.79% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 27.30% | 38.10% | 38.10% | — | — | 2 | 11d 9h | 23d ago | 7m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.44% | 44.51% | 44.51% | — | — | 1 | 29d 21h | 30d ago | 8m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 6.24% | 6.24% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 39.44% | 63.67% | 63.67% | — | — | 2 | 9d 9h | 16d ago | 8m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 27.41% | 56.20% | 56.20% | — | — | 2 | 11d 8h | 23d ago | 7m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 38.28% | 38.28% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 24.37% | 24.37% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 57.48% | 5.49% | 5.49% | — | — | 5 | 2d 15h | 10d ago | 25m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.45% | 12.45% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.00% | 18.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 18.78% | 18.78% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 37.67% | 37.67% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 16.67% | 10.18% | 10.18% | — | — | 157 | 3h 32m | 21d ago | 13m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 10.79% | 10.79% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.99% | 0.99% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.60% | 5.60% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.57% | 6.57% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.02% | 50.02% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 21.83% | 53.60% | 53.60% | — | — | 1 | 24d 5h | 24d ago | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 83.08% | 83.08% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 42.35% | 78.57% | 78.57% | — | — | 1 | 18d 11h | 18d ago | 9m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 48.98% | 48.98% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 83.26% | 83.26% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 4.10% | 58.74% | 58.74% | — | — | 1 | 28d 21h | 29d ago | 9m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.48% | 41.48% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.25% | 2.25% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 26.53% | 19.89% | 19.89% | — | — | 1 | 22d 23h | 23d ago | 13m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3d 3h | 3d ago | 7m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 80.98% | 80.98% | — | — | 1 | 29d 24h | 30d ago | 14m ago |

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
