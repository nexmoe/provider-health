# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**722 providers** — 268 🟢 operational · 65 🟡 degraded · 387 🔴 down · 2 ⚫ unknown

_Updated 2026-10-25 08:14 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (268)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.03% | 98.47% | 98.47% | — | ↓ 0.94x | 0 | — | — | 12m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 100.00% | 99.97% | 63.31% | 63.31% | — | → 0.96x | 0 | — | — | 4m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.83% | 98.73% | 98.73% | — | → 0.99x | 0 | — | — | 2m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 99.73% | 96.69% | 96.69% | — | ↓ 0.90x | 0 | — | — | 10s ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 100.00% | 99.31% | 93.61% | 93.61% | — | → 0.95x | 0 | — | — | 11m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.90% | 99.98% | 99.98% | — | ↓ 0.81x | 0 | — | — | 10m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 99.90% | 99.09% | 99.09% | — | ↓ 0.93x | 0 | — | — | 10m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 44.77% | 43.99% | 43.99% | — | ↓ 0.70x | 0 | — | — | 13m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 99.72% | 99.85% | 99.85% | — | ↓ 0.83x | 0 | — | — | 10m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 99.73% | 77.97% | 77.97% | — | ↓ 0.82x | 0 | — | — | 1m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 100.00% | 99.93% | 0.00% | 0.00% | — | ↓ 0.86x | 0 | — | — | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.93% | 90.95% | 90.95% | — | → 0.97x | 0 | — | — | 1m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 100.00% | 99.82% | — | — | — | ↓ 0.85x | 0 | — | — | 9m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.97% | 22.94% | 22.94% | — | ↓ 0.89x | 0 | — | — | 5m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 99.86% | 90.32% | 90.32% | — | ↓ 0.94x | 0 | — | — | 1m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 99.83% | 99.94% | 99.94% | — | ↓ 0.80x | 0 | — | — | 7m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.43% | 98.43% | — | ↓ 0.76x | 0 | — | — | 12m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 100.00% | 99.83% | 30.20% | 30.20% | — | ↓ 0.69x | 0 | — | — | 2m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 100.00% | 99.83% | 0.00% | 0.00% | — | ↓ 0.84x | 0 | — | — | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 100.00% | 99.79% | 43.48% | 43.48% | — | ↓ 0.92x | 0 | — | — | 10s ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.76% | 99.93% | 99.93% | — | ↓ 0.84x | 0 | — | — | 13m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 99.39% | 96.88% | 96.88% | — | → 0.96x | 0 | — | — | 2m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 100.00% | 99.73% | 98.38% | 98.38% | — | → 0.98x | 0 | — | — | 53s ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.87% | 99.26% | 99.26% | — | ↓ 0.89x | 0 | — | — | 4m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.86% | 92.20% | 92.20% | — | → 0.99x | 0 | — | — | 10s ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.90% | 97.87% | 97.87% | — | ↓ 0.83x | 0 | — | — | 12m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 100.00% | 99.67% | 76.88% | 76.88% | — | ↓ 0.78x | 0 | — | — | 6m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.93% | 63.68% | 63.68% | — | ↓ 0.92x | 0 | — | — | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.80% | 25.33% | 25.33% | — | ↓ 0.76x | 0 | — | — | 4m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.80% | 99.58% | 99.58% | — | → 0.95x | 0 | — | — | 6m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.97% | 98.47% | 98.47% | — | ↓ 0.85x | 0 | — | — | 14m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 100.00% | 100.00% | 29.98% | 29.98% | — | ↓ 0.93x | 0 | — | — | 13m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.90% | 76.90% | 76.90% | — | ↓ 0.94x | 0 | — | — | 13s ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 99.83% | 97.35% | 97.35% | — | ↓ 0.75x | 0 | — | — | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 100.00% | 99.79% | 0.69% | 0.69% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.66% | 99.82% | 99.82% | — | ↓ 0.92x | 0 | — | — | 53s ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.80% | 99.85% | 99.85% | — | ↓ 0.90x | 0 | — | — | 6m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 100.00% | 99.69% | 99.76% | 99.76% | — | → 0.96x | 0 | — | — | 14m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.86% | 98.78% | 98.78% | — | ↓ 0.69x | 0 | — | — | 13m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.86% | 99.80% | 99.98% | 99.98% | — | ↓ 0.59x | 0 | — | — | 8m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.86% | 99.64% | 68.59% | 68.59% | — | ↓ 0.84x | 0 | — | — | 8m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.86% | 99.87% | 98.78% | 98.78% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.86% | 99.77% | 75.23% | 75.23% | — | ↓ 0.72x | 0 | — | — | 8m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.86% | 99.77% | 99.95% | 99.95% | — | ↓ 0.88x | 0 | — | — | 8m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.86% | 99.84% | 99.76% | 99.76% | — | ↓ 0.62x | 0 | — | — | 8m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.86% | 99.77% | 99.74% | 99.74% | — | ↓ 0.77x | 0 | — | — | 7m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.86% | 99.87% | 99.65% | 99.65% | — | ↓ 0.66x | 0 | — | — | 7m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.86% | 99.61% | 99.62% | 99.62% | — | ↓ 0.70x | 0 | — | — | 7m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.86% | 99.84% | 23.13% | 23.13% | — | → 1.02x | 0 | — | — | 7m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.86% | 99.87% | 76.22% | 76.22% | — | → 1.00x | 0 | — | — | 7m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.86% | 99.87% | 98.00% | 98.00% | — | ↓ 0.94x | 0 | — | — | 6m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.86% | 99.93% | 99.96% | 99.96% | — | ↓ 0.82x | 0 | — | — | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.86% | 99.93% | 99.97% | 99.97% | — | ↓ 0.89x | 0 | — | — | 6m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.86% | 99.83% | 99.84% | 99.84% | — | ↓ 0.89x | 0 | — | — | 6m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.86% | 99.73% | 99.87% | 99.87% | — | ↓ 0.82x | 0 | — | — | 6m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.86% | 99.74% | 99.90% | 99.90% | — | ↓ 0.87x | 0 | — | — | 7m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.86% | 99.73% | 99.62% | 99.62% | — | ↓ 0.80x | 0 | — | — | 6m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.86% | 99.70% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 6m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.86% | 99.83% | 99.02% | 99.02% | — | ↓ 0.66x | 0 | — | — | 5m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.86% | 99.73% | 80.20% | 80.20% | — | ↓ 0.92x | 0 | — | — | 4m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.86% | 99.80% | 99.85% | 99.85% | — | ↓ 0.78x | 0 | — | — | 4m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 99.86% | 99.03% | 0.11% | 0.11% | — | ↓ 0.77x | 0 | — | — | 4m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.86% | 99.77% | 99.34% | 99.34% | — | ↓ 0.92x | 0 | — | — | 4m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.86% | 99.60% | 99.77% | 99.77% | — | ↓ 0.90x | 0 | — | — | 4m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.86% | 99.66% | 88.17% | 88.17% | — | → 1.05x | 0 | — | — | 4m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.86% | 98.32% | 24.43% | 24.43% | — | ↓ 0.44x | 0 | — | — | 4m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.86% | 99.80% | 97.57% | 97.57% | — | → 1.03x | 0 | — | — | 4m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.86% | 99.56% | 99.03% | 99.03% | — | → 0.98x | 0 | — | — | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.86% | 99.56% | 99.67% | 99.67% | — | → 0.95x | 0 | — | — | 4m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.86% | 99.76% | 93.26% | 93.26% | — | ↑ 1.22x | 0 | — | — | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.86% | 99.66% | 62.65% | 62.65% | — | → 0.97x | 0 | — | — | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.86% | 99.80% | 68.50% | 68.50% | — | → 0.98x | 0 | — | — | 2m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.86% | 99.83% | 99.88% | 99.88% | — | ↑ 1.11x | 0 | — | — | 2m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.85% | 99.12% | 84.58% | 84.58% | — | ↓ 0.93x | 0 | — | — | 1m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.85% | 99.83% | 58.17% | 58.17% | — | → 0.99x | 0 | — | — | 53s ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.85% | 99.83% | 99.89% | 99.89% | — | ↓ 0.90x | 0 | — | — | 53s ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.85% | 99.90% | 98.90% | 98.90% | — | ↓ 0.85x | 0 | — | — | 53s ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.85% | 99.86% | 66.50% | 66.50% | — | → 0.98x | 0 | — | — | 33s ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.85% | 99.83% | 98.74% | 98.74% | — | ↓ 0.88x | 0 | — | — | 33s ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.85% | 99.76% | 97.03% | 97.03% | — | ↓ 0.94x | 0 | — | — | 13s ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.85% | 99.79% | 26.43% | 26.43% | — | → 0.96x | 0 | — | — | 10s ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.85% | 98.49% | 56.85% | 56.85% | — | ↓ 0.76x | 0 | — | — | 12s ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.85% | 99.83% | 98.73% | 98.73% | — | → 0.95x | 0 | — | — | 13s ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.85% | 99.86% | 98.56% | 98.56% | — | ↓ 0.94x | 0 | — | — | 14m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.85% | 99.79% | 98.81% | 98.81% | — | → 0.97x | 0 | — | — | 13m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.85% | 99.86% | 99.87% | 99.87% | — | ↓ 0.36x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.85% | 99.72% | 99.87% | 99.87% | — | ↓ 0.93x | 0 | — | — | 13m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.85% | 98.41% | 92.56% | 92.56% | — | → 0.98x | 0 | — | — | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.85% | 99.83% | 98.16% | 98.16% | — | → 1.01x | 0 | — | — | 12m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.85% | 99.72% | 28.78% | 28.78% | — | ↓ 0.88x | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.85% | 99.72% | 99.97% | 99.97% | — | ↓ 0.90x | 0 | — | — | 12m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.85% | 99.41% | 99.82% | 99.82% | — | ↓ 0.74x | 0 | — | — | 13m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.85% | 97.80% | 97.48% | 97.48% | — | ↓ 0.90x | 0 | — | — | 13m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.85% | 99.69% | 99.51% | 99.51% | — | ↓ 0.84x | 0 | — | — | 12m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.85% | 99.65% | 99.70% | 99.70% | — | ↓ 0.93x | 0 | — | — | 12m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.85% | 99.83% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 11m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 99.85% | 99.20% | 99.82% | 99.82% | — | ↓ 0.82x | 0 | — | — | 11m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.85% | 99.69% | 99.10% | 99.10% | — | ↓ 0.80x | 0 | — | — | 11m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.85% | 99.97% | 99.33% | 99.33% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.85% | 99.69% | 87.87% | 87.87% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.85% | 99.83% | 0.00% | 0.00% | — | ↓ 0.92x | 0 | — | — | 11m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.85% | 99.65% | 99.97% | 99.97% | — | ↓ 0.77x | 0 | — | — | 11m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.85% | 99.83% | 99.95% | 99.95% | — | ↓ 0.85x | 0 | — | — | 10m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.85% | 99.79% | 24.52% | 24.52% | — | ↑ 1.09x | 0 | — | — | 10m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.85% | 99.93% | 99.98% | 99.98% | — | → 0.95x | 0 | — | — | 10m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.85% | 99.58% | 99.95% | 99.95% | — | ↓ 0.84x | 0 | — | — | 10m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.85% | 99.79% | 99.98% | 99.98% | — | ↓ 0.89x | 0 | — | — | 10m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.85% | 99.83% | 99.45% | 99.45% | — | ↓ 0.85x | 0 | — | — | 10m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.85% | 99.86% | 99.92% | 99.92% | — | ↓ 0.84x | 0 | — | — | 10m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.85% | 99.62% | 99.94% | 99.94% | — | ↓ 0.94x | 0 | — | — | 10m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 99.85% | 99.44% | 99.82% | 99.82% | — | → 1.00x | 0 | — | — | 9m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.85% | 99.16% | 98.72% | 98.72% | — | → 1.00x | 0 | — | — | 9m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.85% | 98.70% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 9m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.85% | 99.40% | 100.00% | 100.00% | — | ↓ 0.90x | 0 | — | — | 9m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.85% | 99.82% | — | — | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.85% | 99.68% | — | — | — | ↓ 0.79x | 0 | — | — | 9m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.85% | 99.86% | 60.72% | 60.72% | — | ↓ 0.90x | 0 | — | — | 9m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.85% | 99.82% | 99.67% | 99.67% | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.85% | 98.66% | 99.34% | 99.34% | — | ↓ 0.93x | 0 | — | — | 9m ago |
| [APIArc](https://lmspeed.net/provider/apiarc) | 99.85% | 99.89% | — | — | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [Jectora](https://lmspeed.net/provider/jectora) | 99.85% | 99.65% | — | — | — | ↓ 0.93x | 0 | — | — | 8m ago |
| [NightRouter](https://lmspeed.net/provider/nightrouter) | 99.85% | 99.92% | — | — | — | → 0.98x | 0 | — | — | 8m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.72% | 99.45% | 36.33% | 36.33% | — | → 0.97x | 0 | — | — | 8m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.72% | 99.84% | 99.49% | 99.49% | — | ↓ 0.74x | 0 | — | — | 8m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.72% | 99.80% | 99.92% | 99.92% | — | ↓ 0.85x | 0 | — | — | 7m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.72% | 99.54% | 49.74% | 49.74% | — | ↓ 0.84x | 0 | — | — | 7m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.72% | 99.64% | 99.58% | 99.58% | — | → 1.00x | 0 | — | — | 7m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.72% | 99.50% | 99.73% | 99.73% | — | ↓ 0.79x | 0 | — | — | 7m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.72% | 99.80% | 99.64% | 99.64% | — | ↓ 0.95x | 0 | — | — | 6m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.72% | 99.64% | 99.91% | 99.91% | — | ↓ 0.85x | 0 | — | — | 6m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.72% | 99.64% | 99.49% | 99.49% | — | ↓ 0.83x | 0 | — | — | 6m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.72% | 99.80% | 99.81% | 99.81% | — | ↓ 0.87x | 0 | — | — | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.72% | 99.67% | 76.89% | 76.89% | — | ↓ 0.90x | 0 | — | — | 6m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.72% | 99.87% | 99.98% | 99.98% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.72% | 99.80% | 56.98% | 56.98% | — | → 0.97x | 0 | — | — | 5m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.72% | 99.20% | 69.98% | 69.98% | — | → 0.95x | 0 | — | — | 5m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.72% | 99.56% | 22.30% | 22.30% | — | ↓ 0.94x | 0 | — | — | 4m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.72% | 99.73% | 76.97% | 76.97% | — | ↓ 0.89x | 0 | — | — | 4m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.72% | 99.63% | 24.53% | 24.53% | — | ↓ 0.91x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.72% | 99.83% | 99.87% | 99.87% | — | ↓ 0.93x | 0 | — | — | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.72% | 99.73% | 99.37% | 99.37% | — | ↓ 0.95x | 0 | — | — | 4m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.72% | 99.83% | 5.16% | 5.16% | — | ↓ 0.91x | 0 | — | — | 4m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.71% | 99.80% | 65.57% | 65.57% | — | ↓ 0.78x | 0 | — | — | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.71% | 99.59% | 2.34% | 2.34% | — | ↓ 0.73x | 0 | — | — | 2m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.71% | 99.70% | 63.14% | 63.14% | — | → 0.97x | 0 | — | — | 2m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.71% | 98.91% | 74.11% | 74.11% | — | → 0.98x | 0 | — | — | 2m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.71% | 99.80% | 99.35% | 99.35% | — | ↓ 0.91x | 0 | — | — | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.71% | 99.83% | 69.43% | 69.43% | — | ↓ 0.73x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.71% | 99.69% | 83.46% | 83.46% | — | → 0.96x | 0 | — | — | 1m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.71% | 98.77% | 94.26% | 94.26% | — | ↓ 0.89x | 0 | — | — | 1m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.71% | 99.90% | 97.00% | 97.00% | — | ↑ 1.12x | 0 | — | — | 53s ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.71% | 99.35% | 99.00% | 99.00% | — | → 1.00x | 0 | — | — | 52s ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.71% | 99.66% | 89.57% | 89.57% | — | ↑ 1.15x | 0 | — | — | 53s ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.71% | 99.35% | 97.90% | 97.90% | — | ↓ 0.90x | 0 | — | — | 33s ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.71% | 99.73% | 28.39% | 28.39% | — | ↓ 0.66x | 0 | — | — | 33s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.71% | 99.83% | 99.10% | 99.10% | — | ↑ 1.25x | 0 | — | — | 13s ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.71% | 99.62% | 99.95% | 99.95% | — | ↓ 0.91x | 0 | — | — | 10s ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.70% | 99.86% | 98.02% | 98.02% | — | ↓ 0.90x | 0 | — | — | 13m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.70% | 99.90% | 31.33% | 31.33% | — | ↓ 0.95x | 0 | — | — | 12m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.70% | 99.31% | 99.74% | 99.74% | — | ↓ 0.94x | 0 | — | — | 13m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.70% | 99.72% | 96.80% | 96.80% | — | → 1.04x | 0 | — | — | 13m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.70% | 99.76% | 100.00% | 100.00% | — | ↑ 1.12x | 0 | — | — | 13m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.70% | 90.93% | 74.74% | 74.74% | — | → 1.01x | 0 | — | — | 12m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.70% | 99.66% | 99.71% | 99.71% | — | ↓ 0.88x | 0 | — | — | 12m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.70% | 99.66% | 96.94% | 96.94% | — | ↓ 0.83x | 0 | — | — | 13m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.70% | 99.79% | 93.73% | 93.73% | — | ↑ 1.16x | 0 | — | — | 13m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.70% | 99.76% | 98.37% | 98.37% | — | ↓ 0.84x | 0 | — | — | 13m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.70% | 99.62% | 96.89% | 96.89% | — | ↓ 0.82x | 0 | — | — | 12m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 99.70% | 99.69% | 25.49% | 25.49% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.70% | 99.79% | 99.08% | 99.08% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.70% | 99.72% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 11m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.70% | 99.65% | 99.95% | 99.95% | — | ↓ 0.85x | 0 | — | — | 11m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.70% | 58.46% | 39.40% | 39.40% | — | ↓ 0.59x | 0 | — | — | 11m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 99.70% | 99.30% | 0.00% | 0.00% | — | ↓ 0.93x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.70% | 99.83% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 11m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.70% | 99.62% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 11m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.70% | 99.79% | 99.61% | 99.61% | — | ↓ 0.88x | 0 | — | — | 10m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.70% | 99.55% | 100.00% | 100.00% | — | ↓ 0.91x | 0 | — | — | 10m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.70% | 99.83% | 93.54% | 93.54% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.70% | 99.86% | 99.77% | 99.77% | — | ↓ 0.79x | 0 | — | — | 10m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.70% | 99.75% | 99.61% | 99.61% | — | → 1.04x | 0 | — | — | 9m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.70% | 99.02% | 100.00% | 100.00% | — | ↓ 0.89x | 0 | — | — | 9m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.70% | 99.75% | 100.00% | 100.00% | — | ↓ 0.89x | 0 | — | — | 9m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.70% | 99.54% | — | — | — | ↓ 0.82x | 0 | — | — | 9m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.70% | 99.33% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.58% | 99.67% | 93.57% | 93.57% | — | ↓ 0.72x | 0 | — | — | 8m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.58% | 99.44% | 99.75% | 99.75% | — | ↓ 0.73x | 0 | — | — | 8m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.58% | 99.15% | 99.28% | 99.28% | — | ↓ 0.86x | 0 | — | — | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.58% | 99.77% | 17.47% | 17.47% | — | ↓ 0.81x | 0 | — | — | 7m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.58% | 99.67% | 97.98% | 97.98% | — | → 1.02x | 0 | — | — | 7m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.58% | 99.67% | 89.73% | 89.73% | — | ↓ 0.95x | 0 | — | — | 6m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.58% | 99.67% | 99.90% | 99.90% | — | ↓ 0.74x | 0 | — | — | 6m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 99.58% | 95.82% | 89.02% | 89.02% | — | ↓ 0.61x | 0 | — | — | 6m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.58% | 99.83% | 0.11% | 0.11% | — | → 0.99x | 0 | — | — | 5m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.58% | 99.70% | 99.90% | 99.90% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.58% | 99.77% | 99.95% | 99.95% | — | ↓ 0.93x | 0 | — | — | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.57% | 99.32% | 50.15% | 50.15% | — | ↓ 0.88x | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.57% | 98.95% | 98.88% | 98.88% | — | ↓ 0.83x | 0 | — | — | 2m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.56% | 99.15% | 91.09% | 91.09% | — | ↓ 0.88x | 0 | — | — | 1m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.56% | 99.86% | 99.31% | 99.31% | — | ↓ 0.86x | 0 | — | — | 1m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.56% | 99.83% | 99.18% | 99.18% | — | → 1.02x | 0 | — | — | 53s ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.56% | 99.28% | 77.59% | 77.59% | — | ↓ 0.73x | 0 | — | — | 33s ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.56% | 99.76% | 99.86% | 99.86% | — | ↑ 1.13x | 0 | — | — | 12s ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.56% | 99.14% | 98.96% | 98.96% | — | → 0.95x | 0 | — | — | 10s ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.56% | 99.04% | 91.87% | 91.87% | — | ↓ 0.88x | 0 | — | — | 13s ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.56% | 99.62% | 98.11% | 98.11% | — | ↓ 0.90x | 0 | — | — | 14m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.56% | 99.69% | 97.80% | 97.80% | — | → 0.97x | 0 | — | — | 13m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.56% | 99.62% | 14.21% | 14.21% | — | ↓ 0.93x | 0 | — | — | 12m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.56% | 99.55% | 32.93% | 32.93% | — | → 0.99x | 0 | — | — | 12m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.56% | 98.65% | 99.67% | 99.67% | — | ↓ 0.77x | 0 | — | — | 12m ago |
| [NovAI](https://lmspeed.net/provider/novai) | 99.55% | 99.55% | — | — | — | → 1.00x | 0 | — | — | 8m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.55% | 99.51% | 99.67% | 99.67% | — | ↓ 0.84x | 0 | — | — | 11m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.55% | 99.83% | 99.97% | 99.97% | — | ↓ 0.93x | 0 | — | — | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.55% | 99.69% | 100.00% | 100.00% | — | ↓ 0.87x | 0 | — | — | 10m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.55% | 99.69% | 99.85% | 99.85% | — | ↓ 0.88x | 0 | — | — | 10m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.55% | 99.68% | 100.00% | 100.00% | — | ↓ 0.61x | 0 | — | — | 9m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.44% | 99.61% | 99.98% | 99.98% | — | ↓ 0.82x | 0 | — | — | 8m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.44% | 99.15% | 93.42% | 93.42% | — | ↓ 0.77x | 0 | — | — | 8m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.44% | 99.54% | 99.65% | 99.65% | — | ↓ 0.94x | 0 | — | — | 6m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.44% | 99.34% | 51.42% | 51.42% | — | → 0.99x | 0 | — | — | 7m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.44% | 99.53% | 38.65% | 38.65% | — | ↓ 0.90x | 0 | — | — | 5m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.44% | 99.20% | 85.28% | 85.28% | — | ↓ 0.93x | 0 | — | — | 4m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.43% | 99.56% | 77.28% | 77.28% | — | → 0.97x | 0 | — | — | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.42% | 99.36% | 57.00% | 57.00% | — | ↓ 0.68x | 0 | — | — | 2m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.42% | 99.66% | 54.70% | 54.70% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.42% | 99.25% | 71.79% | 71.79% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.42% | 99.15% | 69.87% | 69.87% | — | ↓ 0.84x | 0 | — | — | 2m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 99.42% | 99.01% | 98.24% | 98.24% | — | ↓ 0.93x | 0 | — | — | 53s ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.41% | 99.55% | 99.64% | 99.64% | — | → 1.02x | 0 | — | — | 9s ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.41% | 99.69% | 99.83% | 99.83% | — | ↓ 0.76x | 0 | — | — | 10s ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.41% | 99.35% | 98.66% | 98.66% | — | ↓ 0.86x | 0 | — | — | 13s ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.41% | 99.79% | 99.30% | 99.30% | — | ↓ 0.91x | 0 | — | — | 13s ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.41% | 95.76% | 95.85% | 95.85% | — | ↓ 0.86x | 0 | — | — | 13m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.41% | 99.41% | 86.85% | 86.85% | — | → 0.99x | 0 | — | — | 13m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.40% | 99.58% | 99.92% | 99.92% | — | ↓ 0.79x | 0 | — | — | 10m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.40% | 99.72% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 99.40% | 99.68% | 99.66% | 99.66% | — | ↓ 0.76x | 0 | — | — | 9m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.39% | 99.61% | — | — | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [跑路中转站](https://lmspeed.net/provider/mrcwoods) | 99.39% | 98.70% | — | — | — | ↓ 0.91x | 0 | — | — | 8m ago |
| [GrooRoute Pro](https://lmspeed.net/provider/grooroutepro) | 99.36% | 99.36% | — | — | — | → 1.00x | 0 | — | — | 8m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.30% | 99.67% | 99.48% | 99.48% | — | ↓ 0.82x | 0 | — | — | 4m ago |
| [PackyCode](https://lmspeed.net/provider/codex-api-packycode-com) | 99.28% | 99.19% | 99.09% | 99.09% | — | ↓ 0.87x | 0 | — | — | 2m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.28% | 99.32% | 99.61% | 99.61% | — | ↓ 0.74x | 0 | — | — | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.27% | 99.73% | 82.26% | 82.26% | — | ↓ 0.89x | 0 | — | — | 1m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.27% | 99.69% | 97.21% | 97.21% | — | → 0.98x | 0 | — | — | 53s ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.26% | 99.69% | 98.85% | 98.85% | — | ↓ 0.84x | 0 | — | — | 14m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.26% | 98.97% | 98.83% | 98.83% | — | ↓ 0.91x | 0 | — | — | 13m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.26% | 99.07% | 97.10% | 97.10% | — | ↓ 0.82x | 0 | — | — | 13m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.26% | 99.45% | 97.07% | 97.07% | — | → 0.99x | 0 | — | — | 12m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.25% | 99.37% | 99.94% | 99.94% | — | ↓ 0.94x | 0 | — | — | 11m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.25% | 99.51% | 100.00% | 100.00% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.25% | 98.95% | 99.88% | 99.88% | — | → 0.98x | 0 | — | — | 9m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.25% | 99.58% | 100.00% | 100.00% | — | ↓ 0.95x | 0 | — | — | 9m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.25% | 98.39% | — | — | — | ↓ 0.68x | 0 | — | — | 9m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.13% | 99.63% | 27.04% | 27.04% | — | ↓ 0.77x | 0 | — | — | 2m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.13% | 98.80% | 96.18% | 96.18% | — | → 0.99x | 0 | — | — | 53s ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.11% | 99.21% | 93.06% | 93.06% | — | ↑ 1.26x | 0 | — | — | 13m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.11% | 99.41% | 99.86% | 99.86% | — | ↓ 0.88x | 0 | — | — | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.11% | 99.62% | 98.88% | 98.88% | — | ↓ 0.84x | 0 | — | — | 12m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.11% | 99.38% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 12m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.10% | 99.20% | 16.67% | 16.67% | — | → 1.00x | 0 | — | — | 10m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.10% | 98.74% | 91.90% | 91.90% | — | ↓ 0.91x | 0 | — | — | 9m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.03% | 98.95% | 0.00% | 0.00% | — | ↓ 0.73x | 0 | — | — | 8m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.02% | 99.18% | 44.95% | 44.95% | — | ↓ 0.84x | 0 | — | — | 7m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.01% | 99.06% | 98.93% | 98.93% | — | → 1.04x | 0 | — | — | 4m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.01% | 99.13% | 99.79% | 99.79% | — | → 0.97x | 0 | — | — | 4m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 99.01% | 94.26% | 98.12% | 98.12% | — | ↓ 0.83x | 0 | — | — | 4m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.01% | 99.33% | 96.73% | 96.73% | — | ↓ 0.85x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (65)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 98.99% | 99.18% | 22.07% | 22.07% | — | → 1.00x | 0 | — | — | 2m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.96% | 98.65% | 98.75% | 98.75% | — | ↓ 0.77x | 0 | — | — | 12m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 98.95% | 99.16% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 9m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 98.88% | 98.55% | 99.74% | 99.74% | — | ↓ 0.73x | 0 | — | — | 7m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.88% | 98.81% | 98.94% | 98.94% | — | ↓ 0.85x | 0 | — | — | 6m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.88% | 94.42% | 96.43% | 96.43% | — | ↓ 0.93x | 0 | — | — | 7m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 98.88% | 99.44% | 99.92% | 99.92% | — | ↓ 0.86x | 0 | — | — | 6m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 98.88% | 99.44% | 99.77% | 99.77% | — | ↑ 1.28x | 0 | — | — | 6m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 98.85% | 99.43% | 31.58% | 31.58% | — | ↓ 0.73x | 0 | — | — | 2m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 98.82% | 99.59% | 98.04% | 98.04% | — | ↓ 0.80x | 0 | — | — | 12m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 98.80% | 77.47% | 73.96% | 73.96% | — | → 0.96x | 0 | — | — | 10m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.80% | 97.84% | 100.00% | 100.00% | — | ↓ 0.88x | 0 | — | — | 10m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.75% | 98.39% | 99.85% | 99.85% | — | ↓ 0.77x | 0 | — | — | 8m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 98.73% | 98.43% | 97.28% | 97.28% | — | ↓ 0.82x | 0 | — | — | 4m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.73% | 99.19% | 24.54% | 24.54% | — | → 1.01x | 0 | — | — | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 98.69% | 96.77% | 74.00% | 74.00% | — | → 1.03x | 0 | — | — | 1m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 98.65% | 99.44% | 99.86% | 99.86% | — | ↓ 0.88x | 0 | — | — | 10m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 98.60% | 97.64% | 98.92% | 98.92% | — | ↑ 1.41x | 0 | — | — | 5m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.53% | 99.31% | 98.81% | 98.81% | — | ↓ 0.92x | 0 | — | — | 14m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 98.35% | 95.41% | 76.63% | 76.63% | — | ↓ 0.91x | 0 | — | — | 9m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 98.23% | 97.04% | 97.00% | 97.00% | — | ↓ 0.88x | 0 | — | — | 13m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 98.22% | 98.16% | 99.85% | 99.85% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 98.20% | 98.25% | 39.41% | 39.41% | — | ↓ 0.86x | 0 | — | — | 10m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.08% | 97.38% | 99.34% | 99.34% | — | ↓ 0.94x | 0 | — | — | 12m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 98.06% | 98.54% | 98.56% | 98.56% | — | ↓ 0.92x | 0 | — | — | 11m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 97.94% | 97.90% | 92.86% | 92.86% | — | ↓ 0.52x | 0 | — | — | 14m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 97.69% | 98.92% | 26.84% | 26.84% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 97.64% | 95.40% | 99.60% | 99.60% | — | ↓ 0.86x | 0 | — | — | 8m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 97.35% | 98.75% | 99.92% | 99.92% | — | ↓ 0.45x | 0 | — | — | 7m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 97.19% | 80.73% | 99.89% | 99.89% | — | ↓ 0.32x | 0 | — | — | 12m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 97.14% | 98.98% | 99.48% | 99.48% | — | → 0.97x | 0 | — | — | 9m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.91% | 96.43% | 55.08% | 55.08% | — | ↓ 0.78x | 0 | — | — | 14m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 96.63% | 97.87% | 99.76% | 99.76% | — | ↓ 0.92x | 0 | — | — | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 96.24% | 90.16% | 99.93% | 99.93% | — | → 1.04x | 0 | — | — | 7m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 96.08% | 99.01% | 81.53% | 81.53% | — | ↑ 1.59x | 0 | — | — | 1m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 95.81% | 95.97% | 97.85% | 97.85% | — | → 1.04x | 0 | — | — | 11m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 94.83% | 93.76% | 95.25% | 95.25% | — | ↓ 0.93x | 0 | — | — | 12m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 93.54% | 91.37% | 1.90% | 1.90% | — | ↓ 0.82x | 0 | — | — | 5m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 92.48% | 97.96% | 99.56% | 99.56% | — | → 0.95x | 0 | — | — | 7m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 92.36% | 97.30% | 96.32% | 96.32% | — | ↓ 0.32x | 0 | — | — | 2m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 92.11% | 93.25% | 99.83% | 99.83% | — | ↓ 0.67x | 0 | — | — | 33s ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 91.26% | 92.91% | 96.10% | 96.10% | — | ↓ 0.69x | 0 | — | — | 12m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 90.55% | 91.22% | 66.05% | 66.05% | — | ↓ 0.81x | 0 | — | — | 13m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 89.04% | 90.38% | 40.01% | 40.01% | — | ↓ 0.65x | 0 | — | — | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 88.90% | 97.03% | 24.91% | 24.91% | — | ↓ 0.74x | 0 | — | — | 2m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 85.18% | 96.24% | 99.76% | 99.76% | — | ↑ 1.36x | 0 | — | — | 11m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 84.80% | 78.97% | 97.75% | 97.75% | — | → 1.00x | 0 | — | — | 32s ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 84.76% | 71.24% | 44.99% | 44.99% | — | ↑ 1.21x | 0 | — | — | 1m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 79.92% | 80.44% | 99.92% | 99.92% | — | ↓ 0.76x | 0 | — | — | 7m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 74.49% | 81.78% | 83.85% | 83.85% | — | ↑ 1.32x | 0 | — | — | 34s ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 73.85% | 82.27% | 67.23% | 67.23% | — | ↑ 1.27x | 0 | — | — | 8m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 73.75% | 80.13% | 78.01% | 78.01% | — | ↓ 0.94x | 0 | — | — | 8m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 67.36% | 77.72% | 54.05% | 54.05% | — | ↑ 1.25x | 0 | — | — | 8m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 63.70% | 73.53% | 94.11% | 94.11% | — | → 0.96x | 0 | — | — | 8m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 62.07% | 72.16% | 78.42% | 78.42% | — | → 0.98x | 0 | — | — | 11m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 61.45% | 71.96% | 86.29% | 86.29% | — | ↑ 1.38x | 0 | — | — | 5m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 59.80% | 72.91% | 48.46% | 48.46% | — | ↓ 0.89x | 0 | — | — | 33s ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 54.05% | 86.98% | 96.87% | 96.87% | — | ↓ 0.88x | 0 | — | — | 10m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 53.90% | 68.71% | 98.37% | 98.37% | — | ↑ 1.86x | 0 | — | — | 10m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 52.39% | 64.05% | 99.65% | 99.65% | — | → 0.98x | 0 | — | — | 4m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 34.63% | 84.37% | 95.68% | 95.68% | — | ↓ 0.69x | 0 | — | — | 8m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 29.75% | 17.98% | 97.57% | 97.57% | — | ↓ 0.82x | 0 | — | — | 6m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 27.92% | 67.80% | 25.44% | 25.44% | — | ↓ 0.75x | 0 | — | — | 13m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 25.76% | 44.32% | 87.63% | 87.63% | — | ↑ 2.05x | 0 | — | — | 1m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 12.76% | 2.98% | 98.16% | 98.16% | — | → 1.00x | 0 | — | — | 10s ago |

</details>

<details open>
<summary><strong>🔴 Down (387)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 99.82% | — | — | — | ↓ 0.64x | 0 | — | — | 9m ago |
| [JembatanAI](https://lmspeed.net/provider/jembatanai) | 100.00% | 99.89% | — | — | — | ↓ 0.91x | 0 | — | — | 8m ago |
| [KiosAPI](https://lmspeed.net/provider/kiosapi) | 100.00% | 98.52% | — | — | — | ↓ 0.72x | 0 | — | — | 8m ago |
| [LinoRoute](https://lmspeed.net/provider/linoroute) | 100.00% | 99.72% | — | — | — | → 1.02x | 0 | — | — | 8m ago |
| [Openference](https://lmspeed.net/provider/openference) | 100.00% | 99.79% | — | — | — | → 1.04x | 0 | — | — | 8m ago |
| [优质企业级中转API 始终坚持只做 Pro 号池、高品质 ,尊重安全隐私。](https://lmspeed.net/provider/api-17nas-com) | 99.85% | 99.82% | 99.75% | 99.75% | — | → 1.00x | 0 | — | — | 9m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.85% | 99.68% | 100.00% | 100.00% | — | ↓ 0.85x | 0 | — | — | 9m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 99.85% | 99.58% | — | — | — | ↓ 0.94x | 0 | — | — | 9m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.85% | 99.86% | — | — | — | ↓ 0.92x | 0 | — | — | 8m ago |
| [iTokens](https://lmspeed.net/provider/itokens) | 99.85% | 99.37% | — | — | — | → 0.97x | 0 | — | — | 8m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.71% | 99.63% | 66.42% | 66.42% | — | → 0.99x | 0 | — | — | 2m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.70% | 38.10% | 98.59% | 98.59% | — | → 0.97x | 0 | — | — | 11m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.70% | 99.79% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 9m ago |
| [柚子的公益站](https://lmspeed.net/provider/provider-ai-bayunzi-shop) | 99.70% | 99.82% | — | — | — | ↓ 0.90x | 0 | — | — | 9m ago |
| [Profundo AI](https://lmspeed.net/provider/profundo-ai) | 99.70% | 99.40% | — | — | — | → 0.99x | 0 | — | — | 8m ago |
| [QuartzRouter](https://lmspeed.net/provider/quartzrouter) | 99.70% | 99.65% | — | — | — | ↓ 0.88x | 0 | — | — | 8m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.70% | 99.65% | — | — | — | → 0.99x | 0 | — | — | 8m ago |
| [Yomi API](https://lmspeed.net/provider/yomi-api) | 99.70% | 99.58% | — | — | — | ↓ 0.94x | 0 | — | — | 8m ago |
| [IMIKUFANS-CyaniAgent](https://lmspeed.net/provider/mix-api) | 99.57% | 97.42% | 38.36% | 38.36% | — | ↓ 0.92x | 0 | — | — | 2m ago |
| [PollyAI](https://lmspeed.net/provider/pollyai) | 99.54% | 99.58% | — | — | — | ↓ 0.92x | 0 | — | — | 8m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.41% | 99.38% | 98.95% | 98.95% | — | ↓ 0.84x | 0 | — | — | 13m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 99.39% | 88.49% | — | — | — | ↓ 0.80x | 0 | — | — | 9m ago |
| [【公益】莱斯超级API](https://lmspeed.net/provider/laisiapi) | 99.24% | 96.83% | — | — | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.10% | 99.55% | 99.94% | 99.94% | — | → 0.96x | 0 | — | — | 10m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 99.09% | 99.51% | — | — | — | → 0.97x | 0 | — | — | 8m ago |
| [YearnstudioAI](https://lmspeed.net/provider/yearnstudio) | 98.33% | 98.77% | — | — | — | ↑ 1.15x | 0 | — | — | 8m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 95.92% | 97.64% | — | — | — | ↑ 1.69x | 0 | — | — | 8m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 88.62% | 97.11% | — | — | — | → 0.98x | 0 | — | — | 8m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 86.33% | 96.63% | 99.74% | 99.74% | — | ↓ 0.90x | 0 | — | — | 7m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 79.97% | 89.57% | — | — | — | ↓ 0.92x | 0 | — | — | 9m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 66.90% | 91.55% | 5.08% | 5.08% | — | → 0.96x | 0 | — | — | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 63.28% | 75.20% | 98.89% | 98.89% | — | → 0.98x | 0 | — | — | 8m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 61.93% | 72.86% | 87.06% | 87.06% | — | ↑ 1.29x | 0 | — | — | 13s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 60.82% | 72.74% | 10.72% | 10.72% | — | ↑ 1.15x | 0 | — | — | 13s ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 58.49% | 67.25% | 83.10% | 83.10% | — | ↑ 1.49x | 0 | — | — | 13m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 56.77% | 21.60% | 86.83% | 86.83% | — | ↑ 1.25x | 0 | — | — | 2m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 56.56% | 66.50% | 75.72% | 75.72% | — | → 1.01x | 0 | — | — | 7m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 55.97% | 69.09% | 66.07% | 66.07% | — | ↑ 1.10x | 0 | — | — | 8m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 55.54% | 79.20% | — | — | — | ↑ 2.36x | 0 | — | — | 9m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 55.31% | 66.78% | 23.09% | 23.09% | — | ↑ 1.42x | 0 | — | — | 6m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 54.97% | 67.36% | 44.62% | 44.62% | — | → 0.98x | 0 | — | — | 13s ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 54.58% | 67.98% | 75.11% | 75.11% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 53.60% | 61.16% | 96.79% | 96.79% | — | ↑ 1.18x | 0 | — | — | 2m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 53.23% | 88.14% | 32.40% | 32.40% | — | ↓ 0.78x | 0 | — | — | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 53.21% | 64.69% | 99.09% | 99.09% | — | ↓ 0.93x | 0 | — | — | 7m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 52.40% | 65.71% | 6.48% | 6.48% | — | ↑ 1.19x | 0 | — | — | 10m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 52.05% | 62.64% | 68.13% | 68.13% | — | → 0.98x | 0 | — | — | 4m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 50.14% | 62.70% | 98.92% | 98.92% | — | ↓ 0.81x | 0 | — | — | 8m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 50.00% | 62.18% | 68.41% | 68.41% | — | → 0.96x | 0 | — | — | 8m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 49.17% | 61.69% | 50.52% | 50.52% | — | → 0.98x | 0 | — | — | 8m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 49.03% | 61.62% | 64.20% | 64.20% | — | → 1.03x | 0 | — | — | 7m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 48.95% | 59.59% | 63.15% | 63.15% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 47.92% | 58.18% | 91.98% | 91.98% | — | ↓ 0.90x | 0 | — | — | 8m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 47.49% | 61.32% | 86.23% | 86.23% | — | ↓ 0.82x | 0 | — | — | 7m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 47.21% | 60.87% | 96.32% | 96.32% | — | ↑ 1.06x | 0 | — | — | 6m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 46.70% | 60.34% | 98.53% | 98.53% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 45.29% | 57.17% | 54.78% | 54.78% | — | → 0.95x | 0 | — | — | 5m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 43.38% | 45.43% | 91.72% | 91.72% | — | ↓ 0.94x | 0 | — | — | 59s ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 40.67% | 51.56% | 93.16% | 93.16% | — | → 1.02x | 0 | — | — | 33s ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 39.80% | 48.45% | 93.77% | 93.77% | — | ↑ 1.08x | 0 | — | — | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 38.27% | 59.72% | 99.80% | 99.80% | — | ↓ 0.60x | 0 | — | — | 6m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 36.38% | 56.70% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 10m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 34.83% | 31.61% | 45.98% | 45.98% | — | ↓ 0.64x | 0 | — | — | 5m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 33.89% | 50.20% | 52.45% | 52.45% | — | → 1.00x | 0 | — | — | 8m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 32.54% | 40.10% | 99.78% | 99.78% | — | → 1.00x | 0 | — | — | 7m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 32.50% | 20.49% | 7.76% | 7.76% | — | ↓ 0.86x | 0 | — | — | 12m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 32.08% | 11.64% | 69.01% | 69.01% | — | ↓ 0.91x | 0 | — | — | 1m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 31.47% | 61.77% | — | — | — | ↑ 1.86x | 0 | — | — | 9m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 30.22% | 34.46% | 70.89% | 70.89% | — | → 0.98x | 0 | — | — | 7m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 20.75% | 19.61% | — | — | — | → 0.96x | 0 | — | — | 9m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 14.89% | 23.92% | 99.85% | 99.85% | — | ↓ 0.91x | 0 | — | — | 9m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 7.06% | 3.35% | 22.80% | 22.80% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 0 | — | — | 32s ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 0.00% | 54.96% | 97.94% | 97.94% | — | — | 0 | — | — | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.78% | 70.78% | — | — | 0 | — | — | 33s ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 0 | — | — | 10s ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 0 | — | — | 2m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 0.00% | 0.00% | 99.61% | 99.61% | — | — | 0 | — | — | 8m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 0 | — | — | 8m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.00% | 88.73% | 88.73% | — | — | 0 | — | — | 12m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 0 | — | — | 13m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 0 | — | — | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 0 | — | — | 5m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.00% | 79.86% | 79.86% | — | — | 0 | — | — | 13m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 64.61% | 64.61% | — | — | 0 | — | — | 13m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 40.15% | 40.15% | — | — | 0 | — | — | 4m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 76.64% | 76.64% | — | — | 0 | — | — | 5m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 0 | — | — | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 0.00% | 0.00% | 88.70% | 88.70% | — | — | 0 | — | — | 13m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.00% | 99.65% | 99.65% | — | — | 0 | — | — | 11m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 0 | — | — | 12m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 0 | — | — | 13m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 0.00% | 0.00% | 83.18% | 83.18% | — | — | 0 | — | — | 1m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.66% | 83.66% | — | — | 0 | — | — | 8m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 0 | — | — | 1m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 0 | — | — | 7m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 0 | — | — | 8m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 0 | — | — | 6m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 0 | — | — | 7m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 0 | — | — | 4m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.00% | 83.11% | 83.11% | — | — | 0 | — | — | 12m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 0 | — | — | 53s ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 0 | — | — | 1m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.39% | 87.39% | — | — | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 0 | — | — | 1m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 0.00% | 68.70% | 68.70% | — | — | 0 | — | — | 10m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 0 | — | — | 4m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.00% | 98.15% | 98.15% | — | — | 0 | — | — | 5m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.64% | 78.64% | — | — | 0 | — | — | 14m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 0.00% | 0.00% | 99.93% | 99.93% | — | — | 0 | — | — | 9m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 0 | — | — | 2m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 0 | — | — | 11m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 0 | — | — | 10m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.00% | 48.90% | 48.90% | — | — | 0 | — | — | 5m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.00% | 90.67% | 90.67% | — | — | 0 | — | — | 9m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 47.85% | 47.85% | — | — | 0 | — | — | 5m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 0.00% | 49.41% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.88% | 31.88% | — | — | 0 | — | — | 1m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.00% | 99.73% | 99.73% | — | — | 0 | — | — | 11m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 0 | — | — | 5m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.34% | 32.34% | — | — | 0 | — | — | 10m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 0 | — | — | 14m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 0 | — | — | 2m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 0 | — | — | 5m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.00% | 96.06% | 96.06% | — | — | 0 | — | — | 5m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.00% | 69.29% | 69.29% | — | — | 0 | — | — | 12m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.00% | 64.35% | 64.35% | — | — | 0 | — | — | 1m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 10m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 0 | — | — | 14m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.00% | 98.70% | 98.70% | — | — | 0 | — | — | 10m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 0.00% | 97.23% | 97.23% | — | — | 0 | — | — | 9m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 0 | — | — | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 0 | — | — | 12m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 0.00% | 0.00% | 90.79% | 90.79% | — | — | 0 | — | — | 13m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.00% | 98.37% | 98.37% | — | — | 0 | — | — | 33s ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 0 | — | — | 2m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 0.00% | 0.00% | 64.92% | 64.92% | — | — | 0 | — | — | 1m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 0.00% | 39.85% | 97.74% | 97.74% | — | — | 0 | — | — | 14m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 11m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 0.00% | 0.00% | 98.45% | 98.45% | — | — | 0 | — | — | 4m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 0.00% | 0.00% | 99.27% | 99.27% | — | — | 0 | — | — | 1m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 0 | — | — | 12m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 0.00% | 18.99% | 98.00% | 98.00% | — | — | 0 | — | — | 1m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 0.00% | 0.00% | 91.43% | 91.43% | — | — | 0 | — | — | 9m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 0 | — | — | 8m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 0 | — | — | 53s ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 10m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 0.00% | 50.72% | 98.29% | 98.29% | — | — | 0 | — | — | 8m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 0 | — | — | 32s ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 0 | — | — | 6m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.00% | 99.92% | 99.92% | — | — | 0 | — | — | 11m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 0 | — | — | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.00% | 98.40% | 98.40% | — | — | 0 | — | — | 10m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.00% | 99.74% | 99.74% | — | — | 0 | — | — | 8m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13s ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 0 | — | — | 14m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.00% | 81.13% | 81.13% | — | — | 0 | — | — | 10s ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 0 | — | — | 4m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 0 | — | — | 8m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.00% | 99.84% | 99.84% | — | — | 0 | — | — | 7m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 10m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 0 | — | — | 53s ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 0 | — | — | 13m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 9m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 0 | — | — | 5m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 0 | — | — | 7m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 0 | — | — | 12m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 0 | — | — | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.90% | 47.90% | — | — | 0 | — | — | 53s ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.00% | 99.25% | 99.25% | — | — | 0 | — | — | 12m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 0 | — | — | 12m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.00% | 91.99% | 91.99% | — | — | 0 | — | — | 12m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 22.80% | 22.80% | — | — | 0 | — | — | 4m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.00% | 98.05% | 98.05% | — | — | 0 | — | — | 10m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 0 | — | — | 14m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 9m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 0 | — | — | 4m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 0 | — | — | 11m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 0 | — | — | 6m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 0 | — | — | 8m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 0 | — | — | 10m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 53s ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 0 | — | — | 4m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.00% | 75.74% | 75.74% | — | — | 0 | — | — | 11m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 0 | — | — | 7m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 0 | — | — | 13s ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.74% | 70.74% | — | — | 0 | — | — | 14s ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 0 | — | — | 5m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 0 | — | — | 13m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.00% | 34.65% | 34.65% | — | — | 0 | — | — | 2m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 0.00% | 56.37% | 99.68% | 99.68% | — | — | 0 | — | — | 4m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 0 | — | — | 8m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 0 | — | — | 6m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 16.76% | 38.64% | 38.64% | — | — | 0 | — | — | 4m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 22.32% | 22.32% | — | — | 0 | — | — | 7m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 0 | — | — | 4m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.00% | 91.04% | 91.04% | — | — | 0 | — | — | 11m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 0 | — | — | 13m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 0.00% | 0.00% | 88.31% | 88.31% | — | — | 0 | — | — | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 0 | — | — | 1m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 0.00% | 84.75% | 84.75% | — | — | 0 | — | — | 13m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.07% | 0.10% | 0.10% | — | — | 0 | — | — | 4m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.00% | 99.29% | 99.29% | — | — | 0 | — | — | 9m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 0 | — | — | 13m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 0 | — | — | 8m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 0.00% | 46.84% | 89.89% | 89.89% | — | — | 0 | — | — | 11m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.32% | 73.32% | — | — | 0 | — | — | 4m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 0 | — | — | 1m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 0 | — | — | 32s ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 67.08% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 0 | — | — | 7m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 0.00% | 6.55% | 98.87% | 98.87% | — | — | 0 | — | — | 6m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 0.00% | 0.00% | 98.69% | 98.69% | — | — | 0 | — | — | 13m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 0.00% | 0.00% | 98.35% | 98.35% | — | — | 0 | — | — | 13m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 20.82% | 20.82% | — | — | 0 | — | — | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.00% | 20.58% | 20.58% | — | — | 0 | — | — | 11m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 0 | — | — | 12m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 0 | — | — | 10s ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 0 | — | — | 5m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.00% | 92.62% | 92.62% | — | — | 0 | — | — | 7m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 10m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 0 | — | — | 8m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 27.77% | 27.77% | — | — | 0 | — | — | 1m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.33% | 22.33% | — | — | 0 | — | — | 6m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 0 | — | — | 6m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 0.00% | 0.00% | 98.93% | 98.93% | — | — | 0 | — | — | 8m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 10m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.10% | 49.10% | — | — | 0 | — | — | 5m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 0 | — | — | 7m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 7m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.07% | 65.07% | — | — | 0 | — | — | 13m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.00% | 99.12% | 99.12% | — | — | 0 | — | — | 5m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 0.00% | 32.36% | 60.60% | 60.60% | — | — | 0 | — | — | 2m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.00% | 92.19% | 92.19% | — | — | 0 | — | — | 10s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 0.00% | 0.00% | 96.14% | 96.14% | — | — | 0 | — | — | 10m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 13.77% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 7m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 0 | — | — | 4m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.00% | 92.63% | 92.63% | — | — | 0 | — | — | 10s ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 11m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 0 | — | — | 33s ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 0 | — | — | 11m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 0.00% | 0.00% | 81.07% | 81.07% | — | — | 0 | — | — | 2m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 0 | — | — | 4m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 0 | — | — | 2m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 0 | — | — | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.00% | 99.81% | 99.81% | — | — | 0 | — | — | 11m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 46.51% | 46.51% | — | — | 0 | — | — | 13m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 0.00% | 8.59% | 85.02% | 85.02% | — | — | 0 | — | — | 14m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.39% | 72.39% | — | — | 0 | — | — | 1m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 0 | — | — | 6m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.00% | 26.68% | 26.68% | — | — | 0 | — | — | 2m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.80% | 46.80% | — | — | 0 | — | — | 10m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 0 | — | — | 6m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 0 | — | — | 2m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.72% | 68.72% | — | — | 0 | — | — | 7m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 0 | — | — | 2m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 0 | — | — | 8m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.49% | 35.49% | — | — | 0 | — | — | 13m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 0 | — | — | 5m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 0 | — | — | 6m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 23.11% | 23.11% | — | — | 0 | — | — | 6m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.00% | 99.60% | 99.60% | — | — | 0 | — | — | 11m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [S1AI API](https://lmspeed.net/provider/s1ai-api) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 8m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 0 | — | — | 13s ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 0 | — | — | 1m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.60% | 22.60% | — | — | 0 | — | — | 11m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 56s ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.92% | 30.92% | — | — | 0 | — | — | 12m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.00% | 68.76% | 68.76% | — | — | 0 | — | — | 12m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 0 | — | — | 12m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.02% | 38.02% | — | — | 0 | — | — | 12m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.16% | 17.16% | — | — | 0 | — | — | 12m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 0 | — | — | 10s ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.00% | 23.40% | 23.40% | — | — | 0 | — | — | 2m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 0.00% | 1.05% | 99.06% | 99.06% | — | — | 0 | — | — | 9m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 0.00% | 0.00% | 82.00% | 82.00% | — | — | 0 | — | — | 9m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.00% | 99.53% | 99.53% | — | — | 0 | — | — | 8m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 0 | — | — | 4m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 21.71% | 21.71% | — | — | 0 | — | — | 5m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 0.00% | 0.00% | 99.87% | 99.87% | — | — | 0 | — | — | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 0 | — | — | 13m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 0 | — | — | 1m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 0.00% | 0.00% | 98.78% | 98.78% | — | — | 0 | — | — | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 0 | — | — | 12m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 0.00% | 0.00% | 98.12% | 98.12% | — | — | 0 | — | — | 14m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 0 | — | — | 12m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 0 | — | — | 6m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 0.00% | 0.00% | 99.88% | 99.88% | — | — | 0 | — | — | 10m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 32.96% | 32.96% | — | — | 0 | — | — | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 0 | — | — | 11m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.00% | 98.48% | 98.48% | — | — | 0 | — | — | 53s ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 0 | — | — | 14m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 0 | — | — | 10s ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 0.00% | 89.40% | 89.40% | — | — | 0 | — | — | 1m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 0 | — | — | 4m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 0.00% | 0.00% | 17.31% | 17.31% | — | — | 0 | — | — | 5m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 0 | — | — | 12m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 0 | — | — | 4m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 0.00% | 0.00% | 24.63% | 24.63% | — | — | 0 | — | — | 4m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 0 | — | — | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 60.97% | 60.97% | — | — | 0 | — | — | 13m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 0 | — | — | 6m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.35% | 1.35% | — | — | 0 | — | — | 12m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 0 | — | — | 1m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 0.00% | 0.00% | 99.78% | 99.78% | — | — | 0 | — | — | 5s ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 0.00% | 9.87% | 99.92% | 99.92% | — | — | 0 | — | — | 10m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 10m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.00% | 99.17% | 99.17% | — | — | 0 | — | — | 7m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 75.15% | 75.15% | — | — | 0 | — | — | 4m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 0 | — | — | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 0 | — | — | — |

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
