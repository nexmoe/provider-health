# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 343 🟢 operational · 48 🟡 degraded · 225 🔴 down · 0 ⚫ unknown

_Updated 2026-05-30 06:26 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (343)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.15% | 93.15% | 686 ms | → 0.96x | 0 | — | — | 33m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.31% | 97.31% | 2408 ms | → 0.98x | 0 | — | — | 43m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 49.74% | 49.74% | 1561 ms | → 1.02x | 2 | 0s | 18d ago | 31m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1054 ms | → 1.00x | 0 | — | — | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.75% | 98.75% | 1437 ms | ↓ 0.81x | 1 | 0s | 28d ago | 46m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.32% | 99.32% | 2936 ms | ↓ 0.81x | 1 | 0s | 9d ago | 46m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.82% | 98.82% | 98.82% | 1617 ms | ↓ 0.85x | 12 | 13m | 11d ago | 27m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.49% | 94.01% | 94.01% | 1758 ms | → 0.97x | 1 | 2h 59m | 27d ago | 28m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1402 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.28% | 97.14% | 97.14% | 1900 ms | → 1.03x | 1 | 4h 31m | 16d ago | 28m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.99% | 91.99% | 1680 ms | ↓ 0.83x | 0 | — | — | 46m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 1202 ms | → 0.96x | 1 | 0s | 16d ago | 27m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.83% | 99.83% | 866 ms | ↓ 0.82x | 1 | 0s | 15d ago | 28m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 601 ms | ↑ 1.08x | 0 | — | — | 25m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.90% | 98.34% | 98.34% | 974 ms | ↓ 0.85x | 2 | 0s | 22d ago | 29m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.61% | 96.61% | 1384 ms | → 1.02x | 1 | 0s | 15d ago | 28m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.41% | 98.41% | 798 ms | ↑ 1.07x | 0 | — | — | 27m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 87.54% | 33.94% | 33.94% | 423 ms | → 0.96x | 1 | 3d 11h | 30d ago | 40m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 608 ms | ↓ 0.91x | 1 | 0s | 18d ago | 28m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.94% | 99.94% | 450 ms | ↓ 0.76x | 1 | 0s | 8d ago | 26m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.23% | 96.23% | 485 ms | → 0.96x | 0 | — | — | 31m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.94% | 99.94% | 1572 ms | ↓ 0.89x | 1 | 0s | 8d ago | 27m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.85% | 98.04% | 98.04% | 2310 ms | → 0.98x | 1 | 60m | 9d ago | 30m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.54% | 97.54% | 174 ms | ↓ 0.51x | 0 | — | — | 28m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.14% | 78.17% | 78.17% | 2027 ms | ↓ 0.86x | 17 | 0s | 11d ago | 40m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 82.59% | 82.59% | 997 ms | ↓ 0.60x | 0 | — | — | 29m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.95% | 99.95% | 1042 ms | ↓ 0.85x | 1 | 0s | 8d ago | 26m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.49% | 80.21% | 80.21% | 1679 ms | ↑ 1.06x | 3 | 50m | 12d ago | 33m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.39% | 97.39% | 1174 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 394 ms | ↓ 0.94x | 0 | — | — | 41m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 97.08% | 95.83% | 95.83% | 2567 ms | ↓ 0.87x | 39 | 9m | 11d ago | 45m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2437 ms | ↓ 0.83x | 1 | 0s | 21d ago | 41m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.87% | 98.87% | 146 ms | ↓ 0.40x | 0 | — | — | 31m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.80% | 99.80% | 1491 ms | ↓ 0.78x | 3 | 0s | 26d ago | 30m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.71% | 95.71% | 879 ms | ↓ 0.62x | 0 | — | — | 30m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.82% | 99.82% | 99.82% | 548 ms | ↓ 0.56x | 3 | 0s | 8d ago | 26m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.74% | 99.86% | 99.86% | 949 ms | ↓ 0.65x | 3 | 13m | 12d ago | 28m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1725 ms | ↓ 0.93x | 0 | — | — | 41m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 848 ms | ↑ 1.14x | 0 | — | — | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.41% | 99.43% | 99.43% | 2864 ms | ↓ 0.78x | 4 | 2h 15m | 18d ago | 30m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.74% | 99.66% | 99.66% | 948 ms | ↑ 1.11x | 4 | 5m | 16d ago | 28m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 26.24% | 26.24% | 846 ms | ↓ 0.83x | 1 | 0s | 27d ago | 41m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 1091 ms | ↓ 0.93x | 1 | 0s | 8d ago | 26m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.69% | 98.06% | 98.06% | 2679 ms | ↓ 0.91x | 1 | 1h 41m | 12d ago | 30m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | → 1.01x | 0 | — | — | 27m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.51% | 97.35% | 97.35% | 1597 ms | ↑ 1.22x | 7 | 4h 1m | 13d ago | 34m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.27% | 96.27% | 843 ms | ↓ 0.87x | 1 | 0s | 28d ago | 32m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.76% | 99.76% | 99.76% | 1798 ms | → 0.99x | 2 | 19m | 17d ago | 26m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.14% | 52.14% | 772 ms | → 0.96x | 0 | — | — | 34m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1407 ms | → 1.00x | 0 | — | — | 25m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.53% | 99.53% | 99.53% | 2502 ms | ↓ 0.93x | 6 | 8m | 8d ago | 27m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 959 ms | ↓ 0.88x | 1 | 0s | 8d ago | 26m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 3241 ms | → 0.96x | 0 | — | — | 40m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 96.99% | 96.99% | 1335 ms | ↓ 0.66x | 0 | — | — | 40m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 99.02% | 99.02% | 1205 ms | ↓ 0.85x | 2 | 0s | 15d ago | 32m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 96.91% | 44.92% | 44.92% | 2944 ms | ↑ 1.09x | 9 | 1h 42m | 10d ago | 41m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.78% | 81.78% | 1735 ms | ↓ 0.95x | 0 | — | — | 33m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1038 ms | → 1.01x | 0 | — | — | 27m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.45% | 98.45% | 1592 ms | ↓ 0.91x | 0 | — | — | 30m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 3053 ms | ↓ 0.78x | 1 | 0s | 8d ago | 26m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.35% | 98.35% | 683 ms | ↓ 0.87x | 0 | — | — | 28m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.74% | 99.83% | 99.83% | 214 ms | ↓ 0.51x | 5 | 0s | 9d ago | 31m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.98% | 98.98% | 98.98% | 2209 ms | ↓ 0.94x | 12 | 10m | 26d ago | 27m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.36% | 92.41% | 92.41% | 1877 ms | ↓ 0.79x | 14 | 23m | 26d ago | 27m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 44.49% | 44.49% | 927 ms | ↓ 0.95x | 0 | — | — | 34m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.27% | 74.27% | 786 ms | ↓ 0.82x | 1 | 0s | 16d ago | 33m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 93.48% | 93.48% | 93.48% | 493 ms | ↓ 0.65x | 5 | 7h 21m | 14d ago | 26m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 52.53% | 52.53% | 1205 ms | ↓ 0.78x | 1 | 0s | 8d ago | 41m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1403 ms | → 1.00x | 0 | — | — | 26m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.95% | 97.95% | 1675 ms | ↓ 0.78x | 0 | — | — | 31m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 41.89% | 41.89% | 953 ms | ↓ 0.69x | 0 | — | — | 41m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1155 ms | ↓ 0.82x | 1 | 0s | 8d ago | 26m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2038 ms | → 1.00x | 0 | — | — | 25m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.53% | 80.53% | 1245 ms | ↓ 0.92x | 1 | 0s | 15d ago | 33m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.92% | 97.92% | 778 ms | ↓ 0.75x | 1 | 0s | 14d ago | 34m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 99.85% | 98.16% | 98.16% | 2712 ms | → 0.98x | 3 | 0s | 9d ago | 30m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.77% | 99.77% | 99.77% | 1614 ms | ↑ 1.07x | 3 | 6m | 8d ago | 27m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.85% | 57.66% | 57.66% | 1518 ms | ↓ 0.84x | 3 | 0s | 11d ago | 34m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.01% | 61.01% | 1025 ms | ↓ 0.82x | 0 | — | — | 34m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2375 ms | ↓ 0.93x | 0 | — | — | 27m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.16% | 99.16% | 1423 ms | → 0.96x | 0 | — | — | 33m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.19% | 89.19% | 1697 ms | ↓ 0.81x | 1 | 0s | 17d ago | 33m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 86.04% | 86.04% | 460 ms | ↓ 0.88x | 0 | — | — | 28m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.78% | 99.78% | 2216 ms | ↓ 0.81x | 3 | 0s | 26d ago | 30m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.97% | 97.97% | 1842 ms | ↓ 0.87x | 0 | — | — | 33m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2714 ms | → 1.00x | 0 | — | — | 25m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 14.93% | 14.93% | 1295 ms | ↓ 0.70x | 1 | 0s | 25d ago | 41m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1860 ms | ↓ 0.91x | 3 | 0s | 10d ago | 44m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1564 ms | → 0.98x | 0 | — | — | 26m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.60% | 99.84% | 99.84% | 2554 ms | ↓ 0.82x | 8 | 0s | 8d ago | 46m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.06% | 98.06% | 2480 ms | ↓ 0.80x | 0 | — | — | 46m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.80% | 99.93% | 99.93% | 770 ms | ↓ 0.91x | 1 | 1h 16m | 11d ago | 41m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 71.83% | 71.83% | 1628 ms | ↓ 0.71x | 0 | — | — | 31m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.85% | 90.11% | 90.11% | 344 ms | → 1.01x | 3 | 0s | 9d ago | 28m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 778 ms | → 1.04x | 1 | 0s | 24d ago | 27m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1038 ms | ↓ 0.88x | 0 | — | — | 45m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.61% | 99.61% | 1699 ms | ↓ 0.94x | 2 | 0s | 11d ago | 43m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.85% | 88.42% | 88.42% | 1868 ms | ↓ 0.90x | 1 | 39m | 22d ago | 33m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 75.33% | 75.33% | 1920 ms | ↓ 0.86x | 0 | — | — | 30m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 911 ms | ↓ 0.74x | 0 | — | — | 26m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 80.70% | 80.70% | 1538 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1422 ms | ↓ 0.95x | 0 | — | — | 26m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1058 ms | → 0.97x | 0 | — | — | 28m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.99% | 98.99% | 457 ms | ↓ 0.67x | 0 | — | — | 34m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.60% | 98.60% | 248 ms | ↓ 0.27x | 0 | — | — | 32m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.76% | 96.76% | 317 ms | ↓ 0.57x | 0 | — | — | 28m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1038 ms | → 0.95x | 1 | 0s | 8d ago | 27m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.95% | 99.95% | 585 ms | ↓ 0.72x | 1 | 0s | 8d ago | 26m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1599 ms | ↓ 0.90x | 0 | — | — | 26m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.53% | 96.43% | 96.43% | 1518 ms | ↓ 0.80x | 12 | 23m | 25d ago | 27m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.28% | 96.77% | 96.77% | 255 ms | ↓ 0.67x | 12 | 3m | 27d ago | 28m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.68% | 98.68% | 119 ms | ↓ 0.57x | 0 | — | — | 30m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.92% | 98.92% | 713 ms | ↓ 0.91x | 0 | — | — | 35m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 14.82% | 14.82% | 2334 ms | ↓ 0.94x | 1 | 0s | 26d ago | 40m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.10% | 96.10% | 96.10% | 1045 ms | ↓ 0.77x | 40 | 17m | 8d ago | 26m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 100.00% | 100.00% | 410 ms | → 1.00x | 0 | — | — | 25m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 18.55% | 18.55% | 834 ms | ↓ 0.82x | 0 | — | — | 34m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 591 ms | ↓ 0.83x | 0 | — | — | 46m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2310 ms | ↑ 1.84x | 1 | 0s | 12d ago | 45m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 526 ms | ↓ 0.68x | 0 | — | — | 44m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.45% | 97.45% | 1049 ms | ↓ 0.82x | 0 | — | — | 28m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.87% | 97.87% | 1925 ms | ↓ 0.92x | 0 | — | — | 33m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 570 ms | ↑ 1.19x | 2 | 25m | 14d ago | 45m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.80% | 99.78% | 99.78% | 1292 ms | → 0.99x | 2 | 20m | 22d ago | 35m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1278 ms | → 1.01x | 0 | — | — | 27m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.66% | 98.66% | 4074 ms | ↓ 0.94x | 0 | — | — | 46m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2752 ms | ↓ 0.91x | 0 | — | — | 44m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1228 ms | → 0.96x | 0 | — | — | 27m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2220 ms | ↓ 0.89x | 1 | 0s | 22d ago | 40m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 38.62% | 38.62% | 728 ms | → 0.99x | 0 | — | — | 45m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.33% | 98.33% | 3487 ms | ↓ 0.88x | 0 | — | — | 31m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1043 ms | → 0.96x | 1 | 0s | 16d ago | 44m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.20% | 14.01% | 14.01% | 682 ms | ↓ 0.95x | 33 | 39m | 10d ago | 44m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1013 ms | ↓ 0.80x | 1 | 0s | 22d ago | 40m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 1853 ms | → 0.97x | 0 | — | — | 33m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.56% | 99.56% | 1543 ms | → 1.00x | 0 | — | — | 28m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.40% | 89.40% | 1001 ms | ↓ 0.91x | 0 | — | — | 33m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 602 ms | ↓ 0.82x | 0 | — | — | 45m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 58.51% | 58.51% | 973 ms | ↓ 0.81x | 3 | 0s | 14d ago | 34m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 17.09% | 17.09% | 2169 ms | ↓ 0.93x | 1 | 0s | 13d ago | 34m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2457 ms | → 1.02x | 0 | — | — | 44m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.90% | 88.64% | 88.64% | 1105 ms | ↓ 0.94x | 2 | 0s | 8d ago | 44m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.65% | 79.12% | 79.12% | 1557 ms | ↓ 0.84x | 2 | 50m | 27d ago | 46m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 78.63% | 78.63% | 78.63% | 1172 ms | → 1.02x | 1 | 5d 5h | 23d ago | 27m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 700 ms | ↓ 0.84x | 3 | 17m | 14d ago | 44m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1050 ms | ↓ 0.83x | 0 | — | — | 45m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.80% | 36.55% | 36.55% | 193 ms | ↓ 0.82x | 4 | 0s | 13d ago | 31m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 893 ms | ↓ 0.78x | 0 | — | — | 45m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 976 ms | ↓ 0.81x | 1 | 0s | 8d ago | 26m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.99% | 98.99% | 2235 ms | → 1.04x | 0 | — | — | 43m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.13% | 98.13% | 1132 ms | ↓ 0.90x | 0 | — | — | 28m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.78% | 97.78% | 1592 ms | ↓ 0.81x | 0 | — | — | 29m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.74% | 95.79% | 95.79% | 408 ms | ↓ 0.56x | 2 | 31m | 15d ago | 28m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.43% | 67.43% | 872 ms | → 0.98x | 0 | — | — | 33m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 990 ms | → 1.00x | 0 | — | — | 25m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.85% | 79.08% | 79.08% | 1463 ms | ↓ 0.90x | 1 | 51m | 8d ago | 33m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1417 ms | → 0.97x | 0 | — | — | 43m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1645 ms | ↓ 0.77x | 0 | — | — | 45m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 2115 ms | ↓ 0.92x | 1 | 0s | 8d ago | 27m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.85% | 91.74% | 91.74% | 1418 ms | ↑ 1.05x | 3 | 0s | 15d ago | 32m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 85.08% | 31.84% | 31.84% | 1666 ms | ↓ 0.91x | 9 | 10h 57m | 18d ago | 34m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.24% | 45.29% | 45.29% | 557 ms | ↓ 0.71x | 4 | 7h 27m | 22d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.71% | 84.71% | 267 ms | ↓ 0.55x | 0 | — | — | 43m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.68% | 89.68% | 258 ms | ↓ 0.33x | 1 | 0s | 15d ago | 31m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.24% | 99.24% | 2010 ms | → 0.99x | 0 | — | — | 33m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.45% | 96.45% | 1067 ms | ↓ 0.95x | 0 | — | — | 34m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 16.71% | 16.71% | 967 ms | ↑ 1.05x | 1 | 0s | 24d ago | 41m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.75% | 99.75% | 2411 ms | ↓ 0.86x | 1 | 0s | 28d ago | 45m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.53% | 55.53% | 548 ms | ↓ 0.67x | 0 | — | — | 34m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.49% | 98.27% | 98.27% | 1243 ms | → 0.99x | 1 | 4h 17m | 8d ago | 32m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2607 ms | ↑ 1.05x | 0 | — | — | 45m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.13% | 65.37% | 65.37% | 650 ms | ↓ 0.93x | 7 | 29m | 8d ago | 33m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.18% | 99.18% | 1639 ms | ↓ 0.78x | 2 | 0s | 28d ago | 33m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.69% | 77.89% | 77.89% | 1241 ms | ↓ 0.90x | 1 | 1h 39m | 30d ago | 33m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 501 ms | → 1.00x | 0 | — | — | 25m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.90% | 99.90% | 1745 ms | ↓ 0.93x | 2 | 0s | 27d ago | 43m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 933 ms | → 1.00x | 1 | 0s | 8d ago | 27m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1674 ms | ↓ 0.89x | 0 | — | — | 40m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2414 ms | ↓ 0.87x | 1 | 0s | 10d ago | 45m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.29% | 85.29% | 1764 ms | ↓ 0.93x | 0 | — | — | 33m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.88% | 99.88% | 99.88% | 1064 ms | → 1.00x | 2 | 0s | 8d ago | 27m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.90% | 95.90% | 1100 ms | → 0.97x | 0 | — | — | 34m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 837 ms | ↓ 0.95x | 0 | — | — | 43m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.38% | 98.38% | 425 ms | ↓ 0.51x | 1 | 0s | 21d ago | 31m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 17.64% | 17.64% | 307 ms | ↓ 0.36x | 0 | — | — | 34m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 734 ms | → 0.96x | 0 | — | — | 30m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.77% | 58.77% | 1695 ms | ↓ 0.95x | 0 | — | — | 34m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.80% | 99.80% | 2536 ms | ↓ 0.95x | 0 | — | — | 44m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.63% | 90.56% | 90.56% | 27 ms | ↓ 0.17x | 4 | 1d 5h | 20d ago | 28m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.79% | 98.93% | 98.93% | 800 ms | ↓ 0.90x | 1 | 7h 40m | 12d ago | 43m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 14.90% | 14.90% | 836 ms | → 0.97x | 0 | — | — | 43m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 987 ms | → 1.04x | 0 | — | — | 27m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.35% | 99.35% | 1182 ms | → 1.00x | 0 | — | — | 27m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.94% | 99.94% | 99.94% | 1580 ms | ↓ 0.70x | 1 | 0s | 27d ago | 27m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1250 ms | ↑ 1.06x | 0 | — | — | 27m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.24% | 99.42% | 99.42% | 2328 ms | ↓ 0.82x | 8 | 24m | 8d ago | 46m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.85% | 17.67% | 17.67% | 1185 ms | ↓ 0.91x | 3 | 0s | 11d ago | 34m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.11% | 93.11% | 4508 ms | ↑ 1.06x | 0 | — | — | 44m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1644 ms | ↓ 0.79x | 0 | — | — | 33m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.85% | 98.78% | 98.78% | 2439 ms | ↓ 0.88x | 3 | 0s | 27d ago | 30m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.18% | 99.18% | 99.18% | 1190 ms | ↓ 0.77x | 10 | 8m | 26d ago | 27m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.12% | 99.12% | 928 ms | ↓ 0.80x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1492 ms | ↓ 0.88x | 2 | 10m | 8d ago | 27m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1465 ms | ↑ 1.08x | 1 | 0s | 10d ago | 45m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.43% | 99.43% | 881 ms | ↓ 0.86x | 0 | — | — | 43m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 425 ms | ↓ 0.90x | 0 | — | — | 46m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 100.00% | 91.76% | 91.76% | 984 ms | ↓ 0.88x | 0 | — | — | 43m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.39% | 98.39% | 2484 ms | ↑ 1.19x | 0 | — | — | 28m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.65% | 96.55% | 96.55% | 2339 ms | ↓ 0.94x | 1 | 1h 60m | 30d ago | 44m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1847 ms | ↓ 0.83x | 0 | — | — | 25m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.35% | 99.36% | 99.36% | 1566 ms | ↓ 0.88x | 9 | 5m | 7d ago | 27m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.14% | 87.14% | 1359 ms | → 1.01x | 0 | — | — | 32m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.78% | 99.78% | 838 ms | ↓ 0.64x | 1 | 0s | 27d ago | 28m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1417 ms | → 0.99x | 0 | — | — | 44m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1125 ms | ↑ 1.10x | 0 | — | — | 45m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 711 ms | ↓ 0.78x | 1 | 0s | 8d ago | 26m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 952 ms | ↑ 1.11x | 0 | — | — | 45m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.69% | 70.73% | 70.73% | 1045 ms | ↓ 0.83x | 6 | 0s | 8d ago | 31m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 721 ms | → 1.00x | 0 | — | — | 42m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.76% | 83.76% | 1765 ms | ↓ 0.82x | 2 | 0s | 26d ago | 40m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.85% | 20.50% | 20.50% | 1646 ms | ↓ 0.87x | 3 | 0s | 15d ago | 46m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.79% | 98.79% | 1463 ms | ↓ 0.78x | 0 | — | — | 32m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.82% | 91.82% | 2950 ms | ↓ 0.80x | 0 | — | — | 46m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 699 ms | → 0.96x | 1 | 0s | 25d ago | 26m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.94% | 99.94% | 99.94% | 339 ms | ↓ 0.68x | 1 | 0s | 8d ago | 26m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.88% | 96.66% | 96.66% | 794 ms | → 0.99x | 1 | 20m | 30d ago | 27m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.72% | 98.72% | 476 ms | ↓ 0.93x | 0 | — | — | 33m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.39% | 98.66% | 98.66% | 1837 ms | ↓ 0.71x | 1 | 3h 60m | 20d ago | 42m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.80% | 97.54% | 97.54% | 2598 ms | → 0.97x | 3 | 6m | 10d ago | 30m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.94% | 99.94% | 518 ms | ↓ 0.93x | 1 | 0s | 8d ago | 27m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.39% | 98.49% | 98.49% | 501 ms | ↓ 0.54x | 5 | 28m | 12d ago | 31m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 25.85% | 25.85% | 870 ms | ↑ 1.07x | 1 | 0s | 12d ago | 42m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.13% | 98.13% | 1432 ms | → 1.01x | 0 | — | — | 32m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 100.00% | 100.00% | 100.00% | 1286 ms | → 1.00x | 0 | — | — | 25m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 969 ms | ↓ 0.82x | 0 | — | — | 42m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.40% | 87.40% | 2255 ms | → 0.95x | 0 | — | — | 33m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.40% | 96.40% | 1568 ms | ↓ 0.90x | 0 | — | — | 34m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1342 ms | ↓ 0.85x | 0 | — | — | 42m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 14.90% | 14.90% | 1813 ms | ↓ 0.88x | 1 | 0s | 19d ago | 44m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 872 ms | ↑ 1.12x | 0 | — | — | 27m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.64% | 96.39% | 96.39% | 1236 ms | → 0.99x | 2 | 51m | 22d ago | 28m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 630 ms | ↓ 0.77x | 1 | 0s | 28d ago | 44m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 16.87% | 16.87% | 1678 ms | ↓ 0.89x | 0 | — | — | 34m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 14.72% | 14.72% | 1318 ms | ↓ 0.79x | 3 | 0s | 27d ago | 34m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.95% | 99.89% | 99.89% | 2416 ms | ↓ 0.94x | 1 | 0s | 9d ago | 30m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1371 ms | → 0.99x | 0 | — | — | 44m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.27% | 99.64% | 99.64% | 1893 ms | ↓ 0.81x | 6 | 2h 50m | 12d ago | 42m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1779 ms | ↓ 0.84x | 0 | — | — | 42m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.28% | 98.28% | 1015 ms | → 1.02x | 0 | — | — | 28m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1657 ms | ↓ 0.88x | 2 | 0s | 17d ago | 40m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1935 ms | ↓ 0.88x | 0 | — | — | 34m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.09% | 99.09% | 1528 ms | ↑ 1.11x | 0 | — | — | 44m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 364 ms | → 0.97x | 0 | — | — | 43m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.76% | 94.51% | 84.55% | 84.55% | 4340 ms | → 0.96x | 34 | 44m | 7d ago | 46m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.70% | 99.70% | 2474 ms | ↓ 0.83x | 2 | 0s | 3d ago | 46m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.34% | 98.82% | 98.82% | 2090 ms | ↓ 0.81x | 11 | 4m | 2d ago | 46m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 98.89% | 97.77% | 97.77% | 3420 ms | → 1.01x | 22 | 0s | 5d ago | 44m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.65% | 99.72% | 99.72% | 548 ms | ↓ 0.93x | 7 | 0s | 2d ago | 45m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.76% | 99.65% | 86.71% | 86.71% | 1217 ms | ↓ 0.83x | 7 | 0s | 7d ago | 44m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.80% | 99.72% | 99.72% | 2441 ms | ↓ 0.91x | 4 | 0s | 7d ago | 44m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 99.09% | 99.84% | 99.84% | 1598 ms | ↓ 0.73x | 18 | 0s | 2d ago | 45m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.75% | 99.64% | 99.64% | 857 ms | → 1.00x | 4 | 5m | 4d ago | 43m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.76% | 99.90% | 14.91% | 14.91% | 2081 ms | ↑ 1.06x | 2 | 0s | 2d ago | 44m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 189 ms | → 0.97x | 1 | 0s | 2d ago | 45m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.95% | 34.89% | 34.89% | 1368 ms | ↓ 0.67x | 1 | 0s | 7d ago | 45m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.54% | 97.74% | 97.74% | 2576 ms | ↓ 0.88x | 7 | 6m | 2d ago | 40m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.90% | 98.82% | 98.82% | 1033 ms | → 1.01x | 2 | 0s | 2d ago | 42m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.84% | 99.84% | 3299 ms | ↓ 0.79x | 3 | 0s | 5d ago | 40m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.47% | 99.42% | 99.42% | 2587 ms | ↓ 0.76x | 19 | 12m | 2d ago | 40m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.85% | 99.18% | 99.18% | 2944 ms | ↓ 0.90x | 3 | 0s | 1d ago | 40m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2482 ms | ↓ 0.87x | 1 | 0s | 4d ago | 41m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1820 ms | ↓ 0.88x | 1 | 0s | 4d ago | 42m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.76% | 97.96% | 16.66% | 16.66% | 1442 ms | ↓ 0.81x | 3 | 4h 7m | 1d ago | 34m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.43% | 92.43% | 905 ms | ↓ 0.80x | 1 | 0s | 5d ago | 34m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.95% | 49.90% | 49.90% | 1390 ms | ↓ 0.91x | 1 | 0s | 2h ago | 34m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.76% | 99.85% | 99.31% | 99.31% | 1380 ms | ↓ 0.88x | 3 | 0s | 7h ago | 34m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.76% | 75.31% | 46.36% | 46.36% | 3559 ms | → 1.01x | 2 | 3d 9h | 6d ago | 35m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.95% | 16.81% | 16.81% | 1404 ms | ↓ 0.89x | 1 | 0s | 2h ago | 34m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.76% | 99.95% | 99.86% | 99.86% | 905 ms | ↓ 0.87x | 1 | 0s | 6d ago | 35m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.95% | 65.14% | 65.14% | 884 ms | ↑ 1.07x | 1 | 0s | 16h ago | 34m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.74% | 15.57% | 15.57% | 1182 ms | ↓ 0.94x | 5 | 0s | 2d ago | 34m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.76% | 99.90% | 97.50% | 97.50% | 557 ms | ↓ 0.66x | 2 | 0s | 2d ago | 28m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.76% | 99.64% | 96.56% | 96.56% | 1997 ms | → 0.97x | 2 | 50m | 4d ago | 32m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.76% | 99.69% | 97.35% | 97.35% | 1536 ms | ↓ 0.70x | 3 | 20m | 4d ago | 31m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.76% | 99.95% | 63.90% | 63.90% | 1374 ms | → 0.95x | 1 | 0s | 2d ago | 33m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.76% | 99.69% | 97.58% | 97.58% | 2736 ms | ↓ 0.77x | 6 | 0s | 4d ago | 30m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.76% | 99.54% | 59.31% | 59.31% | 822 ms | ↓ 0.76x | 5 | 16m | 2d ago | 33m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.59% | 97.17% | 97.17% | 1539 ms | ↓ 0.85x | 8 | 0s | 6d ago | 28m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.76% | 99.59% | 99.19% | 99.19% | 178 ms | ↓ 0.87x | 4 | 35m | 12h ago | 30m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 99.76% | 91.86% | 83.62% | 83.62% | 682 ms | ↓ 0.65x | 2 | 1d 3h | 3d ago | 31m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.76% | 99.69% | 90.45% | 90.45% | 916 ms | ↓ 0.74x | 4 | 10m | 3d ago | 28m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.76% | 56.40% | 79.08% | 79.08% | 362 ms | ↓ 0.70x | 4 | 3d 1h | 23h ago | 28m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.76% | 99.95% | 98.86% | 98.86% | 2407 ms | → 0.98x | 1 | 0s | 6d ago | 32m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.76% | 99.90% | 99.92% | 99.92% | 697 ms | ↓ 0.77x | 2 | 0s | 2d ago | 28m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.76% | 99.90% | 35.09% | 35.09% | 1892 ms | → 0.98x | 2 | 0s | 7d ago | 33m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.76% | 99.95% | 52.75% | 52.75% | 3316 ms | ↓ 0.84x | 1 | 0s | 3d ago | 31m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.76% | 99.85% | 78.21% | 78.21% | 1448 ms | ↓ 0.92x | 3 | 0s | 4d ago | 33m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.76% | 94.58% | 70.64% | 70.64% | 1196 ms | ↓ 0.87x | 16 | 1h 54m | 6d ago | 33m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.76% | 99.95% | 99.78% | 99.78% | 644 ms | ↓ 0.82x | 1 | 0s | 6d ago | 32m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 99.23% | 90.49% | 90.49% | 1274 ms | ↓ 0.80x | 15 | 0s | 2d ago | 33m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.76% | 99.83% | 99.83% | 99.83% | 1737 ms | ↓ 0.92x | 3 | 0s | 4d ago | 27m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.76% | 99.60% | 99.60% | 99.60% | 873 ms | → 0.97x | 7 | 0s | 2d ago | 27m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.76% | 98.00% | 98.52% | 98.52% | 2320 ms | ↓ 0.84x | 2 | 6h 41m | 7d ago | 27m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.76% | 99.83% | 99.83% | 99.83% | 788 ms | → 1.02x | 3 | 0s | 11h ago | 27m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.10% | 98.60% | 98.60% | 1273 ms | → 1.04x | 4 | 2h 47m | 2d ago | 27m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.76% | 98.51% | 98.60% | 98.60% | 1700 ms | ↑ 1.06x | 2 | 4h 11m | 13h ago | 27m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.77% | 99.77% | 99.77% | 1032 ms | ↓ 0.83x | 4 | 0s | 2d ago | 26m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.75% | 99.77% | 99.77% | 99.77% | 1451 ms | → 1.03x | 1 | 0s | 6d ago | 25m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.52% | 98.24% | 83.24% | 83.24% | 2642 ms | ↓ 0.82x | 34 | 35s | 5h ago | 46m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.52% | 98.94% | 99.23% | 99.23% | 818 ms | ↓ 0.91x | 15 | 8m | 1d ago | 45m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.70% | 98.99% | 98.99% | 3091 ms | → 1.04x | 2 | 45m | 5d ago | 44m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.52% | 99.65% | 99.83% | 99.83% | 139 ms | ↓ 0.63x | 5 | 12m | 5d ago | 44m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.52% | 99.39% | 84.64% | 84.64% | 2098 ms | ↑ 1.07x | 12 | 0s | 15h ago | 45m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.52% | 98.69% | 59.97% | 59.97% | 2557 ms | ↓ 0.86x | 24 | 2m | 2d ago | 45m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.52% | 97.75% | 85.58% | 85.58% | 4770 ms | → 0.98x | 39 | 3m | 21h ago | 34m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.52% | 99.74% | 96.60% | 96.60% | 4331 ms | → 1.03x | 5 | 0s | 1d ago | 34m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.51% | 99.39% | 70.18% | 70.18% | 1075 ms | ↓ 0.87x | 10 | 4m | 2d ago | 33m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.51% | 97.90% | 98.57% | 98.57% | 1139 ms | → 0.99x | 10 | 1h 4m | 2d ago | 33m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.51% | 99.85% | 99.80% | 99.80% | 1251 ms | ↓ 0.81x | 2 | 14m | 2d ago | 31m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.51% | 99.69% | 98.13% | 98.13% | 1417 ms | ↓ 0.71x | 6 | 0s | 4d ago | 30m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.51% | 99.90% | 99.87% | 99.87% | 1616 ms | ↓ 0.86x | 1 | 30m | 7d ago | 32m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.51% | 94.01% | 92.14% | 92.14% | 2108 ms | ↓ 0.93x | 10 | 3h 52m | 2d ago | 31m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.51% | 99.90% | 99.74% | 99.74% | 575 ms | ↓ 0.51x | 1 | 20m | 1d ago | 28m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.51% | 99.85% | 97.63% | 97.63% | 1373 ms | → 0.97x | 3 | 0s | 15h ago | 28m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.51% | 98.98% | 40.97% | 40.97% | 1100 ms | ↓ 0.77x | 16 | 5m | 6d ago | 30m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.51% | 98.18% | 98.18% | 98.18% | 1552 ms | ↓ 0.86x | 17 | 20m | 3d ago | 27m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.51% | 98.53% | 98.53% | 98.53% | 1217 ms | ↓ 0.63x | 14 | 16m | 1d ago | 27m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.51% | 99.32% | 99.32% | 99.32% | 1707 ms | → 0.96x | 3 | 1h 3m | 5d ago | 27m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.51% | 99.83% | 99.83% | 99.83% | 2674 ms | → 0.96x | 3 | 0s | 15h ago | 27m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.47% | 99.47% | 99.47% | 99.47% | 4558 ms | → 1.00x | 2 | 0s | 3d ago | 25m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.28% | 97.33% | 98.13% | 98.13% | 4609 ms | → 0.98x | 47 | 3m | 21h ago | 46m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.28% | 98.23% | 98.69% | 98.69% | 3005 ms | ↓ 0.94x | 29 | 5m | 2d ago | 43m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.27% | 98.46% | 95.99% | 95.99% | 1041 ms | ↓ 0.91x | 2 | 4h 44m | 3d ago | 28m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.27% | 99.53% | 99.53% | 99.53% | 2198 ms | ↓ 0.91x | 7 | 3m | 3h ago | 27m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.27% | 99.24% | 99.24% | 99.24% | 1055 ms | ↓ 0.89x | 4 | 48m | 2h ago | 27m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.27% | 99.82% | 99.82% | 99.82% | 920 ms | → 0.98x | 2 | 11m | 5h ago | 26m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.03% | 97.26% | 98.95% | 98.95% | 3743 ms | → 0.97x | 18 | 42m | 15h ago | 42m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.03% | 99.19% | 96.44% | 96.44% | 1271 ms | ↓ 0.94x | 7 | 27m | 3d ago | 41m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.03% | 93.95% | 66.92% | 66.92% | 3975 ms | ↓ 0.85x | 47 | 32m | 24h ago | 41m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.03% | 96.96% | 85.02% | 85.02% | 4470 ms | → 1.02x | 56 | 2m | 2d ago | 42m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.03% | 97.95% | 63.77% | 63.77% | 4647 ms | → 0.96x | 36 | 3m | 2d ago | 33m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 99.03% | 99.49% | 99.49% | 99.49% | 815 ms | ↓ 0.74x | 9 | 0s | 11h ago | 26m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 99.03% | 99.72% | 98.77% | 98.77% | 1422 ms | ↓ 0.91x | 2 | 44m | 7d ago | 27m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (48)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 98.80% | 98.43% | 92.09% | 92.09% | 942 ms | ↓ 0.94x | 9 | 49m | 2d ago | 44m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.80% | 99.60% | 99.41% | 99.41% | 1708 ms | → 0.96x | 3 | 33m | 11h ago | 44m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.79% | 87.20% | 13.23% | 13.23% | 2021 ms | ↓ 0.83x | 194 | 6m | 2d ago | 41m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.79% | 97.21% | 99.13% | 99.13% | 3634 ms | ↓ 0.95x | 18 | 43m | 15h ago | 42m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.79% | 97.39% | 84.38% | 84.38% | 4603 ms | ↓ 0.95x | 50 | 22s | 2d ago | 31m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.78% | 98.59% | 98.59% | 98.59% | 1548 ms | ↑ 1.07x | 22 | 2m | 11h ago | 26m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.55% | 96.75% | 73.18% | 73.18% | 4289 ms | ↓ 0.93x | 55 | 4m | 1h ago | 41m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.55% | 94.92% | 14.40% | 14.40% | 3339 ms | ↓ 0.83x | 68 | 10m | 2d ago | 40m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.54% | 97.85% | 90.09% | 90.09% | 2964 ms | ↓ 0.91x | 35 | 5m | 4h ago | 30m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.54% | 99.69% | 99.71% | 99.71% | 2300 ms | ↓ 0.76x | 1 | 2h 18m | 7d ago | 30m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 98.54% | 96.00% | 96.00% | 96.00% | 873 ms | ↑ 1.17x | 10 | 2h 8m | 3d ago | 27m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.31% | 98.98% | 98.95% | 98.95% | 1719 ms | ↓ 0.78x | 15 | 8m | 5d ago | 40m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.30% | 99.49% | 96.64% | 96.64% | 2175 ms | → 0.96x | 6 | 16m | 5d ago | 28m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.30% | 98.06% | 98.06% | 98.06% | 2512 ms | ↓ 0.92x | 15 | 27m | 3h ago | 27m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.07% | 81.84% | 51.32% | 51.32% | 2691 ms | ↓ 0.83x | 3 | 1d 21h | 2d ago | 41m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.07% | 99.34% | 99.68% | 99.68% | 2836 ms | ↓ 0.93x | 11 | 4m | 14h ago | 40m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.06% | 95.85% | 83.86% | 83.86% | 4703 ms | → 0.98x | 47 | 17m | 15h ago | 30m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.04% | 99.55% | 99.55% | 99.55% | 398 ms | → 0.96x | 2 | 1h | 1d ago | 26m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 97.83% | 87.44% | 13.09% | 13.09% | 2285 ms | → 0.99x | 12 | 6h 39m | 1d ago | 40m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.82% | 95.03% | 81.44% | 81.44% | 4683 ms | → 0.97x | 85 | 4m | 2d ago | 30m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 97.81% | 98.94% | 98.94% | 98.94% | 941 ms | ↓ 0.93x | 11 | 17m | 22h ago | 27m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.60% | 96.27% | 79.32% | 79.32% | 122 ms | ↓ 0.84x | 6 | 4h 55m | 20h ago | 46m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.57% | 99.13% | 85.06% | 85.06% | 1099 ms | ↓ 0.66x | 6 | 46m | 21h ago | 30m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.34% | 93.95% | 98.63% | 98.63% | 3738 ms | ↓ 0.87x | 73 | 13m | 16h ago | 40m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.33% | 76.02% | 84.06% | 84.06% | 1477 ms | ↓ 0.94x | 3 | 2d 4h | 4d ago | 28m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.33% | 94.94% | 80.84% | 80.84% | 4841 ms | → 0.99x | 85 | 4m | 15h ago | 32m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 97.08% | 74.63% | 74.63% | 74.63% | 2546 ms | ↓ 0.88x | 10 | 16h 47m | 5d ago | 27m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 96.11% | 98.82% | 99.05% | 99.05% | 211 ms | ↓ 0.38x | 7 | 49m | 3d ago | 27m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.62% | 95.23% | 96.36% | 96.36% | 3732 ms | ↑ 1.18x | 15 | 1h 47m | 3d ago | 27m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.26% | 95.26% | 95.26% | 95.26% | 427 ms | → 1.00x | 2 | 2h 41m | 9h ago | 25m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.17% | 96.35% | 14.38% | 14.38% | 2109 ms | → 1.00x | 66 | 2m | 3d ago | 42m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.93% | 98.23% | 27.24% | 27.24% | 1398 ms | ↑ 1.09x | 8 | 1h 23m | 2d ago | 42m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 94.70% | 98.68% | 99.09% | 99.09% | 1231 ms | ↓ 0.91x | 21 | 7m | 14m ago | 43m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 94.43% | 89.07% | 15.76% | 15.76% | 4523 ms | → 0.95x | 168 | 7m | 6h ago | 34m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 94.42% | 98.72% | 96.23% | 96.23% | 2801 ms | ↓ 0.95x | 6 | 1h 27m | 2d ago | 28m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 94.16% | 94.41% | 94.41% | 94.41% | 1195 ms | ↑ 1.12x | 3 | 11h 15m | 7d ago | 27m ago |
| [未命名API](https://lmspeed.net/provider/api-ai-claw-cloud) | 93.87% | 85.40% | 85.40% | 85.40% | 812 ms | → 0.95x | 51 | 21m | 5d ago | 25m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 92.48% | 97.24% | 95.42% | 95.42% | 2265 ms | → 0.95x | 4 | 4h 46m | 3d ago | 32m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.23% | 97.59% | 95.08% | 95.08% | 1641 ms | ↑ 1.08x | 3 | 5h 26m | 4d ago | 28m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 90.46% | 97.17% | 97.17% | 97.17% | 417 ms | ↓ 0.38x | 3 | 5h 59m | 7d ago | 26m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 88.35% | 88.73% | 49.89% | 49.89% | 4019 ms | → 0.98x | 181 | 5m | 3h ago | 29m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 85.44% | 75.05% | 86.80% | 86.80% | 651 ms | ↓ 0.64x | 2 | 4d | 13d ago | 28m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.91% | 95.65% | 95.65% | 95.65% | 1264 ms | → 0.96x | 2 | 13h 54m | 1d ago | 27m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 80.72% | 35.56% | 21.83% | 21.83% | 3425 ms | → 1.02x | 69 | 5h 60m | 24h ago | 44m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 61.54% | 61.54% | 61.54% | 61.54% | 1334 ms | → 1.00x | 1 | 13h 12m | 1d ago | 25m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 56.07% | 90.37% | 96.62% | 96.62% | 3221 ms | ↓ 0.83x | 8 | 9h 6m | 7d ago | 30m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 42.17% | 8.84% | 10.47% | 10.47% | 2381 ms | → 1.00x | 1 | 26d 23h | 30d ago | 44m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 39.08% | 8.24% | 30.30% | 30.30% | 694 ms | → 1.00x | 2 | 13d 15h | 1d ago | 33m ago |

</details>

<details open>
<summary><strong>🔴 Down (225)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.76% | 99.90% | 99.55% | 99.55% | 782 ms | ↓ 0.70x | 2 | 0s | 33m ago | 33m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.27% | 97.80% | 14.75% | 14.75% | 2175 ms | ↓ 0.89x | 10 | 1h 16m | 1h ago | 34m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 91.73% | 96.65% | 96.65% | 96.65% | 1184 ms | ↓ 0.65x | 14 | 1h 3m | 11h ago | 27m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.06% | 68.27% | 18.88% | 18.88% | 4738 ms | → 1.02x | 362 | 17m | 1h ago | 33m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 70.53% | 63.86% | 62.03% | 62.03% | 4821 ms | → 0.99x | 393 | 18m | 1h ago | 41m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 68.95% | 93.41% | 93.41% | 93.41% | 410 ms | ↓ 0.61x | 1 | 2d 5h | 2d ago | 25m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 67.71% | 53.85% | 5.62% | 5.62% | 1238 ms | ↓ 0.95x | 5 | 2d 15h | 2d ago | 43m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 67.63% | 90.37% | 42.71% | 42.71% | 1086 ms | → 0.97x | 17 | 4h 5m | 2d ago | 42m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 47.57% | 86.12% | 88.05% | 88.05% | 1948 ms | ↓ 0.83x | 2 | 2d 5h | 4d ago | 29m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 39.81% | 84.89% | 91.67% | 91.67% | 1383 ms | ↓ 0.79x | 5 | 22h 56m | 4d ago | 28m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 28.50% | 84.88% | 96.51% | 96.51% | 1665 ms | ↓ 0.71x | 6 | 19h 52m | 5d ago | 41m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 11.03% | 10.07% | 10.07% | 10.07% | 3163 ms | ↓ 0.90x | 158 | 3h 24m | 3h ago | 25m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 10.92% | 47.28% | 28.62% | 28.62% | 1071 ms | → 0.97x | 5 | 3d 3h | 6d ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 2.67% | 13.25% | 27.76% | 27.76% | 2414 ms | ↓ 0.76x | 31 | 19h 29m | 6d ago | 31m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.96% | 1.11% | 61.93% | 61.93% | 3431 ms | → 1.04x | 22 | 1d 8h | 1d ago | 46m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 84.38% | 84.38% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 69.88% | 69.88% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 75.15% | 75.15% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 66.99% | 69.34% | 69.34% | — | — | 16 | 16h 11m | 11d ago | 26m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 56.50% | 87.95% | 87.95% | — | — | 7 | 2d | 14d ago | 31m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 67.39% | 67.39% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.78% | 5.78% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.77% | 12.77% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 20.49% | 66.18% | 66.18% | — | — | 3 | 8d 3h | 22d ago | 28m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 34m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.46% | 3.46% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 39.91% | 77.50% | 77.50% | — | — | 2 | 9d 11h | 19d ago | 29m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 84.64% | 84.64% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.15% | 37.15% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 18.80% | 62.14% | 62.14% | — | — | 3 | 8d 6h | 25d ago | 29m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 50.71% | 94.53% | 94.53% | — | — | 4 | 3d 23h | 16d ago | 45m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.72% | 24.72% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 75.96% | 75.96% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 55.24% | 55.24% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.89% | 30.89% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 85.04% | 85.04% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 64.06% | 64.06% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 78.56% | 78.56% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.96% | 15.96% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 51.96% | 51.96% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 36.07% | 36.07% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 60.16% | 85.41% | 85.41% | — | — | 2 | 6d 11h | 13d ago | 34m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.60% | 3.60% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 34m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 85.24% | 85.24% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 52.27% | 52.27% | 52.27% | — | — | 6 | 2d 6h | 14d ago | 26m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.93% | 52.93% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.10% | 2.10% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 62.26% | 93.40% | 93.40% | — | — | 13 | 22h 24m | 12d ago | 42m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 72.75% | 87.82% | 87.82% | — | — | 2 | 4d 11h | 8d ago | 29m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 77.56% | 47.04% | 47.04% | — | — | 2 | 3d 17h | 7d ago | 33m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 35.47% | 82.74% | 82.74% | — | — | 3 | 6d 17h | 20d ago | 31m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 35.08% | 35.08% | 35.08% | — | — | 1 | 18d 15h | 19d ago | 26m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 40.82% | 68.11% | 68.11% | — | — | 2 | 9d 8h | 19d ago | 33m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 34.85% | 34.85% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.70% | 55.70% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 78.07% | 61.55% | 61.55% | — | — | 5 | 1d 11h | 7d ago | 29m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.38% | 25.38% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.43% | 30.43% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 58.36% | 58.36% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 57.68% | 25.86% | 25.86% | — | — | 1 | 13d 21h | 14d ago | 32m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.77% | 5.77% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 67.15% | 67.15% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 84.99% | 84.99% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.51% | 7.51% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 81.15% | 81.15% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 29.13% | 83.74% | 83.74% | — | — | 3 | 7d 6h | 19d ago | 45m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 59.01% | 35.59% | 35.59% | — | — | 21 | 15h 1m | 13d ago | 31m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 27m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 34m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 29.71% | 29.71% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.99% | 53.99% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 35.65% | 57.78% | 57.78% | — | — | 3 | 6d 17h | 20d ago | 32m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 13.41% | 12.34% | 12.34% | — | — | 1 | 23d 6h | 23d ago | 28m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 39.96% | 74.29% | 74.29% | — | — | 2 | 9d 11h | 19d ago | 30m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 78.22% | 78.22% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.69% | 47.69% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.34% | 43.34% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 43.81% | 43.81% | 43.81% | — | — | 5 | 3d 4h | 16d ago | 26m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 85.00% | 85.00% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 60.03% | 60.03% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.88% | 39.88% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 56.45% | 87.96% | 87.96% | — | — | 7 | 2d | 14d ago | 31m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 35m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.44% | 32.44% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.63% | 2.63% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 39.79% | 85.23% | 85.23% | — | — | 2 | 9d 11h | 19d ago | 44m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.62% | 42.62% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 84.96% | 84.96% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.87% | 33.87% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 84.89% | 84.89% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 23.36% | 62.97% | 62.97% | — | — | 1 | 23d 13h | 24d ago | 28m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 27.52% | 27.52% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 46.66% | 46.66% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 82.50% | 82.50% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 70.07% | 70.07% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 24.74% | 34.54% | 34.54% | — | — | 6 | 3d 20h | 23d ago | 28m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 80.93% | 80.93% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 56.32% | 56.32% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.36% | 3.36% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.28% | 44.28% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 79.31% | 79.31% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 60.50% | 60.50% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 38.77% | 55.66% | 55.66% | — | — | 20 | 22h 46m | 19d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 24.49% | 70.28% | 70.28% | — | — | 33 | 16h 36m | 23d ago | 30m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 29.18% | 91.14% | 91.14% | — | — | 1 | 21d 23h | 22d ago | 42m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.02% | 29.02% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 11.38% | 11.38% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.33% | 13.33% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 3.74% | 29.96% | 29.96% | — | — | 2 | 14d 11h | 29d ago | 28m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.72% | 24.72% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 27m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 67.98% | 54.32% | 54.32% | — | — | 14 | 17h 45m | 10d ago | 42m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 69.76% | 96.51% | 96.51% | — | — | 17 | 13h 24m | 8d ago | 44m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 61.15% | 61.15% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 12.87% | 12.87% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.91% | 17.91% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.77% | 50.77% | — | — | 1 | 29d 24h | 30d ago | 41m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 35.73% | 35.73% | 35.73% | — | — | 1 | 17d 19h | 18d ago | 27m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 10h | 26d ago | 27m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.58% | 56.58% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 22.28% | 25.27% | 25.27% | — | — | 16 | 1d 12h | 24d ago | 30m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 40.64% | 40.64% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 54.55% | 54.55% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.69% | 5.69% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 75.38% | 86.63% | 86.63% | — | — | 2 | 4d 3h | 8d ago | 32m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 47.47% | 92.62% | 92.62% | — | — | 1 | 16d 18h | 17d ago | 43m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 85.09% | 85.09% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 34m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 65.50% | 65.50% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 76.91% | 76.91% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 45m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 83.83% | 83.83% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.10% | 20.10% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 73.79% | 61.33% | 61.33% | — | — | 1 | 8d 18h | 9d ago | 46m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 73.62% | 47.89% | 47.89% | — | — | 18 | 11h 12m | 8d ago | 29m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.20% | 4.18% | 4.18% | — | — | 2 | 14d 23h | 10d ago | 41m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.06% | 35.06% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.29% | 70.36% | 70.36% | — | — | 4 | 7d 5h | 8d ago | 44m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.98% | 7.98% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 67.36% | 67.36% | — | — | 1 | 29d 24h | 30d ago | 46m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 48.15% | 48.15% | 48.15% | — | — | 2 | 7d 8h | 15d ago | 27m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 26d 11h | 26d ago | 35m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 69.34% | 69.34% | — | — | 1 | 29d 24h | 30d ago | 44m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 28.46% | 51.38% | 51.38% | — | — | 12 | 1d 20h | 22d ago | 27m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 7.76% | 7.76% | — | — | 1 | 26d 10h | 26d ago | 27m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 60.82% | 73.53% | 73.53% | — | — | 12 | 1d | 8d ago | 27m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 53.74% | 65.76% | 65.76% | — | — | 14 | 1d 1h | 15d ago | 27m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 41.78% | 41.78% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 27.93% | 27.93% | — | — | 1 | 27d 11h | 27d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.36% | 13.36% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.43% | 18.43% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 20.47% | 20.47% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 24.46% | 44.08% | 44.08% | — | — | 1 | 23d 6h | 23d ago | 27m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 29.21% | 10.60% | 10.60% | — | — | 289 | 1h 28m | 13d ago | 33m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 13.52% | 13.52% | 13.52% | — | — | 8 | 2d 24h | 24d ago | 26m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.15% | 1.15% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.42% | 6.42% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.59% | 7.59% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.21% | 51.21% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 49.64% | 62.72% | 62.72% | — | — | 2 | 8d 2h | 16d ago | 27m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 85.06% | 85.06% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 68.85% | 84.66% | 84.66% | — | — | 2 | 5d 5h | 10d ago | 29m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 52.46% | 52.46% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 85.25% | 85.25% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 33.01% | 65.65% | 65.65% | — | — | 2 | 10d 10h | 21d ago | 28m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 40m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.47% | 42.47% | — | — | 1 | 29d 24h | 30d ago | 43m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 2.82% | 2.82% | 2.82% | — | — | 1 | 26d 18h | 27d ago | 27m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 53.81% | 20.70% | 20.70% | — | — | 4 | 3d 18h | 15d ago | 33m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 42m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 82.92% | 82.92% | — | — | 1 | 29d 24h | 30d ago | 34m ago |

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
