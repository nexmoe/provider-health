# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 349 🟢 operational · 44 🟡 degraded · 223 🔴 down · 0 ⚫ unknown

_Updated 2026-05-29 06:58 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.11% | 93.11% | 684 ms | → 0.95x | 0 | — | — | 35m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.30% | 97.30% | 2401 ms | → 0.97x | 0 | — | — | 45m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 49.34% | 49.34% | 1550 ms | → 0.99x | 2 | 0s | 17d ago | 33m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 961 ms | → 1.00x | 0 | — | — | 26m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.75% | 98.75% | 1438 ms | ↓ 0.80x | 1 | 0s | 27d ago | 47m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.31% | 99.31% | 2971 ms | ↓ 0.81x | 1 | 0s | 8d ago | 47m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.78% | 98.78% | 98.78% | 1261 ms | ↓ 0.79x | 12 | 13m | 10d ago | 29m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.49% | 93.93% | 93.93% | 1658 ms | ↓ 0.93x | 1 | 2h 59m | 26d ago | 30m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1461 ms | ↓ 0.87x | 0 | — | — | 28m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.29% | 97.10% | 97.10% | 1765 ms | → 1.01x | 1 | 4h 31m | 15d ago | 30m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 98.41% | 98.41% | 98.41% | 2298 ms | ↓ 0.88x | 13 | 22m | 11d ago | 29m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.97% | 91.97% | 1550 ms | ↓ 0.82x | 0 | — | — | 48m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 1165 ms | → 0.96x | 1 | 0s | 15d ago | 28m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.83% | 99.83% | 851 ms | ↓ 0.78x | 1 | 0s | 14d ago | 30m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 548 ms | ↑ 1.05x | 0 | — | — | 26m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.85% | 98.32% | 98.32% | 1000 ms | ↓ 0.84x | 3 | 0s | 21d ago | 31m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.55% | 96.55% | 1321 ms | → 1.00x | 1 | 0s | 14d ago | 30m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.37% | 98.37% | 741 ms | → 1.00x | 0 | — | — | 29m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 84.07% | 33.73% | 33.73% | 346 ms | ↓ 0.95x | 1 | 4d 10h | 30d ago | 42m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 591 ms | ↓ 0.93x | 1 | 0s | 17d ago | 30m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.20% | 96.20% | 479 ms | ↓ 0.94x | 0 | — | — | 33m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.64% | 85.08% | 85.08% | 1092 ms | ↓ 0.62x | 5 | 8m | 9d ago | 32m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.85% | 98.02% | 98.02% | 2182 ms | → 0.97x | 1 | 60m | 8d ago | 32m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.49% | 97.49% | 170 ms | ↓ 0.48x | 0 | — | — | 30m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.14% | 78.10% | 78.10% | 1928 ms | ↓ 0.83x | 17 | 0s | 10d ago | 42m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 82.38% | 82.38% | 982 ms | ↓ 0.58x | 0 | — | — | 31m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.49% | 80.10% | 80.10% | 1680 ms | → 1.05x | 3 | 50m | 11d ago | 35m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.37% | 97.37% | 1140 ms | ↑ 1.24x | 0 | — | — | 33m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 383 ms | ↓ 0.92x | 0 | — | — | 43m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 97.04% | 95.82% | 95.82% | 2607 ms | ↓ 0.86x | 40 | 9m | 10d ago | 47m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2333 ms | ↓ 0.80x | 1 | 0s | 21d ago | 43m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.86% | 98.86% | 126 ms | ↓ 0.34x | 0 | — | — | 33m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.80% | 99.80% | 1407 ms | ↓ 0.74x | 3 | 0s | 25d ago | 33m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.67% | 95.67% | 866 ms | ↓ 0.58x | 0 | — | — | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.75% | 99.86% | 99.86% | 907 ms | ↓ 0.63x | 3 | 13m | 11d ago | 30m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1604 ms | ↓ 0.91x | 0 | — | — | 43m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 796 ms | ↑ 1.05x | 0 | — | — | 26m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.42% | 99.43% | 99.43% | 2678 ms | ↓ 0.78x | 4 | 2h 15m | 17d ago | 32m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.75% | 99.65% | 99.65% | 926 ms | ↑ 1.05x | 4 | 5m | 15d ago | 30m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 26.01% | 26.01% | 817 ms | ↓ 0.80x | 1 | 0s | 26d ago | 43m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.69% | 98.04% | 98.04% | 2491 ms | ↓ 0.90x | 1 | 1h 41m | 11d ago | 32m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1097 ms | → 0.97x | 0 | — | — | 29m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.53% | 97.35% | 97.35% | 1634 ms | ↑ 1.24x | 7 | 4h 1m | 12d ago | 36m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.88% | 99.88% | 99.88% | 718 ms | → 1.01x | 2 | 0s | 19d ago | 28m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.24% | 96.24% | 846 ms | ↓ 0.87x | 1 | 0s | 27d ago | 34m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.76% | 99.76% | 99.76% | 1802 ms | → 0.98x | 2 | 19m | 16d ago | 27m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.97% | 51.97% | 754 ms | → 0.95x | 0 | — | — | 36m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1246 ms | → 1.00x | 0 | — | — | 26m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 3012 ms | ↓ 0.93x | 0 | — | — | 42m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.98% | 96.98% | 1288 ms | ↓ 0.64x | 0 | — | — | 42m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 99.01% | 99.01% | 1138 ms | ↓ 0.83x | 2 | 0s | 14d ago | 34m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 96.80% | 44.74% | 44.74% | 3081 ms | ↑ 1.11x | 9 | 1h 42m | 9d ago | 42m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.67% | 81.67% | 1720 ms | ↓ 0.94x | 0 | — | — | 35m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 982 ms | → 0.98x | 0 | — | — | 29m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.43% | 98.43% | 1556 ms | ↓ 0.89x | 0 | — | — | 32m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.33% | 98.33% | 683 ms | ↓ 0.84x | 0 | — | — | 30m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.75% | 99.83% | 99.83% | 178 ms | ↓ 0.45x | 5 | 0s | 8d ago | 33m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.95% | 98.95% | 98.95% | 1949 ms | ↓ 0.89x | 12 | 10m | 25d ago | 29m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.31% | 92.16% | 92.16% | 1539 ms | ↓ 0.75x | 14 | 23m | 25d ago | 29m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 44.30% | 44.30% | 871 ms | ↓ 0.93x | 0 | — | — | 36m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.13% | 74.13% | 795 ms | ↓ 0.81x | 1 | 0s | 15d ago | 35m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 93.24% | 93.24% | 93.24% | 488 ms | ↓ 0.63x | 5 | 7h 21m | 13d ago | 27m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 52.38% | 52.38% | 1160 ms | ↓ 0.74x | 1 | 0s | 7d ago | 43m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1337 ms | → 1.00x | 0 | — | — | 27m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.94% | 97.94% | 1665 ms | ↓ 0.78x | 0 | — | — | 33m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 49.74% | 49.74% | 1325 ms | ↓ 0.89x | 0 | — | — | 36m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 41.71% | 41.71% | 924 ms | ↓ 0.65x | 0 | — | — | 43m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1768 ms | → 1.00x | 0 | — | — | 26m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.42% | 80.42% | 1239 ms | ↓ 0.90x | 1 | 0s | 14d ago | 35m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.91% | 97.91% | 758 ms | ↓ 0.70x | 1 | 0s | 13d ago | 36m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 99.85% | 98.14% | 98.14% | 1754 ms | ↓ 0.87x | 3 | 0s | 8d ago | 32m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.85% | 57.48% | 57.48% | 1456 ms | ↓ 0.82x | 3 | 0s | 10d ago | 36m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.85% | 60.85% | 979 ms | ↓ 0.80x | 0 | — | — | 36m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2094 ms | ↓ 0.87x | 0 | — | — | 29m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.15% | 99.15% | 1415 ms | ↓ 0.94x | 0 | — | — | 35m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.13% | 89.13% | 1720 ms | ↓ 0.80x | 1 | 0s | 16d ago | 35m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 85.61% | 85.61% | 464 ms | ↓ 0.87x | 0 | — | — | 30m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.78% | 99.78% | 2130 ms | ↓ 0.80x | 3 | 0s | 25d ago | 32m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.55% | 99.55% | 760 ms | ↓ 0.68x | 1 | 0s | 18d ago | 35m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.96% | 97.96% | 1974 ms | ↓ 0.89x | 0 | — | — | 35m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2746 ms | → 1.00x | 0 | — | — | 26m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 14.66% | 14.66% | 1307 ms | ↓ 0.77x | 1 | 0s | 24d ago | 42m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1850 ms | ↓ 0.88x | 3 | 0s | 9d ago | 46m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1410 ms | ↓ 0.94x | 0 | — | — | 27m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.06% | 98.06% | 2486 ms | ↓ 0.79x | 0 | — | — | 47m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.80% | 99.93% | 99.93% | 759 ms | ↓ 0.90x | 1 | 1h 16m | 10d ago | 43m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 71.60% | 71.60% | 1710 ms | ↓ 0.72x | 0 | — | — | 33m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.85% | 89.94% | 89.94% | 334 ms | → 1.01x | 3 | 0s | 9d ago | 30m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 765 ms | → 1.01x | 1 | 0s | 23d ago | 29m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1019 ms | ↓ 0.86x | 0 | — | — | 47m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.61% | 99.61% | 1680 ms | ↓ 0.93x | 2 | 0s | 10d ago | 45m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.85% | 88.35% | 88.35% | 1798 ms | ↓ 0.90x | 1 | 39m | 21d ago | 35m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 75.09% | 75.09% | 1905 ms | ↓ 0.85x | 0 | — | — | 33m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 932 ms | ↓ 0.82x | 0 | — | — | 27m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 80.42% | 80.42% | 1481 ms | ↓ 0.88x | 0 | — | — | 30m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1357 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1048 ms | ↓ 0.94x | 0 | — | — | 30m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.99% | 98.99% | 447 ms | ↓ 0.65x | 0 | — | — | 36m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.59% | 98.59% | 291 ms | ↓ 0.30x | 0 | — | — | 34m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.71% | 96.71% | 280 ms | ↓ 0.50x | 0 | — | — | 30m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1596 ms | ↓ 0.87x | 0 | — | — | 27m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.47% | 96.30% | 96.30% | 1301 ms | ↓ 0.75x | 12 | 23m | 24d ago | 29m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.24% | 96.70% | 96.70% | 250 ms | ↓ 0.61x | 13 | 3m | 26d ago | 30m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.67% | 98.67% | 108 ms | ↓ 0.52x | 0 | — | — | 33m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.92% | 98.92% | 692 ms | ↓ 0.88x | 0 | — | — | 37m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 14.55% | 14.55% | 2335 ms | ↓ 0.92x | 1 | 0s | 25d ago | 41m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 100.00% | 100.00% | 420 ms | → 1.00x | 0 | — | — | 26m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 920 ms | → 0.99x | 0 | — | — | 27m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 18.27% | 18.27% | 781 ms | ↓ 0.76x | 0 | — | — | 36m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 591 ms | ↓ 0.82x | 0 | — | — | 48m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2261 ms | ↑ 1.91x | 1 | 0s | 12d ago | 47m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.64% | 99.20% | 99.20% | 177 ms | ↓ 0.81x | 3 | 47m | 15d ago | 32m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 523 ms | ↓ 0.66x | 0 | — | — | 46m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.79% | 79.31% | 79.31% | 118 ms | ↓ 0.84x | 5 | 5h 6m | 10d ago | 47m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.40% | 97.40% | 1092 ms | ↓ 0.80x | 0 | — | — | 30m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.86% | 97.86% | 1928 ms | ↓ 0.94x | 0 | — | — | 35m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 559 ms | ↑ 1.18x | 2 | 25m | 13d ago | 47m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.80% | 99.78% | 99.78% | 1278 ms | → 0.98x | 2 | 20m | 21d ago | 37m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1139 ms | → 0.97x | 0 | — | — | 29m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.66% | 98.66% | 3966 ms | ↓ 0.93x | 0 | — | — | 48m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2706 ms | ↓ 0.90x | 0 | — | — | 46m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1221 ms | → 0.97x | 0 | — | — | 28m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2156 ms | ↓ 0.89x | 1 | 0s | 21d ago | 42m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.31% | 99.31% | 1379 ms | ↓ 0.87x | 2 | 0s | 20d ago | 36m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 38.43% | 38.43% | 705 ms | → 0.98x | 0 | — | — | 47m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.31% | 98.31% | 3440 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1027 ms | → 0.96x | 1 | 0s | 15d ago | 46m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.07% | 13.74% | 13.74% | 737 ms | → 0.95x | 36 | 36m | 9d ago | 46m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 982 ms | ↓ 0.78x | 1 | 0s | 22d ago | 42m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2354 ms | → 1.00x | 0 | — | — | 35m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.55% | 99.55% | 1504 ms | → 1.01x | 0 | — | — | 30m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.34% | 89.34% | 982 ms | ↓ 0.94x | 0 | — | — | 35m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 593 ms | ↓ 0.82x | 0 | — | — | 46m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 58.35% | 58.35% | 915 ms | ↓ 0.79x | 3 | 0s | 13d ago | 36m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 16.82% | 16.82% | 2156 ms | ↓ 0.94x | 1 | 0s | 12d ago | 36m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 56.68% | 78.77% | 78.77% | 306 ms | ↓ 0.57x | 4 | 3d 1h | 52s ago | 30m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2407 ms | → 1.02x | 0 | — | — | 46m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.90% | 88.60% | 88.60% | 1045 ms | ↓ 0.91x | 2 | 0s | 8d ago | 45m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 16.55% | 16.55% | 1405 ms | ↓ 0.88x | 0 | — | — | 36m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.65% | 79.06% | 79.06% | 1559 ms | ↓ 0.83x | 2 | 50m | 26d ago | 47m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 77.85% | 77.85% | 77.85% | 1149 ms | → 1.00x | 1 | 5d 5h | 22d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 672 ms | ↓ 0.82x | 3 | 17m | 13d ago | 45m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1068 ms | ↓ 0.82x | 0 | — | — | 46m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.80% | 36.04% | 36.04% | 194 ms | ↓ 0.83x | 4 | 0s | 12d ago | 33m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 904 ms | ↓ 0.77x | 0 | — | — | 46m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.99% | 98.99% | 2185 ms | → 1.01x | 0 | — | — | 45m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.11% | 98.11% | 1135 ms | ↓ 0.88x | 0 | — | — | 30m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.75% | 97.75% | 1602 ms | ↓ 0.80x | 0 | — | — | 31m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.75% | 95.73% | 95.73% | 414 ms | ↓ 0.53x | 2 | 31m | 14d ago | 30m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.27% | 67.27% | 868 ms | → 0.97x | 0 | — | — | 35m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 967 ms | → 1.00x | 0 | — | — | 26m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.85% | 78.96% | 78.96% | 1460 ms | ↓ 0.88x | 1 | 51m | 7d ago | 35m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1353 ms | → 0.95x | 0 | — | — | 45m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1674 ms | ↓ 0.78x | 0 | — | — | 46m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.85% | 91.69% | 91.69% | 1345 ms | ↑ 1.06x | 3 | 0s | 14d ago | 34m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 84.24% | 31.57% | 31.57% | 1661 ms | ↓ 0.90x | 10 | 10h 23m | 17d ago | 36m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.26% | 44.81% | 44.81% | 607 ms | ↓ 0.71x | 4 | 7h 27m | 21d ago | 33m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.66% | 84.66% | 269 ms | ↓ 0.51x | 0 | — | — | 45m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.60% | 89.60% | 283 ms | ↓ 0.28x | 1 | 0s | 14d ago | 33m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.24% | 99.24% | 1935 ms | → 0.97x | 0 | — | — | 35m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.99% | 64.99% | 870 ms | ↓ 0.92x | 0 | — | — | 36m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.44% | 96.44% | 952 ms | ↓ 0.92x | 0 | — | — | 36m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 16.44% | 16.44% | 961 ms | → 1.04x | 1 | 0s | 23d ago | 42m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.75% | 99.75% | 2327 ms | ↓ 0.83x | 1 | 0s | 27d ago | 46m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.35% | 55.35% | 512 ms | ↓ 0.63x | 0 | — | — | 36m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2627 ms | ↑ 1.06x | 0 | — | — | 46m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 97.91% | 65.21% | 65.21% | 649 ms | ↓ 0.90x | 9 | 1h 7m | 7d ago | 35m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.17% | 99.17% | 1654 ms | ↓ 0.77x | 2 | 0s | 27d ago | 35m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.16% | 98.60% | 98.60% | 1557 ms | → 1.02x | 1 | 11h 52m | 29d ago | 29m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.69% | 77.78% | 77.78% | 1204 ms | ↓ 0.88x | 1 | 1h 39m | 29d ago | 35m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 484 ms | → 1.00x | 0 | — | — | 26m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1637 ms | ↓ 0.91x | 2 | 0s | 26d ago | 45m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1551 ms | ↓ 0.87x | 0 | — | — | 42m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2463 ms | ↓ 0.88x | 1 | 0s | 9d ago | 46m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.21% | 85.21% | 1730 ms | ↓ 0.91x | 0 | — | — | 35m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.89% | 95.89% | 1038 ms | ↓ 0.93x | 0 | — | — | 36m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 843 ms | → 0.96x | 0 | — | — | 45m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.37% | 98.37% | 422 ms | ↓ 0.49x | 1 | 0s | 20d ago | 33m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 17.33% | 17.33% | 319 ms | ↓ 0.38x | 0 | — | — | 36m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 723 ms | ↓ 0.94x | 0 | — | — | 33m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.60% | 58.60% | 1668 ms | ↓ 0.93x | 0 | — | — | 36m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.80% | 99.80% | 2560 ms | ↓ 0.93x | 0 | — | — | 46m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.72% | 90.40% | 90.40% | 27 ms | ↓ 0.17x | 4 | 1d 5h | 19d ago | 30m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.79% | 98.92% | 98.92% | 776 ms | ↓ 0.85x | 1 | 7h 40m | 11d ago | 45m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 14.63% | 14.63% | 828 ms | → 0.96x | 0 | — | — | 45m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 966 ms | → 1.02x | 0 | — | — | 29m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.34% | 99.34% | 1183 ms | → 1.01x | 0 | — | — | 28m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 1180 ms | ↓ 0.65x | 1 | 0s | 26d ago | 29m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | → 1.01x | 0 | — | — | 29m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.85% | 17.40% | 17.40% | 1093 ms | ↓ 0.87x | 3 | 0s | 10d ago | 36m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.09% | 93.09% | 4465 ms | → 1.03x | 0 | — | — | 46m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.85% | 99.56% | 99.56% | 1677 ms | → 0.96x | 2 | 10m | 15d ago | 45m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1685 ms | ↓ 0.79x | 0 | — | — | 35m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.85% | 98.77% | 98.77% | 1568 ms | ↓ 0.78x | 3 | 0s | 26d ago | 32m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.15% | 99.15% | 99.15% | 869 ms | ↓ 0.70x | 10 | 8m | 25d ago | 29m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.11% | 99.11% | 988 ms | ↓ 0.82x | 0 | — | — | 33m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1408 ms | ↑ 1.07x | 1 | 0s | 9d ago | 47m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 842 ms | ↓ 0.84x | 0 | — | — | 45m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 420 ms | ↓ 0.87x | 0 | — | — | 48m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.60% | 91.73% | 91.73% | 964 ms | ↓ 0.85x | 1 | 2h 20m | 29d ago | 45m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.37% | 98.37% | 2456 ms | ↑ 1.18x | 0 | — | — | 30m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.65% | 96.54% | 96.54% | 2279 ms | ↓ 0.92x | 1 | 1h 60m | 29d ago | 46m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1920 ms | ↓ 0.91x | 0 | — | — | 26m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.05% | 87.05% | 1314 ms | → 0.99x | 0 | — | — | 34m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.78% | 99.78% | 800 ms | ↓ 0.61x | 1 | 0s | 26d ago | 30m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1370 ms | → 0.98x | 0 | — | — | 46m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1102 ms | ↑ 1.10x | 0 | — | — | 47m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 923 ms | ↑ 1.09x | 0 | — | — | 47m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.69% | 70.49% | 70.49% | 1038 ms | ↓ 0.84x | 6 | 0s | 7d ago | 33m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 713 ms | → 0.99x | 0 | — | — | 44m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.71% | 83.71% | 1744 ms | ↓ 0.81x | 2 | 0s | 25d ago | 42m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.80% | 20.25% | 20.25% | 1630 ms | ↓ 0.87x | 4 | 0s | 14d ago | 48m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.78% | 98.78% | 1409 ms | ↓ 0.77x | 0 | — | — | 34m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.79% | 91.79% | 2878 ms | ↓ 0.78x | 0 | — | — | 48m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 664 ms | ↓ 0.94x | 1 | 0s | 24d ago | 27m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.19% | 96.59% | 96.59% | 613 ms | ↓ 0.80x | 2 | 2h 1m | 29d ago | 29m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.71% | 98.71% | 503 ms | ↓ 0.93x | 0 | — | — | 35m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.40% | 98.65% | 98.65% | 1831 ms | ↓ 0.72x | 1 | 3h 60m | 19d ago | 44m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.80% | 97.52% | 97.52% | 1835 ms | ↓ 0.89x | 3 | 6m | 9d ago | 32m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.39% | 98.48% | 98.48% | 500 ms | ↓ 0.51x | 5 | 28m | 11d ago | 33m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 25.61% | 25.61% | 839 ms | → 1.04x | 1 | 0s | 11d ago | 44m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.12% | 98.12% | 1393 ms | → 1.00x | 0 | — | — | 34m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 100.00% | 100.00% | 100.00% | 1134 ms | → 1.00x | 0 | — | — | 26m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 969 ms | ↓ 0.80x | 0 | — | — | 44m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.33% | 87.33% | 2249 ms | ↓ 0.95x | 0 | — | — | 35m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.39% | 96.39% | 1501 ms | ↓ 0.88x | 0 | — | — | 36m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1379 ms | ↓ 0.83x | 0 | — | — | 44m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 14.63% | 14.63% | 1813 ms | ↓ 0.85x | 1 | 0s | 18d ago | 46m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 796 ms | ↑ 1.06x | 0 | — | — | 29m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.64% | 96.34% | 96.34% | 1197 ms | → 0.96x | 2 | 51m | 21d ago | 30m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 600 ms | ↓ 0.75x | 1 | 0s | 27d ago | 46m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 16.60% | 16.60% | 1599 ms | ↓ 0.87x | 0 | — | — | 36m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 14.44% | 14.44% | 1308 ms | ↓ 0.80x | 3 | 0s | 26d ago | 36m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.95% | 99.88% | 99.88% | 2253 ms | ↓ 0.91x | 1 | 0s | 8d ago | 32m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1372 ms | → 0.99x | 0 | — | — | 46m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.28% | 99.63% | 99.63% | 1897 ms | ↓ 0.81x | 6 | 2h 50m | 11d ago | 44m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1771 ms | ↓ 0.84x | 0 | — | — | 44m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.25% | 98.25% | 1004 ms | → 1.00x | 0 | — | — | 30m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1580 ms | ↓ 0.86x | 2 | 0s | 16d ago | 42m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1917 ms | ↓ 0.89x | 0 | — | — | 36m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.08% | 99.08% | 1502 ms | → 1.03x | 0 | — | — | 46m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 360 ms | ↓ 0.94x | 0 | — | — | 45m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.76% | 94.09% | 84.51% | 84.51% | 4495 ms | → 0.99x | 40 | 39m | 6d ago | 48m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.76% | 98.05% | 83.00% | 83.00% | 2578 ms | ↓ 0.81x | 37 | 1m | 2d ago | 48m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 98.89% | 97.76% | 97.76% | 3385 ms | → 1.00x | 22 | 0s | 4d ago | 46m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.60% | 99.84% | 99.84% | 2512 ms | ↓ 0.80x | 8 | 0s | 7d ago | 47m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.70% | 99.70% | 2430 ms | ↓ 0.83x | 2 | 0s | 2d ago | 47m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.65% | 99.72% | 99.72% | 460 ms | ↓ 0.89x | 7 | 0s | 1d ago | 46m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.76% | 99.65% | 86.66% | 86.66% | 1198 ms | ↓ 0.82x | 7 | 0s | 6d ago | 46m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.80% | 99.72% | 99.72% | 2472 ms | ↓ 0.90x | 4 | 0s | 6d ago | 46m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 99.10% | 99.84% | 99.84% | 1613 ms | ↓ 0.75x | 18 | 0s | 1d ago | 46m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.75% | 99.64% | 99.64% | 866 ms | → 1.00x | 4 | 5m | 3d ago | 45m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.76% | 99.90% | 14.63% | 14.63% | 2075 ms | → 1.04x | 2 | 0s | 19h ago | 45m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.76% | 99.45% | 84.59% | 84.59% | 2060 ms | → 1.04x | 11 | 0s | 1d ago | 46m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.30% | 98.82% | 98.82% | 2059 ms | ↓ 0.80x | 11 | 4m | 1d ago | 47m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 188 ms | → 0.96x | 1 | 0s | 1d ago | 46m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.95% | 34.37% | 34.37% | 1430 ms | ↓ 0.67x | 1 | 0s | 6d ago | 46m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.90% | 98.82% | 98.82% | 890 ms | → 0.97x | 2 | 0s | 16h ago | 44m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2449 ms | ↓ 0.85x | 1 | 0s | 3d ago | 43m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1822 ms | ↓ 0.87x | 1 | 0s | 3d ago | 44m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.49% | 97.74% | 97.74% | 2585 ms | ↓ 0.87x | 8 | 5m | 1d ago | 41m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.84% | 99.84% | 3292 ms | ↓ 0.77x | 3 | 0s | 4d ago | 41m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.48% | 99.42% | 99.42% | 2556 ms | ↓ 0.77x | 19 | 12m | 1d ago | 41m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.85% | 99.18% | 99.18% | 3083 ms | ↓ 0.90x | 3 | 0s | 4h ago | 41m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.75% | 97.97% | 16.39% | 16.39% | 1438 ms | ↓ 0.79x | 3 | 4h 7m | 11h ago | 36m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.75% | 99.95% | 92.40% | 92.40% | 906 ms | ↓ 0.81x | 1 | 0s | 4d ago | 36m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.75% | 71.88% | 45.33% | 45.33% | 3493 ms | → 1.00x | 2 | 3d 21h | 5d ago | 37m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.75% | 99.95% | 99.86% | 99.86% | 917 ms | ↓ 0.88x | 1 | 0s | 6d ago | 37m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.75% | 97.71% | 85.54% | 85.54% | 4562 ms | → 0.96x | 40 | 3m | 20h ago | 36m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.75% | 15.28% | 15.28% | 1166 ms | ↓ 0.92x | 5 | 0s | 16h ago | 36m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.75% | 99.64% | 96.53% | 96.53% | 2001 ms | → 0.96x | 2 | 50m | 3d ago | 34m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.75% | 99.95% | 63.74% | 63.74% | 1319 ms | ↓ 0.93x | 1 | 0s | 17h ago | 35m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.75% | 99.54% | 59.10% | 59.10% | 786 ms | ↓ 0.73x | 5 | 16m | 17h ago | 35m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.75% | 99.95% | 98.85% | 98.85% | 2338 ms | → 0.97x | 1 | 0s | 5d ago | 34m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.75% | 99.90% | 34.73% | 34.73% | 1998 ms | → 0.98x | 2 | 0s | 6d ago | 35m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.75% | 99.85% | 78.09% | 78.09% | 1421 ms | ↓ 0.90x | 3 | 0s | 3d ago | 35m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.75% | 99.95% | 99.78% | 99.78% | 654 ms | ↓ 0.81x | 1 | 0s | 5d ago | 34m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.75% | 99.24% | 90.43% | 90.43% | 1342 ms | ↓ 0.83x | 15 | 0s | 20h ago | 35m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.75% | 99.80% | 97.45% | 97.45% | 699 ms | ↓ 0.65x | 3 | 7m | 1d ago | 30m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.69% | 97.33% | 97.33% | 1519 ms | ↓ 0.67x | 3 | 20m | 3d ago | 33m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.69% | 97.55% | 97.55% | 2537 ms | ↓ 0.76x | 6 | 0s | 3d ago | 32m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.59% | 97.11% | 97.11% | 1575 ms | ↓ 0.86x | 8 | 0s | 5d ago | 30m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 99.75% | 88.34% | 83.48% | 83.48% | 686 ms | ↓ 0.63x | 2 | 1d 14h | 2d ago | 33m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.75% | 99.69% | 90.31% | 90.31% | 874 ms | ↓ 0.71x | 4 | 10m | 2d ago | 30m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.75% | 99.90% | 99.92% | 99.92% | 666 ms | ↓ 0.73x | 2 | 0s | 1d ago | 30m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.75% | 99.95% | 52.37% | 52.37% | 3307 ms | ↓ 0.83x | 1 | 0s | 2d ago | 33m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.90% | 97.62% | 97.62% | 1327 ms | ↓ 0.94x | 2 | 0s | 3d ago | 30m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.94% | 99.94% | 1578 ms | ↓ 0.88x | 1 | 0s | 7d ago | 28m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.59% | 99.59% | 99.59% | 841 ms | → 0.97x | 7 | 0s | 1d ago | 29m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 98.01% | 98.48% | 98.48% | 2217 ms | ↓ 0.80x | 2 | 6h 41m | 6d ago | 28m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.51% | 99.51% | 99.51% | 2518 ms | ↓ 0.91x | 6 | 8m | 7d ago | 28m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.75% | 99.77% | 99.77% | 99.77% | 1618 ms | ↑ 1.06x | 3 | 6m | 7d ago | 28m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.94% | 99.94% | 99.94% | 998 ms | ↓ 0.93x | 1 | 0s | 7d ago | 28m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.75% | 98.54% | 98.54% | 98.54% | 886 ms | ↓ 0.63x | 13 | 17m | 2h ago | 29m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.75% | 98.11% | 98.56% | 98.56% | 1175 ms | → 1.00x | 4 | 2h 47m | 18h ago | 29m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.75% | 99.93% | 99.93% | 99.93% | 2200 ms | ↓ 0.91x | 1 | 0s | 7d ago | 28m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.75% | 99.39% | 99.39% | 99.39% | 929 ms | ↓ 0.93x | 10 | 0s | 5d ago | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.75% | 99.94% | 99.94% | 99.94% | 880 ms | → 0.97x | 1 | 0s | 7d ago | 28m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.75% | 99.88% | 99.88% | 99.88% | 1015 ms | → 0.99x | 2 | 0s | 7d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.75% | 99.82% | 99.82% | 99.82% | 1516 ms | ↓ 0.88x | 2 | 10m | 7d ago | 28m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.75% | 99.33% | 99.33% | 99.33% | 1333 ms | ↓ 0.83x | 9 | 5m | 6d ago | 29m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.75% | 99.94% | 99.94% | 99.94% | 521 ms | ↓ 0.92x | 1 | 0s | 7d ago | 28m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.75% | 99.94% | 99.94% | 99.94% | 408 ms | ↓ 0.73x | 1 | 0s | 7d ago | 27m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.95% | 99.95% | 99.95% | 956 ms | ↓ 0.81x | 1 | 0s | 7d ago | 27m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.75% | 99.82% | 99.82% | 99.82% | 542 ms | ↓ 0.55x | 3 | 0s | 7d ago | 27m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.75% | 99.94% | 99.94% | 99.94% | 945 ms | ↓ 0.88x | 1 | 0s | 7d ago | 27m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 871 ms | ↓ 0.83x | 1 | 0s | 7d ago | 27m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.75% | 99.95% | 99.95% | 99.95% | 3071 ms | ↓ 0.76x | 1 | 0s | 7d ago | 27m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 1088 ms | ↓ 0.78x | 1 | 0s | 7d ago | 27m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.95% | 99.95% | 99.95% | 549 ms | ↓ 0.67x | 1 | 0s | 7d ago | 27m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.75% | 99.95% | 99.95% | 99.95% | 823 ms | ↓ 0.75x | 1 | 0s | 7d ago | 27m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.94% | 99.94% | 99.94% | 639 ms | ↓ 0.64x | 1 | 0s | 7d ago | 27m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.94% | 99.94% | 99.94% | 307 ms | ↓ 0.66x | 1 | 0s | 7d ago | 27m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.73% | 99.73% | 99.73% | 99.73% | 1349 ms | → 1.00x | 1 | 0s | 5d ago | 26m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.69% | 99.69% | 99.69% | 99.69% | 427 ms | → 1.00x | 1 | 0s | 4d ago | 26m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.52% | 97.14% | 98.13% | 98.13% | 4651 ms | → 0.98x | 50 | 3m | 5d ago | 48m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.70% | 98.99% | 98.99% | 3051 ms | → 1.01x | 2 | 45m | 4d ago | 46m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.52% | 99.70% | 99.20% | 99.20% | 1227 ms | ↓ 0.91x | 6 | 0s | 2h ago | 45m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.52% | 99.65% | 99.83% | 99.83% | 118 ms | ↓ 0.61x | 5 | 12m | 4d ago | 46m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.52% | 98.95% | 99.23% | 99.23% | 799 ms | ↓ 0.87x | 15 | 8m | 12h ago | 47m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.52% | 98.69% | 59.85% | 59.85% | 2574 ms | ↓ 0.88x | 24 | 2m | 1d ago | 46m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.51% | 99.75% | 96.59% | 96.59% | 4066 ms | → 0.99x | 5 | 0s | 10h ago | 36m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.51% | 99.39% | 70.03% | 70.03% | 1019 ms | ↓ 0.85x | 10 | 4m | 17h ago | 35m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.51% | 97.91% | 98.56% | 98.56% | 1114 ms | → 1.00x | 10 | 1h 4m | 17h ago | 35m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.51% | 99.90% | 99.87% | 99.87% | 1631 ms | ↓ 0.88x | 1 | 30m | 6d ago | 34m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.51% | 99.85% | 99.80% | 99.80% | 1251 ms | ↓ 0.81x | 2 | 14m | 19h ago | 33m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 99.69% | 98.11% | 98.11% | 1261 ms | ↓ 0.67x | 6 | 0s | 3d ago | 32m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.51% | 94.04% | 92.06% | 92.06% | 2084 ms | ↓ 0.91x | 10 | 3h 52m | 22h ago | 33m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.51% | 99.90% | 99.74% | 99.74% | 525 ms | ↓ 0.46x | 1 | 20m | 12h ago | 30m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.51% | 98.98% | 40.36% | 40.36% | 1005 ms | ↓ 0.71x | 16 | 5m | 5d ago | 32m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.51% | 99.82% | 99.82% | 99.82% | 1718 ms | ↓ 0.92x | 3 | 0s | 3d ago | 28m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.51% | 99.63% | 99.63% | 99.63% | 2227 ms | ↓ 0.90x | 5 | 4m | 10h ago | 28m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.51% | 98.47% | 98.47% | 98.47% | 851 ms | ↓ 0.59x | 14 | 16m | 2h ago | 29m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.51% | 99.27% | 99.27% | 99.27% | 1064 ms | ↓ 0.91x | 3 | 1h 4m | 2d ago | 28m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.50% | 99.77% | 99.77% | 99.77% | 870 ms | ↓ 0.78x | 4 | 0s | 15h ago | 27m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.38% | 99.38% | 99.38% | 99.38% | 4438 ms | → 1.00x | 2 | 0s | 2d ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.28% | 98.09% | 98.69% | 98.69% | 2818 ms | ↓ 0.94x | 32 | 5m | 23h ago | 45m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.27% | 97.33% | 98.95% | 98.95% | 3641 ms | → 0.95x | 17 | 45m | 24h ago | 44m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.26% | 98.06% | 90.06% | 90.06% | 2770 ms | ↓ 0.90x | 31 | 5m | 3d ago | 32m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.26% | 98.47% | 95.93% | 95.93% | 1039 ms | ↓ 0.90x | 2 | 4h 44m | 2d ago | 30m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.26% | 98.11% | 98.11% | 98.11% | 1547 ms | ↓ 0.85x | 17 | 20m | 2d ago | 28m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.26% | 99.30% | 99.30% | 99.30% | 1698 ms | → 0.95x | 3 | 1h 3m | 4d ago | 28m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.03% | 97.28% | 99.13% | 99.13% | 3410 ms | ↓ 0.94x | 17 | 46m | 24h ago | 44m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 99.03% | 96.56% | 73.11% | 73.11% | 4339 ms | → 0.95x | 59 | 3m | 15h ago | 42m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.03% | 99.19% | 96.43% | 96.43% | 1197 ms | ↓ 0.92x | 7 | 27m | 2d ago | 42m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 94.03% | 66.82% | 66.82% | 3936 ms | ↓ 0.85x | 47 | 32m | 12m ago | 42m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.02% | 97.76% | 63.57% | 63.57% | 4636 ms | → 0.96x | 40 | 3m | 14h ago | 35m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.01% | 99.53% | 99.53% | 99.53% | 672 ms | ↓ 0.70x | 8 | 0s | 2d ago | 28m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.01% | 99.71% | 98.73% | 98.73% | 1068 ms | ↓ 0.86x | 2 | 44m | 6d ago | 29m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (44)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 98.79% | 98.44% | 92.06% | 92.06% | 936 ms | ↓ 0.94x | 9 | 49m | 22h ago | 46m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.79% | 86.70% | 12.96% | 12.96% | 1982 ms | ↓ 0.81x | 204 | 6m | 19h ago | 42m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.77% | 97.35% | 84.25% | 84.25% | 4608 ms | ↓ 0.95x | 51 | 21s | 15h ago | 33m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.76% | 98.59% | 98.59% | 98.59% | 1532 ms | ↑ 1.08x | 21 | 2m | 17h ago | 27m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.55% | 96.83% | 84.97% | 84.97% | 4494 ms | → 1.01x | 59 | 2m | 1d ago | 44m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.54% | 94.89% | 14.13% | 14.13% | 3369 ms | ↓ 0.83x | 69 | 9m | 20h ago | 41m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.54% | 99.39% | 99.68% | 99.68% | 2845 ms | ↓ 0.92x | 11 | 4m | 11m ago | 41m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.52% | 99.69% | 99.71% | 99.71% | 2075 ms | ↓ 0.73x | 1 | 2h 18m | 6d ago | 33m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.52% | 95.85% | 95.85% | 95.85% | 854 ms | ↑ 1.16x | 10 | 2h 8m | 2d ago | 29m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.28% | 99.49% | 96.58% | 96.58% | 2022 ms | ↓ 0.94x | 6 | 16m | 4d ago | 30m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.28% | 95.82% | 83.70% | 83.70% | 4718 ms | → 0.98x | 48 | 16m | 6h ago | 32m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.01% | 99.53% | 99.53% | 99.53% | 398 ms | ↓ 0.95x | 2 | 1h | 9h ago | 27m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.81% | 83.97% | 12.81% | 12.81% | 2486 ms | → 0.99x | 12 | 8h 37m | 3h ago | 41m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.58% | 99.25% | 99.42% | 99.42% | 2278 ms | ↓ 0.81x | 8 | 24m | 7d ago | 47m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.57% | 94.03% | 98.63% | 98.63% | 3677 ms | ↓ 0.86x | 72 | 13m | 16h ago | 41m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.57% | 98.99% | 98.94% | 98.94% | 1547 ms | ↓ 0.75x | 15 | 8m | 4d ago | 42m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.54% | 99.49% | 98.26% | 98.26% | 1218 ms | → 0.98x | 1 | 4h 17m | 7d ago | 34m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.29% | 72.58% | 83.81% | 83.81% | 1373 ms | ↓ 0.90x | 3 | 2d 12h | 3d ago | 30m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.29% | 94.65% | 81.26% | 81.26% | 4658 ms | → 0.97x | 92 | 4m | 18h ago | 32m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.81% | 94.86% | 80.72% | 80.72% | 4819 ms | → 1.00x | 86 | 4m | 4h ago | 34m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.80% | 98.83% | 99.03% | 99.03% | 204 ms | ↓ 0.33x | 7 | 49m | 2d ago | 29m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.31% | 95.26% | 96.27% | 96.27% | 3466 ms | ↑ 1.08x | 15 | 1h 50m | 2d ago | 29m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.92% | 98.24% | 27.01% | 27.01% | 1325 ms | ↑ 1.06x | 8 | 1h 23m | 23h ago | 44m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.84% | 94.51% | 70.49% | 70.49% | 1273 ms | ↓ 0.87x | 17 | 1h 48m | 5d ago | 35m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 94.43% | 96.27% | 14.11% | 14.11% | 2039 ms | → 0.98x | 68 | 2m | 2d ago | 44m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 94.33% | 98.73% | 96.16% | 96.16% | 2741 ms | ↓ 0.95x | 6 | 1h 27m | 1d ago | 30m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 94.07% | 94.21% | 94.21% | 94.21% | 1174 ms | ↑ 1.11x | 3 | 11h 15m | 6d ago | 29m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 94.04% | 95.96% | 95.96% | 95.96% | 1004 ms | ↓ 0.74x | 40 | 17m | 7d ago | 27m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 93.87% | 88.57% | 15.47% | 15.47% | 4451 ms | ↓ 0.92x | 177 | 7m | 19h ago | 36m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 92.16% | 97.92% | 14.49% | 14.49% | 2152 ms | ↓ 0.92x | 9 | 1h 21m | 4d ago | 36m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 92.14% | 97.25% | 95.38% | 95.38% | 2240 ms | ↓ 0.95x | 4 | 4h 46m | 2d ago | 34m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.12% | 97.60% | 94.99% | 94.99% | 1596 ms | ↑ 1.07x | 3 | 5h 26m | 3d ago | 30m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.32% | 97.07% | 97.07% | 97.07% | 406 ms | ↓ 0.35x | 3 | 5h 59m | 6d ago | 27m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.16% | 88.63% | 49.43% | 49.43% | 4144 ms | → 0.99x | 184 | 5m | 10h ago | 31m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 87.06% | 83.88% | 83.88% | 83.88% | 759 ms | → 0.98x | 51 | 21m | 4d ago | 26m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 84.44% | 73.70% | 73.70% | 73.70% | 2456 ms | ↓ 0.85x | 10 | 16h 47m | 4d ago | 28m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 83.78% | 81.93% | 51.17% | 51.17% | 2529 ms | ↓ 0.81x | 3 | 1d 21h | 1d ago | 43m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 80.19% | 32.41% | 20.35% | 20.35% | 3428 ms | → 1.01x | 69 | 6h 20m | 15m ago | 46m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 71.92% | 75.18% | 86.62% | 86.62% | 634 ms | ↓ 0.59x | 2 | 4d | 12d ago | 30m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 71.50% | 67.53% | 18.54% | 18.54% | 4682 ms | → 1.02x | 365 | 17m | 6h ago | 35m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 55.42% | 90.42% | 96.58% | 96.58% | 3031 ms | ↓ 0.81x | 8 | 9h 6m | 6d ago | 32m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 27.78% | 5.78% | 8.78% | 8.78% | 2610 ms | → 1.00x | 1 | 27d 23h | 30d ago | 46m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 24.82% | 5.14% | 29.99% | 29.99% | 691 ms | → 1.00x | 2 | 14d 2h | 2h ago | 35m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.94% | 10.19% | 10.19% | 10.19% | 3163 ms | ↓ 0.87x | 154 | 3h 21m | 4h ago | 27m ago |

