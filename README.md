# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**534 providers** — 292 🟢 operational · 68 🟡 degraded · 174 🔴 down · 0 ⚫ unknown

_Updated 2026-04-29 05:57 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (292)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 92.84% | 92.94% | 92.94% | 1546 ms | → 0.97x | 1 | 12h 20m | 12d ago | 3m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 91.34% | 91.34% | 1761 ms | → 1.00x | 5 | 0s | 11d ago | 5m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 32.63% | 6.84% | 6.84% | 2496 ms | ↑ 1.26x | 3 | 5d 17h | 11d ago | 6m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 96.98% | 96.98% | 3931 ms | ↑ 1.80x | 2 | 0s | 11d ago | 15m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 100.00% | 100.00% | 100.00% | 100.00% | 4557 ms | → 1.00x | 0 | — | — | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.72% | 98.24% | 98.24% | 1430 ms | ↓ 0.90x | 9 | 0s | 11d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.91% | 98.68% | 98.68% | 894 ms | ↑ 2.03x | 2 | 0s | 11d ago | 5m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 89.18% | 89.22% | 89.22% | 2498 ms | ↑ 1.42x | 16 | 2h 28m | 10d ago | 3m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2056 ms | → 1.00x | 0 | — | — | 3m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.23% | 95.28% | 95.28% | 2453 ms | ↑ 1.66x | 1 | 18h 20m | 22d ago | 3m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 91.02% | 91.02% | 2279 ms | ↑ 1.87x | 1 | 0s | 26d ago | 17m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 91.60% | 91.69% | 91.69% | 2833 ms | ↑ 1.16x | 3 | 5h 3m | 11d ago | 3m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.69% | 99.73% | 99.73% | 2090 ms | ↑ 1.56x | 7 | 0s | 12d ago | 3m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 97.26% | 97.30% | 97.30% | 1311 ms | ↓ 0.95x | 5 | 2h 32m | 11d ago | 4m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 95.54% | 95.54% | 2550 ms | ↑ 2.04x | 9 | 0s | 11d ago | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.92% | 98.69% | 98.69% | 1128 ms | ↑ 1.34x | 2 | 0s | 12d ago | 14m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 92.96% | 92.99% | 92.99% | 2296 ms | ↑ 1.09x | 76 | 15m | 12d ago | 3m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 92.56% | 94.70% | 94.70% | 1624 ms | ↑ 1.11x | 21 | 1h 54m | 11d ago | 4m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 92.57% | 92.67% | 92.67% | 1413 ms | ↑ 1.41x | 1 | 12h 47m | 12d ago | 3m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2156 ms | → 1.00x | 0 | — | — | 3m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 858 ms | ↓ 0.83x | 0 | — | — | 13m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.49% | 99.71% | 99.71% | 3540 ms | ↑ 1.53x | 14 | 2m | 10d ago | 13m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.63% | 99.15% | 99.15% | 3764 ms | ↑ 2.29x | 64 | 3m | 10d ago | 14m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.15% | 93.76% | 93.76% | 2271 ms | → 0.95x | 113 | 5m | 11d ago | 4m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.00% | 97.86% | 97.86% | 674 ms | ↑ 1.09x | 79 | 26m | 12d ago | 12m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2562 ms | → 0.99x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.94% | 100.00% | 100.00% | 876 ms | → 1.02x | 0 | — | — | 3m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 45.87% | 88.29% | 88.29% | 1310 ms | ↑ 1.25x | 4 | 3d 12h | 11d ago | 6m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.75% | 99.44% | 99.44% | 2320 ms | ↑ 1.65x | 8 | 0s | 13d ago | 13m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.83% | 99.83% | 99.83% | 2877 ms | ↑ 1.54x | 5 | 0s | 11d ago | 11m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.91% | 99.95% | 99.95% | 1606 ms | ↑ 1.88x | 2 | 0s | 11d ago | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.83% | 96.50% | 96.50% | 3190 ms | ↑ 2.04x | 65 | 2m | 9d ago | 5m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 91.48% | 91.54% | 91.54% | 2287 ms | ↑ 1.47x | 3 | 11h 20m | 12d ago | 3m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 96.95% | 96.98% | 96.98% | 1383 ms | ↓ 0.75x | 18 | 42m | 10d ago | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 576 ms | → 1.04x | 0 | — | — | 3m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 98.44% | 97.56% | 97.56% | 1217 ms | ↑ 2.42x | 14 | 29m | 11d ago | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 95.03% | 95.03% | 2424 ms | ↑ 2.05x | 3 | 0s | 11d ago | 5m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.12% | 45.72% | 45.72% | 846 ms | → 1.05x | 49 | 4m | 8d ago | 6m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 95.09% | 97.02% | 97.02% | 3627 ms | ↑ 1.89x | 5 | 5h 36m | 13d ago | 14m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 88.92% | 42.38% | 42.38% | 425 ms | ↑ 1.20x | 6 | 10h 58m | 13d ago | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 1956 ms | → 1.00x | 0 | — | — | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.66% | 99.57% | 99.57% | 2304 ms | ↓ 0.86x | 11 | 0s | 11d ago | 11m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 98.06% | 97.56% | 97.56% | 3333 ms | ↑ 2.17x | 6 | 1h 40m | 11d ago | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.72% | 91.30% | 91.30% | 833 ms | → 1.02x | 9 | 0s | 11d ago | 5m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 97.04% | 97.08% | 97.08% | 1620 ms | ↑ 1.26x | 3 | 4h 10m | 12d ago | 3m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.80% | 99.86% | 99.86% | 652 ms | ↓ 0.80x | 5 | 2m | 11d ago | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.35% | 96.45% | 96.45% | 1692 ms | ↓ 0.93x | 47 | 2m | 11d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 96.01% | 96.05% | 96.05% | 2223 ms | ↑ 2.03x | 3 | 5h 3m | 14d ago | 3m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.35% | 37.00% | 37.00% | 929 ms | ↑ 1.06x | 47 | 2m | 13d ago | 6m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.89% | 68.76% | 68.76% | 1220 ms | ↑ 1.09x | 3 | 0s | 11d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.89% | 97.19% | 97.19% | 3364 ms | ↑ 2.46x | 3 | 0s | 11d ago | 5m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 34.85% | 34.85% | 1086 ms | ↓ 0.46x | 1 | 0s | 13d ago | 13m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2178 ms | → 1.00x | 0 | — | — | 3m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.55% | 97.68% | 97.68% | 2218 ms | ↑ 2.21x | 24 | 11m | 11d ago | 6m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 99.72% | 54.75% | 54.75% | 1528 ms | ↑ 1.17x | 7 | 3m | 8d ago | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.57% | 99.00% | 99.00% | 2050 ms | ↑ 1.39x | 14 | 0s | 10d ago | 5m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.54% | 86.40% | 86.40% | 2102 ms | ↑ 1.11x | 4 | 28m | 11d ago | 5m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.77% | 99.47% | 99.47% | 1830 ms | ↑ 1.20x | 7 | 0s | 11d ago | 5m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.21% | 97.54% | 97.54% | 1039 ms | ↓ 0.77x | 3 | 3h 47m | 11d ago | 5m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 32.69% | 16.30% | 16.30% | 1057 ms | ↑ 1.11x | 2 | 8d 14h | 11d ago | 5m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.67% | 97.83% | 97.83% | 4681 ms | ↑ 1.46x | 74 | 1m | 10d ago | 16m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 1391 ms | ↑ 1.14x | 1 | 0s | 8d ago | 13m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 96.41% | 61.47% | 61.47% | 3473 ms | ↑ 2.31x | 9 | 2h 9m | 11d ago | 5m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 76.77% | 76.84% | 76.84% | 276 ms | ↓ 0.55x | 10 | 7h 2m | 10d ago | 3m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.10% | 99.68% | 99.68% | 625 ms | ↓ 0.77x | 10 | 22m | 9d ago | 16m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.71% | 99.58% | 99.58% | 2349 ms | ↑ 1.47x | 42 | 43s | 11d ago | 15m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 62.08% | 62.13% | 62.13% | 1414 ms | → 1.05x | 2 | 3d 2h | 14d ago | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2299 ms | → 1.00x | 0 | — | — | 3m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.96% | 100.00% | 100.00% | 2192 ms | ↑ 2.29x | 0 | — | — | 3m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.69% | 98.86% | 98.86% | 423 ms | ↓ 0.87x | 3 | 23m | 27d ago | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 98.55% | 98.19% | 98.19% | 1497 ms | → 1.05x | 15 | 23m | 11d ago | 5m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 93.57% | 93.61% | 93.61% | 1468 ms | ↓ 0.46x | 26 | 42m | 12d ago | 3m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1894 ms | → 1.00x | 0 | — | — | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2187 ms | → 1.00x | 0 | — | — | 3m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.69% | 98.06% | 98.06% | 715 ms | ↑ 1.94x | 7 | 9m | 10d ago | 4m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 21.51% | 4.51% | 4.51% | 2566 ms | → 1.01x | 1 | 20d 2h | 30d ago | 11m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 93.10% | 91.61% | 91.61% | 2247 ms | ↑ 1.20x | 5 | 7h 54m | 11d ago | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 32.68% | 7.61% | 7.61% | 1207 ms | ↑ 1.53x | 1 | 17d 4h | 30d ago | 6m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 1042 ms | ↑ 1.50x | 1 | 0s | 26d ago | 17m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.94% | 99.82% | 99.82% | 704 ms | ↓ 0.80x | 1 | 0s | 16d ago | 16m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1156 ms | ↑ 1.63x | 1 | 0s | 22d ago | 15m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 91.95% | 92.05% | 92.05% | 1281 ms | ↓ 0.84x | 1 | 13h 10m | 11d ago | 3m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 32.55% | 19.26% | 19.26% | 879 ms | ↓ 0.88x | 3 | 5d 17h | 11d ago | 5m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 98.66% | 97.27% | 97.27% | 1293 ms | ↑ 1.13x | 11 | 32m | 11d ago | 5m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 21.28% | 4.55% | 4.55% | 1020 ms | → 0.98x | 2 | 10d 1h | 24d ago | 6m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.66% | 99.74% | 99.74% | 2372 ms | ↑ 1.07x | 3 | 0s | 11d ago | 11m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.02% | 98.50% | 98.50% | 4194 ms | ↑ 1.32x | 34 | 0s | 11d ago | 17m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.91% | 99.91% | 949 ms | ↓ 0.77x | 1 | 0s | 18d ago | 15m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.57% | 98.33% | 98.33% | 1239 ms | ↑ 1.16x | 11 | 3m | 11d ago | 5m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 21.60% | 18.61% | 18.61% | 1268 ms | → 0.99x | 1 | 20d 2h | 30d ago | 14m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.69% | 97.74% | 97.74% | 1065 ms | ↓ 0.84x | 5 | 1h 26m | 8d ago | 3m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.52% | 99.14% | 99.14% | 1866 ms | ↑ 1.95x | 15 | 40s | 11d ago | 15m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.07% | 99.61% | 99.61% | 1471 ms | ↓ 0.94x | 4 | 1h 8m | 11d ago | 11m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.59% | 99.25% | 99.25% | 2157 ms | ↑ 1.48x | 82 | 5m | 12d ago | 6m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 21.70% | 31.16% | 31.16% | 731 ms | → 0.98x | 1 | 20d 2h | 30d ago | 16m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.37% | 97.69% | 97.69% | 1254 ms | ↑ 1.35x | 20 | 30s | 11d ago | 4m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.92% | 99.94% | 99.94% | 1536 ms | → 1.01x | 2 | 0s | 15d ago | 15m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.72% | 99.78% | 99.78% | 875 ms | ↓ 0.80x | 8 | 1m | 11d ago | 4m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 100.00% | 94.77% | 94.83% | 94.83% | 576 ms | ↑ 1.53x | 1 | 13h 50m | 17d ago | 3m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.89% | 99.84% | 99.84% | 1801 ms | ↑ 1.21x | 3 | 0s | 11d ago | 12m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.86% | 99.84% | 99.84% | 2420 ms | ↑ 1.30x | 3 | 3m | 10d ago | 5m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.70% | 98.79% | 98.79% | 1473 ms | → 0.99x | 3 | 37m | 11d ago | 3m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.21% | 99.56% | 99.56% | 1002 ms | ↓ 0.83x | 23 | 2m | 14d ago | 16m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 52.26% | 52.26% | 1264 ms | ↓ 0.78x | 4 | 0s | 11d ago | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 32.65% | 6.94% | 6.94% | 620 ms | ↓ 0.82x | 2 | 8d 14h | 10d ago | 6m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.90% | 99.95% | 99.95% | 1834 ms | ↑ 1.82x | 1 | 0s | 15d ago | 3m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3153 ms | → 0.99x | 0 | — | — | 3m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.58% | 87.27% | 87.27% | 2397 ms | ↑ 2.50x | 13 | 46s | 11d ago | 15m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 32.32% | 6.77% | 6.77% | 2168 ms | ↓ 0.86x | 12 | 1d 10h | 11d ago | 6m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.46% | 98.49% | 98.49% | 1174 ms | ↓ 0.87x | 18 | 0s | 11d ago | 5m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 21.69% | 76.62% | 76.62% | 2565 ms | → 1.04x | 1 | 20d 2h | 30d ago | 16m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.92% | 99.91% | 99.91% | 1707 ms | ↑ 1.53x | 2 | 0s | 11d ago | 15m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.91% | 99.91% | 1487 ms | ↑ 1.07x | 2 | 0s | 9d ago | 16m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.72% | 99.63% | 99.63% | 1453 ms | ↑ 1.22x | 9 | 0s | 9d ago | 15m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 21.25% | 13.45% | 13.45% | 316 ms | → 1.01x | 1 | 20d 2h | 30d ago | 5m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.13% | 99.53% | 99.53% | 1291 ms | → 1.04x | 5 | 50m | 16d ago | 16m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2535 ms | → 1.00x | 0 | — | — | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.88% | 99.94% | 99.94% | 1363 ms | ↑ 1.33x | 1 | 0s | 9d ago | 3m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.52% | 98.87% | 98.87% | 2670 ms | ↑ 1.21x | 15 | 41s | 11d ago | 15m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.59% | 96.63% | 96.63% | 2007 ms | ↑ 1.24x | 5 | 2h 40m | 12d ago | 3m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.24% | 36.89% | 36.89% | 1789 ms | → 1.00x | 14 | 9m | 11d ago | 14m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 96.05% | 96.09% | 96.09% | 1512 ms | → 0.98x | 9 | 1h 47m | 11d ago | 3m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 92.64% | 92.68% | 92.68% | 1823 ms | ↑ 1.35x | 54 | 25m | 10d ago | 3m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 61.16% | 61.16% | 1475 ms | ↑ 2.43x | 4 | 0s | 11d ago | 5m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.13% | 98.36% | 98.36% | 2082 ms | → 1.02x | 29 | 21s | 12d ago | 14m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.77% | 99.76% | 99.76% | 2829 ms | ↑ 1.38x | 6 | 2m | 11d ago | 15m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.66% | 99.66% | 1966 ms | ↑ 1.35x | 3 | 3m | 12d ago | 16m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.83% | 99.85% | 99.85% | 1705 ms | ↓ 0.71x | 5 | 0s | 11d ago | 11m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 32.41% | 23.94% | 23.94% | 783 ms | ↓ 0.63x | 6 | 2d 21h | 11d ago | 4m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.86% | 99.08% | 99.08% | 2202 ms | ↑ 1.42x | 4 | 0s | 11d ago | 5m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.91% | 59.13% | 59.13% | 1474 ms | ↑ 1.65x | 2 | 0s | 11d ago | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.91% | 95.87% | 95.87% | 927 ms | ↑ 1.53x | 2 | 0s | 11d ago | 5m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 99.92% | 52.52% | 52.52% | 3801 ms | ↑ 2.18x | 2 | 0s | 14d ago | 14m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.83% | 99.64% | 99.64% | 829 ms | ↓ 0.77x | 5 | 0s | 20d ago | 16m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.75% | 99.72% | 99.72% | 2545 ms | ↑ 1.09x | 8 | 0s | 15d ago | 16m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.01% | 99.35% | 99.35% | 714 ms | → 0.97x | 79 | 3m | 19d ago | 13m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.91% | 48.62% | 48.62% | 1321 ms | ↑ 2.56x | 2 | 0s | 11d ago | 5m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.91% | 97.89% | 97.89% | 1821 ms | ↑ 1.84x | 2 | 0s | 11d ago | 5m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.69% | 97.34% | 97.34% | 2266 ms | ↑ 2.77x | 9 | 1m | 11d ago | 4m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 46.33% | 20.08% | 20.08% | 2812 ms | ↑ 1.56x | 10 | 1d 7h | 11d ago | 5m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.87% | 99.10% | 99.10% | 3109 ms | ↑ 2.33x | 34 | 3m | 8d ago | 11m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.86% | 99.71% | 99.71% | 2451 ms | ↑ 1.66x | 3 | 3m | 20d ago | 16m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.86% | 99.86% | 99.86% | 2424 ms | ↑ 1.64x | 4 | 0s | 11d ago | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 53.87% | 35.04% | 35.04% | 4596 ms | ↑ 1.39x | 5 | 2d 6h | 10d ago | 5m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.09% | 98.99% | 98.99% | 1866 ms | ↑ 1.17x | 30 | 20s | 11d ago | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 491 ms | → 0.98x | 0 | — | — | 3m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.72% | 73.26% | 73.26% | 469 ms | → 0.96x | 7 | 3m | 11d ago | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.92% | 99.92% | 99.92% | 184 ms | ↓ 0.21x | 2 | 0s | 22d ago | 16m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.58% | 99.91% | 99.91% | 2559 ms | ↑ 1.71x | 11 | 2m | 11d ago | 15m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.83% | 99.94% | 99.94% | 2451 ms | ↑ 2.75x | 4 | 42s | 11d ago | 12m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.52% | 99.46% | 99.46% | 2903 ms | ↑ 1.52x | 16 | 0s | 10d ago | 16m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.51% | 73.20% | 73.20% | 2558 ms | ↑ 1.40x | 76 | 25m | 10d ago | 5m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 81.67% | 81.67% | 563 ms | ↓ 0.95x | 1 | 0s | 11d ago | 5m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.35% | 95.34% | 95.34% | 1202 ms | ↑ 1.23x | 52 | 57s | 11d ago | 6m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.92% | 99.96% | 99.96% | 1857 ms | ↑ 1.06x | 2 | 0s | 11d ago | 15m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.54% | 97.74% | 97.74% | 802 ms | → 1.04x | 14 | 43s | 11d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.58% | 97.88% | 97.88% | 2104 ms | ↑ 1.07x | 13 | 46s | 11d ago | 15m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 21.26% | 5.45% | 5.45% | 1156 ms | → 0.96x | 1 | 20d 2h | 30d ago | 5m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.86% | 99.91% | 99.91% | 1059 ms | → 0.96x | 4 | 0s | 11d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 21.26% | 4.74% | 4.74% | 531 ms | ↓ 0.93x | 1 | 20d 2h | 30d ago | 6m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.91% | 51.98% | 51.98% | 2501 ms | ↑ 2.62x | 2 | 0s | 11d ago | 5m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 98.99% | 59.70% | 59.70% | 1092 ms | → 1.04x | 31 | 1m | 19d ago | 16m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 100.00% | 60.41% | 60.49% | 60.49% | 475 ms | ↓ 0.85x | 1 | 3d 16h | 14d ago | 3m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.63% | 99.69% | 99.69% | 69 ms | ↓ 0.20x | 4 | 3m | 14d ago | 3m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.86% | 98.94% | 98.94% | 2396 ms | ↑ 1.84x | 4 | 0s | 11d ago | 15m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 21.70% | 4.56% | 4.56% | 1787 ms | → 1.04x | 1 | 20d 2h | 30d ago | 15m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2844 ms | ↑ 1.07x | 0 | — | — | 3m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 32.67% | 7.74% | 7.74% | 2638 ms | ↑ 1.19x | 2 | 8d 14h | 10d ago | 6m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 89.45% | 92.27% | 92.27% | 4579 ms | ↓ 0.76x | 152 | 15m | 10d ago | 15m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.91% | 99.97% | 99.97% | 1960 ms | ↑ 1.22x | 2 | 0s | 11d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.66% | 99.77% | 99.77% | 765 ms | ↓ 0.61x | 2 | 0s | 10d ago | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.47% | 99.51% | 99.51% | 2036 ms | ↑ 1.94x | 11 | 6m | 14d ago | 16m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2965 ms | → 0.99x | 0 | — | — | 3m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.37% | 99.37% | 2534 ms | ↑ 2.78x | 0 | — | — | 15m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 1013 ms | ↑ 1.56x | 2 | 0s | 15d ago | 17m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.53% | 90.80% | 90.80% | 2691 ms | ↓ 0.95x | 49 | 24s | 10d ago | 15m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.35% | 96.42% | 96.42% | 2269 ms | ↑ 1.08x | 1 | 9h 60m | 17d ago | 3m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.45% | 99.52% | 99.52% | 1141 ms | → 1.03x | 2 | 25m | 11d ago | 3m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.89% | 83.01% | 83.01% | 1798 ms | ↑ 2.50x | 30 | 3m | 11d ago | 5m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.51% | 99.57% | 99.57% | 656 ms | → 0.97x | 7 | 0s | 12d ago | 3m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.04% | 99.77% | 99.77% | 1639 ms | → 1.04x | 33 | 0s | 19d ago | 16m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.84% | 99.41% | 99.41% | 1145 ms | ↓ 0.92x | 60 | 3m | 15d ago | 16m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.83% | 99.69% | 99.69% | 1232 ms | → 0.99x | 4 | 2m | 16d ago | 16m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 87.83% | 59.42% | 59.42% | 548 ms | ↓ 0.86x | 5 | 14h 2m | 11d ago | 4m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.41% | 99.80% | 99.80% | 901 ms | ↓ 0.83x | 20 | 0s | 13d ago | 14m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 97.96% | 81.80% | 81.80% | 1505 ms | ↓ 0.49x | 67 | 35s | 11d ago | 11m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 51.45% | 10.84% | 10.84% | 2097 ms | ↑ 1.10x | 2 | 6d | 11d ago | 17m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.63% | 98.42% | 98.42% | 2084 ms | ↑ 1.06x | 12 | 0s | 11d ago | 5m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.58% | 90.82% | 90.82% | 3906 ms | ↑ 2.86x | 13 | 46s | 11d ago | 17m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3094 ms | → 0.99x | 0 | — | — | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.40% | 98.49% | 98.49% | 719 ms | → 0.96x | 16 | 2m | 12d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.71% | 99.76% | 99.76% | 1764 ms | ↑ 1.72x | 8 | 1m | 11d ago | 4m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 96.04% | 96.32% | 96.32% | 1732 ms | → 1.04x | 80 | 7m | 11d ago | 4m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.74% | 99.73% | 99.73% | 1698 ms | ↑ 1.45x | 7 | 1m | 11d ago | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1112 ms | → 0.97x | 0 | — | — | 3m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.80% | 97.52% | 97.52% | 1949 ms | ↑ 2.63x | 6 | 0s | 11d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 96.04% | 92.59% | 92.59% | 3016 ms | ↑ 1.71x | 70 | 10m | 11d ago | 4m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.86% | 99.91% | 99.91% | 2100 ms | ↑ 2.43x | 4 | 0s | 13d ago | 14m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.89% | 99.94% | 99.94% | 1047 ms | ↓ 0.83x | 1 | 0s | 13d ago | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.63% | 99.85% | 99.85% | 2191 ms | ↑ 2.50x | 6 | 10m | 8d ago | 14m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 3176 ms | ↑ 1.10x | 0 | — | — | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 93.54% | 93.59% | 93.59% | 2388 ms | ↑ 1.42x | 1 | 1d 1h | 22d ago | 3m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 655 ms | ↑ 1.77x | 5 | 0s | 15d ago | 15m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 93.27% | 93.33% | 93.33% | 1372 ms | ↓ 0.80x | 4 | 5h 15m | 13d ago | 3m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.72% | 99.72% | 1201 ms | → 1.00x | 8 | 4m | 11d ago | 4m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 815 ms | ↓ 0.77x | 1 | 0s | 13d ago | 14m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.58% | 99.71% | 99.71% | 874 ms | ↓ 0.76x | 7 | 10m | 13d ago | 14m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 96.81% | 96.85% | 96.85% | 1769 ms | ↑ 1.78x | 2 | 6h 15m | 11d ago | 3m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.91% | 99.81% | 99.81% | 366 ms | ↓ 0.90x | 2 | 0s | 14d ago | 6m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.69% | 98.98% | 98.98% | 1687 ms | ↑ 1.71x | 7 | 4m | 10d ago | 16m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1603 ms | ↑ 1.90x | 1 | 0s | 19d ago | 15m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.82% | 16.06% | 10.45% | 10.45% | 2343 ms | → 1.00x | 2 | 11d 10h | 7d ago | 16m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.82% | 94.32% | 91.31% | 91.31% | 1725 ms | ↓ 0.81x | 117 | 7m | 5d ago | 16m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.82% | 97.61% | 97.62% | 97.62% | 3666 ms | ↑ 1.69x | 81 | 22s | 4d ago | 16m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.94% | 99.70% | 99.70% | 2283 ms | ↑ 1.57x | 1 | 0s | 4d ago | 16m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.58% | 98.90% | 98.90% | 2905 ms | ↑ 1.20x | 13 | 47s | 4d ago | 16m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.82% | 99.77% | 99.88% | 99.88% | 1437 ms | ↓ 0.87x | 7 | 0s | 4d ago | 15m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.80% | 99.72% | 99.72% | 1849 ms | → 0.97x | 6 | 0s | 4d ago | 16m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.66% | 99.69% | 99.69% | 2481 ms | ↑ 1.47x | 11 | 0s | 4d ago | 16m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.82% | 98.98% | 99.06% | 99.06% | 3003 ms | ↑ 1.09x | 10 | 1m | 4d ago | 15m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.08% | 96.11% | 96.11% | 3544 ms | ↑ 1.67x | 42 | 32m | 1d ago | 12m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 99.82% | 21.56% | 16.85% | 16.85% | 874 ms | → 1.00x | 2 | 10d 1h | 6h ago | 14m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.82% | 98.61% | 96.63% | 96.63% | 1359 ms | ↓ 0.39x | 42 | 1m | 5d ago | 11m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.82% | 99.89% | 99.72% | 99.72% | 3180 ms | ↑ 2.11x | 3 | 0s | 6d ago | 11m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.82% | 97.88% | 99.53% | 99.53% | 2183 ms | ↑ 2.19x | 62 | 2m | 6d ago | 11m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.77% | 99.86% | 99.86% | 1003 ms | ↓ 0.83x | 7 | 0s | 3d ago | 12m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.82% | 99.58% | 99.79% | 99.79% | 2508 ms | ↑ 1.65x | 13 | 13s | 7d ago | 11m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.82% | 99.57% | 57.37% | 57.37% | 1263 ms | ↓ 0.87x | 12 | 2m | 7d ago | 5m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.82% | 99.80% | 50.80% | 50.80% | 1617 ms | ↓ 0.86x | 6 | 0s | 2d ago | 5m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.82% | 32.63% | 6.84% | 6.84% | 2277 ms | ↑ 1.16x | 3 | 5d 17h | 6d ago | 6m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.82% | 21.23% | 31.67% | 31.67% | 2526 ms | → 1.05x | 2 | 10d 1h | 3d ago | 5m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.82% | 97.08% | 97.11% | 97.11% | 2142 ms | ↑ 1.61x | 61 | 3m | 3d ago | 3m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.82% | 99.77% | 75.74% | 75.74% | 2386 ms | ↑ 1.37x | 6 | 2m | 18h ago | 5m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.82% | 97.89% | 98.40% | 98.40% | 2389 ms | ↑ 2.48x | 47 | 6m | 6d ago | 4m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.82% | 99.46% | 77.49% | 77.49% | 2627 ms | ↑ 2.63x | 17 | 35s | 4d ago | 5m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 99.82% | 99.09% | 73.84% | 73.84% | 2546 ms | ↑ 1.24x | 17 | 16m | 4d ago | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.82% | 99.66% | 76.02% | 76.02% | 2423 ms | ↑ 2.87x | 10 | 59s | 6d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.82% | 66.37% | 63.26% | 63.26% | 1669 ms | ↑ 1.34x | 16 | 12h 26m | 6d ago | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.82% | 99.80% | 86.66% | 86.66% | 736 ms | ↓ 0.57x | 6 | 0s | 5d ago | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.82% | 99.52% | 74.26% | 74.26% | 2600 ms | ↑ 2.91x | 15 | 38s | 4d ago | 5m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.82% | 99.34% | 98.76% | 98.76% | 432 ms | ↓ 0.64x | 18 | 2m | 5d ago | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.82% | 99.77% | 98.16% | 98.16% | 1654 ms | ↑ 2.75x | 7 | 0s | 7d ago | 5m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.82% | 99.86% | 84.30% | 84.30% | 2797 ms | ↑ 1.72x | 4 | 0s | 4d ago | 5m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.82% | 99.81% | 99.85% | 99.85% | 973 ms | ↓ 0.84x | 5 | 0s | 3d ago | 4m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.82% | 92.09% | 92.16% | 92.16% | 2049 ms | ↑ 1.26x | 8 | 4h 1m | 7d ago | 3m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.82% | 99.70% | 99.75% | 99.75% | 1375 ms | ↑ 1.10x | 5 | 0s | 19h ago | 3m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 91.94% | 92.02% | 92.02% | 1688 ms | ↓ 0.89x | 5 | 3h 19m | 4d ago | 3m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 95.55% | 95.59% | 95.59% | 2198 ms | ↑ 1.49x | 14 | 59m | 4d ago | 3m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.82% | 91.28% | 91.40% | 91.40% | 2884 ms | ↑ 1.08x | 2 | 6h 15m | 1d ago | 3m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.64% | 99.75% | 99.83% | 99.83% | 414 ms | ↓ 0.80x | 2 | 0s | 4d ago | 16m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.64% | 78.49% | 82.84% | 82.84% | 1291 ms | ↓ 0.53x | 474 | 6m | 4d ago | 16m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.64% | 21.64% | 4.57% | 4.57% | 1484 ms | → 0.98x | 3 | 6d 17h | 16h ago | 15m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.64% | 21.63% | 4.55% | 4.55% | 2014 ms | → 1.03x | 3 | 6d 17h | 4d ago | 16m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.64% | 99.60% | 99.83% | 99.83% | 2582 ms | ↑ 1.75x | 8 | 8m | 6d ago | 14m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.64% | 22.04% | 4.63% | 4.63% | 2401 ms | ↑ 1.06x | 4 | 4d 23h | 6d ago | 11m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.64% | 76.51% | 63.62% | 63.62% | 4127 ms | ↓ 0.73x | 548 | 5m | 1d ago | 12m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.64% | 99.74% | 43.59% | 43.59% | 1102 ms | ↓ 0.81x | 7 | 3m | 7d ago | 6m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 99.43% | 98.79% | 98.79% | 1721 ms | ↑ 1.86x | 19 | 0s | 2d ago | 6m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.64% | 21.22% | 4.44% | 4.44% | 1305 ms | ↑ 1.09x | 3 | 6d 17h | 6d ago | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.64% | 99.83% | 97.35% | 97.35% | 2957 ms | ↑ 2.81x | 5 | 0s | 3d ago | 4m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.64% | 99.55% | 99.58% | 99.58% | 1901 ms | ↑ 1.48x | 8 | 8m | 3d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.64% | 42.45% | 26.62% | 26.62% | 2290 ms | ↑ 1.56x | 4 | 3d 13h | 5d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.64% | 32.54% | 12.81% | 12.81% | 1676 ms | → 1.05x | 4 | 4d 7h | 4d ago | 5m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.80% | 99.85% | 99.85% | 1365 ms | → 1.01x | 2 | 9m | 2d ago | 3m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.64% | 99.51% | 99.51% | 99.51% | 3715 ms | ↑ 1.08x | 2 | 11m | 19h ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.64% | 90.98% | 91.09% | 91.09% | 1325 ms | ↓ 0.92x | 3 | 4h 20m | 1h ago | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.64% | 92.19% | 92.29% | 92.29% | 2141 ms | ↓ 0.90x | 3 | 4h 17m | 1h ago | 3m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.47% | 99.80% | 99.94% | 99.94% | 3565 ms | ↑ 1.79x | 6 | 0s | 4d ago | 16m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.47% | 48.44% | 55.26% | 55.26% | 3045 ms | ↓ 0.88x | 514 | 28m | 4d ago | 16m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.46% | 99.43% | 97.53% | 97.53% | 2913 ms | ↑ 1.23x | 19 | 0s | 3d ago | 11m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.46% | 22.05% | 4.63% | 4.63% | 3049 ms | → 1.02x | 4 | 4d 23h | 1d ago | 11m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.46% | 98.87% | 98.94% | 98.94% | 1650 ms | ↑ 1.27x | 10 | 29m | 3d ago | 12m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.46% | 31.57% | 6.63% | 6.63% | 2368 ms | ↓ 0.83x | 37 | 11h 10m | 3d ago | 11m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.46% | 99.86% | 64.29% | 64.29% | 894 ms | ↓ 0.66x | 3 | 7m | 3d ago | 5m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.46% | 96.92% | 96.95% | 96.95% | 3251 ms | ↑ 1.98x | 26 | 30m | 3d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.46% | 99.71% | 99.77% | 99.77% | 2362 ms | ↑ 2.13x | 7 | 6m | 7d ago | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.46% | 99.12% | 98.23% | 98.23% | 3351 ms | ↑ 2.51x | 28 | 44s | 3d ago | 5m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.46% | 99.77% | 98.74% | 98.74% | 867 ms | ↑ 1.43x | 6 | 2m | 3d ago | 5m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.29% | 99.58% | 99.71% | 99.71% | 482 ms | ↓ 0.54x | 12 | 2m | 5d ago | 16m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.29% | 99.16% | 99.27% | 99.27% | 2432 ms | → 1.00x | 28 | 22s | 4d ago | 16m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.29% | 99.04% | 96.17% | 96.17% | 2675 ms | ↑ 1.41x | 29 | 2m | 7d ago | 16m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.29% | 99.32% | 98.57% | 98.57% | 2365 ms | ↓ 0.92x | 22 | 27s | 3d ago | 14m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.28% | 82.42% | 17.30% | 17.30% | 3789 ms | ↑ 1.69x | 7 | 14h 46m | 2d ago | 12m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.28% | 49.02% | 49.05% | 49.05% | 1756 ms | ↓ 0.86x | 35 | 7h 8m | 2d ago | 3m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.28% | 99.69% | 99.74% | 99.74% | 2496 ms | ↑ 1.57x | 10 | 0s | 5d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.28% | 99.83% | 86.56% | 86.56% | 2448 ms | ↑ 2.41x | 5 | 0s | 2d ago | 4m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 99.28% | 82.06% | 82.14% | 82.14% | 638 ms | ↓ 0.59x | 10 | 4h 7m | 2h ago | 3m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 99.11% | 78.77% | 83.37% | 83.37% | 4331 ms | ↓ 0.90x | 479 | 6m | 18h ago | 17m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 99.11% | 99.72% | 90.49% | 90.49% | 872 ms | ↑ 1.24x | 4 | 25m | 6d ago | 15m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.10% | 99.26% | 89.33% | 89.33% | 2903 ms | → 1.04x | 25 | 0s | 1h ago | 5m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.10% | 98.09% | 98.18% | 98.18% | 1327 ms | ↑ 1.49x | 45 | 5m | 3d ago | 4m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.10% | 80.85% | 80.90% | 80.90% | 1124 ms | ↓ 0.94x | 6 | 10h 26m | 17h ago | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (68)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 98.93% | 72.36% | 82.85% | 82.85% | 1496 ms | ↓ 0.24x | 488 | 10m | 2d ago | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 98.92% | 96.41% | 96.48% | 96.48% | 1713 ms | ↑ 1.82x | 29 | 34m | 11h ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.92% | 96.31% | 96.34% | 96.34% | 3326 ms | ↑ 3.05x | 34 | 27m | 3d ago | 4m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.92% | 99.09% | 85.48% | 85.48% | 898 ms | ↑ 1.25x | 31 | 0s | 1h ago | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 98.92% | 88.90% | 88.92% | 88.92% | 3595 ms | ↑ 2.04x | 113 | 25m | 2d ago | 4m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 98.92% | 32.38% | 25.39% | 25.39% | 2402 ms | ↑ 1.53x | 7 | 2d 11h | 2d ago | 4m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 98.92% | 78.41% | 78.48% | 78.48% | 2619 ms | ↓ 0.94x | 8 | 6h 41m | 2d ago | 3m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.75% | 98.15% | 98.23% | 98.23% | 4122 ms | ↑ 1.09x | 21 | 0s | 2d ago | 16m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.75% | 99.29% | 99.17% | 99.17% | 3260 ms | ↑ 1.10x | 23 | 27s | 2d ago | 11m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.74% | 98.89% | 98.96% | 98.96% | 175 ms | ↓ 0.21x | 32 | 2m | 2d ago | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.74% | 81.31% | 85.57% | 85.57% | 4232 ms | ↓ 0.91x | 389 | 7m | 5d ago | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.58% | 99.75% | 99.93% | 99.93% | 2345 ms | ↑ 2.00x | 8 | 0s | 13h ago | 16m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.56% | 32.45% | 32.48% | 32.48% | 984 ms | ↓ 0.69x | 11 | 1d 13h | 3d ago | 4m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 98.39% | 21.07% | 4.42% | 4.42% | 976 ms | ↓ 0.95x | 18 | 1d 3h | 1d ago | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.38% | 79.71% | 84.06% | 84.06% | 4108 ms | ↓ 0.80x | 476 | 5m | 14h ago | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.38% | 95.45% | 96.17% | 96.17% | 2729 ms | ↑ 1.28x | 73 | 13m | 20h ago | 6m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.22% | 99.13% | 99.19% | 99.19% | 4306 ms | ↑ 1.94x | 14 | 1m | 16h ago | 17m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.22% | 98.54% | 98.76% | 98.76% | 3584 ms | ↓ 0.91x | 36 | 5m | 54m ago | 15m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.20% | 97.41% | 97.25% | 97.25% | 1676 ms | ↓ 0.79x | 70 | 3m | 2d ago | 4m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.20% | 98.89% | 88.23% | 88.23% | 1308 ms | ↓ 0.59x | 31 | 2m | 6h ago | 5m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.69% | 98.88% | 99.66% | 99.66% | 4300 ms | ↑ 1.41x | 38 | 32s | 2d ago | 16m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 97.69% | 99.41% | 99.87% | 99.87% | 4630 ms | ↑ 3.58x | 20 | 0s | 2d ago | 16m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.69% | 97.44% | 99.44% | 99.44% | 4318 ms | ↑ 2.22x | 77 | 2m | 2d ago | 16m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 97.48% | 62.30% | 51.20% | 51.20% | 665 ms | ↓ 0.38x | 11 | 21h 33m | 2d ago | 5m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.30% | 78.02% | 56.05% | 56.05% | 4426 ms | ↓ 0.95x | 499 | 6m | 14h ago | 5m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.15% | 99.52% | 99.88% | 99.88% | 1464 ms | ↑ 1.31x | 3 | 1h 27m | 2d ago | 16m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.14% | 80.42% | 83.57% | 83.57% | 4088 ms | ↓ 0.82x | 491 | 4m | 18h ago | 14m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.12% | 91.83% | 65.41% | 65.41% | 1773 ms | ↑ 1.11x | 37 | 1h 11m | 1d ago | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.12% | 79.15% | 79.57% | 79.57% | 4676 ms | ↑ 1.15x | 482 | 5m | 13h ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 97.11% | 97.96% | 98.07% | 98.07% | 1255 ms | ↓ 0.85x | 2 | 2h 29m | 6d ago | 3m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 96.97% | 99.38% | 99.71% | 99.71% | 2860 ms | ↑ 2.14x | 6 | 50m | 4d ago | 16m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.94% | 75.53% | 75.56% | 75.56% | 4495 ms | ↓ 0.88x | 368 | 10m | 21h ago | 3m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 96.93% | 97.23% | 97.23% | 97.23% | 2225 ms | → 0.98x | 1 | 3h 45m | 4d ago | 3m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.78% | 79.23% | 70.35% | 70.35% | 4512 ms | ↓ 0.92x | 499 | 5m | 20h ago | 12m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 96.24% | 88.95% | 47.54% | 47.54% | 2274 ms | ↑ 1.18x | 175 | 13m | 2d ago | 12m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.21% | 89.14% | 89.25% | 89.25% | 2624 ms | → 1.03x | 22 | 36m | 1h ago | 3m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 96.04% | 79.02% | 77.48% | 77.48% | 2051 ms | ↓ 0.61x | 460 | 7m | 5d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 95.73% | 26.61% | 77.24% | 77.24% | 700 ms | ↑ 1.35x | 5 | 4d | 20h ago | 16m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.32% | 96.75% | 94.81% | 94.81% | 3176 ms | ↑ 1.56x | 72 | 6m | 3d ago | 5m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.14% | 79.44% | 76.16% | 76.16% | 4800 ms | ↓ 0.95x | 492 | 5m | 23m ago | 5m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 94.81% | 20.42% | 4.28% | 4.28% | 3768 ms | → 1.04x | 38 | 12h 41m | 2h ago | 11m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 94.23% | 94.27% | 92.82% | 92.82% | 2606 ms | ↑ 1.79x | 91 | 15m | 14h ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 93.87% | 58.78% | 63.34% | 63.34% | 2607 ms | ↑ 1.44x | 6 | 2d 3h | 6d ago | 4m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 93.77% | 94.41% | 98.60% | 98.60% | 4220 ms | ↑ 1.41x | 143 | 5m | 2d ago | 16m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 92.42% | 93.15% | 93.15% | 93.15% | 2864 ms | ↑ 1.10x | 1 | 13h 57m | 6d ago | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.31% | 61.06% | 46.78% | 46.78% | 1268 ms | ↑ 1.28x | 16 | 14h 17m | 22h ago | 13m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 92.07% | 75.48% | 74.87% | 74.87% | 4542 ms | ↓ 0.82x | 558 | 7m | 5h ago | 4m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 91.91% | 22.34% | 5.46% | 5.46% | 4432 ms | ↓ 0.83x | 123 | 3h 43m | 24m ago | 5m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 91.35% | 22.99% | 22.99% | 22.99% | 2963 ms | → 0.95x | 64 | 6h 2m | 20h ago | 4m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 89.88% | 66.74% | 66.74% | 66.74% | 3220 ms | ↓ 0.76x | 278 | 13m | 1h ago | 17m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 87.91% | 40.62% | 40.66% | 40.66% | 3797 ms | → 0.97x | 52 | 5h 4m | 2d ago | 3m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 87.17% | 19.67% | 4.14% | 4.14% | 2327 ms | ↑ 1.06x | 51 | 9h 35m | 19h ago | 15m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 86.58% | 78.24% | 16.43% | 16.43% | 4221 ms | ↑ 3.07x | 129 | 51m | 32m ago | 13m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 86.48% | 95.87% | 98.77% | 98.77% | 4362 ms | ↑ 1.59x | 91 | 8m | 1d ago | 16m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 85.25% | 90.80% | 95.96% | 95.96% | 2717 ms | ↑ 3.15x | 7 | 13h 23m | 2d ago | 6m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 85.15% | 16.26% | 4.26% | 4.26% | 3692 ms | ↓ 0.92x | 5 | 4d 13h | 3d ago | 13m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 84.79% | 86.65% | 75.63% | 75.63% | 1793 ms | ↓ 0.76x | 248 | 11m | 2d ago | 11m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 78.74% | 16.09% | 6.85% | 6.85% | 4452 ms | ↓ 0.92x | 113 | 4h 30m | 44m ago | 5m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 77.28% | 52.84% | 61.80% | 61.80% | 4779 ms | ↓ 0.90x | 667 | 17m | 52m ago | 13m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 70.63% | 70.30% | 70.33% | 70.33% | 573 ms | ↓ 0.57x | 56 | 2h 30m | 2h ago | 3m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 69.57% | 92.25% | 95.67% | 95.67% | 4512 ms | → 1.02x | 164 | 13m | 14h ago | 16m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 68.35% | 89.26% | 97.63% | 97.63% | 774 ms | ↓ 0.88x | 11 | 11h 39m | 2d ago | 6m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 66.13% | 91.99% | 91.22% | 91.22% | 1963 ms | ↑ 2.44x | 47 | 1h 42m | 8h ago | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 63.06% | 15.18% | 6.10% | 6.10% | 3577 ms | ↓ 0.71x | 206 | 2h 29m | 44m ago | 5m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 62.34% | 11.17% | 10.25% | 10.25% | 2244 ms | ↑ 1.05x | 7 | 3d 15h | 2d ago | 4m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 60.83% | 66.28% | 66.35% | 66.35% | 1501 ms | ↓ 0.86x | 8 | 12h 2m | 4d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 25.13% | 29.95% | 85.13% | 85.13% | 1583 ms | ↑ 1.11x | 2 | 10d 19h | 24d ago | 15m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 22.88% | 81.89% | 89.31% | 89.31% | 1178 ms | ↓ 0.31x | 16 | 12h 14m | 10d ago | 5m ago |

