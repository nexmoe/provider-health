# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**691 providers** — 290 🟢 operational · 92 🟡 degraded · 307 🔴 down · 2 ⚫ unknown

_Updated 2026-07-19 05:57 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (290)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.84% | 98.81% | 98.81% | — | → 0.99x | 0 | — | — | 41s ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 100.00% | 99.85% | 1.90% | 1.90% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.85% | 99.74% | 99.74% | — | → 0.96x | 4 | 0s | 11d ago | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 99.85% | 71.79% | 71.79% | — | → 0.98x | 0 | — | — | 1m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 99.85% | 99.80% | 99.80% | — | → 0.97x | 0 | — | — | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.85% | 63.68% | 63.68% | — | → 0.98x | 1 | 0s | 29d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.84% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 5m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.84% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.95% | 99.80% | 99.98% | 99.98% | — | → 0.98x | 1 | 4m | 16d ago | 3m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.95% | 99.65% | 36.33% | 36.33% | — | → 1.00x | 3 | 2m | 16d ago | 3m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.95% | 99.80% | 93.42% | 93.42% | — | → 0.99x | 2 | 6m | 16d ago | 3m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.95% | 99.74% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 2m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.95% | 99.80% | 97.57% | 97.57% | — | → 0.97x | 7 | 0s | 13d ago | 1m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.95% | 99.79% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 1m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.95% | 99.79% | 90.32% | 90.32% | — | → 1.00x | 0 | — | — | 1m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.95% | 99.79% | 97.00% | 97.00% | — | → 0.95x | 0 | — | — | 1m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.95% | 99.79% | 99.00% | 99.00% | — | → 0.99x | 0 | — | — | 1m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.95% | 99.74% | 99.86% | 99.86% | — | → 0.99x | 0 | — | — | 53s ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.95% | 99.79% | 92.20% | 92.20% | — | → 0.99x | 6 | 0s | 14d ago | 51s ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.95% | 99.79% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 51s ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.95% | 99.79% | 93.73% | 93.73% | — | → 0.99x | 1 | 1h 22m | 26d ago | 30s ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.95% | 99.79% | 98.47% | 98.47% | — | → 0.99x | 0 | — | — | 24s ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.95% | 99.79% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 5m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.95% | 99.95% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.90% | 99.70% | 93.57% | 93.57% | — | → 0.99x | 1 | 4m | 16d ago | 3m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.90% | 99.65% | 99.76% | 99.76% | — | → 0.97x | 0 | — | — | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.90% | 99.75% | 99.02% | 99.02% | — | → 0.96x | 3 | 0s | 20d ago | 2m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.90% | 99.69% | 99.90% | 99.90% | — | → 1.00x | 1 | 0s | 27d ago | 2m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.89% | 99.74% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 2m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.89% | 99.74% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 2m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.89% | 99.74% | 99.37% | 99.37% | — | → 0.97x | 0 | — | — | 1m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.89% | 99.74% | 25.33% | 25.33% | — | → 0.97x | 1 | 0s | 23d ago | 1m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.89% | 99.64% | 99.67% | 99.67% | — | → 0.99x | 5 | 5h 48m | 11d ago | 1m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.89% | 99.74% | 30.20% | 30.20% | — | ↓ 0.94x | 1 | 20d 1h | 30d ago | 1m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.89% | 99.64% | 77.97% | 77.97% | — | → 0.97x | 1 | 0s | 11d ago | 1m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.89% | 99.74% | 58.17% | 58.17% | — | → 0.98x | 1 | 20d 1h | 30d ago | 1m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.89% | 99.74% | 99.89% | 99.89% | — | → 0.98x | 0 | — | — | 1m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.89% | 99.74% | 89.57% | 89.57% | — | → 0.97x | 0 | — | — | 1m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.89% | 99.74% | 98.90% | 98.90% | — | → 0.95x | 1 | 1h 60m | 28d ago | 1m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.89% | 99.74% | 26.43% | 26.43% | — | → 1.00x | 1 | 10d 7h | 30d ago | 51s ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.89% | 99.74% | 43.48% | 43.48% | — | → 0.99x | 1 | 20d 1h | 30d ago | 51s ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.89% | 99.74% | 98.69% | 98.69% | — | → 0.99x | 0 | — | — | 35s ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.89% | 99.74% | 6.05% | 6.05% | — | → 1.00x | 1 | 20d 1h | 30d ago | 18s ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.89% | 99.74% | 99.08% | 99.08% | — | → 1.00x | 0 | — | — | 8s ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.89% | 99.74% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 5m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.89% | 99.74% | 99.45% | 99.45% | — | → 0.97x | 2 | 3h 1m | 17d ago | 5m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.89% | 99.74% | 99.61% | 99.61% | — | → 0.96x | 1 | 0s | 27d ago | 5m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.89% | 99.74% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 5m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.89% | 99.74% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 5m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.89% | 99.74% | 99.67% | 99.67% | — | → 1.00x | 1 | 0s | 13d ago | 5m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.84% | 99.70% | 99.98% | 99.98% | — | → 0.97x | 1 | 4m | 16d ago | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.84% | 99.60% | 68.59% | 68.59% | — | → 0.99x | 1 | 20d 1h | 30d ago | 3m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.84% | 99.65% | 98.78% | 98.78% | — | → 1.00x | 20 | 5s | 16d ago | 3m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.84% | 99.70% | 99.49% | 99.49% | — | → 0.97x | 2 | 4h 55m | 22d ago | 3m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.84% | 99.70% | 70.89% | 70.89% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.84% | 99.70% | 99.81% | 99.81% | — | → 1.00x | 0 | — | — | 2m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.84% | 99.70% | 22.33% | 22.33% | — | → 0.99x | 1 | 20d 1h | 30d ago | 2m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.84% | 99.69% | 99.98% | 99.98% | — | → 0.98x | 1 | 0s | 27d ago | 2m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.84% | 99.69% | 80.20% | 80.20% | — | → 0.99x | 2 | 0s | 12d ago | 2m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.84% | 99.59% | 99.09% | 99.09% | — | → 0.97x | 0 | — | — | 1m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.84% | 99.69% | 93.26% | 93.26% | — | → 0.97x | 0 | — | — | 1m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.84% | 99.69% | 98.73% | 98.73% | — | → 0.98x | 1 | 0s | 29d ago | 1m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.84% | 99.69% | 94.26% | 94.26% | — | → 0.99x | 0 | — | — | 1m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.84% | 99.69% | 99.31% | 99.31% | — | → 0.97x | 0 | — | — | 1m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.84% | 99.69% | 99.97% | 99.97% | — | → 0.97x | 1 | 0s | 29d ago | 1m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.84% | 99.69% | 99.18% | 99.18% | — | → 0.98x | 0 | — | — | 1m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.84% | 99.64% | 98.73% | 98.73% | — | → 0.97x | 0 | — | — | 53s ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.84% | 99.64% | 99.30% | 99.30% | — | → 0.99x | 0 | — | — | 53s ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.84% | 99.69% | 96.69% | 96.69% | — | → 0.98x | 0 | — | — | 51s ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.84% | 99.69% | 98.78% | 98.78% | — | → 0.98x | 1 | 0s | 10d ago | 35s ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.84% | 99.69% | 31.33% | 31.33% | — | → 0.98x | 1 | 20d 1h | 30d ago | 19s ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.84% | 99.69% | 99.97% | 99.97% | — | → 0.97x | 0 | — | — | 19s ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.84% | 99.69% | 99.34% | 99.34% | — | → 0.99x | 7 | 4m | 11d ago | 18s ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.84% | 99.69% | 98.04% | 98.04% | — | → 0.97x | 0 | — | — | 19s ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.84% | 99.69% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 13s ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.84% | 99.69% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.84% | 99.69% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 5m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.84% | 99.68% | 24.52% | 24.52% | — | ↓ 0.94x | 1 | 20d 1h | 30d ago | 5m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.84% | 99.68% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.84% | 99.68% | 60.72% | 60.72% | — | → 0.96x | 0 | — | — | 5m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.84% | 99.68% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 11d ago | 5m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.84% | 99.68% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 15d ago | 5m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.79% | 99.60% | 99.28% | 99.28% | — | → 0.99x | 3 | 0s | 12d ago | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.79% | 99.65% | 17.47% | 17.47% | — | → 0.98x | 1 | 20d 1h | 30d ago | 2m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.79% | 99.65% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 2m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.79% | 99.65% | 98.00% | 98.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.79% | 99.59% | 99.90% | 99.90% | — | ↓ 0.91x | 0 | — | — | 2m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.79% | 99.65% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 10d ago | 2m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.79% | 99.64% | 99.65% | 99.65% | — | → 0.99x | 0 | — | — | 2m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.79% | 99.64% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 2m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.79% | 99.64% | 0.11% | 0.11% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.79% | 99.64% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 2m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.79% | 99.64% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 2m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.79% | 99.59% | 50.15% | 50.15% | — | → 0.97x | 1 | 0s | 29d ago | 1m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.79% | 99.64% | 24.91% | 24.91% | — | → 0.99x | 2 | 0s | 23d ago | 1m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.79% | 99.64% | 65.57% | 65.57% | — | → 0.99x | 0 | — | — | 1m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.79% | 99.64% | 74.11% | 74.11% | — | → 1.00x | 6 | 1h 20m | 11d ago | 1m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.79% | 99.64% | 99.61% | 99.61% | — | → 0.96x | 0 | — | — | 1m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.79% | 99.64% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 1m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.79% | 99.64% | 84.58% | 84.58% | — | → 0.99x | 0 | — | — | 1m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.79% | 99.64% | 83.46% | 83.46% | — | → 0.99x | 2 | 0s | 12d ago | 1m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.79% | 99.64% | 66.50% | 66.50% | — | → 0.97x | 1 | 20d 1h | 30d ago | 58s ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.79% | 99.59% | 56.85% | 56.85% | — | → 0.99x | 6 | 2h 41m | 23d ago | 53s ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.79% | 99.64% | 98.47% | 98.47% | — | → 0.97x | 2 | 0s | 18d ago | 46s ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.79% | 99.64% | 43.99% | 43.99% | — | → 0.97x | 1 | 20d 1h | 30d ago | 35s ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.79% | 99.63% | 98.43% | 98.43% | — | → 0.96x | 0 | — | — | 25s ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.79% | 99.58% | 97.87% | 97.87% | — | → 0.95x | 0 | — | — | 25s ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.78% | 99.63% | 98.88% | 98.88% | — | → 0.97x | 1 | 0s | 11d ago | 14s ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.78% | 99.63% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 8s ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.78% | 99.63% | 0.00% | 0.00% | — | → 0.96x | 1 | 20d 1h | 30d ago | 9s ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.78% | 99.63% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 5m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.78% | 99.63% | 99.97% | 99.97% | — | → 0.97x | 0 | — | — | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.78% | 99.63% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 5m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.78% | 99.58% | 99.85% | 99.85% | — | → 1.00x | 1 | 3m | 12d ago | 5m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.78% | 99.63% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 5m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.78% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.78% | 99.63% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 5m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.78% | 99.63% | 99.66% | 99.66% | — | → 0.99x | 0 | — | — | 5m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.74% | 99.60% | 75.23% | 75.23% | — | → 0.97x | 1 | 20d 1h | 30d ago | 3m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.74% | 99.55% | 98.93% | 98.93% | — | → 0.98x | 1 | 0s | 13d ago | 3m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.74% | 99.60% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 2m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.74% | 99.59% | 76.22% | 76.22% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.74% | 99.59% | 44.95% | 44.95% | — | → 0.97x | 0 | — | — | 2m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.74% | 99.59% | 99.49% | 99.49% | — | → 0.99x | 0 | — | — | 2m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.74% | 99.59% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 11d ago | 2m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.74% | 99.54% | 88.17% | 88.17% | — | → 0.99x | 1 | 20d 1h | 30d ago | 2m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.74% | 99.59% | 5.16% | 5.16% | — | → 0.98x | 1 | 20d 1h | 30d ago | 1m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.74% | 99.59% | 77.28% | 77.28% | — | → 1.00x | 1 | 20d 1h | 30d ago | 1m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.74% | 99.54% | 54.70% | 54.70% | — | → 0.99x | 1 | 0s | 29d ago | 1m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.74% | 99.54% | 31.58% | 31.58% | — | → 0.98x | 1 | 20d 1h | 30d ago | 1m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.74% | 99.59% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 1m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.74% | 99.59% | 81.07% | 81.07% | — | → 0.99x | 0 | — | — | 1m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.73% | 99.59% | 98.38% | 98.38% | — | → 1.00x | 1 | 6h 52m | 23d ago | 1m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.73% | 99.58% | 55.08% | 55.08% | — | → 0.98x | 23 | 0s | 11d ago | 46s ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.73% | 99.58% | 98.83% | 98.83% | — | → 0.97x | 0 | — | — | 35s ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.73% | 99.58% | 98.35% | 98.35% | — | → 0.99x | 0 | — | — | 34s ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.73% | 99.58% | 96.94% | 96.94% | — | → 1.00x | 1 | 0s | 12d ago | 34s ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.73% | 99.58% | 29.98% | 29.98% | — | → 0.98x | 1 | 20d 1h | 30d ago | 41s ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.73% | 99.58% | 98.37% | 98.37% | — | → 0.96x | 0 | — | — | 35s ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.73% | 99.58% | 99.93% | 99.93% | — | → 0.96x | 1 | 0s | 12d ago | 30s ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.73% | 99.58% | 93.61% | 93.61% | — | → 0.99x | 7 | 33m | 12d ago | 8s ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.73% | 99.53% | 99.85% | 99.85% | — | → 1.00x | 1 | 6h 1m | 11d ago | 8s ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.73% | 99.58% | 0.00% | 0.00% | — | → 0.96x | 1 | 20d 1h | 30d ago | 5m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.73% | 99.47% | 99.94% | 99.94% | — | → 0.97x | 0 | — | — | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.73% | 99.58% | 99.86% | 99.86% | — | → 0.99x | 1 | 0s | 27d ago | 5m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.73% | 99.58% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 5m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.73% | 99.68% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.73% | 99.58% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.73% | 99.47% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.69% | 99.45% | 98.29% | 98.29% | — | → 1.00x | 0 | — | — | 3m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.69% | 99.55% | 99.60% | 99.60% | — | → 1.00x | 1 | 2s | 12d ago | 3m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.69% | 99.54% | 99.65% | 99.65% | — | → 0.97x | 0 | — | — | 2m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.69% | 99.49% | 99.74% | 99.74% | — | → 0.99x | 1 | 4s | 13d ago | 2m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.69% | 99.49% | 99.90% | 99.90% | — | → 0.99x | 0 | — | — | 2m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.69% | 99.54% | 99.73% | 99.73% | — | → 1.00x | 1 | 0s | 26d ago | 2m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.69% | 99.49% | 89.73% | 89.73% | — | → 0.99x | 0 | — | — | 2m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.69% | 99.54% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 12d ago | 2m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.69% | 99.54% | 98.92% | 98.92% | — | → 1.00x | 0 | — | — | 2m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.68% | 99.54% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 2m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.68% | 99.49% | 24.54% | 24.54% | — | → 0.99x | 0 | — | — | 1m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.68% | 99.54% | 64.92% | 64.92% | — | → 0.99x | 1 | 0s | 29d ago | 1m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.68% | 99.33% | 90.95% | 90.95% | — | → 0.98x | 2 | 0s | 17d ago | 1m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.68% | 99.53% | 91.09% | 91.09% | — | ↓ 0.95x | 2 | 0s | 21d ago | 1m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.68% | 99.48% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 58s ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.68% | 99.53% | 99.64% | 99.64% | — | → 1.00x | 1 | 4h 60m | 30d ago | 51s ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.68% | 99.53% | 99.83% | 99.83% | — | → 0.98x | 0 | — | — | 51s ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.68% | 99.53% | 64.61% | 64.61% | — | → 0.99x | 3 | 2d 3h | 18d ago | 46s ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.68% | 99.48% | 86.85% | 86.85% | — | → 1.00x | 0 | — | — | 34s ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.68% | 99.53% | 28.78% | 28.78% | — | → 0.97x | 1 | 20d 1h | 30d ago | 35s ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.68% | 99.53% | 99.87% | 99.87% | — | → 0.97x | 1 | 0s | 23d ago | 30s ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.68% | 99.53% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 30s ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.68% | 99.53% | 96.80% | 96.80% | — | → 0.97x | 1 | 0s | 28d ago | 30s ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.68% | 99.48% | 99.71% | 99.71% | — | ↓ 0.93x | 1 | 0s | 12d ago | 25s ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.68% | 99.53% | 99.51% | 99.51% | — | → 0.98x | 0 | — | — | 14s ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.68% | 99.53% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 14s ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.68% | 99.53% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 13s ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.68% | 99.48% | 99.10% | 99.10% | — | → 1.00x | 0 | — | — | 5m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.68% | 99.53% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 5m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.68% | 99.53% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.68% | 99.53% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 5m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.67% | 99.53% | 91.90% | 91.90% | — | → 1.00x | 17 | 1h 19m | 23d ago | 5m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.67% | 99.53% | 96.87% | 96.87% | — | → 1.00x | 0 | — | — | 5m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.67% | 99.53% | 99.77% | 99.77% | — | → 0.96x | 1 | 0s | 12d ago | 5m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.67% | 99.53% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 19d ago | 5m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.64% | 99.50% | 99.75% | 99.75% | — | → 0.98x | 0 | — | — | 3m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.63% | 99.49% | 99.91% | 99.91% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.63% | 99.49% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.63% | 99.49% | 76.89% | 76.89% | — | → 0.98x | 1 | 20d 1h | 30d ago | 2m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.63% | 99.49% | 22.30% | 22.30% | — | → 0.99x | 11 | 0s | 12d ago | 2m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.63% | 99.49% | 99.48% | 99.48% | — | → 0.99x | 0 | — | — | 2m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.63% | 99.49% | 24.63% | 24.63% | — | → 0.98x | 0 | — | — | 1m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.63% | 99.49% | 62.65% | 62.65% | — | → 1.00x | 0 | — | — | 1m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.63% | 99.48% | 97.90% | 97.90% | — | → 0.98x | 0 | — | — | 58s ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.63% | 99.43% | 91.87% | 91.87% | — | → 1.00x | 1 | 30m | 21d ago | 53s ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.63% | 99.48% | 99.78% | 99.78% | — | → 0.99x | 0 | — | — | 51s ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.63% | 99.48% | 98.56% | 98.56% | — | → 0.97x | 0 | — | — | 46s ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.63% | 99.48% | 98.81% | 98.81% | — | → 0.98x | 4 | 38m | 25d ago | 46s ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.62% | 99.48% | 93.06% | 93.06% | — | → 0.99x | 6 | 10m | 23d ago | 30s ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.62% | 99.48% | 97.35% | 97.35% | — | → 0.98x | 2 | 2h 51m | 16d ago | 14s ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.62% | 99.48% | 89.89% | 89.89% | — | → 1.00x | 1 | 0s | 11d ago | 8s ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.62% | 99.48% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 9s ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.62% | 99.48% | 98.56% | 98.56% | — | → 0.98x | 2 | 2h 15m | 21d ago | 5m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.62% | 99.47% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 5m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.62% | 99.47% | 16.67% | 16.67% | — | → 0.99x | 1 | 20d 1h | 30d ago | 5m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.62% | 99.47% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 5m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.62% | 99.47% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 5m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.62% | 99.58% | — | — | — | → 1.02x | 0 | — | — | 5m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.62% | 99.47% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.58% | 99.44% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 2m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.58% | 99.44% | 76.88% | 76.88% | — | → 0.97x | 1 | 20d 1h | 30d ago | 2m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.58% | 99.34% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 2m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.58% | 99.39% | 99.79% | 99.79% | — | → 1.00x | 4 | 0s | 11d ago | 2m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.58% | 99.44% | 96.32% | 96.32% | — | → 1.00x | 1 | 0s | 29d ago | 1m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.58% | 99.43% | 68.50% | 68.50% | — | → 0.99x | 1 | 0s | 29d ago | 1m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.58% | 99.43% | 99.35% | 99.35% | — | → 0.99x | 0 | — | — | 1m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.58% | 99.43% | 98.00% | 98.00% | — | → 0.98x | 0 | — | — | 1m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.58% | 99.43% | 82.26% | 82.26% | — | → 1.00x | 0 | — | — | 1m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.57% | 99.43% | 97.21% | 97.21% | — | → 0.99x | 0 | — | — | 1m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.57% | 99.43% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 58s ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.57% | 99.38% | 98.66% | 98.66% | — | → 1.00x | 1 | 0s | 27d ago | 53s ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.57% | 99.43% | 98.16% | 98.16% | — | → 1.00x | 0 | — | — | 51s ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.57% | 99.43% | 99.76% | 99.76% | — | → 1.00x | 2 | 0s | 26d ago | 46s ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.57% | 99.43% | 95.85% | 95.85% | — | → 0.98x | 0 | — | — | 35s ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.57% | 99.43% | 14.21% | 14.21% | — | → 0.97x | 1 | 20d 1h | 30d ago | 19s ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.57% | 99.42% | 99.85% | 99.85% | — | ↓ 0.95x | 3 | 0s | 12d ago | 5m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.57% | 99.42% | — | — | — | → 0.99x | 0 | — | — | 5m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.53% | 99.39% | 95.68% | 95.68% | — | → 0.96x | 1 | 8d 14h | 27d ago | 3m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.53% | 99.29% | 99.62% | 99.62% | — | → 0.99x | 1 | 0s | 24d ago | 2m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.53% | 99.39% | 49.74% | 49.74% | — | → 1.00x | 5 | 41m | 20d ago | 2m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.53% | 99.39% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 10d ago | 2m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.53% | 99.39% | 99.84% | 99.84% | — | → 0.99x | 0 | — | — | 2m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.53% | 99.39% | 99.87% | 99.87% | — | → 0.98x | 1 | 0s | 12d ago | 2m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.53% | 99.29% | 97.28% | 97.28% | — | → 0.99x | 0 | — | — | 2m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.53% | 99.34% | 76.97% | 76.97% | — | → 0.97x | 1 | 20d 1h | 30d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.53% | 99.39% | 66.42% | 66.42% | — | → 0.99x | 1 | 2h 38m | 29d ago | 1m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.52% | 99.38% | 96.18% | 96.18% | — | → 1.00x | 3 | 24m | 19d ago | 1m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.52% | 99.32% | 97.07% | 97.07% | — | → 1.00x | 2 | 1d 2h | 23d ago | 13s ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.52% | 99.37% | 96.10% | 96.10% | — | → 1.00x | 0 | — | — | 13s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.48% | 99.34% | 99.74% | 99.74% | — | → 0.99x | 1 | 0s | 26d ago | 2m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.48% | 99.34% | 99.58% | 99.58% | — | → 0.99x | 6 | 0s | 13d ago | 2m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.48% | 99.34% | 99.96% | 99.96% | — | → 0.99x | 0 | — | — | 2m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.48% | 99.34% | 56.98% | 56.98% | — | → 1.00x | 3 | 0s | 25d ago | 2m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.47% | 99.34% | 24.53% | 24.53% | — | → 1.00x | 1 | 0s | 26d ago | 2m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.47% | 99.33% | 89.40% | 89.40% | — | → 0.99x | 0 | — | — | 1m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.47% | 99.33% | 98.11% | 98.11% | — | → 0.99x | 0 | — | — | 46s ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.47% | 99.32% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 34s ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.47% | 99.32% | 97.80% | 97.80% | — | → 1.00x | 0 | — | — | 34s ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.46% | 99.27% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 13s ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.46% | 99.32% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 8s ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.46% | 99.26% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.43% | 99.29% | 99.56% | 99.56% | — | → 1.00x | 0 | — | — | 2m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.43% | 99.24% | 97.98% | 97.98% | — | → 0.98x | 0 | — | — | 2m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.42% | 98.53% | 99.64% | 99.64% | — | → 0.97x | 5 | 57m | 14d ago | 2m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.42% | 99.29% | 99.87% | 99.87% | — | → 0.99x | 2 | 0s | 18d ago | 2m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.42% | 99.29% | 22.94% | 22.94% | — | → 0.97x | 1 | 0s | 26d ago | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.42% | 99.28% | 69.43% | 69.43% | — | → 1.00x | 2 | 0s | 25d ago | 1m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.41% | 99.22% | 99.74% | 99.74% | — | → 1.00x | 0 | — | — | 34s ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.41% | 99.21% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 5m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.41% | 99.26% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 5m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.38% | 99.24% | 99.61% | 99.61% | — | → 1.00x | 0 | — | — | 3m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.37% | 99.23% | 26.84% | 26.84% | — | → 1.00x | 0 | — | — | 1m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.36% | 99.23% | 69.87% | 69.87% | — | → 1.00x | 7 | 0s | 13d ago | 1m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.36% | 99.22% | 84.75% | 84.75% | — | → 0.99x | 1 | 0s | 16d ago | 30s ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.36% | 99.22% | 99.86% | 99.86% | — | → 0.98x | 0 | — | — | 30s ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.35% | 99.22% | 99.67% | 99.67% | — | → 0.97x | 0 | — | — | 14s ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.35% | 99.21% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 25d ago | 5m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.32% | 99.19% | 99.62% | 99.62% | — | → 0.98x | 1 | 0s | 12d ago | 2m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.32% | 99.18% | 97.94% | 97.94% | — | → 0.99x | 2 | 30m | 15d ago | 2m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.31% | 99.18% | 24.43% | 24.43% | — | → 1.00x | 0 | — | — | 1m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.31% | 99.17% | 97.74% | 97.74% | — | → 1.00x | 4 | 4h 13m | 11d ago | 45s ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.26% | 99.13% | 96.73% | 96.73% | — | → 0.99x | 0 | — | — | 1m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.26% | 99.02% | 81.53% | 81.53% | — | → 0.97x | 0 | — | — | 1m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.25% | 98.60% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 1m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.25% | 99.07% | 97.03% | 97.03% | — | → 0.98x | 0 | — | — | 53s ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.24% | 99.11% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.24% | 99.11% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.24% | 99.10% | 99.09% | 99.09% | — | → 0.99x | 1 | 20m | 22d ago | 5m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.24% | 99.10% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.20% | 99.07% | 98.85% | 98.85% | — | → 0.98x | 0 | — | — | 46s ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.19% | 99.05% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 5m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.16% | 99.03% | 98.78% | 98.78% | — | → 0.98x | 1 | 0s | 12d ago | 2m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.16% | 99.03% | 99.76% | 99.76% | — | → 1.00x | 1 | 0s | 27d ago | 2m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.16% | 99.03% | 38.65% | 38.65% | — | → 0.98x | 1 | 20d 1h | 30d ago | 2m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.14% | 99.01% | 97.10% | 97.10% | — | → 0.98x | 2 | 10m | 18d ago | 30s ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.08% | 98.95% | 99.95% | 99.95% | — | → 0.99x | 1 | 0s | 30d ago | 5m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.08% | 97.00% | 39.41% | 39.41% | — | → 0.99x | 59 | 7m | 12d ago | 5m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.08% | 98.89% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.05% | 98.87% | 98.88% | 98.88% | — | → 0.99x | 0 | — | — | 1m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.04% | 98.86% | 76.90% | 76.90% | — | → 0.98x | 1 | 0s | 27d ago | 53s ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.02% | 99.02% | — | — | — | → 1.00x | 0 | — | — | 5m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (92)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 98.99% | 98.87% | 63.14% | 63.14% | — | → 1.00x | 1 | 0s | 12d ago | 1m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 98.97% | 98.84% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 5m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.97% | 98.84% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 5m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.96% | 98.79% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 3m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 98.93% | 98.70% | 99.10% | 99.10% | — | → 0.98x | 1 | 0s | 27d ago | 53s ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.93% | 98.81% | 98.12% | 98.12% | — | → 0.99x | 2 | 10m | 25d ago | 45s ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.93% | 98.28% | 83.10% | 83.10% | — | → 1.01x | 11 | 4h 50m | 18d ago | 39s ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.77% | 98.60% | 28.39% | 28.39% | — | ↓ 0.95x | 1 | 20d 1h | 30d ago | 58s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.75% | 98.63% | 88.31% | 88.31% | — | → 0.99x | 0 | — | — | 5m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.73% | 98.46% | 2.34% | 2.34% | — | → 1.00x | 1 | 20d 1h | 30d ago | 1m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.64% | 98.42% | 99.34% | 99.34% | — | → 1.00x | 2 | 0s | 12d ago | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.59% | 98.48% | 51.42% | 51.42% | — | → 1.00x | 1 | 0s | 15d ago | 2m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.48% | 98.32% | 89.02% | 89.02% | — | → 1.00x | 0 | — | — | 2m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.38% | 98.27% | 98.94% | 98.94% | — | → 1.00x | 1 | 0s | 17d ago | 2m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.35% | 98.24% | 98.96% | 98.96% | — | → 1.00x | 1 | 29m | 27d ago | 51s ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 98.33% | 98.06% | 99.33% | 99.33% | — | → 0.96x | 8 | 3m | 19d ago | 5m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 98.27% | 98.16% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.14% | 98.04% | 83.18% | 83.18% | — | → 0.97x | 4 | 51s | 16d ago | 1m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 97.86% | 97.66% | 90.79% | 90.79% | — | → 1.00x | 1 | 0s | 12d ago | 34s ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.78% | 97.69% | 57.00% | 57.00% | — | → 0.98x | 0 | — | — | 1m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.70% | 97.61% | 66.05% | 66.05% | — | → 1.00x | 7 | 19h 32m | 15d ago | 34s ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.70% | 97.60% | 32.93% | 32.93% | — | → 1.00x | 0 | — | — | 28s ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 97.52% | 97.39% | 98.12% | 98.12% | — | ↓ 0.95x | 0 | — | — | 1m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 97.35% | 97.27% | 38.36% | 38.36% | — | → 1.00x | 0 | — | — | 1m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 96.95% | 96.89% | 98.93% | 98.93% | — | → 0.99x | 5 | 10m | 16d ago | 2m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 96.93% | 96.81% | 99.27% | 99.27% | — | → 0.99x | 0 | — | — | 1m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 96.92% | 96.85% | 98.59% | 98.59% | — | → 1.01x | 12 | 8m | 12d ago | 5m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.87% | 96.80% | 97.85% | 97.85% | — | → 1.00x | 1 | 1h 2m | 28d ago | 5m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 96.77% | 96.71% | 98.75% | 98.75% | — | → 0.99x | 6 | 23s | 15d ago | 13s ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 96.07% | 95.97% | 96.89% | 96.89% | — | → 0.97x | 5 | 2h 21m | 10d ago | 14s ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 95.78% | 95.69% | 98.02% | 98.02% | — | → 0.98x | 0 | — | — | 35s ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.07% | 94.90% | 17.31% | 17.31% | — | → 1.01x | 1 | 0s | 26d ago | 2m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.38% | 94.38% | 74.00% | 74.00% | — | → 0.99x | 10 | 1h 9m | 14d ago | 1m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 93.56% | 93.59% | 47.85% | 47.85% | — | → 0.99x | 1 | 20d 1h | 30d ago | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.03% | 93.07% | 97.00% | 97.00% | — | → 0.97x | 4 | 1h 51m | 13d ago | 30s ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 92.93% | 92.97% | 99.82% | 99.82% | — | → 0.98x | 1 | 0s | 21d ago | 30s ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 89.57% | 89.67% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 2m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 89.28% | 89.24% | 78.01% | 78.01% | — | → 1.00x | 77 | 5s | 12d ago | 3m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 88.89% | 88.81% | 75.72% | 75.72% | — | → 0.99x | 1 | 20d 1h | 30d ago | 2m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 88.60% | 88.24% | 77.59% | 77.59% | — | → 1.01x | 0 | — | — | 58s ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 88.51% | 88.51% | — | — | — | → 1.00x | 0 | — | — | 4m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 88.48% | 88.66% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 2m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 88.32% | 88.51% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 2m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 87.01% | 86.42% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 12d ago | 5m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 86.89% | 86.89% | 92.56% | 92.56% | — | → 1.00x | 15 | 27m | 11d ago | 18s ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 85.66% | 85.85% | 95.25% | 95.25% | — | → 1.00x | 15 | 1h 53m | 12d ago | 24s ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 84.52% | 84.80% | 87.87% | 87.87% | — | → 0.98x | 3 | 10m | 23d ago | 5m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 83.14% | 83.35% | 99.06% | 99.06% | — | → 1.00x | 5 | 1h 16m | 12d ago | 5m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 82.68% | 82.69% | 99.61% | 99.61% | — | → 1.01x | 3 | 0s | 10d ago | 5m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 82.22% | 82.40% | 82.00% | 82.00% | — | → 1.00x | 101 | 12m | 12d ago | 5m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 82.21% | 81.84% | 98.45% | 98.45% | — | → 1.00x | 28 | 1m | 12d ago | 2m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.10% | 80.78% | 69.98% | 69.98% | — | → 1.00x | 2 | 20m | 26d ago | 2m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 81.02% | 81.27% | 93.77% | 93.77% | — | → 1.00x | 0 | — | — | 2m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 80.87% | 81.03% | 97.23% | 97.23% | — | → 1.00x | 21 | 1m | 13d ago | 4m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 80.57% | 80.63% | 96.32% | 96.32% | — | → 1.00x | 139 | 18m | 13d ago | 2m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 80.46% | 80.62% | 98.89% | 98.89% | — | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 80.17% | 80.38% | 86.23% | 86.23% | — | → 1.00x | 6 | 0s | 16d ago | 2m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 79.32% | 79.62% | 67.23% | 67.23% | — | → 1.00x | 1 | 20d 1h | 30d ago | 3m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 79.23% | 79.42% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 2m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 77.73% | 77.94% | 87.06% | 87.06% | — | → 1.00x | 14 | 0s | 22d ago | 58s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 77.52% | 77.68% | 10.72% | 10.72% | — | → 1.00x | 1 | 20d 1h | 30d ago | 57s ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 76.49% | 76.66% | 68.41% | 68.41% | — | → 0.99x | 1 | 20d 1h | 30d ago | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 76.47% | 76.98% | 99.65% | 99.65% | — | → 1.00x | 0 | — | — | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.40% | 76.64% | 88.70% | 88.70% | — | → 1.00x | 1 | 6h | 10d ago | 45s ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 76.40% | 76.64% | 48.46% | 48.46% | — | → 1.00x | 1 | 20d 1h | 30d ago | 58s ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 76.32% | 76.27% | 86.83% | 86.83% | — | → 1.00x | 6 | 0s | 17d ago | 1m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 76.13% | 76.33% | 44.62% | 44.62% | — | → 1.00x | 1 | 19d 10h | 30d ago | 58s ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 76.08% | 76.59% | 68.70% | 68.70% | — | → 1.00x | 1 | 20d 1h | 30d ago | 5m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 75.61% | 75.86% | 75.11% | 75.11% | — | → 1.00x | 1 | 20d 1h | 30d ago | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 75.14% | 75.35% | 98.92% | 98.92% | — | → 1.00x | 1 | 0s | 16d ago | 3m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 75.01% | 74.45% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 5m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 74.73% | 75.00% | 66.07% | 66.07% | — | → 1.01x | 1 | 20d 1h | 30d ago | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 74.33% | 74.38% | 93.16% | 93.16% | — | → 1.00x | 3 | 17m | 15d ago | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.15% | 74.24% | 86.29% | 86.29% | — | → 1.00x | 15 | 2m | 12d ago | 2m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 73.91% | 73.79% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 5m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 73.31% | 73.39% | 96.79% | 96.79% | — | → 1.00x | 3 | 10m | 23d ago | 1m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 73.17% | 73.54% | 54.05% | 54.05% | — | → 1.00x | 1 | 20d 1h | 30d ago | 3m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 72.69% | 73.31% | 99.03% | 99.03% | — | → 0.99x | 0 | — | — | 1m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 70.98% | 71.07% | 83.85% | 83.85% | — | → 1.00x | 23 | 1m | 16d ago | 1m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 69.66% | 69.93% | 94.11% | 94.11% | — | → 1.00x | 8 | 11h 12m | 13d ago | 3m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 69.50% | 69.62% | 91.98% | 91.98% | — | → 1.00x | 17 | 17s | 12d ago | 3m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.98% | 69.07% | 69.01% | 69.01% | — | → 1.00x | 8 | 11m | 23d ago | 1m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 68.47% | 69.18% | 97.48% | 97.48% | — | → 0.96x | 1 | 0s | 11d ago | 35s ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 67.83% | 68.15% | 64.20% | 64.20% | — | → 1.00x | 6 | 0s | 14d ago | 2m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 65.25% | 65.59% | 50.52% | 50.52% | — | → 1.00x | 139 | 2h 26m | 11d ago | 3m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 62.26% | 61.02% | 76.64% | 76.64% | — | → 0.98x | 1 | 20d 1h | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 57.63% | 58.64% | 98.16% | 98.16% | — | → 0.98x | 2 | 0s | 18d ago | 25s ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 56.91% | 57.44% | 52.45% | 52.45% | — | → 1.01x | 1 | 20d 1h | 30d ago | 3m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 37.25% | 36.73% | 0.00% | 0.00% | — | → 1.00x | 1 | 20d 1h | 30d ago | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 34.20% | 35.87% | 78.42% | 78.42% | — | ↑ 1.06x | 1 | 19d 17h | 30d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 27.23% | 27.52% | 92.86% | 92.86% | — | → 1.02x | 7 | 0s | 10d ago | 46s ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 3.55% | 4.01% | 5.08% | 5.08% | — | → 0.96x | 1 | 20d 1h | 30d ago | 2m ago |

