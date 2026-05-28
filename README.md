# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**610 providers** — 341 🟢 operational · 44 🟡 degraded · 225 🔴 down · 0 ⚫ unknown

_Updated 2026-05-28 06:57 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (341)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.07% | 93.07% | 682 ms | ↓ 0.91x | 0 | — | — | 13m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.50% | 69.90% | 69.90% | 978 ms | ↓ 0.85x | 8 | 5m | 8d ago | 14m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.04% | 16.15% | 16.15% | 1516 ms | ↓ 0.78x | 2 | 6h 11m | 27d ago | 15m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.29% | 97.29% | 2408 ms | → 0.95x | 0 | — | — | 25m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 48.96% | 48.96% | 1554 ms | → 0.97x | 2 | 0s | 16d ago | 12m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 929 ms | → 1.00x | 0 | — | — | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 98.03% | 98.57% | 98.57% | 1074 ms | → 0.99x | 8 | 1h 20m | 12d ago | 14m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.74% | 98.74% | 1497 ms | ↓ 0.81x | 1 | 0s | 26d ago | 27m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.74% | 98.74% | 98.74% | 1243 ms | ↓ 0.77x | 12 | 13m | 9d ago | 7m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.49% | 93.85% | 93.85% | 1659 ms | ↓ 0.91x | 1 | 2h 59m | 25d ago | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1406 ms | ↓ 0.87x | 0 | — | — | 6m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.29% | 97.06% | 97.06% | 1724 ms | → 0.99x | 1 | 4h 31m | 14d ago | 9m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 100.00% | 98.36% | 98.36% | 98.36% | 2174 ms | ↓ 0.87x | 13 | 22m | 10d ago | 7m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.94% | 91.94% | 1484 ms | ↓ 0.81x | 0 | — | — | 28m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 1209 ms | → 0.96x | 1 | 0s | 14d ago | 6m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.82% | 99.82% | 854 ms | ↓ 0.75x | 1 | 0s | 13d ago | 9m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 506 ms | → 1.02x | 0 | — | — | 5m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.85% | 98.30% | 98.30% | 994 ms | ↓ 0.84x | 3 | 0s | 20d ago | 10m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.50% | 96.50% | 1309 ms | → 0.98x | 1 | 0s | 13d ago | 9m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.33% | 98.33% | 694 ms | ↓ 0.86x | 0 | — | — | 7m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 81.04% | 33.53% | 33.53% | 339 ms | ↓ 0.94x | 2 | 2d 16h | 29d ago | 21m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 600 ms | ↓ 0.92x | 1 | 0s | 16d ago | 9m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.82% | 98.82% | 825 ms | → 0.96x | 1 | 0s | 25d ago | 24m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.17% | 96.17% | 479 ms | → 0.95x | 0 | — | — | 11m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.65% | 84.93% | 84.93% | 1055 ms | ↓ 0.58x | 5 | 8m | 8d ago | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.44% | 97.44% | 168 ms | ↓ 0.43x | 0 | — | — | 8m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.15% | 78.04% | 78.04% | 1908 ms | ↓ 0.83x | 17 | 0s | 9d ago | 21m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 99.55% | 82.18% | 82.18% | 985 ms | ↓ 0.60x | 1 | 1h 36m | 29d ago | 10m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.45% | 79.99% | 79.99% | 1754 ms | ↑ 1.05x | 4 | 38m | 10d ago | 14m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.75% | 97.35% | 97.35% | 1140 ms | ↑ 1.22x | 1 | 1h 19m | 30d ago | 12m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 386 ms | ↓ 0.90x | 0 | — | — | 22m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 96.92% | 95.81% | 95.81% | 2869 ms | ↓ 0.87x | 42 | 9m | 9d ago | 27m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2443 ms | ↓ 0.82x | 1 | 0s | 20d ago | 22m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.85% | 98.85% | 106 ms | ↓ 0.26x | 0 | — | — | 11m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.79% | 99.79% | 1344 ms | ↓ 0.73x | 3 | 0s | 24d ago | 11m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.63% | 95.63% | 866 ms | ↓ 0.57x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.75% | 99.86% | 99.86% | 883 ms | ↓ 0.61x | 3 | 13m | 10d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1636 ms | ↓ 0.92x | 0 | — | — | 22m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 786 ms | → 1.00x | 0 | — | — | 5m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.43% | 99.42% | 99.42% | 2612 ms | ↓ 0.79x | 4 | 2h 15m | 16d ago | 11m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.75% | 99.65% | 99.65% | 928 ms | → 1.03x | 4 | 5m | 14d ago | 9m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 25.79% | 25.79% | 851 ms | ↓ 0.81x | 1 | 0s | 25d ago | 22m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.70% | 98.01% | 98.01% | 2514 ms | ↓ 0.92x | 1 | 1h 41m | 10d ago | 11m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1106 ms | → 0.97x | 0 | — | — | 7m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.57% | 97.34% | 97.34% | 1567 ms | ↑ 1.24x | 7 | 4h 1m | 11d ago | 15m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.88% | 99.88% | 99.88% | 655 ms | → 1.00x | 2 | 0s | 18d ago | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.22% | 96.22% | 863 ms | ↓ 0.87x | 1 | 0s | 26d ago | 13m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.75% | 99.75% | 99.75% | 1769 ms | → 0.97x | 2 | 19m | 15d ago | 5m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 51.82% | 51.82% | 754 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 2904 ms | ↓ 0.93x | 0 | — | — | 21m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.97% | 96.97% | 1223 ms | ↓ 0.64x | 0 | — | — | 21m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 99.01% | 99.01% | 1193 ms | ↓ 0.85x | 2 | 0s | 13d ago | 13m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 96.69% | 44.56% | 44.56% | 3079 ms | ↑ 1.12x | 9 | 1h 42m | 8d ago | 22m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.57% | 81.57% | 1833 ms | ↓ 0.93x | 0 | — | — | 14m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 63.59% | 63.59% | 1318 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 930 ms | ↓ 0.95x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.42% | 98.42% | 1548 ms | ↓ 0.86x | 0 | — | — | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.31% | 98.31% | 683 ms | ↓ 0.82x | 0 | — | — | 9m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.91% | 98.91% | 98.91% | 1923 ms | ↓ 0.87x | 12 | 10m | 24d ago | 7m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1358 ms | ↓ 0.82x | 0 | — | — | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.25% | 91.92% | 91.92% | 1591 ms | ↓ 0.74x | 14 | 23m | 24d ago | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 44.11% | 44.11% | 863 ms | ↓ 0.92x | 0 | — | — | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.00% | 74.00% | 802 ms | ↓ 0.80x | 1 | 0s | 14d ago | 14m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 92.99% | 92.99% | 92.99% | 482 ms | ↓ 0.60x | 5 | 7h 21m | 12d ago | 5m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1129 ms | → 1.00x | 0 | — | — | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.92% | 97.92% | 1698 ms | ↓ 0.78x | 0 | — | — | 12m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 49.58% | 49.58% | 1140 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 41.53% | 41.53% | 942 ms | ↓ 0.67x | 0 | — | — | 22m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.31% | 80.31% | 1368 ms | ↓ 0.89x | 1 | 0s | 13d ago | 14m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.60% | 58.92% | 58.92% | 744 ms | ↓ 0.73x | 4 | 20m | 25d ago | 14m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.91% | 97.91% | 790 ms | ↓ 0.68x | 1 | 0s | 12d ago | 15m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.85% | 57.32% | 57.32% | 1466 ms | ↓ 0.83x | 3 | 0s | 9d ago | 15m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 60.70% | 60.70% | 986 ms | ↓ 0.78x | 0 | — | — | 15m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2028 ms | ↓ 0.85x | 0 | — | — | 7m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.15% | 99.15% | 1423 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.06% | 89.06% | 1782 ms | ↓ 0.80x | 1 | 0s | 15d ago | 13m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 85.18% | 85.18% | 460 ms | ↓ 0.85x | 0 | — | — | 8m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.78% | 99.78% | 2139 ms | ↓ 0.83x | 3 | 0s | 24d ago | 11m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.55% | 99.55% | 738 ms | ↓ 0.66x | 1 | 0s | 17d ago | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.95% | 97.95% | 1989 ms | ↓ 0.91x | 0 | — | — | 14m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2787 ms | → 1.00x | 0 | — | — | 5m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 14.40% | 14.40% | 1319 ms | ↓ 0.84x | 1 | 0s | 23d ago | 22m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1853 ms | ↓ 0.86x | 3 | 0s | 8d ago | 26m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1313 ms | ↓ 0.91x | 0 | — | — | 5m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.05% | 98.05% | 2686 ms | ↓ 0.80x | 0 | — | — | 27m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.80% | 99.93% | 99.93% | 761 ms | ↓ 0.89x | 1 | 1h 16m | 9d ago | 22m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 71.39% | 71.39% | 1813 ms | ↓ 0.74x | 0 | — | — | 12m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.85% | 89.77% | 89.77% | 331 ms | → 1.00x | 3 | 0s | 8d ago | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 698 ms | → 0.98x | 1 | 0s | 22d ago | 7m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1006 ms | ↓ 0.86x | 0 | — | — | 27m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.61% | 99.61% | 1685 ms | ↓ 0.95x | 2 | 0s | 9d ago | 25m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.80% | 88.29% | 88.29% | 1891 ms | ↓ 0.93x | 2 | 19m | 20d ago | 14m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 74.86% | 74.86% | 1882 ms | ↓ 0.83x | 0 | — | — | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1003 ms | ↓ 0.89x | 0 | — | — | 5m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 80.15% | 80.15% | 1539 ms | ↓ 0.88x | 0 | — | — | 9m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1339 ms | ↓ 0.92x | 0 | — | — | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1074 ms | ↓ 0.90x | 0 | — | — | 9m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.98% | 98.98% | 456 ms | ↓ 0.64x | 0 | — | — | 15m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.58% | 98.58% | 1177 ms | ↓ 0.41x | 0 | — | — | 13m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.67% | 96.67% | 283 ms | ↓ 0.47x | 0 | — | — | 9m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1379 ms | ↓ 0.84x | 0 | — | — | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.42% | 96.18% | 96.18% | 1336 ms | ↓ 0.74x | 12 | 23m | 23d ago | 7m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 98.55% | 98.55% | 98.55% | 1181 ms | ↓ 0.67x | 12 | 18m | 9d ago | 7m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.19% | 96.64% | 96.64% | 251 ms | ↓ 0.56x | 14 | 3m | 25d ago | 8m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.65% | 98.65% | 106 ms | ↓ 0.53x | 0 | — | — | 11m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.92% | 98.92% | 678 ms | ↓ 0.82x | 0 | — | — | 16m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 14.30% | 14.30% | 2325 ms | ↓ 0.89x | 1 | 0s | 24d ago | 21m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 926 ms | → 1.00x | 0 | — | — | 5m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 18.00% | 18.00% | 825 ms | ↓ 0.77x | 0 | — | — | 15m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 599 ms | ↓ 0.82x | 0 | — | — | 28m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2208 ms | ↑ 2.00x | 1 | 0s | 11d ago | 26m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.65% | 99.19% | 99.19% | 178 ms | ↓ 0.84x | 3 | 47m | 14d ago | 11m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 519 ms | ↓ 0.67x | 0 | — | — | 26m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 100.00% | 96.77% | 79.25% | 79.25% | 117 ms | ↓ 0.86x | 6 | 4h 15m | 9d ago | 27m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.35% | 97.35% | 1125 ms | ↓ 0.81x | 0 | — | — | 8m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.85% | 97.85% | 1938 ms | ↓ 0.95x | 0 | — | — | 13m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 565 ms | ↑ 1.21x | 2 | 25m | 12d ago | 26m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.80% | 99.77% | 99.77% | 1265 ms | → 0.96x | 2 | 20m | 20d ago | 16m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1072 ms | ↓ 0.93x | 0 | — | — | 7m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.65% | 98.65% | 3931 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2733 ms | ↓ 0.93x | 0 | — | — | 26m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1223 ms | → 0.96x | 0 | — | — | 6m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.80% | 99.21% | 99.21% | 1292 ms | ↓ 0.93x | 4 | 0s | 12d ago | 25m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2110 ms | ↓ 0.90x | 1 | 0s | 20d ago | 21m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.31% | 99.31% | 1467 ms | ↓ 0.87x | 2 | 0s | 19d ago | 15m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 38.25% | 38.25% | 718 ms | → 0.98x | 0 | — | — | 26m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.30% | 98.30% | 3483 ms | ↓ 0.91x | 0 | — | — | 12m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1042 ms | → 0.96x | 1 | 0s | 14d ago | 26m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.07% | 13.48% | 13.48% | 753 ms | ↓ 0.93x | 38 | 34m | 8d ago | 26m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.05% | 99.24% | 99.24% | 742 ms | ↓ 0.81x | 13 | 9m | 12d ago | 26m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 952 ms | ↓ 0.76x | 1 | 0s | 21d ago | 21m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2373 ms | → 0.99x | 0 | — | — | 14m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.54% | 99.54% | 1480 ms | → 1.01x | 0 | — | — | 9m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.28% | 89.28% | 982 ms | ↓ 0.95x | 0 | — | — | 13m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 610 ms | ↓ 0.82x | 0 | — | — | 26m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 58.20% | 58.20% | 901 ms | ↓ 0.78x | 3 | 0s | 12d ago | 15m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 16.57% | 16.57% | 2210 ms | → 0.97x | 1 | 0s | 11d ago | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 57.05% | 78.50% | 78.50% | 268 ms | ↓ 0.48x | 3 | 4d 1h | 17d ago | 9m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2381 ms | → 1.00x | 0 | — | — | 26m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 98.18% | 98.57% | 98.57% | 1147 ms | ↓ 0.92x | 3 | 3h 43m | 10d ago | 7m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 16.30% | 16.30% | 1414 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.65% | 79.00% | 79.00% | 1608 ms | ↓ 0.84x | 2 | 50m | 25d ago | 27m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 77.08% | 77.08% | 77.08% | 1135 ms | → 0.98x | 1 | 5d 5h | 21d ago | 7m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 690 ms | ↓ 0.81x | 3 | 17m | 12d ago | 25m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1069 ms | ↓ 0.81x | 0 | — | — | 26m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.80% | 35.56% | 35.56% | 193 ms | ↓ 0.84x | 4 | 0s | 11d ago | 12m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 915 ms | ↓ 0.76x | 0 | — | — | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.98% | 98.98% | 2141 ms | → 0.98x | 0 | — | — | 25m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.08% | 98.08% | 1140 ms | ↓ 0.86x | 0 | — | — | 9m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.72% | 97.72% | 1877 ms | ↓ 0.88x | 0 | — | — | 10m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.75% | 95.68% | 95.68% | 414 ms | ↓ 0.48x | 2 | 31m | 13d ago | 9m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.90% | 14.39% | 14.39% | 2075 ms | → 1.04x | 2 | 0s | 26d ago | 25m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.13% | 67.13% | 864 ms | → 0.96x | 0 | — | — | 14m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1374 ms | ↓ 0.93x | 0 | — | — | 25m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1740 ms | ↓ 0.79x | 0 | — | — | 26m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.85% | 91.63% | 91.63% | 1369 ms | ↑ 1.08x | 3 | 0s | 13d ago | 13m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 81.10% | 31.32% | 31.32% | 1673 ms | ↓ 0.90x | 10 | 12h 33m | 16d ago | 15m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.30% | 44.34% | 44.34% | 676 ms | ↓ 0.75x | 4 | 7h 27m | 20d ago | 11m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.61% | 84.61% | 240 ms | ↓ 0.48x | 0 | — | — | 25m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.51% | 89.51% | 282 ms | ↓ 0.24x | 1 | 0s | 13d ago | 11m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.23% | 99.23% | 1902 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.85% | 64.85% | 852 ms | ↓ 0.81x | 0 | — | — | 15m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.42% | 96.42% | 943 ms | ↓ 0.92x | 0 | — | — | 15m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 16.19% | 16.19% | 961 ms | → 1.01x | 1 | 0s | 22d ago | 22m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.75% | 99.75% | 2263 ms | ↓ 0.81x | 1 | 0s | 26d ago | 26m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.24% | 99.24% | 99.24% | 1228 ms | ↓ 0.93x | 1 | 3h 38m | 16d ago | 7m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.18% | 55.18% | 518 ms | ↓ 0.60x | 0 | — | — | 15m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.90% | 99.18% | 99.18% | 3109 ms | → 0.95x | 2 | 0s | 12d ago | 21m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2661 ms | ↑ 1.08x | 0 | — | — | 26m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.17% | 99.17% | 1739 ms | ↓ 0.77x | 2 | 0s | 26d ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.18% | 98.57% | 98.57% | 1438 ms | → 1.02x | 1 | 11h 52m | 28d ago | 7m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.70% | 77.67% | 77.67% | 1202 ms | ↓ 0.90x | 1 | 1h 39m | 28d ago | 14m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1757 ms | ↓ 0.92x | 2 | 0s | 25d ago | 25m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1484 ms | ↓ 0.85x | 0 | — | — | 21m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2492 ms | ↓ 0.89x | 1 | 0s | 8d ago | 26m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.13% | 85.13% | 1790 ms | ↓ 0.95x | 0 | — | — | 14m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.87% | 95.87% | 1049 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 843 ms | → 0.95x | 0 | — | — | 25m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.36% | 98.36% | 420 ms | ↓ 0.48x | 1 | 0s | 19d ago | 11m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 17.03% | 17.03% | 362 ms | ↓ 0.44x | 0 | — | — | 15m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 712 ms | ↓ 0.92x | 0 | — | — | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.80% | 15.02% | 15.02% | 1150 ms | ↓ 0.91x | 4 | 0s | 9d ago | 15m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.43% | 58.43% | 1680 ms | ↓ 0.92x | 0 | — | — | 15m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.80% | 99.80% | 2739 ms | → 0.96x | 0 | — | — | 26m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.87% | 90.25% | 90.25% | 27 ms | ↓ 0.17x | 4 | 1d 5h | 18d ago | 9m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.80% | 98.92% | 98.92% | 740 ms | ↓ 0.80x | 1 | 7h 40m | 10d ago | 25m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 14.37% | 14.37% | 880 ms | → 1.00x | 0 | — | — | 25m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 906 ms | → 1.00x | 0 | — | — | 7m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.33% | 99.33% | 1174 ms | → 1.00x | 0 | — | — | 6m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 1343 ms | ↓ 0.67x | 1 | 0s | 25d ago | 7m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1096 ms | ↓ 0.91x | 0 | — | — | 7m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.85% | 17.16% | 17.16% | 1181 ms | ↓ 0.82x | 3 | 0s | 9d ago | 15m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.07% | 93.07% | 4325 ms | → 1.01x | 0 | — | — | 26m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.85% | 99.55% | 99.55% | 1716 ms | ↓ 0.95x | 2 | 10m | 14d ago | 25m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1689 ms | ↓ 0.78x | 0 | — | — | 13m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.85% | 98.76% | 98.76% | 1610 ms | ↓ 0.81x | 3 | 0s | 25d ago | 11m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.12% | 99.12% | 99.12% | 868 ms | ↓ 0.69x | 10 | 8m | 24d ago | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.10% | 99.10% | 1018 ms | ↓ 0.85x | 0 | — | — | 12m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.55% | 99.55% | 1361 ms | ↑ 1.07x | 1 | 0s | 8d ago | 26m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 859 ms | ↓ 0.82x | 0 | — | — | 25m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 391 ms | ↓ 0.74x | 0 | — | — | 28m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.60% | 91.70% | 91.70% | 981 ms | ↓ 0.84x | 1 | 2h 20m | 28d ago | 25m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.34% | 98.34% | 2432 ms | ↑ 1.18x | 0 | — | — | 9m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.65% | 96.53% | 96.53% | 2330 ms | ↓ 0.92x | 1 | 1h 60m | 28d ago | 26m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1975 ms | → 0.96x | 0 | — | — | 5m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.79% | 99.79% | 458 ms | ↓ 0.44x | 0 | — | — | 9m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.96% | 86.96% | 1313 ms | → 0.98x | 0 | — | — | 13m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.77% | 99.77% | 769 ms | ↓ 0.59x | 1 | 0s | 25d ago | 9m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1367 ms | → 0.98x | 0 | — | — | 26m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1125 ms | ↑ 1.12x | 0 | — | — | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 951 ms | ↑ 1.10x | 0 | — | — | 26m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 748 ms | → 1.00x | 0 | — | — | 24m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.66% | 83.66% | 1738 ms | ↓ 0.81x | 2 | 0s | 24d ago | 21m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.80% | 20.01% | 20.01% | 1617 ms | ↓ 0.85x | 4 | 0s | 13d ago | 28m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.77% | 98.77% | 1511 ms | ↓ 0.79x | 0 | — | — | 13m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.77% | 91.77% | 2765 ms | ↓ 0.78x | 0 | — | — | 28m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.93% | 99.93% | 99.93% | 682 ms | ↓ 0.93x | 1 | 0s | 23d ago | 5m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.20% | 96.51% | 96.51% | 619 ms | ↓ 0.67x | 2 | 2h 1m | 28d ago | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.71% | 98.71% | 522 ms | ↓ 0.95x | 0 | — | — | 14m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.40% | 98.65% | 98.65% | 1841 ms | ↓ 0.72x | 1 | 3h 60m | 18d ago | 24m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.80% | 97.49% | 97.49% | 1837 ms | ↓ 0.91x | 3 | 6m | 8d ago | 11m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.39% | 98.47% | 98.47% | 492 ms | ↓ 0.48x | 5 | 28m | 10d ago | 12m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.90% | 25.39% | 25.39% | 847 ms | → 1.04x | 2 | 0s | 10d ago | 24m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.10% | 98.10% | 1403 ms | → 0.99x | 0 | — | — | 13m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 980 ms | ↓ 0.80x | 0 | — | — | 24m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.26% | 87.26% | 2357 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.38% | 96.38% | 1549 ms | ↓ 0.87x | 0 | — | — | 15m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1342 ms | ↓ 0.84x | 0 | — | — | 24m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 14.37% | 14.37% | 1761 ms | ↓ 0.85x | 1 | 0s | 17d ago | 26m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 741 ms | ↓ 0.88x | 0 | — | — | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.65% | 96.29% | 96.29% | 1217 ms | ↓ 0.92x | 2 | 51m | 20d ago | 9m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 637 ms | ↓ 0.77x | 1 | 0s | 26d ago | 26m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 16.36% | 16.36% | 1651 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 14.19% | 14.19% | 1398 ms | ↓ 0.80x | 3 | 0s | 25d ago | 15m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1438 ms | → 1.00x | 0 | — | — | 26m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.30% | 99.63% | 99.63% | 2046 ms | ↓ 0.84x | 6 | 2h 50m | 10d ago | 24m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1864 ms | ↓ 0.87x | 0 | — | — | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 100.00% | 99.09% | 90.39% | 90.39% | 1344 ms | ↓ 0.85x | 18 | 0s | 11d ago | 13m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.23% | 98.23% | 991 ms | ↓ 0.92x | 0 | — | — | 9m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1555 ms | ↓ 0.85x | 2 | 0s | 15d ago | 21m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 2050 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.08% | 99.08% | 1447 ms | → 0.96x | 0 | — | — | 26m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 359 ms | ↓ 0.88x | 0 | — | — | 25m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.76% | 94.09% | 84.46% | 84.46% | 4550 ms | → 0.99x | 41 | 38m | 5d ago | 28m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.76% | 97.67% | 82.75% | 82.75% | 2497 ms | ↓ 0.79x | 43 | 2m | 23h ago | 28m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.76% | 99.95% | 99.30% | 99.30% | 2925 ms | ↓ 0.81x | 1 | 0s | 7d ago | 27m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.60% | 99.84% | 99.84% | 2753 ms | ↓ 0.82x | 8 | 0s | 6d ago | 27m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.70% | 99.70% | 2677 ms | ↓ 0.87x | 2 | 0s | 21h ago | 27m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.25% | 98.82% | 98.82% | 2225 ms | ↓ 0.81x | 13 | 3m | 9h ago | 27m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 98.90% | 97.75% | 97.75% | 3392 ms | → 1.00x | 22 | 0s | 3d ago | 26m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.65% | 99.71% | 99.71% | 426 ms | ↓ 0.86x | 7 | 0s | 2h ago | 26m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.76% | 99.65% | 86.62% | 86.62% | 1195 ms | ↓ 0.82x | 7 | 0s | 5d ago | 26m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 98.95% | 99.84% | 99.84% | 1683 ms | ↓ 0.76x | 21 | 0s | 2h ago | 26m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.76% | 99.90% | 88.57% | 88.57% | 1118 ms | ↓ 0.90x | 2 | 0s | 7d ago | 25m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.75% | 99.64% | 99.64% | 994 ms | → 1.04x | 4 | 5m | 2d ago | 25m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.76% | 99.45% | 84.55% | 84.55% | 2008 ms | → 1.02x | 11 | 0s | 2h ago | 26m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 189 ms | → 0.96x | 1 | 0s | 2h ago | 26m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.95% | 33.87% | 33.87% | 1482 ms | ↓ 0.69x | 1 | 0s | 5d ago | 26m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.76% | 99.90% | 52.24% | 52.24% | 1173 ms | ↓ 0.77x | 2 | 0s | 6d ago | 22m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2433 ms | ↓ 0.87x | 1 | 0s | 2d ago | 22m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1827 ms | ↓ 0.87x | 1 | 0s | 2d ago | 24m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.50% | 97.73% | 97.73% | 2528 ms | ↓ 0.87x | 8 | 5m | 50m ago | 21m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.83% | 99.83% | 3297 ms | ↓ 0.78x | 3 | 0s | 3d ago | 21m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.50% | 99.42% | 99.42% | 2356 ms | ↓ 0.75x | 19 | 12m | 50m ago | 21m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.37% | 92.37% | 900 ms | ↓ 0.80x | 1 | 0s | 3d ago | 15m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 68.50% | 44.34% | 44.34% | 3246 ms | → 0.99x | 2 | 4d 9h | 4d ago | 16m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 912 ms | ↓ 0.88x | 1 | 0s | 5d ago | 16m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 99.75% | 96.58% | 96.58% | 4023 ms | → 0.97x | 5 | 0s | 1d ago | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.75% | 99.65% | 96.51% | 96.51% | 2014 ms | ↓ 0.95x | 2 | 50m | 2d ago | 13m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.75% | 99.95% | 98.85% | 98.85% | 2356 ms | → 0.99x | 1 | 0s | 4d ago | 13m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.75% | 99.90% | 34.39% | 34.39% | 2033 ms | → 0.97x | 2 | 0s | 5d ago | 14m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.75% | 95.16% | 65.05% | 65.05% | 719 ms | ↓ 0.93x | 9 | 3h 9m | 6d ago | 14m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.75% | 99.85% | 77.97% | 77.97% | 1590 ms | ↓ 0.90x | 3 | 0s | 2d ago | 14m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.75% | 99.95% | 99.78% | 99.78% | 790 ms | ↓ 0.84x | 1 | 0s | 4d ago | 13m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.75% | 99.80% | 97.40% | 97.40% | 1329 ms | ↓ 0.71x | 3 | 7m | 4h ago | 8m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.70% | 97.31% | 97.31% | 1527 ms | ↓ 0.65x | 3 | 20m | 2d ago | 12m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.75% | 99.83% | 99.83% | 161 ms | ↓ 0.46x | 5 | 0s | 7d ago | 11m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.75% | 99.70% | 97.53% | 97.53% | 2475 ms | ↓ 0.78x | 6 | 0s | 2d ago | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.75% | 99.85% | 98.13% | 98.13% | 1803 ms | ↓ 0.89x | 3 | 0s | 7d ago | 11m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 99.49% | 97.05% | 97.05% | 1656 ms | ↓ 0.86x | 10 | 0s | 4d ago | 8m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 99.75% | 84.85% | 83.35% | 83.35% | 701 ms | ↓ 0.62x | 2 | 2d 2h | 23h ago | 11m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.75% | 99.60% | 90.17% | 90.17% | 871 ms | ↓ 0.69x | 5 | 15m | 19h ago | 9m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.75% | 99.95% | 99.82% | 99.82% | 1392 ms | ↓ 0.84x | 1 | 0s | 6d ago | 12m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.75% | 99.90% | 99.92% | 99.92% | 662 ms | ↓ 0.71x | 2 | 0s | 6h ago | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.75% | 99.95% | 52.00% | 52.00% | 3446 ms | ↓ 0.83x | 1 | 0s | 24h ago | 12m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.75% | 99.70% | 70.25% | 70.25% | 1049 ms | ↓ 0.87x | 6 | 0s | 6d ago | 12m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.90% | 97.59% | 97.59% | 1323 ms | ↓ 0.91x | 2 | 0s | 2d ago | 9m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.75% | 99.95% | 99.88% | 99.88% | 2273 ms | ↓ 0.93x | 1 | 0s | 7d ago | 11m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.75% | 99.94% | 99.94% | 99.94% | 1576 ms | ↓ 0.89x | 1 | 0s | 6d ago | 6m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 98.03% | 98.45% | 98.45% | 2114 ms | ↓ 0.78x | 2 | 6h 41m | 5d ago | 6m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.75% | 99.50% | 99.50% | 99.50% | 2517 ms | ↓ 0.90x | 6 | 8m | 6d ago | 6m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.75% | 99.76% | 99.76% | 99.76% | 1594 ms | ↑ 1.06x | 3 | 6m | 6d ago | 6m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.94% | 99.94% | 99.94% | 873 ms | ↓ 0.88x | 1 | 0s | 6d ago | 6m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.75% | 99.68% | 99.68% | 99.68% | 2212 ms | ↓ 0.89x | 4 | 5m | 6d ago | 6m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.75% | 98.48% | 98.48% | 98.48% | 1174 ms | ↓ 0.63x | 13 | 17m | 2d ago | 7m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.75% | 99.93% | 99.93% | 99.93% | 2350 ms | ↓ 0.92x | 1 | 0s | 6d ago | 6m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.75% | 99.37% | 99.37% | 99.37% | 932 ms | ↓ 0.93x | 10 | 0s | 4d ago | 6m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.75% | 99.94% | 99.94% | 99.94% | 764 ms | ↓ 0.95x | 1 | 0s | 6d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.75% | 99.81% | 99.81% | 99.81% | 1510 ms | ↓ 0.88x | 2 | 10m | 6d ago | 6m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.75% | 99.31% | 99.31% | 99.31% | 1275 ms | ↓ 0.82x | 9 | 5m | 5d ago | 7m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.75% | 99.94% | 99.94% | 99.94% | 456 ms | ↓ 0.88x | 1 | 0s | 6d ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.75% | 99.94% | 99.94% | 99.94% | 2677 ms | ↓ 0.94x | 1 | 0s | 6d ago | 6m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.75% | 99.87% | 99.87% | 99.87% | 921 ms | → 0.98x | 2 | 0s | 6d ago | 6m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.75% | 99.94% | 99.94% | 99.94% | 407 ms | ↓ 0.72x | 1 | 0s | 6d ago | 5m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.95% | 99.95% | 99.95% | 951 ms | ↓ 0.79x | 1 | 0s | 6d ago | 5m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.75% | 99.81% | 99.81% | 99.81% | 541 ms | ↓ 0.54x | 3 | 0s | 6d ago | 5m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.75% | 99.94% | 99.94% | 99.94% | 987 ms | ↓ 0.87x | 1 | 0s | 6d ago | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 856 ms | ↓ 0.80x | 1 | 0s | 6d ago | 5m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.75% | 99.95% | 99.95% | 99.95% | 3178 ms | ↓ 0.76x | 1 | 0s | 6d ago | 5m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.75% | 99.95% | 99.95% | 99.95% | 1043 ms | ↓ 0.75x | 1 | 0s | 6d ago | 5m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.75% | 99.95% | 99.95% | 99.95% | 538 ms | ↓ 0.63x | 1 | 0s | 6d ago | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.75% | 99.94% | 99.94% | 99.94% | 444 ms | ↓ 0.93x | 1 | 0s | 17h ago | 5m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.75% | 99.95% | 99.95% | 99.95% | 803 ms | ↓ 0.72x | 1 | 0s | 6d ago | 5m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.82% | 99.82% | 99.82% | 844 ms | ↓ 0.76x | 3 | 0s | 6d ago | 5m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.93% | 99.93% | 99.93% | 358 ms | ↓ 0.59x | 1 | 0s | 6d ago | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.94% | 99.94% | 99.94% | 293 ms | ↓ 0.65x | 1 | 0s | 6d ago | 5m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.69% | 99.69% | 99.69% | 99.69% | 1427 ms | → 1.00x | 1 | 0s | 4d ago | 5m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.62% | 99.62% | 99.62% | 99.62% | 423 ms | → 1.00x | 1 | 0s | 3d ago | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.70% | 98.99% | 98.99% | 3029 ms | → 1.00x | 2 | 45m | 3d ago | 26m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.52% | 99.80% | 99.72% | 99.72% | 2481 ms | ↓ 0.90x | 4 | 0s | 5d ago | 26m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.52% | 99.65% | 99.83% | 99.83% | 116 ms | ↓ 0.60x | 5 | 12m | 3d ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.52% | 98.10% | 98.69% | 98.69% | 2892 ms | ↓ 0.94x | 32 | 5m | 3d ago | 25m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.52% | 98.71% | 59.73% | 59.73% | 2600 ms | ↓ 0.89x | 24 | 2m | 2h ago | 26m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.51% | 99.90% | 99.87% | 99.87% | 1697 ms | ↓ 0.89x | 1 | 30m | 5d ago | 13m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 99.70% | 98.09% | 98.09% | 1259 ms | ↓ 0.65x | 6 | 0s | 2d ago | 11m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.51% | 93.53% | 92.01% | 92.01% | 2135 ms | ↓ 0.92x | 10 | 4h 14m | 2d ago | 11m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.51% | 98.99% | 39.78% | 39.78% | 1009 ms | ↓ 0.69x | 16 | 5m | 4d ago | 11m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.51% | 99.82% | 99.82% | 99.82% | 1716 ms | ↓ 0.91x | 3 | 0s | 2d ago | 6m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.51% | 99.24% | 99.24% | 99.24% | 1068 ms | ↓ 0.92x | 3 | 1h 4m | 1d ago | 6m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.27% | 97.63% | 85.50% | 85.50% | 4672 ms | → 0.97x | 42 | 2m | 6d ago | 15m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.26% | 99.85% | 78.85% | 78.85% | 1682 ms | ↓ 0.89x | 1 | 51m | 6d ago | 14m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.26% | 99.85% | 98.00% | 98.00% | 2240 ms | → 0.96x | 1 | 60m | 7d ago | 11m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.26% | 98.48% | 95.87% | 95.87% | 1030 ms | ↓ 0.90x | 2 | 4h 44m | 1d ago | 9m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.26% | 99.28% | 99.28% | 99.28% | 1694 ms | ↓ 0.95x | 3 | 1h 3m | 3d ago | 6m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.25% | 99.25% | 99.25% | 99.25% | 4388 ms | → 1.00x | 2 | 0s | 17h ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.04% | 98.51% | 92.05% | 92.05% | 948 ms | ↓ 0.95x | 8 | 55m | 4h ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.03% | 99.20% | 96.42% | 96.42% | 1174 ms | ↓ 0.91x | 7 | 27m | 1d ago | 22m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 99.03% | 86.37% | 12.71% | 12.71% | 1843 ms | ↓ 0.78x | 213 | 6m | 16h ago | 22m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.02% | 98.08% | 89.98% | 89.98% | 2743 ms | ↓ 0.91x | 31 | 5m | 2d ago | 11m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.02% | 97.32% | 84.16% | 84.16% | 4621 ms | → 0.96x | 52 | 21s | 5h ago | 12m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.01% | 99.70% | 98.68% | 98.68% | 1011 ms | ↓ 0.83x | 2 | 44m | 5d ago | 7m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (44)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.79% | 96.44% | 73.03% | 73.03% | 4361 ms | → 0.97x | 61 | 4m | 20h ago | 22m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.76% | 98.61% | 98.61% | 98.61% | 1397 ms | ↑ 1.05x | 20 | 2m | 3d ago | 5m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.56% | 97.07% | 98.10% | 98.10% | 4555 ms | → 0.97x | 52 | 3m | 4d ago | 28m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.55% | 94.09% | 66.72% | 66.72% | 4019 ms | ↓ 0.85x | 46 | 32m | 19h ago | 22m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.54% | 80.64% | 12.57% | 12.57% | 2570 ms | → 0.99x | 10 | 12h 42m | 1h ago | 21m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.54% | 94.98% | 13.87% | 13.87% | 3252 ms | ↓ 0.81x | 68 | 10m | 50m ago | 21m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.53% | 99.70% | 99.71% | 99.71% | 2075 ms | ↓ 0.74x | 1 | 2h 18m | 5d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.52% | 99.52% | 99.52% | 99.52% | 610 ms | ↓ 0.67x | 8 | 0s | 12h ago | 6m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.52% | 95.71% | 95.71% | 95.71% | 853 ms | ↑ 1.15x | 10 | 2h 8m | 13h ago | 7m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.30% | 99.40% | 99.69% | 99.69% | 2782 ms | ↓ 0.90x | 10 | 4m | 17h ago | 21m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.28% | 97.53% | 63.39% | 63.39% | 4588 ms | → 0.97x | 44 | 3m | 4h ago | 14m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.28% | 99.49% | 96.52% | 96.52% | 1955 ms | ↓ 0.92x | 6 | 16m | 3d ago | 9m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.03% | 95.70% | 83.53% | 83.53% | 4744 ms | → 1.01x | 49 | 17m | 2d ago | 11m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.83% | 96.55% | 84.92% | 84.92% | 4494 ms | → 1.00x | 62 | 3m | 2h ago | 24m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.60% | 99.25% | 99.42% | 99.42% | 2507 ms | ↓ 0.83x | 8 | 24m | 6d ago | 27m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.57% | 94.18% | 98.64% | 98.64% | 3456 ms | ↓ 0.85x | 70 | 13m | 50m ago | 21m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.55% | 99.50% | 98.25% | 98.25% | 1226 ms | → 0.96x | 1 | 4h 17m | 6d ago | 13m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.34% | 97.40% | 98.96% | 98.96% | 3396 ms | ↓ 0.94x | 16 | 48m | 1d ago | 24m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.30% | 70.09% | 83.57% | 83.57% | 1288 ms | ↓ 0.85x | 3 | 2d 18h | 2d ago | 9m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.10% | 97.35% | 99.13% | 99.13% | 3363 ms | → 0.96x | 16 | 49m | 17h ago | 24m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.09% | 99.00% | 98.94% | 98.94% | 1530 ms | ↓ 0.75x | 15 | 8m | 3d ago | 21m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 96.80% | 98.04% | 98.04% | 98.04% | 1587 ms | ↓ 0.85x | 17 | 20m | 23h ago | 6m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 96.31% | 94.29% | 81.10% | 81.10% | 4661 ms | → 0.97x | 99 | 3m | 15h ago | 11m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.08% | 94.60% | 80.62% | 80.62% | 4812 ms | → 1.01x | 90 | 5m | 15h ago | 13m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 95.81% | 98.74% | 99.01% | 99.01% | 183 ms | ↓ 0.27x | 8 | 45m | 1d ago | 7m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.85% | 94.55% | 70.34% | 70.34% | 1574 ms | ↓ 0.89x | 17 | 1h 48m | 4d ago | 14m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 93.84% | 94.02% | 94.02% | 94.02% | 1063 ms | ↑ 1.06x | 3 | 11h 15m | 5d ago | 7m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 93.80% | 95.83% | 95.83% | 95.83% | 1004 ms | ↓ 0.73x | 40 | 17m | 6d ago | 5m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 93.35% | 95.19% | 96.19% | 96.19% | 3397 ms | → 0.99x | 16 | 1h 44m | 15h ago | 7m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 93.24% | 96.30% | 13.85% | 13.85% | 2029 ms | → 0.97x | 68 | 2m | 13h ago | 24m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.14% | 97.63% | 94.91% | 94.91% | 1562 ms | → 1.04x | 3 | 5h 26m | 2d ago | 9m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 91.93% | 97.93% | 14.23% | 14.23% | 2303 ms | ↓ 0.94x | 9 | 1h 21m | 3d ago | 15m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 91.93% | 88.36% | 15.19% | 15.19% | 4456 ms | ↓ 0.92x | 182 | 7m | 12h ago | 15m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.32% | 96.98% | 96.98% | 96.98% | 407 ms | ↓ 0.35x | 3 | 5h 59m | 5d ago | 5m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 86.76% | 97.27% | 95.35% | 95.35% | 2299 ms | ↓ 0.95x | 4 | 4h 46m | 1d ago | 13m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 81.09% | 82.18% | 82.18% | 82.18% | 754 ms | → 1.02x | 51 | 21m | 3d ago | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 79.28% | 29.43% | 18.98% | 18.98% | 3429 ms | → 1.01x | 67 | 6h 53m | 12h ago | 26m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 70.69% | 72.79% | 72.79% | 72.79% | 2471 ms | ↓ 0.84x | 10 | 16h 47m | 3d ago | 6m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 70.29% | 82.08% | 51.02% | 51.02% | 2508 ms | ↓ 0.82x | 3 | 1d 21h | 2h ago | 22m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 58.23% | 75.39% | 86.45% | 86.45% | 641 ms | ↓ 0.55x | 2 | 4d | 11d ago | 9m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 55.28% | 90.51% | 96.55% | 96.55% | 3004 ms | ↓ 0.83x | 8 | 9h 6m | 5d ago | 11m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 14.46% | 2.99% | 7.14% | 7.14% | 2873 ms | → 1.00x | 1 | 28d 23h | 30d ago | 26m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 11.52% | 2.37% | 29.70% | 29.70% | 669 ms | → 1.00x | 1 | 29d 5h | 30d ago | 14m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.95% | 10.17% | 10.17% | 10.17% | 3163 ms | ↓ 0.87x | 149 | 3h 20m | 6h ago | 5m ago |

