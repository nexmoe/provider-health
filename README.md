# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**645 providers** — 339 🟢 operational · 60 🟡 degraded · 246 🔴 down · 0 ⚫ unknown

_Updated 2026-06-10 07:12 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 97.92% | 97.92% | 496 ms | ↓ 0.84x | 1 | 0s | 13d ago | 24m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1720 ms | → 1.00x | 0 | — | — | 21m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.40% | 97.40% | 2549 ms | ↑ 1.08x | 0 | — | — | 39m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.94% | 53.51% | 53.51% | 2005 ms | ↑ 1.16x | 1 | 0s | 29d ago | 27m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.83% | 97.82% | 97.82% | 2841 ms | → 1.01x | 3 | 0s | 13d ago | 36m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1741 ms | ↑ 1.24x | 0 | — | — | 21m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.79% | 98.79% | 1699 ms | → 1.05x | 0 | — | — | 41m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.43% | 99.43% | 3258 ms | → 0.98x | 1 | 0s | 20d ago | 41m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 99.89% | 99.14% | 99.14% | 2683 ms | ↑ 1.55x | 1 | 19m | 22d ago | 23m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 94.76% | 94.76% | 2237 ms | ↑ 1.17x | 0 | — | — | 24m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1857 ms | ↑ 1.47x | 0 | — | — | 22m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.22% | 97.50% | 97.50% | 2281 ms | ↑ 1.18x | 1 | 4h 31m | 27d ago | 24m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.25% | 92.25% | 2479 ms | ↑ 1.25x | 0 | — | — | 42m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.96% | 99.96% | 1762 ms | ↑ 1.40x | 1 | 0s | 27d ago | 22m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 780 ms | ↑ 1.17x | 0 | — | — | 21m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.53% | 98.53% | 922 ms | → 1.00x | 0 | — | — | 25m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.71% | 98.71% | 2065 ms | ↑ 2.06x | 0 | — | — | 22m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 36.06% | 36.06% | 598 ms | → 1.04x | 0 | — | — | 36m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 707 ms | → 1.00x | 0 | — | — | 20m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.80% | 96.80% | 2422 ms | ↑ 1.13x | 1 | 0s | 15d ago | 27m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.96% | 99.96% | 486 ms | → 1.03x | 1 | 0s | 19d ago | 21m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.54% | 96.54% | 507 ms | → 1.05x | 0 | — | — | 26m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.22% | 86.50% | 86.50% | 1104 ms | ↑ 1.22x | 4 | 1h 3m | 12d ago | 26m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1707 ms | ↑ 1.09x | 1 | 0s | 19d ago | 22m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.24% | 98.24% | 2799 ms | ↑ 1.13x | 1 | 60m | 20d ago | 26m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.95% | 97.95% | 189 ms | ↑ 1.10x | 0 | — | — | 24m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.78% | 78.86% | 78.86% | 2039 ms | ↑ 1.07x | 4 | 0s | 9d ago | 36m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 84.55% | 84.55% | 1243 ms | ↑ 1.29x | 0 | — | — | 25m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.96% | 99.96% | 977 ms | → 1.00x | 1 | 0s | 19d ago | 21m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.50% | 81.29% | 81.29% | 1715 ms | ↑ 1.05x | 2 | 1h 15m | 23d ago | 28m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.58% | 97.58% | 1262 ms | ↑ 1.32x | 0 | — | — | 27m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 823 ms | ↑ 1.11x | 0 | — | — | 37m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.74% | 99.74% | 3245 ms | ↑ 1.11x | 0 | — | — | 37m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.96% | 98.96% | 311 ms | ↑ 1.49x | 0 | — | — | 26m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.40% | 97.84% | 97.84% | 3529 ms | ↑ 1.05x | 11 | 0s | 16d ago | 40m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 100.00% | 99.82% | 99.82% | 1839 ms | → 1.02x | 0 | — | — | 26m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.08% | 96.08% | 1060 ms | ↓ 0.88x | 0 | — | — | 26m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.87% | 99.87% | 2864 ms | ↑ 1.71x | 3 | 0s | 19d ago | 22m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 97.71% | 98.52% | 98.52% | 774 ms | ↑ 1.46x | 6 | 2h 29m | 9d ago | 23m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.52% | 99.52% | 2277 ms | ↑ 1.08x | 0 | — | — | 37m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.73% | 99.73% | 99.73% | 1583 ms | ↑ 1.41x | 1 | 51m | 10d ago | 21m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 100.00% | 90.45% | 90.45% | 2634 ms | → 1.00x | 0 | — | — | 23m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.84% | 99.84% | 3075 ms | ↓ 0.86x | 1 | 0s | 16d ago | 36m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.89% | 99.68% | 99.68% | 1006 ms | ↓ 0.75x | 2 | 0s | 9d ago | 24m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 181 ms | → 1.00x | 0 | — | — | 20m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 28.61% | 28.61% | 1185 ms | ↑ 1.14x | 0 | — | — | 37m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 100.00% | 99.05% | 98.66% | 98.66% | 1818 ms | ↑ 1.09x | 8 | 30m | 14d ago | 22m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 97.38% | 95.81% | 95.81% | 1886 ms | → 1.03x | 3 | 5h 26m | 15d ago | 24m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 866 ms | ↓ 0.55x | 1 | 0s | 19d ago | 21m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.77% | 97.68% | 97.68% | 3383 ms | ↑ 1.17x | 14 | 52m | 7d ago | 25m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 100.00% | 100.00% | 100.00% | 811 ms | → 1.00x | 0 | — | — | 20m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 2457 ms | → 1.00x | 0 | — | — | 22m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1009 ms | ↓ 0.70x | 0 | — | — | 22m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 96.02% | 97.44% | 97.44% | 1778 ms | → 1.04x | 4 | 5h 57m | 24d ago | 29m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.54% | 96.54% | 850 ms | → 1.02x | 0 | — | — | 27m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 53.82% | 53.82% | 944 ms | ↑ 1.05x | 0 | — | — | 29m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 100.00% | 100.00% | 100.00% | 978 ms | → 1.00x | 0 | — | — | 21m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.55% | 99.61% | 99.61% | 2832 ms | → 1.01x | 6 | 8m | 8d ago | 22m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 679 ms | ↓ 0.60x | 1 | 0s | 19d ago | 21m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.63% | 99.63% | 3328 ms | ↑ 1.07x | 0 | — | — | 36m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.09% | 97.09% | 1495 ms | ↑ 1.21x | 0 | — | — | 36m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.20% | 98.20% | 98.20% | 492 ms | ↑ 1.09x | 2 | 2h 41m | 11d ago | 21m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.89% | 99.08% | 99.08% | 1320 ms | ↑ 1.09x | 2 | 0s | 9d ago | 27m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.08% | 46.79% | 46.79% | 1956 ms | → 0.98x | 9 | 1h 42m | 21d ago | 37m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.78% | 99.09% | 99.09% | 2250 ms | ↑ 1.67x | 1 | 1h 28m | 18d ago | 23m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 82.78% | 82.78% | 1965 ms | ↑ 1.08x | 0 | — | — | 28m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.89% | 65.52% | 65.52% | 1370 ms | → 0.97x | 2 | 0s | 8d ago | 28m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 905 ms | ↓ 0.65x | 0 | — | — | 22m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.61% | 98.61% | 2034 ms | ↑ 1.12x | 0 | — | — | 26m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 3278 ms | → 0.98x | 1 | 0s | 19d ago | 21m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.72% | 92.72% | 930 ms | → 1.04x | 1 | 0s | 16d ago | 29m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.54% | 98.54% | 1064 ms | ↑ 1.39x | 0 | — | — | 24m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.83% | 99.83% | 99.83% | 347 ms | ↑ 1.35x | 3 | 0s | 7d ago | 26m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.25% | 99.25% | 1644 ms | ↓ 0.60x | 0 | — | — | 23m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.89% | 97.81% | 97.81% | 3031 ms | → 0.99x | 2 | 0s | 15d ago | 26m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.94% | 75.58% | 75.58% | 732 ms | → 1.00x | 1 | 0s | 27d ago | 28m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.55% | 95.28% | 95.28% | 945 ms | ↑ 1.40x | 2 | 1h 30m | 25d ago | 21m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.94% | 54.06% | 54.06% | 1601 ms | ↑ 1.18x | 1 | 0s | 20d ago | 37m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1088 ms | ↓ 0.89x | 0 | — | — | 21m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.11% | 98.11% | 2059 ms | → 0.99x | 0 | — | — | 27m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.96% | 99.96% | 1262 ms | → 1.05x | 1 | 0s | 19d ago | 21m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.94% | 61.30% | 61.30% | 944 ms | → 1.02x | 1 | 0s | 13d ago | 28m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.94% | 97.99% | 97.99% | 973 ms | ↑ 1.07x | 1 | 0s | 26d ago | 29m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.89% | 99.83% | 99.83% | 1607 ms | → 1.05x | 2 | 0s | 19d ago | 22m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.94% | 59.40% | 59.40% | 1822 ms | ↑ 1.07x | 1 | 0s | 22d ago | 29m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 62.60% | 62.60% | 1190 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1550 ms | ↓ 0.61x | 0 | — | — | 23m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.20% | 99.20% | 1457 ms | → 0.95x | 0 | — | — | 28m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.94% | 89.83% | 89.83% | 2002 ms | → 1.04x | 1 | 0s | 28d ago | 28m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.80% | 99.80% | 2734 ms | → 0.98x | 0 | — | — | 26m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.89% | 99.57% | 99.57% | 966 ms | → 1.03x | 2 | 0s | 11d ago | 28m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 99.89% | 98.06% | 98.06% | 1867 ms | → 0.96x | 1 | 30m | 8d ago | 28m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.84% | 99.73% | 99.73% | 2021 ms | → 1.04x | 3 | 0s | 21d ago | 40m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2131 ms | ↑ 1.25x | 0 | — | — | 21m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.02% | 99.02% | 3123 ms | ↑ 1.08x | 1 | 29m | 16d ago | 40m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.84% | 99.84% | 99.84% | 3144 ms | ↑ 1.06x | 3 | 0s | 10d ago | 41m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.13% | 98.13% | 3076 ms | ↑ 1.05x | 0 | — | — | 41m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.50% | 99.90% | 99.90% | 826 ms | ↑ 1.10x | 4 | 29m | 8d ago | 37m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 73.98% | 73.98% | 1860 ms | ↓ 0.89x | 0 | — | — | 27m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.21% | 97.91% | 97.91% | 702 ms | ↑ 1.25x | 3 | 5h 59m | 18d ago | 21m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1208 ms | ↑ 1.08x | 0 | — | — | 41m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.89% | 99.71% | 99.71% | 3166 ms | → 1.04x | 2 | 0s | 14d ago | 41m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.11% | 89.11% | 1420 ms | ↓ 0.35x | 0 | — | — | 28m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 77.58% | 77.58% | 1996 ms | → 0.96x | 0 | — | — | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.95% | 99.77% | 99.77% | 737 ms | ↑ 1.21x | 1 | 0s | 13d ago | 40m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 461 ms | → 1.00x | 0 | — | — | 22m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 747 ms | ↓ 0.59x | 0 | — | — | 21m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 83.22% | 83.22% | 2160 ms | ↑ 1.21x | 0 | — | — | 24m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1538 ms | → 1.02x | 0 | — | — | 21m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1500 ms | ↑ 1.30x | 0 | — | — | 24m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.02% | 99.02% | 482 ms | → 1.04x | 0 | — | — | 29m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.19% | 97.19% | 1339 ms | ↑ 1.59x | 0 | — | — | 24m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 937 ms | → 1.00x | 1 | 0s | 19d ago | 22m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1655 ms | ↑ 1.06x | 0 | — | — | 21m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.73% | 87.13% | 87.13% | 1632 ms | ↑ 1.06x | 5 | 0s | 18d ago | 40m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 100.00% | 99.61% | 99.57% | 99.57% | 1640 ms | ↓ 0.66x | 7 | 0s | 10d ago | 22m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 99.72% | 97.62% | 97.62% | 1680 ms | → 1.00x | 5 | 0s | 10d ago | 24m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.80% | 98.80% | 214 ms | ↑ 1.16x | 0 | — | — | 26m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.96% | 98.96% | 797 ms | → 1.02x | 0 | — | — | 31m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 70.39% | 70.39% | 326 ms | → 1.00x | 0 | — | — | 23m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 97.43% | 97.11% | 97.11% | 802 ms | ↓ 0.79x | 23 | 25m | 19d ago | 21m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.58% | 99.58% | 99.58% | 738 ms | ↑ 1.12x | 1 | 1h | 10d ago | 21m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.83% | 99.87% | 99.87% | 1338 ms | ↑ 1.27x | 2 | 11m | 11d ago | 21m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 21.42% | 21.42% | 1299 ms | ↑ 1.29x | 0 | — | — | 29m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 681 ms | ↑ 1.07x | 0 | — | — | 42m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.84% | 99.84% | 2359 ms | ↑ 1.22x | 1 | 0s | 24d ago | 41m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 97.66% | 98.71% | 98.71% | 180 ms | → 1.03x | 16 | 49m | 7d ago | 25m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 704 ms | ↑ 1.19x | 0 | — | — | 40m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.27% | 79.98% | 79.98% | 141 ms | ↑ 1.05x | 3 | 9h 30m | 12d ago | 41m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.89% | 97.89% | 1124 ms | → 1.03x | 0 | — | — | 24m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.89% | 99.73% | 99.73% | 2694 ms | → 1.04x | 2 | 0s | 18d ago | 40m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.01% | 98.01% | 1549 ms | ↓ 0.50x | 0 | — | — | 27m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.78% | 99.73% | 99.73% | 629 ms | ↑ 1.18x | 2 | 25m | 25d ago | 41m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1230 ms | ↓ 0.50x | 0 | — | — | 22m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.70% | 98.70% | 4502 ms | → 1.04x | 0 | — | — | 42m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2912 ms | → 1.03x | 0 | — | — | 40m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1768 ms | ↑ 1.34x | 0 | — | — | 22m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.66% | 99.66% | 2411 ms | → 1.04x | 0 | — | — | 36m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.46% | 98.46% | 3952 ms | → 1.03x | 0 | — | — | 27m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1102 ms | → 1.03x | 1 | 0s | 27d ago | 40m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.72% | 99.44% | 99.44% | 2794 ms | → 0.98x | 5 | 0s | 13d ago | 36m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.62% | 99.84% | 99.84% | 174 ms | ↑ 1.17x | 5 | 12m | 16d ago | 40m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 98.63% | 16.77% | 16.77% | 769 ms | → 1.01x | 15 | 13m | 21d ago | 40m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1886 ms | → 0.97x | 0 | — | — | 28m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.95% | 99.85% | 99.85% | 1708 ms | ↓ 0.90x | 1 | 0s | 13d ago | 40m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.63% | 99.63% | 1860 ms | ↑ 1.10x | 0 | — | — | 24m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 518 ms | → 1.00x | 0 | — | — | 21m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.62% | 99.62% | 663 ms | → 0.96x | 0 | — | — | 40m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 100.00% | 97.00% | 95.73% | 95.73% | 2599 ms | ↑ 1.10x | 4 | 4h 46m | 14d ago | 27m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.94% | 60.12% | 60.12% | 1632 ms | ↑ 1.05x | 1 | 0s | 25d ago | 29m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2480 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.66% | 98.86% | 98.86% | 2076 ms | ↑ 1.53x | 3 | 2h 19m | 13d ago | 23m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.95% | 89.00% | 89.00% | 1220 ms | ↑ 1.07x | 1 | 0s | 20d ago | 39m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 94.59% | 84.34% | 84.34% | 1112 ms | ↓ 0.73x | 1 | 1d 9h | 30d ago | 22m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1287 ms | ↑ 1.09x | 0 | — | — | 40m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.78% | 99.65% | 99.65% | 833 ms | → 1.01x | 3 | 7m | 15d ago | 39m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.59% | 99.59% | 947 ms | → 1.03x | 0 | — | — | 40m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.96% | 99.96% | 618 ms | ↓ 0.56x | 1 | 0s | 19d ago | 21m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.93% | 99.93% | 833 ms | ↑ 1.06x | 1 | 0s | 13d ago | 24m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.35% | 98.35% | 1425 ms | ↑ 1.23x | 0 | — | — | 24m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 98.04% | 98.04% | 1568 ms | ↑ 1.05x | 0 | — | — | 25m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.50% | 96.21% | 96.21% | 788 ms | ↑ 1.80x | 3 | 51m | 9d ago | 24m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 68.97% | 68.97% | 828 ms | ↓ 0.95x | 0 | — | — | 28m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1266 ms | ↑ 1.11x | 0 | — | — | 21m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.83% | 80.22% | 80.22% | 1599 ms | → 1.04x | 1 | 51m | 19d ago | 28m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.79% | 99.79% | 1574 ms | ↑ 1.08x | 0 | — | — | 39m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.95% | 99.95% | 2172 ms | → 0.97x | 1 | 0s | 19d ago | 22m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.72% | 92.26% | 92.26% | 1520 ms | ↑ 1.08x | 5 | 0s | 8d ago | 27m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.20% | 85.20% | 233 ms | ↓ 0.93x | 0 | — | — | 39m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.94% | 90.52% | 90.52% | 249 ms | ↓ 0.87x | 1 | 0s | 26d ago | 26m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.28% | 99.28% | 1867 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 66.64% | 66.64% | 1473 ms | ↑ 2.55x | 1 | 0s | 12d ago | 28m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.60% | 96.60% | 1586 ms | ↑ 1.17x | 0 | — | — | 29m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.83% | 99.83% | 99.83% | 896 ms | ↓ 0.58x | 3 | 0s | 13d ago | 21m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.75% | 99.75% | 2638 ms | ↑ 1.09x | 0 | — | — | 40m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 95.87% | 96.81% | 96.81% | 1180 ms | ↓ 0.56x | 2 | 13h 54m | 12d ago | 22m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1531 ms | → 1.00x | 0 | — | — | 23m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 3192 ms | → 1.00x | 0 | — | — | 22m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 57.29% | 57.29% | 672 ms | ↑ 1.10x | 0 | — | — | 29m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.44% | 98.39% | 98.39% | 1515 ms | ↑ 1.14x | 1 | 4h 17m | 19d ago | 27m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.89% | 98.30% | 98.30% | 1533 ms | → 0.99x | 2 | 0s | 15d ago | 26m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 38.63% | 38.63% | 2154 ms | → 1.03x | 1 | 0s | 18d ago | 28m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.83% | 99.21% | 99.21% | 3431 ms | ↑ 1.06x | 3 | 0s | 12d ago | 36m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.75% | 99.75% | 2579 ms | ↑ 1.07x | 0 | — | — | 40m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.89% | 99.88% | 99.88% | 2013 ms | ↑ 1.07x | 1 | 30m | 18d ago | 27m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.23% | 99.23% | 2005 ms | → 1.03x | 0 | — | — | 28m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.02% | 79.02% | 1408 ms | → 1.01x | 0 | — | — | 28m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.95% | 99.92% | 99.92% | 189 ms | → 1.02x | 1 | 0s | 13d ago | 40m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 546 ms | → 1.02x | 0 | — | — | 21m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 1792 ms | ↑ 1.15x | 0 | — | — | 39m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.96% | 99.96% | 2770 ms | ↑ 1.99x | 1 | 0s | 19d ago | 22m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1832 ms | → 1.03x | 0 | — | — | 36m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.52% | 99.52% | 3400 ms | → 1.04x | 1 | 0s | 21d ago | 40m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.83% | 79.40% | 79.40% | 1674 ms | ↑ 1.07x | 3 | 0s | 15d ago | 28m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.13% | 86.13% | 1915 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.91% | 99.91% | 936 ms | → 0.96x | 1 | 0s | 19d ago | 22m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.05% | 96.05% | 952 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 894 ms | → 1.02x | 0 | — | — | 39m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.52% | 98.52% | 499 ms | → 1.03x | 0 | — | — | 26m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 20.79% | 20.79% | 250 ms | ↓ 0.50x | 0 | — | — | 29m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.55% | 97.18% | 97.18% | 1974 ms | ↑ 1.06x | 5 | 16m | 16d ago | 24m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 822 ms | ↑ 1.05x | 0 | — | — | 26m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.78% | 18.43% | 18.43% | 1130 ms | → 0.97x | 4 | 0s | 13d ago | 29m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 60.49% | 60.49% | 2060 ms | ↑ 1.07x | 0 | — | — | 29m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.81% | 99.81% | 2773 ms | ↑ 1.07x | 1 | 0s | 8d ago | 40m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 44.07% | 25.01% | 25.01% | 529 ms | ↓ 0.45x | 1 | 15d 22h | 30d ago | 40m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 84.02% | 91.93% | 91.93% | 29 ms | ↑ 1.06x | 1 | 4d 3h | 30d ago | 24m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 97.64% | 98.86% | 98.86% | 828 ms | → 1.04x | 2 | 6h 50m | 10d ago | 39m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 17.63% | 17.63% | 931 ms | ↑ 1.08x | 0 | — | — | 39m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2204 ms | ↑ 1.84x | 0 | — | — | 23m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.48% | 99.48% | 1569 ms | ↑ 1.32x | 0 | — | — | 22m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.96% | 99.96% | 2355 ms | ↑ 1.34x | 0 | — | — | 23m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1094 ms | ↓ 0.70x | 0 | — | — | 22m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.29% | 99.43% | 99.43% | 2708 ms | → 1.03x | 6 | 32m | 8d ago | 41m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.33% | 93.33% | 4578 ms | ↑ 1.11x | 0 | — | — | 40m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.67% | 99.51% | 99.51% | 1257 ms | ↓ 0.74x | 2 | 40m | 12d ago | 39m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 98.11% | 98.36% | 98.36% | 3034 ms | ↑ 1.33x | 15 | 37m | 7d ago | 25m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 100.00% | 99.40% | 99.40% | 1766 ms | ↑ 1.56x | 0 | — | — | 23m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.19% | 99.19% | 809 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.87% | 99.87% | 1645 ms | → 1.04x | 1 | 0s | 19d ago | 22m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.57% | 99.57% | 1565 ms | → 0.97x | 1 | 0s | 21d ago | 41m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.45% | 99.45% | 1004 ms | ↑ 1.07x | 0 | — | — | 39m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 458 ms | ↑ 1.06x | 0 | — | — | 42m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.62% | 98.62% | 2694 ms | ↑ 1.19x | 0 | — | — | 24m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.66% | 96.66% | 2580 ms | → 1.05x | 0 | — | — | 40m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 4229 ms | ↑ 1.70x | 0 | — | — | 21m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.89% | 99.53% | 99.53% | 2655 ms | ↑ 1.60x | 2 | 0s | 18d ago | 23m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.89% | 99.78% | 99.78% | 867 ms | ↑ 1.31x | 1 | 20m | 12d ago | 24m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.03% | 88.03% | 1686 ms | ↑ 1.19x | 0 | — | — | 27m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.81% | 99.81% | 1047 ms | ↑ 1.17x | 0 | — | — | 24m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1599 ms | → 1.00x | 0 | — | — | 23m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1400 ms | → 1.01x | 0 | — | — | 40m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.49% | 99.49% | 1195 ms | ↑ 1.10x | 0 | — | — | 41m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 1079 ms | ↑ 1.12x | 0 | — | — | 41m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 73.05% | 73.05% | 1143 ms | → 1.01x | 1 | 0s | 19d ago | 27m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.87% | 99.87% | 3011 ms | ↑ 1.09x | 1 | 0s | 15d ago | 37m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 834 ms | → 1.03x | 0 | — | — | 38m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.27% | 84.27% | 2046 ms | ↑ 1.09x | 1 | 0s | 9d ago | 36m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 97.94% | 97.94% | 1865 ms | ↑ 1.22x | 3 | 0s | 12d ago | 24m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 100.00% | 99.96% | 99.96% | 1219 ms | ↑ 1.63x | 0 | — | — | 21m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1322 ms | → 1.00x | 0 | — | — | 23m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.77% | 98.77% | 563 ms | → 1.04x | 0 | — | — | 28m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.70% | 98.70% | 1841 ms | ↓ 0.85x | 0 | — | — | 38m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 89.82% | 96.94% | 96.94% | 2243 ms | ↓ 0.29x | 3 | 1d | 18d ago | 26m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.33% | 99.50% | 99.50% | 1616 ms | → 0.99x | 3 | 1h 3m | 16d ago | 22m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.94% | 97.78% | 97.78% | 3240 ms | ↑ 1.26x | 1 | 0s | 21d ago | 25m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.96% | 99.96% | 448 ms | ↓ 0.94x | 1 | 0s | 19d ago | 22m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.33% | 98.59% | 98.59% | 647 ms | ↑ 1.20x | 5 | 28m | 11d ago | 27m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 620 ms | → 1.00x | 0 | — | — | 21m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 28.23% | 28.23% | 977 ms | ↑ 1.19x | 1 | 0s | 23d ago | 38m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.79% | 99.79% | 816 ms | ↑ 1.07x | 1 | 0s | 17d ago | 27m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.26% | 98.26% | 1769 ms | ↑ 1.18x | 0 | — | — | 27m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1015 ms | → 0.97x | 0 | — | — | 38m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.12% | 88.12% | 2401 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.51% | 96.51% | 1833 ms | → 1.04x | 0 | — | — | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 17.63% | 17.63% | 1953 ms | ↑ 1.05x | 1 | 0s | 30d ago | 40m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 834 ms | ↓ 0.58x | 0 | — | — | 22m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 96.84% | 96.84% | 1695 ms | ↑ 1.24x | 0 | — | — | 24m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.95% | 99.85% | 99.85% | 1846 ms | → 0.99x | 1 | 0s | 15d ago | 38m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 19.54% | 19.54% | 1953 ms | → 1.05x | 0 | — | — | 29m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 17.46% | 17.46% | 1557 ms | ↑ 1.14x | 0 | — | — | 29m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.50% | 99.76% | 99.76% | 3112 ms | ↑ 1.18x | 5 | 24m | 7d ago | 26m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.16% | 96.47% | 96.47% | 1530 ms | ↑ 1.05x | 4 | 2h 27m | 10d ago | 24m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.67% | 99.74% | 99.74% | 2473 ms | → 0.99x | 1 | 2h 18m | 18d ago | 26m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1709 ms | ↑ 1.07x | 0 | — | — | 40m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.03% | 99.65% | 99.65% | 1953 ms | ↓ 0.93x | 6 | 2h 50m | 23d ago | 38m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 1901 ms | ↓ 0.94x | 0 | — | — | 38m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.49% | 98.49% | 1365 ms | ↑ 1.41x | 0 | — | — | 24m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.83% | 99.80% | 99.80% | 1887 ms | → 1.03x | 3 | 0s | 7d ago | 36m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.94% | 99.83% | 99.83% | 2289 ms | ↑ 1.08x | 1 | 0s | 9d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 353 ms | → 1.02x | 0 | — | — | 39m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.75% | 99.67% | 95.96% | 95.96% | 3024 ms | → 1.02x | 6 | 0s | 6d ago | 41m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 99.75% | 99.95% | 40.59% | 40.59% | 809 ms | → 1.04x | 1 | 0s | 1h ago | 41m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.75% | 99.95% | 99.70% | 99.70% | 1679 ms | ↓ 0.91x | 1 | 0s | 15h ago | 40m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.89% | 39.91% | 39.91% | 1389 ms | → 0.99x | 2 | 0s | 5d ago | 40m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.75% | 99.84% | 61.26% | 61.26% | 2566 ms | ↓ 0.93x | 3 | 0s | 15h ago | 40m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.75% | 99.89% | 23.05% | 23.05% | 2119 ms | ↑ 1.09x | 2 | 0s | 7d ago | 42m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.75% | 99.95% | 92.08% | 92.08% | 3766 ms | ↑ 1.09x | 1 | 0s | 7d ago | 42m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.75% | 98.79% | 98.97% | 98.97% | 3485 ms | ↑ 1.06x | 10 | 26m | 7d ago | 38m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.75% | 99.89% | 99.62% | 99.62% | 1603 ms | ↑ 1.06x | 2 | 0s | 24h ago | 39m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.75% | 99.73% | 99.89% | 99.89% | 932 ms | ↑ 1.07x | 3 | 17m | 1h ago | 39m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.75% | 99.95% | 99.02% | 99.02% | 2646 ms | ↑ 1.15x | 1 | 0s | 2h ago | 39m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.75% | 99.89% | 17.63% | 17.63% | 2326 ms | ↑ 1.10x | 2 | 0s | 2h ago | 39m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.75% | 98.85% | 99.15% | 99.15% | 3605 ms | ↑ 1.11x | 9 | 29m | 7d ago | 38m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.75% | 99.95% | 99.86% | 99.86% | 1345 ms | ↓ 0.90x | 1 | 0s | 1h ago | 38m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 99.75% | 99.95% | 99.11% | 99.11% | 1222 ms | → 1.01x | 1 | 0s | 7d ago | 40m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 99.75% | 98.95% | 15.83% | 15.83% | 2612 ms | → 1.02x | 8 | 34m | 1d ago | 36m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.94% | 17.65% | 17.65% | 563 ms | ↓ 0.54x | 1 | 0s | 6d ago | 37m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.75% | 99.94% | 17.56% | 17.56% | 2653 ms | ↑ 1.05x | 1 | 0s | 5d ago | 36m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.75% | 99.94% | 19.38% | 19.38% | 997 ms | → 1.03x | 1 | 0s | 6d ago | 37m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.74% | 99.89% | 19.33% | 19.33% | 1943 ms | ↑ 1.08x | 2 | 0s | 1h ago | 29m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.74% | 97.90% | 17.52% | 17.52% | 3024 ms | ↑ 1.13x | 8 | 1h 27m | 3h ago | 29m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.74% | 99.89% | 99.33% | 99.33% | 1564 ms | → 0.99x | 2 | 0s | 1d ago | 29m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.74% | 99.89% | 19.78% | 19.78% | 2641 ms | ↑ 1.08x | 2 | 0s | 1d ago | 29m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.74% | 99.89% | 99.86% | 99.86% | 1072 ms | ↑ 1.10x | 2 | 0s | 1d ago | 31m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.74% | 99.83% | 20.31% | 20.31% | 1260 ms | ↑ 1.11x | 3 | 0s | 1d ago | 29m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.74% | 99.94% | 46.45% | 46.45% | 978 ms | ↑ 1.07x | 1 | 0s | 1d ago | 29m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.74% | 97.89% | 98.61% | 98.61% | 1254 ms | → 1.03x | 7 | 1h 31m | 14h ago | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.74% | 99.78% | 99.80% | 99.80% | 1459 ms | → 1.03x | 3 | 10m | 4d ago | 27m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.74% | 99.89% | 41.34% | 41.34% | 490 ms | ↑ 1.09x | 2 | 0s | 2h ago | 27m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.74% | 99.94% | 49.87% | 49.87% | 640 ms | ↑ 1.21x | 1 | 0s | 6d ago | 26m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.74% | 99.94% | 99.97% | 99.97% | 2010 ms | → 1.04x | 1 | 0s | 5d ago | 28m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.74% | 99.78% | 46.62% | 46.62% | 1129 ms | → 0.96x | 4 | 0s | 18h ago | 26m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.74% | 91.71% | 91.47% | 91.47% | 2469 ms | → 0.95x | 6 | 9h 19m | 9d ago | 26m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.74% | 74.83% | 88.41% | 88.41% | 1074 ms | ↑ 1.25x | 2 | 3d 18h | 3d ago | 24m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.74% | 99.78% | 99.83% | 99.83% | 2939 ms | ↑ 1.66x | 4 | 0s | 15h ago | 22m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.74% | 99.78% | 99.67% | 99.67% | 1317 ms | ↑ 1.34x | 4 | 0s | 15h ago | 23m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.74% | 97.77% | 98.77% | 98.77% | 2952 ms | ↑ 1.08x | 3 | 4h 28m | 4d ago | 22m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 99.74% | 99.94% | 94.25% | 94.25% | 3157 ms | ↑ 1.50x | 1 | 0s | 3d ago | 23m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.74% | 99.86% | 99.86% | 99.86% | 2508 ms | ↑ 1.06x | 1 | 0s | 4d ago | 21m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.74% | 99.89% | 99.93% | 99.93% | 551 ms | ↓ 0.70x | 2 | 0s | 17h ago | 21m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 99.74% | 99.94% | 97.32% | 97.32% | 2462 ms | ↑ 1.39x | 1 | 0s | 3d ago | 23m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.74% | 99.78% | 98.88% | 98.88% | 1855 ms | ↑ 1.34x | 4 | 0s | 3d ago | 23m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.87% | 99.91% | 99.91% | 2755 ms | ↑ 2.68x | 2 | 0s | 4d ago | 22m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.74% | 99.94% | 97.26% | 97.26% | 1265 ms | ↑ 1.62x | 1 | 0s | 4d ago | 23m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.74% | 94.93% | 94.93% | 94.93% | 1483 ms | → 1.02x | 2 | 6h 36m | 18h ago | 21m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.72% | 99.72% | 99.72% | 99.72% | 1418 ms | → 1.00x | 1 | 0s | 4d ago | 20m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.71% | 99.71% | 99.71% | 99.71% | 559 ms | → 1.00x | 1 | 0s | 2d ago | 22m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.71% | 99.71% | 99.71% | 99.71% | 1420 ms | → 1.00x | 1 | 0s | 4d ago | 21m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.49% | 99.78% | 85.12% | 85.12% | 2190 ms | ↑ 1.10x | 4 | 0s | 15h ago | 40m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.49% | 99.84% | 98.85% | 98.85% | 918 ms | ↑ 1.15x | 2 | 15m | 1d ago | 38m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.49% | 99.84% | 99.92% | 99.92% | 823 ms | ↑ 1.14x | 2 | 10m | 9h ago | 40m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.49% | 99.83% | 93.53% | 93.53% | 682 ms | → 1.00x | 3 | 0s | 4d ago | 28m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.49% | 99.17% | 97.44% | 97.44% | 1999 ms | ↑ 1.10x | 10 | 12m | 4d ago | 27m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.49% | 99.83% | 81.57% | 81.57% | 1544 ms | ↑ 1.07x | 3 | 0s | 20h ago | 28m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.49% | 99.89% | 90.01% | 90.01% | 883 ms | → 0.96x | 2 | 0s | 16h ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.48% | 99.83% | 99.84% | 99.84% | 1161 ms | ↑ 1.17x | 3 | 0s | 14h ago | 24m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.48% | 97.88% | 97.78% | 97.78% | 3535 ms | ↑ 1.36x | 19 | 29m | 1d ago | 25m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.48% | 92.28% | 92.28% | 92.28% | 1482 ms | ↑ 1.27x | 55 | 20m | 1d ago | 21m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.48% | 99.83% | 99.79% | 99.79% | 559 ms | → 1.03x | 3 | 0s | 2d ago | 22m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.48% | 98.66% | 98.75% | 98.75% | 1873 ms | ↑ 1.22x | 22 | 2m | 3d ago | 21m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.48% | 99.83% | 97.25% | 97.25% | 2815 ms | ↑ 3.13x | 3 | 0s | 3d ago | 23m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.48% | 99.00% | 99.09% | 99.09% | 1541 ms | ↑ 1.54x | 11 | 17m | 5d ago | 22m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.48% | 99.78% | 99.83% | 99.83% | 1050 ms | ↑ 2.74x | 2 | 30m | 7d ago | 21m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.24% | 72.67% | 34.34% | 34.34% | 2392 ms | → 0.96x | 77 | 1h 56m | 11h ago | 40m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.24% | 93.89% | 67.96% | 67.96% | 4313 ms | → 1.01x | 40 | 37m | 5d ago | 37m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.22% | 99.78% | 99.85% | 99.85% | 539 ms | → 0.97x | 3 | 7m | 1d ago | 24m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.22% | 75.79% | 81.28% | 81.28% | 2765 ms | → 0.97x | 13 | 12h 55m | 2d ago | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.22% | 99.11% | 99.31% | 99.31% | 1678 ms | ↑ 1.38x | 5 | 50m | 4d ago | 22m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (60)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.99% | 99.62% | 98.84% | 98.84% | 2622 ms | → 1.05x | 6 | 3m | 4d ago | 41m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 98.98% | 99.01% | 96.54% | 96.54% | 1397 ms | → 1.04x | 7 | 36m | 1d ago | 37m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.97% | 99.67% | 66.96% | 66.96% | 760 ms | ↓ 0.94x | 4 | 15m | 2d ago | 28m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.97% | 98.72% | 90.86% | 90.86% | 3403 ms | → 0.96x | 23 | 0s | 18h ago | 26m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 98.82% | 98.82% | 98.82% | 98.82% | 1138 ms | → 1.00x | 1 | 1h 30m | 3d ago | 22m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.73% | 99.12% | 99.23% | 99.23% | 744 ms | → 0.99x | 6 | 35m | 7h ago | 41m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.73% | 98.29% | 98.91% | 98.91% | 2123 ms | ↑ 1.13x | 22 | 11m | 2d ago | 36m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.72% | 99.72% | 99.69% | 99.69% | 1405 ms | → 1.04x | 4 | 8m | 4d ago | 31m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.72% | 99.00% | 86.02% | 86.02% | 4386 ms | ↓ 0.95x | 18 | 0s | 20h ago | 29m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.72% | 99.45% | 71.59% | 71.59% | 1176 ms | → 1.02x | 9 | 3m | 4d ago | 28m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.71% | 99.44% | 90.99% | 90.99% | 1522 ms | ↓ 0.94x | 10 | 0s | 18h ago | 28m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.70% | 99.00% | 98.36% | 98.36% | 3456 ms | ↑ 1.32x | 6 | 46m | 1d ago | 23m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.70% | 99.43% | 99.43% | 99.43% | 2314 ms | ↑ 1.24x | 3 | 20m | 1d ago | 21m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.48% | 98.69% | 98.24% | 98.24% | 4571 ms | → 1.00x | 25 | 0s | 11m ago | 42m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.48% | 97.25% | 17.09% | 17.09% | 2044 ms | → 1.04x | 48 | 50s | 10h ago | 38m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.47% | 98.35% | 17.10% | 17.10% | 3583 ms | → 1.01x | 30 | 0s | 5h ago | 36m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.47% | 99.06% | 99.66% | 99.66% | 3073 ms | → 1.01x | 11 | 14m | 2d ago | 36m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.47% | 99.61% | 19.45% | 19.45% | 1590 ms | → 0.99x | 3 | 40m | 2d ago | 29m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.46% | 99.61% | 98.87% | 98.87% | 2718 ms | ↑ 1.10x | 4 | 22m | 2d ago | 27m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.46% | 99.67% | 98.81% | 98.81% | 1620 ms | → 1.05x | 3 | 20m | 2d ago | 27m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.45% | 98.22% | 95.56% | 95.56% | 1770 ms | ↑ 1.47x | 9 | 59m | 16h ago | 23m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.45% | 99.50% | 99.62% | 99.62% | 2760 ms | → 1.00x | 5 | 24m | 2d ago | 22m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.22% | 98.19% | 85.45% | 85.45% | 4454 ms | → 0.98x | 31 | 2m | 2h ago | 38m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.21% | 99.56% | 51.53% | 51.53% | 1143 ms | → 0.98x | 4 | 30m | 1h ago | 29m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.20% | 98.67% | 65.64% | 65.64% | 4704 ms | → 1.01x | 22 | 3m | 14h ago | 28m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.19% | 99.50% | 98.62% | 98.62% | 2499 ms | ↑ 1.41x | 4 | 37m | 5d ago | 22m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.95% | 97.95% | 79.91% | 79.91% | 2127 ms | → 1.00x | 1 | 2h 11m | 3d ago | 23m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.93% | 21.10% | 62.02% | 62.02% | 1046 ms | → 1.00x | 1 | 23d 3h | 30d ago | 24m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 97.72% | 98.25% | 85.27% | 85.27% | 3259 ms | ↑ 1.09x | 32 | 0s | 18h ago | 42m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.67% | 98.77% | 99.08% | 99.08% | 851 ms | → 0.97x | 22 | 0s | 10h ago | 22m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.43% | 98.06% | 85.43% | 85.43% | 4725 ms | → 1.00x | 33 | 2m | 2h ago | 27m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 97.41% | 99.44% | 99.54% | 99.54% | 1446 ms | ↑ 1.65x | 1 | 2h 60m | 2d ago | 23m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.20% | 97.69% | 73.97% | 73.97% | 4572 ms | → 1.02x | 35 | 5m | 2h ago | 37m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.20% | 97.52% | 98.60% | 98.60% | 4076 ms | → 1.03x | 44 | 41s | 5h ago | 36m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.63% | 98.83% | 96.51% | 96.51% | 1759 ms | ↑ 1.78x | 16 | 9m | 18h ago | 22m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.40% | 96.28% | 82.78% | 82.78% | 4590 ms | → 0.98x | 55 | 6m | 2h ago | 26m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.40% | 96.17% | 81.96% | 81.96% | 4800 ms | → 1.04x | 64 | 2m | 56m ago | 27m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 95.35% | 98.72% | 91.33% | 91.33% | 1385 ms | → 0.98x | 8 | 41m | 2d ago | 24m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 94.66% | 94.05% | 15.90% | 15.90% | 2970 ms | ↑ 1.11x | 88 | 5m | 4h ago | 37m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 94.12% | 98.39% | 96.57% | 96.57% | 4437 ms | ↑ 1.12x | 11 | 47m | 11h ago | 29m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.80% | 98.61% | 96.54% | 96.54% | 1440 ms | → 1.02x | 2 | 4h 23m | 11h ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.99% | 90.37% | 54.47% | 54.47% | 3441 ms | ↓ 0.93x | 146 | 5m | 2h ago | 24m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 91.90% | 98.25% | 79.63% | 79.63% | 2098 ms | ↑ 1.05x | 1 | 13h | 7d ago | 41m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 91.37% | 96.21% | 29.39% | 29.39% | 1795 ms | ↑ 1.07x | 12 | 1h 52m | 13h ago | 38m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 88.17% | 94.12% | 71.67% | 71.67% | 1331 ms | → 1.03x | 14 | 2h 16m | 1d ago | 28m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 87.05% | 96.98% | 97.67% | 97.67% | 2152 ms | ↑ 1.19x | 3 | 7h 23m | 6d ago | 21m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 86.79% | 91.91% | 94.13% | 94.13% | 4217 ms | ↑ 1.29x | 30 | 1h 24m | 16h ago | 22m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 86.19% | 89.53% | 18.31% | 18.31% | 4474 ms | → 0.98x | 150 | 7m | 4h ago | 29m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 76.25% | 76.25% | 76.25% | 76.25% | 4675 ms | → 1.00x | 4 | 9h | 19h ago | 21m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 68.27% | 65.44% | 62.22% | 62.22% | 4824 ms | → 1.00x | 345 | 21m | 3h ago | 37m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 67.96% | 92.43% | 83.48% | 83.48% | 1697 ms | ↑ 1.16x | 9 | 6h 19m | 1d ago | 24m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 58.66% | 85.58% | 81.40% | 81.40% | 4563 ms | ↓ 0.81x | 35 | 2h 51m | 1h ago | 24m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 56.41% | 34.09% | 32.18% | 32.18% | 1060 ms | ↑ 1.37x | 3 | 6d 11h | 7d ago | 28m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 54.66% | 13.11% | 34.83% | 34.83% | 688 ms | ↓ 0.77x | 2 | 12d 23h | 22h ago | 22m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 54.50% | 13.04% | 66.29% | 66.29% | 686 ms | ↓ 0.74x | 3 | 8d 16h | 17h ago | 28m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 44.76% | 9.69% | 30.35% | 30.35% | 1209 ms | → 1.00x | 1 | 26d 23h | 30d ago | 29m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 27.20% | 69.38% | 75.37% | 75.37% | 1800 ms | ↑ 1.48x | 3 | 3d 5h | 12d ago | 22m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 26.15% | 46.73% | 45.87% | 45.87% | 570 ms | ↑ 1.59x | 2 | 8d 9h | 18d ago | 29m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 23.58% | 13.92% | 12.53% | 12.53% | 4081 ms | ↑ 1.18x | 181 | 3h 2m | 1h ago | 21m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 11.63% | 2.51% | 10.73% | 10.73% | 2070 ms | → 1.00x | 2 | 14d 14h | 18h ago | 24m ago |

