# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**690 providers** — 281 🟢 operational · 96 🟡 degraded · 311 🔴 down · 2 ⚫ unknown

_Updated 2026-07-17 05:45 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (281)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.93% | 99.79% | 99.98% | 99.98% | — | → 0.97x | 1 | 4m | 14d ago | 18s ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.93% | 99.79% | 93.42% | 93.42% | — | → 0.99x | 2 | 6m | 14d ago | 18s ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.93% | 99.79% | 99.74% | 99.74% | — | → 0.95x | 4 | 0s | 9d ago | 4s ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.93% | 99.78% | 99.80% | 99.80% | — | → 0.96x | 0 | — | — | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.93% | 99.78% | 1.90% | 1.90% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.93% | 99.78% | 71.79% | 71.79% | — | → 0.98x | 0 | — | — | 4m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.93% | 99.78% | 63.68% | 63.68% | — | → 0.98x | 1 | 0s | 27d ago | 4m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.93% | 99.78% | 58.17% | 58.17% | — | → 0.98x | 1 | 22d 1h | 30d ago | 3m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.93% | 99.78% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 3m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.93% | 99.78% | 98.81% | 98.81% | — | → 0.99x | 0 | — | — | 3m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.93% | 99.78% | 98.35% | 98.35% | — | → 1.00x | 1 | 1h 40m | 29d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.92% | 99.78% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 2m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.92% | 99.78% | 99.45% | 99.45% | — | → 0.97x | 2 | 3h 1m | 15d ago | 2m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.92% | 99.78% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.86% | 99.72% | 99.49% | 99.49% | — | → 0.97x | 2 | 4h 55m | 20d ago | 13s ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.86% | 99.71% | 49.74% | 49.74% | — | → 1.00x | 6 | 35m | 18d ago | 4s ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.86% | 99.71% | 99.81% | 99.81% | — | → 0.99x | 0 | — | — | 5m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.85% | 99.71% | 99.02% | 99.02% | — | ↓ 0.95x | 3 | 0s | 18d ago | 5m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.85% | 99.71% | 80.20% | 80.20% | — | → 0.99x | 3 | 0s | 10d ago | 4m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.85% | 99.71% | 97.57% | 97.57% | — | → 0.97x | 7 | 0s | 11d ago | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.85% | 99.71% | 99.37% | 99.37% | — | → 0.96x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.85% | 99.71% | 93.26% | 93.26% | — | → 0.96x | 0 | — | — | 4m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.85% | 99.71% | 63.14% | 63.14% | — | → 1.00x | 1 | 0s | 10d ago | 4m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.85% | 99.71% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 4m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.85% | 99.71% | 90.32% | 90.32% | — | → 1.00x | 0 | — | — | 4m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.85% | 99.71% | 97.00% | 97.00% | — | → 0.98x | 0 | — | — | 3m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.85% | 99.71% | 99.18% | 99.18% | — | → 0.98x | 0 | — | — | 3m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.85% | 99.71% | 99.00% | 99.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.85% | 99.71% | 89.57% | 89.57% | — | → 0.97x | 0 | — | — | 3m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.85% | 99.71% | 99.86% | 99.86% | — | → 0.99x | 0 | — | — | 3m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.85% | 99.71% | 96.69% | 96.69% | — | → 0.97x | 0 | — | — | 3m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.85% | 99.71% | 43.48% | 43.48% | — | → 0.99x | 1 | 22d 1h | 30d ago | 3m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.85% | 99.71% | 92.20% | 92.20% | — | → 0.98x | 6 | 0s | 12d ago | 3m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.85% | 99.70% | 98.69% | 98.69% | — | → 0.99x | 0 | — | — | 3m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.85% | 99.70% | 93.73% | 93.73% | — | → 0.99x | 1 | 1h 22m | 24d ago | 3m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.85% | 99.70% | 98.47% | 98.47% | — | → 0.99x | 0 | — | — | 3m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.85% | 99.70% | 98.43% | 98.43% | — | → 0.95x | 1 | 0s | 29d ago | 3m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.85% | 99.70% | 24.52% | 24.52% | — | → 0.98x | 1 | 22d 1h | 30d ago | 2m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.85% | 99.70% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 2m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.85% | 99.70% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 9d ago | 2m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.85% | 99.70% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 2m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.79% | 99.65% | 98.78% | 98.78% | — | → 1.00x | 20 | 5s | 14d ago | 17s ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.78% | 99.64% | 75.23% | 75.23% | — | → 0.96x | 1 | 22d 1h | 30d ago | 13s ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.78% | 99.64% | 44.95% | 44.95% | — | → 0.97x | 0 | — | — | 5m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.78% | 99.64% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 5m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.78% | 99.64% | 99.98% | 99.98% | — | → 0.98x | 1 | 0s | 25d ago | 4m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.78% | 99.64% | 0.11% | 0.11% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.78% | 99.64% | 99.90% | 99.90% | — | → 1.00x | 1 | 0s | 25d ago | 4m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.78% | 99.64% | 99.95% | 99.95% | — | → 0.99x | 1 | 0s | 29d ago | 4m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.78% | 99.64% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.78% | 99.64% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 4m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.78% | 99.64% | 25.33% | 25.33% | — | → 0.96x | 3 | 0s | 21d ago | 4m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.78% | 99.64% | 30.20% | 30.20% | — | ↓ 0.92x | 1 | 22d 1h | 30d ago | 4m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.78% | 99.63% | 74.11% | 74.11% | — | → 0.99x | 6 | 1h 20m | 9d ago | 4m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.78% | 99.63% | 98.73% | 98.73% | — | → 0.98x | 1 | 0s | 27d ago | 4m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.78% | 99.63% | 94.26% | 94.26% | — | → 0.99x | 0 | — | — | 4m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.78% | 99.63% | 99.97% | 99.97% | — | → 0.97x | 1 | 0s | 27d ago | 4m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.78% | 99.63% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 3m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.78% | 99.63% | 98.90% | 98.90% | — | → 0.95x | 1 | 1h 60m | 26d ago | 3m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.78% | 99.63% | 66.50% | 66.50% | — | → 0.97x | 1 | 22d 1h | 30d ago | 3m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.78% | 99.63% | 26.43% | 26.43% | — | → 1.00x | 1 | 12d 7h | 30d ago | 3m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.78% | 99.63% | 29.98% | 29.98% | — | → 0.98x | 1 | 22d 1h | 30d ago | 3m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.78% | 99.63% | 31.33% | 31.33% | — | → 0.97x | 1 | 22d 1h | 30d ago | 3m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.78% | 99.63% | 6.05% | 6.05% | — | → 1.00x | 1 | 22d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.78% | 99.63% | 99.97% | 99.97% | — | → 0.96x | 0 | — | — | 3m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.78% | 99.63% | 98.04% | 98.04% | — | → 0.97x | 0 | — | — | 3m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.78% | 99.63% | 99.08% | 99.08% | — | → 0.99x | 0 | — | — | 3m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.78% | 99.63% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.78% | 99.63% | 0.00% | 0.00% | — | ↓ 0.95x | 1 | 22d 1h | 30d ago | 3m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.77% | 99.63% | 98.56% | 98.56% | — | → 0.98x | 4 | 1h 59m | 19d ago | 2m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 2m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.77% | 99.63% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 2m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.77% | 99.63% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 2m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.77% | 99.63% | 99.85% | 99.85% | — | → 1.00x | 1 | 3m | 10d ago | 2m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.77% | 99.63% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 2m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 2m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.77% | 99.63% | 99.61% | 99.61% | — | → 0.95x | 1 | 0s | 25d ago | 2m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 2m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.77% | 99.63% | 99.67% | 99.67% | — | → 1.00x | 1 | 0s | 11d ago | 2m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.77% | 99.63% | 99.92% | 99.92% | — | → 0.96x | 0 | — | — | 2m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 2m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.77% | 99.63% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.77% | 99.63% | 99.66% | 99.66% | — | → 0.99x | 2 | 0s | 29d ago | 2m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.77% | 99.63% | 60.72% | 60.72% | — | → 0.95x | 0 | — | — | 2m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.71% | 99.57% | 93.57% | 93.57% | — | → 1.00x | 1 | 4m | 14d ago | 18s ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.71% | 99.57% | 99.98% | 99.98% | — | → 0.97x | 1 | 4m | 14d ago | 18s ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.71% | 99.57% | 99.76% | 99.76% | — | → 0.96x | 0 | — | — | 10s ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.71% | 99.57% | 99.65% | 99.65% | — | → 0.96x | 0 | — | — | 4s ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.71% | 99.57% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 4s ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.71% | 99.57% | 70.89% | 70.89% | — | → 1.00x | 1 | 22d 1h | 30d ago | 3s ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.71% | 99.57% | 76.22% | 76.22% | — | → 1.00x | 1 | 22d 1h | 30d ago | 5m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.71% | 99.57% | 99.94% | 99.94% | — | → 0.97x | 0 | — | — | 5m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.71% | 99.57% | 98.00% | 98.00% | — | → 0.99x | 0 | — | — | 5m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.71% | 99.57% | 22.33% | 22.33% | — | → 0.99x | 1 | 22d 1h | 30d ago | 5m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.71% | 99.57% | 99.58% | 99.58% | — | → 1.00x | 1 | 2h | 8d ago | 5m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.71% | 99.57% | 99.65% | 99.65% | — | → 0.99x | 0 | — | — | 5m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.71% | 99.57% | 98.94% | 98.94% | — | → 1.00x | 1 | 0s | 15d ago | 5m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.71% | 99.57% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 10d ago | 5m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.71% | 99.57% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 4m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.71% | 99.56% | 99.77% | 99.77% | — | → 0.99x | 0 | — | — | 4m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.71% | 99.56% | 5.16% | 5.16% | — | → 0.98x | 1 | 22d 1h | 30d ago | 4m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.71% | 99.56% | 99.09% | 99.09% | — | → 0.96x | 0 | — | — | 4m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.71% | 99.56% | 24.91% | 24.91% | — | → 0.98x | 2 | 0s | 21d ago | 4m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.71% | 99.56% | 65.57% | 65.57% | — | → 0.98x | 0 | — | — | 4m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.71% | 99.56% | 99.61% | 99.61% | — | → 0.96x | 0 | — | — | 4m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.70% | 99.56% | 84.58% | 84.58% | — | → 1.00x | 0 | — | — | 4m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.70% | 99.56% | 83.46% | 83.46% | — | → 0.99x | 2 | 0s | 10d ago | 4m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.70% | 99.56% | 99.31% | 99.31% | — | → 0.97x | 0 | — | — | 4m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.70% | 99.56% | 98.38% | 98.38% | — | → 0.99x | 2 | 3h 26m | 21d ago | 3m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.70% | 99.56% | 98.47% | 98.47% | — | → 0.96x | 2 | 0s | 16d ago | 3m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.70% | 99.56% | 55.08% | 55.08% | — | → 0.98x | 27 | 0s | 9d ago | 3m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.70% | 99.56% | 96.94% | 96.94% | — | → 1.00x | 1 | 0s | 10d ago | 3m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.70% | 99.56% | 98.78% | 98.78% | — | → 0.96x | 1 | 0s | 8d ago | 3m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.70% | 99.56% | 99.87% | 99.87% | — | → 0.96x | 1 | 0s | 21d ago | 3m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.70% | 99.56% | 99.34% | 99.34% | — | → 0.99x | 10 | 3m | 9d ago | 3m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.70% | 99.55% | 93.61% | 93.61% | — | → 0.99x | 18 | 13m | 10d ago | 3m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.70% | 99.55% | 99.51% | 99.51% | — | → 0.97x | 0 | — | — | 3m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.70% | 99.55% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 3m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.70% | 99.55% | 98.88% | 98.88% | — | → 0.96x | 1 | 0s | 9d ago | 3m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.70% | 99.55% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.70% | 99.55% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.70% | 99.55% | 99.97% | 99.97% | — | → 0.96x | 0 | — | — | 2m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.70% | 99.55% | 16.67% | 16.67% | — | → 0.99x | 1 | 22d 1h | 30d ago | 2m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.70% | 99.55% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 2m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.70% | 99.55% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 2m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.70% | 99.70% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.70% | 99.55% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.70% | 99.55% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 13d ago | 2m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.70% | 99.55% | 99.77% | 99.77% | — | → 0.95x | 3 | 0s | 10d ago | 2m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.64% | 99.50% | 36.33% | 36.33% | — | → 1.00x | 3 | 2m | 14d ago | 17s ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.64% | 99.50% | 17.47% | 17.47% | — | → 0.98x | 1 | 22d 1h | 30d ago | 4s ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.64% | 99.50% | 99.91% | 99.91% | — | → 0.99x | 0 | — | — | 5m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.64% | 99.50% | 99.49% | 99.49% | — | → 0.99x | 0 | — | — | 5m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.64% | 99.50% | 99.85% | 99.85% | — | → 0.99x | 2 | 0s | 9d ago | 5m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.64% | 99.50% | 98.92% | 98.92% | — | → 1.00x | 0 | — | — | 5m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.64% | 99.49% | 24.53% | 24.53% | — | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.63% | 99.49% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 4m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.63% | 99.49% | 24.63% | 24.63% | — | → 0.99x | 1 | 0s | 28d ago | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.63% | 99.49% | 99.67% | 99.67% | — | → 0.99x | 5 | 5h 48m | 9d ago | 4m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.63% | 99.49% | 54.70% | 54.70% | — | → 0.99x | 1 | 0s | 27d ago | 4m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.63% | 99.49% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 4m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.63% | 99.49% | 81.07% | 81.07% | — | → 0.99x | 0 | — | — | 4m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.63% | 99.49% | 77.97% | 77.97% | — | → 0.97x | 1 | 0s | 9d ago | 4m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.63% | 99.49% | 91.09% | 91.09% | — | ↓ 0.94x | 4 | 0s | 19d ago | 4m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.63% | 99.48% | 56.85% | 56.85% | — | → 1.00x | 8 | 2h 1m | 21d ago | 3m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.63% | 99.48% | 98.73% | 98.73% | — | → 0.96x | 0 | — | — | 3m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.63% | 99.48% | 99.30% | 99.30% | — | → 0.98x | 0 | — | — | 3m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.63% | 99.48% | 98.16% | 98.16% | — | → 1.00x | 0 | — | — | 3m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.63% | 99.48% | 99.83% | 99.83% | — | → 0.98x | 0 | — | — | 3m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.63% | 99.48% | 64.61% | 64.61% | — | → 0.99x | 3 | 2d 19h | 16d ago | 3m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.63% | 99.48% | 98.83% | 98.83% | — | → 0.97x | 0 | — | — | 3m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.63% | 99.48% | 43.99% | 43.99% | — | → 0.98x | 1 | 22d 1h | 30d ago | 3m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.63% | 99.48% | 28.78% | 28.78% | — | → 0.96x | 1 | 22d 1h | 30d ago | 3m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.63% | 99.48% | 98.37% | 98.37% | — | → 0.95x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.63% | 99.48% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 3m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.63% | 99.48% | 96.80% | 96.80% | — | → 0.97x | 1 | 0s | 26d ago | 3m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.63% | 99.48% | 99.93% | 99.93% | — | → 0.95x | 1 | 0s | 10d ago | 3m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.63% | 99.48% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 3m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.63% | 99.48% | 97.35% | 97.35% | — | → 0.97x | 2 | 2h 51m | 14d ago | 3m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.62% | 99.48% | 99.33% | 99.33% | — | ↓ 0.94x | 8 | 3m | 17d ago | 2m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.62% | 99.48% | 0.00% | 0.00% | — | → 0.95x | 1 | 22d 1h | 30d ago | 2m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.62% | 99.48% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 2m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.62% | 99.48% | 99.98% | 99.98% | — | → 1.00x | 0 | — | — | 2m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.62% | 99.48% | 96.87% | 96.87% | — | → 1.00x | 1 | 2h 1m | 29d ago | 2m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.62% | 99.62% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.62% | 99.48% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 17d ago | 2m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.57% | 99.43% | 68.59% | 68.59% | — | → 1.00x | 1 | 22d 1h | 30d ago | 18s ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.57% | 99.43% | 98.93% | 98.93% | — | → 0.99x | 1 | 0s | 11d ago | 13s ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.57% | 99.43% | 99.28% | 99.28% | — | → 0.99x | 3 | 0s | 10d ago | 10s ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.57% | 99.43% | 99.60% | 99.60% | — | → 1.00x | 1 | 2s | 10d ago | 9s ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.57% | 99.43% | 99.73% | 99.73% | — | → 1.00x | 3 | 0s | 24d ago | 5m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.57% | 99.43% | 89.73% | 89.73% | — | → 0.99x | 0 | — | — | 5m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.57% | 99.43% | 99.90% | 99.90% | — | ↓ 0.91x | 0 | — | — | 5m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.57% | 99.42% | 76.89% | 76.89% | — | → 0.98x | 1 | 22d 1h | 30d ago | 5m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.56% | 99.42% | 97.28% | 97.28% | — | → 0.99x | 0 | — | — | 4m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.56% | 99.42% | 22.30% | 22.30% | — | → 0.99x | 15 | 0s | 10d ago | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.56% | 99.42% | 24.54% | 24.54% | — | → 0.99x | 0 | — | — | 4m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.56% | 99.42% | 77.28% | 77.28% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.56% | 99.42% | 50.15% | 50.15% | — | → 0.97x | 1 | 0s | 27d ago | 4m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.56% | 99.42% | 62.65% | 62.65% | — | → 0.99x | 0 | — | — | 4m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.56% | 99.42% | 68.50% | 68.50% | — | → 0.99x | 1 | 0s | 27d ago | 4m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.56% | 99.42% | 64.92% | 64.92% | — | → 0.99x | 1 | 0s | 27d ago | 4m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.56% | 99.41% | 82.26% | 82.26% | — | → 1.00x | 0 | — | — | 4m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.56% | 99.41% | 97.21% | 97.21% | — | → 1.00x | 0 | — | — | 3m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.56% | 99.41% | 96.18% | 96.18% | — | → 1.00x | 3 | 24m | 17d ago | 3m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.55% | 99.41% | 97.90% | 97.90% | — | → 0.99x | 0 | — | — | 3m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.55% | 99.41% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 3m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.55% | 99.41% | 99.10% | 99.10% | — | → 0.98x | 1 | 0s | 25d ago | 3m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.55% | 99.41% | 98.66% | 98.66% | — | → 1.00x | 1 | 0s | 25d ago | 3m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.55% | 99.41% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 3m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.55% | 99.41% | 98.56% | 98.56% | — | → 0.98x | 0 | — | — | 3m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.55% | 99.41% | 99.76% | 99.76% | — | → 1.00x | 2 | 0s | 24d ago | 3m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.55% | 99.41% | 93.06% | 93.06% | — | → 0.97x | 7 | 9m | 21d ago | 3m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.55% | 99.41% | 97.87% | 97.87% | — | → 0.95x | 0 | — | — | 3m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.55% | 99.40% | 99.10% | 99.10% | — | → 1.00x | 1 | 0s | 29d ago | 2m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.55% | 99.40% | 99.94% | 99.94% | — | → 0.95x | 0 | — | — | 2m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.55% | 99.40% | 99.86% | 99.86% | — | → 0.99x | 1 | 0s | 25d ago | 2m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.55% | 99.40% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 2m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.55% | 99.40% | 91.90% | 91.90% | — | → 1.00x | 17 | 2h 20m | 21d ago | 2m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.55% | 99.55% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.50% | 99.36% | 98.29% | 98.29% | — | → 0.99x | 0 | — | — | 13s ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.50% | 99.36% | 99.75% | 99.75% | — | → 0.98x | 0 | — | — | 10s ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.50% | 99.36% | 97.98% | 97.98% | — | → 0.98x | 0 | — | — | 5m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.50% | 99.36% | 99.74% | 99.74% | — | → 0.99x | 1 | 4s | 11d ago | 5m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.49% | 99.36% | 99.96% | 99.96% | — | → 0.99x | 0 | — | — | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.49% | 99.35% | 97.57% | 97.57% | — | → 1.00x | 0 | — | — | 5m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.49% | 99.35% | 76.88% | 76.88% | — | → 0.96x | 1 | 22d 1h | 30d ago | 5m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.49% | 99.35% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 5m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.49% | 99.35% | 99.77% | 99.77% | — | → 0.98x | 0 | — | — | 5m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.49% | 99.35% | 99.48% | 99.48% | — | → 0.99x | 0 | — | — | 4m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.49% | 99.35% | 88.17% | 88.17% | — | → 0.99x | 1 | 22d 1h | 30d ago | 4m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.49% | 99.34% | 31.58% | 31.58% | — | → 0.98x | 1 | 22d 1h | 30d ago | 4m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.48% | 99.34% | 99.35% | 99.35% | — | → 0.99x | 0 | — | — | 4m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.48% | 99.34% | 91.87% | 91.87% | — | → 1.00x | 1 | 30m | 19d ago | 3m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.48% | 99.34% | 99.64% | 99.64% | — | → 0.99x | 1 | 4h 60m | 28d ago | 3m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.48% | 99.34% | 98.81% | 98.81% | — | → 0.97x | 4 | 38m | 23d ago | 3m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.48% | 99.34% | 95.85% | 95.85% | — | → 0.98x | 0 | — | — | 3m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.48% | 99.34% | 86.85% | 86.85% | — | → 1.00x | 0 | — | — | 3m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.48% | 99.33% | 99.86% | 99.86% | — | → 0.98x | 0 | — | — | 3m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.48% | 99.33% | 99.71% | 99.71% | — | → 0.95x | 1 | 0s | 10d ago | 3m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.48% | 99.33% | 89.89% | 89.89% | — | → 1.00x | 1 | 0s | 9d ago | 3m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.48% | 99.33% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 3m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.48% | 99.33% | 99.85% | 99.85% | — | → 1.00x | 1 | 6h 1m | 9d ago | 3m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.47% | 99.33% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 2m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.47% | 99.33% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.47% | 99.33% | 100.00% | 100.00% | — | → 0.97x | 0 | — | — | 2m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.47% | 99.33% | 99.85% | 99.85% | — | ↓ 0.94x | 3 | 0s | 10d ago | 2m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.42% | 99.28% | 99.58% | 99.58% | — | → 0.99x | 19 | 2m | 11d ago | 5m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.42% | 99.28% | 99.90% | 99.90% | — | → 0.99x | 0 | — | — | 5m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.42% | 99.28% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 8d ago | 5m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.42% | 99.28% | 99.87% | 99.87% | — | → 0.99x | 1 | 0s | 10d ago | 5m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.41% | 99.27% | 96.73% | 96.73% | — | → 0.98x | 1 | 0s | 28d ago | 4m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.41% | 99.27% | 96.32% | 96.32% | — | → 1.00x | 1 | 0s | 27d ago | 4m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.41% | 99.26% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 3m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.40% | 99.26% | 98.11% | 98.11% | — | → 0.99x | 0 | — | — | 3m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.40% | 99.26% | 97.00% | 97.00% | — | → 0.97x | 4 | 1h 51m | 11d ago | 3m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.40% | 99.26% | 14.21% | 14.21% | — | → 0.98x | 1 | 22d 1h | 30d ago | 3m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.40% | 99.25% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.35% | 99.21% | 99.56% | 99.56% | — | → 1.00x | 0 | — | — | 3s ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.35% | 99.21% | 96.43% | 96.43% | — | → 1.00x | 3 | 1d 4h | 8d ago | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.35% | 99.21% | 56.98% | 56.98% | — | → 1.00x | 5 | 0s | 23d ago | 4m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.34% | 99.21% | 22.94% | 22.94% | — | → 0.97x | 1 | 0s | 24d ago | 4m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.34% | 99.20% | 66.42% | 66.42% | — | → 1.00x | 1 | 2h 38m | 27d ago | 4m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.34% | 99.19% | 98.00% | 98.00% | — | → 0.98x | 0 | — | — | 4m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.34% | 99.19% | 89.40% | 89.40% | — | → 0.99x | 0 | — | — | 4m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.33% | 99.19% | 90.95% | 90.95% | — | → 0.99x | 2 | 0s | 15d ago | 4m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.33% | 99.19% | 97.80% | 97.80% | — | → 1.00x | 0 | — | — | 3m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.33% | 99.18% | 97.07% | 97.07% | — | → 0.99x | 2 | 1d 2h | 21d ago | 3m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.33% | 99.18% | 96.10% | 96.10% | — | → 1.00x | 3 | 47m | 30d ago | 3m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 99.32% | 99.18% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 2m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.28% | 99.15% | 95.68% | 95.68% | — | → 0.96x | 1 | 8d 14h | 25d ago | 13s ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.28% | 99.14% | 99.62% | 99.62% | — | → 0.98x | 1 | 0s | 22d ago | 4s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.28% | 99.14% | 99.74% | 99.74% | — | → 0.99x | 2 | 0s | 24d ago | 5m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.28% | 99.14% | 99.84% | 99.84% | — | → 0.99x | 0 | — | — | 5m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.27% | 99.14% | 99.87% | 99.87% | — | → 0.98x | 2 | 0s | 16d ago | 4m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.27% | 99.13% | 99.79% | 99.79% | — | → 1.00x | 4 | 0s | 9d ago | 4m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.27% | 99.13% | 76.97% | 76.97% | — | → 0.96x | 1 | 22d 1h | 30d ago | 4m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.26% | 99.12% | 69.43% | 69.43% | — | → 1.00x | 2 | 0s | 23d ago | 4m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.26% | 99.11% | 99.74% | 99.74% | — | → 1.00x | 0 | — | — | 3m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.25% | 99.11% | 84.75% | 84.75% | — | → 0.99x | 1 | 0s | 14d ago | 3m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.25% | 99.11% | 99.67% | 99.67% | — | → 0.97x | 0 | — | — | 3m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.25% | 99.11% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.25% | 99.11% | 99.89% | 99.89% | — | → 0.99x | 0 | — | — | 3m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.21% | 99.07% | 99.61% | 99.61% | — | → 1.00x | 0 | — | — | 10s ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.19% | 99.06% | 24.43% | 24.43% | — | → 1.00x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.19% | 99.05% | 26.84% | 26.84% | — | → 1.00x | 0 | — | — | 4m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.18% | 99.04% | 97.74% | 97.74% | — | → 1.00x | 5 | 3h 22m | 9d ago | 3m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.18% | 99.04% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 3m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.17% | 99.03% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 2m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.17% | 99.03% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 2m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.17% | 99.03% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 2m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.17% | 99.03% | 99.09% | 99.09% | — | → 0.99x | 1 | 20m | 20d ago | 2m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.17% | 99.03% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 2m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.13% | 98.99% | 99.62% | 99.62% | — | → 0.97x | 2 | 1h 60m | 10d ago | 5m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.10% | 98.96% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 2m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.06% | 98.92% | 38.65% | 38.65% | — | → 0.98x | 1 | 22d 1h | 30d ago | 4m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.04% | 98.90% | 69.87% | 69.87% | — | → 1.00x | 7 | 0s | 11d ago | 4m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (96)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 98.89% | 98.75% | 97.03% | 97.03% | — | → 0.97x | 2 | 0s | 28d ago | 3m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 98.88% | 98.74% | 97.10% | 97.10% | — | → 0.97x | 2 | 10m | 16d ago | 3m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 98.87% | 98.74% | 99.95% | 99.95% | — | → 0.99x | 1 | 0s | 28d ago | 2m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.87% | 98.73% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 2m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.84% | 98.70% | 99.76% | 99.76% | — | → 1.00x | 1 | 0s | 25d ago | 4m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 98.82% | 98.68% | 81.53% | 81.53% | — | → 0.97x | 0 | — | — | 4m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 98.81% | 98.67% | 98.85% | 98.85% | — | → 0.97x | 0 | — | — | 3m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.81% | 98.67% | 98.12% | 98.12% | — | → 1.00x | 2 | 10m | 23d ago | 3m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.71% | 98.58% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 10s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.64% | 98.51% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 98.60% | 98.46% | 98.88% | 98.88% | — | → 0.99x | 0 | — | — | 4m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 98.59% | 98.46% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 3m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 98.59% | 98.45% | 76.90% | 76.90% | — | → 0.97x | 1 | 0s | 25d ago | 3m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 98.57% | 98.43% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 98.53% | 98.39% | 2.34% | 2.34% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 98.52% | 98.38% | 28.39% | 28.39% | — | ↓ 0.92x | 1 | 22d 1h | 30d ago | 3m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.42% | 98.28% | 99.34% | 99.34% | — | → 1.00x | 2 | 0s | 10d ago | 2m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.41% | 98.28% | 51.42% | 51.42% | — | → 1.00x | 2 | 0s | 13d ago | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 98.19% | 98.06% | 88.31% | 88.31% | — | → 0.98x | 1 | 1h | 30d ago | 2m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 98.19% | 98.06% | 99.64% | 99.64% | — | → 1.00x | 5 | 57m | 12d ago | 5m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 98.19% | 98.06% | 89.02% | 89.02% | — | → 1.00x | 0 | — | — | 5m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.06% | 97.93% | 83.10% | 83.10% | — | → 1.00x | 12 | 4h 26m | 16d ago | 3m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.02% | 97.89% | 98.12% | 98.12% | — | → 0.96x | 0 | — | — | 4m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.83% | 97.70% | 98.75% | 98.75% | — | → 0.99x | 7 | 20s | 13d ago | 3m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 97.79% | 97.67% | 57.00% | 57.00% | — | → 0.97x | 0 | — | — | 4m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 97.62% | 97.49% | 98.96% | 98.96% | — | → 1.00x | 1 | 29m | 25d ago | 3m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 97.59% | 97.46% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 2m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.54% | 97.41% | 32.93% | 32.93% | — | → 1.00x | 0 | — | — | 3m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 97.34% | 97.22% | 83.18% | 83.18% | — | → 0.97x | 4 | 51s | 14d ago | 4m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.32% | 97.19% | 66.05% | 66.05% | — | → 1.00x | 7 | 19h 32m | 13d ago | 3m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 97.22% | 97.10% | 98.59% | 98.59% | — | → 0.99x | 13 | 12m | 10d ago | 2m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.15% | 97.02% | 97.85% | 97.85% | — | → 1.00x | 2 | 31m | 26d ago | 2m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 96.87% | 96.75% | 90.79% | 90.79% | — | → 1.00x | 1 | 0s | 10d ago | 3m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 96.47% | 96.35% | 38.36% | 38.36% | — | → 1.00x | 3 | 10m | 29d ago | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 96.24% | 96.13% | 99.27% | 99.27% | — | → 0.99x | 0 | — | — | 4m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 96.11% | 95.99% | 96.89% | 96.89% | — | → 0.98x | 5 | 2h 21m | 8d ago | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 95.86% | 95.74% | 39.41% | 39.41% | — | → 0.99x | 71 | 7m | 10d ago | 2m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 95.85% | 95.73% | 98.93% | 98.93% | — | → 0.99x | 5 | 10m | 14d ago | 4m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 95.78% | 95.67% | 17.31% | 17.31% | — | → 1.00x | 1 | 0s | 24d ago | 4m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 95.46% | 95.35% | 98.02% | 98.02% | — | → 0.99x | 0 | — | — | 3m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.18% | 92.09% | 74.00% | 74.00% | — | → 0.99x | 11 | 1h 25m | 12d ago | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 91.15% | 91.08% | 47.85% | 47.85% | — | → 0.99x | 1 | 22d 1h | 30d ago | 5m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 90.84% | 90.77% | 99.92% | 99.92% | — | → 0.97x | 0 | — | — | 5m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 90.56% | 90.50% | 78.01% | 78.01% | — | → 1.00x | 77 | 5s | 10d ago | 16s ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 90.53% | 90.46% | 99.82% | 99.82% | — | → 0.98x | 1 | 0s | 19d ago | 3m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 89.76% | 89.70% | 75.72% | 75.72% | — | → 1.00x | 1 | 22d 1h | 30d ago | 5m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 89.47% | 89.41% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 89.26% | 89.20% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 87.29% | 87.25% | 0.69% | 0.69% | — | → 0.97x | 1 | 22d 1h | 30d ago | 3m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 85.23% | 85.20% | 99.06% | 99.06% | — | → 1.00x | 5 | 1h 16m | 10d ago | 2m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 84.63% | 84.60% | 68.13% | 68.13% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 84.02% | 84.01% | 82.00% | 82.00% | — | → 1.00x | 123 | 11m | 10d ago | 2m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 83.87% | 83.85% | 95.25% | 95.25% | — | → 1.00x | 16 | 1h 50m | 10d ago | 3m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 83.85% | 83.83% | 98.89% | 98.89% | — | → 1.00x | 1 | 0s | 18d ago | 12s ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 83.67% | 83.66% | 99.61% | 99.61% | — | → 1.00x | 5 | 0s | 8d ago | 2m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 83.53% | 83.51% | 86.23% | 86.23% | — | → 1.00x | 6 | 0s | 14d ago | 3s ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 83.09% | 83.08% | 63.15% | 63.15% | — | → 1.01x | 155 | 13m | 10d ago | 4m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 82.82% | 82.81% | 97.23% | 97.23% | — | → 1.01x | 24 | 4m | 11d ago | 2m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 82.57% | 82.56% | 67.23% | 67.23% | — | → 1.00x | 1 | 22d 1h | 30d ago | 13s ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 82.53% | 82.52% | 98.45% | 98.45% | — | → 1.00x | 32 | 56s | 10d ago | 4m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 82.05% | 82.05% | 93.77% | 93.77% | — | → 1.01x | 0 | — | — | 5m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 81.99% | 81.99% | 92.56% | 92.56% | — | → 1.00x | 20 | 30m | 9d ago | 3m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 81.87% | 81.87% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 3s ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 81.00% | 81.00% | 96.32% | 96.32% | — | → 1.00x | 166 | 16m | 11d ago | 5m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 80.93% | 80.94% | 69.98% | 69.98% | — | → 1.00x | 2 | 20m | 24d ago | 4m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 80.80% | 80.81% | 96.14% | 96.14% | — | → 1.00x | 4 | 10h 1m | 10d ago | 2m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 80.27% | 80.28% | 68.41% | 68.41% | — | → 1.00x | 1 | 22d 1h | 30d ago | 17s ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 79.34% | 79.36% | 75.11% | 75.11% | — | → 1.00x | 1 | 22d 1h | 30d ago | 18s ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.84% | 78.87% | 98.92% | 98.92% | — | → 1.00x | 1 | 0s | 14d ago | 17s ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 78.49% | 78.51% | 87.06% | 87.06% | — | → 1.00x | 19 | 2m | 20d ago | 3m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 78.45% | 78.47% | 54.78% | 54.78% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 78.16% | 78.19% | 98.53% | 98.53% | — | → 1.00x | 10 | 7m | 9d ago | 2m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 78.05% | 78.08% | 88.70% | 88.70% | — | → 1.00x | 1 | 6h | 8d ago | 3m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 77.89% | 77.92% | 10.72% | 10.72% | — | → 1.00x | 1 | 22d 1h | 30d ago | 3m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 77.74% | 77.78% | 48.46% | 48.46% | — | → 1.00x | 1 | 22d 1h | 30d ago | 3m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 77.55% | 77.58% | 99.65% | 99.65% | — | → 1.00x | 0 | — | — | 4m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 77.50% | 77.53% | 86.83% | 86.83% | — | → 1.00x | 8 | 0s | 15d ago | 4m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 76.84% | 76.88% | 66.07% | 66.07% | — | → 1.00x | 1 | 22d 1h | 30d ago | 18s ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 76.63% | 76.67% | 54.05% | 54.05% | — | → 1.00x | 1 | 22d 1h | 30d ago | 18s ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 76.43% | 76.47% | 6.48% | 6.48% | — | → 1.00x | 1 | 22d 1h | 30d ago | 2m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 75.43% | 75.49% | 99.85% | 99.85% | — | → 0.98x | 2 | 0s | 29d ago | 2m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.71% | 74.77% | 86.29% | 86.29% | — | → 1.00x | 18 | 3m | 10d ago | 5m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 74.47% | 74.53% | 85.28% | 85.28% | — | → 1.00x | 0 | — | — | 4m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 73.78% | 73.84% | 99.88% | 99.88% | — | → 0.98x | 2 | 0s | 16d ago | 2m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 73.68% | 73.74% | 96.79% | 96.79% | — | → 1.00x | 3 | 10m | 21d ago | 4m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 72.17% | 72.24% | 94.11% | 94.11% | — | → 1.00x | 8 | 11h 12m | 11d ago | 11s ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 72.05% | 72.13% | 91.98% | 91.98% | — | → 1.01x | 18 | 17s | 10d ago | 14s ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 70.36% | 70.45% | 64.20% | 64.20% | — | → 1.00x | 6 | 0s | 12d ago | 3s ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 68.93% | 69.03% | 69.01% | 69.01% | — | → 1.00x | 9 | 10m | 21d ago | 4m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 68.26% | 68.37% | 50.52% | 50.52% | — | → 1.00x | 140 | 2h 45m | 9d ago | 16s ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 66.74% | 66.87% | 68.70% | 68.70% | — | → 1.00x | 1 | 22d 1h | 30d ago | 2m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 62.05% | 62.21% | 99.03% | 99.03% | — | → 1.00x | 0 | — | — | 4m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 59.33% | 59.50% | 52.45% | 52.45% | — | → 1.01x | 1 | 22d 1h | 30d ago | 15s ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 44.56% | 44.85% | 76.64% | 76.64% | — | → 0.97x | 1 | 22d 1h | 30d ago | 4m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 10.33% | 10.89% | 0.00% | 0.00% | — | → 1.00x | 1 | 22d 1h | 30d ago | 12s ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 6.60% | 7.19% | 40.01% | 40.01% | — | ↓ 0.92x | 1 | 13d 22h | 30d ago | 5m ago |

