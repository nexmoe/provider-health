# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**643 providers** — 355 🟢 operational · 51 🟡 degraded · 237 🔴 down · 0 ⚫ unknown

_Updated 2026-06-04 07:27 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (355)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.89% | 97.72% | 97.72% | 493 ms | ↓ 0.78x | 2 | 0s | 7d ago | 21m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1676 ms | → 1.00x | 0 | — | — | 17m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.35% | 97.35% | 2432 ms | → 1.04x | 0 | — | — | 34m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.95% | 51.55% | 51.55% | 1748 ms | → 1.05x | 1 | 0s | 23d ago | 24m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 100.00% | 100.00% | 100.00% | 1486 ms | → 1.00x | 0 | — | — | 18m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.79% | 97.78% | 97.78% | 2792 ms | → 0.98x | 4 | 0s | 7d ago | 31m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1420 ms | ↑ 1.11x | 0 | — | — | 17m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.77% | 98.77% | 1623 ms | → 0.96x | 0 | — | — | 36m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.38% | 99.38% | 3337 ms | ↓ 0.92x | 1 | 0s | 14d ago | 36m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 98.99% | 98.99% | 1915 ms | → 1.05x | 1 | 19m | 16d ago | 20m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.38% | 94.38% | 1941 ms | → 1.02x | 0 | — | — | 21m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1625 ms | → 1.04x | 0 | — | — | 19m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.26% | 97.32% | 97.32% | 2001 ms | → 1.04x | 1 | 4h 31m | 21d ago | 21m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.11% | 92.11% | 2434 ms | ↑ 1.15x | 0 | — | — | 37m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1584 ms | ↑ 1.15x | 1 | 0s | 21d ago | 19m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.84% | 99.84% | 910 ms | → 1.03x | 1 | 0s | 20d ago | 21m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 841 ms | ↑ 1.23x | 0 | — | — | 17m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.95% | 98.43% | 98.43% | 913 ms | → 1.00x | 1 | 0s | 27d ago | 21m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.86% | 96.86% | 1457 ms | → 1.02x | 1 | 0s | 20d ago | 21m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.56% | 98.56% | 1386 ms | ↑ 1.31x | 0 | — | — | 19m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 34.93% | 34.93% | 620 ms | → 1.03x | 0 | — | — | 32m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1837 ms | → 1.00x | 0 | — | — | 17m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.91% | 99.91% | 544 ms | ↓ 0.92x | 1 | 0s | 23d ago | 21m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.95% | 96.67% | 96.67% | 2070 ms | → 0.99x | 1 | 0s | 9d ago | 24m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 550 ms | ↑ 1.06x | 1 | 0s | 13d ago | 18m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.38% | 96.38% | 503 ms | ↑ 1.11x | 0 | — | — | 23m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1566 ms | ↓ 0.92x | 1 | 0s | 13d ago | 18m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.84% | 99.85% | 99.85% | 1800 ms | ↓ 0.93x | 3 | 0s | 9d ago | 19m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.14% | 98.14% | 2772 ms | ↑ 1.05x | 1 | 60m | 14d ago | 22m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.75% | 97.75% | 189 ms | ↑ 1.11x | 0 | — | — | 21m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.73% | 99.66% | 99.66% | 862 ms | ↓ 0.85x | 5 | 0s | 7d ago | 19m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.56% | 83.56% | 1053 ms | ↓ 0.79x | 0 | — | — | 21m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 1095 ms | → 1.04x | 1 | 0s | 13d ago | 18m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.47% | 80.72% | 80.72% | 1591 ms | → 1.01x | 3 | 50m | 17d ago | 25m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.48% | 97.48% | 1164 ms | ↑ 1.30x | 0 | — | — | 24m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 431 ms | → 1.03x | 0 | — | — | 33m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2860 ms | → 0.99x | 1 | 0s | 27d ago | 33m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.91% | 98.91% | 294 ms | ↑ 1.33x | 0 | — | — | 23m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.32% | 97.80% | 97.80% | 3370 ms | → 1.04x | 13 | 0s | 10d ago | 35m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.81% | 99.81% | 2023 ms | ↓ 0.93x | 0 | — | — | 23m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.89% | 95.89% | 1284 ms | ↓ 0.78x | 0 | — | — | 23m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.85% | 99.85% | 780 ms | ↓ 0.68x | 3 | 0s | 13d ago | 18m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.93% | 98.66% | 98.66% | 2714 ms | → 1.04x | 2 | 6h 41m | 12d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.73% | 99.87% | 99.87% | 1063 ms | → 1.03x | 3 | 13m | 17d ago | 21m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 2025 ms | → 1.02x | 0 | — | — | 33m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 100.00% | 100.00% | 100.00% | 455 ms | → 1.00x | 0 | — | — | 19m ago |
| [KJK](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 18.18% | 18.18% | 2479 ms | → 1.00x | 0 | — | — | 20m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3584 ms | ↓ 0.89x | 1 | 0s | 10d ago | 31m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.95% | 99.46% | 99.46% | 3291 ms | ↓ 0.92x | 1 | 0s | 23d ago | 23m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 27.35% | 27.35% | 1115 ms | → 1.01x | 0 | — | — | 33m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 98.83% | 98.44% | 98.44% | 1657 ms | → 0.95x | 12 | 21m | 8d ago | 18m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.50% | 95.45% | 95.45% | 1790 ms | ↑ 1.06x | 3 | 5h 26m | 9d ago | 21m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1398 ms | ↑ 1.09x | 1 | 0s | 13d ago | 18m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2613 ms | → 1.00x | 0 | — | — | 19m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1986 ms | ↑ 1.19x | 0 | — | — | 19m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.55% | 97.39% | 97.39% | 1845 ms | ↑ 1.27x | 6 | 4h 32m | 18d ago | 27m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.40% | 96.40% | 856 ms | → 1.04x | 0 | — | — | 24m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.79% | 99.80% | 99.80% | 1866 ms | → 1.02x | 2 | 19m | 22d ago | 18m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.93% | 52.93% | 879 ms | → 1.01x | 0 | — | — | 27m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1101 ms | → 1.00x | 0 | — | — | 17m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1661 ms | → 1.00x | 0 | — | — | 17m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1180 ms | ↑ 1.07x | 1 | 0s | 13d ago | 18m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3255 ms | → 1.04x | 0 | — | — | 31m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.04% | 97.04% | 1574 ms | → 1.02x | 0 | — | — | 32m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.21% | 45.80% | 45.80% | 1990 ms | → 1.00x | 9 | 1h 42m | 15d ago | 32m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 100.00% | 100.00% | 20.00% | 20.00% | 1627 ms | → 1.00x | 0 | — | — | 20m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 100.00% | 99.16% | 96.50% | 96.50% | 1321 ms | → 1.00x | 7 | 27m | 8d ago | 32m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.73% | 98.94% | 98.94% | 1570 ms | ↑ 1.09x | 2 | 44m | 12d ago | 20m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.25% | 82.25% | 1735 ms | → 0.99x | 0 | — | — | 25m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1539 ms | ↑ 1.22x | 0 | — | — | 19m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.53% | 98.53% | 1921 ms | → 1.00x | 0 | — | — | 22m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.96% | 99.96% | 3760 ms | → 1.03x | 1 | 0s | 13d ago | 18m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.95% | 92.56% | 92.56% | 960 ms | ↑ 1.13x | 1 | 0s | 10d ago | 26m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.44% | 98.44% | 697 ms | → 0.99x | 0 | — | — | 21m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.12% | 99.12% | 2609 ms | → 1.05x | 0 | — | — | 19m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 100.00% | 93.41% | 93.41% | 2245 ms | → 1.02x | 0 | — | — | 20m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.69% | 97.69% | 3118 ms | ↓ 0.92x | 2 | 0s | 9d ago | 23m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 74.12% | 87.61% | 87.61% | 671 ms | ↓ 0.79x | 2 | 4d | 19d ago | 21m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 45.41% | 45.41% | 959 ms | → 1.01x | 0 | — | — | 27m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.89% | 74.89% | 705 ms | → 0.99x | 1 | 0s | 21d ago | 25m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 94.35% | 94.46% | 94.46% | 547 ms | ↓ 0.72x | 5 | 7h 21m | 19d ago | 18m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.24% | 53.24% | 1582 ms | → 1.00x | 1 | 0s | 14d ago | 33m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1593 ms | → 1.04x | 0 | — | — | 18m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.03% | 98.03% | 1820 ms | ↓ 0.81x | 0 | — | — | 24m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1323 ms | ↑ 1.05x | 1 | 0s | 13d ago | 18m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2275 ms | → 1.00x | 0 | — | — | 17m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 81.03% | 81.03% | 1356 ms | → 1.00x | 1 | 0s | 20d ago | 25m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.95% | 97.95% | 891 ms | ↓ 0.94x | 1 | 0s | 20d ago | 27m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.79% | 99.81% | 99.81% | 1625 ms | ↑ 1.08x | 3 | 6m | 13d ago | 18m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.89% | 58.48% | 58.48% | 1685 ms | → 1.01x | 2 | 0s | 16d ago | 26m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.76% | 61.76% | 1110 ms | → 1.02x | 0 | — | — | 26m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2627 ms | → 1.05x | 0 | — | — | 19m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.18% | 99.18% | 1422 ms | → 0.97x | 0 | — | — | 25m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.50% | 89.50% | 1800 ms | → 0.98x | 1 | 0s | 22d ago | 25m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.79% | 99.79% | 2588 ms | → 1.03x | 0 | — | — | 23m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 16.20% | 16.20% | 579 ms | ↓ 0.48x | 1 | 0s | 30d ago | 32m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.72% | 99.72% | 1944 ms | → 1.01x | 3 | 0s | 15d ago | 35m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1852 ms | → 1.02x | 0 | — | — | 18m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.69% | 99.01% | 99.01% | 3071 ms | ↑ 1.08x | 2 | 45m | 10d ago | 35m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.09% | 98.09% | 2936 ms | ↓ 0.90x | 0 | — | — | 36m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 72.86% | 72.86% | 1616 ms | ↓ 0.72x | 0 | — | — | 24m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 90.85% | 90.85% | 340 ms | ↑ 1.05x | 3 | 0s | 15d ago | 21m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.34% | 97.57% | 97.57% | 596 ms | ↓ 0.66x | 3 | 5h 59m | 12d ago | 18m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 956 ms | ↑ 1.12x | 1 | 0s | 29d ago | 19m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1233 ms | ↑ 1.07x | 0 | — | — | 36m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.90% | 99.71% | 99.71% | 2828 ms | ↓ 0.92x | 2 | 0s | 8d ago | 36m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.62% | 99.62% | 1743 ms | ↑ 1.06x | 1 | 0s | 16d ago | 34m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.75% | 88.75% | 2019 ms | → 0.98x | 1 | 39m | 27d ago | 25m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 76.42% | 76.42% | 2088 ms | ↓ 0.89x | 0 | — | — | 23m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.90% | 99.74% | 99.74% | 719 ms | ↑ 1.24x | 2 | 0s | 7d ago | 36m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 258 ms | → 1.00x | 0 | — | — | 19m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1035 ms | ↓ 0.79x | 0 | — | — | 18m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 81.95% | 81.95% | 1608 ms | → 1.01x | 0 | — | — | 21m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1589 ms | → 1.04x | 0 | — | — | 18m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1143 ms | → 1.03x | 0 | — | — | 21m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.01% | 99.01% | 453 ms | → 1.00x | 0 | — | — | 27m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.97% | 96.97% | 366 ms | ↓ 0.86x | 0 | — | — | 21m ago |
| [Codexe API](https://lmspeed.net/provider/codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1971 ms | → 1.00x | 0 | — | — | 17m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1153 ms | ↑ 1.06x | 1 | 0s | 13d ago | 18m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 857 ms | ↑ 1.09x | 1 | 0s | 13d ago | 18m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1740 ms | → 1.04x | 0 | — | — | 18m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.63% | 86.90% | 86.90% | 1336 ms | → 1.00x | 7 | 0s | 12d ago | 35m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 100.00% | 96.93% | 96.93% | 1869 ms | → 0.98x | 0 | — | — | 20m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.73% | 98.73% | 164 ms | ↓ 0.86x | 0 | — | — | 23m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.94% | 98.94% | 800 ms | → 1.02x | 0 | — | — | 28m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 4.67% | 4.67% | 174 ms | → 1.00x | 0 | — | — | 20m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 100.00% | 16.10% | 16.10% | 2493 ms | → 1.01x | 0 | — | — | 31m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.59% | 96.64% | 96.64% | 1242 ms | ↓ 0.89x | 38 | 16m | 13d ago | 18m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 19.89% | 19.89% | 881 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 848 ms | ↑ 1.09x | 0 | — | — | 37m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2426 ms | ↑ 1.55x | 1 | 0s | 18d ago | 36m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 549 ms | ↓ 0.90x | 0 | — | — | 35m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.67% | 97.67% | 1029 ms | → 0.99x | 0 | — | — | 21m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.84% | 99.72% | 99.72% | 2464 ms | → 0.99x | 3 | 0s | 12d ago | 35m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.94% | 97.94% | 2107 ms | ↓ 0.95x | 0 | — | — | 24m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.79% | 99.72% | 99.72% | 625 ms | ↑ 1.24x | 2 | 25m | 19d ago | 36m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1981 ms | ↑ 1.31x | 0 | — | — | 19m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.68% | 98.68% | 4490 ms | → 1.01x | 0 | — | — | 37m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2811 ms | → 0.99x | 0 | — | — | 35m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1390 ms | ↑ 1.06x | 0 | — | — | 19m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2383 ms | → 0.99x | 1 | 0s | 27d ago | 32m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.54% | 39.54% | 852 ms | ↑ 1.06x | 0 | — | — | 36m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.39% | 98.39% | 3875 ms | → 0.96x | 0 | — | — | 24m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1093 ms | → 1.02x | 1 | 0s | 21d ago | 35m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.74% | 99.43% | 99.43% | 2757 ms | ↓ 0.93x | 5 | 0s | 7d ago | 31m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.63% | 99.84% | 99.84% | 152 ms | ↓ 0.87x | 5 | 12m | 10d ago | 35m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 96.01% | 15.30% | 15.30% | 699 ms | → 0.97x | 21 | 56m | 15d ago | 35m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1985 ms | → 0.99x | 0 | — | — | 25m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.84% | 99.84% | 1558 ms | ↓ 0.76x | 1 | 0s | 7d ago | 36m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.60% | 99.60% | 1791 ms | → 1.04x | 0 | — | — | 21m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 839 ms | → 1.00x | 0 | — | — | 17m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 896 ms | → 1.00x | 0 | — | — | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.70% | 89.70% | 1081 ms | → 1.00x | 0 | — | — | 25m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 626 ms | ↓ 0.87x | 0 | — | — | 36m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.14% | 95.57% | 95.57% | 2283 ms | ↓ 0.94x | 4 | 4h 46m | 8d ago | 24m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 59.27% | 59.27% | 1474 ms | → 1.03x | 3 | 0s | 19d ago | 26m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 18.35% | 18.35% | 2470 ms | → 1.00x | 1 | 0s | 18d ago | 27m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2209 ms | → 1.00x | 0 | — | — | 35m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 93.33% | 50.79% | 50.79% | 3407 ms | ↑ 1.06x | 2 | 20h 29m | 11d ago | 28m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.81% | 88.81% | 1867 ms | ↑ 1.23x | 1 | 0s | 14d ago | 34m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.90% | 98.90% | 2430 ms | → 0.98x | 1 | 0s | 11d ago | 24m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.69% | 81.71% | 81.71% | 1709 ms | ↑ 1.15x | 1 | 5d 5h | 28d ago | 19m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.79% | 99.90% | 99.90% | 738 ms | → 1.00x | 2 | 25m | 19d ago | 34m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1154 ms | → 0.97x | 0 | — | — | 36m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.79% | 99.65% | 99.65% | 803 ms | → 0.99x | 3 | 7m | 9d ago | 34m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.95% | 38.85% | 38.85% | 195 ms | → 0.97x | 1 | 0s | 18d ago | 24m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 861 ms | ↓ 0.90x | 0 | — | — | 36m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 1164 ms | → 1.03x | 1 | 0s | 13d ago | 18m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.89% | 99.92% | 99.92% | 797 ms | → 1.01x | 2 | 0s | 7d ago | 21m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.01% | 99.01% | 2410 ms | ↑ 1.11x | 0 | — | — | 34m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.24% | 98.24% | 1145 ms | → 1.00x | 0 | — | — | 21m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.91% | 97.91% | 1377 ms | ↓ 0.76x | 0 | — | — | 21m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.16% | 68.16% | 900 ms | → 0.96x | 0 | — | — | 25m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 100.00% | 100.00% | 100.00% | 100.00% | 394 ms | → 1.00x | 0 | — | — | 19m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1005 ms | → 1.00x | 0 | — | — | 17m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.62% | 79.62% | 1533 ms | → 0.97x | 1 | 51m | 13d ago | 25m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1457 ms | ↑ 1.06x | 0 | — | — | 34m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1575 ms | ↓ 0.78x | 0 | — | — | 36m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 2108 ms | → 0.96x | 1 | 0s | 13d ago | 18m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 995 ms | ↑ 1.05x | 1 | 0s | 12d ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 84.70% | 33.10% | 33.10% | 1759 ms | → 1.04x | 7 | 14h 2m | 23d ago | 26m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.07% | 47.51% | 47.51% | 564 ms | → 0.98x | 4 | 7h 27m | 27d ago | 23m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.94% | 84.94% | 233 ms | ↓ 0.87x | 0 | — | — | 34m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 90.09% | 90.09% | 305 ms | ↓ 0.81x | 1 | 0s | 20d ago | 23m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.26% | 99.26% | 2027 ms | → 1.02x | 0 | — | — | 25m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.79% | 98.84% | 98.84% | 2414 ms | ↓ 0.94x | 3 | 7m | 7d ago | 36m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.52% | 96.52% | 1393 ms | ↑ 1.06x | 0 | — | — | 26m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 17.96% | 17.96% | 1016 ms | ↑ 1.06x | 1 | 0s | 29d ago | 32m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2309 ms | → 0.95x | 0 | — | — | 36m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1760 ms | → 1.00x | 0 | — | — | 19m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 2674 ms | → 1.00x | 0 | — | — | 18m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 56.36% | 56.36% | 619 ms | → 1.04x | 0 | — | — | 26m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.47% | 98.32% | 98.32% | 1303 ms | → 0.96x | 1 | 4h 17m | 13d ago | 24m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.84% | 98.21% | 98.21% | 1762 ms | ↓ 0.87x | 3 | 0s | 9d ago | 23m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 36.77% | 36.77% | 2154 ms | → 1.04x | 1 | 0s | 12d ago | 25m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2570 ms | ↑ 1.05x | 0 | — | — | 36m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.87% | 99.87% | 1727 ms | ↓ 0.90x | 1 | 30m | 12d ago | 24m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.63% | 66.14% | 66.14% | 837 ms | → 0.99x | 4 | 15m | 13d ago | 25m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 99.95% | 54.51% | 54.51% | 3459 ms | ↓ 0.93x | 1 | 0s | 8d ago | 24m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1774 ms | → 0.97x | 0 | — | — | 25m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.43% | 78.43% | 1407 ms | → 1.02x | 0 | — | — | 25m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 189 ms | → 1.00x | 1 | 0s | 7d ago | 36m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 504 ms | → 1.00x | 0 | — | — | 17m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1921 ms | ↑ 1.10x | 0 | — | — | 34m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 991 ms | ↑ 1.24x | 1 | 0s | 13d ago | 19m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1926 ms | → 1.01x | 0 | — | — | 32m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 2535 ms | ↓ 0.89x | 1 | 0s | 15d ago | 36m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.84% | 78.77% | 78.77% | 1559 ms | → 1.00x | 3 | 0s | 9d ago | 25m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.69% | 85.69% | 1797 ms | → 0.98x | 0 | — | — | 25m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.90% | 99.90% | 1064 ms | → 1.02x | 2 | 0s | 13d ago | 18m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.97% | 95.97% | 1055 ms | → 1.02x | 0 | — | — | 27m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 891 ms | → 1.04x | 0 | — | — | 34m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.45% | 98.45% | 443 ms | → 1.01x | 1 | 0s | 26d ago | 23m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 19.12% | 19.12% | 381 ms | ↓ 0.65x | 0 | — | — | 27m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.47% | 96.91% | 96.91% | 2045 ms | → 1.03x | 6 | 16m | 10d ago | 21m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 766 ms | → 1.02x | 0 | — | — | 23m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.58% | 59.58% | 1923 ms | → 1.01x | 0 | — | — | 26m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 24.30% | 17.76% | 17.76% | 1977 ms | ↓ 0.84x | 1 | 21d 22h | 30d ago | 35m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.09% | 91.24% | 91.24% | 29 ms | ↓ 0.45x | 2 | 2d 10h | 25d ago | 21m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 16.17% | 16.17% | 880 ms | → 1.03x | 0 | — | — | 34m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1425 ms | ↑ 1.20x | 0 | — | — | 19m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.42% | 99.42% | 1297 ms | ↑ 1.08x | 0 | — | — | 19m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.95% | 99.95% | 1742 ms | ↓ 0.91x | 0 | — | — | 20m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1990 ms | ↑ 1.21x | 0 | — | — | 19m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.84% | 18.90% | 18.90% | 1246 ms | → 1.03x | 3 | 0s | 16d ago | 27m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.21% | 93.21% | 4509 ms | ↑ 1.08x | 0 | — | — | 35m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1736 ms | → 0.95x | 0 | — | — | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.29% | 99.29% | 1398 ms | ↑ 1.05x | 0 | — | — | 20m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.15% | 99.15% | 1000 ms | → 0.98x | 0 | — | — | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.85% | 99.85% | 1556 ms | ↓ 0.94x | 2 | 10m | 13d ago | 18m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 37.30% | 37.30% | 1038 ms | ↓ 0.81x | 1 | 0s | 12d ago | 36m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1651 ms | ↑ 1.15x | 1 | 0s | 15d ago | 36m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 897 ms | → 0.97x | 0 | — | — | 34m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 660 ms | ↑ 1.16x | 0 | — | — | 37m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.84% | 60.57% | 60.57% | 2386 ms | ↓ 0.85x | 3 | 0s | 7d ago | 36m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.51% | 98.51% | 2537 ms | ↑ 1.23x | 0 | — | — | 21m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.60% | 96.60% | 2443 ms | → 1.01x | 0 | — | — | 35m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 339 ms | ↓ 0.27x | 0 | — | — | 17m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.86% | 99.86% | 99.86% | 2047 ms | ↑ 1.17x | 1 | 0s | 11d ago | 17m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.45% | 99.45% | 1851 ms | ↑ 1.08x | 2 | 0s | 12d ago | 20m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.57% | 87.57% | 1455 ms | → 1.00x | 0 | — | — | 24m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.80% | 99.80% | 958 ms | → 1.02x | 0 | — | — | 21m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1616 ms | → 1.00x | 0 | — | — | 19m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1392 ms | → 1.00x | 0 | — | — | 35m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1220 ms | ↑ 1.14x | 0 | — | — | 36m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.95% | 99.95% | 780 ms | ↑ 1.72x | 1 | 0s | 13d ago | 18m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1062 ms | ↑ 1.16x | 0 | — | — | 36m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.95% | 71.85% | 71.85% | 1127 ms | → 0.96x | 1 | 0s | 13d ago | 24m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2732 ms | → 1.01x | 1 | 0s | 9d ago | 33m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 826 ms | → 1.03x | 0 | — | — | 33m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.83% | 98.83% | 1308 ms | ↓ 0.78x | 0 | — | — | 24m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.95% | 99.95% | 99.95% | 739 ms | → 1.01x | 1 | 0s | 30d ago | 18m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 96.99% | 96.99% | 1110 ms | ↑ 1.62x | 0 | — | — | 20m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1273 ms | → 1.00x | 0 | — | — | 19m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.74% | 98.74% | 559 ms | → 1.03x | 0 | — | — | 25m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.37% | 98.68% | 98.68% | 1860 ms | ↓ 0.76x | 1 | 3h 60m | 25d ago | 33m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 90.23% | 96.77% | 96.77% | 3437 ms | ↓ 0.91x | 4 | 18h 12m | 12d ago | 22m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.36% | 99.42% | 99.42% | 1646 ms | → 1.00x | 3 | 1h 3m | 10d ago | 18m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.66% | 97.66% | 3735 ms | ↑ 1.41x | 1 | 0s | 15d ago | 22m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 753 ms | ↑ 1.11x | 1 | 0s | 13d ago | 18m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 896 ms | → 1.00x | 0 | — | — | 17m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 26.95% | 26.95% | 955 ms | ↑ 1.17x | 1 | 0s | 17d ago | 33m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.79% | 99.79% | 640 ms | ↓ 0.88x | 1 | 0s | 11d ago | 24m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.19% | 98.19% | 1445 ms | → 0.99x | 0 | — | — | 24m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1248 ms | → 0.98x | 0 | — | — | 33m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.74% | 87.74% | 2287 ms | → 0.99x | 0 | — | — | 25m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.45% | 96.45% | 1739 ms | → 0.96x | 0 | — | — | 27m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1586 ms | → 0.97x | 0 | — | — | 33m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 16.17% | 16.17% | 1808 ms | → 0.97x | 1 | 0s | 24d ago | 35m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1683 ms | ↑ 1.37x | 0 | — | — | 19m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.95% | 96.61% | 96.61% | 1260 ms | → 1.01x | 1 | 0s | 27d ago | 21m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.84% | 99.84% | 2111 ms | → 1.04x | 1 | 0s | 9d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 18.12% | 18.12% | 1847 ms | → 0.97x | 0 | — | — | 27m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 16.00% | 16.00% | 1506 ms | → 0.98x | 0 | — | — | 27m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.68% | 99.73% | 99.73% | 2874 ms | ↓ 0.92x | 1 | 2h 18m | 12d ago | 23m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1593 ms | → 1.05x | 0 | — | — | 35m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.16% | 99.64% | 99.64% | 2138 ms | ↓ 0.88x | 6 | 2h 50m | 17d ago | 33m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 2071 ms | ↓ 0.91x | 0 | — | — | 33m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.38% | 98.38% | 1111 ms | ↑ 1.09x | 0 | — | — | 21m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.84% | 43.73% | 43.73% | 1222 ms | → 1.03x | 3 | 0s | 11d ago | 23m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 341 ms | ↓ 0.94x | 0 | — | — | 34m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.75% | 99.95% | 17.91% | 17.91% | 1717 ms | ↓ 0.94x | 1 | 0s | 6d ago | 27m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.95% | 50.68% | 50.68% | 1241 ms | ↑ 1.05x | 1 | 0s | 5d ago | 27m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.95% | 60.25% | 60.25% | 887 ms | → 1.01x | 1 | 0s | 7d ago | 25m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.75% | 99.89% | 99.56% | 99.56% | 928 ms | ↑ 1.05x | 2 | 0s | 5d ago | 25m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.75% | 99.79% | 99.77% | 99.77% | 1370 ms | → 1.02x | 2 | 20m | 23h ago | 28m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.75% | 99.84% | 99.32% | 99.32% | 1478 ms | ↓ 0.92x | 3 | 0s | 5d ago | 27m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.95% | 18.05% | 18.05% | 1494 ms | → 1.01x | 1 | 0s | 5d ago | 27m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.95% | 65.85% | 65.85% | 918 ms | ↑ 1.57x | 1 | 0s | 6d ago | 25m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.79% | 16.91% | 16.91% | 1129 ms | → 1.00x | 4 | 0s | 7d ago | 27m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.75% | 99.95% | 99.83% | 99.83% | 2224 ms | → 0.97x | 1 | 0s | 3d ago | 27m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.75% | 99.95% | 93.33% | 93.33% | 707 ms | → 1.01x | 1 | 0s | 2d ago | 25m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.75% | 99.95% | 98.84% | 98.84% | 957 ms | ↑ 1.14x | 1 | 0s | 7d ago | 33m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.75% | 99.63% | 92.21% | 92.21% | 979 ms | → 0.99x | 7 | 0s | 7d ago | 35m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.21% | 95.89% | 95.89% | 2904 ms | → 0.97x | 15 | 0s | 1h ago | 36m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.75% | 99.89% | 99.04% | 99.04% | 1358 ms | ↑ 1.07x | 2 | 0s | 3d ago | 24m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.84% | 99.82% | 99.82% | 371 ms | ↑ 1.27x | 3 | 0s | 1d ago | 23m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.75% | 99.79% | 99.84% | 99.84% | 2863 ms | ↓ 0.94x | 4 | 0s | 4d ago | 36m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.95% | 16.18% | 16.18% | 2101 ms | → 1.04x | 1 | 0s | 7d ago | 35m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.75% | 99.90% | 84.87% | 84.87% | 2151 ms | ↑ 1.11x | 2 | 0s | 6d ago | 36m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.75% | 99.84% | 99.20% | 99.20% | 3374 ms | → 0.96x | 3 | 0s | 6d ago | 31m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.75% | 99.95% | 99.80% | 99.80% | 2694 ms | → 1.00x | 1 | 0s | 2d ago | 35m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.75% | 99.32% | 99.42% | 99.42% | 2707 ms | → 0.95x | 6 | 32m | 2d ago | 36m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.75% | 99.95% | 84.00% | 84.00% | 1940 ms | → 1.00x | 1 | 0s | 3d ago | 32m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.84% | 21.68% | 21.68% | 2100 ms | → 1.03x | 3 | 0s | 21h ago | 37m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.75% | 99.95% | 91.93% | 91.93% | 3607 ms | → 0.99x | 1 | 0s | 21h ago | 37m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.75% | 99.36% | 98.53% | 98.53% | 573 ms | ↓ 0.92x | 5 | 28m | 5d ago | 24m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.75% | 99.95% | 99.93% | 99.93% | 799 ms | → 1.03x | 1 | 0s | 1d ago | 35m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.75% | 99.84% | 99.80% | 99.80% | 1962 ms | → 0.99x | 3 | 0s | 1d ago | 32m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.75% | 99.95% | 99.09% | 99.09% | 1502 ms | ↑ 1.11x | 1 | 0s | 23h ago | 35m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.75% | 99.79% | 99.66% | 99.66% | 942 ms | → 1.00x | 3 | 6m | 3d ago | 21m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.75% | 99.89% | 99.85% | 99.85% | 796 ms | ↑ 1.05x | 2 | 0s | 6d ago | 19m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.52% | 99.55% | 99.55% | 2520 ms | → 0.98x | 7 | 7m | 2d ago | 18m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.75% | 99.95% | 97.03% | 97.03% | 278 ms | ↑ 1.09x | 1 | 0s | 3d ago | 20m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.63% | 97.38% | 97.38% | 1674 ms | → 0.96x | 7 | 0s | 4d ago | 21m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 99.84% | 98.74% | 98.74% | 1372 ms | ↓ 0.84x | 3 | 0s | 6d ago | 20m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.75% | 98.03% | 98.73% | 98.73% | 1556 ms | ↑ 1.18x | 4 | 2h 47m | 7d ago | 19m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.79% | 99.81% | 99.81% | 1315 ms | → 1.02x | 4 | 0s | 7d ago | 18m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.75% | 99.31% | 99.35% | 99.35% | 1254 ms | → 1.02x | 4 | 48m | 5d ago | 19m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.84% | 97.78% | 97.78% | 1423 ms | → 1.03x | 3 | 0s | 6d ago | 21m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 96.33% | 96.53% | 96.53% | 1045 ms | ↑ 1.18x | 11 | 1h 56m | 17h ago | 19m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.50% | 99.89% | 64.66% | 64.66% | 1516 ms | → 1.01x | 2 | 0s | 2d ago | 25m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.50% | 99.89% | 98.00% | 98.00% | 1863 ms | → 0.96x | 1 | 30m | 2d ago | 25m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.50% | 99.74% | 78.49% | 78.49% | 2151 ms | → 1.00x | 5 | 0s | 3d ago | 32m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.50% | 98.73% | 64.68% | 64.68% | 4764 ms | → 0.98x | 22 | 3m | 2d ago | 25m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.50% | 99.42% | 99.68% | 99.68% | 2976 ms | → 1.00x | 9 | 4m | 6d ago | 31m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.50% | 99.84% | 99.80% | 99.80% | 1410 ms | → 0.96x | 2 | 14m | 7d ago | 24m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.50% | 99.21% | 99.25% | 99.25% | 838 ms | → 1.01x | 9 | 13m | 7d ago | 36m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.50% | 98.53% | 98.24% | 98.24% | 4634 ms | → 1.01x | 28 | 0s | 23h ago | 37m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.50% | 93.89% | 67.41% | 67.41% | 3984 ms | ↓ 0.90x | 44 | 34m | 3d ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.50% | 99.47% | 90.75% | 90.75% | 1487 ms | ↓ 0.89x | 10 | 0s | 1d ago | 25m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.50% | 94.63% | 95.09% | 95.09% | 1337 ms | ↑ 1.18x | 5 | 6h 45m | 16h ago | 19m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.50% | 89.71% | 89.71% | 89.71% | 1033 ms | ↑ 1.10x | 53 | 20m | 2d ago | 17m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.50% | 76.97% | 78.19% | 78.19% | 2720 ms | → 0.98x | 12 | 13h 59m | 13h ago | 18m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.50% | 99.57% | 91.05% | 91.05% | 1848 ms | ↑ 1.28x | 6 | 7m | 19h ago | 21m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.50% | 99.89% | 98.70% | 98.70% | 2283 ms | ↑ 1.25x | 2 | 0s | 2d ago | 19m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.50% | 99.89% | 99.76% | 99.76% | 774 ms | ↑ 1.12x | 1 | 20m | 7d ago | 21m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.50% | 99.84% | 99.85% | 99.85% | 2740 ms | → 1.01x | 3 | 0s | 6d ago | 18m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.26% | 99.52% | 70.86% | 70.86% | 1232 ms | → 1.04x | 7 | 6m | 2d ago | 25m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.26% | 97.67% | 16.04% | 16.04% | 2491 ms | → 0.97x | 11 | 1h 9m | 5d ago | 27m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.25% | 99.73% | 91.97% | 91.97% | 1523 ms | → 1.05x | 5 | 0s | 2d ago | 24m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.25% | 97.16% | 99.13% | 99.13% | 3691 ms | ↑ 1.05x | 18 | 42m | 14h ago | 33m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.25% | 96.21% | 15.64% | 15.64% | 2403 ms | ↑ 1.12x | 66 | 2m | 23h ago | 33m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.25% | 97.95% | 85.23% | 85.23% | 4554 ms | ↑ 1.06x | 36 | 2m | 23h ago | 33m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.25% | 99.61% | 99.61% | 99.61% | 1194 ms | ↑ 1.31x | 1 | 51m | 4d ago | 17m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.25% | 99.84% | 99.84% | 99.84% | 921 ms | → 0.96x | 2 | 11m | 5d ago | 18m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.25% | 99.79% | 99.81% | 99.81% | 948 ms | ↑ 1.46x | 2 | 30m | 1d ago | 18m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.25% | 98.25% | 96.19% | 96.19% | 1314 ms | → 0.96x | 4 | 2h 27m | 4d ago | 21m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.20% | 99.20% | 99.20% | 99.20% | 505 ms | → 1.00x | 1 | 1h | 4d ago | 17m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.01% | 97.78% | 98.59% | 98.59% | 1347 ms | → 1.02x | 11 | 58m | 3d ago | 25m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.01% | 99.63% | 96.64% | 96.64% | 4406 ms | ↑ 1.06x | 7 | 0s | 1d ago | 27m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.00% | 97.11% | 98.95% | 98.95% | 3711 ms | → 1.05x | 19 | 40m | 14h ago | 33m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.00% | 98.31% | 15.66% | 15.66% | 3772 ms | → 0.96x | 31 | 0s | 2d ago | 31m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.00% | 98.79% | 98.69% | 98.69% | 3276 ms | → 0.98x | 21 | 2m | 1h ago | 34m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.00% | 99.52% | 95.95% | 95.95% | 505 ms | ↓ 0.93x | 3 | 51m | 3d ago | 21m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (51)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.76% | 98.68% | 85.79% | 85.79% | 4480 ms | → 0.97x | 23 | 2m | 16h ago | 27m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.76% | 99.53% | 99.90% | 99.90% | 781 ms | → 1.00x | 4 | 29m | 2d ago | 33m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 98.76% | 98.05% | 28.32% | 28.32% | 1775 ms | ↑ 1.16x | 9 | 1h 17m | 3d ago | 33m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.76% | 89.83% | 14.51% | 14.51% | 1759 ms | ↓ 0.89x | 147 | 6m | 13h ago | 32m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.76% | 99.58% | 99.46% | 99.46% | 1530 ms | ↓ 0.74x | 3 | 33m | 6d ago | 34m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.75% | 98.67% | 98.64% | 98.64% | 1633 ms | ↑ 1.12x | 23 | 2m | 2d ago | 18m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 98.75% | 99.47% | 99.50% | 99.50% | 2292 ms | → 0.97x | 9 | 2m | 4d ago | 19m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.51% | 98.04% | 84.90% | 84.90% | 4725 ms | → 0.99x | 36 | 52s | 18h ago | 24m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 98.50% | 98.80% | 98.80% | 98.80% | 4740 ms | → 1.04x | 8 | 0s | 2h ago | 17m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.26% | 51.81% | 28.06% | 28.06% | 3469 ms | → 1.02x | 74 | 3h 57m | 2d ago | 35m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.25% | 99.31% | 98.34% | 98.34% | 2751 ms | → 1.03x | 5 | 35m | 5d ago | 20m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.25% | 99.20% | 99.27% | 99.27% | 1040 ms | ↑ 1.06x | 15 | 0s | 5h ago | 18m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.01% | 99.26% | 97.35% | 97.35% | 2130 ms | ↓ 0.93x | 9 | 13m | 23h ago | 24m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.01% | 80.73% | 52.01% | 52.01% | 3204 ms | → 0.99x | 7 | 19h 44m | 3d ago | 33m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.01% | 97.68% | 98.63% | 98.63% | 4282 ms | → 0.99x | 42 | 43s | 2d ago | 31m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.01% | 98.62% | 90.45% | 90.45% | 3629 ms | ↓ 0.94x | 26 | 0s | 4h ago | 23m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 98.00% | 93.52% | 84.96% | 84.96% | 1702 ms | ↑ 1.13x | 3 | 13h 33m | 1d ago | 21m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.00% | 99.52% | 99.56% | 99.56% | 425 ms | ↑ 1.10x | 3 | 40m | 3d ago | 18m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 98.00% | 99.52% | 99.75% | 99.75% | 3060 ms | ↑ 1.07x | 5 | 24m | 1d ago | 22m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.76% | 98.32% | 84.20% | 84.20% | 3548 ms | → 1.01x | 32 | 0s | 7h ago | 37m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.76% | 98.58% | 98.92% | 98.92% | 1923 ms | → 1.00x | 19 | 11m | 1d ago | 32m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.51% | 97.52% | 73.55% | 73.55% | 4437 ms | ↓ 0.95x | 40 | 4m | 16h ago | 32m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.51% | 96.28% | 79.63% | 79.63% | 145 ms | → 0.99x | 4 | 7h 18m | 6d ago | 36m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.51% | 99.15% | 85.76% | 85.76% | 719 ms | ↓ 0.95x | 5 | 55m | 6d ago | 22m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 97.51% | 98.94% | 98.99% | 98.99% | 1069 ms | ↑ 1.09x | 13 | 15m | 19h ago | 19m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.01% | 97.58% | 14.35% | 14.35% | 2581 ms | → 0.99x | 12 | 1h 3m | 2d ago | 31m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 97.01% | 98.78% | 96.54% | 96.54% | 2507 ms | ↓ 0.93x | 4 | 2h 10m | 7d ago | 21m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.77% | 96.39% | 82.08% | 82.08% | 4667 ms | → 0.99x | 57 | 5m | 23h ago | 23m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.77% | 95.92% | 81.40% | 81.40% | 4879 ms | → 0.98x | 69 | 3m | 17h ago | 24m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 96.76% | 97.63% | 97.63% | 97.63% | 3664 ms | → 0.99x | 3 | 1h 30m | 3h ago | 17m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.27% | 94.91% | 71.24% | 71.24% | 1166 ms | → 1.01x | 15 | 1h 48m | 16h ago | 25m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.76% | 97.30% | 97.30% | 97.30% | 517 ms | ↑ 1.09x | 2 | 2h 41m | 5d ago | 17m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.27% | 97.74% | 98.84% | 98.84% | 917 ms | ↑ 1.08x | 2 | 6h 50m | 5d ago | 34m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.26% | 97.77% | 98.36% | 98.36% | 246 ms | ↓ 0.58x | 7 | 2h 8m | 3d ago | 19m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 92.04% | 98.32% | 79.27% | 79.27% | 1874 ms | → 0.96x | 1 | 13h | 18h ago | 36m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 91.52% | 97.87% | 97.53% | 97.53% | 3420 ms | ↑ 1.06x | 14 | 52m | 1d ago | 22m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 91.52% | 98.09% | 97.69% | 97.69% | 3937 ms | ↑ 1.49x | 17 | 32m | 1d ago | 22m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 91.52% | 98.19% | 98.27% | 98.27% | 3259 ms | ↑ 1.44x | 15 | 37m | 1d ago | 22m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 90.77% | 97.77% | 98.63% | 98.63% | 318 ms | ↑ 1.44x | 16 | 49m | 1d ago | 22m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 90.72% | 90.72% | 90.72% | 90.72% | 1529 ms | → 1.00x | 1 | 13h 12m | 7d ago | 17m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.52% | 89.59% | 52.08% | 52.08% | 3152 ms | ↓ 0.95x | 164 | 5m | 17h ago | 21m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 89.55% | 97.77% | 98.19% | 98.19% | 248 ms | ↓ 0.30x | 1 | 16h 22m | 4d ago | 24m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 88.78% | 94.63% | 95.17% | 95.17% | 3881 ms | ↑ 1.37x | 18 | 1h 43m | 17h ago | 19m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.34% | 90.15% | 16.96% | 16.96% | 4511 ms | → 0.99x | 147 | 7m | 2h ago | 27m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 85.71% | 85.71% | 85.71% | 85.71% | 4326 ms | → 1.00x | 1 | 0s | 2h ago | 19m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.54% | 96.06% | 96.27% | 96.27% | 2093 ms | ↑ 1.20x | 2 | 13h 54m | 6d ago | 19m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 75.62% | 88.64% | 91.06% | 91.06% | 2389 ms | → 0.99x | 11 | 7h 2m | 3d ago | 23m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 74.13% | 70.68% | 20.40% | 20.40% | 4690 ms | → 1.03x | 333 | 16m | 2h ago | 25m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 67.91% | 65.54% | 62.11% | 62.11% | 4780 ms | → 1.00x | 366 | 19m | 1h ago | 32m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.47% | 10.39% | 10.42% | 10.42% | 3170 ms | ↓ 0.91x | 173 | 3h 21m | 6h ago | 18m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 11.22% | 3.40% | 59.47% | 59.47% | 1464 ms | ↓ 0.70x | 1 | 28d 21h | 30d ago | 21m ago |

</details>

<details open>
<summary><strong>🔴 Down (237)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 97.51% | 64.98% | 80.25% | 80.25% | 448 ms | ↑ 1.06x | 5 | 1d 21h | 5h ago | 21m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 88.34% | 21.35% | 31.42% | 31.42% | 731 ms | → 1.01x | 3 | 7d 16h | 20h ago | 25m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 84.58% | 96.74% | 91.56% | 91.56% | 1051 ms | ↓ 0.95x | 1 | 1d 4h | 1d ago | 34m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 74.31% | 94.52% | 83.25% | 83.25% | 493 ms | ↓ 0.93x | 1 | 1d 20h | 2d ago | 21m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 68.91% | 92.03% | 84.13% | 84.13% | 4409 ms | → 0.97x | 28 | 1h 57m | 2d ago | 37m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 66.83% | 91.39% | 82.25% | 82.25% | 4796 ms | → 1.04x | 43 | 1h 13m | 2d ago | 21m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 66.17% | 92.84% | 42.05% | 42.05% | 1141 ms | ↓ 0.95x | 3 | 19h 10m | 2d ago | 33m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 61.01% | 61.01% | 61.01% | 61.01% | 1737 ms | → 1.00x | 1 | 2d 14h | 3d ago | 17m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 60.45% | 91.54% | 98.40% | 98.40% | 1267 ms | → 0.97x | 81 | 24m | 1h ago | 34m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 34.58% | 85.99% | 80.67% | 80.67% | 665 ms | ↓ 0.94x | 2 | 2d 7h | 5d ago | 23m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 32.34% | 85.61% | 98.44% | 98.44% | 1254 ms | ↓ 0.92x | 2 | 2d 9h | 5d ago | 31m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 20.20% | 82.93% | 82.72% | 82.72% | 1645 ms | ↓ 0.81x | 3 | 1d 20h | 6d ago | 19m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.49% | 1.31% | 61.03% | 61.03% | 2769 ms | ↓ 0.90x | 25 | 1d 4h | 13h ago | 37m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 83.12% | 83.12% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 68.84% | 68.84% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 74.03% | 74.03% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 50.69% | 61.02% | 61.02% | — | — | 13 | 1d 5h | 16d ago | 18m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 39.68% | 84.89% | 84.89% | — | — | 7 | 2d 18h | 19d ago | 23m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 64.65% | 64.65% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.69% | 5.69% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.57% | 12.57% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 8.77% | 62.48% | 62.48% | — | — | 3 | 9d 5h | 27d ago | 21m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.41% | 3.41% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 22.48% | 73.78% | 73.78% | — | — | 2 | 11d 23h | 24d ago | 22m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 83.38% | 83.38% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.60% | 36.60% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 33.77% | 93.11% | 93.11% | — | — | 1 | 20d 20h | 21d ago | 36m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.11% | 24.11% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 74.82% | 74.82% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 53.33% | 53.33% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.25% | 30.25% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 83.77% | 83.77% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 63.10% | 63.10% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 77.38% | 77.38% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.47% | 15.47% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 50.70% | 50.70% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 69.14% | 95.06% | 95.06% | — | — | 6 | 1d 16h | 10d ago | 32m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 35.09% | 35.09% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 43.46% | 84.12% | 84.12% | — | — | 2 | 8d 23h | 18d ago | 27m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.52% | 3.52% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 83.97% | 83.97% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 41.61% | 44.73% | 44.73% | — | — | 6 | 3d 2h | 19d ago | 18m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.14% | 52.14% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.06% | 2.06% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 45.79% | 92.00% | 92.00% | — | — | 11 | 1d 13h | 17d ago | 33m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 56.54% | 83.41% | 83.41% | — | — | 2 | 6d 23h | 13d ago | 22m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 61.49% | 46.19% | 46.19% | — | — | 2 | 6d 6h | 12d ago | 25m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 17.88% | 79.86% | 79.86% | — | — | 3 | 8d 9h | 25d ago | 24m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 23.63% | 30.20% | 30.20% | — | — | 1 | 23d 16h | 24d ago | 18m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 23.48% | 66.38% | 66.38% | — | — | 2 | 11d 20h | 24d ago | 25m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 33.25% | 33.25% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3h 50m | 4h ago | 18m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 54.86% | 54.86% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 62.27% | 58.10% | 58.10% | — | — | 1 | 12d 6h | 12d ago | 21m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.83% | 24.83% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 29.92% | 29.92% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3h 50m | 4h ago | 17m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.49% | 57.49% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 40.93% | 25.07% | 25.07% | — | — | 1 | 18d 21h | 19d ago | 24m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.57% | 5.57% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 66.15% | 66.15% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 83.72% | 83.72% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.13% | 7.13% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 79.94% | 79.94% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 22.39% | 82.48% | 82.48% | — | — | 1 | 23d 23h | 24d ago | 36m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 43.45% | 34.31% | 34.31% | — | — | 1 | 18d 3h | 18d ago | 24m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 28.48% | 28.48% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 49.04% | 26.94% | 26.94% | — | — | 5 | 3d 3h | 11d ago | 22m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.18% | 53.18% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 18.08% | 56.07% | 56.07% | — | — | 3 | 8d 9h | 25d ago | 24m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 6.54% | 10.69% | 10.69% | — | — | 1 | 28d 7h | 28d ago | 20m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 22.58% | 70.80% | 70.80% | — | — | 1 | 23d 22h | 24d ago | 22m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 77.05% | 77.05% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.97% | 46.97% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 34.20% | 37.49% | 37.49% | — | — | 1 | 20d 19h | 21d ago | 18m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 83.73% | 83.73% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 59.14% | 59.14% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.28% | 39.28% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 39.63% | 84.88% | 84.88% | — | — | 7 | 2d 18h | 19d ago | 23m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 69.13% | 85.69% | 85.69% | — | — | 5 | 1d 23h | 9d ago | 21m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.74% | 31.74% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.58% | 2.58% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 22.32% | 83.95% | 83.95% | — | — | 2 | 11d 23h | 24d ago | 34m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.98% | 41.98% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 83.69% | 83.69% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.27% | 33.27% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 83.62% | 83.62% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 5.31% | 58.82% | 58.82% | — | — | 1 | 28d 14h | 29d ago | 21m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 25.63% | 25.63% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 45.53% | 45.53% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 81.26% | 81.26% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 68.02% | 68.02% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 7.01% | 32.43% | 32.43% | — | — | 1 | 28d 4h | 28d ago | 21m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2h 49m | 3h ago | 19m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 79.72% | 79.72% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 2h 49m | 3h ago | 19m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 53.95% | 53.95% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.28% | 3.28% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3h 20m | 4h ago | 19m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 43.62% | 43.62% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 78.12% | 78.12% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 74.87% | 42.08% | 42.08% | — | — | 17 | 11h 11m | 7d ago | 33m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 59.60% | 59.60% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 22.39% | 50.69% | 50.69% | — | — | 4 | 5d 24h | 24d ago | 20m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 9.03% | 67.04% | 67.04% | — | — | 1 | 27d 15h | 28d ago | 22m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 11.36% | 89.78% | 89.78% | — | — | 1 | 26d 24h | 27d ago | 33m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.58% | 28.58% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.48% | 10.48% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.86% | 12.86% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 27.64% | 27.64% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.35% | 24.35% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 51.79% | 53.50% | 53.50% | — | — | 11 | 1d 10h | 15d ago | 33m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 53.52% | 95.07% | 95.07% | — | — | 16 | 21h 49m | 13d ago | 35m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 58.86% | 58.86% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 70.40% | 83.68% | 83.68% | — | — | 2 | 4d 17h | 9d ago | 22m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 11.72% | 11.72% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.64% | 17.64% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.01% | 50.01% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 26.70% | 30.58% | 30.58% | — | — | 1 | 22d 20h | 23d ago | 19m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 55.73% | 55.73% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 40.07% | 40.07% | — | — | 1 | 3h 20m | 4h ago | 25m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 5.20% | 24.20% | 24.20% | — | — | 3 | 9d 13h | 29d ago | 23m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 38.29% | 38.29% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 51.89% | 51.89% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.60% | 5.60% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 59.28% | 84.19% | 84.19% | — | — | 2 | 6d 15h | 13d ago | 24m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 30.32% | 91.23% | 91.23% | — | — | 1 | 21d 19h | 22d ago | 34m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 78.00% | 81.35% | 81.35% | — | — | 1 | 7d 6h | 7d ago | 17m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 83.82% | 83.82% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 82.73% | 82.73% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 64.52% | 64.52% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 75.76% | 75.76% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 82.58% | 82.58% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.78% | 19.78% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 57.63% | 60.41% | 60.41% | — | — | 1 | 13d 19h | 14d ago | 36m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 57.86% | 45.53% | 45.53% | — | — | 11 | 1d 5h | 13d ago | 22m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.12% | 4.12% | — | — | 2 | 14d 23h | 15d ago | 33m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.50% | 34.50% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.41% | 69.30% | 69.30% | — | — | 4 | 7d 5h | 13d ago | 34m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.74% | 26.77% | 26.77% | — | — | 31 | 19h 28m | 11d ago | 24m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.76% | 7.76% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 66.35% | 66.35% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 37.93% | 41.21% | 41.21% | — | — | 2 | 9d 21h | 20d ago | 18m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 68.31% | 68.31% | — | — | 1 | 29d 23h | 30d ago | 35m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 11.81% | 46.77% | 46.77% | — | — | 1 | 26d 21h | 27d ago | 20m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 6.72% | 6.72% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 45.37% | 66.92% | 66.92% | — | — | 2 | 8d 11h | 13d ago | 19m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 38.03% | 59.32% | 59.32% | — | — | 2 | 9d 20h | 20d ago | 19m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 39.47% | 39.47% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 25.55% | 25.55% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 55.91% | 5.54% | 5.54% | — | — | 5 | 2d 15h | 7d ago | 34m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.76% | 12.76% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.15% | 18.15% | — | — | 1 | 29d 23h | 30d ago | 32m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 19.36% | 19.36% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 6.44% | 39.76% | 39.76% | — | — | 1 | 28d 7h | 28d ago | 19m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 21.52% | 10.33% | 10.33% | — | — | 204 | 2h 29m | 18d ago | 25m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 3.46% | 11.64% | 11.64% | — | — | 5 | 5d 19h | 29d ago | 18m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.04% | 1.04% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.87% | 5.87% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.90% | 6.90% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.45% | 50.45% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 32.55% | 56.58% | 56.58% | — | — | 2 | 10d 14h | 21d ago | 19m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 83.79% | 83.79% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 52.55% | 80.67% | 80.67% | — | — | 1 | 15d 11h | 15d ago | 21m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 50.18% | 50.18% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 83.97% | 83.97% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 15.31% | 61.06% | 61.06% | — | — | 2 | 12d 23h | 26d ago | 21m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 31m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.83% | 41.83% | — | — | 1 | 29d 23h | 30d ago | 34m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.43% | 2.43% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 37.15% | 20.17% | 20.17% | — | — | 1 | 19d 23h | 20d ago | 25m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 3h 20m | 4h ago | 19m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 81.67% | 81.67% | — | — | 1 | 29d 23h | 30d ago | 27m ago |

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