</details>

<details open>
<summary><strong>🔴 Down (174)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.82% | 99.84% | 99.84% | 99.84% | 2865 ms | → 0.99x | 1 | 0s | 3m ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 90.43% | 95.69% | 95.74% | 95.74% | 1521 ms | → 1.05x | 4 | 5h 8m | 17h ago | 3m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 90.11% | 96.84% | 59.19% | 59.19% | 1284 ms | ↑ 2.24x | 38 | 32m | 17h ago | 5m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 88.67% | 28.79% | 23.73% | 23.73% | 2261 ms | → 0.97x | 16 | 1d 4h | 20h ago | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 76.94% | 34.52% | 34.56% | 34.56% | 1006 ms | ↓ 0.86x | 3 | 4d 24h | 2d ago | 3m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 74.41% | 95.21% | 96.16% | 96.16% | 2404 ms | ↑ 2.20x | 16 | 3h 2m | 2d ago | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 72.97% | 95.67% | 89.14% | 89.14% | 509 ms | ↓ 0.72x | 3 | 12h 37m | 1d ago | 5m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 66.01% | 16.12% | 27.82% | 27.82% | 842 ms | → 0.99x | 4 | 5d 16h | 51m ago | 11m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 27.71% | 51.90% | 69.32% | 69.32% | 3376 ms | ↓ 0.53x | 545 | 32m | 57m ago | 17m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 23.83% | 41.98% | 42.09% | 42.09% | 2817 ms | → 1.01x | 3 | 1d 22h | 5d ago | 3m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 13.87% | 49.23% | 52.77% | 52.77% | 1908 ms | ↑ 1.62x | 6 | 2d 15h | 6d ago | 4m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 13.15% | 85.63% | 85.77% | 85.77% | 1061 ms | ↓ 0.88x | 10 | 14h 29m | 6d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.89% | 82.96% | 95.57% | 95.57% | 4609 ms | ↑ 2.80x | 45 | 3h 42m | 7d ago | 11m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.18% | 0.09% | 0.09% | 0.09% | 2848 ms | → 1.00x | 2 | 6d 10h | 5d ago | 6m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 78.08% | 94.65% | 94.65% | — | — | 7 | 1d 10h | 10d ago | 16m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 9.39% | 78.35% | 78.35% | — | — | 4 | 6d 22h | 28d ago | 11m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 77.34% | 84.23% | 84.23% | — | — | 29 | 8h 19m | 10d ago | 6m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.55% | 6.55% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 9.49% | 14.32% | 14.32% | — | — | 11 | 2d 12h | 10d ago | 17m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 10.01% | 3.88% | 3.88% | — | — | 1 | 27d 13h | 28d ago | 12m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 75.73% | 94.91% | 94.91% | — | — | 80 | 3h | 10d ago | 13m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 41.66% | 41.66% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 30.14% | 30.14% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 61.15% | 85.20% | 85.20% | — | — | 379 | 44m | 10d ago | 16m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 67.42% | 74.03% | 74.03% | — | — | 317 | 48m | 10d ago | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 78.66% | 36.29% | 36.29% | — | — | 3 | 3d 7h | 10d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 78.17% | 95.40% | 95.40% | — | — | 5 | 1d 24h | 10d ago | 16m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 45.71% | 71.84% | 71.84% | — | — | 206 | 2h | 16d ago | 15m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 21h | 13d ago | 16m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 77.41% | 88.11% | 88.11% | — | — | 32 | 7h 26m | 10d ago | 16m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.46% | 4.46% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 20.54% | 20.54% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 77.71% | 63.01% | 63.01% | — | — | 27 | 8h 50m | 10d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 45.04% | 45.04% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.68% | 4.28% | 4.28% | — | — | 3 | 9d 22h | 10d ago | 5m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 78.72% | 95.54% | 95.54% | — | — | 1 | 9d 22h | 10d ago | 6m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.62% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 10d ago | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 70.47% | 59.35% | 59.35% | — | — | 34 | 8h 14m | 10d ago | 14m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 13.24% | 34.28% | 34.28% | — | — | 2 | 13d 9h | 27d ago | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 11.16% | 2.35% | 2.35% | — | — | 7 | 3d 21h | 10d ago | 13m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 62.45% | 62.45% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 57.94% | 30.09% | 30.09% | — | — | 371 | 49m | 10d ago | 5m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.42% | 15.42% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 77.15% | 34.57% | 34.57% | — | — | 50 | 4h 46m | 10d ago | 6m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.62% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 10d ago | 13m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 65.47% | 65.47% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.80% | 7.80% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 75.30% | 75.30% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 77.85% | 95.33% | 95.33% | — | — | 16 | 14h 51m | 10d ago | 16m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 12.08% | 12.08% | 12.08% | — | — | 5 | 5d 4h | 26d ago | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 57.12% | 90.94% | 90.94% | — | — | 165 | 2h 3m | 10d ago | 11m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 55.72% | 90.51% | 90.51% | — | — | 211 | 1h 36m | 10d ago | 16m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 17h | 26d ago | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 24.61% | 42.75% | 42.75% | — | — | 5 | 4d 19h | 24d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 15.12% | 15.12% | 15.12% | — | — | 5 | 4d 16h | 23d ago | 4m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 60.54% | 60.54% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 47.07% | 87.74% | 87.74% | — | — | 316 | 1h 13m | 10d ago | 17m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 53.46% | 53.46% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 17m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 48.60% | 48.60% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 22d 21h | 23d ago | 3m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 78.18% | 95.35% | 95.35% | — | — | 4 | 2d 11h | 10d ago | 17m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 67.30% | 67.30% | — | — | 3 | 9d 24h | 22d ago | 11m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.59% | 44.73% | 44.73% | — | — | 2 | 14d 22h | 10d ago | 16m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 22h | 13d ago | 15m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 73.89% | 81.59% | 81.59% | — | — | 13 | 20h 23m | 11d ago | 4m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 19h | 13d ago | 6m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 49.36% | 38.46% | 38.46% | — | — | 569 | 34m | 10d ago | 5m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 11.74% | 3.02% | 3.02% | — | — | 4 | 6d 18h | 10d ago | 5m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 47.76% | 47.76% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 77.38% | 95.26% | 95.26% | — | — | 22 | 10h 56m | 10d ago | 11m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 78.57% | 38.80% | 38.80% | — | — | 3 | 3d 7h | 10d ago | 5m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 78.17% | 95.22% | 95.22% | — | — | 5 | 1d 24h | 10d ago | 16m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 58.10% | 58.16% | 58.16% | — | — | 1 | 9d 22h | 10d ago | 16m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 54.85% | 56.58% | 56.58% | — | — | 4 | 4d 3h | 17d ago | 5m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 72.72% | 92.54% | 92.54% | — | — | 166 | 1h 28m | 10d ago | 16m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.59% | 0.12% | 0.12% | — | — | 18 | 1d 16h | 11d ago | 11m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 25d 17h | 26d ago | 3m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 19h | 13d ago | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 56.24% | 90.74% | 90.74% | — | — | 58 | 6h 18m | 15d ago | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 78.73% | 81.62% | 81.62% | — | — | 2 | 4d 23h | 10d ago | 4m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.09% | 4.09% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 49.67% | 49.67% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 58.04% | 88.95% | 88.95% | — | — | 251 | 1h 16m | 10d ago | 16m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 45.53% | 67.84% | 67.84% | — | — | 606 | 34m | 10d ago | 12m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 14m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.55% | 32.55% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 29.02% | 29.10% | 29.10% | — | — | 24 | 11h 4m | 10d ago | 3m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 16.49% | 17.87% | 17.87% | — | — | 436 | 1h 15m | 10d ago | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.72% | 27.72% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 15m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 5m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 77.57% | 84.29% | 84.29% | — | — | 38 | 6h 16m | 10d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.08% | 20.08% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 56.93% | 56.93% | — | — | 1 | 29d 24h | 30d ago | 12m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 63.43% | 63.43% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 0.00% | 78.56% | 95.25% | 95.25% | — | — | 5 | 1d 24h | 10d ago | 6m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 78.53% | 95.33% | 95.33% | — | — | 6 | 1d 16h | 10d ago | 6m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 71.62% | 71.66% | 71.66% | — | — | 7 | 1d 10h | 10d ago | 3m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 48.03% | 89.03% | 89.03% | — | — | 1 | 18d 4h | 18d ago | 11m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 30.43% | 6.38% | 6.38% | — | — | 3 | 7d 6h | 10d ago | 6m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 14d 23h | 15d ago | 3m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 15m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 78.25% | 95.42% | 95.42% | — | — | 2 | 4d 23h | 10d ago | 15m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 76.47% | 94.18% | 94.18% | — | — | 52 | 4h 37m | 10d ago | 15m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 47.68% | 73.47% | 73.47% | — | — | 565 | 35m | 10d ago | 17m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 41.00% | 86.26% | 86.26% | — | — | 15 | 1d 8h | 20d ago | 16m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 76.62% | 94.02% | 94.02% | — | — | 57 | 4h 11m | 10d ago | 16m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.74% | 22.74% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 13.74% | 13.74% | 13.74% | — | — | 3 | 3d 13h | 8d ago | 16m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 78.49% | 39.63% | 39.63% | — | — | 9 | 1d 2h | 10d ago | 6m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 8.27% | 78.51% | 78.51% | — | — | 2 | 13d 23h | 17d ago | 15m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 23.33% | 33.04% | 33.04% | — | — | 104 | 5h 18m | 14d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 3.45% | 9.97% | 9.97% | — | — | 1 | 29d 4h | 29d ago | 5m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 65.52% | 75.56% | 75.56% | — | — | 337 | 46m | 10d ago | 17m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 6m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 77.78% | 77.78% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 71.12% | 71.15% | 71.15% | — | — | 3 | 3d 12h | 10d ago | 4m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 9.75% | 20.02% | 20.02% | — | — | 2 | 13d 19h | 28d ago | 4m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 12d 20h | 13d ago | 16m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.66% | 20.66% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 3.75% | 3.86% | 3.86% | — | — | 2 | 5d 5h | 10d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 19.13% | 19.23% | 19.23% | — | — | 2 | 5d 5h | 10d ago | 3m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 25.50% | 25.62% | 25.62% | — | — | 2 | 3d 19h | 7d ago | 3m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 57.43% | 57.43% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 78.24% | 95.39% | 95.39% | — | — | 5 | 1d 24h | 10d ago | 14m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 74.71% | 77.27% | 77.27% | — | — | 8 | 1d 9h | 11d ago | 4m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 13m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 11m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 47.62% | 47.62% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 48.72% | 89.21% | 89.21% | — | — | 2 | 8d 23h | 18d ago | 15m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 14m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 73.92% | 92.92% | 92.92% | — | — | 157 | 1h 31m | 10d ago | 11m ago |

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
