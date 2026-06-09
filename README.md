# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**645 providers** — 339 🟢 operational · 58 🟡 degraded · 248 🔴 down · 0 ⚫ unknown

_Updated 2026-06-09 06:53 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (339)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.89% | 97.89% | 97.89% | 487 ms | ↓ 0.81x | 2 | 0s | 12d ago | 16m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1710 ms | → 1.00x | 0 | — | — | 13m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.94% | 19.09% | 19.09% | 1792 ms | → 1.05x | 1 | 0s | 11d ago | 21m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.39% | 97.39% | 2550 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.94% | 53.19% | 53.19% | 2005 ms | ↑ 1.16x | 1 | 0s | 28d ago | 19m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.84% | 97.81% | 97.81% | 2772 ms | → 1.00x | 3 | 0s | 12d ago | 27m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1734 ms | ↑ 1.23x | 0 | — | — | 13m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 97.96% | 98.62% | 98.62% | 1328 ms | ↑ 1.06x | 6 | 1h 46m | 8d ago | 20m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.79% | 98.79% | 1683 ms | → 1.04x | 0 | — | — | 32m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.42% | 99.42% | 3321 ms | → 0.97x | 1 | 0s | 19d ago | 32m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.12% | 99.12% | 2565 ms | ↑ 1.45x | 1 | 19m | 21d ago | 15m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.70% | 94.70% | 2207 ms | ↑ 1.14x | 0 | — | — | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1840 ms | ↑ 1.39x | 0 | — | — | 14m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.23% | 97.47% | 97.47% | 2262 ms | ↑ 1.16x | 1 | 4h 31m | 26d ago | 16m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.23% | 92.23% | 2811 ms | ↑ 1.29x | 0 | — | — | 33m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.96% | 99.96% | 1761 ms | ↑ 1.36x | 1 | 0s | 26d ago | 14m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.94% | 99.85% | 99.85% | 1226 ms | ↑ 1.42x | 1 | 0s | 25d ago | 16m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 760 ms | ↑ 1.17x | 0 | — | — | 13m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.51% | 98.51% | 924 ms | → 1.01x | 0 | — | — | 16m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.94% | 97.08% | 97.08% | 1398 ms | → 1.01x | 1 | 0s | 25d ago | 16m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.69% | 98.69% | 1965 ms | ↑ 1.95x | 0 | — | — | 15m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 35.86% | 35.86% | 598 ms | → 1.03x | 0 | — | — | 27m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 726 ms | → 1.00x | 0 | — | — | 13m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.78% | 96.78% | 2337 ms | ↑ 1.10x | 1 | 0s | 14d ago | 19m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 480 ms | → 1.02x | 1 | 0s | 18d ago | 14m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.52% | 96.52% | 496 ms | → 1.03x | 0 | — | — | 18m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.23% | 86.38% | 86.38% | 823 ms | ↑ 1.15x | 4 | 1h 3m | 11d ago | 17m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1691 ms | ↑ 1.07x | 1 | 0s | 18d ago | 14m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.83% | 99.87% | 99.87% | 2876 ms | ↑ 1.53x | 3 | 0s | 14d ago | 14m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.23% | 98.23% | 2746 ms | ↑ 1.11x | 1 | 60m | 19d ago | 17m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.92% | 97.92% | 183 ms | ↑ 1.09x | 0 | — | — | 16m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.78% | 78.80% | 78.80% | 2040 ms | ↑ 1.06x | 4 | 0s | 8d ago | 27m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.78% | 99.70% | 99.70% | 1350 ms | ↑ 1.26x | 4 | 0s | 12d ago | 15m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 84.39% | 84.39% | 1228 ms | ↑ 1.18x | 0 | — | — | 16m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.96% | 99.96% | 959 ms | → 0.99x | 1 | 0s | 18d ago | 14m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.45% | 81.19% | 81.19% | 1709 ms | → 1.04x | 3 | 50m | 22d ago | 20m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.56% | 97.56% | 1200 ms | ↑ 1.27x | 0 | — | — | 19m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 479 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.74% | 99.74% | 3144 ms | ↑ 1.09x | 0 | — | — | 28m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.95% | 98.95% | 287 ms | ↑ 1.33x | 0 | — | — | 18m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.40% | 97.83% | 97.83% | 3495 ms | → 1.05x | 11 | 0s | 15d ago | 31m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.82% | 99.82% | 1839 ms | → 0.99x | 0 | — | — | 18m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.05% | 96.05% | 972 ms | ↓ 0.83x | 0 | — | — | 18m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.87% | 99.87% | 2643 ms | ↑ 1.57x | 3 | 0s | 18d ago | 14m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 97.67% | 98.50% | 98.50% | 774 ms | ↑ 1.37x | 7 | 2h 8m | 8d ago | 15m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2223 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.72% | 99.72% | 99.72% | 1536 ms | ↑ 1.39x | 1 | 51m | 9d ago | 13m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 88.75% | 88.75% | 2605 ms | → 1.00x | 0 | — | — | 15m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.95% | 99.84% | 99.84% | 3054 ms | ↓ 0.85x | 1 | 0s | 15d ago | 27m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.89% | 99.68% | 99.68% | 964 ms | ↓ 0.65x | 2 | 0s | 8d ago | 16m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 204 ms | → 1.00x | 0 | — | — | 13m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 28.39% | 28.39% | 1162 ms | ↑ 1.08x | 0 | — | — | 28m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 99.06% | 98.63% | 98.63% | 1774 ms | ↑ 1.05x | 8 | 30m | 13d ago | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.40% | 95.76% | 95.76% | 1718 ms | → 1.02x | 3 | 5h 26m | 14d ago | 16m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 935 ms | ↓ 0.63x | 1 | 0s | 18d ago | 14m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 712 ms | → 1.00x | 0 | — | — | 13m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2443 ms | → 1.00x | 0 | — | — | 15m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1463 ms | ↓ 0.85x | 0 | — | — | 14m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 96.04% | 97.43% | 97.43% | 1695 ms | ↑ 1.07x | 4 | 5h 57m | 23d ago | 21m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.52% | 96.52% | 827 ms | → 1.01x | 0 | — | — | 19m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.67% | 53.67% | 918 ms | → 1.04x | 0 | — | — | 21m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 974 ms | → 1.00x | 0 | — | — | 13m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 804 ms | ↓ 0.68x | 1 | 0s | 18d ago | 14m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3216 ms | ↑ 1.05x | 0 | — | — | 27m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.08% | 97.08% | 1496 ms | ↑ 1.17x | 0 | — | — | 27m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.09% | 98.09% | 98.09% | 492 ms | ↑ 1.05x | 2 | 2h 41m | 10d ago | 13m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.89% | 99.07% | 99.07% | 1309 ms | ↑ 1.10x | 2 | 0s | 8d ago | 19m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.10% | 46.62% | 46.62% | 1942 ms | → 0.97x | 9 | 1h 42m | 20d ago | 28m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.78% | 99.06% | 99.06% | 2218 ms | ↑ 1.56x | 1 | 1h 28m | 17d ago | 15m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.69% | 82.69% | 1963 ms | ↑ 1.07x | 0 | — | — | 20m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 65.37% | 65.37% | 1499 ms | → 0.99x | 2 | 0s | 7d ago | 20m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1204 ms | ↓ 0.81x | 0 | — | — | 14m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.59% | 98.59% | 2027 ms | ↑ 1.09x | 0 | — | — | 17m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 3388 ms | → 0.98x | 1 | 0s | 18d ago | 13m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.69% | 92.69% | 941 ms | ↑ 1.06x | 1 | 0s | 15d ago | 20m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.53% | 98.53% | 1054 ms | ↑ 1.32x | 0 | — | — | 16m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.23% | 99.23% | 2098 ms | ↓ 0.68x | 0 | — | — | 15m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.79% | 97.79% | 3053 ms | → 0.98x | 2 | 0s | 14d ago | 18m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.94% | 75.47% | 75.47% | 721 ms | → 1.00x | 1 | 0s | 26d ago | 20m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.11% | 95.16% | 95.16% | 923 ms | ↑ 1.26x | 4 | 1h 17m | 24d ago | 14m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 53.91% | 53.91% | 1562 ms | ↑ 1.12x | 1 | 0s | 18d ago | 28m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 967 ms | ↓ 0.89x | 0 | — | — | 14m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.10% | 98.10% | 2018 ms | → 0.96x | 0 | — | — | 19m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1196 ms | → 1.03x | 1 | 0s | 18d ago | 14m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.94% | 61.12% | 61.12% | 953 ms | → 1.03x | 1 | 0s | 12d ago | 20m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 97.98% | 97.98% | 949 ms | → 1.05x | 1 | 0s | 24d ago | 21m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.89% | 99.83% | 99.83% | 1579 ms | → 1.04x | 2 | 0s | 18d ago | 14m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.89% | 59.25% | 59.25% | 1780 ms | ↑ 1.06x | 2 | 0s | 21d ago | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.46% | 62.46% | 1173 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1887 ms | ↓ 0.69x | 0 | — | — | 15m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.19% | 99.19% | 1444 ms | ↓ 0.93x | 0 | — | — | 20m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.94% | 89.78% | 89.78% | 1988 ms | → 1.03x | 1 | 0s | 27d ago | 20m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.80% | 99.80% | 2625 ms | → 0.99x | 0 | — | — | 18m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.89% | 99.57% | 99.57% | 981 ms | → 1.04x | 2 | 0s | 10d ago | 20m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.73% | 99.73% | 2035 ms | → 1.03x | 3 | 0s | 20d ago | 31m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2129 ms | ↑ 1.22x | 0 | — | — | 13m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.02% | 99.02% | 3189 ms | ↑ 1.09x | 1 | 29m | 15d ago | 31m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.84% | 99.84% | 99.84% | 3087 ms | → 1.04x | 3 | 0s | 9d ago | 32m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.12% | 98.12% | 2951 ms | → 1.03x | 0 | — | — | 32m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.51% | 99.90% | 99.90% | 805 ms | ↑ 1.08x | 4 | 29m | 7d ago | 28m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 73.79% | 73.79% | 1820 ms | ↓ 0.87x | 0 | — | — | 19m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.23% | 97.85% | 97.85% | 627 ms | ↑ 1.12x | 3 | 5h 59m | 17d ago | 14m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1225 ms | ↑ 1.07x | 0 | — | — | 32m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 2967 ms | → 1.01x | 2 | 0s | 13d ago | 32m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.95% | 99.63% | 99.63% | 1699 ms | ↑ 1.07x | 1 | 0s | 21d ago | 30m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.05% | 89.05% | 1620 ms | ↓ 0.48x | 0 | — | — | 20m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 77.39% | 77.39% | 1966 ms | → 0.95x | 0 | — | — | 18m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.95% | 99.76% | 99.76% | 741 ms | ↑ 1.24x | 1 | 0s | 12d ago | 31m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 461 ms | → 1.00x | 0 | — | — | 14m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 847 ms | ↓ 0.66x | 0 | — | — | 14m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.02% | 83.02% | 2059 ms | ↑ 1.16x | 0 | — | — | 16m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1465 ms | → 1.01x | 0 | — | — | 14m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1459 ms | ↑ 1.25x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.02% | 99.02% | 471 ms | → 1.03x | 0 | — | — | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.15% | 97.15% | 728 ms | → 1.04x | 0 | — | — | 16m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 954 ms | → 1.00x | 1 | 0s | 18d ago | 14m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.96% | 99.96% | 569 ms | ↓ 0.73x | 1 | 0s | 18d ago | 14m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1580 ms | → 1.02x | 0 | — | — | 14m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.73% | 87.09% | 87.09% | 1565 ms | → 1.04x | 5 | 0s | 17d ago | 31m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.56% | 99.56% | 99.56% | 1878 ms | ↓ 0.72x | 8 | 0s | 9d ago | 14m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.67% | 97.58% | 97.58% | 1653 ms | → 0.97x | 6 | 0s | 9d ago | 16m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.79% | 98.79% | 193 ms | ↑ 1.08x | 0 | — | — | 18m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.96% | 98.96% | 791 ms | → 1.03x | 0 | — | — | 23m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 66.43% | 66.43% | 310 ms | → 1.00x | 0 | — | — | 15m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.23% | 97.04% | 97.04% | 804 ms | ↓ 0.78x | 27 | 21m | 18d ago | 14m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.54% | 99.54% | 99.54% | 678 ms | ↑ 1.08x | 1 | 1h | 9d ago | 13m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.86% | 99.86% | 1302 ms | ↑ 1.21x | 2 | 11m | 10d ago | 13m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 21.15% | 21.15% | 1277 ms | ↑ 1.23x | 0 | — | — | 21m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 842 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.84% | 99.84% | 2365 ms | ↑ 1.33x | 1 | 0s | 23d ago | 32m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 715 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.30% | 79.92% | 79.92% | 140 ms | → 1.02x | 3 | 9h 30m | 11d ago | 32m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.85% | 97.85% | 1041 ms | → 1.02x | 0 | — | — | 16m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2711 ms | → 1.04x | 2 | 0s | 17d ago | 31m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.00% | 98.00% | 1819 ms | ↓ 0.59x | 0 | — | — | 19m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.96% | 17.27% | 17.27% | 2884 ms | ↑ 1.10x | 7 | 1h 40m | 10d ago | 21m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 627 ms | ↑ 1.19x | 2 | 25m | 24d ago | 32m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1690 ms | ↓ 0.72x | 0 | — | — | 14m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.70% | 98.70% | 4503 ms | → 1.03x | 0 | — | — | 33m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2935 ms | → 1.03x | 0 | — | — | 31m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1704 ms | ↑ 1.29x | 0 | — | — | 14m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2412 ms | → 1.03x | 0 | — | — | 27m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 40.42% | 40.42% | 799 ms | → 1.04x | 0 | — | — | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.45% | 98.45% | 3912 ms | → 1.02x | 0 | — | — | 19m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1100 ms | → 1.04x | 1 | 0s | 26d ago | 31m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.73% | 99.44% | 99.44% | 2723 ms | → 0.96x | 5 | 0s | 12d ago | 27m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.62% | 99.84% | 99.84% | 161 ms | ↑ 1.13x | 5 | 12m | 15d ago | 31m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 98.64% | 16.52% | 16.52% | 762 ms | → 1.00x | 15 | 13m | 20d ago | 31m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.35% | 99.26% | 99.26% | 755 ms | → 1.00x | 6 | 20m | 12d ago | 32m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1987 ms | → 0.98x | 0 | — | — | 20m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.85% | 99.85% | 1669 ms | ↓ 0.88x | 1 | 0s | 12d ago | 31m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.63% | 99.63% | 1816 ms | ↑ 1.06x | 0 | — | — | 16m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 521 ms | → 1.00x | 0 | — | — | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 653 ms | ↓ 0.93x | 0 | — | — | 31m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.02% | 95.71% | 95.71% | 2520 ms | ↑ 1.07x | 4 | 4h 46m | 13d ago | 19m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 59.98% | 59.98% | 1627 ms | → 1.04x | 1 | 0s | 24d ago | 20m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2402 ms | ↑ 1.08x | 0 | — | — | 31m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.67% | 98.84% | 98.84% | 2005 ms | ↑ 1.48x | 3 | 2h 19m | 12d ago | 15m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 88.97% | 88.97% | 1218 ms | ↑ 1.06x | 1 | 0s | 19d ago | 30m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 90.80% | 83.95% | 83.95% | 1306 ms | ↓ 0.84x | 1 | 2d 9h | 30d ago | 14m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.78% | 99.90% | 99.90% | 885 ms | ↑ 1.05x | 2 | 25m | 24d ago | 30m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1290 ms | ↑ 1.11x | 0 | — | — | 31m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.65% | 99.65% | 833 ms | → 1.00x | 3 | 7m | 14d ago | 30m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 40.94% | 40.94% | 200 ms | ↑ 1.05x | 1 | 0s | 23d ago | 19m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 929 ms | → 1.01x | 0 | — | — | 31m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 712 ms | ↓ 0.64x | 1 | 0s | 18d ago | 14m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 794 ms | → 1.02x | 1 | 0s | 12d ago | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.02% | 99.02% | 2495 ms | ↑ 1.14x | 0 | — | — | 30m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.34% | 98.34% | 1403 ms | ↑ 1.19x | 0 | — | — | 16m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.02% | 98.02% | 1566 ms | → 0.99x | 0 | — | — | 16m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.50% | 96.17% | 96.17% | 773 ms | ↑ 1.54x | 3 | 51m | 8d ago | 16m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.95% | 17.39% | 17.39% | 2194 ms | ↑ 1.08x | 1 | 0s | 12d ago | 31m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.83% | 68.83% | 832 ms | ↓ 0.95x | 0 | — | — | 20m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 100.00% | 100.00% | 100.00% | 100.00% | 437 ms | → 1.00x | 0 | — | — | 14m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1236 ms | ↑ 1.08x | 0 | — | — | 13m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.83% | 80.12% | 80.12% | 1584 ms | → 1.03x | 1 | 51m | 18d ago | 20m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1559 ms | ↑ 1.08x | 0 | — | — | 30m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1668 ms | ↓ 0.88x | 0 | — | — | 31m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.95% | 99.95% | 2120 ms | → 0.97x | 1 | 0s | 18d ago | 14m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.15% | 85.15% | 243 ms | ↓ 0.90x | 0 | — | — | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.94% | 90.45% | 90.45% | 271 ms | ↓ 0.85x | 1 | 0s | 25d ago | 18m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.27% | 99.27% | 1891 ms | ↓ 0.92x | 0 | — | — | 20m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 66.51% | 66.51% | 1459 ms | ↑ 2.43x | 1 | 0s | 11d ago | 20m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.59% | 96.59% | 1540 ms | ↑ 1.13x | 0 | — | — | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.78% | 99.83% | 99.83% | 925 ms | ↓ 0.62x | 4 | 0s | 12d ago | 14m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2525 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 95.90% | 96.73% | 96.73% | 1549 ms | ↓ 0.73x | 2 | 13h 54m | 11d ago | 14m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1561 ms | → 1.00x | 0 | — | — | 15m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3334 ms | → 1.00x | 0 | — | — | 14m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.14% | 57.14% | 662 ms | ↑ 1.07x | 0 | — | — | 20m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.45% | 98.38% | 98.38% | 1474 ms | ↑ 1.10x | 1 | 4h 17m | 18d ago | 19m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.89% | 98.29% | 98.29% | 1495 ms | ↓ 0.95x | 2 | 0s | 14d ago | 18m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 38.32% | 38.32% | 2211 ms | ↑ 1.05x | 1 | 0s | 17d ago | 20m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.84% | 99.21% | 99.21% | 3412 ms | ↑ 1.06x | 3 | 0s | 11d ago | 27m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2534 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 1916 ms | → 1.02x | 1 | 30m | 17d ago | 19m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.22% | 99.22% | 2005 ms | → 1.03x | 0 | — | — | 20m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.92% | 78.92% | 1431 ms | → 1.02x | 0 | — | — | 20m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 187 ms | → 1.01x | 1 | 0s | 12d ago | 31m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 543 ms | → 1.02x | 0 | — | — | 13m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1876 ms | ↑ 1.15x | 0 | — | — | 30m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2747 ms | ↑ 1.88x | 1 | 0s | 18d ago | 14m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1819 ms | → 1.02x | 0 | — | — | 27m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 3194 ms | → 1.01x | 1 | 0s | 20d ago | 31m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.83% | 79.29% | 79.29% | 1664 ms | ↑ 1.07x | 3 | 0s | 14d ago | 20m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.06% | 86.06% | 1941 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.91% | 99.91% | 940 ms | → 0.97x | 2 | 0s | 18d ago | 14m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.04% | 96.04% | 963 ms | ↑ 1.06x | 0 | — | — | 21m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 911 ms | → 1.03x | 0 | — | — | 30m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.50% | 98.50% | 464 ms | → 0.99x | 0 | — | — | 18m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 20.50% | 20.50% | 263 ms | ↓ 0.51x | 0 | — | — | 21m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.56% | 97.13% | 97.13% | 1924 ms | → 1.03x | 5 | 16m | 15d ago | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 816 ms | → 1.05x | 0 | — | — | 18m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.78% | 18.17% | 18.17% | 1093 ms | ↓ 0.89x | 4 | 0s | 12d ago | 21m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.34% | 60.34% | 2039 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 40.59% | 23.85% | 23.85% | 548 ms | ↓ 0.44x | 1 | 16d 22h | 30d ago | 31m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 81.58% | 91.82% | 91.82% | 30 ms | ↓ 0.95x | 1 | 4d 19h | 30d ago | 16m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.65% | 98.86% | 98.86% | 845 ms | ↑ 1.08x | 2 | 6h 50m | 9d ago | 30m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 17.38% | 17.38% | 932 ms | ↑ 1.07x | 0 | — | — | 30m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2114 ms | ↑ 1.75x | 0 | — | — | 15m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.47% | 99.47% | 1579 ms | ↑ 1.25x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 2321 ms | ↑ 1.24x | 0 | — | — | 15m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1428 ms | ↓ 0.84x | 0 | — | — | 14m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.31% | 93.31% | 4576 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.67% | 99.50% | 99.50% | 1245 ms | ↓ 0.72x | 2 | 40m | 10d ago | 30m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.38% | 99.38% | 1732 ms | ↑ 1.45x | 0 | — | — | 15m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.18% | 99.18% | 857 ms | ↓ 0.83x | 0 | — | — | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.87% | 99.87% | 1631 ms | → 1.01x | 1 | 0s | 18d ago | 14m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.57% | 99.57% | 1580 ms | → 1.03x | 1 | 0s | 20d ago | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.45% | 99.45% | 988 ms | → 1.05x | 0 | — | — | 30m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 544 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.89% | 61.14% | 61.14% | 2485 ms | ↓ 0.92x | 2 | 0s | 12d ago | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.61% | 98.61% | 2650 ms | ↑ 1.19x | 0 | — | — | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.65% | 96.65% | 2572 ms | → 1.04x | 0 | — | — | 31m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4126 ms | ↑ 1.50x | 0 | — | — | 13m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.52% | 99.52% | 2488 ms | ↑ 1.49x | 2 | 0s | 17d ago | 15m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.78% | 99.78% | 769 ms | ↑ 1.24x | 1 | 20m | 11d ago | 16m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.96% | 87.96% | 1672 ms | ↑ 1.15x | 0 | — | — | 19m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.81% | 99.81% | 1016 ms | ↑ 1.12x | 0 | — | — | 16m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1655 ms | → 1.00x | 0 | — | — | 15m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1401 ms | → 1.01x | 0 | — | — | 31m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.49% | 99.49% | 1212 ms | ↑ 1.11x | 0 | — | — | 32m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1073 ms | ↑ 1.12x | 0 | — | — | 32m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 72.85% | 72.85% | 1143 ms | → 1.01x | 1 | 0s | 18d ago | 19m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2894 ms | ↑ 1.08x | 1 | 0s | 14d ago | 28m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 831 ms | → 1.03x | 0 | — | — | 29m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.95% | 84.23% | 84.23% | 2051 ms | ↑ 1.07x | 1 | 0s | 8d ago | 27m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 97.91% | 97.91% | 1795 ms | ↑ 1.19x | 3 | 0s | 11d ago | 16m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.95% | 99.95% | 1129 ms | ↑ 1.51x | 0 | — | — | 14m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1333 ms | → 1.00x | 0 | — | — | 15m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.77% | 98.77% | 556 ms | → 1.02x | 0 | — | — | 20m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.34% | 98.70% | 98.70% | 1846 ms | ↓ 0.83x | 1 | 3h 60m | 30d ago | 29m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 89.88% | 96.91% | 96.91% | 2637 ms | ↓ 0.41x | 3 | 1d | 17d ago | 17m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.34% | 99.49% | 99.49% | 1640 ms | → 0.99x | 3 | 1h 3m | 15d ago | 14m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.76% | 97.76% | 3500 ms | ↑ 1.30x | 1 | 0s | 20d ago | 17m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 443 ms | ↓ 0.88x | 1 | 0s | 18d ago | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.34% | 98.58% | 98.58% | 633 ms | ↑ 1.17x | 5 | 28m | 10d ago | 19m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 597 ms | → 1.00x | 0 | — | — | 13m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 94.64% | 94.64% | 94.64% | 1518 ms | → 1.01x | 1 | 13h 12m | 11d ago | 13m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 28.01% | 28.01% | 943 ms | ↑ 1.16x | 1 | 0s | 22d ago | 29m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.79% | 99.79% | 701 ms | → 1.00x | 1 | 0s | 16d ago | 19m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.25% | 98.25% | 1749 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1120 ms | → 1.00x | 0 | — | — | 29m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.06% | 88.06% | 2437 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.50% | 96.50% | 1767 ms | → 1.02x | 0 | — | — | 21m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.87% | 99.87% | 1464 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 17.38% | 17.38% | 1960 ms | → 1.05x | 1 | 0s | 29d ago | 31m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | ↓ 0.76x | 0 | — | — | 14m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.80% | 96.80% | 1637 ms | ↑ 1.20x | 0 | — | — | 16m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.85% | 99.85% | 1920 ms | → 1.00x | 1 | 0s | 14d ago | 29m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 19.30% | 19.30% | 1871 ms | → 1.03x | 0 | — | — | 21m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 17.21% | 17.21% | 1518 ms | ↑ 1.11x | 0 | — | — | 21m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.17% | 96.43% | 96.43% | 1496 ms | → 1.02x | 4 | 2h 27m | 9d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.67% | 99.74% | 99.74% | 2479 ms | → 0.98x | 1 | 2h 18m | 17d ago | 18m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1756 ms | ↑ 1.09x | 0 | — | — | 31m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.05% | 99.65% | 99.65% | 2003 ms | ↓ 0.93x | 6 | 2h 50m | 22d ago | 29m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1936 ms | ↓ 0.94x | 0 | — | — | 29m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.47% | 98.47% | 1334 ms | ↑ 1.35x | 0 | — | — | 16m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 2234 ms | ↑ 1.06x | 1 | 0s | 8d ago | 21m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.83% | 46.16% | 46.16% | 1138 ms | → 0.97x | 3 | 0s | 16d ago | 18m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 334 ms | → 0.98x | 0 | — | — | 30m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.56% | 95.95% | 95.95% | 2987 ms | → 1.01x | 8 | 0s | 5d ago | 32m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.75% | 99.84% | 85.08% | 85.08% | 2257 ms | ↑ 1.11x | 3 | 0s | 3d ago | 31m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.75% | 99.29% | 99.43% | 99.43% | 2682 ms | → 1.01x | 6 | 32m | 7d ago | 32m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 39.47% | 39.47% | 1294 ms | → 0.96x | 2 | 0s | 4d ago | 31m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.89% | 22.82% | 22.82% | 2381 ms | ↑ 1.12x | 2 | 0s | 6d ago | 33m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.75% | 99.95% | 92.05% | 92.05% | 3761 ms | ↑ 1.08x | 1 | 0s | 6d ago | 33m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.74% | 99.89% | 99.33% | 99.33% | 1524 ms | → 0.97x | 2 | 0s | 9h ago | 21m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.74% | 99.89% | 54.43% | 54.43% | 3481 ms | → 1.03x | 2 | 0s | 3d ago | 23m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.74% | 99.89% | 99.86% | 99.86% | 1045 ms | ↑ 1.09x | 2 | 0s | 1h ago | 23m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.74% | 99.95% | 99.80% | 99.80% | 2718 ms | ↑ 1.06x | 1 | 0s | 7d ago | 31m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.74% | 99.95% | 99.93% | 99.93% | 816 ms | ↑ 1.14x | 1 | 0s | 6d ago | 31m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.74% | 99.95% | 99.11% | 99.11% | 1191 ms | → 0.98x | 1 | 0s | 6d ago | 31m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.74% | 99.94% | 46.27% | 46.27% | 920 ms | → 1.05x | 1 | 0s | 2h ago | 21m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.74% | 99.95% | 17.40% | 17.40% | 564 ms | ↓ 0.52x | 1 | 0s | 5d ago | 28m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.74% | 99.95% | 17.30% | 17.30% | 2621 ms | → 1.05x | 1 | 0s | 4d ago | 27m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.74% | 99.95% | 19.13% | 19.13% | 987 ms | → 1.03x | 1 | 0s | 5d ago | 28m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.74% | 99.84% | 99.80% | 99.80% | 1825 ms | → 1.01x | 3 | 0s | 6d ago | 27m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.74% | 99.83% | 99.83% | 99.83% | 320 ms | ↑ 1.28x | 3 | 0s | 6d ago | 18m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.74% | 99.89% | 81.49% | 81.49% | 1579 ms | ↑ 1.07x | 2 | 0s | 20h ago | 20m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.74% | 99.78% | 99.80% | 99.80% | 1445 ms | → 1.01x | 3 | 10m | 3d ago | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.74% | 99.94% | 89.97% | 89.97% | 935 ms | → 0.97x | 1 | 0s | 4d ago | 20m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.74% | 99.72% | 92.21% | 92.21% | 1508 ms | ↑ 1.09x | 5 | 0s | 7d ago | 19m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.74% | 99.94% | 49.48% | 49.48% | 623 ms | ↑ 1.14x | 1 | 0s | 5d ago | 18m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.74% | 99.94% | 99.97% | 99.97% | 1986 ms | → 1.03x | 1 | 0s | 4d ago | 20m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.74% | 99.89% | 99.86% | 99.86% | 1101 ms | ↑ 1.11x | 2 | 0s | 3d ago | 16m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.74% | 75.00% | 88.28% | 88.28% | 1012 ms | ↑ 1.15x | 2 | 3d 18h | 2d ago | 16m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.74% | 99.50% | 99.76% | 99.76% | 3086 ms | ↑ 1.16x | 5 | 24m | 6d ago | 17m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 97.78% | 98.75% | 98.75% | 2910 ms | ↑ 1.06x | 3 | 4h 28m | 3d ago | 14m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.74% | 99.56% | 99.60% | 99.60% | 2684 ms | → 1.00x | 6 | 8m | 7d ago | 14m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.74% | 99.94% | 94.12% | 94.12% | 3015 ms | ↑ 1.40x | 1 | 0s | 2d ago | 15m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.85% | 99.85% | 99.85% | 2508 ms | → 1.05x | 1 | 0s | 3d ago | 13m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.74% | 99.94% | 97.26% | 97.26% | 2356 ms | ↑ 1.30x | 1 | 0s | 2d ago | 15m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.74% | 99.78% | 98.85% | 98.85% | 1719 ms | ↑ 1.22x | 4 | 0s | 2d ago | 15m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.87% | 99.91% | 99.91% | 2614 ms | ↑ 2.56x | 2 | 0s | 3d ago | 14m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.74% | 99.94% | 97.21% | 97.21% | 1196 ms | ↑ 1.59x | 1 | 0s | 3d ago | 15m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.67% | 99.67% | 99.67% | 99.67% | 1442 ms | → 1.00x | 1 | 0s | 3d ago | 13m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.65% | 99.65% | 99.65% | 99.65% | 568 ms | → 1.00x | 1 | 0s | 22h ago | 14m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.65% | 99.65% | 99.65% | 99.65% | 1456 ms | → 1.00x | 1 | 0s | 3d ago | 13m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.49% | 99.84% | 98.84% | 98.84% | 909 ms | ↑ 1.13x | 2 | 15m | 4h ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.49% | 98.69% | 99.14% | 99.14% | 3609 ms | ↑ 1.11x | 11 | 26m | 6d ago | 29m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.49% | 69.07% | 33.35% | 33.35% | 2458 ms | → 0.98x | 76 | 2h 17m | 3d ago | 31m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.49% | 97.75% | 15.57% | 15.57% | 2585 ms | → 1.00x | 12 | 54m | 9h ago | 27m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.49% | 99.17% | 97.42% | 97.42% | 2064 ms | ↑ 1.06x | 10 | 12m | 3d ago | 19m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.49% | 99.89% | 98.05% | 98.05% | 1861 ms | → 0.96x | 1 | 30m | 7d ago | 20m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.48% | 99.83% | 99.79% | 99.79% | 485 ms | → 1.00x | 3 | 0s | 12h ago | 14m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.48% | 99.83% | 97.21% | 97.21% | 2687 ms | ↑ 2.94x | 3 | 0s | 2d ago | 15m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.23% | 98.63% | 98.97% | 98.97% | 3470 ms | ↑ 1.06x | 12 | 24m | 6d ago | 29m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.23% | 98.36% | 85.43% | 85.43% | 4453 ms | → 1.00x | 28 | 2m | 3h ago | 29m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.23% | 93.81% | 67.87% | 67.87% | 4318 ms | → 1.00x | 42 | 35m | 4d ago | 28m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.23% | 99.83% | 93.50% | 93.50% | 677 ms | → 1.00x | 3 | 0s | 3d ago | 20m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.23% | 98.73% | 90.80% | 90.80% | 3516 ms | → 0.96x | 23 | 0s | 16h ago | 18m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.23% | 99.78% | 99.85% | 99.85% | 538 ms | ↓ 0.95x | 3 | 7m | 9h ago | 16m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.22% | 91.91% | 91.91% | 91.91% | 1409 ms | ↑ 1.24x | 55 | 20m | 9h ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.22% | 75.96% | 80.80% | 80.80% | 2859 ms | → 0.99x | 13 | 12h 55m | 17h ago | 14m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.22% | 98.67% | 98.72% | 98.72% | 1866 ms | ↑ 1.21x | 22 | 2m | 2d ago | 14m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.22% | 99.11% | 99.29% | 99.29% | 1648 ms | ↑ 1.30x | 5 | 50m | 3d ago | 14m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.22% | 99.00% | 99.07% | 99.07% | 1504 ms | ↑ 1.45x | 11 | 17m | 4d ago | 14m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.22% | 99.78% | 99.83% | 99.83% | 1026 ms | ↑ 2.58x | 2 | 30m | 6d ago | 14m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (58)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.98% | 98.64% | 98.28% | 98.28% | 4588 ms | → 1.00x | 24 | 0s | 2d ago | 33m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.98% | 99.62% | 98.84% | 98.84% | 2546 ms | → 1.03x | 6 | 3m | 3d ago | 32m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.98% | 97.21% | 16.85% | 16.85% | 2179 ms | ↑ 1.08x | 49 | 49s | 12h ago | 29m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.98% | 99.01% | 85.98% | 85.98% | 4232 ms | ↓ 0.94x | 18 | 0s | 4d ago | 21m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.97% | 99.67% | 66.82% | 66.82% | 647 ms | ↓ 0.89x | 4 | 15m | 1d ago | 20m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.97% | 98.51% | 96.69% | 96.69% | 2057 ms | ↓ 0.68x | 5 | 2h | 1d ago | 16m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.72% | 99.73% | 99.68% | 99.68% | 1407 ms | → 1.04x | 4 | 8m | 3d ago | 23m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.72% | 99.45% | 71.46% | 71.46% | 1215 ms | → 1.03x | 9 | 3m | 3d ago | 20m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.72% | 98.84% | 65.50% | 65.50% | 4754 ms | → 1.02x | 19 | 3m | 17h ago | 20m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.72% | 99.45% | 90.96% | 90.96% | 1466 ms | ↓ 0.94x | 10 | 0s | 2d ago | 20m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.71% | 99.00% | 98.32% | 98.32% | 3352 ms | ↑ 1.26x | 6 | 46m | 4h ago | 15m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.71% | 98.28% | 95.50% | 95.50% | 1763 ms | ↑ 1.41x | 8 | 1h 7m | 2h ago | 15m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.71% | 99.40% | 99.40% | 99.40% | 2372 ms | ↑ 1.24x | 3 | 20m | 5h ago | 13m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.58% | 98.58% | 98.58% | 98.58% | 1117 ms | → 1.00x | 1 | 1h 30m | 2d ago | 14m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.47% | 99.61% | 19.20% | 19.20% | 1599 ms | → 1.00x | 3 | 40m | 1d ago | 21m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.47% | 98.36% | 16.85% | 16.85% | 3520 ms | → 1.00x | 30 | 0s | 2d ago | 27m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.47% | 99.61% | 51.38% | 51.38% | 1147 ms | → 1.00x | 3 | 40m | 1d ago | 21m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.47% | 99.07% | 99.66% | 99.66% | 3015 ms | → 1.02x | 11 | 14m | 1d ago | 27m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.46% | 99.61% | 98.87% | 98.87% | 2703 ms | ↑ 1.08x | 4 | 22m | 1d ago | 19m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.46% | 99.67% | 98.80% | 98.80% | 1537 ms | → 0.98x | 3 | 20m | 22h ago | 19m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.46% | 98.23% | 85.38% | 85.38% | 4766 ms | → 1.01x | 31 | 1m | 21h ago | 19m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.45% | 99.50% | 99.61% | 99.61% | 2761 ms | → 1.00x | 5 | 24m | 1d ago | 14m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.93% | 98.84% | 99.10% | 99.10% | 800 ms | → 0.96x | 21 | 0s | 1d ago | 14m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.93% | 99.50% | 98.59% | 98.59% | 2551 ms | ↑ 1.41x | 4 | 37m | 4d ago | 14m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.70% | 97.75% | 73.90% | 73.90% | 4577 ms | → 1.02x | 34 | 4m | 18h ago | 28m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.54% | 97.54% | 76.86% | 76.86% | 1979 ms | → 1.00x | 1 | 2h 11m | 2d ago | 15m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.46% | 98.20% | 85.10% | 85.10% | 3529 ms | ↑ 1.09x | 33 | 0s | 4h ago | 33m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.44% | 96.30% | 81.89% | 81.89% | 4799 ms | → 1.03x | 62 | 2m | 2d ago | 19m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.42% | 99.45% | 99.53% | 99.53% | 1404 ms | ↑ 1.56x | 1 | 2h 60m | 1d ago | 15m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.19% | 98.25% | 98.91% | 98.91% | 2130 ms | ↑ 1.12x | 23 | 10m | 15h ago | 27m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 97.16% | 98.84% | 96.51% | 96.51% | 1734 ms | ↑ 1.69x | 15 | 11m | 18h ago | 15m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.93% | 97.48% | 98.60% | 98.60% | 4168 ms | → 1.02x | 45 | 40s | 2d ago | 27m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 96.91% | 82.63% | 81.36% | 81.36% | 397 ms | → 1.01x | 4 | 1d 4h | 5d ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.16% | 93.48% | 15.68% | 15.68% | 2962 ms | ↑ 1.08x | 94 | 6m | 4h ago | 28m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 95.36% | 98.73% | 91.22% | 91.22% | 1527 ms | → 1.02x | 8 | 41m | 22h ago | 16m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.13% | 96.83% | 29.23% | 29.23% | 1789 ms | ↑ 1.09x | 10 | 1h 56m | 4d ago | 29m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 93.61% | 98.46% | 96.57% | 96.57% | 4442 ms | ↑ 1.12x | 10 | 52m | 3h ago | 21m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 93.04% | 97.79% | 97.65% | 97.65% | 3350 ms | ↑ 1.15x | 14 | 52m | 6d ago | 17m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 93.04% | 97.90% | 97.76% | 97.76% | 3689 ms | ↑ 1.39x | 19 | 29m | 9h ago | 17m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 92.78% | 97.68% | 98.69% | 98.69% | 190 ms | ↑ 1.26x | 16 | 49m | 6d ago | 17m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 92.78% | 98.12% | 98.34% | 98.34% | 3020 ms | ↑ 1.35x | 15 | 37m | 6d ago | 17m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 91.86% | 98.26% | 79.57% | 79.57% | 2133 ms | ↑ 1.05x | 1 | 13h | 6d ago | 32m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 88.21% | 94.16% | 71.53% | 71.53% | 1262 ms | → 1.02x | 14 | 2h 16m | 11h ago | 20m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 87.08% | 97.00% | 97.61% | 97.61% | 2120 ms | ↑ 1.15x | 3 | 7h 23m | 5d ago | 13m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 86.96% | 89.54% | 18.08% | 18.08% | 4497 ms | → 0.99x | 150 | 7m | 1h ago | 21m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 84.83% | 91.77% | 91.40% | 91.40% | 2279 ms | ↓ 0.93x | 6 | 9h 19m | 8d ago | 18m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 84.75% | 92.02% | 94.06% | 94.06% | 4231 ms | ↑ 1.32x | 29 | 1h 27m | 6h ago | 15m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 82.99% | 17.81% | 61.61% | 61.61% | 1068 ms | → 1.00x | 1 | 24d 4h | 30d ago | 16m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 72.05% | 70.22% | 21.68% | 21.68% | 4754 ms | → 1.04x | 324 | 17m | 2h ago | 20m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 71.83% | 71.83% | 71.83% | 71.83% | 4668 ms | → 1.00x | 3 | 12h | 3h ago | 13m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 71.65% | 93.31% | 83.60% | 83.60% | 1688 ms | ↑ 1.14x | 8 | 6h 12m | 3d ago | 16m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 56.41% | 30.69% | 31.90% | 31.90% | 1006 ms | ↑ 1.34x | 3 | 6d 19h | 6d ago | 20m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 44.33% | 85.56% | 81.24% | 81.24% | 4502 ms | ↓ 0.80x | 37 | 2h 41m | 7d ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 40.05% | 13.75% | 33.28% | 33.28% | 684 ms | ↓ 0.49x | 1 | 25d 23h | 29d ago | 14m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 40.00% | 13.67% | 66.13% | 66.13% | 677 ms | ↓ 0.43x | 2 | 12d 23h | 29d ago | 20m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 29.92% | 6.44% | 30.11% | 30.11% | 1444 ms | → 1.00x | 1 | 27d 23h | 30d ago | 21m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 12.40% | 69.58% | 74.75% | 74.75% | 1413 ms | ↑ 1.31x | 3 | 3d 5h | 10d ago | 15m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 11.28% | 47.05% | 45.67% | 45.67% | 570 ms | ↑ 2.09x | 2 | 8d 9h | 17d ago | 20m ago |

