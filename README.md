# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 335 🟢 operational · 46 🟡 degraded · 235 🔴 down · 0 ⚫ unknown

_Updated 2026-06-03 08:22 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (335)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.34% | 97.34% | 2428 ms | → 1.05x | 0 | — | — | 50m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.95% | 51.24% | 51.24% | 1721 ms | → 1.02x | 1 | 0s | 22d ago | 37m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1298 ms | ↑ 1.08x | 0 | — | — | 31m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.76% | 98.76% | 1585 ms | ↓ 0.94x | 0 | — | — | 52m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.37% | 99.37% | 3249 ms | ↓ 0.91x | 1 | 0s | 13d ago | 52m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 98.97% | 98.97% | 1830 ms | → 0.98x | 1 | 19m | 15d ago | 33m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.32% | 94.32% | 1935 ms | → 1.01x | 0 | — | — | 34m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1553 ms | → 0.98x | 0 | — | — | 32m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.26% | 97.29% | 97.29% | 1969 ms | → 1.03x | 1 | 4h 31m | 20d ago | 34m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.09% | 92.09% | 2020 ms | ↑ 1.07x | 0 | — | — | 53m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1528 ms | ↑ 1.09x | 1 | 0s | 20d ago | 32m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.84% | 99.84% | 892 ms | → 0.99x | 1 | 0s | 19d ago | 34m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 814 ms | ↑ 1.20x | 0 | — | — | 31m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.95% | 98.42% | 98.42% | 914 ms | → 1.00x | 1 | 0s | 26d ago | 35m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.82% | 96.82% | 1455 ms | → 1.01x | 1 | 0s | 19d ago | 34m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.54% | 98.54% | 1132 ms | ↑ 1.23x | 0 | — | — | 33m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 34.75% | 34.75% | 587 ms | → 1.00x | 0 | — | — | 47m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.91% | 99.91% | 558 ms | ↓ 0.94x | 1 | 0s | 22d ago | 34m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.95% | 96.65% | 96.65% | 2034 ms | → 0.97x | 1 | 0s | 8d ago | 38m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 536 ms | → 1.04x | 1 | 0s | 12d ago | 32m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.36% | 96.36% | 498 ms | ↑ 1.11x | 0 | — | — | 36m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1559 ms | ↓ 0.91x | 1 | 0s | 12d ago | 32m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.84% | 99.85% | 99.85% | 1757 ms | ↓ 0.92x | 3 | 0s | 8d ago | 32m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.12% | 98.12% | 2704 ms | → 1.04x | 1 | 60m | 13d ago | 36m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.71% | 97.71% | 189 ms | ↑ 1.08x | 0 | — | — | 34m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.40% | 83.40% | 934 ms | ↓ 0.77x | 0 | — | — | 35m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 1047 ms | → 1.03x | 1 | 0s | 12d ago | 32m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.47% | 80.63% | 80.63% | 1603 ms | → 1.01x | 3 | 50m | 16d ago | 39m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.46% | 97.46% | 1185 ms | ↑ 1.34x | 0 | — | — | 37m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 436 ms | → 1.02x | 0 | — | — | 48m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 99.27% | 95.88% | 95.88% | 2753 ms | ↓ 0.95x | 14 | 0s | 15d ago | 52m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2607 ms | ↓ 0.93x | 1 | 0s | 26d ago | 48m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.91% | 98.91% | 212 ms | ↑ 1.25x | 0 | — | — | 36m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.22% | 97.79% | 97.79% | 3417 ms | → 1.04x | 15 | 0s | 9d ago | 50m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.81% | 99.81% | 1812 ms | ↓ 0.89x | 0 | — | — | 36m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.86% | 95.86% | 1260 ms | ↓ 0.75x | 0 | — | — | 36m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.84% | 99.84% | 593 ms | ↓ 0.64x | 3 | 0s | 12d ago | 32m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.95% | 98.64% | 98.64% | 2664 ms | → 1.01x | 2 | 6h 41m | 11d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.74% | 99.87% | 99.87% | 1022 ms | → 0.99x | 3 | 13m | 16d ago | 34m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 1802 ms | → 1.00x | 0 | — | — | 48m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3608 ms | ↓ 0.88x | 1 | 0s | 9d ago | 46m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.95% | 99.46% | 99.46% | 3186 ms | ↓ 0.89x | 1 | 0s | 22d ago | 36m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 27.15% | 27.15% | 1014 ms | → 0.96x | 0 | — | — | 48m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.53% | 95.39% | 95.39% | 1786 ms | ↑ 1.06x | 3 | 5h 26m | 8d ago | 34m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1304 ms | ↑ 1.06x | 1 | 0s | 12d ago | 32m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1971 ms | ↑ 1.17x | 0 | — | — | 33m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.59% | 97.39% | 97.39% | 1907 ms | ↑ 1.31x | 6 | 4h 32m | 17d ago | 41m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.38% | 96.38% | 853 ms | → 1.02x | 0 | — | — | 38m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.79% | 99.79% | 99.79% | 1875 ms | → 1.02x | 2 | 19m | 21d ago | 32m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.79% | 52.79% | 846 ms | → 1.01x | 0 | — | — | 40m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1647 ms | → 1.00x | 0 | — | — | 31m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1176 ms | ↑ 1.06x | 1 | 0s | 12d ago | 32m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3375 ms | → 1.04x | 0 | — | — | 46m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 100.00% | 77.29% | 77.73% | 77.73% | 2724 ms | → 0.96x | 10 | 16h 47m | 9d ago | 32m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.03% | 97.03% | 1640 ms | → 1.01x | 0 | — | — | 47m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.23% | 45.64% | 45.64% | 2092 ms | → 1.03x | 9 | 1h 42m | 14d ago | 47m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 99.16% | 96.49% | 96.49% | 1282 ms | → 0.99x | 7 | 27m | 7d ago | 47m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.74% | 98.91% | 98.91% | 1493 ms | → 1.02x | 2 | 44m | 11d ago | 33m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.17% | 82.17% | 1742 ms | → 0.98x | 0 | — | — | 39m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1561 ms | ↑ 1.20x | 0 | — | — | 33m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.51% | 98.51% | 1786 ms | → 0.99x | 0 | — | — | 36m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.96% | 99.96% | 3736 ms | → 0.98x | 1 | 0s | 12d ago | 32m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.54% | 92.54% | 938 ms | ↑ 1.11x | 1 | 0s | 9d ago | 40m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.43% | 98.43% | 670 ms | → 0.97x | 0 | — | — | 34m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.10% | 99.10% | 2510 ms | → 1.02x | 0 | — | — | 33m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 100.00% | 93.26% | 93.26% | 2231 ms | → 0.97x | 0 | — | — | 33m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.67% | 97.67% | 3042 ms | ↓ 0.89x | 2 | 0s | 8d ago | 36m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 74.37% | 87.47% | 87.47% | 674 ms | ↓ 0.75x | 2 | 4d | 18d ago | 34m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.25% | 45.25% | 946 ms | → 1.00x | 0 | — | — | 40m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.78% | 74.78% | 716 ms | → 0.99x | 1 | 0s | 20d ago | 39m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.31% | 94.31% | 94.31% | 546 ms | ↓ 0.69x | 5 | 7h 21m | 18d ago | 32m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.11% | 53.11% | 1443 ms | ↓ 0.92x | 1 | 0s | 13d ago | 48m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1620 ms | ↑ 1.07x | 0 | — | — | 32m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.02% | 98.02% | 1746 ms | ↓ 0.78x | 0 | — | — | 37m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1300 ms | → 1.03x | 1 | 0s | 12d ago | 32m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2209 ms | → 1.00x | 0 | — | — | 31m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.94% | 80.94% | 1302 ms | → 0.98x | 1 | 0s | 19d ago | 39m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.95% | 97.95% | 838 ms | ↓ 0.89x | 1 | 0s | 19d ago | 41m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.79% | 99.80% | 99.80% | 1589 ms | ↑ 1.07x | 3 | 6m | 12d ago | 32m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.90% | 58.34% | 58.34% | 1678 ms | → 1.00x | 2 | 0s | 15d ago | 40m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.63% | 61.63% | 1069 ms | → 1.01x | 0 | — | — | 40m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2584 ms | → 1.02x | 0 | — | — | 33m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.17% | 99.17% | 1426 ms | → 0.97x | 0 | — | — | 39m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.45% | 89.45% | 1757 ms | → 0.97x | 1 | 0s | 21d ago | 38m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.79% | 99.79% | 2440 ms | → 1.01x | 0 | — | — | 36m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 15.98% | 15.98% | 622 ms | ↓ 0.47x | 1 | 0s | 29d ago | 47m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.72% | 99.72% | 1923 ms | → 1.01x | 3 | 0s | 14d ago | 50m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1845 ms | → 1.03x | 0 | — | — | 32m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.69% | 99.00% | 99.00% | 3082 ms | ↑ 1.08x | 2 | 45m | 9d ago | 50m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.09% | 98.09% | 2859 ms | ↓ 0.87x | 0 | — | — | 52m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 72.68% | 72.68% | 1614 ms | ↓ 0.69x | 0 | — | — | 37m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 90.73% | 90.73% | 343 ms | ↑ 1.06x | 3 | 0s | 14d ago | 34m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.36% | 97.50% | 97.50% | 592 ms | ↓ 0.64x | 3 | 5h 59m | 11d ago | 32m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 817 ms | ↑ 1.10x | 1 | 0s | 28d ago | 33m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1218 ms | → 1.04x | 0 | — | — | 52m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1723 ms | ↑ 1.05x | 1 | 0s | 15d ago | 50m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.69% | 88.69% | 2006 ms | → 0.98x | 1 | 39m | 26d ago | 39m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.23% | 76.23% | 2044 ms | ↓ 0.88x | 0 | — | — | 36m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 984 ms | ↓ 0.76x | 0 | — | — | 32m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 81.75% | 81.75% | 1615 ms | → 0.99x | 0 | — | — | 34m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1504 ms | → 1.04x | 0 | — | — | 32m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1119 ms | → 1.01x | 0 | — | — | 34m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.00% | 99.00% | 463 ms | → 1.00x | 0 | — | — | 40m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.94% | 96.94% | 364 ms | ↓ 0.85x | 0 | — | — | 34m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1184 ms | → 1.04x | 1 | 0s | 12d ago | 32m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 820 ms | ↑ 1.05x | 1 | 0s | 12d ago | 32m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1724 ms | → 1.03x | 0 | — | — | 32m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.64% | 86.87% | 86.87% | 1276 ms | → 0.98x | 7 | 0s | 11d ago | 50m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 99.95% | 96.86% | 96.86% | 1751 ms | ↓ 0.93x | 1 | 0s | 29d ago | 33m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.73% | 98.73% | 150 ms | ↓ 0.82x | 0 | — | — | 36m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.94% | 98.94% | 786 ms | → 1.02x | 0 | — | — | 42m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 100.00% | 15.88% | 15.88% | 2359 ms | → 0.99x | 0 | — | — | 46m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.62% | 96.56% | 96.56% | 1239 ms | ↓ 0.87x | 38 | 16m | 12d ago | 32m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 19.66% | 19.66% | 823 ms | ↓ 0.87x | 0 | — | — | 40m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 809 ms | → 1.05x | 0 | — | — | 53m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2370 ms | ↑ 1.59x | 1 | 0s | 17d ago | 51m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 544 ms | ↓ 0.88x | 0 | — | — | 50m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.64% | 97.64% | 1025 ms | → 0.98x | 0 | — | — | 34m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.79% | 99.72% | 99.72% | 2429 ms | → 0.98x | 4 | 0s | 11d ago | 50m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.93% | 97.93% | 2092 ms | ↓ 0.94x | 0 | — | — | 38m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.79% | 99.72% | 99.72% | 606 ms | ↑ 1.23x | 2 | 25m | 18d ago | 51m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.84% | 99.80% | 99.80% | 1351 ms | → 1.01x | 1 | 39m | 26d ago | 42m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1972 ms | ↑ 1.31x | 0 | — | — | 33m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.68% | 98.68% | 4450 ms | → 1.01x | 0 | — | — | 52m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2810 ms | → 0.98x | 0 | — | — | 50m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1327 ms | → 1.03x | 0 | — | — | 32m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2377 ms | → 0.98x | 1 | 0s | 26d ago | 47m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.38% | 39.38% | 788 ms | → 1.05x | 0 | — | — | 51m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.38% | 98.38% | 3809 ms | ↓ 0.94x | 0 | — | — | 37m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1076 ms | → 1.01x | 1 | 0s | 20d ago | 50m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.64% | 99.84% | 99.84% | 143 ms | ↓ 0.93x | 5 | 12m | 9d ago | 50m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 96.05% | 15.07% | 15.07% | 699 ms | → 0.98x | 21 | 56m | 14d ago | 50m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1958 ms | → 0.98x | 0 | — | — | 39m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.59% | 99.59% | 1756 ms | → 1.02x | 0 | — | — | 34m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.65% | 89.65% | 1071 ms | → 1.00x | 0 | — | — | 38m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 631 ms | ↓ 0.87x | 0 | — | — | 51m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 59.14% | 59.14% | 1361 ms | → 1.02x | 3 | 0s | 18d ago | 40m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 18.13% | 18.13% | 2437 ms | → 0.98x | 1 | 0s | 17d ago | 41m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2386 ms | → 1.03x | 0 | — | — | 50m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 89.77% | 50.06% | 50.06% | 3487 ms | ↑ 1.05x | 2 | 1d 8h | 10d ago | 42m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.78% | 88.78% | 1852 ms | ↑ 1.23x | 1 | 0s | 13d ago | 50m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.89% | 98.89% | 2484 ms | → 0.97x | 1 | 0s | 10d ago | 38m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 100.00% | 79.38% | 79.38% | 1884 ms | → 0.95x | 0 | — | — | 52m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.87% | 81.24% | 81.24% | 1620 ms | ↑ 1.13x | 1 | 5d 5h | 27d ago | 33m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.79% | 99.90% | 99.90% | 725 ms | → 0.98x | 2 | 25m | 18d ago | 50m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1079 ms | ↓ 0.94x | 0 | — | — | 51m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 853 ms | → 1.00x | 3 | 7m | 8d ago | 49m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.95% | 38.46% | 38.46% | 195 ms | → 0.98x | 1 | 0s | 17d ago | 37m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 860 ms | ↓ 0.89x | 0 | — | — | 51m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 1118 ms | → 0.99x | 1 | 0s | 12d ago | 32m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.00% | 99.00% | 2415 ms | ↑ 1.12x | 0 | — | — | 50m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.22% | 98.22% | 1143 ms | → 0.98x | 0 | — | — | 34m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.89% | 97.89% | 1376 ms | ↓ 0.74x | 0 | — | — | 35m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.03% | 68.03% | 899 ms | → 0.97x | 0 | — | — | 39m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1003 ms | → 1.00x | 0 | — | — | 31m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.53% | 79.53% | 1463 ms | → 0.95x | 1 | 51m | 12d ago | 39m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1456 ms | ↑ 1.05x | 0 | — | — | 50m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1585 ms | ↓ 0.78x | 0 | — | — | 51m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 2110 ms | → 0.95x | 1 | 0s | 12d ago | 32m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 992 ms | → 1.04x | 1 | 0s | 11d ago | 42m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 84.84% | 32.88% | 32.88% | 1738 ms | → 1.04x | 7 | 14h 2m | 22d ago | 40m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.11% | 47.13% | 47.13% | 521 ms | ↓ 0.94x | 4 | 7h 27m | 26d ago | 36m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.90% | 84.90% | 218 ms | ↓ 0.85x | 0 | — | — | 49m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 90.02% | 90.02% | 316 ms | ↓ 0.80x | 1 | 0s | 19d ago | 36m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.25% | 99.25% | 2089 ms | → 1.04x | 0 | — | — | 39m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.51% | 96.51% | 1338 ms | → 1.03x | 0 | — | — | 40m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 17.74% | 17.74% | 980 ms | ↑ 1.06x | 1 | 0s | 28d ago | 47m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2405 ms | → 0.96x | 0 | — | — | 51m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.21% | 56.21% | 552 ms | → 1.02x | 0 | — | — | 40m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.47% | 98.32% | 98.32% | 1322 ms | → 0.95x | 1 | 4h 17m | 12d ago | 38m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.84% | 98.20% | 98.20% | 1752 ms | ↓ 0.84x | 3 | 0s | 8d ago | 36m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 36.48% | 36.48% | 1888 ms | → 1.02x | 1 | 0s | 11d ago | 39m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2589 ms | ↑ 1.06x | 0 | — | — | 51m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 1723 ms | ↓ 0.88x | 1 | 30m | 11d ago | 38m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.53% | 66.00% | 66.00% | 850 ms | → 0.99x | 5 | 16m | 12d ago | 39m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.95% | 54.20% | 54.20% | 3392 ms | ↓ 0.90x | 1 | 0s | 7d ago | 37m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1765 ms | ↓ 0.95x | 0 | — | — | 38m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.33% | 78.33% | 1351 ms | → 0.98x | 0 | — | — | 39m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 500 ms | → 1.00x | 0 | — | — | 31m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1872 ms | ↑ 1.09x | 0 | — | — | 50m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 968 ms | ↑ 1.17x | 1 | 0s | 12d ago | 32m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1899 ms | → 0.99x | 0 | — | — | 47m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 2525 ms | ↓ 0.89x | 1 | 0s | 14d ago | 51m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 78.68% | 78.68% | 1527 ms | → 0.97x | 3 | 0s | 8d ago | 39m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.62% | 85.62% | 1780 ms | → 0.98x | 0 | — | — | 39m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.90% | 99.90% | 1066 ms | → 1.02x | 2 | 0s | 12d ago | 32m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.96% | 95.96% | 1060 ms | → 1.01x | 0 | — | — | 40m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 871 ms | → 1.02x | 0 | — | — | 49m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.44% | 98.44% | 448 ms | → 1.03x | 1 | 0s | 25d ago | 36m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 18.86% | 18.86% | 344 ms | ↓ 0.60x | 0 | — | — | 40m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.47% | 96.87% | 96.87% | 2024 ms | → 1.00x | 6 | 16m | 9d ago | 34m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 754 ms | → 1.02x | 0 | — | — | 36m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.44% | 59.44% | 1855 ms | → 1.00x | 0 | — | — | 40m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 21.37% | 16.55% | 16.55% | 2085 ms | → 0.99x | 1 | 22d 21h | 30d ago | 50m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.26% | 91.13% | 91.13% | 29 ms | ↓ 0.40x | 2 | 2d 10h | 24d ago | 34m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 15.95% | 15.95% | 902 ms | → 1.04x | 0 | — | — | 49m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1254 ms | ↑ 1.14x | 0 | — | — | 33m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.41% | 99.41% | 1291 ms | ↑ 1.08x | 0 | — | — | 32m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1693 ms | ↓ 0.87x | 0 | — | — | 33m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2011 ms | ↑ 1.20x | 0 | — | — | 33m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.84% | 18.68% | 18.68% | 1177 ms | → 1.00x | 3 | 0s | 15d ago | 41m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.19% | 93.19% | 4551 ms | ↑ 1.10x | 0 | — | — | 50m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1708 ms | ↓ 0.94x | 0 | — | — | 38m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.28% | 99.28% | 1337 ms | → 1.00x | 0 | — | — | 33m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.14% | 99.14% | 958 ms | → 0.95x | 0 | — | — | 37m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.85% | 99.85% | 1563 ms | ↓ 0.92x | 2 | 10m | 12d ago | 32m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 36.87% | 36.87% | 1085 ms | ↓ 0.78x | 1 | 0s | 11d ago | 51m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1650 ms | ↑ 1.14x | 1 | 0s | 14d ago | 51m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 908 ms | → 0.96x | 0 | — | — | 49m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 514 ms | → 1.05x | 0 | — | — | 53m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.49% | 98.49% | 2534 ms | ↑ 1.24x | 0 | — | — | 34m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.59% | 96.59% | 2395 ms | → 1.01x | 0 | — | — | 50m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 265 ms | ↓ 0.23x | 0 | — | — | 31m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.85% | 99.85% | 99.85% | 1909 ms | ↑ 1.14x | 1 | 0s | 10d ago | 31m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.44% | 99.44% | 1787 ms | → 1.02x | 2 | 0s | 11d ago | 33m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.50% | 87.50% | 1458 ms | → 0.98x | 0 | — | — | 38m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.79% | 99.79% | 929 ms | → 0.97x | 0 | — | — | 34m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1390 ms | → 1.00x | 0 | — | — | 50m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1219 ms | ↑ 1.16x | 0 | — | — | 51m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.95% | 99.95% | 772 ms | ↑ 1.56x | 1 | 0s | 12d ago | 32m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1024 ms | ↑ 1.15x | 0 | — | — | 51m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.95% | 71.65% | 71.65% | 1111 ms | ↓ 0.92x | 1 | 0s | 12d ago | 37m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2645 ms | → 0.97x | 1 | 0s | 8d ago | 48m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 811 ms | → 1.02x | 0 | — | — | 49m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.90% | 21.48% | 21.48% | 1898 ms | → 0.98x | 2 | 0s | 19d ago | 52m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.82% | 98.82% | 1364 ms | ↓ 0.80x | 0 | — | — | 38m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.92% | 91.92% | 3369 ms | ↓ 0.95x | 0 | — | — | 52m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.95% | 99.95% | 99.95% | 744 ms | → 0.99x | 1 | 0s | 29d ago | 32m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 96.94% | 96.94% | 1071 ms | ↑ 1.51x | 0 | — | — | 33m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.74% | 98.74% | 573 ms | → 1.03x | 0 | — | — | 39m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.37% | 98.67% | 98.67% | 1852 ms | ↓ 0.75x | 1 | 3h 60m | 24d ago | 49m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 90.32% | 96.75% | 96.75% | 3359 ms | ↓ 0.90x | 4 | 18h 12m | 11d ago | 36m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.37% | 99.40% | 99.40% | 1641 ms | → 0.99x | 3 | 1h 3m | 9d ago | 32m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.64% | 97.64% | 3675 ms | ↑ 1.33x | 1 | 0s | 15d ago | 36m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 1108 ms | ↑ 1.14x | 1 | 0s | 12d ago | 32m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 26.76% | 26.76% | 952 ms | ↑ 1.17x | 1 | 0s | 16d ago | 49m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.79% | 99.79% | 622 ms | ↓ 0.86x | 1 | 0s | 10d ago | 38m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.18% | 98.18% | 1466 ms | → 0.98x | 0 | — | — | 38m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1191 ms | → 0.95x | 0 | — | — | 49m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.68% | 87.68% | 2230 ms | → 0.97x | 0 | — | — | 39m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.44% | 96.44% | 1727 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1480 ms | ↓ 0.95x | 0 | — | — | 49m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 15.94% | 15.94% | 1795 ms | → 0.96x | 1 | 0s | 23d ago | 50m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1678 ms | ↑ 1.34x | 0 | — | — | 33m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.95% | 96.57% | 96.57% | 1255 ms | → 1.00x | 1 | 0s | 26d ago | 34m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.84% | 99.84% | 1993 ms | → 1.01x | 1 | 0s | 8d ago | 49m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 17.90% | 17.90% | 1789 ms | ↓ 0.95x | 0 | — | — | 41m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 15.77% | 15.77% | 1365 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.68% | 99.72% | 99.72% | 2657 ms | ↓ 0.88x | 1 | 2h 18m | 11d ago | 36m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1664 ms | → 1.04x | 0 | — | — | 50m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.19% | 99.64% | 99.64% | 2017 ms | ↓ 0.87x | 6 | 2h 50m | 16d ago | 49m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1991 ms | ↓ 0.89x | 0 | — | — | 49m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.36% | 98.36% | 1094 ms | ↑ 1.07x | 0 | — | — | 34m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.09% | 99.09% | 1529 ms | ↑ 1.18x | 1 | 0s | 19m ago | 50m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.84% | 43.25% | 43.25% | 1210 ms | → 1.01x | 3 | 0s | 10d ago | 36m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 339 ms | ↓ 0.92x | 0 | — | — | 49m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.75% | 99.89% | 97.68% | 97.68% | 507 ms | ↓ 0.78x | 2 | 0s | 6d ago | 34m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.75% | 99.95% | 17.69% | 17.69% | 1661 ms | ↓ 0.90x | 1 | 0s | 6d ago | 41m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.75% | 99.79% | 97.77% | 97.77% | 2762 ms | → 0.97x | 4 | 0s | 6d ago | 46m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.75% | 94.73% | 95.02% | 95.02% | 1254 ms | ↑ 1.17x | 4 | 8h 26m | 4d ago | 33m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.75% | 99.95% | 98.84% | 98.84% | 1020 ms | ↑ 1.14x | 1 | 0s | 6d ago | 49m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.74% | 99.65% | 99.65% | 850 ms | ↓ 0.86x | 5 | 0s | 6d ago | 33m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.75% | 99.79% | 99.65% | 99.65% | 958 ms | ↑ 1.08x | 3 | 6m | 2d ago | 34m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.75% | 98.63% | 98.40% | 98.40% | 1658 ms | ↓ 0.93x | 14 | 21m | 7d ago | 32m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.75% | 99.89% | 99.85% | 99.85% | 799 ms | ↑ 1.05x | 2 | 0s | 5d ago | 32m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.53% | 99.54% | 99.54% | 2501 ms | → 0.96x | 7 | 7m | 1d ago | 32m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.84% | 99.82% | 99.82% | 338 ms | ↑ 1.17x | 3 | 0s | 5h ago | 36m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.95% | 50.54% | 50.54% | 1296 ms | ↑ 1.06x | 1 | 0s | 4d ago | 40m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.95% | 60.09% | 60.09% | 883 ms | → 0.99x | 1 | 0s | 6d ago | 39m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.75% | 99.90% | 99.55% | 99.55% | 876 ms | → 1.02x | 2 | 0s | 4d ago | 39m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 99.79% | 99.84% | 99.84% | 2835 ms | ↓ 0.92x | 4 | 0s | 3d ago | 52m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.75% | 99.90% | 99.71% | 99.71% | 2778 ms | ↓ 0.91x | 2 | 0s | 7d ago | 52m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.75% | 99.90% | 99.74% | 99.74% | 711 ms | ↑ 1.22x | 2 | 0s | 6d ago | 51m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.75% | 99.95% | 96.98% | 96.98% | 253 ms | → 0.97x | 1 | 0s | 2d ago | 34m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.63% | 97.34% | 97.34% | 1647 ms | ↓ 0.94x | 7 | 0s | 3d ago | 34m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.79% | 98.71% | 98.71% | 1354 ms | ↓ 0.80x | 4 | 0s | 5d ago | 33m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.84% | 99.32% | 99.32% | 1490 ms | ↓ 0.90x | 3 | 0s | 4d ago | 41m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.75% | 99.74% | 99.43% | 99.43% | 2866 ms | ↓ 0.92x | 5 | 0s | 6d ago | 46m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.75% | 99.95% | 99.84% | 99.84% | 1563 ms | ↓ 0.76x | 1 | 0s | 6d ago | 51m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.75% | 62.16% | 80.23% | 80.23% | 435 ms | → 1.04x | 4 | 2d 14h | 5d ago | 34m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.75% | 98.39% | 98.24% | 98.24% | 4604 ms | → 0.99x | 31 | 0s | 5d ago | 52m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.75% | 98.05% | 98.71% | 98.71% | 1394 ms | ↑ 1.14x | 4 | 2h 47m | 6d ago | 33m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.95% | 17.83% | 17.83% | 1467 ms | → 1.01x | 1 | 0s | 4d ago | 41m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.75% | 98.85% | 98.71% | 98.71% | 3280 ms | → 0.98x | 21 | 57s | 6d ago | 50m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.75% | 99.89% | 99.92% | 99.92% | 805 ms | → 1.02x | 2 | 0s | 6d ago | 34m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.95% | 15.95% | 15.95% | 2109 ms | ↑ 1.06x | 1 | 0s | 6d ago | 50m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.75% | 99.79% | 98.84% | 98.84% | 2386 ms | ↓ 0.92x | 3 | 7m | 6d ago | 52m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.95% | 65.72% | 65.72% | 894 ms | ↑ 1.51x | 1 | 0s | 5d ago | 40m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.79% | 99.80% | 99.80% | 1268 ms | → 0.99x | 4 | 0s | 6d ago | 32m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.75% | 99.32% | 99.33% | 99.33% | 1210 ms | → 0.98x | 4 | 48m | 4d ago | 32m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.75% | 99.84% | 99.19% | 99.19% | 3286 ms | → 0.96x | 3 | 0s | 5d ago | 46m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.75% | 99.95% | 99.92% | 99.92% | 189 ms | → 1.01x | 1 | 0s | 6d ago | 51m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.79% | 16.67% | 16.67% | 1166 ms | ↑ 1.11x | 4 | 0s | 6d ago | 40m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.75% | 99.95% | 99.79% | 99.79% | 2586 ms | → 0.99x | 1 | 0s | 16h ago | 50m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.75% | 99.32% | 99.42% | 99.42% | 2669 ms | ↓ 0.94x | 6 | 32m | 24h ago | 52m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.84% | 60.47% | 60.47% | 2399 ms | ↓ 0.86x | 3 | 0s | 6d ago | 51m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.75% | 99.95% | 83.95% | 83.95% | 1983 ms | → 0.99x | 1 | 0s | 2d ago | 47m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.84% | 97.76% | 97.76% | 1436 ms | → 1.01x | 3 | 0s | 5d ago | 34m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 96.42% | 96.49% | 96.49% | 896 ms | ↑ 1.15x | 10 | 2h 8m | 7d ago | 33m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.75% | 99.32% | 98.52% | 98.52% | 573 ms | ↓ 0.88x | 6 | 23m | 4d ago | 37m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.75% | 99.95% | 99.93% | 99.93% | 778 ms | → 0.99x | 1 | 0s | 11h ago | 50m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.84% | 99.80% | 99.80% | 1833 ms | → 0.97x | 3 | 0s | 9h ago | 47m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.75% | 99.95% | 99.83% | 99.83% | 2144 ms | ↓ 0.94x | 1 | 0s | 3d ago | 41m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.75% | 99.95% | 93.30% | 93.30% | 719 ms | → 1.01x | 1 | 0s | 1d ago | 38m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.03% | 99.03% | 1344 ms | → 1.03x | 2 | 0s | 2d ago | 38m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.51% | 99.74% | 78.43% | 78.43% | 2317 ms | → 1.00x | 5 | 0s | 2d ago | 47m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.51% | 98.60% | 92.19% | 92.19% | 968 ms | → 0.98x | 8 | 43m | 6d ago | 50m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.51% | 89.11% | 89.11% | 89.11% | 992 ms | ↑ 1.06x | 53 | 20m | 20h ago | 31m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.90% | 64.53% | 64.53% | 1545 ms | → 1.00x | 2 | 0s | 1d ago | 39m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.51% | 99.90% | 97.99% | 97.99% | 1860 ms | → 0.95x | 1 | 30m | 18h ago | 39m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 99.63% | 90.97% | 90.97% | 1790 ms | ↑ 1.24x | 5 | 8m | 4d ago | 34m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.51% | 99.84% | 99.80% | 99.80% | 1343 ms | ↓ 0.93x | 2 | 14m | 6d ago | 37m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.51% | 99.17% | 99.24% | 99.24% | 827 ms | → 1.00x | 9 | 13m | 6d ago | 51m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.90% | 84.82% | 84.82% | 2250 ms | ↑ 1.14x | 2 | 0s | 5d ago | 51m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.51% | 99.89% | 98.68% | 98.68% | 2323 ms | ↑ 1.22x | 2 | 0s | 19h ago | 33m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.51% | 99.89% | 99.76% | 99.76% | 718 ms | → 1.03x | 1 | 20m | 6d ago | 34m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.51% | 99.84% | 99.85% | 99.85% | 2721 ms | → 0.99x | 3 | 0s | 5d ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.51% | 99.42% | 90.70% | 90.70% | 1534 ms | ↓ 0.87x | 11 | 0s | 11h ago | 38m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.26% | 99.53% | 70.74% | 70.74% | 1229 ms | → 1.03x | 7 | 6m | 1d ago | 39m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.26% | 99.59% | 99.59% | 99.59% | 1142 ms | ↑ 1.27x | 1 | 51m | 3d ago | 31m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.26% | 99.43% | 99.68% | 99.68% | 2860 ms | → 0.99x | 9 | 4m | 5d ago | 46m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.26% | 99.84% | 99.84% | 99.84% | 867 ms | ↓ 0.94x | 2 | 11m | 4d ago | 32m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.26% | 97.69% | 15.81% | 15.81% | 2429 ms | ↓ 0.93x | 11 | 1h 9m | 4d ago | 41m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.26% | 93.89% | 67.33% | 67.33% | 3981 ms | ↓ 0.90x | 45 | 33m | 2d ago | 47m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.26% | 97.76% | 85.19% | 85.19% | 4550 ms | → 1.04x | 40 | 2m | 1d ago | 49m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.26% | 98.26% | 96.15% | 96.15% | 1280 ms | ↓ 0.94x | 4 | 2h 27m | 3d ago | 34m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.26% | 98.63% | 64.52% | 64.52% | 4690 ms | → 0.97x | 24 | 3m | 23h ago | 39m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.26% | 99.74% | 91.93% | 91.93% | 1512 ms | → 1.02x | 5 | 0s | 15h ago | 38m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.08% | 99.08% | 99.08% | 99.08% | 484 ms | → 1.00x | 1 | 1h | 3d ago | 31m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.02% | 97.80% | 98.58% | 98.58% | 1354 ms | → 1.00x | 11 | 58m | 2d ago | 39m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.02% | 97.19% | 98.96% | 98.96% | 3729 ms | → 1.05x | 18 | 42m | 18h ago | 49m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.02% | 99.53% | 95.91% | 95.91% | 513 ms | ↓ 0.88x | 3 | 51m | 2d ago | 34m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.02% | 97.24% | 99.13% | 99.13% | 3695 ms | → 1.04x | 17 | 45m | 1d ago | 49m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.02% | 98.69% | 85.75% | 85.75% | 4602 ms | → 0.98x | 23 | 2m | 2d ago | 40m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.02% | 99.63% | 96.63% | 96.63% | 4403 ms | ↑ 1.08x | 7 | 0s | 5h ago | 40m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (46)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.77% | 98.63% | 98.60% | 98.60% | 1624 ms | ↑ 1.12x | 24 | 2m | 1d ago | 32m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.77% | 99.53% | 99.90% | 99.90% | 791 ms | → 0.98x | 4 | 29m | 1d ago | 48m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 98.77% | 99.47% | 99.48% | 99.48% | 2314 ms | → 0.96x | 9 | 2m | 3d ago | 32m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.77% | 99.58% | 99.45% | 99.45% | 1637 ms | ↓ 0.80x | 3 | 33m | 5d ago | 50m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 98.77% | 99.02% | 99.02% | 99.02% | 4751 ms | → 1.04x | 6 | 0s | 20h ago | 31m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.53% | 99.32% | 99.35% | 99.35% | 1080 ms | → 1.00x | 13 | 0s | 1d ago | 32m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.53% | 98.22% | 15.44% | 15.44% | 3786 ms | ↓ 0.94x | 34 | 0s | 22h ago | 46m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.53% | 96.25% | 15.42% | 15.42% | 2402 ms | ↑ 1.11x | 67 | 2m | 17m ago | 48m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.28% | 99.32% | 98.29% | 98.29% | 2659 ms | → 1.00x | 5 | 35m | 4d ago | 33m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.28% | 99.32% | 97.33% | 97.33% | 2118 ms | ↓ 0.89x | 9 | 13m | 6m ago | 37m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.28% | 98.49% | 84.07% | 84.07% | 3200 ms | → 0.97x | 29 | 0s | 1h ago | 52m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.28% | 89.40% | 14.29% | 14.29% | 2419 ms | ↓ 0.93x | 155 | 6m | 7h ago | 47m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.28% | 98.63% | 90.39% | 90.39% | 3483 ms | ↓ 0.91x | 26 | 0s | 2d ago | 36m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 98.03% | 99.53% | 99.75% | 99.75% | 2976 ms | → 1.05x | 5 | 24m | 4h ago | 36m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 97.79% | 80.90% | 51.88% | 51.88% | 2984 ms | ↓ 0.95x | 7 | 19h 44m | 2d ago | 48m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.79% | 98.59% | 98.91% | 98.91% | 1973 ms | → 0.99x | 19 | 11m | 9h ago | 47m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 97.79% | 99.53% | 99.55% | 99.55% | 405 ms | → 1.03x | 3 | 40m | 2d ago | 32m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 97.79% | 99.00% | 99.02% | 99.02% | 1026 ms | → 1.04x | 12 | 16m | 2h ago | 32m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.54% | 99.16% | 85.64% | 85.64% | 1015 ms | ↑ 1.18x | 5 | 55m | 5d ago | 36m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 97.54% | 20.84% | 31.51% | 31.51% | 729 ms | → 1.00x | 2 | 11d 14h | 5d ago | 39m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.54% | 96.31% | 79.57% | 79.57% | 143 ms | → 0.98x | 4 | 7h 18m | 5d ago | 52m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 97.54% | 97.16% | 95.54% | 95.54% | 2304 ms | ↓ 0.93x | 4 | 4h 46m | 7d ago | 38m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.05% | 97.65% | 98.62% | 98.62% | 4234 ms | → 0.97x | 44 | 41s | 21h ago | 46m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 97.05% | 97.59% | 97.59% | 97.59% | 2861 ms | ↓ 0.95x | 2 | 2h 15m | 1d ago | 31m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 97.05% | 48.62% | 27.01% | 27.01% | 3946 ms | → 1.02x | 74 | 4h 16m | 1d ago | 50m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.81% | 95.95% | 81.29% | 81.29% | 4863 ms | → 0.96x | 69 | 3m | 2d ago | 38m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 96.56% | 97.39% | 14.12% | 14.12% | 2504 ms | → 1.01x | 13 | 1h 2m | 20h ago | 46m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.55% | 95.01% | 71.12% | 71.12% | 1179 ms | → 1.01x | 14 | 1h 57m | 3d ago | 39m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 96.31% | 98.79% | 96.49% | 96.49% | 2535 ms | ↓ 0.93x | 4 | 2h 10m | 6d ago | 34m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.31% | 96.27% | 81.94% | 81.94% | 4714 ms | → 1.00x | 61 | 5m | 5m ago | 36m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.82% | 97.07% | 97.07% | 97.07% | 505 ms | ↑ 1.06x | 2 | 2h 41m | 4d ago | 31m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.33% | 97.76% | 98.84% | 98.84% | 916 ms | ↑ 1.06x | 2 | 6h 50m | 4d ago | 49m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.59% | 98.07% | 28.13% | 28.13% | 1740 ms | ↑ 1.17x | 9 | 1h 17m | 2d ago | 48m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.35% | 97.79% | 98.33% | 98.33% | 232 ms | ↓ 0.54x | 7 | 2h 8m | 2d ago | 33m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 91.65% | 97.89% | 97.51% | 97.51% | 3399 ms | → 1.02x | 14 | 52m | 2h ago | 36m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 91.65% | 98.11% | 97.67% | 97.67% | 3878 ms | ↑ 1.41x | 17 | 32m | 2h ago | 36m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 91.65% | 98.21% | 98.25% | 98.25% | 3236 ms | ↑ 1.34x | 15 | 37m | 2h ago | 36m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 90.91% | 97.79% | 98.62% | 98.62% | 278 ms | ↑ 1.46x | 16 | 49m | 2h ago | 36m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.68% | 89.79% | 51.69% | 51.69% | 3424 ms | → 0.96x | 163 | 5m | 15h ago | 35m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 89.66% | 97.79% | 98.18% | 98.18% | 248 ms | ↓ 0.29x | 1 | 16h 22m | 3d ago | 38m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 89.43% | 89.87% | 16.73% | 16.73% | 4504 ms | → 0.98x | 153 | 6m | 6h ago | 40m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 89.26% | 89.26% | 89.26% | 89.26% | 1378 ms | → 1.00x | 1 | 13h 12m | 6d ago | 31m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 88.94% | 94.68% | 95.12% | 95.12% | 3783 ms | ↑ 1.32x | 18 | 1h 43m | 13h ago | 33m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.77% | 96.10% | 96.18% | 96.18% | 2064 ms | ↑ 1.18x | 2 | 13h 54m | 5d ago | 33m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 75.92% | 88.74% | 90.99% | 90.99% | 2383 ms | → 0.98x | 11 | 7h 2m | 2d ago | 36m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.23% | 1.25% | 61.19% | 61.19% | 2175 ms | ↓ 0.81x | 24 | 1d 5h | 22m ago | 52m ago |

