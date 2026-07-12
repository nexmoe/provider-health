# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**689 providers** — 1 🟢 operational · 386 🟡 degraded · 300 🔴 down · 2 ⚫ unknown

_Updated 2026-07-12 06:07 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (1)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [UU API](https://lmspeed.net/provider/uuapi-net) | 100.00% | 100.00% | — | — | — | → 1.00x | 0 | — | — | 5m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (386)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 97.96% | 97.96% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 97.67% | 97.67% | — | — | — | → 1.00x | 0 | — | — | 4m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 94.83% | 94.83% | 76.22% | 76.22% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 94.83% | 94.83% | 97.57% | 97.57% | 2740 ms | → 1.00x | 0 | — | — | 7m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 94.83% | 94.83% | 99.61% | 99.61% | 3124 ms | → 1.00x | 0 | — | — | 8m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 94.83% | 94.83% | 98.92% | 98.92% | 1332 ms | → 1.00x | 0 | — | — | 7m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 94.83% | 94.83% | 99.98% | 99.98% | 366 ms | → 1.00x | 1 | 0s | 20d ago | 7m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 94.83% | 94.83% | 99.76% | 99.76% | 3446 ms | → 1.00x | 1 | 0s | 20d ago | 7m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 94.83% | 94.83% | 99.02% | 99.02% | 3966 ms | → 1.00x | 5 | 0s | 13d ago | 7m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 94.83% | 94.83% | 47.85% | 47.85% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 94.83% | 94.83% | 1.90% | 1.90% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 94.83% | 94.83% | 56.98% | 56.98% | 1318 ms | → 1.00x | 7 | 0s | 18d ago | 7m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 94.83% | 94.83% | 38.65% | 38.65% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 94.83% | 94.83% | 0.11% | 0.11% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 94.83% | 94.83% | 99.09% | 99.09% | 2210 ms | → 1.00x | 0 | — | — | 7m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 94.83% | 94.83% | 99.49% | 99.49% | 3218 ms | → 1.00x | 3 | 9h 27m | 15d ago | 8m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 94.83% | 94.83% | 75.23% | 75.23% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 94.83% | 94.83% | 99.65% | 99.65% | 1568 ms | → 1.00x | 0 | — | — | 7m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 94.83% | 94.83% | 99.98% | 99.98% | 826 ms | → 1.00x | 1 | 4m | 9d ago | 8m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 94.83% | 94.83% | 99.94% | 99.94% | 726 ms | → 1.00x | 0 | — | — | 7m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 94.83% | 94.83% | 99.74% | 99.74% | 2350 ms | → 1.00x | 2 | 0s | 19d ago | 7m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 94.83% | 94.83% | 99.75% | 99.75% | 374 ms | → 1.00x | 0 | — | — | 8m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 94.83% | 94.83% | 98.00% | 98.00% | 1267 ms | → 1.00x | 0 | — | — | 7m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 94.83% | 94.83% | 99.96% | 99.96% | 987 ms | → 1.00x | 0 | — | — | 7m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 94.83% | 94.83% | 99.73% | 99.73% | 298 ms | → 1.00x | 10 | 10m | 19d ago | 7m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.83% | 94.83% | 99.74% | 99.74% | 1643 ms | → 1.00x | 6 | 1h 5m | 4d ago | 7m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 94.83% | 94.83% | 99.65% | 99.65% | 521 ms | → 1.00x | 0 | — | — | 7m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 94.83% | 94.83% | 17.47% | 17.47% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 94.83% | 94.83% | 99.78% | 99.78% | 2370 ms | → 1.00x | 0 | — | — | 7m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 94.83% | 94.83% | 99.92% | 99.92% | 1011 ms | → 1.00x | 0 | — | — | 7m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 94.83% | 94.83% | 70.89% | 70.89% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 94.83% | 94.83% | 99.80% | 99.80% | 1461 ms | → 1.00x | 0 | — | — | 7m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 94.83% | 94.83% | 22.33% | 22.33% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 94.83% | 94.83% | 99.91% | 99.91% | 1875 ms | → 1.00x | 0 | — | — | 7m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 94.83% | 94.83% | 99.56% | 99.56% | 3208 ms | → 1.00x | 1 | 0s | 27d ago | 7m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 94.83% | 94.83% | 99.97% | 99.97% | 1856 ms | → 1.00x | 0 | — | — | 7m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 94.83% | 94.83% | 76.88% | 76.88% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 94.83% | 94.83% | 99.58% | 99.58% | 2538 ms | → 1.00x | 19 | 2m | 6d ago | 7m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 94.83% | 94.83% | 44.95% | 44.95% | 269 ms | → 1.00x | 0 | — | — | 7m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 94.83% | 94.83% | 98.94% | 98.94% | 1069 ms | → 1.00x | 1 | 0s | 10d ago | 7m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 94.83% | 94.83% | 95.68% | 95.68% | 2668 ms | → 1.00x | 2 | 4d 7h | 20d ago | 8m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 94.83% | 94.83% | 99.58% | 99.58% | 1274 ms | → 1.00x | 1 | 2h | 4d ago | 7m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 94.83% | 94.83% | 49.74% | 49.74% | 1391 ms | → 1.00x | 6 | 35m | 13d ago | 7m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 94.83% | 94.83% | 99.60% | 99.60% | 2236 ms | → 1.00x | 1 | 2s | 5d ago | 8m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 94.83% | 94.83% | 99.49% | 99.49% | 860 ms | → 1.00x | 0 | — | — | 7m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 94.83% | 94.83% | 99.98% | 99.98% | 941 ms | → 1.00x | 1 | 4m | 9d ago | 8m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 94.83% | 94.83% | 51.42% | 51.42% | 3101 ms | → 1.00x | 9 | 31m | 8d ago | 7m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 94.83% | 94.83% | 96.43% | 96.43% | 2053 ms | → 1.00x | 3 | 1d 4h | 3d ago | 7m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 94.83% | 94.83% | 99.81% | 99.81% | 1250 ms | → 1.00x | 0 | — | — | 7m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 94.83% | 94.83% | 99.87% | 99.87% | 2378 ms | → 1.00x | 2 | 0s | 11d ago | 7m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 94.83% | 94.83% | 99.84% | 99.84% | 722 ms | → 1.00x | 0 | — | — | 7m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 94.83% | 94.83% | 93.42% | 93.42% | 3364 ms | → 1.00x | 2 | 6m | 9d ago | 8m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 94.83% | 94.83% | 98.78% | 98.78% | 1866 ms | → 1.00x | 1 | 0s | 5d ago | 7m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 94.83% | 94.83% | 76.89% | 76.89% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 94.83% | 94.83% | 99.92% | 99.92% | 1342 ms | → 1.00x | 1 | 0s | 5d ago | 7m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 94.83% | 94.83% | 99.87% | 99.87% | 1586 ms | → 1.00x | 1 | 0s | 5d ago | 7m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 94.83% | 94.83% | 99.85% | 99.85% | 1746 ms | → 1.00x | 2 | 0s | 4d ago | 7m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 94.83% | 94.83% | 99.92% | 99.92% | 1032 ms | → 1.00x | 1 | 0s | 4d ago | 7m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 94.83% | 94.83% | 99.62% | 99.62% | 1852 ms | → 1.00x | 2 | 1h 60m | 5d ago | 7m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 94.83% | 94.83% | 100.00% | 100.00% | 985 ms | → 1.00x | 0 | — | — | 7m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 94.74% | 94.74% | 22.94% | 22.94% | 1152 ms | → 1.00x | 1 | 0s | 19d ago | 7m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 94.64% | 94.64% | 24.43% | 24.43% | 3276 ms | → 1.00x | 0 | — | — | 6m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 94.64% | 94.64% | 97.94% | 97.94% | 2183 ms | → 1.00x | 2 | 30m | 8d ago | 7m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 94.64% | 94.64% | 80.20% | 80.20% | 1366 ms | → 1.00x | 4 | 0s | 5d ago | 7m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 94.64% | 94.64% | 99.85% | 99.85% | 2926 ms | → 1.00x | 0 | — | — | 7m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 94.64% | 94.64% | 22.30% | 22.30% | 3066 ms | → 1.00x | 21 | 0s | 5d ago | 7m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 94.64% | 94.64% | 77.28% | 77.28% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 94.64% | 94.64% | 97.57% | 97.57% | 1938 ms | → 1.00x | 7 | 0s | 6d ago | 7m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 94.64% | 94.64% | 57.00% | 57.00% | 716 ms | → 1.00x | 0 | — | — | 6m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 94.64% | 94.64% | 99.65% | 99.65% | 2621 ms | → 1.00x | 0 | — | — | 7m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 94.64% | 94.64% | 99.34% | 99.34% | 2242 ms | → 1.00x | 3 | 8h 57m | 27d ago | 7m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 94.64% | 94.64% | 99.03% | 99.03% | 2522 ms | → 1.00x | 0 | — | — | 6m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 94.64% | 94.64% | 26.84% | 26.84% | 1642 ms | → 1.00x | 0 | — | — | 6m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 94.64% | 94.64% | 99.77% | 99.77% | 1344 ms | → 1.00x | 0 | — | — | 7m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 94.64% | 94.64% | 98.93% | 98.93% | 1442 ms | → 1.00x | 8 | 10m | 9d ago | 7m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 94.64% | 94.64% | 99.68% | 99.68% | 2154 ms | → 1.00x | 0 | — | — | 7m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 94.64% | 94.64% | 99.37% | 99.37% | 1742 ms | → 1.00x | 0 | — | — | 7m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 94.64% | 94.64% | 99.48% | 99.48% | 2273 ms | → 1.00x | 0 | — | — | 7m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 94.64% | 94.64% | 30.20% | 30.20% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 94.64% | 94.64% | 24.91% | 24.91% | 631 ms | → 1.00x | 2 | 0s | 16d ago | 6m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 94.64% | 94.64% | 66.42% | 66.42% | 1590 ms | → 1.00x | 1 | 2h 38m | 22d ago | 6m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 94.64% | 94.64% | 24.53% | 24.53% | 1911 ms | → 1.00x | 1 | 0s | 19d ago | 7m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 94.64% | 94.64% | 99.95% | 99.95% | 1649 ms | → 1.00x | 1 | 0s | 24d ago | 7m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 94.64% | 94.64% | 96.32% | 96.32% | 1357 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 94.64% | 94.64% | 5.16% | 5.16% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 94.64% | 94.64% | 25.33% | 25.33% | 890 ms | → 1.00x | 3 | 0s | 16d ago | 7m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 94.64% | 94.64% | 96.73% | 96.73% | 2783 ms | → 1.00x | 1 | 0s | 23d ago | 7m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 94.64% | 94.64% | 24.63% | 24.63% | 2320 ms | → 1.00x | 1 | 0s | 23d ago | 6m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 94.55% | 94.55% | 94.26% | 94.26% | 634 ms | → 1.00x | 0 | — | — | 6m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 94.55% | 94.55% | 74.11% | 74.11% | 886 ms | → 1.00x | 6 | 1h 20m | 4d ago | 6m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 94.55% | 94.55% | 98.73% | 98.73% | 836 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 94.55% | 94.55% | 97.21% | 97.21% | 2492 ms | → 1.00x | 0 | — | — | 6m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 94.55% | 94.55% | 83.18% | 83.18% | 1510 ms | → 1.00x | 4 | 51s | 9d ago | 6m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 94.55% | 94.55% | 97.90% | 97.90% | 1220 ms | → 1.00x | 0 | — | — | 6m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 94.55% | 94.55% | 97.00% | 97.00% | 522 ms | → 1.00x | 0 | — | — | 6m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 94.55% | 94.55% | 66.50% | 66.50% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 94.55% | 94.55% | 99.18% | 99.18% | 748 ms | → 1.00x | 1 | 0s | 29d ago | 6m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 94.55% | 94.55% | 84.58% | 84.58% | 2082 ms | → 1.00x | 0 | — | — | 6m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 94.55% | 94.55% | 68.50% | 68.50% | 1165 ms | → 1.00x | 2 | 10m | 22d ago | 6m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 94.55% | 94.55% | 93.26% | 93.26% | 536 ms | → 1.00x | 0 | — | — | 6m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 94.55% | 94.55% | 83.46% | 83.46% | 2171 ms | → 1.00x | 2 | 0s | 5d ago | 6m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 94.55% | 94.55% | 64.92% | 64.92% | 491 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 94.55% | 94.55% | 62.65% | 62.65% | 1278 ms | → 1.00x | 0 | — | — | 6m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 94.55% | 94.55% | 65.57% | 65.57% | 881 ms | → 1.00x | 0 | — | — | 6m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 94.55% | 94.55% | 99.61% | 99.61% | 488 ms | → 1.00x | 0 | — | — | 6m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 94.55% | 94.55% | 98.00% | 98.00% | 667 ms | → 1.00x | 1 | 12h 2m | 27d ago | 6m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 94.55% | 94.55% | 90.32% | 90.32% | 905 ms | → 1.00x | 0 | — | — | 6m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 94.55% | 94.55% | 99.83% | 99.83% | 1379 ms | → 1.00x | 0 | — | — | 6m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 94.55% | 94.55% | 99.88% | 99.88% | 1850 ms | → 1.00x | 0 | — | — | 6m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 94.55% | 94.55% | 91.09% | 91.09% | 898 ms | → 1.00x | 4 | 0s | 14d ago | 6m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 94.55% | 94.55% | 96.18% | 96.18% | 2694 ms | → 1.00x | 4 | 41m | 12d ago | 6m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 94.55% | 94.55% | 63.14% | 63.14% | 1241 ms | → 1.00x | 1 | 0s | 5d ago | 6m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 94.55% | 94.55% | 58.17% | 58.17% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 94.55% | 94.55% | 99.00% | 99.00% | 2336 ms | → 1.00x | 1 | 30m | 26d ago | 6m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 94.55% | 94.55% | 71.79% | 71.79% | 1106 ms | → 1.00x | 0 | — | — | 6m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 94.55% | 94.55% | 82.26% | 82.26% | 1764 ms | → 1.00x | 0 | — | — | 6m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 94.55% | 94.55% | 38.36% | 38.36% | 1726 ms | → 1.00x | 12 | 3h 31m | 24d ago | 6m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 94.55% | 94.55% | 99.35% | 99.35% | 2208 ms | → 1.00x | 0 | — | — | 6m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 94.55% | 94.55% | 69.43% | 69.43% | 1217 ms | → 1.00x | 2 | 0s | 18d ago | 6m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 94.55% | 94.55% | 96.88% | 96.88% | 1122 ms | → 1.00x | 0 | — | — | 6m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 94.55% | 94.55% | 60.60% | 60.60% | 1270 ms | → 1.00x | 0 | — | — | 6m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 94.55% | 94.55% | 98.38% | 98.38% | 1611 ms | → 1.00x | 2 | 3h 26m | 16d ago | 6m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 94.55% | 94.55% | 99.89% | 99.89% | 1874 ms | → 1.00x | 0 | — | — | 6m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 94.55% | 94.55% | 69.87% | 69.87% | 1627 ms | → 1.00x | 9 | 0s | 6d ago | 6m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 94.55% | 94.55% | 99.31% | 99.31% | 2018 ms | → 1.00x | 0 | — | — | 6m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 94.55% | 94.55% | 81.07% | 81.07% | 1502 ms | → 1.00x | 0 | — | — | 6m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 94.55% | 94.55% | 63.68% | 63.68% | 2105 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 94.55% | 94.55% | 99.97% | 99.97% | 1622 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 94.55% | 94.55% | 89.57% | 89.57% | 1694 ms | → 1.00x | 0 | — | — | 6m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 94.55% | 94.55% | 98.90% | 98.90% | 1486 ms | → 1.00x | 1 | 1h 60m | 21d ago | 6m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 94.55% | 94.55% | 74.00% | 74.00% | 1315 ms | → 1.00x | 17 | 58m | 7d ago | 6m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 94.55% | 94.55% | 89.40% | 89.40% | 2105 ms | → 1.00x | 0 | — | — | 6m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 94.44% | 94.44% | 98.47% | 98.47% | 714 ms | → 1.00x | 0 | — | — | 5m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 94.44% | 94.44% | 99.45% | 99.45% | 777 ms | → 1.00x | 2 | 3h 1m | 10d ago | 5m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 94.44% | 94.44% | 99.61% | 99.61% | 745 ms | → 1.00x | 1 | 0s | 20d ago | 5m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 94.44% | 94.44% | 95.85% | 95.85% | 1806 ms | → 1.00x | 0 | — | — | 6m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 94.44% | 94.44% | 98.81% | 98.81% | 1033 ms | → 1.00x | 0 | — | — | 6m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.44% | 94.44% | 97.00% | 97.00% | 1069 ms | → 1.00x | 4 | 1h 51m | 6d ago | 6m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 94.44% | 94.44% | 64.61% | 64.61% | 2452 ms | → 1.00x | 3 | 4d 11h | 11d ago | 6m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 94.44% | 94.44% | 99.08% | 99.08% | 631 ms | → 1.00x | 0 | — | — | 5m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 94.44% | 94.44% | 100.00% | 100.00% | 1429 ms | → 1.00x | 0 | — | — | 5m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 94.44% | 94.44% | 99.87% | 99.87% | 1114 ms | → 1.00x | 1 | 0s | 16d ago | 6m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 94.44% | 94.44% | 66.05% | 66.05% | — | → 1.00x | 8 | 17h 6m | 8d ago | 6m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 94.44% | 94.44% | 99.97% | 99.97% | 926 ms | → 1.00x | 0 | — | — | 5m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 94.44% | 94.44% | 99.94% | 99.94% | 1439 ms | → 1.00x | 1 | 0s | 21d ago | 5m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 94.44% | 94.44% | 98.56% | 98.56% | 2342 ms | → 1.00x | 0 | — | — | 6m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 94.44% | 94.44% | 99.67% | 99.67% | 1177 ms | → 1.00x | 1 | 0s | 27d ago | 5m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 94.44% | 94.44% | 99.95% | 99.95% | 827 ms | → 1.00x | 1 | 0s | 29d ago | 5m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 94.44% | 94.44% | 99.64% | 99.64% | 1625 ms | → 1.00x | 2 | 3h 20m | 23d ago | 6m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 94.44% | 94.44% | 96.69% | 96.69% | 687 ms | → 1.00x | 0 | — | — | 6m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 94.44% | 94.44% | 100.00% | 100.00% | 843 ms | → 1.00x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 94.44% | 94.44% | 100.00% | 100.00% | 525 ms | → 1.00x | 0 | — | — | 5m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 94.44% | 94.44% | 68.70% | 68.70% | — | → 1.00x | 1 | 25d 22h | 29d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 94.44% | 94.44% | 99.87% | 99.87% | 1151 ms | → 1.00x | 0 | — | — | 6m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 94.44% | 94.44% | 98.75% | 98.75% | 1018 ms | → 1.00x | 7 | 20s | 8d ago | 5m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 94.44% | 94.44% | 99.88% | 99.88% | 1268 ms | → 1.00x | 0 | — | — | 5m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 94.44% | 94.44% | 31.33% | 31.33% | — | → 1.00x | 2 | 12d 20h | 29d ago | 5m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 94.44% | 94.44% | 91.90% | 91.90% | 710 ms | → 1.00x | 20 | 1h 59m | 16d ago | 5m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 94.44% | 94.44% | 99.93% | 99.93% | 1171 ms | → 1.00x | 1 | 0s | 4d ago | 4m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 94.44% | 94.44% | 96.80% | 96.80% | 1565 ms | → 1.00x | 1 | 0s | 21d ago | 6m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 94.44% | 94.44% | 93.61% | 93.61% | 789 ms | → 1.00x | 63 | 13m | 5d ago | 5m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 94.44% | 94.44% | 98.11% | 98.11% | 3239 ms | → 1.00x | 0 | — | — | 6m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 94.44% | 94.44% | 24.52% | 24.52% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 94.44% | 94.44% | 100.00% | 100.00% | 975 ms | → 1.00x | 0 | — | — | 5m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 94.44% | 94.44% | 100.00% | 100.00% | 654 ms | → 1.00x | 0 | — | — | 5m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 94.44% | 94.44% | 98.72% | 98.72% | 702 ms | → 1.00x | 0 | — | — | 5m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 94.44% | 94.44% | 99.98% | 99.98% | 866 ms | → 1.00x | 0 | — | — | 5m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 94.44% | 94.44% | 87.87% | 87.87% | 852 ms | → 1.00x | 4 | 8m | 16d ago | 5m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 94.44% | 94.44% | 99.09% | 99.09% | 1534 ms | → 1.00x | 2 | 10m | 15d ago | 5m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 94.44% | 94.44% | 100.00% | 100.00% | 1130 ms | → 1.00x | 0 | — | — | 5m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 94.44% | 94.44% | 98.85% | 98.85% | 1856 ms | → 1.00x | 0 | — | — | 6m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 94.44% | 94.44% | 99.97% | 99.97% | 2872 ms | → 1.00x | 0 | — | — | 5m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 94.44% | 94.44% | 98.83% | 98.83% | 1140 ms | → 1.00x | 0 | — | — | 6m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 94.44% | 94.44% | 99.51% | 99.51% | 659 ms | → 1.00x | 0 | — | — | 5m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 94.44% | 94.44% | 43.99% | 43.99% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 94.44% | 94.44% | 99.92% | 99.92% | 849 ms | → 1.00x | 1 | 0s | 18d ago | 5m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 94.44% | 94.44% | 98.16% | 98.16% | 3350 ms | → 1.00x | 0 | — | — | 6m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 94.44% | 94.44% | 96.87% | 96.87% | 1055 ms | → 1.00x | 1 | 2h 1m | 24d ago | 5m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 94.44% | 94.44% | 100.00% | 100.00% | 881 ms | → 1.00x | 0 | — | — | 5m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 94.44% | 94.44% | 100.00% | 100.00% | 723 ms | → 1.00x | 0 | — | — | 5m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 94.44% | 94.44% | 99.98% | 99.98% | 1187 ms | → 1.00x | 0 | — | — | 5m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 94.44% | 94.44% | 97.74% | 97.74% | 3137 ms | → 1.00x | 8 | 2h 7m | 4d ago | 6m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 94.44% | 94.44% | 99.83% | 99.83% | 1527 ms | → 1.00x | 0 | — | — | 6m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 94.44% | 94.44% | 99.70% | 99.70% | 1349 ms | → 1.00x | 0 | — | — | 5m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 94.44% | 94.44% | 99.67% | 99.67% | 1533 ms | → 1.00x | 1 | 0s | 6d ago | 4m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 94.44% | 94.44% | 100.00% | 100.00% | 828 ms | → 1.00x | 0 | — | — | 5m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 94.44% | 94.44% | 100.00% | 100.00% | 1192 ms | → 1.00x | 0 | — | — | 5m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 94.44% | 94.44% | 100.00% | 100.00% | 1794 ms | → 1.00x | 0 | — | — | 6m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 94.44% | 94.44% | 97.80% | 97.80% | 1778 ms | → 1.00x | 0 | — | — | 6m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 94.44% | 94.44% | 26.43% | 26.43% | 2409 ms | → 1.00x | 1 | 17d 6h | 30d ago | 6m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 94.44% | 94.44% | 99.94% | 99.94% | 1506 ms | → 1.00x | 1 | 0s | 28d ago | 5m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 94.44% | 94.44% | 100.00% | 100.00% | 1508 ms | → 1.00x | 0 | — | — | 5m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 94.44% | 94.44% | 16.67% | 16.67% | — | → 1.00x | 1 | 25d 2h | 28d ago | 5m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 94.44% | 94.44% | 78.42% | 78.42% | — | → 1.00x | 2 | 9d 21h | 23d ago | 5m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 94.44% | 94.44% | 98.16% | 98.16% | 617 ms | → 1.00x | 4 | 0s | 11d ago | 5m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 94.44% | 94.44% | 98.96% | 98.96% | 664 ms | → 1.00x | 1 | 29m | 20d ago | 6m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 94.44% | 94.44% | 14.21% | 14.21% | — | → 1.00x | 4 | 6d 10h | 29d ago | 5m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 94.44% | 94.44% | 6.05% | 6.05% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 94.44% | 94.44% | 99.85% | 99.85% | 961 ms | → 1.00x | 0 | — | — | 5m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 94.44% | 94.44% | 99.92% | 99.92% | 805 ms | → 1.00x | 0 | — | — | 5m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 94.44% | 94.44% | 98.81% | 98.81% | 172 ms | → 1.00x | 4 | 38m | 18d ago | 6m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 94.44% | 94.44% | 98.43% | 98.43% | 1132 ms | → 1.00x | 1 | 0s | 24d ago | 5m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 94.44% | 94.44% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 5m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 94.44% | 94.44% | 99.48% | 99.48% | 503 ms | → 1.00x | 1 | 4m | 8d ago | 4m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 94.44% | 94.44% | 93.06% | 93.06% | 630 ms | → 1.00x | 8 | 8m | 16d ago | 6m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 94.44% | 94.44% | 100.00% | 100.00% | 715 ms | → 1.00x | 0 | — | — | 5m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 94.44% | 94.44% | 88.31% | 88.31% | 433 ms | → 1.00x | 4 | 8h 15m | 25d ago | 5m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 94.44% | 94.44% | 84.75% | 84.75% | 1021 ms | → 1.00x | 1 | 0s | 9d ago | 6m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 94.44% | 94.44% | 98.88% | 98.88% | 1541 ms | → 1.00x | 2 | 2h 55m | 4d ago | 5m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 94.44% | 94.44% | 89.89% | 89.89% | 761 ms | → 1.00x | 3 | 0s | 4d ago | 5m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 94.44% | 94.44% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 94.44% | 94.44% | 43.48% | 43.48% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 94.44% | 94.44% | 99.98% | 99.98% | 1118 ms | → 1.00x | 0 | — | — | 5m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 94.44% | 94.44% | 99.93% | 99.93% | 702 ms | → 1.00x | 1 | 0s | 5d ago | 6m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 94.44% | 94.44% | 98.69% | 98.69% | 1469 ms | → 1.00x | 0 | — | — | 6m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 94.44% | 94.44% | 98.35% | 98.35% | 902 ms | → 1.00x | 1 | 1h 40m | 24d ago | 6m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 94.44% | 94.44% | 96.94% | 96.94% | 1043 ms | → 1.00x | 1 | 0s | 5d ago | 6m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 94.44% | 94.44% | 99.97% | 99.97% | 1226 ms | → 1.00x | 0 | — | — | 5m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 94.44% | 94.44% | 32.93% | 32.93% | 2569 ms | → 1.00x | 0 | — | — | 6m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 94.44% | 94.44% | 99.89% | 99.89% | 1470 ms | → 1.00x | 0 | — | — | 5m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 94.44% | 94.44% | 97.85% | 97.85% | 708 ms | → 1.00x | 2 | 31m | 21d ago | 5m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 94.44% | 94.44% | 99.94% | 99.94% | 1361 ms | → 1.00x | 1 | 0s | 30d ago | 5m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 94.44% | 94.44% | 98.56% | 98.56% | 2133 ms | → 1.00x | 4 | 1h 59m | 14d ago | 5m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 94.44% | 94.44% | 98.59% | 98.59% | 2365 ms | → 1.00x | 13 | 12m | 5d ago | 5m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 94.44% | 94.44% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 94.44% | 94.44% | 99.85% | 99.85% | 1172 ms | → 1.00x | 3 | 0s | 5d ago | 5m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 94.44% | 94.44% | 92.20% | 92.20% | 2499 ms | → 1.00x | 6 | 0s | 7d ago | 6m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 94.44% | 94.44% | 28.78% | 28.78% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 94.44% | 94.44% | 99.95% | 99.95% | 774 ms | → 1.00x | 0 | — | — | 6m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 94.44% | 94.44% | 93.73% | 93.73% | 65 ms | → 1.00x | 1 | 1h 22m | 19d ago | 6m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 94.44% | 94.44% | 100.00% | 100.00% | 386 ms | → 1.00x | 0 | — | — | 5m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 94.44% | 94.44% | 99.97% | 99.97% | 1101 ms | → 1.00x | 0 | — | — | 5m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 94.44% | 94.44% | 100.00% | 100.00% | 416 ms | → 1.00x | 0 | — | — | 5m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 94.44% | 94.44% | 98.47% | 98.47% | 2492 ms | → 1.00x | 5 | 42m | 11d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 94.44% | 94.44% | 99.92% | 99.92% | 1490 ms | → 1.00x | 0 | — | — | 5m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 94.44% | 94.44% | 29.98% | 29.98% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 94.44% | 94.44% | 99.66% | 99.66% | 1036 ms | → 1.00x | 2 | 0s | 24d ago | 5m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 94.44% | 94.44% | 99.34% | 99.34% | 4743 ms | → 1.00x | 11 | 5m | 4d ago | 5m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 94.44% | 94.44% | 99.82% | 99.82% | 571 ms | → 1.00x | 1 | 0s | 14d ago | 6m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 94.44% | 94.44% | 99.86% | 99.86% | 803 ms | → 1.00x | 0 | — | — | 6m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 94.44% | 94.44% | 100.00% | 100.00% | 1409 ms | → 1.00x | 0 | — | — | 5m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 94.44% | 94.44% | 98.37% | 98.37% | 1807 ms | → 1.00x | 0 | — | — | 6m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 94.44% | 94.44% | 99.94% | 99.94% | 1041 ms | → 1.00x | 1 | 0s | 29d ago | 5m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 94.44% | 94.44% | 97.35% | 97.35% | 1652 ms | → 1.00x | 2 | 2h 51m | 9d ago | 5m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 94.44% | 94.44% | 99.86% | 99.86% | 1409 ms | → 1.00x | 1 | 0s | 20d ago | 5m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 94.44% | 94.44% | 98.04% | 98.04% | 2486 ms | → 1.00x | 0 | — | — | 5m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 94.44% | 94.44% | 96.10% | 96.10% | 1646 ms | → 1.00x | 3 | 8h 19m | 25d ago | 5m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 94.44% | 94.44% | 0.69% | 0.69% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 94.44% | 94.44% | 99.67% | 99.67% | 1783 ms | → 1.00x | 0 | — | — | 5m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 94.44% | 94.44% | 98.12% | 98.12% | 2692 ms | → 1.00x | 2 | 10m | 18d ago | 6m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 94.44% | 94.44% | 99.97% | 99.97% | 1239 ms | → 1.00x | 0 | — | — | 5m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 94.44% | 94.44% | 99.77% | 99.77% | 737 ms | → 1.00x | 3 | 0s | 5d ago | 5m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 94.44% | 94.44% | 60.72% | 60.72% | 957 ms | → 1.00x | 1 | 3d 10h | 30d ago | 5m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 94.44% | 94.44% | 97.48% | 97.48% | 1530 ms | → 1.00x | 1 | 0s | 4d ago | 6m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 94.44% | 94.44% | 99.76% | 99.76% | 2655 ms | → 1.00x | 3 | 0s | 19d ago | 6m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 94.44% | 94.44% | 97.10% | 97.10% | 1041 ms | → 1.00x | 3 | 7m | 11d ago | 6m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 94.44% | 94.44% | 99.76% | 99.76% | 2658 ms | → 1.00x | 0 | — | — | 5m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 94.44% | 94.44% | 99.78% | 99.78% | 2762 ms | → 1.00x | 0 | — | — | 6m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 94.44% | 94.44% | 99.92% | 99.92% | 853 ms | → 1.00x | 1 | 0s | 12d ago | 5m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 94.44% | 94.44% | 98.78% | 98.78% | 1204 ms | → 1.00x | 1 | 0s | 3d ago | 6m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 94.44% | 94.44% | 55.08% | 55.08% | 2596 ms | → 1.00x | 33 | 54s | 4d ago | 6m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 94.44% | 94.44% | 100.00% | 100.00% | 1195 ms | → 1.00x | 0 | — | — | 4m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 93.10% | 93.10% | 93.57% | 93.57% | 2513 ms | → 1.00x | 1 | 4m | 9d ago | 8m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 93.10% | 93.10% | 97.98% | 97.98% | 3062 ms | → 1.00x | 0 | — | — | 7m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 93.10% | 93.10% | 99.74% | 99.74% | 1572 ms | → 1.00x | 1 | 4s | 6d ago | 7m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 93.10% | 93.10% | 99.90% | 99.90% | 803 ms | → 1.00x | 1 | 0s | 20d ago | 7m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 93.10% | 93.10% | 99.85% | 99.85% | 1946 ms | → 1.00x | 0 | — | — | 8m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 93.10% | 93.10% | 99.92% | 99.92% | 2429 ms | → 1.00x | 0 | — | — | 7m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 93.10% | 93.10% | 99.28% | 99.28% | 612 ms | → 1.00x | 3 | 0s | 5d ago | 8m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 93.10% | 93.10% | 98.78% | 98.78% | 4350 ms | → 1.00x | 21 | 5s | 9d ago | 8m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 93.10% | 93.10% | 89.73% | 89.73% | 1327 ms | → 1.00x | 1 | 0s | 29d ago | 7m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 93.10% | 93.10% | 99.90% | 99.90% | 563 ms | → 1.00x | 0 | — | — | 7m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 93.10% | 93.10% | 98.93% | 98.93% | 2632 ms | → 1.00x | 2 | 0s | 6d ago | 8m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 93.10% | 93.10% | 99.90% | 99.90% | 1218 ms | → 1.00x | 0 | — | — | 7m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 93.02% | 93.02% | — | — | — | → 1.00x | 0 | — | — | 5m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 93.02% | 93.02% | — | — | — | → 1.00x | 0 | — | — | 4m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 92.86% | 92.86% | 50.15% | 50.15% | 846 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 92.86% | 92.86% | 54.70% | 54.70% | 833 ms | → 1.00x | 2 | 0s | 22d ago | 6m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 92.86% | 92.86% | 98.12% | 98.12% | 2750 ms | → 1.00x | 0 | — | — | 7m ago |
| [Groq](https://lmspeed.net/provider/groq) | 92.86% | 92.86% | 76.97% | 76.97% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 92.86% | 92.86% | 24.54% | 24.54% | 1305 ms | → 1.00x | 1 | 0s | 26d ago | 6m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 92.86% | 92.86% | 99.87% | 99.87% | 543 ms | → 1.00x | 0 | — | — | 7m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 92.86% | 92.86% | 88.17% | 88.17% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 92.86% | 92.86% | 31.58% | 31.58% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 92.86% | 92.86% | 99.79% | 99.79% | 1580 ms | → 1.00x | 4 | 0s | 4d ago | 7m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 92.73% | 92.73% | 97.03% | 97.03% | 489 ms | → 1.00x | 2 | 0s | 23d ago | 6m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 92.73% | 92.73% | 99.86% | 99.86% | 658 ms | → 1.00x | 0 | — | — | 6m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 92.73% | 92.73% | 99.27% | 99.27% | 1808 ms | → 1.00x | 0 | — | — | 6m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 92.73% | 92.73% | 28.39% | 28.39% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 92.73% | 92.73% | 98.66% | 98.66% | 1125 ms | → 1.00x | 1 | 0s | 20d ago | 6m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 92.73% | 92.73% | 56.85% | 56.85% | 1364 ms | → 1.00x | 8 | 2h 1m | 16d ago | 6m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 92.73% | 92.73% | 91.87% | 91.87% | 514 ms | → 1.00x | 1 | 30m | 14d ago | 6m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 92.73% | 92.73% | 98.73% | 98.73% | 615 ms | → 1.00x | 0 | — | — | 6m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 92.73% | 92.73% | 99.30% | 99.30% | 729 ms | → 1.00x | 0 | — | — | 6m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 92.73% | 92.73% | 76.90% | 76.90% | 646 ms | → 1.00x | 1 | 0s | 20d ago | 6m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 92.73% | 92.73% | 98.88% | 98.88% | 1371 ms | → 1.00x | 0 | — | — | 6m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 92.73% | 92.73% | 98.74% | 98.74% | 886 ms | → 1.00x | 1 | 29m | 29d ago | 6m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 92.59% | 92.59% | 98.02% | 98.02% | 2039 ms | → 1.00x | 0 | — | — | 6m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 92.59% | 92.59% | 97.07% | 97.07% | 920 ms | → 1.00x | 2 | 1d 2h | 16d ago | 5m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 92.59% | 92.59% | 95.25% | 95.25% | 1301 ms | → 1.00x | 16 | 1h 50m | 5d ago | 5m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 92.59% | 92.59% | 96.89% | 96.89% | 1990 ms | → 1.00x | 7 | 1h 41m | 3d ago | 5m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 92.59% | 92.59% | 99.10% | 99.10% | 2542 ms | → 1.00x | 1 | 0s | 24d ago | 5m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 92.59% | 92.59% | 99.74% | 99.74% | 912 ms | → 1.00x | 0 | — | — | 6m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 92.59% | 92.59% | 99.85% | 99.85% | 1264 ms | → 1.00x | 1 | 3m | 5d ago | 5m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 92.59% | 92.59% | 99.89% | 99.89% | 977 ms | → 1.00x | 1 | 1h 9m | 26d ago | 5m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 92.59% | 92.59% | 86.85% | 86.85% | 2160 ms | → 1.00x | 0 | — | — | 6m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 92.59% | 92.59% | 99.94% | 99.94% | 1323 ms | → 1.00x | 0 | — | — | 4m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 92.59% | 92.59% | 99.71% | 99.71% | 656 ms | → 1.00x | 1 | 0s | 5d ago | 5m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 92.59% | 92.59% | 100.00% | 100.00% | 1205 ms | → 1.00x | 0 | — | — | 5m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 92.59% | 92.59% | 99.97% | 99.97% | 926 ms | → 1.00x | 0 | — | — | 5m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 92.59% | 92.59% | 97.87% | 97.87% | 386 ms | → 1.00x | 1 | 0s | 30d ago | 5m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 92.59% | 92.59% | 99.85% | 99.85% | 1987 ms | → 1.00x | 1 | 6h 1m | 4d ago | 5m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 91.38% | 91.38% | 98.29% | 98.29% | 2986 ms | → 1.00x | 0 | — | — | 8m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 91.38% | 91.38% | 68.59% | 68.59% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 91.38% | 91.38% | 99.62% | 99.62% | 889 ms | → 1.00x | 1 | 0s | 17d ago | 7m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 91.38% | 91.38% | 99.76% | 99.76% | 787 ms | → 1.00x | 0 | — | — | 8m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 91.38% | 91.38% | 99.77% | 99.77% | 1794 ms | → 1.00x | 0 | — | — | 7m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 91.07% | 91.07% | 97.28% | 97.28% | 1179 ms | → 1.00x | 0 | — | — | 7m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 91.07% | 91.07% | 99.09% | 99.09% | 397 ms | → 1.00x | 0 | — | — | 6m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 91.07% | 91.07% | 99.67% | 99.67% | 3014 ms | → 1.00x | 5 | 5h 48m | 4d ago | 7m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 90.91% | 90.91% | 99.10% | 99.10% | 271 ms | → 1.00x | 1 | 0s | 20d ago | 6m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 90.91% | 90.91% | 77.97% | 77.97% | 820 ms | → 1.00x | 1 | 0s | 4d ago | 6m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 90.74% | 90.74% | 99.34% | 99.34% | 697 ms | → 1.00x | 2 | 0s | 5d ago | 4m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 90.74% | 90.74% | 90.79% | 90.79% | 1160 ms | → 1.00x | 1 | 0s | 5d ago | 6m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 90.74% | 90.74% | 100.00% | 100.00% | 977 ms | → 1.00x | 0 | — | — | 4m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 90.74% | 90.74% | 98.95% | 98.95% | 2170 ms | → 1.00x | 0 | — | — | 6m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 90.74% | 90.74% | 99.06% | 99.06% | 829 ms | → 1.00x | 5 | 1h 16m | 5d ago | 5m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 90.74% | 90.74% | 99.94% | 99.94% | 893 ms | → 1.00x | 0 | — | — | 5m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 89.66% | 89.66% | 67.23% | 67.23% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 89.66% | 89.66% | 93.77% | 93.77% | 4832 ms | → 1.00x | 0 | — | — | 7m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 89.66% | 89.66% | 36.33% | 36.33% | 2088 ms | → 1.00x | 3 | 2m | 9d ago | 8m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 89.47% | 89.47% | 17.31% | 17.31% | 1461 ms | → 1.00x | 1 | 0s | 19d ago | 7m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 89.09% | 89.09% | 2.34% | 2.34% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 88.89% | 88.89% | 99.33% | 99.33% | 238 ms | → 1.00x | 9 | 2m | 12d ago | 5m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 88.89% | 88.89% | 82.00% | 82.00% | 3353 ms | → 1.00x | 163 | 11m | 5d ago | 5m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 87.93% | 87.93% | 78.01% | 78.01% | 2998 ms | → 1.00x | 78 | 1h 18m | 5d ago | 8m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 87.93% | 87.93% | 63.15% | 63.15% | 4311 ms | → 1.00x | 211 | 12m | 5d ago | 7m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 87.93% | 87.93% | 86.23% | 86.23% | 1978 ms | → 1.00x | 6 | 0s | 9d ago | 7m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 87.27% | 87.27% | 90.95% | 90.95% | 1593 ms | → 1.00x | 3 | 0s | 10d ago | 6m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 87.04% | 87.04% | 92.56% | 92.56% | 4807 ms | → 1.00x | 21 | 30m | 4d ago | 5m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 87.04% | 87.04% | 97.23% | 97.23% | 4298 ms | → 1.00x | 31 | 3m | 6d ago | 4m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 86.21% | 86.21% | 98.89% | 98.89% | 1748 ms | → 1.00x | 1 | 0s | 13d ago | 8m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 86.21% | 86.21% | 99.77% | 99.77% | 2519 ms | → 1.00x | 0 | — | — | 7m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 86.21% | 86.21% | 75.72% | 75.72% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 86.21% | 86.21% | 54.05% | 54.05% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 85.45% | 85.45% | 48.46% | 48.46% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 85.45% | 85.45% | 87.06% | 87.06% | 3978 ms | → 1.00x | 21 | 1m | 15d ago | 6m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 85.19% | 85.19% | 88.70% | 88.70% | 1542 ms | → 1.00x | 1 | 6h | 3d ago | 6m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 85.19% | 85.19% | 91.43% | 91.43% | 1723 ms | → 1.00x | 0 | — | — | 5m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 85.19% | 85.19% | 98.53% | 98.53% | 1498 ms | → 1.00x | 15 | 7m | 4d ago | 5m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 85.19% | 85.19% | 99.88% | 99.88% | 3309 ms | → 1.00x | 2 | 0s | 11d ago | 5m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 84.48% | 84.48% | 75.11% | 75.11% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 84.48% | 84.48% | 66.07% | 66.07% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 83.64% | 83.64% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 26d 10h | 30d ago | 6m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 83.64% | 83.64% | 10.72% | 10.72% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 83.33% | 83.33% | 99.61% | 99.61% | 3649 ms | → 1.00x | 5 | 0s | 3d ago | 5m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 82.76% | 82.76% | 68.41% | 68.41% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 82.76% | 82.76% | 98.92% | 98.92% | 3915 ms | → 1.00x | 1 | 0s | 9d ago | 8m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 82.76% | 82.76% | 96.32% | 96.32% | 3670 ms | → 1.00x | 234 | 14m | 6d ago | 7m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 82.76% | 82.76% | 54.78% | 54.78% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 82.14% | 82.14% | 68.13% | 68.13% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 81.48% | 81.48% | 6.48% | 6.48% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 79.31% | 79.31% | 94.11% | 94.11% | 2819 ms | → 1.00x | 10 | 8h 57m | 6d ago | 8m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 79.31% | 79.31% | 64.20% | 64.20% | 2860 ms | → 1.00x | 6 | 0s | 7d ago | 7m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 78.57% | 78.57% | 85.28% | 85.28% | 1350 ms | → 1.00x | 0 | — | — | 7m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 77.59% | 77.59% | 50.52% | 50.52% | 2208 ms | → 1.00x | 146 | 3h 26m | 4d ago | 8m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 77.59% | 77.59% | 86.29% | 86.29% | 3642 ms | → 1.00x | 23 | 3m | 5d ago | 7m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 76.79% | 76.79% | 96.79% | 96.79% | 2764 ms | → 1.00x | 4 | 8m | 16d ago | 6m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 76.36% | 76.36% | 93.16% | 93.16% | 915 ms | → 1.00x | 3 | 17m | 8d ago | 6m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 76.36% | 76.36% | 99.82% | 99.82% | 982 ms | → 1.00x | 0 | — | — | 6m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 75.93% | 75.93% | 83.10% | 83.10% | 1039 ms | → 1.00x | 13 | 4h 5m | 11d ago | 6m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 75.86% | 75.86% | 52.45% | 52.45% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 75.00% | 75.00% | 86.83% | 86.83% | 3730 ms | → 1.00x | 13 | 2m | 10d ago | 6m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 74.55% | 74.55% | 83.85% | 83.85% | 4482 ms | → 1.00x | 37 | 5m | 9d ago | 6m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 74.14% | 74.14% | 91.98% | 91.98% | 2360 ms | → 1.00x | 19 | 16s | 5d ago | 8m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 72.73% | 72.73% | 69.01% | 69.01% | 4159 ms | → 1.00x | 11 | 8m | 16d ago | 6m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 72.22% | 72.22% | 36.20% | 36.20% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 70.37% | 70.37% | 93.54% | 93.54% | 3648 ms | → 1.00x | 23 | 3m | 6d ago | 5m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 70.37% | 70.37% | 100.00% | 100.00% | 3512 ms | → 1.00x | 0 | — | — | 5m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 70.18% | 70.18% | 69.98% | 69.98% | 4053 ms | → 1.00x | 5 | 14m | 19d ago | 7m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 68.97% | 68.97% | 99.64% | 99.64% | 888 ms | → 1.00x | 6 | 48m | 7d ago | 7m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 67.24% | 67.24% | 98.87% | 98.87% | 2222 ms | → 1.00x | 1 | 17h 60m | 23d ago | 7m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 66.67% | 66.67% | 96.14% | 96.14% | 2028 ms | → 1.00x | 4 | 10h 1m | 5d ago | 5m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 55.56% | 55.56% | 99.85% | 99.85% | 1442 ms | → 1.00x | 2 | 0s | 24d ago | 5m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 48.21% | 48.21% | 0.11% | 0.11% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 29.09% | 29.09% | 44.49% | 44.49% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |

</details>

<details open>
<summary><strong>🔴 Down (300)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 92.59% | 92.59% | 99.95% | 99.95% | 2135 ms | → 1.00x | 1 | 0s | 23d ago | 5m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 91.38% | 91.38% | 89.02% | 89.02% | 1073 ms | → 1.00x | 1 | 3d 17h | 30d ago | 7m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 89.09% | 89.09% | 81.53% | 81.53% | 1645 ms | → 1.00x | 0 | — | — | 6m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 78.18% | 78.18% | 97.75% | 97.75% | 2749 ms | → 1.00x | 4 | 0s | 4d ago | 6m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 78.18% | 78.18% | 44.99% | 44.99% | 3420 ms | → 1.00x | 0 | — | — | 6m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 74.55% | 74.55% | 77.59% | 77.59% | 2354 ms | → 1.00x | 0 | — | — | 6m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 68.52% | 68.52% | 85.02% | 85.02% | 4160 ms | → 1.00x | 34 | 4m | 6d ago | 6m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 67.86% | 67.86% | 98.45% | 98.45% | 3606 ms | → 1.00x | 45 | 1m | 5d ago | 7m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 42.59% | 42.59% | 25.44% | 25.44% | 930 ms | → 1.00x | 4 | 5d 2h | 5d ago | 6m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 41.38% | 41.38% | 99.93% | 99.93% | 188 ms | → 1.00x | 0 | — | — | 7m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 38.89% | 38.89% | 98.37% | 98.37% | 1810 ms | → 1.00x | 3 | 3m | 7d ago | 5m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 37.04% | 37.04% | 92.86% | 92.86% | 2909 ms | → 1.00x | 8 | 14h 24m | 3d ago | 6m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 27.59% | 27.59% | 40.01% | 40.01% | 1066 ms | → 1.00x | 1 | 18d 22h | 30d ago | 7m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 24.07% | 24.07% | 39.41% | 39.41% | 3281 ms | → 1.00x | 110 | 6m | 5d ago | 5m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 22.22% | 22.22% | 64.69% | 64.69% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 22.22% | 22.22% | 7.76% | 7.76% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 20.37% | 20.37% | 99.82% | 99.82% | 898 ms | → 1.00x | 2 | 2m | 7d ago | 5m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 20.37% | 20.37% | 52.44% | 52.44% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 20.37% | 20.37% | 99.82% | 99.82% | 2303 ms | → 1.00x | 1 | 7h | 4d ago | 5m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 20.37% | 20.37% | 47.31% | 47.31% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 20.37% | 20.37% | 73.96% | 73.96% | — | → 1.00x | 5 | 4d 12h | 26d ago | 5m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 20.37% | 20.37% | 79.86% | 79.86% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 20.37% | 20.37% | 85.33% | 85.33% | 1170 ms | → 1.00x | 95 | 33m | 5d ago | 6m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 20.37% | 20.37% | 83.11% | 83.11% | — | → 1.00x | 2 | 2d 24h | 8d ago | 5m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 20.37% | 20.37% | 78.64% | 78.64% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 20.37% | 20.37% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 27d ago | 5m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 20.37% | 20.37% | 90.67% | 90.67% | 1502 ms | → 1.00x | 2 | 1d 21h | 7d ago | 4m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 20.37% | 20.37% | 32.34% | 32.34% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 20.37% | 20.37% | 69.29% | 69.29% | — | → 1.00x | 2 | 12d 20h | 29d ago | 5m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 20.37% | 20.37% | 39.40% | 39.40% | — | → 1.00x | 3 | 6d 1h | 21d ago | 5m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 20.37% | 20.37% | 26.33% | 26.33% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 20.37% | 20.37% | 99.89% | 99.89% | 1695 ms | → 1.00x | 0 | — | — | 5m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 20.37% | 20.37% | 48.30% | 48.30% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 20.37% | 20.37% | 100.00% | 100.00% | 1312 ms | → 1.00x | 0 | — | — | 5m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 20.37% | 20.37% | 99.92% | 99.92% | 1050 ms | → 1.00x | 1 | 0s | 17d ago | 5m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 20.37% | 20.37% | 68.44% | 68.44% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 20.37% | 20.37% | 5.52% | 5.52% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 20.37% | 20.37% | 81.13% | 81.13% | 1408 ms | → 1.00x | 3 | 20m | 17d ago | 6m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 20.37% | 20.37% | 99.89% | 99.89% | 949 ms | → 1.00x | 2 | 1m | 6d ago | 5m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 20.37% | 20.37% | 20.14% | 20.14% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 20.37% | 20.37% | 99.95% | 99.95% | 808 ms | → 1.00x | 0 | — | — | 5m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 20.37% | 20.37% | 67.73% | 67.73% | — | → 1.00x | 2 | 12d 20h | 29d ago | 5m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 20.37% | 20.37% | 74.74% | 74.74% | — | → 1.00x | 6 | 4d 6h | 29d ago | 5m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 20.37% | 20.37% | 99.25% | 99.25% | 1106 ms | → 1.00x | 1 | 0s | 17d ago | 5m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 20.37% | 20.37% | 55.75% | 55.75% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 20.37% | 20.37% | 20.55% | 20.55% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 20.37% | 20.37% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 25d ago | 5m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 20.37% | 20.37% | 62.39% | 62.39% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 20.37% | 20.37% | 91.04% | 91.04% | 832 ms | → 1.00x | 3 | 1d 8h | 7d ago | 5m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 20.37% | 20.37% | 42.69% | 42.69% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 20.37% | 20.37% | 24.01% | 24.01% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 20.37% | 20.37% | 20.58% | 20.58% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 20.37% | 20.37% | 33.55% | 33.55% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 20.37% | 20.37% | 52.99% | 52.99% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 20.37% | 20.37% | 65.07% | 65.07% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 20.37% | 20.37% | 92.19% | 92.19% | — | → 1.00x | 1 | 15d 2h | 18d ago | 6m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 20.37% | 20.37% | 92.63% | 92.63% | 1948 ms | → 1.00x | 3 | 2h 60m | 3d ago | 6m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 20.37% | 20.37% | 98.92% | 98.92% | 2119 ms | → 1.00x | 10 | 19m | 15d ago | 5m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 20.37% | 20.37% | 16.77% | 16.77% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 20.37% | 20.37% | 19.49% | 19.49% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 20.37% | 20.37% | 99.81% | 99.81% | 1124 ms | → 1.00x | 2 | 36m | 16d ago | 5m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 20.37% | 20.37% | 46.51% | 46.51% | 158 ms | → 1.00x | 4 | 3d 13h | 11d ago | 6m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 20.37% | 20.37% | 46.80% | 46.80% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 20.37% | 20.37% | 35.49% | 35.49% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 20.37% | 20.37% | 22.60% | 22.60% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 20.37% | 20.37% | 30.92% | 30.92% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 20.37% | 20.37% | 68.76% | 68.76% | — | → 1.00x | 2 | 12d 20h | 29d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 20.37% | 20.37% | 44.20% | 44.20% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 20.37% | 20.37% | 38.02% | 38.02% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 20.37% | 20.37% | 17.16% | 17.16% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 20.37% | 20.37% | 10.15% | 10.15% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 20.37% | 20.37% | 14.75% | 14.75% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 20.37% | 20.37% | 25.49% | 25.49% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 20.37% | 20.37% | 3.93% | 3.93% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 20.37% | 20.37% | 4.55% | 4.55% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 20.37% | 20.37% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 17d ago | 5m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 20.37% | 20.37% | 36.28% | 36.28% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 20.37% | 20.37% | 63.49% | 63.49% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 20.37% | 20.37% | 40.17% | 40.17% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 20.37% | 20.37% | 43.61% | 43.61% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 20.37% | 20.37% | 60.97% | 60.97% | 1588 ms | → 1.00x | 111 | 5m | 5d ago | 6m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 20.37% | 20.37% | 1.35% | 1.35% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 20.37% | 20.37% | 99.77% | 99.77% | 349 ms | → 1.00x | 2 | 2m | 4d ago | 5m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 20.37% | 20.37% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 20.00% | 20.00% | 59.84% | 59.84% | 2298 ms | → 1.00x | 2 | 60m | 4d ago | 6m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 20.00% | 20.00% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 8d 22h | 3d ago | 6m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 20.00% | 20.00% | 21.09% | 21.09% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 20.00% | 20.00% | 27.04% | 27.04% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 20.00% | 20.00% | 13.15% | 13.15% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 20.00% | 20.00% | 30.30% | 30.30% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 20.00% | 20.00% | 3.12% | 3.12% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 20.00% | 20.00% | 31.88% | 31.88% | — | → 1.00x | 3 | 6d 11h | 12d ago | 6m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 20.00% | 20.00% | 46.41% | 46.41% | 74 ms | → 1.00x | 2 | 8d 8h | 4d ago | 6m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 20.00% | 20.00% | 64.35% | 64.35% | — | → 1.00x | 3 | 6d 1h | 21d ago | 6m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 20.00% | 20.00% | 22.07% | 22.07% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 20.00% | 20.00% | 98.37% | 98.37% | 2543 ms | → 1.00x | 0 | — | — | 6m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 20.00% | 20.00% | 21.32% | 21.32% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 20.00% | 20.00% | 4.63% | 4.63% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 20.00% | 20.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 20.00% | 20.00% | 83.98% | 83.98% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 20.00% | 20.00% | 47.90% | 47.90% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 20.00% | 20.00% | 98.24% | 98.24% | 2014 ms | → 1.00x | 0 | — | — | 6m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 20.00% | 20.00% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 20.00% | 20.00% | 65.91% | 65.91% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 20.00% | 20.00% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 8d 22h | 3d ago | 6m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 20.00% | 20.00% | 34.65% | 34.65% | 1315 ms | → 1.00x | 2 | 2d 2h | 22d ago | 6m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 20.00% | 20.00% | 39.95% | 39.95% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 20.00% | 20.00% | 2.87% | 2.87% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 20.00% | 20.00% | 49.45% | 49.45% | 551 ms | → 1.00x | 0 | — | — | 6m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 20.00% | 20.00% | 27.77% | 27.77% | 3591 ms | → 1.00x | 176 | 17m | 6d ago | 6m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 20.00% | 20.00% | 46.05% | 46.05% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 20.00% | 20.00% | 35.56% | 35.56% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 20.00% | 20.00% | 87.63% | 87.63% | 2202 ms | → 1.00x | 0 | — | — | 6m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 20.00% | 20.00% | 72.39% | 72.39% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 20.00% | 20.00% | 26.68% | 26.68% | 757 ms | → 1.00x | 0 | — | — | 6m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 20.00% | 20.00% | 22.23% | 22.23% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 20.00% | 20.00% | 6.70% | 6.70% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 20.00% | 20.00% | 8.99% | 8.99% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 20.00% | 20.00% | 98.48% | 98.48% | 1753 ms | → 1.00x | 1 | 0s | 24d ago | 6m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 20.00% | 20.00% | 17.59% | 17.59% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 20.00% | 20.00% | 91.72% | 91.72% | 1351 ms | → 1.00x | 28 | 0s | 3d ago | 6m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 19.64% | 19.64% | 63.31% | 63.31% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 19.64% | 19.64% | 5.20% | 5.20% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 19.64% | 19.64% | 40.15% | 40.15% | 469 ms | → 1.00x | 0 | — | — | 7m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 19.64% | 19.64% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 11d ago | 7m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 19.64% | 19.64% | 78.14% | 78.14% | 1648 ms | → 1.00x | 96 | 5h 13m | 4d ago | 6m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 19.64% | 19.64% | 73.53% | 73.53% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Crond](https://lmspeed.net/provider/crond) | 19.64% | 19.64% | 22.80% | 22.80% | 2032 ms | → 1.00x | 5 | 6m | 13d ago | 7m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 19.64% | 19.64% | 43.20% | 43.20% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 19.64% | 19.64% | 22.80% | 22.80% | 583 ms | → 1.00x | 1 | 0s | 22d ago | 6m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 19.64% | 19.64% | 54.39% | 54.39% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 19.64% | 19.64% | 38.64% | 38.64% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 19.64% | 19.64% | 90.53% | 90.53% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 19.64% | 19.64% | 0.10% | 0.10% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 19.64% | 19.64% | 73.32% | 73.32% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 19.64% | 19.64% | 99.26% | 99.26% | 2600 ms | → 1.00x | 0 | — | — | 7m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 19.64% | 19.64% | 16.23% | 16.23% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 19.64% | 19.64% | 51.26% | 51.26% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 19.64% | 19.64% | 22.72% | 22.72% | — | → 1.00x | 4 | 1d 10h | 9d ago | 6m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 19.64% | 19.64% | 18.10% | 18.10% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 19.64% | 19.64% | 16.69% | 16.69% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 19.64% | 19.64% | 77.23% | 77.23% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 19.64% | 19.64% | 0.01% | 0.01% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 19.64% | 19.64% | 22.68% | 22.68% | 1519 ms | → 1.00x | 0 | — | — | 6m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 19.64% | 19.64% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 19.64% | 19.64% | 75.15% | 75.15% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 19.30% | 19.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 19.30% | 19.30% | 74.22% | 74.22% | — | → 1.00x | 30 | 5h 27m | 10d ago | 7m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 19.30% | 19.30% | 3.13% | 3.13% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 19.30% | 19.30% | 50.25% | 50.25% | 1986 ms | → 1.00x | 6 | 1h 23m | 19d ago | 7m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 19.30% | 19.30% | 96.06% | 96.06% | 1176 ms | → 1.00x | 6 | 14h 25m | 6d ago | 7m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 19.30% | 19.30% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 19.30% | 19.30% | 20.82% | 20.82% | 2571 ms | → 1.00x | 73 | 6m | 3d ago | 7m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 18.97% | 18.97% | 10.24% | 10.24% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 18.97% | 18.97% | 76.64% | 76.64% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 18.97% | 18.97% | 33.64% | 33.64% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 18.97% | 18.97% | 83.66% | 83.66% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 18.97% | 18.97% | 84.65% | 84.65% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 18.97% | 18.97% | 75.27% | 75.27% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 18.97% | 18.97% | 57.88% | 57.88% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 18.97% | 18.97% | 70.96% | 70.96% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 18.97% | 18.97% | 87.39% | 87.39% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 18.97% | 18.97% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 11d ago | 7m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 18.97% | 18.97% | 32.40% | 32.40% | — | → 1.00x | 2 | 2d 6h | 7d ago | 7m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 18.97% | 18.97% | 48.90% | 48.90% | — | → 1.00x | 6 | 4d 11h | 14d ago | 7m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 18.97% | 18.97% | 84.44% | 84.44% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 18.97% | 18.97% | 50.43% | 50.43% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 18.97% | 18.97% | 46.73% | 46.73% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 18.97% | 18.97% | 60.67% | 60.67% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 18.97% | 18.97% | 99.95% | 99.95% | 1362 ms | → 1.00x | 0 | — | — | 8m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 18.97% | 18.97% | 99.74% | 99.74% | 593 ms | → 1.00x | 0 | — | — | 8m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 18.97% | 18.97% | 74.18% | 74.18% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 18.97% | 18.97% | 99.84% | 99.84% | 1181 ms | → 1.00x | 0 | — | — | 7m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 18.97% | 18.97% | 48.81% | 48.81% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 18.97% | 18.97% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 23d ago | 7m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 18.97% | 18.97% | 39.16% | 39.16% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 18.97% | 18.97% | 74.31% | 74.31% | — | → 1.00x | 2 | 12d 8h | 28d ago | 8m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 18.97% | 18.97% | 35.55% | 35.55% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 18.97% | 18.97% | 34.00% | 34.00% | 1725 ms | → 1.00x | 3 | 20m | 7d ago | 7m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 18.97% | 18.97% | 45.59% | 45.59% | 530 ms | → 1.00x | 0 | — | — | 8m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 18.97% | 18.97% | 76.99% | 76.99% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 18.97% | 18.97% | 22.32% | 22.32% | 642 ms | → 1.00x | 1 | 0s | 29d ago | 7m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 18.97% | 18.97% | 81.34% | 81.34% | 1817 ms | → 1.00x | 1 | 3h | 7d ago | 8m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 18.97% | 18.97% | 39.57% | 39.57% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 18.97% | 18.97% | 23.09% | 23.09% | 1305 ms | → 1.00x | 7 | 9m | 9d ago | 7m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 18.97% | 18.97% | 82.46% | 82.46% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 18.97% | 18.97% | 92.62% | 92.62% | — | → 1.00x | 1 | 26d 21h | 30d ago | 7m ago |
| [Mine](https://lmspeed.net/provider/mine) | 18.97% | 18.97% | 23.25% | 23.25% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 18.97% | 18.97% | 86.17% | 86.17% | 714 ms | → 1.00x | 1 | 10s | 9d ago | 7m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 18.97% | 18.97% | 49.10% | 49.10% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 18.97% | 18.97% | 86.30% | 86.30% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 18.97% | 18.97% | 99.12% | 99.12% | 4334 ms | → 1.00x | 6 | 2h | 3d ago | 7m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 18.97% | 18.97% | 99.77% | 99.77% | 2575 ms | → 1.00x | 0 | — | — | 7m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 18.97% | 18.97% | 45.98% | 45.98% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 18.97% | 18.97% | 83.68% | 83.68% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 18.97% | 18.97% | 75.88% | 75.88% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 18.97% | 18.97% | 68.72% | 68.72% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 18.97% | 18.97% | 54.28% | 54.28% | — | → 1.00x | 1 | 27d 1h | 30d ago | 8m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 18.97% | 18.97% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 13d 6h | 4d ago | 7m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 18.97% | 18.97% | 63.55% | 63.55% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 18.97% | 18.97% | 23.11% | 23.11% | 794 ms | → 1.00x | 0 | — | — | 7m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 18.97% | 18.97% | 62.64% | 62.64% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 18.97% | 18.97% | 5.08% | 5.08% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 18.97% | 18.97% | 99.53% | 99.53% | 1376 ms | → 1.00x | 0 | — | — | 8m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 18.97% | 18.97% | 21.71% | 21.71% | 2597 ms | → 1.00x | 55 | 1h 16m | 3d ago | 7m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 18.97% | 18.97% | 46.30% | 46.30% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [xAI](https://lmspeed.net/provider/xai) | 18.97% | 18.97% | 23.13% | 23.13% | 1866 ms | → 1.00x | 0 | — | — | 7m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 18.97% | 18.97% | 38.37% | 38.37% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 18.97% | 18.97% | 99.17% | 99.17% | 1182 ms | → 1.00x | 0 | — | — | 7m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 18.97% | 18.97% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 18.52% | 18.52% | 100.00% | 100.00% | 807 ms | → 1.00x | 0 | — | — | 4m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 18.52% | 18.52% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 16d ago | 5m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 17.86% | 17.86% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 13d ago | 6m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 17.86% | 17.86% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 17.86% | 17.86% | 23.40% | 23.40% | 3522 ms | → 1.00x | 94 | 13m | 6d ago | 6m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 16.67% | 16.67% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 16d ago | 5m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 16.67% | 16.67% | 99.65% | 99.65% | 1146 ms | → 1.00x | 3 | 20m | 5d ago | 5m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 16.67% | 16.67% | 99.75% | 99.75% | 1272 ms | → 1.00x | 3 | 0s | 4d ago | 4m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 16.67% | 16.67% | 76.21% | 76.21% | — | → 1.00x | 4 | 5d 3h | 23d ago | 5m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 16.67% | 16.67% | 99.73% | 99.73% | 788 ms | → 1.00x | 1 | 2h 60m | 4d ago | 5m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 16.67% | 16.67% | 100.00% | 100.00% | 673 ms | → 1.00x | 0 | — | — | 5m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 16.67% | 16.67% | 98.70% | 98.70% | 1673 ms | → 1.00x | 14 | 0s | 13d ago | 5m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 16.67% | 16.67% | 75.41% | 75.41% | 4996 ms | → 1.00x | 232 | 1h 17m | 3d ago | 5m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 16.67% | 16.67% | 100.00% | 100.00% | 1784 ms | → 1.00x | 0 | — | — | 4m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 16.67% | 16.67% | 98.40% | 98.40% | 988 ms | → 1.00x | 4 | 15m | 28d ago | 5m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 16.67% | 16.67% | 83.84% | 83.84% | 1182 ms | → 1.00x | 8 | 17m | 8d ago | 5m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 16.67% | 16.67% | 91.99% | 91.99% | 1135 ms | → 1.00x | 0 | — | — | 5m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 16.67% | 16.67% | 98.05% | 98.05% | 505 ms | → 1.00x | 3 | 0s | 4d ago | 5m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 16.67% | 16.67% | 98.92% | 98.92% | 632 ms | → 1.00x | 3 | 1h 40m | 5d ago | 5m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 16.67% | 16.67% | 16.44% | 16.44% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 16.67% | 16.67% | 99.94% | 99.94% | 2284 ms | → 1.00x | 1 | 21m | 18d ago | 5m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 16.67% | 16.67% | 99.29% | 99.29% | 1712 ms | → 1.00x | 1 | 2h 37m | 22d ago | 5m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 16.67% | 16.67% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 16.67% | 16.67% | 100.00% | 100.00% | 1026 ms | → 1.00x | 0 | — | — | 4m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 16.67% | 16.67% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 16.67% | 16.67% | 100.00% | 100.00% | 1130 ms | → 1.00x | 0 | — | — | 5m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 16.67% | 16.67% | 99.60% | 99.60% | 2585 ms | → 1.00x | 1 | 0s | 26d ago | 5m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 16.67% | 16.67% | 3.80% | 3.80% | — | → 1.00x | 1 | 27d 1h | 30d ago | 5m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 16.07% | 16.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 16.07% | 16.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 7m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 16.07% | 16.07% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | 6m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 15.52% | 15.52% | 32.96% | 32.96% | 889 ms | → 1.00x | 0 | — | — | 7m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 5m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 4m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 81.82% | 81.82% | 0.00% | 0.00% | — | → 1.00x | 1 | 27d 1h | 30d ago | — |

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