</details>

<details open>
<summary><strong>🔴 Down (311)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.63% | 99.49% | 99.88% | 99.88% | — | → 1.00x | 0 | — | — | 4m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.40% | 99.26% | 98.95% | 98.95% | — | → 0.98x | 0 | — | — | 3m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.27% | 99.13% | 97.94% | 97.94% | — | → 1.00x | 2 | 30m | 13d ago | 4m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 99.13% | 98.99% | 98.78% | 98.78% | — | → 0.99x | 1 | 0s | 10d ago | 5m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 88.28% | 88.23% | 77.59% | 77.59% | — | → 1.00x | 0 | — | — | 3m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 84.50% | 84.48% | 87.87% | 87.87% | — | → 0.99x | 3 | 10m | 21d ago | 2m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 84.43% | 84.41% | 0.11% | 0.11% | — | ↓ 0.94x | 1 | 22d 1h | 30d ago | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 83.59% | 83.57% | 99.93% | 99.93% | — | → 1.00x | 0 | — | — | 5m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 82.66% | 82.65% | 99.94% | 99.94% | — | → 0.99x | 1 | 0s | 26d ago | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 76.34% | 76.38% | 44.62% | 44.62% | — | → 1.00x | 1 | 21d 10h | 30d ago | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 75.17% | 75.22% | 93.16% | 93.16% | — | → 1.00x | 3 | 17m | 13d ago | 3m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 74.02% | 74.09% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 2m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 73.62% | 73.69% | 91.43% | 91.43% | — | → 1.01x | 0 | — | — | 2m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 73.55% | 73.62% | 98.87% | 98.87% | — | → 1.00x | 1 | 17h 60m | 28d ago | 5m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.09% | 73.16% | 85.02% | 85.02% | — | → 1.00x | 21 | 3m | 11d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 72.05% | 72.13% | 83.85% | 83.85% | — | → 1.00x | 27 | 5m | 14d ago | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 70.80% | 70.89% | 98.16% | 98.16% | — | → 1.00x | 4 | 0s | 16d ago | 3m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 67.60% | 67.71% | 93.54% | 93.54% | — | → 1.00x | 21 | 3m | 11d ago | 2m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 66.69% | 66.81% | 75.15% | 75.15% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 64.81% | 64.95% | 98.37% | 98.37% | — | → 0.97x | 3 | 3m | 12d ago | 2m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 63.08% | 63.24% | 98.24% | 98.24% | — | → 0.98x | 0 | — | — | 3m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 62.99% | 63.15% | 97.48% | 97.48% | — | → 0.96x | 1 | 0s | 9d ago | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 43.99% | 44.30% | 78.42% | 78.42% | — | → 1.01x | 1 | 19d 17h | 28d ago | 2m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 43.99% | 44.29% | 44.49% | 44.49% | — | → 1.00x | 1 | 22d 1h | 30d ago | 4m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 34.82% | 35.13% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 8.11% | 8.71% | 92.86% | 92.86% | — | → 0.96x | 7 | 0s | 8d ago | 3m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 3.66% | 4.30% | 7.76% | 7.76% | — | → 1.03x | 1 | 22d 1h | 30d ago | 3m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 3.10% | 3.73% | 44.99% | 44.99% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 2.82% | 3.46% | 97.75% | 97.75% | — | ↑ 1.07x | 3 | 0s | 9d ago | 3m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 1.04% | 1.70% | 25.44% | 25.44% | — | ↓ 0.72x | 4 | 3d 20h | 10d ago | 3m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.88% | 1.52% | 0.10% | 0.10% | — | → 0.97x | 1 | 22d 1h | 30d ago | 4m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.29% | 0.95% | 34.65% | 34.65% | — | ↑ 1.13x | 1 | 0s | 27d ago | 4m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.22% | 0.89% | 64.69% | 64.69% | — | → 0.96x | 1 | 22d 1h | 30d ago | 3m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.15% | 0.82% | 99.82% | 99.82% | — | ↓ 0.42x | 2 | 2m | 12d ago | 2m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.15% | 0.82% | 90.67% | 90.67% | — | ↓ 0.40x | 1 | 3d 17h | 12d ago | 2m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.15% | 0.82% | 32.34% | 32.34% | — | ↓ 0.60x | 1 | 22d 1h | 30d ago | 2m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 2m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.15% | 0.82% | 100.00% | 100.00% | — | ↑ 1.46x | 0 | — | — | 2m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.15% | 0.82% | 46.80% | 46.80% | — | ↓ 0.63x | 1 | 22d 1h | 30d ago | 2m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.15% | 0.82% | 76.63% | 76.63% | — | ↓ 0.65x | 1 | 13d 19h | 22d ago | 2m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.15% | 0.82% | 72.40% | 72.40% | — | ↓ 0.62x | 1 | 22d 1h | 30d ago | 2m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.15% | 0.82% | 99.89% | 99.89% | — | ↓ 0.36x | 1 | 3m | 11d ago | 2m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.15% | 0.82% | 99.95% | 99.95% | — | ↓ 0.48x | 0 | — | — | 2m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.15% | 0.82% | 20.55% | 20.55% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.15% | 0.82% | 99.77% | 99.77% | — | ↓ 0.38x | 2 | 2m | 9d ago | 2m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.15% | 0.82% | 73.96% | 73.96% | — | ↓ 0.44x | 1 | 22d 1h | 30d ago | 2m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.15% | 0.82% | 99.65% | 99.65% | — | ↓ 0.09x | 3 | 20m | 10d ago | 2m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.15% | 0.82% | 39.40% | 39.40% | — | ↓ 0.63x | 1 | 18d 2h | 26d ago | 2m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.15% | 0.82% | 99.89% | 99.89% | — | ↓ 0.90x | 0 | — | — | 2m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.15% | 0.82% | 99.92% | 99.92% | — | ↓ 0.60x | 1 | 0s | 22d ago | 2m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.56x | 1 | 22d 1h | 30d ago | 2m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.15% | 0.82% | 99.81% | 99.81% | — | ↓ 0.54x | 2 | 36m | 21d ago | 2m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 2m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.15% | 0.82% | 99.82% | 99.82% | — | ↓ 0.46x | 1 | 7h | 9d ago | 2m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.15% | 0.82% | 75.74% | 75.74% | — | ↓ 0.33x | 1 | 21d 15h | 30d ago | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.15% | 0.82% | 91.04% | 91.04% | — | ↓ 0.53x | 2 | 1d 23h | 12d ago | 2m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.15% | 0.82% | 98.92% | 98.92% | — | ↓ 0.37x | 7 | 27m | 20d ago | 2m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.15% | 0.82% | 16.77% | 16.77% | — | ↓ 0.34x | 1 | 22d 1h | 30d ago | 2m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.15% | 0.82% | 22.60% | 22.60% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 2m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.15% | 0.82% | 36.28% | 36.28% | — | ↓ 0.44x | 1 | 22d 1h | 30d ago | 2m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.69x | 1 | 22d 1h | 30d ago | 2m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.15% | 0.82% | 99.25% | 99.25% | — | ↓ 0.41x | 1 | 0s | 22d ago | 3m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.54x | 1 | 22d 1h | 30d ago | 3m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.44x | 1 | 22d 1h | 30d ago | 2m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.15% | 0.82% | 20.58% | 20.58% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.15% | 0.82% | 0.00% | 0.00% | — | ↓ 0.63x | 1 | 22d 1h | 30d ago | 3m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.15% | 0.82% | 38.02% | 38.02% | — | ↓ 0.83x | 1 | 22d 1h | 30d ago | 3m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.15% | 0.82% | 25.49% | 25.49% | — | ↓ 0.57x | 1 | 22d 1h | 30d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.15% | 0.82% | 69.29% | 69.29% | — | ↓ 0.39x | 1 | 22d 1h | 30d ago | 3m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.15% | 0.82% | 67.73% | 67.73% | — | ↓ 0.88x | 1 | 22d 1h | 30d ago | 3m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.15% | 0.82% | 74.74% | 74.74% | — | ↓ 0.38x | 1 | 22d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.15% | 0.82% | 30.92% | 30.92% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 3m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.15% | 0.82% | 68.76% | 68.76% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.15% | 0.82% | 44.20% | 44.20% | — | ↓ 0.70x | 1 | 22d 1h | 30d ago | 3m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.15% | 0.82% | 4.55% | 4.55% | — | ↓ 0.84x | 1 | 22d 1h | 30d ago | 3m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.15% | 0.82% | 1.35% | 1.35% | — | ↓ 0.47x | 1 | 22d 1h | 30d ago | 3m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.15% | 0.81% | 48.30% | 48.30% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 3m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.15% | 0.81% | 33.55% | 33.55% | — | ↓ 0.50x | 1 | 22d 1h | 30d ago | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.15% | 0.81% | 3.93% | 3.93% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 3m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.15% | 0.81% | 83.11% | 83.11% | — | ↓ 0.53x | 2 | 2d 24h | 13d ago | 3m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.15% | 0.81% | 68.44% | 68.44% | — | ↓ 0.73x | 1 | 22d 1h | 30d ago | 3m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.15% | 0.81% | 42.69% | 42.69% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 3m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.15% | 0.81% | 0.00% | 0.00% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 3m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.15% | 0.81% | 17.16% | 17.16% | — | ↓ 0.66x | 1 | 22d 1h | 30d ago | 3m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.15% | 0.81% | 43.61% | 43.61% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 3m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.15% | 0.81% | 47.31% | 47.31% | — | ↓ 0.49x | 1 | 22d 1h | 30d ago | 3m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.15% | 0.81% | 79.86% | 79.86% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 3m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.15% | 0.81% | 85.33% | 85.33% | — | ↓ 0.54x | 95 | 33m | 10d ago | 3m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.15% | 0.81% | 0.00% | 0.00% | — | ↓ 0.39x | 1 | 22d 1h | 30d ago | 3m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.15% | 0.81% | 20.14% | 20.14% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 3m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.15% | 0.81% | 62.39% | 62.39% | — | ↓ 0.68x | 1 | 22d 1h | 30d ago | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.15% | 0.81% | 24.01% | 24.01% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 3m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.15% | 0.81% | 14.75% | 14.75% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 3m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.15% | 0.81% | 60.97% | 60.97% | — | ↓ 0.61x | 83 | 4m | 10d ago | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.15% | 0.81% | 78.64% | 78.64% | — | ↓ 0.62x | 1 | 22d 1h | 30d ago | 3m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.15% | 0.81% | 5.52% | 5.52% | — | ↓ 0.75x | 1 | 22d 1h | 30d ago | 3m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.15% | 0.81% | 55.75% | 55.75% | — | ↓ 0.57x | 1 | 22d 1h | 30d ago | 3m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.15% | 0.81% | 65.07% | 65.07% | — | ↓ 0.73x | 1 | 22d 1h | 30d ago | 3m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.15% | 0.81% | 46.51% | 46.51% | — | ↓ 0.58x | 4 | 2d 7h | 16d ago | 3m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.15% | 0.81% | 35.49% | 35.49% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 3m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.15% | 0.81% | 63.49% | 63.49% | — | ↓ 0.50x | 1 | 22d 1h | 30d ago | 3m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.15% | 0.81% | 52.44% | 52.44% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 3m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.15% | 0.81% | 26.33% | 26.33% | — | ↓ 0.73x | 1 | 22d 1h | 30d ago | 3m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.15% | 0.81% | 81.13% | 81.13% | — | ↓ 0.47x | 3 | 20m | 22d ago | 3m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.15% | 0.81% | 52.99% | 52.99% | — | ↓ 0.52x | 1 | 22d 1h | 30d ago | 3m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.15% | 0.81% | 92.19% | 92.19% | — | ↓ 0.39x | 1 | 15d 2h | 23d ago | 3m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.15% | 0.81% | 92.63% | 92.63% | — | ↓ 0.35x | 3 | 2h 60m | 8d ago | 3m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.15% | 0.81% | 19.49% | 19.49% | — | ↓ 0.47x | 1 | 22d 1h | 30d ago | 3m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.15% | 0.81% | 10.15% | 10.15% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 3m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.15% | 0.81% | 40.17% | 40.17% | — | ↓ 0.47x | 1 | 22d 1h | 30d ago | 3m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.15% | 0.81% | 65.91% | 65.91% | — | ↓ 0.67x | 1 | 22d 1h | 30d ago | 3m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.15% | 0.81% | 59.84% | 59.84% | — | ↓ 0.57x | 2 | 60m | 9d ago | 3m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.15% | 0.81% | 70.78% | 70.78% | — | ↓ 0.43x | 3 | 7d 6h | 8d ago | 3m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.15% | 0.81% | 98.37% | 98.37% | — | ↓ 0.54x | 0 | — | — | 3m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.15% | 0.81% | 4.63% | 4.63% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 3m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.15% | 0.81% | 0.00% | 0.00% | — | ↓ 0.69x | 1 | 22d 1h | 30d ago | 3m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.15% | 0.81% | 70.74% | 70.74% | — | ↓ 0.51x | 3 | 7d 6h | 8d ago | 3m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.15% | 0.81% | 49.45% | 49.45% | — | ↓ 0.45x | 0 | — | — | 3m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.15% | 0.81% | 46.05% | 46.05% | — | ↓ 0.68x | 1 | 22d 1h | 30d ago | 3m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.15% | 0.81% | 22.23% | 22.23% | — | ↓ 0.56x | 1 | 22d 1h | 30d ago | 3m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.15% | 0.81% | 13.15% | 13.15% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 3m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.15% | 0.81% | 21.32% | 21.32% | — | ↓ 0.47x | 1 | 22d 1h | 30d ago | 3m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.15% | 0.81% | 83.98% | 83.98% | — | ↓ 0.46x | 1 | 22d 1h | 30d ago | 3m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.15% | 0.81% | 47.90% | 47.90% | — | ↓ 0.32x | 1 | 22d 1h | 30d ago | 3m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.15% | 0.81% | 0.00% | 0.00% | — | ↓ 0.35x | 1 | 22d 1h | 30d ago | 3m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.15% | 0.81% | 98.48% | 98.48% | — | ↓ 0.50x | 1 | 0s | 29d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.15% | 0.81% | 30.30% | 30.30% | — | ↓ 0.39x | 1 | 22d 1h | 30d ago | 4m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.15% | 0.81% | 72.39% | 72.39% | — | ↓ 0.38x | 1 | 22d 1h | 30d ago | 3m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.15% | 0.81% | 6.70% | 6.70% | — | ↓ 0.56x | 1 | 22d 1h | 30d ago | 4m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.15% | 0.81% | 91.72% | 91.72% | — | ↓ 0.49x | 25 | 0s | 8d ago | 4m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.15% | 0.81% | 21.09% | 21.09% | — | ↓ 0.67x | 1 | 22d 1h | 30d ago | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.15% | 0.81% | 64.35% | 64.35% | — | ↑ 2.09x | 2 | 9d 1h | 26d ago | 4m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.15% | 0.81% | 39.95% | 39.95% | — | ↓ 0.66x | 1 | 22d 1h | 30d ago | 4m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.15% | 0.81% | 2.87% | 2.87% | — | ↓ 0.58x | 1 | 22d 1h | 30d ago | 4m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.15% | 0.81% | 27.77% | 27.77% | — | ↓ 0.53x | 119 | 15m | 11d ago | 4m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 0.15% | 0.81% | 87.63% | 87.63% | — | ↓ 0.40x | 0 | — | — | 4m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.15% | 0.81% | 8.99% | 8.99% | — | ↓ 0.60x | 1 | 22d 1h | 30d ago | 4m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.15% | 0.81% | 17.59% | 17.59% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 4m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.15% | 0.80% | 27.04% | 27.04% | — | ↓ 0.56x | 1 | 22d 1h | 30d ago | 4m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.15% | 0.80% | 3.12% | 3.12% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 4m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.15% | 0.80% | 31.88% | 31.88% | — | ↓ 0.68x | 3 | 4d 19h | 17d ago | 4m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.15% | 0.80% | 22.07% | 22.07% | — | → 0.99x | 1 | 22d 1h | 30d ago | 4m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.15% | 0.80% | 46.41% | 46.41% | — | ↓ 0.46x | 2 | 8d 8h | 9d ago | 4m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.15% | 0.80% | 35.56% | 35.56% | — | ↓ 0.49x | 1 | 22d 1h | 30d ago | 4m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.15% | 0.80% | 26.68% | 26.68% | — | ↓ 0.38x | 0 | — | — | 4m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.15% | 0.80% | 5.20% | 5.20% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 4m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.57x | 1 | 22d 1h | 30d ago | 4m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 0.15% | 0.80% | 22.80% | 22.80% | — | ↓ 0.35x | 1 | 0s | 27d ago | 4m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 4m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.15% | 0.80% | 22.72% | 22.72% | — | ↓ 0.49x | 3 | 1d 21h | 14d ago | 4m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.15% | 0.80% | 18.10% | 18.10% | — | ↓ 0.68x | 1 | 22d 1h | 30d ago | 4m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.38x | 1 | 22d 1h | 30d ago | 4m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.15% | 0.80% | 78.14% | 78.14% | — | ↓ 0.54x | 96 | 3h 58m | 9d ago | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.15% | 0.80% | 38.64% | 38.64% | — | ↓ 0.45x | 1 | 22d 1h | 30d ago | 4m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.15% | 0.80% | 22.68% | 22.68% | — | ↓ 0.30x | 0 | — | — | 4m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.15% | 0.80% | 73.53% | 73.53% | — | ↓ 0.39x | 1 | 22d 1h | 30d ago | 4m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 4m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.62x | 1 | 22d 1h | 30d ago | 4m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.15% | 0.80% | 43.20% | 43.20% | — | ↓ 0.81x | 1 | 22d 1h | 30d ago | 4m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.15% | 0.80% | 19.82% | 19.82% | — | ↓ 0.59x | 3 | 2d 15h | 16d ago | 4m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.15% | 0.80% | 22.80% | 22.80% | — | ↓ 0.56x | 4 | 8m | 18d ago | 4m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.15% | 0.80% | 73.32% | 73.32% | — | ↓ 0.76x | 1 | 22d 1h | 30d ago | 4m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 4m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.15% | 0.80% | 99.26% | 99.26% | — | ↓ 0.84x | 0 | — | — | 4m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.15% | 0.80% | 16.23% | 16.23% | — | ↓ 0.60x | 1 | 22d 1h | 30d ago | 4m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.15% | 0.80% | 51.26% | 51.26% | — | ↓ 0.75x | 1 | 22d 1h | 30d ago | 4m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 4m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.15% | 0.80% | 77.23% | 77.23% | — | ↓ 0.54x | 1 | 22d 1h | 30d ago | 4m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 4m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.15% | 0.80% | 63.31% | 63.31% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 4m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.15% | 0.80% | 40.15% | 40.15% | — | ↓ 0.63x | 0 | — | — | 4m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.50x | 1 | 22d 1h | 30d ago | 4m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.15% | 0.80% | 54.39% | 54.39% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 4m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.15% | 0.80% | 90.53% | 90.53% | — | ↓ 0.68x | 1 | 22d 1h | 30d ago | 4m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 4m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.58x | 1 | 22d 1h | 30d ago | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 4m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.15% | 0.80% | 16.69% | 16.69% | — | ↓ 0.51x | 1 | 22d 1h | 30d ago | 4m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.15% | 0.80% | 0.01% | 0.01% | — | ↓ 0.63x | 1 | 22d 1h | 30d ago | 4m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.15% | 0.80% | 0.00% | 0.00% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 4m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 4m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.15% | 0.79% | 74.22% | 74.22% | — | ↓ 0.36x | 20 | 8h 9m | 15d ago | 4m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.15% | 0.79% | 3.13% | 3.13% | — | ↓ 0.52x | 1 | 22d 1h | 30d ago | 4m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.15% | 0.79% | 50.25% | 50.25% | — | ↓ 0.48x | 4 | 0s | 24d ago | 4m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.15% | 0.79% | 96.06% | 96.06% | — | ↓ 0.52x | 6 | 14h 25m | 11d ago | 4m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.70x | 1 | 22d 1h | 30d ago | 4m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.15% | 0.79% | 20.82% | 20.82% | — | ↓ 0.39x | 57 | 7m | 8d ago | 4m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.15% | 0.79% | 33.64% | 33.64% | — | ↓ 0.71x | 1 | 22d 1h | 30d ago | 4m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.15% | 0.79% | 87.39% | 87.39% | — | ↓ 0.33x | 1 | 22d 1h | 30d ago | 4m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.15% | 0.79% | 98.15% | 98.15% | — | ↓ 0.33x | 2 | 4d | 16d ago | 4m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.15% | 0.79% | 32.40% | 32.40% | — | ↓ 0.70x | 2 | 2d 6h | 12d ago | 4m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.15% | 0.79% | 48.90% | 48.90% | — | ↓ 0.44x | 5 | 4d 9h | 19d ago | 4m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.15% | 0.79% | 50.43% | 50.43% | — | ↓ 0.74x | 1 | 22d 1h | 30d ago | 4m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 4m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.73x | 1 | 22d 1h | 30d ago | 4m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.15% | 0.79% | 45.98% | 45.98% | — | ↓ 0.45x | 1 | 22d 1h | 30d ago | 4m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 4m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.15% | 0.79% | 84.44% | 84.44% | — | ↓ 0.63x | 1 | 22d 1h | 30d ago | 5m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.15% | 0.79% | 48.81% | 48.81% | — | ↓ 0.63x | 1 | 22d 1h | 30d ago | 5m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.15% | 0.79% | 34.00% | 34.00% | — | ↓ 0.41x | 2 | 30m | 12d ago | 4m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.71x | 1 | 22d 1h | 30d ago | 5m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.15% | 0.79% | 82.46% | 82.46% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 5m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.15% | 0.79% | 49.10% | 49.10% | — | ↓ 0.47x | 1 | 22d 1h | 30d ago | 5m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.15% | 0.79% | 99.12% | 99.12% | — | ↓ 0.53x | 4 | 3h | 8d ago | 5m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.15% | 0.79% | 3.84% | 3.84% | — | ↓ 0.44x | 2 | 10d 19h | 9d ago | 4m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.39x | 1 | 22d 1h | 30d ago | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.15% | 0.79% | 21.71% | 21.71% | — | ↓ 0.34x | 36 | 1h 55m | 8d ago | 4m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.53x | 1 | 22d 1h | 30d ago | 4m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 5m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.15% | 0.79% | 0.00% | 0.00% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 5m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.14% | 0.79% | 46.30% | 46.30% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 5m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.62x | 1 | 22d 1h | 30d ago | 5m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.79x | 1 | 22d 1h | 30d ago | 5m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.14% | 0.79% | 39.16% | 39.16% | — | ↓ 0.79x | 1 | 22d 1h | 30d ago | 5m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 5m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.41x | 1 | 22d 1h | 30d ago | 5m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.14% | 0.79% | 86.17% | 86.17% | — | ↓ 0.59x | 1 | 10s | 14d ago | 5m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.14% | 0.79% | 83.68% | 83.68% | — | ↓ 0.67x | 1 | 22d 1h | 30d ago | 5m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.51x | 1 | 22d 1h | 30d ago | 5m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.14% | 0.79% | 75.88% | 75.88% | — | ↓ 0.60x | 1 | 22d 1h | 30d ago | 5m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.66x | 1 | 22d 1h | 30d ago | 5m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.14% | 0.79% | 23.11% | 23.11% | — | ↓ 0.77x | 0 | — | — | 5m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.45x | 1 | 22d 1h | 30d ago | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.14% | 0.79% | 5.08% | 5.08% | — | ↓ 0.60x | 1 | 22d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 5m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.14% | 0.79% | 57.88% | 57.88% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 5m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.14% | 0.79% | 60.67% | 60.67% | — | ↓ 0.53x | 1 | 22d 1h | 30d ago | 5m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 5m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.40x | 1 | 22d 1h | 30d ago | 5m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.51x | 1 | 22d 1h | 30d ago | 5m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.61x | 1 | 22d 1h | 30d ago | 5m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.49x | 1 | 22d 1h | 30d ago | 5m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.14% | 0.79% | 38.37% | 38.37% | — | ↓ 0.50x | 1 | 22d 1h | 30d ago | 5m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.14% | 0.79% | 83.92% | 83.92% | — | ↓ 0.37x | 1 | 19d 16h | 28d ago | 5m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 5m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.14% | 0.79% | 76.99% | 76.99% | — | ↓ 0.53x | 1 | 22d 1h | 30d ago | 5m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.14% | 0.79% | 22.32% | 22.32% | — | ↓ 0.50x | 0 | — | — | 5m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.14% | 0.79% | 23.09% | 23.09% | — | ↓ 0.46x | 5 | 12m | 14d ago | 5m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.14% | 0.79% | 63.55% | 63.55% | — | ↓ 0.51x | 1 | 22d 1h | 30d ago | 5m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.14% | 0.79% | 84.65% | 84.65% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 5m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 5m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.14% | 0.79% | 62.64% | 62.64% | — | ↓ 0.38x | 1 | 22d 1h | 30d ago | 5m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.14% | 0.79% | 23.13% | 23.13% | — | ↓ 0.38x | 0 | — | — | 5m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.14% | 0.79% | 99.17% | 99.17% | — | ↓ 0.55x | 0 | — | — | 5m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.14% | 0.79% | 70.96% | 70.96% | — | ↓ 0.76x | 1 | 22d 1h | 30d ago | 5m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.14% | 0.79% | 86.30% | 86.30% | — | ↓ 0.38x | 1 | 22d 1h | 30d ago | 5m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.14% | 0.79% | 68.72% | 68.72% | — | ↓ 0.87x | 1 | 22d 1h | 30d ago | 5m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.14% | 0.79% | 0.00% | 0.00% | — | ↓ 0.58x | 1 | 22d 1h | 30d ago | 3s ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.14% | 0.79% | 99.84% | 99.84% | — | ↓ 0.74x | 0 | — | — | 4s ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.14% | 0.79% | 39.57% | 39.57% | — | ↓ 0.37x | 1 | 22d 1h | 30d ago | 4s ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.14% | 0.79% | 92.62% | 92.62% | — | ↓ 0.41x | 1 | 22d 1h | 30d ago | 4s ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.14% | 0.79% | 99.77% | 99.77% | — | ↓ 0.46x | 0 | — | — | 4s ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.14% | 0.78% | 99.74% | 99.74% | — | ↓ 0.54x | 0 | — | — | 10s ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.14% | 0.78% | 0.00% | 0.00% | — | ↓ 0.54x | 1 | 22d 1h | 30d ago | 5s ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.14% | 0.78% | 35.55% | 35.55% | — | ↓ 0.48x | 1 | 22d 1h | 30d ago | 5s ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.14% | 0.78% | 45.59% | 45.59% | — | ↓ 0.52x | 0 | — | — | 10s ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.14% | 0.78% | 99.53% | 99.53% | — | ↓ 0.48x | 0 | — | — | 10s ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.14% | 0.78% | 83.66% | 83.66% | — | ↓ 0.34x | 1 | 22d 1h | 30d ago | 13s ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.14% | 0.78% | 75.27% | 75.27% | — | ↓ 0.86x | 1 | 22d 1h | 30d ago | 13s ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.14% | 0.78% | 0.00% | 0.00% | — | → 1.05x | 1 | 22d 1h | 30d ago | 13s ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.14% | 0.78% | 0.00% | 0.00% | — | ↓ 0.42x | 1 | 22d 1h | 30d ago | 12s ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 0.14% | 0.78% | 99.95% | 99.95% | — | ↓ 0.52x | 0 | — | — | 13s ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.14% | 0.78% | 74.18% | 74.18% | — | ↓ 0.73x | 1 | 22d 1h | 30d ago | 13s ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.14% | 0.78% | 74.31% | 74.31% | — | ↓ 0.64x | 1 | 22d 1h | 30d ago | 13s ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.14% | 0.78% | 81.34% | 81.34% | — | ↓ 0.74x | 1 | 3h | 12d ago | 13s ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.14% | 0.78% | 0.00% | 0.00% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 13s ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.14% | 0.78% | 54.28% | 54.28% | — | ↓ 0.57x | 1 | 22d 1h | 30d ago | 13s ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.14% | 0.78% | 10.24% | 10.24% | — | ↓ 0.69x | 1 | 22d 1h | 30d ago | 18s ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.14% | 0.78% | 46.73% | 46.73% | — | ↓ 0.55x | 1 | 22d 1h | 30d ago | 18s ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.14% | 0.78% | 0.00% | 0.00% | — | ↓ 0.58x | 1 | 22d 1h | 30d ago | 18s ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.14% | 0.78% | 23.25% | 23.25% | — | ↓ 0.59x | 1 | 22d 1h | 30d ago | 13s ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.08% | 0.08% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.07% | 0.74% | 90.14% | 90.14% | — | ↓ 0.49x | 2 | 6d 17h | 21d ago | 3m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.07% | 0.73% | 32.48% | 32.48% | — | ↓ 0.68x | 2 | 6d 20h | 18d ago | 4m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.07% | 0.73% | 23.40% | 23.40% | — | ↓ 0.78x | 67 | 13m | 11d ago | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.07% | 0.73% | 0.00% | 0.00% | — | ↓ 0.43x | 1 | 22d 1h | 30d ago | 4m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.67% | 88.73% | 88.73% | — | — | 1 | 13d 1h | 21d ago | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 22d 1h | 30d ago | 4m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.67% | 99.75% | 99.75% | — | — | 1 | 0s | 9d ago | 2m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.67% | 76.21% | 76.21% | — | — | 1 | 20d 10h | 28d ago | 2m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 22d 1h | 30d ago | 4m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.67% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 9d ago | 2m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.67% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.67% | 98.70% | 98.70% | — | — | 9 | 0s | 18d ago | 2m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.67% | 75.41% | 75.41% | — | — | 187 | 1h 20m | 8d ago | 3m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.67% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.67% | 98.40% | 98.40% | — | — | 0 | — | — | 2m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.65% | 0.00% | 0.00% | — | — | 1 | 22d 1h | 30d ago | 4m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.67% | 83.84% | 83.84% | — | — | 8 | 17m | 13d ago | 3m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.67% | 91.99% | 91.99% | — | — | 0 | — | — | 3m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.67% | 98.05% | 98.05% | — | — | 3 | 0s | 9d ago | 2m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.67% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 10d ago | 2m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.67% | 16.44% | 16.44% | — | — | 1 | 22d 1h | 30d ago | 3m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.67% | 99.94% | 99.94% | — | — | 1 | 21m | 23d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.67% | 99.29% | 99.29% | — | — | 1 | 2h 37m | 27d ago | 2m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.66% | 0.00% | 0.00% | — | — | 1 | 22d 1h | 30d ago | 3m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.67% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.67% | 0.00% | 0.00% | — | — | 1 | 22d 1h | 30d ago | 2m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.67% | 100.00% | 100.00% | — | — | 0 | — | — | 2m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.67% | 99.60% | 99.60% | — | — | 0 | — | — | 2m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.67% | 3.80% | 3.80% | — | — | 1 | 22d 1h | 30d ago | 3m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.65% | 32.96% | 32.96% | — | — | 0 | — | — | 5m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 22d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 22d 1h | 30d ago | — |

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
