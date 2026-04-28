# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**534 providers** — 295 🟢 operational · 67 🟡 degraded · 172 🔴 down · 0 ⚫ unknown

_Updated 2026-04-28 06:10 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (295)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 92.29% | 92.40% | 92.40% | 1540 ms | → 0.96x | 1 | 12h 20m | 11d ago | 16m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 91.25% | 91.25% | 1725 ms | → 0.96x | 5 | 0s | 10d ago | 18m ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 29.96% | 6.43% | 6.43% | 2282 ms | ↑ 1.23x | 3 | 6d 1h | 10d ago | 20m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 99.92% | 96.97% | 96.97% | 3900 ms | ↑ 1.83x | 2 | 0s | 10d ago | 28m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 100.00% | 100.00% | 100.00% | 100.00% | 3152 ms | → 1.00x | 0 | — | — | 16m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.72% | 98.21% | 98.21% | 1402 ms | ↓ 0.90x | 9 | 0s | 10d ago | 18m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.92% | 98.67% | 98.67% | 870 ms | ↑ 1.97x | 2 | 0s | 10d ago | 18m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 88.82% | 88.87% | 88.87% | 2453 ms | ↑ 1.45x | 16 | 2h 28m | 9d ago | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2134 ms | → 1.00x | 0 | — | — | 16m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 95.08% | 95.13% | 95.13% | 2442 ms | ↑ 1.68x | 1 | 18h 20m | 21d ago | 16m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.94% | 90.98% | 90.98% | 2133 ms | ↑ 1.85x | 1 | 0s | 25d ago | 30m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 100.00% | 91.02% | 91.12% | 91.12% | 2746 ms | ↑ 1.10x | 3 | 5h 3m | 10d ago | 16m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 100.00% | 99.68% | 99.72% | 99.72% | 2046 ms | ↑ 1.56x | 7 | 0s | 11d ago | 16m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 97.19% | 97.23% | 97.23% | 1312 ms | → 0.95x | 5 | 2h 32m | 10d ago | 17m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.72% | 95.49% | 95.49% | 2521 ms | ↑ 2.08x | 9 | 0s | 10d ago | 18m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.86% | 98.68% | 98.68% | 1074 ms | ↑ 1.33x | 3 | 3m | 11d ago | 27m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 92.76% | 92.80% | 92.80% | 2214 ms | ↑ 1.08x | 76 | 15m | 11d ago | 16m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 92.65% | 94.62% | 94.62% | 1671 ms | ↑ 1.29x | 22 | 1h 49m | 10d ago | 17m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 92.00% | 92.11% | 92.11% | 1359 ms | ↑ 1.32x | 1 | 12h 47m | 11d ago | 16m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2339 ms | → 1.00x | 0 | — | — | 16m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.78% | 75.55% | 75.55% | 2387 ms | ↑ 1.40x | 6 | 2m | 10d ago | 18m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.97% | 99.98% | 99.98% | 859 ms | ↓ 0.86x | 0 | — | — | 25m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 99.50% | 99.71% | 99.71% | 3489 ms | ↑ 1.56x | 14 | 2m | 9d ago | 25m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 97.65% | 99.14% | 99.14% | 3643 ms | ↑ 2.43x | 64 | 3m | 9d ago | 26m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 95.14% | 93.65% | 93.65% | 2247 ms | ↓ 0.92x | 117 | 5m | 10d ago | 17m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 98.48% | 98.54% | 98.54% | 1511 ms | ↑ 1.05x | 3 | 1h 20m | 17d ago | 16m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 100.00% | 92.16% | 97.85% | 97.85% | 666 ms | → 1.01x | 79 | 26m | 11d ago | 25m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2500 ms | → 1.00x | 0 | — | — | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.94% | 100.00% | 100.00% | 803 ms | → 0.99x | 0 | — | — | 16m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 2815 ms | → 1.00x | 0 | — | — | 16m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 100.00% | 46.94% | 88.23% | 88.23% | 1302 ms | ↑ 1.29x | 4 | 3d 12h | 10d ago | 20m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 99.72% | 99.44% | 99.44% | 2321 ms | ↑ 1.71x | 9 | 0s | 12d ago | 25m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.83% | 99.83% | 99.83% | 2877 ms | ↑ 1.53x | 5 | 0s | 10d ago | 24m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.92% | 99.95% | 99.95% | 1593 ms | ↑ 1.87x | 2 | 0s | 10d ago | 17m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 100.00% | 97.88% | 96.46% | 96.46% | 3184 ms | ↑ 2.07x | 65 | 2m | 8d ago | 18m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 91.04% | 91.11% | 91.11% | 2149 ms | ↑ 1.38x | 3 | 11h 20m | 11d ago | 16m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 96.87% | 96.91% | 96.91% | 1299 ms | ↓ 0.72x | 18 | 42m | 9d ago | 17m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 568 ms | → 1.00x | 0 | — | — | 16m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 98.47% | 97.55% | 97.55% | 1142 ms | ↑ 2.49x | 14 | 29m | 10d ago | 20m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.89% | 94.97% | 94.97% | 2513 ms | ↑ 2.46x | 3 | 0s | 10d ago | 18m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 98.16% | 45.46% | 45.46% | 800 ms | → 1.05x | 49 | 4m | 7d ago | 19m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 100.00% | 95.16% | 97.01% | 97.01% | 3563 ms | ↑ 1.97x | 6 | 4h 40m | 12d ago | 26m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 87.30% | 42.07% | 42.07% | 405 ms | ↑ 1.18x | 18 | 4h 9m | 12d ago | 18m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2146 ms | → 1.00x | 0 | — | — | 16m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 99.67% | 99.56% | 99.56% | 2179 ms | ↓ 0.84x | 11 | 0s | 10d ago | 24m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 97.48% | 97.51% | 97.51% | 3244 ms | ↑ 2.21x | 6 | 2h 13m | 10d ago | 17m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.72% | 91.26% | 91.26% | 768 ms | → 1.01x | 9 | 0s | 10d ago | 18m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 96.96% | 97.00% | 97.00% | 1587 ms | ↑ 1.28x | 3 | 4h 10m | 11d ago | 16m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.80% | 99.86% | 99.86% | 652 ms | ↓ 0.78x | 5 | 2m | 10d ago | 17m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 98.38% | 96.38% | 96.38% | 1675 ms | ↓ 0.95x | 47 | 2m | 10d ago | 17m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 95.88% | 95.92% | 95.92% | 2135 ms | ↑ 2.06x | 3 | 5h 3m | 13d ago | 16m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 98.38% | 36.69% | 36.69% | 892 ms | ↑ 1.06x | 47 | 2m | 12d ago | 19m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.89% | 68.52% | 68.52% | 1156 ms | ↑ 1.08x | 3 | 0s | 10d ago | 18m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 99.89% | 97.15% | 97.15% | 3304 ms | ↑ 2.25x | 3 | 0s | 10d ago | 18m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 100.00% | 99.94% | 34.57% | 34.57% | 1070 ms | ↓ 0.44x | 1 | 0s | 12d ago | 25m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 2218 ms | → 1.00x | 0 | — | — | 16m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 98.58% | 97.67% | 97.67% | 2178 ms | ↑ 2.27x | 24 | 11m | 10d ago | 20m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 99.55% | 98.99% | 98.99% | 1982 ms | ↑ 1.36x | 15 | 0s | 9d ago | 18m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.55% | 86.28% | 86.28% | 2180 ms | ↑ 1.12x | 4 | 28m | 10d ago | 18m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.78% | 99.47% | 99.47% | 1948 ms | ↑ 1.54x | 7 | 0s | 10d ago | 18m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 98.24% | 97.52% | 97.52% | 938 ms | ↓ 0.75x | 3 | 3h 47m | 10d ago | 18m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 100.00% | 29.99% | 15.42% | 15.42% | 1037 ms | ↑ 1.10x | 2 | 9d 1h | 10d ago | 18m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 97.57% | 97.82% | 97.82% | 4680 ms | ↑ 1.46x | 78 | 1m | 9d ago | 29m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.94% | 99.94% | 99.94% | 1326 ms | ↑ 1.14x | 1 | 0s | 7d ago | 25m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 92.43% | 60.95% | 60.95% | 3359 ms | ↑ 2.33x | 9 | 4h 48m | 10d ago | 18m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 100.00% | 75.57% | 75.64% | 75.64% | 244 ms | ↓ 0.53x | 10 | 7h 2m | 9d ago | 16m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.12% | 99.68% | 99.68% | 609 ms | ↓ 0.77x | 10 | 22m | 8d ago | 29m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.73% | 99.58% | 99.58% | 2385 ms | ↑ 1.50x | 42 | 43s | 10d ago | 28m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 60.72% | 60.77% | 60.77% | 1322 ms | → 1.03x | 2 | 3d 2h | 13d ago | 16m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2328 ms | → 1.00x | 0 | — | — | 16m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 99.95% | 100.00% | 100.00% | 2102 ms | ↑ 2.11x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.69% | 98.85% | 98.85% | 431 ms | ↓ 0.88x | 3 | 23m | 26d ago | 19m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 100.00% | 98.58% | 98.17% | 98.17% | 1439 ms | → 1.01x | 15 | 23m | 10d ago | 18m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 93.33% | 93.38% | 93.38% | 1436 ms | ↓ 0.43x | 26 | 42m | 11d ago | 16m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 100.00% | 100.00% | 100.00% | 1938 ms | → 1.00x | 0 | — | — | 16m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2443 ms | → 1.00x | 0 | — | — | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 100.00% | 91.80% | 91.91% | 91.91% | 2016 ms | ↓ 0.87x | 1 | 12h 50m | 11d ago | 16m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 99.69% | 98.03% | 98.03% | 722 ms | ↑ 1.99x | 7 | 9m | 9d ago | 17m ago |
| [Crond](https://lmspeed.net/provider/crond) | 100.00% | 19.06% | 4.10% | 4.10% | 2626 ms | → 1.01x | 1 | 21d 2h | 30d ago | 24m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 100.00% | 93.24% | 91.45% | 91.45% | 2307 ms | ↑ 1.25x | 5 | 7h 54m | 10d ago | 17m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 30.00% | 7.17% | 7.17% | 1199 ms | ↑ 1.50x | 1 | 18d 3h | 30d ago | 19m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.94% | 99.99% | 99.99% | 935 ms | ↑ 1.42x | 1 | 0s | 25d ago | 30m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 99.92% | 99.82% | 99.82% | 703 ms | ↓ 0.81x | 2 | 0s | 15d ago | 29m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.94% | 99.93% | 99.93% | 1171 ms | ↑ 1.76x | 1 | 0s | 21d ago | 28m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 91.28% | 91.39% | 91.39% | 1220 ms | ↓ 0.84x | 1 | 13h 10m | 10d ago | 16m ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 100.00% | 29.86% | 18.26% | 18.26% | 843 ms | ↓ 0.87x | 3 | 6d 1h | 10d ago | 18m ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 97.43% | 97.24% | 97.24% | 1278 ms | ↑ 1.11x | 16 | 47m | 10d ago | 18m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 18.83% | 4.13% | 4.13% | 969 ms | → 0.98x | 2 | 10d 13h | 23d ago | 19m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.63% | 99.72% | 99.72% | 2366 ms | ↑ 1.07x | 3 | 0s | 10d ago | 24m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 99.04% | 98.49% | 98.49% | 4088 ms | ↑ 1.36x | 34 | 0s | 10d ago | 30m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.94% | 99.90% | 99.90% | 949 ms | ↓ 0.78x | 1 | 0s | 17d ago | 28m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.58% | 98.31% | 98.31% | 1206 ms | ↑ 1.16x | 11 | 3m | 10d ago | 18m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 19.15% | 18.27% | 18.27% | 1202 ms | → 0.96x | 1 | 21d 2h | 30d ago | 26m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 100.00% | 97.61% | 97.66% | 97.66% | 1076 ms | ↓ 0.89x | 5 | 1h 26m | 7d ago | 16m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.53% | 99.14% | 99.14% | 1905 ms | ↑ 2.04x | 15 | 40s | 10d ago | 28m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 99.08% | 99.61% | 99.61% | 1224 ms | ↓ 0.90x | 4 | 1h 8m | 10d ago | 24m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 96.66% | 99.24% | 99.24% | 2038 ms | ↑ 1.50x | 82 | 5m | 11d ago | 20m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 19.24% | 30.86% | 30.86% | 712 ms | → 0.98x | 1 | 21d 2h | 30d ago | 29m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 99.39% | 97.66% | 97.66% | 1275 ms | ↑ 1.41x | 20 | 30s | 10d ago | 17m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.92% | 99.94% | 99.94% | 1488 ms | → 1.02x | 2 | 0s | 14d ago | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.72% | 99.77% | 99.77% | 877 ms | ↓ 0.79x | 8 | 1m | 10d ago | 17m ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 100.00% | 94.52% | 94.58% | 94.58% | 563 ms | ↑ 1.41x | 1 | 13h 50m | 16d ago | 16m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 100.00% | 99.89% | 99.84% | 99.84% | 1723 ms | ↑ 1.20x | 3 | 0s | 10d ago | 24m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 99.86% | 99.84% | 99.84% | 2392 ms | ↑ 1.32x | 3 | 3m | 9d ago | 18m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 98.61% | 98.71% | 98.71% | 1462 ms | ↓ 0.89x | 3 | 37m | 10d ago | 16m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.23% | 99.55% | 99.55% | 1005 ms | ↓ 0.84x | 23 | 2m | 13d ago | 29m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 99.86% | 52.00% | 52.00% | 1188 ms | ↓ 0.75x | 4 | 0s | 10d ago | 18m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 100.00% | 99.74% | 99.80% | 99.80% | 1330 ms | ↑ 1.07x | 4 | 0s | 12d ago | 16m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 29.97% | 6.53% | 6.53% | 618 ms | ↓ 0.81x | 2 | 9d 2h | 9d ago | 19m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 99.90% | 99.95% | 99.95% | 1808 ms | ↑ 1.84x | 1 | 0s | 14d ago | 16m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 3041 ms | → 1.00x | 0 | — | — | 16m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.59% | 87.21% | 87.21% | 2384 ms | ↑ 2.57x | 13 | 46s | 10d ago | 28m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 29.65% | 6.36% | 6.36% | 1968 ms | ↓ 0.85x | 12 | 1d 12h | 10d ago | 20m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.47% | 98.47% | 98.47% | 1018 ms | ↓ 0.82x | 18 | 0s | 10d ago | 18m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 19.23% | 76.52% | 76.52% | 2571 ms | → 1.03x | 1 | 21d 2h | 30d ago | 29m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.92% | 99.91% | 99.91% | 1676 ms | ↑ 1.56x | 2 | 0s | 10d ago | 28m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.90% | 99.90% | 1031 ms | → 1.01x | 2 | 0s | 8d ago | 29m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.72% | 99.63% | 99.63% | 1502 ms | ↑ 1.24x | 9 | 0s | 8d ago | 28m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 18.79% | 12.29% | 12.29% | 202 ms | → 1.00x | 1 | 21d 2h | 30d ago | 18m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 99.15% | 99.52% | 99.52% | 1191 ms | → 1.04x | 5 | 50m | 15d ago | 29m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2347 ms | → 1.00x | 0 | — | — | 16m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.87% | 99.94% | 99.94% | 1349 ms | ↑ 1.34x | 1 | 0s | 8d ago | 16m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 99.42% | 98.86% | 98.86% | 2669 ms | ↑ 1.21x | 19 | 32s | 10d ago | 28m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 96.49% | 96.53% | 96.53% | 1958 ms | ↑ 1.26x | 5 | 2h 40m | 11d ago | 16m ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 100.00% | 99.25% | 36.62% | 36.62% | 1697 ms | → 0.98x | 14 | 9m | 10d ago | 27m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 95.94% | 95.98% | 95.98% | 1536 ms | → 1.00x | 9 | 1h 47m | 10d ago | 16m ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 92.43% | 92.47% | 92.47% | 1681 ms | ↑ 1.35x | 54 | 25m | 9d ago | 16m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.86% | 60.89% | 60.89% | 1452 ms | ↑ 2.47x | 4 | 0s | 10d ago | 18m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 100.00% | 99.11% | 98.36% | 98.36% | 1996 ms | → 1.02x | 30 | 20s | 11d ago | 27m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.78% | 99.76% | 99.76% | 2838 ms | ↑ 1.42x | 6 | 2m | 10d ago | 28m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 100.00% | 99.86% | 99.66% | 99.66% | 1570 ms | ↑ 1.27x | 3 | 3m | 11d ago | 29m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.83% | 99.85% | 99.85% | 1732 ms | ↓ 0.85x | 5 | 0s | 10d ago | 24m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 100.00% | 29.73% | 22.75% | 22.75% | 765 ms | ↓ 0.58x | 6 | 3d 1h | 10d ago | 17m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.86% | 99.07% | 99.07% | 2060 ms | ↑ 1.34x | 4 | 0s | 10d ago | 18m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.92% | 58.87% | 58.87% | 1430 ms | ↑ 1.67x | 2 | 0s | 10d ago | 18m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.92% | 95.84% | 95.84% | 862 ms | ↑ 1.54x | 2 | 0s | 10d ago | 18m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 100.00% | 99.92% | 52.32% | 52.32% | 3666 ms | ↑ 2.24x | 2 | 0s | 13d ago | 26m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.78% | 99.64% | 99.64% | 722 ms | ↓ 0.78x | 7 | 0s | 19d ago | 29m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 99.75% | 99.72% | 99.72% | 2254 ms | ↑ 1.06x | 8 | 0s | 14d ago | 29m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.07% | 99.34% | 99.34% | 716 ms | → 1.00x | 79 | 3m | 18d ago | 25m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.92% | 48.33% | 48.33% | 1212 ms | ↑ 2.32x | 2 | 0s | 10d ago | 18m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.92% | 97.87% | 97.87% | 1675 ms | ↑ 1.83x | 2 | 0s | 10d ago | 18m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.69% | 97.30% | 97.30% | 2235 ms | ↑ 2.84x | 9 | 1m | 10d ago | 17m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 43.36% | 19.41% | 19.41% | 2771 ms | ↑ 1.58x | 10 | 1d 10h | 10d ago | 18m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 98.89% | 99.10% | 99.10% | 3072 ms | ↑ 2.45x | 34 | 3m | 7d ago | 24m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.86% | 99.71% | 99.71% | 2277 ms | ↑ 1.60x | 3 | 3m | 19d ago | 29m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.86% | 99.86% | 99.86% | 2256 ms | ↑ 1.65x | 4 | 0s | 10d ago | 18m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 100.00% | 50.75% | 34.15% | 34.15% | 4527 ms | ↑ 1.29x | 5 | 2d 11h | 9d ago | 18m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.11% | 98.98% | 98.98% | 1776 ms | ↑ 1.06x | 30 | 20s | 10d ago | 18m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 100.00% | 100.00% | 100.00% | 100.00% | 492 ms | → 1.00x | 0 | — | — | 16m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 99.69% | 73.05% | 73.05% | 469 ms | ↓ 0.94x | 8 | 3m | 10d ago | 18m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.92% | 99.92% | 99.92% | 186 ms | ↓ 0.21x | 2 | 0s | 22d ago | 29m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.59% | 99.90% | 99.90% | 2613 ms | ↑ 1.76x | 11 | 2m | 10d ago | 28m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.83% | 99.94% | 99.94% | 2445 ms | ↑ 2.88x | 4 | 42s | 10d ago | 24m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.53% | 99.45% | 99.45% | 2700 ms | ↑ 1.45x | 16 | 0s | 9d ago | 29m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 92.66% | 72.97% | 72.97% | 2680 ms | ↑ 1.45x | 76 | 25m | 9d ago | 18m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 99.94% | 81.51% | 81.51% | 563 ms | ↓ 0.93x | 1 | 0s | 10d ago | 18m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 98.38% | 95.31% | 95.31% | 1162 ms | ↑ 1.15x | 52 | 57s | 10d ago | 19m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.92% | 99.96% | 99.96% | 1858 ms | ↑ 1.07x | 2 | 0s | 10d ago | 28m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 99.55% | 97.71% | 97.71% | 787 ms | → 0.99x | 14 | 43s | 10d ago | 17m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 100.00% | 99.59% | 97.87% | 97.87% | 2069 ms | → 1.04x | 13 | 46s | 10d ago | 28m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 18.80% | 4.95% | 4.95% | 1040 ms | → 0.95x | 1 | 21d 2h | 30d ago | 18m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.86% | 99.91% | 99.91% | 916 ms | ↓ 0.92x | 4 | 0s | 10d ago | 17m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 18.80% | 4.30% | 4.30% | 561 ms | → 0.96x | 1 | 21d 2h | 30d ago | 19m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.92% | 51.69% | 51.69% | 2424 ms | ↑ 2.74x | 2 | 0s | 10d ago | 18m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.01% | 59.53% | 59.53% | 1070 ms | → 1.01x | 31 | 1m | 18d ago | 29m ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 100.00% | 57.98% | 58.07% | 58.07% | 439 ms | ↓ 0.81x | 1 | 3d 16h | 13d ago | 16m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 99.61% | 99.68% | 99.68% | 69 ms | ↓ 0.19x | 4 | 3m | 13d ago | 16m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.86% | 98.93% | 98.93% | 2399 ms | ↑ 1.85x | 4 | 0s | 10d ago | 28m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 19.23% | 4.15% | 4.15% | 1824 ms | → 1.03x | 1 | 21d 2h | 30d ago | 28m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 2524 ms | → 1.00x | 0 | — | — | 16m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 29.99% | 7.34% | 7.34% | 2535 ms | ↑ 1.19x | 2 | 9d 2h | 9d ago | 20m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 89.62% | 92.24% | 92.24% | 4464 ms | ↓ 0.74x | 153 | 15m | 9d ago | 28m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.92% | 99.97% | 99.97% | 1891 ms | ↑ 1.13x | 2 | 0s | 10d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 100.00% | 99.63% | 99.75% | 99.75% | 749 ms | ↓ 0.59x | 2 | 0s | 9d ago | 16m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 99.48% | 99.51% | 99.51% | 2012 ms | ↑ 1.93x | 11 | 6m | 13d ago | 29m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 100.00% | 100.00% | 100.00% | 100.00% | 2879 ms | → 1.00x | 0 | — | — | 16m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.97% | 99.36% | 99.36% | 2537 ms | ↑ 2.87x | 0 | — | — | 28m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 99.92% | 99.99% | 99.99% | 957 ms | ↑ 1.48x | 2 | 0s | 14d ago | 30m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 98.54% | 90.76% | 90.76% | 2711 ms | ↓ 0.94x | 50 | 24s | 9d ago | 28m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 96.19% | 96.25% | 96.25% | 2238 ms | ↑ 1.10x | 1 | 9h 60m | 16d ago | 16m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.43% | 99.50% | 99.50% | 1153 ms | ↑ 1.13x | 2 | 25m | 10d ago | 16m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 98.91% | 82.81% | 82.81% | 1771 ms | ↑ 2.63x | 30 | 3m | 10d ago | 18m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 99.48% | 99.55% | 99.55% | 651 ms | ↓ 0.94x | 7 | 0s | 11d ago | 16m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.06% | 99.77% | 99.77% | 1624 ms | → 1.02x | 33 | 0s | 18d ago | 28m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 97.88% | 99.41% | 99.41% | 1078 ms | ↓ 0.90x | 60 | 3m | 14d ago | 29m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 99.83% | 99.69% | 99.69% | 1224 ms | → 0.97x | 4 | 2m | 15d ago | 29m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 84.03% | 58.84% | 58.84% | 582 ms | ↓ 0.86x | 5 | 18h 48m | 10d ago | 17m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.42% | 99.80% | 99.80% | 840 ms | ↓ 0.82x | 20 | 0s | 12d ago | 27m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 97.78% | 81.72% | 81.72% | 1524 ms | ↓ 0.47x | 75 | 31s | 10d ago | 24m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 48.42% | 10.46% | 10.46% | 1984 ms | ↑ 1.07x | 2 | 6d 12h | 10d ago | 30m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.64% | 98.40% | 98.40% | 2011 ms | ↑ 1.08x | 12 | 0s | 10d ago | 18m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.59% | 90.78% | 90.78% | 3808 ms | ↑ 3.07x | 13 | 46s | 10d ago | 30m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 3051 ms | → 1.00x | 0 | — | — | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 99.42% | 98.48% | 98.48% | 712 ms | → 0.96x | 16 | 2m | 11d ago | 18m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.72% | 99.76% | 99.76% | 1766 ms | ↑ 1.81x | 8 | 1m | 10d ago | 17m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 96.12% | 96.25% | 96.25% | 1701 ms | → 1.03x | 80 | 7m | 10d ago | 17m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 19.15% | 16.50% | 16.50% | 872 ms | → 1.00x | 1 | 21d 2h | 30d ago | 27m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.75% | 99.73% | 99.73% | 1688 ms | ↑ 1.47x | 7 | 1m | 10d ago | 18m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | → 1.00x | 0 | — | — | 16m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.80% | 97.49% | 97.49% | 1875 ms | ↑ 2.75x | 6 | 0s | 10d ago | 18m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 100.00% | 95.05% | 92.45% | 92.45% | 2975 ms | ↑ 1.74x | 71 | 15m | 10d ago | 17m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 99.86% | 99.91% | 99.91% | 2101 ms | ↑ 2.33x | 4 | 0s | 12d ago | 27m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 100.00% | 99.88% | 99.94% | 99.94% | 1028 ms | ↓ 0.80x | 1 | 0s | 12d ago | 16m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.64% | 99.85% | 99.85% | 2186 ms | ↑ 2.60x | 6 | 10m | 7d ago | 27m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 2892 ms | → 1.00x | 0 | — | — | 16m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 93.34% | 93.38% | 93.38% | 2328 ms | ↑ 1.44x | 1 | 1d 1h | 21d ago | 16m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 630 ms | ↑ 1.71x | 5 | 0s | 14d ago | 28m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 93.01% | 93.06% | 93.06% | 1351 ms | ↓ 0.79x | 4 | 5h 15m | 12d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.66% | 99.71% | 99.71% | 1031 ms | → 0.99x | 8 | 4m | 10d ago | 17m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.94% | 99.91% | 99.91% | 672 ms | ↓ 0.74x | 1 | 0s | 12d ago | 27m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.58% | 99.71% | 99.71% | 786 ms | ↓ 0.73x | 7 | 10m | 12d ago | 27m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 96.71% | 96.76% | 96.76% | 1668 ms | ↑ 1.80x | 2 | 6h 15m | 11d ago | 16m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.92% | 99.81% | 99.81% | 364 ms | ↓ 0.91x | 2 | 0s | 13d ago | 19m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.70% | 98.97% | 98.97% | 1533 ms | ↑ 1.67x | 7 | 4m | 9d ago | 28m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.94% | 99.99% | 99.99% | 1605 ms | ↑ 1.87x | 1 | 0s | 18d ago | 28m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 99.82% | 94.43% | 91.27% | 91.27% | 1728 ms | ↓ 0.82x | 117 | 7m | 4d ago | 28m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.82% | 97.46% | 97.61% | 97.61% | 3576 ms | ↑ 1.69x | 88 | 20s | 3d ago | 28m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.82% | 99.94% | 99.70% | 99.70% | 1988 ms | ↑ 1.53x | 1 | 0s | 3d ago | 28m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.82% | 99.59% | 98.90% | 98.90% | 2844 ms | ↑ 1.20x | 13 | 47s | 3d ago | 28m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.82% | 99.78% | 99.88% | 99.88% | 1564 ms | ↑ 1.19x | 7 | 0s | 3d ago | 28m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 99.82% | 99.81% | 99.72% | 99.72% | 1714 ms | → 0.97x | 6 | 0s | 3d ago | 28m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.82% | 19.21% | 4.16% | 4.16% | 1468 ms | → 0.99x | 2 | 10d 13h | 3d ago | 28m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.82% | 99.65% | 99.68% | 99.68% | 2200 ms | ↑ 1.43x | 11 | 0s | 3d ago | 28m ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 99.82% | 98.91% | 99.00% | 99.00% | 3028 ms | ↑ 1.10x | 10 | 1m | 3d ago | 28m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 99.82% | 95.09% | 96.09% | 96.09% | 3549 ms | ↑ 1.60x | 44 | 31m | 4h ago | 25m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.82% | 99.78% | 99.86% | 99.86% | 1011 ms | ↓ 0.86x | 7 | 0s | 2d ago | 25m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.82% | 98.36% | 96.61% | 96.61% | 1427 ms | ↓ 0.36x | 52 | 1m | 4d ago | 24m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.82% | 99.89% | 99.72% | 99.72% | 2862 ms | ↑ 2.16x | 3 | 0s | 5d ago | 24m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.82% | 97.92% | 99.53% | 99.53% | 2107 ms | ↑ 2.23x | 62 | 2m | 5d ago | 24m ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.82% | 99.56% | 99.79% | 99.79% | 2514 ms | ↑ 1.65x | 14 | 12s | 6d ago | 24m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.82% | 99.55% | 57.09% | 57.09% | 1239 ms | ↓ 0.87x | 13 | 2m | 6d ago | 18m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.82% | 99.81% | 50.52% | 50.52% | 1596 ms | ↓ 0.86x | 6 | 0s | 16h ago | 18m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.82% | 99.72% | 54.49% | 54.49% | 1314 ms | ↑ 1.06x | 7 | 3m | 7d ago | 18m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.82% | 27.94% | 23.78% | 23.78% | 2261 ms | → 0.96x | 15 | 1d 6h | 6d ago | 18m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.82% | 98.38% | 59.42% | 59.42% | 1272 ms | ↑ 2.24x | 38 | 5m | 3d ago | 18m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.82% | 29.96% | 6.43% | 6.43% | 2218 ms | ↑ 1.16x | 3 | 6d 1h | 5d ago | 20m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 99.82% | 18.76% | 30.78% | 30.78% | 2513 ms | → 1.03x | 2 | 10d 13h | 2d ago | 18m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.82% | 96.62% | 96.52% | 96.52% | 1703 ms | ↑ 1.85x | 28 | 33m | 5d ago | 18m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.82% | 99.33% | 77.29% | 77.29% | 2609 ms | ↑ 2.74x | 18 | 3m | 3d ago | 18m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 99.82% | 99.08% | 73.62% | 73.62% | 2559 ms | ↑ 1.27x | 18 | 15m | 3d ago | 18m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.82% | 99.67% | 75.82% | 75.82% | 2398 ms | ↑ 3.03x | 10 | 59s | 5d ago | 18m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 99.82% | 67.05% | 62.89% | 62.89% | 1588 ms | ↑ 1.38x | 16 | 12h 26m | 5d ago | 18m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.82% | 99.80% | 86.53% | 86.53% | 730 ms | ↓ 0.55x | 6 | 0s | 4d ago | 18m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.82% | 99.53% | 74.05% | 74.05% | 2609 ms | ↑ 3.11x | 15 | 38s | 3d ago | 18m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.82% | 98.74% | 98.75% | 98.75% | 427 ms | ↓ 0.64x | 23 | 9m | 4d ago | 17m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.82% | 99.78% | 98.14% | 98.14% | 1553 ms | ↑ 2.83x | 7 | 0s | 6d ago | 18m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.82% | 99.86% | 84.16% | 84.16% | 2652 ms | ↑ 1.57x | 4 | 0s | 3d ago | 18m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 99.82% | 97.00% | 97.04% | 97.04% | 2070 ms | ↑ 1.61x | 61 | 3m | 2d ago | 16m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.82% | 97.93% | 98.37% | 98.37% | 2358 ms | ↑ 2.51x | 47 | 6m | 5d ago | 17m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.82% | 99.81% | 99.84% | 99.84% | 978 ms | ↓ 0.83x | 5 | 0s | 2d ago | 17m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.82% | 91.69% | 91.76% | 91.76% | 2021 ms | ↑ 1.20x | 8 | 4h 1m | 6d ago | 16m ago |
| [cpa.illsky.com](https://lmspeed.net/provider/cpa-illsky-com) | 99.82% | 90.29% | 90.42% | 90.42% | 1302 ms | ↓ 0.90x | 2 | 6h 30m | 6d ago | 16m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.82% | 91.44% | 91.53% | 91.53% | 1678 ms | ↓ 0.83x | 5 | 3h 19m | 3d ago | 16m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.82% | 95.40% | 95.44% | 95.44% | 2018 ms | ↑ 1.34x | 14 | 59m | 3d ago | 16m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.82% | 90.49% | 90.61% | 90.61% | 2834 ms | ↑ 1.08x | 2 | 6h 15m | 55m ago | 16m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.81% | 99.81% | 99.81% | 99.81% | 3230 ms | → 1.00x | 1 | 0s | 6d ago | 16m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 99.64% | 99.73% | 99.82% | 99.82% | 391 ms | ↓ 0.79x | 2 | 0s | 3d ago | 29m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.64% | 78.08% | 82.76% | 82.76% | 1279 ms | ↓ 0.52x | 494 | 6m | 3d ago | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.64% | 19.17% | 4.14% | 4.14% | 1800 ms | → 1.02x | 3 | 7d 1h | 3d ago | 28m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.64% | 74.79% | 63.47% | 63.47% | 4043 ms | ↓ 0.72x | 587 | 5m | 4h ago | 25m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.64% | 99.61% | 99.83% | 99.83% | 2582 ms | ↑ 1.78x | 8 | 8m | 5d ago | 27m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.64% | 19.58% | 4.22% | 4.22% | 2389 ms | ↑ 1.05x | 4 | 5d 5h | 5d ago | 24m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.64% | 99.75% | 43.33% | 43.33% | 1033 ms | ↓ 0.81x | 7 | 3m | 6d ago | 19m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.64% | 99.16% | 98.79% | 98.79% | 1658 ms | ↑ 1.80x | 27 | 45s | 1d ago | 20m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 99.64% | 18.76% | 4.02% | 4.02% | 1207 ms | → 1.05x | 3 | 7d 1h | 5d ago | 20m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.64% | 39.56% | 25.65% | 25.65% | 2229 ms | ↑ 1.53x | 4 | 3d 19h | 4d ago | 18m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 99.64% | 29.85% | 12.09% | 12.09% | 1553 ms | → 1.02x | 4 | 4d 13h | 3d ago | 18m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.64% | 97.27% | 97.29% | 97.29% | 2957 ms | ↑ 2.91x | 6 | 2h 30m | 2d ago | 17m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.64% | 99.53% | 99.57% | 99.57% | 1806 ms | ↑ 1.46x | 8 | 8m | 2d ago | 16m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.80% | 99.85% | 99.85% | 1315 ms | → 0.98x | 2 | 9m | 1d ago | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.46% | 99.81% | 99.94% | 99.94% | 3567 ms | ↑ 1.81x | 6 | 0s | 3d ago | 29m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.46% | 99.03% | 97.52% | 97.52% | 2913 ms | ↑ 1.24x | 21 | 6m | 2d ago | 24m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.46% | 19.59% | 4.22% | 4.22% | 3005 ms | → 1.02x | 4 | 5d 5h | 1h ago | 24m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.46% | 98.86% | 98.93% | 98.93% | 1656 ms | ↑ 1.23x | 11 | 26m | 2d ago | 24m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.46% | 28.92% | 6.23% | 6.23% | 2359 ms | ↓ 0.80x | 37 | 11h 49m | 2d ago | 24m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.46% | 99.86% | 64.02% | 64.02% | 887 ms | ↓ 0.65x | 3 | 7m | 2d ago | 18m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.45% | 99.13% | 98.21% | 98.21% | 3197 ms | ↑ 2.52x | 28 | 44s | 2d ago | 18m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.45% | 99.78% | 98.73% | 98.73% | 816 ms | ↑ 1.45x | 6 | 2m | 2d ago | 18m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.45% | 96.85% | 96.88% | 96.88% | 3228 ms | ↑ 1.80x | 26 | 30m | 2d ago | 17m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.45% | 99.72% | 99.77% | 99.77% | 2269 ms | ↑ 2.15x | 7 | 6m | 6d ago | 17m ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 99.45% | 81.13% | 81.21% | 81.21% | 635 ms | ↓ 0.55x | 9 | 4h 34m | 3h ago | 16m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.45% | 80.21% | 80.27% | 80.27% | 1095 ms | ↓ 0.93x | 5 | 12h 24m | 5h ago | 16m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.28% | 99.59% | 99.71% | 99.71% | 483 ms | ↓ 0.53x | 12 | 2m | 4d ago | 29m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.28% | 46.84% | 55.07% | 55.07% | 2943 ms | ↓ 0.83x | 541 | 27m | 3d ago | 29m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.28% | 78.78% | 16.95% | 16.95% | 3793 ms | ↑ 1.68x | 7 | 18h 10m | 17h ago | 25m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.28% | 98.89% | 98.56% | 98.56% | 2335 ms | ↓ 0.89x | 35 | 1m | 2d ago | 27m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.27% | 99.25% | 89.24% | 89.24% | 2911 ms | ↑ 1.05x | 26 | 0s | 2d ago | 18m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.27% | 47.65% | 47.69% | 47.69% | 1771 ms | ↓ 0.86x | 35 | 7h 8m | 1d ago | 16m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.27% | 99.69% | 99.74% | 99.74% | 2534 ms | ↑ 1.97x | 10 | 0s | 4d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.27% | 99.83% | 86.34% | 86.34% | 2398 ms | ↑ 2.40x | 5 | 0s | 1d ago | 17m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.11% | 99.83% | 99.95% | 99.95% | 2184 ms | ↑ 1.89x | 5 | 0s | 11h ago | 29m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.10% | 99.15% | 99.26% | 99.26% | 2225 ms | ↓ 0.91x | 29 | 21s | 3d ago | 29m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.09% | 99.14% | 85.36% | 85.36% | 899 ms | ↑ 1.29x | 30 | 0s | 6d ago | 18m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.09% | 98.12% | 98.15% | 98.15% | 1308 ms | ↑ 1.50x | 45 | 5m | 2d ago | 17m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (67)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 98.93% | 78.22% | 83.31% | 83.31% | 4422 ms | ↓ 0.91x | 503 | 6m | 14h ago | 30m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 98.92% | 72.06% | 82.78% | 82.78% | 1490 ms | ↓ 0.22x | 511 | 10m | 22h ago | 28m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.91% | 98.97% | 88.17% | 88.17% | 1316 ms | ↓ 0.58x | 29 | 2m | 2d ago | 18m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 98.91% | 96.23% | 96.26% | 96.26% | 3361 ms | ↑ 3.19x | 34 | 27m | 2d ago | 17m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 98.91% | 88.65% | 88.68% | 88.68% | 3592 ms | ↑ 2.08x | 113 | 25m | 21h ago | 17m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 98.91% | 29.70% | 24.15% | 24.15% | 2360 ms | ↑ 1.52x | 7 | 2d 14h | 1d ago | 17m ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 98.91% | 77.26% | 77.33% | 77.33% | 2615 ms | ↓ 0.94x | 8 | 6h 41m | 1d ago | 16m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 98.75% | 98.02% | 98.11% | 98.11% | 4139 ms | ↑ 1.07x | 21 | 0s | 2d ago | 29m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 98.75% | 99.72% | 90.45% | 90.45% | 934 ms | ↑ 1.38x | 4 | 25m | 5d ago | 28m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 98.74% | 98.50% | 99.17% | 99.17% | 3126 ms | ↑ 1.10x | 25 | 11m | 22h ago | 24m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.72% | 98.88% | 98.94% | 98.94% | 173 ms | ↓ 0.21x | 33 | 2m | 21h ago | 17m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.55% | 79.28% | 84.01% | 84.01% | 4195 ms | ↓ 0.83x | 498 | 5m | 15h ago | 19m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 98.55% | 95.52% | 96.15% | 96.15% | 2556 ms | ↑ 1.24x | 74 | 13m | 23h ago | 19m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 98.55% | 81.68% | 85.36% | 85.36% | 4238 ms | ↓ 0.91x | 389 | 7m | 4d ago | 17m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 98.54% | 31.01% | 31.04% | 31.04% | 858 ms | ↓ 0.67x | 11 | 1d 13h | 2d ago | 17m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.39% | 98.59% | 98.76% | 98.76% | 3598 ms | ↓ 0.91x | 35 | 5m | 17h ago | 28m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.21% | 99.21% | 99.27% | 99.27% | 4226 ms | ↑ 2.00x | 12 | 2m | 19h ago | 30m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.21% | 99.06% | 96.16% | 96.16% | 2621 ms | ↑ 1.39x | 29 | 2m | 6d ago | 28m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 98.18% | 77.46% | 55.76% | 55.76% | 4488 ms | → 0.97x | 522 | 6m | 17h ago | 18m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.18% | 97.29% | 97.20% | 97.20% | 1812 ms | ↓ 0.82x | 72 | 4m | 21h ago | 17m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 97.85% | 80.03% | 83.54% | 83.54% | 4175 ms | ↓ 0.85x | 511 | 4m | 3h ago | 27m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 97.67% | 98.90% | 99.66% | 99.66% | 4298 ms | ↑ 1.41x | 38 | 32s | 2d ago | 29m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 97.67% | 99.42% | 99.87% | 99.87% | 4624 ms | ↑ 3.80x | 20 | 0s | 1d ago | 29m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 97.67% | 97.49% | 99.44% | 99.44% | 4322 ms | ↑ 2.29x | 77 | 2m | 2d ago | 29m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 97.46% | 63.05% | 50.85% | 50.85% | 666 ms | ↓ 0.37x | 11 | 21h 33m | 16h ago | 18m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.27% | 78.67% | 79.35% | 79.35% | 4702 ms | ↑ 1.17x | 505 | 5m | 57m ago | 18m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 97.13% | 99.53% | 99.88% | 99.88% | 1465 ms | ↑ 1.33x | 3 | 1h 27m | 16h ago | 28m ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 97.13% | 18.63% | 4.01% | 4.01% | 891 ms | ↓ 0.95x | 18 | 1d 4h | 9h ago | 25m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 97.09% | 90.29% | 65.14% | 65.14% | 1736 ms | ↑ 1.12x | 41 | 1h 18m | 6h ago | 18m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 97.09% | 75.04% | 75.08% | 75.08% | 4524 ms | ↓ 0.88x | 366 | 10m | 3h ago | 17m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 97.08% | 97.78% | 97.90% | 97.90% | 1218 ms | ↓ 0.82x | 2 | 2h 29m | 5d ago | 16m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 96.95% | 99.39% | 99.71% | 99.71% | 2679 ms | ↑ 2.17x | 6 | 50m | 3d ago | 28m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 96.85% | 96.85% | 96.85% | 96.85% | 2268 ms | → 1.00x | 1 | 3h 45m | 3d ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.76% | 18.33% | 3.94% | 3.94% | 3549 ms | → 1.04x | 26 | 19h 28m | 1h ago | 24m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 96.72% | 88.78% | 88.90% | 88.90% | 2329 ms | → 1.02x | 18 | 43m | 1d ago | 16m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.41% | 78.78% | 70.25% | 70.25% | 4508 ms | ↓ 0.93x | 526 | 5m | 15h ago | 25m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 96.36% | 79.12% | 76.03% | 76.03% | 4771 ms | → 0.96x | 510 | 5m | 7h ago | 18m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 96.23% | 89.17% | 47.32% | 47.32% | 2274 ms | ↑ 1.22x | 175 | 13m | 13h ago | 25m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 95.99% | 78.57% | 77.04% | 77.04% | 2018 ms | ↓ 0.60x | 483 | 6m | 4d ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 95.27% | 96.54% | 94.75% | 94.75% | 3116 ms | ↑ 1.59x | 81 | 6m | 2d ago | 18m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 95.08% | 94.41% | 92.86% | 92.86% | 2661 ms | ↑ 2.03x | 92 | 14m | 1d ago | 17m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 93.74% | 94.52% | 98.60% | 98.60% | 4220 ms | ↑ 1.41x | 143 | 5m | 21h ago | 29m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 92.71% | 74.88% | 74.64% | 74.64% | 4536 ms | ↓ 0.82x | 578 | 7m | 3h ago | 17m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 92.28% | 57.87% | 46.56% | 46.56% | 1296 ms | ↑ 1.32x | 15 | 16h 50m | 2d ago | 25m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 92.22% | 92.22% | 92.22% | 92.22% | 2448 ms | → 1.00x | 1 | 13h 57m | 5d ago | 16m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 92.03% | 20.08% | 5.03% | 5.03% | 4431 ms | ↓ 0.84x | 116 | 4h 8m | 4h ago | 18m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 91.07% | 65.80% | 65.82% | 65.82% | 3178 ms | ↓ 0.75x | 272 | 13m | 2d ago | 30m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 90.34% | 24.08% | 77.15% | 77.15% | 698 ms | ↑ 1.32x | 4 | 5d 6h | 4d ago | 29m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 89.62% | 21.15% | 21.15% | 21.15% | 2962 ms | → 0.97x | 61 | 6h 20m | 36m ago | 17m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 88.91% | 13.71% | 9.23% | 9.23% | 2377 ms | → 1.00x | 2 | 11d 22h | 6d ago | 29m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 87.77% | 38.73% | 38.77% | 38.77% | 4009 ms | → 0.99x | 52 | 5h 4m | 17h ago | 16m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 87.28% | 17.28% | 3.73% | 3.73% | 2322 ms | → 1.04x | 50 | 10h 16m | 16h ago | 28m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 86.40% | 95.95% | 98.76% | 98.76% | 4369 ms | ↑ 1.58x | 91 | 8m | 11h ago | 29m ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 85.82% | 75.03% | 16.15% | 16.15% | 4190 ms | ↑ 3.32x | 117 | 1h 9m | 3h ago | 25m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 83.99% | 86.91% | 75.53% | 75.53% | 1808 ms | ↓ 0.75x | 248 | 11m | 14h ago | 24m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 81.60% | 59.60% | 62.69% | 62.69% | 2670 ms | ↑ 1.49x | 6 | 2d 3h | 5d ago | 17m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 81.33% | 13.92% | 3.85% | 3.85% | 3763 ms | → 0.97x | 5 | 4d 18h | 2d ago | 25m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 79.27% | 14.43% | 6.33% | 6.33% | 4425 ms | ↓ 0.94x | 99 | 5h 20m | 4h ago | 18m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 77.02% | 52.66% | 61.77% | 61.77% | 4781 ms | ↓ 0.90x | 690 | 16m | 45m ago | 25m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 72.64% | 90.98% | 95.95% | 95.95% | 2636 ms | ↑ 3.27x | 7 | 13h 23m | 21h ago | 20m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 71.95% | 69.85% | 69.88% | 69.88% | 533 ms | ↓ 0.53x | 55 | 2h 31m | 3d ago | 16m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 69.59% | 92.23% | 95.67% | 95.67% | 4521 ms | → 1.00x | 171 | 13m | 12h ago | 29m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 60.40% | 64.41% | 64.48% | 64.48% | 1540 ms | ↓ 0.92x | 8 | 12h 2m | 3d ago | 16m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 59.20% | 92.48% | 91.34% | 91.34% | 2065 ms | ↑ 2.61x | 46 | 1h 39m | 2h ago | 17m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 49.73% | 8.91% | 8.50% | 8.50% | 2224 ms | ↑ 1.06x | 7 | 3d 19h | 21h ago | 17m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 12.01% | 31.30% | 85.07% | 85.07% | 1327 ms | ↑ 1.10x | 2 | 10d 19h | 23d ago | 28m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 9.82% | 82.25% | 89.20% | 89.20% | 1226 ms | ↓ 0.31x | 16 | 12h 14m | 9d ago | 18m ago |

</details>

<details open>
<summary><strong>🔴 Down (172)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 89.98% | 35.40% | 35.44% | 35.44% | 944 ms | ↓ 0.83x | 3 | 4d 16h | 18h ago | 16m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 87.43% | 97.35% | 97.67% | 97.67% | 2377 ms | ↑ 2.14x | 16 | 1h 32m | 23h ago | 17m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 86.00% | 97.80% | 90.02% | 90.02% | 504 ms | ↓ 0.69x | 3 | 4h 37m | 18m ago | 18m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 77.34% | 15.56% | 27.89% | 27.89% | 833 ms | → 0.99x | 3 | 7d 14h | 2d ago | 24m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 61.09% | 13.73% | 5.67% | 5.67% | 3564 ms | ↓ 0.70x | 188 | 2h 49m | 1h ago | 18m ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 55.62% | 89.48% | 97.62% | 97.62% | 804 ms | ↓ 0.95x | 11 | 11h 39m | 22h ago | 20m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 36.31% | 45.72% | 45.84% | 45.84% | 2940 ms | → 0.98x | 3 | 1d 14h | 4d ago | 16m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 26.43% | 53.02% | 69.57% | 69.57% | 3396 ms | ↓ 0.54x | 570 | 29m | 3h ago | 30m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 26.05% | 52.28% | 53.76% | 53.76% | 1997 ms | ↑ 1.63x | 6 | 2d 11h | 5d ago | 17m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 25.50% | 87.55% | 87.58% | 87.58% | 1159 ms | ↓ 0.83x | 10 | 12h 5m | 5d ago | 17m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 13.13% | 85.32% | 95.98% | 95.98% | 3332 ms | ↑ 2.28x | 45 | 3h 11m | 6d ago | 24m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 11.86% | 27.89% | 28.02% | 28.02% | 3819 ms | ↑ 1.09x | 2 | 3d 7h | 6d ago | 16m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 4.48% | 14.66% | 14.65% | 14.65% | 1837 ms | → 1.03x | 3 | 3d 5h | 7d ago | 28m ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.18% | 0.09% | 0.09% | 0.09% | 2848 ms | → 1.00x | 2 | 5d 22h | 4d ago | 19m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 80.55% | 95.06% | 95.06% | — | — | 7 | 1d 7h | 9d ago | 28m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 13.20% | 78.68% | 78.68% | — | — | 4 | 6d 16h | 27d ago | 24m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 79.82% | 84.60% | 84.60% | — | — | 29 | 7h 29m | 9d ago | 20m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 6.58% | 6.58% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 9.31% | 14.38% | 14.38% | — | — | 11 | 2d 12h | 9d ago | 30m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 13.80% | 3.90% | 3.90% | — | — | 1 | 26d 13h | 27d ago | 25m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 78.23% | 95.31% | 95.31% | — | — | 80 | 2h 42m | 9d ago | 25m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 41.83% | 41.83% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 30.38% | 30.38% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 63.47% | 85.57% | 85.57% | — | — | 389 | 39m | 9d ago | 29m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 69.63% | 74.95% | 74.95% | — | — | 332 | 42m | 9d ago | 18m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 81.11% | 36.51% | 36.51% | — | — | 3 | 2d 23h | 9d ago | 18m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 80.63% | 95.81% | 95.81% | — | — | 5 | 1d 19h | 9d ago | 29m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 48.33% | 72.15% | 72.15% | — | — | 223 | 1h 45m | 15d ago | 28m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 29m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 21h | 12d ago | 29m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 79.89% | 88.50% | 88.50% | — | — | 32 | 6h 41m | 9d ago | 28m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.48% | 4.48% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 29m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 20.75% | 20.75% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 80.20% | 63.49% | 63.49% | — | — | 27 | 7h 57m | 9d ago | 18m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 45.45% | 45.45% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.67% | 4.31% | 4.31% | — | — | 3 | 9d 22h | 9d ago | 18m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 81.17% | 95.95% | 95.95% | — | — | 1 | 8d 22h | 9d ago | 20m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.61% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 9d ago | 24m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 72.77% | 59.61% | 59.61% | — | — | 36 | 7h 9m | 9d ago | 26m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 16.99% | 34.50% | 34.50% | — | — | 2 | 12d 21h | 26d ago | 18m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 10.94% | 2.36% | 2.36% | — | — | 7 | 3d 21h | 9d ago | 25m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 62.72% | 62.72% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 60.02% | 30.29% | 30.29% | — | — | 392 | 43m | 9d ago | 18m ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 15.49% | 15.49% | — | — | 1 | 29d 24h | 30d ago | 20m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 79.64% | 34.74% | 34.74% | — | — | 50 | 4h 18m | 9d ago | 19m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.61% | 0.14% | 0.14% | — | — | 2 | 14d 22h | 9d ago | 25m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 65.75% | 65.75% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 28m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 7.90% | 7.90% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 75.63% | 75.63% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 80.32% | 95.75% | 95.75% | — | — | 16 | 13h 23m | 9d ago | 29m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 21h | 12d ago | 29m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 12.35% | 12.35% | 12.35% | — | — | 5 | 4d 24h | 25d ago | 17m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 59.99% | 91.34% | 91.34% | — | — | 165 | 1h 54m | 9d ago | 24m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 58.61% | 90.90% | 90.90% | — | — | 211 | 1h 29m | 9d ago | 29m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 17h | 25d ago | 17m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 28.16% | 43.43% | 43.43% | — | — | 5 | 4d 14h | 23d ago | 17m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 15.57% | 15.57% | 15.57% | — | — | 5 | 4d 11h | 22d ago | 17m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 60.80% | 60.80% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 29m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 0.00% | 49.79% | 88.12% | 88.12% | — | — | 327 | 1h 6m | 9d ago | 30m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 53.69% | 53.69% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 30m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 21d 21h | 22d ago | 16m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 80.64% | 95.76% | 95.76% | — | — | 4 | 2d 5h | 9d ago | 30m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.06% | 67.59% | 67.59% | — | — | 3 | 9d 24h | 21d ago | 24m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.58% | 44.92% | 44.92% | — | — | 2 | 14d 22h | 9d ago | 29m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 22h | 12d ago | 28m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 76.45% | 82.79% | 82.79% | — | — | 13 | 18h 32m | 10d ago | 17m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 19h | 12d ago | 19m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 51.42% | 38.72% | 38.72% | — | — | 594 | 30m | 9d ago | 18m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 11.50% | 3.04% | 3.04% | — | — | 4 | 6d 18h | 9d ago | 18m ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 47.97% | 47.97% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 79.86% | 95.66% | 95.66% | — | — | 22 | 9h 52m | 9d ago | 24m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 81.03% | 39.01% | 39.01% | — | — | 3 | 2d 23h | 9d ago | 18m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 80.63% | 95.63% | 95.63% | — | — | 5 | 1d 19h | 9d ago | 29m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 60.53% | 60.55% | 60.55% | — | — | 1 | 8d 22h | 9d ago | 29m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 57.80% | 57.02% | 57.02% | — | — | 4 | 3d 21h | 16d ago | 18m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 75.01% | 92.94% | 92.94% | — | — | 172 | 1h 17m | 9d ago | 29m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.58% | 0.13% | 0.13% | — | — | 18 | 1d 16h | 10d ago | 24m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 17h | 25d ago | 17m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 19h | 12d ago | 20m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 59.13% | 91.13% | 91.13% | — | — | 58 | 5h 53m | 14d ago | 24m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 81.20% | 82.97% | 82.97% | — | — | 2 | 4d 11h | 9d ago | 17m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.12% | 4.12% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 49.88% | 49.88% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 60.01% | 89.34% | 89.34% | — | — | 274 | 1h 4m | 9d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 46.91% | 68.13% | 68.13% | — | — | 638 | 31m | 9d ago | 25m ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 21h | 12d ago | 27m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 32.69% | 32.69% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 0.00% | 30.75% | 30.83% | 30.83% | — | — | 24 | 10h 4m | 9d ago | 16m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 17.05% | 18.10% | 18.10% | — | — | 460 | 1h 10m | 9d ago | 18m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 27.84% | 27.84% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 21h | 12d ago | 28m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 80.06% | 85.45% | 85.45% | — | — | 38 | 5h 38m | 9d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 20.17% | 20.17% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 57.17% | 57.17% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 63.70% | 63.70% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 0.00% | 81.01% | 95.67% | 95.67% | — | — | 5 | 1d 19h | 9d ago | 20m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 80.99% | 95.74% | 95.74% | — | — | 6 | 1d 12h | 9d ago | 19m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 73.65% | 73.69% | 73.69% | — | — | 7 | 1d 7h | 9d ago | 16m ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 51.08% | 89.41% | 89.41% | — | — | 1 | 17d 4h | 17d ago | 24m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 29.83% | 6.41% | 6.41% | — | — | 3 | 7d 6h | 9d ago | 19m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 13d 23h | 14d ago | 16m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 28m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 80.71% | 95.84% | 95.84% | — | — | 2 | 4d 11h | 9d ago | 28m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 21h | 12d ago | 29m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 78.97% | 94.59% | 94.59% | — | — | 52 | 4h 9m | 9d ago | 28m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 49.57% | 73.79% | 73.79% | — | — | 592 | 31m | 9d ago | 30m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 44.02% | 86.64% | 86.64% | — | — | 19 | 23h 41m | 19d ago | 28m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 79.12% | 94.43% | 94.43% | — | — | 57 | 3h 46m | 9d ago | 28m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 22.85% | 22.85% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 80.95% | 39.82% | 39.82% | — | — | 9 | 23h 44m | 9d ago | 19m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 8.11% | 78.86% | 78.86% | — | — | 2 | 13d 23h | 16d ago | 28m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 22.86% | 33.46% | 33.46% | — | — | 104 | 5h 18m | 13d ago | 18m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 7.42% | 10.06% | 10.06% | — | — | 1 | 28d 4h | 28d ago | 18m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 67.75% | 75.89% | 75.89% | — | — | 351 | 40m | 9d ago | 30m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 1.32% | 78.11% | 78.11% | — | — | 1 | 29d 16h | 30d ago | 28m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 72.97% | 73.00% | 73.00% | — | — | 3 | 3d 4h | 9d ago | 17m ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 13.58% | 20.39% | 20.39% | — | — | 2 | 13d 7h | 27d ago | 17m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 11d 20h | 12d ago | 28m ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 25m ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 20.75% | 20.75% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 4.10% | 4.23% | 4.23% | — | — | 2 | 4d 17h | 9d ago | 16m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 20.62% | 20.72% | 20.72% | — | — | 2 | 4d 17h | 9d ago | 16m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 57.68% | 57.68% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 80.69% | 95.80% | 95.80% | — | — | 5 | 1d 19h | 9d ago | 27m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 77.26% | 78.61% | 78.61% | — | — | 8 | 1d 6h | 10d ago | 17m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 24m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 47.83% | 47.83% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 51.75% | 89.59% | 89.59% | — | — | 2 | 8d 11h | 17d ago | 28m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 76.46% | 93.32% | 93.32% | — | — | 157 | 1h 22m | 9d ago | 23m ago |

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
