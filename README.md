# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**521 providers** — 307 🟢 operational · 48 🟡 degraded · 166 🔴 down · 0 ⚫ unknown

_Updated 2026-05-02 05:41 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (307)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.85% | 91.57% | 91.57% | 1745 ms | ↓ 0.87x | 4 | 0s | 14d ago | 18m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.91% | 97.02% | 97.02% | 3638 ms | ↑ 1.50x | 2 | 0s | 14d ago | 29m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.70% | 98.30% | 98.30% | 2102 ms | ↑ 1.05x | 9 | 0s | 14d ago | 17m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.94% | 98.71% | 98.71% | 886 ms | ↑ 1.58x | 1 | 0s | 14d ago | 18m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 90.09% | 90.13% | 90.13% | 2366 ms | ↑ 1.21x | 16 | 2h 28m | 13d ago | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1903 ms | ↓ 0.93x | 0 | — | — | 15m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.63% | 95.67% | 95.67% | 2301 ms | ↑ 1.38x | 1 | 18h 20m | 25d ago | 16m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 91.13% | 91.13% | 2343 ms | ↑ 1.96x | 1 | 0s | 29d ago | 31m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.72% | 99.75% | 99.75% | 2027 ms | ↑ 1.49x | 7 | 0s | 15d ago | 16m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 93.07% | 93.13% | 93.13% | 1846 ms | ↑ 1.16x | 8 | 4h 1m | 10d ago | 16m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 94.92% | 94.92% | 94.92% | 2782 ms | ↑ 1.12x | 1 | 13h 57m | 9d ago | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.70% | 95.69% | 95.69% | 2484 ms | ↑ 1.59x | 9 | 0s | 14d ago | 17m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.91% | 98.71% | 98.71% | 1495 ms | ↑ 1.21x | 2 | 0s | 15d ago | 28m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 93.48% | 93.52% | 93.52% | 2245 ms | → 1.02x | 76 | 15m | 15d ago | 16m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 97.90% | 94.91% | 94.91% | 587 ms | ↓ 0.58x | 14 | 39m | 14d ago | 17m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 80.56% | 78.69% | 78.69% | 3470 ms | ↓ 0.78x | 394 | 7m | 8d ago | 17m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 93.86% | 93.94% | 93.94% | 1479 ms | ↑ 1.66x | 1 | 12h 47m | 15d ago | 16m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2078 ms | → 1.00x | 0 | — | — | 15m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 549 ms | ↓ 0.68x | 0 | — | — | 26m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.55% | 99.71% | 99.71% | 3554 ms | ↑ 1.48x | 11 | 3m | 13d ago | 26m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 97.84% | 98.47% | 98.47% | 2446 ms | ↑ 1.81x | 44 | 6m | 9d ago | 17m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.57% | 99.16% | 99.16% | 3881 ms | ↑ 1.89x | 61 | 3m | 13d ago | 27m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.70% | 99.78% | 99.78% | 2464 ms | ↑ 1.99x | 7 | 6m | 10d ago | 17m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 94.99% | 94.04% | 94.04% | 2458 ms | ↑ 1.08x | 108 | 5m | 14d ago | 17m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.12% | 97.89% | 97.89% | 2245 ms | ↑ 2.17x | 77 | 25m | 15d ago | 26m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2981 ms | → 0.98x | 0 | — | — | 15m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.95% | 100.00% | 100.00% | 2844 ms | ↑ 1.61x | 0 | — | — | 16m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 42.41% | 88.43% | 88.43% | 1545 ms | ↑ 1.13x | 2 | 6d 24h | 14d ago | 19m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.76% | 99.45% | 99.45% | 2120 ms | ↑ 1.44x | 7 | 0s | 16d ago | 26m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.85% | 99.84% | 99.84% | 3953 ms | ↑ 1.81x | 4 | 0s | 14d ago | 25m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.91% | 99.95% | 99.95% | 2865 ms | ↑ 2.14x | 2 | 0s | 14d ago | 17m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.72% | 96.63% | 96.63% | 3197 ms | ↑ 1.63x | 64 | 2m | 12d ago | 17m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 92.55% | 92.61% | 92.61% | 2133 ms | ↑ 1.39x | 3 | 11h 20m | 15d ago | 16m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.14% | 97.17% | 97.17% | 2333 ms | → 0.97x | 18 | 41m | 13d ago | 16m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 1286 ms | ↑ 1.13x | 0 | — | — | 15m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.00% | 46.48% | 46.48% | 838 ms | → 1.02x | 49 | 4m | 11d ago | 18m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 99.61% | 97.06% | 97.06% | 3798 ms | ↑ 1.66x | 3 | 27m | 16d ago | 27m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 88.38% | 43.28% | 43.28% | 1122 ms | ↑ 1.63x | 3 | 21h 46m | 16d ago | 18m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2000 ms | → 1.00x | 0 | — | — | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.67% | 99.57% | 99.57% | 3065 ms | ↓ 0.93x | 10 | 0s | 14d ago | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 99.34% | 96.67% | 96.67% | 1670 ms | ↓ 0.52x | 19 | 1m | 8d ago | 25m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.58% | 58.17% | 58.17% | 1249 ms | ↓ 0.88x | 11 | 2m | 10d ago | 18m ago |
| [别来了给蹬爆炸了.com](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.06% | 74.45% | 74.45% | 2805 ms | ↑ 1.16x | 16 | 17m | 7d ago | 18m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.88% | 97.70% | 97.70% | 2927 ms | ↑ 1.56x | 3 | 0s | 14d ago | 16m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 4775 ms | → 1.00x | 0 | — | — | 15m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.76% | 91.44% | 91.44% | 1393 ms | ↑ 1.26x | 7 | 0s | 14d ago | 18m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.27% | 97.30% | 97.30% | 1519 ms | ↑ 1.18x | 3 | 4h 10m | 15d ago | 16m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.24% | 96.64% | 96.64% | 2759 ms | ↑ 1.29x | 47 | 2m | 14d ago | 17m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.34% | 96.37% | 96.37% | 2234 ms | ↑ 1.70x | 3 | 5h 3m | 17d ago | 16m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.31% | 37.88% | 37.88% | 857 ms | → 1.00x | 45 | 2m | 16d ago | 18m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.91% | 69.45% | 69.45% | 1892 ms | ↑ 1.19x | 2 | 0s | 14d ago | 18m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.91% | 97.30% | 97.30% | 3325 ms | ↑ 2.46x | 2 | 0s | 14d ago | 17m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.76% | 44.33% | 44.33% | 1885 ms | ↑ 1.09x | 6 | 3m | 10d ago | 19m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 35.67% | 35.67% | 1355 ms | ↓ 0.57x | 1 | 0s | 16d ago | 26m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2198 ms | → 1.00x | 0 | — | — | 15m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.76% | 76.59% | 76.59% | 2436 ms | ↑ 2.03x | 7 | 0s | 9d ago | 18m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.49% | 97.71% | 97.71% | 2180 ms | ↑ 1.70x | 23 | 11m | 14d ago | 19m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.70% | 55.50% | 55.50% | 2077 ms | ↑ 1.56x | 7 | 3m | 11d ago | 18m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.61% | 99.02% | 99.02% | 1866 ms | ↑ 1.14x | 12 | 0s | 13d ago | 18m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.51% | 86.77% | 86.77% | 3208 ms | ↑ 1.17x | 4 | 28m | 14d ago | 18m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.73% | 99.76% | 99.76% | 2986 ms | ↑ 1.52x | 8 | 0s | 8d ago | 17m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.82% | 99.48% | 99.48% | 1800 ms | ↑ 1.11x | 5 | 0s | 14d ago | 18m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.09% | 97.59% | 97.59% | 1864 ms | → 1.05x | 3 | 3h 47m | 14d ago | 18m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 29.91% | 5.83% | 5.83% | 2067 ms | → 0.99x | 4 | 4d 6h | 9d ago | 26m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 41.31% | 18.76% | 18.76% | 1437 ms | ↑ 1.12x | 2 | 7d 2h | 14d ago | 17m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.58% | 97.85% | 97.85% | 4422 ms | ↑ 1.26x | 72 | 1m | 13d ago | 30m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 987 ms | → 1.00x | 1 | 0s | 11d ago | 26m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 99.12% | 62.91% | 62.91% | 3416 ms | ↑ 1.89x | 8 | 25m | 14d ago | 17m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 79.69% | 79.75% | 79.75% | 319 ms | ↓ 0.59x | 10 | 7h 2m | 13d ago | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.82% | 99.94% | 99.94% | 2824 ms | ↑ 1.19x | 5 | 0s | 7d ago | 30m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.04% | 99.68% | 99.68% | 3403 ms | ↑ 1.71x | 10 | 22m | 12d ago | 30m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.62% | 99.58% | 99.58% | 2031 ms | ↑ 1.25x | 42 | 43s | 14d ago | 29m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 56.11% | 65.13% | 65.13% | 2457 ms | ↑ 1.18x | 5 | 2d 13h | 9d ago | 17m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 65.59% | 65.63% | 65.63% | 1966 ms | ↑ 1.24x | 2 | 3d 2h | 17d ago | 16m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2196 ms | → 1.00x | 0 | — | — | 15m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 2170 ms | ↑ 2.24x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.94% | 98.87% | 98.87% | 1460 ms | ↑ 1.52x | 1 | 0s | 30d ago | 19m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 99.73% | 98.25% | 98.25% | 1611 ms | ↑ 1.08x | 8 | 0s | 14d ago | 17m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 94.17% | 94.21% | 94.21% | 1387 ms | ↓ 0.46x | 26 | 42m | 15d ago | 16m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1707 ms | → 1.00x | 0 | — | — | 15m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2172 ms | → 1.00x | 0 | — | — | 15m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 100.00% | 64.27% | 64.30% | 64.30% | 1748 ms | ↑ 1.20x | 13 | 15h 19m | 9d ago | 17m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.67% | 98.15% | 98.15% | 797 ms | ↑ 1.79x | 7 | 9m | 13d ago | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 29.36% | 5.72% | 5.72% | 2738 ms | → 1.03x | 1 | 17d 2h | 30d ago | 25m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 92.71% | 92.06% | 92.06% | 3765 ms | ↑ 1.30x | 3 | 13h 10m | 14d ago | 17m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 41.28% | 8.90% | 8.90% | 1157 ms | ↑ 1.43x | 1 | 14d 4h | 30d ago | 18m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 1122 ms | ↑ 1.71x | 1 | 0s | 29d ago | 31m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 682 ms | ↓ 0.79x | 1 | 0s | 19d ago | 30m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 996 ms | ↑ 1.19x | 1 | 0s | 25d ago | 29m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 93.42% | 93.50% | 93.50% | 2131 ms | → 0.98x | 1 | 13h 10m | 14d ago | 16m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 41.17% | 22.07% | 22.07% | 1538 ms | → 1.05x | 3 | 4d 17h | 14d ago | 17m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.57% | 97.35% | 97.35% | 1421 ms | → 1.02x | 11 | 32m | 14d ago | 17m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 29.15% | 5.77% | 5.77% | 1463 ms | → 1.03x | 2 | 8d 13h | 27d ago | 19m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 99.58% | 99.71% | 99.71% | 490 ms | ↓ 0.56x | 11 | 2m | 8d ago | 30m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.78% | 99.78% | 2174 ms | ↓ 0.91x | 3 | 0s | 14d ago | 19m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 98.98% | 98.52% | 98.52% | 4297 ms | ↑ 1.27x | 33 | 0s | 14d ago | 31m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 3414 ms | ↑ 1.36x | 1 | 0s | 21d ago | 29m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.58% | 98.39% | 98.39% | 2033 ms | ↑ 1.31x | 10 | 3m | 14d ago | 17m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 29.43% | 19.64% | 19.64% | 1671 ms | → 1.04x | 1 | 17d 2h | 30d ago | 27m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.91% | 97.95% | 97.95% | 1743 ms | → 1.01x | 5 | 1h 26m | 11d ago | 16m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.52% | 99.15% | 99.15% | 1563 ms | ↑ 1.61x | 14 | 43s | 14d ago | 29m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.01% | 99.61% | 99.61% | 2187 ms | ↑ 1.23x | 4 | 1h 8m | 14d ago | 25m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.37% | 99.25% | 99.25% | 2071 ms | ↑ 1.16x | 82 | 5m | 15d ago | 19m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 29.50% | 32.02% | 32.02% | 740 ms | ↓ 0.94x | 1 | 17d 2h | 30d ago | 30m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.33% | 97.78% | 97.78% | 3529 ms | ↑ 1.79x | 20 | 30s | 14d ago | 17m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.91% | 99.95% | 99.95% | 1441 ms | ↓ 0.89x | 2 | 0s | 18d ago | 29m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.70% | 90.61% | 90.61% | 733 ms | → 0.95x | 4 | 25m | 9d ago | 29m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 100.00% | 99.79% | 99.89% | 99.89% | 386 ms | ↓ 0.39x | 6 | 0s | 7d ago | 29m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.73% | 99.78% | 99.78% | 1448 ms | → 0.99x | 7 | 1m | 14d ago | 17m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.88% | 99.84% | 99.84% | 1926 ms | → 1.02x | 3 | 0s | 14d ago | 25m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.85% | 99.84% | 99.84% | 2185 ms | ↑ 1.12x | 3 | 3m | 13d ago | 18m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.91% | 98.98% | 98.98% | 1475 ms | ↑ 1.10x | 3 | 37m | 14d ago | 16m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.85% | 87.01% | 87.01% | 821 ms | ↓ 0.72x | 4 | 0s | 8d ago | 18m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.16% | 99.56% | 99.56% | 1107 ms | ↓ 0.85x | 23 | 2m | 17d ago | 29m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.85% | 53.01% | 53.01% | 2169 ms | → 0.99x | 4 | 0s | 14d ago | 18m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 41.25% | 8.12% | 8.12% | 1429 ms | ↑ 1.19x | 2 | 7d 2h | 13d ago | 19m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.91% | 99.96% | 99.96% | 1740 ms | ↑ 1.63x | 1 | 0s | 18d ago | 16m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 2909 ms | ↓ 0.88x | 0 | — | — | 16m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.58% | 87.43% | 87.43% | 2149 ms | ↑ 1.82x | 12 | 50s | 14d ago | 29m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 40.90% | 7.94% | 7.94% | 2222 ms | ↓ 0.87x | 12 | 1d 4h | 14d ago | 19m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.45% | 98.55% | 98.55% | 2007 ms | ↑ 1.10x | 17 | 0s | 14d ago | 17m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 29.51% | 76.92% | 76.92% | 2467 ms | → 0.97x | 1 | 17d 2h | 30d ago | 30m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.91% | 99.91% | 99.91% | 1614 ms | ↑ 1.28x | 2 | 0s | 14d ago | 29m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.91% | 99.91% | 99.91% | 1843 ms | ↑ 1.17x | 2 | 0s | 12d ago | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.70% | 99.63% | 99.63% | 987 ms | ↓ 0.94x | 9 | 0s | 12d ago | 28m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.07% | 99.53% | 99.53% | 1715 ms | → 1.04x | 5 | 50m | 19d ago | 29m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2346 ms | → 1.00x | 0 | — | — | 15m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.89% | 99.95% | 99.95% | 1889 ms | ↑ 1.36x | 1 | 0s | 12d ago | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.70% | 98.88% | 98.88% | 2377 ms | ↑ 1.07x | 9 | 0s | 14d ago | 29m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.86% | 96.90% | 96.90% | 1908 ms | ↑ 1.16x | 5 | 2h 40m | 15d ago | 16m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.64% | 37.69% | 37.69% | 1682 ms | ↓ 0.86x | 9 | 2m | 14d ago | 27m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.35% | 96.38% | 96.38% | 1527 ms | → 0.96x | 9 | 1h 47m | 14d ago | 16m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 93.20% | 93.24% | 93.24% | 1649 ms | ↑ 1.28x | 54 | 25m | 13d ago | 16m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.88% | 61.93% | 61.93% | 1199 ms | ↑ 1.75x | 3 | 0s | 14d ago | 18m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.43% | 98.38% | 98.38% | 1911 ms | ↓ 0.93x | 18 | 0s | 15d ago | 27m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.76% | 99.76% | 99.76% | 2299 ms | ↑ 1.08x | 6 | 2m | 14d ago | 29m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.85% | 99.66% | 99.66% | 2545 ms | ↑ 1.57x | 3 | 3m | 15d ago | 29m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.85% | 99.85% | 99.85% | 1002 ms | ↓ 0.53x | 4 | 0s | 14d ago | 19m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 41.04% | 27.21% | 27.21% | 832 ms | ↓ 0.73x | 6 | 2d 9h | 14d ago | 17m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 80.21% | 86.15% | 86.15% | 4268 ms | ↓ 0.87x | 385 | 7m | 8d ago | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.91% | 99.10% | 99.10% | 2202 ms | ↑ 1.50x | 2 | 0s | 14d ago | 18m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 59.86% | 59.86% | 1439 ms | ↑ 1.34x | 1 | 0s | 14d ago | 18m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.94% | 95.94% | 1193 ms | ↑ 1.55x | 2 | 0s | 14d ago | 18m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.88% | 99.64% | 99.64% | 1551 ms | ↓ 0.89x | 3 | 0s | 23d ago | 29m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.73% | 99.73% | 99.73% | 3022 ms | ↑ 1.20x | 8 | 0s | 18d ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 96.81% | 99.36% | 99.36% | 3419 ms | ↑ 1.76x | 79 | 3m | 22d ago | 27m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 49.45% | 49.45% | 1826 ms | ↑ 2.94x | 2 | 0s | 14d ago | 18m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 97.96% | 97.96% | 1719 ms | ↑ 1.36x | 2 | 0s | 14d ago | 17m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.67% | 97.48% | 97.48% | 2322 ms | ↑ 2.23x | 9 | 1m | 14d ago | 17m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.85% | 99.11% | 99.11% | 3342 ms | ↑ 2.08x | 32 | 3m | 11d ago | 25m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.85% | 99.71% | 99.71% | 2956 ms | ↑ 1.71x | 3 | 3m | 23d ago | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.85% | 99.86% | 99.86% | 2304 ms | ↑ 1.29x | 4 | 0s | 14d ago | 17m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 63.88% | 37.52% | 37.52% | 4597 ms | ↑ 1.59x | 5 | 1d 16h | 13d ago | 17m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.92% | 99.92% | 185 ms | ↓ 0.23x | 1 | 0s | 25d ago | 29m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.55% | 99.91% | 99.91% | 2208 ms | ↑ 1.36x | 11 | 2m | 14d ago | 29m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.85% | 99.94% | 99.94% | 2271 ms | ↑ 2.11x | 3 | 56s | 14d ago | 25m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.61% | 99.46% | 99.46% | 3340 ms | ↑ 1.65x | 12 | 0s | 13d ago | 29m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.08% | 73.84% | 73.84% | 2248 ms | → 1.04x | 74 | 25m | 13d ago | 18m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 82.14% | 82.14% | 1914 ms | ↑ 1.54x | 1 | 0s | 14d ago | 18m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.27% | 95.40% | 95.40% | 1308 ms | ↑ 1.34x | 51 | 59s | 14d ago | 18m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.91% | 99.96% | 99.96% | 1334 ms | ↓ 0.86x | 2 | 0s | 14d ago | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.51% | 97.84% | 97.84% | 3018 ms | ↑ 1.88x | 14 | 43s | 14d ago | 17m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.73% | 97.90% | 97.90% | 1490 ms | ↓ 0.87x | 8 | 0s | 14d ago | 28m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 29.12% | 6.90% | 6.90% | 1478 ms | ↑ 1.12x | 1 | 17d 2h | 30d ago | 18m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2142 ms | → 1.00x | 0 | — | — | 15m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.85% | 99.91% | 99.91% | 1359 ms | → 0.98x | 4 | 0s | 14d ago | 17m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 29.12% | 6.01% | 6.01% | 1518 ms | ↑ 1.17x | 1 | 17d 2h | 30d ago | 19m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 52.80% | 52.80% | 2421 ms | ↑ 2.08x | 2 | 0s | 14d ago | 18m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.92% | 60.21% | 60.21% | 1038 ms | → 0.96x | 31 | 1m | 22d ago | 30m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.67% | 99.73% | 99.73% | 424 ms | ↓ 0.67x | 4 | 3m | 17d ago | 16m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.88% | 98.95% | 98.95% | 1703 ms | ↑ 1.43x | 3 | 0s | 14d ago | 28m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 29.51% | 5.76% | 5.76% | 986 ms | ↓ 0.87x | 1 | 17d 2h | 30d ago | 28m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2927 ms | ↑ 1.29x | 0 | — | — | 15m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 41.27% | 8.90% | 8.90% | 2575 ms | ↑ 1.07x | 2 | 7d 2h | 13d ago | 19m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 88.83% | 92.37% | 92.37% | 4599 ms | ↓ 0.82x | 150 | 15m | 13d ago | 29m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.14% | 99.21% | 99.21% | 2665 ms | → 0.97x | 10 | 1m | 7d ago | 29m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.98% | 99.98% | 3201 ms | ↑ 1.52x | 2 | 0s | 14d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 100.00% | 98.36% | 98.45% | 98.45% | 1744 ms | ↓ 0.93x | 2 | 2h 29m | 9d ago | 16m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.51% | 98.81% | 98.81% | 798 ms | ↓ 0.82x | 14 | 43s | 8d ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.72% | 99.82% | 99.82% | 1316 ms | ↓ 0.77x | 2 | 0s | 13d ago | 16m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 23.50% | 13.84% | 13.84% | 2428 ms | ↑ 1.10x | 2 | 9d 22h | 10d ago | 29m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.43% | 99.51% | 99.51% | 2044 ms | ↑ 1.84x | 11 | 6m | 17d ago | 30m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.37% | 99.37% | 1755 ms | ↑ 1.98x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.94% | 99.99% | 99.99% | 1024 ms | ↑ 1.74x | 1 | 0s | 18d ago | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.77% | 96.83% | 96.83% | 2644 ms | ↑ 1.09x | 1 | 9h 60m | 20d ago | 16m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.52% | 99.58% | 99.58% | 2689 ms | ↑ 1.19x | 2 | 25m | 14d ago | 16m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.82% | 83.57% | 83.57% | 1706 ms | ↑ 1.73x | 30 | 3m | 14d ago | 17m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.56% | 99.62% | 99.62% | 2787 ms | ↑ 1.73x | 7 | 0s | 15d ago | 16m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 98.98% | 99.77% | 99.77% | 1625 ms | ↑ 1.08x | 33 | 0s | 22d ago | 29m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.73% | 99.42% | 99.42% | 1133 ms | ↓ 0.90x | 59 | 3m | 18d ago | 30m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 100.00% | 100.00% | 100.00% | 1554 ms | → 1.00x | 0 | — | — | 15m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.82% | 99.70% | 99.70% | 1190 ms | ↓ 0.90x | 4 | 2m | 19d ago | 30m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.37% | 99.80% | 99.80% | 778 ms | ↓ 0.77x | 20 | 0s | 16d ago | 28m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 98.49% | 82.03% | 82.03% | 2041 ms | ↓ 0.58x | 46 | 38s | 14d ago | 25m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.61% | 98.47% | 98.47% | 2088 ms | ↑ 1.05x | 12 | 0s | 14d ago | 17m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.55% | 90.94% | 90.94% | 4146 ms | ↑ 2.44x | 13 | 46s | 14d ago | 31m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2804 ms | ↓ 0.86x | 0 | — | — | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.36% | 98.52% | 98.52% | 637 ms | ↓ 0.91x | 16 | 2m | 15d ago | 18m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.82% | 99.78% | 99.78% | 3187 ms | ↑ 1.90x | 5 | 0s | 14d ago | 17m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.79% | 98.23% | 98.23% | 1938 ms | ↑ 2.49x | 6 | 0s | 10d ago | 17m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.76% | 99.74% | 99.74% | 1654 ms | ↑ 1.27x | 6 | 2m | 13d ago | 18m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2005 ms | → 0.95x | 0 | — | — | 15m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.88% | 97.60% | 97.60% | 1808 ms | ↑ 1.85x | 3 | 0s | 14d ago | 17m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.81% | 92.99% | 92.99% | 4163 ms | ↑ 1.66x | 69 | 10m | 14d ago | 17m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.88% | 99.91% | 99.91% | 1755 ms | ↑ 1.86x | 3 | 0s | 16d ago | 28m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.90% | 99.95% | 99.95% | 945 ms | ↓ 0.77x | 1 | 0s | 16d ago | 16m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.64% | 99.85% | 99.85% | 1905 ms | ↑ 1.93x | 5 | 12m | 11d ago | 28m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 3182 ms | ↑ 1.40x | 0 | — | — | 15m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 94.08% | 94.12% | 94.12% | 2148 ms | ↑ 1.10x | 1 | 1d 1h | 25d ago | 16m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.67% | 99.83% | 99.83% | 2368 ms | ↑ 1.52x | 5 | 12m | 9d ago | 28m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 41.23% | 8.01% | 8.01% | 2277 ms | → 1.01x | 3 | 4d 17h | 9d ago | 19m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 93.95% | 94.00% | 94.00% | 1318 ms | ↓ 0.79x | 4 | 5h 15m | 16d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.64% | 99.73% | 99.73% | 2468 ms | ↑ 1.63x | 8 | 4m | 14d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 2401 ms | ↑ 1.26x | 1 | 0s | 16d ago | 28m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.61% | 99.71% | 99.71% | 2202 ms | ↑ 1.16x | 5 | 14m | 16d ago | 28m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 97.07% | 97.11% | 97.11% | 1605 ms | ↑ 1.37x | 2 | 6h 15m | 14d ago | 16m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.55% | 99.79% | 99.79% | 2353 ms | ↑ 1.41x | 13 | 13s | 10d ago | 25m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.91% | 99.81% | 99.81% | 1228 ms | ↑ 1.49x | 2 | 0s | 17d ago | 19m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.79% | 98.99% | 98.99% | 1683 ms | ↑ 1.54x | 6 | 0s | 13d ago | 29m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1185 ms | ↑ 1.48x | 1 | 0s | 22d ago | 28m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.82% | 98.43% | 98.50% | 98.50% | 3818 ms | → 1.02x | 21 | 0s | 5d ago | 30m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.82% | 61.13% | 11.96% | 11.96% | 2341 ms | ↑ 1.18x | 3 | 3d | 2d ago | 31m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.82% | 94.04% | 91.42% | 91.42% | 1812 ms | ↓ 0.76x | 115 | 7m | 2d ago | 29m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.94% | 99.71% | 99.71% | 2943 ms | ↑ 1.58x | 1 | 0s | 7d ago | 29m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.55% | 98.92% | 98.92% | 2917 ms | ↑ 1.14x | 13 | 47s | 7d ago | 29m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.82% | 99.40% | 99.71% | 99.71% | 3234 ms | ↑ 2.01x | 4 | 1h 15m | 7d ago | 29m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.79% | 99.73% | 99.73% | 2094 ms | → 0.97x | 6 | 0s | 7d ago | 29m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.82% | 29.45% | 5.77% | 5.77% | 1430 ms | → 0.96x | 3 | 5d 17h | 4d ago | 29m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.67% | 99.71% | 99.71% | 3028 ms | ↑ 1.53x | 10 | 0s | 7d ago | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.82% | 29.43% | 5.75% | 5.75% | 2606 ms | ↑ 1.08x | 3 | 5d 17h | 7d ago | 29m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.82% | 99.82% | 99.93% | 99.93% | 1026 ms | ↑ 2.45x | 5 | 0s | 10h ago | 29m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.82% | 92.03% | 18.35% | 18.35% | 3048 ms | ↑ 1.19x | 6 | 7h 20m | 5d ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.00% | 96.16% | 96.16% | 3230 ms | ↑ 1.45x | 36 | 37m | 4d ago | 26m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.82% | 99.91% | 53.12% | 53.12% | 4051 ms | ↑ 1.89x | 2 | 0s | 9h ago | 27m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.76% | 99.86% | 99.86% | 2870 ms | ↑ 1.29x | 7 | 0s | 6d ago | 26m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.82% | 29.39% | 17.90% | 17.90% | 804 ms | ↓ 0.88x | 2 | 8d 13h | 3d ago | 28m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.82% | 99.85% | 65.03% | 65.03% | 1947 ms | ↓ 0.88x | 3 | 7m | 6d ago | 18m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.82% | 29.10% | 34.18% | 34.18% | 2409 ms | ↓ 0.93x | 2 | 8d 13h | 6d ago | 17m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.82% | 97.28% | 97.32% | 97.32% | 2105 ms | ↑ 1.44x | 61 | 3m | 6d ago | 16m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.82% | 97.42% | 97.45% | 97.45% | 2362 ms | ↑ 1.13x | 6 | 2h 6m | 3d ago | 16m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.82% | 99.85% | 97.50% | 97.50% | 2607 ms | ↑ 1.87x | 4 | 0s | 6d ago | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.82% | 99.09% | 97.13% | 97.13% | 3136 ms | ↑ 1.87x | 25 | 2m | 6d ago | 16m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.82% | 99.79% | 76.32% | 76.32% | 2090 ms | → 1.01x | 5 | 2m | 4d ago | 18m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.82% | 99.91% | 95.18% | 95.18% | 1305 ms | ↑ 1.12x | 2 | 0s | 11h ago | 17m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.82% | 98.78% | 96.56% | 96.56% | 2816 ms | ↑ 2.10x | 33 | 3m | 6d ago | 16m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.82% | 99.42% | 78.03% | 78.03% | 2544 ms | ↑ 1.93x | 17 | 35s | 7d ago | 18m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.82% | 99.76% | 99.85% | 99.85% | 668 ms | ↑ 1.15x | 6 | 2m | 6h ago | 17m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.82% | 59.87% | 52.22% | 52.22% | 1877 ms | ↓ 0.68x | 10 | 23h 42m | 5d ago | 18m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.82% | 99.85% | 99.72% | 99.72% | 3310 ms | ↑ 1.93x | 4 | 0s | 3d ago | 25m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.82% | 99.82% | 51.63% | 51.63% | 2906 ms | ↑ 1.20x | 5 | 0s | 5d ago | 18m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.82% | 99.03% | 85.87% | 85.87% | 1722 ms | ↑ 1.48x | 31 | 0s | 3d ago | 18m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.82% | 98.89% | 98.95% | 98.95% | 2061 ms | ↑ 1.44x | 7 | 41m | 6d ago | 25m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.82% | 99.73% | 99.78% | 99.78% | 1358 ms | → 1.04x | 5 | 0s | 4d ago | 16m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 99.82% | 29.10% | 16.64% | 16.64% | 202 ms | → 1.03x | 2 | 8d 13h | 2d ago | 17m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.82% | 99.64% | 74.88% | 74.88% | 2587 ms | ↑ 2.11x | 11 | 0s | 7d ago | 18m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.82% | 40.06% | 7.80% | 7.80% | 2002 ms | ↓ 0.74x | 37 | 9h 14m | 6d ago | 26m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 99.82% | 55.81% | 21.98% | 21.98% | 2821 ms | ↑ 1.32x | 11 | 22h 2m | 1d ago | 18m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 93.12% | 93.18% | 93.18% | 1828 ms | ↓ 0.94x | 5 | 3h 19m | 7d ago | 16m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 95.94% | 95.99% | 95.99% | 2258 ms | ↑ 1.62x | 14 | 59m | 7d ago | 16m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.82% | 99.88% | 84.70% | 84.70% | 2896 ms | ↑ 1.85x | 3 | 0s | 7d ago | 18m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.82% | 92.77% | 96.01% | 96.01% | 2318 ms | ↑ 2.28x | 5 | 15h 59m | 5d ago | 19m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.82% | 99.85% | 99.85% | 99.85% | 2432 ms | ↑ 1.20x | 4 | 0s | 6d ago | 16m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.82% | 41.15% | 14.85% | 14.85% | 1683 ms | → 1.04x | 4 | 3d 13h | 7d ago | 18m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.65% | 99.37% | 99.87% | 99.87% | 4259 ms | ↑ 2.60x | 20 | 0s | 5d ago | 30m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 99.65% | 34.71% | 77.52% | 77.52% | 702 ms | ↑ 1.37x | 6 | 2d 20h | 22h ago | 30m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.65% | 99.71% | 99.78% | 99.78% | 473 ms | ↓ 0.85x | 3 | 0s | 10h ago | 29m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.65% | 79.59% | 83.05% | 83.05% | 1303 ms | ↓ 0.55x | 420 | 6m | 10h ago | 29m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.65% | 99.25% | 99.27% | 99.27% | 2335 ms | → 0.96x | 24 | 0s | 7d ago | 30m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 99.65% | 73.04% | 83.07% | 83.07% | 1497 ms | ↓ 0.24x | 430 | 11m | 5d ago | 28m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.65% | 99.49% | 99.88% | 99.88% | 1475 ms | ↑ 1.27x | 3 | 1h 27m | 5d ago | 29m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.64% | 78.93% | 64.07% | 64.07% | 3996 ms | ↓ 0.73x | 460 | 5m | 5m ago | 26m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.64% | 99.49% | 98.58% | 98.58% | 2357 ms | ↓ 0.91x | 15 | 40s | 6d ago | 28m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.64% | 93.92% | 94.00% | 94.00% | 2447 ms | ↑ 1.13x | 2 | 6h 20m | 3d ago | 16m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.64% | 99.43% | 97.56% | 97.56% | 3074 ms | ↑ 1.20x | 18 | 0s | 2d ago | 25m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.64% | 92.79% | 92.86% | 92.86% | 3348 ms | ↑ 1.28x | 5 | 3h 2m | 6h ago | 16m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.82% | 99.87% | 99.87% | 1304 ms | ↓ 0.94x | 2 | 9m | 5d ago | 16m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.64% | 97.42% | 97.40% | 97.40% | 2284 ms | ↓ 0.76x | 68 | 3m | 5d ago | 17m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.64% | 92.64% | 92.73% | 92.73% | 1536 ms | ↓ 0.94x | 4 | 3h 15m | 3d ago | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.64% | 93.56% | 93.64% | 93.64% | 2235 ms | ↓ 0.88x | 3 | 4h 17m | 3d ago | 16m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 99.55% | 98.81% | 98.81% | 1721 ms | ↑ 1.43x | 14 | 0s | 5d ago | 19m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.64% | 97.68% | 99.53% | 99.53% | 3413 ms | ↑ 2.39x | 64 | 2m | 7h ago | 25m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 99.64% | 90.92% | 89.57% | 89.57% | 3310 ms | ↑ 1.48x | 111 | 18m | 5d ago | 16m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.64% | 99.06% | 98.99% | 98.99% | 3267 ms | ↑ 1.64x | 29 | 20s | 1h ago | 18m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.64% | 99.82% | 87.17% | 87.17% | 2700 ms | ↑ 2.02x | 5 | 0s | 5d ago | 17m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.64% | 99.76% | 60.99% | 60.99% | 1018 ms | ↑ 1.12x | 6 | 2m | 4h ago | 17m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.64% | 29.01% | 5.63% | 5.63% | 1464 ms | ↑ 1.09x | 5 | 3d 10h | 2h ago | 19m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 99.47% | 98.83% | 99.66% | 99.66% | 3929 ms | ↑ 1.18x | 37 | 33s | 5d ago | 30m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.47% | 97.28% | 99.44% | 99.44% | 3979 ms | ↑ 1.68x | 77 | 2m | 5d ago | 30m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.47% | 99.64% | 99.64% | 99.64% | 2627 ms | ↓ 0.88x | 2 | 11m | 2d ago | 16m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.47% | 99.51% | 99.55% | 99.55% | 1952 ms | ↑ 1.61x | 10 | 6m | 9h ago | 16m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.47% | 99.09% | 98.30% | 98.30% | 3273 ms | ↑ 1.95x | 27 | 45s | 6d ago | 17m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.47% | 99.79% | 98.77% | 98.77% | 1716 ms | ↑ 1.87x | 5 | 2m | 13h ago | 17m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.47% | 99.03% | 99.02% | 99.02% | 173 ms | ↓ 0.22x | 27 | 2m | 5d ago | 17m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.47% | 98.30% | 98.29% | 98.29% | 2255 ms | ↑ 1.72x | 43 | 3m | 6d ago | 16m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.47% | 95.69% | 96.44% | 96.44% | 2147 ms | → 0.98x | 82 | 7m | 2d ago | 17m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 99.32% | 99.32% | 99.32% | 99.32% | 4596 ms | → 1.00x | 2 | 0s | 15h ago | 15m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.29% | 53.26% | 55.81% | 55.81% | 3443 ms | → 0.97x | 441 | 28m | 8h ago | 29m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.29% | 98.25% | 97.56% | 97.56% | 1237 ms | ↑ 2.19x | 14 | 33m | 2d ago | 19m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.29% | 51.59% | 29.25% | 29.25% | 2622 ms | ↑ 1.65x | 8 | 1d 9h | 4h ago | 17m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 99.29% | 41.01% | 28.79% | 28.79% | 2666 ms | ↑ 1.38x | 7 | 2d 1h | 5d ago | 17m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.29% | 99.21% | 89.62% | 89.62% | 3183 ms | → 1.04x | 25 | 0s | 3d ago | 18m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 99.29% | 40.86% | 36.33% | 36.33% | 1967 ms | ↓ 0.88x | 13 | 1d 2h | 6h ago | 16m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 99.29% | 99.52% | 99.52% | 99.52% | 2729 ms | ↓ 0.87x | 1 | 59m | 2d ago | 16m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.11% | 99.67% | 96.60% | 96.60% | 1999 ms | ↑ 1.88x | 6 | 13m | 3d ago | 17m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.11% | 52.60% | 52.64% | 52.64% | 1742 ms | ↓ 0.86x | 36 | 6h 56m | 18h ago | 16m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.11% | 82.73% | 82.78% | 82.78% | 1643 ms | ↑ 1.06x | 6 | 10h 26m | 4d ago | 16m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 99.11% | 45.39% | 45.43% | 45.43% | 4246 ms | → 0.95x | 56 | 4h 42m | 19h ago | 16m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (48)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.93% | 99.52% | 73.78% | 73.78% | 1153 ms | ↑ 1.67x | 8 | 15m | 2d ago | 18m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.93% | 18.38% | 14.98% | 14.98% | 2425 ms | → 1.03x | 8 | 2d 20h | 12h ago | 17m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.76% | 99.70% | 99.92% | 99.92% | 2731 ms | ↑ 2.12x | 9 | 0s | 10h ago | 29m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 98.76% | 97.81% | 97.61% | 97.61% | 4120 ms | ↑ 1.53x | 70 | 17s | 9m ago | 29m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.76% | 98.86% | 96.18% | 96.18% | 3126 ms | ↑ 1.39x | 27 | 6m | 2d ago | 29m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.76% | 28.77% | 5.61% | 5.61% | 1558 ms | → 0.96x | 21 | 19h 33m | 1d ago | 27m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.58% | 98.32% | 90.87% | 90.87% | 1854 ms | ↓ 0.78x | 46 | 3m | 2d ago | 28m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 98.40% | 88.23% | 48.20% | 48.20% | 3272 ms | ↑ 1.46x | 175 | 13m | 5d ago | 26m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.23% | 98.26% | 98.74% | 98.74% | 3250 ms | ↓ 0.88x | 41 | 5m | 15h ago | 29m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.22% | 95.13% | 96.21% | 96.21% | 3417 ms | ↑ 1.41x | 74 | 13m | 36m ago | 18m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.22% | 98.82% | 88.50% | 88.50% | 1387 ms | ↓ 0.65x | 31 | 2m | 35m ago | 18m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.69% | 29.60% | 5.77% | 5.77% | 4101 ms | ↑ 1.14x | 13 | 1d 7h | 7h ago | 25m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 97.53% | 94.05% | 98.62% | 98.62% | 3369 ms | ↑ 1.15x | 143 | 5m | 5d ago | 30m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 97.33% | 91.71% | 91.80% | 91.80% | 2636 ms | ↓ 0.91x | 4 | 4h 8m | 2d ago | 16m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 97.15% | 97.94% | 97.94% | 97.94% | 1826 ms | ↓ 0.83x | 1 | 3h 45m | 7d ago | 15m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.98% | 98.92% | 99.12% | 99.12% | 4130 ms | ↑ 1.23x | 30 | 3m | 4h ago | 25m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 96.98% | 91.46% | 91.61% | 91.61% | 2063 ms | ↑ 2.14x | 47 | 1h 42m | 3d ago | 17m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 96.47% | 98.45% | 98.50% | 98.50% | 4447 ms | ↑ 1.75x | 26 | 4m | 10h ago | 31m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 96.44% | 85.78% | 75.93% | 75.93% | 2432 ms | ↓ 0.88x | 248 | 11m | 12h ago | 25m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 96.09% | 79.19% | 56.95% | 56.95% | 4594 ms | ↓ 0.95x | 438 | 6m | 36m ago | 18m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 95.91% | 80.33% | 84.17% | 84.17% | 4448 ms | ↓ 0.91x | 426 | 5m | 10h ago | 19m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 95.56% | 80.68% | 70.63% | 70.63% | 4407 ms | ↓ 0.89x | 448 | 4m | 2h ago | 26m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 95.55% | 80.36% | 80.07% | 80.07% | 4689 ms | ↑ 1.08x | 425 | 5m | 2h ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.37% | 97.09% | 94.98% | 94.98% | 3009 ms | ↑ 1.24x | 54 | 8m | 6d ago | 17m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 95.03% | 81.47% | 83.68% | 83.68% | 4077 ms | ↓ 0.82x | 437 | 5m | 47m ago | 28m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 95.02% | 89.88% | 89.97% | 89.97% | 2792 ms | → 0.98x | 34 | 25m | 1h ago | 16m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.84% | 91.87% | 65.92% | 65.92% | 2438 ms | ↑ 1.17x | 36 | 1h 14m | 1d ago | 18m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 94.35% | 95.55% | 98.77% | 98.77% | 4020 ms | ↑ 1.33x | 93 | 8m | 2d ago | 30m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 93.59% | 95.65% | 95.65% | 95.65% | 1422 ms | ↑ 1.07x | 1 | 11h 52m | 2d ago | 15m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 93.24% | 95.28% | 95.28% | 95.28% | 3876 ms | ↑ 1.19x | 3 | 4h 1m | 2d ago | 15m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 93.06% | 40.05% | 7.78% | 7.78% | 2718 ms | ↑ 1.22x | 5 | 2d 22h | 13h ago | 19m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 92.88% | 94.08% | 92.65% | 92.65% | 2487 ms | ↑ 1.26x | 93 | 14m | 4h ago | 17m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 92.38% | 26.75% | 5.23% | 5.23% | 2118 ms | → 0.97x | 65 | 6h 27m | 1h ago | 29m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.36% | 71.45% | 47.45% | 47.45% | 1671 ms | ↑ 1.50x | 16 | 9h 49m | 4d ago | 26m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.28% | 27.24% | 27.24% | 27.24% | 3684 ms | → 0.96x | 86 | 4h 32m | 56m ago | 16m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 90.57% | 76.34% | 75.48% | 75.48% | 4594 ms | ↓ 0.84x | 518 | 7m | 2h ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 89.32% | 27.05% | 5.26% | 5.26% | 3665 ms | ↓ 0.95x | 68 | 6h 5m | 5m ago | 26m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 88.52% | 69.82% | 69.83% | 69.83% | 3389 ms | ↓ 0.79x | 284 | 13m | 6h ago | 31m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 88.34% | 92.53% | 95.69% | 95.69% | 3688 ms | ↓ 0.87x | 139 | 16m | 10h ago | 30m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.08% | 29.00% | 6.56% | 6.56% | 4542 ms | ↓ 0.85x | 157 | 2h 28m | 37m ago | 18m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 85.23% | 95.85% | 59.72% | 59.72% | 1210 ms | ↑ 1.62x | 37 | 47m | 3h ago | 18m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 84.81% | 77.98% | 83.10% | 83.10% | 4456 ms | ↓ 0.91x | 421 | 9m | 19h ago | 31m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 84.70% | 36.44% | 24.77% | 24.77% | 2481 ms | → 1.01x | 18 | 21h 31m | 2d ago | 18m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 73.31% | 20.93% | 8.16% | 8.16% | 4456 ms | ↓ 0.84x | 159 | 2h 50m | 2h ago | 18m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 71.71% | 72.36% | 72.39% | 72.39% | 2562 ms | ↑ 1.66x | 56 | 2h 30m | 3d ago | 16m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 63.88% | 19.32% | 7.11% | 7.11% | 3562 ms | ↓ 0.73x | 258 | 1h 47m | 35m ago | 18m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 62.94% | 25.43% | 85.32% | 85.32% | 2039 ms | ↑ 1.13x | 2 | 10d 19h | 27d ago | 29m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 60.50% | 80.67% | 89.63% | 89.63% | 1130 ms | ↓ 0.26x | 17 | 11h 31m | 17h ago | 17m ago |

</details>

<details open>
<summary><strong>🔴 Down (166)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.09% | 76.75% | 76.78% | 76.78% | 4510 ms | ↓ 0.91x | 379 | 10m | 34m ago | 16m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 93.24% | 79.88% | 76.68% | 76.68% | 4720 ms | ↓ 0.90x | 448 | 5m | 17m ago | 17m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 74.60% | 53.13% | 61.83% | 61.83% | 4788 ms | ↓ 0.89x | 627 | 17m | 26m ago | 26m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 67.85% | 19.33% | 4.60% | 4.60% | 3613 ms | ↓ 0.80x | 6 | 3d 15h | 2d ago | 26m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 52.49% | 85.78% | 85.83% | 85.83% | 1519 ms | ↓ 0.91x | 4 | 23h | 4d ago | 16m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 42.70% | 63.79% | 63.85% | 63.85% | 1354 ms | ↓ 0.78x | 10 | 13h 19m | 15h ago | 16m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 39.15% | 32.18% | 32.21% | 32.21% | 1009 ms | ↓ 0.85x | 3 | 5d 24h | 5d ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 36.65% | 88.97% | 92.01% | 92.01% | 2808 ms | ↑ 2.43x | 7 | 16h 54m | 5d ago | 17m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 35.23% | 88.90% | 86.65% | 86.65% | 525 ms | ↓ 0.78x | 3 | 1d 12h | 4d ago | 17m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 28.29% | 17.17% | 27.47% | 27.47% | 456 ms | ↓ 0.66x | 4 | 5d 16h | 3d ago | 25m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 27.03% | 46.52% | 68.47% | 68.47% | 3467 ms | ↓ 0.53x | 468 | 45m | 1d ago | 31m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 70.32% | 93.46% | 93.46% | — | — | 6 | 2d 4h | 13d ago | 29m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 77.36% | 77.36% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 69.40% | 83.17% | 83.17% | — | — | 29 | 10h 47m | 13d ago | 19m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.46% | 6.46% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 10.10% | 14.14% | 14.14% | — | — | 11 | 2d 12h | 13d ago | 31m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.83% | 3.83% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 67.73% | 93.71% | 93.71% | — | — | 80 | 3h 54m | 13d ago | 26m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 41.13% | 41.13% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 29.46% | 29.46% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 54.02% | 84.13% | 84.13% | — | — | 330 | 1h 3m | 13d ago | 30m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 60.65% | 71.46% | 71.46% | — | — | 266 | 1h 13m | 13d ago | 17m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 70.79% | 35.63% | 35.63% | — | — | 3 | 4d 7h | 13d ago | 18m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 70.34% | 94.20% | 94.20% | — | — | 5 | 2d 14h | 13d ago | 30m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 39.36% | 70.93% | 70.93% | — | — | 130 | 3h 41m | 19d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 30m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 69.55% | 87.01% | 87.01% | — | — | 32 | 9h 40m | 13d ago | 29m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.40% | 4.40% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 19.93% | 19.93% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 69.77% | 61.62% | 61.62% | — | — | 27 | 11h 29m | 13d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 43.89% | 43.89% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.73% | 4.20% | 4.20% | — | — | 3 | 9d 22h | 13d ago | 18m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 70.85% | 94.34% | 94.34% | — | — | 1 | 12d 21h | 13d ago | 19m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.66% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 13d ago | 25m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 62.16% | 58.61% | 58.61% | — | — | 33 | 10h 40m | 13d ago | 27m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 1.21% | 33.64% | 33.64% | — | — | 2 | 14d 20h | 30d ago | 18m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 11.88% | 2.32% | 2.32% | — | — | 7 | 3d 21h | 13d ago | 26m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 39.46% | 50.05% | 50.05% | — | — | 5 | 3d 17h | 9d ago | 17m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 61.66% | 61.66% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 50.80% | 29.51% | 29.51% | — | — | 313 | 1h 11m | 13d ago | 18m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 69.19% | 34.08% | 34.08% | — | — | 50 | 6h 12m | 13d ago | 18m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.66% | 0.13% | 0.13% | — | — | 2 | 14d 22h | 13d ago | 26m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 64.64% | 64.64% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 29m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.52% | 7.52% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 74.36% | 74.36% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 70.03% | 94.14% | 94.14% | — | — | 16 | 19h 21m | 13d ago | 30m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 30m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 4.89% | 11.35% | 11.35% | — | — | 3 | 9d 15h | 29d ago | 16m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 52.23% | 89.80% | 89.80% | — | — | 165 | 2h 20m | 13d ago | 19m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 50.67% | 89.37% | 89.37% | — | — | 209 | 1h 51m | 13d ago | 30m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 16h | 29d ago | 16m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 13.30% | 40.85% | 40.85% | — | — | 1 | 26d 22h | 27d ago | 17m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 13.95% | 13.95% | 13.95% | — | — | 5 | 5d 6h | 26d ago | 16m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 59.78% | 59.78% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 30m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 39.77% | 86.63% | 86.63% | — | — | 251 | 1h 48m | 13d ago | 31m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 52.79% | 52.79% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 31m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 47.99% | 47.99% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 70.36% | 94.15% | 94.15% | — | — | 4 | 3d 5h | 13d ago | 31m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 66.46% | 66.46% | — | — | 3 | 9d 24h | 25d ago | 25m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.63% | 44.17% | 44.17% | — | — | 2 | 14d 22h | 13d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 21h | 16d ago | 29m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 66.14% | 78.26% | 78.26% | — | — | 8 | 1d 18h | 14d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 19h | 16d ago | 19m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 43.79% | 37.72% | 37.72% | — | — | 484 | 47m | 13d ago | 18m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 12.50% | 2.97% | 2.97% | — | — | 4 | 6d 18h | 13d ago | 18m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 47.16% | 47.16% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 69.47% | 94.05% | 94.05% | — | — | 22 | 14h 12m | 13d ago | 25m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 70.70% | 38.22% | 38.22% | — | — | 3 | 4d 7h | 13d ago | 18m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 70.35% | 94.02% | 94.02% | — | — | 5 | 2d 14h | 13d ago | 30m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 52.06% | 52.09% | 52.09% | — | — | 1 | 12d 21h | 13d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 45.45% | 55.34% | 55.34% | — | — | 3 | 6d 12h | 20d ago | 18m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 65.75% | 91.37% | 91.37% | — | — | 132 | 2h 23m | 13d ago | 30m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.45% | 0.12% | 0.12% | — | — | 15 | 1d 24h | 14d ago | 25m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.07% | 0.07% | 0.07% | — | — | 2 | 7d 22h | 8d ago | 19m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 28d 17h | 29d ago | 16m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 19h | 16d ago | 19m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 47.05% | 89.59% | 89.59% | — | — | 55 | 7h 57m | 18d ago | 25m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 70.84% | 77.92% | 77.92% | — | — | 2 | 6d 11h | 13d ago | 17m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.00% | 4.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 49.04% | 49.04% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 56.06% | 87.83% | 87.83% | — | — | 158 | 2h 18m | 13d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 40.02% | 66.98% | 66.98% | — | — | 523 | 46m | 13d ago | 26m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 28m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.14% | 32.14% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 24.92% | 24.98% | 24.98% | — | — | 24 | 14h 3m | 13d ago | 16m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 14.75% | 17.25% | 17.25% | — | — | 366 | 1h 34m | 13d ago | 17m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.37% | 27.37% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 29m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 69.67% | 81.05% | 81.05% | — | — | 36 | 8h 36m | 13d ago | 17m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 33.85% | 33.94% | 33.94% | — | — | 3 | 2d 22h | 8d ago | 16m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 19.83% | 19.83% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 56.21% | 56.21% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 62.63% | 62.63% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 66.27% | 66.31% | 66.31% | — | — | 7 | 1d 20h | 13d ago | 16m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 78.19% | 80.88% | 80.88% | — | — | 10 | 21h 38m | 9d ago | 16m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 32.42% | 6.30% | 6.30% | — | — | 3 | 7d 6h | 13d ago | 19m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 22h | 18d ago | 16m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 70.43% | 94.22% | 94.22% | — | — | 2 | 6d 11h | 13d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 30m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 68.57% | 93.00% | 93.00% | — | — | 51 | 6h 7m | 13d ago | 28m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 41.77% | 72.54% | 72.54% | — | — | 479 | 49m | 13d ago | 31m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 30.83% | 85.18% | 85.18% | — | — | 14 | 1d 15h | 23d ago | 29m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 68.80% | 92.84% | 92.84% | — | — | 54 | 5h 44m | 13d ago | 29m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.43% | 22.43% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 11.64% | 11.63% | 11.63% | — | — | 3 | 4d 13h | 11d ago | 29m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 70.73% | 39.09% | 39.09% | — | — | 5 | 2d 14h | 13d ago | 19m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 8.81% | 77.53% | 77.53% | — | — | 2 | 13d 23h | 20d ago | 29m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 24.86% | 31.85% | 31.85% | — | — | 104 | 5h 18m | 17d ago | 17m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 9.72% | 9.72% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 58.41% | 74.61% | 74.61% | — | — | 295 | 1h 7m | 13d ago | 31m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 76.80% | 76.80% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 66.19% | 66.22% | 66.22% | — | — | 3 | 4d 12h | 13d ago | 16m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 19.02% | 19.02% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 15d 20h | 16d ago | 29m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.40% | 20.40% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 3.00% | 3.09% | 3.09% | — | — | 2 | 6d 17h | 13d ago | 16m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 15.80% | 15.88% | 15.88% | — | — | 2 | 6d 17h | 13d ago | 16m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 20.38% | 20.47% | 20.47% | — | — | 2 | 5d 6h | 10d ago | 15m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 56.71% | 56.71% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 70.41% | 94.19% | 94.19% | — | — | 5 | 2d 14h | 13d ago | 28m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 66.56% | 73.59% | 73.59% | — | — | 8 | 1d 18h | 14d ago | 16m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 75.53% | 94.37% | 94.37% | — | — | 42 | 5h 40m | 10d ago | 25m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 47.03% | 47.03% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 65.96% | 91.75% | 91.75% | — | — | 151 | 2h 3m | 13d ago | 24m ago |

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
