# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**691 providers** — 292 🟢 operational · 87 🟡 degraded · 310 🔴 down · 2 ⚫ unknown

_Updated 2026-07-20 06:21 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.87% | 99.74% | 99.74% | — | → 0.98x | 4 | 0s | 12d ago | 54s ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.87% | 63.68% | 63.68% | — | → 0.98x | 1 | 0s | 30d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.86% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 4m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 99.86% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 2m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.95% | 99.82% | 1.90% | 1.90% | — | → 1.00x | 1 | 19d | 30d ago | 11m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.95% | 99.82% | 97.57% | 97.57% | — | → 0.98x | 6 | 0s | 14d ago | 9m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.95% | 99.69% | 99.67% | 99.67% | — | → 0.99x | 3 | 9h 40m | 12d ago | 9m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.95% | 99.82% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 9m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.95% | 99.68% | 77.97% | 77.97% | — | → 0.97x | 1 | 0s | 12d ago | 8m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.95% | 99.77% | 97.00% | 97.00% | — | → 0.96x | 0 | — | — | 8m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.95% | 99.82% | 98.81% | 98.81% | — | → 0.99x | 0 | — | — | 6m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.95% | 99.82% | 98.47% | 98.47% | — | → 0.99x | 0 | — | — | 5m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.95% | 99.82% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 3m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.95% | 99.95% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.90% | 99.74% | 93.57% | 93.57% | — | → 1.00x | 1 | 4m | 17d ago | 2m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.90% | 99.78% | 99.98% | 99.98% | — | → 0.99x | 1 | 4m | 17d ago | 2m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.90% | 99.65% | 36.33% | 36.33% | — | → 1.00x | 3 | 2m | 17d ago | 2m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.90% | 99.69% | 99.76% | 99.76% | — | → 0.98x | 0 | — | — | 1m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.90% | 99.74% | 70.89% | 70.89% | — | → 1.00x | 1 | 19d | 30d ago | 53s ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.90% | 99.78% | 99.80% | 99.80% | — | → 0.97x | 0 | — | — | 11s ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.90% | 99.78% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 10m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.90% | 99.73% | 99.85% | 99.85% | — | → 1.02x | 0 | — | — | 10m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.90% | 99.78% | 99.37% | 99.37% | — | → 0.98x | 0 | — | — | 9m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.90% | 99.73% | 93.26% | 93.26% | — | → 0.98x | 0 | — | — | 9m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.90% | 99.73% | 98.73% | 98.73% | — | → 0.99x | 1 | 0s | 30d ago | 8m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.90% | 99.78% | 71.79% | 71.79% | — | → 1.00x | 0 | — | — | 8m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.90% | 99.73% | 94.26% | 94.26% | — | → 0.98x | 0 | — | — | 8m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.90% | 99.77% | 90.32% | 90.32% | — | → 0.99x | 0 | — | — | 8m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.90% | 99.77% | 58.17% | 58.17% | — | → 0.99x | 1 | 19d | 30d ago | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.90% | 99.77% | 99.00% | 99.00% | — | → 0.99x | 0 | — | — | 8m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.90% | 99.77% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 8m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.90% | 99.77% | 89.57% | 89.57% | — | → 0.97x | 0 | — | — | 8m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.90% | 99.73% | 98.90% | 98.90% | — | → 0.96x | 1 | 1h 60m | 29d ago | 8m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.90% | 99.73% | 99.86% | 99.86% | — | → 1.00x | 0 | — | — | 7m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.90% | 99.77% | 93.73% | 93.73% | — | → 1.00x | 1 | 1h 22m | 27d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.90% | 99.73% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 5m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.90% | 99.73% | 98.04% | 98.04% | — | → 0.98x | 0 | — | — | 5m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.90% | 99.77% | 99.08% | 99.08% | — | → 0.99x | 0 | — | — | 4m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.90% | 99.77% | 99.61% | 99.61% | — | → 0.97x | 1 | 0s | 28d ago | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.85% | 99.65% | 68.59% | 68.59% | — | → 1.00x | 1 | 19d | 30d ago | 2m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.85% | 99.69% | 98.78% | 98.78% | — | → 1.00x | 18 | 5s | 17d ago | 2m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.85% | 99.74% | 93.42% | 93.42% | — | → 0.99x | 2 | 6m | 17d ago | 2m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.85% | 99.74% | 99.81% | 99.81% | — | → 1.00x | 0 | — | — | 34s ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.85% | 99.69% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 32s ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.85% | 99.69% | 22.33% | 22.33% | — | → 0.99x | 1 | 19d | 30d ago | 10s ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.85% | 99.73% | 99.02% | 99.02% | — | → 0.96x | 3 | 0s | 21d ago | 11m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.85% | 99.73% | 99.98% | 99.98% | — | → 0.99x | 1 | 0s | 28d ago | 11m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.85% | 99.69% | 99.90% | 99.90% | — | → 1.00x | 1 | 0s | 28d ago | 11m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.85% | 99.69% | 80.20% | 80.20% | — | → 0.99x | 2 | 0s | 13d ago | 10m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.85% | 99.69% | 99.87% | 99.87% | — | → 1.00x | 0 | — | — | 10m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.85% | 99.69% | 25.33% | 25.33% | — | → 0.97x | 1 | 0s | 24d ago | 9m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.85% | 99.64% | 99.09% | 99.09% | — | → 0.99x | 0 | — | — | 9m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.85% | 99.73% | 30.20% | 30.20% | — | → 0.95x | 1 | 19d | 30d ago | 9m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.85% | 99.68% | 84.58% | 84.58% | — | → 0.99x | 0 | — | — | 8m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.85% | 99.68% | 83.46% | 83.46% | — | → 0.99x | 2 | 0s | 13d ago | 8m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.85% | 99.73% | 99.97% | 99.97% | — | → 0.97x | 1 | 0s | 30d ago | 8m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.85% | 99.73% | 26.43% | 26.43% | — | → 0.99x | 1 | 9d 6h | 30d ago | 7m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.85% | 99.68% | 98.73% | 98.73% | — | → 0.96x | 0 | — | — | 7m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.85% | 99.73% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 7m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.85% | 99.68% | 99.30% | 99.30% | — | → 1.01x | 0 | — | — | 7m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.85% | 99.73% | 98.78% | 98.78% | — | → 0.98x | 1 | 0s | 11d ago | 6m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.85% | 99.73% | 31.33% | 31.33% | — | → 0.98x | 1 | 19d | 30d ago | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.85% | 99.73% | 6.05% | 6.05% | — | → 1.01x | 1 | 19d | 30d ago | 5m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.85% | 99.64% | 97.87% | 97.87% | — | → 0.96x | 0 | — | — | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.85% | 99.73% | 99.34% | 99.34% | — | → 1.00x | 7 | 4m | 12d ago | 5m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.85% | 99.73% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.84% | 99.72% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.84% | 99.72% | 24.52% | 24.52% | — | → 0.96x | 1 | 19d | 30d ago | 3m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.84% | 99.68% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 3m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.84% | 99.72% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.80% | 99.69% | 17.47% | 17.47% | — | → 0.98x | 1 | 19d | 30d ago | 54s ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.80% | 99.65% | 98.00% | 98.00% | — | → 1.00x | 0 | — | — | 10s ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.80% | 99.65% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 12d ago | 10s ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.80% | 99.69% | 99.65% | 99.65% | — | → 0.99x | 0 | — | — | 11s ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.80% | 99.69% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 12m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.80% | 99.60% | 99.34% | 99.34% | — | → 1.00x | 0 | — | — | 10m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.80% | 99.69% | 99.61% | 99.61% | — | → 0.98x | 0 | — | — | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.80% | 99.68% | 99.31% | 99.31% | — | → 0.96x | 0 | — | — | 8m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.80% | 99.68% | 66.50% | 66.50% | — | → 0.96x | 1 | 19d | 30d ago | 7m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.80% | 99.68% | 43.48% | 43.48% | — | → 0.99x | 1 | 19d | 30d ago | 7m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.80% | 99.68% | 98.47% | 98.47% | — | → 0.99x | 2 | 0s | 19d ago | 7m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.79% | 99.64% | 43.99% | 43.99% | — | → 1.00x | 1 | 19d | 30d ago | 6m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.79% | 99.68% | 98.69% | 98.69% | — | → 0.99x | 0 | — | — | 6m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.79% | 99.64% | 98.37% | 98.37% | — | → 0.97x | 0 | — | — | 6m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.79% | 99.64% | 99.93% | 99.93% | — | → 0.98x | 1 | 0s | 13d ago | 6m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.79% | 99.63% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 4m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.79% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.79% | 99.68% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 4m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.79% | 99.63% | 0.00% | 0.00% | — | → 0.97x | 1 | 19d | 30d ago | 4m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.79% | 99.63% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 3m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.79% | 99.63% | 99.86% | 99.86% | — | → 1.03x | 1 | 0s | 28d ago | 3m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.79% | 99.68% | 60.72% | 60.72% | — | → 0.96x | 0 | — | — | 3m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.79% | 99.68% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 12d ago | 2m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.79% | 99.68% | 99.67% | 99.67% | — | → 1.00x | 1 | 0s | 14d ago | 2m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.79% | 99.68% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 2m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.79% | 99.68% | 99.66% | 99.66% | — | → 0.99x | 0 | — | — | 2m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.75% | 99.60% | 98.93% | 98.93% | — | → 0.99x | 1 | 0s | 14d ago | 1m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.75% | 99.56% | 99.75% | 99.75% | — | → 0.97x | 0 | — | — | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.75% | 99.60% | 99.28% | 99.28% | — | → 0.99x | 3 | 0s | 13d ago | 1m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.75% | 99.65% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 12d ago | 11m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.75% | 99.60% | 98.92% | 98.92% | — | → 1.01x | 0 | — | — | 11m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.75% | 99.64% | 0.11% | 0.11% | — | → 1.00x | 1 | 19d | 30d ago | 11m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.75% | 99.64% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 10m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.75% | 99.55% | 88.17% | 88.17% | — | → 0.99x | 1 | 19d | 30d ago | 10m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.55% | 24.54% | 24.54% | — | → 0.99x | 0 | — | — | 9m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.75% | 99.64% | 5.16% | 5.16% | — | → 0.99x | 1 | 19d | 30d ago | 9m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.75% | 99.64% | 77.28% | 77.28% | — | → 1.00x | 1 | 19d | 30d ago | 9m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.75% | 99.60% | 50.15% | 50.15% | — | → 0.99x | 1 | 0s | 30d ago | 9m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.75% | 99.60% | 65.57% | 65.57% | — | → 1.01x | 0 | — | — | 9m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.75% | 99.64% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 8m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.75% | 99.60% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 8m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.74% | 99.64% | 99.18% | 99.18% | — | → 0.99x | 0 | — | — | 8m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.74% | 99.64% | 96.69% | 96.69% | — | → 0.99x | 0 | — | — | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.74% | 99.64% | 92.20% | 92.20% | — | → 0.99x | 6 | 0s | 15d ago | 7m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.74% | 99.64% | 98.35% | 98.35% | — | → 0.99x | 0 | — | — | 6m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.74% | 99.64% | 29.98% | 29.98% | — | → 0.98x | 1 | 19d | 30d ago | 6m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.74% | 99.54% | 93.06% | 93.06% | — | → 1.01x | 6 | 10m | 24d ago | 6m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.74% | 99.64% | 98.43% | 98.43% | — | → 0.97x | 0 | — | — | 5m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.74% | 99.63% | 0.00% | 0.00% | — | → 0.97x | 1 | 19d | 30d ago | 4m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.74% | 99.54% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 4m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.74% | 99.63% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 4m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.74% | 99.54% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 3m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.74% | 99.63% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 3m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.74% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.74% | 99.63% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 3m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.74% | 99.63% | 99.45% | 99.45% | — | → 0.99x | 2 | 3h 1m | 18d ago | 3m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.74% | 99.59% | 96.87% | 96.87% | — | → 1.00x | 0 | — | — | 3m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.74% | 99.58% | — | — | — | → 1.04x | 0 | — | — | 2m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.74% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 2m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.70% | 99.61% | 99.98% | 99.98% | — | → 0.97x | 1 | 4m | 17d ago | 2m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.70% | 99.60% | 99.49% | 99.49% | — | → 0.97x | 2 | 4h 55m | 23d ago | 1m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.70% | 99.60% | 75.23% | 75.23% | — | → 0.97x | 1 | 19d | 30d ago | 1m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.70% | 99.60% | 99.65% | 99.65% | — | → 1.00x | 0 | — | — | 54s ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.70% | 99.60% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 54s ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.70% | 99.56% | 99.74% | 99.74% | — | → 0.99x | 1 | 4s | 14d ago | 34s ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.70% | 99.60% | 44.95% | 44.95% | — | → 0.99x | 0 | — | — | 34s ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.70% | 99.56% | 99.90% | 99.90% | — | → 1.00x | 0 | — | — | 34s ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.70% | 99.56% | 99.73% | 99.73% | — | → 1.00x | 1 | 0s | 27d ago | 31s ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.70% | 99.51% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 9s ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.70% | 99.56% | 89.73% | 89.73% | — | → 0.99x | 0 | — | — | 10s ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.70% | 99.56% | 99.90% | 99.90% | — | ↓ 0.92x | 0 | — | — | 11s ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.70% | 99.60% | 99.49% | 99.49% | — | → 1.00x | 0 | — | — | 12m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.70% | 99.51% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 12m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.70% | 99.56% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 13d ago | 11m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.70% | 99.55% | 54.70% | 54.70% | — | → 1.00x | 1 | 0s | 30d ago | 9m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.70% | 99.55% | 24.91% | 24.91% | — | → 1.00x | 2 | 0s | 24d ago | 9m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.70% | 99.55% | 62.65% | 62.65% | — | → 0.99x | 0 | — | — | 9m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.70% | 99.60% | 64.92% | 64.92% | — | → 0.99x | 1 | 0s | 30d ago | 8m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.70% | 99.55% | 81.07% | 81.07% | — | → 0.98x | 0 | — | — | 8m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.69% | 94.96% | 74.00% | 74.00% | — | → 1.00x | 10 | 1h 9m | 15d ago | 8m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.69% | 99.41% | 90.95% | 90.95% | — | → 0.98x | 2 | 0s | 19d ago | 8m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.69% | 99.59% | 98.38% | 98.38% | — | → 1.00x | 1 | 6h 52m | 24d ago | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.69% | 99.50% | 97.90% | 97.90% | — | → 0.99x | 0 | — | — | 7m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.69% | 99.50% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 7m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.69% | 99.50% | 98.74% | 98.74% | — | → 0.99x | 0 | — | — | 7m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.69% | 99.50% | 56.85% | 56.85% | — | → 0.99x | 5 | 3h 14m | 24d ago | 7m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.69% | 99.59% | 64.61% | 64.61% | — | → 1.00x | 3 | 1d 18h | 19d ago | 7m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.69% | 99.55% | 98.56% | 98.56% | — | → 0.98x | 0 | — | — | 7m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.69% | 99.59% | 55.08% | 55.08% | — | → 0.99x | 22 | 0s | 12d ago | 7m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.69% | 99.59% | 98.83% | 98.83% | — | → 0.98x | 0 | — | — | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.69% | 99.59% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 6m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.69% | 99.54% | 99.51% | 99.51% | — | → 0.99x | 0 | — | — | 5m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.69% | 99.59% | 98.88% | 98.88% | — | → 0.99x | 1 | 0s | 13d ago | 5m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.69% | 99.59% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 5m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.69% | 99.54% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.69% | 99.50% | 97.35% | 97.35% | — | → 0.99x | 2 | 2h 51m | 17d ago | 5m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.69% | 99.54% | 99.10% | 99.10% | — | → 1.01x | 0 | — | — | 4m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.69% | 99.59% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 3m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.69% | 99.59% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.69% | 99.59% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 3m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.69% | 99.59% | 91.90% | 91.90% | — | → 1.00x | 14 | 57m | 24d ago | 3m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.69% | 99.59% | 99.77% | 99.77% | — | → 0.98x | 1 | 0s | 13d ago | 3m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.69% | 99.59% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.69% | 98.30% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.69% | 99.54% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.69% | 99.49% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.65% | 99.47% | 98.29% | 98.29% | — | → 1.01x | 0 | — | — | 1m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.65% | 99.56% | 76.22% | 76.22% | — | → 1.00x | 1 | 19d | 30d ago | 34s ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.65% | 99.42% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 11m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.65% | 99.51% | 96.32% | 96.32% | — | → 1.00x | 1 | 0s | 30d ago | 9m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.64% | 99.55% | 91.09% | 91.09% | — | ↓ 0.95x | 2 | 0s | 22d ago | 8m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.64% | 99.41% | 91.87% | 91.87% | — | → 1.00x | 1 | 30m | 22d ago | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.64% | 99.50% | 98.81% | 98.81% | — | → 0.98x | 2 | 0s | 26d ago | 7m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.64% | 99.46% | 99.76% | 99.76% | — | → 1.00x | 1 | 0s | 27d ago | 7m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.64% | 99.50% | 86.85% | 86.85% | — | → 1.00x | 0 | — | — | 6m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.64% | 99.55% | 96.94% | 96.94% | — | → 1.00x | 1 | 0s | 13d ago | 6m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.64% | 99.54% | 99.87% | 99.87% | — | → 0.99x | 1 | 0s | 24d ago | 6m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.64% | 99.50% | 96.80% | 96.80% | — | → 0.99x | 1 | 0s | 29d ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.64% | 99.54% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 4m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.64% | 99.54% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 3m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.64% | 99.49% | 99.85% | 99.85% | — | → 1.00x | 1 | 3m | 13d ago | 3m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.64% | 99.63% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.64% | 99.54% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 16d ago | 2m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.64% | 99.54% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.60% | 99.43% | 99.60% | 99.60% | — | → 1.00x | 1 | 2s | 13d ago | 1m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.60% | 99.47% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 12d ago | 31s ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.60% | 99.47% | 76.88% | 76.88% | — | → 0.98x | 1 | 19d | 30d ago | 12m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.60% | 99.38% | 99.79% | 99.79% | — | → 1.00x | 4 | 0s | 12d ago | 10m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.60% | 99.51% | 22.30% | 22.30% | — | → 1.01x | 9 | 0s | 13d ago | 10m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.60% | 99.51% | 99.48% | 99.48% | — | → 1.00x | 0 | — | — | 10m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.60% | 99.51% | 24.63% | 24.63% | — | → 0.98x | 0 | — | — | 9m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.59% | 99.51% | 68.50% | 68.50% | — | ↓ 0.95x | 1 | 0s | 30d ago | 8m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.59% | 99.46% | 98.00% | 98.00% | — | → 0.98x | 0 | — | — | 8m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.59% | 99.50% | 99.64% | 99.64% | — | → 0.99x | 0 | — | — | 7m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.59% | 99.50% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 7m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.59% | 99.41% | 98.66% | 98.66% | — | → 1.00x | 1 | 0s | 28d ago | 7m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.59% | 99.50% | 99.78% | 99.78% | — | → 0.99x | 0 | — | — | 7m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.59% | 99.46% | 28.78% | 28.78% | — | → 0.98x | 1 | 19d | 30d ago | 6m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.59% | 99.50% | 14.21% | 14.21% | — | → 0.96x | 1 | 19d | 30d ago | 5m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.59% | 99.45% | 89.89% | 89.89% | — | → 1.00x | 1 | 0s | 12d ago | 4m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.59% | 99.50% | 98.56% | 98.56% | — | → 1.00x | 2 | 2h 15m | 22d ago | 4m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.59% | 99.49% | 16.67% | 16.67% | — | → 0.99x | 1 | 19d | 30d ago | 3m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.59% | 99.49% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 3m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.58% | 99.49% | 99.85% | 99.85% | — | ↓ 0.95x | 3 | 0s | 13d ago | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.58% | 97.33% | 39.41% | 39.41% | — | → 1.01x | 53 | 8m | 13d ago | 3m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.55% | 99.34% | 99.62% | 99.62% | — | → 1.00x | 1 | 0s | 25d ago | 54s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.55% | 99.43% | 99.74% | 99.74% | — | → 0.99x | 1 | 0s | 27d ago | 34s ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.55% | 99.43% | 99.58% | 99.58% | — | → 1.00x | 5 | 0s | 14d ago | 34s ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.55% | 99.43% | 99.91% | 99.91% | — | → 0.96x | 0 | — | — | 11s ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.55% | 99.47% | 76.89% | 76.89% | — | → 0.98x | 1 | 19d | 30d ago | 11m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.54% | 99.37% | 66.42% | 66.42% | — | → 1.00x | 1 | 2h 38m | 30d ago | 9m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.54% | 99.37% | 82.26% | 82.26% | — | → 1.00x | 0 | — | — | 8m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.54% | 99.46% | 97.21% | 97.21% | — | → 0.99x | 0 | — | — | 8m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.54% | 99.41% | 98.11% | 98.11% | — | → 0.99x | 0 | — | — | 7m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.54% | 99.46% | 95.85% | 95.85% | — | → 0.99x | 0 | — | — | 6m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.54% | 97.91% | 90.79% | 90.79% | — | → 0.99x | 1 | 0s | 13d ago | 6m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.54% | 99.36% | 99.71% | 99.71% | — | ↓ 0.93x | 1 | 0s | 13d ago | 5m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.54% | 99.36% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 5m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.54% | 99.36% | 99.85% | 99.85% | — | → 1.00x | 1 | 6h 1m | 12d ago | 4m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.53% | 99.31% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.53% | 99.44% | — | — | — | → 1.01x | 0 | — | — | 2m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.50% | 99.30% | 99.61% | 99.61% | — | → 0.99x | 0 | — | — | 1m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.50% | 99.38% | 95.68% | 95.68% | — | → 0.97x | 1 | 8d 14h | 28d ago | 1m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.50% | 98.63% | 99.64% | 99.64% | — | → 0.95x | 5 | 57m | 15d ago | 12m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.50% | 99.33% | 99.84% | 99.84% | — | → 1.00x | 0 | — | — | 11m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.50% | 99.42% | 99.87% | 99.87% | — | → 0.99x | 1 | 0s | 13d ago | 11m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.50% | 99.42% | 24.53% | 24.53% | — | → 1.00x | 1 | 0s | 27d ago | 10m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.49% | 99.29% | 76.97% | 76.97% | — | → 0.97x | 1 | 19d | 30d ago | 10m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.49% | 99.33% | 69.87% | 69.87% | — | → 1.00x | 7 | 0s | 14d ago | 8m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.49% | 99.42% | 99.35% | 99.35% | — | → 1.00x | 0 | — | — | 8m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.49% | 99.41% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 6m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.49% | 99.41% | 97.80% | 97.80% | — | → 1.00x | 0 | — | — | 6m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.48% | 99.36% | 97.07% | 97.07% | — | → 1.01x | 1 | 2d 3h | 24d ago | 5m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.48% | 99.31% | 96.10% | 96.10% | — | → 1.00x | 0 | — | — | 5m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.45% | 99.38% | 49.74% | 49.74% | — | → 1.00x | 5 | 41m | 21d ago | 54s ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.45% | 99.38% | 56.98% | 56.98% | — | → 1.00x | 3 | 0s | 26d ago | 11m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.45% | 99.29% | 22.94% | 22.94% | — | → 0.98x | 1 | 0s | 27d ago | 10m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.45% | 99.29% | 97.28% | 97.28% | — | → 0.99x | 0 | — | — | 10m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.44% | 99.33% | 26.84% | 26.84% | — | → 1.00x | 0 | — | — | 9m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.44% | 99.14% | 81.53% | 81.53% | — | → 0.96x | 0 | — | — | 8m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.44% | 99.27% | 99.74% | 99.74% | — | → 1.00x | 0 | — | — | 6m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.43% | 99.32% | 84.75% | 84.75% | — | → 0.99x | 1 | 0s | 17d ago | 6m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.43% | 99.36% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.43% | 99.26% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 26d ago | 3m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.40% | 99.25% | 99.56% | 99.56% | — | → 0.99x | 0 | — | — | 54s ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.40% | 99.34% | 99.96% | 99.96% | — | → 1.00x | 0 | — | — | 32s ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.40% | 99.33% | 99.87% | 99.87% | — | → 1.00x | 2 | 0s | 19d ago | 11m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.39% | 99.24% | 97.94% | 97.94% | — | → 1.00x | 2 | 30m | 16d ago | 10m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.39% | 99.20% | 24.43% | 24.43% | — | → 0.99x | 0 | — | — | 9m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.39% | 99.28% | 89.40% | 89.40% | — | → 1.00x | 0 | — | — | 8m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.38% | 99.27% | 99.67% | 99.67% | — | → 0.99x | 0 | — | — | 5m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.38% | 99.22% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.38% | 99.27% | 99.67% | 99.67% | — | → 1.01x | 0 | — | — | 4m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.35% | 99.16% | 97.98% | 97.98% | — | → 0.99x | 0 | — | — | 34s ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.35% | 99.29% | 99.62% | 99.62% | — | → 0.99x | 1 | 0s | 13d ago | 11m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.34% | 99.29% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 10m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.33% | 99.18% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 4m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.33% | 99.22% | 99.09% | 99.09% | — | → 1.00x | 1 | 20m | 23d ago | 3m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.33% | 99.26% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 2m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.30% | 99.02% | 98.78% | 98.78% | — | → 0.97x | 1 | 0s | 13d ago | 11m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.29% | 99.29% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.29% | 99.24% | 69.43% | 69.43% | — | → 1.00x | 2 | 0s | 26d ago | 8m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.28% | 99.18% | 97.03% | 97.03% | — | → 0.98x | 0 | — | — | 7m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.28% | 99.14% | 98.85% | 98.85% | — | → 0.97x | 0 | — | — | 7m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.28% | 98.87% | 98.12% | 98.12% | — | ↓ 0.92x | 2 | 10m | 26d ago | 7m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.28% | 99.09% | 97.10% | 97.10% | — | → 0.99x | 1 | 0s | 19d ago | 6m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.27% | 99.22% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.25% | 99.16% | 38.65% | 38.65% | — | → 0.99x | 1 | 19d | 30d ago | 11m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.24% | 98.97% | 98.88% | 98.88% | — | → 0.99x | 0 | — | — | 8m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.23% | 99.05% | 97.74% | 97.74% | — | → 1.00x | 4 | 4h 13m | 12d ago | 7m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.23% | 99.14% | 99.86% | 99.86% | — | → 0.98x | 0 | — | — | 6m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.22% | 99.13% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.19% | 99.06% | 96.73% | 96.73% | — | → 1.00x | 0 | — | — | 9m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.19% | 99.10% | 31.58% | 31.58% | — | → 0.98x | 1 | 19d | 30d ago | 9m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.18% | 99.14% | 98.16% | 98.16% | — | → 1.01x | 0 | — | — | 7m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.17% | 99.13% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 3m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 99.17% | 99.03% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 2m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.15% | 98.93% | 99.76% | 99.76% | — | → 1.00x | 1 | 0s | 28d ago | 11m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.13% | 98.60% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 8m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.13% | 99.00% | 76.90% | 76.90% | — | → 0.98x | 1 | 0s | 28d ago | 7m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.07% | 98.99% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 3m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.02% | 98.99% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (87)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 98.98% | 98.97% | 63.14% | 63.14% | — | → 0.99x | 1 | 0s | 13d ago | 9m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.97% | 98.41% | 83.10% | 83.10% | — | ↑ 1.06x | 8 | 6h 39m | 19d ago | 6m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 98.97% | 98.90% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 4m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.96% | 98.80% | 88.31% | 88.31% | — | → 1.00x | 0 | — | — | 3m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.95% | 98.86% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 1m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.93% | 98.92% | 74.11% | 74.11% | — | → 1.00x | 6 | 1h 20m | 13d ago | 8m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.77% | 98.69% | 28.39% | 28.39% | — | ↓ 0.95x | 1 | 19d | 30d ago | 7m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.70% | 98.63% | 51.42% | 51.42% | — | → 1.00x | 1 | 0s | 16d ago | 33s ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.68% | 98.52% | 2.34% | 2.34% | — | → 1.00x | 1 | 19d | 30d ago | 9m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.60% | 98.53% | 99.34% | 99.34% | — | → 1.03x | 2 | 0s | 13d ago | 2m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 98.35% | 98.26% | 99.33% | 99.33% | — | → 0.98x | 7 | 3m | 20d ago | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.31% | 98.37% | 98.96% | 98.96% | — | → 1.00x | 1 | 29m | 28d ago | 7m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.24% | 98.32% | 98.94% | 98.94% | — | → 1.01x | 1 | 0s | 18d ago | 12m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.04% | 97.61% | 89.02% | 89.02% | — | → 1.00x | 0 | — | — | 12m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.87% | 97.89% | 57.00% | 57.00% | — | → 0.97x | 0 | — | — | 9m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.79% | 97.77% | 32.93% | 32.93% | — | → 1.00x | 0 | — | — | 6m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 97.75% | 97.84% | 96.43% | 96.43% | — | → 1.00x | 3 | 1d 4h | 11d ago | 34s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 97.54% | 97.51% | 99.10% | 99.10% | — | → 0.99x | 1 | 0s | 28d ago | 7m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.54% | 97.46% | 66.05% | 66.05% | — | → 1.01x | 7 | 19h 32m | 16d ago | 6m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 97.41% | 97.57% | 38.36% | 38.36% | — | → 1.00x | 0 | — | — | 9m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 97.17% | 97.27% | 98.12% | 98.12% | — | → 0.96x | 0 | — | — | 9m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.13% | 97.28% | 98.93% | 98.93% | — | → 1.00x | 4 | 5m | 17d ago | 10m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 97.05% | 96.76% | 99.27% | 99.27% | — | → 0.98x | 0 | — | — | 8m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 96.85% | 97.08% | 98.75% | 98.75% | — | → 1.00x | 5 | 27s | 16d ago | 5m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.79% | 96.84% | 97.85% | 97.85% | — | → 1.00x | 1 | 1h 2m | 29d ago | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 96.46% | 95.82% | 98.02% | 98.02% | — | → 0.96x | 0 | — | — | 6m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 96.39% | 95.80% | 96.89% | 96.89% | — | → 0.98x | 5 | 2h 21m | 12d ago | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 96.28% | 96.52% | 98.59% | 98.59% | — | → 1.05x | 12 | 8m | 13d ago | 4m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 95.49% | 88.01% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 13d ago | 3m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.02% | 95.02% | 17.31% | 17.31% | — | ↓ 0.91x | 1 | 0s | 27d ago | 10m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.58% | 94.89% | 96.18% | 96.18% | — | → 1.00x | 2 | 0s | 20d ago | 8m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 93.82% | 94.41% | 47.85% | 47.85% | — | → 0.99x | 1 | 19d | 30d ago | 11m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 93.37% | 93.90% | 97.00% | 97.00% | — | → 0.98x | 4 | 1h 51m | 14d ago | 6m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 93.22% | 93.86% | 99.82% | 99.82% | — | → 0.99x | 1 | 0s | 22d ago | 6m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 91.41% | 89.19% | 77.59% | 77.59% | — | → 1.00x | 0 | — | — | 7m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.73% | 87.00% | 95.25% | 95.25% | — | → 1.00x | 13 | 1h 6m | 13d ago | 5m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 89.06% | 88.70% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 34s ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 88.05% | 88.27% | 92.56% | 92.56% | — | → 1.01x | 13 | 27m | 12d ago | 5m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 87.86% | 87.51% | 75.72% | 75.72% | — | → 1.00x | 1 | 19d | 30d ago | 33s ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 87.51% | 87.29% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 33s ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 86.91% | 87.33% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 34s ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 85.14% | 86.69% | 87.87% | 87.87% | — | → 0.99x | 3 | 10m | 24d ago | 4m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 84.77% | 78.15% | 68.70% | 68.70% | — | → 0.99x | 1 | 19d | 30d ago | 3m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 83.72% | 76.67% | 99.03% | 99.03% | — | → 0.99x | 0 | — | — | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 83.57% | 83.71% | 0.69% | 0.69% | — | ↓ 0.92x | 1 | 19d | 30d ago | 5m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 82.92% | 82.44% | 68.13% | 68.13% | — | → 1.00x | 1 | 19d | 30d ago | 10m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 82.06% | 81.71% | 63.15% | 63.15% | — | → 1.00x | 126 | 12m | 13d ago | 11m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 81.82% | 82.19% | 99.61% | 99.61% | — | → 1.00x | 3 | 0s | 11d ago | 3m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 81.57% | 81.74% | 98.45% | 98.45% | — | → 1.00x | 26 | 1m | 13d ago | 10m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.37% | 81.40% | 69.98% | 69.98% | — | → 1.01x | 2 | 20m | 27d ago | 10m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 80.89% | 80.44% | 97.23% | 97.23% | — | → 1.01x | 19 | 0s | 14d ago | 2m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 80.22% | 79.92% | 93.77% | 93.77% | — | → 1.01x | 0 | — | — | 32s ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 79.83% | 79.71% | 85.28% | 85.28% | — | → 1.01x | 0 | — | — | 10m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 77.87% | 78.04% | 98.89% | 98.89% | — | → 1.00x | 1 | 0s | 21d ago | 1m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 77.45% | 77.45% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 77.10% | 77.43% | 86.23% | 86.23% | — | → 1.00x | 6 | 0s | 17d ago | 54s ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 77.08% | 77.17% | 67.23% | 67.23% | — | → 0.99x | 1 | 19d | 30d ago | 1m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 76.80% | 76.51% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 54s ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 76.64% | 77.29% | 87.06% | 87.06% | — | → 1.00x | 13 | 0s | 23d ago | 7m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 76.48% | 77.01% | 10.72% | 10.72% | — | → 1.00x | 1 | 19d | 30d ago | 7m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.34% | 76.32% | 88.70% | 88.70% | — | → 1.00x | 1 | 6h | 11d ago | 7m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 76.23% | 76.11% | 54.78% | 54.78% | — | → 1.01x | 1 | 19d | 30d ago | 11m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 75.19% | 75.90% | 86.83% | 86.83% | — | → 1.00x | 6 | 0s | 18d ago | 9m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 74.95% | 75.61% | 44.62% | 44.62% | — | → 1.00x | 1 | 18d 9h | 30d ago | 7m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 74.53% | 73.34% | 96.79% | 96.79% | — | → 0.96x | 3 | 10m | 24d ago | 9m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 74.23% | 75.20% | 48.46% | 48.46% | — | → 0.99x | 1 | 19d | 30d ago | 7m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 74.20% | 74.05% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 2m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 74.09% | 74.31% | 93.16% | 93.16% | — | → 1.00x | 3 | 17m | 16d ago | 8m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 74.07% | 65.94% | 76.64% | 76.64% | — | → 0.98x | 1 | 19d | 30d ago | 11m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 71.96% | 72.71% | 91.43% | 91.43% | — | → 1.01x | 0 | — | — | 2m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 70.46% | 70.74% | 83.85% | 83.85% | — | → 1.00x | 21 | 1m | 17d ago | 8m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 69.76% | 73.02% | 97.48% | 97.48% | — | → 0.99x | 1 | 0s | 12d ago | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 69.31% | 67.83% | 99.93% | 99.93% | — | → 1.01x | 0 | — | — | 54s ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.87% | 68.80% | 69.01% | 69.01% | — | → 1.00x | 8 | 11m | 24d ago | 8m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 67.36% | 65.55% | 75.15% | 75.15% | — | → 1.01x | 1 | 19d | 30d ago | 10m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 67.02% | 67.27% | 94.11% | 94.11% | — | → 1.00x | 8 | 11h 12m | 14d ago | 1m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 66.89% | 68.35% | 99.88% | 99.88% | — | → 0.99x | 2 | 0s | 19d ago | 3m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 66.72% | 65.58% | 0.11% | 0.11% | — | → 0.95x | 1 | 19d | 30d ago | 10m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 65.47% | 65.36% | 64.20% | 64.20% | — | → 1.00x | 6 | 0s | 15d ago | 52s ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 65.40% | 66.34% | 98.87% | 98.87% | — | → 1.01x | 1 | 3h 30m | 30d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 59.35% | 63.87% | 98.16% | 98.16% | — | → 0.97x | 2 | 0s | 19d ago | 5m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 50.12% | 44.74% | 0.00% | 0.00% | — | → 1.00x | 1 | 19d | 30d ago | 1m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 26.75% | 33.32% | 78.42% | 78.42% | — | ↑ 1.24x | 1 | 19d | 30d ago | 4m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 17.76% | 16.17% | 5.08% | 5.08% | — | → 0.99x | 1 | 19d | 30d ago | 12m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 7.89% | 8.25% | 40.01% | 40.01% | — | → 1.04x | 1 | 10d 22h | 30d ago | 11m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 3.27% | 3.40% | 99.82% | 99.82% | — | ↓ 0.67x | 2 | 2m | 15d ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.82% | 1.23% | 83.11% | 83.11% | — | ↓ 0.79x | 2 | 2d 24h | 16d ago | 6m ago |

