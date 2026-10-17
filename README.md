# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**720 providers** — 271 🟢 operational · 76 🟡 degraded · 371 🔴 down · 2 ⚫ unknown

_Updated 2026-10-17 07:37 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (271)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 99.43% | 99.82% | 99.82% | — | ↑ 1.12x | 0 | — | — | 11m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 100.00% | 99.97% | 63.31% | 63.31% | — | ↑ 1.36x | 0 | — | — | 5m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.82% | 99.45% | 99.45% | — | ↑ 1.40x | 0 | — | — | 11m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.63% | 93.57% | 93.57% | — | ↑ 1.22x | 0 | — | — | 8m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 100.00% | 98.51% | 99.34% | 99.34% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 99.72% | 100.00% | 100.00% | — | ↑ 1.31x | 0 | — | — | 12m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 100.00% | 100.00% | 99.33% | 99.33% | — | ↑ 1.49x | 0 | — | — | 13m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 100.00% | 99.97% | 31.33% | 31.33% | — | ↑ 1.40x | 0 | — | — | 14m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.73% | 97.57% | 97.57% | — | ↑ 1.37x | 0 | — | — | 4m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.75% | 99.61% | 99.61% | — | ↓ 0.92x | 0 | — | — | 12m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.90% | 66.50% | 66.50% | — | ↑ 1.15x | 0 | — | — | 57s ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.86% | 99.18% | 99.18% | — | ↑ 1.29x | 0 | — | — | 59s ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 99.61% | 99.51% | 99.51% | — | ↑ 1.39x | 0 | — | — | 13m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.31% | 50.15% | 50.15% | — | ↓ 0.74x | 0 | — | — | 2m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.93% | 99.98% | 99.98% | — | ↑ 1.26x | 0 | — | — | 12m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.72% | 90.95% | 90.95% | — | ↑ 1.14x | 0 | — | — | 1m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 100.00% | 99.93% | 0.11% | 0.11% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.90% | 22.94% | 22.94% | — | ↑ 1.54x | 0 | — | — | 5m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 100.00% | 99.90% | 99.49% | 99.49% | — | ↑ 1.95x | 0 | — | — | 8m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.44% | 99.94% | 99.94% | — | ↑ 1.15x | 0 | — | — | 12m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 100.00% | 98.43% | 98.43% | — | ↑ 1.16x | 0 | — | — | 14m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 100.00% | 99.65% | 100.00% | 100.00% | — | ↑ 1.32x | 0 | — | — | 11m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.79% | 99.48% | 99.48% | — | ↑ 1.24x | 0 | — | — | 5m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.17% | 91.09% | 91.09% | — | ↓ 0.94x | 0 | — | — | 1m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.86% | 99.65% | 99.65% | — | ↑ 1.79x | 0 | — | — | 7m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 91.51% | 89.73% | 89.73% | — | ↑ 1.21x | 0 | — | — | 7m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 100.00% | 99.76% | 43.48% | 43.48% | — | ↑ 1.13x | 0 | — | — | 32s ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.83% | 99.92% | 99.92% | — | ↑ 1.47x | 0 | — | — | 7m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 100.00% | 99.79% | — | — | — | ↑ 1.20x | 0 | — | — | 11m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.76% | 99.93% | 99.93% | — | ↑ 1.50x | 0 | — | — | 14m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.79% | 69.43% | 69.43% | — | ↓ 0.82x | 0 | — | — | 2m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.31% | 99.31% | — | ↑ 1.19x | 0 | — | — | 1m ago |
| [NightRouter](https://lmspeed.net/provider/nightrouter) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 100.00% | 99.33% | 0.00% | 0.00% | — | → 1.04x | 0 | — | — | 12m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 100.00% | 99.76% | 25.33% | 25.33% | — | ↑ 1.32x | 0 | — | — | 4m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 100.00% | 98.47% | 98.47% | — | ↑ 1.56x | 0 | — | — | 12s ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.90% | 99.30% | 99.30% | — | ↑ 1.19x | 0 | — | — | 36s ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.86% | 99.92% | 99.92% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 100.00% | 99.97% | 29.98% | 29.98% | — | ↑ 1.37x | 0 | — | — | 15m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 99.75% | — | — | — | → 0.97x | 0 | — | — | 11m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.86% | 76.90% | 76.90% | — | ↑ 1.25x | 0 | — | — | 37s ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.76% | 98.04% | 98.04% | — | ↑ 1.24x | 0 | — | — | 14m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.83% | 98.74% | 98.74% | — | ↑ 1.44x | 0 | — | — | 57s ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.86% | 99.86% | 76.22% | 76.22% | — | ↑ 1.22x | 0 | — | — | 7m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.86% | 99.86% | 99.81% | 99.81% | — | ↑ 1.17x | 0 | — | — | 7m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.86% | 99.83% | 99.94% | 99.94% | — | ↑ 1.84x | 0 | — | — | 7m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.86% | 99.93% | 99.96% | 99.96% | — | ↑ 1.48x | 0 | — | — | 7m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.86% | 99.46% | 99.65% | 99.65% | — | ↑ 1.16x | 0 | — | — | 7m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.86% | 99.90% | 98.00% | 98.00% | — | ↑ 1.25x | 0 | — | — | 7m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.86% | 99.69% | 99.90% | 99.90% | — | ↑ 1.92x | 0 | — | — | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 99.86% | 48.20% | 99.80% | 99.80% | — | ↑ 1.23x | 0 | — | — | 7m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.86% | 99.83% | 99.64% | 99.64% | — | ↑ 1.18x | 0 | — | — | 6m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.86% | 99.97% | 99.97% | 99.97% | — | ↑ 1.41x | 0 | — | — | 6m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.85% | 99.86% | 99.84% | 99.84% | — | ↑ 1.29x | 0 | — | — | 6m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.85% | 99.69% | 99.87% | 99.87% | — | ↑ 1.24x | 0 | — | — | 6m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.85% | 99.76% | 56.98% | 56.98% | — | ↑ 1.14x | 0 | — | — | 5m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.85% | 99.79% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 5m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.85% | 99.83% | 76.97% | 76.97% | — | ↑ 1.34x | 0 | — | — | 5m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.85% | 99.86% | 99.26% | 99.26% | — | ↑ 1.73x | 0 | — | — | 5m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.85% | 99.62% | 99.77% | 99.77% | — | ↑ 1.14x | 0 | — | — | 4m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.85% | 99.90% | 99.87% | 99.87% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.85% | 99.76% | 99.37% | 99.37% | — | ↑ 1.43x | 0 | — | — | 4m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.85% | 99.86% | 5.16% | 5.16% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.85% | 99.83% | 54.70% | 54.70% | — | ↑ 1.63x | 0 | — | — | 2m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.85% | 99.72% | 30.20% | 30.20% | — | ↑ 1.56x | 0 | — | — | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.85% | 99.55% | 62.65% | 62.65% | — | ↑ 1.16x | 0 | — | — | 2m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.85% | 99.79% | 98.73% | 98.73% | — | ↑ 1.22x | 0 | — | — | 2m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.85% | 99.38% | 99.61% | 99.61% | — | ↑ 1.66x | 0 | — | — | 2m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.85% | 99.72% | 99.35% | 99.35% | — | ↑ 1.36x | 0 | — | — | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 99.85% | 99.93% | 63.68% | 63.68% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.85% | 99.76% | 81.53% | 81.53% | — | ↑ 1.60x | 0 | — | — | 1m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.85% | 99.97% | 97.00% | 97.00% | — | → 1.03x | 0 | — | — | 59s ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.85% | 97.67% | 96.18% | 96.18% | — | ↑ 1.11x | 0 | — | — | 58s ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.85% | 99.83% | 58.17% | 58.17% | — | ↑ 1.10x | 0 | — | — | 58s ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.85% | 99.58% | 98.38% | 98.38% | — | ↑ 1.13x | 0 | — | — | 58s ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.85% | 99.90% | 98.90% | 98.90% | — | ↑ 1.49x | 0 | — | — | 59s ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.85% | 99.76% | 28.39% | 28.39% | — | ↑ 1.23x | 0 | — | — | 57s ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.85% | 97.53% | 99.83% | 99.83% | — | ↓ 0.74x | 0 | — | — | 56s ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.85% | 98.99% | 99.10% | 99.10% | — | ↑ 2.39x | 0 | — | — | 36s ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.85% | 99.69% | 96.69% | 96.69% | — | ↑ 1.50x | 0 | — | — | 32s ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.85% | 99.90% | 92.20% | 92.20% | — | ↑ 1.36x | 0 | — | — | 32s ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.85% | 99.86% | 98.73% | 98.73% | — | ↑ 1.30x | 0 | — | — | 37s ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.85% | 99.86% | 98.85% | 98.85% | — | ↑ 1.43x | 0 | — | — | 11s ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.85% | 99.65% | 98.81% | 98.81% | — | ↑ 1.16x | 0 | — | — | 12s ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.84% | 99.83% | 98.81% | 98.81% | — | ↑ 1.21x | 0 | — | — | 15m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.84% | 95.81% | 95.85% | 95.85% | — | ↑ 1.37x | 0 | — | — | 14m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.84% | 99.93% | 98.02% | 98.02% | — | ↑ 1.68x | 0 | — | — | 14m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.84% | 99.79% | 100.00% | 100.00% | — | ↑ 1.60x | 0 | — | — | 14m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.84% | 99.83% | 98.37% | 98.37% | — | ↑ 1.35x | 0 | — | — | 14m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.84% | 99.72% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.84% | 99.76% | 96.80% | 96.80% | — | ↑ 1.28x | 0 | — | — | 14m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.84% | 99.16% | 93.06% | 93.06% | — | ↑ 1.09x | 0 | — | — | 14m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.84% | 99.79% | 93.73% | 93.73% | — | ↑ 1.22x | 0 | — | — | 14m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.84% | 98.95% | 98.47% | 98.47% | — | ↑ 1.09x | 0 | — | — | 14m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.84% | 87.16% | 98.16% | 98.16% | — | ↑ 1.11x | 0 | — | — | 14m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.84% | 99.79% | 97.87% | 97.87% | — | ↑ 1.50x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.84% | 99.76% | 99.97% | 99.97% | — | ↑ 1.34x | 0 | — | — | 14m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.84% | 99.68% | 96.89% | 96.89% | — | ↑ 1.08x | 0 | — | — | 13m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.84% | 99.82% | 98.88% | 98.88% | — | ↑ 1.35x | 0 | — | — | 13m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.84% | 99.89% | 100.00% | 100.00% | — | ↑ 1.29x | 0 | — | — | 13m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.84% | 99.68% | 99.97% | 99.97% | — | ↑ 1.15x | 0 | — | — | 12m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.84% | 99.12% | 16.67% | 16.67% | — | → 0.96x | 0 | — | — | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.84% | 99.68% | 99.86% | 99.86% | — | → 1.01x | 0 | — | — | 12m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.84% | 99.82% | 99.95% | 99.95% | — | ↑ 1.32x | 0 | — | — | 12m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.84% | 99.89% | 99.98% | 99.98% | — | ↑ 1.05x | 0 | — | — | 12m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.84% | 99.82% | 99.09% | 99.09% | — | ↑ 1.14x | 0 | — | — | 11m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.84% | 99.79% | 99.85% | 99.85% | — | ↑ 1.60x | 0 | — | — | 11m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.84% | 99.58% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 11m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.84% | 99.58% | 99.77% | 99.77% | — | ↑ 1.16x | 0 | — | — | 11m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 99.84% | 98.69% | 99.88% | 99.88% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 99.84% | 99.82% | — | — | — | → 1.03x | 0 | — | — | 11m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.84% | 99.82% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.84% | 99.89% | 60.72% | 60.72% | — | ↑ 1.42x | 0 | — | — | 11m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.84% | 99.79% | — | — | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [APIArc](https://lmspeed.net/provider/apiarc) | 99.84% | 99.86% | — | — | — | ↑ 1.20x | 0 | — | — | 9m ago |
| [跑路中转站](https://lmspeed.net/provider/mrcwoods) | 99.84% | 98.72% | — | — | — | → 0.96x | 0 | — | — | 9m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.73% | 99.77% | 99.98% | 99.98% | — | ↑ 2.24x | 0 | — | — | 8m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.73% | 99.80% | 98.78% | 98.78% | — | ↑ 1.25x | 0 | — | — | 8m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.72% | 99.73% | 99.95% | 99.95% | — | ↑ 1.38x | 0 | — | — | 8m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.72% | 99.83% | 99.74% | 99.74% | — | ↑ 2.18x | 0 | — | — | 7m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.72% | 99.43% | 49.74% | 49.74% | — | ↑ 1.46x | 0 | — | — | 7m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.71% | 99.83% | 99.74% | 99.74% | — | ↑ 1.26x | 0 | — | — | 7m ago |
| [xAI](https://lmspeed.net/provider/xai) | 99.71% | 99.86% | 23.13% | 23.13% | — | ↑ 1.52x | 0 | — | — | 7m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.71% | 99.83% | 99.90% | 99.90% | — | ↑ 1.44x | 0 | — | — | 7m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.71% | 99.66% | 99.49% | 99.49% | — | ↑ 1.18x | 0 | — | — | 6m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.71% | 99.69% | 100.00% | 100.00% | — | ↑ 1.29x | 0 | — | — | 6m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.71% | 99.63% | 76.89% | 76.89% | — | ↑ 1.20x | 0 | — | — | 6m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.71% | 99.73% | 99.85% | 99.85% | — | ↑ 1.30x | 0 | — | — | 6m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.71% | 99.69% | 99.62% | 99.62% | — | ↑ 1.69x | 0 | — | — | 6m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.71% | 99.86% | 99.02% | 99.02% | — | ↑ 1.43x | 0 | — | — | 6m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.71% | 99.69% | 80.20% | 80.20% | — | ↑ 1.24x | 0 | — | — | 5m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.71% | 99.86% | 99.95% | 99.95% | — | ↑ 1.13x | 0 | — | — | 5m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.70% | 99.79% | 27.04% | 27.04% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.70% | 99.83% | 99.88% | 99.88% | — | ↑ 1.17x | 0 | — | — | 2m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.70% | 99.27% | 69.87% | 69.87% | — | ↓ 0.89x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.69% | 99.65% | 83.46% | 83.46% | — | ↑ 1.11x | 0 | — | — | 1m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.69% | 99.79% | 82.26% | 82.26% | — | ↑ 1.18x | 0 | — | — | 1m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.69% | 99.86% | 90.32% | 90.32% | — | → 1.00x | 0 | — | — | 1m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.69% | 99.79% | 97.21% | 97.21% | — | ↑ 1.10x | 0 | — | — | 59s ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.69% | 99.20% | 77.59% | 77.59% | — | → 1.01x | 0 | — | — | 57s ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.69% | 99.72% | 99.64% | 99.64% | — | → 1.05x | 0 | — | — | 31s ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.69% | 99.72% | 99.83% | 99.83% | — | ↑ 1.46x | 0 | — | — | 32s ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.69% | 99.76% | 26.43% | 26.43% | — | ↑ 1.13x | 0 | — | — | 32s ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.69% | 98.50% | 98.96% | 98.96% | — | → 0.96x | 0 | — | — | 32s ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.69% | 98.99% | 91.87% | 91.87% | — | ↑ 1.28x | 0 | — | — | 36s ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.69% | 99.86% | 98.56% | 98.56% | — | ↑ 1.36x | 0 | — | — | 12s ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.69% | 99.72% | 98.11% | 98.11% | — | → 1.02x | 0 | — | — | 12s ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.69% | 99.69% | 99.76% | 99.76% | — | ↑ 1.10x | 0 | — | — | 12s ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.69% | 99.76% | 28.78% | 28.78% | — | ↑ 1.37x | 0 | — | — | 14m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.69% | 99.79% | 98.78% | 98.78% | — | ↑ 1.56x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.69% | 99.79% | 99.87% | 99.87% | — | → 1.02x | 0 | — | — | 14m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.69% | 99.41% | 99.82% | 99.82% | — | ↑ 1.06x | 0 | — | — | 14m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.69% | 99.16% | 99.86% | 99.86% | — | ↑ 1.20x | 0 | — | — | 14m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.69% | 99.23% | 97.10% | 97.10% | — | ↑ 1.23x | 0 | — | — | 14m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 99.69% | 94.58% | 95.25% | 95.25% | — | ↓ 0.94x | 0 | — | — | 14m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.69% | 99.58% | 14.21% | 14.21% | — | ↑ 1.28x | 0 | — | — | 14m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.69% | 99.54% | 97.07% | 97.07% | — | ↑ 1.06x | 0 | — | — | 13m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.69% | 99.51% | 100.00% | 100.00% | — | ↑ 1.18x | 0 | — | — | 13m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.69% | 99.82% | 97.35% | 97.35% | — | ↑ 1.22x | 0 | — | — | 13m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.68% | 99.65% | 99.95% | 99.95% | — | ↑ 1.20x | 0 | — | — | 13m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.68% | 99.72% | 99.10% | 99.10% | — | ↑ 1.40x | 0 | — | — | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.68% | 99.68% | 87.87% | 87.87% | — | ↑ 1.09x | 0 | — | — | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.68% | 99.82% | 0.00% | 0.00% | — | ↑ 1.39x | 0 | — | — | 12m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.68% | 99.54% | 99.67% | 99.67% | — | → 1.02x | 0 | — | — | 12m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.68% | 99.93% | 99.97% | 99.97% | — | ↑ 1.33x | 0 | — | — | 12m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.68% | 99.72% | 99.98% | 99.98% | — | → 1.05x | 0 | — | — | 12m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.68% | 99.72% | 24.52% | 24.52% | — | ↑ 1.09x | 0 | — | — | 12m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 99.68% | 99.82% | 93.54% | 93.54% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.68% | 99.89% | 99.92% | 99.92% | — | ↑ 1.49x | 0 | — | — | 11m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.68% | 99.79% | 99.61% | 99.61% | — | ↑ 1.35x | 0 | — | — | 11m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.68% | 99.22% | 100.00% | 100.00% | — | ↑ 1.48x | 0 | — | — | 11m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.68% | 98.62% | 91.90% | 91.90% | — | ↓ 0.91x | 0 | — | — | 11m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.68% | 98.66% | 100.00% | 100.00% | — | ↓ 0.93x | 0 | — | — | 11m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 99.68% | 87.72% | 0.00% | 0.00% | — | ↑ 1.18x | 0 | — | — | 11m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.68% | 99.82% | 99.67% | 99.67% | — | → 0.97x | 0 | — | — | 11m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.68% | 99.33% | 100.00% | 100.00% | — | ↑ 1.14x | 0 | — | — | 11m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.68% | 99.79% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 11m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 99.68% | 69.85% | 76.63% | 76.63% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.59% | 99.70% | 99.98% | 99.98% | — | ↑ 1.49x | 0 | — | — | 8m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.58% | 99.70% | 75.23% | 75.23% | — | ↑ 1.88x | 0 | — | — | 8m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.58% | 99.86% | 17.47% | 17.47% | — | ↑ 1.67x | 0 | — | — | 7m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.57% | 99.63% | 97.98% | 97.98% | — | ↑ 1.49x | 0 | — | — | 7m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.57% | 99.53% | 99.58% | 99.58% | — | ↑ 1.19x | 0 | — | — | 7m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.57% | 99.73% | 99.58% | 99.58% | — | → 1.02x | 0 | — | — | 7m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.57% | 99.66% | 76.88% | 76.88% | — | ↑ 1.29x | 0 | — | — | 6m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.56% | 99.66% | 99.92% | 99.92% | — | ↑ 1.21x | 0 | — | — | 6m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.56% | 99.69% | 99.77% | 99.77% | — | ↑ 1.72x | 0 | — | — | 6m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.56% | 99.52% | 38.65% | 38.65% | — | ↑ 1.50x | 0 | — | — | 5m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.56% | 99.80% | 99.90% | 99.90% | — | ↑ 1.22x | 0 | — | — | 5m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.56% | 98.43% | 97.28% | 97.28% | — | ↑ 1.10x | 0 | — | — | 5m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.56% | 99.28% | 85.28% | 85.28% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.56% | 99.62% | 88.17% | 88.17% | — | ↑ 1.34x | 0 | — | — | 4m ago |
| [PackyCode](https://lmspeed.net/provider/codex-api-packycode-com) | 99.55% | 99.31% | 99.09% | 99.09% | — | → 0.99x | 0 | — | — | 2m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.55% | 99.62% | 24.91% | 24.91% | — | ↑ 1.30x | 0 | — | — | 2m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.55% | 99.76% | 31.58% | 31.58% | — | ↑ 1.28x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.55% | 99.72% | 93.26% | 93.26% | — | ↑ 1.56x | 0 | — | — | 2m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.55% | 99.79% | 65.57% | 65.57% | — | ↑ 1.29x | 0 | — | — | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.54% | 99.72% | 68.50% | 68.50% | — | → 1.03x | 0 | — | — | 2m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.54% | 99.86% | 99.89% | 99.89% | — | ↑ 1.08x | 0 | — | — | 59s ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.54% | 99.72% | 89.57% | 89.57% | — | ↑ 1.47x | 0 | — | — | 59s ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.54% | 99.58% | 99.82% | 99.82% | — | ↑ 1.11x | 0 | — | — | 59s ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.54% | 99.79% | 99.86% | 99.86% | — | ↑ 1.19x | 0 | — | — | 36s ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.54% | 96.35% | 56.85% | 56.85% | — | ↓ 0.73x | 0 | — | — | 36s ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.54% | 99.65% | 99.95% | 99.95% | — | ↑ 1.22x | 0 | — | — | 32s ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.53% | 99.76% | 97.80% | 97.80% | — | ↑ 1.14x | 0 | — | — | 14m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.53% | 99.48% | 32.93% | 32.93% | — | → 1.04x | 0 | — | — | 14m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.53% | 99.65% | 99.71% | 99.71% | — | ↑ 1.81x | 0 | — | — | 14m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.53% | 99.86% | 99.08% | 99.08% | — | ↑ 1.14x | 0 | — | — | 13m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.53% | 99.79% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 13m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.52% | 99.65% | 99.85% | 99.85% | — | ↑ 1.56x | 0 | — | — | 12m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.52% | 99.65% | 99.92% | 99.92% | — | ↓ 0.64x | 0 | — | — | 11m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.52% | 98.48% | — | — | — | ↓ 0.58x | 0 | — | — | 11m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.52% | 98.97% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 11m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.52% | 99.79% | 100.00% | 100.00% | — | ↑ 1.12x | 0 | — | — | 11m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.52% | 99.11% | — | — | — | → 0.97x | 0 | — | — | 11m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 99.52% | 99.72% | 99.66% | 99.66% | — | ↓ 0.87x | 0 | — | — | 11m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.44% | 98.92% | 99.76% | 99.76% | — | ↑ 2.11x | 0 | — | — | 8m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.43% | 99.42% | 51.42% | 51.42% | — | ↑ 1.11x | 0 | — | — | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.43% | 94.45% | 96.43% | 96.43% | — | ↑ 1.37x | 0 | — | — | 7m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.42% | 99.69% | 99.91% | 99.91% | — | ↑ 1.62x | 0 | — | — | 7m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.41% | 99.08% | 99.79% | 99.79% | — | → 1.05x | 0 | — | — | 5m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.41% | 99.55% | 22.30% | 22.30% | — | ↑ 1.46x | 0 | — | — | 5m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.41% | 99.69% | 99.34% | 99.34% | — | ↑ 1.21x | 0 | — | — | 5m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.41% | 99.69% | 77.28% | 77.28% | — | → 1.03x | 0 | — | — | 4m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.41% | 99.55% | 99.67% | 99.67% | — | ↑ 1.19x | 0 | — | — | 4m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.40% | 99.52% | 57.00% | 57.00% | — | ↑ 1.38x | 0 | — | — | 2m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.40% | 98.83% | 96.32% | 96.32% | — | ↓ 0.46x | 0 | — | — | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.40% | 99.69% | 2.34% | 2.34% | — | → 0.98x | 0 | — | — | 2m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.39% | 99.62% | 77.97% | 77.97% | — | ↑ 1.56x | 0 | — | — | 1m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.38% | 99.34% | 99.00% | 99.00% | — | ↑ 1.23x | 0 | — | — | 58s ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.38% | 99.13% | 99.74% | 99.74% | — | → 0.96x | 0 | — | — | 14m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.38% | 98.88% | 98.83% | 98.83% | — | ↑ 1.24x | 0 | — | — | 14m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.38% | 99.65% | 96.94% | 96.94% | — | ↑ 1.38x | 0 | — | — | 14m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.38% | 97.73% | 97.48% | 97.48% | — | ↑ 1.28x | 0 | — | — | 14m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.38% | 96.92% | 97.00% | 97.00% | — | ↑ 1.38x | 0 | — | — | 14m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 99.38% | 65.05% | 74.74% | 74.74% | — | ↑ 1.16x | 0 | — | — | 14m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.38% | 99.48% | 0.69% | 0.69% | — | ↓ 0.90x | 0 | — | — | 14m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.37% | 99.65% | 99.70% | 99.70% | — | ↑ 1.07x | 0 | — | — | 13m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 99.37% | 88.39% | 25.49% | 25.49% | — | ↑ 1.35x | 0 | — | — | 13m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.37% | 99.79% | 0.00% | 0.00% | — | ↑ 1.62x | 0 | — | — | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.36% | 32.17% | 39.40% | 39.40% | — | → 1.04x | 0 | — | — | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.36% | 99.40% | 99.95% | 99.95% | — | ↑ 1.15x | 0 | — | — | 12m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.36% | 99.61% | 99.48% | 99.48% | — | ↑ 1.14x | 0 | — | — | 11m ago |
| [Jectora](https://lmspeed.net/provider/jectora) | 99.35% | 99.68% | — | — | — | ↑ 1.20x | 0 | — | — | 9m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.32% | 99.63% | 68.59% | 68.59% | — | ↑ 1.32x | 0 | — | — | 8m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.30% | 99.70% | 95.68% | 95.68% | — | ↑ 1.50x | 0 | — | — | 8m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.30% | 99.39% | 99.75% | 99.75% | — | ↑ 2.20x | 0 | — | — | 8m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.29% | 99.70% | 99.56% | 99.56% | — | ↑ 1.14x | 0 | — | — | 7m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.28% | 99.49% | 99.73% | 99.73% | — | ↑ 1.15x | 0 | — | — | 7m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.26% | 99.66% | 24.53% | 24.53% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.26% | 99.55% | 99.03% | 99.03% | — | → 1.05x | 0 | — | — | 4m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.25% | 99.55% | 26.84% | 26.84% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.24% | 99.59% | 63.14% | 63.14% | — | ↑ 1.25x | 0 | — | — | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.24% | 99.03% | 98.88% | 98.88% | — | ↑ 1.24x | 0 | — | — | 2m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.23% | 98.30% | 94.26% | 94.26% | — | ↑ 1.32x | 0 | — | — | 1m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.23% | 99.79% | 97.03% | 97.03% | — | ↑ 1.19x | 0 | — | — | 37s ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.21% | 98.32% | 98.75% | 98.75% | — | ↓ 0.57x | 0 | — | — | 13m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.21% | 97.37% | 96.10% | 96.10% | — | ↓ 0.77x | 0 | — | — | 13m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.21% | 99.61% | 99.97% | 99.97% | — | ↑ 1.32x | 0 | — | — | 12m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.20% | 99.33% | 100.00% | 100.00% | — | ↑ 1.32x | 0 | — | — | 12m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.18% | 99.47% | 36.33% | 36.33% | — | ↑ 1.19x | 0 | — | — | 8m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.15% | 99.39% | 99.62% | 99.62% | — | ↑ 2.02x | 0 | — | — | 7m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.14% | 98.34% | 99.92% | 99.92% | — | ↓ 0.64x | 0 | — | — | 7m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.13% | 98.98% | 5.08% | 5.08% | — | ↑ 1.25x | 0 | — | — | 6m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.11% | 99.38% | 24.54% | 24.54% | — | ↑ 1.20x | 0 | — | — | 4m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.09% | 98.86% | 74.11% | 74.11% | — | ↑ 1.33x | 0 | — | — | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.09% | 99.21% | 71.79% | 71.79% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.07% | 99.41% | 98.66% | 98.66% | — | ↑ 1.24x | 0 | — | — | 36s ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.07% | 99.44% | 86.85% | 86.85% | — | ↑ 1.10x | 0 | — | — | 14m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.05% | 99.61% | 99.76% | 99.76% | — | ↑ 1.20x | 0 | — | — | 12m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.03% | 99.13% | 0.00% | 0.00% | — | ↑ 1.60x | 0 | — | — | 8m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (76)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.99% | 98.95% | 98.94% | 98.94% | — | ↑ 1.24x | 0 | — | — | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.97% | 99.15% | 69.98% | 69.98% | — | ↑ 1.09x | 0 | — | — | 5m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 98.96% | 99.42% | 96.73% | 96.73% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 98.93% | 99.24% | 22.07% | 22.07% | — | ↑ 1.12x | 0 | — | — | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 98.92% | 99.51% | 97.90% | 97.90% | — | ↑ 1.08x | 0 | — | — | 54s ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.91% | 99.13% | 93.42% | 93.42% | — | ↑ 1.25x | 0 | — | — | 8m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 98.89% | 98.87% | 98.56% | 98.56% | — | ↑ 1.33x | 0 | — | — | 13m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 98.88% | 99.58% | 100.00% | 100.00% | — | ↑ 1.61x | 0 | — | — | 12m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 98.86% | 99.12% | 44.95% | 44.95% | — | ↑ 1.68x | 0 | — | — | 7m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.81% | 91.66% | 98.12% | 98.12% | — | ↑ 1.36x | 0 | — | — | 4m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 98.78% | 99.31% | 96.88% | 96.88% | — | ↑ 1.07x | 0 | — | — | 2m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 98.77% | 97.88% | 98.24% | 98.24% | — | → 1.03x | 0 | — | — | 58s ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.76% | 95.67% | 66.05% | 66.05% | — | ↑ 1.08x | 0 | — | — | 14m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 98.73% | 98.98% | 99.82% | 99.82% | — | ↓ 0.79x | 0 | — | — | 13m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.72% | 97.60% | 100.00% | 100.00% | — | ↑ 1.20x | 0 | — | — | 12m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 98.62% | 96.47% | 74.00% | 74.00% | — | ↑ 1.21x | 0 | — | — | 1m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.43% | 98.56% | 99.67% | 99.67% | — | ↓ 0.88x | 0 | — | — | 13m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 98.37% | 98.97% | 0.11% | 0.11% | — | ↑ 1.72x | 0 | — | — | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 98.30% | 97.39% | 92.86% | 92.86% | — | ↑ 1.13x | 0 | — | — | 12s ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 98.29% | 98.44% | 99.74% | 99.74% | — | ↑ 1.52x | 0 | — | — | 7m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.25% | 97.92% | 99.76% | 99.76% | — | ↑ 1.31x | 0 | — | — | 5m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 98.07% | 96.92% | 39.41% | 39.41% | — | ↓ 0.80x | 0 | — | — | 11m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 97.89% | 99.40% | — | — | — | ↑ 1.21x | 0 | — | — | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 97.80% | 99.26% | 93.61% | 93.61% | — | ↑ 1.15x | 0 | — | — | 13m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 97.79% | 99.38% | 98.93% | 98.93% | — | ↑ 1.68x | 0 | — | — | 5m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 97.66% | 99.25% | 32.40% | 32.40% | — | ↑ 1.82x | 0 | — | — | 5m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 97.47% | 99.19% | 99.28% | 99.28% | — | ↑ 1.72x | 0 | — | — | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 97.40% | 99.07% | 84.58% | 84.58% | — | → 1.04x | 0 | — | — | 1m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 97.13% | 51.73% | 73.96% | 73.96% | — | → 1.02x | 0 | — | — | 12m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 96.34% | 98.48% | 99.85% | 99.85% | — | ↑ 1.90x | 0 | — | — | 8m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 96.30% | 99.15% | 98.72% | 98.72% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 95.91% | 98.28% | 99.85% | 99.85% | — | ↑ 1.21x | 0 | — | — | 13m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 95.09% | 98.25% | 24.43% | 24.43% | — | ↑ 3.02x | 0 | — | — | 4m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 94.37% | 97.20% | 96.87% | 96.87% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 93.67% | 95.96% | 99.60% | 99.60% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 93.59% | 98.43% | 92.56% | 92.56% | — | → 1.02x | 0 | — | — | 14m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 93.35% | 96.66% | 97.85% | 97.85% | — | ↑ 1.15x | 0 | — | — | 13m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 93.34% | 94.70% | 55.08% | 55.08% | — | ↓ 0.69x | 0 | — | — | 11s ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 93.24% | 81.02% | 99.89% | 99.89% | — | → 1.03x | 0 | — | — | 13m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 92.90% | 65.99% | 48.46% | 48.46% | — | ↓ 0.54x | 0 | — | — | 56s ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 92.28% | 65.68% | 10.72% | 10.72% | — | ↓ 0.71x | 0 | — | — | 56s ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 92.12% | 65.32% | 87.06% | 87.06% | — | ↓ 0.76x | 0 | — | — | 55s ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 91.08% | 97.69% | 99.34% | 99.34% | — | ↑ 1.17x | 0 | — | — | 14m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 91.06% | 79.96% | 83.85% | 83.85% | — | ↓ 0.41x | 0 | — | — | 58s ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 90.29% | 95.21% | 89.02% | 89.02% | — | ↓ 0.89x | 0 | — | — | 6m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 89.85% | 68.31% | 98.89% | 98.89% | — | ↓ 0.45x | 0 | — | — | 8m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 87.81% | 59.67% | 44.62% | 44.62% | — | → 0.98x | 0 | — | — | 55s ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 87.46% | 62.48% | 44.99% | 44.99% | — | → 1.02x | 0 | — | — | 1m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 87.01% | 20.33% | 45.98% | 45.98% | — | → 1.00x | 0 | — | — | 5m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 85.82% | 59.07% | 23.09% | 23.09% | — | ↓ 0.60x | 0 | — | — | 7m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 85.49% | 70.24% | 97.75% | 97.75% | — | → 1.04x | 0 | — | — | 56s ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 85.11% | 92.29% | 1.90% | 1.90% | — | ↑ 1.94x | 0 | — | — | 5m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 84.42% | 90.14% | 99.93% | 99.93% | — | ↑ 1.99x | 0 | — | — | 7m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 83.29% | 57.10% | 75.72% | 75.72% | — | ↑ 1.09x | 0 | — | — | 7m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 82.74% | 60.06% | 83.10% | 83.10% | — | ↓ 0.48x | 0 | — | — | 15m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 81.93% | 62.13% | 25.44% | 25.44% | — | ↓ 0.93x | 0 | — | — | 14m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 81.57% | 56.02% | 99.09% | 99.09% | — | ↓ 0.89x | 0 | — | — | 7m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 81.03% | 18.19% | 43.99% | 43.99% | — | → 1.00x | 0 | — | — | 14m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 80.14% | 80.35% | 99.92% | 99.92% | — | ↑ 1.46x | 0 | — | — | 7m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 79.41% | 54.72% | 99.65% | 99.65% | — | ↑ 1.10x | 0 | — | — | 5m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 79.27% | 51.71% | 98.53% | 98.53% | — | ↑ 1.17x | 0 | — | — | 12m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 79.04% | 53.63% | 86.23% | 86.23% | — | ↓ 0.62x | 0 | — | — | 7m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 78.79% | 58.91% | 6.48% | 6.48% | — | ↓ 0.50x | 0 | — | — | 12m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 78.33% | 53.29% | 64.20% | 64.20% | — | ↓ 0.89x | 0 | — | — | 7m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 77.30% | 53.24% | 68.13% | 68.13% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 76.79% | 50.49% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 12m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 75.73% | 51.40% | 63.15% | 63.15% | — | → 0.99x | 0 | — | — | 5m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 74.16% | 49.27% | 54.78% | 54.78% | — | → 0.99x | 0 | — | — | 5m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 72.45% | 92.67% | 40.01% | 40.01% | — | ↑ 1.85x | 0 | — | — | 6m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 68.88% | 44.08% | 93.16% | 93.16% | — | ↑ 1.11x | 0 | — | — | 57s ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 63.43% | 40.02% | 93.77% | 93.77% | — | ↑ 1.12x | 0 | — | — | 7m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 59.16% | 78.23% | — | — | — | ↑ 2.92x | 0 | — | — | 9m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 55.71% | 36.40% | 99.78% | 99.78% | — | ↓ 0.89x | 0 | — | — | 7m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 51.90% | 11.54% | 98.59% | 98.59% | — | → 1.00x | 0 | — | — | 13m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 51.77% | 68.93% | 98.37% | 98.37% | — | ↑ 1.33x | 0 | — | — | 11m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 46.46% | 45.51% | 70.89% | 70.89% | — | ↑ 1.48x | 0 | — | — | 7m ago |

</details>

<details open>
<summary><strong>🔴 Down (371)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 97.91% | 100.00% | 100.00% | — | ↑ 1.13x | 0 | — | — | 11m ago |
| [JembatanAI](https://lmspeed.net/provider/jembatanai) | 100.00% | 99.82% | — | — | — | → 0.96x | 0 | — | — | 8m ago |
| [【公益】莱斯超级API](https://lmspeed.net/provider/laisiapi) | 100.00% | 89.90% | — | — | — | ↑ 1.16x | 0 | — | — | 9m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 100.00% | 99.75% | — | — | — | → 1.02x | 0 | — | — | 9m ago |
| [柚子的公益站](https://lmspeed.net/provider/provider-ai-bayunzi-shop) | 100.00% | 99.43% | — | — | — | ↑ 1.21x | 0 | — | — | 11m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.75% | 99.94% | 99.94% | — | ↑ 1.22x | 0 | — | — | 12m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 100.00% | 98.33% | — | — | — | ↓ 0.58x | 0 | — | — | 9m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.85% | 99.97% | 99.98% | 99.98% | — | ↑ 1.33x | 0 | — | — | 5m ago |
| [优质企业级中转API 始终坚持只做 Pro 号池、高品质 ,尊重安全隐私。](https://lmspeed.net/provider/api-17nas-com) | 99.84% | 99.75% | 99.75% | 99.75% | — | ↑ 1.08x | 0 | — | — | 11m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.84% | 99.65% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 11m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.84% | 99.79% | — | — | — | ↑ 1.34x | 0 | — | — | 9m ago |
| [Openference](https://lmspeed.net/provider/openference) | 99.84% | 99.68% | — | — | — | ↑ 1.22x | 0 | — | — | 9m ago |
| [Profundo AI](https://lmspeed.net/provider/profundo-ai) | 99.84% | 99.43% | — | — | — | ↑ 1.23x | 0 | — | — | 9m ago |
| [QuartzRouter](https://lmspeed.net/provider/quartzrouter) | 99.84% | 99.79% | — | — | — | ↑ 1.29x | 0 | — | — | 9m ago |
| [IMIKUFANS-CyaniAgent](https://lmspeed.net/provider/mix-api) | 99.70% | 97.41% | 38.36% | 38.36% | — | ↑ 1.15x | 0 | — | — | 2m ago |
| [LinoRoute](https://lmspeed.net/provider/linoroute) | 99.69% | 99.69% | — | — | — | → 1.00x | 0 | — | — | 9m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 99.68% | 99.61% | — | — | — | → 0.98x | 0 | — | — | 9m ago |
| [iTokens](https://lmspeed.net/provider/itokens) | 99.67% | 98.93% | — | — | — | → 1.04x | 0 | — | — | 8m ago |
| [PollyAI](https://lmspeed.net/provider/pollyai) | 99.67% | 99.43% | — | — | — | → 1.05x | 0 | — | — | 8m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.67% | 99.61% | — | — | — | ↑ 1.10x | 0 | — | — | 9m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.67% | 99.68% | — | — | — | ↑ 1.21x | 0 | — | — | 9m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.40% | 99.55% | 66.42% | 66.42% | — | → 1.04x | 0 | — | — | 2m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 99.35% | 99.50% | — | — | — | ↑ 2.09x | 0 | — | — | 9m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 99.19% | 84.55% | — | — | — | → 0.99x | 0 | — | — | 9m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.07% | 99.41% | 98.95% | 98.95% | — | ↑ 1.47x | 0 | — | — | 14m ago |
| [Yomi API](https://lmspeed.net/provider/yomi-api) | 99.02% | 99.50% | — | — | — | ↑ 1.18x | 0 | — | — | 9m ago |
| [YearnstudioAI](https://lmspeed.net/provider/yearnstudio) | 97.56% | 99.15% | — | — | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [KiosAPI](https://lmspeed.net/provider/kiosapi) | 94.63% | 98.36% | — | — | — | → 0.95x | 0 | — | — | 9m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 94.02% | 97.92% | 98.92% | 98.92% | — | ↑ 1.91x | 0 | — | — | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 94.02% | 64.82% | 94.11% | 94.11% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 94.00% | 91.90% | — | — | — | ↓ 0.88x | 0 | — | — | 9m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 93.74% | 78.09% | 67.23% | 67.23% | — | ↓ 0.34x | 0 | — | — | 8m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 88.32% | 76.95% | 78.01% | 78.01% | — | ↑ 1.17x | 0 | — | — | 8m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 83.70% | 65.74% | 86.29% | 86.29% | — | ↓ 0.36x | 0 | — | — | 6m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 83.70% | 76.55% | 54.05% | 54.05% | — | ↓ 0.32x | 0 | — | — | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 83.56% | 64.86% | 66.07% | 66.07% | — | ↓ 0.43x | 0 | — | — | 8m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 81.93% | 63.06% | 75.11% | 75.11% | — | ↓ 0.39x | 0 | — | — | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 80.95% | 52.00% | 96.32% | 96.32% | — | ↑ 1.11x | 0 | — | — | 6m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 80.66% | 53.56% | 96.79% | 96.79% | — | ↓ 0.53x | 0 | — | — | 2m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 80.16% | 53.84% | 50.52% | 50.52% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 80.03% | 54.51% | 68.41% | 68.41% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 78.40% | 54.74% | 98.92% | 98.92% | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 75.14% | 49.40% | 91.98% | 91.98% | — | ↑ 1.10x | 0 | — | — | 8m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 74.96% | 71.55% | 0.00% | 0.00% | — | ↑ 1.38x | 0 | — | — | 13m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 68.89% | 89.73% | — | — | — | ↑ 3.67x | 0 | — | — | 9m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 67.39% | 44.32% | 52.45% | 52.45% | — | ↑ 1.19x | 0 | — | — | 8m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 63.12% | 79.49% | 78.42% | 78.42% | — | ↑ 1.24x | 0 | — | — | 12m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 58.59% | 34.96% | 91.72% | 91.72% | — | → 1.00x | 0 | — | — | 1m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 40.12% | 59.63% | 87.63% | 87.63% | — | ↑ 2.06x | 0 | — | — | 1m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 38.59% | 25.44% | 99.85% | 99.85% | — | ↑ 1.12x | 0 | — | — | 11m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 28.42% | 83.26% | 99.68% | 99.68% | — | ↓ 0.95x | 0 | — | — | 5m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 23.22% | 81.73% | 97.94% | 97.94% | — | → 0.95x | 0 | — | — | 4m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 23.09% | 5.30% | 86.83% | 86.83% | — | → 1.00x | 0 | — | — | 2m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 20.90% | 19.32% | — | — | — | ↑ 1.16x | 0 | — | — | 11m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 13.77% | 76.41% | 98.29% | 98.29% | — | ↓ 0.59x | 0 | — | — | 8m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 7.50% | 2.82% | 22.80% | 22.80% | — | ↑ 1.13x | 0 | — | — | 2m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 1.41% | 28.76% | 7.76% | 7.76% | — | ↑ 1.08x | 0 | — | — | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 0.15% | 4.19% | 69.01% | 69.01% | — | ↓ 0.80x | 0 | — | — | 1m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.15% | 0.03% | 0.10% | 0.10% | — | → 1.00x | 0 | — | — | 4m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 0.14% | 26.07% | 97.57% | 97.57% | — | ↑ 1.11x | 0 | — | — | 7m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 0 | — | — | 56s ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.78% | 70.78% | — | — | 0 | — | — | 57s ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 0 | — | — | 32s ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 0 | — | — | 2m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 0.00% | 0.00% | 99.61% | 99.61% | — | — | 0 | — | — | 8m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 0 | — | — | 8m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.00% | 88.73% | 88.73% | — | — | 0 | — | — | 13m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 0 | — | — | 14m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 0 | — | — | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 0 | — | — | 5m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.00% | 79.86% | 79.86% | — | — | 0 | — | — | 14m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 64.61% | 64.61% | — | — | 0 | — | — | 2s ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 40.15% | 40.15% | — | — | 0 | — | — | 5m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 76.64% | 76.64% | — | — | 0 | — | — | 5m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 0 | — | — | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 0.00% | 0.00% | 88.70% | 88.70% | — | — | 0 | — | — | 15m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 12m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.00% | 99.65% | 99.65% | — | — | 0 | — | — | 12m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 0 | — | — | 14m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 0 | — | — | 15m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 0.00% | 0.00% | 83.18% | 83.18% | — | — | 0 | — | — | 1m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.66% | 83.66% | — | — | 0 | — | — | 8m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 0 | — | — | 1m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 0 | — | — | 7m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 0 | — | — | 8m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 0 | — | — | 6m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 0 | — | — | 7m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 0 | — | — | 5m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.00% | 83.11% | 83.11% | — | — | 0 | — | — | 14m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 0 | — | — | 59s ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 0 | — | — | 1m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.39% | 87.39% | — | — | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 0 | — | — | 1m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 0.00% | 68.70% | 68.70% | — | — | 0 | — | — | 12m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 0 | — | — | 4m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.00% | 98.15% | 98.15% | — | — | 0 | — | — | 5m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.64% | 78.64% | — | — | 0 | — | — | 12s ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 0.00% | 0.00% | 99.93% | 99.93% | — | — | 0 | — | — | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 0 | — | — | 2m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 0 | — | — | 12m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 0 | — | — | 11m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.00% | 48.90% | 48.90% | — | — | 0 | — | — | 5m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.00% | 90.67% | 90.67% | — | — | 0 | — | — | 11m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 47.85% | 47.85% | — | — | 0 | — | — | 6m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 0.00% | 75.94% | 100.00% | 100.00% | — | — | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 13m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.88% | 31.88% | — | — | 0 | — | — | 1m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.00% | 99.73% | 99.73% | — | — | 0 | — | — | 13m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 0 | — | — | 6m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.34% | 32.34% | — | — | 0 | — | — | 11m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 0 | — | — | 12s ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 0 | — | — | 2m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 0 | — | — | 5m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.00% | 96.06% | 96.06% | — | — | 0 | — | — | 5m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.00% | 69.29% | 69.29% | — | — | 0 | — | — | 14m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.00% | 64.35% | 64.35% | — | — | 0 | — | — | 1m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 12m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 0 | — | — | 13s ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.00% | 98.70% | 98.70% | — | — | 0 | — | — | 11m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 0.00% | 97.23% | 97.23% | — | — | 0 | — | — | 11m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 0 | — | — | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 0 | — | — | 14m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 0.00% | 5.33% | 98.16% | 98.16% | — | — | 0 | — | — | 32s ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 0.00% | 0.00% | 90.79% | 90.79% | — | — | 0 | — | — | 14m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.00% | 98.37% | 98.37% | — | — | 0 | — | — | 57s ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 0 | — | — | 2m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 0.00% | 0.00% | 64.92% | 64.92% | — | — | 0 | — | — | 1m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 0.00% | 66.02% | 97.74% | 97.74% | — | — | 0 | — | — | 12s ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 12m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 0.00% | 1.95% | 98.45% | 98.45% | — | — | 0 | — | — | 5m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 0.00% | 0.00% | 99.27% | 99.27% | — | — | 0 | — | — | 1m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 0 | — | — | 14m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 0.00% | 45.00% | 98.00% | 98.00% | — | — | 0 | — | — | 1m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 0.00% | 12.85% | 91.43% | 91.43% | — | — | 0 | — | — | 11m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 0 | — | — | 8m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 0 | — | — | 59s ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 0 | — | — | 57s ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 0 | — | — | 7m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.00% | 99.92% | 99.92% | — | — | 0 | — | — | 12m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 0 | — | — | 14m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.00% | 98.40% | 98.40% | — | — | 0 | — | — | 11m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.00% | 99.74% | 99.74% | — | — | 0 | — | — | 8m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 37s ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 0 | — | — | 12s ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.00% | 81.13% | 81.13% | — | — | 0 | — | — | 32s ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 0 | — | — | 4m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 0 | — | — | 8m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.00% | 99.84% | 99.84% | — | — | 0 | — | — | 7m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 15m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 12m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 0 | — | — | 59s ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 0 | — | — | 15m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 0 | — | — | 6m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 0 | — | — | 7m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 0 | — | — | 14m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 0 | — | — | 13m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.90% | 47.90% | — | — | 0 | — | — | 59s ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.00% | 99.25% | 99.25% | — | — | 0 | — | — | 13m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.05% | 6.05% | — | — | 0 | — | — | 14m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.00% | 91.99% | 91.99% | — | — | 0 | — | — | 14m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 22.80% | 22.80% | — | — | 0 | — | — | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.00% | 98.05% | 98.05% | — | — | 0 | — | — | 12m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 0 | — | — | 12s ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 11m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 0 | — | — | 5m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 0 | — | — | 13m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 0 | — | — | 6m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 0 | — | — | 8m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 0 | — | — | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 59s ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 0 | — | — | 5m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.00% | 75.74% | 75.74% | — | — | 0 | — | — | 13m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 0 | — | — | 7m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 0 | — | — | 34s ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 13m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.74% | 70.74% | — | — | 0 | — | — | 37s ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 0 | — | — | 5m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 0 | — | — | 14m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.03% | 34.65% | 34.65% | — | — | 0 | — | — | 1m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 0 | — | — | 8m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 0 | — | — | 7m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 42.59% | 38.64% | 38.64% | — | — | 0 | — | — | 4m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 22.32% | 22.32% | — | — | 0 | — | — | 7m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 0 | — | — | 5m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.00% | 91.04% | 91.04% | — | — | 0 | — | — | 13m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 0 | — | — | 14m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 0.00% | 0.00% | 88.31% | 88.31% | — | — | 0 | — | — | 11m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 0 | — | — | 1m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 0.00% | 84.75% | 84.75% | — | — | 0 | — | — | 14m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.00% | 99.29% | 99.29% | — | — | 0 | — | — | 11m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 0 | — | — | 14m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 15m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 0 | — | — | 8m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 0.00% | 73.31% | 89.89% | 89.89% | — | — | 0 | — | — | 13m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.32% | 73.32% | — | — | 0 | — | — | 5m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 0 | — | — | 1m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 0 | — | — | 56s ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 0 | — | — | 7m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 0.00% | 7.33% | 98.87% | 98.87% | — | — | 0 | — | — | 7m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 0.00% | 21.09% | 98.69% | 98.69% | — | — | 0 | — | — | 14m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 0.00% | 0.00% | 98.35% | 98.35% | — | — | 0 | — | — | 14m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 20.82% | 20.82% | — | — | 0 | — | — | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.00% | 20.58% | 20.58% | — | — | 0 | — | — | 13m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 0 | — | — | 14m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 0 | — | — | 32s ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 0 | — | — | 5m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.00% | 92.62% | 92.62% | — | — | 0 | — | — | 7m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 12m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 0 | — | — | 8m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 27.77% | 27.77% | — | — | 0 | — | — | 1m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.33% | 22.33% | — | — | 0 | — | — | 7m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 0 | — | — | 6m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 0.00% | 0.00% | 98.93% | 98.93% | — | — | 0 | — | — | 8m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 12m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.10% | 49.10% | — | — | 0 | — | — | 5m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 0 | — | — | 7m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 7m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 13m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.07% | 65.07% | — | — | 0 | — | — | 15m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.00% | 99.12% | 99.12% | — | — | 0 | — | — | 6m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 0.00% | 56.69% | 60.60% | 60.60% | — | — | 0 | — | — | 2m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.00% | 92.19% | 92.19% | — | — | 0 | — | — | 32s ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 0.00% | 0.00% | 96.14% | 96.14% | — | — | 0 | — | — | 12m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 13.91% | 100.00% | 100.00% | — | — | 0 | — | — | 11m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 7m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 0 | — | — | 5m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.00% | 92.63% | 92.63% | — | — | 0 | — | — | 32s ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 13m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 0 | — | — | 56s ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 0 | — | — | 13m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 0.00% | 0.00% | 81.07% | 81.07% | — | — | 0 | — | — | 2m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 0 | — | — | 5m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 0 | — | — | 2m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 0 | — | — | 12s ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.00% | 99.81% | 99.81% | — | — | 0 | — | — | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 46.51% | 46.51% | — | — | 0 | — | — | 15m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 0.00% | 14.28% | 85.02% | 85.02% | — | — | 0 | — | — | 12s ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.39% | 72.39% | — | — | 0 | — | — | 1m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 0 | — | — | 6m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.14% | 26.68% | 26.68% | — | — | 0 | — | — | 2m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.80% | 46.80% | — | — | 0 | — | — | 12m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 0 | — | — | 6m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 0 | — | — | 2m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.72% | 68.72% | — | — | 0 | — | — | 7m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 0 | — | — | 2m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 0 | — | — | 8m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.49% | 35.49% | — | — | 0 | — | — | 7s ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 0 | — | — | 5m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 0 | — | — | 7m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 23.11% | 23.11% | — | — | 0 | — | — | 6m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.00% | 99.60% | 99.60% | — | — | 0 | — | — | 13m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [S1AI API](https://lmspeed.net/provider/s1ai-api) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 0 | — | — | 37s ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 12m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 0 | — | — | 1m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.60% | 22.60% | — | — | 0 | — | — | 13m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 0.00% | 0.00% | 99.97% | 99.97% | — | — | 0 | — | — | 1m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 0 | — | — | 7m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.92% | 30.92% | — | — | 0 | — | — | 14m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.00% | 68.76% | 68.76% | — | — | 0 | — | — | 13m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 0 | — | — | 14m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.02% | 38.02% | — | — | 0 | — | — | 13m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.16% | 17.16% | — | — | 0 | — | — | 14m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 0 | — | — | 32s ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 11m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.00% | 23.40% | 23.40% | — | — | 0 | — | — | 2m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 0.00% | 4.46% | 99.06% | 99.06% | — | — | 0 | — | — | 11m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 0.00% | 0.00% | 82.00% | 82.00% | — | — | 0 | — | — | 11m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.00% | 99.53% | 99.53% | — | — | 0 | — | — | 8m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 0 | — | — | 5m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 21.71% | 21.71% | — | — | 0 | — | — | 6m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 0.00% | 0.00% | 99.87% | 99.87% | — | — | 0 | — | — | 5m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 0 | — | — | 15m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 0 | — | — | 1m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 0.00% | 0.00% | 98.78% | 98.78% | — | — | 0 | — | — | 6m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 0 | — | — | 14m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 0.00% | 0.00% | 98.12% | 98.12% | — | — | 0 | — | — | 8s ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 0 | — | — | 14m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 0 | — | — | 6m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 0.00% | 0.00% | 99.88% | 99.88% | — | — | 0 | — | — | 11m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 32.96% | 32.96% | — | — | 0 | — | — | 6m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 0 | — | — | 13m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.00% | 98.48% | 98.48% | — | — | 0 | — | — | 59s ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 0 | — | — | 12s ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 0 | — | — | 32s ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 0.00% | 89.40% | 89.40% | — | — | 0 | — | — | 1m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 0 | — | — | 5m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 0.00% | 0.00% | 17.31% | 17.31% | — | — | 0 | — | — | 5m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 0 | — | — | 14m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 0 | — | — | 5m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 0.00% | 0.00% | 24.63% | 24.63% | — | — | 0 | — | — | 4m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 0 | — | — | 4m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 60.97% | 60.97% | — | — | 0 | — | — | 15m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 0 | — | — | 7m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.35% | 1.35% | — | — | 0 | — | — | 14m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 0 | — | — | 1m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 0.00% | 0.00% | 99.78% | 99.78% | — | — | 0 | — | — | 32s ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 0.00% | 35.87% | 99.92% | 99.92% | — | — | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 12m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.00% | 99.17% | 99.17% | — | — | 0 | — | — | 7m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
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