</details>

<details open>
<summary><strong>🔴 Down (235)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 99.26% | 90.32% | 84.88% | 84.88% | 1700 ms | ↑ 1.12x | 4 | 15h 8m | 2h ago | 34m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.26% | 99.79% | 99.80% | 99.80% | 307 ms | ↑ 1.06x | 2 | 30m | 2h ago | 32m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.77% | 98.11% | 84.81% | 84.81% | 4667 ms | → 0.97x | 36 | 52s | 37m ago | 37m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.54% | 97.39% | 73.48% | 73.48% | 4489 ms | → 0.98x | 41 | 5m | 1h ago | 47m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 97.54% | 99.48% | 91.80% | 91.80% | 1062 ms | ↓ 0.95x | 1 | 5h 1m | 5h ago | 49m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 87.22% | 97.26% | 85.13% | 85.13% | 492 ms | ↓ 0.92x | 1 | 21h 33m | 22h ago | 34m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 82.06% | 94.70% | 84.36% | 84.36% | 4398 ms | → 0.98x | 30 | 1h 2m | 1d ago | 52m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 79.85% | 94.00% | 83.05% | 83.05% | 4791 ms | → 1.02x | 46 | 39m | 1d ago | 35m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 79.36% | 95.62% | 42.16% | 42.16% | 1059 ms | ↓ 0.88x | 3 | 11h 34m | 1d ago | 48m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.89% | 69.94% | 20.10% | 20.10% | 4703 ms | → 1.02x | 341 | 16m | 39m ago | 39m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 70.55% | 70.55% | 70.55% | 70.55% | 1737 ms | → 1.00x | 1 | 1d 14h | 2d ago | 31m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 68.06% | 64.91% | 62.08% | 62.08% | 4775 ms | → 0.99x | 373 | 19m | 4h ago | 47m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 66.34% | 92.76% | 98.51% | 98.51% | 1259 ms | → 0.98x | 74 | 21m | 1h ago | 50m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 47.91% | 88.85% | 81.24% | 81.24% | 670 ms | ↓ 0.94x | 2 | 1d 19h | 4d ago | 36m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 45.95% | 88.45% | 98.70% | 98.70% | 1168 ms | ↓ 0.91x | 2 | 1d 21h | 4d ago | 47m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 33.91% | 85.72% | 84.86% | 84.86% | 1467 ms | ↓ 0.74x | 4 | 1d 3h | 5d ago | 33m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 12.29% | 10.30% | 10.39% | 10.39% | 3217 ms | ↓ 0.90x | 174 | 3h 20m | 1h ago | 31m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 11.06% | 80.90% | 83.26% | 83.26% | 543 ms | ↓ 0.71x | 1 | 6d 6h | 6d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 10.07% | 77.80% | 42.19% | 42.19% | 1714 ms | ↑ 1.17x | 17 | 9h 51m | 6d ago | 48m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 10.07% | 55.42% | 5.55% | 5.55% | 1390 ms | → 0.99x | 5 | 2d 15h | 6d ago | 49m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 83.35% | 83.35% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 69.02% | 69.02% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 53.85% | 62.32% | 62.32% | — | — | 13 | 1d 3h | 15d ago | 32m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 42.95% | 85.42% | 85.42% | — | — | 7 | 2d 14h | 18d ago | 37m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 65.12% | 65.12% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.70% | 5.70% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.61% | 12.61% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 8.68% | 63.09% | 63.09% | — | — | 3 | 9d 5h | 26d ago | 34m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.42% | 3.42% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 25.89% | 74.40% | 74.40% | — | — | 2 | 11d 12h | 23d ago | 35m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 83.60% | 83.60% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.69% | 36.69% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 4.53% | 59.16% | 59.16% | — | — | 2 | 14d 9h | 29d ago | 35m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 37.09% | 93.36% | 93.36% | — | — | 1 | 19d 21h | 20d ago | 52m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.21% | 24.21% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 75.02% | 75.02% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 53.66% | 53.66% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.37% | 30.37% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 84.00% | 84.00% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 63.27% | 63.27% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 77.59% | 77.59% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.55% | 15.55% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 50.92% | 50.92% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 72.13% | 95.32% | 95.32% | — | — | 6 | 1d 12h | 9d ago | 47m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 35.26% | 35.26% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 46.69% | 84.35% | 84.35% | — | — | 2 | 8d 12h | 17d ago | 41m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.53% | 3.53% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 84.19% | 84.19% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 44.85% | 45.89% | 45.89% | — | — | 6 | 2d 23h | 18d ago | 32m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.28% | 52.28% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.07% | 2.07% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 48.98% | 92.25% | 92.25% | — | — | 11 | 1d 11h | 16d ago | 48m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 59.63% | 84.15% | 84.15% | — | — | 2 | 6d 11h | 12d ago | 36m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 64.57% | 46.34% | 46.34% | — | — | 2 | 5d 18h | 12d ago | 39m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 21.35% | 80.36% | 80.36% | — | — | 3 | 8d 2h | 24d ago | 37m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 27.04% | 30.96% | 30.96% | — | — | 1 | 22d 17h | 23d ago | 32m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 26.89% | 66.68% | 66.68% | — | — | 2 | 11d 9h | 23d ago | 38m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 33.53% | 33.53% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.01% | 55.01% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 65.32% | 58.68% | 58.68% | — | — | 1 | 11d 8h | 11d ago | 35m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.93% | 24.93% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.01% | 30.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.64% | 57.64% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 44.19% | 25.21% | 25.21% | — | — | 1 | 17d 22h | 18d ago | 38m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.61% | 5.61% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 66.32% | 66.32% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 83.94% | 83.94% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.20% | 7.20% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 80.15% | 80.15% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 25.82% | 82.71% | 82.71% | — | — | 1 | 22d 24h | 23d ago | 51m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 46.69% | 34.53% | 34.53% | — | — | 1 | 17d 5h | 17d ago | 37m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 28.70% | 28.70% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 48.58% | 27.22% | 27.22% | — | — | 5 | 3d 3h | 10d ago | 36m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.32% | 53.32% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 21.54% | 56.37% | 56.37% | — | — | 3 | 8d 1h | 24d ago | 38m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 10.11% | 10.95% | 10.95% | — | — | 1 | 27d 8h | 27d ago | 34m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 26.00% | 71.39% | 71.39% | — | — | 1 | 22d 24h | 23d ago | 36m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 77.26% | 77.26% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.10% | 47.10% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.80% | 42.80% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 37.52% | 38.46% | 38.46% | — | — | 1 | 19d 20h | 20d ago | 32m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 83.95% | 83.95% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 59.29% | 59.29% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.39% | 39.39% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 42.90% | 85.42% | 85.42% | — | — | 7 | 2d 14h | 18d ago | 36m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 72.11% | 86.68% | 86.68% | — | — | 5 | 1d 19h | 8d ago | 34m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.86% | 31.86% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.59% | 2.59% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 25.75% | 84.18% | 84.18% | — | — | 2 | 11d 12h | 23d ago | 50m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.09% | 42.09% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 83.91% | 83.91% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.37% | 33.37% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 8.89% | 59.51% | 59.51% | — | — | 1 | 27d 16h | 28d ago | 34m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 25.95% | 25.95% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 45.72% | 45.72% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 81.48% | 81.48% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 68.38% | 68.38% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 10.58% | 32.78% | 32.78% | — | — | 1 | 27d 5h | 27d ago | 34m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 79.93% | 79.93% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 54.36% | 54.36% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.29% | 3.29% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.74% | 43.74% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 78.33% | 78.33% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.76% | 59.76% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 25.82% | 51.49% | 51.49% | — | — | 4 | 5d 18h | 23d ago | 33m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 12.53% | 67.59% | 67.59% | — | — | 2 | 13d 8h | 27d ago | 36m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 14.85% | 90.02% | 90.02% | — | — | 1 | 26d 1h | 26d ago | 48m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.66% | 28.66% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.62% | 10.62% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.94% | 12.94% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 28.02% | 28.02% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.41% | 24.41% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 54.92% | 53.65% | 53.65% | — | — | 11 | 1d 7h | 14d ago | 48m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 56.65% | 95.32% | 95.32% | — | — | 16 | 20h 21m | 12d ago | 51m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 59.26% | 59.26% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 73.37% | 84.41% | 84.41% | — | — | 2 | 4d 6h | 8d ago | 35m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 11.91% | 11.91% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.69% | 17.69% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.15% | 50.15% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 30.08% | 31.37% | 31.37% | — | — | 1 | 21d 21h | 22d ago | 33m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 55.88% | 55.88% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 8.74% | 24.38% | 24.38% | — | — | 4 | 6d 22h | 28d ago | 36m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 38.68% | 38.68% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 52.34% | 52.34% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.62% | 5.62% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 62.38% | 84.62% | 84.62% | — | — | 2 | 6d 4h | 12d ago | 38m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 33.65% | 91.48% | 91.48% | — | — | 1 | 20d 20h | 21d ago | 49m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 84.04% | 84.04% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 82.95% | 82.95% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 75.96% | 75.96% | — | — | 1 | 29d 23h | 30d ago | 51m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 82.80% | 82.80% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.84% | 19.84% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 60.73% | 60.57% | 60.57% | — | — | 1 | 12d 20h | 13d ago | 52m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 60.95% | 45.93% | 45.93% | — | — | 11 | 1d 3h | 12d ago | 35m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.13% | 4.13% | — | — | 2 | 14d 23h | 14d ago | 48m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.59% | 34.59% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.38% | 69.49% | 69.49% | — | — | 4 | 7d 5h | 13d ago | 50m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.62% | 26.94% | 26.94% | — | — | 31 | 19h 29m | 10d ago | 37m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.80% | 7.80% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 66.53% | 66.53% | — | — | 1 | 29d 23h | 30d ago | 52m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 41.20% | 42.27% | 42.27% | — | — | 2 | 9d 9h | 19d ago | 33m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 68.49% | 68.49% | — | — | 1 | 29d 23h | 30d ago | 50m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 15.33% | 47.52% | 47.52% | — | — | 1 | 25d 22h | 26d ago | 33m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 6.88% | 6.88% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 48.58% | 67.99% | 67.99% | — | — | 2 | 7d 23h | 12d ago | 33m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 41.31% | 60.35% | 60.35% | — | — | 2 | 9d 9h | 19d ago | 33m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 39.86% | 39.86% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 25.94% | 25.94% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.87% | 12.87% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.20% | 18.20% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 19.54% | 19.54% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 10.01% | 40.45% | 40.45% | — | — | 1 | 27d 9h | 27d ago | 32m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 23.00% | 10.38% | 10.38% | — | — | 219 | 2h 15m | 17d ago | 39m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 6.97% | 11.93% | 11.93% | — | — | 7 | 4d | 28d ago | 32m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.06% | 1.06% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.96% | 5.96% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.01% | 7.01% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.58% | 50.58% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 35.88% | 57.56% | 57.56% | — | — | 2 | 10d 3h | 20d ago | 32m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 84.01% | 84.01% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 55.63% | 81.34% | 81.34% | — | — | 2 | 7d 6h | 15d ago | 35m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 50.57% | 50.57% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 84.19% | 84.19% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 18.80% | 61.82% | 61.82% | — | — | 2 | 12d 11h | 25d ago | 34m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.94% | 41.94% | — | — | 1 | 29d 24h | 30d ago | 50m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.49% | 2.49% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 40.44% | 20.27% | 20.27% | — | — | 1 | 18d 24h | 19d ago | 39m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 49m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 81.89% | 81.89% | — | — | 1 | 29d 24h | 30d ago | 41m ago |

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
