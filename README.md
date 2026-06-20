# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 357 🟢 operational · 57 🟡 degraded · 257 🔴 down · 0 ⚫ unknown

_Updated 2026-06-20 07:03 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (357)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 99.94% | 98.21% | 98.21% | 804 ms | ↑ 1.22x | 1 | 0s | 23d ago | 15m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1455 ms | ↓ 0.91x | 0 | — | — | 12m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.83% | 93.87% | 93.87% | 2439 ms | ↑ 1.93x | 3 | 0s | 14d ago | 19m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 100.00% | 99.54% | 72.82% | 72.82% | 921 ms | → 0.95x | 7 | 4m | 14d ago | 20m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.77% | 21.63% | 21.63% | 3175 ms | ↑ 1.62x | 4 | 0s | 10d ago | 21m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.47% | 97.47% | 4044 ms | ↑ 1.34x | 0 | — | — | 30m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 56.54% | 56.54% | 1779 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.89% | 99.89% | 99.89% | 1303 ms | → 1.03x | 1 | 0s | 14d ago | 12m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 99.94% | 97.88% | 97.88% | 3842 ms | ↑ 1.31x | 1 | 0s | 23d ago | 26m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 100.00% | 99.49% | 99.49% | 99.49% | 737 ms | ↓ 0.48x | 3 | 47m | 9d ago | 12m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.71% | 98.67% | 98.67% | 1064 ms | ↓ 0.86x | 5 | 0s | 11d ago | 20m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.82% | 98.82% | 2285 ms | ↑ 1.23x | 0 | — | — | 32m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 99.94% | 99.51% | 99.51% | 3670 ms | ↑ 1.14x | 1 | 0s | 30d ago | 32m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 100.00% | 100.00% | 99.31% | 99.31% | 321 ms | ↓ 0.28x | 0 | — | — | 14m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.30% | 95.30% | 2912 ms | ↑ 1.30x | 0 | — | — | 16m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2165 ms | ↑ 1.51x | 0 | — | — | 14m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.75% | 97.75% | 3395 ms | ↑ 1.42x | 0 | — | — | 16m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.83% | 92.46% | 92.46% | 3241 ms | ↑ 1.62x | 1 | 50m | 9d ago | 33m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1414 ms | ↑ 1.51x | 0 | — | — | 12m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.66% | 98.66% | 1533 ms | ↑ 1.27x | 0 | — | — | 16m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 100.00% | 98.60% | 96.96% | 96.96% | 1644 ms | ↑ 1.05x | 1 | 8h 47m | 10d ago | 15m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 98.90% | 98.90% | 767 ms | ↓ 0.54x | 0 | — | — | 14m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 37.91% | 37.91% | 907 ms | ↑ 1.65x | 0 | — | — | 27m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1731 ms | ↑ 1.24x | 0 | — | — | 12m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 100.00% | 99.83% | 99.87% | 99.87% | 1578 ms | ↑ 1.61x | 2 | 10m | 11d ago | 15m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 99.94% | 96.99% | 96.99% | 2935 ms | ↑ 1.29x | 1 | 0s | 25d ago | 19m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.83% | 98.88% | 98.88% | 1034 ms | ↑ 1.17x | 2 | 15m | 11d ago | 29m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 99.94% | 99.97% | 99.97% | 1427 ms | ↑ 1.70x | 1 | 0s | 29d ago | 13m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.42% | 87.61% | 87.61% | 2035 ms | ↑ 1.91x | 1 | 3h 51m | 22d ago | 17m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1718 ms | → 0.97x | 1 | 0s | 29d ago | 14m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 100.00% | 99.53% | 99.70% | 99.70% | 1853 ms | ↓ 0.90x | 4 | 30m | 9d ago | 14m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 99.83% | 98.40% | 98.40% | 4422 ms | ↑ 1.46x | 1 | 60m | 30d ago | 17m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 100.00% | 100.00% | 98.23% | 98.23% | 508 ms | ↑ 1.72x | 0 | — | — | 15m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.01% | 86.01% | 2547 ms | ↑ 1.85x | 0 | — | — | 16m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 100.00% | 99.94% | 82.18% | 82.18% | 2613 ms | ↑ 1.35x | 1 | 0s | 9d ago | 20m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.73% | 97.73% | 1498 ms | ↑ 1.15x | 0 | — | — | 19m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 100.00% | 100.00% | 99.99% | 99.99% | 803 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 100.00% | 100.00% | 99.75% | 99.75% | 3052 ms | ↑ 1.11x | 0 | — | — | 28m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 100.00% | 100.00% | 99.04% | 99.04% | 724 ms | ↑ 1.70x | 0 | — | — | 18m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 99.94% | 97.90% | 97.90% | 4212 ms | ↑ 1.11x | 1 | 0s | 26d ago | 31m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.38% | 96.38% | 1114 ms | ↑ 1.07x | 0 | — | — | 18m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.07% | 85.35% | 85.35% | 1640 ms | → 1.04x | 9 | 6h 19m | 11d ago | 15m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1116 ms | → 1.01x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2219 ms | ↑ 1.24x | 0 | — | — | 12m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.86% | 99.86% | 1147 ms | ↑ 1.09x | 2 | 0s | 11d ago | 15m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 100.00% | 100.00% | 99.53% | 99.53% | 1997 ms | → 1.03x | 0 | — | — | 28m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.82% | 99.82% | 628 ms | ↓ 0.38x | 1 | 51m | 20d ago | 12m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 99.94% | 99.85% | 99.85% | 4450 ms | ↑ 1.30x | 1 | 0s | 26d ago | 26m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.71% | 99.71% | 847 ms | ↓ 0.84x | 1 | 0s | 19d ago | 16m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1304 ms | ↑ 1.22x | 0 | — | — | 12m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 100.00% | 100.00% | 30.69% | 30.69% | 1189 ms | ↑ 1.13x | 0 | — | — | 28m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 98.14% | 96.32% | 96.32% | 2243 ms | ↑ 1.18x | 1 | 12h 2m | 25d ago | 15m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 98.02% | 97.89% | 97.89% | 2703 ms | ↓ 0.53x | 13 | 48m | 17d ago | 16m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1179 ms | ↓ 0.72x | 0 | — | — | 14m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 482 ms | ↓ 0.54x | 0 | — | — | 14m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.77% | 99.80% | 99.80% | 799 ms | → 1.00x | 4 | 0s | 9d ago | 14m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.76% | 96.76% | 753 ms | ↓ 0.95x | 0 | — | — | 19m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 97.08% | 98.13% | 98.13% | 2115 ms | ↑ 1.07x | 1 | 21h 30m | 16d ago | 12m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1152 ms | → 1.00x | 0 | — | — | 12m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 55.27% | 55.27% | 1886 ms | ↑ 1.39x | 0 | — | — | 21m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 97.70% | 97.70% | 97.70% | 936 ms | → 0.99x | 2 | 4h 33m | 9d ago | 12m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 100.00% | 44.28% | 47.72% | 47.72% | 505 ms | → 1.00x | 1 | 16d 18h | 28d ago | 21m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 1800 ms | ↑ 1.62x | 1 | 0s | 29d ago | 13m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3492 ms | → 0.98x | 0 | — | — | 27m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.17% | 97.17% | 1104 ms | ↓ 0.78x | 0 | — | — | 27m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 100.00% | 98.79% | 98.79% | 98.79% | 1557 ms | ↓ 0.91x | 3 | 1h 47m | 8d ago | 12m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.12% | 99.12% | 1407 ms | → 1.00x | 2 | 0s | 7d ago | 19m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 83.62% | 83.62% | 3479 ms | ↑ 1.53x | 0 | — | — | 20m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 100.00% | 45.67% | 67.87% | 67.87% | 687 ms | → 0.99x | 4 | 4d 2h | 7d ago | 20m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 827 ms | ↓ 0.56x | 0 | — | — | 14m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.72% | 98.72% | 2812 ms | ↑ 1.38x | 0 | — | — | 17m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 99.94% | 99.97% | 99.97% | 4355 ms | ↑ 1.38x | 1 | 0s | 29d ago | 13m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 99.94% | 92.97% | 92.97% | 744 ms | ↓ 0.93x | 1 | 0s | 26d ago | 21m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.68% | 98.68% | 1240 ms | ↑ 1.27x | 0 | — | — | 16m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.88% | 99.84% | 99.84% | 620 ms | ↑ 1.60x | 2 | 0s | 17d ago | 18m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.39% | 99.39% | 784 ms | ↓ 0.61x | 0 | — | — | 14m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 100.00% | 100.00% | 100.00% | 100.00% | 1914 ms | → 1.02x | 0 | — | — | 12m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.88% | 97.97% | 97.97% | 1856 ms | ↓ 0.44x | 2 | 0s | 10d ago | 17m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 90.03% | 89.60% | 89.60% | 1383 ms | ↑ 1.40x | 2 | 1d 12h | 13d ago | 16m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.94% | 48.13% | 48.13% | 1943 ms | ↑ 1.45x | 1 | 0s | 11d ago | 21m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2366 ms | → 1.03x | 0 | — | — | 13m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 76.69% | 76.69% | 1316 ms | ↑ 1.38x | 0 | — | — | 20m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 958 ms | → 0.96x | 0 | — | — | 13m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.24% | 98.24% | 2685 ms | ↑ 1.32x | 0 | — | — | 19m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 965 ms | → 0.97x | 0 | — | — | 12m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 99.94% | 99.97% | 99.97% | 2671 ms | ↑ 1.68x | 1 | 0s | 29d ago | 13m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 82.46% | 82.46% | 2432 ms | ↑ 1.48x | 2 | 0s | 11d ago | 20m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.88% | 62.97% | 62.97% | 645 ms | ↓ 0.91x | 2 | 0s | 9d ago | 20m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.05% | 98.05% | 2207 ms | ↑ 1.31x | 0 | — | — | 21m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 99.94% | 99.87% | 99.87% | 2290 ms | ↑ 1.28x | 1 | 0s | 29d ago | 14m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 60.89% | 60.89% | 1373 ms | ↓ 0.78x | 0 | — | — | 20m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 63.96% | 63.96% | 1877 ms | ↑ 1.26x | 0 | — | — | 21m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.23% | 99.23% | 1922 ms | ↑ 1.19x | 0 | — | — | 20m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.82% | 99.82% | 1012 ms | ↓ 0.48x | 0 | — | — | 18m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.59% | 99.59% | 633 ms | ↓ 0.81x | 1 | 0s | 21d ago | 20m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 87.16% | 87.16% | 87.16% | 2574 ms | ↓ 0.92x | 5 | 15h 33m | 8d ago | 12m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 100.00% | 99.94% | 20.05% | 20.05% | 2055 ms | ↑ 1.76x | 1 | 0s | 16d ago | 27m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2680 ms | ↑ 1.18x | 0 | — | — | 31m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2390 ms | → 1.02x | 0 | — | — | 12m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 99.89% | 99.05% | 99.05% | 3937 ms | ↑ 1.14x | 1 | 29m | 26d ago | 31m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.18% | 98.18% | 3995 ms | ↑ 1.24x | 0 | — | — | 32m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 100.00% | 99.71% | 99.91% | 99.91% | 922 ms | ↑ 1.10x | 3 | 13m | 18d ago | 28m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 75.69% | 75.69% | 3148 ms | ↑ 1.42x | 0 | — | — | 19m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 976 ms | ↓ 0.93x | 0 | — | — | 14m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 1423 ms | → 1.00x | 0 | — | — | 12m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.42% | 99.63% | 99.63% | 1627 ms | ↑ 1.37x | 1 | 2h 60m | 12d ago | 14m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 1856 ms | ↑ 1.32x | 0 | — | — | 32m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 99.94% | 99.72% | 99.72% | 631 ms | ↓ 0.35x | 1 | 0s | 24d ago | 32m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.63% | 99.63% | 2500 ms | ↑ 1.31x | 1 | 0s | 11d ago | 30m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 89.67% | 89.67% | 1551 ms | ↓ 0.85x | 0 | — | — | 20m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 100.00% | 100.00% | 79.32% | 79.32% | 2210 ms | ↑ 1.10x | 0 | — | — | 18m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 99.94% | 99.80% | 99.80% | 898 ms | ↑ 1.22x | 1 | 0s | 23d ago | 31m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 666 ms | ↑ 1.19x | 0 | — | — | 14m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 85.03% | 85.03% | 2791 ms | ↑ 1.37x | 0 | — | — | 16m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2284 ms | ↑ 1.31x | 0 | — | — | 13m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2307 ms | ↑ 1.49x | 0 | — | — | 16m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.05% | 99.05% | 952 ms | ↑ 1.42x | 0 | — | — | 21m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.49% | 97.49% | 2539 ms | ↑ 2.43x | 0 | — | — | 16m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.89% | 99.89% | 99.89% | 1777 ms | ↑ 1.27x | 1 | 0s | 14d ago | 12m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.88% | 99.94% | 99.94% | 1854 ms | ↑ 1.96x | 2 | 0s | 11d ago | 13m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2320 ms | ↑ 1.32x | 0 | — | — | 13m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 100.00% | 68.03% | 80.26% | 80.26% | 1238 ms | → 1.04x | 2 | 4d 20h | 22d ago | 14m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 100.00% | 100.00% | 98.89% | 98.89% | 392 ms | ↑ 1.51x | 0 | — | — | 18m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 100.00% | 99.82% | 99.10% | 99.10% | 1226 ms | ↑ 1.17x | 3 | 0s | 13d ago | 14m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 98.99% | 98.99% | 3203 ms | ↑ 2.08x | 0 | — | — | 21m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 86.47% | 86.47% | 1670 ms | ↑ 1.52x | 0 | — | — | 15m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 100.00% | 98.54% | 97.67% | 97.67% | 495 ms | ↓ 0.86x | 2 | 4h 43m | 29d ago | 13m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.77% | 99.77% | 99.77% | 724 ms | ↑ 1.13x | 1 | 1h | 20d ago | 12m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.89% | 99.89% | 1724 ms | ↑ 1.31x | 2 | 11m | 21d ago | 12m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 23.88% | 23.88% | 2342 ms | ↑ 1.90x | 0 | — | — | 21m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1641 ms | ↑ 1.60x | 0 | — | — | 33m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2773 ms | ↑ 1.09x | 0 | — | — | 32m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 690 ms | ↑ 1.14x | 0 | — | — | 30m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.12% | 98.12% | 916 ms | ↓ 0.64x | 0 | — | — | 19m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 97.86% | 19.91% | 19.91% | 617 ms | ↓ 0.36x | 7 | 1h 40m | 10d ago | 21m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 782 ms | ↑ 1.32x | 0 | — | — | 32m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.71% | 99.73% | 99.73% | 1645 ms | ↑ 1.07x | 4 | 8m | 14d ago | 26m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.74% | 98.74% | 4756 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 1069 ms | ↓ 0.42x | 0 | — | — | 30m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 100.00% | 100.00% | 100.00% | 100.00% | 2410 ms | ↑ 1.42x | 0 | — | — | 14m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.46% | 97.91% | 97.91% | 2016 ms | ↑ 1.24x | 126 | 29m | 10d ago | 30m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2804 ms | ↑ 1.15x | 0 | — | — | 27m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.35% | 99.35% | 2458 ms | ↑ 1.40x | 2 | 0s | 11d ago | 21m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 42.32% | 42.32% | 946 ms | ↑ 1.09x | 1 | 0s | 10d ago | 32m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 100.00% | 100.00% | 98.56% | 98.56% | 2430 ms | ↓ 0.58x | 0 | — | — | 18m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1199 ms | → 1.05x | 0 | — | — | 30m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 99.94% | 99.46% | 99.46% | 2926 ms | ↑ 1.08x | 1 | 0s | 23d ago | 26m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.77% | 99.81% | 99.81% | 1413 ms | ↑ 1.05x | 3 | 10m | 14d ago | 19m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.60% | 99.26% | 99.26% | 2256 ms | ↑ 1.62x | 3 | 30m | 10d ago | 31m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2590 ms | ↑ 1.15x | 0 | — | — | 20m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.68% | 99.68% | 714 ms | ↓ 0.49x | 0 | — | — | 15m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 525 ms | ↑ 1.11x | 0 | — | — | 12m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 100.00% | 99.45% | 99.45% | 99.45% | 995 ms | → 0.95x | 2 | 45m | 8d ago | 14m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.63% | 99.63% | 704 ms | → 1.03x | 0 | — | — | 31m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 61.50% | 61.50% | 1657 ms | ↑ 1.05x | 0 | — | — | 21m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 100.00% | 99.94% | 22.11% | 22.11% | 655 ms | ↓ 0.35x | 1 | 0s | 11d ago | 21m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.33% | 82.65% | 82.65% | 1585 ms | ↑ 1.89x | 3 | 8h 40m | 11d ago | 15m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2811 ms | ↑ 1.08x | 0 | — | — | 31m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 100.00% | 100.00% | 100.00% | 2993 ms | → 1.00x | 0 | — | — | 12m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.59% | 60.90% | 60.90% | 1071 ms | ↓ 0.41x | 3 | 40m | 10d ago | 21m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.89% | 89.32% | 89.32% | 2042 ms | ↑ 1.37x | 2 | 0s | 7d ago | 30m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.17% | 80.22% | 80.22% | 2255 ms | ↑ 1.19x | 1 | 13h | 17d ago | 32m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1366 ms | ↑ 1.35x | 1 | 0s | 10d ago | 30m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1111 ms | → 1.00x | 0 | — | — | 31m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 45.19% | 45.19% | 198 ms | → 1.02x | 1 | 0s | 10d ago | 18m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 100.00% | 100.00% | 99.60% | 99.60% | 990 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 99.94% | 99.97% | 99.97% | 1805 ms | ↑ 1.71x | 1 | 0s | 29d ago | 13m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 99.94% | 99.94% | 99.94% | 1018 ms | ↑ 1.12x | 1 | 0s | 23d ago | 15m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.52% | 98.52% | 1757 ms | ↑ 1.24x | 0 | — | — | 16m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.71% | 96.57% | 96.57% | 1266 ms | ↑ 1.66x | 2 | 45m | 9d ago | 16m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 70.27% | 70.27% | 1354 ms | ↑ 1.36x | 0 | — | — | 20m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1316 ms | ↑ 1.09x | 0 | — | — | 12m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1396 ms | → 1.00x | 0 | — | — | 12m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.77% | 81.16% | 81.16% | 3298 ms | ↑ 1.65x | 2 | 26m | 10d ago | 20m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2168 ms | ↑ 1.26x | 0 | — | — | 30m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 99.94% | 99.96% | 99.96% | 846 ms | ↓ 0.35x | 1 | 0s | 29d ago | 13m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 100.00% | 99.83% | 92.70% | 92.70% | 1543 ms | → 0.98x | 3 | 0s | 18d ago | 19m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.88% | 99.87% | 99.87% | 524 ms | ↓ 0.62x | 2 | 0s | 11d ago | 26m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 36.07% | 22.08% | 22.08% | 2736 ms | ↑ 1.05x | 2 | 9d 14h | 11d ago | 15m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 100.00% | 99.77% | 85.55% | 85.55% | 2288 ms | ↑ 1.06x | 4 | 0s | 11d ago | 31m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.63% | 85.63% | 1354 ms | ↑ 2.45x | 0 | — | — | 30m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.18% | 91.18% | 488 ms | ↑ 1.35x | 0 | — | — | 18m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.31% | 99.31% | 2384 ms | ↑ 1.16x | 0 | — | — | 20m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 100.00% | 99.94% | 67.93% | 67.93% | 1621 ms | ↑ 1.59x | 1 | 0s | 22d ago | 20m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.73% | 96.73% | 1545 ms | ↑ 1.07x | 0 | — | — | 20m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 99.88% | 99.86% | 99.86% | 1913 ms | ↑ 1.67x | 2 | 0s | 23d ago | 13m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 100.00% | 99.94% | 21.71% | 21.71% | 2436 ms | ↑ 1.49x | 1 | 0s | 16d ago | 27m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.76% | 99.76% | 3069 ms | ↑ 1.12x | 0 | — | — | 31m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.89% | 99.89% | 99.89% | 1662 ms | → 1.04x | 1 | 0s | 8d ago | 14m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4280 ms | ↑ 1.23x | 0 | — | — | 14m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 58.80% | 58.80% | 739 ms | ↑ 1.08x | 0 | — | — | 21m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 100.00% | 99.83% | 98.42% | 98.42% | 2401 ms | ↑ 1.47x | 3 | 0s | 10d ago | 18m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 99.94% | 41.58% | 41.58% | 3378 ms | ↑ 1.39x | 1 | 0s | 28d ago | 20m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 100.00% | 99.12% | 99.12% | 99.12% | 3005 ms | → 1.01x | 1 | 1h 58m | 9d ago | 13m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 99.94% | 99.23% | 99.23% | 4336 ms | ↑ 1.28x | 1 | 0s | 22d ago | 26m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3456 ms | ↑ 1.17x | 0 | — | — | 31m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 99.88% | 99.89% | 99.89% | 2678 ms | ↑ 1.28x | 1 | 30m | 28d ago | 19m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.18% | 92.10% | 92.10% | 2724 ms | ↑ 1.05x | 4 | 9h 43m | 19d ago | 18m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.27% | 99.27% | 2334 ms | ↑ 1.20x | 0 | — | — | 20m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 79.97% | 79.97% | 1048 ms | ↓ 0.37x | 0 | — | — | 20m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 99.94% | 99.93% | 99.93% | 188 ms | → 0.99x | 1 | 0s | 23d ago | 31m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2810 ms | ↑ 1.72x | 0 | — | — | 12m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2614 ms | ↑ 1.31x | 0 | — | — | 30m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1408 ms | → 0.96x | 1 | 0s | 29d ago | 14m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 100.00% | 99.13% | 91.54% | 91.54% | 2761 ms | ↓ 0.87x | 15 | 0s | 11d ago | 18m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 99.94% | 80.39% | 80.39% | 2683 ms | ↑ 1.42x | 1 | 0s | 25d ago | 20m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 86.83% | 86.83% | 1900 ms | ↓ 0.31x | 0 | — | — | 20m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 100.00% | 99.94% | 99.93% | 99.93% | 1717 ms | ↑ 1.38x | 1 | 0s | 29d ago | 14m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 100.00% | 96.18% | 96.18% | 2240 ms | ↑ 1.58x | 0 | — | — | 21m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1570 ms | ↑ 1.37x | 0 | — | — | 30m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.62% | 98.62% | 866 ms | ↑ 1.39x | 0 | — | — | 18m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 23.47% | 23.47% | 910 ms | ↑ 1.95x | 0 | — | — | 21m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.53% | 97.52% | 97.52% | 456 ms | ↓ 0.41x | 5 | 16m | 8d ago | 15m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 936 ms | ↓ 0.93x | 0 | — | — | 18m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 100.00% | 61.95% | 61.95% | 2586 ms | ↑ 1.23x | 0 | — | — | 20m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 79.66% | 34.90% | 34.90% | 934 ms | → 0.96x | 1 | 5d 22h | 30d ago | 31m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 100.00% | 100.00% | 92.89% | 92.89% | 28 ms | ↓ 0.95x | 0 | — | — | 15m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.91% | 98.90% | 98.90% | 1665 ms | ↑ 1.40x | 1 | 5h 60m | 20d ago | 30m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 20.02% | 20.02% | 1552 ms | ↑ 1.50x | 0 | — | — | 30m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 905 ms | ↓ 0.61x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 4111 ms | ↑ 1.27x | 0 | — | — | 15m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 532 ms | ↓ 0.57x | 0 | — | — | 14m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.52% | 93.52% | 4694 ms | ↑ 1.10x | 0 | — | — | 31m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.71% | 99.57% | 99.57% | 2074 ms | ↑ 1.21x | 1 | 1h 20m | 22d ago | 30m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.94% | 99.97% | 99.97% | 2234 ms | ↑ 1.19x | 1 | 0s | 15d ago | 20m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.24% | 99.24% | 1024 ms | ↑ 1.13x | 0 | — | — | 18m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 99.94% | 99.90% | 99.90% | 1421 ms | ↓ 0.90x | 1 | 0s | 29d ago | 14m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.58% | 99.58% | 2383 ms | ↑ 1.28x | 0 | — | — | 32m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.47% | 99.47% | 2100 ms | ↑ 1.49x | 0 | — | — | 30m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 651 ms | ↑ 1.34x | 0 | — | — | 33m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 100.00% | 99.83% | 62.38% | 62.38% | 2694 ms | ↑ 1.06x | 3 | 0s | 11d ago | 31m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.79% | 98.79% | 2919 ms | ↑ 1.12x | 0 | — | — | 15m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.76% | 96.76% | 3292 ms | ↑ 1.16x | 0 | — | — | 31m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 100.00% | 100.00% | 100.00% | 100.00% | 589 ms | ↓ 0.31x | 0 | — | — | 12m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 99.88% | 99.81% | 99.81% | 643 ms | ↓ 0.93x | 1 | 20m | 22d ago | 15m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 88.76% | 88.76% | 2437 ms | ↑ 1.39x | 0 | — | — | 19m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.83% | 99.83% | 843 ms | ↓ 0.89x | 0 | — | — | 15m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1767 ms | → 1.03x | 0 | — | — | 14m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 2167 ms | ↑ 1.19x | 0 | — | — | 31m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.50% | 99.50% | 1439 ms | ↑ 1.13x | 0 | — | — | 32m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.88% | 99.93% | 99.93% | 1593 ms | ↑ 1.16x | 2 | 0s | 14d ago | 13m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.74% | 99.74% | 1401 ms | ↑ 1.19x | 0 | — | — | 32m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 100.00% | 99.94% | 74.89% | 74.89% | 941 ms | ↓ 0.85x | 1 | 0s | 29d ago | 18m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 100.00% | 99.94% | 99.88% | 99.88% | 2876 ms | ↑ 1.07x | 1 | 0s | 25d ago | 28m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 878 ms | → 1.01x | 0 | — | — | 29m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 84.73% | 84.73% | 1743 ms | → 0.96x | 1 | 0s | 19d ago | 27m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 100.00% | 99.94% | 25.29% | 25.29% | 2747 ms | ↑ 1.30x | 1 | 0s | 17d ago | 33m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 100.00% | 99.59% | 98.87% | 98.87% | 1989 ms | ↑ 1.31x | 4 | 15m | 9d ago | 19m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.88% | 98.15% | 98.15% | 2664 ms | ↑ 1.39x | 2 | 0s | 22d ago | 16m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.77% | 92.29% | 92.29% | 4453 ms | ↑ 1.31x | 2 | 25m | 9d ago | 33m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.93% | 99.93% | 2707 ms | ↑ 1.95x | 1 | 0s | 7d ago | 12m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 100.00% | 98.83% | 97.17% | 97.17% | 1805 ms | ↑ 1.39x | 15 | 10m | 10d ago | 14m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 100.00% | 99.77% | 99.86% | 99.86% | 1192 ms | ↑ 1.50x | 2 | 30m | 17d ago | 13m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.67% | 97.67% | 3753 ms | ↑ 2.15x | 1 | 0s | 14d ago | 15m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.82% | 98.82% | 1013 ms | ↑ 1.23x | 0 | — | — | 20m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.74% | 98.74% | 1872 ms | → 0.99x | 0 | — | — | 29m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 99.82% | 99.60% | 99.60% | 2964 ms | ↑ 1.42x | 2 | 15m | 26d ago | 14m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 100.00% | 100.00% | 97.96% | 97.96% | 4254 ms | ↑ 1.28x | 0 | — | — | 17m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 99.94% | 99.97% | 99.97% | 1116 ms | ↑ 1.89x | 1 | 0s | 29d ago | 14m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2807 ms | ↑ 1.37x | 0 | — | — | 12m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 100.00% | 97.20% | 97.20% | 97.20% | 171 ms | ↓ 0.13x | 2 | 6h 36m | 11d ago | 12m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 30.32% | 30.32% | 1202 ms | ↑ 1.23x | 0 | — | — | 29m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 1686 ms | ↑ 1.74x | 1 | 0s | 27d ago | 19m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1932 ms | ↑ 1.41x | 0 | — | — | 29m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 88.72% | 88.72% | 4117 ms | ↑ 1.45x | 0 | — | — | 20m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 100.00% | 100.00% | 13.52% | 13.52% | 2615 ms | → 1.00x | 0 | — | — | 27m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 1808 ms | ↑ 1.20x | 1 | 0s | 10d ago | 29m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 20.03% | 20.03% | 2002 ms | → 1.01x | 0 | — | — | 31m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 929 ms | → 1.00x | 0 | — | — | 14m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.16% | 97.16% | 2753 ms | ↑ 1.48x | 0 | — | — | 16m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 99.94% | 99.85% | 99.85% | 2619 ms | ↑ 1.23x | 1 | 0s | 25d ago | 29m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.83% | 99.93% | 99.93% | 1213 ms | → 0.99x | 2 | 10m | 10d ago | 30m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 19.82% | 19.82% | 2428 ms | ↑ 1.48x | 0 | — | — | 21m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.47% | 99.70% | 99.70% | 2537 ms | ↓ 0.59x | 5 | 24m | 12d ago | 13m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 99.65% | 99.76% | 99.76% | 2884 ms | ↑ 1.16x | 1 | 2h 18m | 28d ago | 18m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2248 ms | ↑ 1.25x | 0 | — | — | 31m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2199 ms | → 1.00x | 0 | — | — | 12m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 814 ms | ↓ 0.54x | 0 | — | — | 29m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 320 ms | → 1.00x | 0 | — | — | 13m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.64% | 98.64% | 1678 ms | ↑ 1.33x | 0 | — | — | 16m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 100.00% | 99.94% | 99.81% | 99.81% | 2299 ms | ↑ 1.18x | 1 | 0s | 17d ago | 27m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.14% | 99.14% | 1890 ms | ↑ 1.23x | 1 | 0s | 17d ago | 31m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 894 ms | ↑ 1.89x | 0 | — | — | 30m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 410 ms | → 0.98x | 0 | — | — | 12m ago |
| [AIStack](https://lmspeed.net/provider/aistack) | 99.76% | 99.71% | 96.06% | 96.06% | 3321 ms | ↑ 1.18x | 5 | 0s | 3d ago | 32m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.76% | 99.83% | 99.73% | 99.73% | 3283 ms | ↑ 1.15x | 3 | 0s | 3d ago | 31m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 99.76% | 99.66% | 98.87% | 98.87% | 3086 ms | ↑ 1.19x | 6 | 0s | 4d ago | 32m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 99.76% | 99.94% | 99.53% | 99.53% | 3569 ms | ↑ 1.06x | 1 | 0s | 5d ago | 31m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 99.76% | 99.31% | 99.44% | 99.44% | 3174 ms | ↑ 1.15x | 5 | 38m | 5d ago | 32m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 99.76% | 99.83% | 43.93% | 43.93% | 1440 ms | ↑ 1.09x | 3 | 0s | 1d ago | 31m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.76% | 99.77% | 79.47% | 79.47% | 1763 ms | ↓ 0.93x | 4 | 0s | 2d ago | 27m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 99.76% | 96.61% | 31.44% | 31.44% | 2096 ms | ↑ 1.22x | 10 | 1h 59m | 6d ago | 29m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 99.76% | 99.94% | 19.19% | 19.19% | 738 ms | → 0.97x | 1 | 0s | 7d ago | 30m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 99.76% | 99.89% | 99.66% | 99.66% | 1319 ms | ↑ 1.45x | 2 | 0s | 6d ago | 30m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 99.76% | 99.94% | 99.95% | 99.95% | 2265 ms | ↑ 1.18x | 1 | 0s | 2d ago | 27m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.75% | 99.36% | 97.60% | 97.60% | 2299 ms | ↑ 1.26x | 9 | 7m | 5d ago | 19m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.75% | 99.94% | 97.51% | 97.51% | 2717 ms | ↑ 1.35x | 1 | 0s | 5h ago | 21m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 99.75% | 99.48% | 52.97% | 52.97% | 1218 ms | → 0.96x | 5 | 24m | 4d ago | 21m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 99.75% | 99.94% | 90.36% | 90.36% | 2260 ms | ↑ 1.16x | 1 | 0s | 5d ago | 20m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 99.75% | 99.54% | 21.75% | 21.75% | 1759 ms | ↑ 1.18x | 4 | 30m | 4d ago | 21m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 99.75% | 99.36% | 98.47% | 98.47% | 1951 ms | ↑ 1.31x | 2 | 2h 9m | 3d ago | 19m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 99.75% | 99.88% | 20.89% | 20.89% | 1280 ms | ↑ 1.16x | 2 | 0s | 4d ago | 21m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.75% | 98.32% | 96.68% | 96.68% | 4635 ms | ↑ 1.24x | 11 | 47m | 6d ago | 21m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 99.75% | 99.94% | 98.36% | 98.36% | 2499 ms | ↑ 1.36x | 1 | 0s | 2d ago | 19m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 99.75% | 99.94% | 96.61% | 96.61% | 3301 ms | ↑ 1.60x | 1 | 0s | 1d ago | 21m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 99.75% | 99.94% | 21.84% | 21.84% | 3870 ms | ↑ 1.68x | 1 | 0s | 1d ago | 21m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 99.75% | 99.88% | 99.94% | 99.94% | 1158 ms | ↑ 1.10x | 2 | 0s | 7d ago | 13m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.75% | 92.82% | 84.96% | 84.96% | 1333 ms | ↓ 0.49x | 14 | 3h 20m | 5d ago | 13m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 99.75% | 45.71% | 47.38% | 47.38% | 689 ms | → 0.98x | 4 | 4d 2h | 6d ago | 14m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 99.75% | 99.88% | 99.93% | 99.93% | 2070 ms | ↑ 1.77x | 2 | 0s | 5d ago | 13m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 99.75% | 99.88% | 99.93% | 99.93% | 1783 ms | ↑ 1.52x | 2 | 0s | 6d ago | 14m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 99.75% | 99.94% | 99.93% | 99.93% | 2257 ms | ↑ 1.44x | 1 | 0s | 18h ago | 14m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.75% | 97.96% | 96.32% | 96.32% | 1908 ms | ↑ 1.24x | 12 | 45m | 7d ago | 14m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 99.75% | 55.48% | 65.72% | 65.72% | 1538 ms | ↑ 1.24x | 2 | 6d 14h | 4d ago | 16m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 99.75% | 99.65% | 99.60% | 99.60% | 1398 ms | ↑ 1.30x | 4 | 14m | 5d ago | 14m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 99.75% | 99.82% | 98.93% | 98.93% | 3126 ms | ↑ 1.12x | 3 | 0s | 2d ago | 14m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 99.75% | 99.94% | 98.15% | 98.15% | 1720 ms | ↑ 1.32x | 1 | 0s | 2d ago | 15m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.75% | 96.32% | 97.41% | 97.41% | 688 ms | ↓ 0.73x | 2 | 12h 5m | 2d ago | 14m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 99.75% | 99.94% | 99.53% | 99.53% | 2910 ms | ↑ 1.73x | 1 | 0s | 4d ago | 14m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 99.74% | 99.74% | 99.74% | 99.74% | 2395 ms | → 1.00x | 1 | 0s | 6d ago | 12m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.51% | 98.97% | 98.99% | 98.99% | 3986 ms | ↑ 1.07x | 10 | 18m | 4d ago | 29m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.51% | 99.83% | 19.93% | 19.93% | 3863 ms | ↑ 1.41x | 3 | 0s | 3d ago | 26m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.51% | 99.71% | 20.01% | 20.01% | 2264 ms | ↑ 1.07x | 5 | 0s | 1d ago | 30m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.51% | 98.97% | 99.16% | 99.16% | 4074 ms | ↑ 1.11x | 10 | 18m | 4d ago | 29m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 99.51% | 99.77% | 66.88% | 66.88% | 1356 ms | → 0.97x | 3 | 7m | 4d ago | 20m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 99.51% | 99.71% | 90.51% | 90.51% | 775 ms | → 0.98x | 5 | 0s | 2d ago | 20m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 99.51% | 99.48% | 98.92% | 98.92% | 1959 ms | ↓ 0.47x | 5 | 24m | 4d ago | 19m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.51% | 99.59% | 68.32% | 68.32% | 1274 ms | ↑ 1.45x | 5 | 12m | 5d ago | 20m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.51% | 99.77% | 22.58% | 22.58% | 1468 ms | ↑ 1.18x | 4 | 0s | 1d ago | 21m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 99.51% | 99.71% | 98.64% | 98.64% | 1375 ms | ↑ 1.93x | 4 | 7m | 7d ago | 19m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.51% | 99.13% | 91.39% | 91.39% | 1529 ms | ↑ 1.08x | 14 | 2m | 6d ago | 20m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.51% | 99.83% | 99.82% | 99.82% | 2248 ms | ↓ 0.34x | 3 | 0s | 3h ago | 21m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 99.51% | 99.88% | 96.76% | 96.76% | 863 ms | ↑ 1.24x | 2 | 0s | 1d ago | 18m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 99.51% | 99.59% | 99.59% | 99.59% | 1655 ms | → 1.04x | 2 | 0s | 5d ago | 12m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 99.51% | 99.70% | 99.70% | 99.70% | 1829 ms | ↑ 1.12x | 1 | 30m | 7d ago | 12m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 99.51% | 99.77% | 99.62% | 99.62% | 1965 ms | ↓ 0.56x | 4 | 0s | 2d ago | 13m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 99.51% | 99.77% | 99.77% | 99.77% | 1749 ms | ↓ 0.86x | 3 | 0s | 2d ago | 12m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 99.51% | 99.51% | 99.51% | 99.51% | 1179 ms | ↓ 0.76x | 5 | 12m | 2d ago | 12m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 99.51% | 99.65% | 99.65% | 99.65% | 1447 ms | → 0.99x | 2 | 0s | 2d ago | 12m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 99.51% | 99.18% | 98.62% | 98.62% | 1384 ms | ↓ 0.58x | 4 | 60m | 24h ago | 14m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.51% | 97.49% | 98.67% | 98.67% | 904 ms | ↑ 1.63x | 8 | 1h 52m | 1h ago | 14m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 99.51% | 99.67% | 99.67% | 99.67% | 395 ms | ↓ 0.86x | 3 | 0s | 7h ago | 14m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.51% | 97.20% | 97.80% | 97.80% | 4506 ms | ↑ 1.30x | 24 | 28m | 3d ago | 17m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.51% | 99.77% | 97.89% | 97.89% | 615 ms | ↓ 0.76x | 4 | 0s | 2d ago | 15m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 99.51% | 98.66% | 92.23% | 92.23% | 740 ms | ↑ 1.06x | 10 | 29m | 2d ago | 15m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 99.51% | 99.88% | 87.38% | 87.38% | 1159 ms | → 0.96x | 2 | 0s | 6d ago | 14m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.51% | 99.36% | 99.75% | 99.75% | 4696 ms | ↑ 1.45x | 7 | 17m | 22h ago | 17m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 99.51% | 99.18% | 96.71% | 96.71% | 1445 ms | → 1.05x | 6 | 35m | 8h ago | 15m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 99.27% | 98.91% | 98.34% | 98.34% | 4533 ms | → 1.04x | 19 | 0s | 2h ago | 33m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.27% | 99.66% | 55.36% | 55.36% | 1671 ms | ↑ 1.23x | 6 | 0s | 2d ago | 28m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 99.27% | 99.14% | 68.87% | 68.87% | 3946 ms | → 1.00x | 14 | 2m | 4d ago | 27m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 99.26% | 98.66% | 67.21% | 67.21% | 4710 ms | ↑ 1.06x | 20 | 5m | 3d ago | 20m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 99.26% | 99.77% | 53.45% | 53.45% | 596 ms | ↓ 0.89x | 4 | 0s | 8h ago | 18m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.26% | 99.30% | 98.75% | 98.75% | 2427 ms | ↑ 1.18x | 5 | 42m | 3d ago | 14m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 99.01% | 99.77% | 99.86% | 99.86% | 1181 ms | ↓ 0.74x | 1 | 1h 9m | 4d ago | 14m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 99.01% | 99.07% | 99.14% | 99.14% | 2142 ms | ↑ 1.57x | 9 | 21m | 3d ago | 14m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.01% | 97.38% | 98.34% | 98.34% | 4063 ms | ↑ 1.32x | 18 | 43m | 7d ago | 17m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (57)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.79% | 98.63% | 86.79% | 86.79% | 3906 ms | ↑ 1.31x | 24 | 0s | 17h ago | 33m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.78% | 98.16% | 98.91% | 98.91% | 1720 ms | → 1.02x | 22 | 13m | 21h ago | 27m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 98.77% | 98.49% | 86.36% | 86.36% | 4595 ms | ↑ 1.09x | 25 | 1m | 2d ago | 21m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 98.77% | 99.71% | 96.06% | 96.06% | 1420 ms | ↑ 1.60x | 1 | 2h 1m | 2d ago | 12m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 98.77% | 99.71% | 98.14% | 98.14% | 476 ms | ↓ 0.51x | 1 | 1h 40m | 2d ago | 16m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.77% | 99.65% | 99.45% | 99.45% | 4849 ms | ↑ 1.50x | 5 | 4m | 2d ago | 15m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 98.77% | 82.63% | 82.32% | 82.32% | 4346 ms | ↓ 0.78x | 35 | 3h 17m | 17h ago | 16m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 98.54% | 98.39% | 85.83% | 85.83% | 4398 ms | → 1.02x | 25 | 4m | 2d ago | 29m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 98.52% | 97.19% | 98.01% | 98.01% | 1702 ms | ↑ 2.18x | 8 | 1h 60m | 6d ago | 12m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 98.30% | 98.50% | 18.24% | 18.24% | 3764 ms | ↑ 1.40x | 12 | 29m | 1h ago | 26m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 98.28% | 98.60% | 98.58% | 98.58% | 3357 ms | ↑ 1.49x | 24 | 0s | 18h ago | 12m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 98.27% | 97.44% | 98.71% | 98.71% | 3151 ms | ↑ 1.63x | 17 | 47m | 18h ago | 17m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 98.03% | 96.40% | 95.90% | 95.90% | 3665 ms | ↑ 1.33x | 6 | 3h 37m | 6h ago | 19m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 97.81% | 99.48% | 99.61% | 99.61% | 2536 ms | ↑ 1.13x | 1 | 3h 60m | 3d ago | 29m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 97.79% | 97.62% | 86.12% | 86.12% | 4790 ms | ↑ 1.08x | 29 | 11m | 16h ago | 19m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 97.32% | 97.53% | 74.62% | 74.62% | 4552 ms | ↑ 1.08x | 38 | 4m | 1h ago | 27m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 97.28% | 98.19% | 98.58% | 98.58% | 2200 ms | ↑ 1.50x | 7 | 1h 16m | 1d ago | 14m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 97.08% | 98.39% | 19.44% | 19.44% | 4553 ms | ↑ 1.25x | 28 | 0s | 5h ago | 26m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 97.08% | 98.10% | 96.51% | 96.51% | 1791 ms | ↑ 1.31x | 8 | 1h 10m | 1d ago | 27m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.04% | 89.73% | 89.73% | 89.73% | 4647 ms | → 1.02x | 17 | 2h 7m | 14h ago | 12m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 97.04% | 98.78% | 50.72% | 50.72% | 4269 ms | ↑ 2.30x | 19 | 3m | 22h ago | 17m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 96.79% | 99.18% | 98.69% | 98.69% | 1135 ms | ↓ 0.64x | 2 | 2h 55m | 6d ago | 14m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 96.59% | 99.08% | 99.72% | 99.72% | 164 ms | ↑ 1.24x | 11 | 9m | 3d ago | 30m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.55% | 97.03% | 97.03% | 97.03% | 4586 ms | → 1.02x | 14 | 6m | 19h ago | 12m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 96.35% | 95.92% | 18.13% | 18.13% | 2695 ms | ↑ 1.06x | 66 | 2m | 2d ago | 27m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 96.31% | 97.36% | 97.36% | 97.36% | 3532 ms | ↑ 1.06x | 11 | 9m | 2d ago | 13m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 96.06% | 99.07% | 99.61% | 99.61% | 2054 ms | ↑ 1.18x | 2 | 3h 20m | 20h ago | 18m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 95.86% | 97.06% | 98.53% | 98.53% | 4451 ms | ↑ 1.16x | 49 | 1m | 8h ago | 26m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.82% | 96.05% | 82.80% | 82.80% | 4857 ms | → 1.04x | 63 | 2m | 49m ago | 19m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 95.62% | 93.35% | 42.55% | 42.55% | 3423 ms | → 1.01x | 53 | 29m | 3d ago | 31m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 95.38% | 96.33% | 19.36% | 19.36% | 879 ms | ↓ 0.78x | 61 | 59s | 3d ago | 28m ago |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 95.09% | 93.90% | 72.78% | 72.78% | 1881 ms | ↑ 1.27x | 17 | 1h 47m | 2d ago | 20m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 95.07% | 95.99% | 83.74% | 83.74% | 4537 ms | → 0.97x | 58 | 6m | 1h ago | 17m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 95.06% | 96.94% | 89.28% | 89.28% | 4773 ms | ↑ 1.17x | 10 | 40m | 20h ago | 15m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 94.66% | 98.68% | 99.74% | 99.74% | 1970 ms | ↑ 1.17x | 3 | 2h 10m | 6d ago | 31m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 94.58% | 74.81% | 85.44% | 85.44% | 1079 ms | ↑ 1.62x | 7 | 1d 2h | 3d ago | 12m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 93.67% | 98.39% | 48.28% | 48.28% | 2817 ms | ↑ 1.20x | 6 | 1h 23m | 18h ago | 27m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 91.89% | 97.97% | 97.89% | 97.89% | 1757 ms | ↓ 0.87x | 2 | 6h 16m | 5d ago | 20m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 90.12% | 94.06% | 95.45% | 95.45% | 1619 ms | ↓ 0.76x | 12 | 3h 18m | 16h ago | 15m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.45% | 88.29% | 20.57% | 20.57% | 4532 ms | ↓ 0.95x | 156 | 8m | 1h ago | 21m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 87.65% | 89.04% | 57.56% | 57.56% | 4149 ms | ↑ 1.05x | 151 | 7m | 20h ago | 16m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 87.38% | 96.91% | 99.59% | 99.59% | 4162 ms | ↑ 1.38x | 3 | 6h 10m | 6d ago | 32m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 86.45% | 38.92% | 26.69% | 26.69% | 3171 ms | ↑ 1.11x | 190 | 1h 54m | 3h ago | 12m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 85.43% | 87.92% | 92.79% | 92.79% | 2898 ms | ↓ 0.62x | 85 | 33m | 2d ago | 14m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 84.44% | 93.00% | 93.00% | 93.00% | 1442 ms | → 0.97x | 4 | 6h 14m | 3d ago | 14m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 83.00% | 91.29% | 90.93% | 90.93% | 1378 ms | ↑ 1.21x | 52 | 48m | 2h ago | 12m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 82.97% | 95.05% | 99.31% | 99.31% | 4027 ms | ↑ 1.30x | 12 | 2h 27m | 5d ago | 26m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 80.79% | 81.56% | 81.56% | 81.56% | 4387 ms | → 0.98x | 103 | 47m | 2h ago | 12m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 75.18% | 70.59% | 62.58% | 62.58% | 4767 ms | → 1.00x | 322 | 17m | 1h ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 70.02% | 88.29% | 35.58% | 35.58% | 1880 ms | ↑ 1.07x | 14 | 5h 29m | 2d ago | 21m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 69.29% | 70.42% | 24.23% | 24.23% | 4649 ms | → 1.02x | 299 | 20m | 3h ago | 20m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 68.86% | 81.25% | 97.16% | 97.16% | 4647 ms | ↑ 1.24x | 177 | 22m | 3h ago | 30m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 65.02% | 38.47% | 38.47% | 38.47% | 1338 ms | ↓ 0.92x | 1 | 13d 23h | 19d ago | 12m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 60.58% | 57.63% | 88.58% | 88.58% | 2099 ms | ↑ 1.50x | 1 | 12d 20h | 17d ago | 30m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 53.56% | 12.66% | 31.23% | 31.23% | 2376 ms | → 1.00x | 1 | 26d 3h | 30d ago | 20m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 52.43% | 12.36% | 74.58% | 74.58% | 3851 ms | → 1.00x | 3 | 8d 17h | 6h ago | 33m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 44.20% | 69.00% | 92.20% | 92.20% | 4644 ms | ↑ 2.04x | 4 | 2d 6h | 22h ago | 17m ago |

</details>

<details open>
<summary><strong>🔴 Down (257)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 96.12% | 99.03% | 99.59% | 99.59% | 3880 ms | ↑ 1.05x | 16 | 2m | 31m ago | 31m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 91.00% | 97.82% | 98.86% | 98.86% | 3849 ms | ↑ 1.39x | 2 | 7h 15m | 15h ago | 30m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 90.51% | 97.71% | 87.31% | 87.31% | 1303 ms | → 1.04x | 2 | 8h | 16h ago | 30m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 89.66% | 97.08% | 98.13% | 98.13% | 2427 ms | ↑ 1.12x | 9 | 1h 53m | 17h ago | 14m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 79.31% | 93.23% | 95.37% | 95.37% | 1683 ms | ↓ 0.94x | 11 | 3h 54m | 1d ago | 14m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 62.90% | 34.78% | 31.72% | 31.72% | 2046 ms | ↑ 1.15x | 2 | 9d 19h | 3d ago | 21m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 62.72% | 91.19% | 94.78% | 94.78% | 645 ms | ↓ 0.65x | 1 | 2d 15h | 3d ago | 14m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 48.77% | 86.46% | 92.11% | 92.11% | 830 ms | ↑ 1.07x | 28 | 3h 4m | 4d ago | 13m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 28.57% | 82.99% | 90.17% | 90.17% | 2038 ms | ↑ 1.96x | 2 | 2d 12h | 5d ago | 12m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 25.93% | 82.32% | 85.51% | 85.51% | 4971 ms | ↑ 2.66x | 79 | 1h 11m | 4h ago | 15m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 18.69% | 80.14% | 78.89% | 78.89% | 143 ms | ↑ 1.12x | 4 | 1d 11h | 6d ago | 32m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 13.30% | 37.96% | 37.96% | 37.96% | 672 ms | ↓ 0.93x | 2 | 3d 1h | 6d ago | 13m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 4.69% | 76.79% | 88.01% | 88.01% | 4128 ms | ↑ 3.10x | 13 | 12h 11m | 7d ago | 15m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 4.44% | 57.49% | 55.31% | 55.31% | 4506 ms | ↑ 1.40x | 3 | 2d 5h | 7d ago | 15m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 4.44% | 77.07% | 86.21% | 86.21% | 4139 ms | ↑ 2.46x | 4 | 1d 16h | 7d ago | 15m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 4.44% | 77.25% | 84.57% | 84.57% | 3980 ms | ↑ 2.42x | 4 | 1d 16h | 7d ago | 15m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 4.44% | 30.58% | 29.77% | 29.77% | 4679 ms | ↑ 1.06x | 8 | 19h 55m | 7d ago | 15m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 4.44% | 77.30% | 86.07% | 86.07% | 3469 ms | ↑ 2.93x | 3 | 2d 5h | 7d ago | 15m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 2.43% | 1.83% | 58.31% | 58.31% | 4289 ms | ↑ 1.22x | 32 | 21h 46m | 6h ago | 33m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.99% | 76.45% | 85.99% | 85.99% | 942 ms | ↓ 0.83x | 2 | 3d 11h | 7d ago | 13m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.49% | 52.24% | 50.73% | 50.73% | 2396 ms | ↑ 1.08x | 9 | 1d 13h | 22h ago | 28m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 79.30% | 79.30% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 65.68% | 65.68% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 70.65% | 70.65% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 44.19% | 44.19% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 76.42% | 76.42% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 57.27% | 57.27% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.41% | 5.41% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 12.00% | 12.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 53.06% | 53.06% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.25% | 3.25% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 66.14% | 89.89% | 89.89% | — | — | 1 | 10d 3h | 10d ago | 15m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 0.00% | 0.00% | 63.98% | 63.98% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 79.54% | 79.54% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.91% | 34.91% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 88.83% | 88.83% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 22.35% | 22.35% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 71.38% | 71.38% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 48.03% | 48.03% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 28.39% | 28.39% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 47.79% | 88.07% | 88.07% | — | — | 6 | 2d 14h | 16d ago | 31m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 79.92% | 79.92% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 60.20% | 60.20% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 73.83% | 73.83% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 22h | 10d ago | 32m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 14.10% | 14.10% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 47.08% | 47.08% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 13.32% | 90.69% | 90.69% | — | — | 5 | 5d 5h | 26d ago | 28m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 32.28% | 32.28% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 80.29% | 80.29% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 48.08% | 86.84% | 86.84% | — | — | 1 | 15d 15h | 16d ago | 17m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.29% | 3.29% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 80.14% | 80.14% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 30.69% | 30.69% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 49.74% | 49.74% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 0.00% | 38.94% | 31.30% | 31.30% | — | — | 4 | 4d 14h | 9d ago | 20m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.97% | 1.97% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 87.77% | 87.77% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 50.66% | 50.66% | 50.66% | — | — | 1 | 11d 1h | 11d ago | 12m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 3.85% | 71.90% | 71.90% | — | — | 1 | 28d 19h | 29d ago | 17m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 71.88% | 71.88% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 29.03% | 29.03% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 52.34% | 52.34% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 5.71% | 49.34% | 49.34% | — | — | 1 | 28d 6h | 28d ago | 16m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 23.23% | 23.23% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 39.70% | 80.26% | 80.26% | — | — | 5 | 3d 15h | 18d ago | 33m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 39.09% | 40.12% | 40.12% | — | — | 3 | 6d 3h | 18d ago | 28m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 4h | 16d ago | 12m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 41.08% | 59.41% | 59.41% | — | — | 1 | 17d 20h | 18d ago | 15m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 54.84% | 54.84% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 22.85% | 22.85% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 5.01% | 5.01% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 63.11% | 63.11% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 79.86% | 79.86% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 62.94% | 79.09% | 79.09% | — | — | 1 | 11d 2h | 11d ago | 15m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 6.14% | 6.14% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 76.27% | 76.27% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 78.69% | 78.69% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 30.77% | 30.77% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 48.63% | 90.09% | 90.09% | — | — | 2 | 7d 16h | 15d ago | 19m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 25.18% | 25.18% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 7.11% | 22.70% | 22.70% | — | — | 2 | 13d 22h | 27d ago | 16m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 50.74% | 50.74% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 51.25% | 51.25% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 7.50% | 7.50% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 61.60% | 61.60% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Cymru API](https://lmspeed.net/provider/cymru-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 44.82% | 44.82% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 29.54% | 29.54% | 29.54% | — | — | 3 | 3d 18h | 11d ago | 14m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 40.72% | 40.72% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 25.72% | 25.72% | — | — | 1 | 29d 23h | 30d ago | 13m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 79.88% | 79.88% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 56.42% | 56.42% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 37.47% | 37.47% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 31.70% | 71.77% | 71.77% | — | — | 2 | 10d 7h | 21d ago | 18m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 76.38% | 76.38% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 15.97% | 71.01% | 71.01% | — | — | 2 | 12d 14h | 25d ago | 15m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.44% | 2.44% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 80.10% | 80.10% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 40.07% | 40.07% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 31.26% | 93.92% | 93.92% | — | — | 1 | 20d 17h | 21d ago | 27m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 79.85% | 79.85% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 31.50% | 31.50% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 79.77% | 79.77% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 48.65% | 48.65% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 20.98% | 20.98% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 42.28% | 42.28% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 77.52% | 77.52% | — | — | 1 | 29d 23h | 30d ago | 33m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 62.21% | 62.21% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 27.15% | 27.15% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 3h | 16d ago | 14m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 76.06% | 76.06% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 2h | 16d ago | 14m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 47.60% | 47.60% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 3.04% | 3.04% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 3h | 16d ago | 14m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 41.61% | 41.61% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 74.52% | 74.52% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 22.15% | 40.14% | 40.14% | — | — | 4 | 5d 21h | 23d ago | 29m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 56.86% | 56.86% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 36.98% | 36.98% | 36.98% | — | — | 1 | 10d | 10d ago | 14m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 39.49% | 39.49% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 58.46% | 58.46% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 85.65% | 85.65% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 73.31% | 97.40% | 97.40% | — | — | 2 | 3d 23h | 8d ago | 31m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 27.27% | 27.27% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.59% | 11.59% | — | — | 1 | 29d 24h | 30d ago | 19m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 0.00% | 0.00% | 22.19% | 22.19% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 23.23% | 23.23% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 21m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 51.04% | 51.04% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 4.12% | 90.69% | 90.69% | — | — | 1 | 28d 17h | 29d ago | 31m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 52.62% | 52.62% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 17.83% | 72.25% | 72.25% | — | — | 1 | 24d 16h | 25d ago | 17m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 9.13% | 9.13% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.83% | 16.83% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 47.71% | 47.71% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 53.20% | 49.99% | 49.99% | — | — | 2 | 6d 24h | 14d ago | 19m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 20.99% | 20.99% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 53.17% | 53.17% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 91.96% | 91.96% | — | — | 1 | 9d 21h | 10d ago | 26m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 37.45% | 37.45% | — | — | 1 | 16d 3h | 16d ago | 20m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 21.34% | 21.34% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 32.37% | 32.37% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 0.00% | 0.00% | 44.91% | 44.91% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.35% | 5.35% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 2.61% | 77.25% | 77.25% | — | — | 1 | 29d 5h | 29d ago | 19m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 87.04% | 87.04% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 22.85% | 57.71% | 57.71% | — | — | 1 | 23d 5h | 23d ago | 12m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 79.97% | 79.97% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 78.92% | 78.92% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 61.55% | 61.55% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 72.27% | 72.27% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 78.78% | 78.78% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 22h | 10d ago | 14m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.82% | 18.82% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.63% | 57.63% | 57.63% | — | — | 1 | 29d 19h | 30d ago | 32m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 3.61% | 39.37% | 39.37% | — | — | 1 | 28d 21h | 29d ago | 17m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.93% | 3.93% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.82% | 32.82% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 1.55% | 66.12% | 66.12% | — | — | 2 | 14d 18h | 29d ago | 30m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 6.28% | 24.06% | 24.06% | — | — | 11 | 2d 13h | 27d ago | 18m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 7.14% | 7.14% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 63.30% | 63.30% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 28.28% | 28.28% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 26m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 65.16% | 65.16% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 36.42% | 36.42% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.71% | 4.71% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 9d 21h | 10d ago | 14m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 4.08% | 52.07% | 52.07% | — | — | 1 | 28d 17h | 29d ago | 15m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 45.26% | 45.26% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 33.59% | 33.59% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 20.11% | 20.11% | — | — | 1 | 29d 24h | 30d ago | 15m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 22.25% | 5.28% | 5.28% | — | — | 3 | 7d 19h | 23d ago | 30m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 11.17% | 11.17% | — | — | 1 | 29d 24h | 30d ago | 18m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 17.32% | 17.32% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 16.50% | 16.50% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 30.34% | 30.34% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.54% | 9.54% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 8.07% | 8.07% | — | — | 1 | 29d 23h | 30d ago | 12m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.81% | 0.81% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.61% | 4.61% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 5.36% | 5.36% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 48.13% | 48.13% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 43.17% | 43.17% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 79.93% | 79.93% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 70.16% | 70.16% | — | — | 1 | 29d 24h | 30d ago | 16m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 44.10% | 44.10% | — | — | 1 | 29d 24h | 30d ago | 17m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 80.12% | 80.12% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 49.98% | 49.98% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 24h | 30d ago | 27m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 28m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 26m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.91% | 39.91% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.69% | 1.69% | — | — | 1 | 29d 23h | 30d ago | 14m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.66% | 18.66% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 29m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 16d 3h | 16d ago | 14m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 77.94% | 77.94% | — | — | 1 | 29d 23h | 30d ago | 25m ago |

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