</details>

<details open>
<summary><strong>🔴 Down (246)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 99.41% | 99.41% | 99.41% | 99.41% | 419 ms | → 1.00x | 1 | 29m | 51m ago | 22m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.47% | 99.61% | 55.01% | 55.01% | 3446 ms | → 0.98x | 3 | 40m | 2h ago | 29m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 98.19% | 99.55% | 99.71% | 99.71% | 1256 ms | ↑ 1.50x | 2 | 1h 26m | 3h ago | 24m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 93.80% | 97.38% | 96.21% | 96.21% | 1925 ms | ↓ 0.63x | 6 | 2h 59m | 8h ago | 23m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 85.27% | 83.85% | 80.63% | 80.63% | 396 ms | → 1.02x | 5 | 20h 48m | 18h ago | 24m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 84.72% | 91.68% | 91.68% | 91.68% | 1983 ms | ↑ 1.08x | 1 | 1d 1h | 1d ago | 21m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 83.98% | 96.38% | 90.09% | 90.09% | 332 ms | → 1.04x | 4 | 6h 30m | 1d ago | 24m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 83.89% | 81.34% | 34.12% | 34.12% | 1899 ms | ↑ 1.07x | 3 | 1d 16h | 1d ago | 29m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 79.41% | 79.41% | 79.41% | 79.41% | 4634 ms | → 1.00x | 3 | 9h 34m | 1d ago | 22m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 72.28% | 86.51% | 86.51% | 86.51% | 4340 ms | ↑ 1.25x | 4 | 11h 60m | 2d ago | 20m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 71.72% | 69.79% | 21.93% | 21.93% | 4684 ms | → 1.02x | 325 | 17m | 28m ago | 28m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 70.05% | 73.38% | 52.24% | 52.24% | 3636 ms | ↑ 1.07x | 8 | 23h 13m | 2d ago | 37m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 69.29% | 85.84% | 97.92% | 97.92% | 1289 ms | ↑ 1.05x | 123 | 27m | 39m ago | 39m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 63.96% | 91.88% | 98.01% | 98.01% | 3990 ms | ↑ 1.13x | 51 | 51m | 39m ago | 39m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 56.48% | 82.58% | 82.58% | 82.58% | 4624 ms | → 1.00x | 17 | 3h 52m | 20m ago | 20m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 41.39% | 87.28% | 53.57% | 53.57% | 3855 ms | → 1.03x | 2 | 1d 24h | 4d ago | 27m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 39.90% | 86.54% | 89.90% | 89.90% | 745 ms | ↑ 1.79x | 4 | 1d 1h | 4d ago | 21m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 31.62% | 82.90% | 95.49% | 95.49% | 249 ms | ↓ 0.36x | 2 | 2d 16h | 5d ago | 27m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 19.04% | 82.11% | 90.71% | 90.71% | 960 ms | → 1.03x | 8 | 16h 38m | 6d ago | 40m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 18.25% | 82.27% | 94.56% | 94.56% | 3604 ms | ↑ 1.06x | 2 | 2d 19h | 6d ago | 26m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.77% | 1.42% | 59.99% | 59.99% | 4201 ms | ↑ 1.21x | 26 | 1d 3h | 14h ago | 42m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 81.68% | 81.68% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 67.64% | 67.64% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 72.74% | 72.74% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 29.82% | 53.53% | 53.53% | — | — | 11 | 1d 24h | 22d ago | 21m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 18.78% | 81.56% | 81.56% | — | — | 5 | 4d 24h | 25d ago | 26m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 61.72% | 61.72% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.58% | 5.58% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.36% | 12.36% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 58.65% | 58.65% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.35% | 3.35% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.22% | 69.84% | 69.84% | — | — | 1 | 29d 22h | 30d ago | 25m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 81.92% | 81.92% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 35.96% | 35.96% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 12.11% | 91.49% | 91.49% | — | — | 1 | 26d 20h | 27d ago | 41m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 23.43% | 23.43% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 73.52% | 73.52% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 51.25% | 51.25% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 29.54% | 29.54% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 82.31% | 82.31% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 62.00% | 62.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 76.04% | 76.04% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.94% | 14.94% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 49.30% | 49.30% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 49.06% | 93.40% | 93.40% | — | — | 6 | 2d 16h | 16d ago | 37m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 22.19% | 82.66% | 82.66% | — | — | 2 | 11d 23h | 24d ago | 29m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.43% | 3.43% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 82.51% | 82.51% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 20.22% | 38.30% | 38.30% | — | — | 5 | 4d 22h | 25d ago | 21m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 51.23% | 51.23% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.03% | 2.03% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 26.48% | 90.40% | 90.40% | — | — | 2 | 11d 10h | 23d ago | 38m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 35.86% | 78.77% | 78.77% | — | — | 2 | 9d 23h | 19d ago | 25m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 76.72% | 76.72% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 31.56% | 31.56% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 53.91% | 53.91% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 41.87% | 54.54% | 54.54% | — | — | 1 | 18d 6h | 18d ago | 24m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 24.22% | 24.22% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 73.82% | 82.67% | 82.67% | — | — | 15 | 13h 9m | 8d ago | 42m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 73.82% | 41.32% | 41.32% | — | — | 3 | 2d 19h | 8d ago | 37m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 4h | 6d ago | 21m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 75.65% | 72.55% | 72.55% | — | — | 1 | 7d 20h | 8d ago | 24m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 56.48% | 56.48% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 19.54% | 24.21% | 24.21% | — | — | 1 | 24d 21h | 25d ago | 27m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.35% | 5.35% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 64.99% | 64.99% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 82.26% | 82.26% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.73% | 6.73% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 78.55% | 78.55% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.22% | 81.05% | 81.05% | — | — | 1 | 29d 23h | 30d ago | 41m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 22.17% | 32.91% | 32.91% | — | — | 1 | 24d 3h | 24d ago | 27m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 27.17% | 27.17% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 36.19% | 25.21% | 25.21% | — | — | 4 | 4d 22h | 17d ago | 25m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 52.25% | 52.25% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 54.20% | 54.20% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 9.25% | 9.25% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.28% | 67.11% | 67.11% | — | — | 1 | 29d 22h | 30d ago | 26m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 75.71% | 75.71% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 46.15% | 46.15% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 41.94% | 41.94% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 12.40% | 32.10% | 32.10% | — | — | 1 | 26d 18h | 27d ago | 21m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 82.27% | 82.27% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 58.11% | 58.11% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 38.60% | 38.60% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 66.72% | 77.15% | 77.15% | — | — | 2 | 5d 7h | 11d ago | 26m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 18.72% | 81.54% | 81.54% | — | — | 5 | 5d | 25d ago | 26m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 51.50% | 79.64% | 79.64% | — | — | 4 | 3d 19h | 15d ago | 24m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 30.95% | 30.95% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.53% | 2.53% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.27% | 82.49% | 82.49% | — | — | 1 | 29d 23h | 30d ago | 39m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 41.25% | 41.25% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 66.34% | 96.72% | 96.72% | — | — | 1 | 10d 17h | 11d ago | 36m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 82.23% | 82.23% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 32.59% | 32.59% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 82.16% | 82.16% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 54.62% | 54.62% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 23.70% | 23.70% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 44.28% | 44.28% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 79.85% | 79.85% | — | — | 1 | 29d 23h | 30d ago | 42m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 65.76% | 65.76% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 30.27% | 30.27% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 3h | 6d ago | 22m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 78.33% | 78.33% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 3h | 6d ago | 22m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 51.43% | 51.43% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.19% | 3.19% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 3h | 6d ago | 22m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 42.86% | 42.86% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 76.76% | 76.76% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 56.92% | 41.34% | 41.34% | — | — | 7 | 1d 23h | 13d ago | 38m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 58.56% | 58.56% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.22% | 45.91% | 45.91% | — | — | 1 | 29d 22h | 30d ago | 23m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 63.60% | 63.60% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 88.21% | 88.21% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.08% | 28.08% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 12.36% | 12.36% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 25.35% | 25.35% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.92% | 23.92% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 32.75% | 52.57% | 52.57% | — | — | 2 | 10d 13h | 21d ago | 38m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 33.17% | 93.41% | 93.41% | — | — | 12 | 1d 17h | 19d ago | 40m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 56.40% | 56.40% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 50.39% | 79.07% | 79.07% | — | — | 2 | 7d 17h | 15d ago | 25m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 10.62% | 10.62% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.34% | 17.34% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 49.14% | 49.14% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 4.57% | 26.19% | 26.19% | — | — | 1 | 28d 19h | 29d ago | 22m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 54.76% | 54.76% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 39.06% | 39.06% | — | — | 1 | 6d 3h | 6d ago | 28m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 23.06% | 23.06% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 35.88% | 35.88% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 49.09% | 49.09% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.51% | 5.51% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 38.76% | 81.50% | 81.50% | — | — | 2 | 9d 15h | 19d ago | 28m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 8.51% | 89.64% | 89.64% | — | — | 1 | 27d 19h | 28d ago | 39m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 58.32% | 70.71% | 70.71% | — | — | 1 | 13d 5h | 13d ago | 21m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 82.36% | 82.36% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 81.28% | 81.28% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 63.39% | 63.39% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 74.44% | 74.44% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 81.14% | 81.14% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.41% | 19.41% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 37.04% | 59.36% | 59.36% | — | — | 1 | 19d 19h | 20d ago | 41m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 38.64% | 43.06% | 43.06% | — | — | 7 | 2d 17h | 19d ago | 25m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.22% | 4.04% | 4.04% | — | — | 2 | 14d 23h | 21d ago | 37m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 33.86% | 33.86% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.57% | 68.10% | 68.10% | — | — | 4 | 7d 5h | 19d ago | 39m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.39% | 25.71% | 25.71% | — | — | 27 | 22h 39m | 17d ago | 27m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.52% | 7.52% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 65.20% | 65.20% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 16.34% | 35.29% | 35.29% | — | — | 2 | 12d 20h | 26d ago | 22m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 67.12% | 67.12% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 42.35% | 42.35% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 5.81% | 5.81% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 40.21% | 60.58% | 60.58% | — | — | 2 | 9d 8h | 19d ago | 23m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 16.45% | 53.24% | 53.24% | — | — | 2 | 12d 20h | 26d ago | 23m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 37.08% | 37.08% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 23.24% | 23.24% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 57.72% | 5.44% | 5.44% | — | — | 3 | 4d 12h | 13d ago | 39m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 12.13% | 12.13% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 0.00% | 77.92% | 89.96% | 89.96% | — | — | 1 | 7d 4h | 7d ago | 39m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.83% | 17.83% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 18.20% | 18.20% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 35.69% | 35.69% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 11.43% | 10.02% | 10.02% | — | — | 106 | 5h 43m | 24d ago | 28m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 10.01% | 10.01% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.94% | 0.94% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 5.33% | 5.33% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 6.24% | 6.24% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 49.57% | 49.57% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 10.76% | 50.78% | 50.78% | — | — | 1 | 27d 5h | 27d ago | 22m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 82.33% | 82.33% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 0.00% | 32.39% | 32.39% | 32.39% | — | — | 1 | 8d 13h | 9d ago | 21m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 31.68% | 76.46% | 76.46% | — | — | 1 | 21d 11h | 21d ago | 25m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 47.76% | 47.76% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 82.51% | 82.51% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 56.46% | 56.46% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 41.10% | 41.10% | — | — | 1 | 29d 24h | 30d ago | 39m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 2.09% | 2.09% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 15.59% | 19.59% | 19.59% | — | — | 1 | 25d 22h | 26d ago | 28m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 38m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 6d 3h | 6d ago | 22m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 80.25% | 80.25% | — | — | 1 | 29d 24h | 30d ago | 30m ago |

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
