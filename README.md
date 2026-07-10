# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**688 providers** — 0 🟢 operational · 0 🟡 degraded · 686 🔴 down · 2 ⚫ unknown

_Updated 2026-07-10 06:49 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (0)</strong></summary>

_none_

</details>

<details open>
<summary><strong>🟡 Degraded (0)</strong></summary>

_none_

</details>

<details open>
<summary><strong>🔴 Down (686)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 68.75% | 68.75% | 64.35% | 64.35% | — | → 1.00x | 4 | 4d 13h | 19d ago | 49m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 56.25% | 56.25% | 98.47% | 98.47% | 765 ms | → 1.00x | 0 | — | — | 49m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 56.25% | 56.25% | 99.82% | 99.82% | 1123 ms | → 1.00x | 2 | 2m | 5d ago | 49m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 56.25% | 56.25% | 76.22% | 76.22% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 56.25% | 56.25% | 94.26% | 94.26% | 644 ms | → 1.00x | 0 | — | — | 49m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 56.25% | 56.25% | 63.31% | 63.31% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 56.25% | 56.25% | 74.11% | 74.11% | 890 ms | → 1.00x | 6 | 1h 20m | 3d ago | 49m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 56.25% | 56.25% | 24.43% | 24.43% | 3191 ms | → 1.00x | 2 | 0s | 30d ago | 49m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 56.25% | 56.25% | 97.57% | 97.57% | 2728 ms | → 1.00x | 0 | — | — | 49m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 56.25% | 56.25% | 59.84% | 59.84% | 2070 ms | → 1.00x | 2 | 60m | 2d ago | 49m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 56.25% | 56.25% | 68.13% | 68.13% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 56.25% | 56.25% | 99.45% | 99.45% | 792 ms | → 1.00x | 2 | 3h 1m | 8d ago | 49m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 56.25% | 56.25% | 36.20% | 36.20% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 56.25% | 56.25% | 97.94% | 97.94% | 2300 ms | → 1.00x | 2 | 30m | 6d ago | 49m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 56.25% | 56.25% | 70.78% | 70.78% | 732 ms | → 1.00x | 3 | 9d 13h | 1d ago | 49m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 56.25% | 56.25% | 99.61% | 99.61% | 779 ms | → 1.00x | 4 | 35m | 18d ago | 49m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 56.25% | 56.25% | 52.44% | 52.44% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 56.25% | 56.25% | 5.20% | 5.20% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 56.25% | 56.25% | 98.73% | 98.73% | 922 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 56.25% | 56.25% | 98.89% | 98.89% | 1749 ms | → 1.00x | 1 | 0s | 11d ago | 50m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 56.25% | 56.25% | 99.61% | 99.61% | 3126 ms | → 1.00x | 0 | — | — | 50m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 56.25% | 56.25% | 10.24% | 10.24% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 56.25% | 56.25% | 88.73% | 88.73% | — | → 1.00x | 1 | 13d 1h | 14d ago | 49m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 56.25% | 56.25% | 95.85% | 95.85% | 1839 ms | → 1.00x | 0 | — | — | 49m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 56.25% | 56.25% | 99.82% | 99.82% | 2293 ms | → 1.00x | 1 | 7h | 2d ago | 49m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 56.25% | 56.25% | 47.31% | 47.31% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 56.25% | 56.25% | 98.02% | 98.02% | 2093 ms | → 1.00x | 0 | — | — | 49m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 56.25% | 56.25% | 97.07% | 97.07% | 928 ms | → 1.00x | 2 | 1d 2h | 14d ago | 49m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 56.25% | 56.25% | 73.96% | 73.96% | — | → 1.00x | 8 | 2d 20h | 24d ago | 49m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 56.25% | 56.25% | 74.22% | 74.22% | — | → 1.00x | 33 | 4h 58m | 8d ago | 49m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 56.25% | 56.25% | 3.13% | 3.13% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 56.25% | 56.25% | 93.57% | 93.57% | 2506 ms | → 1.00x | 2 | 27m | 7d ago | 50m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 56.25% | 56.25% | 99.95% | 99.95% | 2147 ms | → 1.00x | 1 | 0s | 21d ago | 49m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 56.25% | 56.25% | 95.25% | 95.25% | 1431 ms | → 1.00x | 20 | 1h 46m | 3d ago | 49m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 56.25% | 56.25% | 79.86% | 79.86% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 56.25% | 56.25% | 98.81% | 98.81% | 1019 ms | → 1.00x | 0 | — | — | 49m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 56.25% | 56.25% | 97.00% | 97.00% | 1139 ms | → 1.00x | 4 | 1h 51m | 4d ago | 49m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 56.25% | 56.25% | 96.89% | 96.89% | 2080 ms | → 1.00x | 8 | 1h 28m | 2d ago | 49m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 56.25% | 56.25% | 64.61% | 64.61% | 2452 ms | → 1.00x | 3 | 5d 2h | 9d ago | 49m ago |
| [PawsAI](https://lmspeed.net/provider/ai-furry-edu-gr) | 56.25% | 56.25% | 99.34% | 99.34% | 692 ms | → 1.00x | 2 | 0s | 3d ago | 49m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 56.25% | 56.25% | 99.08% | 99.08% | 628 ms | → 1.00x | 0 | — | — | 49m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 56.25% | 56.25% | 40.15% | 40.15% | 477 ms | → 1.00x | 0 | — | — | 49m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 56.25% | 56.25% | 100.00% | 100.00% | 1331 ms | → 1.00x | 0 | — | — | 49m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 56.25% | 56.25% | 99.87% | 99.87% | 1148 ms | → 1.00x | 1 | 0s | 14d ago | 49m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 56.25% | 56.25% | 97.21% | 97.21% | 2460 ms | → 1.00x | 0 | — | — | 49m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 56.25% | 56.25% | 76.64% | 76.64% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 56.25% | 56.25% | 98.92% | 98.92% | 1243 ms | → 1.00x | 0 | — | — | 49m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 56.25% | 56.25% | 33.64% | 33.64% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 56.25% | 56.25% | 66.05% | 66.05% | 4373 ms | → 1.00x | 8 | 17h 6m | 6d ago | 49m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 56.25% | 56.25% | 99.97% | 99.97% | 863 ms | → 1.00x | 0 | — | — | 49m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 56.25% | 56.25% | 97.03% | 97.03% | 489 ms | → 1.00x | 2 | 0s | 21d ago | 49m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 56.25% | 56.25% | 88.70% | 88.70% | 1698 ms | → 1.00x | 1 | 6h | 1d ago | 49m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 56.25% | 56.25% | 99.94% | 99.94% | 1433 ms | → 1.00x | 1 | 0s | 19d ago | 49m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 56.25% | 56.25% | 99.65% | 99.65% | 1438 ms | → 1.00x | 4 | 45m | 3d ago | 49m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 56.25% | 56.25% | 98.56% | 98.56% | 2389 ms | → 1.00x | 0 | — | — | 49m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 56.25% | 56.25% | 90.14% | 90.14% | — | → 1.00x | 2 | 6d 17h | 14d ago | 49m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 56.25% | 56.25% | 80.20% | 80.20% | 1363 ms | → 1.00x | 4 | 0s | 3d ago | 49m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 56.25% | 56.25% | 99.67% | 99.67% | 1208 ms | → 1.00x | 2 | 29m | 25d ago | 49m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 56.25% | 56.25% | 85.33% | 85.33% | 1209 ms | → 1.00x | 95 | 33m | 3d ago | 49m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 56.25% | 56.25% | 99.95% | 99.95% | 876 ms | → 1.00x | 1 | 0s | 27d ago | 49m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 56.25% | 56.25% | 83.18% | 83.18% | 1692 ms | → 1.00x | 5 | 41s | 7d ago | 49m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 56.25% | 56.25% | 83.66% | 83.66% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 56.25% | 56.25% | 97.90% | 97.90% | 1297 ms | → 1.00x | 0 | — | — | 49m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 56.25% | 56.25% | 21.09% | 21.09% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 56.25% | 56.25% | 67.23% | 67.23% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 56.25% | 56.25% | 44.62% | 44.62% | 213 ms | → 1.00x | 1 | 28d 9h | 30d ago | 49m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 56.25% | 56.25% | 27.04% | 27.04% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 56.25% | 56.25% | 99.98% | 99.98% | 372 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 56.25% | 56.25% | 84.65% | 84.65% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 56.25% | 56.25% | 94.11% | 94.11% | 2986 ms | → 1.00x | 12 | 7h 28m | 4d ago | 50m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 56.25% | 56.25% | 99.76% | 99.76% | 3460 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 56.25% | 56.25% | 99.10% | 99.10% | 268 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 56.25% | 56.25% | 99.02% | 99.02% | 3943 ms | → 1.00x | 5 | 0s | 11d ago | 49m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 56.25% | 56.25% | 97.98% | 97.98% | 3226 ms | → 1.00x | 0 | — | — | 49m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 56.25% | 56.25% | 75.27% | 75.27% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 56.25% | 56.25% | 57.88% | 57.88% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 56.25% | 56.25% | 99.64% | 99.64% | 1633 ms | → 1.00x | 2 | 3h 20m | 21d ago | 49m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 56.25% | 56.25% | 70.96% | 70.96% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 21h | 30d ago | 50m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 56.25% | 56.25% | 19.82% | 19.82% | — | → 1.00x | 5 | 1d 14h | 9d ago | 49m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 56.25% | 56.25% | 96.69% | 96.69% | 679 ms | → 1.00x | 0 | — | — | 49m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 56.25% | 56.25% | 83.11% | 83.11% | 348 ms | → 1.00x | 2 | 2d 24h | 6d ago | 49m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 56.25% | 56.25% | 13.15% | 13.15% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 56.25% | 56.25% | 100.00% | 100.00% | 845 ms | → 1.00x | 0 | — | — | 49m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 56.25% | 56.25% | 44.49% | 44.49% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 56.25% | 56.25% | 87.39% | 87.39% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 56.25% | 56.25% | 30.30% | 30.30% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 56.25% | 56.25% | 100.00% | 100.00% | 543 ms | → 1.00x | 0 | — | — | 49m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 56.25% | 56.25% | 99.75% | 99.75% | 1268 ms | → 1.00x | 3 | 0s | 2d ago | 49m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 56.25% | 56.25% | 68.70% | 68.70% | — | → 1.00x | 1 | 25d 22h | 27d ago | 49m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 56.25% | 56.25% | 99.10% | 99.10% | 2585 ms | → 1.00x | 1 | 0s | 22d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 56.25% | 56.25% | 99.87% | 99.87% | 1262 ms | → 1.00x | 0 | — | — | 49m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 56.25% | 56.25% | 98.75% | 98.75% | 1070 ms | → 1.00x | 8 | 17s | 6d ago | 49m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 56.25% | 56.25% | 78.14% | 78.14% | 1617 ms | → 1.00x | 96 | 5h 43m | 2d ago | 49m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 56.25% | 56.25% | 98.15% | 98.15% | — | → 1.00x | 2 | 4d | 9d ago | 49m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 56.25% | 56.25% | 99.88% | 99.88% | 1222 ms | → 1.00x | 0 | — | — | 49m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 56.25% | 56.25% | 99.33% | 99.33% | 245 ms | → 1.00x | 9 | 2m | 10d ago | 49m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 56.25% | 56.25% | 31.33% | 31.33% | — | → 1.00x | 3 | 8d 13h | 27d ago | 49m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 56.25% | 56.25% | 91.90% | 91.90% | 695 ms | → 1.00x | 20 | 1h 59m | 14d ago | 49m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 56.25% | 56.25% | 99.85% | 99.85% | 2935 ms | → 1.00x | 0 | — | — | 49m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 56.25% | 56.25% | 78.64% | 78.64% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 56.25% | 56.25% | 97.75% | 97.75% | 2692 ms | → 1.00x | 4 | 0s | 2d ago | 49m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 56.25% | 56.25% | 99.74% | 99.74% | 916 ms | → 1.00x | 0 | — | — | 49m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 56.25% | 56.25% | 99.93% | 99.93% | 1163 ms | → 1.00x | 1 | 0s | 2d ago | 49m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 56.25% | 56.25% | 3.12% | 3.12% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 56.25% | 56.25% | 32.40% | 32.40% | 1154 ms | → 1.00x | 2 | 2d 6h | 5d ago | 49m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 56.25% | 56.25% | 76.21% | 76.21% | — | → 1.00x | 6 | 3d 11h | 21d ago | 49m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 56.25% | 56.25% | 96.80% | 96.80% | 1654 ms | → 1.00x | 1 | 0s | 19d ago | 49m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 56.25% | 56.25% | 22.30% | 22.30% | 3275 ms | → 1.00x | 21 | 0s | 3d ago | 49m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 56.25% | 56.25% | 72.40% | 72.40% | — | → 1.00x | 1 | 24d 1h | 25d ago | 49m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 56.25% | 56.25% | 77.28% | 77.28% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 56.25% | 56.25% | 0.11% | 0.11% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 56.25% | 56.25% | 93.61% | 93.61% | 834 ms | → 1.00x | 69 | 12m | 3d ago | 49m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 56.25% | 56.25% | 48.90% | 48.90% | — | → 1.00x | 6 | 4d 19h | 12d ago | 49m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 56.25% | 56.25% | 98.11% | 98.11% | 3232 ms | → 1.00x | 0 | — | — | 49m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 56.25% | 56.25% | 24.52% | 24.52% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 56.25% | 56.25% | 90.67% | 90.67% | 1302 ms | → 1.00x | 2 | 1d 21h | 5d ago | 49m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 56.25% | 56.25% | 47.85% | 47.85% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 56.25% | 56.25% | 100.00% | 100.00% | 941 ms | → 1.00x | 0 | — | — | 49m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 56.25% | 56.25% | 100.00% | 100.00% | 641 ms | → 1.00x | 0 | — | — | 49m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 56.25% | 56.25% | 31.88% | 31.88% | — | → 1.00x | 3 | 6d 18h | 10d ago | 49m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 56.25% | 56.25% | 97.57% | 97.57% | 2069 ms | → 1.00x | 7 | 0s | 4d ago | 49m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 56.25% | 56.25% | 99.73% | 99.73% | 755 ms | → 1.00x | 2 | 1h 30m | 2d ago | 49m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 56.25% | 56.25% | 97.00% | 97.00% | 511 ms | → 1.00x | 0 | — | — | 49m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 56.25% | 56.25% | 98.37% | 98.37% | 1753 ms | → 1.00x | 3 | 3m | 5d ago | 49m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 56.25% | 56.25% | 1.90% | 1.90% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 56.25% | 56.25% | 100.00% | 100.00% | 695 ms | → 1.00x | 0 | — | — | 49m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 56.25% | 56.25% | 57.00% | 57.00% | 742 ms | → 1.00x | 0 | — | — | 49m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 56.25% | 56.25% | 98.72% | 98.72% | 701 ms | → 1.00x | 2 | 4h 33m | 29d ago | 49m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 56.25% | 56.25% | 84.44% | 84.44% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 56.25% | 56.25% | 32.34% | 32.34% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 56.25% | 56.25% | 64.69% | 64.69% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 56.25% | 56.25% | 99.61% | 99.61% | 3113 ms | → 1.00x | 5 | 0s | 1d ago | 49m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 56.25% | 56.25% | 46.41% | 46.41% | 74 ms | → 1.00x | 2 | 8d 8h | 2d ago | 49m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 56.25% | 56.25% | 99.98% | 99.98% | 914 ms | → 1.00x | 0 | — | — | 49m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 56.25% | 56.25% | 99.65% | 99.65% | 2749 ms | → 1.00x | 0 | — | — | 49m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 56.25% | 56.25% | 87.87% | 87.87% | 843 ms | → 1.00x | 4 | 8m | 14d ago | 49m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 56.25% | 56.25% | 66.50% | 66.50% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 56.25% | 56.25% | 97.28% | 97.28% | 1079 ms | → 1.00x | 0 | — | — | 49m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 56.25% | 56.25% | 99.09% | 99.09% | 1375 ms | → 1.00x | 2 | 10m | 13d ago | 49m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 56.25% | 56.25% | 99.18% | 99.18% | 768 ms | → 1.00x | 1 | 0s | 27d ago | 49m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 56.25% | 56.25% | 50.25% | 50.25% | 1857 ms | → 1.00x | 8 | 1h 3m | 17d ago | 49m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 56.25% | 56.25% | 92.56% | 92.56% | 4806 ms | → 1.00x | 22 | 28m | 2d ago | 49m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 56.25% | 56.25% | 96.06% | 96.06% | 1588 ms | → 1.00x | 7 | 12h 56m | 4d ago | 49m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 56.25% | 56.25% | 69.29% | 69.29% | — | → 1.00x | 3 | 8d 13h | 27d ago | 49m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 56.25% | 56.25% | 84.58% | 84.58% | 2030 ms | → 1.00x | 0 | — | — | 49m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 56.25% | 56.25% | 68.50% | 68.50% | 1158 ms | → 1.00x | 2 | 10m | 20d ago | 49m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 56.25% | 56.25% | 39.40% | 39.40% | — | → 1.00x | 3 | 6d 1h | 19d ago | 49m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 56.25% | 56.25% | 100.00% | 100.00% | 1107 ms | → 1.00x | 0 | — | — | 49m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 56.25% | 56.25% | 98.85% | 98.85% | 1868 ms | → 1.00x | 0 | — | — | 49m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 56.25% | 56.25% | 99.97% | 99.97% | 2994 ms | → 1.00x | 0 | — | — | 49m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 56.25% | 56.25% | 26.33% | 26.33% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 56.25% | 56.25% | 93.54% | 93.54% | 3996 ms | → 1.00x | 24 | 3m | 4d ago | 49m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 56.25% | 56.25% | 93.26% | 93.26% | 537 ms | → 1.00x | 0 | — | — | 49m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 56.25% | 56.25% | 98.70% | 98.70% | 1724 ms | → 1.00x | 18 | 0s | 12d ago | 49m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 56.25% | 56.25% | 98.83% | 98.83% | 1140 ms | → 1.00x | 0 | — | — | 49m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 56.25% | 56.25% | 99.86% | 99.86% | 656 ms | → 1.00x | 0 | — | — | 49m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 56.25% | 56.25% | 99.51% | 99.51% | 660 ms | → 1.00x | 0 | — | — | 49m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 56.25% | 56.25% | 97.23% | 97.23% | 4316 ms | → 1.00x | 33 | 3m | 4d ago | 49m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 56.25% | 56.25% | 50.43% | 50.43% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 56.25% | 56.25% | 43.99% | 43.99% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 56.25% | 56.25% | 75.41% | 75.41% | 4996 ms | → 1.00x | 233 | 1h 17m | 1d ago | 49m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 56.25% | 56.25% | 99.92% | 99.92% | 808 ms | → 1.00x | 1 | 0s | 16d ago | 49m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 56.25% | 56.25% | 98.16% | 98.16% | 3205 ms | → 1.00x | 1 | 0s | 30d ago | 49m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 56.25% | 56.25% | 22.07% | 22.07% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 56.25% | 56.25% | 90.79% | 90.79% | 1155 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 56.25% | 56.25% | 50.15% | 50.15% | 870 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 56.25% | 56.25% | 68.41% | 68.41% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 56.25% | 56.25% | 99.85% | 99.85% | 1271 ms | → 1.00x | 1 | 3m | 3d ago | 49m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 56.25% | 56.25% | 77.97% | 77.97% | 860 ms | → 1.00x | 1 | 0s | 2d ago | 49m ago |
| [小老鼠的奶酪工坊-酒馆聊天api](https://lmspeed.net/provider/api-tniay-top) | 56.25% | 56.25% | 96.87% | 96.87% | 1100 ms | → 1.00x | 1 | 2h 1m | 22d ago | 49m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 56.25% | 56.25% | 56.98% | 56.98% | 1376 ms | → 1.00x | 8 | 0s | 16d ago | 49m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 56.25% | 56.25% | 100.00% | 100.00% | 900 ms | → 1.00x | 0 | — | — | 49m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 56.25% | 56.25% | 69.01% | 69.01% | 4269 ms | → 1.00x | 14 | 8m | 14d ago | 49m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 56.25% | 56.25% | 98.37% | 98.37% | 2526 ms | → 1.00x | 0 | — | — | 49m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 56.25% | 56.25% | 54.70% | 54.70% | 831 ms | → 1.00x | 2 | 0s | 20d ago | 49m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 56.25% | 56.25% | 32.48% | 32.48% | — | → 1.00x | 2 | 6d 20h | 11d ago | 49m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 56.25% | 56.25% | 38.65% | 38.65% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 56.25% | 56.25% | 100.00% | 100.00% | 747 ms | → 1.00x | 0 | — | — | 49m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 56.25% | 56.25% | 99.98% | 99.98% | 1238 ms | → 1.00x | 0 | — | — | 49m ago |
| [WorldRouter API](https://lmspeed.net/provider/api-worldrouter-cc) | 56.25% | 56.25% | 100.00% | 100.00% | 987 ms | → 1.00x | 0 | — | — | 49m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 56.25% | 56.25% | 99.85% | 99.85% | 1417 ms | → 1.00x | 2 | 0s | 22d ago | 49m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 56.25% | 56.25% | 83.46% | 83.46% | 1860 ms | → 1.00x | 2 | 0s | 3d ago | 49m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 56.25% | 56.25% | 64.92% | 64.92% | 528 ms | → 1.00x | 2 | 0s | 20d ago | 49m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 56.25% | 56.25% | 98.12% | 98.12% | 2689 ms | → 1.00x | 0 | — | — | 49m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 56.25% | 56.25% | 97.74% | 97.74% | 3400 ms | → 1.00x | 10 | 1h 54m | 2d ago | 49m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 56.25% | 56.25% | 99.89% | 99.89% | 1771 ms | → 1.00x | 0 | — | — | 49m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 56.25% | 56.25% | 98.45% | 98.45% | 3774 ms | → 1.00x | 47 | 1m | 3d ago | 49m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 56.25% | 56.25% | 99.34% | 99.34% | 2314 ms | → 1.00x | 3 | 8h 57m | 25d ago | 49m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 56.25% | 56.25% | 62.65% | 62.65% | 1293 ms | → 1.00x | 0 | — | — | 49m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 56.25% | 56.25% | 65.57% | 65.57% | 941 ms | → 1.00x | 0 | — | — | 49m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 56.25% | 56.25% | 99.89% | 99.89% | 986 ms | → 1.00x | 1 | 1h 9m | 24d ago | 49m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 56.25% | 56.25% | 99.27% | 99.27% | 1703 ms | → 1.00x | 0 | — | — | 49m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 56.25% | 56.25% | 90.95% | 90.95% | 1769 ms | → 1.00x | 3 | 0s | 9d ago | 49m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 56.25% | 56.25% | 48.30% | 48.30% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 56.25% | 56.25% | 99.83% | 99.83% | 1391 ms | → 1.00x | 0 | — | — | 49m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 56.25% | 56.25% | 99.61% | 99.61% | 506 ms | → 1.00x | 0 | — | — | 49m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 56.25% | 56.25% | 0.11% | 0.11% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 56.25% | 56.25% | 98.00% | 98.00% | 784 ms | → 1.00x | 1 | 12h 2m | 25d ago | 49m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 56.25% | 56.25% | 91.43% | 91.43% | 2187 ms | → 1.00x | 2 | 14h 55m | 28d ago | 49m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 56.25% | 56.25% | 22.94% | 22.94% | 884 ms | → 1.00x | 1 | 0s | 17d ago | 49m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 56.25% | 56.25% | 46.73% | 46.73% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 56.25% | 56.25% | 21.32% | 21.32% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 56.25% | 56.25% | 99.74% | 99.74% | 1617 ms | → 1.00x | 1 | 4s | 4d ago | 49m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 56.25% | 56.25% | 100.00% | 100.00% | 1281 ms | → 1.00x | 0 | — | — | 49m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 56.25% | 56.25% | 91.98% | 91.98% | 2439 ms | → 1.00x | 22 | 14s | 3d ago | 50m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 56.25% | 56.25% | 99.09% | 99.09% | 2692 ms | → 1.00x | 0 | — | — | 49m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 56.25% | 56.25% | 99.49% | 99.49% | 3282 ms | → 1.00x | 3 | 9h 27m | 13d ago | 50m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 56.25% | 56.25% | 98.29% | 98.29% | 2956 ms | → 1.00x | 0 | — | — | 50m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 56.25% | 56.25% | 4.63% | 4.63% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 56.25% | 56.25% | 60.67% | 60.67% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 56.25% | 56.25% | 99.90% | 99.90% | 768 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 56.25% | 56.25% | 77.59% | 77.59% | 2259 ms | → 1.00x | 0 | — | — | 49m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 56.25% | 56.25% | 99.92% | 99.92% | 1044 ms | → 1.00x | 1 | 0s | 15d ago | 49m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 56.25% | 56.25% | 75.23% | 75.23% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 56.25% | 56.25% | 68.44% | 68.44% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 56.25% | 56.25% | 100.00% | 100.00% | 2489 ms | → 1.00x | 0 | — | — | 49m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 56.25% | 56.25% | 98.40% | 98.40% | 919 ms | → 1.00x | 7 | 8m | 26d ago | 49m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 56.25% | 56.25% | 99.70% | 99.70% | 1335 ms | → 1.00x | 0 | — | — | 49m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 56.25% | 56.25% | 99.95% | 99.95% | 1530 ms | → 1.00x | 0 | — | — | 50m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 56.25% | 56.25% | 99.74% | 99.74% | 586 ms | → 1.00x | 0 | — | — | 50m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 56.25% | 56.25% | 99.65% | 99.65% | 1481 ms | → 1.00x | 0 | — | — | 49m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 56.25% | 56.25% | 5.52% | 5.52% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 56.25% | 56.25% | 90.32% | 90.32% | 912 ms | → 1.00x | 0 | — | — | 49m ago |
| [CKey API](https://lmspeed.net/provider/ckey-vn) | 56.25% | 56.25% | 99.67% | 99.67% | 1286 ms | → 1.00x | 1 | 0s | 4d ago | 49m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 56.25% | 56.25% | 81.13% | 81.13% | 1566 ms | → 1.00x | 3 | 20m | 15d ago | 49m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 56.25% | 56.25% | 73.53% | 73.53% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 56.25% | 56.25% | 74.18% | 74.18% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 56.25% | 56.25% | 28.39% | 28.39% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 56.25% | 56.25% | 99.84% | 99.84% | 1022 ms | → 1.00x | 0 | — | — | 49m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 56.25% | 56.25% | 100.00% | 100.00% | 830 ms | → 1.00x | 0 | — | — | 49m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 56.25% | 56.25% | 99.89% | 99.89% | 939 ms | → 1.00x | 3 | 59s | 4d ago | 49m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 56.25% | 56.25% | 86.85% | 86.85% | 2165 ms | → 1.00x | 0 | — | — | 49m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 56.25% | 56.25% | 100.00% | 100.00% | 1225 ms | → 1.00x | 0 | — | — | 49m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 56.25% | 56.25% | 100.00% | 100.00% | 1840 ms | → 1.00x | 0 | — | — | 49m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 56.25% | 56.25% | 99.09% | 99.09% | 400 ms | → 1.00x | 0 | — | — | 49m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 56.25% | 56.25% | 83.98% | 83.98% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 56.25% | 56.25% | 97.80% | 97.80% | 1785 ms | → 1.00x | 0 | — | — | 49m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 56.25% | 56.25% | 26.43% | 26.43% | 2319 ms | → 1.00x | 1 | 19d 6h | 30d ago | 49m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 56.25% | 56.25% | 20.14% | 20.14% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 56.25% | 56.25% | 99.94% | 99.94% | 1251 ms | → 1.00x | 0 | — | — | 49m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 56.25% | 56.25% | 99.94% | 99.94% | 1537 ms | → 1.00x | 1 | 0s | 26d ago | 49m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 56.25% | 56.25% | 99.95% | 99.95% | 838 ms | → 1.00x | 0 | — | — | 49m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 56.25% | 56.25% | 48.81% | 48.81% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 56.25% | 56.25% | 100.00% | 100.00% | 1504 ms | → 1.00x | 0 | — | — | 49m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 56.25% | 56.25% | 83.92% | 83.92% | — | → 1.00x | 1 | 19d 16h | 21d ago | 49m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 56.25% | 56.25% | 16.67% | 16.67% | — | → 1.00x | 2 | 12d 13h | 26d ago | 49m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 56.25% | 56.25% | 67.73% | 67.73% | — | → 1.00x | 3 | 8d 13h | 27d ago | 49m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 56.25% | 56.25% | 83.84% | 83.84% | 1165 ms | → 1.00x | 8 | 17m | 6d ago | 49m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 56.25% | 56.25% | 78.42% | 78.42% | — | → 1.00x | 3 | 6d 14h | 21d ago | 49m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 56.25% | 56.25% | 74.74% | 74.74% | — | → 1.00x | 10 | 2d 13h | 27d ago | 49m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 56.25% | 56.25% | 98.16% | 98.16% | 615 ms | → 1.00x | 4 | 0s | 9d ago | 49m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 56.25% | 56.25% | 47.90% | 47.90% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 56.25% | 56.25% | 98.96% | 98.96% | 670 ms | → 1.00x | 1 | 29m | 18d ago | 49m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 56.25% | 56.25% | 14.21% | 14.21% | — | → 1.00x | 8 | 3d 5h | 27d ago | 49m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 56.25% | 56.25% | 99.25% | 99.25% | 1138 ms | → 1.00x | 1 | 0s | 15d ago | 49m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 56.25% | 56.25% | 6.05% | 6.05% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 56.25% | 56.25% | 99.03% | 99.03% | 2500 ms | → 1.00x | 0 | — | — | 49m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 56.25% | 56.25% | 91.99% | 91.99% | 733 ms | → 1.00x | 0 | — | — | 49m ago |
| [Crond](https://lmspeed.net/provider/crond) | 56.25% | 56.25% | 22.80% | 22.80% | 2068 ms | → 1.00x | 5 | 6m | 12d ago | 49m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 56.25% | 56.25% | 98.05% | 98.05% | 508 ms | → 1.00x | 3 | 0s | 2d ago | 49m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 56.25% | 56.25% | 55.75% | 55.75% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 56.25% | 56.25% | 50.52% | 50.52% | 2181 ms | → 1.00x | 149 | 3h 40m | 2d ago | 50m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 56.25% | 56.25% | 99.85% | 99.85% | 950 ms | → 1.00x | 0 | — | — | 49m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 56.25% | 56.25% | 78.01% | 78.01% | 3028 ms | → 1.00x | 78 | 1h 54m | 3d ago | 50m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 56.25% | 56.25% | 98.92% | 98.92% | 941 ms | → 1.00x | 3 | 1h 40m | 3d ago | 49m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 56.25% | 56.25% | 99.92% | 99.92% | 835 ms | → 1.00x | 0 | — | — | 49m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 56.25% | 56.25% | 26.84% | 26.84% | 1649 ms | → 1.00x | 0 | — | — | 49m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 56.25% | 56.25% | 99.98% | 99.98% | 822 ms | → 1.00x | 1 | 4m | 7d ago | 50m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 56.25% | 56.25% | 43.20% | 43.20% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 56.25% | 56.25% | 99.85% | 99.85% | 2033 ms | → 1.00x | 0 | — | — | 50m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 56.25% | 56.25% | 98.81% | 98.81% | 171 ms | → 1.00x | 4 | 38m | 16d ago | 49m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 56.25% | 56.25% | 99.94% | 99.94% | 731 ms | → 1.00x | 0 | — | — | 49m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 56.25% | 56.25% | 16.44% | 16.44% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 56.25% | 56.25% | 39.16% | 39.16% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 56.25% | 56.25% | 74.31% | 74.31% | — | → 1.00x | 3 | 8d 5h | 26d ago | 50m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 56.25% | 56.25% | 98.43% | 98.43% | 1136 ms | → 1.00x | 1 | 0s | 22d ago | 49m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 56.25% | 56.25% | 20.55% | 20.55% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 56.25% | 56.25% | 99.74% | 99.74% | 2379 ms | → 1.00x | 2 | 0s | 17d ago | 49m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 56.25% | 56.25% | 98.24% | 98.24% | 1577 ms | → 1.00x | 0 | — | — | 49m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 56.25% | 56.25% | 22.80% | 22.80% | 592 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 56.25% | 56.25% | 99.75% | 99.75% | 400 ms | → 1.00x | 0 | — | — | 50m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 56.25% | 56.25% | 68.59% | 68.59% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 56.25% | 56.25% | 54.39% | 54.39% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 56.25% | 56.25% | 99.77% | 99.77% | 1411 ms | → 1.00x | 0 | — | — | 49m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 56.25% | 56.25% | 75.74% | 75.74% | — | → 1.00x | 1 | 21d 15h | 23d ago | 49m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 56.25% | 56.25% | 35.55% | 35.55% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 56.25% | 56.25% | 98.92% | 98.92% | 4146 ms | → 1.00x | 1 | 0s | 7d ago | 50m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 56.25% | 56.25% | 65.91% | 65.91% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 56.25% | 56.25% | 99.92% | 99.92% | 2537 ms | → 1.00x | 0 | — | — | 49m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 56.25% | 56.25% | 99.94% | 99.94% | 2290 ms | → 1.00x | 1 | 21m | 16d ago | 49m ago |
| [FreeModel](https://lmspeed.net/provider/freemodel) | 56.25% | 56.25% | 100.00% | 100.00% | 870 ms | → 1.00x | 0 | — | — | 49m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 56.25% | 56.25% | 99.48% | 99.48% | 505 ms | → 1.00x | 1 | 4m | 6d ago | 49m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 56.25% | 56.25% | 70.74% | 70.74% | 807 ms | → 1.00x | 3 | 9d 13h | 1d ago | 49m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 56.25% | 56.25% | 98.93% | 98.93% | 1404 ms | → 1.00x | 8 | 10m | 7d ago | 49m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 56.25% | 56.25% | 34.00% | 34.00% | 1718 ms | → 1.00x | 3 | 20m | 5d ago | 49m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 56.25% | 56.25% | 62.39% | 62.39% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 56.25% | 56.25% | 34.65% | 34.65% | 1324 ms | → 1.00x | 2 | 3d 2h | 20d ago | 49m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 56.25% | 56.25% | 63.15% | 63.15% | 4520 ms | → 1.00x | 230 | 12m | 3d ago | 49m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 56.25% | 56.25% | 98.00% | 98.00% | 1241 ms | → 1.00x | 6 | 45m | 30d ago | 49m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 56.25% | 56.25% | 99.68% | 99.68% | 2150 ms | → 1.00x | 0 | — | — | 49m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 56.25% | 56.25% | 99.37% | 99.37% | 1794 ms | → 1.00x | 0 | — | — | 49m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 56.25% | 56.25% | 45.59% | 45.59% | 535 ms | → 1.00x | 0 | — | — | 50m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 56.25% | 56.25% | 98.66% | 98.66% | 1173 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 56.25% | 56.25% | 2.34% | 2.34% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 56.25% | 56.25% | 93.06% | 93.06% | 666 ms | → 1.00x | 9 | 7m | 14d ago | 49m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 56.25% | 56.25% | 99.96% | 99.96% | 991 ms | → 1.00x | 0 | — | — | 49m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 56.25% | 56.25% | 76.99% | 76.99% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 56.25% | 56.25% | 99.48% | 99.48% | 2510 ms | → 1.00x | 0 | — | — | 49m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 56.25% | 56.25% | 99.73% | 99.73% | 289 ms | → 1.00x | 10 | 10m | 17d ago | 49m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 56.25% | 56.25% | 99.83% | 99.83% | 1356 ms | → 1.00x | 0 | — | — | 49m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 56.25% | 56.25% | 38.64% | 38.64% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 56.25% | 56.25% | 22.32% | 22.32% | 687 ms | → 1.00x | 1 | 0s | 27d ago | 49m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 56.25% | 56.25% | 99.28% | 99.28% | 632 ms | → 1.00x | 3 | 0s | 3d ago | 50m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 56.25% | 56.25% | 90.53% | 90.53% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 56.25% | 56.25% | 99.88% | 99.88% | 1874 ms | → 1.00x | 0 | — | — | 49m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 56.25% | 56.25% | 99.74% | 99.74% | 1659 ms | → 1.00x | 6 | 1h 5m | 2d ago | 49m ago |
| [Groq](https://lmspeed.net/provider/groq) | 56.25% | 56.25% | 76.97% | 76.97% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 56.25% | 56.25% | 30.20% | 30.20% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 56.25% | 56.25% | 99.71% | 99.71% | 656 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 56.25% | 56.25% | 100.00% | 100.00% | 599 ms | → 1.00x | 0 | — | — | 49m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 56.25% | 56.25% | 91.04% | 91.04% | 888 ms | → 1.00x | 3 | 1d 8h | 5d ago | 49m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 56.25% | 56.25% | 91.09% | 91.09% | 905 ms | → 1.00x | 5 | 0s | 12d ago | 49m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 56.25% | 56.25% | 99.65% | 99.65% | 530 ms | → 1.00x | 0 | — | — | 49m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 56.25% | 56.25% | 96.18% | 96.18% | 2636 ms | → 1.00x | 4 | 41m | 10d ago | 49m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 56.25% | 56.25% | 63.14% | 63.14% | 1245 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 56.25% | 56.25% | 75.11% | 75.11% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 56.25% | 56.25% | 42.69% | 42.69% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 56.25% | 56.25% | 24.91% | 24.91% | 633 ms | → 1.00x | 2 | 0s | 14d ago | 49m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 56.25% | 56.25% | 88.31% | 88.31% | 536 ms | → 1.00x | 4 | 20h 10m | 23d ago | 49m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 56.25% | 56.25% | 17.47% | 17.47% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 56.25% | 56.25% | 39.95% | 39.95% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 56.25% | 56.25% | 66.07% | 66.07% | — | → 1.00x | 1 | 29d | 30d ago | 50m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 56.25% | 56.25% | 84.75% | 84.75% | 1143 ms | → 1.00x | 2 | 1h 1m | 7d ago | 49m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 56.25% | 56.25% | 98.78% | 98.78% | 4147 ms | → 1.00x | 24 | 4s | 7d ago | 50m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 56.25% | 56.25% | 0.10% | 0.10% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 56.25% | 56.25% | 58.17% | 58.17% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 56.25% | 56.25% | 99.78% | 99.78% | 2345 ms | → 1.00x | 0 | — | — | 49m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 56.25% | 56.25% | 98.88% | 98.88% | 1544 ms | → 1.00x | 2 | 2h 55m | 3d ago | 49m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 56.25% | 56.25% | 99.29% | 99.29% | 1716 ms | → 1.00x | 1 | 2h 37m | 20d ago | 49m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 56.25% | 56.25% | 66.42% | 66.42% | 1387 ms | → 1.00x | 1 | 2h 38m | 20d ago | 49m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 56.25% | 56.25% | 24.01% | 24.01% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 56.25% | 56.25% | 89.73% | 89.73% | 1370 ms | → 1.00x | 1 | 0s | 27d ago | 49m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 56.25% | 56.25% | 24.54% | 24.54% | 1317 ms | → 1.00x | 1 | 0s | 24d ago | 49m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 56.25% | 56.25% | 99.00% | 99.00% | 2463 ms | → 1.00x | 1 | 30m | 24d ago | 49m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 56.25% | 56.25% | 81.34% | 81.34% | 1767 ms | → 1.00x | 1 | 3h | 5d ago | 50m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 56.25% | 56.25% | 89.89% | 89.89% | 808 ms | → 1.00x | 3 | 0s | 2d ago | 49m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 56.25% | 56.25% | 73.32% | 73.32% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 56.25% | 56.25% | 99.90% | 99.90% | 649 ms | → 1.00x | 0 | — | — | 49m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 56.25% | 56.25% | 43.48% | 43.48% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 56.25% | 56.25% | 2.87% | 2.87% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 56.25% | 56.25% | 99.92% | 99.92% | 1013 ms | → 1.00x | 0 | — | — | 49m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 56.25% | 56.25% | 99.64% | 99.64% | 906 ms | → 1.00x | 6 | 48m | 5d ago | 49m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 56.25% | 56.25% | 49.45% | 49.45% | 257 ms | → 1.00x | 0 | — | — | 49m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 56.25% | 56.25% | 96.32% | 96.32% | 3773 ms | → 1.00x | 257 | 14m | 4d ago | 49m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 56.25% | 56.25% | 99.62% | 99.62% | 854 ms | → 1.00x | 1 | 0s | 15d ago | 49m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 56.25% | 56.25% | 99.98% | 99.98% | 1167 ms | → 1.00x | 0 | — | — | 49m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 56.25% | 56.25% | 39.57% | 39.57% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 56.25% | 56.25% | 70.89% | 70.89% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 56.25% | 56.25% | 99.93% | 99.93% | 747 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 56.25% | 56.25% | 98.87% | 98.87% | 2448 ms | → 1.00x | 1 | 17h 60m | 21d ago | 49m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 56.25% | 56.25% | 98.69% | 98.69% | 1467 ms | → 1.00x | 0 | — | — | 49m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 56.25% | 56.25% | 40.01% | 40.01% | 1022 ms | → 1.00x | 1 | 20d 21h | 30d ago | 49m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 56.25% | 56.25% | 98.35% | 98.35% | 892 ms | → 1.00x | 1 | 1h 40m | 22d ago | 49m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 56.25% | 56.25% | 96.94% | 96.94% | 1048 ms | → 1.00x | 2 | 0s | 3d ago | 49m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 56.25% | 56.25% | 20.82% | 20.82% | 3329 ms | → 1.00x | 86 | 6m | 1d ago | 49m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 56.25% | 56.25% | 23.09% | 23.09% | 2102 ms | → 1.00x | 7 | 9m | 7d ago | 49m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 56.25% | 56.25% | 71.79% | 71.79% | 1066 ms | → 1.00x | 0 | — | — | 49m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 56.25% | 56.25% | 54.78% | 54.78% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 56.25% | 56.25% | 20.58% | 20.58% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 56.25% | 56.25% | 100.00% | 100.00% | 1208 ms | → 1.00x | 0 | — | — | 49m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 56.25% | 56.25% | 100.00% | 100.00% | 998 ms | → 1.00x | 0 | — | — | 49m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 56.25% | 56.25% | 33.55% | 33.55% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 56.25% | 56.25% | 52.99% | 52.99% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 56.25% | 56.25% | 82.46% | 82.46% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 56.25% | 56.25% | 82.26% | 82.26% | 1751 ms | → 1.00x | 1 | 0s | 30d ago | 49m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 56.25% | 56.25% | 99.80% | 99.80% | 1516 ms | → 1.00x | 0 | — | — | 49m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 56.25% | 56.25% | 92.62% | 92.62% | — | → 1.00x | 1 | 26d 21h | 28d ago | 49m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 56.25% | 56.25% | 99.97% | 99.97% | 1216 ms | → 1.00x | 0 | — | — | 49m ago |
| [Mine](https://lmspeed.net/provider/mine) | 56.25% | 56.25% | 23.25% | 23.25% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 56.25% | 56.25% | 93.16% | 93.16% | 913 ms | → 1.00x | 3 | 17m | 6d ago | 49m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 56.25% | 56.25% | 99.87% | 99.87% | 555 ms | → 1.00x | 0 | — | — | 49m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 56.25% | 56.25% | 38.36% | 38.36% | 1879 ms | → 1.00x | 13 | 3h 54m | 22d ago | 49m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 56.25% | 56.25% | 32.93% | 32.93% | 2580 ms | → 1.00x | 0 | — | — | 49m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 56.25% | 56.25% | 10.72% | 10.72% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 56.25% | 56.25% | 27.77% | 27.77% | 3239 ms | → 1.00x | 193 | 19m | 4d ago | 49m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 56.25% | 56.25% | 86.23% | 86.23% | 2096 ms | → 1.00x | 6 | 0s | 7d ago | 49m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 56.25% | 56.25% | 25.44% | 25.44% | 930 ms | → 1.00x | 4 | 5d 14h | 3d ago | 49m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 56.25% | 56.25% | 22.33% | 22.33% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 56.25% | 56.25% | 56.85% | 56.85% | 1299 ms | → 1.00x | 8 | 2h 1m | 14d ago | 49m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 56.25% | 56.25% | 86.17% | 86.17% | 711 ms | → 1.00x | 1 | 10s | 7d ago | 49m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 56.25% | 56.25% | 91.87% | 91.87% | 551 ms | → 1.00x | 1 | 30m | 12d ago | 49m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 56.25% | 56.25% | 99.35% | 99.35% | 2306 ms | → 1.00x | 0 | — | — | 49m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 56.25% | 56.25% | 98.93% | 98.93% | 2698 ms | → 1.00x | 2 | 0s | 4d ago | 50m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 56.25% | 56.25% | 69.43% | 69.43% | 1191 ms | → 1.00x | 2 | 0s | 16d ago | 49m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 56.25% | 56.25% | 96.88% | 96.88% | 1098 ms | → 1.00x | 0 | — | — | 49m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 56.25% | 56.25% | 99.89% | 99.89% | 1457 ms | → 1.00x | 0 | — | — | 49m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 56.25% | 56.25% | 24.53% | 24.53% | 1812 ms | → 1.00x | 1 | 0s | 17d ago | 49m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 56.25% | 56.25% | 49.10% | 49.10% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 56.25% | 56.25% | 86.30% | 86.30% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 56.25% | 56.25% | 99.77% | 99.77% | 2411 ms | → 1.00x | 0 | — | — | 49m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 56.25% | 56.25% | 97.85% | 97.85% | 710 ms | → 1.00x | 2 | 31m | 19d ago | 49m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 56.25% | 56.25% | 99.94% | 99.94% | 1377 ms | → 1.00x | 1 | 0s | 28d ago | 49m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 56.25% | 56.25% | 100.00% | 100.00% | 3504 ms | → 1.00x | 0 | — | — | 49m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 56.25% | 56.25% | 48.46% | 48.46% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 56.25% | 56.25% | 65.07% | 65.07% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 56.25% | 56.25% | 98.56% | 98.56% | 2167 ms | → 1.00x | 5 | 2h 28m | 12d ago | 49m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 56.25% | 56.25% | 99.12% | 99.12% | 4185 ms | → 1.00x | 6 | 2h | 1d ago | 49m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 56.25% | 56.25% | 60.60% | 60.60% | 1243 ms | → 1.00x | 0 | — | — | 49m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 56.25% | 56.25% | 98.38% | 98.38% | 1650 ms | → 1.00x | 2 | 3h 26m | 14d ago | 49m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 56.25% | 56.25% | 92.19% | 92.19% | — | → 1.00x | 2 | 7d 13h | 16d ago | 49m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 56.25% | 56.25% | 44.99% | 44.99% | 3199 ms | → 1.00x | 0 | — | — | 49m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 56.25% | 56.25% | 7.76% | 7.76% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 56.25% | 56.25% | 96.14% | 96.14% | 2018 ms | → 1.00x | 5 | 8h 24m | 3d ago | 49m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Xinjianya API](https://lmspeed.net/provider/new-xinjianya-top) | 56.25% | 56.25% | 100.00% | 100.00% | 1005 ms | → 1.00x | 0 | — | — | 49m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 56.25% | 56.25% | 99.26% | 99.26% | 2979 ms | → 1.00x | 0 | — | — | 49m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 56.25% | 56.25% | 99.77% | 99.77% | 2705 ms | → 1.00x | 0 | — | — | 49m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 56.25% | 56.25% | 16.23% | 16.23% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 56.25% | 56.25% | 99.89% | 99.89% | 2032 ms | → 1.00x | 0 | — | — | 49m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 56.25% | 56.25% | 69.87% | 69.87% | 1418 ms | → 1.00x | 9 | 0s | 4d ago | 49m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 56.25% | 56.25% | 45.98% | 45.98% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 56.25% | 56.25% | 92.63% | 92.63% | 1955 ms | → 1.00x | 3 | 2h 60m | 1d ago | 49m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 56.25% | 56.25% | 98.92% | 98.92% | 2206 ms | → 1.00x | 10 | 19m | 13d ago | 49m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 56.25% | 56.25% | 46.05% | 46.05% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 56.25% | 56.25% | 86.83% | 86.83% | 3899 ms | → 1.00x | 19 | 2m | 8d ago | 49m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 56.25% | 56.25% | 16.77% | 16.77% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 56.25% | 56.25% | 99.31% | 99.31% | 2041 ms | → 1.00x | 0 | — | — | 49m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 56.25% | 56.25% | 98.59% | 98.59% | 2454 ms | → 1.00x | 13 | 12m | 3d ago | 49m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 56.25% | 56.25% | 81.07% | 81.07% | 1500 ms | → 1.00x | 0 | — | — | 49m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 56.25% | 56.25% | 51.26% | 51.26% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 56.25% | 56.25% | 88.17% | 88.17% | — | → 1.00x | 1 | 28d 21h | 30d ago | 49m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 56.25% | 56.25% | 99.93% | 99.93% | 183 ms | → 1.00x | 0 | — | — | 49m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 56.25% | 56.25% | 99.85% | 99.85% | 1216 ms | → 1.00x | 3 | 0s | 3d ago | 49m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 56.25% | 56.25% | 69.98% | 69.98% | 4018 ms | → 1.00x | 5 | 14m | 17d ago | 49m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 56.25% | 56.25% | 35.56% | 35.56% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 56.25% | 56.25% | 99.91% | 99.91% | 1704 ms | → 1.00x | 0 | — | — | 49m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 56.25% | 56.25% | 99.97% | 99.97% | 980 ms | → 1.00x | 0 | — | — | 49m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 56.25% | 56.25% | 99.95% | 99.95% | 1608 ms | → 1.00x | 1 | 0s | 22d ago | 49m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 56.25% | 56.25% | 99.56% | 99.56% | 3215 ms | → 1.00x | 1 | 0s | 25d ago | 49m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 56.25% | 56.25% | 19.49% | 19.49% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 56.25% | 56.25% | 92.20% | 92.20% | 2366 ms | → 1.00x | 6 | 0s | 5d ago | 49m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 56.25% | 56.25% | 28.78% | 28.78% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 56.25% | 56.25% | 81.53% | 81.53% | 1705 ms | → 1.00x | 0 | — | — | 49m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 56.25% | 56.25% | 87.63% | 87.63% | 2090 ms | → 1.00x | 0 | — | — | 49m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 56.25% | 56.25% | 99.81% | 99.81% | 1132 ms | → 1.00x | 2 | 36m | 14d ago | 49m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 56.25% | 56.25% | 96.32% | 96.32% | 1370 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 56.25% | 56.25% | 46.51% | 46.51% | 157 ms | → 1.00x | 4 | 4d 1h | 9d ago | 49m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 56.25% | 56.25% | 85.02% | 85.02% | 4211 ms | → 1.00x | 39 | 4m | 4d ago | 49m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 56.25% | 56.25% | 5.16% | 5.16% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 56.25% | 56.25% | 99.97% | 99.97% | 1823 ms | → 1.00x | 0 | — | — | 49m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 56.25% | 56.25% | 98.73% | 98.73% | 675 ms | → 1.00x | 0 | — | — | 49m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 56.25% | 56.25% | 72.39% | 72.39% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 56.25% | 56.25% | 83.68% | 83.68% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 56.25% | 56.25% | 26.68% | 26.68% | 748 ms | → 1.00x | 0 | — | — | 49m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 56.25% | 56.25% | 97.87% | 97.87% | 389 ms | → 1.00x | 1 | 0s | 28d ago | 49m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 56.25% | 56.25% | 46.80% | 46.80% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 56.25% | 56.25% | 76.88% | 76.88% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 56.25% | 56.25% | 75.88% | 75.88% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 56.25% | 56.25% | 99.95% | 99.95% | 776 ms | → 1.00x | 0 | — | — | 49m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 56.25% | 56.25% | 52.45% | 52.45% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 56.25% | 56.25% | 22.72% | 22.72% | 517 ms | → 1.00x | 4 | 1d 10h | 7d ago | 49m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 56.25% | 56.25% | 68.72% | 68.72% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 56.25% | 56.25% | 75.72% | 75.72% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 56.25% | 56.25% | 63.68% | 63.68% | 2122 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 23h | 30d ago | 49m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 56.25% | 56.25% | 18.10% | 18.10% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 56.25% | 56.25% | 99.58% | 99.58% | 2547 ms | → 1.00x | 19 | 2m | 4d ago | 49m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 56.25% | 56.25% | 83.85% | 83.85% | 4591 ms | → 1.00x | 42 | 4m | 7d ago | 49m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 56.25% | 56.25% | 54.28% | 54.28% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 56.25% | 56.25% | 44.95% | 44.95% | 340 ms | → 1.00x | 0 | — | — | 49m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 56.25% | 56.25% | 35.49% | 35.49% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 56.25% | 56.25% | 93.73% | 93.73% | 62 ms | → 1.00x | 1 | 1h 22m | 17d ago | 49m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 56.25% | 56.25% | 3.84% | 3.84% | 382 ms | → 1.00x | 2 | 14d 6h | 2d ago | 49m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 56.25% | 56.25% | 31.58% | 31.58% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 56.25% | 56.25% | 98.94% | 98.94% | 1116 ms | → 1.00x | 1 | 0s | 8d ago | 49m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 56.25% | 56.25% | 63.55% | 63.55% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 56.25% | 56.25% | 96.79% | 96.79% | 3010 ms | → 1.00x | 4 | 8m | 14d ago | 49m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 56.25% | 56.25% | 23.11% | 23.11% | 793 ms | → 1.00x | 0 | — | — | 49m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 56.25% | 56.25% | 100.00% | 100.00% | 404 ms | → 1.00x | 0 | — | — | 49m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 56.25% | 56.25% | 99.60% | 99.60% | 2744 ms | → 1.00x | 1 | 0s | 24d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 56.25% | 56.25% | 99.97% | 99.97% | 1156 ms | → 1.00x | 0 | — | — | 49m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 56.25% | 56.25% | 22.23% | 22.23% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 56.25% | 56.25% | 100.00% | 100.00% | 425 ms | → 1.00x | 0 | — | — | 49m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 56.25% | 56.25% | 6.70% | 6.70% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 56.25% | 56.25% | 95.68% | 95.68% | 2661 ms | → 1.00x | 2 | 4d 7h | 18d ago | 50m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 56.25% | 56.25% | 54.05% | 54.05% | — | → 1.00x | 1 | 28d 24h | 30d ago | 50m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 56.25% | 56.25% | 22.60% | 22.60% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 56.25% | 56.25% | 25.33% | 25.33% | 1007 ms | → 1.00x | 4 | 0s | 14d ago | 49m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 56.25% | 56.25% | 93.77% | 93.77% | 4835 ms | → 1.00x | 0 | — | — | 49m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 56.25% | 56.25% | 99.58% | 99.58% | 1324 ms | → 1.00x | 1 | 2h | 2d ago | 49m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 56.25% | 56.25% | 99.97% | 99.97% | 1656 ms | → 1.00x | 1 | 0s | 20d ago | 49m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 56.25% | 56.25% | 98.47% | 98.47% | 2556 ms | → 1.00x | 5 | 42m | 9d ago | 49m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 56.25% | 56.25% | 39.41% | 39.41% | 3373 ms | → 1.00x | 125 | 6m | 3d ago | 49m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 56.25% | 56.25% | 62.64% | 62.64% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 56.25% | 56.25% | 30.92% | 30.92% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 56.25% | 56.25% | 68.76% | 68.76% | — | → 1.00x | 3 | 8d 13h | 27d ago | 49m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 56.25% | 56.25% | 99.30% | 99.30% | 738 ms | → 1.00x | 0 | — | — | 49m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 56.25% | 56.25% | 3.80% | 3.80% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 21h | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 56.25% | 56.25% | 44.20% | 44.20% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 56.25% | 56.25% | 99.92% | 99.92% | 1339 ms | → 1.00x | 0 | — | — | 49m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 56.25% | 56.25% | 49.74% | 49.74% | 1419 ms | → 1.00x | 6 | 35m | 11d ago | 49m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 56.25% | 56.25% | 99.60% | 99.60% | 2566 ms | → 1.00x | 1 | 2s | 3d ago | 50m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 56.25% | 56.25% | 38.02% | 38.02% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 56.25% | 56.25% | 29.98% | 29.98% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 56.25% | 56.25% | 17.16% | 17.16% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 56.25% | 56.25% | 99.49% | 99.49% | 920 ms | → 1.00x | 0 | — | — | 49m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 56.25% | 56.25% | 5.08% | 5.08% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 56.25% | 56.25% | 10.15% | 10.15% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 56.25% | 56.25% | 99.98% | 99.98% | 973 ms | → 1.00x | 1 | 4m | 7d ago | 50m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 56.25% | 56.25% | 64.20% | 64.20% | 2781 ms | → 1.00x | 6 | 0s | 5d ago | 49m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 56.25% | 56.25% | 89.02% | 89.02% | 1086 ms | → 1.00x | 1 | 5d 16h | 30d ago | 49m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 56.25% | 56.25% | 51.42% | 51.42% | 3243 ms | → 1.00x | 10 | 28m | 6d ago | 49m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 56.25% | 56.25% | 98.95% | 98.95% | 2209 ms | → 1.00x | 0 | — | — | 49m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 56.25% | 56.25% | 96.43% | 96.43% | 2109 ms | → 1.00x | 3 | 1d 4h | 1d ago | 49m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 56.25% | 56.25% | 23.40% | 23.40% | 3662 ms | → 1.00x | 106 | 13m | 4d ago | 49m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 56.25% | 56.25% | 99.06% | 99.06% | 832 ms | → 1.00x | 5 | 1h 16m | 3d ago | 49m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 56.25% | 56.25% | 82.00% | 82.00% | 4070 ms | → 1.00x | 181 | 10m | 3d ago | 49m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 56.25% | 56.25% | 99.66% | 99.66% | 925 ms | → 1.00x | 2 | 0s | 22d ago | 49m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 56.25% | 56.25% | 99.34% | 99.34% | 4711 ms | → 1.00x | 11 | 5m | 2d ago | 49m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 56.25% | 56.25% | 99.82% | 99.82% | 590 ms | → 1.00x | 1 | 0s | 12d ago | 49m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 56.25% | 56.25% | 89.57% | 89.57% | 1833 ms | → 1.00x | 0 | — | — | 49m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 56.25% | 56.25% | 99.86% | 99.86% | 805 ms | → 1.00x | 0 | — | — | 49m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 56.25% | 56.25% | 100.00% | 100.00% | 1425 ms | → 1.00x | 0 | — | — | 49m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 56.25% | 56.25% | 98.53% | 98.53% | 1472 ms | → 1.00x | 15 | 7m | 2d ago | 49m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 56.25% | 56.25% | 99.81% | 99.81% | 1293 ms | → 1.00x | 0 | — | — | 49m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 56.25% | 56.25% | 99.53% | 99.53% | 1375 ms | → 1.00x | 0 | — | — | 50m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 56.25% | 56.25% | 99.94% | 99.94% | 953 ms | → 1.00x | 0 | — | — | 49m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 56.25% | 56.25% | 16.69% | 16.69% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 56.25% | 56.25% | 99.76% | 99.76% | 835 ms | → 1.00x | 0 | — | — | 50m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 56.25% | 56.25% | 83.10% | 83.10% | 1063 ms | → 1.00x | 19 | 3h 37m | 9d ago | 49m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 56.25% | 56.25% | 21.71% | 21.71% | 2503 ms | → 1.00x | 61 | 1h 8m | 1d ago | 49m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 56.25% | 56.25% | 76.90% | 76.90% | 669 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 56.25% | 56.25% | 99.87% | 99.87% | 2379 ms | → 1.00x | 2 | 0s | 9d ago | 49m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 56.25% | 56.25% | 99.84% | 99.84% | 715 ms | → 1.00x | 0 | — | — | 49m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 56.25% | 56.25% | 85.28% | 85.28% | 1421 ms | → 1.00x | 0 | — | — | 49m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 56.25% | 56.25% | 36.33% | 36.33% | 2244 ms | → 1.00x | 3 | 2m | 7d ago | 50m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 56.25% | 56.25% | 98.90% | 98.90% | 1635 ms | → 1.00x | 2 | 60m | 19d ago | 49m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 56.25% | 56.25% | 98.37% | 98.37% | 1761 ms | → 1.00x | 0 | — | — | 49m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 56.25% | 56.25% | 93.42% | 93.42% | 3342 ms | → 1.00x | 3 | 20m | 7d ago | 50m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 56.25% | 56.25% | 14.75% | 14.75% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 56.25% | 56.25% | 99.94% | 99.94% | 1100 ms | → 1.00x | 1 | 0s | 27d ago | 49m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 56.25% | 56.25% | 74.00% | 74.00% | 1357 ms | → 1.00x | 19 | 52m | 5d ago | 49m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 56.25% | 56.25% | 25.49% | 25.49% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 56.25% | 56.25% | 97.35% | 97.35% | 1676 ms | → 1.00x | 3 | 1h 54m | 7d ago | 49m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 56.25% | 56.25% | 8.99% | 8.99% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 56.25% | 56.25% | 6.48% | 6.48% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 56.25% | 56.25% | 99.86% | 99.86% | 1404 ms | → 1.00x | 1 | 0s | 18d ago | 49m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 56.25% | 56.25% | 98.04% | 98.04% | 2737 ms | → 1.00x | 0 | — | — | 49m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 56.25% | 56.25% | 96.10% | 96.10% | 1538 ms | → 1.00x | 4 | 6h 14m | 23d ago | 49m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 56.25% | 56.25% | 98.88% | 98.88% | 1365 ms | → 1.00x | 0 | — | — | 49m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 56.25% | 56.25% | 98.78% | 98.78% | 1857 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 56.25% | 56.25% | 92.86% | 92.86% | 3266 ms | → 1.00x | 8 | 17h 53m | 1d ago | 49m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 56.25% | 56.25% | 0.69% | 0.69% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 56.25% | 56.25% | 3.93% | 3.93% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 56.25% | 56.25% | 86.29% | 86.29% | 4007 ms | → 1.00x | 24 | 3m | 3d ago | 49m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 56.25% | 56.25% | 99.67% | 99.67% | 1830 ms | → 1.00x | 0 | — | — | 49m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 56.25% | 56.25% | 98.12% | 98.12% | 2769 ms | → 1.00x | 2 | 10m | 16d ago | 49m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 56.25% | 56.25% | 99.97% | 99.97% | 1268 ms | → 1.00x | 0 | — | — | 49m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 56.25% | 56.25% | 98.74% | 98.74% | 947 ms | → 1.00x | 3 | 10m | 27d ago | 49m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 56.25% | 56.25% | 4.55% | 4.55% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 56.25% | 56.25% | 46.30% | 46.30% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 56.25% | 56.25% | 99.77% | 99.77% | 758 ms | → 1.00x | 3 | 0s | 3d ago | 49m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 56.25% | 56.25% | 99.88% | 99.88% | 3305 ms | → 1.00x | 2 | 0s | 9d ago | 49m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 56.25% | 56.25% | 76.63% | 76.63% | — | → 1.00x | 1 | 13d 19h | 15d ago | 49m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 56.25% | 56.25% | 32.96% | 32.96% | 851 ms | → 1.00x | 0 | — | — | 49m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 56.25% | 56.25% | 87.06% | 87.06% | 4171 ms | → 1.00x | 27 | 10m | 13d ago | 49m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 56.25% | 56.25% | 99.82% | 99.82% | 1019 ms | → 1.00x | 0 | — | — | 49m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 56.25% | 56.25% | 36.28% | 36.28% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 56.25% | 56.25% | 76.89% | 76.89% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 56.25% | 56.25% | 98.48% | 98.48% | 1813 ms | → 1.00x | 1 | 0s | 22d ago | 49m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 56.25% | 56.25% | 60.72% | 60.72% | 914 ms | → 1.00x | 1 | 5d 10h | 30d ago | 49m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 56.25% | 56.25% | 63.49% | 63.49% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 56.25% | 56.25% | 40.17% | 40.17% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 56.25% | 56.25% | 99.92% | 99.92% | 1399 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 56.25% | 56.25% | 89.40% | 89.40% | 2151 ms | → 1.00x | 0 | — | — | 49m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 56.25% | 56.25% | 77.23% | 77.23% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 56.25% | 56.25% | 17.31% | 17.31% | 1531 ms | → 1.00x | 1 | 0s | 17d ago | 49m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 56.25% | 56.25% | 43.61% | 43.61% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 56.25% | 56.25% | 96.73% | 96.73% | 2722 ms | → 1.00x | 1 | 0s | 21d ago | 49m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 56.25% | 56.25% | 99.87% | 99.87% | 1560 ms | → 1.00x | 1 | 0s | 3d ago | 49m ago |
| [xAI](https://lmspeed.net/provider/xai) | 56.25% | 56.25% | 23.13% | 23.13% | 1866 ms | → 1.00x | 0 | — | — | 49m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 56.25% | 56.25% | 99.85% | 99.85% | 2006 ms | → 1.00x | 1 | 6h 1m | 2d ago | 49m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 56.25% | 56.25% | 97.48% | 97.48% | 1526 ms | → 1.00x | 1 | 0s | 2d ago | 49m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 56.25% | 56.25% | 0.01% | 0.01% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 56.25% | 56.25% | 99.85% | 99.85% | 1754 ms | → 1.00x | 2 | 0s | 2d ago | 49m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 56.25% | 56.25% | 99.92% | 99.92% | 1098 ms | → 1.00x | 1 | 0s | 2d ago | 49m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 56.25% | 56.25% | 24.63% | 24.63% | 2314 ms | → 1.00x | 1 | 0s | 21d ago | 49m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 56.25% | 56.25% | 22.68% | 22.68% | 1628 ms | → 1.00x | 0 | — | — | 49m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 56.25% | 56.25% | 60.97% | 60.97% | 2259 ms | → 1.00x | 122 | 6m | 3d ago | 49m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 56.25% | 56.25% | 99.76% | 99.76% | 2737 ms | → 1.00x | 3 | 0s | 17d ago | 49m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 56.25% | 56.25% | 97.10% | 97.10% | 1052 ms | → 1.00x | 4 | 35m | 10d ago | 49m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 56.25% | 56.25% | 38.37% | 38.37% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 56.25% | 56.25% | 99.76% | 99.76% | 2683 ms | → 1.00x | 0 | — | — | 49m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 56.25% | 56.25% | 1.35% | 1.35% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 56.25% | 56.25% | 17.59% | 17.59% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 56.25% | 56.25% | 99.78% | 99.78% | 2674 ms | → 1.00x | 0 | — | — | 49m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 56.25% | 56.25% | 99.90% | 99.90% | 1259 ms | → 1.00x | 0 | — | — | 49m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 56.25% | 56.25% | 99.92% | 99.92% | 806 ms | → 1.00x | 1 | 0s | 10d ago | 49m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 56.25% | 56.25% | 99.62% | 99.62% | 1893 ms | → 1.00x | 2 | 1h 60m | 3d ago | 49m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 56.25% | 56.25% | 99.77% | 99.77% | 1815 ms | → 1.00x | 0 | — | — | 49m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 56.25% | 56.25% | 91.72% | 91.72% | 1357 ms | → 1.00x | 32 | 56s | 1d ago | 49m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 56.25% | 56.25% | 99.77% | 99.77% | 347 ms | → 1.00x | 2 | 2m | 2d ago | 49m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 56.25% | 56.25% | 98.78% | 98.78% | 1241 ms | → 1.00x | 1 | 0s | 1d ago | 49m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 56.25% | 56.25% | 99.79% | 99.79% | 1582 ms | → 1.00x | 4 | 0s | 2d ago | 49m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 56.25% | 56.25% | 99.67% | 99.67% | 3012 ms | → 1.00x | 5 | 5h 48m | 2d ago | 49m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 56.25% | 56.25% | 99.17% | 99.17% | 1165 ms | → 1.00x | 0 | — | — | 49m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 56.25% | 56.25% | 55.08% | 55.08% | 2618 ms | → 1.00x | 38 | 1m | 2d ago | 49m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 56.25% | 56.25% | 100.00% | 100.00% | 965 ms | → 1.00x | 0 | — | — | 49m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 56.25% | 56.25% | 0.00% | 0.00% | — | → 1.00x | 1 | 29d | 30d ago | 49m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 56.25% | 56.25% | 100.00% | 100.00% | 1194 ms | → 1.00x | 0 | — | — | 49m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 56.25% | 56.25% | 75.15% | 75.15% | — | → 1.00x | 1 | 28d 24h | 30d ago | 49m ago |
| [Dext API](https://lmspeed.net/provider/ai-dext-top) | 54.55% | 54.55% | — | — | — | → 1.00x | 0 | — | — | 49m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 50.00% | 50.00% | 100.00% | 100.00% | 824 ms | → 1.00x | 0 | — | — | 49m ago |
| [A6api](https://lmspeed.net/provider/a6api-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [Lumin AI](https://lmspeed.net/provider/ai-luminai-cc) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [Frontier Intelligence](https://lmspeed.net/provider/api-frontier-intelligence-tech) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [AutoRouter](https://lmspeed.net/provider/autorouter-io) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [DasuApi](https://lmspeed.net/provider/dasuapi-com) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [灵算](https://lmspeed.net/provider/lingsuan-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [LinkAi](https://lmspeed.net/provider/linkai-shop) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [ModCon](https://lmspeed.net/provider/modcon-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [AIMZ](https://lmspeed.net/provider/mzlone-top) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [RunAPI](https://lmspeed.net/provider/runapi-co) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |
| [天枢](https://lmspeed.net/provider/tian-shu-org) | 0.00% | 0.00% | — | — | — | — | 0 | — | — | 49m ago |

</details>

<details>
<summary><strong>⚫ Unknown (2)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 69.23% | 69.23% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | — |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 69.23% | 69.23% | 0.00% | 0.00% | — | → 1.00x | 1 | 28d 24h | 30d ago | — |

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