</details>

<details open>
<summary><strong>🔴 Down (223)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.51% | 99.88% | 99.88% | 99.88% | 2664 ms | → 0.95x | 2 | 0s | 27m ago | 27m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 98.02% | 98.78% | 98.78% | 98.78% | 1250 ms | ↓ 0.95x | 2 | 3h 15m | 3h ago | 29m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 83.37% | 96.41% | 96.41% | 96.41% | 417 ms | ↓ 0.61x | 1 | 1d 5h | 1d ago | 27m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 82.13% | 53.58% | 5.64% | 5.64% | 1345 ms | → 0.95x | 5 | 2d 15h | 1d ago | 45m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 82.08% | 93.45% | 42.85% | 42.85% | 1045 ms | → 0.96x | 17 | 2h 42m | 1d ago | 44m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 71.12% | 63.94% | 62.02% | 62.02% | 4830 ms | → 0.99x | 393 | 18m | 2h ago | 43m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 61.58% | 89.25% | 89.03% | 89.03% | 2025 ms | ↓ 0.82x | 2 | 1d 17h | 3d ago | 32m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 53.69% | 88.02% | 93.00% | 93.00% | 1411 ms | ↓ 0.83x | 5 | 18h 20m | 3d ago | 30m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 42.86% | 87.99% | 96.82% | 96.82% | 1762 ms | ↓ 0.75x | 6 | 15h 57m | 4d ago | 43m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 24.38% | 47.04% | 29.00% | 29.00% | 1069 ms | ↓ 0.93x | 5 | 3d 3h | 5d ago | 32m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 15.02% | 13.19% | 27.98% | 27.98% | 3295 ms | → 0.99x | 31 | 19h 29m | 5d ago | 33m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 10.34% | 81.24% | 62.31% | 62.31% | 1689 ms | ↓ 0.88x | 5 | 1d 6h | 6d ago | 31m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 7.13% | 80.72% | 47.22% | 47.22% | 298 ms | ↓ 0.50x | 2 | 3d 6h | 6d ago | 35m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 3.86% | 72.93% | 96.82% | 96.82% | 543 ms | ↓ 0.74x | 17 | 12h 1m | 7d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 3.46% | 64.08% | 75.09% | 75.09% | 1796 ms | → 1.05x | 12 | 22h 6m | 7d ago | 29m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 2.46% | 75.94% | 88.81% | 88.81% | 285 ms | ↓ 0.25x | 2 | 3d 23h | 7d ago | 32m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.93% | 1.20% | 62.12% | 62.12% | 3158 ms | ↓ 0.89x | 24 | 1d 5h | 3h ago | 48m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 1.48% | 76.76% | 48.41% | 48.41% | 1078 ms | ↓ 0.84x | 19 | 9h 23m | 7d ago | 32m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 70.11% | 70.11% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 75.39% | 75.39% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 70.22% | 71.38% | 71.38% | — | — | 16 | 14h 42m | 10d ago | 28m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 59.78% | 88.62% | 88.62% | — | — | 7 | 1d 21h | 13d ago | 33m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 67.99% | 67.99% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.80% | 5.80% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.81% | 12.81% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 23.96% | 67.00% | 67.00% | — | — | 3 | 7d 19h | 21d ago | 31m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 36m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.47% | 3.47% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 43.27% | 78.33% | 78.33% | — | — | 2 | 8d 23h | 18d ago | 32m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 84.91% | 84.91% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.27% | 37.27% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 22.27% | 62.94% | 62.94% | — | — | 3 | 7d 22h | 24d ago | 31m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 53.96% | 94.83% | 94.83% | — | — | 4 | 3d 17h | 15d ago | 47m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.85% | 24.85% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 76.20% | 76.20% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 55.65% | 55.65% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.03% | 31.03% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 85.31% | 85.31% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 64.26% | 64.26% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 78.81% | 78.81% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.06% | 16.06% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 52.23% | 52.23% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 63.41% | 85.68% | 85.68% | — | — | 2 | 5d 23h | 12d ago | 36m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.61% | 3.61% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 36m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 85.52% | 85.52% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 54.18% | 54.18% | 54.18% | — | — | 6 | 2d 2h | 13d ago | 27m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.10% | 53.10% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.10% | 2.10% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 65.47% | 93.70% | 93.70% | — | — | 13 | 20h 35m | 11d ago | 44m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 38.85% | 83.38% | 83.38% | — | — | 3 | 6d 9h | 19d ago | 33m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 36.32% | 36.32% | 36.32% | — | — | 1 | 17d 15h | 18d ago | 28m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 44.20% | 68.48% | 68.48% | — | — | 2 | 8d 20h | 18d ago | 35m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 35.20% | 35.20% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.87% | 55.87% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.50% | 25.50% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.53% | 30.53% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 58.54% | 58.54% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 60.97% | 26.04% | 26.04% | — | — | 1 | 12d 21h | 13d ago | 34m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.82% | 5.82% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 67.36% | 67.36% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 85.26% | 85.26% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.60% | 7.60% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 81.41% | 81.41% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 28.99% | 84.00% | 84.00% | — | — | 3 | 7d 6h | 18d ago | 47m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 62.27% | 35.87% | 35.87% | — | — | 21 | 13h 54m | 12d ago | 33m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 28m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 36m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 29.98% | 29.98% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 54.16% | 54.16% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 39.03% | 58.15% | 58.15% | — | — | 3 | 6d 9h | 19d ago | 34m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 13.90% | 12.76% | 12.76% | — | — | 1 | 22d 6h | 22d ago | 29m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 43.32% | 75.07% | 75.07% | — | — | 2 | 8d 23h | 18d ago | 32m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 78.47% | 78.47% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.84% | 47.84% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.47% | 43.47% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 45.42% | 45.42% | 45.42% | — | — | 5 | 2d 23h | 15d ago | 27m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 85.27% | 85.27% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.23% | 60.23% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.00% | 40.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 59.73% | 88.63% | 88.63% | — | — | 7 | 1d 21h | 13d ago | 33m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 37m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.59% | 32.59% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.64% | 2.64% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 43.11% | 85.50% | 85.50% | — | — | 2 | 8d 23h | 18d ago | 45m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.75% | 42.75% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 85.23% | 85.23% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 85.16% | 85.16% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 26.81% | 63.90% | 63.90% | — | — | 1 | 22d 14h | 23d ago | 30m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 27.95% | 27.95% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 46.90% | 46.90% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 82.76% | 82.76% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 70.52% | 70.52% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 28.19% | 35.01% | 35.01% | — | — | 6 | 3d 17h | 22d ago | 30m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 37m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 81.19% | 81.19% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 56.84% | 56.84% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.38% | 3.38% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.42% | 44.42% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 79.56% | 79.56% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 60.70% | 60.70% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 42.04% | 56.83% | 56.83% | — | — | 22 | 19h 37m | 18d ago | 29m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 27.83% | 71.00% | 71.00% | — | — | 35 | 14h 59m | 22d ago | 32m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 32.56% | 91.43% | 91.43% | — | — | 1 | 20d 23h | 21d ago | 44m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.11% | 29.11% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 11.58% | 11.58% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.43% | 13.43% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 5.15% | 30.49% | 30.49% | — | — | 2 | 14d 7h | 28d ago | 30m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.80% | 24.80% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 28m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 71.17% | 54.49% | 54.49% | — | — | 14 | 16h 4m | 9d ago | 44m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 61.65% | 61.65% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 13.14% | 13.14% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.97% | 17.97% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.93% | 50.93% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 37.03% | 37.03% | 37.03% | — | — | 1 | 16d 19h | 17d ago | 29m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 28m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.76% | 56.76% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 25.74% | 25.50% | 25.50% | — | — | 16 | 1d 10h | 23d ago | 32m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 41.16% | 41.16% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 55.15% | 55.15% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.71% | 5.71% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 78.58% | 87.17% | 87.17% | — | — | 2 | 3d 15h | 7d ago | 34m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 50.76% | 92.91% | 92.91% | — | — | 1 | 15d 19h | 16d ago | 45m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 85.36% | 85.36% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 84.25% | 84.25% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 36m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 65.70% | 65.70% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 77.15% | 77.15% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 47m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 84.10% | 84.10% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.17% | 20.17% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 76.93% | 61.52% | 61.52% | — | — | 1 | 7d 19h | 8d ago | 47m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 3.48% | 4.19% | 4.19% | — | — | 2 | 14d 12h | 9d ago | 43m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.18% | 35.18% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.27% | 70.58% | 70.58% | — | — | 4 | 7d 5h | 7d ago | 45m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.02% | 8.02% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 67.58% | 67.58% | — | — | 1 | 29d 24h | 30d ago | 48m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 49.91% | 49.91% | 49.91% | — | — | 2 | 6d 20h | 14d ago | 28m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 37m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 36m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 69.56% | 69.56% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 31.89% | 52.46% | 52.46% | — | — | 12 | 1d 18h | 21d ago | 29m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 8.02% | 8.02% | — | — | 1 | 25d 11h | 25d ago | 29m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 57.04% | 67.29% | 67.29% | — | — | 14 | 23h 41m | 14d ago | 29m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 42.28% | 42.28% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 28.48% | 28.48% | — | — | 1 | 26d 12h | 26d ago | 30m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.50% | 13.50% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.48% | 18.48% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 20.72% | 20.72% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 27.91% | 45.10% | 45.10% | — | — | 1 | 22d 7h | 22d ago | 28m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 30.98% | 10.66% | 10.66% | — | — | 305 | 1h 20m | 12d ago | 35m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 13.99% | 13.99% | 13.99% | — | — | 8 | 2d 21h | 23d ago | 27m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.17% | 1.17% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.75% | 7.75% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.38% | 51.38% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11h 13m | 12h ago | 26m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 52.96% | 64.18% | 64.18% | — | — | 2 | 7d 14h | 15d ago | 28m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 72.07% | 85.54% | 85.54% | — | — | 2 | 4d 17h | 9d ago | 31m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 52.96% | 52.96% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 85.52% | 85.52% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 36.41% | 66.68% | 66.68% | — | — | 2 | 9d 22h | 20d ago | 30m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.60% | 42.60% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 2.92% | 2.92% | 2.92% | — | — | 1 | 25d 18h | 26d ago | 29m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 57.12% | 20.81% | 20.81% | — | — | 4 | 3d 12h | 14d ago | 35m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 83.18% | 83.18% | — | — | 1 | 29d 24h | 30d ago | 36m ago |

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