</details>

<details open>
<summary><strong>🔴 Down (310)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.69% | 99.54% | 93.61% | 93.61% | — | → 1.00x | 7 | 33m | 13d ago | 4m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.65% | 99.65% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.59% | 99.41% | 98.95% | 98.95% | — | → 0.96x | 0 | — | — | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 98.47% | 97.12% | 83.18% | 83.18% | — | → 0.97x | 4 | 51s | 17d ago | 8m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 88.03% | 88.16% | 78.01% | 78.01% | — | → 0.99x | 75 | 5s | 13d ago | 1m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 82.14% | 82.97% | 99.06% | 99.06% | — | → 1.00x | 5 | 1h 16m | 13d ago | 2m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 81.36% | 81.96% | 82.00% | 82.00% | — | → 1.00x | 95 | 10m | 13d ago | 2m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 79.77% | 80.14% | 96.32% | 96.32% | — | → 1.00x | 128 | 17m | 14d ago | 12m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 75.91% | 76.34% | 98.53% | 98.53% | — | → 1.00x | 4 | 0s | 12d ago | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 75.71% | 76.25% | 99.65% | 99.65% | — | → 1.00x | 0 | — | — | 10m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 74.66% | 74.69% | 6.48% | 6.48% | — | → 1.00x | 1 | 19d 1h | 30d ago | 3m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 74.33% | 74.65% | 68.41% | 68.41% | — | → 0.99x | 1 | 19d | 30d ago | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.00% | 73.97% | 86.29% | 86.29% | — | → 1.00x | 15 | 2m | 13d ago | 11m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 73.10% | 73.37% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 73.09% | 73.55% | 98.92% | 98.92% | — | → 1.00x | 1 | 0s | 17d ago | 1m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 72.84% | 73.60% | 75.11% | 75.11% | — | → 0.99x | 1 | 19d | 30d ago | 1m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 72.79% | 73.07% | 66.07% | 66.07% | — | → 1.04x | 1 | 19d 1h | 30d ago | 1m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 72.67% | 72.76% | 85.02% | 85.02% | — | → 0.99x | 14 | 4m | 14d ago | 7m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 71.25% | 71.75% | 54.05% | 54.05% | — | → 0.99x | 1 | 19d | 30d ago | 1m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 67.48% | 67.76% | 91.98% | 91.98% | — | → 1.00x | 13 | 23s | 13d ago | 1m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 67.24% | 60.06% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 2m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 63.36% | 63.86% | 50.52% | 50.52% | — | → 1.01x | 136 | 2h 19m | 12d ago | 1m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 61.18% | 60.40% | 98.37% | 98.37% | — | → 0.99x | 3 | 3m | 15d ago | 3m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 55.36% | 56.10% | 52.45% | 52.45% | — | → 1.00x | 1 | 19d | 30d ago | 1m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 45.01% | 50.87% | 99.94% | 99.94% | — | → 0.98x | 1 | 0s | 29d ago | 4m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 43.38% | 38.90% | 98.24% | 98.24% | — | → 0.98x | 0 | — | — | 8m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 38.09% | 41.67% | 93.54% | 93.54% | — | → 1.01x | 11 | 5m | 14d ago | 3m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 26.32% | 25.05% | 92.86% | 92.86% | — | → 1.04x | 6 | 0s | 11d ago | 6m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 19.94% | 27.24% | 44.49% | 44.49% | — | → 1.00x | 1 | 19d | 30d ago | 8m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 5.51% | 5.57% | 7.76% | 7.76% | — | → 1.03x | 1 | 19d | 30d ago | 5m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.56% | 1.12% | 0.10% | 0.10% | — | ↑ 1.16x | 1 | 19d | 30d ago | 10m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.15% | 0.63% | 34.65% | 34.65% | — | ↑ 1.77x | 1 | 0s | 30d ago | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.10% | 0.50% | 99.65% | 99.65% | — | ↓ 0.09x | 3 | 20m | 13d ago | 4m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.10% | 2.30% | 44.99% | 44.99% | — | ↑ 1.20x | 0 | — | — | 8m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.05% | 0.05% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.49% | 63.31% | 63.31% | — | — | 1 | 19d | 30d ago | 10m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.50% | 59.84% | 59.84% | — | — | 2 | 60m | 12d ago | 7m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.50% | 70.78% | 70.78% | — | — | 3 | 6d 5h | 11d ago | 7m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.50% | 52.44% | 52.44% | — | — | 1 | 19d | 30d ago | 7m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.49% | 5.20% | 5.20% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.48% | 10.24% | 10.24% | — | — | 1 | 19d | 30d ago | 2m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.41% | 88.73% | 88.73% | — | — | 1 | 13d 1h | 24d ago | 4m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.50% | 99.82% | 99.82% | — | — | 1 | 7h | 12d ago | 4m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.50% | 47.31% | 47.31% | — | — | 1 | 19d | 30d ago | 6m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.51% | 73.96% | 73.96% | — | — | 1 | 19d | 30d ago | 3m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.49% | 74.22% | 74.22% | — | — | 15 | 10h 52m | 18d ago | 10m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.40% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.49% | 3.13% | 3.13% | — | — | 1 | 19d | 30d ago | 10m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.50% | 79.86% | 79.86% | — | — | 1 | 19d | 30d ago | 6m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.49% | 40.15% | 40.15% | — | — | 0 | — | — | 10m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.49% | 33.64% | 33.64% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.46% | 90.14% | 90.14% | — | — | 2 | 6d 17h | 24d ago | 5m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.50% | 85.33% | 85.33% | — | — | 95 | 33m | 13d ago | 6m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.48% | 83.66% | 83.66% | — | — | 1 | 19d | 30d ago | 1m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.50% | 21.09% | 21.09% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.49% | 27.04% | 27.04% | — | — | 1 | 19d | 30d ago | 8m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.49% | 84.65% | 84.65% | — | — | 1 | 19d | 30d ago | 34s ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.48% | 75.27% | 75.27% | — | — | 1 | 19d | 30d ago | 1m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.49% | 57.88% | 57.88% | — | — | 1 | 19d | 30d ago | 12m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 54s ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 1m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.48% | 70.96% | 70.96% | — | — | 1 | 19d | 30d ago | 34s ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 1m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.49% | 19.82% | 19.82% | — | — | 1 | 7d 21h | 19d ago | 10m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.50% | 13.15% | 13.15% | — | — | 1 | 19d | 30d ago | 8m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.49% | 87.39% | 87.39% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.50% | 30.30% | 30.30% | — | — | 1 | 19d | 30d ago | 8m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.41% | 99.75% | 99.75% | — | — | 1 | 0s | 12d ago | 2m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.49% | 78.14% | 78.14% | — | — | 96 | 3h 13m | 12d ago | 9m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.49% | 98.15% | 98.15% | — | — | 2 | 4d | 19d ago | 11m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.50% | 78.64% | 78.64% | — | — | 1 | 19d | 30d ago | 6m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 0.00% | 2.13% | 97.75% | 97.75% | — | — | 3 | 0s | 12d ago | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.49% | 3.12% | 3.12% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.49% | 32.40% | 32.40% | — | — | 2 | 2d 6h | 15d ago | 10m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.41% | 76.21% | 76.21% | — | — | 1 | 19d | 30d ago | 4m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.40% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.51% | 72.40% | 72.40% | — | — | 1 | 19d 1h | 30d ago | 3m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.49% | 48.90% | 48.90% | — | — | 4 | 4d 17h | 22d ago | 11m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.51% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 15d ago | 2m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.49% | 31.88% | 31.88% | — | — | 3 | 3d 19h | 20d ago | 8m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.41% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 12d ago | 4m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.41% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.49% | 84.44% | 84.44% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.51% | 32.34% | 32.34% | — | — | 1 | 19d 1h | 30d ago | 3m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.54% | 64.69% | 64.69% | — | — | 1 | 19d | 30d ago | 7m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.49% | 46.41% | 46.41% | — | — | 2 | 8d 8h | 12d ago | 8m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.49% | 50.25% | 50.25% | — | — | 2 | 0s | 27d ago | 10m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.49% | 96.06% | 96.06% | — | — | 4 | 20h 37m | 14d ago | 10m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.50% | 69.29% | 69.29% | — | — | 1 | 19d | 30d ago | 5m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.50% | 39.40% | 39.40% | — | — | 1 | 18d 2h | 29d ago | 3m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.50% | 64.35% | 64.35% | — | — | 2 | 9d 1h | 29d ago | 8m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.50% | 26.33% | 26.33% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.41% | 98.70% | 98.70% | — | — | 6 | 0s | 21d ago | 3m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.49% | 50.43% | 50.43% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.41% | 75.41% | 75.41% | — | — | 156 | 1h 19m | 11d ago | 5m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.49% | 22.07% | 22.07% | — | — | 1 | 19d | 30d ago | 8m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.50% | 98.37% | 98.37% | — | — | 0 | — | — | 7m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.45% | 32.48% | 32.48% | — | — | 2 | 5d 12h | 21d ago | 9m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.51% | 0.00% | 0.00% | — | — | 1 | 19d 1h | 30d ago | 2m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.50% | 99.89% | 99.89% | — | — | 0 | — | — | 4m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.50% | 48.30% | 48.30% | — | — | 1 | 19d | 30d ago | 5m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.48% | 46.73% | 46.73% | — | — | 1 | 19d | 30d ago | 2m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.50% | 21.32% | 21.32% | — | — | 1 | 19d | 30d ago | 7m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.51% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 32s ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.50% | 4.63% | 4.63% | — | — | 1 | 19d | 30d ago | 7m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.49% | 60.67% | 60.67% | — | — | 1 | 19d | 30d ago | 11s ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.50% | 99.92% | 99.92% | — | — | 1 | 0s | 25d ago | 4m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.50% | 68.44% | 68.44% | — | — | 1 | 19d | 30d ago | 6m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.41% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.41% | 98.40% | 98.40% | — | — | 0 | — | — | 3m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 0.00% | 0.48% | 99.95% | 99.95% | — | — | 0 | — | — | 1m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.48% | 99.74% | 99.74% | — | — | 0 | — | — | 1m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 56s ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.50% | 5.52% | 5.52% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.50% | 81.13% | 81.13% | — | — | 3 | 20m | 25d ago | 7m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.49% | 73.53% | 73.53% | — | — | 1 | 19d | 30d ago | 9m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.48% | 74.18% | 74.18% | — | — | 1 | 19d | 30d ago | 1m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.48% | 99.84% | 99.84% | — | — | 0 | — | — | 54s ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 6m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.51% | 99.89% | 99.89% | — | — | 1 | 3m | 14d ago | 3m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.40% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.50% | 83.98% | 83.98% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.50% | 20.14% | 20.14% | — | — | 1 | 19d | 30d ago | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.51% | 99.95% | 99.95% | — | — | 0 | — | — | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.49% | 48.81% | 48.81% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.49% | 83.92% | 83.92% | — | — | 1 | 19d | 30d ago | 32s ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.50% | 67.73% | 67.73% | — | — | 1 | 19d | 30d ago | 5m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.41% | 83.84% | 83.84% | — | — | 8 | 17m | 16d ago | 5m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.50% | 74.74% | 74.74% | — | — | 1 | 19d | 30d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.50% | 47.90% | 47.90% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.50% | 99.25% | 99.25% | — | — | 1 | 0s | 25d ago | 5m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.41% | 91.99% | 91.99% | — | — | 0 | — | — | 5m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.49% | 22.80% | 22.80% | — | — | 3 | 10m | 21d ago | 10m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.41% | 98.05% | 98.05% | — | — | 3 | 0s | 12d ago | 3m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.50% | 55.75% | 55.75% | — | — | 1 | 19d | 30d ago | 6m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.41% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 13d ago | 3m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.49% | 43.20% | 43.20% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 2m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.41% | 16.44% | 16.44% | — | — | 1 | 19d | 30d ago | 4m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.49% | 39.16% | 39.16% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.48% | 74.31% | 74.31% | — | — | 1 | 19d | 30d ago | 1m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.51% | 20.55% | 20.55% | — | — | 1 | 19d | 30d ago | 3m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.00% | 0.49% | 22.80% | 22.80% | — | — | 1 | 0s | 30d ago | 9m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.49% | 54.39% | 54.39% | — | — | 1 | 19d | 30d ago | 10m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.50% | 75.74% | 75.74% | — | — | 1 | 19d | 30d ago | 4m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.48% | 35.55% | 35.55% | — | — | 1 | 19d | 30d ago | 56s ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 32s ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.50% | 65.91% | 65.91% | — | — | 1 | 19d | 30d ago | 7m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.41% | 99.94% | 99.94% | — | — | 1 | 21m | 26d ago | 4m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.50% | 70.74% | 70.74% | — | — | 3 | 6d 5h | 11d ago | 7m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.49% | 34.00% | 34.00% | — | — | 2 | 30m | 15d ago | 11m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.50% | 62.39% | 62.39% | — | — | 1 | 19d | 30d ago | 6m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.48% | 45.59% | 45.59% | — | — | 0 | — | — | 1m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.49% | 76.99% | 76.99% | — | — | 1 | 19d | 30d ago | 12s ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.49% | 38.64% | 38.64% | — | — | 1 | 19d | 30d ago | 9m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.49% | 22.32% | 22.32% | — | — | 0 | — | — | 32s ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.49% | 90.53% | 90.53% | — | — | 1 | 19d | 30d ago | 10m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.50% | 91.04% | 91.04% | — | — | 2 | 1d 23h | 15d ago | 4m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.50% | 42.69% | 42.69% | — | — | 1 | 19d | 30d ago | 6m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.50% | 39.95% | 39.95% | — | — | 1 | 19d | 30d ago | 8m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.41% | 99.29% | 99.29% | — | — | 1 | 2h 37m | 30d ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.50% | 24.01% | 24.01% | — | — | 1 | 19d | 30d ago | 6m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.41% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 6m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.48% | 81.34% | 81.34% | — | — | 1 | 3h | 15d ago | 1m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.49% | 73.32% | 73.32% | — | — | 1 | 19d | 30d ago | 10m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.50% | 2.87% | 2.87% | — | — | 1 | 19d | 30d ago | 8m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.50% | 49.45% | 49.45% | — | — | 0 | — | — | 7m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 4m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.48% | 39.57% | 39.57% | — | — | 1 | 19d | 30d ago | 54s ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.49% | 20.82% | 20.82% | — | — | 49 | 8m | 11d ago | 10m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.49% | 23.09% | 23.09% | — | — | 4 | 15m | 17d ago | 12s ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.50% | 20.58% | 20.58% | — | — | 1 | 19d | 30d ago | 4m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.41% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.50% | 33.55% | 33.55% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.50% | 52.99% | 52.99% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.49% | 82.46% | 82.46% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.48% | 92.62% | 92.62% | — | — | 1 | 19d | 30d ago | 54s ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.48% | 23.25% | 23.25% | — | — | 1 | 19d | 30d ago | 1m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.50% | 27.77% | 27.77% | — | — | 91 | 14m | 14d ago | 8m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 1.05% | 25.44% | 25.44% | — | — | 4 | 3d 2h | 13d ago | 6m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.49% | 86.17% | 86.17% | — | — | 1 | 10s | 17d ago | 11m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.41% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 4m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10s ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11s ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.49% | 49.10% | 49.10% | — | — | 1 | 19d | 30d ago | 11m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.48% | 86.30% | 86.30% | — | — | 1 | 19d | 30d ago | 35s ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.50% | 65.07% | 65.07% | — | — | 1 | 19d | 30d ago | 6m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.49% | 99.12% | 99.12% | — | — | 4 | 3h | 11d ago | 11m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.50% | 92.19% | 92.19% | — | — | 1 | 15d 2h | 26d ago | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11s ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.41% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.49% | 99.26% | 99.26% | — | — | 0 | — | — | 10m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.48% | 99.77% | 99.77% | — | — | 0 | — | — | 54s ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.49% | 16.23% | 16.23% | — | — | 1 | 19d | 30d ago | 10m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.49% | 45.98% | 45.98% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.50% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 11d ago | 7m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.50% | 98.92% | 98.92% | — | — | 6 | 31m | 23d ago | 4m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.50% | 46.05% | 46.05% | — | — | 1 | 19d | 30d ago | 7m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.50% | 16.77% | 16.77% | — | — | 1 | 19d | 30d ago | 4m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.49% | 51.26% | 51.26% | — | — | 1 | 19d | 30d ago | 10m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.49% | 35.56% | 35.56% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.50% | 19.49% | 19.49% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.00% | 0.50% | 87.63% | 87.63% | — | — | 0 | — | — | 8m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.50% | 99.81% | 99.81% | — | — | 2 | 36m | 24d ago | 4m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.50% | 46.51% | 46.51% | — | — | 4 | 1d 13h | 19d ago | 6m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.50% | 72.39% | 72.39% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.49% | 83.68% | 83.68% | — | — | 1 | 19d | 30d ago | 12m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.49% | 26.68% | 26.68% | — | — | 0 | — | — | 9m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.51% | 46.80% | 46.80% | — | — | 1 | 19d 1h | 30d ago | 3m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.48% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 1m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.49% | 75.88% | 75.88% | — | — | 1 | 19d | 30d ago | 12m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.45% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.49% | 22.72% | 22.72% | — | — | 3 | 1d 21h | 17d ago | 9m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.48% | 68.72% | 68.72% | — | — | 1 | 19d | 30d ago | 49s ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 4m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.49% | 18.10% | 18.10% | — | — | 1 | 19d | 30d ago | 9m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.48% | 54.28% | 54.28% | — | — | 1 | 19d | 30d ago | 1m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.50% | 35.49% | 35.49% | — | — | 1 | 19d | 30d ago | 7m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.49% | 3.84% | 3.84% | — | — | 2 | 9d 6h | 12d ago | 11m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.49% | 63.55% | 63.55% | — | — | 1 | 19d | 30d ago | 12s ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.49% | 23.11% | 23.11% | — | — | 0 | — | — | 12m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 12m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.41% | 99.60% | 99.60% | — | — | 0 | — | — | 4m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.50% | 22.23% | 22.23% | — | — | 1 | 19d | 30d ago | 7m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.50% | 6.70% | 6.70% | — | — | 1 | 19d | 30d ago | 8m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.50% | 22.60% | 22.60% | — | — | 1 | 19d | 30d ago | 4m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 9m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.49% | 62.64% | 62.64% | — | — | 1 | 19d | 30d ago | 34s ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.50% | 30.92% | 30.92% | — | — | 1 | 19d | 30d ago | 5m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.50% | 68.76% | 68.76% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.41% | 3.80% | 3.80% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.50% | 44.20% | 44.20% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.50% | 38.02% | 38.02% | — | — | 1 | 19d | 30d ago | 5m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.50% | 17.16% | 17.16% | — | — | 1 | 19d | 30d ago | 5m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.50% | 10.15% | 10.15% | — | — | 1 | 19d | 30d ago | 7m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.45% | 23.40% | 23.40% | — | — | 51 | 16m | 14d ago | 9m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.48% | 99.53% | 99.53% | — | — | 0 | — | — | 1m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.49% | 16.69% | 16.69% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.49% | 21.71% | 21.71% | — | — | 34 | 2h 2m | 11d ago | 11m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10s ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.50% | 14.75% | 14.75% | — | — | 1 | 19d | 30d ago | 6m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.50% | 25.49% | 25.49% | — | — | 1 | 19d | 30d ago | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.50% | 8.99% | 8.99% | — | — | 1 | 19d | 30d ago | 8m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.50% | 3.93% | 3.93% | — | — | 1 | 19d | 30d ago | 5m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.50% | 4.55% | 4.55% | — | — | 1 | 19d | 30d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.49% | 46.30% | 46.30% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.51% | 76.63% | 76.63% | — | — | 1 | 13d 19h | 25d ago | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.40% | 32.96% | 32.96% | — | — | 0 | — | — | 11m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.50% | 36.28% | 36.28% | — | — | 1 | 19d | 30d ago | 4m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.50% | 98.48% | 98.48% | — | — | 0 | — | — | 8m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.50% | 63.49% | 63.49% | — | — | 1 | 19d | 30d ago | 7m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.50% | 40.17% | 40.17% | — | — | 1 | 19d | 30d ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.49% | 77.23% | 77.23% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.50% | 43.61% | 43.61% | — | — | 1 | 19d | 30d ago | 5m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.49% | 23.13% | 23.13% | — | — | 0 | — | — | 34s ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.49% | 0.01% | 0.01% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.49% | 22.68% | 22.68% | — | — | 0 | — | — | 9m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.50% | 60.97% | 60.97% | — | — | 68 | 4m | 13d ago | 6m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 10m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.49% | 38.37% | 38.37% | — | — | 1 | 19d | 30d ago | 11s ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.50% | 1.35% | 1.35% | — | — | 1 | 19d | 30d ago | 5m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.50% | 17.59% | 17.59% | — | — | 1 | 19d | 30d ago | 8m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.50% | 91.72% | 91.72% | — | — | 25 | 0s | 11d ago | 8m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.51% | 99.77% | 99.77% | — | — | 2 | 2m | 12d ago | 3m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.49% | 99.17% | 99.17% | — | — | 0 | — | — | 34s ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.49% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 11m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.50% | 0.00% | 0.00% | — | — | 1 | 19d | 30d ago | 4m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 19d | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 19d | 30d ago | — |

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
