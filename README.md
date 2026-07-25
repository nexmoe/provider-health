# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**694 providers** — 290 🟢 operational · 95 🟡 degraded · 307 🔴 down · 2 ⚫ unknown

_Updated 2026-07-25 05:46 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.79% | 98.73% | 98.73% | — | → 1.04x | 0 | — | — | 29s ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 99.82% | 99.08% | 99.08% | — | → 0.98x | 0 | — | — | 9m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.64% | 99.10% | 99.10% | — | → 1.01x | 0 | — | — | 9m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 100.00% | 99.86% | 97.57% | 97.57% | — | → 0.98x | 6 | 0s | 19d ago | 1m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.79% | 99.70% | 99.70% | — | → 0.98x | 0 | — | — | 9m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.76% | 99.65% | 99.65% | — | ↓ 0.88x | 0 | — | — | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 99.90% | 99.74% | 99.74% | — | → 0.96x | 3 | 0s | 17d ago | 5m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 99.86% | 60.60% | 60.60% | — | → 0.99x | 0 | — | — | 51s ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.82% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 12m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.89% | 63.68% | 63.68% | — | ↓ 0.92x | 0 | — | — | 30s ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 99.79% | 99.97% | 99.97% | — | → 1.00x | 0 | — | — | 10m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 99.75% | 99.30% | 99.30% | — | ↑ 1.11x | 0 | — | — | 11m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.89% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 8m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.75% | 99.66% | 99.66% | — | → 1.00x | 0 | — | — | 7m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.82% | 89.57% | 89.57% | — | → 1.01x | 0 | — | — | 12m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.71% | 99.86% | 99.86% | — | → 1.03x | 0 | — | — | 8m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 99.65% | 99.90% | 99.90% | — | → 0.99x | 0 | — | — | 5m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.92% | 99.83% | 99.98% | 99.98% | — | ↑ 1.05x | 1 | 4m | 22d ago | 6m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.92% | 99.69% | 99.28% | 99.28% | — | → 1.03x | 2 | 0s | 18d ago | 5m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.92% | 99.72% | 17.47% | 17.47% | — | ↓ 0.88x | 1 | 14d 1h | 30d ago | 5m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.92% | 99.76% | 99.81% | 99.81% | — | → 0.98x | 0 | — | — | 5m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.92% | 99.72% | 99.94% | 99.94% | — | ↓ 0.92x | 0 | — | — | 4m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.92% | 99.72% | 99.58% | 99.58% | — | → 0.99x | 1 | 2h | 16d ago | 4m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 99.92% | 99.69% | 98.92% | 98.92% | — | → 0.99x | 0 | — | — | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.92% | 99.79% | 99.02% | 99.02% | — | → 1.01x | 2 | 0s | 26d ago | 3m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 99.92% | 99.72% | 0.11% | 0.11% | — | → 1.01x | 1 | 14d 1h | 30d ago | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.92% | 99.55% | 99.87% | 99.87% | — | → 0.96x | 1 | 0s | 18d ago | 3m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.92% | 99.44% | 99.62% | 99.62% | — | ↑ 1.07x | 1 | 0s | 18d ago | 3m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 99.92% | 99.69% | 77.28% | 77.28% | — | → 0.98x | 1 | 14d 1h | 30d ago | 1m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.92% | 99.65% | 99.34% | 99.34% | — | → 1.00x | 0 | — | — | 2m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.92% | 99.79% | 99.95% | 99.95% | — | → 0.98x | 0 | — | — | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.92% | 99.61% | 62.65% | 62.65% | — | → 0.98x | 0 | — | — | 51s ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.92% | 99.65% | 64.92% | 64.92% | — | → 1.04x | 0 | — | — | 30s ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.92% | 99.75% | 99.61% | 99.61% | — | → 0.99x | 0 | — | — | 31s ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.92% | 99.44% | 69.87% | 69.87% | — | → 0.98x | 4 | 0s | 19d ago | 30s ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.92% | 99.75% | 83.46% | 83.46% | — | → 1.01x | 2 | 0s | 18d ago | 10s ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 99.92% | 99.58% | 98.00% | 98.00% | — | → 1.03x | 0 | — | — | 11s ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.92% | 99.75% | 99.31% | 99.31% | — | → 0.96x | 0 | — | — | 12m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.92% | 99.79% | 99.97% | 99.97% | — | → 0.98x | 0 | — | — | 12m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.92% | 99.61% | 97.90% | 97.90% | — | ↑ 1.12x | 0 | — | — | 12m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.92% | 99.82% | 97.00% | 97.00% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.92% | 99.61% | 98.74% | 98.74% | — | → 0.97x | 0 | — | — | 12m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.92% | 99.72% | 98.73% | 98.73% | — | → 0.99x | 0 | — | — | 11m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.92% | 99.22% | 76.90% | 76.90% | — | → 1.00x | 0 | — | — | 11m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.92% | 99.58% | 95.85% | 95.85% | — | → 0.97x | 0 | — | — | 11m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 99.92% | 99.86% | 98.81% | 98.81% | — | → 0.98x | 0 | — | — | 11m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 99.92% | 99.68% | 64.61% | 64.61% | — | → 1.02x | 1 | 4d 6h | 24d ago | 11m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 99.92% | 99.33% | 98.85% | 98.85% | — | → 1.02x | 0 | — | — | 11m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.92% | 98.37% | 90.79% | 90.79% | — | → 1.04x | 1 | 0s | 18d ago | 11m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 99.92% | 99.43% | 84.75% | 84.75% | — | → 0.96x | 1 | 0s | 22d ago | 10m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.92% | 99.82% | 98.47% | 98.47% | — | ↑ 1.10x | 0 | — | — | 10m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.92% | 99.79% | 31.33% | 31.33% | — | → 1.01x | 1 | 14d 1h | 30d ago | 10m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.92% | 99.50% | 99.89% | 99.89% | — | → 0.95x | 0 | — | — | 9m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.92% | 99.64% | 100.00% | 100.00% | — | ↓ 0.95x | 0 | — | — | 9m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.92% | 99.68% | 0.00% | 0.00% | — | → 1.00x | 1 | 14d 1h | 30d ago | 8m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.92% | 99.61% | 99.95% | 99.95% | — | → 1.03x | 0 | — | — | 8m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.92% | 99.75% | 24.52% | 24.52% | — | ↑ 1.19x | 1 | 14d 1h | 30d ago | 8m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.92% | 99.68% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 8m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.92% | 99.79% | 98.04% | 98.04% | — | → 1.00x | 0 | — | — | 10m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.92% | 99.21% | 99.85% | 99.85% | — | → 0.95x | 0 | — | — | 7m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.92% | 99.64% | 99.77% | 99.77% | — | → 1.03x | 1 | 0s | 18d ago | 8m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.83% | 99.66% | 68.59% | 68.59% | — | → 0.99x | 1 | 14d 1h | 30d ago | 6m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.83% | 99.69% | 36.33% | 36.33% | — | → 0.95x | 2 | 2m | 22d ago | 6m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.83% | 99.66% | 98.93% | 98.93% | — | → 0.97x | 1 | 0s | 19d ago | 5m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.83% | 99.72% | 99.76% | 99.76% | — | ↓ 0.95x | 0 | — | — | 5m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.83% | 99.72% | 70.89% | 70.89% | — | → 1.01x | 1 | 14d 1h | 30d ago | 5m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.83% | 99.52% | 99.74% | 99.74% | — | → 1.02x | 0 | — | — | 5m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.83% | 99.69% | 44.95% | 44.95% | — | → 0.99x | 0 | — | — | 5m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 99.83% | 99.62% | 97.57% | 97.57% | — | → 1.01x | 0 | — | — | 4m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 99.83% | 99.62% | 89.73% | 89.73% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 99.83% | 99.65% | 99.90% | 99.90% | — | ↓ 0.94x | 0 | — | — | 4m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.83% | 99.72% | 22.33% | 22.33% | — | ↓ 0.94x | 1 | 14d 1h | 30d ago | 4m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.83% | 99.55% | 99.92% | 99.92% | — | → 0.99x | 1 | 0s | 16d ago | 4m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 99.83% | 73.32% | 76.64% | 76.64% | — | → 0.98x | 1 | 14d 1h | 30d ago | 3m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.83% | 99.76% | 99.98% | 99.98% | — | → 0.99x | 0 | — | — | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.83% | 99.72% | 99.90% | 99.90% | — | → 0.99x | 0 | — | — | 3m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 99.83% | 99.72% | 99.97% | 99.97% | — | → 0.97x | 0 | — | — | 4m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 99.83% | 99.69% | 99.49% | 99.49% | — | → 1.00x | 0 | — | — | 4m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.83% | 99.58% | 76.89% | 76.89% | — | → 0.97x | 1 | 14d 1h | 30d ago | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.83% | 99.76% | 99.85% | 99.85% | — | → 0.98x | 0 | — | — | 2m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.83% | 99.79% | 99.37% | 99.37% | — | → 1.01x | 0 | — | — | 1m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.83% | 99.51% | 66.42% | 66.42% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.83% | 99.62% | 88.17% | 88.17% | — | → 1.01x | 1 | 14d 1h | 30d ago | 2m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.83% | 99.69% | 5.16% | 5.16% | — | ↓ 0.95x | 1 | 14d 1h | 30d ago | 1m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.83% | 99.69% | 99.67% | 99.67% | — | → 0.98x | 2 | 14h 30m | 17d ago | 1m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.83% | 99.75% | 93.26% | 93.26% | — | ↓ 0.91x | 0 | — | — | 51s ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.83% | 99.61% | 68.50% | 68.50% | — | → 0.96x | 0 | — | — | 30s ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.83% | 99.68% | 99.88% | 99.88% | — | → 0.99x | 0 | — | — | 30s ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.83% | 99.82% | 71.79% | 71.79% | — | ↑ 1.06x | 0 | — | — | 30s ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.83% | 99.72% | 84.58% | 84.58% | — | → 0.99x | 0 | — | — | 10s ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.83% | 99.68% | 77.97% | 77.97% | — | → 1.03x | 1 | 0s | 17d ago | 11s ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.83% | 99.79% | 90.32% | 90.32% | — | → 1.01x | 0 | — | — | 12m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.83% | 99.65% | 91.09% | 91.09% | — | → 0.99x | 1 | 0s | 27d ago | 12m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.83% | 99.72% | 99.18% | 99.18% | — | ↑ 1.05x | 0 | — | — | 12m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.83% | 99.79% | 58.17% | 58.17% | — | ↑ 1.57x | 1 | 14d 1h | 30d ago | 12m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.83% | 99.75% | 26.43% | 26.43% | — | → 1.00x | 1 | 4d 7h | 30d ago | 11m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 99.83% | 99.68% | 43.99% | 43.99% | — | ↓ 0.89x | 1 | 14d 1h | 30d ago | 11m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.83% | 99.47% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 11m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.83% | 99.72% | 98.47% | 98.47% | — | → 0.96x | 1 | 0s | 24d ago | 11m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.83% | 99.72% | 98.78% | 98.78% | — | → 0.96x | 1 | 0s | 16d ago | 11m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.83% | 99.61% | 99.87% | 99.87% | — | ↑ 1.10x | 1 | 0s | 29d ago | 10m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 99.83% | 99.61% | 99.87% | 99.87% | — | → 0.98x | 0 | — | — | 10m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.83% | 99.79% | 93.73% | 93.73% | — | → 0.99x | 0 | — | — | 10m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 99.83% | 99.50% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 9m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.83% | 99.68% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 9m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 99.83% | 99.71% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 9m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 99.83% | 99.68% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 9m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.83% | 99.64% | 97.87% | 97.87% | — | → 0.98x | 0 | — | — | 10m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 99.83% | 99.71% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 9m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.83% | 89.65% | 87.87% | 87.87% | — | ↑ 1.05x | 1 | 0s | 29d ago | 8m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.83% | 99.18% | 99.97% | 99.97% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.83% | 99.61% | 99.94% | 99.94% | — | → 0.98x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.83% | 99.75% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 8m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.83% | 99.61% | 99.97% | 99.97% | — | ↑ 1.13x | 0 | — | — | 8m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.83% | 99.71% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 8m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.83% | 99.68% | 99.98% | 99.98% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.83% | 99.75% | 99.61% | 99.61% | — | ↓ 0.94x | 0 | — | — | 7m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.83% | 99.64% | 91.90% | 91.90% | — | → 1.03x | 2 | 4h 41m | 29d ago | 7m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.83% | 99.79% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 7m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 99.83% | 99.64% | 96.87% | 96.87% | — | → 1.00x | 0 | — | — | 8m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.83% | 99.75% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 8m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.83% | 99.71% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 7m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.83% | 99.00% | 88.31% | 88.31% | — | → 1.04x | 0 | — | — | 8m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.83% | 99.53% | 99.85% | 99.85% | — | → 0.97x | 2 | 0s | 18d ago | 8m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.83% | 99.64% | 99.92% | 99.92% | — | → 1.01x | 1 | 0s | 25d ago | 8m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.83% | 99.68% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 7m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.83% | 98.68% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 7m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.83% | 99.75% | 99.67% | 99.67% | — | ↑ 1.10x | 1 | 0s | 19d ago | 7m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 99.83% | 99.71% | 100.00% | 100.00% | — | → 1.04x | 0 | — | — | 7m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.83% | 99.93% | — | — | — | → 0.99x | 0 | — | — | 7m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.83% | 99.82% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 7m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.75% | 99.66% | 98.78% | 98.78% | — | → 1.00x | 14 | 7s | 22d ago | 6m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 99.75% | 99.65% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 5m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.75% | 99.48% | 49.74% | 49.74% | — | → 1.01x | 5 | 41m | 26d ago | 5m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.75% | 99.62% | 76.22% | 76.22% | — | → 1.00x | 1 | 14d 1h | 30d ago | 5m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.75% | 99.55% | 99.74% | 99.74% | — | → 1.03x | 1 | 4s | 19d ago | 5m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.75% | 99.55% | 99.58% | 99.58% | — | ↑ 1.13x | 2 | 0s | 19d ago | 5m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 99.75% | 99.79% | 1.90% | 1.90% | — | → 1.02x | 1 | 14d 1h | 30d ago | 3m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.75% | 98.93% | 99.64% | 99.64% | — | ↓ 0.93x | 5 | 57m | 20d ago | 4m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.75% | 99.44% | 99.87% | 99.87% | — | → 0.98x | 1 | 0s | 24d ago | 3m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.75% | 99.48% | 99.84% | 99.84% | — | → 0.97x | 0 | — | — | 3m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.75% | 99.62% | 99.92% | 99.92% | — | → 1.00x | 1 | 0s | 18d ago | 3m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 99.75% | 99.37% | 97.94% | 97.94% | — | → 1.04x | 2 | 30m | 21d ago | 2m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.75% | 99.76% | 80.20% | 80.20% | — | → 0.98x | 1 | 0s | 18d ago | 2m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.75% | 81.73% | 99.03% | 99.03% | — | → 1.00x | 0 | — | — | 1m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.75% | 99.58% | 99.48% | 99.48% | — | → 0.97x | 0 | — | — | 2m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.75% | 99.72% | 30.20% | 30.20% | — | → 0.98x | 1 | 14d 1h | 30d ago | 1m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.58% | 24.54% | 24.54% | — | → 1.04x | 0 | — | — | 1m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.75% | 99.55% | 96.32% | 96.32% | — | → 1.02x | 0 | — | — | 1m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.75% | 99.65% | 96.88% | 96.88% | — | → 1.02x | 0 | — | — | 30s ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.75% | 99.68% | 94.26% | 94.26% | — | ↑ 1.09x | 0 | — | — | 12m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 99.75% | 99.72% | 66.50% | 66.50% | — | ↑ 1.07x | 1 | 14d 1h | 30d ago | 12m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.68% | 98.38% | 98.38% | — | → 1.02x | 1 | 6h 52m | 29d ago | 12m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.75% | 99.72% | 98.90% | 98.90% | — | → 0.99x | 0 | — | — | 12m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.75% | 99.26% | 97.03% | 97.03% | — | → 0.96x | 0 | — | — | 11m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.75% | 99.72% | 96.69% | 96.69% | — | → 0.98x | 0 | — | — | 11m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 99.75% | 99.75% | 99.86% | 99.86% | — | → 1.02x | 0 | — | — | 11m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 99.75% | 99.58% | 99.83% | 99.83% | — | → 1.00x | 0 | — | — | 11m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 99.75% | 99.72% | 43.48% | 43.48% | — | → 0.99x | 1 | 14d 1h | 30d ago | 11m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.75% | 99.40% | 99.74% | 99.74% | — | → 0.99x | 0 | — | — | 11m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.75% | 99.58% | 86.85% | 86.85% | — | → 0.99x | 0 | — | — | 11m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.75% | 99.47% | 97.80% | 97.80% | — | → 1.00x | 0 | — | — | 11m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 99.75% | 99.68% | 29.98% | 29.98% | — | → 0.99x | 1 | 14d 1h | 30d ago | 11m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.75% | 99.61% | 99.93% | 99.93% | — | → 0.99x | 1 | 0s | 18d ago | 10m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 99.75% | 99.72% | 6.05% | 6.05% | — | ↑ 1.07x | 1 | 14d 1h | 30d ago | 10m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.68% | 98.43% | 98.43% | — | → 0.95x | 0 | — | — | 10m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.75% | 99.54% | 89.89% | 89.89% | — | → 1.01x | 1 | 0s | 17d ago | 9m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.75% | 99.72% | 0.00% | 0.00% | — | ↓ 0.94x | 1 | 14d 1h | 30d ago | 9m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.75% | 99.61% | 97.35% | 97.35% | — | ↓ 0.95x | 2 | 2h 51m | 22d ago | 9m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.68% | 99.94% | 99.94% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.75% | 99.39% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 8m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 99.75% | 99.57% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 8m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 99.75% | 97.85% | 39.41% | 39.41% | — | ↑ 1.15x | 23 | 13m | 18d ago | 8m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.75% | 99.71% | 60.72% | 60.72% | — | ↓ 0.85x | 0 | — | — | 7m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.75% | 99.53% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 7m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.67% | 99.66% | 99.98% | 99.98% | — | → 1.01x | 1 | 4m | 22d ago | 6m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.67% | 99.52% | 99.75% | 99.75% | — | ↓ 0.91x | 0 | — | — | 5m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 99.67% | 56.67% | 0.00% | 0.00% | — | ↓ 0.88x | 1 | 14d 1h | 30d ago | 5m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.67% | 99.45% | 95.68% | 95.68% | — | → 0.98x | 1 | 6d 1h | 30d ago | 5m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 99.67% | 99.59% | 99.65% | 99.65% | — | ↑ 1.12x | 0 | — | — | 5m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 99.67% | 99.62% | 98.00% | 98.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.67% | 99.58% | 99.73% | 99.73% | — | → 1.00x | 0 | — | — | 4m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 99.67% | 95.56% | 47.85% | 47.85% | — | → 0.99x | 1 | 14d 1h | 30d ago | 3m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.67% | 99.31% | 38.65% | 38.65% | — | → 1.01x | 1 | 14d 1h | 30d ago | 3m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.67% | 99.51% | 99.77% | 99.77% | — | → 0.97x | 0 | — | — | 3m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.67% | 99.55% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.67% | 99.58% | 50.15% | 50.15% | — | ↑ 1.05x | 0 | — | — | 1m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.67% | 99.62% | 54.70% | 54.70% | — | → 0.98x | 0 | — | — | 1m ago |
| [Groq](https://lmspeed.net/provider/groq) | 99.67% | 99.44% | 76.97% | 76.97% | — | → 0.96x | 1 | 14d 1h | 30d ago | 2m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.67% | 99.69% | 99.87% | 99.87% | — | → 0.99x | 0 | — | — | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.67% | 99.69% | 25.33% | 25.33% | — | → 0.99x | 1 | 0s | 29d ago | 1m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.67% | 99.58% | 24.63% | 24.63% | — | ↑ 1.11x | 0 | — | — | 1m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.67% | 99.44% | 99.79% | 99.79% | — | → 0.98x | 3 | 0s | 17d ago | 2m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 99.67% | 98.04% | 38.36% | 38.36% | — | ↑ 1.09x | 0 | — | — | 51s ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.66% | 99.54% | 99.35% | 99.35% | — | ↑ 1.13x | 0 | — | — | 30s ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.66% | 99.40% | 69.43% | 69.43% | — | → 1.02x | 0 | — | — | 30s ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.66% | 99.58% | 81.07% | 81.07% | — | → 0.98x | 0 | — | — | 30s ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 99.66% | 99.40% | 89.40% | 89.40% | — | → 1.01x | 0 | — | — | 10s ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.66% | 99.47% | 90.95% | 90.95% | — | ↑ 1.09x | 1 | 0s | 23d ago | 12m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.66% | 98.98% | 28.39% | 28.39% | — | ↑ 1.15x | 1 | 14d 1h | 30d ago | 12m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 99.66% | 99.54% | 99.83% | 99.83% | — | ↑ 1.10x | 0 | — | — | 12m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.66% | 99.72% | 99.00% | 99.00% | — | ↑ 1.12x | 0 | — | — | 12m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.66% | 98.66% | 98.96% | 98.96% | — | → 1.00x | 0 | — | — | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.66% | 99.72% | 92.20% | 92.20% | — | → 0.99x | 6 | 0s | 20d ago | 11m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 99.66% | 99.58% | 99.78% | 99.78% | — | → 1.04x | 0 | — | — | 11m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.66% | 99.58% | 98.56% | 98.56% | — | → 0.99x | 0 | — | — | 11m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.66% | 99.43% | 98.11% | 98.11% | — | → 1.00x | 0 | — | — | 11m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.66% | 99.72% | 98.69% | 98.69% | — | → 1.00x | 0 | — | — | 11m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.66% | 99.58% | 96.94% | 96.94% | — | → 1.04x | 1 | 0s | 18d ago | 11m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.66% | 99.61% | 98.37% | 98.37% | — | → 1.02x | 0 | — | — | 11m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 99.66% | 78.90% | 97.48% | 97.48% | — | → 1.04x | 1 | 0s | 17d ago | 11m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.66% | 99.61% | 99.51% | 99.51% | — | → 0.97x | 0 | — | — | 9m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.66% | 99.64% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 9m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.66% | 99.43% | 96.10% | 96.10% | — | → 1.05x | 0 | — | — | 9m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.66% | 99.32% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 8m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.66% | 99.64% | 99.97% | 99.97% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.66% | 99.64% | 99.98% | 99.98% | — | → 0.98x | 0 | — | — | 8m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.66% | 99.64% | 100.00% | 100.00% | — | → 1.00x | 0 | — | — | 8m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.66% | 99.32% | 99.09% | 99.09% | — | → 1.00x | 1 | 20m | 28d ago | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 99.66% | 99.32% | 99.94% | 99.94% | — | → 1.00x | 0 | — | — | 8m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 99.66% | 99.64% | — | — | — | ↑ 1.36x | 0 | — | — | 7m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 99.66% | 99.68% | 99.93% | 99.93% | — | → 1.00x | 1 | 0s | 17d ago | 7m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 99.66% | 99.57% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 7m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 99.66% | 99.64% | 99.48% | 99.48% | — | → 1.00x | 1 | 4m | 21d ago | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 99.59% | 99.31% | 99.61% | 99.61% | — | → 0.98x | 0 | — | — | 5m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 99.59% | 99.62% | 75.23% | 75.23% | — | → 0.99x | 1 | 14d 1h | 30d ago | 5m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.59% | 99.41% | 99.62% | 99.62% | — | → 1.02x | 0 | — | — | 5m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.58% | 98.86% | 51.42% | 51.42% | — | → 0.98x | 1 | 0s | 21d ago | 5m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.58% | 99.41% | 56.98% | 56.98% | — | → 1.00x | 0 | — | — | 3m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.58% | 99.30% | 24.43% | 24.43% | — | → 0.99x | 0 | — | — | 1m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 99.58% | 99.61% | 65.57% | 65.57% | — | → 1.02x | 0 | — | — | 51s ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 99.58% | 96.03% | 74.00% | 74.00% | — | → 1.00x | 8 | 38m | 20d ago | 10s ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.58% | 99.47% | 98.66% | 98.66% | — | → 1.01x | 0 | — | — | 11m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.58% | 99.72% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 11m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 99.58% | 99.58% | 98.35% | 98.35% | — | ↑ 1.18x | 0 | — | — | 11m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.58% | 99.54% | 28.78% | 28.78% | — | ↑ 1.15x | 1 | 14d 1h | 30d ago | 11m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.58% | 99.47% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 11m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 99.58% | 99.54% | 55.08% | 55.08% | — | → 1.01x | 13 | 0s | 17d ago | 11m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.58% | 99.54% | 96.80% | 96.80% | — | → 1.00x | 0 | — | — | 10m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.58% | 95.11% | 99.82% | 99.82% | — | → 1.00x | 1 | 0s | 27d ago | 10m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 99.58% | 99.29% | 99.86% | 99.86% | — | ↑ 1.06x | 0 | — | — | 10m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.58% | 99.36% | 99.67% | 99.67% | — | → 1.00x | 0 | — | — | 9m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.58% | 99.43% | 14.21% | 14.21% | — | → 1.00x | 1 | 14d 1h | 30d ago | 10m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.58% | 99.57% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 8m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.58% | 99.57% | 99.85% | 99.85% | — | → 0.99x | 1 | 3m | 18d ago | 8m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.58% | 99.57% | 16.67% | 16.67% | — | → 0.98x | 1 | 14d 1h | 30d ago | 8m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.58% | 99.36% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 8m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.58% | 99.68% | — | — | — | ↑ 1.05x | 0 | — | — | 7m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.50% | 99.45% | 99.96% | 99.96% | — | → 0.98x | 0 | — | — | 4m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.50% | 99.48% | 99.91% | 99.91% | — | → 1.00x | 0 | — | — | 4m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.50% | 99.41% | 22.94% | 22.94% | — | → 1.01x | 0 | — | — | 3m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 99.50% | 99.48% | 22.30% | 22.30% | — | ↑ 1.14x | 2 | 0s | 18d ago | 2m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.49% | 99.51% | 56.85% | 56.85% | — | → 1.04x | 1 | 15h 38m | 29d ago | 11m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.49% | 99.47% | 98.81% | 98.81% | — | → 1.03x | 0 | — | — | 11m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 99.49% | 98.73% | 83.10% | 83.10% | — | → 1.04x | 3 | 17h 4m | 24d ago | 11m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.49% | 99.57% | 99.34% | 99.34% | — | ↓ 0.95x | 3 | 0s | 17d ago | 10m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.49% | 99.29% | 99.97% | 99.97% | — | → 1.04x | 0 | — | — | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 99.49% | 99.25% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 8m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.49% | 99.64% | 99.45% | 99.45% | — | → 0.99x | 2 | 3h 1m | 23d ago | 8m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.49% | 99.53% | — | — | — | → 1.04x | 0 | — | — | 7m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 99.42% | 99.59% | 99.49% | 99.49% | — | → 1.02x | 1 | 9h 50m | 28d ago | 5m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.42% | 99.48% | 99.60% | 99.60% | — | → 1.01x | 1 | 2s | 18d ago | 5m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.42% | 99.31% | 97.98% | 97.98% | — | → 0.97x | 0 | — | — | 5m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.42% | 99.51% | 99.85% | 99.85% | — | → 0.98x | 2 | 0s | 17d ago | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.42% | 99.41% | 97.28% | 97.28% | — | → 1.02x | 0 | — | — | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 99.41% | 99.44% | 82.26% | 82.26% | — | → 1.01x | 0 | — | — | 10s ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.41% | 99.44% | 91.87% | 91.87% | — | → 1.02x | 1 | 30m | 27d ago | 11m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.41% | 99.47% | 93.61% | 93.61% | — | → 1.00x | 6 | 39m | 18d ago | 9m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.41% | 99.43% | 99.71% | 99.71% | — | ↓ 0.95x | 1 | 0s | 18d ago | 10m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 99.41% | 99.43% | 99.85% | 99.85% | — | → 0.98x | 1 | 6h 1m | 17d ago | 9m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 99.34% | 99.00% | 99.85% | 99.85% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.33% | 99.51% | 24.91% | 24.91% | — | → 0.98x | 1 | 0s | 29d ago | 1m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.33% | 99.04% | 97.10% | 97.10% | — | → 1.02x | 1 | 0s | 24d ago | 10m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.32% | 99.36% | 98.56% | 98.56% | — | → 1.00x | 1 | 3h 29m | 27d ago | 9m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 99.32% | 99.13% | — | — | — | → 0.99x | 0 | — | — | 7m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.32% | 99.39% | — | — | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.25% | 99.27% | 99.56% | 99.56% | — | → 0.99x | 0 | — | — | 5m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.25% | 99.37% | 24.53% | 24.53% | — | → 1.00x | 0 | — | — | 2m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.24% | 99.36% | 99.64% | 99.64% | — | → 1.03x | 0 | — | — | 11m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.24% | 99.19% | 97.74% | 97.74% | — | → 1.03x | 3 | 5h 37m | 17d ago | 11m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 99.24% | 99.36% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 7m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 99.22% | 99.22% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.16% | 99.02% | 81.53% | 81.53% | — | → 1.01x | 0 | — | — | 11s ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.16% | 98.16% | 32.93% | 32.93% | — | → 1.03x | 0 | — | — | 10m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 99.09% | 99.28% | 98.29% | 98.29% | — | → 1.02x | 0 | — | — | 5m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.08% | 97.53% | 98.93% | 98.93% | — | → 0.97x | 1 | 0s | 22d ago | 2m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.07% | 98.77% | 99.82% | 99.82% | — | → 1.02x | 0 | — | — | 12m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.07% | 99.29% | 93.06% | 93.06% | — | ↑ 1.19x | 1 | 0s | 29d ago | 10m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.07% | 97.69% | 98.75% | 98.75% | — | → 1.00x | 3 | 46s | 21d ago | 9m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.00% | 98.96% | 99.76% | 99.76% | — | → 1.01x | 0 | — | — | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (95)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.00% | 98.60% | 2.34% | 2.34% | — | ↑ 1.15x | 1 | 14d 1h | 30d ago | 51s ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 98.99% | 99.26% | 98.16% | 98.16% | — | → 0.97x | 0 | — | — | 11m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 98.91% | 99.20% | 96.73% | 96.73% | — | ↑ 1.30x | 0 | — | — | 1m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 98.90% | 99.39% | 99.88% | 99.88% | — | ↑ 1.06x | 0 | — | — | 7m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.83% | 99.30% | 99.77% | 99.77% | — | → 1.00x | 0 | — | — | 2m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 98.83% | 99.20% | 31.58% | 31.58% | — | → 1.00x | 1 | 14d 1h | 30d ago | 1m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.82% | 99.08% | 97.07% | 97.07% | — | → 1.03x | 1 | 2d 3h | 29d ago | 9m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.81% | 98.85% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 7m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.75% | 98.25% | 57.00% | 57.00% | — | → 1.02x | 0 | — | — | 1m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 98.66% | 98.70% | 98.88% | 98.88% | — | ↓ 0.93x | 0 | — | — | 31s ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 98.64% | 98.57% | 99.34% | 99.34% | — | ↑ 1.22x | 2 | 0s | 18d ago | 7m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.56% | 90.58% | 92.56% | 92.56% | — | → 0.99x | 8 | 32m | 17d ago | 10m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 98.33% | 99.16% | 63.14% | 63.14% | — | ↑ 1.08x | 1 | 0s | 18d ago | 51s ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 98.32% | 97.77% | 66.05% | 66.05% | — | ↑ 1.05x | 7 | 19h 32m | 21d ago | 11m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 98.23% | 98.62% | 98.12% | 98.12% | — | → 1.03x | 0 | — | — | 11m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 98.06% | 96.69% | 96.89% | 96.89% | — | ↑ 1.59x | 5 | 2h 21m | 16d ago | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 97.99% | 97.19% | 99.27% | 99.27% | — | ↑ 1.08x | 0 | — | — | 30s ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 97.91% | 98.91% | 74.11% | 74.11% | — | → 1.01x | 2 | 1h 15m | 17d ago | 30s ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 97.89% | 98.90% | 98.88% | 98.88% | — | → 1.02x | 1 | 0s | 17d ago | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 97.56% | 96.32% | 98.02% | 98.02% | — | ↑ 1.36x | 0 | — | — | 11m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.47% | 98.65% | 99.33% | 99.33% | — | → 0.97x | 6 | 0s | 25d ago | 9m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 97.39% | 98.06% | 99.10% | 99.10% | — | ↓ 0.49x | 0 | — | — | 11m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 97.34% | 98.65% | 98.94% | 98.94% | — | ↓ 0.92x | 1 | 0s | 23d ago | 4m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 97.22% | 98.58% | 98.83% | 98.83% | — | ↑ 1.06x | 0 | — | — | 11m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 97.16% | 98.61% | 99.68% | 99.68% | — | → 1.01x | 0 | — | — | 2m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.88% | 96.86% | 97.85% | 97.85% | — | → 1.01x | 0 | — | — | 9m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 96.67% | 97.54% | 89.02% | 89.02% | — | → 0.99x | 0 | — | — | 4m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 96.66% | 95.82% | 17.31% | 17.31% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 96.21% | 95.18% | 97.00% | 97.00% | — | → 0.99x | 1 | 0s | 19d ago | 10m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 96.14% | 97.05% | 83.18% | 83.18% | — | → 0.98x | 1 | 3m | 22d ago | 10s ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 96.11% | 89.66% | 95.25% | 95.25% | — | ↑ 1.07x | 11 | 1h 11m | 18d ago | 10m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 96.08% | 83.44% | 85.28% | 85.28% | — | ↑ 1.31x | 0 | — | — | 2m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 95.85% | 89.06% | 96.14% | 96.14% | — | → 1.01x | 4 | 10h 1m | 18d ago | 8m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 95.67% | 97.64% | 98.78% | 98.78% | — | ↑ 1.73x | 1 | 0s | 18d ago | 3m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 95.33% | 96.47% | 98.12% | 98.12% | — | → 1.04x | 0 | — | — | 1m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 93.99% | 96.96% | 26.84% | 26.84% | — | ↑ 1.28x | 0 | — | — | 1m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 93.63% | 97.21% | 93.42% | 93.42% | — | ↑ 1.17x | 2 | 6m | 22d ago | 6m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 92.63% | 96.73% | 93.57% | 93.57% | — | ↑ 1.07x | 1 | 4m | 22d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 92.09% | 96.37% | 97.21% | 97.21% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 91.28% | 95.78% | 96.43% | 96.43% | — | → 0.99x | 3 | 1d 4h | 16d ago | 5m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 91.25% | 96.01% | 96.18% | 96.18% | — | → 1.02x | 1 | 0s | 25d ago | 12m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 89.95% | 71.83% | 98.16% | 98.16% | — | → 1.05x | 2 | 0s | 24d ago | 10m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 88.92% | 85.21% | 99.61% | 99.61% | — | ↑ 1.13x | 3 | 0s | 16d ago | 8m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 87.25% | 87.31% | 0.69% | 0.69% | — | ↑ 1.14x | 1 | 14d 1h | 30d ago | 10m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 86.84% | 89.03% | 78.01% | 78.01% | — | → 1.04x | 69 | 5s | 18d ago | 6m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 84.15% | 82.25% | 69.98% | 69.98% | — | ↑ 1.12x | 0 | — | — | 3m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 81.52% | 34.33% | 5.08% | 5.08% | — | → 1.00x | 1 | 14d 1h | 30d ago | 4m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 81.15% | 86.27% | 75.72% | 75.72% | — | → 1.02x | 1 | 14d 1h | 30d ago | 5m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 80.74% | 79.32% | 87.06% | 87.06% | — | ↑ 1.09x | 5 | 0s | 28d ago | 12m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 80.05% | 91.39% | 99.09% | 99.09% | — | → 1.00x | 0 | — | — | 1m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 79.40% | 85.30% | 99.78% | 99.78% | — | ↑ 1.30x | 0 | — | — | 5m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 78.96% | 80.84% | 98.45% | 98.45% | — | → 1.00x | 14 | 0s | 18d ago | 2m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 78.69% | 81.10% | 82.00% | 82.00% | — | ↑ 1.06x | 51 | 11m | 18d ago | 7m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 78.64% | 80.09% | 96.32% | 96.32% | — | → 1.03x | 68 | 16m | 19d ago | 4m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 78.36% | 73.03% | 99.93% | 99.93% | — | ↑ 1.54x | 0 | — | — | 5m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 78.30% | 78.33% | 10.72% | 10.72% | — | ↑ 1.16x | 1 | 14d 1h | 30d ago | 12m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 77.93% | 74.87% | 91.43% | 91.43% | — | ↑ 1.43x | 0 | — | — | 7m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 77.88% | 81.31% | 98.89% | 98.89% | — | ↑ 1.19x | 1 | 0s | 26d ago | 5m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 77.55% | 73.03% | 0.11% | 0.11% | — | ↑ 2.11x | 1 | 14d 1h | 30d ago | 2m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 77.21% | 75.09% | 96.79% | 96.79% | — | ↑ 1.20x | 2 | 15m | 29d ago | 1m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 76.99% | 79.85% | 97.23% | 97.23% | — | ↑ 1.30x | 13 | 0s | 19d ago | 7m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 76.53% | 76.68% | 44.62% | 44.62% | — | → 1.04x | 1 | 13d 10h | 30d ago | 12m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 76.53% | 77.28% | 48.46% | 48.46% | — | ↑ 1.13x | 1 | 14d 1h | 30d ago | 12m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 76.27% | 75.09% | 86.29% | 86.29% | — | ↑ 1.27x | 9 | 3m | 18d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 75.11% | 73.16% | 83.85% | 83.85% | — | ↑ 1.64x | 5 | 0s | 22d ago | 12m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 74.83% | 76.20% | 66.07% | 66.07% | — | ↑ 1.52x | 1 | 14d 1h | 30d ago | 6m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 74.83% | 88.67% | 99.95% | 99.95% | — | → 0.99x | 0 | — | — | 9m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 74.34% | 76.45% | 98.53% | 98.53% | — | → 1.02x | 3 | 0s | 17d ago | 8m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 73.92% | 76.72% | 75.11% | 75.11% | — | ↑ 1.36x | 1 | 14d 1h | 30d ago | 6m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 73.75% | 75.16% | 6.48% | 6.48% | — | → 1.02x | 1 | 14d 1h | 30d ago | 8m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 73.61% | 76.35% | 54.78% | 54.78% | — | → 1.05x | 1 | 14d 1h | 30d ago | 3m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 72.58% | 73.83% | 93.16% | 93.16% | — | → 1.00x | 2 | 26m | 21d ago | 12m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 72.43% | 76.72% | 68.41% | 68.41% | — | ↑ 1.05x | 1 | 14d 1h | 30d ago | 6m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 72.08% | 72.46% | 94.11% | 94.11% | — | ↑ 1.15x | 5 | 17h 55m | 19d ago | 5m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 72.02% | 75.72% | 98.92% | 98.92% | — | → 1.04x | 1 | 0s | 22d ago | 6m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 71.99% | 74.02% | 99.85% | 99.85% | — | → 0.99x | 0 | — | — | 7m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 71.99% | 78.88% | 99.06% | 99.06% | — | → 1.01x | 1 | 0s | 18d ago | 7m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 71.17% | 70.17% | 69.01% | 69.01% | — | ↑ 1.07x | 1 | 29m | 29d ago | 9s ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 71.04% | 74.25% | 86.83% | 86.83% | — | ↑ 1.34x | 3 | 0s | 23d ago | 1m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 70.75% | 77.80% | 67.23% | 67.23% | — | ↑ 1.45x | 1 | 14d 1h | 30d ago | 5m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 70.12% | 73.66% | 54.05% | 54.05% | — | ↑ 1.84x | 1 | 14d 1h | 30d ago | 6m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 69.90% | 77.73% | 86.23% | 86.23% | — | → 1.02x | 3 | 0s | 22d ago | 5m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 69.87% | 71.84% | 85.02% | 85.02% | — | ↑ 1.07x | 8 | 8m | 19d ago | 11m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 68.96% | 70.84% | 91.98% | 91.98% | — | ↑ 1.06x | 6 | 50s | 18d ago | 6m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 68.66% | 76.80% | 99.77% | 99.77% | — | ↑ 1.21x | 0 | — | — | 5m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 66.89% | 67.92% | 50.52% | 50.52% | — | ↑ 1.15x | 132 | 1h 30m | 17d ago | 6m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 58.02% | 24.87% | 99.82% | 99.82% | — | → 0.98x | 2 | 2m | 20d ago | 7m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 52.59% | 58.10% | 98.37% | 98.37% | — | ↑ 2.08x | 3 | 3m | 20d ago | 8m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 50.29% | 25.89% | 40.01% | 40.01% | — | ↑ 1.23x | 1 | 5d 22h | 30d ago | 3m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 48.35% | 43.33% | 78.42% | 78.42% | — | ↑ 1.51x | 1 | 14d 1h | 30d ago | 8m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 39.95% | 18.42% | 97.75% | 97.75% | — | → 1.01x | 2 | 0s | 17d ago | 12m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 32.43% | 14.01% | 46.51% | 46.51% | — | → 1.00x | 3 | 10h 4m | 24d ago | 11m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 30.44% | 13.62% | 25.44% | 25.44% | — | → 0.98x | 2 | 5d 17h | 18d ago | 10m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 28.96% | 12.53% | 22.80% | 22.80% | — | ↓ 0.79x | 0 | — | — | 1m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 4.97% | 2.45% | 99.95% | 99.95% | — | ↓ 0.82x | 0 | — | — | 5m ago |

</details>

<details open>
<summary><strong>🔴 Down (307)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 7m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.92% | 68.90% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 7m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.58% | 99.36% | 98.95% | 98.95% | — | → 0.97x | 0 | — | — | 10m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 99.49% | 99.46% | — | — | — | → 1.01x | 0 | — | — | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 98.75% | 99.38% | 99.80% | 99.80% | — | → 0.97x | 0 | — | — | 4m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 92.26% | 89.87% | 77.59% | 77.59% | — | ↑ 1.31x | 0 | — | — | 11m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 91.17% | 95.98% | 76.88% | 76.88% | — | → 1.01x | 1 | 14d 1h | 30d ago | 4m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 84.72% | 83.83% | 68.13% | 68.13% | — | → 1.04x | 1 | 14d 1h | 30d ago | 1m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 81.39% | 82.27% | — | — | — | → 1.04x | 0 | — | — | 6m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 80.73% | 86.48% | 99.92% | 99.92% | — | → 1.01x | 0 | — | — | 5m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 80.23% | 85.68% | 99.09% | 99.09% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 78.52% | 81.10% | 63.15% | 63.15% | — | → 1.03x | 73 | 11m | 18d ago | 3m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.24% | 76.65% | 88.70% | 88.70% | — | ↑ 1.18x | 1 | 6h | 16d ago | 11m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 75.63% | 76.76% | 99.65% | 99.65% | — | → 1.05x | 0 | — | — | 2m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 73.50% | 78.39% | 93.77% | 93.77% | — | → 0.97x | 0 | — | — | 4m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 72.70% | 73.22% | 100.00% | 100.00% | — | → 1.03x | 0 | — | — | 8m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 67.68% | 70.46% | 68.70% | 68.70% | — | ↓ 0.80x | 1 | 14d 1h | 30d ago | 8m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 65.88% | 83.89% | 98.59% | 98.59% | — | ↓ 0.94x | 11 | 6m | 18d ago | 9m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 64.38% | 68.66% | 99.88% | 99.88% | — | ↓ 0.86x | 2 | 0s | 24d ago | 8m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 61.44% | 66.99% | 64.20% | 64.20% | — | ↑ 1.12x | 5 | 0s | 20d ago | 5m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 60.35% | 63.69% | 75.15% | 75.15% | — | → 1.01x | 1 | 14d 1h | 30d ago | 1m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 58.53% | 59.04% | 52.45% | 52.45% | — | → 1.01x | 1 | 14d 1h | 30d ago | 5m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 48.31% | 77.58% | 100.00% | 100.00% | — | → 0.98x | 0 | — | — | 9m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 35.91% | 57.93% | 98.87% | 98.87% | — | ↑ 1.82x | 0 | — | — | 4m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 19.80% | 19.53% | 92.86% | 92.86% | — | ↑ 1.09x | 5 | 0s | 16d ago | 11m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 5.32% | 4.98% | 7.76% | 7.76% | — | ↑ 1.06x | 1 | 14d 1h | 30d ago | 10m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 3.37% | 1.81% | 83.11% | 83.11% | — | ↓ 0.91x | 2 | 2d 24h | 21d ago | 10m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 1.51% | 1.02% | 87.63% | 87.63% | — | ↑ 1.57x | 0 | — | — | 12m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 1.25% | 1.29% | 0.10% | 0.10% | — | ↑ 1.77x | 1 | 14d 1h | 30d ago | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.17% | 1.86% | 44.99% | 44.99% | — | ↑ 11.77x | 0 | — | — | 9s ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.08% | 0.42% | 79.86% | 79.86% | — | ↑ 4.72x | 1 | 14d 1h | 30d ago | 10m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.38% | 63.31% | 63.31% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.39% | 59.84% | 59.84% | — | — | 2 | 60m | 17d ago | 12m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.39% | 70.78% | 70.78% | — | — | 3 | 4d 14h | 16d ago | 12m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.39% | 52.44% | 52.44% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.38% | 5.20% | 5.20% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.38% | 10.24% | 10.24% | — | — | 1 | 14d 1h | 30d ago | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.32% | 88.73% | 88.73% | — | — | 1 | 13d 1h | 29d ago | 9m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.39% | 99.82% | 99.82% | — | — | 1 | 7h | 17d ago | 9m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.39% | 47.31% | 47.31% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.39% | 73.96% | 73.96% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.38% | 74.22% | 74.22% | — | — | 5 | 1d 8h | 23d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.38% | 3.13% | 3.13% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.38% | 40.15% | 40.15% | — | — | 0 | — | — | 2m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.38% | 33.64% | 33.64% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 39.59% | 99.94% | 99.94% | — | — | 0 | — | — | 8m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.39% | 99.65% | 99.65% | — | — | 3 | 20m | 18d ago | 8m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.36% | 90.14% | 90.14% | — | — | 2 | 6d 17h | 29d ago | 10m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.39% | 85.33% | 85.33% | — | — | 95 | 33m | 18d ago | 11m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.38% | 83.66% | 83.66% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.39% | 21.09% | 21.09% | — | — | 1 | 14d 1h | 30d ago | 10s ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.39% | 27.04% | 27.04% | — | — | 1 | 14d 1h | 30d ago | 31s ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.38% | 84.65% | 84.65% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.38% | 75.27% | 75.27% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.38% | 57.88% | 57.88% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.38% | 70.96% | 70.96% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.38% | 19.82% | 19.82% | — | — | 1 | 7d 21h | 24d ago | 2m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.39% | 13.15% | 13.15% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 21.26% | 44.49% | 44.49% | — | — | 1 | 14d 1h | 30d ago | 11s ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.38% | 87.39% | 87.39% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.39% | 30.30% | 30.30% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.32% | 99.75% | 99.75% | — | — | 1 | 0s | 17d ago | 7m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.38% | 78.14% | 78.14% | — | — | 96 | 1h 58m | 17d ago | 1m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.38% | 98.15% | 98.15% | — | — | 1 | 8d 1h | 24d ago | 3m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.39% | 78.64% | 78.64% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.39% | 3.12% | 3.12% | — | — | 1 | 14d 1h | 30d ago | 31s ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 0.00% | 0.38% | 32.40% | 32.40% | — | — | 1 | 4d 12h | 20d ago | 3m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.32% | 76.21% | 76.21% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.39% | 72.40% | 72.40% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.38% | 48.90% | 48.90% | — | — | 2 | 7d | 27d ago | 3m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.39% | 90.67% | 90.67% | — | — | 1 | 3d 17h | 20d ago | 7m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.39% | 31.88% | 31.88% | — | — | 1 | 9d 1h | 25d ago | 11s ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.32% | 99.73% | 99.73% | — | — | 1 | 2h 60m | 17d ago | 9m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.32% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.38% | 84.44% | 84.44% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.39% | 32.34% | 32.34% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.42% | 64.69% | 64.69% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.39% | 46.41% | 46.41% | — | — | 2 | 6d 24h | 17d ago | 32s ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.38% | 50.25% | 50.25% | — | — | 0 | — | — | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.38% | 96.06% | 96.06% | — | — | 2 | 1d 17h | 19d ago | 3m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.39% | 69.29% | 69.29% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.39% | 39.40% | 39.40% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.39% | 64.35% | 64.35% | — | — | 1 | 14d 1h | 30d ago | 11s ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.39% | 26.33% | 26.33% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 0.00% | 32.42% | 93.54% | 93.54% | — | — | 4 | 15m | 19d ago | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.32% | 98.70% | 98.70% | — | — | 3 | 0s | 26d ago | 8m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.38% | 50.43% | 50.43% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.32% | 75.41% | 75.41% | — | — | 100 | 1h 26m | 16d ago | 10m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.39% | 22.07% | 22.07% | — | — | 1 | 14d 1h | 30d ago | 11s ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.39% | 98.37% | 98.37% | — | — | 0 | — | — | 12m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.35% | 32.48% | 32.48% | — | — | 1 | 9d 18h | 26d ago | 1m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 7m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.39% | 99.89% | 99.89% | — | — | 0 | — | — | 8m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.39% | 48.30% | 48.30% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.38% | 46.73% | 46.73% | — | — | 1 | 14d 1h | 30d ago | 6m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.39% | 21.32% | 21.32% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.39% | 100.00% | 100.00% | — | — | 0 | — | — | 8m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.39% | 4.63% | 4.63% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.38% | 60.67% | 60.67% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.39% | 99.92% | 99.92% | — | — | 1 | 0s | 30d ago | 8m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.39% | 68.44% | 68.44% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.32% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.32% | 98.40% | 98.40% | — | — | 0 | — | — | 8m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.38% | 99.74% | 99.74% | — | — | 0 | — | — | 5m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.39% | 5.52% | 5.52% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.39% | 81.13% | 81.13% | — | — | 1 | 0s | 30d ago | 11m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.38% | 73.53% | 73.53% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.38% | 74.18% | 74.18% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.38% | 99.84% | 99.84% | — | — | 0 | — | — | 5m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.39% | 99.89% | 99.89% | — | — | 1 | 3m | 19d ago | 8m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.31% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.39% | 83.98% | 83.98% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.39% | 20.14% | 20.14% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 0.00% | 0.39% | 99.95% | 99.95% | — | — | 0 | — | — | 8m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.38% | 48.81% | 48.81% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.38% | 83.92% | 83.92% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.39% | 67.73% | 67.73% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.32% | 83.84% | 83.84% | — | — | 8 | 17m | 21d ago | 9m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.39% | 74.74% | 74.74% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.39% | 47.90% | 47.90% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.39% | 99.25% | 99.25% | — | — | 1 | 0s | 30d ago | 9m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.32% | 91.99% | 91.99% | — | — | 0 | — | — | 10m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.38% | 22.80% | 22.80% | — | — | 1 | 0s | 26d ago | 2m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.32% | 98.05% | 98.05% | — | — | 1 | 0s | 17d ago | 8m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.39% | 55.75% | 55.75% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.04% | — | — | — | — | 0 | — | — | 7m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.32% | 98.92% | 98.92% | — | — | 2 | 2h 30m | 18d ago | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.38% | 43.20% | 43.20% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 6m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.32% | 16.44% | 16.44% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.38% | 39.16% | 39.16% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.38% | 74.31% | 74.31% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.39% | 20.55% | 20.55% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 0.00% | 30.34% | 98.24% | 98.24% | — | — | 0 | — | — | 12m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.38% | 54.39% | 54.39% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.39% | 75.74% | 75.74% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.38% | 35.55% | 35.55% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.39% | 65.91% | 65.91% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.32% | 99.94% | 99.94% | — | — | 0 | — | — | 9m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.39% | 70.74% | 70.74% | — | — | 3 | 4d 14h | 16d ago | 11m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.38% | 34.00% | 34.00% | — | — | 2 | 30m | 20d ago | 3m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.39% | 62.39% | 62.39% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.00% | 0.49% | 34.65% | 34.65% | — | — | 0 | — | — | 29s ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.38% | 45.59% | 45.59% | — | — | 0 | — | — | 5m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.38% | 76.99% | 76.99% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.38% | 38.64% | 38.64% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.38% | 22.32% | 22.32% | — | — | 0 | — | — | 4m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.38% | 90.53% | 90.53% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.39% | 91.04% | 91.04% | — | — | 1 | 3d 23h | 20d ago | 9m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.39% | 42.69% | 42.69% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.39% | 39.95% | 39.95% | — | — | 1 | 14d 1h | 30d ago | 11s ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.32% | 99.29% | 99.29% | — | — | 0 | — | — | 7m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.39% | 24.01% | 24.01% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.38% | 81.34% | 81.34% | — | — | 1 | 3h | 20d ago | 5m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.38% | 73.32% | 73.32% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.39% | 2.87% | 2.87% | — | — | 1 | 14d 1h | 30d ago | 11s ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.39% | 49.45% | 49.45% | — | — | 0 | — | — | 12m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.38% | 39.57% | 39.57% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.38% | 20.82% | 20.82% | — | — | 46 | 9m | 16d ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 0.00% | 0.38% | 23.09% | 23.09% | — | — | 2 | 30m | 22d ago | 4m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 0.39% | 20.58% | 20.58% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.32% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.39% | 33.55% | 33.55% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.39% | 52.99% | 52.99% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.38% | 82.46% | 82.46% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.38% | 92.62% | 92.62% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.38% | 23.25% | 23.25% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.39% | 27.77% | 27.77% | — | — | 49 | 16m | 19d ago | 9s ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.38% | 86.17% | 86.17% | — | — | 1 | 10s | 22d ago | 3m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.32% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 52s ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.38% | 49.10% | 49.10% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.38% | 86.30% | 86.30% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.39% | 65.07% | 65.07% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.38% | 99.12% | 99.12% | — | — | 3 | 4h | 16d ago | 3m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.39% | 92.19% | 92.19% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 0.00% | 0.32% | 100.00% | 100.00% | — | — | 0 | — | — | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 0.00% | 0.38% | 99.26% | 99.26% | — | — | 0 | — | — | 2m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.38% | 99.77% | 99.77% | — | — | 0 | — | — | 5m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.38% | 16.23% | 16.23% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.38% | 45.98% | 45.98% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.39% | 92.63% | 92.63% | — | — | 3 | 2h 60m | 16d ago | 11m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.39% | 98.92% | 98.92% | — | — | 3 | 1h 3m | 28d ago | 9m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.39% | 46.05% | 46.05% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.39% | 16.77% | 16.77% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.38% | 51.26% | 51.26% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.39% | 35.56% | 35.56% | — | — | 1 | 14d 1h | 30d ago | 52s ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.39% | 19.49% | 19.49% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.39% | 99.81% | 99.81% | — | — | 2 | 36m | 29d ago | 8m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.39% | 72.39% | 72.39% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.38% | 83.68% | 83.68% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 0.00% | 0.39% | 26.68% | 26.68% | — | — | 0 | — | — | 52s ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.39% | 46.80% | 46.80% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.38% | 75.88% | 75.88% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.35% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.38% | 22.72% | 22.72% | — | — | 2 | 2d 20h | 22d ago | 1m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.38% | 68.72% | 68.72% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.38% | 18.10% | 18.10% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.38% | 54.28% | 54.28% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.39% | 35.49% | 35.49% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.38% | 3.84% | 3.84% | — | — | 2 | 6d 19h | 17d ago | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.38% | 63.55% | 63.55% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.38% | 23.11% | 23.11% | — | — | 0 | — | — | 4m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.32% | 99.60% | 99.60% | — | — | 0 | — | — | 9m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.39% | 22.23% | 22.23% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.39% | 6.70% | 6.70% | — | — | 1 | 14d 1h | 30d ago | 12m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.39% | 22.60% | 22.60% | — | — | 1 | 14d 1h | 30d ago | 8m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 1m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.38% | 62.64% | 62.64% | — | — | 1 | 14d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.39% | 30.92% | 30.92% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.39% | 68.76% | 68.76% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.32% | 3.80% | 3.80% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.39% | 44.20% | 44.20% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.39% | 38.02% | 38.02% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.39% | 17.16% | 17.16% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.39% | 10.15% | 10.15% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 7m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.35% | 23.40% | 23.40% | — | — | 24 | 25m | 19d ago | 52s ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.38% | 99.53% | 99.53% | — | — | 0 | — | — | 5m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.38% | 16.69% | 16.69% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.38% | 21.71% | 21.71% | — | — | 31 | 2h 13m | 16d ago | 3m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.39% | 14.75% | 14.75% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.39% | 25.49% | 25.49% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.39% | 8.99% | 8.99% | — | — | 1 | 14d 1h | 30d ago | 10s ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.39% | 3.93% | 3.93% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.39% | 4.55% | 4.55% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.38% | 46.30% | 46.30% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.39% | 76.63% | 76.63% | — | — | 1 | 13d 19h | 30d ago | 7m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.31% | 32.96% | 32.96% | — | — | 0 | — | — | 3m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.39% | 36.28% | 36.28% | — | — | 1 | 14d 1h | 30d ago | 9m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.39% | 98.48% | 98.48% | — | — | 0 | — | — | 12m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.39% | 63.49% | 63.49% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.39% | 40.17% | 40.17% | — | — | 1 | 14d 1h | 30d ago | 11m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.38% | 77.23% | 77.23% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.39% | 43.61% | 43.61% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [xAI](https://lmspeed.net/provider/xai) | 0.00% | 0.38% | 23.13% | 23.13% | — | — | 0 | — | — | 5m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.38% | 0.01% | 0.01% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.38% | 22.68% | 22.68% | — | — | 0 | — | — | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.39% | 60.97% | 60.97% | — | — | 38 | 2m | 18d ago | 11m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 2m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.38% | 38.37% | 38.37% | — | — | 1 | 14d 1h | 30d ago | 4m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.39% | 1.35% | 1.35% | — | — | 1 | 14d 1h | 30d ago | 10m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.39% | 17.59% | 17.59% | — | — | 1 | 14d 1h | 30d ago | 10s ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.39% | 91.72% | 91.72% | — | — | 23 | 0s | 16d ago | 12m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.39% | 99.77% | 99.77% | — | — | 2 | 2m | 17d ago | 8m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.38% | 99.17% | 99.17% | — | — | 0 | — | — | 5m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.38% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 3m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.39% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | 9m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | — | 81.82% | 0.00% | 0.00% | — | — | 1 | 14d 1h | 30d ago | — |

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
