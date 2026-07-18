# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**691 providers** — 288 🟢 operational · 88 🟡 degraded · 313 🔴 down · 2 ⚫ unknown

_Updated 2026-07-18 05:31 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (288)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.81% | 99.45% | 99.45% | — | → 0.97x | 2 | 3h 1m | 16d ago | 3m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.82% | 98.81% | 98.81% | — | → 1.00x | 0 | — | — | 4m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 100.00% | 99.82% | 1.90% | 1.90% | — | → 1.00x | 1 | 21d 1h | 30d ago | 11s ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.76% | 99.86% | 99.86% | — | → 0.99x | 0 | — | — | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.82% | 99.74% | 99.74% | — | → 0.95x | 4 | 0s | 10d ago | 50s ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.82% | 71.79% | 71.79% | — | → 0.98x | 0 | — | — | 5m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.82% | 99.80% | 99.80% | — | → 0.97x | 0 | — | — | 33s ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 99.82% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 4m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.82% | 63.68% | 63.68% | — | → 0.98x | 1 | 0s | 28d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.81% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 3m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.81% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.94% | 99.76% | 99.98% | 99.98% | — | → 0.98x | 1 | 4m | 15d ago | 1m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.94% | 99.59% | 36.33% | 36.33% | — | → 1.00x | 3 | 2m | 15d ago | 1m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.94% | 99.76% | 93.42% | 93.42% | — | → 0.99x | 2 | 6m | 15d ago | 1m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.94% | 99.64% | 99.76% | 99.76% | — | → 0.96x | 0 | — | — | 56s ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.94% | 99.76% | 80.20% | 80.20% | — | → 0.99x | 2 | 0s | 11d ago | 5m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.94% | 99.70% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 5m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.94% | 99.76% | 97.57% | 97.57% | — | → 0.96x | 7 | 0s | 12d ago | 5m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.94% | 99.76% | 99.37% | 99.37% | — | → 0.97x | 0 | — | — | 5m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.94% | 99.76% | 63.14% | 63.14% | — | → 1.00x | 1 | 0s | 11d ago | 5m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.94% | 99.76% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 5m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.94% | 99.76% | 90.32% | 90.32% | — | → 1.00x | 0 | — | — | 4m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.94% | 99.76% | 97.00% | 97.00% | — | → 0.96x | 0 | — | — | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.94% | 99.76% | 58.17% | 58.17% | — | → 0.98x | 1 | 21d 2h | 30d ago | 4m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.94% | 99.76% | 99.00% | 99.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.94% | 99.76% | 43.48% | 43.48% | — | → 0.99x | 1 | 21d 2h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.94% | 99.76% | 92.20% | 92.20% | — | → 0.98x | 6 | 0s | 13d ago | 4m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.94% | 99.75% | 98.69% | 98.69% | — | → 0.99x | 0 | — | — | 4m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.94% | 99.75% | 93.73% | 93.73% | — | → 0.98x | 1 | 1h 22m | 25d ago | 4m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.94% | 99.75% | 98.47% | 98.47% | — | → 0.99x | 0 | — | — | 4m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.94% | 99.75% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 3m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.94% | 99.75% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 3m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.88% | 99.65% | 93.57% | 93.57% | — | → 1.00x | 1 | 4m | 15d ago | 1m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.88% | 99.70% | 99.49% | 99.49% | — | → 0.97x | 2 | 4h 55m | 21d ago | 1m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.88% | 99.70% | 99.02% | 99.02% | — | ↓ 0.94x | 3 | 0s | 19d ago | 17s ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.88% | 99.70% | 99.98% | 99.98% | — | → 0.98x | 1 | 0s | 26d ago | 12s ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.88% | 99.70% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.88% | 99.70% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 5m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.88% | 99.70% | 25.33% | 25.33% | — | → 0.97x | 2 | 0s | 22d ago | 5m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.88% | 99.58% | 99.67% | 99.67% | — | → 0.99x | 5 | 5h 48m | 10d ago | 5m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.88% | 99.58% | 99.09% | 99.09% | — | → 0.96x | 0 | — | — | 5m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.88% | 99.70% | 30.20% | 30.20% | — | ↓ 0.92x | 1 | 21d 2h | 30d ago | 5m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.88% | 99.70% | 93.26% | 93.26% | — | → 0.96x | 0 | — | — | 5m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.88% | 99.57% | 77.97% | 77.97% | — | → 0.97x | 1 | 0s | 10d ago | 5m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.88% | 99.70% | 99.97% | 99.97% | — | → 0.97x | 1 | 0s | 28d ago | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.88% | 99.70% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 4m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.88% | 99.70% | 89.57% | 89.57% | — | → 0.97x | 0 | — | — | 4m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.88% | 99.70% | 98.90% | 98.90% | — | ↓ 0.94x | 1 | 1h 60m | 27d ago | 4m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.88% | 99.69% | 66.50% | 66.50% | — | → 0.97x | 1 | 21d 2h | 30d ago | 4m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.88% | 99.69% | 96.69% | 96.69% | — | → 0.97x | 0 | — | — | 4m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.88% | 99.69% | 26.43% | 26.43% | — | → 1.00x | 1 | 11d 7h | 30d ago | 4m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.87% | 99.69% | 31.33% | 31.33% | — | → 0.97x | 1 | 21d 2h | 30d ago | 4m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.87% | 99.69% | 6.05% | 6.05% | — | → 1.00x | 1 | 21d 2h | 30d ago | 4m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.87% | 99.69% | 98.04% | 98.04% | — | → 0.97x | 0 | — | — | 4m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.87% | 99.69% | 99.08% | 99.08% | — | → 1.00x | 0 | — | — | 4m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.87% | 99.69% | 0.00% | 0.00% | — | → 0.96x | 1 | 21d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.87% | 99.69% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.87% | 99.69% | 99.61% | 99.61% | — | → 0.95x | 1 | 0s | 26d ago | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.87% | 99.69% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 10d ago | 3m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.87% | 99.69% | 99.67% | 99.67% | — | → 1.00x | 1 | 0s | 12d ago | 3m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.87% | 99.69% | 99.92% | 99.92% | — | → 0.96x | 0 | — | — | 3m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.87% | 99.69% | 60.72% | 60.72% | — | → 0.96x | 0 | — | — | 3m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.82% | 99.65% | 99.98% | 99.98% | — | → 0.97x | 1 | 4m | 15d ago | 1m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.82% | 99.53% | 68.59% | 68.59% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.82% | 99.59% | 98.78% | 98.78% | — | → 1.00x | 20 | 5s | 15d ago | 1m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.82% | 99.64% | 75.23% | 75.23% | — | → 0.96x | 1 | 21d 1h | 30d ago | 1m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.82% | 99.64% | 70.89% | 70.89% | — | → 1.00x | 1 | 21d 1h | 30d ago | 49s ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.82% | 99.64% | 99.81% | 99.81% | — | → 1.00x | 0 | — | — | 44s ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.82% | 99.64% | 22.33% | 22.33% | — | → 0.99x | 1 | 21d 1h | 30d ago | 33s ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.82% | 99.64% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 28s ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.82% | 99.64% | 99.90% | 99.90% | — | → 1.00x | 1 | 0s | 26d ago | 11s ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.82% | 99.64% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 5m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.82% | 99.64% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 5m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.81% | 99.58% | 54.70% | 54.70% | — | → 0.99x | 1 | 0s | 28d ago | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.81% | 99.64% | 24.91% | 24.91% | — | → 0.99x | 2 | 0s | 22d ago | 5m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.81% | 99.64% | 65.57% | 65.57% | — | → 0.98x | 0 | — | — | 5m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.81% | 99.64% | 74.11% | 74.11% | — | → 0.99x | 6 | 1h 20m | 10d ago | 5m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.81% | 99.64% | 98.73% | 98.73% | — | → 0.98x | 1 | 0s | 28d ago | 5m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.81% | 99.64% | 99.61% | 99.61% | — | → 0.96x | 0 | — | — | 5m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.81% | 99.64% | 84.58% | 84.58% | — | → 1.00x | 0 | — | — | 5m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.81% | 99.64% | 83.46% | 83.46% | — | → 0.99x | 2 | 0s | 11d ago | 5m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.81% | 99.63% | 94.26% | 94.26% | — | → 0.99x | 0 | — | — | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.81% | 99.63% | 99.31% | 99.31% | — | → 0.97x | 0 | — | — | 4m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.81% | 99.63% | 99.18% | 99.18% | — | → 0.97x | 0 | — | — | 4m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.81% | 99.63% | 98.38% | 98.38% | — | → 1.00x | 1 | 6h 52m | 22d ago | 4m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.81% | 99.57% | 98.73% | 98.73% | — | → 0.96x | 0 | — | — | 4m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.81% | 99.57% | 99.30% | 99.30% | — | → 0.99x | 0 | — | — | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.81% | 99.63% | 98.47% | 98.47% | — | → 0.96x | 2 | 0s | 17d ago | 4m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.81% | 99.63% | 29.98% | 29.98% | — | → 0.98x | 1 | 21d 2h | 30d ago | 4m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.81% | 99.63% | 98.78% | 98.78% | — | → 0.97x | 1 | 0s | 9d ago | 4m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.81% | 99.63% | 98.43% | 98.43% | — | → 0.96x | 0 | — | — | 4m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.81% | 99.63% | 99.97% | 99.97% | — | → 0.97x | 0 | — | — | 4m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.81% | 99.63% | 99.34% | 99.34% | — | → 0.99x | 8 | 4m | 10d ago | 4m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.81% | 99.63% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 4m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.81% | 99.63% | 98.88% | 98.88% | — | → 0.96x | 1 | 0s | 10d ago | 4m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.81% | 99.63% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 3m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.81% | 99.63% | 99.97% | 99.97% | — | → 0.96x | 0 | — | — | 3m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.81% | 99.63% | 24.52% | 24.52% | — | → 0.96x | 1 | 21d 2h | 30d ago | 3m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.81% | 99.63% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 3m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.81% | 99.75% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.81% | 99.63% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 14d ago | 3m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.81% | 99.63% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.76% | 99.58% | 17.47% | 17.47% | — | → 0.98x | 1 | 21d 1h | 30d ago | 49s ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.76% | 99.58% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 50s ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.76% | 99.58% | 44.95% | 44.95% | — | → 0.96x | 0 | — | — | 45s ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.76% | 99.58% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 39s ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.76% | 99.58% | 98.00% | 98.00% | — | → 0.99x | 0 | — | — | 33s ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.76% | 99.58% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 9d ago | 33s ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.76% | 99.58% | 99.65% | 99.65% | — | → 0.99x | 0 | — | — | 33s ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.76% | 99.58% | 98.94% | 98.94% | — | → 1.00x | 1 | 0s | 16d ago | 27s ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.76% | 99.58% | 99.49% | 99.49% | — | → 0.99x | 0 | — | — | 28s ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.76% | 99.58% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 11d ago | 22s ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.76% | 99.58% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 10d ago | 23s ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.76% | 99.58% | 0.11% | 0.11% | — | → 1.00x | 1 | 21d 1h | 30d ago | 11s ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.75% | 99.58% | 5.16% | 5.16% | — | → 0.98x | 1 | 21d 1h | 30d ago | 5m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.52% | 50.15% | 50.15% | — | → 0.97x | 1 | 0s | 28d ago | 5m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.75% | 99.58% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 5m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.75% | 99.58% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 5m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.75% | 99.51% | 56.85% | 56.85% | — | → 1.00x | 7 | 2h 18m | 22d ago | 4m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.75% | 99.57% | 98.83% | 98.83% | — | → 0.97x | 0 | — | — | 4m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.75% | 99.57% | 43.99% | 43.99% | — | → 0.97x | 1 | 21d 2h | 30d ago | 4m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.75% | 99.57% | 98.35% | 98.35% | — | → 0.99x | 1 | 21m | 30d ago | 4m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.75% | 99.57% | 98.37% | 98.37% | — | → 0.96x | 0 | — | — | 4m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.75% | 99.51% | 97.87% | 97.87% | — | ↓ 0.94x | 0 | — | — | 4m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.75% | 99.57% | 99.51% | 99.51% | — | → 0.98x | 0 | — | — | 4m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.75% | 99.57% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 4m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.75% | 99.57% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.50% | 99.33% | 99.33% | — | → 0.96x | 8 | 3m | 18d ago | 3m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.75% | 99.57% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 3m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.75% | 99.57% | 16.67% | 16.67% | — | → 0.99x | 1 | 21d 2h | 30d ago | 3m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.75% | 99.44% | 99.94% | 99.94% | — | → 0.95x | 0 | — | — | 3m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.75% | 99.57% | 99.85% | 99.85% | — | → 1.00x | 1 | 3m | 11d ago | 3m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.75% | 99.57% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 3m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.75% | 99.57% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.75% | 99.56% | — | — | — | → 0.99x | 0 | — | — | 3m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.75% | 99.57% | 99.66% | 99.66% | — | → 0.99x | 1 | 0s | 30d ago | 3m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.70% | 99.41% | 98.29% | 98.29% | — | → 1.00x | 0 | — | — | 1m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.70% | 99.53% | 98.93% | 98.93% | — | → 0.99x | 1 | 0s | 12d ago | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.70% | 99.53% | 99.28% | 99.28% | — | → 0.99x | 3 | 0s | 11d ago | 56s ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.70% | 99.53% | 99.60% | 99.60% | — | → 1.00x | 1 | 2s | 11d ago | 55s ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.70% | 99.53% | 99.65% | 99.65% | — | → 0.96x | 0 | — | — | 50s ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.70% | 99.52% | 76.22% | 76.22% | — | → 1.00x | 1 | 21d 1h | 30d ago | 44s ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.70% | 99.52% | 99.73% | 99.73% | — | → 1.00x | 1 | 0s | 25d ago | 37s ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.70% | 99.46% | 89.73% | 89.73% | — | → 0.99x | 0 | — | — | 32s ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.70% | 99.52% | 99.90% | 99.90% | — | ↓ 0.91x | 0 | — | — | 33s ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.70% | 99.40% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 23s ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.70% | 99.52% | 98.92% | 98.92% | — | → 1.00x | 0 | — | — | 16s ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.69% | 99.40% | 97.28% | 97.28% | — | → 0.99x | 0 | — | — | 5m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.69% | 99.46% | 88.17% | 88.17% | — | → 0.99x | 1 | 21d 1h | 30d ago | 5m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.69% | 99.46% | 24.54% | 24.54% | — | → 0.99x | 0 | — | — | 5m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.69% | 99.52% | 77.28% | 77.28% | — | → 1.00x | 1 | 21d 1h | 30d ago | 5m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.69% | 99.52% | 24.63% | 24.63% | — | → 0.98x | 1 | 0s | 29d ago | 5m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.69% | 99.46% | 31.58% | 31.58% | — | → 0.98x | 1 | 21d 1h | 30d ago | 5m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.69% | 99.51% | 81.07% | 81.07% | — | → 0.99x | 0 | — | — | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.69% | 99.51% | 91.09% | 91.09% | — | → 0.95x | 4 | 0s | 20d ago | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.69% | 99.45% | 91.87% | 91.87% | — | → 1.00x | 1 | 30m | 20d ago | 4m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.69% | 99.51% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 4m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.69% | 99.51% | 64.61% | 64.61% | — | → 0.99x | 3 | 2d 11h | 17d ago | 4m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.69% | 99.51% | 98.56% | 98.56% | — | → 0.98x | 0 | — | — | 4m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.69% | 99.51% | 55.08% | 55.08% | — | → 0.98x | 25 | 0s | 10d ago | 4m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.69% | 99.45% | 86.85% | 86.85% | — | → 1.00x | 0 | — | — | 4m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.69% | 99.51% | 96.94% | 96.94% | — | → 1.00x | 1 | 0s | 11d ago | 4m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.69% | 99.51% | 28.78% | 28.78% | — | → 0.96x | 1 | 21d 2h | 30d ago | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.69% | 99.51% | 96.80% | 96.80% | — | → 0.97x | 1 | 0s | 27d ago | 4m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.69% | 99.51% | 99.93% | 99.93% | — | → 0.95x | 1 | 0s | 11d ago | 4m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.69% | 99.45% | 99.71% | 99.71% | — | ↓ 0.93x | 1 | 0s | 11d ago | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.69% | 99.51% | 97.35% | 97.35% | — | → 0.98x | 2 | 2h 51m | 15d ago | 4m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.69% | 99.51% | 93.61% | 93.61% | — | → 0.99x | 7 | 33m | 11d ago | 4m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.68% | 99.50% | 0.00% | 0.00% | — | → 0.95x | 1 | 21d 2h | 30d ago | 3m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.68% | 99.50% | 99.86% | 99.86% | — | → 0.99x | 1 | 0s | 26d ago | 3m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.68% | 99.50% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 3m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.68% | 99.62% | — | — | — | → 1.01x | 0 | — | — | 3m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.68% | 99.50% | 91.90% | 91.90% | — | → 1.00x | 17 | 2h 20m | 22d ago | 3m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.68% | 99.50% | 96.87% | 96.87% | — | → 1.00x | 1 | 2h 1m | 30d ago | 3m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.68% | 99.50% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.68% | 99.38% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.68% | 99.50% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.68% | 99.50% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 18d ago | 3m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.64% | 99.41% | 99.90% | 99.90% | — | → 0.99x | 0 | — | — | 44s ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.64% | 99.46% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 31s ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.64% | 99.46% | 99.91% | 99.91% | — | ↓ 0.94x | 0 | — | — | 33s ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.64% | 99.46% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 27s ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.63% | 99.46% | 24.53% | 24.53% | — | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.63% | 99.46% | 22.30% | 22.30% | — | → 0.99x | 12 | 0s | 11d ago | 5m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.63% | 99.46% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 5m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.63% | 99.46% | 99.48% | 99.48% | — | → 0.99x | 0 | — | — | 5m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.63% | 99.45% | 62.65% | 62.65% | — | → 0.99x | 0 | — | — | 5m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.63% | 99.45% | 68.50% | 68.50% | — | → 0.99x | 1 | 0s | 28d ago | 5m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.63% | 99.45% | 64.92% | 64.92% | — | → 0.99x | 1 | 0s | 28d ago | 5m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.63% | 99.45% | 99.35% | 99.35% | — | → 0.99x | 0 | — | — | 5m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.63% | 99.45% | 82.26% | 82.26% | — | → 1.00x | 0 | — | — | 5m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.63% | 99.45% | 97.21% | 97.21% | — | → 0.99x | 0 | — | — | 4m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.63% | 99.45% | 96.18% | 96.18% | — | → 1.00x | 3 | 24m | 18d ago | 4m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.63% | 99.45% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.63% | 99.39% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 4m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.63% | 99.39% | 98.66% | 98.66% | — | → 1.00x | 1 | 0s | 26d ago | 4m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.63% | 99.45% | 99.64% | 99.64% | — | → 1.00x | 1 | 4h 60m | 29d ago | 4m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.63% | 99.45% | 98.16% | 98.16% | — | → 1.00x | 0 | — | — | 4m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.63% | 99.45% | 99.83% | 99.83% | — | → 0.98x | 0 | — | — | 4m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.63% | 99.45% | 98.81% | 98.81% | — | → 0.98x | 4 | 38m | 24d ago | 4m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.62% | 99.45% | 99.87% | 99.87% | — | → 0.97x | 1 | 0s | 22d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.62% | 99.45% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 4m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.62% | 99.45% | 93.06% | 93.06% | — | → 0.98x | 7 | 9m | 22d ago | 4m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.62% | 99.44% | 89.89% | 89.89% | — | → 1.00x | 1 | 0s | 10d ago | 4m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.62% | 99.44% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 4m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.62% | 99.44% | 99.85% | 99.85% | — | → 1.00x | 1 | 6h 1m | 10d ago | 4m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.62% | 99.38% | 99.10% | 99.10% | — | → 1.00x | 1 | 0s | 30d ago | 3m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.62% | 99.44% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 3m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.62% | 99.44% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 3m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.62% | 99.44% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 3m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.62% | 99.44% | 99.77% | 99.77% | — | → 0.96x | 1 | 0s | 11d ago | 3m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.58% | 99.41% | 99.75% | 99.75% | — | → 0.97x | 0 | — | — | 56s ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.58% | 99.29% | 99.62% | 99.62% | — | → 0.99x | 1 | 0s | 23d ago | 50s ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.58% | 99.41% | 99.74% | 99.74% | — | → 0.99x | 1 | 4s | 12d ago | 44s ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.58% | 99.41% | 99.58% | 99.58% | — | → 0.99x | 12 | 0s | 12d ago | 44s ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.58% | 99.41% | 99.96% | 99.96% | — | → 0.99x | 0 | — | — | 39s ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.57% | 99.40% | 76.88% | 76.88% | — | → 0.96x | 1 | 21d 1h | 30d ago | 28s ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.57% | 99.40% | 76.89% | 76.89% | — | → 0.98x | 1 | 21d 1h | 30d ago | 23s ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.57% | 99.40% | 96.73% | 96.73% | — | → 0.98x | 1 | 0s | 29d ago | 5m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.57% | 99.40% | 96.32% | 96.32% | — | → 1.00x | 1 | 0s | 28d ago | 5m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.56% | 99.39% | 97.90% | 97.90% | — | → 0.98x | 0 | — | — | 4m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.56% | 99.39% | 99.76% | 99.76% | — | → 1.00x | 2 | 0s | 25d ago | 4m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.56% | 99.38% | 98.56% | 98.56% | — | → 0.98x | 4 | 1h 59m | 20d ago | 3m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.56% | 99.38% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 3m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.51% | 99.35% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 9d ago | 39s ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.51% | 99.34% | 22.94% | 22.94% | — | → 0.97x | 1 | 0s | 25d ago | 7s ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.50% | 99.33% | 98.00% | 98.00% | — | → 0.98x | 0 | — | — | 5m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.50% | 99.33% | 90.95% | 90.95% | — | → 0.99x | 2 | 0s | 16d ago | 4m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.50% | 99.33% | 95.85% | 95.85% | — | → 0.98x | 0 | — | — | 4m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.50% | 99.32% | 14.21% | 14.21% | — | → 0.98x | 1 | 21d 2h | 30d ago | 4m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.50% | 99.26% | 97.07% | 97.07% | — | → 1.00x | 2 | 1d 2h | 22d ago | 4m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.49% | 99.32% | 99.85% | 99.85% | — | ↓ 0.95x | 3 | 0s | 11d ago | 3m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.46% | 99.29% | 95.68% | 95.68% | — | → 0.96x | 1 | 8d 14h | 26d ago | 1m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.46% | 99.29% | 99.56% | 99.56% | — | → 1.00x | 0 | — | — | 47s ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.46% | 99.29% | 49.74% | 49.74% | — | → 1.00x | 6 | 35m | 19d ago | 50s ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.45% | 99.23% | 97.98% | 97.98% | — | → 0.98x | 0 | — | — | 44s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.45% | 99.29% | 99.74% | 99.74% | — | → 0.99x | 1 | 0s | 25d ago | 44s ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.45% | 99.28% | 99.84% | 99.84% | — | → 0.99x | 0 | — | — | 23s ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.45% | 99.28% | 99.87% | 99.87% | — | → 0.99x | 1 | 0s | 11d ago | 23s ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.45% | 99.28% | 56.98% | 56.98% | — | → 1.00x | 4 | 0s | 24d ago | 11s ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.45% | 99.28% | 99.87% | 99.87% | — | → 0.99x | 2 | 0s | 17d ago | 12s ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.45% | 99.28% | 99.79% | 99.79% | — | → 1.00x | 4 | 0s | 10d ago | 5m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.45% | 99.28% | 76.97% | 76.97% | — | → 0.96x | 1 | 21d 1h | 30d ago | 5m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.45% | 99.28% | 66.42% | 66.42% | — | → 1.00x | 1 | 2h 38m | 28d ago | 5m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.44% | 99.27% | 98.11% | 98.11% | — | → 0.99x | 0 | — | — | 4m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.44% | 99.26% | 97.80% | 97.80% | — | → 1.00x | 0 | — | — | 4m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.43% | 99.26% | 96.10% | 96.10% | — | → 1.00x | 0 | — | — | 4m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.43% | 99.26% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.38% | 99.21% | 69.43% | 69.43% | — | → 1.00x | 2 | 0s | 24d ago | 5m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.38% | 99.21% | 89.40% | 89.40% | — | → 0.99x | 0 | — | — | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.38% | 99.20% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.37% | 99.20% | 99.67% | 99.67% | — | → 0.97x | 0 | — | — | 4m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.37% | 99.20% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 4m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.37% | 99.13% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 3m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.37% | 99.19% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 24d ago | 3m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.32% | 98.54% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 4m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.31% | 99.14% | 97.74% | 97.74% | — | → 1.00x | 4 | 4h 13m | 10d ago | 4m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.31% | 99.14% | 99.74% | 99.74% | — | → 1.00x | 0 | — | — | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.31% | 99.13% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 3m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.28% | 99.11% | 99.61% | 99.61% | — | → 1.00x | 0 | — | — | 59s ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.27% | 99.11% | 99.62% | 99.62% | — | → 0.98x | 1 | 0s | 11d ago | 23s ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.26% | 99.10% | 97.94% | 97.94% | — | → 0.99x | 2 | 30m | 14d ago | 5m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.26% | 99.10% | 24.43% | 24.43% | — | → 1.00x | 0 | — | — | 5m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.26% | 99.09% | 26.84% | 26.84% | — | → 1.00x | 0 | — | — | 5m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.26% | 99.09% | 69.87% | 69.87% | — | → 1.00x | 7 | 0s | 12d ago | 5m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.25% | 99.08% | 84.75% | 84.75% | — | → 0.99x | 1 | 0s | 15d ago | 4m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.25% | 99.08% | 99.86% | 99.86% | — | → 0.98x | 0 | — | — | 4m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.24% | 99.07% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 3m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.24% | 99.07% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.24% | 99.07% | 99.09% | 99.09% | — | → 0.99x | 1 | 20m | 21d ago | 3m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.24% | 99.07% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 3m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.21% | 99.05% | 98.78% | 98.78% | — | → 0.99x | 1 | 0s | 11d ago | 23s ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.21% | 99.04% | 38.65% | 38.65% | — | → 0.99x | 1 | 21d 1h | 30d ago | 12s ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.15% | 98.99% | 96.43% | 96.43% | — | → 1.00x | 3 | 1d 4h | 9d ago | 44s ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.13% | 98.90% | 97.03% | 97.03% | — | → 0.97x | 2 | 0s | 29d ago | 4m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.12% | 98.95% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.09% | 98.92% | 99.76% | 99.76% | — | → 1.00x | 1 | 0s | 26d ago | 11s ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.07% | 98.91% | 81.53% | 81.53% | — | → 0.97x | 0 | — | — | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.06% | 98.90% | 98.85% | 98.85% | — | → 0.97x | 0 | — | — | 4m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.06% | 98.90% | 98.12% | 98.12% | — | → 0.99x | 2 | 10m | 24d ago | 4m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.05% | 98.88% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (88)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.00% | 98.83% | 97.10% | 97.10% | — | → 0.97x | 2 | 10m | 17d ago | 4m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.97% | 98.76% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 56s ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.94% | 98.72% | 76.90% | 76.90% | — | → 0.97x | 1 | 0s | 26d ago | 4m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 98.93% | 98.76% | 99.95% | 99.95% | — | → 0.99x | 1 | 0s | 29d ago | 3m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 98.89% | 98.73% | 98.88% | 98.88% | — | → 0.99x | 0 | — | — | 5m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 98.86% | 98.70% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 3m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.86% | 98.70% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 3m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.84% | 98.33% | 99.64% | 99.64% | — | → 0.98x | 5 | 57m | 13d ago | 28s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.82% | 98.53% | 99.10% | 99.10% | — | → 0.99x | 1 | 0s | 26d ago | 4m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.81% | 98.22% | 83.10% | 83.10% | — | → 1.01x | 11 | 4h 50m | 17d ago | 4m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.80% | 98.51% | 99.34% | 99.34% | — | → 1.00x | 2 | 0s | 11d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.63% | 98.47% | 28.39% | 28.39% | — | ↓ 0.93x | 1 | 21d 2h | 30d ago | 4m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 98.60% | 98.60% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.58% | 98.30% | 2.34% | 2.34% | — | → 1.00x | 1 | 21d 2h | 30d ago | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.54% | 98.39% | 88.31% | 88.31% | — | → 0.99x | 0 | — | — | 3m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.48% | 98.34% | 51.42% | 51.42% | — | → 1.00x | 1 | 0s | 14d ago | 44s ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.30% | 98.15% | 89.02% | 89.02% | — | → 1.00x | 0 | — | — | 27s ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.07% | 97.92% | 98.96% | 98.96% | — | → 1.00x | 1 | 29m | 26d ago | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.03% | 97.88% | 57.00% | 57.00% | — | → 0.98x | 0 | — | — | 5m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 97.97% | 97.83% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.83% | 97.69% | 83.18% | 83.18% | — | → 0.96x | 4 | 51s | 15d ago | 5m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 97.72% | 96.46% | 39.41% | 39.41% | — | → 1.00x | 63 | 7m | 11d ago | 3m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.50% | 97.37% | 66.05% | 66.05% | — | → 1.00x | 7 | 19h 32m | 14d ago | 4m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 97.48% | 97.29% | 98.12% | 98.12% | — | → 0.96x | 0 | — | — | 5m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 97.38% | 97.24% | 90.79% | 90.79% | — | → 1.00x | 1 | 0s | 11d ago | 4m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.16% | 97.03% | 98.59% | 98.59% | — | → 1.00x | 12 | 8m | 11d ago | 3m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 96.97% | 96.85% | 38.36% | 38.36% | — | → 1.00x | 1 | 0s | 30d ago | 5m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.97% | 96.84% | 97.85% | 97.85% | — | → 1.00x | 1 | 1h 2m | 27d ago | 3m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 96.79% | 96.67% | 98.75% | 98.75% | — | → 0.99x | 6 | 23s | 14d ago | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 96.78% | 96.60% | 99.27% | 99.27% | — | → 0.99x | 0 | — | — | 5m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 96.51% | 96.40% | 98.93% | 98.93% | — | → 0.99x | 5 | 10m | 15d ago | 5m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 95.56% | 95.40% | 98.02% | 98.02% | — | → 0.99x | 0 | — | — | 4m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.42% | 95.21% | 17.31% | 17.31% | — | → 1.00x | 1 | 0s | 25d ago | 6s ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.49% | 94.41% | 97.00% | 97.00% | — | → 0.97x | 4 | 1h 51m | 12d ago | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 93.49% | 93.44% | 74.00% | 74.00% | — | → 0.99x | 10 | 1h 9m | 13d ago | 5m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 92.63% | 92.60% | 47.85% | 47.85% | — | → 0.98x | 1 | 21d 1h | 30d ago | 16s ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 91.85% | 91.83% | 99.82% | 99.82% | — | → 0.98x | 1 | 0s | 20d ago | 4m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.79% | 90.62% | 78.01% | 78.01% | — | → 1.00x | 77 | 5s | 11d ago | 1m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 90.61% | 90.61% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 44s ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 90.12% | 90.02% | 75.72% | 75.72% | — | → 1.00x | 1 | 21d 1h | 30d ago | 44s ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 89.58% | 89.60% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 44s ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 87.25% | 87.32% | 0.69% | 0.69% | — | ↓ 0.93x | 1 | 21d 2h | 30d ago | 4m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 84.92% | 84.79% | 92.56% | 92.56% | — | → 1.01x | 16 | 26m | 10d ago | 4m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 84.87% | 84.92% | 95.25% | 95.25% | — | → 1.01x | 15 | 1h 53m | 11d ago | 4m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 84.86% | 84.05% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 11d ago | 3m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 83.75% | 83.83% | 98.89% | 98.89% | — | → 1.00x | 1 | 0s | 19d ago | 1m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 83.71% | 83.85% | 99.06% | 99.06% | — | → 1.00x | 5 | 1h 16m | 11d ago | 3m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 83.23% | 83.32% | 86.23% | 86.23% | — | → 1.00x | 6 | 0s | 15d ago | 49s ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.99% | 83.02% | 63.15% | 63.15% | — | → 1.00x | 145 | 13m | 11d ago | 8s ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 82.76% | 82.86% | 82.00% | 82.00% | — | → 1.00x | 116 | 11m | 11d ago | 3m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.73% | 82.83% | 67.23% | 67.23% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 82.57% | 82.67% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 49s ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 82.47% | 82.51% | 99.61% | 99.61% | — | → 1.00x | 5 | 0s | 9d ago | 3m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 82.32% | 82.19% | 98.45% | 98.45% | — | → 1.00x | 29 | 1m | 11d ago | 5m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 81.96% | 82.13% | 87.87% | 87.87% | — | → 0.98x | 3 | 10m | 22d ago | 3m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 81.82% | 82.00% | 93.77% | 93.77% | — | → 1.01x | 0 | — | — | 42s ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.17% | 80.89% | 69.98% | 69.98% | — | → 1.00x | 2 | 20m | 25d ago | 6s ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 81.00% | 81.13% | 96.32% | 96.32% | — | → 1.01x | 154 | 17m | 12d ago | 32s ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 79.66% | 79.76% | 68.41% | 68.41% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 78.58% | 78.70% | 75.11% | 75.11% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 78.14% | 78.28% | 10.72% | 10.72% | — | → 1.00x | 1 | 21d 2h | 30d ago | 4m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 78.14% | 78.28% | 87.06% | 87.06% | — | → 1.00x | 17 | 2m | 21d ago | 4m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 78.11% | 78.30% | 54.78% | 54.78% | — | → 1.01x | 1 | 21d 1h | 30d ago | 10s ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 77.90% | 78.03% | 98.53% | 98.53% | — | → 1.00x | 5 | 4m | 10d ago | 3m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 77.58% | 77.73% | 48.46% | 48.46% | — | → 1.00x | 1 | 21d 2h | 30d ago | 4m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 77.34% | 77.61% | 99.65% | 99.65% | — | → 1.00x | 0 | — | — | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.90% | 76.99% | 88.70% | 88.70% | — | → 1.00x | 1 | 6h | 9d ago | 4m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 76.59% | 76.69% | 44.62% | 44.62% | — | → 1.00x | 1 | 20d 11h | 30d ago | 4m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 76.56% | 76.60% | 86.83% | 86.83% | — | → 1.00x | 8 | 0s | 16d ago | 5m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 76.11% | 75.47% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 74.61% | 74.76% | 93.16% | 93.16% | — | → 1.00x | 3 | 17m | 14d ago | 4m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 74.33% | 74.41% | 85.28% | 85.28% | — | → 1.01x | 0 | — | — | 5m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 73.95% | 73.69% | 98.87% | 98.87% | — | → 1.00x | 1 | 17h 60m | 29d ago | 32s ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 73.78% | 73.68% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 3m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 73.35% | 73.52% | 96.79% | 96.79% | — | → 1.00x | 3 | 10m | 22d ago | 5m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 72.64% | 72.76% | 94.11% | 94.11% | — | → 1.00x | 8 | 11h 12m | 12d ago | 1m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 72.31% | 72.61% | 91.43% | 91.43% | — | → 1.01x | 0 | — | — | 3m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 72.03% | 72.39% | 68.70% | 68.70% | — | → 1.01x | 1 | 21d 2h | 30d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 71.62% | 71.77% | 83.85% | 83.85% | — | → 1.00x | 25 | 5m | 15d ago | 4m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 71.48% | 71.68% | 99.88% | 99.88% | — | → 0.99x | 2 | 0s | 17d ago | 3m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 70.70% | 70.92% | 64.20% | 64.20% | — | → 1.00x | 6 | 0s | 13d ago | 49s ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 69.33% | 69.40% | 69.01% | 69.01% | — | → 1.00x | 8 | 11m | 22d ago | 5m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 68.59% | 68.67% | 50.52% | 50.52% | — | → 1.00x | 139 | 2h 36m | 10d ago | 1m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 68.20% | 68.66% | 99.03% | 99.03% | — | → 0.99x | 0 | — | — | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 63.19% | 63.73% | 97.48% | 97.48% | — | → 0.96x | 1 | 0s | 10d ago | 4m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 54.63% | 54.21% | 76.64% | 76.64% | — | → 0.98x | 1 | 21d 1h | 30d ago | 12s ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 25.66% | 25.81% | 0.00% | 0.00% | — | → 1.00x | 1 | 21d 1h | 30d ago | 59s ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 18.54% | 19.03% | 92.86% | 92.86% | — | → 1.02x | 7 | 0s | 9d ago | 4m ago |

