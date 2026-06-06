# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**643 providers** — 353 🟢 operational · 49 🟡 degraded · 241 🔴 down · 0 ⚫ unknown

_Updated 2026-06-06 06:33 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.89% | 97.79% | 97.79% | 508 ms | ↓ 0.80x | 2 | 0s | 9d ago | 25m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1730 ms | → 1.00x | 0 | — | — | 22m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.95% | 18.37% | 18.37% | 1692 ms | → 0.98x | 1 | 0s | 8d ago | 32m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.37% | 97.37% | 2464 ms | → 1.03x | 0 | — | — | 40m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.95% | 52.19% | 52.19% | 1927 ms | ↑ 1.09x | 1 | 0s | 25d ago | 28m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.84% | 97.79% | 97.79% | 2865 ms | → 1.00x | 3 | 0s | 9d ago | 36m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1622 ms | ↑ 1.18x | 0 | — | — | 22m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.77% | 98.77% | 1741 ms | → 1.01x | 0 | — | — | 42m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.40% | 99.40% | 3392 ms | → 0.96x | 1 | 0s | 16d ago | 42m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.04% | 99.04% | 2054 ms | ↑ 1.16x | 1 | 19m | 18d ago | 24m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.51% | 94.51% | 2044 ms | ↑ 1.06x | 0 | — | — | 26m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1752 ms | ↑ 1.19x | 0 | — | — | 23m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.24% | 97.38% | 97.38% | 2141 ms | ↑ 1.08x | 1 | 4h 31m | 23d ago | 26m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 99.30% | 98.42% | 98.42% | 2993 ms | ↑ 1.08x | 5 | 35m | 7d ago | 24m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.16% | 92.16% | 2565 ms | ↑ 1.23x | 0 | — | — | 43m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1726 ms | ↑ 1.28x | 1 | 0s | 23d ago | 23m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 98.75% | 96.64% | 96.64% | 2298 ms | ↓ 0.80x | 4 | 2h 10m | 9d ago | 25m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.84% | 99.84% | 1094 ms | ↑ 1.21x | 1 | 0s | 22d ago | 26m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 833 ms | ↑ 1.23x | 0 | — | — | 22m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.95% | 98.46% | 98.46% | 922 ms | → 1.01x | 1 | 0s | 29d ago | 26m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.95% | 96.95% | 1395 ms | → 1.01x | 1 | 0s | 22d ago | 25m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.61% | 98.61% | 1885 ms | ↑ 1.65x | 0 | — | — | 24m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 35.29% | 35.29% | 621 ms | → 1.04x | 0 | — | — | 37m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1640 ms | → 1.00x | 0 | — | — | 22m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.95% | 96.71% | 96.71% | 2200 ms | → 1.04x | 1 | 0s | 11d ago | 28m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.84% | 98.84% | 872 ms | ↑ 1.12x | 1 | 0s | 9d ago | 39m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 485 ms | → 1.03x | 1 | 0s | 15d ago | 23m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.43% | 96.43% | 504 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.13% | 86.00% | 86.00% | 690 ms | → 0.98x | 5 | 55m | 8d ago | 27m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1636 ms | → 0.98x | 1 | 0s | 15d ago | 23m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.84% | 99.86% | 99.86% | 2568 ms | ↑ 1.19x | 3 | 0s | 11d ago | 23m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.17% | 98.17% | 2775 ms | ↑ 1.06x | 1 | 60m | 16d ago | 27m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.82% | 97.82% | 185 ms | ↑ 1.12x | 0 | — | — | 25m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.73% | 99.68% | 99.68% | 1231 ms | → 0.96x | 5 | 0s | 9d ago | 24m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.88% | 83.88% | 1158 ms | ↓ 0.92x | 0 | — | — | 26m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 985 ms | → 1.01x | 1 | 0s | 15d ago | 23m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.46% | 80.90% | 80.90% | 1661 ms | → 1.02x | 3 | 50m | 19d ago | 30m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.51% | 97.51% | 1188 ms | ↑ 1.28x | 0 | — | — | 28m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 447 ms | → 1.04x | 0 | — | — | 38m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2880 ms | → 1.02x | 1 | 0s | 28d ago | 38m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.93% | 98.93% | 301 ms | ↑ 1.36x | 0 | — | — | 28m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.41% | 97.81% | 97.81% | 3479 ms | → 1.04x | 11 | 0s | 12d ago | 40m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.81% | 99.81% | 1892 ms | → 0.96x | 0 | — | — | 28m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.95% | 95.95% | 1264 ms | ↓ 0.81x | 0 | — | — | 28m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.86% | 99.86% | 2394 ms | ↑ 1.10x | 3 | 0s | 15d ago | 23m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.89% | 98.71% | 98.71% | 2922 ms | ↑ 1.08x | 2 | 6h 41m | 14d ago | 23m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 1966 ms | → 1.03x | 0 | — | — | 38m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 100.00% | 100.00% | 100.00% | 570 ms | → 1.00x | 0 | — | — | 23m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 75.84% | 75.84% | 2471 ms | → 1.00x | 0 | — | — | 24m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3285 ms | ↓ 0.85x | 1 | 0s | 12d ago | 36m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 27.75% | 27.75% | 1119 ms | → 1.02x | 0 | — | — | 38m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 99.02% | 98.52% | 98.52% | 1673 ms | → 0.99x | 9 | 26m | 10d ago | 23m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.45% | 95.57% | 95.57% | 1788 ms | → 1.04x | 3 | 5h 26m | 11d ago | 25m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1096 ms | ↓ 0.91x | 1 | 0s | 15d ago | 23m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2459 ms | → 1.00x | 0 | — | — | 24m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1706 ms | ↑ 1.07x | 0 | — | — | 23m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.80% | 97.41% | 97.41% | 1846 ms | ↑ 1.21x | 5 | 5h 6m | 20d ago | 32m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.89% | 99.86% | 99.86% | 796 ms | → 1.04x | 2 | 0s | 7d ago | 23m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.45% | 96.45% | 854 ms | → 1.04x | 0 | — | — | 28m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.22% | 53.22% | 941 ms | → 1.04x | 0 | — | — | 31m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 817 ms | → 1.00x | 0 | — | — | 22m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1824 ms | → 1.02x | 0 | — | — | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1006 ms | ↓ 0.92x | 1 | 0s | 15d ago | 23m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3350 ms | ↑ 1.05x | 0 | — | — | 37m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.05% | 97.05% | 1633 ms | ↑ 1.09x | 0 | — | — | 37m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 97.67% | 97.67% | 97.67% | 523 ms | ↑ 1.10x | 2 | 2h 41m | 7d ago | 22m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.16% | 46.12% | 46.12% | 1768 ms | → 0.96x | 9 | 1h 42m | 17d ago | 38m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 100.00% | 100.00% | 60.98% | 60.98% | 1710 ms | → 1.00x | 0 | — | — | 24m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 99.14% | 96.52% | 96.52% | 1330 ms | → 1.01x | 7 | 27m | 10d ago | 38m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.73% | 98.99% | 98.99% | 1677 ms | ↑ 1.23x | 2 | 44m | 14d ago | 24m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.42% | 82.42% | 1868 ms | → 1.01x | 0 | — | — | 30m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1476 ms | ↑ 1.07x | 0 | — | — | 23m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.55% | 98.55% | 2032 ms | → 1.03x | 0 | — | — | 27m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.96% | 99.96% | 3632 ms | → 1.02x | 1 | 0s | 15d ago | 22m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.61% | 92.61% | 947 ms | ↑ 1.13x | 1 | 0s | 12d ago | 31m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.48% | 98.48% | 1010 ms | ↑ 1.12x | 0 | — | — | 26m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.17% | 99.17% | 2378 ms | ↓ 0.90x | 0 | — | — | 24m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 100.00% | 93.72% | 93.72% | 2283 ms | ↑ 1.07x | 0 | — | — | 24m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.73% | 97.73% | 3013 ms | ↓ 0.93x | 2 | 0s | 11d ago | 28m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 73.62% | 87.88% | 87.88% | 852 ms | ↓ 0.92x | 2 | 4d | 20d ago | 26m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.74% | 45.74% | 945 ms | → 1.03x | 0 | — | — | 31m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 75.11% | 75.11% | 702 ms | → 0.99x | 1 | 0s | 23d ago | 30m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.24% | 94.75% | 94.75% | 769 ms | ↓ 0.92x | 5 | 7h 21m | 21d ago | 23m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.50% | 53.50% | 1533 ms | → 1.03x | 1 | 0s | 15d ago | 38m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 975 ms | ↓ 0.95x | 0 | — | — | 23m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.05% | 98.05% | 1863 ms | ↓ 0.86x | 0 | — | — | 28m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.95% | 50.97% | 50.97% | 1152 ms | → 1.02x | 1 | 0s | 7d ago | 31m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1195 ms | → 1.01x | 1 | 0s | 15d ago | 23m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 81.21% | 81.21% | 1472 ms | → 1.03x | 1 | 0s | 22d ago | 30m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.95% | 60.59% | 60.59% | 896 ms | → 1.00x | 1 | 0s | 9d ago | 30m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.96% | 97.96% | 937 ms | → 1.01x | 1 | 0s | 21d ago | 31m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.89% | 99.81% | 99.81% | 1579 ms | ↑ 1.06x | 2 | 0s | 15d ago | 23m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 99.41% | 99.68% | 99.68% | 3030 ms | → 1.02x | 9 | 4m | 8d ago | 36m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.89% | 58.78% | 58.78% | 1736 ms | → 1.04x | 2 | 0s | 18d ago | 30m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.03% | 62.03% | 1083 ms | → 1.02x | 0 | — | — | 31m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2440 ms | ↓ 0.90x | 0 | — | — | 24m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.18% | 99.18% | 1400 ms | ↓ 0.94x | 0 | — | — | 30m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.61% | 89.61% | 1927 ms | → 1.02x | 1 | 0s | 24d ago | 29m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.79% | 99.79% | 2588 ms | → 1.01x | 0 | — | — | 28m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.89% | 99.56% | 99.56% | 940 ms | → 1.04x | 2 | 0s | 7d ago | 30m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.73% | 99.73% | 2032 ms | → 1.02x | 3 | 0s | 17d ago | 40m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1866 ms | → 1.04x | 0 | — | — | 23m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.01% | 99.01% | 3096 ms | ↑ 1.08x | 1 | 29m | 12d ago | 40m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.10% | 98.10% | 2960 ms | → 0.95x | 0 | — | — | 42m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 73.22% | 73.22% | 1626 ms | ↓ 0.76x | 0 | — | — | 28m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 91.10% | 91.10% | 345 ms | ↑ 1.05x | 3 | 0s | 16d ago | 25m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.28% | 97.68% | 97.68% | 675 ms | ↓ 0.84x | 3 | 5h 59m | 14d ago | 23m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1350 ms | ↑ 1.31x | 0 | — | — | 24m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1198 ms | ↑ 1.07x | 0 | — | — | 42m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 2877 ms | → 0.96x | 2 | 0s | 10d ago | 42m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1689 ms | ↑ 1.06x | 1 | 0s | 18d ago | 40m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.86% | 88.86% | 1950 ms | ↓ 0.81x | 1 | 39m | 29d ago | 29m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.80% | 76.80% | 2000 ms | ↓ 0.91x | 0 | — | — | 28m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.89% | 99.75% | 99.75% | 730 ms | ↑ 1.23x | 2 | 0s | 9d ago | 41m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 460 ms | → 1.00x | 0 | — | — | 23m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1059 ms | ↓ 0.88x | 0 | — | — | 23m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 82.37% | 82.37% | 1800 ms | ↑ 1.07x | 0 | — | — | 26m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1476 ms | → 1.01x | 0 | — | — | 23m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1420 ms | ↑ 1.13x | 0 | — | — | 26m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.01% | 99.01% | 470 ms | → 1.02x | 0 | — | — | 31m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.04% | 97.04% | 336 ms | ↓ 0.83x | 0 | — | — | 26m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 997 ms | → 1.01x | 1 | 0s | 15d ago | 23m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 810 ms | → 0.96x | 1 | 0s | 15d ago | 23m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1770 ms | → 1.03x | 0 | — | — | 23m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.68% | 86.98% | 86.98% | 1360 ms | → 1.02x | 6 | 0s | 14d ago | 40m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 100.00% | 97.09% | 97.09% | 1749 ms | → 0.97x | 0 | — | — | 24m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.75% | 98.75% | 175 ms | ↓ 0.94x | 0 | — | — | 28m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.84% | 98.80% | 98.80% | 1385 ms | ↓ 0.87x | 3 | 0s | 8d ago | 24m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.95% | 98.95% | 834 ms | → 1.03x | 0 | — | — | 32m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 43.92% | 43.92% | 271 ms | → 1.00x | 0 | — | — | 24m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.18% | 96.80% | 96.80% | 1003 ms | ↓ 0.84x | 29 | 20m | 15d ago | 23m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.84% | 99.85% | 99.85% | 1130 ms | ↑ 1.06x | 2 | 11m | 7d ago | 23m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 20.38% | 20.38% | 905 ms | → 1.01x | 0 | — | — | 31m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 893 ms | ↑ 1.17x | 0 | — | — | 43m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2434 ms | ↑ 1.46x | 1 | 0s | 20d ago | 41m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 580 ms | → 0.98x | 0 | — | — | 40m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.21% | 79.74% | 79.74% | 142 ms | → 1.00x | 4 | 7h 18m | 8d ago | 42m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.74% | 97.74% | 1052 ms | → 1.01x | 0 | — | — | 25m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2609 ms | → 1.00x | 2 | 0s | 14d ago | 40m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.96% | 97.96% | 2066 ms | ↓ 0.84x | 0 | — | — | 28m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.79% | 99.73% | 99.73% | 628 ms | ↑ 1.25x | 2 | 25m | 21d ago | 42m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1946 ms | ↑ 1.14x | 0 | — | — | 23m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.69% | 98.69% | 4488 ms | → 1.03x | 0 | — | — | 43m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2890 ms | → 1.00x | 0 | — | — | 40m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1611 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2409 ms | → 1.01x | 1 | 0s | 29d ago | 37m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.84% | 99.32% | 99.32% | 1565 ms | ↓ 0.94x | 3 | 0s | 7d ago | 32m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.88% | 39.88% | 842 ms | ↑ 1.05x | 0 | — | — | 42m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.41% | 98.41% | 3880 ms | → 0.98x | 0 | — | — | 28m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1116 ms | → 1.03x | 1 | 0s | 23d ago | 40m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.73% | 99.43% | 99.43% | 2692 ms | ↓ 0.94x | 5 | 0s | 9d ago | 36m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.63% | 99.84% | 99.84% | 144 ms | ↓ 0.95x | 5 | 12m | 12d ago | 40m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.99% | 15.77% | 15.77% | 745 ms | → 0.99x | 20 | 59m | 17d ago | 40m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.25% | 99.25% | 99.25% | 786 ms | → 0.99x | 8 | 15m | 9d ago | 42m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 2011 ms | → 0.98x | 0 | — | — | 30m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.84% | 99.84% | 1565 ms | ↓ 0.81x | 1 | 0s | 9d ago | 41m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.61% | 99.61% | 1840 ms | → 1.04x | 0 | — | — | 25m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 568 ms | → 1.00x | 0 | — | — | 22m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 934 ms | → 1.00x | 0 | — | — | 23m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 642 ms | ↓ 0.90x | 0 | — | — | 41m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.08% | 95.62% | 95.62% | 2401 ms | → 0.98x | 4 | 4h 46m | 10d ago | 28m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 59.54% | 59.54% | 1223 ms | → 1.01x | 3 | 0s | 21d ago | 31m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 18.81% | 18.81% | 2422 ms | → 1.01x | 1 | 0s | 20d ago | 32m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2147 ms | → 1.02x | 0 | — | — | 40m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 97.99% | 98.78% | 98.78% | 1921 ms | ↑ 1.29x | 4 | 2h 47m | 9d ago | 24m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.95% | 52.27% | 52.27% | 3437 ms | ↑ 1.08x | 1 | 0s | 13d ago | 32m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.87% | 88.87% | 1886 ms | ↑ 1.24x | 1 | 0s | 15d ago | 40m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.95% | 18.51% | 18.51% | 1566 ms | → 1.03x | 1 | 0s | 7d ago | 32m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.92% | 98.92% | 2573 ms | → 1.02x | 1 | 0s | 13d ago | 28m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.31% | 82.63% | 82.63% | 1682 ms | → 1.05x | 1 | 5d 5h | 30d ago | 23m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.79% | 99.90% | 99.90% | 763 ms | → 1.02x | 2 | 25m | 21d ago | 40m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1279 ms | ↑ 1.05x | 0 | — | — | 41m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 833 ms | → 1.00x | 3 | 7m | 11d ago | 40m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.95% | 39.67% | 39.67% | 194 ms | → 0.98x | 1 | 0s | 20d ago | 28m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 888 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 998 ms | ↓ 0.88x | 1 | 0s | 15d ago | 23m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.93% | 99.93% | 756 ms | → 1.00x | 1 | 0s | 9d ago | 25m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.01% | 99.01% | 2413 ms | ↑ 1.12x | 0 | — | — | 40m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.28% | 98.28% | 1318 ms | ↑ 1.08x | 0 | — | — | 26m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.95% | 97.95% | 1537 ms | ↓ 0.84x | 0 | — | — | 26m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.95% | 16.64% | 16.64% | 2145 ms | ↑ 1.08x | 1 | 0s | 9d ago | 40m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.42% | 68.42% | 902 ms | → 0.96x | 0 | — | — | 30m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 100.00% | 100.00% | 100.00% | 100.00% | 443 ms | → 1.00x | 0 | — | — | 23m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1215 ms | → 1.01x | 0 | — | — | 22m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.82% | 79.82% | 1511 ms | → 0.98x | 1 | 51m | 15d ago | 30m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1457 ms | ↑ 1.06x | 0 | — | — | 40m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1635 ms | ↓ 0.82x | 0 | — | — | 41m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 2120 ms | → 0.96x | 1 | 0s | 15d ago | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 1056 ms | ↑ 1.10x | 1 | 0s | 13d ago | 33m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.89% | 84.95% | 84.95% | 2170 ms | ↑ 1.10x | 2 | 0s | 8d ago | 41m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.02% | 85.02% | 218 ms | ↓ 0.84x | 0 | — | — | 40m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 90.23% | 90.23% | 302 ms | ↓ 0.82x | 1 | 0s | 22d ago | 28m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.26% | 99.26% | 1911 ms | → 0.97x | 0 | — | — | 30m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.95% | 66.10% | 66.10% | 1182 ms | ↑ 2.05x | 1 | 0s | 8d ago | 30m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.55% | 96.55% | 1335 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.78% | 99.81% | 99.81% | 1104 ms | ↓ 0.86x | 4 | 0s | 9d ago | 23m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2439 ms | → 0.99x | 0 | — | — | 41m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 95.99% | 96.46% | 96.46% | 1890 ms | → 1.04x | 2 | 13h 54m | 8d ago | 23m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1652 ms | → 1.00x | 0 | — | — | 24m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3722 ms | → 1.00x | 0 | — | — | 23m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 100.00% | 99.30% | 99.38% | 99.38% | 1455 ms | ↑ 1.14x | 4 | 48m | 7d ago | 23m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.66% | 56.66% | 590 ms | → 1.03x | 0 | — | — | 31m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.46% | 98.34% | 98.34% | 1414 ms | → 1.01x | 1 | 4h 17m | 15d ago | 28m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.84% | 98.24% | 98.24% | 1537 ms | ↓ 0.89x | 3 | 0s | 11d ago | 28m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 37.37% | 37.37% | 2277 ms | ↑ 1.08x | 1 | 0s | 14d ago | 29m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.84% | 99.20% | 99.20% | 3451 ms | ↑ 1.05x | 3 | 0s | 8d ago | 36m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2575 ms | ↑ 1.05x | 0 | — | — | 41m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 1878 ms | → 0.96x | 1 | 30m | 14d ago | 28m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.84% | 66.41% | 66.41% | 880 ms | → 0.97x | 3 | 0s | 15d ago | 30m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.95% | 55.12% | 55.12% | 3669 ms | → 0.96x | 1 | 0s | 10d ago | 28m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.21% | 99.21% | 1944 ms | → 1.00x | 0 | — | — | 29m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.62% | 78.62% | 1395 ms | → 1.02x | 0 | — | — | 30m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 188 ms | → 1.00x | 1 | 0s | 9d ago | 41m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 524 ms | → 1.01x | 0 | — | — | 22m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1876 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 2418 ms | ↑ 1.53x | 1 | 0s | 15d ago | 23m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1942 ms | → 1.02x | 0 | — | — | 37m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 3012 ms | ↓ 0.94x | 1 | 0s | 17d ago | 41m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 78.98% | 78.98% | 1629 ms | → 1.03x | 3 | 0s | 11d ago | 30m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.83% | 85.83% | 1849 ms | → 1.01x | 0 | — | — | 30m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.90% | 99.90% | 975 ms | → 0.99x | 2 | 0s | 15d ago | 23m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.00% | 96.00% | 992 ms | → 1.03x | 0 | — | — | 31m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 909 ms | → 1.04x | 0 | — | — | 40m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.47% | 98.47% | 450 ms | → 0.97x | 1 | 0s | 28d ago | 28m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 19.65% | 19.65% | 346 ms | ↓ 0.62x | 0 | — | — | 31m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.57% | 97.00% | 97.00% | 1881 ms | → 0.99x | 5 | 16m | 12d ago | 25m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 785 ms | → 1.02x | 0 | — | — | 28m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.78% | 17.40% | 17.40% | 1090 ms | ↓ 0.90x | 4 | 0s | 9d ago | 31m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.87% | 59.87% | 1955 ms | → 1.02x | 0 | — | — | 30m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 30.46% | 20.20% | 20.20% | 786 ms | ↓ 0.47x | 1 | 19d 23h | 30d ago | 40m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 81.74% | 91.47% | 91.47% | 29 ms | ↓ 0.56x | 2 | 2d 10h | 27d ago | 25m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 16.64% | 16.64% | 864 ms | → 1.05x | 0 | — | — | 40m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1984 ms | ↑ 1.46x | 0 | — | — | 24m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.44% | 99.44% | 1447 ms | ↑ 1.14x | 0 | — | — | 23m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1711 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1648 ms | ↑ 1.07x | 0 | — | — | 23m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.89% | 19.36% | 19.36% | 1260 ms | ↑ 1.07x | 2 | 0s | 18d ago | 31m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.25% | 93.25% | 4552 ms | ↑ 1.08x | 0 | — | — | 40m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.68% | 99.48% | 99.48% | 1135 ms | ↓ 0.66x | 2 | 40m | 7d ago | 40m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.33% | 99.33% | 1282 ms | → 1.04x | 0 | — | — | 24m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.16% | 99.16% | 935 ms | ↓ 0.93x | 0 | — | — | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.95% | 99.86% | 99.86% | 1566 ms | → 0.97x | 1 | 0s | 15d ago | 23m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.57% | 99.57% | 1660 ms | ↑ 1.16x | 1 | 0s | 17d ago | 42m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.45% | 99.45% | 898 ms | → 1.00x | 0 | — | — | 40m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 578 ms | ↑ 1.09x | 0 | — | — | 43m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.89% | 60.79% | 60.79% | 2408 ms | ↓ 0.88x | 2 | 0s | 9d ago | 41m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.55% | 98.55% | 2567 ms | ↑ 1.22x | 0 | — | — | 25m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.62% | 96.62% | 2508 ms | → 1.02x | 0 | — | — | 40m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 3499 ms | ↓ 0.86x | 0 | — | — | 22m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.88% | 99.88% | 99.88% | 2202 ms | ↑ 1.22x | 1 | 0s | 13d ago | 22m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.48% | 99.48% | 2202 ms | ↑ 1.21x | 2 | 0s | 14d ago | 24m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.77% | 99.77% | 791 ms | ↑ 1.16x | 1 | 20m | 8d ago | 25m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.72% | 87.72% | 1583 ms | ↑ 1.05x | 0 | — | — | 28m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.80% | 99.80% | 1008 ms | → 1.03x | 0 | — | — | 25m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1792 ms | → 1.00x | 0 | — | — | 24m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1389 ms | → 1.01x | 0 | — | — | 40m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1238 ms | ↑ 1.14x | 0 | — | — | 42m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.95% | 99.95% | 2372 ms | ↑ 2.20x | 1 | 0s | 15d ago | 23m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1063 ms | ↑ 1.16x | 0 | — | — | 42m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.95% | 72.24% | 72.24% | 1130 ms | → 0.99x | 1 | 0s | 15d ago | 28m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2804 ms | → 1.03x | 1 | 0s | 11d ago | 38m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 833 ms | → 1.04x | 0 | — | — | 39m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.84% | 97.83% | 97.83% | 1698 ms | ↑ 1.09x | 3 | 0s | 8d ago | 26m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.95% | 99.95% | 974 ms | ↑ 1.25x | 0 | — | — | 23m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 97.09% | 97.09% | 1149 ms | ↑ 1.68x | 0 | — | — | 24m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1478 ms | → 1.00x | 0 | — | — | 24m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.75% | 98.75% | 584 ms | ↑ 1.05x | 0 | — | — | 30m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.36% | 98.68% | 98.68% | 1987 ms | ↓ 0.79x | 1 | 3h 60m | 27d ago | 39m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 90.04% | 96.83% | 96.83% | 3176 ms | ↓ 0.74x | 4 | 18h 12m | 14d ago | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.35% | 99.44% | 99.44% | 1616 ms | → 0.98x | 3 | 1h 3m | 12d ago | 23m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.70% | 97.70% | 3713 ms | ↑ 1.41x | 1 | 0s | 17d ago | 27m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 677 ms | ↑ 1.07x | 1 | 0s | 15d ago | 23m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 580 ms | → 1.00x | 0 | — | — | 22m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 92.74% | 92.74% | 92.74% | 1507 ms | → 1.00x | 1 | 13h 12m | 8d ago | 22m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 27.36% | 27.36% | 980 ms | ↑ 1.17x | 1 | 0s | 19d ago | 39m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.79% | 99.79% | 643 ms | ↓ 0.90x | 1 | 0s | 13d ago | 28m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.21% | 98.21% | 1603 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1250 ms | → 0.99x | 0 | — | — | 39m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.86% | 87.86% | 2394 ms | → 1.02x | 0 | — | — | 30m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.47% | 96.47% | 1740 ms | → 0.98x | 0 | — | — | 32m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.87% | 99.87% | 1582 ms | → 0.96x | 0 | — | — | 39m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 16.63% | 16.63% | 1915 ms | → 0.99x | 1 | 0s | 26d ago | 40m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1556 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.95% | 96.69% | 96.69% | 1524 ms | ↑ 1.09x | 1 | 0s | 29d ago | 26m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.84% | 99.84% | 2158 ms | ↑ 1.06x | 1 | 0s | 11d ago | 39m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 18.58% | 18.58% | 1839 ms | → 1.00x | 0 | — | — | 32m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 16.47% | 16.47% | 1486 ms | → 1.03x | 0 | — | — | 32m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.84% | 99.86% | 99.86% | 2727 ms | → 1.00x | 3 | 0s | 8d ago | 23m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.68% | 99.73% | 99.73% | 2553 ms | ↓ 0.94x | 1 | 2h 18m | 14d ago | 28m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1725 ms | ↑ 1.08x | 0 | — | — | 40m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.11% | 99.64% | 99.64% | 2137 ms | ↓ 0.91x | 6 | 2h 50m | 19d ago | 39m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2052 ms | ↓ 0.92x | 0 | — | — | 39m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.42% | 98.42% | 1237 ms | ↑ 1.20x | 0 | — | — | 26m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.84% | 44.68% | 44.68% | 1126 ms | → 0.96x | 3 | 0s | 13d ago | 28m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 330 ms | ↓ 0.92x | 0 | — | — | 40m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.47% | 95.91% | 95.91% | 2959 ms | → 0.99x | 10 | 0s | 2d ago | 42m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 99.84% | 99.84% | 99.84% | 2968 ms | → 0.98x | 3 | 0s | 6d ago | 42m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.75% | 99.31% | 99.43% | 99.43% | 2714 ms | → 0.98x | 6 | 32m | 4d ago | 42m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 38.14% | 38.14% | 1291 ms | ↓ 0.87x | 2 | 0s | 23h ago | 41m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.95% | 16.66% | 16.66% | 565 ms | ↓ 0.50x | 1 | 0s | 2d ago | 38m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.75% | 99.95% | 16.56% | 16.56% | 2510 ms | → 1.02x | 1 | 0s | 1d ago | 36m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.75% | 98.01% | 16.52% | 16.52% | 2516 ms | → 1.01x | 7 | 1h 40m | 7d ago | 32m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.95% | 18.41% | 18.41% | 984 ms | → 1.05x | 1 | 0s | 2d ago | 38m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.75% | 99.95% | 99.80% | 99.80% | 2804 ms | → 1.03x | 1 | 0s | 4d ago | 40m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.75% | 99.95% | 84.09% | 84.09% | 2047 ms | → 1.03x | 1 | 0s | 5d ago | 37m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.84% | 22.12% | 22.12% | 2341 ms | ↑ 1.06x | 3 | 0s | 3d ago | 43m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.75% | 99.95% | 91.98% | 91.98% | 3748 ms | → 1.04x | 1 | 0s | 3d ago | 43m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.75% | 99.95% | 99.93% | 99.93% | 790 ms | ↑ 1.07x | 1 | 0s | 3d ago | 40m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.84% | 99.80% | 99.80% | 1855 ms | → 1.00x | 3 | 0s | 3d ago | 37m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.75% | 99.95% | 99.83% | 99.83% | 2183 ms | → 1.00x | 1 | 0s | 5d ago | 32m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.75% | 99.95% | 99.10% | 99.10% | 1278 ms | → 0.96x | 1 | 0s | 3d ago | 40m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.89% | 64.94% | 64.94% | 1520 ms | → 0.98x | 2 | 0s | 4d ago | 30m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.75% | 84.84% | 33.55% | 33.55% | 1869 ms | ↑ 1.05x | 5 | 19h 14m | 1d ago | 30m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.05% | 99.05% | 1313 ms | ↑ 1.08x | 2 | 0s | 5d ago | 28m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.84% | 99.83% | 99.83% | 350 ms | ↑ 1.26x | 3 | 0s | 3d ago | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.75% | 99.78% | 99.79% | 99.79% | 1437 ms | → 0.98x | 3 | 10m | 8h ago | 28m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.95% | 89.80% | 89.80% | 1076 ms | → 1.00x | 1 | 0s | 1d ago | 29m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.75% | 97.62% | 48.27% | 48.27% | 584 ms | → 1.01x | 4 | 3h 22m | 2d ago | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.75% | 99.95% | 99.97% | 99.97% | 1910 ms | → 0.99x | 1 | 0s | 1d ago | 29m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.95% | 98.83% | 98.83% | 1370 ms | ↓ 0.84x | 1 | 0s | 2d ago | 28m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.75% | 99.35% | 98.55% | 98.55% | 626 ms | → 1.04x | 5 | 28m | 7d ago | 28m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.74% | 99.89% | 99.89% | 99.89% | 541 ms | ↓ 0.95x | 2 | 0s | 9h ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.74% | 99.67% | 99.85% | 99.85% | 1140 ms | ↑ 1.05x | 4 | 10m | 11h ago | 25m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.74% | 99.89% | 99.66% | 99.66% | 923 ms | ↓ 0.81x | 2 | 0s | 5d ago | 26m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.74% | 99.57% | 99.57% | 99.57% | 2699 ms | → 1.00x | 6 | 8m | 4d ago | 23m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.79% | 99.79% | 99.79% | 2417 ms | → 1.01x | 1 | 0s | 1h ago | 22m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.74% | 99.95% | 97.12% | 97.12% | 2050 ms | ↑ 2.04x | 1 | 0s | 5d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.74% | 99.62% | 97.46% | 97.46% | 1692 ms | → 0.96x | 7 | 0s | 6d ago | 25m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.49% | 99.73% | 98.84% | 98.84% | 2443 ms | → 0.98x | 4 | 5m | 7h ago | 42m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.49% | 99.73% | 78.61% | 78.61% | 2106 ms | → 1.01x | 5 | 0s | 5d ago | 37m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.49% | 98.07% | 99.13% | 99.13% | 3526 ms | ↑ 1.07x | 13 | 39m | 3d ago | 39m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.49% | 97.90% | 98.60% | 98.60% | 1318 ms | → 1.02x | 8 | 1h 20m | 5d ago | 30m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.49% | 99.89% | 98.02% | 98.02% | 1866 ms | → 0.96x | 1 | 30m | 4d ago | 30m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.49% | 99.89% | 93.39% | 93.39% | 696 ms | → 1.01x | 2 | 0s | 1d ago | 29m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.49% | 76.52% | 79.28% | 79.28% | 2705 ms | → 0.97x | 12 | 13h 59m | 2d ago | 23m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.49% | 99.57% | 99.52% | 99.52% | 2193 ms | ↓ 0.87x | 8 | 0s | 6d ago | 23m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.25% | 99.25% | 99.25% | 99.25% | 1611 ms | → 1.00x | 1 | 0s | 9h ago | 22m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.24% | 98.02% | 98.96% | 98.96% | 3559 ms | ↑ 1.06x | 14 | 36m | 3d ago | 39m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.24% | 98.61% | 98.23% | 98.23% | 4616 ms | → 1.00x | 26 | 0s | 21h ago | 43m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.24% | 96.25% | 16.12% | 16.12% | 2204 ms | ↑ 1.10x | 64 | 2m | 3d ago | 39m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.24% | 98.18% | 85.31% | 85.31% | 4531 ms | → 1.04x | 32 | 2m | 3d ago | 39m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.24% | 98.76% | 64.99% | 64.99% | 4751 ms | → 0.99x | 21 | 3m | 21h ago | 30m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.24% | 99.73% | 92.06% | 92.06% | 1496 ms | ↑ 1.05x | 5 | 0s | 4d ago | 28m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.24% | 99.46% | 90.82% | 90.82% | 1495 ms | ↓ 0.92x | 10 | 0s | 20h ago | 29m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.23% | 94.47% | 95.28% | 95.28% | 1701 ms | ↑ 1.28x | 6 | 5h 37m | 22h ago | 24m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.23% | 99.66% | 99.66% | 99.66% | 1385 ms | ↑ 1.36x | 1 | 51m | 6d ago | 22m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.23% | 90.66% | 90.66% | 90.66% | 1195 ms | ↑ 1.16x | 54 | 20m | 9h ago | 22m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.23% | 99.38% | 99.38% | 99.38% | 649 ms | → 1.02x | 1 | 1h | 6d ago | 22m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.23% | 98.86% | 99.00% | 99.00% | 1376 ms | ↑ 1.27x | 14 | 13m | 1d ago | 23m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.23% | 99.78% | 99.81% | 99.81% | 995 ms | ↑ 2.00x | 2 | 30m | 3d ago | 23m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.23% | 98.21% | 96.28% | 96.28% | 1415 ms | → 0.97x | 4 | 2h 27m | 6d ago | 25m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 99.11% | 99.11% | 99.11% | 99.11% | 4428 ms | → 1.00x | 1 | 0s | 2d ago | 24m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.10% | 99.10% | 99.10% | 99.10% | 1544 ms | → 1.00x | 1 | 0s | 11h ago | 23m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (49)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.99% | 93.62% | 67.58% | 67.58% | 3992 ms | ↓ 0.94x | 47 | 32m | 18h ago | 38m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.98% | 99.62% | 96.65% | 96.65% | 4409 ms | ↑ 1.09x | 7 | 0s | 17h ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.98% | 98.65% | 90.60% | 90.60% | 3607 ms | ↓ 0.94x | 25 | 0s | 2d ago | 28m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.98% | 98.00% | 85.10% | 85.10% | 4756 ms | → 0.98x | 36 | 52s | 3d ago | 28m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.98% | 98.70% | 98.66% | 98.66% | 1694 ms | ↑ 1.14x | 22 | 2m | 2d ago | 23m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 98.98% | 99.51% | 96.04% | 96.04% | 652 ms | ↑ 1.23x | 3 | 51m | 5d ago | 26m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.73% | 98.44% | 16.13% | 16.13% | 3614 ms | → 0.97x | 29 | 0s | 20h ago | 36m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.73% | 99.52% | 99.90% | 99.90% | 790 ms | → 1.03x | 4 | 29m | 4d ago | 38m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.73% | 99.57% | 99.67% | 99.67% | 1375 ms | → 1.04x | 5 | 14m | 1h ago | 33m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.48% | 91.09% | 14.98% | 14.98% | 2627 ms | → 0.99x | 126 | 7m | 14h ago | 38m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.48% | 58.42% | 30.18% | 30.18% | 3296 ms | → 1.02x | 75 | 3h 16m | 2d ago | 40m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.48% | 99.30% | 71.07% | 71.07% | 1231 ms | → 1.04x | 10 | 7m | 7h ago | 30m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.48% | 98.76% | 85.85% | 85.85% | 4264 ms | ↓ 0.95x | 22 | 56s | 20h ago | 31m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.97% | 97.80% | 73.69% | 73.69% | 4567 ms | → 1.00x | 35 | 4m | 19h ago | 38m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 97.97% | 80.38% | 52.28% | 52.28% | 3413 ms | → 1.01x | 7 | 19h 44m | 5d ago | 38m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 97.96% | 99.24% | 97.38% | 97.38% | 2125 ms | → 1.00x | 9 | 13m | 3d ago | 28m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.95% | 99.08% | 99.21% | 99.21% | 870 ms | → 1.03x | 17 | 0s | 21h ago | 23m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.95% | 99.51% | 98.51% | 98.51% | 2752 ms | ↑ 1.33x | 4 | 37m | 1d ago | 23m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 97.95% | 99.51% | 99.75% | 99.75% | 3033 ms | ↑ 1.10x | 5 | 24m | 3d ago | 27m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.72% | 97.85% | 14.83% | 14.83% | 2580 ms | → 0.99x | 11 | 59m | 4d ago | 36m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 97.70% | 98.57% | 98.57% | 98.57% | 4695 ms | → 1.02x | 11 | 0s | 1d ago | 22m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.47% | 97.69% | 98.60% | 98.60% | 4256 ms | → 1.00x | 43 | 42s | 6m ago | 36m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.47% | 98.50% | 98.92% | 98.92% | 1949 ms | → 1.03x | 20 | 11m | 1h ago | 37m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.46% | 96.06% | 81.60% | 81.60% | 4881 ms | → 1.01x | 65 | 3m | 17h ago | 28m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.22% | 98.19% | 84.52% | 84.52% | 3571 ms | ↑ 1.05x | 34 | 0s | 1d ago | 43m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 96.93% | 71.78% | 80.65% | 80.65% | 391 ms | → 0.96x | 5 | 1d 12h | 2d ago | 26m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 96.68% | 98.01% | 98.01% | 98.01% | 4100 ms | ↑ 1.09x | 3 | 1h 30m | 2d ago | 22m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.93% | 96.27% | 82.31% | 82.31% | 4646 ms | → 0.98x | 56 | 6m | 18h ago | 27m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 95.91% | 98.81% | 90.94% | 90.94% | 1914 ms | ↑ 1.26x | 9 | 30m | 10h ago | 25m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.19% | 97.70% | 98.85% | 98.85% | 852 ms | ↑ 1.05x | 2 | 6h 50m | 6d ago | 40m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.12% | 97.72% | 98.41% | 98.41% | 688 ms | → 1.04x | 7 | 2h 8m | 5d ago | 24m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 93.67% | 96.90% | 28.60% | 28.60% | 1761 ms | ↑ 1.14x | 10 | 1h 56m | 1d ago | 39m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 91.92% | 98.29% | 79.39% | 79.39% | 2068 ms | → 1.01x | 1 | 13h | 3d ago | 42m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 91.30% | 97.83% | 97.58% | 97.58% | 3424 ms | ↑ 1.09x | 14 | 52m | 3d ago | 27m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 91.30% | 98.05% | 97.73% | 97.73% | 3937 ms | ↑ 1.51x | 17 | 32m | 3d ago | 27m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 91.30% | 98.16% | 98.30% | 98.30% | 3250 ms | ↑ 1.45x | 15 | 37m | 3d ago | 27m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.30% | 90.03% | 52.93% | 52.93% | 3446 ms | ↓ 0.94x | 155 | 5m | 15h ago | 26m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 90.79% | 97.72% | 98.66% | 98.66% | 189 ms | ↑ 1.38x | 16 | 49m | 3d ago | 27m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 90.08% | 94.28% | 71.29% | 71.29% | 1273 ms | → 1.02x | 14 | 2h 16m | 2d ago | 30m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 87.72% | 94.63% | 95.24% | 95.24% | 4007 ms | ↑ 1.40x | 20 | 1h 28m | 17h ago | 24m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 87.21% | 97.07% | 97.41% | 97.41% | 1982 ms | ↑ 1.05x | 3 | 7h 23m | 2d ago | 23m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 85.79% | 89.97% | 17.40% | 17.40% | 4474 ms | → 0.96x | 150 | 6m | 59s ago | 31m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 75.26% | 88.47% | 91.19% | 91.19% | 2576 ms | → 0.97x | 10 | 7h 45m | 5d ago | 28m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 72.63% | 93.61% | 83.01% | 83.01% | 1769 ms | ↑ 1.15x | 7 | 6h 57m | 1d ago | 25m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 72.26% | 70.12% | 20.84% | 20.84% | 4692 ms | → 1.02x | 332 | 17m | 2h ago | 29m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 66.58% | 65.24% | 62.13% | 62.13% | 4768 ms | → 0.98x | 366 | 19m | 1h ago | 38m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 51.90% | 88.56% | 98.13% | 98.13% | 1416 ms | → 1.00x | 98 | 29m | 5h ago | 40m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 38.36% | 8.13% | 60.31% | 60.31% | 1326 ms | → 1.00x | 1 | 27d 4h | 30d ago | 26m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 30.97% | 30.97% | 30.97% | 30.97% | 4357 ms | → 1.00x | 1 | 1d 12h | 2d ago | 23m ago |

