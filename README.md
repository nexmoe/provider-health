# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**605 providers** — 337 🟢 operational · 50 🟡 degraded · 218 🔴 down · 0 ⚫ unknown

_Updated 2026-05-23 06:15 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.86% | 97.15% | 97.15% | 2266 ms | ↓ 0.80x | 2 | 10m | 12d ago | 17m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 100.00% | 92.84% | 92.84% | 718 ms | ↓ 0.81x | 0 | — | — | 23m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 98.14% | 14.79% | 14.79% | 1759 ms | ↓ 0.83x | 2 | 6h 11m | 22d ago | 24m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.25% | 97.25% | 2324 ms | ↓ 0.83x | 0 | — | — | 32m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 99.86% | 46.87% | 46.87% | 1583 ms | ↓ 0.83x | 3 | 0s | 11d ago | 22m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 98.97% | 98.72% | 98.72% | 1618 ms | ↓ 0.76x | 14 | 11m | 21d ago | 34m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 99.52% | 93.38% | 93.38% | 1690 ms | ↓ 0.86x | 1 | 2h 59m | 20d ago | 19m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1411 ms | ↓ 0.68x | 0 | — | — | 16m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 99.33% | 96.84% | 96.84% | 1634 ms | ↓ 0.93x | 1 | 4h 31m | 9d ago | 19m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 100.00% | 91.81% | 91.81% | 1352 ms | ↓ 0.76x | 0 | — | — | 35m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.93% | 99.93% | 99.93% | 1291 ms | ↓ 0.88x | 1 | 0s | 9d ago | 16m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 99.90% | 96.50% | 96.50% | 2656 ms | → 0.99x | 2 | 0s | 21d ago | 19m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.95% | 99.81% | 99.81% | 921 ms | ↓ 0.66x | 1 | 0s | 8d ago | 19m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 381 ms | → 0.97x | 0 | — | — | 14m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.86% | 98.19% | 98.19% | 931 ms | ↓ 0.82x | 3 | 0s | 15d ago | 20m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 99.95% | 96.16% | 96.16% | 1317 ms | → 0.98x | 1 | 0s | 8d ago | 19m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 98.19% | 98.11% | 98.11% | 661 ms | ↓ 0.58x | 1 | 12h 37m | 30d ago | 16m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 76.05% | 32.45% | 32.45% | 461 ms | ↓ 0.89x | 2 | 3d 13h | 24d ago | 29m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.86% | 99.89% | 99.89% | 762 ms | ↓ 0.90x | 2 | 9m | 11d ago | 19m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.71% | 96.39% | 96.39% | 2202 ms | → 1.02x | 1 | 1h 40m | 19d ago | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.95% | 98.80% | 98.80% | 595 ms | ↓ 0.75x | 1 | 0s | 20d ago | 31m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 100.00% | 96.00% | 96.00% | 479 ms | ↓ 0.80x | 0 | — | — | 21m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 97.15% | 97.15% | 164 ms | ↓ 0.29x | 0 | — | — | 17m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 92.32% | 80.99% | 80.99% | 1024 ms | ↓ 0.59x | 4 | 8h 1m | 24d ago | 20m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 99.71% | 97.24% | 97.24% | 1095 ms | ↓ 0.75x | 2 | 40m | 24d ago | 22m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.98% | 99.98% | 468 ms | ↓ 0.87x | 0 | — | — | 30m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 100.00% | 98.73% | 91.94% | 91.94% | 954 ms | → 0.95x | 5 | 1h 28m | 8d ago | 33m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.95% | 99.73% | 99.73% | 2726 ms | ↓ 0.84x | 1 | 0s | 14d ago | 30m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 99.95% | 98.80% | 98.80% | 113 ms | ↓ 0.11x | 1 | 0s | 30d ago | 21m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 98.97% | 97.72% | 97.72% | 3415 ms | → 1.01x | 22 | 0s | 9d ago | 33m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.86% | 99.78% | 99.78% | 1538 ms | ↓ 0.75x | 3 | 0s | 19d ago | 21m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 62.23% | 11.19% | 11.19% | 2591 ms | → 1.01x | 7 | 1d 11h | 12d ago | 29m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 95.42% | 95.42% | 1060 ms | ↓ 0.57x | 0 | — | — | 21m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 72.27% | 82.48% | 82.48% | 1455 ms | ↓ 0.88x | 2 | 4d 1h | 19d ago | 19m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.49% | 99.49% | 1743 ms | ↓ 0.90x | 0 | — | — | 30m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 376 ms | → 1.00x | 0 | — | — | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.91% | 99.84% | 99.84% | 3710 ms | → 0.97x | 2 | 0s | 19d ago | 29m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 98.52% | 99.39% | 99.39% | 2932 ms | → 0.99x | 4 | 2h 15m | 11d ago | 21m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.67% | 99.62% | 99.62% | 955 ms | ↑ 1.06x | 6 | 3m | 9d ago | 19m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 99.76% | 24.59% | 24.59% | 966 ms | ↓ 0.69x | 5 | 0s | 20d ago | 30m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.28% | 95.45% | 95.45% | 1912 ms | ↑ 1.15x | 2 | 2h 9m | 11d ago | 19m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1097 ms | → 1.02x | 0 | — | — | 16m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.85% | 99.85% | 99.85% | 470 ms | → 1.00x | 2 | 0s | 13d ago | 16m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 96.07% | 96.07% | 923 ms | ↓ 0.87x | 1 | 0s | 21d ago | 22m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 99.69% | 99.69% | 99.69% | 1320 ms | ↓ 0.92x | 2 | 19m | 10d ago | 15m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 50.96% | 50.96% | 743 ms | → 1.00x | 0 | — | — | 24m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.60% | 99.60% | 2432 ms | ↓ 0.93x | 0 | — | — | 29m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.95% | 96.93% | 96.93% | 1114 ms | ↓ 0.69x | 1 | 0s | 29d ago | 29m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.76% | 98.97% | 98.97% | 1337 ms | → 0.98x | 4 | 2m | 8d ago | 22m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 100.00% | 99.93% | 98.69% | 98.69% | 1074 ms | ↓ 0.89x | 1 | 0s | 14d ago | 17m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.95% | 81.04% | 81.04% | 1860 ms | ↓ 0.84x | 1 | 0s | 28d ago | 23m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 100.00% | 62.74% | 62.74% | 1409 ms | → 0.96x | 0 | — | — | 23m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 879 ms | ↓ 0.87x | 0 | — | — | 16m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.33% | 98.33% | 1644 ms | ↓ 0.77x | 0 | — | — | 21m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 92.23% | 92.23% | 939 ms | ↓ 0.87x | 0 | — | — | 24m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.19% | 98.19% | 673 ms | ↓ 0.75x | 0 | — | — | 19m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 98.68% | 98.68% | 98.68% | 1937 ms | ↓ 0.90x | 12 | 10m | 19d ago | 17m ago |
| [小水管](https://lmspeed.net/provider/api-pie-xian-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1441 ms | ↓ 0.80x | 0 | — | — | 15m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 100.00% | 97.87% | 90.30% | 90.30% | 1645 ms | ↓ 0.78x | 14 | 23m | 19d ago | 17m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.76% | 97.41% | 97.41% | 2958 ms | → 1.00x | 5 | 0s | 11d ago | 21m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 100.00% | 43.11% | 43.11% | 806 ms | ↓ 0.94x | 0 | — | — | 24m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.95% | 73.31% | 73.31% | 736 ms | ↓ 0.79x | 1 | 0s | 9d ago | 23m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 97.83% | 97.83% | 2085 ms | ↓ 0.83x | 0 | — | — | 22m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 100.00% | 48.74% | 48.74% | 1079 ms | ↓ 0.89x | 0 | — | — | 24m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 100.00% | 40.59% | 40.59% | 1046 ms | ↓ 0.73x | 0 | — | — | 30m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.95% | 79.75% | 79.75% | 1400 ms | ↓ 0.79x | 1 | 0s | 8d ago | 23m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.14% | 57.88% | 57.88% | 794 ms | ↓ 0.78x | 10 | 16m | 20d ago | 23m ago |
| [星见雅 API（跑路了兄弟）](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 99.95% | 97.87% | 97.87% | 821 ms | ↓ 0.55x | 1 | 0s | 7d ago | 24m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 59.88% | 59.88% | 949 ms | ↓ 0.78x | 0 | — | — | 24m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 2032 ms | ↓ 0.87x | 0 | — | — | 17m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.13% | 99.13% | 1368 ms | ↓ 0.90x | 0 | — | — | 23m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.95% | 88.72% | 88.72% | 2087 ms | ↓ 0.92x | 1 | 0s | 10d ago | 23m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 100.00% | 100.00% | 82.36% | 82.36% | 527 ms | ↓ 0.85x | 0 | — | — | 17m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.76% | 99.76% | 99.76% | 2265 ms | → 1.01x | 5 | 0s | 19d ago | 21m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.95% | 99.54% | 99.54% | 768 ms | ↓ 0.71x | 1 | 0s | 12d ago | 23m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 100.00% | 97.89% | 97.89% | 1989 ms | ↑ 1.07x | 0 | — | — | 23m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.91% | 13.02% | 13.02% | 1331 ms | ↓ 0.92x | 2 | 0s | 18d ago | 30m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1200 ms | ↓ 0.85x | 0 | — | — | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.77% | 98.98% | 98.98% | 2131 ms | → 0.95x | 2 | 30m | 18d ago | 33m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.02% | 98.02% | 2988 ms | ↓ 0.80x | 0 | — | — | 34m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 70.20% | 70.20% | 2442 ms | ↓ 0.84x | 0 | — | — | 22m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 624 ms | ↓ 0.90x | 1 | 0s | 17d ago | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.86% | 99.95% | 99.95% | 1181 ms | ↓ 0.85x | 3 | 0s | 28d ago | 34m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.95% | 99.70% | 99.70% | 2928 ms | ↑ 1.08x | 1 | 0s | 9d ago | 34m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.81% | 87.92% | 87.92% | 2006 ms | ↑ 1.07x | 2 | 19m | 15d ago | 23m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 99.95% | 73.56% | 73.56% | 2002 ms | ↓ 0.82x | 1 | 0s | 30d ago | 21m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.62% | 99.72% | 99.72% | 428 ms | ↓ 0.90x | 8 | 0s | 15d ago | 33m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 100.00% | 100.00% | 100.00% | 960 ms | ↓ 0.83x | 0 | — | — | 15m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 78.56% | 78.56% | 1628 ms | → 1.01x | 0 | — | — | 19m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1363 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1017 ms | ↓ 0.81x | 0 | — | — | 19m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 98.96% | 98.96% | 385 ms | ↓ 0.64x | 0 | — | — | 24m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 100.00% | 98.53% | 98.53% | 1933 ms | → 1.04x | 0 | — | — | 22m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 96.40% | 96.40% | 376 ms | ↓ 0.38x | 0 | — | — | 19m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1264 ms | ↓ 0.79x | 0 | — | — | 15m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 100.00% | 98.06% | 95.32% | 95.32% | 1359 ms | ↓ 0.74x | 12 | 23m | 18d ago | 17m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 100.00% | 99.24% | 96.24% | 96.24% | 245 ms | ↓ 0.44x | 14 | 3m | 20d ago | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.59% | 98.59% | 168 ms | ↓ 0.45x | 0 | — | — | 21m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 99.90% | 98.90% | 98.90% | 730 ms | ↓ 0.73x | 2 | 0s | 26d ago | 25m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 99.95% | 12.91% | 12.91% | 2412 ms | ↓ 0.88x | 1 | 0s | 19d ago | 29m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 100.00% | 100.00% | 100.00% | 873 ms | ↓ 0.91x | 0 | — | — | 15m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 16.54% | 16.54% | 1063 ms | ↓ 0.79x | 0 | — | — | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 532 ms | ↓ 0.75x | 0 | — | — | 35m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 99.38% | 99.14% | 99.14% | 174 ms | ↓ 0.89x | 9 | 16m | 9d ago | 21m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 524 ms | ↓ 0.54x | 0 | — | — | 33m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 97.04% | 97.04% | 1315 ms | ↓ 0.88x | 0 | — | — | 17m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 97.77% | 97.77% | 2228 ms | ↑ 1.16x | 0 | — | — | 23m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.81% | 99.75% | 99.75% | 1297 ms | ↓ 0.93x | 2 | 20m | 15d ago | 25m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 100.00% | 100.00% | 100.00% | 100.00% | 1142 ms | ↓ 0.89x | 0 | — | — | 16m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.63% | 98.63% | 4024 ms | → 0.97x | 0 | — | — | 35m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 66.00% | 82.62% | 82.62% | 723 ms | ↓ 0.59x | 1 | 9d 6h | 30d ago | 21m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.91% | 99.91% | 2625 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1187 ms | ↓ 0.86x | 0 | — | — | 16m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.95% | 99.64% | 99.64% | 2317 ms | ↑ 1.08x | 1 | 0s | 15d ago | 29m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.90% | 99.30% | 99.30% | 1650 ms | ↓ 0.90x | 2 | 0s | 14d ago | 24m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 100.00% | 37.25% | 37.25% | 672 ms | → 0.98x | 0 | — | — | 34m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.23% | 98.23% | 3908 ms | ↑ 1.15x | 0 | — | — | 22m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.95% | 99.94% | 99.94% | 1010 ms | ↓ 0.93x | 1 | 0s | 9d ago | 33m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 98.92% | 99.23% | 99.23% | 676 ms | ↓ 0.69x | 17 | 7m | 7d ago | 34m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.95% | 99.85% | 99.85% | 1124 ms | ↓ 0.77x | 1 | 0s | 15d ago | 29m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.86% | 99.86% | 2182 ms | → 0.99x | 0 | — | — | 23m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.83% | 99.84% | 99.84% | 1833 ms | ↓ 0.82x | 25 | 0s | 19d ago | 33m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.49% | 99.49% | 1643 ms | ↑ 1.10x | 0 | — | — | 19m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.95% | 88.94% | 88.94% | 1133 ms | ↑ 1.12x | 1 | 0s | 29d ago | 23m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.60% | 99.60% | 1388 ms | → 1.00x | 0 | — | — | 33m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 57.37% | 57.37% | 820 ms | ↓ 0.77x | 3 | 0s | 7d ago | 24m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 374 ms | ↓ 0.77x | 0 | — | — | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 59.43% | 76.75% | 76.75% | 595 ms | ↓ 0.33x | 3 | 4d 1h | 12d ago | 19m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.95% | 99.75% | 99.75% | 1688 ms | ↓ 0.94x | 1 | 0s | 28d ago | 33m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 50.62% | 38.39% | 38.39% | 3303 ms | → 1.01x | 2 | 6d 21h | 29d ago | 25m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 100.00% | 14.94% | 14.94% | 1657 ms | ↓ 0.90x | 0 | — | — | 24m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 100.00% | 98.81% | 98.81% | 2475 ms | ↑ 1.20x | 0 | — | — | 22m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 99.67% | 78.66% | 78.66% | 1718 ms | ↓ 0.84x | 2 | 50m | 20d ago | 34m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 71.82% | 71.82% | 71.82% | 1067 ms | ↓ 0.93x | 1 | 5d 5h | 16d ago | 16m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.91% | 99.91% | 1139 ms | ↓ 0.88x | 0 | — | — | 33m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.57% | 99.57% | 974 ms | ↓ 0.80x | 0 | — | — | 33m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.95% | 99.94% | 99.94% | 667 ms | ↓ 0.67x | 1 | 0s | 17d ago | 19m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 100.00% | 98.97% | 98.97% | 1624 ms | ↓ 0.86x | 0 | — | — | 32m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 97.94% | 97.94% | 1142 ms | ↓ 0.81x | 0 | — | — | 19m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 100.00% | 97.56% | 97.56% | 2544 ms | → 0.99x | 0 | — | — | 20m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.76% | 95.37% | 95.37% | 427 ms | ↓ 0.40x | 2 | 31m | 8d ago | 19m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 100.00% | 99.86% | 13.00% | 13.00% | 1283 ms | → 0.99x | 3 | 0s | 21d ago | 33m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 66.32% | 66.32% | 840 ms | ↓ 0.87x | 0 | — | — | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.78% | 99.78% | 1346 ms | ↓ 0.86x | 0 | — | — | 32m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 100.00% | 99.69% | 99.69% | 1936 ms | ↓ 0.89x | 0 | — | — | 33m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 82.84% | 91.34% | 91.34% | 1586 ms | ↑ 1.14x | 4 | 1d 1h | 8d ago | 22m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 100.00% | 99.86% | 99.86% | 956 ms | → 0.97x | 0 | — | — | 25m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 82.15% | 29.94% | 29.94% | 1708 ms | ↓ 0.90x | 10 | 12h 33m | 11d ago | 24m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.44% | 84.30% | 84.30% | 1172 ms | → 0.98x | 12 | 0s | 19d ago | 33m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 95.57% | 41.75% | 41.75% | 804 ms | ↓ 0.71x | 4 | 7h 27m | 15d ago | 21m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 99.86% | 84.36% | 84.36% | 242 ms | ↓ 0.42x | 3 | 0s | 26d ago | 32m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 99.71% | 89.05% | 89.05% | 450 ms | ↓ 0.24x | 5 | 4m | 8d ago | 21m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.21% | 99.21% | 1872 ms | ↓ 0.93x | 0 | — | — | 23m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 96.72% | 98.80% | 98.80% | 2460 ms | ↓ 0.81x | 54 | 6m | 11d ago | 34m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 100.00% | 64.06% | 64.06% | 409 ms | ↓ 0.40x | 0 | — | — | 24m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.35% | 96.35% | 924 ms | ↓ 0.93x | 0 | — | — | 24m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.86% | 14.84% | 14.84% | 957 ms | ↓ 0.89x | 3 | 0s | 17d ago | 30m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.95% | 99.74% | 99.74% | 1770 ms | ↓ 0.80x | 1 | 0s | 21d ago | 33m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 100.00% | 99.07% | 99.07% | 99.07% | 1178 ms | ↓ 0.87x | 1 | 3h 38m | 11d ago | 16m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 100.00% | 97.18% | 91.37% | 91.37% | 2192 ms | ↓ 0.78x | 4 | 4h 37m | 11d ago | 21m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 54.27% | 54.27% | 499 ms | ↓ 0.52x | 0 | — | — | 24m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.81% | 98.03% | 98.03% | 1369 ms | ↓ 0.64x | 4 | 0s | 16d ago | 21m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.95% | 32.52% | 32.52% | 2069 ms | ↓ 0.90x | 1 | 0s | 22d ago | 23m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.74% | 99.74% | 2909 ms | ↑ 1.19x | 0 | — | — | 33m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 1881 ms | → 1.03x | 0 | — | — | 22m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 100.00% | 49.99% | 49.99% | 3656 ms | ↓ 0.93x | 0 | — | — | 22m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.14% | 99.14% | 2066 ms | ↓ 0.93x | 2 | 0s | 21d ago | 23m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 98.28% | 98.38% | 98.38% | 1445 ms | ↑ 1.12x | 1 | 11h 52m | 23d ago | 16m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.71% | 77.07% | 77.07% | 1172 ms | → 1.04x | 1 | 1h 39m | 23d ago | 23m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 187 ms | → 0.99x | 0 | — | — | 33m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.91% | 99.90% | 99.90% | 1632 ms | ↓ 0.82x | 2 | 0s | 20d ago | 32m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 100.00% | 99.95% | 99.95% | 1650 ms | ↓ 0.86x | 0 | — | — | 29m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.90% | 77.35% | 77.35% | 1819 ms | ↓ 0.92x | 2 | 0s | 10d ago | 23m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 84.68% | 84.68% | 1790 ms | ↑ 1.10x | 0 | — | — | 23m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 95.80% | 95.80% | 816 ms | ↓ 0.85x | 0 | — | — | 24m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 889 ms | ↓ 0.93x | 0 | — | — | 32m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.95% | 98.28% | 98.28% | 433 ms | ↓ 0.51x | 1 | 0s | 14d ago | 21m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 15.42% | 15.42% | 711 ms | ↓ 0.57x | 0 | — | — | 24m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.81% | 96.40% | 96.40% | 1679 ms | ↓ 0.93x | 3 | 6m | 11d ago | 19m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1401 ms | → 1.00x | 0 | — | — | 15m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.93% | 99.93% | 720 ms | ↓ 0.95x | 0 | — | — | 21m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 57.54% | 57.54% | 1720 ms | ↓ 0.89x | 0 | — | — | 24m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 99.95% | 99.79% | 99.79% | 3050 ms | → 0.95x | 1 | 0s | 28d ago | 33m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 83.82% | 89.35% | 89.35% | 27 ms | ↓ 0.17x | 4 | 1d 5h | 13d ago | 19m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 12.99% | 12.99% | 924 ms | → 0.98x | 0 | — | — | 32m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 870 ms | ↓ 0.94x | 0 | — | — | 16m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.19% | 99.24% | 99.24% | 1077 ms | ↓ 0.76x | 1 | 3h 45m | 28d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.93% | 99.93% | 99.93% | 1570 ms | ↓ 0.69x | 1 | 0s | 20d ago | 17m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1087 ms | ↓ 0.79x | 0 | — | — | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 92.95% | 92.95% | 3499 ms | ↓ 0.90x | 0 | — | — | 33m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.81% | 99.50% | 99.50% | 1619 ms | ↓ 0.80x | 3 | 7m | 9d ago | 32m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 100.00% | 99.98% | 99.98% | 1998 ms | ↓ 0.90x | 0 | — | — | 23m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.67% | 98.68% | 98.68% | 1800 ms | ↓ 0.90x | 7 | 0s | 20d ago | 21m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 100.00% | 98.91% | 98.91% | 98.91% | 877 ms | ↓ 0.67x | 10 | 8m | 19d ago | 17m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.95% | 99.06% | 99.06% | 1083 ms | ↑ 1.07x | 1 | 0s | 29d ago | 22m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 100.00% | 31.10% | 31.10% | 1536 ms | ↓ 0.69x | 0 | — | — | 33m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.42% | 99.42% | 844 ms | ↓ 0.69x | 0 | — | — | 32m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 380 ms | ↓ 0.53x | 0 | — | — | 35m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 98.73% | 59.09% | 59.09% | 2721 ms | ↓ 0.92x | 25 | 2m | 17d ago | 33m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 99.62% | 91.57% | 91.57% | 1029 ms | ↓ 0.74x | 1 | 2h 20m | 23d ago | 32m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.19% | 98.19% | 2239 ms | ↑ 1.06x | 0 | — | — | 19m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 99.67% | 96.47% | 96.47% | 2358 ms | ↓ 0.90x | 1 | 1h 60m | 23d ago | 33m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 1532 ms | → 1.00x | 0 | — | — | 14m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1187 ms | → 1.00x | 0 | — | — | 14m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.77% | 99.77% | 519 ms | ↓ 0.46x | 0 | — | — | 19m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 86.47% | 86.47% | 1426 ms | → 1.03x | 0 | — | — | 22m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.95% | 99.75% | 99.75% | 815 ms | ↓ 0.66x | 1 | 0s | 20d ago | 19m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.79% | 99.79% | 1330 ms | → 0.98x | 0 | — | — | 33m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.46% | 99.46% | 1057 ms | ↑ 1.09x | 0 | — | — | 34m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.72% | 99.72% | 902 ms | → 1.02x | 0 | — | — | 34m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.95% | 99.87% | 99.87% | 2449 ms | → 1.02x | 1 | 0s | 27d ago | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.82% | 99.82% | 715 ms | → 1.03x | 0 | — | — | 31m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.91% | 83.39% | 83.39% | 1531 ms | ↓ 0.81x | 2 | 0s | 19d ago | 29m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.81% | 18.71% | 18.71% | 1572 ms | ↓ 0.84x | 4 | 0s | 8d ago | 35m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 100.00% | 98.73% | 98.73% | 1702 ms | ↓ 0.90x | 0 | — | — | 22m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 100.00% | 91.63% | 91.63% | 3054 ms | ↓ 0.84x | 0 | — | — | 35m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.92% | 99.92% | 99.92% | 546 ms | ↓ 0.73x | 1 | 0s | 18d ago | 15m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 95.19% | 95.19% | 95.19% | 699 ms | ↑ 1.06x | 5 | 4h 10m | 9d ago | 16m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.20% | 96.06% | 96.06% | 668 ms | ↓ 0.42x | 3 | 1h 21m | 23d ago | 17m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.68% | 98.68% | 510 ms | → 0.95x | 0 | — | — | 23m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 99.25% | 98.63% | 98.63% | 2924 ms | → 0.97x | 5 | 48m | 13d ago | 31m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.78% | 99.78% | 920 ms | ↓ 0.76x | 0 | — | — | 22m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 100.00% | 98.03% | 98.03% | 1514 ms | ↓ 0.95x | 0 | — | — | 22m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.92% | 99.92% | 1222 ms | ↓ 0.73x | 0 | — | — | 31m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 99.95% | 86.87% | 86.87% | 2375 ms | ↓ 0.95x | 1 | 0s | 28d ago | 23m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.48% | 96.32% | 96.32% | 1773 ms | ↓ 0.90x | 3 | 48m | 26d ago | 24m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 100.00% | 99.86% | 99.86% | 1540 ms | ↓ 0.82x | 0 | — | — | 31m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 99.86% | 12.99% | 12.99% | 1753 ms | ↓ 0.83x | 3 | 0s | 12d ago | 33m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 648 ms | ↓ 0.58x | 0 | — | — | 16m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.67% | 96.02% | 96.02% | 1250 ms | ↓ 0.85x | 2 | 51m | 15d ago | 19m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.84% | 99.84% | 1993 ms | ↓ 0.87x | 0 | — | — | 31m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.95% | 99.94% | 99.94% | 721 ms | ↓ 0.81x | 1 | 0s | 21d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.95% | 15.00% | 15.00% | 1837 ms | ↓ 0.89x | 1 | 0s | 30d ago | 24m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 99.81% | 12.80% | 12.80% | 1258 ms | ↓ 0.84x | 4 | 0s | 20d ago | 24m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 98.71% | 95.61% | 95.61% | 1296 ms | → 1.00x | 1 | 8h 38m | 11d ago | 19m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2391 ms | ↓ 0.95x | 0 | — | — | 21m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.25% | 99.89% | 99.89% | 1318 ms | → 0.96x | 3 | 1h 27m | 26d ago | 33m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.74% | 99.74% | 2221 ms | ↑ 1.09x | 0 | — | — | 31m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.10% | 98.10% | 924 ms | ↓ 0.78x | 0 | — | — | 19m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.91% | 99.79% | 99.79% | 1748 ms | ↓ 0.87x | 2 | 0s | 10d ago | 29m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 100.00% | 99.83% | 99.83% | 1994 ms | ↑ 1.18x | 0 | — | — | 24m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 100.00% | 99.07% | 99.07% | 1078 ms | ↓ 0.86x | 0 | — | — | 33m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 100.00% | 92.56% | 36.53% | 36.53% | 1094 ms | ↓ 0.60x | 20 | 2h 17m | 11d ago | 21m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 99.99% | 99.99% | 332 ms | ↓ 0.58x | 0 | — | — | 32m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.77% | 99.77% | 99.22% | 99.22% | 3367 ms | ↓ 0.90x | 5 | 0s | 2d ago | 34m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.77% | 99.95% | 99.83% | 99.83% | 2014 ms | ↑ 1.96x | 1 | 0s | 5d ago | 34m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.77% | 99.67% | 99.71% | 99.71% | 519 ms | ↑ 1.13x | 4 | 18m | 7d ago | 34m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.77% | 99.95% | 99.50% | 99.50% | 2681 ms | ↓ 0.95x | 1 | 0s | 3d ago | 33m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.77% | 99.95% | 99.55% | 99.55% | 1251 ms | ↓ 0.89x | 1 | 0s | 3d ago | 34m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.77% | 99.81% | 99.72% | 99.72% | 2472 ms | ↓ 0.89x | 4 | 0s | 1d ago | 33m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.77% | 99.91% | 99.61% | 99.61% | 1574 ms | ↓ 0.90x | 2 | 0s | 4d ago | 32m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.77% | 99.81% | 99.20% | 99.20% | 1307 ms | ↓ 0.91x | 4 | 0s | 6d ago | 32m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.77% | 99.91% | 88.38% | 88.38% | 1017 ms | ↓ 0.73x | 2 | 0s | 1d ago | 32m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.77% | 99.76% | 99.89% | 99.89% | 663 ms | ↓ 0.76x | 3 | 17m | 7d ago | 32m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 99.77% | 97.98% | 98.68% | 98.68% | 3318 ms | → 0.97x | 37 | 4m | 5d ago | 32m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.77% | 99.34% | 25.72% | 25.72% | 1743 ms | ↑ 1.32x | 5 | 36m | 1d ago | 31m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.77% | 99.91% | 24.19% | 24.19% | 727 ms | ↓ 0.89x | 2 | 0s | 5d ago | 31m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.77% | 97.92% | 51.47% | 51.47% | 1334 ms | ↓ 0.81x | 7 | 59m | 1d ago | 30m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.77% | 99.43% | 97.70% | 97.70% | 3059 ms | → 0.96x | 10 | 4m | 4d ago | 29m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.77% | 96.12% | 77.68% | 77.68% | 1782 ms | ↓ 0.89x | 63 | 6m | 4d ago | 29m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.77% | 99.67% | 99.71% | 99.71% | 2993 ms | ↓ 0.92x | 7 | 0s | 2d ago | 29m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.77% | 99.91% | 99.17% | 99.17% | 3113 ms | → 0.98x | 2 | 0s | 7d ago | 29m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.76% | 99.38% | 69.14% | 69.14% | 1072 ms | ↓ 0.92x | 10 | 6m | 3d ago | 23m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.76% | 95.81% | 97.29% | 97.29% | 1825 ms | ↑ 1.38x | 7 | 4h 1m | 6d ago | 24m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.76% | 99.81% | 56.42% | 56.42% | 1609 ms | ↓ 0.88x | 4 | 0s | 4d ago | 24m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.76% | 99.95% | 15.20% | 15.20% | 2335 ms | ↑ 1.20x | 1 | 0s | 6d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.76% | 99.43% | 96.53% | 96.53% | 3981 ms | → 1.04x | 5 | 28m | 5d ago | 24m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.76% | 98.90% | 90.09% | 90.09% | 1627 ms | → 1.01x | 23 | 0s | 6d ago | 23m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.76% | 99.95% | 99.81% | 99.81% | 1436 ms | → 0.99x | 1 | 0s | 1d ago | 22m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.76% | 99.81% | 32.89% | 32.89% | 194 ms | ↓ 0.87x | 4 | 0s | 6d ago | 22m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.76% | 99.71% | 68.95% | 68.95% | 1231 ms | ↑ 1.09x | 6 | 0s | 1d ago | 22m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.76% | 99.67% | 99.70% | 99.70% | 3251 ms | → 1.00x | 7 | 0s | 2d ago | 21m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.76% | 99.76% | 99.85% | 99.85% | 1047 ms | ↓ 0.69x | 3 | 13m | 5d ago | 19m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.76% | 97.76% | 97.45% | 97.45% | 1459 ms | → 1.00x | 3 | 4h 53m | 5d ago | 19m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.76% | 99.90% | 97.43% | 97.43% | 1271 ms | ↓ 0.90x | 2 | 0s | 2d ago | 19m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.76% | 99.81% | 97.35% | 97.35% | 2060 ms | → 1.02x | 3 | 6m | 3d ago | 21m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.76% | 99.90% | 99.88% | 99.88% | 2379 ms | ↑ 1.08x | 2 | 0s | 2d ago | 21m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.76% | 94.49% | 94.49% | 94.49% | 996 ms | ↓ 0.92x | 2 | 12h 25m | 1d ago | 16m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 99.76% | 99.92% | 99.92% | 99.92% | 1621 ms | ↓ 0.87x | 1 | 0s | 17h ago | 15m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.76% | 99.38% | 99.38% | 99.38% | 2467 ms | ↓ 0.89x | 6 | 8m | 17h ago | 15m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 99.76% | 99.71% | 99.71% | 99.71% | 1478 ms | → 1.04x | 3 | 6m | 17h ago | 15m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.76% | 99.92% | 99.92% | 99.92% | 852 ms | ↓ 0.86x | 1 | 0s | 17h ago | 15m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 99.76% | 98.21% | 98.21% | 98.21% | 1422 ms | ↓ 0.84x | 12 | 18m | 4d ago | 17m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 99.76% | 99.61% | 99.61% | 99.61% | 2353 ms | ↓ 0.91x | 4 | 5m | 17h ago | 15m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.76% | 99.57% | 96.76% | 96.76% | 1994 ms | ↓ 0.91x | 9 | 0s | 4d ago | 17m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.76% | 98.21% | 98.21% | 98.21% | 1311 ms | ↓ 0.70x | 12 | 18m | 4d ago | 17m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.76% | 98.28% | 98.38% | 98.38% | 1009 ms | ↓ 0.60x | 3 | 3h 43m | 5d ago | 16m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.76% | 99.91% | 99.91% | 99.91% | 2406 ms | ↓ 0.94x | 1 | 0s | 17h ago | 15m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.76% | 99.92% | 99.92% | 99.92% | 784 ms | → 1.00x | 1 | 0s | 17h ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.76% | 99.77% | 99.77% | 99.77% | 1686 ms | ↓ 0.90x | 2 | 10m | 17h ago | 15m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.76% | 99.92% | 99.92% | 99.92% | 381 ms | ↓ 0.83x | 1 | 0s | 17h ago | 15m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.76% | 99.93% | 99.93% | 99.93% | 2703 ms | ↓ 0.95x | 1 | 0s | 17h ago | 15m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.76% | 99.93% | 99.93% | 99.93% | 415 ms | ↓ 0.67x | 1 | 0s | 17h ago | 15m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.76% | 99.94% | 99.94% | 99.94% | 921 ms | ↓ 0.73x | 1 | 0s | 17h ago | 15m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 99.76% | 99.77% | 99.77% | 99.77% | 3675 ms | ↑ 1.43x | 3 | 0s | 17h ago | 15m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 99.76% | 99.93% | 99.93% | 99.93% | 994 ms | ↓ 0.83x | 1 | 0s | 17h ago | 15m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.76% | 99.94% | 99.94% | 99.94% | 882 ms | ↓ 0.73x | 1 | 0s | 17h ago | 15m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.76% | 99.94% | 99.94% | 99.94% | 3022 ms | ↓ 0.64x | 1 | 0s | 17h ago | 15m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.76% | 99.94% | 99.94% | 99.94% | 1097 ms | ↓ 0.70x | 1 | 0s | 17h ago | 15m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.76% | 99.94% | 99.94% | 99.94% | 556 ms | ↓ 0.56x | 1 | 0s | 17h ago | 15m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.76% | 99.94% | 99.94% | 99.94% | 781 ms | ↓ 0.62x | 1 | 0s | 17h ago | 15m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.76% | 99.78% | 99.78% | 99.78% | 860 ms | ↓ 0.70x | 3 | 0s | 17h ago | 15m ago |
| [933999 OpenAI Relay](https://lmspeed.net/provider/openai-933999-xyz) | 99.76% | 99.84% | 99.84% | 99.84% | 849 ms | → 0.95x | 2 | 0s | 17h ago | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.76% | 99.93% | 99.93% | 99.93% | 257 ms | ↓ 0.57x | 1 | 0s | 17h ago | 15m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.59% | 99.92% | 99.92% | 99.92% | 358 ms | ↓ 0.58x | 1 | 0s | 17h ago | 15m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.54% | 90.95% | 95.74% | 95.74% | 2756 ms | ↓ 0.87x | 92 | 22m | 4d ago | 34m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.54% | 99.20% | 99.84% | 99.84% | 2937 ms | ↓ 0.79x | 17 | 0s | 14h ago | 34m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.54% | 92.81% | 12.09% | 12.09% | 888 ms | ↓ 0.88x | 76 | 21m | 3d ago | 33m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 99.54% | 99.91% | 98.04% | 98.04% | 2064 ms | → 1.00x | 2 | 0s | 1d ago | 30m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.53% | 98.58% | 99.42% | 99.42% | 2765 ms | ↓ 0.90x | 19 | 12m | 4d ago | 29m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.53% | 95.38% | 64.21% | 64.21% | 705 ms | ↓ 0.78x | 10 | 2h 50m | 1d ago | 23m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.53% | 99.86% | 15.82% | 15.82% | 866 ms | ↓ 0.62x | 3 | 0s | 4d ago | 24m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.53% | 99.76% | 99.82% | 99.82% | 164 ms | ↓ 0.38x | 5 | 0s | 2d ago | 21m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.53% | 88.93% | 91.65% | 91.65% | 2241 ms | → 0.98x | 13 | 5h 52m | 2d ago | 21m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.53% | 99.43% | 98.02% | 98.02% | 2149 ms | → 0.98x | 11 | 2m | 2d ago | 21m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 99.53% | 98.45% | 98.45% | 98.45% | 1413 ms | ↓ 0.81x | 12 | 13m | 4d ago | 17m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.53% | 99.85% | 99.85% | 99.85% | 1947 ms | ↑ 1.07x | 2 | 0s | 17h ago | 15m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.53% | 99.56% | 99.56% | 99.56% | 986 ms | → 0.98x | 6 | 0s | 5d ago | 16m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.53% | 99.57% | 99.60% | 99.60% | 1202 ms | ↓ 0.74x | 6 | 10m | 19h ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 99.31% | 95.54% | 81.29% | 81.29% | 2709 ms | ↓ 0.86x | 76 | 4m | 4d ago | 35m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.31% | 99.81% | 99.71% | 99.71% | 1813 ms | ↓ 0.83x | 4 | 0s | 3d ago | 33m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.31% | 99.81% | 99.64% | 99.64% | 1047 ms | → 1.00x | 3 | 7m | 5d ago | 32m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.29% | 99.81% | 78.25% | 78.25% | 1769 ms | ↓ 0.84x | 2 | 26m | 1d ago | 23m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.29% | 99.81% | 13.57% | 13.57% | 1079 ms | ↓ 0.84x | 4 | 0s | 4d ago | 24m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.29% | 98.14% | 89.52% | 89.52% | 3200 ms | ↑ 1.06x | 32 | 5m | 13h ago | 21m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 99.29% | 98.66% | 84.10% | 84.10% | 584 ms | ↓ 0.34x | 6 | 1h 17m | 3d ago | 21m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.29% | 99.71% | 97.88% | 97.88% | 2269 ms | ↓ 0.88x | 3 | 26m | 2d ago | 21m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 99.29% | 99.86% | 88.79% | 88.79% | 312 ms | → 1.01x | 3 | 0s | 2d ago | 19m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.29% | 99.52% | 89.38% | 89.38% | 678 ms | ↓ 0.65x | 5 | 23m | 5d ago | 19m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.29% | 97.98% | 97.98% | 97.98% | 2318 ms | ↓ 0.89x | 13 | 22m | 5d ago | 17m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.08% | 94.32% | 84.21% | 84.21% | 4498 ms | → 1.00x | 43 | 37m | 3d ago | 35m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 99.08% | 83.26% | 86.41% | 86.41% | 1167 ms | ↓ 0.77x | 7 | 13h 50m | 4d ago | 33m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.08% | 99.72% | 99.85% | 99.85% | 136 ms | ↓ 0.33x | 4 | 15m | 3d ago | 33m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.07% | 99.81% | 99.92% | 99.92% | 761 ms | ↓ 0.84x | 1 | 1h 16m | 4d ago | 30m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.07% | 95.93% | 43.61% | 43.61% | 2910 ms | ↑ 1.09x | 9 | 1h 42m | 3d ago | 30m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.07% | 95.36% | 12.51% | 12.51% | 3654 ms | → 0.96x | 66 | 10m | 2d ago | 29m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.06% | 99.76% | 97.21% | 97.21% | 1796 ms | ↓ 0.66x | 2 | 30m | 4d ago | 22m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (50)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.82% | 99.63% | 99.63% | 99.63% | 895 ms | ↓ 0.85x | 5 | 0s | 17h ago | 15m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 98.82% | 99.30% | 99.30% | 99.30% | 928 ms | ↓ 0.77x | 9 | 0s | 3d ago | 16m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.59% | 97.43% | 62.39% | 62.39% | 4657 ms | → 1.02x | 47 | 4m | 2d ago | 23m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.59% | 97.53% | 85.26% | 85.26% | 4577 ms | → 1.04x | 47 | 2m | 1d ago | 24m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.58% | 99.71% | 97.89% | 97.89% | 2677 ms | ↑ 1.09x | 1 | 1h 41m | 5d ago | 21m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.37% | 94.56% | 98.66% | 98.66% | 3667 ms | → 0.95x | 70 | 13m | 1d ago | 29m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.37% | 99.24% | 98.96% | 98.96% | 1518 ms | ↓ 0.80x | 13 | 5m | 14h ago | 29m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 98.35% | 97.09% | 83.54% | 83.54% | 4587 ms | → 0.99x | 60 | 18s | 2d ago | 22m ago |
| [涵冰API（关闭注册）](https://lmspeed.net/provider/api-tniay-top) | 98.34% | 91.30% | 91.30% | 91.30% | 430 ms | ↓ 0.48x | 5 | 7h 21m | 7d ago | 15m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 98.15% | 36.86% | 4.24% | 4.24% | 1660 ms | → 0.95x | 3 | 5d 23h | 1d ago | 32m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 97.93% | 97.09% | 97.99% | 97.99% | 4674 ms | → 1.01x | 55 | 3m | 1d ago | 35m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.92% | 97.36% | 42.16% | 42.16% | 1008 ms | ↓ 0.91x | 15 | 58m | 1d ago | 31m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 97.92% | 97.64% | 99.13% | 99.13% | 3348 ms | ↑ 1.13x | 14 | 54m | 1d ago | 31m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.91% | 96.22% | 72.61% | 72.61% | 4172 ms | → 0.98x | 70 | 3m | 1d ago | 30m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.88% | 99.48% | 79.42% | 79.42% | 1730 ms | → 0.99x | 4 | 38m | 5d ago | 23m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.87% | 95.70% | 82.57% | 82.57% | 4773 ms | ↑ 1.11x | 53 | 16m | 15h ago | 20m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 97.69% | 97.64% | 98.95% | 98.95% | 3434 ms | ↓ 0.95x | 15 | 49m | 1d ago | 31m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.69% | 96.61% | 84.70% | 84.70% | 4487 ms | → 1.05x | 65 | 3m | 15h ago | 31m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.67% | 99.39% | 96.39% | 96.39% | 1266 ms | ↓ 0.80x | 5 | 34m | 3d ago | 30m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 97.67% | 86.66% | 11.31% | 11.31% | 2556 ms | ↓ 0.72x | 223 | 5m | 2d ago | 30m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 97.65% | 99.52% | 98.18% | 98.18% | 1377 ms | → 1.05x | 1 | 4h 17m | 22h ago | 22m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.64% | 99.43% | 98.40% | 98.40% | 613 ms | ↓ 0.43x | 5 | 28m | 5d ago | 22m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.63% | 99.22% | 99.22% | 99.22% | 1118 ms | ↓ 0.86x | 1 | 3h 12m | 3d ago | 16m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 97.63% | 99.26% | 99.26% | 99.26% | 1723 ms | ↓ 0.94x | 2 | 1h 20m | 17h ago | 15m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 97.62% | 98.52% | 98.52% | 98.52% | 1293 ms | → 1.03x | 17 | 3m | 12h ago | 15m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.47% | 98.83% | 99.41% | 99.41% | 2683 ms | ↓ 0.84x | 17 | 12m | 19h ago | 34m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 97.39% | 99.19% | 99.19% | 99.19% | 566 ms | ↓ 0.56x | 2 | 1h 30m | 5d ago | 15m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 97.16% | 97.75% | 97.75% | 97.75% | 1814 ms | ↓ 0.90x | 15 | 22m | 17h ago | 15m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 96.98% | 94.52% | 66.20% | 66.20% | 4347 ms | → 1.04x | 44 | 34m | 8h ago | 30m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 96.30% | 97.17% | 12.57% | 12.57% | 1902 ms | → 1.01x | 56 | 1m | 6h ago | 31m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.75% | 93.51% | 80.26% | 80.26% | 4582 ms | → 1.01x | 118 | 3m | 13h ago | 21m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.59% | 97.66% | 95.57% | 95.57% | 2508 ms | → 0.99x | 3 | 3h 54m | 3h ago | 22m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.44% | 98.87% | 98.90% | 98.90% | 741 ms | ↓ 0.66x | 1 | 7h 40m | 5d ago | 32m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 94.35% | 94.42% | 79.96% | 79.96% | 4789 ms | → 1.04x | 99 | 4m | 1h ago | 22m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.65% | 94.76% | 69.54% | 69.54% | 1601 ms | ↓ 0.88x | 19 | 1h 37m | 10h ago | 23m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 92.65% | 96.32% | 96.49% | 96.49% | 3568 ms | ↑ 1.05x | 14 | 1h 33m | 8h ago | 16m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 92.47% | 98.14% | 98.54% | 98.54% | 1089 ms | ↑ 1.07x | 8 | 1h 20m | 7d ago | 23m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 92.47% | 98.10% | 12.83% | 12.83% | 2403 ms | ↑ 1.13x | 8 | 1h 31m | 16h ago | 24m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 92.16% | 94.92% | 94.92% | 94.92% | 1175 ms | ↓ 0.79x | 40 | 17m | 17h ago | 15m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 91.00% | 98.19% | 98.29% | 98.29% | 3257 ms | ↑ 1.09x | 1 | 13h 23m | 4d ago | 16m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 90.78% | 89.59% | 46.39% | 46.39% | 3822 ms | → 1.03x | 180 | 5m | 2h ago | 19m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 90.35% | 88.49% | 13.73% | 13.73% | 4759 ms | → 1.05x | 187 | 7m | 12h ago | 24m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 87.50% | 97.46% | 99.63% | 99.63% | 2356 ms | → 1.04x | 6 | 2h 50m | 5d ago | 31m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 86.90% | 95.87% | 78.91% | 78.91% | 133 ms | ↓ 0.69x | 7 | 4h 41m | 4d ago | 34m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 85.02% | 17.34% | 13.14% | 13.14% | 2813 ms | → 1.00x | 41 | 13h 41m | 51m ago | 33m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 70.31% | 70.31% | 70.31% | 70.31% | 1580 ms | → 1.00x | 36 | 24m | 1h ago | 14m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 69.27% | 41.91% | 30.38% | 30.38% | 1133 ms | ↓ 0.94x | 4 | 4d 3h | 3d ago | 21m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 59.77% | 65.99% | 61.84% | 61.84% | 4842 ms | ↑ 1.06x | 393 | 18m | 4s ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 54.25% | 11.83% | 29.17% | 29.17% | 3580 ms | → 0.98x | 29 | 20h 60m | 14h ago | 22m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 0.71% | 67.47% | 67.47% | 67.47% | 3190 ms | ↑ 1.17x | 1 | 6d 22h | 7d ago | 15m ago |

</details>

<details open>
<summary><strong>🔴 Down (218)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.76% | 99.15% | 99.16% | 99.16% | 1302 ms | ↓ 0.83x | 9 | 5m | 16m ago | 16m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 97.16% | 99.05% | 67.29% | 67.29% | 2065 ms | → 1.04x | 9 | 35m | 6h ago | 19m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 93.65% | 98.71% | 48.32% | 48.32% | 717 ms | ↓ 0.84x | 2 | 5h 1m | 10h ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 90.52% | 83.14% | 85.70% | 85.70% | 1993 ms | ↑ 1.09x | 12 | 10h 3m | 16h ago | 16m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 89.60% | 94.13% | 95.11% | 95.11% | 490 ms | ↓ 0.22x | 4 | 11h 12m | 19h ago | 20m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 87.71% | 94.70% | 51.76% | 51.76% | 1370 ms | ↓ 0.88x | 25 | 1h 20m | 21h ago | 21m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 83.76% | 96.52% | 90.42% | 90.42% | 2501 ms | ↓ 0.78x | 6 | 4h 48m | 1d ago | 22m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 79.54% | 91.36% | 98.67% | 98.67% | 553 ms | ↓ 0.82x | 17 | 3h 31m | 16h ago | 33m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 76.09% | 95.12% | 62.70% | 62.70% | 842 ms | ↓ 0.86x | 1 | 1d 18h | 2d ago | 34m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 67.53% | 69.40% | 16.61% | 16.61% | 4635 ms | ↑ 1.11x | 374 | 16m | 1h ago | 23m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 59.03% | 89.73% | 55.53% | 55.53% | 3497 ms | → 0.96x | 14 | 5h 45m | 3d ago | 31m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 53.90% | 90.64% | 91.16% | 91.16% | 1471 ms | ↓ 0.49x | 2 | 1d 17h | 3d ago | 20m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 47.39% | 86.14% | 86.14% | 86.14% | 4701 ms | → 1.00x | 16 | 5h 41m | 4d ago | 15m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 32.64% | 84.40% | 95.49% | 95.49% | 3361 ms | → 0.96x | 13 | 9h 28m | 5d ago | 31m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 19.03% | 82.67% | 50.27% | 50.27% | 2823 ms | ↓ 0.92x | 19 | 7h 1m | 6d ago | 30m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 15.01% | 3.06% | 71.93% | 71.93% | 1049 ms | → 1.00x | 4 | 7d 5h | 1d ago | 32m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 13.65% | 82.54% | 87.32% | 87.32% | 1240 ms | ↓ 0.70x | 2 | 2d 23h | 6d ago | 24m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 13.44% | 81.35% | 37.63% | 37.63% | 2128 ms | ↓ 0.92x | 22 | 6h 41m | 6d ago | 22m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 10.45% | 9.79% | 9.79% | 9.79% | 3150 ms | ↓ 0.93x | 119 | 3h 23m | 6h ago | 14m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 7.57% | 79.62% | 86.94% | 86.94% | 1176 ms | ↓ 0.79x | 2 | 3d 11h | 6d ago | 19m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 7.06% | 44.02% | 11.03% | 11.03% | 3307 ms | → 1.05x | 389 | 45m | 6d ago | 23m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 6.89% | 68.87% | 68.87% | 68.87% | 1009 ms | ↓ 0.72x | 6 | 1d 2h | 6d ago | 15m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 2.35% | 80.22% | 27.10% | 27.10% | 72 ms | ↓ 0.11x | 1 | 6d 20h | 7d ago | 22m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 1.89% | 79.11% | 92.78% | 92.78% | 3235 ms | ↑ 1.30x | 7 | 1d | 7d ago | 22m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 1.89% | 79.07% | 92.82% | 92.82% | 534 ms | ↓ 0.51x | 7 | 1d | 7d ago | 21m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.84% | 8.26% | 63.30% | 63.30% | 3357 ms | ↑ 1.25x | 49 | 13h 34m | 10h ago | 35m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.93% | 24.82% | 4.27% | 4.27% | 3342 ms | ↑ 1.37x | 4 | 5d 21h | 3d ago | 30m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 86.28% | 86.28% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 71.45% | 71.45% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 76.84% | 76.84% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 16.31% | 71.76% | 71.76% | — | — | 1 | 25d 23h | 26d ago | 21m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.92% | 5.92% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 13.05% | 13.05% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 45.54% | 72.35% | 72.35% | — | — | 4 | 4d 8h | 15d ago | 19m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 24m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.54% | 3.54% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 63.58% | 83.62% | 83.62% | — | — | 4 | 2d 23h | 12d ago | 20m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 86.54% | 86.54% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 37.98% | 37.98% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 0.00% | 44.01% | 68.14% | 68.14% | — | — | 3 | 5d 22h | 18d ago | 19m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 73.17% | 96.65% | 96.65% | — | — | 13 | 16h 16m | 9d ago | 34m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 25.66% | 25.66% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 77.66% | 77.66% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 58.25% | 58.25% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 31.85% | 31.85% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 86.95% | 86.95% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 65.49% | 65.49% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 80.32% | 80.32% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 16.72% | 16.72% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 53.88% | 53.88% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 37.60% | 37.60% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.72% | 3.72% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 24m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 87.16% | 87.16% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 54.11% | 54.11% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 30.02% | 30.02% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 2.14% | 2.14% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 59.37% | 87.30% | 87.30% | — | — | 6 | 2d 5h | 13d ago | 22m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 45.66% | 45.66% | 45.66% | — | — | 1 | 11d 15h | 12d ago | 15m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 64.46% | 70.78% | 70.78% | — | — | 3 | 3d 21h | 12d ago | 23m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.29% | 37.44% | 37.44% | — | — | 1 | 29d 22h | 30d ago | 21m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 56.94% | 56.94% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 26.22% | 26.22% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 31.19% | 31.19% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.12% | 0.12% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 59.67% | 59.67% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 6.10% | 6.10% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 68.65% | 68.65% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 86.90% | 86.90% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 8.14% | 8.14% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 82.97% | 82.97% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 27.11% | 85.62% | 85.62% | — | — | 3 | 7d 6h | 12d ago | 34m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 11h | 19d ago | 15m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 24m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 31.68% | 31.68% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 55.20% | 55.20% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 59.63% | 60.44% | 60.44% | — | — | 4 | 3d 6h | 13d ago | 22m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 17.70% | 15.89% | 15.89% | — | — | 1 | 16d 6h | 16d ago | 17m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 63.72% | 79.99% | 79.99% | — | — | 2 | 5d 23h | 12d ago | 21m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 0.00% | 79.98% | 79.98% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 48.76% | 48.76% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 44.31% | 44.31% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 57.73% | 57.73% | 57.73% | — | — | 5 | 1d 18h | 9d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 86.91% | 86.91% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 61.38% | 61.38% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 40.77% | 40.77% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 25m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 33.51% | 33.51% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.70% | 2.70% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 63.36% | 87.14% | 87.14% | — | — | 3 | 3d 23h | 12d ago | 32m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 43.57% | 43.57% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 86.87% | 86.87% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 34.77% | 34.77% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 86.79% | 86.79% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 48.21% | 70.10% | 70.10% | — | — | 2 | 8d 7h | 17d ago | 19m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 30.80% | 30.80% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 48.39% | 48.39% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 84.35% | 84.35% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 15.92% | 73.26% | 73.26% | — | — | 2 | 12d 19h | 25d ago | 23m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 48.40% | 38.12% | 38.12% | — | — | 8 | 2d 1h | 16d ago | 19m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 25m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 82.75% | 82.75% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 60.12% | 60.12% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.49% | 3.49% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 45.27% | 45.27% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 81.08% | 81.08% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 61.86% | 61.86% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 61.60% | 64.80% | 64.80% | — | — | 38 | 7h 35m | 12d ago | 17m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 47.78% | 75.56% | 75.56% | — | — | 52 | 7h 22m | 16d ago | 21m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 53.63% | 93.18% | 93.18% | — | — | 1 | 14d 23h | 15d ago | 31m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 29.67% | 29.67% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 0.00% | 12.99% | 12.99% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 14.06% | 14.06% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 17.85% | 34.08% | 34.08% | — | — | 4 | 6d 5h | 22d ago | 19m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 25.27% | 25.27% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 20d 11h | 20d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 64.77% | 64.77% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 2.96% | 14.99% | 14.99% | — | — | 1 | 29d 2h | 29d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 18.31% | 18.31% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 51.91% | 51.91% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 47.13% | 47.13% | 47.13% | — | — | 1 | 10d 19h | 11d ago | 16m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 15m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 57.85% | 57.85% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 47.02% | 26.98% | 26.98% | — | — | 20 | 19h 59m | 17d ago | 21m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 44.57% | 44.57% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.14% | 58.93% | 58.93% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.82% | 5.82% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 70.67% | 94.69% | 94.69% | — | — | 1 | 9d 18h | 10d ago | 32m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 87.00% | 87.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 85.86% | 85.86% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 66.97% | 66.97% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 78.63% | 78.63% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 85.71% | 85.71% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 20.59% | 20.59% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 5.77% | 5.77% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 35.90% | 35.90% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 8.32% | 8.32% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 68.88% | 68.88% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 63.51% | 63.51% | 63.51% | — | — | 2 | 3d 20h | 8d ago | 16m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 19d 10h | 19d ago | 25m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 70.90% | 70.90% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 52.24% | 59.85% | 59.85% | — | — | 13 | 1d 4h | 15d ago | 17m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 9.99% | 9.99% | — | — | 1 | 19d 10h | 19d ago | 16m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 76.55% | 77.91% | 77.91% | — | — | 14 | 13h 22m | 8d ago | 17m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 45.61% | 45.61% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 32.27% | 32.27% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 14.34% | 14.34% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 18.84% | 18.84% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 16.99% | 22.32% | 22.32% | — | — | 1 | 25d 18h | 26d ago | 20m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 49.28% | 52.23% | 52.23% | — | — | 1 | 16d 6h | 16d ago | 16m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 17.59% | 17.59% | 17.59% | — | — | 8 | 2d 3h | 17d ago | 15m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 1.34% | 1.34% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 7.43% | 7.43% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 8.86% | 8.86% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 52.36% | 52.36% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 72.73% | 74.31% | 74.31% | — | — | 2 | 4d 14h | 9d ago | 15m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 86.96% | 86.96% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 56.13% | 56.13% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 87.16% | 87.16% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 57.26% | 73.62% | 73.62% | — | — | 2 | 6d 22h | 14d ago | 17m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 43.42% | 43.42% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 3.68% | 3.68% | 3.68% | — | — | 1 | 19d 18h | 20d ago | 17m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 76.51% | 21.51% | 21.51% | — | — | 6 | 1d 8h | 8d ago | 23m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 84.78% | 84.78% | — | — | 1 | 29d 23h | 30d ago | 24m ago |

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
