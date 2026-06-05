# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**643 providers** — 353 🟢 operational · 49 🟡 degraded · 241 🔴 down · 0 ⚫ unknown

_Updated 2026-06-05 07:12 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (353)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.89% | 97.75% | 97.75% | 495 ms | ↓ 0.78x | 2 | 0s | 8d ago | 14m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1720 ms | → 1.00x | 0 | — | — | 11m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.95% | 18.14% | 18.14% | 1717 ms | → 0.96x | 1 | 0s | 7d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.36% | 97.36% | 2473 ms | → 1.05x | 0 | — | — | 29m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.95% | 51.88% | 51.88% | 1805 ms | ↑ 1.07x | 1 | 0s | 24d ago | 17m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 1559 ms | → 1.00x | 0 | — | — | 12m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.84% | 97.78% | 97.78% | 2837 ms | → 0.99x | 3 | 0s | 8d ago | 26m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1527 ms | ↑ 1.15x | 0 | — | — | 11m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.77% | 98.77% | 1680 ms | → 0.98x | 0 | — | — | 31m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.39% | 99.39% | 3383 ms | ↓ 0.93x | 1 | 0s | 15d ago | 31m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.02% | 99.02% | 2056 ms | ↑ 1.12x | 1 | 19m | 17d ago | 13m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.45% | 94.45% | 2002 ms | → 1.05x | 0 | — | — | 14m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1729 ms | ↑ 1.12x | 0 | — | — | 12m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.25% | 97.35% | 97.35% | 2082 ms | ↑ 1.06x | 1 | 4h 31m | 22d ago | 14m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.14% | 92.14% | 2536 ms | ↑ 1.19x | 0 | — | — | 32m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1653 ms | ↑ 1.22x | 1 | 0s | 22d ago | 12m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 98.77% | 96.59% | 96.59% | 2484 ms | ↓ 0.87x | 4 | 2h 10m | 8d ago | 14m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.84% | 99.84% | 1068 ms | ↑ 1.14x | 1 | 0s | 21d ago | 14m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 855 ms | ↑ 1.24x | 0 | — | — | 11m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.95% | 98.45% | 98.45% | 915 ms | → 1.01x | 1 | 0s | 28d ago | 15m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.91% | 96.91% | 1462 ms | → 1.02x | 1 | 0s | 21d ago | 14m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.59% | 98.59% | 1723 ms | ↑ 1.50x | 0 | — | — | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 35.11% | 35.11% | 627 ms | → 1.03x | 0 | — | — | 26m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1656 ms | → 1.00x | 0 | — | — | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.91% | 99.91% | 542 ms | ↓ 0.91x | 1 | 0s | 24d ago | 14m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.95% | 96.69% | 96.69% | 2168 ms | → 1.01x | 1 | 0s | 10d ago | 17m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.84% | 98.84% | 914 ms | ↑ 1.14x | 1 | 0s | 8d ago | 28m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 515 ms | ↑ 1.06x | 1 | 0s | 14d ago | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.41% | 96.41% | 528 ms | ↑ 1.10x | 0 | — | — | 16m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1580 ms | ↓ 0.95x | 1 | 0s | 14d ago | 12m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.84% | 99.86% | 99.86% | 2395 ms | ↑ 1.07x | 3 | 0s | 10d ago | 12m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.16% | 98.16% | 2772 ms | ↑ 1.06x | 1 | 60m | 15d ago | 16m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.78% | 97.78% | 188 ms | ↑ 1.14x | 0 | — | — | 14m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.73% | 99.67% | 99.67% | 1117 ms | ↓ 0.90x | 5 | 0s | 8d ago | 13m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.72% | 83.72% | 1089 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 1038 ms | → 1.03x | 1 | 0s | 14d ago | 12m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.46% | 80.81% | 80.81% | 1588 ms | → 1.01x | 3 | 50m | 18d ago | 19m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.50% | 97.50% | 1194 ms | ↑ 1.29x | 0 | — | — | 17m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 448 ms | ↑ 1.05x | 0 | — | — | 27m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2872 ms | → 1.00x | 1 | 0s | 28d ago | 27m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.92% | 98.92% | 295 ms | ↑ 1.35x | 0 | — | — | 16m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.36% | 97.81% | 97.81% | 3480 ms | → 1.04x | 12 | 0s | 11d ago | 30m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.81% | 99.81% | 1944 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.92% | 95.92% | 1284 ms | ↓ 0.80x | 0 | — | — | 16m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.85% | 99.85% | 2164 ms | ↓ 0.92x | 3 | 0s | 14d ago | 12m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.91% | 98.69% | 98.69% | 2850 ms | ↑ 1.06x | 2 | 6h 41m | 13d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.73% | 99.87% | 99.87% | 1095 ms | → 1.03x | 3 | 13m | 18d ago | 14m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 2054 ms | → 1.04x | 0 | — | — | 27m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 100.00% | 100.00% | 100.00% | 588 ms | → 1.00x | 0 | — | — | 12m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 63.27% | 63.27% | 2448 ms | → 1.00x | 0 | — | — | 13m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3406 ms | ↓ 0.86x | 1 | 0s | 11d ago | 26m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 27.55% | 27.55% | 1115 ms | → 1.02x | 0 | — | — | 27m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 98.87% | 98.48% | 98.48% | 1659 ms | → 0.97x | 11 | 23m | 9d ago | 12m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.48% | 95.51% | 95.51% | 1808 ms | → 1.05x | 3 | 5h 26m | 10d ago | 14m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1274 ms | → 1.01x | 1 | 0s | 14d ago | 12m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2510 ms | → 1.00x | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1889 ms | ↑ 1.13x | 0 | — | — | 12m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.51% | 97.40% | 97.40% | 1832 ms | ↑ 1.23x | 6 | 4h 32m | 19d ago | 20m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.42% | 96.42% | 846 ms | → 1.04x | 0 | — | — | 17m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.07% | 53.07% | 919 ms | → 1.03x | 0 | — | — | 20m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 811 ms | → 1.00x | 0 | — | — | 11m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1689 ms | → 1.01x | 0 | — | — | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1136 ms | → 1.01x | 1 | 0s | 14d ago | 12m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3384 ms | → 1.05x | 0 | — | — | 26m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.05% | 97.05% | 1597 ms | → 1.04x | 0 | — | — | 26m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.18% | 45.96% | 45.96% | 1941 ms | → 0.98x | 9 | 1h 42m | 16d ago | 27m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 100.00% | 100.00% | 48.05% | 48.05% | 1586 ms | → 1.00x | 0 | — | — | 13m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 99.15% | 96.51% | 96.51% | 1372 ms | → 1.03x | 7 | 27m | 9d ago | 27m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.73% | 98.97% | 98.97% | 1616 ms | ↑ 1.18x | 2 | 44m | 13d ago | 13m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.34% | 82.34% | 1796 ms | → 0.99x | 0 | — | — | 19m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1511 ms | ↑ 1.14x | 0 | — | — | 12m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.54% | 98.54% | 1894 ms | → 1.01x | 0 | — | — | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.96% | 99.96% | 3677 ms | → 1.03x | 1 | 0s | 14d ago | 12m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.59% | 92.59% | 961 ms | ↑ 1.13x | 1 | 0s | 11d ago | 20m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.46% | 98.46% | 937 ms | ↑ 1.06x | 0 | — | — | 14m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.15% | 99.15% | 2539 ms | → 0.99x | 0 | — | — | 13m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 100.00% | 93.57% | 93.57% | 2280 ms | ↑ 1.05x | 0 | — | — | 13m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.71% | 97.71% | 3084 ms | ↓ 0.93x | 2 | 0s | 10d ago | 16m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 73.89% | 87.75% | 87.75% | 806 ms | ↓ 0.86x | 2 | 4d | 19d ago | 14m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.58% | 45.58% | 971 ms | → 1.02x | 0 | — | — | 20m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 75.00% | 75.00% | 703 ms | → 0.98x | 1 | 0s | 22d ago | 19m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.30% | 94.61% | 94.61% | 654 ms | ↓ 0.82x | 5 | 7h 21m | 20d ago | 12m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.37% | 53.37% | 1539 ms | → 1.02x | 1 | 0s | 15d ago | 27m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1309 ms | → 1.00x | 0 | — | — | 12m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.04% | 98.04% | 1824 ms | ↓ 0.83x | 0 | — | — | 17m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1232 ms | → 1.04x | 1 | 0s | 14d ago | 12m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2367 ms | → 1.01x | 0 | — | — | 11m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 81.12% | 81.12% | 1409 ms | → 1.01x | 1 | 0s | 21d ago | 19m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.95% | 60.42% | 60.42% | 890 ms | → 1.01x | 1 | 0s | 8d ago | 19m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.96% | 97.96% | 946 ms | → 0.99x | 1 | 0s | 21d ago | 20m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.79% | 99.81% | 99.81% | 1576 ms | ↑ 1.07x | 3 | 6m | 14d ago | 12m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.89% | 58.63% | 58.63% | 1731 ms | → 1.03x | 2 | 0s | 17d ago | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.90% | 61.90% | 1120 ms | → 1.02x | 0 | — | — | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2570 ms | → 0.99x | 0 | — | — | 13m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.18% | 99.18% | 1412 ms | ↓ 0.94x | 0 | — | — | 19m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.55% | 89.55% | 1853 ms | → 0.99x | 1 | 0s | 23d ago | 18m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.79% | 99.79% | 2620 ms | → 1.02x | 0 | — | — | 16m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.73% | 99.73% | 1995 ms | → 1.02x | 3 | 0s | 16d ago | 30m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1854 ms | → 1.01x | 0 | — | — | 12m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.01% | 99.01% | 3091 ms | ↑ 1.08x | 1 | 29m | 11d ago | 30m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.10% | 98.10% | 2936 ms | ↓ 0.92x | 0 | — | — | 31m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 73.05% | 73.05% | 1610 ms | ↓ 0.73x | 0 | — | — | 17m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 90.98% | 90.98% | 340 ms | ↑ 1.05x | 3 | 0s | 16d ago | 14m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.31% | 97.63% | 97.63% | 597 ms | ↓ 0.73x | 3 | 5h 59m | 13d ago | 12m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 1250 ms | ↑ 1.23x | 1 | 0s | 30d ago | 13m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1220 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 2856 ms | ↓ 0.94x | 2 | 0s | 9d ago | 31m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1744 ms | ↑ 1.07x | 1 | 0s | 17d ago | 29m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.81% | 88.81% | 2013 ms | ↓ 0.90x | 1 | 39m | 28d ago | 18m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.61% | 76.61% | 2051 ms | ↓ 0.90x | 0 | — | — | 16m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.89% | 99.75% | 99.75% | 708 ms | ↑ 1.22x | 2 | 0s | 8d ago | 31m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 465 ms | → 1.00x | 0 | — | — | 12m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1038 ms | ↓ 0.82x | 0 | — | — | 12m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 82.17% | 82.17% | 1730 ms | → 1.04x | 0 | — | — | 14m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1512 ms | → 1.02x | 0 | — | — | 12m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1332 ms | ↑ 1.08x | 0 | — | — | 14m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.01% | 99.01% | 464 ms | → 1.02x | 0 | — | — | 20m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.01% | 97.01% | 357 ms | ↓ 0.85x | 0 | — | — | 14m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1633 ms | → 1.00x | 0 | — | — | 11m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1066 ms | → 1.02x | 1 | 0s | 14d ago | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 839 ms | → 1.02x | 1 | 0s | 14d ago | 12m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1761 ms | → 1.03x | 0 | — | — | 12m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.68% | 86.94% | 86.94% | 1336 ms | → 1.01x | 6 | 0s | 13d ago | 30m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 100.00% | 97.01% | 97.01% | 1901 ms | → 0.99x | 0 | — | — | 13m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.75% | 98.75% | 183 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.84% | 98.77% | 98.77% | 1464 ms | ↓ 0.87x | 3 | 0s | 7d ago | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.94% | 98.94% | 804 ms | → 1.01x | 0 | — | — | 21m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 29.90% | 29.90% | 298 ms | → 1.00x | 0 | — | — | 13m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.77% | 96.73% | 96.73% | 1185 ms | ↓ 0.87x | 34 | 18m | 14d ago | 12m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 20.14% | 20.14% | 897 ms | → 0.96x | 0 | — | — | 20m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 874 ms | ↑ 1.13x | 0 | — | — | 32m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2428 ms | ↑ 1.50x | 1 | 0s | 19d ago | 31m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 550 ms | ↓ 0.94x | 0 | — | — | 30m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.71% | 97.71% | 1034 ms | → 1.00x | 0 | — | — | 14m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.84% | 99.73% | 99.73% | 2577 ms | → 1.00x | 3 | 0s | 13d ago | 30m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.95% | 97.95% | 2101 ms | ↓ 0.89x | 0 | — | — | 17m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.79% | 99.73% | 99.73% | 625 ms | ↑ 1.25x | 2 | 25m | 20d ago | 31m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1982 ms | ↑ 1.23x | 0 | — | — | 12m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.68% | 98.68% | 4513 ms | → 1.02x | 0 | — | — | 32m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2889 ms | → 1.00x | 0 | — | — | 30m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1532 ms | ↑ 1.12x | 0 | — | — | 12m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2387 ms | → 0.99x | 1 | 0s | 28d ago | 26m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.72% | 39.72% | 853 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.40% | 98.40% | 3875 ms | → 0.96x | 0 | — | — | 17m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1102 ms | → 1.03x | 1 | 0s | 22d ago | 30m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.73% | 99.43% | 99.43% | 2721 ms | ↓ 0.91x | 5 | 0s | 8d ago | 26m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.63% | 99.84% | 99.84% | 152 ms | ↓ 0.91x | 5 | 12m | 11d ago | 30m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.84% | 99.81% | 99.81% | 1444 ms | → 0.97x | 2 | 14m | 8d ago | 17m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.97% | 15.53% | 15.53% | 746 ms | → 0.98x | 21 | 56m | 16d ago | 30m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.26% | 99.25% | 99.25% | 824 ms | → 1.00x | 8 | 15m | 8d ago | 31m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1974 ms | → 0.98x | 0 | — | — | 19m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.84% | 99.84% | 1522 ms | ↓ 0.78x | 1 | 0s | 8d ago | 31m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.60% | 99.60% | 1835 ms | → 1.04x | 0 | — | — | 14m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 590 ms | → 1.00x | 0 | — | — | 11m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 935 ms | → 1.00x | 0 | — | — | 12m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 650 ms | ↓ 0.89x | 0 | — | — | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.11% | 95.60% | 95.60% | 2418 ms | → 0.97x | 4 | 4h 46m | 9d ago | 17m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 59.41% | 59.41% | 1214 ms | → 1.01x | 3 | 0s | 20d ago | 20m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 18.58% | 18.58% | 2519 ms | → 1.01x | 1 | 0s | 19d ago | 20m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2131 ms | → 1.01x | 0 | — | — | 30m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.01% | 98.76% | 98.76% | 1906 ms | ↑ 1.24x | 4 | 2h 47m | 8d ago | 13m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 97.12% | 51.54% | 51.54% | 3249 ms | ↑ 1.06x | 2 | 8h 40m | 12d ago | 21m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.84% | 88.84% | 1927 ms | ↑ 1.24x | 1 | 0s | 15d ago | 29m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.91% | 98.91% | 2598 ms | → 1.00x | 1 | 0s | 12d ago | 17m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.52% | 82.20% | 82.20% | 1656 ms | ↑ 1.09x | 1 | 5d 5h | 29d ago | 12m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.79% | 99.90% | 99.90% | 766 ms | → 1.02x | 2 | 25m | 20d ago | 29m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1252 ms | → 1.02x | 0 | — | — | 31m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 814 ms | → 1.00x | 3 | 7m | 10d ago | 29m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.95% | 39.27% | 39.27% | 194 ms | → 0.98x | 1 | 0s | 19d ago | 17m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 886 ms | ↓ 0.92x | 0 | — | — | 31m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 1098 ms | → 0.97x | 1 | 0s | 14d ago | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.89% | 99.93% | 99.93% | 798 ms | → 1.01x | 2 | 0s | 8d ago | 14m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.01% | 99.01% | 2341 ms | ↑ 1.11x | 0 | — | — | 29m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.26% | 98.26% | 1277 ms | → 1.04x | 0 | — | — | 14m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.93% | 97.93% | 1475 ms | ↓ 0.81x | 0 | — | — | 15m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.95% | 16.41% | 16.41% | 2117 ms | ↑ 1.06x | 1 | 0s | 8d ago | 30m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.29% | 68.29% | 873 ms | → 0.96x | 0 | — | — | 19m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 100.00% | 100.00% | 100.00% | 100.00% | 467 ms | → 1.00x | 0 | — | — | 12m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1079 ms | → 1.00x | 0 | — | — | 11m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.72% | 79.72% | 1503 ms | → 0.97x | 1 | 51m | 14d ago | 19m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1544 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1584 ms | ↓ 0.80x | 0 | — | — | 31m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 2110 ms | → 0.95x | 1 | 0s | 14d ago | 12m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 1012 ms | ↑ 1.07x | 1 | 0s | 13d ago | 21m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.98% | 84.98% | 216 ms | ↓ 0.79x | 0 | — | — | 29m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 90.16% | 90.16% | 305 ms | ↓ 0.81x | 1 | 0s | 21d ago | 16m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.26% | 99.26% | 1978 ms | → 0.98x | 0 | — | — | 19m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.84% | 98.84% | 98.84% | 2428 ms | → 0.96x | 2 | 10m | 8d ago | 31m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.53% | 96.53% | 1484 ms | ↑ 1.07x | 0 | — | — | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.78% | 99.81% | 99.81% | 1263 ms | → 0.95x | 4 | 0s | 8d ago | 12m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2363 ms | → 0.96x | 0 | — | — | 31m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1630 ms | → 1.00x | 0 | — | — | 13m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3757 ms | → 1.00x | 0 | — | — | 12m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.51% | 56.51% | 619 ms | → 1.04x | 0 | — | — | 20m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.46% | 98.33% | 98.33% | 1367 ms | → 0.99x | 1 | 4h 17m | 14d ago | 17m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.84% | 98.23% | 98.23% | 1551 ms | ↓ 0.87x | 3 | 0s | 10d ago | 16m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 37.08% | 37.08% | 2225 ms | ↑ 1.06x | 1 | 0s | 13d ago | 19m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.84% | 99.20% | 99.20% | 3441 ms | → 1.04x | 3 | 0s | 7d ago | 26m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2508 ms | → 1.05x | 0 | — | — | 31m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 1829 ms | ↓ 0.93x | 1 | 30m | 13d ago | 17m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.84% | 66.28% | 66.28% | 854 ms | → 0.98x | 3 | 0s | 14d ago | 19m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.95% | 54.82% | 54.82% | 3524 ms | ↓ 0.95x | 1 | 0s | 9d ago | 17m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1809 ms | → 0.98x | 0 | — | — | 18m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.53% | 78.53% | 1361 ms | → 1.01x | 0 | — | — | 19m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 189 ms | → 1.01x | 1 | 0s | 8d ago | 31m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 511 ms | → 1.00x | 0 | — | — | 11m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1929 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 2119 ms | ↑ 1.39x | 1 | 0s | 14d ago | 12m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1994 ms | → 1.01x | 0 | — | — | 26m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 2675 ms | ↓ 0.91x | 1 | 0s | 16d ago | 31m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 78.88% | 78.88% | 1561 ms | → 1.02x | 3 | 0s | 10d ago | 19m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.77% | 85.77% | 1839 ms | → 0.99x | 0 | — | — | 19m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.90% | 99.90% | 1039 ms | → 1.01x | 2 | 0s | 14d ago | 12m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.99% | 95.99% | 1022 ms | → 1.03x | 0 | — | — | 20m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 893 ms | → 1.03x | 0 | — | — | 29m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.46% | 98.46% | 451 ms | → 0.99x | 1 | 0s | 27d ago | 16m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 19.39% | 19.39% | 384 ms | ↓ 0.66x | 0 | — | — | 20m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.57% | 96.96% | 96.96% | 1985 ms | → 1.02x | 5 | 16m | 11d ago | 14m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 784 ms | → 1.02x | 0 | — | — | 16m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.79% | 17.16% | 17.16% | 1113 ms | → 0.96x | 4 | 0s | 8d ago | 20m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.73% | 59.73% | 2007 ms | → 1.02x | 0 | — | — | 20m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 27.40% | 19.00% | 19.00% | 1881 ms | ↓ 0.69x | 1 | 20d 22h | 30d ago | 30m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 81.93% | 91.36% | 91.36% | 28 ms | ↓ 0.46x | 2 | 2d 10h | 26d ago | 14m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 16.40% | 16.40% | 882 ms | → 1.05x | 0 | — | — | 29m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1922 ms | ↑ 1.35x | 0 | — | — | 13m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.43% | 99.43% | 1330 ms | ↑ 1.11x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1766 ms | ↓ 0.94x | 0 | — | — | 13m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1764 ms | ↑ 1.14x | 0 | — | — | 12m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.89% | 19.13% | 19.13% | 1258 ms | ↑ 1.05x | 2 | 0s | 17d ago | 20m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.23% | 93.23% | 4543 ms | ↑ 1.08x | 0 | — | — | 30m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.31% | 99.31% | 1391 ms | ↑ 1.06x | 0 | — | — | 13m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.16% | 99.16% | 962 ms | → 0.95x | 0 | — | — | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.95% | 99.85% | 99.85% | 1508 ms | ↓ 0.95x | 1 | 0s | 14d ago | 12m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 37.73% | 37.73% | 1165 ms | ↓ 0.84x | 1 | 0s | 13d ago | 31m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1652 ms | ↑ 1.15x | 1 | 0s | 16d ago | 31m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 896 ms | → 0.99x | 0 | — | — | 29m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 662 ms | ↑ 1.10x | 0 | — | — | 32m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.89% | 60.69% | 60.69% | 2371 ms | ↓ 0.86x | 2 | 0s | 8d ago | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.53% | 98.53% | 2578 ms | ↑ 1.23x | 0 | — | — | 14m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.61% | 96.61% | 2542 ms | → 1.02x | 0 | — | — | 30m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 3106 ms | ↓ 0.61x | 0 | — | — | 11m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.87% | 99.87% | 99.87% | 2109 ms | ↑ 1.20x | 1 | 0s | 12d ago | 11m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.46% | 99.46% | 2036 ms | ↑ 1.15x | 2 | 0s | 13d ago | 13m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.76% | 99.76% | 809 ms | ↑ 1.14x | 1 | 20m | 7d ago | 14m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.65% | 87.65% | 1549 ms | → 1.03x | 0 | — | — | 17m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.80% | 99.80% | 1037 ms | → 1.02x | 0 | — | — | 14m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1580 ms | → 1.00x | 0 | — | — | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1405 ms | → 1.00x | 0 | — | — | 30m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1211 ms | ↑ 1.14x | 0 | — | — | 31m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.95% | 99.95% | 2216 ms | ↑ 2.04x | 1 | 0s | 14d ago | 12m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1071 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.95% | 72.05% | 72.05% | 1127 ms | → 0.99x | 1 | 0s | 14d ago | 17m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2771 ms | → 1.02x | 1 | 0s | 10d ago | 27m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 831 ms | → 1.04x | 0 | — | — | 28m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.95% | 99.95% | 878 ms | ↑ 1.11x | 0 | — | — | 12m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 97.04% | 97.04% | 1152 ms | ↑ 1.71x | 0 | — | — | 13m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1415 ms | → 1.00x | 0 | — | — | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.75% | 98.75% | 575 ms | → 1.04x | 0 | — | — | 19m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.36% | 98.68% | 98.68% | 1983 ms | ↓ 0.78x | 1 | 3h 60m | 26d ago | 28m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 90.13% | 96.80% | 96.80% | 3339 ms | ↓ 0.82x | 4 | 18h 12m | 13d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.36% | 99.43% | 99.43% | 1646 ms | → 0.99x | 3 | 1h 3m | 11d ago | 12m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.68% | 97.68% | 3745 ms | ↑ 1.44x | 1 | 0s | 16d ago | 16m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 661 ms | → 1.05x | 1 | 0s | 14d ago | 12m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 578 ms | → 1.00x | 0 | — | — | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 27.16% | 27.16% | 955 ms | ↑ 1.17x | 1 | 0s | 18d ago | 28m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.79% | 99.79% | 641 ms | ↓ 0.90x | 1 | 0s | 12d ago | 17m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.20% | 98.20% | 1549 ms | → 1.03x | 0 | — | — | 17m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1249 ms | → 0.99x | 0 | — | — | 28m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.81% | 87.81% | 2375 ms | → 1.00x | 0 | — | — | 19m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.46% | 96.46% | 1741 ms | → 0.97x | 0 | — | — | 20m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1586 ms | → 0.97x | 0 | — | — | 28m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 16.40% | 16.40% | 1869 ms | → 0.98x | 1 | 0s | 25d ago | 30m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1668 ms | ↑ 1.28x | 0 | — | — | 12m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.95% | 96.65% | 96.65% | 1418 ms | ↑ 1.05x | 1 | 0s | 28d ago | 14m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.84% | 99.84% | 2156 ms | ↑ 1.06x | 1 | 0s | 10d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 18.35% | 18.35% | 1889 ms | → 0.99x | 0 | — | — | 20m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 16.23% | 16.23% | 1515 ms | → 1.00x | 0 | — | — | 20m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.68% | 99.73% | 99.73% | 2736 ms | ↓ 0.93x | 1 | 2h 18m | 13d ago | 16m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1724 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.13% | 99.64% | 99.64% | 2135 ms | ↓ 0.90x | 6 | 2h 50m | 18d ago | 28m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2072 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.40% | 98.40% | 1188 ms | ↑ 1.14x | 0 | — | — | 14m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.84% | 44.22% | 44.22% | 1221 ms | → 1.03x | 3 | 0s | 12d ago | 16m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 344 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.37% | 95.90% | 95.90% | 2926 ms | → 0.98x | 12 | 0s | 1d ago | 31m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 99.84% | 99.84% | 99.84% | 2940 ms | → 0.96x | 3 | 0s | 5d ago | 31m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.75% | 99.89% | 84.91% | 84.91% | 2152 ms | ↑ 1.10x | 2 | 0s | 7d ago | 31m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.75% | 99.31% | 99.42% | 99.42% | 2729 ms | → 0.97x | 6 | 32m | 3d ago | 31m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.84% | 21.91% | 21.91% | 2111 ms | → 1.04x | 3 | 0s | 2d ago | 32m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.75% | 99.95% | 91.96% | 91.96% | 3624 ms | → 1.01x | 1 | 0s | 2d ago | 32m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.75% | 99.52% | 70.99% | 70.99% | 1229 ms | → 1.03x | 7 | 6m | 3d ago | 19m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.89% | 64.80% | 64.80% | 1482 ms | → 0.99x | 2 | 0s | 3d ago | 19m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.95% | 50.83% | 50.83% | 1148 ms | → 1.01x | 1 | 0s | 6d ago | 20m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.75% | 99.41% | 99.68% | 99.68% | 3003 ms | → 1.01x | 9 | 4m | 7d ago | 26m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.75% | 99.89% | 99.56% | 99.56% | 938 ms | → 1.04x | 2 | 0s | 6d ago | 19m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.95% | 16.43% | 16.43% | 576 ms | ↓ 0.48x | 1 | 0s | 15h ago | 27m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.75% | 99.95% | 16.33% | 16.33% | 2501 ms | → 1.02x | 1 | 0s | 4h ago | 26m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.75% | 99.79% | 99.77% | 99.77% | 1370 ms | → 1.03x | 2 | 20m | 2d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.84% | 99.32% | 99.32% | 1534 ms | ↓ 0.93x | 3 | 0s | 6d ago | 20m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.95% | 18.28% | 18.28% | 1524 ms | → 1.02x | 1 | 0s | 6d ago | 20m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.75% | 84.77% | 33.32% | 33.32% | 1798 ms | → 1.04x | 6 | 16h 12m | 3h ago | 20m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.95% | 65.98% | 65.98% | 994 ms | ↑ 1.84x | 1 | 0s | 7d ago | 19m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.89% | 18.18% | 18.18% | 990 ms | → 1.05x | 2 | 0s | 15h ago | 27m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.75% | 99.95% | 99.80% | 99.80% | 2798 ms | → 1.02x | 1 | 0s | 3d ago | 30m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.75% | 99.95% | 84.04% | 84.04% | 2052 ms | → 1.01x | 1 | 0s | 4d ago | 26m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.75% | 99.95% | 99.93% | 99.93% | 793 ms | ↑ 1.05x | 1 | 0s | 2d ago | 30m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.84% | 99.80% | 99.80% | 1933 ms | → 0.99x | 3 | 0s | 2d ago | 26m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.75% | 99.95% | 99.83% | 99.83% | 2233 ms | → 0.98x | 1 | 0s | 4d ago | 20m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.75% | 99.95% | 99.10% | 99.10% | 1424 ms | → 1.03x | 1 | 0s | 2d ago | 30m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.05% | 99.05% | 1358 ms | ↑ 1.08x | 2 | 0s | 4d ago | 17m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.84% | 99.82% | 99.82% | 352 ms | ↑ 1.27x | 3 | 0s | 2d ago | 16m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.95% | 89.75% | 89.75% | 1083 ms | → 0.98x | 1 | 0s | 11h ago | 18m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.75% | 94.97% | 47.89% | 47.89% | 583 ms | → 1.01x | 5 | 5h 57m | 22h ago | 16m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.95% | 99.97% | 99.97% | 1764 ms | → 0.96x | 1 | 0s | 11h ago | 18m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.95% | 98.82% | 98.82% | 1372 ms | ↓ 0.82x | 1 | 0s | 17h ago | 17m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.75% | 99.36% | 98.54% | 98.54% | 620 ms | → 0.96x | 5 | 28m | 6d ago | 17m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.75% | 99.79% | 99.66% | 99.66% | 942 ms | ↓ 0.92x | 3 | 6m | 4d ago | 14m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.75% | 99.89% | 99.86% | 99.86% | 796 ms | → 1.05x | 2 | 0s | 7d ago | 12m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.57% | 99.56% | 99.56% | 2681 ms | → 0.99x | 6 | 8m | 3d ago | 12m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.75% | 99.95% | 97.08% | 97.08% | 1673 ms | ↑ 1.66x | 1 | 0s | 4d ago | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.62% | 97.42% | 97.42% | 1702 ms | → 0.96x | 7 | 0s | 5d ago | 14m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.75% | 99.52% | 99.57% | 99.57% | 576 ms | ↑ 1.21x | 3 | 40m | 4d ago | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.75% | 99.30% | 99.36% | 99.36% | 1377 ms | ↑ 1.08x | 4 | 48m | 6d ago | 12m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.84% | 97.81% | 97.81% | 1593 ms | ↑ 1.06x | 3 | 0s | 7d ago | 14m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 96.30% | 96.62% | 96.62% | 1318 ms | ↑ 1.29x | 11 | 1h 56m | 2d ago | 13m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.75% | 99.84% | 99.86% | 99.86% | 2739 ms | → 1.00x | 3 | 0s | 7d ago | 12m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.50% | 97.81% | 98.59% | 98.59% | 1294 ms | → 1.00x | 10 | 1h 4m | 4d ago | 19m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.50% | 99.73% | 78.55% | 78.55% | 2153 ms | → 1.01x | 5 | 0s | 4d ago | 26m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.50% | 99.89% | 98.01% | 98.01% | 1831 ms | ↓ 0.95x | 1 | 30m | 3d ago | 19m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.50% | 93.78% | 67.50% | 67.50% | 3984 ms | ↓ 0.91x | 45 | 33m | 16h ago | 27m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.50% | 99.89% | 93.36% | 93.36% | 702 ms | → 1.01x | 2 | 0s | 11h ago | 18m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.50% | 98.77% | 64.84% | 64.84% | 4764 ms | → 0.98x | 21 | 3m | 14h ago | 18m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.50% | 99.46% | 90.79% | 90.79% | 1469 ms | ↓ 0.89x | 10 | 0s | 11h ago | 18m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.50% | 94.58% | 95.22% | 95.22% | 1546 ms | ↑ 1.21x | 5 | 6h 45m | 2d ago | 13m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.50% | 90.28% | 90.28% | 90.28% | 1110 ms | ↑ 1.14x | 53 | 20m | 3d ago | 11m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.50% | 76.76% | 78.76% | 78.76% | 2861 ms | → 0.99x | 12 | 13h 59m | 2d ago | 12m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.25% | 98.57% | 98.24% | 98.24% | 4573 ms | → 0.99x | 27 | 0s | 3h ago | 32m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.25% | 97.65% | 16.28% | 16.28% | 2513 ms | → 0.98x | 11 | 1h 9m | 6d ago | 20m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.25% | 98.04% | 99.13% | 99.13% | 3619 ms | ↑ 1.06x | 14 | 36m | 2d ago | 28m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.25% | 99.63% | 96.65% | 96.65% | 4467 ms | ↑ 1.10x | 7 | 0s | 2d ago | 20m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.25% | 96.23% | 15.88% | 15.88% | 2310 ms | ↑ 1.11x | 65 | 2m | 2d ago | 28m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.25% | 98.04% | 85.27% | 85.27% | 4538 ms | → 1.05x | 35 | 2m | 2d ago | 28m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.25% | 99.73% | 92.02% | 92.02% | 1524 ms | ↑ 1.05x | 5 | 0s | 3d ago | 17m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.25% | 99.64% | 99.64% | 99.64% | 1264 ms | ↑ 1.34x | 1 | 51m | 5d ago | 11m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.25% | 99.30% | 99.30% | 99.30% | 598 ms | → 1.00x | 1 | 1h | 5d ago | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.25% | 99.84% | 99.85% | 99.85% | 1069 ms | → 1.00x | 2 | 11m | 6d ago | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.25% | 99.78% | 99.81% | 99.81% | 972 ms | ↑ 1.76x | 2 | 30m | 2d ago | 12m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.25% | 91.88% | 91.88% | 91.88% | 1493 ms | → 1.00x | 1 | 13h 12m | 7d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.25% | 98.23% | 96.24% | 96.24% | 1397 ms | → 0.96x | 4 | 2h 27m | 5d ago | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.00% | 97.98% | 98.96% | 98.96% | 3653 ms | ↑ 1.05x | 15 | 33m | 2d ago | 28m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.00% | 98.46% | 15.90% | 15.90% | 3689 ms | ↓ 0.95x | 29 | 0s | 22h ago | 26m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 99.00% | 90.21% | 14.75% | 14.75% | 2205 ms | ↓ 0.93x | 138 | 7m | 15h ago | 27m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.00% | 98.02% | 85.00% | 85.00% | 4764 ms | → 0.99x | 36 | 52s | 2d ago | 17m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (49)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.00% | 99.57% | 99.51% | 99.51% | 2236 ms | ↓ 0.92x | 8 | 0s | 5d ago | 12m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.00% | 99.52% | 96.00% | 96.00% | 595 ms | ↑ 1.09x | 3 | 51m | 4d ago | 14m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.75% | 99.52% | 99.90% | 99.90% | 802 ms | → 1.02x | 4 | 29m | 3d ago | 27m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.75% | 98.78% | 98.69% | 98.69% | 2919 ms | → 0.97x | 21 | 2m | 15h ago | 29m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.75% | 98.82% | 85.82% | 85.82% | 4416 ms | → 0.97x | 21 | 58s | 1h ago | 20m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.75% | 99.68% | 99.47% | 99.47% | 1438 ms | ↓ 0.69x | 2 | 40m | 7d ago | 29m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.75% | 98.66% | 98.63% | 98.63% | 1659 ms | ↑ 1.11x | 23 | 2m | 17h ago | 12m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.50% | 55.11% | 29.12% | 29.12% | 3356 ms | → 1.02x | 75 | 3h 35m | 16h ago | 30m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 98.36% | 98.36% | 98.36% | 98.36% | 4447 ms | → 1.00x | 1 | 0s | 1d ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.25% | 99.30% | 98.38% | 98.38% | 2939 ms | ↑ 1.07x | 5 | 35m | 6d ago | 13m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.00% | 80.54% | 52.14% | 52.14% | 3286 ms | → 1.00x | 7 | 19h 44m | 4d ago | 27m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.00% | 99.25% | 97.36% | 97.36% | 2121 ms | ↓ 0.95x | 9 | 13m | 2d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.00% | 98.61% | 90.52% | 90.52% | 3602 ms | ↓ 0.94x | 26 | 0s | 1d ago | 16m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.99% | 99.14% | 99.24% | 99.24% | 987 ms | ↑ 1.05x | 16 | 0s | 11h ago | 12m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 97.99% | 99.52% | 99.75% | 99.75% | 3062 ms | ↑ 1.09x | 5 | 24m | 2d ago | 16m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.76% | 97.82% | 73.62% | 73.62% | 4541 ms | → 0.97x | 35 | 4m | 2d ago | 27m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.76% | 97.87% | 14.59% | 14.59% | 2588 ms | → 0.99x | 11 | 59m | 3d ago | 26m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.76% | 97.76% | 98.62% | 98.62% | 4241 ms | → 0.98x | 41 | 44s | 16h ago | 26m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.76% | 98.56% | 98.92% | 98.92% | 1964 ms | → 1.02x | 19 | 11m | 2d ago | 26m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.74% | 99.52% | 98.49% | 98.49% | 2758 ms | ↑ 1.29x | 4 | 37m | 43m ago | 12m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 97.74% | 98.47% | 98.47% | 98.47% | 4741 ms | → 1.03x | 11 | 0s | 8h ago | 11m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.51% | 96.24% | 79.69% | 79.69% | 143 ms | → 0.98x | 4 | 7h 18m | 7d ago | 31m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.50% | 95.99% | 81.52% | 81.52% | 4882 ms | → 0.99x | 67 | 3m | 2d ago | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.49% | 99.14% | 85.89% | 85.89% | 665 ms | → 0.96x | 5 | 55m | 7d ago | 16m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 97.24% | 98.87% | 98.97% | 98.97% | 1228 ms | ↑ 1.19x | 14 | 13m | 8h ago | 12m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.01% | 98.20% | 84.33% | 84.33% | 3558 ms | → 1.02x | 34 | 0s | 8h ago | 32m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.00% | 96.46% | 82.23% | 82.23% | 4664 ms | → 0.98x | 55 | 5m | 2d ago | 16m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 96.99% | 68.31% | 80.42% | 80.42% | 434 ms | → 1.04x | 5 | 1d 17h | 1d ago | 14m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 96.74% | 97.84% | 97.84% | 97.84% | 4033 ms | → 1.05x | 3 | 1h 30m | 1d ago | 11m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 96.49% | 98.93% | 90.88% | 90.88% | 1971 ms | ↑ 1.29x | 8 | 31m | 12h ago | 14m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.74% | 97.50% | 97.50% | 97.50% | 529 ms | ↑ 1.10x | 2 | 2h 41m | 6d ago | 11m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.26% | 97.72% | 98.85% | 98.85% | 875 ms | ↑ 1.06x | 2 | 6h 50m | 5d ago | 29m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.24% | 97.75% | 98.39% | 98.39% | 621 ms | ↓ 0.81x | 7 | 2h 8m | 4d ago | 13m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 93.77% | 96.92% | 28.40% | 28.40% | 1785 ms | ↑ 1.17x | 10 | 1h 56m | 9h ago | 28m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 92.04% | 98.31% | 79.33% | 79.33% | 1955 ms | → 0.99x | 1 | 13h | 2d ago | 31m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 91.48% | 97.86% | 97.56% | 97.56% | 3425 ms | ↑ 1.08x | 14 | 52m | 2d ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 91.48% | 98.07% | 97.71% | 97.71% | 3954 ms | ↑ 1.56x | 17 | 32m | 2d ago | 16m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 91.48% | 98.18% | 98.28% | 98.28% | 3297 ms | ↑ 1.50x | 15 | 37m | 2d ago | 16m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 90.73% | 97.75% | 98.65% | 98.65% | 1060 ms | ↑ 1.46x | 16 | 49m | 2d ago | 16m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.48% | 89.81% | 52.53% | 52.53% | 3479 ms | → 0.96x | 157 | 5m | 5h ago | 15m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 90.25% | 94.28% | 71.16% | 71.16% | 1179 ms | → 1.01x | 15 | 2h 7m | 14h ago | 19m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 89.50% | 97.75% | 98.20% | 98.20% | 248 ms | ↓ 0.32x | 1 | 16h 22m | 5d ago | 17m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 88.22% | 94.47% | 95.19% | 95.19% | 4013 ms | ↑ 1.41x | 20 | 1h 32m | 16h ago | 13m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 86.72% | 96.03% | 96.37% | 96.37% | 2027 ms | ↑ 1.12x | 2 | 13h 54m | 7d ago | 12m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 86.53% | 90.22% | 17.17% | 17.17% | 4584 ms | → 1.00x | 148 | 6m | 3h ago | 20m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 75.75% | 88.53% | 91.13% | 91.13% | 2389 ms | → 0.97x | 11 | 7h 2m | 4d ago | 16m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 66.33% | 65.37% | 62.11% | 62.11% | 4768 ms | → 0.99x | 366 | 19m | 57m ago | 27m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 53.62% | 89.93% | 98.25% | 98.25% | 1302 ms | → 1.00x | 89 | 28m | 4h ago | 29m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 24.81% | 5.31% | 59.90% | 59.90% | 1398 ms | → 1.00x | 1 | 28d 3h | 30d ago | 14m ago |

