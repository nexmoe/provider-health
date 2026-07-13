# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**689 providers** — 2 🟢 operational · 377 🟡 degraded · 308 🔴 down · 2 ⚫ unknown

_Updated 2026-07-13 06:23 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 20s ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 99.58% | 99.58% | — | — | — | → 1.00x | 0 | — | — | 20s ago |

</details>

<details open>
<summary><strong>🟡 Degraded (377)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 98.84% | 98.84% | 99.49% | 99.49% | 3072 ms | → 1.00x | 3 | 9h 27m | 16d ago | 4m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 98.84% | 98.84% | 75.23% | 75.23% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 98.84% | 98.84% | 99.98% | 99.98% | 884 ms | → 1.00x | 1 | 4m | 10d ago | 4m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 98.84% | 98.84% | 99.98% | 99.98% | 989 ms | → 1.00x | 1 | 4m | 10d ago | 4m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 98.84% | 98.84% | 93.42% | 93.42% | 3341 ms | → 1.00x | 2 | 6m | 10d ago | 4m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 98.84% | 98.84% | 99.74% | 99.74% | 1609 ms | → 1.00x | 6 | 1h 5m | 5d ago | 3m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 98.84% | 98.84% | 99.65% | 99.65% | 518 ms | → 1.00x | 0 | — | — | 3m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 98.84% | 98.84% | 17.47% | 17.47% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 98.84% | 98.84% | 99.92% | 99.92% | 1010 ms | → 1.00x | 0 | — | — | 3m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 98.84% | 98.84% | 49.74% | 49.74% | 1441 ms | → 1.00x | 6 | 35m | 14d ago | 3m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 98.83% | 98.83% | 76.22% | 76.22% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 98.83% | 98.83% | 99.65% | 99.65% | 1639 ms | → 1.00x | 0 | — | — | 3m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 98.83% | 98.83% | 99.96% | 99.96% | 976 ms | → 1.00x | 0 | — | — | 3m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 98.83% | 98.83% | 99.80% | 99.80% | 1325 ms | → 1.00x | 0 | — | — | 3m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 98.83% | 98.83% | 99.91% | 99.91% | 1731 ms | → 1.00x | 0 | — | — | 3m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 98.83% | 98.83% | 99.97% | 99.97% | 1840 ms | → 1.00x | 0 | — | — | 3m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 98.83% | 98.83% | 44.95% | 44.95% | 264 ms | → 1.00x | 0 | — | — | 3m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.83% | 98.83% | 98.94% | 98.94% | 1093 ms | → 1.00x | 1 | 0s | 11d ago | 3m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 98.83% | 98.83% | 99.49% | 99.49% | 872 ms | → 1.00x | 0 | — | — | 3m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 98.83% | 98.83% | 99.81% | 99.81% | 1232 ms | → 1.00x | 0 | — | — | 3m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 98.83% | 98.83% | 99.02% | 99.02% | 3760 ms | → 1.00x | 5 | 0s | 14d ago | 3m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 98.83% | 98.83% | 47.85% | 47.85% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 98.83% | 98.83% | 76.89% | 76.89% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 98.83% | 98.83% | 99.87% | 99.87% | 1519 ms | → 1.00x | 1 | 0s | 6d ago | 3m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 98.83% | 98.83% | 99.85% | 99.85% | 1585 ms | → 1.00x | 2 | 0s | 5d ago | 3m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 98.83% | 98.83% | 99.62% | 99.62% | 1672 ms | → 1.00x | 2 | 1h 60m | 6d ago | 3m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 98.82% | 98.82% | 99.98% | 99.98% | 318 ms | → 1.00x | 1 | 0s | 21d ago | 3m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 98.82% | 98.82% | 1.90% | 1.90% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 98.82% | 98.82% | 56.98% | 56.98% | 1209 ms | → 1.00x | 6 | 0s | 19d ago | 3m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 98.82% | 98.82% | 0.11% | 0.11% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 98.82% | 98.82% | 99.87% | 99.87% | 2331 ms | → 1.00x | 2 | 0s | 12d ago | 3m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.81% | 98.81% | 22.30% | 22.30% | 2968 ms | → 1.00x | 21 | 0s | 6d ago | 3m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 98.81% | 98.81% | 99.68% | 99.68% | 2151 ms | → 1.00x | 0 | — | — | 3m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 98.81% | 98.81% | 99.48% | 99.48% | 2314 ms | → 1.00x | 0 | — | — | 3m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 98.81% | 98.81% | 24.53% | 24.53% | 1859 ms | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 98.81% | 98.81% | 99.95% | 99.95% | 1613 ms | → 1.00x | 1 | 0s | 25d ago | 3m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 98.81% | 98.81% | 77.28% | 77.28% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 98.81% | 98.81% | 97.57% | 97.57% | 2069 ms | → 1.00x | 7 | 0s | 7d ago | 2m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 98.81% | 98.81% | 99.77% | 99.77% | 1354 ms | → 1.00x | 0 | — | — | 2m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 98.81% | 98.81% | 99.37% | 99.37% | 1760 ms | → 1.00x | 0 | — | — | 2m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 98.81% | 98.81% | 5.16% | 5.16% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 98.81% | 98.81% | 24.63% | 24.63% | 2346 ms | → 1.00x | 1 | 0s | 24d ago | 2m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 98.80% | 98.80% | 30.20% | 30.20% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 98.80% | 98.80% | 74.11% | 74.11% | 883 ms | → 1.00x | 6 | 1h 20m | 6d ago | 2m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 98.80% | 98.80% | 68.50% | 68.50% | 1253 ms | → 1.00x | 2 | 10m | 23d ago | 2m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 98.80% | 98.80% | 64.92% | 64.92% | 486 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 98.80% | 98.80% | 99.61% | 99.61% | 416 ms | → 1.00x | 0 | — | — | 2m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 98.80% | 98.80% | 90.32% | 90.32% | 936 ms | → 1.00x | 0 | — | — | 2m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 98.80% | 98.80% | 99.88% | 99.88% | 1854 ms | → 1.00x | 0 | — | — | 2m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 98.80% | 98.80% | 91.09% | 91.09% | 858 ms | → 1.00x | 4 | 0s | 15d ago | 2m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 98.80% | 98.80% | 63.14% | 63.14% | 1241 ms | → 1.00x | 1 | 0s | 6d ago | 2m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 98.80% | 98.80% | 71.79% | 71.79% | 1152 ms | → 1.00x | 0 | — | — | 2m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 98.80% | 98.80% | 38.36% | 38.36% | 1797 ms | → 1.00x | 12 | 3h 31m | 25d ago | 2m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 98.80% | 98.80% | 99.35% | 99.35% | 2204 ms | → 1.00x | 0 | — | — | 2m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 98.80% | 98.80% | 69.43% | 69.43% | 1330 ms | → 1.00x | 2 | 0s | 19d ago | 2m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 98.80% | 98.80% | 60.60% | 60.60% | 1263 ms | → 1.00x | 0 | — | — | 2m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 98.80% | 98.80% | 99.31% | 99.31% | 2100 ms | → 1.00x | 0 | — | — | 2m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 98.80% | 98.80% | 63.68% | 63.68% | 2177 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 98.80% | 98.80% | 99.97% | 99.97% | 1561 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 98.79% | 98.79% | 97.21% | 97.21% | 2524 ms | → 1.00x | 0 | — | — | 2m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 98.79% | 98.79% | 66.50% | 66.50% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 98.79% | 98.79% | 99.18% | 99.18% | 781 ms | → 1.00x | 0 | — | — | 2m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 98.79% | 98.79% | 58.17% | 58.17% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 98.79% | 98.79% | 99.00% | 99.00% | 2376 ms | → 1.00x | 1 | 30m | 27d ago | 2m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 98.79% | 98.79% | 98.38% | 98.38% | 1664 ms | → 1.00x | 2 | 3h 26m | 17d ago | 2m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 98.79% | 98.79% | 99.89% | 99.89% | 1889 ms | → 1.00x | 0 | — | — | 2m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 98.79% | 98.79% | 89.57% | 89.57% | 1842 ms | → 1.00x | 0 | — | — | 2m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 98.78% | 98.78% | 98.47% | 98.47% | 727 ms | → 1.00x | 0 | — | — | 1m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 98.78% | 98.78% | 95.85% | 95.85% | 1823 ms | → 1.00x | 0 | — | — | 1m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 98.78% | 98.78% | 98.81% | 98.81% | 994 ms | → 1.00x | 0 | — | — | 1m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 98.78% | 98.78% | 64.61% | 64.61% | 2441 ms | → 1.00x | 3 | 4d 2h | 12d ago | 1m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 98.78% | 98.78% | 99.87% | 99.87% | 1191 ms | → 1.00x | 1 | 0s | 17d ago | 1m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 98.78% | 98.78% | 99.64% | 99.64% | 1433 ms | → 1.00x | 2 | 3h 20m | 24d ago | 2m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 98.78% | 98.78% | 96.69% | 96.69% | 673 ms | → 1.00x | 0 | — | — | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 98.78% | 98.78% | 99.87% | 99.87% | 1270 ms | → 1.00x | 0 | — | — | 1m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 98.78% | 98.78% | 98.83% | 98.83% | 1142 ms | → 1.00x | 0 | — | — | 1m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 98.78% | 98.78% | 98.16% | 98.16% | 3382 ms | → 1.00x | 0 | — | — | 2m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 98.78% | 98.78% | 99.83% | 99.83% | 1082 ms | → 1.00x | 0 | — | — | 2m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 98.78% | 98.78% | 100.00% | 100.00% | 1842 ms | → 1.00x | 0 | — | — | 1m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 98.78% | 98.78% | 97.80% | 97.80% | 1877 ms | → 1.00x | 0 | — | — | 1m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 98.78% | 98.78% | 26.43% | 26.43% | 2170 ms | → 1.00x | 1 | 16d 6h | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 98.78% | 98.78% | 98.16% | 98.16% | 606 ms | → 1.00x | 4 | 0s | 12d ago | 1m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 98.78% | 98.78% | 98.96% | 98.96% | 646 ms | → 1.00x | 1 | 29m | 21d ago | 2m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 98.78% | 98.78% | 98.43% | 98.43% | 1157 ms | → 1.00x | 1 | 0s | 25d ago | 1m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 98.78% | 98.78% | 43.48% | 43.48% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 98.78% | 98.78% | 98.69% | 98.69% | 1488 ms | → 1.00x | 0 | — | — | 1m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.78% | 98.78% | 98.35% | 98.35% | 910 ms | → 1.00x | 1 | 1h 40m | 25d ago | 1m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 98.78% | 98.78% | 96.94% | 96.94% | 1040 ms | → 1.00x | 1 | 0s | 6d ago | 1m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 98.78% | 98.78% | 92.20% | 92.20% | 2128 ms | → 1.00x | 6 | 0s | 8d ago | 2m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 98.78% | 98.78% | 99.95% | 99.95% | 757 ms | → 1.00x | 0 | — | — | 2m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.78% | 98.78% | 93.73% | 93.73% | 65 ms | → 1.00x | 1 | 1h 22m | 20d ago | 1m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 98.78% | 98.78% | 98.47% | 98.47% | 2434 ms | → 1.00x | 5 | 12m | 12d ago | 2m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 98.78% | 98.78% | 29.98% | 29.98% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 98.78% | 98.78% | 99.82% | 99.82% | 681 ms | → 1.00x | 1 | 0s | 15d ago | 1m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 98.78% | 98.78% | 99.78% | 99.78% | 2412 ms | → 1.00x | 0 | — | — | 2m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 98.78% | 98.78% | 98.78% | 98.78% | 1276 ms | → 1.00x | 1 | 0s | 4d ago | 1m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.78% | 98.78% | 55.08% | 55.08% | 2546 ms | → 1.00x | 33 | 54s | 5d ago | 2m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 98.78% | 98.78% | 99.08% | 99.08% | 637 ms | → 1.00x | 0 | — | — | 55s ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 98.78% | 98.78% | 98.75% | 98.75% | 987 ms | → 1.00x | 7 | 20s | 9d ago | 1m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 98.78% | 98.78% | 31.33% | 31.33% | — | → 1.00x | 1 | 25d 15h | 30d ago | 1m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 98.78% | 98.78% | 100.00% | 100.00% | 1001 ms | → 1.00x | 0 | — | — | 55s ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 98.78% | 98.78% | 99.70% | 99.70% | 1384 ms | → 1.00x | 0 | — | — | 1m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 98.78% | 98.78% | 99.94% | 99.94% | 1702 ms | → 1.00x | 1 | 0s | 29d ago | 45s ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 98.78% | 98.78% | 14.21% | 14.21% | — | → 1.00x | 2 | 12d 20h | 30d ago | 1m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 98.78% | 98.78% | 6.05% | 6.05% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 98.78% | 98.78% | 98.88% | 98.88% | 1420 ms | → 1.00x | 2 | 2h 55m | 6d ago | 1m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 98.78% | 98.78% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 56s ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 98.78% | 98.78% | 99.94% | 99.94% | 1297 ms | → 1.00x | 0 | — | — | 1m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 98.78% | 98.78% | 98.56% | 98.56% | 2036 ms | → 1.00x | 4 | 1h 59m | 15d ago | 50s ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 98.78% | 98.78% | 100.00% | 100.00% | 412 ms | → 1.00x | 0 | — | — | 50s ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 98.78% | 98.78% | 99.92% | 99.92% | 1505 ms | → 1.00x | 0 | — | — | 44s ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.78% | 98.78% | 99.34% | 99.34% | 4844 ms | → 1.00x | 11 | 5m | 5d ago | 1m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 98.78% | 98.78% | 99.97% | 99.97% | 1224 ms | → 1.00x | 0 | — | — | 45s ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 98.78% | 98.78% | 99.76% | 99.76% | 2853 ms | → 1.00x | 0 | — | — | 44s ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 98.77% | 98.77% | 99.45% | 99.45% | 771 ms | → 1.00x | 2 | 3h 1m | 11d ago | 32s ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 98.77% | 98.77% | 99.61% | 99.61% | 694 ms | → 1.00x | 1 | 0s | 21d ago | 27s ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 98.77% | 98.77% | 100.00% | 100.00% | 1343 ms | → 1.00x | 0 | — | — | 20s ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 98.77% | 98.77% | 99.95% | 99.95% | 826 ms | → 1.00x | 1 | 0s | 30d ago | 37s ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 98.77% | 98.77% | 100.00% | 100.00% | 511 ms | → 1.00x | 0 | — | — | 37s ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 98.77% | 98.77% | 99.88% | 99.88% | 1564 ms | → 1.00x | 0 | — | — | 20s ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 98.77% | 98.77% | 91.90% | 91.90% | 730 ms | → 1.00x | 20 | 1h 59m | 17d ago | 26s ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 98.77% | 98.77% | 99.93% | 99.93% | 1178 ms | → 1.00x | 1 | 0s | 5d ago | 10s ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 98.77% | 98.77% | 24.52% | 24.52% | — | → 1.00x | 1 | 26d | 30d ago | 37s ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 98.77% | 98.77% | 98.72% | 98.72% | 704 ms | → 1.00x | 0 | — | — | 26s ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 98.77% | 98.77% | 99.98% | 99.98% | 943 ms | → 1.00x | 0 | — | — | 36s ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 98.77% | 98.77% | 87.87% | 87.87% | 871 ms | → 1.00x | 4 | 8m | 17d ago | 40s ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 98.77% | 98.77% | 99.97% | 99.97% | 2840 ms | → 1.00x | 0 | — | — | 36s ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 98.77% | 98.77% | 100.00% | 100.00% | 894 ms | → 1.00x | 0 | — | — | 37s ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 98.77% | 98.77% | 99.98% | 99.98% | 1226 ms | → 1.00x | 0 | — | — | 36s ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 98.77% | 98.77% | 99.67% | 99.67% | 1678 ms | → 1.00x | 1 | 0s | 7d ago | 9s ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 98.77% | 98.77% | 100.00% | 100.00% | 1244 ms | → 1.00x | 0 | — | — | 36s ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.77% | 98.77% | 100.00% | 100.00% | 1540 ms | → 1.00x | 0 | — | — | 36s ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 98.77% | 98.77% | 16.67% | 16.67% | — | → 1.00x | 1 | 25d 2h | 29d ago | 40s ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 98.77% | 98.77% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 21s ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 98.77% | 98.77% | 99.48% | 99.48% | 505 ms | → 1.00x | 1 | 4m | 9d ago | 10s ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 98.77% | 98.77% | 100.00% | 100.00% | 758 ms | → 1.00x | 0 | — | — | 26s ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 98.77% | 98.77% | 99.98% | 99.98% | 1194 ms | → 1.00x | 0 | — | — | 36s ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 98.77% | 98.77% | 99.97% | 99.97% | 1239 ms | → 1.00x | 0 | — | — | 39s ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 98.77% | 98.77% | 99.89% | 99.89% | 1508 ms | → 1.00x | 0 | — | — | 36s ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 98.77% | 98.77% | 99.85% | 99.85% | 1242 ms | → 1.00x | 3 | 0s | 6d ago | 32s ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 98.77% | 98.77% | 99.66% | 99.66% | 1077 ms | → 1.00x | 2 | 0s | 25d ago | 20s ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 98.77% | 98.77% | 99.94% | 99.94% | 990 ms | → 1.00x | 0 | — | — | 31s ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 98.77% | 98.77% | 99.77% | 99.77% | 716 ms | → 1.00x | 3 | 0s | 6d ago | 32s ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 98.77% | 98.77% | 60.72% | 60.72% | 922 ms | → 1.00x | 1 | 2d 10h | 30d ago | 21s ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 98.77% | 98.77% | 99.92% | 99.92% | 788 ms | → 1.00x | 1 | 0s | 13d ago | 30s ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 98.77% | 98.77% | 100.00% | 100.00% | 1225 ms | → 1.00x | 0 | — | — | 10s ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 98.71% | 98.71% | — | — | — | → 1.00x | 0 | — | — | 21s ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 98.71% | 98.71% | — | — | — | → 1.00x | 0 | — | — | 10s ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 98.46% | 98.46% | 93.57% | 93.57% | 2527 ms | → 1.00x | 1 | 4m | 10d ago | 4m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 98.46% | 98.46% | 99.28% | 99.28% | 608 ms | → 1.00x | 3 | 0s | 6d ago | 3m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.46% | 98.46% | 98.78% | 98.78% | 4058 ms | → 1.00x | 21 | 5s | 10d ago | 4m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 98.46% | 98.46% | 98.93% | 98.93% | 2560 ms | → 1.00x | 2 | 0s | 7d ago | 4m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 98.46% | 98.46% | 95.68% | 95.68% | 2738 ms | → 1.00x | 2 | 4d 7h | 21d ago | 4m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 98.45% | 98.45% | 70.89% | 70.89% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 98.44% | 98.44% | 99.74% | 99.74% | 1461 ms | → 1.00x | 1 | 4s | 7d ago | 3m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 98.44% | 98.44% | 99.94% | 99.94% | 733 ms | → 1.00x | 0 | — | — | 3m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 98.44% | 98.44% | 99.74% | 99.74% | 2364 ms | → 1.00x | 2 | 0s | 20d ago | 3m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 98.44% | 98.44% | 98.00% | 98.00% | 1282 ms | → 1.00x | 0 | — | — | 3m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 98.44% | 98.44% | 99.73% | 99.73% | 292 ms | → 1.00x | 10 | 10m | 20d ago | 3m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 98.44% | 98.44% | 89.73% | 89.73% | 1384 ms | → 1.00x | 0 | — | — | 3m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 98.44% | 98.44% | 99.90% | 99.90% | 544 ms | → 1.00x | 0 | — | — | 3m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 98.44% | 98.44% | 22.33% | 22.33% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 98.44% | 98.44% | 76.88% | 76.88% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 98.44% | 98.44% | 99.58% | 99.58% | 2550 ms | → 1.00x | 19 | 2m | 7d ago | 3m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 98.44% | 98.44% | 99.58% | 99.58% | 1276 ms | → 1.00x | 1 | 2h | 5d ago | 3m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.44% | 98.44% | 96.43% | 96.43% | 2257 ms | → 1.00x | 3 | 1d 4h | 4d ago | 3m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 98.44% | 98.44% | 99.92% | 99.92% | 1044 ms | → 1.00x | 1 | 0s | 5d ago | 3m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 98.44% | 98.44% | 99.90% | 99.90% | 1198 ms | → 1.00x | 0 | — | — | 3m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 98.44% | 98.44% | 98.92% | 98.92% | 1668 ms | → 1.00x | 0 | — | — | 3m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 98.44% | 98.44% | 99.92% | 99.92% | 1235 ms | → 1.00x | 1 | 0s | 6d ago | 3m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 98.43% | 98.43% | 38.65% | 38.65% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 98.43% | 98.43% | 99.90% | 99.90% | 822 ms | → 1.00x | 1 | 0s | 21d ago | 3m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 98.43% | 98.43% | 22.94% | 22.94% | 909 ms | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 98.42% | 98.42% | 80.20% | 80.20% | 1290 ms | → 1.00x | 3 | 0s | 6d ago | 3m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 98.42% | 98.42% | 99.85% | 99.85% | 2667 ms | → 1.00x | 0 | — | — | 3m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.42% | 98.42% | 98.93% | 98.93% | 1388 ms | → 1.00x | 7 | 12m | 10d ago | 3m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 98.41% | 98.41% | 99.87% | 99.87% | 503 ms | → 1.00x | 0 | — | — | 2m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 98.41% | 98.41% | 25.33% | 25.33% | 1058 ms | → 1.00x | 3 | 0s | 17d ago | 2m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 98.41% | 98.41% | 96.73% | 96.73% | 2747 ms | → 1.00x | 1 | 0s | 24d ago | 2m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 98.41% | 98.41% | 57.00% | 57.00% | 713 ms | → 1.00x | 0 | — | — | 2m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 98.41% | 98.41% | 50.15% | 50.15% | 877 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 98.41% | 98.41% | 54.70% | 54.70% | 750 ms | → 1.00x | 2 | 0s | 23d ago | 2m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 98.41% | 98.41% | 26.84% | 26.84% | 1654 ms | → 1.00x | 0 | — | — | 2m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 98.41% | 98.41% | 24.91% | 24.91% | 651 ms | → 1.00x | 2 | 0s | 17d ago | 2m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 98.41% | 98.41% | 96.32% | 96.32% | 1234 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 98.41% | 98.41% | 31.58% | 31.58% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 98.39% | 98.39% | 94.26% | 94.26% | 627 ms | → 1.00x | 0 | — | — | 2m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 98.39% | 98.39% | 98.73% | 98.73% | 863 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 98.39% | 98.39% | 84.58% | 84.58% | 2150 ms | → 1.00x | 0 | — | — | 2m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 98.39% | 98.39% | 93.26% | 93.26% | 463 ms | → 1.00x | 0 | — | — | 2m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 98.39% | 98.39% | 83.46% | 83.46% | 2413 ms | → 1.00x | 2 | 0s | 6d ago | 2m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 98.39% | 98.39% | 62.65% | 62.65% | 1222 ms | → 1.00x | 0 | — | — | 2m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 98.39% | 98.39% | 65.57% | 65.57% | 848 ms | → 1.00x | 0 | — | — | 2m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 98.39% | 98.39% | 98.00% | 98.00% | 573 ms | → 1.00x | 1 | 12h 2m | 28d ago | 2m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 98.39% | 98.39% | 96.88% | 96.88% | 1286 ms | → 1.00x | 0 | — | — | 2m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 98.39% | 98.39% | 81.07% | 81.07% | 1773 ms | → 1.00x | 0 | — | — | 2m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 98.39% | 98.39% | 89.40% | 89.40% | 2082 ms | → 1.00x | 0 | — | — | 2m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 98.39% | 98.39% | 97.03% | 97.03% | 478 ms | → 1.00x | 2 | 0s | 24d ago | 2m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 98.39% | 98.39% | 97.00% | 97.00% | 511 ms | → 1.00x | 0 | — | — | 2m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 98.39% | 98.39% | 99.86% | 99.86% | 663 ms | → 1.00x | 0 | — | — | 2m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 98.39% | 98.39% | 98.73% | 98.73% | 569 ms | → 1.00x | 0 | — | — | 2m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 98.39% | 98.39% | 99.30% | 99.30% | 726 ms | → 1.00x | 0 | — | — | 2m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.39% | 98.39% | 98.90% | 98.90% | 1460 ms | → 1.00x | 1 | 1h 60m | 22d ago | 2m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 98.37% | 98.37% | 98.56% | 98.56% | 2406 ms | → 1.00x | 0 | — | — | 2m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 98.37% | 98.37% | 96.80% | 96.80% | 1534 ms | → 1.00x | 1 | 0s | 22d ago | 1m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 98.37% | 98.37% | 98.11% | 98.11% | 2985 ms | → 1.00x | 0 | — | — | 1m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 98.37% | 98.37% | 43.99% | 43.99% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 98.37% | 98.37% | 86.85% | 86.85% | 2179 ms | → 1.00x | 0 | — | — | 1m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.37% | 98.37% | 98.81% | 98.81% | 170 ms | → 1.00x | 4 | 38m | 19d ago | 2m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 98.37% | 98.37% | 84.75% | 84.75% | 1151 ms | → 1.00x | 1 | 0s | 10d ago | 1m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 98.37% | 98.37% | 99.93% | 99.93% | 638 ms | → 1.00x | 1 | 0s | 6d ago | 1m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 98.37% | 98.37% | 28.78% | 28.78% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 98.37% | 98.37% | 99.86% | 99.86% | 860 ms | → 1.00x | 0 | — | — | 1m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 98.37% | 98.37% | 98.37% | 98.37% | 1786 ms | → 1.00x | 0 | — | — | 1m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.37% | 98.37% | 97.48% | 97.48% | 1577 ms | → 1.00x | 1 | 0s | 5d ago | 1m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 98.37% | 98.37% | 97.07% | 97.07% | 935 ms | → 1.00x | 2 | 1d 2h | 17d ago | 1m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 98.37% | 98.37% | 99.95% | 99.95% | 2069 ms | → 1.00x | 1 | 0s | 24d ago | 50s ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 98.37% | 98.37% | 99.67% | 99.67% | 1147 ms | → 1.00x | 1 | 0s | 28d ago | 1m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 98.37% | 98.37% | 99.10% | 99.10% | 2450 ms | → 1.00x | 1 | 0s | 25d ago | 49s ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 98.37% | 98.37% | 93.61% | 93.61% | 743 ms | → 1.00x | 59 | 6m | 6d ago | 56s ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 98.37% | 98.37% | 100.00% | 100.00% | 670 ms | → 1.00x | 0 | — | — | 50s ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 98.37% | 98.37% | 100.00% | 100.00% | 1148 ms | → 1.00x | 0 | — | — | 56s ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 98.37% | 98.37% | 99.51% | 99.51% | 660 ms | → 1.00x | 0 | — | — | 1m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 98.37% | 98.37% | 100.00% | 100.00% | 850 ms | → 1.00x | 0 | — | — | 49s ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 98.37% | 98.37% | 89.89% | 89.89% | 716 ms | → 1.00x | 3 | 0s | 5d ago | 55s ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 98.37% | 98.37% | 98.59% | 98.59% | 2309 ms | → 1.00x | 13 | 12m | 6d ago | 50s ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 98.37% | 98.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 45s ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 98.37% | 98.37% | 99.97% | 99.97% | 841 ms | → 1.00x | 0 | — | — | 1m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 98.37% | 98.37% | 100.00% | 100.00% | 1443 ms | → 1.00x | 0 | — | — | 1m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 98.37% | 98.37% | 98.04% | 98.04% | 2518 ms | → 1.00x | 0 | — | — | 1m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 98.37% | 98.37% | 96.10% | 96.10% | 1761 ms | → 1.00x | 3 | 8h 19m | 26d ago | 1m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 98.37% | 98.37% | 99.67% | 99.67% | 1811 ms | → 1.00x | 0 | — | — | 45s ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 98.35% | 98.35% | 99.97% | 99.97% | 968 ms | → 1.00x | 0 | — | — | 40s ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 98.35% | 98.35% | 99.09% | 99.09% | 1459 ms | → 1.00x | 1 | 20m | 16d ago | 31s ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 98.35% | 98.35% | 99.85% | 99.85% | 1272 ms | → 1.00x | 1 | 3m | 6d ago | 36s ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 98.35% | 98.35% | 96.87% | 96.87% | 1107 ms | → 1.00x | 1 | 2h 1m | 25d ago | 31s ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 98.35% | 98.35% | 100.00% | 100.00% | 710 ms | → 1.00x | 0 | — | — | 20s ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 98.35% | 98.35% | 99.94% | 99.94% | 1354 ms | → 1.00x | 0 | — | — | 10s ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 98.35% | 98.35% | 99.85% | 99.85% | 1015 ms | → 1.00x | 0 | — | — | 26s ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 98.35% | 98.35% | 99.92% | 99.92% | 718 ms | → 1.00x | 0 | — | — | 32s ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 98.35% | 98.35% | 99.86% | 99.86% | 1402 ms | → 1.00x | 1 | 0s | 21d ago | 40s ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 98.28% | 98.28% | — | — | — | → 1.00x | 0 | — | — | 10s ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 98.07% | 98.07% | 98.29% | 98.29% | 2825 ms | → 1.00x | 0 | — | — | 4m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.07% | 98.07% | 99.85% | 99.85% | 1932 ms | → 1.00x | 0 | — | — | 3m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 98.07% | 98.07% | 99.75% | 99.75% | 377 ms | → 1.00x | 0 | — | — | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 98.07% | 98.07% | 68.59% | 68.59% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 98.07% | 98.07% | 99.60% | 99.60% | 2225 ms | → 1.00x | 1 | 2s | 6d ago | 3m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 98.07% | 98.07% | 99.76% | 99.76% | 814 ms | → 1.00x | 0 | — | — | 3m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 98.06% | 98.06% | 99.56% | 99.56% | 3254 ms | → 1.00x | 1 | 0s | 28d ago | 3m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 98.05% | 98.05% | 97.57% | 97.57% | 2655 ms | → 1.00x | 0 | — | — | 3m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 98.05% | 98.05% | 51.42% | 51.42% | 3253 ms | → 1.00x | 8 | 35m | 9d ago | 3m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 98.05% | 98.05% | 100.00% | 100.00% | 974 ms | → 1.00x | 0 | — | — | 3m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 98.05% | 98.05% | 99.84% | 99.84% | 806 ms | → 1.00x | 0 | — | — | 3m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 98.02% | 98.02% | 97.28% | 97.28% | 1103 ms | → 1.00x | 0 | — | — | 3m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 98.02% | 98.02% | 99.34% | 99.34% | 2196 ms | → 1.00x | 2 | 13h 25m | 28d ago | 3m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 98.02% | 98.02% | 99.79% | 99.79% | 1569 ms | → 1.00x | 4 | 0s | 5d ago | 3m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.02% | 98.02% | 98.12% | 98.12% | 2758 ms | → 1.00x | 0 | — | — | 2m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 98.02% | 98.02% | 66.42% | 66.42% | 1532 ms | → 1.00x | 1 | 2h 38m | 23d ago | 2m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.02% | 98.02% | 24.54% | 24.54% | 1228 ms | → 1.00x | 1 | 0s | 27d ago | 2m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 98.02% | 98.02% | 88.17% | 88.17% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 98.01% | 98.01% | 99.09% | 99.09% | 390 ms | → 1.00x | 0 | — | — | 2m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 97.99% | 97.99% | 82.26% | 82.26% | 1686 ms | → 1.00x | 0 | — | — | 2m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 97.99% | 97.99% | 69.87% | 69.87% | 1664 ms | → 1.00x | 9 | 0s | 7d ago | 2m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 97.98% | 97.98% | 97.90% | 97.90% | 1178 ms | → 1.00x | 0 | — | — | 2m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 97.98% | 97.98% | 28.39% | 28.39% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 97.98% | 97.98% | 98.66% | 98.66% | 1194 ms | → 1.00x | 1 | 0s | 21d ago | 2m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 97.98% | 97.98% | 99.83% | 99.83% | 1374 ms | → 1.00x | 0 | — | — | 2m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 97.98% | 97.98% | 56.85% | 56.85% | 1308 ms | → 1.00x | 8 | 2h 1m | 17d ago | 2m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 97.98% | 97.98% | 76.90% | 76.90% | 570 ms | → 1.00x | 1 | 0s | 21d ago | 2m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 97.98% | 97.98% | 98.74% | 98.74% | 841 ms | → 1.00x | 1 | 29m | 30d ago | 2m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 97.97% | 97.97% | 97.00% | 97.00% | 979 ms | → 1.00x | 4 | 1h 51m | 7d ago | 1m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 97.97% | 97.97% | 99.74% | 99.74% | 898 ms | → 1.00x | 0 | — | — | 1m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 97.97% | 97.97% | 98.85% | 98.85% | 1966 ms | → 1.00x | 0 | — | — | 2m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 97.97% | 97.97% | 93.06% | 93.06% | 587 ms | → 1.00x | 8 | 8m | 17d ago | 1m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 97.97% | 97.97% | 99.71% | 99.71% | 671 ms | → 1.00x | 1 | 0s | 6d ago | 1m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 97.97% | 97.97% | 97.87% | 97.87% | 385 ms | → 1.00x | 0 | — | — | 1m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 97.97% | 97.97% | 99.76% | 99.76% | 2678 ms | → 1.00x | 3 | 0s | 20d ago | 1m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 97.97% | 97.97% | 97.10% | 97.10% | 1075 ms | → 1.00x | 2 | 10m | 12d ago | 1m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 97.96% | 97.96% | 99.89% | 99.89% | 909 ms | → 1.00x | 1 | 1h 9m | 27d ago | 1m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 97.96% | 97.96% | 99.97% | 99.97% | 930 ms | → 1.00x | 0 | — | — | 45s ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 97.96% | 97.96% | 100.00% | 100.00% | 365 ms | → 1.00x | 0 | — | — | 56s ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 97.96% | 97.96% | 97.35% | 97.35% | 1600 ms | → 1.00x | 2 | 2h 51m | 10d ago | 1m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 97.96% | 97.96% | 99.85% | 99.85% | 1772 ms | → 1.00x | 1 | 6h 1m | 5d ago | 55s ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 97.94% | 97.94% | 99.34% | 99.34% | 636 ms | → 1.00x | 2 | 0s | 6d ago | 10s ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 97.94% | 97.94% | 99.92% | 99.92% | 863 ms | → 1.00x | 1 | 0s | 19d ago | 31s ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 97.94% | 97.94% | 100.00% | 100.00% | 989 ms | → 1.00x | 0 | — | — | 10s ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 97.94% | 97.94% | 99.94% | 99.94% | 908 ms | → 1.00x | 0 | — | — | 40s ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 97.68% | 97.68% | 99.61% | 99.61% | 3148 ms | → 1.00x | 0 | — | — | 4m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 97.68% | 97.68% | 36.33% | 36.33% | 2111 ms | → 1.00x | 3 | 2m | 10d ago | 4m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 97.67% | 97.67% | 99.62% | 99.62% | 913 ms | → 1.00x | 1 | 0s | 18d ago | 3m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 97.67% | 97.67% | 97.98% | 97.98% | 3189 ms | → 1.00x | 0 | — | — | 3m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 97.66% | 97.66% | 99.77% | 99.77% | 1618 ms | → 1.00x | 0 | — | — | 3m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 97.65% | 97.65% | 99.76% | 99.76% | 3417 ms | → 1.00x | 1 | 0s | 21d ago | 3m ago |
| [Groq](https://lmspeed.net/provider/groq) | 97.63% | 97.63% | 76.97% | 76.97% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 97.62% | 97.62% | 24.43% | 24.43% | 3235 ms | → 1.00x | 0 | — | — | 2m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 97.62% | 97.62% | 99.67% | 99.67% | 2826 ms | → 1.00x | 5 | 5h 48m | 5d ago | 2m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 97.59% | 97.59% | 77.97% | 77.97% | 759 ms | → 1.00x | 1 | 0s | 5d ago | 2m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 97.59% | 97.59% | 98.88% | 98.88% | 823 ms | → 1.00x | 0 | — | — | 2m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 97.58% | 97.58% | 91.87% | 91.87% | 529 ms | → 1.00x | 1 | 30m | 15d ago | 2m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 97.56% | 97.56% | 97.74% | 97.74% | 2849 ms | → 1.00x | 6 | 2h 49m | 5d ago | 1m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 97.56% | 97.56% | 32.93% | 32.93% | 2583 ms | → 1.00x | 0 | — | — | 1m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.55% | 97.55% | 99.33% | 99.33% | 255 ms | → 1.00x | 9 | 2m | 13d ago | 50s ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 97.53% | 97.53% | 88.31% | 88.31% | 447 ms | → 1.00x | 4 | 2h 9m | 26d ago | 31s ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 97.53% | 97.53% | 100.00% | 100.00% | 1196 ms | → 1.00x | 0 | — | — | 27s ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 97.19% | 97.19% | 90.95% | 90.95% | 1532 ms | → 1.00x | 3 | 0s | 12d ago | 2m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 97.19% | 97.19% | 2.34% | 2.34% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 97.18% | 97.18% | 99.10% | 99.10% | 268 ms | → 1.00x | 1 | 0s | 21d ago | 2m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 97.18% | 97.18% | 96.18% | 96.18% | 2740 ms | → 1.00x | 4 | 41m | 13d ago | 2m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 97.15% | 97.15% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 9d ago | 1m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 97.14% | 97.14% | 97.85% | 97.85% | 712 ms | → 1.00x | 2 | 31m | 22d ago | 48s ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 96.79% | 96.79% | 81.53% | 81.53% | 1624 ms | → 1.00x | 0 | — | — | 2m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 96.33% | 96.33% | 99.94% | 99.94% | 1462 ms | → 1.00x | 1 | 0s | 22d ago | 45s ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 95.53% | 95.53% | 98.12% | 98.12% | 2715 ms | → 1.00x | 2 | 10m | 19d ago | 1m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 94.88% | 94.88% | 17.31% | 17.31% | 1523 ms | → 1.00x | 1 | 0s | 20d ago | 3m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 94.38% | 94.38% | 99.27% | 99.27% | 1926 ms | → 1.00x | 0 | — | — | 2m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 94.35% | 94.35% | 99.82% | 99.82% | 1032 ms | → 1.00x | 0 | — | — | 2m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 94.31% | 94.31% | 83.10% | 83.10% | 1033 ms | → 1.00x | 13 | 4h 5m | 12d ago | 1m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 94.16% | 94.16% | 89.02% | 89.02% | 1077 ms | → 1.00x | 1 | 2d 17h | 30d ago | 3m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 91.83% | 91.83% | 99.64% | 99.64% | 818 ms | → 1.00x | 6 | 48m | 8d ago | 3m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 91.02% | 91.02% | 96.89% | 96.89% | 1885 ms | → 1.00x | 6 | 1h 58m | 5d ago | 1m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 90.65% | 90.65% | 98.02% | 98.02% | 2039 ms | → 1.00x | 0 | — | — | 1m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 90.27% | 90.27% | 99.78% | 99.78% | 2385 ms | → 1.00x | 0 | — | — | 3m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 89.71% | 89.71% | 99.06% | 99.06% | 832 ms | → 1.00x | 5 | 1h 16m | 6d ago | 19s ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 88.80% | 88.80% | 78.01% | 78.01% | 2997 ms | → 1.00x | 78 | 59m | 6d ago | 4m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 86.83% | 86.83% | 82.00% | 82.00% | 2544 ms | → 1.00x | 154 | 10m | 6d ago | 20s ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 86.35% | 86.35% | 83.18% | 83.18% | 1610 ms | → 1.00x | 4 | 51s | 10d ago | 2m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 85.99% | 85.99% | 99.92% | 99.92% | 2450 ms | → 1.00x | 0 | — | — | 3m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 85.60% | 85.60% | 99.09% | 99.09% | 2489 ms | → 1.00x | 0 | — | — | 3m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 84.96% | 84.96% | 90.79% | 90.79% | 1226 ms | → 1.00x | 1 | 0s | 6d ago | 1m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 84.77% | 84.77% | 99.61% | 99.61% | 3926 ms | → 1.00x | 5 | 0s | 4d ago | 39s ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 84.44% | 84.44% | 75.72% | 75.72% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 83.40% | 83.40% | 98.45% | 98.45% | 3663 ms | → 1.00x | 42 | 1m | 6d ago | 3m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 83.13% | 83.13% | 44.49% | 44.49% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 83.06% | 83.06% | 48.46% | 48.46% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 82.26% | 82.26% | 87.06% | 87.06% | 3823 ms | → 1.00x | 21 | 1m | 16d ago | 2m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 81.45% | 81.45% | 10.72% | 10.72% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 81.27% | 81.27% | 86.83% | 86.83% | 3592 ms | → 1.00x | 11 | 0s | 11d ago | 2m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 80.24% | 80.24% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 25d 9h | 30d ago | 2m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 80.24% | 80.24% | 99.65% | 99.65% | 2548 ms | → 1.00x | 0 | — | — | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 79.84% | 79.84% | 39.41% | 39.41% | 3405 ms | → 1.00x | 100 | 6m | 6d ago | 31s ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 79.84% | 79.84% | 98.53% | 98.53% | 1505 ms | → 1.00x | 15 | 7m | 5d ago | 35s ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 79.84% | 79.84% | 99.88% | 99.88% | 3317 ms | → 1.00x | 2 | 0s | 12d ago | 31s ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 79.54% | 79.54% | 75.11% | 75.11% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 79.46% | 79.46% | 86.23% | 86.23% | 1932 ms | → 1.00x | 6 | 0s | 10d ago | 3m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 79.45% | 79.45% | 85.28% | 85.28% | 1361 ms | → 1.00x | 0 | — | — | 3m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 79.37% | 79.37% | 68.13% | 68.13% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 79.15% | 79.15% | 98.89% | 98.89% | 1688 ms | → 1.00x | 1 | 0s | 14d ago | 4m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 78.82% | 78.82% | 63.15% | 63.15% | 3701 ms | → 1.00x | 199 | 12m | 6d ago | 3m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 78.21% | 78.21% | 93.77% | 93.77% | 4858 ms | → 1.00x | 0 | — | — | 3m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 77.61% | 77.61% | 67.23% | 67.23% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 77.22% | 77.22% | 98.92% | 98.92% | 3804 ms | → 1.00x | 1 | 0s | 10d ago | 4m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 76.95% | 76.95% | 97.23% | 97.23% | 3956 ms | → 1.00x | 30 | 3m | 7d ago | 10s ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 76.83% | 76.83% | 68.41% | 68.41% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 76.42% | 76.42% | 88.70% | 88.70% | 1648 ms | → 1.00x | 1 | 6h | 4d ago | 1m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 75.81% | 75.81% | 93.16% | 93.16% | 938 ms | → 1.00x | 3 | 17m | 9d ago | 2m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 75.68% | 75.68% | 54.05% | 54.05% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 75.51% | 75.51% | 100.00% | 100.00% | 3537 ms | → 1.00x | 0 | — | — | 43s ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 74.90% | 74.90% | 54.78% | 54.78% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 74.90% | 74.90% | 6.48% | 6.48% | — | → 1.00x | 1 | 26d | 30d ago | 35s ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 74.69% | 74.69% | 36.20% | 36.20% | — | → 1.00x | 1 | 26d | 30d ago | 44s ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 74.61% | 74.61% | 86.29% | 86.29% | 3603 ms | → 1.00x | 21 | 3m | 6d ago | 3m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 74.52% | 74.52% | 66.07% | 66.07% | — | → 1.00x | 1 | 26d 1h | 30d ago | 4m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 74.42% | 74.42% | 99.77% | 99.77% | 2496 ms | → 1.00x | 0 | — | — | 3m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 71.37% | 71.37% | 77.59% | 77.59% | 2375 ms | → 1.00x | 0 | — | — | 2m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 69.50% | 69.50% | 91.98% | 91.98% | 2302 ms | → 1.00x | 18 | 17s | 6d ago | 4m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 68.73% | 68.73% | 94.11% | 94.11% | 2779 ms | → 1.00x | 9 | 9h 57m | 7d ago | 3m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 67.95% | 67.95% | 50.52% | 50.52% | 2107 ms | → 1.00x | 146 | 3h 16m | 5d ago | 4m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 64.34% | 64.34% | 64.20% | 64.20% | 2833 ms | → 1.00x | 6 | 0s | 8d ago | 3m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 63.75% | 63.75% | 96.79% | 96.79% | 2546 ms | → 1.00x | 4 | 8m | 17d ago | 2m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 62.16% | 62.16% | 52.45% | 52.45% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 57.43% | 57.43% | 74.00% | 74.00% | 1290 ms | → 1.00x | 15 | 1h 6m | 8d ago | 2m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 57.32% | 57.32% | 95.25% | 95.25% | 1552 ms | → 1.00x | 16 | 1h 50m | 6d ago | 1m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 55.73% | 55.73% | 0.11% | 0.11% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 55.43% | 55.43% | 99.93% | 99.93% | 180 ms | → 1.00x | 0 | — | — | 3m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 53.50% | 53.50% | 98.37% | 98.37% | 1899 ms | → 1.00x | 3 | 3m | 8d ago | 31s ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 51.19% | 51.19% | 75.15% | 75.15% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 25.10% | 25.10% | 68.70% | 68.70% | — | → 1.00x | 1 | 25d 22h | 30d ago | 38s ago |

</details>

<details open>
<summary><strong>🔴 Down (308)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.02% | 98.02% | 97.94% | 97.94% | 2066 ms | → 1.00x | 2 | 30m | 9d ago | 2m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 97.97% | 97.97% | 98.95% | 98.95% | 2244 ms | → 1.00x | 0 | — | — | 1m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 97.27% | 97.27% | 98.78% | 98.78% | 1752 ms | → 1.00x | 1 | 0s | 6d ago | 3m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 89.80% | 89.80% | 92.56% | 92.56% | 4764 ms | → 1.00x | 21 | 30m | 5d ago | 1m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 88.48% | 88.48% | 100.00% | 100.00% | 840 ms | → 1.00x | 0 | — | — | 16s ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 85.31% | 85.31% | 78.42% | 78.42% | — | → 1.00x | 1 | 19d 17h | 24d ago | 40s ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 85.31% | 85.31% | 0.69% | 0.69% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 83.27% | 83.27% | 96.32% | 96.32% | 3194 ms | → 1.00x | 218 | 15m | 7d ago | 3m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 81.10% | 81.10% | 69.98% | 69.98% | 4297 ms | → 1.00x | 4 | 18m | 20d ago | 3m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 78.60% | 78.60% | 91.43% | 91.43% | 1636 ms | → 1.00x | 0 | — | — | 16s ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 73.98% | 73.98% | 85.02% | 85.02% | 3021 ms | → 1.00x | 32 | 4m | 7d ago | 2m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 73.54% | 73.54% | 98.87% | 98.87% | 2098 ms | → 1.00x | 1 | 17h 60m | 24d ago | 3m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 72.98% | 72.98% | 83.85% | 83.85% | 4720 ms | → 1.00x | 34 | 4m | 10d ago | 2m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 72.84% | 72.84% | 99.85% | 99.85% | 1418 ms | → 1.00x | 2 | 0s | 25d ago | 20s ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 69.55% | 69.55% | 93.54% | 93.54% | 3348 ms | → 1.00x | 23 | 3m | 7d ago | 27s ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 67.87% | 67.87% | 69.01% | 69.01% | 3708 ms | → 1.00x | 11 | 8m | 17d ago | 2m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 29.22% | 29.22% | 96.14% | 96.14% | 2122 ms | → 1.00x | 4 | 10h 1m | 6d ago | 34s ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 23.41% | 23.41% | 99.03% | 99.03% | 2505 ms | → 1.00x | 0 | — | — | 2m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 19.68% | 19.68% | 44.99% | 44.99% | 3747 ms | → 1.00x | 0 | — | — | 2m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 18.95% | 18.95% | 97.75% | 97.75% | 2865 ms | → 1.00x | 4 | 0s | 5d ago | 2m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 15.45% | 15.45% | 92.86% | 92.86% | 2942 ms | → 1.00x | 8 | 11h 21m | 4d ago | 1m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 10.94% | 10.94% | 40.01% | 40.01% | 1000 ms | → 1.00x | 1 | 17d 22h | 30d ago | 3m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 9.35% | 9.35% | 25.44% | 25.44% | 930 ms | → 1.00x | 4 | 4d 20h | 6d ago | 1m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 6.12% | 6.12% | 7.76% | 7.76% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 5.53% | 5.53% | 0.10% | 0.10% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 4.88% | 4.88% | 64.69% | 64.69% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 4.53% | 4.53% | 99.82% | 99.82% | 806 ms | → 1.00x | 2 | 2m | 8d ago | 27s ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 4.53% | 4.53% | 73.96% | 73.96% | — | → 1.00x | 4 | 5d 16h | 27d ago | 39s ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 4.53% | 4.53% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 28d ago | 32s ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 4.53% | 4.53% | 90.67% | 90.67% | — | → 1.00x | 2 | 1d 21h | 8d ago | 11s ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 4.53% | 4.53% | 32.34% | 32.34% | — | → 1.00x | 1 | 26d | 30d ago | 32s ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 4.53% | 4.53% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 22s ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 4.53% | 4.53% | 100.00% | 100.00% | 1266 ms | → 1.00x | 0 | — | — | 31s ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 4.53% | 4.53% | 99.89% | 99.89% | 977 ms | → 1.00x | 2 | 1m | 7d ago | 37s ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 4.53% | 4.53% | 99.95% | 99.95% | 844 ms | → 1.00x | 0 | — | — | 37s ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 4.53% | 4.53% | 20.55% | 20.55% | — | → 1.00x | 1 | 26d | 30d ago | 37s ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 4.53% | 4.53% | 46.80% | 46.80% | — | → 1.00x | 1 | 26d | 30d ago | 32s ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 4.53% | 4.53% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 18d ago | 22s ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 4.53% | 4.53% | 99.77% | 99.77% | 344 ms | → 1.00x | 2 | 2m | 5d ago | 37s ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 4.49% | 4.49% | 99.82% | 99.82% | 2170 ms | → 1.00x | 1 | 7h | 5d ago | 49s ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 4.49% | 4.49% | 69.29% | 69.29% | — | → 1.00x | 1 | 25d 15h | 30d ago | 1m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 4.49% | 4.49% | 39.40% | 39.40% | — | → 1.00x | 2 | 9d 1h | 22d ago | 40s ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 4.49% | 4.49% | 99.89% | 99.89% | 1700 ms | → 1.00x | 0 | — | — | 45s ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 4.49% | 4.49% | 99.92% | 99.92% | 1081 ms | → 1.00x | 1 | 0s | 18d ago | 45s ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 40s ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 4.49% | 4.49% | 67.73% | 67.73% | — | → 1.00x | 1 | 25d 15h | 30d ago | 1m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 4.49% | 4.49% | 74.74% | 74.74% | — | → 1.00x | 3 | 8d 13h | 30d ago | 1m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 4.49% | 4.49% | 99.25% | 99.25% | 1021 ms | → 1.00x | 1 | 0s | 18d ago | 1m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 4.49% | 4.49% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 26d ago | 49s ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 4.49% | 4.49% | 91.04% | 91.04% | — | → 1.00x | 2 | 1d 23h | 8d ago | 50s ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 51s ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 4.49% | 4.49% | 20.58% | 20.58% | — | → 1.00x | 1 | 26d | 30d ago | 55s ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 4.49% | 4.49% | 98.92% | 98.92% | 2108 ms | → 1.00x | 10 | 19m | 16d ago | 49s ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 4.49% | 4.49% | 16.77% | 16.77% | — | → 1.00x | 1 | 26d | 30d ago | 50s ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 4.49% | 4.49% | 99.81% | 99.81% | 1018 ms | → 1.00x | 2 | 36m | 17d ago | 45s ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 44s ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 4.49% | 4.49% | 22.60% | 22.60% | — | → 1.00x | 1 | 26d | 30d ago | 45s ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 4.49% | 4.49% | 30.92% | 30.92% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 4.49% | 4.49% | 68.76% | 68.76% | — | → 1.00x | 1 | 25d 15h | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 4.49% | 4.49% | 44.20% | 44.20% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 4.49% | 4.49% | 38.02% | 38.02% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 4.49% | 4.49% | 25.49% | 25.49% | — | → 1.00x | 1 | 26d | 30d ago | 56s ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 4.49% | 4.49% | 4.55% | 4.55% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 4.49% | 4.49% | 36.28% | 36.28% | — | → 1.00x | 1 | 26d | 30d ago | 50s ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 4.49% | 4.49% | 1.35% | 1.35% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 4.49% | 4.49% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 50s ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 4.47% | 4.47% | 52.44% | 52.44% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 4.47% | 4.47% | 47.31% | 47.31% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 4.47% | 4.47% | 79.86% | 79.86% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 4.47% | 4.47% | 85.33% | 85.33% | 1185 ms | → 1.00x | 95 | 33m | 6d ago | 1m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 4.47% | 4.47% | 83.11% | 83.11% | — | → 1.00x | 2 | 2d 24h | 9d ago | 1m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 4.47% | 4.47% | 78.64% | 78.64% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 4.47% | 4.47% | 26.33% | 26.33% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 4.47% | 4.47% | 48.30% | 48.30% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 4.47% | 4.47% | 68.44% | 68.44% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 4.47% | 4.47% | 5.52% | 5.52% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 4.47% | 4.47% | 81.13% | 81.13% | 1407 ms | → 1.00x | 3 | 20m | 18d ago | 2m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 4.47% | 4.47% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 4.47% | 4.47% | 20.14% | 20.14% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 4.47% | 4.47% | 55.75% | 55.75% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 4.47% | 4.47% | 62.39% | 62.39% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 4.47% | 4.47% | 42.69% | 42.69% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 4.47% | 4.47% | 24.01% | 24.01% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 4.47% | 4.47% | 33.55% | 33.55% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 4.47% | 4.47% | 52.99% | 52.99% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 4.47% | 4.47% | 65.07% | 65.07% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 4.47% | 4.47% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 19d ago | 2m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 4.47% | 4.47% | 92.63% | 92.63% | 1761 ms | → 1.00x | 3 | 2h 60m | 4d ago | 2m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 4.47% | 4.47% | 19.49% | 19.49% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 4.47% | 4.47% | 46.51% | 46.51% | 159 ms | → 1.00x | 4 | 3d 7h | 12d ago | 1m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 4.47% | 4.47% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 4.47% | 4.47% | 35.49% | 35.49% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 4.47% | 4.47% | 17.16% | 17.16% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 4.47% | 4.47% | 10.15% | 10.15% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 4.47% | 4.47% | 14.75% | 14.75% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 4.47% | 4.47% | 3.93% | 3.93% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 4.47% | 4.47% | 63.49% | 63.49% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 4.47% | 4.47% | 40.17% | 40.17% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 4.47% | 4.47% | 43.61% | 43.61% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 4.47% | 4.47% | 60.97% | 60.97% | 1454 ms | → 1.00x | 106 | 5m | 6d ago | 1m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 4.44% | 4.44% | 59.84% | 59.84% | 2328 ms | → 1.00x | 2 | 60m | 5d ago | 2m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 4.44% | 4.44% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 8d 13h | 4d ago | 2m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 4.44% | 4.44% | 13.15% | 13.15% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 4.44% | 4.44% | 98.37% | 98.37% | 2575 ms | → 1.00x | 0 | — | — | 2m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 4.44% | 4.44% | 21.32% | 21.32% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 4.44% | 4.44% | 4.63% | 4.63% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 4.44% | 4.44% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 4.44% | 4.44% | 83.98% | 83.98% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 4.44% | 4.44% | 47.90% | 47.90% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 4.44% | 4.44% | 98.24% | 98.24% | 2892 ms | → 1.00x | 0 | — | — | 2m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 4.44% | 4.44% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 4.44% | 4.44% | 65.91% | 65.91% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 4.44% | 4.44% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 8d 13h | 4d ago | 2m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 4.44% | 4.44% | 49.45% | 49.45% | 213 ms | → 1.00x | 0 | — | — | 2m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 4.44% | 4.44% | 46.05% | 46.05% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 4.44% | 4.44% | 22.23% | 22.23% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 4.44% | 4.44% | 98.48% | 98.48% | 1816 ms | → 1.00x | 1 | 0s | 25d ago | 2m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 4.42% | 4.42% | 21.09% | 21.09% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 4.42% | 4.42% | 27.04% | 27.04% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 4.42% | 4.42% | 30.30% | 30.30% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 4.42% | 4.42% | 3.12% | 3.12% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 4.42% | 4.42% | 31.88% | 31.88% | — | → 1.00x | 3 | 6d 3h | 13d ago | 2m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 4.42% | 4.42% | 46.41% | 46.41% | 74 ms | → 1.00x | 2 | 8d 8h | 5d ago | 2m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 4.42% | 4.42% | 64.35% | 64.35% | — | → 1.00x | 2 | 9d 1h | 22d ago | 2m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 4.42% | 4.42% | 22.07% | 22.07% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 4.42% | 4.42% | 34.65% | 34.65% | 1196 ms | → 1.00x | 2 | 1d 14h | 23d ago | 2m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 4.42% | 4.42% | 39.95% | 39.95% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 4.42% | 4.42% | 2.87% | 2.87% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 4.42% | 4.42% | 27.77% | 27.77% | 3101 ms | → 1.00x | 165 | 16m | 7d ago | 2m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 4.42% | 4.42% | 35.56% | 35.56% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 4.42% | 4.42% | 87.63% | 87.63% | 2166 ms | → 1.00x | 0 | — | — | 2m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 4.42% | 4.42% | 72.39% | 72.39% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 4.42% | 4.42% | 26.68% | 26.68% | 731 ms | → 1.00x | 0 | — | — | 2m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 4.42% | 4.42% | 6.70% | 6.70% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 4.42% | 4.42% | 8.99% | 8.99% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 4.42% | 4.42% | 17.59% | 17.59% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 4.42% | 4.42% | 91.72% | 91.72% | 1017 ms | → 1.00x | 27 | 0s | 4d ago | 2m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 4.38% | 4.38% | 5.20% | 5.20% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 4.38% | 4.38% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 4.38% | 4.38% | 22.80% | 22.80% | 581 ms | → 1.00x | 1 | 0s | 23d ago | 2m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 4.38% | 4.38% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 4.38% | 4.38% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 10d ago | 2m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 4.38% | 4.38% | 18.10% | 18.10% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 4.38% | 4.38% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 4.37% | 4.37% | 78.14% | 78.14% | 1586 ms | → 1.00x | 96 | 4h 58m | 5d ago | 2m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 4.37% | 4.37% | 73.53% | 73.53% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 4.37% | 4.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 4.37% | 4.37% | 38.64% | 38.64% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 4.37% | 4.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 4.37% | 4.37% | 22.68% | 22.68% | 1593 ms | → 1.00x | 0 | — | — | 2m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 4.35% | 4.35% | 63.31% | 63.31% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 4.35% | 4.35% | 40.15% | 40.15% | 451 ms | → 1.00x | 0 | — | — | 3m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 4.35% | 4.35% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 12d ago | 3m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Crond](https://lmspeed.net/provider/crond) | 4.35% | 4.35% | 22.80% | 22.80% | 2051 ms | → 1.00x | 5 | 6m | 14d ago | 3m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 4.35% | 4.35% | 43.20% | 43.20% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 4.35% | 4.35% | 54.39% | 54.39% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 4.35% | 4.35% | 90.53% | 90.53% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 4.35% | 4.35% | 73.32% | 73.32% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 4.35% | 4.35% | 99.26% | 99.26% | 2430 ms | → 1.00x | 0 | — | — | 3m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 4.35% | 4.35% | 16.23% | 16.23% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 4.35% | 4.35% | 51.26% | 51.26% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 4.35% | 4.35% | 16.69% | 16.69% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 4.35% | 4.35% | 77.23% | 77.23% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 4.35% | 4.35% | 0.01% | 0.01% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 4.35% | 4.35% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 4.33% | 4.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 4.33% | 4.33% | 74.22% | 74.22% | — | → 1.00x | 27 | 6h 2m | 11d ago | 3m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 4.33% | 4.33% | 3.13% | 3.13% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 4.33% | 4.33% | 50.25% | 50.25% | 1553 ms | → 1.00x | 6 | 1h 23m | 20d ago | 3m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 4.33% | 4.33% | 96.06% | 96.06% | — | → 1.00x | 6 | 14h 25m | 7d ago | 3m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 4.33% | 4.33% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 4.33% | 4.33% | 20.82% | 20.82% | 2311 ms | → 1.00x | 64 | 6m | 4d ago | 3m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 4.31% | 4.31% | 76.64% | 76.64% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 4.31% | 4.31% | 33.64% | 33.64% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 4.31% | 4.31% | 87.39% | 87.39% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 4.31% | 4.31% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 12d ago | 3m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 4.31% | 4.31% | 32.40% | 32.40% | — | → 1.00x | 2 | 2d 6h | 8d ago | 3m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 4.31% | 4.31% | 48.90% | 48.90% | — | → 1.00x | 6 | 4d 7h | 15d ago | 3m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 4.31% | 4.31% | 50.43% | 50.43% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 4.31% | 4.31% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 4.31% | 4.31% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 4.31% | 4.31% | 45.98% | 45.98% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 4.30% | 4.30% | 84.44% | 84.44% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 4.30% | 4.30% | 48.81% | 48.81% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 4.30% | 4.30% | 34.00% | 34.00% | 1717 ms | → 1.00x | 3 | 20m | 8d ago | 3m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 4.30% | 4.30% | 82.46% | 82.46% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 4.30% | 4.30% | 49.10% | 49.10% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 4.30% | 4.30% | 99.12% | 99.12% | 4294 ms | → 1.00x | 6 | 2h | 4d ago | 3m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 4.30% | 4.30% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 12d 18h | 5d ago | 3m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 4.30% | 4.30% | 21.71% | 21.71% | 2791 ms | → 1.00x | 52 | 1h 20m | 4d ago | 3m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 4.30% | 4.30% | 46.30% | 46.30% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 4.30% | 4.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 4.28% | 4.28% | 84.65% | 84.65% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 4.28% | 4.28% | 57.88% | 57.88% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 4.28% | 4.28% | 60.67% | 60.67% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 4.28% | 4.28% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 24d ago | 3m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 4.28% | 4.28% | 39.16% | 39.16% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 4.28% | 4.28% | 76.99% | 76.99% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 4.28% | 4.28% | 22.32% | 22.32% | 607 ms | → 1.00x | 1 | 0s | 30d ago | 3m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 4.28% | 4.28% | 23.09% | 23.09% | 1253 ms | → 1.00x | 6 | 10m | 10d ago | 3m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 4.28% | 4.28% | 86.17% | 86.17% | 710 ms | → 1.00x | 1 | 10s | 10d ago | 3m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 4.28% | 4.28% | 83.68% | 83.68% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 4.28% | 4.28% | 75.88% | 75.88% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 4.28% | 4.28% | 63.55% | 63.55% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 4.28% | 4.28% | 23.11% | 23.11% | 789 ms | → 1.00x | 0 | — | — | 3m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 4.28% | 4.28% | 62.64% | 62.64% | — | → 1.00x | 1 | 26d 1h | 30d ago | 3m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 4.28% | 4.28% | 5.08% | 5.08% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 4.28% | 4.28% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [xAI](https://lmspeed.net/provider/xai) | 4.28% | 4.28% | 23.13% | 23.13% | 1893 ms | → 1.00x | 0 | — | — | 3m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 4.28% | 4.28% | 38.37% | 38.37% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 4.28% | 4.28% | 99.17% | 99.17% | 1682 ms | → 1.00x | 0 | — | — | 3m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 4.26% | 4.26% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 4.26% | 4.26% | 70.96% | 70.96% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 4.26% | 4.26% | 99.84% | 99.84% | 1038 ms | → 1.00x | 0 | — | — | 3m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 4.26% | 4.26% | 39.57% | 39.57% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 4.26% | 4.26% | 92.62% | 92.62% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 4.26% | 4.26% | 86.30% | 86.30% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 4.26% | 4.26% | 99.77% | 99.77% | 2455 ms | → 1.00x | 0 | — | — | 3m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 4.26% | 4.26% | 68.72% | 68.72% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 4.25% | 4.25% | 10.24% | 10.24% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 4.25% | 4.25% | 83.66% | 83.66% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 4.25% | 4.25% | 75.27% | 75.27% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 4.25% | 4.25% | 46.73% | 46.73% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 4.25% | 4.25% | 99.95% | 99.95% | 1340 ms | → 1.00x | 0 | — | — | 4m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 4.25% | 4.25% | 99.74% | 99.74% | 564 ms | → 1.00x | 0 | — | — | 3m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d 1h | 30d ago | 3m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 4.25% | 4.25% | 74.18% | 74.18% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 4.25% | 4.25% | 74.31% | 74.31% | — | → 1.00x | 1 | 24d 15h | 29d ago | 4m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 4.25% | 4.25% | 35.55% | 35.55% | — | → 1.00x | 1 | 26d | 30d ago | 3m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 4.25% | 4.25% | 45.59% | 45.59% | 529 ms | → 1.00x | 0 | — | — | 3m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 4.25% | 4.25% | 81.34% | 81.34% | 1833 ms | → 1.00x | 1 | 3h | 8d ago | 3m ago |
| [Mine](https://lmspeed.net/provider/mine) | 4.25% | 4.25% | 23.25% | 23.25% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 4.25% | 4.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 4.25% | 4.25% | 54.28% | 54.28% | — | → 1.00x | 1 | 26d | 30d ago | 4m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 4.25% | 4.25% | 99.53% | 99.53% | 1382 ms | → 1.00x | 0 | — | — | 3m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 4.12% | 4.12% | 100.00% | 100.00% | 794 ms | → 1.00x | 0 | — | — | 11s ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 4.07% | 4.07% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 17d ago | 1m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 3.98% | 3.98% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 14d ago | 2m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 3.98% | 3.98% | 23.40% | 23.40% | 2494 ms | → 1.00x | 89 | 12m | 7d ago | 2m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 3.97% | 3.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 3.70% | 3.70% | 99.75% | 99.75% | 1257 ms | → 1.00x | 3 | 0s | 5d ago | 10s ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 3.70% | 3.70% | 100.00% | 100.00% | 769 ms | → 1.00x | 0 | — | — | 21s ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 3.70% | 3.70% | 98.70% | 98.70% | 1726 ms | → 1.00x | 13 | 0s | 14d ago | 32s ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 3.70% | 3.70% | 100.00% | 100.00% | 1959 ms | → 1.00x | 0 | — | — | 10s ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 3.70% | 3.70% | 98.40% | 98.40% | 960 ms | → 1.00x | 4 | 15m | 29d ago | 31s ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 3.70% | 3.70% | 98.05% | 98.05% | 502 ms | → 1.00x | 3 | 0s | 5d ago | 40s ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 3.70% | 3.70% | 98.92% | 98.92% | 628 ms | → 1.00x | 3 | 1h 40m | 6d ago | 28s ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 3.70% | 3.70% | 99.29% | 99.29% | 1784 ms | → 1.00x | 1 | 2h 37m | 23d ago | 25s ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 3.70% | 3.70% | 100.00% | 100.00% | 1054 ms | → 1.00x | 0 | — | — | 10s ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 3.70% | 3.70% | 100.00% | 100.00% | 1045 ms | → 1.00x | 0 | — | — | 21s ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 3.67% | 3.67% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 17d ago | 56s ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 3.67% | 3.67% | 99.65% | 99.65% | 1109 ms | → 1.00x | 3 | 20m | 6d ago | 45s ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 3.67% | 3.67% | 76.21% | 76.21% | — | → 1.00x | 2 | 10d 5h | 24d ago | 45s ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 3.67% | 3.67% | 99.73% | 99.73% | 760 ms | → 1.00x | 1 | 2h 60m | 5d ago | 49s ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 3.67% | 3.67% | 75.41% | 75.41% | 4993 ms | → 1.00x | 231 | 1h 17m | 4d ago | 1m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 3.67% | 3.67% | 83.84% | 83.84% | 1132 ms | → 1.00x | 8 | 17m | 9d ago | 1m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 3.67% | 3.67% | 91.99% | 91.99% | 1179 ms | → 1.00x | 0 | — | — | 1m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 3.67% | 3.67% | 16.44% | 16.44% | — | → 1.00x | 1 | 26d | 30d ago | 56s ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 3.67% | 3.67% | 99.94% | 99.94% | 2081 ms | → 1.00x | 1 | 21m | 19d ago | 50s ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 3.67% | 3.67% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 45s ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 3.67% | 3.67% | 99.60% | 99.60% | 2362 ms | → 1.00x | 1 | 0s | 27d ago | 49s ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 3.67% | 3.67% | 3.80% | 3.80% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 3.66% | 3.66% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 1m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 3.57% | 3.57% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 3.57% | 3.57% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 3.57% | 3.57% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | 2m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 3.52% | 3.52% | 32.96% | 32.96% | 899 ms | → 1.00x | 0 | — | — | 3m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 21s ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 18s ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10s ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 9s ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10s ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10s ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 20s ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 10s ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 26d | 30d ago | — |

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
