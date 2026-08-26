# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**716 providers** — 281 🟢 operational · 68 🟡 degraded · 365 🔴 down · 2 ⚫ unknown

_Updated 2026-08-26 03:55 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

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
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 99.71% | 98.81% | 98.81% | — | ↓ 0.92x | 0 | — | — | 7m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.33% | 97.00% | 97.00% | — | → 1.01x | 0 | — | — | 6m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.86% | 98.92% | 98.92% | — | → 1.00x | 0 | — | — | 13m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.80% | 97.03% | 97.03% | — | ↑ 1.05x | 0 | — | — | 8m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.80% | 99.87% | 99.87% | — | ↓ 0.81x | 0 | — | — | 6m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 100.00% | 99.72% | 22.30% | 22.30% | — | ↓ 0.86x | 0 | — | — | 12m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 99.49% | 57.00% | 57.00% | — | ↓ 0.95x | 0 | — | — | 10m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 100.00% | 99.74% | 66.50% | 66.50% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.91% | 68.50% | 68.50% | — | → 0.96x | 0 | — | — | 9m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 99.89% | 98.85% | 98.85% | — | ↓ 0.92x | 0 | — | — | 7m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 100.00% | 53.28% | 93.54% | 93.54% | — | ↓ 0.11x | 0 | — | — | 4m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.89% | 99.86% | 99.86% | — | ↑ 1.99x | 0 | — | — | 8m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 99.86% | 100.00% | 100.00% | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 99.77% | 99.83% | 99.83% | — | → 0.99x | 0 | — | — | 8m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.88% | 98.00% | 98.00% | — | ↓ 0.93x | 0 | — | — | 9m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.92% | 99.65% | 99.65% | — | → 1.03x | 0 | — | — | 14m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 36.07% | 22.80% | 22.80% | — | ↓ 0.85x | 0 | — | — | 10m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 100.00% | 99.80% | 100.00% | 100.00% | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 99.55% | 98.00% | 98.00% | — | ↓ 0.84x | 0 | — | — | 14m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 99.32% | 99.65% | 99.65% | — | ↓ 0.35x | 0 | — | — | 40s ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.39% | 98.88% | 98.88% | — | ↓ 0.70x | 0 | — | — | 5m ago |
| [极速蹬](https://lmspeed.net/provider/jisudeng) | 100.00% | 99.51% | — | — | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.89% | 99.90% | 99.90% | — | ↑ 1.14x | 0 | — | — | 14m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 99.92% | 99.92% | 99.92% | — | → 0.98x | 0 | — | — | 40s ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.94% | 98.35% | 98.35% | — | ↓ 0.94x | 0 | — | — | 7m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 99.51% | 100.00% | 100.00% | — | ↓ 0.91x | 0 | — | — | 3m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 72.39% | 99.26% | 99.26% | — | → 0.96x | 0 | — | — | 12m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 100.00% | 99.80% | 69.87% | 69.87% | — | → 0.98x | 0 | — | — | 9m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 99.89% | 99.97% | 99.97% | — | ↓ 0.87x | 0 | — | — | 14m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.89% | 63.68% | 63.68% | — | → 1.01x | 0 | — | — | 9m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 99.89% | 99.49% | 99.49% | — | → 0.99x | 0 | — | — | 14m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 99.77% | 89.57% | 89.57% | — | → 1.00x | 0 | — | — | 8m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.65% | 99.94% | 99.94% | — | → 0.99x | 0 | — | — | 4m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 100.00% | 99.66% | 74.00% | 74.00% | — | ↓ 0.94x | 0 | — | — | 9m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.94% | 98.74% | 98.74% | — | → 0.99x | 0 | — | — | 8m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.28% | 99.77% | 99.77% | — | ↓ 0.90x | 0 | — | — | 4m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 34.77% | 23.13% | 23.13% | — | → 0.97x | 0 | — | — | 20s ago |
| [zlkpro](https://lmspeed.net/provider/zlkpro) | 100.00% | 99.68% | — | — | — | → 1.03x | 0 | — | — | 3m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 99.86% | 99.80% | 99.98% | 99.98% | — | ↑ 1.19x | 0 | — | — | 2m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.86% | 99.69% | 98.93% | 98.93% | — | ↓ 0.94x | 0 | — | — | 1m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.86% | 99.46% | 99.56% | 99.56% | — | ↓ 0.91x | 0 | — | — | 39s ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.86% | 99.77% | 95.68% | 95.68% | — | → 1.00x | 0 | — | — | 1m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.86% | 99.75% | 49.74% | 49.74% | — | ↑ 1.10x | 0 | — | — | 40s ago |
| [V-API](https://lmspeed.net/provider/v-api) | 99.86% | 99.27% | 99.76% | 99.76% | — | → 1.05x | 0 | — | — | 1m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 99.86% | 99.66% | 76.22% | 76.22% | — | → 0.99x | 0 | — | — | 19s ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.86% | 99.58% | 99.74% | 99.74% | — | ↓ 0.92x | 0 | — | — | 20s ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 99.86% | 99.86% | 44.95% | 44.95% | — | → 0.98x | 0 | — | — | 20s ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 99.86% | 99.83% | 99.81% | 99.81% | — | → 1.01x | 0 | — | — | 20s ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 99.86% | 99.75% | 99.94% | 99.94% | — | → 1.01x | 0 | — | — | 15m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 99.86% | 99.94% | 99.96% | 99.96% | — | → 1.02x | 0 | — | — | 15m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 99.86% | 99.77% | 99.91% | 99.91% | — | ↓ 0.93x | 0 | — | — | 14m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.86% | 99.89% | 99.64% | 99.64% | — | → 0.98x | 0 | — | — | 14m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 99.86% | 99.80% | 99.84% | 99.84% | — | ↓ 0.94x | 0 | — | — | 14m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 99.86% | 99.74% | 99.87% | 99.87% | — | ↓ 0.91x | 0 | — | — | 14m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 99.86% | 99.86% | 99.62% | 99.62% | — | → 1.05x | 0 | — | — | 14m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 99.86% | 99.72% | 99.77% | 99.77% | — | → 0.98x | 0 | — | — | 14m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.86% | 99.77% | 99.90% | 99.90% | — | ↓ 0.95x | 0 | — | — | 13m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 99.86% | 99.72% | 99.77% | 99.77% | — | → 1.01x | 0 | — | — | 12m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 99.86% | 99.74% | 99.48% | 99.48% | — | ↓ 0.94x | 0 | — | — | 12m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 99.86% | 99.86% | 88.17% | 88.17% | — | ↓ 0.94x | 0 | — | — | 12m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.86% | 99.86% | 97.57% | 97.57% | — | → 1.01x | 0 | — | — | 11m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.86% | 99.74% | 96.73% | 96.73% | — | → 1.02x | 0 | — | — | 11m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 99.86% | 99.83% | 74.11% | 74.11% | — | → 0.98x | 0 | — | — | 9m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 99.86% | 89.28% | 98.02% | 98.02% | — | ↓ 0.64x | 0 | — | — | 6m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.86% | 99.31% | 99.10% | 99.10% | — | ↓ 0.81x | 0 | — | — | 8m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 99.86% | 99.65% | 99.74% | 99.74% | — | → 0.97x | 0 | — | — | 7m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 99.86% | 99.83% | 97.00% | 97.00% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 99.86% | 99.80% | 77.97% | 77.97% | — | → 0.99x | 0 | — | — | 9m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.86% | 99.63% | 54.70% | 54.70% | — | → 0.97x | 0 | — | — | 10m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 99.86% | 99.57% | 100.00% | 100.00% | — | ↓ 0.70x | 0 | — | — | 7m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 99.86% | 99.86% | 99.09% | 99.09% | — | ↑ 1.29x | 0 | — | — | 10m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.86% | 98.88% | 98.81% | 98.81% | — | ↑ 1.22x | 0 | — | — | 7m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 99.86% | 99.69% | 30.20% | 30.20% | — | ↓ 0.79x | 0 | — | — | 10m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 99.86% | 99.71% | 99.71% | 99.71% | — | ↑ 1.20x | 0 | — | — | 6m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.86% | 99.77% | 24.91% | 24.91% | — | → 0.98x | 0 | — | — | 10m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 99.86% | 99.74% | 98.69% | 98.69% | — | → 1.01x | 0 | — | — | 7m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 99.86% | 98.79% | 96.94% | 96.94% | — | ↓ 0.15x | 0 | — | — | 7m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 99.86% | 99.94% | 60.60% | 60.60% | — | → 1.00x | 0 | — | — | 10m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 99.86% | 99.89% | 99.31% | 99.31% | — | ↓ 0.76x | 0 | — | — | 9m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 99.86% | 99.86% | 28.78% | 28.78% | — | ↓ 0.90x | 0 | — | — | 7m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 99.86% | 99.71% | 96.32% | 96.32% | — | → 1.00x | 0 | — | — | 10m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 99.86% | 99.74% | 98.73% | 98.73% | — | → 1.02x | 0 | — | — | 8m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 99.86% | 99.60% | 97.87% | 97.87% | — | → 1.00x | 0 | — | — | 6m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.86% | 99.89% | 98.47% | 98.47% | — | → 1.03x | 0 | — | — | 7m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 99.86% | 99.31% | 99.82% | 99.82% | — | → 1.01x | 0 | — | — | 6m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 99.86% | 99.91% | 98.37% | 98.37% | — | ↑ 1.11x | 0 | — | — | 7m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 99.86% | 99.89% | 98.88% | 98.88% | — | → 0.99x | 0 | — | — | 9m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 99.86% | 99.88% | 98.78% | 98.78% | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 99.86% | 29.81% | 99.82% | 99.82% | — | ↓ 0.94x | 0 | — | — | 3m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.86% | 98.76% | 97.07% | 97.07% | — | ↓ 0.87x | 0 | — | — | 5m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 99.86% | 99.54% | 98.72% | 98.72% | — | → 0.99x | 0 | — | — | 3m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 99.86% | 99.83% | 99.51% | 99.51% | — | ↓ 0.92x | 0 | — | — | 5m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 99.86% | 99.83% | 100.00% | 100.00% | — | ↑ 1.17x | 0 | — | — | 4m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.86% | 99.77% | 99.89% | 99.89% | — | → 1.00x | 0 | — | — | 5m ago |
| [APIMart](https://lmspeed.net/provider/apimart) | 99.86% | 99.80% | — | — | — | ↑ 1.11x | 0 | — | — | 3m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 99.86% | 99.77% | 16.67% | 16.67% | — | → 1.03x | 0 | — | — | 4m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 99.86% | 99.80% | 99.92% | 99.92% | — | ↓ 0.90x | 0 | — | — | 4m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 99.86% | 99.83% | 0.00% | 0.00% | — | ↓ 0.93x | 0 | — | — | 5m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 99.86% | 99.91% | — | — | — | ↓ 0.90x | 0 | — | — | 3m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 99.86% | 99.86% | 99.97% | 99.97% | — | ↓ 0.95x | 0 | — | — | 4m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 99.86% | 99.91% | 0.00% | 0.00% | — | → 1.04x | 0 | — | — | 4m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.86% | 99.83% | 99.85% | 99.85% | — | ↓ 0.57x | 0 | — | — | 4m ago |
| [Tokeness.io](https://lmspeed.net/provider/tokeness-cn) | 99.86% | 99.94% | 99.66% | 99.66% | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 99.86% | 99.83% | 99.34% | 99.34% | — | → 1.00x | 0 | — | — | 6m ago |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 99.86% | 99.39% | — | — | — | ↓ 0.80x | 0 | — | — | 3m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 99.86% | 99.83% | 0.69% | 0.69% | — | ↑ 1.30x | 0 | — | — | 6m ago |
| [Jectora](https://lmspeed.net/provider/jectora) | 99.86% | 99.82% | — | — | — | → 1.05x | 0 | — | — | 3m ago |
| [跑路中转站](https://lmspeed.net/provider/mrcwoods) | 99.86% | 99.33% | — | — | — | → 1.03x | 0 | — | — | 3m ago |
| [YiAPI](https://lmspeed.net/provider/yiapi-ai) | 99.86% | 99.63% | — | — | — | → 0.99x | 0 | — | — | 3m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 99.72% | 99.75% | 68.59% | 68.59% | — | → 1.05x | 0 | — | — | 2m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.72% | 99.69% | 98.78% | 98.78% | — | ↑ 1.13x | 0 | — | — | 2m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 99.72% | 99.61% | 99.60% | 99.60% | — | → 0.99x | 0 | — | — | 1m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 99.72% | 99.77% | 99.98% | 99.98% | — | ↑ 1.08x | 0 | — | — | 2m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 99.72% | 99.55% | 97.98% | 97.98% | — | ↑ 1.09x | 0 | — | — | 20s ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 99.72% | 99.55% | 99.74% | 99.74% | — | ↓ 0.92x | 0 | — | — | 19s ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 99.72% | 99.75% | 99.58% | 99.58% | — | → 1.03x | 0 | — | — | 20s ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 99.72% | 99.75% | 99.90% | 99.90% | — | ↓ 0.72x | 0 | — | — | 20s ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 99.72% | 99.80% | 99.92% | 99.92% | — | → 1.02x | 0 | — | — | 15m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 99.72% | 99.72% | 22.33% | 22.33% | — | ↑ 1.18x | 0 | — | — | 14m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 99.72% | 99.24% | 5.08% | 5.08% | — | → 1.03x | 0 | — | — | 14m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 99.72% | 99.74% | 76.89% | 76.89% | — | → 1.03x | 0 | — | — | 14m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 99.72% | 99.60% | 99.92% | 99.92% | — | ↑ 1.05x | 0 | — | — | 14m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 99.72% | 99.83% | 99.85% | 99.85% | — | ↑ 1.11x | 0 | — | — | 14m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.72% | 99.66% | 99.02% | 99.02% | — | → 1.04x | 0 | — | — | 13m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 99.72% | 99.72% | 99.85% | 99.85% | — | ↓ 0.92x | 0 | — | — | 12m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 99.72% | 99.66% | 98.93% | 98.93% | — | ↓ 0.95x | 0 | — | — | 12m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 99.72% | 99.83% | 99.87% | 99.87% | — | ↑ 1.09x | 0 | — | — | 12m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.72% | 99.54% | 24.53% | 24.53% | — | → 0.99x | 0 | — | — | 12m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.72% | 99.74% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 12m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 99.72% | 99.83% | 99.37% | 99.37% | — | ↓ 0.89x | 0 | — | — | 11m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 99.72% | 99.42% | 98.47% | 98.47% | — | → 0.97x | 0 | — | — | 6m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 99.72% | 99.89% | 98.73% | 98.73% | — | → 1.02x | 0 | — | — | 9m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 99.72% | 99.80% | 98.56% | 98.56% | — | ↓ 0.52x | 0 | — | — | 7m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 99.72% | 99.66% | 99.18% | 99.18% | — | → 1.04x | 0 | — | — | 8m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 99.72% | 99.60% | 84.58% | 84.58% | — | ↑ 1.06x | 0 | — | — | 9m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 99.72% | 99.77% | 98.83% | 98.83% | — | ↑ 1.07x | 0 | — | — | 7m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 99.72% | 99.86% | 50.15% | 50.15% | — | ↑ 1.15x | 0 | — | — | 10m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 99.72% | 99.34% | 99.61% | 99.61% | — | ↓ 0.89x | 0 | — | — | 9m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 99.72% | 99.57% | 86.85% | 86.85% | — | → 1.02x | 0 | — | — | 7m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 99.72% | 99.57% | 26.84% | 26.84% | — | ↑ 1.07x | 0 | — | — | 10m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 99.72% | 99.71% | 58.17% | 58.17% | — | → 1.01x | 0 | — | — | 8m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 99.72% | 99.80% | 99.93% | 99.93% | — | ↓ 0.94x | 0 | — | — | 6m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.72% | 99.68% | 98.38% | 98.38% | — | → 1.02x | 0 | — | — | 8m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 99.72% | 99.83% | 93.73% | 93.73% | — | → 0.96x | 0 | — | — | 6m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 99.72% | 99.89% | 99.97% | 99.97% | — | ↑ 1.05x | 0 | — | — | 9m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 99.72% | 99.68% | 98.90% | 98.90% | — | → 1.04x | 0 | — | — | 8m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 99.72% | 97.71% | 99.82% | 99.82% | — | ↓ 0.94x | 0 | — | — | 8m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 99.72% | 98.99% | 99.45% | 99.45% | — | → 0.97x | 0 | — | — | 4m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.72% | 99.80% | 99.61% | 99.61% | — | → 1.02x | 0 | — | — | 3m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 99.72% | 99.62% | 100.00% | 100.00% | — | ↓ 0.90x | 0 | — | — | 3m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 99.72% | 99.88% | 99.97% | 99.97% | — | ↑ 1.06x | 0 | — | — | 4m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 99.72% | 99.59% | 100.00% | 100.00% | — | ↓ 0.87x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 99.72% | 99.54% | 100.00% | 100.00% | — | ↓ 0.80x | 0 | — | — | 4m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 99.72% | 99.74% | 31.33% | 31.33% | — | → 0.96x | 0 | — | — | 6m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.72% | 95.55% | 99.61% | 99.61% | — | ↓ 0.85x | 0 | — | — | 4m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 99.72% | 99.71% | 99.98% | 99.98% | — | ↑ 1.32x | 0 | — | — | 4m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.72% | 99.60% | 87.87% | 87.87% | — | ↑ 1.07x | 0 | — | — | 4m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.72% | 99.54% | 99.92% | 99.92% | — | → 0.99x | 0 | — | — | 4m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 99.72% | 99.74% | 99.85% | 99.85% | — | → 0.97x | 0 | — | — | 4m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.72% | 99.86% | 99.94% | 99.94% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 99.72% | 99.65% | 14.21% | 14.21% | — | ↓ 0.73x | 0 | — | — | 6m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 99.72% | 98.79% | 88.31% | 88.31% | — | → 1.01x | 0 | — | — | 4m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 99.72% | 99.68% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 4m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 99.72% | 99.83% | 97.35% | 97.35% | — | → 1.01x | 0 | — | — | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.72% | 99.80% | 99.86% | 99.86% | — | → 1.03x | 0 | — | — | 4m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 99.72% | 99.77% | 99.67% | 99.67% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 99.72% | 99.86% | 60.72% | 60.72% | — | → 0.99x | 0 | — | — | 3m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 99.72% | 99.51% | 99.76% | 99.76% | — | ↑ 1.09x | 0 | — | — | 4m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 99.72% | 99.77% | 99.92% | 99.92% | — | ↓ 0.94x | 0 | — | — | 4m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 99.72% | 99.86% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 3m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 99.72% | 99.71% | 99.34% | 99.34% | — | → 0.98x | 0 | — | — | 3m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.72% | 99.65% | 98.56% | 98.56% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 99.58% | 99.52% | 93.57% | 93.57% | — | → 1.01x | 0 | — | — | 2m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 99.58% | 99.75% | 99.95% | 99.95% | — | ↓ 0.86x | 0 | — | — | 1m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 99.58% | 99.52% | 99.28% | 99.28% | — | → 1.05x | 0 | — | — | 1m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 99.58% | 99.01% | 99.74% | 99.74% | — | → 1.02x | 0 | — | — | 40s ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 99.58% | 99.77% | 70.89% | 70.89% | — | ↓ 0.92x | 0 | — | — | 40s ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 99.58% | 99.86% | 99.34% | 99.34% | — | → 0.99x | 0 | — | — | 12m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 99.58% | 99.32% | 99.03% | 99.03% | — | → 0.96x | 0 | — | — | 11m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.58% | 99.69% | 25.33% | 25.33% | — | ↓ 0.77x | 0 | — | — | 11m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.58% | 99.86% | 99.67% | 99.67% | — | → 0.99x | 0 | — | — | 11m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 99.58% | 99.57% | 95.85% | 95.85% | — | ↓ 0.93x | 0 | — | — | 7m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.58% | 99.31% | 99.87% | 99.87% | — | ↓ 0.66x | 0 | — | — | 6m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 99.58% | 99.63% | 99.64% | 99.64% | — | → 0.95x | 0 | — | — | 8m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 99.58% | 99.80% | 96.69% | 96.69% | — | → 0.95x | 0 | — | — | 8m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 99.58% | 99.83% | 96.80% | 96.80% | — | ↓ 0.83x | 0 | — | — | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 99.58% | 99.80% | 93.26% | 93.26% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 99.58% | 99.54% | 90.79% | 90.79% | — | → 0.96x | 0 | — | — | 7m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 99.58% | 99.40% | 83.46% | 83.46% | — | → 1.00x | 0 | — | — | 9m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 99.58% | 99.51% | 64.92% | 64.92% | — | ↓ 0.58x | 0 | — | — | 9m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 99.58% | 99.20% | 99.27% | 99.27% | — | ↓ 0.74x | 0 | — | — | 9m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.58% | 99.68% | 90.95% | 90.95% | — | ↑ 1.08x | 0 | — | — | 9m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 99.58% | 99.66% | 90.32% | 90.32% | — | ↓ 0.89x | 0 | — | — | 9m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 99.58% | 99.74% | 28.39% | 28.39% | — | ↓ 0.50x | 0 | — | — | 8m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 99.58% | 99.60% | 97.80% | 97.80% | — | → 0.99x | 0 | — | — | 7m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.58% | 99.68% | 98.16% | 98.16% | — | ↑ 1.12x | 0 | — | — | 6m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.58% | 98.91% | 98.66% | 98.66% | — | ↓ 0.95x | 0 | — | — | 8m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 99.58% | 99.63% | 71.79% | 71.79% | — | → 0.97x | 0 | — | — | 9m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 99.58% | 99.74% | 91.87% | 91.87% | — | ↓ 0.89x | 0 | — | — | 8m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 99.58% | 99.74% | 99.89% | 99.89% | — | → 0.97x | 0 | — | — | 8m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.58% | 99.51% | 92.20% | 92.20% | — | → 0.99x | 0 | — | — | 8m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 99.58% | 99.08% | 81.53% | 81.53% | — | → 1.01x | 0 | — | — | 9m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 99.58% | 99.51% | 31.58% | 31.58% | — | → 1.04x | 0 | — | — | 10m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 99.58% | 99.60% | 99.30% | 99.30% | — | → 1.04x | 0 | — | — | 8m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 99.58% | 98.70% | 91.90% | 91.90% | — | → 0.99x | 0 | — | — | 3m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 99.58% | 99.36% | 93.61% | 93.61% | — | ↑ 1.08x | 0 | — | — | 5m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 99.58% | 99.71% | 100.00% | 100.00% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 99.58% | 85.75% | 99.98% | 99.98% | — | ↓ 0.46x | 0 | — | — | 4m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 99.58% | 99.77% | 100.00% | 100.00% | — | → 0.99x | 0 | — | — | 3m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 99.58% | 43.44% | 0.00% | 0.00% | — | → 0.99x | 0 | — | — | 4m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 99.58% | 99.86% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 99.58% | 99.71% | 99.97% | 99.97% | — | → 0.99x | 0 | — | — | 6m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 99.58% | 99.60% | 98.04% | 98.04% | — | → 1.04x | 0 | — | — | 6m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 99.58% | 99.77% | 96.10% | 96.10% | — | → 1.01x | 0 | — | — | 5m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.58% | 99.83% | 99.33% | 99.33% | — | ↓ 0.94x | 0 | — | — | 5m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 99.45% | 99.75% | 17.47% | 17.47% | — | → 1.01x | 0 | — | — | 40s ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 99.45% | 99.69% | 93.42% | 93.42% | — | → 1.00x | 0 | — | — | 2m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.44% | 99.63% | 99.98% | 99.98% | — | → 1.03x | 0 | — | — | 13m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.44% | 99.29% | 99.79% | 99.79% | — | → 0.98x | 0 | — | — | 12m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 99.44% | 91.61% | 27.04% | 27.04% | — | ↑ 1.21x | 0 | — | — | 9m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 99.44% | 99.68% | 98.11% | 98.11% | — | ↑ 1.15x | 0 | — | — | 7m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 99.44% | 99.43% | 98.16% | 98.16% | — | → 1.00x | 0 | — | — | 8m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 99.44% | 99.48% | 26.43% | 26.43% | — | ↓ 0.92x | 0 | — | — | 8m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.44% | 99.74% | 98.43% | 98.43% | — | ↑ 1.09x | 0 | — | — | 6m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 99.44% | 99.51% | 2.34% | 2.34% | — | ↓ 0.89x | 0 | — | — | 10m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.44% | 99.60% | 93.06% | 93.06% | — | ↑ 1.11x | 0 | — | — | 6m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 99.44% | 99.60% | 99.88% | 99.88% | — | → 1.03x | 0 | — | — | 9m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.44% | 99.71% | 91.09% | 91.09% | — | ↑ 1.50x | 0 | — | — | 9m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 99.44% | 99.74% | 99.35% | 99.35% | — | ↓ 0.87x | 0 | — | — | 9m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 99.44% | 99.74% | 96.88% | 96.88% | — | → 1.00x | 0 | — | — | 9m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 99.44% | 99.40% | 81.07% | 81.07% | — | → 0.99x | 0 | — | — | 9m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 99.44% | 84.96% | 46.51% | 46.51% | — | → 0.98x | 0 | — | — | 7m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 99.44% | 99.68% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 8m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.44% | 93.39% | 96.89% | 96.89% | — | ↓ 0.89x | 0 | — | — | 5m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 99.44% | 99.71% | 99.08% | 99.08% | — | → 1.04x | 0 | — | — | 5m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.44% | 99.65% | 99.95% | 99.95% | — | → 0.95x | 0 | — | — | 4m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.44% | 99.54% | 99.09% | 99.09% | — | ↓ 0.90x | 0 | — | — | 4m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 99.44% | 89.97% | 100.00% | 100.00% | — | → 0.96x | 0 | — | — | 3m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 99.44% | 99.68% | 99.67% | 99.67% | — | ↑ 1.10x | 0 | — | — | 3m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 99.44% | 99.83% | 99.85% | 99.85% | — | → 0.97x | 0 | — | — | 3m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 99.44% | 99.48% | — | — | — | → 1.05x | 0 | — | — | 3m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 99.44% | 99.77% | 99.92% | 99.92% | — | → 1.00x | 0 | — | — | 4m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 99.44% | 99.65% | 99.97% | 99.97% | — | ↓ 0.94x | 0 | — | — | 4m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 99.31% | 99.55% | 99.75% | 99.75% | — | → 1.00x | 0 | — | — | 1m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 99.31% | 99.15% | 51.42% | 51.42% | — | ↓ 0.81x | 0 | — | — | 20s ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 99.30% | 99.34% | 24.43% | 24.43% | — | ↓ 0.88x | 0 | — | — | 11m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 99.30% | 99.66% | 94.26% | 94.26% | — | → 1.04x | 0 | — | — | 9m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.30% | 99.31% | 98.96% | 98.96% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.30% | 95.10% | 96.18% | 96.18% | — | → 0.98x | 0 | — | — | 8m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.30% | 99.43% | 99.00% | 99.00% | — | → 0.98x | 0 | — | — | 8m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 99.30% | 99.40% | 32.93% | 32.93% | — | → 0.97x | 0 | — | — | 6m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.30% | 36.28% | 92.86% | 92.86% | — | ↓ 0.07x | 0 | — | — | 7m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 99.30% | 99.62% | 99.97% | 99.97% | — | ↓ 0.77x | 0 | — | — | 4m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 99.30% | 99.83% | 100.00% | 100.00% | — | ↑ 1.65x | 0 | — | — | 4m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 99.30% | 99.74% | 100.00% | 100.00% | — | ↓ 0.95x | 0 | — | — | 5m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.30% | 99.62% | 99.95% | 99.95% | — | ↑ 1.54x | 0 | — | — | 5m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.17% | 99.63% | 36.33% | 36.33% | — | → 0.99x | 0 | — | — | 2m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 99.16% | 99.66% | 99.58% | 99.58% | — | ↑ 1.08x | 0 | — | — | 14m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 99.16% | 99.69% | 100.00% | 100.00% | — | ↓ 0.73x | 0 | — | — | 14m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 99.16% | 99.23% | 38.65% | 38.65% | — | ↓ 0.94x | 0 | — | — | 13m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.16% | 92.71% | 69.98% | 69.98% | — | ↓ 0.62x | 0 | — | — | 13m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 99.16% | 99.17% | 97.28% | 97.28% | — | ↑ 1.16x | 0 | — | — | 12m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 99.16% | 99.69% | 99.68% | 99.68% | — | ↑ 1.06x | 0 | — | — | 12m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 99.16% | 99.52% | 85.28% | 85.28% | — | → 0.99x | 0 | — | — | 12m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.16% | 98.36% | 66.05% | 66.05% | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 99.16% | 99.49% | 62.65% | 62.65% | — | → 1.03x | 0 | — | — | 10m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 99.16% | 82.68% | 98.24% | 98.24% | — | ↓ 0.85x | 0 | — | — | 8m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 99.16% | 99.40% | 63.14% | 63.14% | — | → 0.95x | 0 | — | — | 10m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.16% | 99.51% | 99.76% | 99.76% | — | → 1.05x | 0 | — | — | 7m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 99.16% | 99.51% | 24.52% | 24.52% | — | ↑ 1.08x | 0 | — | — | 4m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 99.16% | 98.56% | 99.97% | 99.97% | — | → 1.01x | 0 | — | — | 4m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.03% | 99.63% | 99.73% | 99.73% | — | ↑ 1.11x | 0 | — | — | 15m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.02% | 99.66% | 56.98% | 56.98% | — | ↑ 1.21x | 0 | — | — | 13m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 99.02% | 99.66% | 5.16% | 5.16% | — | ↑ 1.57x | 0 | — | — | 11m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 99.02% | 99.54% | 97.21% | 97.21% | — | ↑ 1.06x | 0 | — | — | 8m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 99.02% | 99.46% | 97.90% | 97.90% | — | → 0.96x | 0 | — | — | 8m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.02% | 98.50% | 97.10% | 97.10% | — | ↑ 1.05x | 0 | — | — | 6m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 99.02% | 99.65% | 99.70% | 99.70% | — | → 0.96x | 0 | — | — | 5m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 99.02% | 34.51% | 99.95% | 99.95% | — | → 1.00x | 0 | — | — | 4m ago |
| [PollyAI](https://lmspeed.net/provider/pollyai) | 99.01% | 98.80% | — | — | — | → 1.04x | 0 | — | — | 3m ago |
| [YearnstudioAI](https://lmspeed.net/provider/yearnstudio) | 99.01% | 99.31% | — | — | — | → 1.02x | 0 | — | — | 3m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (68)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 98.89% | 98.98% | 99.85% | 99.85% | — | ↑ 1.10x | 0 | — | — | 1m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 98.88% | 99.29% | 0.11% | 0.11% | — | → 0.98x | 0 | — | — | 13m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 98.88% | 68.63% | 98.12% | 98.12% | — | ↓ 0.84x | 0 | — | — | 11m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 98.88% | 99.32% | 24.54% | 24.54% | — | ↑ 1.43x | 0 | — | — | 11m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 98.88% | 99.63% | 56.85% | 56.85% | — | → 1.04x | 0 | — | — | 8m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 98.87% | 99.19% | 100.00% | 100.00% | — | ↑ 1.19x | 0 | — | — | 4m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 98.74% | 99.43% | 98.94% | 98.94% | — | ↑ 1.44x | 0 | — | — | 14m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 98.74% | 99.69% | 65.57% | 65.57% | — | ↑ 1.24x | 0 | — | — | 10m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 98.74% | 98.82% | 77.59% | 77.59% | — | ↑ 1.08x | 0 | — | — | 8m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 98.74% | 99.31% | 99.83% | 99.83% | — | ↑ 1.11x | 0 | — | — | 8m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 98.74% | 99.57% | 82.26% | 82.26% | — | → 1.03x | 0 | — | — | 9m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 98.73% | 99.48% | 100.00% | 100.00% | — | ↑ 1.07x | 0 | — | — | 5m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 98.73% | 98.12% | 99.10% | 99.10% | — | → 1.03x | 0 | — | — | 5m ago |
| [APIArc](https://lmspeed.net/provider/apiarc) | 98.68% | 98.68% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 98.61% | 98.28% | 98.29% | 98.29% | — | → 0.98x | 0 | — | — | 1m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 98.60% | 99.57% | 80.20% | 80.20% | — | ↑ 1.10x | 0 | — | — | 12m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 98.59% | 96.84% | 99.88% | 99.88% | — | ↓ 0.95x | 0 | — | — | 3m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 98.59% | 99.48% | 39.41% | 39.41% | — | ↑ 1.16x | 0 | — | — | 4m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 98.59% | 97.29% | 99.85% | 99.85% | — | ↓ 0.87x | 0 | — | — | 5m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 98.32% | 98.61% | 97.94% | 97.94% | — | → 0.96x | 0 | — | — | 12m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 98.31% | 98.91% | 97.74% | 97.74% | — | → 1.04x | 0 | — | — | 7m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 98.31% | 98.88% | 97.48% | 97.48% | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 98.20% | 98.76% | 96.43% | 96.43% | — | ↓ 0.92x | 0 | — | — | 20s ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 98.06% | 99.10% | 0.00% | 0.00% | — | ↑ 1.53x | 0 | — | — | 1m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 98.04% | 98.95% | 99.76% | 99.76% | — | → 1.02x | 0 | — | — | 13m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 98.03% | 98.88% | 55.08% | 55.08% | — | ↑ 1.35x | 0 | — | — | 7m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 98.03% | 99.14% | 92.56% | 92.56% | — | ↑ 1.19x | 0 | — | — | 6m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 97.77% | 97.48% | 89.02% | 89.02% | — | ↓ 0.91x | 0 | — | — | 14m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 97.75% | 56.23% | 25.44% | 25.44% | — | ↓ 0.80x | 0 | — | — | 6m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 97.48% | 87.85% | 40.01% | 40.01% | — | ↓ 0.21x | 0 | — | — | 13m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 97.47% | 98.74% | 38.36% | 38.36% | — | ↑ 1.12x | 0 | — | — | 10m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 97.34% | 98.01% | 0.11% | 0.11% | — | ↑ 1.69x | 0 | — | — | 12m ago |
| [Profundo AI](https://lmspeed.net/provider/profundo-ai) | 97.32% | 84.74% | — | — | — | ↓ 0.47x | 0 | — | — | 3m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 96.91% | 99.05% | 83.10% | 83.10% | — | → 1.04x | 0 | — | — | 7m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 96.77% | 96.71% | 97.85% | 97.85% | — | → 0.98x | 0 | — | — | 5m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 96.48% | 98.64% | 99.48% | 99.48% | — | ↓ 0.31x | 0 | — | — | 3m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 95.51% | 98.73% | 99.86% | 99.86% | — | ↑ 1.06x | 0 | — | — | 6m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 92.83% | 96.90% | — | — | — | ↑ 1.25x | 0 | — | — | 3m ago |
| [OpenApi](https://lmspeed.net/provider/openrealm) | 87.04% | 87.21% | — | — | — | ↑ 1.13x | 0 | — | — | 3m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 85.81% | 96.93% | 29.98% | 29.98% | — | ↓ 0.91x | 0 | — | — | 7m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 85.73% | 96.98% | 22.94% | 22.94% | — | ↑ 1.07x | 0 | — | — | 13m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 85.67% | 17.47% | 22.07% | 22.07% | — | → 1.00x | 0 | — | — | 9m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 85.67% | 96.87% | 76.90% | 76.90% | — | ↑ 1.61x | 0 | — | — | 8m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 85.60% | 96.78% | 75.23% | 75.23% | — | ↑ 1.11x | 0 | — | — | 1m ago |
| [Groq](https://lmspeed.net/provider/groq) | 85.57% | 96.81% | 76.97% | 76.97% | — | → 0.96x | 0 | — | — | 12m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 85.53% | 96.85% | 69.43% | 69.43% | — | ↑ 1.51x | 0 | — | — | 9m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 85.25% | 96.82% | 43.48% | 43.48% | — | → 0.99x | 0 | — | — | 8m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 85.13% | 96.72% | 77.28% | 77.28% | — | ↑ 1.05x | 0 | — | — | 11m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 85.04% | 96.64% | 99.62% | 99.62% | — | → 1.02x | 0 | — | — | 40s ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 84.90% | 96.70% | 99.49% | 99.49% | — | ↑ 1.06x | 0 | — | — | 1m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 84.20% | 17.13% | 32.40% | 32.40% | — | → 1.00x | 0 | — | — | 13m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 78.79% | 79.96% | 83.85% | 83.85% | — | ↑ 1.31x | 0 | — | — | 8m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 78.39% | 81.24% | 67.23% | 67.23% | — | ↑ 1.43x | 0 | — | — | 1m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 78.09% | 71.26% | 83.18% | 83.18% | — | ↓ 0.18x | 0 | — | — | 9m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 75.73% | 77.49% | 99.92% | 99.92% | — | ↓ 0.93x | 0 | — | — | 20s ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 72.85% | 75.19% | 78.01% | 78.01% | — | → 1.02x | 0 | — | — | 2m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 72.13% | 14.66% | 63.31% | 63.31% | — | → 1.00x | 0 | — | — | 12m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 68.64% | 74.49% | 78.42% | 78.42% | — | ↑ 1.11x | 0 | — | — | 4m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 65.64% | 13.34% | 38.64% | 38.64% | — | → 1.00x | 0 | — | — | 11m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 59.28% | 72.64% | 99.93% | 99.93% | — | ↑ 2.15x | 0 | — | — | 20s ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 56.74% | 69.95% | 97.75% | 97.75% | — | ↑ 1.28x | 0 | — | — | 8m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 53.62% | 18.18% | 23.09% | 23.09% | — | ↑ 1.19x | 0 | — | — | 14m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 52.87% | 80.12% | 1.90% | 1.90% | — | ↑ 3.49x | 0 | — | — | 13m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 49.44% | 59.92% | 48.46% | 48.46% | — | ↑ 1.34x | 0 | — | — | 8m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 47.23% | 56.61% | 64.20% | 64.20% | — | ↑ 1.07x | 0 | — | — | 20s ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 45.80% | 60.54% | 98.45% | 98.45% | — | → 1.05x | 0 | — | — | 12m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 40.08% | 66.60% | 76.88% | 76.88% | — | ↑ 1.11x | 0 | — | — | 14m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 25.42% | 26.71% | 87.63% | 87.63% | — | → 1.00x | 0 | — | — | 9m ago |

</details>

<details open>
<summary><strong>🔴 Down (365)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Jasper](https://lmspeed.net/provider/jasper) | 100.00% | 99.62% | — | — | — | ↓ 0.22x | 0 | — | — | 3m ago |
| [QuartzRouter](https://lmspeed.net/provider/quartzrouter) | 100.00% | 99.92% | — | — | — | → 1.01x | 0 | — | — | 3m ago |
| [柚子的公益站](https://lmspeed.net/provider/provider-ai-bayunzi-shop) | 99.86% | 99.83% | — | — | — | → 0.96x | 0 | — | — | 3m ago |
| [DeadlySignal API](https://lmspeed.net/provider/deadlysignal) | 99.86% | 99.56% | — | — | — | ↑ 1.05x | 0 | — | — | 3m ago |
| [Openference](https://lmspeed.net/provider/openference) | 99.86% | 99.58% | — | — | — | ↑ 1.15x | 0 | — | — | 3m ago |
| [Yomi API](https://lmspeed.net/provider/yomi-api) | 99.86% | 99.75% | — | — | — | ↑ 1.08x | 0 | — | — | 3m ago |
| [TokenGo](https://lmspeed.net/provider/thorbase) | 99.58% | 99.40% | 98.95% | 98.95% | — | ↓ 0.95x | 0 | — | — | 6m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 99.58% | 99.62% | 99.94% | 99.94% | — | → 1.03x | 0 | — | — | 4m ago |
| [AI Fujcloud](https://lmspeed.net/provider/ai-fujcloud) | 99.58% | 99.78% | — | — | — | → 1.01x | 0 | — | — | 3m ago |
| [iTokens](https://lmspeed.net/provider/itokens) | 99.58% | 99.16% | — | — | — | → 0.98x | 0 | — | — | 3m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 99.44% | 99.71% | 100.00% | 100.00% | — | ↑ 1.28x | 0 | — | — | 3m ago |
| [清风阁API](https://lmspeed.net/provider/qfg996) | 99.44% | 99.56% | — | — | — | ↓ 0.93x | 0 | — | — | 3m ago |
| [XIMI-API](https://lmspeed.net/provider/ximi-api) | 99.44% | 99.65% | — | — | — | ↑ 1.15x | 0 | — | — | 3m ago |
| [TanAPI](https://lmspeed.net/provider/tanapi) | 99.30% | 99.65% | — | — | — | ↑ 1.15x | 0 | — | — | 3m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 99.16% | 99.43% | 66.42% | 66.42% | — | ↓ 0.95x | 0 | — | — | 10m ago |
| [Vyce Ai](https://lmspeed.net/provider/vyce-ai) | 99.15% | 91.91% | — | — | — | ↓ 0.23x | 0 | — | — | 3m ago |
| [绿API](https://lmspeed.net/provider/lvapi-vip) | 98.59% | 98.47% | — | — | — | ↑ 1.19x | 0 | — | — | 2m ago |
| [S1AI API](https://lmspeed.net/provider/s1ai-api) | 97.98% | 97.98% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [辉哥公益站](https://lmspeed.net/provider/ccwucc) | 97.46% | 94.46% | — | — | — | ↑ 1.21x | 0 | — | — | 3m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 97.33% | 97.63% | 98.75% | 98.75% | — | ↑ 1.68x | 0 | — | — | 5m ago |
| [S3AI API](https://lmspeed.net/provider/s3ai-api) | 96.48% | 98.35% | — | — | — | ↑ 1.56x | 0 | — | — | 3m ago |
| [JembatanAI](https://lmspeed.net/provider/jembatanai) | 92.39% | 92.01% | — | — | — | → 1.00x | 0 | — | — | 2m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 82.28% | 95.95% | 96.14% | 96.14% | — | ↑ 1.10x | 0 | — | — | 4m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 79.32% | 95.62% | 99.67% | 99.67% | — | ↓ 0.88x | 0 | — | — | 5m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 75.76% | 79.02% | 54.05% | 54.05% | — | ↑ 1.25x | 0 | — | — | 1m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 70.22% | 26.90% | 26.68% | 26.68% | — | → 1.02x | 0 | — | — | 10m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 66.62% | 71.14% | 94.11% | 94.11% | — | → 1.01x | 0 | — | — | 1m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 58.93% | 49.49% | 6.48% | 6.48% | — | ↑ 1.47x | 0 | — | — | 4m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 58.59% | 65.27% | 75.11% | 75.11% | — | ↑ 1.18x | 0 | — | — | 1m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 57.34% | 64.96% | 98.89% | 98.89% | — | ↑ 1.51x | 0 | — | — | 1m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 56.60% | 66.20% | 87.06% | 87.06% | — | ↑ 1.09x | 0 | — | — | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 53.19% | 63.26% | 66.07% | 66.07% | — | ↑ 1.22x | 0 | — | — | 1m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 52.31% | 64.22% | 86.29% | 86.29% | — | ↑ 1.34x | 0 | — | — | 13m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 51.83% | 63.88% | 10.72% | 10.72% | — | ↑ 1.59x | 0 | — | — | 8m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 50.35% | 21.84% | — | — | — | → 1.00x | 0 | — | — | 3m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 49.93% | 53.33% | 98.53% | 98.53% | — | → 0.97x | 0 | — | — | 4m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 49.51% | 59.67% | 99.78% | 99.78% | — | ↑ 1.39x | 0 | — | — | 15m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 48.60% | 56.39% | 96.79% | 96.79% | — | ↑ 1.30x | 0 | — | — | 10m ago |
| [共绩算力（算了么 API）](https://lmspeed.net/provider/api-suanli-cn) | 48.34% | 56.13% | 68.41% | 68.41% | — | → 0.98x | 0 | — | — | 1m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 48.20% | 56.24% | 50.52% | 50.52% | — | → 0.99x | 0 | — | — | 1m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 48.03% | 57.80% | 44.62% | 44.62% | — | ↓ 0.91x | 0 | — | — | 8m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 47.51% | 56.30% | 86.23% | 86.23% | — | ↑ 1.10x | 0 | — | — | 20s ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 47.37% | 55.06% | 98.92% | 98.92% | — | ↑ 1.24x | 0 | — | — | 1m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 45.71% | 54.80% | 99.77% | 99.77% | — | ↑ 1.51x | 0 | — | — | 20s ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 45.59% | 55.62% | 63.15% | 63.15% | — | → 0.97x | 0 | — | — | 13m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 45.34% | 56.87% | 75.72% | 75.72% | — | ↑ 1.13x | 0 | — | — | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 44.96% | 56.93% | 99.65% | 99.65% | — | ↑ 1.08x | 0 | — | — | 12m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 43.68% | 53.24% | 93.16% | 93.16% | — | → 0.98x | 0 | — | — | 8m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 43.33% | 52.61% | 99.09% | 99.09% | — | ↑ 1.33x | 0 | — | — | 15m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 42.68% | 54.51% | 96.32% | 96.32% | — | → 0.95x | 0 | — | — | 14m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 42.58% | 57.41% | 68.13% | 68.13% | — | ↑ 1.09x | 0 | — | — | 11m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 41.29% | 54.38% | 85.02% | 85.02% | — | ↑ 1.29x | 0 | — | — | 7m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 40.86% | 49.08% | 91.98% | 91.98% | — | → 0.99x | 0 | — | — | 1m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 40.56% | 53.77% | 54.78% | 54.78% | — | → 0.95x | 0 | — | — | 13m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 39.94% | 34.06% | 20.58% | 20.58% | — | → 1.00x | 0 | — | — | 5m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 39.38% | 48.61% | 100.00% | 100.00% | — | → 1.02x | 0 | — | — | 4m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 37.83% | 8.29% | 100.00% | 100.00% | — | → 1.01x | 0 | — | — | 3m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 36.71% | 27.00% | 7.76% | 7.76% | — | → 1.05x | 0 | — | — | 6m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 35.56% | 51.09% | 98.87% | 98.87% | — | ↑ 1.10x | 0 | — | — | 14m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 35.25% | 48.32% | 69.01% | 69.01% | — | → 0.96x | 0 | — | — | 9m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 33.61% | 84.72% | 97.57% | 97.57% | — | ↓ 0.45x | 0 | — | — | 14m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 32.91% | 49.15% | 98.37% | 98.37% | — | → 1.03x | 0 | — | — | 3m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 28.27% | 36.25% | 99.06% | 99.06% | — | → 1.00x | 0 | — | — | 3m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 27.98% | 38.26% | 52.45% | 52.45% | — | ↓ 0.95x | 0 | — | — | 1m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 27.57% | 84.55% | 96.87% | 96.87% | — | ↓ 0.84x | 0 | — | — | 4m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 24.75% | 10.52% | — | — | — | ↑ 1.18x | 0 | — | — | 3m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 24.34% | 84.41% | 99.87% | 99.87% | — | ↓ 0.88x | 0 | — | — | 13m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 21.42% | 40.25% | 93.77% | 93.77% | — | ↑ 1.36x | 0 | — | — | 15m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 21.35% | 53.00% | 88.70% | 88.70% | — | ↑ 1.37x | 0 | — | — | 7m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 20.22% | 83.53% | 43.99% | 43.99% | — | → 1.01x | 0 | — | — | 7m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 20.11% | 39.11% | 99.85% | 99.85% | — | → 0.96x | 0 | — | — | 3m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 0.42% | 20.32% | 44.99% | 44.99% | — | ↑ 11.63x | 0 | — | — | 9m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 0.14% | 0.20% | 34.65% | 34.65% | — | ↓ 0.91x | 0 | — | — | 9m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 0.00% | 0.00% | 59.84% | 59.84% | — | — | 0 | — | — | 8m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 70.78% | 70.78% | — | — | 0 | — | — | 8m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 52.44% | 52.44% | — | — | 0 | — | — | 8m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.20% | 5.20% | — | — | 0 | — | — | 10m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 0.00% | 24.80% | 99.61% | 99.61% | — | — | 0 | — | — | 1m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 10.24% | 10.24% | — | — | 0 | — | — | 2m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 0.00% | 0.00% | 88.73% | 88.73% | — | — | 0 | — | — | 5m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 0.00% | 0.00% | 99.82% | 99.82% | — | — | 0 | — | — | 5m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 47.31% | 47.31% | — | — | 0 | — | — | 7m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 0.00% | 73.96% | 73.96% | — | — | 0 | — | — | 4m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 0.00% | 0.00% | 74.22% | 74.22% | — | — | 0 | — | — | 12m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.13% | 3.13% | — | — | 0 | — | — | 13m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 0.00% | 49.27% | 95.25% | 95.25% | — | — | 0 | — | — | 6m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 0.00% | 79.86% | 79.86% | — | — | 0 | — | — | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 22.40% | 64.61% | 64.61% | — | — | 0 | — | — | 7m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 0.00% | 0.00% | 40.15% | 40.15% | — | — | 0 | — | — | 12m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 48.75% | 76.64% | 76.64% | — | — | 0 | — | — | 13m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 33.64% | 33.64% | — | — | 0 | — | — | 13m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 4m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 0.00% | 0.00% | 99.65% | 99.65% | — | — | 0 | — | — | 4m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 0.00% | 0.00% | 90.14% | 90.14% | — | — | 0 | — | — | 6m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 0.00% | 0.00% | 85.33% | 85.33% | — | — | 0 | — | — | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 83.66% | 83.66% | — | — | 0 | — | — | 1m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 10m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.09% | 21.09% | — | — | 0 | — | — | 9m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 0.00% | 84.65% | 84.65% | — | — | 0 | — | — | 20s ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 75.27% | 75.27% | — | — | 0 | — | — | 1m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 57.88% | 57.88% | — | — | 0 | — | — | 14m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 20s ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 70.96% | 70.96% | — | — | 0 | — | — | 20s ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 0.00% | 0.00% | 19.82% | 19.82% | — | — | 0 | — | — | 12m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 0.00% | 0.00% | 83.11% | 83.11% | — | — | 0 | — | — | 6m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.15% | 13.15% | — | — | 0 | — | — | 8m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 44.49% | 44.49% | — | — | 0 | — | — | 9m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 87.39% | 87.39% | — | — | 0 | — | — | 13m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 0 | — | — | 9m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 0.00% | 0.00% | 99.75% | 99.75% | — | — | 0 | — | — | 3m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 0.00% | 68.70% | 68.70% | — | — | 0 | — | — | 4m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.14% | 78.14% | — | — | 0 | — | — | 11m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 0.00% | 0.00% | 98.15% | 98.15% | — | — | 0 | — | — | 13m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 0.00% | 78.64% | 78.64% | — | — | 0 | — | — | 7m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 0.00% | 22.47% | 99.93% | 99.93% | — | — | 0 | — | — | 3m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.12% | 3.12% | — | — | 0 | — | — | 9m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 0.00% | 76.21% | 76.21% | — | — | 0 | — | — | 4m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 0.00% | 72.40% | 72.40% | — | — | 0 | — | — | 4m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.00% | 0.00% | 48.90% | 48.90% | — | — | 0 | — | — | 13m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 0.00% | 0.00% | 90.67% | 90.67% | — | — | 0 | — | — | 3m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 44.63% | 47.85% | 47.85% | — | — | 0 | — | — | 13m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 0.00% | 31.88% | 31.88% | — | — | 0 | — | — | 9m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 0.00% | 0.00% | 99.73% | 99.73% | — | — | 0 | — | — | 5m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 84.44% | 84.44% | — | — | 0 | — | — | 13m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 0.00% | 32.34% | 32.34% | — | — | 0 | — | — | 4m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 64.69% | 64.69% | — | — | 0 | — | — | 7m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 0.00% | 0.00% | 46.41% | 46.41% | — | — | 0 | — | — | 9m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 0.00% | 0.00% | 50.25% | 50.25% | — | — | 0 | — | — | 13m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 0.00% | 0.00% | 96.06% | 96.06% | — | — | 0 | — | — | 13m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 0.00% | 69.29% | 69.29% | — | — | 0 | — | — | 6m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 0.00% | 39.40% | 39.40% | — | — | 0 | — | — | 4m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 0.00% | 64.35% | 64.35% | — | — | 0 | — | — | 9m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 26.33% | 26.33% | — | — | 0 | — | — | 7m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 0.00% | 0.00% | 98.70% | 98.70% | — | — | 0 | — | — | 4m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 0.00% | 1.91% | 97.23% | 97.23% | — | — | 0 | — | — | 3m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 50.43% | 50.43% | — | — | 0 | — | — | 13m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 0.00% | 0.00% | 75.41% | 75.41% | — | — | 0 | — | — | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 0.00% | 0.00% | 98.37% | 98.37% | — | — | 0 | — | — | 8m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 0.00% | 0.00% | 32.48% | 32.48% | — | — | 0 | — | — | 10m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 3m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 4m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 0.00% | 48.30% | 48.30% | — | — | 0 | — | — | 6m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 0.00% | 36.79% | 91.43% | 91.43% | — | — | 0 | — | — | 3m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 46.73% | 46.73% | — | — | 0 | — | — | 2m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.32% | 21.32% | — | — | 0 | — | — | 8m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 20s ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.63% | 4.63% | — | — | 0 | — | — | 8m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 60.67% | 60.67% | — | — | 0 | — | — | 14m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 0.00% | 0.00% | 99.92% | 99.92% | — | — | 0 | — | — | 4m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 0.00% | 68.44% | 68.44% | — | — | 0 | — | — | 6m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 0.00% | 0.00% | 98.40% | 98.40% | — | — | 0 | — | — | 4m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 0.00% | 0.00% | 99.74% | 99.74% | — | — | 0 | — | — | 1m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 42s ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.52% | 5.52% | — | — | 0 | — | — | 7m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 0.00% | 0.00% | 81.13% | 81.13% | — | — | 0 | — | — | 8m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 73.53% | 73.53% | — | — | 0 | — | — | 11m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 74.18% | 74.18% | — | — | 0 | — | — | 1m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 0.00% | 0.00% | 99.84% | 99.84% | — | — | 0 | — | — | 40s ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 0.00% | 78.95% | 100.00% | 100.00% | — | — | 0 | — | — | 4m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 0.00% | 0.00% | 99.89% | 99.89% | — | — | 0 | — | — | 4m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 0.00% | 83.98% | 83.98% | — | — | 0 | — | — | 8m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 20.14% | 20.14% | — | — | 0 | — | — | 7m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 0.00% | 59.26% | 99.94% | 99.94% | — | — | 0 | — | — | 3m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 48.81% | 48.81% | — | — | 0 | — | — | 13m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 0 | — | — | 15m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 0.00% | 67.73% | 67.73% | — | — | 0 | — | — | 6m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 0.00% | 0.00% | 83.84% | 83.84% | — | — | 0 | — | — | 5m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 0.00% | 74.74% | 74.74% | — | — | 0 | — | — | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 47.90% | 47.90% | — | — | 0 | — | — | 8m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 0.00% | 0.00% | 99.25% | 99.25% | — | — | 0 | — | — | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 12.42% | 6.05% | 6.05% | — | — | 0 | — | — | 6m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 0.00% | 0.00% | 91.99% | 91.99% | — | — | 0 | — | — | 6m ago |
| [Crond](https://lmspeed.net/provider/crond) | 0.00% | 0.00% | 22.80% | 22.80% | — | — | 0 | — | — | 12m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 0.00% | 0.00% | 98.05% | 98.05% | — | — | 0 | — | — | 4m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 55.75% | 55.75% | — | — | 0 | — | — | 7m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 4m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.20% | 43.20% | — | — | 0 | — | — | 12m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 2m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 0.00% | 16.44% | 16.44% | — | — | 0 | — | — | 5m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.16% | 39.16% | — | — | 0 | — | — | 14m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 0.00% | 74.31% | 74.31% | — | — | 0 | — | — | 1m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 20.55% | 20.55% | — | — | 0 | — | — | 4m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 8m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 54.39% | 54.39% | — | — | 0 | — | — | 12m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 0.00% | 75.74% | 75.74% | — | — | 0 | — | — | 5m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 35.55% | 35.55% | — | — | 0 | — | — | 42s ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 15m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 0.00% | 65.91% | 65.91% | — | — | 0 | — | — | 8m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 0.00% | 0.00% | 99.94% | 99.94% | — | — | 0 | — | — | 5m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 70.74% | 70.74% | — | — | 0 | — | — | 8m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 0.00% | 0.00% | 34.00% | 34.00% | — | — | 0 | — | — | 13m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 62.39% | 62.39% | — | — | 0 | — | — | 7m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 0.00% | 0.00% | 45.59% | 45.59% | — | — | 0 | — | — | 1m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 76.99% | 76.99% | — | — | 0 | — | — | 14m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 0.00% | 0.00% | 22.32% | 22.32% | — | — | 0 | — | — | 15m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 0.00% | 90.53% | 90.53% | — | — | 0 | — | — | 12m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 0.00% | 0.00% | 91.04% | 91.04% | — | — | 0 | — | — | 5m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 42.69% | 42.69% | — | — | 0 | — | — | 6m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 39.95% | 39.95% | — | — | 0 | — | — | 9m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 0.00% | 17.21% | 84.75% | 84.75% | — | — | 0 | — | — | 6m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.20% | 0.10% | 0.10% | — | — | 0 | — | — | 12m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 0.00% | 0.00% | 99.29% | 99.29% | — | — | 0 | — | — | 3m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 24.01% | 24.01% | — | — | 0 | — | — | 6m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 0.00% | 36.65% | 89.73% | 89.73% | — | — | 0 | — | — | 14m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 7m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 0.00% | 0.00% | 81.34% | 81.34% | — | — | 0 | — | — | 1m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 0.00% | 78.12% | 89.89% | 89.89% | — | — | 0 | — | — | 5m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 73.32% | 73.32% | — | — | 0 | — | — | 12m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.87% | 2.87% | — | — | 0 | — | — | 9m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 0.00% | 0.00% | 49.45% | 49.45% | — | — | 0 | — | — | 8m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 39.57% | 39.57% | — | — | 0 | — | — | 40s ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 0.00% | 0.00% | 20.82% | 20.82% | — | — | 0 | — | — | 12m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 0.00% | 0.00% | 100.00% | 100.00% | — | — | 0 | — | — | 3m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 33.55% | 33.55% | — | — | 0 | — | — | 6m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 52.99% | 52.99% | — | — | 0 | — | — | 7m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 82.46% | 82.46% | — | — | 0 | — | — | 13m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 0.00% | 0.00% | 99.80% | 99.80% | — | — | 0 | — | — | 14m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 0.00% | 92.62% | 92.62% | — | — | 0 | — | — | 40s ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 23.25% | 23.25% | — | — | 0 | — | — | 2m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 0.00% | 0.00% | 27.77% | 27.77% | — | — | 0 | — | — | 9m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 0.00% | 0.00% | 86.17% | 86.17% | — | — | 0 | — | — | 14m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 4m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 0.00% | 20.23% | 99.89% | 99.89% | — | — | 0 | — | — | 4m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 10m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 49.10% | 49.10% | — | — | 0 | — | — | 13m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 86.30% | 86.30% | — | — | 0 | — | — | 40s ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 0.00% | 65.33% | 99.94% | 99.94% | — | — | 0 | — | — | 5m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 65.07% | 65.07% | — | — | 0 | — | — | 7m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 0.00% | 0.00% | 99.12% | 99.12% | — | — | 0 | — | — | 13m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 0.00% | 0.00% | 92.19% | 92.19% | — | — | 0 | — | — | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 40s ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.23% | 16.23% | — | — | 0 | — | — | 12m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 45.98% | 45.98% | — | — | 0 | — | — | 13m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 0.00% | 0.00% | 92.63% | 92.63% | — | — | 0 | — | — | 8m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 0.00% | 0.00% | 98.92% | 98.92% | — | — | 0 | — | — | 5m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 0.00% | 46.05% | 46.05% | — | — | 0 | — | — | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 0.00% | 36.97% | 86.83% | 86.83% | — | — | 0 | — | — | 10m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 16.77% | 16.77% | — | — | 0 | — | — | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 0.00% | 2.05% | 98.59% | 98.59% | — | — | 0 | — | — | 5m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 51.26% | 51.26% | — | — | 0 | — | — | 12m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 35.56% | 35.56% | — | — | 0 | — | — | 10m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 19.49% | 19.49% | — | — | 0 | — | — | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 0.00% | 0.00% | 99.81% | 99.81% | — | — | 0 | — | — | 4m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 72.39% | 72.39% | — | — | 0 | — | — | 9m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 83.68% | 83.68% | — | — | 0 | — | — | 14m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 46.80% | 46.80% | — | — | 0 | — | — | 4m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 1m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 75.88% | 75.88% | — | — | 0 | — | — | 14m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 11m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 0.00% | 0.00% | 22.72% | 22.72% | — | — | 0 | — | — | 10m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 68.72% | 68.72% | — | — | 0 | — | — | 35s ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.10% | 18.10% | — | — | 0 | — | — | 10m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 54.28% | 54.28% | — | — | 0 | — | — | 1m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 35.49% | 35.49% | — | — | 0 | — | — | 7m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.84% | 3.84% | — | — | 0 | — | — | 13m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 63.55% | 63.55% | — | — | 0 | — | — | 14m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 0.00% | 0.00% | 23.11% | 23.11% | — | — | 0 | — | — | 14m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 0.00% | 0.00% | 99.60% | 99.60% | — | — | 0 | — | — | 5m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 22.23% | 22.23% | — | — | 0 | — | — | 8m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 0.00% | 17.18% | 100.00% | 100.00% | — | — | 0 | — | — | 5m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.70% | 6.70% | — | — | 0 | — | — | 9m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 22.60% | 22.60% | — | — | 0 | — | — | 4m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 10m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 62.64% | 62.64% | — | — | 0 | — | — | 20s ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 30.92% | 30.92% | — | — | 0 | — | — | 6m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 0.00% | 68.76% | 68.76% | — | — | 0 | — | — | 5m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 3.80% | 3.80% | — | — | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 44.20% | 44.20% | — | — | 0 | — | — | 6m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 38.02% | 38.02% | — | — | 0 | — | — | 5m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 17.16% | 17.16% | — | — | 0 | — | — | 6m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.15% | 10.15% | — | — | 0 | — | — | 8m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 3m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 0.00% | 0.00% | 23.40% | 23.40% | — | — | 0 | — | — | 10m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 0.00% | 29.24% | 82.00% | 82.00% | — | — | 0 | — | — | 3m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 0.00% | 0.00% | 99.53% | 99.53% | — | — | 0 | — | — | 1m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.69% | 16.69% | — | — | 0 | — | — | 12m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 0.00% | 0.00% | 21.71% | 21.71% | — | — | 0 | — | — | 13m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 14m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 14.75% | 14.75% | — | — | 0 | — | — | 7m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 25.49% | 25.49% | — | — | 0 | — | — | 5m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 8.99% | 8.99% | — | — | 0 | — | — | 9m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 0.00% | 45.16% | 98.78% | 98.78% | — | — | 0 | — | — | 14m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 0 | — | — | 6m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 0.00% | 41.26% | 98.12% | 98.12% | — | — | 0 | — | — | 7m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.55% | 4.55% | — | — | 0 | — | — | 6m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 46.30% | 46.30% | — | — | 0 | — | — | 14m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 0.00% | 18.69% | 99.88% | 99.88% | — | — | 0 | — | — | 4m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 0.00% | 0.00% | 76.63% | 76.63% | — | — | 0 | — | — | 3m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 0.00% | 0.00% | 32.96% | 32.96% | — | — | 0 | — | — | 13m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 36.28% | 36.28% | — | — | 0 | — | — | 5m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 0.00% | 0.00% | 98.48% | 98.48% | — | — | 0 | — | — | 8m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 63.49% | 63.49% | — | — | 0 | — | — | 7m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 40.17% | 40.17% | — | — | 0 | — | — | 8m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 0.00% | 15.96% | 89.40% | 89.40% | — | — | 0 | — | — | 9m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 77.23% | 77.23% | — | — | 0 | — | — | 12m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 0.00% | 26.41% | 17.31% | 17.31% | — | — | 0 | — | — | 13m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 43.61% | 43.61% | — | — | 0 | — | — | 6m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 0 | — | — | 12m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 0.00% | 37.81% | 24.63% | 24.63% | — | — | 0 | — | — | 11m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 0.00% | 0.00% | 22.68% | 22.68% | — | — | 0 | — | — | 11m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 0.00% | 0.00% | 60.97% | 60.97% | — | — | 0 | — | — | 7m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 12m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 38.37% | 38.37% | — | — | 0 | — | — | 14m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.35% | 1.35% | — | — | 0 | — | — | 6m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 17.59% | 17.59% | — | — | 0 | — | — | 9m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 0.00% | 41.25% | 99.78% | 99.78% | — | — | 0 | — | — | 8m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 0.00% | 0.00% | 91.72% | 91.72% | — | — | 0 | — | — | 9m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 0.00% | 0.00% | 99.77% | 99.77% | — | — | 0 | — | — | 4m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 0.00% | 0.00% | 99.17% | 99.17% | — | — | 0 | — | — | 20s ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 13m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 0 | — | — | 5m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 25.78% | 75.15% | 75.15% | — | — | 0 | — | — | 11m ago |

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