</details>

<details open>
<summary><strong>🔴 Down (307)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.57% | 99.32% | 98.95% | 98.95% | — | → 0.98x | 0 | — | — | 30s ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.48% | 99.48% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.28% | 98.18% | 96.43% | 96.43% | — | → 1.00x | 3 | 1d 4h | 10d ago | 2m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 85.28% | 85.53% | 0.69% | 0.69% | — | ↓ 0.89x | 1 | 20d 1h | 30d ago | 19s ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 82.24% | 82.23% | 68.13% | 68.13% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.02% | 82.19% | 63.15% | 63.15% | — | → 1.00x | 136 | 12m | 12d ago | 2m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 77.09% | 77.12% | 85.28% | 85.28% | — | → 1.00x | 0 | — | — | 2m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 76.99% | 77.15% | 54.78% | 54.78% | — | → 1.01x | 1 | 20d 1h | 30d ago | 2m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 76.34% | 76.58% | 98.53% | 98.53% | — | → 1.00x | 4 | 0s | 11d ago | 5m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 74.34% | 74.53% | 6.48% | 6.48% | — | → 1.00x | 1 | 20d 1h | 30d ago | 5m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.33% | 73.24% | 85.02% | 85.02% | — | → 1.00x | 15 | 4m | 13d ago | 46s ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 71.76% | 72.13% | 91.43% | 91.43% | — | → 1.00x | 0 | — | — | 5m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 71.12% | 70.99% | 98.87% | 98.87% | — | → 1.00x | 1 | 17h 60m | 30d ago | 2m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 68.47% | 68.93% | 99.88% | 99.88% | — | → 0.99x | 2 | 0s | 18d ago | 5m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 66.54% | 65.23% | 75.15% | 75.15% | — | → 1.00x | 1 | 20d 1h | 30d ago | 2m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 65.28% | 64.56% | 98.37% | 98.37% | — | → 0.98x | 3 | 3m | 14d ago | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 64.65% | 64.00% | 99.93% | 99.93% | — | → 1.00x | 0 | — | — | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 62.32% | 61.89% | 0.11% | 0.11% | — | ↓ 0.94x | 1 | 20d 1h | 30d ago | 2m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 57.27% | 58.30% | 99.94% | 99.94% | — | → 0.99x | 1 | 0s | 28d ago | 5m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 55.28% | 54.27% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 5m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 47.07% | 47.71% | 93.54% | 93.54% | — | → 1.00x | 15 | 4m | 13d ago | 5m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 45.21% | 44.51% | 98.24% | 98.24% | — | → 0.98x | 0 | — | — | 1m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 31.28% | 31.19% | 44.49% | 44.49% | — | → 1.01x | 1 | 20d 1h | 30d ago | 1m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 7.54% | 8.13% | 40.01% | 40.01% | — | ↓ 0.95x | 1 | 11d 22h | 30d ago | 2m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 4.46% | 4.96% | 7.76% | 7.76% | — | → 1.04x | 1 | 20d 1h | 30d ago | 18s ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.58% | 1.13% | 0.10% | 0.10% | — | → 1.03x | 1 | 20d 1h | 30d ago | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.42% | 2.63% | 44.99% | 44.99% | — | ↓ 0.91x | 0 | — | — | 1m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 0.21% | 2.43% | 97.75% | 97.75% | — | ↓ 0.95x | 3 | 0s | 11d ago | 53s ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.16% | 0.72% | 34.65% | 34.65% | — | ↑ 1.77x | 1 | 0s | 29d ago | 1m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.11% | 0.58% | 99.65% | 99.65% | — | ↓ 0.09x | 3 | 20m | 12d ago | 5m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.05% | 0.05% | — | — | — | → 1.00x | 0 | — | — | 4m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 0.58% | 99.82% | 99.82% | — | — | 2 | 2m | 14d ago | 5m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.56% | 63.31% | 63.31% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.57% | 59.84% | 59.84% | — | — | 2 | 60m | 11d ago | 58s ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.57% | 70.78% | 70.78% | — | — | 3 | 6d 14h | 10d ago | 58s ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.57% | 52.44% | 52.44% | — | — | 1 | 20d 1h | 30d ago | 51s ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.56% | 5.20% | 5.20% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.55% | 10.24% | 10.24% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.47% | 88.73% | 88.73% | — | — | 1 | 13d 1h | 23d ago | 9s ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.58% | 99.82% | 99.82% | — | — | 1 | 7h | 11d ago | 5m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.57% | 47.31% | 47.31% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.58% | 73.96% | 73.96% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.56% | 74.22% | 74.22% | — | — | 16 | 10h 11m | 17d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.46% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.56% | 3.13% | 3.13% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.57% | 79.86% | 79.86% | — | — | 1 | 20d 1h | 30d ago | 30s ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.56% | 40.15% | 40.15% | — | — | 0 | — | — | 2m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.56% | 33.64% | 33.64% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.52% | 90.14% | 90.14% | — | — | 2 | 6d 17h | 23d ago | 25s ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.57% | 85.33% | 85.33% | — | — | 95 | 33m | 12d ago | 41s ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.55% | 83.66% | 83.66% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.57% | 21.09% | 21.09% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.57% | 27.04% | 27.04% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.56% | 84.65% | 84.65% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.55% | 75.27% | 75.27% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.56% | 57.88% | 57.88% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.55% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.56% | 70.96% | 70.96% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.55% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.56% | 19.82% | 19.82% | — | — | 2 | 3d 23h | 18d ago | 2m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.57% | 83.11% | 83.11% | — | — | 2 | 2d 24h | 15d ago | 25s ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.57% | 13.15% | 13.15% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.56% | 87.39% | 87.39% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.57% | 30.30% | 30.30% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.47% | 99.75% | 99.75% | — | — | 1 | 0s | 11d ago | 5m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.56% | 78.14% | 78.14% | — | — | 96 | 3h 28m | 11d ago | 1m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.56% | 98.15% | 98.15% | — | — | 2 | 4d | 18d ago | 2m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.57% | 78.64% | 78.64% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.57% | 3.12% | 3.12% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.56% | 32.40% | 32.40% | — | — | 2 | 2d 6h | 14d ago | 2m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.47% | 76.21% | 76.21% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.46% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.58% | 72.40% | 72.40% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.56% | 48.90% | 48.90% | — | — | 5 | 3d 23h | 21d ago | 2m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.58% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 14d ago | 5m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.57% | 31.88% | 31.88% | — | — | 3 | 4d 3h | 19d ago | 1m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.47% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 11d ago | 5m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.47% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.56% | 84.44% | 84.44% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.58% | 32.34% | 32.34% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.62% | 64.69% | 64.69% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.57% | 46.41% | 46.41% | — | — | 2 | 8d 8h | 11d ago | 1m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.56% | 50.25% | 50.25% | — | — | 3 | 0s | 26d ago | 2m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.56% | 96.06% | 96.06% | — | — | 4 | 20h 37m | 13d ago | 2m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.57% | 69.29% | 69.29% | — | — | 1 | 20d 1h | 30d ago | 19s ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.58% | 39.40% | 39.40% | — | — | 1 | 18d 2h | 28d ago | 5m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.57% | 64.35% | 64.35% | — | — | 2 | 9d 1h | 28d ago | 1m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.57% | 26.33% | 26.33% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.47% | 98.70% | 98.70% | — | — | 8 | 0s | 20d ago | 5m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.56% | 50.43% | 50.43% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.47% | 75.41% | 75.41% | — | — | 169 | 1h 17m | 10d ago | 18s ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.57% | 22.07% | 22.07% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.57% | 98.37% | 98.37% | — | — | 0 | — | — | 58s ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.51% | 32.48% | 32.48% | — | — | 2 | 6d | 20d ago | 1m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.58% | 99.89% | 99.89% | — | — | 0 | — | — | 5m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.57% | 48.30% | 48.30% | — | — | 1 | 20d 1h | 30d ago | 25s ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.55% | 46.73% | 46.73% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.57% | 21.32% | 21.32% | — | — | 1 | 20d 1h | 30d ago | 58s ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.58% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.57% | 4.63% | 4.63% | — | — | 1 | 20d 1h | 30d ago | 58s ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.56% | 60.67% | 60.67% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.58% | 99.92% | 99.92% | — | — | 1 | 0s | 24d ago | 5m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.57% | 68.44% | 68.44% | — | — | 1 | 20d 1h | 30d ago | 30s ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.47% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.47% | 98.40% | 98.40% | — | — | 0 | — | — | 5m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 0.00% | 0.55% | 99.95% | 99.95% | — | — | 0 | — | — | 3m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.56% | 99.74% | 99.74% | — | — | 0 | — | — | 3m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.57% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 53s ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.57% | 5.52% | 5.52% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.57% | 81.13% | 81.13% | — | — | 3 | 20m | 24d ago | 51s ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.56% | 73.53% | 73.53% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.55% | 74.18% | 74.18% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.56% | 99.84% | 99.84% | — | — | 0 | — | — | 2m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.57% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 40s ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.58% | 99.89% | 99.89% | — | — | 1 | 3m | 13d ago | 5m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.46% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.57% | 83.98% | 83.98% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.57% | 20.14% | 20.14% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.58% | 99.95% | 99.95% | — | — | 0 | — | — | 5m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.56% | 48.81% | 48.81% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.56% | 83.92% | 83.92% | — | — | 1 | 19d 16h | 30d ago | 2m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.57% | 67.73% | 67.73% | — | — | 1 | 20d 1h | 30d ago | 19s ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.47% | 83.84% | 83.84% | — | — | 8 | 17m | 15d ago | 14s ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.57% | 74.74% | 74.74% | — | — | 1 | 20d 1h | 30d ago | 19s ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.57% | 47.90% | 47.90% | — | — | 1 | 20d 1h | 30d ago | 58s ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.58% | 99.25% | 99.25% | — | — | 1 | 0s | 24d ago | 14s ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.47% | 91.99% | 91.99% | — | — | 0 | — | — | 19s ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.56% | 22.80% | 22.80% | — | — | 3 | 10m | 20d ago | 2m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.47% | 98.05% | 98.05% | — | — | 3 | 0s | 11d ago | 5m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.57% | 55.75% | 55.75% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.47% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 12d ago | 5m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.56% | 43.20% | 43.20% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.55% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.47% | 16.44% | 16.44% | — | — | 1 | 20d 1h | 30d ago | 9s ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.56% | 39.16% | 39.16% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.55% | 74.31% | 74.31% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.58% | 20.55% | 20.55% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.57% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 0.56% | 22.80% | 22.80% | — | — | 1 | 0s | 29d ago | 1m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.56% | 54.39% | 54.39% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.58% | 75.74% | 75.74% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.56% | 35.55% | 35.55% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.57% | 65.91% | 65.91% | — | — | 1 | 20d 1h | 30d ago | 53s ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.47% | 99.94% | 99.94% | — | — | 1 | 21m | 25d ago | 5m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.57% | 70.74% | 70.74% | — | — | 3 | 6d 14h | 10d ago | 53s ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.56% | 34.00% | 34.00% | — | — | 2 | 30m | 14d ago | 2m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.57% | 62.39% | 62.39% | — | — | 1 | 20d 1h | 30d ago | 35s ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.56% | 45.59% | 45.59% | — | — | 0 | — | — | 3m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.56% | 76.99% | 76.99% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.56% | 38.64% | 38.64% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.56% | 22.32% | 22.32% | — | — | 0 | — | — | 2m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.56% | 90.53% | 90.53% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.58% | 91.04% | 91.04% | — | — | 2 | 1d 23h | 14d ago | 5m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.57% | 42.69% | 42.69% | — | — | 1 | 20d 1h | 30d ago | 30s ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.57% | 39.95% | 39.95% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.47% | 99.29% | 99.29% | — | — | 1 | 2h 37m | 29d ago | 5m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.57% | 24.01% | 24.01% | — | — | 1 | 20d 1h | 30d ago | 30s ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.47% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 36s ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.55% | 81.34% | 81.34% | — | — | 1 | 3h | 14d ago | 3m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.56% | 73.32% | 73.32% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 14s ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.57% | 2.87% | 2.87% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.57% | 49.45% | 49.45% | — | — | 0 | — | — | 57s ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 4s ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.56% | 39.57% | 39.57% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.56% | 20.82% | 20.82% | — | — | 49 | 8m | 10d ago | 2m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.56% | 23.09% | 23.09% | — | — | 5 | 12m | 16d ago | 2m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.58% | 20.58% | 20.58% | — | — | 1 | 20d 1h | 30d ago | 8s ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.47% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.57% | 33.55% | 33.55% | — | — | 1 | 20d 1h | 30d ago | 20s ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.57% | 52.99% | 52.99% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.56% | 82.46% | 82.46% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.56% | 92.62% | 92.62% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.55% | 23.25% | 23.25% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.57% | 27.77% | 27.77% | — | — | 99 | 14m | 13d ago | 1m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 1.20% | 25.44% | 25.44% | — | — | 4 | 3d 8h | 12d ago | 30s ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.56% | 86.17% | 86.17% | — | — | 1 | 10s | 16d ago | 2m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.47% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.56% | 49.10% | 49.10% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.56% | 86.30% | 86.30% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.57% | 65.07% | 65.07% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.56% | 99.12% | 99.12% | — | — | 4 | 3h | 10d ago | 2m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.57% | 92.19% | 92.19% | — | — | 1 | 15d 2h | 25d ago | 51s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.47% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.56% | 99.26% | 99.26% | — | — | 0 | — | — | 2m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.56% | 99.77% | 99.77% | — | — | 0 | — | — | 2m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.56% | 16.23% | 16.23% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.56% | 45.98% | 45.98% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.57% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 10d ago | 51s ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.58% | 98.92% | 98.92% | — | — | 6 | 31m | 22d ago | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.57% | 46.05% | 46.05% | — | — | 1 | 20d 1h | 30d ago | 53s ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.58% | 16.77% | 16.77% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.56% | 51.26% | 51.26% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.57% | 35.56% | 35.56% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.57% | 19.49% | 19.49% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.00% | 0.57% | 87.63% | 87.63% | — | — | 0 | — | — | 1m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.58% | 99.81% | 99.81% | — | — | 2 | 36m | 23d ago | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.57% | 46.51% | 46.51% | — | — | 4 | 1d 19h | 18d ago | 41s ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.57% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 30s ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.57% | 72.39% | 72.39% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.56% | 83.68% | 83.68% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.57% | 26.68% | 26.68% | — | — | 0 | — | — | 1m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.58% | 46.80% | 46.80% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.55% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.56% | 75.88% | 75.88% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.51% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.56% | 22.72% | 22.72% | — | — | 3 | 1d 21h | 16d ago | 1m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.56% | 68.72% | 68.72% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.56% | 18.10% | 18.10% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.55% | 54.28% | 54.28% | — | — | 1 | 20d 1h | 30d ago | 3m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.57% | 35.49% | 35.49% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.56% | 3.84% | 3.84% | — | — | 2 | 9d 18h | 11d ago | 2m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.56% | 63.55% | 63.55% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.56% | 23.11% | 23.11% | — | — | 0 | — | — | 2m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.47% | 99.60% | 99.60% | — | — | 0 | — | — | 5m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.57% | 22.23% | 22.23% | — | — | 1 | 20d 1h | 30d ago | 54s ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.57% | 6.70% | 6.70% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.58% | 22.60% | 22.60% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.56% | 62.64% | 62.64% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.57% | 30.92% | 30.92% | — | — | 1 | 20d 1h | 30d ago | 18s ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.57% | 68.76% | 68.76% | — | — | 1 | 20d 1h | 30d ago | 14s ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.47% | 3.80% | 3.80% | — | — | 1 | 20d 1h | 30d ago | 14s ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 13s ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.57% | 44.20% | 44.20% | — | — | 1 | 20d 1h | 30d ago | 18s ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.58% | 38.02% | 38.02% | — | — | 1 | 20d 1h | 30d ago | 14s ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.57% | 17.16% | 17.16% | — | — | 1 | 20d 1h | 30d ago | 25s ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.57% | 10.15% | 10.15% | — | — | 1 | 20d 1h | 30d ago | 51s ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.51% | 23.40% | 23.40% | — | — | 56 | 15m | 13d ago | 1m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.56% | 99.53% | 99.53% | — | — | 0 | — | — | 3m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.56% | 16.69% | 16.69% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.56% | 21.71% | 21.71% | — | — | 34 | 2h 2m | 10d ago | 2m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.57% | 14.75% | 14.75% | — | — | 1 | 20d 1h | 30d ago | 41s ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.58% | 25.49% | 25.49% | — | — | 1 | 20d 1h | 30d ago | 9s ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.57% | 8.99% | 8.99% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.57% | 3.93% | 3.93% | — | — | 1 | 20d 1h | 30d ago | 25s ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.57% | 4.55% | 4.55% | — | — | 1 | 20d 1h | 30d ago | 14s ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.56% | 46.30% | 46.30% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.58% | 76.63% | 76.63% | — | — | 1 | 13d 19h | 24d ago | 5m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.46% | 32.96% | 32.96% | — | — | 0 | — | — | 2m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.58% | 36.28% | 36.28% | — | — | 1 | 20d 1h | 30d ago | 5m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.57% | 98.48% | 98.48% | — | — | 0 | — | — | 1m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.57% | 63.49% | 63.49% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.57% | 40.17% | 40.17% | — | — | 1 | 20d 1h | 30d ago | 46s ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.56% | 77.23% | 77.23% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.57% | 43.61% | 43.61% | — | — | 1 | 20d 1h | 30d ago | 25s ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.56% | 23.13% | 23.13% | — | — | 0 | — | — | 2m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.56% | 0.01% | 0.01% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.56% | 22.68% | 22.68% | — | — | 0 | — | — | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.57% | 60.97% | 60.97% | — | — | 71 | 3m | 12d ago | 36s ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.56% | 38.37% | 38.37% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.57% | 1.35% | 1.35% | — | — | 1 | 20d 1h | 30d ago | 19s ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.57% | 17.59% | 17.59% | — | — | 1 | 20d 1h | 30d ago | 1m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.57% | 91.72% | 91.72% | — | — | 25 | 0s | 10d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.58% | 99.77% | 99.77% | — | — | 2 | 2m | 11d ago | 5m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.56% | 99.17% | 99.17% | — | — | 0 | — | — | 2m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.56% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 2m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.58% | 0.00% | 0.00% | — | — | 1 | 20d 1h | 30d ago | 5m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 20d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 20d 1h | 30d ago | — |

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