</details>

<details open>
<summary><strong>🔴 Down (248)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.74% | 99.89% | 19.54% | 19.54% | 2573 ms | ↑ 1.06x | 2 | 0s | 21m ago | 21m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.74% | 99.83% | 20.06% | 20.06% | 1262 ms | ↑ 1.10x | 3 | 0s | 21m ago | 21m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 99.48% | 99.69% | 99.69% | 99.69% | 1963 ms | ↑ 1.05x | 1 | 30m | 43m ago | 13m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 98.98% | 99.01% | 96.53% | 96.53% | 1390 ms | → 1.02x | 7 | 36m | 28m ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.72% | 84.53% | 34.25% | 34.25% | 1874 ms | ↑ 1.06x | 4 | 1d | 2h ago | 20m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 98.71% | 99.56% | 91.35% | 91.35% | 335 ms | → 1.04x | 4 | 27m | 2h ago | 16m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.18% | 96.36% | 82.70% | 82.70% | 4556 ms | → 0.98x | 53 | 6m | 18m ago | 18m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 95.41% | 95.41% | 95.41% | 95.41% | 4634 ms | → 1.00x | 3 | 1h 30m | 5h ago | 14m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 92.01% | 90.38% | 54.11% | 54.11% | 3429 ms | ↓ 0.93x | 150 | 4m | 16m ago | 16m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 84.95% | 76.75% | 52.40% | 52.40% | 3553 ms | ↑ 1.05x | 8 | 20h 7m | 23h ago | 28m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 84.24% | 92.48% | 92.48% | 92.48% | 4324 ms | ↑ 1.23x | 4 | 5h 57m | 19h ago | 12m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 69.13% | 65.74% | 62.22% | 62.22% | 4841 ms | → 1.00x | 348 | 20m | 28m ago | 28m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 69.13% | 93.01% | 98.11% | 98.11% | 3789 ms | ↑ 1.06x | 38 | 1h 3m | 30m ago | 30m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 68.62% | 87.01% | 98.03% | 98.03% | 1309 ms | → 1.04x | 112 | 28m | 1h ago | 30m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 58.14% | 82.38% | 82.38% | 82.38% | 4666 ms | → 1.04x | 12 | 5h 20m | 3d ago | 13m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 56.15% | 90.51% | 53.95% | 53.95% | 3841 ms | → 1.00x | 2 | 1d 12h | 3d ago | 19m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 54.78% | 89.79% | 92.10% | 92.10% | 682 ms | ↑ 1.54x | 4 | 18h 60m | 3d ago | 13m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 46.41% | 86.16% | 96.06% | 96.06% | 248 ms | ↓ 0.35x | 2 | 2d 4h | 4d ago | 19m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 33.67% | 85.43% | 90.98% | 90.98% | 960 ms | → 1.03x | 8 | 13h 36m | 5d ago | 31m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 33.08% | 85.53% | 95.40% | 95.40% | 3242 ms | → 0.99x | 2 | 2d 7h | 5d ago | 18m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 13.95% | 11.33% | 10.82% | 10.82% | 3168 ms | ↓ 0.79x | 180 | 3h 9m | 3h ago | 13m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 12.50% | 81.27% | 90.24% | 90.24% | 928 ms | ↓ 0.95x | 1 | 6d 3h | 6d ago | 30m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 2.06% | 78.97% | 74.17% | 74.17% | 255 ms | ↓ 0.66x | 1 | 6d 20h | 7d ago | 16m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.78% | 1.36% | 60.17% | 60.17% | 4129 ms | ↑ 1.15x | 25 | 1d 4h | 12h ago | 33m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 81.92% | 81.92% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 67.85% | 67.85% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 72.96% | 72.96% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 33.44% | 54.68% | 54.68% | — | — | 11 | 1d 21h | 21d ago | 14m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 22.46% | 82.11% | 82.11% | — | — | 5 | 4d 19h | 24d ago | 18m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 62.20% | 62.20% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.60% | 5.60% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.39% | 12.39% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 59.27% | 59.27% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.36% | 3.36% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 4.04% | 70.48% | 70.48% | — | — | 1 | 28d 22h | 29d ago | 17m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 82.17% | 82.17% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.07% | 36.07% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 15.85% | 91.77% | 91.77% | — | — | 1 | 25d 20h | 26d ago | 32m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.54% | 23.54% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 73.74% | 73.74% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 51.59% | 51.59% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.66% | 29.66% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 82.56% | 82.56% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 62.19% | 62.19% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 76.27% | 76.27% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.02% | 15.02% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 49.54% | 49.54% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 52.57% | 93.69% | 93.69% | — | — | 6 | 2d 12h | 15d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 34.18% | 34.18% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 25.85% | 82.91% | 82.91% | — | — | 2 | 11d 11h | 23d ago | 21m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.44% | 3.44% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 82.76% | 82.76% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 23.92% | 39.27% | 39.27% | — | — | 5 | 4d 17h | 24d ago | 13m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.39% | 51.39% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.03% | 2.03% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 29.95% | 90.68% | 90.68% | — | — | 4 | 5d 11h | 22d ago | 29m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 39.44% | 79.52% | 79.52% | — | — | 2 | 9d 11h | 18d ago | 17m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 77.24% | 77.24% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 31.84% | 31.84% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 54.07% | 54.07% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 45.41% | 55.11% | 55.11% | — | — | 1 | 17d 6h | 17d ago | 16m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.32% | 24.32% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 77.02% | 82.92% | 82.92% | — | — | 18 | 9h 37m | 7d ago | 33m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 77.19% | 41.44% | 41.44% | — | — | 3 | 2d 11h | 7d ago | 28m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 3h | 5d ago | 13m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 56.66% | 56.66% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 23.22% | 24.35% | 24.35% | — | — | 1 | 23d 21h | 24d ago | 19m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.39% | 5.39% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 65.19% | 65.19% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 82.51% | 82.51% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.80% | 6.80% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 78.79% | 78.79% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 4.03% | 81.29% | 81.29% | — | — | 1 | 28d 22h | 29d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 25.83% | 33.14% | 33.14% | — | — | 1 | 23d 3h | 23d ago | 19m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 27.39% | 27.39% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 39.77% | 25.49% | 25.49% | — | — | 4 | 4d 16h | 16d ago | 17m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 52.42% | 52.42% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 54.51% | 54.51% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 9.46% | 9.46% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 4.09% | 67.72% | 67.72% | — | — | 1 | 28d 22h | 29d ago | 17m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 75.94% | 75.94% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 42.07% | 42.07% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 16.15% | 32.91% | 32.91% | — | — | 1 | 25d 18h | 26d ago | 14m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 82.52% | 82.52% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 58.29% | 58.29% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.71% | 38.71% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 70.09% | 77.73% | 77.73% | — | — | 2 | 4d 18h | 10d ago | 18m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 22.41% | 82.09% | 82.09% | — | — | 5 | 4d 19h | 24d ago | 18m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 54.98% | 80.61% | 80.61% | — | — | 4 | 3d 13h | 14d ago | 16m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 31.08% | 31.08% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.54% | 2.54% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 4.04% | 82.74% | 82.74% | — | — | 1 | 28d 22h | 29d ago | 30m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.38% | 41.38% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 69.75% | 97.02% | 97.02% | — | — | 1 | 9d 17h | 10d ago | 27m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 82.49% | 82.49% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.71% | 32.71% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 82.41% | 82.41% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 55.30% | 55.30% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 44.48% | 44.48% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 80.09% | 80.09% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 66.14% | 66.14% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 30.61% | 30.61% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 2h | 5d ago | 14m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 78.57% | 78.57% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 2h | 5d ago | 15m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 51.84% | 51.84% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.20% | 3.20% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 3h | 5d ago | 14m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.99% | 42.99% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 60.22% | 41.47% | 41.47% | — | — | 9 | 1d 10h | 12d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 58.74% | 58.74% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 3.99% | 46.66% | 46.66% | — | — | 2 | 14d 11h | 29d ago | 15m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 64.16% | 64.16% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 88.49% | 88.49% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.17% | 28.17% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 9.73% | 9.73% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.45% | 12.45% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 25.71% | 25.71% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.00% | 24.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 36.17% | 52.73% | 52.73% | — | — | 4 | 5d | 20d ago | 29m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 36.78% | 93.69% | 93.69% | — | — | 12 | 1d 15h | 18d ago | 31m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 56.80% | 56.80% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 53.87% | 79.82% | 79.82% | — | — | 2 | 7d 5h | 14d ago | 17m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 10.79% | 10.79% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.39% | 17.39% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 49.29% | 49.29% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 8.37% | 26.85% | 26.85% | — | — | 1 | 27d 19h | 28d ago | 14m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.93% | 54.93% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 39.23% | 39.23% | — | — | 1 | 5d 3h | 5d ago | 20m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 36.27% | 36.27% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 49.54% | 49.54% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 42.31% | 81.94% | 81.94% | — | — | 2 | 9d 3h | 18d ago | 19m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 12.23% | 89.92% | 89.92% | — | — | 1 | 26d 19h | 27d ago | 30m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 61.76% | 72.33% | 72.33% | — | — | 1 | 12d 5h | 12d ago | 13m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 82.61% | 82.61% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 81.53% | 81.53% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 63.59% | 63.59% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 74.66% | 74.66% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 81.39% | 81.39% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.48% | 19.48% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 40.63% | 59.54% | 59.54% | — | — | 1 | 18d 19h | 19d ago | 32m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 40.98% | 43.46% | 43.46% | — | — | 9 | 2d 1h | 18d ago | 17m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.06% | 4.06% | — | — | 2 | 14d 23h | 20d ago | 28m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.97% | 33.97% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.55% | 68.30% | 68.30% | — | — | 4 | 7d 5h | 18d ago | 30m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 14.18% | 25.88% | 25.88% | — | — | 30 | 20h 9m | 16d ago | 19m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.56% | 7.56% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 65.40% | 65.40% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 20.06% | 36.18% | 36.18% | — | — | 2 | 12d 8h | 25d ago | 14m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 67.32% | 67.32% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 43.05% | 43.05% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.95% | 5.95% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 39.94% | 61.57% | 61.57% | — | — | 2 | 9d 9h | 18d ago | 15m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 20.17% | 54.19% | 54.19% | — | — | 2 | 12d 8h | 25d ago | 15m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 37.47% | 37.47% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 23.60% | 23.60% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 58.11% | 5.46% | 5.46% | — | — | 5 | 2d 15h | 12d ago | 30m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.23% | 12.23% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.89% | 17.89% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 18.39% | 18.39% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 36.33% | 36.33% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 13.34% | 10.07% | 10.07% | — | — | 124 | 4h 45m | 23d ago | 20m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 10.26% | 10.26% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.96% | 0.96% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.42% | 5.42% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.35% | 6.35% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 49.72% | 49.72% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 14.52% | 51.69% | 51.69% | — | — | 1 | 26d 4h | 26d ago | 14m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 82.58% | 82.58% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 35.22% | 35.22% | 35.22% | — | — | 1 | 7d 13h | 8d ago | 13m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 35.29% | 77.15% | 77.15% | — | — | 1 | 20d 10h | 20d ago | 16m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 48.16% | 48.16% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 82.76% | 82.76% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 57.20% | 57.20% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.23% | 41.23% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.14% | 2.14% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 19.29% | 19.69% | 19.69% | — | — | 1 | 24d 22h | 25d ago | 20m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 5d 3h | 5d ago | 14m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 80.50% | 80.50% | — | — | 1 | 29d 23h | 30d ago | 22m ago |

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
