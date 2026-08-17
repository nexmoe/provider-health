# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**714 providers** — 291 🟢 operational · 82 🟡 degraded · 339 🔴 down · 2 ⚫ unknown

_Updated 2026-08-17 03:53 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (291)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.85% | 99.61% | 99.61% | — | ↑ 1.22x | 0 | — | — | 7m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.43% | 99.87% | 99.87% | — | ↑ 1.15x | 0 | — | — | 10m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 100.00% | 99.73% | 99.02% | 99.02% | — | → 1.03x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.78% | 99.87% | 99.87% | — | ↓ 0.87x | 0 | — | — | 10m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.95% | 97.57% | 97.57% | — | ↑ 1.15x | 0 | — | — | 1m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 99.78% | 99.51% | 99.51% | — | → 1.02x | 0 | — | — | 9m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 100.00% | 99.83% | 43.99% | 43.99% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.30% | 98.16% | 98.16% | — | → 0.96x | 0 | — | — | 11m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.80% | 50.15% | 50.15% | — | ↑ 1.11x | 0 | — | — | 13m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.75% | 99.83% | 99.83% | — | → 1.05x | 0 | — | — | 11m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 99.87% | 100.00% | 100.00% | — | → 1.05x | 0 | — | — | 8m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.90% | 99.85% | 99.85% | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 100.00% | 98.90% | 98.81% | 98.81% | — | ↑ 1.81x | 0 | — | — | 11m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.83% | 98.43% | 98.43% | — | → 1.00x | 0 | — | — | 10m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 99.78% | 99.96% | 99.96% | — | → 1.02x | 0 | — | — | 4m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.63% | 99.28% | 99.28% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.80% | 89.89% | 89.89% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 100.00% | 99.80% | — | — | — | → 0.95x | 0 | — | — | 7m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.83% | 98.35% | 98.35% | — | → 0.96x | 0 | — | — | 10m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.98% | 60.60% | 60.60% | — | → 1.04x | 0 | — | — | 13m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 98.45% | 96.14% | 96.14% | — | ↑ 1.07x | 0 | — | — | 8m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 99.90% | 99.31% | 99.31% | — | ↓ 0.82x | 0 | — | — | 12m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 100.00% | 99.90% | 0.00% | 0.00% | — | → 1.03x | 0 | — | — | 8m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 98.70% | 99.97% | 99.97% | — | → 1.02x | 0 | — | — | 8m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.90% | 63.68% | 63.68% | — | ↑ 1.08x | 0 | — | — | 13m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 99.92% | 100.00% | 100.00% | — | ↑ 1.18x | 0 | — | — | 9m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 100.00% | 99.88% | 98.47% | 98.47% | — | → 1.04x | 0 | — | — | 11m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 100.00% | 99.66% | 99.66% | — | → 0.99x | 0 | — | — | 7m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 100.00% | 99.70% | 99.34% | 99.34% | — | → 0.98x | 0 | — | — | 9m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 99.78% | 99.84% | 99.84% | — | → 0.97x | 0 | — | — | 3m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.83% | 98.37% | 98.37% | — | → 0.98x | 0 | — | — | 10m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 99.78% | 96.10% | 96.10% | — | → 0.97x | 0 | — | — | 9m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.80% | 99.67% | 99.67% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.70% | 99.97% | 99.97% | — | ↓ 0.92x | 0 | — | — | 8m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 99.23% | 97.48% | 97.48% | — | ↓ 0.90x | 0 | — | — | 10m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.85% | 99.62% | 99.62% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 99.68% | 99.77% | 99.77% | — | → 1.04x | 0 | — | — | 3m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 99.90% | 98.78% | 98.78% | — | → 0.99x | 0 | — | — | 10m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 100.00% | 99.90% | 99.67% | 99.67% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.88% | 98.04% | 93.42% | 93.42% | — | ↓ 0.91x | 0 | — | — | 6m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.88% | 99.22% | 99.74% | 99.74% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.88% | 99.90% | 17.47% | 17.47% | — | ↑ 1.08x | 0 | — | — | 5m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.88% | 99.85% | 99.92% | 99.92% | — | ↑ 1.05x | 0 | — | — | 5m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.88% | 99.83% | 44.95% | 44.95% | — | → 1.02x | 0 | — | — | 5m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.88% | 99.85% | 99.64% | 99.64% | — | → 0.99x | 0 | — | — | 4m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.88% | 99.85% | 99.49% | 99.49% | — | → 1.04x | 0 | — | — | 4m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.88% | 99.78% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 4m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.88% | 99.78% | 76.89% | 76.89% | — | → 1.04x | 0 | — | — | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.88% | 99.78% | 99.87% | 99.87% | — | ↓ 0.92x | 0 | — | — | 3m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.88% | 99.75% | 99.85% | 99.85% | — | ↑ 1.06x | 0 | — | — | 3m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.88% | 99.73% | 99.87% | 99.87% | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.88% | 99.83% | 80.20% | 80.20% | — | ↑ 1.05x | 0 | — | — | 2m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.88% | 99.93% | 99.34% | 99.34% | — | → 1.00x | 0 | — | — | 2m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.88% | 99.70% | 99.48% | 99.48% | — | ↓ 0.90x | 0 | — | — | 2m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.88% | 99.46% | 24.53% | 24.53% | — | → 1.03x | 0 | — | — | 2m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 99.88% | 40.10% | 99.26% | 99.26% | — | ↓ 0.95x | 0 | — | — | 2m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.88% | 99.83% | 99.87% | 99.87% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.88% | 99.88% | 88.17% | 88.17% | — | → 0.99x | 0 | — | — | 2m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.88% | 99.78% | 77.28% | 77.28% | — | → 1.03x | 0 | — | — | 1m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.88% | 99.83% | 99.37% | 99.37% | — | ↓ 0.93x | 0 | — | — | 1m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.88% | 99.85% | 5.16% | 5.16% | — | → 0.99x | 0 | — | — | 1m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 99.88% | 99.13% | 57.00% | 57.00% | — | → 1.03x | 0 | — | — | 13m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.88% | 99.85% | 93.26% | 93.26% | — | ↑ 1.10x | 0 | — | — | 13m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.87% | 99.95% | 98.73% | 98.73% | — | ↑ 1.07x | 0 | — | — | 13m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.87% | 99.88% | 68.50% | 68.50% | — | → 1.00x | 0 | — | — | 13m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.87% | 99.78% | 99.35% | 99.35% | — | ↓ 0.94x | 0 | — | — | 13m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.87% | 99.80% | 69.87% | 69.87% | — | → 1.01x | 0 | — | — | 13m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.87% | 99.50% | 98.88% | 98.88% | — | ↓ 0.91x | 0 | — | — | 13m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.87% | 99.73% | 97.90% | 97.90% | — | → 0.99x | 0 | — | — | 12m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.87% | 99.75% | 66.50% | 66.50% | — | → 1.04x | 0 | — | — | 12m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.87% | 99.78% | 58.17% | 58.17% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.87% | 99.83% | 99.89% | 99.89% | — | → 0.98x | 0 | — | — | 12m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.87% | 99.95% | 99.97% | 99.97% | — | → 1.03x | 0 | — | — | 12m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.87% | 99.93% | 98.74% | 98.74% | — | → 1.01x | 0 | — | — | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.87% | 99.75% | 97.03% | 97.03% | — | → 1.02x | 0 | — | — | 11m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.87% | 98.63% | 99.10% | 99.10% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.87% | 99.80% | 96.69% | 96.69% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.87% | 99.83% | 99.86% | 99.86% | — | ↑ 1.63x | 0 | — | — | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.87% | 99.73% | 43.48% | 43.48% | — | ↓ 0.95x | 0 | — | — | 11m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.87% | 98.06% | 56.85% | 56.85% | — | → 0.96x | 0 | — | — | 11m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.87% | 99.63% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 11m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.87% | 99.78% | 98.56% | 98.56% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.87% | 99.88% | 98.85% | 98.85% | — | ↑ 1.19x | 0 | — | — | 11m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.87% | 89.81% | 98.02% | 98.02% | — | ↓ 0.19x | 0 | — | — | 10m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.87% | 99.58% | 100.00% | 100.00% | — | ↓ 0.43x | 0 | — | — | 10m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.87% | 99.78% | 28.78% | 28.78% | — | ↓ 0.95x | 0 | — | — | 10m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.87% | 99.73% | 98.81% | 98.81% | — | → 1.01x | 0 | — | — | 11m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.87% | 99.80% | 96.80% | 96.80% | — | ↑ 1.24x | 0 | — | — | 10m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.87% | 99.80% | 99.93% | 99.93% | — | → 1.04x | 0 | — | — | 10m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.87% | 98.70% | 97.10% | 97.10% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.87% | 98.60% | 97.07% | 97.07% | — | ↓ 0.90x | 0 | — | — | 9m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.87% | 93.73% | 96.89% | 96.89% | — | ↓ 0.72x | 0 | — | — | 9m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.87% | 99.75% | 99.67% | 99.67% | — | ↑ 1.22x | 0 | — | — | 9m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.87% | 99.37% | 93.61% | 93.61% | — | ↑ 1.12x | 0 | — | — | 9m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.87% | 99.85% | 99.94% | 99.94% | — | ↑ 1.12x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.87% | 99.92% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 8m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.87% | 99.57% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 8m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.87% | 99.85% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 8m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.87% | 99.80% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 8m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.87% | 99.70% | 99.98% | 99.98% | — | → 1.04x | 0 | — | — | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.87% | 99.85% | 100.00% | 100.00% | — | ↑ 1.10x | 0 | — | — | 8m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.87% | 99.35% | 99.77% | 99.77% | — | → 0.96x | 0 | — | — | 8m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.87% | 99.67% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.87% | 99.77% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 7m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.87% | 99.77% | 99.67% | 99.67% | — | ↑ 1.23x | 0 | — | — | 6m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.87% | 99.42% | — | — | — | → 0.96x | 0 | — | — | 7m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.76% | 97.60% | 93.57% | 93.57% | — | → 1.02x | 0 | — | — | 6m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.76% | 99.71% | 98.78% | 98.78% | — | → 1.05x | 0 | — | — | 6m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.76% | 71.20% | 99.95% | 99.95% | — | ↑ 1.15x | 0 | — | — | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.76% | 99.63% | 99.75% | 99.75% | — | → 1.03x | 0 | — | — | 5m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.76% | 99.80% | 70.89% | 70.89% | — | → 1.02x | 0 | — | — | 5m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.73% | 98.93% | 98.93% | — | → 0.99x | 0 | — | — | 6m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.73% | 95.68% | 95.68% | — | → 1.04x | 0 | — | — | 6m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.76% | 49.74% | 49.74% | — | → 1.04x | 0 | — | — | 5m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.76% | 99.51% | 99.60% | 99.60% | — | → 1.05x | 0 | — | — | 5m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.76% | 99.75% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 4m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.76% | 99.68% | 99.73% | 99.73% | — | ↑ 1.74x | 0 | — | — | 4m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.76% | 99.75% | 99.58% | 99.58% | — | → 1.00x | 0 | — | — | 5m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.76% | 99.83% | 99.81% | 99.81% | — | → 1.00x | 0 | — | — | 5m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.76% | 99.78% | 99.92% | 99.92% | — | → 1.03x | 0 | — | — | 4m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 99.76% | 99.93% | 99.65% | 99.65% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.76% | 99.85% | 99.90% | 99.90% | — | ↑ 1.13x | 0 | — | — | 4m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.76% | 99.80% | 99.58% | 99.58% | — | → 1.05x | 0 | — | — | 4m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.76% | 99.85% | 99.97% | 99.97% | — | ↓ 0.70x | 0 | — | — | 4m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 99.76% | 98.94% | 98.94% | 98.94% | — | ↓ 0.57x | 0 | — | — | 4m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.75% | 99.88% | 98.92% | 98.92% | — | → 1.01x | 0 | — | — | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.75% | 99.78% | 99.90% | 99.90% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.75% | 99.75% | 22.94% | 22.94% | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.75% | 99.48% | 98.93% | 98.93% | — | ↓ 0.93x | 0 | — | — | 2m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.75% | 99.04% | 99.68% | 99.68% | — | → 1.00x | 0 | — | — | 2m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.75% | 99.43% | 99.77% | 99.77% | — | → 1.04x | 0 | — | — | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.75% | 99.73% | 25.33% | 25.33% | — | ↓ 0.91x | 0 | — | — | 1m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.75% | 93.97% | 99.09% | 99.09% | — | ↑ 1.13x | 0 | — | — | 13m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.75% | 97.90% | 26.84% | 26.84% | — | → 1.01x | 0 | — | — | 13m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.75% | 99.63% | 24.91% | 24.91% | — | ↑ 1.10x | 0 | — | — | 13m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.70% | 96.32% | 96.32% | — | ↓ 0.90x | 0 | — | — | 13m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.75% | 99.18% | 31.58% | 31.58% | — | → 1.03x | 0 | — | — | 13m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.75% | 99.80% | 65.57% | 65.57% | — | → 1.01x | 0 | — | — | 13m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.75% | 99.68% | 99.88% | 99.88% | — | → 1.04x | 0 | — | — | 13m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.75% | 99.73% | 69.43% | 69.43% | — | ↓ 0.70x | 0 | — | — | 13m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.75% | 99.83% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 13m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.75% | 99.85% | 97.00% | 97.00% | — | ↑ 1.29x | 0 | — | — | 12m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.75% | 99.75% | 28.39% | 28.39% | — | ↑ 1.53x | 0 | — | — | 12m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.75% | 99.83% | 91.09% | 91.09% | — | ↑ 1.38x | 0 | — | — | 12m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 99.75% | 99.80% | 89.57% | 89.57% | — | ↑ 1.17x | 0 | — | — | 12m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.68% | 98.90% | 98.90% | — | → 1.02x | 0 | — | — | 12m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.75% | 99.53% | 26.43% | 26.43% | — | → 0.95x | 0 | — | — | 11m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.75% | 99.70% | 91.87% | 91.87% | — | ↓ 0.88x | 0 | — | — | 11m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.75% | 98.90% | 98.83% | 98.83% | — | ↑ 1.08x | 0 | — | — | 10m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.75% | 99.70% | 90.79% | 90.79% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.75% | 99.65% | 97.80% | 97.80% | — | → 0.98x | 0 | — | — | 10m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.75% | 99.70% | 98.69% | 98.69% | — | → 1.00x | 0 | — | — | 10m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.75% | 99.48% | 93.06% | 93.06% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.75% | 96.28% | 98.16% | 98.16% | — | → 0.98x | 0 | — | — | 10m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.75% | 99.88% | 31.33% | 31.33% | — | → 0.97x | 0 | — | — | 9m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.75% | 99.53% | 14.21% | 14.21% | — | ↓ 0.72x | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.75% | 99.90% | 99.97% | 99.97% | — | ↑ 1.09x | 0 | — | — | 9m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.75% | 96.08% | 0.69% | 0.69% | — | ↑ 1.56x | 0 | — | — | 9m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.75% | 99.80% | 99.89% | 99.89% | — | → 1.01x | 0 | — | — | 9m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.75% | 99.88% | 99.70% | 99.70% | — | → 0.99x | 0 | — | — | 9m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 99.75% | 98.88% | 98.88% | 98.88% | — | → 1.04x | 0 | — | — | 9m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.75% | 99.80% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 9m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 99.83% | 97.35% | 97.35% | — | → 1.04x | 0 | — | — | 9m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.75% | 99.20% | 99.33% | 99.33% | — | → 1.04x | 0 | — | — | 9m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.75% | 99.72% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 9m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.75% | 99.85% | 0.00% | 0.00% | — | → 1.00x | 0 | — | — | 9m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.75% | 99.85% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 8m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.75% | 99.87% | 99.86% | 99.86% | — | → 1.04x | 0 | — | — | 8m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.74% | 98.95% | 88.31% | 88.31% | — | ↓ 0.70x | 0 | — | — | 8m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.74% | 99.82% | 99.85% | 99.85% | — | ↓ 0.65x | 0 | — | — | 8m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.74% | 99.85% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 7m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.74% | 99.82% | 60.72% | 60.72% | — | → 1.04x | 0 | — | — | 7m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.74% | 99.82% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 7m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.74% | 98.59% | — | — | — | ↓ 0.53x | 0 | — | — | 7m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.74% | 99.35% | 99.34% | 99.34% | — | → 0.97x | 0 | — | — | 6m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.74% | 88.77% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 6m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 99.74% | 99.73% | — | — | — | → 1.01x | 0 | — | — | 7m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.74% | 99.87% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 6m ago |
| [Jectora](https://lmspeed.net/provider/jectora) | 99.73% | 99.73% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [QuartzRouter](https://lmspeed.net/provider/quartzrouter) | 99.65% | 99.65% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.64% | 99.73% | 99.98% | 99.98% | — | ↑ 1.30x | 0 | — | — | 6m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.64% | 99.78% | 68.59% | 68.59% | — | ↓ 0.93x | 0 | — | — | 6m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.64% | 99.63% | 99.49% | 99.49% | — | → 0.97x | 0 | — | — | 6m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.64% | 99.07% | 99.85% | 99.85% | — | → 1.02x | 0 | — | — | 5m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.63% | 99.85% | 99.90% | 99.90% | — | ↑ 1.23x | 0 | — | — | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.63% | 99.78% | 97.57% | 97.57% | — | → 0.98x | 0 | — | — | 4m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.63% | 99.75% | 22.33% | 22.33% | — | → 1.02x | 0 | — | — | 4m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.63% | 99.68% | 99.91% | 99.91% | — | ↑ 1.18x | 0 | — | — | 4m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.63% | 99.68% | 76.97% | 76.97% | — | → 1.01x | 0 | — | — | 2m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.63% | 99.78% | 99.95% | 99.95% | — | → 1.03x | 0 | — | — | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.63% | 99.38% | 2.34% | 2.34% | — | → 1.04x | 0 | — | — | 13m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.62% | 56.81% | 27.04% | 27.04% | — | → 1.05x | 0 | — | — | 13m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.62% | 98.73% | 99.27% | 99.27% | — | → 0.95x | 0 | — | — | 13m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.62% | 99.80% | 77.97% | 77.97% | — | ↓ 0.93x | 0 | — | — | 12m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 99.62% | 96.00% | 77.59% | 77.59% | — | ↓ 0.56x | 0 | — | — | 12m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.62% | 99.58% | 99.64% | 99.64% | — | → 1.04x | 0 | — | — | 11m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.62% | 99.80% | 98.73% | 98.73% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.62% | 66.47% | 46.51% | 46.51% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.62% | 99.00% | 96.94% | 96.94% | — | ↑ 1.13x | 0 | — | — | 10m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 99.62% | 97.43% | 97.00% | 97.00% | — | → 0.97x | 0 | — | — | 10m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.62% | 99.85% | 93.73% | 93.73% | — | → 1.00x | 0 | — | — | 10m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.62% | 99.78% | 29.98% | 29.98% | — | ↑ 1.07x | 0 | — | — | 11m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.62% | 99.65% | 99.71% | 99.71% | — | → 1.05x | 0 | — | — | 10m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.62% | 99.82% | 99.08% | 99.08% | — | ↑ 1.26x | 0 | — | — | 9m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.62% | 99.50% | 87.87% | 87.87% | — | → 1.04x | 0 | — | — | 8m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.62% | 99.82% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 9m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.62% | 99.77% | 99.97% | 99.97% | — | → 1.02x | 0 | — | — | 8m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.62% | 99.70% | 99.85% | 99.85% | — | → 1.00x | 0 | — | — | 8m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.62% | 99.72% | 16.67% | 16.67% | — | ↑ 1.20x | 0 | — | — | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.62% | 99.57% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 8m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.62% | 99.37% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 7m ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 99.61% | 99.60% | — | — | — | → 0.99x | 0 | — | — | 6m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.51% | 99.83% | 99.98% | 99.98% | — | ↑ 1.29x | 0 | — | — | 6m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.51% | 99.78% | 36.33% | 36.33% | — | → 1.04x | 0 | — | — | 6m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.51% | 98.43% | 98.29% | 98.29% | — | ↑ 1.10x | 0 | — | — | 6m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.51% | 99.63% | 75.23% | 75.23% | — | → 1.02x | 0 | — | — | 6m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.51% | 99.61% | 99.62% | 99.62% | — | ↑ 1.06x | 0 | — | — | 5m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.51% | 99.46% | 0.00% | 0.00% | — | ↓ 0.54x | 0 | — | — | 6m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.51% | 99.71% | 76.22% | 76.22% | — | → 1.01x | 0 | — | — | 5m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.51% | 99.73% | 99.98% | 99.98% | — | ↑ 1.11x | 0 | — | — | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.51% | 99.73% | 56.98% | 56.98% | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.51% | 99.75% | 99.85% | 99.85% | — | → 1.02x | 0 | — | — | 2m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.51% | 99.58% | 22.30% | 22.30% | — | ↓ 0.79x | 0 | — | — | 2m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.51% | 98.22% | 85.28% | 85.28% | — | ↓ 0.85x | 0 | — | — | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.50% | 99.73% | 62.65% | 62.65% | — | → 1.00x | 0 | — | — | 13m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.50% | 99.23% | 38.36% | 38.36% | — | ↑ 1.11x | 0 | — | — | 13m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.50% | 99.73% | 71.79% | 71.79% | — | → 1.04x | 0 | — | — | 13m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.50% | 99.68% | 82.26% | 82.26% | — | ↓ 0.94x | 0 | — | — | 12m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.50% | 99.58% | 74.00% | 74.00% | — | → 0.98x | 0 | — | — | 12m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.50% | 99.73% | 90.95% | 90.95% | — | → 1.02x | 0 | — | — | 12m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.50% | 99.73% | 90.32% | 90.32% | — | → 1.00x | 0 | — | — | 12m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.50% | 99.63% | 99.83% | 99.83% | — | ↑ 1.19x | 0 | — | — | 12m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.50% | 99.70% | 98.11% | 98.11% | — | ↑ 1.28x | 0 | — | — | 11m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.50% | 99.63% | 99.76% | 99.76% | — | → 0.98x | 0 | — | — | 11m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.49% | 99.30% | 95.85% | 95.85% | — | ↓ 0.93x | 0 | — | — | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.49% | 99.58% | 99.86% | 99.86% | — | ↑ 1.07x | 0 | — | — | 10m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.49% | 99.55% | 83.10% | 83.10% | — | → 1.02x | 0 | — | — | 11m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.49% | 99.65% | 98.56% | 98.56% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.49% | 99.80% | 99.98% | 99.98% | — | → 1.05x | 0 | — | — | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.49% | 99.42% | 100.00% | 100.00% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.49% | 99.82% | 99.92% | 99.92% | — | → 1.04x | 0 | — | — | 8m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.49% | 99.75% | 39.41% | 39.41% | — | ↑ 1.48x | 0 | — | — | 8m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.49% | 99.77% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 8m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.49% | 98.90% | 91.90% | 91.90% | — | ↑ 1.11x | 0 | — | — | 7m ago |
| [YearnstudioAI](https://lmspeed.net/provider/yearnstudio) | 99.49% | 99.41% | — | — | — | → 1.01x | 0 | — | — | 6m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.39% | 99.04% | 99.56% | 99.56% | — | → 1.02x | 0 | — | — | 5m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.39% | 99.63% | 99.74% | 99.74% | — | ↑ 1.17x | 0 | — | — | 5m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.39% | 99.61% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.38% | 99.23% | 97.28% | 97.28% | — | ↑ 1.09x | 0 | — | — | 2m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.38% | 99.51% | 96.73% | 96.73% | — | ↓ 0.86x | 0 | — | — | 1m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.38% | 99.60% | 54.70% | 54.70% | — | → 0.99x | 0 | — | — | 13m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.38% | 99.65% | 30.20% | 30.20% | — | ↑ 1.17x | 0 | — | — | 13m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.37% | 98.96% | 81.53% | 81.53% | — | → 0.97x | 0 | — | — | 12m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.37% | 99.75% | 94.26% | 94.26% | — | → 1.04x | 0 | — | — | 12m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.37% | 99.73% | 98.38% | 98.38% | — | → 1.01x | 0 | — | — | 12m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.37% | 99.80% | 76.90% | 76.90% | — | ↑ 1.34x | 0 | — | — | 11m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.37% | 99.53% | 98.47% | 98.47% | — | → 0.98x | 0 | — | — | 10m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.37% | 99.63% | 97.87% | 97.87% | — | → 0.96x | 0 | — | — | 10m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.37% | 99.70% | 98.04% | 98.04% | — | ↑ 1.13x | 0 | — | — | 9m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.36% | 92.32% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 9m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.36% | 99.67% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 9m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.36% | 99.72% | 24.52% | 24.52% | — | ↑ 1.24x | 0 | — | — | 8m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.36% | 99.65% | 100.00% | 100.00% | — | ↑ 1.14x | 0 | — | — | 7m ago |
| [PollyAI](https://lmspeed.net/provider/pollyai) | 99.36% | 98.58% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.27% | 99.61% | 99.74% | 99.74% | — | → 1.03x | 0 | — | — | 5m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.26% | 99.56% | 0.11% | 0.11% | — | → 0.97x | 0 | — | — | 3m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.26% | 99.43% | 24.43% | 24.43% | — | ↓ 0.54x | 0 | — | — | 1m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.25% | 99.63% | 64.92% | 64.92% | — | ↓ 0.85x | 0 | — | — | 13m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.25% | 97.37% | 97.21% | 97.21% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.25% | 99.68% | 99.18% | 99.18% | — | ↑ 1.11x | 0 | — | — | 12m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.25% | 99.48% | 99.00% | 99.00% | — | ↑ 1.18x | 0 | — | — | 12m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.24% | 99.75% | 99.30% | 99.30% | — | → 1.05x | 0 | — | — | 11m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.24% | 99.60% | 99.74% | 99.74% | — | → 1.03x | 0 | — | — | 10m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.24% | 99.63% | 86.85% | 86.85% | — | → 1.04x | 0 | — | — | 10m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.24% | 99.28% | 99.82% | 99.82% | — | → 0.98x | 0 | — | — | 10m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.23% | 99.52% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 8m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.23% | 99.57% | 98.72% | 98.72% | — | → 1.00x | 0 | — | — | 7m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.23% | 99.42% | — | — | — | ↓ 0.86x | 0 | — | — | 7m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.23% | 99.54% | — | — | — | → 0.99x | 0 | — | — | 6m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.15% | 99.49% | 97.98% | 97.98% | — | → 1.04x | 0 | — | — | 5m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.13% | 99.60% | 24.54% | 24.54% | — | ↑ 1.65x | 0 | — | — | 1m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.12% | 97.81% | 99.82% | 99.82% | — | ↓ 0.90x | 0 | — | — | 12m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 99.11% | 99.18% | 92.56% | 92.56% | — | ↓ 0.85x | 0 | — | — | 9m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.10% | 99.37% | — | — | — | ↑ 1.18x | 0 | — | — | 6m ago |
| [Openference](https://lmspeed.net/provider/openference) | 99.10% | 99.31% | — | — | — | → 1.03x | 0 | — | — | 6m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.03% | 99.34% | 99.65% | 99.65% | — | ↑ 1.73x | 0 | — | — | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.03% | 99.26% | 51.42% | 51.42% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 99.03% | 96.69% | 96.43% | 96.43% | — | ↓ 0.84x | 0 | — | — | 5m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.02% | 93.42% | 5.08% | 5.08% | — | → 1.03x | 0 | — | — | 4m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.02% | 99.38% | 38.65% | 38.65% | — | ↑ 1.19x | 0 | — | — | 3m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.00% | 99.08% | 63.14% | 63.14% | — | ↓ 0.87x | 0 | — | — | 13m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (82)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.98% | 99.60% | 99.09% | 99.09% | — | ↑ 1.21x | 0 | — | — | 8m ago |
| [跑路中转站](https://lmspeed.net/provider/mrcwoods) | 98.94% | 98.94% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 98.89% | 99.41% | 99.79% | 99.79% | — | → 1.00x | 0 | — | — | 2m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.87% | 99.48% | 98.96% | 98.96% | — | → 1.05x | 0 | — | — | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.87% | 99.20% | 97.74% | 97.74% | — | → 1.04x | 0 | — | — | 11m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.86% | 98.08% | 66.05% | 66.05% | — | ↓ 0.92x | 0 | — | — | 10m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 98.86% | 99.30% | 32.93% | 32.93% | — | → 0.98x | 0 | — | — | 10m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 98.84% | 98.37% | — | — | — | → 0.99x | 0 | — | — | 6m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.77% | 99.16% | 99.76% | 99.76% | — | → 1.04x | 0 | — | — | 3m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 98.76% | 99.46% | 99.03% | 99.03% | — | → 1.01x | 0 | — | — | 1m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.75% | 99.48% | 81.07% | 81.07% | — | → 1.01x | 0 | — | — | 13m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 98.75% | 99.65% | 84.58% | 84.58% | — | → 1.03x | 0 | — | — | 12m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.74% | 99.38% | 55.08% | 55.08% | — | ↑ 1.64x | 0 | — | — | 11m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.73% | 98.20% | 98.75% | 98.75% | — | ↑ 1.48x | 0 | — | — | 9m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 98.72% | 99.47% | 96.87% | 96.87% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.66% | 99.51% | 98.00% | 98.00% | — | ↑ 1.63x | 0 | — | — | 4m ago |
| [iTokens](https://lmspeed.net/provider/itokens) | 98.55% | 98.55% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 98.49% | 99.58% | 83.46% | 83.46% | — | → 1.04x | 0 | — | — | 12m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.49% | 99.55% | 92.20% | 92.20% | — | → 0.97x | 0 | — | — | 11m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 98.42% | 99.31% | 99.76% | 99.76% | — | → 1.00x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 98.34% | 99.57% | 100.00% | 100.00% | — | ↑ 1.29x | 0 | — | — | 8m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 98.07% | 99.45% | 99.48% | 99.48% | — | ↓ 0.85x | 0 | — | — | 6m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 97.99% | 93.51% | 96.18% | 96.18% | — | ↑ 1.07x | 0 | — | — | 12m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 97.87% | 99.45% | 99.61% | 99.61% | — | ↓ 0.95x | 0 | — | — | 13m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 97.58% | 97.87% | 99.85% | 99.85% | — | ↑ 1.15x | 0 | — | — | 9m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 97.53% | 99.06% | 97.94% | 97.94% | — | → 1.01x | 0 | — | — | 2m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 96.98% | 49.13% | 98.24% | 98.24% | — | ↑ 1.13x | 0 | — | — | 12m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 96.98% | 99.08% | 98.66% | 98.66% | — | → 1.00x | 0 | — | — | 11m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 96.33% | 42.54% | 25.44% | 25.44% | — | ↑ 1.37x | 0 | — | — | 10m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.31% | 96.85% | 97.85% | 97.85% | — | → 1.01x | 0 | — | — | 9m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 96.21% | 97.49% | 89.02% | 89.02% | — | ↓ 0.87x | 0 | — | — | 4m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 95.92% | 87.73% | 99.98% | 99.98% | — | ↓ 0.38x | 0 | — | — | 8m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 95.79% | 99.00% | 99.45% | 99.45% | — | → 1.00x | 0 | — | — | 8m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 94.70% | 91.51% | 0.11% | 0.11% | — | ↑ 1.98x | 0 | — | — | 2m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 93.51% | 98.62% | 99.10% | 99.10% | — | → 1.03x | 0 | — | — | 9m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 93.08% | 97.21% | 99.88% | 99.88% | — | → 0.99x | 0 | — | — | 7m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.09% | 98.14% | 98.00% | 98.00% | — | → 0.95x | 0 | — | — | 12m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 90.29% | 23.44% | 93.54% | 93.54% | — | ↓ 0.40x | 0 | — | — | 8m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 88.93% | 17.48% | 20.58% | 20.58% | — | → 1.00x | 0 | — | — | 9m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 87.64% | 93.29% | 99.61% | 99.61% | — | ↓ 0.90x | 0 | — | — | 8m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 87.29% | 85.57% | — | — | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 85.71% | 88.53% | 69.98% | 69.98% | — | ↓ 0.95x | 0 | — | — | 3m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 79.54% | 78.99% | 99.92% | 99.92% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 76.72% | 74.41% | 40.01% | 40.01% | — | ↓ 0.83x | 0 | — | — | 3m ago |
| [Profundo AI](https://lmspeed.net/provider/profundo-ai) | 76.13% | 76.13% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 76.08% | 15.01% | 0.00% | 0.00% | — | → 1.00x | 0 | — | — | 8m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 74.37% | 79.42% | 83.85% | 83.85% | — | ↑ 1.74x | 0 | — | — | 12m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 74.12% | 79.81% | 78.01% | 78.01% | — | → 1.04x | 0 | — | — | 6m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 73.63% | 77.17% | 54.05% | 54.05% | — | ↑ 1.87x | 0 | — | — | 6m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 73.36% | 79.29% | 67.23% | 67.23% | — | ↑ 1.88x | 0 | — | — | 6m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 70.74% | 69.05% | 78.42% | 78.42% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 68.22% | 63.32% | 97.75% | 97.75% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 63.49% | 17.20% | 44.99% | 44.99% | — | ↓ 0.83x | 0 | — | — | 12m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 62.04% | 74.39% | 94.11% | 94.11% | — | ↓ 0.90x | 0 | — | — | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 57.91% | 73.68% | 87.06% | 87.06% | — | ↑ 1.48x | 0 | — | — | 12m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 56.99% | 70.20% | 75.11% | 75.11% | — | ↑ 1.75x | 0 | — | — | 6m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 56.37% | 70.96% | 86.29% | 86.29% | — | ↑ 1.96x | 0 | — | — | 3m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 54.92% | 69.73% | 66.07% | 66.07% | — | ↑ 1.65x | 0 | — | — | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 53.89% | 76.14% | 99.93% | 99.93% | — | ↑ 2.60x | 0 | — | — | 5m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 49.24% | 66.63% | 88.70% | 88.70% | — | ↑ 1.53x | 0 | — | — | 11m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 48.64% | 70.45% | 98.45% | 98.45% | — | ↑ 1.06x | 0 | — | — | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 47.99% | 66.75% | 44.62% | 44.62% | — | ↑ 1.14x | 0 | — | — | 12m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 47.51% | 63.91% | 68.41% | 68.41% | — | ↓ 0.92x | 0 | — | — | 6m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 46.78% | 70.29% | 68.13% | 68.13% | — | ↑ 1.17x | 0 | — | — | 2m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 46.54% | 62.15% | 50.52% | 50.52% | — | ↓ 0.86x | 0 | — | — | 6m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 46.47% | 63.57% | 86.23% | 86.23% | — | ↑ 1.31x | 0 | — | — | 5m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 45.25% | 66.21% | 99.65% | 99.65% | — | → 1.01x | 0 | — | — | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 45.08% | 15.34% | 92.86% | 92.86% | — | ↑ 1.61x | 0 | — | — | 11m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 44.83% | 66.28% | 63.15% | 63.15% | — | → 0.96x | 0 | — | — | 3m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 44.33% | 63.31% | 85.02% | 85.02% | — | ↑ 1.67x | 0 | — | — | 11m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 43.26% | 62.88% | 98.92% | 98.92% | — | ↑ 1.27x | 0 | — | — | 6m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 42.70% | 62.25% | 99.77% | 99.77% | — | ↑ 1.59x | 0 | — | — | 5m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 40.28% | 80.52% | 83.18% | 83.18% | — | ↑ 5.19x | 0 | — | — | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 37.45% | 7.36% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 8m ago |
| [xAI](https://lmspeed.net/provider/xai) | 37.27% | 7.50% | 23.13% | 23.13% | — | → 1.00x | 0 | — | — | 5m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 37.15% | 58.57% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 8m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 35.82% | 7.13% | 26.68% | 26.68% | — | → 1.00x | 0 | — | — | 13m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 33.85% | 6.63% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 26.67% | 22.97% | 22.80% | 22.80% | — | → 1.00x | 0 | — | — | 13m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 26.41% | 49.60% | 99.06% | 99.06% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 23.64% | 71.63% | 98.12% | 98.12% | — | ↓ 0.78x | 0 | — | — | 1m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 18.15% | 3.65% | 23.09% | 23.09% | — | → 1.00x | 0 | — | — | 4m ago |

</details>

<details open>
<summary><strong>🔴 Down (339)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [柚子的公益站](https://lmspeed.net/provider/provider-ai-bayunzi-shop) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.87% | 99.21% | 74.11% | 74.11% | — | → 1.04x | 0 | — | — | 13m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.87% | 99.80% | 100.00% | 100.00% | — | ↓ 0.38x | 0 | — | — | 7m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.87% | 99.71% | — | — | — | → 1.02x | 0 | — | — | 6m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.87% | 99.73% | — | — | — | ↑ 1.08x | 0 | — | — | 6m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 99.74% | 99.87% | — | — | — | → 1.02x | 0 | — | — | 6m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.50% | 99.63% | 66.42% | 66.42% | — | → 0.96x | 0 | — | — | 13m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.49% | 99.64% | — | — | — | ↑ 1.06x | 0 | — | — | 6m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 99.39% | 78.19% | 76.88% | 76.88% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.37% | 99.43% | 98.95% | 98.95% | — | → 0.99x | 0 | — | — | 10m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 99.36% | 89.48% | — | — | — | ↓ 0.19x | 0 | — | — | 6m ago |
| [Yomi API](https://lmspeed.net/provider/yomi-api) | 99.29% | 99.29% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.24% | 99.70% | 99.94% | 99.94% | — | ↑ 1.16x | 0 | — | — | 8m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.23% | 99.40% | — | — | — | → 1.02x | 0 | — | — | 6m ago |
| [Jasper](https://lmspeed.net/provider/jasper) | 98.97% | 99.67% | — | — | — | ↓ 0.64x | 0 | — | — | 6m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 98.84% | 98.94% | — | — | — | ↓ 0.88x | 0 | — | — | 6m ago |
| [JembatanAI](https://lmspeed.net/provider/jembatanai) | 98.80% | 98.80% | — | — | — | → 1.00x | 0 | — | — | 6m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 82.56% | 56.46% | 91.43% | 91.43% | — | ↓ 0.36x | 0 | — | — | 7m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 78.15% | 95.38% | — | — | — | ↑ 1.32x | 0 | — | — | 6m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 63.07% | 92.63% | 99.94% | 99.94% | — | → 1.04x | 0 | — | — | 9m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 62.36% | 92.36% | 1.90% | 1.90% | — | ↑ 5.46x | 0 | — | — | 3m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 55.78% | 71.65% | 10.72% | 10.72% | — | ↑ 1.57x | 0 | — | — | 11m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 53.84% | 68.91% | 99.78% | 99.78% | — | ↑ 1.59x | 0 | — | — | 4m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 52.07% | 72.36% | 98.89% | 98.89% | — | ↑ 2.24x | 0 | — | — | 5m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 49.30% | 53.95% | 98.37% | 98.37% | — | ↑ 1.38x | 0 | — | — | 7m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 49.01% | 64.16% | 54.78% | 54.78% | — | → 1.01x | 0 | — | — | 3m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 48.87% | 68.46% | 48.46% | 48.46% | — | ↑ 1.98x | 0 | — | — | 11m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 48.23% | 68.25% | 75.72% | 75.72% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 46.03% | 65.64% | 96.79% | 96.79% | — | ↑ 1.91x | 0 | — | — | 13m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 45.62% | 61.37% | 64.20% | 64.20% | — | ↑ 1.17x | 0 | — | — | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 44.70% | 64.97% | 99.09% | 99.09% | — | ↑ 1.22x | 0 | — | — | 4m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 44.52% | 61.77% | 98.53% | 98.53% | — | → 1.00x | 0 | — | — | 8m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 43.17% | 48.29% | 98.87% | 98.87% | — | ↑ 1.20x | 0 | — | — | 4m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 42.96% | 62.20% | 93.16% | 93.16% | — | → 1.02x | 0 | — | — | 12m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 42.80% | 65.60% | 96.32% | 96.32% | — | → 0.96x | 0 | — | — | 4m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 40.70% | 61.89% | 69.01% | 69.01% | — | → 1.00x | 0 | — | — | 12m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 39.04% | 16.72% | 7.76% | 7.76% | — | → 1.00x | 0 | — | — | 9m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 36.84% | 87.14% | 99.94% | 99.94% | — | ↑ 1.07x | 0 | — | — | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 31.71% | 58.60% | 91.98% | 91.98% | — | → 0.95x | 0 | — | — | 6m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 28.89% | 17.58% | 87.63% | 87.63% | — | → 1.00x | 0 | — | — | 12m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 25.82% | 56.48% | 93.77% | 93.77% | — | ↑ 1.17x | 0 | — | — | 4m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 22.72% | 48.03% | 52.45% | 52.45% | — | → 0.99x | 0 | — | — | 6m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 17.69% | 55.26% | 99.85% | 99.85% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 16.83% | 43.47% | 75.15% | 75.15% | — | → 1.02x | 0 | — | — | 1m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 14.92% | 56.14% | 6.48% | 6.48% | — | ↑ 3.79x | 0 | — | — | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 10.81% | 58.26% | 86.83% | 86.83% | — | ↑ 3.36x | 0 | — | — | 13m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 5.51% | 35.41% | — | — | — | ↑ 1.42x | 0 | — | — | 7m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 2.78% | 77.34% | 95.25% | 95.25% | — | → 1.01x | 0 | — | — | 9m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 2.18% | 0.43% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 7m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.49% | 0.54% | 0.10% | 0.10% | — | ↑ 1.65x | 0 | — | — | 2m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.13% | 21.83% | 98.59% | 98.59% | — | ↓ 0.59x | 0 | — | — | 9m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.13% | 46.73% | 6.05% | 6.05% | — | ↑ 24.66x | 0 | — | — | 9m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 0.00% | 26.26% | 99.82% | 99.82% | — | — | 0 | — | — | 7m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 63.31% | 63.31% | — | — | 0 | — | — | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 0 | — | — | 12m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.78% | 70.78% | — | — | 0 | — | — | 12m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 0 | — | — | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 0 | — | — | 13m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 0.00% | 57.22% | 99.61% | 99.61% | — | — | 0 | — | — | 6m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 0 | — | — | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.00% | 88.73% | 88.73% | — | — | 0 | — | — | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.00% | 99.82% | 99.82% | — | — | 0 | — | — | 9m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 0 | — | — | 10m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.00% | 73.96% | 73.96% | — | — | 0 | — | — | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 0 | — | — | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 0 | — | — | 3m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.02% | 79.86% | 79.86% | — | — | 0 | — | — | 10m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 55.40% | 64.61% | 64.61% | — | — | 0 | — | — | 11m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 40.15% | 40.15% | — | — | 0 | — | — | 2m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 78.19% | 76.64% | 76.64% | — | — | 0 | — | — | 3m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 0 | — | — | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.00% | 99.65% | 99.65% | — | — | 0 | — | — | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 0 | — | — | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 0 | — | — | 11m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.66% | 83.66% | — | — | 0 | — | — | 6m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 0 | — | — | 12m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 0 | — | — | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 0 | — | — | 6m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 0 | — | — | 4m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 0 | — | — | 5m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 0 | — | — | 2m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 1.00% | 83.11% | 83.11% | — | — | 0 | — | — | 10m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 0 | — | — | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 0 | — | — | 12m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.39% | 87.39% | — | — | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 0 | — | — | 12m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.00% | 99.75% | 99.75% | — | — | 0 | — | — | 6m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 20.63% | 68.70% | 68.70% | — | — | 0 | — | — | 8m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 0 | — | — | 1m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.00% | 98.15% | 98.15% | — | — | 0 | — | — | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.64% | 78.64% | — | — | 0 | — | — | 11m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 0.00% | 55.48% | 99.93% | 99.93% | — | — | 0 | — | — | 7m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 0 | — | — | 13m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.00% | 32.40% | 32.40% | — | — | 0 | — | — | 3m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 0 | — | — | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 0 | — | — | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.00% | 48.90% | 48.90% | — | — | 0 | — | — | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.00% | 90.67% | 90.67% | — | — | 0 | — | — | 7m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 74.51% | 47.85% | 47.85% | — | — | 0 | — | — | 3m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 14.90% | 100.00% | 100.00% | — | — | 0 | — | — | 9m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.88% | 31.88% | — | — | 0 | — | — | 12m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.00% | 99.73% | 99.73% | — | — | 0 | — | — | 9m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 0 | — | — | 3m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.34% | 32.34% | — | — | 0 | — | — | 8m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 0 | — | — | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 0 | — | — | 13m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 0 | — | — | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.00% | 96.06% | 96.06% | — | — | 0 | — | — | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.00% | 69.29% | 69.29% | — | — | 0 | — | — | 9m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.00% | 39.40% | 39.40% | — | — | 0 | — | — | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.00% | 64.35% | 64.35% | — | — | 0 | — | — | 12m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 0 | — | — | 11m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.00% | 98.70% | 98.70% | — | — | 0 | — | — | 8m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 29.70% | 97.23% | 97.23% | — | — | 0 | — | — | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 0 | — | — | 3m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 0 | — | — | 9m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.07% | 22.07% | — | — | 0 | — | — | 12m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.00% | 98.37% | 98.37% | — | — | 0 | — | — | 12m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 0 | — | — | 13m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 0 | — | — | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 0 | — | — | 6m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 0 | — | — | 12m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 0 | — | — | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 0 | — | — | 4m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.00% | 99.92% | 99.92% | — | — | 0 | — | — | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 0 | — | — | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.00% | 98.40% | 98.40% | — | — | 0 | — | — | 8m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.00% | 99.74% | 99.74% | — | — | 0 | — | — | 5m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 0 | — | — | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.00% | 81.13% | 81.13% | — | — | 0 | — | — | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 0 | — | — | 1m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 0 | — | — | 6m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.00% | 99.84% | 99.84% | — | — | 0 | — | — | 5m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 0 | — | — | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 0 | — | — | 11m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 0 | — | — | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 0 | — | — | 4m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 0 | — | — | 9m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 0 | — | — | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.00% | 74.74% | 74.74% | — | — | 0 | — | — | 9m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.90% | 47.90% | — | — | 0 | — | — | 12m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.00% | 99.25% | 99.25% | — | — | 0 | — | — | 9m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.00% | 91.99% | 91.99% | — | — | 0 | — | — | 9m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 22.80% | 22.80% | — | — | 0 | — | — | 2m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.00% | 98.05% | 98.05% | — | — | 0 | — | — | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 0 | — | — | 11m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 0 | — | — | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 0 | — | — | 9m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 0 | — | — | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 0 | — | — | 6m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 0 | — | — | 8m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 0 | — | — | 2m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.00% | 75.74% | 75.74% | — | — | 0 | — | — | 9m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 0 | — | — | 5m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 0 | — | — | 11m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 9m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.74% | 70.74% | — | — | 0 | — | — | 12m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 0 | — | — | 3m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 0 | — | — | 10m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.15% | 34.65% | 34.65% | — | — | 0 | — | — | 12m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 0 | — | — | 5m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 0 | — | — | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 38.64% | 38.64% | — | — | 0 | — | — | 1m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 22.32% | 22.32% | — | — | 0 | — | — | 4m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 0 | — | — | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.00% | 91.04% | 91.04% | — | — | 0 | — | — | 9m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 0 | — | — | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 0 | — | — | 12m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 50.95% | 84.75% | 84.75% | — | — | 0 | — | — | 10m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.00% | 99.29% | 99.29% | — | — | 0 | — | — | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 0 | — | — | 10m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 0.00% | 67.63% | 89.73% | 89.73% | — | — | 0 | — | — | 4m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 0 | — | — | 6m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.32% | 73.32% | — | — | 0 | — | — | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 0 | — | — | 12m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 0 | — | — | 11m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 0 | — | — | 5m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 20.82% | 20.82% | — | — | 0 | — | — | 2m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 0 | — | — | 9m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 0 | — | — | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 0 | — | — | 3m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 29.74% | 99.80% | 99.80% | — | — | 0 | — | — | 4m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.00% | 92.62% | 92.62% | — | — | 0 | — | — | 5m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 0 | — | — | 6m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 27.77% | 27.77% | — | — | 0 | — | — | 12m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 0 | — | — | 3m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 0.00% | 53.49% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.10% | 49.10% | — | — | 0 | — | — | 3m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 0 | — | — | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.07% | 65.07% | — | — | 0 | — | — | 11m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.00% | 99.12% | 99.12% | — | — | 0 | — | — | 3m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.00% | 92.19% | 92.19% | — | — | 0 | — | — | 11m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 5m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 0 | — | — | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 45.98% | 45.98% | — | — | 0 | — | — | 3m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.00% | 92.63% | 92.63% | — | — | 0 | — | — | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 0 | — | — | 11m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 0 | — | — | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 0 | — | — | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 0 | — | — | 13m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 0 | — | — | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.00% | 99.81% | 99.81% | — | — | 0 | — | — | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.39% | 72.39% | — | — | 0 | — | — | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 0 | — | — | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.80% | 46.80% | — | — | 0 | — | — | 8m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 0 | — | — | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 0 | — | — | 13m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.72% | 68.72% | — | — | 0 | — | — | 5m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 0 | — | — | 13m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 0 | — | — | 6m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.49% | 35.49% | — | — | 0 | — | — | 11m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 0 | — | — | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 0 | — | — | 4m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 23.11% | 23.11% | — | — | 0 | — | — | 4m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.00% | 99.60% | 99.60% | — | — | 0 | — | — | 9m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 0 | — | — | 12m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 50.94% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 0 | — | — | 12m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.60% | 22.60% | — | — | 0 | — | — | 8m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.92% | 30.92% | — | — | 0 | — | — | 9m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.00% | 68.76% | 68.76% | — | — | 0 | — | — | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 0 | — | — | 9m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.02% | 38.02% | — | — | 0 | — | — | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.16% | 17.16% | — | — | 0 | — | — | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 0 | — | — | 11m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 6m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.00% | 23.40% | 23.40% | — | — | 0 | — | — | 13m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 0.00% | 53.31% | 82.00% | 82.00% | — | — | 0 | — | — | 7m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.00% | 99.53% | 99.53% | — | — | 0 | — | — | 5m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 0 | — | — | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 21.71% | 21.71% | — | — | 0 | — | — | 3m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 0 | — | — | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.49% | 25.49% | — | — | 0 | — | — | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 0 | — | — | 12m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 0.00% | 73.75% | 98.78% | 98.78% | — | — | 0 | — | — | 3m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 0 | — | — | 10m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 0.00% | 71.25% | 98.12% | 98.12% | — | — | 0 | — | — | 11m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 0 | — | — | 9m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 0 | — | — | 3m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 0.00% | 38.56% | 99.88% | 99.88% | — | — | 0 | — | — | 8m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.00% | 76.63% | 76.63% | — | — | 0 | — | — | 7m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 32.96% | 32.96% | — | — | 0 | — | — | 3m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 0 | — | — | 9m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.00% | 98.48% | 98.48% | — | — | 0 | — | — | 12m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 0 | — | — | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 0 | — | — | 11m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 49.76% | 89.40% | 89.40% | — | — | 0 | — | — | 12m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 0 | — | — | 2m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 0.00% | 57.84% | 17.31% | 17.31% | — | — | 0 | — | — | 3m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 0 | — | — | 10m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 0 | — | — | 2m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 0.00% | 68.67% | 24.63% | 24.63% | — | — | 0 | — | — | 1m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 0 | — | — | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 60.97% | 60.97% | — | — | 0 | — | — | 10m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 0 | — | — | 4m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.35% | 1.35% | — | — | 0 | — | — | 9m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 0 | — | — | 12m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 0.00% | 71.67% | 99.78% | 99.78% | — | — | 0 | — | — | 11m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.00% | 91.72% | 91.72% | — | — | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.00% | 99.17% | 99.17% | — | — | 0 | — | — | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 9m ago |

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
