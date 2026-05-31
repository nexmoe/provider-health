# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**616 providers** — 349 🟢 operational · 41 🟡 degraded · 226 🔴 down · 0 ⚫ unknown

_Updated 2026-05-31 07:00 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 93.19% | 93.19% | 692 ms | → 0.96x | 0 | — | — | 17m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.32% | 97.32% | 2426 ms | → 1.00x | 0 | — | — | 28m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.90% | 50.13% | 50.13% | 1583 ms | → 1.00x | 2 | 0s | 19d ago | 16m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1075 ms | → 1.01x | 0 | — | — | 10m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 99.95% | 98.75% | 98.75% | 1452 ms | ↓ 0.81x | 1 | 0s | 29d ago | 30m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.95% | 99.33% | 99.33% | 2989 ms | ↓ 0.82x | 1 | 0s | 10d ago | 30m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 98.86% | 98.86% | 98.86% | 1665 ms | ↓ 0.87x | 12 | 13m | 12d ago | 12m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.48% | 94.09% | 94.09% | 1771 ms | → 0.97x | 1 | 2h 59m | 28d ago | 13m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1443 ms | ↓ 0.86x | 0 | — | — | 11m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.28% | 97.18% | 97.18% | 1940 ms | → 1.03x | 1 | 4h 31m | 17d ago | 13m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 92.02% | 92.02% | 1626 ms | ↓ 0.86x | 0 | — | — | 31m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.95% | 99.95% | 99.95% | 1315 ms | → 1.00x | 1 | 0s | 17d ago | 11m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.83% | 99.83% | 865 ms | ↓ 0.85x | 1 | 0s | 16d ago | 13m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 608 ms | ↑ 1.08x | 0 | — | — | 10m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.90% | 98.36% | 98.36% | 972 ms | ↓ 0.88x | 2 | 0s | 23d ago | 14m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.67% | 96.67% | 1477 ms | → 1.02x | 1 | 0s | 16d ago | 13m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.44% | 98.44% | 814 ms | → 1.04x | 0 | — | — | 12m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 91.25% | 34.15% | 34.15% | 502 ms | → 0.97x | 1 | 2d 10h | 30d ago | 24m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.95% | 99.90% | 99.90% | 611 ms | ↓ 0.93x | 1 | 0s | 19d ago | 13m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.95% | 99.95% | 99.95% | 462 ms | ↓ 0.77x | 1 | 0s | 9d ago | 11m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.27% | 96.27% | 484 ms | ↓ 0.94x | 0 | — | — | 15m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.94% | 99.94% | 1565 ms | ↓ 0.88x | 1 | 0s | 9d ago | 11m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.85% | 98.06% | 98.06% | 2370 ms | → 0.99x | 1 | 60m | 10d ago | 15m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.59% | 97.59% | 183 ms | ↓ 0.58x | 0 | — | — | 13m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 100.00% | 99.13% | 78.24% | 78.24% | 2006 ms | ↓ 0.86x | 17 | 0s | 12d ago | 24m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 82.81% | 82.81% | 1061 ms | ↓ 0.65x | 0 | — | — | 14m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.95% | 99.95% | 99.95% | 1040 ms | ↓ 0.88x | 1 | 0s | 9d ago | 11m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.49% | 80.32% | 80.32% | 1616 ms | → 1.04x | 3 | 50m | 13d ago | 18m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.41% | 97.41% | 1141 ms | ↑ 1.28x | 0 | — | — | 16m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 402 ms | → 0.96x | 0 | — | — | 25m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 100.00% | 97.11% | 95.84% | 95.84% | 2577 ms | ↓ 0.87x | 38 | 9m | 12d ago | 30m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.74% | 99.74% | 2483 ms | ↓ 0.85x | 1 | 0s | 23d ago | 25m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 98.88% | 98.88% | 156 ms | ↓ 0.45x | 0 | — | — | 15m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.85% | 99.80% | 99.80% | 1519 ms | ↓ 0.78x | 3 | 0s | 27d ago | 15m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.75% | 95.75% | 883 ms | ↓ 0.64x | 0 | — | — | 15m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 100.00% | 99.83% | 99.83% | 99.83% | 554 ms | ↓ 0.58x | 3 | 0s | 9d ago | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 97.99% | 98.55% | 98.55% | 2515 ms | ↓ 0.89x | 2 | 6h 41m | 8d ago | 11m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.74% | 99.87% | 99.87% | 948 ms | ↓ 0.71x | 3 | 13m | 13d ago | 13m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.50% | 99.50% | 1753 ms | ↓ 0.94x | 0 | — | — | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.40% | 99.44% | 99.44% | 2822 ms | ↓ 0.79x | 4 | 2h 15m | 19d ago | 15m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.79% | 99.66% | 99.66% | 958 ms | ↑ 1.12x | 3 | 6m | 17d ago | 13m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.95% | 26.48% | 26.48% | 866 ms | ↓ 0.85x | 1 | 0s | 28d ago | 25m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 1164 ms | → 0.96x | 1 | 0s | 9d ago | 11m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 99.69% | 98.08% | 98.08% | 2756 ms | ↓ 0.93x | 1 | 1h 41m | 13d ago | 15m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1214 ms | → 0.99x | 0 | — | — | 12m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 95.68% | 97.36% | 97.36% | 1642 ms | ↑ 1.22x | 6 | 4h 32m | 14d ago | 19m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.30% | 96.30% | 847 ms | ↓ 0.90x | 1 | 0s | 29d ago | 17m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.77% | 99.77% | 99.77% | 1824 ms | → 1.00x | 2 | 19m | 18d ago | 11m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 52.31% | 52.31% | 773 ms | → 0.97x | 0 | — | — | 19m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1338 ms | → 1.00x | 0 | — | — | 10m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.55% | 99.55% | 99.55% | 2473 ms | ↓ 0.92x | 6 | 8m | 9d ago | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 984 ms | ↓ 0.92x | 1 | 0s | 9d ago | 11m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.61% | 99.61% | 3181 ms | → 0.96x | 0 | — | — | 24m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.00% | 97.00% | 1334 ms | ↓ 0.67x | 0 | — | — | 24m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.90% | 99.03% | 99.03% | 1273 ms | ↓ 0.88x | 2 | 0s | 16d ago | 17m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 100.00% | 97.02% | 45.11% | 45.11% | 2898 ms | ↑ 1.07x | 9 | 1h 42m | 11d ago | 25m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.73% | 98.81% | 98.81% | 1436 ms | ↓ 0.93x | 2 | 44m | 8d ago | 12m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 81.88% | 81.88% | 1693 ms | ↓ 0.94x | 0 | — | — | 18m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1038 ms | → 1.00x | 0 | — | — | 12m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.47% | 98.47% | 1641 ms | ↓ 0.90x | 0 | — | — | 15m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.95% | 99.95% | 99.95% | 3072 ms | ↓ 0.81x | 1 | 0s | 9d ago | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.37% | 98.37% | 693 ms | ↓ 0.90x | 0 | — | — | 13m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.74% | 99.83% | 99.83% | 215 ms | ↓ 0.57x | 5 | 0s | 10d ago | 15m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 99.02% | 99.02% | 99.02% | 2243 ms | → 0.95x | 12 | 10m | 27d ago | 12m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 98.42% | 92.65% | 92.65% | 1933 ms | ↓ 0.82x | 14 | 23m | 27d ago | 12m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 44.69% | 44.69% | 942 ms | → 0.96x | 0 | — | — | 19m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 74.40% | 74.40% | 792 ms | ↓ 0.85x | 1 | 0s | 17d ago | 18m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 93.72% | 93.72% | 93.72% | 488 ms | ↓ 0.64x | 5 | 7h 21m | 15d ago | 11m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 100.00% | 99.95% | 52.68% | 52.68% | 1246 ms | ↓ 0.80x | 1 | 0s | 9d ago | 25m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1557 ms | → 1.01x | 0 | — | — | 11m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.97% | 97.97% | 1650 ms | ↓ 0.75x | 0 | — | — | 16m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 42.07% | 42.07% | 1001 ms | ↓ 0.71x | 0 | — | — | 25m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.95% | 99.95% | 99.95% | 1249 ms | ↓ 0.85x | 1 | 0s | 9d ago | 11m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1929 ms | → 1.00x | 0 | — | — | 10m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 80.63% | 80.63% | 1233 ms | ↓ 0.91x | 1 | 0s | 16d ago | 18m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.93% | 97.93% | 793 ms | ↓ 0.77x | 1 | 0s | 15d ago | 19m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 100.00% | 99.85% | 98.18% | 98.18% | 3193 ms | ↑ 1.07x | 3 | 0s | 10d ago | 15m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.78% | 99.78% | 99.78% | 1614 ms | ↑ 1.07x | 3 | 6m | 9d ago | 11m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.85% | 57.83% | 57.83% | 1517 ms | ↓ 0.86x | 3 | 0s | 12d ago | 19m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 61.17% | 61.17% | 1034 ms | ↓ 0.85x | 0 | — | — | 19m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2441 ms | ↓ 0.94x | 0 | — | — | 12m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.16% | 99.16% | 1413 ms | ↓ 0.94x | 0 | — | — | 18m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 89.26% | 89.26% | 1695 ms | ↓ 0.83x | 1 | 0s | 18d ago | 17m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 86.46% | 86.46% | 476 ms | ↓ 0.89x | 0 | — | — | 13m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.85% | 99.78% | 99.78% | 2227 ms | ↓ 0.83x | 3 | 0s | 27d ago | 15m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.98% | 97.98% | 1757 ms | ↓ 0.86x | 0 | — | — | 18m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 100.00% | 100.00% | 100.00% | 2798 ms | → 1.00x | 0 | — | — | 10m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.95% | 15.20% | 15.20% | 1284 ms | ↓ 0.63x | 1 | 0s | 26d ago | 25m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.85% | 99.72% | 99.72% | 1850 ms | ↓ 0.93x | 3 | 0s | 11d ago | 28m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1569 ms | → 1.00x | 0 | — | — | 11m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.59% | 99.84% | 99.84% | 2563 ms | ↓ 0.83x | 8 | 0s | 9d ago | 30m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.07% | 98.07% | 2478 ms | ↓ 0.80x | 0 | — | — | 30m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.80% | 99.93% | 99.93% | 774 ms | ↓ 0.93x | 1 | 1h 16m | 12d ago | 25m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 72.05% | 72.05% | 1610 ms | ↓ 0.68x | 0 | — | — | 16m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 99.85% | 90.28% | 90.28% | 357 ms | → 1.02x | 3 | 0s | 11d ago | 13m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 97.27% | 97.27% | 97.27% | 357 ms | ↓ 0.37x | 3 | 5h 59m | 8d ago | 11m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 775 ms | → 1.03x | 1 | 0s | 25d ago | 12m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1041 ms | ↓ 0.88x | 0 | — | — | 30m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.90% | 99.62% | 99.62% | 1682 ms | → 0.96x | 2 | 0s | 12d ago | 28m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.85% | 88.49% | 88.49% | 1879 ms | ↓ 0.90x | 1 | 39m | 23d ago | 18m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 75.56% | 75.56% | 1986 ms | ↓ 0.86x | 0 | — | — | 15m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 928 ms | ↓ 0.73x | 0 | — | — | 11m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 80.98% | 80.98% | 1520 ms | ↓ 0.92x | 0 | — | — | 13m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1432 ms | → 0.96x | 0 | — | — | 11m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1052 ms | → 0.96x | 0 | — | — | 13m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.99% | 98.99% | 457 ms | ↓ 0.73x | 0 | — | — | 19m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.81% | 96.81% | 322 ms | ↓ 0.62x | 0 | — | — | 13m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1037 ms | → 0.97x | 1 | 0s | 9d ago | 11m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.95% | 99.95% | 99.95% | 649 ms | ↓ 0.77x | 1 | 0s | 9d ago | 11m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1665 ms | ↓ 0.94x | 0 | — | — | 11m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 100.00% | 99.64% | 86.75% | 86.75% | 1224 ms | ↓ 0.84x | 7 | 0s | 8d ago | 28m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.58% | 96.55% | 96.55% | 1551 ms | ↓ 0.82x | 12 | 23m | 26d ago | 12m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.28% | 96.84% | 96.84% | 254 ms | ↓ 0.69x | 12 | 3m | 28d ago | 13m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.69% | 98.69% | 124 ms | ↓ 0.64x | 0 | — | — | 15m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.93% | 98.93% | 744 ms | ↓ 0.92x | 0 | — | — | 19m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 15.09% | 15.09% | 2372 ms | → 0.95x | 1 | 0s | 27d ago | 24m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 96.23% | 96.23% | 96.23% | 1130 ms | ↓ 0.78x | 40 | 17m | 9d ago | 11m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 100.00% | 100.00% | 100.00% | 417 ms | → 1.00x | 0 | — | — | 10m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 18.84% | 18.84% | 838 ms | ↓ 0.82x | 0 | — | — | 19m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 590 ms | ↓ 0.85x | 0 | — | — | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.95% | 99.83% | 99.83% | 2327 ms | ↑ 1.77x | 1 | 0s | 14d ago | 29m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 527 ms | ↓ 0.69x | 0 | — | — | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.50% | 97.50% | 1001 ms | ↓ 0.84x | 0 | — | — | 13m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 100.00% | 99.80% | 99.72% | 99.72% | 2391 ms | ↓ 0.92x | 4 | 0s | 8d ago | 28m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.89% | 97.89% | 1955 ms | ↓ 0.91x | 0 | — | — | 17m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.80% | 99.72% | 99.72% | 594 ms | ↑ 1.20x | 2 | 25m | 15d ago | 29m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.79% | 99.78% | 99.78% | 1295 ms | → 0.99x | 2 | 20m | 23d ago | 19m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1289 ms | → 1.04x | 0 | — | — | 12m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.66% | 98.66% | 4152 ms | → 0.95x | 0 | — | — | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2732 ms | ↓ 0.92x | 0 | — | — | 28m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1251 ms | → 0.98x | 0 | — | — | 11m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.65% | 99.65% | 2235 ms | ↓ 0.90x | 1 | 0s | 23d ago | 24m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 38.82% | 38.82% | 748 ms | → 0.99x | 0 | — | — | 29m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.34% | 98.34% | 3551 ms | ↓ 0.88x | 0 | — | — | 16m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.95% | 99.95% | 1045 ms | → 0.97x | 1 | 0s | 17d ago | 28m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 95.98% | 14.28% | 14.28% | 672 ms | → 0.96x | 24 | 49m | 11d ago | 28m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 1778 ms | → 0.95x | 0 | — | — | 18m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.57% | 99.57% | 1552 ms | → 1.00x | 0 | — | — | 13m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 100.00% | 89.47% | 89.47% | 1007 ms | ↓ 0.91x | 0 | — | — | 17m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.61% | 99.61% | 606 ms | ↓ 0.82x | 0 | — | — | 29m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 58.67% | 58.67% | 999 ms | ↓ 0.83x | 3 | 0s | 15d ago | 19m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.95% | 17.36% | 17.36% | 2209 ms | ↓ 0.93x | 1 | 0s | 14d ago | 19m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.75% | 99.75% | 2491 ms | → 1.03x | 0 | — | — | 28m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 78.94% | 47.35% | 47.35% | 3543 ms | → 1.01x | 2 | 2d 21h | 7d ago | 19m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.90% | 88.67% | 88.67% | 1535 ms | → 1.04x | 2 | 0s | 10d ago | 28m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.64% | 79.19% | 79.19% | 1559 ms | ↓ 0.85x | 2 | 50m | 28d ago | 30m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 79.38% | 79.38% | 79.38% | 1196 ms | → 1.02x | 1 | 5d 5h | 24d ago | 12m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.75% | 99.89% | 99.89% | 725 ms | ↓ 0.85x | 3 | 17m | 15d ago | 28m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1043 ms | ↓ 0.84x | 0 | — | — | 29m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.85% | 37.04% | 37.04% | 194 ms | ↓ 0.82x | 3 | 0s | 14d ago | 16m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.58% | 99.58% | 868 ms | ↓ 0.79x | 0 | — | — | 29m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 936 ms | ↓ 0.85x | 1 | 0s | 9d ago | 11m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.99% | 98.99% | 2333 ms | ↑ 1.06x | 0 | — | — | 28m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.16% | 98.16% | 1132 ms | ↓ 0.92x | 0 | — | — | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.81% | 97.81% | 1535 ms | ↓ 0.78x | 0 | — | — | 14m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.74% | 95.84% | 95.84% | 407 ms | ↓ 0.61x | 2 | 31m | 16d ago | 13m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 67.59% | 67.59% | 877 ms | → 0.97x | 0 | — | — | 18m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1000 ms | → 1.00x | 0 | — | — | 10m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.85% | 79.20% | 79.20% | 1380 ms | ↓ 0.88x | 1 | 51m | 9d ago | 18m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1436 ms | → 0.99x | 0 | — | — | 28m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1642 ms | ↓ 0.76x | 0 | — | — | 29m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.94% | 99.94% | 2074 ms | ↓ 0.92x | 1 | 0s | 9d ago | 11m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.85% | 91.80% | 91.80% | 1494 ms | → 1.04x | 3 | 0s | 16d ago | 17m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.95% | 99.86% | 99.86% | 914 ms | ↓ 0.89x | 1 | 0s | 8d ago | 19m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 85.13% | 32.11% | 32.11% | 1669 ms | ↓ 0.93x | 7 | 14h 2m | 19d ago | 19m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.21% | 45.77% | 45.77% | 541 ms | ↓ 0.68x | 4 | 7h 27m | 23d ago | 15m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 84.76% | 84.76% | 265 ms | ↓ 0.54x | 0 | — | — | 28m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.95% | 89.77% | 89.77% | 257 ms | ↓ 0.39x | 1 | 0s | 16d ago | 15m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.24% | 99.24% | 2023 ms | → 1.01x | 0 | — | — | 18m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.47% | 96.47% | 1128 ms | ↓ 0.94x | 0 | — | — | 19m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.95% | 16.97% | 16.97% | 962 ms | ↑ 1.05x | 1 | 0s | 25d ago | 25m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.75% | 99.75% | 2452 ms | ↓ 0.88x | 1 | 0s | 29d ago | 29m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 55.70% | 55.70% | 547 ms | ↓ 0.72x | 0 | — | — | 19m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.48% | 98.28% | 98.28% | 1251 ms | → 0.98x | 1 | 4h 17m | 9d ago | 17m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 35.45% | 35.45% | 1859 ms | → 0.96x | 1 | 0s | 8d ago | 18m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2588 ms | → 1.03x | 0 | — | — | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.90% | 99.87% | 99.87% | 1647 ms | ↓ 0.86x | 1 | 30m | 8d ago | 17m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.12% | 65.54% | 65.54% | 651 ms | ↓ 0.93x | 7 | 29m | 9d ago | 18m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.95% | 99.18% | 99.18% | 1653 ms | ↓ 0.80x | 1 | 0s | 29d ago | 17m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 78.01% | 78.01% | 1261 ms | ↓ 0.91x | 0 | — | — | 18m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 500 ms | → 1.00x | 0 | — | — | 10m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.91% | 99.91% | 1752 ms | → 0.96x | 2 | 0s | 28d ago | 28m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 954 ms | ↑ 1.05x | 1 | 0s | 9d ago | 11m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1673 ms | ↓ 0.89x | 0 | — | — | 24m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.95% | 99.51% | 99.51% | 2398 ms | ↓ 0.86x | 1 | 0s | 11d ago | 29m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 85.38% | 85.38% | 1707 ms | ↓ 0.91x | 0 | — | — | 18m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.89% | 99.89% | 99.89% | 1076 ms | → 1.01x | 2 | 0s | 9d ago | 11m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.92% | 95.92% | 1063 ms | → 0.95x | 0 | — | — | 19m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 835 ms | → 0.96x | 0 | — | — | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.40% | 98.40% | 429 ms | ↓ 0.59x | 1 | 0s | 22d ago | 15m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 17.96% | 17.96% | 316 ms | ↓ 0.36x | 0 | — | — | 19m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.94% | 99.94% | 736 ms | → 0.97x | 0 | — | — | 15m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 58.94% | 58.94% | 1695 ms | ↓ 0.95x | 0 | — | — | 19m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 100.00% | 99.81% | 99.81% | 2521 ms | ↓ 0.95x | 0 | — | — | 28m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 82.51% | 90.71% | 90.71% | 27 ms | ↓ 0.20x | 4 | 1d 5h | 21d ago | 13m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 15.17% | 15.17% | 846 ms | → 0.98x | 0 | — | — | 28m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 993 ms | → 1.03x | 0 | — | — | 12m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 100.00% | 99.37% | 99.37% | 1226 ms | → 1.02x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.95% | 99.95% | 99.95% | 1591 ms | ↓ 0.72x | 1 | 0s | 28d ago | 12m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1260 ms | → 1.03x | 0 | — | — | 12m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 99.24% | 99.42% | 99.42% | 2267 ms | ↓ 0.83x | 8 | 24m | 9d ago | 30m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.85% | 17.93% | 17.93% | 1183 ms | ↓ 0.94x | 3 | 0s | 12d ago | 19m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.13% | 93.13% | 4538 ms | ↑ 1.07x | 0 | — | — | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1658 ms | ↓ 0.82x | 0 | — | — | 17m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.85% | 98.79% | 98.79% | 2678 ms | → 0.98x | 3 | 0s | 28d ago | 15m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 99.20% | 99.20% | 99.20% | 1262 ms | ↓ 0.81x | 10 | 8m | 27d ago | 12m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.12% | 99.12% | 930 ms | ↓ 0.81x | 0 | — | — | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.83% | 99.83% | 99.83% | 1509 ms | ↓ 0.88x | 2 | 10m | 9d ago | 11m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.95% | 35.41% | 35.41% | 1342 ms | ↓ 0.68x | 1 | 0s | 8d ago | 29m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.95% | 99.56% | 99.56% | 1501 ms | ↑ 1.09x | 1 | 0s | 11d ago | 29m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.44% | 99.44% | 877 ms | ↓ 0.87x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 392 ms | ↓ 0.89x | 0 | — | — | 31m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 100.00% | 91.78% | 91.78% | 982 ms | ↓ 0.88x | 0 | — | — | 28m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.42% | 98.42% | 2483 ms | ↑ 1.20x | 0 | — | — | 13m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.56% | 96.56% | 2306 ms | ↓ 0.95x | 0 | — | — | 28m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1845 ms | ↓ 0.72x | 0 | — | — | 10m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.80% | 99.80% | 99.80% | 1416 ms | ↑ 1.05x | 1 | 0s | 7d ago | 10m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.38% | 99.38% | 99.38% | 1617 ms | ↓ 0.89x | 9 | 5m | 8d ago | 12m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 87.23% | 87.23% | 1388 ms | → 1.01x | 0 | — | — | 17m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.78% | 99.78% | 803 ms | ↓ 0.70x | 1 | 0s | 28d ago | 13m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1392 ms | → 0.99x | 0 | — | — | 28m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.47% | 99.47% | 1157 ms | ↑ 1.10x | 0 | — | — | 29m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 752 ms | ↓ 0.92x | 1 | 0s | 9d ago | 11m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.73% | 99.73% | 977 ms | ↑ 1.12x | 0 | — | — | 29m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.69% | 70.97% | 70.97% | 1046 ms | ↓ 0.84x | 6 | 0s | 9d ago | 16m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 733 ms | → 0.99x | 0 | — | — | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.90% | 83.81% | 83.81% | 1765 ms | ↓ 0.82x | 2 | 0s | 27d ago | 24m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.85% | 20.75% | 20.75% | 1627 ms | ↓ 0.88x | 3 | 0s | 16d ago | 31m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.80% | 98.80% | 1461 ms | ↓ 0.79x | 0 | — | — | 17m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.84% | 91.84% | 3116 ms | ↓ 0.82x | 0 | — | — | 31m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 688 ms | ↓ 0.95x | 1 | 0s | 26d ago | 11m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 100.00% | 95.78% | 70.80% | 70.80% | 1206 ms | ↓ 0.89x | 14 | 1h 39m | 7d ago | 18m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.95% | 99.95% | 99.95% | 339 ms | ↓ 0.69x | 1 | 0s | 9d ago | 11m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 100.00% | 96.74% | 96.74% | 907 ms | ↑ 1.10x | 0 | — | — | 12m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.72% | 98.72% | 508 ms | → 0.97x | 0 | — | — | 18m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.39% | 98.66% | 98.66% | 1837 ms | ↓ 0.72x | 1 | 3h 60m | 21d ago | 27m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 99.95% | 97.57% | 97.57% | 2785 ms | → 1.05x | 1 | 0s | 11d ago | 15m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.94% | 99.94% | 520 ms | → 0.97x | 1 | 0s | 9d ago | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 99.95% | 26.08% | 26.08% | 876 ms | ↑ 1.09x | 1 | 0s | 13d ago | 27m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.95% | 99.78% | 99.78% | 641 ms | ↓ 0.82x | 1 | 0s | 7d ago | 17m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.14% | 98.14% | 1448 ms | → 1.00x | 0 | — | — | 17m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 100.00% | 100.00% | 100.00% | 1255 ms | → 1.00x | 0 | — | — | 10m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 967 ms | ↓ 0.82x | 0 | — | — | 27m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 87.47% | 87.47% | 2226 ms | ↓ 0.94x | 0 | — | — | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 100.00% | 96.41% | 96.41% | 1635 ms | ↓ 0.90x | 0 | — | — | 19m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1295 ms | ↓ 0.85x | 0 | — | — | 27m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.95% | 15.16% | 15.16% | 1810 ms | ↓ 0.89x | 1 | 0s | 20d ago | 28m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 876 ms | ↑ 1.10x | 0 | — | — | 12m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.64% | 96.44% | 96.44% | 1225 ms | → 0.98x | 2 | 51m | 23d ago | 13m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 632 ms | ↓ 0.80x | 1 | 0s | 29d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 100.00% | 17.13% | 17.13% | 1743 ms | ↓ 0.89x | 0 | — | — | 19m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.85% | 14.99% | 14.99% | 1343 ms | ↓ 0.81x | 3 | 0s | 28d ago | 19m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.95% | 99.89% | 99.89% | 2501 ms | → 0.96x | 1 | 0s | 10d ago | 15m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.69% | 99.71% | 99.71% | 2327 ms | ↓ 0.77x | 1 | 2h 18m | 8d ago | 15m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.89% | 99.89% | 1381 ms | → 0.99x | 0 | — | — | 28m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 97.25% | 99.64% | 99.64% | 1812 ms | ↓ 0.81x | 6 | 2h 50m | 13d ago | 27m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 1767 ms | ↓ 0.84x | 0 | — | — | 27m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.30% | 98.30% | 1041 ms | → 1.03x | 0 | — | — | 13m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.90% | 99.80% | 99.80% | 1734 ms | ↓ 0.90x | 2 | 0s | 18d ago | 24m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 2011 ms | ↓ 0.89x | 0 | — | — | 19m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.09% | 99.09% | 1531 ms | ↑ 1.14x | 0 | — | — | 28m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 98.97% | 41.57% | 41.57% | 1072 ms | ↓ 0.78x | 16 | 5m | 7d ago | 15m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 353 ms | ↓ 0.94x | 0 | — | — | 28m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.76% | 99.90% | 99.71% | 99.71% | 2483 ms | ↓ 0.84x | 2 | 0s | 4d ago | 30m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.39% | 98.83% | 98.83% | 2140 ms | ↓ 0.83x | 10 | 4m | 3d ago | 30m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.76% | 99.54% | 97.75% | 97.75% | 2724 ms | ↓ 0.90x | 7 | 6m | 3d ago | 24m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.76% | 99.90% | 98.82% | 98.82% | 929 ms | → 0.99x | 2 | 0s | 3d ago | 27m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.76% | 99.03% | 97.77% | 97.77% | 3419 ms | → 1.01x | 19 | 0s | 6d ago | 28m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.76% | 99.85% | 99.84% | 99.84% | 3521 ms | ↓ 0.83x | 3 | 0s | 6d ago | 24m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.76% | 99.18% | 96.45% | 96.45% | 1258 ms | ↓ 0.94x | 7 | 27m | 4d ago | 25m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.76% | 99.64% | 99.73% | 99.73% | 553 ms | → 0.96x | 7 | 0s | 3d ago | 29m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.76% | 98.46% | 99.42% | 99.42% | 2621 ms | ↓ 0.77x | 19 | 12m | 3d ago | 24m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.76% | 99.09% | 99.84% | 99.84% | 1578 ms | ↓ 0.72x | 18 | 0s | 3d ago | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.75% | 99.64% | 99.64% | 901 ms | → 1.01x | 4 | 5m | 5d ago | 28m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.76% | 99.90% | 15.17% | 15.17% | 2100 ms | ↑ 1.07x | 2 | 0s | 3d ago | 28m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.76% | 99.85% | 99.19% | 99.19% | 2998 ms | ↓ 0.91x | 3 | 0s | 2d ago | 24m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 99.76% | 99.95% | 99.92% | 99.92% | 189 ms | → 0.97x | 1 | 0s | 3d ago | 29m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.76% | 99.95% | 99.87% | 99.87% | 2506 ms | ↓ 0.89x | 1 | 0s | 5d ago | 25m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.95% | 99.84% | 99.84% | 1763 ms | ↓ 0.90x | 1 | 0s | 5d ago | 27m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.76% | 99.43% | 16.92% | 16.92% | 1515 ms | ↓ 0.83x | 2 | 1h 30m | 2d ago | 19m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.76% | 99.95% | 92.46% | 92.46% | 915 ms | ↓ 0.86x | 1 | 0s | 6d ago | 19m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.76% | 99.95% | 50.07% | 50.07% | 1387 ms | ↓ 0.94x | 1 | 0s | 1d ago | 19m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.76% | 99.85% | 99.31% | 99.31% | 1387 ms | ↓ 0.86x | 3 | 0s | 1d ago | 19m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.76% | 99.95% | 17.07% | 17.07% | 1410 ms | ↓ 0.91x | 1 | 0s | 1d ago | 19m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.76% | 99.95% | 65.29% | 65.29% | 883 ms | ↑ 1.14x | 1 | 0s | 2d ago | 19m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.76% | 99.74% | 15.85% | 15.85% | 1196 ms | → 1.03x | 5 | 0s | 3d ago | 19m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.76% | 99.90% | 97.55% | 97.55% | 514 ms | ↓ 0.65x | 2 | 0s | 3d ago | 13m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.76% | 99.64% | 96.58% | 96.58% | 1996 ms | → 0.96x | 2 | 50m | 5d ago | 17m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.76% | 99.69% | 97.37% | 97.37% | 1526 ms | ↓ 0.69x | 3 | 20m | 5d ago | 16m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.76% | 99.95% | 64.06% | 64.06% | 1398 ms | ↓ 0.94x | 1 | 0s | 3d ago | 18m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.76% | 99.69% | 97.60% | 97.60% | 2750 ms | ↓ 0.78x | 6 | 0s | 5d ago | 15m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.76% | 74.87% | 86.98% | 86.98% | 636 ms | ↓ 0.62x | 2 | 4d | 14d ago | 13m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.76% | 99.54% | 59.51% | 59.51% | 849 ms | ↓ 0.80x | 5 | 16m | 3d ago | 18m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.76% | 99.90% | 99.55% | 99.55% | 798 ms | ↓ 0.74x | 2 | 0s | 1d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.54% | 97.19% | 97.19% | 1569 ms | ↓ 0.86x | 9 | 0s | 2h ago | 13m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.76% | 99.59% | 99.20% | 99.20% | 181 ms | ↓ 0.94x | 4 | 35m | 2d ago | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.76% | 56.09% | 79.39% | 79.39% | 382 ms | ↓ 0.81x | 4 | 3d 1h | 2d ago | 13m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.76% | 99.95% | 98.87% | 98.87% | 2420 ms | → 0.98x | 1 | 0s | 7d ago | 17m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.76% | 99.90% | 99.92% | 99.92% | 791 ms | ↓ 0.82x | 2 | 0s | 3d ago | 13m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.76% | 99.69% | 98.15% | 98.15% | 1413 ms | ↓ 0.71x | 6 | 0s | 5d ago | 15m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.76% | 99.95% | 53.13% | 53.13% | 3315 ms | ↓ 0.84x | 1 | 0s | 4d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.76% | 99.85% | 78.33% | 78.33% | 1425 ms | ↓ 0.92x | 3 | 0s | 5d ago | 18m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.76% | 99.33% | 98.49% | 98.49% | 511 ms | ↓ 0.59x | 6 | 23m | 16h ago | 16m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 99.28% | 90.55% | 90.55% | 1335 ms | ↓ 0.80x | 14 | 0s | 3d ago | 17m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.76% | 94.54% | 94.54% | 94.54% | 1196 ms | ↑ 1.12x | 4 | 8h 26m | 18h ago | 12m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.76% | 99.84% | 99.84% | 99.84% | 1754 ms | ↓ 0.94x | 3 | 0s | 5d ago | 11m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.76% | 99.62% | 99.62% | 99.62% | 893 ms | → 0.96x | 7 | 0s | 3d ago | 12m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 99.76% | 99.84% | 99.84% | 99.84% | 791 ms | → 1.02x | 3 | 0s | 2d ago | 11m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.09% | 98.63% | 98.63% | 1285 ms | ↑ 1.06x | 4 | 2h 47m | 3d ago | 12m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.76% | 99.95% | 98.63% | 98.63% | 1733 ms | ↑ 1.07x | 1 | 0s | 2d ago | 12m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.78% | 99.78% | 99.78% | 1054 ms | ↓ 0.85x | 4 | 0s | 3d ago | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.76% | 86.68% | 86.68% | 86.68% | 832 ms | → 0.96x | 51 | 21m | 6d ago | 10m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.52% | 97.61% | 98.16% | 98.16% | 4617 ms | → 0.97x | 43 | 2m | 2d ago | 30m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.52% | 98.93% | 99.24% | 99.24% | 818 ms | ↓ 0.92x | 15 | 8m | 3d ago | 29m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 99.52% | 81.66% | 51.47% | 51.47% | 2690 ms | ↓ 0.85x | 4 | 1d 10h | 13h ago | 25m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.52% | 99.69% | 98.99% | 98.99% | 3102 ms | ↑ 1.05x | 2 | 45m | 6d ago | 28m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.52% | 99.64% | 99.83% | 99.83% | 142 ms | ↓ 0.69x | 5 | 12m | 6d ago | 28m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.52% | 99.39% | 84.68% | 84.68% | 2103 ms | ↑ 1.08x | 12 | 0s | 2d ago | 29m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.52% | 98.68% | 60.10% | 60.10% | 2521 ms | ↓ 0.85x | 24 | 2m | 3d ago | 29m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.52% | 97.94% | 85.63% | 85.63% | 4782 ms | → 1.00x | 36 | 2m | 2d ago | 19m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.52% | 99.74% | 96.61% | 96.61% | 4528 ms | ↑ 1.07x | 5 | 0s | 2d ago | 19m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.52% | 99.38% | 70.32% | 70.32% | 1087 ms | ↓ 0.89x | 10 | 4m | 3d ago | 18m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.52% | 97.89% | 98.58% | 98.58% | 1178 ms | → 0.97x | 10 | 1h 4m | 3d ago | 18m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.52% | 99.64% | 90.57% | 90.57% | 1420 ms | ↓ 0.83x | 5 | 8m | 18h ago | 13m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.52% | 99.85% | 99.80% | 99.80% | 1266 ms | ↓ 0.82x | 2 | 14m | 3d ago | 16m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.52% | 93.97% | 92.21% | 92.21% | 2297 ms | → 0.95x | 10 | 3h 52m | 3d ago | 15m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.52% | 99.90% | 99.75% | 99.75% | 574 ms | ↓ 0.58x | 1 | 20m | 2d ago | 13m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.52% | 99.85% | 97.67% | 97.67% | 1351 ms | → 0.96x | 3 | 0s | 2d ago | 13m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 99.52% | 98.24% | 98.24% | 98.24% | 1551 ms | ↓ 0.86x | 17 | 20m | 4d ago | 11m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.52% | 98.58% | 98.58% | 98.58% | 1278 ms | ↓ 0.66x | 14 | 16m | 2d ago | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.52% | 99.26% | 99.26% | 99.26% | 1065 ms | ↓ 0.91x | 4 | 48m | 1d ago | 11m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.52% | 96.14% | 96.14% | 96.14% | 852 ms | ↑ 1.14x | 10 | 2h 8m | 4d ago | 12m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.52% | 99.34% | 99.34% | 99.34% | 1732 ms | → 0.98x | 3 | 1h 3m | 6d ago | 11m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.52% | 99.84% | 99.84% | 99.84% | 2660 ms | → 0.97x | 3 | 0s | 2d ago | 11m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 99.51% | 99.55% | 99.55% | 99.55% | 4628 ms | → 1.01x | 2 | 0s | 4d ago | 10m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.28% | 97.87% | 84.59% | 84.59% | 4358 ms | → 0.96x | 36 | 4m | 2h ago | 30m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.28% | 98.27% | 83.47% | 83.47% | 2723 ms | ↓ 0.84x | 34 | 0s | 4h ago | 31m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.28% | 98.22% | 98.69% | 98.69% | 3058 ms | ↓ 0.94x | 29 | 5m | 3d ago | 28m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.28% | 98.45% | 96.05% | 96.05% | 1040 ms | ↓ 0.91x | 2 | 4h 44m | 4d ago | 13m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.27% | 99.82% | 99.82% | 99.82% | 881 ms | → 0.96x | 2 | 11m | 1d ago | 11m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.27% | 99.46% | 99.46% | 99.46% | 899 ms | ↑ 1.18x | 1 | 51m | 2h ago | 10m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.04% | 97.25% | 98.96% | 98.96% | 3751 ms | → 0.99x | 18 | 42m | 2d ago | 27m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.04% | 93.91% | 67.03% | 67.03% | 3992 ms | ↓ 0.86x | 47 | 32m | 2d ago | 25m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 99.04% | 97.15% | 85.06% | 85.06% | 4526 ms | → 1.01x | 52 | 2m | 56m ago | 27m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 99.04% | 97.74% | 15.02% | 15.02% | 2266 ms | ↓ 0.89x | 11 | 1h 9m | 24h ago | 19m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.03% | 98.20% | 63.97% | 63.97% | 4642 ms | → 0.96x | 31 | 4m | 3d ago | 18m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 99.03% | 97.68% | 84.50% | 84.50% | 4601 ms | ↓ 0.94x | 44 | 25s | 3d ago | 16m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.03% | 99.49% | 99.49% | 99.49% | 2220 ms | ↓ 0.92x | 8 | 3m | 16h ago | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.03% | 98.63% | 98.63% | 98.63% | 1544 ms | ↑ 1.09x | 22 | 2m | 1d ago | 11m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (41)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 98.80% | 98.47% | 92.11% | 92.11% | 944 ms | ↓ 0.94x | 8 | 55m | 3d ago | 28m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.80% | 98.98% | 98.95% | 98.95% | 1680 ms | ↓ 0.79x | 15 | 8m | 6d ago | 24m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.80% | 87.93% | 13.51% | 13.51% | 2083 ms | ↓ 0.84x | 183 | 6m | 3d ago | 25m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 98.80% | 97.20% | 99.13% | 99.13% | 3664 ms | → 0.96x | 18 | 43m | 2d ago | 27m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.80% | 99.59% | 99.42% | 99.42% | 1722 ms | ↓ 0.92x | 3 | 33m | 1d ago | 28m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.79% | 97.83% | 90.18% | 90.18% | 2940 ms | ↓ 0.89x | 35 | 5m | 1d ago | 15m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.79% | 99.40% | 99.40% | 99.40% | 851 ms | ↓ 0.77x | 11 | 0s | 13h ago | 11m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 98.31% | 99.48% | 96.70% | 96.70% | 2210 ms | → 0.97x | 6 | 16m | 6d ago | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.31% | 98.13% | 98.13% | 98.13% | 2530 ms | ↓ 0.93x | 15 | 27m | 1d ago | 12m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 98.08% | 96.78% | 73.25% | 73.25% | 4349 ms | → 0.95x | 52 | 4m | 18h ago | 25m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.08% | 91.15% | 13.37% | 13.37% | 2332 ms | → 0.99x | 12 | 4h 36m | 2d ago | 24m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.08% | 94.83% | 14.66% | 14.66% | 3404 ms | ↓ 0.85x | 69 | 9m | 53m ago | 24m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.08% | 99.33% | 99.68% | 99.68% | 2886 ms | → 0.95x | 11 | 4m | 2d ago | 24m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 98.07% | 95.46% | 81.61% | 81.61% | 4651 ms | → 0.98x | 78 | 3m | 2h ago | 15m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.06% | 98.98% | 98.98% | 98.98% | 972 ms | → 0.96x | 11 | 17m | 2d ago | 11m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.06% | 99.56% | 99.56% | 99.56% | 380 ms | ↓ 0.93x | 2 | 1h | 2d ago | 11m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 97.60% | 96.24% | 79.39% | 79.39% | 122 ms | ↓ 0.81x | 6 | 4h 55m | 2d ago | 30m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 97.58% | 99.12% | 85.21% | 85.21% | 1096 ms | ↓ 0.77x | 6 | 46m | 2d ago | 15m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 97.34% | 79.72% | 84.31% | 84.31% | 1481 ms | → 0.99x | 3 | 1d 20h | 5d ago | 13m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 97.34% | 95.00% | 80.96% | 80.96% | 4877 ms | → 0.99x | 83 | 4m | 1h ago | 17m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 97.12% | 93.86% | 98.63% | 98.63% | 3891 ms | ↓ 0.88x | 74 | 13m | 53m ago | 24m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.10% | 95.92% | 83.97% | 83.97% | 4751 ms | → 0.98x | 47 | 16m | 45m ago | 15m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 97.09% | 75.51% | 75.51% | 75.51% | 2550 ms | ↓ 0.89x | 10 | 16h 47m | 6d ago | 11m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.67% | 96.33% | 14.64% | 14.64% | 2173 ms | → 1.03x | 66 | 2m | 5h ago | 27m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 95.64% | 97.06% | 96.44% | 96.44% | 3805 ms | ↑ 1.24x | 14 | 1h 8m | 4d ago | 12m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 95.62% | 95.92% | 95.92% | 95.92% | 431 ms | → 1.01x | 2 | 2h 41m | 1d ago | 10m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 95.43% | 97.81% | 98.83% | 98.83% | 814 ms | ↓ 0.93x | 2 | 6h 50m | 12h ago | 28m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 94.95% | 98.22% | 27.47% | 27.47% | 1486 ms | ↑ 1.11x | 8 | 1h 23m | 3d ago | 26m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 94.44% | 98.71% | 96.30% | 96.30% | 2852 ms | ↓ 0.95x | 6 | 1h 27m | 3d ago | 13m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.77% | 89.05% | 16.00% | 16.00% | 4536 ms | → 0.96x | 168 | 7m | 1h ago | 19m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 92.51% | 97.22% | 95.45% | 95.45% | 2279 ms | ↓ 0.95x | 4 | 4h 46m | 4d ago | 17m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 92.27% | 97.57% | 95.16% | 95.16% | 1708 ms | ↑ 1.08x | 3 | 5h 26m | 5d ago | 13m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.68% | 88.70% | 50.34% | 50.34% | 3771 ms | → 0.97x | 182 | 5m | 5h ago | 14m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 87.50% | 38.84% | 23.22% | 23.22% | 3421 ms | → 1.03x | 70 | 5h 34m | 10h ago | 28m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 87.26% | 97.10% | 98.94% | 98.94% | 1247 ms | ↓ 0.91x | 36 | 14m | 3h ago | 28m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 84.99% | 95.80% | 95.80% | 95.80% | 1282 ms | → 0.98x | 2 | 13h 54m | 2d ago | 12m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 76.97% | 76.97% | 76.97% | 76.97% | 1159 ms | → 1.00x | 1 | 13h 12m | 2d ago | 10m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 74.40% | 68.93% | 19.24% | 19.24% | 4684 ms | → 1.00x | 355 | 16m | 3h ago | 18m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 65.94% | 90.30% | 96.65% | 96.65% | 3163 ms | ↓ 0.83x | 8 | 9h 6m | 8d ago | 15m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 56.73% | 12.00% | 12.10% | 12.10% | 2323 ms | → 1.00x | 1 | 25d 22h | 30d ago | 28m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 53.62% | 11.43% | 30.61% | 30.61% | 669 ms | → 1.00x | 2 | 13d 2h | 2d ago | 18m ago |