</details>

<details open>
<summary><strong>🔴 Down (241)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.49% | 96.20% | 96.65% | 96.65% | 1497 ms | ↑ 1.38x | 12 | 1h 47m | 24m ago | 24m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.72% | 99.29% | 99.40% | 99.40% | 677 ms | ↑ 1.34x | 4 | 53m | 2h ago | 23m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 96.46% | 98.40% | 98.64% | 98.64% | 2925 ms | → 0.97x | 20 | 14m | 4h ago | 40m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 79.90% | 95.73% | 97.82% | 97.82% | 255 ms | ↓ 0.33x | 2 | 15h 51m | 16h ago | 28m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 78.23% | 95.03% | 91.80% | 91.80% | 975 ms | → 1.00x | 8 | 4h 33m | 2d ago | 40m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 77.35% | 95.13% | 98.04% | 98.04% | 3256 ms | ↓ 0.94x | 2 | 18h 55m | 2d ago | 27m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 61.42% | 21.75% | 31.18% | 31.18% | 727 ms | → 0.95x | 3 | 7d 16h | 3d ago | 30m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 57.22% | 90.96% | 91.04% | 91.04% | 1007 ms | ↓ 0.95x | 1 | 3d 3h | 3d ago | 40m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 46.80% | 88.73% | 79.56% | 79.56% | 508 ms | → 0.96x | 1 | 3d 19h | 4d ago | 25m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 41.01% | 86.29% | 83.66% | 83.66% | 4515 ms | → 1.00x | 25 | 4h 4m | 4d ago | 43m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 39.90% | 85.64% | 80.64% | 80.64% | 4812 ms | ↑ 1.09x | 41 | 2h 26m | 4d ago | 26m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 38.48% | 86.97% | 41.82% | 41.82% | 1088 ms | ↓ 0.95x | 3 | 1d 11h | 4d ago | 38m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 35.55% | 47.72% | 47.72% | 47.72% | 1891 ms | → 1.03x | 1 | 4d 13h | 5d ago | 22m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 12.28% | 10.82% | 10.47% | 10.47% | 3173 ms | ↓ 0.84x | 176 | 3h 16m | 5h ago | 22m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 6.11% | 80.00% | 79.52% | 79.52% | 670 ms | → 1.01x | 2 | 3d 6h | 7d ago | 28m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 4.05% | 79.60% | 97.88% | 97.88% | 820 ms | ↓ 0.82x | 2 | 3d 8h | 7d ago | 37m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.03% | 1.39% | 60.70% | 60.70% | 4045 ms | → 0.99x | 26 | 1d 3h | 9h ago | 43m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 82.66% | 82.66% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 68.45% | 68.45% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 73.61% | 73.61% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 44.03% | 58.44% | 58.44% | — | — | 13 | 1d 9h | 18d ago | 23m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 32.92% | 83.80% | 83.80% | — | — | 6 | 3d 12h | 21d ago | 28m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 63.70% | 63.70% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.65% | 5.65% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.50% | 12.50% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 4.17% | 61.22% | 61.22% | — | — | 2 | 14d 11h | 29d ago | 26m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.39% | 3.39% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 15.28% | 72.49% | 72.49% | — | — | 2 | 12d 23h | 26d ago | 27m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 82.91% | 82.91% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.39% | 36.39% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 26.84% | 92.59% | 92.59% | — | — | 1 | 22d 19h | 23d ago | 42m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.89% | 23.89% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 74.40% | 74.40% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 52.65% | 52.65% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.03% | 30.03% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 83.30% | 83.30% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 62.75% | 62.75% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 76.95% | 76.95% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.30% | 15.30% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 62.84% | 94.53% | 94.53% | — | — | 6 | 1d 24h | 12d ago | 38m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 34.73% | 34.73% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 36.66% | 83.65% | 83.65% | — | — | 2 | 9d 23h | 20d ago | 31m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.49% | 3.49% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 83.50% | 83.50% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 34.76% | 42.48% | 42.48% | — | — | 6 | 3d 10h | 21d ago | 23m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.85% | 51.85% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.05% | 2.05% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 40.04% | 91.49% | 91.49% | — | — | 6 | 3d 4h | 19d ago | 39m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 50.00% | 81.89% | 81.89% | — | — | 2 | 7d 22h | 15d ago | 27m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 55.05% | 45.89% | 45.89% | — | — | 2 | 7d 5h | 14d ago | 30m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 10.59% | 78.84% | 78.84% | — | — | 3 | 9d 1h | 27d ago | 28m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 16.44% | 28.74% | 28.74% | — | — | 1 | 25d 15h | 26d ago | 23m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 16.31% | 65.76% | 65.76% | — | — | 2 | 12d 19h | 26d ago | 29m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 32.70% | 32.70% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 54.56% | 54.56% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 55.85% | 56.93% | 56.93% | — | — | 1 | 14d 5h | 14d ago | 26m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.63% | 24.63% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 29.74% | 29.74% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 3h | 2d ago | 22m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.17% | 57.17% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 34.09% | 24.79% | 24.79% | — | — | 1 | 20d 20h | 21d ago | 28m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.50% | 5.50% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 65.78% | 65.78% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 83.25% | 83.25% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.00% | 7.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 79.49% | 79.49% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 15.26% | 82.02% | 82.02% | — | — | 1 | 25d 22h | 26d ago | 42m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 36.65% | 33.85% | 33.85% | — | — | 1 | 20d 2h | 20d ago | 28m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 28.06% | 28.06% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 50.00% | 26.37% | 26.37% | — | — | 5 | 3d 3h | 13d ago | 27m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 52.88% | 52.88% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 76.90% | 78.56% | 78.56% | — | — | 3 | 2d 12h | 7d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 10.86% | 55.47% | 55.47% | — | — | 2 | 13d 13h | 27d ago | 29m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 10.19% | 10.19% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 15.38% | 69.60% | 69.60% | — | — | 1 | 25d 21h | 26d ago | 27m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 76.62% | 76.62% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.71% | 46.71% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.45% | 42.45% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 27.21% | 35.60% | 35.60% | — | — | 1 | 22d 18h | 23d ago | 23m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 83.26% | 83.26% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 58.81% | 58.81% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.06% | 39.06% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 32.86% | 83.80% | 83.80% | — | — | 6 | 3d 12h | 21d ago | 28m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 65.22% | 83.69% | 83.69% | — | — | 4 | 2d 19h | 11d ago | 26m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.48% | 31.48% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.57% | 2.57% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 15.29% | 83.49% | 83.49% | — | — | 1 | 25d 22h | 26d ago | 40m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.75% | 41.75% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 83.22% | 83.22% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.05% | 33.05% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 83.15% | 83.15% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 57.44% | 57.44% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 24.98% | 24.98% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 45.12% | 45.12% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 80.81% | 80.81% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 67.29% | 67.29% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 31.72% | 31.72% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 2h | 2d ago | 23m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 79.27% | 79.27% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 2h | 2d ago | 23m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 53.13% | 53.13% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.25% | 3.25% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 2h | 2d ago | 23m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.37% | 43.37% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 77.68% | 77.68% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 69.65% | 41.84% | 41.84% | — | — | 12 | 19h 27m | 9d ago | 39m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.26% | 59.26% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 15.18% | 49.08% | 49.08% | — | — | 4 | 6d 11h | 26d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 1.57% | 65.92% | 65.92% | — | — | 1 | 29d 14h | 30d ago | 27m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 4.01% | 89.28% | 89.28% | — | — | 1 | 28d 23h | 29d ago | 38m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.42% | 28.42% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.18% | 10.18% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.70% | 12.70% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 26.88% | 26.88% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.21% | 24.21% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 46.15% | 53.20% | 53.20% | — | — | 6 | 2d 21h | 17d ago | 39m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 47.25% | 94.53% | 94.53% | — | — | 14 | 1d 4h | 15d ago | 41m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 58.06% | 58.06% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 64.14% | 82.17% | 82.17% | — | — | 2 | 5d 17h | 11d ago | 27m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 11.35% | 11.35% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.55% | 17.55% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 49.73% | 49.73% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 19.58% | 29.04% | 29.04% | — | — | 1 | 24d 19h | 25d ago | 23m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 55.42% | 55.42% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 39.75% | 39.75% | — | — | 1 | 2d 3h | 2d ago | 30m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 23.83% | 23.83% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 37.50% | 37.50% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 50.97% | 50.97% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.57% | 5.57% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 52.78% | 83.32% | 83.32% | — | — | 2 | 7d 15h | 15d ago | 29m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 23.33% | 90.72% | 90.72% | — | — | 1 | 23d 19h | 24d ago | 40m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 71.86% | 77.66% | 77.66% | — | — | 1 | 9d 5h | 9d ago | 22m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 83.35% | 83.35% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 82.26% | 82.26% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 64.16% | 64.16% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 75.33% | 75.33% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 82.12% | 82.12% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.66% | 19.66% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 51.12% | 60.07% | 60.07% | — | — | 1 | 15d 18h | 16d ago | 42m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 51.35% | 44.72% | 44.72% | — | — | 11 | 1d 10h | 15d ago | 27m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.09% | 4.09% | — | — | 2 | 14d 23h | 17d ago | 38m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.29% | 34.29% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.48% | 68.92% | 68.92% | — | — | 4 | 7d 5h | 15d ago | 40m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 14.00% | 26.43% | 26.43% | — | — | 31 | 19h 28m | 13d ago | 28m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.68% | 7.68% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 65.98% | 65.98% | — | — | 1 | 29d 23h | 30d ago | 43m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 31.02% | 39.14% | 39.14% | — | — | 2 | 10d 20h | 22d ago | 23m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 67.93% | 67.93% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 4.39% | 45.28% | 45.28% | — | — | 1 | 28d 20h | 29d ago | 24m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 6.40% | 6.40% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 39.10% | 64.78% | 64.78% | — | — | 2 | 9d 8h | 15d ago | 24m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 31.13% | 57.26% | 57.26% | — | — | 2 | 10d 20h | 22d ago | 24m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 38.69% | 38.69% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 24.78% | 24.78% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 56.93% | 5.51% | 5.51% | — | — | 5 | 2d 15h | 9d ago | 40m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.56% | 12.56% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.05% | 18.05% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 18.98% | 18.98% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 38.38% | 38.38% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 18.03% | 10.23% | 10.23% | — | — | 173 | 3h 8m | 20d ago | 29m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 11.07% | 11.07% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.01% | 1.01% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.69% | 5.69% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.68% | 6.68% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.17% | 50.17% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 25.60% | 54.61% | 54.61% | — | — | 1 | 23d 4h | 23d ago | 23m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 83.32% | 83.32% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 45.94% | 79.30% | 79.30% | — | — | 1 | 17d 10h | 17d ago | 26m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 49.40% | 49.40% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 83.50% | 83.50% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 7.97% | 59.54% | 59.54% | — | — | 2 | 13d 22h | 28d ago | 25m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.60% | 41.60% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.31% | 2.31% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 30.24% | 19.99% | 19.99% | — | — | 1 | 21d 22h | 22d ago | 30m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2d 2h | 2d ago | 23m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 81.22% | 81.22% | — | — | 1 | 29d 24h | 30d ago | 32m ago |

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