</details>

<details open>
<summary><strong>🔴 Down (313)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.50% | 99.20% | 98.95% | 98.95% | — | → 0.97x | 0 | — | — | 4m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.31% | 99.31% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.56% | 97.42% | 32.93% | 32.93% | — | → 1.00x | 0 | — | — | 4m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 95.91% | 95.75% | 96.89% | 96.89% | — | → 0.98x | 5 | 2h 21m | 9d ago | 4m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 90.66% | 90.66% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 89.64% | 89.66% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 40s ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 88.42% | 88.47% | 77.59% | 77.59% | — | → 1.01x | 0 | — | — | 4m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 83.04% | 83.13% | 68.13% | 68.13% | — | → 1.00x | 1 | 21d 1h | 30d ago | 5m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 81.75% | 81.93% | 97.23% | 97.23% | — | → 1.01x | 23 | 2m | 12d ago | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.22% | 78.35% | 98.92% | 98.92% | — | → 1.00x | 1 | 0s | 15d ago | 1m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 77.02% | 77.23% | 66.07% | 66.07% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 76.12% | 76.23% | 6.48% | 6.48% | — | → 1.00x | 1 | 21d 2h | 30d ago | 3m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 75.99% | 76.17% | 54.05% | 54.05% | — | → 1.00x | 1 | 21d 1h | 30d ago | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.19% | 74.22% | 86.29% | 86.29% | — | → 1.00x | 17 | 2m | 11d ago | 18s ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.38% | 73.35% | 85.02% | 85.02% | — | → 1.00x | 18 | 3m | 12d ago | 4m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 72.08% | 72.21% | 91.98% | 91.98% | — | → 1.01x | 17 | 17s | 11d ago | 1m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 70.10% | 70.04% | 0.11% | 0.11% | — | ↓ 0.94x | 1 | 21d 1h | 30d ago | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 69.55% | 69.44% | 99.93% | 99.93% | — | → 1.00x | 0 | — | — | 45s ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 68.29% | 68.73% | 99.94% | 99.94% | — | → 0.99x | 1 | 0s | 27d ago | 3m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 66.69% | 66.02% | 75.15% | 75.15% | — | → 1.01x | 1 | 21d 1h | 30d ago | 5m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 62.86% | 62.36% | 98.37% | 98.37% | — | → 0.98x | 3 | 3m | 13d ago | 3m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 58.90% | 59.41% | 52.45% | 52.45% | — | → 1.01x | 1 | 21d 1h | 30d ago | 1m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 58.25% | 58.89% | 98.16% | 98.16% | — | → 0.99x | 3 | 0s | 17d ago | 4m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 55.96% | 56.27% | 93.54% | 93.54% | — | → 1.00x | 18 | 3m | 12d ago | 3m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 52.83% | 52.44% | 98.24% | 98.24% | — | → 0.98x | 0 | — | — | 4m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 46.39% | 46.09% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 38.79% | 39.81% | 78.42% | 78.42% | — | → 1.04x | 1 | 19d 17h | 29d ago | 3m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 36.80% | 36.73% | 44.49% | 44.49% | — | → 1.01x | 1 | 21d 2h | 30d ago | 4m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 7.67% | 8.24% | 40.01% | 40.01% | — | ↓ 0.94x | 1 | 12d 23h | 30d ago | 12s ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 4.15% | 4.74% | 7.76% | 7.76% | — | → 1.05x | 1 | 21d 2h | 30d ago | 4m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 1.49% | 3.10% | 44.99% | 44.99% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 1.25% | 2.87% | 97.75% | 97.75% | — | ↑ 1.11x | 3 | 0s | 10d ago | 4m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.68% | 1.32% | 0.10% | 0.10% | — | → 1.03x | 1 | 21d 1h | 30d ago | 5m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.19% | 0.85% | 34.65% | 34.65% | — | ↑ 1.77x | 1 | 0s | 28d ago | 5m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.13% | 0.68% | 99.65% | 99.65% | — | ↓ 0.09x | 3 | 20m | 11d ago | 3m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.06% | 0.06% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 0.68% | 99.82% | 99.82% | — | — | 2 | 2m | 13d ago | 3m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.66% | 63.31% | 63.31% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.67% | 59.84% | 59.84% | — | — | 2 | 60m | 10d ago | 4m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.67% | 70.78% | 70.78% | — | — | 3 | 6d 22h | 9d ago | 4m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.67% | 52.44% | 52.44% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.67% | 5.20% | 5.20% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.65% | 10.24% | 10.24% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.55% | 88.73% | 88.73% | — | — | 1 | 13d 1h | 22d ago | 4m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.68% | 99.82% | 99.82% | — | — | 1 | 7h | 10d ago | 3m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.67% | 47.31% | 47.31% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.68% | 73.96% | 73.96% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.66% | 74.22% | 74.22% | — | — | 19 | 8h 35m | 16d ago | 6s ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.54% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.66% | 3.13% | 3.13% | — | — | 1 | 21d 1h | 30d ago | 7s ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.67% | 79.86% | 79.86% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.66% | 40.15% | 40.15% | — | — | 0 | — | — | 5m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.66% | 33.64% | 33.64% | — | — | 1 | 21d 1h | 30d ago | 12s ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.62% | 90.14% | 90.14% | — | — | 2 | 6d 17h | 22d ago | 4m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.67% | 85.33% | 85.33% | — | — | 95 | 33m | 11d ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.65% | 83.66% | 83.66% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.67% | 21.09% | 21.09% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.67% | 27.04% | 27.04% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.65% | 84.65% | 84.65% | — | — | 1 | 21d 1h | 30d ago | 44s ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.65% | 75.27% | 75.27% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.65% | 57.88% | 57.88% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 49s ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 12s ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.65% | 70.96% | 70.96% | — | — | 1 | 21d 1h | 30d ago | 45s ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.66% | 19.82% | 19.82% | — | — | 3 | 2d 15h | 17d ago | 5m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.68% | 83.11% | 83.11% | — | — | 2 | 2d 24h | 14d ago | 4m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.67% | 13.15% | 13.15% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.66% | 87.39% | 87.39% | — | — | 1 | 21d 1h | 30d ago | 7s ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.67% | 30.30% | 30.30% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.56% | 99.75% | 99.75% | — | — | 1 | 0s | 10d ago | 3m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.66% | 78.14% | 78.14% | — | — | 96 | 3h 43m | 10d ago | 5m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.66% | 98.15% | 98.15% | — | — | 2 | 4d | 17d ago | 11s ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.67% | 78.64% | 78.64% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.67% | 3.12% | 3.12% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.66% | 32.40% | 32.40% | — | — | 2 | 2d 6h | 13d ago | 7s ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.56% | 76.21% | 76.21% | — | — | 1 | 20d 10h | 29d ago | 3m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.54% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.68% | 72.40% | 72.40% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.66% | 48.90% | 48.90% | — | — | 5 | 4d 4h | 20d ago | 12s ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.68% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 13d ago | 3m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.67% | 31.88% | 31.88% | — | — | 3 | 4d 11h | 18d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.56% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 10d ago | 3m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.56% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.66% | 84.44% | 84.44% | — | — | 1 | 21d 1h | 30d ago | 17s ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.68% | 32.34% | 32.34% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.73% | 64.69% | 64.69% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.67% | 46.41% | 46.41% | — | — | 2 | 8d 8h | 10d ago | 5m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.66% | 50.25% | 50.25% | — | — | 3 | 0s | 25d ago | 6s ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.66% | 96.06% | 96.06% | — | — | 6 | 14h 25m | 12d ago | 7s ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.68% | 69.29% | 69.29% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.68% | 39.40% | 39.40% | — | — | 1 | 18d 2h | 27d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.67% | 64.35% | 64.35% | — | — | 2 | 9d 1h | 27d ago | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.67% | 26.33% | 26.33% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.56% | 98.70% | 98.70% | — | — | 8 | 0s | 19d ago | 3m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.66% | 50.43% | 50.43% | — | — | 1 | 21d 1h | 30d ago | 11s ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.55% | 75.41% | 75.41% | — | — | 176 | 1h 20m | 9d ago | 4m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.67% | 22.07% | 22.07% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.67% | 98.37% | 98.37% | — | — | 0 | — | — | 4m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.60% | 32.48% | 32.48% | — | — | 2 | 6d 13h | 19d ago | 5m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.68% | 99.89% | 99.89% | — | — | 0 | — | — | 3m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.68% | 48.30% | 48.30% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.65% | 46.73% | 46.73% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.67% | 21.32% | 21.32% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.68% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 6s ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 43s ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.67% | 4.63% | 4.63% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.65% | 60.67% | 60.67% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.68% | 99.92% | 99.92% | — | — | 1 | 0s | 23d ago | 3m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.68% | 68.44% | 68.44% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.56% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.56% | 98.40% | 98.40% | — | — | 0 | — | — | 3m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 0.00% | 0.65% | 99.95% | 99.95% | — | — | 0 | — | — | 1m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.65% | 99.74% | 99.74% | — | — | 0 | — | — | 56s ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 51s ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.67% | 5.52% | 5.52% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.67% | 81.13% | 81.13% | — | — | 3 | 20m | 23d ago | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.66% | 73.53% | 73.53% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 7s ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 23s ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.65% | 74.18% | 74.18% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.65% | 99.84% | 99.84% | — | — | 0 | — | — | 50s ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.68% | 99.89% | 99.89% | — | — | 1 | 3m | 12d ago | 3m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.54% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.67% | 83.98% | 83.98% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.67% | 20.14% | 20.14% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.68% | 99.95% | 99.95% | — | — | 0 | — | — | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.66% | 48.81% | 48.81% | — | — | 1 | 21d 1h | 30d ago | 17s ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.65% | 83.92% | 83.92% | — | — | 1 | 19d 16h | 29d ago | 40s ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.68% | 67.73% | 67.73% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.55% | 83.84% | 83.84% | — | — | 8 | 17m | 14d ago | 4m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.68% | 74.74% | 74.74% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.67% | 47.90% | 47.90% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.68% | 99.25% | 99.25% | — | — | 1 | 0s | 23d ago | 4m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.55% | 91.99% | 91.99% | — | — | 0 | — | — | 4m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.66% | 22.80% | 22.80% | — | — | 3 | 10m | 19d ago | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.56% | 98.05% | 98.05% | — | — | 3 | 0s | 10d ago | 3m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.67% | 55.75% | 55.75% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.56% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 11d ago | 3m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.66% | 43.20% | 43.20% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.55% | 16.44% | 16.44% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.66% | 39.16% | 39.16% | — | — | 1 | 21d 1h | 30d ago | 23s ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.65% | 74.31% | 74.31% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.68% | 20.55% | 20.55% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 0.67% | 22.80% | 22.80% | — | — | 1 | 0s | 28d ago | 5m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.66% | 54.39% | 54.39% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.68% | 75.74% | 75.74% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.65% | 35.55% | 35.55% | — | — | 1 | 21d 1h | 30d ago | 51s ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 40s ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.67% | 65.91% | 65.91% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.56% | 99.94% | 99.94% | — | — | 1 | 21m | 24d ago | 3m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 12s ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.67% | 70.74% | 70.74% | — | — | 3 | 6d 22h | 9d ago | 4m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.66% | 34.00% | 34.00% | — | — | 2 | 30m | 13d ago | 12s ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.67% | 62.39% | 62.39% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.65% | 45.59% | 45.59% | — | — | 0 | — | — | 56s ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.65% | 76.99% | 76.99% | — | — | 1 | 21d 1h | 30d ago | 35s ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.66% | 38.64% | 38.64% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.65% | 22.32% | 22.32% | — | — | 0 | — | — | 39s ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.66% | 90.53% | 90.53% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.68% | 91.04% | 91.04% | — | — | 2 | 1d 23h | 13d ago | 3m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.68% | 42.69% | 42.69% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.67% | 39.95% | 39.95% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.56% | 99.29% | 99.29% | — | — | 1 | 2h 37m | 28d ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.67% | 24.01% | 24.01% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.55% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.65% | 81.34% | 81.34% | — | — | 1 | 3h | 13d ago | 56s ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 16s ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.66% | 73.32% | 73.32% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.67% | 2.87% | 2.87% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.67% | 49.45% | 49.45% | — | — | 0 | — | — | 4m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.65% | 39.57% | 39.57% | — | — | 1 | 21d 1h | 30d ago | 50s ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.66% | 20.82% | 20.82% | — | — | 49 | 8m | 9d ago | 5m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.65% | 23.09% | 23.09% | — | — | 5 | 12m | 15d ago | 35s ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.68% | 20.58% | 20.58% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 23s ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.56% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.68% | 33.55% | 33.55% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.67% | 52.99% | 52.99% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.66% | 82.46% | 82.46% | — | — | 1 | 21d 1h | 30d ago | 15s ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.65% | 92.62% | 92.62% | — | — | 1 | 21d 1h | 30d ago | 50s ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.65% | 23.25% | 23.25% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.67% | 27.77% | 27.77% | — | — | 110 | 15m | 12d ago | 5m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 1.41% | 25.44% | 25.44% | — | — | 4 | 3d 14h | 11d ago | 4m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.66% | 86.17% | 86.17% | — | — | 1 | 10s | 15d ago | 23s ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.66% | 49.10% | 49.10% | — | — | 1 | 21d 1h | 30d ago | 17s ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.65% | 86.30% | 86.30% | — | — | 1 | 21d 1h | 30d ago | 45s ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.67% | 65.07% | 65.07% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.66% | 99.12% | 99.12% | — | — | 4 | 3h | 9d ago | 16s ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.67% | 92.19% | 92.19% | — | — | 1 | 15d 2h | 24d ago | 4m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.56% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.66% | 99.26% | 99.26% | — | — | 0 | — | — | 5m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.65% | 99.77% | 99.77% | — | — | 0 | — | — | 50s ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.66% | 16.23% | 16.23% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.66% | 45.98% | 45.98% | — | — | 1 | 21d 1h | 30d ago | 7s ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.67% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 9d ago | 4m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.68% | 98.92% | 98.92% | — | — | 6 | 31m | 21d ago | 3m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.67% | 46.05% | 46.05% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.68% | 16.77% | 16.77% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.66% | 51.26% | 51.26% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.67% | 35.56% | 35.56% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.67% | 19.49% | 19.49% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.00% | 0.67% | 87.63% | 87.63% | — | — | 0 | — | — | 4m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.68% | 99.81% | 99.81% | — | — | 2 | 36m | 22d ago | 3m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.67% | 46.51% | 46.51% | — | — | 4 | 2d 1h | 17d ago | 4m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.67% | 72.39% | 72.39% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.66% | 83.68% | 83.68% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 32s ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.67% | 26.68% | 26.68% | — | — | 0 | — | — | 5m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.68% | 46.80% | 46.80% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.66% | 75.88% | 75.88% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.60% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 23s ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.67% | 22.72% | 22.72% | — | — | 3 | 1d 21h | 15d ago | 5m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.65% | 68.72% | 68.72% | — | — | 1 | 21d 1h | 30d ago | 45s ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.67% | 18.10% | 18.10% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.65% | 54.28% | 54.28% | — | — | 1 | 21d 1h | 30d ago | 1m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.67% | 35.49% | 35.49% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.66% | 3.84% | 3.84% | — | — | 2 | 10d 7h | 10d ago | 12s ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.65% | 63.55% | 63.55% | — | — | 1 | 21d 1h | 30d ago | 35s ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.66% | 23.11% | 23.11% | — | — | 0 | — | — | 28s ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 27s ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.56% | 99.60% | 99.60% | — | — | 0 | — | — | 3m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.67% | 22.23% | 22.23% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.67% | 6.70% | 6.70% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.68% | 22.60% | 22.60% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 17s ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.65% | 62.64% | 62.64% | — | — | 1 | 21d 1h | 30d ago | 44s ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.68% | 30.92% | 30.92% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.68% | 68.76% | 68.76% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.55% | 3.80% | 3.80% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.68% | 44.20% | 44.20% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.68% | 38.02% | 38.02% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.68% | 17.16% | 17.16% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.66% | 5.08% | 5.08% | — | — | 1 | 21d 1h | 30d ago | 28s ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.67% | 10.15% | 10.15% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.60% | 23.40% | 23.40% | — | — | 63 | 13m | 12d ago | 5m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.65% | 99.53% | 99.53% | — | — | 0 | — | — | 56s ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.66% | 16.69% | 16.69% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.66% | 21.71% | 21.71% | — | — | 34 | 2h 2m | 9d ago | 12s ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.67% | 14.75% | 14.75% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.68% | 25.49% | 25.49% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.67% | 8.99% | 8.99% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.68% | 3.93% | 3.93% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.68% | 4.55% | 4.55% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.66% | 46.30% | 46.30% | — | — | 1 | 21d 1h | 30d ago | 23s ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.68% | 76.63% | 76.63% | — | — | 1 | 13d 19h | 23d ago | 3m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.54% | 32.96% | 32.96% | — | — | 0 | — | — | 17s ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.68% | 36.28% | 36.28% | — | — | 1 | 21d 2h | 30d ago | 3m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.67% | 98.48% | 98.48% | — | — | 1 | 0s | 30d ago | 4m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.67% | 63.49% | 63.49% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.67% | 40.17% | 40.17% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.66% | 77.23% | 77.23% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 12s ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.68% | 43.61% | 43.61% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.65% | 23.13% | 23.13% | — | — | 0 | — | — | 45s ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.66% | 0.01% | 0.01% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.66% | 22.68% | 22.68% | — | — | 0 | — | — | 5m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.67% | 60.97% | 60.97% | — | — | 78 | 5m | 11d ago | 4m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 16s ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 5m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.65% | 38.37% | 38.37% | — | — | 1 | 21d 1h | 30d ago | 33s ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.68% | 1.35% | 1.35% | — | — | 1 | 21d 2h | 30d ago | 4m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.67% | 17.59% | 17.59% | — | — | 1 | 21d 2h | 30d ago | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.67% | 91.72% | 91.72% | — | — | 25 | 0s | 9d ago | 4m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.68% | 99.77% | 99.77% | — | — | 2 | 2m | 10d ago | 3m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.65% | 99.17% | 99.17% | — | — | 0 | — | — | 45s ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 16s ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 21d 1h | 30d ago | 17s ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.68% | 0.00% | 0.00% | — | — | 1 | 21d 2h | 30d ago | 3m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 21d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 21d 1h | 30d ago | — |

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