</details>

<details open>
<summary><strong>🔴 Down (225)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.58% | 99.58% | 99.58% | 780 ms | → 0.96x | 7 | 0s | 6m ago | 6m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 97.30% | 99.34% | 96.48% | 96.48% | 2742 ms | ↓ 0.94x | 6 | 27m | 1h ago | 8m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 97.02% | 99.34% | 99.34% | 99.34% | 469 ms | ↓ 0.63x | 1 | 5h 24m | 5h ago | 5m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 95.41% | 98.40% | 26.81% | 26.81% | 1366 ms | ↑ 1.11x | 7 | 1h 26m | 7h ago | 23m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 93.49% | 53.09% | 5.66% | 5.66% | 1465 ms | → 0.96x | 5 | 2d 15h | 7h ago | 25m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 93.24% | 96.25% | 42.98% | 42.98% | 1106 ms | → 0.96x | 17 | 1h 17m | 7h ago | 24m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.47% | 88.63% | 48.88% | 48.88% | 4150 ms | → 1.01x | 186 | 5m | 9m ago | 9m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 75.18% | 92.12% | 89.96% | 89.96% | 2088 ms | ↓ 0.83x | 2 | 1d 5h | 2d ago | 10m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 70.83% | 67.39% | 18.27% | 18.27% | 4726 ms | → 1.02x | 372 | 17m | 1h ago | 14m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 69.25% | 63.75% | 61.99% | 61.99% | 4830 ms | → 0.99x | 397 | 18m | 52m ago | 22m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 67.32% | 90.90% | 94.31% | 94.31% | 1440 ms | ↓ 0.86x | 5 | 13h 30m | 2d ago | 9m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 56.04% | 90.84% | 97.10% | 97.10% | 1984 ms | ↓ 0.83x | 6 | 11h 55m | 3d ago | 22m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 29.98% | 46.64% | 29.37% | 29.37% | 1304 ms | → 1.00x | 5 | 3d 3h | 4d ago | 11m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 26.54% | 13.08% | 28.18% | 28.18% | 3229 ms | → 0.98x | 31 | 19h 28m | 4d ago | 12m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 24.08% | 84.18% | 63.05% | 63.05% | 1842 ms | ↓ 0.92x | 5 | 1d 1h | 5d ago | 10m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 20.83% | 83.66% | 47.39% | 47.39% | 326 ms | ↓ 0.54x | 2 | 2d 17h | 5d ago | 14m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 17.35% | 75.91% | 97.11% | 97.11% | 550 ms | ↓ 0.75x | 17 | 10h 36m | 6d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 17.24% | 67.17% | 76.57% | 76.57% | 2184 ms | → 1.02x | 12 | 20h 8m | 6d ago | 7m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 16.22% | 78.93% | 89.75% | 89.75% | 706 ms | ↓ 0.28x | 2 | 3d 11h | 6d ago | 10m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 15.23% | 79.74% | 48.92% | 48.92% | 1672 ms | → 0.99x | 19 | 8h 6m | 6d ago | 11m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 11.03% | 81.47% | 87.67% | 87.67% | 2346 ms | ↓ 0.77x | 3 | 2d 2h | 6d ago | 13m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 6.51% | 3.24% | 70.79% | 70.79% | 1014 ms | → 0.95x | 4 | 7d 5h | 6d ago | 25m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 2.64% | 79.87% | 61.70% | 61.70% | 757 ms | ↓ 0.93x | 1 | 6d 18h | 7d ago | 27m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.92% | 1.64% | 62.30% | 62.30% | 3158 ms | → 0.96x | 27 | 1d 2h | 1d ago | 28m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 84.90% | 84.90% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 70.32% | 70.32% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 75.62% | 75.62% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 73.27% | 73.36% | 73.36% | — | — | 16 | 13h 14m | 9d ago | 5m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 62.88% | 89.26% | 89.26% | — | — | 7 | 1d 17h | 12d ago | 12m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 68.56% | 68.56% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.82% | 5.82% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.84% | 12.84% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 27.39% | 67.79% | 67.79% | — | — | 3 | 7d 11h | 20d ago | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 15m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.48% | 3.48% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 46.54% | 79.13% | 79.13% | — | — | 2 | 8d 11h | 17d ago | 10m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 85.17% | 85.17% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.38% | 37.38% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 25.72% | 63.71% | 63.71% | — | — | 3 | 7d 14h | 23d ago | 10m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 57.11% | 95.11% | 95.11% | — | — | 4 | 3d 11h | 14d ago | 27m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.98% | 24.98% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 76.42% | 76.42% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 56.05% | 56.05% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.15% | 31.15% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 85.57% | 85.57% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 64.45% | 64.45% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 79.04% | 79.04% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.16% | 16.16% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 52.48% | 52.48% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 36.49% | 36.49% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 66.50% | 85.93% | 85.93% | — | — | 2 | 5d 11h | 11d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.63% | 3.63% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 85.77% | 85.77% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 56.07% | 56.07% | 56.07% | — | — | 6 | 1d 22h | 12d ago | 5m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 53.26% | 53.26% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.11% | 2.11% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 68.52% | 93.98% | 93.98% | — | — | 13 | 18h 44m | 10d ago | 24m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 42.12% | 83.97% | 83.97% | — | — | 3 | 6d 1h | 18d ago | 12m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 37.52% | 37.52% | 37.52% | — | — | 1 | 16d 16h | 17d ago | 6m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 47.43% | 68.84% | 68.84% | — | — | 2 | 8d 8h | 17d ago | 14m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 35.54% | 35.54% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.04% | 56.04% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.61% | 25.61% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.64% | 30.64% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 58.72% | 58.72% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 64.06% | 26.20% | 26.20% | — | — | 1 | 11d 21h | 12d ago | 13m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.86% | 5.86% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 67.56% | 67.56% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 85.51% | 85.51% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.68% | 7.68% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 81.65% | 81.65% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 28.73% | 84.25% | 84.25% | — | — | 3 | 7d 6h | 17d ago | 26m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 65.35% | 36.14% | 36.14% | — | — | 21 | 12h 45m | 11d ago | 12m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 12h | 24d ago | 6m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 15m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 30.24% | 30.24% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 54.32% | 54.32% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 42.30% | 58.51% | 58.51% | — | — | 3 | 6d 1h | 18d ago | 13m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 14.38% | 13.16% | 13.16% | — | — | 1 | 21d 6h | 21d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 46.59% | 75.81% | 75.81% | — | — | 2 | 8d 11h | 17d ago | 11m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 78.70% | 78.70% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.98% | 47.98% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.60% | 43.60% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 47.00% | 47.00% | 47.00% | — | — | 5 | 2d 18h | 14d ago | 5m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 85.52% | 85.52% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.41% | 60.41% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.12% | 40.12% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 62.83% | 89.27% | 89.27% | — | — | 7 | 1d 18h | 12d ago | 11m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 16m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.73% | 32.73% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.65% | 2.65% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 46.36% | 85.75% | 85.75% | — | — | 2 | 8d 11h | 17d ago | 25m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.88% | 42.88% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 85.49% | 85.49% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.12% | 34.12% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 85.41% | 85.41% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 30.17% | 64.81% | 64.81% | — | — | 2 | 10d 19h | 22d ago | 9m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 28.36% | 28.36% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 47.13% | 47.13% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 83.00% | 83.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 70.94% | 70.94% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 31.58% | 35.47% | 35.47% | — | — | 6 | 3d 13h | 21d ago | 9m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 81.43% | 81.43% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 57.33% | 57.33% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.39% | 3.39% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.55% | 44.55% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 79.79% | 79.79% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 60.88% | 60.88% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 45.07% | 57.95% | 57.95% | — | — | 26 | 15h 43m | 17d ago | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 30.84% | 71.69% | 71.69% | — | — | 37 | 13h 34m | 21d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 35.88% | 91.71% | 91.71% | — | — | 1 | 19d 23h | 20d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.20% | 29.20% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 11.79% | 11.79% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.52% | 13.52% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 8.74% | 31.01% | 31.01% | — | — | 2 | 13d 19h | 27d ago | 9m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.87% | 24.87% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 11h | 25d ago | 6m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 74.16% | 54.65% | 54.65% | — | — | 14 | 14h 21m | 8d ago | 24m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 62.12% | 62.12% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 13.40% | 13.40% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.02% | 18.02% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.09% | 51.09% | — | — | 1 | 29d 24h | 30d ago | 22m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 38.32% | 38.32% | 38.32% | — | — | 1 | 15d 19h | 16d ago | 7m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 6m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.93% | 56.93% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 29.12% | 25.72% | 25.72% | — | — | 16 | 1d 9h | 22d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 41.66% | 41.66% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 55.71% | 55.71% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.73% | 5.73% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 9m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 53.94% | 93.19% | 93.19% | — | — | 1 | 14d 19h | 15d ago | 25m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 85.62% | 85.62% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 84.50% | 84.50% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 15m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 65.90% | 65.90% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 77.38% | 77.38% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 84.35% | 84.35% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.24% | 20.24% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 7.05% | 4.20% | 4.20% | — | — | 2 | 14d | 8d ago | 22m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.29% | 35.29% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.07% | 8.07% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 67.78% | 67.78% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 51.64% | 51.64% | 51.64% | — | — | 2 | 6d 8h | 13d ago | 7m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 11h | 24d ago | 16m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 69.77% | 69.77% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 35.26% | 53.50% | 53.50% | — | — | 12 | 1d 16h | 20d ago | 7m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 8.28% | 8.28% | — | — | 1 | 24d 11h | 24d ago | 7m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 60.19% | 68.76% | 68.76% | — | — | 14 | 22h | 13d ago | 7m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 42.78% | 42.78% | — | — | 1 | 29d 24h | 30d ago | 10m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 29.02% | 29.02% | — | — | 1 | 25d 11h | 25d ago | 9m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.62% | 13.62% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.54% | 18.54% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 20.96% | 20.96% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 31.31% | 46.09% | 46.09% | — | — | 1 | 21d 7h | 21d ago | 7m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 32.74% | 10.72% | 10.72% | — | — | 324 | 1h 11m | 11d ago | 14m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 14.46% | 14.46% | 14.46% | — | — | 8 | 2d 18h | 22d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.20% | 1.20% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.68% | 6.68% | — | — | 1 | 29d 24h | 30d ago | 8m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.91% | 7.91% | — | — | 1 | 29d 24h | 30d ago | 7m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.53% | 51.53% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 56.15% | 65.58% | 65.58% | — | — | 2 | 7d 2h | 14d ago | 6m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 85.58% | 85.58% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 75.09% | 86.38% | 86.38% | — | — | 2 | 4d 5h | 8d ago | 10m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 53.44% | 53.44% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 85.77% | 85.77% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 39.74% | 67.70% | 67.70% | — | — | 2 | 9d 10h | 19d ago | 8m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.73% | 42.73% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.02% | 3.02% | 3.02% | — | — | 1 | 24d 18h | 25d ago | 7m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 60.24% | 20.92% | 20.92% | — | — | 4 | 3d 6h | 13d ago | 14m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 83.43% | 83.43% | — | — | 1 | 29d 24h | 30d ago | 15m ago |

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
