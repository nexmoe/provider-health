# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 337 🟢 operational · 54 🟡 degraded · 225 🔴 down · 0 ⚫ unknown

_Updated 2026-06-01 08:38 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (337)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.23% | 93.23% | 696 ms | → 0.98x | 0 | — | — | 15m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.33% | 97.33% | 2462 ms | → 1.02x | 0 | — | — | 26m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 50.52% | 50.52% | 1586 ms | → 0.99x | 2 | 0s | 20d ago | 13m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1140 ms | → 1.03x | 0 | — | — | 8m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.76% | 98.76% | 1542 ms | ↓ 0.85x | 1 | 0s | 30d ago | 28m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.35% | 99.35% | 3054 ms | ↓ 0.85x | 1 | 0s | 11d ago | 28m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.90% | 98.90% | 98.90% | 1708 ms | ↓ 0.90x | 12 | 13m | 13d ago | 9m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.48% | 94.18% | 94.18% | 1859 ms | → 0.98x | 1 | 2h 59m | 29d ago | 10m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1489 ms | ↓ 0.90x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.27% | 97.22% | 97.22% | 1989 ms | ↑ 1.05x | 1 | 4h 31m | 18d ago | 10m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.04% | 92.04% | 1804 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1422 ms | → 1.03x | 1 | 0s | 18d ago | 9m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.83% | 99.83% | 879 ms | ↓ 0.92x | 1 | 0s | 17d ago | 10m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 670 ms | ↑ 1.13x | 0 | — | — | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.90% | 98.38% | 98.38% | 973 ms | ↓ 0.93x | 2 | 0s | 24d ago | 11m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.72% | 96.72% | 1498 ms | → 1.03x | 1 | 0s | 17d ago | 10m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.48% | 98.48% | 857 ms | ↑ 1.07x | 0 | — | — | 9m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 95.05% | 34.36% | 34.36% | 506 ms | → 0.98x | 1 | 1d 8h | 30d ago | 22m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 585 ms | ↓ 0.92x | 1 | 0s | 20d ago | 10m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 511 ms | ↓ 0.81x | 1 | 0s | 10d ago | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.30% | 96.30% | 485 ms | → 0.96x | 0 | — | — | 13m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1581 ms | ↓ 0.90x | 1 | 0s | 10d ago | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.84% | 98.09% | 98.09% | 2476 ms | → 1.01x | 1 | 60m | 11d ago | 12m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.63% | 97.63% | 189 ms | ↓ 0.71x | 0 | — | — | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 83.02% | 83.02% | 1078 ms | ↓ 0.70x | 0 | — | — | 11m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.96% | 99.96% | 1071 ms | ↓ 0.92x | 1 | 0s | 10d ago | 8m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.48% | 80.43% | 80.43% | 1598 ms | → 1.03x | 3 | 50m | 14d ago | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.43% | 97.43% | 1194 ms | ↑ 1.34x | 0 | — | — | 13m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 410 ms | → 0.98x | 0 | — | — | 23m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 97.49% | 95.86% | 95.86% | 2656 ms | ↓ 0.90x | 35 | 8m | 13d ago | 28m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2536 ms | ↓ 0.88x | 1 | 0s | 24d ago | 23m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.89% | 98.89% | 178 ms | ↓ 0.60x | 0 | — | — | 13m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.84% | 99.80% | 99.80% | 1714 ms | ↓ 0.83x | 3 | 0s | 28d ago | 13m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.79% | 95.79% | 1068 ms | ↓ 0.70x | 0 | — | — | 13m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.84% | 99.84% | 99.84% | 579 ms | ↓ 0.60x | 3 | 0s | 10d ago | 8m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.97% | 98.58% | 98.58% | 2593 ms | ↓ 0.94x | 2 | 6h 41m | 9d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.74% | 99.87% | 99.87% | 994 ms | ↓ 0.82x | 3 | 13m | 14d ago | 10m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.51% | 99.51% | 1776 ms | → 0.97x | 0 | — | — | 23m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.85% | 99.84% | 99.84% | 3523 ms | ↓ 0.85x | 3 | 0s | 7d ago | 22m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.39% | 99.45% | 99.45% | 2984 ms | ↓ 0.84x | 4 | 2h 15m | 20d ago | 12m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.84% | 99.67% | 99.67% | 963 ms | ↑ 1.13x | 2 | 9m | 18d ago | 10m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 26.71% | 26.71% | 1006 ms | ↓ 0.90x | 1 | 0s | 29d ago | 23m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1284 ms | → 1.01x | 1 | 0s | 10d ago | 8m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | → 1.01x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.65% | 97.37% | 97.37% | 1744 ms | ↑ 1.25x | 6 | 4h 32m | 15d ago | 17m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.33% | 96.33% | 848 ms | ↓ 0.94x | 0 | — | — | 14m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.78% | 99.78% | 99.78% | 1904 ms | → 1.03x | 2 | 19m | 19d ago | 8m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.48% | 52.48% | 804 ms | → 0.98x | 0 | — | — | 16m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1592 ms | → 1.00x | 0 | — | — | 8m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.56% | 99.56% | 99.56% | 2528 ms | → 0.95x | 6 | 8m | 10d ago | 9m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1052 ms | → 1.00x | 1 | 0s | 10d ago | 8m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.62% | 99.62% | 3386 ms | → 1.00x | 0 | — | — | 22m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.01% | 97.01% | 1488 ms | ↓ 0.79x | 0 | — | — | 22m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.12% | 45.29% | 45.29% | 2636 ms | ↑ 1.06x | 9 | 1h 42m | 12d ago | 23m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.74% | 98.85% | 98.85% | 1441 ms | → 0.96x | 2 | 44m | 9d ago | 9m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.98% | 81.98% | 1744 ms | → 0.95x | 0 | — | — | 15m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1136 ms | → 1.04x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.48% | 98.48% | 1775 ms | ↓ 0.94x | 0 | — | — | 12m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 3472 ms | ↓ 0.87x | 1 | 0s | 10d ago | 8m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.39% | 98.39% | 697 ms | ↓ 0.94x | 0 | — | — | 10m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.79% | 99.83% | 99.83% | 250 ms | ↓ 0.70x | 4 | 0s | 11d ago | 13m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 99.05% | 99.05% | 99.05% | 2400 ms | → 0.98x | 12 | 10m | 28d ago | 9m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.47% | 92.87% | 92.87% | 2124 ms | ↓ 0.85x | 14 | 23m | 28d ago | 9m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 74.70% | 87.16% | 87.16% | 662 ms | ↓ 0.66x | 2 | 4d | 16d ago | 10m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 44.88% | 44.88% | 964 ms | → 0.97x | 0 | — | — | 16m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.53% | 74.53% | 790 ms | ↓ 0.90x | 1 | 0s | 18d ago | 15m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 93.94% | 93.94% | 93.94% | 521 ms | ↓ 0.68x | 5 | 7h 21m | 16d ago | 8m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 52.83% | 52.83% | 1307 ms | ↓ 0.83x | 1 | 0s | 11d ago | 23m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1641 ms | → 1.04x | 0 | — | — | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.99% | 97.99% | 1651 ms | ↓ 0.75x | 0 | — | — | 13m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.96% | 99.96% | 1313 ms | ↓ 0.90x | 1 | 0s | 10d ago | 8m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2227 ms | → 1.00x | 0 | — | — | 8m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.74% | 80.74% | 1285 ms | ↓ 0.93x | 1 | 0s | 17d ago | 15m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.93% | 97.93% | 803 ms | ↓ 0.82x | 1 | 0s | 17d ago | 16m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.79% | 99.79% | 99.79% | 1627 ms | ↑ 1.08x | 3 | 6m | 10d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.84% | 58.01% | 58.01% | 1613 ms | ↓ 0.91x | 3 | 0s | 13d ago | 16m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.33% | 61.33% | 1085 ms | ↓ 0.91x | 0 | — | — | 16m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2499 ms | → 0.97x | 0 | — | — | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.17% | 99.17% | 1375 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.32% | 89.32% | 1715 ms | ↓ 0.88x | 1 | 0s | 19d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 86.85% | 86.85% | 489 ms | ↓ 0.90x | 0 | — | — | 10m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.84% | 99.78% | 99.78% | 2287 ms | ↓ 0.91x | 3 | 0s | 28d ago | 12m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.99% | 97.99% | 1818 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 15.47% | 15.47% | 1266 ms | ↓ 0.55x | 1 | 0s | 27d ago | 23m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1882 ms | → 0.97x | 3 | 0s | 12d ago | 26m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1719 ms | → 1.05x | 0 | — | — | 8m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.08% | 98.08% | 2616 ms | ↓ 0.82x | 0 | — | — | 28m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.79% | 99.93% | 99.93% | 792 ms | → 0.95x | 1 | 1h 16m | 13d ago | 23m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 72.28% | 72.28% | 1610 ms | ↓ 0.67x | 0 | — | — | 13m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.84% | 90.44% | 90.44% | 364 ms | ↑ 1.06x | 3 | 0s | 12d ago | 10m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.35% | 97.35% | 97.35% | 535 ms | ↓ 0.52x | 3 | 5h 59m | 9d ago | 8m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 803 ms | → 1.04x | 1 | 0s | 26d ago | 9m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1172 ms | ↓ 0.93x | 0 | — | — | 28m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.62% | 99.62% | 1704 ms | → 1.01x | 2 | 0s | 13d ago | 26m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.84% | 88.56% | 88.56% | 1938 ms | ↓ 0.93x | 1 | 39m | 24d ago | 15m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 75.80% | 75.80% | 2111 ms | ↓ 0.87x | 0 | — | — | 12m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 984 ms | ↓ 0.76x | 0 | — | — | 8m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 81.26% | 81.26% | 1601 ms | ↓ 0.95x | 0 | — | — | 10m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1503 ms | → 0.99x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1143 ms | → 0.99x | 0 | — | — | 10m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.00% | 99.00% | 466 ms | ↓ 0.82x | 0 | — | — | 16m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.85% | 96.85% | 328 ms | ↓ 0.67x | 0 | — | — | 10m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 1065 ms | → 1.01x | 1 | 0s | 10d ago | 9m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.96% | 99.96% | 714 ms | ↓ 0.88x | 1 | 0s | 10d ago | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1742 ms | → 0.98x | 0 | — | — | 8m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.64% | 86.79% | 86.79% | 1248 ms | ↓ 0.89x | 7 | 0s | 9d ago | 26m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.63% | 96.66% | 96.66% | 1637 ms | ↓ 0.86x | 12 | 23m | 27d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.27% | 96.90% | 96.90% | 255 ms | ↓ 0.75x | 12 | 3m | 29d ago | 10m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.70% | 98.70% | 131 ms | ↓ 0.70x | 0 | — | — | 13m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.93% | 98.93% | 764 ms | → 0.95x | 0 | — | — | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 15.37% | 15.37% | 2349 ms | → 0.96x | 1 | 0s | 28d ago | 22m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.35% | 96.35% | 96.35% | 1254 ms | ↓ 0.82x | 40 | 17m | 10d ago | 8m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 19.12% | 19.12% | 821 ms | ↓ 0.82x | 0 | — | — | 16m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 596 ms | ↓ 0.90x | 0 | — | — | 29m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2422 ms | ↑ 1.71x | 1 | 0s | 15d ago | 27m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 550 ms | ↓ 0.76x | 0 | — | — | 26m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.55% | 97.55% | 1035 ms | ↓ 0.90x | 0 | — | — | 10m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.79% | 99.72% | 99.72% | 2429 ms | ↓ 0.94x | 4 | 0s | 9d ago | 26m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.90% | 97.90% | 1959 ms | ↓ 0.91x | 0 | — | — | 15m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 622 ms | ↑ 1.24x | 2 | 25m | 16d ago | 27m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.84% | 99.79% | 99.79% | 1325 ms | → 0.99x | 1 | 39m | 24d ago | 17m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1561 ms | ↑ 1.11x | 0 | — | — | 9m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.67% | 98.67% | 4284 ms | → 0.97x | 0 | — | — | 29m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2754 ms | ↓ 0.94x | 0 | — | — | 26m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1255 ms | → 0.99x | 0 | — | — | 9m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2284 ms | ↓ 0.93x | 1 | 0s | 24d ago | 22m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 39.01% | 39.01% | 762 ms | → 1.02x | 0 | — | — | 27m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.36% | 98.36% | 3724 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1062 ms | → 0.98x | 1 | 0s | 18d ago | 26m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.64% | 99.84% | 99.84% | 121 ms | ↓ 0.69x | 5 | 12m | 7d ago | 26m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 96.00% | 14.56% | 14.56% | 699 ms | → 0.97x | 23 | 51m | 12d ago | 26m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.87% | 99.87% | 1790 ms | → 0.96x | 0 | — | — | 15m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.58% | 99.58% | 1579 ms | → 1.02x | 0 | — | — | 10m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.53% | 89.53% | 1037 ms | → 0.95x | 0 | — | — | 15m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 629 ms | ↓ 0.84x | 0 | — | — | 27m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.84% | 58.83% | 58.83% | 1434 ms | ↓ 0.90x | 3 | 0s | 16d ago | 16m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 17.63% | 17.63% | 2324 ms | → 0.95x | 1 | 0s | 15d ago | 16m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2464 ms | → 1.03x | 0 | — | — | 26m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 82.67% | 48.32% | 48.32% | 3511 ms | → 1.03x | 2 | 2d 8h | 8d ago | 17m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.90% | 88.71% | 88.71% | 1849 ms | ↑ 1.16x | 2 | 0s | 11d ago | 26m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.95% | 98.88% | 98.88% | 2438 ms | → 0.97x | 1 | 0s | 8d ago | 14m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.64% | 79.26% | 79.26% | 1770 ms | ↓ 0.88x | 1 | 1h 40m | 29d ago | 28m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 80.07% | 80.07% | 80.07% | 1231 ms | → 1.04x | 1 | 5d 5h | 25d ago | 9m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.74% | 99.90% | 99.90% | 734 ms | ↓ 0.89x | 3 | 17m | 16d ago | 26m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1044 ms | ↓ 0.86x | 0 | — | — | 27m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.90% | 37.54% | 37.54% | 192 ms | ↓ 0.84x | 2 | 0s | 15d ago | 13m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 866 ms | ↓ 0.82x | 0 | — | — | 27m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.96% | 99.96% | 1090 ms | ↓ 0.93x | 1 | 0s | 10d ago | 8m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 99.00% | 99.00% | 2379 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.18% | 98.18% | 1146 ms | ↓ 0.95x | 0 | — | — | 10m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.84% | 97.84% | 1554 ms | ↓ 0.79x | 0 | — | — | 11m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.74% | 95.90% | 95.90% | 421 ms | ↓ 0.69x | 2 | 31m | 17d ago | 10m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.74% | 67.74% | 893 ms | → 0.97x | 0 | — | — | 15m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1005 ms | → 1.00x | 0 | — | — | 8m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.84% | 79.31% | 79.31% | 1431 ms | ↓ 0.91x | 1 | 51m | 10d ago | 15m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1456 ms | → 1.02x | 0 | — | — | 26m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.70% | 99.70% | 1664 ms | ↓ 0.77x | 0 | — | — | 27m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 2109 ms | ↓ 0.94x | 1 | 0s | 10d ago | 9m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.90% | 91.86% | 91.86% | 1529 ms | → 1.03x | 2 | 0s | 17d ago | 14m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 938 ms | ↓ 0.94x | 1 | 0s | 9d ago | 17m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 85.03% | 32.37% | 32.37% | 1685 ms | → 0.98x | 7 | 14h 2m | 20d ago | 16m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.17% | 46.25% | 46.25% | 550 ms | ↓ 0.70x | 4 | 7h 27m | 24d ago | 13m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.80% | 84.80% | 220 ms | ↓ 0.59x | 0 | — | — | 26m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.86% | 89.86% | 293 ms | ↓ 0.51x | 1 | 0s | 17d ago | 13m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.25% | 99.25% | 2004 ms | → 1.01x | 0 | — | — | 15m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.48% | 96.48% | 1366 ms | → 0.99x | 0 | — | — | 16m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 17.24% | 17.24% | 976 ms | ↑ 1.06x | 1 | 0s | 26d ago | 23m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.75% | 99.75% | 2416 ms | ↓ 0.91x | 0 | — | — | 27m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.88% | 55.88% | 582 ms | ↓ 0.83x | 0 | — | — | 16m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.48% | 98.29% | 98.29% | 1288 ms | → 0.96x | 1 | 4h 17m | 10d ago | 14m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 35.81% | 35.81% | 1783 ms | → 0.97x | 1 | 0s | 9d ago | 15m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2634 ms | → 1.04x | 0 | — | — | 27m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 1708 ms | ↓ 0.87x | 1 | 30m | 9d ago | 14m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.33% | 65.70% | 65.70% | 716 ms | ↓ 0.95x | 6 | 24m | 10d ago | 15m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.19% | 99.19% | 1653 ms | ↓ 0.85x | 0 | — | — | 15m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.12% | 78.12% | 1263 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 499 ms | → 1.00x | 0 | — | — | 8m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.91% | 99.91% | 1782 ms | → 1.01x | 2 | 0s | 29d ago | 26m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.95% | 99.95% | 99.95% | 958 ms | ↑ 1.10x | 1 | 0s | 10d ago | 9m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1783 ms | ↓ 0.94x | 0 | — | — | 22m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2458 ms | ↓ 0.87x | 1 | 0s | 12d ago | 27m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.47% | 85.47% | 1777 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.89% | 99.89% | 1114 ms | → 1.02x | 2 | 0s | 10d ago | 9m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.93% | 95.93% | 1067 ms | → 0.97x | 0 | — | — | 16m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 841 ms | → 0.97x | 0 | — | — | 26m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.41% | 98.41% | 441 ms | ↓ 0.74x | 1 | 0s | 23d ago | 13m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 18.27% | 18.27% | 325 ms | ↓ 0.42x | 0 | — | — | 16m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 744 ms | → 0.98x | 0 | — | — | 13m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 59.12% | 59.12% | 1802 ms | → 0.97x | 0 | — | — | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.81% | 99.81% | 2588 ms | → 0.97x | 0 | — | — | 26m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.39% | 90.86% | 90.86% | 28 ms | ↓ 0.25x | 4 | 1d 5h | 22d ago | 10m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 15.44% | 15.44% | 882 ms | → 0.99x | 0 | — | — | 26m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1012 ms | ↑ 1.05x | 0 | — | — | 9m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.38% | 99.38% | 1284 ms | → 1.03x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 1663 ms | ↓ 0.76x | 1 | 0s | 29d ago | 9m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1340 ms | → 1.04x | 0 | — | — | 9m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.23% | 99.42% | 99.42% | 2496 ms | ↓ 0.87x | 8 | 24m | 10d ago | 28m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.84% | 18.19% | 18.19% | 1201 ms | → 0.99x | 3 | 0s | 13d ago | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.15% | 93.15% | 4543 ms | ↑ 1.09x | 0 | — | — | 26m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1693 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.23% | 99.23% | 99.23% | 1283 ms | ↓ 0.87x | 10 | 8m | 28d ago | 9m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.13% | 99.13% | 915 ms | ↓ 0.82x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.84% | 99.84% | 1514 ms | ↓ 0.90x | 2 | 10m | 10d ago | 9m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 35.92% | 35.92% | 1414 ms | ↓ 0.71x | 1 | 0s | 9d ago | 27m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1526 ms | ↑ 1.11x | 1 | 0s | 12d ago | 27m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 884 ms | ↓ 0.89x | 0 | — | — | 26m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 450 ms | → 0.96x | 0 | — | — | 29m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 100.00% | 91.81% | 91.81% | 993 ms | ↓ 0.90x | 0 | — | — | 26m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.44% | 98.44% | 2522 ms | ↑ 1.23x | 0 | — | — | 10m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.57% | 96.57% | 2340 ms | → 0.97x | 0 | — | — | 26m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1532 ms | ↓ 0.56x | 0 | — | — | 8m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.82% | 99.82% | 99.82% | 1746 ms | ↑ 1.09x | 1 | 0s | 9d ago | 8m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.40% | 99.40% | 99.40% | 1622 ms | ↓ 0.93x | 9 | 5m | 9d ago | 9m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.33% | 87.33% | 1460 ms | → 0.99x | 0 | — | — | 14m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.79% | 99.79% | 837 ms | ↓ 0.80x | 1 | 0s | 29d ago | 10m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.80% | 99.80% | 1400 ms | → 0.99x | 0 | — | — | 26m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.48% | 99.48% | 1179 ms | ↑ 1.14x | 0 | — | — | 27m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 756 ms | ↑ 1.10x | 1 | 0s | 10d ago | 8m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 998 ms | ↑ 1.13x | 0 | — | — | 27m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.79% | 71.21% | 71.21% | 1068 ms | ↓ 0.84x | 4 | 0s | 10d ago | 13m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 776 ms | → 1.00x | 0 | — | — | 25m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.85% | 21.00% | 21.00% | 1684 ms | ↓ 0.91x | 3 | 0s | 17d ago | 29m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.81% | 98.81% | 1411 ms | ↓ 0.79x | 0 | — | — | 14m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.87% | 91.87% | 3158 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 746 ms | → 1.01x | 1 | 0s | 27d ago | 8m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.95% | 99.95% | 99.95% | 348 ms | ↓ 0.75x | 1 | 0s | 10d ago | 8m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 96.81% | 96.81% | 988 ms | ↑ 1.24x | 0 | — | — | 9m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.73% | 98.73% | 509 ms | → 0.99x | 0 | — | — | 15m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.38% | 98.67% | 98.67% | 1846 ms | ↓ 0.73x | 1 | 3h 60m | 22d ago | 25m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.59% | 97.59% | 3203 ms | ↑ 1.14x | 1 | 0s | 13d ago | 12m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.95% | 99.95% | 99.95% | 598 ms | → 1.05x | 1 | 0s | 10d ago | 9m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 26.32% | 26.32% | 922 ms | ↑ 1.13x | 1 | 0s | 14d ago | 25m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.78% | 99.78% | 622 ms | ↓ 0.84x | 1 | 0s | 8d ago | 14m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.16% | 98.16% | 1461 ms | → 0.98x | 0 | — | — | 14m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 100.00% | 100.00% | 100.00% | 1658 ms | → 1.00x | 0 | — | — | 8m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1003 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.55% | 87.55% | 2255 ms | → 0.95x | 0 | — | — | 15m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.42% | 96.42% | 1719 ms | ↓ 0.92x | 0 | — | — | 17m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1320 ms | ↓ 0.88x | 0 | — | — | 25m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 15.44% | 15.44% | 1794 ms | ↓ 0.91x | 1 | 0s | 21d ago | 26m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 1060 ms | ↑ 1.14x | 0 | — | — | 9m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.64% | 96.49% | 96.49% | 1263 ms | → 0.99x | 2 | 51m | 24d ago | 10m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 100.00% | 99.94% | 99.94% | 698 ms | ↓ 0.88x | 0 | — | — | 26m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 17.40% | 17.40% | 1772 ms | ↓ 0.91x | 0 | — | — | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.95% | 15.26% | 15.26% | 1365 ms | ↓ 0.86x | 1 | 0s | 29d ago | 17m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.69% | 99.72% | 99.72% | 2584 ms | ↓ 0.82x | 1 | 2h 18m | 9d ago | 12m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1527 ms | → 1.01x | 0 | — | — | 26m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.23% | 99.64% | 99.64% | 1877 ms | ↓ 0.83x | 6 | 2h 50m | 14d ago | 25m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1822 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.32% | 98.32% | 1099 ms | → 1.05x | 0 | — | — | 10m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1821 ms | ↓ 0.94x | 2 | 0s | 19d ago | 22m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.09% | 99.09% | 1533 ms | ↑ 1.17x | 0 | — | — | 26m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 99.07% | 42.17% | 42.17% | 1138 ms | ↓ 0.87x | 14 | 6m | 8d ago | 12m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 351 ms | ↓ 0.93x | 0 | — | — | 26m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.76% | 99.90% | 97.60% | 97.60% | 510 ms | ↓ 0.68x | 2 | 0s | 4d ago | 10m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.76% | 99.95% | 17.19% | 17.19% | 1614 ms | ↓ 0.86x | 1 | 0s | 4d ago | 17m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.76% | 94.72% | 94.72% | 94.72% | 1248 ms | ↑ 1.14x | 4 | 8h 26m | 2d ago | 9m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.76% | 99.64% | 96.61% | 96.61% | 2004 ms | → 0.96x | 2 | 50m | 6d ago | 14m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.76% | 99.84% | 99.84% | 99.84% | 1748 ms | ↓ 0.94x | 3 | 0s | 6d ago | 9m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.76% | 99.63% | 99.63% | 99.63% | 866 ms | ↓ 0.92x | 7 | 0s | 4d ago | 9m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.76% | 99.84% | 99.84% | 99.84% | 796 ms | → 1.04x | 3 | 0s | 3d ago | 9m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.76% | 76.33% | 76.33% | 76.33% | 2568 ms | ↓ 0.91x | 10 | 16h 47m | 7d ago | 9m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.76% | 99.90% | 99.02% | 99.02% | 1343 ms | ↓ 0.93x | 2 | 0s | 7h ago | 14m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.76% | 99.95% | 64.23% | 64.23% | 1447 ms | → 0.95x | 1 | 0s | 4d ago | 15m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.49% | 92.49% | 930 ms | → 0.96x | 1 | 0s | 7d ago | 16m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.76% | 99.69% | 97.62% | 97.62% | 2898 ms | ↓ 0.83x | 6 | 0s | 6d ago | 12m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.95% | 50.23% | 50.23% | 1410 ms | → 0.99x | 1 | 0s | 2d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.76% | 99.53% | 59.71% | 59.71% | 851 ms | ↓ 0.86x | 5 | 16m | 4d ago | 15m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.76% | 99.90% | 99.55% | 99.55% | 808 ms | ↓ 0.83x | 2 | 0s | 2d ago | 15m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.53% | 97.24% | 97.24% | 1574 ms | ↓ 0.91x | 9 | 0s | 1d ago | 10m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.76% | 99.84% | 99.31% | 99.31% | 1469 ms | ↓ 0.88x | 3 | 0s | 2d ago | 17m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.76% | 55.79% | 79.69% | 79.69% | 428 ms | → 1.00x | 4 | 3d 1h | 3d ago | 10m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.08% | 98.66% | 98.66% | 1286 ms | ↑ 1.08x | 4 | 2h 47m | 4d ago | 9m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.95% | 17.34% | 17.34% | 1438 ms | → 0.95x | 1 | 0s | 2d ago | 16m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.76% | 99.90% | 99.92% | 99.92% | 792 ms | ↓ 0.89x | 2 | 0s | 4d ago | 10m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.95% | 65.44% | 65.44% | 919 ms | ↑ 1.36x | 1 | 0s | 3d ago | 16m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.76% | 99.69% | 98.16% | 98.16% | 1504 ms | ↓ 0.76x | 6 | 0s | 6d ago | 13m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.76% | 99.95% | 53.51% | 53.51% | 3372 ms | ↓ 0.86x | 1 | 0s | 5d ago | 13m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.76% | 99.95% | 98.66% | 98.66% | 1918 ms | ↑ 1.09x | 1 | 0s | 3d ago | 9m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.76% | 99.84% | 78.45% | 78.45% | 1459 ms | ↓ 0.95x | 3 | 0s | 6d ago | 15m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.74% | 16.14% | 16.14% | 1198 ms | ↑ 1.10x | 5 | 0s | 4d ago | 16m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.33% | 98.50% | 98.50% | 542 ms | ↓ 0.69x | 6 | 23m | 2d ago | 13m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 99.38% | 90.60% | 90.60% | 1382 ms | ↓ 0.81x | 12 | 0s | 4d ago | 15m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.76% | 99.95% | 99.82% | 99.82% | 2102 ms | ↓ 0.90x | 1 | 0s | 13h ago | 16m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.54% | 97.76% | 97.76% | 2705 ms | ↓ 0.91x | 7 | 6m | 4d ago | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.90% | 98.83% | 98.83% | 1053 ms | ↑ 1.06x | 2 | 0s | 4d ago | 25m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 99.23% | 97.78% | 97.78% | 3433 ms | → 1.02x | 15 | 0s | 7d ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.76% | 99.18% | 96.47% | 96.47% | 1275 ms | → 0.97x | 7 | 27m | 5d ago | 23m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.76% | 99.69% | 99.00% | 99.00% | 3091 ms | ↑ 1.07x | 2 | 45m | 7d ago | 26m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.76% | 99.54% | 99.84% | 99.84% | 2667 ms | ↓ 0.86x | 9 | 0s | 24h ago | 28m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.71% | 99.71% | 2640 ms | ↓ 0.87x | 2 | 0s | 5d ago | 28m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.69% | 99.73% | 99.73% | 583 ms | → 1.00x | 6 | 0s | 4d ago | 27m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.56% | 99.43% | 99.43% | 2602 ms | ↓ 0.82x | 17 | 13m | 4d ago | 22m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 99.13% | 99.84% | 99.84% | 1574 ms | ↓ 0.73x | 16 | 0s | 4d ago | 27m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.76% | 98.05% | 98.19% | 98.19% | 4624 ms | → 0.98x | 37 | 32s | 3d ago | 28m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.74% | 99.64% | 99.64% | 886 ms | → 1.00x | 4 | 5m | 6d ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.76% | 98.46% | 98.70% | 98.70% | 3175 ms | → 0.95x | 26 | 3m | 4d ago | 26m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.76% | 99.95% | 15.45% | 15.45% | 2118 ms | ↑ 1.09x | 1 | 0s | 4d ago | 26m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.39% | 98.83% | 98.83% | 2334 ms | ↓ 0.87x | 9 | 4m | 4d ago | 28m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.85% | 99.19% | 99.19% | 3060 ms | ↓ 0.93x | 3 | 0s | 3d ago | 22m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 189 ms | → 0.96x | 1 | 0s | 4d ago | 27m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2524 ms | ↓ 0.92x | 1 | 0s | 6d ago | 23m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.76% | 99.85% | 83.86% | 83.86% | 1938 ms | ↓ 0.88x | 3 | 0s | 7h ago | 22m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1850 ms | ↓ 0.95x | 1 | 0s | 6d ago | 25m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.79% | 99.79% | 99.79% | 1250 ms | ↓ 0.90x | 4 | 0s | 4d ago | 8m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.76% | 87.62% | 87.62% | 87.62% | 886 ms | → 0.99x | 52 | 21m | 6h ago | 8m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 99.74% | 99.74% | 99.74% | 99.74% | 2818 ms | → 1.00x | 1 | 0s | 21h ago | 8m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.51% | 99.38% | 70.47% | 70.47% | 1131 ms | ↓ 0.94x | 10 | 4m | 4d ago | 15m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.51% | 97.87% | 98.58% | 98.58% | 1210 ms | → 0.96x | 10 | 1h 4m | 4d ago | 15m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.51% | 98.30% | 98.30% | 98.30% | 1598 ms | ↓ 0.88x | 17 | 20m | 5d ago | 9m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.51% | 98.63% | 98.63% | 98.63% | 1311 ms | ↓ 0.72x | 14 | 16m | 3d ago | 9m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 99.64% | 90.71% | 90.71% | 1577 ms | → 0.99x | 5 | 8m | 2d ago | 10m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.51% | 99.84% | 99.80% | 99.80% | 1340 ms | ↓ 0.85x | 2 | 14m | 4d ago | 13m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.51% | 99.29% | 99.29% | 99.29% | 1098 ms | ↓ 0.93x | 4 | 48m | 2d ago | 9m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.51% | 93.93% | 92.28% | 92.28% | 2220 ms | → 0.95x | 10 | 3h 52m | 4d ago | 13m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.51% | 99.79% | 96.62% | 96.62% | 4584 ms | ↑ 1.08x | 4 | 0s | 4d ago | 16m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.51% | 99.90% | 99.75% | 99.75% | 619 ms | ↓ 0.71x | 1 | 20m | 4d ago | 10m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.51% | 99.84% | 97.70% | 97.70% | 1452 ms | → 0.99x | 3 | 0s | 3d ago | 10m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.51% | 96.27% | 96.27% | 96.27% | 877 ms | ↑ 1.15x | 10 | 2h 8m | 5d ago | 9m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.51% | 99.37% | 99.37% | 99.37% | 1707 ms | → 1.00x | 3 | 1h 3m | 7d ago | 9m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.51% | 99.84% | 99.84% | 99.84% | 2721 ms | → 0.99x | 3 | 0s | 3d ago | 9m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.51% | 99.07% | 78.30% | 78.30% | 2169 ms | ↓ 0.91x | 18 | 0s | 7h ago | 22m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.51% | 98.92% | 99.24% | 99.24% | 832 ms | ↓ 0.94x | 15 | 8m | 4d ago | 27m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.51% | 99.44% | 84.73% | 84.73% | 2116 ms | ↑ 1.10x | 10 | 0s | 3d ago | 27m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.51% | 98.77% | 60.23% | 60.23% | 2540 ms | ↓ 0.85x | 21 | 2m | 4d ago | 27m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.27% | 98.44% | 64.16% | 64.16% | 4599 ms | → 0.95x | 27 | 3m | 4d ago | 15m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.27% | 97.72% | 15.30% | 15.30% | 2407 ms | ↓ 0.91x | 11 | 1h 9m | 2d ago | 16m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.27% | 98.39% | 85.67% | 85.67% | 4626 ms | → 0.98x | 28 | 2m | 5h ago | 16m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.27% | 98.21% | 84.64% | 84.64% | 4430 ms | → 0.98x | 32 | 3m | 1d ago | 29m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.27% | 98.31% | 83.71% | 83.71% | 2771 ms | ↓ 0.88x | 33 | 0s | 1d ago | 29m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.27% | 99.83% | 99.83% | 99.83% | 900 ms | → 0.96x | 2 | 11m | 2d ago | 8m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.27% | 99.51% | 99.51% | 99.51% | 1046 ms | ↑ 1.22x | 1 | 51m | 1d ago | 8m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.03% | 98.08% | 84.62% | 84.62% | 4610 ms | ↓ 0.94x | 37 | 0s | 4d ago | 13m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.03% | 97.23% | 98.96% | 98.96% | 3795 ms | → 1.02x | 18 | 42m | 3d ago | 25m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 93.92% | 67.13% | 67.13% | 3964 ms | ↓ 0.86x | 46 | 32m | 2h ago | 23m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.03% | 97.64% | 85.11% | 85.11% | 4555 ms | → 1.02x | 43 | 2m | 1d ago | 25m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.02% | 99.20% | 99.20% | 99.20% | 4693 ms | → 1.03x | 4 | 0s | 1h ago | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (54)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.79% | 99.37% | 99.37% | 99.37% | 999 ms | ↓ 0.85x | 12 | 0s | 2h ago | 8m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 98.79% | 99.45% | 99.45% | 99.45% | 2271 ms | ↓ 0.94x | 9 | 2m | 20h ago | 9m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.79% | 99.48% | 96.76% | 96.76% | 2194 ms | → 0.99x | 6 | 16m | 7d ago | 10m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 98.79% | 99.58% | 98.72% | 98.72% | 2922 ms | ↑ 1.10x | 7 | 4m | 42m ago | 12m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 98.78% | 98.46% | 92.14% | 92.14% | 980 ms | → 0.96x | 8 | 55m | 4d ago | 26m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.78% | 99.33% | 99.68% | 99.68% | 2859 ms | → 0.96x | 11 | 4m | 3d ago | 22m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.78% | 88.46% | 13.78% | 13.78% | 2183 ms | ↓ 0.88x | 174 | 6m | 4d ago | 23m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.78% | 97.17% | 99.13% | 99.13% | 3694 ms | → 0.99x | 18 | 43m | 3d ago | 25m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.78% | 99.59% | 99.43% | 99.43% | 1728 ms | ↓ 0.89x | 3 | 33m | 3d ago | 26m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.78% | 98.63% | 98.63% | 98.63% | 1621 ms | ↑ 1.12x | 23 | 2m | 10h ago | 8m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.58% | 98.58% | 98.58% | 98.58% | 490 ms | → 1.00x | 1 | 1h | 24h ago | 8m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 98.54% | 99.43% | 97.33% | 97.33% | 1640 ms | ↓ 0.76x | 6 | 20m | 2h ago | 13m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.54% | 98.29% | 96.04% | 96.04% | 1102 ms | ↓ 0.92x | 4 | 2h 27m | 16h ago | 10m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.54% | 95.31% | 14.93% | 14.93% | 3466 ms | ↓ 0.88x | 61 | 10m | 1d ago | 22m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.54% | 98.87% | 98.94% | 98.94% | 1895 ms | ↓ 0.86x | 17 | 7m | 7h ago | 22m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.30% | 98.19% | 98.19% | 98.19% | 2579 ms | ↓ 0.95x | 15 | 27m | 2d ago | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.30% | 99.32% | 97.97% | 97.97% | 2962 ms | → 0.96x | 4 | 55m | 42m ago | 12m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.30% | 97.72% | 90.24% | 90.24% | 3128 ms | ↓ 0.90x | 37 | 4m | 4h ago | 12m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 98.30% | 99.58% | 99.76% | 99.76% | 2674 ms | → 0.99x | 4 | 30m | 42m ago | 12m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.06% | 99.43% | 98.07% | 98.07% | 3404 ms | ↑ 1.19x | 6 | 23m | 42m ago | 12m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.06% | 99.22% | 99.09% | 99.09% | 182 ms | → 1.03x | 7 | 37m | 42m ago | 12m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.06% | 99.01% | 99.01% | 99.01% | 1013 ms | → 0.99x | 11 | 17m | 3d ago | 9m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 98.06% | 95.85% | 81.75% | 81.75% | 4651 ms | → 1.00x | 71 | 3m | 1h ago | 12m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.05% | 97.17% | 73.34% | 73.34% | 4350 ms | → 0.97x | 45 | 5m | 2d ago | 23m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.05% | 94.95% | 13.65% | 13.65% | 2393 ms | → 1.00x | 12 | 2h 27m | 3d ago | 22m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 97.81% | 81.16% | 51.59% | 51.59% | 2817 ms | ↓ 0.89x | 7 | 19h 44m | 54m ago | 23m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 97.80% | 99.52% | 99.52% | 99.52% | 419 ms | → 0.97x | 3 | 40m | 7h ago | 8m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.57% | 99.12% | 85.37% | 85.37% | 1099 ms | ↓ 0.95x | 6 | 46m | 3d ago | 12m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.57% | 96.26% | 79.45% | 79.45% | 128 ms | ↓ 0.87x | 5 | 5h 54m | 3d ago | 28m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.33% | 83.43% | 84.55% | 84.55% | 1534 ms | → 1.04x | 3 | 1d 11h | 6d ago | 10m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.32% | 94.38% | 98.63% | 98.63% | 4091 ms | ↓ 0.91x | 67 | 13m | 1d ago | 22m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.09% | 95.44% | 81.07% | 81.07% | 4888 ms | → 0.98x | 78 | 3m | 3h ago | 14m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 96.60% | 95.02% | 70.83% | 70.83% | 1211 ms | ↓ 0.94x | 15 | 1h 49m | 14h ago | 15m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.86% | 96.25% | 14.91% | 14.91% | 2140 ms | ↑ 1.06x | 67 | 2m | 6h ago | 24m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.63% | 97.04% | 96.52% | 96.52% | 3808 ms | ↑ 1.27x | 14 | 1h 8m | 5d ago | 9m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.60% | 96.41% | 96.41% | 96.41% | 514 ms | → 1.05x | 2 | 2h 41m | 2d ago | 8m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.38% | 97.79% | 98.83% | 98.83% | 807 ms | → 0.96x | 2 | 6h 50m | 2d ago | 26m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.65% | 98.10% | 27.69% | 27.69% | 1628 ms | ↑ 1.15x | 9 | 1h 17m | 2h ago | 24m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 94.42% | 98.81% | 96.37% | 96.37% | 2691 ms | ↓ 0.93x | 4 | 2h 10m | 4d ago | 10m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 94.17% | 95.84% | 83.93% | 83.93% | 4769 ms | → 0.99x | 48 | 15m | 42m ago | 12m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 92.48% | 97.20% | 95.48% | 95.48% | 2281 ms | ↓ 0.93x | 4 | 4h 46m | 5d ago | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.23% | 97.56% | 95.24% | 95.24% | 1755 ms | ↑ 1.07x | 3 | 5h 26m | 6d ago | 10m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 90.78% | 97.66% | 98.26% | 98.26% | 227 ms | ↓ 0.47x | 8 | 1h 57m | 5h ago | 9m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.29% | 89.33% | 16.23% | 16.23% | 4552 ms | → 0.97x | 162 | 7m | 4h ago | 16m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 90.02% | 42.21% | 24.56% | 24.56% | 3428 ms | → 1.02x | 72 | 5h 3m | 2h ago | 26m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 89.81% | 97.82% | 98.16% | 98.16% | 252 ms | ↓ 0.28x | 1 | 16h 22m | 2d ago | 14m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.62% | 89.14% | 50.84% | 50.84% | 3566 ms | → 0.95x | 177 | 4m | 3h ago | 11m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.95% | 95.94% | 95.94% | 95.94% | 1428 ms | → 1.02x | 2 | 13h 54m | 3d ago | 9m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 83.57% | 83.57% | 83.57% | 83.57% | 1422 ms | → 1.00x | 1 | 13h 12m | 4d ago | 8m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 81.07% | 90.24% | 96.68% | 96.68% | 3256 ms | ↓ 0.85x | 8 | 9h 6m | 9d ago | 12m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.54% | 69.40% | 19.52% | 19.52% | 4688 ms | → 1.01x | 348 | 17m | 1h ago | 15m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 72.26% | 15.23% | 13.69% | 13.69% | 2240 ms | → 1.00x | 1 | 24d 21h | 30d ago | 26m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 69.10% | 64.16% | 62.06% | 62.06% | 4797 ms | → 0.99x | 380 | 19m | 2h ago | 23m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 68.69% | 14.67% | 30.92% | 30.92% | 600 ms | → 1.00x | 2 | 12d 13h | 3d ago | 15m ago |

