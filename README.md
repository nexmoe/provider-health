# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**688 providers** — 0 🟢 operational · 387 🟡 degraded · 299 🔴 down · 2 ⚫ unknown

_Updated 2026-07-11 05:44 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (0)</strong></summary>

_none_

</details>

<details open>
<summary><strong>🟡 Degraded (387)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 78.79% | 78.79% | — | — | — | → 1.00x | 0 | — | — | 41m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 76.92% | 76.92% | 76.22% | 76.22% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 76.92% | 76.92% | 94.26% | 94.26% | 638 ms | → 1.00x | 0 | — | — | 43m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 76.92% | 76.92% | 74.11% | 74.11% | 891 ms | → 1.00x | 6 | 1h 20m | 3d ago | 43m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 76.92% | 76.92% | 24.43% | 24.43% | 3243 ms | → 1.00x | 0 | — | — | 43m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 76.92% | 76.92% | 97.57% | 97.57% | 2746 ms | → 1.00x | 0 | — | — | 44m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 76.92% | 76.92% | 97.94% | 97.94% | 2261 ms | → 1.00x | 2 | 30m | 7d ago | 43m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 76.92% | 76.92% | 98.73% | 98.73% | 859 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 76.92% | 76.92% | 99.61% | 99.61% | 3154 ms | → 1.00x | 0 | — | — | 44m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 76.92% | 76.92% | 97.21% | 97.21% | 2484 ms | → 1.00x | 0 | — | — | 43m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 76.92% | 76.92% | 98.92% | 98.92% | 1258 ms | → 1.00x | 0 | — | — | 44m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 76.92% | 76.92% | 80.20% | 80.20% | 1338 ms | → 1.00x | 4 | 0s | 4d ago | 43m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 76.92% | 76.92% | 83.18% | 83.18% | 1664 ms | → 1.00x | 4 | 51s | 8d ago | 43m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 76.92% | 76.92% | 97.90% | 97.90% | 1298 ms | → 1.00x | 0 | — | — | 43m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 76.92% | 76.92% | 99.98% | 99.98% | 353 ms | → 1.00x | 1 | 0s | 19d ago | 44m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 76.92% | 76.92% | 99.76% | 99.76% | 3503 ms | → 1.00x | 1 | 0s | 19d ago | 44m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 76.92% | 76.92% | 99.02% | 99.02% | 4009 ms | → 1.00x | 5 | 0s | 12d ago | 44m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 76.92% | 76.92% | 99.85% | 99.85% | 2993 ms | → 1.00x | 0 | — | — | 43m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 76.92% | 76.92% | 22.30% | 22.30% | 3302 ms | → 1.00x | 21 | 0s | 4d ago | 43m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 76.92% | 76.92% | 77.28% | 77.28% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 76.92% | 76.92% | 47.85% | 47.85% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 76.92% | 76.92% | 97.57% | 97.57% | 1945 ms | → 1.00x | 7 | 0s | 5d ago | 43m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 76.92% | 76.92% | 97.00% | 97.00% | 513 ms | → 1.00x | 0 | — | — | 43m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 76.92% | 76.92% | 1.90% | 1.90% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 76.92% | 76.92% | 57.00% | 57.00% | 741 ms | → 1.00x | 0 | — | — | 43m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 76.92% | 76.92% | 99.65% | 99.65% | 2783 ms | → 1.00x | 0 | — | — | 43m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 76.92% | 76.92% | 66.50% | 66.50% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 76.92% | 76.92% | 99.18% | 99.18% | 795 ms | → 1.00x | 1 | 0s | 28d ago | 43m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 76.92% | 76.92% | 84.58% | 84.58% | 2075 ms | → 1.00x | 0 | — | — | 43m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 76.92% | 76.92% | 68.50% | 68.50% | 1166 ms | → 1.00x | 2 | 10m | 21d ago | 43m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 76.92% | 76.92% | 93.26% | 93.26% | 537 ms | → 1.00x | 0 | — | — | 43m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 76.92% | 76.92% | 56.98% | 56.98% | 1338 ms | → 1.00x | 8 | 0s | 17d ago | 44m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 76.92% | 76.92% | 38.65% | 38.65% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 76.92% | 76.92% | 83.46% | 83.46% | 1953 ms | → 1.00x | 2 | 0s | 4d ago | 43m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 76.92% | 76.92% | 64.92% | 64.92% | 525 ms | → 1.00x | 2 | 0s | 21d ago | 43m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 76.92% | 76.92% | 99.34% | 99.34% | 2290 ms | → 1.00x | 3 | 8h 57m | 26d ago | 43m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 76.92% | 76.92% | 62.65% | 62.65% | 1278 ms | → 1.00x | 0 | — | — | 43m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 76.92% | 76.92% | 65.57% | 65.57% | 934 ms | → 1.00x | 0 | — | — | 43m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 76.92% | 76.92% | 90.95% | 90.95% | 1669 ms | → 1.00x | 3 | 0s | 9d ago | 43m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 76.92% | 76.92% | 99.61% | 99.61% | 500 ms | → 1.00x | 0 | — | — | 43m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 76.92% | 76.92% | 0.11% | 0.11% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 76.92% | 76.92% | 98.00% | 98.00% | 682 ms | → 1.00x | 1 | 12h 2m | 26d ago | 43m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 76.92% | 76.92% | 22.94% | 22.94% | 981 ms | → 1.00x | 1 | 0s | 18d ago | 44m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 76.92% | 76.92% | 99.74% | 99.74% | 1605 ms | → 1.00x | 1 | 4s | 5d ago | 44m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 76.92% | 76.92% | 99.09% | 99.09% | 2662 ms | → 1.00x | 0 | — | — | 44m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 76.92% | 76.92% | 99.49% | 99.49% | 3250 ms | → 1.00x | 3 | 9h 27m | 14d ago | 44m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 76.92% | 76.92% | 99.90% | 99.90% | 782 ms | → 1.00x | 1 | 0s | 19d ago | 44m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 76.92% | 76.92% | 77.59% | 77.59% | 2350 ms | → 1.00x | 0 | — | — | 43m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 76.92% | 76.92% | 75.23% | 75.23% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 76.92% | 76.92% | 99.65% | 99.65% | 1530 ms | → 1.00x | 0 | — | — | 44m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 76.92% | 76.92% | 90.32% | 90.32% | 916 ms | → 1.00x | 0 | — | — | 43m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 76.92% | 76.92% | 28.39% | 28.39% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 76.92% | 76.92% | 99.03% | 99.03% | 2509 ms | → 1.00x | 0 | — | — | 43m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 76.92% | 76.92% | 26.84% | 26.84% | 1634 ms | → 1.00x | 0 | — | — | 43m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 76.92% | 76.92% | 99.98% | 99.98% | 830 ms | → 1.00x | 1 | 4m | 8d ago | 44m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 76.92% | 76.92% | 99.94% | 99.94% | 740 ms | → 1.00x | 0 | — | — | 44m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 76.92% | 76.92% | 99.74% | 99.74% | 2387 ms | → 1.00x | 2 | 0s | 18d ago | 44m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 76.92% | 76.92% | 99.75% | 99.75% | 377 ms | → 1.00x | 0 | — | — | 44m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 76.92% | 76.92% | 99.77% | 99.77% | 1360 ms | → 1.00x | 0 | — | — | 43m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 76.92% | 76.92% | 99.92% | 99.92% | 2541 ms | → 1.00x | 0 | — | — | 44m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 76.92% | 76.92% | 98.93% | 98.93% | 1369 ms | → 1.00x | 8 | 10m | 8d ago | 43m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 76.92% | 76.92% | 98.00% | 98.00% | 1284 ms | → 1.00x | 0 | — | — | 44m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 76.92% | 76.92% | 99.68% | 99.68% | 2152 ms | → 1.00x | 0 | — | — | 43m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 76.92% | 76.92% | 99.37% | 99.37% | 1716 ms | → 1.00x | 0 | — | — | 43m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 76.92% | 76.92% | 99.96% | 99.96% | 985 ms | → 1.00x | 0 | — | — | 44m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 76.92% | 76.92% | 99.48% | 99.48% | 2536 ms | → 1.00x | 0 | — | — | 43m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 76.92% | 76.92% | 99.73% | 99.73% | 275 ms | → 1.00x | 10 | 10m | 18d ago | 44m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 76.92% | 76.92% | 99.83% | 99.83% | 1376 ms | → 1.00x | 0 | — | — | 43m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 76.92% | 76.92% | 99.28% | 99.28% | 628 ms | → 1.00x | 3 | 0s | 4d ago | 44m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 76.92% | 76.92% | 99.88% | 99.88% | 1883 ms | → 1.00x | 0 | — | — | 43m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 76.92% | 76.92% | 99.74% | 99.74% | 1707 ms | → 1.00x | 6 | 1h 5m | 3d ago | 44m ago |
| [Groq](https://lmspeed.net/provider/groq) | 76.92% | 76.92% | 76.97% | 76.97% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 76.92% | 76.92% | 30.20% | 30.20% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 76.92% | 76.92% | 91.09% | 91.09% | 909 ms | → 1.00x | 5 | 0s | 13d ago | 43m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 76.92% | 76.92% | 99.65% | 99.65% | 526 ms | → 1.00x | 0 | — | — | 44m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 76.92% | 76.92% | 96.18% | 96.18% | 2602 ms | → 1.00x | 4 | 41m | 11d ago | 43m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 76.92% | 76.92% | 63.14% | 63.14% | 1250 ms | → 1.00x | 1 | 0s | 4d ago | 43m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 76.92% | 76.92% | 24.91% | 24.91% | 634 ms | → 1.00x | 2 | 0s | 15d ago | 43m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 76.92% | 76.92% | 17.47% | 17.47% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 76.92% | 76.92% | 58.17% | 58.17% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 76.92% | 76.92% | 99.78% | 99.78% | 2408 ms | → 1.00x | 0 | — | — | 44m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 76.92% | 76.92% | 66.42% | 66.42% | 1445 ms | → 1.00x | 1 | 2h 38m | 21d ago | 43m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 76.92% | 76.92% | 99.00% | 99.00% | 2434 ms | → 1.00x | 1 | 30m | 25d ago | 43m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 76.92% | 76.92% | 99.90% | 99.90% | 670 ms | → 1.00x | 0 | — | — | 44m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 76.92% | 76.92% | 99.92% | 99.92% | 986 ms | → 1.00x | 0 | — | — | 44m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 76.92% | 76.92% | 70.89% | 70.89% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 76.92% | 76.92% | 71.79% | 71.79% | 1091 ms | → 1.00x | 0 | — | — | 43m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 76.92% | 76.92% | 82.26% | 82.26% | 1718 ms | → 1.00x | 0 | — | — | 43m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 76.92% | 76.92% | 99.80% | 99.80% | 1528 ms | → 1.00x | 0 | — | — | 44m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 76.92% | 76.92% | 38.36% | 38.36% | 1722 ms | → 1.00x | 12 | 3h 31m | 23d ago | 43m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 76.92% | 76.92% | 22.33% | 22.33% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 76.92% | 76.92% | 99.35% | 99.35% | 2190 ms | → 1.00x | 0 | — | — | 43m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 76.92% | 76.92% | 98.93% | 98.93% | 2620 ms | → 1.00x | 2 | 0s | 5d ago | 44m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 76.92% | 76.92% | 69.43% | 69.43% | 1184 ms | → 1.00x | 2 | 0s | 17d ago | 43m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 76.92% | 76.92% | 96.88% | 96.88% | 1098 ms | → 1.00x | 0 | — | — | 43m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 76.92% | 76.92% | 24.53% | 24.53% | 1797 ms | → 1.00x | 1 | 0s | 18d ago | 43m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 76.92% | 76.92% | 60.60% | 60.60% | 1240 ms | → 1.00x | 0 | — | — | 43m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 76.92% | 76.92% | 98.38% | 98.38% | 1607 ms | → 1.00x | 2 | 3h 26m | 15d ago | 43m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 76.92% | 76.92% | 99.89% | 99.89% | 1943 ms | → 1.00x | 0 | — | — | 43m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 76.92% | 76.92% | 69.87% | 69.87% | 1495 ms | → 1.00x | 9 | 0s | 5d ago | 43m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 76.92% | 76.92% | 99.31% | 99.31% | 2059 ms | → 1.00x | 0 | — | — | 43m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 76.92% | 76.92% | 81.07% | 81.07% | 1516 ms | → 1.00x | 0 | — | — | 43m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 76.92% | 76.92% | 99.91% | 99.91% | 1814 ms | → 1.00x | 0 | — | — | 44m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 76.92% | 76.92% | 99.95% | 99.95% | 1616 ms | → 1.00x | 1 | 0s | 23d ago | 43m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 76.92% | 76.92% | 99.56% | 99.56% | 3163 ms | → 1.00x | 1 | 0s | 26d ago | 44m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 76.92% | 76.92% | 81.53% | 81.53% | 1634 ms | → 1.00x | 0 | — | — | 43m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 76.92% | 76.92% | 96.32% | 96.32% | 1403 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 76.92% | 76.92% | 5.16% | 5.16% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 76.92% | 76.92% | 99.97% | 99.97% | 1838 ms | → 1.00x | 0 | — | — | 44m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 76.92% | 76.92% | 76.88% | 76.88% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 76.92% | 76.92% | 63.68% | 63.68% | 2108 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 76.92% | 76.92% | 99.58% | 99.58% | 2447 ms | → 1.00x | 19 | 2m | 5d ago | 44m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 76.92% | 76.92% | 44.95% | 44.95% | 337 ms | → 1.00x | 0 | — | — | 44m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 76.92% | 76.92% | 98.94% | 98.94% | 1094 ms | → 1.00x | 1 | 0s | 9d ago | 44m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 76.92% | 76.92% | 95.68% | 95.68% | 2715 ms | → 1.00x | 2 | 4d 7h | 19d ago | 44m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 76.92% | 76.92% | 25.33% | 25.33% | 878 ms | → 1.00x | 3 | 0s | 15d ago | 43m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 76.92% | 76.92% | 93.77% | 93.77% | 4840 ms | → 1.00x | 0 | — | — | 44m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 76.92% | 76.92% | 99.58% | 99.58% | 1300 ms | → 1.00x | 1 | 2h | 2d ago | 44m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 76.92% | 76.92% | 99.97% | 99.97% | 1608 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 76.92% | 76.92% | 49.74% | 49.74% | 1400 ms | → 1.00x | 6 | 35m | 12d ago | 44m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 76.92% | 76.92% | 99.60% | 99.60% | 2445 ms | → 1.00x | 1 | 2s | 4d ago | 44m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 76.92% | 76.92% | 99.49% | 99.49% | 889 ms | → 1.00x | 0 | — | — | 44m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 76.92% | 76.92% | 99.98% | 99.98% | 965 ms | → 1.00x | 1 | 4m | 8d ago | 44m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 76.92% | 76.92% | 89.02% | 89.02% | 1078 ms | → 1.00x | 1 | 4d 17h | 30d ago | 44m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 76.92% | 76.92% | 51.42% | 51.42% | 3174 ms | → 1.00x | 9 | 31m | 7d ago | 44m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 76.92% | 76.92% | 96.43% | 96.43% | 2121 ms | → 1.00x | 3 | 1d 4h | 2d ago | 44m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 76.92% | 76.92% | 89.57% | 89.57% | 1832 ms | → 1.00x | 0 | — | — | 43m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 76.92% | 76.92% | 99.81% | 99.81% | 1294 ms | → 1.00x | 0 | — | — | 44m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 76.92% | 76.92% | 99.87% | 99.87% | 2382 ms | → 1.00x | 2 | 0s | 10d ago | 44m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 76.92% | 76.92% | 99.84% | 99.84% | 706 ms | → 1.00x | 0 | — | — | 44m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 76.92% | 76.92% | 98.90% | 98.90% | 1522 ms | → 1.00x | 1 | 1h 60m | 20d ago | 43m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 76.92% | 76.92% | 74.00% | 74.00% | 1308 ms | → 1.00x | 18 | 55m | 6d ago | 43m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 76.92% | 76.92% | 98.88% | 98.88% | 1406 ms | → 1.00x | 0 | — | — | 43m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 76.92% | 76.92% | 98.78% | 98.78% | 1840 ms | → 1.00x | 1 | 0s | 4d ago | 44m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 76.92% | 76.92% | 76.89% | 76.89% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 76.92% | 76.92% | 99.92% | 99.92% | 1342 ms | → 1.00x | 1 | 0s | 4d ago | 44m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 76.92% | 76.92% | 89.40% | 89.40% | 2111 ms | → 1.00x | 0 | — | — | 43m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 76.92% | 76.92% | 96.73% | 96.73% | 2761 ms | → 1.00x | 1 | 0s | 22d ago | 43m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 76.92% | 76.92% | 99.87% | 99.87% | 1560 ms | → 1.00x | 1 | 0s | 4d ago | 44m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 76.92% | 76.92% | 99.85% | 99.85% | 1740 ms | → 1.00x | 2 | 0s | 3d ago | 44m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 76.92% | 76.92% | 99.92% | 99.92% | 1052 ms | → 1.00x | 1 | 0s | 2d ago | 44m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 76.92% | 76.92% | 24.63% | 24.63% | 2319 ms | → 1.00x | 1 | 0s | 22d ago | 43m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 76.92% | 76.92% | 99.62% | 99.62% | 1852 ms | → 1.00x | 2 | 1h 60m | 4d ago | 44m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 76.92% | 76.92% | 99.79% | 99.79% | 1584 ms | → 1.00x | 4 | 0s | 3d ago | 43m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 76.92% | 76.92% | 100.00% | 100.00% | 967 ms | → 1.00x | 0 | — | — | 44m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 76.32% | 76.32% | 98.47% | 98.47% | 720 ms | → 1.00x | 0 | — | — | 42m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 76.32% | 76.32% | 99.45% | 99.45% | 776 ms | → 1.00x | 2 | 3h 1m | 9d ago | 42m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 76.32% | 76.32% | 99.61% | 99.61% | 760 ms | → 1.00x | 4 | 35m | 19d ago | 41m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 76.32% | 76.32% | 95.85% | 95.85% | 1818 ms | → 1.00x | 0 | — | — | 42m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 76.32% | 76.32% | 99.95% | 99.95% | 2112 ms | → 1.00x | 1 | 0s | 22d ago | 42m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 76.32% | 76.32% | 98.81% | 98.81% | 1023 ms | → 1.00x | 0 | — | — | 42m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 76.32% | 76.32% | 97.00% | 97.00% | 1141 ms | → 1.00x | 4 | 1h 51m | 5d ago | 42m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 76.32% | 76.32% | 64.61% | 64.61% | 2452 ms | → 1.00x | 3 | 4d 19h | 10d ago | 42m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 76.32% | 76.32% | 99.08% | 99.08% | 622 ms | → 1.00x | 0 | — | — | 42m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 76.32% | 76.32% | 100.00% | 100.00% | 1378 ms | → 1.00x | 0 | — | — | 41m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 76.32% | 76.32% | 99.87% | 99.87% | 1152 ms | → 1.00x | 1 | 0s | 15d ago | 42m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 76.32% | 76.32% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 7d ago | 42m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 76.32% | 76.32% | 99.97% | 99.97% | 900 ms | → 1.00x | 0 | — | — | 42m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 76.32% | 76.32% | 99.94% | 99.94% | 1435 ms | → 1.00x | 1 | 0s | 20d ago | 42m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 76.32% | 76.32% | 98.56% | 98.56% | 2417 ms | → 1.00x | 0 | — | — | 42m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 76.32% | 76.32% | 99.67% | 99.67% | 1211 ms | → 1.00x | 2 | 29m | 26d ago | 42m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 76.32% | 76.32% | 99.95% | 99.95% | 859 ms | → 1.00x | 1 | 0s | 27d ago | 42m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 76.32% | 76.32% | 99.64% | 99.64% | 1622 ms | → 1.00x | 2 | 3h 20m | 22d ago | 43m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 76.32% | 76.32% | 96.69% | 96.69% | 685 ms | → 1.00x | 0 | — | — | 43m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 76.32% | 76.32% | 100.00% | 100.00% | 851 ms | → 1.00x | 0 | — | — | 41m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 76.32% | 76.32% | 100.00% | 100.00% | 529 ms | → 1.00x | 0 | — | — | 42m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 76.32% | 76.32% | 68.70% | 68.70% | — | → 1.00x | 1 | 25d 22h | 28d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 76.32% | 76.32% | 99.87% | 99.87% | 1264 ms | → 1.00x | 0 | — | — | 42m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 76.32% | 76.32% | 98.75% | 98.75% | 1122 ms | → 1.00x | 7 | 20s | 7d ago | 42m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 76.32% | 76.32% | 99.88% | 99.88% | 1249 ms | → 1.00x | 0 | — | — | 41m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 76.32% | 76.32% | 31.33% | 31.33% | — | → 1.00x | 3 | 8d 13h | 28d ago | 42m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 76.32% | 76.32% | 91.90% | 91.90% | 699 ms | → 1.00x | 20 | 1h 59m | 15d ago | 41m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 76.32% | 76.32% | 99.74% | 99.74% | 915 ms | → 1.00x | 0 | — | — | 42m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 76.32% | 76.32% | 99.93% | 99.93% | 1166 ms | → 1.00x | 1 | 0s | 3d ago | 41m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 76.32% | 76.32% | 96.80% | 96.80% | 1580 ms | → 1.00x | 1 | 0s | 20d ago | 42m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 76.32% | 76.32% | 93.61% | 93.61% | 824 ms | → 1.00x | 68 | 12m | 4d ago | 42m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 76.32% | 76.32% | 98.11% | 98.11% | 3238 ms | → 1.00x | 0 | — | — | 42m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 76.32% | 76.32% | 24.52% | 24.52% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 76.32% | 76.32% | 100.00% | 100.00% | 1026 ms | → 1.00x | 0 | — | — | 42m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 76.32% | 76.32% | 100.00% | 100.00% | 649 ms | → 1.00x | 0 | — | — | 42m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 76.32% | 76.32% | 98.72% | 98.72% | 701 ms | → 1.00x | 2 | 4h 33m | 30d ago | 41m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 76.32% | 76.32% | 99.98% | 99.98% | 865 ms | → 1.00x | 0 | — | — | 42m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 76.32% | 76.32% | 87.87% | 87.87% | 846 ms | → 1.00x | 4 | 8m | 15d ago | 42m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 76.32% | 76.32% | 99.09% | 99.09% | 1430 ms | → 1.00x | 2 | 10m | 14d ago | 42m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 76.32% | 76.32% | 100.00% | 100.00% | 1108 ms | → 1.00x | 0 | — | — | 42m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 76.32% | 76.32% | 98.85% | 98.85% | 1862 ms | → 1.00x | 0 | — | — | 42m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 76.32% | 76.32% | 99.97% | 99.97% | 2990 ms | → 1.00x | 0 | — | — | 42m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 76.32% | 76.32% | 98.83% | 98.83% | 1140 ms | → 1.00x | 0 | — | — | 42m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 76.32% | 76.32% | 99.51% | 99.51% | 658 ms | → 1.00x | 0 | — | — | 42m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 76.32% | 76.32% | 97.23% | 97.23% | 4275 ms | → 1.00x | 33 | 3m | 5d ago | 41m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 76.32% | 76.32% | 43.99% | 43.99% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 76.32% | 76.32% | 99.92% | 99.92% | 801 ms | → 1.00x | 1 | 0s | 17d ago | 42m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 76.32% | 76.32% | 98.16% | 98.16% | 3327 ms | → 1.00x | 0 | — | — | 43m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 76.32% | 76.32% | 90.79% | 90.79% | 1157 ms | → 1.00x | 1 | 0s | 4d ago | 42m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 76.32% | 76.32% | 99.85% | 99.85% | 1268 ms | → 1.00x | 1 | 3m | 4d ago | 42m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 76.32% | 76.32% | 96.87% | 96.87% | 1074 ms | → 1.00x | 1 | 2h 1m | 23d ago | 42m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 76.32% | 76.32% | 100.00% | 100.00% | 878 ms | → 1.00x | 0 | — | — | 42m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 76.32% | 76.32% | 100.00% | 100.00% | 744 ms | → 1.00x | 0 | — | — | 41m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 76.32% | 76.32% | 99.98% | 99.98% | 1248 ms | → 1.00x | 0 | — | — | 42m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 76.32% | 76.32% | 97.74% | 97.74% | 3249 ms | → 1.00x | 8 | 2h 7m | 3d ago | 42m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 76.32% | 76.32% | 99.89% | 99.89% | 959 ms | → 1.00x | 1 | 1h 9m | 25d ago | 42m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 76.32% | 76.32% | 99.83% | 99.83% | 1416 ms | → 1.00x | 0 | — | — | 43m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 76.32% | 76.32% | 99.70% | 99.70% | 1295 ms | → 1.00x | 0 | — | — | 42m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 76.32% | 76.32% | 99.67% | 99.67% | 1364 ms | → 1.00x | 1 | 0s | 5d ago | 41m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 76.32% | 76.32% | 100.00% | 100.00% | 821 ms | → 1.00x | 0 | — | — | 42m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 76.32% | 76.32% | 100.00% | 100.00% | 1207 ms | → 1.00x | 0 | — | — | 42m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 76.32% | 76.32% | 100.00% | 100.00% | 1843 ms | → 1.00x | 0 | — | — | 42m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 76.32% | 76.32% | 97.80% | 97.80% | 1793 ms | → 1.00x | 0 | — | — | 42m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 76.32% | 76.32% | 26.43% | 26.43% | 2368 ms | → 1.00x | 1 | 18d 7h | 30d ago | 43m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 76.32% | 76.32% | 99.94% | 99.94% | 1312 ms | → 1.00x | 0 | — | — | 41m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 76.32% | 76.32% | 99.94% | 99.94% | 1490 ms | → 1.00x | 1 | 0s | 27d ago | 42m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 76.32% | 76.32% | 100.00% | 100.00% | 1526 ms | → 1.00x | 0 | — | — | 42m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 76.32% | 76.32% | 16.67% | 16.67% | — | → 1.00x | 2 | 12d 13h | 27d ago | 42m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 76.32% | 76.32% | 78.42% | 78.42% | — | → 1.00x | 2 | 9d 21h | 22d ago | 42m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 76.32% | 76.32% | 98.16% | 98.16% | 617 ms | → 1.00x | 4 | 0s | 10d ago | 42m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 76.32% | 76.32% | 98.96% | 98.96% | 765 ms | → 1.00x | 1 | 29m | 19d ago | 43m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 76.32% | 76.32% | 14.21% | 14.21% | — | → 1.00x | 8 | 3d 5h | 28d ago | 42m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 76.32% | 76.32% | 6.05% | 6.05% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 76.32% | 76.32% | 99.85% | 99.85% | 954 ms | → 1.00x | 0 | — | — | 41m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 76.32% | 76.32% | 99.92% | 99.92% | 789 ms | → 1.00x | 0 | — | — | 42m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 76.32% | 76.32% | 98.81% | 98.81% | 171 ms | → 1.00x | 4 | 38m | 17d ago | 42m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 76.32% | 76.32% | 98.43% | 98.43% | 1158 ms | → 1.00x | 1 | 0s | 23d ago | 42m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 76.32% | 76.32% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 41m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 76.32% | 76.32% | 99.48% | 99.48% | 505 ms | → 1.00x | 1 | 4m | 7d ago | 41m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 76.32% | 76.32% | 93.06% | 93.06% | 677 ms | → 1.00x | 8 | 8m | 15d ago | 42m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 76.32% | 76.32% | 100.00% | 100.00% | 606 ms | → 1.00x | 0 | — | — | 41m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 76.32% | 76.32% | 88.31% | 88.31% | 471 ms | → 1.00x | 4 | 14h 25m | 24d ago | 42m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 76.32% | 76.32% | 84.75% | 84.75% | 1069 ms | → 1.00x | 1 | 0s | 8d ago | 42m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 76.32% | 76.32% | 98.88% | 98.88% | 1546 ms | → 1.00x | 2 | 2h 55m | 3d ago | 42m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 76.32% | 76.32% | 89.89% | 89.89% | 734 ms | → 1.00x | 3 | 0s | 3d ago | 42m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 76.32% | 76.32% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 76.32% | 76.32% | 43.48% | 43.48% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 76.32% | 76.32% | 99.98% | 99.98% | 1162 ms | → 1.00x | 0 | — | — | 42m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 76.32% | 76.32% | 99.93% | 99.93% | 762 ms | → 1.00x | 1 | 0s | 4d ago | 42m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 76.32% | 76.32% | 98.69% | 98.69% | 1477 ms | → 1.00x | 0 | — | — | 42m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 76.32% | 76.32% | 98.35% | 98.35% | 899 ms | → 1.00x | 1 | 1h 40m | 23d ago | 42m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 76.32% | 76.32% | 96.94% | 96.94% | 1058 ms | → 1.00x | 2 | 0s | 4d ago | 42m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 76.32% | 76.32% | 100.00% | 100.00% | 1201 ms | → 1.00x | 0 | — | — | 41m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 76.32% | 76.32% | 99.97% | 99.97% | 1223 ms | → 1.00x | 0 | — | — | 42m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 76.32% | 76.32% | 32.93% | 32.93% | 2574 ms | → 1.00x | 0 | — | — | 42m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 76.32% | 76.32% | 99.89% | 99.89% | 1512 ms | → 1.00x | 0 | — | — | 42m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 76.32% | 76.32% | 97.85% | 97.85% | 709 ms | → 1.00x | 2 | 31m | 20d ago | 42m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 76.32% | 76.32% | 99.94% | 99.94% | 1391 ms | → 1.00x | 1 | 0s | 29d ago | 42m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 76.32% | 76.32% | 98.56% | 98.56% | 2133 ms | → 1.00x | 5 | 2h 28m | 13d ago | 42m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 76.32% | 76.32% | 98.59% | 98.59% | 2409 ms | → 1.00x | 13 | 12m | 4d ago | 42m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 76.32% | 76.32% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 76.32% | 76.32% | 99.85% | 99.85% | 1161 ms | → 1.00x | 3 | 0s | 4d ago | 42m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 76.32% | 76.32% | 92.20% | 92.20% | 2386 ms | → 1.00x | 6 | 0s | 6d ago | 43m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 76.32% | 76.32% | 28.78% | 28.78% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 76.32% | 76.32% | 99.95% | 99.95% | 781 ms | → 1.00x | 0 | — | — | 43m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 76.32% | 76.32% | 93.73% | 93.73% | 64 ms | → 1.00x | 1 | 1h 22m | 18d ago | 42m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 76.32% | 76.32% | 100.00% | 100.00% | 397 ms | → 1.00x | 0 | — | — | 42m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 76.32% | 76.32% | 99.97% | 99.97% | 1136 ms | → 1.00x | 0 | — | — | 42m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 76.32% | 76.32% | 100.00% | 100.00% | 421 ms | → 1.00x | 0 | — | — | 42m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 76.32% | 76.32% | 98.47% | 98.47% | 2516 ms | → 1.00x | 5 | 42m | 10d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 76.32% | 76.32% | 99.92% | 99.92% | 1470 ms | → 1.00x | 0 | — | — | 42m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 76.32% | 76.32% | 29.98% | 29.98% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 76.32% | 76.32% | 99.06% | 99.06% | 826 ms | → 1.00x | 5 | 1h 16m | 4d ago | 41m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 76.32% | 76.32% | 99.66% | 99.66% | 992 ms | → 1.00x | 2 | 0s | 23d ago | 41m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 76.32% | 76.32% | 99.34% | 99.34% | 4723 ms | → 1.00x | 11 | 5m | 3d ago | 42m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 76.32% | 76.32% | 99.82% | 99.82% | 614 ms | → 1.00x | 1 | 0s | 13d ago | 42m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 76.32% | 76.32% | 99.86% | 99.86% | 806 ms | → 1.00x | 0 | — | — | 42m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 76.32% | 76.32% | 100.00% | 100.00% | 1431 ms | → 1.00x | 0 | — | — | 42m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 76.32% | 76.32% | 98.37% | 98.37% | 1824 ms | → 1.00x | 0 | — | — | 42m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 76.32% | 76.32% | 99.94% | 99.94% | 1048 ms | → 1.00x | 1 | 0s | 28d ago | 42m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 76.32% | 76.32% | 97.35% | 97.35% | 1678 ms | → 1.00x | 2 | 2h 51m | 8d ago | 42m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 76.32% | 76.32% | 99.86% | 99.86% | 1395 ms | → 1.00x | 1 | 0s | 19d ago | 42m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 76.32% | 76.32% | 98.04% | 98.04% | 2541 ms | → 1.00x | 0 | — | — | 42m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 76.32% | 76.32% | 96.10% | 96.10% | 1569 ms | → 1.00x | 3 | 8h 19m | 24d ago | 42m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 76.32% | 76.32% | 0.69% | 0.69% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 76.32% | 76.32% | 99.67% | 99.67% | 1794 ms | → 1.00x | 0 | — | — | 42m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 76.32% | 76.32% | 98.12% | 98.12% | 2710 ms | → 1.00x | 2 | 10m | 17d ago | 42m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 76.32% | 76.32% | 99.97% | 99.97% | 1473 ms | → 1.00x | 0 | — | — | 42m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 76.32% | 76.32% | 99.77% | 99.77% | 767 ms | → 1.00x | 3 | 0s | 4d ago | 42m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 76.32% | 76.32% | 60.72% | 60.72% | 973 ms | → 1.00x | 1 | 4d 11h | 30d ago | 41m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 76.32% | 76.32% | 99.85% | 99.85% | 1864 ms | → 1.00x | 1 | 6h 1m | 3d ago | 42m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 76.32% | 76.32% | 97.48% | 97.48% | 1589 ms | → 1.00x | 1 | 0s | 3d ago | 42m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 76.32% | 76.32% | 99.76% | 99.76% | 2724 ms | → 1.00x | 3 | 0s | 18d ago | 42m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 76.32% | 76.32% | 97.10% | 97.10% | 1052 ms | → 1.00x | 4 | 35m | 10d ago | 42m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 76.32% | 76.32% | 99.76% | 99.76% | 2607 ms | → 1.00x | 0 | — | — | 42m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 76.32% | 76.32% | 99.78% | 99.78% | 2747 ms | → 1.00x | 0 | — | — | 43m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 76.32% | 76.32% | 99.92% | 99.92% | 791 ms | → 1.00x | 1 | 0s | 11d ago | 42m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 76.32% | 76.32% | 98.78% | 98.78% | 1242 ms | → 1.00x | 1 | 0s | 2d ago | 42m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 76.32% | 76.32% | 55.08% | 55.08% | 2590 ms | → 1.00x | 36 | 1m | 3d ago | 42m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 76.32% | 76.32% | 100.00% | 100.00% | 1204 ms | → 1.00x | 0 | — | — | 41m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 74.36% | 74.36% | 68.13% | 68.13% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 74.36% | 74.36% | 98.89% | 98.89% | 1747 ms | → 1.00x | 1 | 0s | 12d ago | 44m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 74.36% | 74.36% | 97.03% | 97.03% | 488 ms | → 1.00x | 2 | 0s | 22d ago | 43m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 74.36% | 74.36% | 67.23% | 67.23% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 74.36% | 74.36% | 97.98% | 97.98% | 3189 ms | → 1.00x | 0 | — | — | 44m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 74.36% | 74.36% | 99.86% | 99.86% | 657 ms | → 1.00x | 0 | — | — | 43m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 74.36% | 74.36% | 50.15% | 50.15% | 859 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 74.36% | 74.36% | 54.70% | 54.70% | 836 ms | → 1.00x | 2 | 0s | 21d ago | 43m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 74.36% | 74.36% | 98.12% | 98.12% | 2741 ms | → 1.00x | 0 | — | — | 43m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 74.36% | 74.36% | 99.27% | 99.27% | 1746 ms | → 1.00x | 0 | — | — | 43m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 74.36% | 74.36% | 99.85% | 99.85% | 1996 ms | → 1.00x | 0 | — | — | 44m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 74.36% | 74.36% | 98.66% | 98.66% | 1167 ms | → 1.00x | 1 | 0s | 19d ago | 43m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 74.36% | 74.36% | 98.78% | 98.78% | 4198 ms | → 1.00x | 22 | 4s | 8d ago | 44m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 74.36% | 74.36% | 89.73% | 89.73% | 1395 ms | → 1.00x | 1 | 0s | 28d ago | 44m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 74.36% | 74.36% | 24.54% | 24.54% | 1301 ms | → 1.00x | 1 | 0s | 25d ago | 43m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 74.36% | 74.36% | 96.32% | 96.32% | 3704 ms | → 1.00x | 244 | 14m | 5d ago | 44m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 74.36% | 74.36% | 54.78% | 54.78% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 74.36% | 74.36% | 99.87% | 99.87% | 510 ms | → 1.00x | 0 | — | — | 43m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 74.36% | 74.36% | 86.23% | 86.23% | 2053 ms | → 1.00x | 6 | 0s | 8d ago | 44m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 74.36% | 74.36% | 56.85% | 56.85% | 1383 ms | → 1.00x | 8 | 2h 1m | 15d ago | 43m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 74.36% | 74.36% | 91.87% | 91.87% | 513 ms | → 1.00x | 1 | 30m | 13d ago | 43m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 74.36% | 74.36% | 99.77% | 99.77% | 2430 ms | → 1.00x | 0 | — | — | 44m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 74.36% | 74.36% | 88.17% | 88.17% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 74.36% | 74.36% | 98.73% | 98.73% | 638 ms | → 1.00x | 0 | — | — | 43m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 74.36% | 74.36% | 31.58% | 31.58% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 74.36% | 74.36% | 99.30% | 99.30% | 739 ms | → 1.00x | 0 | — | — | 43m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 74.36% | 74.36% | 76.90% | 76.90% | 667 ms | → 1.00x | 1 | 0s | 19d ago | 43m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 74.36% | 74.36% | 98.74% | 98.74% | 944 ms | → 1.00x | 1 | 29m | 28d ago | 43m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 74.36% | 74.36% | 99.90% | 99.90% | 1250 ms | → 1.00x | 0 | — | — | 44m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 74.07% | 74.07% | — | — | — | → 1.00x | 0 | — | — | 41m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 73.68% | 73.68% | 98.02% | 98.02% | 2101 ms | → 1.00x | 0 | — | — | 42m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 73.68% | 73.68% | 97.07% | 97.07% | 924 ms | → 1.00x | 2 | 1d 2h | 15d ago | 42m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 73.68% | 73.68% | 95.25% | 95.25% | 1438 ms | → 1.00x | 17 | 1h 44m | 4d ago | 42m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 73.68% | 73.68% | 96.89% | 96.89% | 2010 ms | → 1.00x | 8 | 1h 28m | 2d ago | 42m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 73.68% | 73.68% | 99.10% | 99.10% | 2585 ms | → 1.00x | 1 | 0s | 23d ago | 42m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 73.68% | 73.68% | 91.43% | 91.43% | 2141 ms | → 1.00x | 2 | 3h 25m | 29d ago | 41m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 73.68% | 73.68% | 86.85% | 86.85% | 2184 ms | → 1.00x | 0 | — | — | 42m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 73.68% | 73.68% | 99.71% | 99.71% | 660 ms | → 1.00x | 1 | 0s | 4d ago | 42m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 73.68% | 73.68% | 99.97% | 99.97% | 953 ms | → 1.00x | 0 | — | — | 42m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 73.68% | 73.68% | 97.87% | 97.87% | 391 ms | → 1.00x | 1 | 0s | 29d ago | 42m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 73.68% | 73.68% | 82.00% | 82.00% | 4058 ms | → 1.00x | 173 | 11m | 4d ago | 41m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 71.79% | 71.79% | 99.10% | 99.10% | 259 ms | → 1.00x | 1 | 0s | 19d ago | 43m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 71.79% | 71.79% | 97.28% | 97.28% | 1080 ms | → 1.00x | 0 | — | — | 43m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 71.79% | 71.79% | 68.41% | 68.41% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 71.79% | 71.79% | 77.97% | 77.97% | 815 ms | → 1.00x | 1 | 0s | 3d ago | 43m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 71.79% | 71.79% | 98.29% | 98.29% | 2954 ms | → 1.00x | 0 | — | — | 44m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 71.79% | 71.79% | 99.09% | 99.09% | 400 ms | → 1.00x | 0 | — | — | 43m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 71.79% | 71.79% | 63.15% | 63.15% | 4344 ms | → 1.00x | 223 | 11m | 4d ago | 44m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 71.79% | 71.79% | 2.34% | 2.34% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 71.79% | 71.79% | 99.62% | 99.62% | 824 ms | → 1.00x | 1 | 0s | 16d ago | 44m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 71.79% | 71.79% | 10.72% | 10.72% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 71.79% | 71.79% | 48.46% | 48.46% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 71.79% | 71.79% | 75.72% | 75.72% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 71.79% | 71.79% | 99.76% | 99.76% | 836 ms | → 1.00x | 0 | — | — | 44m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 71.79% | 71.79% | 87.06% | 87.06% | 4178 ms | → 1.00x | 25 | 1m | 14d ago | 43m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 71.79% | 71.79% | 17.31% | 17.31% | 1457 ms | → 1.00x | 1 | 0s | 18d ago | 44m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 71.79% | 71.79% | 99.77% | 99.77% | 1801 ms | → 1.00x | 0 | — | — | 44m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 71.79% | 71.79% | 99.67% | 99.67% | 3023 ms | → 1.00x | 5 | 5h 48m | 3d ago | 43m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 71.05% | 71.05% | 99.34% | 99.34% | 690 ms | → 1.00x | 2 | 0s | 4d ago | 41m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 71.05% | 71.05% | 99.61% | 99.61% | 3489 ms | → 1.00x | 5 | 0s | 2d ago | 42m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 71.05% | 71.05% | 100.00% | 100.00% | 980 ms | → 1.00x | 0 | — | — | 41m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 71.05% | 71.05% | 98.95% | 98.95% | 2266 ms | → 1.00x | 0 | — | — | 42m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 71.05% | 71.05% | 98.53% | 98.53% | 1486 ms | → 1.00x | 15 | 7m | 3d ago | 42m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 71.05% | 71.05% | 99.94% | 99.94% | 933 ms | → 1.00x | 0 | — | — | 42m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 69.23% | 69.23% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 27d 10h | 30d ago | 43m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 69.23% | 69.23% | 97.75% | 97.75% | 2799 ms | → 1.00x | 4 | 0s | 3d ago | 43m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 69.23% | 69.23% | 93.16% | 93.16% | 922 ms | → 1.00x | 3 | 17m | 7d ago | 43m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 69.23% | 69.23% | 44.99% | 44.99% | 3216 ms | → 1.00x | 0 | — | — | 43m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 69.23% | 69.23% | 64.20% | 64.20% | 2822 ms | → 1.00x | 6 | 0s | 6d ago | 44m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 69.23% | 69.23% | 36.33% | 36.33% | 2245 ms | → 1.00x | 3 | 2m | 8d ago | 44m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 68.42% | 68.42% | 88.70% | 88.70% | 1652 ms | → 1.00x | 1 | 6h | 2d ago | 42m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 68.42% | 68.42% | 6.48% | 6.48% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 68.18% | 68.18% | 93.42% | 93.42% | 3348 ms | → 1.00x | 2 | 6m | 8d ago | 44m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 66.67% | 66.67% | 94.11% | 94.11% | 2899 ms | → 1.00x | 12 | 7h 28m | 5d ago | 44m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 66.67% | 66.67% | 91.98% | 91.98% | 2359 ms | → 1.00x | 21 | 14s | 4d ago | 44m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 66.67% | 66.67% | — | — | — | → 1.00x | 0 | — | — | 41m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 66.67% | 66.67% | — | — | — | → 1.00x | 0 | — | — | 41m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 66.67% | 66.67% | 83.85% | 83.85% | 4595 ms | → 1.00x | 40 | 4m | 8d ago | 43m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 66.67% | 66.67% | 85.28% | 85.28% | 1365 ms | → 1.00x | 0 | — | — | 43m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 65.91% | 65.91% | 93.57% | 93.57% | 2517 ms | → 1.00x | 1 | 4m | 8d ago | 44m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 65.91% | 65.91% | 66.07% | 66.07% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 65.79% | 65.79% | 92.56% | 92.56% | 4823 ms | → 1.00x | 22 | 28m | 3d ago | 42m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 64.10% | 64.10% | 98.45% | 98.45% | 3824 ms | → 1.00x | 45 | 1m | 4d ago | 43m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 64.10% | 64.10% | 86.29% | 86.29% | 3788 ms | → 1.00x | 24 | 3m | 4d ago | 44m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 63.64% | 63.64% | 68.59% | 68.59% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 63.64% | 63.64% | 98.92% | 98.92% | 4090 ms | → 1.00x | 1 | 0s | 8d ago | 44m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 63.64% | 63.64% | 75.11% | 75.11% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 63.64% | 63.64% | 52.45% | 52.45% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 63.64% | 63.64% | 54.05% | 54.05% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 62.79% | 62.79% | 78.01% | 78.01% | 3113 ms | → 1.00x | 78 | 1h 36m | 4d ago | 44m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 61.54% | 61.54% | 69.01% | 69.01% | 4052 ms | → 1.00x | 13 | 7m | 15d ago | 43m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 61.54% | 61.54% | 99.64% | 99.64% | 905 ms | → 1.00x | 6 | 48m | 6d ago | 44m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 60.53% | 60.53% | 36.20% | 36.20% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 57.89% | 57.89% | 100.00% | 100.00% | 3510 ms | → 1.00x | 0 | — | — | 42m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 57.89% | 57.89% | 83.10% | 83.10% | 1055 ms | → 1.00x | 18 | 3h 41m | 10d ago | 42m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 56.41% | 56.41% | 69.98% | 69.98% | 3991 ms | → 1.00x | 5 | 14m | 18d ago | 44m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 54.55% | 54.55% | 50.52% | 50.52% | 2046 ms | → 1.00x | 149 | 3h 30m | 3d ago | 44m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 53.85% | 53.85% | 99.93% | 99.93% | 183 ms | → 1.00x | 0 | — | — | 44m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 51.28% | 51.28% | 98.87% | 98.87% | 2368 ms | → 1.00x | 1 | 17h 60m | 22d ago | 44m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 51.28% | 51.28% | 99.82% | 99.82% | 1073 ms | → 1.00x | 0 | — | — | 43m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 36.84% | 36.84% | 99.85% | 99.85% | 1419 ms | → 1.00x | 2 | 0s | 23d ago | 41m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 36.84% | 36.84% | 96.14% | 96.14% | 1996 ms | → 1.00x | 5 | 8h 24m | 4d ago | 42m ago |

</details>

<details open>
<summary><strong>🔴 Down (299)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 73.68% | 73.68% | 99.33% | 99.33% | 249 ms | → 1.00x | 9 | 2m | 11d ago | 42m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 69.23% | 69.23% | 96.79% | 96.79% | 2943 ms | → 1.00x | 4 | 8m | 15d ago | 43m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 68.42% | 68.42% | 99.88% | 99.88% | 3307 ms | → 1.00x | 2 | 0s | 10d ago | 42m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 66.67% | 66.67% | 86.83% | 86.83% | 3767 ms | → 1.00x | 17 | 2m | 9d ago | 43m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 60.53% | 60.53% | 93.54% | 93.54% | 3761 ms | → 1.00x | 24 | 3m | 5d ago | 41m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 60.53% | 60.53% | 25.44% | 25.44% | 930 ms | → 1.00x | 4 | 5d 8h | 4d ago | 42m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 60.53% | 60.53% | 85.02% | 85.02% | 4086 ms | → 1.00x | 37 | 3m | 5d ago | 42m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 56.41% | 56.41% | 0.11% | 0.11% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 36.84% | 36.84% | 92.86% | 92.86% | 3195 ms | → 1.00x | 8 | 17h 29m | 2d ago | 42m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 33.33% | 33.33% | 64.35% | 64.35% | — | → 1.00x | 4 | 4d 13h | 20d ago | 43m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 31.58% | 31.58% | 98.37% | 98.37% | 1872 ms | → 1.00x | 3 | 3m | 6d ago | 41m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 31.58% | 31.58% | 64.69% | 64.69% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 30.77% | 30.77% | 40.01% | 40.01% | 1038 ms | → 1.00x | 1 | 19d 22h | 30d ago | 44m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 28.95% | 28.95% | 99.82% | 99.82% | 920 ms | → 1.00x | 2 | 2m | 6d ago | 41m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 28.95% | 28.95% | 52.44% | 52.44% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 28.95% | 28.95% | 99.82% | 99.82% | 2280 ms | → 1.00x | 1 | 7h | 3d ago | 42m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 28.95% | 28.95% | 47.31% | 47.31% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 28.95% | 28.95% | 73.96% | 73.96% | — | → 1.00x | 7 | 3d 5h | 25d ago | 42m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 28.95% | 28.95% | 79.86% | 79.86% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 28.95% | 28.95% | 85.33% | 85.33% | 1170 ms | → 1.00x | 95 | 33m | 4d ago | 42m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 28.95% | 28.95% | 83.11% | 83.11% | 348 ms | → 1.00x | 2 | 2d 24h | 7d ago | 42m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 28.95% | 28.95% | 78.64% | 78.64% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 28.95% | 28.95% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 26d ago | 42m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 28.95% | 28.95% | 90.67% | 90.67% | 1302 ms | → 1.00x | 2 | 1d 21h | 6d ago | 41m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 28.95% | 28.95% | 32.34% | 32.34% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 28.95% | 28.95% | 69.29% | 69.29% | — | → 1.00x | 3 | 8d 13h | 28d ago | 42m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 28.95% | 28.95% | 39.40% | 39.40% | — | → 1.00x | 3 | 6d 1h | 20d ago | 42m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 28.95% | 28.95% | 26.33% | 26.33% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 41m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 28.95% | 28.95% | 99.89% | 99.89% | 1702 ms | → 1.00x | 0 | — | — | 42m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 28.95% | 28.95% | 48.30% | 48.30% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 28.95% | 28.95% | 100.00% | 100.00% | 1291 ms | → 1.00x | 0 | — | — | 42m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 28.95% | 28.95% | 99.92% | 99.92% | 1053 ms | → 1.00x | 1 | 0s | 16d ago | 42m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 28.95% | 28.95% | 68.44% | 68.44% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 28.95% | 28.95% | 5.52% | 5.52% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 28.95% | 28.95% | 81.13% | 81.13% | 1545 ms | → 1.00x | 3 | 20m | 16d ago | 43m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 28.95% | 28.95% | 99.89% | 99.89% | 958 ms | → 1.00x | 3 | 59s | 5d ago | 42m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 28.95% | 28.95% | 20.14% | 20.14% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 28.95% | 28.95% | 99.95% | 99.95% | 809 ms | → 1.00x | 0 | — | — | 42m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 28.95% | 28.95% | 67.73% | 67.73% | — | → 1.00x | 3 | 8d 13h | 28d ago | 42m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 28.95% | 28.95% | 74.74% | 74.74% | — | → 1.00x | 7 | 3d 16h | 28d ago | 42m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 28.95% | 28.95% | 99.25% | 99.25% | 1093 ms | → 1.00x | 1 | 0s | 16d ago | 42m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 28.95% | 28.95% | 55.75% | 55.75% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 28.95% | 28.95% | 20.55% | 20.55% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 28.95% | 28.95% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 24d ago | 42m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 28.95% | 28.95% | 62.39% | 62.39% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 28.95% | 28.95% | 91.04% | 91.04% | 863 ms | → 1.00x | 3 | 1d 8h | 6d ago | 42m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 28.95% | 28.95% | 42.69% | 42.69% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 28.95% | 28.95% | 24.01% | 24.01% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 28.95% | 28.95% | 20.58% | 20.58% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 28.95% | 28.95% | 33.55% | 33.55% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 28.95% | 28.95% | 52.99% | 52.99% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 28.95% | 28.95% | 65.07% | 65.07% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 28.95% | 28.95% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 17d ago | 43m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 28.95% | 28.95% | 7.76% | 7.76% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 28.95% | 28.95% | 92.63% | 92.63% | 1962 ms | → 1.00x | 3 | 2h 60m | 2d ago | 43m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 28.95% | 28.95% | 98.92% | 98.92% | 2110 ms | → 1.00x | 10 | 19m | 14d ago | 42m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 28.95% | 28.95% | 16.77% | 16.77% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 28.95% | 28.95% | 19.49% | 19.49% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 28.95% | 28.95% | 99.81% | 99.81% | 1122 ms | → 1.00x | 2 | 36m | 15d ago | 42m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 28.95% | 28.95% | 46.51% | 46.51% | 157 ms | → 1.00x | 4 | 3d 19h | 10d ago | 42m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 28.95% | 28.95% | 46.80% | 46.80% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 28.95% | 28.95% | 35.49% | 35.49% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 28.95% | 28.95% | 22.60% | 22.60% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 28.95% | 28.95% | 39.41% | 39.41% | 3428 ms | → 1.00x | 119 | 6m | 4d ago | 41m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 28.95% | 28.95% | 30.92% | 30.92% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 28.95% | 28.95% | 68.76% | 68.76% | — | → 1.00x | 3 | 8d 13h | 28d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 28.95% | 28.95% | 44.20% | 44.20% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 28.95% | 28.95% | 38.02% | 38.02% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 28.95% | 28.95% | 17.16% | 17.16% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 28.95% | 28.95% | 10.15% | 10.15% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 28.95% | 28.95% | 14.75% | 14.75% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 28.95% | 28.95% | 25.49% | 25.49% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 28.95% | 28.95% | 3.93% | 3.93% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 28.95% | 28.95% | 4.55% | 4.55% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 28.95% | 28.95% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 16d ago | 41m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 28.95% | 28.95% | 36.28% | 36.28% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 28.95% | 28.95% | 63.49% | 63.49% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 28.95% | 28.95% | 40.17% | 40.17% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 28.95% | 28.95% | 43.61% | 43.61% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 28.95% | 28.95% | 60.97% | 60.97% | 1997 ms | → 1.00x | 118 | 5m | 4d ago | 42m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 28.95% | 28.95% | 1.35% | 1.35% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 28.95% | 28.95% | 99.77% | 99.77% | 348 ms | → 1.00x | 2 | 2m | 3d ago | 42m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 28.95% | 28.95% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 28.21% | 28.21% | 63.31% | 63.31% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 28.21% | 28.21% | 59.84% | 59.84% | 2177 ms | → 1.00x | 2 | 60m | 3d ago | 43m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 28.21% | 28.21% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 9d 6h | 2d ago | 43m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 28.21% | 28.21% | 5.20% | 5.20% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 28.21% | 28.21% | 74.22% | 74.22% | — | → 1.00x | 31 | 5h 17m | 9d ago | 44m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 28.21% | 28.21% | 3.13% | 3.13% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 28.21% | 28.21% | 40.15% | 40.15% | 497 ms | → 1.00x | 0 | — | — | 43m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 28.21% | 28.21% | 76.64% | 76.64% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 28.21% | 28.21% | 33.64% | 33.64% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 28.21% | 28.21% | 83.66% | 83.66% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 28.21% | 28.21% | 21.09% | 21.09% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 28.21% | 28.21% | 27.04% | 27.04% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 28.21% | 28.21% | 84.65% | 84.65% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 28.21% | 28.21% | 75.27% | 75.27% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 28.21% | 28.21% | 57.88% | 57.88% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 28.21% | 28.21% | 70.96% | 70.96% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 28.21% | 28.21% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 10d ago | 43m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 28.21% | 28.21% | 13.15% | 13.15% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 28.21% | 28.21% | 44.49% | 44.49% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 28.21% | 28.21% | 87.39% | 87.39% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 28.21% | 28.21% | 30.30% | 30.30% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 28.21% | 28.21% | 78.14% | 78.14% | 1627 ms | → 1.00x | 96 | 5h 28m | 3d ago | 43m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 28.21% | 28.21% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 10d ago | 44m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 28.21% | 28.21% | 3.12% | 3.12% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 28.21% | 28.21% | 32.40% | 32.40% | 1047 ms | → 1.00x | 2 | 2d 6h | 6d ago | 44m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 28.21% | 28.21% | 48.90% | 48.90% | — | → 1.00x | 6 | 4d 15h | 13d ago | 44m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 28.21% | 28.21% | 31.88% | 31.88% | — | → 1.00x | 3 | 6d 18h | 11d ago | 43m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 28.21% | 28.21% | 84.44% | 84.44% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 28.21% | 28.21% | 46.41% | 46.41% | 74 ms | → 1.00x | 2 | 8d 8h | 3d ago | 43m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 28.21% | 28.21% | 50.25% | 50.25% | 1711 ms | → 1.00x | 8 | 1h 3m | 18d ago | 44m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 28.21% | 28.21% | 96.06% | 96.06% | 1346 ms | → 1.00x | 7 | 12h 56m | 5d ago | 44m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 28.21% | 28.21% | 50.43% | 50.43% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 28.21% | 28.21% | 22.07% | 22.07% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 28.21% | 28.21% | 98.37% | 98.37% | 2532 ms | → 1.00x | 0 | — | — | 43m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 28.21% | 28.21% | 21.32% | 21.32% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 28.21% | 28.21% | 4.63% | 4.63% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 28.21% | 28.21% | 60.67% | 60.67% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 28.21% | 28.21% | 99.95% | 99.95% | 1497 ms | → 1.00x | 0 | — | — | 44m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 28.21% | 28.21% | 99.74% | 99.74% | 587 ms | → 1.00x | 0 | — | — | 44m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 28.21% | 28.21% | 73.53% | 73.53% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 28.21% | 28.21% | 74.18% | 74.18% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 28.21% | 28.21% | 99.84% | 99.84% | 1041 ms | → 1.00x | 0 | — | — | 44m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 28.21% | 28.21% | 83.98% | 83.98% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 28.21% | 28.21% | 48.81% | 48.81% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 28.21% | 28.21% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 22d ago | 44m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 28.21% | 28.21% | 47.90% | 47.90% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Crond](https://lmspeed.net/provider/crond) | 28.21% | 28.21% | 22.80% | 22.80% | 2045 ms | → 1.00x | 5 | 6m | 12d ago | 43m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 28.21% | 28.21% | 43.20% | 43.20% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 28.21% | 28.21% | 39.16% | 39.16% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 28.21% | 28.21% | 74.31% | 74.31% | — | → 1.00x | 3 | 8d 5h | 27d ago | 44m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 28.21% | 28.21% | 98.24% | 98.24% | 1757 ms | → 1.00x | 0 | — | — | 43m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 28.21% | 28.21% | 22.80% | 22.80% | 592 ms | → 1.00x | 1 | 0s | 21d ago | 43m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 28.21% | 28.21% | 54.39% | 54.39% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 28.21% | 28.21% | 35.55% | 35.55% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 28.21% | 28.21% | 65.91% | 65.91% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 28.21% | 28.21% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 9d 6h | 2d ago | 43m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 28.21% | 28.21% | 34.00% | 34.00% | 1734 ms | → 1.00x | 3 | 20m | 6d ago | 44m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 28.21% | 28.21% | 34.65% | 34.65% | 1308 ms | → 1.00x | 2 | 2d 14h | 21d ago | 43m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 28.21% | 28.21% | 45.59% | 45.59% | 536 ms | → 1.00x | 0 | — | — | 44m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 28.21% | 28.21% | 76.99% | 76.99% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 28.21% | 28.21% | 38.64% | 38.64% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 28.21% | 28.21% | 22.32% | 22.32% | 688 ms | → 1.00x | 1 | 0s | 28d ago | 44m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 28.21% | 28.21% | 90.53% | 90.53% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 28.21% | 28.21% | 39.95% | 39.95% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 28.21% | 28.21% | 0.10% | 0.10% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 28.21% | 28.21% | 81.34% | 81.34% | 1815 ms | → 1.00x | 1 | 3h | 6d ago | 44m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 28.21% | 28.21% | 73.32% | 73.32% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 28.21% | 28.21% | 2.87% | 2.87% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 28.21% | 28.21% | 49.45% | 49.45% | 372 ms | → 1.00x | 0 | — | — | 43m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 28.21% | 28.21% | 39.57% | 39.57% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 28.21% | 28.21% | 20.82% | 20.82% | 3162 ms | → 1.00x | 83 | 6m | 2d ago | 43m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 28.21% | 28.21% | 23.09% | 23.09% | 1861 ms | → 1.00x | 7 | 9m | 8d ago | 44m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 28.21% | 28.21% | 82.46% | 82.46% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 28.21% | 28.21% | 92.62% | 92.62% | — | → 1.00x | 1 | 26d 21h | 29d ago | 44m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 28.21% | 28.21% | 27.77% | 27.77% | 3186 ms | → 1.00x | 186 | 18m | 5d ago | 43m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 28.21% | 28.21% | 86.17% | 86.17% | 713 ms | → 1.00x | 1 | 10s | 8d ago | 44m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 28.21% | 28.21% | 49.10% | 49.10% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 28.21% | 28.21% | 86.30% | 86.30% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 28.21% | 28.21% | 99.12% | 99.12% | 4322 ms | → 1.00x | 6 | 2h | 2d ago | 44m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 28.21% | 28.21% | 99.26% | 99.26% | 2980 ms | → 1.00x | 0 | — | — | 43m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 28.21% | 28.21% | 99.77% | 99.77% | 2713 ms | → 1.00x | 0 | — | — | 44m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 28.21% | 28.21% | 16.23% | 16.23% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 28.21% | 28.21% | 45.98% | 45.98% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 28.21% | 28.21% | 46.05% | 46.05% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 28.21% | 28.21% | 51.26% | 51.26% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 28.21% | 28.21% | 35.56% | 35.56% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 28.21% | 28.21% | 87.63% | 87.63% | 2170 ms | → 1.00x | 0 | — | — | 43m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 28.21% | 28.21% | 72.39% | 72.39% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 28.21% | 28.21% | 83.68% | 83.68% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 28.21% | 28.21% | 26.68% | 26.68% | 733 ms | → 1.00x | 0 | — | — | 43m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 28.21% | 28.21% | 75.88% | 75.88% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 28.21% | 28.21% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 8d ago | 43m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 28.21% | 28.21% | 68.72% | 68.72% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 28.21% | 28.21% | 18.10% | 18.10% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 28.21% | 28.21% | 54.28% | 54.28% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 28.21% | 28.21% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 13d 18h | 3d ago | 44m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 28.21% | 28.21% | 63.55% | 63.55% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 28.21% | 28.21% | 23.11% | 23.11% | 811 ms | → 1.00x | 0 | — | — | 44m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 28.21% | 28.21% | 22.23% | 22.23% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 28.21% | 28.21% | 6.70% | 6.70% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 28.21% | 28.21% | 62.64% | 62.64% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 28.21% | 28.21% | 5.08% | 5.08% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 28.21% | 28.21% | 99.53% | 99.53% | 1377 ms | → 1.00x | 0 | — | — | 44m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 28.21% | 28.21% | 16.69% | 16.69% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 28.21% | 28.21% | 21.71% | 21.71% | 2895 ms | → 1.00x | 58 | 1h 12m | 2d ago | 44m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 28.21% | 28.21% | 8.99% | 8.99% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 28.21% | 28.21% | 46.30% | 46.30% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 28.21% | 28.21% | 98.48% | 98.48% | 1768 ms | → 1.00x | 1 | 0s | 23d ago | 43m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 28.21% | 28.21% | 77.23% | 77.23% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [xAI](https://lmspeed.net/provider/xai) | 28.21% | 28.21% | 23.13% | 23.13% | 1842 ms | → 1.00x | 0 | — | — | 44m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 28.21% | 28.21% | 0.01% | 0.01% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 28.21% | 28.21% | 22.68% | 22.68% | 1588 ms | → 1.00x | 0 | — | — | 43m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 28.21% | 28.21% | 38.37% | 38.37% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 28.21% | 28.21% | 17.59% | 17.59% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 28.21% | 28.21% | 91.72% | 91.72% | 1351 ms | → 1.00x | 29 | 1m | 2d ago | 43m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 28.21% | 28.21% | 99.17% | 99.17% | 1133 ms | → 1.00x | 0 | — | — | 44m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 28.21% | 28.21% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 28.21% | 28.21% | 75.15% | 75.15% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 26.32% | 26.32% | 100.00% | 100.00% | 827 ms | → 1.00x | 0 | — | — | 41m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 26.32% | 26.32% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 15d ago | 42m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 25.64% | 25.64% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 12d ago | 43m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 25.64% | 25.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 25.64% | 25.64% | 23.40% | 23.40% | 3600 ms | → 1.00x | 100 | 13m | 5d ago | 43m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 25.00% | 25.00% | 10.24% | 10.24% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 25.00% | 25.00% | 46.73% | 46.73% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 25.00% | 25.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Mine](https://lmspeed.net/provider/mine) | 25.00% | 25.00% | 23.25% | 23.25% | — | → 1.00x | 1 | 28d 1h | 30d ago | 44m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 23.68% | 23.68% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 15d ago | 42m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 23.68% | 23.68% | 99.65% | 99.65% | 1160 ms | → 1.00x | 4 | 45m | 4d ago | 42m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 23.68% | 23.68% | 99.75% | 99.75% | 1259 ms | → 1.00x | 3 | 0s | 3d ago | 41m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 23.68% | 23.68% | 76.21% | 76.21% | — | → 1.00x | 4 | 5d 3h | 22d ago | 42m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 23.68% | 23.68% | 99.73% | 99.73% | 765 ms | → 1.00x | 1 | 2h 60m | 3d ago | 42m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 23.68% | 23.68% | 100.00% | 100.00% | 778 ms | → 1.00x | 0 | — | — | 41m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 23.68% | 23.68% | 98.70% | 98.70% | 1669 ms | → 1.00x | 17 | 0s | 12d ago | 42m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 23.68% | 23.68% | 75.41% | 75.41% | 4994 ms | → 1.00x | 233 | 1h 17m | 2d ago | 42m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 23.68% | 23.68% | 100.00% | 100.00% | 2172 ms | → 1.00x | 0 | — | — | 41m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 23.68% | 23.68% | 98.40% | 98.40% | 957 ms | → 1.00x | 6 | 10m | 27d ago | 42m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 23.68% | 23.68% | 83.84% | 83.84% | 1166 ms | → 1.00x | 8 | 17m | 7d ago | 42m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 23.68% | 23.68% | 91.99% | 91.99% | 751 ms | → 1.00x | 0 | — | — | 42m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 23.68% | 23.68% | 98.05% | 98.05% | 507 ms | → 1.00x | 3 | 0s | 3d ago | 42m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 23.68% | 23.68% | 98.92% | 98.92% | 910 ms | → 1.00x | 3 | 1h 40m | 4d ago | 41m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 23.68% | 23.68% | 16.44% | 16.44% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 23.68% | 23.68% | 99.94% | 99.94% | 2268 ms | → 1.00x | 1 | 21m | 17d ago | 42m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 23.68% | 23.68% | 99.29% | 99.29% | 1704 ms | → 1.00x | 1 | 2h 37m | 21d ago | 41m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 23.68% | 23.68% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 23.68% | 23.68% | 100.00% | 100.00% | 1015 ms | → 1.00x | 0 | — | — | 41m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 23.68% | 23.68% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 23.68% | 23.68% | 100.00% | 100.00% | 1049 ms | → 1.00x | 0 | — | — | 41m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 23.68% | 23.68% | 99.60% | 99.60% | 2601 ms | → 1.00x | 1 | 0s | 25d ago | 42m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 23.68% | 23.68% | 3.80% | 3.80% | — | → 1.00x | 1 | 28d 1h | 30d ago | 42m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 23.08% | 23.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 23.08% | 23.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 23.08% | 23.08% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | 43m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 23.08% | 23.08% | 32.96% | 32.96% | 875 ms | → 1.00x | 0 | — | — | 44m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 41m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 69.23% | 69.23% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 69.23% | 69.23% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 1h | 30d ago | — |

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
