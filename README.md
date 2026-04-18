# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**523 providers** — 253 🟢 operational · 112 🟡 degraded · 158 🔴 down · 0 ⚫ unknown

_Updated 2026-04-18 13:46 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (253)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.95% | 90.03% | 90.03% | 1242 ms | ↓ 0.93x | 2 | 0s | 17d ago | 2d ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.88% | 60.18% | 60.18% | 1101 ms | ↓ 0.91x | 5 | 0s | 25d ago | 2d ago |
| [共绩算力 (Qwen3-3207)](https://lmspeed.net/provider/550c-qwen3-3207) | 100.00% | 99.95% | 95.39% | 95.39% | 1407 ms | ↑ 1.09x | 2 | 0s | 10d ago | 2d ago |
| [共绩算力 (Qwen3-5477-2)](https://lmspeed.net/provider/550c-qwen3-5477-2) | 100.00% | 99.98% | 95.01% | 95.01% | 856 ms | ↑ 1.16x | 1 | 0s | 10d ago | 2d ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 100.00% | 99.60% | 97.88% | 97.88% | 1281 ms | ↓ 0.94x | 10 | 6m | 9d ago | 2d ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 100.00% | 98.95% | 98.95% | 98.95% | 565 ms | → 0.98x | 23 | 7m | 10d ago | 2d ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.98% | 98.55% | 98.55% | 474 ms | ↑ 1.31x | 1 | 0s | 18d ago | 2d ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 91.53% | 91.53% | 91.53% | 1052 ms | ↑ 1.07x | 1 | 18h 20m | 12d ago | 2d ago |
| [ai.api.xn--fiqs8s](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.95% | 90.41% | 90.41% | 1000 ms | ↑ 2.36x | 2 | 0s | 15d ago | 2d ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 95.91% | 95.91% | 95.91% | 1033 ms | → 0.96x | 3 | 4h 13m | 9d ago | 2d ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 100.00% | 97.66% | 99.40% | 99.40% | 647 ms | ↓ 0.67x | 79 | 2m | 9d ago | 2d ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.61% | 98.61% | 744 ms | ↓ 0.78x | 4 | 3m | 10d ago | 2d ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 100.00% | 99.63% | 99.79% | 99.79% | 1880 ms | ↓ 0.72x | 15 | 0s | 9d ago | 2d ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 100.00% | 97.51% | 37.04% | 37.04% | 474 ms | ↓ 0.92x | 4 | 3h 47m | 13d ago | 2d ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 99.98% | 99.98% | 99.98% | 737 ms | ↓ 0.89x | 1 | 0s | 29d ago | 2d ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 100.00% | 99.88% | 99.97% | 99.97% | 102 ms | ↓ 0.22x | 5 | 0s | 12d ago | 2d ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.83% | 99.83% | 99.83% | 502 ms | ↓ 0.70x | 5 | 0s | 10d ago | 2d ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 100.00% | 99.23% | 92.18% | 92.18% | 507 ms | ↓ 0.42x | 31 | 0s | 10d ago | 2d ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 96.81% | 96.81% | 96.81% | 969 ms | → 0.99x | 3 | 1h 20m | 7d ago | 2d ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 609 ms | → 1.00x | 0 | — | — | 2d ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 100.00% | 99.96% | 99.96% | 99.96% | 803 ms | ↑ 1.55x | 1 | 0s | 14d ago | 2d ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 46.26% | 11.76% | 11.76% | 975 ms | ↓ 0.49x | 2 | 7d 12h | 15d ago | 2d ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 100.00% | 100.00% | 99.98% | 99.98% | 988 ms | → 0.98x | 0 | — | — | 2d ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 99.95% | 94.00% | 94.00% | 543 ms | ↑ 1.15x | 2 | 0s | 17d ago | 2d ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.33% | 97.94% | 97.94% | 884 ms | ↓ 0.92x | 25 | 49s | 9d ago | 2d ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.93% | 98.57% | 98.57% | 573 ms | ↑ 1.10x | 3 | 0s | 10d ago | 2d ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 99.30% | 74.41% | 74.41% | 573 ms | ↓ 0.87x | 18 | 6m | 10d ago | 2d ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 99.60% | 70.59% | 70.59% | 1689 ms | → 0.99x | 15 | 40s | 9d ago | 2d ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 96.62% | 96.62% | 96.62% | 1423 ms | ↑ 1.05x | 4 | 3h 20m | 13d ago | 2d ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 95.31% | 95.31% | 95.31% | 1064 ms | ↑ 1.17x | 1 | 12h 29m | 14d ago | 2d ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.95% | 99.95% | 99.95% | 270 ms | ↑ 1.19x | 2 | 0s | 16d ago | 2d ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.93% | 64.90% | 64.90% | 922 ms | ↑ 1.08x | 3 | 0s | 10d ago | 2d ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 98.05% | 96.55% | 96.55% | 701 ms | ↓ 0.62x | 12 | 55m | 9d ago | 2d ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 100.00% | 98.60% | 35.01% | 35.01% | 456 ms | ↓ 0.75x | 50 | 1m | 9d ago | 2d ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 99.80% | 46.31% | 46.31% | 1719 ms | → 1.02x | 8 | 0s | 11d ago | 2d ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.82% | 99.82% | 99.82% | 513 ms | → 1.02x | 5 | 0s | 10d ago | 2d ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 99.98% | 99.69% | 99.69% | 955 ms | ↓ 0.91x | 1 | 0s | 24d ago | 2d ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.83% | 99.94% | 99.94% | 873 ms | ↑ 1.26x | 7 | 0s | 10d ago | 2d ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 100.00% | 99.94% | 99.94% | 1011 ms | ↑ 1.06x | 0 | — | — | 2d ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 100.00% | 99.73% | 99.92% | 99.92% | 1309 ms | ↑ 1.47x | 11 | 0s | 9d ago | 2d ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 99.88% | 99.96% | 99.96% | 726 ms | → 0.96x | 5 | 0s | 9d ago | 2d ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 98.93% | 99.57% | 99.57% | 759 ms | ↓ 0.83x | 40 | 45s | 9d ago | 2d ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.40% | 83.37% | 83.37% | 705 ms | → 1.00x | 24 | 0s | 10d ago | 2d ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 100.00% | 100.00% | 327 ms | → 1.00x | 0 | — | — | 2d ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 336 ms | → 0.96x | 0 | — | — | 2d ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 99.73% | 98.77% | 98.77% | 614 ms | → 0.98x | 4 | 18m | 16d ago | 2d ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 96.78% | 98.78% | 98.78% | 962 ms | ↑ 1.16x | 67 | 9m | 12d ago | 2d ago |
| [共绩算力](https://lmspeed.net/provider/d06050025-qwen330b-a3b-1789-zqcxzjgo-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1488 ms | → 1.00x | 0 | — | — | 2d ago |
| [共绩算力](https://lmspeed.net/provider/d07171426-qwen330b-a3b-2824-mpd4ztzm-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1895 ms | → 1.00x | 0 | — | — | 2d ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 99.98% | 99.99% | 99.99% | 523 ms | ↓ 0.90x | 1 | 0s | 16d ago | 2d ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 98.86% | 98.86% | 98.86% | 1158 ms | ↑ 1.06x | 25 | 2m | 7d ago | 2d ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.98% | 99.92% | 99.92% | 678 ms | ↑ 1.14x | 1 | 0s | 12d ago | 2d ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 100.00% | 99.88% | 99.92% | 99.92% | 1243 ms | ↓ 0.65x | 5 | 0s | 9d ago | 2d ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 100.00% | 99.30% | 99.30% | 99.30% | 514 ms | ↓ 0.81x | 14 | 10m | 11d ago | 2d ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 99.93% | 99.90% | 99.90% | 1345 ms | ↑ 1.25x | 3 | 0s | 7d ago | 2d ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 100.00% | 99.48% | 97.99% | 97.99% | 880 ms | → 1.04x | 13 | 6m | 10d ago | 2d ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 100.00% | 99.93% | 89.89% | 89.89% | 701 ms | ↑ 1.87x | 3 | 0s | 10d ago | 2d ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 98.21% | 99.51% | 99.51% | 505 ms | ↓ 0.59x | 60 | 2m | 9d ago | 2d ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.98% | 99.97% | 99.97% | 628 ms | → 0.98x | 1 | 0s | 29d ago | 2d ago |
| [Groq](https://lmspeed.net/provider/groq) | 100.00% | 99.98% | 99.99% | 99.99% | 222 ms | ↓ 0.52x | 1 | 0s | 13d ago | 2d ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 100.00% | 99.88% | 39.62% | 39.62% | 571 ms | ↑ 1.09x | 2 | 15m | 14d ago | 2d ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.90% | 84.63% | 84.63% | 1335 ms | ↑ 1.47x | 4 | 0s | 14d ago | 2d ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 100.00% | 100.00% | 100.00% | 100.00% | 361 ms | → 1.01x | 0 | — | — | 2d ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 100.00% | 100.00% | 89.73% | 89.73% | 347 ms | ↓ 0.73x | 0 | — | — | 2d ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 99.93% | 99.73% | 99.73% | 2060 ms | ↑ 1.12x | 3 | 0s | 7d ago | 2d ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.75% | 86.45% | 86.45% | 482 ms | ↓ 0.79x | 9 | 1m | 8d ago | 2d ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 100.00% | 99.92% | 99.92% | 1046 ms | ↑ 1.23x | 0 | — | — | 2d ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 100.00% | 97.60% | 97.60% | 97.60% | 638 ms | → 1.02x | 1 | 13h 39m | 27d ago | 2d ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 100.00% | 100.00% | 613 ms | → 1.00x | 0 | — | — | 2d ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 94.47% | 94.47% | 94.47% | 969 ms | ↓ 0.89x | 2 | 6h 40m | 10d ago | 2d ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.95% | 56.90% | 56.90% | 506 ms | ↓ 0.75x | 2 | 0s | 11d ago | 2d ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.73% | 70.83% | 70.83% | 1035 ms | ↑ 1.13x | 10 | 57s | 10d ago | 2d ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.75% | 99.78% | 99.78% | 1244 ms | → 0.97x | 8 | 2m | 23d ago | 2d ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 99.80% | 98.98% | 98.98% | 1171 ms | → 1.01x | 8 | 0s | 16d ago | 2d ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.98% | 55.14% | 55.14% | 1232 ms | ↑ 1.48x | 1 | 0s | 20d ago | 2d ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 100.00% | 99.75% | 99.61% | 99.61% | 989 ms | → 0.99x | 10 | 0s | 10d ago | 2d ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 100.00% | 97.39% | 99.30% | 99.30% | 753 ms | ↓ 0.77x | 79 | 3m | 9d ago | 2d ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.98% | 44.14% | 44.14% | 321 ms | ↑ 1.15x | 1 | 0s | 16d ago | 2d ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 98.60% | 97.52% | 97.52% | 919 ms | ↓ 0.74x | 5 | 1h 42m | 13d ago | 2d ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 99.90% | 99.69% | 99.69% | 1200 ms | → 1.03x | 3 | 3m | 10d ago | 2d ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.90% | 99.91% | 99.91% | 1050 ms | ↓ 0.94x | 4 | 0s | 12d ago | 2d ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 99.90% | 99.97% | 99.97% | 1194 ms | → 0.99x | 4 | 0s | 9d ago | 2d ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.95% | 99.96% | 99.96% | 511 ms | ↑ 1.23x | 2 | 0s | 16d ago | 2d ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 82.65% | 82.65% | 82.65% | 918 ms | ↓ 0.87x | 1 | 4d 4h | 27d ago | 2d ago |
| [共绩算力](https://lmspeed.net/provider/ollama-webuiv20250524193100-25-285-arwlq2xd-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1778 ms | → 1.00x | 0 | — | — | 2d ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 100.00% | 99.57% | 99.57% | 99.57% | 570 ms | ↓ 0.66x | 5 | 4m | 10d ago | 2d ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 79.03% | 79.03% | 507 ms | → 0.97x | 0 | — | — | 2d ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 100.00% | 100.00% | 99.99% | 99.99% | 418 ms | → 1.02x | 0 | — | — | 2d ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 100.00% | 98.46% | 98.67% | 98.67% | 506 ms | ↓ 0.65x | 49 | 3m | 9d ago | 2d ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 47.52% | 47.52% | 699 ms | ↑ 1.21x | 0 | — | — | 2d ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 100.00% | 99.13% | 56.97% | 56.97% | 910 ms | ↓ 0.71x | 31 | 1m | 9d ago | 2d ago |
| [共绩算力](https://lmspeed.net/provider/qwen3-30b-a3b-285-rzex8cnu-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 325 ms | → 1.00x | 0 | — | — | 2d ago |
| [共绩算力](https://lmspeed.net/provider/qwen3-vllm-4b-285-vbscdjm7-8000-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1429 ms | → 1.00x | 0 | — | — | 2d ago |
| [共绩算力](https://lmspeed.net/provider/qwen330b-a3b-2505251145-182-mupthhed-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 324 ms | → 1.00x | 0 | — | — | 2d ago |
| [共绩算力](https://lmspeed.net/provider/qwen330b-a3b-2505261820-617-uo2qwpwi-11434-550c-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 1774 ms | → 1.00x | 0 | — | — | 2d ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 99.93% | 98.87% | 98.87% | 631 ms | → 0.97x | 3 | 0s | 10d ago | 2d ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 100.00% | 98.29% | 99.53% | 99.53% | 1335 ms | → 1.04x | 57 | 2m | 9d ago | 2d ago |
| [Sisuo New API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 100.00% | 100.00% | 100.00% | 823 ms | → 1.00x | 0 | — | — | 2d ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.98% | 99.99% | 99.99% | 1462 ms | ↑ 1.26x | 1 | 0s | 15d ago | 2d ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 100.00% | 95.32% | 95.32% | 95.32% | 485 ms | ↓ 0.62x | 1 | 15h 29m | 15d ago | 2d ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.32% | 99.32% | 392 ms | → 0.99x | 0 | — | — | 2d ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 95.96% | 79.65% | 79.65% | 462 ms | ↓ 0.80x | 30 | 42m | 9d ago | 2d ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 99.13% | 99.75% | 99.75% | 1214 ms | ↓ 0.66x | 35 | 0s | 9d ago | 2d ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 51.04% | 49.32% | 49.32% | 717 ms | ↑ 1.22x | 1 | 13d 14h | 30d ago | 2d ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 18.86% | 4.80% | 4.80% | 1309 ms | ↓ 0.92x | 1 | 22d 17h | 30d ago | 2d ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.65% | 98.14% | 98.14% | 1451 ms | ↓ 0.88x | 14 | 0s | 9d ago | 2d ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 100.00% | 99.78% | 99.78% | 99.78% | 956 ms | ↑ 1.60x | 5 | 2m | 16d ago | 2d ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.83% | 97.80% | 97.80% | 564 ms | ↑ 1.27x | 6 | 2m | 10d ago | 2d ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 100.00% | 99.90% | 99.93% | 99.93% | 1167 ms | ↓ 0.67x | 4 | 0s | 10d ago | 2d ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.70% | 99.84% | 99.84% | 490 ms | → 1.01x | 6 | 10m | 11d ago | 2d ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 88.51% | 88.51% | 88.51% | 1087 ms | ↓ 0.93x | 1 | 1d 1h | 12d ago | 2d ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.68% | 99.83% | 99.83% | 1093 ms | → 0.99x | 9 | 4m | 8d ago | 2d ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.98% | 99.97% | 99.97% | 921 ms | ↓ 0.91x | 1 | 0s | 24d ago | 2d ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 94.67% | 94.67% | 94.67% | 662 ms | ↓ 0.63x | 1 | 12h 20m | 12d ago | 2d ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.88% | 98.94% | 98.94% | 772 ms | → 1.02x | 2 | 15m | 15d ago | 2d ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 99.98% | 99.99% | 99.99% | 532 ms | → 1.04x | 1 | 0s | 9d ago | 2d ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 99.86% | 99.83% | 99.78% | 99.78% | 2045 ms | → 0.99x | 7 | 0s | 6d ago | 2d ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.86% | 99.87% | 99.87% | 99.87% | 648 ms | → 0.99x | 1 | 0s | 7d ago | 2d ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.86% | 99.95% | 99.99% | 99.99% | 571 ms | ↓ 0.86x | 2 | 0s | 4d ago | 2d ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.86% | 99.93% | 99.80% | 99.80% | 668 ms | → 1.02x | 3 | 0s | 6d ago | 2d ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.86% | 99.80% | 99.74% | 99.74% | 866 ms | ↓ 0.85x | 8 | 0s | 4d ago | 2d ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.86% | 99.30% | 99.53% | 99.53% | 1065 ms | → 0.96x | 24 | 2m | 4d ago | 2d ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.86% | 99.98% | 99.91% | 99.91% | 766 ms | → 1.04x | 1 | 0s | 5d ago | 2d ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.86% | 98.96% | 99.48% | 99.48% | 679 ms | ↓ 0.78x | 32 | 3m | 3d ago | 2d ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 99.86% | 98.11% | 99.37% | 99.37% | 809 ms | ↓ 0.85x | 60 | 3m | 5d ago | 2d ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 99.86% | 99.93% | 99.65% | 99.65% | 819 ms | ↑ 1.14x | 3 | 0s | 6d ago | 2d ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.86% | 99.55% | 99.18% | 99.18% | 1566 ms | → 0.96x | 15 | 2m | 3d ago | 2d ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.86% | 99.78% | 99.80% | 99.80% | 860 ms | → 1.04x | 8 | 1m | 4d ago | 2d ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.86% | 99.95% | 99.93% | 99.93% | 1470 ms | ↑ 1.21x | 2 | 0s | 5d ago | 2d ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.86% | 96.40% | 96.08% | 96.08% | 1610 ms | → 1.05x | 52 | 18m | 5d ago | 2d ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.86% | 99.88% | 99.93% | 99.93% | 499 ms | ↑ 1.66x | 5 | 0s | 4d ago | 2d ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.86% | 99.98% | 96.79% | 96.79% | 1572 ms | ↓ 0.95x | 1 | 0s | 6d ago | 2d ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.86% | 99.95% | 99.97% | 99.97% | 1094 ms | → 0.99x | 2 | 0s | 4d ago | 2d ago |
| [LLM.PM](https://lmspeed.net/provider/llm-pm) | 99.86% | 99.28% | 32.64% | 32.64% | 1258 ms | ↓ 0.87x | 17 | 7m | 3d ago | 2d ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 99.86% | 98.46% | 98.27% | 98.27% | 1778 ms | ↓ 0.86x | 60 | 20s | 5d ago | 2d ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.86% | 99.85% | 99.91% | 99.91% | 1239 ms | → 1.00x | 6 | 0s | 2d ago | 2d ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.86% | 99.95% | 99.91% | 99.91% | 671 ms | ↓ 0.94x | 2 | 0s | 3d ago | 2d ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 99.86% | 95.64% | 96.82% | 96.82% | 977 ms | ↓ 0.84x | 7 | 3h 60m | 3d ago | 2d ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 99.86% | 99.90% | 49.32% | 49.32% | 1214 ms | ↓ 0.92x | 4 | 0s | 3d ago | 2d ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.86% | 99.95% | 30.45% | 30.45% | 2153 ms | ↑ 1.05x | 2 | 0s | 3d ago | 2d ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.86% | 96.94% | 96.42% | 96.42% | 1936 ms | ↓ 0.93x | 91 | 4m | 7d ago | 2d ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.86% | 99.88% | 99.86% | 99.86% | 1252 ms | ↑ 1.32x | 5 | 0s | 5d ago | 2d ago |
| [共绩算力 (DeepTranslate)](https://lmspeed.net/provider/550c-deeptranslate-2) | 99.86% | 99.90% | 90.37% | 90.37% | 1359 ms | ↓ 0.58x | 4 | 0s | 3d ago | 2d ago |
| [共绩算力 (Ollama)](https://lmspeed.net/provider/550c-ollama) | 99.86% | 99.93% | 95.23% | 95.23% | 2835 ms | ↑ 1.39x | 3 | 0s | 3d ago | 2d ago |
| [共绩算力 (Qwen3-2)](https://lmspeed.net/provider/550c-qwen3-2) | 99.86% | 99.98% | 94.66% | 94.66% | 1611 ms | ↑ 1.53x | 1 | 0s | 7d ago | 2d ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.86% | 92.87% | 97.40% | 97.40% | 2440 ms | → 0.96x | 15 | 3h 1m | 6d ago | 2d ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.86% | 99.90% | 99.84% | 99.84% | 2144 ms | ↑ 1.14x | 4 | 0s | 2d ago | 2d ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.86% | 99.98% | 99.71% | 99.71% | 763 ms | → 1.02x | 1 | 0s | 3d ago | 2d ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.86% | 99.78% | 99.85% | 99.85% | 1178 ms | ↑ 1.06x | 8 | 1m | 7d ago | 2d ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.86% | 99.05% | 99.07% | 99.07% | 665 ms | ↓ 0.65x | 36 | 33s | 7d ago | 2d ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.86% | 99.65% | 52.98% | 52.98% | 1092 ms | → 0.96x | 12 | 2m | 2d ago | 2d ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.86% | 99.80% | 90.58% | 90.58% | 796 ms | → 0.96x | 8 | 0s | 7d ago | 2d ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.86% | 99.35% | 50.67% | 50.67% | 793 ms | ↓ 0.92x | 18 | 4m | 3d ago | 2d ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.86% | 98.40% | 95.49% | 95.49% | 783 ms | ↓ 0.57x | 45 | 4m | 5d ago | 2d ago |
| [ngrok Proxy (e9ea)](https://lmspeed.net/provider/ngrok-e9ea) | 99.86% | 99.90% | 99.77% | 99.77% | 714 ms | ↑ 1.16x | 3 | 3m | 3d ago | 2d ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.86% | 99.88% | 99.77% | 99.77% | 704 ms | → 1.05x | 4 | 3m | 2d ago | 2d ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.86% | 19.22% | 4.89% | 4.89% | 1689 ms | ↑ 1.14x | 2 | 11d 6h | 4d ago | 2d ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.86% | 99.73% | 40.43% | 40.43% | 455 ms | → 0.97x | 11 | 0s | 5d ago | 2d ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.86% | 99.93% | 99.80% | 99.80% | 374 ms | → 0.96x | 3 | 0s | 3d ago | 2d ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.86% | 99.55% | 69.98% | 69.98% | 447 ms | → 1.00x | 11 | 6m | 5d ago | 2d ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 99.86% | 94.21% | 67.22% | 67.22% | 1287 ms | ↓ 0.81x | 28 | 1h 13m | 3d ago | 2d ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.86% | 99.85% | 72.52% | 72.52% | 1192 ms | ↓ 0.82x | 6 | 0s | 3d ago | 2d ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.86% | 96.98% | 95.86% | 95.86% | 741 ms | ↓ 0.95x | 29 | 32m | 4d ago | 2d ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.86% | 99.53% | 84.32% | 84.32% | 1886 ms | → 0.98x | 8 | 14m | 4d ago | 2d ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.86% | 99.93% | 99.85% | 99.85% | 897 ms | → 1.02x | 3 | 0s | 3d ago | 2d ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.86% | 98.10% | 98.85% | 98.85% | 1028 ms | → 1.04x | 30 | 15m | 4d ago | 2d ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 99.86% | 99.30% | 87.89% | 87.89% | 2117 ms | ↓ 0.75x | 28 | 0s | 6d ago | 2d ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.86% | 99.78% | 97.04% | 97.04% | 436 ms | → 0.98x | 9 | 0s | 3d ago | 2d ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.86% | 99.83% | 82.05% | 82.05% | 1029 ms | → 1.00x | 4 | 8m | 6d ago | 2d ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.86% | 96.39% | 96.39% | 96.39% | 992 ms | ↑ 1.22x | 3 | 5h | 4d ago | 2d ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.86% | 99.90% | 99.90% | 99.90% | 904 ms | → 1.01x | 1 | 0s | 4d ago | 2d ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.86% | 93.41% | 93.41% | 93.41% | 516 ms | → 1.03x | 19 | 2h 6m | 3d ago | 2d ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.86% | 99.81% | 99.81% | 99.81% | 752 ms | ↓ 0.95x | 3 | 0s | 6d ago | 2d ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 99.86% | 95.00% | 95.00% | 95.00% | 489 ms | ↓ 0.35x | 30 | 29m | 3d ago | 2d ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.86% | 92.98% | 92.98% | 92.98% | 445 ms | → 0.97x | 3 | 5h 3m | 3d ago | 2d ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.86% | 99.73% | 99.75% | 99.75% | 1343 ms | → 0.99x | 10 | 1m | 6d ago | 2d ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 99.86% | 99.60% | 99.60% | 99.60% | 913 ms | → 0.97x | 4 | 0s | 3d ago | 2d ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.86% | 99.90% | 99.90% | 99.90% | 534 ms | → 1.03x | 1 | 0s | 5d ago | 2d ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.86% | 93.76% | 93.76% | 93.76% | 1573 ms | → 0.97x | 6 | 2h 40m | 3d ago | 2d ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 99.86% | 21.24% | 19.54% | 19.54% | 2189 ms | ↓ 0.77x | 2 | 10d 23h | 3d ago | 2d ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.86% | 97.27% | 97.27% | 97.27% | 384 ms | ↓ 0.90x | 11 | 1h 27m | 3d ago | 2d ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.86% | 98.58% | 98.59% | 98.59% | 688 ms | → 1.02x | 32 | 8m | 5d ago | 2d ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 99.86% | 99.87% | 99.87% | 99.87% | 777 ms | → 1.02x | 1 | 0s | 3d ago | 2d ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.86% | 99.91% | 99.91% | 99.91% | 1065 ms | → 1.04x | 2 | 0s | 2d ago | 2d ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.72% | 98.73% | 99.31% | 99.31% | 1526 ms | → 1.03x | 19 | 17m | 3d ago | 2d ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 99.72% | 99.73% | 99.81% | 99.81% | 658 ms | → 1.04x | 11 | 0s | 5d ago | 2d ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.72% | 99.35% | 99.42% | 99.42% | 1255 ms | ↓ 0.78x | 26 | 0s | 6d ago | 2d ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.72% | 99.59% | 99.59% | 99.59% | 1460 ms | → 1.02x | 10 | 0s | 2d ago | 2d ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.72% | 99.83% | 99.88% | 99.88% | 394 ms | ↓ 0.76x | 7 | 0s | 2d ago | 2d ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 99.72% | 99.08% | 98.81% | 98.81% | 2154 ms | ↑ 1.06x | 36 | 17s | 6d ago | 2d ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.72% | 99.73% | 99.75% | 99.75% | 1693 ms | ↓ 0.73x | 10 | 59s | 2d ago | 2d ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.72% | 99.73% | 99.40% | 99.40% | 1893 ms | ↑ 1.58x | 11 | 0s | 3d ago | 2d ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 99.72% | 99.90% | 99.84% | 99.84% | 1487 ms | → 1.03x | 4 | 0s | 3d ago | 2d ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 99.72% | 99.83% | 88.21% | 88.21% | 2717 ms | ↑ 1.10x | 7 | 0s | 3d ago | 2d ago |
| [共绩算力 (QwQ)](https://lmspeed.net/provider/550c-qwq) | 99.72% | 99.90% | 95.22% | 95.22% | 2416 ms | → 0.99x | 4 | 0s | 5d ago | 2d ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 99.72% | 98.88% | 98.80% | 98.80% | 1271 ms | ↓ 0.88x | 42 | 43s | 3d ago | 2d ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.72% | 99.68% | 98.93% | 98.93% | 1447 ms | → 0.95x | 12 | 51s | 3d ago | 2d ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.72% | 99.93% | 99.84% | 99.84% | 1566 ms | → 1.04x | 2 | 5m | 3d ago | 2d ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.72% | 99.80% | 48.22% | 48.22% | 1666 ms | ↓ 0.88x | 8 | 0s | 3d ago | 2d ago |
| [ngrok Proxy (Jesse)](https://lmspeed.net/provider/ngrok-jesse) | 99.72% | 99.88% | 99.83% | 99.83% | 564 ms | ↑ 1.08x | 3 | 7m | 2d ago | 2d ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.72% | 98.45% | 94.99% | 94.99% | 523 ms | ↓ 0.64x | 56 | 1m | 5d ago | 2d ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.72% | 99.50% | 72.79% | 72.79% | 867 ms | ↑ 1.59x | 17 | 2m | 2d ago | 2d ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 99.72% | 99.75% | 99.75% | 99.75% | 1012 ms | → 1.04x | 4 | 0s | 2d ago | 2d ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 99.72% | 95.59% | 95.59% | 95.59% | 1005 ms | → 0.99x | 4 | 1h 48m | 3d ago | 2d ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 99.72% | 95.33% | 95.33% | 95.33% | 381 ms | ↓ 0.60x | 47 | 25m | 5d ago | 2d ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.72% | 99.20% | 99.20% | 99.20% | 1244 ms | ↑ 1.07x | 7 | 19m | 3d ago | 2d ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.72% | 99.91% | 99.91% | 99.91% | 724 ms | → 1.01x | 3 | 0s | 3d ago | 2d ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.72% | 97.69% | 97.69% | 97.69% | 316 ms | ↓ 0.29x | 39 | 5m | 3d ago | 2d ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.72% | 91.75% | 91.75% | 91.75% | 829 ms | ↓ 0.89x | 13 | 1h 4m | 2d ago | 2d ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.58% | 99.33% | 99.67% | 99.67% | 736 ms | ↓ 0.74x | 17 | 6m | 6d ago | 2d ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.58% | 96.10% | 97.48% | 97.48% | 1624 ms | ↓ 0.92x | 148 | 36s | 3d ago | 2d ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 99.58% | 99.70% | 98.86% | 98.86% | 2416 ms | → 1.04x | 11 | 55s | 4d ago | 2d ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.58% | 99.48% | 99.13% | 99.13% | 444 ms | ↓ 0.70x | 21 | 0s | 3d ago | 2d ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.58% | 99.50% | 99.78% | 99.78% | 1066 ms | → 1.02x | 20 | 0s | 3d ago | 2d ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.58% | 95.50% | 98.49% | 98.49% | 1880 ms | ↓ 0.67x | 162 | 1m | 2d ago | 2d ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.58% | 28.49% | 43.49% | 43.49% | 1029 ms | ↑ 1.14x | 6 | 3d 8h | 2d ago | 2d ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.58% | 99.85% | 39.69% | 39.69% | 1003 ms | → 1.00x | 6 | 0s | 3d ago | 2d ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.58% | 99.05% | 99.42% | 99.42% | 763 ms | ↑ 1.28x | 17 | 12m | 4d ago | 2d ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 99.58% | 98.73% | 97.89% | 97.89% | 1055 ms | → 1.04x | 16 | 22m | 4d ago | 2d ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.58% | 99.60% | 98.21% | 98.21% | 1199 ms | → 1.04x | 16 | 0s | 2d ago | 2d ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.58% | 99.78% | 99.72% | 99.72% | 1462 ms | ↑ 1.30x | 7 | 3m | 3d ago | 2d ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.58% | 97.86% | 97.86% | 97.86% | 2354 ms | ↑ 1.66x | 37 | 6m | 3d ago | 2d ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.58% | 97.60% | 97.60% | 97.60% | 254 ms | ↑ 1.15x | 6 | 2h 2m | 2d ago | 2d ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 99.58% | 96.46% | 96.46% | 96.46% | 1147 ms | ↑ 2.03x | 9 | 1h 49m | 4d ago | 2d ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 99.58% | 97.16% | 97.16% | 97.16% | 839 ms | → 1.04x | 7 | 2h 2m | 2d ago | 2d ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.45% | 99.78% | 90.24% | 90.24% | 839 ms | ↑ 1.66x | 9 | 0s | 2d ago | 2d ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.45% | 97.76% | 97.86% | 97.86% | 3265 ms | ↑ 1.07x | 81 | 1m | 2d ago | 2d ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.44% | 71.01% | 63.02% | 63.02% | 1606 ms | ↓ 0.95x | 45 | 4h 8m | 7d ago | 2d ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 99.44% | 99.63% | 99.56% | 99.56% | 2796 ms | → 0.97x | 15 | 0s | 5d ago | 2d ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.44% | 97.66% | 97.41% | 97.41% | 219 ms | ↓ 0.46x | 15 | 53m | 3d ago | 2d ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.44% | 99.50% | 98.33% | 98.33% | 621 ms | → 1.02x | 16 | 2m | 2d ago | 2d ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.43% | 93.26% | 94.68% | 94.68% | 1041 ms | → 1.03x | 9 | 4h 50m | 2d ago | 2d ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.43% | 94.74% | 94.40% | 94.40% | 1981 ms | ↓ 0.92x | 127 | 7m | 4d ago | 2d ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.43% | 95.73% | 95.73% | 95.73% | 928 ms | ↓ 0.84x | 23 | 33m | 3d ago | 2d ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.43% | 58.45% | 52.48% | 52.48% | 1304 ms | ↓ 0.64x | 8 | 1d 10h | 3d ago | 2d ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.43% | 99.65% | 99.65% | 99.65% | 835 ms | → 0.98x | 7 | 4m | 4d ago | 2d ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 99.31% | 99.78% | 99.70% | 99.70% | 2476 ms | ↑ 1.13x | 9 | 0s | 5d ago | 2d ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.30% | 99.85% | 99.62% | 99.62% | 747 ms | → 1.02x | 6 | 0s | 5d ago | 2d ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.30% | 98.58% | 32.27% | 32.27% | 705 ms | ↓ 0.91x | 47 | 2m | 2d ago | 2d ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.29% | 95.53% | 95.53% | 95.53% | 1960 ms | → 1.00x | 16 | 47m | 2d ago | 2d ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.29% | 95.16% | 95.16% | 95.16% | 1061 ms | ↓ 0.70x | 47 | 19m | 2d ago | 2d ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.17% | 99.28% | 99.27% | 99.27% | 1669 ms | → 1.03x | 28 | 22s | 2d ago | 2d ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 99.16% | 99.60% | 97.74% | 97.74% | 1326 ms | ↓ 0.93x | 15 | 40s | 4d ago | 2d ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.16% | 97.93% | 99.09% | 99.09% | 892 ms | ↓ 0.91x | 64 | 3m | 2d ago | 2d ago |
| [Z.ai](https://lmspeed.net/provider/z-ai) | 99.16% | 99.70% | 99.81% | 99.81% | 1284 ms | → 0.97x | 12 | 0s | 2d ago | 2d ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.15% | 97.13% | 99.22% | 99.22% | 1051 ms | ↓ 0.84x | 78 | 5m | 3d ago | 2d ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 99.15% | 99.48% | 98.23% | 98.23% | 3298 ms | → 1.04x | 19 | 1m | 3d ago | 2d ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.14% | 99.14% | 99.14% | 99.14% | 2046 ms | → 1.00x | 4 | 3m | 3d ago | 2d ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 99.03% | 99.31% | 98.45% | 98.45% | 2553 ms | ↓ 0.91x | 28 | 0s | 2d ago | 2d ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 99.02% | 95.15% | 90.23% | 90.23% | 1742 ms | → 1.04x | 128 | 5m | 3d ago | 2d ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 99.02% | 98.85% | 99.18% | 99.18% | 2877 ms | ↑ 1.07x | 18 | 16m | 3d ago | 2d ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.01% | 99.01% | 99.01% | 99.01% | 938 ms | → 1.00x | 1 | 0s | 2d ago | 2d ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.01% | 88.54% | 88.54% | 88.54% | 1846 ms | ↓ 0.79x | 75 | 15m | 2d ago | 2d ago |

</details>

<details open>
<summary><strong>🟡 Degraded (112)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 98.96% | 98.96% | 98.96% | 98.96% | 573 ms | → 1.00x | 6 | 0s | 3d ago | 2d ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 98.89% | 98.21% | 98.50% | 98.50% | 3513 ms | → 0.98x | 67 | 45s | 4d ago | 2d ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.87% | 98.55% | 97.53% | 97.53% | 655 ms | → 1.03x | 26 | 12m | 4d ago | 2d ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 98.87% | 96.03% | 96.03% | 96.03% | 244 ms | ↓ 0.16x | 53 | 3m | 2d ago | 2d ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 98.75% | 99.23% | 98.82% | 98.82% | 3382 ms | ↑ 1.09x | 19 | 6m | 3d ago | 2d ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.73% | 99.33% | 42.03% | 42.03% | 518 ms | ↓ 0.76x | 23 | 2m | 2d ago | 2d ago |
| [人人 API](https://lmspeed.net/provider/llm-whitedream-top) | 98.73% | 88.20% | 88.20% | 88.20% | 534 ms | ↓ 0.36x | 47 | 29m | 2d ago | 2d ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 98.60% | 97.06% | 98.78% | 98.78% | 726 ms | ↓ 0.62x | 78 | 5m | 2d ago | 2d ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.59% | 98.59% | 98.59% | 98.59% | 583 ms | → 1.00x | 1 | 50m | 3d ago | 2d ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 98.58% | 99.23% | 98.10% | 98.10% | 3621 ms | ↑ 1.05x | 29 | 41s | 2d ago | 2d ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 98.45% | 98.50% | 55.34% | 55.34% | 579 ms | ↑ 1.06x | 41 | 5m | 3d ago | 2d ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.34% | 95.68% | 96.49% | 96.49% | 3558 ms | → 0.99x | 156 | 1m | 3d ago | 2d ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.32% | 99.65% | 99.69% | 99.69% | 815 ms | ↑ 1.05x | 7 | 10m | 3d ago | 2d ago |
| [ModelScope](https://lmspeed.net/provider/ms-ens-257c1f27-2cc6-api-inference-modelscope-cn) | 98.30% | 99.52% | 99.52% | 99.52% | 2904 ms | ↑ 1.06x | 13 | 54m | 2d ago | 2d ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 98.16% | 90.12% | 90.12% | 90.12% | 1381 ms | ↓ 0.90x | 62 | 34m | 3d ago | 2d ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 98.02% | 98.38% | 86.61% | 86.61% | 2303 ms | → 1.02x | 51 | 3m | 2d ago | 2d ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 98.02% | 99.63% | 97.29% | 97.29% | 1167 ms | ↑ 2.23x | 15 | 0s | 2d ago | 2d ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.02% | 95.16% | 95.16% | 95.16% | 2034 ms | ↑ 1.08x | 73 | 8m | 2d ago | 2d ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 97.78% | 77.07% | 93.11% | 93.11% | 3235 ms | ↓ 0.77x | 397 | 13m | 2d ago | 2d ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 97.59% | 98.03% | 95.88% | 95.88% | 1622 ms | ↓ 0.91x | 64 | 2m | 2d ago | 2d ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 97.59% | 92.65% | 92.65% | 92.65% | 1313 ms | ↓ 0.89x | 64 | 23m | 3d ago | 2d ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.37% | 97.37% | 97.37% | 97.37% | 2418 ms | → 1.00x | 3 | 0s | 2d ago | 2d ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 97.33% | 97.53% | 80.61% | 80.61% | 3432 ms | → 0.98x | 96 | 18s | 2d ago | 2d ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 97.31% | 63.08% | 63.08% | 63.08% | 812 ms | ↓ 0.28x | 42 | 2h 33m | 2d ago | 2d ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 97.31% | 98.17% | 98.17% | 98.17% | 513 ms | ↑ 1.31x | 44 | 6m | 2d ago | 2d ago |
| [GPT Load](https://lmspeed.net/provider/gpt-load-2) | 97.19% | 45.47% | 11.57% | 11.57% | 340 ms | ↓ 0.12x | 27 | 13h 20m | 2d ago | 2d ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 97.04% | 95.56% | 95.96% | 95.96% | 2184 ms | ↓ 0.86x | 90 | 10m | 3d ago | 2d ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 96.88% | 92.08% | 92.08% | 92.08% | 1689 ms | ↓ 0.73x | 126 | 11m | 2d ago | 2d ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 96.54% | 98.88% | 99.49% | 99.49% | 864 ms | ↓ 0.92x | 19 | 14m | 6d ago | 2d ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 96.32% | 84.85% | 84.85% | 84.85% | 1029 ms | ↓ 0.82x | 101 | 27m | 3d ago | 2d ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 96.20% | 96.26% | 97.03% | 97.03% | 660 ms | ↓ 0.76x | 6 | 4h 3m | 3d ago | 2d ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 96.06% | 99.28% | 99.60% | 99.60% | 983 ms | ↑ 1.20x | 2 | 2h 15m | 3d ago | 2d ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 95.65% | 98.95% | 98.90% | 98.90% | 462 ms | ↓ 0.45x | 13 | 22m | 4d ago | 2d ago |
| [小水管](https://lmspeed.net/provider/edge-pieixan-icu) | 94.77% | 97.36% | 96.89% | 96.89% | 950 ms | ↑ 1.23x | 26 | 30m | 3d ago | 2d ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 94.73% | 94.88% | 90.75% | 90.75% | 2189 ms | ↑ 1.06x | 120 | 7m | 2d ago | 2d ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 94.20% | 95.75% | 98.79% | 98.79% | 881 ms | ↓ 0.72x | 129 | 3m | 2d ago | 2d ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 93.91% | 81.16% | 81.16% | 81.16% | 986 ms | ↓ 0.88x | 14 | 2h 42m | 2d ago | 2d ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 93.34% | 87.45% | 87.45% | 87.45% | 4201 ms | ↓ 0.87x | 24 | 45m | 3d ago | 2d ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 92.54% | 94.61% | 97.07% | 97.07% | 3972 ms | ↑ 1.29x | 183 | 2m | 2d ago | 2d ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.67% | 98.48% | 97.25% | 97.25% | 968 ms | → 1.01x | 2 | 5h 40m | 3d ago | 2d ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 90.28% | 90.28% | 90.28% | 90.28% | 1395 ms | → 1.00x | 1 | 9h 60m | 7d ago | 2d ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 88.98% | 88.98% | 88.98% | 88.98% | 1074 ms | → 1.00x | 2 | 55m | 2d ago | 2d ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 88.75% | 83.10% | 95.64% | 95.64% | 4326 ms | ↑ 2.64x | 112 | 51m | 2d ago | 2d ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 88.47% | 96.64% | 97.59% | 97.59% | 2992 ms | ↓ 0.93x | 134 | 5s | 2d ago | 2d ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 87.85% | 87.32% | 79.33% | 79.33% | 4238 ms | ↑ 1.10x | 400 | 3m | 2d ago | 2d ago |
| [Cloudflare](https://lmspeed.net/provider/marcus-fig-joy-postings-trycloudflare-com) | 86.83% | 86.46% | 86.46% | 86.46% | 191 ms | ↓ 0.95x | 1 | 15h 49m | 7d ago | 2d ago |
| [gptanon-2api](https://lmspeed.net/provider/gptanon-2api-to2ai-workers-dev) | 85.34% | 85.34% | 85.34% | 85.34% | 143 ms | → 1.00x | 1 | 13h 50m | 6d ago | 2d ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 85.01% | 86.15% | 84.59% | 84.59% | 1856 ms | → 1.04x | 456 | 2m | 2d ago | 2d ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 84.83% | 92.21% | 75.03% | 75.03% | 1605 ms | ↑ 1.23x | 150 | 11m | 2d ago | 2d ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 83.99% | 88.44% | 88.44% | 88.44% | 1016 ms | ↓ 0.78x | 5 | 10h 22m | 8d ago | 2d ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 83.88% | 93.29% | 69.62% | 69.62% | 2034 ms | ↑ 1.38x | 76 | 26m | 3d ago | 2d ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 83.14% | 85.44% | 85.44% | 85.44% | 1308 ms | → 0.95x | 4 | 5h 15m | 3d ago | 2d ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 82.89% | 14.62% | 9.29% | 9.29% | 1028 ms | ↑ 1.39x | 7 | 3d 9h | 3d ago | 2d ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 82.36% | 91.13% | 92.63% | 92.63% | 4712 ms | → 1.05x | 172 | 11m | 2d ago | 2d ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 81.64% | 90.82% | 61.42% | 61.42% | 1393 ms | → 0.99x | 46 | 1h 10m | 2d ago | 2d ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 81.63% | 81.86% | 89.34% | 89.34% | 4059 ms | → 0.97x | 484 | 5m | 2d ago | 2d ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 81.60% | 95.99% | 95.99% | 95.99% | 1136 ms | ↑ 1.08x | 32 | 42m | 2d ago | 2d ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 80.76% | 78.93% | 44.91% | 44.91% | 1375 ms | ↑ 1.67x | 121 | 60m | 2d ago | 2d ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 80.10% | 80.10% | 80.10% | 80.10% | 245 ms | → 1.00x | 2 | 10h 19m | 3d ago | 2d ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 79.75% | 78.21% | 77.34% | 77.34% | 4597 ms | → 1.01x | 604 | 4m | 2d ago | 2d ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 79.63% | 78.34% | 69.08% | 69.08% | 4397 ms | → 1.01x | 619 | 4m | 2d ago | 2d ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 78.87% | 80.90% | 32.85% | 32.85% | 3758 ms | → 0.98x | 557 | 4m | 2d ago | 2d ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 78.47% | 73.53% | 73.53% | 73.53% | 4334 ms | → 0.98x | 426 | 7m | 2d ago | 2d ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 78.33% | 60.17% | 60.17% | 60.17% | 723 ms | → 1.00x | 2 | 1d 7h | 3d ago | 2d ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 77.34% | 85.17% | 85.15% | 85.15% | 4446 ms | ↑ 1.36x | 313 | 9m | 2d ago | 2d ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 76.97% | 61.33% | 61.67% | 61.67% | 4572 ms | ↓ 0.89x | 885 | 8m | 2d ago | 2d ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 76.66% | 76.50% | 82.86% | 82.86% | 4596 ms | → 1.01x | 636 | 5m | 2d ago | 2d ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 75.67% | 75.45% | 51.71% | 51.71% | 4576 ms | → 1.00x | 670 | 5m | 2d ago | 2d ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 75.57% | 75.57% | 75.57% | 75.57% | 832 ms | → 1.00x | 6 | 5h 22m | 2d ago | 2d ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 75.11% | 75.62% | 73.78% | 73.78% | 4922 ms | ↑ 1.08x | 666 | 5m | 2d ago | 2d ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 74.86% | 64.14% | 72.01% | 72.01% | 4662 ms | ↓ 0.86x | 751 | 9m | 2d ago | 2d ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 74.65% | 78.14% | 83.52% | 83.52% | 4340 ms | → 1.01x | 615 | 4m | 2d ago | 2d ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 74.65% | 71.10% | 71.10% | 71.10% | 4534 ms | → 0.96x | 561 | 7m | 2d ago | 2d ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 74.06% | 76.40% | 82.25% | 82.25% | 4326 ms | ↑ 1.06x | 622 | 5m | 2d ago | 2d ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 72.35% | 72.35% | 72.35% | 72.35% | 903 ms | → 1.00x | 2 | 16h 60m | 3d ago | 2d ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 65.07% | 65.49% | 40.63% | 40.63% | 4492 ms | → 1.00x | 777 | 8m | 2d ago | 2d ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 63.88% | 11.26% | 9.89% | 9.89% | 1458 ms | → 0.98x | 1 | 24d 18h | 30d ago | 2d ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 61.33% | 66.79% | 77.46% | 77.46% | 4675 ms | ↑ 1.06x | 765 | 8m | 2d ago | 2d ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 58.57% | 62.48% | 71.43% | 71.43% | 4690 ms | → 1.03x | 831 | 9m | 2d ago | 2d ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 54.88% | 54.88% | 54.88% | 54.88% | 1941 ms | → 1.00x | 2 | 8h 19m | 2d ago | 2d ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 53.04% | 52.90% | 52.90% | 52.90% | 4882 ms | → 0.99x | 189 | 10m | 2d ago | 2d ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 37.82% | 25.12% | 25.12% | 25.12% | 1012 ms | ↓ 0.94x | 2 | 3d 2h | 3d ago | 2d ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 36.78% | 36.78% | 36.78% | 36.78% | 3453 ms | → 1.00x | 8 | 3h 29m | 2d ago | 2d ago |
| [Bycody CLI Proxy](https://lmspeed.net/provider/bycody-cli-proxy) | 30.09% | 30.09% | 30.09% | 30.09% | 1550 ms | → 1.00x | 2 | 20h 25m | 2d ago | 2d ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 29.68% | 29.68% | 29.68% | 29.68% | 1332 ms | → 1.00x | 2 | 21h | 2d ago | 2d ago |
| [32Zi 中转API](https://lmspeed.net/provider/32zi-api) | 25.06% | 25.06% | 25.06% | 25.06% | 2404 ms | → 1.00x | 2 | 1d 3h | 2d ago | 2d ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 24.83% | 24.83% | 24.83% | 24.83% | 804 ms | → 1.00x | 2 | 1d 11h | 2d ago | 2d ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 16.20% | 2.87% | 0.91% | 0.91% | 1685 ms | ↑ 1.95x | 1 | 27d 18h | 30d ago | 2d ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 16.01% | 2.84% | 0.72% | 0.72% | 2018 ms | ↑ 1.05x | 1 | 27d 18h | 30d ago | 2d ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 14.85% | 2.62% | 1.75% | 1.75% | 1348 ms | → 1.03x | 1 | 27d 19h | 30d ago | 2d ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 14.59% | 4.21% | 4.21% | 4.21% | 2295 ms | → 1.04x | 1 | 17d 1h | 20d ago | 2d ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 14.59% | 5.43% | 5.43% | 5.43% | 421 ms | → 1.02x | 1 | 13d 5h | 16d ago | 2d ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 14.45% | 2.75% | 2.75% | 2.75% | 77 ms | ↓ 0.44x | 1 | 25d 20h | 28d ago | 2d ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 14.45% | 2.97% | 2.97% | 2.97% | 221 ms | ↓ 0.86x | 1 | 23d 22h | 26d ago | 2d ago |
| [对空六课 API](https://lmspeed.net/provider/duikongliuke-api) | 14.43% | 2.54% | 2.08% | 2.08% | 568 ms | ↓ 0.86x | 1 | 27d 20h | 30d ago | 2d ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 14.41% | 2.54% | 1.29% | 1.29% | 656 ms | ↑ 1.14x | 1 | 27d 20h | 30d ago | 2d ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 14.37% | 2.54% | 0.73% | 0.73% | 333 ms | ↓ 0.61x | 1 | 27d 20h | 30d ago | 2d ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 14.37% | 2.54% | 0.66% | 0.66% | 614 ms | ↓ 0.89x | 1 | 27d 20h | 30d ago | 2d ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 14.37% | 2.54% | 1.61% | 1.61% | 1261 ms | → 1.00x | 1 | 27d 20h | 30d ago | 2d ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 14.37% | 2.54% | 0.65% | 0.65% | 1052 ms | ↓ 0.87x | 1 | 27d 20h | 30d ago | 2d ago |
| [3173721 New API](https://lmspeed.net/provider/3173721-new-api) | 14.23% | 2.52% | 0.64% | 0.64% | 712 ms | ↓ 0.62x | 2 | 13d 22h | 2d ago | 2d ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 14.23% | 2.52% | 0.64% | 0.64% | 1726 ms | ↑ 1.05x | 1 | 27d 20h | 30d ago | 2d ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 14.23% | 2.62% | 18.27% | 18.27% | 1814 ms | ↑ 1.50x | 3 | 9d 6h | 2d ago | 2d ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 14.19% | 2.51% | 0.64% | 0.64% | 927 ms | ↓ 0.93x | 1 | 27d 20h | 30d ago | 2d ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 14.09% | 69.05% | 92.11% | 92.11% | 2115 ms | ↓ 0.73x | 436 | 21m | 2d ago | 2d ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 13.46% | 7.16% | 7.16% | 7.16% | 3880 ms | ↑ 1.21x | 9 | 1d | 2d ago | 2d ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 12.90% | 12.90% | 12.90% | 12.90% | 2106 ms | → 1.00x | 1 | 13h 20m | 2d ago | 2d ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 11.61% | 52.35% | 52.35% | 52.35% | 798 ms | ↓ 0.29x | 6 | 1d 17h | 12d ago | 2d ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 11.41% | 67.31% | 45.71% | 45.71% | 1864 ms | ↓ 0.33x | 4 | 2d 11h | 2d ago | 2d ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 11.33% | 19.77% | 19.77% | 19.77% | 1823 ms | ↓ 0.53x | 20 | 12h 29m | 2d ago | 2d ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 8.84% | 34.01% | 76.89% | 76.89% | 170 ms | ↑ 1.29x | 8 | 2d 9h | 21d ago | 2d ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 6.49% | 1.17% | 13.45% | 13.45% | 1572 ms | → 0.97x | 1 | 28d 6h | 30d ago | 2d ago |

</details>

<details open>
<summary><strong>🔴 Down (158)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 88.59% | 95.74% | 39.97% | 39.97% | 222 ms | ↓ 0.57x | 19 | 1h 20m | 2d ago | 2d ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 85.35% | 96.98% | 41.41% | 41.41% | 1328 ms | ↓ 0.87x | 15 | 1h 15m | 3d ago | 2d ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 82.18% | 81.78% | 95.19% | 95.19% | 4440 ms | ↑ 2.17x | 158 | 37m | 2d ago | 2d ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 77.62% | 78.43% | 83.09% | 83.09% | 4446 ms | → 1.02x | 618 | 4m | 2d ago | 2d ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 66.34% | 72.96% | 82.59% | 82.59% | 4437 ms | ↑ 1.09x | 607 | 8m | 2d ago | 2d ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 63.31% | 69.72% | 69.72% | 69.72% | 4446 ms | → 1.04x | 305 | 9m | 3d ago | 2d ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 50.00% | 50.95% | 61.82% | 61.82% | 4787 ms | → 1.01x | 844 | 13m | 2d ago | 2d ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 45.18% | 34.04% | 40.37% | 40.37% | 1817 ms | ↓ 0.80x | 171 | 2h 26m | 4d ago | 2d ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 41.21% | 87.89% | 96.84% | 96.84% | 577 ms | ↓ 0.72x | 59 | 1h 16m | 5d ago | 2d ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 41.16% | 71.71% | 57.94% | 57.94% | 619 ms | ↑ 3.44x | 16 | 11h 55m | 5d ago | 2d ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 35.46% | 34.92% | 53.53% | 53.53% | 4703 ms | → 0.99x | 732 | 27m | 2d ago | 2d ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 24.01% | 86.31% | 63.55% | 63.55% | 1155 ms | ↓ 0.68x | 12 | 8h 52m | 6d ago | 2d ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 22.11% | 37.36% | 83.84% | 83.84% | 1011 ms | ↑ 1.18x | 3 | 6d 1h | 6d ago | 2d ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 19.24% | 20.91% | 20.36% | 20.36% | 1573 ms | → 1.04x | 615 | 43m | 2d ago | 2d ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 16.13% | 67.36% | 76.71% | 76.71% | 2924 ms | ↑ 2.76x | 492 | 19m | 6d ago | 2d ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 6.52% | 1.65% | 1.65% | 1.65% | 1348 ms | ↓ 0.70x | 2 | 9d 21h | 2d ago | 2d ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 3.52% | 0.62% | 0.19% | 0.19% | 4832 ms | ↑ 1.05x | 16 | 1d 18h | 2d ago | 2d ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 2.55% | 0.45% | 0.23% | 0.23% | 4737 ms | ↑ 1.17x | 15 | 1d 21h | 2d ago | 2d ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.41% | 0.50% | 0.13% | 0.13% | 822 ms | ↓ 0.31x | 17 | 1d 16h | 2d ago | 2d ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.28% | 0.05% | 4.51% | 4.51% | 515 ms | ↑ 1.94x | 2 | 14d 6h | 2d ago | 2d ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.62x | 1 | 28d 14h | 30d ago | 2d ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 46.58% | 83.61% | 83.61% | — | ↓ 0.24x | 8 | 1d 23h | 17d ago | 2d ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 13.10% | 22.63% | 22.63% | — | ↓ 0.94x | 9 | 2d 18h | 26d ago | 2d ago |
| [550C Cloud Temporary Endpoint](https://lmspeed.net/provider/550c-cloud-temporary-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 17h 30m | 2d ago | 2d ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.99x | 1 | 28d 14h | 30d ago | 2d ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 7.03% | 7.03% | — | → 0.95x | 1 | 28d 14h | 30d ago | 2d ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 16.28% | 4.14% | 4.14% | — | ↓ 0.34x | 2 | 12d | 17d ago | 2d ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 26.08% | 26.08% | — | ↑ 1.32x | 1 | 28d 14h | 30d ago | 2d ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 44.46% | 44.46% | — | ↓ 0.66x | 1 | 28d 14h | 30d ago | 2d ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.19x | 1 | 28d 14h | 30d ago | 2d ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 30.98% | 33.98% | 33.98% | — | ↓ 0.92x | 3 | 6d 16h | 21d ago | 2d ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.90x | 1 | 28d 14h | 30d ago | 2d ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 40m | 3d ago | 2d ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 4.76% | 4.76% | — | ↑ 1.49x | 1 | 28d 14h | 30d ago | 2d ago |
| [API 1 HEMF](https://lmspeed.net/provider/api-1-hemf) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 17h 60m | 2d ago | 2d ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 24.11% | 24.11% | — | ↓ 0.86x | 1 | 28d 14h | 30d ago | 2d ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 29.59% | 51.67% | 51.67% | — | ↓ 0.49x | 3 | 6d 19h | 22d ago | 2d ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 56.23% | 88.46% | 88.46% | — | ↓ 0.08x | 5 | 2d 14h | 15d ago | 2d ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.09x | 1 | 28d 14h | 30d ago | 2d ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.46x | 1 | 28d 14h | 30d ago | 2d ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 50.01% | 37.76% | 37.76% | — | ↓ 0.81x | 3 | 4d 21h | 16d ago | 2d ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [Nuiziyyds API](https://lmspeed.net/provider/api-nuiziyyds-com) | 0.00% | 0.00% | 10.89% | 10.89% | — | ↑ 1.14x | 1 | 28d 14h | 30d ago | 2d ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 66.66% | 66.66% | — | ↑ 1.23x | 1 | 28d 14h | 30d ago | 2d ago |
| [TGContains API](https://lmspeed.net/provider/api-tgcontainsinc-com) | 0.00% | 0.00% | 16.45% | 16.45% | — | ↓ 0.64x | 1 | 28d 14h | 30d ago | 2d ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.07x | 1 | 28d 14h | 30d ago | 2d ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.94x | 1 | 28d 14h | 30d ago | 2d ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 69.91% | 69.91% | — | ↓ 0.53x | 1 | 28d 14h | 30d ago | 2d ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.93x | 1 | 28d 14h | 30d ago | 2d ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 9.51% | 9.51% | — | → 0.97x | 1 | 28d 14h | 30d ago | 2d ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 23.29% | 80.41% | 80.41% | — | ↓ 0.31x | 1 | 22d 3h | 24d ago | 2d ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.02x | 1 | 28d 14h | 30d ago | 2d ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 20m | 3d ago | 2d ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 17.59% | 17.59% | 17.59% | — | ↑ 1.17x | 5 | 2d 18h | 16d ago | 2d ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 67.79% | 67.79% | 67.79% | — | ↓ 0.88x | 7 | 1d 2h | 9d ago | 2d ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.95x | 1 | 28d 14h | 30d ago | 2d ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.97x | 1 | 28d 14h | 30d ago | 2d ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.58x | 1 | 13d 15h | 15d ago | 2d ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 55.20% | 55.20% | 55.20% | — | ↓ 0.07x | 5 | 2d 9h | 14d ago | 2d ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 21.37% | 21.37% | 21.37% | — | ↓ 0.24x | 5 | 2d 2h | 12d ago | 2d ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 64.63% | 64.63% | — | ↑ 1.21x | 1 | 28d 14h | 30d ago | 2d ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 61.27% | 90.01% | 90.01% | — | ↑ 2.10x | 2 | 5d 17h | 13d ago | 2d ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.23x | 1 | 28d 14h | 30d ago | 2d ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 57.06% | 57.06% | — | ↑ 1.36x | 1 | 28d 14h | 30d ago | 2d ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 51.88% | 51.88% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [Dual Proxy Gateway](https://lmspeed.net/provider/dual-proxy-gateway) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.69x | 1 | 10d 19h | 13d ago | 2d ago |
| [AI Proxy](https://lmspeed.net/provider/dual-proxy-gateway-565355327-replit-app) | 0.00% | 13.37% | 13.37% | 13.37% | — | ↓ 0.57x | 3 | 3d 4h | 10d ago | 2d ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.72x | 1 | 28d 14h | 30d ago | 2d ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 0.05% | 0.04% | 0.04% | — | ↓ 0.77x | 3 | 9d 12h | 14d ago | 2d ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.05% | 71.83% | 71.83% | — | ↑ 2.69x | 3 | 9d 12h | 11d ago | 2d ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 47.62% | 47.62% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 19h 40m | 3d ago | 2d ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.45x | 1 | 28d 14h | 30d ago | 2d ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 17h 30m | 2d ago | 2d ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.74x | 1 | 28d 14h | 30d ago | 2d ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 15.03% | 15.03% | — | ↑ 1.72x | 1 | 28d 14h | 30d ago | 2d ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 28.39% | 28.39% | — | ↓ 0.74x | 1 | 28d 14h | 30d ago | 2d ago |
| [GPTAPI.US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 50.94% | 50.94% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.80x | 1 | 28d 14h | 30d ago | 2d ago |
| [冰のCodex](https://lmspeed.net/provider/ice-v-ua) | 0.00% | 41.72% | 41.72% | 41.72% | — | ↓ 0.18x | 6 | 1d 10h | 10d ago | 2d ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.57x | 1 | 28d 14h | 30d ago | 2d ago |
| [IPv4 Beta LM Studio](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 40m | 3d ago | 2d ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.98x | 1 | 13d 15h | 15d ago | 2d ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 17h 30m | 2d ago | 2d ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 12.41% | 76.94% | 76.94% | — | ↑ 1.11x | 2 | 12d 14h | 27d ago | 2d ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.93x | 1 | 28d 14h | 30d ago | 2d ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 4.60% | 4.60% | — | ↓ 0.83x | 1 | 28d 14h | 30d ago | 2d ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.91x | 1 | 28d 14h | 30d ago | 2d ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 53.03% | 53.03% | — | ↓ 0.31x | 1 | 28d 14h | 30d ago | 2d ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.78x | 1 | 28d 14h | 30d ago | 2d ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.00% | 0.02% | 0.02% | — | → 0.98x | 1 | 28d 14h | 30d ago | 2d ago |
| [Magic API](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 20m | 3d ago | 2d ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 34.76% | 34.76% | — | ↑ 2.43x | 1 | 28d 14h | 30d ago | 2d ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.94x | 1 | 28d 14h | 30d ago | 2d ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 29.60% | 29.60% | — | ↓ 0.28x | 1 | 28d 14h | 30d ago | 2d ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.33x | 1 | 28d 14h | 30d ago | 2d ago |
| [Neo API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 20m | 3d ago | 2d ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 4.61x | 1 | 28d 14h | 30d ago | 2d ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.39x | 1 | 28d 14h | 30d ago | 2d ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.14x | 1 | 28d 14h | 30d ago | 2d ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 21.43% | 21.43% | — | ↓ 0.76x | 1 | 28d 14h | 30d ago | 2d ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 60.76% | 60.76% | — | ↑ 1.28x | 1 | 28d 14h | 30d ago | 2d ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 67.70% | 67.70% | — | → 0.97x | 1 | 28d 14h | 30d ago | 2d ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.96x | 1 | 28d 14h | 30d ago | 2d ago |
| [OpenAI Deno Proxy](https://lmspeed.net/provider/openai-deno-proxy) | 0.00% | 80.69% | 95.01% | 95.01% | — | ↓ 0.89x | 1 | 6d 2h | 8d ago | 2d ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 2d 21h | 5d ago | 2d ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.39x | 1 | 28d 14h | 30d ago | 2d ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.02x | 1 | 28d 14h | 30d ago | 2d ago |
| [柏拉图AI API中转站](https://lmspeed.net/provider/platon-ai-api-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 17h 60m | 2d ago | 2d ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 20m | 3d ago | 2d ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.86x | 1 | 28d 14h | 30d ago | 2d ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.75x | 1 | 28d 14h | 30d ago | 2d ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 74.19% | 92.11% | 92.11% | — | ↓ 0.64x | 23 | 8h | 9d ago | 2d ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.36x | 1 | 28d 14h | 30d ago | 2d ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 24.39% | 24.39% | — | ↑ 1.21x | 1 | 28d 14h | 30d ago | 2d ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 19h 40m | 3d ago | 2d ago |
| [R9S API](https://lmspeed.net/provider/r9s-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 1d 16h | 3d ago | 2d ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 0.91% | 0.91% | — | → 0.98x | 1 | 28d 14h | 30d ago | 2d ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.99x | 1 | 28d 14h | 30d ago | 2d ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.97x | 1 | 28d 14h | 30d ago | 2d ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 20.18% | 11.45% | 11.45% | — | ↓ 0.03x | 2 | 11d 11h | 19d ago | 2d ago |
| [nginx](https://lmspeed.net/provider/sdwfger-edu-kg) | 0.00% | 0.00% | 0.06% | 0.06% | — | ↓ 0.86x | 1 | 28d 14h | 30d ago | 2d ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.52x | 1 | 28d 14h | 30d ago | 2d ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [星辰MaaS](https://lmspeed.net/provider/spark-api-open-xf-yun-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.08x | 1 | 28d 14h | 30d ago | 2d ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.98x | 1 | 28d 14h | 30d ago | 2d ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 35.56% | 83.05% | 83.05% | — | ↓ 0.68x | 14 | 1d 8h | 20d ago | 2d ago |
| [速创API](https://lmspeed.net/provider/succhuang-api) | 0.00% | 0.00% | 20.03% | 20.03% | — | ↑ 3.87x | 1 | 28d 14h | 30d ago | 2d ago |
| [Sweet Bee Proxy](https://lmspeed.net/provider/sweet-bee-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.40x | 1 | 28d 14h | 30d ago | 2d ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.96x | 1 | 28d 14h | 30d ago | 2d ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 26.92% | 26.92% | 26.92% | — | ↓ 0.94x | 3 | 5d 9h | 17d ago | 2d ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 18h 10m | 3d ago | 2d ago |
| [Thick Mole API](https://lmspeed.net/provider/thick-mole-96-deno-dev) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 0.98x | 1 | 28d 14h | 30d ago | 2d ago |
| [Unlimit](https://lmspeed.net/provider/unlimit) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.92x | 1 | 28d 14h | 30d ago | 2d ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 22.04% | 22.04% | — | → 1.02x | 1 | 28d 14h | 30d ago | 2d ago |
| [Veloera](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.77x | 1 | 28d 14h | 30d ago | 2d ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.07x | 1 | 28d 14h | 30d ago | 2d ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 20.68% | 61.31% | 61.31% | — | ↓ 0.93x | 4 | 5d 17h | 25d ago | 2d ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 13.15% | 13.15% | — | ↓ 0.85x | 1 | 28d 14h | 30d ago | 2d ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 14h | 30d ago | 2d ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.52x | 1 | 28d 14h | 30d ago | 2d ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | ↓ 0.75x | 1 | 28d 14h | 30d ago | 2d ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.29x | 1 | 28d 14h | 30d ago | 2d ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.93x | 1 | 13d 19h | 16d ago | 2d ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.63x | 1 | 28d 14h | 30d ago | 2d ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 1.12x | 1 | 28d 14h | 30d ago | 2d ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↑ 2.25x | 1 | 28d 14h | 30d ago | 2d ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 50.85% | 50.85% | — | ↓ 0.48x | 1 | 28d 14h | 30d ago | 2d ago |
| [Z201508 Worker Proxy](https://lmspeed.net/provider/z201508-worker-proxy) | 0.00% | 81.36% | 95.26% | 95.26% | — | ↓ 0.48x | 2 | 2d 22h | 8d ago | 2d ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | → 1.02x | 1 | 28d 14h | 30d ago | 2d ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | ↓ 0.95x | 1 | 28d 14h | 30d ago | 2d ago |

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