</details>

<details open>
<summary><strong>🔴 Down (226)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.43% | 98.50% | 98.81% | 98.81% | 209 ms | ↓ 0.41x | 7 | 1h 12m | 3h ago | 12m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 93.00% | 98.51% | 98.29% | 98.29% | 252 ms | ↓ 0.27x | 1 | 10h 12m | 10h ago | 17m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 90.82% | 93.76% | 83.24% | 83.24% | 679 ms | ↓ 0.65x | 3 | 14h 1m | 13h ago | 15m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 89.18% | 97.65% | 99.61% | 99.61% | 1036 ms | ↓ 0.80x | 2 | 8h 30m | 17h ago | 24m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 77.00% | 93.30% | 93.30% | 93.30% | 1263 ms | ↓ 0.66x | 14 | 2h 49m | 2d ago | 12m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 68.99% | 63.57% | 62.03% | 62.03% | 4811 ms | → 0.99x | 388 | 19m | 25m ago | 25m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 54.37% | 90.27% | 90.55% | 90.55% | 403 ms | ↓ 0.63x | 1 | 3d 5h | 3d ago | 10m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 53.13% | 87.20% | 42.58% | 42.58% | 1116 ms | → 0.98x | 17 | 5h 31m | 3d ago | 27m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 53.13% | 54.20% | 5.61% | 5.61% | 1218 ms | ↓ 0.95x | 5 | 2d 15h | 3d ago | 27m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 33.09% | 82.87% | 87.09% | 87.09% | 1977 ms | ↓ 0.82x | 2 | 2d 17h | 5d ago | 14m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 25.85% | 81.63% | 90.32% | 90.32% | 1362 ms | ↓ 0.80x | 5 | 1d 4h | 5d ago | 13m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 14.18% | 81.66% | 96.20% | 96.20% | 1581 ms | ↓ 0.71x | 6 | 23h 55m | 6d ago | 25m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.22% | 10.01% | 10.01% | 10.01% | 3162 ms | ↓ 0.86x | 163 | 3h 25m | 3h ago | 10m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 0.96% | 1.12% | 61.73% | 61.73% | 3418 ms | → 0.97x | 22 | 1d 8h | 7h ago | 31m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 84.12% | 84.12% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 69.66% | 69.66% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 74.91% | 74.91% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 63.65% | 67.38% | 67.38% | — | — | 15 | 18h 55m | 12d ago | 11m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 53.04% | 87.29% | 87.29% | — | — | 7 | 2d 4h | 15d ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 66.79% | 66.79% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.76% | 5.76% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.72% | 12.72% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 16.77% | 65.35% | 65.35% | — | — | 3 | 8d 11h | 23d ago | 13m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.45% | 3.45% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 36.33% | 76.69% | 76.69% | — | — | 2 | 9d 23h | 20d ago | 14m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 84.38% | 84.38% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.03% | 37.03% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 15.07% | 61.34% | 61.34% | — | — | 3 | 8d 14h | 26d ago | 14m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 47.26% | 94.23% | 94.23% | — | — | 4 | 4d 5h | 17d ago | 30m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 24.59% | 24.59% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 75.72% | 75.72% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 54.82% | 54.82% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 30.75% | 30.75% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 84.78% | 84.78% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 63.85% | 63.85% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 78.31% | 78.31% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 15.85% | 15.85% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 51.69% | 51.69% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 35.86% | 35.86% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 56.76% | 85.13% | 85.13% | — | — | 2 | 6d 23h | 14d ago | 19m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.58% | 3.58% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 84.97% | 84.97% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 50.46% | 50.46% | 50.46% | — | — | 6 | 2d 10h | 15d ago | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 52.76% | 52.76% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.09% | 2.09% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 58.90% | 93.10% | 93.10% | — | — | 13 | 1d | 13d ago | 27m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 69.40% | 86.85% | 86.85% | — | — | 2 | 4d 23h | 9d ago | 15m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 74.27% | 46.86% | 46.86% | — | — | 2 | 4d 5h | 8d ago | 18m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 31.86% | 82.12% | 82.12% | — | — | 3 | 7d 1h | 21d ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 33.92% | 33.92% | 33.92% | — | — | 1 | 19d 16h | 20d ago | 11m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 37.28% | 67.74% | 67.74% | — | — | 2 | 9d 20h | 20d ago | 17m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 34.50% | 34.50% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 55.52% | 55.52% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 74.77% | 60.78% | 60.78% | — | — | 5 | 1d 16h | 8d ago | 14m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 25.26% | 25.26% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 30.32% | 30.32% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 58.17% | 58.17% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 54.25% | 25.69% | 25.69% | — | — | 1 | 14d 21h | 15d ago | 17m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.73% | 5.73% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 66.94% | 66.94% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 84.72% | 84.72% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 7.43% | 7.43% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 80.90% | 80.90% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 29.34% | 83.47% | 83.47% | — | — | 3 | 7d 6h | 20d ago | 29m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 55.57% | 35.31% | 35.31% | — | — | 21 | 16h 11m | 14d ago | 16m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 12h | 27d ago | 11m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 29.45% | 29.45% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 47.63% | 28.25% | 28.25% | — | — | 5 | 3d 3h | 7d ago | 15m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 53.82% | 53.82% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 32.05% | 57.42% | 57.42% | — | — | 3 | 7d 1h | 21d ago | 17m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 12.95% | 11.95% | 11.95% | — | — | 1 | 24d 6h | 24d ago | 13m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 36.38% | 73.53% | 73.53% | — | — | 2 | 9d 23h | 20d ago | 15m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 77.97% | 77.97% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 47.53% | 47.53% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 42.29% | 42.29% | 42.29% | — | — | 5 | 3d 8h | 17d ago | 11m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 84.73% | 84.73% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 39.75% | 39.75% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 52.99% | 87.30% | 87.30% | — | — | 7 | 2d 4h | 15d ago | 15m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 32.29% | 32.29% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.62% | 2.62% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 36.28% | 84.96% | 84.96% | — | — | 2 | 9d 23h | 20d ago | 28m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 42.48% | 42.48% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 84.69% | 84.69% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 33.74% | 33.74% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 84.62% | 84.62% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 19.66% | 62.04% | 62.04% | — | — | 1 | 24d 14h | 25d ago | 13m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 27.10% | 27.10% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 46.42% | 46.42% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 82.23% | 82.23% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 69.63% | 69.63% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 21.16% | 34.07% | 34.07% | — | — | 4 | 6d 1h | 24d ago | 13m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 80.68% | 80.68% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 55.80% | 55.80% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.34% | 3.34% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 44.14% | 44.14% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 79.05% | 79.05% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 60.31% | 60.31% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 35.18% | 54.52% | 54.52% | — | — | 20 | 1d | 20d ago | 12m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 21.16% | 69.57% | 69.57% | — | — | 26 | 22h | 24d ago | 15m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 25.60% | 90.85% | 90.85% | — | — | 1 | 22d 23h | 23d ago | 26m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 28.92% | 28.92% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 11.17% | 11.17% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 13.23% | 13.23% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 1.24% | 29.43% | 29.43% | — | — | 1 | 29d 16h | 30d ago | 13m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 24.64% | 24.64% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 11h | 28d ago | 11m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 64.66% | 54.14% | 54.14% | — | — | 14 | 19h 29m | 11d ago | 27m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 66.46% | 96.21% | 96.21% | — | — | 17 | 14h 50m | 9d ago | 29m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 60.65% | 60.65% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 12.61% | 12.61% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 17.86% | 17.86% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 50.61% | 50.61% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 34.49% | 34.49% | 34.49% | — | — | 1 | 18d 19h | 19d ago | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 11m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 56.40% | 56.40% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 18.58% | 25.03% | 25.03% | — | — | 16 | 1d 13h | 25d ago | 15m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 40.11% | 40.11% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 53.97% | 53.97% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.67% | 5.67% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 72.08% | 86.11% | 86.11% | — | — | 2 | 4d 15h | 9d ago | 17m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 44.01% | 92.32% | 92.32% | — | — | 1 | 17d 19h | 18d ago | 28m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 84.82% | 84.82% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 83.72% | 83.72% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 65.29% | 65.29% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 76.67% | 76.67% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 83.57% | 83.57% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.04% | 20.04% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 70.51% | 61.13% | 61.13% | — | — | 1 | 9d 18h | 10d ago | 30m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 70.28% | 47.37% | 47.37% | — | — | 18 | 12h 33m | 9d ago | 14m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.20% | 4.16% | 4.16% | — | — | 2 | 14d 23h | 11d ago | 25m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 34.94% | 34.94% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 3.31% | 70.13% | 70.13% | — | — | 4 | 7d 5h | 9d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 13.35% | 27.55% | 27.55% | — | — | 31 | 19h 29m | 7d ago | 16m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.93% | 7.93% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 67.15% | 67.15% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 46.48% | 46.48% | 46.48% | — | — | 2 | 7d 20h | 16d ago | 12m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 27d 11h | 27d ago | 19m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 69.13% | 69.13% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 24.79% | 50.32% | 50.32% | — | — | 12 | 1d 22h | 23d ago | 12m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 7.51% | 7.51% | — | — | 1 | 27d 11h | 27d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 57.39% | 72.01% | 72.01% | — | — | 12 | 1d 2h | 9d ago | 12m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 50.46% | 64.27% | 64.27% | — | — | 13 | 1d 5h | 16d ago | 12m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 41.26% | 41.26% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 27.39% | 27.39% | — | — | 1 | 28d 11h | 28d ago | 13m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 13.23% | 13.23% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.37% | 18.37% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 20.22% | 20.22% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 20.76% | 43.08% | 43.08% | — | — | 1 | 24d 7h | 24d ago | 12m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 27.65% | 10.54% | 10.54% | — | — | 270 | 1h 38m | 14d ago | 18m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 13.07% | 13.07% | 13.07% | — | — | 8 | 3d 3h | 25d ago | 11m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.12% | 1.12% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 6.30% | 6.30% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 7.43% | 7.43% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 51.05% | 51.05% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 46.13% | 61.30% | 61.30% | — | — | 2 | 8d 14h | 17d ago | 11m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 84.79% | 84.79% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 65.48% | 83.78% | 83.78% | — | — | 2 | 5d 17h | 11d ago | 14m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 51.96% | 51.96% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 84.98% | 84.98% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 29.38% | 64.62% | 64.62% | — | — | 2 | 10d 22h | 22d ago | 13m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 42.33% | 42.33% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 2.73% | 2.73% | 2.73% | — | — | 1 | 27d 18h | 28d ago | 12m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 50.36% | 20.59% | 20.59% | — | — | 4 | 3d 24h | 16d ago | 18m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 27m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 82.65% | 82.65% | — | — | 1 | 29d 23h | 30d ago | 19m ago |

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