</details>

<details open>
<summary><strong>🔴 Down (225)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.03% | 99.79% | 42.24% | 42.24% | 998 ms | ↓ 0.76x | 1 | 1h 30m | 2h ago | 23m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 80.54% | 95.69% | 98.80% | 98.80% | 1258 ms | ↓ 0.94x | 51 | 15m | 26m ago | 26m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 75.97% | 94.40% | 82.53% | 82.53% | 678 ms | ↓ 0.66x | 3 | 13h 51m | 2d ago | 13m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 74.21% | 94.48% | 99.30% | 99.30% | 1062 ms | ↓ 0.82x | 2 | 21h 20m | 2d ago | 22m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 62.14% | 90.17% | 90.17% | 90.17% | 1315 ms | ↓ 0.68x | 14 | 4h 39m | 3d ago | 9m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 39.27% | 87.03% | 87.85% | 87.85% | 413 ms | ↓ 0.65x | 1 | 4d 7h | 4d ago | 8m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 37.71% | 83.97% | 42.44% | 42.44% | 1331 ms | → 1.01x | 17 | 7h 2m | 4d ago | 24m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 37.71% | 54.65% | 5.59% | 5.59% | 1207 ms | → 0.95x | 5 | 2d 15h | 4d ago | 26m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 17.96% | 79.58% | 86.14% | 86.14% | 2067 ms | ↓ 0.86x | 2 | 3d 6h | 6d ago | 12m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.76% | 10.16% | 10.16% | 10.16% | 3170 ms | → 1.03x | 172 | 3h 20m | 8m ago | 8m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 10.68% | 78.34% | 89.02% | 89.02% | 1181 ms | ↓ 0.77x | 5 | 1d 9h | 6d ago | 10m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.97% | 1.18% | 61.54% | 61.54% | 1944 ms | ↓ 0.70x | 23 | 1d 7h | 13h ago | 29m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 83.85% | 83.85% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 69.44% | 69.44% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 74.67% | 74.67% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 60.28% | 65.53% | 65.53% | — | — | 14 | 22h 6m | 13d ago | 8m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 49.56% | 86.63% | 86.63% | — | — | 7 | 2d 7h | 16d ago | 13m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 66.20% | 66.20% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.74% | 5.74% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.68% | 12.68% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 13.04% | 64.55% | 64.55% | — | — | 3 | 8d 19h | 24d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 16m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.44% | 3.44% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 32.73% | 75.88% | 75.88% | — | — | 2 | 10d 12h | 21d ago | 12m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 84.11% | 84.11% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 36.92% | 36.92% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 11.32% | 60.56% | 60.56% | — | — | 3 | 8d 23h | 27d ago | 11m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 43.68% | 93.93% | 93.93% | — | — | 4 | 4d 11h | 18d ago | 28m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.46% | 24.46% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 75.47% | 75.47% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 54.41% | 54.41% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.62% | 30.62% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 84.51% | 84.51% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 63.65% | 63.65% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 78.06% | 78.06% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.75% | 15.75% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 51.42% | 51.42% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 78.38% | 95.89% | 95.89% | — | — | 6 | 1d 4h | 7d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 35.65% | 35.65% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 53.29% | 84.86% | 84.86% | — | — | 2 | 7d 12h | 15d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.56% | 3.56% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 16m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 84.70% | 84.70% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 48.76% | 48.76% | 48.76% | — | — | 6 | 2d 15h | 16d ago | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.59% | 52.59% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.08% | 2.08% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 55.45% | 92.81% | 92.81% | — | — | 13 | 1d 2h | 14d ago | 24m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 66.03% | 85.89% | 85.89% | — | — | 2 | 5d 12h | 10d ago | 12m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 70.92% | 46.68% | 46.68% | — | — | 2 | 4d 18h | 10d ago | 15m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 28.23% | 81.50% | 81.50% | — | — | 3 | 7d 10h | 22d ago | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 32.82% | 32.82% | 32.82% | — | — | 1 | 20d 17h | 21d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 33.70% | 67.37% | 67.37% | — | — | 2 | 10d 9h | 21d ago | 15m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 34.16% | 34.16% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.34% | 55.34% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 71.48% | 60.03% | 60.03% | — | — | 4 | 2d 8h | 9d ago | 11m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.15% | 25.15% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.21% | 30.21% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 57.99% | 57.99% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 50.78% | 25.52% | 25.52% | — | — | 1 | 15d 23h | 16d ago | 14m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.69% | 5.69% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 66.72% | 66.72% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 84.45% | 84.45% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.35% | 7.35% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 80.64% | 80.64% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 29.60% | 83.20% | 83.20% | — | — | 3 | 7d 6h | 21d ago | 27m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 52.31% | 35.04% | 35.04% | — | — | 17 | 21h 30m | 15d ago | 13m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 9m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 29.18% | 29.18% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 47.95% | 27.88% | 27.88% | — | — | 5 | 3d 3h | 8d ago | 12m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.65% | 53.65% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 28.42% | 57.05% | 57.05% | — | — | 3 | 7d 9h | 22d ago | 14m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 12.51% | 11.58% | 11.58% | — | — | 1 | 25d 8h | 25d ago | 10m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 32.78% | 72.77% | 72.77% | — | — | 2 | 10d 12h | 21d ago | 12m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 77.72% | 77.72% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.38% | 47.38% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.06% | 43.06% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 40.87% | 40.87% | 40.87% | — | — | 5 | 3d 14h | 18d ago | 8m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 84.46% | 84.46% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 59.65% | 59.65% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.62% | 39.62% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 49.51% | 86.63% | 86.63% | — | — | 7 | 2d 7h | 16d ago | 13m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 17m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.14% | 32.14% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.61% | 2.61% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 32.63% | 84.69% | 84.69% | — | — | 2 | 10d 12h | 21d ago | 26m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.35% | 42.35% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 84.42% | 84.42% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.61% | 33.61% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 84.35% | 84.35% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 15.95% | 61.14% | 61.14% | — | — | 1 | 25d 16h | 26d ago | 10m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 26.69% | 26.69% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 46.17% | 46.17% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 81.97% | 81.97% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 69.19% | 69.19% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 17.56% | 33.61% | 33.61% | — | — | 2 | 12d 15h | 25d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 80.42% | 80.42% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 55.29% | 55.29% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.32% | 3.32% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.00% | 44.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 78.80% | 78.80% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 60.12% | 60.12% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 32.24% | 53.43% | 53.43% | — | — | 10 | 2d 2h | 21d ago | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 18.23% | 68.87% | 68.87% | — | — | 15 | 1d 16h | 25d ago | 12m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 21.89% | 90.56% | 90.56% | — | — | 1 | 24d 1h | 24d ago | 24m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.83% | 28.83% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 10.98% | 10.98% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.13% | 13.13% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 28.92% | 28.92% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.56% | 24.56% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 13h | 30d ago | 9m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 61.31% | 53.97% | 53.97% | — | — | 13 | 22h 58m | 12d ago | 24m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 63.04% | 95.90% | 95.90% | — | — | 17 | 16h 21m | 10d ago | 27m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 60.16% | 60.16% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 12.36% | 12.36% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.80% | 17.80% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.45% | 50.45% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 33.33% | 33.33% | 33.33% | — | — | 1 | 19d 21h | 20d ago | 9m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.22% | 56.22% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 14.86% | 24.80% | 24.80% | — | — | 16 | 1d 15h | 26d ago | 12m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 39.60% | 39.60% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 53.39% | 53.39% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.65% | 5.65% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 68.72% | 85.58% | 85.58% | — | — | 2 | 5d 4h | 10d ago | 14m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 40.42% | 92.03% | 92.03% | — | — | 1 | 18d 20h | 19d ago | 26m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 84.55% | 84.55% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 83.45% | 83.45% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 16m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 65.08% | 65.08% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 76.42% | 76.42% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 83.30% | 83.30% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 19.97% | 19.97% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 67.13% | 60.94% | 60.94% | — | — | 1 | 10d 20h | 11d ago | 28m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 66.96% | 46.86% | 46.86% | — | — | 17 | 14h 48m | 10d ago | 12m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.21% | 4.15% | 4.15% | — | — | 2 | 14d 23h | 12d ago | 23m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.82% | 34.82% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.34% | 69.91% | 69.91% | — | — | 4 | 7d 5h | 11d ago | 26m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.44% | 27.33% | 27.33% | — | — | 31 | 19h 28m | 8d ago | 13m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.88% | 7.88% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 66.93% | 66.93% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 44.92% | 44.92% | 44.92% | — | — | 2 | 8d 9h | 17d ago | 9m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 13h | 29d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 68.90% | 68.90% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 21.11% | 49.31% | 49.31% | — | — | 12 | 2d | 24d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 7.28% | 7.28% | — | — | 1 | 28d 13h | 29d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 53.93% | 70.56% | 70.56% | — | — | 12 | 1d 4h | 10d ago | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 46.96% | 62.84% | 62.84% | — | — | 13 | 1d 7h | 17d ago | 9m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 40.76% | 40.76% | — | — | 1 | 29d 23h | 30d ago | 11m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 26.87% | 26.87% | — | — | 1 | 29d 13h | 30d ago | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.10% | 13.10% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.31% | 18.31% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 19.98% | 19.98% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 17.06% | 42.13% | 42.13% | — | — | 1 | 25d 9h | 25d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 26.13% | 10.48% | 10.48% | — | — | 253 | 1h 48m | 15d ago | 15m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 12.65% | 12.65% | 12.65% | — | — | 8 | 3d 6h | 26d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.10% | 1.10% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.17% | 6.17% | — | — | 1 | 29d 23h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.28% | 7.28% | — | — | 1 | 29d 23h | 30d ago | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 50.89% | 50.89% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 42.59% | 59.94% | 59.94% | — | — | 2 | 9d 3h | 18d ago | 9m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 84.52% | 84.52% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 62.08% | 82.91% | 82.91% | — | — | 2 | 6d 6h | 13d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 51.47% | 51.47% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 84.70% | 84.70% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 25.73% | 63.61% | 63.61% | — | — | 2 | 11d 11h | 23d ago | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.20% | 42.20% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 2.64% | 2.64% | 2.64% | — | — | 1 | 28d 20h | 29d ago | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 46.86% | 20.47% | 20.47% | — | — | 4 | 4d 6h | 17d ago | 15m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 82.39% | 82.39% | — | — | 1 | 29d 23h | 30d ago | 17m ago |

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