</details>

<details open>
<summary><strong>🔴 Down (241)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 91.77% | 97.88% | 92.06% | 92.06% | 975 ms | → 1.00x | 8 | 1h 35m | 13h ago | 30m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 90.75% | 97.96% | 98.87% | 98.87% | 3288 ms | ↓ 0.93x | 2 | 7h 20m | 15h ago | 16m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 88.97% | 97.42% | 97.64% | 97.64% | 1943 ms | → 1.02x | 3 | 6h 16m | 18h ago | 11m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 85.46% | 94.58% | 83.97% | 83.97% | 1780 ms | ↑ 1.16x | 8 | 4h 34m | 5h ago | 14m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 75.06% | 21.55% | 31.30% | 31.30% | 727 ms | → 0.99x | 3 | 7d 16h | 2d ago | 19m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.75% | 70.45% | 20.62% | 20.62% | 4677 ms | → 1.02x | 334 | 16m | 18m ago | 18m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 71.07% | 93.85% | 91.30% | 91.30% | 1046 ms | → 0.95x | 1 | 2d 4h | 2d ago | 29m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 60.65% | 91.58% | 81.31% | 81.31% | 495 ms | ↓ 0.95x | 1 | 2d 20h | 3d ago | 14m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 55.22% | 89.21% | 83.89% | 83.89% | 4368 ms | → 0.97x | 25 | 3h 8m | 3d ago | 32m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 53.38% | 88.47% | 81.41% | 81.41% | 4817 ms | ↑ 1.08x | 42 | 1h 49m | 3d ago | 14m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 52.62% | 89.90% | 41.93% | 41.93% | 1160 ms | → 0.98x | 3 | 1d 3h | 3d ago | 27m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 49.62% | 53.36% | 53.36% | 53.36% | 1767 ms | → 1.03x | 1 | 3d 14h | 4d ago | 11m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 20.75% | 82.97% | 80.08% | 80.08% | 666 ms | → 0.98x | 2 | 2d 19h | 6d ago | 16m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 18.70% | 82.60% | 98.16% | 98.16% | 1100 ms | ↓ 0.88x | 2 | 2d 21h | 6d ago | 26m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.78% | 10.65% | 10.49% | 10.49% | 3169 ms | ↓ 0.85x | 176 | 3h 16m | 11m ago | 11m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 6.52% | 79.87% | 80.53% | 80.53% | 2546 ms | ↑ 1.15x | 3 | 2d 4h | 7d ago | 13m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.49% | 1.32% | 60.86% | 60.86% | 2769 ms | ↓ 0.88x | 25 | 1d 4h | 9h ago | 32m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 82.89% | 82.89% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 68.64% | 68.64% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 73.82% | 73.82% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 47.34% | 59.66% | 59.66% | — | — | 13 | 1d 7h | 17d ago | 12m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 36.21% | 84.33% | 84.33% | — | — | 7 | 2d 21h | 20d ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 64.16% | 64.16% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.67% | 5.67% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.54% | 12.54% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 7.88% | 61.82% | 61.82% | — | — | 2 | 13d 23h | 28d ago | 14m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.40% | 3.40% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 18.87% | 73.11% | 73.11% | — | — | 2 | 12d 11h | 25d ago | 15m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 83.14% | 83.14% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.49% | 36.49% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 30.26% | 92.85% | 92.85% | — | — | 1 | 21d 20h | 22d ago | 31m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.00% | 24.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 74.60% | 74.60% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 52.98% | 52.98% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.14% | 30.14% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 83.53% | 83.53% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 62.92% | 62.92% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 77.17% | 77.17% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.38% | 15.38% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 50.47% | 50.47% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 65.98% | 94.80% | 94.80% | — | — | 6 | 1d 20h | 11d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 34.90% | 34.90% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 40.03% | 83.89% | 83.89% | — | — | 2 | 9d 11h | 19d ago | 20m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.50% | 3.50% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 83.73% | 83.73% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 38.17% | 43.54% | 43.54% | — | — | 6 | 3d 6h | 20d ago | 12m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.99% | 51.99% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.06% | 2.06% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 43.31% | 91.75% | 91.75% | — | — | 7 | 2d 14h | 18d ago | 28m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 53.24% | 82.62% | 82.62% | — | — | 2 | 7d 11h | 14d ago | 16m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 58.24% | 46.04% | 46.04% | — | — | 2 | 6d 18h | 13d ago | 19m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 14.19% | 79.34% | 79.34% | — | — | 3 | 8d 17h | 26d ago | 17m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 20.03% | 29.43% | 29.43% | — | — | 1 | 24d 16h | 25d ago | 12m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 19.85% | 66.06% | 66.06% | — | — | 2 | 12d 8h | 25d ago | 18m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 32.97% | 32.97% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 4h | 1d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 54.71% | 54.71% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 59.03% | 57.49% | 57.49% | — | — | 1 | 13d 6h | 13d ago | 15m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.73% | 24.73% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 29.83% | 29.83% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 4h | 1d ago | 11m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.32% | 57.32% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 37.47% | 24.93% | 24.93% | — | — | 1 | 19d 21h | 20d ago | 17m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.53% | 5.53% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 65.96% | 65.96% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 83.48% | 83.48% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.06% | 7.06% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 79.71% | 79.71% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 18.78% | 82.25% | 82.25% | — | — | 1 | 24d 23h | 25d ago | 31m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 40.01% | 34.07% | 34.07% | — | — | 1 | 19d 3h | 19d ago | 17m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 28.26% | 28.26% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 49.49% | 26.64% | 26.64% | — | — | 5 | 3d 3h | 12d ago | 16m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.03% | 53.03% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 14.40% | 55.76% | 55.76% | — | — | 3 | 8d 17h | 26d ago | 18m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 2.79% | 10.43% | 10.43% | — | — | 1 | 29d 7h | 29d ago | 14m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 18.98% | 70.18% | 70.18% | — | — | 1 | 24d 22h | 25d ago | 16m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 76.83% | 76.83% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.84% | 46.84% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.57% | 42.57% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 30.70% | 36.49% | 36.49% | — | — | 1 | 21d 19h | 22d ago | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 83.49% | 83.49% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 58.97% | 58.97% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.17% | 39.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 36.15% | 84.33% | 84.33% | — | — | 7 | 2d 21h | 20d ago | 16m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 68.31% | 84.65% | 84.65% | — | — | 4 | 2d 13h | 10d ago | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.61% | 31.61% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.58% | 2.58% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 18.82% | 83.72% | 83.72% | — | — | 1 | 24d 22h | 25d ago | 30m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.86% | 41.86% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 83.46% | 83.46% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.16% | 33.16% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 83.38% | 83.38% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 1.55% | 58.10% | 58.10% | — | — | 1 | 29d 14h | 30d ago | 14m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 25.29% | 25.29% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 45.32% | 45.32% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 81.03% | 81.03% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 67.64% | 67.64% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 3.27% | 32.06% | 32.06% | — | — | 1 | 29d 4h | 29d ago | 14m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 3h | 1d ago | 12m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 79.50% | 79.50% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 3h | 1d ago | 12m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 53.53% | 53.53% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.26% | 3.26% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 3h | 1d ago | 12m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.49% | 43.49% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 77.89% | 77.89% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 72.66% | 41.96% | 41.96% | — | — | 13 | 16h 8m | 8d ago | 28m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.43% | 59.43% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 18.79% | 49.85% | 49.85% | — | — | 4 | 6d 6h | 25d ago | 13m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 5.31% | 66.46% | 66.46% | — | — | 1 | 28d 15h | 29d ago | 16m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 7.64% | 89.53% | 89.53% | — | — | 1 | 27d 23h | 28d ago | 28m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.50% | 28.50% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.32% | 10.32% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.78% | 12.78% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 27.24% | 27.24% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.28% | 24.28% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 49.36% | 53.35% | 53.35% | — | — | 7 | 2d 8h | 16d ago | 28m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 50.19% | 94.79% | 94.79% | — | — | 16 | 23h 18m | 14d ago | 30m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 58.45% | 58.45% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 67.24% | 82.90% | 82.90% | — | — | 2 | 5d 5h | 10d ago | 15m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 11.53% | 11.53% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 49.87% | 49.87% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 23.13% | 29.77% | 29.77% | — | — | 1 | 23d 20h | 24d ago | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 55.57% | 55.57% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 39.91% | 39.91% | — | — | 1 | 1d 3h | 1d ago | 19m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 1.39% | 24.01% | 24.01% | — | — | 3 | 9d 21h | 30d ago | 16m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 37.88% | 37.88% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 51.42% | 51.42% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.59% | 5.59% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 56.00% | 83.75% | 83.75% | — | — | 2 | 7d 3h | 14d ago | 18m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 26.79% | 90.98% | 90.98% | — | — | 1 | 22d 19h | 23d ago | 29m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 74.89% | 79.41% | 79.41% | — | — | 1 | 8d 6h | 8d ago | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 83.59% | 83.59% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 82.49% | 82.49% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 64.33% | 64.33% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 75.54% | 75.54% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 82.35% | 82.35% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.72% | 19.72% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 54.34% | 60.24% | 60.24% | — | — | 1 | 14d 19h | 15d ago | 31m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 54.58% | 45.11% | 45.11% | — | — | 11 | 1d 7h | 14d ago | 15m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.10% | 4.10% | — | — | 2 | 14d 23h | 16d ago | 27m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.39% | 34.39% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.45% | 69.11% | 69.11% | — | — | 4 | 7d 5h | 14d ago | 30m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.87% | 26.60% | 26.60% | — | — | 31 | 19h 28m | 12d ago | 17m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.72% | 7.72% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 66.16% | 66.16% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 34.46% | 40.12% | 40.12% | — | — | 2 | 10d 9h | 21d ago | 12m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 68.12% | 68.12% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 8.11% | 45.99% | 45.99% | — | — | 1 | 27d 21h | 28d ago | 13m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 41.98% | 65.80% | 65.80% | — | — | 2 | 8d 23h | 14d ago | 13m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 34.57% | 58.24% | 58.24% | — | — | 2 | 10d 8h | 21d ago | 13m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 39.06% | 39.06% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 25.15% | 25.15% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 56.45% | 5.52% | 5.52% | — | — | 5 | 2d 15h | 8d ago | 29m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.66% | 12.66% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 19.16% | 19.16% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 2.68% | 39.04% | 39.04% | — | — | 1 | 29d 7h | 29d ago | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 19.74% | 10.28% | 10.28% | — | — | 192 | 2h 43m | 19d ago | 19m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 11.34% | 11.34% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.03% | 1.03% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.78% | 5.78% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.79% | 6.79% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.31% | 50.31% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 29.04% | 55.55% | 55.55% | — | — | 2 | 11d 2h | 22d ago | 12m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 83.55% | 83.55% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 49.22% | 79.96% | 79.96% | — | — | 1 | 16d 11h | 16d ago | 15m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 49.77% | 49.77% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 83.73% | 83.73% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 11.64% | 60.27% | 60.27% | — | — | 2 | 13d 10h | 27d ago | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.72% | 41.72% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.37% | 2.37% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 33.65% | 20.08% | 20.08% | — | — | 1 | 20d 23h | 21d ago | 18m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 1d 3h | 1d ago | 12m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 81.44% | 81.44% | — | — | 1 | 29d 24h | 30d ago | 20m ago |

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
