# provider-health

Historical health records for [LMSpeed](https://lmspeed.net) providers.

Healthchecks older than 35 days are moved out of the live database and archived into this repo once a day by [`archive.yml`](.github/workflows/archive.yml).

## Status

**671 providers** — 359 🟢 operational · 48 🟡 degraded · 264 🔴 down · 0 ⚫ unknown

_Updated 2026-06-28 07:05 UTC. 7d/30d come from `provider_healthchecks`; 1y and all-time combine archived `history/` entries with unarchived rows in the live DB._

## Metrics

- **7d / 30d / 1y / All-time uptime** — rolling-window uptime = `ok checks ÷ total checks` over the window.
- **p95 (7d)** — 95th-percentile latency of successful checks in the last 7 days. More representative than avg for tail-sensitive workloads, where a few slow requests dominate user-perceived latency.
- **Trend** — `7d avg latency ÷ 30d avg latency`. `↑ 1.30x` means the last week is ~30% slower than the trailing month; `↓` means faster; `→` is within ±5%. Catches regressions that uptime hides.
- **Incidents (30d)** — consecutive fail runs over the last 30 days. Same 99% uptime can be "1 big outage" vs "50 flakes" — incident count tells you which.
- **MTTR** — mean time to recovery = average fail-run duration (first fail → last fail of a run). Complements incident count from a reliability-engineering angle: low count + long MTTR means rare but severe, high count + short MTTR means flaky.
- **Last incident** — timestamp of the most recent fail-run start. Quickly distinguishes "just broke" from "stable for a month".

<details open>
<summary><strong>🟢 Operational (359)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Zero API](https://lmspeed.net/provider/0api-qzz-io) | 100.00% | 100.00% | 98.36% | 98.36% | 707 ms | → 1.03x | 0 | — | — | 17m ago |
| [180txt API](https://lmspeed.net/provider/180txt-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 1584 ms | → 0.96x | 0 | — | — | 15m ago |
| [GPT Load (PP.UA)](https://lmspeed.net/provider/20230621-pp-ua) | 100.00% | 99.82% | 94.10% | 94.10% | 2277 ms | ↑ 1.06x | 3 | 0s | 22d ago | 22m ago |
| [3173721 API](https://lmspeed.net/provider/3173721-new-api) | 100.00% | 99.82% | 23.20% | 23.20% | 3169 ms | ↑ 1.27x | 3 | 0s | 18d ago | 24m ago |
| [352287 API](https://lmspeed.net/provider/352287-api) | 100.00% | 100.00% | 97.52% | 97.52% | 3855 ms | ↑ 1.14x | 0 | — | — | 32m ago |
| [429496 AI](https://lmspeed.net/provider/429496-ai) | 100.00% | 100.00% | 58.44% | 58.44% | 1697 ms | ↓ 0.88x | 0 | — | — | 21m ago |
| [Liunew API](https://lmspeed.net/provider/688-qzz-io) | 100.00% | 99.92% | 99.92% | 99.92% | 1178 ms | ↓ 0.91x | 1 | 0s | 22d ago | 15m ago |
| [一叶知秋API](https://lmspeed.net/provider/88996-cloud) | 100.00% | 100.00% | 97.92% | 97.92% | 3724 ms | → 1.01x | 0 | — | — | 28m ago |
| [A3](https://lmspeed.net/provider/a3-awsl-app) | 100.00% | 99.76% | 98.70% | 98.70% | 1056 ms | ↓ 0.90x | 4 | 0s | 8d ago | 23m ago |
| [AAAI](https://lmspeed.net/provider/aaai) | 100.00% | 100.00% | 98.85% | 98.85% | 2107 ms | ↑ 1.07x | 0 | — | — | 34m ago |
| [AASS API](https://lmspeed.net/provider/aass-api) | 100.00% | 100.00% | 99.55% | 99.55% | 3538 ms | ↑ 1.05x | 0 | — | — | 34m ago |
| [MapleLeaf API](https://lmspeed.net/provider/ai-071129-xyz) | 100.00% | 100.00% | 95.62% | 95.62% | 2966 ms | ↑ 1.17x | 0 | — | — | 18m ago |
| [霸气公益平台](https://lmspeed.net/provider/ai-121628-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2402 ms | ↑ 1.26x | 0 | — | — | 16m ago |
| [Zer0by](https://lmspeed.net/provider/ai-1seey-com) | 100.00% | 100.00% | 97.91% | 97.91% | 3531 ms | ↑ 1.24x | 0 | — | — | 18m ago |
| [丸美小沐](https://lmspeed.net/provider/ai-api-xn-fiqs8s) | 100.00% | 99.82% | 92.61% | 92.61% | 3404 ms | ↑ 1.29x | 1 | 50m | 17d ago | 35m ago |
| [星辰·AI](https://lmspeed.net/provider/ai-centos-hk) | 100.00% | 99.94% | 99.94% | 99.94% | 2471 ms | ↑ 1.26x | 1 | 0s | 9d ago | 16m ago |
| [Cuz AI](https://lmspeed.net/provider/ai-cuz-lab-space) | 100.00% | 100.00% | 100.00% | 100.00% | 1164 ms | ↑ 1.15x | 0 | — | — | 14m ago |
| [E-larex's AI Proxy](https://lmspeed.net/provider/ai-e-larex-com) | 100.00% | 100.00% | 98.75% | 98.75% | 1486 ms | ↑ 1.13x | 0 | — | — | 19m ago |
| [Huainova 公益站](https://lmspeed.net/provider/ai-huaibao-top) | 100.00% | 100.00% | 99.01% | 99.01% | 446 ms | ↓ 0.34x | 0 | — | — | 16m ago |
| [黑与白公益站](https://lmspeed.net/provider/ai-hybgzs-com) | 100.00% | 100.00% | 39.16% | 39.16% | 851 ms | ↑ 1.24x | 0 | — | — | 29m ago |
| [JC AI API](https://lmspeed.net/provider/ai-jc-ai-co) | 100.00% | 100.00% | 100.00% | 100.00% | 1572 ms | ↑ 1.13x | 0 | — | — | 14m ago |
| [Only AV](https://lmspeed.net/provider/ai-onlyav-cn) | 100.00% | 100.00% | 97.12% | 97.12% | 3026 ms | ↑ 1.14x | 0 | — | — | 22m ago |
| [PrismAI](https://lmspeed.net/provider/ai-prism-uno) | 100.00% | 99.88% | 98.90% | 98.90% | 1138 ms | ↑ 1.16x | 1 | 30m | 19d ago | 31m ago |
| [QYES AI](https://lmspeed.net/provider/ai-qyes-top) | 100.00% | 81.75% | 67.91% | 67.91% | 2000 ms | ↑ 1.50x | 2 | 2d 14h | 12d ago | 18m ago |
| [Smart API](https://lmspeed.net/provider/ai-smartall-cloud) | 100.00% | 100.00% | 99.97% | 99.97% | 1341 ms | ↑ 1.22x | 0 | — | — | 15m ago |
| [哈基米公益站](https://lmspeed.net/provider/ai-td-ee) | 100.00% | 99.88% | 96.91% | 96.91% | 890 ms | ↑ 1.13x | 2 | 0s | 9d ago | 20m ago |
| [WSocket AI](https://lmspeed.net/provider/ai-wsocket-xyz) | 100.00% | 99.40% | 88.29% | 88.29% | 2018 ms | ↑ 1.39x | 1 | 3h 51m | 30d ago | 20m ago |
| [Nebula AI](https://lmspeed.net/provider/ai-xae-ccwu-cc) | 100.00% | 99.94% | 99.94% | 99.94% | 1717 ms | → 1.04x | 1 | 0s | 7d ago | 16m ago |
| [云飞 AI](https://lmspeed.net/provider/ai-yunfei-best) | 100.00% | 100.00% | 98.49% | 98.49% | 4195 ms | ↑ 1.19x | 0 | — | — | 20m ago |
| [AI API](https://lmspeed.net/provider/aiapi-exe-xyz) | 100.00% | 99.70% | 99.64% | 99.64% | 1296 ms | ↑ 1.11x | 3 | 19m | 13d ago | 16m ago |
| [Yanami](https://lmspeed.net/provider/aiapi-yanami-vip) | 100.00% | 100.00% | 86.87% | 86.87% | 2581 ms | ↑ 1.38x | 0 | — | — | 19m ago |
| [Aiberm](https://lmspeed.net/provider/aiberm-com) | 100.00% | 99.94% | 99.95% | 99.95% | 1117 ms | → 0.96x | 1 | 0s | 15d ago | 15m ago |
| [爱次元API](https://lmspeed.net/provider/aicy-pro) | 100.00% | 100.00% | 97.83% | 97.83% | 1441 ms | ↑ 1.13x | 0 | — | — | 21m ago |
| [AkashChat API](https://lmspeed.net/provider/akashchat-api) | 100.00% | 100.00% | 97.94% | 97.94% | 4056 ms | → 1.04x | 0 | — | — | 33m ago |
| [Any Router](https://lmspeed.net/provider/anyrouter-top) | 100.00% | 99.04% | 99.63% | 99.63% | 2225 ms | ↑ 1.08x | 2 | 3h 20m | 9d ago | 20m ago |
| [SkyAI](https://lmspeed.net/provider/api-071572-xyz) | 100.00% | 98.99% | 19.88% | 19.88% | 3448 ms | → 1.01x | 7 | 37m | 8d ago | 28m ago |
| [0CHAT](https://lmspeed.net/provider/api-0chat-vip) | 100.00% | 100.00% | 96.56% | 96.56% | 808 ms | ↓ 0.92x | 0 | — | — | 20m ago |
| [Spaceship](https://lmspeed.net/provider/api-102298-xyz) | 100.00% | 92.45% | 86.42% | 86.42% | 1737 ms | ↓ 0.89x | 8 | 6h 40m | 19d ago | 18m ago |
| [1024x AI](https://lmspeed.net/provider/api-1024x-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 1154 ms | → 1.00x | 0 | — | — | 14m ago |
| [Sub2API](https://lmspeed.net/provider/api-1475258-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1755 ms | ↓ 0.80x | 0 | — | — | 15m ago |
| [17NAS API](https://lmspeed.net/provider/api-17nas-com) | 100.00% | 99.78% | 99.78% | 99.78% | 1560 ms | → 0.98x | 2 | 0s | 13d ago | 14m ago |
| [老魔公益站](https://lmspeed.net/provider/api-2020111-xyz) | 100.00% | 99.88% | 99.03% | 99.03% | 2893 ms | → 0.99x | 2 | 0s | 10d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/api-243706-xyz) | 100.00% | 99.88% | 99.87% | 99.87% | 1461 ms | ↑ 1.08x | 2 | 0s | 19d ago | 18m ago |
| [6345ywz API](https://lmspeed.net/provider/api-6345ywz-cn) | 100.00% | 99.82% | 99.86% | 99.86% | 568 ms | ↓ 0.39x | 1 | 51m | 28d ago | 14m ago |
| [AI Wave](https://lmspeed.net/provider/api-ai-wave-org) | 100.00% | 100.00% | 99.85% | 99.85% | 4045 ms | → 1.03x | 0 | — | — | 28m ago |
| [AI派](https://lmspeed.net/provider/api-aipaibox-com) | 100.00% | 99.94% | 99.73% | 99.73% | 840 ms | ↓ 0.91x | 1 | 0s | 27d ago | 18m ago |
| [AiXiaobai API](https://lmspeed.net/provider/api-aixiaobai-pro) | 100.00% | 100.00% | 100.00% | 100.00% | 1228 ms | ↑ 1.06x | 0 | — | — | 14m ago |
| [Astrdark](https://lmspeed.net/provider/api-astrdark-cyou) | 100.00% | 99.94% | 96.59% | 96.59% | 2038 ms | → 0.95x | 1 | 0s | 7d ago | 18m ago |
| [Chlink API](https://lmspeed.net/provider/api-chlink-de5-net) | 100.00% | 97.95% | 98.01% | 98.01% | 4372 ms | ↑ 1.16x | 13 | 48m | 25d ago | 19m ago |
| [CodeXE](https://lmspeed.net/provider/api-codexe-top) | 100.00% | 99.81% | 99.81% | 99.81% | 2128 ms | ↑ 1.05x | 1 | 30m | 15d ago | 14m ago |
| [DEV88](https://lmspeed.net/provider/api-dev88-tech) | 100.00% | 100.00% | 100.00% | 100.00% | 1125 ms | ↓ 0.75x | 0 | — | — | 16m ago |
| [YX 公益站](https://lmspeed.net/provider/api-dx001-ggff-net) | 100.00% | 100.00% | 100.00% | 100.00% | 406 ms | ↓ 0.57x | 0 | — | — | 16m ago |
| [ETC API](https://lmspeed.net/provider/api-etc-moe) | 100.00% | 99.76% | 99.82% | 99.82% | 663 ms | → 0.98x | 4 | 0s | 17d ago | 16m ago |
| [F2API](https://lmspeed.net/provider/api-f2api-com) | 100.00% | 100.00% | 96.89% | 96.89% | 591 ms | ↓ 0.89x | 0 | — | — | 22m ago |
| [Fengsili API](https://lmspeed.net/provider/api-fengsili-online) | 100.00% | 96.98% | 98.36% | 98.36% | 1974 ms | → 1.01x | 1 | 21h 30m | 24d ago | 15m ago |
| [Future Hub](https://lmspeed.net/provider/api-futureppo-top) | 100.00% | 100.00% | 100.00% | 100.00% | 1064 ms | → 0.96x | 0 | — | — | 14m ago |
| [哈基米API站](https://lmspeed.net/provider/api-gemai-cc) | 100.00% | 100.00% | 56.24% | 56.24% | 1944 ms | ↑ 1.26x | 0 | — | — | 24m ago |
| [Can API](https://lmspeed.net/provider/api-guantou-space) | 100.00% | 98.40% | 98.40% | 98.40% | 832 ms | → 0.98x | 2 | 4h 33m | 17d ago | 15m ago |
| [Lumi API](https://lmspeed.net/provider/api-heang-top) | 100.00% | 99.82% | 99.67% | 99.67% | 1687 ms | ↓ 0.59x | 3 | 0s | 10d ago | 15m ago |
| [IKunCode](https://lmspeed.net/provider/api-ikuncode-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 1683 ms | ↑ 1.26x | 0 | — | — | 15m ago |
| [ModelScope](https://lmspeed.net/provider/api-inference-modelscope-cn) | 100.00% | 100.00% | 99.64% | 99.64% | 3829 ms | ↑ 1.05x | 0 | — | — | 29m ago |
| [Kouri Ai](https://lmspeed.net/provider/api-kourichat-com) | 100.00% | 100.00% | 97.23% | 97.23% | 1601 ms | ↑ 1.09x | 0 | — | — | 29m ago |
| [Kriora](https://lmspeed.net/provider/api-kriora-com) | 100.00% | 99.88% | 99.16% | 99.16% | 1121 ms | ↓ 0.84x | 2 | 0s | 15d ago | 22m ago |
| [乐天图书馆](https://lmspeed.net/provider/api-lotte-library-top) | 100.00% | 100.00% | 84.16% | 84.16% | 3327 ms | ↑ 1.22x | 0 | — | — | 23m ago |
| [MAMMOUTH API](https://lmspeed.net/provider/api-mammouth-ai) | 100.00% | 99.76% | 67.79% | 67.79% | 1390 ms | → 0.98x | 3 | 7m | 8d ago | 23m ago |
| [Mitchll-API](https://lmspeed.net/provider/api-mitchll-com) | 100.00% | 100.00% | 100.00% | 100.00% | 893 ms | → 0.97x | 0 | — | — | 16m ago |
| [MMKG](https://lmspeed.net/provider/api-mmkg-cloud) | 100.00% | 100.00% | 98.80% | 98.80% | 2661 ms | ↑ 1.11x | 0 | — | — | 20m ago |
| [天云港模型开放平台](https://lmspeed.net/provider/api-model-yungnet-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 4514 ms | ↑ 1.19x | 0 | — | — | 15m ago |
| [N1N](https://lmspeed.net/provider/api-n1n-ai) | 100.00% | 100.00% | 93.13% | 93.13% | 720 ms | ↓ 0.88x | 0 | — | — | 23m ago |
| [NUWA](https://lmspeed.net/provider/api-nuwaapi-com) | 100.00% | 100.00% | 98.77% | 98.77% | 1226 ms | ↑ 1.11x | 0 | — | — | 18m ago |
| [OfoxAI](https://lmspeed.net/provider/api-ofox-ai) | 100.00% | 99.94% | 99.85% | 99.85% | 650 ms | ↑ 1.34x | 1 | 0s | 25d ago | 20m ago |
| [Omini Api](https://lmspeed.net/provider/api-ominiapi-top) | 100.00% | 100.00% | 99.46% | 99.46% | 762 ms | ↓ 0.70x | 0 | — | — | 16m ago |
| [Yunchu API](https://lmspeed.net/provider/api-qiulingyan-top) | 100.00% | 99.94% | 98.08% | 98.08% | 3053 ms | → 1.00x | 1 | 0s | 18d ago | 20m ago |
| [Sliam](https://lmspeed.net/provider/api-sliam-site) | 100.00% | 99.94% | 90.30% | 90.30% | 1294 ms | ↑ 1.16x | 1 | 0s | 21d ago | 18m ago |
| [SMLC666 API](https://lmspeed.net/provider/api-smlc666-top) | 100.00% | 99.88% | 49.26% | 49.26% | 2153 ms | ↑ 1.26x | 2 | 0s | 8d ago | 24m ago |
| [Sunskii](https://lmspeed.net/provider/api-sunskii-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2240 ms | → 1.00x | 0 | — | — | 15m ago |
| [SwifllyLLM](https://lmspeed.net/provider/api-swiflly-com) | 100.00% | 100.00% | 77.42% | 77.42% | 1347 ms | ↑ 1.20x | 0 | — | — | 23m ago |
| [涵冰API](https://lmspeed.net/provider/api-tniay-top) | 100.00% | 99.70% | 96.55% | 96.55% | 1432 ms | ↑ 1.24x | 1 | 2h 1m | 10d ago | 15m ago |
| [兔子API](https://lmspeed.net/provider/api-tu-zi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 943 ms | → 1.02x | 0 | — | — | 15m ago |
| [uglycat](https://lmspeed.net/provider/api-uglycat-cc) | 100.00% | 100.00% | 98.31% | 98.31% | 2510 ms | ↑ 1.09x | 0 | — | — | 21m ago |
| [向量引擎](https://lmspeed.net/provider/api-vectorengine-ai) | 100.00% | 99.40% | 53.93% | 53.93% | 996 ms | ↓ 0.89x | 6 | 20m | 8d ago | 24m ago |
| [Water255 API](https://lmspeed.net/provider/api-water255-top) | 100.00% | 100.00% | 100.00% | 100.00% | 924 ms | → 0.97x | 0 | — | — | 14m ago |
| [神马中转API](https://lmspeed.net/provider/api-whatai-cc) | 100.00% | 100.00% | 99.97% | 99.97% | 2564 ms | ↑ 1.33x | 0 | — | — | 15m ago |
| [WxiAI API](https://lmspeed.net/provider/api-wxiai-com) | 100.00% | 99.82% | 99.82% | 99.82% | 1634 ms | ↓ 0.87x | 3 | 0s | 10d ago | 14m ago |
| [R的API小站](https://lmspeed.net/provider/api-xiaor-online) | 100.00% | 99.88% | 83.03% | 83.03% | 2255 ms | ↑ 1.15x | 2 | 0s | 19d ago | 23m ago |
| [Grok2API](https://lmspeed.net/provider/api-xiaowan-us-ci) | 100.00% | 99.88% | 64.06% | 64.06% | 622 ms | ↓ 0.92x | 2 | 0s | 8d ago | 23m ago |
| [星见雅 API](https://lmspeed.net/provider/api-xinjianya-top) | 100.00% | 100.00% | 98.08% | 98.08% | 3422 ms | ↑ 2.30x | 0 | — | — | 24m ago |
| [ZhenHaoJi API](https://lmspeed.net/provider/api-zhenhaoji-qzz-io) | 100.00% | 100.00% | 99.88% | 99.88% | 2124 ms | ↑ 1.05x | 0 | — | — | 16m ago |
| [Zhongzhuan Chat](https://lmspeed.net/provider/api-zhongzhuan-chat) | 100.00% | 95.36% | 99.33% | 99.33% | 3752 ms | → 1.00x | 6 | 4h 47m | 13d ago | 28m ago |
| [Yun API](https://lmspeed.net/provider/api-zyai-online) | 100.00% | 100.00% | 61.88% | 61.88% | 1780 ms | → 1.03x | 0 | — | — | 23m ago |
| [钱多多 API](https://lmspeed.net/provider/api2-aigcbest-top) | 100.00% | 100.00% | 64.86% | 64.86% | 2027 ms | ↑ 1.17x | 0 | — | — | 23m ago |
| [熊猫 API](https://lmspeed.net/provider/api520-pro) | 100.00% | 99.76% | 99.88% | 99.88% | 1260 ms | ↓ 0.83x | 1 | 1h 9m | 12d ago | 16m ago |
| [素墨API](https://lmspeed.net/provider/apifree-rensumo-top) | 100.00% | 100.00% | 99.25% | 99.25% | 2184 ms | ↑ 1.13x | 0 | — | — | 23m ago |
| [数标标API-FS](https://lmspeed.net/provider/apifs-shubiaobiao-cn) | 100.00% | 99.88% | 90.69% | 90.69% | 2281 ms | ↑ 1.05x | 2 | 0s | 8d ago | 22m ago |
| [APIPool](https://lmspeed.net/provider/apipool) | 100.00% | 100.00% | 99.83% | 99.83% | 1606 ms | ↓ 0.80x | 0 | — | — | 20m ago |
| [新生智码工坊](https://lmspeed.net/provider/apiport-cc-cd) | 100.00% | 99.94% | 99.60% | 99.60% | 605 ms | ↓ 0.84x | 1 | 0s | 29d ago | 23m ago |
| [玄黄](https://lmspeed.net/provider/apis-soys-site) | 100.00% | 97.90% | 97.95% | 97.95% | 1780 ms | ↓ 0.94x | 2 | 6h 16m | 13d ago | 23m ago |
| [ApiToken Online](https://lmspeed.net/provider/apitoken-online) | 100.00% | 88.69% | 89.92% | 89.92% | 3180 ms | ↓ 0.94x | 5 | 15h 33m | 16d ago | 14m ago |
| [AZ Rix](https://lmspeed.net/provider/az-rix) | 100.00% | 100.00% | 99.74% | 99.74% | 2519 ms | ↑ 1.06x | 0 | — | — | 33m ago |
| [空悲切b2b API](https://lmspeed.net/provider/b2b-xn-lbr707ayot-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2712 ms | ↑ 1.29x | 0 | — | — | 15m ago |
| [百万API](https://lmspeed.net/provider/baiwan-api) | 100.00% | 100.00% | 99.07% | 99.07% | 3747 ms | → 1.02x | 0 | — | — | 33m ago |
| [柏拉图AI](https://lmspeed.net/provider/bltcy-cn) | 100.00% | 100.00% | 98.22% | 98.22% | 3929 ms | ↑ 1.11x | 0 | — | — | 34m ago |
| [BUZZ](https://lmspeed.net/provider/buzzai-cc) | 100.00% | 100.00% | 76.77% | 76.77% | 2418 ms | → 0.99x | 0 | — | — | 21m ago |
| [CatClaw API](https://lmspeed.net/provider/catclaw-moetu-vip) | 100.00% | 100.00% | 100.00% | 100.00% | 2331 ms | ↑ 1.29x | 0 | — | — | 14m ago |
| [CCH-NP API](https://lmspeed.net/provider/cch-np-cat-beer) | 100.00% | 99.46% | 98.24% | 98.24% | 1591 ms | ↑ 1.58x | 7 | 8m | 14d ago | 15m ago |
| [CCLL API](https://lmspeed.net/provider/ccll-xyz) | 100.00% | 99.40% | 99.67% | 99.67% | 1484 ms | ↑ 1.07x | 1 | 2h 60m | 20d ago | 16m ago |
| [ChatAnywhere](https://lmspeed.net/provider/chatanywhere) | 100.00% | 100.00% | 99.95% | 99.95% | 2033 ms | ↑ 1.22x | 0 | — | — | 34m ago |
| [ChatST API](https://lmspeed.net/provider/chatst-api) | 100.00% | 100.00% | 99.73% | 99.73% | 635 ms | ↓ 0.46x | 0 | — | — | 34m ago |
| [Chutes](https://lmspeed.net/provider/chutes) | 100.00% | 99.94% | 99.64% | 99.64% | 2560 ms | ↑ 1.22x | 1 | 0s | 19d ago | 32m ago |
| [MIXAPI-3.3](https://lmspeed.net/provider/ck67-top) | 100.00% | 100.00% | 90.04% | 90.04% | 1552 ms | → 0.98x | 0 | — | — | 22m ago |
| [CloseAI Asia Proxy](https://lmspeed.net/provider/closeai-asia-proxy) | 100.00% | 100.00% | 99.81% | 99.81% | 1293 ms | ↑ 1.32x | 0 | — | — | 34m ago |
| [云端API](https://lmspeed.net/provider/cloudapi-wdyu-eu-cc) | 100.00% | 100.00% | 100.00% | 100.00% | 586 ms | → 1.03x | 0 | — | — | 16m ago |
| [CCTQ](https://lmspeed.net/provider/code-b886-top) | 100.00% | 99.88% | 99.94% | 99.94% | 1885 ms | ↑ 1.34x | 2 | 0s | 13d ago | 15m ago |
| [蜜音AI](https://lmspeed.net/provider/code-coolyeah-net) | 100.00% | 100.00% | 86.08% | 86.08% | 3015 ms | ↑ 1.18x | 0 | — | — | 18m ago |
| [Code0 AI](https://lmspeed.net/provider/code0-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 2129 ms | ↑ 1.09x | 0 | — | — | 15m ago |
| [Codex API](https://lmspeed.net/provider/codex-ai02-cn) | 100.00% | 100.00% | 100.00% | 100.00% | 2361 ms | ↑ 1.25x | 0 | — | — | 18m ago |
| [PackyAPI](https://lmspeed.net/provider/codex-api-packycode-com) | 100.00% | 100.00% | 99.07% | 99.07% | 975 ms | ↑ 1.27x | 0 | — | — | 24m ago |
| [Codex Proxy](https://lmspeed.net/provider/codex-miaomiaocode-com) | 100.00% | 100.00% | 97.67% | 97.67% | 2698 ms | ↑ 1.57x | 0 | — | — | 18m ago |
| [Leonhard API](https://lmspeed.net/provider/codexe-top) | 100.00% | 99.93% | 99.93% | 99.93% | 1690 ms | ↑ 1.17x | 1 | 0s | 22d ago | 14m ago |
| [Compute Token](https://lmspeed.net/provider/computetoken-ai) | 100.00% | 99.94% | 99.94% | 99.94% | 1634 ms | ↑ 1.16x | 1 | 0s | 14d ago | 16m ago |
| [AIsa](https://lmspeed.net/provider/console-aisa-one) | 100.00% | 99.94% | 99.95% | 99.95% | 1832 ms | ↑ 1.49x | 1 | 0s | 19d ago | 15m ago |
| [ClaudeAPI Relay](https://lmspeed.net/provider/console-claudeapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 2192 ms | ↑ 1.13x | 0 | — | — | 15m ago |
| [CPAPI EU (2)](https://lmspeed.net/provider/cpapi-eu-2) | 100.00% | 100.00% | 99.01% | 99.01% | 3201 ms | ↑ 1.47x | 0 | — | — | 24m ago |
| [TokenClub API](https://lmspeed.net/provider/cpatp7eu3nc8-tokenclub-top) | 100.00% | 100.00% | 90.19% | 90.19% | 1506 ms | ↑ 1.12x | 0 | — | — | 17m ago |
| [Dapicloud API](https://lmspeed.net/provider/dapicloud-com) | 100.00% | 99.82% | 99.82% | 99.82% | 736 ms | ↑ 1.07x | 1 | 1h | 28d ago | 15m ago |
| [DAW Claude Code](https://lmspeed.net/provider/dawclaudecode-com) | 100.00% | 99.87% | 99.87% | 99.87% | 1022 ms | ↓ 0.59x | 1 | 0s | 14d ago | 15m ago |
| [DeepKey API](https://lmspeed.net/provider/deepkey-top) | 100.00% | 99.82% | 99.91% | 99.91% | 1476 ms | ↑ 1.10x | 2 | 11m | 29d ago | 15m ago |
| [DeepRouter](https://lmspeed.net/provider/deeprouter) | 100.00% | 100.00% | 25.53% | 25.53% | 2704 ms | ↑ 1.49x | 0 | — | — | 24m ago |
| [DeepSeek](https://lmspeed.net/provider/deepseek) | 100.00% | 100.00% | 99.99% | 99.99% | 1489 ms | ↑ 1.18x | 0 | — | — | 35m ago |
| [DeerAPI](https://lmspeed.net/provider/deerapi) | 100.00% | 100.00% | 99.84% | 99.84% | 2574 ms | → 1.02x | 0 | — | — | 34m ago |
| [Deno Deploy Proxy](https://lmspeed.net/provider/deno-deploy-proxy) | 100.00% | 100.00% | 99.94% | 99.94% | 812 ms | ↑ 1.26x | 0 | — | — | 33m ago |
| [DreamChatBot](https://lmspeed.net/provider/dreamchatbot-top) | 100.00% | 99.94% | 98.32% | 98.32% | 1774 ms | ↑ 1.06x | 1 | 0s | 10d ago | 17m ago |
| [小水管 API](https://lmspeed.net/provider/edge-pieixan-icu) | 100.00% | 100.00% | 98.19% | 98.19% | 970 ms | ↓ 0.79x | 0 | — | — | 22m ago |
| [Elysiver API](https://lmspeed.net/provider/elysiver-api) | 100.00% | 99.70% | 21.53% | 21.53% | 595 ms | ↓ 0.44x | 4 | 8m | 8d ago | 24m ago |
| [ePhone AI](https://lmspeed.net/provider/ephone-ai-2) | 100.00% | 100.00% | 99.74% | 99.74% | 691 ms | ↓ 0.94x | 0 | — | — | 34m ago |
| [Feiyametta HF Space](https://lmspeed.net/provider/feiyametta-hf-space) | 100.00% | 99.70% | 99.75% | 99.75% | 1650 ms | → 1.02x | 4 | 8m | 22d ago | 28m ago |
| [FineOneAPI](https://lmspeed.net/provider/fineoneapi) | 100.00% | 100.00% | 98.77% | 98.77% | 4769 ms | → 1.03x | 0 | — | — | 35m ago |
| [free_chatgpt_api](https://lmspeed.net/provider/free-chatgpt-api) | 100.00% | 100.00% | 99.92% | 99.92% | 2999 ms | ↑ 1.09x | 0 | — | — | 33m ago |
| [Fusecode](https://lmspeed.net/provider/fusecode) | 100.00% | 100.00% | 100.00% | 100.00% | 68 ms | → 1.00x | 0 | — | — | 14m ago |
| [Gemini Balance](https://lmspeed.net/provider/gemini-balance-clawcloud) | 100.00% | 97.81% | 32.82% | 32.82% | 2302 ms | ↑ 1.10x | 6 | 1h 58m | 14d ago | 31m ago |
| [GitCode AI](https://lmspeed.net/provider/gitcode-ai) | 100.00% | 37.49% | 33.15% | 33.15% | 2362 ms | → 0.98x | 2 | 9d 2h | 8d ago | 23m ago |
| [GitHub Models](https://lmspeed.net/provider/github-models) | 100.00% | 84.06% | 97.96% | 97.96% | 2107 ms | ↑ 1.11x | 124 | 29m | 18d ago | 32m ago |
| [GLM BigModel Relay](https://lmspeed.net/provider/glm-bigmodel-relay) | 100.00% | 100.00% | 99.67% | 99.67% | 2751 ms | → 1.02x | 0 | — | — | 29m ago |
| [全球AI](https://lmspeed.net/provider/globalai-vip) | 100.00% | 99.88% | 99.36% | 99.36% | 2387 ms | ↑ 1.18x | 2 | 0s | 19d ago | 24m ago |
| [gmi-serving](https://lmspeed.net/provider/gmi-serving) | 100.00% | 99.94% | 43.48% | 43.48% | 880 ms | ↓ 0.94x | 1 | 0s | 18d ago | 34m ago |
| [Gpt API](https://lmspeed.net/provider/gpt-api) | 100.00% | 100.00% | 99.95% | 99.95% | 1129 ms | → 0.96x | 0 | — | — | 33m ago |
| [GPT Load (Shiho)](https://lmspeed.net/provider/gpt-load-shiho-top) | 100.00% | 100.00% | 99.47% | 99.47% | 2908 ms | → 1.01x | 0 | — | — | 28m ago |
| [晴辰云](https://lmspeed.net/provider/gpt-qt-cool) | 100.00% | 99.94% | 99.82% | 99.82% | 1558 ms | ↑ 1.06x | 1 | 0s | 22d ago | 21m ago |
| [GPTBest](https://lmspeed.net/provider/gptbest) | 100.00% | 99.94% | 20.82% | 20.82% | 746 ms | → 0.97x | 1 | 0s | 15d ago | 33m ago |
| [GPTGod](https://lmspeed.net/provider/gptgod) | 100.00% | 99.64% | 99.27% | 99.27% | 1908 ms | → 0.95x | 2 | 45m | 8d ago | 34m ago |
| [GPTPlus5 API](https://lmspeed.net/provider/gptplus5-api) | 100.00% | 100.00% | 99.88% | 99.88% | 2480 ms | → 1.05x | 0 | — | — | 23m ago |
| [GPTs API](https://lmspeed.net/provider/gptsapi) | 100.00% | 98.64% | 99.74% | 99.74% | 2153 ms | ↑ 1.17x | 3 | 2h 10m | 8d ago | 34m ago |
| [GuaiHub](https://lmspeed.net/provider/guaihub) | 100.00% | 100.00% | 99.71% | 99.71% | 705 ms | ↓ 0.61x | 0 | — | — | 17m ago |
| [TradingBase API](https://lmspeed.net/provider/gw-stg-tradingbase-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 519 ms | → 0.97x | 0 | — | — | 15m ago |
| [Hajimi API](https://lmspeed.net/provider/hajimi) | 100.00% | 99.64% | 90.84% | 90.84% | 750 ms | ↓ 0.92x | 6 | 0s | 8d ago | 22m ago |
| [毫秒API](https://lmspeed.net/provider/haomiao-api) | 100.00% | 100.00% | 99.64% | 99.64% | 847 ms | → 1.02x | 0 | — | — | 34m ago |
| [Hi API](https://lmspeed.net/provider/hiapi-online) | 100.00% | 100.00% | 62.42% | 62.42% | 1288 ms | → 0.99x | 0 | — | — | 23m ago |
| [猫羽霖API](https://lmspeed.net/provider/huashang-dpdns-org) | 100.00% | 74.41% | 87.18% | 87.18% | 705 ms | ↓ 0.77x | 5 | 1d 12h | 11d ago | 15m ago |
| [冰のCodex](https://lmspeed.net/provider/icoe-pp-ua) | 100.00% | 96.19% | 83.87% | 83.87% | 1683 ms | ↑ 1.29x | 2 | 13h | 19d ago | 18m ago |
| [Infini AI](https://lmspeed.net/provider/infini-ai) | 100.00% | 100.00% | 99.77% | 99.77% | 2787 ms | → 1.04x | 0 | — | — | 33m ago |
| [Ciallo 公益站](https://lmspeed.net/provider/ioll-pp-ua) | 100.00% | 99.21% | 98.82% | 98.82% | 1816 ms | → 1.04x | 1 | 5h 50m | 14d ago | 16m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-kxcym-top-3001) | 100.00% | 98.94% | 98.94% | 98.94% | 3076 ms | → 1.01x | 1 | 2h 37m | 8d ago | 15m ago |
| [ChooseC API](https://lmspeed.net/provider/ipv4-beta-lm-studio) | 100.00% | 99.22% | 64.08% | 64.08% | 1300 ms | ↓ 0.54x | 3 | 1h 32m | 8d ago | 24m ago |
| [IXIOCCAPI](https://lmspeed.net/provider/ixioccapi) | 100.00% | 99.94% | 89.53% | 89.53% | 1988 ms | ↑ 1.10x | 1 | 0s | 15d ago | 32m ago |
| [Jeniya AI API](https://lmspeed.net/provider/jeniya-ai-api) | 100.00% | 99.52% | 23.31% | 23.31% | 1663 ms | → 0.99x | 4 | 30m | 12d ago | 24m ago |
| [简易-API中转站](https://lmspeed.net/provider/jeniya-top) | 100.00% | 99.52% | 98.97% | 98.97% | 3176 ms | ↑ 1.08x | 4 | 30m | 12d ago | 22m ago |
| [酒馆无限制免费API](https://lmspeed.net/provider/jiuguan-wuxianzhi-mianfei-api) | 100.00% | 98.11% | 80.62% | 80.62% | 2293 ms | ↑ 1.06x | 1 | 13h | 25d ago | 34m ago |
| [Joverna](https://lmspeed.net/provider/jiuuij-de5-net) | 100.00% | 99.88% | 88.91% | 88.91% | 802 ms | ↓ 0.79x | 2 | 0s | 14d ago | 16m ago |
| [KFCV50](https://lmspeed.net/provider/kfcv50) | 100.00% | 99.94% | 99.90% | 99.90% | 1138 ms | → 0.96x | 1 | 0s | 18d ago | 32m ago |
| [KKSJ-AI](https://lmspeed.net/provider/kksj-ai) | 100.00% | 100.00% | 99.92% | 99.92% | 1088 ms | ↓ 0.95x | 0 | — | — | 34m ago |
| [Koyeb Ollama Proxy](https://lmspeed.net/provider/koyeb-ollama-proxy) | 100.00% | 99.94% | 99.66% | 99.66% | 1276 ms | ↑ 1.06x | 1 | 0s | 14d ago | 32m ago |
| [KuaeCloud Coding Plan Endpoint](https://lmspeed.net/provider/kuaecloud-coding-plan-endpoint) | 100.00% | 99.94% | 47.62% | 47.62% | 644 ms | → 1.03x | 1 | 0s | 18d ago | 21m ago |
| [Last API](https://lmspeed.net/provider/last-api-ai) | 100.00% | 100.00% | 99.97% | 99.97% | 1646 ms | ↑ 1.28x | 0 | — | — | 15m ago |
| [llm-2-api](https://lmspeed.net/provider/llm-2-api-com) | 100.00% | 100.00% | 99.94% | 99.94% | 842 ms | → 0.97x | 0 | — | — | 18m ago |
| [LLM API](https://lmspeed.net/provider/llm-api) | 100.00% | 97.33% | 98.85% | 98.85% | 3670 ms | ↑ 1.12x | 2 | 8h 60m | 9d ago | 32m ago |
| [GankInterview LLM](https://lmspeed.net/provider/llm-gankinterview-com) | 100.00% | 100.00% | 98.62% | 98.62% | 1822 ms | ↑ 1.11x | 0 | — | — | 18m ago |
| [国产大模型 API](https://lmspeed.net/provider/llm-undefined-qzz-io) | 100.00% | 99.70% | 98.26% | 98.26% | 470 ms | ↓ 0.63x | 1 | 1h 40m | 10d ago | 18m ago |
| [RenRen API](https://lmspeed.net/provider/llm-whitedream-top) | 100.00% | 99.70% | 96.79% | 96.79% | 1385 ms | ↑ 1.30x | 2 | 45m | 17d ago | 18m ago |
| [LMProxy](https://lmspeed.net/provider/lmproxy) | 100.00% | 100.00% | 71.12% | 71.12% | 1589 ms | ↑ 1.22x | 0 | — | — | 23m ago |
| [Maolao API](https://lmspeed.net/provider/maolaoapi-com) | 100.00% | 100.00% | 100.00% | 100.00% | 1307 ms | ↑ 1.07x | 0 | — | — | 15m ago |
| [猫羽雫API](https://lmspeed.net/provider/maoyulin-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 1278 ms | → 0.97x | 0 | — | — | 14m ago |
| [美团团 API](https://lmspeed.net/provider/max-openai365-top) | 100.00% | 99.94% | 81.79% | 81.79% | 3187 ms | ↑ 1.27x | 1 | 0s | 18d ago | 23m ago |
| [Meta API](https://lmspeed.net/provider/meta-api) | 100.00% | 100.00% | 99.80% | 99.80% | 2053 ms | ↑ 1.05x | 0 | — | — | 32m ago |
| [MiluKey API](https://lmspeed.net/provider/milukey-cn) | 100.00% | 100.00% | 99.97% | 99.97% | 706 ms | ↓ 0.37x | 0 | — | — | 15m ago |
| [Mistral AI](https://lmspeed.net/provider/mistral-ai-api) | 100.00% | 99.94% | 99.87% | 99.87% | 702 ms | ↓ 0.78x | 1 | 0s | 19d ago | 28m ago |
| [MIX API](https://lmspeed.net/provider/mix-api) | 100.00% | 87.90% | 37.14% | 37.14% | 1922 ms | → 1.02x | 14 | 5h 29m | 10d ago | 23m ago |
| [ModelGate](https://lmspeed.net/provider/modelgate) | 100.00% | 61.61% | 28.42% | 28.42% | 3064 ms | ↑ 1.06x | 2 | 5d 14h | 19d ago | 18m ago |
| [我的旅行日志](https://lmspeed.net/provider/my-travel-log) | 100.00% | 100.00% | 85.92% | 85.92% | 1276 ms | ↑ 1.57x | 0 | — | — | 32m ago |
| [MyDamoxing](https://lmspeed.net/provider/mydamoxing-cn) | 100.00% | 100.00% | 91.59% | 91.59% | 518 ms | ↑ 1.13x | 0 | — | — | 20m ago |
| [钠 API](https://lmspeed.net/provider/naapi-cc) | 100.00% | 100.00% | 99.33% | 99.33% | 2663 ms | ↑ 1.13x | 0 | — | — | 23m ago |
| [Nahcrof AI](https://lmspeed.net/provider/nahcrof-ai) | 100.00% | 99.70% | 98.89% | 98.89% | 3276 ms | ↑ 1.13x | 5 | 0s | 12d ago | 34m ago |
| [Seamee API](https://lmspeed.net/provider/napi-seaya-link) | 100.00% | 100.00% | 96.81% | 96.81% | 1334 ms | → 0.98x | 0 | — | — | 23m ago |
| [GGBand API](https://lmspeed.net/provider/nbr-ggband-tech) | 100.00% | 100.00% | 99.88% | 99.88% | 1767 ms | ↑ 1.26x | 0 | — | — | 15m ago |
| [梦德 API](https://lmspeed.net/provider/new-api-5) | 100.00% | 100.00% | 99.77% | 99.77% | 2762 ms | ↑ 1.06x | 0 | — | — | 34m ago |
| [Kingo API分享站](https://lmspeed.net/provider/new-api-bxhm-onrender-com) | 100.00% | 99.92% | 99.92% | 99.92% | 1561 ms | → 1.00x | 1 | 0s | 16d ago | 16m ago |
| [Sealos AI Gateway](https://lmspeed.net/provider/new-api-fivvoakg-sealosbja-site) | 100.00% | 100.00% | 100.00% | 100.00% | 4054 ms | ↑ 1.09x | 0 | — | — | 16m ago |
| [TommyLam API](https://lmspeed.net/provider/new-api-tommylam-me) | 100.00% | 100.00% | 59.81% | 59.81% | 764 ms | → 1.02x | 0 | — | — | 23m ago |
| [柠檬API](https://lmspeed.net/provider/new-lemonapi-site) | 100.00% | 100.00% | 43.50% | 43.50% | 3149 ms | ↑ 1.14x | 0 | — | — | 23m ago |
| [云AI](https://lmspeed.net/provider/new-yunai-link) | 100.00% | 100.00% | 99.25% | 99.25% | 4141 ms | → 0.99x | 0 | — | — | 28m ago |
| [Newagiai](https://lmspeed.net/provider/newagiai) | 100.00% | 100.00% | 99.76% | 99.76% | 3339 ms | ↑ 1.09x | 0 | — | — | 34m ago |
| [紫脑喵](https://lmspeed.net/provider/newapi-aisonnet-org) | 100.00% | 100.00% | 99.89% | 99.89% | 2562 ms | ↑ 1.14x | 0 | — | — | 22m ago |
| [Synapse](https://lmspeed.net/provider/newapi-exynos-top-8443) | 100.00% | 94.15% | 92.48% | 92.48% | 2342 ms | ↓ 0.94x | 1 | 1d 15h | 27d ago | 20m ago |
| [KZW API](https://lmspeed.net/provider/newapi-kzwbelieve-top) | 100.00% | 100.00% | 99.29% | 99.29% | 2407 ms | ↑ 1.08x | 0 | — | — | 22m ago |
| [Medu Chat](https://lmspeed.net/provider/newapi-medu-chat) | 100.00% | 100.00% | 80.59% | 80.59% | 1679 ms | ↑ 1.13x | 0 | — | — | 23m ago |
| [Novita AI](https://lmspeed.net/provider/novita-ai) | 100.00% | 100.00% | 99.93% | 99.93% | 189 ms | → 1.00x | 0 | — | — | 34m ago |
| [NVIDIA NIM](https://lmspeed.net/provider/nvidia-nim) | 100.00% | 100.00% | 99.91% | 99.91% | 2810 ms | ↑ 1.20x | 0 | — | — | 32m ago |
| [OAI2API](https://lmspeed.net/provider/oai2api-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1307 ms | ↓ 0.77x | 0 | — | — | 16m ago |
| [OAPI UK](https://lmspeed.net/provider/oapi-uk) | 100.00% | 99.94% | 99.95% | 99.95% | 2264 ms | → 1.05x | 1 | 0s | 10d ago | 29m ago |
| [ocool AI](https://lmspeed.net/provider/ocool-ai) | 100.00% | 99.94% | 99.54% | 99.54% | 3430 ms | → 1.03x | 1 | 0s | 13d ago | 34m ago |
| [Nova AI](https://lmspeed.net/provider/once-novai-su) | 100.00% | 100.00% | 81.04% | 81.04% | 2635 ms | ↑ 1.12x | 0 | — | — | 23m ago |
| [CookingAI](https://lmspeed.net/provider/oneapi-gemiaude-com) | 100.00% | 100.00% | 87.28% | 87.28% | 3216 ms | ↑ 1.30x | 0 | — | — | 23m ago |
| [鲨鱼魔法](https://lmspeed.net/provider/openai-sharkmagic-top) | 100.00% | 99.94% | 96.26% | 96.26% | 2576 ms | ↑ 1.34x | 1 | 0s | 8d ago | 24m ago |
| [OpenRouter](https://lmspeed.net/provider/openrouter) | 100.00% | 100.00% | 99.97% | 99.97% | 1689 ms | ↑ 1.10x | 0 | — | — | 32m ago |
| [OpenRouter Fans](https://lmspeed.net/provider/openrouter-fans) | 100.00% | 100.00% | 98.68% | 98.68% | 819 ms | ↑ 1.17x | 0 | — | — | 20m ago |
| [Perplexity AI](https://lmspeed.net/provider/perplexity-ai) | 100.00% | 100.00% | 25.27% | 25.27% | 945 ms | ↑ 1.52x | 0 | — | — | 23m ago |
| [PICO API](https://lmspeed.net/provider/pico-api) | 100.00% | 99.94% | 97.72% | 97.72% | 435 ms | ↓ 0.46x | 1 | 0s | 16d ago | 17m ago |
| [PoloAPI](https://lmspeed.net/provider/poloai-top) | 100.00% | 100.00% | 99.95% | 99.95% | 886 ms | → 1.05x | 0 | — | — | 20m ago |
| [Privnode](https://lmspeed.net/provider/privnode) | 100.00% | 99.88% | 22.55% | 22.55% | 1273 ms | ↑ 1.11x | 2 | 0s | 8d ago | 24m ago |
| [Isley](https://lmspeed.net/provider/proxy-isley-org) | 100.00% | 99.94% | 62.92% | 62.92% | 2830 ms | ↑ 1.13x | 1 | 0s | 8d ago | 23m ago |
| [七牛云](https://lmspeed.net/provider/qiniu-2) | 100.00% | 98.88% | 99.58% | 99.58% | 2814 ms | ↓ 0.88x | 18 | 2m | 8d ago | 33m ago |
| [QWQ Chat API](https://lmspeed.net/provider/qwq-chat-api) | 100.00% | 100.00% | 40.45% | 40.45% | 775 ms | ↓ 0.81x | 0 | — | — | 33m ago |
| [RinkoAI](https://lmspeed.net/provider/rinkoai-com) | 100.00% | 98.87% | 98.92% | 98.92% | 1112 ms | → 0.96x | 1 | 5h 60m | 28d ago | 32m ago |
| [Hugging Face](https://lmspeed.net/provider/router-huggingface-co) | 100.00% | 100.00% | 21.64% | 21.64% | 1533 ms | ↑ 1.09x | 0 | — | — | 32m ago |
| [Embedding](https://lmspeed.net/provider/router-tumuer-me) | 100.00% | 100.00% | 100.00% | 100.00% | 622 ms | ↓ 0.48x | 0 | — | — | 16m ago |
| [随时跑路公益站](https://lmspeed.net/provider/runanytime-hxi-me) | 100.00% | 99.94% | 99.57% | 99.57% | 2959 ms | ↑ 1.51x | 1 | 0s | 12d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/s2a-865199-xyz) | 100.00% | 100.00% | 99.97% | 99.97% | 3142 ms | ↓ 0.73x | 0 | — | — | 16m ago |
| [Old 公益站](https://lmspeed.net/provider/sakuradori-dpdns-org) | 100.00% | 100.00% | 100.00% | 100.00% | 458 ms | ↓ 0.67x | 0 | — | — | 16m ago |
| [SiliconFlow](https://lmspeed.net/provider/siliconflow) | 100.00% | 100.00% | 93.65% | 93.65% | 4693 ms | → 1.04x | 0 | — | — | 33m ago |
| [Sisuo API](https://lmspeed.net/provider/sisuo-new-api) | 100.00% | 99.70% | 99.61% | 99.61% | 2034 ms | ↑ 1.12x | 1 | 1h 20m | 30d ago | 32m ago |
| [Catiecli](https://lmspeed.net/provider/skyag-xiamu-asia) | 100.00% | 99.88% | 99.97% | 99.97% | 2228 ms | ↑ 1.07x | 2 | 0s | 8d ago | 22m ago |
| [QuicklyAPI](https://lmspeed.net/provider/sub-jlypx-de) | 100.00% | 100.00% | 99.28% | 99.28% | 1078 ms | ↑ 1.13x | 0 | — | — | 20m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-wtxlab-com) | 100.00% | 100.00% | 99.91% | 99.91% | 1624 ms | → 1.04x | 0 | — | — | 16m ago |
| [速创API](https://lmspeed.net/provider/suchuang) | 100.00% | 99.88% | 46.48% | 46.48% | 1369 ms | → 1.03x | 2 | 0s | 9d ago | 34m ago |
| [SUFY](https://lmspeed.net/provider/sufy) | 100.00% | 100.00% | 99.59% | 99.59% | 2565 ms | ↑ 1.37x | 0 | — | — | 34m ago |
| [MKE AI](https://lmspeed.net/provider/tb-api-mkeai-com) | 100.00% | 100.00% | 99.48% | 99.48% | 1682 ms | → 1.03x | 0 | — | — | 32m ago |
| [Tencent](https://lmspeed.net/provider/tencent) | 100.00% | 100.00% | 99.99% | 99.99% | 468 ms | ↓ 0.92x | 0 | — | — | 35m ago |
| [sur](https://lmspeed.net/provider/text-pollinations-ai) | 100.00% | 56.22% | 88.81% | 88.81% | 1859 ms | ↑ 1.06x | 1 | 12d 20h | 25d ago | 32m ago |
| [TheoremHub API](https://lmspeed.net/provider/theoremhub-api) | 100.00% | 98.34% | 47.46% | 47.46% | 3386 ms | ↑ 1.19x | 17 | 16m | 11d ago | 33m ago |
| [Thorbase](https://lmspeed.net/provider/thorbase) | 100.00% | 100.00% | 98.88% | 98.88% | 2801 ms | → 0.96x | 0 | — | — | 18m ago |
| [天絮 API](https://lmspeed.net/provider/tianxu-api) | 100.00% | 100.00% | 96.82% | 96.82% | 3161 ms | → 1.02x | 0 | — | — | 33m ago |
| [Tokeness](https://lmspeed.net/provider/tokeness-cn) | 100.00% | 99.58% | 99.61% | 99.61% | 1076 ms | ↓ 0.75x | 4 | 15m | 10d ago | 14m ago |
| [词元流动](https://lmspeed.net/provider/tokenflux-dev) | 100.00% | 100.00% | 99.82% | 99.82% | 1093 ms | → 1.04x | 0 | — | — | 18m ago |
| [无限AI](https://lmspeed.net/provider/tokenwuxian-top) | 100.00% | 100.00% | 89.22% | 89.22% | 2594 ms | ↑ 1.20x | 0 | — | — | 22m ago |
| [TokenX24](https://lmspeed.net/provider/tokenx24-com) | 100.00% | 100.00% | 99.85% | 99.85% | 1266 ms | → 0.98x | 0 | — | — | 18m ago |
| [6655 翻译小站](https://lmspeed.net/provider/translate-api-6655-pp-ua) | 100.00% | 100.00% | 100.00% | 100.00% | 1628 ms | → 0.99x | 0 | — | — | 16m ago |
| [UniAPI](https://lmspeed.net/provider/uniai) | 100.00% | 100.00% | 99.81% | 99.81% | 1952 ms | → 1.01x | 0 | — | — | 33m ago |
| [UnifyLLM](https://lmspeed.net/provider/unifyllm) | 100.00% | 100.00% | 99.51% | 99.51% | 1863 ms | → 1.03x | 0 | — | — | 34m ago |
| [UoCode](https://lmspeed.net/provider/uocode) | 100.00% | 99.94% | 99.94% | 99.94% | 1562 ms | ↓ 0.85x | 1 | 0s | 22d ago | 15m ago |
| [V-API](https://lmspeed.net/provider/v-api) | 100.00% | 100.00% | 99.75% | 99.75% | 1233 ms | → 0.97x | 0 | — | — | 34m ago |
| [ZEN-AI VIP](https://lmspeed.net/provider/vip-zen-ai-top) | 100.00% | 100.00% | 99.83% | 99.83% | 1665 ms | → 1.03x | 0 | — | — | 31m ago |
| [火山引擎](https://lmspeed.net/provider/volcengine) | 100.00% | 99.94% | 85.04% | 85.04% | 2012 ms | → 1.02x | 1 | 0s | 27d ago | 29m ago |
| [VVCode](https://lmspeed.net/provider/vvcode-top) | 100.00% | 99.94% | 98.28% | 98.28% | 2831 ms | ↑ 1.20x | 1 | 0s | 30d ago | 18m ago |
| [丸美小沐写作](https://lmspeed.net/provider/wanmei-xiaomu-xiezuo) | 100.00% | 99.76% | 92.45% | 92.45% | 4542 ms | ↑ 1.16x | 2 | 25m | 17d ago | 35m ago |
| [一点通](https://lmspeed.net/provider/web-01yq888-com) | 100.00% | 99.94% | 99.94% | 99.94% | 2180 ms | ↑ 1.35x | 1 | 0s | 15d ago | 15m ago |
| [Aitoke](https://lmspeed.net/provider/www-aitoke-top) | 100.00% | 99.94% | 97.89% | 97.89% | 3686 ms | ↑ 1.46x | 1 | 0s | 22d ago | 17m ago |
| [北极星星](https://lmspeed.net/provider/www-beijixingxing-com) | 100.00% | 95.13% | 95.13% | 95.13% | 1424 ms | ↓ 0.93x | 4 | 6h 14m | 11d ago | 16m ago |
| [CatClaw API](https://lmspeed.net/provider/www-catclawai-top) | 100.00% | 100.00% | 98.85% | 98.85% | 1558 ms | ↑ 1.30x | 0 | — | — | 23m ago |
| [ChatGTP](https://lmspeed.net/provider/www-chatgtp-cn) | 100.00% | 100.00% | 98.76% | 98.76% | 1875 ms | → 1.02x | 0 | — | — | 31m ago |
| [DuckCoding](https://lmspeed.net/provider/www-duckcoding-ai) | 100.00% | 100.00% | 99.64% | 99.64% | 2935 ms | ↑ 1.17x | 0 | — | — | 16m ago |
| [FluAPI](https://lmspeed.net/provider/www-fluapi-com) | 100.00% | 100.00% | 99.97% | 99.97% | 1170 ms | ↑ 1.26x | 0 | — | — | 16m ago |
| [Fucheers](https://lmspeed.net/provider/www-fucheers-top) | 100.00% | 99.70% | 98.70% | 98.70% | 1224 ms | ↑ 1.32x | 4 | 7m | 15d ago | 21m ago |
| [小蓝AI服务站](https://lmspeed.net/provider/www-inroi-shop) | 100.00% | 99.79% | 99.79% | 99.79% | 1354 ms | → 1.04x | 2 | 0s | 10d ago | 15m ago |
| [Liuwang API](https://lmspeed.net/provider/www-liuwang520-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 2609 ms | ↑ 1.25x | 0 | — | — | 15m ago |
| [MN API](https://lmspeed.net/provider/www-mnapi-com) | 100.00% | 100.00% | 31.72% | 31.72% | 1338 ms | ↑ 1.18x | 0 | — | — | 31m ago |
| [MonkingAI](https://lmspeed.net/provider/www-monking-ai) | 100.00% | 100.00% | 99.81% | 99.81% | 1596 ms | ↑ 1.23x | 0 | — | — | 22m ago |
| [米醋API](https://lmspeed.net/provider/www-openclaudecode-cn) | 100.00% | 99.94% | 98.42% | 98.42% | 2439 ms | ↑ 1.19x | 1 | 0s | 10d ago | 22m ago |
| [汪汪中转站](https://lmspeed.net/provider/www-qianweikeji-fun) | 100.00% | 52.21% | 53.09% | 53.09% | 1339 ms | ↓ 0.92x | 1 | 13d 23h | 27d ago | 14m ago |
| [SophNet](https://lmspeed.net/provider/www-sophnet-com) | 100.00% | 100.00% | 99.93% | 99.93% | 1839 ms | ↑ 1.21x | 0 | — | — | 31m ago |
| [UniAiX](https://lmspeed.net/provider/www-uniaix-com) | 100.00% | 100.00% | 89.10% | 89.10% | 4052 ms | ↑ 1.19x | 0 | — | — | 23m ago |
| [WONG公益站](https://lmspeed.net/provider/wzw-pp-ua) | 100.00% | 99.94% | 96.68% | 96.68% | 3275 ms | ↑ 1.26x | 1 | 0s | 9d ago | 24m ago |
| [X666 API](https://lmspeed.net/provider/x666-me) | 100.00% | 99.94% | 99.87% | 99.87% | 2035 ms | ↑ 1.23x | 1 | 0s | 18d ago | 31m ago |
| [xAI](https://lmspeed.net/provider/xai) | 100.00% | 100.00% | 21.64% | 21.64% | 2165 ms | → 1.02x | 0 | — | — | 33m ago |
| [Lufei公益站](https://lmspeed.net/provider/xgent-me) | 100.00% | 100.00% | 100.00% | 100.00% | 625 ms | ↓ 0.79x | 0 | — | — | 16m ago |
| [XiaMiAPI](https://lmspeed.net/provider/xiamiapi-xyz) | 100.00% | 100.00% | 97.35% | 97.35% | 2774 ms | ↑ 1.26x | 0 | — | — | 18m ago |
| [小爱AI](https://lmspeed.net/provider/xiaoai-plus) | 100.00% | 100.00% | 99.85% | 99.85% | 2363 ms | ↑ 1.06x | 0 | — | — | 31m ago |
| [小波 API](https://lmspeed.net/provider/xiaobo-api) | 100.00% | 99.82% | 99.93% | 99.93% | 1369 ms | ↑ 1.31x | 2 | 10m | 18d ago | 33m ago |
| [小豆包API](https://lmspeed.net/provider/xiaodoubao-api) | 100.00% | 99.94% | 23.40% | 23.40% | 3833 ms | ↑ 1.32x | 1 | 0s | 9d ago | 24m ago |
| [Xiaomimimo API](https://lmspeed.net/provider/xiaomimimo-api) | 100.00% | 100.00% | 21.42% | 21.42% | 2171 ms | ↑ 1.12x | 0 | — | — | 24m ago |
| [XShuLab Sub2API](https://lmspeed.net/provider/xshulab-sub2api) | 100.00% | 99.34% | 96.95% | 96.95% | 1652 ms | → 0.96x | 5 | 32m | 8d ago | 18m ago |
| [SmokeDivine AI](https://lmspeed.net/provider/yansd666-com) | 100.00% | 99.58% | 99.73% | 99.73% | 3222 ms | → 1.03x | 3 | 40m | 20d ago | 16m ago |
| [Yuan API](https://lmspeed.net/provider/yuan-api) | 100.00% | 100.00% | 99.77% | 99.77% | 2966 ms | ↑ 1.06x | 0 | — | — | 20m ago |
| [Yuegle](https://lmspeed.net/provider/yuegle) | 100.00% | 100.00% | 99.90% | 99.90% | 2159 ms | → 1.04x | 0 | — | — | 33m ago |
| [YueZh-AI](https://lmspeed.net/provider/yuezh-ai-cloud) | 100.00% | 100.00% | 100.00% | 100.00% | 2148 ms | → 1.03x | 0 | — | — | 15m ago |
| [Your API](https://lmspeed.net/provider/yunrapi.cn) | 100.00% | 99.47% | 99.62% | 99.62% | 2393 ms | ↑ 1.08x | 1 | 3h 60m | 11d ago | 31m ago |
| [YUNWU API](https://lmspeed.net/provider/yunwu-ai) | 100.00% | 100.00% | 99.76% | 99.76% | 2070 ms | ↑ 1.11x | 0 | — | — | 31m ago |
| [Sub2API](https://lmspeed.net/provider/yuzheng-me) | 100.00% | 100.00% | 100.00% | 100.00% | 320 ms | → 0.97x | 0 | — | — | 15m ago |
| [小辣椒](https://lmspeed.net/provider/yyds-215-im) | 100.00% | 100.00% | 98.73% | 98.73% | 1578 ms | ↑ 1.11x | 0 | — | — | 18m ago |
| [ZetaTechs API](https://lmspeed.net/provider/zetatechs-api) | 100.00% | 99.94% | 99.15% | 99.15% | 1763 ms | → 1.02x | 1 | 0s | 25d ago | 33m ago |
| [智谱 AI](https://lmspeed.net/provider/zhipu-ai) | 100.00% | 100.00% | 100.00% | 100.00% | 424 ms | ↓ 0.59x | 0 | — | — | 32m ago |
| [N89医费](https://lmspeed.net/provider/zyf-12040414-xyz) | 100.00% | 100.00% | 100.00% | 100.00% | 791 ms | ↑ 1.13x | 0 | — | — | 14m ago |
| [火山引擎 Ark](https://lmspeed.net/provider/volcengine-ark) | 99.72% | 99.88% | 26.79% | 26.79% | 2478 ms | ↑ 1.11x | 2 | 0s | 6d ago | 35m ago |
| [AIHubMix](https://lmspeed.net/provider/aihubmix-com) | 99.72% | 99.94% | 99.98% | 99.98% | 824 ms | → 0.98x | 1 | 0s | 6d ago | 30m ago |
| [飞桨AI Studio](https://lmspeed.net/provider/aistudio-baidu) | 99.72% | 99.94% | 99.75% | 99.75% | 3194 ms | ↑ 1.10x | 1 | 0s | 6d ago | 30m ago |
| [Aizex API](https://lmspeed.net/provider/aizex-top) | 99.72% | 99.59% | 99.01% | 99.01% | 4022 ms | → 1.02x | 7 | 0s | 6d ago | 31m ago |
| [包子铺](https://lmspeed.net/provider/api-5202030-xyz) | 99.72% | 99.94% | 99.54% | 99.54% | 2184 ms | → 1.02x | 1 | 0s | 6d ago | 30m ago |
| [Anannas](https://lmspeed.net/provider/api-anannas-ai) | 99.72% | 99.94% | 32.08% | 32.08% | 1231 ms | ↑ 1.08x | 1 | 0s | 6d ago | 30m ago |
| [头顶冒火](https://lmspeed.net/provider/burn-hair) | 99.72% | 99.64% | 99.90% | 99.90% | 892 ms | → 1.00x | 4 | 10m | 6d ago | 30m ago |
| [DuckDuck API](https://lmspeed.net/provider/duckduck-api) | 99.72% | 99.88% | 99.73% | 99.73% | 3223 ms | → 1.02x | 2 | 0s | 5d ago | 33m ago |
| [GPT Proto](https://lmspeed.net/provider/gpt-proto) | 99.72% | 99.11% | 99.72% | 99.72% | 386 ms | ↑ 1.90x | 10 | 10m | 5d ago | 33m ago |
| [老张API](https://lmspeed.net/provider/laozhang-api) | 99.72% | 99.94% | 99.61% | 99.61% | 968 ms | → 0.98x | 1 | 0s | 3d ago | 34m ago |
| [Lido LLM](https://lmspeed.net/provider/new-api-shiho-top) | 99.72% | 99.64% | 99.17% | 99.17% | 4324 ms | ↑ 1.05x | 6 | 0s | 6d ago | 31m ago |
| [腾讯混元](https://lmspeed.net/provider/tencent-hunyuan) | 99.72% | 99.82% | 63.13% | 63.13% | 2998 ms | ↑ 1.09x | 3 | 0s | 3d ago | 34m ago |
| [Undy API](https://lmspeed.net/provider/vip-undyingapi-com) | 99.72% | 99.94% | 99.87% | 99.87% | 3054 ms | → 1.05x | 1 | 0s | 6d ago | 30m ago |
| [Kterna](https://lmspeed.net/provider/api-kterna-xyz) | 99.72% | 98.22% | 49.37% | 49.37% | 2719 ms | ↑ 1.12x | 8 | 1h 3m | 5d ago | 30m ago |
| [Wy2 API](https://lmspeed.net/provider/wy2-com) | 99.72% | 99.87% | 15.63% | 15.63% | 2704 ms | → 1.01x | 1 | 0s | 5d ago | 30m ago |
| [AI98](https://lmspeed.net/provider/ai98-vip) | 99.72% | 99.70% | 79.87% | 79.87% | 2202 ms | → 1.03x | 5 | 0s | 5d ago | 29m ago |
| [ASI1 API](https://lmspeed.net/provider/asi1-api) | 99.72% | 99.88% | 21.65% | 21.65% | 1824 ms | ↑ 1.10x | 2 | 0s | 5d ago | 30m ago |
| [Nebius AI Studio](https://lmspeed.net/provider/nebius-ai-studio) | 99.72% | 99.88% | 23.28% | 23.28% | 2586 ms | ↑ 1.25x | 2 | 0s | 5d ago | 29m ago |
| [Zhipu Z.ai](https://lmspeed.net/provider/z-ai) | 99.72% | 99.88% | 99.80% | 99.80% | 2097 ms | → 1.03x | 2 | 0s | 5d ago | 29m ago |
| [Crond](https://lmspeed.net/provider/crond) | 99.72% | 99.64% | 21.52% | 21.52% | 4590 ms | ↑ 1.07x | 5 | 6m | 5d ago | 28m ago |
| [ETOS API](https://lmspeed.net/provider/api-ericterminal-com) | 99.72% | 99.88% | 97.55% | 97.55% | 2242 ms | ↑ 1.10x | 2 | 0s | 3d ago | 24m ago |
| [91VIP API](https://lmspeed.net/provider/hcg-pippi-top) | 99.72% | 99.46% | 96.06% | 96.06% | 3794 ms | ↑ 1.19x | 3 | 54m | 5d ago | 22m ago |
| [Huan666 API](https://lmspeed.net/provider/huan666-api) | 99.72% | 99.82% | 23.67% | 23.67% | 655 ms | ↓ 0.44x | 3 | 0s | 2d ago | 24m ago |
| [NanoGPT](https://lmspeed.net/provider/nano-gpt-com) | 99.72% | 99.82% | 68.76% | 68.76% | 1608 ms | ↑ 1.14x | 3 | 0s | 4d ago | 23m ago |
| [Shiyucheng API](https://lmspeed.net/provider/shiyucheng-api) | 99.72% | 99.70% | 24.12% | 24.12% | 1467 ms | ↓ 0.95x | 5 | 0s | 2d ago | 24m ago |
| [AIGCBAR](https://lmspeed.net/provider/api-aigc-bar) | 99.72% | 99.34% | 97.69% | 97.69% | 2247 ms | ↑ 1.07x | 9 | 7m | 6d ago | 21m ago |
| [AI新境](https://lmspeed.net/provider/aixj-vip) | 99.71% | 99.94% | 99.07% | 99.07% | 732 ms | ↑ 1.33x | 1 | 0s | 6d ago | 20m ago |
| [Good HIDNS](https://lmspeed.net/provider/good-hidns) | 99.71% | 99.94% | 98.62% | 98.62% | 2687 ms | ↓ 0.70x | 1 | 0s | 6d ago | 20m ago |
| [Vercel AI Gateway](https://lmspeed.net/provider/vercel-ai-gateway) | 99.71% | 99.94% | 76.03% | 76.03% | 936 ms | ↓ 0.93x | 1 | 0s | 6d ago | 20m ago |
| [巨量API](https://lmspeed.net/provider/api-yidvps-cn) | 99.71% | 97.10% | 97.91% | 97.91% | 4184 ms | → 1.00x | 24 | 28m | 5d ago | 19m ago |
| [Ollama](https://lmspeed.net/provider/ollama-com) | 99.71% | 99.28% | 91.94% | 91.94% | 3078 ms | → 0.99x | 12 | 0s | 2d ago | 20m ago |
| [Smz Ai](https://lmspeed.net/provider/smz6-com) | 99.71% | 97.22% | 98.41% | 98.41% | 3997 ms | ↑ 1.06x | 19 | 41m | 5d ago | 19m ago |
| [性价比API](https://lmspeed.net/provider/xingjiabiapi-org) | 99.71% | 99.34% | 99.75% | 99.75% | 4280 ms | ↑ 1.15x | 7 | 17m | 5d ago | 20m ago |
| [无限智能](https://lmspeed.net/provider/ai-oneinfinityai-com) | 99.71% | 99.76% | 99.86% | 99.86% | 1642 ms | ↑ 1.26x | 3 | 7m | 2d ago | 18m ago |
| [9527 API](https://lmspeed.net/provider/9527code-com) | 99.71% | 99.46% | 99.54% | 99.54% | 874 ms | ↓ 0.67x | 4 | 35m | 6d ago | 15m ago |
| [Xem8k5 AI](https://lmspeed.net/provider/ai-xem8k5-top) | 99.71% | 99.58% | 99.70% | 99.70% | 1557 ms | ↓ 0.69x | 3 | 39m | 3d ago | 16m ago |
| [PPToken API](https://lmspeed.net/provider/api-pptoken-org) | 99.71% | 99.90% | 99.90% | 99.90% | 2075 ms | ↑ 1.07x | 1 | 0s | 4d ago | 15m ago |
| [雪少公益站](https://lmspeed.net/provider/bwh-333491-xyz) | 99.71% | 99.90% | 99.90% | 99.90% | 1249 ms | ↑ 1.07x | 1 | 0s | 3d ago | 16m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-luckyx-cn) | 99.71% | 99.76% | 98.06% | 98.06% | 627 ms | ↓ 0.86x | 4 | 0s | 3d ago | 17m ago |
| [Zhetoo CPA API](https://lmspeed.net/provider/cpa-zhetoo-com) | 99.71% | 99.88% | 99.18% | 99.18% | 1266 ms | → 1.02x | 2 | 0s | 3d ago | 16m ago |
| [ThatAPI](https://lmspeed.net/provider/gyapi-zxiaoruan-cn) | 99.71% | 99.54% | 99.54% | 99.54% | 920 ms | ↓ 0.89x | 3 | 30m | 5d ago | 16m ago |
| [Xem8K5 API](https://lmspeed.net/provider/new-xem8k5-top-3000) | 99.71% | 99.38% | 99.38% | 99.38% | 2897 ms | → 0.97x | 2 | 59m | 3d ago | 15m ago |
| [ABC Relay](https://lmspeed.net/provider/www-abcrelay-com) | 99.71% | 99.76% | 99.85% | 99.85% | 1575 ms | ↑ 1.25x | 2 | 30m | 6d ago | 15m ago |
| [LLMService](https://lmspeed.net/provider/llmservice) | 99.44% | 99.64% | 21.62% | 21.62% | 2188 ms | → 1.02x | 6 | 0s | 4d ago | 33m ago |
| [Moonshot](https://lmspeed.net/provider/moonshot) | 99.44% | 99.59% | 85.82% | 85.82% | 2791 ms | ↑ 1.05x | 7 | 0s | 2d ago | 34m ago |
| [艾可API](https://lmspeed.net/provider/aicanapi-com) | 99.43% | 99.76% | 82.74% | 82.74% | 2466 ms | ↑ 1.12x | 4 | 0s | 4d ago | 23m ago |
| [云智API](https://lmspeed.net/provider/yunzhiapi-cn) | 99.43% | 98.98% | 91.67% | 91.67% | 1655 ms | ↑ 1.11x | 16 | 2m | 3d ago | 22m ago |
| [天宫造物](https://lmspeed.net/provider/cpa-tgzw-shop) | 99.43% | 99.88% | 98.92% | 98.92% | 264 ms | ↓ 0.94x | 1 | 29m | 6d ago | 20m ago |
| [VoAPI公益站](https://lmspeed.net/provider/demo-voapi-top) | 99.43% | 97.22% | 98.75% | 98.75% | 2185 ms | → 0.98x | 19 | 42m | 4d ago | 19m ago |
| [AI发财网](https://lmspeed.net/provider/ai-facai-cloudns-org) | 99.42% | 99.27% | 96.70% | 96.70% | 2201 ms | ↑ 1.10x | 12 | 0s | 2d ago | 16m ago |
| [42公益站](https://lmspeed.net/provider/api-42w-shop) | 99.42% | 98.31% | 98.75% | 98.75% | 786 ms | ↑ 1.15x | 7 | 1h 24m | 4d ago | 16m ago |
| [JuCode](https://lmspeed.net/provider/api-jucode-cn) | 99.42% | 99.52% | 86.66% | 86.66% | 1735 ms | ↓ 0.68x | 7 | 4m | 2d ago | 15m ago |
| [CaMeL AI](https://lmspeed.net/provider/api-kr777-top) | 99.42% | 98.79% | 98.94% | 98.94% | 2263 ms | ↑ 1.93x | 3 | 1h 54m | 1d ago | 15m ago |
| [CRS 802011 API](https://lmspeed.net/provider/crs-802011-xyz) | 99.42% | 99.88% | 97.89% | 97.89% | 513 ms | ↓ 0.93x | 2 | 0s | 4d ago | 15m ago |
| [DGBMC Free API](https://lmspeed.net/provider/freeapi-dgbmc-top) | 99.42% | 99.88% | 99.94% | 99.94% | 2484 ms | ↑ 1.23x | 1 | 21m | 4d ago | 16m ago |
| [慕鸢の公益站](https://lmspeed.net/provider/newapi-linuxdo-edu-rs) | 99.42% | 99.15% | 98.82% | 98.82% | 2602 ms | ↑ 1.14x | 6 | 40m | 6d ago | 16m ago |
| [NowCoding AI](https://lmspeed.net/provider/nowcoding-ai) | 99.42% | 99.88% | 99.88% | 99.88% | 2634 ms | ↑ 1.46x | 2 | 0s | 3d ago | 15m ago |
| [中国科技云大模型 API 开放平台](https://lmspeed.net/provider/uni-api-cstcloud-cn) | 99.42% | 98.25% | 98.25% | 98.25% | 2083 ms | ↓ 0.90x | 13 | 8m | 2d ago | 15m ago |
| [TokenPony](https://lmspeed.net/provider/api-tokenpony-cn) | 99.16% | 99.53% | 56.25% | 56.25% | 1887 ms | ↑ 1.14x | 8 | 0s | 4d ago | 30m ago |
| [Yixya API](https://lmspeed.net/provider/veloera) | 99.16% | 97.69% | 20.97% | 20.97% | 2406 ms | → 1.03x | 38 | 31s | 6d ago | 31m ago |
| [CxyKevin API](https://lmspeed.net/provider/newapi-cxykevin-top) | 99.15% | 99.34% | 69.18% | 69.18% | 1770 ms | ↑ 1.26x | 9 | 7m | 2d ago | 23m ago |
| [简小智API中转站](https://lmspeed.net/provider/newapi-jianxiaozhi-chat) | 99.15% | 98.44% | 86.62% | 86.62% | 4589 ms | ↑ 1.08x | 25 | 1m | 2d ago | 24m ago |
| [Rnglg2 API](https://lmspeed.net/provider/rnglg2-api) | 99.15% | 98.14% | 96.73% | 96.73% | 4450 ms | ↑ 1.07x | 12 | 46m | 2d ago | 24m ago |
| [ZenMux](https://lmspeed.net/provider/zenmux-ai) | 99.15% | 99.58% | 99.81% | 99.81% | 3442 ms | ↑ 1.25x | 5 | 12m | 3d ago | 24m ago |
| [Codex Easy](https://lmspeed.net/provider/www-codexeasy-com) | 99.14% | 78.68% | 92.58% | 92.58% | 4631 ms | ↑ 1.55x | 5 | 1d 5h | 2d ago | 19m ago |
| [发现AI](https://lmspeed.net/provider/www-findcg-com) | 99.14% | 99.82% | 98.03% | 98.03% | 4216 ms | ↑ 1.05x | 2 | 10m | 4d ago | 19m ago |
| [Navy API](https://lmspeed.net/provider/api-navy) | 99.13% | 98.61% | 98.60% | 98.60% | 3056 ms | ↑ 1.22x | 23 | 0s | 1d ago | 15m ago |
| [zeabur API](https://lmspeed.net/provider/new-api-abrdns-com) | 99.13% | 96.49% | 97.63% | 97.63% | 558 ms | ↓ 0.73x | 3 | 7h 7m | 7d ago | 16m ago |
| [Koyeb AI Gateway](https://lmspeed.net/provider/new-api-koyeb-app) | 99.13% | 98.06% | 98.66% | 98.66% | 2266 ms | ↑ 1.26x | 6 | 1h 38m | 6d ago | 16m ago |

</details>

<details open>
<summary><strong>🟡 Degraded (48)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [AIStack](https://lmspeed.net/provider/aistack) | 98.88% | 99.41% | 96.11% | 96.11% | 3553 ms | ↑ 1.11x | 10 | 0s | 3d ago | 34m ago |
| [讯飞星火](https://lmspeed.net/provider/iflytek-spark) | 98.88% | 98.94% | 98.38% | 98.38% | 4488 ms | → 1.04x | 18 | 0s | 2d ago | 35m ago |
| [SWT-API](https://lmspeed.net/provider/api-lhyb-dpdns-org) | 98.88% | 98.04% | 96.56% | 96.56% | 1986 ms | ↑ 1.18x | 7 | 1h 26m | 5d ago | 30m ago |
| [NSCC 广州超算 DeepSeek](https://lmspeed.net/provider/nscc-gz-deepseek) | 98.88% | 99.29% | 69.48% | 69.48% | 3974 ms | → 0.98x | 9 | 8m | 5d ago | 29m ago |
| [GG公益站-云GCLI](https://lmspeed.net/provider/gcli-ggchan-dev) | 98.87% | 98.57% | 98.91% | 98.91% | 1926 ms | → 1.03x | 17 | 12m | 3d ago | 29m ago |
| [MiniMax](https://lmspeed.net/provider/minimax) | 98.86% | 99.58% | 92.95% | 92.95% | 1392 ms | ↓ 0.86x | 5 | 10m | 1d ago | 22m ago |
| [丰思理 AI](https://lmspeed.net/provider/ai-fengsili-online) | 98.85% | 20.77% | 65.18% | 65.18% | 2146 ms | → 1.00x | 2 | 11d 12h | 5d ago | 20m ago |
| [TokenFlux](https://lmspeed.net/provider/tokenflux-cloud) | 98.84% | 99.40% | 99.36% | 99.36% | 4864 ms | ↑ 1.30x | 8 | 6m | 5d ago | 16m ago |
| [VSLLM](https://lmspeed.net/provider/vsllm-com) | 98.58% | 99.28% | 98.86% | 98.86% | 1980 ms | ↑ 1.14x | 5 | 36m | 7d ago | 22m ago |
| [Claw API](https://lmspeed.net/provider/claw-88888868-xyz) | 98.56% | 99.70% | 80.32% | 80.32% | 1963 ms | → 1.00x | 3 | 20m | 3d ago | 20m ago |
| [贵州大模型云算力 Token](https://lmspeed.net/provider/gpt-agent-cc) | 98.56% | 98.19% | 92.65% | 92.65% | 707 ms | → 1.03x | 15 | 23m | 2d ago | 18m ago |
| [9Router](https://lmspeed.net/provider/rb6k9jv-9router-com) | 98.56% | 99.70% | 93.34% | 93.34% | 30 ms | → 1.00x | 1 | 1h 22m | 5d ago | 18m ago |
| [初叶🍂Furry API](https://lmspeed.net/provider/ai-chuyel-top) | 98.55% | 94.92% | 95.72% | 95.72% | 1360 ms | ↓ 0.55x | 10 | 3h 12m | 5d ago | 18m ago |
| [933999 API](https://lmspeed.net/provider/openai-933999-xyz) | 98.55% | 99.70% | 99.79% | 99.79% | 1547 ms | ↑ 1.12x | 2 | 36m | 2d ago | 16m ago |
| [百度千帆](https://lmspeed.net/provider/baidu-qianfan) | 98.32% | 98.17% | 87.63% | 87.63% | 4014 ms | ↑ 1.14x | 31 | 0s | 3d ago | 35m ago |
| [Atlas Cloud](https://lmspeed.net/provider/api-atlascloud-ai) | 98.31% | 98.27% | 21.02% | 21.02% | 4201 ms | → 1.02x | 29 | 0s | 3d ago | 28m ago |
| [933999 CPA API](https://lmspeed.net/provider/cpa-933999-xyz) | 98.27% | 66.55% | 82.47% | 82.47% | 1218 ms | ↓ 0.94x | 4 | 2d 10h | 2d ago | 16m ago |
| [并行科技](https://lmspeed.net/provider/llmapi-paratera-com) | 98.03% | 95.72% | 19.75% | 19.75% | 3046 ms | ↑ 1.07x | 67 | 2m | 59m ago | 29m ago |
| [SoraApi](https://lmspeed.net/provider/api-67-si) | 97.98% | 99.24% | 99.24% | 99.24% | 366 ms | ↓ 0.86x | 9 | 2m | 2d ago | 16m ago |
| [我不是AI神](https://lmspeed.net/provider/api-udcode-cn) | 97.73% | 98.44% | 68.18% | 68.18% | 4755 ms | → 1.03x | 22 | 5m | 2d ago | 23m ago |
| [阿里云百炼 DashScope](https://lmspeed.net/provider/dashscope) | 97.49% | 36.84% | 75.05% | 75.05% | 3960 ms | → 1.01x | 12 | 1d 12h | 2d ago | 35m ago |
| [Jey-API](https://lmspeed.net/provider/openai-zidianidc-com) | 97.41% | 96.20% | 84.46% | 84.46% | 4633 ms | → 1.01x | 53 | 6m | 2d ago | 20m ago |
| [MyWebUI API](https://lmspeed.net/provider/api-mywebui-com) | 97.40% | 92.17% | 92.17% | 92.17% | 4649 ms | → 0.99x | 26 | 1h 23m | 2d ago | 15m ago |
| [Kunkunout API](https://lmspeed.net/provider/api-kunkunout-cn) | 97.11% | 97.03% | 91.54% | 91.54% | 4401 ms | ↑ 1.12x | 17 | 30m | 2d ago | 16m ago |
| [DMXAPI](https://lmspeed.net/provider/www-dmxapi-cn) | 96.92% | 98.16% | 86.05% | 86.05% | 4444 ms | → 0.98x | 29 | 2m | 2d ago | 31m ago |
| [ModelPool](https://lmspeed.net/provider/www-modelpool-cn) | 96.86% | 97.11% | 86.59% | 86.59% | 4574 ms | → 1.01x | 36 | 9m | 1d ago | 21m ago |
| [AiroeAI](https://lmspeed.net/provider/ai-airoe-cn) | 96.63% | 96.97% | 75.06% | 75.06% | 4602 ms | ↑ 1.07x | 44 | 5m | 1d ago | 29m ago |
| [Venlacy](https://lmspeed.net/provider/api-venlacy-top) | 96.59% | 56.32% | 32.85% | 32.85% | 2380 ms | ↑ 1.13x | 2 | 6d 10h | 11d ago | 24m ago |
| [Zhang19hao CLI Proxy](https://lmspeed.net/provider/zhang19hao-cli-proxy) | 96.55% | 98.07% | 53.20% | 53.20% | 3989 ms | ↑ 1.51x | 30 | 2m | 2d ago | 19m ago |
| [CM-API 公益站](https://lmspeed.net/provider/api-chengmo-cc-cd) | 96.53% | 88.38% | 93.19% | 93.19% | 922 ms | ↓ 0.50x | 87 | 28m | 2d ago | 16m ago |
| [OnprsCodexApi](https://lmspeed.net/provider/api-onprs-top) | 96.24% | 96.91% | 96.91% | 96.91% | 4682 ms | → 0.99x | 27 | 3m | 1d ago | 14m ago |
| [ArkAPI (Wind Hub)](https://lmspeed.net/provider/windhub-cc) | 96.24% | 98.37% | 97.12% | 97.12% | 1770 ms | ↑ 1.12x | 11 | 42m | 1d ago | 16m ago |
| [智增增API](https://lmspeed.net/provider/api-zhizengzeng-com) | 96.05% | 96.61% | 98.47% | 98.47% | 4383 ms | → 1.01x | 55 | 1m | 2d ago | 28m ago |
| [API 额度共享平台](https://lmspeed.net/provider/2c2ch1u11-share-api-0-hf-space) | 96.02% | 98.74% | 73.52% | 73.52% | 906 ms | → 0.96x | 9 | 40m | 5d ago | 23m ago |
| [Higobs API](https://lmspeed.net/provider/newapi-higobs-com) | 95.95% | 98.25% | 98.82% | 98.82% | 2356 ms | ↑ 1.31x | 14 | 27m | 1d ago | 16m ago |
| [遂人API](https://lmspeed.net/provider/qkznpnwlumic-sealosgzg-site) | 95.45% | 95.92% | 83.32% | 83.32% | 4838 ms | → 1.02x | 62 | 3m | 1d ago | 22m ago |
| [EasyMore](https://lmspeed.net/provider/ai-easymoreapi-com) | 94.51% | 97.40% | 96.83% | 96.83% | 1450 ms | ↓ 0.88x | 4 | 4h 2m | 5d ago | 18m ago |
| [小天公益站](https://lmspeed.net/provider/new-api-xt-url-com) | 94.03% | 98.68% | 98.33% | 98.33% | 1932 ms | ↑ 1.12x | 2 | 3h 26m | 2d ago | 22m ago |
| [Tokaify](https://lmspeed.net/provider/tokaify) | 93.35% | 98.61% | 98.97% | 98.97% | 2254 ms | ↓ 0.90x | 4 | 1h 35m | 4d ago | 14m ago |
| [binaryYuki](https://lmspeed.net/provider/binaryyuki) | 92.46% | 95.27% | 99.47% | 99.47% | 4005 ms | ↑ 1.11x | 4 | 7h 5m | 1d ago | 34m ago |
| [天智大模型网关](https://lmspeed.net/provider/tianzhi-llm-gateway) | 88.35% | 87.00% | 22.09% | 22.09% | 4312 ms | ↓ 0.94x | 164 | 9m | 1d ago | 24m ago |
| [AI Claw API](https://lmspeed.net/provider/api-ai-claw-cloud) | 88.15% | 93.10% | 90.72% | 90.72% | 1408 ms | ↑ 1.09x | 24 | 1h 39m | 2d ago | 15m ago |
| [My Claude Code](https://lmspeed.net/provider/my-claude-code) | 87.36% | 97.05% | 55.14% | 55.14% | 864 ms | ↑ 1.34x | 9 | 1h 48m | 2d ago | 20m ago |
| [Stark GPT Load](https://lmspeed.net/provider/stark-gpt-load-onrender-com) | 87.28% | 58.56% | 33.99% | 33.99% | 3173 ms | → 1.00x | 186 | 1h 8m | 2d ago | 15m ago |
| [EnenCloud API](https://lmspeed.net/provider/api-enencloud-top) | 79.26% | 50.90% | 32.31% | 32.31% | 1160 ms | ↑ 1.34x | 3 | 4d 19h | 5d ago | 23m ago |
| [ModelVerse API](https://lmspeed.net/provider/modelverse-api) | 77.84% | 72.33% | 26.08% | 26.08% | 4364 ms | ↓ 0.93x | 281 | 18m | 1d ago | 22m ago |
| [Gitee AI](https://lmspeed.net/provider/gitee-ai) | 73.11% | 71.41% | 62.79% | 62.79% | 4844 ms | → 0.99x | 310 | 16m | 60m ago | 30m ago |
| [XuYa公益站](https://lmspeed.net/provider/openai-xuya-dev) | 35.92% | 7.55% | 44.14% | 44.14% | 2111 ms | → 1.00x | 1 | 26d 20h | 30d ago | 20m ago |

</details>

<details open>
<summary><strong>🔴 Down (264)</strong></summary>

| Provider | 7d | 30d | 1y | All-time | p95 (7d) | Trend | Incidents (30d) | MTTR | Last incident | Last check |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Xiao Wan](https://lmspeed.net/provider/web-xiaowan-ggff-net) | 92.05% | 93.28% | 73.42% | 73.42% | 2131 ms | ↑ 1.13x | 21 | 1h 30m | 1h ago | 23m ago |
| [Moyanjdc API](https://lmspeed.net/provider/moyanjdc-api) | 86.74% | 18.43% | 26.50% | 26.50% | 2352 ms | → 1.00x | 3 | 8d 5h | 2d ago | 18m ago |
| [Xiaomimimo Token Plan CN](https://lmspeed.net/provider/xiaomimimo-token-plan-cn) | 86.49% | 88.59% | 59.34% | 59.34% | 4301 ms | ↑ 1.06x | 151 | 7m | 18m ago | 18m ago |
| [331112 AI](https://lmspeed.net/provider/ai-331112-xyz) | 84.39% | 95.89% | 97.14% | 97.14% | 1354 ms | ↓ 0.63x | 5 | 9h 50m | 2d ago | 16m ago |
| [Pspi API](https://lmspeed.net/provider/ah-pspi-ink) | 82.66% | 96.37% | 97.57% | 97.57% | 276 ms | ↓ 0.30x | 1 | 2d | 2d ago | 16m ago |
| [极速AI](https://lmspeed.net/provider/v2-aicodee-com) | 82.18% | 78.68% | 82.43% | 82.43% | 4134 ms | ↓ 0.74x | 33 | 4h 56m | 2d ago | 18m ago |
| [Real AI WAN](https://lmspeed.net/provider/token-realaiwan-com) | 79.19% | 77.68% | 81.20% | 81.20% | 4235 ms | ↓ 0.93x | 158 | 35m | 1h ago | 14m ago |
| [Neb 公益站](https://lmspeed.net/provider/ai-zzhdsgsss-xyz) | 75.43% | 94.86% | 96.55% | 96.55% | 420 ms | ↑ 1.16x | 2 | 1d 5h | 2d ago | 17m ago |
| [Mentoe API](https://lmspeed.net/provider/www-mentoe-com) | 69.08% | 93.22% | 91.51% | 91.51% | 178 ms | ↓ 0.16x | 3 | 22h 37m | 3d ago | 14m ago |
| [Lanyun](https://lmspeed.net/provider/lanyun) | 64.43% | 72.39% | 96.53% | 96.53% | 4555 ms | ↑ 1.12x | 261 | 21m | 32m ago | 32m ago |
| [Feng Love API](https://lmspeed.net/provider/new-feng-love) | 48.28% | 89.09% | 96.16% | 96.16% | 2153 ms | ↑ 1.23x | 2 | 2d 1h | 4d ago | 20m ago |
| [Poixe API](https://lmspeed.net/provider/api-poixe-com) | 30.92% | 64.91% | 79.21% | 79.21% | 4962 ms | ↑ 1.98x | 157 | 1h 8m | 17m ago | 17m ago |
| [SanShui API](https://lmspeed.net/provider/sanshui-api) | 21.79% | 83.32% | 98.09% | 98.09% | 3133 ms | ↑ 1.06x | 3 | 1d 21h | 6d ago | 34m ago |
| [HotaruAPI](https://lmspeed.net/provider/api-hotaruapi-top) | 19.03% | 48.02% | 47.30% | 47.30% | 519 ms | → 0.99x | 2 | 8d 1h | 6d ago | 23m ago |
| [天翼云](https://lmspeed.net/provider/ctyun) | 1.40% | 1.71% | 57.16% | 57.16% | 2590 ms | ↓ 0.87x | 30 | 23h 19m | 1d ago | 35m ago |
| [Chibanban](https://lmspeed.net/provider/api-chibanban-de) | 0.84% | 33.57% | 49.72% | 49.72% | 2856 ms | ↑ 1.33x | 9 | 2d 5h | 6d ago | 30m ago |
| [081007 API](https://lmspeed.net/provider/081007-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [1984](https://lmspeed.net/provider/1984-hosting) | 0.00% | 0.00% | 77.70% | 77.70% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [20230621 API](https://lmspeed.net/provider/20230621-xyz) | 0.00% | 0.00% | 64.36% | 64.36% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [共绩算力](https://lmspeed.net/provider/550c-cloud) | 0.00% | 0.00% | 69.25% | 69.25% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [665 API](https://lmspeed.net/provider/665-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [6i2 API](https://lmspeed.net/provider/6i2-com) | 0.00% | 0.00% | 39.40% | 39.40% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [91VIP](https://lmspeed.net/provider/91vip-futureppo-top) | 0.00% | 0.00% | 73.18% | 73.18% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [97公益站 AI API Gateway](https://lmspeed.net/provider/97gongyizhan-ai-api-gateway) | 0.00% | 0.00% | 54.52% | 54.52% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [theoldllm-api-pro](https://lmspeed.net/provider/a1-6661966-xyz) | 0.00% | 0.00% | 5.29% | 5.29% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Academic Sanctum](https://lmspeed.net/provider/academic-sanctum) | 0.00% | 0.00% | 11.75% | 11.75% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AI中转站](https://lmspeed.net/provider/ai-192700-xyz) | 0.00% | 0.00% | 49.74% | 49.74% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [草丛GPT中转站](https://lmspeed.net/provider/ai-adbog-com) | 0.00% | 62.13% | 81.15% | 81.15% | — | — | 22 | 12h 37m | 12d ago | 15m ago |
| [Amethyst AI](https://lmspeed.net/provider/ai-amethyst-ltd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Freddy Greve](https://lmspeed.net/provider/ai-api-freddygreve-com) | 0.00% | 0.00% | 3.19% | 3.19% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [祥云互联](https://lmspeed.net/provider/ai-cloudcatc-cn-91) | 0.00% | 40.66% | 84.10% | 84.10% | — | — | 1 | 18d 3h | 18d ago | 18m ago |
| [AI Platform](https://lmspeed.net/provider/ai-platform-danke666-top) | 0.00% | 0.00% | 77.94% | 77.94% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AI Proxy Service](https://lmspeed.net/provider/ai-proxy-4ba-cn-co) | 0.00% | 0.00% | 34.21% | 34.21% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [AICNN](https://lmspeed.net/provider/aicnn) | 0.00% | 0.00% | 87.03% | 87.03% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Aidaxianyi Endpoint](https://lmspeed.net/provider/aidaxianyi-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [AidRouter](https://lmspeed.net/provider/aidrouter-qzz-io) | 0.00% | 0.00% | 21.64% | 21.64% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIGC Arthals](https://lmspeed.net/provider/aigc-arthals-ink) | 0.00% | 0.00% | 69.93% | 69.93% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [联通云](https://lmspeed.net/provider/aigw-jnzs5-cucloud-cn-8443) | 0.00% | 0.00% | 46.00% | 46.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Immersive Translate](https://lmspeed.net/provider/aigw1-immersivetranslate-com) | 0.00% | 0.00% | 27.63% | 27.63% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [AIO通用智能服务平台](https://lmspeed.net/provider/aio-intelligence) | 0.00% | 21.79% | 86.29% | 86.29% | — | — | 1 | 23d 13h | 24d ago | 33m ago |
| [Akass API](https://lmspeed.net/provider/akass-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Akemidia MUA (HF Space)](https://lmspeed.net/provider/akemidia-mua-hf) | 0.00% | 0.00% | 78.30% | 78.30% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [阿里巴巴 IdeaLab](https://lmspeed.net/provider/alibaba-idealab) | 0.00% | 0.00% | 58.98% | 58.98% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Alibaba PAI-EAS Endpoint](https://lmspeed.net/provider/alibaba-pai-eas-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [GPT Load (AllAI)](https://lmspeed.net/provider/allaiload-dpdns-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [ALMZBH API](https://lmspeed.net/provider/almzbh-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Puzhehei](https://lmspeed.net/provider/api) | 0.00% | 0.00% | 72.34% | 72.34% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [FastRouter](https://lmspeed.net/provider/api-055ai-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 34m ago |
| [102417 API](https://lmspeed.net/provider/api-102417-xyz) | 0.00% | 0.00% | 13.56% | 13.56% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [10dian-API](https://lmspeed.net/provider/api-10dian-ai-top) | 0.00% | 0.00% | 45.62% | 45.62% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [哈基米API](https://lmspeed.net/provider/api-123chat-top) | 0.00% | 0.00% | 88.86% | 88.86% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Sub2API](https://lmspeed.net/provider/api-123nhh-me) | 0.00% | 0.00% | 31.16% | 31.16% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [霁风のAPI站](https://lmspeed.net/provider/api-2006038-xyz) | 0.00% | 51.48% | 75.53% | 75.53% | — | — | 1 | 14d 22h | 15d ago | 15m ago |
| [CHB API](https://lmspeed.net/provider/api-464888-xyz) | 0.00% | 0.00% | 78.69% | 78.69% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [KJK API](https://lmspeed.net/provider/api-865199-xyz) | 0.00% | 40.00% | 38.93% | 38.93% | — | — | 3 | 4d 21h | 15d ago | 16m ago |
| [AI5](https://lmspeed.net/provider/api-ai5-my) | 0.00% | 21.95% | 82.14% | 82.14% | — | — | 1 | 23d 14h | 24d ago | 19m ago |
| [Amethyst AI](https://lmspeed.net/provider/api-amethyst-ltd) | 0.00% | 0.00% | 3.19% | 3.19% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [Aoixx API](https://lmspeed.net/provider/api-aoixx-com) | 0.00% | 69.57% | 83.78% | 83.78% | — | — | 6 | 1d 15h | 9d ago | 16m ago |
| [BestAI API](https://lmspeed.net/provider/api-bestai-cfd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [情酱的API站](https://lmspeed.net/provider/api-byebug-cn) | 0.00% | 58.26% | 79.44% | 79.44% | — | — | 1 | 13d 1h | 13d ago | 15m ago |
| [Cerebras](https://lmspeed.net/provider/api-cerebras-ai) | 0.00% | 0.00% | 78.54% | 78.54% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [CharTyr](https://lmspeed.net/provider/api-char-icu) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [CHSH API](https://lmspeed.net/provider/api-chshapi-cn) | 0.00% | 0.00% | 26.96% | 26.96% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [碳硅生命体](https://lmspeed.net/provider/api-csmindai-com) | 0.00% | 0.00% | 48.73% | 48.73% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Fireworks AI](https://lmspeed.net/provider/api-fireworks-ai) | 0.00% | 0.00% | 1.93% | 1.93% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Gue API](https://lmspeed.net/provider/api-gueai-com) | 0.00% | 0.00% | 86.00% | 86.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Hank Workspace API](https://lmspeed.net/provider/api-hankworkspace-cn) | 0.00% | 37.51% | 38.62% | 38.62% | — | — | 1 | 19d 1h | 19d ago | 15m ago |
| [fffaa AI](https://lmspeed.net/provider/api-heabl-top) | 0.00% | 0.00% | 67.76% | 67.76% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Only for Linux.DO](https://lmspeed.net/provider/api-ibs-gss-top) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [S.A.](https://lmspeed.net/provider/api-komeiji-shiki-top) | 0.00% | 0.00% | 68.82% | 68.82% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [LiteRouter](https://lmspeed.net/provider/api-literouter-com) | 0.00% | 52.27% | 76.01% | 76.01% | — | — | 3 | 4d 21h | 15d ago | 16m ago |
| [wuer的api站](https://lmspeed.net/provider/api-minewuer-com) | 0.00% | 50.39% | 43.24% | 43.24% | — | — | 5 | 3d 2h | 7d ago | 16m ago |
| [MineWuer API](https://lmspeed.net/provider/api-minewuer-top) | 0.00% | 50.18% | 66.06% | 66.06% | — | — | 6 | 2d 13h | 7d ago | 22m ago |
| [mol](https://lmspeed.net/provider/api-mol-us-ci) | 0.00% | 0.00% | 27.48% | 27.48% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [ORBIAI](https://lmspeed.net/provider/api-orbiai-cloud) | 0.00% | 0.00% | 51.29% | 51.29% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Piaochong](https://lmspeed.net/provider/api-piaochong-us-ci) | 0.00% | 0.00% | 46.25% | 46.25% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [SCNET](https://lmspeed.net/provider/api-scnet-cn) | 0.00% | 0.00% | 22.58% | 22.58% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [算了么 API](https://lmspeed.net/provider/api-suanli-cn) | 0.00% | 13.13% | 78.64% | 78.64% | — | — | 4 | 6d 13h | 26d ago | 35m ago |
| [Wahoo AI](https://lmspeed.net/provider/api-wahooai-com) | 0.00% | 12.51% | 39.31% | 39.31% | — | — | 3 | 8d 19h | 26d ago | 30m ago |
| [Wzjself API](https://lmspeed.net/provider/api-wzjself-org) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 4h | 24d ago | 15m ago |
| [Dibin84 API Hub](https://lmspeed.net/provider/apihub-dibin84-eu-org) | 0.00% | 14.69% | 52.76% | 52.76% | — | — | 1 | 25d 20h | 26d ago | 17m ago |
| [心流](https://lmspeed.net/provider/apis-iflow-cn) | 0.00% | 0.00% | 0.11% | 0.11% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ASXS API](https://lmspeed.net/provider/asxs-api) | 0.00% | 0.00% | 53.73% | 53.73% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [AWA1 API](https://lmspeed.net/provider/awa1-api) | 0.00% | 0.00% | 21.98% | 21.98% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Baize 聚合 (HF Space)](https://lmspeed.net/provider/baize-juhe-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [BLJJ API](https://lmspeed.net/provider/bljj-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [RRJ99 API](https://lmspeed.net/provider/bt-rrj99-com) | 0.00% | 0.00% | 4.79% | 4.79% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [BT6 API](https://lmspeed.net/provider/bt6-api) | 0.00% | 0.00% | 61.83% | 61.83% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [BytesBoost](https://lmspeed.net/provider/bytesboost) | 0.00% | 0.00% | 78.25% | 78.25% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [C85 API](https://lmspeed.net/provider/c85-api) | 0.00% | 37.34% | 72.88% | 72.88% | — | — | 1 | 19d 2h | 19d ago | 18m ago |
| [Cheersgo API](https://lmspeed.net/provider/cheersgo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Chiban API](https://lmspeed.net/provider/chiban-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [CIA](https://lmspeed.net/provider/cia-288878-xyz) | 0.00% | 0.00% | 5.79% | 5.79% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [ClawCloud Proxy (akmf)](https://lmspeed.net/provider/clawcloud-akmf-3) | 0.00% | 0.00% | 74.75% | 74.75% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [ClawCloud Proxy (jhgpt)](https://lmspeed.net/provider/clawcloud-jhgpt) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [ClawCloud Proxy (rdao)](https://lmspeed.net/provider/clawcloud-rdao) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [ClawCloud Run](https://lmspeed.net/provider/clawcloud-run) | 0.00% | 0.00% | 77.10% | 77.10% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Zeabur](https://lmspeed.net/provider/cli-proxy-api-667-zeabur-app) | 0.00% | 0.00% | 29.41% | 29.41% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [FindCG API](https://lmspeed.net/provider/cn-findcg-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [CNB Run Workspace Endpoint](https://lmspeed.net/provider/cnb-run-workspace-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [NewCLI Code API](https://lmspeed.net/provider/code-newcli-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Codex For Me](https://lmspeed.net/provider/codex-for-me) | 0.00% | 22.45% | 86.63% | 86.63% | — | — | 2 | 11d 16h | 23d ago | 22m ago |
| [SakuraCode](https://lmspeed.net/provider/codex-sakurapy-de) | 0.00% | 0.00% | 23.95% | 23.95% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Codex666](https://lmspeed.net/provider/codex666) | 0.00% | 0.00% | 21.22% | 21.22% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Altare](https://lmspeed.net/provider/console-altr-cc) | 0.00% | 0.00% | 49.71% | 49.71% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Cotton API](https://lmspeed.net/provider/cotton-api) | 0.00% | 73.10% | 85.55% | 85.55% | — | — | 1 | 8d 16h | 9d ago | 33m ago |
| [霁风的小圈](https://lmspeed.net/provider/cpa-2006038-xyz) | 0.00% | 22.29% | 22.29% | 22.29% | — | — | 2 | 7d 1h | 14d ago | 15m ago |
| [865199 CPA API](https://lmspeed.net/provider/cpa-865199-xyz) | 0.00% | 52.21% | 74.41% | 74.41% | — | — | 4 | 3d 16h | 15d ago | 16m ago |
| [hibestoic](https://lmspeed.net/provider/cpa-hibestoic-de) | 0.00% | 72.90% | 86.21% | 86.21% | — | — | 7 | 1d 6h | 9d ago | 16m ago |
| [IllSky CPA](https://lmspeed.net/provider/cpa-illsky-com) | 0.00% | 51.72% | 80.19% | 80.19% | — | — | 13 | 1d 3h | 15d ago | 17m ago |
| [CLI Proxy API Server](https://lmspeed.net/provider/cpa-mn1-top) | 0.00% | 0.00% | 49.35% | 49.35% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [CLIPROXYAPI](https://lmspeed.net/provider/cpa-tongxin-de) | 0.00% | 17.96% | 18.59% | 18.59% | — | — | 8 | 1d 20h | 15d ago | 16m ago |
| [Cita777 CPA API](https://lmspeed.net/provider/cpa1-cita777-me) | 0.00% | 0.00% | 6.63% | 6.63% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [APDSM](https://lmspeed.net/provider/cto-ntbsd-eu-org) | 0.00% | 0.00% | 58.25% | 58.25% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [DeepSeek R1 Shop](https://lmspeed.net/provider/deepseek-r1-shop) | 0.00% | 0.00% | 43.92% | 43.92% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Dev Tunnels Proxy](https://lmspeed.net/provider/dev-tunnels-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [DawnLoadAI DF2](https://lmspeed.net/provider/df-dawnloadai-com-8443) | 0.00% | 20.55% | 20.55% | 20.55% | — | — | 3 | 6d 10h | 19d ago | 16m ago |
| [DOI9 Translate](https://lmspeed.net/provider/doi9-translate) | 0.00% | 0.00% | 39.90% | 39.90% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Done Hub](https://lmspeed.net/provider/done-hub) | 0.00% | 54.88% | 77.30% | 77.30% | — | — | 4 | 3d 11h | 14d ago | 34m ago |
| [Supersb API](https://lmspeed.net/provider/ds-supersb-me) | 0.00% | 0.00% | 22.59% | 22.59% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [EdgeFN API](https://lmspeed.net/provider/edgefn-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [帆软](https://lmspeed.net/provider/fanruan) | 0.00% | 0.00% | 78.26% | 78.26% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Fanyi 963312](https://lmspeed.net/provider/fanyi-963312-xyz) | 0.00% | 0.00% | 55.29% | 55.29% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [枫叶](https://lmspeed.net/provider/fengyeai-chat) | 0.00% | 66.67% | 83.26% | 83.26% | — | — | 1 | 10d 15h | 11d ago | 16m ago |
| [FFA API](https://lmspeed.net/provider/ffa-api) | 0.00% | 0.00% | 36.72% | 36.72% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Fitue API](https://lmspeed.net/provider/fitue-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Fo-API](https://lmspeed.net/provider/fo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [52公益站](https://lmspeed.net/provider/free-9e-nz) | 0.00% | 5.06% | 68.44% | 68.44% | — | — | 1 | 28d 13h | 29d ago | 20m ago |
| [FRP Proxy Endpoint](https://lmspeed.net/provider/frp-proxy-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [FuturePPO API](https://lmspeed.net/provider/futureppo-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Futureppo](https://lmspeed.net/provider/futureppo-fuck-me) | 0.00% | 0.00% | 73.14% | 73.14% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Gala ChataiAPI](https://lmspeed.net/provider/gala-chataiapi-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Gemma](https://lmspeed.net/provider/gemma-san-baby) | 0.00% | 0.00% | 66.01% | 66.01% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Google Gemini API](https://lmspeed.net/provider/google-gemini-api) | 0.00% | 0.00% | 2.39% | 2.39% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [GPT Load (0fee)](https://lmspeed.net/provider/gpt-load) | 0.00% | 0.00% | 78.47% | 78.47% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [GPT API US](https://lmspeed.net/provider/gptapi-us) | 0.00% | 0.00% | 39.27% | 39.27% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Fangyuan API](https://lmspeed.net/provider/gptpay-store) | 0.00% | 4.46% | 92.03% | 92.03% | — | — | 1 | 28d 17h | 29d ago | 29m ago |
| [Groq](https://lmspeed.net/provider/groq) | 0.00% | 0.00% | 78.25% | 78.25% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [GRSAI API](https://lmspeed.net/provider/grsai-api) | 0.00% | 0.00% | 30.77% | 30.77% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Hornsun](https://lmspeed.net/provider/hornsun) | 0.00% | 0.00% | 78.16% | 78.16% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [微雨API](https://lmspeed.net/provider/hu-weiyusc-top) | 0.00% | 0.00% | 45.19% | 45.19% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Huawei Cloud](https://lmspeed.net/provider/huawei-modelarts) | 0.00% | 0.00% | 19.40% | 19.40% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [HanYue_AI](https://lmspeed.net/provider/hyapi-hanyue-xyz) | 0.00% | 0.00% | 40.97% | 40.97% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [hzfox](https://lmspeed.net/provider/hzfox) | 0.00% | 0.00% | 75.96% | 75.96% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Imerji LLM](https://lmspeed.net/provider/imerji-llm) | 0.00% | 0.00% | 0.10% | 0.10% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DNSHE](https://lmspeed.net/provider/imsnake-dart-us-ci) | 0.00% | 0.00% | 59.92% | 59.92% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [InstCopilot API](https://lmspeed.net/provider/instcopilot-api-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [IQGeAI API](https://lmspeed.net/provider/iqgeai-api) | 0.00% | 0.00% | 25.33% | 25.33% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [JD Cloud Model Service](https://lmspeed.net/provider/jd-cloud-model-service) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [Jianxiaoru US Endpoint](https://lmspeed.net/provider/jianxiaoru-us-endpoint) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Joyue](https://lmspeed.net/provider/joyue) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Lemon API](https://lmspeed.net/provider/justdoitme-me) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 2h | 24d ago | 16m ago |
| [K2Think](https://lmspeed.net/provider/k2t-shiho-top) | 0.00% | 0.00% | 74.54% | 74.54% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [KFC API](https://lmspeed.net/provider/kfc-api-sxxe-net) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 2h | 24d ago | 16m ago |
| [Kilo](https://lmspeed.net/provider/kilo-ai) | 0.00% | 0.00% | 45.25% | 45.25% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Kiro](https://lmspeed.net/provider/kiro-nuiziyyds-com) | 0.00% | 0.00% | 2.94% | 2.94% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [ZenScale AI](https://lmspeed.net/provider/lc-zenscaleai-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 3h | 24d ago | 16m ago |
| [联无所AI](https://lmspeed.net/provider/lianwusuoai) | 0.00% | 0.00% | 40.77% | 40.77% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [零一万物](https://lmspeed.net/provider/lingyiwanwu) | 0.00% | 0.00% | 73.02% | 73.02% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [LLM PM](https://lmspeed.net/provider/llm-pm) | 0.00% | 0.00% | 39.33% | 39.33% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [LongCat API](https://lmspeed.net/provider/longcat-api) | 0.00% | 0.00% | 55.71% | 55.71% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [MagicAI](https://lmspeed.net/provider/magic-ai-zeabur-app) | 0.00% | 25.72% | 25.72% | 25.72% | — | — | 1 | 18d | 18d ago | 16m ago |
| [OAI Open](https://lmspeed.net/provider/magic-api-oaiopen) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-31328) | 0.00% | 0.00% | 35.99% | 35.99% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Mars HK](https://lmspeed.net/provider/mars-hk-duckdns-org-38317) | 0.00% | 0.00% | 55.33% | 55.33% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Marswjf API](https://lmspeed.net/provider/marswjf-api) | 0.00% | 0.00% | 83.92% | 83.92% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Midjourney API](https://lmspeed.net/provider/midjourney-api) | 0.00% | 47.87% | 95.43% | 95.43% | — | — | 2 | 7d 23h | 16d ago | 34m ago |
| [Mine](https://lmspeed.net/provider/mine) | 0.00% | 0.00% | 26.72% | 26.72% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [中国教育和科研计算机网CERNET](https://lmspeed.net/provider/models-sjtu-edu-cn) | 0.00% | 0.00% | 11.09% | 11.09% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [MrHua API](https://lmspeed.net/provider/mrhua-api) | 0.00% | 0.00% | 22.76% | 22.76% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [MyNav AI](https://lmspeed.net/provider/mynav-website) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Zeabur](https://lmspeed.net/provider/neapi-zeabur-app) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [PlanetAber API](https://lmspeed.net/provider/neo-api-2) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Netease Mom API](https://lmspeed.net/provider/netease-mom-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [123NHH API](https://lmspeed.net/provider/new-123nhh-xyz) | 0.00% | 0.00% | 50.01% | 50.01% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [华际 API](https://lmspeed.net/provider/new-api-4) | 0.00% | 0.00% | 88.86% | 88.86% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sealos](https://lmspeed.net/provider/new-api-imnlocrv-sealoshzh-site) | 0.00% | 0.00% | 50.26% | 50.26% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [Koru API](https://lmspeed.net/provider/new-api-koru-ink) | 0.00% | 0.00% | 68.13% | 68.13% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [WAADRI](https://lmspeed.net/provider/new-waadri-top) | 0.00% | 0.00% | 8.32% | 8.32% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [微B API](https://lmspeed.net/provider/new-wei-bi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [拼好站](https://lmspeed.net/provider/new-xigua-wiki) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [小智API](https://lmspeed.net/provider/newai-aichat-ink) | 0.00% | 0.00% | 16.50% | 16.50% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [DF-H API](https://lmspeed.net/provider/newapi-df-h-com) | 0.00% | 0.00% | 46.75% | 46.75% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Hizui API](https://lmspeed.net/provider/newapi-hizui-cn) | 0.00% | 27.28% | 47.74% | 47.74% | — | — | 1 | 21d 24h | 22d ago | 21m ago |
| [不知道叫啥](https://lmspeed.net/provider/newapi-kl-edu-kg) | 0.00% | 0.00% | 18.44% | 18.44% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Murycarry API](https://lmspeed.net/provider/newapi-murycarry-asia) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Netlib API](https://lmspeed.net/provider/newapi-netlib-re) | 0.00% | 0.00% | 52.11% | 52.11% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [NewAPI502](https://lmspeed.net/provider/newapi502) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Ngrok Proxy](https://lmspeed.net/provider/ngrok-proxy) | 0.00% | 0.00% | 89.85% | 89.85% | — | — | 1 | 17d 21h | 18d ago | 28m ago |
| [Nuizi API](https://lmspeed.net/provider/nuizi-api) | 0.00% | 0.00% | 36.38% | 36.38% | — | — | 1 | 24d 3h | 24d ago | 23m ago |
| [Octopus API](https://lmspeed.net/provider/octopus-api) | 0.00% | 0.00% | 20.28% | 20.28% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Ollama](https://lmspeed.net/provider/ollama-joyuerpa) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [OminiGen](https://lmspeed.net/provider/ominigen) | 0.00% | 0.00% | 30.30% | 30.30% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [OpenCode](https://lmspeed.net/provider/opencode-ai) | 0.00% | 0.00% | 5.24% | 5.24% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [OpenOpen8 API](https://lmspeed.net/provider/openopen8-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [OptAI](https://lmspeed.net/provider/optai-cap-1ktower-com) | 0.00% | 0.00% | 74.50% | 74.50% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [Dream API](https://lmspeed.net/provider/opus-gptuu-com) | 0.00% | 0.00% | 85.28% | 85.28% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Orange233 OneAPI](https://lmspeed.net/provider/orange233-oneapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Peterlyf HGB (HF Space)](https://lmspeed.net/provider/peterlyf-hgb-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [PICO AI](https://lmspeed.net/provider/picoai-top) | 0.00% | 0.00% | 51.15% | 51.15% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [AI Tools](https://lmspeed.net/provider/platform-aitools-cfd) | 0.00% | 0.00% | 78.35% | 78.35% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Plumage API](https://lmspeed.net/provider/plumage-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [Yuen Sze Hong](https://lmspeed.net/provider/poe-yuen-network-top) | 0.00% | 0.00% | 77.32% | 77.32% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Harui Edu API](https://lmspeed.net/provider/ppapi-harui-edu-kg) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [PPIO](https://lmspeed.net/provider/ppio) | 0.00% | 0.00% | 60.31% | 60.31% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [Pptoymit API](https://lmspeed.net/provider/pptoymit-api) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Probe API](https://lmspeed.net/provider/probe-api) | 0.00% | 0.00% | 70.81% | 70.81% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [专盾Procdn](https://lmspeed.net/provider/procdn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [箴理科技](https://lmspeed.net/provider/provider) | 0.00% | 0.00% | 77.19% | 77.19% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Kauboo API](https://lmspeed.net/provider/proxy-kauboo-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 22h | 18d ago | 16m ago |
| [Punklorde17 API](https://lmspeed.net/provider/punklorde17-api) | 0.00% | 0.00% | 18.42% | 18.42% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Qwen](https://lmspeed.net/provider/qwen-chat-aigpu-cn) | 0.00% | 0.00% | 56.46% | 56.46% | — | — | 1 | 29d 24h | 30d ago | 34m ago |
| [QZZ CLI Proxy](https://lmspeed.net/provider/qzz-cli-proxy) | 0.00% | 0.00% | 37.14% | 37.14% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [Realpics](https://lmspeed.net/provider/realpics) | 0.00% | 0.00% | 3.85% | 3.85% | — | — | 1 | 29d 23h | 30d ago | 30m ago |
| [Right Code](https://lmspeed.net/provider/right-codes) | 0.00% | 0.00% | 32.12% | 32.12% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [Rix](https://lmspeed.net/provider/rix-chataiapi) | 0.00% | 0.00% | 64.78% | 64.78% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [DDNSTO](https://lmspeed.net/provider/rpi-sl-api-kooldns-cn) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Saipubw API](https://lmspeed.net/provider/saipubw-api) | 0.00% | 0.00% | 23.02% | 23.02% | — | — | 1 | 29d 23h | 30d ago | 21m ago |
| [San Baby AI](https://lmspeed.net/provider/san-baby-ai) | 0.00% | 0.00% | 6.89% | 6.89% | — | — | 1 | 29d 23h | 30d ago | 22m ago |
| [SeoSycy API](https://lmspeed.net/provider/seosycy-api) | 0.00% | 0.00% | 62.02% | 62.02% | — | — | 1 | 29d 24h | 30d ago | 35m ago |
| [南北红豆](https://lmspeed.net/provider/shinve-eu-cc) | 0.00% | 0.00% | 24.85% | 24.85% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [SJ FRP API](https://lmspeed.net/provider/sj-frp-one-43069) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Koyeb Proxy](https://lmspeed.net/provider/smnet-koyeb-proxy) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [SMNet Studio](https://lmspeed.net/provider/smnet-studio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Square LLM Hub](https://lmspeed.net/provider/square-llm-hub) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 24m ago |
| [酸枝云](https://lmspeed.net/provider/suanzhi-cloud) | 0.00% | 0.00% | 63.85% | 63.85% | — | — | 1 | 29d 24h | 30d ago | 33m ago |
| [Sub2API](https://lmspeed.net/provider/sub-adrenjc-cn) | 0.00% | 0.00% | 33.18% | 33.18% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [GPT0 Shop API](https://lmspeed.net/provider/sub-gpt0-shop) | 0.00% | 52.27% | 75.61% | 75.61% | — | — | 3 | 4d 21h | 15d ago | 16m ago |
| [Cita777 Sub API](https://lmspeed.net/provider/sub1-cita777-me) | 0.00% | 0.00% | 4.16% | 4.16% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-fenglq-com) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 17d 21h | 18d ago | 16m ago |
| [Sub2API](https://lmspeed.net/provider/sub2api-ttzqmel-cn) | 0.00% | 0.00% | 47.43% | 47.43% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Soul 公益站](https://lmspeed.net/provider/sunlea-de) | 0.00% | 0.00% | 40.97% | 40.97% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Supabase AI Proxy](https://lmspeed.net/provider/supabase-ai-proxy) | 0.00% | 0.00% | 31.51% | 31.51% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [温云](https://lmspeed.net/provider/sxtuyxrxcgim-ap-northeast-1-clawcloudrun-com) | 0.00% | 0.00% | 18.38% | 18.38% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [TBAI API](https://lmspeed.net/provider/tbai-api) | 0.00% | 0.00% | 5.18% | 5.18% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [TeamPlus](https://lmspeed.net/provider/teamplus) | 0.00% | 0.00% | 10.59% | 10.59% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [Cerebras Sandbox](https://lmspeed.net/provider/v-ag-api-eu-cc) | 0.00% | 0.00% | 16.97% | 16.97% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Veloera (HF Space)](https://lmspeed.net/provider/veloera-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [Wataruu CLI Proxy](https://lmspeed.net/provider/wataruu-cli-proxy) | 0.00% | 0.00% | 15.49% | 15.49% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [APIKEY 公益站](https://lmspeed.net/provider/welfare-apikey-cc) | 0.00% | 0.00% | 27.47% | 27.47% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [无限畅享版](https://lmspeed.net/provider/wuxian-changxiangban) | 0.00% | 0.00% | 9.23% | 9.23% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [6i2](https://lmspeed.net/provider/www-6i2-com) | 0.00% | 0.00% | 7.11% | 7.11% | — | — | 1 | 29d 23h | 30d ago | 15m ago |
| [Completions](https://lmspeed.net/provider/www-completions-me) | 0.00% | 0.00% | 0.74% | 0.74% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [Dialagram](https://lmspeed.net/provider/www-dialagram-me) | 0.00% | 0.00% | 4.21% | 4.21% | — | — | 1 | 29d 23h | 30d ago | 17m ago |
| [至强API](https://lmspeed.net/provider/www-go1c-cn) | 0.00% | 0.00% | 4.88% | 4.88% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [Harui](https://lmspeed.net/provider/www-harui-edu-kg) | 0.00% | 0.00% | 47.15% | 47.15% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [逆龙傲公益站](https://lmspeed.net/provider/www-nlacloud-shop) | 0.00% | 0.00% | 39.08% | 39.08% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [OhMyGPT](https://lmspeed.net/provider/www-ohmygpt-com) | 0.00% | 0.00% | 78.32% | 78.32% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [QQ Code](https://lmspeed.net/provider/www-qqcode-cc) | 0.00% | 0.00% | 66.34% | 66.34% | — | — | 1 | 29d 23h | 30d ago | 19m ago |
| [GOU API](https://lmspeed.net/provider/www-rc-yun-cn) | 0.00% | 0.00% | 41.86% | 41.86% | — | — | 1 | 29d 23h | 30d ago | 20m ago |
| [WXKYW API](https://lmspeed.net/provider/wxkyw-dpdns-org) | 0.00% | 0.00% | 78.51% | 78.51% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [Wxstudio](https://lmspeed.net/provider/wxstudio) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 30m ago |
| [wzjself中转站](https://lmspeed.net/provider/wzjself-org) | 0.00% | 0.00% | 46.27% | 46.27% | — | — | 1 | 29d 23h | 30d ago | 18m ago |
| [线衣api](https://lmspeed.net/provider/xianyi-zeabur-app) | 0.00% | 0.00% | 0.01% | 0.01% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xinapi](https://lmspeed.net/provider/xinapi) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 29m ago |
| [Xinference](https://lmspeed.net/provider/xinference) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Xmdbd](https://lmspeed.net/provider/xmdbd) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 23h | 30d ago | 28m ago |
| [羊羊羊的API](https://lmspeed.net/provider/yangyangyang-api) | 0.00% | 0.00% | 39.10% | 39.10% | — | — | 1 | 29d 24h | 30d ago | 32m ago |
| [YouYouMao API](https://lmspeed.net/provider/youyoumao-site) | 0.00% | 0.00% | 1.49% | 1.49% | — | — | 1 | 29d 23h | 30d ago | 16m ago |
| [YSQD CLI Proxy](https://lmspeed.net/provider/ysqd-cli-proxy) | 0.00% | 0.00% | 18.06% | 18.06% | — | — | 1 | 29d 23h | 30d ago | 23m ago |
| [中软 VO (HF Space)](https://lmspeed.net/provider/zhongruan-vo-hf) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [Zone Veloera](https://lmspeed.net/provider/zone-veloera) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 29d 24h | 30d ago | 31m ago |
| [左大臣](https://lmspeed.net/provider/zuodachen-zdc-mom) | 0.00% | 0.00% | 0.00% | 0.00% | — | — | 1 | 24d 3h | 24d ago | 16m ago |
| [国信新网](https://lmspeed.net/provider/zygf-guoxincloud-cn-1025) | 0.00% | 0.00% | 76.38% | 76.38% | — | — | 1 | 29d 23h | 30d ago | 27m ago |

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
